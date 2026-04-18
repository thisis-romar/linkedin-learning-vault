---
type: course
slug: windows-10-networking-22602895
url: "https://www.linkedin.com/learning/windows-10-networking-22602895"
duration_minutes: 74
duration: 1h 14m
exercise_files: false
tags:
  - course
  - topic/devops
  - topic/it-help-desk
  - topic/network-and-system-administration
status: not-started
created: 2026-04-17
---

# Windows 10: Networking

> Learn networking with Windows 10. This step-by-step course demonstrates how to connect a Windows 10 machine to an existing network and manage a variety of network settings: configuring IP settings and network connectivity, configuring wireless networking settings, and configuring and maintaining network security and preferences. Instructor Joli Ballew shows you how to get connected to the internet

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895) | 1h 14m

## Instructor

- [[Joli Ballew]]

## Table of Contents

### Introduction

#### Understanding Windows 10 networking
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/understanding-windows-10-networking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/understanding-windows-10-networking?u=76281980&t=0)** - [Joli] Have you ever wanted to know how to connect to various kinds of networks?
>
> **[0:04](https://www.linkedin.com/learning/windows-10-networking-22602895/understanding-windows-10-networking?u=76281980&t=4)** Understand what happens after you connect to a network and how a computer functions on that network?
>
> **[0:10](https://www.linkedin.com/learning/windows-10-networking-22602895/understanding-windows-10-networking?u=76281980&t=10)** And more specifically, how does your computer know how to communicate with others?
>
> **[0:14](https://www.linkedin.com/learning/windows-10-networking-22602895/understanding-windows-10-networking?u=76281980&t=14)** You'll learn that and a lot more in my course.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-networking-22602895/understanding-windows-10-networking?u=76281980&t=17)** Hi, I'm Joli Ballew, and I've written almost 60 books on computer technologies.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-networking-22602895/understanding-windows-10-networking?u=76281980&t=22)** With my course, you'll learn multiple ways to access, secure, and manage the networks you connect to.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-networking-22602895/understanding-windows-10-networking?u=76281980&t=28)** You'll learn how to configure network adapters and troubleshoot common and not so common problems.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-networking-22602895/understanding-windows-10-networking?u=76281980&t=33)** You'll become familiar with the networking terms you need to know, like DHCP, TCPIP, DNS, and others.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-networking-22602895/understanding-windows-10-networking?u=76281980&t=40)** So what are you waiting for?
>
> **[0:42](https://www.linkedin.com/learning/windows-10-networking-22602895/understanding-windows-10-networking?u=76281980&t=42)** Let's get started!

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (1), tcpip (1), dns (1)
> **Code Keywords:** let (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [joli] (1)


### 1. Configure IP Settings and Network Connectivity

#### Connect to the internet
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=0)** - [Instructor] It doesn't matter whether you've just purchased your first Windows 10 computer or if you're an experienced user.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=7)** The first thing you need to do is get connected to a network so that you can access the internet.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=12)** Networks are used to send, receive, and request data between computers.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=18)** This connection can be wired or wireless.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=22)** A wired connection uses an ethernet cable, and a wireless connection uses wireless hardware including network cards and access points.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=30)** By far, the easiest way to connect is with ethernet.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=34)** You use an ethernet cable to connect your computer to a router, an ethernet extender, or an ethernet wall port.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=41)** If you have a newer laptop, it might not have an ethernet port though, and in this case, you'll need to use a converter.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=48)** If you're going to use a wireless network, you won't have a physical connection.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=52)** In order to access this kind of network, you'll need to select that wireless network from the network list.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=58)** Follow along on your own computer if you can.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=61)** Click the network icon on the task bar and click the network to connect to.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=72)** Place a check and connect automatically if you wish, and then click connect.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=77)** Now type the security key.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=80)** That's the password.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=82)** Now press next.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=84)** If this is the first time you've connected to this network, you should be prompted to choose whether or not you want to let your computer be visible on it.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=92)** If you see this prompt, click yes if it's a network you trust, like one in your home, or no if you're in a public place, like a coffee shop.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=104)** There are several popular web browsers including Microsoft Edge, which comes with Windows 10.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=110)** You can locate that from the search icon if it's not on the task bar already.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=115)** While Edge is the default browser, you could also choose Chrome, Firefox, or others.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=121)** If you prefer another browser over Edge, follow along to set it as the default in settings.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=128)** Click the start icon, click settings, click apps, and then default apps.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=139)** Locate web browser and click it.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=144)** Choose the browser you'd like to set as the default.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=149)** Now you can close the window.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=152)** Now let's talk about public versus private networks.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=156)** Earlier, if you connected to a local area network and told Windows, you trusted it, Windows marked this network as private.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=165)** To see what you've selected, click start, settings, and network and internet.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=174)** When the network is private as it is here, you can access the resources on it.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=180)** To see the resources, you can open File Explorer and click network.
>
> **[3:04](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=184)** You can see my network is private, so let's do that quickly.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=189)** File Explorer is often located on the task bar.
>
> **[3:16](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=196)** Here, I can see additional computers and resources on my private local network.
>
> **[3:22](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=202)** If you decide you don't want to access these resources or have your computer visible on the network, you can change the type from private to public.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=214)** Let's return to the window where we were in settings under network and internet.
>
> **[3:39](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=219)** Underneath your network, click properties.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=224)** Here is where you change the network profile from private to public.
>
> **[3:49](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=229)** If yours is set to public and you'd like it to private, you can make that change here as well.
>
> **[3:59](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=239)** You can also change the network you're connected to.
>
> **[4:02](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=242)** You can see all available networks by clicking the network icon on the task bar.
>
> **[4:09](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=249)** I have several networks available to me, but only a couple are mine.
>
> **[4:13](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=253)** The others belong to my neighbors.
>
> **[4:15](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=255)** You can see most of them have a lock icon on them.
>
> **[4:18](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=258)** This means they'll require a password to connect.
>
> **[4:23](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=263)** I'll choose NotYourWifi.
>
> **[4:25](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=265)** This is a network I offer to guests and it's a 2.4 gigahertz network that my older wifi devices can also use to connect to the internet.
>
> **[4:34](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=274)** Not all older devices can see or use a five gigahertz network.
>
> **[4:40](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=280)** I'll remove connect automatically and click connect, and here I'll enter the security key and I'll click next.
>
> **[4:49](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=289)** Here's the prompt I talked about earlier.
>
> **[4:52](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=292)** Here's where we answer the question, do you want to allow your PC to be discoverable by other PCs and devices on the network?
>
> **[5:00](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=300)** Notice it says, we recommend allowing this on your home and work networks, but not on public ones.
>
> **[5:06](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=306)** I'll click yes.
>
> **[5:10](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=310)** Now, you can connect to a network in Windows 10.
>
> **[5:13](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=313)** You can select a default web browser for surfing the internet, and you can change the setting to private or public or back, and you can also change networks when necessary.
>
> **[5:24](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=324)** Go ahead and explore the networks you have available, and when you're ready, move on to the next movie.

