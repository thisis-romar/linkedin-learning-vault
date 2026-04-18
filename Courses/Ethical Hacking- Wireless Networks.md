---
type: course
slug: ethical-hacking-wireless-networks
url: "https://www.linkedin.com/learning/ethical-hacking-wireless-networks"
duration_minutes: 105
duration: 1h 45m
level: Intermediate
updated: 6/22/2023
learners: 28628
skills:
  - Wireless Networking
  - Ethical Hacking
exercise_files: false
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/wireless-networking
  - skill/ethical-hacking
status: not-started
created: 2026-04-17
---

# Ethical Hacking: Wireless Networks

> Wireless networks are convenient and popular, but poor configuration and encryption leave them open to attack. Hackers can use Wi-Fi vulnerabilities to infiltrate your entire network. Security professionals need to know how to detect, prevent, and counter these kinds of attacks using the latest tools and techniques—the subject of this course with cybersecurity expert Malcolm Shore. Malcolm covers 

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks) | 1h 45m | Intermediate | 29K learners

## Instructor

- [[Malcolm Shore]]

## Skills Covered

- Wireless Networking
- Ethical Hacking

## Table of Contents

### Introduction

#### Learn how to protect your wireless network
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/learn-how-to-protect-your-wireless-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/learn-how-to-protect-your-wireless-network?u=76281980&t=0)** - [Malcolm Shaw] Wireless networks are now a part of life for everyone at home, in business, and in the government.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/learn-how-to-protect-your-wireless-network?u=76281980&t=6)** Wireless connectivity has enabled on the go access to everything from social media sites to enterprise applications, allows home users to use their laptops in and around the house at will, and offers convenient guest access to businesses.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/learn-how-to-protect-your-wireless-network?u=76281980&t=22)** However, the use of a wireless network isn't without its hazards, and ensuring that home and business use of wireless is secure is the job of the wireless network tester.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/learn-how-to-protect-your-wireless-network?u=76281980&t=32)** Understanding the risks also helps us make informed judgments about the use of public wifi hotspots.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/learn-how-to-protect-your-wireless-network?u=76281980&t=39)** I'm Malcolm Shaw, and I've spent a career helping governments and businesses protect their systems against cyber attacks.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/learn-how-to-protect-your-wireless-network?u=76281980&t=45)** In this course, I'll explain the technology used in wireless networks and the risks it brings, which protocols are vulnerable to attack, and the tools available to test for vulnerable services.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/learn-how-to-protect-your-wireless-network?u=76281980&t=57)** I'll start by explaining the basics of wireless networking and the various forms of wireless network security.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/learn-how-to-protect-your-wireless-network?u=76281980&t=64)** I'll demonstrate the basic Windows and Linux tool sets for wireless network testing, and I'll be using the WiFi Pineapple to cover the issue of rogue access points.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/learn-how-to-protect-your-wireless-network?u=76281980&t=75)** When you finish this course you'll have a great understanding of how to test for wireless network weaknesses.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/learn-how-to-protect-your-wireless-network?u=76281980&t=80)** Now let's get started with wireless testing.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), let (1)
> **CLI Commands:** make (1)
> **Speakers:** - [malcolm (1)

#### What you should know before watching this course
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/what-you-should-know-before-watching-this-course-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/what-you-should-know-before-watching-this-course-2?u=76281980&t=0)** - [Narrator] This is a practical course and during this course I'll be using a virtualized environment called Virtual Box.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/what-you-should-know-before-watching-this-course-2?u=76281980&t=6)** I'll also be using a number of tools which are part of the Kali Linux framework to test systems.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/what-you-should-know-before-watching-this-course-2?u=76281980&t=12)** If you're not familiar with Kali and virtualization, you should watch my introduction to Kali Linux course which will guide you through installing and using them.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/what-you-should-know-before-watching-this-course-2?u=76281980&t=21)** In addition, I'll be assuming that you understand basic computer and networking concepts, are familiar with Windows, and have a knowledge of basic Linux commands.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/what-you-should-know-before-watching-this-course-2?u=76281980&t=32)** I'll also be using some additional hardware to do the testing.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/what-you-should-know-before-watching-this-course-2?u=76281980&t=35)** While some testing can be done just with a laptop, you'll be better served getting an external USB WiFi device to use.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/what-you-should-know-before-watching-this-course-2?u=76281980&t=43)** We'll cover the types of devices that you might want to purchase, they're readily available and not too expensive.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/what-you-should-know-before-watching-this-course-2?u=76281980&t=49)** I'll also be demonstrating the Hak5 pineapple.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/what-you-should-know-before-watching-this-course-2?u=76281980&t=52)** It's a hardware rogue access point which is fairly popular with testers.

> [!info]- Semantic Content
>
> **Env Vars:** usb (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Course disclaimer
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980&t=0)** - [Instructor] This is one of a series of ethical hacking courses and in addition to Kali Linux, it uses a range of third party testing software.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980&t=9)** Some of this is commercial software and some is open source, third party software.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980&t=15)** The download and installation instructions for all tools used in this course is available as a PDF in the associated course material.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980&t=23)** However, some of the wireless drivers used in these tools may conflict with others.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980&t=27)** So you may wish to just install the tools for the time they're required.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980&t=32)** While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers and we can't provide any assurance that these sites might not be compromised when you visit them.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980&t=45)** Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware and may raise antivirus alerts when you visit them.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980&t=55)** The testing tools we demonstrate are extremely powerful.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980&t=58)** They may demonstrate some of the same signature characteristics as malware and malicious implants and may raise antivirus alerts when you try to download them.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980&t=68)** Again, we can't provide assurance that the software hasn't been compromised when you download it.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980&t=72)** And so, as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load onto your system.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980&t=83)** The testing is mostly carried out inside a virtual environment to contain any unplanned effects of testing tools and in the unlikely event that you do download malware, this will also help contain any impact from live malware.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (2)
> **Env Vars:** pdf (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Wi-Fi Networks

#### Understanding wireless networks
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=0)** - [Instructor] To connect to the internet, we need to use what's known as a router, or an internet gateway.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=7)** These come in a range of types from simple, low-cost home appliances, to complex multifunction business devices.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=14)** But nowadays, they all have the same basic functionality.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=17)** A wired connection to an ISP, and the ability to connect multiple devices wirelessly.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=25)** Desktop computers come with the ability to connect to both wired and wireless networks, as do laptop systems.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=32)** However, tablets and mobile devices only connect wirelessly.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=36)** So having a wireless capability is pretty much a must nowadays.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=40)** And, of course, media technology, such as the Chromecast and Apple TV, depend upon wireless networks to operate.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=48)** While this has become very much part of life, and many cities now offer what are known as wireless hotspots, as do libraries and social meeting places, such as Starbucks and McDonald's.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=60)** As a technology, wireless communications has its limitations.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=64)** Early wireless devices didn't have the same bandwidth as standard ethernet, and even the more recent high-power wireless systems continue to lag behind good quality ethernet.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=75)** Wired devices connect using ethernet cables, and these are rated with a Cat specification.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=80)** The most common cables are Cat 5, Cat 5e, and Cat 6.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=85)** As we can see in this table, these provide quite substantial speeds.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=89)** Wireless devices connect using what's known as Wi-Fi, the wireless networking protocol, which is defined in the 802.11 series of standards.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=99)** These standards are continually being improved, with the early 802.11a, b, and g being superseded by 802.11n, and 802.11ac.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=111)** And speeds are continually increasing.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=114)** Note the anomaly of 802.11a, which has the greatest speed, but is pretty much limited to line of sight, and hence was never really that successful.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=124)** Wireless deployments operate through one of 14 different channels, the exact number will depend upon the country and the protocol used.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=132)** For instance, an 802.11g deployment would be in the 2.4 gigahertz range, and would have channels at 2.412, 2.417, 2.422, and up to 2.472 gigahertz.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=148)** The specific channel used by clients may be preset or selected dynamically, depending upon the network performance at the time of connecting.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=157)** With enough channels and spectrum use, the theoretical maximum speeds of the wireless standards are starting to approach the speeds achievable on a wired connection.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=167)** With 802.11n and more recently 802.11ac, the speeds are quite sufficient to be acceptable, especially given the additional convenience of wireless.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=178)** Connection to a wireless network requires that the laptop or mobile device connect to what is known as an access point.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=186)** This is a device which has an existing connection through to the internet and broadcast its identity, offering client devices the opportunity to connect.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=196)** We've all connected to access points.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=198)** Every time we go into our computer, click on Wireless Networks, and select a network to connect to, we're communicating with the access point for that network.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=208)** This has a name.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=209)** It might be a good descriptive name such as Qantas Club, or it might be somewhat more cryptic.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=214)** This is what's known as a service set identifier, or SSID.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=219)** Associated with this is a BSSID, or basic SSID, which is its MAC address.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=226)** Some security techs recommend hiding the SSID, but this offers no real security and is often an annoyance for the business.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=235)** It's poor advice.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=237)** Wireless access points usually require a network key in order to connect, or may connect directly, but request an internet login before allowing access.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=247)** Some routers enable what is known as MAC filtering to limit access just to a known set of user devices.
>
> **[4:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=253)** But this can be circumvented by an attacker just by running a software tool to change his or her MAC address to one that's connected.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=261)** Encryption and authentication can be configured on a wireless LAN by selecting one of three options.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=267)** Wired Equivalent Privacy, or WEP.
>
> **[4:30](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=270)** Wi-Fi Protected Access, or WPA.
>
> **[4:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=274)** And WPA2, a stronger variant of WPA.
>
> **[4:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=277)** Wireless Protected Setup, or WPS, is a relatively new feature which allows a user to connect just by the press of a button the router.
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=287)** Security is ensured by virtue of having physical proximity to the router.
>
> **[4:52](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=292)** Let's take a look at my router.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=294)** I'm on the wireless LAN configuration page.
>
> **[4:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=297)** We can see the access point, SSID, is TPG-83NJ, and it chooses its channel automatically.
>
> **[5:05](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=305)** It's using the 802.11bgn protocol set, has WPA and WPA2 configured for security, and has WPS enabled.
>
> **[5:17](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=317)** If I now click on the WLAN Filtering tab, I get the option to enable MAC filtering.
>
> **[5:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=324)** I'll activate it.
>
> **[5:26](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=326)** Here we see that we can either blacklist or whitelist MAC addresses.
>
> **[5:30](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=330)** If I enter a MAC address and blacklist it, then that MAC address won't be allowed in.
>
> **[5:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=336)** If I've selected whitelist, then only MAC addresses that are on the list will be allowed in.
>
> **[5:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=342)** I don't activate this, because any attacker worth his or her salt would circumvent this control easily.
>
> **[5:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=348)** Okay, I'll uncheck that and Logout.

> [!info]- Semantic Content
>
> **Env Vars:** mac (8), ssid (4), wpa (3), lan (2), wpa2 (2)
> **Definitions:** known as (5), is a  (3)
> **Code Keywords:** protected (2), continue (1), require (1), let (1), this, (1)
> **Versions:** 802.11 (1), 2.4 (1), 2.412 (1), 2.417 (1), 2.422 (1)
> **CLI Commands:** cat (4)
> **Analogies:** such as (3), for instance (1)
> **UI Navigation:** click on (2)
> **Documentation:** specification (1)

