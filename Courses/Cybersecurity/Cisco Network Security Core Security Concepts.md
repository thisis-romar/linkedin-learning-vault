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
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cisco%20Network%20Security%20Core%20Security%20Concepts.md)

![Cisco Network Security Core Security Concepts](https://media.licdn.com/dms/image/v2/C4E0DAQHwk3F66wSmOw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1606333471779?e=2147483647&amp;v=beta&amp;t=Pk-jiBW5VG3p_Oxg_gVlyfsq4i2fpiuHomBg60kuMpw)

# Cisco Network Security Core Security Concepts

> Protect your network from common security threats. In this course, instructor Lisa Bock helps equip network administrators with a foundational understanding of security concepts in relationship to Cisco networks. Lisa covers essential security terms and discusses common security threats such as active and passive attacks, social engineering, and malware. She reviews cryptographic techniques such a

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts) | Intermediate | 22K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. Security Principles]]** (9 videos)
- **[[#3. 2. Common Security Threats]]** (7 videos)
- **[[#4. 3. Cryptography]]** (6 videos)
- **[[#5. 4. Describe Network Topologies]]** (7 videos)
- **[[#6. Conclusion]]** (1 videos)

### 1. Introduction

#### Defending the network
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/defending-the-network-hiya?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/defending-the-network-hiya?u=76281980&t=0)** - [Instructor] Cybersecurity specialists are one of the most in-demand jobs today.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/defending-the-network-hiya?u=76281980&t=5)** Organizations need employees with specialized security knowledge.
>
> **[0:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/defending-the-network-hiya?u=76281980&t=9)** In this course I'll cover security principles such as the CIA Triad, common security threats such as social engineering, malware, and active and passive attacks.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/defending-the-network-hiya?u=76281980&t=21)** I'll review cryptographic techniques such as encryption, hashing, and digital signatures along with describing various network topologies such as a campus area network, wide area network, and virtual environments.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/defending-the-network-hiya?u=76281980&t=36)** Hello. My name is Lisa Bock and I'm a security ambassador.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/defending-the-network-hiya?u=76281980&t=41)** I am super excited to bring you this series on CCNA network security and this section on security concepts so that you can improve your skills in configuration and maintenance of Cisco devices to maintain the confidentiality, integrity, and availability of an organization's infrastructure.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/defending-the-network-hiya?u=76281980&t=62)** Are you ready? Let's get started.

> [!info]- Semantic Content
>
> **Analogies:** such as (4)
> **Code Keywords:** super (1), let (1)
> **Env Vars:** cia (1), ccna (1)
> **Speakers:** - [instructor] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/what-you-need-to-know?u=76281980&t=0)** - [Instructor] The potential for employment in any number of cybersecurity related jobs is exploding.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/what-you-need-to-know?u=76281980&t=7)** This course is an intermediate level course for network administrators, engineers, managers, students, and anyone with an interest in learning about the network security component of the CCNA Exam.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/what-you-need-to-know?u=76281980&t=22)** Participants should have a solid knowledge of networking fundamentals, devices, and cables, along with various topologies and have completed CCNA training prior to starting this course.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/what-you-need-to-know?u=76281980&t=36)** I'll discuss and demonstrate the main ideas of the CCNA Network Security component, which will help you as you prepare for the CCNA Certification Exam.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/what-you-need-to-know?u=76281980&t=46)** However, the course is also appropriate if you aren't taking the exam and are simply looking for a solid overview of organizational end device security.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/what-you-need-to-know?u=76281980&t=56)** I referenced websites throughout the course.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/what-you-need-to-know?u=76281980&t=58)** You can follow along if you'd like to and visit the pages.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/what-you-need-to-know?u=76281980&t=62)** The case sensitive short URL will show in the lower third of the page.
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/what-you-need-to-know?u=76281980&t=66)** Keep in mind though, after time, links and content will change.
>
> **[1:11](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/what-you-need-to-know?u=76281980&t=71)** In addition, I'll supply a list of URLs that I have used in the course.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/what-you-need-to-know?u=76281980&t=76)** You can find these in the exercise files.

> [!info]- Semantic Content
>
> **Env Vars:** ccna (4), url (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Preparing for the CCNA exam
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/preparing-for-the-ccna-exam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/preparing-for-the-ccna-exam?u=76281980&t=0)** - [Narrator] The CCNA Exam tests the candidates' knowledge and skills, related to network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/preparing-for-the-ccna-exam?u=76281980&t=16)** The CCNA Exam is an excellent addition to a career in information technology.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/preparing-for-the-ccna-exam?u=76281980&t=22)** This learning path covers the components included in the security fundamental section of the exam.
>
> **[0:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/preparing-for-the-ccna-exam?u=76281980&t=28)** You can find this and more detailed information, here at this website.

> [!info]- Semantic Content
>
> **Env Vars:** ccna (2)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)


### 2. 1. Security Principles

#### Secure network overview
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=0)** - [Narrator] We live in an exciting yet challenging time.
>
> **[0:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=4)** Administrators face numerous challenges to protect the infrastructure.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=8)** Network environments are complex and can include mobile phones, cloud computing, virtualization, social media, and the internet of things.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=20)** Coupled with the challenges, cyber threats are becoming more aggressive, complex, and sophisticated.
>
> **[0:27](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=27)** Attackers range from the disgruntled employees to crime rings, and nation states.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=33)** Network attacks include cyber crime, hactivism, extortion, and espionage.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=40)** Every organization and government is a potential target.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=44)** The attacks are highly organized by skilled and motivated players, and have resulted in exposure of massive amounts of sensitive data such as credit cards, medical records, intellectual property, passwords, and state secrets.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=62)** Networks are critical to an organization's success for any business, both large and small.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=69)** Today our internet-based ecosystem demands that business networks are available nearly 100% of the time.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=78)** Business networks must be able to adjust to changing traffic demands, and maintain constant response times.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=86)** In addition, they have to be agile, to respond to unexpected security incidents.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=93)** Whether you're expanding a current network, or designing a completely new infrastructure, today's networks require careful planning.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=102)** Network design goals include the following.
>
> **[1:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=106)** Networks need to be available nearly 100% of the time.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=110)** A single failure should not significantly impact network performance.
>
> **[1:56](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=116)** The network should grow to meet the ever changing demand for more hosts on the network.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=122)** No matter how good the design of the network is, the network administrator and security specialist must be able to manage the complexity of the network.
>
> **[2:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=133)** Design security from the onset.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=135)** Careful planning includes consideration for all network resources including security devices, access control lists, and intrusion detection.
>
> **[2:27](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=147)** These are critical to safeguarding network resources.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=151)** Knowing about all the possible risks that can occur we can see that the network is a pretty insecure environment.
>
> **[2:39](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=159)** To meet the daily requirements is becoming very complex, and many times on a limited IT security budget.
>
> **[2:48](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=168)** As a result, network administrators place security as a top priority.
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=173)** Safeguards include administrative, physical and technical controls that an organization must incorporate into the security compliance plan.
>
> **[3:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=185)** Everyone plays a role in keeping an organization's information and security safe and secure.
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=192)** In addition to the logical controls, physical security should also be a consideration.
>
> **[3:19](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=199)** Once someone has access to a physical device, this is a game changer.
>
> **[3:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=204)** Physical access will allow someone to change a password and obtain full access to the network.
>
> **[3:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=211)** Physical security involves preventing theft, destruction, or tampering of computers, network hardware, or devices.
>
> **[3:41](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=221)** Examples include cutting a fiber-optic backbone, theft of a computer or handheld device, or removing RAM or components from a desktop or a laptop.
>
> **[3:53](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=233)** Obvious safeguards include making sure to restrict access to wiring closets and data centers.
>
> **[4:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=240)** And in addition high security areas should have additional methods such as security cameras, biometrics, and visible signage.
>
> **[4:10](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=250)** It's important to note, to keep in mind that we can't completely eliminate security risks.
>
> **[4:17](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=257)** We can only reduce overall risk.
>
> **[4:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=261)** A layered approach is essential, as no single product, device or software application can make an organization secure.
>
> **[4:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=271)** Network security comes from a combination of products, services, best practices, and well-written security policies.
>
> **[4:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=280)** Companies are hyper vigilant and recognize the importance of a secure network.
>
> **[4:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=286)** However, the landscape changes often.
>
> **[4:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/secure-network-overview?u=76281980&t=289)** As a result, the networking team should complete an annual network assessment in order to determine whether the requirements of the network are in line with the business goals.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Code Keywords:** require (1)
> **Env Vars:** ram (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### Security services
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=0)** - [Instructor] Network administrators have a lot of responsibility in order to keep networks up and operational.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=8)** One of the fundamental principles of providing a secure system is that of ensuring confidentiality, integrity, and availability.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=17)** Also called the CIA Triad, it's a widely recognized information assurance model.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=24)** We ensure confidentiality, integrity, and availability by using various techniques that include logical controls, such as access control lists and intrusion detection systems.
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=38)** In addition, we use various cryptographic techniques, such as hashing, digital certificates, and encryption.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=46)** Confidentiality is assurance of data privacy and protection against unauthorized disclosure.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=54)** Confidential information can include personally identifiable information, such as social security, credit card information, or account numbers, or business information, such as financial data, employee records, and trade secrets.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=72)** An example of a violation of confidentiality would be a hacker gaining access and reading government emails.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=80)** It's not always evident that an organization has suffered a data breach.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=86)** Therefore, individuals and businesses should take steps to ensure confidentiality by allowing only authorized individuals, processes, or devices to read data.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=98)** In order to protect confidentiality, we use access control and encryption.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=104)** Integrity ensures data has not been changed, destroyed, or lost in an unauthorized or accidental manner.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=113)** An example of a violation of integrity would be a student going into the gradebook and changing his or her algebra grade from a C to an A.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=123)** To protect against violations of integrity, monitor the network for unusual or suspicious activity.
>
> **[2:11](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=131)** Strong audit policy should be in place.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=134)** Use software intrusion detection systems, such as Tripwire, to monitor checksums for unauthorized changes.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=141)** In order to protect integrity, we use access control and a hash function.
>
> **[2:27](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=147)** Availability is where services are accessible and available to authorized users or processes in an information infrastructure.
>
> **[2:37](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=157)** A denial-of-service attack is an attack against availability, which sends multiple requests to a system in an effort to interrupt or suspend services to legitimate users.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=170)** A simple denial-of-service attack is not effective.
>
> **[2:54](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=174)** A distributed denial-of-service attack is more effective, as it uses armies or botnets to launch an attack.
>
> **[3:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=182)** I've gone to this website for Kaspersky and we can see the many attacks using botnets, which effectively create a denial-of-service attack.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=193)** In order to protect availability, use a layered approach to ensure data availability, such as keeping systems current and upgrading when necessary.
>
> **[3:25](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=205)** The clients on our network expect availability of applications and services.
>
> **[3:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=211)** To prevent data loss, back up systems regularly and store in an offsite location.
>
> **[3:37](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=217)** Control access to data by assigning permissions to folders and files only to authorized users and to only users that need access.
>
> **[3:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=229)** That means do not grant permission to a user who doesn't need access.
>
> **[3:55](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=235)** Every day, more and more services are being added to the internet, making network security a constant challenge.
>
> **[4:03](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/security-services?u=76281980&t=243)** A secure network will protect the organization and provide a competitive edge.