> [!info]- Semantic Content
>
> **Code Keywords:** private (9), public (7), let (4), case, (1), default. (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** make (1)
> **Versions:** 2.4 (1)
> **Tools:** firefox (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Network profiles
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=0)** - [Instructor] Networks come in all shapes and sizes.
>
> **[0:03](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=3)** A network for a home user often consists of a router purchased from a big box store or one leased from an ISP.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=11)** A home network might also have three or four computers or laptops, a shared printer, maybe even a hand handful of tablets or smartphones.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=19)** Think about the network you have set up in your home or small office.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=23)** Does it look similar to this?
>
> **[0:25](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=25)** A network for a small business might include a single network server, a dozen workstations, and a few shared devices.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=32)** A network for a larger corporation or enterprise could consist of hundreds of computers spread over several sub networks complete with all kinds of connected hardware.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=43)** Thus, business networks are generally more robust than home networks.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=47)** If you work for or own a small to medium-sized business, this might look familiar.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=53)** When you join a network, no matter what kind of network it is, a network profile is applied.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=58)** We talked about this in a previous movie.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=61)** There are two profiles available, public and private.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=64)** There is another type of network profile, though and that's the domain profile.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=69)** A domain is used to authenticate users, manage users' access to resources, and store and manage user and company data, and it keeps the network and its resources secure.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=81)** Network profiles are preset configurations that offer the default security and sharing settings to any network you connect to automatically.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=90)** Private network profiles are configured for homes and small businesses.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=95)** Your computer is visible on this network.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=97)** You can access shared resources like printers and shared backup devices, and network discovery is turned on which is what makes a computer discoverable on this kind of network.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=109)** The public network profile is configured for hotels, coffee shops, libraries, and more.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=115)** Your computer won't be visible to others here and you shouldn't be able to see anyone else's.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=120)** There are generally no shared printers or other resources and network discovery is turned off automatically.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=127)** Domain networks are configured for large businesses, like enterprises.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=132)** Resources are available, but users need the proper permissions to access them.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=137)** Windows decides what network profile to apply by how you answer the question regarding discoverability when you join it.
>
> **[2:25](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=145)** We talked about that prompt and saw it in the last movie.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=149)** For public and private networks, if you say it's okay to make your device discoverable on a network, the setting is configured as private.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=156)** Otherwise, it's set to public.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=158)** In any instance where Windows doesn't know what profile to apply, it applies the public profile.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=164)** You don't have to worry too much about the domain profile.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=167)** You know when you're connecting to a domain because the connection and credentials will have already been set up by a network administrator.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=174)** To see the type of network profile you're connected to, right-click the Network icon on the Task bar and click Open Network & Internet settings.
>
> **[3:04](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=184)** Notice the network here is private.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=187)** This means I'm able to access network resources that are shared.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=192)** You'll have problems accessing local resources if the network type is set to public when it should be set to private.
>
> **[3:19](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=199)** If you've noticed, say that you can't print to a local printer or access shared files or sync passwords with other computers, this could be the problem.
>
> **[3:27](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=207)** To sum up, there are three profile types, private, public, and domain.
>
> **[3:33](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=213)** The profile that's applied depends on many factors, but mainly what you tell Windows about the network the first time you connect.
>
> **[3:41](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=221)** You can change a profile from private to public or public to private, but domain profiles are managed by and secured by network administrators and can't be changed by general users.

> [!info]- Semantic Content
>
> **Code Keywords:** public (9), private (9)
> **Cross-References:** we talked about (2), in the last (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Env Vars:** isp (1)
> **UI Navigation:** right-click (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Configure advanced profile sharing options
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=0)** - [Instructor] Every time you connect to a network, Windows applies a network profile.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=5)** In the last movie, you learned that there are three: private, public, and domain.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=11)** Each profile has its own default configuration settings, and these are available to view and change in the Network and Sharing Center.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=19)** Let's open that.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=21)** Right-click the network icon on the task bar, and select Open Network and Internet Settings.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=28)** Click Wifi, and then click Change Advanced Sharing Settings.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=37)** To see the settings associated with a private network profile, expand Private if it isn't already.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=43)** Here you can see that both network discovery and file and print sharing are enabled.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=50)** These are the default settings, but you can make changes if you like.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=54)** You may want to leave your computer discoverable so that you can see other computers on the network, but would like to disable access to local printers, shared files, and other resources, for the users on that network.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=65)** Now expand Guest or Public.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=68)** You can see here that discovery and file and print sharing are turned off by default.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=74)** There might be instances where you want to make a change to these settings.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=77)** For example, perhaps you want to share a local printer with users on a public network that you've created.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=83)** In a case like this, simply tick the desired box, and then save the changes to the profile.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=89)** Back in Advance Sharing Options, expand All Networks.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=95)** Again, you can make changes to the default settings.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=99)** Perhaps you've always wanted to allow users to access your public folders.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=103)** If so, you can enable the setting Turn on Sharing, so anyone with network access can read and write in the public folders.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=112)** Public folders are public, after all, so this might be a setting you'd like to change, especially if you share data with others regularly over this network.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=121)** You can also enable media streaming.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=123)** Doing so lets you share the media that's stored on your computer with others on the network.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=128)** To get started, click Choose Media Streaming Options, and click Turn on Media Streaming.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=135)** What you see here will depend on your network setup, and it will offer the option to choose which computers on your network will have access to the media you decide to share.
>
> **[2:25](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=145)** This is worth configuring if you store a lot of media on a single computer, and want to be able to access that from other places.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=152)** I'll click Cancel.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=155)** If you're connected to a domain, you'll see a domain option in the Advanced Sharing Settings as well.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=160)** Because network administrators generally configure these settings, though, what you'll see will depend on how your administrator has configured the domain.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=168)** One thing to remember, though, before you move on to the next movie, is that Windows default settings are configured a certain way for a reason, and that reason is to keep your data and your computer as safe and secure as possible.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=180)** So, be careful when you make changes here.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=183)** That said, I'll go ahead and click Cancel.
>
> **[3:05](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=185)** You can click Cancel too, if you're following along.

> [!info]- Semantic Content
>
> **Code Keywords:** public (7), private (3), let (1), default. (1), this, (1)
> **CLI Commands:** make (4)
> **Prerequisites:** setup (1), configure (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** right-click (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Network connectivity: TCP/IP
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=0)** - [Instructor] If you've been watching this course from the beginning, you've connected to a network and are ready to send data over it.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=6)** There are lots of processes that help this happen, including protocols for how the data gets split up into packets and transferred using bits and bytes and ones and zeros.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=16)** We don't need to understand that right now though.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=19)** What we do need to understand is how the data you send knows which computer to go to, and how does a receiving computer know the data that's intended for it?
>
> **[0:28](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=28)** Well, for starters, each computer must be uniquely defined on the network and that identification starts with an IP address.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=37)** An IP address is much like the address assigned to your home.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=41)** An IP address defines the computer and its location on the network in the same way your house address defines your home's location, street, city, and zip code.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=50)** In technical terms, the two main functions are to define the host computer, as well as that computer's location on the network.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=58)** Most of the time, a computer obtains its IP address from a DHCP server, which we'll talk about in the next movie.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=66)** The IP address, along with other addressing technologies, are only part of the networking picture though.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=71)** Let's take a look at the local area connection dialogue box to see our IP address.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=77)** Follow along with me if you can.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=80)** Right click the network icon on the task bar and click open network in internet settings.
>
> **[1:28](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=88)** Notice what kind of connection you have, wired or wireless.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=92)** I'm connected with a wireless connection and it's a private network.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=95)** Scroll down.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=97)** Click view hardware and connection properties.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=103)** You'll see a lot of terms here you may not be familiar with.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=107)** You can scroll through them.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=109)** I'm going to scroll down to wifi and I'm going to look at my IPv4 address.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=118)** We talked about these addresses earlier, and here it is.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=121)** It's unique on the network and represents your computer.
>
> **[2:04](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=124)** There's also an IPv6 address.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=127)** IPv6 is a newer IP technology that greatly increases the number of IP addresses available to the general public.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=135)** You can see other information here too.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=138)** For instance, you can see how long the computer has had this particular IP address.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=143)** IP addresses are not granted forever, if they're granted by DHCP server, which you'll learn about later.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=149)** When the lease expires, a new lease is granted.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=152)** This helps keep the pool of IP addresses valid and up to date.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=156)** Also, notice the default gateway.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=158)** This is the IP address of the router that allows traffic to move into and out of the network.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=164)** I've highlighted an IPv6 address, but you may see an IPv4 address.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=169)** Although you don't see anything here that specifically mentions TCP/IP, I'd still like to talk a little about that.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=176)** TCP/IP is the default wide area network protocol that provides communications across a variety of network types and infrastructures.
>
> **[3:05](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=185)** In order for data to travel across networks, such as those separated by a router, TCP/IP must be used.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=192)** TCP/IP plays a big part in IP addressing.
>
> **[3:16](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=196)** Now, let's locate the physical address called a MAC address, or media access control address.
>
> **[3:23](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=203)** Like an IP address, this is also unique, but this one never changes.
>
> **[3:28](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=208)** This address is a physical address generally supplied by the manufacturer of your computer.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=214)** If you're heading right into the next movie, you can leave these windows open if you like.
>
> **[3:39](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=219)** If you're going to take a break, feel free to close all dialogue boxes and windows.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (4), dhcp (2), mac (1)
> **Code Keywords:** let (2), private (1), public (1), break, (1)
> **UI Navigation:** scroll down (2), go to (1)
> **Analogies:** picture (1), for instance (1), such as (1)
> **Cross-References:** in the next (1), we talked about (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Network connectivity: DHCP and DNS
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=0)** - [Instructor] When working with TCP/IP addresses, you can choose to assign the addresses manually or let Windows assign them automatically.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=8)** DHCP, or Dynamic Host Configuration Protocol, is used to assign IP addresses automatically.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=16)** It's likely that DHCP is enabled for your network connection.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=20)** Let's find out.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=21)** As in previous movies, let's open the Network and Sharing Center.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=29)** Click Status and scroll down.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=32)** Click View hardware and connection properties.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=37)** Locate DHCP enabled and see what's listed.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=41)** You can see mine says, "Yes."
>
> **[0:44](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=44)** You can also see that it has an IPv4 address, and it has a lease.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=49)** It is possible to manually input a static IP address.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=53)** You might want to do this for a computer that you would like users to connect to and whose IP address should never change.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=59)** This could be a data server, a print server, a gaming machine, and so on.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=64)** To set a static IP address, return to the Status tab.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=69)** Click Change adapter settings.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=72)** Right-click the active network and choose Properties.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=77)** From there, click Internet Protocol Version 4 TCP/IPv4, and click Properties one more time.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=86)** Here's where you type your own IP address.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=89)** If you decide to configure a static address, there's a lot to consider.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=93)** Remember the analogy of the addressing system for neighborhoods.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=97)** Imagine if two or more houses had the same address.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=100)** The mail, pizza delivery, and even emergency services would not know which house to go to.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=106)** You have to make sure that no other note on the network has that address and that any DHCP server or router won't try to give that address to any computer it manages.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=115)** Once you know what IP address to use, click OK.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=120)** I'll click Cancel.
>
> **[2:04](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=124)** Note that if a computer can't get an IP address from a DHCP server, a no-static IP address is set and addresses automatically assigned to it by Windows.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=134)** This is called Automatic IP Addressing.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=138)** APIPA uses a reserved range of 169.254.0.0 to 169.254.255.254 It's a Windows-based feature that enables communications when no other options are available.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=155)** DNS, or Domain Name Service, is another term you'll run across when studying networks.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=161)** DNS is the system that enables users to type a website's name into a web browser instead of its IP address.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=168)** DNS is responsible for name resolution.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=172)** Name resolution is important because without it, users would have to know the IP address of each web website they want to go to, and they'd have to type that address in manually instead of typing its common name.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=183)** To see the current DNS server assigned to your computer, return to the View Hardware and Connection Properties window.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=189)** Here's one DNS server entry, and you'll see that there are likely additional ones.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=195)** So let's sum up the terms I've introduced here.
>
> **[3:18](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=198)** IP stands for Internet Protocol.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=201)** TCP/IP stands for Transmission Controlled Protocol/Internet Protocol, and a physical address is also called a MAC address and is usually assigned by the manufacturer of the network card installed in your computer.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=214)** DHCP is Dynamic Host Configuration Protocol, APIPA is Automatic Private IP Addressing, and DNS is Domain Name Service.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=224)** Before moving on, take one last look at the Hardware and Connection Properties page and make sure you have some understanding of the terms you see there.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (6), dns (6), tcp (3), apipa (2), mac (1)
> **Code Keywords:** let (4), static (4), private (1)
> **UI Navigation:** go to (2), open the (1), scroll down (1), right-click (1)
> **CLI Commands:** make (2), find (1)
> **Versions:** version 4 (1), 169.254.0 (1), 169.254.255 (1)
> **Definitions:** is called (1), stands for (1)
> **Prerequisites:** configure (1), make sure you have (1)
> **Analogies:** imagine (1)

