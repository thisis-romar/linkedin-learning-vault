---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: cisco-network-security-intrusion-detection-and-prevention
url: "https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention"
duration_minutes: 79
duration: 1h 19m
level: Intermediate
updated: 11/8/2024
learners: 46310
skills:
  - Intrusion Detection
  - Cisco Networking
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQG1vtyyLeTG2A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729286464784?e=2147483647&amp;v=beta&amp;t=4VAHjGihDDel4T21azKtoLMbUF6FTYg_n2-ftVBdCpU"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Cisco Network Security- Safeguarding Network Integrity and Data]]'
prev_courses:
  - '[[Cisco Network Security- Cisco Firewall Technologies]]'
next_courses:
  - '[[Cisco Network Security- Content and Endpoint Security]]'
path_nav: '[{"path":"Cisco Network Security- Safeguarding Network Integrity and Data","position":6,"total":7,"prev":"Cisco Network Security- Cisco Firewall Technologies","next":"Cisco Network Security- Content and Endpoint Security"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/intrusion-detection
  - skill/cisco-networking
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cisco%20Network%20Security-%20Intrusion%20Detection%20and%20Prevention.md)

![Cisco Network Security: Intrusion Detection and Prevention](https://media.licdn.com/dms/image/v2/D560DAQG1vtyyLeTG2A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729286464784?e=2147483647&amp;v=beta&amp;t=4VAHjGihDDel4T21azKtoLMbUF6FTYg_n2-ftVBdCpU)

# Cisco Network Security: Intrusion Detection and Prevention

> A network must be able to quickly recognize threats. Intrusion detection and intrusion prevention systems (IDS/IPS) provide organizations with a proactive approach to monitoring their network, enabling them to take action against possible threats. In this course, join security ambassador Lisa Bock as she provides an overview of intrusion detection and intrusion prevention systems and explains how 

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention) | 1h 19m | Intermediate | 46K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (4 videos)
- **2. 1. IDS and IPS Overview** (5 videos)
- **3. 2. Detection and Signature Engines** (6 videos)
- **4. 3. Decisions and Actions** (4 videos)
- **5. 4. Deploying an IOS-Based IPS** (3 videos)
- **6. 5. Practical Applications** (4 videos)
- **7. Conclusion** (1 videos)

### 1. Introduction

#### Stopping Potential Threats
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/stopping-potential-threats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/stopping-potential-threats?u=76281980&t=0)** - An intrusion detection and prevention system is your network's first line of defense as it actively scans traffic and blocks threats in real time.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/stopping-potential-threats?u=76281980&t=11)** This early intervention helps stop potential attacks before they can cause serious damage.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/stopping-potential-threats?u=76281980&t=18)** Join me as I share my experience in detecting and responding to cybersecurity threats using signature, anomaly, and reputation based detection.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/stopping-potential-threats?u=76281980&t=30)** I'll then highlight some practical applications and then finish with a discussion on ways to deploy and manage and iOS-based intrusion detection and prevention system.
>
> **[0:42](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/stopping-potential-threats?u=76281980&t=42)** Hello, my name is Lisa Bock and I'm a security ambassador.
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/stopping-potential-threats?u=76281980&t=47)** Are you ready? Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - an (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is an intermediate level course for network administrators, managers, students, and anyone with an interest in learning more about Cisco Security.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/what-you-should-know?u=76281980&t=12)** Participants should have a solid knowledge of networking fundamentals, devices and cables, along with various topologies.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/what-you-should-know?u=76281980&t=20)** This course, and the entire learning path, covers the components included in the Security Fundamentals section of the CCNA exam.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/what-you-should-know?u=76281980&t=29)** I'll take you here to this site, where you can learn more about the CCNA exam.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/what-you-should-know?u=76281980&t=35)** The exam will test your knowledge and skills related to networking, and is an excellent addition to a career in information technology.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/what-you-should-know?u=76281980&t=46)** I'll scroll down where you can see the objectives, and then I'll expand the section on security fundamentals so that you can see what I'll be covering throughout the learning path.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/what-you-should-know?u=76281980&t=58)** I am super excited to bring you this series on CCNA security so that you can improve your skills in securing an organization's infrastructure.

> [!info]- Semantic Content
>
> **Env Vars:** ccna (3)
> **Definitions:** is an  (2)
> **Code Keywords:** super (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Packet Tracer and exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/packet-tracer-and-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/packet-tracer-and-exercise-files?u=76281980&t=0)** - [Instructor] During the course, I'll demonstrate some of the concepts using Packet Tracer, which is available here at the Cisco Networking Academy at [netacad.com](https://netacad.com).
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/packet-tracer-and-exercise-files?u=76281980&t=12)** I put in the search Packet Tracer and it took me here, Introduction to Packet Tracer.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/packet-tracer-and-exercise-files?u=76281980&t=19)** Scroll down, and sign up, and get your own copy of Packet Tracer, along with the samples that are included.
>
> **[0:27](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/packet-tracer-and-exercise-files?u=76281980&t=27)** For more information, review my discussion of Packet Tracer in CCNA Security: Secure Access.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/packet-tracer-and-exercise-files?u=76281980&t=36)** If you have access to the samples in Packet Tracer, you can download them and follow along with me or you can create your own network from scratch.

