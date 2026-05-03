---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ethical-hacking-system-hacking-24451006
url: "https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006"
duration_minutes: 133
duration: 2h 13m
level: Intermediate
updated: 7/18/2024
learners: 7556
skills:
  - Penetration Testing
  - Ethical Hacking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFXmRdshskKrg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1720805002932?e=2147483647&amp;v=beta&amp;t=cJ6ezlLOHeDl9lg5s3SFQZfZi6DO3Ic90nmcTRw8m-o"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an Ethical Hacker]]'
prev_courses:
  - '[[Ethical Hacking- Vulnerability Analysis]]'
next_courses:
  - '[[Ethical Hacking- The Complete Malware Analysis Process]]'
path_nav: '[{"path":"Become an Ethical Hacker","position":6,"total":19,"prev":"Ethical Hacking- Vulnerability Analysis","next":"Ethical Hacking- The Complete Malware Analysis Process"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/penetration-testing
  - skill/ethical-hacking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20System%20Hacking.md)

![Ethical Hacking: System Hacking](https://media.licdn.com/dms/image/v2/D4E0DAQFXmRdshskKrg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1720805002932?e=2147483647&amp;v=beta&amp;t=cJ6ezlLOHeDl9lg5s3SFQZfZi6DO3Ic90nmcTRw8m-o)

# Ethical Hacking: System Hacking

> Ethical hacking involves testing to see if an organization's network is vulnerable to outside attacks. It's one of the most desired skills in an IT security professional. In this course, security ambassador Lisa Bock guides you through the System Hacking competency from the CEH Body of Knowledge. Find out how hackers are able to hack into a system and gain access. Learn about privilege escalation,

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006) | 2h 13m | Intermediate | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Hacking the system](#hacking-the-system)
  - [Getting the most out of this course](#getting-the-most-out-of-this-course)
  - [Hacking ethically](#hacking-ethically)
- [**1. Understanding System Hacking**](#1-understanding-system-hacking) (5 videos)
  - [Setting the stage](#setting-the-stage)
  - [Getting a foothold](#getting-a-foothold)
  - [Authenticating a user](#authenticating-a-user)
  - [Challenge: Reviewing Entra ID authentication methods](#challenge-reviewing-entra-id-authentication-methods)
  - [Solution: Reviewing Entra ID authentication methods](#solution-reviewing-entra-id-authentication-methods)
- [**2. Gaining Access**](#2-gaining-access) (5 videos)
  - [Acquiring passwords](#acquiring-passwords)
  - [Discovering password tools](#discovering-password-tools)
  - [Cracking passwords](#cracking-passwords)
  - [Employing rainbow tables](#employing-rainbow-tables)
  - [Defending against password attacks](#defending-against-password-attacks)
- [**3. Exploiting Vulnerabilities**](#3-exploiting-vulnerabilities) (3 videos)
  - [Leveraging security flaws](#leveraging-security-flaws)
  - [Overflowing the buffer](#overflowing-the-buffer)
  - [Enhancing software security](#enhancing-software-security)
- [**4. Escalating Privileges**](#4-escalating-privileges) (3 videos)
  - [Understanding privilege escalation](#understanding-privilege-escalation)
  - [Obtaining administrator privileges](#obtaining-administrator-privileges)
  - [Defending against privilege escalation](#defending-against-privilege-escalation)
- [**5. Maintaining Access**](#5-maintaining-access) (4 videos)
  - [Dissecting rootkits](#dissecting-rootkits)
  - [User Mode and Kernel Mode](#user-mode-and-kernel-mode)
  - [Using rootkits](#using-rootkits)
  - [Detect, remove, and avoid rootkits](#detect-remove-and-avoid-rootkits)
- [**6. Grasping Keyloggers**](#6-grasping-keyloggers) (2 videos)
  - [Outlining keystroke loggers](#outlining-keystroke-loggers)
  - [Protecting against keylogging](#protecting-against-keylogging)
- [**7. Recognizing Spyware**](#7-recognizing-spyware) (3 videos)
  - [Explaining spyware behavior](#explaining-spyware-behavior)
  - [Mobile spyware and invasive apps](#mobile-spyware-and-invasive-apps)
  - [Defending against spyware](#defending-against-spyware)
- [**8. Hiding in Plain Sight**](#8-hiding-in-plain-sight) (4 videos)
  - [Using steganography](#using-steganography)
  - [Swimming in the NTFS data stream](#swimming-in-the-ntfs-data-stream)
  - [Using whitespace steganography](#using-whitespace-steganography)
  - [Detecting steganography](#detecting-steganography)
- [**9. Maintaining Persistence**](#9-maintaining-persistence) (3 videos)
  - [Remaining in the system](#remaining-in-the-system)
  - [Staying under the radar](#staying-under-the-radar)
  - [Defend against persistence attacks](#defend-against-persistence-attacks)
- [**10. Covering Tracks**](#10-covering-tracks) (3 videos)
  - [Disabling logging and hiding files](#disabling-logging-and-hiding-files)
  - [Outlining ways to cover your tracks](#outlining-ways-to-cover-your-tracks)
  - [Summarize the course and what's next](#summarize-the-course-and-whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Hacking the system](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/hacking-the-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/hacking-the-system?u=76281980&t=0)** - [Lisa] Have you ever wondered how easily a malicious actor could access your system, and then once inside, what secrets will they find? In this course, we'll explore system hacking and learn how malicious parties can get deeper into a system and what powers they'll have. I'll go over methods to obtain a password. Then once acquired, ways to escalate your privileges and execute applications. I'll cover spyware capturing screen activity and keystroke loggers. I'll review ways to hide in plain sight using alternate data streams and steganography along with ways to cover your tracks. Hello, my name is Lisa Bock, and I'm a security ambassador. Are you ready? Then let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [lisa] (1)

#### [Getting the most out of this course](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/getting-the-most-out-of-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/getting-the-most-out-of-this-course?u=76281980&t=0)** - [Instructor] This is an intermediate level course for network administrators, teachers, students, and anyone interested in learning more about system hacking during an [[Ethical Hacking]] exercise. I cover a lot of information, but I have provided a file for you so that you can follow along. Go to the Overview tab, and on the right you'll see related to this course. By the exercise file, select the show all link, where you will find a challenge and links document. Within the document, I've included links to all the resources that I reference in the course. Additionally, during each segment, I'll identify a challenge using the following icon along with a question from the video. Use the document to write out responses to challenges that I cover throughout the course. I am super excited to bring you this course. So sharpen your pencil and let's start learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1)
> **UI Navigation:** go to (1), select the (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Hacking ethically](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/hacking-ethically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/hacking-ethically?u=76281980&t=0)** - [Instructor] The goal of the [[Ethical Hacking]] series is to help system administrators understand how to better protect the assets they manage. I'll focus on the concepts of ethical hacking in order to explain why it's essential in any organization's overall security framework. The tests and procedures I explore should only be executed on your own system or a system that you are charged with protecting. If ownership and responsibility lie with another party, be sure to get clear, written instructions with explicit permission to conduct ethical hacking activities. Do not investigate individuals, websites, servers, or conduct any illegal activities on any system you do not have permission to analyze.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (3)
> **Speakers:** - [instructor] (1)


### 1. Understanding System Hacking

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting the stage](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/setting-the-stage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/setting-the-stage?u=76281980&t=0)** - [Instructor] The third phase in [[Ethical Hacking]] involves system hacking. In this segment, you'll learn why system hacking is an important exercise and review the steps taken during this critical phase. Today, cyberattacks are sophisticated, coordinated, and developed by expertly trained teams of programmers, resulting in billions of records being lost in industries that include finance, government, retail, and health systems. The attackers have ample resources using advanced tools and methods to target specific systems and continue drilling into an organization until they gain access. Many times, they become an advanced persistent threat and stay in the network undetected to gather high-value information such as trade secrets, defense information, and personally identifiable information. System hacking is an important phase as it can provide valuable insight into the mind of a malicious actor. The ethical hacker has to emulate this level of hacking and must possess the skill of a surgeon in order to gain access and try to change the integrity of the system. Let's set the stage. By the time we get to the system hacking phase, we've obtained a great deal of information on our target. Reconnaissance is complete.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/setting-the-stage?u=76281980&t=93)** We know our target, where it's located, and have a good idea as to when would be a good time to attack. We understand how the organization operates and what data or services might be of value. Scanning and mapping the network is done and have gained knowledge on the make and model of the devices. We know which systems are alive, what operating systems are in use, services that are listening, and what weaknesses we can exploit. We now begin system hacking, which will have the following activities: obtaining the password, escalating privilege, executing applications, hiding files and tools, and covering tracks. So let's step through the process. In order to gain access to a system, we'll most likely need a password. Obtaining the password can be an active online attack with methods such as dictionary, brute-force, or keylogger attack, or it could be a passive online attack. That includes packet sniffing, man-in-the-middle, or replay attacks. If we obtain a password list, we may have to do an offline evaluation such as a rainbow attack. The next step is escalating privilege in order to achieve access to resources normally restricted from an end user or application. We'll want to look around and see if there are any unmounted file systems
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/setting-the-stage?u=76281980&t=186)** or development tools available. With the knowledge of the vulnerabilities and what is available on the system, we can now execute applications and possibly install spyware with a backdoor, and then access to the target could be done at any time. We'll want to hide files and tools with methods such as steganography or alternate data streams. Before leaving, the final phase is to clean up any evidence. We'll want to cover any trace of any activity that is on that machine by deleting or modifying the log files. Now let's test your knowledge. Explain why system hacking is an important exercise and review the steps taken during this critical phase. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1)
> **Analogies:** such as (4)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Getting a foothold](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/getting-a-foothold?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/getting-a-foothold?u=76281980&t=0)** - [Narrator] After scanning the network and obtaining a blueprint, the next step in an [[Ethical Hacking]] exercise is to infiltrate the system. In this segment, we'll explore various methods used to gain access to a system. After reconnaissance and scanning is complete, the following phase is to gain access to the network using a variety of tools and techniques. The methods commonly involve exploiting vulnerabilities in software, [[Hardware]], or configurations that have been identified during the scanning phase. In addition, many times, a social engineering attack is used to manipulate individuals into revealing their passwords or installing malicious software. Let's talk about some of the tools or techniques used in this phase. One technique is to infect a system with malware, which can be done using a social engineering attack and tricking an employee into clicking a link and downloading malware onto a system. Additionally, implanting malicious code on a website and creating a drive-by download, which automatically downloads and runs malware on an unsuspecting victim's device. Another technique is to gather credentials, which can be done in one of a few ways. Stealing credentials can be achieved through deceptive password reset requests, man-in-the-middle attacks, keystroke logging, or brute force attacks.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/getting-a-foothold?u=76281980&t=95)** Locating credentials on the internet can be achieved by searching online using [[Google]] hacking or other methods to unearth passwords within a site, or the team could try to obtain a list of default usernames and passwords for the device or devices they're trying to access. Exploiting [[Wi-Fi]] networks is another option that can be achieved by attempting to guess, crack, or mimic a signed-in device. Once in a corporate or Wi-Fi network, it's possible to perform several malicious activities, including sniffing user credentials, executing man-in-the-middle attacks, and redirecting victims to malicious websites. Mobile devices are widely used, yet can be vulnerable if protected by weak passwords or running on outdated or unpatched operating systems. In addition, they can be compromised if users are tricked into installing spyware designed to remotely control their devices. Now, let's test your knowledge. Discuss various methods used to gain access to a system. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (2), [[Ethical Hacking]] (1), [[Hardware]] (1), [[Google]] (1)
> **Speakers:** - [narrator] (1)

#### [Authenticating a user](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/authenticating-a-user?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/authenticating-a-user?u=76281980&t=0)** - [Narrator] Operating systems authenticate user login information in a variety of ways. In this segment, we'll compare how [[Microsoft]] and [[Linux]]/Unix systems provide authentication. In most cases, we must provide some way to authenticate to gain access to a system. First, let's talk about how a Microsoft operating system provides authentication using New Technology LAN Manager or Kerberos. Microsoft has a proprietary authentication protocol called New Technology LAN Manager, which is used within a [[Windows]] network environment. New Technology LAN Manager employs a challenge response authentication method where the server presents a challenge and the client must provide a valid response based on the hashed value of the user's password to be authenticated. Kerberos is built into [[Active Directory]] and uses tickets to access network services. User accounts and passwords are stored on the domain controller, which also acts as the Kerberos key distribution center and uses Active Directory as its account database. The key distribution center provides two main services, the authentication service, where users get authenticated and receive a ticket-granting ticket, and the ticket-granting service where users obtain a service ticket
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/authenticating-a-user?u=76281980&t=93)** after presenting their ticket-granting ticket. Let's step through the process. To access network services, a user first authenticates with the authentication service to obtain a ticket-granting ticket, then uses this to get a service ticket from the ticket-granting service. The service ticket is then presented to the network resource, which grants access if the ticket is valid. Now, Kerberos is the preferred authentication protocol in environments where it is supported due to its robust security features that use ticketing for authentication without transmitting passwords over the network. However, New Technology LAN Manager is still used under certain conditions, such as when a client is not part of a domain, in peer-to-peer work group settings, or when a firewall restricts the necessary ports for Kerberos. In particular, Port 88. Now, let's discuss how Linux/Unix authenticate. In Linux/Unix systems, pluggable authentication modules provide a flexible API that supports various authentication related services, including authentication, account management, session management, and password management. The simple authentication and security layer, or SASL, is a framework that provides authentication and [[Data Security]] services across a range
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/authenticating-a-user?u=76281980&t=189)** of connection oriented protocols. It functions as an abstraction layer that allows different authentication methods to interact. For example, LDAP can use SASL for authentication. SASL in turn can leverage PAM to determine which authorizations are permitted for a specific user and can also employ Kerberos for robust authentication and authorization processes. Now let's test your knowledge. Discuss ways Microsoft and Linux/Unix systems provide authentication. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (4), [[Linux]] (4), [[Active Directory]] (2), [[Windows]] (1), [[Data Security]] (1)
> **Env Vars:** lan (4), sasl (3), api (1), ldap (1), pam (1)
> **Analogies:** such as (1), for example (1)
> **Ports:** port 88 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Reviewing Entra ID authentication methods](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/challenge-reviewing-entra-id-authentication-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/challenge-reviewing-entra-id-authentication-methods?u=76281980&t=0)** (light upbeat music)
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/challenge-reviewing-entra-id-authentication-methods?u=76281980&t=7)** - [Narrator] Let's do a challenge. In this challenge, you'll review how [[Microsoft Entra ID]] can authenticate users. For this challenge, we'll begin by going to this website and then you'll answer the following five questions. What components does [[Microsoft Entra ID|Entra ID]] authentication include? What is Entra ID multifactor authentication? How does the self-service password reset work? What is passwordless authentication? And why would a company use passwordless authentication? So pause the video and answer the questions, then return to the course and we'll discuss the answers. This challenge should take you about 10 minutes, good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra id]] (2), [[Microsoft Entra ID]] (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (light upbeat music) (1)

#### [Solution: Reviewing Entra ID authentication methods](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/solution-reviewing-entra-id-authentication-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/solution-reviewing-entra-id-authentication-methods?u=76281980&t=0)** (bright music)
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/solution-reviewing-entra-id-authentication-methods?u=76281980&t=7)** - [Instructor] Okay, now let's check our work. For this challenge, we reviewed the information on this website and answered some questions on how [[Microsoft Entra ID]] can authenticate users. What components does [[Microsoft Entra ID|Entra ID]] authentication include? It includes self-service password reset, multifactor authentication, write password changes to on-premise environment, enforce password protection policies, and passwordless authentication. What is Entra ID multifactor authentication? With multifactor authentication, a user can choose an additional form of authentication during sign in, such as a phone call or mobile app notification. How does the self-service password reset work? Well, this gives the users the ability to change or reset their password with no administrator or help desk involvement. This ability reduces help desk calls and loss of productivity when a user can't sign into their device or an application. What is passwordless authentication? Well, the password is the weakest form of authentication as it can be exposed or suffer from a brute-force attack. By selecting other options to log in, this strengthens the security posture of an organization. And why would a company use passwordless authentication?
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/solution-reviewing-entra-id-authentication-methods?u=76281980&t=105)** Well, many work environments still use home offices. However, there is the challenge of identity assurance and providing secure, convenient access to the remote worker. As a result, passwordless authentication provides a more secure option, and you will most likely see more of this in the future. Now, I have another article that you might want to take a look at, and it just goes into authentication and verification methods available in Entra ID. And I'll scroll down. Now, it shows you how passwords themselves are not that good. It's better to have a password and something else, such as a text message or even some type of notification, but the best one is passwordless. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Entra id]] (3), [[Microsoft Entra ID]] (1)
> **Analogies:** such as (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 2. Gaining Access

[↑ Back to Table of Contents](#table-of-contents)

#### [Acquiring passwords](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/acquiring-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/acquiring-passwords?u=76281980&t=0)** - [Instructor] Malicious actors use various techniques to acquire passwords. In this segment, we'll review the many ways we can provide authentication where a [[Windows]] operating system stores passwords, and how a pass-the-hash attack works. First, let's talk about ways to provide authentication. Authentication is proving your identity, like presenting your driver's license to the teller at the bank when you want to cash a check. In a computing environment, user authentication can be done in one of several ways. Using what you know in the form of a password. What you are in the form of a biometric, such as a fingerprint or facial recognition. What you have, such as a smart card or token. Where you are, as far as location on the network. And something you do, such as a swiping motion on your phone. Although there are choices, authentication is commonly done in the form of a username and password. Passwords are still widely used because they're cost effective and easily enforceable. As a result, system hacking, most of the time, starts with attempting to obtain the password. When conducting [[Ethical Hacking]], it's important to know where the passwords are stored in a system. In [[Microsoft]] Windows, users' passwords are stored in the security account manager, or SAM database, in hashed format.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/acquiring-passwords?u=76281980&t=98)** The SAM stores user accounts and security descriptors for users on the local computer. It's located in this folder and is only accessible with administrative privileges. In addition, it's locked by the system and not available for direct access while the operating system is booted. To improve the security of the SAM database against offline cracking attempts, Microsoft has implemented several security measures that include drive encryption, credential guard, and regular security updates. These and other security features help protect against both online and offline attacks, safeguarding sensitive user credential information stored in the SAM database. Now, let's talk about how to obtain passwords or password files. Methods can include using active and passive attacks. Passive online includes sniffing passwords using a packet analysis tool or a man-in-the-middle attack, such as a replay attack. There's also what's called active online attacks, and these would include any of the following: password cracking, Trojans, guessing, [[Phishing]], keystroke logging, or spyware. While obtaining a password isn't always feasible, it may be possible to obtain a password hash and use a technique called pass-the-hash,
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/acquiring-passwords?u=76281980&t=195)** a new technology LAN manager replay attack. Now, this attack exploits weaknesses in the Windows authentication process. In this type of attack, the malicious actor will obtain the hash from RAM, the Windows registry or a credentials file, logging into the target operating system or application by providing the hash of the password rather than the password itself. Now, once accepted, the malicious actor will be able to access the operating system or application, and that leads to the next step, which is privilege escalation. Now, let's test your knowledge. Review ways users provide authentication, where a Windows operating system stores passwords, and how a pass-the-hash attack works. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5), [[Microsoft]] (2), [[Ethical Hacking]] (1), [[Phishing]] (1)
> **Env Vars:** sam (4), lan (1), ram (1)
> **Analogies:** such as (4)
> **Speakers:** - [instructor] (1)

#### [Discovering password tools](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/discovering-password-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/discovering-password-tools?u=76281980&t=0)** - [Instructor] Cracking a password is more of an art than a science, and it all boils down to having the right tool. In this segment, we'll review some of the tools and techniques used to obtain a password. Malicious actors often use methods to obtain or crack passwords because it will grant them unauthorized access to a system, networks or sensitive data. On most systems, passwords are stored as a hash value and protected to ensure system security. On a [[Linux]] system, passwords are typically stored in the etc shadow file, which is accessible only by the root user and contains encrypted password hashes, along with other user account information. On a [[Windows]] system, passwords are stored in the security account manager or SAM database. Access to this file is restricted to system processes and administrators to maintain security. To obtain a password, a malicious actor can use password recovery tools, which are applications designed to obtain a password in a variety of ways. Tools include brute force attack tools, which attempt to guess the password by systematically trying every possible combination of letters, numbers, and symbols until the correct password is found. There's also dictionary attack tools, which try to crack passwords based on a predefined file,
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/discovering-password-tools?u=76281980&t=96)** or they might try reset tools. Now, these reset the password rather than recover the original password. Another method malicious actors use to gain access to a system is by using the password hashes instead of the passwords. Now, some tools used to obtain the hash include Mimikatz. Now this can extract plain text passwords, hash data, and other authentication information from the memory of a Windows operating system. Another tool is Samdump2. Now this obtains the SAM file hashes from a Windows operating system by targeting the system files where the hashes are stored, or they might try the Domain Password Audit Tool. Now this operates by extracting password hashes from [[Active Directory]], which are typically new technology land manager hashes, and then attempting to crack these hashes to reveal the plain text passwords. Now, other attacks used by malicious actors include password spraying and mask attacks. Let's compare. Password spraying targets multiple counts with a small set of common passwords. Tools such as Kerbrute, CrackMapExec, and Spray automates the password spraying against multiple user accounts. And a mask attack checks passwords that match a specific pattern defined by the attacker.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/discovering-password-tools?u=76281980&t=191)** For example, this pattern will generate 28 passwords in this pattern. Tools include [[Hashcat]], [[John the Ripper]], and Aircrack-ng. Now let's test your knowledge. Review some of the tools and techniques used to obtain a password. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Linux]] (1), [[Active Directory]] (1), [[Hashcat]] (1), [[John the Ripper]] (1)
> **Env Vars:** sam (2)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Cracking passwords](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/cracking-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/cracking-passwords?u=76281980&t=0)** - [Instructor] There are several types of password cracking techniques. In this segment, we'll compare the steps in efficiency of brute-force, hybrid, and dictionary attacks. When we think of passwords, they can be in one of three [[Forms]]. Clear text is readable text without any modification. Obfuscated passwords are converting text into an unreadable format. In this case, we simply shifted the characters by one. And hashed passwords use a non-reversible hash algorithm. In this case, we used SHA-256. So, let's talk about some methods we can use to obtain a password. Now, although there are various types of password cracking techniques, guessing a password is pretty much the most efficient, and can be done if someone uses a common password, such as a pet's name, or has even left the default value on a device or application. In fact, in a recent news article, it states that, "A significant percentage of confirmed data breaches involve using weak, default, or stolen passwords." It's easy to find a list of default passwords for network devices and applications. Here's a site that lists most all vendors that are in use today. Now, once here, I'll scroll down and we'll take a look at, for example, Apache, and I'll open it in a new tab.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/cracking-passwords?u=76281980&t=96)** And I'll scroll down, and we can see the different user IDs and passwords you can try. Now, if guessing a password or using the default doesn't work, you may have to try to "crack" a password, which means you'll need to crack the hash value of a password. Now, in order to achieve this, you can try one of the many popular open source password cracking tools that include LOphtCrack. Now, this has a broad scope and can crack password hashes using various techniques, including brute-force, dictionary attacks, and rainbow tables. Ophcrack uses rainbow tables to crack [[Windows]] password hashes. And [[John the Ripper]] can extract password hashes from various file formats and systems. So now let's compare brute-force, hybrid, and dictionary attacks. A brute-force attack will try every possible combination of characters and generate a massive number of consecutive guesses to gain the password. Brute-force attacks can be effective against weak passwords, but they are time-consuming and resource-intensive, especially for longer and more complex passwords. A dictionary attack uses a list of the most common passwords and are faster than a brute-force attack because they rely on a smaller set of likely passwords. A hybrid attack combines a dictionary attack
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/cracking-passwords?u=76281980&t=192)** with a brute-force attack and are more efficient than a pure brute-force attack because they leverage known patterns and common passwords from dictionaries. The bottom line is that password crackers do have a methodology. Any attempt to crack a password is limited by the complexity and length of the password you are targeting. When looking at work effort, we can understand that weak passwords can be cracked in seconds. Strong passwords might take hours, or never be cracked. To foil password cracking attempts, don't make your password predictable, and better yet, use a passphrase with at least 12 or more characters. For more information on how to create a strong password, visit this page at [Google.com](https://Google.com). Now let's test your knowledge. Compare the steps in efficiency of brute-force, hybrid, and dictionary attacks. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Windows]] (1), [[John the Ripper]] (1), [[Google]] (1)
> **CLI Commands:** find (1), apache (1), make (1)
> **UI Navigation:** scroll down (2)
> **Analogies:** such as (1), for example (1)
> **URLs:** [google.com](https://google.com) (1)
> **Env Vars:** sha (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Employing rainbow tables](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/employing-rainbow-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/employing-rainbow-tables?u=76281980&t=0)** - [Instructor] In most cases, a hash value is used to obscure a plain text password. In this segment, we'll explore how malicious actors use rainbow tables to discover a password. First, let's talk about how most systems manage passwords. Password management is used to protect the integrity and confidentiality of the passwords in the system. In most cases, the system generates a hash value of the password, stores the value in a file, and the password is discarded. So why do we use a password hash? Well, let's talk about encryption versus hashing. Encryption uses a key to protect data. When we encrypt a message with a key, we can decrypt the message as long as we have the key. However, hashing is a one-way cryptographic function. You cannot generate the original message from the hash. Now, there are several hash [[Algorithms]], but two popular algorithms are SHA-256 and SHA-3. These hash functions are used in different applications, including authenticating a message, monitoring [[Data Integrity]], and storing passwords. So let's step through the process. A user will create a password. The system generates a hash value and then stores it in the system. Here we see a list of passwords and their hash value.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/employing-rainbow-tables?u=76281980&t=96)** Now, when the user goes in again and enters their password, that hash value is generated and then this is compared to the stored value. Now, if it's a one-to-one match, you'll be authenticated. If the hash values don't match, the password you entered will be rejected. So now let's talk about how we can use a rainbow table. Rainbow tables are a database of many password hash value pairs. Rainbow tables can be enormous. Now, you can make your own by generating all combination of characters and their corresponding hash values, and then store the results in a file for future use, or you can obtain one online. Let's take a look. I'm at this website project Rainbow Crack. And if you scroll down, you'll see a list of rainbow tables that they've generated, and some of them are very large. So now let's take a look at what happens to some text when we use a hashing function, and how you can make a stronger password to try to beat a rainbow table. I'm at this webpage and I've entered Jasper, and I'm going to ask it to hash this value and we'll scroll down. Now, there are some choices, but what we will select is SHA-256. And I'll copy that. Now I'll go to this website
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/employing-rainbow-tables?u=76281980&t=192)** where it does a reverse hash lookup, and we have to select SHA-256 from the dropdown and say reverse. And here we can see that it's come up with the result Jasper, which is correct. Now understand it didn't undo the hash value. It simply did a lookup in the rainbow table to come up with that [[Microsoft Word|word]]. Now let's go back and create a stronger password. This time we'll create a pass phrase. Let's go to the ballpark and we'll say hash. Down below, again, we'll select SHA-256, and we'll copy that. Go back up and enter that hash value. It's already set at SHA256, and we'll say reverse. So we see that there is no SHA-256 value in this database for let's go to the ballpark. So you can see that making a little stronger password or pass phrase might foil a rainbow table. Now, while rainbow tables are still available, they're really not used anymore as you need a really large table to make an attack more efficient, and it takes a long time to crack a password. A newer technique is to use Graphics Processing Units to crack passwords and other cryptographic keys. Now let's test your knowledge. Describe how malicious actors use rainbow tables
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/employing-rainbow-tables?u=76281980&t=287)** to discover a password. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Data Integrity]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** sha (6), sha256 (1)
> **UI Navigation:** go to (3), scroll down (2), dropdown (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Defending against password attacks](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defending-against-password-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defending-against-password-attacks?u=76281980&t=0)** - [Instructor] Protecting users and systems from password attacks is crucial for maintaining organizational security and [[Privacy]]. In this segment, we'll explore key techniques to prevent password attacks, including salting, password policies, educating users, and hardening systems. First, let's talk about salting the password, which adds a random string to the hash to protect against a rainbow attack. The salt is stored in the database along with the hash or as part of the hash string. So let's talk about how this works. A rainbow table attack works because every unsalted hash password will return the same hash. So we have two users, Rae and Matt. They both use the same password, Marley. As you can see from the resultant hash, the two are exactly the same. However, if we add salt with a random string to the hash, we can see that both hashes are now different. The same password, but they have a different hash value. We also want to implement strong password policies. At the administrator level, we can enforce certain guidelines to make sure users have a strong password. Set a minimum password length of eight characters or more, encourage the use of a pass phrase, employ multifactor authentication that requires two or more methods to access an account,
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defending-against-password-attacks?u=76281980&t=96)** and [[NIST]] recommends completely resetting passwords once a year, which is based on the observation that skilled hackers can frequently anticipate minor changes and effectively guess an altered password, and implement account lockout policies that lock an account after several failed login attempts, and provide user education. We want to tell our users to protect their passwords. Users should never disclose their password, not even to the network administrator, and provide training on recognizing [[Phishing]] and other social engineering attacks that could be used to steal passwords. Encourage the use of password managers to generate and store complex passwords for multiple accounts without the risk of forgetting them. And you'll want to harden your systems. Deploy [[Intrusion Detection]] systems, which are used to monitor network traffic for unusual activities that could indicate a password attack, such as an unusually high number of login failures, regularly audit passwords and authentication methods used across the organization. You'll want to monitor logs for unusual access patterns to help detect and respond to potential password attacks. And prevent direct access to [[Hardware]]. If an attacker has physical access to your hardware,
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defending-against-password-attacks?u=76281980&t=190)** they can employ a variety of methods to bypass security measures, including booting from external devices, installing key loggers, or directly accessing storage to modify system files. Now let's test your knowledge. Explore key techniques to prevent password attacks, including salting, password policies, educating users, and hardening systems. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Privacy]] (1), [[NIST]] (1), [[Phishing]] (1), [[Intrusion Detection]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** nist (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Exploiting Vulnerabilities

[↑ Back to Table of Contents](#table-of-contents)

#### [Leveraging security flaws](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/leveraging-security-flaws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/leveraging-security-flaws?u=76281980&t=0)** - [Instructor] A vulnerability is a security flaw that can be exploited to gain unauthorized access to a system. In this segment, we'll review the various methods used to exploit vulnerabilities that exist across multiple areas. First, let's talk about attack vectors and attack surfaces. Malicious actors use an attack vector such as social engineering or malware to access a system. An attack surface is the total number of attack vectors a malicious actor can use to gain access to a system. Today's organizations are large and complex and have many attack surfaces. That includes software, networks, and the user. Let's talk about attack surfaces, starting with software. Software represents the largest attack surface and includes applications, services, executables, and webpages. We find software vulnerabilities in all types of software and operating systems. Attacks include buffer overflows, [[SQL]] injection, or other attacks that exploit software vulnerabilities. One way to launch an attack is by using a zero-day attack, which exploits unknown or unpatched software vulnerabilities. A zero-day attack occurs sometime between when the vulnerability is found and when it is patched.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/leveraging-security-flaws?u=76281980&t=96)** So let's talk about how a zero-day attack works. Here we see in this graphic a timeline of a vulnerability. First, a vulnerability is found in the wild. At some point, the vendor becomes aware and works on mitigating the vulnerability by creating a patch. Once tested, the vendor will release a patch, and then the public will be made aware. However, as we see below, that until you apply the patch, your system is vulnerable and can fall victim to an attack. To reduce risk in the software attack surface, you should actively update your software and test for vulnerabilities. Next, let's talk about the network. The network attack surface includes exposure to protocols, channels, and open ports on outward facing servers, devices, and interfaces. Attack vectors can include unpatched vulnerabilities, outdated software, and obsolete protocols. Legacy platforms are often more susceptible to attacks as they commonly lack the latest security updates, patches, or defenses against modern threats. Minimize risk to the network by closing any unnecessary ports, limiting access to resources only to trusted users, and update and patch all systems as they become available. Lastly, the human attack surface is one we need
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/leveraging-security-flaws?u=76281980&t=192)** to pay attention to as it is the weakest link in an organization. Many times users introduce malicious behavior into the network by falling victim to a social engineering attack. When dealing with a human attack surface, one method malicious actors can use is authentication vulnerabilities, which are flaws in the methods to verify the identity of users or objects that access a system, network, or application. Attackers can exploit these vulnerabilities to gain unauthorized access, escalate privileges, or obtain sensitive information. Authentication vulnerabilities include weak passwords that lack length or complexity, transporting passwords or authentication tickets in clear text, along with storing passwords in an insecure manner. Decrease risk in the user attack surface by providing security education, training, and awareness. Training can ensure employees are in tune with common security issues, such as reporting unusual activity and deleting emails requesting sensitive information. And finally, I'd like to show you where you can provide information on security vulnerabilities in software systems or networks. Exploit Database is a repository for storing and sharing information,
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/leveraging-security-flaws?u=76281980&t=286)** and you can search for specific vulnerabilities, exploits, or related information using keywords or categories. For example, if I just wipe on [[PHP]], it comes up with an advanced search. In addition, if I go over here to the left, I'll select this, which is the [[Google]] hacking database, and I'll open it in a new tab. Here we can drill down to the extensive and up-to-date database and see a list of useful topics such as files containing juicy information or files containing passwords. Now let's test your knowledge, Review the various methods used to exploit vulnerabilities that exist across multiple areas. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[PHP]] (1), [[Google]] (1)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** find (1), php (1)
> **Env Vars:** sql (1), php (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Overflowing the buffer](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/overflowing-the-buffer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/overflowing-the-buffer?u=76281980&t=0)** - [Instructor] Buffers are designed to hold a finite amount of data, but when overloaded, the excess can overflow and overwrite adjacent buffers. In this segment, we'll learn how a buffer overflow works and outline the two types of buffer overflow attacks. First, let's talk about the concept of a buffer. In programming, a buffer is a temporary storage area in memory used to hold data while it's being transferred from one place to another. In most cases, buffers are created to contain a finite amount of data. A buffer overflow is a software vulnerability that occurs when a process or program places too much data into a buffer or memory location designated for temporary storage. If excess data is sent to a buffer, it can overflow and overwrite adjacent memory areas. Malicious actors love to use buffer overflow vulnerabilities and exploit them as much as possible, as this can lead to the ability to infiltrate the network and allow unauthorized access to critical information. Buffer overflows are common, as programmers fail to check and validate their source code. The two types of buffer overflow attacks can target either the stack, which is used for local variables and function call management, or the heap, which is dynamic memory allocation. Stack-based buffer overflows are the most prevalent
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/overflowing-the-buffer?u=76281980&t=98)** and it occurs when an attacker submits malicious code and overwrites existing data on the stack. A heap-based buffer overflow is a more advanced attack that occurs when an attacker overloads the program's heap and exceeds the boundaries of memory allocated for ongoing runtime processes. Now, to defend against a buffer overflow attack on a [[Windows]] system, [[Microsoft]] has a tool called Data Execution Prevention that provides a safety net to prevent damage from malware that attempts to execute code from system memory locations reserved for Windows. Now, we can check this by going to the details in the Task Manager and here we see that Data Execution Prevention is enabled for all these processes. Now, let's test your knowledge. Explain how a buffer overflow works and outline the two types of buffer overflow attacks. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Microsoft]] (1)
> **Definitions:** is a  (3)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Enhancing software security](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/enhancing-software-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/enhancing-software-security?u=76281980&t=0)** - [Presenter] Testing software helps uncover vulnerabilities such as buffer overflows, input validation issues, and other security weaknesses that can lead to an attack. In this segment, we'll learn various ways to test software vulnerabilities. The results of an attack can be devastating and can lead to unauthorized access, data corruption, or a system crash. Good programming techniques are essential in preventing this type of an attack. However, the programmers should also test their code to ensure that any vulnerabilities are identified and mitigated before deployment. So let's talk about the different types of testing that we can use. Static code analysis examines the source code without executing the program. This type of testing is useful for detecting potential vulnerabilities early in the development cycle. Dynamic code analysis monitors application behavior at runtime. This type of testing is effective in identifying vulnerabilities that might not be caught by static analysis. During an [[Ethical Hacking]] exercise, the team can run a fuzz test. Fuzz testing or fuzzing, is a dynamic testing technique that involves providing invalid, unexpected, or random data inputs to a program.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/enhancing-software-security?u=76281980&t=95)** It helps to detect vulnerabilities that can exist in code that might not be evident during traditional testing methods. So let's talk about how this works. Fuzz testing goes through a process. First, you'll need to identify the target. Now, it might be a web server or network service, it really depends on what you'd like to test. Then using specialized software tools, you generate and input different types of data, or fuzz vectors, to run the test. Now, the fuzz vectors could possibly be random data, possibly dangerous values. For example, with an integer, we might use 0 or a negative number, or a really large number. It could also be input from cookies or even data files. Now here we see fuzz vectors for different attacks, including a buffer overflow, [[SQL]] injection, or cross-site scripting. Now, once we understand the fuzz vectors, the software will generate and send the fuzz data. The [[Representational State Transfer (REST)|rest]] goes very quickly. Meanwhile, the software will be observing the behavior and it will generate log files. In some cases, the server might crash and it will dump the output. The software will then analyze the output and report what is found
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/enhancing-software-security?u=76281980&t=188)** so that you can take steps to mitigate the vulnerability. Now, let's test your knowledge. Describe various ways to test software vulnerabilities. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1), [[SQL]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** such as (1), for example (1)
> **Env Vars:** sql (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [presenter] (1)


### 4. Escalating Privileges

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding privilege escalation](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/understanding-privilege-escalation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/understanding-privilege-escalation?u=76281980&t=0)** - [Instructor] Gaining access to a system is only the first step in executing an application, releasing malware, or installing a root kit. In this segment, we'll see what's involved in elevating the privileges of a user to gain broader access to a system. Let's start by defining privilege escalation and why it's important. Privilege escalation is forcing an application into running with a higher security environment than intended by the designer. This is accomplished by taking advantage of a vulnerability in an application or operating system. Once privilege escalation is accomplished and full local access is granted, the next step is to gather information about the system and, depending on the objectives of the attack, the team may then attempt to move laterally within the network or install malware. Now, let's step through the process of privilege escalation. Commonly, the ethical hacker will first obtain access to a system by acquiring a username and password of a less-defended account. Now, this will allow access to a system, but that level of access will not have the privileges of an administrator. Gaining full control of the system to do advanced system hacking will require the rights of the administrator, which is a more protected account, and generally requires more work.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/understanding-privilege-escalation?u=76281980&t=97)** Privilege escalation can be thought of in one of two ways, horizontal or vertical. In horizontal privilege escalation, the ethical hacker will take over the rights and privileges of a user who has the same rights and privileges. In vertical privilege escalation, the ethical hacker will gain access to an account, and then elevate the privilege to a higher level. Now, the team can obtain usernames and passwords through various means, including social engineering, key logging, or sniffing network traffic. Another method is to try to use a default password. Let's explore this concept. Now, administrators sometimes use default passwords. Now, this represents a significant vulnerability. Default passwords are easily accessible and posted online. Manufacturers typically use the same default passwords across multiple devices or systems, which further increases the risk. The team can then use automated tools to scan networks to locate devices with default passwords and another method is to use the preset user accounts. Now, most operating systems come with preset user accounts that include the administrator and guest accounts. The administrator or root has full control over the system and guest is designed for temporary access by users
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/understanding-privilege-escalation?u=76281980&t=193)** who don't have an account in the system. The team will try to find the default accounts, and then leverage misconfigurations that grant excessive privileges to default accounts to gain unauthorized access. So, as a precaution, you should properly secure any preset accounts, even if they're never going to be used, as malicious actors know they exist and will try to use them to gain access to the system. Now let's test your knowledge. Outline what's involved in elevating the privileges of a user to gain broader access to a system. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Obtaining administrator privileges](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/obtaining-administrator-privileges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/obtaining-administrator-privileges?u=76281980&t=0)** - [Instructor] Once an ethical hacker gains access to a system, the next step is to obtain administrator privileges in order to execute applications. In this segment, we'll explore methods used to escalate a user's privileges to gain further access to the system. During pen testing, the ethical hacker will need administrator privileges to access resources that are normally restricted from an end user or application to do any real modification to the system. So let's talk about a few methods we can use. One method is to exploit User Access Control. User Access Control is a [[Windows]] operating system security feature that limits standard users' privileges and requires administrative approval for certain actions that could potentially impact system integrity. Now commonly, when installing a program, you'll see a notification like this one that will prompt you to approve the change to your system. Ethical hackers can use several techniques to bypass UAC and escalate privileges on a Windows system. One way is by using Dynamic Link Library hijacking. Now, this is a technique used to trick a program into loading a malicious DLL instead of the authentic DLL. The team can also fileless malware,
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/obtaining-administrator-privileges?u=76281980&t=94)** which operates in memory and can bypass some UAC controls and other security measures that focus on file-based detection. Another method is by using Windows Sticky Keys. Windows Sticky Keys is an accessibility feature in a Windows operating system designed to assist users that have difficulty holding down multiple keys simultaneously. When Sticky Keys is activated, users can press modifier keys such as shift, Control, ALT, or the Windows key, one at a time instead of simultaneously. Now, the team can potentially exploit the Sticky Keys feature to escalate privileges through various methods. One way is to trigger the Sticky Keys prompt during the Windows login screen or within a user session, and then launch a command prompt or other tools with elevated privileges. The team can also use Sticky Keys as a backdoor by replacing the executable with a custom program that grants administrative access when activated. The team might also try to exploit a misconfigured network file system, which is used in Unix-based operating systems. Now, this can be done in several ways. Misconfigured network file system shares may have overly permissive file permissions,
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/obtaining-administrator-privileges?u=76281980&t=189)** and this would allow unauthorized users to access sensitive files or directories. By gaining access to a network file system share with right privileges, the team can upload or modify executable files, scripts, or configuration files to escalate privileges on the system. And if the network file system server uses weak authentication methods or allows anonymous access, the team can gain unauthorized access to sensitive resources. They may then leverage this access to perform privilege escalation attacks on the target system. Now, once the team has escalated privileges, the next step is to execute commands, install malware, or perform other activities. And this might include installing a rootkit to access the system later or deploying a keystroke logger to gather sensitive information. Now, keep in mind that it's important not to set off any alarms at this point. If the team remains unnoticed, they can continue to achieve the goal of the exercise. Now let's test your knowledge. Explore methods used to escalate a user's privileges to gain further access to the system. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (7)
> **Env Vars:** uac (2), dll (2), alt (1)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** command prompt (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Defending against privilege escalation](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defending-against-privilege-escalation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defending-against-privilege-escalation?u=76281980&t=0)** - [Instructor] By understanding how malicious actors escalate the privilege of a user, system administrators are better prepared to protect their own systems. In this segment, we'll take a look at ways to lock down a system and defend against privilege escalation. Once a malicious actor has escalated privileges to the administrator level, a great deal of damage can be done. Therefore, the goal is to be vigilant and defend against privilege escalation. Let's talk about a few recommended guidelines to prevent unauthorized access and minimize the risk of malicious activities. First, let's talk about securing system access. In this case, the one thing we can do is to restrict interactive login privileges. Now, interactive privileges are an important part of a user's profile in a networked environment as they define how they can interact with the systems resources. The some best practice methods include limit physical and remote access to authorized users only. Implement strong password policies and use multifactor authentication. And use passwordless authentication when available. Implement role-based access control to manage who has what privileges depending on their role. For example, all students can access specific resources on Drive E, or all teachers
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defending-against-privilege-escalation?u=76281980&t=95)** can access all resources on Drive F. Deploy endpoint protection solutions. You'll want to include behavior monitoring and anomaly detection to identify and mitigate suspicious behavior that might indicate attempts at privilege escalation. Additionally, use solutions with advanced threat detection capabilities to block malicious activity. Use network segmentation and segregation strategies to limit the spread of an attack within a network, making it more difficult for an attacker to move laterally through the network and escalate privileges. Always adhere to the principle of least privilege. Now, this means that we assign only the privileges needed to a program, process, or privileged user of a system for the shortest time necessary, in as small a domain as possible, to complete a task without hindrance. Let's talk about how this works. Now, each administrator should have two accounts, the administrator account, and their own user account. In general, you should minimize the time spent running as an administrator due to security and privilege escalation concerns. Now, when running routine services, you don't have to have administrator privileges, so run any routine service
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defending-against-privilege-escalation?u=76281980&t=189)** with the non-administrative account. Now, that way, if a malicious program were to take over, the damage could be minimized if running the service as an average user. Monitor system integrity by regularly monitoring system files and configurations for any unauthorized changes. Use file integrity tools to detect modifications to critical system executables. Keep the operating system and all installed software up to date and patch known vulnerabilities, and monitor the log files. Many times, administrators are aggressively logging everything, and sometimes you might be overwhelmed by the sheer number of alerts and notifications, and you might miss something. But the log files really don't mean anything unless someone is monitoring the files. In addition to supporting auditing and [[Accountability]], monitoring the log files are sometimes the first step in detecting unusual login attempts, file modifications, and excessive network traffic. And one important thing is to provide regular security education training and awareness, and this can help prevent employees from falling victim to social engineering and [[Phishing]] attacks, which can lead to privilege escalation. Now, let's test your knowledge. Discuss ways to lock down a system
>
> **[4:42](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defending-against-privilege-escalation?u=76281980&t=282)** and defend against privilege escalation. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Accountability]] (1), [[Phishing]] (1)
> **Best Practices:** recommended (1), best practice (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 5. Maintaining Access

[↑ Back to Table of Contents](#table-of-contents)

#### [Dissecting rootkits](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/dissecting-rootkits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/dissecting-rootkits?u=76281980&t=0)** - [Instructor] A rootkit is a powerful tool as it allows a malicious actor to have full administrative level control while remaining undetected. In this segment, we'll learn how a rootkit gets onto a system, and then, once in, how they are used. Let's start by outlining the definition of root. To establish deeply and firmly, the part of a plant that attaches to the ground, and find or extract something by rummaging. All of these relate to a rootkit, which is a serious threat. A rootkit is a set of programs that a malicious actor uses to gain access to the root, create a backdoor, and remain undetected in a system for a prolonged period of time, ideally, for years. Malicious actors use rootkits to gather intelligence and then send the information to a server. With the information collected, the malicious actor can launch an attack that gets them further into the network. Rootkits have evolved over time and represent only a part of the cyberthreat landscape. However, many times they're part of a plan to carry out a more advanced attack. Although a rootkit can cause serious damage, a rootkit is not a virus. A virus is different in that a virus can propagate throughout a system,
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/dissecting-rootkits?u=76281980&t=93)** but risks anti-[[Malware Detection]] because of a virus signature and behavior. In contrast, a rootkit burrows deep into the operating system and hides its existence from anti-malware protection. So how do you get a rootkit? In order to get into the system, malicious actors use a variety of techniques such as social engineering. They can lure someone to a website where they become a victim of a clickjacking attack or launching a [[Phishing]] attack and convincing a victim into running an executable. The malicious actors may have obtained a username and password to get into a system and place the rootkit. They might be able to gain access by concealing a rootkit on a removable drive or ship them preloaded on a device. Malicious actors also take advantage of software vulnerabilities, such as a buffer overflow attack that can be used to load the code onto the kernel. Whatever way a rootkit gets into a system, it represents a serious threat. Now let's test your knowledge. Explain how a rootkit gets onto a system, and then, once in, how they are used. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Malware Detection]] (1), [[Phishing]] (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [User Mode and Kernel Mode](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/user-mode-and-kernel-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/user-mode-and-kernel-mode?u=76281980&t=0)** - [Instructor] Rootkits are almost always designed to operate with superuser privileges, which are normally reserved for the system administrator or root user. In this segment, we'll compare user-mode and kernel-mode rootkits, and outline the benefits and drawbacks of each type. First, let's discuss what makes a good rootkit and how they avoid detection. A good rootkit will sniff passwords, create hidden directories, and be able to avoid any security measures designed to pick up any activity as it communicates with the network. Identifying rootkit behavior can be difficult, as a rootkit is designed to avoid being detected by deleting any evidence of processes the attacker has generated, and even remove the rootkit when the job is complete. Many times, they're only identified by a rootkit scanner. So, now let's further discuss how a rootkit can stay hidden. To avoid detection, a rootkit can either use an active or passive approach. An active offense involves taking direct actions that disrupt or compromise security measures, and includes disabling antimalware and firewall protection. Passive offenses refer to covert actions that involve hiding within systems or data files
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/user-mode-and-kernel-mode?u=76281980&t=96)** to avoid detection. In addition, rootkits will go to the extent of encrypting data and then storing the key in non-volatile memory, such as flash RAM, and then transferring the data over the network using a covert channel. So what does it take to develop a rootkit? Well, a malicious actor can use freely available rootkit creator programs, and they generally have a graphical user interface and will allow you to select options such as hiding files, spawning processes, creating network connections, and modifying registry entries. But in general, though, most can only do a limited amount of advanced activity. It takes a professional programmer to write a powerful rootkit. A programmer can write a rootkit in user-mode or kernel-mode. Let's talk about the difference. We'll start with user-mode. A common rootkit is a user-mode rootkit with administrative privileges. A user-mode rootkit changes the applications at a user level, as well as providing backdoor access, and can disable system and security services, hide processes, files, and even conceal network interfaces. However, a user-mode rootkit does have a greater chance of being detected by antimalware detection.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/user-mode-and-kernel-mode?u=76281980&t=192)** So, now let's talk about kernel-mode. A kernel-mode rootkit is a more advanced rootkit, as it places the rootkit on the same level as the operating system and antimalware protection software. Although a kernel-mode rootkit is more advanced, it's difficult to remain undetected, mainly because a kernel-mode rootkit is unstable and it can tend to cause various system crashes. Once this instability is recognized, it generally leads to someone discovering the rootkit. Now, although a drastic move, reinstalling the operating system is the only way to ensure that the rootkit and any other malware that the malicious actor has installed is completely removed, primarily because you can no longer really trust the operating system. Now let's test your knowledge. Compare user-mode and kernel-mode rootkits and outline the benefits and drawbacks of each type. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Env Vars:** ram (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Using rootkits](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/using-rootkits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/using-rootkits?u=76281980&t=0)** - [Instructor] A rootkit is a collection of utilities that infiltrates a system, creates a backdoor, takes administrator level control, and remains undetected. In this segment, we'll outline how a malicious actor can use a rootkit to modify system integrity. Although mostly associated with malicious actors, rootkits have other legitimate purposes. For example, law enforcement might use it to investigate and collect evidence. Additionally, corporations use rootkit technology to monitor employees' use of computers, but malicious actors also use rootkits, but not for legitimate reasons. Now, breaking into a computer system is hard work. So once a malicious actor has gained access to a system, they'll want to stay in the system so they can monitor communications or launch an attack such as uploading malware. However, if a malicious actor simply wants to get in and stay only long enough to steal something, or if the goal is to cripple a system, they won't take the time to install a rootkit. A rootkit is a powerful tool in cyber warfare that has the ability to allow a malicious actor to execute command and control functions, along with eavesdropping. Command and control seeks to take over the system and modify system integrity,
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/using-rootkits?u=76281980&t=94)** and eavesdropping is all about monitoring transmissions. The goal is to gather information such as usernames and passwords, files, and even cryptographic keys. Now let's talk about the different types of system modification techniques. One technique is browser hooking. Now browsers can be insecure. A malicious actor can modify a webpage to embed malicious software such as browser hijackers or spyware. Now, once a victim visits the page, the embedded exploit downloads the malware onto the victim's machine. Now, once there, it can gather information, redirect the victim to another page, or display pop-up ads. Another method is by software modification. Now, a program is a series of statements in a specific order that instructs the program what to do. If the code is modified, it will not perform as expected. Now, there's two types of software we need to talk about, open source and closed source. Open source software has an open development process, where anyone can modify the code. Although there is peer review on essential applications such as Apache or Sendmail, not all open source code is examined closely. A malicious actor can insert a backdoor into the program, which can be difficult to detect.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/using-rootkits?u=76281980&t=188)** Then after distribution to hundreds of victims, the modification can be difficult to locate, and there's also closed source or proprietary software. Now, this is different in that the vendor of the program doesn't publish the source code and it's illegal to modify it. However, a malicious actor can write and distribute a bogus patch specifically designed to modify the way the software operates, including allowing backdoor access into the system. And one more type of software modification I'd like to talk about is in the form of an Easter egg. Now, this is where a programmer can add functionality to a program to allow backdoor access. Although a programmer can write Easter eggs to include a rootkit, many Easter eggs are fun. For example, the [[Google]] Earth Flight Simulator, let's take a look. First, you'll want to download a copy of Google Earth. Once you download it, you'll want to launch it, and then you'll hit Control + Alt + A, and this will launch a flight simulator and you can select whatever you'd like and make some modifications and start your flight.
>
> **[4:31](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/using-rootkits?u=76281980&t=271)** Now, let's test your knowledge. Outline how a malicious actor can use a rootkit to modify system integrity. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2)
> **Analogies:** such as (4), for example (2)
> **Definitions:** is a  (3)
> **CLI Commands:** apache (1), make (1)
> **Exercise Files:** source code (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Detect, remove, and avoid rootkits](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/detect-remove-and-avoid-rootkits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/detect-remove-and-avoid-rootkits?u=76281980&t=0)** - [Instructor] Detecting a rootkit can be difficult as, by their very nature, rootkits avoid discovery. In this segment, we'll review how to detect, remove, and avoid rootkits. First, let's talk about how we can detect a rootkit. Rootkit detectors are "specialized software that essentially act as a host-based [[Intrusion Detection]] system that monitors the activity on a single host." They work by creating a "cryptographic hash of important system files, storing the hash values in a database, and then reporting what files have changed." Most file integrity software supports multiple file types and attributes, all have the same goal, "detecting a change in the integrity of a file." Rootkit detectors include Tripwire, which is a commercial product that monitors file integrity in real time, and advanced intrusion detection environment, which is a free product that runs on any modern Unix system. To monitor the integrity of the files, the software will first "scan the system and initialize the database by creating a message digest of each file" using one of many cryptographic hash [[Algorithms]], such as MD5, SHA-256, or BLAKE2. After initialization, "the software scans the system at predefined intervals to check the integrity of the files"
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/detect-remove-and-avoid-rootkits?u=76281980&t=96)** and will flag any anomalies. Let's see how this works. I'm at this page, SHA256 Hash Generator, and I'll scroll down. Below, we'll see the hash output. For this demonstration, I'm just simply going to put, "Tiger kittens are cute." And down below, we see the hash output. Now, if I change one character, that will change the hash value. I'll put an exclamation point, and then down below we see that the value has changed. Now that we know how to detect a rootkit, let's talk about removing a rootkit. Now, rootkits are designed to avoid detection by antivirus and anti-malware protection, and they're also difficult to remove once they get into a system. Removing a rootkit can be a complex and challenging task due to their stealthy nature and ability to embed themselves deep into a system. In some cases, full removal might require drastic measures. Measures can include a complete operating system reinstallation, "restoring from a clean backup, or replacing [[Hardware]] components" to ensure the rootkit's complete eradication. Now finally, let's talk about ways to avoid a rootkit. Because most rootkits get into a system via a virus or Trojan, "use caution when clicking on an attachment or downloading anything,"
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/detect-remove-and-avoid-rootkits?u=76281980&t=191)** such as software or other content, from the internet. And "if the user is logged in as administrator, the rootkit will then have full control over the system and can disable anti-malware protection or integrity checkers." Rootkit behavior continues to evolve, making it a challenge to keep up with this threat. Therefore, "the best protection against rootkits is avoidance." Now let's test your knowledge. "Review how to detect, remove, and avoid rootkits." You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (2), [[Algorithms]] (1), [[Hardware]] (1)
> **Env Vars:** md5 (1), sha (1), blake2 (1), sha256 (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **UI Navigation:** scroll down (1)
> **Warnings:** caution (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)


### 6. Grasping Keyloggers

[↑ Back to Table of Contents](#table-of-contents)

#### [Outlining keystroke loggers](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/outlining-keystroke-loggers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/outlining-keystroke-loggers?u=76281980&t=0)** - [Instructor] Keystroke loggers record every keystroke made on the system to capture information. In this segment, we'll compare software and [[Hardware]] keyloggers. First, let's talk about how keystroke loggers are used. A keystroke logger quietly records all activity, including what you put in a [[Microsoft Word|Word]] document, email, online chats, and internet use. Keystroke loggers are used for a number of different legitimate reasons. Company security, parental control, and schools use it to monitor internet usage. However, a keylogger can be used for malicious purposes. Because a keylogger records all keystrokes, you can see the names and passwords in plain text as someone types it into a form. In addition, if using secure email, such as GNU [[Privacy]] Guard, you'll be able to see the email before encryption. Now, let's compare software and hardware keyloggers. A software keylogger will run in the background and record every keystroke, and then stores the result on a hard drive on the system. The data can be later copied or removed by the attacker. Software keyloggers can be thought of in two different classes. One is observable and can be seen in the task manager. It can then be disabled by simply right clicking and selecting end process.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/outlining-keystroke-loggers?u=76281980&t=94)** And there's also stealth keyloggers, which are harder to detect. However, they can be found and disabled if the user has administrative privileges. Now, a disadvantage of a software logger is that many times they're easier to detect. Anti-malware protection most of the time will detect a software keylogger as they're a form of spyware. In addition, depending on how aggressively the software is gathering data, this might slow down a system. In some cases, a keylogger can grab screen captures, and this activity may fill the hard drive and cause stability problems. In addition, some keyloggers send information over to another device or server, which might alert your firewall or [[Intrusion Detection]] system. Now, hardware keyloggers are a little bit different in that they must be physically attached to the system. Now, once on, they record each keystroke and save it to their own onboard memory. Installing a hardware keylogger is easy and can be done with little or no experience. However, installation requires physical access to the device. A hardware keylogger can be installed inside a keyboard. In addition, it could also be plugged into a USB. And a user might not notice it's there. With hardware keyloggers, no software is required. In general, they're undetected by anti-malware protection.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/outlining-keystroke-loggers?u=76281980&t=192)** They have their own onboard processor, allowing them to function outside of the operating system and not interfere with internal processing. Additionally, they preserve data even when the power is lost, and the stored contents can be encrypted, further securing the data against unauthorized access. Now let's test your knowledge. "Compare software and hardware keyloggers." You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (7), [[Microsoft Word|Word]] (1), [[Privacy]] (1), [[Intrusion Detection]] (1)
> **Env Vars:** gnu (1), usb (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Protecting against keylogging](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/protecting-against-keylogging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/protecting-against-keylogging?u=76281980&t=0)** - [Instructor] Keylogging silently records all keystrokes and is generally used to gather sensitive information. In this segment, we'll outline how to defend your systems from keylogging. First, let's talk about how keyloggers operate and what they can do. Keyloggers can get into your system in several ways by email, file sharing, or downloading a game. They're difficult to detect because their very goal is to steal data without being discovered. And once in your system, they capture sensitive information such as passwords and credit card numbers. And because data theft is at stake, a keylogger could do more damage than a virus. So let's talk about some best practices to help protect against keylogging. Now, one area we can focus in on is system and [[Network Security]]. To start, make sure to use a firewall. Now, data from a keylogger is logged and then sent over the internet to a malicious actor. The amount of data can be small, so you might not see a huge increase in bandwidth. However, you should employ egress filtering, which monitors outbound connections with the option of shutting down all inbound and outbound connections. [[Windows]] User Account Control can help you maintain control of your system by notifying you when a program makes changes
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/protecting-against-keylogging?u=76281980&t=94)** that requires administrator level permissions. Make sure to regularly monitor system processes and network activity as this can help identify suspicious behavior indicative of a keylogger. Instruct users to avoid the temptation to download free apps or software. Instead, obtain software from a reputable vendor, use a strong password, and when in the system, operate primarily in a limited user account, which will reduce the risk of malware gaining administrative privileges. Research browsers that provide enhanced [[Privacy]]. Browsers like Chrome, Safari, Firefox, Edge, Brave, or Tor prioritize security features. Now, although we use the term keystroke logger, a software logger is a form of spyware. So install and run reliable security software. Anti-spyware and anti-malware protection with automatic updates. And if you do suspect you have a keylogger, you should run a scan. Now let's test your knowledge. Outline how to defend your systems from keylogging. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (1), [[Windows]] (1), [[Privacy]] (1)
> **CLI Commands:** make (2)
> **Tools:** safari (1), firefox (1)
> **Best Practices:** make sure to (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 7. Recognizing Spyware

[↑ Back to Table of Contents](#table-of-contents)

#### [Explaining spyware behavior](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/explaining-spyware-behavior?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/explaining-spyware-behavior?u=76281980&t=0)** - Spyware can infect a system and capture user activity and data. In this segment, we'll review how spyware operates, along with ways you can get infected. Spyware is a form of malware that is placed onto a system by several methods and is used by organized crime, malicious actors, advertisers, and even countries. Spyware can manifest in various [[Forms]], all of which can present significant issues. So let's talk about some spyware activity. Once a system is infected with spyware, data is harvested using various methods. Spyware can monitor screen activity, capture keystrokes, gather web form data, and track your internet usage. After spyware collects the data, it phones home with the information, where many times it's sold to others for use in identity theft, spam, and other predatory activities. Related to spyware is adware, which is a type of malware that automatically delivers advertisements. It's often installed on a user's computer or mobile device without consent. Ad networks are legitimate companies that connect advertisers with websites willing to host ads, however, can also be used to spy on a user. First, the user is enticed to visit the site.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/explaining-spyware-behavior?u=76281980&t=95)** Then once on the site, there may be deceptive tactics, such as popups that could result in tracking cookies, adware, or unwanted software installed without their knowledge or consent. And finally, let's talk about a few ways your system can become infected. Much of the spyware today is designed to monitor your movement on the internet, and in some cases can hijack your connection and redirect you to other websites. The user's browsing habits and what sites that have been visited are tracked, so that ads can be specifically designed for them. Two types of malware that can affect your web browsing experience are browser hijackers and helper objects. Browser hijackers hijack your requests and send them to another search engine, and it might even modify your homepage. Browser helper objects are sometimes useful, such as Adobe Reader, which enables you to read PDF files. However, some are malicious and direct you to alternate sites that act like browser hijackers. Another way to get spyware is through a Trojan horse, which is presented as a useful tool or utility through a free download. Now, it's important to read the end user license agreement before installing any software, as there may be hidden language concerning other programs
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/explaining-spyware-behavior?u=76281980&t=189)** that might be included in the download. If you don't agree, most likely you won't be able to use the main program. However, in most cases, your anti-malware protection will block the installation anyway. Now let's test your knowledge. Review how spyware operates, along with ways you can get infected. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Env Vars:** pdf (1)
> **Speakers:** - spyware (1)

#### [Mobile spyware and invasive apps](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/mobile-spyware-and-invasive-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/mobile-spyware-and-invasive-apps?u=76281980&t=0)** - Spyware and invasive apps on a mobile device can invade your [[Privacy]]. In this segment, we'll discuss ways malicious actors can infiltrate cell phones and tablets, along with ways to protect your device. Mobile devices are pervasive in today's society. As a result, invasive apps and mobile spyware are significant concerns in today's digital landscape. Let's talk about ways they can affect your device. We'll start with a discussion on invasive apps. Invasive apps intrude on user privacy or security without clear disclosure or consent. Some behaviors of invasive apps include collecting user information such as location data, contacts, and browsing history. Displaying intrusive advertisements that disrupt the [[User Experience (UX)|user experience]] or lead to unintentional clicks. Using excessive device resources such as CPU, memory or battery, and can degrade performance. Employing aggressive tracking techniques to monitor user behavior across apps or websites. Mobile spyware is malicious software designed to monitor and gather information from a mobile device without the user's knowledge or consent. Spyware can be installed through various methods,
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/mobile-spyware-and-invasive-apps?u=76281980&t=94)** including malicious app downloads, [[Phishing]] attacks, or physical access to the device. Now, some characteristics include monitoring and recording calls, text messages, emails, and other communications, tracking the device's location, capturing passwords and other sensitive information, accessing photos, videos, and other files stored on the device. And remotely controlling the device such as activating the camera or microphone. So now let's talk about ways to protect your device. You'll want to avoid downloading apps from unknown or untrusted sources. Use reputable app stores like [[Google]] Play Store or Apple App Store, which have strict guidelines for app submissions. Read app permissions and privacy policies before installing an app. And regularly review and uninstall apps that are no longer needed or appear suspicious. Additionally, you'll want to keep your device's operating system and apps up to date with the latest security patches. Use strong and unique passwords for device unlock and app access. Be cautious of suspicious links, attachments, or messages that could lead to spyware installation, and use mobile security solutions
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/mobile-spyware-and-invasive-apps?u=76281980&t=187)** that offer spyware detection and removal capabilities. Now let's test your knowledge. Discuss ways malicious actors can infiltrate cell phones and tablets with spyware and invasive apps, along with how to protect your device. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (3), [[User Experience (UX)|User experience]] (1), [[Phishing]] (1), [[Google]] (1)
> **Analogies:** such as (3)
> **Env Vars:** cpu (1)
> **Speakers:** - spyware (1)

#### [Defending against spyware](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defending-against-spyware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defending-against-spyware?u=76281980&t=0)** - [Narrator] Spyware can infect a system in a number of different ways. In this segment, we'll discuss various strategies to defend your system against spyware. Once spyware or any type of malware has infected your system, it can cause unpredictable behavior. It can cause extreme slowdowns. You might see excessive popups or even cause your computer to crash. So let's talk about some ways to defend your system. You'll want to apply the latest security patches and updates to your operating system browsers and all applications use reputable antivirus, and anti-malware software that automatically updates on a regular basis. Use caution when downloading software or files from the internet. Only download from trusted sources and read the end user license agreement before installing the software. Avoid opening email attachments or clicking on links from unknown or suspicious senders. If your endpoint or malware protection warns you that the website you're going to has a risky reputation, don't visit the site and stay informed about common spyware tactics and techniques such as [[Phishing]] scams and social engineering to recognize and avoid potential threats. Now, securing your browser is your first line of defense. You'll want to modify browser settings and use the free spyware protection tools available,
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defending-against-spyware?u=76281980&t=95)** or enable the ones built into your malware protection. I'm here in Firefox and we'll go to Settings. And then once their, [[Privacy]] & Security. Now here we can see how it explains browser privacy. This feature Enhanced Tracking Protection protects you against things such as social media trackers or cross site tracking cookies, and tracking content in private [[Windows]]. Now scroll down and you can modify this to make it stricter or customize it if you like. Now, finally, a key concern in all of this is the use of cookies. Let's talk about why this is important. Cookies are small text files used by nearly every major website to store state information on an end device. Cookies simplify browsing by retaining preferences and sign in details. However, cookies also serve as a means for advertisers to monitor your online activities, potentially posing a privacy risk by tracking the sites you visit. Now, while blocking all cookies might be overly restrictive and could impact your browsing experience, selectively blocking third party cookies is advisable. The reason is that third party cookies lack a concise privacy policy and raise concerns as they may share your data with unknown parties. In contrast, first party cookies typically include a clear
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defending-against-spyware?u=76281980&t=190)** privacy policy detailing how your information will be used, providing greater transparency and control. Now, let's test your knowledge. Discuss various strategies to defend your system against spyware. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (5), [[Phishing]] (1), [[Windows]] (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Tools:** firefox (1)
> **Warnings:** caution (1)
> **Speakers:** - [narrator] (1)


### 8. Hiding in Plain Sight

[↑ Back to Table of Contents](#table-of-contents)

#### [Using steganography](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/using-steganography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/using-steganography?u=76281980&t=0)** - [Instructor] Steganography works as a way to hide in plain sight. In this segment, we'll outline ways to conceal data using Steganography. Steganography is the practice of concealing messages or information within data to avoid detection. Now closely related is a watermark. Steganography has three basic elements. We need some type of carrier such as music, image, or document. Then we have the payload which is generally the secret message. This then becomes the hidden message that appears harmless. Now no one outside of the sender and receiver should suspect anything. To date, there are hundreds of steganography tools that we can use to embed a payload using a variety of carriers such as images, documents, audio, or video. For example, MP3Stego works with MP3 files. S-Tools works with bitmap, GIF, and WAV files, and OpenPuff can use a variety of media files such as images, audio, video, text, or documents. Now while there are many different steganography techniques, let's talk about image steganography which is used to conceal a message using subtle changes in the color of pixels. So let's talk about how this works.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/using-steganography?u=76281980&t=95)** The image on the left has a secret message embedded using steganography. Now we'll take a look at the two images side by side. On the left, you can see the image with the secret message obscured and then on the right, the plain image. They shouldn't look any different to you and that is because the human eye can only detect so many colors. Now when we're talking about colors, each pixel has a red, green, and blue value that is represented by eight binary bits. When using steganography, the low order bits are generally used and this really doesn't change the color value. So you can see the difference, I've blown up two single pixels, and here we see the red, green, and blue values on the left which are 229, 84, and 147. On the right, we see 228, 84, and 144. To the eye, you really can't see that subtle difference and that's because we can only see a certain range of color values, and that's how we can use image steganography. So now let's see how we can conceal data with one of the original steganography tools. I'll embed a secret message in an image and then encrypt the payload. I'm here at this website where we can download S-Tools and you can try it out.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/using-steganography?u=76281980&t=189)** Now keep in mind, S-Tools will only work with WAV, bitmap, and GIF files. Now I've unzipped and opened the application and keep in mind, this is an old application, but it does the job. Now we're going to use two GIF files right here, Milo1 and Milo2, and they're exactly the same because I simply copied Milo1 and made it into Milo2. We'll pull it in and side by side. Again, we won't be able to see any difference, but in Milo2 we're going to embed a secret document and I'll pull that in. And it asks for a passphrase and I'll type C-A-T, and I'll verify, C-A-T, and accept the default. Now this becomes the hidden data, and I'll right click and we could say Save As, but I'm going to ask to reveal. Again, I'll enter the past phrase, C-A-T, and verify, C-A-T, and we'll say okay. And there's the Secret.txt. Now I can read the secret file and it says this is a secret message. So using steganography, we can hide data in plain sight. Now let's test your knowledge. Outline ways to conceal data using steganography.
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/using-steganography?u=76281980&t=285)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** gif (3), wav (2), mp3 (1)
> **Analogies:** such as (3), for example (1)
> **Definitions:** is a  (2), is an  (1)
> **Warnings:** keep in mind (2)
> **File Paths:** secret.txt (1)
> **Speakers:** - [instructor] (1)

#### [Swimming in the NTFS data stream](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/swimming-in-the-ntfs-data-stream?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/swimming-in-the-ntfs-data-stream?u=76281980&t=0)** - [Instructor] In a New Technology File System, a malicious actor can use alternate data streams to hide files. In this segment, we'll expose the dangers of hidden streams and show how to hide a text file in a data stream of another text file. [[Microsoft]] developed the New Technology File System specifically for [[Windows]] operating systems. New Technology File System Alternate Data Streams is a feature of the file system that allows additional data to be associated with a file or folder without changing its main content. This feature can be used for various purposes, such as storing [[Metadata]], file attributes, or even hiding data within a file. Alternate data streams were originally designed to provide compatibility with non-Windows file systems. However, alternate [[Data Streaming]] can store data in hidden files that are linked to a regular visible file. The streams are not limited in size, and there can be more than one stream linked to the visible file. There are many dangers of hidden streams in file systems, which primarily revolve around security risks and potential misuse by malicious actors. Malicious actors can exploit hidden streams in the file system to evade detection, conceal malicious activities,
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/swimming-in-the-ntfs-data-stream?u=76281980&t=95)** propagate malware, and store sensitive data. Now, I'd like to show you an example of how this works. I'm at the command line and I'm in the Temp folder on the C drive. From there, I'll type notepad sample.txt and I'll press Enter. And yes, I want to create a new file and we'll type the text, "Boring stuff,"
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/swimming-in-the-ntfs-data-stream?u=76281980&t=129)** and I'll close the file. Now, I'll type dir sample.txt and note the size, and we see it's 12 bytes. Now we'll go back in and use Alternate Data Streaming. Now I'll issue this command and it will bring Notepad back up. And then I'll enter, "This is my secret message," and I'll close that and we'll say Save. Now this creates a second file that's attached as a hidden data stream to sample.txt. We'll go back in and note the size, and it's still the same size, although we did add several characters. I went into the Temp folder, and here we see, "Boring stuff." Well, there's nothing else in there. So where is it? Well, let's go get it. So now issue this command, and here we can see that there's the file with the hidden data. So now I'll issue another command, and then we can see what's in the hidden file. For this command, I'll type more, space, less than, space, sample.txt:secret.txt,
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/swimming-in-the-ntfs-data-stream?u=76281980&t=226)** and we'll press Enter. And now we can see the secret message, which is the hidden data. So hopefully now you can see why understanding hidden streams is critical for system security. Now let's test your knowledge. Discuss the dangers of hidden streams and discuss how to hide a text file in a data stream of another text file. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Data Streaming]] (2), [[Microsoft]] (1), [[Metadata]] (1)
> **File Paths:** sample.txt (4), secret.txt (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Using whitespace steganography](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/using-whitespace-steganography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/using-whitespace-steganography?u=76281980&t=0)** - [Instructor] There are several different types of steganography techniques. In this segment, we'll learn how using whitespace steganography can be used to conceal data. Whitespace is the part of the document that's either a space between characters or the area surrounding an object. So let's see how this works. I'm at this page and here we can see how using Unicode will be able to conceal characters within text. Now, I put a small amount of text over here, which would be the original text, and then down below, we have the hidden text, and then I select Encode. Now, down below here, we can see Download Stego Text as File, which I did. Now, let's take a look. I've opened it up in Notepad and here's the stego text. But let's take a look at the original. In this case, this is the original text. Within the stego text, you can see those lines and that represents the secret hidden message. Now, they may be overlooked by someone or even a computer system unless they're specifically checked. So let's go back and decode that. I've opened up another browser tab on the same site, but now instead we'll go over and we'll say Decode. And here we can see the original text and then down below, the hidden text. Now, let's test your knowledge.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/using-whitespace-steganography?u=76281980&t=94)** Describe how using whitespace steganography can be used to conceal data. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Detecting steganography](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/detecting-steganography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/detecting-steganography?u=76281980&t=0)** - [Instructor] Steganography is hiding in plain sight and can be used for malicious purposes. In this segment, we'll see how to detect steganography with the naked eye or by using specialized tools for analysis. It's important to be aware of steganography, as it can be used in malicious ways. It can be used for corporate espionage, terrorism, and child pornography. Because of this, law enforcement is becoming more and more involved. Steganography detection or steganalysis involves identifying hidden messages or data concealed within seemingly innocent files or media. Now there are several methods commonly used to detect steganography. Some are as easy as visually inspecting an image, and some require advanced tools and techniques. Visually inspecting an image or file may reveal subtle anomalies that could indicate concealed content. Now, I'd like to show you an example of how this works. I have an image of a kitten, Jasper, in my temp folder, and here's Jasper, and I'll close that. Now I'm at the command line, and let's see what's in the temp folder. All right, here we see we have a couple of images and a Secret.txt. All right, that's our secret document. Now what we're going to do is put the secret document
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/detecting-steganography?u=76281980&t=94)** within Jasper, and there's the command and I'll press enter. And now we'll check the contents again. And there we see the hidden message, so let's take a look. I'll open that up, and here we see the hidden message. I don't see anything unusual. Well now, let's take a look in Notepad. I'll right click, and I'll say Open with Notepad. Now up at the top, you see JFIF, which is jpeg file interchange format, or simply jpeg, and I'm going to scroll all the way to the bottom. And here, we see this is a secret message, so we can see by using a carrier and a secret message, we can conceal the text, and on visual inspection, we really didn't see anything different. Now detecting steganography isn't always easy, so let's talk about some more advanced methods. Image steganography tools hide a message in a carrier by bit manipulation, such as using the least significant bit or bits to insert the payload. When using this method on a pallet-based image, this often causes a large number of duplicate colors, which are nearly identical and appear twice in the palette, and these are called color buddies. Steganography can be detected by looking for images
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/detecting-steganography?u=76281980&t=191)** with an unusually large payload that can have image irregularities called blocky artifacts, and those can be seen with the naked eye. But first, let's talk about what represents a large payload. I'm in [[Microsoft PowerPoint|PowerPoint]], and I want to show you a compression technique. Now this is a picture of a snowy day. Now any image that's placed on a webpage is usually done with what's called optimization that washes the image so it loads faster. Now, we go here, and I'll select Picture Format, and then here you see Compress, and right here, I can select some other choice that would reduce the size, so it would load faster. Now an unusually large image on the internet might indicate that there is a payload. Now, if the carrier image wasn't dense enough, and it wasn't a large enough file, and if they packed a lot of data in it, the detection could be viewed with the naked eye where we would see blocky artifacts. For example, on the right hand side here, we see Marlin. Now this is the original image. And below we can see what it might look like if an unusually large file were to be inserted into the image, and those irregularities are called blocky artifacts. Now, the best way to detect if there is steganography is to compare the image with the original,
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/detecting-steganography?u=76281980&t=286)** but that's most likely not possible. As a result, we need to have a deeper look into the file by using specialized tools for analysis. The [[Microsoft Products|products]] deal directly with steganalysis to search for clues of steganography being used in a carrier. Now, once a suspected carrier is found, the software will scan the entire file system, flag any suspect files, and display the results. Now, encryption has made steganography harder, because it increases the randomness and recovery of contents can't be done unless you have a key. Various tools must be used to obtain the password or passphrase so that the contents can be revealed. The bottom line is that new steganography [[Algorithms]] are being written all the time with better methods to conceal information and hide in plain sight. Now let's test your knowledge. Describe how to detect steganography with the naked eye or by using specialized tools for analysis. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft PowerPoint|Powerpoint]] (1), [[Microsoft Products|Products]] (1), [[Algorithms]] (1)
> **Analogies:** picture (2), such as (1), for example (1)
> **Definitions:** is a  (3)
> **File Paths:** secret.txt (1)
> **Env Vars:** jfif (1)
> **Tools:** command line (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 9. Maintaining Persistence

[↑ Back to Table of Contents](#table-of-contents)

#### [Remaining in the system](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/remaining-in-the-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/remaining-in-the-system?u=76281980&t=0)** - [Narrator] The goal of a malicious actor is to establish and maintain a persistent presence within a targeted network or domain through various tactics. In this segment, we'll cover ways to maintain persistence while remaining undetected. Malicious actors will do whatever they can to get into your system and remain active using various techniques. An attacker can maintain a foothold on a compromised system and continue malicious activities while avoiding detection even after a system reboots. Maintaining persistence allows them to gather information or carry out further attacks without having to continually gain unauthorized access to the system. So let's talk about a few methods. One way to maintain presence in a system is by targeting Boot Autostart programs, which are programs that automatically execute every time the computer system starts, not just when the user logs in. This is often achieved by injecting malware into the system's boot processes, bootloader configurations, and startup scripts, which will allow the malware to activate every time the system boots. Similarly, attackers may abuse login auto starch systems that are tied to user logins. This could include modifying registry keys such as this one.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/remaining-in-the-system?u=76281980&t=93)** This key is user specific and dictates which programs start when that particular user logs into the system. Another technique is to achieve control over a network domain. Malicious actors can use one of many attacks that include the following. Exploiting weaknesses in domain controllers, which manage user authentication and access within a domain. Misusing trust relationships between different domains or external entities to move laterally or gain unauthorized access to resources and trusted domains. Or abusing admin tools like [[Powershell]], Group Policy or [[Active Directory]] Management tools to create back doors and escalate privileges. In addition, malicious actors can modify system integrity by exploiting a vulnerability which allows for remote code execution. This will allow an attacker to execute code on a remote system or server. Now let's test your knowledge cover ways to maintain persistence while remaining undetected. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (1), [[Active Directory]] (1)
> **Tools:** powershell (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Staying under the radar](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/staying-under-the-radar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/staying-under-the-radar?u=76281980&t=0)** - [Instructor] To maintain persistence while in a system, a malicious actor will use various tools and techniques. In this segment, we'll review methods to remain in a system undetected. After an attacker has gained initial access to a system, they'll perform further actions to gather information, escalate privileges, steal data, and install a backdoor to maintain persistent access. Let's talk about a few methods and techniques. One way is by abusing data protection API, which is a [[Windows]] API that provides services to encrypt and decrypt data, and is used by multiple applications to store credentials. Malicious actors extract keys or manipulate operations, to access or tamper with protected data. Now, they could also try Malicious Replication. Now, this involves replicating malicious content or objects across a network, virtual environment or system, to spread malware, compromise security, or achieve unauthorized access. Windows Management Instrumentation Event Subscriptions are used to set up triggers for events. Now, this helps administrators to perform tasks, locally and remotely. An attack can create malicious event subscriptions to execute code or commands on target systems, which will allow a malicious actor
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/staying-under-the-radar?u=76281980&t=95)** to maintain persistence, even after the system reboots or changes. Another commonly used attack method is to leverage [[Active Directory]], which is a directory service used in a Windows environment. Active Directory stores information about network resources across a domain, and it also provides authentication and authorization services. Now, there are several methods used to maintain persistence within an Active Directory environment. A skeleton key attack is where a malicious actor implants a malicious password. Now, this grants them access to any account on the domain, without needing the actual password. A golden ticket attack is a technique used to forge Kerberos tickets. Now, this grants them long-term, persistent access to any service or resource within the domain, without needing to authenticate again. A silver ticket attack is similar to the golden ticket attack, but involves forging a service ticket for a specific service or resource within a domain. The AdminSDHolder is a protected object and active directory that controls permissions for administrative accounts and groups. Attackers exploit vulnerabilities or misconfigurations related to the AdminSDHolder
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/staying-under-the-radar?u=76281980&t=188)** to maintain persistent access, escalate privileges, or manipulate permissions for administrative accounts. Now, let's test your knowledge. Review methods, such as abusing data protection API, replicating malicious content, and exploiting active directory to remain in a system undetected. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (5), [[Windows]] (3)
> **Definitions:** is a  (4)
> **Env Vars:** api (3)
> **Prerequisites:** install (1), set up (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Defend against persistence attacks](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defend-against-persistence-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defend-against-persistence-attacks?u=76281980&t=0)** - [Instructor] When a malicious actor remains in a system undetected, this is called an advanced persistent threat, and it's extremely dangerous. In this segment, we'll learn steps we can take to defend against a persistence attack before grave damage is done. An advanced persistent threat is a long-term, targeted and stealthy presence in a network that has a goal of stealing data or disrupting services. Defending against persistence attacks requires a combination of proactive measures, robust security practices, and ongoing monitoring. Let's talk about some key strategies to help defend against persistence attacks. System hardening involves reducing vulnerabilities to protect against unauthorized access or attacks on a system. You'll want to regularly audit and harden systems by disabling unnecessary services and unused applications. Apply security configurations based on industry best practices and security standards. Patch and update operating systems, applications, and firmware with the latest security patches and updates. Use strong access controls. Use the principle of least privilege to limit permissions to only what is necessary for their roles, and force password complexity policies,
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defend-against-persistence-attacks?u=76281980&t=97)** and use multifactor authentication. Monitor and detect by implementing logging and monitoring solutions to detect suspicious activities and unauthorized access attempts. Use endpoint protection, such as anti-malware and [[Intrusion Detection]], intrusion prevention. Enable behavioral analysis and heuristic scanning to identify and block suspicious behavior patterns, indicative of persistence attacks. Secure the networks. You'll want to segment networks and isolate critical systems to limit the impact of compromise and lateral movement by attackers. Use firewalls and policies to restrict unauthorized access between network segments. Develop and maintain an [[Incident Response]] plan that outlines procedures for responding to security incidents, including persistence attacks. And provide regular training and awareness programs to educate users and staff about social engineering tactics and best practices for securely handling credentials and sensitive information. Encourage users to promptly report suspicious activities or security incidents. Now, let's test your knowledge. Describe steps we can take to defend against a persistence attack before grave damage is done.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/defend-against-persistence-attacks?u=76281980&t=191)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (1), [[Incident Response]] (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 10. Covering Tracks

[↑ Back to Table of Contents](#table-of-contents)

#### [Disabling logging and hiding files](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/disabling-logging-and-hiding-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/disabling-logging-and-hiding-files?u=76281980&t=0)** - [Tutor] Disabling logging and hiding files are valuable skills for an ethical hacker. In this segment, we'll discuss how disabling auditing can help the team, move through a system undetected. First, let's talk about concealing files. When conducting an [[Ethical Hacking]] exercise, one valuable skill is to be able to hide files and tools within the system. Files can be hidden in alternate data streams or by using steganography. Ultimately, installing a root kit will provide a way to hide files and tools and give backdoor access to a system. Additionally, some root kits have log scrubbers to hide any activity. So, now let's talk about logging or auditing. Most systems employ some form of auditing, which monitors and records system activities, such as user logins, file access and configuration changes. Security monitoring systems often rely on auditing logs to generate alerts for unusual or unauthorized activities. And auditing logs are crucial for forensic investigations, following a security incident. Now, once administrative access is achieved, the team can disable auditing to conceal any activity and can provide the following goals. This can prevent security teams from analyzing them to identify suspicious behavior or security incidents. There won't be any logs to trigger alerts,
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/disabling-logging-and-hiding-files?u=76281980&t=96)** which allows the team to operate without raising alarms, and it reduces or eliminates the forensic evidence available to investigators, making it harder to trace the attacker's actions and identify the root cause of a breach. So, now let's talk about how we can disable auditing in Server 2022. I'm here at the graphical user interface at the local group policy editor, and we'll drill down. We'll go to Security Settings, Local Policies and Audit Policy. And here we can see the different policies and the security settings and which ones are set at success and failure or in some cases, no auditing. Now, if we were to double click any of those and go to Explain, it tells us what it's doing. This security setting determines, whether the operating system audits user attempts to access [[Active Directory]] objects. Okay, that sounds like a good one we want to disable. So, we'll uncheck Success Failure and Apply and say, Ok, and we'll just do one more here, privilege use, and we'll uncheck those and we'll say Apply and then Ok. Now of course, you can disable auditing on all those events, but really the bottom is remember what they were, before you started and then reapply them, before you exit the system. From a defensive standpoint,
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/disabling-logging-and-hiding-files?u=76281980&t=188)** it's crucial for organizations to regularly audit their systems and use security monitoring tools that can detect suspicious activities, even when auditing is disabled or manipulated by an attacker. Now, keep in mind, an administrator can log virtually everything, but in good practice, we want to make sure that we do peek at these logs to make sure the system is logging certain events and to detect unauthorized access attempts, security breaches or suspicious activities that might be missed by security monitoring tools. Lastly, it's important to note that disabling auditing alone may not be sufficient to move through a system undetected, especially in environments with robust security measures. Attackers often use multiple tactics, such as privilege escalation, cloaking techniques and exploiting vulnerabilities to evade detection and maintain persistence. Now, let's test your knowledge, discuss how disabling auditing can help the team move through a system undetected. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1), [[Active Directory]] (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Analogies:** such as (2)
> **Warnings:** keep in mind (1), note that (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [tutor] (1)

#### [Outlining ways to cover your tracks](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/outlining-ways-to-cover-your-tracks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/outlining-ways-to-cover-your-tracks?u=76281980&t=0)** - [Instructor] After achieving and maintaining access, it's time to exit the system. In this segment, we'll discover some of the ways to clean up evidence and cover any tracks or traces of activity on a [[Linux]] or [[Windows]] machine. Now, once the pen test is complete, the team will need to properly exit the system. Commonly referred to as the cleanup phase, this step involves removing any trace of activity, eliminating tools and artifacts, disabling accounts, and restoring configurations. Completing these steps will preserve the integrity of the system and ensure that no back doors or vulnerabilities remain that could be exploited by a malicious actor. So let's talk about what you'll need to do during this phase. You'll need to remove all artifacts related to the pen test. You should clear any event logs, remove files and directories, kill any processes that were started during your session, clean up registry modifications, and close any network connections made, such as reverse shells and logs that were related to connections. Now, keep in mind that other devices on the network may have picked up unusual activity, but it's really difficult to remove log files and evidence from every device. But let's talk about some of the things we can do
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/outlining-ways-to-cover-your-tracks?u=76281980&t=95)** either manually or by using a tool. Now, one thing you can do on a Windows operating system is I can manually remove the logs that I created. Now, I'm in the event viewer, and if you take a look, if I drop this down, I'll pull it back up and drop this down, and there you see the different logs, and then I'll go to the security log. Now, over here, I can just simply say clear log. And here it says I can save the contents before clearing it, but I'll just say clear, and it will take away all the logs. Now, don't worry, the log will repopulate itself in a very short time. In addition, you might also need to modify keys and values in the registry. Now, once you get into the registry, you'll need to drill down to the value that you want to change and then modify the value. For example, I'll drop down the local machine, software, and you can see you need to identify exactly where it is that you need to modify, but use caution, as making an incorrect modification can lead to system insecurity. Now, on a Linux machine, you can delete files and directories using the remove command for files, and remove directory for directories. Now, if you've entered some commands, you'll want to go back in and erase the command history and then set it back to zero
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/outlining-ways-to-cover-your-tracks?u=76281980&t=189)** so there's no trace that you were there. In this case, you would just go in and issue the command "export HISTSIZE=0" and that will go back through and erase any of the history, and set it back to zero. We could even go to the extent and shred the history file, which overwrites the history file with zeros. And using this command will shred it completely. Now, one tool that we can use to clean up nearly all traces of evidence is the [[Metasploit]] meterpreter, which runs in memory on the system. And this helps to avoid detection by any anti-malware and antivirus. While there are plenty of options and commands available, here are just a couple of tasks that you might complete. For example, the clear everything command on a Windows machine will wipe the system, security, and application logs, and there's your command. In addition, we can delete keys and values in the registry using the following commands. Now let's test your knowledge. Outline some of the ways to clean up evidence and cover any tracks or traces of activity on a Linux or Windows machine. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Linux]] (3), [[Metasploit]] (1)
> **Analogies:** for example (2), such as (1)
> **Prerequisites:** you'll need (3)
> **UI Navigation:** go to (2)
> **Warnings:** keep in mind (1), caution (1)
> **Env Vars:** histsize (1)
> **Speakers:** - [instructor] (1)