> [!info]- Semantic Content
>
> **Analogies:** such as (6)
> **Code Keywords:** function (1)
> **Env Vars:** cia (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Utilizing SIEM technology
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=0)** - [Instructor] An enterprise network has many devices, applications, and systems that generate logs, as we can see here in this graphic at [cisco.com](https://cisco.com).
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=12)** In this segment, we'll discover how SIEM technology can provide insight on network activity and security events.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=21)** First, let's talk about audit or event logs and why we need help distilling all the data that is generated every day.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=32)** Audit or event logs provide information on events that have taken place.
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=38)** If we go to NIST, you can read about some guidelines on log management found in Special Publication 800-92, and you can download this by selecting one of the links on the right hand side.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=54)** Now, I've opened it up and then I scrolled down to the table of contents.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=59)** And in section two, you can read more about the basics of log management, why logging is important, as well as the challenges in managing logs.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=72)** Making sense of all log data can be very challenging.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=76)** For example, I'm here at my Event Viewer, and we can see all of the security events that have been logged on my machine in just a few minutes.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=88)** Try to imagine all the logs generated throughout the network.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=93)** How do we manage all the components, interfaces, policies, and users on the network?
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=102)** One approach is by using a SIEM system or security information and event management.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=110)** A SIEM system merges security information management with security event management, and integrates into the overall architecture of the network, and collects, correlates, and acts on security event information.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=128)** Some of the benefits include continuous monitoring, trend awareness, and auditing, correlation of events, which gives historic or real-time perspective and conducts data analysis based on a set of rules, and reduces the volume of event data by consolidating duplicate event records.
>
> **[2:32](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=152)** Let's step through the process.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=155)** A SIEM system will collect logs and events from different systems, then normalizes and maps the data to integrate into a central system for analysis, so it can detect any anomalies.
>
> **[2:51](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=171)** If detected, the system will alert the administrator generally via a digital dashboard that allows a graphical visual of reports and alerts.
>
> **[3:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=182)** Here we see an example of what you might see in a SIEM system.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=188)** Now, once aggregated, the SIEM system can help speed the detection and reaction to security events by providing details on the source of suspicious activity, and that includes user information, such as name, authentication status, and location, device information, such as manufacturer, model, operating system version, MAC address, and location, and it can provide the health of the device, such as compliance with the security policy to make sure the device has updated antivirus files and operating system patches.
>
> **[3:50](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=230)** For example, we see a log entry from an Oracle database system.
>
> **[3:55](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=235)** The log is for connection attempt from a host computer and provides the time and date when the database server received the request.
>
> **[4:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=245)** It also indicates the user, max67, the IP address, and the port number from where the request originated.
>
> **[4:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=256)** However, in another log file, we see a duplicate login from max67 from another IP address.
>
> **[4:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=266)** This will throw an alert.
>
> **[4:27](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=267)** It's then up to the administrator to determine whether this is normal business activity or a possible attack.
>
> **[4:36](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/utilizing-siem-technology?u=76281980&t=276)** SIEM technology provides the network administrator and security analyst with a comprehensive view of an organization's network activity and security events to facilitate the early detection and prevention of a potential attack.

> [!info]- Semantic Content
>
> **Env Vars:** siem (7), nist (1), mac (1)
> **Analogies:** such as (3), for example (2), imagine (1)
> **Code Keywords:** let (2), throw (1)
> **CLI Commands:** make (1)
> **URLs:** [cisco.com](https://cisco.com) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Learning security terms
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=0)** - [Instructor] To reduce the risk to information assets, an organization starts with a well-defined security plan in line with the organization's security objectives.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=12)** The security team creates policies to execute and enforce the plan.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=18)** Technical, operational and management, security strategies, or controls oversee adhering to the policies.
>
> **[0:27](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=27)** Management uses administrative techniques and deals with planning, vulnerability assessments, and penetration testing.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=36)** Operational includes the day-to-day operations such as physical and environmental protection, awareness and training.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=45)** Technical controls use technology and deals with access control, audit and accountability and malware prevention.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=55)** When developing security strategies, it's important to understand several terms, assets, risks, threats, and vulnerabilities.
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=66)** Organizations seek to protect assets, which are tangible and intangible items that an organization assigns a value.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=75)** Tangible assets include anything you can touch such as servers, printers, or computers.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=82)** Intangible assets include trade secrets, databases and company records.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=89)** Risk analysis is important for budgeting for security.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=94)** Manage risk by evaluating and prioritizing , and address the most immediate challenges first.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=102)** Risk is a chance that something unexpected will happen.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=107)** Risks include business disruption, financial loss, or even loss of life.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=114)** Risk is a function of threats and vulnerabilities according to a formula, risk equals threats times vulnerabilities.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=123)** Threats may exist, but if there's no vulnerability, there will be no risk.
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=129)** Correspondingly, if there's a vulnerability but no threat, there won't be a risk.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=136)** A threat is something that might happen and can range from innocent mistakes by employees, to natural disasters, which in general are difficult to control.
>
> **[2:27](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=147)** Threats include disgruntled employees, terrorists or nature, and can exploit a vulnerability intentionally, or accidentally and obtain damage or destroy an asset.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=162)** A vulnerability is a weakness in the system and can include unpatched systems, human error, software flaws, or weak or missing passwords.
>
> **[2:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=172)** A threat can exploit a vulnerability to gain unauthorized access to an asset.
>
> **[2:58](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=178)** Countermeasures are methods we employ to reduce vulnerabilities, which reduces overall risk.
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=186)** Risk management includes principles and practices related to asset protection and security management.
>
> **[3:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=194)** Although we've touched on some of the security terms, there are many others.
>
> **[3:19](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=199)** I'm at this website, SANS, securing the human, where it lists a number of security awareness terms and definitions.
>
> **[3:29](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/learning-security-terms?u=76281980&t=209)** This is a nice site that you can go to and at least test yourself on some of the more commonly known security terms to build your own awareness.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **Analogies:** such as (2)
> **Code Keywords:** function (1)
> **Env Vars:** sans (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Staying informed
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=0)** - [Host] Security organizations help security specialists stay ahead of common threats by offering research events and resources to prepare for an industry certification.
>
> **[0:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=14)** In this segment, we'll visit some of the security websites to help you keep up to date on security information and news.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=23)** Today's complex networks pose unique challenges in managing information.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=29)** The job of a network security specialist is to stay ahead of common threats by attending training, participating in security organizations, and checking security websites on a daily basis.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=44)** security organizations have an online presence where you can obtain current research information, see what events they'll be holding and get an industry certification.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=57)** I want to share with you a few of the commonly available websites that you might find informative.
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=65)** Let's start with [mitre.org](https://mitre.org).
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=69)** Mitre is a nonprofit that operates multiple federally funded research and development centers, and provides innovative, practical solutions for some of our nation's most critical challenges in defense and intelligence, Homeland Security and cybersecurity.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=92)** [Sans.org](https://Sans.org) is the go-to organization for information security training, certification and research.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=103)** The Center for Internet Security is where you can go to learn about cybersecurity best practices, tools, and threats.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=114)** The Open Web application security project, or OWASP is a free and open source security site that provides guidance on best practices to secure web infrastructures.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=128)** They publish a list of top 10 vulnerabilities and offer tools, guides, and testing methods, along with communities to exchange and share information.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=143)** [ISC2.org](https://ISC2.org) is where you can go to find out more information in industry leading cybersecurity certifications.
>
> **[2:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=153)** Let's take a look.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=155)** If you drop down the certification menu choice, you can see all of the available certifications, including SSCP, for IT administration, for management and support for the overall security posture and policies of an organization, CCSP for cloud security to properly procure, secure and manage cloud environments and CISSP for leadership and operations to effectively design, develop, and manage the overall security posture of an organization.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/staying-informed-23669784?u=76281980&t=196)** As we can see, there are a number of organizations that help security specialists stay ahead of common threats.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (1), isc2 (1), sscp (1), ccsp (1), cissp (1)
> **URLs:** [mitre.org](https://mitre.org) (1), [sans.org](https://sans.org) (1), [isc2.org](https://isc2.org) (1)
> **CLI Commands:** find (2)
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **Speakers:** - [host] (1)

#### Network security domains
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=0)** - [Instructor] Whether you're dealing with a large, multinational company, or a small business, information security management encompasses the entire organization.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=12)** As a security specialist, there are many functions that you and many others will need to complete throughout your day.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=21)** That includes monitoring your network, reduce the potential for attacks, and implement effective security policies.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=31)** One of the frameworks for organizational security is ISO/IEC 27002.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=40)** If we go to this webpage we can see a graphic of all the domains.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=46)** Let's scroll down.
>
> **[0:48](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=48)** If we click on it, we can get more information.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=52)** But I'm going to summarize all of those domains for you.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=55)** Let's take a look.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=57)** Information security policies define the rules of proper conduct.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=62)** We also want to implement policy, such as remote access, internet use, copyrighted works, passwords, and backup.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=73)** Organization of information security includes information security governance, and policy on mobile devices and teleworking.
>
> **[1:23](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=83)** Human resources security addresses policies and procedures related to the employees in an organization.
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=91)** Asset management and inventory of information assets includes handling media appropriately and data classification.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=101)** Now what do we mean by data classification?
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=105)** All data is not the same.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=108)** An organization should classify data in line with what effect a breach would have on the organization.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=117)** Government and military use a classification system.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=122)** For top secret, unauthorized disclosure could cause exceptionally grave damage to national security.
>
> **[2:10](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=130)** Secret, unauthorized disclosure, could cause serious damage to national security.
>
> **[2:17](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=137)** Confidential is where the unauthorized disclosure could cause damage to national security.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=145)** It's worth noting, unclassified is not a classification.
>
> **[2:30](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=150)** This is simply information anyone can view.
>
> **[2:34](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=154)** A business can classify data in the following manner.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=158)** Confidential, private, sensitive, and public.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=163)** We also have access control.
>
> **[2:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=166)** Access control describes a restriction of access rights to network system applications, functions, and data.
>
> **[2:55](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=175)** And cryptographic controls includes methods to ensure confidentiality, authentication and integrity, along with key management.
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=186)** Physical and environmental security is in order to secure areas against unauthorized access.
>
> **[3:15](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=195)** Operations security includes malware protection, backup, vulnerability assessment, and auditing.
>
> **[3:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=202)** Communications and operation network segregation and systems, where we take our networks and secure the data while it's in transit.
>
> **[3:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=213)** System acquisition, development and maintenance; this is in order to control change to applications and operating systems, and design security into applications.
>
> **[3:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=226)** We need to remember our suppliers.
>
> **[3:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=229)** Supplier relationships protect the organization's information throughout the supply chain, and includes periodic monitoring and auditing of the data flow.
>
> **[4:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=242)** We also have incident management and business continuity.
>
> **[4:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=247)** And compliance; this is the process of ensuring compliance with information security policy standards and regulation.
>
> **[4:17](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=257)** As you can see, organizational security encompasses the entire organization; processes, policies, and people.
>
> **[4:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/network-security-domains?u=76281980&t=268)** ISO/IEC 27002:2013 is a framework that is applicable to all types of organizations that specify network security domains that provide a common basis for standards and effective security management.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), private (1), public (1)
> **Env Vars:** iso (2), iec (2)
> **UI Navigation:** go to (1), scroll down (1), click on (1)
> **Ports:** :2013 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Zone defense
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=0)** - [Instructor] When thinking about a network, some areas are more trustworthy than others.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=5)** In a network we segment each part of the network by logical zones where we can identify the level of trust for each zone.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=16)** Firewalls inspect and filter traffic according to a set of access control rules.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=22)** That either allow or deny certain types of traffics between zones, when designing a network, a perimeter network is the boundary between the trusted and untrusted network.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=36)** This allows an organization to deploy public services such as email and web servers while isolating the internal network and provides an additional layer of protection, in this graphic we see a logical drawing of the outside network or internet, the inside or LAN and then we see in the center the demilitarized zone or DMZ.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=63)** Isolation on a network occurs by configuring a demilitarized zone, or screen subnet.
>
> **[1:10](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=70)** Where the firewall filters traffic between the outside world and the local area network.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=76)** We call it a screen subnet because it's a separate subnetwork as we see from the IP address.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=84)** The DMZ is where you house essential services such a mail and web servers that must have a public interface, the front-end firewall should allow traffic destined to the DMZ only and the back end or internal firewall should allow traffic from the DMZ to the internal network.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=107)** For a zone-based firewall configuration, we create zones and assign a trust level on an interface according on how much you trust the traffic from that interface, level zero is the least trusted and lever 100 is the most trusted.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=127)** The outside is untrusted, it's the wild, untamed internet so no trust.
>
> **[2:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=132)** Security is set at zero.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=136)** In the DMZ, this is the zone that resides in between the trusted and untrusted zones, security is set between one and 99.
>
> **[2:27](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=147)** The administrator can set the security level for the DMZ at 50.
>
> **[2:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=153)** The inside is the trusted network.
>
> **[2:36](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=156)** This is the local LAN side of the firewall which is the secure, internal portion of a network.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=163)** Typically set at 100 and trusted.
>
> **[2:47](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=167)** On the router we configure and name the security zones.
>
> **[2:51](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=171)** By default no traffic can freely flow from an untrusted network to a trusted network without checking the access control list.
>
> **[3:01](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=181)** For example we don't allow any traffic to freely flow from the outside network to the DMZ until the firewall inspects the traffic.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=193)** We don't allow any traffic to freely flow from the DMZ to the inside until the firewall inspects the traffic.
>
> **[3:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=202)** We allow traffic to freely flow from the inside to the DMZ and we allow traffic to freely flow from the DMZ to the outside.
>
> **[3:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=213)** A perimeter network is the boundary between the trusted and untrusted network.
>
> **[3:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/zone-defense?u=76281980&t=218)** For a zone based firewall configuration we create zones and assign a trust level on each interface according to how much you trust the traffic from that interface.

