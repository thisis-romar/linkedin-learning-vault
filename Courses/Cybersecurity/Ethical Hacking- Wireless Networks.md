---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
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
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEKzuxJOFSiTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1571074402112?e=2147483647&amp;v=beta&amp;t=1q2f5qWZBOD72iH8YRup0RoZiiwhUPzOvzvw00GxpP0"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an Ethical Hacker]]'
prev_courses:
  - '[[Ethical Hacking- Hacking Web Servers and Web Applications]]'
next_courses:
  - '[[Ethical Hacking- Mobile Devices and Platforms]]'
path_nav: '[{"path":"Become an Ethical Hacker","position":14,"total":19,"prev":"Ethical Hacking- Hacking Web Servers and Web Applications","next":"Ethical Hacking- Mobile Devices and Platforms"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/wireless-networking
  - skill/ethical-hacking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20Wireless%20Networks.md)

![Ethical Hacking: Wireless Networks](https://media.licdn.com/dms/image/v2/C4E0DAQEKzuxJOFSiTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1571074402112?e=2147483647&amp;v=beta&amp;t=1q2f5qWZBOD72iH8YRup0RoZiiwhUPzOvzvw00GxpP0)

# Ethical Hacking: Wireless Networks

> Wireless networks are convenient and popular, but poor configuration and encryption leave them open to attack. Hackers can use Wi-Fi vulnerabilities to infiltrate your entire network. Security professionals need to know how to detect, prevent, and counter these kinds of attacks using the latest tools and techniques—the subject of this course with cybersecurity expert Malcolm Shore. Malcolm covers 

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-wireless-networks) | 1h 45m | Intermediate | 29K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Learn how to protect your wireless network](#learn-how-to-protect-your-wireless-network)
  - [What you should know before watching this course](#what-you-should-know-before-watching-this-course)
  - [Course disclaimer](#course-disclaimer)
- [**1. Wi-Fi Networks**](#1-wi-fi-networks) (10 videos)
  - [Understanding wireless networks](#understanding-wireless-networks)
  - [Selecting an antenna for wireless network testing](#selecting-an-antenna-for-wireless-network-testing)
  - [Configuring security in wireless networks](#configuring-security-in-wireless-networks)
  - [Understanding the Wi-Fi Protected Setup (WPS)](#understanding-the-wi-fi-protected-setup-wps)
  - [Extracting WEP passwords using Wifite](#extracting-wep-passwords-using-wifite)
  - [Extracting network passwords through WPS](#extracting-network-passwords-through-wps)
  - [Using WiFite and Aircrack-ng to test WPA passwords](#using-wifite-and-aircrack-ng-to-test-wpa-passwords)
  - [Using Pixiedust to recover keys](#using-pixiedust-to-recover-keys)
  - [A first look at WPA3](#a-first-look-at-wpa3)
  - [Understanding Dragonblood](#understanding-dragonblood)
- [**2. Rogue Access Points**](#2-rogue-access-points) (5 videos)
  - [Harvesting connections with an evil twin](#harvesting-connections-with-an-evil-twin)
  - [Set up the WiFi Pineapple](#set-up-the-wifi-pineapple)
  - [Harvest credentials with the WiFi Pineapple](#harvest-credentials-with-the-wifi-pineapple)
  - [Capturing WPA handshakes](#capturing-wpa-handshakes)
  - [Scanning and attacking with Fluxion](#scanning-and-attacking-with-fluxion)
- [**3. Bluetooth**](#3-bluetooth) (3 videos)
  - [Understanding Bluetooth](#understanding-bluetooth)
  - [Scanning for Bluetooth devices](#scanning-for-bluetooth-devices)
  - [Legacy attacks using Bluesnarfer](#legacy-attacks-using-bluesnarfer)
- [**4. Additional Tools**](#4-additional-tools) (7 videos)
  - [Using FernWi-Fi Cracker](#using-fernwi-fi-cracker)
  - [Discovering networks with inSSIDer](#discovering-networks-with-inssider)
  - [Capturing wireless packets with Acrylic Analyzer](#capturing-wireless-packets-with-acrylic-analyzer)
  - [Heat mapping with Ekehau](#heat-mapping-with-ekehau)
  - [Wi-Fi sniffing using Wireshark](#wi-fi-sniffing-using-wireshark)
  - [Scanning with Vistumbler](#scanning-with-vistumbler)
  - [Using Commview to scan Wi-Fi networks](#using-commview-to-scan-wi-fi-networks)
- [**5. Internet of Things**](#5-internet-of-things) (1 videos)
  - [Testing the Internet of Things](#testing-the-internet-of-things)
- [**Conclusion**](#conclusion) (1 videos)
  - [Summary](#summary)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn how to protect your wireless network](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/learn-how-to-protect-your-wireless-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/learn-how-to-protect-your-wireless-network?u=76281980&t=0)** - [Malcolm Shaw] Wireless networks are now a part of life for everyone at home, in business, and in the government. Wireless connectivity has enabled on the go access to everything from social media sites to enterprise applications, allows home users to use their laptops in and around the house at will, and offers convenient guest access to businesses. However, the use of a wireless network isn't without its hazards, and ensuring that home and business use of wireless is secure is the job of the wireless network tester. Understanding the risks also helps us make informed judgments about the use of public [[Wi-Fi|wifi]] hotspots. I'm Malcolm Shaw, and I've spent a career helping governments and businesses protect their systems against cyber attacks. In this course, I'll explain the technology used in wireless networks and the risks it brings, which protocols are vulnerable to attack, and the tools available to test for vulnerable services. I'll start by explaining the basics of [[Wireless Networking]] and the various [[Forms]] of wireless [[Network Security]]. I'll demonstrate the basic [[Windows]] and [[Linux]] tool sets for wireless network testing, and I'll be using the WiFi Pineapple to cover the issue of rogue access points. When you finish this course you'll have a great understanding of how to test for wireless network weaknesses. Now let's get started with wireless testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (2), [[Wireless Networking]] (1), [[Forms]] (1), [[Network Security]] (1), [[Windows]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [malcolm (1)

#### [What you should know before watching this course](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/what-you-should-know-before-watching-this-course-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/what-you-should-know-before-watching-this-course-2?u=76281980&t=0)** - [Narrator] This is a practical course and during this course I'll be using a virtualized environment called Virtual Box. I'll also be using a number of tools which are part of the [[Kali Linux]] framework to test systems. If you're not familiar with Kali and virtualization, you should watch my introduction to Kali Linux course which will guide you through installing and using them. In addition, I'll be assuming that you understand basic computer and networking concepts, are familiar with [[Windows]], and have a knowledge of basic [[Linux]] commands. I'll also be using some additional [[Hardware]] to do the testing. While some testing can be done just with a laptop, you'll be better served getting an external USB [[Wi-Fi|WiFi]] device to use. We'll cover the types of devices that you might want to purchase, they're readily available and not too expensive. I'll also be demonstrating the Hak5 pineapple. It's a hardware rogue access point which is fairly popular with testers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kali Linux]] (2), [[Hardware]] (2), [[Windows]] (1), [[Linux]] (1), [[Wi-Fi|Wifi]] (1)
> **Env Vars:** usb (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Course disclaimer](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980&t=0)** - [Instructor] This is one of a series of [[Ethical Hacking]] courses and in addition to [[Kali Linux]], it uses a range of third party testing software. Some of this is commercial software and some is open source, third party software. The download and installation instructions for all tools used in this course is available as a PDF in the associated course material. However, some of the wireless drivers used in these tools may conflict with others. So you may wish to just install the tools for the time they're required. While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers and we can't provide any assurance that these sites might not be compromised when you visit them. Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware and may raise antivirus alerts when you visit them. The testing tools we demonstrate are extremely powerful. They may demonstrate some of the same signature characteristics as malware and malicious implants and may raise antivirus alerts when you try to download them. Again, we can't provide assurance that the software hasn't been compromised when you download it. And so, as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load onto your system. The testing is mostly carried out inside a virtual environment to contain any unplanned effects of testing tools and in the unlikely event that you do download malware,
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/course-disclaimer-2?u=76281980&t=93)** this will also help contain any impact from live malware.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1), [[Kali Linux]] (1)
> **Env Vars:** pdf (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Wi-Fi Networks

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding wireless networks](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=0)** - [Instructor] To connect to the internet, we need to use what's known as a router, or an internet gateway. These come in a range of types from simple, low-cost home appliances, to complex multifunction business devices. But nowadays, they all have the same basic functionality. A wired connection to an ISP, and the ability to connect multiple devices wirelessly. Desktop computers come with the ability to connect to both wired and wireless networks, as do laptop systems. However, tablets and mobile devices only connect wirelessly. So having a wireless capability is pretty much a must nowadays. And, of course, media technology, such as the Chromecast and Apple TV, depend upon wireless networks to operate. While this has become very much part of life, and many cities now offer what are known as wireless hotspots, as do libraries and social meeting places, such as Starbucks and McDonald's. As a technology, wireless communications has its limitations. Early wireless devices didn't have the same bandwidth as standard ethernet, and even the more recent high-power wireless systems continue to lag behind good quality ethernet. Wired devices connect using ethernet cables, and these are rated with a Cat specification. The most common cables are Cat 5, Cat 5e, and Cat 6. As we can see in this table, these provide quite substantial speeds. Wireless devices connect using what's known as [[Wi-Fi]], the [[Wireless Networking]] protocol,
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=96)** which is defined in the 802.11 series of standards. These standards are continually being improved, with the early 802.11a, b, and g being superseded by 802.11n, and 802.11ac. And speeds are continually increasing. Note the anomaly of 802.11a, which has the greatest speed, but is pretty much limited to line of sight, and hence was never really that successful. Wireless deployments operate through one of 14 different channels, the exact number will depend upon the country and the protocol used. For instance, an 802.11g deployment would be in the 2.4 gigahertz range, and would have channels at 2.412, 2.417, 2.422, and up to 2.472 gigahertz. The specific channel used by clients may be preset or selected dynamically, depending upon the network performance at the time of connecting. With enough channels and spectrum use, the theoretical maximum speeds of the wireless standards are starting to approach the speeds achievable on a wired connection. With 802.11n and more recently 802.11ac, the speeds are quite sufficient to be acceptable, especially given the additional convenience of wireless. Connection to a wireless network requires that the laptop or mobile device connect to what is known as an access point. This is a device which has an existing connection
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=189)** through to the internet and broadcast its identity, offering client devices the opportunity to connect. We've all connected to access points. Every time we go into our computer, click on Wireless Networks, and select a network to connect to, we're communicating with the access point for that network. This has a name. It might be a good descriptive name such as Qantas Club, or it might be somewhat more cryptic. This is what's known as a service set identifier, or SSID. Associated with this is a BSSID, or basic SSID, which is its MAC address. Some security techs recommend hiding the SSID, but this offers no real security and is often an annoyance for the business. It's poor advice. Wireless access points usually require a network key in order to connect, or may connect directly, but request an internet login before allowing access. Some routers enable what is known as MAC filtering to limit access just to a known set of user devices. But this can be circumvented by an attacker just by running a software tool to change his or her MAC address to one that's connected. Encryption and authentication can be configured on a [[Wi-Fi|wireless LAN]] by selecting one of three options. Wired Equivalent [[Privacy]], or WEP. Wi-Fi Protected Access, or WPA. And WPA2, a stronger variant of WPA. Wireless Protected Setup, or WPS, is a relatively new feature which allows a user to connect
>
> **[4:44](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-wireless-networks-2?u=76281980&t=284)** just by the press of a button the router. Security is ensured by virtue of having physical proximity to the router. Let's take a look at my router. I'm on the wireless LAN configuration page. We can see the access point, SSID, is TPG-83NJ, and it chooses its channel automatically. It's using the 802.11bgn protocol set, has WPA and WPA2 configured for security, and has WPS enabled. If I now click on the [[Wi-Fi|WLAN]] Filtering tab, I get the option to enable MAC filtering. I'll activate it. Here we see that we can either blacklist or whitelist MAC addresses. If I enter a MAC address and blacklist it, then that MAC address won't be allowed in. If I've selected whitelist, then only MAC addresses that are on the list will be allowed in. I don't activate this, because any attacker worth his or her salt would circumvent this control easily. Okay, I'll uncheck that and Logout.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (2), [[Wi-Fi|Wireless lan]] (2), [[Wireless Networking]] (1), [[Privacy]] (1), [[Wi-Fi|Wlan]] (1)
> **Env Vars:** mac (8), ssid (4), wpa (3), lan (2), wpa2 (2)
> **Definitions:** known as (5), is a  (3)
> **Versions:** 802.11 (1), 2.4 (1), 2.412 (1), 2.417 (1), 2.422 (1)
> **CLI Commands:** cat (4)
> **Analogies:** such as (3), for instance (1)
> **UI Navigation:** click on (2)
> **Documentation:** specification (1)

#### [Selecting an antenna for wireless network testing](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=0)** - A wireless network depends upon its ability to reliably send and receive wireless packets, and it does that through its antenna system. A router will typically have at least one external antenna. The NETGEAR device shown here has three external antennas. Laptop, on the other hand, have their antenna looped around the inside of the case. When testing wireless networks from your laptop, your wireless scanner will cycle through the set of wireless channels to detect all networks in range. This will have the effect of disconnecting your Internet connection, as this is fixed on one channel. Consequently, it's useful to have a separate wireless antenna. Wireless testing from the virtual box environment, is a special case which requires an external antenna, because the virtualized ethernet LAN to which VMs attach is using the wireless connection, so again an external antenna is required. The role of the antenna is to convert between electrical energy and radio waves. How well it does this is variable, depending upon the type of configuration of the antenna. When rating antennas, the benchmark is a perfect omnidirectional radiator, and the performance of the antenna is then a positive, better, or negative, worse, delta, from this benchmark. Antennas are often promoted on the basis of their transmit power.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=93)** But another important rating is their receptor sensitivity. Gain is expressed in units of dBi, decibels isotropic, and the higher the decibels, the more powerful the antenna, and the more reliable the communication is. Sometimes performance will be expressed as dBm, which is pure signal power. dBm are related to milliwatts through the equation dBm equals 10 times log to the 10 milliwatts. When transmitting, a positive number represents better performance, or gain, from the benchmark, and a negative number means lower performance, or loss. 1,000 milliwatts, or 30 dBm, is rated to be a good transmitter. For reception, the opposite is true. We want to be able to receive weaker signals, and a good antenna should be able to operate down to about minus 90 dBm. The most common form of antenna is the omnidirectional antenna, which is designed to radiate and pick up wireless signals from any direction. Here we can see a TP link, WN722N, with a separately attached omnidirectional high gain antenna. This has a minus 90 dBm sensitivity at one meter, reducing to minus 68 dBm at 50 meters. It has a 20 dBm transmit power. The antenna provides a four dBi improvement on transmission, but does not affect its sensitivity.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=187)** Antennas can also be unidirectional with optimal performance in a specific direction. These don't change transmission power, but change the shape of the signal to focus more power in one direction. These come in two [[Forms]]. The first is the yagi antenna, which is sometimes called the fishbone antenna for obvious reasons as we can see here. This is a yagi antenna used by Telstra customers. It operates with 14 dBi gain. A yagi antenna consists of a set of rods, set into a main horizontal tube. One of these is the active element, which may be a single rod or tube, or may be folded around to form a narrow, oval rod. This element is known as the radiator, dipole, or driven element. Behind, and in front of it, are a series of what are called parasitic elements, running along the length of the main tube. The elements behind are called reflectors, and those in front, directors. While we won't go into the deep theory of yagi antennas, it's worth noting that the key to the performance of such an antenna, is the phases of the currents flowing in the parasitic elements. These elements receive and re-radiate the signal in a slightly different phase to that of the driven element. This means that the primary signal is reinforced in some directions, and canceled out in others, resulting in a high level of unidirectional gain. The amplitude and phase
>
> **[4:40](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/selecting-an-antenna-for-wireless-network-testing-2?u=76281980&t=280)** of the induced current in the parasitic elements is dependent upon their length and the space in between them. The second form of unidirectional antenna is the parabolic antenna. These are highly directional, and very powerful, with the parabolic dish pulling in signals over its whole surface, and focusing them on the central antenna. As a result, the larger the antenna dish, the higher the gain achieved. A parabolic antenna can connect wireless signals point-to-point across many miles, and are often used in rural communications links.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Code Identifiers:** dbm (8), dbi (3)
> **Definitions:** is a  (3), known as (1), means that (1)
> **Env Vars:** netgear (1), lan (1), wn722n (1)
> **Speakers:** - a (1)

#### [Configuring security in wireless networks](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=0)** - [Instructor] Early wireless networks didn't employ encryption and were known as open networks, however, this meant that anyone could attach to the network, which had some significant risks. The first and most obvious is that this leads to additional local network traffic, and also potentially consumption of internet bandwidth and data allowance. A malicious attacker can use an open network as a launching point for attacks on other systems, so ensuring that any traceback and blame stops at the network they've accessed. Even more maliciously, however, being on the local network allows an attacker to use techniques such as app spoofing to attack network clients directly with exploits and through man-in-the-middle attacks. Security was first deployed on wireless systems in the form of the Wired Equivalent [[Privacy]], or WEP. This was integrated into the 802.11b standard and was designed to protect wireless networks to the same extent that wired networks were protected. In particular, WEP was designed to defeat simple eavesdropping and to check the integrity of data as it flows across the network. It used a shared secret key and delivered a lightweight solution for confidentiality, access control, and integrity, which could be employed with minimal performance issues on modern chipsets. However, WEP was not designed by experts in [[Cryptography]]. It had no way of distributing shared keys at scale. The encryption [[Algorithms]] were weak enough
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=95)** to enable attackers to crack the encryption and recover the plain text. It was also possible to passively recover the key using freely available sniffer tools. To add to its woes, it had 40-bit keys and 24-bit initialization vectors, which were deemed acceptable for exports but were found to be unable to withstand even a low-grade attack. In particular, implementations of random number generators for the initialization vector were inconsistent and often poorly designed. Finally, WEP introduced an opportunity for denial-of-service through the use of associate and disassociate messages. A new encryption standard called [[Wi-Fi]] Protected Access, or WPA, was deployed to replace WEP. The biggest change that was introduced in WPA was the introduction of the Temporal Key Integrity Protocol, or TKIP. WEP used a fixed key for all packets, whereas TKIP changes its key for every frame transmitted. This makes it much more difficult to crack. In addition, it provided support for the AES encryption algorithm. WPA also supports longer keys and message integrity checks. A further improvement was released in the form of WPA2, and introduced yet more security improvements. Notably, making AES mandatory and offering the CCMP mechanism to replace TKIP. WPA2 comes in two versions: WPA2 Personal, which uses shared keys, and WPA2 Enterprise, which is supported
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/configuring-security-in-wireless-networks-2?u=76281980&t=191)** by a RADIUS authentication server. Many routers now only offer WPA and WPA2, and it's extremely rare to see WEP deployments. We'll focus on WPA and WPA2 throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (1), [[Cryptography]] (1), [[Algorithms]] (1), [[Wi-Fi]] (1)
> **Env Vars:** wep (7), wpa2 (6), wpa (5), tkip (3), aes (2)
> **Prerequisites:** initialization (2)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Understanding the Wi-Fi Protected Setup (WPS)](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=0)** - [Narrator] The [[Wi-Fi|WiFi]] Alliance has defined a guideline for the WiFi Simple Configuration or WSC protocol. And manufactories can submit their devices to be certified to use the term WiFi Protected Setup, WPS. So to be correct, WPS is the feature and WSC is the protocol. Many modern wireless routers include the WPS feature to provide user-friendly method of connecting to a home network at the press of a button. To connect a device to a secure home network requires knowledge of its SSID. And without WPS, also requires knowledge of its WPA password. To connect, you select wireless networks in the device setup and then pick the network to connect to by SSID. There'll likely be many networks visible. And then enter its security key. WPS simplifies the connection process. Connecting using a WPS certified device involves selecting the network. When asked for the network key, the user presses the WPS button on the router. The router and the device exchange keying information automatically and the devices connected to the wireless network without the user having to know or enter the network key. All routers, which are WPS enabled, have a pin code that's automatically generated and is accessible from the routers WPS configuration page. Access points will accept knowledge of the pin as sufficient authentication to allow connection
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=95)** to the wireless network. A pin is a mandatory requirement for WPS. Even though it's rarely used. The WSC standard defines a device wanting to connect to a network as the enrollee, which when connected, becomes a member. The registrar is the entity which has the authority to issue credentials that may be integrated into the access point, which is the point at which access can be gained to the network infrastructure. The process of registration takes place in a two minute window called the walk time. In typical network terms, the device is the supplicant and the access point the authenticator. The process can be initiated from either the access point or the device, typically by the user pressing a button on the access point. However, it can also be initiated automatically by the device to support features such as automatic reconnect. LEDs flash during the process with two second on, one second off indicating in progress and a quarter second flash cycle indicating an error. Success is shone as a steady light. In simple terms, the protocol runs by the access points sending out a beacon and the device and the access point then exchanging messages. The device sends a probe to the access point followed by an authentication and an association request. The extensible authentication protocol, or EAPOL, exchange starts, which involves the device sending out an EAPOL start message
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=190)** and the access point requests authentication. The device sends its authentication information. If the access point confirms the authentication information, such as the access point WPS pin code, then an EAPOL success message is sent and access is granted. Otherwise, EAPOL terminates and access is blocked. EAPOL uses four messages, known as M1 to M4. M1 and M2 are used to exchange nonces, which are numbers used to seed the process. M3 and M4 are used to generate the key for the secure session. The pin used in WSC is vulnerable to a brute force attack. It's eight digits long and is stored as two sets of four digits. Each set can be brute forced independently. In addition, the eighth is a checksum of the first seven. So the number of tries required to exhaust the key space is 10 to the four plus 10 to three, and that's about 11,000 attempts. With this limited key space, an attacker with a standard laptop can recover the pin within a short period of time. The WSC guideline requires that an access point must track multiple failed attempts to authenticate and then enter a lockdown state. As a guide, after three failed pin authentication attempts within 60 seconds, an access point must enter the lockdown state for 60 seconds. Specific implementations may vary the number of attempts, 5-10 are common,
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-the-wi-fi-protected-setup-wps?u=76281980&t=283)** and may stay in lockdown state for longer, or even an indefinite period. A WPS attack involves a malicious client which tries to connect with every key in turn. Each attempt requires waiting for the router to respond. Now this is just a matter of seconds, so the attack is very feasible. There's a catch, however. Many routers now do WPS rate limiting in order to comply with the WSC guidelines. Which in some cases means that a device that keeps trying to connect may be locked out for a while, possibly indefinitely. And this will slow down or defeat the attack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (3)
> **Env Vars:** wps (13), wsc (6), eapol (5), ssid (2), wpa (1)
> **Definitions:** is a  (2), known as (1), means that (1)
> **Prerequisites:** setup (2), required to (1)
> **Analogies:** such as (2)
> **Speakers:** - [narrator] (1)

#### [Extracting WEP passwords using Wifite](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=0)** - [Narrator] A typical attack on web involves three steps. Firstly, establishing a monitoring interface, then using a tool such as Aireplay-ng to perform fake authentication and collect the initialization vectors. And finally, running Cain or Aircrack-ng to extract the encryption key from the initialization vectors. These capabilities have been bundled into a tool called Wifite. So we'll use that, I plugged in my alpha USB wireless adaptor and configured it through to Kali. If you aren't sure how to do this, check out the wireless section of my introduction to Kali course. Okay, I've got a terminal window open, so I'll run Wifite to automate the attack. I'll use two command line parameters, dash + dash + mac to indicate that I want a random mac address and dash + dash + aircrack to tell Wifite to verify the handshake using Aircrack. We can see the networks that Wifite has detected, and it will keep monitoring until we tell it to move on to its next phase. I can see my WEP access point which is called TP-LINK_96E8A0, So let's select that. I'll press Control + C and select one. Okay, Wifite is attempting fake authentication attacks. It starts with Aireplay and then continues with ChopChop and fragmentation attacks. It's now running a Cafe Latte attack. We can see it's continually IV's
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-wep-passwords-using-wifite-2?u=76281980&t=92)** as it tries these attacks. It takes a little time to collect enough IV's to be successful. So we'll come back to it when it's progressed a bit further. We're back again and now we've collected more than 10,000 IV's. Wifite has started trying to crack the key. Okay, it's now cracked the IV and provided the key in hexadecimal, which in ASCII is the string strong + key000. I guess the fact it's strong doesn't matter so much given the implementation weakness. Okay, that's an example of why WEP has been superseded by more robust encryption solutions.

> [!info]- Semantic Content
>
> **Env Vars:** wep (2), usb (1), link_96e8a0 (1), ascii (1)
> **Tools:** terminal (1), command line (1)
> **Prerequisites:** initialization (2)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Extracting network passwords through WPS](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=0)** - WPS can be attacked using a brute force attack on the PIN, which has only about 11 thousand valid combinations. One of the popular tools for testing WPS is Reaver. So let's have a look at that. I'll be running this against my Technicolor TG582N home router. I have a terminal window open, so I'll set my wireless adapter to monitoring mode and run a tool called Wash, to identify candidate WPS enabled networks, so that I can see the BSSID, which I need for Reaver. My router is called Telecom05 and I can see the BSSID is 9c 97 26 55 D1 DF. It's operating on channel one, which Reaver also needs to know. I'll now run Reaver to do a WPS attack. We can see Reaver trying to connect to WPS using the keys it's generating. It quickly identifies the type of device and extracts its manufacturer, Technicolor; It's model, Technicolor TG; its model number 582n, and its serial number. We can also see Reaver managing the M1 and M2 and the M3 and M4 messages. It's now trying to attempt, and it's been logged out with rate limiting. Reaver will try again in 60 seconds to see if the rate limiting has been lifted. Okay, rate limiting has been removed and Reaver continues with more attempts
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/extracting-network-passwords-through-wps-2?u=76281980&t=94)** of the current rate, full key space exhaustion will take about eight days. And so key recovery on average, four days. Reaver is smart enough to remember where it was, and will ask whether you want to resume and interrupt its session. So the cracking can be done in a number of sessions. We'll leave Reaver for the moment and come back again. Back at Reaver we can now see that the router has decided to do an indefinite lockdown. We're essentially thwarted here. We'll leave the attack at this point, noting that the current approach taken by Reaver is likely to be of legacy interest only in most cases. WPA2 is a strong security solution for a network. But it is somewhat compromised by the introduction of WPS. The security around WPS is improving and rate limiting has certainly addressed the casual attack. However, some implementations are still vulnerable to sustained attack. Whether threat level justifies it, disabling WPS would remove this risk altogether.

> [!info]- Semantic Content
>
> **Env Vars:** wps (8), bssid (2), pin (1), tg582n (1), wpa2 (1)
> **Definitions:** is called (1), is a  (1)
> **Tools:** terminal (1)
> **Speakers:** - wps (1)

#### [Using WiFite and Aircrack-ng to test WPA passwords](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=0)** - [Instructor] We've seen a number of WPA and WPA2 networks during our monitoring. So now it's time to see how well they're protected by extracting data from them, which might lead us to the network password. We've look at WiFite previously for extracting web passwords and I'll use it again for extracting the WPA handshake. WiFite sends client deauthentication requests to force a reauthentication handshake, which can be captured and subsequently analyzed. I'll instruct WiFite to give me a random MAC address and to verify the handshake using Aircrack. WiFite starts scanning for networks, displaying a list of all the networks it finds and on the right, shows active clients, devices associated with those access points. I'll let WiFite run for a few moments to capture multiple clients on my TPG-83NJ network. Okay, I can now press Control + C and select the target. WiFite starts with a couple of WPS attacks. I can press Control + C to skip over these as I want to get into the WPA attacks. WiFite has run an active WPA attack on the selected network by checking for clients, deauthenticating them, and listening for their reauthentication sequence. It found it and captured the packets. The scanning was successful and WiFite saved it as a pcap file to handshake directory HS. WiFite doesn't progress to the cracking stage,
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-wifite-and-aircrack-ng-to-test-wpa-passwords-2?u=76281980&t=96)** but I can now use Aircrack to extract the password using a dictionary search. I've got a dictionary set up called [[Wi-Fi|wifi]].text, so let's get cracking. Okay, here we can see the [[Wi-Fi]] password. So we've cracked the WPA password and can now use this password to connect to the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (1), [[Wi-Fi]] (1)
> **Env Vars:** wpa (5), wpa2 (1), mac (1), tpg (1), wps (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Using Pixiedust to recover keys](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=0)** - While the WPS brute force attack has largely been defeated by rate-limiting, we can use a tool called Pixie-Dust, to attempt offline extraction of the pin after recovering just one handshake from the WPS negotiation. This is possible where the implementation of WPS has used a low-quality random number generator. And this includes a range of current router and extender models from Asus, Belkin, Linksys, Netgear, TP-Link and Zexal. In some cases, the nonces used to generate the pin are set to 0, a very poor implementation decision. We don't need to use the Pixie-Dust tool itself, because the Pixie-Dust attack has been integrated into Reaver. We can invoke this by using the -K option. I've got a current model Linksys N300 range extender, which I'll use for this test. To run the test, I first need to set the external antenna into monitoring mode. I then need to get the BSSID of the access point, so I'll run wash again. I can see two entries for my TPG-83NJ access point, one is the real router, and the other the extender. I know the BSSID of the router is E8:08:8B:18:12:50, so the other is the extender. I can now run Reaver, specifying its integrated Pixie-Dust attack. Okay, Reaver has started its attack. It associates with the extender and then tries a pin of 12345670.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-pixiedust-to-recover-keys-2?u=76281980&t=94)** It then sends an EA poll start request and initiates its authentication handshake. Reaver then receives an M1 message and dumps another nonce, the PKR, and the authentication key. It then sends its M2 message. Because we've selected very verbose mode, Reaver dumps out the two hashes for the four-digit pin halves, and the nonce and PKE values. We can see that the nonce's ES1 and ES2 are set to 0. The Pixie-Dust attack has recovered the pin, 54065789, and Reaver is again invoked with the pin to associate with the extender. I'll give it a couple of moments to run. Okay, that's it, Reaver has recovered the network key, and we can see that it's ABCD1994. Not all access points are vulnerable to Pixie-Dust attack, but for those that are, this is a very simple process. The solution to this weakness is to ensure that the equipment used has a good quality implementation of its security functions. It's not that obvious, even with the larger manufacturers, as the chip sets they use may be suspect, and so good [[Security Testing]] is important.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (1)
> **Env Vars:** wps (3), bssid (2), n300 (1), tpg (1), pkr (1)
> **Ports:** :08 (1), :18 (1), :12 (1), :50 (1)
> **Definitions:** is a  (1)
> **Speakers:** - while (1)

#### [A first look at WPA3](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=0)** - [Instructor] WPA2 has been used as a security protocol on [[Wi-Fi]] for many years. In 2018, the Wi-Fi Alliance announced that it was going to published an updated and more secure WPA3 protocol, which adds four features not found in WPA2. By end of year, updated Wi-Fi chips were being produced, and by 2019, WPA3 routers started to appear on the market. The first WPA3 feature is known as individualized data encryption. Currently, open Wi-Fi networks that you find in airports, hotels, coffee shops, and other public locations have the convenience of allowing anyone to connect, but at a price. Traffic sent over them isn't encrypted at all. WPA3 addresses this by applying individualized data encryption. When you connect to an open Wi-Fi network using WPA3, the traffic between your device and the Wi-Fi access point will now be encrypted even though you didn't enter a passphrase at the time of connection. The second feature is the Dragonfly handshake. When a device connects to a Wi-Fi access point, the devices perform a handshake that ensures that you've used the correct passphrase to connect and negotiates the encryption that will be used to secure the connection. In 2017, it was found that the WPA2 handshake was vulnerable to what's known as the KRACK attack.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/a-first-look-at-wpa3?u=76281980&t=97)** WPA3 comes with a new handshake protocol called Simultaneous Authentication of Equals, or more simply, just Dragonfly. This handshake is claimed to make it almost impossible to crack the password of a network and is resilient even when weak passwords are used. The third feature is simple connectivity for devices without a screen and keyboard based on scanning the QR code of a device by using a smartphone. This is important for encouraging [[IoT]] vendors to incorporate security into their devices. The fourth feature is more advanced crypto algorithm set based on 192-bit AES key. This is designed to ensure longevity for WPA3.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (7), [[IoT]] (1)
> **Env Vars:** wpa3 (7), wpa2 (3), krack (1), aes (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Understanding Dragonblood](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=0)** - [Instructor] Unfortunately for WPA3, the researchers who created the crack attack on WPA2 have been able to demonstrate that WPA3 is vulnerable to a number of attacks with a research and testing program known as Dragonsblood. Their research initially identified timing leaks and authentication bypasses in the WPA3 daemon, and subsequently discovered downgrade and denial of service attacks. A number of side channel attacks were discovered, including one which worked even after the equipment was patched. Interestingly, their research suggests that for the expenditure of a dollar on an [[Amazon EC2]] instance, there would be enough computing power to brute force crack the password. Also interestingly, the design of WPA3 did not address a known history of side channel leaks, despite these being raised as concerns. The researchers conclude that a minor change to Dragonfly's password and coding algorithm, removing the peer MAC address, would've prevented most of the attacks. The researchers have made a set of tools available for testing WPA3 access points and clients. Dragonslayer can be used to bypass authentication if a valid username is known. Dragondrain tests whether or to what extent an access point is vulnerable to denial of service attacks against Dragonfly. Dragontime is used to carry out timing attacks on Dragonfly if certain settings have been configured,
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-dragonblood?u=76281980&t=96)** and Dragonforce is used to carry out password partitioning attacks, an attack which is similar to a dictionary attack. On 10th of April, 2019, the [[Wi-Fi]] Alliance issued confirmation of the research, stating that recently published research identified vulnerabilities in a limited number of early implementations of WPA3-Personal. Vendors of existing WPA3 [[Microsoft Products|products]] are now issuing software patches to mitigate the currently known vulnerabilities. There is some controversy over Dragonfly. A close variant received significant criticism while being standardized, while a different variant claims to be validated through a formal security proof. These contradictory claims raise the question of whether Dragonfly is secure in practice. It's clear that WPA3 has a long way to go before it can be trusted to be the secure Wi-Fi standard that it claims to be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (2), [[Amazon EC2]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** wpa3 (8), wpa2 (1), ec2 (1), mac (1)
> **Definitions:** known as (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 2. Rogue Access Points

[↑ Back to Table of Contents](#table-of-contents)

#### [Harvesting connections with an evil twin](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=0)** - An evil twin is a rogue access point which has been activated in order to attract unwary users to connect, and then acts as a man-in-the-middle monitoring their traffic. It does this by posing as a legitimate public hotspot access point. A good evil twin will look in every respect the same as its target. It will have the same SSID as a legitimate access point. The same BSSID, and will operate on the same channel, but with a stronger signal in its local zone. An evil twin may just wait for new devices to join the network, or it may forcibly de-authenticate clients from the legitimate access point to force a reconnect, this time to itself. In today's world where free public [[Wi-Fi]] hotspots are becoming the norm, and evil twin is a significant threat. Let's take a look at airbase-ng, which is a simple Kali tool for turning a wireless card into an access point. I'll start by setting my [[Wi-Fi|wireless LAN]] adapter into monitor mode. Let's see what access points are close by. Okay. We can see that my Telecom access point is active, I'll now set my adapter to "evil twin" it. We're now setup, so all we need to do is wait for a user to connect. I'll reconnect with my mobile, which was previously connected to the legitimate access point. And here we go, we can see my phone connecting. And I've now connected.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvesting-connections-with-an-evil-twin-2?u=76281980&t=93)** Now I've got a user on the access point, I can use [[Wireshark]] to monitor the traffic. I've started Wireshark, and I'll set a filter for the access point. And I'll select "wlan0mon" as the interface and start Wireshark capturing. Okay I'm browsing the internet on my mobile, and I can see the traffic [[Routing]] through Wireshark, as 802.11 packets. I'll stop the capture now. If we look at the traffic, we can see we're capturing and re-routing WPA encrypted traffic as a man-in-the-middle. With just a Kali distribution and a good external antenna, I've successfully used airbase-ng as an evil twin of my access point to harvest client connections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (4), [[Routing]] (2), [[Wi-Fi]] (1), [[Wi-Fi|Wireless lan]] (1)
> **Env Vars:** ssid (1), bssid (1), lan (1), wpa (1)
> **Definitions:** is a  (3)
> **Versions:** 802.11 (1)
> **Prerequisites:** setup (1)
> **Speakers:** - an (1)

#### [Set up the WiFi Pineapple](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=0)** - [Instructor] If you're serious about [[Wi-Fi|wifi]] testing work, you'll want to arm yourself with a WiFi Pineapple. These are available directly from the Hak5 website. The WiFi Pineapple is a dedicated [[Hardware]] device, which runs [[Linux]] and OpenWrt and provides a full capability for wireless testing, either directly out of the box or for the more complex testing through a custom software installation. The WiFi Pineapple has been available for some time with the Nano and Tetra being popular early models. It now comes in two models, the Mark VII and the Enterprise version. We'll be taking a look at the Mark VII. These are both based on the PineAP suites of software. The WiFi Pineapple is a versatile tool which can be used to visualize the wifi activity in its area. Can capture client handshakes to gain the network keys and can act as a rogue access point to directly capture client connections. The standard unit works for 802.11 b/g/n networks. And there's an add on unit for 802.11/ac. The unit has three antenna and each can be tasked independently. Installing the Wifi Pineapple is pretty simple. Comes with a USB-C cable, which plugs into a USB-C port on your computer. After plugging it in, go to the HTTP address 172.16.40.2.1 port 1471. On the initial connection, you'll be invited to download the latest firmware and update the unit. It asks for a wifi network to download the software, put in your normal network, SSID and key, the download will begin
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=93)** and then the software will be installed. Once it's updated, the LED will remain steady blue and you can close the browser then open it and connect again. After installing the new firmware, you're presented with a welcome screen and can begin set up. When asked you should press the button once, continue with radios disabled. You'll now be asked for a password. You can enter that and also select your time zone. You can then enter an SSID and network key for your management network and an SSID for the open network. I've called my management network, Cybex5 and the open network fruitnet. You'll also select your country. The next setup screen is where you can run a fully open pineapple or restrict it to specific devices and SSIDs. This is very useful when on an assignment and you want to constrain the use of the WiFi Pineapple. I've left this open for now. The penultimate configuration screen is to determine whether you want to use the light or dark console interface. I'll be using the light option. And that's it for the configuration. The unit then asks us to accept the terms and conditions saves its configuration, then we're ready to go. While the WiFi Pineapple provides the built-in capability to operate as a rogue access point and capture devices. it also allows third party modules to be developed and installed. This gives it a much greater capability as a network testing tool. Here, we can see the modules available for the Mark V, and there's a of them. Unfortunately, the Hak5 crew hasn't yet updated this website with the Mark VII. And the reason is that as we can see
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/set-up-the-wifi-pineapple?u=76281980&t=187)** many of the Mark V modules, haven't yet been ported to the new platform. Hopefully this will change before too long. Okay, that's it for setup. Let's go and see how to do testing with the WiFi Pineapple.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (11), [[Hardware]] (1), [[Linux]] (1)
> **Env Vars:** vii (3), ssid (3), usb (2), http (1), led (1)
> **Versions:** 802.11 (2), 172.16.40 (1), 2.1 (1)
> **Prerequisites:** setup (2), set up (1)
> **Exercise Files:** download the (2)
> **Definitions:** is a  (2)
> **Ports:** port 1471 (1)
> **UI Navigation:** go to (1)

#### [Harvest credentials with the WiFi Pineapple](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=0)** - [Instructor] We've installed our [[Wi-Fi|WiFi]] Pineapple, and we can now activate it as a rogue access point to start harvesting client devices. Let's log in. We're at the dashboard, and the first thing I'll do is get news, to confirm we have a good internet connection. Now, okay, we're good. I'll go to the Recon page, listed on the left, and I'll scan for access points. I'll take the default 30 seconds and start the scan. We can see a number of open networks, with an OUI of Orient Power Home Network Ltd. These are networks that we found on previous scans, and that the WiFi Pineapple is spoofing as rogue access points. We can also see a real network, COMFAST_AP, which is running WPA2. So we've done our reconnaissance now, and have a good idea of our wireless environment. We've established a number of networks which are open, which unsuspecting victims can connect to. I'll check the clients on our real network, and I'll click on the client with the MAC starting D8:9B. And in the slideout panel, I'll add the client MAC to the filter. Now, I'll do the same thing for OO:45. Okay, so now on my mobile phone, I'll connect to the Brambles network. On the PineAP Suite tab, we can see that we have 21 SSIDs in the pool, and one client connected to a pool AP.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=94)** That's the connection I've just made. I can select filtering on the top bar, and we can see that the MACs have been added to the Allow List. This is useful when limiting our scope of testing. Okay, let's go to the Modules tab and look at Manage, and get Available Modules. We can see that HTTPeek is available. Let's install it.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=126)** Okay, that's installed. And back on the Install tab, we can select it, enable it,
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/harvest-credentials-with-the-wifi-pineapple?u=76281980&t=139)** and we can start listening. On my mobile phone, I'll navigate to the Zero Bank at [webappsecurity.com](https://webappsecurity.com) and log in. As soon as I do, we can see the URL is being captured. We can see the cookies, with the session ID, and below that, the POST data that's being captured. We can see the username and password being sent in the login page. We have successfully become a man in the middle. We can see the HTTP traffic being exchanged, and we've captured credentials.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (2)
> **Env Vars:** mac (2), oui (1), comfast_ap (1), wpa2 (1), url (1)
> **UI Navigation:** go to (2), click on (1), navigate to (1)
> **Prerequisites:** install (2)
> **URLs:** [webappsecurity.com](https://webappsecurity.com) (1)
> **Ports:** :45 (1)
> **API Endpoints:** post  (1)
> **Speakers:** - [instructor] (1)

#### [Capturing WPA handshakes](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wpa-handshakes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wpa-handshakes?u=76281980&t=0)** - [Instructor] The [[Wi-Fi]] Pineapple has the ability to listen on a network and capture WPA handshakes. We'll go to the Raycom page and select my compassed AP and at the slide out panel we'll select capture WPA handshakes. I'll go to the top of the screen to the handshakes panel. We can either actively deal authenticate client devices to force them to reacquire the connection, or we can wait for a new connection to appear. For the purposes of the course, I'll shut down Wi-Fi and start to tip again on my iPad. Okay, let's refresh the screen. We can see that we've captured a WPA handshake and we can now download it as a PCAP file to do further analysis with our normal Wi-Fi testing tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (3)
> **Env Vars:** wpa (3), pcap (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** ipad (1)
> **Speakers:** - [instructor] (1)

#### [Scanning and attacking with Fluxion](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=0)** - Fluxion is a custom tool for setting up and running a rogue access point, and it runs on [[Kali Linux]]. It can be cloned from the site shown here. Its purpose is to get a network hash and then set up a rogue access point using that hash. I've already cloned Fluxion on my Kali system, and I have an external RA link [[Wi-Fi|wifi]] USB device connected to Kali. Let's see how Fluxion works. Note that when you first start it on your system it will check for any missing dependencies and install them, and that can take a while. And then it will ask you what language you want to use. I've already done my first run, so let's jump straight into using the program. We'll CD to Fluxion, and we'll run sudo fluxion.sh.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=70)** We can now pick the channel we want to run on. If we know the channel our target is using then we should use that. We don't, so we'll scan all 2.4 gigahertz channels.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=85)** The scanner now starts. We're given the instruction to close the scanner after it's checked the available networks. So we'll do that. We've now identified some networks, and the one we want to attack is COMFAST AP. We'll select that. And we'll select our RA link wifi modem.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=126)** We have already run this, but we'll reset the attack and configure it again. Let's run a passive monitoring attack and wait for a connection to be made.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=148)** We'll take the recommended verification with cowpatty, and we'll check for a handshake every 30 seconds. And we'll take the recommended synchronous verification. Okay, the attack's now taking place, so I'll connect to the network. Okay, the attack's complete, and we have a valid hash added to the Fluxion database. That's the first stage completed of setting up our rogue AP.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=193)** Now that we've obtained a hash, we can use that to run a captive portal attack. We'll select another attack.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=212)** For this demonstration, I'll use the default captive portal interface. But as you get familiar with Fluxion, you can create your own custom user portals.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=228)** We'll select captive portal and we'll continue to attack COMFAST AP. We'll skip target tracking, and we'll select [[Wi-Fi|WLAN]] zero as our RA link interface. Method of deauthentication, we'll select air replay, and we'll use a rogue AP with host APD as the recommended access point service. We'll select cowpatty for our hash verification. We've already got the hash in our database from our initial handshake snooper, so we'll use that.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=273)** And we'll again use cowpatty for verification. And we'll create a new SSL certificate for our portal.
>
> **[4:49](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-and-attacking-with-fluxion?u=76281980&t=289)** We'll use the recommended disconnected connectivity, and we'll select 47 as the modem type. Okay, we're now running the main [[Dashboards]] for our captive portal. Let's see what happens when someone connects to COMFAST AP. We firstly see in the top right hand AP authenticator the client or clients that have connected. We can see Fluxion's [[DHCP]] service providing an IP address, and its DNS service active in the bottom lefthand panel. The bottom middle panel shows the website activity. We've captured connections, and we're now running acting as a man in the middle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (2), [[Kali Linux]] (1), [[Wi-Fi|Wlan]] (1), [[Dashboards]] (1), [[DHCP]] (1)
> **Env Vars:** comfast (3), usb (1), wlan (1), apd (1), ssl (1)
> **Best Practices:** recommended (4)
> **Prerequisites:** set up (1), install (1), configure (1)
> **CLI Commands:** cd (1), sudo (1)
> **File Paths:** fluxion.sh (1)
> **Versions:** 2.4 (1)
> **Definitions:** is a  (1)


### 3. Bluetooth

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Bluetooth](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=0)** - [Instructor] For a period around 2008, Bluetooth became a topic of keen interest to security researchers due to a weakness which enabled information to be silently sucked out of mobile phones across their Bluetooth channel. This has subsequently been fixed but interest continues in this form of close-end communication. The Bluetooth protocol works in the 2.4 gigahertz frequency which is also used by [[Wi-Fi|WiFi]] and ZigBee systems and is defined by the IEEE Standard 802.15.1. Bluetooth networks are known as Piconets and will often consist of just one master and one slave device. They can, however, be configured to have multiple slaves, up to seven although in this case, slaves can only talk to their master node, not to each other. A Bluetooth device is identified by its Bluetooth device address which is 48 bits or six bytes. It's normally presented as six two-digit hexadecimal pairs separated by colons. The top three pairs are the Organizationally Unique Identifier or OUI which is fixed for a manufacturer. Bluetooth devices also have friendly names such as Nokia or My iPhone. Bluetooth devices are known as class one devices if they're capable of interactions at up to 100 meters. Class two devices if they can operate up to 10 meters and class three devices which operate at 10 centimeters or less. Data can be transferred between Bluetooth devices
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=95)** as a [[Real-Time]] stream or as files. Real-time data include streaming audio and video, telephony and so on. File transfers are more usually to, from or between laptops. To connect, the slave and master must identify each other and then form a pair. Identifying a Bluetooth device involves scanning, known in Bluetooth terminology as an inquiry. One device will send out an inquiry request and any active devices will respond with their address, name and other information. Bluetooth devices may automatically bond without user interaction, usually when they've previously been connected. For example, when you get into your car, your mobile phone may pair automatically with the car Bluetooth system. Pairing of mobiles and laptops may require user intervention involving each participant confirming a six-digit number which is displayed. Bluetooth devices are defined by what is known as their operating profile and for two devices to interoperate, they must share a common operating profile. For example, to replace a serial interface cable between two computers, the devices would operate a serial port profile. For devices which relay human interactions such as keyboard and mouse or a gaming handset, the devices would operate a human interface device or HID profile. Hands-free headsets operate a hands-free profile or HFP. Audio transmissions operate
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=191)** in the Advanced Audio Distribution Profile or A2DP and remote controllers use the Audio/Video Remote Control Profile or AVRCP. Each of these profiles operate in a way most suited to the communication traffic characteristics. The Service Discovery Protocol allows Bluetooth devices to identify the services offered by other devices. In particular, the profiles offered. SDP offers direct support for searching for specific SSIDs and for browsing services. The implementation of a Bluetooth stack involves Bluetooth [[Hardware]] device and its associated host controller interface driver. The interface allows software in the device to talk to the Bluetooth hardware. Below the interface, there are three basic transport layers. USB, RS-232 serial interface and UART serial interface transport. The bottom layer of software stack is a radio on top of which is a Baseband controller which manages the frequency hopping and channels. This connects through the host controller interface driver to the Link Manager and its Logical Link Control Adaptation Protocol or L2CAP which control the setup and pull down of Bluetooth sessions. The Baseband layer can also connect directly through to application-level audio. Above the Logical Link Control Adaptation Protocol is the data in the form of TCP, HCI or RFCOMM protocols
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/understanding-bluetooth-2?u=76281980&t=286)** which then feed into applications. In addition, applications can receive control messages from the Link Manager. RFCOMM is a cable replacement protocol which provides a virtual serial stream and we'll be seeing more of this shortly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Hardware]] (2), [[Wi-Fi|Wifi]] (1)
> **Env Vars:** rfcomm (2), ieee (1), oui (1), hid (1), hfp (1)
> **Definitions:** is a  (3), known as (2)
> **Analogies:** such as (2), for example (2)
> **Versions:** 2.4 (1), 802.15.1 (1)
> **CLI Commands:** node (1)
> **Code Identifiers:** iphone (1)
> **Prerequisites:** setup (1)

#### [Scanning for Bluetooth devices](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=0)** - [Tutor] To use Bluetooth with Kali in a virtual environment we need to have a USB Bluetooth adapter loaded, just like we do for [[Wi-Fi]]. I've added my Targus USB Bluetooth device to the Kali VM in VirtualBox, which I can see if I click on the USB configuration. The Targus is shown as a Broadcom Bluetooth device. I'll open a terminal window and check my USB devices with the lsusb command. We're cool, we can see a Broadcom Bluetooth device. I'll now see what the Bluetooth interface is with the hciconfig command, and we can see hci0 is available for use with a Bluetooth device address of 00 19 0E 18 8A 0E.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=47)** I can now look for devices using hcitool. I'll use the minus minus info switch enumerate the device and the minus minus oui switch to tell me what type of device it is. Okay, we found three devices. The first is my iPhone with this Bluetooth device address of 7C 11 BE CB 25 C2, and I can see its name, the chip set manufacturer, and a detailed list of Bluetooth capabilities. It's also shown that it's manufactured by Apple, Inc. And shows the first three bytes of the address. These are the OUI, the organization unique identifier. I've also detected my Nexus 7 tab and my Acer E130 smartphone. I can also use the tool included with Kali to scan for Bluetooth devices. I'll go to the Applications menu, Wireless Attacks, Bluetooth Tools, and we can see bluelog. As bluelog opens a terminal window I can just call it from the current one. Okay, I can run a live scan by entering bluelog minus l. Let's leave it to run for a few seconds and then we'll check what it's found. Okay, I'll terminate the scan with a control + C. I can see the output is in slash temp slash live dot log, so let's look at that. Okay, bluelog has found the three devices,
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=143)** my Acer E130, my Apple smartphone, and my Nexus 7. BT scanner is another tool for Bluetooth scanning that's provided as part of the Kali distribution. We can run this by executing the tool with no options. The commands are shown at the bottom of the window. I'll press i to do an inquiry scan. Okay, we've found all three devices again. I'll quit this now. We can use the L2 ping tool that comes with Kali to make sure our devices are active. Let's check the iPhone. Okay, we can see the response from the device as we would with a network ping. Let's try that again with the Nexus 7. Okay, now I've also got an [[Android]] phone with Bluetooth active, but set not to be visible to other devices. The standard scanning tools didn't find it. We can find devices which are hidden, but need to do so using a brute force search across an address range. To do this, Kali provides another tool called redfang. It's in the Bluetooth testing menu, but we can just call it from the command line. Let's have a look at its options using the minus h switch. Okay, so we can see two important switches, the r switch to specify the address range to scan and the s switch to do Bluetooth discovery. I'll now run it to search for a device with a Bluetooth device address in the range 0CD6BD46D4002FF. Note that we omit the colons when specifying the range.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-for-bluetooth-devices-2?u=76281980&t=240)** Okay, let's see what it finds. Okay, I'll stop redfang there now. Redfang found a discoverable device, my iPhone, and we found a hidden device with address 0CD6BD46D427. It's called PE TL10, and that's my Android phone, and it's using a Broadcom chip set. We've got a dump of all its features. Doing a scan of the whole address range sounds daunting, but in fact the top 24 bits of the organization unique identifier, as we saw earlier with the iPhone detection. By knowing this, the address space to search for all devices of that kind is reduced to 24 bits, but it's still a large search. Unfortunately from a security perspective there is a way to determine a hidden Bluetooth address. The Bluetooth address will often be close to the Wi-Fi Mac address, so a redfang scan can be carried out on a mobile phone if it's been detected on a network. Let's check it out. I'll set my Wi-Fi adapter into monitoring mode and run airodump. Okay, there's my iPhone with a Mac address of 7C11BECB25C3, just one higher than the iPhone's Bluetooth address. So by combining Wi-Fi scanning and redfang, detecting hidden devices is pretty straightforward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (4), [[Android]] (2)
> **Env Vars:** usb (4), e130 (2), oui (1), tl10 (1)
> **Code Identifiers:** iphone (6)
> **UI Navigation:** switch to (2), click on (1), go to (1)
> **CLI Commands:** find (2), make (1)
> **Tools:** terminal (2), command line (1)
> **Cross-References:** as we saw (1)
> **Definitions:** is a  (1)

#### [Legacy attacks using Bluesnarfer](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=0)** - [Instructor] One of the early tools for Bluetooth hacking is called Bluesnarfer. As with a number of the tools in the [[Penetration Testing]] kit, this has been overtaken by security improvements in mobile phone technology and isn't a viable attack these days. The original concept of Bluesnarfer was to pair silently with another device and then issue commands to gain access to stored information or to issue AT commands, which allow a remote attacker to send messages or dial numbers. While it's not a viable attack anymore, it's useful to go through the process to understand how it worked. Let's check our Bluetooth setup. Okay, I've got my Avantree adapter plugged in and ready to go. That's the Cambridge Silicon Radio Bluetooth dongle. And it's on hci0, as I'd expect. Let's also check what Bluetooth devices we can see with hcitool, and I can see my Acer mobile device. I'll ping it to make sure it's responding. In order to configure kali to access the phone, I need to create and set up a temporary rfcon directory and create a virtual device file for hci0 to manage the adapter. This command creates a pipe with read/write access which acts as a buffer which links the driver with the software that's using it. The c flag indicates this is a character-based device with major and minor device numbers of 216 and 0. I now need to know which channels the phone
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/legacy-attacks-using-bluesnarfer-2?u=76281980&t=91)** is communicating on, and I'll do this by running another tool called sdptool. Okay, by reading through the output, I can see the phone is connecting on channel 10 for its hands-free audio gateway, and channel 11 to access the headset audio gateway. Firstly, I'll see if I can access the basic phone information. This may take a few attempts. Okay, we got that first time. When the device name appears, we know that Bluetooth is connected. The command phase of Bluesnarfer is a little unreliable, so we need to be a little persistent sometimes. But that showed me a valid information response. Let's now try and access the phone book records. I'll ask for the first 10. Okay, again we have to be a little persistent. Okay, so we can see we've got the address entries. In this case, Bluesnarfer had a problem making its initial connection to get the device name, but it did manage to access the phone book records. It's listed my testing phone book data, not all 10 that I requested, because some entries in the phone book may be deleted records. While this is a useful exercise in better understanding the way mobile phones manage their channel use, it doesn't work with newer phones, and so it's currently of legacy interest only. Although it's always possible that we'll see variants of this form of attack emerging in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (1)
> **Definitions:** is a  (3), is called (1)
> **Prerequisites:** setup (1), configure (1), set up (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 4. Additional Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Using FernWi-Fi Cracker](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=0)** - [Instructor] Kali comes with a number of tools for [[Wi-Fi|WiFi]] testing. One of them is the Fern WiFi Cracker. I'll select it from the Applications menu under the Main Wireless Attacks menu. The first thing I have to do is select the monitoring interface to use. Fern has detected the interfaces available and I just need to click on the one I want and select it. Fern will automatically put this into monitor mode and display a message when it's ready. Okay, I can now scan for access points. Fern will initialize its scanning engine and then start monitoring for access point broadcasts. It takes a couple of minutes to pick up all the networks. As it does so, it shows a message next to the WEP and WPA symbols showing what has been detected. It also maintains a database of networks and if one have been cracked, it will have its key stored. We can see there are no keys currently stored. Okay, I'll have a look at the WPA access points. This shows a panel with the detected access points. As we click on each, its details are shown below the panel. We have two options for attack, a regular de-authentication attack on the WPA key or a WPS pen attack. I'll select my TPG 83nj WPA2 secured access point and I'll leave this as a regular attack. At the bottom right, I can select a dictionary file. Fern WiFi comes with its own common .txt dictionary but there are quite a lot in the user share wordlist folder that you can choose from
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-fernwi-fi-cracker?u=76281980&t=92)** or you can create or import your own. Let's go select the Fern dictionary. Fern needs a client to be able to run its WPA attack. And it monitors the packets going to and from the access points looking for clients which were associated with them. When it finds one, Fern will add it to the list of MAC addresses on the bottom right. Let's see what we've got and pick one. I can now press the WiFi Attack button to start the attack. Fern begins by probing the access point and then de-authenticating the clients it's found. I'll let Fern do its thing for a minute or so. And it's now found the network password, our familiar ABCD1994. Okay, I can close this now and we can see that there's now one entry in the key database. There's also a professional version of Fern WiFi available with much more functionality and better instrumentation which is a useful upgrade for professional wireless testers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (5)
> **Env Vars:** wpa (4), wep (1), wps (1), tpg (1), wpa2 (1)
> **UI Navigation:** select the (2), click on (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Discovering networks with inSSIDer](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=0)** - [Instructor] A number of the older tools for network testing such as NetStumbler are not well suited to modern testing practice. But there are more recent tools available, inSSIDer is a replacement tool for NetStumbler, and a personal use version can be downloaded from the website shown. Note that the personal version, inSSIDer 4, is a paid but low cost shareware product. InSIDDer can be used for detecting wireless networks and for identifying network strength during a walkaround or wardrive. InSSIDer is simple but effective, let's take a look at what it can do. On starting inSIDDer the main screen shows the detected networks in it's logical view. The [[Wi-Fi|WiFi]] menu item shows the WiFi adapters, in my case the internal WiFi adapter has been selected for the scan. I can select a Atheros, my external alpha antenna, and inSIDDer will switch to that for it's collection. The pane at the bottom left provides a graph of signal strength in the 2.4 gigahertz range, and at the right, the five gigahertz range. The default logical view in the main pane shows the SSID channel protocol and whether it's secure. Using the button at the top right I can switch to physical view, and we see the BSSID or MAC address of the access point. There are also some filters which can be used to limit the display to just a specific SSID, BSSID channel or minimum signal strength. I won't bother with them right now. A link symbol is shown against my network,
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/discovering-networks-with-inssider-2?u=76281980&t=95)** note that an extender, and in fact any access point with the same name, won't show in the logical display, but it will in the physical display. Okay, I'll switch back to the logical display for the moment, if I click on one of the entries I get a more detailed information on the network, including the security and the access point vendor and also a detailed signal stream for each physical network in this group. If I switch to physical mode, and click on an entry, I get additional details of the radio and also any other access points using the same channel. InSIDDer also indicates the best channel for this access point to be on. InSIDDer is relatively simple, but it's an easy to use tool to identify access points and to support serving.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (3)
> **Env Vars:** ssid (2), bssid (2), mac (1)
> **Code Identifiers:** inssider (2), insidder (2)
> **UI Navigation:** switch to (2), click on (2)
> **Definitions:** is a  (2)
> **Warnings:** note that (2)
> **Versions:** 2.4 (1)
> **Analogies:** such as (1)

#### [Capturing wireless packets with Acrylic Analyzer](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=0)** - Acrylic Analyzer is a tool to detect and enable testing of wireless networks. A free version is available and can be downloaded from the website shown. The professional version is reasonably priced and has a lot of features. I'll be using that one in this demonstration. Acrylic Analyzer can be used for detecting wireless networks and for identifying network strengths during a walk around or war drive and for identifying clients associated with the access points. It also provides wireless network, packet capture and testing of passwords and pins. On starting Acrylic Analyzer the main screen comes up in the access point view, the [[Wi-Fi|WiFi]] symbol at the top. I can press the play button to start detecting networks. The main pane shows the SSID, the BSSID, the receive signal strength, the channel, some quality of security information and if we slide across we can see the vendor information and details of the type of access point and the packets process. The pane at the bottom provides a moving trace of signal strength. Clicking on an access point will select the entry and subsequent actions such as the lower tabs will provide additional information for that entry. I can also right click on an entry and get a further context menu. Let's have a look at some of these options. I'll select add to inventory. Adding a device to the inventory allows me to put in a friendly name. I'll make this one Telecom Modem and this will be displayed
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=95)** instead of the BSSID. Okay, I'll save this. If I want to see my inventory, I can click on the options symbol at the top right, select [[Windows]] and select the bottom menu item, inventory. I can right click the entry I've just added and I have a maintenance menu for inventory items. This is really useful to keep track of devices on your home network and of course it's invaluable for a small business with its larger fleet of equipment. The lock to channel option locks Acrylic to the channel of the selected entry and it's useful for limiting the amount of information being updated. The next context option, show Wps information provides a numeration of the access point through its Wps messages. This provides manufacturer, model and number, device name, serial number and so on. I'll select my home network and I'll select center connectivity module. This option allows us to run a dictionary attack against an access point to test its resilience. We need to use a free interface so I'll select the Atheros. Acrylic provides a small demonstration dictionary with a few entries. For serious use, we'd need to set up our own set of dictionaries. I'll select the default dictionary and set it. I'll select the connectivity tab in the lower pane and we can see that we have the task registered. I've disconnected my system from the network as Acrylic needs to use the connection for this test.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=190)** I'll right-click and start the attack. The status information on the right advises progress and we can see that the passwords so far are failing. I'll leave this for the moment while it runs through the dictionary. Now, it's tried the password ABCD1994 and then finishes the testing having found the network key. Acrylic provides options to capture the details of the scan and it can be tweeted, copied to the clipboard for reporting or exported in various [[Forms]]. Okay, that's a quick look at some of the main pane options and I'll leave them for now. The lower pane has a number of tabs. The signal strength tab provides a summary view of access point signal strength. The network quality tab provides a detailed analysis of the signal for the selected access point including its speed, signal-to-noise ratio and security. The 2.4 gigahertz and five gigahertz tabs provide a view of which access points are operating in what part of their spectrum. The networks requested tab shows which client devices have requested access to the selected access point. The detailed information tab provides the details of the access point or client, its manufacturer, model and serial number, its device name and its capabilities. Before I leave the access point view, I'll select the options symbol at the top right and select change in the top entry. We can see monitor mode is off
>
> **[4:44](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=284)** and we're using the built-in interface. I'll turn on monitor mode and I'll select the Atheros interface and press okay. The main pane will clear and then start to refresh using the signals captured by the Atheros. We see the access points again but now we can also see a plus sign to the left of the SSID. This is shown where an access point has device activity and the associated devices can be seen by expanding the plus sign. Here we see the MAC address of the client on my home network. The clients of course don't have a channel shown, they use their access point channel. The next view is the station's view and I select that by clicking the cell phone icon to the right of the access point WiFi symbol. This view shows all the BSSIDs that have been identified by Acrylic with their information enumerated. These are shown as access points or clients or undefined active or passive devices. We can see activity taking place as clients request associations. Right-clicking an entry provides a similar set of options to the access point screen with the exception of the lock to channel option which is replaced by add to multicast option which isn't currently active. The next view at the top is the wireless packets view. Selecting the view shows the packet screen but with no packets. To see the packets, I need to turn on packet viewing. The packets are shown as entries in the top pane. Their full radio frames with their IEEE802.11 framing if we're interested in IP packets,
>
> **[6:18](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=378)** they're held inside the IEEE802.11 packets in the data section. I have a scroll bar on the right and if I move it down, I can see that we've got management control and data packets. If I flick on a packet, we see the radio packet structure shown in the bottom left pane and the raw data in the bottom-right pane. Note that the structure is limited to the WiFi elements and the data content isn't structured in any more detail. If I expand the packets, we can see the structure. IP information is held inside the IEEE802.11 packets in the data section. But if the air component of the path is encrypted then we won't see a great deal of useful information. However, this [[Microsoft Excel|Excel]] access point is open and I've just pinged it. We can see a data packet from the Shenzhen device, that's my luminosity tab to the ZyXEL. I can select a field in the left-hand bottom pane and right click and add that to the filter. Now, we've got a manageable list of packets originating from the luminosity. I'll select the data packet above it and I'll expand the data field, I'll click on content and the content part of the packet on the right is highlighted. We can see the expected 4500 IP header field and the plain text contents in the packet on the right. The next major tab at the top is the script tab and we can see a number of scripts come included with Acrylic.
>
> **[7:51](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/capturing-wireless-packets-with-acrylic-analyzer-2?u=76281980&t=471)** The top section is for WPA keys and the bottom for Wps pin codes. Scripts are used to assist with the testing of passwords and pins. This is a powerful feature in an advanced topic so I won't delve into it any further. Okay, so that's a quick run through the main features of Acrylic WiFi professional, a serious tool for wireless testers. There's also a commercial companion WiFi heat map tool available from the Acrylic website that can be used to do WiFi signals sprint mapping through out complex sites.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (6), [[Windows]] (1), [[Forms]] (1), [[Microsoft Excel|Excel]] (1)
> **UI Navigation:** select the (8), click on (3), right-click (1)
> **Env Vars:** ieee802 (3), ssid (2), bssid (2), abcd1994 (1), mac (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Versions:** 2.4 (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)

#### [Heat mapping with Ekehau](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=0)** - [Instructor] When testing wireless networks it's useful to be able to map out, over the network site, the various network access points and their coverage. This not only helps identify unknown networks, it also identifies network cool and hot spots, as well as neighboring networks which intrude into the site. There are many commercial heat mapping software packages, including Acrylic. However, there's a free software package, which is popular, called Ekahau. It's available for download at the site shown. Ekahau HeatMapper is an entry-level product which can be upgraded to the commercial site survey tool. It doesn't provide a scaling tool to enable the scale to be set on the map, but the commercial upgrade does. It also doesn't allow multiple floors to be stacked on top of each other, something other tools may do. Nevertheless, HeatMapper is pretty useful for many home and business sites. The download and installation is straightforward. I've already got it installed. So let's go take a look at it. The entry screen provides information on other Ekahau [[Microsoft Products|products]] and lets me open the tool either with my own map or alternatively using a simple grid. Maps can be imported in many file formats, including BMPs, JPEGs, PNGs, GIFs, PDFs and DWD/DXF CAD drawings. I've drawn a map of my site in [[Microsoft PowerPoint|PowerPoint]] and exported it as a JPEG, so I'll load that. On the left, we can see the access points that have been detected and the strength of their signal. I'll do a very simple one point site survey
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=94)** to get an idea of how the software works. I'll just left click a couple of points close together as waypoints and then right click to terminate the walk. We can say a number of access points, some clustered at the point within my site, and many on the top and bottom parameters, which were externally detected networks. As I click on them, the heat map shows their signal strength as a point value around the static survey location and estimated across the site. Obviously, with a static survey, this is very approximate. The labels above the access point risk can be used to select the sort order, useful when there's a lot of access points. I can select the Take Screenshot button and this will create a PNG image of the current heat map on the screen. To carry out a mobile heat map survey, we would have the software available on a laptop or tablet and select a start point, then we'd left click the current location on the map and start walking around the site. As we walk, we'd frequently click the point on the map where we are. During this time, the HeatMapper is capturing the signal strength of each access point and extrapolating it between points. Once we've walked around the whole area, we can right click to terminate the signal capture. HeatMapper will then calculate the signal strength across the map for each access point. After right-clicking, we can check the coverage of all access points. I've run a proper site survey throughout my location and saved the results from a number of different perspectives.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/heat-mapping-with-ekehau-2?u=76281980&t=186)** Let's load them and see what we have. The first is from the perspective of my Zyxel access point. The double lines show the survey path and this enables signal strength across the site to be determined and so the results can be much more accurately mapped. Note that we have now placed access points either close to where they are in the site or at the perimeter in the direction which they're located. We can see that the Zyxel has good coverage throughout the site. The next is the Optus external access point, which becomes increasingly less detectable as we move left across the map, which is consistent with an external access point on the right perimeter, The third is my Telecom access point, which is located on the left of the map, but in a sheltered location. It's signal is much weaker to the right of the map, not due to distance, but due to internal structural impediments. As we can see by doing a mobile survey, we get much better signal strength information to determine coverage. And a good quality result for all detectable networks. Heat mapping is an important part of setting up networks, unless the penetration tester provide additional value in terms of advising optimal allocations for access points.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Microsoft PowerPoint|Powerpoint]] (1)
> **Env Vars:** dwd (1), dxf (1), cad (1), jpeg (1), png (1)
> **UI Navigation:** select the (2), open the (1), click on (1)
> **Definitions:** is an  (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Wi-Fi sniffing using Wireshark](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=0)** - [Instructor] One of the most popular tools for capturing packets is [[Wireshark]], and it can do that on the [[Wi-Fi]] interface just as it does on the wired interface. I'll demonstrate this using Wireshark in Kali. The first thing I need to do is set the adapter into monitoring mode. We're in monitor mode now, so let's start Wireshark. The first screen of Wireshark displays any prior sessions in which packets were captured and the list of adapters from which to choose for this capture session. There's a moving packet trace by each interface, so that's a good guide as to which interface is active. The interface we're interested in is the monitoring mode adapter on wlan0mon. I'll select this and press the blue shark fin to start capturing. While this is running I'll connect my mobile to the network and use it to switch the Wemo power switch on and off. I'll stop the capture now and we can take a look at what we've captured. The first thing to check is the [[Wi-Fi|wireless LAN]] summary. I'll select wireless from the menu and [[Wi-Fi|WLAN]] traffic. This shows the summary by access point for traffic. We can see that we've collected beacons but no data traffic from the first three access points. For TPG 83nj, my access point, we've got beacons and data. When I open the dropdown by it we can see we've collected traffic from our devices on our access point. Let's go look at the data itself. We can see there are a number of beacons in the traffic, and we have one selected in the middle panel.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=95)** Let's look at the packet structure. The top level packet structure provides a frame, a radio tap, 802.11 radio information, the 802.11 beacon frame, and the 802.11 wireless management frame. If I expand the frame I can see timing information, the overall frame length, and the protocols in the frame. The radio tap header provides details of the channel frequency and the signal strength. The 802.11 radio information is an extraction of packet data. The 802.11 beacon frame has a lot of more conventional packet information, such as source, destination and receiver addresses, and the BSSID. The remainder of the packet contains the SSID, the channel, and the configurations which are supported by the device, which of course is a key function of the beacon packet. There's also some vendor-specific data typically relating to nonstandard or advanced features. I'll scroll down and find the packet from my mobile, which shows up as Huawei T46, to the Belkin Wemo switch. We can again see the frame and radio tap header and the extracted 802.11 radio information. There's a new qos data structure in this packet. This is a quality of service data frame and it's distinguished by the presence of a qos control field. There are two types of qos that are used in 802.11, prioritized and parametrized,
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=188)** to provide functionality for delay sensitive applications The data section carries the IP packet, which we can see is encrypted. Wireshark provides the means to passively capture Wi-Fi traffic, but with web port WPA enforce it delivers only cypher text. However, while it doesn't have an attack capability it does know how to decrypt wireless packets if you know the key, let's do that. I'll select Edit, Preferences, Protocols, IEEE 802.11.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/wi-fi-sniffing-using-wireshark-2?u=76281980&t=228)** We can see the enabled decryption checkbox is ticked, but we need to put in the key. We can access the WPA key calculator on the Wireshark website. I'll enter the network key and the SSID. And I'll generate the PSK. Okay, I'll select that and copy it. Back in Wireshark I'll press Edit, Add, and I'll add a WPA PSK and paste in the key, and I can close that. We can now see the TCP packet data from my mobile phone on 192 168 1 4 to the Belkin on port 49153 as a TCP packet. If you know the key, Wireshark makes it very easy to read wireless traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (8), [[Wi-Fi]] (2), [[Wi-Fi|Wireless lan]] (1), [[Wi-Fi|Wlan]] (1)
> **Env Vars:** wpa (3), ssid (2), psk (2), tcp (2), lan (1)
> **Versions:** 802.11 (8)
> **UI Navigation:** open the (1), dropdown (1), scroll down (1), checkbox (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Ports:** port 49153 (1)
> **Analogies:** such as (1)

#### [Scanning with Vistumbler](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=0)** - [Instructor] A simple but effective [[Windows]] public domain scanning tool is Vistumbler. The Vistumbler [[GitHub]] repository of executables is shown here, and if we click on the latest release, version 10, we get a list of minor releases. Let's select version 10-6-5, and we get the download page. This allows us to download a simple executable installer. You'll also need to have [[Google]] Earth loaded if you want to use Vistumbler's Google Earth GPS features. Okay, I have Vistumbler running and my TP-Link USB adapter plugged in. And the first thing I want to do is check the interface. I can do this by using the menu item Interface, and make sure I've selected my USB [[Wi-Fi|Wireless LAN]] Card. Now I can do my scan by pressing Scan APs. The access points are listed. The main panel shows each access point with the MAC address and the SSID. We can see an analysis of the high and low signal strength, and the channel on which the access point is operating. We can also see the authentication and encryption modes. If I scroll across, I can see the manufacturer and radio type of the device. There are also some latitude and longitude figures. Vistumbler can work in conjunction with GPS
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=95)** to identify exactly where the access point is located. A useful feature for wide-ranging wardriving. On the left side I can view the data by Authentication, by Channel, Encryption, Network Type, and SSID. If I select Extra from the menu, and 2.4Ghz Channel Graph, I can see the power graph of the various access points. Okay, I'll close that. I can select the left-hand button, Graph1, and then select one or more of the access points to graph it in real time. As noted earlier, one of the features in Vistumbler, is its GPS integration, which is particularly useful when mapping out an urban region of access points. Setting up GPS is fairly straightforward. Open Settings, GPS Settings, and then select the correct COM port from the drop-down box and make sure the speed and other settings are correct. One of the more interesting features of Vistumbler is the WiFiDB menu option. This links to an online database for Vistumbler [[Wi-Fi]] data, allowing all Vistumbler users to contribute access point data for common reference. I can get to this web page by selecting WiFiDB, and Open WiFiDB Main Webpage. At the WiFiDB home page,
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/scanning-with-vistumbler-2?u=76281980&t=194)** we can see a login link at the top right. If we click that, we get the option to log in, or create an account. I won't do that right now, but it's worth noting that when you create an account, you get an API key generated which you can copy out to use for programmatic access to WiFiDB. At the left there's a menu and I'll click on List APs. We can see there's a lot of access points listed in the database. The second column shows the record number. And we can see there's over 5 1/2 million records. This list shows the basic access point data, and if we scroll through it, we can see there's plenty of open access points. While there's a lot of records in the database, the older ones may no longer be active. I can select one, and get a full-screen display of the record. Note that this shows the latitude and longitude of the access point. And I can show this entry on a map by clicking on the globe icon. There's a number of menu options on the left to import data, export data, do searches, and many more things. It's worth exploring these options in your own time. Vistumbler is simple to use but a very effective tool for identifying access points.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Windows]] (1), [[GitHub]] (1), [[Wi-Fi|Wireless lan]] (1), [[Wi-Fi]] (1)
> **Env Vars:** gps (5), usb (2), ssid (2), lan (1), mac (1)
> **UI Navigation:** click on (2), select the (2)
> **CLI Commands:** make (2)
> **Versions:** version 10 (2)
> **Tools:** github (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Using Commview to scan Wi-Fi networks](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=0)** - [Instructor] CommView for [[Wi-Fi|WiFi]] is a commercial product but a limited use evaluation version can be downloaded and installed. On first start up, it will detect the WiFi cards installed on your system and load the appropriate driver. I've downloaded and installed CommView and it's using my alpha card. The initial display is known as the Nodes view and we can see at the top left that we're displaying the Nodes tab. I'll press the play button to start capturing. As CommView hops across the channels, it displays the protocols 802.11g and 802.11n with the networks that it detects and under each network, the clients that are connected. On the left, there's a bar chart showing the channels and on the right, the frequency being scanned. The main display has the standard access point data, channel, SSID, encryption type and signal sensitivity. And if I scroll across the main display, the traffic transmitted and received is shown. I can right click an entry to get a context menu which amongst other functions enables me to get a full details pane for the device or use the Quick Filter to see the data traffic for the device. Okay, I'll stop the capture now. I can select the Channels tab and see a summary of the technical characteristics and traffic intercepted by channel. When I click on an entry, I get the packet summary details in the lower panel
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=93)** and the relevant graphs to the left. When I select the Packets tab, we see a [[Wireshark]]-like display as we did with the quick filter. This shows the type of packet, the source and destination MAC addresses and for TCP/IP packets, the IP addresses and ports. As we can see, there's encrypted data running over WPA which CommView can't decrypt. I can also get a context menu here with more functions for the packet stream and the data. Let's look at an encrypted data packet. We can see the raw packet information in the main screen lower panel and the packet structure at the left. We can see in this case the 802.11 source and destination access point address and the BSSID. We can, at the bottom of the structure, see the Encrypted Data with its IV and its key number. I'll run another capture and this time activate WPA decryption. Before I do that, I'll put in the access point pass phrase. I'll set Settings, WEP/WPA Keys and put in the pass phrase. This will now enable decryption of the WPA packets but only after a valid handshake has been captured. We'll come back to how we force this once we're collecting. Okay, I'm ready to start collecting. I'll hit Play and wait while the access points are detected. I can now see my TPG 83nj access point and it's operating on channel 10.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=189)** I'll set single channel mode on channel 10 at the top right. I'll then select Tools, Node Reassociation, and I'll select my access point. I'll deselect the client addresses not on the node and then press Send. This will de-authenticate and force a real authentication. Let's go back to the Packet view. I'll let this run for a few more moments and then we'll stop and take a look. Already we can see some HTTP packets appearing in the steam. We can see that CommView has been able to use the key we provided to decrypt the packets for those devices on our access point for which it was able to capture the handshakes. While CommView can't do access point attacks, it can collect logs that can be extracted for subsequent analysis by tools such as Aircrack. We'll set this up by selecting only data packets using the funnel at the top. I'll switch to the Logging tab and set up the logging parameters. I'll select Auto-saving and select the maximum directory size to 20,000 and the average log file size to 100. For ease of access, I'll save this to my C:temp file. I'll start capturing now. Again, we need to wait until we capture a handshake
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/using-commview-to-scan-wi-fi-networks-2?u=76281980&t=285)** either by using node reassociation on the targets or when the device reconnects. Okay, we've just seen the Huawei reconnect to the Huawei access point. So I'll stop collecting now. I can now select File, and the Log Viewer and navigate to my temp directory. I can see an NCF file, that's our logs, so let's open it. I'll now export the file as a Wireshark TCP dump format file. I'll store it in temp as commlog. And it'll be stored in the standard cap file format. We can close CommView now. I'm at the command line in my Aircrack folder. I can now run the attack using the [[Windows]] aircrack-ng-avx specifying my target BSSID and SSID and a dictionary file that I've created. Okay, Aircrack now launches the crack and quickly finds the network key using our dictionary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (2), [[Wireshark]] (2), [[Windows]] (1)
> **Env Vars:** wpa (4), ssid (2), tcp (2), bssid (2), mac (1)
> **UI Navigation:** select the (3), click on (1), switch to (1), navigate to (1)
> **CLI Commands:** node (3)
> **Definitions:** is a  (1), known as (1)
> **Versions:** 802.11 (1)
> **Cross-References:** go back to (1)
> **Tools:** command line (1)


### 5. Internet of Things

[↑ Back to Table of Contents](#table-of-contents)

#### [Testing the Internet of Things](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=0)** - [Instructor] Let's take a look at the [[Internet of Things (IoT)|Internet of Things]]. One of the popular home devices is the Belkin WeMo Switch, and I've got a new one powered up, but not yet configured. I'll set Acrylic Analyser running and I'll look at what wireless networks are available in my vicinity. We can see there's a WeMo Switch 296 network available. That's my internet addressable WeMo switch, advertising itself, ready to be connected to my home network. The WeMo network is an open network, so we don't need a password to connect. Let's close Acrylic now and I'll change my network connection from my home network to the switch. Okay, I've opened a command shell and I'll check my network connections. Okay, I can see that I've been assigned the IP address 10.22.22.149 by the switch and the gateway address, the switch itself is 10.22.22.1, I'm now a client on the WeMo's own network. Let's have a look at what ports are available on the switch. I can see two TCP ports open, The DNS service on port 53 and the UPNP plug and play service on port 49152, I can also see this is a [[Linux]] distribution. OK, let's leave the command shell and I'll use my browser to navigate to the device. Hmm, this gets a 404, however, my open source research into this device has identified
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=93)** that there are plug and play webpages we can access, one of them is called setup.xml. Here we see the setup script for the device, this is interesting, but not of immediate benefit to me. However, my research has also indicated an events service page exists. And we see details of the services that are available on the switch. Now this is interesting, these are services that once the switch is configured onto my network, are used to control its operation. One of the services is GetBinaryState, this identifies whether the switch is on or off. The Belkin is controlled using the simple object access protocol, SOAP, which is an extension to the hypertext transfer protocol HTTP and it's extensible markup language XML. Using SOAP, we can script up an HTTP XML message to run this service and send it to the switch using [[Netcat]], let's do that. I've now configured the switch as normal onto my home network, and it's got the IP address 192.168.1.3. I need to use port 49153 to access UPMP services, now that it's configured. Let's run some SOAP queries. I've prepared the script in a file called GetBinaryState.txt in my sub directory, which calls that service on the switch. We can see that it consists of an http post request with a SOAP action command and some associated XML code.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/testing-the-internet-of-things-2?u=76281980&t=188)** The command's completed and we can see the HTTP 200 OK confirmation, looking through the response, we can see the tags <BinaryState>0</BinaryState>. Showing with the zero that the switch is off. I'll use my mobile to switch it on and re-run this command. And we now see that the result is a one. I can now control this switch through netcat. I'll switch it off with another script called switchoff.txt So we have full scripted access to the switch from our network. This switch was penetration tested in 2015 and found to have a remote shell vulnerability, this was achieved by using the SetSmartDevInfo service and sending the string quote telnetd-l/bin/sh as the value of the smart dev url. This vulnerability has subsequently been fixed and the full details are described in the URL shown here. I've prepared this attack in a script file called telnet.txt, the vulnerability's been patched, but let's see the effect of the attack now. Okay, this no-longer opens up telnet, but it does produce an internal server error instead. While this is one exploit that's been fixed, there's still much testing to be done in the Internet of Things, there's little doubt that researchers are going to find many more vulnerabilities in the rapidly expanding Internet of Things in the year or two ahead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Internet of Things (IoT)|Internet of things]] (3), [[Netcat]] (2), [[Linux]] (1)
> **Env Vars:** soap (4), http (3), xml (3), tcp (1), dns (1)
> **Definitions:** is an  (2), is a  (2), is called (1)
> **File Paths:** setup.xml (1), getbinarystate.txt (1), switchoff.txt (1), telnet.txt (1)
> **Ports:** port 53 (1), port 49152 (1), port 49153 (1)
> **Versions:** 10.22.22 (2), 192.168.1 (1)
> **Prerequisites:** setup (2)
> **CLI Commands:** find (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Summary](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/summary-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-wireless-networks/summary-2?u=76281980&t=0)** - [Malcolm] I'd really like to thank you for joining me for this [[LinkedIn]] Learning course. I hope you enjoyed learning how to test the security of wireless technology. Learning how to do wireless testing is just the start of your path to becoming a good ethical hacker. Having understood the concepts, and learned how to use the tools, you now need to practice and gain experience. There's always something new in [[Cybersecurity]], and if you're interested in learning more, then check out the full Cybersecurity [[Ethical Hacking]] segment of the library, where new [[Security Testing]] courses are added regularly. You'll find courses on using [[Kali Linux]], information gathering, denial of service, [[Mobile Testing]] and much more. I'd also like to invite you to go to my author page where you can find some additional courses on cybersecurity. If you want to get hands on with some of the common tools, then do take a look at my introduction to Kali Linux, web application testing, and mobile testing courses. If you're wanting to learn about security for the Cloud, then Cybersecurity for [[Cloud Computing]] is for you. Thanks again for joining me on this LinkedIn learning course, and I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (4), [[LinkedIn]] (2), [[Kali Linux]] (2), [[Mobile Testing]] (2), [[Ethical Hacking]] (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcolm] (1)


## Instructor

- [[Malcolm Shore]]

## Skills Covered

- Wireless Networking
- Ethical Hacking

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

---

[↑ Back to top](#)