#### [Summarize the course and what's next](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/summarize-course-and-what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-system-hacking-24451006/summarize-course-and-what-s-next?u=76281980&t=0)** - [Narrator] Thank you for watching "[[Ethical Hacking]]: System Hacking." In this course, I reviewed ways to obtain a password and then, once obtained, ways to escalate privileges and execute applications. I covered spyware, how to capture screen activity and keystroke loggers, and reviewed ways to hide in plain sight using alternate data streams and steganography. Finally, I outlined ways to maintain persistence and cover your tracks while avoiding detection. If you're interested in learning more, please check out the other courses in our library. New content is added all the time. If you're interested in learning more about packet analysis, check out my learning path, improve your [[Wireshark]] skills. If you're interested in becoming an ethical hacker, be sure to watch the [[Representational State Transfer (REST)|rest]] of the courses in the series. You might also want to see what my colleague, Malcolm Shore, has for you on his homepage. Keep learning, I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1), [[Wireshark]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Lisa Bock]]

## Resources

- Exercise files available

## Skills Covered

- Penetration Testing
- Ethical Hacking

## Path Context

### In [[Become an Ethical Hacker]]
← [[Ethical Hacking- Vulnerability Analysis]] | **6 of 19** | [[Ethical Hacking- The Complete Malware Analysis Process]] →

## Appears In

- [[Become an Ethical Hacker]]

## Related Courses

_Courses sharing skills:_

- [[Stealth Penetration Testing with Advanced Enumeration]] — Penetration Testing, Ethical Hacking
- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Penetration Testing, Ethical Hacking
- [[Offensive Penetration Testing]] — Ethical Hacking
- [[Penetration Testing Essential Training]] — Penetration Testing
- [[Burp Suite Essential Training]] — Penetration Testing

---

[↑ Back to top](#)