> [!info]- Semantic Content
>
> **Env Vars:** dmz (10), lan (2)
> **Code Keywords:** interface (5), public (2)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a security policy
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-create-a-security-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-create-a-security-policy?u=76281980&t=0)** - [Instructor] I'm here at this webpage at [sans.org](https://sans.org), and here's where we can see security policy templates.
>
> **[0:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-create-a-security-policy?u=76281980&t=14)** For this challenge, download and open the Acceptable Use Policy, then I want you to scroll through to see the many elements of the policy.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-create-a-security-policy?u=76281980&t=24)** Next, I want to ask you, take a look at that site, what other policies would be helpful?
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-create-a-security-policy?u=76281980&t=31)** For example, what is a clean desk policy?
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-create-a-security-policy?u=76281980&t=35)** What is a remote access policy?
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-create-a-security-policy?u=76281980&t=38)** And then finally, knowing that the templates are available, is there any reason why an organization wouldn't create general polices?
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-create-a-security-policy?u=76281980&t=47)** This challenge should take about five minutes, good luck.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** finally, (1)
> **URLs:** [sans.org](https://sans.org) (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a security policy
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=0)** - [Instructor] I'm here at [sans.org](https://sans.org) and we can take a look at some of the security policy templates.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=12)** Now, the first thing I wanted you to do was download and open the acceptable use policy.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=17)** And here it is.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=19)** This talks about what it is.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=21)** It defines acceptable use of equipment and computing services.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=26)** So I opened it in word.
>
> **[0:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=28)** Now, the first thing that you can read is that it was last updated in 2014.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=33)** Now that was quite awhile ago.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=35)** However, most of the information is still applicable and then it gives an overview and what the purpose and the scope.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=45)** But within the document, you can insert your own company name.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=49)** And here it talks about general use and ownership.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=54)** Down below, it defines security and proprietary information.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=59)** And again, this is something you would want to look at to make sure it was in line with your company's requirements.
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=65)** Then down below is basically what is unacceptable use.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=69)** The following activities are in general prohibited.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=73)** At this section, it says the list below are by no means exhaustive.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=78)** But it does outline some of the activities that are prohibited such as accessing data, a server or an account for any purposes other than conducting company business.
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=91)** Introduction of malicious programs into the network or server and port scanning or security scanning.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=101)** And then down below, there's more information about policy compliance and this is what you could use to provide some teeth and what would happen if you did violate this.
>
> **[1:51](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=111)** Related standards, policies and processes and those would be also something that you'd want to include.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=118)** And then some terms.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=120)** So then take a look.
>
> **[2:01](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=121)** I wanted you to take a look at what other policies that would be helpful.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=125)** And as you can see, there are plenty.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=128)** We can scroll through and see a wide range of policies.
>
> **[2:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=132)** For example, what is a clean desk policy?
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=136)** And I'll drop this down.
>
> **[2:17](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=137)** Defines the minimum requirements for maintaining a clean desk.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=141)** We're sensitive in critical information about our employees, intellectual property, customers or vendors is secure and locked in areas out of sight.
>
> **[2:32](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=152)** Now you might think, do I have to define this?
>
> **[2:34](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=154)** Well, in some cases you should.
>
> **[2:37](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=157)** Just so that there's no confusion.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=163)** And what is a remote access policy?
>
> **[2:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=166)** Is defined standards for connecting to the organization's network from any host or network external to the organization.
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=173)** Now, the last question is knowing that the templates are available, is there any reason why an organization wouldn't create general policies?
>
> **[3:01](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=181)** And the answer is there isn't any reason.
>
> **[3:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-create-a-security-policy?u=76281980&t=184)** So it's in your best interest to become familiar with some of these policies so that you can provide those for your employees to provide a secure organization.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), include. (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **URLs:** [sans.org](https://sans.org) (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. 2. Common Security Threats

#### Reviewing security services
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=0)** - [Instructor] The two main types of attacks in a computer system are passive attacks, such as sniffing traffic, and active, such as releasing malware or creating a denial of service.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=12)** An attack can be against any of the security services, confidentiality, integrity, availability, or authentication.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=21)** Let's take a look at each of these.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=24)** Confidentiality is the protection of data against unauthorized disclosure.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=30)** For example, if you're in a medical facility, you wouldn't want unauthorized individuals looking at patient information.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=39)** Integrity is the protection of data from unauthorized modification.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=44)** For example, if someone changed his or her salary from $12 an hour to $20 an hour, that would be a violation of integrity.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=55)** Availability is ensuring data and services are available to authorized users.
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=61)** A denial-of-service attack locks out legitimate users and it's an attack against availability.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=69)** Authentication is assurance that the communicating entity is who they say they are by verifying the identity of a user or a device.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=80)** Now, hackers use various spoofing methods to gain access to privileged information.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=85)** Defend against spoofing attacks by using authentication techniques.
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=91)** To reduce the overall risk to a network, security specialist should not only understand vulnerability scanning, but also ethical hacking skills as well.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=103)** On any network, there are passive and active attacks.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/reviewing-security-services?u=76281980&t=107)** As we can see in this live attack map, monitor and defend against attacks in a layered approach with various methods to protect against passive and active attacks.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), for example (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Attacking the network
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=0)** - [Instructor] Passive attacks include something that you might not think is dangerous, such as eavesdropping using traffic analysis or tapping, which uses a network adapter card and promiscuous mode to capture all network packets on the local area network and examine the contents.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=22)** Passive attacks include a more aggressive form of an attack called a reconnaissance attack.
>
> **[0:27](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=27)** In this case, an attacker is trying to find out information about the network.
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=34)** Scanning techniques can vary, but there are some common scans and each has a different objective.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=41)** Most likely an attacker will do a ping sweep, which is the set of ICMP echo packets that are sent to a network of machines that are usually specified within a range of IP addresses to see which ones will respond and are alive.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=59)** After the attacker determines which ones are alive and responding, the attacker will then do a port scan, which identifies TCP and UDP ports on a live target system, looking for services along with potential vulnerabilities.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=77)** Once identified, the intruder can plan an attack on any weak services that he or she finds.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=86)** Passive attacks are hard to detect.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=89)** Someone may be monitoring transmissions and possibly capturing authentication information, such as usernames and passwords or router advertisements.
>
> **[1:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=100)** This can result in the disclosure of information to an attacker without the consent or knowledge of the user.
>
> **[1:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=109)** Active attacks include when an attacker tries to break in and possibly alter the integrity of the system by stealing or modifying information, or introducing malicious code, such as viruses, worms, or Trojan horse.
>
> **[2:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=126)** Denial of service is an attack against availability, which sends out multiple requests to a system in an effort to interrupt or suspend services to legitimate users.
>
> **[2:18](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=138)** A simple denial of service attack is not effective.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=142)** A distributed denial of service attack is more effective, as it uses armies or botnets to launch a more effective attack.
>
> **[2:32](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=152)** Both can result in the system being overwhelmed and crashing or consuming all resources, such as processing, memory, or bandwidth.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=162)** In a buffer overflow, the attacker sends out more information to an application than is expected.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=170)** Buffers can hold a finite amount of data.
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=173)** The extra information can overflow and overwrite into adjacent buffers.
>
> **[3:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=180)** Buffer overflows are common, as programmers fail to check and validate his or her source code, and damage can range from unexpected errors to very bad results, such as a hacker gaining administrative access to the system and executing malicious code.
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=201)** In a password attack, this is where an attacker tries to obtain the password stored in a network account database or password protected file.
>
> **[3:32](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=212)** Password attacks can use brute-force attack methods, rainbow table attacks, or packet sniffers.
>
> **[3:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=220)** With passive attacks, use prevention and detection.
>
> **[3:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=224)** In the case of prevention, we'd want to use encryption.
>
> **[3:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=229)** By using encryption, if someone were to capture the data, they couldn't read it unless they had a key.
>
> **[3:56](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=236)** And detection, use intrusion detection systems to monitor for ping sweeps and port scans.
>
> **[4:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=244)** With active attacks, defend against active attacks by using encryption, whether the data is at rest or in motion.
>
> **[4:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=254)** If someone were able to obtain the data, they couldn't read it unless they had a key.
>
> **[4:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=261)** And policies, this may be as simple as frequent changes of passwords and strength of passwords.
>
> **[4:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=268)** Physical controls, these may be the most overlooked forms of security.
>
> **[4:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=275)** Controls include locks and smart cards.
>
> **[4:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=278)** And device security, such as intrusion detection systems, intrusion prevention systems, firewalls, and switch port security.
>
> **[4:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/attacking-the-network?u=76281980&t=289)** To reduce the overall risk to a network, security specialists should not only understand vulnerability scanning, but ethical hacking skills as well.