#### Selecting an antenna for wireless network testing
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=0)** - A wireless network depends upon its ability to reliably send and receive wireless packets, and it does that through its antenna system.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=10)** A router will typically have at least one external antenna.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=14)** The NETGEAR device shown here has three external antennas.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=18)** Laptop, on the other hand, have their antenna looped around the inside of the case.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=24)** When testing wireless networks from your laptop, your wireless scanner will cycle through the set of wireless channels to detect all networks in range.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=35)** This will have the effect of disconnecting your Internet connection, as this is fixed on one channel.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=42)** Consequently, it's useful to have a separate wireless antenna.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=46)** Wireless testing from the virtual box environment, is a special case which requires an external antenna, because the virtualized ethernet LAN to which VMs attach is using the wireless connection, so again an external antenna is required.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=62)** The role of the antenna is to convert between electrical energy and radio waves.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=68)** How well it does this is variable, depending upon the type of configuration of the antenna.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=74)** When rating antennas, the benchmark is a perfect omnidirectional radiator, and the performance of the antenna is then a positive, better, or negative, worse, delta, from this benchmark.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=88)** Antennas are often promoted on the basis of their transmit power.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=93)** But another important rating is their receptor sensitivity.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=97)** Gain is expressed in units of dBi, decibels isotropic, and the higher the decibels, the more powerful the antenna, and the more reliable the communication is.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=109)** Sometimes performance will be expressed as dBm, which is pure signal power.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=115)** dBm are related to milliwatts through the equation dBm equals 10 times log to the 10 milliwatts.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=124)** When transmitting, a positive number represents better performance, or gain, from the benchmark, and a negative number means lower performance, or loss.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=133)** 1,000 milliwatts, or 30 dBm, is rated to be a good transmitter.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=139)** For reception, the opposite is true.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=142)** We want to be able to receive weaker signals, and a good antenna should be able to operate down to about minus 90 dBm.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=149)** The most common form of antenna is the omnidirectional antenna, which is designed to radiate and pick up wireless signals from any direction.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=159)** Here we can see a TP link, WN722N, with a separately attached omnidirectional high gain antenna.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=167)** This has a minus 90 dBm sensitivity at one meter, reducing to minus 68 dBm at 50 meters.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=175)** It has a 20 dBm transmit power.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=179)** The antenna provides a four dBi improvement on transmission, but does not affect its sensitivity.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=187)** Antennas can also be unidirectional with optimal performance in a specific direction.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=193)** These don't change transmission power, but change the shape of the signal to focus more power in one direction.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=201)** These come in two forms.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=202)** The first is the yagi antenna, which is sometimes called the fishbone antenna for obvious reasons as we can see here.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=210)** This is a yagi antenna used by Telstra customers.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=213)** It operates with 14 dBi gain.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=217)** A yagi antenna consists of a set of rods, set into a main horizontal tube.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=222)** One of these is the active element, which may be a single rod or tube, or may be folded around to form a narrow, oval rod.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=231)** This element is known as the radiator, dipole, or driven element.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=236)** Behind, and in front of it, are a series of what are called parasitic elements, running along the length of the main tube.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=244)** The elements behind are called reflectors, and those in front, directors.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=250)** While we won't go into the deep theory of yagi antennas, it's worth noting that the key to the performance of such an antenna, is the phases of the currents flowing in the parasitic elements.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=262)** These elements receive and re-radiate the signal in a slightly different phase to that of the driven element.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=269)** This means that the primary signal is reinforced in some directions, and canceled out in others, resulting in a high level of unidirectional gain.
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=279)** The amplitude and phase of the induced current in the parasitic elements is dependent upon their length and the space in between them.
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=287)** The second form of unidirectional antenna is the parabolic antenna.
>
> **[4:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=291)** These are highly directional, and very powerful, with the parabolic dish pulling in signals over its whole surface, and focusing them on the central antenna.
>
> **[5:02](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=302)** As a result, the larger the antenna dish, the higher the gain achieved.
>
> **[5:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=307)** A parabolic antenna can connect wireless signals point-to-point across many miles, and are often used in rural communications links.

> [!info]- Semantic Content
>
> **Code Identifiers:** dbm (8), dbi (3)
> **Definitions:** is a  (3), known as (1), means that (1)
> **Env Vars:** netgear (1), lan (1), wn722n (1)
> **Code Keywords:** case. (1)
> **Speakers:** - a (1)

#### Configuring security in wireless networks
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=0)** - [Instructor] Early wireless networks didn't employ encryption and were known as open networks, however, this meant that anyone could attach to the network, which had some significant risks.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=11)** The first and most obvious is that this leads to additional local network traffic, and also potentially consumption of internet bandwidth and data allowance.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=21)** A malicious attacker can use an open network as a launching point for attacks on other systems, so ensuring that any traceback and blame stops at the network they've accessed.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=33)** Even more maliciously, however, being on the local network allows an attacker to use techniques such as app spoofing to attack network clients directly with exploits and through man-in-the-middle attacks.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=45)** Security was first deployed on wireless systems in the form of the Wired Equivalent Privacy, or WEP.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=53)** This was integrated into the 802.11b standard and was designed to protect wireless networks to the same extent that wired networks were protected.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=62)** In particular, WEP was designed to defeat simple eavesdropping and to check the integrity of data as it flows across the network.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=71)** It used a shared secret key and delivered a lightweight solution for confidentiality, access control, and integrity, which could be employed with minimal performance issues on modern chipsets.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=84)** However, WEP was not designed by experts in cryptography.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=88)** It had no way of distributing shared keys at scale.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=92)** The encryption algorithms were weak enough to enable attackers to crack the encryption and recover the plain text.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=99)** It was also possible to passively recover the key using freely available sniffer tools.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=105)** To add to its woes, it had 40-bit keys and 24-bit initialization vectors, which were deemed acceptable for exports but were found to be unable to withstand even a low-grade attack.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=117)** In particular, implementations of random number generators for the initialization vector were inconsistent and often poorly designed.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=125)** Finally, WEP introduced an opportunity for denial-of-service through the use of associate and disassociate messages.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=133)** A new encryption standard called Wi-Fi Protected Access, or WPA, was deployed to replace WEP.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=141)** The biggest change that was introduced in WPA was the introduction of the Temporal Key Integrity Protocol, or TKIP.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=149)** WEP used a fixed key for all packets, whereas TKIP changes its key for every frame transmitted.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=155)** This makes it much more difficult to crack.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=158)** In addition, it provided support for the AES encryption algorithm.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=162)** WPA also supports longer keys and message integrity checks.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=167)** A further improvement was released in the form of WPA2, and introduced yet more security improvements.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=174)** Notably, making AES mandatory and offering the CCMP mechanism to replace TKIP.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=181)** WPA2 comes in two versions: WPA2 Personal, which uses shared keys, and WPA2 Enterprise, which is supported by a RADIUS authentication server.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=194)** Many routers now only offer WPA and WPA2, and it's extremely rare to see WEP deployments.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=202)** We'll focus on WPA and WPA2 throughout this course.

> [!info]- Semantic Content
>
> **Env Vars:** wep (7), wpa2 (6), wpa (5), tkip (3), aes (2)
> **Code Keywords:** protected (2), finally, (1)
> **Prerequisites:** initialization (2)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Understanding the Wi-Fi Protected Setup (WPS)
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=0)** - [Narrator] The WiFi Alliance has defined a guideline for the WiFi Simple Configuration or WSC protocol.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=8)** And manufactories can submit their devices to be certified to use the term WiFi Protected Setup, WPS.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=16)** So to be correct, WPS is the feature and WSC is the protocol.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=22)** Many modern wireless routers include the WPS feature to provide user-friendly method of connecting to a home network at the press of a button.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=31)** To connect a device to a secure home network requires knowledge of its SSID.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=36)** And without WPS, also requires knowledge of its WPA password.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=41)** To connect, you select wireless networks in the device setup and then pick the network to connect to by SSID.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=50)** There'll likely be many networks visible.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=52)** And then enter its security key.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=54)** WPS simplifies the connection process.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=57)** Connecting using a WPS certified device involves selecting the network.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=62)** When asked for the network key, the user presses the WPS button on the router.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=67)** The router and the device exchange keying information automatically and the devices connected to the wireless network without the user having to know or enter the network key.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=79)** All routers, which are WPS enabled, have a pin code that's automatically generated and is accessible from the routers WPS configuration page.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=89)** Access points will accept knowledge of the pin as sufficient authentication to allow connection to the wireless network.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=97)** A pin is a mandatory requirement for WPS.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=100)** Even though it's rarely used.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=103)** The WSC standard defines a device wanting to connect to a network as the enrollee, which when connected, becomes a member.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=111)** The registrar is the entity which has the authority to issue credentials that may be integrated into the access point, which is the point at which access can be gained to the network infrastructure.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=123)** The process of registration takes place in a two minute window called the walk time.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=128)** In typical network terms, the device is the supplicant and the access point the authenticator.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=134)** The process can be initiated from either the access point or the device, typically by the user pressing a button on the access point.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=142)** However, it can also be initiated automatically by the device to support features such as automatic reconnect.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=150)** LEDs flash during the process with two second on, one second off indicating in progress and a quarter second flash cycle indicating an error.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=160)** Success is shone as a steady light.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=164)** In simple terms, the protocol runs by the access points sending out a beacon and the device and the access point then exchanging messages.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=172)** The device sends a probe to the access point followed by an authentication and an association request.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=179)** The extensible authentication protocol, or EAPOL, exchange starts, which involves the device sending out an EAPOL start message and the access point requests authentication.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=192)** The device sends its authentication information.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=195)** If the access point confirms the authentication information, such as the access point WPS pin code, then an EAPOL success message is sent and access is granted.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=207)** Otherwise, EAPOL terminates and access is blocked.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=211)** EAPOL uses four messages, known as M1 to M4.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=214)** M1 and M2 are used to exchange nonces, which are numbers used to seed the process.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=220)** M3 and M4 are used to generate the key for the secure session.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=225)** The pin used in WSC is vulnerable to a brute force attack.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=230)** It's eight digits long and is stored as two sets of four digits.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=235)** Each set can be brute forced independently.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=238)** In addition, the eighth is a checksum of the first seven.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=242)** So the number of tries required to exhaust the key space is 10 to the four plus 10 to three, and that's about 11,000 attempts.
>
> **[4:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=251)** With this limited key space, an attacker with a standard laptop can recover the pin within a short period of time.
>
> **[4:18](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=258)** The WSC guideline requires that an access point must track multiple failed attempts to authenticate and then enter a lockdown state.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=268)** As a guide, after three failed pin authentication attempts within 60 seconds, an access point must enter the lockdown state for 60 seconds.
>
> **[4:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=278)** Specific implementations may vary the number of attempts, 5-10 are common, and may stay in lockdown state for longer, or even an indefinite period.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=288)** A WPS attack involves a malicious client which tries to connect with every key in turn.
>
> **[4:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=295)** Each attempt requires waiting for the router to respond.
>
> **[4:58](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=298)** Now this is just a matter of seconds, so the attack is very feasible.
>
> **[5:02](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=302)** There's a catch, however.
>
> **[5:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=303)** Many routers now do WPS rate limiting in order to comply with the WSC guidelines.
>
> **[5:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=310)** Which in some cases means that a device that keeps trying to connect may be locked out for a while, possibly indefinitely.
>
> **[5:17](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=317)** And this will slow down or defeat the attack.

> [!info]- Semantic Content
>
> **Env Vars:** wps (13), wsc (6), eapol (5), ssid (2), wpa (1)
> **Definitions:** is a  (2), known as (1), means that (1)
> **Code Keywords:** protected (1), catch, (1), while, (1)
> **Prerequisites:** setup (2), required to (1)
> **Analogies:** such as (2)
> **Speakers:** - [narrator] (1)