> [!info]- Semantic Content
>
> **URLs:** [netacad.com](https://netacad.com) (1)
> **Env Vars:** ccna (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Prepare for the CCNA Security Exam (210-260)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prepare-for-the-ccna-security-exam-210-260?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prepare-for-the-ccna-security-exam-210-260?u=76281980&t=0)** - [Narrator] The CCNA Security Exam tests the candidate's knowledge of security concepts, secure access, VPN technologies, secure routing and switching, Cisco firewall technologies, intrusion prevention systems, along with content and endpoint security.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prepare-for-the-ccna-security-exam-210-260?u=76281980&t=23)** The CCNA Security Exam validates a candidate's skills for securing a network to maintain the confidentiality, integrity, and availability of data, and is an excellent addition to a career in information technology.

> [!info]- Semantic Content
>
> **Env Vars:** ccna (2), vpn (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)


### 2. 1. IDS and IPS Overview

#### Managing the threat landscape
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=0)** - [Instructor] I'm here at the Check Point Live Cyber Threat Map, where we can see the many cyber attacks happening around the world at any given point in time.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=12)** The reality is that even with all of your defenses in place, malicious traffic may have found a way onto your network.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=21)** In this segment, we'll learn how intrusion detection and prevention can detect and mitigate many common attacks, as well as identify potentially malicious traffic.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=33)** Today, companies are faced with numerous challenges to protect the infrastructure.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=40)** Network environments are complex, and can include bring your own device, cloud computing, social media, the Internet of Things, and the new technology that is added to the mix daily.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=54)** Coupled with the challenges, cyber threats are becoming more aggressive, complex, and sophisticated.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=62)** Attackers range from the disgruntled employee, to crime rings and nation states.
>
> **[1:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=68)** The attacks are highly organized by skilled and motivated players, and have resulted in massive amounts of sensitive information being exposed.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=80)** So, now I'll take you to this website, Information is Beautiful, where we can see the world's biggest data breaches, along with all of the organizations that have been affected.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=94)** Now, I'm going to start at 2004, and then I'll scroll up, where you can see that over the past 20 years, the amount of data breaches have increased significantly.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=108)** Now, once you click on one of the bubbles, you can see that there's summary information and you can read a little bit more about the data breach, and then I'll scroll down.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=120)** Now, here below, we can see the type of data that was leaked, such as email addresses, credit cards, health and personal data, and passwords.
>
> **[2:11](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=131)** The fact is that no single application can effectively manage the many threats.
>
> **[2:17](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=137)** As a result, the network administrator uses a layered approach to protect a computer system or network from attack.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=145)** The concept of defense in depth encompasses an overall approach to organizational security, and there are a variety of methods available to secure an organization, and those include firewalls, antivirus, packet shapers, and spam filters.
>
> **[2:45](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=165)** However, some threats can slip past all of the defense methods, possibly by an end user falling victim to a social engineering attack, and clicking on a link, releasing malware that ends up on the network.
>
> **[3:01](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=181)** A network must be able to instantly recognize threats.
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=186)** Intrusion detection and prevention systems provide a proactive approach to monitor the network and take action against possible threats, such as questionable processes, login attempts at odd hours, and other indicators of unusual and suspicious behavior on the network.
>
> **[3:27](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=207)** The threat landscape continues to be a challenge.
>
> **[3:30](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=210)** By using intrusion detection and prevention systems, the network administrator can provide countermeasures to detect and mitigate many common attacks.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll up (1), click on (1), scroll down (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### Overview and benefits of IDS and IPS
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=0)** - [Instructor] Intrusion detection and prevention systems monitor the network and conduct traffic analysis to identify incidents, possible policy violations, and attempted attacks.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=12)** Types of attack signatures include Trojans that are communicating with command and control servers, denial of service attacks, passive attacks where a hacker scans the network to learn what's happening in the organization, active attacks, such as remote login attempts, buffer overflows and SQL injection.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=35)** The system also monitors for insider attacks, unauthorized access attempts, escalation of privilege, or excessive database reads.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=45)** Intrusion detection, intrusion prevention systems can be host or network based.
>
> **[0:51](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=51)** Many times the results are sent to a central repository, such as Sislog, for analysis via secured device event exchange and then alert the security analyst of the findings.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=63)** Let's take a look at intrusion detection in action.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=67)** I'm here at this website, Virus Total.
>
> **[1:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=70)** This is a community based service where you can upload a file and it will do an analysis for you.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=78)** Now we can take a look, there are over 60 anti-virus engines in Virus Total and here we can see a clear indication of infection.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=88)** An intrusion detection system can identify traffic that's not obviously malicious, that may have slipped by organizational defenses.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=98)** Now here we see Virus Total with some intrusion detection system results.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=104)** This was a capture, and we'll take a look at what it found.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=108)** When this file was uploaded, there was no indication of malware detected.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=114)** However we do see some results in intrusion detection system so let's take a look.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=120)** I'll go to file detail and I'll scroll down.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=124)** Now I'm gonna take this out so we can have a closer look.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=128)** Now when you read this, there's some things that could be interesting that you might wanna follow up on.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=134)** Multiple dynamic DNS queries, as you can see, could be an indication of malware activity on your network.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=141)** So you see, IP address to check [dyndns.org](https://dyndns.org) detected.
>
> **[2:27](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=147)** Here we see SENSITIVE DATA, Email Addresses, Sensitive Data was Transmitted Across the Network.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=155)** With the emerging threats rule set, we see more interesting results.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=160)** Here we see Possible BitCoin Miner User Agent, A Network Trojan was Detected.
>
> **[2:47](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=167)** An outgoing Basic Auth Base64 HTTP Password Detected unencrypted.
>
> **[2:55](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=175)** Your next step would be to investigate these findings to get any malicious activity under control.
>
> **[3:02](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=182)** Intrusion detection, intrusion prevention systems monitor the network to identify incidents and attempted attacks.
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=191)** They log the information and report the findings to the security analyst.

> [!info]- Semantic Content
>
> **Env Vars:** sql (1), dns (1), sensitive (1), data (1), http (1)
> **Code Keywords:** let (2), this, (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Analogies:** such as (2)
> **URLs:** [dyndns.org](https://dyndns.org) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### IPS versus IDS
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=0)** - [Instructor] In addition to the many other security devices on a network, most organizations use intrusion detection/intrusion prevention systems to increase the security level of the network.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=12)** Intrusion detection and prevention systems are sensors that monitor for unusual or suspicious data or activities.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=21)** The systems may be a standalone device or integrated within an Adaptive Security Appliance or on a router.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=29)** The systems monitor and inspect ingress and egress traffic using a combination of deep packet inspection for signature and heuristic-based analysis.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=40)** Traffic is not sent out an interface until the packet has been analyzed.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=45)** Both technologies do share several characteristics.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=49)** However, the two have distinct differences.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=52)** Intrusion detection sits out of band in promiscuous mode and passively monitors network traffic.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=60)** Traffic is mirrored to the intrusion detection system where it checks the captured traffic against the signature database.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=67)** If the traffic is malicious, it will detect and log information about the activity and report an attack.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=75)** However, it requires other devices to respond to attacks.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=81)** Because the attack is not actively stopped, damage to the network may have already happened.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=87)** An intrusion detection system doesn't negatively affect the traffic flow, but is more vulnerable to evasion techniques used in various network attack methods.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=98)** Intrusion prevention builds on intrusion detection technology, but it sits in band and actively monitors network traffic.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=107)** Intrusion prevention systems can detect and block attacks by dropping the suspect traffic.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=114)** However, there are some concerns.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=117)** If the intrusion prevention system is not configured correctly or doesn't have enough muscle to manage the traffic, it can cause slowdowns and sluggishness and affect time-sensitive applications, such as voice over IP or multimedia.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=134)** In addition, both systems must be tuned correctly to achieve the proper levels of intrusion detection and avoid excessive false positive alerts.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=144)** Intrusion detection/intrusion prevention systems are sensors that monitor for unusual or suspicious data or activities in a network and provide an extra layer of protection.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Host-based versus network IDS
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=0)** - [Instructor] Intrusion detection systems work to enforce the security policies on what traffic is allowed and what is denied.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=8)** Intrusion detection can be host-based or network-based.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=12)** Host-based monitors a single host.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=15)** Network-based monitors the entire network.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=20)** Host-based intrusion detection systems monitor a single host or endpoint that includes servers, workstations, and mobile devices.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=30)** They can be fine-tuned to the specific application, workflow, or user role, host-based systems are operating system specific and work independently to monitor the events on a host for suspicious activity.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=46)** Because the intrusion detection system is on the operating system, the encrypted traffic will be decrypted, and the intrusion detection system can examine the contents.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=58)** Network-based intrusion detection systems monitor malicious and unauthorized activity on the network.
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=65)** Sensors are deployed at the network edge to monitor ingress and egress traffic and block network level attacks.
>
> **[1:14](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=74)** Network intrusion detection systems are comprised of numerous components, such as sensors or agents, state tables, and signature databases.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=85)** Network-based intrusion detection systems are operating system independent and monitor network traffic to identify suspicious activity and can visualize attacks that are occurring across the entire network.
>
> **[1:40](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=100)** There are also disadvantages of network intrusion detection systems.
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=105)** Network-based intrusion detection reaches a limit when excessive growth and increased bandwidth usage influences the ability to capture and analyze all traffic.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=117)** To adjust, additional sensors are placed throughout the network, which will increase overall costs.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=125)** Network intrusion detection systems cannot monitor encrypted traffic, such as Secure Shell or Transport Layer Security, and this may allow malicious activity to go undetected.
>
> **[2:18](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=138)** Fragmentation also causes issue in that the intrusion detection system in the system many times had a difficult time reconstructing the traffic for a proper analysis.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=151)** A network-based intrusion detection system may be a stand-alone device or integrated within a router or adaptive security appliance and includes three key components.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=163)** In order to perform intrusion detection analysis and pattern matching, the system must have a superior CPU and exceptional performance.
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=173)** The network interface card must be able to communicate on the network and keep up with traffic that is pushed through for analysis.
>
> **[3:02](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=182)** Adequate memory is essential, as intrusion detection is memory intensive and will affect the ability of the system to detect and block an attack.
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=192)** A typical network-based intrusion detection system works as follows.
>
> **[3:17](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=197)** An intrusion detection system sniffs a packet from the network.
>
> **[3:22](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=202)** The preprocessor looks at the packet header and decides whether to analyze it further, and the traffic is maintained in the state table.
>
> **[3:31](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=211)** It then moves to normalization for a careful examination of normal TCP/IP behavior and then onto TCP flow reassembly.
>
> **[3:42](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=222)** Concurrently, packet flow inspection takes a closer look at the traffic to examine the payload and compare against the detection signature engine and then onto flow classification where appropriate action is taken, such as an alert, or possibly the system may modify the firewall rules.
>
> **[4:02](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=242)** In addition, flow classification may signal the system to either drop the packets, or it may travel through a packet shaper before moving onto the general traffic flow.
>
> **[4:14](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=254)** Host-based intrusion detection systems monitor a single host or endpoint, and network-based intrusion detection systems monitor malicious and unauthorized activity on the network.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (2), cpu (1)
> **Analogies:** such as (3)
> **Code Keywords:** interface (1)
> **Speakers:** - [instructor] (1)

