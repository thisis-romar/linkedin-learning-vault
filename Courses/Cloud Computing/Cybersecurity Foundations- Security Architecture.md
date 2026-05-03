---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: cybersecurity-foundations-security-architecture
url: "https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture"
duration_minutes: 44
duration: 44m
level: Beginner
updated: 11/16/2022
learners: 115308
skills:
  - Security Architecture Design
  - Cybersecurity
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQF28QcnoHGCtg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668461277698?e=2147483647&amp;v=beta&amp;t=tYtJikQJKn2iRjPyyXHDgYhlcbysNCF6Cv86UI9OOKY"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Cybersecurity Fundamentals]]'
prev_courses:
  - '[[Cybersecurity Foundations]]'
next_courses:
  - '[[Security Frameworks Fundamentals]]'
path_nav: '[{"path":"Cybersecurity Fundamentals","position":5,"total":12,"prev":"Cybersecurity Foundations","next":"Security Frameworks Fundamentals"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - skill/security-architecture-design
  - skill/cybersecurity
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Cybersecurity%20Foundations-%20Security%20Architecture.md)

![Cybersecurity Foundations: Security Architecture](https://media.licdn.com/dms/image/v2/C560DAQF28QcnoHGCtg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668461277698?e=2147483647&amp;v=beta&amp;t=tYtJikQJKn2iRjPyyXHDgYhlcbysNCF6Cv86UI9OOKY)

# Cybersecurity Foundations: Security Architecture

> You can optimize your cybersecurity architecture if you understand the core functions and deployment scenarios. In this course, cybersecurity strategist Pete Lindstrom provides a “building blocks” approach to enterprise security architecture, defining its components and functions in a rational, cohesive way that can be leveraged throughout an enterprise to incorporate all of its digital use cases 

> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture) | 44m | Beginner | 115K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Protect your enterprise with the four disciplines of cybersecurity](#protect-your-enterprise-with-the-four-disciplines-of-cybersecurity)
  - [A brief introduction to security architecture frameworks](#a-brief-introduction-to-security-architecture-frameworks)
  - [A function and component-based approach to security architecture](#a-function-and-component-based-approach-to-security-architecture)
  - [The four disciplines of cybersecurity](#the-four-disciplines-of-cybersecurity)
- [**1. Developing Your Identity Management Program**](#1-developing-your-identity-management-program) (3 videos)
  - [Generating your identity management objectives](#generating-your-identity-management-objectives)
  - [Collecting your core identity management capabilities](#collecting-your-core-identity-management-capabilities)
  - [Assembling your identity management platform](#assembling-your-identity-management-platform)
- [**2. Developing Your Vulnerability Management Program**](#2-developing-your-vulnerability-management-program) (3 videos)
  - [Generating your vulnerability management objectives](#generating-your-vulnerability-management-objectives)
  - [Collecting your core vulnerability management capabilities](#collecting-your-core-vulnerability-management-capabilities)
  - [Assembling your vulnerability management platform](#assembling-your-vulnerability-management-platform)
- [**3. Developing Your Threat Management Program**](#3-developing-your-threat-management-program) (3 videos)
  - [Generating your threat management objectives](#generating-your-threat-management-objectives)
  - [Collecting your core threat management capabilities](#collecting-your-core-threat-management-capabilities)
  - [Assembling your threat management platform](#assembling-your-threat-management-platform)
- [**4. Developing Your Trust Management Program**](#4-developing-your-trust-management-program) (3 videos)
  - [Generating your trust management objectives](#generating-your-trust-management-objectives)
  - [Collecting your core trust management capabilities](#collecting-your-core-trust-management-capabilities)
  - [Assembling your trust management platform](#assembling-your-trust-management-platform)
- [**5. Developing Security Architecture Patterns**](#5-developing-security-architecture-patterns) (2 videos)
  - [Building an enterprise reference security architecture](#building-an-enterprise-reference-security-architecture)
  - [Building a zero trust architecture](#building-a-zero-trust-architecture)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Protect your enterprise with the four disciplines of cybersecurity](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/protect-your-enterprise-with-the-four-disciplines-of-cybersecurity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/protect-your-enterprise-with-the-four-disciplines-of-cybersecurity?u=76281980&t=0)** - [Pete] [[Cybersecurity]] today is a serious challenge. The risk of compromise is increasing as well as the potential losses. Meanwhile, trying to figure out how to protect yourself can be a daunting task, with over 3000 security vendors and 50 product categories to figure out. Add in the need to comply with dozens of regulations by implementing a framework with hundreds of controls, all with no guarantee of success, and it creates a perfect storm of confusion and chaos. Hi, I'm Pete Lindstrom, and I've been working in cyber security as an auditor, architect, and analyst for almost 30 years. The goal of this course is to cut through the confusion and complexity in today's cyber security world, break down and simplify all the concepts and standards and technology out there so they're easy to understand, and then organize and synthesize them into a model with components that provide enough technical detail to allow someone to create a strategic reference architecture for their IT environment. My mission is to reduce risk in the enterprise, and I hope yours is, too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [pete] (1)

#### [A brief introduction to security architecture frameworks](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/a-brief-introduction-to-security-architecture-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/a-brief-introduction-to-security-architecture-frameworks?u=76281980&t=0)** - [Narrator] When Willis Ware and his defense department sponsored crew first published their security controls for computer systems report in 1970, they didn't know they were creating a framework for thinking about security that would spawn a multi-billion dollar industry dedicated to protecting users and organizations around the world from cyber attackers. This report, initially classified, described the majority of the attackable vulnerabilities that still plague us today. It provided a structured way to consider security issues so that we could find ways to address them. Butler Lampson's 1971 paper simply titled, "Protection," abstracted those vulnerabilities into a set of concerns, suggesting that harm could be inflicted in several ways. First, by destroying or modifying another user's data. Second, by reading or copying another user's data without permission. And finally, by degrading the service another user gets. Those strategic concerns have been converted into a set of three control objectives, which we in the cyber profession now call the CIA Triad, representing the need for confidentiality, integrity, and availability. A RAND report published around the same time, delved a bit deeper into security countermeasures, addressing improved operating system controls, real time monitoring, positive identification, protected communication lines, physical protection of premises, and cryptographic countermeasures. The Department of Defense took its initial Ware report to
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/a-brief-introduction-to-security-architecture-frameworks?u=76281980&t=96)** the next level with the publication of its ADP Security manual in 1973, creating a more robust set of security requirements. 10 years later, the DoD's trusted computer system evaluation criteria, "Orange Book," may have become famous more for the color of its binding than the controls buried deep within, considered so strong and stringent that they could not be implemented in the real world. Fast forward through literally dozens of control frameworks, architectures, and even regulations to today, and we land on two key security control frameworks. The [[NIST]] [[Cybersecurity]] Framework, with its five categories and 108 subcategories, and the ISO 27001, standard with its 14 domains. If one were to compare those two control frameworks to the ones created 50 years ago, the similarities would be easily recognizable. The biggest difference through these decades has simply been through our approach to combining and implementing these controls in an increasingly complex internetwork world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (1), [[Cybersecurity]] (1)
> **Env Vars:** cia (1), rand (1), adp (1), iso (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [A function and component-based approach to security architecture](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/a-function-and-component-based-approach-to-security-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/a-function-and-component-based-approach-to-security-architecture?u=76281980&t=0)** - [Instructor] The best way to evaluate security needs is to really understand the functional use of the systems being assessed. Consider today's basic user session or value stream. At a fundamental level, we start with users interacting with applications in order to manipulate data. The users make requests necessary to perform whatever functions they want and the application provides its responses in fulfillment of those operations. At a deeper system level, the users use laptops, desktops, and other devices, then connect through local networks to wide area networks that, in turn, connect to a local server-side network. Only then does any request actually make it to the application, which itself resides on a server in response to requests by performing some operation and providing responses back through the network to the user. Every device, every piece of software, and every network used creates a target for attackers to probe and compromise. All along the way, however, there are also opportunities that really are now necessities to insert controls that protect that session. The first thing we do is authenticate users. Then, we determine whether the access they want is appropriate. We allow the access in most cases and provide the resources. Throughout, we look for ways to monitor these sessions to identify any inappropriate behavior or encrypt data as an added measure of protection. These functions are performed as a way to protect the data and applications on the servers.
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/a-function-and-component-based-approach-to-security-architecture?u=76281980&t=93)** Often, we also want to protect the users, so we apply our controls in reverse, we verify the identity of the server, we validate the data and information along the response pathway, and of course, we monitor and encrypt wherever necessary. Though [[Real-Time]] controls provide the strongest defenses, we aren't operating in a vacuum. We can create administrative management strategies to protect our environment around the billions and trillions of user sessions and transactions that might occur every day, week, month, or year. So we can work harder to identify users and provision their accounts and credentials, to patch and fix our systems continuously to minimize their footprint, to respond and recover to any malicious activity that might be detected, and finally, but finally in a commencement sort of way, govern the entire environment. And so we end up with two sets of controls, a real time set that sits within the activity itself, making dynamic control decisions. These are authentication, user access control, filtering and separation, monitoring and detection, and encryption. And then an administrative or management set of controls that can be applied outside of the sessions to strengthen and protect the overall environment. These are identity provisioning, system patching and fixing, responding and recovering, and governance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [The four disciplines of cybersecurity](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/the-four-disciplines-of-cybersecurity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/the-four-disciplines-of-cybersecurity?u=76281980&t=0)** - [Instructor] There are two categories of security controls, a real time set of controls that sits within the computing activity itself, making dynamic, controlled decisions. These are functions like authentication, user access control, filter and separation of systems, monitoring and detection, and encryption. And then, we have an administrative or management set of controls that can be applied outside of the sessions to strengthen and protect the overall environment. These are identity provisioning, system patching and fixing, response and recovery, and governance. If we look at these sets of controls more analytically, we can see that they can be organized and aligned into groups with related functions and objectives. That brings us to the four core functions, which I call the four disciplines of a [[Cybersecurity]] program. The first discipline is identity management. Identity management involves controlling any source of activity in a computing environment. Practically speaking, this almost always means managing users who are using applications to accomplish some objective. Identity management most often involves the translation of human identity into digital identity by validating an individual's identity and then assigning unique user accounts with credentials, so they are allowed to access some approved set of digital resources. The second discipline is vulnerability management, which involves protecting our resources that are the primary targets of attack. The idea here is to think as broadly as possible
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/the-four-disciplines-of-cybersecurity?u=76281980&t=93)** about potential weaknesses in your environment rather than specific vulnerabilities that get announced periodically and require patches. While vulnerabilities do include those specific software weaknesses, they also include things like misconfigured devices, open systems, and even humans with legitimate access to the systems we're trying to protect. The third discipline is trust management. This is a tricky one because it figuratively operates within a computing environment cybersecurity program at both the highest conceptual level. Ultimately, we're looking for ways to add trust throughout our environment, and also at the most granular, technical level. Throughout its highest level, trust management involves providing overall guidance for legitimate acceptable use of the environment. But trust, or more specifically trusted systems, also has a very specific technical definition that involves access, control, and integrity functions. For our purposes, we'll address trust at the technical level using cryptographic functions for confidentiality and integrity in the environment. Finally, though sometimes, we like to think that an appropriately developed cybersecurity program will be impervious to attack, we know from a practical level that can never be true. Therefore, we have threat management as our fourth discipline. Threat management begins proactively with intelligence gathering on latest attack methods, for example, and continues through to real time monitoring and then response and recovery of the computing environment after detection of any sort of attack.
>
> **[3:07](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/the-four-disciplines-of-cybersecurity?u=76281980&t=187)** These are the four disciplines of [[Security Management]]: identity management, where we manage all users and accounts, as well as their credentials throughout the environment; vulnerability management, where we manage the security posture of all our systems, our applications, and our data; threat management, where we monitor all sessions, flows, transactions, anything activity-wise in search of inappropriate or malicious behavior; and finally, trust management, which is a governing strategy, as well as managing trusted actions within our environment. It's useful to keep these functions in mind to provide grounding during any enterprise security architecture initiative where things can get very complex very quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (3), [[Security Management]] (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Developing Your Identity Management Program

[↑ Back to Table of Contents](#table-of-contents)

#### [Generating your identity management objectives](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/generating-your-identity-management-objectives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/generating-your-identity-management-objectives?u=76281980&t=0)** - [Instructor] I describe the four disciplines of [[Cybersecurity]] in a previous video. They are identity management, vulnerability management, trust management, and threat management. As we dive deeper into each of these disciplines and describe the objectives and capabilities, it's worth keeping in mind that all of these activities are intended to address the same primary goal. That goal is to reduce cyber-related risk for our organization. So the first discipline we employ to accomplish this goal is identity management. The identity management mission is to manage and monitor users, accounts, credentials, and privileges throughout an IT environment to ensure that the users are legitimate and the access is appropriate. This mission seems fairly straightforward until you consider all of the applications and all of the resources and all of the users that need to be managed in any highly complex computing environment. Most of us get frustrated just trying to remember our passwords. With our mission defined, we can further break down the identity management discipline into a set of four objectives. First is to validate human identity of users requesting access. The second is to properly assign and revoke user accounts and their credentials. Third, let's define and assign granular privileges based on appropriate authorization. And finally, we need to monitor the user behavior and take any action that is deemed appropriate. We can simplify and summarize these objectives
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/generating-your-identity-management-objectives?u=76281980&t=93)** by recognizing that the purpose here is simply to provide legitimate users the appropriate access they need to accomplish their own goals. The closer we can come to accomplishing this, the closer we get to meeting our goal of reduced risk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Collecting your core identity management capabilities](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/collecting-your-core-identity-management-capabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/collecting-your-core-identity-management-capabilities?u=76281980&t=0)** - [Instructor] With our identity management objectives in mind, we can get down to the business of determining what capabilities we can bring to bear to address our security architecture requirements. We do this by looking at three different aspects of our identity management ecosystem. First, are the elements or objects associated with the environment itself. Second, are the administrative or management functions that we have available for use. And finally, we have the [[Real-Time]] inline controls that we might use as well. Our core identity management elements are the users themselves. That is the physical humans. We also have user accounts, which are the names they're using online to identify themselves, the credentials, which are the methods used to provide the technical proof necessary for authentication. And finally, the privileges which provide the user access rules that can be assigned to any particular account. From the administrative aspect of our identity management capabilities, we have functions to conduct identity proofing, provisioning, and deprovisioning of user accounts, identity governance activities, which typically revolve around data and application owners approving accounts. And finally, credential revocation or resetting capabilities. We round things out with our inline real-time controls, and on that front, we deploy our capabilities for authentication, single sign-on, in-line user access control, and user behavior analysis. By now, you've probably noticed the resemblance of these
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/collecting-your-core-identity-management-capabilities?u=76281980&t=95)** capabilities to [[Cybersecurity]] product categories. That of course, is how the market works. So we know there are solutions available to us to help us with provisioning, including the historically important password reset function, identity access governance, multifactor authentication, and single sign-on solutions and user behavior analytics. From a practical perspective, these are the tools we'll be deploying to address our needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Cybersecurity]] (1)
> **Speakers:** - [instructor] (1)

#### [Assembling your identity management platform](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/assembling-your-identity-management-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/assembling-your-identity-management-platform?u=76281980&t=0)** - [Instructor] We established in a previous video that identity management has four different elements: the users themselves that are the physical humans, the user accounts or names they use online for identification, the credentials that provide the technical proof necessary for authentication, and finally the privileges which define the resources that may be accessed. Let's look at how these elements get integrated into an architecture. A basic identity management architecture provides an account directory that is the authoritative source for identities and credentials. A secondary server may manage various [[Forms]] of multifactor authentication, and then applications will consume the credential information and take appropriate actions based on the privileges assigned. Considering a standard identity and access management implementation, step one is to define your authoritative source for user accounts and directories. For the vast majority of folks, that's going to be some flavor of [[Microsoft]]'s [[Active Directory]]. Step two is to connect all the native applications. Step three is to implement multifactor authentication across as many platforms as possible. In step four, we implement conditional access rules for the most sensitive information. And step five is to implement user behavior analytics for monitoring and identifying potentially malicious behavior. You can see on the slide that there's also a step six for integrating legacy applications. That item typically hangs around
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/assembling-your-identity-management-platform?u=76281980&t=92)** throughout an identity management deployment and is brought to bear wherever it makes sense within the specific context of an enterprise. We could dive a bit deeper into authentication to establish that there are three factors, or types of evidence, that can be used to demonstrate one's identity in an authentication process: what you know, which is typically a secret password, what you have, which can be a token or smart card, and who you are, which involves biometric information like fingerprints. These factors can be combined to provide multifactor authentication, one of the most important controls in today's security architectures. The most complex element of identity management is authorization or access control. It's so complex and environment dependent, in fact, that we'll need to stay at the standard and protocol level to describe it. This diagram from an identity standard called XACML illustrates a typical access control architecture. It contains four key elements: the policy enforcement point, which takes orders from a policy decision point, which interacts with access rules from the policy administration point, while potentially being provided contextual data from the policy information point. In conclusion, remember the following three things about identity management. First, identity management provides attribution for all activities. Second, multifactor authentication is usually the most effective way to reduce risk in an enterprise. And finally, standards and protocols provide the best opportunity
>
> **[3:05](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/assembling-your-identity-management-platform?u=76281980&t=185)** to consolidate and manage accounts for provisioning and single sign-on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Microsoft]] (1), [[Active Directory]] (1)
> **Env Vars:** xacml (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### 2. Developing Your Vulnerability Management Program

[↑ Back to Table of Contents](#table-of-contents)

#### [Generating your vulnerability management objectives](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/generating-your-vulnerability-management-objectives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/generating-your-vulnerability-management-objectives?u=76281980&t=0)** - [Instructor] I describe the four disciplines of [[Cybersecurity]] in a companion video. They are identity management, vulnerability management, trust management, and threat management. As we dive deeper into each of these disciplines and describe the objectives and capabilities, it's worth keeping in mind that all of these activities are intended to address the same primary goal. That is to reduce cyber-related risk for our organization. Now, let's introduce vulnerability management. The mission of vulnerability management is to limit exposure for a particular set of resources, users, computing systems and applications, and physical locations. Exposure is reduced by evaluating the security posture of an environment and eliminating, remediating, or mitigating weaknesses. The objectives in this discipline focus on addressing an IT environment's security posture. There are five key objectives. The first is to eliminate unnecessary services and processes running in the computing environment. Second, configure systems to reduce the number of known weaknesses that exist and strengthen the functions that remain. Third, identify and patch vulnerabilities in commercial off-the-shelf software. Fourth, reduce the number of software flaws that are written into software developed in-house. And fifth, filter connections attempting to gain access to system resources based on a defined set of rules. This last objective is slightly different from the first four.
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/generating-your-vulnerability-management-objectives?u=76281980&t=93)** While the first four objectives are accomplished through administrative processes, the final one is addressed in [[Real-Time]] in between the source users and their destination platforms, all the while filtering out unwanted activity. In summary, when thinking about vulnerability management, keep in mind the following three things. It's focused on system and platform assets. The goal is to maintain minimum attack surface. And one key feature is to provide basic filters and separation when in line.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (1), [[Real-Time]] (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Collecting your core vulnerability management capabilities](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/collecting-your-core-vulnerability-management-capabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/collecting-your-core-vulnerability-management-capabilities?u=76281980&t=0)** - [Instructor] The vulnerability management discipline incorporates both the most common and tedious functions of a [[Cybersecurity]] program. It is both unforgiving in its need for perfection and tedious in its need for continuous management. Any dynamic computing environment is going to have constant changes in configuration and vulnerable deployments that must be prioritized and addressed in a proper program. Let's look at some core capabilities of vulnerability management. First, we'll identify the elements or objects associated with the vulnerability management discipline. Then we'll look at the administrative tools available to support the discipline and provide automated capabilities. And finally, we'll identify the real time solutions available to protect our computing environment. We have four core vulnerability management elements. First, we have the scanners that search for vulnerabilities. Then we have the individual patch and fix applicators to actually remediate problems. Third, we have the filters used to isolate and separate computing resources. And finally, we have the platforms themselves, which are the assets we are protecting. Since we're protecting these assets from a static perspective, there are a number of administrative solutions to help identify and address weaknesses. We have vulnerability management solutions that scan and assess the environment in search of weaknesses. We have patch management solutions that manage the patch updates coming from vendors. And finally, we have policy management solutions to assist in controlling rule sets,
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/collecting-your-core-vulnerability-management-capabilities?u=76281980&t=92)** particularly with firewalls. On the real time monitoring side, the vulnerability management discipline includes firewalls which provide our long standing network separation and filtering capability, microsegmentation solutions that separate internal systems at a more granular level, and runtime application self-protection or RASP solutions that instrument and protect our applications on systems. Ultimately, our vulnerability management capabilities are intended to scan and assess our platforms, to reduce the attack surface by eliminating services, remediate weaknesses, and finally mitigate them through separation and isolation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (1)
> **Env Vars:** rasp (1)
> **Speakers:** - [instructor] (1)

#### [Assembling your vulnerability management platform](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/assembling-your-vulnerability-management-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/assembling-your-vulnerability-management-platform?u=76281980&t=0)** - [Instructor] In previous videos, we've gone through the objectives and capabilities of vulnerability management. So let's apply these concepts in a production environment. Vulnerability management is focused on computing resources. They are the assets that comprise our attack surface. We must constantly be assessing these resources we have that reside in our own on-premises environments, in any external cloud environments, and on any other external platforms we may be using. As our vulnerabilities or weaknesses are identified, we follow a multi-step process. First, we determine if we are at risk based on the nature of the weakness. If so, we then must choose between three different options, to eliminate, remediate, or mitigate the risk. We may be able to eliminate the vulnerability by turning off services. This is always the best option as long as it doesn't hinder productivity. We may also mitigate the vulnerability by setting up filters or providing more granular access control to protect the vulnerable resource. This is the least desirable option but often the most practical one. Or we can meet somewhere in the middle and develop a strategy to remediate the vulnerability by patching systems or changing configurations. Let's look at these options through the lens of a [[DevOps]], or in this case [[DevSecOps]], environment. This reference diagram for the United States Department of Defense shows a [[Software Development]] environment on the left and the production or operations environment on the right. On the left side, we employ vulnerability management tools focused on the software development life cycle,
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/assembling-your-vulnerability-management-platform?u=76281980&t=95)** where we can assess source code and test modules. These tools include static analysis, dynamic analysis, and others. Here we can eliminate the vulnerabilities before they move into production or remediate them by applying updates after they are identified and fixed. Of course, with commercial off-the-shelf or COTS software, we won't have access to source code and so we need to look more closely at our production environment. On these systems, we can identify and remediate vulnerabilities with vulnerability scanners that identify configuration weaknesses or we can leverage patch managers to apply patches from vendors. On the mitigation side, we have options focused on [[Real-Time]] filters and separation provided at the network level, usually by firewalls and potentially at the application level through runtime application self-protection solutions. Let's look a bit more carefully at this real-time separation option using a basic diagram that illustrates a set of endpoint servers and applications across the network. If we can identify sets of resources that are most trusted or provide more sensitive functions than others, we can separate them with firewalls, as we did when the internet was young. And as our networks are becoming more porous and therefore less trusted, we can add separation inside these networks and among the applications. Ultimately, the more granular we get, the closer we get to creating a micro-segmented environment that approaches a concept of zero trust. In conclusion, remember these three things
>
> **[3:09](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/assembling-your-vulnerability-management-platform?u=76281980&t=189)** about vulnerability management. First, it's focused on IT assets. Those are the computing resources that comprise the targets that can be attacked. Second, there are three options available to manage our security posture, eliminate, remediate, or mitigate the weaknesses. And finally, real time and administrative solutions can be mixed and matched to address any computing environment architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[DevOps]] (1), [[DevSecOps]] (1), [[Software Development]] (1)
> **Exercise Files:** source code (2)
> **Env Vars:** cots (1)
> **Speakers:** - [instructor] (1)


### 3. Developing Your Threat Management Program

[↑ Back to Table of Contents](#table-of-contents)

#### [Generating your threat management objectives](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/generating-your-threat-management-objectives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/generating-your-threat-management-objectives?u=76281980&t=0)** - [Instructor] I describe the four disciplines of [[Cybersecurity]] in a companion video. They are identity management, vulnerability management, trust management, and threat management. As we dive deeper into each of these disciplines and describe the objectives and capabilities, it's worth keeping in mind that all of these activities are intended to address the same primary goal, that is to reduce cyber-related risk for our organizations. Now, let's introduce threat management. Threat management is at the tip of the spear when it comes to protecting environments. With such complex systems to protect, trying to focus on patching and reconfiguring systems is a fools game that must be augmented by more intelligent understanding of the activity in an environment. The threat management mission is to identify inappropriate or malicious behavior within a computing environment and reduce its likelihood of compromising systems or otherwise impacting legitimate computer use. The threat management discipline is intended to accomplish the following objectives. Number one, monitor usage activity, like network and system communications. Number two, determine whether such activity being monitored is malicious or inappropriate. Number three, block or alert on activity that is identified as inappropriate. Number four, conduct forensic analysis of compromised systems. And number five, manage identified incidents and take corrective action wherever necessary. While it is reasonable to think of vulnerability management
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/generating-your-threat-management-objectives?u=76281980&t=93)** as a slow and steady tortoise of a cybersecurity program, threat management is most definitely the hare with its need to [[React.js|react]] and respond as quickly as possible to prevent or minimize the impact of any incident on a computing environment. When thinking about threat management, keep the following three things in mind. First, it's focused on real time activity that is transactions, flows, sessions, and the like. Second, it's looking for tax intrusions and compromises in real time. And third, the key actions associated with threat management are to react, respond, and recover.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (2), [[React.js|React]] (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Collecting your core threat management capabilities](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/collecting-your-core-threat-management-capabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/collecting-your-core-threat-management-capabilities?u=76281980&t=0)** - [Instructor] Threat management is the stuff that movies are made of the ongoing cat and mouse, whereas we call them blue team, red team activities that comprise attack and defense capabilities and provide some excitement in the cyber security world. Let's look at our threat management capabilities. First, we'll identify the elements or objects associated with the threat management discipline. Then we'll look at the administrative tools available to support the discipline. And finally, we'll identify the real time solutions available to protect our computing environment. We have three core threat management elements. We have the sensors that get deployed throughout our computing environments. Second, we have logs and alerts themselves that provide the detection details. And finally, there are the event aggregators that collect all the logs and alerts, along with other data, to provide context for further analysis. On the management side, threat management includes threat intelligence solutions that provide insight into our threat actors. Threat hunting solutions to search for evidence of compromise. Incident management solutions that help us respond and recover from attacks. And forensics solutions that provide more technical and analytical support. In the real time monitoring space, which is crucial for threat management, we have [[Intrusion Detection]] solutions operating as sensors, security information and event management solutions that provide aggregation. And we also have targeted solutions for anti malware, which protect against the oldest type of attack,
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/collecting-your-core-threat-management-capabilities?u=76281980&t=94)** and data loss protection that identifies sensitive data leakage. Ultimately, our threat management capabilities are intended to detect attacks in progress, [[React.js|react]] to specific alerts, sometimes through automated responses, respond to incidents and recover systems back to normal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (1), [[React.js|React]] (1)
> **CLI Commands:** cat (1)
> **Speakers:** - [instructor] (1)

#### [Assembling your threat management platform](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/assembling-your-threat-management-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/assembling-your-threat-management-platform?u=76281980&t=0)** - [Narrator] In a previous video, we reviewed the three core threat management components. They are the sensors that get deployed throughout an environment, the logs and alerts that either provide inputs to the sensors or outputs from the sensors, and the event aggregators that collect all the information together and provide context for analysis. Let's look at how these elements can be put together in a four step threat management process. First, we perform the [[Data Collection]]. That's where we look at all of the logs and output from sensors that we can find from various sources throughout our environment. You can see on the right hand side of this slide that there are many different sources of information that could be analyzed in search of intrusion evidence. Step two is to perform analysis on those alerts and logs. And once again, on the right hand side, we show a whole host of techniques and methods that can be brought to bear in search of these intrusions or compromise. In step three, we [[React.js|react]] and respond to any analysis that leads us to believe an intrusion or compromise is taking place, and we have a handful of options available for response. These range from simply logging the activity, on through to blocking or encrypting various pieces of data or information. And finally, step four is a forensic analysis, where we evaluate the systems to determine whether they've been compromised, and archive any applicable data. In conclusion, remember these three things
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/assembling-your-threat-management-platform?u=76281980&t=94)** about threat management. First, it's focused on the real time activity, the transactions and flows and sessions that occur throughout our computing environment. Second, aggregation and context are crucial to identifying real threats and intrusions among the many alerts you'll receive. And finally, continue to develop sources of information in support of the threat management mission.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Collection]] (1), [[React.js|React]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 4. Developing Your Trust Management Program

[↑ Back to Table of Contents](#table-of-contents)

#### [Generating your trust management objectives](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/generating-your-trust-management-objectives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/generating-your-trust-management-objectives?u=76281980&t=0)** - [Instructor] I described the four disciplines of [[Cybersecurity]] in a companion video. They are identity management, vulnerability management, trust management, and threat management. As we dive deeper into each of these disciplines and describe the objectives and capabilities, it is worth keeping in mind that all of these activities are intended to address the same primary goal. That goal is to reduce cyber-related risk for our organizations. Now, let's introduce trust management. The trust management mission is to implement controls that ensure the confidentiality and integrity of resources. The focus of trust management is two-fold. First, on the computing processes that are being used to perform some business, and second on the transactional data as it is being manipulated and transferred throughout the environment. There are five key trust management objectives. First, manage the security program to efficiently and effectively address risk in the IT environment. Second, define and manage acceptable use policies to describe how the resources of the IT environment can be properly used. Third, define and manage system policies and procedures that identify responsibilities, configuration requirements, and other characteristics of the IT environment. Fourth, classify and protect data in transit as needed to ensure the proper processing of systems. And finally, to classify and protect data in storage as needed to ensure its effective use wherever appropriate. These objectives are focused primarily
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/generating-your-trust-management-objectives?u=76281980&t=94)** on providing a framework for legitimate access to an organization's resources. They are the rules of the road, so to speak, of cybersecurity acceptable use. When thinking about trust management, it's useful to keep in mind the following three things. Trust management is focused on program management, the strategic cybersecurity program; trust management is oriented towards protecting legitimate activity; and finally, trust management leverages [[Cryptography]] for its technical control capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (3), [[Cryptography]] (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Collecting your core trust management capabilities](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/collecting-your-core-trust-management-capabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/collecting-your-core-trust-management-capabilities?u=76281980&t=0)** - [Instructor] Trust management is about designing a [[Cybersecurity]] program that enables legitimate users and activity by providing ground rules for acceptable use and sometimes deploying guard rails on the data and programs themselves. This may seem strange, but think about highways where drivers are pretty good, though not perfect, at staying within their lanes. That's policy. But, in higher risk areas like bridges or work areas, they often erect physical barriers to keep cars from changing lanes. That's like in [[Cryptography]]. Let's consider three core aspects of trust management. First, we'll identify the elements or objects associated with the trust management discipline. Second, we'll look at the administrative tools available to support the discipline and automate some of the processes. And finally, we'll identify the [[Real-Time]] solutions available to protect our computing environment from a trust management perspective. There are three core elements of trust management. Our policies that are both human documents, as well as system-instantiated technical policies; encryptors and decryptors that serve to obfuscate data or applications as needed; and then certificates and keys that provide the inputs and validators for those encryption operations. On the management side, we have policy management capabilities, audit compliance capabilities, and finally, keys and certificate management capabilities. When considering real-time monitoring, it's all about encryption,
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/collecting-your-core-trust-management-capabilities?u=76281980&t=92)** that is encrypt data in transit, encrypt data at [[Representational State Transfer (REST)|rest]], and encrypt data in use. Another cryptographic operation that often gets ignored is validation of [[Data Integrity]]. So we can synthesize these administrative and real-time functions to summarize our trust management capabilities with a full set of product solutions. We have governance risk and [[Compliance Management]] solutions that track the policy's audits and then provide overall program management of the cybersecurity program. We have virtual private networks that provide encrypted communications, that is of data and transit, to provide confidentiality and integrity of those sessions. We have data encryption and rights management solutions to provide encryption of data at rest and add a little policy element to that if necessary. We have digital signature and application integrity solutions to provide various levels of integrity on our data and applications, and we have key and certificate management solutions, like PKI, to protect and manage encryption keys in various ways.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (3), [[Cybersecurity]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[Cryptography]] (1), [[Data Integrity]] (1)
> **CLI Commands:** rails (1)
> **Env Vars:** pki (1)
> **Speakers:** - [instructor] (1)

#### [Assembling your trust management platform](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/assembling-your-trust-management-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/assembling-your-trust-management-platform?u=76281980&t=0)** - In a previous video, we identified the three core elements of the Trust Management discipline. First are policies and procedures that are both human documents as well as system instantiated technical policies. Second, are encryptors and decryptors, which serve to obfuscate the data or applications as needed. And finally, the certificates and keys that provide the inputs and validators for those encryption operations. Let's take a more structured step by step approach to evaluate the various layers of trust that can be applied in our computing environments. The first step is to trust the humans. This is where GRC or governance, risk, and compliance capabilities get implemented, as well as policies, procedures, and plans, all at the human level. And we round things out with compliance audits that apply control frameworks to appropriate environments. Next, we trust the ecosystem and computing environments through the use of solutions like virtual private networks and multifactor authentication. In addition, we continue with our compliance audits and also provide storage encryption where appropriate. At this next layer, we have trusted systems. This is where individual servers, including [[Virtual Machines]] and containers are affected, and we apply system integrity checks as well as the potential for file and folder encryption. And finally, we trust the code and the data. Of course, addressing data and [[Application Security]], we provide application integrity as well as rights management solutions at this layer. In conclusion, think of trust management
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/assembling-your-trust-management-platform?u=76281980&t=94)** the following three ways. First, trust management aligns human trust as well as digital trust. Second, policies, procedures, and plans provide the tools that build the human trust. And finally, [[Cryptography]] and key management provide the tools for digital trust.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (1), [[Application Security]] (1), [[Cryptography]] (1)
> **Env Vars:** grc (1)
> **Cross-References:** previous video (1)
> **Speakers:** - in (1)


### 5. Developing Security Architecture Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [Building an enterprise reference security architecture](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/building-an-enterprise-reference-security-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/building-an-enterprise-reference-security-architecture?u=76281980&t=0)** - [Instructor] Early in this course, we described the high level [[Cybersecurity]] model that provides a foundation for the building blocks of a reference security architecture. It defined the four disciplines of cybersecurity. Identity management, which is focused on managing all users accounts and credentials throughout an environment. Vulnerability management, which involves managing the attack surface of all systems and applications. Threat management, which integrates monitoring of all real time sessions and transactions in search of malicious activity. And trust management, which provides a governance strategy as well as platform integrity capabilities. That initial model has been built out throughout this course into a more detailed cybersecurity model that can be used for reference architecture, blueprints, and patterns. The details show the relationship among the disciplines, illustrates core capabilities, and identifies key product categories in context. As detailed as this diagram is, all of the information still aligns and relates to the core building blocks for each discipline. That is authentication and authorization for identity management. Scanners, separation, capabilities and isolation functions for vulnerability management. Detect, respond and recover operations for threat management. And govern, encrypt and validate operations for trust management. What's more these functions serve as a reminder as we integrate more innovative security capabilities like passwordless, federation, conditional access and user behavior analytics for identity management. Security orchestration, [[DevSecOps]], and API security
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/building-an-enterprise-reference-security-architecture?u=76281980&t=95)** for vulnerability management. Threat intelligence, deception and [[Artificial Intelligence (AI)|artificial intelligence]] machine learning for threat management. And distributed integrity, rights management, and continuous audit for trust management. In conclusion, when developing your enterprise security architecture, remember these three things. First, distill product categories into the core security capabilities of the four disciplines of cybersecurity. Second, evaluate the efficacy of the methods and techniques in use and adapt them as necessary in your environment. And finally, review the capabilities of every security solution to assess the fit within your strategic cybersecurity program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (5), [[DevSecOps]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Building a zero trust architecture](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/building-a-zero-trust-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/building-a-zero-trust-architecture?u=76281980&t=0)** - [Instructor] Early in this course, we described a high level [[Cybersecurity]] model called the Four Disciplines of Cybersecurity that provides a foundation for the building blocks of a reference security architecture. The question is, can it hold up when applied to real world security requirements like zero-trust. Let's see what we can do. Consider a typical IT architecture that has a data center in connected enterprise land that connect to a core set of cloud resources. There also is work from home capability that connects into the network as well as branch offices. Finally, there's a mobile workforce and partner networks that are not under their control but need to connect as well. If we add some more detail for the purposes of illustration, we can show what is basically a typical architecture in today's computing world. Of course, we'll need to add firewalls and VPNs, which are common controls in these environments to provide appropriate separation encryption for the networks at hand. When it comes to zero-trust, we have three different solution sets that are usually included. First, we add software defined perimeters, which provide more granular perimeter firewall capabilities or smaller collections of resources, as well as more encryption. We add micro segmentation inside our core network environment to provide granular access control to servers and clusters of resources there and we add identity aware proxies to arbitrate the requests and responses
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/building-a-zero-trust-architecture?u=76281980&t=92)** between users wherever they may be and the resources in the enterprise. If we put all that together, we get a full zero-trust model that involves software defined perimeters, micro segmentation and identity aware proxies. In conclusion, think about zero-trust in three ways. First, it can seem ambiguous and overwhelming, but it really isn't. In reality, it embodies combinations of the four disciplines. The software defined perimeters I mentioned provide encryption and access control. Micro segmentation implementations are really souped up firewalls and internal environments, and the identity aware proxy simply leverage authentication and authorization wherever your users may be. Ultimately, zero-trust simply increases the granularity of existing common controls to demonstrate its value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-security-architecture/next-steps?u=76281980&t=0)** - [Pete] I hope this short course on [[Cybersecurity Foundations]] provided the insight and building blocks you need to develop a strong security architecture for your organization. If you keep in mind these four disciplines, identity management, vulnerability management, threat management, and trust management, you'll start to see how they could be useful throughout your program, first as this reference architecture that we're discussing here, but also as a way to organize and manage your activities with metrics and [[Economic Analysis]]. As you continue on your journey, here are some tips on where to go from here. Read all you can about [[Cybersecurity]], especially in trade journals like CSO Online or on robust social media communities like those on Twitter. Learn from courses on [[LinkedIn]] Learning, like those from my friends Mike Chapel and Ron Warner. Attend conferences like RSA Conference and InfoSec World, and finally, participate in communities like your local information system security association group. These will all put you in good stead. In addition, I hope you'll join me in our combined cybersecurity mission to enable the benefits of [[Digital Transformation]] through a strong cybersecurity program that makes effective control decisions and successfully reduces risk. Thanks for your time, and I look forward to connecting with you in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (4), [[Economic Analysis]] (1), [[LinkedIn]] (1), [[Digital Transformation]] (1)
> **Env Vars:** cso (1), rsa (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [pete] (1)


## Instructor

- [[Pete Lindstrom]]

## Skills Covered

- Security Architecture Design
- Cybersecurity

## Path Context

### In [[Cybersecurity Fundamentals]]
← [[Cybersecurity Foundations]] | **5 of 12** | [[Security Frameworks Fundamentals]] →

## Appears In

- [[Cybersecurity Fundamentals]]

## Related Courses

_Courses sharing skills:_

- [[Securing Containers and Kubernetes Ecosystem]] — Cybersecurity
- [[AI in Cybersecurity- The Future of Red Teaming and Blue Teaming]] — Cybersecurity
- [[Building a Cybersecurity Awareness Program]] — Cybersecurity
- [[Building Your Cybersecurity Talent Pipeline]] — Cybersecurity
- [[CISO Foundations- Influencing the Board and C-Suite]] — Cybersecurity

---

[↑ Back to top](#)