#### Extracting WEP passwords using Wifite
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=0)** - [Narrator] A typical attack on web involves three steps.
>
> **[0:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=3)** Firstly, establishing a monitoring interface, then using a tool such as Aireplay-ng to perform fake authentication and collect the initialization vectors.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=14)** And finally, running Cain or Aircrack-ng to extract the encryption key from the initialization vectors.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=22)** These capabilities have been bundled into a tool called Wifite.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=26)** So we'll use that, I plugged in my alpha USB wireless adaptor and configured it through to Kali.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=32)** If you aren't sure how to do this, check out the wireless section of my introduction to Kali course.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=39)** Okay, I've got a terminal window open, so I'll run Wifite to automate the attack.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=44)** I'll use two command line parameters, dash + dash + mac to indicate that I want a random mac address and dash + dash + aircrack to tell Wifite to verify the handshake using Aircrack.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=58)** We can see the networks that Wifite has detected, and it will keep monitoring until we tell it to move on to its next phase.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=65)** I can see my WEP access point which is called TP-LINK_96E8A0, So let's select that.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=72)** I'll press Control + C and select one.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=76)** Okay, Wifite is attempting fake authentication attacks.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=80)** It starts with Aireplay and then continues with ChopChop and fragmentation attacks.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=87)** It's now running a Cafe Latte attack.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=90)** We can see it's continually IV's as it tries these attacks.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=94)** It takes a little time to collect enough IV's to be successful.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=97)** So we'll come back to it when it's progressed a bit further.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=102)** We're back again and now we've collected more than 10,000 IV's.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=106)** Wifite has started trying to crack the key.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=109)** Okay, it's now cracked the IV and provided the key in hexadecimal, which in ASCII is the string strong + key000.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=118)** I guess the fact it's strong doesn't matter so much given the implementation weakness.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=123)** Okay, that's an example of why WEP has been superseded by more robust encryption solutions.

> [!info]- Semantic Content
>
> **Env Vars:** wep (2), usb (1), link_96e8a0 (1), ascii (1)
> **Code Keywords:** interface (1), finally, (1), this, (1), let (1)
> **Tools:** terminal (1), command line (1)
> **Prerequisites:** initialization (2)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Extracting network passwords through WPS
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=0)** - WPS can be attacked using a brute force attack on the PIN, which has only about 11 thousand valid combinations.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=8)** One of the popular tools for testing WPS is Reaver.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=11)** So let's have a look at that.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=13)** I'll be running this against my Technicolor TG582N home router.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=19)** I have a terminal window open, so I'll set my wireless adapter to monitoring mode and run a tool called Wash, to identify candidate WPS enabled networks, so that I can see the BSSID, which I need for Reaver.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=36)** My router is called Telecom05 and I can see the BSSID is 9c 97 26 55 D1 DF.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=46)** It's operating on channel one, which Reaver also needs to know.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=51)** I'll now run Reaver to do a WPS attack.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=55)** We can see Reaver trying to connect to WPS using the keys it's generating.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=60)** It quickly identifies the type of device and extracts its manufacturer, Technicolor; It's model, Technicolor TG; its model number 582n, and its serial number.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=73)** We can also see Reaver managing the M1 and M2 and the M3 and M4 messages.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=79)** It's now trying to attempt, and it's been logged out with rate limiting.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=83)** Reaver will try again in 60 seconds to see if the rate limiting has been lifted.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=89)** Okay, rate limiting has been removed and Reaver continues with more attempts of the current rate, full key space exhaustion will take about eight days.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=98)** And so key recovery on average, four days.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=101)** Reaver is smart enough to remember where it was, and will ask whether you want to resume and interrupt its session.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=107)** So the cracking can be done in a number of sessions.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=111)** We'll leave Reaver for the moment and come back again.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=114)** Back at Reaver we can now see that the router has decided to do an indefinite lockdown.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=120)** We're essentially thwarted here.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=122)** We'll leave the attack at this point, noting that the current approach taken by Reaver is likely to be of legacy interest only in most cases.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=131)** WPA2 is a strong security solution for a network.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=135)** But it is somewhat compromised by the introduction of WPS.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=139)** The security around WPS is improving and rate limiting has certainly addressed the casual attack.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=145)** However, some implementations are still vulnerable to sustained attack.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=149)** Whether threat level justifies it, disabling WPS would remove this risk altogether.

> [!info]- Semantic Content
>
> **Env Vars:** wps (8), bssid (2), pin (1), tg582n (1), wpa2 (1)
> **Definitions:** is called (1), is a  (1)
> **Code Keywords:** let (1)
> **Tools:** terminal (1)
> **Speakers:** - wps (1)

#### Using WiFite and Aircrack-ng to test WPA passwords
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=0)** - [Instructor] We've seen a number of WPA and WPA2 networks during our monitoring.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=5)** So now it's time to see how well they're protected by extracting data from them, which might lead us to the network password.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=13)** We've look at WiFite previously for extracting web passwords and I'll use it again for extracting the WPA handshake.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=21)** WiFite sends client deauthentication requests to force a reauthentication handshake, which can be captured and subsequently analyzed.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=30)** I'll instruct WiFite to give me a random MAC address and to verify the handshake using Aircrack.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=37)** WiFite starts scanning for networks, displaying a list of all the networks it finds and on the right, shows active clients, devices associated with those access points.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=48)** I'll let WiFite run for a few moments to capture multiple clients on my TPG-83NJ network.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=56)** Okay, I can now press Control + C and select the target.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=63)** WiFite starts with a couple of WPS attacks.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=67)** I can press Control + C to skip over these as I want to get into the WPA attacks.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=74)** WiFite has run an active WPA attack on the selected network by checking for clients, deauthenticating them, and listening for their reauthentication sequence.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=84)** It found it and captured the packets.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=86)** The scanning was successful and WiFite saved it as a pcap file to handshake directory HS.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=94)** WiFite doesn't progress to the cracking stage, but I can now use Aircrack to extract the password using a dictionary search.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=102)** I've got a dictionary set up called wifi.text, so let's get cracking.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=109)** Okay, here we can see the Wi-Fi password.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=113)** So we've cracked the WPA password and can now use this password to connect to the network.

> [!info]- Semantic Content
>
> **Env Vars:** wpa (5), wpa2 (1), mac (1), tpg (1), wps (1)
> **Code Keywords:** let (2), protected (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Using Pixiedust to recover keys
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=0)** - While the WPS brute force attack has largely been defeated by rate-limiting, we can use a tool called Pixie-Dust, to attempt offline extraction of the pin after recovering just one handshake from the WPS negotiation.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=14)** This is possible where the implementation of WPS has used a low-quality random number generator.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=21)** And this includes a range of current router and extender models from Asus, Belkin, Linksys, Netgear, TP-Link and Zexal.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=29)** In some cases, the nonces used to generate the pin are set to 0, a very poor implementation decision.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=36)** We don't need to use the Pixie-Dust tool itself, because the Pixie-Dust attack has been integrated into Reaver.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=42)** We can invoke this by using the -K option.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=46)** I've got a current model Linksys N300 range extender, which I'll use for this test.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=51)** To run the test, I first need to set the external antenna into monitoring mode.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=57)** I then need to get the BSSID of the access point, so I'll run wash again.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=63)** I can see two entries for my TPG-83NJ access point, one is the real router, and the other the extender.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=71)** I know the BSSID of the router is E8:08:8B:18:12:50, so the other is the extender.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=80)** I can now run Reaver, specifying its integrated Pixie-Dust attack.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=85)** Okay, Reaver has started its attack.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=88)** It associates with the extender and then tries a pin of 12345670.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=94)** It then sends an EA poll start request and initiates its authentication handshake.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=100)** Reaver then receives an M1 message and dumps another nonce, the PKR, and the authentication key.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=106)** It then sends its M2 message.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=108)** Because we've selected very verbose mode, Reaver dumps out the two hashes for the four-digit pin halves, and the nonce and PKE values.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=116)** We can see that the nonce's ES1 and ES2 are set to 0.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=120)** The Pixie-Dust attack has recovered the pin, 54065789, and Reaver is again invoked with the pin to associate with the extender.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=132)** I'll give it a couple of moments to run.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=135)** Okay, that's it, Reaver has recovered the network key, and we can see that it's ABCD1994.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=142)** Not all access points are vulnerable to Pixie-Dust attack, but for those that are, this is a very simple process.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=148)** The solution to this weakness is to ensure that the equipment used has a good quality implementation of its security functions.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=155)** It's not that obvious, even with the larger manufacturers, as the chip sets they use may be suspect, and so good security testing is important.

> [!info]- Semantic Content
>
> **Env Vars:** wps (3), bssid (2), n300 (1), tpg (1), pkr (1)
> **Ports:** :08 (1), :18 (1), :12 (1), :50 (1)
> **Definitions:** is a  (1)
> **Speakers:** - while (1)

#### A first look at WPA3
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=0)** - [Instructor] WPA2 has been used as a security protocol on Wi-Fi for many years.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=6)** In 2018, the Wi-Fi Alliance announced that it was going to published an updated and more secure WPA3 protocol, which adds four features not found in WPA2.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=20)** By end of year, updated Wi-Fi chips were being produced, and by 2019, WPA3 routers started to appear on the market.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=30)** The first WPA3 feature is known as individualized data encryption.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=35)** Currently, open Wi-Fi networks that you find in airports, hotels, coffee shops, and other public locations have the convenience of allowing anyone to connect, but at a price.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=48)** Traffic sent over them isn't encrypted at all.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=52)** WPA3 addresses this by applying individualized data encryption.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=57)** When you connect to an open Wi-Fi network using WPA3, the traffic between your device and the Wi-Fi access point will now be encrypted even though you didn't enter a passphrase at the time of connection.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=71)** The second feature is the Dragonfly handshake.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=75)** When a device connects to a Wi-Fi access point, the devices perform a handshake that ensures that you've used the correct passphrase to connect and negotiates the encryption that will be used to secure the connection.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=89)** In 2017, it was found that the WPA2 handshake was vulnerable to what's known as the KRACK attack.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=97)** WPA3 comes with a new handshake protocol called Simultaneous Authentication of Equals, or more simply, just Dragonfly.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=107)** This handshake is claimed to make it almost impossible to crack the password of a network and is resilient even when weak passwords are used.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=116)** The third feature is simple connectivity for devices without a screen and keyboard based on scanning the QR code of a device by using a smartphone.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=128)** This is important for encouraging IoT vendors to incorporate security into their devices.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=134)** The fourth feature is more advanced crypto algorithm set based on 192-bit AES key.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=141)** This is designed to ensure longevity for WPA3.

> [!info]- Semantic Content
>
> **Env Vars:** wpa3 (7), wpa2 (3), krack (1), aes (1)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** public (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Understanding Dragonblood
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=0)** - [Instructor] Unfortunately for WPA3, the researchers who created the crack attack on WPA2 have been able to demonstrate that WPA3 is vulnerable to a number of attacks with a research and testing program known as Dragonsblood.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=16)** Their research initially identified timing leaks and authentication bypasses in the WPA3 daemon, and subsequently discovered downgrade and denial of service attacks.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=28)** A number of side channel attacks were discovered, including one which worked even after the equipment was patched.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=35)** Interestingly, their research suggests that for the expenditure of a dollar on an Amazon EC2 instance, there would be enough computing power to brute force crack the password.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=46)** Also interestingly, the design of WPA3 did not address a known history of side channel leaks, despite these being raised as concerns.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=57)** The researchers conclude that a minor change to Dragonfly's password and coding algorithm, removing the peer MAC address, would've prevented most of the attacks.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=68)** The researchers have made a set of tools available for testing WPA3 access points and clients.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=75)** Dragonslayer can be used to bypass authentication if a valid username is known.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=80)** Dragondrain tests whether or to what extent an access point is vulnerable to denial of service attacks against Dragonfly.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=89)** Dragontime is used to carry out timing attacks on Dragonfly if certain settings have been configured, and Dragonforce is used to carry out password partitioning attacks, an attack which is similar to a dictionary attack.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=104)** On 10th of April, 2019, the Wi-Fi Alliance issued confirmation of the research, stating that recently published research identified vulnerabilities in a limited number of early implementations of WPA3-Personal.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=120)** Vendors of existing WPA3 products are now issuing software patches to mitigate the currently known vulnerabilities.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=128)** There is some controversy over Dragonfly.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=131)** A close variant received significant criticism while being standardized, while a different variant claims to be validated through a formal security proof.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=142)** These contradictory claims raise the question of whether Dragonfly is secure in practice.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=147)** It's clear that WPA3 has a long way to go before it can be trusted to be the secure Wi-Fi standard that it claims to be.

