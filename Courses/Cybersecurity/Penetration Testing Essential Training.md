---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: penetration-testing-essential-training-24352676
url: "https://www.linkedin.com/learning/penetration-testing-essential-training-24352676"
duration_minutes: 175
duration: 2h 55m
level: Intermediate
updated: 7/18/2024
learners: 10949
skills:
  - Penetration Testing
  - Kali Linux
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHOd90QzPFHDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719429105265?e=2147483647&amp;v=beta&amp;t=CEKCl25X6pQyYKTlQiYXsstNjrrLyyjXSIbknSmWdg4"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Explore a Career in Application Security]]'
  - '[[Become a Penetration Tester]]'
prev_courses:
  - '[[Cybersecurity Foundations Application Security]]'
  - '[[Introduction to Pen Testing for Cybersecurity Professionals]]'
next_courses:
  - '[[Learning the OWASP Top 10]]'
  - '[[Kali Linux for Advanced Pen Testing and Ethical Hacking]]'
path_nav: '[{"path":"Explore a Career in Application Security","position":2,"total":7,"prev":"Cybersecurity Foundations Application Security","next":"Learning the OWASP Top 10"},{"path":"Become a Penetration Tester","position":3,"total":8,"prev":"Introduction to Pen Testing for Cybersecurity Professionals","next":"Kali Linux for Advanced Pen Testing and Ethical Hacking"}]'
path_count: 2
tags:
  - course
  - topic/security
  - skill/penetration-testing
  - skill/kali-linux
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Penetration%20Testing%20Essential%20Training.md)

