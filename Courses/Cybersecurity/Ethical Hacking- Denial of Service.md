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
  - '[[Become an Ethical Hacker]]'
prev_courses:
  - '[[Ethical Hacking- Social Engineering]]'
next_courses:
  - '[[Ethical Hacking- Session Hijacking]]'
path_nav: '[{"path":"Become an Ethical Hacker","position":10,"total":19,"prev":"Ethical Hacking- Social Engineering","next":"Ethical Hacking- Session Hijacking"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/ethical-hacking
status: not-started
created: 2026-04-29
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
  - Understanding and defeating denial-of-service attacks
  - What you should know
  - Disclaimer
- [**1. What Is a Denial of Service?**](#1-what-is-a-denial-of-service) (2 videos)
  - Understanding denial of service
  - Using Python to test denial of service
- [**2. Infrastructure Denial of Service**](#2-infrastructure-denial-of-service) (7 videos)
  - TCP SYN flooding using hping3
  - Using Hyena to run a reflection attack
  - UDP flooding with LOIC
  - ARP poisoning with Ettercap
  - Using NTP to amplify attacks
  - NEW: Amplification using memcached
  - NEW: When is a DDoS not a DDoS?
- [**3. Wireless Denial of Service**](#3-wireless-denial-of-service) (1 videos)
  - Deauthenticating a wireless host
- [**4. Application Denial of Service**](#4-application-denial-of-service) (6 videos)
  - Flooding HTTP using GoldenEye
  - Testing webapps using OWASP SwitchBlade
  - Understanding BlackEnergy
  - Killing the FTP service
  - RangeAmp attacks on the CDN
  - Profiling Killnet
- [**5. SIP Service Attacks**](#5-sip-service-attacks) (1 videos)
  - Flooding a SIP server
- [**6. Ransomware**](#6-ransomware) (3 videos)
  - Explaining ransomware
  - Understanding Cryptolocker
  - Understanding Petya
- [**7. Mitigation Techniques**](#7-mitigation-techniques) (5 videos)
  - Defeating denial-of-service attacks
  - Commercial anti-DOS services
  - Detecting P2P attacks with PeerShark
  - NIST guidance on mitigating DDOS
  - Considering IoT denial
- [**Conclusion**](#conclusion) (1 videos)
  - Summary

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Understanding and defeating denial-of-service attacks
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-and-defeating-denial-of-service-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-and-defeating-denial-of-service-attacks?u=76281980&t=1)** - [Instructor] In the digital world, cyber attack has unfortunately become an everyday occurrence.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-and-defeating-denial-of-service-attacks?u=76281980&t=6)** One of the common forms of attack is Denial of Service, which may be a state sponsored attack against critical infrastructure, criminal extortion against a business or just vandalism by hacktivists or amateur hackers.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-and-defeating-denial-of-service-attacks?u=76281980&t=20)** As we go through the course, I'll explain what to Denial of Service is, demonstrate some of the more popular attack tools and then look at how ransomware works.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-and-defeating-denial-of-service-attacks?u=76281980&t=30)** I'll finish by looking at how to protect our systems against Denial of Service.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-and-defeating-denial-of-service-attacks?u=76281980&t=36)** I'm Malcolm Shore and I've spent a career helping governments and businesses protect their systems against cyber attacks.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-and-defeating-denial-of-service-attacks?u=76281980&t=43)** I'd like to invite you to take this LinkedIn learning course and learn how to avoid becoming a victim of Denial of Service attacks.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-and-defeating-denial-of-service-attacks?u=76281980&t=51)** Now let's get started with Denial of Service.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a practical course.
>
> **[0:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/what-you-should-know?u=76281980&t=2)** It introduces a number of tools which are used to test systems.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/what-you-should-know?u=76281980&t=6)** During this course, I'll be using a virtualized computing environment called VirtualBox and I'll be using the Kali Linux testing framework.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/what-you-should-know?u=76281980&t=15)** If you're not familiar with virtualization or you haven't used Kali before, you should watch my introduction to Kali Linux course which will show you how to install and use VirtualBox and Kali.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/what-you-should-know?u=76281980&t=27)** In addition, I'll be assuming some basic computer and networking concepts, familiarity with Windows, and a knowledge of basic Linux commands.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Disclaimer
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/disclaimer?u=76281980&t=0)** - [Instructor] This course uses a range of third party testing tools.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/disclaimer?u=76281980&t=4)** Some are commercial products, and some are open source.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/disclaimer?u=76281980&t=9)** The download and installation instructions for all tools used in this course is available as a PDF in the associated course material.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/disclaimer?u=76281980&t=17)** While we've done our best to insure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers, and we can't provide any assurance that these sites might not be compromised when you visit them.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/disclaimer?u=76281980&t=31)** Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware and may raise antivirus alerts when you visit them.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/disclaimer?u=76281980&t=43)** The testing tools we demonstrate are extremely powerful.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/disclaimer?u=76281980&t=46)** They may demonstrate some of the same signature characteristics as malware and malicious implants and may raise antivirus alerts when you try to download them.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/disclaimer?u=76281980&t=56)** Again, we can't provide assurance that the software hasn't been compromised when you download it, and so, as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load onto your system.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (2)
> **Env Vars:** pdf (1)
> **Speakers:** - [instructor] (1)


### 1. What Is a Denial of Service?

> [↑ Back to Table of Contents](#table-of-contents)

#### Understanding denial of service
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=0)** - [Instructor] Denial of service attacks have been a threat on the internet starting as far back as when Robert Morris released his internet worm in 1988.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=9)** The internet was in its infancy, and the result was little more than an inconvenience.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=15)** In the age of cyberspace and ubiquitous connectivity, online business depends upon accessible services.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=22)** A denial of service becomes a much more serious issue and one which can have devastating consequences.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=29)** The digital attack map provides a view of DDOS attacks based on data collected by arbor networks.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=36)** Additional information is available by hovering over the streams.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=41)** In an assessment carried out by Kaspersky Labs in 2015 the cost of such an incident is between $52,000 and $444,000 as a result of an inability to carry out core business.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=55)** Loss of contracts and opportunities, credit rating impact and insurance premium increases.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=62)** This is significant enough to justify internal testing to ensure the business is resilient.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=68)** There are many different ways to achieve a denial of service and it would take a very long time to enumerate them all.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=74)** But we'll look at the general approaches, and a number of typical attacks in this course.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=80)** Denial of service is a name given to a class of cyber attacks for which the aim is to disrupt or deny use of a business service.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=89)** Be that a website or some other service accessible from outside the organization.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=94)** An attack might be from one source, in which case it's called simply a denial of service.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=99)** Typically it starts with a phishing attack on an employee to gain access to the enterprise.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=105)** This kind of an attack requires the use of an attack workstation, and a tool but no additional infrastructure.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=111)** The attack may be from multiple sources in which case it's known as a distributed denial of service, this is more complicated because it firstly requires access to a large number of compromised systems.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=123)** A botnet which can be used as distributed sources all controlled from one master attack work station.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=130)** One of them issues a phishing email and when activated the enterprise is then a target for all.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=136)** Distributed denial of service attacks were first seen in 1999 a DOS tool called Trinoo was deployed on over 200 hosts to flood a server at the University of Minnesota.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=147)** It successfully took the server offline for two days.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=151)** A third type of attack known as a reflection attack, so called because it goes indirectly to the target by being reflected from a third party service.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=161)** This is a sophisticated attack that takes advantage of legitimate functions on third party services.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=167)** To act as the reflection surface that is used in the attack.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=171)** Typically the reflected volume of data is much larger than the request data, and so the reflection also amplifies the effect of the attack.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=180)** Because of this, these attacks are sometimes called amplification attacks, the domain name service and the network time service have both been used to run these forms of attack.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=192)** An interesting variation on each of these classes of attack known as intermittent or pulsing flooding can be used to navigate through anti DoS defenses.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=202)** This can be successful when a defense mechanism such as a firewall is more tolerant to a flooding attack than the server it's protecting.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=210)** There are many attack techniques which can be used to deny services, and these will result in one of three classes of impact, the first is choking access to the service.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=221)** In which the pathway from the client to the service is overloaded on congested, in such a way as to make it difficult or impossible for a legitimate request to get through.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=231)** The second is disabling the service, typically by sending a malformed packet which causes some form of internal malfunction in the service or application.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=240)** The third type of impact is downgrading service performance.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=244)** Typically done by exhausting host resources for providing services.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=249)** In addition to the three classes of attack and the three types of impact.
>
> **[4:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=253)** There are three classes of attack techniques.
>
> **[4:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=255)** The first is network-based attack techniques, which depend upon some form of protocol manipulation to exhaust resources, these include the following attacks, TCP SYN flooding attack which partially creates a TCP session, but does not complete the session handshake, and so consumes resources to maintain status information on the half open connection.
>
> **[4:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=277)** The ICMP smurf flooding attack which is a reflective attack using using the ICMP echo because the source address is forged as the target address and the ICMP response is sent back to the target.
>
> **[4:50](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=290)** If sufficient ICMP requests are made, the response packets flood the target's bandwidth.
>
> **[4:56](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=296)** UDP flooding, a UDP flooding attack is just a distributed denial of service attack in which any form of UDP packets is sent to the target, and flooding occurs because, with a large number of emitting sources the volume of packet data can easily exceed the target's incoming bandwidth.
>
> **[5:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=313)** ARP flooding, the ARP protocol is used in local area networks to identify the association between MAC addresses and IP addresses.
>
> **[5:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=322)** So that ethernet routing can be done using MAC addresses.
>
> **[5:25](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=325)** By corrupting the ARP caches, in individual network hosts these hosts can be isolated from the network, thus denying resources.
>
> **[5:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=334)** The DNS amplification or reflection attack.
>
> **[5:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=337)** A variant of the Smurf attack, this is another reflective attack in which a request is made to a DNS server and the DNS response which is over 50 times larger which is returned, this leverages not only the number of responses but their size to congest the network.
>
> **[5:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=352)** A similar approach can be achieved using the NTP service gaining up to 50 times the amplification effect, a global NTP flooding attack took place in early 2014 causing hour long outages in many data centers around the world.
>
> **[6:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=369)** The second class of attack is wireless network attacks.
>
> **[6:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=373)** These often require the attack to be in close proximity to the wireless network and are focused on stopping workstations connecting.
>
> **[6:19](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=379)** These include the following attacks, the De-authentication attack, in which the attack monitors for workstations trying to authenticate and issues a specific de-authentication request to that workstation.
>
> **[6:31](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=391)** Alternatively a broadcast de-authentication can be sent which affects all workstations.
>
> **[6:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=397)** The routing congestion attack, in which an adversary can flood the network by sending a large number of rout requests.
>
> **[6:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=403)** Causing high levels of congestion which in turn disrupts routing.
>
> **[6:48](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=408)** The final class of attack techniques is known as application or host based attacks.
>
> **[6:53](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=413)** Which exploit vulnerabilities in the operating and application code on the target host.
>
> **[6:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=418)** This class of attack can exploit certain algorithms, memory structures, implementation specifics and so on.
>
> **[7:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=424)** Each of these attacks is typically system and version specific, one of the key application level attacks is a HTTP flooding to create a denial of service.
>
> **[7:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=433)** Similar to ICMP, the HTTP flooding attack sends a large number of HTTP messages to a webserver typically in a way that resources are held open by the request, and causes to consume all its connections.
>
> **[7:27](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=447)** Many other applications are also vulnerable to attack, and I'll cover FTP later in the course.
>
> **[7:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=453)** SIP services are increasingly becoming a key target, as internet voice becomes a major carrier for businesses.
>
> **[7:40](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=460)** There are a number of techniques that can be used to protect against denial of service attacks.
>
> **[7:45](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=465)** These are often ineffective due to a lack of testing prior to the incident and either fail when used or are not used because of the risk of failure.
>
> **[7:53](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=473)** They can be implemented as an in-house capability or used in the form of DoS mitigation as a service.
>
> **[7:59](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=479)** Mitigation typically involves diagnosing an attack and discarding packets that are identified as part of the attack.
>
> **[8:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-denial-of-service?u=76281980&t=487)** Okay that's an overall look at the topic of denial of service, so now let's get into the detail.