#### Prerequisites and restrictions for IPS
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=0)** - [Instructor] Intrusion detection monitors the network for unusual or suspicious activity.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=5)** However, intrusion prevention stops or prevents an attack.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=10)** The intrusion prevention system can be an effective tool in the arsenal of the security analyst.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=17)** Prior to selection, it's best to conduct a thorough business requirements exercise to ensure the system is in line with the network demands.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=26)** In addition to monitoring the network, an enterprise class system must be able to ensure exceptional system performance and accurate detection.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=36)** Along with manufacturers' white papers and specifications, you should also research real-world testing and product reviews.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=46)** The system must be able to work with a broad range of devices, network speeds, and bandwidth requirements.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=53)** The device must be able to keep up with current bandwidth requirements along with variations in speed and burstiness.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=62)** The device must be able to view the entire network for correlation of events for predictive analysis.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=69)** It should include a centralized management system that uses encrypted communications.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=75)** The system must be able to detect policy violations and identify misconfigured or vulnerable devices on the network.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=84)** It should have a detection engine with a range of signatures.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=89)** It should have an automatic signature database with automatic updates, as well as being able to manually update the signature database, and it should have a knowledge base so it can monitor heuristic or anomaly-based activity.
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=105)** The system should collect and log data for further analysis.
>
> **[1:49](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=109)** The intrusion detection system acts as a queuing system, so it should be able to summarize the events in a form of the report, so the network administrator can further modify and improve the signature database.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=123)** The system must be tuned, kept up-to-date, and hardened against all types of attacks.
>
> **[2:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=130)** In any system, expect a high degree of accuracy.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=134)** Excessive false positives or performance delays will impact overall network performance.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=142)** Prerequisites and restrictions for intrusion prevention systems include exceptional system performance, accurate detection, ensuring a current signature database, along with logging, analysis, and reporting.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 3. 2. Detection and Signature Engines

#### Monitoring the network
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=0)** - [Instructor] Intrusion detection systems monitor the network for unusual or suspicious activity.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=7)** In this segment, we'll explore how sensors use signature triggers of known threats to identify and respond to malicious activity.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=17)** Database compromise has affected over 8.2 billion records, to date is a level playing field as anyone and any industry can be affected.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=29)** Therefore, it's essential that we carefully monitor for any evidence of data exfiltration or compromise.
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=38)** Intrusion detection systems are tuned to recognize viruses, worms, trojans, and bot activity along with web attacks, such as SQL injection, cross site scripting, and denial of service.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=53)** The Cisco intrusion detection system sensors are constantly vigilant for an attack signature.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=60)** The device examines the traffic and breaks down each packet into the header field values and then searches for specific patterns that might flag an intrusion.
>
> **[1:11](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=71)** This allows for a more granular inspection of traffic.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=76)** Sensors use different types of signature triggers that include pattern-based, anomaly-based, policy-based, and reputation-based detection.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=88)** I'd like to show you an example of following up after you have received an alert.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=94)** Let's set the stage.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=96)** During the course of your day, you've received an intrusion prevention system alert.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=102)** An IP address has been blocked because of reputation.
>
> **[1:46](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=106)** In addition, there's suspicious activity on UDP port 666.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=113)** Now, in most cases, you can examine the data, which contains all the information about events on the network.
>
> **[2:01](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=121)** In this case, I pulled the capture and opened it in Wireshark.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=125)** Now once in, I'll go to statistics and then conversations, and I'm going to zero in on UDP, and we're going to search for that suspicious port.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=135)** Now, once in, we can examine the port values, and we can sort them in which I have by just clicking that one time, and we see some standard ports, such as ports 67 and 68 used for DHCP, and port 53 used for DNS, but what we do see is this port right here, port 666.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=161)** So let's take another look.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=163)** I'll right click, and I'll say apply as filter, selected, A to B, and then I'll close that, and once you've filtered that, there is where we can see the suspicious IP address.
>
> **[2:56](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=176)** So now let's take a closer look at the port and the IP address.
>
> **[3:02](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=182)** So what I did was do a search on port 666, and here I'm in speed guide, and I'll scroll down, and we see that there are a number of bad things that could possibly be associated with port 666, and those are ones you probably don't want on your network.
>
> **[3:24](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=204)** Now, additionally, we'll go to Cisco Intelligence, and then we'll check the IP address.
>
> **[3:31](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=211)** Now the Talos threat operations center constantly gathers and analyzes data on malicious activity, which then populates the Cisco sensor-based database.
>
> **[3:43](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=223)** Any IP address with a risky reputation will be marked and used when evaluating network traffic, and I'll scroll down here and will put the IP address, and we'll search, and I'll scroll down, and here we see that the IP address has a poor reputation.
>
> **[4:03](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=243)** So now at this point, when the IDS noticed an IP address with a poor reputation, the system blocked the stream and then alerted the administrator to help protect against an attack.
>
> **[4:17](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=257)** So the next step is to follow up and make sure that the alert was valid and then take steps to make sure no further damage is done.
>
> **[4:27](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=267)** So intrusion detection system sensors use signature triggers of known threats to identify and respond to malicious activity.