#### Configure network adapters
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=0)** - [Instructor] A network adapter is generally located inside a computer.
>
> **[0:04](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=4)** It enables the computer to connect to a network.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=7)** The adapters can be wired or wireless.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=11)** There are external network adapters too, and these connect to USB ports to provide connectivity when no other adapter is available.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=19)** To see the network adapters installed on your computer, follow these steps.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=23)** First, open Control Panel.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=28)** Then, under Network and Internet, choose View network status and tasks.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=34)** Then click Change adapter settings.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=38)** If you've been watching this course from the beginning, you know there are other ways to get here.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=43)** You can see here that I have three types of adapters.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=46)** One is a wifi adapter, and it's connected to my network called Rockstars.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=51)** The other is a Bluetooth adapter, and it's not connected to anything.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=55)** There's also an ethernet option.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=58)** If you're following along, leave this window open for now and minimize it.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=64)** You can also see all of the adapters installed on your computer from Device Manager.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=71)** Let's open that.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=74)** Device Manager lets you troubleshoot devices, update drivers, and perform other tasks.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=78)** Let's expand Network adapters.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=83)** You can see here that I have more options than just my wireless adapter and my Bluetooth adapter and ethernet.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=90)** There are also various WAN miniports.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=93)** These kinds of adapters are virtual adapters that allow Windows to split a network in two.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=98)** For instance, you can connect to a laptop using ethernet, and at the same time, use that laptop to create a wireless hotspot for other devices.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=108)** Whatever you see, let's double click the adapter that's currently active and connected.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=113)** For me, that's my wifi adapter.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=116)** You can perform several tasks here.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=119)** To see if there's an updated driver available, click the Driver tab and click Update Driver.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=125)** Tell Windows to search for a driver, and if one becomes available, consider installing it.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=130)** You can see that the driver for this adapter is up to date.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=134)** If you're having problems with an adapter, this may resolve the problem if a newer driver is available.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=139)** If it doesn't, you can always uninstall the driver and reboot the computer.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=144)** Here's the option to uninstall.
>
> **[2:26](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=146)** Uninstalling removes the device, but when you reboot the computer, it's reinstalled automatically, so likely any existing issues will be resolved.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=156)** Let's click the Events tab.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=158)** You can see that I've recently tried to update the driver, and if I scroll back a little, I can see when the original driver was installed.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=166)** Let's click Resources.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=168)** The resources are usually configured optimally during installation, so there's likely not much you can do here.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=174)** And although there are other tabs to explore, for the general network technician, there's often no need to.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=181)** I'll close Device Manager now and show you a few more configuration options.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=186)** Let's return to the window we had open earlier that showed the available adapters that we use often.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=192)** Decide which adapter you'd like to configure and right click it.
>
> **[3:16](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=196)** I'll choose my wifi adapter again.
>
> **[3:19](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=199)** When I right click, you'll see that Disable is the first option.
>
> **[3:23](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=203)** This will cause the adapter to become inoperable, at least until I opt to reenable it.
>
> **[3:28](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=208)** Another option is to connect or disconnect, but this is only available for wifi networks.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=214)** Ethernet stays connected all the time, and Bluetooth is generally on demand.
>
> **[3:38](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=218)** Another option is Status.
>
> **[3:40](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=220)** If you click Status, you'll see all kinds of information.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=223)** Let's do that.
>
> **[3:45](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=225)** Here, you can view the connection type, IP connectivity information, the name of the network, and more.
>
> **[3:52](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=232)** This information can prove helpful if you're having problems with a specific adapter.
>
> **[3:57](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=237)** I can see here that the adapter is both sending and receiving data.
>
> **[4:01](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=241)** When troubleshooting, you might sometimes see that an adapter is doing one but not the other.
>
> **[4:07](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=247)** This can happen if your TCPIP settings aren't configured to obtain an IP address automatically, but there are other reasons it can happen as well.
>
> **[4:15](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=255)** If you find there's a problem like this, you can click Diagnose to see if Windows can fix it for you.
>
> **[4:21](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=261)** For now, let's just make a note of what's here.
>
> **[4:24](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=264)** There are other options you can explore if you'd like, and feel free to do that.
>
> **[4:28](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=268)** For now, I'm happy to have covered these basic options to get you more comfortable with the networking tasks that you might need to accomplish as you start diving a little deeper into networking technologies.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), type, (1), this, (1)
> **Env Vars:** usb (1), wan (1), tcpip (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Manage default printers
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=0)** - [Narrator] Have you noticed, especially if you switch among wireless networks often, that each time you try to print something, Windows default to the last printer you used?
>
> **[0:09](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=9)** This is supposed to happen, and most home and small business users appreciate the convenience.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=14)** However, if you're mobile like me and switch among wireless networks often, you might not like this setting.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=20)** You can change this behavior and take control of your printer preferences instead of letting Windows choose.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=27)** To do this, click start, and then settings, double click devices.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=32)** And from there, click printers and scanners.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=36)** These are the printers I have access to for my laptop.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=40)** In reality, there's only one though.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=42)** The others are apps.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=43)** However, the process is the important thing here.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=46)** So scroll down to the bottom and look for the option, let Windows manage my default printer.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=52)** As you can see here, it's selected.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=55)** If you want to manage your own printers, deselect it.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=59)** With that done, click the printer you use most often and click manage.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=64)** Now click printer properties.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=69)** What you see here depends on the printer and any related software you've installed, so you'll have to look around.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=75)** I'll click preferences from the general tab to get started.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=80)** As we explore, click the tabs that you see.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=83)** I'll click paper quality.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=85)** Notice the paper source is automatic and the media is plain paper.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=90)** The quality settings are set to better, but I could change them to draft or best or even only print in black and white.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=98)** I'll click cancel.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=100)** Now click sharing.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=102)** This is where you can share your printer, and if you see advanced, you can click that as well.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=108)** You may see options that allow you to open the print queue, print a test page, run a troubleshooter, set printer properties and printing preferences, and see hardware properties.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=119)** When you're finished exploring, click cancel.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=122)** You should see most of the options that I see here.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=125)** You can open the print queue to see what's in line to print.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=128)** You can set the printer as the default.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=131)** You can print a test page, run a troubleshooter, view the properties, the preferences, and even see what's happening with the hardware.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=139)** Go ahead and explore as you'd like, and then click the back button.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=143)** From here, if you see a printer you don't need and you want to remove it, just click it and then click remove device.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=149)** I'll choose OneNote Desktop.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=152)** Honestly, I don't even know where this came from, so I'll click remove device.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=157)** And finally, you'll only have access to the printers on your local network or those configured as internet printers.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=164)** If you don't see a printer you expect to see, it may be that it's not shared for you.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=168)** Before moving forward, take a minute to explore the properties and preferences for the printers you have access to and make any changes you desire.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=176)** When you're finished, close all open windows.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2), this, (1), let (1), default. (1), from, (1)
> **UI Navigation:** open the (2), scroll down (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### Create a VPN
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=0)** - [Instructor] A VPN or virtual private network, is a type of network connection that enables users to securely connect to a remote computer or a network server using the internet as a connection medium.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=12)** VPNs have built in security and encryption technologies that enable data to be transmitted securely even when the actual network is out of the administrator's control.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=23)** VPNs enable offsite and remote employees to access corporate resources from anywhere, including hotels and hotspots without worrying about security.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=32)** The connection acts and feels like the users on the enterprises internet too.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=37)** And users don't have to do anything special to connect in most cases.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=41)** You can create a VPN from the network and sharing center or from settings.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=47)** Before you start though, you'll need to obtain the required server information and credentials from your company's network administrator or you'll need to sign up for a third party VPN service.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=58)** Once you have this information you're ready to create.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=61)** To do that, click start, click settings and double click network and internet.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=68)** Now click VPN.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=70)** Now you can choose to add a VPN connection, let's click that.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=75)** For the VPN provider I'll choose Windows.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=78)** I'll go ahead and fill this out with the information I have.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=82)** Yours will be different and personal to you.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=85)** For the VPN provider, I'll choose Windows, and for the connection name I'll type Landon Hotel.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=95)** I can also type the server name or address and I'll type the address.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=102)** I'll leave the VPN type set to automatic and I'll use a username or password to connect.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=111)** Now, I'll click save.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=113)** Once the VPN is available, you can connect to it from here by clicking it and clicking connect.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=121)** You can also choose it from the network list on the task bar.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=128)** Here's Landon Hotel.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=131)** You can also choose it from the network list on the task bar and here's Landon Hotel.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=137)** Once you're connected to the VPN you can access the same resources that you're able to access while sitting at your desk on company property provided the network administrator allows it.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=148)** The same network servers are available as are the printers and other shared resources.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=153)** VPNs have become a valuable resource for enterprises and remote employees and enable users to work securely even when they're away from the office.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=162)** If you have the information you need, then put it here and give it a try.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (10)
> **Code Keywords:** private (1), let (1), try. (1)
> **Prerequisites:** you'll need (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Configure Wireless Networking Settings