> [!info]- Semantic Content
>
> **Env Vars:** icmp (5), udp (3), arp (3), dns (3), http (3)
> **Definitions:** is a  (4), known as (4)
> **Code Keywords:** this, (1), require (1), let (1)
> **Analogies:** such as (1), similar to (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### Using Python to test denial of service
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=1)** - [Instructor] Torshammer is a denial of service testing tool written in Python.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=5)** It's a little old now and it doesn't scale to quite the level of contemporary distributed denial of service attacks.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=11)** But it's useful to take a look at how a denial of service tool is written.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=15)** Now that this tool may cause a virus alert when you extract the files.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=19)** Microsoft Defender will report it as a Python Dakkatoni tool with potentially unwanted behavior.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=26)** I've extracted the main Torshammer Python file so let's take a look at it.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=31)** At line four we have a description of the tool.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=34)** It's a slow denial of service attack which focuses on using up target resources.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=40)** It's got the ability to run as a hidden attack through the anonymizing Tor network and has been tested against various Apache Servers to determine the scale of packet generation necessary to cause a denial of service.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=54)** At line 35, we can see that we have a number of different user agents to choose from which it will use in constructing its HTTP packets.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=65)** At line 179 we can see the entry point a little bit of boasting before calling the main function and getting down to work.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=74)** Let's go back up to line 117, where we can see the help for using Torshammer.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=81)** It requires a target, the number of threats to use for generating messages, the port to use with HTTP port 80 as the default and whether Tor is being used.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=93)** At line 126 we have the main line code.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=98)** And at lines 136 through to 162, we can see the argument defaults being set and displayed back.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=109)** The code which actions the denial of services.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=112)** It's at lines 164 to 177.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=117)** The first section of code creates an instance of HTTP post for each thread.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=122)** And the next section of code loops waiting for all threats to terminate or for a keyboard interrupt.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=129)** Let's look at the HTTP post-class at line 58.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=134)** It has three methods in it.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=137)** Send HTTP post and run.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=141)** The class in it function, initializes the thread and sets the class values from the command line arguments.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=148)** The run function at line 90 is called after initialization and uses the self running checks to make sure the program hasn't been terminated by the user.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=158)** At line 94 the function checks whether if Tor is being used and if so connects by the proxy at port 90, 50 it then connects to the target.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=169)** Following this at line 108 it calls the HTTP post function.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=174)** The post function at line 67 starts by sending the first part of a 10,000 byte long HTTP post message using a random user agent.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=184)** It then sends randomly chosen combinations of letters and digits to complete the post sending them with a time delay in between each pair.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=193)** It then closes and terminates.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-python-to-test-denial-of-service?u=76281980&t=196)** There's not a great deal to Torshammer but it does provide an insight into the relative ease with which tools such as this can be written.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (3), self (1)
> **Env Vars:** http (7)
> **CLI Commands:** python (3), apache (1), make (1)
> **Ports:** port 80 (1), port 90 (1)
> **Definitions:** is a  (1), is called (1)
> **Tools:** command line (1)
> **Analogies:** such as (1)
> **Prerequisites:** initialization (1)


### 2. Infrastructure Denial of Service

> [↑ Back to Table of Contents](#table-of-contents)

#### TCP SYN flooding using hping3
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=0)** - [Instructor] The most common technique used in denial of service attacks is the TCP SYN flood.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=6)** We can test resilience to flooding by using the hping3 tool which comes in Kali Linux.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=11)** This is very simple to use.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=14)** The TCP handshake takes a three-phase connection of SYN, SYN-ACK, and ACK packets.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=20)** When the SYN packet arrives, a buffer is allocated to provide state information for the session.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=26)** The TCP SYN flood happens when this three-packet handshake doesn't complete properly.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=32)** I'll open a terminal window and take a look at hping3.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=38)** As we can see, hping3 is a multi-purpose network packet tool with a wide variety of uses, and it's extremely useful for testing and supporting systems.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=47)** The count option, specified by -C or --count, determines how many packets will be sent.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=55)** If this is omitted, packets will be sent until the tool is terminated with Ctrl+C.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=60)** An important option for testing denial of service is the interval, specified by -I, which determines how fast the packets are sent to the target.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=69)** The faster the packets are sent, the sooner resources become consumed.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=74)** However, too fast, and there's a risk of countermeasures being deployed.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=78)** Hping3 has six modes, the default being TCP mode.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=82)** It can also operate using the ICMP and UDP protocols and running scan and listen mode.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=88)** Each mode has its own set of options that determine exactly how it operates.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=93)** I won't go into all the options in detail, but if you want to get more familiar with the tool, you may find it useful to download the hping3 cheat sheet from the Packet Storm site.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=104)** Okay, let's get into hping3.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=106)** I'll do a straightforward ICMP ping to my Windows 10 system on 192.168.1.8 using hping3.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=114)** I'll use the -1 option for an ICMP packet.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=117)** I'll run this fast and do five packets.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=124)** Okay, we can see the responses.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=127)** The UDP TCP set of options are for a wide range of packets to be generated.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=131)** To run a TCP SYN attack, I'll issue the command hping3 using the default TCP mode with the flag -S to indicate that a SYN packet is to be generated,
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=142)** - p 445 to specify the destination port is 445, and I'll use the --flood option to specify a high omission rate to enable flooding.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=153)** Each packet in this attack will look like a standard connection request to the target and it will send back a SYN-ACK packet.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=160)** However, hping3 does not send back an ACK packet, and so it doesn't complete the handshake.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=166)** I'm running the performance monitor in my Windows 10 system and we can see it's idling along.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=174)** Let's run the TCP SYN attack.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=176)** Here we go.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=182)** Back in Windows, we can see the CPU utilization spiked up and is now continuously running round about 45%.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=191)** This is a significant workload.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=194)** Let's run that again, now with the data size increased to 1200 bytes.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=202)** We can see that the additional data size has increased the CPU utilization.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=208)** I'm using a standard computer network setup, but can certainly stress the targets.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=213)** Using a powerful omitter or multiple omitters and a good source bandwidth, the TCP SYN attack will result in serious response problems for the target system.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=223)** We can see that the additional data size has increased the CPU utilization, which is spiking up to about 60%.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=230)** I'm using a standard computer and network setup, but can certainly stress the target.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=235)** Using a powerful omitter or multiple omitters and a good source bandwidth, the TCP SYN attack will result in serious response problems for the target system.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=245)** I'll stop this attack now.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=247)** Hping3 is a useful tool to test the target system's resilience to the TCP SYN attack.
>
> **[4:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=253)** A variation of the TCP SYN attack is the local area network denial attack, which uses the TCP SYN attack on an open port, with the source and destination IP addresses and ports the same.
>
> **[4:25](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=265)** When it was first discovered, this caused a vulnerable target to lock up continuously trying to make connections to itself.
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=272)** I'll send this attack to my Windows 10 target.
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=281)** In this case, when the flood starts, Windows recognizes it as a land attack and handles it without any significant impact.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/tcp-syn-flooding-using-hping3?u=76281980&t=288)** Many operating systems addressed this issue some time ago, but it occasionally reappears as it did when Windows 2003 was released.

> [!info]- Semantic Content
>
> **Env Vars:** syn (14), tcp (13), ack (4), icmp (3), cpu (3)
> **Code Keywords:** let (3), case, (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), make (1)
> **Prerequisites:** setup (2)
> **Speakers:** - [instructor] (1), - p (1)
> **Versions:** 192.168.1 (1)
> **Tools:** terminal (1)

#### Using Hyena to run a reflection attack
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=1)** - [Instructor] A reflection attack takes place when an attacker sends packets to an intermediate system, and that system responds not back to the attacker but to the target.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=10)** This is usually achieved by spoofing the source IP address to be that of the target.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=15)** When the intermediate system receives the packet, it looks to all intents and purposes as if it was a legitimate request from the target.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=24)** Reflection attacks were of technical interest but become particularly significant when combined with amplification.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=30)** This enables an adversary to leverage infrastructures already deployed on the internet, to deliver a crippling flood of data onto the target without crippling his or her own network.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=41)** Before we get into looking at reflection attacks, it's useful to do a quick review of how packets move around local and wide area networks.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=49)** Four addresses are used for this.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=51)** The source and destination MAC address, which is shown as six bits separated by colons.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=57)** And the source and destination IP address shown as four numbers separated by dots.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=63)** In order to send the packets, the sending host will use either the MAC address provided or will obtain a MAC address by resolution through the out protocol.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=73)** I can see this in action on my network, if I go into the command shell and issue the request ARP-a.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=81)** ARP will provide the addresses of all the hosts it knows about from its tables.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=85)** These tables are built up dynamically and maintained as part of the underlying network activity.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=90)** They're vulnerable to attack and we'll cover these attacks later in the course.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=96)** If the IP address is in the local network, it will be routed using the MAC address in the ethernet frame.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=102)** If it isn't in the local network, the gateway MAC address will be used to route the packet to the gateway.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=108)** The gateway will determine from its destination IP address which interfaces to go out on, repackage it and send it on.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=115)** With its source MAC address being that of the routers interface.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=120)** As we use tools to manipulate packets on the local network, some will manage the MAC addresses implicitly and some will require us to specify MAC addresses.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=131)** We can run a reflection attack using a tool called Hyenae.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=135)** This can be downloaded from the SourceForge site shown here.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=138)** I've already downloaded and installed it, so let's go run it.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=145)** For this demonstration, I'll use Windows 10 to source the attack, use my Ubuntu system as the reflector, and I'll target my Kali system.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=156)** Hyenae comes as a command line tool or we can run it through the graphical interface.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=161)** I'll use the graphical front end, but we can also see the equivalent command line syntax at the bottom of the screen.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=167)** At the top left of the Hyenae screen, we can select the operational mode.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=172)** The first drop-down box offers a choice of running the attack from the local machine, from a remote daemon or from multiple remote daemons.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=181)** This latter mode connects two agents on multiple remote computers to enable a distributed denial-of-service.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=188)** I'll run with just the local machine.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=191)** We also need to select the interface, I only have one, so I'll leave that as it is.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=196)** Below that in the network protocol panel, I'll keep IPV4, but I'll select the ICMP Echo packet type.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=206)** I'll change the top send parameter, the number of packets, to a fixed number of five for this demonstration.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=212)** (mouse clicks) I'll leave the remaining send parameters as they are.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=217)** For the ICMP Echo packet type, we have to specify a source pattern, a destination pattern and the time to live in the panel at the top right.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=226)** The address pattern is shown as % - %, where percent is a wild card which Hyenae will randomly generate.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=233)** The part of the address before the dash is the MAC address and the part after the dash is the IP address.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=240)** It's important to be careful when setting up these fields because it's quite easy to start issuing thousands of attack packets out onto the internet if we use random IP addresses.
>
> **[4:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=251)** I'll be running a reflection attack on my Kali system, which is currently on IP address 10.0.2.12.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=259)** I'll spoof the source address pattern to %-10.0.2.12.
>
> **[4:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=266)** I'll use my Ubuntu system as the reflector, and it's has a MAC address of O8:00:27:A3:1D:D0,
>
> **[4:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=284)** and then IP address of 10.0.2.9.
>
> **[4:50](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=290)** I'll leave the TTL and the packet payload as default.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=294)** Wireshark is up and running on Kali, so we'll be able to check what packets arrive there.
>
> **[4:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=298)** So let's end this attack on its way.
>
> **[5:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=300)** (mouse clicks) If I look at the Wireshark displaying Kali, I can see that the Ubuntu responses to the five packets we sent, have been successfully reflected by the Ubuntu system, and have arrived at Kali.
>
> **[5:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=316)** Of course, a malicious attack would send much more traffic from many more sources, and if possible with massive amplification.
>
> **[5:24](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=324)** We'll look at reflection amplification attacks a little later in the course.
>
> **[5:29](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=329)** An older denial-of-service technique, which uses reflection was the ICMP Smurf flooding attack.
>
> **[5:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=335)** It used reflection with ICMP packets sending a large number of requests to the reflector.
>
> **[5:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=341)** Which sends replies to the target just as we've done.
>
> **[5:45](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=345)** However, the unique twist with Smurf is that it targets the broadcast address of a subnet as its reflector.
>
> **[5:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=352)** Thereby, amplifying the reflection by the number of responding hosts on the subnet.
>
> **[5:57](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=357)** A similar attack, the Fraggle attack, uses UDP packets targeted at port seven which is Echo and 19 Chargen, which will also respond.
>
> **[6:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=368)** The key to the Smurf attack is therefore, finding a subnet which responds to broadcast ICMP requests.
>
> **[6:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=375)** This is difficult, as most systems are now logged out by default and don't respond specifically to defeat a broadcast storm.
>
> **[6:23](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=383)** Of course, a criminal syndicate, can always stand up a reflections subnets which responds to a broadcast.
>
> **[6:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-hyena-to-run-a-reflection-attack?u=76281980&t=390)** But it's sufficient effort that the cyber criminals have moved on from using broadcast addresses to other form of amplification.