> [!info]- Semantic Content
>
> **Env Vars:** wpa3 (8), wpa2 (1), ec2 (1), mac (1)
> **Code Keywords:** raise (1)
> **Definitions:** known as (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 2. Rogue Access Points

#### Harvesting connections with an evil twin
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=0)** - An evil twin is a rogue access point which has been activated in order to attract unwary users to connect, and then acts as a man-in-the-middle monitoring their traffic.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=11)** It does this by posing as a legitimate public hotspot access point.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=16)** A good evil twin will look in every respect the same as its target.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=21)** It will have the same SSID as a legitimate access point.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=25)** The same BSSID, and will operate on the same channel, but with a stronger signal in its local zone.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=33)** An evil twin may just wait for new devices to join the network, or it may forcibly de-authenticate clients from the legitimate access point to force a reconnect, this time to itself.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=46)** In today's world where free public Wi-Fi hotspots are becoming the norm, and evil twin is a significant threat.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=53)** Let's take a look at airbase-ng, which is a simple Kali tool for turning a wireless card into an access point.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=60)** I'll start by setting my wireless LAN adapter into monitor mode.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=65)** Let's see what access points are close by.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=70)** Okay.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=71)** We can see that my Telecom access point is active, I'll now set my adapter to "evil twin" it.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=79)** We're now setup, so all we need to do is wait for a user to connect.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=83)** I'll reconnect with my mobile, which was previously connected to the legitimate access point.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=88)** And here we go, we can see my phone connecting.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=92)** And I've now connected.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=93)** Now I've got a user on the access point, I can use Wireshark to monitor the traffic.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=98)** I've started Wireshark, and I'll set a filter for the access point.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=104)** And I'll select "wlan0mon" as the interface and start Wireshark capturing.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=110)** Okay I'm browsing the internet on my mobile, and I can see the traffic routing through Wireshark, as 802.11 packets.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=117)** I'll stop the capture now.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=119)** If we look at the traffic, we can see we're capturing and re-routing WPA encrypted traffic as a man-in-the-middle.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=126)** With just a Kali distribution and a good external antenna, I've successfully used airbase-ng as an evil twin of my access point to harvest client connections.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), let (2), interface (1)
> **Env Vars:** ssid (1), bssid (1), lan (1), wpa (1)
> **Definitions:** is a  (3)
> **Versions:** 802.11 (1)
> **Prerequisites:** setup (1)
> **Speakers:** - an (1)

#### Set up the WiFi Pineapple
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=0)** - [Instructor] If you're serious about wifi testing work, you'll want to arm yourself with a WiFi Pineapple.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=6)** These are available directly from the Hak5 website.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=10)** The WiFi Pineapple is a dedicated hardware device, which runs Linux and OpenWrt and provides a full capability for wireless testing, either directly out of the box or for the more complex testing through a custom software installation.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=24)** The WiFi Pineapple has been available for some time with the Nano and Tetra being popular early models.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=31)** It now comes in two models, the Mark VII and the Enterprise version.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=35)** We'll be taking a look at the Mark VII.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=37)** These are both based on the PineAP suites of software.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=40)** The WiFi Pineapple is a versatile tool which can be used to visualize the wifi activity in its area.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=46)** Can capture client handshakes to gain the network keys and can act as a rogue access point to directly capture client connections.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=53)** The standard unit works for 802.11 b/g/n networks.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=57)** And there's an add on unit for 802.11/ac.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=60)** The unit has three antenna and each can be tasked independently.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=65)** Installing the Wifi Pineapple is pretty simple.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=68)** Comes with a USB-C cable, which plugs into a USB-C port on your computer.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=73)** After plugging it in, go to the HTTP address 172.16.40.2.1 port 1471.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=80)** On the initial connection, you'll be invited to download the latest firmware and update the unit.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=86)** It asks for a wifi network to download the software, put in your normal network, SSID and key, the download will begin and then the software will be installed.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=95)** Once it's updated, the LED will remain steady blue and you can close the browser then open it and connect again.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=102)** After installing the new firmware, you're presented with a welcome screen and can begin set up.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=107)** When asked you should press the button once, continue with radios disabled.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=111)** You'll now be asked for a password.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=113)** You can enter that and also select your time zone.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=116)** You can then enter an SSID and network key for your management network and an SSID for the open network.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=123)** I've called my management network, Cybex5 and the open network fruitnet.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=128)** You'll also select your country.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=130)** The next setup screen is where you can run a fully open pineapple or restrict it to specific devices and SSIDs.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=137)** This is very useful when on an assignment and you want to constrain the use of the WiFi Pineapple.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=143)** I've left this open for now.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=145)** The penultimate configuration screen is to determine whether you want to use the light or dark console interface.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=151)** I'll be using the light option.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=153)** And that's it for the configuration.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=154)** The unit then asks us to accept the terms and conditions saves its configuration, then we're ready to go.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=161)** While the WiFi Pineapple provides the built-in capability to operate as a rogue access point and capture devices.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=168)** it also allows third party modules to be developed and installed.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=171)** This gives it a much greater capability as a network testing tool.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=175)** Here, we can see the modules available for the Mark V, and there's a of them.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=179)** Unfortunately, the Hak5 crew hasn't yet updated this website with the Mark VII.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=184)** And the reason is that as we can see many of the Mark V modules, haven't yet been ported to the new platform.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=191)** Hopefully this will change before too long.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=193)** Okay, that's it for setup.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=195)** Let's go and see how to do testing with the WiFi Pineapple.

> [!info]- Semantic Content
>
> **Env Vars:** vii (3), ssid (3), usb (2), http (1), led (1)
> **Versions:** 802.11 (2), 172.16.40 (1), 2.1 (1)
> **Code Keywords:** continue (1), interface (1), let (1)
> **Prerequisites:** setup (2), set up (1)
> **Exercise Files:** download the (2)
> **Definitions:** is a  (2)
> **Ports:** port 1471 (1)
> **UI Navigation:** go to (1)

#### Harvest credentials with the WiFi Pineapple
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=0)** - [Instructor] We've installed our WiFi Pineapple, and we can now activate it as a rogue access point to start harvesting client devices.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=7)** Let's log in.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=14)** We're at the dashboard, and the first thing I'll do is get news, to confirm we have a good internet connection.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=21)** Now, okay, we're good.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=22)** I'll go to the Recon page, listed on the left, and I'll scan for access points.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=28)** I'll take the default 30 seconds and start the scan.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=32)** We can see a number of open networks, with an OUI of Orient Power Home Network Ltd.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=37)** These are networks that we found on previous scans, and that the WiFi Pineapple is spoofing as rogue access points.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=44)** We can also see a real network, COMFAST_AP, which is running WPA2.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=50)** So we've done our reconnaissance now, and have a good idea of our wireless environment.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=54)** We've established a number of networks which are open, which unsuspecting victims can connect to.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=59)** I'll check the clients on our real network, and I'll click on the client with the MAC starting D8:9B.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=66)** And in the slideout panel, I'll add the client MAC to the filter.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=73)** Now, I'll do the same thing for OO:45.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=81)** Okay, so now on my mobile phone, I'll connect to the Brambles network.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=86)** On the PineAP Suite tab, we can see that we have 21 SSIDs in the pool, and one client connected to a pool AP.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=94)** That's the connection I've just made.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=95)** I can select filtering on the top bar, and we can see that the MACs have been added to the Allow List.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=102)** This is useful when limiting our scope of testing.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=107)** Okay, let's go to the Modules tab and look at Manage, and get Available Modules.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=114)** We can see that HTTPeek is available.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=118)** Let's install it.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=126)** Okay, that's installed.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=128)** And back on the Install tab, we can select it, enable it,
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=139)** and we can start listening.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=144)** On my mobile phone, I'll navigate to the Zero Bank at [webappsecurity.com](https://webappsecurity.com) and log in.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=153)** As soon as I do, we can see the URL is being captured.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=156)** We can see the cookies, with the session ID, and below that, the POST data that's being captured.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=163)** We can see the username and password being sent in the login page.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=167)** We have successfully become a man in the middle.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=169)** We can see the HTTP traffic being exchanged, and we've captured credentials.

> [!info]- Semantic Content
>
> **Env Vars:** mac (2), oui (1), comfast_ap (1), wpa2 (1), url (1)
> **UI Navigation:** go to (2), click on (1), navigate to (1)
> **Code Keywords:** let (3)
> **Prerequisites:** install (2)
> **URLs:** [webappsecurity.com](https://webappsecurity.com) (1)
> **Ports:** :45 (1)
> **API Endpoints:** post  (1)
> **Speakers:** - [instructor] (1)

#### Capturing WPA handshakes
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wpa-handshakes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wpa-handshakes?u=76281980&t=0)** - [Instructor] The Wi-Fi Pineapple has the ability to listen on a network and capture WPA handshakes.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wpa-handshakes?u=76281980&t=5)** We'll go to the Raycom page and select my compassed AP and at the slide out panel we'll select capture WPA handshakes.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wpa-handshakes?u=76281980&t=17)** I'll go to the top of the screen to the handshakes panel.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wpa-handshakes?u=76281980&t=24)** We can either actively deal authenticate client devices to force them to reacquire the connection, or we can wait for a new connection to appear.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wpa-handshakes?u=76281980&t=32)** For the purposes of the course, I'll shut down Wi-Fi and start to tip again on my iPad.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wpa-handshakes?u=76281980&t=37)** Okay, let's refresh the screen.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wpa-handshakes?u=76281980&t=41)** We can see that we've captured a WPA handshake and we can now download it as a PCAP file to do further analysis with our normal Wi-Fi testing tools.

> [!info]- Semantic Content
>
> **Env Vars:** wpa (3), pcap (1)
> **UI Navigation:** go to (2)
> **Code Keywords:** let (1)
> **Code Identifiers:** ipad (1)
> **Speakers:** - [instructor] (1)

#### Scanning and attacking with Fluxion
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=0)** - Fluxion is a custom tool for setting up and running a rogue access point, and it runs on Kali Linux.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=8)** It can be cloned from the site shown here.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=10)** Its purpose is to get a network hash and then set up a rogue access point using that hash.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=19)** I've already cloned Fluxion on my Kali system, and I have an external RA link wifi USB device connected to Kali.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=29)** Let's see how Fluxion works.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=31)** Note that when you first start it on your system it will check for any missing dependencies and install them, and that can take a while.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=38)** And then it will ask you what language you want to use.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=41)** I've already done my first run, so let's jump straight into using the program.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=47)** We'll CD to Fluxion, and we'll run sudo fluxion.sh.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=70)** We can now pick the channel we want to run on.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=72)** If we know the channel our target is using then we should use that.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=76)** We don't, so we'll scan all 2.4 gigahertz channels.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=85)** The scanner now starts.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=86)** We're given the instruction to close the scanner after it's checked the available networks.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=94)** So we'll do that.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=100)** We've now identified some networks, and the one we want to attack is COMFAST AP.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=107)** We'll select that.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=112)** And we'll select our RA link wifi modem.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=126)** We have already run this, but we'll reset the attack and configure it again.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=133)** Let's run a passive monitoring attack and wait for a connection to be made.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=148)** We'll take the recommended verification with cowpatty, and we'll check for a handshake every 30 seconds.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=159)** And we'll take the recommended synchronous verification.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=165)** Okay, the attack's now taking place, so I'll connect to the network.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=174)** Okay, the attack's complete, and we have a valid hash added to the Fluxion database.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=179)** That's the first stage completed of setting up our rogue AP.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=193)** Now that we've obtained a hash, we can use that to run a captive portal attack.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=200)** We'll select another attack.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=212)** For this demonstration, I'll use the default captive portal interface.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=217)** But as you get familiar with Fluxion, you can create your own custom user portals.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=228)** We'll select captive portal and we'll continue to attack COMFAST AP.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=235)** We'll skip target tracking, and we'll select WLAN zero as our RA link interface.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=245)** Method of deauthentication, we'll select air replay, and we'll use a rogue AP with host APD as the recommended access point service.
>
> **[4:18](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=258)** We'll select cowpatty for our hash verification.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=262)** We've already got the hash in our database from our initial handshake snooper, so we'll use that.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=273)** And we'll again use cowpatty for verification.
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=279)** And we'll create a new SSL certificate for our portal.
>
> **[4:49](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=289)** We'll use the recommended disconnected connectivity, and we'll select 47 as the modem type.
>
> **[5:01](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=301)** Okay, we're now running the main dashboards for our captive portal.
>
> **[5:05](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=305)** Let's see what happens when someone connects to COMFAST AP.
>
> **[5:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=311)** We firstly see in the top right hand AP authenticator the client or clients that have connected.
>
> **[5:18](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=318)** We can see Fluxion's DHCP service providing an IP address, and its DNS service active in the bottom lefthand panel.
>
> **[5:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=327)** The bottom middle panel shows the website activity.
>
> **[5:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=332)** We've captured connections, and we're now running acting as a man in the middle.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (2), while. (1), this, (1), continue (1)
> **Env Vars:** comfast (3), usb (1), wlan (1), apd (1), ssl (1)
> **Best Practices:** recommended (4)
> **Prerequisites:** set up (1), install (1), configure (1)
> **CLI Commands:** cd (1), sudo (1)
> **File Paths:** fluxion.sh (1)
> **Versions:** 2.4 (1)
> **Definitions:** is a  (1)