#### Connect to a wireless network
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=0)** - I'm sure you've connected to a wireless network before, perhaps from a laptop computer, a phone, or a tablet.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=7)** The process is often the same no matter the device.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=11)** A prompt generally appears informing you of the available networks and you click one to join.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=17)** Most people also opt to connect to a network automatically during this process.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=22)** You can also choose from a list of networks.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=25)** On a Windows 10 machine, just click the Network icon on the task bar.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=33)** You can tell Windows to remember the networks you connect to so that you can connect quickly and without prompting the next time you're in range of them.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=40)** I'll show you.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=43)** Here's the option to connect automatically.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=46)** However, if you change your mind about remembering a network perhaps because you'll never use it again, you'll want to forget the network.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=54)** You might also want to let Windows know not to look for that network when it's scanning.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=59)** This takes resources your computer doesn't need to be using.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=62)** Whatever the reason, to forget a network, click "Start", "Settings", and "Network and Internet".
>
> **[1:12](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=72)** Because you can only forget Wi-Fi networks, click "Wi-Fi" in the left pane.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=77)** Now you can click "Manage Known Networks" to see a list.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=83)** I have a long list.
>
> **[1:28](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=88)** To forget a network, simply click it and then click "Forget".
>
> **[1:37](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=97)** You can also connect to a network from Settings.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=101)** Let's look at a few more options and if you're following along, click the back button.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=106)** Here, I'll make sure Wi-Fi is selected and I'll click "Show Available Networks".
>
> **[1:54](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=114)** And here's that list again.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=116)** But what do you do when the wireless network you want to connect to doesn't appear?
>
> **[2:01](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=121)** In these cases, you'll need to join a wireless network manually.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=125)** You do this in the Network and Sharing Center.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=128)** You can get to the Network and Sharing Center from the link on the Wi-Fi Settings page.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=135)** Now, click "Set Up a New Connection or Network" and click "Manually Connect to the Wireless Network".
>
> **[2:23](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=143)** And click "Next".
>
> **[2:25](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=145)** Here's where you'll type the network name, choose an encryption type, and enter the security key.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=150)** That's the password.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=152)** All of which you can obtain from the local network administrator.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=156)** Once you've entered this information, you can start the connection immediately and connect to the network even if it isn't broadcasting.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=164)** You'll click "Next" to complete the wizard, but I'll just click "Cancel".
>
> **[2:52](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=172)** If the network you have connected to is metered, meaning you have to pay for the data you use, you'll want to configure it as a metered connection.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=181)** Doing so will disable Windows updates and application downloads for some applications.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=187)** To set a network as metered, return to Settings.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=191)** Again, open Network and Internet.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=194)** Make sure the Wi-Fi tab is selected in the left pane and click the connection in the right.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=200)** Scroll down and move the slider from off to on under "Set as Metered Connection".
>
> **[3:29](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=209)** When you turn on a metered connection, only priority Windows updates will be downloaded.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=215)** App downloads may be paused.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=217)** Start screen tiles may not update.
>
> **[3:39](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=219)** And offline files may not sync.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=223)** To sum up, you can connect to a wireless network in several ways.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=227)** You can connect from the Task Bar and from the Settings window and you can connect to a hidden wireless network from the Network and Sharing Center.
>
> **[3:55](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=235)** You can also mark a connection as metered when you're concerned about data usage.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=240)** Spend some time to look at any other settings available to you.
>
> **[4:03](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=243)** And when you're ready, close all open Windows.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type, (1)
> **Prerequisites:** you'll need (1), set up (1), configure (1)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - i (1)

#### Manage wireless networks
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=0)** - [Instructor] There's more to wireless networking than simply connecting to networks.
>
> **[0:04](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=4)** There are a lot of configuration options to explore.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=7)** Click the Network icon on the task bar to get started.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=12)** From here, you can quickly enable or disable Wi-Fi.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=16)** You might want to disable Wi-Fi if your battery power is low to keep windows from looking for wireless networks when you don't need one.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=24)** You also have access to Airplane Mode.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=27)** You'll enable airplane mode when you're told to by an airline pilot or in any instance when you need to disable all wireless network activity including Wi-Fi, bluetooth, GPS, and cellular.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=39)** You might also see the option to create and share a mobile hotspot.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=43)** If you're interested in that, it's best to configure it from settings.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=47)** Let me show you where that is.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=51)** Click Start, Settings, Network and Internet, and Mobile Hotspot.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=59)** Here's where you turn on your mobile hotspot.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=63)** Once enabled, the options to edit the default name and password given to it are available here.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=70)** Edit.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=72)** It's possible to change the name and to set a new network password.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=77)** You can also choose the network band.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=81)** I'll click Cancel and turn this off for now.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=84)** There's another setting that's unique to wireless networks and the computers that support them, and that's data usage.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=91)** From the Network and Internet option and settings, click Status to get there and then click Data Usage.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=98)** From here, you can see the information related to the networks you use.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=102)** Click Cancel and go ahead and click back and take a look at the other options you see.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=108)** There's a lot to explore here.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=110)** Make sure to look at the Status tab options, as well as the Wi-Fi tab options.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=115)** If you see an Ethernet tab, explore that as well.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=119)** When you're finished, close the Settings window.