> [!info]- Semantic Content
>
> **Env Vars:** udp (2), sql (1), dhcp (1), dns (1), ids (1)
> **Ports:** port 666 (4), port 53 (1)
> **UI Navigation:** scroll down (3), go to (2)
> **Code Keywords:** let (3), case, (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Versions:** 8.2 (1)
> **Definitions:** is a  (1)

#### Signature-based IDS
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=0)** - [Instructor] Cisco intrusion detection system security appliances primarily use signature-based technology to monitor and compare traffic as it passes through the device to detect patterns in network traffic.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=15)** A signature-based intrusion detection system must contain a current database of known attack signatures that is tuned to detect intrusions and malicious activity.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=26)** A signature is either atomic or composite.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=30)** An atomic signature is a single packet, activity, or event.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=35)** A composite signature is also called a stateful signature, because it's a sequence of events involving multiple packets dispersed across multiple hosts during a period.
>
> **[0:48](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=48)** Because it is stateful inspection, the device must keep a state table.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=54)** A signature engine has a parser and an inspector.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=58)** The parser reads the text-based descriptions for all signatures.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=63)** The inspector looks for malicious activity in the network traffic stream.
>
> **[1:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=68)** There are several signature engines or categories that each has its own set of signatures that monitor for an allowable range or values.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=78)** The service engines inspect common application layer services, such as HTTP, MySQL, NTP, or DNS.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=88)** String engines enable the intrusion detection system to search the traffic streams for regular expression strings that might be associated with malware.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=99)** Flood engines monitor for flood activity.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=103)** Atomic engines create simple single-packet signatures, and sweep engines monitor for reconnaissance activity.
>
> **[1:52](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=112)** Flood engines monitor for any host or network sending multiple packets to a single host or network, such as in a denial of service attack.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=122)** You can easily set and modify the various parameters.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=127)** Here's just a sampling.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=128)** For example, you can modify protocol, the type of traffic to inspect.
>
> **[2:13](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=133)** The rate, the threshold for second, or ICMP type, which would give us the value for the header type.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=142)** Atomic engines are designed so the network administrator can create a simple single-packet signature.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=149)** A packet traveling across the network with a matching signature will trigger an alarm.
>
> **[2:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=154)** Cisco uses several atomic signature micro engines.
>
> **[2:39](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=159)** The atomic IP examines the headers and payloads of TCP, IP, UDP, and ICMP.
>
> **[2:49](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=169)** Atomic IP advanced includes advanced IP options such as an IPv6 packet with a fragment option header.
>
> **[2:59](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=179)** There is also atomic IPv6, which are defined signatures related to IPv6 malformed packets.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=188)** Fixed TCP, UDP, and ICMP examines the fixed or what we call immutable portions of TCP, UDP, and ICMP headers.
>
> **[3:20](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=200)** These are the portions that do not change.
>
> **[3:23](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=203)** An atomic ARP examines ARP packets for ARP spoofing attacks.
>
> **[3:29](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=209)** Within each atomic engine, the network administrator can customize the parameters.
>
> **[3:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=214)** For example, with a TCP signature micro engine, you can configure specific parameters for the atomic.tcp, including direction, to TCP service or from TCP service.
>
> **[3:49](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=229)** Or which TCP flags to monitor.
>
> **[3:53](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=233)** Sweep engines monitor for the various signatures related to sweeps and scans.
>
> **[3:59](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=239)** Now, scanning techniques can vary, but there are some common scans.
>
> **[4:04](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=244)** Each will have a different objective.
>
> **[4:07](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=247)** A common scan is a ping sweep.
>
> **[4:09](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=249)** This will send a series of packets out to identify live hosts on the network.
>
> **[4:15](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=255)** It waits for one to respond and then it knows which hosts are alive.
>
> **[4:20](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=260)** A port scan identifies TCP and UDP ports on a live system looking for services that will respond.
>
> **[4:30](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=270)** Intrusion detection systems use a signature database with several signature engines or categories that each has its own signature micro engines that monitor for an allowable range or value.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (8), icmp (4), udp (4), arp (3), http (1)
> **Analogies:** such as (3), for example (2)
> **Code Keywords:** type, (1), type. (1)
> **Definitions:** is a  (2)
> **CLI Commands:** mysql (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Sweep scan
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=0)** - [Instructor] In a signature-based intrusion detection system, sweep engines monitor for the various signatures related to sweeps and scans.
>
> **[0:09](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=9)** Scanning techniques can vary.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=11)** In this demo, we'll take a look at a TCP scan and see the signature as if we were right in the intrusion detection system watching the traffic as it travels across the network.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=23)** I'm at this webpage here at Cisco Security which talks about threat information and more specifically, intrusion prevention system signatures.
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=34)** Here we see TCP SYN Host Sweep.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=37)** It talks a little bit about the ID, when it was released, and then down below a description.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=44)** This signature fires when a series of TCP SYN packets have been sent from one single host to a number of different hosts.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=54)** This could be for example an attempt to map the network.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=59)** This is indicative that a reconnaissance sweep of your network may be in progress and it says this may be the prelude to a more serious attack.
>
> **[1:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=68)** Let's take a look.
>
> **[1:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=70)** I am in Wireshark so we can see the pattern or signature of a TCP scan.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=77)** I'll first apply a filter.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=79)** Now what this filter did was show me only the TCP traffic with only the SYN flag set.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=86)** Now this was done in a laboratory setting so you'll see only two IP addresses, .101 and .103.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=94)** To clean this up a little more, let's take off the coloring rules and then I'll uncheck name resolution so we only see the ports.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=103)** So as you can see, Wireshark does a resolution as to what service it thinks that port is associated with.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=110)** I'll go into Edit, Preferences, and then Name Resolution and then I'll uncheck Resolve transport names.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=118)** All right, we'll almost there.
>
> **[1:59](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=119)** Let me do one more thing to make it super clear to you.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=123)** I'll right click on Destination Port and I'll say Apply as a Column and I'll scroll down.
>
> **[2:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=132)** Now you can see as if you were the inspector in the intrusion detection system this is evidence of a TCP scan.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=140)** It's going through all the ports in an attempt to get one of the services to respond.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=145)** Now in some cases, scanning network hosts is done because of a vulnerability assessment exercise or even a penetration test, but scanning and sweeping is also done by hackers during reconnaissance prior to an attack.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=161)** In general, unless you have initiated the scan, you should not allow active scanning or sweeping on your network.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (6), syn (3)
> **Code Keywords:** let (3), super (1)
> **UI Navigation:** click on (1), scroll down (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Anomaly-based IDS
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=0)** - [Instructor] Intrusion detection systems detect malicious activity by using either atomic or single-packet patterns or composite or multi-packet signature patterns.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=12)** Once a specific signature is found, the device will send an atomic alert.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=17)** I'm at this website Kaspersky Cyberthreat Real-Time Map, where we can see there is a constant barrage of attacks.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=26)** We'll take a look around on this website and I'll scroll down, it will show most infected today and some historical statistics worldwide.
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=38)** Here we can see top local infections in the last week and some of the variants.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=44)** To stop incoming malicious traffic, the network must first be able to identify it.
>
> **[0:50](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=50)** There is a main disadvantage in pattern-based detection in that it cannot detect unknown attacks.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=58)** While malware signatures are critical in monitoring the system, the one threat that will pose a significant risk to your organization is a zero-day attack.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=69)** A zero-day attack exploits unknown software vulnerabilities.
>
> **[1:14](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=74)** Here we see, in this graphic, a timeline.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=77)** First, the vulnerability is found in the wild.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=81)** Now there are people that specifically look for these vulnerabilities and try to exploit them.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=87)** At some point, the vendor becomes aware and works on mitigating this vulnerability by creating a patch.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=94)** Then at some point the vendor will release a patch and then the public will be made aware.
>
> **[1:40](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=100)** However, you can see down below that until you apply the patch, your system is vulnerable.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=107)** Anomaly or profile-based detection can monitor virus and malware-like behavior.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=114)** It can detect new and previously unpublished attacks.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=118)** This detection method requires careful initial configuration and has the following modes.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=124)** We have the learning mode.
>
> **[2:06](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=126)** During this initial setup phase, the system builds a normal profile by monitoring network or host activity for at least 24 hours.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=136)** After the system learns the normal behavior, the signature triggers if activity occurs beyond a specified threshold.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=145)** Now this important, the network must be free of attacks while establishing normal activity, or it will become part of the normal activity.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=155)** During detect mode, we have anomaly detection, which is monitoring for anomalies, but it's also recording gradual changes and builds a profile of normal system activity over time.
>
> **[2:48](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=168)** And inactive mode, this is where we turn off anomaly detection.
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=173)** Now although it sounds like a better way to go, this type of intrusion detection system can be difficult to manage.
>
> **[3:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=180)** It most of the time will throw many false positives, which can happen during valid user traffic.
>
> **[3:07](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=187)** The network administrator must tune the system to adjust optimal detection thresholds.
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=192)** In addition, when there is any new addition to the network, the system must build a new baseline.
>
> **[3:19](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=199)** Anomaly or profile-based detection can monitor virus and malware-like behavior and detect new and previously unpublished attacks such as a zero-day attack.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Code Keywords:** public (1), throw (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Reputation-based IDS
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=0)** - [Instructor] In addition to using signatures to identify threats, Cisco Intrusion Detection Systems can benefit from reputation-based intrusion detection using Cisco's Security Intelligence Operations.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=13)** In the real world, we make our selections based on the reputation of the company or product.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=19)** The collective nature of event correlation is very powerful, as it provides information to the Intrusion Detection Systems about certain IP addresses that may have a reputation associated with malicious or risky websites.
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=34)** The Threat Operations Center is constantly vigilant and gathers and analyzes data on malicious activity using automated, along with human interaction methods.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=45)** The gathered data populates the Cisco SensorBase database.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=49)** Participants contribute to the database, but also benefit from the collective wisdom and information.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=55)** The first step is to agree to participate.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=58)** Then, on the Local Area Network, participating intrusion prevention sensors gather data and then send suspect traffic to the global correlation servers.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=69)** If there is an identified event, the Intrusion Detection System will send information that includes signature ID, attacker's IP address and port, victim IP address and port, TCP options string, reputation rating and score, and data from the sensor health metrics.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=88)** The reputation servers update the database and then share the results with other contributing networks.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=95)** The Cisco SensorBase database changes often.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=98)** It's best practice to set the sensor to periodically download global correlation updates from the global correlation servers.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=107)** Reputation-based intrusion detection using Cisco's Security's Intelligence Operations is a powerful feature that helps prevent threats from malware and zero-day attacks by sharing a collective knowledge.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** tcp (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Policy-based IDS
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=0)** - [Instructor] With Policy-Based Detection the administrator defines suspicious behavior and can create a customized policy to monitor for that activity.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=10)** Policy-based intrusion detection is like pattern-based detection, but instead of trying to define a specific pattern, policy-based signatures can be used to analyze a specific type of packet.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=23)** For example, having data in the flow label in an IPv6 header.
>
> **[0:28](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=28)** How this can be used, we can use this example.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=32)** The network administrator can set up a honeypot and gather evidence of an attacker trying to exploit a vulnerability that would be indicative of a possible zero day attack.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=43)** The administrator then can create a customized intrusion rule.
>
> **[0:48](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=48)** An intrusion rule is a set of criteria listing details and conditions the intrusion detection system must match.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=56)** Much like a blueprint, the rule provides details of what to look for, and what action to take once the criteria is found.
>
> **[1:04](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=64)** A standard rule will have two sections, the header and the options.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=69)** The rule header contains the action or type, the protocol, source and destination IP addresses and subnet mask, direction indicators, and source and destination ports.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=81)** And the rule options section contains event messages, keywords and their parameters and arguments, patterns that a packets payload must match to trigger the rule.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=92)** If the rule is an alert rule, it generates an intrusion event.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=96)** If it's a pass rule, it ignores the traffic.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=99)** Here's an example of a rule header.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=102)** First we see action, which is alert.
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=105)** This will generate an intrusion event when triggered.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=108)** For the protocol this will monitor TCP traffic.
>
> **[1:52](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=112)** For the source IP this will monitor for traffic coming from an outside network.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=118)** For the source port, this will test traffic coming from any port, and the operator will test external traffic destined for web servers on your network.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=128)** And the destination IP address, this will monitor traffic sent to any host specified as an internal web server.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=136)** And the destination port will monitor traffic delivered to an HTTP port on the internal network.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=143)** Take care when writing a custom rule.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=145)** You should test prior to implementation, as a poorly written rule can affect system performance.
>
> **[2:32](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=152)** Policy-based intrusion detection analyzes a specific type of packet.
>
> **[2:37](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=157)** The network administrator creates an intrusion rule, listing details and conditions the intrusion detection system much match.