![Penetration Testing Essential Training](https://media.licdn.com/dms/image/v2/D560DAQHOd90QzPFHDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719429105265?e=2147483647&amp;v=beta&amp;t=CEKCl25X6pQyYKTlQiYXsstNjrrLyyjXSIbknSmWdg4)

# Penetration Testing Essential Training

> Penetration testing is one of the best ways to see if your security will hold. It puts testers in the role of attackers, looking for vulnerabilities in your networks, computers, applications, email, and users. This course provides an introduction to the key knowledge and skills to start a program of professional penetration testing at your organization. Cybersecurity expert Malcolm Shore reviews a

> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676) | 2h 55m | Intermediate | 11K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Establishing a solid foundation to progress into a career of penetration testing](#establishing-a-solid-foundation-to-progress-into-a-career-of-penetration-testing)
  - [What you should know](#what-you-should-know)
  - [Disclaimer](#disclaimer)
- [**1. What Is Pen Testing?**](#1-what-is-pen-testing) (3 videos)
  - [Pen testing overview](#pen-testing-overview)
  - [The cyber kill chain](#the-cyber-kill-chain)
  - [The MITRE ATT&CK repository](#the-mitre-attck-repository)
- [**2. Pen Testing Tools**](#2-pen-testing-tools) (8 videos)
  - [Scanning networks with Nmap](#scanning-networks-with-nmap)
  - [A netcat refresher](#a-netcat-refresher)
  - [Capturing packets with tcpdump](#capturing-packets-with-tcpdump)
  - [Work with netstat, nbtstat, and arp](#work-with-netstat-nbtstat-and-arp)
  - [Scripting with PowerShell](#scripting-with-powershell)
  - [Extending PowerShell with Nishang](#extending-powershell-with-nishang)
  - [What is Active Directory?](#what-is-active-directory)
  - [Analyze Active Directory with BloodHound](#analyze-active-directory-with-bloodhound)
- [**3. Bash Scripting**](#3-bash-scripting) (3 videos)
  - [Refreshing your Bash skills](#refreshing-your-bash-skills)
  - [Controlling the flow in a script](#controlling-the-flow-in-a-script)
  - [Using functions in bash](#using-functions-in-bash)
- [**4. Python Scripting**](#4-python-scripting) (7 videos)
  - [Refresh your Python skills](#refresh-your-python-skills)
  - [Use the system functions](#use-the-system-functions)
  - [Use networking functions](#use-networking-functions)
  - [Work with websites](#work-with-websites)
  - [Access SQLite databases](#access-sqlite-databases)
  - [Using Scapy to work with packets](#using-scapy-to-work-with-packets)
  - [Leveraging OpenAI for testing](#leveraging-openai-for-testing)
- [**5. Kali and Metasploit**](#5-kali-and-metasploit) (5 videos)
  - [A Kali refresher](#a-kali-refresher)
  - [Fuzzing with Spike](#fuzzing-with-spike)
  - [Information gathering with Legion](#information-gathering-with-legion)
  - [Using Metasploit](#using-metasploit)
  - [Scan targets with GVM](#scan-targets-with-gvm)
- [**6. Web Testing**](#6-web-testing) (5 videos)
  - [Approach web testing](#approach-web-testing)
  - [Test websites with Burp Suite](#test-websites-with-burp-suite)
  - [Check web servers with Nikto](#check-web-servers-with-nikto)
  - [Fingerprint web servers](#fingerprint-web-servers)
  - [Web server penetration using sqlmap](#web-server-penetration-using-sqlmap)
- [**7. Understand Exploit Code**](#7-understand-exploit-code) (7 videos)
  - [Exploit a target](#exploit-a-target)
  - [Finding caves for code injection](#finding-caves-for-code-injection)
  - [Understand code injection](#understand-code-injection)
  - [Understand command injection](#understand-command-injection)
  - [Understand buffer overflows](#understand-buffer-overflows)
  - [Password spraying Active Directory](#password-spraying-active-directory)
  - [Find exploit code](#find-exploit-code)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Establishing a solid foundation to progress into a career of penetration testing](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/establishing-a-solid-foundation-to-progress-into-a-career-of-penetration-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/establishing-a-solid-foundation-to-progress-into-a-career-of-penetration-testing?u=76281980&t=0)** - [Malcolm] The internet has developed rapidly over the last 20 years or so, from a novel way of sharing information to become a data utility, as important as the power and water utilities that we depend upon. Cyberspace, as we now know it, supports much of our social, business, and government activities. But with that has come a whole ecosystem of cyber threats, from script kiddies to organized crime and nation state actors. It's critical that we know how to test our cyberspace presence to ensure we're safe from harm. In this course, I'll be introducing you to the world of pen testing. I'm Malcolm Shore, and I've spent a career helping governments and businesses protect their systems against cyber attack. I'd like to invite you to take this [[LinkedIn]] learning course to learn about the essentials of pen testing. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Speakers:** - [malcolm] (1)

#### [What you should know](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a practical course, and during this course, I'll be using [[Windows]] and [[Linux]]-based tools running on a VirtualBox test network to do testing. In particular, I'll be using the Kali testing framework and the Metasploitable system as a test target. I'll be using both commercial and public domain tools for testing, and I'll be showing you code in Assembler and C. You should also know the basics of Bash and [[Python (Programming Language)|Python]] scripting, and I'll provide a refresher on them. Pen testing is a challenging pursuit. You should be competent in computer and network technologies, and you should have a working knowledge of [[Ethical Hacking]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Linux]] (1), [[Python (Programming Language)|Python]] (1), [[Ethical Hacking]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Tools:** bash (1)
> **Speakers:** - [instructor] (1)

#### [Disclaimer](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/disclaimer?u=76281980&t=0)** - [Narrator] This course uses a range of third-party testing tools. Some are commercial [[Microsoft Products|products]] and some are open source. The download and installation instructions for all tools used in this course is available as a PDF in the associated course material. While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers, and we can't provide assurance that these sites might not have been compromised when you visit them. Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware, and may raise antivirus alerts when you visit them. The testing tools we demonstrate are extremely powerful. They may demonstrate some of the same signature characteristics as malware and malicious implants, and may raise antivirus alerts when you try to download them. Again, we can't provide assurance that the software hasn't been compromised when you download it, and so, as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load into your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Env Vars:** pdf (1)
> **Speakers:** - [narrator] (1)


### 1. What Is Pen Testing?

[↑ Back to Table of Contents](#table-of-contents)

#### [Pen testing overview](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=0)** - [Presenter] Over the last decade, testing computer systems for vulnerabilities has become a necessary part of any deployment. Traditionally, the [[Software Development]] lifecycle included testing as the final stage prior to going live and used testing methods based on developing test cases to confirm the software was functionally correct, i.e. it produced the correct result. While this was all very well for software through to the 1990s, the advent of the internet and online services provided a rich environment for hackers to find flaws in software. Often, these flaws exploited and expected inputs such as maliciously crafted packets and used unexpected techniques such as command injection. The typical hacker was a bored teenager with a computer and a modem and plenty of spare time. These attacks demonstrated the limitations of testing by thinking like a developer and began the age of testing by thinking like an attacker. In other words, don't just run a set of test cases. Also use your imagination and try to think of different ways to penetrate your target. Pen testing, as this approach to testing is now known, has become a recognized testing approach and a popular career choice. The name hacker was originally used to describe someone who was very skilled at modifying computer software in order to make it perform exceptionally well. Over the years, the term has been increasingly used to describe someone who has the same level of skills,
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=94)** but uses them for annoying or malicious purposes. As the internet grew, hackers started posting their hacking software on bulletin boards and then on shared underground websites. These were often scripts which automated the attacks using languages such as Pearl, or more recently, [[Python (Programming Language)|Python]], would be hackers with few skills were enabled to download the tools and run them, and this community became known as script kiddies. As businesses started using attack techniques in a controlled environment to check their own software, the term white hat was used to distinguish the authorized testers from the black hat or unauthorized hacker. As the internet grew, a number of different types of black hat hackers emerged. Hacking amongst bored teenagers has continued to flourish, but increasingly as script kiddies. Some of the more skilled amongst them have become research hackers who find bugs and develop their own exploits. Often in order to sell them to other black hats on the dark net. Of more concern, many countries now from state-sponsored hackers sometimes called cyber warriors, who hack for military or espionage purposes. Similarly organized crime has seen the financial game possible with hacking, and now cyber criminals form one of the biggest groups of hackers targeting industry. State-sponsored hackers and cyber criminals are very skilled and will often deploy zero day exploits,
>
> **[3:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=187)** which can punch holes through even the best defended networks. They operate stealthily. They cause immense damage and financial loss and have created a toxic environment of mistrust and fear on the internet. As to the white hats, the increase in black hat activity has seen a massive demand for [[Penetration Testing]] and a demand for a much higher skill level to match that of the black hats. Some of the more skilled white hat testers have focused on research to find bugs and to claim bug bounties. As with black hat hackers, the white hat community develops some post white hat testing tools on the internet. Some of these are commercial tools released onto the internet often with a community addition, with a limited capability and require a license to be purchased in order to unlock their full potential. Others are fully functional freeware or shareware tools. In addition to individual tools, there are a number of testing frameworks available which bring a set of tools together. The best known of these is [[Kali Linux]], a full freeware [[Linux]] distribution, which includes over 600 tools, which is often the primary framework used by a pen tester. The start point for a career in penetration testing is to become an ethical hacker. The ethical hacker understands the internet environment and has a knowledge of the tools used to test systems. An ethical hacker can run the standard tests and provide a first level of confidence that a system is secured against a casual attacker.
>
> **[4:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=282)** The pen tester has a much higher level of both knowledge and skills and is able to not only use the tools, but also find the more sophisticated weaknesses in systems. A pen tester will be able to not only detect a security issue, but also demonstrate how it can be exploited. This may be done by modifying an existing exploit or creating new exploit code. A pen tester is able to provide confidence that a system can withstand a sustained attack from a skilled attacker. An elite pen tester is someone who has the highest level of skills and often finds zero day exploits to support his or her pen testing. Elite pen testers are also the community of hackers who create many of the public domain tools used by the white hat community. Certified Ethical Hacker is the foundational certification for [[Ethical Hacking]] or pen testing. Well, it used to be a paper-based certification. It now involves fully fledged hands-on training. It's the basic certification required for someone to start out on a career in system testing. Offensive security is the organization which provides the Kali framework. And it offers a range of pen testing certifications, which are recognized globally. The benchmark certification for a professional pen tester is the PEN 200 Offensive Security Certified Professional, or [[OSCP]]. This is the certification most professional pen testers have, and it demonstrates not only knowledge
>
> **[6:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=375)** of pen testing techniques and tools, but also a high level of skill in applying them to an unknown target environment. While we're focused on pen testing in this course, this is just one of a number of ways in which cyber defenders can address the threats. An important part of cyber defense is checking for and correcting known vulnerabilities. This can be done for the perimeter with an online service such as Nessus and internally with network [[Vulnerability Assessment]] tools such as Rapid 7 and Expos. Pen testers run tools and techniques against targets looking for areas of weakness that the developer hasn't found during testing and that the vulnerability scanner hasn't detected. These may be oversights that should have been found or zero day vulnerabilities that aren't in the signature database. The ultimate pen test is called a red team test, where a team of pen testers are given authority to mount an unannounced attack on the whole network with the objective of doing everything that an attacker would to find a way to penetrate the network and get to its internal systems. Finally, there's a new approach and a new breed of professional called a cyber hunter whose job is to do deep monitoring of the network and server environment, looking for indicators that the network has been compromised. The cyber hunter will use network [[Intrusion Detection]] systems and [[Big Data]] security analytic solutions to find indicators of compromise. Cyber hunting is an emerging discipline
>
> **[7:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=470)** and there are, at this stage, no specialist tools available. This function and the tools for it will be a significant area of development over the next decade.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (2), [[Software Development]] (1), [[Python (Programming Language)|Python]] (1), [[Kali Linux]] (1), [[Linux]] (1)
> **CLI Commands:** find (6), make (1), python (1)
> **Analogies:** such as (5)
> **Definitions:** in other words (1), known as (1), is called (1), is an  (1)
> **Env Vars:** pen (1), oscp (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [presenter] (1)

#### [The cyber kill chain](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=0)** - [Instructor] Cyber attack is now recognized as a serious threat to governments, businesses, and to individuals. Nowadays, cyber attacks come mostly from organized criminals and state-sponsored agents using well-defined end-to-end business processes and attack techniques. Let's look at the various stages that an attack will go through from inception to achieving its ultimate goal. In 2009, a team from the Lockheed Martin Cyber Emergency Response Team produced a seminal paper on cyber attack called "Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains." This can be downloaded from their website, shown here. The research paper introduced the concept of what is now commonly known as the cyber kill chain. The cyber kill chain views an attack in seven stages, reconnaissance, weaponization, delivery, exploitation, installation, command and control, and action. An attack doesn't always progress from one step to the next, though often overlap, but each stage represents a milestone in prosecuting the attack. Reconnaissance is the term given to finding and finding out about a target. Just as a burglar will case a joint before breaking in, so a cyber criminal has to find out about his or her target. Individuals typically have one address on the internet, which has been allocated by their internet service provider,
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=96)** whereas a business may have a number of addresses in what is known as their internet domain. A cyber attack against the business target will start with a known website address and then scan the internet space around that address for other systems used by the target. The business will see this as a response check on every host in its domain. This is known as an IP address scan. Then when the attacker has a list of active hosts, he or she will scan each host in turn to find out what entry points are exposed. This is known as a port scan. This is done to identify potential vectors for attack and check the versions of software used in those vectors. Attacks nowadays are not done manually. An attacker will usually purchase time on a network of compromised computers in order to run automated scans. These networks are known as botnets and may consist of hundreds of thousands, if not millions, of compromised computers. This allows cyber attack to be run at scale. Weaponization means taking a known vulnerability and customizing it to a specific target or group of targets and integrating it to enable it to run from an automated cyber attack platform. The weaponized malware may be designed to exploit a vulnerability in a specific version of an operating system or target a specific online [[Banking]] website. In the age of hacking as a business, cyber criminals will often purchase the weaponized malware from dedicated developers
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=190)** rather than develop their own version. The most common way of delivering malware is to attach an infected document, PDF image, or other electronic item in a way that when the document is opened, the malware will self-install. This file can then be sent to the victim via email, a process known as [[Phishing]]. Another way might be to find a vulnerable website, infect it with the malware, and send an email invitation to the target to visit the website. If the victim visits the website, then the malware is downloaded and infects their workstation. A third way might be to use default user IDs and passwords built into software on the target system, or to use a stolen user ID and password to enter the target system and directly implant the malware. It's also possible to find flaws in software that's exposed to the internet and to manually deliver the malware. In practice, an attack will often require establishing a beachhead on an internet exposed host and then using that to penetrate deeper into the system to get to the real target, which may not be directly connected to the internet. Finally, an infected flash drive can be used to deliver malware, and this can be very effective if the target system is not connected to the internet. This requires that a user of the target system be persuaded or tricked into using the flash drive. For email attachments and flash drive attacks, the infected item will exploit a vulnerability in the target's software post-delivery
>
> **[4:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=285)** when the document is open or the flash drive inserted. A compromised website may similarly download [[HTML]] code, which takes advantage of a browser vulnerability. In the case of remote access, the exploitation phase is simply the unauthorized use of credentials. There's also another class of exploitation, which is a user in the target organization executing malware without knowing it, a mail attachment, a malicious document, or a compromised website. This is the simplest and unfortunately, the most successful exploitation vector. After the exploitation phase, the malware or intruder may simply take action, skipping directly to the last phase of the cyber kill chain. However, the more usual case is that the payload is installed either into the memory or onto the hard disk of the target system. Additionally, some form of mechanism may be introduced to make sure the payload is restarted every time the system is rebooted. One way of doing this in [[Windows]] is to add a registry entry to automatically run the payload when the system starts up. The payload will often be or include a means of maintaining ongoing access into a command shell. A system compromise is often automated. Once a payload has been installed, the first action it takes will be to connect back to a command and control server to register as a compromised host. The attacker will then want to send back a command for some action to be taken, listing the subdirectory and files, extracting specific named files,
>
> **[6:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=379)** modifying or replacing software, and so on. An important feature of the payload is that it can determine the address of the command and control server, which may change over time. Exactly what form of action is carried out by a payload when it arrives at its target depends upon the motives of the attacker. A hacktivist may want to deface a website. A state-sponsored agent may want to steal sensitive information, and a cyber criminal may want to access a bank account in order to steal money. The common theme, however, is that whatever the action is, it's unlikely to be in the best interests of the target.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (1), [[Phishing]] (1), [[HTML]] (1), [[Windows]] (1)
> **Definitions:** known as (6), is a  (1)
> **CLI Commands:** find (4), make (1)
> **Env Vars:** pdf (1), html (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [The MITRE ATT&CK repository](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=0)** - [Instructor] It's useful to know the kind of techniques that attackers can use in their malware when preparing our defenses. Mitre provides a repository of tactics and techniques that have been found in malware accessible through their attack site. Building on the Lockheed Martin cyber kill chain, the Mitre repository looks at the full attack from reconnaissance to impact, and takes a deeper dive into what tactics and techniques are used to infiltrate the malware, and the malware when it executes on its targets. Selecting matrices, we can see the list of techniques by the 12 stages of an attack. Let's select external remote services. And we can see an explanation of the form of initial access. Examples of various actors and how they achieve this. And scrolling down, we can see the mitigations, ways to detect the technique, and relevant references. Selecting tactics, enterprise, we can see for the various tactics in the left hand list, the kind of techniques by attackers. If we select collection and then scroll down to T1123, we can see that audio capture from the computer microphone is a technique used to eavesdrop on a target.
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=94)** Groups provides a list of known cyber attack groups. If we scroll down to platinum, we can see that this group targets governments and related organizations in south and southeast Asia. The Mitre attack site is a useful knowledge base for anyone looking at diagnosing malware and attributing it to an attack group.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll down (2)
> **Definitions:** is a  (2)
> **Env Vars:** t1123 (1)
> **Speakers:** - [instructor] (1)


### 2. Pen Testing Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Scanning networks with Nmap](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=0)** - [Instructor] Let's take a refresher on using [[Nmap]] for scanning networks to discover what hosts are present and what services are available on those hosts. I'll be using the Nmap tool, which comes preloaded in Kali. Nmap can scan using a number of techniques which, together, can help identify hosts and services which are open to the internet, those that are closed and those that are open, but behind a security filter of some sort. The first thing we'll do is to discover what hosts are running on our network. The most straightforward way to do this is using the -sn option across the subnet, nmap -sn 10.0.2.0/24. The -sn option touches each host in turn using the ICMP ping protocol to see whether it responds. Nmap reports only the hosts that do respond, providing their IP addresses. Here we find we have four hosts responding. Having identified which hosts are responding, we can probe the TCP and UDP ports to check what services are being presented. Let's check the target on 10.0.2.32, our Metasploitable server, and we'll check for TCP ports using the -PS option, nmap -PS 10.2.0.32. Nmap is now checking the most common services to see if they're open on the host. It does this by starting to open a connection to the service
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=94)** and then closing it down before the connection is complete. This is called a TCP SYN ping, and it works by sending an empty TCP packet with the SYN flag set and waiting for the host to respond with a standard SYN-ACK response. While a normal connection would be completed by sending back an ACK, Nmap instead cancels the connection before it completes. Okay, we can see we have quite a few ports open. A useful option to be familiar with is -P0, which will skip the ping check of the host. This is particularly useful when we want to scan a live system, which doesn't respond to an ICMP ping. We're running a [[Windows Server]] on address 10.0.2.38, but Nmap didn't find it. Let's scan it using -P0, nmap -PS -P0 10.0.2.38.
>
> **[2:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=159)** Okay, we now find that the host is in fact up and we have some services available. Let's now check for UDP ports. We can do this using the -sU option, and this will check the most common 1,000 UDP ports. This requires root privileges, so we'll run with sudo, sudo nmap -sU 10.0.2.32,
>
> **[3:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=187)** and we'll scan our Metasploitable server. This will take a while, so we'll come back when it's finished. We finished the UDP scan now, and we see a number of these ports open. Let's use Nmap to drill down into an individual service to get more details about what it's running. By using the -sV option, Nmap will try to identify the version of software being used for a service. I can limit the testing to just one service with the -p option. Let's test the second service shown on the TCP scan of Metasploitable, the Secure Shell service on port 22, nmap -p22 -sV 10.0.2.32.
>
> **[4:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=240)** Nmap comes back within a few seconds and tells us that the service on port 22 is running the OpenSSH version 4.7p1 software. We can combine these and check multiple port ranges for both TCP and UDP, again, running with sudo, sudo nmap -sSUV -p,
>
> **[4:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=268)** U for UDP, and we'll check ports 53, 111, and 137, T for TCP:, and we'll check ports 21 to 25, 80, 139, and 8080,
>
> **[4:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=292)** on 10.0.2.32 again. Okay, let's check next what operating system is running on the target, and we can do this using the -O switch. Again privileged, so sudo nmap -O 10.0.2.32.
>
> **[5:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=319)** The scanner's now finished, and Nmap has fingerprinted the computer operating system correctly as a [[Linux]] system, as well as listing the TCP ports that it's detected. Nmap has a comprehensive library of scripts. If we change directory to /usr/share/nmap/scripts,
>
> **[5:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=345)** and list them, these provide many advanced capabilities. Let's run one. We'll use the rexec brute force test to extract credentials via port 512. We can do this by using the --script argument, nmap 10.0.2.32, and we're only focused on port 512, and we're going to use the script of the rexec service brute force attack. And here we see a list of valid credentials for the Metasploitable server. Nmap is an important tool in the pentester's inventory. It's worth spending time to become very familiar with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (22), [[Windows Server]] (1), [[Linux]] (1)
> **Env Vars:** tcp (8), udp (6), syn (3), icmp (2), ack (2)
> **Versions:** 10.0.2 (9), 10.2.0 (1), version 4 (1)
> **CLI Commands:** sudo (5), find (3)
> **Code Identifiers:** su (2), sv (2), ssuv (1)
> **Ports:** port 22 (2), port 512 (2)
> **Definitions:** is called (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [A netcat refresher](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=0)** - [Instructor] [[Netcat]] is often referred to as the Swiss Army knife of networking 'cause it has so many features and so many uses. Fundamentally, it operates as either a sender or a receiver of arbitrary data across the network. Netcat is installed by default in Kali. Let's check the IP address of my Kali system. I've got a script set up called MyIP, which does this for me. Okay, we're 10.0.2.15. Let's use Netcat to set up a chat line across the internet. I'll set up a Netcat listener on Kali by specifying the -l option and a port number with a -p option. Nc -lp and I'll use port 4545. Netcat is now listening for data to come in on port 4545. I'm now on my window system, which also has the Netcat version NC 64 installed. I can connect to Kali by saying nc64 10.0.2.15 4545.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=66)** This establishes a raw data connection. I'll type hello universe and press enter. Back in Kali, we can see the same text has appeared. If I now enter Hi, how is Mars? it appears immediately in the [[Windows]] system. To terminate the connection I can press Ctrl C. The next thing I'll do with Netcat is to copy a file from one system to the other. I've got a text file on my Kali system called myfile.txt. Let's have a look at that. Cat myfile.txt. Ah, 'twas on a lofty by her side. I now want to set up Netcat to receive this file in Windows. Firstly, I'll check my IP address with IP config.
>
> **[2:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=127)** We can see the address is 10.0.2.14. I'll now set up Netcat to listen and receive our Kali file. nc64 -lp and I'll use 4545 again. This time, whenever I get text coming in, I'll put it into incoming.txt. So now when the data is received, it'll be sent not to standard out but instead into a new file called incoming.txt. Okay, let's go do that. To transfer the file, I type nc 10.0.2.14 4545, which is the port that we specified the listener on and I'll type into that connection, myfile.txt and with three seconds of no transfer it will terminate. This command tells netcat to take the data from myfile.txt instead of standard in. Netcat makes the connection, takes the input, and sends it through the network and then terminates. Okay, let's have a look at what we've got. Type incoming.txt and we can see that we've got the same file that we sent. Okay, let's clear the screen. Netcat can also be used as a client for services on another host. For example, we can use netcat to connect to a web server. I'll type nc -v [google.com](https://google.com) 80, so we're looking at [thewebsitegoogle.com](https://thewebsitegoogle.com).
>
> **[3:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=220)** The - v switch tells Netcat to be verbose and provide me with status messages and 80 is the standard port for accessing a website. When the connection is made, I can type the HTTP command, GET index.[[HTML]] HTTP/1.1 and I press enter twice
>
> **[4:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=242)** and the web server will deliver its webpage code. Similarly, I can connect to an FTP server. I'll type NC -v 10.0.2.8 21.
>
> **[4:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=256)** This will connect to my meta exploitable FTP service. Okay, the FTP server is now waiting for me to log in. I'll do that. First I'll type user anonymous and then I'll type pass malcolm@[example.com](https://example.com), which is a random string for the password for anonymous. The server accepts my anonymous login. I'll type help and get a list of the FTP commands available on that server and I can now type quit to leave. Netcat is indeed a Swiss knife for networking and it's a tool you should be very familiar with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Netcat]] (15), [[Windows]] (2), [[Google]] (1), [[HTML]] (1)
> **File Paths:** myfile.txt (4), incoming.txt (3), index.html (1)
> **Env Vars:** ftp (4), http (2)
> **Versions:** 10.0.2 (5), 1.1 (1)
> **Prerequisites:** set up (5)
> **URLs:** [google.com](https://google.com) (1), [thewebsitegoogle.com](https://thewebsitegoogle.com) (1), [example.com](https://example.com) (1)
> **Ports:** port 4545 (2)
> **CLI Commands:** cat (1)

#### [Capturing packets with tcpdump](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=0)** - [Narrator] One of the more useful tools when testing our systems is TCPdump, which we can use to capture TCP packets that are transmitted on the local network. We need to make sure when we're trying to capture packets that are traveling between other hosts on the network, that we've got promiscuous mode set. This is set in the virtual machine configuration under Network, Advanced. And as we can see here, we have it set to allow all. TCPdump is a command line tool and is included in the [[Linux]] distribution. It has some basic command line options. We can check tcpdump -D to show the list of interfaces that we can select for capturing traffic. We can use any to capture all traffic on all interfaces. We can also use the minus C switch to limit the number of packets we capture to just 10. We need root privileges to run tcpdump when we're capturing packets, so we'll type pseudo tcpdump -i any -c 10.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=79)** We can use the -n switch to suppress host name resolution and -nn suppresses both host name and port name resolution. Let's run with -nn. And this time we'll limit our interface capture to ethernet zero. Okay, now our packet capture shows the IP address and the port number. Some of the other common switches we can use are T, X, V and S. Let's run with -s0 -tX. Minus T makes the timestamp human readable. Minus X displays the packet in hexadecimal and ASCII. Minus V is used for verbose mode and minus VV and minus VVV, more so. Minus S is used to specify the size of packet data displayed. The default display size is 96 characters, but we can use minus S zero to display the full packet.
>
> **[2:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=163)** Tcpdump also allows expressions to be used as filters. There are three [[Forms]] of expression, type expressions for which we can use host net and port, direction expressions, source and DST for source and destination, and protocol expressions, TCP, UDP, ICMP, and the AH authentication protocol. We can also use IP6 as a protocol expression to see all IP6 traffic. Let's have a look at the traffic to and from our window server. We'll again use ethernet zero and capture 10 packets, and we'll specify host 10.0.2.38.
>
> **[3:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=221)** Let's now see only the UDP packets on the network, and we specify that just with the UDP protocol. Let's look at traffic to and from a subnet. pseudo tcpdump -eth0 - c 10 net
>
> **[4:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=254)** 10.0.2.0/24.
>
> **[4:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=262)** Let's look at traffic just to one and then a range of destination ports on our meta exploitable server. Tcpdump, ethernet zero, 10 packets, and we'll look at DST for the destination port, port 443.
>
> **[4:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=291)** And destination portrange 1-1023.
>
> **[5:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=306)** We can also write out the file that we capture in ASCII format using pipes, or we can capture it as a Pcap using the minus W switch. Let's capture and record all IP6 traffic on the network.
>
> **[5:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=325)** So we'll capture IP6 and we'll record it in ip6.pcap
>
> **[5:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=339)** We can do more advanced expressions using and/or and brackets. Complex expressions may require quotes. For example, let's look at traffic to the meta exploitable server on ports 80 or 4 4 3 from our window system, pseudo tcpdump -I eth0 -c 10, and we'll now say, source is 10.0.2.38, our [[Windows]] system.
>
> **[6:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=373)** And DST port is 80
>
> **[6:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=382)** or 4 4 3, close brackets, quote.
>
> **[6:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=391)** And from our Windows system we'll navigate to http//10.0.2.32,
>
> **[6:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=403)** and we can go to one of our websites. Okay, we can also check and filter on flags in the header. We can do this using direct offset expressions such as TCP header offset 13 bit two.
>
> **[7:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=424)** To do that, we'll use the expression 'tcp[13]&2!=0'
>
> **[7:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=442)** and we won't wait for that traffic, but that would capture those. We can do the same thing using the expressions TCP flags and TCP syn, 'tcp[Tcpflags]
>
> **[7:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=461)** and we're looking for a flag equals tcp-syn.
>
> **[7:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=474)** And here we've got some. This allows for some useful diagnostics on the network limited only by our imagination. We can look for an SSH service on any port by checking for the term SSH in the banner text. To do that, we'll check TCP square bracket, open bracket, TCP 12 shifted two, go on four,
>
> **[8:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=504)** close bracket equals zero times five, three for S, five, three for S for eight for H 2D.
>
> **[8:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=521)** Okay, this will find these requests regardless of the port the service is running on. from Kali, let's SSH into our meta exploitable server, and then we can see that we've captured the SSH header. Another check we might want to do is to check for invalid combinations of flags, such as the [[Representational State Transfer (REST)|rest]] and syn both being set. To do that, we'd say look for TCP 13
>
> **[9:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=560)** has both four and two set. This has been just a refresher. There's a lot more for you to explore in tcpdump. It's a powerful packet capture tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Linux]] (1), [[Forms]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** tcp (8), ip6 (4), ssh (4), dst (3), udp (3)
> **CLI Commands:** ssh (4), make (1), find (1)
> **Versions:** 10.0.2 (4)
> **Analogies:** such as (2), for example (1)
> **Tools:** command line (2)
> **Code Identifiers:** tx (1)
> **Ports:** port 443 (1)

#### [Work with netstat, nbtstat, and arp](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=0)** - [Instructor] Netstat and ARP are two useful tools for viewing network connections and these can be used to identify anomalies and help focus testing on key areas of interest. Let's look at Netstat first. Netstat is a tool to list protocol [[Statistics]] in current network connections. By simply entering netstat, we get the current TCP connections. Okay, we can see our TCP connections. The first column shows the protocol, TCP. The next column shows the local address and port number used. The next column shows the foreign address and the final column, the connection state. We can get information on the executable, which created the connections using the -b switch. Here we can see the executable, the tones, the first of the TCP connections. Similarly, we can use the -o switch to see the process owning the port. We can use the -a switch to list all services that are active listing both TCP and UDP ports. This shows the TCP ports that are established as well as both TCP and UDP ports that are open and listening. *.* in the foreign address indicates that a connection hasn't yet been made as we'd expect for UDP. Let's see how we get the protocol statistics. Here we can see the number of active and passive TCP ports and failed in reset connections. We can also see a summary of UDP packets sent
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=95)** and received. With the -rn switches we can see the interface tables with MAC addresses and the [[Routing]] table in numeric IP form. ARP is the address resolution protocol utility, which associates numeric IP addresses with Mac addresses to enable ethernet routing. This is a table which may be modified by an attacker in order to carry out a man in the middle attack. We can display all address entries using the -a switch. And we can add an address using the S switch and then we can review the table.
>
> **[2:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=142)** With netstat and ARP we can get a good view of the network posture without resorting to packet tracers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Routing]] (2)
> **Env Vars:** tcp (8), udp (4), arp (3), mac (1)
> **Definitions:** is a  (2)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Scripting with PowerShell](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=0)** - [Instructor] [[Windows]] [[Powershell]] comes built into all current Windows systems and is to Windows what the Bash shell is to [[Linux]], a powerful command line tool for automating systems and [[Network Administration]]. It's also a useful tool for the pen tester to be able to use when carrying out testing. PowerShell combines the features of a scripting language with command line utilities and cmdlets, as well as the ability to interface to the Windows Management Instrumentation, or WMI system. Cmdlets are a new concept with PowerShell. They use a standard naming convention that follows a verb-noun pattern, such as get help, get event log, get process, and set service. The get verb displays information about the noun and the set verb modifies or sets some or all of that information. Get and set are just two examples. There are around a hundred verbs that can be used. I'm in the PowerShell console, and I can list the available verbs by entering the command Get-verb. We can see in this list get and set and many other verbs. We can see how many with a handy function call by entering (Get-verb).count, and we see there's 98. We look at some more of these verbs as we refresh our skills in PowerShell. We can get help on the various [[Forms]] of these verbs. For example, we can enter help push. We can see there's a Cmdlet Push-Location
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=99)** and an alias of pushd for that. By entering help pushd, we get the full documentation on the Cmdlet. We can see this is a stack operation Cmdlet, which pushes the location onto a stack and that there's an associated set of Cmdlets, such as Get-Location, Set-Location, and Pop-Location. PowerShell supports the standard Windows shell commands, such as cd, dir, and ipconfig to name a few. We can use the standard less than and greater than operators in PowerShell as we would in Windows.
>
> **[2:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=146)** We can see the host name and the directory by typing the file. We can also use the cat command to list the file as we would in Linux. PowerShell commands can be scripted into a TXT file. And we use the .ps1 extension to show that the file is a PowerShell script. We can run any Windows program or PowerShell script by entering its name. So let's create a TXT file using Notepad. For a normal executable, we'll prefix it with .\, but for Windows commands, we can omit that. Okay, let's just put in a couple of PowerShell commands as an example. And we'll save it as test1.ps1.
>
> **[3:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=202)** Now we can run the script this time using the .\ prefix, and we can see the get process command being executed. We don't need to use Notepad to write scripts, PowerShell comes with an intelligent scripting system, ISE, which makes developing and testing complex scripts much easier. I'm in the ISE and can create a script by clicking New on the toolbar. Okay, we've got a tab to write a script. As I write it, I get assistance with the command format. I can now save that as mytest1,
>
> **[4:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=247)** and then Run. Back in the console, let's see how we can use variables in PowerShell, and we prefix them with the dollar sign. We can also set up a list by just declaring it. And we can check the number of list entries using the count function. We can also use the echo command to print information to the standard output. And there's also a PowerShell cmdlet called Write-Host that does the same. We can also include variables in the string, and the value of the variable is substituted. We can use if then commands in PowerShell using a Bash-like syntax. Note the ability to use multi-line entry for this with execution at the completion of the command. We can also script loops using the do while.
>
> **[5:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=333)** And we get the elements of the list displayed. It's a bit obtuse really, so there's another way to do this using the ForEach clause.
>
> **[5:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=346)** Much simpler. This has been just a refresher. There's much more to learn in PowerShell if you are new to it. You can really get into the details by taking the PowerShell 5.0 course by Matt Hester.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (17), [[Windows]] (8), [[Linux]] (2), [[Network Administration]] (1), [[Forms]] (1)
> **Tools:** powershell (17), bash (2), command line (2)
> **Env Vars:** txt (2), ise (2), wmi (1)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** cd (1), cat (1)
> **Definitions:** is a  (2)
> **Versions:** 5.0 (1)
> **Prerequisites:** set up (1)

#### [Extending PowerShell with Nishang](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=0)** - Let's take a look at nishang, a set of powerful commandlets written by Nikhil Mittal. Nishang is available in the [[Kali Linux]] release, but it can also be manually loaded into a window system. The zip file can be downloaded from Nikhil's [[GitHub]] site shown here. I've already downloaded and extracted the nishang master contents into c:/nishang. Note that if you want to work with nishang, you'll likely need to turn off realtime protection. A number of these scripts are picked up as a threat by antivirus software. You'll also need to run the script as administrator, so make sure you open the [[Powershell]] using run as administrator option. I've got PowerShell loaded and running as administrator, so let's get going. I'll prepare the environment to load the nishang module by allowing unsigned scripts to be run and importing the nishang scripts for use. PowerShell will ask for permission to load unsigned scripts. We need to override this, which we can do fairly easily with the Get Child Item command, which we can invoke using its alias GCI. We'll look at the nishang module and recursively unblock all scripts within it. Let's get a listing of all the nishang modules using the Get Command commandlet. That's quite a lot of new capability we've added to PowerShell. Okay, let's start running some nishang commandlets. I'll start with the basic information gathering command.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=98)** The script encountered a couple of problems while collecting information, but let's use Notepad to look at what we did find. And we can see we've got a substantial amount of information, processors, hosts, users, installed software, hosts file, drivers, interfaces, and so on. We can check what a nishang command does using the Get help commandlet. Here we've got the help on the Invoke-Mimikatz commandlet, which we can use to extract user information from memory. Another interesting command is get-Passhashes, which extracts the password hashes for us. Okay, we've got our list of hashes. We can scam ports using nishang.
>
> **[2:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=162)** And we can see the open ports. This is useful for moving laterally in networks. Another powerful feature of nishang is creating documents with an embedded payload. An example of this is the out [[Microsoft Word|word]] command, which I'll run on a system with the [[Microsoft Office]] installed. This can create a default Word document or can embed the payload in whatever Word document is provided. And we've created a weaponized Word document called Salary_Details.doc. In this case, the payload is a command to invoke PowerShell, which we may wish to do as we move laterally through our target network as we test it. Nishang comes with a number of other payload deployment tools, including Out XL, Out Shortcut, Out CHM, and Out JS. We can do brute force testing with nishang using the Invoke-BruteForce command. This can be used to run a dictionary attack against various services. I'll show an example of running this against an FTP service on a remote system. I've got a user list and a password list set up. I'll use the verbose option so that we can see how we're progressing, and stop on success to terminate when we find the correct credentials. We can see the script running and it's got a bug as it's throwing an exception on a failed try. However it does find a match. Let's finish our refresher on nishang
>
> **[4:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=256)** with a look at the Invoke-Prasadhak. Which connects to the virus total database and checks the executables of all running processes for malware. This requires an API key from Virus Total, which you can obtain by registering a free account. Okay, we checked and we found one file that's flagged as malicious. I can enter the file hash into virus total and find the report. Here we have a single detection by the Baido engine that matches the Wisdom Eyes Trojan. I can investigate this further to determine if it's a real Trojan or a false positive. This has been a brief introduction to how we can extend our PowerShell testing capability with nishang. Nishang provides many commandlets and it's useful to spend time learning about each of them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (6), [[Microsoft Word|Word]] (4), [[Kali Linux]] (1), [[GitHub]] (1), [[Microsoft Office]] (1)
> **Tools:** powershell (6), github (1)
> **CLI Commands:** find (4), make (1)
> **Env Vars:** gci (1), chm (1), ftp (1), api (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### [What is Active Directory?](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=0)** - [Instructor] [[Microsoft]] provides an LDAP compliant identity provider called [[Active Directory]] as an optional feature in its server range. So when we purchase a [[Windows Server]], we've also got a latent Active Directory waiting to be activated. However, with Microsoft we get much more than just an LDAP directory. The full name of the Microsoft Identity provider is Active Directory Domain Services, and it not only provides identities, but is usually deployed as a complete domain management system as well. Understanding Active Directory is an important part of being an effective pen tester as it's pretty much part of any enterprise network, and it's often part of an adversary's attack chain. I won't go into the details of how we set up and manage active directories, and we won't set one up for this course. But you can check out the Active Directory courses from Ed Liberman if you want to delve further into this. Let's take a brief look at Windows Server 2019 that I have running. Server Manager provides the option for us to add roles and features. Under server roles, we can see five active directory features that we can turn on. We can see that Active Directory Domain Services is checked. I've already set this server up as an Active Directory Domain Server. So what do we get when we switch on Active Directory Domain Services? We get a directory where we can store identity related items, which we can refer to more properly as AD objects. There are many objects such as users, computers,
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=96)** policies, and so on. We get what's known as a schema that defines the AD objects and their attributes. We get a catalog, which is arranged as a hierarchy of containers in which AD objects are put, allowing them to be browsed and searched. We get group policy objects, or GPOs, which enable central management of the configuration of computers and user accounts. There's also a replication service for distributing directory data on the network so that we can run multiple synchronized directories. And last but not least, Active Directory provides a central security system to authenticate identities and control access by users and services to systems in the Active Directory domain. We can think of an enterprise as a single domain holding a set of users and a set of computers. However, it's often not that simple in the real world. When we look at the Active Directory hierarchy, we see it starts with what's known as a realm, which is the full scope of everything in the enterprise. Within that, Active Directory allows a number of independent groups of domains, each having their own security boundary. These are known as forests. There may be just one active directory forest in an organization, or there could be multiple. For example, to support independently operating businesses within a conglomerate. Then within the forest, we have one or more Active Directory domains,
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=190)** and these are used to separate groups of AD objects in whatever way makes sense to the business. And then we can also create subdomains of an Active Directory domain, sub subdomains, and so on. How this is done, of course, is decided by the organization's unique structure and operating model. The structure of an Active Directory tree isn't just internal to Active Directory. It reflects how the enterprise is visible in the real world. Let's get a glimpse of what this looks like. We can run a tool that comes with [[Kali Linux]] called DMitry, which retrieves public information on an organization. I'll run this against [yahoo.com](https://yahoo.com). Dmitry [yahoo.com](https://yahoo.com). We can see here that DMitry has gathered subdomain information for [yahoo.com](https://yahoo.com). So [yahoo.com](https://yahoo.com) is the main domain, and ca.[yahoo.com](https://yahoo.com), uk.[yahoo.com](https://yahoo.com), and so on are all sub domains. And they of course may have their own internal sub domains themselves. There's also a sub hierarchy within Active Directory, which is relevant to domain controllers, and this is to do more with the network topology and group policies than the business model as such. This hierarchy starts with the domain and breaks down into sites. And within sites, we can have users and devices. This is important when we start planning replication of directory information and need to understand
>
> **[4:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=284)** how domain controllers talk to each other. It also affects the application of policy settings. With domains taking precedence over sites and sites over local machines, there's another active directory concept which comes into play here also, and that's trust relationships between domain controllers. These need to be in place to enable exchange of information between domains for replication, but also to support access for users to query directory information from a domain outside of their own. We'll leave the concepts of Active Directory here, and you can visit my course on [[Advanced Pen Testing Techniques for Active Directory]] to learn more. However, before we leave Active Directory, let's check out a tool in the next video that we can use to find ways to exploit an Active Directory system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (24), [[Microsoft]] (3), [[Windows Server]] (2), [[Kali Linux]] (1)
> **URLs:** [yahoo.com](https://yahoo.com) (6)
> **Definitions:** known as (3), is an  (1)
> **Env Vars:** ldap (2)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)

#### [Analyze Active Directory with BloodHound](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=0)** - [Instructor] Once we've got a member account which we can use to work with [[Active Directory]], we need to start working towards escalating our access to domain administrator. One of the useful tools for doing this is BloodHound. BloodHound analyzes the active directory contents and works out the paths that are available to escalate a user account based on the privileges of of those user accounts. Let's see what it makes of our active directory. BloodHound works offline in our Kali system. So before we start working with BloodHound, we need to extract data from our active directory server. We've already loaded the BloodHound [[Python (Programming Language)|Python]] collector, so let's run that. To use the blood hand Python system, we need to have a domain user account that we've obtained in some way. We'll be using the account for [[John the Ripper|John]] Doe with a username jdoe76 and a password of JDPass2021. To collect the data, all we need to do is .local/bin/bloodhound-python.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=66)** Give it the username jdoe76 and the password JDPass2021 for our domain user and the name server 192.168.1.199. The domain, [cybex.com](https://cybex.com) and we're going to collect all. The collector very quickly, detects the domain and collects the data from it. It creates a set of four [[JSON]] files. Let's start BloodHound now and go and look at the data. We have to start the [[Neo4j]] server first, so let's open a new terminal for that and we'll enter sudo neo4j console.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=123)** We need to change our initial Neo4j credentials and we do that by browsing to 127.0.0.1:7474
>
> **[2:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=147)** and we'll enter our initial Neo4j credentials
>
> **[2:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=156)** and connect and we'll put our new password in
>
> **[2:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=164)** and we'll say BloodHound and repeat that. Okay, now we can run BloodHound and log in
>
> **[3:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=182)** using the credentials neo4j BloodHound, neo4j BloodHound.
>
> **[3:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=197)** The first thing we'll do is to select upload data from the icons on the right
>
> **[3:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=207)** and select our four JSON files.
>
> **[3:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=216)** Okay, now these are uploaded. We can open up the panel on the left and we can see the database has been populated. We have three tabs, database, node info and analysis, and above that a set of three icons. The left hand icon is for path finding. Let's use that and look for a path from the start node, NSTOVE07 to DOMAIN ADMINS@[CYBEX.COM](https://CYBEX.COM)
>
> **[4:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=261)** and we find there's no data returned from that query. We can look at a path from AKATT42 to domain admins
>
> **[4:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=278)** and we find there is a path with AKATT42 being a member of domain admins. We can do this for each user account, but that takes time. BloodHound can do a lot of the work for us. Let's select analysis. We can now select one of the built-in analytics. An immediate analysis of interest is to list all domain admins.
>
> **[5:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=308)** We have an account called administrator, the normal [[Windows]] admin account. However, we can also see that AADMA31 and AKATT42 are also domain administrators, so their accounts we'll be wanting to exploit if we can. Let's run the analytic list all Kerberoastable accounts.
>
> **[5:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=339)** Here we find the Kerberos ticket account, but also another service account called Sendai. This is a good pointer to another possible step towards achieving escalated privileges. Another useful analytic to run is find AS-REP Roastable Users. Here we see NSTOVE97 doesn't require pre authentication, so this account can be exploited as we work through our escalation to domain admin. Now we've seen how we can identify possible paths forward. We well placed to start looking at privilege escalations. BloodHound is a powerful tool and it works well in large active directory scenarios. We've only scratched the surface here, but you should spend time getting familiar with this tool as you progress as an active directory pen tester.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (6), [[Neo4j]] (6), [[Python (Programming Language)|Python]] (3), [[JSON]] (2), [[John the Ripper|John]] (1)
> **Env Vars:** akatt42 (3), json (2), nstove07 (1), domain (1), admins (1)
> **CLI Commands:** find (4), python (3), node (2), sudo (1)
> **Definitions:** is a  (3)
> **URLs:** [cybex.com](https://cybex.com) (2)
> **Versions:** 192.168.1 (1), 127.0.0 (1)
> **Ports:** :7474 (1)
> **Tools:** terminal (1)


### 3. Bash Scripting

[↑ Back to Table of Contents](#table-of-contents)

#### [Refreshing your Bash skills](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=0)** - [Instructor] One of the skills that can be quite useful when pen testing is Bash scripting. Bash is a program that comes built into [[Linux]], and Bash scripts, also called Shell scripts, are text documents with a ".sh" extension. There's a number of courses on Bash scripting in our library, and if you want an in-depth understanding of the language, then I'd recommend you look in particular at the course by Scott Simpson. In the next few videos, I'll run through a quick refresher on the key points of Bash scripting. Let's have a look at the traditional Hello World script in Bash. I've got that prepared under the file "hello.sh". We start with the declaration that this is a Bash shell, and then we set a string variable and print it. We can now set the Shell file to enable execution with "chmod +x hello.sh". And then we can execute it. And we have our message displayed. We can use the convention dollar one, dollar two, et cetera to access the first second and so on argument on the command line. Let's have a look at the script "argue.sh". We'll put two arguments on the command line and then print them as one message. Again we'll "chmod +x argue.sh". And "argue.sh", we'll put "hello" as the first argument
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=101)** and "world" as the second argument. And we have two arguments and the message is "Hello World". Bash allows us to set variables and carry out operations on them. Let's have a look at the script "variables.sh". I'm setting "num1" to the value of the command line argument and setting "num2" as a constant. I'm checking whether the argument is greater than or equal to the constant and displaying a message accordingly. And I'm then displaying the sum of the two numbers. Variables in Bash are un-typed, so we have to use a double bracket syntax to achieve a numeric add. And we'll make sure the file is executable, "variables.sh", and we'll execute "variables.sh" and we'll give it the value 19. Bash displays the correct message comparing the two values, and then displays the sum. We can read information into the Bash script with the "read" command. So let's have a look at a script called "reader.sh". In this case we'll use an echo statement and then we'll read a name. And then we'll do the read and the message on the same line.
>
> **[3:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=196)** "Chmod +x reader.sh". And then we'll execute "reader.sh". And we'll enter our name, enter my name. And the second message, we'll enter the name again. As we can see when reading with a prompt, our entry is on the same line.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1)
> **Tools:** bash (11), command line (3)
> **File Paths:** argue.sh (3), variables.sh (3), reader.sh (3), hello.sh (2)
> **CLI Commands:** chmod (3), make (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Controlling the flow in a script](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=0)** - [Instructor] Bash offers a number of flow control statements. One of the common ones we'll be using is the for loop. Let's look at a script which reads data from an array. nano fortest.sh. Note that when we use the up caret as an index, we get the number of elements in the array and we use that to control the for loop. The first array element has an index of 0 and we use the expression ${i} to use the value of the loop variable as an array index. I've already set this as executable, so we can now run the script to print out the list of names. fortest.sh. And we get our list of names. We can also script to other similar loop mechanisms in a Bash script, the while loop, and the until loop. Let's have a look at them. nano wutest.sh. Firstly, we set the loop index at 6 and then use the while command to loop printing out the variable and decrementing it while our loop index remains greater than zero. Then we set our loop index to 1 and run an until loop printing the index and incrementing it until it's greater than six. Okay. Let's run our while and until loop. And we can see we run down from six to one,
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=96)** and then run up from one to six. We've already seen an if else command, but let's look at this again to see how we can check whether a directory exists, and if so, list its contents. nano iftest.sh. We check the directory we provide as an argument by using the -d operator and then we print out a message to say whether it exists or not. And if it exists, to list it. Okay, let's run that with a missing directory name. iftest.sh barney. And barney doesn't exist. And let's run that again, now. iftest.sh /usr/share/Thunar. And Thunar in the user share directory does exist and we can see its contents.

> [!info]- Semantic Content
>
> **File Paths:** iftest.sh (3), fortest.sh (2), wutest.sh (1)
> **Tools:** bash (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Using functions in bash](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=0)** - [Instructor] Bash provides the ability to define and call functions. Let's write a script which demonstrates the use of a function, and we'll also include the use of selecting case statements, nano fntest.sh.
>
> **[0:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=20)** In the first section of this script, we've defined the function, and we've used an extended if statement to check the city we're going to visit. This function takes one parameter, which is the city name. Note in Bash that the single operator = is used to do string comparisons and assignments. And the double operator == is used for numeric comparisons. In this function, we check the city and print advice on the language spoken. At the start of the main code, we set the system prompt symbol, PS3 to ">" and then we use the select statement to print a menu and loop asking for a selection. Note we're using another looping construct here, the do break loop. The menu is formed by the select statement. For each response, the case statement determines what is to be done, in this case, to print out the country. And then we call the speak function to display the language used. Okay, let's run that. Run fntest.sh. And we get our menu. So let's go to Melbourne. We're going to Australia. And we kind of use English. If we go to Paris, we're going to France, and the language used is French. Let's select Hanoi.
>
> **[1:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=113)** Language is Vietnamese with a little French and English. And Asmara is in Eritrea, but we can try English. Just speak louder.

> [!info]- Semantic Content
>
> **File Paths:** fntest.sh (2)
> **Tools:** bash (2)
> **UI Navigation:** go to (2)
> **Env Vars:** ps3 (1)
> **Speakers:** - [instructor] (1)


### 4. Python Scripting

[↑ Back to Table of Contents](#table-of-contents)

#### [Refresh your Python skills](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=0)** - [Instructor] [[Python (Programming Language)|Python]] is an interpretive programming language, and the interpreter can be found for both [[Windows]] and [[Linux]] at the main Python site shown here. There are various versions of Python and scripts are not always compatible, so modifying Python scripts that you may pick up to do testing is sometimes necessary. You'll need to install Python on Windows, but it comes built into most Linux distributions. We'll use Kali to refresh ourselves on Python. One of the useful documents to have when programming in Python is the library reference, which provides details of all the built-in calls that you can make to do things in Python. As a pen tester, you'll be using the network calls extensively. There are graphical interfaces for Python, but for our purposes we'll run at the command line. Once you've got Python installed, you can check it's working by entering the command python. This will put you into the interactive interpreter. You can enter commands here and get the response immediately, or you can use Control + D to quit. Usually we'll use an editor and create a text file containing the Python script and then we can run it as a command line argument. Let's have a look at a file we've got called hello.py. All this does is print the string Hello World, and we can run that by saying python hello.py.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=95)** Python provides us with string and numeric variables, which can be integer and floating point. We can also use boolean variables. We can assign values to a variable, which takes on the type as used in the assignment. Let's use the interpreter to see how this works. Port equals 8080, and if we enter type(port), we find it's of class integer. Exploited equals true, when we type that, we find that's of class boolean. If we put user equals Malcolm, type(user) is a string. Let's now put a value of 12.43
>
> **[2:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=159)** and check that, the type of that, and we find it's a floating point. We of course have the normal mathematical and string concatenation operators, so we can say x equals 12 plus 7 and then print(x) and we get 19. We can say string one equals my name is,
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=192)** string two equals Malcolm, and then we can print string one plus string two,
>
> **[3:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=207)** and we print the concatenation. There are more complex ways of managing data in Python. The first is lists, which we can create using square brackets. Let's take a look at a list of IP addresses. Activehost equals square bracket, square bracket, which will create the empty list, and we can activehost.append 10.0.2.8,
>
> **[4:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=248)** and we can append another one .12, .14, .21. Let's now print(activehost), and we'll use square brackets to select the entry we want. In this case, entry three, which is 21. This shows the fourth entry because of course if we use the subscript zero, we'll get the first entry. A similar construct to a list is a dictionary for which we use curly brackets. This is where we can associate a value with a label. Let's create a list of hosts and host names, and we'll create hostname equals open and close curly brackets, and we have an empty dictionary. We'll then set hostname equals 173.23.1.1,
>
> **[5:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=322)** and that's going to be called [munless.com](https://munless.com).ch, and our next address will be 173.23.1.3,
>
> **[5:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=338)** and we'll call that mail.[munless.com](https://munless.com).ch.
>
> **[5:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=350)** Okay, if we now print the length of hostname,
>
> **[6:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=360)** we find we have two entries in the dictionary. And if we print the hostname square bracket "173.23.1.1,
>
> **[6:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=379)** the dictionary returns us the name associated with that key IP address. We can loop through a dictionary. Let's say for key in hostname,
>
> **[6:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=396)** and we'll print key. And we get our keys out. And similarly, we can say for key in hostname, print the hostname associated with the key.
>
> **[7:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=422)** We can add more entries to the dictionary with the update method, hostname.update, and we'll add a new entry, 173.23.1.5,
>
> **[7:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=443)** and we'll call that ftp.[munless.com](https://munless.com).ch.
>
> **[7:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=452)** Let's move on to conditionals. We can use if, else statements to conditionally execute code. So we'll set a value numb equal to 5, and we'll say if numb is less than 10, then we'll print single digit value and the conditional executes, it is less than 10, and we get the message. We can use the for statement to execute a block of code a number of times, for x in range 1, 5
>
> **[8:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=505)** print repetition plus string x.
>
> **[8:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=520)** Note that the repetition stops when the final value is reached, not after it. Note that the scope of the conditional or repetition statement extends to all indented lines following it. Python is sensitive to where you start your line of code. We've used the string function here to convert an integer into a string. Python provides many such functions to make scripting easy. Some more examples, including the set of string manipulation functions, upper, lower, replace, and find. So for example, we could say print(circus.upper()),
>
> **[9:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=565)** and we'll get the string circus printed in uppercase. I won't go into the vast array of functions that Python offers, but you can review them in the library reference documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (18), [[Windows]] (2), [[Linux]] (2)
> **CLI Commands:** python (18), find (5), make (2)
> **Versions:** 173.23.1 (4), 12.43 (1), 10.0.2 (1)
> **URLs:** [munless.com](https://munless.com) (3)
> **File Paths:** hello.py (2)
> **Tools:** command line (2)
> **Definitions:** is a  (2)
> **Warnings:** note that (2)

#### [Use the system functions](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=0)** - [Instructor] There are many system and third party functions that we can use to extend the capability of [[Python (Programming Language)|Python]]. One that we'll use frequently is the operating system functions library. Let's try it out. We'll start at Python and we'll import the library, which is called "OS". We'll then run the "uname" function from the library. We returned a set of strings associated with our operating system, name, version, and so on. Another useful library is Subprocess, through which we can run system commands within the context of our script. Let's take a look at a script which executes the "uname" command as a subprocess. Nano, and the script is called "sprog.py". We import the Subprocess library and then use it firstly to run "uname" with the "-V" switch, and this displays the results. Secondly, we run it again with the "-ORS" switches, but capture the result. And we then extract the raw standard out component, decode it, and print it. Let's run that. This returns the output from the "uname" commands. There are countless system and third party functions, which can remove a lot of complexity from our scripting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2)
> **Definitions:** is called (2)
> **File Paths:** sprog.py (1)
> **Env Vars:** ors (1)
> **Speakers:** - [instructor] (1)

#### [Use networking functions](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=0)** - [Instructor] Another module we'll want to be familiar with when we're doing pen testing is the [[Python (Programming Language)|Python]] Networking library, the socket module. To use the socket library, we need to import it, set its configuration, and then create an instance that we can use to call its functions. Let's write a Python script to use the connect and receive functions, to get a banner from our meta exploitable FTP site. and we'll call that banftp.py. We import the socket library so that we can use the socket networking features. We set the default time out to one, that's more than enough for our test network. Then we open a socket and connect to the meta exploitable server on IP address, 10.2.32 and port 21. And note the use of double brackets. We then receive up to 1,024 bytes back and print it, decoding it to normal readable text. Okay, let's run that. And we'll run Python banftp.py, and we get back our banner. Once we've found an active host during our reconnaissance, we'll want to scan it for open ports. While there are many tools for port scanning, let's write our own in Python. We'll limit our scan to TCP and try to establish a full connection to the port. And for the purposes of this demonstration, we'll just scan for those ports in the range one to 1023 on our meta exploitable server, nano portscan.py.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=100)** We'll import the CIS module in order to access the IP address with scanning, which will be a command line argument. We'll import the socket library as before and this time we'll run a full loop inside a try accept block for each port. We'll check the response to see whether we did achieve a connection and if so, print a message. Okay, let's run that. Python portscan.py 10.0.2.32. And we have ourselves a very fast port scanner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5)
> **CLI Commands:** python (5)
> **File Paths:** banftp.py (2), portscan.py (2)
> **Env Vars:** ftp (1), tcp (1), cis (1)
> **Versions:** 10.2.32 (1), 10.0.2 (1)
> **Ports:** port 21 (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Work with websites](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=0)** - [Instructor] A significant part of any pen tester's work will be website testing. While automated testing tools are readily available, there are times when we might need to do [[Manual Testing]] using scripting tools such as [[Python (Programming Language)|Python]]. Let's have a look at how we can use Python to work with websites. We can use the URL Lib Library to retrieve webpages. Let's see how we do that with a small script called use URL.py. Nano useurl.py. Here we import the URL Lib library and then send a request to open the index page on Metasploitable. And then we print the decoded page. Let's try it Python useurl.py, and here we get the [[HTML]] from that index page. Websites need to have pages uploaded, and one common way to do this is using FTP. We can use the FTP server for testing if we have its credentials. So let's use the FTP server to check for webpages, and we'll do that with a script called use FTP.py. We import the FTP library and then set the remote server address. We then log in with a set of credentials and set the working directory to the website folder, which is /var/www. We then issue a dir command to get the directory listing.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=95)** Let's run it. Python useftp.py. Okay, we've accessed the target server and listed the directory. Notes, we can see that the DAV webpage has write permission set for anyone. As an attacker, we're on the lookout for a writeable web folder or webpage that we can compromise. Let's use Python to upload a malicious [[PHP]] file that will allow us to run commands. We'll prepare two files for this. The first is the PHP file we'll upload. And we'll call that Shelly.php. And this is a single line PHP file, which executes a shell command from the URL. We'll call our Python file webinject.py nano webinject.py. We open the website FTP server and log in as we did previously, and we then switch to the vulnerable DAV web folder. We then open our malicious PHP file, and using FTP store, we write it into the vulnerable folder. We then display a message indicating we've completed our injection. Let's run this. Python webinject.py. Okay, well that worked.
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=188)** We can now use Curl to run our remote command execution shell. For example, let's list the home folders, noting we'll use the hexadecimal representation %20 as space. Curl HTTP 10.02.32, and we need to go to the DAV folder and Shelly.php and put in the command LS %20/home%20 minus L. We've successfully injected a malicious file into the Metasploitable website, and we can now issue commands and get the results back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[PHP]] (6), [[Manual Testing]] (1), [[HTML]] (1)
> **Env Vars:** ftp (7), url (4), php (4), dav (3), html (1)
> **CLI Commands:** python (7), php (6), curl (2), ls (1)
> **File Paths:** webinject.py (3), useurl.py (2), shelly.php (2), url.py (1), ftp.py (1)
> **UI Navigation:** open the (2), switch to (1), go to (1)
> **Analogies:** such as (1), for example (1)
> **Versions:** 10.02.32 (1)
> **Definitions:** is a  (1)

#### [Access SQLite databases](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=0)** - [Instructor] When doing pen testing, we'll often come across SQ light [[Databases]] on everything from browsers to mobile devices. It's useful to have a way to automate access in order to build testing tools and to do [[Manual Testing]]. We can do this relatively easily with [[Python (Programming Language)|Python]]. Let's take a look at where we'll find the database Chrome users to store cookies. We're here in a rather deep folder of our homepage called app data local [[Google]] Chrome user data default network. Let's see what it contains. We can see the file called cookies, that's what we want. I've copied this to kali, so let's take a look at it using a Python script called Squeal one. Nano Squeal1.py. Here we open the SQ Light three library and connect to our cookies database. We then execute a query using select against the master [[SQL]] light configuration to get the names of tables in the database. So let's run that. Python squeal1.py. We can see the list of tables in this database, meta and cookies. And the cookies holds the text of the cookies that have been stored. So let's look at the cookies table and see what columns it holds. And we'll do that with a script called Squeal two. As before we import the SQ light three library and connect to our cookies database.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=95)** We then execute a query to select all fields and print the field descriptions. So let's run that. Python Squeal2.py. Okay, we now know the tables in the cookies database and the column names in the cookies' table. Let's now list selected data from that table. And to do that, we'll use another Python script called Squeal three. Nano squeal3.py. Once again, we import the SQ light three library and connect to the cookies database. We then select the two fields we're interested in from the cookies table and print them with the site name first and the cookie following it with a little bit of formatting. Let's run that. Python Squeal3.py. And we get a list of the cookies that have been stored through the browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Databases]] (1), [[Manual Testing]] (1), [[Google]] (1), [[SQL]] (1)
> **CLI Commands:** python (6), find (1)
> **File Paths:** squeal1.py (2), squeal3.py (2), squeal2.py (1)
> **UI Navigation:** open the (1), select the (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Using Scapy to work with packets](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980&t=0)** - [Instructor] It's occasionally useful when testing to use raw packets to probe a target. We can do this in [[Python (Programming Language)|Python]] by invoking the Scapy library. Scapy is a Python tool, but it also comes as a library to use within our own Python scripts. It enables us to create each of the layers of a packet and within those layers to set all or any of the fields. Let's try a simple demonstration of Scapy to create a SYN flood, and we'll prepare a script called spack.pi, "nano spack.pi". Okay. Here we can see the flood routine, setting a loop across all target ports and create a TCP SYN packet with its source and destination IP addresses, and source and destination ports, and sending it to all ports on the target. Okay, let's run this script against our metasploitable server. "Sudo python spack.pi". Okay. This is sending out a lot of packets. Of course, this isn't a sophisticated flood, but it does demonstrate the ease of using Scapy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4)
> **CLI Commands:** python (4), sudo (1)
> **Env Vars:** syn (2), tcp (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Leveraging OpenAI for testing](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=0)** - [Instructor] Increasingly, we're hearing about the capabilities of AI to assist us in everything we do. While some of what is reported is hype, we can certainly use AI to assist with our [[Penetration Testing]], either using the public portals or by querying it programmatically. Let's check how we do this in [[Python (Programming Language)|Python]]. In order to follow along with this, you'll need to register an account with OpenAI and obtain an API key. There's no charge for this. To use OpenAI, we'll need to install the OpenAI Python Library. We can do that with PIP. Sudo pip3 install openai.
>
> **[0:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=48)** We'll now need to write a short Python script to call the library. We'll call it nano myai.py. We import the OpenAI library and the OS library, and we start up OpenAI by sending in our OpenAI key that we were provisioned. We then print out some general information and ask the user what they want the AI to do. We then set up a query for OpenAI, selecting the GPT-3.5 Turbo AI engine, and specifying our role as a university lecturer. We then make the request and display the response that we receive. Let's use this script to ask OpenAI a few questions. We'll start myai up by running the Python script, and let's ask our first question. Write me a port scanner in Python.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=114)** Okay, we've now got the Python script for running a port scan. Let's see if OpenAI knows its way around [[Powershell]]. Write a Powershell script that will enumerate
>
> **[2:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=136)** all SMB services on a [[Windows Server]].
>
> **[2:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=147)** Okay. It seems that OpenAI knows about PowerShell too. Let's finish with a request for information about a threat actor. Query the MITRE ATTACK site and find out
>
> **[2:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=173)** everything about about APT28. Okay, we've now got information about the threat actor, APT 28, also known as Fancy Bear, Sofacy, and so on. This is just scratching the surface of what we can do with OpenAI. Take some time to try a few questions yourself and remember that the more specific you are, the more accurate the response will be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Powershell]] (3), [[Penetration Testing]] (1), [[Windows Server]] (1)
> **CLI Commands:** python (6), pip (1), sudo (1), pip3 (1), make (1)
> **Env Vars:** api (1), pip (1), gpt (1), smb (1), mitre (1)
> **Prerequisites:** install (2), you'll need (1), set up (1)
> **Tools:** powershell (3)
> **File Paths:** myai.py (1)
> **Versions:** 3.5 (1)
> **Definitions:** known as (1)


### 5. Kali and Metasploit

[↑ Back to Table of Contents](#table-of-contents)

#### [A Kali refresher](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=0)** - [Instructor] If you haven't worked with Kali yet, you should take a look at my introduction to Kali course. For the purposes of this course, let's start by taking a look at the basic configuration updating and application menu. We'll start by looking at how we can change our Kali settings. I'll click on the computer icon at the top right and settings. We can manage our timeout settings here. Let's look at system and we can see that I've set Kali to never suspend. Under display. The screen will go blank after 10 minutes and switch off after 15 minutes. Under security. We're going to lock the screen when the system goes to sleep. You can set Kali to manage its power and displays as you like. Before I look at the tools, I'll run the update and upgrade commands to make sure Kali is up to date. I'll open the terminal window and type sudo apt update && sudo apt upgrade.
>
> **[1:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=64)** And I'll put the Kali password in, which is kali, and we'll let that run and that will do its update followed by its upgrade. Okay, we're up to date now and we can close the terminal window. Our Mac address is the [[Hardware]] address associated with our network card. However, we can override this in software. Let's look at one of the [[System Configuration]] tools included with Kali that we can use to change our Mac address. I'll select applications, sniffing & spoofing, macchanger. Kali opens a terminal and shows us the help display. I can run ifconfig to see my current settings, ifconfig. we can see the Mac address on the line starting with the [[Microsoft Word|word]] "ether." I'll now run macchanger and change my Mac address, sudo macchanger -A eth0.
>
> **[2:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=129)** I'll put our password in. Okay, we can see the Mac address shown as the current address and that I've been provided with a new one. And if I run ifconfig again, sure enough, the new one has been set. When we're testing, we'll need to be able to identify what vulnerabilities are known for a specific system, and we can do that in Kali with searchsploits, which we find under applications, exploitation tools, searchsploits. This tool connects to the exploit DB exploitation database. It's pretty simple to use. We just give it the term we want and it lists the known vulnerabilities containing that term, searchsploit smb. And we get a list of all the vulnerabilities for the smb protocol. We can limit the results with a second term, searchsploit smb [[Windows]], and the results are limited to just [[Microsoft]] vulnerabilities. There are many tools in the Kali menus and as a pen tester, you'll want to be familiar with them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[System Configuration]] (1), [[Microsoft Word|Word]] (1), [[Windows]] (1), [[Microsoft]] (1)
> **CLI Commands:** sudo (3), apt (2), make (1), find (1)
> **Tools:** terminal (3)
> **UI Navigation:** click on (1), open the (1)
> **Speakers:** - [instructor] (1)

#### [Fuzzing with Spike](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=0)** - [Instructor] Vulnserver is an excellent testing environment for understanding how malware works. We're not going to test its full functionality, but we will use it to look at a fuzzing tool called Spike that's included in Kali. I've loaded the vulnerable server shown here onto my [[Windows]] system. This server listens on port 9999. The first thing I'll do is to connect to the server using [[Netcat]], nc 10.0.2.14 9999. Okay, we get the banner, and I can enter HELP to see what commands it takes. HELP. We get a list of commands and we can use these to start fuzzing. And note in the middle there is the TRUN command. We'll use that for our fuzzing tests. To use Spike, I need to set up an action file. I'll call this command.spk, and I'll use Nano to build it, nano command.spk, and we'll start by asking Spike to read the banner for us, and we'll then send out a string, s_string("TRUN space"); and we'll follow that s_string_variable
>
> **[1:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=82)** with a COMMAND variable. Okay, I'm instructing Spike to send the string TRUN and variable command to the server. To see this in action, we'll use [[Wireshark]] to capture the packets. And we can call the Spike send tcp module by entering generic_send_tcp to 10.0.2.14 on port 9999, using the action file command.spk 0 0. And the server's responding with the welcome message for a few packets and then stops responding. We've crashed the server. Let's check the packet stream in Wireshark.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=135)** Okay, at the top we can see the SYN SYN ACK ACK three-way handshake between our Kali system on 10.0.2.15 and the vulnerable server on 10.0.2.14. We then see the 105 byte welcome message, and two messages later, we see the TRUN command, and we can see this again. Another 105 byte package, welcome to the vulnerable server, and our TRUN command. And again. But eventually, we stop getting the welcome message and the system has crashed. We know that this stream of packets crashed the server, and we can now analyze the activity to see which packet we sent just before crashing it. We'll leave the vulnerable server and Spike here, but we've barely scratched the surface of these tools. Take some time after the course to look into them further.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2), [[Windows]] (1), [[Netcat]] (1)
> **Env Vars:** trun (5), help (2), syn (2), ack (2), command (1)
> **Versions:** 10.0.2 (4)
> **Code Identifiers:** s_string (1), s_string_variable (1), generic_send_tcp (1)
> **Ports:** port 9999 (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Information gathering with Legion](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=0)** - [Instructor] Let's take a look at how we can use Kali to extract information about the services on a target system while at the same time looking for credentials to use. To do this, we can use a useful reconnaissance tool called Legion. We find this in Applications, Vulnerability Analysis. And we'll put the password kali in. And the startup's a bit messy, but we can right click on the top bar and maximize the Legion window. Let's click on the panel to add hosts and add 10.0.2.8 for our Metasploitable server, and we'll do a hard assessment. And we can submit. Legion now starts analyzing our Metasploitable server. We can see its progress in the bottom panel, and as the analysis proceeds, we can see the results in the main right panel. If we scroll down to Port 3306, we can see that the server is running [[MySQL]] 5.0.51a. We can open the MySQL tab at the top right and we can see that Legion has used [[Hydra]] to check and found valid credentials to access the [[Microsoft SQL Server|SQL server]]. Similarly, if we click on the tab for FTP on Port 21, we find that Hydra has identified valid credentials to access that service also. We can also look at the Services tab in the left pane. We start with access denied on Port 6,000, but as we move down the services,
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=94)** we can see bindshell on Port 1524, which is open and is described as the Metasploitable root shell. Let's take a quick look at the Brute tab at the top left before we leave Legion. This allows us to brute force test the services with options to select a dictionary to use for usernames and passwords. We'll go 10.0.2.8 to our Metasploitable server on Port 22.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=123)** And we'll browse for usernames, and we'll pick up unix_users.txt. And we'll browse for passwords and pick up unix_passwords.txt.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=143)** And then we can run. Okay, we'll leave Legion there for now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[Hydra]] (2), [[Microsoft SQL Server|Sql server]] (1)
> **Ports:** port 3306 (1), port 21 (1), port 6 (1), port 1524 (1), port 22 (1)
> **UI Navigation:** click on (3), scroll down (1), open the (1)
> **CLI Commands:** find (2), mysql (2)
> **Versions:** 10.0.2 (2), 5.0 (1)
> **File Paths:** unix_users.txt (1), unix_passwords.txt (1)
> **Code Identifiers:** unix_users (1), unix_passwords (1)
> **Env Vars:** sql (1), ftp (1)

#### [Using Metasploit](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=0)** - [Instructor] When pen testing, it's useful to provide evidence that vulnerabilities are in fact exploitable. To do this, we can use [[Metasploit]], which we can find in the applications, exploitation tools menu. The first time Metasploit starts up, it will create and prepare its [[Databases]], otherwise, it will skip this initialization step. After completing its startup, the [[Metasploit|MSF]] 6 prompt appears. Metasploit is now ready for use. Metasploit includes a database of testing modules, assembly and encoding capabilities to manipulate, exploit and payload code, and the interpreter, a payload which provides a powerful remote shell. We can see that it includes over 2000 exploits, has over 1000 auxiliary modules, 363 post exploitation tools and 592 payloads in its database. Exploit modules are run against a target system to check whether it's vulnerable. Auxiliary commands are generally to gather more information on the targets. Payloads are sent into a target system to demonstrate that the exploit was successful by executing on the targets. The first Metasploit command I'll enter is help. This shows all the commands that we can issue in Metasploit. This list starts with the core commands followed by the module commands, the job commands and so on. I won't go through all of these commands, but you should familiarize yourself with them. I can issue the commands, show exploits and that lists all of the exploits
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=96)** in the Metasploit database. The exploit name appears at the left of this list, and at the right is the disclosure date, the effectiveness of the exploit, and the description of what the exploit achieves. There's far too many exploits for this to be useful, but I can be more selective and use the search command. Let's look for a [[Windows]] 8 exploit. I'll enter search win8. Here we can see a couple of exploits listed for Windows 8, the 2012 internet key exchange exploit, and the 2017 Eternal blue exploit. If I search for Windows 7, we get 35 exploits and payloads listed. Let's now use Metasploit to check whether a system is vulnerable. I'm going to try and exploit on my Metasploitable system and I'll start by looking at its IRC service. Let's see what Metasploit has for us. Search irc. Okay, I can see there's a range of exploits for dos, Windows, Unix, and so on. I'll select the Unix exploit called exploit/unix/irc/unreal_ircd_3281_backdoor. To do this, I enter the command use with the exploit name. Use exploit/unix/irc/unreal_ircd_3281_backdoor.
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=192)** Okay, we're now loaded. I can check the targets this exploit works against by entering the command show targets. In this case, the exploit can determine what kind of target it has, so we can select automatic. Let's set that target type, set target 0. Let's now have a look at what payloads I can use with this exploit, show payloads. I see that I have a number of command shells I can use and a generic command execution. I'll use the info command to get more information on the reverse shell. Info cmd/unix/reverse.
>
> **[3:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=235)** Okay, so this doesn't need administrative privileges and it creates a shell on port 4444. That sounds good. So let's go select it. Set payload cmd/unix/reverse. I'll now see what options I need to set to use this combination of exploit and payload. Show options. Okay, I have to set the remote and local host addresses. The remote address set, RHOSTS is 10.0.2.8. The local host, this Carly system set LHOST is 10.0.2.18. Okay, let's run the exploit and we do that by saying exploit. Okay, we can see Metasploit is establishing the sockets and the Telnet connection, and finally confirming that a command shell has been established on the remote system. The first thing we'll do is check that this is the remote system. Ifconfig eth0. Ifconfig displays the IP address, 10.0.2.8, the remote system. Now let's check who we are on the remote system. Who am I? Okay, we're on the remote system as route. We can list processes on the remote system with the PS command, and we can list files with the LS command. Okay, I'll press Ctrl C and terminate the remote shell. I abort the session
>
> **[5:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=329)** and that concludes the short refresher on Metasploit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metasploit]] (11), [[Windows]] (4), [[Databases]] (1), [[Metasploit|Msf]] (1)
> **Env Vars:** msf (1), irc (1), rhosts (1), lhost (1)
> **Versions:** 10.0.2 (3)
> **CLI Commands:** find (1), ls (1)
> **Ports:** port 4444 (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Scan targets with GVM](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=0)** - [Instructor] It's useful to understand what vulnerabilities are present on our pen testing targets. To find these, we can use the Greenbone Vulnerability Manager, GVM. GVM installs and runs well on Kali, but we do need to give Kali additional RAM when running this tool. I'm running with four gigabytes, instead of the normal two gigabytes I use for Kali. Let's install this in Kali, sudo apt install gvm.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=31)** And we can now move straight into the GVM setup phase, which will load its [[Databases]], sudo gvm-setup.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=45)** Here we see our admin password, which we'll need, and it will be repeated at the end of setup. Loading the database information will take a while, so let's come back when it's complete. Okay, we're finished now. Let's copy our password, which we'll need to log in. Okay, we can now run gvm-start,
>
> **[1:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=74)** and we started, and we can log in, and run to admin, and paste the password and sign in. We'll now check out administration feed status, and we can see that our feeds update is in progress. We'll need to wait for these to complete before we can move on. This takes in the order of hours to complete, so we'll come back and run a scan once the feeds have been fully processed. GVM is now installed, and all the databases have been synchronized, so we can run a scan. We'll select Scans from the top ribbon, and then use the Wizard by clicking the wand. My meta exploitable system is running on 10.0.2.32, so let's scan that. The scan starts with a status of requested. After a short while, it moves into status queued, and it's getting ready to start, and it then starts running. Okay, that took a while, but it's finished running all the tests now. Let's select the link in the reports column to look at the scan results. This opens a new webpage, and if we open the Results tab, we get a list of the issues identified,
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=169)** starting with the highest severity rating. Early in the list, we can see there's an issue of multiple ruby remote code executions on port 8787, at a 99% confidence level. There's a command execution on the TWiki website through port 80. There's a possible backdoor Ingreslock on Port 1524, and in fact, there's many more issues. If we click on CVEs, we can see the relevant common vulnerability alert, which has been published for 35 of the issues that have been identified. Going back to the Results tab, let's look at the details of the possible backdoor Ingreslock. If we click on that, it expands, and we can see more details of the testing and the results, and we can see under detection result that the service answers to an ID with the response UID equals zero, which is the route user. So accessing the port shows that it's running a route user shell. Further down, the recommended solution is to do a full system clean. We won't go through the report in detail, but it's worth spending a bit of time checking out the results to become familiar with what GVM can do. Running a GVM scan provides a pretty good idea of the vulnerabilities that exist in our target systems, and points to where we might want to investigate further to find exploitable weaknesses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2)
> **Env Vars:** gvm (6), ram (1), uid (1)
> **CLI Commands:** find (2), sudo (2), apt (1), ruby (1)
> **Prerequisites:** setup (3), install (2)
> **UI Navigation:** click on (2), select the (1), open the (1)
> **Ports:** port 8787 (1), port 80 (1), port 1524 (1)
> **Versions:** 10.0.2 (1)
> **Best Practices:** recommended (1)


### 6. Web Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Approach web testing](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=0)** - [Instructor] Most applications are now delivered as web applications or as mobile apps supported by a web-based service. Consequently, web testing is a key skill for a pen tester. The cost of not testing web apps can be readily seen in the many examples of data breaches resulting from an insecure website. TalkTalk is one of many, and it made headlines. The culprit was a 17-year-old boy who used hacking tools and looted email addresses, names, and phone numbers, as well as 21,000 unique bank account numbers and sort codes. TalkTalk subsequently tested their websites, but this would've been much more effective before the hack. There are two main approaches to testing websites. The first is to crawl each page in the website looking for vulnerabilities. This can provide a good map of where to look for weaknesses. The second approach and sometimes the second stage after crawling, is to intercept the website traffic by using a proxy service between the web client and the server. In addition, manually checking web pages for comments can be useful, as these have been known to include credentials and commented notes about bugs that require fixing. Identifying client side code is also useful as this can indicate ways in which the client can subvert security. Another important check is the technologies used for the web server and the protocols used for traffic. These can be used to identify known vulnerabilities
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=95)** that may not have been patched and cryptographic weaknesses that can be attacked. Websites should use secure transport services to ensure that there's no risk of manning the middle, but many still use H-T-T-P-S and even HTTP. In addition, web sockets is a new technology which has been deployed to provide simpler communication for web apps. Understanding the strengths and weaknesses of the web architecture is useful. Another area to look at is user authentication, especially where the website includes [[E-Commerce]] functionality. The rules around credit card payments are very strict, and most sites have moved to payment gateways. However, the interface between the e-commerce webpage and the gateway is a key area to review. Another area is the validation of credentials, and in particular, the risk of injection attacks where a backend authentication server is used. If the webpage builds a query string to extract user data, it's a key focus for attackers to exploit. Password reset pages are also an area of focus as the interactions are often less well tested than the main access code. Of course, websites which have default credentials left in the system or have hard coded credentials stored are prime targets for attack. Session management is another area of weakness, and it's useful to test whether an attacker can hijack a session or access a session with an intercepted session cookie.
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=190)** Session [[Tokens]] may also be predictable, which enables an attacker to prepare for an attack when the predicted cookie becomes active. There's a lot of ways to attack a web application and a lot to look at when doing web testing. We'll introduce a few tools and techniques that you should be familiar with before you start to look at deeper testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (2), [[Tokens]] (1)
> **Definitions:** is a  (3)
> **Env Vars:** http (1)
> **Speakers:** - [instructor] (1)

#### [Test websites with Burp Suite](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=0)** - [Instructor] The [[Burp Suite]] Community Edition comes as one of the tools pre-built into Kali. I'll select applications, web application analysis, and Burp Suite from the top of the list. I won't update it. I'll select the temporary project and I'll start Burp. The free edition only allows temporary projects and a licenses required if we want to store projects on disc, which is usually required when doing a full customer website test. However, the temporary project will be fine for our course. Burp Suite creates a new project and opens the main screen. The Burp Suite menu is at the top left and offers six main items of Burp, Project, Intruder. Repeater, Window, and Help. Below these main items, we have Burp activity tabs and we're presented with the dashboard. The Target tab has three of its own tabs called Site Map, Scope and Issue Definitions. The site map shows the construction of the website and the scope is used to set targets for testing. I'll add "[http://zero.webappsecurity.com](http://zero.webappsecurity.com)"
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=71)** The issue definitions tab shows the various website issues that Burp Suite can detect, together with their severity. I'll select the Proxy tab next. We can see that intercept is on, and this will intercept anything that comes through Burp Suite and allow us to inspect it and possibly change it. I'll turn this off for the moment and we'll let traffic flow through. I'll go to the options tab and we can see that we are listening on ports 8080. I'll start Firefox, and we'll set it up for proxy operation. I'll go to the preferences. I'll go down to the bottom and select "network settings" and we'll set manual proxy configuration for proxy 127.0.0.1, on port 8080. I can now go to the Zero Bank site. "[Http://zero.webappsecurity.com](https://Http://zero.webappsecurity.com)".
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=133)** Okay, we're at the bank. I'll sign in now, using our test credentials of username and password. And it is in fact username and password.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=153)** And I'm happy to go ahead with this and accept the risk and continue. Back in Burp Suite, when we select Target, Sitemap, we can see the traffic to and from the bank which has been captured. If I click on the arrow to the left of the site URL in the site map panel, I can see the structure of the site. It can expand the lower level structures until I get to individual pages. In the right hand panel, I can click on the bank account summary message. And the request and response packets are shown in the bottom panel. By default, these are shown in raw form. I can also have Burp Suite show me the page as rendered. I'll leave any further exploration of Burp Suite for now. We'll see more of this tool as we use it to test our websites throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Burp Suite]] (9)
> **UI Navigation:** go to (3), select the (2), click on (2)
> **URLs:** [http://zero.webappsecurity.com](http://zero.webappsecurity.com) (2)
> **Ports:** port 8080 (1)
> **Env Vars:** url (1)
> **Versions:** 127.0.0 (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)

#### [Check web servers with Nikto](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/check-web-servers-with-nikto?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/check-web-servers-with-nikto?u=76281980&t=0)** - [Instructor] [[Nikto]] is a fairly simple tool for web scanning. It appears in the application menu under vulnerability analysis. Let's take a look at it. Nikto is used to identify which vulnerabilities exist in the underlying web server. Selecting Nikto presents a terminal window and shows its various options. I'll run Nikto against my metasploitable host by typing Nikto-H 10.0.2.8.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/check-web-servers-with-nikto?u=76281980&t=31)** The first thing we see is that the web server is an Apache 2.2.8 system running on [[Ubuntu]]. This is followed by three notes relating to missing hardening features and advice that the Apache server is out of date. Further down we see that Nikto has identified a number of known vulnerabilities from the open source vulnerability database, OS VDB. The final summary shows 27 items which need attention.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nikto]] (6), [[Ubuntu]] (1)
> **CLI Commands:** apache (2)
> **Versions:** 10.0.2 (1), 2.2.8 (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** vdb (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Fingerprint web servers](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=0)** - [Instructor] Fingerprinting is an important first step in testing a web application, as the environment in which it operates is as important as the application itself, in terms of potential application risk. While some servers provide banners, others have their banners removed or modified. Being able to determine the type of server from its characteristics is important when reading the banner proves futile. There are a number of tools available for fingerprinting a web server. One of them is httprecon. httprecon can be downloaded from the Computec website as a zip file containing the Window's binaries. I've downloaded it into my [[Windows]] system, into the httprecon folder. There are three OCX files that come with httprecon. These may be missing in Windows. They need to be in the SysWOW64 folder and registered. We have to be running an administrative command shell for this. I'll now run the privilege registration process for all three. Okay, that was successful.
>
> **[1:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=78)** As was that. And that. I can now start the httprecon tool. Once the messages have all been collected, it populates the set of tabs at the top of the main panel with the response messages. Okay, the analysis has finished, and we have three tabs at the bottom. The first is the match list, which provides a ranking of possible web server options with a confidence level. The result is an Apache 2.0.59 web server with 100% confidence, although the banner does indicate 2.2.8. The next is the fingerprint details, which provides a summary fingerprint. The final tab is the report preview, which provides an extensive report on the fingerprinting. The top menu items also provide for analysis and re-analysis and reporting. The fingerprinting menu also has options for opening the site in a browser, and for connecting to the Computec online fingerprint database. Net Square provides a useful tool for fingerprinting [[Web Servers]] called httprint. This can be downloaded from the site shown. It comes down as a zip archive, and the executable program is in the Win32 subdirectory. I'll run the gooey version of httprint. I need to uncheck the options for ICMP and SSL auto detect.
>
> **[2:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=178)** Let's put in the address zero.[webappsecurity.com](https://webappsecurity.com)
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=188)** and point to the test [[Banking]] website. I'll change the output file to be zero.[[HTML]]. I'll now press the play button at the bottom to check the fingerprint. This has now run and extracted the banner showing an Apache Coyote 1.1 server, and has deduced the server to be Apache 1.3 with a 61% level of confidence. Let's run it again against Metasploitable. When I run this against the Metasploitable server, it comes back quickly with the banner reported as Apache 2.2.8, which is correct, and the banner deduced as a 2.0.X, with a 57% level of confidence. Another tool we can use for fingerprinting is Uniscan, which comes with Kali. To do this, we simply point it to the web server using the minus U switch. I'll test the Hacme Casino website. It's detected the web application is running on a WEBrick Ruby server. Again, we can run against the test banking site.
>
> **[4:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=273)** And again, we see it's been detected as an Apache Coyote 1.1 server. Fingerprinting is an inexact art, but on occasions it can be useful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Banking]] (2), [[Web Servers]] (1), [[HTML]] (1)
> **Versions:** 2.2.8 (2), 1.1 (2), 2.0.59 (1), 1.3 (1), 2.0 (1)
> **CLI Commands:** apache (5), ruby (1)
> **Env Vars:** ocx (1), icmp (1), ssl (1)
> **Definitions:** is an  (3)
> **File Paths:** zero.html (1)
> **URLs:** [webappsecurity.com](https://webappsecurity.com) (1)
> **Exercise Files:** zip file (1)

#### [Web server penetration using sqlmap](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=0)** - [Instructor] Let's take a look at how we approach the initial penetration of a web server using [[SQLmap]]. To do this, I'll use a target in the [[LinkedIn]] learning pen testing lab. If you want to know more about this lab, check out my Advanced Kali course. The target we'll use is the Europa server, which is on address 10.10.10.22. I've VPNed into the lab and we'll do a deep [[Nmap]] scan with a minus A switch. Nmap -PS -F -A 10.10.10.22.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=39)** Okay, we can see we've got three ports open, SSH on port 22 and both HTTP and HTTPS web services on ports 80 and 443 respectively. And we're running an Apache 2.4.18 website. We can see the SSL certificate uses the subject name europacorp.[[HackTheBox|htb]] with alternate names of www.europacorp.htb and admin-portal.europacorp.htb.
>
> **[1:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=72)** This indicates we may be looking at a name server. Let's go visit the websites. If we go to 10.10.10.22, we can see we've got the default Apache 2 webpage. When we go to HTTPS, we have a potential security problem but we'll accept that and continue. And again, we're at the Apache 2 [[Ubuntu]] default webpage.
>
> **[1:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=111)** Let's add admin-portal.europacorp.htb to our host file and see what we get when we go to the name server, sudo nano/etc/hosts and we'll add 10.10.10.22. And that will be admin-portal.europacorp.htb
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=143)** and we'll save that. Now if we refresh our site, now if we go to the name server, [https://admin-portal.europacorp.htb](https://admin-portal.europacorp.htb),
>
> **[2:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=172)** we now see a login page. We can use SQLmap to check for any vulnerable parameters in the website and if it finds exploitable injections, we'll dump the database. To do this, we run SQLmap -u [https://admin-portal.europacorp.htb](https://admin-portal.europacorp.htb)
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=204)** and we'll tell it to look for [[Forms]] and we'll tell it to crawl to a depth of 2. And if it does find an exploitable parameter, we'll dump the database. Okay, we'll need to answer a few questions but we'll take the suggested defaults but we'll use 10 threads. SQLmap has found the login page and it's identified the database as my [[SQL]] and it thinks that email might be injectable and is also vulnerable to a cross scripting attack and we'll let it test for injections. We've let SQLmap try fuzzy tests and it's identified, there are five columns in the query and that it's union injectable. This is good news for us. SQLmap now offers to exploit the target for us using an SQL injection and it dumps out the database including password hashes and it will even offer to try cracking the password hashes for us and it succeeds. Okay, SQLmap has finished and we can see that it's identified a number of injection points. It's executed the injection attack
>
> **[4:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=297)** and successfully dumped out the database and then cracked the password hashes that it found. SQLmap has done its job and more and we've managed to exploit the target and extract administrative credentials. There are many different ways to use SQLmap and it's worth spending some time getting used to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQLmap]] (9), [[HackTheBox|Htb]] (7), [[Nmap]] (2), [[SQL]] (2), [[LinkedIn]] (1)
> **Env Vars:** https (2), sql (2), ssh (1), http (1), ssl (1)
> **CLI Commands:** apache (3), ssh (1), sudo (1), find (1)
> **Versions:** 10.10.10 (4), 2.4.18 (1)
> **UI Navigation:** go to (3)
> **URLs:** [https://admin-portal.europacorp.htb](https://admin-portal.europacorp.htb) (2)
> **Ports:** port 22 (1)
> **Speakers:** - [instructor] (1)


### 7. Understand Exploit Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploit a target](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=0)** - [Instructor] We earlier covered the cyber kill chain and discussed the seven stages of a cyber attack. Let's take a look in more detail at the delivery and exploitation phases. These are the phases in which a pen tester spends most of their time. At the delivery phase, the objective is to find a way to deliver a payload to a target. There are four common ways to do that. The first is to send someone the payload as an attachment to an email and have them execute it. This could be a malicious executable file, or more usually a document with malicious code installed in it. Regardless, the delivery mechanism is the same. Another way of delivering a malware payload to a target is to have the target come and get it by sending them an email containing a hyperlink to a malicious website. This may be a website which when the user visits it can automatically drop the malware into their system. It may be a site which contains trojanized software containing malicious code hidden inside the legitimate code. Another way to deliver a payload is to connect to an exposed port and send the malware through the port, or gain access through the port and copy the malware directly in. Quite often, this will be achieved by sending a packet which contains an initial exploitation warhead, followed by the payload, which can be carried through in the packet. Finally, the malware can be stored on removable media, such as a USB flash drive, in such a way that when it's inserted into the target computer,
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=94)** it automatically runs. Once the malware has been delivered, there may be an exploitation phase in which a vulnerability on the target system is exploited to enable the malicious payload to gain access to the system. In the case of a malicious attachment, the exploitation is a human one, getting someone to run the malware without knowing that it's malicious, or even that any code is running. It may be an executable attachment, or it may be a document which when opened exploits a vulnerability in the application software, or just simply runs an embedded malicious macro. We continue to see this technique used with [[Microsoft Word|Word]] documents, PDF files, Flash movies, and spreadsheets in particular. The one thing these techniques have in common is that the user is unaware that code is executing. The next approach is when the delivery was that of a [[Phishing]] email containing a hyperlink to a malicious site. The malicious site will be looking to take advantage of a vulnerability in the browser, which it can exploit to run what is known as a dropper. The purpose of this is to drop the payload onto the target computer. The unauthorized use of credentials is a technique used when a password file has been extracted and cracked, revealing a large number of account user ID password credentials. It may also be the result of having intercepted traffic and found credentials in the clear, for instance, in a Telnet session. The fourth exploitation technique is used
>
> **[3:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=187)** when there's a vulnerability in a service exposed to the attacker. In this case, the attacker can exploit the vulnerability with an initial malware module, which opens the door into the system. This is often a technically challenging approach, but potentially a lucrative one, because it may leave no evidence of attack, not even a login record. Let's have a look at some examples of attacks and analyze their delivery and exploitation techniques. The first attack we'll look at is the high profile ransomware WannaCry, or WannaCrypt as it's sometimes known. The WannaCry campaign delivery mechanism was emails containing an infected ZIP file, which when opened drops the malware into the computer and executes it. Here, we see the current tracking of WannaCry. Half a million, or so currently infected systems tracked. If we scroll down a bit, we can see there's not much new infection, but lots of existing systems which continue to run as infected hosts. This indicates a small number of systems are unpatched and still being infected, but most of the campaign has dried up. WannaCry is a highly virulent piece of malware, not only having a vicious payload, but also being able to automatically reach out and exploit other systems in the local network, or even across the internet. So as soon as a few WannaCry targets were hit, they became attack launching pads for propagation to the next layers of targets. One of the reasons WannaCry was able to do this was
>
> **[4:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=280)** through its use of a piece of malware developed by the US National Security Agency called EternalBlue, which used an exploitation technique not known in the public domain, a zero-day. This was a flaw in the Session Management Block, or SMB software used on [[Windows]] systems to manage file sharing and printing. Analysis has concluded that the initial infection was through an exposed SMB port. By allowing its technique to become exposed, the NSA allowed the world's cyber criminals to develop a military grade attack. This malware demonstrated delivery through an exposed service and exploitation through the EternalBlue SMB vulnerability. The next example we'll look at is the Stuxnet attack on the Iranian uranium enrichment facility. This was notable in that the target was on an isolated network, not connected to the internet. Stuxnet was a very sophisticated attack, reportedly developed and launched by Israel and the United States, and it was executed in two phases. The first phase was a network scan to determine exactly what software was running on the isolated network and to map out the topology of the network itself. This then enabled a second attack to be launched, which targeted the centrifuges used to enrich the uranium. The original reporting indicated that the attack was able to get onto the isolated network by use of a USB drive and that the USB drive may have been taken in
>
> **[6:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=373)** by an agent working in the facility. Later analysis indicated the attack was a remote breach of a supplier computer and insertion of the malware onto the supplier computer from where it jumped onto a USB stick. Stuxnet propagated itself around the network using a [[Microsoft]] Print Spooler flaw and three other zero-day vulnerabilities to ensure the maximum opportunity to spread. Once it found the Siemens equipment, which controlled the centrifuges, its injected malicious code into its memory. This attack demonstrates multiple delivery and exploitation vectors, including a Microsoft Print Spooler zero-day. Another high-profile case was that of Saudi Aramco, which was the largest attack seen this decade with over 30,000 workstations being taken down. The delivery mechanism was traced back to a single employee clicking on a malicious website. The website was able to exploit the browser and drop a backdoor payload onto his computer. This then allowed the attackers to gain a foothold on the Saudi Aramco network and begin their attack. The first sign of trouble was when files began to disappear and systems crash. The Saudi Aramco network was disconnected from the internet, and then when the virus continued to spread, the workstations were disconnected from the local networks. Subsequent analysis found that the attack was due to the Shamoon virus. The delivery mechanism was a malicious website,
>
> **[7:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=466)** and the exploit was a browser vulnerability. The final example we'll look at is the Sony PlayStation hack. This was an external penetration into the PlayStation Network servers, which resulted in the global Sony PlayStation Network being taken down. The result of this intrusion was the exposure of 77 million credit cards, one of the biggest recorded data breaches. This was, again, due to a flaw in the SMB software, this time on [[Red Hat Linux]] Apache servers, and that was able to be exploited. The delivery mechanism was an exposed vulnerable service, which exploited an SMB flaw.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Microsoft Word|Word]] (1), [[Phishing]] (1), [[Windows]] (1), [[Red Hat Linux]] (1)
> **Env Vars:** smb (5), usb (4), pdf (1), zip (1), nsa (1)
> **Definitions:** is a  (3), known as (1)
> **CLI Commands:** find (1), apache (1)
> **Analogies:** such as (1), for instance (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** zip file (1)
> **Speakers:** - [instructor] (1)

#### [Finding caves for code injection](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=0)** - [Instructor] The aim of many cyber attacks is to run malware on a target system. One way of doing this is to provide the malware in the form of a Trojan program. This is a piece of software which looks legitimate but isn't, or is a legitimate software product, which has been modified by inserting a piece of malicious code. This is possible because an executable program has a well-defined structure of multiple segments, and an attacker can modify these to suit their own purposes. [[Windows]] programs are not simply instructions, they have a complex structure known as the portable, executable, or PE format, one or more parts of which are executable code. Let's examine the structure of a Windows executable file. The PE file has a collection of fields at a known location that define what the [[Representational State Transfer (REST)|rest]] of the file looks like. An important part of the structure is the PE Header, which contains information such as the locations and sizes of the code and data areas, what operating system the file is intended for, and the initial stack size. It also contains a table of all the sections which make up the remainder of the executable file. These are either code sections or data sections. The PE Header isn't at the very beginning of the file, the first few hundred bytes of a PE file or the MS-DOS stub, a small piece of code that validates the program can run printing out an error message if it can't.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=95)** The PE Header is found by looking up its starting offset, which is stored in the MS-DOS stub header. Let's have a quick look at the hex dump of an executable. I'm using the HXD Hex editor for this, but you can use any hex decimal editor to view the raw executable. The file starts with the two signature characters, MZ, and we can see the message, "This program must be run under WIN 32," which is displayed if the program is run in another environment. We can also see the two characters PE at HEXA decimal 0 times 100 which if we look along to the left of the same line, we can see how the hex decimal digits 5045, followed by two 0 bytes. The next two bytes are 4C 01, and then we have two bytes which represent a double [[Microsoft Word|word]] value for the number of sections. We can see the bytes are 0 B 0 0, which in binary is 0 0 0 B, meaning there's 11 sections. Fortunately, we don't have to do all the work ourselves. The team at Winitor has developed a free portable executable viewing tool called PE Studio, and this does all the hard work of analyzing the PE file. I've got the packeteer executable open in PE studio. I've selected the DOS header to display the header of the MS-DOS stub. An important value in the header is the file header offset, which is set to 0 times 100. This is the value which points to the location
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=188)** of the PE Header. Following this, if we click the file header, we see the PE Header starting at the signature field, which has as expected a value of PE00. Following this, we can see the file has an optional header, which when we click it shows the configuration settings for the executable. There's a couple of items we want to remember from here, the section alignment, which is shown as 1000 and further down the image base, which is shown as 400,000. If we click on directories, we see the 15 possible sections in a PE file, of which this file has seven. We can click on sections to see the seven sections plus two text sections. We can see the raw address. This is the file offset and the virtual address. This is where the section will be loaded in memory. We can see the runtime function, imports and exports. Another interesting part of the EXE is its manifest. When we click on this, we see an XML configuration file displayed. Okay, so we now know the overall structure of the PE file. Let's now think about how we add code into it. There are two ways we can inject malicious code into a PE executable: by adding a complete new section and inserting the code into that,
>
> **[4:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=281)** or by injecting the code into a code cave, an area in the executable, which is not used. We can use a tool called Cminer to show what code caves are available in an executable. We can download Cminer from the [[GitHub]] site using wget. Okay, we've got the executable. We can now set it for execution by using chmod. Chmod +x Cminer Let's have a look at some standard windows executables, which you might want to inject code into. The first we'll look at is Notepad, and we'll look for all caves by saying Cminer notepad.exe which I've copied onto my kali system. And we see that we have six caves ranging in size from 3, 4, 5 to 511 bytes. These are all data sections. The text section doesn't have a cave. Another executable we'll look at is putty. the client commonly used for connecting to remote SSH services. And again, I've copied that into my kali system, so we can run Cminer against putty. Again, we have six caves and a number are much bigger than we saw in Notepad. All these caves are in the data sections, and we'll come back to this issue shortly.
>
> **[6:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=376)** However, there's another issue to think about. System defenses will often use a form of sandboxing to check whether malware is detected when an executable starts. If we execute injected code as soon as the program initializes, it's likely to be detected by anti-malware code. Consequently, Trojans will often trigger their injected code, not at program startup, but at some identifiable user interaction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Word|Word]] (1), [[GitHub]] (1)
> **Env Vars:** dos (4), hxd (1), win (1), hexa (1), pe00 (1)
> **CLI Commands:** chmod (2), make (1), wget (1), ssh (1)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (2), known as (1)
> **Tools:** github (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Understand code injection](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=0)** - [Instructor] I'll use PuTTY to demonstrate how code injection works. I've got it loaded on my VirtualBox [[Windows 10]] system. First of all, I'll connect to my Metasploitable server on 10.2.0.8 with PuTTY. We get a prompt which says "Login as:" We'll use this as the point to use in our strategy for a delayed jump to the injected code. Okay, we don't need to log in, so let's close this. We now need to use a debugger to step through the executable code. My preference is the x32dbg tool, which I've got loaded. We'll use it to inject code into the cave in the PuTTY executable, and then run the modified code so that we can see the injection working. I'll load the executable and I'll select the Memory Map tab. I'll select the text segment and Follow in Disassembler. This shows me the code section. I need to find the point in the code at which the login as prompt is displayed. I can do this by right-clicking, Search for, Current Module, String references. And enter login as. Okay, we can see two references. I'll try the reference at 41CB6E. Let's go there. Let's take a note of the current instruction. Push 467C7C. And then we'll change this to a jump.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=95)** I can double-click the current instruction and enter a new instruction. Jump 0x47A495. That's a point just inside the cave. I'll also take a note of the address of the next instruction, 41CB73. We'll come back to this after executing the injector code. The cave is in the rdata section, so we'll need to load that into the disassembly area using the Memory Map.
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=133)** Okay, we can scroll down to our cave, and see the section of null bytes, which we'll use to inject the code. For the purposes of demonstration, I'll just add a couple of no-op instructions. That's a single bite, 90 hexadecimal. And then I'll return back to where we jumped from. To do this, I'll double-click on the disassembled instruction at the address we jumped to, 47A495. And I'll enter two no-op instructions for the injected code and then insert the instruction we overwrote and jump back.
>
> **[2:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=179)** I'll set a breakpoint on the first no-op so that we can see the execution when it arrives here. Let's press the play icon and set it going. We have to, again, select play. And when we check the taskbar, we can see we have the PuTTY interface. I'll enter the address for Metasploitable, 10.0.2.8.
>
> **[3:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=205)** And connect. And we see we've jumped into the injected code. We can continue by pressing the play button again. And we now have the login prompt. So we've proved the injected code. x32dbg does provide an option to save the changes into a patch file and also to rewrite a patch version of the file, but this may encounter problems saving into data sections. If it does, you can take a note of the binary changes and apply them using a hex editor. I've taken a note of the changes we made, and I'll manually insert them into PuTTY using hex edit. I can search for the hex string, 687C7C46, and we know it was the second one that we want to change. Okay, I have that at 1BD6E. Let's override that with the string E922D905.
>
> **[4:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=269)** I also need to go and add the injection by matching the last few bytes of the rdata section prior to our injection. I've identified the injection should be at location 79695. Let's add the injection.
>
> **[4:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=298)** I've edited the executable, and I can save this into a new file called mutty.
>
> **[5:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=311)** In addition to applying the changes when creating an executable for testing purposes, we need to make sure the section we've modified with injected code is set as executable and we need to recreate the checksum. We can do this by using the PE editor in the LordPE tool. I've got this tool loaded on my system, so let's get into it. To run the PE editor, we first start LordPE, and then select PE Editor, and select the mutty executable. And the PE contents appear. Let's firstly look at the sections. Okay, we have the four sections, and I'll highlight the rdata section that we changed. When I press right-click, we see a context menu. I can select edit section header, and the section header pops up. Now I can press the dotted button by the flags and click Executable as code, and then OK. Okay, I can leave the sections now. At the main PE screen, I'll press the question mark by the checksum, and the PE editor will create the new checksum. That's it. We can now save the changed executable. When we execute the program, it will run with no warnings and execute the injected code we've inserted as soon as we get to the point of logging into a site. Using modified executables mimics the activities
>
> **[6:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=406)** of an attacker, so it's a legitimate course of action for a deep penetration tester. And with the right injection code, it can be a lucrative means of harvesting credentials and demonstrating vulnerabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (1)
> **UI Navigation:** select the (3), double-click (2), scroll down (1), right-click (1)
> **CLI Commands:** find (1), make (1)
> **Versions:** 10.2.0 (1), 10.0.2 (1)
> **Env Vars:** e922d905 (1)
> **Speakers:** - [instructor] (1)

#### [Understand command injection](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=0)** - [Instructor] CV-24576 published in April 2024, identified that the [[Rust (Programming Language)|Rust]] Standard Library prior to version 1.77.2 didn't properly escape arguments when invoking batch files on [[Windows]]. An attacker who is able to control the arguments which are passed to the spawn process that runs the batch file could execute arbitrary shell commands. It turns out that any language which calls the function to run a batch file is susceptible, including [[Python (Programming Language)|Python]]. This issue, as with other injection attacks, depends upon sending additional data into a target at the end of the expected input. The input string is crafted to escape the legitimate processing and cause the target to process the additional data. In the case of command injection, the goal is to run additional commands. Let's write a simple Python program to read input and send it to a batch file, which will display it. In the Python script, we read an input message. We then send bad.bat as the name of the batch file and our input as an argument, and run the batch file as a sub-process. We then print the response from the batch file. For the purposes of this demonstration, we'll create a simple batch file, which just displays the input sent to it. Now all we need to do is run our program and send it a command injection string, python badbat.py
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=96)** and the message we'll send to display is "Hello World." But we'll escape that and add calc. We get our message returned as we'd expect. And we also get the Windows calculator popping up as we've managed to inject a command to execute it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Windows]] (2), [[Rust (Programming Language)|Rust]] (1)
> **CLI Commands:** python (4)
> **Versions:** version 1 (1), 77.2 (1)
> **File Paths:** badbat.py (1)
> **Speakers:** - [instructor] (1)

#### [Understand buffer overflows](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=0)** - [Person] There are a number of ways to achieve remote code execution on a server, and one of the ways is to trigger what's known as a buffer overflow. We can do this by sending a malicious exploit packet to an open service that has a buffer overflow vulnerability. This then results in the target executing code from our packet. We can see how this works by running a vulnerable program through a debugger. Let's do this with MASM so that we can see the instructions clearly. I've written a small MASM program, which uses the [[Windows]] GUI, called "buffalo.asm." This simulates just a fragment of an application. Take a look at the lines just below the ".data" declaration. There's a data field called "Packet." This is simulating a packet that we've received from an input request for the user's name. I've put my name there. Let's just ignore the commented-out fields for the moment. Further down, we can see the hello message, which expects to have a name inserted. Let's look at the lines just below the ".code" declaration. We can see what the program is doing in the first few lines. It pushes the address of the hello message onto the stack, then pushes the address of the name packet onto the stack, and then, calls the routine "sco" to do a string copy. Following that, it displays a message box. Let's see what happens when we run it. I'll select "Project," "Assemble & Link." This assembles and links.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=92)** We can see the OBJ and EXE files here. And we can then run it. There we go, a Windows message box with our welcome message. Now, let's change the code to comment out my name, and un-comment the packet, exploit, and payload fields. This now simulates a malicious packet, with its three components being sent in as input. Let's save this, assemble and link it, and run it. Now, we get a malicious message. We've been buffer overflowed. To see what has happened, we need to run the program through a debugger. Before we do that, let's take a look at what the "sco" routine is doing. Let's start at the line below the label "sco proc." After entering the routine, we save the stack pointer into the EBP register, then load the first parameter, the address of the data packet, from the stack into EBX for later use. The routine then reserves 32 bytes of local storage for the name, using the "sub sp" command, and then copies the stack pointer into the two registers, EDX and ECX. One we'll use immediately, and one later. The routine then enters a loop, which reads a character from the packet
>
> **[3:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=184)** and stores it into local storage. It does this by moving a byte from the input pointed to by EBX into the lower byte of EAX, and then saving that byte into the 32-byte area reserved stack, where EDX is pointing. The address pointers are then both incremented. This continues until the last character read from the input package is zero, that's the string delimiter. The routine then goes to the next loop, where it inserts the string into the end of the welcome message, starting where it says, "Name here." The EDI register points to the location where the name is to be inserted, and now, ECX is used to read the name from the 32-byte stack area, byte by byte, and copy it to the welcome message, again terminating at the zero byte. Finally, the routine releases the 32 bytes of local storage, and returns with a RET 8 to release the two double-words, eight-byte addresses that were placed on the stack prior to entry. Okay, let's see this run step by step in the debugger. The first thing we'll do is look at the memory map. We can see that the executable part of "buffalo," the ".text" section, starts at 401000. I'll double-click that, and we'll see the code displayed. We can see at the right the "hello, name here" message, and the malicious packet filled with the ASCII character A. I'll set a break point at the first line,
>
> **[4:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=278)** and I'll press the play button to run through to our code. Okay, we've run the PE program initialization, and we're now at the start of our code. Before we start running the code, I'll go back to the memory map. I'll double-click the ".data" section. We can now see our data fields shown in dump one at the bottom left of the screen. Let's use F7 to step through, and push the two addresses onto the stack, and call the "sco" subroutine. As we step through the first few instructions of the subroutine, we can see the stack points are being stored into EBP, and the address of the data packet being stored into EBX. Next, 20 hexadecimal is subtracted from the stack pointer to reserve 32 bytes for the name to be copied in. Then the address of this 32-byte area is stored into the EDX and ECX registers. Now we're at the address 401036, and this is the start of the loop. We can see the jump back to 401036 a few lines down. We'll go through the loop, copying the name into the stack. Note at the bottom-right panel that the stack pointer ESP is currently pointing to 19FF58, and the return address to get back to the calling code is 20 hexadecimal further on at 19FF78. Watch the contents of the stack at the bottom right as we step through the loop, copying the name, in this case, the malicious packet data, onto the stack.
>
> **[6:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=374)** We see the zero, hexadecimal 30, and then, As, hexadecimal 41, being copied into the stack. This continues for all 32 bytes from the packet. The EDX register is now pointing to address 19FF78, where the return address 40100F is stored on the stack. However, as we keep stepping through, the routine overwrites the return address with more data from the packet, the four bytes we labeled "exploit," which is the address of the start of the payload code stored in the packet. The return address is now 403024, and we finished copying the packet onto to the stack. Okay, let's step through the next section of code where we write this from the local area into the message. That all copies over, and down in the dump area at the bottom left, we now have a message which says, "Hello, 0AAA..." And so on. Let's watch carefully as the routine finishes and returns. The routine releases the local reserved space by adding hexadecimal 20 to the stack pointer. The stack pointer is now pointing at where the original return address was, which has been overwritten with the address that was in the exploit field. When we F7 to return, the instruction pointer now points to the code in the packet payload at 403024. The buffer overflow has been activated, and we're now running payload code.
>
> **[7:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=468)** Let's step through the payload. We push zero, the addresses of two fields in our packet, and then, zero again, the standard preparation for a message box request, and then, push onto the stack the address of the message box call in our program. When we return, we display the message box, which now displays the malicious message. We've crafted a malicious packet, which takes advantage of the fact that the "buffalo" program doesn't check how many characters are copied in, despite having only reserved 32 bytes. Unfortunately, this isn't that uncommon in software. The packet we've simulated is a three-stage packet of padding, malicious address, and payload. We've achieved a buffer overflow, and executed code from our packet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2)
> **Env Vars:** edx (4), ebx (3), ecx (3), masm (2), ebp (2)
> **UI Navigation:** double-click (2)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** initialization (1), before we start (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [person] (1)

#### [Password spraying Active Directory](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980&t=0)** - [Instructor] A common way to retrieve credentials from [[Active Directory]] is to spray all accessible accounts with a guessed or known password or a list of passwords. There's a number of tools we can use to do this. Let's have a look at the DomainPasswordSpray [[Powershell]] script from dafthack. I've downloaded the DomainPasswordSpray script from the [[GitHub]] site onto my domain workstation, and I'm logged in as the domain user, Sam Spade. I can now import the script and run it in PowerShell. Import Module DomainPasswordSpray.ps1. We can run the password spray with just a single password that we've guessed or with a file of passwords. For this demonstration, we'll just use a single password. Invoke Domain PasswordSpray -Password, and we'll guess the password for the accounts might be kittykat. We're getting a few warnings, but we can ignore them for the purposes of the demonstration. And we run the spray and we find that user achtar is using kittykat as the account password. Given that we'd expect around 30% of an enterprise's passwords to be weak,
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980&t=93)** a password spray with a good password file can be a very effective attack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (2), [[Active Directory]] (1), [[GitHub]] (1)
> **Tools:** powershell (2), github (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Find exploit code](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=0)** - [Narrator] In the early days of cyber testing, testers had to first discover a vulnerability through vulnerability research and then write an exploit for it. This typically required a high level of debugger and MASM skills and took weeks of effort. Nowadays, there are many researchers looking for and publishing the details of vulnerabilities and providing detailed analysis of malware that's been found. These appear on many researchers' [[GitHub]] sites, and also on vulnerability advisory sites. The Malware Archeology site provides links to reports from a number of malware research centers. There are a number of cyber research companies that provide technical research reports. Some provide them for public access while others provide them as a paid threat intelligence service. For example, Malwarebytes Labs shown here is a source of free technical reports. Even with a technical report, it takes a while to develop a working exploit. A source of ready-made exploits for testing is the Offensive Security Exploit Database. Here we have the full set of exploits on [exploit-db.com](https://exploit-db.com). Let's select the filters button and search for the type remote, and we get a list of remote exploits that are in the database. The screen shows the date, title, platform, and author of the exploit module, and there's three flags, D, A, and V. D provides download of the exploit code. A provides download of the vulnerable application
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=95)** and V indicates that the code has been verified. At the bottom of the first page of remote exploits, we can see the Remote Desktop Web Access attack. If we click on this, we can see that it's a [[Python (Programming Language)|Python]] exploit that's used with the [[Metasploit]] testing tool. Legal Hackers is another website which provides details of vulnerabilities, although there's been few updates recently. The site does include proof of concept exploit code, however. For example, if we select the [[Git]]-LFS 2020 vulnerability, and we scroll down, we can see the proof of concept command sequence. Just a note of caution when downloading exploit code from individuals. Firstly, there could be malicious code included in the exploit, so just double-check the source is legitimate. Some of these exploits work as written, but some authors will include deliberate mistakes in their exploits as a somewhat annoying way of making sure you can correct their mistakes before you get to use the code, and some just make mistakes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[Exploit-DB]] (1), [[Python (Programming Language)|Python]] (1), [[Metasploit]] (1), [[Git]] (1)
> **UI Navigation:** select the (2), click on (1), scroll down (1)
> **CLI Commands:** python (1), git (1), make (1)
> **Env Vars:** masm (1), lfs (1)
> **Analogies:** for example (2)
> **URLs:** [exploit-db.com](https://exploit-db.com) (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-s-next?u=76281980&t=0)** - [Instructor] I'd really like to thank you for joining me for this course. I hope you enjoyed your introduction to the tools and techniques you'll use as a pentester. Taking this course is just the start of your learning path, which leads to becoming a professional pentester. Having understood the concepts and learnt about how to use some of the basic testing tools, you can now start to gain experience by using them. You can also follow the learning path with more advanced courses in the pentesting series to develop your skills with a deeper understanding of the techniques. There's always something new in [[Cybersecurity]], and if you're interested in learning more, then check out the full security segment of the library where new security courses are added regularly. You'll find courses on using [[Kali Linux]], information gathering, viruses and worms, social engineering, denial of service, wireless testing, and much more. I'd like to invite you to go to my [[LinkedIn]] Learning author page where you can find some additional courses on cybersecurity. If you want to get hands-on with some of the common tools, then do take a look at Practical Cybersecurity and the Introduction to Kali Linux. If you want to know how to test mobile devices, then check out the mobile devices course, and if you'd like to learn about security for the AWS Cloud, then pentesting AWS with [[Python (Programming Language)|Python]] is for you. Thanks again for joining me on this course, and I hope to see you again soon for more courses on pentesting and cybersecurity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (4), [[Kali Linux]] (2), [[LinkedIn]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (2), aws (2), python (1)
> **Env Vars:** aws (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Malcolm Shore]]

## Resources

- Exercise files available

## Skills Covered

- Penetration Testing
- Kali Linux

## Path Context

### In [[Explore a Career in Application Security]]
← [[Cybersecurity Foundations Application Security]] | **2 of 7** | [[Learning the OWASP Top 10]] →

### In [[Become a Penetration Tester]]
← [[Introduction to Pen Testing for Cybersecurity Professionals]] | **3 of 8** | [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] →

## Appears In

- [[Explore a Career in Application Security]]
- [[Become a Penetration Tester]]

## Related Courses

_Courses sharing skills:_

- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Penetration Testing, Kali Linux
- [[Penetration Testing Essential Training]] — Penetration Testing
- [[Stealth Penetration Testing with Advanced Enumeration]] — Penetration Testing
- [[Burp Suite Essential Training]] — Penetration Testing
- [[Advanced Pen Testing Techniques for Active Directory]] — Penetration Testing

---

[↑ Back to top](#)