### 3. Bluetooth

#### Understanding Bluetooth
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=0)** - [Instructor] For a period around 2008, Bluetooth became a topic of keen interest to security researchers due to a weakness which enabled information to be silently sucked out of mobile phones across their Bluetooth channel.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=14)** This has subsequently been fixed but interest continues in this form of close-end communication.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=19)** The Bluetooth protocol works in the 2.4 gigahertz frequency which is also used by WiFi and ZigBee systems and is defined by the IEEE Standard 802.15.1.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=32)** Bluetooth networks are known as Piconets and will often consist of just one master and one slave device.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=39)** They can, however, be configured to have multiple slaves, up to seven although in this case, slaves can only talk to their master node, not to each other.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=48)** A Bluetooth device is identified by its Bluetooth device address which is 48 bits or six bytes.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=55)** It's normally presented as six two-digit hexadecimal pairs separated by colons.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=62)** The top three pairs are the Organizationally Unique Identifier or OUI which is fixed for a manufacturer.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=70)** Bluetooth devices also have friendly names such as Nokia or My iPhone.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=76)** Bluetooth devices are known as class one devices if they're capable of interactions at up to 100 meters.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=83)** Class two devices if they can operate up to 10 meters and class three devices which operate at 10 centimeters or less.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=92)** Data can be transferred between Bluetooth devices as a real-time stream or as files.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=98)** Real-time data include streaming audio and video, telephony and so on.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=103)** File transfers are more usually to, from or between laptops.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=108)** To connect, the slave and master must identify each other and then form a pair.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=113)** Identifying a Bluetooth device involves scanning, known in Bluetooth terminology as an inquiry.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=119)** One device will send out an inquiry request and any active devices will respond with their address, name and other information.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=129)** Bluetooth devices may automatically bond without user interaction, usually when they've previously been connected.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=136)** For example, when you get into your car, your mobile phone may pair automatically with the car Bluetooth system.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=144)** Pairing of mobiles and laptops may require user intervention involving each participant confirming a six-digit number which is displayed.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=154)** Bluetooth devices are defined by what is known as their operating profile and for two devices to interoperate, they must share a common operating profile.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=163)** For example, to replace a serial interface cable between two computers, the devices would operate a serial port profile.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=172)** For devices which relay human interactions such as keyboard and mouse or a gaming handset, the devices would operate a human interface device or HID profile.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=183)** Hands-free headsets operate a hands-free profile or HFP.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=188)** Audio transmissions operate in the Advanced Audio Distribution Profile or A2DP and remote controllers use the Audio/Video Remote Control Profile or AVRCP.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=201)** Each of these profiles operate in a way most suited to the communication traffic characteristics.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=207)** The Service Discovery Protocol allows Bluetooth devices to identify the services offered by other devices.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=214)** In particular, the profiles offered.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=217)** SDP offers direct support for searching for specific SSIDs and for browsing services.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=224)** The implementation of a Bluetooth stack involves Bluetooth hardware device and its associated host controller interface driver.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=234)** The interface allows software in the device to talk to the Bluetooth hardware.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=238)** Below the interface, there are three basic transport layers.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=242)** USB, RS-232 serial interface and UART serial interface transport.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=247)** The bottom layer of software stack is a radio on top of which is a Baseband controller which manages the frequency hopping and channels.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=257)** This connects through the host controller interface driver to the Link Manager and its Logical Link Control Adaptation Protocol or L2CAP which control the setup and pull down of Bluetooth sessions.
>
> **[4:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=271)** The Baseband layer can also connect directly through to application-level audio.
>
> **[4:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=276)** Above the Logical Link Control Adaptation Protocol is the data in the form of TCP, HCI or RFCOMM protocols which then feed into applications.
>
> **[4:49](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=289)** In addition, applications can receive control messages from the Link Manager.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=294)** RFCOMM is a cable replacement protocol which provides a virtual serial stream and we'll be seeing more of this shortly.

> [!info]- Semantic Content
>
> **Env Vars:** rfcomm (2), ieee (1), oui (1), hid (1), hfp (1)
> **Code Keywords:** interface (8), case, (1), require (1)
> **Definitions:** is a  (3), known as (2)
> **Analogies:** such as (2), for example (2)
> **Versions:** 2.4 (1), 802.15.1 (1)
> **CLI Commands:** node (1)
> **Code Identifiers:** iphone (1)
> **Prerequisites:** setup (1)

#### Scanning for Bluetooth devices
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=0)** - [Tutor] To use Bluetooth with Kali in a virtual environment we need to have a USB Bluetooth adapter loaded, just like we do for Wi-Fi.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=9)** I've added my Targus USB Bluetooth device to the Kali VM in VirtualBox, which I can see if I click on the USB configuration.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=17)** The Targus is shown as a Broadcom Bluetooth device.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=21)** I'll open a terminal window and check my USB devices with the lsusb command.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=27)** We're cool, we can see a Broadcom Bluetooth device.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=31)** I'll now see what the Bluetooth interface is with the hciconfig command, and we can see hci0 is available for use with a Bluetooth device address of 00 19 0E 18 8A 0E.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=47)** I can now look for devices using hcitool.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=51)** I'll use the minus minus info switch enumerate the device and the minus minus oui switch to tell me what type of device it is.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=60)** Okay, we found three devices.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=63)** The first is my iPhone with this Bluetooth device address of 7C 11 BE CB 25 C2, and I can see its name, the chip set manufacturer, and a detailed list of Bluetooth capabilities.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=77)** It's also shown that it's manufactured by Apple, Inc.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=81)** And shows the first three bytes of the address.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=84)** These are the OUI, the organization unique identifier.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=89)** I've also detected my Nexus 7 tab and my Acer E130 smartphone.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=96)** I can also use the tool included with Kali to scan for Bluetooth devices.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=101)** I'll go to the Applications menu, Wireless Attacks, Bluetooth Tools, and we can see bluelog.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=110)** As bluelog opens a terminal window I can just call it from the current one.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=116)** Okay, I can run a live scan by entering bluelog minus l.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=123)** Let's leave it to run for a few seconds and then we'll check what it's found.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=128)** Okay, I'll terminate the scan with a control + C.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=132)** I can see the output is in slash temp slash live dot log, so let's look at that.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=140)** Okay, bluelog has found the three devices, my Acer E130, my Apple smartphone, and my Nexus 7.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=149)** BT scanner is another tool for Bluetooth scanning that's provided as part of the Kali distribution.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=155)** We can run this by executing the tool with no options.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=159)** The commands are shown at the bottom of the window.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=161)** I'll press i to do an inquiry scan.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=164)** Okay, we've found all three devices again.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=167)** I'll quit this now.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=170)** We can use the L2 ping tool that comes with Kali to make sure our devices are active.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=175)** Let's check the iPhone.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=178)** Okay, we can see the response from the device as we would with a network ping.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=183)** Let's try that again with the Nexus 7.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=187)** Okay, now I've also got an Android phone with Bluetooth active, but set not to be visible to other devices.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=195)** The standard scanning tools didn't find it.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=198)** We can find devices which are hidden, but need to do so using a brute force search across an address range.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=204)** To do this, Kali provides another tool called redfang.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=207)** It's in the Bluetooth testing menu, but we can just call it from the command line.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=211)** Let's have a look at its options using the minus h switch.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=216)** Okay, so we can see two important switches, the r switch to specify the address range to scan and the s switch to do Bluetooth discovery.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=225)** I'll now run it to search for a device with a Bluetooth device address in the range 0CD6BD46D4002FF.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=236)** Note that we omit the colons when specifying the range.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=240)** Okay, let's see what it finds.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=243)** Okay, I'll stop redfang there now.
>
> **[4:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=248)** Redfang found a discoverable device, my iPhone, and we found a hidden device with address 0CD6BD46D427.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=259)** It's called PE TL10, and that's my Android phone, and it's using a Broadcom chip set.
>
> **[4:25](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=265)** We've got a dump of all its features.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=268)** Doing a scan of the whole address range sounds daunting, but in fact the top 24 bits of the organization unique identifier, as we saw earlier with the iPhone detection.
>
> **[4:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=277)** By knowing this, the address space to search for all devices of that kind is reduced to 24 bits, but it's still a large search.
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=285)** Unfortunately from a security perspective there is a way to determine a hidden Bluetooth address.
>
> **[4:52](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=292)** The Bluetooth address will often be close to the Wi-Fi Mac address, so a redfang scan can be carried out on a mobile phone if it's been detected on a network.
>
> **[5:01](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=301)** Let's check it out.
>
> **[5:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=303)** I'll set my Wi-Fi adapter into monitoring mode and run airodump.
>
> **[5:09](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=309)** Okay, there's my iPhone with a Mac address of 7C11BECB25C3, just one higher than the iPhone's Bluetooth address.
>
> **[5:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=320)** So by combining Wi-Fi scanning and redfang, detecting hidden devices is pretty straightforward.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), switch (5), this, (2), interface (1)
> **Env Vars:** usb (4), e130 (2), oui (1), tl10 (1)
> **Code Identifiers:** iphone (6)
> **UI Navigation:** switch to (2), click on (1), go to (1)
> **CLI Commands:** find (2), make (1)
> **Tools:** terminal (2), command line (1)
> **Cross-References:** as we saw (1)
> **Definitions:** is a  (1)