> [!info]- Semantic Content
>
> **Code Keywords:** match. (2), for, (1), type, (1), pass (1)
> **Env Vars:** tcp (1), http (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Decisions and Actions

#### IDS signature files
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=0)** - [Instructor] Pattern based or signature detection is the simplest triggering method as it monitors the network for a matching pattern using predefined signatures.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=10)** A signature has three distinctive attributes, type, trigger, and action.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=16)** The signature database is the heart of the system as it holds the signatures of known attacks and malicious behavior.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=23)** A signature is either atomic or single-packet or composite, or multi-packets.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=29)** When there is a match, the device executes the corresponding action, alert, logging function, or sends an alarm to the management software.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=39)** For the system to be most effective, the signature file must be updated on a regular basis.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=45)** Cisco collects data on malware variants and new threats as they are discovered, and updates and creates signatures on a regular basis.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=54)** The signatures are then distributed to clients according to the threat level.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=59)** If the threat is severe, Cisco will publish the signature files within hours of identifying the threat.
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=65)** Less aggressive threats are published every two weeks.
>
> **[1:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=70)** In addition to signatures for newly discovered threats, the signature update will include all the signatures from the previous version as well.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=79)** To obtain the signature file, we'll go to [Cisco.com](https://Cisco.com).
>
> **[1:23](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=83)** You need to log in and if you don't have an account, you can create one, and then we'll go to downloads.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=89)** Software downloads, and here you can just see that there are some most popular and we'll just click on one of those, and as you can see, signature updates.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=99)** You would click on that and then log in with your username and password and then you would have the latest signatures.
>
> **[1:46](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=106)** If the system can obtain signatures automatically, it's best to set this option to ensure real-time threat defense.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=114)** Using signature-based intrusion detection reduces the strain on the system, but it does have limitations when there are unknown attacks or variables that are unpredictable, such as ports used by Trojans and their associated processes, which can randomly grab ports.
>
> **[2:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=132)** The signature database is the heart of the intrusion detection system.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=136)** For the system to be most effective, the signature file must be updated regularly.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), click on (2)
> **Code Keywords:** type, (1), match, (1), function (1)
> **URLs:** [cisco.com](https://cisco.com) (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Trigger actions and responses
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=0)** - [Instructor] When there is a signature match, the intrusion detection/intrusion prevention system executes the corresponding action, alert, or logging function.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=10)** The signature can trigger any of the following actions.
>
> **[0:14](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=14)** It can generate an alert.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=16)** An atomic alert is generated every time a signature triggers.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=21)** A summary alert is a single alert that indicates multiple occurrences of the same signature from the same source address or port.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=31)** It can log the activity so it can be analyzed later in more detail.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=35)** For example, using a honeypot-based intrusion detection where the network administrator is simply monitoring the activity.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=44)** It can drop and prevent the activity.
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=47)** This can stop an attack before it has a chance to perform malicious activity.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=52)** It could reset a TCP connection to terminate a session that is suspicious which you might see the initial SYN packet come in and a SYN-ACK, but the intrusion prevention system will send a reset and stop the connection before it does any damage.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=69)** It could also block future activity.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=73)** It will drop the packet and all future packets from the TCP flow by updating the access control list on one of the infrastructure devices.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=82)** And it may allow the activity.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=84)** Now this sounds odd, but this does happen.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=88)** For example, when the administrator needs to allow exceptions to configured signatures.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=94)** This might happen possibly during an authorized event such as a vulnerability scan.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=101)** Each rule header includes a parameter that specifies the action the system takes when it matches a signature.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=108)** A rule that is set to alert will generate an intrusion event and log the event.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=114)** Rules that are set to pass will simply allow the packet to pass with no other action taken.
>
> **[2:01](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=121)** Pass rules by default will override alert rules.
>
> **[2:06](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=126)** An alarm will trigger when a specific parameter is met.
>
> **[2:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=130)** Triggering can also generate false positives or false negatives.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=135)** If this happens, the administrator must study the existing network traffic and then tune the signatures to get a more accurate result.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=145)** Events can occur throughout the network.
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=148)** Event correlation is a powerful process of simultaneously monitoring activity throughout the network to detect patterns or events that might be malicious.
>
> **[2:39](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=159)** To effectively correlate all events, it's best to use network time protocol or some other time synchronization protocol among all devices so that they all have the same system time.
>
> **[2:52](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=172)** By using consistent timestamps, the network administrator can more accurately determine when specific network events happen in relationship to other events.
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=183)** The device will signal an event.
>
> **[3:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=185)** However, the security staff must respond quickly to assess the threat level.
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=190)** If the system is compromised, the security staff must work quickly to restore to a normal state as quickly as possible.
>
> **[3:18](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=198)** When there is a signature match, the intrusion detection system will execute a corresponding action, alert, or logging function.
>
> **[3:26](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=206)** Event correlation monitors activity throughout the network to detect patterns of events that might be malicious.
>
> **[3:33](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=213)** In the case of an event, the incidents response team brings the systems back to a normal state.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), match, (2), function (2), override (1)
> **Env Vars:** tcp (2), syn (2), ack (1)
> **Definitions:** is a  (4)
> **Analogies:** for example (2), such as (1)
> **Cross-References:** later in (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Blacklist and whitelist
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=0)** - [Instructor] During normal network activity you may run into malicious websites.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=5)** One way to deal with malicious traffic is using either a blacklist or a whitelist.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=11)** A blacklist is an access control method that allows all traffic except the traffic on the list.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=17)** A whitelist is an access control method that denies all traffic except the traffic on the list.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=24)** A blacklist can be a valuable resource to reduce risk by denying access to potential malicious traffic that can include websites, hosts and usernames, TCP and UDP ports, ICMP types and codes and specific file extensions.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=43)** A whitelist restricts access to only trusted objects.
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=47)** An example would be MAC address filtering on a wireless access point.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=52)** Creating a whitelist is more granular and cumbersome, especially if there is a large number of entities that need to be added to the list.
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=61)** However it does reduce the number of false positives that involve known benign traffic.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=67)** Because it's so cumbersome blacklisting is used more often.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=72)** The lists can either be static or dynamic.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=75)** If you participate in the cisco Global Correlation Network that will send your statistics to the Threat Operations Center for analysis and the results will be distributed to the global community and update the device's dynamic database.
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=91)** In addition you can also manually add entries to a static blacklist.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=96)** One type of threat we take very seriously is botnet activity.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=101)** Now this can occur if an internal host is infected and tries to communicate with other members of the bot which are most likely malicious.
>
> **[1:49](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=109)** The botnet traffic filter address categories include known malware addresses.
>
> **[1:55](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=115)** These addresses are on the blacklist identified by the dynamic database and the static blacklist.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=123)** Known allowed addresses.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=125)** These addresses are on the whitelist.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=128)** Ambiguous addresses are associated with multiple domain names but not all the domain names are on the blacklist.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=136)** We also call this the greylist.
>
> **[2:19](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=139)** Unlisted addresses are unknown.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=142)** And they're not included on any list.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=145)** I wanted to take you to this website to show you common trojan ports.
>
> **[2:30](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=150)** There are many websites like this but it would be good for you to familiarize yourself with websites like this so if you are concerned about some suspicious port activity you can reference these.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=162)** In addition this website tells us about threat detection in the community.
>
> **[2:47](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=167)** Here we can go to reputation lookup and search by IP, domain or network owner for real time threat data.
>
> **[2:55](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=175)** I'll scroll down here and you can see some information as far as legitimate email, spam or malware and we can click on a marker to see more information.
>
> **[3:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=185)** Here it talks about the IP address and the host name and the email type.
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=190)** And in this one it's showing malware.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=193)** So one way to deal with possible malicious activity is by using blacklists which allows all traffic except the traffic on the lists and whitelists which restricts access to only trusted objects.