> [!info]- Semantic Content
>
> **Best Practices:** it's best to (1), make sure to (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Env Vars:** gps (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Troubleshoot wireless network connectivity
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=0)** - [Instructor] Wireless connectivity problems occur infrequently.
>
> **[0:03](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=3)** But when they do, you should always try the most common solutions first.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=8)** Much of the time, especially for laptop users, it's disabled Wi-Fi.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=12)** It's easy to check to see if Wi-Fi is disabled on the laptop.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=16)** All you have to do is click the network icon on the taskbar and look at the Wi-Fi symbol in the bottom left corner.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=23)** If you find the icon is gray instead of blue, like it is here, you've likely found the problem.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=29)** Just click to enable.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=33)** If you set a connection to connect automatically, you'll be automatically connected, as we are here.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=40)** If this doesn't resolve your network problem, the next step is to see if a network adapter is installed, or if the wireless adapter has been disabled.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=48)** Let's locate that setting.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=50)** Right-click the network icon on the taskbar and click open network in Internet settings.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=57)** From the status page, you can see we have a problem.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=61)** Let's click Change adapter options.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=66)** As you can see here, the Wi-Fi adapter has become disabled.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=71)** To enable this adapter and resolve the problem, you can right-click and choose Enable.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=77)** If you give the adapter a minute, it will find the latest network or the most available one and connect to it automatically.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=85)** I'm going to leave this window open, so we can come back to it later.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=91)** Let's consider a different problem.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=93)** In this scenario, you have a wireless connection enabled and seemingly working perhaps because you can access the Internet, but you can't access local resources on the network.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=104)** In this case, it could be because the network is configured as Public instead of Private.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=110)** Here's how to see if this is the problem and correct it if it is.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=116)** Click Start, Settings, and return to Network & Internet.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=122)** From the Status tab, have a look.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=125)** You can see this is set to Public.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=128)** To change it, click Properties, and click Private.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=134)** And that should resolve this problem.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=138)** If these solutions don't fix your connection problems, you can try the Network Troubleshooter.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=143)** It comes with Windows 10 and can often locate the problem and resolve it.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=148)** Back at the taskbar, right-click the Network icon and click Troubleshoot problems.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=155)** If you're prompted to choose a network adapter, you can, or you can leave Choose all network adapters if that's an option.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=162)** I'll leave All network adapters selected and click Next.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=167)** Windows has a solution here to plug an ethernet cable into the computer.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=172)** I don't connect with an ethernet cable, so I'm going to skip this step and see what happens.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=178)** And here we go.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=179)** It looks like Windows found the problem, and it says, "The Wi-Fi adapter is disabled".
>
> **[3:04](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=184)** I'll click Try these repairs as an administrator and see what happens.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=191)** It looks like the problem has been fixed.
>
> **[3:13](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=193)** It says the Wi-Fi adapter is disabled.
>
> **[3:16](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=196)** That's fixed, so we'll close the troubleshooter.
>
> **[3:19](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=199)** And if you look back at the list of networks you can see I'm connected to my local one.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=204)** Finally, you might have a connectivity issue if your computer has a static IP address assigned to it when you should have an IP address automatically applied by ADHCP server.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=215)** To check to see if this is the problem, let's locate Change Adapter Settings again and go from there.
>
> **[3:42](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=222)** If you've been watching from the beginning, you know where to find this.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=227)** Here we'll right-click the adapter and select Properties.
>
> **[3:54](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=234)** Now we'll click Internet Protocol Version 4, and we'll click Properties again.
>
> **[4:01](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=241)** And as you can see here, we've got a static IP address applied.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=246)** If we change it to Obtain an IP address automatically and click Okay and close, it will probably solve our problems.
>
> **[4:14](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=254)** As you can see, there are a lot of ways to resolve networking problems.
>
> **[4:18](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=258)** You can look for the obvious first, such as a disabled Wi-Fi adapter or having airplane mode enabled.
>
> **[4:24](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=264)** You can move on to other options after that, including checking the network adapter status, running troubleshooters, and resolving DHCP issues manually.
>
> **[4:34](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=274)** For the most part, these techniques will resolve your wireless problems.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), public (2), private (2), static (2), case, (1)
> **UI Navigation:** right-click (4)
> **CLI Commands:** find (3)
> **Env Vars:** adhcp (1), dhcp (1)
> **Versions:** version 4 (1)
> **Analogies:** such as (1)
> **Best Practices:** you should always (1)
> **Warnings:** troubleshoot (1)


### 3. Configure and Maintain

#### Configure Windows Defender Firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=0)** - [Instructor] If you use a laptop and move around a lot, you connect to a lot of networks.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=5)** Most of those are private, like a network at home or work, while some are public, like those in hotels and coffee shops.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=12)** If you work in a corporate environment, you probably join a domain based network, as well.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=17)** Here are some of the networks I've connected to recently.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=20)** To see yours, go to Settings, Wi-Fi, and Manage known networks.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=26)** Have you ever wondered what keeps your computer safe in all of these different environments and how that safety is achieved?
>
> **[0:33](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=33)** Most of the time, at least when connected to a private or public network, it's your basic Windows Defender Firewall.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=40)** Go ahead and open Windows Defender Firewall on your own PC.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=44)** One way to do that is to search for firewall from the Taskbar.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=51)** Make sure to select Windows Defender Firewall.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=55)** When you open the firewall, you can immediately see which network profile has been applied to the connection you're using, and you can see the status.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=63)** Here, I'm connected to a private network.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=66)** My firewall is on and active, and it's green, so I know it's healthy.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=71)** If you're in charge of managing your own firewall and see that the firewall is turned off, you should look into why.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=77)** It may have been turned off because you installed a third party firewall, but it could be because malware has infiltrated the system.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=85)** Click turn Windows Defender Firewall on or off to see the next window.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=91)** You can see my firewall is configured properly, so I won't make any changes here.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=96)** However, if your firewall is turned off, and you're sure it should be turned on, go ahead and do that, and click Okay.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=104)** There are other places in Windows to check firewall status.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=108)** Search again for firewall and choose Firewall & network protection from the options.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=114)** Here we go.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=114)** You can see it's in Settings.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=119)** Again, you can see information about your firewall as well as options to manage virus and threat protection, account protection, device security, and more.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=128)** Having an active firewall is very important, because a firewall, by design, blocks undesirable and risky connections.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=136)** For example, Remote Desktop isn't set up to pass through a firewall by default.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=141)** Remote Desktop lets you access another computer remotely.
>
> **[2:25](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=145)** It's disabled because this opens the system up to allow remote users in.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=149)** If you want to use Remote Desktop, perhaps to access your work computer from home, you'll have to create an exception for it.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=156)** I'll show you how.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=158)** Let's return to Windows Defender Firewall, and notice the option on the left side, Allow an app or feature through Windows Defender Firewall, and click it.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=172)** If necessary, click Change settings so that you can see the options, and scroll down.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=178)** Look for the feature you want to allow.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=180)** For us, that's Remote Desktop.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=183)** I'll put a click here, and I'll decide that's okay over private networks as well as public, and I'll click Okay.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=191)** You can use the same technique to enable or disable other items in Windows Firewall.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=197)** Finally, if you're feeling exceptionally vulnerable, you can block all incoming connections.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=204)** Doing so won't cause you to lose access to the internet or cause you to be unable to send or receive email, but Windows will reject all uninvited incoming traffic.
>
> **[3:36](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=216)** You can do that again in Windows Defender Firewall.
>
> **[3:39](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=219)** From here, click Turn Windows Defender Firewall on or off, and then choose the block options for private and/or public, and when you're ready, click okay.
>
> **[3:53](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=233)** If and when you make changes to the firewall and want to return to the defaults, you can do that here.
>
> **[3:59](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=239)** Just click Restore defaults in the left pane.
>
> **[4:05](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=245)** Click Restore defaults again, click Yes, and there we go.
>
> **[4:11](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=251)** Go ahead and spend a few more minutes exploring the other options if you have time.
>
> **[4:16](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=256)** Note that you can click Troubleshoot my network, and you can click Advanced settings to see even more options for working with the firewall.
>
> **[4:26](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=266)** After that, return to the Settings window.
>
> **[4:28](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=268)** Click any options that interest you.
>
> **[4:31](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=271)** You might try Firewall notification settings, Advanced settings, which we'll explore in the next video, Device performance & health, Virus & threat protection, and more.
>
> **[4:42](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=282)** When you're ready, continue to the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** private (5), public (4), pass (1), default. (1), let (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (1), open the (1), scroll down (1)
> **Cross-References:** in the next (1), next video (1)
> **Warnings:** note that (1), troubleshoot (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)

