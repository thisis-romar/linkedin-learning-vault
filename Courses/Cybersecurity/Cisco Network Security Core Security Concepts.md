---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: cisco-network-security-core-security-concepts
url: "https://www.linkedin.com/learning/cisco-network-security-core-security-concepts"
level: Intermediate
updated: 11/18/2024
learners: 22167
skills:
  - Network Security
  - Cisco Networking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHwk3F66wSmOw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1606333471779?e=2147483647&amp;v=beta&amp;t=Pk-jiBW5VG3p_Oxg_gVlyfsq4i2fpiuHomBg60kuMpw"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Cisco Network Security- Safeguarding Network Integrity and Data]]'
next_courses:
  - '[[Cisco Network Security- Secure Access]]'
path_nav: '[{"path":"Cisco Network Security- Safeguarding Network Integrity and Data","position":1,"total":7,"prev":null,"next":"Cisco Network Security- Secure Access"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/network-security
  - skill/cisco-networking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cisco%20Network%20Security%20Core%20Security%20Concepts.md)

![Cisco Network Security Core Security Concepts](https://media.licdn.com/dms/image/v2/C4E0DAQHwk3F66wSmOw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1606333471779?e=2147483647&amp;v=beta&amp;t=Pk-jiBW5VG3p_Oxg_gVlyfsq4i2fpiuHomBg60kuMpw)

# Cisco Network Security Core Security Concepts

> Protect your network from common security threats. In this course, instructor Lisa Bock helps equip network administrators with a foundational understanding of security concepts in relationship to Cisco networks. Lisa covers essential security terms and discusses common security threats such as active and passive attacks, social engineering, and malware. She reviews cryptographic techniques such a

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts) | Intermediate | 22K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Defending the network](#defending-the-network)
  - [What you need to know](#what-you-need-to-know)
  - [Preparing for the CCNA exam](#preparing-for-the-ccna-exam)
- [**1. Security Principles**](#1-security-principles) (9 videos)
  - [Secure network overview](#secure-network-overview)
  - [Security services](#security-services)
  - [Utilizing SIEM technology](#utilizing-siem-technology)
  - [Learning security terms](#learning-security-terms)
  - [Staying informed](#staying-informed)
  - [Network security domains](#network-security-domains)
  - [Zone defense](#zone-defense)
  - [Challenge: Create a security policy](#challenge-create-a-security-policy)
  - [Solution: Create a security policy](#solution-create-a-security-policy)
- [**2. Common Security Threats**](#2-common-security-threats) (7 videos)
  - [Reviewing security services](#reviewing-security-services)
  - [Attacking the network](#attacking-the-network)
  - [Social engineering](#social-engineering)
  - [Identify malware](#identify-malware)
  - [Data loss prevention](#data-loss-prevention)
  - [Challenge: Understanding botnets](#challenge-understanding-botnets)
  - [Solution: Understanding botnets](#solution-understanding-botnets)
- [**3. Cryptography**](#3-cryptography) (6 videos)
  - [Cryptographic concepts](#cryptographic-concepts)
  - [Describing symmetric encryption](#describing-symmetric-encryption)
  - [Asymmetric encryption](#asymmetric-encryption)
  - [Protecting integrity using a hash function](#protecting-integrity-using-a-hash-function)
  - [Key exchange](#key-exchange)
  - [Public key infrastructure](#public-key-infrastructure)
- [**4. Describe Network Topologies**](#4-describe-network-topologies) (7 videos)
  - [Campus area network](#campus-area-network)
  - [Cloud and wide area network](#cloud-and-wide-area-network)
  - [Data center](#data-center)
  - [Small office home office (SOHO)](#small-office-home-office-soho)
  - [Securing a virtual environment](#securing-a-virtual-environment)
  - [Challenge: Cost of a data breach](#challenge-cost-of-a-data-breach)
  - [Solution: Cost of a data breach](#solution-cost-of-a-data-breach)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Defending the network](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/defending-the-network-hiya?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/defending-the-network-hiya?u=76281980&t=0)** - [Instructor] [[Cybersecurity]] specialists are one of the most in-demand jobs today. Organizations need employees with specialized security knowledge. In this course I'll cover security principles such as the CIA Triad, common security threats such as social engineering, malware, and active and passive attacks. I'll review cryptographic techniques such as encryption, hashing, and digital signatures along with describing various network topologies such as a campus area network, wide area network, and virtual environments. Hello. My name is Lisa Bock and I'm a security ambassador. I am super excited to bring you this series on CCNA [[Network Security]] and this section on security concepts so that you can improve your skills in configuration and maintenance of Cisco devices to maintain the confidentiality, integrity, and availability of an organization's infrastructure. Are you ready? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (1), [[Network Security]] (1)
> **Analogies:** such as (4)
> **Env Vars:** cia (1), ccna (1)
> **Speakers:** - [instructor] (1)

#### [What you need to know](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/what-you-need-to-know?u=76281980&t=0)** - [Instructor] The potential for employment in any number of [[Cybersecurity]] related jobs is exploding. This course is an intermediate level course for network administrators, engineers, managers, students, and anyone with an interest in learning about the [[Network Security]] component of the CCNA Exam. Participants should have a solid knowledge of networking fundamentals, devices, and cables, along with various topologies and have completed CCNA training prior to starting this course. I'll discuss and demonstrate the main ideas of the CCNA Network Security component, which will help you as you prepare for the CCNA Certification Exam. However, the course is also appropriate if you aren't taking the exam and are simply looking for a solid overview of organizational end device security. I referenced websites throughout the course. You can follow along if you'd like to and visit the pages. The case sensitive short URL will show in the lower third of the page. Keep in mind though, after time, links and content will change. In addition, I'll supply a list of URLs that I have used in the course. You can find these in the exercise files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (2), [[Cybersecurity]] (1)
> **Env Vars:** ccna (4), url (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Preparing for the CCNA exam](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/preparing-for-the-ccna-exam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/preparing-for-the-ccna-exam?u=76281980&t=0)** - [Narrator] The CCNA Exam tests the candidates' knowledge and skills, related to network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability. The CCNA Exam is an excellent addition to a career in information technology. This learning path covers the components included in the security fundamental section of the exam. You can find this and more detailed information, here at this website.

> [!info]- Semantic Content
>
> **Env Vars:** ccna (2)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)


### 1. Security Principles

[↑ Back to Table of Contents](#table-of-contents)

#### [Secure network overview](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=0)** - [Narrator] We live in an exciting yet challenging time. Administrators face numerous challenges to protect the infrastructure. Network environments are complex and can include mobile phones, [[Cloud Computing]], virtualization, social media, and the [[IoT|internet of things]]. Coupled with the challenges, cyber threats are becoming more aggressive, complex, and sophisticated. Attackers range from the disgruntled employees to crime rings, and nation states. Network attacks include cyber crime, hactivism, extortion, and espionage. Every organization and government is a potential target. The attacks are highly organized by skilled and motivated players, and have resulted in exposure of massive amounts of sensitive data such as credit cards, medical records, intellectual property, passwords, and state secrets. Networks are critical to an organization's success for any business, both large and small. Today our internet-based ecosystem demands that business networks are available nearly 100% of the time. Business networks must be able to adjust to changing traffic demands, and maintain constant response times. In addition, they have to be [[Agile Development|agile]], to respond to unexpected security incidents. Whether you're expanding a current network,
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=95)** or designing a completely new infrastructure, today's networks require careful planning. Network design goals include the following. Networks need to be available nearly 100% of the time. A single failure should not significantly impact network performance. The network should grow to meet the ever changing demand for more hosts on the network. No matter how good the design of the network is, the network administrator and security specialist must be able to manage the complexity of the network. Design security from the onset. Careful planning includes consideration for all network resources including security devices, access control lists, and [[Intrusion Detection]]. These are critical to safeguarding network resources. Knowing about all the possible risks that can occur we can see that the network is a pretty insecure environment. To meet the daily requirements is becoming very complex, and many times on a limited IT security budget. As a result, network administrators place security as a top priority. Safeguards include administrative, physical and technical controls that an organization must incorporate into the security compliance plan. Everyone plays a role in keeping an organization's information and security safe and secure.
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=192)** In addition to the logical controls, physical security should also be a consideration. Once someone has access to a physical device, this is a game changer. Physical access will allow someone to change a password and obtain full access to the network. Physical security involves preventing theft, destruction, or tampering of computers, network [[Hardware]], or devices. Examples include cutting a fiber-optic backbone, theft of a computer or handheld device, or removing RAM or components from a desktop or a laptop. Obvious safeguards include making sure to restrict access to wiring closets and data centers. And in addition high security areas should have additional methods such as security cameras, biometrics, and visible signage. It's important to note, to keep in mind that we can't completely eliminate security risks. We can only reduce overall risk. A layered approach is essential, as no single product, device or software application can make an organization secure. [[Network Security]] comes from a combination of [[Microsoft Products|products]], services, best practices, and well-written security policies. Companies are hyper vigilant and recognize the importance of a secure network.
>
> **[4:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=286)** However, the landscape changes often. As a result, the networking team should complete an annual network assessment in order to determine whether the requirements of the network are in line with the business goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (1), [[IoT|Internet of things]] (1), [[Agile Development|Agile]] (1), [[Intrusion Detection]] (1), [[Hardware]] (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Env Vars:** ram (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [Security services](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=0)** - [Instructor] Network administrators have a lot of responsibility in order to keep networks up and operational. One of the fundamental principles of providing a secure system is that of ensuring confidentiality, integrity, and availability. Also called the CIA Triad, it's a widely recognized information assurance model. We ensure confidentiality, integrity, and availability by using various techniques that include logical controls, such as access control lists and [[Intrusion Detection]] systems. In addition, we use various cryptographic techniques, such as hashing, digital certificates, and encryption. Confidentiality is assurance of [[Data Privacy]] and protection against unauthorized disclosure. Confidential information can include personally identifiable information, such as social security, credit card information, or account numbers, or business information, such as [[Financial Data]], employee records, and trade secrets. An example of a violation of confidentiality would be a hacker gaining access and reading government emails. It's not always evident that an organization has suffered a data breach. Therefore, individuals and businesses should take steps to ensure confidentiality by allowing only authorized individuals, processes, or devices to read data.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=98)** In order to protect confidentiality, we use access control and encryption. Integrity ensures data has not been changed, destroyed, or lost in an unauthorized or accidental manner. An example of a violation of integrity would be a student going into the gradebook and changing his or her algebra grade from a C to an A. To protect against violations of integrity, monitor the network for unusual or suspicious activity. Strong audit policy should be in place. Use software intrusion detection systems, such as Tripwire, to monitor checksums for unauthorized changes. In order to protect integrity, we use access control and a hash function. Availability is where services are accessible and available to authorized users or processes in an information infrastructure. A denial-of-service attack is an attack against availability, which sends multiple requests to a system in an effort to interrupt or suspend services to legitimate users. A simple denial-of-service attack is not effective. A distributed denial-of-service attack is more effective, as it uses armies or botnets to launch an attack. I've gone to this website for Kaspersky and we can see the many attacks using botnets, which effectively create a denial-of-service attack.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=193)** In order to protect availability, use a layered approach to ensure data availability, such as keeping systems current and upgrading when necessary. The clients on our network expect availability of applications and services. To prevent data loss, back up systems regularly and store in an offsite location. Control access to data by assigning permissions to folders and files only to authorized users and to only users that need access. That means do not grant permission to a user who doesn't need access. Every day, more and more services are being added to the internet, making [[Network Security]] a constant challenge. A secure network will protect the organization and provide a competitive edge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (2), [[Data Privacy]] (1), [[Financial Data]] (1), [[Network Security]] (1)
> **Analogies:** such as (6)
> **Env Vars:** cia (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Utilizing SIEM technology](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=0)** - [Instructor] An enterprise network has many devices, applications, and systems that generate logs, as we can see here in this graphic at [cisco.com](https://cisco.com). In this segment, we'll discover how SIEM technology can provide insight on network activity and security events. First, let's talk about audit or event logs and why we need help distilling all the data that is generated every day. Audit or event logs provide information on events that have taken place. If we go to [[NIST]], you can read about some guidelines on log management found in Special Publication 800-92, and you can download this by selecting one of the links on the right hand side. Now, I've opened it up and then I scrolled down to the table of contents. And in section two, you can read more about the basics of log management, why logging is important, as well as the challenges in managing logs. Making sense of all log data can be very challenging. For example, I'm here at my Event Viewer, and we can see all of the security events that have been logged on my machine in just a few minutes. Try to imagine all the logs generated throughout the network.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=93)** How do we manage all the components, interfaces, policies, and users on the network? One approach is by using a SIEM system or security information and event management. A SIEM system merges security information management with security event management, and integrates into the overall architecture of the network, and collects, correlates, and acts on security event information. Some of the benefits include [[Continuous Monitoring]], trend awareness, and auditing, correlation of events, which gives historic or [[Real-Time]] perspective and conducts data analysis based on a set of rules, and reduces the volume of event data by consolidating duplicate event records. Let's step through the process. A SIEM system will collect logs and events from different systems, then normalizes and maps the data to integrate into a central system for analysis, so it can detect any anomalies. If detected, the system will alert the administrator generally via a digital dashboard that allows a graphical visual of reports and alerts. Here we see an example of what you might see in a SIEM system.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=188)** Now, once aggregated, the SIEM system can help speed the detection and reaction to security events by providing details on the source of suspicious activity, and that includes user information, such as name, authentication status, and location, device information, such as manufacturer, model, operating system version, MAC address, and location, and it can provide the health of the device, such as compliance with the security policy to make sure the device has updated antivirus files and operating system patches. For example, we see a log entry from an Oracle database system. The log is for connection attempt from a host computer and provides the time and date when the database server received the request. It also indicates the user, max67, the IP address, and the port number from where the request originated. However, in another log file, we see a duplicate login from max67 from another IP address. This will throw an alert. It's then up to the administrator to determine whether this is normal business activity or a possible attack. SIEM technology provides the network administrator and security analyst with a comprehensive view
>
> **[4:43](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=283)** of an organization's network activity and security events to facilitate the early detection and prevention of a potential attack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (1), [[Continuous Monitoring]] (1), [[Real-Time]] (1)
> **Env Vars:** siem (7), nist (1), mac (1)
> **Analogies:** such as (3), for example (2), imagine (1)
> **CLI Commands:** make (1)
> **URLs:** [cisco.com](https://cisco.com) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Learning security terms](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=0)** - [Instructor] To reduce the risk to information assets, an organization starts with a well-defined security plan in line with the organization's security objectives. The security team creates policies to execute and enforce the plan. Technical, operational and management, security strategies, or controls oversee adhering to the policies. Management uses administrative techniques and deals with planning, vulnerability assessments, and [[Penetration Testing]]. Operational includes the day-to-day operations such as physical and environmental protection, awareness and training. Technical controls use technology and deals with access control, audit and [[Accountability]] and malware prevention. When developing security strategies, it's important to understand several terms, assets, risks, threats, and vulnerabilities. Organizations seek to protect assets, which are tangible and intangible items that an organization assigns a value. Tangible assets include anything you can touch such as servers, printers, or computers. Intangible assets include trade secrets, [[Databases]] and company records. Risk analysis is important for budgeting for security. Manage risk by evaluating and prioritizing ,
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=98)** and address the most immediate challenges first. Risk is a chance that something unexpected will happen. Risks include business disruption, financial loss, or even loss of life. Risk is a function of threats and vulnerabilities according to a formula, risk equals threats times vulnerabilities. Threats may exist, but if there's no vulnerability, there will be no risk. Correspondingly, if there's a vulnerability but no threat, there won't be a risk. A threat is something that might happen and can range from innocent mistakes by employees, to natural disasters, which in general are difficult to control. Threats include disgruntled employees, terrorists or nature, and can exploit a vulnerability intentionally, or accidentally and obtain damage or destroy an asset. A vulnerability is a weakness in the system and can include unpatched systems, human error, software flaws, or weak or missing passwords. A threat can exploit a vulnerability to gain unauthorized access to an asset. Countermeasures are methods we employ to reduce vulnerabilities, which reduces overall risk. Risk management includes principles and practices related to asset protection and [[Security Management]].
>
> **[3:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=194)** Although we've touched on some of the security terms, there are many others. I'm at this website, SANS, securing the human, where it lists a number of [[Security Awareness]] terms and definitions. This is a nice site that you can go to and at least test yourself on some of the more commonly known security terms to build your own awareness.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (1), [[Accountability]] (1), [[Databases]] (1), [[Security Management]] (1), [[Security Awareness]] (1)
> **Definitions:** is a  (4)
> **Analogies:** such as (2)
> **Env Vars:** sans (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Staying informed](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=0)** - [Host] Security organizations help security specialists stay ahead of common threats by offering research events and resources to prepare for an industry certification. In this segment, we'll visit some of the security websites to help you keep up to date on security information and news. Today's complex networks pose unique challenges in managing information. The job of a [[Network Security]] specialist is to stay ahead of common threats by attending training, participating in security organizations, and checking security websites on a daily basis. security organizations have an online presence where you can obtain current research information, see what events they'll be holding and get an industry certification. I want to share with you a few of the commonly available websites that you might find informative. Let's start with [mitre.org](https://mitre.org). Mitre is a nonprofit that operates multiple federally funded research and development centers, and provides innovative, practical solutions for some of our nation's most critical challenges in defense and intelligence, Homeland Security and [[Cybersecurity]]. [Sans.org](https://Sans.org) is the go-to organization
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=96)** for information security training, certification and research. The Center for Internet Security is where you can go to learn about cybersecurity best practices, tools, and threats. The Open [[Web Application Security]] project, or [[OWASP]] is a free and open source security site that provides guidance on best practices to secure web infrastructures. They publish a list of top 10 vulnerabilities and offer tools, guides, and testing methods, along with communities to exchange and share information. [ISC2.org](https://ISC2.org) is where you can go to find out more information in industry leading cybersecurity certifications. Let's take a look. If you drop down the certification menu choice, you can see all of the available certifications, including SSCP, for IT administration, for management and support for the overall security posture and policies of an organization, CCSP for [[Cloud Security]] to properly procure, secure and manage cloud environments and CISSP for leadership and operations to effectively design, develop,
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=190)** and manage the overall security posture of an organization. As we can see, there are a number of organizations that help security specialists stay ahead of common threats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (3), [[Network Security]] (1), [[Web Application Security]] (1), [[OWASP]] (1), [[Cloud Security]] (1)
> **Env Vars:** owasp (1), isc2 (1), sscp (1), ccsp (1), cissp (1)
> **URLs:** [mitre.org](https://mitre.org) (1), [sans.org](https://sans.org) (1), [isc2.org](https://isc2.org) (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **Speakers:** - [host] (1)

#### [Network security domains](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=0)** - [Instructor] Whether you're dealing with a large, multinational company, or a small business, [[Information Security Management]] encompasses the entire organization. As a security specialist, there are many functions that you and many others will need to complete throughout your day. That includes monitoring your network, reduce the potential for attacks, and implement effective security policies. One of the frameworks for organizational security is ISO/IEC 27002. If we go to this webpage we can see a graphic of all the domains. Let's scroll down. If we click on it, we can get more information. But I'm going to summarize all of those domains for you. Let's take a look. Information security policies define the rules of proper conduct. We also want to implement policy, such as remote access, internet use, copyrighted works, passwords, and backup. Organization of information security includes information security governance, and policy on mobile devices and teleworking. [[Human Resources (HR)|Human resources]] security addresses policies and procedures related to the employees in an organization. Asset management and inventory of information assets
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=96)** includes handling media appropriately and [[Data Classification]]. Now what do we mean by data classification? All data is not the same. An organization should classify data in line with what effect a breach would have on the organization. Government and military use a classification system. For top secret, unauthorized disclosure could cause exceptionally grave damage to national security. Secret, unauthorized disclosure, could cause serious damage to national security. Confidential is where the unauthorized disclosure could cause damage to national security. It's worth noting, unclassified is not a classification. This is simply information anyone can view. A business can classify data in the following manner. Confidential, private, sensitive, and public. We also have access control. Access control describes a restriction of access rights to network system applications, functions, and data. And cryptographic controls includes methods to ensure confidentiality, authentication and integrity, along with key management. Physical and environmental security
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=189)** is in order to secure areas against unauthorized access. Operations security includes malware protection, backup, [[Vulnerability Assessment]], and auditing. Communications and operation network segregation and systems, where we take our networks and secure the data while it's in transit. System acquisition, development and maintenance; this is in order to control change to applications and operating systems, and design security into applications. We need to remember our suppliers. Supplier relationships protect the organization's information throughout the supply chain, and includes periodic monitoring and auditing of the data flow. We also have incident management and business continuity. And compliance; this is the process of ensuring compliance with information security policy standards and regulation. As you can see, organizational security encompasses the entire organization; processes, policies, and people. ISO/IEC 27002:2013 is a framework that is applicable to all types of organizations that specify [[Network Security]] domains
>
> **[4:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=284)** that provide a common basis for standards and effective [[Security Management]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Classification]] (2), [[Information Security Management]] (1), [[Human Resources (HR)|Human resources]] (1), [[Vulnerability Assessment]] (1), [[Network Security]] (1)
> **Env Vars:** iso (2), iec (2)
> **UI Navigation:** go to (1), scroll down (1), click on (1)
> **Ports:** :2013 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Zone defense](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=0)** - [Instructor] When thinking about a network, some areas are more trustworthy than others. In a network we segment each part of the network by logical zones where we can identify the level of trust for each zone. Firewalls inspect and filter traffic according to a set of access control rules. That either allow or deny certain types of traffics between zones, when designing a network, a perimeter network is the boundary between the trusted and untrusted network. This allows an organization to deploy public services such as email and [[Web Servers]] while isolating the internal network and provides an additional layer of protection, in this graphic we see a logical drawing of the outside network or internet, the inside or LAN and then we see in the center the demilitarized zone or DMZ. Isolation on a network occurs by configuring a demilitarized zone, or screen subnet. Where the firewall filters traffic between the outside world and the [[Local Area Network (LAN)|local area network]]. We call it a screen subnet because it's a separate subnetwork as we see from the IP address. The DMZ is where you house essential services such a mail and web servers that must have a public interface, the front-end firewall should allow
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=95)** traffic destined to the DMZ only and the back end or internal firewall should allow traffic from the DMZ to the internal network. For a zone-based firewall configuration, we create zones and assign a trust level on an interface according on how much you trust the traffic from that interface, level zero is the least trusted and lever 100 is the most trusted. The outside is untrusted, it's the wild, untamed internet so no trust. Security is set at zero. In the DMZ, this is the zone that resides in between the trusted and untrusted zones, security is set between one and 99. The administrator can set the security level for the DMZ at 50. The inside is the trusted network. This is the local LAN side of the firewall which is the secure, internal portion of a network. Typically set at 100 and trusted. On the router we configure and name the security zones. By default no traffic can freely flow from an untrusted network to a trusted network without checking the access control list. For example we don't allow any traffic to freely flow from the outside network to the DMZ
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=190)** until the firewall inspects the traffic. We don't allow any traffic to freely flow from the DMZ to the inside until the firewall inspects the traffic. We allow traffic to freely flow from the inside to the DMZ and we allow traffic to freely flow from the DMZ to the outside. A perimeter network is the boundary between the trusted and untrusted network. For a zone based firewall configuration we create zones and assign a trust level on each interface according to how much you trust the traffic from that interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (2), [[Local Area Network (LAN)|Local area network]] (1)
> **Env Vars:** dmz (10), lan (2)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a security policy](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-create-a-security-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-create-a-security-policy?u=76281980&t=0)** - [Instructor] I'm here at this webpage at [sans.org](https://sans.org), and here's where we can see security policy templates. For this challenge, download and open the Acceptable Use Policy, then I want you to scroll through to see the many elements of the policy. Next, I want to ask you, take a look at that site, what other policies would be helpful? For example, what is a clean desk policy? What is a remote access policy? And then finally, knowing that the templates are available, is there any reason why an organization wouldn't create general polices? This challenge should take about five minutes, good luck.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **URLs:** [sans.org](https://sans.org) (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a security policy](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=0)** - [Instructor] I'm here at [sans.org](https://sans.org) and we can take a look at some of the security policy templates. Now, the first thing I wanted you to do was download and open the acceptable use policy. And here it is. This talks about what it is. It defines acceptable use of equipment and computing services. So I opened it in [[Microsoft Word|word]]. Now, the first thing that you can read is that it was last updated in 2014. Now that was quite awhile ago. However, most of the information is still applicable and then it gives an overview and what the purpose and the scope. But within the document, you can insert your own company name. And here it talks about general use and ownership. Down below, it defines security and proprietary information. And again, this is something you would want to look at to make sure it was in line with your company's requirements. Then down below is basically what is unacceptable use. The following activities are in general prohibited. At this section, it says the list below are by no means exhaustive. But it does outline some of the activities that are prohibited such as accessing data, a server or an account for any purposes other than conducting company business. Introduction of malicious programs
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=93)** into the network or server and port scanning or security scanning. And then down below, there's more information about policy compliance and this is what you could use to provide some teeth and what would happen if you did violate this. Related standards, policies and processes and those would be also something that you'd want to include. And then some terms. So then take a look. I wanted you to take a look at what other policies that would be helpful. And as you can see, there are plenty. We can scroll through and see a wide range of policies. For example, what is a clean desk policy? And I'll drop this down. Defines the minimum requirements for maintaining a clean desk. We're sensitive in critical information about our employees, intellectual property, customers or vendors is secure and locked in areas out of sight. Now you might think, do I have to define this? Well, in some cases you should. Just so that there's no confusion. And what is a remote access policy? Is defined standards for connecting to the organization's network from any host or network external to the organization. Now, the last question is knowing that the templates are available, is there any reason why an organization wouldn't create general policies? And the answer is there isn't any reason. So it's in your best interest to become familiar
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=186)** with some of these policies so that you can provide those for your employees to provide a secure organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **URLs:** [sans.org](https://sans.org) (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Common Security Threats

[↑ Back to Table of Contents](#table-of-contents)

#### [Reviewing security services](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=0)** - [Instructor] The two main types of attacks in a computer system are passive attacks, such as sniffing traffic, and active, such as releasing malware or creating a denial of service. An attack can be against any of the security services, confidentiality, integrity, availability, or authentication. Let's take a look at each of these. Confidentiality is the protection of data against unauthorized disclosure. For example, if you're in a medical facility, you wouldn't want unauthorized individuals looking at patient information. Integrity is the protection of data from unauthorized modification. For example, if someone changed his or her salary from $12 an hour to $20 an hour, that would be a violation of integrity. Availability is ensuring data and services are available to authorized users. A denial-of-service attack locks out legitimate users and it's an attack against availability. Authentication is assurance that the communicating entity is who they say they are by verifying the identity of a user or a device. Now, hackers use various spoofing methods to gain access to privileged information. Defend against spoofing attacks by using authentication techniques. To reduce the overall risk to a network, security specialist
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=95)** should not only understand vulnerability scanning, but also [[Ethical Hacking]] skills as well. On any network, there are passive and active attacks. As we can see in this live attack map, monitor and defend against attacks in a layered approach with various methods to protect against passive and active attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1)
> **Analogies:** such as (2), for example (2)
> **Speakers:** - [instructor] (1)

#### [Attacking the network](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=0)** - [Instructor] Passive attacks include something that you might not think is dangerous, such as eavesdropping using traffic analysis or tapping, which uses a network adapter card and promiscuous mode to capture all network packets on the [[Local Area Network (LAN)|local area network]] and examine the contents. Passive attacks include a more aggressive form of an attack called a reconnaissance attack. In this case, an attacker is trying to find out information about the network. Scanning techniques can vary, but there are some common scans and each has a different objective. Most likely an attacker will do a ping sweep, which is the set of ICMP echo packets that are sent to a network of machines that are usually specified within a range of IP addresses to see which ones will respond and are alive. After the attacker determines which ones are alive and responding, the attacker will then do a port scan, which identifies TCP and UDP ports on a live target system, looking for services along with potential vulnerabilities. Once identified, the intruder can plan an attack on any weak services that he or she finds. Passive attacks are hard to detect. Someone may be monitoring transmissions and possibly capturing authentication information,
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=95)** such as usernames and passwords or router advertisements. This can result in the disclosure of information to an attacker without the consent or knowledge of the user. Active attacks include when an attacker tries to break in and possibly alter the integrity of the system by stealing or modifying information, or introducing malicious code, such as viruses, worms, or Trojan horse. Denial of service is an attack against availability, which sends out multiple requests to a system in an effort to interrupt or suspend services to legitimate users. A simple denial of service attack is not effective. A distributed denial of service attack is more effective, as it uses armies or botnets to launch a more effective attack. Both can result in the system being overwhelmed and crashing or consuming all resources, such as processing, memory, or bandwidth. In a buffer overflow, the attacker sends out more information to an application than is expected. Buffers can hold a finite amount of data. The extra information can overflow and overwrite into adjacent buffers. Buffer overflows are common, as programmers fail to check and validate his or her source code, and damage can range from unexpected errors
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=192)** to very bad results, such as a hacker gaining administrative access to the system and executing malicious code. In a password attack, this is where an attacker tries to obtain the password stored in a network account database or password protected file. Password attacks can use brute-force attack methods, rainbow table attacks, or packet sniffers. With passive attacks, use prevention and detection. In the case of prevention, we'd want to use encryption. By using encryption, if someone were to capture the data, they couldn't read it unless they had a key. And detection, use [[Intrusion Detection]] systems to monitor for ping sweeps and port scans. With active attacks, defend against active attacks by using encryption, whether the data is at [[Representational State Transfer (REST)|rest]] or in motion. If someone were able to obtain the data, they couldn't read it unless they had a key. And policies, this may be as simple as frequent changes of passwords and strength of passwords. Physical controls, these may be the most overlooked [[Forms]] of security. Controls include locks and smart cards. And device security, such as intrusion detection systems, intrusion prevention systems, firewalls,
>
> **[4:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=286)** and switch port security. To reduce the overall risk to a network, security specialists should not only understand vulnerability scanning, but [[Ethical Hacking]] skills as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (2), [[Local Area Network (LAN)|Local area network]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Forms]] (1), [[Ethical Hacking]] (1)
> **Analogies:** such as (6)
> **Env Vars:** icmp (1), tcp (1), udp (1)
> **CLI Commands:** find (1)
> **Exercise Files:** source code (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Social engineering](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=0)** - [Instructor] Social engineering is a deception that relies on influence, social skills and human interaction to obtain information about an organization or computer system. Logical network defenses, security appliances and antimalware protection get stronger everyday, over time industry has strengthen our defenses and as a result hackers look to penetrate a softer target, the people in the organization, including employees, contractors and customers by using a social engineering attack. Scam artists work on our emotions and many times launch an attack that might promise gifts and prizes, important information or threaten to take action if you do not reply. Cyber criminals achieve social engineering in many ways that include phone, online, [[Phishing]], farming, pop ups, fake websites, and simple persuasion. Phishing sends out massive emails. Phishing emails bait victims to click to claim a prize, sign up for a special program, or sign in to check account information. The message appears urgent and requires a quick response. One in 10 individuals will respond. Phishing is very dangerous as over 90% of ransomware attacks start out with a phishing email.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=95)** A spear phishing attack is more specific to an organization, unlike just throwing out a bunch of emails and hoping we're going to get a response spear phishing is a more targeted approach. In that case, in order for a spear phishing attack to be successful, a hacker uses a legitimate email address list, the hacker will need to harvest or generate the directed list prior to the attack. There are many working parts to a social engineering attack but the heart of this is the victim. Other components include motive and that's why cyber criminals use social engineering. Reasons include obtaining money, gaining access to a system or causing damage to a system, the method is how cyber criminals achieve social engineering using human intervention or technology or sometimes a combination of both. The hacker themselves must be able to pull off a believable hoax, and the tools used may include email, social media, web pages, phishing or farming, and stimulus, what's the best way to inspire someone to give up their information? Using fear, need for compliance or appeal to his or her need for friendship, acceptance or social validation. Social engineering is one of the hardest threats to defend against, a skilled hacker will most likely
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=191)** try to use social engineering before spending any time on more difficult methods to obtain a password, such as password cracking to obtain access to a system. Organizations can thwart social engineering attacks by employing user education and strong spa filters to prevent deceiving emails from getting through to the employees. Many vendors offer tools to test employees, but you can test yourself, go to this website on SonicWall, and here you see a SonicWall phishing IQ test. This is a good test, 'cause as I said, a large percentage of ransomware attacks begin with a phishing email.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Phishing]] (11)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Identify malware](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=0)** - [Instructor] Malware is malicious software. A malware attack can infiltrate the network and allow unauthorized access to critical information. We categorize malware in one of five different classes. Spyware records keystrokes and other activity, and sends it to a collection site. Trojans appear as useful programs, such as games or utilities, but contains malware that allows hackers to take control of the victim's computer remotely. Rootkits provide a backdoor for illegal access to a host. Viruses can self-replicate yet need a way to propagate to other hosts. And worms are a self-propagating virus that can spread on its own. Viruses and worms are two common malicious programs. A virus is like a human virus, in that it can self-replicate and spread to other programs within the system. The results can be as simple as a new icon on the desktop, or more serious results, such as disabling antivirus or destroying files. A virus must have a way to travel to another host. A classic way to propagate a virus is via an email attachment. Today it's common to find malware on USB flash drives which are inexpensive and convenient. But a worm is a virus subclass that has the ability
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=97)** to spread without any help from a transport agent such as an email attachment. This ability makes a worm more dangerous, as they can have devastating effects on all hosts on the network. The basic phases of an attack by a virus or a worm, are as follows. Probe, the malware identifies weak targets. Penetrate, the malware transfers malicious code to the target. Persist, the malware attempts to remain on the target system. Propagate, the malware attempts to extend the attack to other targets. And paralyze, the malware is able to cause damage to the system. Many users are unaware of a virus or worm's frenzied replication until the virus or worm consumes system resources such as memory, processing, bandwidth. All of which can slow or even halt tasks. We see a great shift in malware. These went from the early days of script kiddies to cybercriminals, whose main focus is profit. Businesses have lost billions to viruses, worms, spyware, and [[Phishing]] attacks. Yet at the same time, a global cybercriminal business has grown exponentially. Because of the evolution of malware,
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=192)** current malware has the properties of a virus, worm, Trojan, and rootkit all bundled up in a single package to enable survival and dissemination. Getting malware is fairly easy, as most of the time we carelessly visit a webpage or click on a link from a friend, and expose the system to malicious activity. Many people feel that malware protection is sufficient, when in fact, it's hard to keep ahead of the latest threats. Some malware, such as worms and botnets, propagate independently. Others, such as a Trojan, uses a wrapper which wraps the malware in some enticing message, utility or game. Ransomware is a form of malware. Over the years, different types of ransomware has evolved. However, all of them have the same outcome. They hold your computer hostage, until you offer some form of payment or ransom. Ransomware spreads like many other types of malware, via phishing or spear phishing attacks, or other methods to get the victim to click on a link that might be on a webpage, or social media that takes you to the attacker's website to download a file. Ransomware is dangerous. Here we see a graphic on how quickly wannacry
>
> **[4:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=286)** infected tens of thousands of computers. Don't let this happen to you. Protect against malware. Use strong spam filters, use anti-malware protection, and back-up and store sensitive files in a remote storage facility. And most importantly, think before you click.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Phishing]] (3)
> **Analogies:** such as (6)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Env Vars:** usb (1)
> **Speakers:** - [instructor] (1)

#### [Data loss prevention](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=0)** - [Voiceover] Data loss prevention is ensuring that there is no data exfiltration, which is data that leaves the organization without authorization. A network specialist must be aware of the many vectors of data exfiltration and ways to prevent data loss. Whether data is at [[Representational State Transfer (REST)|rest]] or in motion over the network, there are many vectors or methods whereby data can leave the organization. Vectors can include storage devices, email, missing or improper access controls, [[Cloud Storage]], and malware. Data loss can occur either by accident, or as a result of a cyberattack. Storage devices include flash drives, external drives, and memory sticks for phones and cameras. The small devices are easily lost or stolen. And many times they don't have any type of password protection or encryption. Email and email attachments both contain sensitive information like customer and personal data along with business information. Someone can intercept and email or even send an email by mistake to the wrong person. Which could lead to data exfiltration. Or the victim might send information to a hacker as a result of a [[Phishing]] or social engineering attack. Email attachments are one of the original methods to send malware, spam, and bogus links, and continue to improve in sophistication. To minimize this attack vector,
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=95)** keep antivirus updated and educate users to use caution when opening attachments. Mobile and other personal devices many times only use one-factor authentication, such as a password or a patterned swipe. If someone were to get ahold of the device, they could gain unauthorized access to the company data. Cloud storage provides a great option for storing company data, the data is not local. However, you should protect it as if it were on the local network by using data encryption and access control. Webpages and pop-ups take advantage of the ability browsers have to access various programming languages such as [[JavaScript]], ActiveX, and macros. When clicked, the malware can install spyware, adware, hijackers, dialers, Trojans, or other malware. The best defense is to stay away from risky websites, online instant messaging, and peer-to-peer file sharing programs. Wireless networks are pervasive in today's world and provides an attractive attack vector. The 802.11 standard or [[Wi-Fi]] is characteristically insecure. Educate clients not to join open access points such as the ones you find in coffee shops and airports. It may be a hacker with a rogue Wi-Fi network used to gain information such as usernames and passwords. How this works is a hacker sets up
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=189)** a rogue access point called a Wi-Fi- Pineapple, Which appears to be a free access point, and gets victims to use the access point when traveling to a website. They intercept the traffic by using a technique called an SSL Strip, and are able to view the communication stream. The most vulnerable attack vector is the user, which is the weakest link in any system. Over 600 million people worldwide have fallen victim to some form of cybercrime. That includes online scams, malware, and phishing attacks, credit card fraud, explicit content, and compromised social networking profiles. Although humans can be our weakest link, steps can be taken to protect your data offline and online. Change your password often and don't use the same password for all sites. Use encryption. Don't click on suspicious links. Use caution when using public Wi-Fi networks. Secure mobile devices. Use access control and strong spam filters. Good practices will help prevent data exfiltration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (4), [[Cloud Storage]] (2), [[Phishing]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[JavaScript]] (1)
> **Analogies:** such as (4)
> **Warnings:** caution (2), be aware (1)
> **CLI Commands:** find (1)
> **Env Vars:** ssl (1)
> **Versions:** 802.11 (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### [Challenge: Understanding botnets](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-understanding-botnets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-understanding-botnets?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-understanding-botnets?u=76281980&t=6)** - [Instructor] I'm here at this webpage, Spamhaus Technology, where we can see a live botnet threats worldwide map, and it shows the IP addresses and the locations of servers used to control computers infected with malware. Now the yellow shows locations with the most intense bot activity and the aqua or the blue underneath shows command and control botnet servers. So this is all about botnets that occur on a daily basis, and I want you to take a little bit of a closer look at botnets. So for this challenge, and we did go to that website, I want you to answer the following questions. What is a botnet? What is a command and control botnet server? What are zombies? And how can you become a zombie or get infected? This challenge should take about five minutes, good luck.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Understanding botnets](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=6)** - [Instructor] Okay. So the first question was, what is a botnet? Now, a botnet is thousands of computers. Now, literally hundreds of thousands and in some cases, millions of computers that are referred to as zombies that are under the control of a botnet command and control server. Think of it as the mothership. Now, why are botnets created? Well, they're used to launch a distributed denial-of-service of service attack or a DDoS, it could also be used for bitcoin mining, sending spam or any other malicious action. Keep in mind, if you have hundreds of thousands of computers under your control, there's a lot of things you can do. So the next question is what is a command and control botnet server? It's also called a C and C. This is what is used to maintain communications with the army and the zombie army can include anything that's computerized including mobile devices, laptops, and [[IoT|Internet of Things]]. And so well, what are zombies? And that's part of the botnet. Well, zombies or bot is the system that's infected by the malware that becomes part of the botnet. And once infected the remote C and C server will send commands to the bot to forward malware or spam or anything else out to other computers on the internet. So how do you become infected
>
> **[1:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=100)** and how do you become a zombie? Well, any other way that you can get malware via email or drive by download or even when downloading a free program that might be part of the package. So you need to be aware of what you're clicking on and what you're downloading. So now I'll take you to two more sites that maybe will give you a little bit more information. This is at Malwarebytes, and there's a little article on the facts about botnets and some more information about how they make money and how you can become part of the botnet. And this article is command and control servers and things you should know. And this is going to give you some information about what a command and control server is. What's a zombie and a little bit of information as to how they work. So I hope you enjoyed that challenge on botnets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT|Internet of things]] (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (1), be aware (1)
> **CLI Commands:** make (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)


### 3. Cryptography

[↑ Back to Table of Contents](#table-of-contents)

#### [Cryptographic concepts](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=0)** - [Instructor] Cyberattacks propagate the news on a daily basis. Reports surface on attackers stealing terabytes of sensitive information, personal data, and compromised emails. Stealing company information and trade secrets is a well-known challenge that businesses strive to protect against, and it can go undetected, as many times companies don't notice any abnormal network activity. On this website, we can see significant data breaches that have occurred over the years. Here we can see data records lost or stolen since 2013, and also some top breaches. I'll scroll down, we'll take a look here at how data records are lost or stolen at the following frequency. Right under this very large number, I want you to take a look at this fact. Only 4% of breaches were secure breaches, where encryption was used and the stolen data was rendered useless. That is why encryption is so important. We use cryptographic techniques to ensure confidentiality, integrity, and authentication of data whether in motion or at [[Representational State Transfer (REST)|rest]]. Data is in motion while traveling through the network, moving from place to place. Data at rest is on a drive, [[Cloud Storage]],
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=95)** or removable media. Today, encryption is one of the most effective ways to secure digital data. Encryption uses a mathematical algorithm and a key to convert data into a scrambled format, which is meaningless unless you have a key. As we discuss [[Cryptography]], you'll hear many terms, such as symmetric, asymmetric, and hashing. There are two main types of encryption, symmetric and asymmetric. Asymmetric encryption is also called public key encryption, and it uses two keys, a public key and a private key. Symmetric encryption is also called conventional encryption. It uses one key, which is called the shared secret key. A hash algorithm is a one-way function that takes a variable-length input and returns a fixed-length output. We use hash functions in password management, digital signatures, and message digests. Encryption and cryptographic techniques can ensure the following, confidentiality, which protects data against unauthorized disclosure. For this, we use encryption. Integrity ensures data has not been changed, modified, or lost in an unauthorized or accidental manner. For this we use a hash function. [[Accountability]], positively identifying an entity
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=191)** in a system, such as signing an electronic contract. For this we use a digital signature. And authentication confirms the identity of a system entity. Here we use a message authentication code. There are some other cryptographic concepts and terms that will include key exchange, digital signatures, certificates, trusted third party, and public key infrastructure. All data, whether at rest or in motion, such as data in cloud storage or traveling across the network, should use some form of cryptographic technique to ensure data confidentiality, integrity, and authentication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[Cloud Storage]] (2), [[Cryptography]] (1), [[Accountability]] (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** such as (3)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Describing symmetric encryption](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=0)** - [Narrator] Whether you're protecting digital communications or data that is stored on a server, symmetric encryption is the foundation of securing data in our interconnected world. In this segment, we'll review the basics of symmetric encryption, compare block versus stream ciphers, along with cipher modes of operation. First, let's discuss the concept of symmetric encryption. Symmetric encryption is also called conventional encryption and uses a single shared secret key to provide fast, efficient encryption with low overhead. Symmetric encryption has the following components. We start with the plaintext input, then we have the encrypting algorithm, and then we have a shared secret key which must be the same on both ends. That results in ciphertext. And then we have the decrypting algorithm, which is simply the encryption algorithm run in reverse. And then this results in the plaintext output. To give you an idea of what it looks like when text is encrypted, we'll go to this website and here, I've put in my plaintext. And for the key, I kept it simple. It's simply Roxy. And for the key size, we have choices. We can choose 128, 192
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=93)** or 256-bit encryption. Well, we'll just stay with 128 bit and say encrypt. And down below is what you can see when text is encrypted, which won't make sense to anyone unless you have a key. Symmetric [[Algorithms]] include Data Encryption Standard or DES, Triple DES, International Data Encryption Algorithm or IDEA and Advanced Encryption Standard or AES. Now, although we have choices in algorithms, the preferred algorithm is AES because of its large key sizes and resistance to attack. Now, symmetric encryption algorithms are one of two types, either a block cipher or a stream cipher. Let's compare the two. A block cipher processes plaintext in a fixed size, either 64 or 128-bit blocks. And then this produces a ciphertext in the same size, and the algorithms include AES or 3DES. Now if we add memory to a block cipher, this then results in a stream cipher. Stream ciphers are fast and use less code than block ciphers. They operate on a stream of data encrypting one bit or one byte at a time,
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=188)** and they're used to secure wireless communications. Algorithms include ChaCha20, Salsa20, and AES in counter mode. And finally, let's talk about the cipher mode of operation. Now, the cipher mode of operation is also called a chaining mode, and this defines the way that the plaintext and key generate the stream of ciphertext that is transmitted to the recipient. This adds layer of protection against potential threats like [[Data Manipulation]] or unauthorized access. Now, we have several cipher modes of operation. Let's talk about a few examples. The first example is Electronic Code Book, which is the simplest mode in that there is no feedback. Each 64-bit block is encoded independently, but uses the same key. Now, this means that the same plaintext will always result in the same ciphertext. Now the following modes, cipher block chaining, cipher feedback and output feedback will add randomness to the message to provide extra security. So let's step through an example and we'll use cipher block chaining. Now, this will take a block of plaintext and then it will do an exclusive
>
> **[4:41](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=281)** or operation with a previous block before it's encrypted. So let's look at the components. We see that is called an initialization vector. And what that is is because there's no block behind it, this creates a dummy block to start the stream. And this is the exclusive or operation. And there we see that the key is input into the encrypting algorithm and that results in the ciphertext. But what makes this a stronger algorithm is the feedback. And this is the ciphertext feeding into the next block. The feedback adds randomness, and this is a stronger method because even if the same plaintext block appears multiple times, each instance will encrypt differently and obscure any pattern. Symmetric encryption uses a single shared secret key to provide fast, efficient encryption with low overhead, and is the foundation of securing data in our interconnected world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (5), [[Data Manipulation]] (1)
> **Env Vars:** aes (4), des (2), idea (1)
> **Definitions:** means that (1), is called (1), is a  (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Best Practices:** the key is (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [narrator] (1)

#### [Asymmetric encryption](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=0)** - [Narrator] Symmetric encryption provides fast, efficient encryption. However it requires both the sender and receiver have the same shared key, which can be a problem in a complex networked environment. Asymmetric encryption is also called public key encryption and it uses two keys that are mathematically related. A public key that you publish and share, and a private key that you keep private. Scientists developed asymmetric encryption in the 1970s as a need for securely exchanging a secret key became evident. Let's step through the process of encrypting data that only Bob should see using asymmetric encryption. We start with Alice sending a secret message to Bob with plain text input. And now, we take Bob's public key and the encrypting algorithm. It then becomes cipher text. It's sent to Bob who uses Bob's private key and the decryption algorithm it then becomes plain text output, and because only Bob has Bob's private key, only Bob can see the contents. Asymmetric or public key encryption [[Algorithms]] include RSA or PGP. And you can use either of the keys for encryption with the other key used for decryption.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=94)** Uses for asymmetric encryption include key exchange, confidentiality, authentication functions, and creating digital signatures. Asymmetric encryption depends on multiplication and division, and requires more overhead in terms of CPU usage and may take up to 10,000 times more to perform as symmetric encryption which only requires simple bit operations. However asymmetric has better security and is harder to crack. That is why most encryption systems are hybrid, using both symmetric and asymmetric encryption. I'm at this website where we can see an example of asymmetric encryption. Here we're going to use PGP encryption which is pretty good [[Privacy]]. You can also use a similar application called GPG which is Gnu Privacy Guard. I'll start here. In Notepad I've written This is a Super Secret Message. But we're first going to have to generate keys. I'll minimize this. And on this webpage we can see PGP key generator. Let's go there. And it asks for the e-mail address. My e-mail address it could be made up and I'll just put Roxy at Patra dot com.
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=189)** Now we have to have a password in order to get the key so we'll use something simple: Cleo. Now I'm going to say Generate PGP Keys. Now here you can see private key and public key. Now understand that the private key should always kept private and the public key always kept public. But because of this exercise I'm going to need to save both of them. I'll select that one. Which is your private key and here's the public key. Now let's go to PGP encrypt message. We'll want to put the PGP public key which we're simply going to use the public key we just obtained, and the message to encrypt will be the super secret message. And we'll encrypt the message. Now there's the PGP message. Now I'll select this. And decrypt the message. Now we'll want to put that message that I just put on there, however we're going to have to go get that private key. Now here we would need that pass phrase which we kept simple for this exercise, Cleo. And now we'll decrypt the message. So that's how public key encryption works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (2), [[Algorithms]] (1)
> **Env Vars:** pgp (7), rsa (1), cpu (1), gpg (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Protecting integrity using a hash function](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=0)** - [Teacher] A hash function is a cryptographic technique that protects [[Data Integrity]]. So what's the difference between a hash versus encryption? Well, encryption uses a key or pair of keys. When we encrypt a message, we can decrypt the message as long as we have the key. Unlike encryption, a hash is one way, meaning you cannot generate the original message from the hash. Now we use hash functions in a number of different applications that can include authenticating a message. We can also use a hash to monitor data integrity, store passwords, and it's even used in [[Blockchain]] technology. When we think about a hash algorithm, there are various cryptographic requirements in order to be a secure hash algorithm. One is that it can be applied to any block of data of any size, and what this hash will then create is a fixed-sized output. The output will depend on the algorithm. With a hash, it has to be easy to compute and not cumbersome, and it also needs to have strong collision resistance. Meaning you cannot generate the same hash from another block of data. One of the ones that we use predominantly is Secure Hash Algorithm. The original one, which is called SHA-1, was designed by the National Security Agency, or NSA. SHA-2 is a family of hash [[Algorithms]].
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=95)** And now what most likely you'll be seeing more of is SHA-3, and that's based on Keccak. So we'll take you here to [[NIST]], which does a lot of research on cryptographic techniques. And I'm going to just scroll down here, and it talks about approved hash algorithms. And what you see is some hash algorithms including SHA-1, and then a SHA-2 family of hash algorithms. And you can see that there's a number of different variations of SHA-2, but we'll also see a lot more of what's called SHA-3, and that is called a permutation-based function based on Keccak. So it does a number of different variations during the process to really make sure that you have a strong hash value. Now, a hash function takes a variable length input, and generates a fixed length output. So what I want to show you is just to break it down if we were to take a message and that would be representing on the right-hand side, and the sender is going to send data to a receiver, and we want to ensure that nothing has been altered in transit. So what happens is we take the original message, and using a hash function, we generate what's called a message digest. After the hash function, this outputs what's called the digest or fingerprint. This digest helps ensure the data integrity. Now that small stump of data then gets put on the bottom of the message, and then it gets sent to the receiver.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=188)** Now at the receiving end, what happens is the receiver will generate a new hash value from the original message, and then it will pull off that digest and compare the two. If they're the same, then there's been no modification. And now I'll take you to the hash generator. And this allows you to generate a hash value from any string. And I'll just pull this out here. And what we'll just take is... This online tool allows you to generate a hash of any string. And we'll put that right there. Now as you can see, we've generated it and that's your hash value. Now, if we take a look at the last two characters, that's a B and an eight, what we'll do is change one thing. Now I am going to take out that comma right there. And just by modifying one single character, as you notice, that just one character change will make the hash value change. And I just put a space in, and as you can see, it changed again. So a hash value takes a variable length input and outputs of fixed length output, depending on the algorithm. And it's used to monitor for data integrity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Integrity]] (4), [[Algorithms]] (4), [[Blockchain]] (1), [[NIST]] (1)
> **Env Vars:** sha (7), nsa (1), nist (1)
> **Definitions:** is a  (3), is called (2)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [teacher] (1)

#### [Key exchange](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=0)** - [Instructor] Asymmetric encryption is great for email confidentiality using Pretty Good [[Privacy]] or Gnu Privacy Guard. But for large data requirements or data transfer, we use symmetric encryption, as it's fast, efficient, with low overhead. Symmetric encryption uses a single shared key to encrypt and decrypt data. That's why most of the time we use a hybrid cryptosystem that uses both asymmetric and symmetric encryption. When using symmetric encryption such as DES, DDDES, or AES to exchange data, both sides must use the same shared key. The question is, how do both sides get the same shared key? Scientists realized this early on and developed a way to securely transmit the same shared secret key. We can ensure both parties have the same shared secret key in one of two ways: generate keys using Diffie-Hellman and use asymmetric encryption to transport the shared key. Whitfield Diffie and Martin Hellman were two of a few groups that developed public key technology in the 1970s, as the need for securely exchanging a secret key became evident, and developed Diffie-Hellman. Diffie-Hellman generates a shared secret between two parties using a mathematical algorithm
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=98)** without having to send any data or information between the parties. However, we use the Diffie-Hellman algorithm for key exchange only, not encryption. Asymmetric encryption is also called public key encryption. It uses two keys that are mathematically related, a public key, which we publish and share, and a private key, which we keep private. RSA is an asymmetric encryption algorithm used to send the secret key in symmetric encryption. However, RSA can also be used for encryption and digital signatures. So we have an asymmetric key pair on both sides and we need to securely exchange a shared secret key. Well, let's step through the process. The sender needs to send the secret key. Both parties generate key pairs using asymmetric encryption, a private key and a public key. The sender takes the receiver's public key and locks the secret key. For this example, imagine we lock the key in a tennis ball. The sender transmits the encrypted secret key to the receiver. The receiver then uses his or her private key and unlocks the secret key. Now both sides have the same shared secret key. When transmitting data in a stream
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=192)** using symmetric encryption, both sides must share the same secret key. In order to securely transmit the shared secret key, we use either Diffie-Hellman or asymmetric encryption.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (2)
> **Env Vars:** rsa (2), des (1), dddes (1), aes (1)
> **Analogies:** such as (1), imagine (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Public key infrastructure](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=0)** - [Instructor] There are some common cryptographic concepts and terms network administrators should understand. These include key exchange, digital signatures, certificates, certificate authority, and public key infrastructure. Key exchange is securely exchanging the shared secret key between parties. Digital signature is a value generated using public key encryption that verifies data's origin and integrity. A certificate authority is a trusted third party in a hybrid crypto system that both parties trust. The certificate authority issues certificates. We use a certificate authority when using Secure Socket Layer to communicate securely on the web. Examples include Symantec, Verisign, and DigiCert, which are companies that provide certificate services. When completing transactions on the internet, we need to use someone's public key, and we need to be able to trust that the key is from the entity from whom we receive it. A certificate is a set of descriptive data that provides proof of identity, and is a way to ensure that you can trust the public key when you are exchanging data. Public key infrastructure is a framework used to generate, manage,
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=93)** and distribute digital certificates. Let's put this all together. Symmetric encryption uses a single shared key, and asymmetric encryption uses a pair of keys, a public and a private key. The public key is shared for everyone to see and use, as it's public. However, in a faceless, nameless environment, such as the internet, how do we trust the public key? In order to trust that the public key is valid and from the genuine entity, we use a certificate authority or trusted third party. Let's see how this works. We see Alice and Bob, and there is no trust. But Alice trusts the trusted third party, or certificate authority. Bob trusts the trusted third party or certificate authority. Therefore, Alice and Bob should trust one another. We tie the concept of the certificate authority into public key infrastructure, which uses digital certificates. Public key infrastructure is not a protocol, but a framework used to generate, manage, and distribute digital certificates, and uses a certificate authority to authenticate both parties by using a digital certificate, signed with a digital signature, for each entity. Let's look at a high level overview
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=186)** of the concept of public key infrastructure. In this illustration, here at the top, we see the certificate authority, such as Verisign. On the left, we see Alice, and on the right, we see [Amazon.com](https://Amazon.com). Alice needs Amazon's public key. The certificate authority sends Amazon's public key, wrapped in a certificate that is signed with a digital signature, which provides assurance that the certificate came from the certifying authority. The same goes to Amazon. The certificate authority sends Amazon a certificate with a digital signature that provides assurance that the certificate came from the certifying authority. Once Alice and Amazon extract the public keys they have received from the certificate authority, they can begin to securely exchange data. In order to securely exchange encrypted data, we use more than encryption. We use several cryptographic concepts, such as key exchange, digital signatures, certificates, certificate authority, and the public key infrastructure.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5)
> **Analogies:** such as (3)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)


### 4. Describe Network Topologies

[↑ Back to Table of Contents](#table-of-contents)

#### [Campus area network](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=0)** - [Narrator] A campus area network is a large private [[Local Area Network (LAN)|local area network]] in a confined location. It can be a college campus, hospital campus, corporate campus, or a military base. The enterprise network has all the elements necessary for operating independently and serving the client's needs. Careful design requires that the network is available, adaptable, manageable, and secure to meet the current and future needs of the business. The most common design is a hierarchy design that includes core, distribution, and access layers. The core layer is a critical layer that requires high performance [[Routing]] and optimized data exchange among other core switches and distribution switches within the enterprise network. The core is also called the network backbone and should be resilient, always on, and have redundancy to recover quickly in case of failure. The distribution layer is the control boundary between the access and the core and has several functions. It aggregates data from the access layer switches and provides policy based access for traffic flows within the access distribution layers. The access layer is dedicated to meeting the needs of the endpoints on the network and allows user access to the network.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=93)** At this layer, there are several service requirements, that include configuration, discovery, access control, and security services. In addition, this is the layer that can pose the most security risks. Therefore it's the first line of defense for the network. The campus area network provides connectivity, data applications, and services to the clients on the network and includes WAN and internet connections, a data center, and telephony services. As we can see in this graphic throughout the can, there are many attack vectors. Therefore, layer security defenses that include devices such as firewalls, [[Intrusion Detection]] systems, intrusion prevention systems, along with switchport security, and access control methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (1), [[Routing]] (1), [[Intrusion Detection]] (1)
> **Definitions:** is a  (3)
> **Env Vars:** wan (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Cloud and wide area network](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=0)** - [Instructor] In today's large multinational companies, there may be more than the campus area network. We now need to deal with communicating over a wide area network. As we see in this graphic, a complex organization may have several branch offices along with teleworkers that need access to resources on the main network. In addition, a large network may require two or more data centers and a distributive configuration to speed up access time. The data centers might be offsite in a geographically mirrored locations. Here we see in this graphic, the main site and branch offices along with two mirrored data centers in the center of the country. The data center might be at a site managed by the company or it might be outsource cloud base storage facility that's managed by a hosting company. Either way, clients will need access to data, which may be over a WAN link. Regardless of how they access the data, you must secure the data, whether at [[Representational State Transfer (REST)|rest]] or in motion. Remote access and cloud base data centers add complexity to our security requirements. Now we have more attack vectors to monitor. Any external clients should access resources via a secure VPN. Provide all clients such as remote workers and contract employees with antimalware protection. Because many companies have many external clients, you might consider having an employee dedicated
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=93)** to addressing their security needs. Any remote access client that needs to access company resources must have a secure system, as any network device without appropriate protection can pose a significant risk to the corporate network. Various solutions are available from [[Microsoft]] and third party vendors that check the client's health and grants access to the network if the device is healthy. Meaning, the client has updated patches, malware protection, and an active firewall. Although encryption solves many problems that include ensuring confidentiality, authentication, and integrity, the one service that network administrators struggle with is ensuring availability. Therefore, management should strongly consider DDoS protection. Watch as I go to this website. It will monitor for malicious activity before presenting the web page. Here you can see in the center, DDoS protection by Cloudflare. Once it's sure it's not a threat, it presents the webpage. Cloud base data centers and resources over a WAN link add more complexity to the security measures we need to take. With careful planning and ongoing management, you can secure your network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft]] (1)
> **Env Vars:** wan (2), vpn (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Data center](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=0)** - [Narrator] The data center is a large group of servers that provide storage, processing, and distribution of critical company data for the network clients. It's the heart of any enterprise network and is located in a central location, generally in a secure computer or server room. Company data is accessed in one of several ways, all of which might have a RAID configuration. Direct attach storage is attached, such has a hard drive in a server. Network attach storage is a group of file servers and storage area network is a separate subnetwork, that houses a large amount of data. A data center will house one or more storage area networks and will most likely have Cloud backup for redundancy. The configuration of the data center is to isolate the servers in a separate subnetwork, that provide a central location to manage access to the servers. Network administrators can then secure, filter, and prioritize traffic. The data center must ensure high availability. So the design will include redundancy, load balancing, and failover clusters, along with high capacity switches. In addition, there may be other devices such as Unified Computing System. It's a [[Hardware]] application that include switching fabric, virtualization, and management software.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=95)** Cisco Unified Communications Manager integrates voiceover IP, video conferencing, email, and data on the network. Because the data will house critical company data and trade secrets, it's a target for malicious activity. Let's step through the anatomy of a data breach. It begins with the hacker doing reconnaissance, or research on the company through various methods. The next step is to plan the attack. A hacker may choose to do a brute force attack on the firewall, or will most likely try an easier method first and use social engineering. Once the hacker has obtained what they need to gain access the final step is data exfiltration, which is data that leaves the organization without authorization. Data center protection includes firewalls using ingress and egress filtering, and house any outward-facing appliances in a DMZ. In addition to the many attacks from the outside, the network administrator must also be aware of the potential of an inside attack on the network, and use access control list, [[Intrusion Detection]], intrusion prevention, along with Layer 2 security such as switchport security. Protect the data center as it's the heart of any enterprise network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[Intrusion Detection]] (1)
> **Definitions:** is a  (3)
> **Env Vars:** raid (1), dmz (1)
> **Analogies:** such as (2)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### [Small office home office (SOHO)](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=0)** - [Instructor] A small [[Microsoft Office|office]]/home office is also a consideration when designing network access and security. Although the office is not located within the main campus, the remote worker will have access to the corporate network via WAN link. Data loss or compromise can happen in a small home and office just as easily as it can in the corporate office. Data loss can occur via mobile devices and laptops, removable storage, and lax access controls in the home office. If an organization has teleworkers with a small office/home office, outline the policy and procedures for safe computing and access while away from company resources. For mobile devices and laptops, ensure the device has encryption and access controls along with find my device feature. Removable storage should be discouraged, as these can be easily lost or stolen. However, if necessary, use encryption and access controls. The home office should be defended as well as the corporate office. Have a separate device for company access, and don't allow family members to use work devices as accidental malware downloads may occur. For [[Wi-Fi]] protection, use a strong password on the access point and don't broadcast the SSID. Use encryption. WPA2 with advanced encryption standard
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=94)** is currently the best choice for small office/home office, and promote user education for remote workers. Best practices include use malware protection, secure browser settings, use a firewall, do regular backups, don't download executables, use strong passwords and change them often, stay away from risky websites, and think before you click. In addition to remote workers, apply the same rule to subcontractors. For everyone, use the rule of least privilege and limit access to the minimal level that is necessary to complete a job or function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (12), [[Wi-Fi]] (1)
> **Env Vars:** wan (1), ssid (1), wpa2 (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Securing a virtual environment](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=0)** - [Instructor] An organization has many options for deploying services. Today's network take advantage of virtual technology. The concept of virtualization is not new, in fact, GE and IBM pioneered virtualization in the early 1960s, during that time, companies used virtualization on mainframes in order to keep the large expensive computers busy. Fast forward to the 1980s and 1990s when networks grew in size and capacity the data center would most likely have racks of blade servers to support the needs of the organization. However, over time, computer [[Hardware]] costs have declined. Here we can see in this graphic, hard drive cost per gigabyte in the 1980s, it was nearly prohibitive and then in 2015, we see that it's nearly free. In addition to the decreased cost of hardware, the capacity has increased, as a result, many computers were utilizing only 12 to 18% of their capacity in order to optimize the capacity so the appliance was using more other capacity network administrators began to virtualize their data centers. Virtualization is running multiple operating systems and applications on a single machine. And I can be in one of two [[Forms]], hosted or bare metal.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=98)** With hosted virtualization, a native operating system like [[Windows]] or Mac is responsible for managing the resources. The Virtual Machine is a guest that sits on top of the native operating system and includes VirtualBox Vmware, Virtual PC for [[Microsoft]], and Parallels for Windows and Mac. Bare metal virtualization uses a hypervisor that has direct access to the hardware resource and is the type of virtualization network administrators use in data centers. Bare metal virtualization provides high availability, improved performance, redundancy and security. Within the virtual environment we can implement security measures such as malware protection and firewalls. Cisco offers and Adaptive Security Virtual Appliance designed for virtual data centers and includes ASA firewall and VPN capabilities. Keep in mind the data center is the heart of the organization whether it's a physical or virtual environment, a multilayer defense includes firewalls, switchport security [[Intrusion Detection]], intrusion prevention and auditing. Even with all of the preparation and security as part of an overall security strategy, a business should prepare for disaster and have a business continuity plan. I'm at this website where you can reference
>
> **[3:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=194)** this document if you're not familiar with a business continuity plan, let's take a look. I'll scroll down here and click the hyperlink and here it talks about business continuity management. A necessary strategy in an overall security plan. An organization has many options for deploying services. Today's networks take advantage of virtual technology, take steps to secure the virtual environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[Windows]] (2), [[Forms]] (1), [[Microsoft]] (1), [[Intrusion Detection]] (1)
> **Env Vars:** ibm (1), asa (1), vpn (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Cost of a data breach](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-cost-of-a-data-breach-23668871?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-cost-of-a-data-breach-23668871?u=76281980&t=0)** - [Narrator] Let's do a challenge. For this challenge, we'll take a look at the cost of a data breach. First, I'll have you go to this site here at [ibm.com](https://ibm.com), and then once there, explore the site, and read through the key stats and other related information. And then go to this site to calculate a loss of 20,000 records. Select any of the variables that you feel would be appropriate, and then take a look at the figures. After seeing the figures, were you surprised? This challenge should take about five minutes. Good luck.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2)
> **URLs:** [ibm.com](https://ibm.com) (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Cost of a data breach](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=0)** - [Narrator] Okay, now let's check our work. Now first, we'll go to this site at [ibm.com](https://ibm.com), and this gives us a report on the cost of a data breach. Now, there's a lot of figures and a lot of information that I thought you might find interesting. So, now I'll scroll down to key stats. First of all, we see this really large number, and this represents the global average of a total cost of a data breach in 2024 is $4.88 million. And then it talks about the fact that 30% of the breaches involved shadow data, which is data that is collected, stored, and managed outside of an organization's standard [[Data Management]] and IT policies. Shadow data is dangerous as it's difficult to monitor and protect. And then scroll down because we're going to see some recommendations to prevent a data breach. One is that know your information landscape. That means where you have your data. Know where it is so that you can protect it. You'll also want to beef up your prevention strategies with AI and automation. And also, step up your [[Incident Response]] training so your team can move quickly
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=95)** to limit the effects of a data breach. So now we'll go to eRiskHub, and I thought it'd be interesting to take a look at calculating costs based on your answers to these seven questions. And I'll scroll down here, and as I said, I wanted you to put in 20,000 just as a figure, but the questions are what make people think, for example, just how many records were exposed. All right, so we said 20,000, but it says what type of data was exposed? Now we'll drop this down and it gives you some choices, but we know that we have various regulations that could possibly lead to a lawsuit or a huge fine. So, if we just say PCI, we'll just leave it at that. The next question, is this your first breach? And this might factor into the cost. And I just said yes. And the next question is, was the data stored in a central system or location? And I'm going to say no, because I'm going to feel that some of my data might be in the form of shadow data and that is stored in other locations. And in this case, do you expect fraud? And I'm going to say no. And is a class action lawsuit expected? We'll say no. And does your organization currently have data breach coverage? Well, I'm going to say no.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=188)** All right, now we'll calculate this. So when we take a look at these figures, they're very large. As you can see, just the investigation could be over $200,000. We also see that we have to notify customers, fines and penalties, the class action lawsuit, which we don't expect. But here we see the total cost, it's nearly $400,000, and that's a per record cost of $19. So, this was a challenge on a data breach and I hope you learned a little bit more of the cost of a data breach. And I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Management]] (1), [[Incident Response]] (1)
> **UI Navigation:** scroll down (3), go to (2)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** eriskhub (1)
> **URLs:** [ibm.com](https://ibm.com) (1)
> **Env Vars:** pci (1)
> **Versions:** 4.88 (1)
> **Definitions:** is a  (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/next-steps-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/next-steps-2?u=76281980&t=0)** - [Instructor] Thank you for watching. In this course, I've covered security principles, such as the CIA Triad, security services along with security terms and organizations. I covered common security threats, such as social engineering, malware, and active and passive attacks. I reviewed cryptographic techniques, such as encryption, hashing, and digital signatures along with describing various network topologies, such as a campus area network and data centers along with virtual environments. If you're interested in learning more, please check out the library where new courses are added all the time. You might want to check out Securing the [[IoT]], [[Privacy]]. If you're interested in learning about security basics, check out my Foundations of IT Security. If you're interested in encryption, please check out my Learning [[Cryptography]] and [[Network Security]]. And any course in the [[Ethical Hacking]] series will be well worth your time. For a complete list of courses, visit my author page. Keep learning. I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (1), [[Privacy]] (1), [[Cryptography]] (1), [[Network Security]] (1), [[Ethical Hacking]] (1)
> **Analogies:** such as (4)
> **Env Vars:** cia (1), iot (1)
> **Speakers:** - [instructor] (1)


## Resources

- Exercise files available

## Skills Covered

- Network Security
- Cisco Networking

## Path Context

### In [[Cisco Network Security- Safeguarding Network Integrity and Data]]
**1 of 7** | [[Cisco Network Security- Secure Access]] →

## Appears In

- [[Cisco Network Security- Safeguarding Network Integrity and Data]]

## Related Courses

_Courses sharing skills:_

- [[Cisco Network Security- Secure Routing and Switching]] — Network Security, Cisco Networking
- [[Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization]] — Cisco Networking
- [[Cisco Networking Foundations- Switching and Routing]] — Cisco Networking
- [[Cisco Networking Foundations- IP Addressing]] — Cisco Networking
- [[Cisco Networking Foundations Fundamentals Of Cisco Networking]] — Cisco Networking

---

[↑ Back to top](#)