> [!info]- Semantic Content
>
> **Analogies:** such as (6)
> **Code Keywords:** case, (1), protected (1), switch (1)
> **Env Vars:** icmp (1), tcp (1), udp (1)
> **CLI Commands:** find (1)
> **Exercise Files:** source code (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Social engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=0)** - [Instructor] Social engineering is a deception that relies on influence, social skills and human interaction to obtain information about an organization or computer system.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=13)** Logical network defenses, security appliances and antimalware protection get stronger everyday, over time industry has strengthen our defenses and as a result hackers look to penetrate a softer target, the people in the organization, including employees, contractors and customers by using a social engineering attack.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=39)** Scam artists work on our emotions and many times launch an attack that might promise gifts and prizes, important information or threaten to take action if you do not reply.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=52)** Cyber criminals achieve social engineering in many ways that include phone, online, phishing, farming, pop ups, fake websites, and simple persuasion.
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=66)** Phishing sends out massive emails.
>
> **[1:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=68)** Phishing emails bait victims to click to claim a prize, sign up for a special program, or sign in to check account information.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=79)** The message appears urgent and requires a quick response.
>
> **[1:23](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=83)** One in 10 individuals will respond.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=87)** Phishing is very dangerous as over 90% of ransomware attacks start out with a phishing email.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=95)** A spear phishing attack is more specific to an organization, unlike just throwing out a bunch of emails and hoping we're going to get a response spear phishing is a more targeted approach.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=108)** In that case, in order for a spear phishing attack to be successful, a hacker uses a legitimate email address list, the hacker will need to harvest or generate the directed list prior to the attack.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=123)** There are many working parts to a social engineering attack but the heart of this is the victim.
>
> **[2:10](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=130)** Other components include motive and that's why cyber criminals use social engineering.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=136)** Reasons include obtaining money, gaining access to a system or causing damage to a system, the method is how cyber criminals achieve social engineering using human intervention or technology or sometimes a combination of both.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=155)** The hacker themselves must be able to pull off a believable hoax, and the tools used may include email, social media, web pages, phishing or farming, and stimulus, what's the best way to inspire someone to give up their information?
>
> **[2:54](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=174)** Using fear, need for compliance or appeal to his or her need for friendship, acceptance or social validation.
>
> **[3:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=184)** Social engineering is one of the hardest threats to defend against, a skilled hacker will most likely try to use social engineering before spending any time on more difficult methods to obtain a password, such as password cracking to obtain access to a system.
>
> **[3:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=202)** Organizations can thwart social engineering attacks by employing user education and strong spa filters to prevent deceiving emails from getting through to the employees.
>
> **[3:36](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=216)** Many vendors offer tools to test employees, but you can test yourself, go to this website on SonicWall, and here you see a SonicWall phishing IQ test.
>
> **[3:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/social-engineering?u=76281980&t=229)** This is a good test, 'cause as I said, a large percentage of ransomware attacks begin with a phishing email.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Code Keywords:** case, (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Identify malware
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=0)** - [Instructor] Malware is malicious software.
>
> **[0:03](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=3)** A malware attack can infiltrate the network and allow unauthorized access to critical information.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=11)** We categorize malware in one of five different classes.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=16)** Spyware records keystrokes and other activity, and sends it to a collection site.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=23)** Trojans appear as useful programs, such as games or utilities, but contains malware that allows hackers to take control of the victim's computer remotely.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=35)** Rootkits provide a backdoor for illegal access to a host.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=40)** Viruses can self-replicate yet need a way to propagate to other hosts.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=46)** And worms are a self-propagating virus that can spread on its own.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=52)** Viruses and worms are two common malicious programs.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=56)** A virus is like a human virus, in that it can self-replicate and spread to other programs within the system.
>
> **[1:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=64)** The results can be as simple as a new icon on the desktop, or more serious results, such as disabling antivirus or destroying files.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=75)** A virus must have a way to travel to another host.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=79)** A classic way to propagate a virus is via an email attachment.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=85)** Today it's common to find malware on USB flash drives which are inexpensive and convenient.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=92)** But a worm is a virus subclass that has the ability to spread without any help from a transport agent such as an email attachment.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=104)** This ability makes a worm more dangerous, as they can have devastating effects on all hosts on the network.
>
> **[1:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=112)** The basic phases of an attack by a virus or a worm, are as follows.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=118)** Probe, the malware identifies weak targets.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=123)** Penetrate, the malware transfers malicious code to the target.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=128)** Persist, the malware attempts to remain on the target system.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=134)** Propagate, the malware attempts to extend the attack to other targets.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=140)** And paralyze, the malware is able to cause damage to the system.
>
> **[2:27](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=147)** Many users are unaware of a virus or worm's frenzied replication until the virus or worm consumes system resources such as memory, processing, bandwidth.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=160)** All of which can slow or even halt tasks.
>
> **[2:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=164)** We see a great shift in malware.
>
> **[2:47](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=167)** These went from the early days of script kiddies to cybercriminals, whose main focus is profit.
>
> **[2:55](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=175)** Businesses have lost billions to viruses, worms, spyware, and phishing attacks.
>
> **[3:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=182)** Yet at the same time, a global cybercriminal business has grown exponentially.
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=190)** Because of the evolution of malware, current malware has the properties of a virus, worm, Trojan, and rootkit all bundled up in a single package to enable survival and dissemination.
>
> **[3:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=206)** Getting malware is fairly easy, as most of the time we carelessly visit a webpage or click on a link from a friend, and expose the system to malicious activity.
>
> **[3:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=220)** Many people feel that malware protection is sufficient, when in fact, it's hard to keep ahead of the latest threats.
>
> **[3:48](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=228)** Some malware, such as worms and botnets, propagate independently.
>
> **[3:53](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=233)** Others, such as a Trojan, uses a wrapper which wraps the malware in some enticing message, utility or game.
>
> **[4:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=242)** Ransomware is a form of malware.
>
> **[4:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=245)** Over the years, different types of ransomware has evolved.
>
> **[4:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=249)** However, all of them have the same outcome.
>
> **[4:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=252)** They hold your computer hostage, until you offer some form of payment or ransom.
>
> **[4:20](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=260)** Ransomware spreads like many other types of malware, via phishing or spear phishing attacks, or other methods to get the victim to click on a link that might be on a webpage, or social media that takes you to the attacker's website to download a file.
>
> **[4:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=280)** Ransomware is dangerous.
>
> **[4:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=282)** Here we see a graphic on how quickly wannacry infected tens of thousands of computers.
>
> **[4:50](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=290)** Don't let this happen to you.
>
> **[4:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=292)** Protect against malware.
>
> **[4:54](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=294)** Use strong spam filters, use anti-malware protection, and back-up and store sensitive files in a remote storage facility.
>
> **[5:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/identify-malware?u=76281980&t=305)** And most importantly, think before you click.

> [!info]- Semantic Content
>
> **Analogies:** such as (6)
> **Code Keywords:** self (3), let (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Env Vars:** usb (1)
> **Speakers:** - [instructor] (1)

#### Data loss prevention
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=0)** - [Voiceover] Data loss prevention is ensuring that there is no data exfiltration, which is data that leaves the organization without authorization.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=10)** A network specialist must be aware of the many vectors of data exfiltration and ways to prevent data loss.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=19)** Whether data is at rest or in motion over the network, there are many vectors or methods whereby data can leave the organization.
>
> **[0:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=28)** Vectors can include storage devices, email, missing or improper access controls, cloud storage, and malware.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=37)** Data loss can occur either by accident, or as a result of a cyberattack.
>
> **[0:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=42)** Storage devices include flash drives, external drives, and memory sticks for phones and cameras.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=49)** The small devices are easily lost or stolen.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=53)** And many times they don't have any type of password protection or encryption.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=58)** Email and email attachments both contain sensitive information like customer and personal data along with business information.
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=66)** Someone can intercept and email or even send an email by mistake to the wrong person.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=73)** Which could lead to data exfiltration.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=76)** Or the victim might send information to a hacker as a result of a phishing or social engineering attack.
>
> **[1:23](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=83)** Email attachments are one of the original methods to send malware, spam, and bogus links, and continue to improve in sophistication.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=93)** To minimize this attack vector, keep antivirus updated and educate users to use caution when opening attachments.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=102)** Mobile and other personal devices many times only use one-factor authentication, such as a password or a patterned swipe.
>
> **[1:51](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=111)** If someone were to get ahold of the device, they could gain unauthorized access to the company data.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=118)** Cloud storage provides a great option for storing company data, the data is not local.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=124)** However, you should protect it as if it were on the local network by using data encryption and access control.
>
> **[2:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=132)** Webpages and pop-ups take advantage of the ability browsers have to access various programming languages such as JavaScript, ActiveX, and macros.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=142)** When clicked, the malware can install spyware, adware, hijackers, dialers, Trojans, or other malware.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=151)** The best defense is to stay away from risky websites, online instant messaging, and peer-to-peer file sharing programs.
>
> **[2:39](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=159)** Wireless networks are pervasive in today's world and provides an attractive attack vector.
>
> **[2:45](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=165)** The 802.11 standard or Wi-Fi is characteristically insecure.
>
> **[2:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=172)** Educate clients not to join open access points such as the ones you find in coffee shops and airports.
>
> **[2:59](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=179)** It may be a hacker with a rogue Wi-Fi network used to gain information such as usernames and passwords.
>
> **[3:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=187)** How this works is a hacker sets up a rogue access point called a Wi-Fi- Pineapple, Which appears to be a free access point, and gets victims to use the access point when traveling to a website.
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=201)** They intercept the traffic by using a technique called an SSL Strip, and are able to view the communication stream.
>
> **[3:29](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=209)** The most vulnerable attack vector is the user, which is the weakest link in any system.
>
> **[3:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=215)** Over 600 million people worldwide have fallen victim to some form of cybercrime.
>
> **[3:41](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=221)** That includes online scams, malware, and phishing attacks, credit card fraud, explicit content, and compromised social networking profiles.
>
> **[3:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=232)** Although humans can be our weakest link, steps can be taken to protect your data offline and online.
>
> **[3:59](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=239)** Change your password often and don't use the same password for all sites.
>
> **[4:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=244)** Use encryption.
>
> **[4:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=246)** Don't click on suspicious links.
>
> **[4:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=248)** Use caution when using public Wi-Fi networks.
>
> **[4:11](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=251)** Secure mobile devices.
>
> **[4:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=254)** Use access control and strong spam filters.
>
> **[4:17](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-loss-prevention?u=76281980&t=257)** Good practices will help prevent data exfiltration.