#### Legacy attacks using Bluesnarfer
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=0)** - [Instructor] One of the early tools for Bluetooth hacking is called Bluesnarfer.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=5)** As with a number of the tools in the penetration testing kit, this has been overtaken by security improvements in mobile phone technology and isn't a viable attack these days.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=15)** The original concept of Bluesnarfer was to pair silently with another device and then issue commands to gain access to stored information or to issue AT commands, which allow a remote attacker to send messages or dial numbers.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=29)** While it's not a viable attack anymore, it's useful to go through the process to understand how it worked.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=35)** Let's check our Bluetooth setup.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=38)** Okay, I've got my Avantree adapter plugged in and ready to go.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=43)** That's the Cambridge Silicon Radio Bluetooth dongle.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=47)** And it's on hci0, as I'd expect.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=51)** Let's also check what Bluetooth devices we can see with hcitool, and I can see my Acer mobile device.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=60)** I'll ping it to make sure it's responding.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=63)** In order to configure kali to access the phone, I need to create and set up a temporary rfcon directory and create a virtual device file for hci0 to manage the adapter.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=75)** This command creates a pipe with read/write access which acts as a buffer which links the driver with the software that's using it.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=83)** The c flag indicates this is a character-based device with major and minor device numbers of 216 and 0.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=90)** I now need to know which channels the phone is communicating on, and I'll do this by running another tool called sdptool.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=99)** Okay, by reading through the output, I can see the phone is connecting on channel 10 for its hands-free audio gateway, and channel 11 to access the headset audio gateway.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=109)** Firstly, I'll see if I can access the basic phone information.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=113)** This may take a few attempts.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=117)** Okay, we got that first time.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=119)** When the device name appears, we know that Bluetooth is connected.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=123)** The command phase of Bluesnarfer is a little unreliable, so we need to be a little persistent sometimes.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=128)** But that showed me a valid information response.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=131)** Let's now try and access the phone book records.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=134)** I'll ask for the first 10.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=137)** Okay, again we have to be a little persistent.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=141)** Okay, so we can see we've got the address entries.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=144)** In this case, Bluesnarfer had a problem making its initial connection to get the device name, but it did manage to access the phone book records.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=152)** It's listed my testing phone book data, not all 10 that I requested, because some entries in the phone book may be deleted records.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=159)** While this is a useful exercise in better understanding the way mobile phones manage their channel use, it doesn't work with newer phones, and so it's currently of legacy interest only.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=170)** Although it's always possible that we'll see variants of this form of attack emerging in the future.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1)
> **Definitions:** is a  (3), is called (1)
> **Prerequisites:** setup (1), configure (1), set up (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 4. Additional Tools

#### Using FernWi-Fi Cracker
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=0)** - [Instructor] Kali comes with a number of tools for WiFi testing.
>
> **[0:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=3)** One of them is the Fern WiFi Cracker.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=6)** I'll select it from the Applications menu under the Main Wireless Attacks menu.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=12)** The first thing I have to do is select the monitoring interface to use.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=16)** Fern has detected the interfaces available and I just need to click on the one I want and select it.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=23)** Fern will automatically put this into monitor mode and display a message when it's ready.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=28)** Okay, I can now scan for access points.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=31)** Fern will initialize its scanning engine and then start monitoring for access point broadcasts.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=36)** It takes a couple of minutes to pick up all the networks.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=38)** As it does so, it shows a message next to the WEP and WPA symbols showing what has been detected.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=45)** It also maintains a database of networks and if one have been cracked, it will have its key stored.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=51)** We can see there are no keys currently stored.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=53)** Okay, I'll have a look at the WPA access points.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=57)** This shows a panel with the detected access points.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=61)** As we click on each, its details are shown below the panel.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=64)** We have two options for attack, a regular de-authentication attack on the WPA key or a WPS pen attack.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=72)** I'll select my TPG 83nj WPA2 secured access point and I'll leave this as a regular attack.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=81)** At the bottom right, I can select a dictionary file.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=85)** Fern WiFi comes with its own common .txt dictionary but there are quite a lot in the user share wordlist folder that you can choose from or you can create or import your own.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=96)** Let's go select the Fern dictionary.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=99)** Fern needs a client to be able to run its WPA attack.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=102)** And it monitors the packets going to and from the access points looking for clients which were associated with them.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=108)** When it finds one, Fern will add it to the list of MAC addresses on the bottom right.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=113)** Let's see what we've got and pick one.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=116)** I can now press the WiFi Attack button to start the attack.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=120)** Fern begins by probing the access point and then de-authenticating the clients it's found.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=126)** I'll let Fern do its thing for a minute or so.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=130)** And it's now found the network password, our familiar ABCD1994.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=136)** Okay, I can close this now and we can see that there's now one entry in the key database.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=144)** There's also a professional version of Fern WiFi available with much more functionality and better instrumentation which is a useful upgrade for professional wireless testers.

> [!info]- Semantic Content
>
> **Env Vars:** wpa (4), wep (1), wps (1), tpg (1), wpa2 (1)
> **Code Keywords:** let (3), interface (1)
> **UI Navigation:** select the (2), click on (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Discovering networks with inSSIDer
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=0)** - [Instructor] A number of the older tools for network testing such as NetStumbler are not well suited to modern testing practice.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=7)** But there are more recent tools available, inSSIDer is a replacement tool for NetStumbler, and a personal use version can be downloaded from the website shown.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=16)** Note that the personal version, inSSIDer 4, is a paid but low cost shareware product.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=22)** InSIDDer can be used for detecting wireless networks and for identifying network strength during a walkaround or wardrive.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=30)** InSSIDer is simple but effective, let's take a look at what it can do.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=34)** On starting inSIDDer the main screen shows the detected networks in it's logical view.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=40)** The WiFi menu item shows the WiFi adapters, in my case the internal WiFi adapter has been selected for the scan.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=47)** I can select a Atheros, my external alpha antenna, and inSIDDer will switch to that for it's collection.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=55)** The pane at the bottom left provides a graph of signal strength in the 2.4 gigahertz range, and at the right, the five gigahertz range.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=64)** The default logical view in the main pane shows the SSID channel protocol and whether it's secure.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=71)** Using the button at the top right I can switch to physical view, and we see the BSSID or MAC address of the access point.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=80)** There are also some filters which can be used to limit the display to just a specific SSID, BSSID channel or minimum signal strength.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=89)** I won't bother with them right now.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=91)** A link symbol is shown against my network, note that an extender, and in fact any access point with the same name, won't show in the logical display, but it will in the physical display.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=103)** Okay, I'll switch back to the logical display for the moment, if I click on one of the entries I get a more detailed information on the network, including the security and the access point vendor and also a detailed signal stream for each physical network in this group.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=120)** If I switch to physical mode, and click on an entry, I get additional details of the radio and also any other access points using the same channel.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=129)** InSIDDer also indicates the best channel for this access point to be on.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=133)** InSIDDer is relatively simple, but it's an easy to use tool to identify access points and to support serving.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (4), let (1)
> **Env Vars:** ssid (2), bssid (2), mac (1)
> **Code Identifiers:** inssider (2), insidder (2)
> **UI Navigation:** switch to (2), click on (2)
> **Definitions:** is a  (2)
> **Warnings:** note that (2)
> **Versions:** 2.4 (1)
> **Analogies:** such as (1)

#### Capturing wireless packets with Acrylic Analyzer
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=0)** - Acrylic Analyzer is a tool to detect and enable testing of wireless networks.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=5)** A free version is available and can be downloaded from the website shown.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=9)** The professional version is reasonably priced and has a lot of features.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=13)** I'll be using that one in this demonstration.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=16)** Acrylic Analyzer can be used for detecting wireless networks and for identifying network strengths during a walk around or war drive and for identifying clients associated with the access points.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=29)** It also provides wireless network, packet capture and testing of passwords and pins.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=35)** On starting Acrylic Analyzer the main screen comes up in the access point view, the WiFi symbol at the top.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=41)** I can press the play button to start detecting networks.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=47)** The main pane shows the SSID, the BSSID, the receive signal strength, the channel, some quality of security information and if we slide across we can see the vendor information and details of the type of access point and the packets process.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=64)** The pane at the bottom provides a moving trace of signal strength.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=68)** Clicking on an access point will select the entry and subsequent actions such as the lower tabs will provide additional information for that entry.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=77)** I can also right click on an entry and get a further context menu.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=82)** Let's have a look at some of these options.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=84)** I'll select add to inventory.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=86)** Adding a device to the inventory allows me to put in a friendly name.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=90)** I'll make this one Telecom Modem and this will be displayed instead of the BSSID.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=97)** Okay, I'll save this.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=99)** If I want to see my inventory, I can click on the options symbol at the top right, select windows and select the bottom menu item, inventory.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=110)** I can right click the entry I've just added and I have a maintenance menu for inventory items.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=116)** This is really useful to keep track of devices on your home network and of course it's invaluable for a small business with its larger fleet of equipment.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=126)** The lock to channel option locks Acrylic to the channel of the selected entry and it's useful for limiting the amount of information being updated.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=135)** The next context option, show Wps information provides a numeration of the access point through its Wps messages.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=143)** This provides manufacturer, model and number, device name, serial number and so on.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=150)** I'll select my home network and I'll select center connectivity module.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=156)** This option allows us to run a dictionary attack against an access point to test its resilience.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=161)** We need to use a free interface so I'll select the Atheros.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=166)** Acrylic provides a small demonstration dictionary with a few entries.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=169)** For serious use, we'd need to set up our own set of dictionaries.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=174)** I'll select the default dictionary and set it.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=177)** I'll select the connectivity tab in the lower pane and we can see that we have the task registered.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=185)** I've disconnected my system from the network as Acrylic needs to use the connection for this test.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=190)** I'll right-click and start the attack.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=194)** The status information on the right advises progress and we can see that the passwords so far are failing.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=201)** I'll leave this for the moment while it runs through the dictionary.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=206)** Now, it's tried the password ABCD1994 and then finishes the testing having found the network key.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=214)** Acrylic provides options to capture the details of the scan and it can be tweeted, copied to the clipboard for reporting or exported in various forms.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=223)** Okay, that's a quick look at some of the main pane options and I'll leave them for now.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=228)** The lower pane has a number of tabs.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=230)** The signal strength tab provides a summary view of access point signal strength.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=235)** The network quality tab provides a detailed analysis of the signal for the selected access point including its speed, signal-to-noise ratio and security.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=246)** The 2.4 gigahertz and five gigahertz tabs provide a view of which access points are operating in what part of their spectrum.
>
> **[4:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=255)** The networks requested tab shows which client devices have requested access to the selected access point.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=262)** The detailed information tab provides the details of the access point or client, its manufacturer, model and serial number, its device name and its capabilities.
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=272)** Before I leave the access point view, I'll select the options symbol at the top right and select change in the top entry.
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=281)** We can see monitor mode is off and we're using the built-in interface.
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=286)** I'll turn on monitor mode and I'll select the Atheros interface and press okay.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=294)** The main pane will clear and then start to refresh using the signals captured by the Atheros.
>
> **[5:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=300)** We see the access points again but now we can also see a plus sign to the left of the SSID.
>
> **[5:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=307)** This is shown where an access point has device activity and the associated devices can be seen by expanding the plus sign.
>
> **[5:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=314)** Here we see the MAC address of the client on my home network.
>
> **[5:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=319)** The clients of course don't have a channel shown, they use their access point channel.
>
> **[5:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=324)** The next view is the station's view and I select that by clicking the cell phone icon to the right of the access point WiFi symbol.
>
> **[5:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=331)** This view shows all the BSSIDs that have been identified by Acrylic with their information enumerated.
>
> **[5:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=338)** These are shown as access points or clients or undefined active or passive devices.
>
> **[5:43](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=343)** We can see activity taking place as clients request associations.
>
> **[5:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=347)** Right-clicking an entry provides a similar set of options to the access point screen with the exception of the lock to channel option which is replaced by add to multicast option which isn't currently active.
>
> **[5:58](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=358)** The next view at the top is the wireless packets view.
>
> **[6:01](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=361)** Selecting the view shows the packet screen but with no packets.
>
> **[6:04](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=364)** To see the packets, I need to turn on packet viewing.
>
> **[6:09](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=369)** The packets are shown as entries in the top pane.
>
> **[6:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=372)** Their full radio frames with their IEEE802.11 framing if we're interested in IP packets, they're held inside the IEEE802.11 packets in the data section.
>
> **[6:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=384)** I have a scroll bar on the right and if I move it down, I can see that we've got management control and data packets.
>
> **[6:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=392)** If I flick on a packet, we see the radio packet structure shown in the bottom left pane and the raw data in the bottom-right pane.
>
> **[6:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=400)** Note that the structure is limited to the WiFi elements and the data content isn't structured in any more detail.
>
> **[6:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=406)** If I expand the packets, we can see the structure.
>
> **[6:50](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=410)** IP information is held inside the IEEE802.11 packets in the data section.
>
> **[6:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=416)** But if the air component of the path is encrypted then we won't see a great deal of useful information.
>
> **[7:01](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=421)** However, this Excel access point is open and I've just pinged it.
>
> **[7:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=426)** We can see a data packet from the Shenzhen device, that's my luminosity tab to the ZyXEL.
>
> **[7:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=432)** I can select a field in the left-hand bottom pane and right click and add that to the filter.
>
> **[7:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=442)** Now, we've got a manageable list of packets originating from the luminosity.
>
> **[7:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=447)** I'll select the data packet above it and I'll expand the data field, I'll click on content and the content part of the packet on the right is highlighted.
>
> **[7:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=457)** We can see the expected 4500 IP header field and the plain text contents in the packet on the right.
>
> **[7:45](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=465)** The next major tab at the top is the script tab and we can see a number of scripts come included with Acrylic.
>
> **[7:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=471)** The top section is for WPA keys and the bottom for Wps pin codes.
>
> **[7:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=477)** Scripts are used to assist with the testing of passwords and pins.
>
> **[8:01](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=481)** This is a powerful feature in an advanced topic so I won't delve into it any further.
>
> **[8:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=487)** Okay, so that's a quick run through the main features of Acrylic WiFi professional, a serious tool for wireless testers.
>
> **[8:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=493)** There's also a commercial companion WiFi heat map tool available from the Acrylic website that can be used to do WiFi signals sprint mapping through out complex sites.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (8), click on (3), right-click (1)
> **Env Vars:** ieee802 (3), ssid (2), bssid (2), abcd1994 (1), mac (1)
> **Code Keywords:** interface (3), let (1), this. (1), module (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Versions:** 2.4 (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)

#### Heat mapping with Ekehau
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=0)** - [Instructor] When testing wireless networks it's useful to be able to map out, over the network site, the various network access points and their coverage.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=9)** This not only helps identify unknown networks, it also identifies network cool and hot spots, as well as neighboring networks which intrude into the site.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=19)** There are many commercial heat mapping software packages, including Acrylic.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=23)** However, there's a free software package, which is popular, called Ekahau.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=27)** It's available for download at the site shown.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=31)** Ekahau HeatMapper is an entry-level product which can be upgraded to the commercial site survey tool.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=38)** It doesn't provide a scaling tool to enable the scale to be set on the map, but the commercial upgrade does.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=44)** It also doesn't allow multiple floors to be stacked on top of each other, something other tools may do.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=49)** Nevertheless, HeatMapper is pretty useful for many home and business sites.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=54)** The download and installation is straightforward.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=56)** I've already got it installed.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=58)** So let's go take a look at it.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=60)** The entry screen provides information on other Ekahau products and lets me open the tool either with my own map or alternatively using a simple grid.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=70)** Maps can be imported in many file formats, including BMPs, JPEGs, PNGs, GIFs, PDFs and DWD/DXF CAD drawings.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=80)** I've drawn a map of my site in PowerPoint and exported it as a JPEG, so I'll load that.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=86)** On the left, we can see the access points that have been detected and the strength of their signal.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=92)** I'll do a very simple one point site survey to get an idea of how the software works.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=97)** I'll just left click a couple of points close together as waypoints and then right click to terminate the walk.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=103)** We can say a number of access points, some clustered at the point within my site, and many on the top and bottom parameters, which were externally detected networks.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=113)** As I click on them, the heat map shows their signal strength as a point value around the static survey location and estimated across the site.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=122)** Obviously, with a static survey, this is very approximate.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=126)** The labels above the access point risk can be used to select the sort order, useful when there's a lot of access points.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=135)** I can select the Take Screenshot button and this will create a PNG image of the current heat map on the screen.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=142)** To carry out a mobile heat map survey, we would have the software available on a laptop or tablet and select a start point, then we'd left click the current location on the map and start walking around the site.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=154)** As we walk, we'd frequently click the point on the map where we are.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=158)** During this time, the HeatMapper is capturing the signal strength of each access point and extrapolating it between points.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=166)** Once we've walked around the whole area, we can right click to terminate the signal capture.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=171)** HeatMapper will then calculate the signal strength across the map for each access point.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=176)** After right-clicking, we can check the coverage of all access points.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=181)** I've run a proper site survey throughout my location and saved the results from a number of different perspectives.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=186)** Let's load them and see what we have.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=189)** The first is from the perspective of my Zyxel access point.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=192)** The double lines show the survey path and this enables signal strength across the site to be determined and so the results can be much more accurately mapped.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=201)** Note that we have now placed access points either close to where they are in the site or at the perimeter in the direction which they're located.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=210)** We can see that the Zyxel has good coverage throughout the site.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=213)** The next is the Optus external access point, which becomes increasingly less detectable as we move left across the map, which is consistent with an external access point on the right perimeter, The third is my Telecom access point, which is located on the left of the map, but in a sheltered location.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=232)** It's signal is much weaker to the right of the map, not due to distance, but due to internal structural impediments.
>
> **[3:59](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=239)** As we can see by doing a mobile survey, we get much better signal strength information to determine coverage.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=247)** And a good quality result for all detectable networks.
>
> **[4:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=251)** Heat mapping is an important part of setting up networks, unless the penetration tester provide additional value in terms of advising optimal allocations for access points.

