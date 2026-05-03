---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: penetration-testing-essential-training-2021
url: "https://www.linkedin.com/learning/penetration-testing-essential-training-2021"
level: Intermediate
updated: 8/5/2021
learners: 16402
skills:
  - Penetration Testing
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGfmTLus2CsDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628010147364?e=2147483647&amp;v=beta&amp;t=fVavcbqYjGR2Iq0TcKl28rEjPh0lYC1Tj6jCGAAQWbM"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Penetration Testing Professional Certificate by Cybrary]]'
next_courses:
  - '[[Offensive Penetration Testing]]'
path_nav: '[{"path":"Penetration Testing Professional Certificate by Cybrary","position":1,"total":2,"prev":null,"next":"Offensive Penetration Testing"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/penetration-testing
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Penetration%20Testing%20Essential%20Training%20(2021).md)

![Penetration Testing Essential Training](https://media.licdn.com/dms/image/v2/C560DAQGfmTLus2CsDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628010147364?e=2147483647&amp;v=beta&amp;t=fVavcbqYjGR2Iq0TcKl28rEjPh0lYC1Tj6jCGAAQWbM)

# Penetration Testing Essential Training

> You've secured your systems, trained your users, and fortified your network. Think you're ready to handle a cybersecurity threat? Penetration testing is one of the best ways to see if your security will hold. It puts testers in the role of attackers, looking for vulnerabilities in your networks, computers, applications, email, and users. This course provides an introduction to the key knowledge an

> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021) | Intermediate | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Build a foundation in penetration testing](#build-a-foundation-in-penetration-testing)
  - [What you need to know](#what-you-need-to-know)
  - [Disclaimer](#disclaimer)
- [**1. What Is Pen Testing?**](#1-what-is-pen-testing) (3 videos)
  - [Pen testing overview](#pen-testing-overview)
  - [The cyber kill chain](#the-cyber-kill-chain)
  - [The MITRE ATT&CK repository](#the-mitre-attck-repository)
- [**2. Pen Testing Tools**](#2-pen-testing-tools) (6 videos)
  - [Scan networks with Nmap](#scan-networks-with-nmap)
  - [A Netcat refresher](#a-netcat-refresher)
  - [Capture packets with tcpdump](#capture-packets-with-tcpdump)
  - [Work with netstat, nbtstat, and arp](#work-with-netstat-nbtstat-and-arp)
  - [Script with PowerShell](#script-with-powershell)
  - [Extend PowerShell with Nishang](#extend-powershell-with-nishang)
- [**3. Bash Scripting**](#3-bash-scripting) (3 videos)
  - [Refresh your Bash skills](#refresh-your-bash-skills)
  - [Control the flow in a script](#control-the-flow-in-a-script)
  - [Use functions in Bash](#use-functions-in-bash)
- [**4. Python Scripting**](#4-python-scripting) (7 videos)
  - [Refresh your Python skills](#refresh-your-python-skills)
  - [Use the system functions](#use-the-system-functions)
  - [Use networking functions](#use-networking-functions)
  - [Work with websites](#work-with-websites)
  - [Drive Metasploit through Python](#drive-metasploit-through-python)
  - [Access SQLite databases](#access-sqlite-databases)
  - [Use Scapy to work with packets](#use-scapy-to-work-with-packets)
- [**5. Kali and Metasploit**](#5-kali-and-metasploit) (7 videos)
  - [A Kali refresher](#a-kali-refresher)
  - [Fuzzing with Spike](#fuzzing-with-spike)
  - [Information gathering with Legion](#information-gathering-with-legion)
  - [Using Metasploit](#using-metasploit)
  - [Exploit with Armitage](#exploit-with-armitage)
  - [Scan targets with GVM](#scan-targets-with-gvm)
  - [Managing GVM problems](#managing-gvm-problems)
- [**6. Web Testing**](#6-web-testing) (5 videos)
  - [Approach web testing](#approach-web-testing)
  - [Test websites with Burp Suite](#test-websites-with-burp-suite)
  - [Check web servers with Nikto](#check-web-servers-with-nikto)
  - [Fingerprint web servers](#fingerprint-web-servers)
  - [Web server penetration using sqlmap](#web-server-penetration-using-sqlmap)
- [**7. Understanding Exploit Code**](#7-understanding-exploit-code) (4 videos)
  - [Exploit a target](#exploit-a-target)
  - [Understand code injection](#understand-code-injection)
  - [Understand buffer overflows](#understand-buffer-overflows)
  - [Find exploit code](#find-exploit-code)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build a foundation in penetration testing](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/build-a-foundation-in-penetration-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/build-a-foundation-in-penetration-testing?u=76281980&t=0)** - [Instructor] Cyberspace, as it's now known, supports much of our social, business, and government activities. But with that has come a whole ecosystem of cyber threats. It's critical that we know how to penetration test our cyberspace presence to ensure we're safe from harm. In this course, I'll be introducing you to the world of pen testing. I'll start by explaining what pen testing is and how it differs from system testing and hacking. And I'll look at some of the testing tools we have in the Carly testing toolbox. I'll cover the basics of web testing, and we'll look at how Bash and [[Python (Programming Language)|Python]] scripts can be used. I'm Malcolm Shore, and I've spent a career helping governments and businesses protect their systems against cyber attack. I'd like to invite you to take this [[LinkedIn]] learning course to learn about the essentials of pen testing. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[LinkedIn]] (1)
> **CLI Commands:** python (1)
> **Tools:** bash (1)
> **Speakers:** - [instructor] (1)

#### [What you need to know](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/what-you-need-to-know?u=76281980&t=0)** - [Narrator] This is a practical course and during this course, I'll be using [[Windows]] and [[Linux]] based tools, running on a VirtualBox test network to do testing. In particular, I'll be using the Kali testing framework and the Metasploitable system as a test target, I'll be using both commercial and public domain tools for testing. And I'll be showing you code in Assembler and C. You should also know the basics of Bash and [[Python (Programming Language)|Python]] scripting, and I'll provide a refresher on them. Pen testing is a challenging pursuit. You should be competent in computer and network technologies, and you should have a working knowledge of [[Ethical Hacking]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Linux]] (1), [[Python (Programming Language)|Python]] (1), [[Ethical Hacking]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Tools:** bash (1)
> **Speakers:** - [narrator] (1)

#### [Disclaimer](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/disclaimer?u=76281980&t=0)** - [Instructor] This course uses a range of third-party testing tools. Some are commercial [[Microsoft Products|products]], and some are open source. The download and installation instructions for all tools used in this course is available as a PDF in the associated course material. While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers. And we can't provide assurance that these nice might not have been compromised when you visit them. Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware and may raise antivirus alerts when you visit them. The testing tools we demonstrate are extremely powerful. They may demonstrate some of the same signature characteristics as malware and malicious implants, and may raise antivirus alerts when you try to download them. Again, we can't provide assurance that the software hasn't been compromised when you download it. And so, as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load into your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Env Vars:** pdf (1)
> **Speakers:** - [instructor] (1)


### 1. What Is Pen Testing?

[↑ Back to Table of Contents](#table-of-contents)

#### [Pen testing overview](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=0)** - [Instructor] Over the last decade, testing computer systems for vulnerabilities has because a necessary part of any deployment. Traditionally the [[Software Development]] life cycle included testing as the final stage prior to going live and used testing methods based on developing test cases to confirm the software was functionally correct, i.e. it produced the correct result. While this was all very well for software through to the 1990s, the advent of the internet and online services provided a rich environment for hackers to find flaws in software. Often these flaws exploited an expected input, such as maliciously crafted packets, and used unexpected techniques, such as command injection. The typical hacker was a bored teenager with a computer and a modem and plenty of spare time. These attacks demonstrated the limitations of testing by thinking like a developer and began the age of testing by thinking like an attacker. In other words, don't just run a set of test cases. Also use your imagination and try to think of different ways to penetrate your target. Pen testing, as this approach to testing is now known, has become a recognized testing approach and a popular career choice. The name hacker was originally used to describe someone who was very skilled at modifying computer software in order to make it perform exceptionally well. Over the years, the term has been increasingly used to describe someone who has the same level of skills
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=95)** but uses them for annoying or malicious purposes. As the internet grew, hackers started posting their hacking software on bulletin boards, and then on shared underground websites. These were often scripts which automated the attacks using languages such as Perl, or more recently [[Python (Programming Language)|Python]]. Would-be hackers with few skills were then able to download the tools and run them, and this community became known as script kiddies. As businesses started using attack techniques in a controlled environment to check their own software, the term white hat was used to distinguish the authorized testers from the black hat, or unauthorized hacker. As the internet grew, a number of different types of black hat hackers emerged. Hacking amongst bored teenagers has continued to flourish, but increasingly are script kiddies. Some of the more skilled amongst them have become research hackers, who find bugs and develop their own exploits, often in order to sell them to other black hats on the dark net. Of more concern, many countries now fund state-sponsored hackers, sometimes called cyber warriors, who hack for military or espionage purposes. Similarly, organized crime has seen the financial gain possible with hacking, and now cyber criminals form one of the biggest groups of hackers targeting industry. State-sponsored hackers and cyber criminals are very skilled and will often deploy zero day exploits,
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=188)** which can punch holes through even the best-defended networks. They operate stealthily, they cause immense damage and financial loss, and have created a toxic environment of mistrust and fear on the internet. As to the white hats, the increasing black hat activity has seen a massive demand for [[Penetration Testing]] and a demand for a much higher skill level to match that of the black hats. Some of the more skilled white hat testers have focused on research to find bugs and to claim bug bounties. As with black hat hackers, the white hat community developed some post white hat testing tools on the internet. Some of these are commercial tools released onto the internet, often with a community addition with a limited capability and require a license to be purchased in order to unlock their full potential. Others are fully functional freeware or shareware tools. In addition to individual tools, there are a number of testing frameworks available, which bring a set of tools together. The best known of these is [[Kali Linux]], a full freeware [[Linux]] distribution which includes over 600 tools, which is often the primary framework used by a pen tester. The start point for a career in penetration testing is to become an ethical hacker. The ethical hacker understands the internet environment and has a knowledge of the tools used to test systems. An ethical hacker can run the standard tests and provide a first level of confidence that a system is secured against a casual attacker.
>
> **[4:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=282)** The pen tester has a much higher level of both knowledge and skills, and is able to not only use the tools, but also find the more sophisticated weaknesses in systems. A pen tester will be able to not only detect a security issue, but also demonstrate how it can be exploited. This may be done by modifying an existing exploit or creating new exploit code. A pen tester is able to provide confidence that a system can withstand a sustained attack from a skilled attacker. An elite pen tester is someone who has the highest level of skills and often finds zero day exploits to support his or her pen testing. Elite pen testers are also the community of hackers who create many of the public domain tools used by the white hat community. Certified Ethical Hacker is the foundational certification for [[Ethical Hacking]] or pen testing. While it used to be a paper-based certification, it now involves fully fledged hands-on training. It's the basic certification required for someone to start out in a career in systems testing. Offensive Security is the organization which provides the Kali framework, and it offers a range of pen testing certifications which are recognized globally. The benchmark certification for a professional pen tester is the Pen-200 Offensive Security Certified Professional, or [[OSCP]]. This is the certification most professional pen testers have,
>
> **[6:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=375)** and it demonstrates not only knowledge of pen testing techniques and tools, but also a high level of skill in applying them to an unknown target environment. For people wanting to focus on wireless, or add wireless testing to their skill set, there's the Pen-210 Offensive Security Wireless Professional Certification, OSWP. This involves demonstrating the ability to use wireless tools and techniques effectively. The Pen-300 Offensive Security Experienced Pen Tester, or OSEP, goes beyond the skills and knowledge set required for OSCP and demonstrates the very highest level of expertise. This involves not just having the knowledge, experience, and training to do pen testing, but an ability to creatively find new ways to penetrate a network. While we're focused on pen testing in this course, this is just one of a number of ways in which cyber defenders can address the threats. An important of cyber defense is checking for and correcting known vulnerabilities. This can be done for the perimeter with an online service such as Nessus, and internally, with network [[Vulnerability Assessment]] tools such as Rapid7's Nexpose. Pen testers run tools and techniques against targets looking for areas of weakness that the developer hasn't found during testing, and that the vulnerability scanner hasn't detected. These may be oversights that should have been found, or zero day vulnerabilities
>
> **[7:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=469)** that aren't in the signature database. The ultimate pen test is called a red team test, where a team of pen testers are given authority to mount an unannounced attack on the whole network, with the objective of doing everything that an attacker would to find a way to penetrate the network and get to its internal systems. Finally, there's a new approach and a new breed of professional called a cyber hunter, whose job is to do deep monitoring of the network and server environment, looking for indicators that the network is being compromised. The cyber hunter will use network [[Intrusion Detection]] systems and [[Big Data]] security analytic solutions to find indicators of compromise. Cyber hunting is an emerging discipline, and there are, at this stage, no specialist tools available. This function and the tools for it will be a significant area of development over the next decade.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (2), [[OSCP]] (2), [[Software Development]] (1), [[Python (Programming Language)|Python]] (1), [[Kali Linux]] (1)
> **CLI Commands:** find (7), make (1), python (1)
> **Analogies:** such as (5)
> **Env Vars:** oscp (2), oswp (1), osep (1)
> **Definitions:** in other words (1), known as (1), is called (1), is an  (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [The cyber kill chain](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=0)** - [Instructor] Cyber attack is now recognized as a serious threat to governments, businesses, and to individuals. Nowadays, cyber attacks come mostly from organized criminals and state sponsored agents, using well-defined end to end business processes and attack techniques. Let's look at the various stages that an attack will go through, from inception to achieving its ultimate goal. In 2009, a team from the Lockheed Martin Cyber Emergency Response Team produced a seminal paper on cyber attack called Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains. This can be downloaded from their website shown here. The research paper introduced the concept of what is now commonly known as the cyber kill chain. The cyber kill chain views an attack in seven stages, reconnaissance, weaponization, delivery, exploitation, installation, command and control, and action. An attack doesn't always progress from one step to the next. They'll often overlap, but each stage represents a milestone in prosecuting the attack. Reconnaissance is the term given to finding, and finding out about, a target. Just as a burglar will case a joint before breaking in, so a cyber criminal has to find out about his or her target. Individuals typically have one address on the internet, which has been allocated by their internet service provider.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=96)** Whereas a business may have a number of addresses in what is known as their internet domain. A cyber attack against a business target will start with the known website address and then scan the internet space around that address for other systems used by the target. The business will see this as a response check on every host in its domain. This is known as an IP address scan. Then, when the attacker has a list of active hosts, he or she will scan each host in turn to find out what entry points are exposed. This is known as a port scan. This is done to identify potential vectors for attack and check the versions of software used in those vectors. Attacks nowadays are not done manually. An attacker will usually purchase time on a network of compromised computers in order to run automated scans. These networks are known as botnets and may consist of hundreds of thousands if not millions of compromised computers. This allows cyber attack to be run at scale. Weaponization means taking a known vulnerability and customizing it to a specific target or group of targets and integrating it to enable it to run from an automated cyber attack platform. The weaponized malware may be designed to exploit a vulnerability in a specific version of an operating system, or target a specific online [[Banking]] website. In the age of hacking as a business, cyber criminals will often purchase the weaponized malware from dedicated developers,
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=190)** rather than develop their own version. The most common way of delivering malware is to attach an infected document, PDF image, or other electronic item in a way that when the document is opened, the malware will self-install. This file can then be sent to the victim via email, a process known as [[Phishing]]. Another way might be to find a vulnerable website, infect it with the malware, and send an email invitation to the target to visit the website. If the victim visits the website, then the malware is downloaded and infects their workstation. A third way might be to use default user IDs and passwords built into software on the target system, or to use a stolen user ID and password to enter the target system and directly implant the malware. It's also possible to find flaws in software that's exposed to the internet, and to manually deliver the malware. In practice, an attack will often require establishing a beachhead on an internet exposed host, and then using that to penetrate deeper into the system to get to the real target, which may not be directly connected to the internet. Finally, an infected flash drive can be used to deliver malware, and this can be very effective if the target system is not connected to the internet. This requires that a user of the target system be persuaded or tricked into using the flash drive. For email attachments and flash drive attacks, the infected item will exploit a vulnerability in the target software, post delivery,
>
> **[4:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=285)** when the document is opened or the flash drive inserted. A compromised website may similarly download [[HTML]] code, which takes advantage of a browser vulnerability. In the case of remote access, the exploitation phase is simply the unauthorized use of credentials. There's also another class of exploitation, which is a user in the target organization executing malware without knowing it. A mail attachment, a malicious document, or a compromised website. This is the simplest and unfortunately the most successful exploitation vector. After the exploitation phase, the malware or intruder may simply take action, skipping directly to the last phase of the cyber kill chain. However, the more usual case is that a payload is installed either into the memory or onto the hard disk of the target system. Additionally, some form of mechanism may be introduced to make sure the payload is restarted every time the system is rebooted. One way of doing this in [[Windows]] is to add a registry entry to automatically run the payload when the system starts up. The payload will often be or include a means of maintaining ongoing access into a command shell. A system compromise is often automated. Once a payload has been installed, the first action it takes will be to connect back to a command and control server to register as a compromised host. The attacker will then want to send back a command for some action to be taken, listing the subdirectories and files, extracting specific named files,
>
> **[6:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=379)** modifying or replacing software, and so on. An important feature of the payload is that it can determine the address of the command and control server, which may change over time. Exactly what form of action is carried out by a payload when it arrives at its target depends upon the motives of the attacker. A hacktivist may want to deface a website. A state sponsored agent may want to steal sensitive information. And a cyber criminal may want to access a bank account in order to steal money. The common theme, however, is that whatever the action is, it's unlikely to be in the best interests of the target.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (1), [[Phishing]] (1), [[HTML]] (1), [[Windows]] (1)
> **Definitions:** known as (6), is a  (1)
> **CLI Commands:** find (4), make (1)
> **Env Vars:** pdf (1), html (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [The MITRE ATT&CK repository](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980&t=0)** - [Instructor] It's useful to know the kind of techniques that attackers can use in their malware when preparing our defenses. MITRE provides a repository of tactics and techniques that have been found in malware accessible through their attack site, building on the Lockheed Martin cyber kill chain, the MITRE repository looks at the full attack from reconnaissance to impact and takes a deeper dive into what tactics and techniques are used to infiltrate the malware, and the malware when it executes on its targets. Selecting matrices, we can see the list of techniques by the 12 stages of an attack. Let's select external remote services. And we can say an explanation of the form of initial access, examples of various actors in how they achieve this, and scrolling down, we can see the mitigations, ways to detect the technique and relevant references. Selecting tactics enterprise. We can see for the various tactics in the left-hand list, the kind of techniques by attackers. If we select collection and then scroll down to T1123. We can see that audio capture from the computer microphone is a technique used to eavesdrop on a target.
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980&t=94)** Groups provides a list of known cyber attack groups. If we scroll down to platinum, we can see that this group targets governments and related organizations in South and Southeast Asia. The MITRE attack site is a useful knowledge base for anyone looking at diagnosing malware and attributing it to an attack group.

> [!info]- Semantic Content
>
> **Env Vars:** mitre (3), t1123 (1)
> **UI Navigation:** scroll down (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 2. Pen Testing Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Scan networks with Nmap](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=0)** - [Instructor] Let's take a refresher on using [[Nmap]] for scanning networks to discover what hosts are present and what services are available on those hosts. I'll be using the Nmap tool loaded into Kali. Nmap's primary function is to scan a network and probe the hosts that it detects to determine the services running. It can scan using a number of techniques, which together can help identify services which are open to the Internet, that are closed, and those that are open, but behind a security filter of some sort. The first thing we'll do is to discover what hosts are on my test network. The most straightforward way to do this is using the -SN option across the sub-net. The -SN option touches each host in turn using the ICMP ping protocol to see whether it responds. Nmap reports only the hosts that do respond, providing the IP and MAC address of the host. Having identified which hosts are responding, we can probe the TCP and UDP ports to check what services are being presented. Let's check the targets on 10.0.2.8, my Metasploitable server, for TCP ports using the -PS option. I'll enter nmap -PS 10.0.2.8. Nmap is checking the most common services to see if they're open on the host. It does this by starting to open a connection to the service, and then closing it down before the connection is complete.
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=94)** This is called a TCP SYN ping, and it works by sending an empty TCP packet with the SYN flag set and waiting for the host to respond with the standard SYN-ACK response. While a normal connection would be completed by sending back an ACK, Nmap instead cancels the connection before it completes. We can see we have quite a few ports open. Let's now check for UDP ports. We can do this using the -SU option. This will check the most common thousand UDP ports. We can add the -P0 option to skip the ping check of the host, as we know it's up. This'll take a while, so we'll come back when it's finished. We've finished the UDP scan now and we see a number of these ports open. Let's use Nmap to drill down into an individual service to get more details about what's running. By using the -SV option, Nmap will try to identify the version of software being used for service. I can limit the testing to just one service with the -P option. Let's test the second service shown on the TCP list, the Secure Shell service on port 22. Nmap comes back within a few seconds and tells us that the service on port 22 is running the OpenSSH 4.7p1 software. We can combine these and check multiple port ranges for both TCP and UDP. The command -sSUV specifies both TCP and UDP
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=190)** and service detection. The -P value requests the UDP ports 53, 111, and 137, and TCP ports 21 to 25, 80, 139, and 8080. The results show the response for all the requested ports as either open or close. Let's check next what operating system is running on the target. We do this using the -O switch. The scan has now finished and Nmap has fingerprinted the computer operating system correctly as a [[Linux]] system, as well as listing the TCP ports that it's detected. Nmap also has a comprehensive library of scripts. We can see these in its scripts directory. These provide many advanced capabilities. Let's run one. We'll use the rexec brute force test to extract credentials via port 512. We can do this by using the --script argument. Here we see a list of valid credentials for the Metasploitable server. Nmap is an important tool in the pen-testers inventory. It's worth spending time to become very familiar with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (13), [[Linux]] (1)
> **Env Vars:** tcp (9), udp (7), syn (3), ack (2), icmp (1)
> **Ports:** port 22 (2), port 512 (1)
> **Versions:** 10.0.2 (2)
> **Definitions:** is called (1), is an  (1)
> **Code Identifiers:** ssuv (1)
> **Speakers:** - [instructor] (1)

#### [A Netcat refresher](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=0)** - [Instructor] [[Netcat]] is often referred to as the Swiss Army Knife of networking, because it has so many features and so many uses. Fundamentally, it operates as either a sender or a receiver of arbitrary data across the network. Netcat is installed by default in Kali. Let's check the IP address of my Kali system. I've got a script set up, called myip, which does this for me. Okay, 10.0.2.15. Okay, 10.0.2.15. Let's use Netcat to set up a chat line across the internet. I'll set up a Netcat listener on Kali by specifying the -l option, and a port number with a -p option. nc -lp nc -lp nc -lp and I'll use port 4545. Netcat is now listening for data to come in on port 4545. I'm now on my [[Windows]] system which also has the Netcat version nc64 installed. I can connect to Kali by saying nc64 10.0.2.15 4545. by saying nc64 10.0.2.15 4545. by saying nc64 10.0.2.15 4545. by saying nc64 10.0.2.15 4545. This establishes a raw data connection. I'll type Hello Universe I'll type Hello Universe I'll type Hello Universe and press enter. Back in Kali, we can see the same text has appeared. If I now enter: Hi, how is Mars? If I now enter: Hi, how is Mars? If I now enter: Hi, how is Mars? It appears immediately in the window system. To terminate the connection, I can press Control + C. The next thing I'll do with Netcat is to copy a file
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=98)** from one system to the other. I've got a text file on my Kali system called myfile.txt. Let's have a look at that. cat myfile.txt. cat myfile.txt. cat myfile.txt. Ah. 'Twas on a lofty 'visors side. I now want to set up Netcat to receive this file in Windows. Firstly, I'll check my IP address with ipconfig.
>
> **[2:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=127)** We can see the address is 10.0.2.14. I'll now set up Netcat to listen and receive our Kali file. nc64 -lp and I'll use 4545 again. nc64 -lp and I'll use 4545 again. This time, whenever I get texts coming in, I'll put it into incoming.txt. I'll put it into incoming.txt. So now when the data is received, it will be sent not to standard out, but instead into a new file called incoming.txt. Okay, let's go do that. To transfer the file, I type nc 10.0.2.14 4545, I type nc 10.0.2.14 4545, I type nc 10.0.2.14 4545, which is the port that we specified the listener on, and I'll pipe into that connection. and I'll pipe into that connection. myfile.txt myfile.txt myfile.txt and with three seconds of no transfer, it will terminate. This command tells Netcat to take the data from myfile.txt instead of standard in. Netcat makes the connection, takes the input and sends it through the network, and then terminates. Okay, let's have a look at what we've got. Type incoming.txt Type incoming.txt and we can see that we've got the same file that we sent. Let's clear the screen. Netcat can also be used as a client for services on another host. For example, we can use Netcat to connect to a web server. I'll type nc -v [google.com](https://google.com) on port 80. I'll type nc -v [google.com](https://google.com) on port 80. So we're looking at the website, [google.com](https://google.com).
>
> **[3:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=220)** The -v switch tells Netcat to be verbose and provide me with status messages, and 8 is the standard port for accessing a website. When the connection is made, I can type the HTTP command: GET index.[[HTML]] HTTP/1.1 GET index.html HTTP/1.1 GET index.html HTTP/1.1 and I press enter twice, and the web server will deliver its webpage code. Similarly, I can connect to an FTP server. I'll type nc -v 10.0.2.8 21. I'll type nc -v 10.0.2.8 21. I'll type nc -v 10.0.2.8 21. I'll type nc -v 10.0.2.8 21. This will connect to my [[Metasploit]] FTP service. Okay, the FTP server is now waiting for me to log in. I'll do that. First, I'll type user anonymous First, I'll type user anonymous and then I'll type pass malcolm@[example.com](https://example.com), and then I'll type pass malcolm@[example.com](https://example.com), which is a random string for the password for anonymous. The server accepts my anonymous login. I'll type help and get a list of the FTP commands available on that server, and I can now type quit to leave. Netcat is indeed a Swiss knife for networking, and it's a tool you should be very familiar with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Netcat]] (15), [[Google]] (3), [[HTML]] (3), [[Windows]] (2), [[Metasploit]] (1)
> **Versions:** 10.0.2 (14), 1.1 (3)
> **File Paths:** myfile.txt (8), incoming.txt (5), index.html (3)
> **Env Vars:** http (4), ftp (4)
> **URLs:** [google.com](https://google.com) (3), [example.com](https://example.com) (2)
> **Prerequisites:** set up (5)
> **Ports:** port 4545 (2), port 80 (2)
> **CLI Commands:** cat (3)

#### [Capture packets with tcpdump](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=0)** - [Instructor] One of the more useful tools when testing [[Linux]] systems is TCPDUMP, which we can use to capture TCP packets that are transmitted on the local network. While more advanced tools such as [[Wireshark]] are ideal for displaying and analyzing packets. TCPDump is a raw capture tool, which comes into its own when doing remote captures. You'll need to make sure when you're trying to capture packets from other hosts on the network that you've got promiscuous mode set, this is set in the virtual machine configuration, under network, advanced, let's set it. TCPDump is a command line tool and is included in the Linux distribution. It has some basic command line options, minus D, this is used to show the list of interfaces. We can use minus I to specify the interface to listen on this common use is minus I and E to list on all interfaces, a minus I ET8 zero to listen just on ET8 zero, the ethernet port. Minus C this is used to provide the count of packets to capture. We can use minus N to suppressed host name resolution, a minus NN to suppress both host name and port name resolution. Some of the other common switches are T, X, V and S. T makes the timestamp human readable, X displays the packets in hexadecimal and ASCII,
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=95)** and V is used for verbose mode with minus VV and minus VVV more so, and S is used to specify the size of the packet data displayed. The default size is 96 characters, but we can use minus S zero to display the full pack. TCPDump also allows expressions to be used as filters. There are three [[Forms]] of expression, type expressions host, net and port. Direction expressions source and destination, and protocol expressions, TCP, UDP, ICMP, and AH. We can also use IP six as a protocol expression to see all IP six traffic, let's have a look at the traffic to and from our window server. Let's see only the UDP packets on the network. Let's look at traffic to and from a sub-net,
>
> **[2:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=163)** let's look at traffic just to one, and then a range of destination ports on a exploitable server.
>
> **[3:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=183)** We can also write out the file we capture in ASCII form using pipes, or we can capture it as a P cap using the minus W switch, let's capture and record all IP six traffic on the network. We can do more advanced expressions using and, or, and brackets. Complex expressions may require quotes. For example, let's look at traffic to the Metis floatable server on ports, 21, 22, 23 or 3389 from my window system.
>
> **[3:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=222)** We can also check and filter and flags in the header. We can do this using direct offset expressions, such as TCP offset 13 bit two, and we can do the same thing using the expressions, TTP flags and TCP syn.
>
> **[4:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=248)** This allows for some useful diagnostics on the network limited only by our imagination. We can find clear text HTTP, get requests.
>
> **[4:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=264)** Note this will find these requests regardless of the port, the services running on. We can look for SSH services on any port by checking for the term SSH in the banner text,
>
> **[4:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=283)** we can check for invalid combinations of flags, such as the RST and syn, both being set. This has been just a refresher. There's lots more for you to explore in TCPDump. It's a powerful packet capture tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Wireshark]] (1), [[Forms]] (1)
> **Env Vars:** tcp (4), et8 (2), ascii (2), udp (2), ssh (2)
> **CLI Commands:** find (2), ssh (2), make (1)
> **Analogies:** such as (3), for example (1)
> **Tools:** command line (2)
> **Definitions:** is a  (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Work with netstat, nbtstat, and arp](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=0)** - Netstat and ARP are two useful tools for viewing network connections. And these can be used to identify anomalies and help focus testing on key areas of interest. Let's look at Netstat first. Netstat is a tool to list protocols, [[Statistics]], and current network connections. By simply entering Netstat, we get the current TCP connections. Okay, we can see our TCP connections. The first column shows the protocol TCP. The next column shows the local address and port number used. The next column shows the foreign address and the final column, the connection state. We can get information on the executable, which created the connections using the -b switch Here, we can see the executable that tones the first of the TCP connections. Similarly, we can use the -o switch to see the process owning the port. We can use the -a switch to list all services that are active, listing both TCP and UDP ports. This shows the TCP ports that are established as well as both TCP and UDP ports that are open and listening. *.* in the foreign address indicates that a connection hasn't yet been made as we'd expect for UDP. Let's see how we get the protocol statistics. Here, we can see the number of active and passive TCP ports and failed and reset connections. We can also see a summary of UDP packets sent and received.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=98)** With the minus RN switches, we can see the interface tables with Mac addresses and the [[Routing]] table in numeric IP form. ARP is the address resolution protocol utility, which associates numeric IP addresses with Mac addresses to enable ethernet routing. This is a table which may be modified by an attacker in order to carry out a man in the middle attack. We can display all address entries using the -a switch, and we can add an address using the S switch, and then we can review the table.
>
> **[2:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=142)** With Netstat and ARP, we can get a good view of the network posture without resorting to packet tracers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Routing]] (2)
> **Env Vars:** tcp (8), udp (4), arp (3)
> **UI Navigation:** switch to (2)
> **Definitions:** is a  (2)
> **Speakers:** - netstat (1)

#### [Script with PowerShell](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=0)** - [Instructor] [[Windows]] [[Powershell]] comes built into all current Windows systems, and it's to Windows what the bash shell is to [[Linux]], a powerful command line tool for automating systems and [[Network Administration]]. It's also a useful tool for the pen tester to be able to use when carrying out testing. PowerShell combines the features of a scripting language with command line utilities and commandlets as well as the ability to interface to the Windows management instrumentation or WMI system. Commandlets are a new concept with PowerShell. They use a standard naming convention that follows a verb noun pattern such as 'get help,' 'gets event log,' 'get process,' and 'set service.' The get verb displays information about the noun and the set verb modifies or sets some, or all of that information. Get and set are just two examples. There are around a hundred verbs that can be used. I'm in the PowerShell console, and I can list the available verbs by entering the command Get-Verb. We can see in this list, get and set, and many other verbs. We can see how many with a handy function call by entering Get-Verb.count and we see there's 98. We look at some more of these verbs as we refresh our skills in PowerShell. We can get help on the various [[Forms]] of these verbs. For example, we can enter 'help push.' We can see there's a commandlet Push-Location
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=99)** and an alias of pushd for that. By entering 'help pushd' we get the full documentation on the commandlet. We can see this is a stack operation commandlet, which pushes the location onto a stack, and that there's an associated set of commandlets such as Get-Location, Set-Location, and Pop-Location. PowerShell supports the standard Windows shell commands, such as CD, dir, and ipconfig to name a few. We can use the standard less than and greater than operators in PowerShell, as we would in Windows. We can see the host name and the directory by typing the file. We can also use the cat command to list the file as we would in Linux. PowerShell commands can be scripted into a text file and we use the .ps1 extension to show that the file is a PowerShell script. We can run any Windows program or PowerShell script by entering its name. So let's create a text file using notepad. For a normal executable, we'll prefix it with dot slash, but for Windows commands, we can omit that. Okay, let's just put in a couple of PowerShell commands as an example, and we'll save it as test1.ps1.
>
> **[3:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=202)** Now we can run the script this time using the dot slash prefix, and we can see the get process command being executed. We don't need to use notepad to write scripts. PowerShell comes with an intelligent scripting system, ISE, which makes developing and testing complex scripts, much easier. I'm in the ISE and can create a script by clicking 'new' on the toolbar. Okay, we've got to tab to write a script. As I write it, I get assistance with the command format. I can now save that as mytest1,
>
> **[4:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=247)** and then run. Back in the console, let's see how we can use variables in PowerShell, and we prefix them with the dollar sign. We can also set up a list by just declaring it and we can check the number of list entries using the count function. We can also use the echo command to print information to the standard output. And there's also a PowerShell commandlet called 'write-Host' that does the same. We can also include variables in the string and the value of the variable is substituted. We can use 'if then' commands in PowerShell using a bash-like syntax. Note the ability to use multiline entry for this, with execution at the completion of the command. We can also script loops using the 'do while,'
>
> **[5:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=333)** and we get the elements of the list displayed. It's a bit obtuse, really, so there's another way to do this using the 'for each' clause. Much simpler. This has been just a refresher. There's much more to learning PowerShell if you're new to it. You can really get into the details by taking the PowerShell five course by Matt tester, and you can deep dive integrated scripting by taking the integrated scripting environment course with Mike Pfeiffer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (17), [[Windows]] (8), [[Linux]] (2), [[Network Administration]] (1), [[Forms]] (1)
> **Tools:** powershell (17), bash (2), command line (2)
> **Analogies:** such as (3), for example (1)
> **Env Vars:** ise (2), wmi (1)
> **CLI Commands:** cd (1), cat (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Extend PowerShell with Nishang](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=0)** - [Instructor] Let's take a look at Nishang, a set of powerful commandlets written by Nikhil Mittal. Nishang is available in the [[Kali Linux]] release, but it can also be manually loaded into a [[Windows]] system. The zip file can be downloaded from Nikhil's [[GitHub]] site shown here. I've already downloaded and extracted the Nishang master contents into C:\nishang. Note that if you want to work with Nishang you'll likely need to turn off real time protection. A number of these scripts are picked up as a threat by antivirus software. You'll also need to run the script as administrator. So make sure you open the [[Powershell]] using Run as Administrator option. I've got PowerShell loaded and running as administrator. So let's get going. I'll prepare the environment to load the nishang module by allowing unsigned scripts to be run, and importing the nishang scripts for use. PowerShell will ask for permission to load in signed scripts. We need to override this, which we can do fairly easily with the Get-ChildItem command, which we can invoke using its alias gci. We'll look at the Nishang module and recursively unblock all scripts within it. Let's get a listing of all the Nishang modules using the Get-Command commandlet. That's quite a lot of new capability we've added to PowerShell. Okay, let's start running some Nishang commandlets. I'll start with the basic information gathering command.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=98)** The script encountered a couple of problems while collecting information, but let's use notepad to look at what we did find. And we can see we've got a substantial amount of information. Processes, hosts, users, installed software, hosts file, drivers, interfaces, and so on. We can check what the nishang command does using the Get-Help commandlet. Here we've got the help on the Invoke-Mimikatz commandlet which we can use to extract user information from memory. Another interesting command is Get-PassHashes, which extracts the password hashes for us. Okay. We've got our list of hashes. We can scan ports using Nishang.
>
> **[2:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=163)** And we can see the open ports. This is useful for moving laterally in networks. Another powerful feature of Nishang is creating documents with an embedded payload. An example of this is the Out-[[Microsoft Word|word]] command, which I'll run on a system with the [[Microsoft Office]] installed. This can create a default Word document or can embed the payload in whatever Word document is provided. And we've created a weaponized Word document called Salary_Details.doc. In this case, the payload is a command to invoke PowerShell, which we may wish to do as we move laterally through our target network as we test it. Nishang comes with a number of other payload deployment tools, including Out-[[Microsoft Excel|Excel]], Out-Shortcut, Out-CHM and Out-JS. We can do brute force testing with Nishang using the invoke brute force command. This can be used to run a dictionary attack against various services. I'll show an example of running this against an FTP service on a remote system. I've got a user list and a password list set up. I'll use the verbose option so that we can see how we're progressing and stop on success, to terminate when we find the correct credentials. We can see the script running and it's got a bug as it's throwing an exception on a failed try. However, it does find a match. Let's finish our refresher on Nishang
>
> **[4:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=256)** with a look at the Invoke-Prasadhak, which connects to the Virus Total database and checks the executables of all running processes for malware. This requires an API key from Virus Total, which you can obtain by registering a free account. Okay. We checked and we found one file that's flagged as malicious. I can enter the file hashing to Virus Total and find the report. Here we have a single detection by the Baidu engine that matches the WisdomEyes Trojan. I can investigate this further to determine if it's a real Trojan or a false positive. This has been a brief introduction to how we can extend our PowerShell testing capability with Nishang. Nishang provides many commandlets and it's useful to spend time learning about each of them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (6), [[Microsoft Word|Word]] (4), [[Kali Linux]] (1), [[Windows]] (1), [[GitHub]] (1)
> **Tools:** powershell (6), github (1)
> **CLI Commands:** find (4), make (1)
> **Env Vars:** chm (1), ftp (1), api (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)


### 3. Bash Scripting

[↑ Back to Table of Contents](#table-of-contents)

#### [Refresh your Bash skills](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=0)** - One of the skills that can be quite useful when pen testing is Bash Scripting. Bash is a program that comes built into [[Linux]]. Bash scripts, also called Shell Scripts, are text documents with a .sh extension. There's a number of courses on Bash Scripting in our library, and if you want an in-depth understanding of the language, then I'd recommend you look in particular at the course by Scott Simpson, called "Up and Running with Bash Scripting". In the next few videos, I'll run through a quick refresher on the key points of Bash Scripting. Let's have a look at the traditional "Hello World" script in Bash. We start with the declaration that this is a Bash show, and then we'll set a string variable and print it. We need to set the Shell file to enable execution, which we can do with a "chmod" command. And then we can execute it. And here we get our "Hello World". We can use the convention dollar 1, dollar 2, through to dollar N, to access the first, second and nth argument on the command line. We'll put two arguments on the command line and then print them as one message.
>
> **[1:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=83)** And here we get the number of arguments printed and the message. Bash allows us to set variables and carry out operations on them. I'm setting number one to the value of the command line argument, and setting number two as a constant. I'm checking whether the argument is greater than or equal to the constant, and displaying a message accordingly. And then displaying the sum of the two numbers. Variables in Bash are un-timed, So we have to use a double bracket syntax to achieve a new Mary CAD.
>
> **[2:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=124)** Bash displays the correct message, comparing the two values and then displays the sum. We can read information into the Bash script with a "read" command. If we use an echo statement, we'll read on the following line. But if we use the minus P prompt, we'll read input on the same line as the prompt. And I input my name on a new line, firstly, and then on the prompt line.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1)
> **Tools:** bash (12), command line (3)
> **Definitions:** is a  (2)
> **CLI Commands:** chmod (1)
> **Env Vars:** cad (1)
> **Cross-References:** in the next (1)
> **Speakers:** - one (1)

#### [Control the flow in a script](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=0)** - [Instructor] Bash offers a number of flow control statements. One of the common ones we'll be using is the for statement. Let's look at a script which reads data from an array. Note that when we use the at character as an index, we get the number of elements in the array. Note that the first array element has an index of zero when we use the expression $I to use the value of the loop variable as an array index. We can now run the script to print out the list of names. We can also script two other similar loop mechanisms in a Bash script; the why loop and the until loop. Let's have a look at them. Firstly, we set the start point at six and then loop, printing out the variable and decrementing it while it remains greater than zero. Then we run an until loop, printing it out and incrementing it until it's greater than six.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=68)** Now we can run the script. We see the while loop run down from six to one and then the until loop run back up to six. We've already seen an if else loop, but let's look at this again to see how we can check whether a directory exists, and if so, list its contents. We check the directory we provide by using the -D operator. If it does exist, we use the LS command to list it out.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=107)** We can run that with a missing directory name, and we find the directory Barney doesn't exist,
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=117)** but Sniper does.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (1), find (1)
> **Tools:** bash (2)
> **Warnings:** note that (2)
> **Speakers:** - [instructor] (1)

#### [Use functions in Bash](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980&t=0)** - [Instructor] Bash provides the ability to define and code functions. Let's write a script which demonstrates the use of a function and we'll also include the use of the select in case statements. It would define the function and we've used an extended if statement to check the city we're going to visit. This function takes one parameter which is the city name. Note in batch that they single operator equals is used to do string comparisons and assignments. And the double operator equally equal is used for numeric comparisons. We check the city and print advice on the language spoken. The start of the main code prints a question, and then uses the select statement to print a menu and then ask for a series of responses. These are within a do break construct which terminates when exit is selected. The variable PS3 is a system variable uses the prompt for the select statement. Break response, a case statement prints out the city in the country chosen and calls the speak function to display the language used. Let's run this. I'd select Melbourne and Hanoi and Paris, and our exit.

> [!info]- Semantic Content
>
> **Env Vars:** ps3 (1)
> **Tools:** bash (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Python Scripting

[↑ Back to Table of Contents](#table-of-contents)

#### [Refresh your Python skills](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=0)** - [Instructor] [[Python (Programming Language)|Python]] is an interpretive programming language and the interpreter can be found for both [[Windows]] and [[Linux]] at the main Python site shown here. There are various versions of Python and scripts are not always compatible, so modifying Python scripts that you may pick up to do testing is sometimes necessary. You'll need to install Python on Windows but it comes built into most Linux distributions. We'll use Kali to refresh ourselves on Python. One of the useful documents to have when programming in Python is the library reference, which provides details of all the built-in calls that you can make to do things in Python. As a pen tester, you'll be using the networking calls extensively. There are graphical interfaces for Python but for our purposes, we'll run at the command line. Once you've got Python installed, you can check it's working by entering the command, python. This will put you in the interactive interpreter. You can enter commands here and get the response immediately and you can use ctrl + d to quit. We can also use an editor and create a text file containing the Python script, then we can run it as a command line argument. For example, let's create helloworld.py
>
> **[1:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=87)** And we can run that. Python provides us with string and numeric variables, which can be integer and floating point. We can also use Boolean variables. We can assign values to a variable, which takes on the type as used in the assignment. So let's use the interpreter to see how this works. I'll set the variable port to 8080 and I can use the function type to check what type port is. And we can see the port has been set as an integer. I'll set exploited to true and I'll check it's type, which is Boolean. I'll set username to the string, Malcolm and we can see the type of username is string. And when I set value to 12.43 it's type is floating point. We of course have the normal mathematical and string concatenation operators. If I print 12 + 7, I get 19. Let me set a couple of strings. String one is my name is, string two equals Malcolm and when I print str1 + str2,
>
> **[3:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=186)** we get the concatenated string, my name is Malcolm. There are more complex ways of managing data in Python. The first is lists which we can create using square brackets. Let's look at a list of IP addresses. I've created a list called active host and I'll append a value to it. I'll append another value... And then I can print one of the values by using print active host and use the subscript three. And we get the value of the fourth entry. If we print activehost zero, we get the value of the first entry. A similar construct to a list is a dictionary for which we use curly brackets. This is where we can associate a value with a label. Let's create a list of hosts and host names. I'll set the dictionary host name to a pair of values. 173.23.1.1 and I'll call the host name
>
> **[4:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=272)** [munless.com](https://munless.com).ch. and I'll put a second entry in the dictionary. 173.23.1.3 and I'll give that the name, mail.[munless.com](https://munless.com).ch Now if I print the length of host name and this shows that we have two entries in the dictionary, we can print the value of an individual entry in the dictionary by using the expression print hostname and give it the key 172.23.1.3 and it gives us the associated value. We can look through a dictionary using the special term, key. So we'll do a for loop for key and hostname, print key and it prints out the keys for us. We can add more entries to the dictionary with the update method.
>
> **[5:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=348)** And if we just type hostname, we can see that the new entry has been added. We can create multiple dictionaries which we can then reference using subscripts. Let's remake hostname as a multiple dictionary.
>
> **[6:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=375)** I've created the first dictionary and by putting a comma and continuing with new curly brackets, it creates a second dictionary.
>
> **[6:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=395)** Now, we can reference an element in either dictionary with its subscript, starting again at zero. This will select the first dictionary and I can look for the value with the key 172.23.1.3.
>
> **[6:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=414)** Let's move on to conditionals. We can use if else statements to conditionally execute code. I'll set num to five and I'll put a conditional, if num < 10 print single digit number. Which it is. We can also use the for statement to execute a block of code a number of times. for X in the range 1,5 print repetition + string x and note that we only print four entries. The repetition stops when the final value is reached, not after it. Note also that the scope of the conditional or repetition statement extends to all indented lines following it. Python is sensitive to where you start your line of code. We've used the string function here to convert an integer into a string. Python provides many such functions to make scripting easy. Some more examples include the set of string manipulation functions, upper, lower, replace and find. Let's see how we use the upper function. I'll select an entry in our dictionary and they'll display it as an upper case. I won't go into the vast array
>
> **[8:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=507)** of functions that Python offers but you can review them in the library reference documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (17), [[Windows]] (2), [[Linux]] (2)
> **CLI Commands:** python (17), make (2), find (1)
> **Versions:** 173.23.1 (2), 172.23.1 (2), 12.43 (1)
> **URLs:** [munless.com](https://munless.com) (2)
> **Tools:** command line (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** you'll need (1), install (1)
> **File Paths:** helloworld.py (1)

#### [Use the system functions](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=0)** - [Instructor] Let's take a look at one of the functions that we may find useful. The crypt function. This takes the password and provides back its password hash. On [[Linux]] systems, we also use what's known as a salt value. This is consistent for the system, but may differ between systems and it's a two character value. We'll use MS for this. First of all, I have to import the crypt library and then I can call the crypt function with a password and the salt, and that returns the hash. We can use this function in a small password cracker program to recover a password by checking it against the dictionary of expected passwords. Let's also pass the hash as a parameter to the [[Python (Programming Language)|Python]] core. We can do this by referring to the call argument value R V, which is in the SIS library. I've got a dictionary called dict.txt, which I can read in. The dictionary file just contains potential password. I've written a small password cracker, which uses the crypt function. We can see here that we're opening the file, dict.txt and then reading each line, which contains a password to check. We then call encrypt with our salts to calculate the hash value, and then checking it against the command line hash value. If they match, we print the password and exit the program. Note, we have to use the strip function
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=94)** to remove the new line character that exists when we use read line. Okay, let's run this with a hash value we found earlier when we call crypt. And we recover the password.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Python (Programming Language)|Python]] (1)
> **File Paths:** dict.txt (2)
> **CLI Commands:** find (1), python (1)
> **Env Vars:** sis (1)
> **Tools:** command line (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Use networking functions](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=0)** - [Instructor] Another module we do need to understand when we're doing pen testing is the [[Python (Programming Language)|Python]] networking library, the socket module. To use the socket library, we need to import it and then set its configuration, and then create an instance that we can use to call its functions. Let's use the connect and receive functions to get a banner from our Metasploitable FTP site. We import the socket library so that we can use the socket networking features. We set the default timeout to one. That's more than enough for our test network. Then we open a socket and connect to the Metasploitable server on 10.0.2.8 on port 21. Note the use of double brackets. We then receive up to 1,024 bytes back and print it. Let's run that. There we see the banner from the FTP server. One of the standard diagnostic techniques once you've found an active host is to do port scanning. There are many ways to scan for active ports. The simplest is to limit our scan to TCP and try to establish a full connection to the port. This can, of course, take a long time if we try all ports. I'll just scan for those in the range 1 to 1023 on my Metasploitable server. As before, we use the system and socket libraries, this time inside a try block and a for loop. We check the response to see whether we did achieve
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=95)** a connection, and if so, print a message. Let's run it. Here we have a port scanner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Env Vars:** ftp (2), tcp (1)
> **CLI Commands:** python (1)
> **Ports:** port 21 (1)
> **Versions:** 10.0.2 (1)
> **Speakers:** - [instructor] (1)

#### [Work with websites](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=0)** - [Narrator] A significant part of any pen testers work will be website testing. While automated testing tools are readily available, there are times when you might need to do [[Manual Testing]] using scripting tools, such as [[Python (Programming Language)|Python]]. Let's have a look at how we can use Python to work with websites. Websites need to have pages uploaded and one common way to do this is using FTP. We can use the FTP server for testing if we have it's credentials. So let's access the FTP server to check for our web pages. We import the FTP library and then set the remote server address. We then log in with a set of credentials and set the working directory to the website folder which is var/www. We then issue a dir command to get the directory listing. Okay, let's run it. Okay, we've accessed the target server and listed the directory. We can use the urllib to retrieve webpages. I'll import the urllib library. And I'll call the urlopen function and include the webpage I want to see and I'll print it. The next thing an attacker might do is to modify a webpage to do something malicious. Let's see how an attacker can inject code into a webpage
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=95)** to send a web user to a malicious website. Okay, so the first thing we do is to open the website FTP server and login. Then we switch to the directory in which the target web page exists. We open a temporary file on our system and use the FTP command RETR to write the webpage into it. Then we write an iframe with this embedded link to the malicious website. For convenience, I've included my gotcha file in the same directory as the target page but it could be anywhere. Then we reopened the temporary file and use the FTP command store to write that into the target overwriting its webpage. We then display a message indicating we've completed our inject. Let's see how this works. I've modified the metasploitable starting page with an additional menu item for my accounts. This links to my account's web page. This is a fairly simple query page for a user with the link to display user information. Let's take a look at our gotcha page which the inject we'll call. Here, I'm printing a message in a visible iframe but we could be just as well using an invisible iframe and downloading malware. Let's navigate to the web page. We can see the new menu item at the bottom called user accounts. I'll select that
>
> **[3:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=189)** and I'm asked for an account number. Okay, we can see the account details. Now let's run our Python script. And let's have a look at our temporary file. We can see the account request webpage with the iframe included at the end. Now let's go and look at our accounts webpage. I'll navigate to the webpage and now when I'm asked for an account number, I've also got the iframe message. I've been compromised.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Manual Testing]] (1)
> **Env Vars:** ftp (7), retr (1)
> **UI Navigation:** navigate to (2), open the (1), switch to (1)
> **CLI Commands:** python (3)
> **Warnings:** gotcha (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Drive Metasploit through Python](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=0)** - [Tutor] One of the more interesting protocols which is used in both [[Windows]] and [[Linux]] is SMB. This is the Session Management Block protocol, used to provide shared access to files, printers, and so on. It's also the access vector used for attacks such as Conficker, WannaCry, and Petya. The primary port used for SMB is 445. Accessing SMB means either finding an exploit to break into the expos port, or gaining access somehow to credentials. To see how we might interact with SMB, we'll set up a listener so that we can run the Meterpreter. We'll script this into a [[Python (Programming Language)|Python]] function using the "def" statement. Our current Kali host is 10.no.2.11, and we'll use port 3000 for the listener. We'll also set up an exploit to run the PS exec attack from [[Metasploit]], and use a set of target credentials that we know. To integrate with Metasploit, we write the commands we want to run into the Metasploit configuration file using Python, and then execute the Metasploit console.
>
> **[1:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=73)** Below the depth shell line, we have the shell function defined, which will set up and run the handler to prepare a listener. It does this by writing out the standard Metasploit commands to the Metasploit configuration file. Following the def exploit line, we have the exploit that we'll run to get the PS exec access through SMB to Windows. The main part of the script calls the functions to create the resource file and then start Metasploit through the Python system core. Okay, let's run it.
>
> **[1:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=115)** We can see we've started the TCP reverse handler, and we've executed the [[Powershell]] exploit. We're in Metasploit, and we can check what remote sessions exist. Okay, we've got a Meterpreter on session one, so let's switch to that. And we can now work remotely on the target.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metasploit]] (8), [[Python (Programming Language)|Python]] (3), [[Windows]] (2), [[Linux]] (1), [[Powershell]] (1)
> **Env Vars:** smb (5), tcp (1)
> **CLI Commands:** python (3)
> **Prerequisites:** set up (3)
> **Ports:** port 3000 (1)
> **Versions:** 2.11 (1)
> **Tools:** powershell (1)
> **UI Navigation:** switch to (1)

#### [Access SQLite databases](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=0)** - When doing pen testing, we'll often come across SQLite [[Databases]] on everything from browsers to mobile devices. It's useful to have a way to automate access in order to build testing tools and to do [[Manual Testing]]. We can do this relatively easily in [[Python (Programming Language)|Python]]. I've extracted a cookie database from a Chrome browser. Let's take a look at it. Here we open the SQLite3 library and connect to our cookies database. We then execute a query using select against the [[Metadata]] to find the tables in the database. Let's run it. We can see the list of tables in this database, including one called cookies, which holds the text of the cookies that have been stored. Now let's look at the table cookies and see what columns it holds. Again, we open the SQLite3 library and connect to our cookies database. We then execute a query to select all fields and print the field descriptions. Okay, this gives us a list of the field names. Once we found an identified the structure of the tables, we can open a table and list data. Again, we import the SQLite3 library and connect to the cookies database, and we select the two fields we're interested in. We then print all of them with a cookie name first
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=96)** and the site following it with a little formatting. Let's run it. And we get a list of the cookies that have been stored through the browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Manual Testing]] (1), [[Python (Programming Language)|Python]] (1), [[Metadata]] (1)
> **CLI Commands:** sqlite3 (3), python (1), find (1)
> **UI Navigation:** open the (2), select the (1)
> **Speakers:** - when (1)

#### [Use Scapy to work with packets](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-scapy-to-work-with-packets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-scapy-to-work-with-packets?u=76281980&t=0)** - [Instructor] It's occasionally useful when testing to use raw packets to probe a target. We can do this in [[Python (Programming Language)|Python]] by invoking the Scapy library. Scapy is a Python tool, but it also comes as a library to use within your own Python scripts. It enables you to create each of the layers of a packet and within these layers set all or any of the fields. Let's try a simple demonstration of Scapy, creating a SYN flood. Here we can say the flood routine, setting up a loop for the source port, and creating a SYN packet with its IP address and TCP address and sending it to the target. Okay, we can run this script against our Metis (indistinct) server now. This is sending a lot of packets out. Of course, this isn't a sophisticated flood, but it does show the power of Scapy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3)
> **Env Vars:** syn (2), tcp (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Kali and Metasploit

[↑ Back to Table of Contents](#table-of-contents)

#### [A Kali refresher](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=0)** - If you haven't worked with Kali yet, you should take a look at my introduction to Kali course. For the purposes of this course, let's start by taking a look at the basic configuration, updating and application menu. We'll start by looking at how we can change our Kali settings. I'll click on the computer icon at the top right, and settings. We can manage our timeout settings here. Let's look at system and we can see that I've sent Kali to never suspend. Under display, the screen will go blank after 10 minutes and switch off after 15 minutes. Under security, we're going to lock the screen when the system goes to sleep. You can set Kali to manage its power and displays as you like. Before I look at the tools, I'll run the update and upgrade commands to make sure Kali is up to date. I'll open the terminal window and type sudo apt update and sudo apt upgrade. And I'll put the Kali password in, which is Kali, and we'll let that run. And that will do its update followed by its upgrade. Okay, we're up to date now and we can close the terminal window. Our Mac address is the [[Hardware]] address associated with our network card. However, we can override this in software. Let's look at one of those [[System Configuration]] tools included with Kali that we can use to change our Mac address.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=93)** I'll select applications, sniffing and spoofing, Mac changer. Kali opens a terminal and shows us the help display. I can run IF config to see my current settings. IF config We can see the Mac address on the line starting with the [[Microsoft Word|word]] ether. I'll now run Mac changer and change my Mac address. Sudo mac changer
>
> **[2:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=125)** - A eth0. I'll put our password in. Okay, we can see the Mac address shown is the current address and that I've been provided with a new one. And if I run if config again, sure enough, the new one has been set. When we're testing, we'll need to be able to identify what vulnerabilities are known for a specific system. And we can do that in Kali with search ploits which we find under applications, exploitation tools, search ploits. This tool connects to the exploit DB, exploitation database. It's pretty simple to use. We just give it the term we want and it lists the known vulnerabilities containing that term. Search sploits, smb and we get a list of all the vulnerabilities for the smb protocol. We can limit the results with a second term. Search sploits, smb [[Windows]], and the results are limited to just [[Microsoft]] vulnerabilities. There are many tools in the Kali menus. And as a pen tester, you'll want to be familiar with them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[System Configuration]] (1), [[Microsoft Word|Word]] (1), [[Windows]] (1), [[Microsoft]] (1)
> **CLI Commands:** sudo (3), apt (2), make (1), find (1)
> **Tools:** terminal (3)
> **UI Navigation:** click on (1), open the (1)
> **Speakers:** - if (1), - a (1)

#### [Fuzzing with Spike](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=0)** - [Instructor] Vulnserver is an excellent testing environment for understanding how malware works. We're not going to test its full functionality, but we will use it to look at a fuzzing tool called Spike that's included in Carli. I've loaded the vulnerable server shown here onto my [[Windows]] system. This server listens on port 9999. The first thing I'll do is to connect to the server using [[Netcat]]. NC 10.0.2.14 9999. Okay we get the banner, and I can enter help to see what commands it takes. Help. We get a list of commands and we can use these to start fuzzing. And note in the middle there is the TRUN command. We'll use that for our fuzzing tests. To use Spike, I need to set up an action file. I'll call this command .spk and I'll use Nano to build it. Nano_command.spk. And we'll start by asking Spike to read the banner for us.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=63)** And we'll then send out a string. S_string TRUN. Space. And we'll follow that s_string_variable with a command variable.
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=84)** Okay. I'm instructing Spike to send the string TRUN and variable command to the server. To see this in action, we use Wire Shark to capture the packets.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=100)** And we can call the Spike Cen-TCP module by entering generic_send_TCP to 10.0.2.14 on port 9999
>
> **[1:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=112)** using the action file command.spk 0 0. And the servers responding with the welcome message for a few packets, and then stops responding. We've crashed the server. Let's check the packet stream in Wire Shark.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=135)** Okay. At the top we can see the syn syn-ack ack three way handshake between our Carli system on 10.0.2.15 and the vulnerable server on 10.0.2.14. We then see the 105 byte welcome message. And two messages later, we see the TRUN command, and we can see this again. Another 105 byte package, welcome to the vulnerable server and our TRUN command. And again. But eventually, we stop getting the welcome message, and the system has crashed. We know that this string of packets crashed the server and we can now analyze the activity to see which packet we sent just before crashing it. We'll leave the vulnerable server in Spike here but we've barely scratched the surface of these tools. Take some time after the course to look into them further.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Netcat]] (1)
> **Env Vars:** trun (5), tcp (1)
> **Versions:** 10.0.2 (4)
> **Ports:** port 9999 (2)
> **Code Identifiers:** s_string_variable (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Information gathering with Legion](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=0)** - [Instructor] Let's take a look at how we can use Kali to extract information about the services on a target system, while at the same time, looking for credentials to use. To do this, we can use a useful reconnaissance tool called Legion. We find this in Applications, Vulnerability Analysis. And we'll put the password kali in and the startup's a bit messy, but we can right click on the top bar and maximize the Legion window. Let's look on the panel to add hosts and add 10.0.2.8 for our metasploitable server. And we'll do a hard assessment. And we can submit. Legion now starts analyzing our metasploitable server. We can see its progress in the bottom panel. And as the analysis proceeds, we can see the results in the main right panel. If we scroll down to port 3306, we can see that the server is running [[MySQL]] 5.0.51a. We can open the MySQL tab at the top right. And we can see that Legion has used [[Hydra]] to check and found valid credentials to access the [[Microsoft SQL Server|SQL server]]. Similarly, if we click on the tougher FTP on port 21, we find that Hydra has identified valid credentials to access that service also. We can also look at the Services tab in the left pane. We start with access denied on port 6000, but as we moved down the services,
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=94)** we can see bind shell on port 1524, which is open and is described as the metasploitable root shell. Let's take a quick look at the Brute tab at the top left before we leave Legion, This allows us to brute force test the services with options to select a dictionary to use for usernames and passwords. We'll go 10.0.2.8 to our metasploitable server on port 22, and we'll browse for usernames and we'll pick up unix_users.txt. And we'll browse for passwords and pick up unix_passwords.txt.
>
> **[2:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=144)** And then we can run. Okay. We'll leave Legion there for now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[Hydra]] (2), [[Microsoft SQL Server|Sql server]] (1)
> **Ports:** port 3306 (1), port 21 (1), port 6000 (1), port 1524 (1), port 22 (1)
> **CLI Commands:** find (2), mysql (2)
> **UI Navigation:** click on (2), scroll down (1), open the (1)
> **Versions:** 10.0.2 (2), 5.0 (1)
> **File Paths:** unix_users.txt (1), unix_passwords.txt (1)
> **Code Identifiers:** unix_users (1), unix_passwords (1)
> **Env Vars:** sql (1), ftp (1)

#### [Using Metasploit](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=0)** - [Instructor] When pen testing, it's useful to provide evidence that vulnerabilities are in fact exploitable. To do this, we can use [[Metasploit]], which we can find in the applications exploitation tools menu. The first time Metasploit starts up, it will create and prepare its [[Databases]], otherwise it will skip this initialization step. After completing its startup, the msf6 prompt appears. Metasploit is now ready for use. Metasploit includes a database of testing modules, assembly and encoding capabilities, to manipulate, exploit, and payload code. And the Meterpreter, a payload which provides a powerful remote shell. We can see that it includes over 2000 exploits, has over a thousand auxiliary modules, 363 post exploitation tools and 592 payloads in its database. Exploit modules are run against a target system to check whether it's vulnerable, auxiliary commands are generally to gather more information on the targets. Payloads are sent into a target system to demonstrate that the exploit was successful by executing on the targets. The first Metaploit command I'll enter is, help. This shows all the commands that we can issue in Metasploit. This list starts with the core commands, followed by the module commands, the job commands, and so on. I won't go through all of these commands, but you should familiarize yourself with them. I can issue the command, show exploits and that lists all of the exploits
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=96)** in the Metasploit database. The exploit name appears at the left of this list and at the right is the disclosure date, the effectiveness of the exploit, and the description of what the exploit achieves. There's far too many exploits for this to be useful, but I can be more selective and use the search command. Let's look for a [[Windows]] 8 exploit. I'll enter search Win8. Here, we can see a couple of exploits listed for Windows 8. The 2012 Internet Key Exchange exploit and the 2017 Eternal Blue exploit. If I search for Windows 7, we get 35 exploits and payloads listed. Let's now use Metasploit to check whether a system is vulnerable. I'm going to try an exploit on my Metasploitable system and I'll start by looking at its IRC service. Let's see what Metasploit has for us, search irc. Okay, I can see there's a range of exploits for DOS, Windows, Unix and so on. I'll select the Unix exploit called exploit/unix/irc/unreal/_ircd_3281_backdoor. To do this, I enter the command, use, with the exploit name, use exploit/unix/irc/unreal_ircd3281_backdoor.
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=192)** Okay, we're now loaded. I can check the targets this exploit works against by entering the command, show targets. In this case, the exploit can determine what kind of target it has so we can select automatic. Let's set that target type, set target zero. Let's now have a look at what payloads I can use with this exploit, show payloads. I see that I have a number of command shells I can use and the generic command execution. I'll use the info command to get more information on the reverse shell, info cmd/unix/reverse.
>
> **[3:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=235)** Okay, so, this doesn't need administrative privileges and it creates a shell on port 4444. That sounds good. So, let's go select it, set payload cmd/unix/reverse. I'll now see what options I need to set to use this combination of exploit and payload, show options. Okay, I have to set the remote and local host addresses. The remote address, set RHOSTS is 10.0.2.8. The local host, this Kali system, set LHOST is 10.0.2.18.
>
> **[4:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=280)** Okay, let's run the exploit. And we do that by saying, exploit. Okay, we can see Metasploit is establishing the sockets and the Telnet connection. And finally confirming that a command shell has been established on the remote system. The first thing we'll do is check that this is the remote system. Ifconfig eth0. Ifconfig displays the ip address, 10.0.2.8, the remote system. Now, let's check who we are on the remote system, whoamI? Okay, we're on the remote system as, root. We can list processes on the remote system, with the PS command. And we can list files with the LS command. Okay, I'll press control C and terminate the remote shell. And I'll abort this session. And that concludes the short refresher on Metasploit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metasploit]] (10), [[Windows]] (4), [[Databases]] (1)
> **Env Vars:** irc (1), dos (1), rhosts (1), lhost (1)
> **Versions:** 10.0.2 (3)
> **CLI Commands:** find (1), ls (1)
> **Code Identifiers:** whoami (1)
> **Ports:** port 4444 (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** initialization (1)

#### [Exploit with Armitage](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=0)** - [Instructor] Armitage is a great visual tool for carrying out both scanning and attacks on targets, and was originally included with Kali. It's no longer in the standard install, so we'll have to load it. Sudo apt install armitage. Okay, we'll now need to start the [[PostgreSQL]] server and initialize our [[Databases]]. Sudo systemctl start postgresql.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=31)** Sudo, and we'll msfdb init, initialize the [[Metasploit]] framework database. That's already started. Before we start Armitage, we have to fix a bug with a SaltStack exploit. We'll just disable it. We can do this with the commands, cd /usr/share/metasploit-framework /modules/exploits/[[Linux]]/misc. Now, we have to use sudo to change the name with the move command of saltstack_salt_unauth_rce.rb,
>
> **[1:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=75)** which is the Metasploit attack module, and we'll rename it so that it doesn't come up in Armitage. Salt_unauth_rce.rb.bkp.
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=94)** Okay, now we can start Armitage. Armitage. And we'll connect to the Metasploit framework, and we'll start the RPC server. The Armitage screen has a menu at the top and three panels. The four key modules are shown in the top-left panel. The network targets that Armitage knows about on the top-right, and a Metasploit terminal window at the bottom. We'll run Armitage through its graphical interface, but we can see the equivalent Metasploit commands in the console. Let's have a look at the Metasploit database that Armitage has loaded. There are four top level items, auxiliary, exploit, payload, and post. The auxiliary group provides hundreds of tools, which can be quite useful during information gathering and initial testing, scanners, brute force logins, and so on. In the top level menu, we can see clients, fuzzers, scanners, and so on. If we look at scanner and select [[MySQL]] and msql_login, we get the Metasploit framework attack panel. We can say this allows us to specify a password file and a user file and do a brute force attack on MySQL. The exploit group contains the various exploits that Metasploit knows. We can see they're grouped into operating systems. And if we select [[Windows]], we have the various services.
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=188)** If we select smb, and we can go down to ms17_010_eternalblue. This is the exploit behind the WannaCry ransomware campaign. The payload group provides modules to perform the various functions required once the exploit has penetrated the target. This is often to gain a shell for interactive access. I'll select payload, windows, and we can see the meterpreter shells that we can use on a Windows box. Finally, the post modules are used to carry out additional actions once we've exploited and dropped our payload. This can be for such things as privileged escalation, key logging, establishing persistence, and so on. For example, if we look at post, windows, escalate. Here, we can see the various ways to escalate privileges once we have a user shell. Okay, to begin our refresher on using Armitage, let's scan the local network by running [[Nmap]] from the host's menu. We'll select an Nmap Scan, Ping Scan, and we'll enter our subnet, 10.0.2.0/24, and we'll let that run. Okay, we can see Armitage quickly found a number of systems.
>
> **[4:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=282)** I'll select the first, right-click, and select Scan, and Armitage scans the host looking for open ports. In this case, it didn't find any. We'll select the second, Scan, and run that again, and we can see there's a series of ports that are open on that host. If I now select the host and select Services, I can see the various services with the ports. And there's not a great deal of details there yet. We can get Armitage to scan to try and identify the operating system by running Hosts, Nmap Scan, Quick Scan OS Detect. And again, we can run it for the whole subnet. And we'll come back when this finishes. Okay, Armitage has found two Linux systems, one Windows system, and a couple of embedded processes. We may happen to know which operating systems a specific host is running. In this case, I know 10.0.2.11 is Linux, so I can right-click, Host, Operating System, and set it to a Linux host. There is another slight problem with Armitage to do with exploit ranks. Finding attacks only works with the rank set to poor, so I'll select Armitage, Set Exploit Rank, and make sure we set to Poor. I can then select Attack, Find Attacks, and Armitage will run through its database
>
> **[6:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=379)** and associate the relevant attacks with each of the targets. Okay, the attack analysis is now complete. Let's have a look at 10.0.2.8, and we can see we have an attack context menu. And if I go down to select samba, usermap_script, Armitage will pop up the Metasploit attack panel with everything ready to go, and I can press Launch and launch the attack. A new tab opens in the bottom panel, and we can see the attack taking place. The attack progresses in the lower panel, and we see a meterpreter session starting. The host icon has turned red and is enveloped with lightning bolts. It's now compromised. I can right-click again and press Shell 1, Interact, and we have our shell. And if I ask who am I, we find that we're root. Here we are in the Linux system with root privileges. Armitage has another feature known as the Hail Mary option. Running this capability floods the target with all of the relevant known exploits. It's a powerful means of testing a system, but it's not at all subtle. Nevertheless, let's select the Attack menu, Hail Mary. And once started, this will launch a flood of exploits at all the hosts. So let's do that. This takes a little while, so we'll come back when it's completed. The Hail Mary attack flood has now finished. The results can be a bit variable when we launch the exploits together, but we can see we have seven sessions open.
>
> **[7:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=473)** If I right-click on 10.0.2.8, we have seven shells. And let's have a look at interacting with Shell 7. And we'll again ask, who am I? And in this case, we're a daemon agent. If we look at the other systems, 10.0.2.9 has got an Attack, FTP. We can manually run an attack on the modcopy_exec, and launch that. And we can see the exploit has failed. And again. And again, that aborted. So Armitage provides a simple means of selecting candidate attacks, but we still have to validate that they work in practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metasploit]] (10), [[Linux]] (5), [[Windows]] (5), [[Nmap]] (3), [[PostgreSQL]] (2)
> **CLI Commands:** sudo (4), find (3), mysql (2), apt (1), systemctl (1)
> **UI Navigation:** select the (4), right-click (4)
> **Versions:** 10.0.2 (5)
> **Code Identifiers:** saltstack_salt_unauth_rce (1), msql_login (1), usermap_script (1), modcopy_exec (1)
> **Prerequisites:** install (2), before we start (1)
> **File Paths:** saltstack_salt_unauth_rce.rb (1), salt_unauth_rce.rb (1)
> **Env Vars:** rpc (1), ftp (1)

#### [Scan targets with GVM](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=0)** - [Instructor] Identifying vulnerabilities is a key part of a Pen Tester's role. And one way to do this is with the Green Bone Vulnerability manager, or GVM. GVM doesn't come as part of the bundled Kali release, so we need to install it. And we do that with "sudo APT install gvm". And we'll wait for this to finish. We can now run the initial setup script for GVM. This will take a while, as it has to download the [[Databases]] that GVM uses. "sudo gvm-setup". Okay, that's finished. And we now have our scanning database set up. We can also see an impressively long admin password. We can simplify this for our course by running the greenhouse management tool. This requires that we run as the user _gvm. So we can do that using "sudo runuser
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=61)** - u _gvm
>
> **[1:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=64)** - - gvmd
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=68)** - -user =admin
>
> **[1:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=72)** - -new-password=admin". I've got Kali in, and that's changed the password. Okay, we're ready to go. We can start GVM by entering the command "sudo gvm-start". Make sure that this finishes correctly, and if not, then run the command again. You'll want to see the countdown and a proper exit. Okay, we can now connect through its web interface on port 9392. I'll start up Firefox, and we'll go to 127.0.0.19392, and we'll go to that on HTTPS. Go advanced, and and accept the risk and continue, And we're presented with the Green Bone Security Assistant login page. I'll enter admin, admin, and login. Okay, we've correctly installed GVM, and we're in, and ready to do a scan. Let's run a scan. I'll select the Scan tab, and then use the wizard by clicking on the wand at the top left, Task Wizard. And I'll run against the target 10.0.2.8, which is my meta-spoiltable server, and start the scan.
>
> **[2:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=166)** Okay, we can see that we have our scan now requested and queued, and it's now running. It'll take a while to run, so we'll come when it's finished. Okay, that's finished running all the tests now, and I can select the link in the Reports column to look at the scan results. This opens a new web page showing the scan time for one host. If I open the Results tab, I get the list of issues identified, starting with the highest severity rating. At the top, we can see there's multiple Ruby remote code executions on port 8787. That's a 99% confidence level. This id followed by port 80 command execution on the TWiki website; And below that there's a possible backdoor ingress lock on port 1524. If we click on CVEs, we can see the relevant common vulnerability alert, which has been published for 19 of the issues that have been identified. Going back to the list of issues, if I click on possible backdoor, ingress lock, we get details of the issue. We can see the accessing the port receives a response, showing it's a root user shell. Further down, we can see the recommended solution is to do a full system clean.
>
> **[4:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=262)** I won't go through the report in detail, but it's worth spending a bit of time checking out the results to become familiar with what GVM can do. Running a GVM scan provides a pretty good idea of the vulnerabilities that exist in our target systems, and points to where we might want to investigate further to find exploitable weaknesses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **Env Vars:** gvm (8), apt (1), https (1)
> **CLI Commands:** sudo (4), apt (1), make (1), ruby (1), find (1)
> **UI Navigation:** go to (2), select the (2), click on (2), open the (1)
> **Prerequisites:** install (2), setup (2), set up (1)
> **Ports:** port 9392 (1), port 8787 (1), port 80 (1), port 1524 (1)
> **Versions:** 127.0.0 (1), 10.0.2 (1)
> **Speakers:** - [instructor] (1), - u (1)

#### [Managing GVM problems](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=0)** - [Instructor] GVM can sometimes be a bit of a problem child. A useful start point for problem solving is to make sure our [[Redis]] service is up and running. We do this with, systemctl start redis-server@openvas.service, which is the original name of GVM. And that's fine, and then we can check our setup by saying sudo runuser -u, And we need to run this as root -- gvm-check-setup, and this procedure to check our complete GVM open bar setup and our installation looks okay. Let's have a look at some other useful actions you can take with GVM to synchronize the database. We can run sudo runuser -u _gvm -- greenbone-nvt-sync.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=63)** And we're actually fully synchronized at the moment. So that's fine. We can also check the scanners running sudo runuser -u _gvm -- gvmd -- get-scanners
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=85)** and that shows us the scan is running and we can check the users as well with sudo runuser -u _gvm --gvmd --get-users
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=101)** And we can put --verbose as well. And that shows us that the admin user is running. There are occasional problems with GVM and in particular it can be difficult, to get it running properly after a reinstallation. However, it's a good tool and it's worth persisting with solving any problems you may encounter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (2)
> **CLI Commands:** sudo (4), make (1), systemctl (1)
> **Env Vars:** gvm (5)
> **Prerequisites:** setup (3)
> **Speakers:** - [instructor] (1)


### 6. Web Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Approach web testing](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=0)** - [Narrator] Most applications are now delivered as web applications or as mobile apps supported by a web based service. Consequently, web testing is a key skill for a pen tester. The cost of not testing web apps can be readily seen in the many examples of data breaches resulting from an insecure website. TalkTalk is one of many, and it made headlines. The culprit was a 17 year old boy who used hacking tools and looted email addresses, names and phone numbers as well as 21,000 unique bank account numbers and sort codes. TalkTalk subsequently tested their websites, but this would have been much more effective before the hack. There are two main approaches to testing websites. The first is to crawl each page in the website looking for vulnerabilities. This can provide a good map of where to look for weaknesses. The second approach, and sometimes the second stage after crawling is to intercept the website traffic by using a proxy service between the web client and the server. In addition, manually checking webpages for comments can be useful, as these have been known to include credentials and commented notes about bugs that require fixing. Identifying client side code is also useful, as this can indicate ways in which the client can subvert security. Another important check is the technologies used for the web server and the protocols used for traffic. These can be used to identify known vulnerabilities
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=95)** that may not have been patched and cryptographic weaknesses that can be attacked. Websites should use Secure Transport Services to ensure that there's no risk of man in the middle, but many still use HTTPS and even HTTP. In addition, [[WebSocket|WebSockets]] is a new technology which has been deployed to provide simpler communication for web apps. Understanding the strengths and weaknesses of the web architecture is useful. Another area to look at is user authentication especially, where the website includes [[E-Commerce]] functionality. The rules around credit card payments are very strict and most sites have moved to payment gateways. However, the interface between the e-commerce web page and the gateway is a key area to review. Another area is the validation of credentials, any particular, the risk of injection attacks where a backend authentication server is used. If the webpage builds a query string to extract user data, it's a key focus for attackers to exploit. Password reset pages are also an area of focus, as the interactions are often less well-tested than the main access code. Of course, websites, which have default credentials left in the system or have hard coded credentials stored are prime targets for attack. Session management is another area of weakness, and it's useful to test whether an attacker can hijack the session or access a session
>
> **[3:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=187)** with an intercepted session cookie. Session [[Tokens]] may also be predictable, which enables an attacker to prepare for an attack when the predicted cookie becomes active. There's a lot of ways to attack a web application and a lot to look at when doing web testing. We'll introduce a few tools and techniques that you should be familiar with, before you start to look at deeper testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (2), [[WebSocket|Websockets]] (1), [[Tokens]] (1)
> **Definitions:** is a  (3)
> **Env Vars:** https (1), http (1)
> **Speakers:** - [narrator] (1)

#### [Test websites with Burp Suite](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=0)** - [Instructor] The [[Burp Suite]] community edition comes as one of the tools prebuilt into Kali. I'll select applications, web application analysis and Burp Suite from the top of the list. I won't update it. I'll select the temporary project and I'll start there. The free edition only allows temporary projects and the license is required if we want to store projects on disk, which is usually required when doing a full customer website test. However, the temporary project will be fine for our course. Burp Suite creates a new project and opens the main screen. The Burp Suite menu is at the top left and offers six main items of burp, project intruder, repeater, window and help. Below main items, we have burp activity tabs, and we're presented with the dashboard. The target tab has three of its own tabs called site map, scope and issue definitions. The site map shows the construction of the website and the scope is used to set targets for testing. I'll add httpzero.[webappsecurity.com](https://webappsecurity.com).
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=71)** The issue definitions tab shows the various website issues that Burp Suite can detect, together with their severity. I'll select the proxy tab next. We can see that intercept is on, and this will intercept anything that comes through Burp Suite and allow us to inspect it and possibly change it. I'll turn this off for the moment and we'll let traffic flow through. I'll go to the options tab, and we can see that we're listening on port 80, 80. I'll start Firefox and we'll set it up for proxy operation. I'll go to the preferences. I'll go down to the bottom and select network settings, and we'll set manual proxy configuration for proxy one to seven, naught, naught, one on port 80, 80. I can now go to the zero bank site. Httpzero.[webappsecurity.com](https://webappsecurity.com).
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=133)** Okay, we're at the bank. I'll sign in now using our test credentials of username and password. And it is in fact, username and password.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=153)** And I'm happy to go ahead with this and accept the risk and continue. Back in Burp Suite, when we select target site map, we can see the traffic to and from the bank which has been captured. If I click on the arrow to the left of the site URL in the site map panel, I can see the structure of the site. I can expand the lower level structures until I get to individual pages. In the right-hand panel, I can click on the bank account summary message, and the request and response packets are shown in the bottom panel. By default, these are shown in raw form. I can also have Burp Suite show me the page as rendered. I'll leave any further exploration of Burp Suite for now. We'll see more of this tool as we use it to test our websites throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Burp Suite]] (9)
> **UI Navigation:** go to (3), select the (2), click on (2)
> **URLs:** [webappsecurity.com](https://webappsecurity.com) (2)
> **Ports:** port 80 (2)
> **Env Vars:** url (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)

#### [Check web servers with Nikto](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/check-web-servers-with-nikto?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/check-web-servers-with-nikto?u=76281980&t=0)** - [Instructor] [[Nikto]] is a fairly simple tool for web scanning. It appears in the application menu under vulnerability analysis. Let's take a look at it. Nikto is used to identify which vulnerabilities exist in the underlying web server. Selecting Nikto presents a terminal window and shows its various options. I'll run Nikto against my meta exploitable host by typing Nikto minus H 10.naught.2.8.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/check-web-servers-with-nikto?u=76281980&t=31)** The first thing we see is that the web server is an Apache 2.2.8 system running on [[Ubuntu]]. This is followed by three notes relating to missing hardening features and advice that the Apache server is out of date. Further down we see that Nikto has identified a number of known vulnerabilities from the open source vulnerability database OSVDB. The final summary shows 27 items, which need attention.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nikto]] (6), [[Ubuntu]] (1)
> **CLI Commands:** apache (2)
> **Versions:** 2.8 (1), 2.2.8 (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** osvdb (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Fingerprint web servers](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=0)** - [Instructor] Fingerprinting is an important first step in testing a web application, as the environment in which it operates is as important as the application itself, in terms of potential application risk. While some servers provide banners, others have their banners removed or modified. Being able to determine the type of server from its characteristics is important, when reading the banner proves futile. There are a number of tools available for fingerprinting a web server, one of them is HTTPRecon. HTTPRecon can be downloaded from the Computex website as a zip file containing the [[Windows]] binaries. I've downloaded it into my window system, into the HTTPRecon folder. There are three OCX files that come with HTTPRecon. These may be missing in windows. They need to be in the SysWOW64 folder and registered. We have to be running an administrative command shell for this. I'll now run the privilege registration process for all three. Okay, that was successful.
>
> **[1:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=78)** As was that. And then, I can now start the HTTPRecon tool. Once the messages have all been collected, it populates the set of tabs at the top of the main panel with the response messages. Okay, the analysis is finished and we have three tabs at the bottom. The first is the match list, which provides a ranking of possible web server options with a confidence level. The result is an Apache 2.0.59 web server with 100% confidence. Although the banner does indicate 2.2.8. The next is the fingerprint details, which provides a summary fingerprint. The final tab is the report preview. Which provides an extensive report on the fingerprinting. The top menu items also provide for analysis and re-analysis and reporting. The fingerprinting menu also has options for opening the site in a browser and for connecting to the Computex online fingerprint database. NetSquare provides a useful tool for fingerprinting [[Web Servers]] called HTTP print. This can be downloaded from the site shown. It comes down as a zip archive and the executable program is in the Win32 sub-directory. I'll run the gooey version of HTT print. I need to uncheck the options for ICMP
>
> **[2:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=174)** and SSL auto detect. Let's put in the address, zero.[webappsecurity.com](https://webappsecurity.com)
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=188)** and point to the test [[Banking]] website. I'll change the output file to be zero.[[HTML]]. I'll now press the play button at the bottom to check the fingerprint. This is now run and extracted the banner showing an Apache Coyote 1.1 server. And has deduced the server to be Apache 1.3, with a 61% level of confidence. let's run it again against Metasploitable. When I run this against the Metasploitable server, it comes back quickly with the banner reported as Apache 2.2.8, which is correct. And the banner deduced as a 2.0.x, with a 57% level of confidence. Another tool we can use for fingerprinting is Uniscan, which comes with Kali. To do this, we simply pointed to the web server using the minus U switch. I'll test the Hacme Casino website. It's detected the web application is running on a WEBrick Ruby server. Again, we can run against the test banking site.
>
> **[4:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=273)** And again, we see it's been detected as an Apache Coyote 1.1 server. Fingerprinting is an inexact art, but on occasions it can be useful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Banking]] (2), [[Web Servers]] (1), [[HTML]] (1)
> **Versions:** 2.2.8 (2), 1.1 (2), 2.0.59 (1), 1.3 (1), 2.0 (1)
> **CLI Commands:** apache (5), ruby (1)
> **Env Vars:** ocx (1), http (1), htt (1), icmp (1), ssl (1)
> **Definitions:** is an  (3)
> **File Paths:** zero.html (1)
> **URLs:** [webappsecurity.com](https://webappsecurity.com) (1)
> **Exercise Files:** zip file (1)

#### [Web server penetration using sqlmap](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=0)** - [Instructor] Let's take a look at how we approach the initial penetration of a web server using [[SQLmap]]. To do this, I'll use a target in the [[LinkedIn]] Learning pen testing lab. If you want to know more about this lab, check out my advanced Kali course. The target we'll use is the Europa server, which is on address 10.10.10.22. Our VPN into the lab. And we'll do a deep end map scan with the minus A switch. [[Nmap]] -PS -F -A, 10.10.10.22.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=40)** We can see we've got three ports open. SSH on port 22 and both HTTP and HTTPS web services on ports 80 and 443 respectively. And we're running an Apache 2.4.18 website. We can see the SSL certificate uses the subject name, europacorp.[[HackTheBox|htb]], with alternate names of www.europacorp.htb,
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=68)** and admin-portal.europacorp.htb. This indicates we may be looking at a name server. Let's go visit the websites. If we go to 10.10.10.22, we can see we've got the default Apache2 webpage. When we go to HTTPS, we have a potential security problem, but we'll accept that and continue. And again, we're at the Apache2 [[Ubuntu]] default webpage.
>
> **[1:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=112)** Let's add admin-portal.europacorp.htb to our host file and see what we get when we go to the name server. Sudo nano/etc/hosts. And we'll add 10.10.10.22. And that will be admin-portal.europacorp.htb.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=143)** And we'll save that. Now, if we refresh our site, now, if we go to the name server, [https://admin-portal.europacorp.htb](https://admin-portal.europacorp.htb),
>
> **[2:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=172)** we now see a login page. We can use SQLmap to for any vulnerable parameters in the websites. And if it finds exploitable injections, we'll dump the database. To do this, we run SQLmap -U [https://admin-portal.europacorp.htb](https://admin-portal.europacorp.htb).
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=204)** And we'll tell it to look for [[Forms]]. And we'll tell it to crawl to a depth of two. And if it does find an exploitable parameter, we'll dumb the database. We'll need to answer a few questions, but we'll take the suggested defaults, but we'll use 10 threads. SQLmap has found the login page. And it's identified the database as [[MySQL]]. And it thinks that email might be injectable. And is also vulnerable to a cross-scripting attack. And we'll let it test for injections. We've let SQLmap try fuzzy tests. And it's identified there are five columns in the query and that it's union injectable. This is good news for us. SQLmap now offers to exploit the target for us using an [[SQL]] injection. And it dumps out the database, including password hashes. And it will even offer to try cracking the password hashes for us. And it succeeds. SQLmap has finished. And we can see that it's identified a number of injection points. It's executed the injection attack,
>
> **[4:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=296)** and successfully dumbed out the database, and then crack the password hashes that it found. SQLmap has done its job and more. And we've managed to exploit the target and extract administrative credentials. There are many different ways to use SQLmap. And it's worth spending some time getting used to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQLmap]] (9), [[HackTheBox|Htb]] (7), [[LinkedIn]] (1), [[Nmap]] (1), [[Ubuntu]] (1)
> **Env Vars:** https (2), vpn (1), ssh (1), http (1), ssl (1)
> **CLI Commands:** ssh (1), apache (1), sudo (1), find (1), mysql (1)
> **Versions:** 10.10.10 (4), 2.4.18 (1)
> **UI Navigation:** go to (4)
> **URLs:** [https://admin-portal.europacorp.htb](https://admin-portal.europacorp.htb) (2)
> **Ports:** port 22 (1)
> **Speakers:** - [instructor] (1)


### 7. Understanding Exploit Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploit a target](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=0)** - [Instructor] We earlier covered the cyber kill chain and discussed the seven stages of a cyber attack. Let's take a look in more detail at the delivery and exploitation phases. These are the phases in which a pen tester spends most of their time. At the delivery phase, the objective is to find a way to deliver a payload to a target. There are four common ways to do that. The first is to send someone the payload as an attachment to an email and have them execute it. This could be a malicious executable file or more usually a document with malicious code installed in it. Regardless, the delivery mechanism is the same. Another way of delivering a malware payload to a target is to have the target come and get it by sending them an email containing a hyperlink to a malicious website. This may be a website which, when the user visits it, can automatically drop the malware into their system. It may be a site which contains trojanized software containing malicious code hidden inside the legitimate code. Another way to deliver a payload is to connect to an exposed port and send the malware through the port or gain access to the port and copy the malware directly in. Quite often, this will be achieved by sending a packet, which contains an initial exploitation warhead followed by the payload, which can be carried through in the packet. Finally, the malware can be stored on removable media, such as a USB flash drive in such a way that when it's inserted into the target computer,
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=94)** it automatically runs. Once the malware has been delivered, there may be an exploitation phase in which a vulnerability on the target system is exploited to enable the malicious payload to gain access to the system. In the case of a malicious attachment, the exploitation is a human one. Getting someone to run the malware without knowing that it's malicious, or even that any code is running. It may be an executable attachment, or it may be a document which, when opened, exploits a vulnerability in the application software, or just simply runs an embedded malicious macro. We continue to see this technique used with [[Microsoft Word|Word]] documents, PDF files, flash movies and spreadsheets, in particular. The one thing these techniques have in common is that the user is unaware that code is executing. The next approach is when the delivery was that of a [[Phishing]] email containing a hyperlink to a malicious site. The malicious site will be looking to take advantage of a vulnerability in the browser, which it can exploit to run what is known as a dropper. The purpose of this is to drop the payload onto the target computer. The unauthorized use of credentials is a technique used when a password file has been extracted and cracked, revealing a large number of account user ID password credentials. It may also be the result of having intercepted traffic and found credentials in the clear, for instance, in a telnet session. The fourth exploitation technique
>
> **[3:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=186)** is used when there's vulnerability in a service exposed to the attacker. In this case, the attacker can exploit the vulnerability with an initial malware module, which opens the door into the system. This is often a technically challenging approach but potentially a lucrative one because it may leave no evidence of attack, not even a login record. Let's have a look at some examples of attacks and analyze their delivery and exploitation techniques. The first attack we'll look at is the high profile ransomware, WannaCry, or WannaCrypt, as it's sometimes known. The WannaCry campaign delivery mechanism was emails containing an infected zip file which when opened, drops the malware into the computer and executes it. WannaCry is a highly virulent piece of malware, not only having a vicious payload but also being able to automatically reach out and exploit other systems in the local network, or even across the internet. So as soon as a few WannaCry targets were hit, they became attack launching pads for propagation to the next layers of targets. One of the reasons WannaCry was able to do this was through its use of a piece of malware developed by the US National Security Agency called EternalBlue, which used an exploitation technique not known in the public domain, a zero day. This was a flaw in the session management block or SMB software used on [[Windows]] systems to manage file sharing and printing. Analysis has concluded that the initial infection
>
> **[4:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=280)** was through an exposed SMB port. By allowing its technique to become exposed, the NSA allowed the world's cyber criminals to develop a military-grade attack. This malware demonstrated delivery through an exposed service and exploitation through the EternalBlue SMB vulnerability. The next example we'll look at is the Stuxnet attack on the Iranian uranium enrichment facility. This was notable in that the target was on an isolated network, not connected to the internet. Stuxnet was a very sophisticated attack, reportedly developed and launched by Israel and the United States and it was executed in two phases. The first phase was a network scan to determine exactly what software was running on the isolated network and to map out the topology of the network itself. This then enabled a second attack to be launched, which targeted the centrifuges use to enrich the uranium. The original reporting indicated that the attack was able to get onto the isolated network by use of a USB drive and that the USB drive may have been taken in by an agent working in the facility. Later analysis indicated the attack was a remote breach of a supplier computer and insertion of the malware onto the supply computer from where it jumped onto a USB stick. Stuxnet propagated itself around the network using a [[Microsoft]] print spooler flaw and three other zero day vulnerabilities
>
> **[6:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=373)** to ensure the maximum opportunity to spread. Once it found the Siemens equipment which controlled the centrifuges, it injected malicious code into its memory. This attack demonstrates multiple delivery and exploitation vectors, including a Microsoft printer spooler, zero day. Another high profile case was that of Saudi Aramco, which was the largest attack seen this decade with over 30,000 workstations being taken down. The delivery mechanism was traced back to a single employee clicking on a malicious website. The website was able to exploit the browser and drop a backdoor payload onto his computer. This then allowed the attackers to gain a foothold on the Saudi Aramco now at work and begin their attack. The first sign of trouble was when files began to disappear and systems crashed. The Saudi Aramco network was disconnected from the internet and then when the virus continued to spread, the workstations were disconnected from the local networks. Subsequent analysis found that the attack was due to the Shamoon virus. The delivery mechanism was a malicious website and the exploit was a browser vulnerability. The final example we'll look at is the Sony PlayStation hack. This was an external penetration into the PlayStation Network servers, which resulted in the global Sony PlayStation Network being taken down. The result of this intrusion was the exposure of 77 million credit cards, one of the biggest recorded data breaches.
>
> **[7:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=466)** This was again due to a flaw in the SMB software, this time on [[Red Hat Linux]] Apache servers and that was able to be exploited. The delivery mechanism was an exposed vulnerable service, which exploited an SMB flaw.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Microsoft Word|Word]] (1), [[Phishing]] (1), [[Windows]] (1), [[Red Hat Linux]] (1)
> **Env Vars:** smb (5), usb (4), pdf (1), nsa (1)
> **Definitions:** is a  (3), known as (1)
> **CLI Commands:** find (1), apache (1)
> **Analogies:** such as (1), for instance (1)
> **Exercise Files:** zip file (1)
> **Speakers:** - [instructor] (1)

#### [Understand code injection](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=0)** - [Instructor] The aim of many cyber attacks is to run malware on a target system. One way of doing this is to provide the malware in the form of a Trojan program. This is a piece of software which looks legitimate, but it has malicious code embedded in it, which executes when the software is run. The simplest form of Trojan is a legitimate software product, which has been modified by inserting a piece of malicious code. This is possible, because an executable program has a well-defined structure of multiple segments, and an attacker can modify these to suit their own purposes. Let's look at a [[Windows]] executable file. This is in what's known as a portable executable or PE format. The PE file has a collection of fields at a known location that define what the [[Representational State Transfer (REST)|rest]] of the file looks like. An important part of the structure is the PE header, which contains information such as the locations and sizes of the code and data areas, what operating system the file is intended for and the initial stack size. It also contains a table of all the sections which make up the remainder of the executable file. These are the code sections or data sections. The PE header isn't at the very beginning of the file. The first few hundred bytes of a PE file are the MS-DOS stub, a small piece of code that validates that the program can run, printing out an error message if it can't. The PE header is found by looking up at starting offset which is stored in the MS-DOS stub header.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=96)** Let's have a quick look at the hexdump of an executable. I'm using the HxD hex editor for this. But you can use any hexadecimal editor to view the raw executable file. The file starts with the two signature characters MZ, and we can see the message, "This program must be run under Win32," which is displayed if the program is run in another environment. We can also see the two characters PE at hexadecimal 0, 100, which if we look along to the left of the same line, we can see are the hexadecimal digits 50, 45 followed by two zero bytes. The next two bytes are 40, 01. And then we have two bytes which represent a double [[Microsoft Word|word]] value for the number of sections. We can see the bytes are 0B, 00, which in binary is 0, 0, 0, B, meaning there's 11 sections. Fortunately, we don't have to do all the work ourselves. The team at Winitor has developed a free portable executable viewing tool called PeStudio. And this does all the hard work of analyzing the PE file. Okay, I've got the pactera executable open in PeStudio. I'll select dos-header to display the header of the MS-DOS stub. An important value in the header is the file header offset which is set to hexadecimal 100. This is the value which points to the location of the PE header.
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=190)** Following this, if we click the file-header, we see the PE header starting at the signature field, which as expected, has a value of PE00. Following this, we can see that the file has an optional-header, which when we click it, shows the configuration settings for the executable. There's a couple of items we want to remember from here. The section alignment, which has shown as hexadecimal 1000, and further down the image base, which is shown as hexadecimal 400,000. If we click on directories, we see the 15 possible sections of which this file has seven. We can click on sections to see the seven sections plus two additional text sections. We can see the raw address. this is the file offset, and the virtual address, this is where the section will be loaded in memory. We can see the runtime function imports and the functions exported. Another interesting part of the executable is its manifest. If we click on this, we see an XML configuration file displayed. Okay. So we can see the overall structure of the PE file. Let's now think about how we add code into it. There are two ways we can inject malicious code into a PE executable: by adding a complete new section
>
> **[4:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=282)** and inserting the code into that, or by injecting the code into a code cave, an area in the executable, which is not used. We can use a tool called Cminer to show what code caves are available in an executable. We can download and run this in Kali. We can download Cminer from the [[GitHub]] site using wget. I've set up a directory in user share for this as /user/share/cminer. We've got the executable now, and we can set it for execution using chmod. I've already imported an executable called winjan into Kali. So let's use Cminer to look for all code caves of a hundred or more bytes. We've got three of them with cave 3 being the largest at 3456 bytes. Let's have a look at some standard Windows system executables which we might want to inject code into. The first we'll look at is notepad. I won't specify a minimum size, so we'll look for all caves. And we see that we have six caves ranging from 463 to 729 bytes. These are all in data sections. The .text section doesn't have a cave. Another executable we'll look at is PuTTY, the client commonly used
>
> **[6:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=376)** for connecting to remote SSH services. Again, we have six caves, much bigger than we saw in notepad. However, again, these caves are all in data sections. We'll come back to this issue shortly. There's another issue to think about. System defenses will often use a form of sandboxing to check whether the malware is detected when an executable starts. If we execute injected code as soon as the program initializes, it's likely to be detected by anti-malware code. Consequently, Trojans will often trigger their injected code not at program startup, but at some identifiable users interaction. Anyway, for the moment, we'll have to pick one. Let's pick cave 5 which has a start address of 47a478. I'll use PuTTY to demonstrate how code injection works. I've got it loaded on my VirtualBox [[Windows 10]] system. First of all, I'll connect to my Metasploitable server on 10.0.2.8 with PuTTY. We get a prompt which says, "login as." We'll use this as the point to use in our strategy for a delayed jump to the injected code. Okay, we don't need to log in, so let's close this. We now need to use a debugger to step through the executable code. My preference is the X32-debug tool which I've got loaded. We'll use it to inject code into the cave in the PuTTY executable
>
> **[7:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=469)** and then run the modified code so that we can see the injection working. I'll load the executable. And I'll select the Memory Map tab. I'll select the text segment and Follow in Disassembler. This shows me the code section. I need to find the point in the code of which the login as prompt is displayed. I can do this by right-clicking, Search for, Current Module, String References, and enter login as. Okay, we can see two references. I'll try the reference at 41CB6C. Let's go there. Let's take a note of the current instruction, push 467C7C. And then we'll change this to a jmp. I can double-click the current instruction and enter new instruction, jmp, 0 times 47A495. That's a point just inside the cave. I'll also take a note of the address of the next instruction, 41CB73. We'll come back to this after executing the injected code. The cave is in the idata section, so we'll need to load that into the disassembly area, using the memory map. Okay, we can scroll down to our cave
>
> **[9:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=564)** and see the section of null bytes which we'll use to inject the code. For the purposes of the demonstration, I'll just add a couple of NOP instructions. That's a single byte 90 hexadecimal. And then I'll return back to where we jumped from. To do this, I'll double-click on the disassembled instruction at the address we jumped to, 47A495. And I'll enter two NOP instructions for the injected code and then insert the instruction we overwrote and jump back.
>
> **[10:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=607)** I'll set a break point on the first NOP so that we can see the execution when it arrives here. Let's press the play icon and set it going. We have to again select play. And when we check the task bar, we can see we have the PuTTY interface. I'll enter the address for Metasploitable, 10.0.2.8 and connect. And we see we've jumped into the injected code. We can continue by pressing the play button again. And we're now at the login prompt. So we've proved the injected code. X32-debug does provide an option to save the changes into a patch file and also to rewrite a patch version of the file. But this may encounter problems saving into data sections. If it does, you can take a note of the binary changes and apply them using a hex editor. I've taken a note of the changes we made. And I'll manually insert them into PuTTY using hex editor. I can search for the hex string 68 7C 7C 46. And we know it was the second one that we want to change. Okay, I have that at 1BD6E. Let's override that with the string E9 22 D9 05.
>
> **[11:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=698)** I also need to go and add the injection by matching the last few bytes of the idata section prior to our injection. Now I've identified the injection should be at location 79695. Let's add the injection.
>
> **[12:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=726)** I've edited the executable, and I can save this into a new file called mutty.
>
> **[12:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=739)** In addition to applying the changes when creating an executable for testing purposes, we need to make sure the section we've modified with injected code is set as executable, and we need to recreate the checksum. We can do this by using the PE editor in the LordPE tool. I've got this tool loaded on my system, so let's get into it. To run the PE editor, we first start LordPE and then select PE editor and select the mutty executable. And the PE contents appear. Let's first look at the sections. Okay, we'll have the four sections, and I'll highlight the idata section that we changed. When I press right-click, we see a context menu. I can select edit section header, and the section header pops up. Now I can press the dotted button by the flags and click Executable as code and then OK. Okay, I can leave the sections now. At the main PE screen, I'll press the question mark by the checksum. And the PE editor will create the new checksum. That's it. We can now save the changed executable. When we execute the program, it will run with no warnings and execute the injected code we've inserted as soon as we get to the point of logging into a site. Using modified executable,
>
> **[13:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=833)** mimics the activities of an attacker, so it's a legitimate course of action for a deep penetration tester. And with the right injection code, it can be a lucrative means of harvesting credentials and demonstrating vulnerabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Word|Word]] (1), [[GitHub]] (1), [[Windows 10]] (1)
> **Env Vars:** dos (3), nop (3), x32 (2), pe00 (1), xml (1)
> **UI Navigation:** click on (3), select the (3), double-click (2), scroll down (1), right-click (1)
> **CLI Commands:** make (2), wget (1), chmod (1), ssh (1), find (1)
> **Definitions:** is a  (2), known as (1)
> **Versions:** 10.0.2 (2)
> **Tools:** github (1)
> **Analogies:** such as (1)

#### [Understand buffer overflows](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=0)** - There are a number of ways to achieve remote code execution on a server. And one of the ways is to trigger what's known as a buffer overflow. We can do this by sending a malicious exploit packet to an open service that has a buffer overflow vulnerability. This then results in the target executing code from our packet. We can see how this works by running a vulnerable program through a debugger. Let's do this with MASM so that we can see the instructor clearly. I've written a small MASM program, which uses the [[Windows]] GUI, called Buffalo.ASM. This simulates just a fragment of an application. Take a look at the lines just below the .data declaration. There's a data field called "packet". This is simulating a packet that we've received from an input request for the user's name. I've put my name there. Let's just ignore the commented out fields for the moment. Further down, we can see the "hello" message, which expects to have a name inserted. Let's look at the lines just below the .code declaration. We can see what the program is doing in the first few lines. It pushes the address of the hello message onto the stack. Then pushes the address of the name packet onto the stack, and then calls the routine, SCO, to do a string copy. Following that, it displays a message box. Let's see what happens when we run it. I'll select "project" "assemble and link". This assembles and links.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=92)** We can see the OBJ and .exe files here. And we can then run it. There we go. A Windows message box with our welcome message. Now, let's change the code to comment out my name and uncomment the packet, exploits and payload fields. This now simulates a malicious packet with its three components being sent in as input. Let's save this. Assemble and link it. And run it. Now we get a malicious message. We've been buffer overflowed. To see what has happened, we need to run the program through a debugger. Before we do that, let's take a look at what the SCO routine is doing. Let's start at the line below the label "SCO Prop". After entering the routine, we save the stack pointer into the EBP register. Then load the first parameter, the address of the data packet, from the stack, into EBX for later use. The routine then reserves 32 bytes of local storage for the name using the "Sub SP" command, and then copies the stack pointer into the two registers EDX and ECX. One we'll use immediately, and one later. The routine then enters a loop, which reads a character from the packet
>
> **[3:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=184)** and stores it into local storage. It does this by moving a byte from the input pointed to by EBX, into the lower byte of EAX. And then saving that byte into the 32 byte area reserved stack where EDX is pointing. The address pointers are then both incremented. This continues until the last character read from the input packet is zero. That's the string delimiter. The routine then goes to the next loop, where it inserts the string into the end of the welcome message, starting where it says "name here". The EDI register points to the location where the name is to be inserted. And now ECX is used to read the name from the 32 bytes stack area, byte by byte, and copy it to the welcome message. Again, terminating at the zero bytes. Finally, the routine releases the first two bytes of local storage and returns with a rotate, to release the two double words, eight bytes, addresses that were placed on the stack prior to entry. Okay, let's say this run step-by-step in the debugger. The first thing we'll do is look at the memory map. We can see that the executable part of Buffalo, the .tech section, starts at 4 0 1 0 0 0. I'll double click that, and we'll see the code displayed. We can see at the right, the "hello name here" message. And the malicious packet filled with the ASCII character "A". I'll set a break point at the first line
>
> **[4:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=278)** and I'll press the play button to run through to our code. Okay, we've run the PE program initialization, and we're now at the start of our code. Before we start running the code, I'll go back to the memory map. I'll double click the .data section. We can now see our data field shown in "dump one", at the bottom left of the screen. Let's use F7 to step through and push the two addresses onto the stack and call the SCO sub-routine. As we step through the first few instructions of the sub-routine, we can see the stack point of being stored into EBP and the address of the data packet being stored into EBX. Next, 20 hexadecimal is subtracted from the stack pointer to reserve 32 bytes for the name to be copied in. Then, the address of this 32 byte area is stored into the EDX and ECX registers. Now we're at the address 4 0 1 0 3 6. And this is the start of the loop. We can see the jump back to 4 0 1 0 3 6 a few lines down. We'll go through the loop, copying the name into the stack. Note at the bottom right panel that the stack pointer ESP is currently pointing to 1 9 F F 5 8. And the return address to get back to the calling code, is 20 hexadecimal further on, at 1 9 F F 7 8. Watch the contents of the stack at the bottom right as we step through the loop, copying the name, in this case, the malicious packet data, onto the stack.
>
> **[6:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=374)** We see the zero hexadecimal 30 and then A's hexadecimal 41 being copied into the stack. This continues for all 32 bytes from the packet. The EDX register is now pointing to address 1 9 F F 7 8, where the return address, 4 0 1 0 0 F, is stored on the stack. However, as we keep stepping through, the routine overwrites the return address with more data from the packet, the four bytes we labeled exploit. Which is the address of the start of the payload code stored in the packet. The return address is now 4 0 3 0 2 4. And we finished copying the packet onto the stack. Okay, let's step through the next section of code where we write this from the local area, into the message. That all copies over and down in the dump area at the bottom left, we now have a message which says, "Hello, zero A A A" and so on. Let's watch carefully as the routine finishes and returns. The routine releases the local reserved space by adding hexadecimal 20 to the stack pointer. The stack pointer is now pointing at where the original return address was, which has been overwritten with the address that was in the exploit field. When we F7 to return, the instruction pointer now points to the code in the packet payload, at 4 0 3 0 2 4. The buffer overflow has been activated and we're now running payload code.
>
> **[7:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=468)** Let's step through the payload. We push zero, the addresses of two fields in our packet. And then zero again, the standard preparation for a message box request. And then push onto the stack, the address of the message box call in our program. When we return, we display the message box, which now displays the malicious message. We've crafted a malicious packet, which takes advantage of the fact that the Buffalo program doesn't check how many characters are copied in, despite having only reserved 32 bytes. Unfortunately, this isn't that uncommon in software. The packet we've simulated is a three-stage packet of padding, malicious address and payload. We've achieved a buffer overflow and executed code from our packet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2)
> **Env Vars:** sco (4), edx (4), ebx (3), ecx (3), masm (2)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** initialization (1), before we start (1)
> **Cross-References:** go back to (1)
> **Speakers:** - there (1)

#### [Find exploit code](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=0)** - [Presenter] In the early days of cyber testing, testers had to first discover a vulnerability through vulnerability research and then write an exploit for it. This typically required a high level of debugger and museum skills and took weeks of effort. Nowadays, there are many researchers looking for and publishing the details of vulnerabilities and providing detailed analysis of malware that's been found. These appear on many researchers [[GitHub]] sites and also on vulnerability advisory science. The malware archeology site provides links to reports from a number of malware research centers. There are a number of cyber research companies that provide technical research reports. Some provide them for public access while others provide them as a paid threat intelligence service. For example, Malwarebytes Labs shown here is a source of free technical reports. Even with a technical report, it takes a while to develop a working exploits. A source of ready-made exploits for testing is the offensive security exploit database. Here we have the full set of exploits on [exploitdb.com](https://exploitdb.com). Let's select the filters button and search for the type remote. And we get a list of remote exploits that are in the database. The screen shows the date, title, platform and author of the exploit module. And there's three flags, D, A and V. D provides download of the exploit code, A provides download of the vulnerable application
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=95)** and V indicates that the code has been verified. At the bottom of the first page of remote exploits, we can see their emotions, desktop web access attack. If we click on this, we can see that it's a [[Python (Programming Language)|Python]] exploit that's used with the [[Metasploit]] testing tool. Legal Hackers is another website which provides details of vulnerabilities. Although there has been few updates recently, the site does include proof of concept exploit code however. For example, if we select the get LFS 2020 vulnerability and we scroll down, we can see the proof of concept command sequence. Just a note of caution when downloading exploit code from individuals, firstly, there could be malicious code included in the exploit so just double check the source is legitimate. Some of these exploits work as written. But some authors will include deliberate mistakes in their exploits as a somewhat annoying way of making sure you can correct them mistakes before you get to use the code and some just make mistakes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[Exploit-DB|Exploitdb]] (1), [[Python (Programming Language)|Python]] (1), [[Metasploit]] (1)
> **UI Navigation:** select the (2), click on (1), scroll down (1)
> **CLI Commands:** python (1), make (1)
> **Analogies:** for example (2)
> **URLs:** [exploitdb.com](https://exploitdb.com) (1)
> **Env Vars:** lfs (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980&t=0)** - [Malcom] I'd really like to thank you for joining me for this course. I hope you enjoyed your introduction to the tools and techniques you'll use as a pen tester. Taking this course is just the start of your learning path, which leads to becoming a professional pen tester. Having understood the concepts and learnt about how to use some of the basic testing tools, you can now start to gain experience by using them. You can also follow the learning path with more advanced courses in the pen testing series to develop your skills with a deeper understanding of the techniques. There's always something new in [[Cybersecurity]], and if you're interested in learning more, then check out the full security segment of the library, where new security courses are added regularly. You'll find courses on using [[Kali Linux]], information gathering, viruses and worms, social engineering, denial of service, wireless testing, and much more. I'd like to invite you to go to my [[LinkedIn]] Learning author page, where you can find some additional courses on cybersecurity. If you want to get hands-on with some of the common tools, then do take a look at Practical Cybersecurity and the Introduction to Kali Linux. If you want to know how to test mobile devices, then check out the Mobile Devices course. And if you'd like to learn about security for the AWS Cloud, then Pen Testing AWS with [[Python (Programming Language)|Python]] is for you. Thanks again for joining me on this course and I hope to see you again soon for more courses on pen testing and cybersecurity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (4), [[Kali Linux]] (2), [[LinkedIn]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (2), aws (2), python (1)
> **Env Vars:** aws (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcom] (1)


## Resources

- Exercise files available

## Skills Covered

- Penetration Testing

## Path Context

### In [[Penetration Testing Professional Certificate by Cybrary]]
**1 of 2** | [[Offensive Penetration Testing]] →

## Part of

- [[Penetration Testing Professional Certificate by Cybrary]]

## Appears In

- [[Penetration Testing Professional Certificate by Cybrary]]

## Related Courses

_Courses sharing skills:_

- [[Stealth Penetration Testing with Advanced Enumeration]] — Penetration Testing
- [[Burp Suite Essential Training]] — Penetration Testing
- [[Advanced Pen Testing Techniques for Active Directory]] — Penetration Testing
- [[Penetration Testing Web Apps with Kali and Burp Suite]] — Penetration Testing
- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Penetration Testing

---

[↑ Back to top](#)