> [!info]- Semantic Content
>
> **Analogies:** such as (4)
> **Warnings:** caution (2), be aware (1)
> **Code Keywords:** continue (1), public (1)
> **CLI Commands:** find (1)
> **Env Vars:** ssl (1)
> **Versions:** 802.11 (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### Challenge: Understanding botnets
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-understanding-botnets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-understanding-botnets?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-understanding-botnets?u=76281980&t=6)** - [Instructor] I'm here at this webpage, Spamhaus Technology, where we can see a live botnet threats worldwide map, and it shows the IP addresses and the locations of servers used to control computers infected with malware.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-understanding-botnets?u=76281980&t=21)** Now the yellow shows locations with the most intense bot activity and the aqua or the blue underneath shows command and control botnet servers.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-understanding-botnets?u=76281980&t=32)** So this is all about botnets that occur on a daily basis, and I want you to take a little bit of a closer look at botnets.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-understanding-botnets?u=76281980&t=40)** So for this challenge, and we did go to that website, I want you to answer the following questions.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-understanding-botnets?u=76281980&t=46)** What is a botnet?
>
> **[0:48](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-understanding-botnets?u=76281980&t=48)** What is a command and control botnet server?
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-understanding-botnets?u=76281980&t=52)** What are zombies?
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-understanding-botnets?u=76281980&t=53)** And how can you become a zombie or get infected?
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-understanding-botnets?u=76281980&t=58)** This challenge should take about five minutes, good luck.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Understanding botnets
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=6)** - [Instructor] Okay.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=7)** So the first question was, what is a botnet?
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=10)** Now, a botnet is thousands of computers.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=13)** Now, literally hundreds of thousands and in some cases, millions of computers that are referred to as zombies that are under the control of a botnet command and control server.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=25)** Think of it as the mothership.
>
> **[0:27](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=27)** Now, why are botnets created?
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=30)** Well, they're used to launch a distributed denial-of-service of service attack or a DDoS, it could also be used for bitcoin mining, sending spam or any other malicious action.
>
> **[0:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=42)** Keep in mind, if you have hundreds of thousands of computers under your control, there's a lot of things you can do.
>
> **[0:50](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=50)** So the next question is what is a command and control botnet server?
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=55)** It's also called a C and C.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=58)** This is what is used to maintain communications with the army and the zombie army can include anything that's computerized including mobile devices, laptops, and Internet of Things.
>
> **[1:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=74)** And so well, what are zombies?
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=76)** And that's part of the botnet.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=78)** Well, zombies or bot is the system that's infected by the malware that becomes part of the botnet.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=85)** And once infected the remote C and C server will send commands to the bot to forward malware or spam or anything else out to other computers on the internet.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=97)** So how do you become infected and how do you become a zombie?
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=102)** Well, any other way that you can get malware via email or drive by download or even when downloading a free program that might be part of the package.
>
> **[1:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=112)** So you need to be aware of what you're clicking on and what you're downloading.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=117)** So now I'll take you to two more sites that maybe will give you a little bit more information.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=123)** This is at Malwarebytes, and there's a little article on the facts about botnets and some more information about how they make money and how you can become part of the botnet.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=135)** And this article is command and control servers and things you should know.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=140)** And this is going to give you some information about what a command and control server is.
>
> **[2:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=146)** What's a zombie and a little bit of information as to how they work.
>
> **[2:30](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-understanding-botnets?u=76281980&t=150)** So I hope you enjoyed that challenge on botnets.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (1), be aware (1)
> **CLI Commands:** make (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Cryptography

#### Cryptographic concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=0)** - [Instructor] Cyberattacks propagate the news on a daily basis.
>
> **[0:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=4)** Reports surface on attackers stealing terabytes of sensitive information, personal data, and compromised emails.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=13)** Stealing company information and trade secrets is a well-known challenge that businesses strive to protect against, and it can go undetected, as many times companies don't notice any abnormal network activity.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=29)** On this website, we can see significant data breaches that have occurred over the years.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=35)** Here we can see data records lost or stolen since 2013, and also some top breaches.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=44)** I'll scroll down, we'll take a look here at how data records are lost or stolen at the following frequency.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=53)** Right under this very large number, I want you to take a look at this fact.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=59)** Only 4% of breaches were secure breaches, where encryption was used and the stolen data was rendered useless.
>
> **[1:11](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=71)** That is why encryption is so important.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=76)** We use cryptographic techniques to ensure confidentiality, integrity, and authentication of data whether in motion or at rest.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=86)** Data is in motion while traveling through the network, moving from place to place.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=92)** Data at rest is on a drive, cloud storage, or removable media.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=98)** Today, encryption is one of the most effective ways to secure digital data.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=104)** Encryption uses a mathematical algorithm and a key to convert data into a scrambled format, which is meaningless unless you have a key.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=114)** As we discuss cryptography, you'll hear many terms, such as symmetric, asymmetric, and hashing.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=122)** There are two main types of encryption, symmetric and asymmetric.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=128)** Asymmetric encryption is also called public key encryption, and it uses two keys, a public key and a private key.
>
> **[2:17](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=137)** Symmetric encryption is also called conventional encryption.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=142)** It uses one key, which is called the shared secret key.
>
> **[2:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=146)** A hash algorithm is a one-way function that takes a variable-length input and returns a fixed-length output.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=155)** We use hash functions in password management, digital signatures, and message digests.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=163)** Encryption and cryptographic techniques can ensure the following, confidentiality, which protects data against unauthorized disclosure.
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=173)** For this, we use encryption.
>
> **[2:56](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=176)** Integrity ensures data has not been changed, modified, or lost in an unauthorized or accidental manner.
>
> **[3:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=185)** For this we use a hash function.
>
> **[3:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=187)** Accountability, positively identifying an entity in a system, such as signing an electronic contract.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=196)** For this we use a digital signature.
>
> **[3:19](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=199)** And authentication confirms the identity of a system entity.
>
> **[3:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=204)** Here we use a message authentication code.
>
> **[3:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=208)** There are some other cryptographic concepts and terms that will include key exchange, digital signatures, certificates, trusted third party, and public key infrastructure.
>
> **[3:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cryptographic-concepts?u=76281980&t=222)** All data, whether at rest or in motion, such as data in cloud storage or traveling across the network, should use some form of cryptographic technique to ensure data confidentiality, integrity, and authentication.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), function (2), private (1), this, (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** such as (3)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Describing symmetric encryption
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=0)** - [Narrator] Whether you're protecting digital communications or data that is stored on a server, symmetric encryption is the foundation of securing data in our interconnected world.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=13)** In this segment, we'll review the basics of symmetric encryption, compare block versus stream ciphers, along with cipher modes of operation.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=24)** First, let's discuss the concept of symmetric encryption.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=29)** Symmetric encryption is also called conventional encryption and uses a single shared secret key to provide fast, efficient encryption with low overhead.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=41)** Symmetric encryption has the following components.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=46)** We start with the plaintext input, then we have the encrypting algorithm, and then we have a shared secret key which must be the same on both ends.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=59)** That results in ciphertext.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=62)** And then we have the decrypting algorithm, which is simply the encryption algorithm run in reverse.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=69)** And then this results in the plaintext output.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=73)** To give you an idea of what it looks like when text is encrypted, we'll go to this website and here, I've put in my plaintext.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=82)** And for the key, I kept it simple.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=84)** It's simply Roxy.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=86)** And for the key size, we have choices.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=88)** We can choose 128, 192 or 256-bit encryption.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=96)** Well, we'll just stay with 128 bit and say encrypt.
>
> **[1:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=100)** And down below is what you can see when text is encrypted, which won't make sense to anyone unless you have a key.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=110)** Symmetric algorithms include Data Encryption Standard or DES, Triple DES, International Data Encryption Algorithm or IDEA and Advanced Encryption Standard or AES.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=127)** Now, although we have choices in algorithms, the preferred algorithm is AES because of its large key sizes and resistance to attack.
>
> **[2:19](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=139)** Now, symmetric encryption algorithms are one of two types, either a block cipher or a stream cipher.
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=148)** Let's compare the two.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=151)** A block cipher processes plaintext in a fixed size, either 64 or 128-bit blocks.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=160)** And then this produces a ciphertext in the same size, and the algorithms include AES or 3DES.
>
> **[2:51](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=171)** Now if we add memory to a block cipher, this then results in a stream cipher.
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=177)** Stream ciphers are fast and use less code than block ciphers.
>
> **[3:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=182)** They operate on a stream of data encrypting one bit or one byte at a time, and they're used to secure wireless communications.
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=192)** Algorithms include ChaCha20, Salsa20, and AES in counter mode.
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=201)** And finally, let's talk about the cipher mode of operation.
>
> **[3:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=206)** Now, the cipher mode of operation is also called a chaining mode, and this defines the way that the plaintext and key generate the stream of ciphertext that is transmitted to the recipient.
>
> **[3:41](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=221)** This adds layer of protection against potential threats like data manipulation or unauthorized access.
>
> **[3:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=229)** Now, we have several cipher modes of operation.
>
> **[3:53](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=233)** Let's talk about a few examples.
>
> **[3:56](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=236)** The first example is Electronic Code Book, which is the simplest mode in that there is no feedback.
>
> **[4:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=245)** Each 64-bit block is encoded independently, but uses the same key.
>
> **[4:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=252)** Now, this means that the same plaintext will always result in the same ciphertext.
>
> **[4:19](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=259)** Now the following modes, cipher block chaining, cipher feedback and output feedback will add randomness to the message to provide extra security.
>
> **[4:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=271)** So let's step through an example and we'll use cipher block chaining.
>
> **[4:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=275)** Now, this will take a block of plaintext and then it will do an exclusive or operation with a previous block before it's encrypted.
>
> **[4:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=286)** So let's look at the components.
>
> **[4:48](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=288)** We see that is called an initialization vector.
>
> **[4:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=292)** And what that is is because there's no block behind it, this creates a dummy block to start the stream.
>
> **[4:59](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=299)** And this is the exclusive or operation.
>
> **[5:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=304)** And there we see that the key is input into the encrypting algorithm and that results in the ciphertext.
>
> **[5:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=313)** But what makes this a stronger algorithm is the feedback.
>
> **[5:17](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=317)** And this is the ciphertext feeding into the next block.
>
> **[5:23](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=323)** The feedback adds randomness, and this is a stronger method because even if the same plaintext block appears multiple times, each instance will encrypt differently and obscure any pattern.
>
> **[5:39](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/describing-symmetric-encryption?u=76281980&t=339)** Symmetric encryption uses a single shared secret key to provide fast, efficient encryption with low overhead, and is the foundation of securing data in our interconnected world.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), finally, (1)
> **Env Vars:** aes (4), des (2), idea (1)
> **Definitions:** means that (1), is called (1), is a  (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Best Practices:** the key is (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [narrator] (1)

#### Asymmetric encryption
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=0)** - [Narrator] Symmetric encryption provides fast, efficient encryption.
>
> **[0:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=4)** However it requires both the sender and receiver have the same shared key, which can be a problem in a complex networked environment.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=16)** Asymmetric encryption is also called public key encryption and it uses two keys that are mathematically related.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=25)** A public key that you publish and share, and a private key that you keep private.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=31)** Scientists developed asymmetric encryption in the 1970s as a need for securely exchanging a secret key became evident.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=40)** Let's step through the process of encrypting data that only Bob should see using asymmetric encryption.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=49)** We start with Alice sending a secret message to Bob with plain text input.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=55)** And now, we take Bob's public key and the encrypting algorithm.
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=61)** It then becomes cipher text.
>
> **[1:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=64)** It's sent to Bob who uses Bob's private key and the decryption algorithm it then becomes plain text output, and because only Bob has Bob's private key, only Bob can see the contents.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=80)** Asymmetric or public key encryption algorithms include RSA or PGP.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=87)** And you can use either of the keys for encryption with the other key used for decryption.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=94)** Uses for asymmetric encryption include key exchange, confidentiality, authentication functions, and creating digital signatures.
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=105)** Asymmetric encryption depends on multiplication and division, and requires more overhead in terms of CPU usage and may take up to 10,000 times more to perform as symmetric encryption which only requires simple bit operations.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=124)** However asymmetric has better security and is harder to crack.
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=129)** That is why most encryption systems are hybrid, using both symmetric and asymmetric encryption.
>
> **[2:17](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=137)** I'm at this website where we can see an example of asymmetric encryption.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=143)** Here we're going to use PGP encryption which is pretty good privacy.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=149)** You can also use a similar application called GPG which is Gnu Privacy Guard.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=155)** I'll start here.
>
> **[2:37](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=157)** In Notepad I've written This is a Super Secret Message.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=161)** But we're first going to have to generate keys.
>
> **[2:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=164)** I'll minimize this.
>
> **[2:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=166)** And on this webpage we can see PGP key generator.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=170)** Let's go there.
>
> **[2:55](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=175)** And it asks for the e-mail address.
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=177)** My e-mail address it could be made up and I'll just put Roxy at Patra dot com.
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=189)** Now we have to have a password in order to get the key so we'll use something simple: Cleo.
>
> **[3:17](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=197)** Now I'm going to say Generate PGP Keys.
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=201)** Now here you can see private key and public key.
>
> **[3:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=206)** Now understand that the private key should always kept private and the public key always kept public.
>
> **[3:32](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=212)** But because of this exercise I'm going to need to save both of them.
>
> **[3:36](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=216)** I'll select that one.
>
> **[3:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=218)** Which is your private key and here's the public key.
>
> **[3:45](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=225)** Now let's go to PGP encrypt message.
>
> **[3:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=229)** We'll want to put the PGP public key which we're simply going to use the public key we just obtained, and the message to encrypt will be the super secret message.
>
> **[4:01](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=241)** And we'll encrypt the message.
>
> **[4:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=244)** Now there's the PGP message.
>
> **[4:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=247)** Now I'll select this.
>
> **[4:10](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=250)** And decrypt the message.
>
> **[4:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=254)** Now we'll want to put that message that I just put on there, however we're going to have to go get that private key.
>
> **[4:25](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=265)** Now here we would need that pass phrase which we kept simple for this exercise, Cleo.
>
> **[4:34](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=274)** And now we'll decrypt the message.
>
> **[4:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/asymmetric-encryption?u=76281980&t=278)** So that's how public key encryption works.