#### Manage Windows Defender Firewall with advanced security
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=0)** - [Instructor] Windows Defender Firewall, shown here, is often the first line of defense to protect a computer from outside attacks.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=8)** It does this by providing a two-way vigilant inspection of all of the packets that carry data into and out of a network.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=16)** Rules define what type of data can move in or out.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=19)** Here, in Windows Defender Firewall, you have access to those rules.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=25)** Click Advanced settings to see them.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=32)** This opens Windows Defender Firewall with Advanced Security.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=37)** By clicking Monitoring, you can monitor the firewall.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=41)** You can see the state of the firewall, as well as other information.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=45)** If you'd like, you can pause this video and see what's offered there.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=49)** However, the power of Windows Firewall with Advanced Security doesn't reside here.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=54)** The real power lies in the inbound, outbound, and connection security rules containers in the left pane.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=61)** Click Inbound Rules to see the rules already in place, and now scroll down to something you recognize.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=68)** I'll scroll down to the remote desktop entries.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=71)** We talked about this feature in the last movie.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=78)** I'll double-click one of these, Remote Desktop-User Mode TCP-In.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=85)** If you're following along, double-click.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=89)** This is what the properties dialogue box looks like.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=92)** And here's the General tab.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=94)** Notice you can allow the connection, allow the connection if it's secure, or block the connection.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=101)** Let's look at the Advanced tab.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=104)** You can see this particular remote desktop rule is configured for all of the available profiles.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=110)** If the feature allows for it, you can change profile access here.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=116)** To categorize the inbound rules, you can filter them.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=120)** Let's click Profile at the top of the list.
>
> **[2:04](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=124)** These rules are associated with domain profiles, and these private, and if you expand this, you can see that some are private and public.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=135)** Of course, some are only public.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=139)** You can also filter by state.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=141)** You can do this on the right side of the window.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=144)** I'll click Filter by State and choose Filter by Enabled.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=149)** These are all of the inbound rules that are enabled at the present time.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=154)** Likewise, you can explore rules in the outbound rules area.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=158)** Again, you have options when you double-click an entry.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=167)** Finally, click the Connection Security Rules container.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=171)** You'll see there's nothing in there by default.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=173)** You can create your own rules here.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=176)** We'll create a connection security rule later in this course.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=180)** For now, go ahead and explore as desired, and when you're finished, close Windows Firewall with Advanced Security.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), private (2), public (2), this, (1), finally, (1)
> **UI Navigation:** double-click (3), scroll down (2)
> **Cross-References:** we talked about (1), in the last (1), later in (1)
> **Env Vars:** tcp (1)
> **Speakers:** - [instructor] (1)