> [!info]- Semantic Content
>
> **Env Vars:** dwd (1), dxf (1), cad (1), jpeg (1), png (1)
> **Code Keywords:** let (2), static (2)
> **UI Navigation:** select the (2), open the (1), click on (1)
> **Definitions:** is an  (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Wi-Fi sniffing using Wireshark
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=0)** - [Instructor] One of the most popular tools for capturing packets is Wireshark, and it can do that on the Wi-Fi interface just as it does on the wired interface.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=8)** I'll demonstrate this using Wireshark in Kali.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=12)** The first thing I need to do is set the adapter into monitoring mode.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=15)** We're in monitor mode now, so let's start Wireshark.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=19)** The first screen of Wireshark displays any prior sessions in which packets were captured and the list of adapters from which to choose for this capture session.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=29)** There's a moving packet trace by each interface, so that's a good guide as to which interface is active.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=34)** The interface we're interested in is the monitoring mode adapter on wlan0mon.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=40)** I'll select this and press the blue shark fin to start capturing.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=44)** While this is running I'll connect my mobile to the network and use it to switch the Wemo power switch on and off.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=51)** I'll stop the capture now and we can take a look at what we've captured.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=56)** The first thing to check is the wireless LAN summary.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=59)** I'll select wireless from the menu and WLAN traffic.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=63)** This shows the summary by access point for traffic.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=67)** We can see that we've collected beacons but no data traffic from the first three access points.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=72)** For TPG 83nj, my access point, we've got beacons and data.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=78)** When I open the dropdown by it we can see we've collected traffic from our devices on our access point.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=87)** Let's go look at the data itself.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=89)** We can see there are a number of beacons in the traffic, and we have one selected in the middle panel.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=95)** Let's look at the packet structure.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=96)** The top level packet structure provides a frame, a radio tap, 802.11 radio information, the 802.11 beacon frame, and the 802.11 wireless management frame.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=110)** If I expand the frame I can see timing information, the overall frame length, and the protocols in the frame.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=119)** The radio tap header provides details of the channel frequency and the signal strength.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=126)** The 802.11 radio information is an extraction of packet data.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=131)** The 802.11 beacon frame has a lot of more conventional packet information, such as source, destination and receiver addresses, and the BSSID.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=141)** The remainder of the packet contains the SSID, the channel, and the configurations which are supported by the device, which of course is a key function of the beacon packet.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=151)** There's also some vendor-specific data typically relating to nonstandard or advanced features.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=159)** I'll scroll down and find the packet from my mobile, which shows up as Huawei T46, to the Belkin Wemo switch.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=167)** We can again see the frame and radio tap header and the extracted 802.11 radio information.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=173)** There's a new qos data structure in this packet.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=177)** This is a quality of service data frame and it's distinguished by the presence of a qos control field.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=182)** There are two types of qos that are used in 802.11, prioritized and parametrized, to provide functionality for delay sensitive applications The data section carries the IP packet, which we can see is encrypted.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=199)** Wireshark provides the means to passively capture Wi-Fi traffic, but with web port WPA enforce it delivers only cypher text.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=208)** However, while it doesn't have an attack capability it does know how to decrypt wireless packets if you know the key, let's do that.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=216)** I'll select Edit, Preferences, Protocols, IEEE 802.11.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=228)** We can see the enabled decryption checkbox is ticked, but we need to put in the key.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=233)** We can access the WPA key calculator on the Wireshark website.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=238)** I'll enter the network key and the SSID.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=243)** And I'll generate the PSK.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=246)** Okay, I'll select that and copy it.
>
> **[4:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=253)** Back in Wireshark I'll press Edit, Add, and I'll add a WPA PSK and paste in the key, and I can close that.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=267)** We can now see the TCP packet data from my mobile phone on 192 168 1 4 to the Belkin on port 49153 as a TCP packet.
>
> **[4:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=280)** If you know the key, Wireshark makes it very easy to read wireless traffic.

> [!info]- Semantic Content
>
> **Env Vars:** wpa (3), ssid (2), psk (2), tcp (2), lan (1)
> **Code Keywords:** interface (5), let (4), switch (3), function (1)
> **Versions:** 802.11 (8)
> **UI Navigation:** open the (1), dropdown (1), scroll down (1), checkbox (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Ports:** port 49153 (1)
> **Analogies:** such as (1)

#### Scanning with Vistumbler
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=0)** - [Instructor] A simple but effective Windows public domain scanning tool is Vistumbler.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=5)** The Vistumbler GitHub repository of executables is shown here, and if we click on the latest release, version 10, we get a list of minor releases.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=19)** Let's select version 10-6-5, and we get the download page.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=26)** This allows us to download a simple executable installer.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=30)** You'll also need to have Google Earth loaded if you want to use Vistumbler's Google Earth GPS features.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=37)** Okay, I have Vistumbler running and my TP-Link USB adapter plugged in.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=42)** And the first thing I want to do is check the interface.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=46)** I can do this by using the menu item Interface, and make sure I've selected my USB Wireless LAN Card.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=55)** Now I can do my scan by pressing Scan APs.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=63)** The access points are listed.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=66)** The main panel shows each access point with the MAC address and the SSID.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=71)** We can see an analysis of the high and low signal strength, and the channel on which the access point is operating.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=78)** We can also see the authentication and encryption modes.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=82)** If I scroll across, I can see the manufacturer and radio type of the device.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=88)** There are also some latitude and longitude figures.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=92)** Vistumbler can work in conjunction with GPS to identify exactly where the access point is located.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=98)** A useful feature for wide-ranging wardriving.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=102)** On the left side I can view the data by Authentication, by Channel, Encryption, Network Type, and SSID.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=116)** If I select Extra from the menu, and 2.4Ghz Channel Graph, I can see the power graph of the various access points.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=128)** Okay, I'll close that.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=131)** I can select the left-hand button, Graph1, and then select one or more of the access points to graph it in real time.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=142)** As noted earlier, one of the features in Vistumbler, is its GPS integration, which is particularly useful when mapping out an urban region of access points.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=152)** Setting up GPS is fairly straightforward.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=155)** Open Settings, GPS Settings, and then select the correct COM port from the drop-down box and make sure the speed and other settings are correct.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=167)** One of the more interesting features of Vistumbler is the WiFiDB menu option.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=172)** This links to an online database for Vistumbler Wi-Fi data, allowing all Vistumbler users to contribute access point data for common reference.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=182)** I can get to this web page by selecting WiFiDB, and Open WiFiDB Main Webpage.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=192)** At the WiFiDB home page, we can see a login link at the top right.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=197)** If we click that, we get the option to log in, or create an account.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=204)** I won't do that right now, but it's worth noting that when you create an account, you get an API key generated which you can copy out to use for programmatic access to WiFiDB.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=215)** At the left there's a menu and I'll click on List APs.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=222)** We can see there's a lot of access points listed in the database.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=226)** The second column shows the record number.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=228)** And we can see there's over 5 1/2 million records.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=232)** This list shows the basic access point data, and if we scroll through it, we can see there's plenty of open access points.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=243)** While there's a lot of records in the database, the older ones may no longer be active.
>
> **[4:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=252)** I can select one, and get a full-screen display of the record.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=256)** Note that this shows the latitude and longitude of the access point.
>
> **[4:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=260)** And I can show this entry on a map by clicking on the globe icon.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=269)** There's a number of menu options on the left to import data, export data, do searches, and many more things.
>
> **[4:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=276)** It's worth exploring these options in your own time.
>
> **[4:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=280)** Vistumbler is simple to use but a very effective tool for identifying access points.