> [!info]- Semantic Content
>
> **Code Keywords:** static (3), type. (1)
> **Env Vars:** tcp (1), udp (1), icmp (1), mac (1)
> **UI Navigation:** go to (1), scroll down (1), click on (1)
> **Definitions:** is an  (2), is a  (1)
> **Speakers:** - [instructor] (1)

#### Managing IPS alarms
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=0)** - [Instructor] When there is a signature match the device executes the corresponding action, alert, or logging function.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=7)** The alarm can be false positives or false negatives, which may have to be modified or tuned to get a more accurate result.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=16)** There are four types of alarms.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=19)** A false positive alarm is when the system generates an alarm when processing normal benign traffic.
>
> **[0:27](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=27)** A false negative is when an intrusion system fails to generate an alarm after processing attack traffic that the system is configured to detect.
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=38)** False negatives are dangerous, as the system is not detecting known attacks.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=44)** A true positive is when the system generates an alarm in response to known malicious traffic.
>
> **[0:51](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=51)** A true negative is normal network traffic that does not generate an alarm.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=57)** The goal is to generate true positive alarms.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=60)** To minimize false positives and false negatives the administrator should study existing network traffic, and then tune the signatures to better recognize intrusion patterns.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=72)** A signature is tuned to one of four levels based on the perceived severity of the signature.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=79)** High, an immediate threat is extremely likely.
>
> **[1:23](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=83)** Possible attacks to gain access or cause a denial of service are detected.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=88)** Medium, an immediate threat is likely, as abnormal network activity is detected that could be perceived as malicious.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=97)** Low, an immediate threat is not likely.
>
> **[1:40](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=100)** However, abnormal network activity is detected that could be perceived as malicious.
>
> **[1:46](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=106)** Informational, activity that triggers the signature is not considered an immediate threat.
>
> **[1:52](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=112)** However, the information provided is useful information.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=117)** An intrusion detection and intrusion prevention system has four types of alarms, false positive, false negative, true positive, and true negative.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=127)** A signature is tuned to one of four levels based on the perceived severity of the signature.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=134)** The goal is to generate true positive alarms in response to known malicious traffic.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Deploying an IOS-Based IPS

#### Analyze the flow
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=0)** - [Instructor] Today there are more devices connecting to the network and networks are becoming larger and faster every day.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=8)** Being able to analyze the flow of traffic across the network is an important function in providing the ability to troubleshoot the network and ensure system security.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=18)** One tool administers can use is NetFlow.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=22)** NetFlow was developed by Cisco over 20 years ago to provide a way to aggregate data as it passes through the network.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=30)** It's used on routers to analyze traffic as it passes in or out of an interface.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=36)** It gathers data on each flow into a compact record.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=41)** This differs for the granular and somewhat cumbersome collection of traffic using standard protocol analysis tool.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=49)** I'm in Wireshark where we see a number of different packets.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=53)** Now, we could filter by conversation, and we'll do that.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=57)** We'll narrow this by one conversation, but you still see many different records.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=63)** In some cases, we simply want a transaction that reduces the amount of information collected from a communication by combining all of that into a single record.
>
> **[1:14](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=74)** The NetFlow Collector will produce a summary of the following.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=78)** Ingress interface, source IP address, destination IP address, IP protocol, source ports, destination ports, type and code for ICMP, and IP type of service.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=93)** Intrusion detection monitors traffic for unusual or suspicious activity and generates an alert.
>
> **[1:40](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=100)** We can use intrusion detection based on NetFlow.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=104)** The NetFlow sensors can gather and store network transactions and can monitor traffic for anomalies, such as detecting network scans from an external source, denial of service attacks, and host communicating to a command-and-control server.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=120)** NetFlow aggregates events as it passes through the network.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=124)** I'd like to show you in Packet Tracer how this works.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=128)** I'm in Packet Tracer, and here you see the NetFlow server.
>
> **[2:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=132)** I'm going to go in and we're gonna just show you how to get to the NetFlow Collector and Analyzer.
>
> **[2:17](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=137)** We open it up, and we do want to turn that on and start it up.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=141)** Now we'll generate some traffic.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=143)** I'm gonna go into laptop one, and to the web browser.
>
> **[2:27](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=147)** Over here you see the web server and that IP address, so I'm going to enter that IP address, 192.168.40.100, and now I see this Cisco Packet Tracer webpage.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=161)** Let's take a look around.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=163)** Here we see a small page, copyrights, the image page, and a simple image.
>
> **[2:48](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=168)** All right, now let's go into the NetFlow Collector and what we can see now is it's aggregated that.
>
> **[2:56](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=176)** Now it's going to run through the aggregation, it takes just a second.
>
> **[3:01](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=181)** And now you can see the information it's gathered, such as source address, destination, where it's coming from, the protocol, direction, and other information.
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=192)** NetFlow remains an effective way to aggregate and store transaction data, which can be used for accounting and to identify malicious or anomalous activity, along with creating baselines.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), let (2), function (1), from, (1)
> **Analogies:** such as (2)
> **Env Vars:** icmp (1)
> **Versions:** 192.168.40 (1)
> **Definitions:** is an  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Implementing an IPS
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=0)** - [Instructor] Cisco IOS IPS monitors the network and prevents intrusions by comparing traffic against a signature database of known threats.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=10)** If a threat is detected and triggers a signature the device can block the malicious traffic.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=17)** There are several steps necessary to implement IOS IPS.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=22)** The first thing you'll need to do is download the IOS IPS files.
>
> **[0:27](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=27)** Older Cisco IOS releases had built-in signatures, however, newer versions do not have the built-in signatures.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=36)** Therefore, you'll need to log in to [cisco.com](https://cisco.com) with your username and password.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=41)** And then download the IOS IPS signature package files, along with the public crypto key from [cisco.com](https://cisco.com).
>
> **[0:50](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=50)** You'll then need to create a configuration directory in Flash to store the signature files and configurations.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=57)** You'll then configure an IOS IPS crypto key used by IOS IPS.
>
> **[1:04](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=64)** The public key is the text file that you downloaded from Cisco.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=69)** The master signature file is signed by a Cisco private key to guarantee that it's authentic and the integrity has not been modified, which is very important because you don't want anyone to modify those signature sets.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=84)** Then, you'll enable IOS IPS.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=87)** First, create an IPS rule name, and specify the location.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=92)** Enable SDEE and logging event notification.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=96)** And enable Syslog if it's not already enabled.
>
> **[1:40](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=100)** All signatures are grouped into categories.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=103)** This helps classify signatures for easy grouping and tuning.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=107)** The three most common categories are all, basic, and advanced.
>
> **[1:52](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=112)** You'll configure the router to support the default basic signature set.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=118)** Those three commands will set the all category as retired.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=122)** The next set of commands will make the IPS basic category unretired.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=128)** Now, caution, do not unretire the all category.
>
> **[2:13](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=133)** The all signature category contains all signatures in a signature release.
>
> **[2:19](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=139)** The IOS IPS can not compile and use all the signatures at one time because it will most likely run out of memory and possibly crash the system.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=149)** Now, you'll need to apply the rule to a desired interface.
>
> **[2:33](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=153)** And here we see the IPS rule is applied to fast ethernet 0/0 in an out direction.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=160)** Now you've implemented IPS, now let the system do its job of defending your network.