#### Explore Windows Security
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=0)** - [Instructor] You learned about Windows Defender Firewall in a previous movie, as well as the advanced options.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=6)** Now let's look at the newest options in Windows 10, Windows Security.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=11)** Let's search for Windows Security from the task bar and open it.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=21)** Click Home.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=22)** Notice if anything has a yellow exclamation point on it or if anything is red.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=28)** If you see something like this, click the items to see how to resolve it.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=33)** All of mine are green, so I'm in good shape here.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=37)** Now, click Virus & threat protection.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=41)** Verify that there are no current threats and that updates are configured properly.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=48)** There are none here, and I have No action needed listed below.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=54)** Continue to work through the tabs, and when you get to Firewall & network protection, note that you can manage your firewall from here as you could with other areas of Windows as we discussed earlier.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=66)** Here's Account protection, and here are the options for the firewall.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=71)** You can also see options we already explored, like Allow an app through the firewall, Advanced settings, and Restore firewalls to defaults.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=81)** There's also a Network and Internet troubleshooter, which can come in handy if you run into problems.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=87)** Continue to browse through the tabs and resolve any issues you find.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=92)** Make sure to look at Device security and Device performance & health before you move on to the next movie.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (2), this, (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** we discussed (1)
> **Best Practices:** make sure to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Create a connection security rule
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=0)** - [Instructor] In this video, we'll discuss connection security rules.
>
> **[0:04](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=4)** Windows Firewall with advanced security, which is open here, has a lot of rules already configured in the inbound and outbound rules areas.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=14)** These rules apply to connections such as those created by applications like Remote Desktop and HyperV.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=21)** As we did in a previous movie, click each area to see the rules already in place, and note that you can create your own.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=28)** Just right-click, click new rule, and go from there.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=34)** You can define rules by programs, ports, use predefined rules, or create a custom rule.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=42)** The connection security rules area doesn't have anything in it though, and that's because you create these rules yourself.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=50)** These rules define how authentication occurs and under what circumstances, and can enhance the security of transmissions between computers.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=60)** You create a rule by right-clicking inside the empty pane and clicking new rule.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=67)** There are lots of types of rules you can create.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=71)** Let's talk a little bit about each one.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=74)** Isolation rules restrict connections based on credentials such as domain membership or the health of the computer.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=82)** Authentication exemption rules allow a single computer or a group of computers to connect without restrictions.
>
> **[1:28](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=88)** You base these rules on computer's IP addresses, their subnets, or other numerical characteristics.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=95)** Server to server rules prevent certain computers from interacting with each other and like exemption rules can be based on their IP addresses.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=104)** Tunnel rules are used to protect communications that are transmitted through an untrusted network.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=110)** And finally, you can create a custom rule when none of the other rules meet your needs.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=116)** Let's create one.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=117)** Let's choose an exemption rule.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=120)** I'll select authentication exemption and click next.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=127)** I'll create an exemption for a range of computers based on their IP addresses.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=132)** I'll click add and type in the IP address range.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=137)** Here are some examples.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=140)** I'll put my own IP address range in, and now go from 10.10.1.5 to 10.10.1.30, and then I'll click okay.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=157)** I can see it listed here, and so now I'll click next.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=161)** I'm configuring this rule for my private network, so I'll deselect the others and click next again.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=167)** And now I'll name it and I'll click finish.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=177)** You can see that the rule is now available in the connection security rules list.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=181)** If you followed along and you want to undo the changes you've made, you can do that.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=186)** Simply right-click and choose delete or disable rule.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=190)** Click yes to confirm.
>
> **[3:13](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=193)** Remember that connection security rules specify how and when authentication occurs and are enforced by the firewall once you set them in place.
>
> **[3:22](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=202)** We set these rules to secure communications between computers by protecting the IP packets that are transmitted among them.
>
> **[3:29](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=209)** Take some time to create your own connection rule and test it out.
>
> **[3:33](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=213)** When you're ready, you can move on to the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (1), private (1), delete (1)
> **Versions:** 10.10.1 (2)
> **UI Navigation:** right-click (2)
> **Analogies:** such as (2)
> **Cross-References:** next video (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 4. Networking and Troubleshooting Basics

#### Use ping to troubleshoot network connectivity
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=0)** - [Instructor] Finding the problem when network issues arise is sometimes easy, like when an Ethernet cable has become disconnected, when Wi-Fi is disabled, or airplane mode is on.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=12)** You can often resolve these from the taskbar.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=15)** Sometimes networking problems are more difficult to diagnose.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=20)** Problems that occur when you can't reach a single host on the network fall into this category.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=26)** These kinds of problems can be quite frustrating, especially when networking troubleshooters and other attempts to resolve the problem haven't worked.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=34)** One tool for resolving problems like this is the command-line tool ping.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=39)** Ping tests a connection from one computer to another to see if they can connect, and if they can't, it offers up information that might help you discover why.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=49)** You can run the ping command from a Command Prompt.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=52)** Let's open one.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=53)** Search for cmd from the taskbar.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=62)** Before you test a connection to another computer, first make sure your own computer's TCP/IP stack is working properly.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=70)** To do this type ping space 127.0.0.1.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=77)** This is called the loopback address.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=80)** The loopback address validates that your computer's network adapter is configured properly.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=85)** When you press Enter, you'll get the results.
>
> **[1:28](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=88)** You can see that I sent four packets out and I received four reply packets back, and this is good.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=94)** This is what we want to see.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=96)** You can also run this command from PowerShell.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=99)** If you aren't familiar with this tool, it's mostly used by IT professionals and enables them to perform all kinds of tasks using cmdlets.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=108)** Let's open PowerShell.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=111)** From the taskbar, I'll simply type the word, and let's run that same command.
>
> **[2:04](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=124)** Again, we get the same results.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=126)** If you don't see results like this and you get an error instead, perhaps your network card isn't working or it isn't configured correctly or another service is interfering with IP.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=138)** Whatever the case, you'll need to resolve that problem before moving forward.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=142)** Sometimes restarting the computer helps, and if not, you can try uninstalling and reinstalling your network adapter, as we covered in a previous movie.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=151)** Doing this will reset the adapter settings to their defaults.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=158)** You can also use the PowerShell cmdlet test-connection space 127.0.0.1 to perform the same task and receive a bit more information back.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=169)** Let's do that.
>
> **[2:55](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=175)** Here you can see the source, the destination, and the IPV4 address as well as the IPV6 address and how many bytes were sent and how many received.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=186)** Once you know your computer isn't the problem, you can try to ping the problematic remote host.
>
> **[3:13](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=193)** First, use a Command Prompt or PowerShell on the remote computer to find its IP address.
>
> **[3:19](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=199)** You'll use this address with the ping command to see if your computer can reach it.
>
> **[3:25](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=205)** I'll do it on this computer to show you.
>
> **[3:27](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=207)** Just type ipconfig and press Enter.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=215)** Here's the address of my laptop, 192.168.1.245.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=224)** I tested this on another computer on my network and found that its address was 192.168.1.82.
>
> **[3:53](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=233)** Now from my local PC, I'll type ping followed by an IP address that I know isn't around.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=240)** You can see here that the request timed out.
>
> **[4:04](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=244)** When you receive this error, it means that no reply messages were received from the host within the default time of 1 second or 1000 milliseconds.
>
> **[4:15](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=255)** Sometimes this is caused because the network is simply too busy to push the request through, but it could be more complicated and involve routing errors or problems with packet filtering.
>
> **[4:26](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=266)** If you think it's caused by an overworked network infrastructure, increase the amount of time ping uses.
>
> **[4:32](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=272)** To do this, add the w option. W stands for wait.
>
> **[4:37](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=277)** You can see what I've typed here, ping, a space, followed by the IP address, a space, a dash and a small w, a space, and 5000.
>
> **[4:46](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=286)** Let's see if that helps.
>
> **[4:50](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=290)** If the results still show that the message times out, it may not be a network connection issue.
>
> **[4:56](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=296)** A another error you might receive is destination host unreachable.
>
> **[5:00](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=300)** There are lots of reasons why this could happen, but the gist is there's no route available to it.
>
> **[5:06](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=306)** I'll get the IP address of a computer on the network first, and then I'll remove it from the network, and then I'll ping the host.
>
> **[5:15](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=315)** So I'll type ping, a space, and the address of the remote computer, 192.168 .1.82, and I'll press Enter.
>
> **[5:31](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=331)** You can see two different errors here.
>
> **[5:33](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=333)** The first two timed out.
>
> **[5:35](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=335)** The second two packets found the destination host unreachable.
>
> **[5:40](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=340)** The unreachable error could mean that there's a problem with the routing table, the default gateway, or something similar, but it could also mean that the host is turned off or not connected to the network.
>
> **[5:51](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=351)** I'm going to bring that destination host back onto the network, and let's try ping again.
>
> **[6:00](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=360)** You can see that I've reached the host now.
>
> **[6:03](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=363)** To see more options you can use with ping, type ping, a space, a forward slash and a question mark and press Enter.
>
> **[6:12](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=372)** You can see there's quite a few.
>
> **[6:14](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=374)** You don't have to use all of these or even remember them, but I do want you to know that more options are available.
>
> **[6:20](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=380)** Continue to explore here as desired, and when you're finished, close the Command Prompt and PowerShell windows.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (1), this, (1), continue (1)
> **Tools:** powershell (5), command prompt (3)
> **Versions:** 127.0.0 (2), 192.168.1 (2), 192.168 (1), 1.82 (1)
> **Env Vars:** tcp (1), ipv4 (1), ipv6 (1)
> **Definitions:** is called (1), means that (1), stands for (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** we covered (1)
> **Prerequisites:** you'll need (1)

#### Use ipconfig to troubleshoot network connectivity
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=0)** - [Demonstrator] If you've ever received an error that has to do with an IP address, especially if there's an IP conflict on the network, you might not have known how to resolve it.
>
> **[0:09](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=9)** Your best bet is to use the ipconfig command.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=13)** Ipconfig can be used to troubleshoot and fix problems for DHCP, DNS, TCP/IP and others.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=21)** You can use this command at a command prompt or using Windows PowerShell.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=25)** I'll use PowerShell here.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=27)** If you're following along, open it with me from the task bar.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=32)** Go ahead and type ipconfig and press Enter to get some basic information about your own IP addresses.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=44)** If you have a look at this list, you'll see that I have an ethernet adapter that's disconnected, a LAN adapter that's disconnected, another one disconnected, and I have no IP addresses.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=55)** That must mean I'm not connected to any network.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=59)** Let's have a look at the most simple reason for that.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=62)** I'll click the network icon on the task bar and see what's going on.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=66)** You can see WiFi is not enabled, so I'll click it.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=72)** Let's try that command again.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=77)** Here we go.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=78)** I have an ethernet adapter that's not connected.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=81)** I've got a wireless LAN adapter that's not connected.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=84)** I've got another one not connected, but here we are with the wireless LAN adapter for WiFi.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=90)** You can see this particular adapter does have an IP address.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=94)** It's 192168.1.245.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=103)** Because each host on a network needs a unique IP address, something we talked about in an earlier movie, the first thing you'll want to do if you're having IP problems is to release your address and renew it, providing you're using DHCP.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=118)** To do this, we'll type ipconfig, a space, a forward slash, and the word release.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=127)** This will release our current IP address.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=130)** Here's my wireless LAN adapter, and here's what we're looking at now.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=135)** Let's get a new address.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=138)** Ipconfig, space, forward slash, renew.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=143)** Notice, we can't renew an IP address, for media that's disconnected.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=148)** But as we saw before for our wireless LAN adapter WiFi, we do.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=153)** It happened to give us the same IP address, which is fine.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=156)** So we're ready to continue.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=160)** Now, I'm going to stop for a minute here and configure my WiFi adapter with a static IP address because I want you to see what it looks like in the ipconfig results if you try to release and renew under these circumstances.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=173)** So hold on, and I'll be right back.
>
> **[2:55](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=175)** So I've done this and given my computer a static IP.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=179)** Now watch what happens when I perform the same command (keyboard clicking) and try to release the IP address.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=188)** Nothing happens.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=189)** Likewise, I can't renew.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=191)** (keyboard clicking) That said, if you see this, when you try to release and renew an IP address, you'll need to go to adapter settings and see what's going on.
>
> **[3:22](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=202)** (mouse clicking) This is the window that shows all my network adapters.
>
> **[3:29](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=209)** We've gotten here before in previous movies.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=211)** I'm going to right-click here and choose properties.
>
> **[3:36](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=216)** I'll choose the Internet Protocol Version 4 option and click properties.
>
> **[3:40](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=220)** And here we go, this is my problem.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=223)** I need to change this to Obtain an IP address automatically.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=227)** I need to do the same for DNS.
>
> **[3:50](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=230)** And now I'll click Okay and close.
>
> **[3:53](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=233)** Back at PowerShell.
>
> **[3:54](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=234)** If I were to do the release and renew commands again, it would work.
>
> **[3:59](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=239)** Beyond ipconfig, you can type ipconfig, space, forward slash, all.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=246)** Let's do that.
>
> **[4:07](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=247)** (keyboard clicking) This will give even more information.
>
> **[4:13](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=253)** Let's scroll up and look for that WiFi entry again.
>
> **[4:16](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=256)** And let's look for DHCP.
>
> **[4:21](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=261)** Here's my active adapter.
>
> **[4:25](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=265)** And here we can see a lot of information about this.
>
> **[4:27](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=267)** Here's our IPv4 Address.
>
> **[4:30](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=270)** We've seen that before, 192.168.1.245.
>
> **[4:36](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=276)** We also have things like Subnet Mask and Default Gateway.
>
> **[4:39](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=279)** And here we have a DHCP Server.
>
> **[4:43](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=283)** Since there's an address here, we know this computer.
>
> **[4:45](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=285)** And this adapter is using DHCP to get its IP address.
>
> **[4:50](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=290)** Before you continue on, make sure to look at all of the entries listed under your active adapter.
>
> **[4:57](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=297)** DHCP is enabled here.
>
> **[4:59](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=299)** Yes, autoconfiguration is enabled.
>
> **[5:02](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=302)** We have an IPv6 Address, and we have even more information below here.
>
> **[5:07](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=307)** What you see here can be quite useful when troubleshooting IP addresses, especially when there are conflicts on the network.
>
> **[5:15](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=315)** When you're ready, close all windows and move on.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (6), lan (5), dns (2), tcp (1)
> **Code Keywords:** let (6), this, (2), continue (2), static (2), this. (1)
> **Tools:** powershell (3), command prompt (1)
> **Non-Speech:** (keyboard clicking) (3), (mouse clicking) (1)
> **Versions:** 192168.1.245 (1), version 4 (1), 192.168.1 (1)
> **UI Navigation:** go to (1), right-click (1), scroll up (1)
> **Cross-References:** we talked about (1), as we saw (1)
> **Prerequisites:** configure (1), you'll need (1)