> [!info]- Semantic Content
>
> **Env Vars:** gps (5), usb (2), ssid (2), lan (1), mac (1)
> **Code Keywords:** interface (2), public (1), let (1), type, (1)
> **UI Navigation:** click on (2), select the (2)
> **CLI Commands:** make (2)
> **Versions:** version 10 (2)
> **Tools:** github (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Using Commview to scan Wi-Fi networks
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=0)** - [Instructor] CommView for WiFi is a commercial product but a limited use evaluation version can be downloaded and installed.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=9)** On first start up, it will detect the WiFi cards installed on your system and load the appropriate driver.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=15)** I've downloaded and installed CommView and it's using my alpha card.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=20)** The initial display is known as the Nodes view and we can see at the top left that we're displaying the Nodes tab.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=26)** I'll press the play button to start capturing.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=29)** As CommView hops across the channels, it displays the protocols 802.11g and 802.11n with the networks that it detects and under each network, the clients that are connected.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=42)** On the left, there's a bar chart showing the channels and on the right, the frequency being scanned.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=48)** The main display has the standard access point data, channel, SSID, encryption type and signal sensitivity.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=55)** And if I scroll across the main display, the traffic transmitted and received is shown.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=60)** I can right click an entry to get a context menu which amongst other functions enables me to get a full details pane for the device or use the Quick Filter to see the data traffic for the device.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=76)** Okay, I'll stop the capture now.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=81)** I can select the Channels tab and see a summary of the technical characteristics and traffic intercepted by channel.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=88)** When I click on an entry, I get the packet summary details in the lower panel and the relevant graphs to the left.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=96)** When I select the Packets tab, we see a Wireshark-like display as we did with the quick filter.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=103)** This shows the type of packet, the source and destination MAC addresses and for TCP/IP packets, the IP addresses and ports.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=112)** As we can see, there's encrypted data running over WPA which CommView can't decrypt.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=118)** I can also get a context menu here with more functions for the packet stream and the data.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=124)** Let's look at an encrypted data packet.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=126)** We can see the raw packet information in the main screen lower panel and the packet structure at the left.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=132)** We can see in this case the 802.11 source and destination access point address and the BSSID.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=140)** We can, at the bottom of the structure, see the Encrypted Data with its IV and its key number.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=149)** I'll run another capture and this time activate WPA decryption.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=153)** Before I do that, I'll put in the access point pass phrase.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=158)** I'll set Settings, WEP/WPA Keys and put in the pass phrase.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=165)** This will now enable decryption of the WPA packets but only after a valid handshake has been captured.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=171)** We'll come back to how we force this once we're collecting.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=176)** Okay, I'm ready to start collecting.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=178)** I'll hit Play and wait while the access points are detected.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=183)** I can now see my TPG 83nj access point and it's operating on channel 10.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=189)** I'll set single channel mode on channel 10 at the top right.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=195)** I'll then select Tools, Node Reassociation, and I'll select my access point.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=208)** I'll deselect the client addresses not on the node and then press Send.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=214)** This will de-authenticate and force a real authentication.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=220)** Let's go back to the Packet view.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=223)** I'll let this run for a few more moments and then we'll stop and take a look.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=227)** Already we can see some HTTP packets appearing in the steam.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=231)** We can see that CommView has been able to use the key we provided to decrypt the packets for those devices on our access point for which it was able to capture the handshakes.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=241)** While CommView can't do access point attacks, it can collect logs that can be extracted for subsequent analysis by tools such as Aircrack.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=250)** We'll set this up by selecting only data packets using the funnel at the top.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=257)** I'll switch to the Logging tab and set up the logging parameters.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=262)** I'll select Auto-saving and select the maximum directory size to 20,000 and the average log file size to 100.
>
> **[4:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=271)** For ease of access, I'll save this to my C:temp file.
>
> **[4:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=278)** I'll start capturing now.
>
> **[4:42](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=282)** Again, we need to wait until we capture a handshake either by using node reassociation on the targets or when the device reconnects.
>
> **[4:52](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=292)** Okay, we've just seen the Huawei reconnect to the Huawei access point.
>
> **[4:57](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=297)** So I'll stop collecting now.
>
> **[5:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=300)** I can now select File, and the Log Viewer and navigate to my temp directory.
>
> **[5:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=308)** I can see an NCF file, that's our logs, so let's open it.
>
> **[5:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=314)** I'll now export the file as a Wireshark TCP dump format file.
>
> **[5:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=319)** I'll store it in temp as commlog.
>
> **[5:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=324)** And it'll be stored in the standard cap file format.
>
> **[5:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=328)** We can close CommView now.
>
> **[5:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=332)** I'm at the command line in my Aircrack folder.
>
> **[5:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=335)** I can now run the attack using the Windows aircrack-ng-avx specifying my target BSSID and SSID and a dictionary file that I've created.
>
> **[5:49](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=349)** Okay, Aircrack now launches the crack and quickly finds the network key using our dictionary.

> [!info]- Semantic Content
>
> **Env Vars:** wpa (4), ssid (2), tcp (2), bssid (2), mac (1)
> **Code Keywords:** let (4), pass (2), switch (1)
> **UI Navigation:** select the (3), click on (1), switch to (1), navigate to (1)
> **CLI Commands:** node (3)
> **Definitions:** is a  (1), known as (1)
> **Versions:** 802.11 (1)
> **Cross-References:** go back to (1)
> **Tools:** command line (1)


### 5. Internet of Things

#### Testing the Internet of Things
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=0)** - [Instructor] Let's take a look at the Internet of Things.
>
> **[0:02](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=2)** One of the popular home devices is the Belkin WeMo Switch, and I've got a new one powered up, but not yet configured.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=10)** I'll set Acrylic Analyser running and I'll look at what wireless networks are available in my vicinity.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=16)** We can see there's a WeMo Switch 296 network available.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=20)** That's my internet addressable WeMo switch, advertising itself, ready to be connected to my home network.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=27)** The WeMo network is an open network, so we don't need a password to connect.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=31)** Let's close Acrylic now and I'll change my network connection from my home network to the switch.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=38)** Okay, I've opened a command shell and I'll check my network connections.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=45)** Okay, I can see that I've been assigned the IP address 10.22.22.149 by the switch and the gateway address, the switch itself is 10.22.22.1, I'm now a client on the WeMo's own network.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=61)** Let's have a look at what ports are available on the switch.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=68)** I can see two TCP ports open, The DNS service on port 53 and the UPNP plug and play service on port 49152, I can also see this is a Linux distribution.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=81)** OK, let's leave the command shell and I'll use my browser to navigate to the device.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=87)** Hmm, this gets a 404, however, my open source research into this device has identified that there are plug and play webpages we can access, one of them is called setup.xml.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=101)** Here we see the setup script for the device, this is interesting, but not of immediate benefit to me.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=106)** However, my research has also indicated an events service page exists.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=112)** And we see details of the services that are available on the switch.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=116)** Now this is interesting, these are services that once the switch is configured onto my network, are used to control its operation.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=124)** One of the services is GetBinaryState, this identifies whether the switch is on or off.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=131)** The Belkin is controlled using the simple object access protocol, SOAP, which is an extension to the hypertext transfer protocol HTTP and it's extensible markup language XML.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=143)** Using SOAP, we can script up an HTTP XML message to run this service and send it to the switch using netcat, let's do that.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=152)** I've now configured the switch as normal onto my home network, and it's got the IP address 192.168.1.3.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=160)** I need to use port 49153 to access UPMP services, now that it's configured.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=167)** Let's run some SOAP queries.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=170)** I've prepared the script in a file called GetBinaryState.txt in my sub directory, which calls that service on the switch.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=179)** We can see that it consists of an http post request with a SOAP action command and some associated XML code.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=188)** The command's completed and we can see the HTTP 200 OK confirmation, looking through the response, we can see the tags <BinaryState>0</BinaryState>.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=200)** Showing with the zero that the switch is off.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=203)** I'll use my mobile to switch it on and re-run this command.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=209)** And we now see that the result is a one.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=212)** I can now control this switch through netcat.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=215)** I'll switch it off with another script called switchoff.txt So we have full scripted access to the switch from our network.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=225)** This switch was penetration tested in 2015 and found to have a remote shell vulnerability, this was achieved by using the SetSmartDevInfo service and sending the string quote telnetd-l/bin/sh as the value of the smart dev url.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=243)** This vulnerability has subsequently been fixed and the full details are described in the URL shown here.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=249)** I've prepared this attack in a script file called telnet.txt, the vulnerability's been patched, but let's see the effect of the attack now.
>
> **[4:18](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=258)** Okay, this no-longer opens up telnet, but it does produce an internal server error instead.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=264)** While this is one exploit that's been fixed, there's still much testing to be done in the Internet of Things, there's little doubt that researchers are going to find many more vulnerabilities in the rapidly expanding Internet of Things in the year or two ahead.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (19), let (7)
> **Env Vars:** soap (4), http (3), xml (3), tcp (1), dns (1)
> **Definitions:** is an  (2), is a  (2), is called (1)
> **File Paths:** setup.xml (1), getbinarystate.txt (1), switchoff.txt (1), telnet.txt (1)
> **Ports:** port 53 (1), port 49152 (1), port 49153 (1)
> **Versions:** 10.22.22 (2), 192.168.1 (1)
> **Prerequisites:** setup (2)
> **CLI Commands:** find (1)


### Conclusion

#### Summary
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/summary-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/summary-2?u=76281980&t=0)** - [Malcolm] I'd really like to thank you for joining me for this LinkedIn Learning course.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/summary-2?u=76281980&t=4)** I hope you enjoyed learning how to test the security of wireless technology.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/summary-2?u=76281980&t=10)** Learning how to do wireless testing is just the start of your path to becoming a good ethical hacker.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/summary-2?u=76281980&t=16)** Having understood the concepts, and learned how to use the tools, you now need to practice and gain experience.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/summary-2?u=76281980&t=25)** There's always something new in cybersecurity, and if you're interested in learning more, then check out the full Cybersecurity Ethical Hacking segment of the library, where new security testing courses are added regularly.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/summary-2?u=76281980&t=38)** You'll find courses on using Kali Linux, information gathering, denial of service, mobile testing and much more.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/summary-2?u=76281980&t=47)** I'd also like to invite you to go to my author page where you can find some additional courses on cybersecurity.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/summary-2?u=76281980&t=54)** If you want to get hands on with some of the common tools, then do take a look at my introduction to Kali Linux, web application testing, and mobile testing courses.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/summary-2?u=76281980&t=66)** If you're wanting to learn about security for the Cloud, then Cybersecurity for Cloud Computing is for you.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/summary-2?u=76281980&t=73)** Thanks again for joining me on this LinkedIn learning course, and I hope to see you again soon.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcolm] (1)


## Path Context

### In [[Become an Ethical Hacker]]
← [[Ethical Hacking- Hacking Web Servers and Web Applications]] | **14 of 19** | [[Ethical Hacking- Mobile Devices and Platforms]] →

## Appears In

- [[Become an Ethical Hacker]]

## Related Courses

_Courses sharing skills:_

- [[Offensive Penetration Testing]] — Ethical Hacking
- [[Stealth Penetration Testing with Advanced Enumeration]] — Ethical Hacking
- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Ethical Hacking
- [[Ethical Hacking- SQL Injection]] — Ethical Hacking
- [[Ethical Hacking- Cloud Computing]] — Ethical Hacking