> [!info]- Semantic Content
>
> **Env Vars:** ips (12), ios (9), sdee (1)
> **Code Keywords:** public (2), private (1), interface (1), let (1)
> **Prerequisites:** you'll need (3), configure (2)
> **URLs:** [cisco.com](https://cisco.com) (2)
> **Exercise Files:** download the (2)
> **CLI Commands:** make (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### Configure an IPS
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=0)** - [Instructor] In this demo, I'll configure iOS IPS.
>
> **[0:04](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=4)** I'll enable iOS IPS.
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=6)** I'll configure logging using syslog.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=8)** I'll modify an IPS signature and then I'll verify the IPS signature.
>
> **[0:14](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=14)** As a side note, the signature files are already imported on the router.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=19)** As a result, we don't have to configure the public crypto key or complete a manual import of the signature files.
>
> **[0:27](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=27)** Now as you can take a look at our topology, we'll have over on the left-hand side would be what we consider our inside network and then over on the right-hand side the outside network.
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=38)** The first thing I did was verify connectivity, that those PCs A and C could talk to one another.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=44)** Let's take a look.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=46)** As you could see, I did ping PC C and it was successful.
>
> **[0:51](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=51)** Over on PC C, it was able to reach A without any problem.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=56)** So now we're going to go into router one.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=59)** I'll need to log in.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=62)** I'll go into config t and what we need to do is enable the security technology package.
>
> **[1:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=68)** Now it's a long command so I'll use Tab.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=78)** I'll accept the end user license agreement and then I'll save the running config and now I'll reload to enable the security license.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=97)** Now I'll log back in and now I'll make a directory.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=104)** We'll call it ipsdir.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=108)** Now I'll go back to config t and I'll configure the IPS signature location.
>
> **[1:56](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=116)** Now we'll create a rule using the ip ips name command and we'll call it iosips.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=125)** Now we'll enable the timestamp service.
>
> **[2:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=130)** Now I'll set the clock.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=136)** Now I'll send the syslog messages to the syslog server.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=142)** All right, now I wanna configure the iOS IPS to use the signature categories.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=151)** So we'll retire all the signature categories with the retired true command and then unretire the ios_ips basic category.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=163)** Now we'll exit and accept all changes.
>
> **[2:46](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=166)** Now I want to apply the rule to the gigabit interface.
>
> **[2:52](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=172)** All right, direction out means that the IPS inspects only traffic going out of that interface.
>
> **[2:59](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=179)** Now I'm going to unretire the echo request signature and change the signature action to alert and drop.
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=186)** That signature 2004 subsignature zero so we want to unretire it so it will be retired false, enabled true.
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=201)** Okay, so we're going to tell it the action is to deny packet in line.
>
> **[3:26](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=206)** And now we'll exit and accept all changes.
>
> **[3:31](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=211)** And to just check, we'll just show ip ips all and here you can just see total active signatures one.
>
> **[3:39](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=219)** So if you're doing any troubleshooting, we have a lot of commands that we can go in to check our work.
>
> **[3:45](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=225)** All right, now what we're going to do is just to make sure that the IPS is working properly.
>
> **[3:50](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=230)** We'll go back in and we're going to be able to ping A to C, but we won't be able to ping C back to A.
>
> **[3:59](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=239)** Okay, now let's go back into C and the request has timed out.
>
> **[4:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=250)** We'll go into our syslog server and we can see that it's logged some of the events.
>
> **[4:16](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=256)** So we saw that we enabled an IPS and we verified it and made sure that the signature was working as expected.

> [!info]- Semantic Content
>
> **Env Vars:** ips (9)
> **Code Keywords:** let (2), interface (2), public (1)
> **Prerequisites:** configure (5)
> **Code Identifiers:** ios (3), ios_ips (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Practical Applications

#### Monitoring and analyzing
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=0)** - [Instructor] The intrusion detection intrusion prevention systems on the network are constantly gathering data.
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=6)** The network administrator has several tools in the arsenal to manage all the data.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=12)** Generating via intrusion detection intrusion prevention systems, reporting using the security device event exchange format, gathering via syslog, and analysis via SIEM technology.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=25)** When an attack signature is triggered the intrusion detection system will generate an alarm.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=31)** Alarms are stored on the sensor and can be examined locally, or through an application such as IPS Manager Express.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=39)** After an attack signature fires, the device can send a syslog message using the security device event exchange format.
>
> **[0:48](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=48)** SDEE is a protocol that outlines the format of messages sent between security devices and security monitoring systems.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=56)** An SDEE system alarm message uses this format.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=60)** To log events you can use syslog, which is a standard for logging events in Unix-like systems.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=67)** You can use a syslog server to collect all the logs in a central location.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=73)** To analyze the data the network administrator can use SIEM technology, which integrates into the overall architecture of the network and collects, correlates, and acts on security event information.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=87)** A SIEM system provides consolidated security event management, continuous monitoring, trend awareness, and auditing.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=96)** Normalization of event and log information it gathers from many sources and does data mapping to integrate into the SIEM system.
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=105)** Correlation of events, which gives historic or real-time data perspective and conducts data analysis based on a set of rules.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=113)** SIEM technology provides the network administrator a complete view of an organization and all possible network attack points.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=122)** We must keep in mind however, although there are many tools for reporting, gathering, and analyzing, sometimes it takes human intervention to make a decision on whether the threat is real or not.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=135)** The network administrator has several tools to manage all the data intrusion detection intrusion prevention systems generate.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=143)** That includes reporting via SDEE, gathering using syslog, and analysis via SIEM technology.