> [!info]- Semantic Content
>
> **Env Vars:** mac (10), icmp (5), arp (2), ipv4 (1), ttl (1)
> **Code Keywords:** interface (3), let (2), this. (1), require (1), type. (1)
> **Versions:** 10.0.2 (3)
> **UI Navigation:** select the (3)
> **Ports:** :00 (1), :27 (1)
> **Cross-References:** later in (2)
> **Tools:** command line (2)
> **CLI Commands:** go run (1)

#### UDP flooding with LOIC
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=0)** - [Instructor] Let's take a look at the low orbit ion canon, or LOIC.
>
> **[0:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=3)** LOIC is used to generate a massive amount of network traffic in order to consume bandwidth, and exhaust network or application resources.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=12)** Such a high rate of traffic results in performance degradation, and potentially a loss of service.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=18)** A user armed with LOIC can perform denial of service against a target site, by flooding its server with illegitimate TCP, UDP, or HTTP packets.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=29)** On its own, one computer running LOIC can't generate enough TCP, UDP at once to overwhelm the average server.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=36)** It takes thousands of computers, all targeting a single server, to have any real impact.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=41)** A distributor denial of service by coordinating many individual attacks.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=47)** Consequently, LOIC has become notorious due to some highly publicized attacks against Sony, PayPal, MasterCard, and Visa.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=56)** It was at one stage the weapon of choice for the hacker group, Anonymous.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=61)** LOIC is now a legitimate testing tool, widely used by testers and network administrators.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=66)** And, as such, it makes no attempt to spoof its IP address.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=70)** As a consequence, there have been a number of arrests for using it maliciously.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=74)** Being able to demonstrate resilience against this tool is important, as this is still a tool that can be used in anger.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=82)** You can download this tool from the Sourceforge page.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=85)** This comes as a zip file, inside which is the executable.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=88)** Note that the tool is sometimes flagged as a malicious program.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=92)** This is usually a false alarm, triggered by the tool itself.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=96)** I've got this loaded already on my Windows 7 system, so let's start it.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=102)** LOIC has a very simple interface.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=104)** To use it, we'll enter the IP address of my external Windows 10 system.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=112)** And press the associated Lock On button.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=115)** I'll also select UDP from the method drop down box in the attack options panel.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=122)** This will do a UDP flood.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=124)** I can leave all the other options as default.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=127)** I'm using VNC to remotely access the Windows 10 system.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=131)** I've already got its performance monitor up, and we can use this to monitor the load on the target.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=136)** Okay, back at LOIC, I can now start the attack using the amusingly called Imma Chargin Mah Lazer button.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=144)** We can see the number of packets being generated in the bottom panel.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=147)** Let's go and look at the Window 10 system.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=150)** As we can see, the VNC access to the Windows 10 system has been compromised, and we can't see what's happening on the server.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=157)** This is due to the bandwidth being consumed by the LOIC's packet stream.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=161)** Okay, I'll stop the flooding now.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=164)** Okay, VNC access has returned and we can see the performance monitor on the move again.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=169)** We can see from the attacks, we were causing the CPU to increase to about 15% utilization.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=174)** But the real problem was the network bandwidth, which compromised our access.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=178)** Even a script kitty can launch a noticeable attack from their home computer.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=182)** In a really malicious and professional attack, however, a victim could expect thousand of attack sources to be operating concurrently.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/udp-flooding-with-loic?u=76281980&t=189)** And with these attacks delivering upward of 50 gigabytes per second in traffic, the victim has a real problem.

> [!info]- Semantic Content
>
> **Env Vars:** loic (9), udp (4), vnc (3), tcp (2), http (1)
> **Code Keywords:** let (3), interface (1), default. (1)
> **Exercise Files:** zip file (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### ARP poisoning with Ettercap
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=1)** - [Instructor] Ettercap is a well-known tool which can sniff live connections, operators, a man in the middle and filter content on the fly.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=8)** It supports active and passive protocols manipulation and includes many features for network and host analysis.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=15)** The particular feature we'll look at in this video is its ability to create a denial of service.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=22)** An Ettercap attack takes place from a host on the local network.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=25)** Either one that's attached itself maliciously or from a host that has been compromised.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=31)** Ettercap is provided entirely as a command line tool, and also via graphical interface, which is listed in the sniffing and spoofing set of applications.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=40)** Let's open a terminal window and I'll enter Ettercap minus H and look at the help information.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=50)** One of the useful commands is Ettercap minus P, with the list option, which lists all the plugins.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=56)** These are preset scripts which will carry out a specific function.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=60)** Ettercap minus P list.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=66)** We can see the plugin modules and in particular we can see various denial of service modules.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=71)** The first is the DOS attack, a denial of service attack which works by scanning the target to find open ports, then starts flooding them with SYN packets using an unused IP address in the sub-net as the source IP.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=86)** Then it uses fake art replies to intercept packets to this unused IP address and complete the connection, flooding the target with active connections.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=96)** The Fraggle attack can be used to send a large amount of UDP echo and charge-in traffic to all hosts on the subnet, using the target as the source address and all replies then go back to the target.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=108)** This is a standard UDP flow.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=112)** The isolate attack will isolate a host from the network by poisoning the victims ARP cache with its own MAC address.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=120)** Ettercap provides a Smurf attack plugin, which sends huge numbers of ICMP packets with the targets as the source address to a set of hosts.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=130)** This causes all the hosts to reply to the ICNP request, causing significant traffic at the targets.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=137)** We'll run a couple of these.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=138)** Let's first of all run a DOS attack.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=142)** I'm in my Window system and have a browser open to the Metasploitable web server on 10.0.2.8.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=148)** I'll refresh it.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=152)** I'll now start the attack by entering pseudo Ettercap minus TQP DOS attack.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=165)** The T option specifies we're using the text only interface and the Q option is to run super quietly.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=172)** I'll put in the target address 10.0.2.5, and an unused IP address, 10.0.2.199.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=185)** Okay, the attack's started.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=186)** Let's go back to Windows.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=189)** Okay. Let's now try refreshing the page.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=196)** The browser's having some trouble doing that.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=199)** We're experiencing a minor disruption in our access to Metasploitable.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=205)** I'll quit this attack now.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=217)** Now let's poison the Target's ARP cache.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=219)** I've got a browser open on Ubuntu and can access Metasploitable.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=227)** I'll use the Ettercap graphical interface for this.
>
> **[3:49](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=229)** Let's start it by simply entering pseudo Ettercap minus G.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=238)** Okay. We've got the graphical interface up.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=240)** I'll switch off sniffing at startup and then press the tick.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=246)** I select the menu icon on the right, hosts, scan for hosts.
>
> **[4:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=254)** I'll then select hosts, hosts' list.
>
> **[4:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=258)** and highlight 10.0.2.9 and press add to target one.
>
> **[4:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=266)** We can see the host has been added and can confirm this by selecting targets, current targets.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=275)** On the MTM menu, I'll select ARP poisoning and OK.
>
> **[4:42](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=282)** And we can see that 10.0.2.9 has been poisoned.
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=286)** Back in Ubuntu, I'll attempt to refresh my Metasploitable page.
>
> **[4:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=292)** And it fails.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=294)** The cache has been poisoned and connectivity has been lost.
>
> **[5:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/arp-poisoning-with-ettercap-2?u=76281980&t=301)** Back on my Kali system, I can access the Metasploitable server, the server's fine, but Ubuntu has been isolated.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), interface (4), function (1), super (1), this. (1)
> **Env Vars:** dos (3), arp (3), udp (2), syn (1), mac (1)
> **Versions:** 10.0.2 (5)
> **Cross-References:** go back to (2)
> **Tools:** command line (1), terminal (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **UI Navigation:** select the (1)

#### Using NTP to amplify attacks
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=0)** - [Narrator] A reflection attack takes place when we send a packet to a server, and have it reply, not to us, but to the target.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=8)** We can achieve this easily by spoofing the source address in the packet.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=12)** An amplification attack takes place when we send a packet to a server and get a significantly larger packet sent back to the target in reply.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=21)** Both reflection and amplification attacks typically involve sending packets to many thousands of servers in a distributed denial-of-service attack.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=30)** Let's have a look at the basics of an NTP attack.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=33)** I'll start by looking at the Ubuntu server, which I have on the virtual network running the NTP service.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=40)** I can check what services are running in Ubuntu by entering the command service --status-all more.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=52)** We can see the NTP server is shown with a plus.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=55)** It's running.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=57)** Okay, Let's see how it's configured.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=59)** This shows me that the service is running and it's connected to four authoritative time servers.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=65)** Okay, we have a service here.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=66)** Before I go, I'll open up the servers configuration, which is in /etc/[ntp.com](https://ntp.com).
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=74)** I'll just go down a ways and we can see the restrictions on access.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=78)** Many NTP services, such as this one, have included restrictions to ensure, amongst other things, that they can't be used for reflection attacks.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=86)** Because I'm going to demonstrate the attack across two networks, I'll comment out the restrictions and restart the server.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=97)** Okay, just before we go, I'll check the IP address.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=103)** And we can see that it's 10.0.2.9.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=107)** Back in Kali, I'll open a terminal window, and I'll ping the NTP server to make sure I can see it.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=119)** Okay, we're able to see the server.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=120)** We can use Nmap to check the services there.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=128)** We can see the UDP port, 123 is open running NTP.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=133)** And because the time server is running on my local network, I can also see the MAC address of the server.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=138)** I'll next send a standard request for the time to the server by using one of Nmap's scripts.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=148)** This provides a response with the time stamp.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=151)** The request used in the amplification attack is called the monlist, which sends back the list of servers that the NTP services used and this can be substantially bigger.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=161)** I'll set up Wireshark from the sniffing menu, and put in a filter for capturing everything to and from the NTP server.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=177)** I'll now send the NTP monlist command.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=183)** Okay, we got the response back, and I'll stop the packet capture now.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=190)** We can see that the request went across.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=193)** There is a 44-byte header and a 48-byte NTP packet, and the response is a 44-byte header and a 440-byte NTP packet.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=207)** Close to 10 times the amplification.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=209)** In the wild, monlists can deliver up to 50 times the amplification.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=214)** The last thing to do is spoof the source address.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=216)** Vpnguy has a github depository which demonstrates this using python, and I've created a short version of this to demonstrate.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=225)** Let's look at the code.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=226)** I'll go to my NTP DoS directory and I'll open up an editor to look at the NTP DoS code.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=234)** At the top, we see the libraries to include followed by the main function deny, which constricts and sends the NTP packets.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=242)** This is a multi-threaded script.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=243)** So the first thing we need to do is establish some global variables.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=247)** Then we pick the next NTP server to use from the list and increment the server index.
>
> **[4:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=253)** Then we construct the packet's IP header, which has the target specified as the source address.
>
> **[4:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=258)** The UDP header which has port 123 for the NTP server and the NTP payload.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=263)** Then we send the packet and we'll continue in a loop until we terminate it.
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=272)** The next few lines are the start of the program and copy in the command line arguments.
>
> **[4:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=276)** For clarity, I've left out the original checking code.
>
> **[4:40](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=280)** Note we constrict the NTP data payload as an eight-byte packet starting with hexadecimal 17.
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=286)** The final piece of code is the main loop which spawns the threads for each NTP server in the list.
>
> **[4:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=292)** As you can see, the NTP DoS program is very simple and uses basic networking scripted commands.
>
> **[4:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=298)** Its power comes from having access to a large number of unrestricted NTP servers and the amplification effect of the monlist command.
>
> **[5:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=307)** Okay, let's see it in action.
>
> **[5:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=309)** I set up a file with my one NTP server in it.
>
> **[5:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=315)** Okay, now I'll run the python script.
>
> **[5:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=322)** I've set Wireshark up on the windows 10 server and filtered it only to display the packets that are coming to the UDP port 48947.
>
> **[5:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=330)** Let's start it.
>
> **[5:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=335)** We can see the NTP response packets arriving at the target window server.
>
> **[5:39](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=339)** These are coming in slowly and with modest amplification but with a large enough list of NTP servers this can be very effective.
>
> **[5:46](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/using-ntp-to-amplify-attacks?u=76281980&t=346)** As it was in the global NTP attack that took place in February 2014, which used about 4,000 servers.