> [!info]- Semantic Content
>
> **Code Keywords:** public (11), private (9), let (3), super (2), this. (2)
> **Env Vars:** pgp (7), rsa (1), cpu (1), gpg (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Protecting integrity using a hash function
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=0)** - [Teacher] A hash function is a cryptographic technique that protects data integrity.
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=6)** So what's the difference between a hash versus encryption?
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=11)** Well, encryption uses a key or pair of keys.
>
> **[0:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=14)** When we encrypt a message, we can decrypt the message as long as we have the key.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=20)** Unlike encryption, a hash is one way, meaning you cannot generate the original message from the hash.
>
> **[0:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=28)** Now we use hash functions in a number of different applications that can include authenticating a message.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=35)** We can also use a hash to monitor data integrity, store passwords, and it's even used in blockchain technology.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=44)** When we think about a hash algorithm, there are various cryptographic requirements in order to be a secure hash algorithm.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=52)** One is that it can be applied to any block of data of any size, and what this hash will then create is a fixed-sized output.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=62)** The output will depend on the algorithm.
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=65)** With a hash, it has to be easy to compute and not cumbersome, and it also needs to have strong collision resistance.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=73)** Meaning you cannot generate the same hash from another block of data.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=79)** One of the ones that we use predominantly is Secure Hash Algorithm.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=84)** The original one, which is called SHA-1, was designed by the National Security Agency, or NSA.
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=91)** SHA-2 is a family of hash algorithms.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=95)** And now what most likely you'll be seeing more of is SHA-3, and that's based on Keccak.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=102)** So we'll take you here to NIST, which does a lot of research on cryptographic techniques.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=108)** And I'm going to just scroll down here, and it talks about approved hash algorithms.
>
> **[1:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=112)** And what you see is some hash algorithms including SHA-1, and then a SHA-2 family of hash algorithms.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=120)** And you can see that there's a number of different variations of SHA-2, but we'll also see a lot more of what's called SHA-3, and that is called a permutation-based function based on Keccak.
>
> **[2:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=133)** So it does a number of different variations during the process to really make sure that you have a strong hash value.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=142)** Now, a hash function takes a variable length input, and generates a fixed length output.
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=148)** So what I want to show you is just to break it down if we were to take a message and that would be representing on the right-hand side, and the sender is going to send data to a receiver, and we want to ensure that nothing has been altered in transit.
>
> **[2:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=164)** So what happens is we take the original message, and using a hash function, we generate what's called a message digest.
>
> **[2:51](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=171)** After the hash function, this outputs what's called the digest or fingerprint.
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=177)** This digest helps ensure the data integrity.
>
> **[3:01](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=181)** Now that small stump of data then gets put on the bottom of the message, and then it gets sent to the receiver.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=188)** Now at the receiving end, what happens is the receiver will generate a new hash value from the original message, and then it will pull off that digest and compare the two.
>
> **[3:19](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=199)** If they're the same, then there's been no modification.
>
> **[3:23](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=203)** And now I'll take you to the hash generator.
>
> **[3:25](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=205)** And this allows you to generate a hash value from any string.
>
> **[3:30](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=210)** And I'll just pull this out here.
>
> **[3:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=213)** And what we'll just take is... This online tool allows you to generate a hash of any string.
>
> **[3:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=220)** And we'll put that right there.
>
> **[3:43](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=223)** Now as you can see, we've generated it and that's your hash value.
>
> **[3:47](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=227)** Now, if we take a look at the last two characters, that's a B and an eight, what we'll do is change one thing.
>
> **[3:55](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=235)** Now I am going to take out that comma right there.
>
> **[3:59](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=239)** And just by modifying one single character, as you notice, that just one character change will make the hash value change.
>
> **[4:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=249)** And I just put a space in, and as you can see, it changed again.
>
> **[4:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=252)** So a hash value takes a variable length input and outputs of fixed length output, depending on the algorithm.
>
> **[4:20](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/protecting-integrity-using-a-hash-function?u=76281980&t=260)** And it's used to monitor for data integrity.

> [!info]- Semantic Content
>
> **Env Vars:** sha (7), nsa (1), nist (1)
> **Code Keywords:** function (5)
> **Definitions:** is a  (3), is called (2)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [teacher] (1)