> [!info]- Semantic Content
>
> **Env Vars:** siem (6), sdee (3), ips (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Syslog
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=0)** - [Instructor] You can use the Syslog Server to collect all the logs in a central location.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=5)** I'll demonstrate how to configure the Syslog Server in Cisco Packet Tracer.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=10)** First we'll go into the server and take a look at the services and select Syslog.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=16)** We'll turn it on and we'll close that.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=19)** Next, I'll go to the router and let's go into config.
>
> **[0:28](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=28)** I'll issue the command to specify the Syslog Server address.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=35)** And then we'll issue the command, logging trap debugging.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=39)** This'll specify the type of log and the category.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=43)** Exit out of that and now we'll use debug ip icmp, so we'll enable debugging for icmp.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=53)** Okay, now let's ping the server to generate some traffic.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=57)** Ping 192.168.40.110.
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=65)** All right, let's take a look.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=67)** We'll go into the Syslog services, and as you can see, it's logged the events.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=73)** So you can use the Syslog Server to collect all the logs in a central location.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=77)** You could do this, too, in Packet Tracer by setting up a simple network.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1)
> **Versions:** 192.168.40 (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Using IDS and honeypots
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=0)** - [Instructor] In addition to classic signature and heuristic-based intrusion detection, another way to use intrusion detection is to implement a honeypot-based detection.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=11)** A honeypot is a system to set up and lure a would-be attacker with a goal of observing their behavior and attack methods to better protect the network by distracting attackers from hitting the real target or to gather forensic evidence required to aid in the apprehension or prosecution of intruders.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=32)** Placement of a honeypot depends on your objectives.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=36)** It can be inside the land, outside the network boundary, or in the DMZ as a tasty treat for a would-be attacker.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=45)** When using a honeypot as part of an intrusion detection system, keep in mind the main focus is on gathering information.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=54)** Once an intruder breaks into a system, many times they'll come back for subsequent visits where more information can be monitored and saved.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=63)** Make sure you defend the internal network, because even though this is a fake system they're essentially in your network.
>
> **[1:11](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=71)** Some of the honeypot goals include keep the system as generic as possible.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=77)** If you soup up the system too much, an attacker may disconnect.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=81)** Put interesting data in the system to appear as if they hit a valuable target.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=87)** By staging different types of vulnerabilities in the honeypot, administrators can analyze incoming types of attacks and malicious traffic patterns.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=97)** They can then use this analysis to tune their sensor signatures to detect new types of malicious network traffic.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=104)** Too many traps might inspire the hacker community, so be careful.
>
> **[1:49](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=109)** There are blogs out there that share information on honeypots and honeynets.
>
> **[1:55](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=115)** I'm here at this website where we can see a little bit of information gleaned about going in and examining a honeypot.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=124)** I'll just scroll down here.
>
> **[2:06](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=126)** We can see some stats found at most commonly guessed password and most common user ID.
>
> **[2:13](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=133)** Of course, those are the ones we'd want to avoid using on our system.
>
> **[2:18](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=138)** Many times if you get an out of the box honeypot, it may contain logging capabilities.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=145)** Use the log.
>
> **[2:26](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=146)** From there we can glean some information, such as if it's a human or automated system or malware.
>
> **[2:33](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=153)** A human's going to be slow, have misspellings, and directed commands using previously gained knowledge from the targeted network.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=162)** Automated will be fast, no misspellings, more of a shotgun approach, trying everything.
>
> **[2:49](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=169)** Gather some information, such as where is the attacker?
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=173)** What is their target?
>
> **[2:54](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=174)** What is the operating system they target?
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=177)** And what are the vulnerabilities?
>
> **[2:59](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=179)** What could be their ultimate goal?
>
> **[3:01](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=181)** Vandalism, theft of information?
>
> **[3:04](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=184)** You can get a lot of information from a honeypot.
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=189)** Antivirus and other security vendors use honeypots for research.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=193)** I'm here at The Honeynet Project where you can see information about honeypots and some fun information, such as challenges that are posed.
>
> **[3:23](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=203)** You can go in and examine one of these.
>
> **[3:26](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=206)** It tells you about the challenge and some of the outcome so that you can learn more about honeypots and honeynets.
>
> **[3:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=214)** Network administrators use honeypots to lure would-be attackers, to analyze their behavior so that they can tune their sensor signatures to detect malicious activity and better defend their network.

> [!info]- Semantic Content
>
> **Analogies:** such as (3)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (1), be careful (1)
> **CLI Commands:** make (1)
> **Env Vars:** dmz (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### The EINSTEIN system
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=0)** - [Instructor] In the real world, intrusion detection is used in many forms.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=5)** One is the Department of Homeland Security's EINSTEIN System.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=10)** The EINSTEIN System is comprised of EINSTEIN 1, EINSTEIN 2, and EINSTEIN 3A.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=18)** The EINSTEIN System actively monitors the traffic for threats.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=23)** The United States' government is constantly at risk for many types of attack, including denial of service attacks, malware, unauthorized access, and active scanning and probing.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=36)** The EINSTEIN Systems have an active role in federal government cyber security.
>
> **[0:42](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=42)** The system uses widely available commercial technology and protects perimeter defenses to federal civilian executive branch agencies that include agriculture, homeland security, and treasury.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=57)** The EINSTEIN System's two main functions are to observe and report possible cyber threats and to detect and block attacks from compromising federal agencies.
>
> **[1:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=68)** The EINSTEIN Systems provide the situational awareness necessary to take a proactive approach against an active attack.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=77)** The intelligence gathered helps agencies to defend against ongoing threats and records the data flow in case of an attack to conduct a forensic evaluation.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=88)** Currently, there are three threat monitoring systems in the EINSTEIN family.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=94)** EINSTEIN 1 and EINSTEIN 2 act like an intrusion detection system.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=99)** The first iteration is EINSTEIN 1, which monitors and records NetFlow traffic for potentially malicious activity.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=108)** EINSTEIN 2 uses a signature-based sensor grid that detects suspicious traffic and sets off an alarm.
>
> **[1:56](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=116)** EINSTEIN 3A uses a watch list to actively block threats.
>
> **[2:01](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=121)** EINSTEIN is like the intrusion detection, intrusion prevention system used on corporate networks.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=128)** But like those devices on the corporate networks, it cannot defend against all threats.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=134)** However, it's an important component in providing defense in depth and managing the potential risk of cyber attacks.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=143)** The EINSTEIN system observes and reports possible cyber threats, and blocks attacks from compromising federal agencies.

> [!info]- Semantic Content
>
> **Env Vars:** einstein (17)
> **Speakers:** - [instructor] (1)


### 7. Conclusion

#### Summary
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/summary?u=76281980&t=0)** - [Lisa] Thank you for watching.
>
> **[0:02](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/summary?u=76281980&t=2)** In this course I covered the concepts of intrusion detection and intrusion prevention systems.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/summary?u=76281980&t=8)** I have reviewed detection and signature engines and reviewed how intrusion prevention systems make decisions on what action to take.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/summary?u=76281980&t=18)** I covered best practices on how to deploy an intrusion prevention system and discussed some practical applications.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/summary?u=76281980&t=26)** If you're interested in learning more, please check out the IT segment of the library where we add new courses all the time.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/summary?u=76281980&t=35)** It's well worth your time to check out any course in the Ethical Hacking series.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/summary?u=76281980&t=40)** And if you want to learn more about encryption check out my course, Learning Cryptography and Network Security.
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/summary?u=76281980&t=47)** If you want to learn more about packet analysis, check out my courses on Wireshark.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/summary?u=76281980&t=53)** For a complete list of all my courses go to my author page.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/summary?u=76281980&t=58)** Keep learning, I hope to see you again soon.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [lisa] (1)


## Instructor

- [[Lisa Bock]]

## Skills Covered

- Intrusion Detection
- Cisco Networking

## Path Context

### In [[Cisco Network Security- Safeguarding Network Integrity and Data]]
← [[Cisco Network Security- Cisco Firewall Technologies]] | **6 of 7** | [[Cisco Network Security- Content and Endpoint Security]] →

## Appears In

- [[Cisco Network Security- Safeguarding Network Integrity and Data]]

## Related Courses

_Courses sharing skills:_

- [[Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization]] — Cisco Networking
- [[Cisco Networking Foundations- Switching and Routing]] — Cisco Networking
- [[Cisco Networking Foundations- IP Addressing]] — Cisco Networking
- [[Cisco Networking Foundations Fundamentals Of Cisco Networking]] — Cisco Networking
- [[Cisco Network Security- Content and Endpoint Security]] — Cisco Networking

---

[↑ Back to top](#)