> [!info]- Semantic Content
>
> **Env Vars:** ntp (25), udp (3), mac (1)
> **Code Keywords:** let (5), function (1), continue (1)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** python (2), make (1)
> **Tools:** terminal (1), github (1), command line (1)
> **Ports:** port 123 (1), port 48947 (1)
> **Prerequisites:** set up (2)
> **URLs:** [ntp.com](https://ntp.com) (1)

#### NEW: Amplification using memcached
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-amplification-using-memcached?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-amplification-using-memcached?u=76281980&t=0)** - NTP isn't the only protocol we can use to amplify a denial of service. There are many other amplification protocols which can be used. And one which deserves specific mention is the protocol used in the Memcached software.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-amplification-using-memcached?u=76281980&t=16)** Memcached is a third party tool used to cache objects in a systems memory.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-amplification-using-memcached?u=76281980&t=21)** And then retrieve those objects quickly.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-amplification-using-memcached?u=76281980&t=24)** Its used to speed up dynamic web applications and its management features can be accessed using TCP or UDP on port 11211 Let's have a look at an example of a Memcached exchange using Netcat I'll use Netcat to make a simple connection to port 11211 on a Memcached server and I'll issue the stats command We get a response from the server of about 2000 characters Which provides a respectable amplification factor of about 400 Of course using a TCP connection is quite safe and can't be used to support a denial of service attack But if the command were to be sent via UDP With no session set up and with a spoofed source address
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-amplification-using-memcached?u=76281980&t=75)** then this can be used to create a denial of service We can check whether a UDP Memcached service exists by sending a constructed UDP package with Netcat I'll use the echo command and pipe it to Netcat using the stats command once again This query returns only 840 bites So the amplification factor is lower.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-amplification-using-memcached?u=76281980&t=102)** But an attacker could use Memcached to store a larger data element and then recover it as part of the denial of service A memcached amplification attack is exactly what happened to GitHub on February the 28th 2018 When it was hit with a massive distributor denial of service attack.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-amplification-using-memcached?u=76281980&t=124)** The attack achieved 1.35 terabits per second.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-amplification-using-memcached?u=76281980&t=129)** Fortunately, GitHub was able to call on a DDOS scrubbing service to get rid of the Memcached data and within ten minutes the attack had ceased.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-amplification-using-memcached?u=76281980&t=139)** Some attacks have combined the use of denials of service and ransom notes With the ransom note being sent in the denial of service packet Memcached is one of the amplification methods which has been used is such extortion attempts With ransom demands of around $15,000 Memcached is a continuing threat whilst servers have it available on UDP and tools such as Memcached DDOS exploit which ironically is on GitHub, make it easy for attackers to deploy it.

> [!info]- Semantic Content
>
> **Env Vars:** udp (5), tcp (2), ddos (2), ntp (1)
> **Tools:** github (3)
> **CLI Commands:** make (2)
> **Ports:** port 11211 (2)
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Versions:** 1.35 (1)
> **Analogies:** such as (1)

#### NEW: When is a DDoS not a DDoS?
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=0)** - [Narrator] There have been a number of infamous denial of service attacks. And the predictions are for many more to come.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=7)** However, when a service goes down due to being flooded by incoming traffic, it isn't necessarily a cyber attack.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=16)** In 2015, the FCC passed what became known as the net neutrality legislation, which forced internet service providers to enable access to all content and applications, regardless of the source, and without favoring or blocking particular products or websites.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=34)** In 2018, the FCC decided to repeal the legislation, and to challenge individual states that passed their own net neutrality regulations.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=47)** The issue of net neutrality is one which has triggered quite passionate responses.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=53)** Viewers of the Last Week Tonight show were encouraged to file comments through the FCC's website, asking the FCC to preserve its net neutrality rules.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=64)** The next day, the FCC's website was unavailable.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=68)** The FCC chairman Ajit Pai, was quick to denounce the crash, as a distributed denial of service attack, citing the vast amount of targeted traffic as the cause of the system's downtime.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=81)** I claim to have evidence that it was a deliberate attack.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=86)** However, the FCC's office of the inspector general carried out an investigation, and determined that the claims were misleading.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=95)** The investigation concluded that at best, the published reports by the FCC were the results of a rash judgment and a failure to conduct adequate analysis to identify the true cause of the disruption to system availability.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=109)** Chairman Pai responded to the report by placing the blame on the former Chief Information Officer, David Bray.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=120)** FCC Commissioner Jessica Rosenworcel pointed to the FCC net neutrality decision as the root cause of the shutdown, stating that what happened was obvious.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=132)** Millions of Americans overwhelmed the online system, because they wanted to let the FCC know how distressed they were to see the FCC take away their internet rights.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=144)** Not all system outages are Denial of Service attacks.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/new-when-is-a-ddos-not-a-ddos?u=76281980&t=148)** Sometimes they're just due to poorly designed systems.

> [!info]- Semantic Content
>
> **Env Vars:** fcc (12)
> **Code Keywords:** let (1)
> **Definitions:** known as (1)
> **Speakers:** - [narrator] (1)


### 3. Wireless Denial of Service

> [↑ Back to Table of Contents](#table-of-contents)

#### Deauthenticating a wireless host
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=0)** - [Instructor] Home users and many business users are connected to their networks via wireless access point.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=5)** This form of access is very easy to attack to cause a temporary denial of service.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=10)** I'll open up a terminal window and use Airmon to check my wireless cards interface.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=17)** I can see that it's wlan0.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=19)** I'll now put the wireless card into monitoring mode so that it can detect the networks and hosts being used in the local area.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=29)** This shows that the monitoring device is now enabled as wlan0mon.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=34)** I'll start it listening to the wireless traffic and see what's active.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=43)** This display shows me the networks at the top and the clients at the bottom.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=47)** In the top part the BSSID is the hardware address of the access point.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=51)** And the service set identification or ESSID is an alphanumeric key up to 32 characters long which identifies the wireless local area network.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=61)** In the bottom part the station is the MAC address of the client.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=66)** I've got a remote connection open to my Windows 10 system and I'm running the performance monitor to generate some traffic across the air.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=74)** I'll open a command shell and look at the detailed network interface information.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=87)** This shows me the physical address of the wireless card.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=90)** I can see that it's 94-A1-A2-22-B1-C3.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=97)** Let's go back to Kali.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=99)** I can see that my network TPG-83NJ is running on channel eight.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=104)** So I'll set the wireless card to that channel also.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=112)** I can see the Windows 10 system with its station starting with 94, running in the bottom section.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=118)** I'll now run Aireplay to de-authenticate this device which will disconnect it from the network.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=123)** To do this I'll specify the access point BSSID with the -a option and the station physical address using the -c option.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=130)** I'll use the -0 option for de-authentication attack with a hundred packet streams to the target.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=139)** Okay we can see the streams are being sent.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=143)** When we check the remote access we can see that the Windows 10 system is no longer responding.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=150)** If the host is configured to automatically recover a lost network connection the disruption may be minor.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/deauthenticating-a-wireless-host?u=76281980&t=156)** However, where the host requires manual reconnection it will be off the air until someone notices and recovers it.

> [!info]- Semantic Content
>
> **Env Vars:** bssid (2), essid (1), mac (1), tpg (1)
> **Code Keywords:** interface (2), let (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. Application Denial of Service

> [↑ Back to Table of Contents](#table-of-contents)

#### Flooding HTTP using GoldenEye
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=0)** - [Prompter] Websites are often the target of denial of service attacks.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=4)** There are many tools accessed for attacking them.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=7)** One such tool is Golden Eye.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=9)** It works by creating a lot of open sockets in the target system.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=12)** Eventually consuming all available sockets.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=15)** Golden Eye is an enhanced variant of the original Hulk tool.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=20)** Golden Eye doesn't come with Carly, but we can download it easily enough.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=24)** I'm in Carly and I'm at the Golden Eye Github page.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=28)** And on the right, we can see the button to download it.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=31)** Let's do that.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=34)** I'll tell IceWeasel to save it.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=37)** We now have the Golden Eye zip file downloaded.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=39)** So I'll click on the blue down arrow to see all downloads.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=43)** And I'll double click to open it.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=49)** I'll select extract.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=52)** Other location.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=56)** Computer.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=58)** User.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=59)** Share.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=60)** This is my Carly tools directory.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=63)** I'll now press extract.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=65)** And the extraction completes.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=67)** And it extracts into the Golden Eye master directory.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=69)** I'll select show files.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=74)** And navigate down to Golden Eye master.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=78)** Now just right click.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=80)** And rename this to Golden Eye.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=86)** Okay, we're now set.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=89)** I've setup Windows 10, with the performance money to shown in one window.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=93)** And I've opened a command window, so that we can use the next up command, when we're ready to go.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=99)** I'll go into Windows 7 and connect to the Windows web 10 server.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=105)** Okay, the service is running just fine.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=108)** I've got a terminal window open in Carly.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=110)** First, I'll navigate to the Golden Eye folder.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=114)** I can check the options in Golden Eye, by entering goldeneye.py -h.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=126)** The two action options are -w and -s, the number of concurrent workers, and the number of concurrent sockets.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=133)** I'll take the defaults for the options.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=136)** Before starting, I'll put a rule in the Carly firewall, to drop reset packets.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=142)** I do this by typing: iptables -A OUTPUT -p TCP --tcp-flags
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=157)** rst rst -d 192.168.1.8 -j DROP.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=171)** Okay, I can now launch the attack, by entering: goldeneye.py [http://192.168.1.8](http://192.168.1.8).
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=183)** I'll poop into Windows 7, and I'll refresh the website.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=188)** And we can see the service is unavailable.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=191)** We cam see spikes of CPU activity happening, as the Golden Eye attack takes its toll.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=197)** I can enter net stat, and see all the connections.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=203)** That's how we launch a web server denial of service attacks.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-http-using-goldeneye?u=76281980&t=206)** When you find a vulnerable website, and you are testing, you should recommend that the number of sessions from a single IP address be limited where the service will be protected with a web application fire wall.