#### Key exchange
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=0)** - [Instructor] Asymmetric encryption is great for email confidentiality using Pretty Good Privacy or Gnu Privacy Guard.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=8)** But for large data requirements or data transfer, we use symmetric encryption, as it's fast, efficient, with low overhead.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=18)** Symmetric encryption uses a single shared key to encrypt and decrypt data.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=24)** That's why most of the time we use a hybrid cryptosystem that uses both asymmetric and symmetric encryption.
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=34)** When using symmetric encryption such as DES, DDDES, or AES to exchange data, both sides must use the same shared key.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=46)** The question is, how do both sides get the same shared key?
>
> **[0:51](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=51)** Scientists realized this early on and developed a way to securely transmit the same shared secret key.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=59)** We can ensure both parties have the same shared secret key in one of two ways: generate keys using Diffie-Hellman and use asymmetric encryption to transport the shared key.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=73)** Whitfield Diffie and Martin Hellman were two of a few groups that developed public key technology in the 1970s, as the need for securely exchanging a secret key became evident, and developed Diffie-Hellman.
>
> **[1:30](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=90)** Diffie-Hellman generates a shared secret between two parties using a mathematical algorithm without having to send any data or information between the parties.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=104)** However, we use the Diffie-Hellman algorithm for key exchange only, not encryption.
>
> **[1:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=112)** Asymmetric encryption is also called public key encryption.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=117)** It uses two keys that are mathematically related, a public key, which we publish and share, and a private key, which we keep private.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=128)** RSA is an asymmetric encryption algorithm used to send the secret key in symmetric encryption.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=135)** However, RSA can also be used for encryption and digital signatures.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=141)** So we have an asymmetric key pair on both sides and we need to securely exchange a shared secret key.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=149)** Well, let's step through the process.
>
> **[2:32](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=152)** The sender needs to send the secret key.
>
> **[2:36](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=156)** Both parties generate key pairs using asymmetric encryption, a private key and a public key.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=163)** The sender takes the receiver's public key and locks the secret key.
>
> **[2:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=169)** For this example, imagine we lock the key in a tennis ball.
>
> **[2:54](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=174)** The sender transmits the encrypted secret key to the receiver.
>
> **[2:59](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=179)** The receiver then uses his or her private key and unlocks the secret key.
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=186)** Now both sides have the same shared secret key.
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=190)** When transmitting data in a stream using symmetric encryption, both sides must share the same secret key.
>
> **[3:18](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/key-exchange?u=76281980&t=198)** In order to securely transmit the shared secret key, we use either Diffie-Hellman or asymmetric encryption.

> [!info]- Semantic Content
>
> **Code Keywords:** public (5), private (4), let (1)
> **Env Vars:** rsa (2), des (1), dddes (1), aes (1)
> **Analogies:** such as (1), imagine (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Public key infrastructure
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=0)** - [Instructor] There are some common cryptographic concepts and terms network administrators should understand.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=7)** These include key exchange, digital signatures, certificates, certificate authority, and public key infrastructure.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=18)** Key exchange is securely exchanging the shared secret key between parties.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=24)** Digital signature is a value generated using public key encryption that verifies data's origin and integrity.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=33)** A certificate authority is a trusted third party in a hybrid crypto system that both parties trust.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=40)** The certificate authority issues certificates.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=44)** We use a certificate authority when using Secure Socket Layer to communicate securely on the web.
>
> **[0:51](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=51)** Examples include Symantec, Verisign, and DigiCert, which are companies that provide certificate services.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=60)** When completing transactions on the internet, we need to use someone's public key, and we need to be able to trust that the key is from the entity from whom we receive it.
>
> **[1:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=74)** A certificate is a set of descriptive data that provides proof of identity, and is a way to ensure that you can trust the public key when you are exchanging data.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=88)** Public key infrastructure is a framework used to generate, manage, and distribute digital certificates.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=96)** Let's put this all together.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=98)** Symmetric encryption uses a single shared key, and asymmetric encryption uses a pair of keys, a public and a private key.
>
> **[1:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=109)** The public key is shared for everyone to see and use, as it's public.
>
> **[1:55](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=115)** However, in a faceless, nameless environment, such as the internet, how do we trust the public key?
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=122)** In order to trust that the public key is valid and from the genuine entity, we use a certificate authority or trusted third party.
>
> **[2:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=133)** Let's see how this works.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=135)** We see Alice and Bob, and there is no trust.
>
> **[2:19](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=139)** But Alice trusts the trusted third party, or certificate authority.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=144)** Bob trusts the trusted third party or certificate authority.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=149)** Therefore, Alice and Bob should trust one another.
>
> **[2:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=153)** We tie the concept of the certificate authority into public key infrastructure, which uses digital certificates.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=162)** Public key infrastructure is not a protocol, but a framework used to generate, manage, and distribute digital certificates, and uses a certificate authority to authenticate both parties by using a digital certificate, signed with a digital signature, for each entity.
>
> **[3:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=184)** Let's look at a high level overview of the concept of public key infrastructure.
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=189)** In this illustration, here at the top, we see the certificate authority, such as Verisign.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=196)** On the left, we see Alice, and on the right, we see [Amazon.com](https://Amazon.com).
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=201)** Alice needs Amazon's public key.
>
> **[3:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=204)** The certificate authority sends Amazon's public key, wrapped in a certificate that is signed with a digital signature, which provides assurance that the certificate came from the certifying authority.
>
> **[3:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=218)** The same goes to Amazon.
>
> **[3:41](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=221)** The certificate authority sends Amazon a certificate with a digital signature that provides assurance that the certificate came from the certifying authority.
>
> **[3:53](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=233)** Once Alice and Amazon extract the public keys they have received from the certificate authority, they can begin to securely exchange data.
>
> **[4:04](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=244)** In order to securely exchange encrypted data, we use more than encryption.
>
> **[4:10](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/public-key-infrastructure?u=76281980&t=250)** We use several cryptographic concepts, such as key exchange, digital signatures, certificates, certificate authority, and the public key infrastructure.

> [!info]- Semantic Content
>
> **Code Keywords:** public (17), let (3), private (1)
> **Definitions:** is a  (5)
> **Analogies:** such as (3)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Describe Network Topologies

#### Campus area network
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=0)** - [Narrator] A campus area network is a large private local area network in a confined location.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=8)** It can be a college campus, hospital campus, corporate campus, or a military base.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=15)** The enterprise network has all the elements necessary for operating independently and serving the client's needs.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=23)** Careful design requires that the network is available, adaptable, manageable, and secure to meet the current and future needs of the business.
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=34)** The most common design is a hierarchy design that includes core, distribution, and access layers.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=43)** The core layer is a critical layer that requires high performance routing and optimized data exchange among other core switches and distribution switches within the enterprise network.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=56)** The core is also called the network backbone and should be resilient, always on, and have redundancy to recover quickly in case of failure.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=67)** The distribution layer is the control boundary between the access and the core and has several functions.
>
> **[1:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=74)** It aggregates data from the access layer switches and provides policy based access for traffic flows within the access distribution layers.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=84)** The access layer is dedicated to meeting the needs of the endpoints on the network and allows user access to the network.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=93)** At this layer, there are several service requirements, that include configuration, discovery, access control, and security services.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=104)** In addition, this is the layer that can pose the most security risks.
>
> **[1:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=109)** Therefore it's the first line of defense for the network.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=114)** The campus area network provides connectivity, data applications, and services to the clients on the network and includes WAN and internet connections, a data center, and telephony services.
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=129)** As we can see in this graphic throughout the can, there are many attack vectors.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/campus-area-network?u=76281980&t=134)** Therefore, layer security defenses that include devices such as firewalls, intrusion detection systems, intrusion prevention systems, along with switchport security, and access control methods.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Code Keywords:** private (1)
> **Env Vars:** wan (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Cloud and wide area network
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=0)** - [Instructor] In today's large multinational companies, there may be more than the campus area network.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=7)** We now need to deal with communicating over a wide area network.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=12)** As we see in this graphic, a complex organization may have several branch offices along with teleworkers that need access to resources on the main network.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=23)** In addition, a large network may require two or more data centers and a distributive configuration to speed up access time.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=32)** The data centers might be offsite in a geographically mirrored locations.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=37)** Here we see in this graphic, the main site and branch offices along with two mirrored data centers in the center of the country.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=45)** The data center might be at a site managed by the company or it might be outsource cloud base storage facility that's managed by a hosting company.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=55)** Either way, clients will need access to data, which may be over a WAN link.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=60)** Regardless of how they access the data, you must secure the data, whether at rest or in motion.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=67)** Remote access and cloud base data centers add complexity to our security requirements.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=73)** Now we have more attack vectors to monitor.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=76)** Any external clients should access resources via a secure VPN.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=81)** Provide all clients such as remote workers and contract employees with antimalware protection.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=87)** Because many companies have many external clients, you might consider having an employee dedicated to addressing their security needs.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=96)** Any remote access client that needs to access company resources must have a secure system, as any network device without appropriate protection can pose a significant risk to the corporate network.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=110)** Various solutions are available from Microsoft and third party vendors that check the client's health and grants access to the network if the device is healthy.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=120)** Meaning, the client has updated patches, malware protection, and an active firewall.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=127)** Although encryption solves many problems that include ensuring confidentiality, authentication, and integrity, the one service that network administrators struggle with is ensuring availability.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=141)** Therefore, management should strongly consider DDoS protection.
>
> **[2:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=146)** Watch as I go to this website.
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=148)** It will monitor for malicious activity before presenting the web page.
>
> **[2:34](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=154)** Here you can see in the center, DDoS protection by Cloudflare.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=160)** Once it's sure it's not a threat, it presents the webpage.
>
> **[2:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=164)** Cloud base data centers and resources over a WAN link add more complexity to the security measures we need to take.
>
> **[2:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/cloud-and-wide-area-network?u=76281980&t=172)** With careful planning and ongoing management, you can secure your network.

