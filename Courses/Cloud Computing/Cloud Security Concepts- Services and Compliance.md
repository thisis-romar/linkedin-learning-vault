---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: cloud-security-concepts-services-and-compliance-21090306
url: "https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306"
duration_minutes: 62
duration: 1h 2m
level: Beginner
updated: 5/16/2024
learners: 65274
skills:
  - Cloud Services
  - Cloud Security
  - IT Compliance
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFWrAiIPlnf1Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1715874851813?e=2147483647&amp;v=beta&amp;t=GU9yTcbN1Bt0HwhBVbjeXNOQbKYtJzelZXW6hOalAVI"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Foundations of Cloud Computing- Models, Platforms, Services, and Careers]]'
  - '[[Cloud Strategy Professional Certificate by LinkedIn Learning]]'
prev_courses:
  - '[[Cloud Computing- Understanding Private Cloud Options]]'
  - '[[Determining Your Cloud Strategy- Planning for Roadmap, Infrastructure, and Deployment]]'
next_courses:
  - '[[Cloud Storage Concepts- Services, Cost Control, and Security]]'
  - '[[Cloud Architecture- Core Concepts]]'
path_nav: '[{"path":"Foundations of Cloud Computing- Models, Platforms, Services, and Careers","position":5,"total":9,"prev":"Cloud Computing- Understanding Private Cloud Options","next":"Cloud Storage Concepts- Services, Cost Control, and Security"},{"path":"Cloud Strategy Professional Certificate by LinkedIn Learning","position":2,"total":9,"prev":"Determining Your Cloud Strategy- Planning for Roadmap, Infrastructure, and Deployment","next":"Cloud Architecture- Core Concepts"}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/cloud-services
  - skill/cloud-security
  - skill/it-compliance
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Cloud%20Security%20Concepts-%20Services%20and%20Compliance.md)