> [!info]- Semantic Content
>
> **Env Vars:** output (1), tcp (1), drop (1), cpu (1)
> **File Paths:** goldeneye.py (2)
> **Code Keywords:** let (1), protected (1)
> **Versions:** 192.168.1 (2)
> **Tools:** github (1), terminal (1)
> **UI Navigation:** click on (1), navigate to (1)
> **CLI Commands:** find (1)
> **URLs:** [http://192.168.1.8](http://192.168.1.8) (1)

#### Testing webapps using OWASP SwitchBlade
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=1)** - [Instructor] OWASP, the open web application security project is an initiative which identifies ranks and provides material to support testing of web vulnerabilities.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=12)** It's free to become part of the OWASP community and its material is free to use.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=17)** The OWASP top 10 threats is published annually and used as a reference for testing by many pentesters.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=25)** OWASP also provide some very useful testing tools such as the offensive web testing framework or OWTF and defensive capabilities such as app sensor.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=35)** Let's take a look at the OWASP's switchblade tool.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=38)** This is used to test how susceptible a website is to denial of service attacks.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=43)** The tool was originally written as an education tool for the OWASP community and has been made available into the creative commons license.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=51)** It runs as a windows application and can be downloaded as a ready to run zip file.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=58)** I've already downloaded and extracted switchblade into the switchblade subdirectory.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=63)** And we can start it by double-clicking gui.exe.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=73)** Switchblade has a fairly simple interface.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=75)** The dropdown box provides three types of attack that can be run.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=80)** Slow headers, slow POST and SSL renegotiation.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=85)** I'll run a slow POST attack.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=87)** Let's change the URL to our Metasploitable system on HTTP 10.0.2.8.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=99)** I don't need to use a proxy.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=102)** The general parameters are used to vary the amount of resources being focused on the attack and could be tuned according to your testing platform.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=110)** I'll change the rate to a thousand and this will create connections as fast as possible.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=118)** Let's look at the website on Metasploitable through our browser.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=123)** We can see the Metasploitable page, and this is running fine.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=127)** Now let's launch the switchblade attack.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=137)** I'll press the button called run attack.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=139)** We can see the connections have been made and the attack is underway.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=144)** Let's see what's happening on Metasploitable.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=147)** I'll refresh the webpage a few times and see what happens.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=155)** Okay, we're now waiting.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=156)** The web server is been flooded.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=163)** If we look at switchblade, we can see with my 298 connections and the remaining ones arid when the server became overloaded.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=173)** I can check on my Metasploitable server and use the netstat command to check the current connections.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=181)** We can see there's many connections open.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=186)** Okay, I'll cancel the attack and wait for the server to calm down.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=195)** I'll refresh the webpage and we can see it's working again.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=199)** That's an example of using switchblade to carry out application level attacks.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=204)** The slow POST is very similar to slow headers using the same feature of holding the connection open while the HTTP request is sent very slowly.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/testing-webapps-using-owasp-switchblade?u=76281980&t=214)** The SSL renegotiation is also similar but attacks the SSL negotiation handshake.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (6), post (3), ssl (3), http (2), owtf (1)
> **Code Keywords:** let (5), interface (1)
> **API Endpoints:** post  (3)
> **Analogies:** such as (2), similar to (1)
> **Versions:** 10.0.2 (1)
> **UI Navigation:** dropdown (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is an  (1)

#### Understanding BlackEnergy
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=0)** - [Instructor] There's been a lot of noise about an incident known as BlackEnergy as a result of attacks on the Ukraine critical infrastructure in 2014 reportedly by Russia.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=10)** The term BlackEnergy variously refers to a threat actor, a botnet and a piece of malware.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=15)** Let's have a look at what this really is.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=18)** A variety of botnets can be used to conduct DDoS attacks, and BlackEnergy is one of the most popular with over 4,000 deployments having been detected.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=27)** BlackEnergy started out as a web-based distributed denial of service botnet.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=33)** But in 2008, its authors made significant modifications to the original version, and BlackEnergy 2 is now used for a much wider range of attacks.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=43)** BlackEnergy is a sophisticated botnet, which consists of a command-and-control server and an implant.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=49)** It has a number of interesting features: It actively hides from anti-malware products using encryption; it operates by injecting code into system processes; and it can target more than one IP address on a host name, which makes it especially useful for multi-homed servers.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=65)** Once the implant is launched on the target computer, it allocates virtual memory, copies it decryptor code to the memory and then passes control to it.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=75)** It creates a decryptor driver with a random name and a DDoS extension in System32\Drivers.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=83)** A service for the driver, also randomly named, is then created and started.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=87)** The decryptor holds a 16-byte pre key, and this is used to create another key, which is used to decrypt the injection archive using RC4.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=96)** The malicious code dynamic-link library is then prepared for injection by remapping addresses, and the driver locates svchost.exe and allocates memory in its address space and injects the malicious code.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=110)** The DLL, which is injected into svchost.exe, is the main controlling factor in launching a DDoS attack from an infected computer.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=119)** The DLL contains two addresses for its command-and-control server to ensure it can communicate if one server is down.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=127)** It sends an HTTP request to the command-and-control server, which responds with an encrypted XML configuration file.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=134)** This contains instructions on the targets for the DDoS and the attack modules to use.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=140)** If the implant doesn't have a module or a newer version is available, it will download it and copy it to the server's host memory space.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=147)** The attack can then commence.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=150)** Attack modules will be regularly downloaded to the implant by the BlackEnergy command-and-control server and stored in encrypted form on the host computer's hard drive as sdi.sys in System32\drivers.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=165)** The implant also uses a system driver, syssrv.sys, to hide the implant's processes and files.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=173)** BlackEnergy can run a number of DDoS attacks with the following commands: icmp, an ICMP ping flood; syn, a TCP SYN flood; udp, a UDP traffic flood; an HTTP GET request flooder; data, a binary packet flooder; and a DNS request flooder.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=194)** In addition to the plugins, BlackEnergy also has a set of commands: rexec, which is used to download and execute a remote file; lexec, which executes a local file on the infected computer; http to send an HTTP request; upd, or update, which updates the implant; setfreq to set the frequency for contacting the command-and-control server; stop to stop attack activity; wait, a timed wait before checking again; and die to terminate execution of the implant.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=230)** BlackEnergy, like many botnets, comes as a botnet construction kit, and a command-and-control server is built for a specific campaign.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=238)** It's not readily available from the internet but comes from Russian-language hacker forums and costs around $40.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=245)** The command-and-control server is built using PHP and MySQL, typically running on Linux, and has a simple PHP GUI interface.
>
> **[4:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=255)** It maintains a table called opt, which contains the parameters of the DDoS attack, and the table called stat to track the size of the botnet.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=263)** The builder runs an encryptor over the generated implant, thus making it invisible to anti-virus products.
>
> **[4:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=270)** A BlackEnergy attack on Ukraine's power infrastructure was announced after the event by the Ukrainian government on December the 28th, 2015, and it was attributed by them to the Russian special forces.
>
> **[4:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=284)** The power outage had occurred in the Ivano-Frankvisk region on the 23rd of December, which suggests that the attack had been successful.
>
> **[4:53](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=293)** In this event, the payload called KillDisk was used to destroy target systems.
>
> **[4:57](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=297)** The attack was accompanied by a flood of telephone calls to the technical support numbers of the power companies.
>
> **[5:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=303)** Researchers have designated the attackers as the Sandworm Crew.
>
> **[5:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=309)** Malware samples obtained during the attack indicate that the same malware was used earlier in the year to target the Ukrainian media sector.
>
> **[5:17](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=317)** The samples indicate discreet campaigns in June, July, October and December.
>
> **[5:23](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=323)** This spate of attacks was not the first time the Sandworm group had targeted Ukraine.
>
> **[5:27](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=327)** An earlier incident took place in 2014, just prior to the NATO summit in Wales, using spear phishing and a malicious attachment purporting to be about Russian terrorists.
>
> **[5:39](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=339)** The Ukrainian CERT also commented on media attacks, which took place in October.
>
> **[5:45](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=345)** At least some of the targets were hit with a new version of BlackEnergy, designated BlackEnergy 3.
>
> **[5:51](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=351)** Ukrainian media reported that the power outage was caused by malware disconnecting power stations from the grid.
>
> **[6:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-blackenergy?u=76281980&t=360)** While BlackEnergy has evolved, the threat of denial of critical infrastructure services continues to be its primary focus, and all indications are that this is a continuing and evolving threat.

> [!info]- Semantic Content
>
> **Env Vars:** http (3), dll (2), php (2), rc4 (1), xml (1)
> **CLI Commands:** php (2), mysql (1)
> **Code Keywords:** let (1), module (1), interface (1)
> **Definitions:** is a  (2), known as (1)
> **API Endpoints:** get  (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### Killing the FTP service
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=1)** - [Instructor] Websites aren't the only targets for denial of service attacks.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=5)** Other services, such as the File Transfer Protocol, FTP, are internet-facing, and so also at risk of being attacked.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=13)** I'll use my Windows 10 machine, it's IP address 10.0.2.15, as the target for this attack.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=20)** I've installed a small FTP server, version 0.99.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=24)** This is a very simple FTP server and it doesn't require any configuration.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=29)** I'll press the start icon to activate the server.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=32)** Okay, it's now listening for incoming connections.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=37)** I've got a terminal window open in Kali, so let's connect to the FTP service using Telnet.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=43)** Telnet 10.0.2.15, space 21.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=49)** Okay.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=52)** We can see that the FTP server displays the message, connecting, on its panel.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=59)** Back in Kali, I'll now enter a malicious command, percent S, percent S.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=68)** Okay, the FTP server panel has disappeared.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=72)** The service has crashed.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=74)** This is because it doesn't correctly handle the string percent percent S on input, resulting in an internal memory corruption.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=82)** Okay, that's an example of a simple denial of service caused by an internal malfunction triggered from the incoming packet.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=89)** This is a foreground application and it's pretty obvious that it's no longer running.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/killing-the-ftp-service?u=76281980&t=93)** However, many server applications operate in the background and there may be no visible indication that they stopped working.