> [!info]- Semantic Content
>
> **Env Vars:** wan (2), vpn (1)
> **Code Keywords:** require (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Data center
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=0)** - [Narrator] The data center is a large group of servers that provide storage, processing, and distribution of critical company data for the network clients.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=10)** It's the heart of any enterprise network and is located in a central location, generally in a secure computer or server room.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=20)** Company data is accessed in one of several ways, all of which might have a RAID configuration.
>
> **[0:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=28)** Direct attach storage is attached, such has a hard drive in a server.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=33)** Network attach storage is a group of file servers and storage area network is a separate subnetwork, that houses a large amount of data.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=44)** A data center will house one or more storage area networks and will most likely have Cloud backup for redundancy.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=53)** The configuration of the data center is to isolate the servers in a separate subnetwork, that provide a central location to manage access to the servers.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=63)** Network administrators can then secure, filter, and prioritize traffic.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=69)** The data center must ensure high availability.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=73)** So the design will include redundancy, load balancing, and failover clusters, along with high capacity switches.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=82)** In addition, there may be other devices such as Unified Computing System.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=88)** It's a hardware application that include switching fabric, virtualization, and management software.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=95)** Cisco Unified Communications Manager integrates voiceover IP, video conferencing, email, and data on the network.
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=105)** Because the data will house critical company data and trade secrets, it's a target for malicious activity.
>
> **[1:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=112)** Let's step through the anatomy of a data breach.
>
> **[1:56](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=116)** It begins with the hacker doing reconnaissance, or research on the company through various methods.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=122)** The next step is to plan the attack.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=125)** A hacker may choose to do a brute force attack on the firewall, or will most likely try an easier method first and use social engineering.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=136)** Once the hacker has obtained what they need to gain access the final step is data exfiltration, which is data that leaves the organization without authorization.
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=148)** Data center protection includes firewalls using ingress and egress filtering, and house any outward-facing appliances in a DMZ.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=158)** In addition to the many attacks from the outside, the network administrator must also be aware of the potential of an inside attack on the network, and use access control list, intrusion detection, intrusion prevention, along with Layer 2 security such as switchport security.
>
> **[2:58](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/data-center?u=76281980&t=178)** Protect the data center as it's the heart of any enterprise network.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Env Vars:** raid (1), dmz (1)
> **Analogies:** such as (2)
> **Code Keywords:** let (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### Small office home office (SOHO)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=0)** - [Instructor] A small office/home office is also a consideration when designing network access and security.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=7)** Although the office is not located within the main campus, the remote worker will have access to the corporate network via WAN link.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=16)** Data loss or compromise can happen in a small home and office just as easily as it can in the corporate office.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=24)** Data loss can occur via mobile devices and laptops, removable storage, and lax access controls in the home office.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=33)** If an organization has teleworkers with a small office/home office, outline the policy and procedures for safe computing and access while away from company resources.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=45)** For mobile devices and laptops, ensure the device has encryption and access controls along with find my device feature.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=55)** Removable storage should be discouraged, as these can be easily lost or stolen.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=60)** However, if necessary, use encryption and access controls.
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=66)** The home office should be defended as well as the corporate office.
>
> **[1:10](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=70)** Have a separate device for company access, and don't allow family members to use work devices as accidental malware downloads may occur.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=81)** For wi-fi protection, use a strong password on the access point and don't broadcast the SSID.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=89)** Use encryption.
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=91)** WPA2 with advanced encryption standard is currently the best choice for small office/home office, and promote user education for remote workers.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=103)** Best practices include use malware protection, secure browser settings, use a firewall, do regular backups, don't download executables, use strong passwords and change them often, stay away from risky websites, and think before you click.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=125)** In addition to remote workers, apply the same rule to subcontractors.
>
> **[2:11](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/small-office-home-office-soho?u=76281980&t=131)** For everyone, use the rule of least privilege and limit access to the minimal level that is necessary to complete a job or function.

> [!info]- Semantic Content
>
> **Env Vars:** wan (1), ssid (1), wpa2 (1)
> **CLI Commands:** find (1)
> **Code Keywords:** function (1)
> **Speakers:** - [instructor] (1)

#### Securing a virtual environment
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=0)** - [Instructor] An organization has many options for deploying services.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=5)** Today's network take advantage of virtual technology.
>
> **[0:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=9)** The concept of virtualization is not new, in fact, GE and IBM pioneered virtualization in the early 1960s, during that time, companies used virtualization on mainframes in order to keep the large expensive computers busy.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=29)** Fast forward to the 1980s and 1990s when networks grew in size and capacity the data center would most likely have racks of blade servers to support the needs of the organization.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=44)** However, over time, computer hardware costs have declined.
>
> **[0:48](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=48)** Here we can see in this graphic, hard drive cost per gigabyte in the 1980s, it was nearly prohibitive and then in 2015, we see that it's nearly free.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=62)** In addition to the decreased cost of hardware, the capacity has increased, as a result, many computers were utilizing only 12 to 18% of their capacity in order to optimize the capacity so the appliance was using more other capacity network administrators began to virtualize their data centers.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=86)** Virtualization is running multiple operating systems and applications on a single machine.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=93)** And I can be in one of two forms, hosted or bare metal.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=98)** With hosted virtualization, a native operating system like Windows or Mac is responsible for managing the resources.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=107)** The Virtual Machine is a guest that sits on top of the native operating system and includes VirtualBox Vmware, Virtual PC for Microsoft, and Parallels for Windows and Mac.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=122)** Bare metal virtualization uses a hypervisor that has direct access to the hardware resource and is the type of virtualization network administrators use in data centers.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=135)** Bare metal virtualization provides high availability, improved performance, redundancy and security.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=143)** Within the virtual environment we can implement security measures such as malware protection and firewalls.
>
> **[2:30](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=150)** Cisco offers and Adaptive Security Virtual Appliance designed for virtual data centers and includes ASA firewall and VPN capabilities.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=162)** Keep in mind the data center is the heart of the organization whether it's a physical or virtual environment, a multilayer defense includes firewalls, switchport security intrusion detection, intrusion prevention and auditing.
>
> **[2:59](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=179)** Even with all of the preparation and security as part of an overall security strategy, a business should prepare for disaster and have a business continuity plan.
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=191)** I'm at this website where you can reference this document if you're not familiar with a business continuity plan, let's take a look.
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=201)** I'll scroll down here and click the hyperlink and here it talks about business continuity management.
>
> **[3:29](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=209)** A necessary strategy in an overall security plan.
>
> **[3:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=213)** An organization has many options for deploying services.
>
> **[3:38](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/securing-a-virtual-environment?u=76281980&t=218)** Today's networks take advantage of virtual technology, take steps to secure the virtual environment.

> [!info]- Semantic Content
>
> **Env Vars:** ibm (1), asa (1), vpn (1)
> **Code Keywords:** new, (1), let (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Cost of a data breach
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-cost-of-a-data-breach-23668871?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-cost-of-a-data-breach-23668871?u=76281980&t=0)** - [Narrator] Let's do a challenge.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-cost-of-a-data-breach-23668871?u=76281980&t=8)** For this challenge, we'll take a look at the cost of a data breach.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-cost-of-a-data-breach-23668871?u=76281980&t=13)** First, I'll have you go to this site here at [ibm.com](https://ibm.com), and then once there, explore the site, and read through the key stats and other related information.
>
> **[0:27](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-cost-of-a-data-breach-23668871?u=76281980&t=27)** And then go to this site to calculate a loss of 20,000 records.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-cost-of-a-data-breach-23668871?u=76281980&t=33)** Select any of the variables that you feel would be appropriate, and then take a look at the figures.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-cost-of-a-data-breach-23668871?u=76281980&t=40)** After seeing the figures, were you surprised?
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-cost-of-a-data-breach-23668871?u=76281980&t=44)** This challenge should take about five minutes.
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/challenge-cost-of-a-data-breach-23668871?u=76281980&t=47)** Good luck.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2)
> **Code Keywords:** let (1)
> **URLs:** [ibm.com](https://ibm.com) (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Cost of a data breach
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=0)** - [Narrator] Okay, now let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=8)** Now first, we'll go to this site at [ibm.com](https://ibm.com), and this gives us a report on the cost of a data breach.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=16)** Now, there's a lot of figures and a lot of information that I thought you might find interesting.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=22)** So, now I'll scroll down to key stats.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=26)** First of all, we see this really large number, and this represents the global average of a total cost of a data breach in 2024 is $4.88 million.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=40)** And then it talks about the fact that 30% of the breaches involved shadow data, which is data that is collected, stored, and managed outside of an organization's standard data management and IT policies.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=57)** Shadow data is dangerous as it's difficult to monitor and protect.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=63)** And then scroll down because we're going to see some recommendations to prevent a data breach.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=69)** One is that know your information landscape.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=73)** That means where you have your data.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=76)** Know where it is so that you can protect it.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=81)** You'll also want to beef up your prevention strategies with AI and automation.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=89)** And also, step up your incident response training so your team can move quickly to limit the effects of a data breach.
>
> **[1:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=100)** So now we'll go to eRiskHub, and I thought it'd be interesting to take a look at calculating costs based on your answers to these seven questions.
>
> **[1:49](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=109)** And I'll scroll down here, and as I said, I wanted you to put in 20,000 just as a figure, but the questions are what make people think, for example, just how many records were exposed.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=123)** All right, so we said 20,000, but it says what type of data was exposed?
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=129)** Now we'll drop this down and it gives you some choices, but we know that we have various regulations that could possibly lead to a lawsuit or a huge fine.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=140)** So, if we just say PCI, we'll just leave it at that.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=145)** The next question, is this your first breach?
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=148)** And this might factor into the cost.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=151)** And I just said yes.
>
> **[2:33](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=153)** And the next question is, was the data stored in a central system or location?
>
> **[2:39](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=159)** And I'm going to say no, because I'm going to feel that some of my data might be in the form of shadow data and that is stored in other locations.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=170)** And in this case, do you expect fraud?
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=173)** And I'm going to say no.
>
> **[2:54](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=174)** And is a class action lawsuit expected?
>
> **[2:59](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=179)** We'll say no.
>
> **[3:01](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=181)** And does your organization currently have data breach coverage?
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=186)** Well, I'm going to say no.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=188)** All right, now we'll calculate this.
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=192)** So when we take a look at these figures, they're very large.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=196)** As you can see, just the investigation could be over $200,000.
>
> **[3:22](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=202)** We also see that we have to notify customers, fines and penalties, the class action lawsuit, which we don't expect.
>
> **[3:31](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=211)** But here we see the total cost, it's nearly $400,000, and that's a per record cost of $19.
>
> **[3:40](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=220)** So, this was a challenge on a data breach and I hope you learned a little bit more of the cost of a data breach.
>
> **[3:48](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/solution-cost-of-a-data-breach-23671494?u=76281980&t=228)** And I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll down (3), go to (2)
> **Code Keywords:** let (1), case, (1), this. (1)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** eriskhub (1)
> **URLs:** [ibm.com](https://ibm.com) (1)
> **Env Vars:** pci (1)
> **Versions:** 4.88 (1)
> **Definitions:** is a  (1)


### 6. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/next-steps-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/next-steps-2?u=76281980&t=0)** - [Instructor] Thank you for watching.
>
> **[0:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/next-steps-2?u=76281980&t=2)** In this course, I've covered security principles, such as the CIA Triad, security services along with security terms and organizations.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/next-steps-2?u=76281980&t=12)** I covered common security threats, such as social engineering, malware, and active and passive attacks.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/next-steps-2?u=76281980&t=19)** I reviewed cryptographic techniques, such as encryption, hashing, and digital signatures along with describing various network topologies, such as a campus area network and data centers along with virtual environments.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/next-steps-2?u=76281980&t=35)** If you're interested in learning more, please check out the library where new courses are added all the time.
>
> **[0:42](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/next-steps-2?u=76281980&t=42)** You might want to check out Securing the IOT, Privacy.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/next-steps-2?u=76281980&t=46)** If you're interested in learning about security basics, check out my Foundations of IT Security.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/next-steps-2?u=76281980&t=52)** If you're interested in encryption, please check out my Learning Cryptography and Network Security.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/next-steps-2?u=76281980&t=58)** And any course in the Ethical Hacking series will be well worth your time.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/next-steps-2?u=76281980&t=62)** For a complete list of courses, visit my author page.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-core-security-concepts/next-steps-2?u=76281980&t=67)** Keep learning. I hope to see you again soon.

> [!info]- Semantic Content
>
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