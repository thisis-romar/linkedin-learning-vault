---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ethical-hacking-denial-of-service-2
url: "https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2"
duration_minutes: 102
duration: 1h 42m
level: Intermediate
updated: 4/25/2023
learners: 43834
skills:
  - Ethical Hacking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHF86xwF-3bUg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668962818?e=2147483647&amp;v=beta&amp;t=fuxkiPUMF5ouUDq-fE3oVXsQVZkrHH56P9ZQiW1bLdM"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Become an Ethical Hacker](../../Paths/Cybersecurity/Learning%20Paths/Become%20an%20Ethical%20Hacker.md)'
prev_courses:
  - '[Ethical Hacking- Social Engineering](Ethical%20Hacking-%20Social%20Engineering.md)'
next_courses:
  - '[Ethical Hacking- Session Hijacking](Ethical%20Hacking-%20Session%20Hijacking.md)'
path_nav: '[{"path":"Become an Ethical Hacker","position":10,"total":19,"prev":"Ethical Hacking- Social Engineering","next":"Ethical Hacking- Session Hijacking"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/ethical-hacking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20Denial%20of%20Service.md)

![Ethical Hacking: Denial of Service](https://media.licdn.com/dms/image/v2/C4E0DAQHF86xwF-3bUg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668962818?e=2147483647&amp;v=beta&amp;t=fuxkiPUMF5ouUDq-fE3oVXsQVZkrHH56P9ZQiW1bLdM)

# Ethical Hacking: Denial of Service

> Ethical hacking involves testing to see if an organization's network is vulnerable to outside threats. Denial-of-service (DoS) attacks are one of the biggest threats out there. Being able to mitigate DoS attacks is one of the most desired skills for any IT security professional—and a key topic on the Certified Ethical Hacker exam. In this course, learn about the history of the major DoS attacks an

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2) | 1h 42m | Intermediate | 44K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Understanding and defeating denial-of-service attacks](#understanding-and-defeating-denial-of-service-attacks)
  - [What you should know](#what-you-should-know)
  - [Disclaimer](#disclaimer)
- [**1. What Is a Denial of Service?**](#1-what-is-a-denial-of-service) (2 videos)
  - [Understanding denial of service](#understanding-denial-of-service)
  - [Using Python to test denial of service](#using-python-to-test-denial-of-service)
- [**2. Infrastructure Denial of Service**](#2-infrastructure-denial-of-service) (7 videos)
  - [TCP SYN flooding using hping3](#tcp-syn-flooding-using-hping3)
  - [Using Hyena to run a reflection attack](#using-hyena-to-run-a-reflection-attack)
  - [UDP flooding with LOIC](#udp-flooding-with-loic)
  - [ARP poisoning with Ettercap](#arp-poisoning-with-ettercap)
  - [Using NTP to amplify attacks](#using-ntp-to-amplify-attacks)
  - [NEW: Amplification using memcached](#new-amplification-using-memcached)
  - [NEW: When is a DDoS not a DDoS?](#new-when-is-a-ddos-not-a-ddos)
- [**3. Wireless Denial of Service**](#3-wireless-denial-of-service) (1 videos)
  - [Deauthenticating a wireless host](#deauthenticating-a-wireless-host)
- [**4. Application Denial of Service**](#4-application-denial-of-service) (6 videos)
  - [Flooding HTTP using GoldenEye](#flooding-http-using-goldeneye)
  - [Testing webapps using OWASP SwitchBlade](#testing-webapps-using-owasp-switchblade)
  - [Understanding BlackEnergy](#understanding-blackenergy)
  - [Killing the FTP service](#killing-the-ftp-service)
  - [RangeAmp attacks on the CDN](#rangeamp-attacks-on-the-cdn)
  - [Profiling Killnet](#profiling-killnet)
- [**5. SIP Service Attacks**](#5-sip-service-attacks) (1 videos)
  - [Flooding a SIP server](#flooding-a-sip-server)
- [**6. Ransomware**](#6-ransomware) (3 videos)
  - [Explaining ransomware](#explaining-ransomware)
  - [Understanding Cryptolocker](#understanding-cryptolocker)
  - [Understanding Petya](#understanding-petya)
- [**7. Mitigation Techniques**](#7-mitigation-techniques) (5 videos)
  - [Defeating denial-of-service attacks](#defeating-denial-of-service-attacks)
  - [Commercial anti-DOS services](#commercial-anti-dos-services)
  - [Detecting P2P attacks with PeerShark](#detecting-p2p-attacks-with-peershark)
  - [NIST guidance on mitigating DDOS](#nist-guidance-on-mitigating-ddos)
  - [Considering IoT denial](#considering-iot-denial)
- [**Conclusion**](#conclusion) (1 videos)
  - [Summary](#summary)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding and defeating denial-of-service attacks](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-and-defeating-denial-of-service-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-and-defeating-denial-of-service-attacks?u=76281980&t=1)** - [Instructor] In the digital world, cyber attack has unfortunately become an everyday occurrence. One of the common [Forms](../../Skills/Web%20Development/Forms.md) of attack is Denial of Service, which may be a state sponsored attack against critical infrastructure, criminal extortion against a business or just vandalism by hacktivists or amateur hackers. As we go through the course, I'll explain what to Denial of Service is, demonstrate some of the more popular attack tools and then look at how ransomware works. I'll finish by looking at how to protect our systems against Denial of Service. I'm Malcolm Shore and I've spent a career helping governments and businesses protect their systems against cyber attacks. I'd like to invite you to take this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course and learn how to avoid becoming a victim of Denial of Service attacks. Now let's get started with Denial of Service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a practical course. It introduces a number of tools which are used to test systems. During this course, I'll be using a virtualized computing environment called VirtualBox and I'll be using the [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) testing framework. If you're not familiar with virtualization or you haven't used Kali before, you should watch my introduction to Kali Linux course which will show you how to install and use VirtualBox and Kali. In addition, I'll be assuming some basic computer and networking concepts, familiarity with [Windows](../../Glossary/Service/Windows.md), and a knowledge of basic [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) commands.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Disclaimer](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/disclaimer?u=76281980&t=0)** - [Instructor] This course uses a range of third party testing tools. Some are commercial [products](../../Skills/Software%20Development/Microsoft%20Products.md), and some are open source. The download and installation instructions for all tools used in this course is available as a PDF in the associated course material. While we've done our best to insure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers, and we can't provide any assurance that these sites might not be compromised when you visit them. Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware and may raise antivirus alerts when you visit them. The testing tools we demonstrate are extremely powerful. They may demonstrate some of the same signature characteristics as malware and malicious implants and may raise antivirus alerts when you try to download them. Again, we can't provide assurance that the software hasn't been compromised when you download it, and so, as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load onto your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** pdf (1)
> **Speakers:** - [instructor] (1)


### 1. What Is a Denial of Service?

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding denial of service](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=0)** - [Instructor] Denial of service attacks have been a threat on the internet starting as far back as when Robert Morris released his internet worm in 1988. The internet was in its infancy, and the result was little more than an inconvenience. In the age of cyberspace and ubiquitous connectivity, online business depends upon accessible services. A denial of service becomes a much more serious issue and one which can have devastating consequences. The digital attack map provides a view of DDOS attacks based on data collected by arbor networks. Additional information is available by hovering over the streams. In an assessment carried out by Kaspersky Labs in 2015 the cost of such an incident is between $52,000 and $444,000 as a result of an inability to carry out core business. Loss of contracts and opportunities, credit rating impact and insurance premium increases. This is significant enough to justify internal testing to ensure the business is resilient. There are many different ways to achieve a denial of service and it would take a very long time to enumerate them all. But we'll look at the general approaches, and a number of typical attacks in this course. Denial of service is a name given to a class of cyber attacks for which the aim is to disrupt or deny use of a business service. Be that a website or some other service accessible from outside the organization.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=94)** An attack might be from one source, in which case it's called simply a denial of service. Typically it starts with a [Phishing](../../Skills/Software%20Development/Phishing.md) attack on an employee to gain access to the enterprise. This kind of an attack requires the use of an attack workstation, and a tool but no additional infrastructure. The attack may be from multiple sources in which case it's known as a distributed denial of service, this is more complicated because it firstly requires access to a large number of compromised systems. A botnet which can be used as distributed sources all controlled from one master attack work station. One of them issues a phishing email and when activated the enterprise is then a target for all. Distributed denial of service attacks were first seen in 1999 a DOS tool called Trinoo was deployed on over 200 hosts to flood a server at the University of Minnesota. It successfully took the server offline for two days. A third type of attack known as a reflection attack, so called because it goes indirectly to the target by being reflected from a third party service. This is a sophisticated attack that takes advantage of legitimate functions on third party services. To act as the reflection surface that is used in the attack. Typically the reflected volume of data is much larger than the request data, and so the reflection also amplifies the effect of the attack. Because of this, these attacks are sometimes called amplification attacks, the domain name service and the network time service have both been used
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=189)** to run these [Forms](../../Skills/Web%20Development/Forms.md) of attack. An interesting variation on each of these classes of attack known as intermittent or pulsing flooding can be used to navigate through anti DoS defenses. This can be successful when a defense mechanism such as a firewall is more tolerant to a flooding attack than the server it's protecting. There are many attack techniques which can be used to deny services, and these will result in one of three classes of impact, the first is choking access to the service. In which the pathway from the client to the service is overloaded on congested, in such a way as to make it difficult or impossible for a legitimate request to get through. The second is disabling the service, typically by sending a malformed packet which causes some form of internal malfunction in the service or application. The third type of impact is downgrading service performance. Typically done by exhausting host resources for providing services. In addition to the three classes of attack and the three types of impact. There are three classes of attack techniques. The first is network-based attack techniques, which depend upon some form of protocol manipulation to exhaust resources, these include the following attacks, TCP SYN flooding attack which partially creates a TCP session, but does not complete the session handshake, and so consumes resources to maintain status information on the half open connection. The ICMP smurf flooding attack which is a reflective attack using using the ICMP echo because the source address
>
> **[4:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=284)** is forged as the target address and the ICMP response is sent back to the target. If sufficient ICMP requests are made, the response packets flood the target's bandwidth. UDP flooding, a UDP flooding attack is just a distributed denial of service attack in which any form of UDP packets is sent to the target, and flooding occurs because, with a large number of emitting sources the volume of packet data can easily exceed the target's incoming bandwidth. ARP flooding, the ARP protocol is used in local area networks to identify the association between MAC addresses and IP addresses. So that ethernet [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) can be done using MAC addresses. By corrupting the ARP caches, in individual network hosts these hosts can be isolated from the network, thus denying resources. The DNS amplification or reflection attack. A variant of the Smurf attack, this is another reflective attack in which a request is made to a DNS server and the DNS response which is over 50 times larger which is returned, this leverages not only the number of responses but their size to congest the network. A similar approach can be achieved using the NTP service gaining up to 50 times the amplification effect, a global NTP flooding attack took place in early 2014 causing hour long outages in many data centers around the world. The second class of attack is wireless network attacks. These often require the attack to be in close proximity to the wireless network
>
> **[6:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=376)** and are focused on stopping workstations connecting. These include the following attacks, the De-authentication attack, in which the attack monitors for workstations trying to authenticate and issues a specific de-authentication request to that workstation. Alternatively a broadcast de-authentication can be sent which affects all workstations. The routing congestion attack, in which an adversary can flood the network by sending a large number of rout requests. Causing high levels of congestion which in turn disrupts routing. The final class of attack techniques is known as application or host based attacks. Which exploit vulnerabilities in the operating and application code on the target host. This class of attack can exploit certain [Algorithms](../../Skills/Software%20Development/Algorithms.md), memory structures, implementation specifics and so on. Each of these attacks is typically system and version specific, one of the key application level attacks is a HTTP flooding to create a denial of service. Similar to ICMP, the HTTP flooding attack sends a large number of HTTP messages to a webserver typically in a way that resources are held open by the request, and causes to consume all its connections. Many other applications are also vulnerable to attack, and I'll cover FTP later in the course. SIP services are increasingly becoming a key target, as internet voice becomes a major carrier for businesses. There are a number of techniques that can be used to protect against denial of service attacks. These are often ineffective due to a lack of testing prior to the incident and either fail when used
>
> **[7:50](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=470)** or are not used because of the risk of failure. They can be implemented as an in-house capability or used in the form of DoS mitigation as a service. Mitigation typically involves diagnosing an attack and discarding packets that are identified as part of the attack. Okay that's an overall look at the topic of denial of service, so now let's get into the detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3), [Phishing](../../Skills/Software%20Development/Phishing.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Env Vars:** icmp (5), udp (3), arp (3), dns (3), http (3)
> **Definitions:** is a  (4), known as (4)
> **Analogies:** such as (1), similar to (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [Using Python to test denial of service](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=1)** - [Instructor] Torshammer is a denial of service testing tool written in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). It's a little old now and it doesn't scale to quite the level of contemporary distributed denial of service attacks. But it's useful to take a look at how a denial of service tool is written. Now that this tool may cause a virus alert when you extract the files. [Microsoft Defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md) will report it as a Python Dakkatoni tool with potentially unwanted behavior. I've extracted the main Torshammer Python file so let's take a look at it. At line four we have a description of the tool. It's a slow denial of service attack which focuses on using up target resources. It's got the ability to run as a hidden attack through the anonymizing Tor network and has been tested against various Apache Servers to determine the scale of packet generation necessary to cause a denial of service. At line 35, we can see that we have a number of different user agents to choose from which it will use in constructing its HTTP packets. At line 179 we can see the entry point a little bit of boasting before calling the main function and getting down to work. Let's go back up to line 117, where we can see the help for using Torshammer. It requires a target, the number of threats to use for generating messages, the port to use with HTTP port 80 as the default and whether Tor is being used. At line 126 we have the main line code.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=98)** And at lines 136 through to 162, we can see the argument defaults being set and displayed back. The code which actions the denial of services. It's at lines 164 to 177. The first section of code creates an instance of HTTP post for each thread. And the next section of code loops waiting for all threats to terminate or for a keyboard interrupt. Let's look at the HTTP post-class at line 58. It has three methods in it. Send HTTP post and run. The class in it function, initializes the thread and sets the class values from the command line arguments. The run function at line 90 is called after initialization and uses the self running checks to make sure the program hasn't been terminated by the user. At line 94 the function checks whether if Tor is being used and if so connects by the proxy at port 90, 50 it then connects to the target. Following this at line 108 it calls the HTTP post function. The post function at line 67 starts by sending the first part of a 10,000 byte long HTTP post message using a random user agent. It then sends randomly chosen combinations of letters and digits to complete the post sending them with a time delay in between each pair.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=193)** It then closes and terminates. There's not a great deal to Torshammer but it does provide an insight into the relative ease with which tools such as this can be written.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Microsoft Defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md) (1)
> **Env Vars:** http (7)
> **CLI Commands:** python (3), apache (1), make (1)
> **Ports:** port 80 (1), port 90 (1)
> **Definitions:** is a  (1), is called (1)
> **Tools:** command line (1)
> **Analogies:** such as (1)
> **Prerequisites:** initialization (1)


### 2. Infrastructure Denial of Service

[↑ Back to Table of Contents](#table-of-contents)

#### [TCP SYN flooding using hping3](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=0)** - [Instructor] The most common technique used in denial of service attacks is the TCP SYN flood. We can test resilience to flooding by using the hping3 tool which comes in [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md). This is very simple to use. The TCP handshake takes a three-phase connection of SYN, SYN-ACK, and ACK packets. When the SYN packet arrives, a buffer is allocated to provide state information for the session. The TCP SYN flood happens when this three-packet handshake doesn't complete properly. I'll open a terminal window and take a look at hping3. As we can see, hping3 is a multi-purpose network packet tool with a wide variety of uses, and it's extremely useful for testing and supporting systems. The count option, specified by -C or --count, determines how many packets will be sent. If this is omitted, packets will be sent until the tool is terminated with Ctrl+C. An important option for testing denial of service is the interval, specified by -I, which determines how fast the packets are sent to the target. The faster the packets are sent, the sooner resources become consumed. However, too fast, and there's a risk of countermeasures being deployed. Hping3 has six modes, the default being TCP mode. It can also operate using the ICMP and UDP protocols and running scan and listen mode. Each mode has its own set of options that determine exactly how it operates.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=93)** I won't go into all the options in detail, but if you want to get more familiar with the tool, you may find it useful to download the hping3 cheat sheet from the Packet Storm site. Okay, let's get into hping3. I'll do a straightforward ICMP ping to my [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) system on 192.168.1.8 using hping3. I'll use the -1 option for an ICMP packet. I'll run this fast and do five packets. Okay, we can see the responses. The UDP TCP set of options are for a wide range of packets to be generated. To run a TCP SYN attack, I'll issue the command hping3 using the default TCP mode with the flag -S to indicate that a SYN packet is to be generated,
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=142)** - p 445 to specify the destination port is 445, and I'll use the --flood option to specify a high omission rate to enable flooding. Each packet in this attack will look like a standard connection request to the target and it will send back a SYN-ACK packet. However, hping3 does not send back an ACK packet, and so it doesn't complete the handshake. I'm running the performance monitor in my Windows 10 system and we can see it's idling along. Let's run the TCP SYN attack. Here we go. Back in [Windows](../../Glossary/Service/Windows.md), we can see the CPU utilization spiked up and is now continuously running round about 45%. This is a significant workload. Let's run that again, now with the data size increased to 1200 bytes. We can see that the additional data size has increased the CPU utilization. I'm using a standard computer network setup, but can certainly stress the targets. Using a powerful omitter or multiple omitters and a good source bandwidth, the TCP SYN attack will result in serious response problems for the target system. We can see that the additional data size has increased the CPU utilization, which is spiking up to about 60%. I'm using a standard computer and network setup, but can certainly stress the target.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=235)** Using a powerful omitter or multiple omitters and a good source bandwidth, the TCP SYN attack will result in serious response problems for the target system. I'll stop this attack now. Hping3 is a useful tool to test the target system's resilience to the TCP SYN attack. A variation of the TCP SYN attack is the [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) denial attack, which uses the TCP SYN attack on an open port, with the source and destination IP addresses and ports the same. When it was first discovered, this caused a vulnerable target to lock up continuously trying to make connections to itself. I'll send this attack to my Windows 10 target.
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=281)** In this case, when the flood starts, Windows recognizes it as a land attack and handles it without any significant impact. Many operating systems addressed this issue some time ago, but it occasionally reappears as it did when Windows 2003 was released.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (3), [Windows](../../Glossary/Service/Windows.md) (3), [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (1), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (1)
> **Env Vars:** syn (14), tcp (13), ack (4), icmp (3), cpu (3)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), make (1)
> **Prerequisites:** setup (2)
> **Speakers:** - [instructor] (1), - p (1)
> **Versions:** 192.168.1 (1)
> **Tools:** terminal (1)

#### [Using Hyena to run a reflection attack](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=1)** - [Instructor] A reflection attack takes place when an attacker sends packets to an intermediate system, and that system responds not back to the attacker but to the target. This is usually achieved by spoofing the source IP address to be that of the target. When the intermediate system receives the packet, it looks to all intents and purposes as if it was a legitimate request from the target. Reflection attacks were of technical interest but become particularly significant when combined with amplification. This enables an adversary to leverage infrastructures already deployed on the internet, to deliver a crippling flood of data onto the target without crippling his or her own network. Before we get into looking at reflection attacks, it's useful to do a quick review of how packets move around local and wide area networks. Four addresses are used for this. The source and destination MAC address, which is shown as six bits separated by colons. And the source and destination IP address shown as four numbers separated by dots. In order to send the packets, the sending host will use either the MAC address provided or will obtain a MAC address by resolution through the out protocol. I can see this in action on my network, if I go into the command shell and issue the request ARP-a. ARP will provide the addresses of all the hosts it knows about from its tables. These tables are built up dynamically and maintained as part of the underlying network activity. They're vulnerable to attack and we'll cover these attacks later in the course.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=96)** If the IP address is in the local network, it will be routed using the MAC address in the ethernet frame. If it isn't in the local network, the gateway MAC address will be used to route the packet to the gateway. The gateway will determine from its destination IP address which interfaces to go out on, repackage it and send it on. With its source MAC address being that of the routers interface. As we use tools to manipulate packets on the local network, some will manage the MAC addresses implicitly and some will require us to specify MAC addresses. We can run a reflection attack using a tool called Hyenae. This can be downloaded from the SourceForge site shown here. I've already downloaded and installed it, so let's go run it. For this demonstration, I'll use [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) to source the attack, use my [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) system as the reflector, and I'll target my Kali system. Hyenae comes as a command line tool or we can run it through the graphical interface. I'll use the graphical front end, but we can also see the equivalent command line syntax at the bottom of the screen. At the top left of the Hyenae screen, we can select the operational mode. The first drop-down box offers a choice of running the attack from the local machine, from a remote daemon or from multiple remote daemons. This latter mode connects two agents on multiple remote computers to enable a distributed denial-of-service. I'll run with just the local machine.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=191)** We also need to select the interface, I only have one, so I'll leave that as it is. Below that in the network protocol panel, I'll keep IPV4, but I'll select the ICMP Echo packet type. I'll change the top send parameter, the number of packets, to a fixed number of five for this demonstration. (mouse clicks) I'll leave the remaining send parameters as they are. For the ICMP Echo packet type, we have to specify a source pattern, a destination pattern and the time to live in the panel at the top right. The address pattern is shown as % - %, where percent is a wild card which Hyenae will randomly generate. The part of the address before the dash is the MAC address and the part after the dash is the IP address. It's important to be careful when setting up these fields because it's quite easy to start issuing thousands of attack packets out onto the internet if we use random IP addresses. I'll be running a reflection attack on my Kali system, which is currently on IP address 10.0.2.12. I'll spoof the source address pattern to %-10.0.2.12. I'll use my Ubuntu system as the reflector, and it's has a MAC address of O8:00:27:A3:1D:D0,
>
> **[4:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=284)** and then IP address of 10.0.2.9. I'll leave the TTL and the packet payload as default. [Wireshark](../../Skills/Cybersecurity/Wireshark.md) is up and running on Kali, so we'll be able to check what packets arrive there. So let's end this attack on its way. (mouse clicks) If I look at the Wireshark displaying Kali, I can see that the Ubuntu responses to the five packets we sent, have been successfully reflected by the Ubuntu system, and have arrived at Kali. Of course, a malicious attack would send much more traffic from many more sources, and if possible with massive amplification. We'll look at reflection amplification attacks a little later in the course. An older denial-of-service technique, which uses reflection was the ICMP Smurf flooding attack. It used reflection with ICMP packets sending a large number of requests to the reflector. Which sends replies to the target just as we've done. However, the unique twist with Smurf is that it targets the broadcast address of a subnet as its reflector. Thereby, amplifying the reflection by the number of responding hosts on the subnet. A similar attack, the Fraggle attack, uses UDP packets targeted at port seven which is Echo and 19 Chargen, which will also respond. The key to the Smurf attack is therefore, finding a subnet which responds to broadcast ICMP requests. This is difficult,
>
> **[6:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=376)** as most systems are now logged out by default and don't respond specifically to defeat a broadcast storm. Of course, a criminal syndicate, can always stand up a reflections subnets which responds to a broadcast. But it's sufficient effort that the cyber criminals have moved on from using broadcast addresses to other form of amplification.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (4), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (2), [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1)
> **Env Vars:** mac (10), icmp (5), arp (2), ipv4 (1), ttl (1)
> **Versions:** 10.0.2 (3)
> **UI Navigation:** select the (3)
> **Ports:** :00 (1), :27 (1)
> **Cross-References:** later in (2)
> **Tools:** command line (2)
> **CLI Commands:** go run (1)

#### [UDP flooding with LOIC](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=0)** - [Instructor] Let's take a look at the low orbit ion canon, or LOIC. LOIC is used to generate a massive amount of network traffic in order to consume bandwidth, and exhaust network or application resources. Such a high rate of traffic results in performance degradation, and potentially a loss of service. A user armed with LOIC can perform denial of service against a target site, by flooding its server with illegitimate TCP, UDP, or HTTP packets. On its own, one computer running LOIC can't generate enough TCP, UDP at once to overwhelm the average server. It takes thousands of computers, all targeting a single server, to have any real impact. A distributor denial of service by coordinating many individual attacks. Consequently, LOIC has become notorious due to some highly publicized attacks against Sony, PayPal, MasterCard, and Visa. It was at one stage the weapon of choice for the hacker group, Anonymous. LOIC is now a legitimate testing tool, widely used by testers and network administrators. And, as such, it makes no attempt to spoof its IP address. As a consequence, there have been a number of arrests for using it maliciously. Being able to demonstrate resilience against this tool is important, as this is still a tool that can be used in anger. You can download this tool from the Sourceforge page. This comes as a zip file, inside which is the executable. Note that the tool is sometimes flagged as a malicious program.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=92)** This is usually a false alarm, triggered by the tool itself. I've got this loaded already on my [Windows](../../Glossary/Service/Windows.md) 7 system, so let's start it. LOIC has a very simple interface. To use it, we'll enter the IP address of my external [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) system. And press the associated Lock On button. I'll also select UDP from the method drop down box in the attack options panel. This will do a UDP flood. I can leave all the other options as default. I'm using VNC to remotely access the Windows 10 system. I've already got its performance monitor up, and we can use this to monitor the load on the target. Okay, back at LOIC, I can now start the attack using the amusingly called Imma Chargin Mah Lazer button. We can see the number of packets being generated in the bottom panel. Let's go and look at the Window 10 system. As we can see, the VNC access to the Windows 10 system has been compromised, and we can't see what's happening on the server. This is due to the bandwidth being consumed by the LOIC's packet stream. Okay, I'll stop the flooding now. Okay, VNC access has returned and we can see the performance monitor on the move again. We can see from the attacks, we were causing the CPU to increase to about 15% utilization. But the real problem was the network bandwidth, which compromised our access. Even a script kitty can launch a noticeable attack from their home computer. In a really malicious and professional attack, however,
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=184)** a victim could expect thousand of attack sources to be operating concurrently. And with these attacks delivering upward of 50 gigabytes per second in traffic, the victim has a real problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (3), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** loic (9), udp (4), vnc (3), tcp (2), http (1)
> **Exercise Files:** zip file (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [ARP poisoning with Ettercap](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=1)** - [Instructor] Ettercap is a well-known tool which can sniff live connections, operators, a man in the middle and filter content on the fly. It supports active and passive protocols manipulation and includes many features for network and host analysis. The particular feature we'll look at in this video is its ability to create a denial of service. An Ettercap attack takes place from a host on the local network. Either one that's attached itself maliciously or from a host that has been compromised. Ettercap is provided entirely as a command line tool, and also via graphical interface, which is listed in the sniffing and spoofing set of applications. Let's open a terminal window and I'll enter Ettercap minus H and look at the help information. One of the useful commands is Ettercap minus P, with the list option, which lists all the plugins. These are preset scripts which will carry out a specific function. Ettercap minus P list. We can see the plugin modules and in particular we can see various denial of service modules. The first is the DOS attack, a denial of service attack which works by scanning the target to find open ports, then starts flooding them with SYN packets using an unused IP address in the sub-net as the source IP. Then it uses fake art replies to intercept packets to this unused IP address and complete the connection, flooding the target with active connections.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=96)** The Fraggle attack can be used to send a large amount of UDP echo and charge-in traffic to all hosts on the subnet, using the target as the source address and all replies then go back to the target. This is a standard UDP flow. The isolate attack will isolate a host from the network by poisoning the victims ARP cache with its own MAC address. Ettercap provides a Smurf attack plugin, which sends huge numbers of ICMP packets with the targets as the source address to a set of hosts. This causes all the hosts to reply to the ICNP request, causing significant traffic at the targets. We'll run a couple of these. Let's first of all run a DOS attack. I'm in my Window system and have a browser open to the Metasploitable web server on 10.0.2.8. I'll refresh it. I'll now start the attack by entering pseudo Ettercap minus TQP DOS attack.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=165)** The T option specifies we're using the text only interface and the Q option is to run super quietly. I'll put in the target address 10.0.2.5, and an unused IP address, 10.0.2.199. Okay, the attack's started. Let's go back to [Windows](../../Glossary/Service/Windows.md). Okay. Let's now try refreshing the page. The browser's having some trouble doing that. We're experiencing a minor disruption in our access to Metasploitable. I'll quit this attack now.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=217)** Now let's poison the Target's ARP cache. I've got a browser open on [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) and can access Metasploitable. I'll use the Ettercap graphical interface for this. Let's start it by simply entering pseudo Ettercap minus G.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=238)** Okay. We've got the graphical interface up. I'll switch off sniffing at startup and then press the tick. I select the menu icon on the right, hosts, scan for hosts. I'll then select hosts, hosts' list. and highlight 10.0.2.9 and press add to target one. We can see the host has been added and can confirm this by selecting targets, current targets. On the MTM menu, I'll select ARP poisoning and OK. And we can see that 10.0.2.9 has been poisoned. Back in Ubuntu, I'll attempt to refresh my Metasploitable page. And it fails. The cache has been poisoned and connectivity has been lost. Back on my Kali system, I can access the Metasploitable server, the server's fine, but Ubuntu has been isolated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (3), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** dos (3), arp (3), udp (2), syn (1), mac (1)
> **Versions:** 10.0.2 (5)
> **Cross-References:** go back to (2)
> **Tools:** command line (1), terminal (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **UI Navigation:** select the (1)

#### [Using NTP to amplify attacks](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=0)** - [Narrator] A reflection attack takes place when we send a packet to a server, and have it reply, not to us, but to the target. We can achieve this easily by spoofing the source address in the packet. An amplification attack takes place when we send a packet to a server and get a significantly larger packet sent back to the target in reply. Both reflection and amplification attacks typically involve sending packets to many thousands of servers in a distributed denial-of-service attack. Let's have a look at the basics of an NTP attack. I'll start by looking at the [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) server, which I have on the virtual network running the NTP service. I can check what services are running in Ubuntu by entering the command service --status-all more.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=52)** We can see the NTP server is shown with a plus. It's running. Okay, Let's see how it's configured. This shows me that the service is running and it's connected to four authoritative time servers. Okay, we have a service here. Before I go, I'll open up the servers configuration, which is in /etc/[ntp.com](https://ntp.com). I'll just go down a ways and we can see the restrictions on access. Many NTP services, such as this one, have included restrictions to ensure, amongst other things, that they can't be used for reflection attacks. Because I'm going to demonstrate the attack across two networks, I'll comment out the restrictions and restart the server.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=97)** Okay, just before we go, I'll check the IP address. And we can see that it's 10.0.2.9. Back in Kali, I'll open a terminal window, and I'll ping the NTP server to make sure I can see it. Okay, we're able to see the server. We can use [Nmap](../../Glossary/Tool/Nmap.md) to check the services there. We can see the UDP port, 123 is open running NTP. And because the time server is running on my local network, I can also see the MAC address of the server. I'll next send a standard request for the time to the server by using one of Nmap's scripts. This provides a response with the time stamp. The request used in the amplification attack is called the monlist, which sends back the list of servers that the NTP services used and this can be substantially bigger. I'll set up [Wireshark](../../Skills/Cybersecurity/Wireshark.md) from the sniffing menu, and put in a filter for capturing everything to and from the NTP server.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=177)** I'll now send the NTP monlist command. Okay, we got the response back, and I'll stop the packet capture now. We can see that the request went across. There is a 44-byte header and a 48-byte NTP packet, and the response is a 44-byte header and a 440-byte NTP packet. Close to 10 times the amplification. In the wild, monlists can deliver up to 50 times the amplification. The last thing to do is spoof the source address. Vpnguy has a [GitHub](../../Skills/Software%20Development/GitHub.md) depository which demonstrates this using [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and I've created a short version of this to demonstrate. Let's look at the code. I'll go to my NTP DoS directory and I'll open up an editor to look at the NTP DoS code. At the top, we see the libraries to include followed by the main function deny, which constricts and sends the NTP packets. This is a multi-threaded script. So the first thing we need to do is establish some global variables. Then we pick the next NTP server to use from the list and increment the server index. Then we construct the packet's IP header, which has the target specified as the source address. The UDP header which has port 123 for the NTP server and the NTP payload. Then we send the packet and we'll continue in a loop until we terminate it. The next few lines are the start of the program
>
> **[4:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=274)** and copy in the command line arguments. For clarity, I've left out the original checking code. Note we constrict the NTP data payload as an eight-byte packet starting with hexadecimal 17. The final piece of code is the main loop which spawns the threads for each NTP server in the list. As you can see, the NTP DoS program is very simple and uses basic networking scripted commands. Its power comes from having access to a large number of unrestricted NTP servers and the amplification effect of the monlist command. Okay, let's see it in action. I set up a file with my one NTP server in it. Okay, now I'll run the python script. I've set Wireshark up on the [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) server and filtered it only to display the packets that are coming to the UDP port 48947. Let's start it. We can see the NTP response packets arriving at the target window server. These are coming in slowly and with modest amplification but with a large enough list of NTP servers this can be very effective. As it was in the global NTP attack that took place in February 2014, which used about 4,000 servers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (2), [Nmap](../../Glossary/Tool/Nmap.md) (2), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** ntp (25), udp (3), mac (1)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** python (2), make (1)
> **Tools:** terminal (1), github (1), command line (1)
> **Ports:** port 123 (1), port 48947 (1)
> **Prerequisites:** set up (2)
> **URLs:** [ntp.com](https://ntp.com) (1)

#### [NEW: Amplification using memcached](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-amplification-using-memcached?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-amplification-using-memcached?u=76281980&t=0)** - NTP isn't the only protocol we can use to amplify a denial of service. There are many other amplification protocols which can be used. And one which deserves specific mention is the protocol used in the Memcached software. Memcached is a third party tool used to cache objects in a systems memory. And then retrieve those objects quickly. Its used to speed up dynamic web applications and its management features can be accessed using TCP or UDP on port 11211 Let's have a look at an example of a Memcached exchange using [Netcat](../../Glossary/Tool/Netcat.md) I'll use Netcat to make a simple connection to port 11211 on a Memcached server and I'll issue the stats command We get a response from the server of about 2000 characters Which provides a respectable amplification factor of about 400 Of course using a TCP connection is quite safe and can't be used to support a denial of service attack But if the command were to be sent via UDP With no session set up and with a spoofed source address then this can be used to create a denial of service We can check whether a UDP Memcached service exists by sending a constructed UDP package with Netcat I'll use the echo command and pipe it to Netcat using the stats command once again
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-amplification-using-memcached?u=76281980&t=96)** This query returns only 840 bites So the amplification factor is lower. But an attacker could use Memcached to store a larger data element and then recover it as part of the denial of service A memcached amplification attack is exactly what happened to [GitHub](../../Skills/Software%20Development/GitHub.md) on February the 28th 2018 When it was hit with a massive distributor denial of service attack. The attack achieved 1.35 terabits per second. Fortunately, GitHub was able to call on a DDOS scrubbing service to get rid of the Memcached data and within ten minutes the attack had ceased. Some attacks have combined the use of denials of service and ransom notes With the ransom note being sent in the denial of service packet Memcached is one of the amplification methods which has been used is such extortion attempts With ransom demands of around $15,000 Memcached is a continuing threat whilst servers have it available on UDP and tools such as Memcached DDOS exploit which ironically is on GitHub, make it easy for attackers to deploy it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Netcat](../../Glossary/Tool/Netcat.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (3)
> **Env Vars:** udp (5), tcp (2), ddos (2), ntp (1)
> **Tools:** github (3)
> **CLI Commands:** make (2)
> **Ports:** port 11211 (2)
> **Definitions:** is a  (2)
> **Versions:** 1.35 (1)
> **Analogies:** such as (1)

#### [NEW: When is a DDoS not a DDoS?](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=0)** - [Narrator] There have been a number of infamous denial of service attacks. And the predictions are for many more to come. However, when a service goes down due to being flooded by incoming traffic, it isn't necessarily a cyber attack. In 2015, the FCC passed what became known as the net neutrality legislation, which forced internet service providers to enable access to all content and applications, regardless of the source, and without favoring or blocking particular [products](../../Skills/Software%20Development/Microsoft%20Products.md) or websites. In 2018, the FCC decided to repeal the legislation, and to challenge individual states that passed their own net neutrality regulations. The issue of net neutrality is one which has triggered quite passionate responses. Viewers of the Last Week Tonight show were encouraged to file comments through the FCC's website, asking the FCC to preserve its net neutrality rules. The next day, the FCC's website was unavailable. The FCC chairman Ajit Pai, was quick to denounce the crash, as a distributed denial of service attack, citing the vast amount of targeted traffic as the cause of the system's downtime. I claim to have evidence that it was a deliberate attack. However, the FCC's [office](../../Skills/Web%20Development/Microsoft%20Office.md) of the inspector general carried out an investigation, and determined that the claims were misleading.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=95)** The investigation concluded that at best, the published reports by the FCC were the results of a rash judgment and a failure to conduct adequate analysis to identify the true cause of the disruption to system availability. Chairman Pai responded to the report by placing the blame on the former Chief Information Officer, David Bray. FCC Commissioner Jessica Rosenworcel pointed to the FCC net neutrality decision as the root cause of the shutdown, stating that what happened was obvious. Millions of Americans overwhelmed the online system, because they wanted to let the FCC know how distressed they were to see the FCC take away their internet rights. Not all system outages are Denial of Service attacks. Sometimes they're just due to poorly designed systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Env Vars:** fcc (12)
> **Definitions:** known as (1)
> **Speakers:** - [narrator] (1)


### 3. Wireless Denial of Service

[↑ Back to Table of Contents](#table-of-contents)

#### [Deauthenticating a wireless host](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=0)** - [Instructor] Home users and many business users are connected to their networks via wireless access point. This form of access is very easy to attack to cause a temporary denial of service. I'll open up a terminal window and use Airmon to check my wireless cards interface. I can see that it's wlan0. I'll now put the wireless card into monitoring mode so that it can detect the networks and hosts being used in the local area. This shows that the monitoring device is now enabled as wlan0mon. I'll start it listening to the wireless traffic and see what's active. This display shows me the networks at the top and the clients at the bottom. In the top part the BSSID is the [Hardware](../../Topics/Hardware.md) address of the access point. And the service set identification or ESSID is an alphanumeric key up to 32 characters long which identifies the wireless [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md). In the bottom part the station is the MAC address of the client. I've got a remote connection open to my [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) system and I'm running the performance monitor to generate some traffic across the air. I'll open a command shell and look at the detailed network interface information.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=87)** This shows me the physical address of the wireless card. I can see that it's 94-A1-A2-22-B1-C3. Let's go back to Kali. I can see that my network TPG-83NJ is running on channel eight. So I'll set the wireless card to that channel also. I can see the Windows 10 system with its station starting with 94, running in the bottom section. I'll now run Aireplay to de-authenticate this device which will disconnect it from the network. To do this I'll specify the access point BSSID with the -a option and the station physical address using the -c option. I'll use the -0 option for de-authentication attack with a hundred packet streams to the target. Okay we can see the streams are being sent. When we check the remote access we can see that the Windows 10 system is no longer responding. If the host is configured to automatically recover a lost network connection the disruption may be minor. However, where the host requires manual reconnection it will be off the air until someone notices and recovers it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (3), [Hardware](../../Topics/Hardware.md) (1), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (1)
> **Env Vars:** bssid (2), essid (1), mac (1), tpg (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. Application Denial of Service

[↑ Back to Table of Contents](#table-of-contents)

#### [Flooding HTTP using GoldenEye](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=0)** - [Prompter] Websites are often the target of denial of service attacks. There are many tools accessed for attacking them. One such tool is Golden Eye. It works by creating a lot of open sockets in the target system. Eventually consuming all available sockets. Golden Eye is an enhanced variant of the original Hulk tool. Golden Eye doesn't come with Carly, but we can download it easily enough. I'm in Carly and I'm at the Golden Eye [GitHub](../../Skills/Software%20Development/GitHub.md) page. And on the right, we can see the button to download it. Let's do that. I'll tell IceWeasel to save it. We now have the Golden Eye zip file downloaded. So I'll click on the blue down arrow to see all downloads. And I'll double click to open it. I'll select extract. Other location. Computer. User. Share. This is my Carly tools directory. I'll now press extract. And the extraction completes. And it extracts into the Golden Eye master directory. I'll select show files. And navigate down to Golden Eye master. Now just right click. And rename this to Golden Eye. Okay, we're now set. I've setup [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md), with the performance money to shown in one window. And I've opened a command window,
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=94)** so that we can use the next up command, when we're ready to go. I'll go into [Windows](../../Glossary/Service/Windows.md) 7 and connect to the Windows web 10 server. Okay, the service is running just fine. I've got a terminal window open in Carly. First, I'll navigate to the Golden Eye folder. I can check the options in Golden Eye, by entering goldeneye.py -h. The two action options are -w and -s, the number of concurrent workers, and the number of concurrent sockets. I'll take the defaults for the options. Before starting, I'll put a rule in the Carly firewall, to drop reset packets. I do this by typing: iptables -A OUTPUT -p TCP --tcp-flags
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=157)** rst rst -d 192.168.1.8 -j DROP.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=171)** Okay, I can now launch the attack, by entering: goldeneye.py [http://192.168.1.8](http://192.168.1.8).
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=183)** I'll poop into Windows 7, and I'll refresh the website. And we can see the service is unavailable. We cam see spikes of CPU activity happening, as the Golden Eye attack takes its toll. I can enter net stat, and see all the connections. That's how we launch a web server denial of service attacks. When you find a vulnerable website, and you are testing, you should recommend that the number of sessions from a single IP address be limited where the service will be protected with a web application fire wall.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1)
> **Env Vars:** output (1), tcp (1), drop (1), cpu (1)
> **File Paths:** goldeneye.py (2)
> **Versions:** 192.168.1 (2)
> **Tools:** github (1), terminal (1)
> **UI Navigation:** click on (1), navigate to (1)
> **CLI Commands:** find (1)
> **URLs:** [http://192.168.1.8](http://192.168.1.8) (1)

#### [Testing webapps using OWASP SwitchBlade](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=1)** - [Instructor] [OWASP](../../Skills/Cybersecurity/OWASP.md), the open [Web Application Security](../../Skills/Cybersecurity/Web%20Application%20Security.md) project is an initiative which identifies ranks and provides material to support testing of web vulnerabilities. It's free to become part of the OWASP community and its material is free to use. The OWASP top 10 threats is published annually and used as a reference for testing by many pentesters. OWASP also provide some very useful testing tools such as the offensive web testing framework or OWTF and defensive capabilities such as app sensor. Let's take a look at the OWASP's switchblade tool. This is used to test how susceptible a website is to denial of service attacks. The tool was originally written as an education tool for the OWASP community and has been made available into the creative commons license. It runs as a [Windows](../../Glossary/Service/Windows.md) application and can be downloaded as a ready to run zip file. I've already downloaded and extracted switchblade into the switchblade subdirectory. And we can start it by double-clicking gui.exe.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=73)** Switchblade has a fairly simple interface. The dropdown box provides three types of attack that can be run. Slow headers, slow POST and SSL renegotiation. I'll run a slow POST attack. Let's change the URL to our Metasploitable system on HTTP 10.0.2.8.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=99)** I don't need to use a proxy. The general parameters are used to vary the amount of resources being focused on the attack and could be tuned according to your testing platform. I'll change the rate to a thousand and this will create connections as fast as possible. Let's look at the website on Metasploitable through our browser. We can see the Metasploitable page, and this is running fine. Now let's launch the switchblade attack.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=137)** I'll press the button called run attack. We can see the connections have been made and the attack is underway. Let's see what's happening on Metasploitable. I'll refresh the webpage a few times and see what happens. Okay, we're now waiting. The web server is been flooded. If we look at switchblade, we can see with my 298 connections and the remaining ones arid when the server became overloaded. I can check on my Metasploitable server and use the netstat command to check the current connections. We can see there's many connections open. Okay, I'll cancel the attack and wait for the server to calm down. I'll refresh the webpage and we can see it's working again. That's an example of using switchblade to carry out application level attacks. The slow POST is very similar to slow headers using the same feature of holding the connection open while the HTTP request is sent very slowly. The SSL renegotiation is also similar but attacks the SSL negotiation handshake.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (6), [Web Application Security](../../Skills/Cybersecurity/Web%20Application%20Security.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** owasp (6), post (3), ssl (3), http (2), owtf (1)
> **API Endpoints:** post  (3)
> **Analogies:** such as (2), similar to (1)
> **Versions:** 10.0.2 (1)
> **UI Navigation:** dropdown (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is an  (1)

#### [Understanding BlackEnergy](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=0)** - [Instructor] There's been a lot of noise about an incident known as BlackEnergy as a result of attacks on the Ukraine critical infrastructure in 2014 reportedly by Russia. The term BlackEnergy variously refers to a threat actor, a botnet and a piece of malware. Let's have a look at what this really is. A variety of botnets can be used to conduct DDoS attacks, and BlackEnergy is one of the most popular with over 4,000 deployments having been detected. BlackEnergy started out as a web-based distributed denial of service botnet. But in 2008, its authors made significant modifications to the original version, and BlackEnergy 2 is now used for a much wider range of attacks. BlackEnergy is a sophisticated botnet, which consists of a command-and-control server and an implant. It has a number of interesting features: It actively hides from anti-malware [products](../../Skills/Software%20Development/Microsoft%20Products.md) using encryption; it operates by injecting code into system processes; and it can target more than one IP address on a host name, which makes it especially useful for multi-homed servers. Once the implant is launched on the target computer, it allocates virtual memory, copies it decryptor code to the memory and then passes control to it. It creates a decryptor driver with a random name and a DDoS extension in System32\Drivers. A service for the driver, also randomly named, is then created and started. The decryptor holds a 16-byte pre key, and this is used to create another key, which is used to decrypt the injection archive using RC4.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=96)** The malicious code dynamic-link library is then prepared for injection by remapping addresses, and the driver locates svchost.exe and allocates memory in its address space and injects the malicious code. The DLL, which is injected into svchost.exe, is the main controlling factor in launching a DDoS attack from an infected computer. The DLL contains two addresses for its command-and-control server to ensure it can communicate if one server is down. It sends an HTTP request to the command-and-control server, which responds with an encrypted XML configuration file. This contains instructions on the targets for the DDoS and the attack modules to use. If the implant doesn't have a module or a newer version is available, it will download it and copy it to the server's host memory space. The attack can then commence. Attack modules will be regularly downloaded to the implant by the BlackEnergy command-and-control server and stored in encrypted form on the host computer's hard drive as sdi.sys in System32\drivers. The implant also uses a system driver, syssrv.sys, to hide the implant's processes and files. BlackEnergy can run a number of DDoS attacks with the following commands: icmp, an ICMP ping flood; syn, a TCP SYN flood; udp, a UDP traffic flood; an HTTP GET request flooder;
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=190)** data, a binary packet flooder; and a DNS request flooder. In addition to the plugins, BlackEnergy also has a set of commands: rexec, which is used to download and execute a remote file; lexec, which executes a local file on the infected computer; http to send an HTTP request; upd, or update, which updates the implant; setfreq to set the frequency for contacting the command-and-control server; stop to stop attack activity; wait, a timed wait before checking again; and die to terminate execution of the implant. BlackEnergy, like many botnets, comes as a botnet construction kit, and a command-and-control server is built for a specific campaign. It's not readily available from the internet but comes from Russian-language hacker forums and costs around $40. The command-and-control server is built using [PHP](../../Skills/Software%20Development/PHP.md) and [MySQL](../../Skills/Software%20Development/MySQL.md), typically running on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), and has a simple PHP GUI interface. It maintains a table called opt, which contains the parameters of the DDoS attack, and the table called stat to track the size of the botnet. The builder runs an encryptor over the generated implant, thus making it invisible to anti-virus products. A BlackEnergy attack on Ukraine's power infrastructure was announced after the event by the Ukrainian government on December the 28th, 2015, and it was attributed by them
>
> **[4:42](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=282)** to the Russian special forces. The power outage had occurred in the Ivano-Frankvisk region on the 23rd of December, which suggests that the attack had been successful. In this event, the payload called KillDisk was used to destroy target systems. The attack was accompanied by a flood of telephone calls to the [Technical Support](../../Skills/Network%20and%20System%20Administration/Technical%20Support.md) numbers of the power companies. Researchers have designated the attackers as the Sandworm Crew. Malware samples obtained during the attack indicate that the same malware was used earlier in the year to target the Ukrainian media sector. The samples indicate discreet campaigns in June, July, October and December. This spate of attacks was not the first time the Sandworm group had targeted Ukraine. An earlier incident took place in 2014, just prior to the NATO summit in Wales, using spear [Phishing](../../Skills/Software%20Development/Phishing.md) and a malicious attachment purporting to be about Russian terrorists. The Ukrainian CERT also commented on media attacks, which took place in October. At least some of the targets were hit with a new version of BlackEnergy, designated BlackEnergy 3. Ukrainian media reported that the power outage was caused by malware disconnecting power stations from the grid. While BlackEnergy has evolved, the threat of denial of critical infrastructure services continues to be its primary focus, and all indications are that this is a continuing and evolving threat.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Technical Support](../../Skills/Network%20and%20System%20Administration/Technical%20Support.md) (1)
> **Env Vars:** http (3), dll (2), php (2), rc4 (1), xml (1)
> **CLI Commands:** php (2), mysql (1)
> **Definitions:** is a  (2), known as (1)
> **API Endpoints:** get  (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### [Killing the FTP service](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=1)** - [Instructor] Websites aren't the only targets for denial of service attacks. Other services, such as the File Transfer Protocol, FTP, are internet-facing, and so also at risk of being attacked. I'll use my [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) machine, it's IP address 10.0.2.15, as the target for this attack. I've installed a small FTP server, version 0.99. This is a very simple FTP server and it doesn't require any configuration. I'll press the start icon to activate the server. Okay, it's now listening for incoming connections. I've got a terminal window open in Kali, so let's connect to the FTP service using Telnet. Telnet 10.0.2.15, space 21. Okay. We can see that the FTP server displays the message, connecting, on its panel. Back in Kali, I'll now enter a malicious command, percent S, percent S. Okay, the FTP server panel has disappeared. The service has crashed. This is because it doesn't correctly handle the string percent percent S on input, resulting in an internal memory corruption. Okay, that's an example of a simple denial of service caused by an internal malfunction triggered from the incoming packet. This is a foreground application and it's pretty obvious that it's no longer running.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=93)** However, many server applications operate in the background and there may be no visible indication that they stopped working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1)
> **Env Vars:** ftp (6)
> **Versions:** 10.0.2 (2), version 0 (1)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [RangeAmp attacks on the CDN](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/rangeamp-attacks-on-the-cdn?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/rangeamp-attacks-on-the-cdn?u=76281980&t=1)** - [Instructor] Content delivery networks are critical to getting data from where it's stored to users that need it. A team of Chinese academics claimed to have found a new way of using HTTP to amplify web traffic and bring down content delivery networks. The attack exploits implementation flaws in the HTTP range request. There were two specific attacks identified, the RangeAmp Small Byte Range attack which uses a CDN server to amplify the attack on a target. The second is the RangeAmp Overlapping Byte Ranges attack. In this case, the attack travels through the CDN being amplified as it goes. The result can be the CDN servers crash or are unable to perform their delivery function. The amplification factor varies depending upon the file size of the targets, but ranges from over 1000 to close to 50,000 for the Small Byte Ranges attack and around 3000 for the Overlapping Byte Ranges attack. While many of the vendors affected have rolled out patches, the research does highlight the potential fragility of the global network.

> [!info]- Semantic Content
>
> **Env Vars:** cdn (3), http (2)
> **Speakers:** - [instructor] (1)

#### [Profiling Killnet](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=0)** - The Killnet Group is one of the many cyber criminal groups that have become involved in or are attempting to benefit from the Russia Ukraine conflict. Killnet was originally the name of an online tool that criminal subscribers could rent to conduct distributed denial of service attacks. As the crisis in Russia and Ukraine emerged, the people behind Killnet appeared as a pro-Russian cyber warfare group, also using the name Killnet. This blurring of tools and group names is not uncommon in the cyber criminal underground. The newly emerged Killnet group was originally led by a hacker with the handle Killmilk who was associated with the Killnet tool. Killmilk resigned as leader of the group in July, 2022 and it's now run by an individual known as Blackside with more serious credentials through his ransomware activities. Killnet now appears to have established loose ties with the Russian State Security Services. And notably has published posts on Telegram encouraging Putin to mount nuclear attacks on the West. In a somewhat grandiose gesture, the group declared cyber war on a number of countries, including Ukraine. Killnet has a number of signature attacks. The first is a dictionary based getting attack on the Secure Shell Service. With a history of targeting Minecraft and TeamSpeak servers. They use SYN flood attacks and send large numbers of GET POST messages in attempt to achieve service denial.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=96)** They use Script kiddie tools, such as MDDos and the low orbit ion cannon as well as various network stressor tools. Killnet's DDoS attacks are not particularly effective. At best lasting a few hours and generally doing little or no damage. However, Killnet is responsible for a number of high profile if low impact attacks, including a DDoS attack on the Romanian government websites from the 29th of April to the 1st of May, 2022. These were followed a few days later by attacks against the Moldovian government. Also, in May, the group attacked a number of websites in Italy. They were able to take down the Italian Senate's website for about an hour, but failed in their attempt to disrupt the Eurovision Song contest. The tactics changed later in 2022 with claims of an attack in which they were able to breach and exfiltrate information from Lockheed Martin. However, Lockheed Martin denied there was any breach. No evidence has been made public and in the end, this appears to be just fake news. In way of Postscript, Killnet appears to have reverted to its roots as a criminal enterprise. In January, 2023, Killnet was identified as being responsible for a minor denial of service attack on the public website of the University Medical Center of Groningen in the Netherlands. In February, 2023, Killnet and another cyber crime group
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=189)** called the Deanon Club partnered to form the Infinity team offering a range of hacking services and resources.

> [!info]- Semantic Content
>
> **API Endpoints:** get  (1), post  (1)
> **Env Vars:** syn (1), post (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - the (1)


### 5. SIP Service Attacks

[↑ Back to Table of Contents](#table-of-contents)

#### [Flooding a SIP server](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=0)** - [Instructor] Voice calls over the internet, often called voice over IP or VOIP use special phone sets or software to convert analog voice signals to data and then send it across the internet as data packets. To do this, the VOIP service uses what's known as a SIP proxy server. SIP is the session initiation protocol and is used to set up the data connection for a call and another protocol, the real time transfer protocol, RTP, is used for voice data exchange. SIP doesn't come pre-installed on standard operating system distributions. There are many managed service VOIP applications, such as Skype and Viber or we can download and install a local service. In this course, I'll use My VOIP App. This can be downloaded pre-configured for between 20 and 500 users. I've selected the 20 user version for my [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) system as the host. This is a simple download and installs seamlessly. I've already downloaded and installed my VOIP service and I've started the system. The main form provides a number of action buttons. I'll click the local users and we can see there are four users registered: 100, 101, 102, and 103. I've also installed the My VOIP App SIP phone on this system and It's running in the small panel beside the main form. We can see it has the username 101. If I press file, SIP account, I can see its basic setup details.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=96)** I've also installed a SIP phone on my [Windows](../../Glossary/Service/Windows.md) 7 system with the username 100. I can make a call to 101 and we can hear the hold music. I can answer that call. I can now have my conversation and then I can hang up. To establish a SIP session, there's a handshake process within the SIP protocol which needs to take place when a SIP proxy server receives an invite request. It starts by looking up the called number in its registry. Once found, it can then pass on the invite request. Both numbers then ring. If the called number answers, the acknowledgements are made and voice data is then carried on the data channel using the real time protocol. In doing this, the SIP proxy needs to maintain the request in its internal buffers in order to process the message. These messages will at least be kept until the last okay message is sent to terminate the call setup handshake. Also, the server normally keeps a copy of forwarded messages for further processing. This all takes resources and the proxy can become highly loaded if a large number of requests are received. I'm in Kali, and I'll open the applications menu and click on vulnerability analysis. This opens up four sub-menus. The bottom of which is VOIP tools. I'll select invite flood. This opens a terminal window and displays the invite flood help.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=189)** I'll start the attack by sending one million invite requests. Right, we can see the packets streaming out. Back in Windows 7, I'll make a call. There's no response. The call can't get through. And we've hung up. I'll try again. Again, I get a hang up. Okay, the flood has stopped.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=232)** I'll call again, and I can get through. We can see that the My VOIP App server is vulnerable to flooding. This is a common issue with SIP servers. In practice, the SIP server will sit behind a firewall and can't be directly accessed. Many modern firewalls are able to detect denial of service attacks by applying rate limiting when the attack reaches a certain level of connections or data throughput. These are normally quite effective. A new generation of denial of service attacks, called pulsing or wave attacks, were first reported by Asta Networks in 2001. This report was based on a six month period of analyzing backbone network traffic and discovering the presence of pulsing zombies. Instead of generating a constant flood of attack packets, these zombies continuously sent out short bursts of attack packets to evict him. In doing so, the delay in processing the packets meant that the queued load continued to increase. In 2008, a researcher at Canterbury University published a paper on launching a denial of service attack targeted at the asterisk SIP server. Using a pulsing flood technique, a DDoS prevention firewall was in line, and a standard denial of service attack at maximum flood rate was unsuccessful. However, the research then examined whether the denial of service could be run at a level which did not trigger the firewall but was sufficient to have an effect upon the SIP server. By increasing the packet rate to the point just prior
>
> **[5:25](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=325)** to the firewall triggering its defensive mechanisms, and then backing off, and then doing this again and again, over 90% of the packets could be injected inside the firewall. This proved to be higher than the SIP server could sustain and the denial of service attack was successful. Xiapu Luo from the Hong Kong Polytechnic University in Kalune has researched the issue of pulsing attacks with a view to detecting and defeating them with a technology called Vanguard. This technology uses the standard snort [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) system. Supported by a Vanguard module which analyzes network traffic and in particular, the rate change points. The laboratory results for this mechanism have been impressive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1), [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (1)
> **Env Vars:** sip (15), voip (8), rtp (1)
> **Prerequisites:** setup (2), set up (1), install (1)
> **CLI Commands:** make (2)
> **UI Navigation:** open the (1), click on (1)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **Analogies:** such as (1)


### 6. Ransomware

[↑ Back to Table of Contents](#table-of-contents)

#### [Explaining ransomware](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=0)** - (Narrator) One of the early uses of ransomware was in the AIDS information introductory diskette. Circulated to conference attendees in 1989 by Dr. Joseph Popp. After the diskette had been used to specify a number of times, the malware would start executing, and hide the directories, encrypt the files, and then demand payment of one hundred and eighty nine dollars to be sent to a PO box in Panama. Popp was caught and declared mentally unfit and agreed to donate the proceeds of his crime to AIDS research. There was little further development of ransomware, until around 2005. But since then, it has become a significant source of revenue for cyber criminals. It is now the prevalent form of exploitation vector in financial crime. It's easy to create a ransomware payload, and it's a popular way of monetizing a network of compromised computers. The basic concept used in ransomware is [Cryptography](../../Skills/Cybersecurity/Cryptography.md), the science of making an intelligible message into something that isn't understandable, but can, with special knowledge, be turned back into the original, intelligible form. The criminal uses a cyber attack to get access to a victim's files, and encrypts them. The files are then useless unless the victim pays the attacker for the key to recover them. With figures of about two hundred and fifty dollars being common, this price point is one which is affordable, provides a reliable outcome, and is much more convenient than trying to get any result by calling in law enforcement. Crylock is an example of a malware payload.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=96)** Usually delivered via the cutwail spambot, using the UPATrial ZeuS botnets. This typically enter a system by means of a [Phishing](../../Skills/Software%20Development/Phishing.md) attack. The original emergence of ransomware used symmetric cryptography to encrypt files and stored the key somewhere hidden on the target disc. When the ransom was paid, the criminal could then provide software or a service to recover the key and decrypt the files. This approach made it relatively easy for the antivirus companies to recover the key offline. This then lead the cyber criminals to evolve their methods. More advanced ransomware uses asymmetric cryptography. The payload activates and selects whatever files it can find on the local disc, and any shared drives accessible from the target computer, and encrypts them. While the file encryption still takes place using asymmetric algorithm and key, the malware calls to its commander control server for a public encryption key, and will use this to encrypt the symmetric key before it stored on disk. A ransom message is then sent to the victim. On paying the ransom, the victim is given a payment code which can be entered into the malware and verified before releasing the private asymmetric key to unlock the keys to the files. Ransomware continues to evolve. Some ransomware takes particular measures to protect the criminals by using the Tor system to hide itself when communicating with the victim. Tor is a network of computers used to carry messages which don't allow trace back, and enable its users to maintain anonymity in whatever they do.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=192)** Some new ransomware uses elliptic curve cryptography, showing that attackers are keeping up with advances in the security field as much as the defenders are, if not better. There are many different ransomware programs active currently, including Cryptolocker, Torrentlocker, Cryptowall, Petya, and Server. Ransomware is getting increasingly sophisticated and some can be downright creepy. Ransomware has proved to be lucrative for the cyber criminals and as a threat, it's here to stay.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (4), [Phishing](../../Skills/Software%20Development/Phishing.md) (1)
> **Env Vars:** aids (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)

#### [Understanding Cryptolocker](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=0)** - [Instructor] Cryptolocker has appeared in many evolutions. Let's take a look at how one of the more recent versions works. This version uses asymmetric encryption and bitcoin payment. The Cryptolocker ransomware is typically distributed through a botnet. When it first infiltrates the target, it copies itself onto disk with a randomly generated executable name. It then includes a startup command in the registry so that it can restart after a reboot. When Cryptolocker starts up, it attempts to communicate with its command and control server. It does this using its domain generation algorithm, as is usual with contemporary malware. It sends a message containing the version, the date, time of build, and the target name. If successful, it receives from the server a public key and the corresponding bitcoin address. A key is added to the registry with these values and a wallpaper file created containing instructions on how to pay the ransom. Cryptolocker then selects the files that it wants to encrypt. These include JPGs, DOCs, spreadsheets, [PowerPoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) files, and a lot more. A symmetric key is generated for each file to be encrypted, and the file is encrypted using AES. The key is encrypted using the public key that was sent from the command and control server, and the encrypted key is then appended to the encrypted file. The paths to the document are stored in the registry. The ransom message is then displayed. Cryptolocker has a countdown timer,
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=92)** which provides a window of opportunity for the victim to pay the ransom and get the private key. Once this countdown finishes, the private key is destroyed, and the files can never be retrieved. Payment of the ransom is made using bitcoins. Other variants use alternative anonymous payment methods, such as U.CASH, CASHU, or prepaid cash money cards. Once the victim pays the ransom, a transaction ID is provided. The victim can then enter this into the Cryptolocker program that is running. The private key is then sent to the victim, and the decryption process begins. Cryptolocker is distributed via spam email messages or from a malicious website, and the original malware infects just the computer on which it lands. Where a number of systems in a target network have infected, that's typically because it's been infiltrated through a botnet, which owns all of the target systems. However, a recent variant of Cryptolocker has the ability to spread between removable drives using activation keys for tools such as [Adobe Photoshop](../../Skills/Artificial%20Intelligence%20(AI)/Adobe%20Photoshop.md) and [Microsoft Office](../../Skills/Web%20Development/Microsoft%20Office.md) as its vector. This makes it much more dangerous once it gets a foothold in a network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powerpoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) (1), [Adobe Photoshop](../../Skills/Artificial%20Intelligence%20(AI)/Adobe%20Photoshop.md) (1), [Microsoft Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Env Vars:** aes (1), cash (1), cashu (1)
> **Analogies:** such as (2)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Understanding Petya](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=0)** - Petya is an example of ransomeware. Released in March 2016 but is different to earlier ransomware in that it encrypts the master file table on a victim's [Windows](../../Glossary/Service/Windows.md) system. The result of this is that the victim cannot access any of their files. This is much quicker and more comprehensive but the file data does still remain on disk in accessible form, albeit difficult to piece together. The malware has been used in a malicious email campaign which targeted the human resource departments of German companies. Staff in the HR team received emails from an applicant seeking a position in the company. The email would include a hyperlink to a Dropbox storage location to download the applicant's CV. The Dropbox actually contained a JPEG of the applicant and a self-extracting executable. The first action of the executable, once loaded, was to connect to it's commanding control server and download the Petya malware onto the victim computer. When Petya first starts, it changes the master boot record to disable booting in safe mode and boot to the malware. Once this is done, it executes the malware which displays a screen that looks like the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) disk checking function. However, it isn't checking the disk. It's encrypting the master file table. At this point, the files have become inaccessible. Once this completes, a ransom message is displayed instructing the user to visit the attacker's payment collection site via the Tor system. The collection site then instructs the victim to pay
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=93)** just under one bitcoin, which is just over $400.00 and will then provide the decryption password. In April 2016, researchers announced that they could defeat the Petya malware. The initial release of Petya malware has reverted to the earlier strategy of storing the key on disk. The solution requires that the disk be removed from the target computer and attached to a forensics system to extract 512 bytes from sector 55 on the disk. A tool has been developed for doing this by Fabian Wosar. Once the information has been extracted, it can be fed into a website and the password can be retrieved. The master file table can then be decrypted and the system rebooted. Unfortunately, it won't take long for this weakness to be addressed and future versions of Petya will almost certainly move to a more robust asymmetric encryption scheme.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Exercise Files:** download the (2)
> **Env Vars:** jpeg (1)
> **Versions:** 400.00 (1)
> **Definitions:** is an  (1)
> **Speakers:** - petya (1)


### 7. Mitigation Techniques

[↑ Back to Table of Contents](#table-of-contents)

#### [Defeating denial-of-service attacks](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=0)** - [Instructor] There are a number of methods that can be used to defeat denial of service attacks, or at least to try. These come into one of two categories: mitigation through design and operational mitigation. Mitigation through design includes establishing the capability for priority-based servicing, egress filtering, and ingress filtering. Operational mitigation includes IP address verification and dropping spoofed packets, rate limiting, ACLs, understanding the characteristics of malicious traffic and dropping it, and understanding the characteristics of normal traffic and dropping anomalies. Priority-based servicing of traffic can be achieved by ensuring network traffic is marked with a priority attribute, and network queues are managed by priority. This is a common voice call service offered by [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) companies to support responders under emergency conditions. Under normal conditions, all traffic gets processed. But when congested, the traffic queues are ordered by priority, and lower priority packets discarded to ensure decongestion. Similarly, priority-based servicing of data network traffic can be implemented, so that, when a flood of packet data comes in, it can be deprioritized to ensure legitimate traffic gets through. A similar mitigation is aggregate-based congestion control, or ACC, in which aggregates are common packets, such TCP SYN and ICMP echo. An ACC, once detecting an attack, will maintain its connection
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=93)** and attempt to determine the aggregates causing the congestion, and control it. It may also request upstream routers to apply limitations to the packet stream. NetBouncer is an older example of a priority approach. NetBouncer emerged from the DARPA fault-tolerant networks program. It's a client legitimacy mechanism that's positioned at the network's Internet gateway, and allows packets only from legitimate clients or users. Several tests for legitimacy are performed on the client, including a ping to see whether there's a real client at the packet source address, and a reserve Turing test, such as a CAPTCHA. Other tests investigate whether an ongoing connection is consistent with the protocol specifications, and if not, NetBouncer terminates the connection. Once the client has been proven legitimate, it's added to the pool of legitimate clients and given higher priority than not yet legitimate clients. The pool is managed using quality of service techniques and guarantees fair sharing of resources between all the legitimate clients. To prevent an attacker from inheriting the credentials of a legitimate client, the legitimacy expires after a certain time, and needs to be reassessed, using the same or a different test. Egress filtering is a form of packet inspection, carried out as packets exit the network perimeter. It doesn't stop incoming attacks, but can stop attack sources sending attacks out. This is done by establishing rules to detect known bad packets, such as source address spoofing, and to stop connections
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=188)** to known command and control servers. Ingress filtering is used to drop packets where they can be recognized as malicious. An example would be a packet with a source address that could not possibly have come from its originating network. This requires network context at design time, and is an approach useful in controlling business-to-business network connections and intranetwork segment traffic. Spoofing a source address is a common tactic in denial of service attacks. And if we can identify a source address as spoofed, we can drop the packet with certainty that it's an attack. However, [Real-Time](../../Skills/Database%20Management/Real-Time.md) source address verification is not a trivial issue to solve. One approach is to have a traceback mechanism, whereby there's evidence to show the route the packet followed on its way to our network. A number of protocols and methods, such as iTrace, have been proposed to do this, but the workload involved make them suitable for investigations, rather than real-time verification. Some subsequent work has been done on efficient traceback methods, but this currently remains in the academic realm. A common method used in firewalls to protect against DDos, is to have a rate limiting mechanism, whereby floods of packets of a similar type, for example, NTP packets, can be dropped once they reach a certain point. Repose is an open-source middleware platform, which provides a good example of a rate limiting filter. It can be installed as a proxy server, protecting internal servers from client-side flooding. The proxy server deployment is known as valve. It can be installed on the Debian [platform as a service](../../Glossary/Concept/PaaS.md).
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=281)** Repose can be configured using XML scripts to limit how many requests per time units are allowed to be made. Rate limiting can be by IP address or user. In addition, Repose can limit the size of content to defeat a large packet denial of service attack. Commercial equipment, such as a Cisco Catalyst, also provide DoS protection through configuring rate limiting on the quality of service, to limit the amount of a particular type of traffic that will be accepted. In some devices, the rate limiting can be set in [Hardware](../../Topics/Hardware.md) registers to minimize latency. ACLs can also be used to stop denial of service attacks. However, because they're configured specifically for source IP addresses, they're usually applied as a denial of service response once an attack has been detected. Characterizing normal traffic is a useful way of detecting attack, especially when the characteristics of protocols can be predicted. This normally involves training the detection system by monitoring traffic with the network in a known normal state. Metrics are often used in network characterization, with thresholds to reflect the extent of normal. TCP normal for a network can be determined through a process of training to determine the normal ratio of sent to received packets. Anything significantly above this is likely to be malicious. UDP normal can be similarly determined, looking at the number of allowed sources per destination, the number of packets per source and the rate of sending and receiving. ICMP normal can be assessed by looking at the number of ICMP echo, timestamp,
>
> **[6:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=375)** and information request packets in the overall aggregate traffic flow. This should be relatively static within reasonable bounds, and similar characteristics can be designed for other protocols. We've seen there are some approaches to DoS mitigation that can be deployed, and some are more successful than others in practice. However, right now, it's fair to say that the attacker has the upper hand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (2), [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) (1), [Platform as a service](../../Glossary/Concept/PaaS.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** icmp (3), acc (2), tcp (2), syn (1), darpa (1)
> **Definitions:** is a  (4), is an  (3), known as (1)
> **Analogies:** such as (4), for example (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** itrace (1)
> **Speakers:** - [instructor] (1)

#### [Commercial anti-DOS services](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=0)** - [Instructor] There are a number of managed service vendors that offer Anti-DoS capabilities. CloudFlare is one of these, offering a set of security solutions which are cloud-based. It's strategy for preventing attack includes filtering black listed sites, customer side white lists, detecting attack signatures, web application fire wall, and port filtering. Of particular interest it offers network-level DDoS protection by recognizing the common SIN, UDP, and ICMP flooding attacks. It also offers application level attack mitigation by managing traffic searches. CloudFlare leverages it's knowledge of attack characteristics on one customer, to then protect it's customer community as a whole. Akamai is a well known content delivery service for the cloud, and it offers one of the most popular DDos protection services. Akamai's prolexic network provides more than 2.8 terabits per second of attack mitigation bandwidth. It consists of 6 data scrubbing centers around the world, with network capacities distributed among multiple tier 1 carriers, and can protect against all known types of DDoS attacks, at the network, transport and application layers. [Google](../../Glossary/Service/Google.md) has launched Project Shield, a free service for websites which host news feeds. This service provides Anti-DDos protection through a reverse proxy. This receives traffic from the internet, checks it, and filters out bad traffic using Google's propriety methods, and sends safe traffic through to it's destination.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=93)** Project Shield also acts as a web server cache, enabling web pages to be served directly from Google's [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md), rather than requiring delivery directly from it's source. This takes a significant load off a web server, whether that server is under attack, or not.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (3), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1)
> **Env Vars:** sin (1), udp (1), icmp (1)
> **Versions:** 2.8 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Detecting P2P attacks with PeerShark](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=0)** - [Instructor] Peer to peer, or P2P networks are those in which there is no central server and all activity is managed by self-organizing nodes on the network. With many nodes being not only consumers of the service, but part of its infrastructure. One of the most significant P2P networks is Skype. The number of P2P networks fluctuates, but with the rapid emergence of the [internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md), there's a new role for P2P to play at the [IoT](../../Glossary/Concept/IoT.md) device level. This is already being seen in traffic lights systems which use node to node communications at the end points. Traditional botnets operate around a central system of command and control servers. These form a single point of failure and are prime targets for take down operations which neutralizes the botnet. As P2P networks have no centralized server, they lack a single point of failure. This resilience has attracted the attention of botnet owners who are now building botnets in which implants or bots communicate, pass on commands, and update other bots in a P2P manner. Such botnets have proved to be extremely resilient. Storm worm is an example of such a botnet being prevalent in 2008 and infecting over a million computers. PeerShark is an analytical tool used to detect P2P botnets by differentiating P2P botnet traffic from P2P network traffic. It uses behavior monitoring and so can detect botnets whether or not traffic is encrypted, a big advantage of contemporary botnets.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=95)** PeerShark focuses on observing the different conversations which happen between P2P peers. The conversations are extracted from packet headers, either in real time or after the event from network traffic captures. A set of features is extracted, which classifies the network behavior. For example, the duration of the conversation, the end to arrival time of packets, the amount of data exchanged, and the number of packets exchanged. Conversation monitoring is becoming a much more powerful approach as [Big Data Analytics](../../Skills/Data%20Science/Big%20Data%20Analytics.md) are being applied to security monitoring. The ability to monitor conversations for slow and low activity, such as B connect, enables detection of the more stealthy botnets. PeerShark has four major components. The first is the packet filtering module. This takes for all packet data and isolates those which have a valid IP for header. From each packet, the source IP, destination IP, payload, length, and timestamp are extracted and stored for future use. The second is the conversation creation module. This takes the output of the packet filtering module and creates a list of conversations by aggregating packets according to peer addresses. The conversation aggregation modules is used to aggregate the conversations created in the conversation creation module. This can take conversations that are spread by hours or days and bring them together into a single view of the P2P conversation characteristics. The final module is the classification module, which uses supervised machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md)
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=190)** for training its model and classifying the information coming from the earlier modules. PeerShark was evaluated using network trace data sets obtained from the University of Georgia. Data from two P2P applications, eMule and uTorrent, and two P2P botnet applications, Waledac and Storm, were used as test traffic. Network packet captures were used to create and then further aggregate conversations. And then used to create a training data set for each application. 50,000 conversations of each application were used. Subsequent deployment of PeerShark after training resulted in a classification accuracy of about 95%, with a very low false positive rate. PeerShark is clearly very effective at classifying known P2P systems. PeerShark does not handle unknown P2P networks as it has no training for them and further research is required to incorporate additional classification techniques.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1), [IoT](../../Glossary/Concept/IoT.md) (1), [Big Data Analytics](../../Skills/Data%20Science/Big%20Data%20Analytics.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Env Vars:** p2p (15)
> **CLI Commands:** node (2)
> **Code Identifiers:** emule (1), utorrent (1)
> **Definitions:** is an  (2)
> **Analogies:** for example (1), such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [NIST guidance on mitigating DDOS](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=1)** - [Instructor] [NIST](../../Skills/IT%20Help%20Desk/NIST.md) in December, 2019 issued the special publication, 800-189, Resilient Interdomain Traffic Exchange: BGP Security and DDoS Mitigation. This publication is written for enterprises and internet service providers. And focuses on the border gateway protocol used to manage internetwork paths. Let's have a look at what guidance it provides on mitigating distributed denial of service attacks. One of the events which can lead to a denial of service is internet address prefix hijacking. Which occurs when a border gateway router advertises itself maliciously as owning a specific internet subnets. Referred to in the publication as an autonomous system. Traffic for the real destination can be hijacked into the domain of the malicious router. This can be used to inspect traffic or achieve a denial of service. There are a number of tools that can be used to monitor for prefix hijacking. An open source one being Artemis. This is designed to provide passive monitoring and detection and active user defined mitigation. Here we can see an example of a hijack record in Artemis. Border gateway protocol updates occur regularly and include an AS path which is used to show the autonomous systems in the proceeding path and is used to implement [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) policies. A malicious AS could modify
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=93)** or remove entries in the AS path. When the malicious update is propagated, the ASs upstream are deceived to believe that the path to the advertised prefix by the adversary AS is shorter and so use it. BGP table exchanges can also be used maliciously to achieve a denial of service by flooding a border router. Border routers can have up to a million routes in their tables. And by spoofing a table exchange request to many highly populated routers, the target router can be dossed. The NIST publication lists 39 security recommendations to protect the control plane and BGP protocol. And an additional 26 controls to protect against reflection attacks and distributed denial of service. The latter set of recommendations includes 12 recommendations for implementing a comprehensive regime of source address validation. Seven recommendations involving port filtering. One recommendation on rate limiting. And six recommendations around flow spec based blackholing of traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [NIST](../../Skills/IT%20Help%20Desk/NIST.md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** bgp (3), nist (2)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)

#### [Considering IoT denial](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=1)** - [Instructor] There are many different things that come under the umbrella of [Internet of Things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md). These range from sub-dollar low-power sensors to cars and drones. Each type has its own characteristics which make security difficult, including its level of vulnerability to denial of service. [IoT](../../Glossary/Concept/IoT.md) environments have a broad spectrum of vulnerabilities. They use a wide range of communications protocols and often operate with mobility, making a common protective mechanism problematic. They may be configured with shared or default passwords and may be physically unprotected. IoT devices often lack reliable authentication schemes and allow network access through insecure services such as Telnet and unencrypted HTTP. These all encourage malware infection. They may not be designed to support firmware updates to correct security bugs. These characteristics mean that IoT devices are not only vulnerable to denial of service, but are also a source of threat used to create denial of service attacks, as was shown in the Dyn attack, which took control of and used a large network of internet open smart cameras to generate distributed denial of service traffic. While many of the current IoT security standards identify denial of service as a threat, there's been little in the way of specific countermeasures. However, in August 2018, the "Sensors" journal published a paper proposing a new method for denial of service mitigation. This paper provides a good survey of thinking on the issue.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=98)** IoT security is typically focused on traditional confidentiality mechanisms. This includes the use of firewalls to provide security for the communications within an IoT environment, filtering the access to services and resources of the environment, and also to filter which devices can communicate to the outside internet. This approach doesn't prevent the environment being isolated, however. [Cryptography](../../Skills/Cybersecurity/Cryptography.md) is used to secure communications between IoT devices, setting up an end-to-end protection mechanism. Some techniques for [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) have been proposed. Several proposals for detecting denial of service attacks have been proposed. These include monitoring and alarming, the use of honeypots to attract the adversary, and sandboxes to analyze the attack behavior. The approach proposed by Almeida and his team is to use a distributed model of entity and message authentication to mitigate denial of service attacks on IoT networks using a distributed intrusion detection system as shown. While this is still a research stage approach, it appears promising. Further details can be found in their paper in the "Sensors" journal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (8), [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (2), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1), [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** http (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Summary](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/summary?u=76281980&t=0)** - [Instructor] I'd really like to thank you for joining me for this course. I hope you enjoyed this foray into denial of service testing. There's always something new to learn about in cyber security, and if you're interested, then check out the other courses in the [Cybersecurity](../../Topics/Cybersecurity.md) segment of the library where new [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md) courses are added regularly. I'd like to invite you to go to my author page where you can find some additional courses on cybersecurity. If you want to get hands on with some of the common tools, then do take a look at practical cyber security and introduction to [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md). If you're wanting to learn about security for the cloud, then Cybersecurity for [Cloud Computing](../../Topics/Cloud%20Computing.md) is for you. I'd also like to invite you to go take a look at Lisa Bock's author page where you'll find more courses in the [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) series. Lisa also has some great information security courses that you can take. Thanks again for joining me on this course, and I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (3), [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md) (1), [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Malcolm Shore](../../Instructors/Cybersecurity/Malcolm%20Shore.md)

## Resources

- Exercise files available

## Skills Covered

- Ethical Hacking

## Path Context

### In [Become an Ethical Hacker](../../Paths/Cybersecurity/Learning%20Paths/Become%20an%20Ethical%20Hacker.md)
← [Ethical Hacking- Social Engineering](Ethical%20Hacking-%20Social%20Engineering.md) | **10 of 19** | [Ethical Hacking- Session Hijacking](Ethical%20Hacking-%20Session%20Hijacking.md) →

## Appears In

- [Become an Ethical Hacker](../../Paths/Cybersecurity/Learning%20Paths/Become%20an%20Ethical%20Hacker.md)

## Related Courses

_Courses sharing skills:_

- [Offensive Penetration Testing](Offensive%20Penetration%20Testing.md) — Ethical Hacking
- [Stealth Penetration Testing with Advanced Enumeration](Stealth%20Penetration%20Testing%20with%20Advanced%20Enumeration.md) — Ethical Hacking
- [Kali Linux for Advanced Pen Testing and Ethical Hacking](Kali%20Linux%20for%20Advanced%20Pen%20Testing%20and%20Ethical%20Hacking.md) — Ethical Hacking
- [Ethical Hacking- SQL Injection](Ethical%20Hacking-%20SQL%20Injection.md) — Ethical Hacking
- [Ethical Hacking- Cloud Computing](Ethical%20Hacking-%20Cloud%20Computing.md) — Ethical Hacking

---

[↑ Back to top](#)