> [!info]- Semantic Content
>
> **Env Vars:** ftp (6)
> **Versions:** 10.0.2 (2), version 0 (1)
> **Code Keywords:** require (1), let (1)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### RangeAmp attacks on the CDN
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/rangeamp-attacks-on-the-cdn?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/rangeamp-attacks-on-the-cdn?u=76281980&t=1)** - [Instructor] Content delivery networks are critical to getting data from where it's stored to users that need it.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/rangeamp-attacks-on-the-cdn?u=76281980&t=7)** A team of Chinese academics claimed to have found a new way of using HTTP to amplify web traffic and bring down content delivery networks.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/rangeamp-attacks-on-the-cdn?u=76281980&t=16)** The attack exploits implementation flaws in the HTTP range request.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/rangeamp-attacks-on-the-cdn?u=76281980&t=23)** There were two specific attacks identified, the RangeAmp Small Byte Range attack which uses a CDN server to amplify the attack on a target.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/rangeamp-attacks-on-the-cdn?u=76281980&t=32)** The second is the RangeAmp Overlapping Byte Ranges attack.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/rangeamp-attacks-on-the-cdn?u=76281980&t=36)** In this case, the attack travels through the CDN being amplified as it goes.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/rangeamp-attacks-on-the-cdn?u=76281980&t=41)** The result can be the CDN servers crash or are unable to perform their delivery function.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/rangeamp-attacks-on-the-cdn?u=76281980&t=47)** The amplification factor varies depending upon the file size of the targets, but ranges from over 1000 to close to 50,000 for the Small Byte Ranges attack and around 3000 for the Overlapping Byte Ranges attack.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/rangeamp-attacks-on-the-cdn?u=76281980&t=61)** While many of the vendors affected have rolled out patches, the research does highlight the potential fragility of the global network.

> [!info]- Semantic Content
>
> **Env Vars:** cdn (3), http (2)
> **Code Keywords:** case, (1), function (1)
> **Speakers:** - [instructor] (1)

#### Profiling Killnet
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=0)** - The Killnet Group is one of the many cyber criminal groups that have become involved in or are attempting to benefit from the Russia Ukraine conflict.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=9)** Killnet was originally the name of an online tool that criminal subscribers could rent to conduct distributed denial of service attacks.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=18)** As the crisis in Russia and Ukraine emerged, the people behind Killnet appeared as a pro-Russian cyber warfare group, also using the name Killnet.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=28)** This blurring of tools and group names is not uncommon in the cyber criminal underground.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=33)** The newly emerged Killnet group was originally led by a hacker with the handle Killmilk who was associated with the Killnet tool.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=42)** Killmilk resigned as leader of the group in July, 2022 and it's now run by an individual known as Blackside with more serious credentials through his ransomware activities.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=54)** Killnet now appears to have established loose ties with the Russian State Security Services.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=59)** And notably has published posts on Telegram encouraging Putin to mount nuclear attacks on the West.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=66)** In a somewhat grandiose gesture, the group declared cyber war on a number of countries, including Ukraine.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=74)** Killnet has a number of signature attacks.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=78)** The first is a dictionary based getting attack on the Secure Shell Service.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=83)** With a history of targeting Minecraft and TeamSpeak servers.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=87)** They use SYN flood attacks and send large numbers of GET POST messages in attempt to achieve service denial.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=96)** They use Script kiddie tools, such as MDDos and the low orbit ion cannon as well as various network stressor tools.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=104)** Killnet's DDoS attacks are not particularly effective.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=108)** At best lasting a few hours and generally doing little or no damage.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=112)** However, Killnet is responsible for a number of high profile if low impact attacks, including a DDoS attack on the Romanian government websites from the 29th of April to the 1st of May, 2022.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=126)** These were followed a few days later by attacks against the Moldovian government.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=130)** Also, in May, the group attacked a number of websites in Italy.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=134)** They were able to take down the Italian Senate's website for about an hour, but failed in their attempt to disrupt the Eurovision Song contest.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=144)** The tactics changed later in 2022 with claims of an attack in which they were able to breach and exfiltrate information from Lockheed Martin.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=155)** However, Lockheed Martin denied there was any breach.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=158)** No evidence has been made public and in the end, this appears to be just fake news.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=164)** In way of Postscript, Killnet appears to have reverted to its roots as a criminal enterprise.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=170)** In January, 2023, Killnet was identified as being responsible for a minor denial of service attack on the public website of the University Medical Center of Groningen in the Netherlands.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/profiling-killnet?u=76281980&t=184)** In February, 2023, Killnet and another cyber crime group called the Deanon Club partnered to form the Infinity team offering a range of hacking services and resources.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2)
> **API Endpoints:** get  (1), post  (1)
> **Env Vars:** syn (1), post (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - the (1)


### 5. SIP Service Attacks

> [↑ Back to Table of Contents](#table-of-contents)

#### Flooding a SIP server
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=0)** - [Instructor] Voice calls over the internet, often called voice over IP or VOIP use special phone sets or software to convert analog voice signals to data and then send it across the internet as data packets.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=13)** To do this, the VOIP service uses what's known as a SIP proxy server.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=17)** SIP is the session initiation protocol and is used to set up the data connection for a call and another protocol, the real time transfer protocol, RTP, is used for voice data exchange.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=31)** SIP doesn't come pre-installed on standard operating system distributions.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=35)** There are many managed service VOIP applications, such as Skype and Viber or we can download and install a local service.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=43)** In this course, I'll use My VOIP App.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=47)** This can be downloaded pre-configured for between 20 and 500 users.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=52)** I've selected the 20 user version for my Windows 10 system as the host.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=56)** This is a simple download and installs seamlessly.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=61)** I've already downloaded and installed my VOIP service and I've started the system.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=65)** The main form provides a number of action buttons.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=68)** I'll click the local users and we can see there are four users registered: 100, 101, 102, and 103.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=79)** I've also installed the My VOIP App SIP phone on this system and It's running in the small panel beside the main form.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=86)** We can see it has the username 101.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=89)** If I press file, SIP account, I can see its basic setup details.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=96)** I've also installed a SIP phone on my Windows 7 system with the username 100.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=103)** I can make a call to 101 and we can hear the hold music.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=110)** I can answer that call.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=111)** I can now have my conversation and then I can hang up.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=115)** To establish a SIP session, there's a handshake process within the SIP protocol which needs to take place when a SIP proxy server receives an invite request.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=125)** It starts by looking up the called number in its registry.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=128)** Once found, it can then pass on the invite request.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=131)** Both numbers then ring.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=133)** If the called number answers, the acknowledgements are made and voice data is then carried on the data channel using the real time protocol.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=141)** In doing this, the SIP proxy needs to maintain the request in its internal buffers in order to process the message.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=148)** These messages will at least be kept until the last okay message is sent to terminate the call setup handshake.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=154)** Also, the server normally keeps a copy of forwarded messages for further processing.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=160)** This all takes resources and the proxy can become highly loaded if a large number of requests are received.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=168)** I'm in Kali, and I'll open the applications menu and click on vulnerability analysis.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=177)** This opens up four sub-menus.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=180)** The bottom of which is VOIP tools.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=182)** I'll select invite flood.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=185)** This opens a terminal window and displays the invite flood help.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=189)** I'll start the attack by sending one million invite requests.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=194)** Right, we can see the packets streaming out.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=199)** Back in Windows 7, I'll make a call.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=206)** There's no response.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=208)** The call can't get through.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=213)** And we've hung up.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=214)** I'll try again.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=220)** Again, I get a hang up.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=223)** Okay, the flood has stopped.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=232)** I'll call again, and I can get through.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=236)** We can see that the My VOIP App server is vulnerable to flooding.
>
> **[3:59](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=239)** This is a common issue with SIP servers.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=242)** In practice, the SIP server will sit behind a firewall and can't be directly accessed.
>
> **[4:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=248)** Many modern firewalls are able to detect denial of service attacks by applying rate limiting when the attack reaches a certain level of connections or data throughput.
>
> **[4:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=258)** These are normally quite effective.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=261)** A new generation of denial of service attacks, called pulsing or wave attacks, were first reported by Asta Networks in 2001.
>
> **[4:31](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=271)** This report was based on a six month period of analyzing backbone network traffic and discovering the presence of pulsing zombies.
>
> **[4:40](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=280)** Instead of generating a constant flood of attack packets, these zombies continuously sent out short bursts of attack packets to evict him.
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=287)** In doing so, the delay in processing the packets meant that the queued load continued to increase.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=294)** In 2008, a researcher at Canterbury University published a paper on launching a denial of service attack targeted at the asterisk SIP server.
>
> **[5:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=303)** Using a pulsing flood technique, a DDoS prevention firewall was in line, and a standard denial of service attack at maximum flood rate was unsuccessful.
>
> **[5:12](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=312)** However, the research then examined whether the denial of service could be run at a level which did not trigger the firewall but was sufficient to have an effect upon the SIP server.
>
> **[5:23](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=323)** By increasing the packet rate to the point just prior to the firewall triggering its defensive mechanisms, and then backing off, and then doing this again and again, over 90% of the packets could be injected inside the firewall.
>
> **[5:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=336)** This proved to be higher than the SIP server could sustain and the denial of service attack was successful.
>
> **[5:42](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=342)** Xiapu Luo from the Hong Kong Polytechnic University in Kalune has researched the issue of pulsing attacks with a view to detecting and defeating them with a technology called Vanguard.
>
> **[5:53](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=353)** This technology uses the standard snort intrusion detection system.
>
> **[5:57](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=357)** Supported by a Vanguard module which analyzes network traffic and in particular, the rate change points.
>
> **[6:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/flooding-a-sip-server?u=76281980&t=365)** The laboratory results for this mechanism have been impressive.

> [!info]- Semantic Content
>
> **Env Vars:** sip (15), voip (8), rtp (1)
> **Code Keywords:** this, (2), pass (1), module (1)
> **Prerequisites:** setup (2), set up (1), install (1)
> **CLI Commands:** make (2)
> **UI Navigation:** open the (1), click on (1)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **Analogies:** such as (1)


### 6. Ransomware

> [↑ Back to Table of Contents](#table-of-contents)

#### Explaining ransomware
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=0)** - (Narrator) One of the early uses of ransomware was in the AIDS information introductory diskette.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=6)** Circulated to conference attendees in 1989 by Dr. Joseph Popp.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=12)** After the diskette had been used to specify a number of times, the malware would start executing, and hide the directories, encrypt the files, and then demand payment of one hundred and eighty nine dollars to be sent to a PO box in Panama.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=26)** Popp was caught and declared mentally unfit and agreed to donate the proceeds of his crime to AIDS research.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=33)** There was little further development of ransomware, until around 2005.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=38)** But since then, it has become a significant source of revenue for cyber criminals.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=42)** It is now the prevalent form of exploitation vector in financial crime.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=47)** It's easy to create a ransomware payload, and it's a popular way of monetizing a network of compromised computers.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=55)** The basic concept used in ransomware is cryptography, the science of making an intelligible message into something that isn't understandable, but can, with special knowledge, be turned back into the original, intelligible form.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=70)** The criminal uses a cyber attack to get access to a victim's files, and encrypts them.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=75)** The files are then useless unless the victim pays the attacker for the key to recover them.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=80)** With figures of about two hundred and fifty dollars being common, this price point is one which is affordable, provides a reliable outcome, and is much more convenient than trying to get any result by calling in law enforcement.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=94)** Crylock is an example of a malware payload.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=96)** Usually delivered via the cutwail spambot, using the UPATrial ZeuS botnets.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=103)** This typically enter a system by means of a phishing attack.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=106)** The original emergence of ransomware used symmetric cryptography to encrypt files and stored the key somewhere hidden on the target disc.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=115)** When the ransom was paid, the criminal could then provide software or a service to recover the key and decrypt the files.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=122)** This approach made it relatively easy for the antivirus companies to recover the key offline.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=127)** This then lead the cyber criminals to evolve their methods.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=131)** More advanced ransomware uses asymmetric cryptography.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=135)** The payload activates and selects whatever files it can find on the local disc, and any shared drives accessible from the target computer, and encrypts them.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=143)** While the file encryption still takes place using asymmetric algorithm and key, the malware calls to its commander control server for a public encryption key, and will use this to encrypt the symmetric key before it stored on disk.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=157)** A ransom message is then sent to the victim.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=159)** On paying the ransom, the victim is given a payment code which can be entered into the malware and verified before releasing the private asymmetric key to unlock the keys to the files.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=172)** Ransomware continues to evolve.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=174)** Some ransomware takes particular measures to protect the criminals by using the Tor system to hide itself when communicating with the victim.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=182)** Tor is a network of computers used to carry messages which don't allow trace back, and enable its users to maintain anonymity in whatever they do.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=192)** Some new ransomware uses elliptic curve cryptography, showing that attackers are keeping up with advances in the security field as much as the defenders are, if not better.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=201)** There are many different ransomware programs active currently, including Cryptolocker, Torrentlocker, Cryptowall, Petya, and Server.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=210)** Ransomware is getting increasingly sophisticated and some can be downright creepy.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/explaining-ransomware?u=76281980&t=216)** Ransomware has proved to be lucrative for the cyber criminals and as a threat, it's here to stay.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), private (1)
> **Env Vars:** aids (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)