#### Use tracert to troubleshoot network connectivity
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=0)** - [Instructor] If you're having trouble reaching a destination host and that host is a few routers away, meaning it isn't on the local network, you can use the tracert command to see where in the process the data packets get lost.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=14)** This command works by tracing the data as it passes from router to router, and each one it passes through is referred to as a hop.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=21)** By evaluating the hops, you can pinpoint at the very least where a problem occurs.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=27)** As you'll see in a minute, the tracert command creates a list of intermediate routers with corresponding time-to-live measurements to reach the destination host.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=37)** Let's open a PowerShell window and test it out.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=40)** I'll type powershell here on the task bar and click Windows PowerShell in the results.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=47)** Let's type tracert www.[linkedin.com](https://linkedin.com).
>
> **[0:55](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=55)** It might take a while, but you'll see that the connection is successful, because the result ends at the LinkedIn destination.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=62)** If you see asterisks, a response wasn't given from the router in the expected interval, but if you wait, you may see that eventually, data is returned from another source, provided the host can be reached in the end as you can see here.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=76)** Note that it's possible that not all hardware along the path is set to reply to tracert commands.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=82)** You might see that a trace fails to complete, but the website or other resources is still available using traditional means like a web browser.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=91)** That said though, if it takes a long time for data to get from one router to an another, it may mean that there is excessive latency over specific web links, and if the trace can be completed, the destination host might actually be unavailable.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=107)** Now, let's type a different tracert command.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=109)** I'll type tracert www.[lynda.com](https://lynda.com), but I'll misspell it, and let's see what happens.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=119)** You can see that tracert can't resolve the name, that's because the destination doesn't exist.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=125)** If I were to open a web browser and type the same link, you'll see that's true.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=129)** Let me show you.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=136)** And notice the site can't be reached, it's because there's actually not a website called [lllynda.com](https://lllynda.com) with that many Ls.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=144)** Let's go back to PowerShell and run that tracert again to LinkedIn.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=149)** Again, you'll see the little symbols that show a router couldn't be reached.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=158)** If you're using routers on your own corporate network, you could probably figure out which router is having problems.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=166)** However, keep in mind that while you can use tracert to trace a path to a remote host, you can't use tracert to resolve problems with routers that are out of your control like those on the internet.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=179)** However, you can use the command to see if there's a problem getting out to your gateway or to your ISP or if there are problems in an internet network that has multiple routers and gateways.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=191)** Before we end this video, let's bring up the tracert help menu by typing tracert, a space, a forward slash, and a question mark.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=200)** And here are some of the options that you can add with this command.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=204)** Explore as you wish, and when you're finished here, close the PowerShell window.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), while, (1)
> **Tools:** powershell (5)
> **URLs:** [linkedin.com](https://linkedin.com) (1), [lynda.com](https://lynda.com) (1), [lllynda.com](https://lllynda.com) (1)
> **Warnings:** note that (1), keep in mind (1)
> **CLI Commands:** ls (1)
> **Env Vars:** isp (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### Use PathPing to troubleshoot network connectivity
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=0)** - [Instructor] If you've tried the ping and tracert commands to troubleshoot a network connectivity problem and didn't get the resolution you desired from either, you can use the two together with the command pathping.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=12)** Pathping provides you with the route to any remote host and pings it.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=18)** The results include information about the routers along the way and the round trip time value, as well as link loss information.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=25)** Let's open a PowerShell window and try it out.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=30)** I'll type pathping www.[linkedin.com](https://linkedin.com) and press Enter.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=40)** This could take a little while, perhaps three or four minutes to complete on your end.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=44)** As with tracert, you'll see the hops the data takes to get to the destination address.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=49)** As with ping, you'll get information about how much time each hop took and how many packets were sent or lost during the transmission.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=57)** If you get a destination host unreachable message, it could be because the local system or remote router has no way to get to the destination.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=66)** If you get an unknown host message, the host name you're trying to get to can't be resolved to its IP address.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=72)** If this is the case, first check to see that you spelled the host name correctly.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=77)** Then check again to see if the available DNS servers can resolve it.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=81)** If this doesn't fix the problem, you'll have to do a little more troubleshooting on the DNS side.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=92)** I'll type pathping and I'll type www.[lllynda.com](https://lllynda.com) like we did in the last movie, purposefully misspelling the word Linda and let's see what happens.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=104)** Like before, the connection can't be made because no such host exists.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=109)** You can verify this in a web browser if you like.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=112)** You can use pathping statistics to see where in a wide area network packets slowed down or dropped.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=119)** If you're working in an environment where packets must pass through three or four routers to reach their destination host, you can easily tell where excessive latency occurs.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=129)** You can also use this tool to see if data is taking an alternate link to a host because of a bottleneck somewhere else.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=136)** You can use pathping with an IP address too.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=139)** And as with other TCP/IP tools, there are options you can add to further define how to use it.
>
> **[2:25](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=145)** Let's type pathping, a space, a forward slash, and a question mark to see those options.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=152)** For example, the -w switch lets you increase the default interval for responses.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=158)** If increasing the interval still causes errors, it's likely because the packets are being forwarded in a routing loop.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=164)** You can use tracer to find the source of the problem.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=168)** Continue to explore pathping, incorporating options that are applicable to your network and troubleshooting situation.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=174)** When you're finished, type exit, or close the PowerShell window.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), while, (1), case, (1), pass (1), else. (1)
> **Env Vars:** dns (2), tcp (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1), [lllynda.com](https://lllynda.com) (1)
> **Tools:** powershell (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/next-steps?u=76281980&t=0)** - [Joli] Thank you for watching Windows 10: Networking.
>
> **[0:03](https://www.linkedin.com/learning/windows-10-networking-22602895/next-steps?u=76281980&t=3)** In this course, you learned how to set up, configure, connect, secure, troubleshoot, and manage network connections.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-networking-22602895/next-steps?u=76281980&t=11)** Next, practice what you've learned.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-networking-22602895/next-steps?u=76281980&t=13)** Take notice of the networks you connect to and how you configure them from the start.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-networking-22602895/next-steps?u=76281980&t=18)** Create your own VPN and secure it.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-networking-22602895/next-steps?u=76281980&t=21)** Optimize the connections you configure and resolve problems when they occur at both the Command Line and PowerShell.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-networking-22602895/next-steps?u=76281980&t=27)** If you'd like to learn more about networking, search for additional courses on LinkedIn learning.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-networking-22602895/next-steps?u=76281980&t=32)** Make sure to search for terms like DHCP, APIPA, DNS, and TCP/IP.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-networking-22602895/next-steps?u=76281980&t=40)** As always, I want to hear from you.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-networking-22602895/next-steps?u=76281980&t=42)** Feel free to contact me anytime via LinkedIn.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (1), dhcp (1), apipa (1), dns (1), tcp (1)
> **Prerequisites:** configure (3), set up (1)
> **Tools:** command line (1), powershell (1)
> **CLI Commands:** make (1)
> **Best Practices:** make sure to (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [joli] (1)


## Path Context

### In [[Explore a Career in IT Support]]
← [[Windows 10- Security]] | **7 of 11** | [[Troubleshooting Common PC Issues for Users]] →

## Appears In

- [[Explore a Career in IT Support]]