![Cloud Security Concepts: Services and Compliance](https://media.licdn.com/dms/image/v2/D4D0DAQFWrAiIPlnf1Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1715874851813?e=2147483647&amp;v=beta&amp;t=GU9yTcbN1Bt0HwhBVbjeXNOQbKYtJzelZXW6hOalAVI)

# Cloud Security Concepts: Services and Compliance

> Understand the basics of cloud security—one of the most critical components of cloud computing. Beginning with the basics, instructor David Linthicum explains the business case for cloud security and provides an overview of the levels and models available, including infrastructure-, application-, and data-level security; identity and risk management; encryption; and multifactor authentication. The

> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306) | 1h 2m | Beginner | 65K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Introduction to cloud security](#introduction-to-cloud-security)
  - [What you should know](#what-you-should-know)
- [**1. Cloud Security Basics**](#1-cloud-security-basics) (10 videos)
  - [Business case for cloud security](#business-case-for-cloud-security)
  - [Breach scenarios and attack vectors](#breach-scenarios-and-attack-vectors)
  - [Infrastructure-level cloud security](#infrastructure-level-cloud-security)
  - [Application-level cloud security](#application-level-cloud-security)
  - [Data-level cloud security](#data-level-cloud-security)
  - [Rise of identity and access management](#rise-of-identity-and-access-management)
  - [Compliance and security](#compliance-and-security)
  - [AI-related cloud security issues](#ai-related-cloud-security-issues)
  - [Challenge: Create a cloud security business case for ABC Corp](#challenge-create-a-cloud-security-business-case-for-abc-corp)
  - [Solution: Create a cloud security business case for ABC Corp](#solution-create-a-cloud-security-business-case-for-abc-corp)
- [**2. Cloud Security Services**](#2-cloud-security-services) (8 videos)
  - [AWS cloud security services](#aws-cloud-security-services)
  - [Microsoft Cloud security services](#microsoft-cloud-security-services)
  - [Third-party cloud security services](#third-party-cloud-security-services)
  - [Cloud encryption services](#cloud-encryption-services)
  - [Encryption at rest](#encryption-at-rest)
  - [Encryption in flight](#encryption-in-flight)
  - [Security as code](#security-as-code)
  - [Security management services](#security-management-services)
- [**3. Cloud Compliance Services**](#3-cloud-compliance-services) (7 videos)
  - [Cloud compliance services in healthcare](#cloud-compliance-services-in-healthcare)
  - [Cloud compliance services in finance](#cloud-compliance-services-in-finance)
  - [Cloud compliance services in retail](#cloud-compliance-services-in-retail)
  - [Cloud compliance services in manufacturing](#cloud-compliance-services-in-manufacturing)
  - [Using generative AI for cloud compliance](#using-generative-ai-for-cloud-compliance)
  - [Challenge: Is AI-enabled security a good fit for ABC Corp?](#challenge-is-ai-enabled-security-a-good-fit-for-abc-corp)
  - [Solution: Is AI-enabled security a good fit for ABC Corp?](#solution-is-ai-enabled-security-a-good-fit-for-abc-corp)
- [**4. Planning Cloud Security**](#4-planning-cloud-security) (4 videos)
  - [Understanding your security requirements](#understanding-your-security-requirements)
  - [Selecting the right cloud security services](#selecting-the-right-cloud-security-services)
  - [Cloud security architecture guidelines](#cloud-security-architecture-guidelines)
  - [Reference security architecture to leverage as your guide](#reference-security-architecture-to-leverage-as-your-guide)
- [**Conclusion**](#conclusion) (2 videos)
  - [Current cloud security trends to watch](#current-cloud-security-trends-to-watch)
  - [Learning more about cloud security](#learning-more-about-cloud-security)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to cloud security](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/introduction-to-cloud-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/introduction-to-cloud-security?u=76281980&t=0)** - The ability to secure applications and data in the cloud has been a challenge starting when [[Cloud Computing]] first came onto the scene over 10 years ago, and continuing to this day.
>
> **[0:10](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/introduction-to-cloud-security?u=76281980&t=10)** Thankfully, these challenges have been slowly overcome, as enterprises motivated by larger data breaches seen in the news cycles, has pushed the businesses to use [[Cloud Security]] better and more consistently.
>
> **[0:24](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/introduction-to-cloud-security?u=76281980&t=24)** Hi, I'm Dave Linthicum, an internationally known cloud expert and consultant.
>
> **[0:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/introduction-to-cloud-security?u=76281980&t=29)** In my course, I'll explain a number of processes and pragmatic examples that'll help you understand the steps needed to deploy a successful cloud security enablement the first time.
>
> **[0:40](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/introduction-to-cloud-security?u=76281980&t=40)** I wish you luck and good learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (2), [[Cloud Computing]] (1)
> **Speakers:** - the (1)

#### [What you should know](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, you should have an existing understanding of [[Enterprise Architecture]], both traditional and cloud-based.
>
> **[0:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/what-you-should-know?u=76281980&t=9)** It will help to understand the basics of computing, including computing, storage, and networking.
>
> **[0:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/what-you-should-know?u=76281980&t=16)** It's also good if you already understand other more advanced topics, including security and governance.
>
> **[0:22](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/what-you-should-know?u=76281980&t=22)** However, if those are not on your list of skills, we'll provide enough information here to help you keep up.
>
> **[0:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/what-you-should-know?u=76281980&t=29)** If you're not yet comfortable with some of the topics mentioned, I suggest you review one, two, or all three of the following courses.
>
> **[0:38](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/what-you-should-know?u=76281980&t=38)** [[Cloud Architecture- Core Concepts]], [[Cloud Security]] planning, Learning [[Cloud Computing]]: Cloud Governance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Enterprise Architecture]] (1), [[Cloud Security]] (1), [[Cloud Computing]] (1)
> **Speakers:** - [instructor] (1)


### 1. Cloud Security Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Business case for cloud security](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=0)** - [Instructor] It's essential to understand the impact of [[Cloud Security]] on your organization.
>
> **[0:04](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=4)** In this video, we'll cover the concepts around cloud security you should understand to make a compelling business case to your leadership.
>
> **[0:13](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=13)** Security is critical for the protection against outside and inside threats.
>
> **[0:19](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=19)** These threats could be ransomware attacks, data breaches, or other events where applications and data may be compromised.
>
> **[0:27](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=27)** The business case for cloud security is to keep those events from happening and avoid suffering negative impact to revenue or investor and customer confidence.
>
> **[0:38](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=38)** Protecting [[Privacy]] is also core to the business case for cloud security.
>
> **[0:43](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=43)** Those who leverage clouds, and other systems for that matter, expect their data to stay private and protected.
>
> **[0:50](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=50)** An additional requirement of cloud security is the ability to protect against threats without reducing the efficiency of your system's performance and functions.
>
> **[1:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=60)** So cloud security needs to be implemented without impacting how systems work and perform.
>
> **[1:06](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=66)** Security must also protect against data loss.
>
> **[1:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=69)** This includes backing up data that ransomware attack could compromise or restoring data that was accidentally deleted.
>
> **[1:17](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=77)** Data is typically the most valuable asset that a business has.
>
> **[1:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=81)** Indeed, some laws and regulations govern the privacy of different data types, such as medical and financial information.
>
> **[1:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=89)** These laws define how the data needs to be protected and have stiff penalties for those who fail to protect the data.
>
> **[1:37](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/business-case-for-cloud-security?u=76281980&t=97)** Security, privacy, efficiency, and data protection are fundamental to cloud security and serve as the foundation of how cloud security is built.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (8), [[Privacy]] (3)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Breach scenarios and attack vectors](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=0)** - [Instructor] Breach scenarios, which are sometimes known as attack vectors, are risks you need to watch out for when you're protecting your cloud environment.
>
> **[0:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=9)** Unfortunately, breaches are not that uncommon.
>
> **[0:12](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=12)** Take for example, the recent breach at Target where customer data was exposed.
>
> **[0:17](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=17)** Clouds are typically more secure than on-premises systems.
>
> **[0:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=21)** Several years ago, the capabilities of [[Cloud Security]] surpassed that of traditional systems.
>
> **[0:26](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=26)** This is due to the fact that most of the development dollars that technology industry spends on go to solutions that exist on the public cloud.
>
> **[0:35](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=35)** This is due to the reality that much of the technology market has been moving to [[Cloud Computing]] in the last 10 years, and thus, that was an investment that technology companies considered to be wise.
>
> **[0:47](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=47)** However, you must be proactive to work with your cloud provider so that you share responsibility, your responsibility for the protection of your systems in the cloud, and the cloud provider offers a core security system for their cloud.
>
> **[1:03](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=63)** Data and application level security is key for the application and data owner, which is you.
>
> **[1:10](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=70)** This means that we're not only protecting the core systems themselves, such as operating systems, but the applications that run on those systems.
>
> **[1:19](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=79)** There are many types of data breaches to be on the lookout for and plan your security around preventing, including ransomware or forced encryption of your data that requires a ransom to be paid to unlock your data and regain access to it.
>
> **[1:35](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=95)** Encryption break where your encryption keys are compromised unless your data is visible to an attacker.
>
> **[1:41](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=101)** Physical theft, when the physical server is stolen.
>
> **[1:44](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=104)** Vulnerability exploitation, when system vulnerabilities are leveraged to gain access by an attacker.
>
> **[1:51](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=111)** DDoS, or a distributed denial of service attack, which occurs when multiple systems flood the bandwidth or resources of a targeted system in the cloud.
>
> **[2:01](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=121)** Employee data theft when trusted employees who have legitimate access to core cloud data abuse that trust by taking that data for non-authorized purposes.
>
> **[2:12](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=132)** Let's take a moment to consider an example of an email [[Phishing]] scheme that could cause a data breach.
>
> **[2:18](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=138)** A thief sends an email with a fake link, hoping the user will click it.
>
> **[2:24](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=144)** If clicked, the link may install malicious software or malware on the user's computer.
>
> **[2:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=149)** The malware can then transmit information back to the thief, such as passwords and other sensitive information.
>
> **[2:36](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=156)** What's worse is that this kind of breach may not be discovered for several days, weeks, or even months.
>
> **[2:43](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=163)** The real damage that's often done when security practices fall short is damage to the reputation of the company.
>
> **[2:50](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/breach-scenarios-and-attack-vectors?u=76281980&t=170)** While the company may be the victim of an attack, many data breaches become PR nightmares and have the potential to bring down the company itself if the public views them as untrustworthy or incompetent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (1), [[Cloud Computing]] (1), [[Phishing]] (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** known as (1), means that (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Warnings:** watch out (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Infrastructure-level cloud security](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=0)** - [Instructor] Security is complex, so it's essential to understand how to break the [[Cloud Security]] components apart at the problem and the infrastructure levels.
>
> **[0:10](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=10)** This video will explore how to provide cloud security at the storage, computing and network levels for public clouds.
>
> **[0:17](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=17)** You must start with securing the foundational infrastructure services, networking, storage, database, and computing.
>
> **[0:24](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=24)** Applications and data leverage this information and therefore, services must be leveraged securely.
>
> **[0:31](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=31)** You also need to consider security at the [[Cloud Infrastructure]] level, such as zones or segments of public clouds.
>
> **[0:38](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=38)** Also regions or the physical region of the cloud infrastructure.
>
> **[0:43](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=43)** Finally, edge clouds or clouds that may exist outside of the central public cloud or sometimes on premises.
>
> **[0:51](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=51)** These are the security services that sit alongside the foundational infrastructure services.
>
> **[0:57](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=57)** They provide the basics, including the directory to store and manage identities and an identity access management, which allows specific identities to be credentialed for certain resources or more simply put, we're making sure that all of those seeking access to applications and data resources are known to the security system.
>
> **[1:18](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=78)** Once that occurs, we can provide them access or not to specific resources.
>
> **[1:23](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=83)** For example, as someone who does not work in the HR department, I should not have access to the pay rate database.
>
> **[1:32](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=92)** Finally, network, data and [[Application Security]].
>
> **[1:36](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=96)** At the top of the chart are things being protected.
>
> **[1:40](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=100)** This includes applications and the data that's connected to the applications.
>
> **[1:45](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/infrastructure-level-cloud-security?u=76281980&t=105)** Remember that the security services manage access to those resources in secure and protected ways.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (2), [[Cloud Infrastructure]] (2), [[Application Security]] (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Application-level cloud security](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=0)** - [Narrator] There are several components of [[Application Security]] for the cloud, including application/data or the application itself and the data connected to the application.
>
> **[0:11](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=11)** An example is a cloud-based accounting application connected to a database like Oracle.
>
> **[0:17](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=17)** Event monitoring or logging means recording how an application is running and what events are occurring, such as updating a database or logging in users, encryption at [[Representational State Transfer (REST)|rest]], meaning that the data is stored on a virtual or physical device and encrypted and thus protected.
>
> **[0:36](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=36)** Encryption in flight means that the data moving over a network is encrypted and thus not visible to those monitoring the network.
>
> **[0:44](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=44)** Credentials, meaning that we can validate users and devices to applications.
>
> **[0:50](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=50)** Threat detection means we can spot issues through a proactive monitoring approach.
>
> **[0:56](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=56)** Next, let's take a look at application logs.
>
> **[0:59](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=59)** These logs are core to application security because they can spot issues through a proactive monitoring and recording of events.
>
> **[1:08](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=68)** You can think of this as a program that can write in a virtual journal about what's occurring within the applications and how security interacts with the applications.
>
> **[1:20](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=80)** For example, in finance, these logs must be kept by law so auditors can understand what happened within the application and data and how security functions over time.
>
> **[1:31](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=91)** Constant monitoring of application logs can facilitate the detection of direct security breaches or even events leading to a security breach, such as saturation of the CPUs on the compute server that an attacker is leveraging.
>
> **[1:46](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=106)** There are numerous kinds of logs.
>
> **[1:48](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=108)** They can range from application logs or looking at what the application is doing specifically, such as updating a record in the user interface.
>
> **[1:57](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=117)** Data events are any interaction with the database by the applications.
>
> **[2:02](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=122)** Application events that focus on events such as when the application performs specific tasks such as correcting a user error.
>
> **[2:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=129)** Session logs, or logging an action of a session, where the application is leveraged.
>
> **[2:15](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=135)** Configuration logs that focus on changing configurations such as performance parameters.
>
> **[2:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=141)** Infrastructure usage are when the application leverages infrastructure such as storage and compute.
>
> **[2:27](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=147)** Special purpose are logs created for specific purposes unique to that application, such as monitoring for compliance.
>
> **[2:34](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=154)** The idea here is to understand that an application needs security and the data attached to it.
>
> **[2:41](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/application-level-cloud-security?u=76281980&t=161)** In many cases, application security is neglected in the cloud, and you'll find that it's a vulnerability that can't be ignored.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** such as (8), for example (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Data-level cloud security](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=0)** - [Instructor] There are many levels of consideration when it comes to [[Data Security]].
>
> **[0:04](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=4)** Let's explore these levels to better understand the special needs of data in the cloud when it comes to security.
>
> **[0:11](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=11)** Data security is the ability to secure the data, either stored directly on [[Cloud Storage]], such as [[Amazon Web Services (AWS)|Amazon Web Services]] S3 object storage, or in a database, either native cloud or third party.
>
> **[0:24](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=24)** You can break cloud data security down into these different concepts.
>
> **[0:28](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=28)** Database level, or security for the entire database.
>
> **[0:32](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=32)** For example, if you're leveraging Oracle, this would give you the ability to limit access to Oracle by users already logged into the cloud.
>
> **[0:40](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=40)** Table/object level, or secure specific tables within a database, such as tables or objects for storing all customer information.
>
> **[0:50](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=50)** Record level, or dealing with the record of data, such as information about a single customer, name, address, phone number, et cetera.
>
> **[0:59](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=59)** Storage level, or the ability to deal with security around the cloud storage system that supports one or many [[Databases]], such as several databases running on Amazon Web Services S3.
>
> **[1:12](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=72)** Platform level, or the operating system and cloud hosts that host the storage databases and other systems related to storing and securing data.
>
> **[1:22](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=82)** In flight, meaning data moving from one system to another, inter and intra-cloud.
>
> **[1:28](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=88)** At [[Representational State Transfer (REST)|rest]] means anytime the data is stored on physical or virtual storage.
>
> **[1:34](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=94)** Data security basics, which refers to the essence of how databases and [[Data Storage]] works, include the following.
>
> **[1:41](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=101)** Access or the ability to securely access the data.
>
> **[1:45](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=105)** This includes access to the cloud account, platform, and database.
>
> **[1:49](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=109)** Management of the data security, or how we're changing and improving the way and mechanisms used to secure it.
>
> **[1:56](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=116)** Storage, or the ability to secure the storage systems that support the databases and raw data storage.
>
> **[2:02](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=122)** I/O, or input/output, means the raw aspect of storage.
>
> **[2:07](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=127)** Remember that while we can have the database and storage systems secured, if they can get to the raw storage, they'll have access to all of the data stored in a basic native format.
>
> **[2:20](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=140)** Data security in the cloud includes handling everything stored by the business and protecting things reserved for processes and people not authorized to access that data.
>
> **[2:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/data-level-cloud-security?u=76281980&t=149)** Considering that data is perhaps a business's most critical asset, this is a foundational [[Cloud Security]] concept.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Security]] (6), [[Databases]] (5), [[Cloud Storage]] (2), [[Amazon Web Services (AWS)|Amazon web services]] (2), [[Data Storage]] (2)
> **Analogies:** such as (4), for example (1)
> **Definitions:** refers to (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Rise of identity and access management](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=0)** - [Instructor] Identity and access management, or IAM, is imperative to [[Cloud Security]] to protect access to devices and resources.
>
> **[0:10](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=10)** It's a fundamental concept for assigning unique identities to people, processes, and data, and using those identities to either authorize or deny access to resources such as applications and data found in the cloud.
>
> **[0:23](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=23)** Let's look at how to manage identities in the cloud and how this applies to cloud security.
>
> **[0:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=29)** First, what are identities?
>
> **[0:31](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=31)** Identities can credential a human, device, application, or data to a cloud-based resource.
>
> **[0:39](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=39)** This allows us to allow or disallow access to those resources, thus allowing us to provide a security solution customized to the business's exact needs.
>
> **[0:49](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=49)** In this example, we are creating an identity with AWS, allowing us to manage that identity.
>
> **[0:55](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=55)** Keep in mind that within the world of identity access management, identities can be more things than people.
>
> **[1:02](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=62)** Considering applications, [[Databases]], devices, et cetera, all interact with the cloud systems as well.
>
> **[1:10](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=70)** In this example, we'll do a few simple tasks.
>
> **[1:14](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=74)** We'll create an AWS account, and you are the only person who works in your account.
>
> **[1:19](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=79)** This means we're just creating an account for a single person to be identified in the cloud, using a single identity.
>
> **[1:27](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=87)** Other people in your group must work in your AWS account, so their identities are also added.
>
> **[1:34](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=94)** This will be unorganized regarding [[Security Management]], and time-consuming if we have to configure each identity individually.
>
> **[1:42](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=102)** This allows us to manage those identities as a group.
>
> **[1:45](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=105)** Keep in mind that the same identity can belong to many different groups.
>
> **[1:49](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=109)** Groups are essential since you can manage a collection of identities versus dealing with them individually.
>
> **[1:56](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=116)** Groups can be complex, with a single identity belonging to as many as 100 different groups that have other access privileges granted.
>
> **[2:05](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=125)** We've seen this in our daily lives.
>
> **[2:06](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=126)** For example, they won't let you update some information.
>
> **[2:10](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=130)** Instead, they require you to call the bank and have somebody authorize to correct them.
>
> **[2:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=136)** You have two different identities, thus two types of access privileges are managed.
>
> **[2:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=141)** Groups are the fundamental building blocks of cloud security services since they make managing access privileges quick and easy.
>
> **[2:28](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=148)** Spending time upfront defining and designing your security access plan is a good idea.
>
> **[2:33](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=153)** This includes groups, what those groups are, what the attributes are, and what privileges that they have.
>
> **[2:41](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=161)** Identity and access management is fundamental to cloud security, given how it allows cloud developers and security engineers to deal with security in fine-grained and [[Agile Development|agile]] ways.
>
> **[2:52](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/rise-of-identity-and-access-management?u=76281980&t=172)** This supports the concepts of a complex distributed system, which is what [[Cloud Computing]] systems are.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (4), [[Databases]] (1), [[Security Management]] (1), [[Agile Development|Agile]] (1), [[Cloud Computing]] (1)
> **CLI Commands:** aws (3), make (1)
> **Env Vars:** aws (3), iam (1)
> **Analogies:** such as (1), for example (1)
> **Warnings:** keep in mind (2)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Compliance and security](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=0)** - [Instructor] Compliance deals with regulatory laws, such as HIPAA, or H-I-P-A-A.
>
> **[0:07](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=7)** In this video, we'll talk about how rules and regulations come into play in [[Cloud Security]] and how not to run against the law.
>
> **[0:14](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=14)** Core to the success of [[Cloud Computing]] compliance and security is understanding the different types of rules and regulations related to your industry.
>
> **[0:22](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=22)** HIPAA, or the Health Insurance Portability and [[Accountability]] Act of 1996, is a US core regulation regarding how health data is shared.
>
> **[0:32](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=32)** As outlined by law, there are stiff fines and even imprisonment for those who do not handle and protect the data.
>
> **[0:38](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=38)** Most public clouds understand how to comply with this regulation and have purpose-built systems for HIPAA data.
>
> **[0:45](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=45)** SOX, or Sarbanes-Oxley Act, protects employees who report fraud and other business malfeasance.
>
> **[0:53](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=53)** This also regulates how some business data should be handled and how business processes should be recorded or logged to assist in a federal investigation.
>
> **[1:02](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=62)** GDPR, or General Data Protection Regulation, is a regulation in European Union law on data protection and [[Privacy]] in the European Union and European Economic Area.
>
> **[1:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=76)** It requires new processes, technology, and even human roles.
>
> **[1:20](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=80)** Human roles are processes carried out by people, not computer automations.
>
> **[1:25](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=85)** Humans can play a more important role than most understand.
>
> **[1:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=89)** PCI, or the [[PCI DSS|Payment Card Industry Data Security Standard]], is a information security standard for companies that handle branded credit cards.
>
> **[1:38](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=98)** The PCI Standard is mandated for businesses that leverage credit cards.
>
> **[1:43](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=103)** Most retail companies have to deal with credit cards, and thus, deal with PCI compliance.
>
> **[1:48](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=108)** These are just a few of the regulations out there.
>
> **[1:51](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=111)** Depending on the type of business you're in and the countries where you're doing business, this needs to be taken on a case-by-case basis.
>
> **[1:59](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=119)** It's up to you to create cloud systems compliant with the law.
>
> **[2:02](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=122)** You'll find that businesses that don't understand laws and regulations and implement the proper protections in their cloud-based systems end up in trouble quickly.
>
> **[2:12](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=132)** The penalties are steep and the consequences could be severe.
>
> **[2:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=136)** Thus, this is more about technology than how the technology responds and complies with applicable rules and regulations.
>
> **[2:24](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=144)** Most of this is understanding how data and processes should be secured and tracked.
>
> **[2:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/compliance-and-security?u=76281980&t=149)** It's different for all regulations, and while cloud providers can assist you in most compliance-related services, you must ensure that laws and regulations are followed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (1), [[Cloud Computing]] (1), [[Accountability]] (1), [[Privacy]] (1), [[PCI DSS|Payment card industry data security standard]] (1)
> **Env Vars:** hipaa (3), pci (3), sox (1), gdpr (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [AI-related cloud security issues](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980&t=0)** - [Instructor] Security issues related to AI or artificially intelligent systems in public clouds can encompass several areas.
>
> **[0:08](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980&t=8)** Let's look at a few.
>
> **[0:10](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980&t=10)** Operational security or ensuring proper access controls.
>
> **[0:14](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980&t=14)** Monitoring and logging to detect and respond to security incidents or anomalies within the AI system in the cloud.
>
> **[0:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980&t=21)** [[Data Security]] or protecting secure data used by AI systems, for example, training data.
>
> **[0:27](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980&t=27)** This may involve encryption, access control, and secure data transfer protocols used to secure data.
>
> **[0:35](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980&t=35)** Model security or protecting AI models from attacks, data poisoning or unauthorized modifications.
>
> **[0:42](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980&t=42)** Data poisoning injects the model with malicious knowledge, allowing a breach to occur.
>
> **[0:47](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980&t=47)** For instance, injecting bias that favor a specific customer enables that customer to remove funds from a bank.
>
> **[0:53](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980&t=53)** Compliance and governance, adhering to industry regulations and standards, such as GDPR, HIPAA or SOC 2, ensures that public cloud AI systems meet legal and compliance requirements regarding data handling and processing.
>
> **[1:10](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980&t=70)** Infrastructure security or securing the [[Cloud Infrastructure]] that is hosting the AI systems.
>
> **[1:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980&t=76)** This may include network segmentation, identity and access management, and regular audits.
>
> **[1:22](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980&t=82)** Ethical considerations are addressing ethical implications related to AI usage.
>
> **[1:28](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/ai-related-cloud-security-issues?u=76281980&t=88)** This may include bias mitigation, fairness, and transparent [[Decision-Making]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Security]] (1), [[Cloud Infrastructure]] (1), [[Decision-Making]] (1)
> **Env Vars:** gdpr (1), hipaa (1), soc (1)
> **Analogies:** for example (1), for instance (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a cloud security business case for ABC Corp](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-create-a-cloud-security-business-case-for-abc-corp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=0)** - [Instructor] Welcome to this course's first challenge.
>
> **[0:10](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=10)** Consider this scenario.
>
> **[0:12](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=12)** ABC Corporation makes unique hammocks for backpacking.
>
> **[0:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=16)** They are known worldwide for selling the lightest and most durable hammocks, and to support their business, they have moved their core systems into the cloud.
>
> **[0:25](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=25)** They understand that they also need security systems for their applications and [[Databases]] in the cloud.
>
> **[0:32](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=32)** You have been tasked with creating a business case for this security system that includes the benefits the company can enjoy as part of the system and the return on investment to the business.
>
> **[0:43](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=43)** There is no need to write things down, but you're welcome to do so if it helps.
>
> **[0:47](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=47)** Please create a short business case that ABC can leverage to take to their board of directors to request funding for the security system.
>
> **[0:55](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=55)** Ensure to highlight the benefits, thus the return of value to the business.
>
> **[1:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=60)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **Env Vars:** abc (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a cloud security business case for ABC Corp](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=0)** (bright music)
>
> **[0:07](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=7)** - [Instructor] So how did it go?
>
> **[0:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=9)** The core task is to outline the business benefit for ABC.
>
> **[0:13](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=13)** Well, you can do this in many ways.
>
> **[0:15](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=15)** Let's look at what we learned in a previous video.
>
> **[0:19](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=19)** Keep in mind that security is for the protection of outside or inside threats.
>
> **[0:24](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=24)** The threats could be ransomware attacks, data breaches, and other events where applications and data may be compromised.
>
> **[0:31](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=31)** The business case for [[Cloud Security]] is to keep those events from happening and avoid suffering a negative impact on revenue, investor and consumer confidence.
>
> **[0:41](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=41)** Protecting [[Privacy]] is also core to the business case for cloud security.
>
> **[0:46](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=46)** Those who leverage clouds and other systems for that matter, expect their data to stay private and protected.
>
> **[0:52](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=52)** An additional requirement of cloud security is to protect without reducing the efficiency of systems' performance or functions.
>
> **[1:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=60)** So cloud security needs to be implemented without impacting how systems work and perform.
>
> **[1:06](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=66)** Security must also protect against data loss.
>
> **[1:08](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=68)** This includes backing up data that a ransomware attack could compromise or restoring data that was accidentally deleted.
>
> **[1:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=76)** Data is typically the most valuable asset that a business has.
>
> **[1:19](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=79)** So, how did you do?
>
> **[1:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=81)** Do you remember all of the likely issues that you needed to consider?
>
> **[1:26](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-create-a-cloud-security-business-case-for-abc-corp?u=76281980&t=86)** Great job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (4), [[Privacy]] (1)
> **Env Vars:** abc (1)
> **Cross-References:** previous video (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 2. Cloud Security Services

[↑ Back to Table of Contents](#table-of-contents)

#### [AWS cloud security services](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/aws-cloud-security-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/aws-cloud-security-services?u=76281980&t=0)** - [Instructor] [[Amazon Web Services (AWS)|Amazon Web Services]], or AWS, is the leading cloud vendor.
>
> **[0:05](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/aws-cloud-security-services?u=76281980&t=5)** This video will define how security is handled using the native AWS [[Cloud Services]].
>
> **[0:11](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/aws-cloud-security-services?u=76281980&t=11)** Security services are just one part of AWS's hundreds of cloud services, which belong to their Infrastructures as a Service, or [[IaaS]], cloud offerings.
>
> **[0:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/aws-cloud-security-services?u=76281980&t=21)** The following is a set of services that AWS classifies as [[Cloud Security]] services.
>
> **[0:26](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/aws-cloud-security-services?u=76281980&t=26)** As we go through them, notice the variety, including networking security, encryption, identity services, and other base services that you can leverage as part of your cloud deployment.
>
> **[0:36](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/aws-cloud-security-services?u=76281980&t=36)** Primary cloud security services within AWS.
>
> **[0:39](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/aws-cloud-security-services?u=76281980&t=39)** Identity access management, or IAM, ensures secure access control to AWS's services and resources by managing identities for various entities, such as humans, data, and servers.
>
> **[0:51](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/aws-cloud-security-services?u=76281980&t=51)** Amazon Inspector automatically discovers workloads, such as [[Amazon EC2]] instances, containers and Lambda functions, and scans them for software vulnerabilities and unintended network exposure.
>
> **[1:04](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/aws-cloud-security-services?u=76281980&t=64)** Of course, these are just a few of the tools that AWS provides as native AWS services.
>
> **[1:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/aws-cloud-security-services?u=76281980&t=69)** AWS sells hundreds of other services in its marketplace, where you can find and purchase third-party services, including some that replace the ones listed above.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Services]] (2), [[Cloud Security]] (2), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[IaaS]] (1), [[Amazon EC2]] (1)
> **Env Vars:** aws (9), iam (1), ec2 (1)
> **CLI Commands:** aws (9), find (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Microsoft Cloud security services](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/microsoft-cloud-security-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/microsoft-cloud-security-services?u=76281980&t=0)** - [Narrator] As one of the top vendors, it's essential to understand how security is dealt with using the native [[Microsoft]] [[Cloud Services]].
>
> **[0:07](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/microsoft-cloud-security-services?u=76281980&t=7)** As with AWS, Microsoft has about the same amount of security services with very similar functions.
>
> **[0:13](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/microsoft-cloud-security-services?u=76281980&t=13)** It's interesting to see how they adopt each other's ideas.
>
> **[0:18](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/microsoft-cloud-security-services?u=76281980&t=18)** Let's reduce some of the major security services that Microsoft cloud services offers.
>
> **[0:22](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/microsoft-cloud-security-services?u=76281980&t=22)** [[Microsoft Entra ID|Azure Active Directory]] is Microsoft's IAN, or identity access management solutions, providing a single sign-on and [[Multi-factor Authentication]].
>
> **[0:31](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/microsoft-cloud-security-services?u=76281980&t=31)** [[Microsoft Azure|Azure]] is Microsoft's public cloud.
>
> **[0:34](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/microsoft-cloud-security-services?u=76281980&t=34)** This works differently than AWS IAN in that it focuses on the directory service, whereas [[Active Directory]] is a popular on-premises directory service as well.
>
> **[0:45](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/microsoft-cloud-security-services?u=76281980&t=45)** Azure Security Center is a security manager and security posture manager and threat protection for [[Hybrid Cloud]] workloads.
>
> **[0:53](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/microsoft-cloud-security-services?u=76281980&t=53)** This provides monitoring and the control that spans security systems within Azure.
>
> **[0:59](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/microsoft-cloud-security-services?u=76281980&t=59)** Azure Information Protection is a unique service found in Azure that controls and secures email, documents, and sensitive data that you share outside of your organization.
>
> **[1:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/microsoft-cloud-security-services?u=76281980&t=69)** This service is worth a look for those of you who deal with a great deal of unstructured information that needs to be secured.
>
> **[1:17](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/microsoft-cloud-security-services?u=76281980&t=77)** Again, these services will frequently change, and the best approach is to understand generally what they do and how they are leveraged.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (5), [[Microsoft Azure|Azure]] (5), [[Cloud Services]] (2), [[Microsoft Entra ID|Azure active directory]] (1), [[Multi-factor Authentication]] (1)
> **Env Vars:** aws (2), ian (2)
> **Definitions:** is a  (3)
> **CLI Commands:** aws (2)
> **Speakers:** - [narrator] (1)

#### [Third-party cloud security services](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=0)** - [Instructor] Third-party security services are purchased outside of your cloud provider and can provide a different level of value, since they are cloud-agnostic.
>
> **[0:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=9)** In this video, we'll explore the benefits and drawbacks of third=party security services.
>
> **[0:14](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=14)** You'll find that neither AWS or [[Microsoft]] have all of the security services that you'll need for your cloud-based applications and data.
>
> **[0:22](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=22)** In these cases, we'll look for third-party services in the marketplaces that most public [[IaaS|infrastructure as a service]] cloud providers provide.
>
> **[0:31](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=31)** This is a simple listing of services you can add to your public cloud account and leverage them as native services.
>
> **[0:37](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=37)** Understand, however, they are created and maintained by third-party providers working with your public cloud provider, and they are not controlled directly by the provider.
>
> **[0:47](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=47)** You'll often have to reach out to a third-party provider for support.
>
> **[0:51](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=51)** Sometimes, it's difficult to figure out solutions to problems, considering it could be the cloud provider, the third-party provider, or both.
>
> **[0:59](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=59)** Although the type of third-party security tools vary from provider to provider, the basic categories of third-party tools that you'll find include governance, including risk management services, resources, and data access management, identity, or IAM services.
>
> **[1:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=76)** They typically leverage the native directory services found on the public cloud provider, but may add an additional value to IAM security, including managing massive numbers of identities and groups.
>
> **[1:28](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=88)** Authentication services, or the ability to authorize usage of resources such as storage, computing, and database.
>
> **[1:35](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=95)** Authorization is the ability to do special authorization activities, such as [[Multi-factor Authentication]] via a mobile phone.
>
> **[1:43](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=103)** Audit, or the ability to find information supporting a security audit.
>
> **[1:47](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=107)** This allows you to check on the status of specific security systems.
>
> **[1:52](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=112)** Encryption, or the ability to encrypt data in flight or at [[Representational State Transfer (REST)|rest]], as covered in other videos.
>
> **[1:58](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=118)** Compliance, or the ability to implement restrictions to ensure that you comply with all applicable regulations and laws.
>
> **[2:05](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=125)** There are pros and cons of leveraging third-party cloud solutions.
>
> **[2:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=129)** The pros are that, as we covered in the previous example, new features can be added that augment some of the features the native [[Cloud Services]] may be missing.
>
> **[2:18](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=138)** This can save you tens of thousands of dollars in adding them yourself through custom development.
>
> **[2:23](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=143)** The cons are that the support channels can be a bit confusing.
>
> **[2:27](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=147)** Third-party services are not supported by the cloud provider, and thus, you need to go directly to those providers.
>
> **[2:33](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/third-party-cloud-security-services?u=76281980&t=153)** You'll be dealing with two or more support organizations, all unaware of each other.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[IaaS|Infrastructure as a service]] (1), [[Multi-factor Authentication]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Cloud Services]] (1)
> **CLI Commands:** find (3), aws (1)
> **Env Vars:** iam (2), aws (1)
> **Analogies:** such as (2)
> **Cross-References:** we covered (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Cloud encryption services](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=0)** - [Narrator] It's essential to understand the role encryption plays in protecting your data.
>
> **[0:04](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=4)** Let's look at what third party encryption tools and services are around to add more security to your cloud.
>
> **[0:11](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=11)** Encryption, simply put, is the ability to hide data from those who are unauthorized to see the data.
>
> **[0:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=16)** Encryption has a long history predating computing, such as sending messages within armies during most wars.
>
> **[0:23](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=23)** Messages had to be difficult to decipher in the case that they were intercepted by the opposing army.
>
> **[0:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=29)** As time went on, machines were built to automate the encryption process, providing a way to send and receive messages that couldn't be understood by those who intercepted them unless they had the exact machine to encrypt and decrypt the message.
>
> **[0:42](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=42)** Encryption is driven by [[Algorithms]] that define how the encryption should be carried out.
>
> **[0:47](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=47)** While this is an expansive topic, two types of encryption are core to [[Cloud Computing]].
>
> **[0:53](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=53)** Symmetric or security key encryption, better known as DES, is a data encryption standard.
>
> **[0:59](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=59)** And asymmetric or public key encryption, better known as RSA encryption, or Rivest, Shamir, Adleman.
>
> **[1:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=69)** The acronym RSA comes from the last names of Ron Rivest, Adi Shamir, and Leonard Adleman, who first described the algorithm in 1977.
>
> **[1:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=81)** For our purposes, besides understanding that encryption types are different, you don't typically need to understand the details of these types of encryptions or other encryption approaches.
>
> **[1:31](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=91)** These are tools that you can employ for [[Cloud Security]].
>
> **[1:34](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=94)** The encryption process is rapidly evolving, and the types of encryption you leverage for cloud security will change quickly over time.
>
> **[1:40](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=100)** It's also important to note that some encryption types can't be exported to certain countries due to laws and regulations that certain countries enforce.
>
> **[1:49](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=109)** Considering that security is typically implemented globally, you need to be aware of this legal issues around leveraging specific types of encryption from country to country.
>
> **[2:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=120)** There are two ways to do encryption at [[Representational State Transfer (REST)|rest]] and in flight.
>
> **[2:03](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=123)** Let's focus on examples of usage here.
>
> **[2:07](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=127)** At rest is used most frequently and allows you to place data in storage systems or [[Databases]] using storage systems that are encrypted.
>
> **[2:14](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=134)** Thus, if the storage systems are breached, those breaching the system should not be able to see the data.
>
> **[2:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=141)** Even the cloud provider can't see the data without the encryption key needed to decrypt the data.
>
> **[2:27](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=147)** In flight encryption is not as widely used.
>
> **[2:30](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=150)** The term means that data moving over a network is encrypted, and thus if the data is intercepted, it can't be seen.
>
> **[2:37](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=157)** Retail companies may employ encryption in flight to hide credit card data coming from their websites.
>
> **[2:43](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-encryption-services?u=76281980&t=163)** Encryption is fundamental to cloud security, and your ability to understand the types and uses of encryption is key to any security solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (3), [[Representational State Transfer (REST)|Rest]] (2), [[Algorithms]] (1), [[Cloud Computing]] (1), [[Databases]] (1)
> **Definitions:** known as (2), is an  (1), is a  (1), means that (1)
> **Env Vars:** rsa (2), des (1)
> **Warnings:** note that (1), be aware (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Encryption at rest](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=0)** - [Narrator] A successful security plan must protect your data at [[Representational State Transfer (REST)|rest]].
>
> **[0:05](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=5)** This video will help you understand how encryption at rest works, and when to leverage it.
>
> **[0:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=9)** At rest, encryption is leveraged most of the time that data is stored in the cloud.
>
> **[0:14](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=14)** For example, a hospital encrypts patient data per federal regulations that is stored on a [[Cloud Storage]] system.
>
> **[0:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=21)** Some of the advantages of rest encryption are the ability to hide data from anyone who does not have the encryption key, this enables only human or application with the key to decrypt the data and view it; the ability to comply with laws that require that specific data be encrypted when stored; the ability to limit access to the data to certain people in the organization who are authorized to see it.
>
> **[0:45](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=45)** Some of the risks that you run when leveraging encryption at rest include losing the encryption key, and thus not having access to the data.
>
> **[0:53](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=53)** Those reaching the system can exploit vulnerabilities to decrypt your data.
>
> **[0:57](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=57)** The encryption process employs too much CPU time and input/output, thus causing performance problems or excessive cloud bill due to overusage.
>
> **[1:07](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=67)** The critical attributes of encryption at rest that you should know to understand [[Cloud Security]] include physical [[Data Storage]] of the material, or virtual storage systems that store the data.
>
> **[1:19](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=79)** When considering cloud storage, you'll not know where the data is held since the cloud provider manages that on your behalf.
>
> **[1:26](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=86)** Data structure and [[Metadata]] are how the data is structured on a physical storage system, for example, a database schema that's used to store customer information.
>
> **[1:35](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=95)** Encryption mechanism, the program and algorithm used for encryption, such as DES or RSA.
>
> **[1:41](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=101)** Decryption mechanism, the program and algorithm used for de-encryption, such as DES and RSA.
>
> **[1:48](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=108)** Interface, or how you're interacting with the data and encryption, such as an API or cloud service.
>
> **[1:54](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=114)** API stands for application programming interface.
>
> **[1:58](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=118)** Management, or the ability to manage the encryption at rest mechanisms, is usually an encryption software system within the cloud.
>
> **[2:06](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=126)** When considering encryption at rest and in flight, you'll find that most focus on storage or at rest.
>
> **[2:12](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-at-rest?u=76281980&t=132)** This is because the data spends most of its time stored, thus the focus of cloud storage security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (9), [[Cloud Storage]] (3), [[Cloud Security]] (1), [[Data Storage]] (1), [[Metadata]] (1)
> **Env Vars:** des (2), rsa (2), api (2), cpu (1)
> **Analogies:** such as (3), for example (2)
> **CLI Commands:** find (1)
> **Definitions:** stands for (1)
> **Speakers:** - [narrator] (1)

#### [Encryption in flight](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=0)** - Encryption in flight protects your data as it moves through the network.
>
> **[0:04](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=4)** Let's look at how encryption in flight works and when to leverage it.
>
> **[0:08](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=8)** Simply put, encryption in flight is the encryption of data moving over a network.
>
> **[0:13](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=13)** This is especially important for those using the open internet for transporting data, which is part of most public cloud implementations.
>
> **[0:22](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=22)** There are two steps to encryption in flight, encryption of the data to be moved over the network and decryption on the authorized receiver side.
>
> **[0:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=29)** Each side uses a unique encryption key and is leveraged to authorize who can see the data.
>
> **[0:35](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=35)** Examples of those who would use this technology include banks that are doing online transactions and healthcare organizations transmitting HIPAA, protected information to comply with health related regulations.
>
> **[0:48](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=48)** Even if you are leveraging an application on your phone that needs to encrypt data from your phone to the backend servers in the cloud.
>
> **[0:57](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=57)** Some of the key features of encryption in flight include [[Network Security]] or the ability to secure the physical network.
>
> **[1:03](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=63)** Keep in mind that many networks are software defined and exist in the cloud.
>
> **[1:07](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=67)** Thus, you'll need to understand the network security services offered by your public cloud provider.
>
> **[1:12](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=72)** Outbound inbound encryption, as mentioned previously, is the ability to encrypt and decrypt data moving over the network.
>
> **[1:20](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=80)** Interface or how we interact with the over the network encryption systems is usually provided as a separate software system running in the cloud.
>
> **[1:28](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=88)** Management of the encryption in flight system, such as setting up the encryption sender and receiver and management of encryption keys.
>
> **[1:36](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=96)** In-flight encryption, hidden data is moved from place to place.
>
> **[1:40](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=100)** This is often overlooked, but provides a point of access for hackers and creates more vulnerability than most enterprises understand.
>
> **[1:48](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/encryption-in-flight?u=76281980&t=108)** Spending some time on these issues will lower the risk of your [[Cloud Security]] deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (2), [[Cloud Security]] (1)
> **Env Vars:** hipaa (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - encryption (1)

#### [Security as code](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-as-code?u=76281980&t=0)** - [Instructor] Security is code and cloud applications can help direct vulnerabilities and security bugs.
>
> **[0:06](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-as-code?u=76281980&t=6)** Security is code.
>
> **[0:07](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-as-code?u=76281980&t=7)** Our SAC works around the concept that an application and connected data has special security requirements that need to be defined along with the application or is code.
>
> **[0:17](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-as-code?u=76281980&t=17)** An example of this is a single application that manages personal information subject to the laws of the country where the data is housed.
>
> **[0:26](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-as-code?u=76281980&t=26)** This may be a compliance requirement that's only related to the specific dataset.
>
> **[0:31](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-as-code?u=76281980&t=31)** SAC allows you to define processes, mechanisms, and technologies specific to that application and dataset, allowing you to leverage the application's data and security as a self-contained bundle where the security is defined as part of the application and data.
>
> **[0:47](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-as-code?u=76281980&t=47)** Using SAC, we could add a few security components to this application and data including encryption in flight type and behaviors, encryption at [[Representational State Transfer (REST)|rest]] types and behaviors, identity dynamically defined, roles and [[Security Management]].
>
> **[1:04](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-as-code?u=76281980&t=64)** These security components are specific to a single application and other applications may leverage different security services in different ways to meet the specific needs of that application.
>
> **[1:15](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-as-code?u=76281980&t=75)** This is a different approach than the traditional approach to security, which is centrally managed.
>
> **[1:20](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-as-code?u=76281980&t=80)** Thus, the application has to leverage centralized security services, no matter if it's a fit to the unique needs of the application or not.
>
> **[1:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-as-code?u=76281980&t=89)** This ability provides security services specific to an application, and data store is leading the rise of SAC for [[Cloud Security]].
>
> **[1:38](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-as-code?u=76281980&t=98)** SAC has a tremendous advantage over centralized security and will become more commonplace as cloud security matures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Security Management]] (1)
> **Env Vars:** sac (5)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Security management services](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=0)** - [Instructor] [[Security Management]] services include the tools and processes that allow you to implement and manage your security strategy effectively.
>
> **[0:08](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=8)** There are different types of security management approaches and tools that are available, but let's look broadly at what they are and how they function.
>
> **[0:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=16)** Security management services include any system that's able to operate over core security services, usually including governance, or the ability to place guardrails around specific [[Cloud Services]], applications, and data.
>
> **[0:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=29)** Identity, as defined in previous videos, the ability to track humans, machines, and other entities and configure specific security for each.
>
> **[0:37](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=37)** Authentication, or the ability to authenticate identities to determine if they're indeed real.
>
> **[0:42](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=42)** Authorization, the ability to authorize and deauthorize entities.
>
> **[0:47](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=47)** Audit, or the ability to track security functions and validate what occurred in the past.
>
> **[0:53](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=53)** Encryption, adding data from unauthorized users.
>
> **[0:57](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=57)** Compliance, with applicable laws and regulations around the use of security.
>
> **[1:02](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=62)** Of course, you can use specific security services individually, but a security manager can manage and automate many of those services to drive a more extensive security process.
>
> **[1:13](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=73)** For instance, you may have data sets that need to be secure using three different encryption services deployed by three different cloud services.
>
> **[1:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=81)** A security manager could automate how those services were used, including sequencing and dealing with exceptions.
>
> **[1:28](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=88)** There are different values that security managers provide.
>
> **[1:31](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=91)** In order of the most valuable to the least, we have, removes security complexity, or the need to deal with many types, brands, and platforms when dealing with [[Cloud Security]].
>
> **[1:41](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=101)** A security manager provides a single pane of glass allowing you to control specific complex security systems using a single, easy to use interface.
>
> **[1:51](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=111)** Cost optimization means that a security manager can monitor costs as well as optimize costs to ensure that you're not getting a considerable cloud bill for your security services.
>
> **[2:02](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=122)** Runs across cloud means you can run several security systems across different cloud brands, such as AWS, [[Microsoft]], and [[Google]].
>
> **[2:10](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=130)** Runs in on and off-premise means you can leverage a security manager to control security systems in your enterprise data center, as well as in public clouds.
>
> **[2:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/security-management-services?u=76281980&t=141)** Security management services are most effective for more complex cloud solutions, but in general, these systems are able to reduce complexity, which is key to an effective cloud security strategy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Management]] (4), [[Cloud Services]] (2), [[Cloud Security]] (2), [[Microsoft]] (1), [[Google]] (1)
> **Analogies:** for instance (1), such as (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Definitions:** means that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 3. Cloud Compliance Services

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud compliance services in healthcare](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=0)** - [Instructor] Some industries have specific needs or legal requirements when it comes to security.
>
> **[0:05](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=5)** We'll cover some of the major industries in this chapter.
>
> **[0:08](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=8)** In this video, we'll focus on what it means to secure cloud-based systems in the healthcare vertical.
>
> **[0:13](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=13)** In the United States, the court regulation and security model you have to follow in healthcare is HIPAA, or Health Insurance Portability and [[Accountability]] Act.
>
> **[0:23](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=23)** This federal regulation provides rules around how patient data is handled in all settings, including hospitals, doctors' offices, and even medical devices.
>
> **[0:32](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=32)** HIPAA was designed to reduce costs, provide better access to healthcare, and protect against fraud and abuse.
>
> **[0:39](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=39)** At the core of HIPAA is the protection of PII, or personally identifiable information.
>
> **[0:46](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=46)** This is important due to liability and moral issues that can arise if personal medical data is exposed.
>
> **[0:53](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=53)** Personal medical information is nobody's business but the patient's and the caregiver's, so it's illegal to expose any kind of PII.
>
> **[1:02](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=62)** Thus, security approaches and regulations must be followed for ethical and legal reasons, both in the cloud and on premises.
>
> **[1:10](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=70)** That means that all covered entities, or CEs, must comply with the security rule.
>
> **[1:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=76)** CEs could be healthcare plans, HMOs, group health plans.
>
> **[1:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=81)** While these relate to how healthcare is paid for, this is a centralized repository for all treatments, diagnostics, and outcomes.
>
> **[1:31](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=91)** Healthcare clearinghouse, billing, and repricing companies, et cetera, at least where PII is concerned.
>
> **[1:37](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=97)** Healthcare providers, doctors, dentists, hospitals, et cetera, or anybody that can provide and track patient data.
>
> **[1:44](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=104)** So how do you comply with HIPAA when placing HIPAA-regulated data in the cloud?
>
> **[1:49](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=109)** Major cloud providers understand how to handle and protect HIPAA data stored in the cloud.
>
> **[1:54](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=114)** They provide mechanisms to drive HIPAA compliance and track the use of HIPAA data for audits that may occur by the government.
>
> **[2:02](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=122)** Cloud providers can and should provide access to HIPAA-compliant data transfer and encryption that meet or exceed HIPAA laws.
>
> **[2:10](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-healthcare?u=76281980&t=130)** So if your organization works in or in conjunction with the [[Healthcare Industry]], seek out a public cloud provider to bring in these prebuilt processes and mechanisms so they don't have to be built by the cloud migration teams.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Accountability]] (1), [[Healthcare Industry]] (1)
> **Env Vars:** hipaa (10), pii (3)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Cloud compliance services in finance](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-finance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-finance?u=76281980&t=0)** - [Educator] Some industries have specific needs or legal requirements when it comes to security.
>
> **[0:05](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-finance?u=76281980&t=5)** Let's take a look now at secure cloud-based systems in the finance vertical.
>
> **[0:11](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-finance?u=76281980&t=11)** Most of the [[Cloud Security]] deployments focused on finance or in the [[Banking]] industry, so let's focus there.
>
> **[0:17](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-finance?u=76281980&t=17)** You'll find that while there are many regulations to follow, in most types of financial businesses, banking regulations are typically the most strict.
>
> **[0:25](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-finance?u=76281980&t=25)** Also, regulations differ a great deal from country to country, for example, while you'll have one set of regulations to follow in the US, there is another set to follow in Europe.
>
> **[0:36](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-finance?u=76281980&t=36)** There are three main concepts to pay attention to when it comes to data and cloud security, [[Privacy]], or the ability to keep personal data protected.
>
> **[0:45](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-finance?u=76281980&t=45)** This includes customer names, addresses, and banking transactions.
>
> **[0:49](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-finance?u=76281980&t=49)** Disclosure or the ability to provide the information needed to audits quickly.
>
> **[0:53](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-finance?u=76281980&t=53)** Sometimes these are internal audits or audits driven by regulators.
>
> **[0:58](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-finance?u=76281980&t=58)** And fraud prevention or the ability to ensure that bank customers and banks are protected from fraud.
>
> **[1:04](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-finance?u=76281980&t=64)** For example, a [[Phishing]] email that leads to customers giving away user IDs and password information to attackers.
>
> **[1:12](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-finance?u=76281980&t=72)** Again, public cloud providers support most regulations as related to the finance industry.
>
> **[1:18](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-finance?u=76281980&t=78)** It's a matter of understanding the regulations you need to follow, and then cloud solutions that provide the best solutions for security and compliance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (3), [[Cloud Security]] (2), [[Privacy]] (1), [[Phishing]] (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Speakers:** - [educator] (1)

#### [Cloud compliance services in retail](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=0)** - [Instructor] Some industries have specific needs or legal requirements when it comes to security.
>
> **[0:05](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=5)** This video will define what it means to secure cloud-based systems in the retail vertical.
>
> **[0:10](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=10)** The world of retail, the primary regulation, at least in the US, is [[PCI DSS|Payment Card Industry Data Security Standard]], or [[PCI DSS|PCI-DSS]].
>
> **[0:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=21)** Many in the industry just say PCI.
>
> **[0:23](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=23)** One can consider PCI as a set of processes and security mechanisms that must be employed by all of those who process credit card payments.
>
> **[0:33](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=33)** This law was created to protect both customers and retailers from fraud, or other ethical and legal issues around processing credit card payments.
>
> **[0:41](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=41)** This includes an ongoing fight to protect those that are using credit cards and those that take them as payments.
>
> **[0:51](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=51)** The fact is that credit card crimes are one of the most common financial crimes today.
>
> **[0:56](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=56)** The trade-off of the convenience of using a credit card needs to be weighed with the risks that they bring.
>
> **[1:02](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=62)** PCI was created to reduce those risks, but the risk can never be fully eliminated.
>
> **[1:07](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=67)** As with any regulation, PCI provides deterrence for those that are non-compliant.
>
> **[1:13](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=73)** These range from fines to compliance audits to retailer not being able to accept credit cards for a specific amount of time.
>
> **[1:20](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=80)** The core penalty is reputation.
>
> **[1:22](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=82)** If your organization has a public issue concerning credit cards, customers are likely to avoid you.
>
> **[1:28](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=88)** Shoppers want their credit card data to be protected.
>
> **[1:31](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=91)** So how do you make sure that's not your organization?
>
> **[1:34](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=94)** Again, there are PCI specific services that cloud providers provide.
>
> **[1:39](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=99)** Leverage these when you can to automate much around the security and compliance processes with PCI on cloud deployed systems.
>
> **[1:47](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=107)** [[Cloud Computing]] is leveraged for the maximum effectiveness for many retail organizations.
>
> **[1:53](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-retail?u=76281980&t=113)** So how you secure those clouds for retail should be a top priority.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PCI DSS|Payment card industry data security standard]] (1), [[PCI DSS|Pci-dss]] (1), [[Cloud Computing]] (1)
> **Env Vars:** pci (7), dss (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Cloud compliance services in manufacturing](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=0)** - [Instructor] When we consider manufacturing, hundreds of standards and laws around the world affect how we would build [[Microsoft Products|products]].
>
> **[0:06](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=6)** These range from general labor and safety regulations to specific quality regulations and standards that certain manufacturers are compelled to follow.
>
> **[0:15](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=15)** Sometimes it is a best practice, sometimes required by law.
>
> **[0:18](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=18)** For [[Cloud Security]], it's helpful to understand manufacturing regulations and how they affect cloud security.
>
> **[0:24](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=24)** In some instances, they have little to do with security.
>
> **[0:28](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=28)** In others, they are a core part of the process.
>
> **[0:30](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=30)** Let's look at two security concepts in the manufacturing industry, FDA and ISO.
>
> **[0:36](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=36)** FDA or the Food and Drug Administration is a US-based agency created to set standards for developing and providing food and drugs to the public.
>
> **[0:45](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=45)** As such, they have specific rules and regulations that must be followed to ensure food and drug safety, and many of those have precise security requirements that may need to be carried out in the cloud.
>
> **[0:57](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=57)** Cloud security systems must understand these processes, including any security approaches or mechanisms mandated by the FDA.
>
> **[1:04](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=64)** You'll find that many clouds have these security solutions ready made.
>
> **[1:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=69)** The ISO or International Organization for Standards provides processes that promote consistency and quality of goods that are produced.
>
> **[1:17](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=77)** They benefit businesses since they should lower the cost of errors and waste.
>
> **[1:23](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=83)** Consumer benefits from ISO since the results should be better quality and lower priced products.
>
> **[1:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=89)** As defined by ISO, processes are available from cloud providers, including specific security requirements around using ISO processes.
>
> **[1:37](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=97)** This may be custom, based on specific manufacturer's needs, or general purpose processes that exist within many manufacturers.
>
> **[1:46](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=106)** In both these examples, manufacturing uses [[Cloud Computing]] to run plant and account for production.
>
> **[1:52](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=112)** But as we've covered in this course thus far, you can substitute manufacturing for any industry, travel, healthcare, public service.
>
> **[2:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=120)** The connection between industry regulations will have an impact on your cloud security.
>
> **[2:05](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-compliance-services-in-manufacturing?u=76281980&t=125)** While these seem simple, security must be considered when leveraging cloud computing of any kind.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (4), [[Microsoft Products|Products]] (2), [[Cloud Computing]] (2)
> **Env Vars:** iso (5), fda (3)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Using generative AI for cloud compliance](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=0)** - Using [[Generative AI]] for industry compliance on public cloud platforms requires a detail oriented approach, one that ensures [[Data Security]], [[Privacy]], and [[Regulatory Compliance]].
>
> **[0:11](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=11)** Here are a few ways to utilize AI for industry compliance on public cloud platforms.
>
> **[0:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=16)** First, understand regulatory requirements.
>
> **[0:20](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=20)** Begin by understanding the industry specific regulations and compliance standards affecting your specific cloud and organization.
>
> **[0:28](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=28)** This may include requirements like GDPR for data protection in the EU or European Union, HIPAA for healthcare data, or PCIDSS, for payment and card industry compliance.
>
> **[0:39](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=39)** We've covered all of these in previous videos.
>
> **[0:43](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=43)** Next, consider [[Data Classification]] and encryption.
>
> **[0:46](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=46)** You must implement data classification to identify and categorize any information that needs to be protected.
>
> **[0:52](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=52)** You may use generative AI to assist in analyzing data patterns and identifying sensitive content, but don't forget to encrypt any data at [[Representational State Transfer (REST)|rest]], and in transit to maintain security and compliance.
>
> **[1:04](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=64)** Next, enforce access controls and monitoring.
>
> **[1:08](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=68)** Leverage AI to establish and enforce access controls using all AI driven monitoring tools to detect unusual activities.
>
> **[1:17](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=77)** This may include potential security breaches, and ensuring compliance with regulations.
>
> **[1:22](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=82)** Next, risk assessment and mitigation.
>
> **[1:25](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=85)** Employ AI [[Algorithms]] to assess and protect potential risks to data compliance.
>
> **[1:30](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=90)** This may involve analyzing historical data patterns, as well as identifying vulnerabilities.
>
> **[1:35](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=95)** This should be ongoing.
>
> **[1:37](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=97)** Next, audit trail and reporting.
>
> **[1:39](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=99)** Utilize AI to create comprehensive audit trails, and automate compliance recording.
>
> **[1:44](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=104)** AI can assist in finding anomalies, ensuring [[Data Integrity]], and providing accurate reports for regulatory purposes.
>
> **[1:52](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=112)** Next, collaboration with cloud providers.
>
> **[1:55](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=115)** Make sure to work closely with your public cloud provider so that you understand the security and compliance services that they offer.
>
> **[2:02](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=122)** Make sure to ensure that their services align with your industry specific requirements, and always inquire on how they leverage AI to analyze their own compliance processes.
>
> **[2:14](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=134)** Finally, continuous improvement.
>
> **[2:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=136)** Make sure to use AI to analyze and optimize your compliance processes continuously, or all of the time.
>
> **[2:24](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=144)** This should involve automatically learning from many incidents that may occur, as well as adopting to regulatory changes.
>
> **[2:32](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=152)** Using AI provides a great opportunity to enhance the management of [[Cloud Security]].
>
> **[2:37](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/using-generative-ai-for-cloud-compliance?u=76281980&t=157)** Keep up on these emerging tools, and think about how they may be incorporated into your compliance services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (2), [[Data Classification]] (2), [[Data Security]] (1), [[Privacy]] (1), [[Regulatory Compliance]] (1)
> **Best Practices:** make sure to (3), don't forget (1)
> **CLI Commands:** make (3)
> **Env Vars:** gdpr (1), hipaa (1), pcidss (1)
> **Speakers:** - using (1)

#### [Challenge: Is AI-enabled security a good fit for ABC Corp?](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=0)** (lively music)
>
> **[0:08](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=8)** - [Instructor] Now that they have a solid business case for [[Cloud Security]], ABC is considering using AI-enabled security systems.
>
> **[0:15](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=15)** They're looking for this system to provide rudimentary security services and basic [[Cloud Computing]] processes.
>
> **[0:23](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/challenge-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=23)** So how would you advise them?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (1), [[Cloud Computing]] (1)
> **Env Vars:** abc (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### [Solution: Is AI-enabled security a good fit for ABC Corp?](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=0)** - [Instructor] So how did you do?
>
> **[0:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=9)** Let's look at some of the reasons why ABC would use AI-enabled [[Cloud Security]].
>
> **[0:15](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=15)** You could mention some of the features of AI-enabled cloud security.
>
> **[0:19](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=19)** Let's review them again.
>
> **[0:20](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=20)** Access controls and monitoring.
>
> **[0:22](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=22)** Leverage AI to establish and enforce access controls using AI-driven monitoring tools to detect unusual activities.
>
> **[0:30](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=30)** Risk assessment and mitigation.
>
> **[0:32](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=32)** Employ AI [[Algorithms]] to assess and protect potential risks to data compliance.
>
> **[0:38](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=38)** Audit trail and reporting.
>
> **[0:39](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=39)** Utilize AI to create comprehensive audit trails and automate compliance reporting.
>
> **[0:44](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=44)** Collaboration with cloud providers.
>
> **[0:46](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=46)** Make sure to work closely with your public cloud providers so that you understand the security and compliance services that they offer.
>
> **[0:54](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=54)** The idea here is to work through a simple security example that relates to some of the problems that you'll likely encounter.
>
> **[1:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/solution-is-ai-enabled-security-a-good-fit-for-abc-corp?u=76281980&t=60)** You'll find that if you can solve this minor problem, the bigger ones are much the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (2), [[Algorithms]] (1)
> **CLI Commands:** make (1), find (1)
> **Non-Speech:** (upbeat music) (1), (upbeat music fades) (1)
> **Env Vars:** abc (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 4. Planning Cloud Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding your security requirements](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=0)** - [Instructor] Core to the success of any [[Cloud Security]] setup is understanding the requirements and defining those requirements in enough detail to be able to select the best cloud security solutions that meets the needs of the business.
>
> **[0:13](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=13)** You can do this in three phases.
>
> **[0:15](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=15)** The first phase is discovery.
>
> **[0:17](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=17)** The objective of the discovery is to understand the security architecture, what controls are needed, and what the business or stakeholders are expecting.
>
> **[0:27](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=27)** Note that there are several activities that fall under discovery, including defining goals, roles, and access requirements; interviews to determine higher level information around security requirements, and defining control domains from those operating the systems moving to the cloud.
>
> **[0:46](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=46)** Each phase concludes with a checkpoint to ensure that the phase was completed and that all requirements have been successfully gathered.
>
> **[0:54](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=54)** The next phase is assessment.
>
> **[0:56](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=56)** In this phase, you'll leverage what you learned in the previous phase and align those requirements with current best practices around cloud security.
>
> **[1:05](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=65)** This is basically a raw understanding of the as is state and what the to be state needs to be.
>
> **[1:11](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=71)** From there, assess the latest industry standards for how to create the best security solutions in the cloud.
>
> **[1:19](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=79)** The third phase is recommendations.
>
> **[1:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=81)** Recommendations are simply providing the how and sometimes the why to those responsible for creating and paying for the final [[Cloud Computing]] solution.
>
> **[1:32](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=92)** Here is where you lay out what you find and what is recommended to solve the problems understood by the requirements.
>
> **[1:39](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=99)** This could be a very complex cloud security solution that has many different systems supporting compliance and specialized encryption, or a very simple cloud security solution that just requires simple log on requirements.
>
> **[1:54](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=114)** The purpose of these processes and phases is to get you an understanding of what the issues are, how they should be addressed, and determine an overall solution for addressing them.
>
> **[2:06](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/understanding-your-security-requirements?u=76281980&t=126)** Getting this right is an imperative.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (5), [[Cloud Computing]] (1)
> **CLI Commands:** find (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Selecting the right cloud security services](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=0)** - [Instructor] It's important to understand cloud management as well as agility in selecting your [[Cloud Services]].
>
> **[0:07](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=7)** Let's take a deeper look at how to select a [[Cloud Security]] service step by step.
>
> **[0:12](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=12)** When considering cloud security, the ideal is to maximize risk management as well as maximize agility.
>
> **[0:19](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=19)** Typically, the more advanced your security tool, the more you'll be able to manage risk better.
>
> **[0:24](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=24)** You'll also be able to change around using the tool, or agility.
>
> **[0:30](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=30)** For example, the use of IAM allows you to leverage security using identities of humans, applications, data, et cetera, and this allows you to configure your security in the ways that are best for the business.
>
> **[0:45](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=45)** The idea is to advance through your security program majority through five basic steps or majority levels.
>
> **[0:51](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=51)** Level one, basics, meaning that you're just leveraging the fundamentals of cloud security, including user ID and password.
>
> **[0:59](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=59)** Level two, layered tools.
>
> **[1:02](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=62)** You're adding more tools to include directory management, which may enable IAM and other more mature tools.
>
> **[1:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=69)** While the tools don't work together, they are additive considering their complementary functions.
>
> **[1:15](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=75)** Level three, integrated tools.
>
> **[1:17](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=77)** This is where the tools work together, like tools that share directory services to manage identities for cloud security.
>
> **[1:24](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=84)** Level four, proactive.
>
> **[1:26](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=86)** The security tools are just reacting to issues, such as a breach, but they're working to avoid breaches, for example, updating operating systems automatically to avoid vulnerabilities.
>
> **[1:38](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=98)** Finally, level five, predictive, which is the most mature in security types of services.
>
> **[1:45](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=105)** Here is where we're able to work beyond just being proactive, but actually provide predictions as to when security events are likely to occur and how to avoid them.
>
> **[1:56](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=116)** The idea is to get to a state called minimum viable security, where you have enough security services in place to meet your business requirements.
>
> **[2:05](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=125)** This is considered optimized because we're only spending money to get us just the cloud security that we need.
>
> **[2:14](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=134)** Moving to the next maturity level is an option, however, first consider the business cases for doing so.
>
> **[2:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=141)** Selecting the right security technology is perhaps the most difficult part of the cloud security deployment process.
>
> **[2:28](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/selecting-the-right-cloud-security-services?u=76281980&t=148)** However, it's worth taking your time learning all you can and selecting the technology that is going to provide the best chances of success.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (6), [[Cloud Services]] (1)
> **Analogies:** for example (2), such as (1)
> **Env Vars:** iam (2)
> **Definitions:** is an  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Cloud security architecture guidelines](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980&t=0)** - [Instructor] It's easy to follow a framework that's predefined for you, and [[Cloud Security]] is no exception.
>
> **[0:07](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980&t=7)** Let's define this architecture as a set of layered concepts, each depending on the ones proceeding it.
>
> **[0:12](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980&t=12)** Policies are what security policies need to be created.
>
> **[0:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980&t=16)** For example, all of those who log into the cloud must be validated using multifactor authentication as well.
>
> **[0:23](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980&t=23)** Standards are the security standards that will be used such as RSA or DES encryption.
>
> **[0:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980&t=29)** This could also be a set of standards related to an industry, such as HIPAA.
>
> **[0:33](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980&t=33)** Procedures are the ways that we're going to deal with security, including events.
>
> **[0:38](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980&t=38)** For example, how do we deal with a data breach?
>
> **[0:42](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980&t=42)** Most importantly is the decision/reference architecture.
>
> **[0:46](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980&t=46)** This allows you to understand how all of the security services, concepts, and components fit together and how your overall cloud security solution works.
>
> **[0:54](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980&t=54)** Patterns are security things that we track, such as breach patterns and solution patterns.
>
> **[1:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980&t=60)** How does one address the other?
>
> **[1:02](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980&t=62)** Finally, playbooks are what we do to deal with [[Security Operations]], maintenance, [[Security Testing]], and other activities that make up what is done when operating cloud security.
>
> **[1:13](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/cloud-security-architecture-guidelines?u=76281980&t=73)** While you may adjust this hierarchy to address your own needs, it's a good time to reflect on what your process needs and leverage best practices from others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (3), [[Security Operations]] (1), [[Security Testing]] (1)
> **Analogies:** such as (3), for example (2)
> **Env Vars:** rsa (1), des (1), hipaa (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Reference security architecture to leverage as your guide](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/reference-security-architecture-to-leverage-as-your-guide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/reference-security-architecture-to-leverage-as-your-guide?u=76281980&t=0)** - [Instructor] A reference architecture is a set of concepts, technologies, and processes that you can potentially use to develop your [[Cloud Security]] solution.
>
> **[0:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/reference-security-architecture-to-leverage-as-your-guide?u=76281980&t=9)** The notion here is not to adopt everything within a reference architecture.
>
> **[0:13](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/reference-security-architecture-to-leverage-as-your-guide?u=76281980&t=13)** That's impossible, but define the solution in the reference architecture that applies to your specific requirements.
>
> **[0:20](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/reference-security-architecture-to-leverage-as-your-guide?u=76281980&t=20)** It's also good to pursue all the categories covered in reference architecture, such as operation support services, business support services, security and risk management, or subcategories, such as IT operations, service delivery, or service support that are part of operations support services.
>
> **[0:40](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/reference-security-architecture-to-leverage-as-your-guide?u=76281980&t=40)** I'll provide you with this framework for future reference.
>
> **[0:43](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/reference-security-architecture-to-leverage-as-your-guide?u=76281980&t=43)** However, it's essential to understand that these are evolving quickly and other reference architectures may be more helpful to you.
>
> **[0:50](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/reference-security-architecture-to-leverage-as-your-guide?u=76281980&t=50)** For instance, some exist only for healthcare security.
>
> **[0:53](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/reference-security-architecture-to-leverage-as-your-guide?u=76281980&t=53)** Some are more basic and easier to understand, while others are more complex and have many layers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (1)
> **Analogies:** such as (2), for instance (1)
> **Tools:** notion (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Current cloud security trends to watch](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=0)** - [Instructor] The world of [[Cloud Security]] is constantly evolving.
>
> **[0:03](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=3)** So staying on top of emerging trends is a critical component to your role.
>
> **[0:09](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=9)** Let's look at three trends that are likely to occur.
>
> **[0:12](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=12)** First and not surprising is the continued integration of AI technology into security systems.
>
> **[0:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=21)** This will be leveraged for both learning how to be a better security system and providing better proactive [[Security Operations]], or SecOps.
>
> **[0:31](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=31)** So stay in the loop on where and how the latest AI technology is being developed.
>
> **[0:37](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=37)** The second trend will be the incorporation of centralized security for [[Cloud Computing]].
>
> **[0:42](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=42)** Right now, most enterprises leverage whatever security system is offered by a specific cloud provider within that provider.
>
> **[0:50](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=50)** So you can end up with a multi-cloud deployment using three different public cloud providers with three different security systems, one for each provider.
>
> **[0:59](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=59)** Clearly that causes too much complexity and adds cost.
>
> **[1:03](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=63)** Thus, the use of a single security system that's able to cover all public cloud providers and sometimes on-premise systems is preferred.
>
> **[1:11](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=71)** Consider how your current system may or may not benefit from this security approach.
>
> **[1:16](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=76)** The third trend is pushing the security down to the components its protecting.
>
> **[1:21](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=81)** This means the data, application, services and APIs will support security as systemic to their purpose.
>
> **[1:29](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=89)** This means that you're no longer adjusting security to account for new applications and data components.
>
> **[1:35](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=95)** They come pre-configured and ready to secure themselves.
>
> **[1:39](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=99)** Three different trends, three different opportunities for massive impact.
>
> **[1:43](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/current-cloud-security-trends-to-watch?u=76281980&t=103)** Think about how these trends and even more exponential trends could affect your cloud security solution in the next few years.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (2), [[Security Operations]] (1), [[Cloud Computing]] (1)
> **Definitions:** is a  (1), means that (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Learning more about cloud security](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/learning-more-about-cloud-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/learning-more-about-cloud-security?u=76281980&t=0)** - [Narrator] We've covered a lot about [[Cloud Security]] systems.
>
> **[0:03](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/learning-more-about-cloud-security?u=76281980&t=3)** Let's explore where you go from here.
>
> **[0:05](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/learning-more-about-cloud-security?u=76281980&t=5)** First, you need to take it to the next level.
>
> **[0:08](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/learning-more-about-cloud-security?u=76281980&t=8)** There are other courses on advanced security, some related to a specific public cloud such as AWS and [[Microsoft]], and some that are still generally focused.
>
> **[0:18](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/learning-more-about-cloud-security?u=76281980&t=18)** Next, just try it.
>
> **[0:20](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/learning-more-about-cloud-security?u=76281980&t=20)** Many public cloud providers have free accounts where you can implement the technology as well as do your own testing.
>
> **[0:27](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/learning-more-about-cloud-security?u=76281980&t=27)** This is as important or more important than just understanding the concept.
>
> **[0:32](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/learning-more-about-cloud-security?u=76281980&t=32)** Attempt to create your own security architecture or solution based on real or hypothetical requirements.
>
> **[0:39](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/learning-more-about-cloud-security?u=76281980&t=39)** Look at the technology that's out there and attach them to your architecture.
>
> **[0:43](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/learning-more-about-cloud-security?u=76281980&t=43)** This includes IAM, MFA, encryption, and other services using specific technologies.
>
> **[0:50](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/learning-more-about-cloud-security?u=76281980&t=50)** Developing your solution will get you thinking like a security architect and you'll find that getting it wrong many times before getting it right once is just a part of the learning process.
>
> **[1:02](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/learning-more-about-cloud-security?u=76281980&t=62)** Thank you for taking this course with me and good luck on your journey into cloud security.
>
> **[1:07](https://www.linkedin.com/learning/cloud-security-concepts-services-and-compliance-21090306/learning-more-about-cloud-security?u=76281980&t=67)** Feel free to reach out to me on [[LinkedIn]] if you have further questions or comments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (2), [[Microsoft]] (1), [[LinkedIn]] (1)
> **Env Vars:** aws (1), iam (1), mfa (1)
> **CLI Commands:** aws (1), find (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[David Linthicum]]

## Resources

- Exercise files available

## Skills Covered

- Cloud Services
- Cloud Security
- IT Compliance

## Path Context

### In [[Foundations of Cloud Computing- Models, Platforms, Services, and Careers]]
← [[Cloud Computing- Understanding Private Cloud Options]] | **5 of 9** | [[Cloud Storage Concepts- Services, Cost Control, and Security]] →

### In [[Cloud Strategy Professional Certificate by LinkedIn Learning]]
← [[Determining Your Cloud Strategy- Planning for Roadmap, Infrastructure, and Deployment]] | **2 of 9** | [[Cloud Architecture- Core Concepts]] →

## Part of

- [[Cloud Strategy Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Foundations of Cloud Computing- Models, Platforms, Services, and Careers]]
- [[Cloud Strategy Professional Certificate by LinkedIn Learning]]

## Related Courses

_Courses sharing skills:_

- [[Google Cloud Security for Beginners- Tools and Services]] — Cloud Security
- [[Google Cloud Digital Leader Cert Prep- 5 Trust and Security with Google Cloud]] — Cloud Security
- [[Azure for Architects- Security and Identity Management with Microsoft Entra]] — Cloud Security
- [[Microsoft Security Essentials Concepts Solutions And Ai Powered Protection]] — Cloud Security
- [[Azure Networking and Security for Beginners- Tools and Services]] — Cloud Security

---

[↑ Back to top](#)