#### Understanding Cryptolocker
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=0)** - [Instructor] Cryptolocker has appeared in many evolutions.
>
> **[0:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=3)** Let's take a look at how one of the more recent versions works.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=7)** This version uses asymmetric encryption and bitcoin payment.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=11)** The Cryptolocker ransomware is typically distributed through a botnet.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=15)** When it first infiltrates the target, it copies itself onto disk with a randomly generated executable name.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=22)** It then includes a startup command in the registry so that it can restart after a reboot.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=28)** When Cryptolocker starts up, it attempts to communicate with its command and control server.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=33)** It does this using its domain generation algorithm, as is usual with contemporary malware.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=39)** It sends a message containing the version, the date, time of build, and the target name.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=44)** If successful, it receives from the server a public key and the corresponding bitcoin address.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=51)** A key is added to the registry with these values and a wallpaper file created containing instructions on how to pay the ransom.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=59)** Cryptolocker then selects the files that it wants to encrypt.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=62)** These include JPGs, DOCs, spreadsheets, PowerPoint files, and a lot more.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=68)** A symmetric key is generated for each file to be encrypted, and the file is encrypted using AES.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=74)** The key is encrypted using the public key that was sent from the command and control server, and the encrypted key is then appended to the encrypted file.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=83)** The paths to the document are stored in the registry.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=88)** The ransom message is then displayed.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=90)** Cryptolocker has a countdown timer, which provides a window of opportunity for the victim to pay the ransom and get the private key.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=98)** Once this countdown finishes, the private key is destroyed, and the files can never be retrieved.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=104)** Payment of the ransom is made using bitcoins.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=107)** Other variants use alternative anonymous payment methods, such as U.CASH, CASHU, or prepaid cash money cards.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=114)** Once the victim pays the ransom, a transaction ID is provided.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=118)** The victim can then enter this into the Cryptolocker program that is running.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=122)** The private key is then sent to the victim, and the decryption process begins.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=128)** Cryptolocker is distributed via spam email messages or from a malicious website, and the original malware infects just the computer on which it lands.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=137)** Where a number of systems in a target network have infected, that's typically because it's been infiltrated through a botnet, which owns all of the target systems.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=146)** However, a recent variant of Cryptolocker has the ability to spread between removable drives using activation keys for tools such as Adobe Photoshop and Microsoft Office as its vector.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-cryptolocker?u=76281980&t=158)** This makes it much more dangerous once it gets a foothold in a network.

> [!info]- Semantic Content
>
> **Code Keywords:** private (3), public (2), let (1)
> **Env Vars:** aes (1), cash (1), cashu (1)
> **Analogies:** such as (2)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### Understanding Petya
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=0)** - Petya is an example of ransomeware.
>
> **[0:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=2)** Released in March 2016 but is different to earlier ransomware in that it encrypts the master file table on a victim's Windows system.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=11)** The result of this is that the victim cannot access any of their files.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=16)** This is much quicker and more comprehensive but the file data does still remain on disk in accessible form, albeit difficult to piece together.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=24)** The malware has been used in a malicious email campaign which targeted the human resource departments of German companies.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=33)** Staff in the HR team received emails from an applicant seeking a position in the company.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=39)** The email would include a hyperlink to a Dropbox storage location to download the applicant's CV.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=45)** The Dropbox actually contained a JPEG of the applicant and a self-extracting executable.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=50)** The first action of the executable, once loaded, was to connect to it's commanding control server and download the Petya malware onto the victim computer.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=59)** When Petya first starts, it changes the master boot record to disable booting in safe mode and boot to the malware.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=66)** Once this is done, it executes the malware which displays a screen that looks like the Microsoft disk checking function.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=74)** However, it isn't checking the disk.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=76)** It's encrypting the master file table.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=79)** At this point, the files have become inaccessible.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=82)** Once this completes, a ransom message is displayed instructing the user to visit the attacker's payment collection site via the Tor system.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=91)** The collection site then instructs the victim to pay just under one bitcoin, which is just over $400.00 and will then provide the decryption password.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=101)** In April 2016, researchers announced that they could defeat the Petya malware.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=106)** The initial release of Petya malware has reverted to the earlier strategy of storing the key on disk.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=111)** The solution requires that the disk be removed from the target computer and attached to a forensics system to extract 512 bytes from sector 55 on the disk.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=124)** A tool has been developed for doing this by Fabian Wosar.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=127)** Once the information has been extracted, it can be fed into a website and the password can be retrieved.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=132)** The master file table can then be decrypted and the system rebooted.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/understanding-petya?u=76281980&t=137)** Unfortunately, it won't take long for this weakness to be addressed and future versions of Petya will almost certainly move to a more robust asymmetric encryption scheme.

> [!info]- Semantic Content
>
> **Code Keywords:** self (1), function (1)
> **Exercise Files:** download the (2)
> **Env Vars:** jpeg (1)
> **Versions:** 400.00 (1)
> **Definitions:** is an  (1)
> **Speakers:** - petya (1)


### 7. Mitigation Techniques

> [↑ Back to Table of Contents](#table-of-contents)

#### Defeating denial-of-service attacks
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=0)** - [Instructor] There are a number of methods that can be used to defeat denial of service attacks, or at least to try.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=5)** These come into one of two categories: mitigation through design and operational mitigation.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=10)** Mitigation through design includes establishing the capability for priority-based servicing, egress filtering, and ingress filtering.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=20)** Operational mitigation includes IP address verification and dropping spoofed packets, rate limiting, ACLs, understanding the characteristics of malicious traffic and dropping it, and understanding the characteristics of normal traffic and dropping anomalies.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=38)** Priority-based servicing of traffic can be achieved by ensuring network traffic is marked with a priority attribute, and network queues are managed by priority.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=47)** This is a common voice call service offered by telecommunications companies to support responders under emergency conditions.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=55)** Under normal conditions, all traffic gets processed.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=58)** But when congested, the traffic queues are ordered by priority, and lower priority packets discarded to ensure decongestion.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=66)** Similarly, priority-based servicing of data network traffic can be implemented, so that, when a flood of packet data comes in, it can be deprioritized to ensure legitimate traffic gets through.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=78)** A similar mitigation is aggregate-based congestion control, or ACC, in which aggregates are common packets, such TCP SYN and ICMP echo.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=89)** An ACC, once detecting an attack, will maintain its connection and attempt to determine the aggregates causing the congestion, and control it.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=98)** It may also request upstream routers to apply limitations to the packet stream.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=104)** NetBouncer is an older example of a priority approach.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=108)** NetBouncer emerged from the DARPA fault-tolerant networks program.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=112)** It's a client legitimacy mechanism that's positioned at the network's Internet gateway, and allows packets only from legitimate clients or users.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=120)** Several tests for legitimacy are performed on the client, including a ping to see whether there's a real client at the packet source address, and a reserve Turing test, such as a CAPTCHA.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=130)** Other tests investigate whether an ongoing connection is consistent with the protocol specifications, and if not, NetBouncer terminates the connection.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=140)** Once the client has been proven legitimate, it's added to the pool of legitimate clients and given higher priority than not yet legitimate clients.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=148)** The pool is managed using quality of service techniques and guarantees fair sharing of resources between all the legitimate clients.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=157)** To prevent an attacker from inheriting the credentials of a legitimate client, the legitimacy expires after a certain time, and needs to be reassessed, using the same or a different test.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=170)** Egress filtering is a form of packet inspection, carried out as packets exit the network perimeter.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=176)** It doesn't stop incoming attacks, but can stop attack sources sending attacks out.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=181)** This is done by establishing rules to detect known bad packets, such as source address spoofing, and to stop connections to known command and control servers.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=190)** Ingress filtering is used to drop packets where they can be recognized as malicious.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=195)** An example would be a packet with a source address that could not possibly have come from its originating network.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=200)** This requires network context at design time, and is an approach useful in controlling business-to-business network connections and intranetwork segment traffic.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=211)** Spoofing a source address is a common tactic in denial of service attacks.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=215)** And if we can identify a source address as spoofed, we can drop the packet with certainty that it's an attack.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=221)** However, real-time source address verification is not a trivial issue to solve.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=226)** One approach is to have a traceback mechanism, whereby there's evidence to show the route the packet followed on its way to our network.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=234)** A number of protocols and methods, such as iTrace, have been proposed to do this, but the workload involved make them suitable for investigations, rather than real-time verification.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=244)** Some subsequent work has been done on efficient traceback methods, but this currently remains in the academic realm.
>
> **[4:12](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=252)** A common method used in firewalls to protect against DDos, is to have a rate limiting mechanism, whereby floods of packets of a similar type, for example, NTP packets, can be dropped once they reach a certain point.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=264)** Repose is an open-source middleware platform, which provides a good example of a rate limiting filter.
>
> **[4:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=270)** It can be installed as a proxy server, protecting internal servers from client-side flooding.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=275)** The proxy server deployment is known as valve.
>
> **[4:38](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=278)** It can be installed on the Debian platform as a service.
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=281)** Repose can be configured using XML scripts to limit how many requests per time units are allowed to be made.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=288)** Rate limiting can be by IP address or user.
>
> **[4:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=292)** In addition, Repose can limit the size of content to defeat a large packet denial of service attack.
>
> **[4:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=298)** Commercial equipment, such as a Cisco Catalyst, also provide DoS protection through configuring rate limiting on the quality of service, to limit the amount of a particular type of traffic that will be accepted.
>
> **[5:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=310)** In some devices, the rate limiting can be set in hardware registers to minimize latency.
>
> **[5:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=315)** ACLs can also be used to stop denial of service attacks.
>
> **[5:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=318)** However, because they're configured specifically for source IP addresses, they're usually applied as a denial of service response once an attack has been detected.
>
> **[5:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=328)** Characterizing normal traffic is a useful way of detecting attack, especially when the characteristics of protocols can be predicted.
>
> **[5:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=336)** This normally involves training the detection system by monitoring traffic with the network in a known normal state.
>
> **[5:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=343)** Metrics are often used in network characterization, with thresholds to reflect the extent of normal.
>
> **[5:49](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=349)** TCP normal for a network can be determined through a process of training to determine the normal ratio of sent to received packets.
>
> **[5:56](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=356)** Anything significantly above this is likely to be malicious.
>
> **[6:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=360)** UDP normal can be similarly determined, looking at the number of allowed sources per destination, the number of packets per source and the rate of sending and receiving.
>
> **[6:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=370)** ICMP normal can be assessed by looking at the number of ICMP echo, timestamp, and information request packets in the overall aggregate traffic flow.
>
> **[6:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=380)** This should be relatively static within reasonable bounds, and similar characteristics can be designed for other protocols.
>
> **[6:26](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=386)** We've seen there are some approaches to DoS mitigation that can be deployed, and some are more successful than others in practice.
>
> **[6:32](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/defeating-denial-of-service-attacks?u=76281980&t=392)** However, right now, it's fair to say that the attacker has the upper hand.

> [!info]- Semantic Content
>
> **Env Vars:** icmp (3), acc (2), tcp (2), syn (1), darpa (1)
> **Definitions:** is a  (4), is an  (3), known as (1)
> **Analogies:** such as (4), for example (1)
> **Code Keywords:** try. (1), this, (1), type, (1), static (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** itrace (1)
> **Speakers:** - [instructor] (1)

#### Commercial anti-DOS services
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=0)** - [Instructor] There are a number of managed service vendors that offer Anti-DoS capabilities.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=5)** CloudFlare is one of these, offering a set of security solutions which are cloud-based.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=10)** It's strategy for preventing attack includes filtering black listed sites, customer side white lists, detecting attack signatures, web application fire wall, and port filtering.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=22)** Of particular interest it offers network-level DDoS protection by recognizing the common SIN, UDP, and ICMP flooding attacks.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=30)** It also offers application level attack mitigation by managing traffic searches.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=35)** CloudFlare leverages it's knowledge of attack characteristics on one customer, to then protect it's customer community as a whole.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=43)** Akamai is a well known content delivery service for the cloud, and it offers one of the most popular DDos protection services.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=51)** Akamai's prolexic network provides more than 2.8 terabits per second of attack mitigation bandwidth.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=57)** It consists of 6 data scrubbing centers around the world, with network capacities distributed among multiple tier 1 carriers, and can protect against all known types of DDoS attacks, at the network, transport and application layers.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=72)** Google has launched Project Shield, a free service for websites which host news feeds.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=78)** This service provides Anti-DDos protection through a reverse proxy.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=82)** This receives traffic from the internet, checks it, and filters out bad traffic using Google's propriety methods, and sends safe traffic through to it's destination.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=93)** Project Shield also acts as a web server cache, enabling web pages to be served directly from Google's Cloud infrastructure, rather than requiring delivery directly from it's source.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/commercial-anti-dos-services?u=76281980&t=103)** This takes a significant load off a web server, whether that server is under attack, or not.

> [!info]- Semantic Content
>
> **Env Vars:** sin (1), udp (1), icmp (1)
> **Versions:** 2.8 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Detecting P2P attacks with PeerShark
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=0)** - [Instructor] Peer to peer, or P2P networks are those in which there is no central server and all activity is managed by self-organizing nodes on the network.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=10)** With many nodes being not only consumers of the service, but part of its infrastructure.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=15)** One of the most significant P2P networks is Skype.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=19)** The number of P2P networks fluctuates, but with the rapid emergence of the internet of things, there's a new role for P2P to play at the IoT device level.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=29)** This is already being seen in traffic lights systems which use node to node communications at the end points.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=35)** Traditional botnets operate around a central system of command and control servers.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=40)** These form a single point of failure and are prime targets for take down operations which neutralizes the botnet.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=47)** As P2P networks have no centralized server, they lack a single point of failure.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=53)** This resilience has attracted the attention of botnet owners who are now building botnets in which implants or bots communicate, pass on commands, and update other bots in a P2P manner.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=64)** Such botnets have proved to be extremely resilient.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=67)** Storm worm is an example of such a botnet being prevalent in 2008 and infecting over a million computers.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=75)** PeerShark is an analytical tool used to detect P2P botnets by differentiating P2P botnet traffic from P2P network traffic.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=85)** It uses behavior monitoring and so can detect botnets whether or not traffic is encrypted, a big advantage of contemporary botnets.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=95)** PeerShark focuses on observing the different conversations which happen between P2P peers.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=100)** The conversations are extracted from packet headers, either in real time or after the event from network traffic captures.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=108)** A set of features is extracted, which classifies the network behavior.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=112)** For example, the duration of the conversation, the end to arrival time of packets, the amount of data exchanged, and the number of packets exchanged.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=121)** Conversation monitoring is becoming a much more powerful approach as big data analytics are being applied to security monitoring.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=129)** The ability to monitor conversations for slow and low activity, such as B connect, enables detection of the more stealthy botnets.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=137)** PeerShark has four major components.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=140)** The first is the packet filtering module.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=143)** This takes for all packet data and isolates those which have a valid IP for header.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=148)** From each packet, the source IP, destination IP, payload, length, and timestamp are extracted and stored for future use.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=156)** The second is the conversation creation module.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=159)** This takes the output of the packet filtering module and creates a list of conversations by aggregating packets according to peer addresses.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=166)** The conversation aggregation modules is used to aggregate the conversations created in the conversation creation module.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=175)** This can take conversations that are spread by hours or days and bring them together into a single view of the P2P conversation characteristics.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=184)** The final module is the classification module, which uses supervised machine learning algorithms for training its model and classifying the information coming from the earlier modules.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=197)** PeerShark was evaluated using network trace data sets obtained from the University of Georgia.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=203)** Data from two P2P applications, eMule and uTorrent, and two P2P botnet applications, Waledac and Storm, were used as test traffic.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=215)** Network packet captures were used to create and then further aggregate conversations.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=219)** And then used to create a training data set for each application.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=224)** 50,000 conversations of each application were used.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=228)** Subsequent deployment of PeerShark after training resulted in a classification accuracy of about 95%, with a very low false positive rate.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=238)** PeerShark is clearly very effective at classifying known P2P systems.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/detecting-p2p-attacks-with-peershark?u=76281980&t=243)** PeerShark does not handle unknown P2P networks as it has no training for them and further research is required to incorporate additional classification techniques.

> [!info]- Semantic Content
>
> **Env Vars:** p2p (15)
> **Code Keywords:** module (6), self (1), pass (1)
> **CLI Commands:** node (2)
> **Code Identifiers:** emule (1), utorrent (1)
> **Definitions:** is an  (2)
> **Analogies:** for example (1), such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### NIST guidance on mitigating DDOS
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=1)** - [Instructor] NIST in December, 2019 issued the special publication, 800-189, Resilient Interdomain Traffic Exchange: BGP Security and DDoS Mitigation.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=14)** This publication is written for enterprises and internet service providers.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=18)** And focuses on the border gateway protocol used to manage internetwork paths.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=24)** Let's have a look at what guidance it provides on mitigating distributed denial of service attacks.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=31)** One of the events which can lead to a denial of service is internet address prefix hijacking.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=37)** Which occurs when a border gateway router advertises itself maliciously as owning a specific internet subnets.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=44)** Referred to in the publication as an autonomous system.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=48)** Traffic for the real destination can be hijacked into the domain of the malicious router.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=53)** This can be used to inspect traffic or achieve a denial of service.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=59)** There are a number of tools that can be used to monitor for prefix hijacking.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=64)** An open source one being Artemis.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=67)** This is designed to provide passive monitoring and detection and active user defined mitigation.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=74)** Here we can see an example of a hijack record in Artemis.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=80)** Border gateway protocol updates occur regularly and include an AS path which is used to show the autonomous systems in the proceeding path and is used to implement routing policies.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=91)** A malicious AS could modify or remove entries in the AS path.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=96)** When the malicious update is propagated, the ASs upstream are deceived to believe that the path to the advertised prefix by the adversary AS is shorter and so use it.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=107)** BGP table exchanges can also be used maliciously to achieve a denial of service by flooding a border router.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=114)** Border routers can have up to a million routes in their tables.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=118)** And by spoofing a table exchange request to many highly populated routers, the target router can be dossed.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=127)** The NIST publication lists 39 security recommendations to protect the control plane and BGP protocol.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=135)** And an additional 26 controls to protect against reflection attacks and distributed denial of service.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=142)** The latter set of recommendations includes 12 recommendations for implementing a comprehensive regime of source address validation.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=150)** Seven recommendations involving port filtering.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=154)** One recommendation on rate limiting.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/nist-guidance-on-mitigating-ddos?u=76281980&t=157)** And six recommendations around flow spec based blackholing of traffic.

> [!info]- Semantic Content
>
> **Env Vars:** bgp (3), nist (2)
> **Code Keywords:** let (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)

#### Considering IoT denial
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=1)** - [Instructor] There are many different things that come under the umbrella of Internet of Things.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=5)** These range from sub-dollar low-power sensors to cars and drones.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=10)** Each type has its own characteristics which make security difficult, including its level of vulnerability to denial of service.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=18)** IoT environments have a broad spectrum of vulnerabilities.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=21)** They use a wide range of communications protocols and often operate with mobility, making a common protective mechanism problematic.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=30)** They may be configured with shared or default passwords and may be physically unprotected.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=36)** IoT devices often lack reliable authentication schemes and allow network access through insecure services such as Telnet and unencrypted HTTP.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=46)** These all encourage malware infection.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=48)** They may not be designed to support firmware updates to correct security bugs.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=55)** These characteristics mean that IoT devices are not only vulnerable to denial of service, but are also a source of threat used to create denial of service attacks, as was shown in the Dyn attack, which took control of and used a large network of internet open smart cameras to generate distributed denial of service traffic.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=76)** While many of the current IoT security standards identify denial of service as a threat, there's been little in the way of specific countermeasures.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=85)** However, in August 2018, the "Sensors" journal published a paper proposing a new method for denial of service mitigation.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=93)** This paper provides a good survey of thinking on the issue.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=98)** IoT security is typically focused on traditional confidentiality mechanisms.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=103)** This includes the use of firewalls to provide security for the communications within an IoT environment, filtering the access to services and resources of the environment, and also to filter which devices can communicate to the outside internet.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=118)** This approach doesn't prevent the environment being isolated, however.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=122)** Cryptography is used to secure communications between IoT devices, setting up an end-to-end protection mechanism.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=130)** Some techniques for intrusion detection have been proposed.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=134)** Several proposals for detecting denial of service attacks have been proposed.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=139)** These include monitoring and alarming, the use of honeypots to attract the adversary, and sandboxes to analyze the attack behavior.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=149)** The approach proposed by Almeida and his team is to use a distributed model of entity and message authentication to mitigate denial of service attacks on IoT networks using a distributed intrusion detection system as shown.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=163)** While this is still a research stage approach, it appears promising.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/considering-iot-denial?u=76281980&t=168)** Further details can be found in their paper in the "Sensors" journal.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** http (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Summary
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/summary?u=76281980&t=0)** - [Instructor] I'd really like to thank you for joining me for this course.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/summary?u=76281980&t=4)** I hope you enjoyed this foray into denial of service testing.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/summary?u=76281980&t=8)** There's always something new to learn about in cyber security, and if you're interested, then check out the other courses in the cybersecurity segment of the library where new security testing courses are added regularly.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/summary?u=76281980&t=21)** I'd like to invite you to go to my author page where you can find some additional courses on cybersecurity.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/summary?u=76281980&t=28)** If you want to get hands on with some of the common tools, then do take a look at practical cyber security and introduction to Kali Linux.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/summary?u=76281980&t=37)** If you're wanting to learn about security for the cloud, then Cybersecurity for Cloud Computing is for you.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/summary?u=76281980&t=44)** I'd also like to invite you to go take a look at Lisa Bock's author page where you'll find more courses in the ethical hacking series.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/summary?u=76281980&t=52)** Lisa also has some great information security courses that you can take.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-denial-of-service-2/summary?u=76281980&t=58)** Thanks again for joining me on this course, and I hope to see you again soon.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Malcolm Shore]]

## Resources

- Exercise files available

## Skills Covered

- Ethical Hacking

## Path Context

### In [[Become an Ethical Hacker]]
← [[Ethical Hacking- Social Engineering]] | **10 of 19** | [[Ethical Hacking- Session Hijacking]] →

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