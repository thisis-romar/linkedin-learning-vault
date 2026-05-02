---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ai-product-development-secure-by-design
url: "https://www.linkedin.com/learning/ai-product-development-secure-by-design"
duration_minutes: 147
duration: 2h 27m
level: Intermediate
updated: 4/2/2025
learners: 6407
skills:
  - Secure Coding
  - AI Software Development
  - Software Development Security
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEdArvevem1aw/learning-public-crop_675_1200/B4EZWHKflXG0Ak-/0/1741729430477?e=2147483647&amp;v=beta&amp;t=7Tjnj11HiiUV3qoS-vrhzNLXqf6noutnZKejmTjHeVI"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning]]'
prev_courses:
  - '[[AI Data Strategy- Data Procurement and Storage]]'
path_nav: '[{"path":"Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning","position":6,"total":6,"prev":"AI Data Strategy- Data Procurement and Storage","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - topic/software-development
  - skill/secure-coding
  - skill/ai-software-development
  - skill/software-development-security
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/AI%20Product%20Development-%20Secure%20by%20Design.md)

![AI Product Development: Secure by Design](https://media.licdn.com/dms/image/v2/D4E0DAQEdArvevem1aw/learning-public-crop_675_1200/B4EZWHKflXG0Ak-/0/1741729430477?e=2147483647&amp;v=beta&amp;t=7Tjnj11HiiUV3qoS-vrhzNLXqf6noutnZKejmTjHeVI)

# AI Product Development: Secure by Design

> Discover a holistic approach to building AI systems that are secure by design, covering security controls at every layer of the AI lifecycle. From data security and governance to infrastructure protection, instructor Reet Kaur shares practical skills in adversarial threat detection, secure model access, and continuous monitoring. This course also covers secure CI/CD pipelines for AI, focusing on o

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design) | 2h 27m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Weave security into your AI product design process](#weave-security-into-your-ai-product-design-process)
- [**1.  Foundations of AI Security, Governance, Risk, and Compliance**](#1-foundations-of-ai-security-governance-risk-and-compliance) (6 videos)
  - [Why governance, risk, and compliance matter from day one](#why-governance-risk-and-compliance-matter-from-day-one)
  - [Governance in AI security](#governance-in-ai-security)
  - [Using the RACI Matrix](#using-the-raci-matrix)
  - [AI risk management](#ai-risk-management)
  - [Navigating regulatory frameworks](#navigating-regulatory-frameworks)
  - [Compliance strategies for AI](#compliance-strategies-for-ai)
- [**2. AI Risk Management Frameworks**](#2-ai-risk-management-frameworks) (5 videos)
  - [Intro to Risk Management Framework](#intro-to-risk-management-framework)
  - [Identify and assess risks](#identify-and-assess-risks)
  - [Mitigate, monitor, and audit risks](#mitigate-monitor-and-audit-risks)
  - [Manage policies, procedures, and training](#manage-policies-procedures-and-training)
  - [Establish oversight and governance](#establish-oversight-and-governance)
- [**3. AI Security Threats and Adversarial Attacks**](#3-ai-security-threats-and-adversarial-attacks) (5 videos)
  - [What is the AI lifecycle?](#what-is-the-ai-lifecycle)
  - [Introduction to adversarial attacks](#introduction-to-adversarial-attacks)
  - [Defensive techniques against adversarial attacks](#defensive-techniques-against-adversarial-attacks)
  - [Monitoring model behavior for anomalies](#monitoring-model-behavior-for-anomalies)
  - [A path to holistic security securing the AI supply chain](#a-path-to-holistic-security-securing-the-ai-supply-chain)
- [**4. Secure AI Deployment and Access Controls**](#4-secure-ai-deployment-and-access-controls) (4 videos)
  - [Access control for AI models](#access-control-for-ai-models)
  - [Security testing of AI models](#security-testing-of-ai-models)
  - [Business continuity management](#business-continuity-management)
  - [Automated monitoring and alerting](#automated-monitoring-and-alerting)
- [**5. Securing AI in the Software Development Lifecycle**](#5-securing-ai-in-the-software-development-lifecycle) (4 videos)
  - [Building Secure CI/CD Pipelines](#building-secure-cicd-pipelines)
  - [AI Software Supply Chain Security](#ai-software-supply-chain-security)
  - [Continuous monitoring and threat detection](#continuous-monitoring-and-threat-detection)
  - [Logging and incident response](#logging-and-incident-response)
- [**6. AI Security Case Studies and Playbooks**](#6-ai-security-case-studies-and-playbooks) (2 videos)
  - [Case studies: Lessons from AI security incidents](#case-studies-lessons-from-ai-security-incidents)
  - [AI security playbook: Secure by Design approach](#ai-security-playbook-secure-by-design-approach)
- [**Conclusion**](#conclusion) (1 videos)
  - [Conclusion and next steps](#conclusion-and-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Weave security into your AI product design process
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/weave-security-into-your-ai-product-design-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/weave-security-into-your-ai-product-design-process?u=76281980&t=0)** - Artificial intelligence is no longer just an idea.
>
> **[0:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/weave-security-into-your-ai-product-design-process?u=76281980&t=4)** It's already here, transforming industries and revolutionizing the way businesses operate.
>
> **[0:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/weave-security-into-your-ai-product-design-process?u=76281980&t=10)** We will dive into the best practices to ensure that as AI systems evolve from concept to pilot to production, security isn't just an afterthought, but it's well-woven into the very DNA of your AI products.
>
> **[0:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/weave-security-into-your-ai-product-design-process?u=76281980&t=29)** Hi, I'm Reet Kaur, CEO and CISO of Sekaurity.
>
> **[0:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/weave-security-into-your-ai-product-design-process?u=76281980&t=33)** By the end of this course, you will be able to develop a practical security strategy for your organizations to help ensure that your AI products are resilient, trustworthy, and enterprise-ready.
>
> **[0:49](https://www.linkedin.com/learning/ai-product-development-secure-by-design/weave-security-into-your-ai-product-design-process?u=76281980&t=49)** So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (3), [[Security]] (2), [[Microsoft Products|Products]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Env Vars:** dna (1), ceo (1), ciso (1)
> **Speakers:** - artificial (1)


### 1.  Foundations of AI Security, Governance, Risk, and Compliance

[↑ Back to Table of Contents](#table-of-contents)

#### Why governance, risk, and compliance matter from day one
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980&t=0)** - [Instructor] The first step in developing an AI system is to present a business case and secure leadership approval.
>
> **[0:08](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980&t=8)** Once that is done, it's time to turn the concept into a prototype.
>
> **[0:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980&t=13)** But before diving into development, security must be set as a priority, not an afterthought.
>
> **[0:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980&t=21)** Research conducted by Hidden Layer showed that 77% of companies have already experienced security incidents involving their AI models.
>
> **[0:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980&t=32)** And according to IBM's Cost of a Data Breach Report, a security breach can cost organizations an average of $4.4 million per incident, depending on the size and the industry of the company.
>
> **[0:49](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980&t=49)** These numbers highlight a critical truth.
>
> **[0:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980&t=53)** AI security cannot wait until after deployment.
>
> **[0:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980&t=59)** That's why before developing an AI prototype, we must start with governance, risk, and compliance, or commonly referred to as GRC.
>
> **[1:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980&t=69)** Without clear governance, AI can introduce bias, compliance failures, and security risks.
>
> **[1:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980&t=77)** Risk management helps identify threats early on, whether it's data privacy issues, adversarial attacks, or automation failures.
>
> **[1:26](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980&t=86)** And compliance ensures AI aligns with regulatory requirements like GDPR and NIST, preventing costly redesigns down the line.
>
> **[1:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980&t=98)** By integrating GRC right from the start, businesses can build AI that's not just innovative, but also secure, ethical, and resilient.
>
> **[1:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980&t=110)** If you skip this step, that is going to be a risk for your organization you don't want to take.
>
> **[1:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks-25329372?u=76281980&t=116)** So let's dive into the critical role of GRC in AI security and why it should be your first step in AI product development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (9), [[Security]] (6), data (2), business (1), leadership (1)
> **Env Vars:** grc (3), ibm (1), gdpr (1), nist (1)
> **Versions:** 4.4 (1)
> **Speakers:** - [instructor] (1)

#### Governance in AI security
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=0)** - [Instructor] Now that we have established why governance, risk, and compliance is essential in AI security, let's zoom in on the first pillar, which is governance.
>
> **[0:12](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=12)** Without strong governance, AI can become a black box of risks, introducing bias, security vulnerabilities, and compliance failures.
>
> **[0:23](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=23)** That's why organizations need clear policies, accountability structures, and frameworks to ensure AI is built responsibility right from the start.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=35)** In this section, we will explore AI governance, why it is critical, how it ensures AI is ethical and secure, and what best practices organizations can follow.
>
> **[0:49](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=49)** Let's dive in.
>
> **[0:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=50)** AI governance is the set of rules, policies, and processes that ensure AI aligns with ethical values, company goals, and legal requirements.
>
> **[1:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=64)** It provides oversight throughout the AI lifecycle, ensuring that AI decisions are explainable, data privacy is protected, and security risks are identified and managed early on.
>
> **[1:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=78)** Without strong governance, companies may face shadow AI, where employees use AI tools without approval, leading to compliance failures, security threats, and operational inefficiencies.
>
> **[1:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=93)** Strong AI policies are a key part of governance.
>
> **[1:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=97)** They serve as a guidebook for using AI responsibly, covering areas like data privacy, algorithm transparency, bias mitigation, and security controls.
>
> **[1:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=110)** Rather than being broad and theoretical, policies should be clear, practical, and actionable.
>
> **[1:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=118)** A secure AI by design approach means that building security into AI is a must from the start, rather than treating it as an afterthought.
>
> **[2:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=130)** Several governance frameworks provide structured guidance for organizations developing AI policies.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=137)** The OWASP Top 10 for AI identify security risks, such as data poisoning, adversarial attacks, and model theft.
>
> **[2:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=147)** Then, MITRE ATLAS AI, it maps AI attack techniques to help organizations prioritize security measures.
>
> **[2:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=157)** The NIST AI Risk Management Framework takes a risk-based approach to securing AI systems, ensuring compliance and security efforts are focused on the highest impact areas.
>
> **[2:51](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=171)** Then last but not the least, ISO 42001.
>
> **[2:55](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=175)** It provides a global standard for AI policy development, auditing, and continuous risk assessment, which helps businesses align AI governance with international best practices.
>
> **[3:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=189)** AI governance must be practical and efficient.
>
> **[3:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=194)** Too much bureaucracy can slow decision making and stifle innovation.
>
> **[3:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=199)** So, to make governance effective, organizations should limit decision making to experts in security, compliance, and risk management, while also ensuring governance is cross-functional by involving legal, ethical, technical, and business stakeholders.
>
> **[3:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=218)** Accountability is essential.
>
> **[3:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=220)** Every AI decision needs a clearly defined owner to ensure issues are addressed quickly.
>
> **[3:48](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=228)** For example, if an AI chatbot gives incorrect financial advice, there must be a designated team responsible for investigating and resolving that issue.
>
> **[4:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=240)** Without accountability, problems go unaddressed, leading to compliance failures, and potential regulatory penalties.
>
> **[4:08](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=248)** Leadership plays a crucial role in AI governance.
>
> **[4:12](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=252)** When leaders prioritize responsible AI, they set the tone from the top for the entire organization.
>
> **[4:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=261)** Transparency is also critical, as many AI models function as black boxes, making it difficult to understand how they reach certain decisions.
>
> **[4:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=273)** Governance frameworks emphasize explainability, ensuring that AI models provide clear reasoning for their outputs.
>
> **[4:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=282)** For example, if a bank uses AI for loan approvals, it must be able to explain why a loan was rejected or accepted.
>
> **[4:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=292)** Explainability tools like SHAP and LIME provide insights into AI decision making, ensuring that AI remains fair, accountable, and legally compliant.
>
> **[5:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=305)** Strong AI governance, it helps organizations respond quickly to security and compliance risks.
>
> **[5:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=313)** It reduces bias and legal issues while building trust with customers and regulators, and accelerate AI adoption by eliminating unnecessary roadblocks.
>
> **[5:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=327)** Up next, we will explore how to define AI roles using RACI model to ensure clear accountability in AI governance.
>
> **[5:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai-25331327?u=76281980&t=337)** See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (36), [[Security]] (11), [[Accountability]] (4), data (3), [[Privacy]] (2)
> **Env Vars:** owasp (1), mitre (1), atlas (1), nist (1), iso (1)
> **Analogies:** for example (2), such as (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Using the RACI Matrix
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=1)** In AI system implementation, one common issue is confusion about who is responsible for what.
>
> **[0:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=9)** Without clear roles, decision making becomes slow, accountability is unclear, and security and compliance gaps emerge.
>
> **[0:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=18)** To solve this, organizations should use a framework called RACI Matrix, where RACI stands for responsible, accountable, consulted, and informed mapping to the roles in the organization.
>
> **[0:34](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=34)** Accountability lies with those who own the outcome and make the final decision to ensure that policies, risk strategies, and governance measures align with business goals and strategy, and regulatory requirements.
>
> **[0:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=50)** Responsibility, on the other hand, falls on those who implement decisions and ensure actions are completed while maintaining operational control over security, compliance, and AI governance.
>
> **[1:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=65)** Consulted roles provide expertise and input before any key decisions are made.
>
> **[1:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=71)** Last but not the least, informed roles.
>
> **[1:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=74)** They stay updated on decisions and progress, but do not actively contribute to the decision-making process.
>
> **[1:22](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=82)** So this framework, it helps ensure that everyone involved in the AI governance understand their role clearly.
>
> **[1:31](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=91)** Some execute tasks, some make final decisions, other provide expertise, and some need to stay informed.
>
> **[1:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=98)** A well-structured RACI matrix prevents confusion, closes governance gaps, and speeds up decision-making process.
>
> **[1:47](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=107)** Let's look at some of the examples.
>
> **[1:49](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=109)** For determining incident materiality, the CISO, Chief Information Security Officer, the CIO, Chief Information Officer, and the CRO, the Chief Risk Officer, should be consulted, but the CEO of the organization, general counsel, and CFO, Chief Financial Officer, are accountable for the final decision.
>
> **[2:15](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=135)** Now, when we are defining how to identify and manage cybersecurity risks, the CISO is responsible and accountable, while other executives, they provide input.
>
> **[2:28](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=148)** When ensuring cybersecurity is integrated into overall risk management, the CISO leads, and is accountable, as well as responsible, but must work closely with the CRO, with the CIO, and the general counsel consulted for their expertise.
>
> **[2:45](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=165)** Similarly, defining which cybersecurity processes are reviewed by external auditors, that is also led by the CISO, but the CISO must consult the CIO to align with IT policies.
>
> **[3:03](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=183)** Another key governance area is third-party risk oversight, where the Chief Information Security Officer is responsible, while the CRO and the general counsel oversee the implementation.
>
> **[3:16](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=196)** Security teams lead third-party risk assessments, evaluating vendor security controls, data protection measures, and compliance with frameworks like ISO 27001, NIST, or GDPR.
>
> **[3:30](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=210)** However, the procurement teams play a critical role in vendor selection and contract management.
>
> **[3:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=217)** They help ensure that security, compliance, and legal obligations are included in vendor agreements through legal language embedded in there, and work closely with security, compliance, and legal teams to align vendors with the organization's overall risk management strategy.
>
> **[3:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=238)** Procurement typically reports to the CFO or COO, but in organizations with a strong risk management focus, they may also have a direct reporting lines to the CRO or general counsel to ensure security and compliance risks are fully addressed before signing contracts.
>
> **[4:16](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=256)** Finally, when assessing the risk appetite for AI adoption, the board of directors and CEO owns the decision, with input from the CRO and CFO to ensure it aligns with the company's overall risk tolerance.
>
> **[4:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=273)** By implementing a clear RACI matrix, organizations eliminate ambiguity, ensure decisions are made by the right people, and create a structured governance model for responsible AI development.
>
> **[4:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=286)** Since every organization has unique needs, their RACI matrix should be customized to fit their AI security and governance priorities.
>
> **[4:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=296)** Thank you for joining the discussion on AI governance and accountability.
>
> **[5:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=300)** In our next video, we will explore AI security risk management, and strategies to identify, analyze, and reduce AI risk.
>
> **[5:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/governance-in-ai-security?u=76281980&t=309)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (11), ai (8), management (5), [[Accountability]] (3), [[Cybersecurity]] (3)
> **Env Vars:** raci (5), ciso (5), cro (5), cio (3), cfo (3)
> **CLI Commands:** make (2)
> **Cross-References:** next video (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### AI risk management
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=1)** AI is transforming industries, but with new technology comes new risks.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=7)** Managing these risks isn't just about preventing cyber threats.
>
> **[0:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=11)** It's also about ensuring AI systems are resilient, reliable, and aligned with the business goals.
>
> **[0:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=18)** To understand AI security risks better, we can break them down into four main categories.
>
> **[0:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=24)** First, data-related risks, where poor data quality and learning limitations can impact AI accuracy and reliability.
>
> **[0:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=33)** Second, AI and machine learning attacks, which include threats like data poisoning, adversarial inputs, and model extraction that can manipulate AI behavior or steal sensitive information.
>
> **[0:47](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=47)** Third, testing and trust issues where lack of transparency, bias, and incorrect AI outputs can reduce confidence in AI-driven decisions.
>
> **[0:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=59)** And finally, compliance risks where AI systems must align with policies and regulations to avoid legal and ethical violations.
>
> **[1:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=69)** Organizations need a clear approach to manage these risks, starting with defining their risk, appetite and tolerance.
>
> **[1:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=79)** Risk appetite, it reference to how much risk an organization is willing to accept when using AI.
>
> **[1:26](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=86)** For example, a bank may be extremely cautious with fraud detection AI but more flexible with AI-driven customer recommendations.
>
> **[1:36](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=96)** Risk tolerance sets specific thresholds such as how much AI decision making errors can be tolerated before action is needed.
>
> **[1:48](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=108)** Without a clear risk framework, organizations could face operational failures, compliance violations, or reputational damage.
>
> **[1:57](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=117)** To effectively manage AI risks, organizations need a strong security risk management strategy, and this starts with conducting risk assessments early on to identify vulnerabilities before AI is even deployed.
>
> **[2:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=133)** Next, it's important to strengthen data governance.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=137)** This means making sure AI is trained on secure, unbiased, and high-quality data, while also protecting the privacy.
>
> **[2:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=147)** Another key step is embedding security into the AI models.
>
> **[2:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=152)** This can be done using explainability tools, validation testing, and making the AI more resilient to adversarial attacks.
>
> **[2:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=162)** It's also critical to continuously monitor the AI behavior, to catch anomalies and prevent failures over time.
>
> **[2:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=170)** Finally, managing third party AI risks is essential.
>
> **[2:55](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=175)** We have already learned that from SolarWinds and other incidents.
>
> **[3:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=180)** Organizations must thoroughly vet vendors and ensure that contractual agreements include strong security and compliance measures.
>
> **[3:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=191)** By taking these steps, organizations can build AI systems that are secure, trustworthy, and aligned with business goals.
>
> **[3:22](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=202)** AI security risk management is not just about avoiding risks.
>
> **[3:26](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=206)** It's about enabling the organizations and the AI to operate safely, efficiently, and ethically by mitigating the risks to be within the risk appetite of the organization.
>
> **[3:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=220)** A strong risk management strategy ensures AI remains secure and compliant with evolving regulations, which help minimize financial losses by reducing AI system failures and building trust with customers and stakeholders by demonstrating responsible AI practices.
>
> **[4:02](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=242)** AI security risk management is just one part of responsible AI governance.
>
> **[4:08](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=248)** In our next video, we will explore compliance frameworks and compliance strategies discussing how organizations can align AI security with industry regulations and best practices.
>
> **[4:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-risk-management?u=76281980&t=261)** Thank you for watching and see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (27), [[Security]] (7), data (5), management (4), next (3)
> **Cross-References:** next video (1), in the next (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### Navigating regulatory frameworks
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=0)** - [Instructor] AI-driven decisions impact real people, businesses, and economies, making it essential to ensure AI is secure, fair, and compliant right from the start.
>
> **[0:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=14)** Compliance and security must go hand in hand to protect AI systems from privacy breaches, biased decision making, security vulnerabilities, and legal penalties.
>
> **[0:25](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=25)** Ignoring AI regulations isn't just a legal issue.
>
> **[0:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=29)** It is a costly mistake.
>
> **[0:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=32)** Regulatory fines can be severe, with the Europe AI Act imposing penalties of up to 7% of a company's global revenue.
>
> **[0:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=41)** In one case, OpenAI was fined 15 million euros by the Italian Data Protection Authority for GDPR violations, citing failures in obtaining proper consent and ensuring transparency in data collection.
>
> **[0:57](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=57)** This case underscores the financial and reputational risks of non-compliance.
>
> **[1:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=64)** Neglecting AI regulations doesn't just lead to fines, it can actually result in lawsuits, operational restrictions, and even force shutdowns of your AI systems.
>
> **[1:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=77)** In short, compliance isn't optional.
>
> **[1:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=80)** It's essential for sustainable AI innovation.
>
> **[1:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=84)** AI compliance isn't one-size-fits-all.
>
> **[1:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=89)** It's shaped by where you operate and the type of industry vertical your organization is in.
>
> **[1:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=97)** Companies expanding across multiple regions must navigate a complex landscape of regulations, each with unique security, privacy, and governance requirements.
>
> **[1:49](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=109)** For organizations working globally, ISO 42001 serves as the first international AI governance standard, providing best practices for managing AI risks, ensuring transparency, and embedding ethics into AI systems.
>
> **[2:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=126)** It helps businesses establish a structured compliance approach across different regulatory environments.
>
> **[2:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=134)** Then in the European Union, the EU AI Act, it categorizes AI into different risk levels, imposing strict security and transparency requirements on high risk applications like healthcare and finance.
>
> **[2:30](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=150)** Companies operating in Europe must ensure that their AI systems align with these evolving compliance frameworks.
>
> **[2:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=160)** Then in the US, compliance depends on industry and jurisdiction.
>
> **[2:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=166)** The NIST AI Risk Management Framework offers AI safety guidance at a national level, while FedRAMP ensures that AI-powered cloud services meet federal security requirements.
>
> **[3:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=181)** California's Consumer Privacy Act, commonly referred to as CCPA, that governs AI-related data practices by enforcing consumer rights over personal information.
>
> **[3:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=193)** While CCPA doesn't explicitly regulate AI, it impacts AI systems that process consumer data, requiring compliance with transparency, access, and deletion requests.
>
> **[3:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=207)** Recent developments such as California's AB 1008 aims to expand CCPA's scope to include AI-generated personal information.
>
> **[3:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=220)** Compliance challenges also vary by the type of industry as well.
>
> **[3:45](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=225)** For example, healthcare AI, which handles patient data, must comply with HIPAA in the US and GDPR in Europe.
>
> **[3:54](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=234)** The EU AI Act classifies healthcare AI as high risk, as I mentioned before, that requires stringent security and transparency.
>
> **[4:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=244)** Then finance relies on AI for fraud detection, credit scoring, and trading.
>
> **[4:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=250)** Financial companies, they need to comply with GDPR for data privacy, PCI DSS for secure payments, and SCC regulations for transparency.
>
> **[4:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=260)** AI-driven retail platforms use machine learning for marketing and personalization using their customer data, which makes compliance with CCPA and GDPR essential.
>
> **[4:34](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=274)** Then government and defense sectors, they use AI for surveillance and national security, which requires them to comply with NIST AI Risk Management Framework, the European AI Act, and FedRAMP for oversight.
>
> **[4:51](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=291)** Many people think that compliance is same as security, but they are not the same.
>
> **[4:57](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=297)** Compliance means following laws and regulations like GDPR, CCPA, and Europe AI Act.
>
> **[5:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=304)** It sets the minimum security requirements for AI systems.
>
> **[5:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=309)** But being compliant doesn't mean a system is fully protected from cyber threats.
>
> **[5:15](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=315)** Passing a GDPR audit, for example, won't stop an AI-driven cyber attack if security measures are weak.
>
> **[5:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=324)** Security goes beyond compliance, protecting AI from evolving threats with extra layer of defense added to them.
>
> **[5:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=333)** Frameworks like NIST AI Risk Management Framework, OWASP AI Top 10, and MITRE ATLAS help build strong, more resilient AI systems that do more than just check regulatory boxes.
>
> **[5:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=350)** Ignoring AI compliance and security can lead to serious financial, legal, and reputational damage for the organization.
>
> **[5:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=359)** Real world examples show why both are crucial for all organizations.
>
> **[6:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=365)** For example, Clearview AI, a facial recognition company, was fined heavily under GDPR for scraping images from public websites and social media without user consent, which raised major privacy concerns.
>
> **[6:22](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=382)** This led to legal action, financial penalties, and public backlash over unethical data practices.
>
> **[6:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=389)** Then the next example is of Ticketmaster, a global ticketing platform, which suffered a major data breach when hackers exploited an AI-powered chatbot, exposing thousands of customer payment details, including names, addresses, and credit card information.
>
> **[6:49](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=409)** And this resulted in regulatory investigations, lawsuits, and loss of customer trust.
>
> **[6:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=416)** So now if you see, these cases show that compliance alone isn't enough, strong security is essential, especially when using AI and third party tools.
>
> **[7:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=430)** To avoid compliance failures, companies must combine compliance with security from the start.
>
> **[7:16](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=436)** A strong AI governance model will help ensure that legal rules match cybersecurity best practices.
>
> **[7:25](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=445)** Transparency, accountability, and fairness should be built into the AI development from day one.
>
> **[7:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=453)** Regular risk assessments help prevent compliance from becoming an afterthought.
>
> **[7:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=458)** A well-planned compliance strategy reduces risks, builds trust, and supports responsible AI use.
>
> **[7:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=466)** Compliance isn't just about avoiding fines.
>
> **[7:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=470)** It gives businesses a competitive edge.
>
> **[7:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/navigating-regulatory-frameworks?u=76281980&t=473)** Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (43), [[Security]] (14), data (9), [[Privacy]] (5), [[NIST]] (3)
> **Env Vars:** gdpr (7), ccpa (5), nist (3), iso (1), hipaa (1)
> **Analogies:** for example (3), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Compliance strategies for AI
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=1)** Now that we have covered AI regulations and what to consider during prototyping, let's talk about compliance strategies and how businesses can apply security frameworks while staying compliant.
>
> **[0:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=14)** AI adoption is growing faster than we can imagine.
>
> **[0:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=18)** 65% of the companies are already exploring or using AI, according to McKinsey.
>
> **[0:25](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=25)** But rushing into AI without security and compliance planning can lead to serious risks for your organization.
>
> **[0:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=32)** Ignoring compliance can result in financial losses, reputational damage and legal trouble.
>
> **[0:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=38)** AI systems handle large amounts of sensitive data, and laws like GDPR, the EU AI Act and HIPAA, set strict rules for managing the data.
>
> **[0:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=50)** Yet 70% of organizations struggle to keep up with changing regulations, according to Deloitte.
>
> **[0:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=58)** Adding to the challenge, many AI models operate as a black box, making their decisions hard to explain.
>
> **[1:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=66)** This lack of transparency can lead to bias, discrimination and legal challenges.
>
> **[1:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=73)** To manage AI compliance effectively, it is highly important to understand the difference between a compliance assessment and a risk assessment.
>
> **[1:23](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=83)** So let's dive in.
>
> **[1:25](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=85)** Compliance assessment ensures that organizations meet external standards, laws and regulations through audits and documentation.
>
> **[1:36](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=96)** It answers, "Are we meeting legal and regulatory obligations?"
>
> **[1:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=101)** Risk assessment, on the other hand, identifies and mitigates vulnerabilities beyond just compliance, which helps to evaluate threats, like adversarial attacks, data poisoning and model failures, which we will be covering later in the course.
>
> **[1:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=118)** Risk assessments ask, "What could go wrong, and how do we prevent it?"
>
> **[2:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=125)** These two elements are interconnected, compliance assessment and risk assessment, right?
>
> **[2:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=130)** GDPR mandates data protection impact assessments, blending compliance with risk management to ensure that there is a strong governance.
>
> **[2:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=141)** Organizations need structured AI security architectures that help embed data protection, risk mitigation and continuous security validation at every stage.
>
> **[2:34](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=154)** A strong AI security architecture, it protects data, controls access and verifies every request before granting permission.
>
> **[2:45](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=165)** Key measures to incorporate all that into AI security include encrypting AI training data, both at rest and in transit, to keep it safe.
>
> **[2:57](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=177)** Then secondly, using role-based access control, or RBAC, to restrict who can modify, train or deploy AI models.
>
> **[3:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=186)** Then thirdly, applying zero-trust security, meaning AI systems must verify every access request before allowing entry.
>
> **[3:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=197)** To secure AI development, companies must integrate security into machine learning operation workflows, or MLOps, from development to production, so that AI models are built with security in mind, reducing vulnerabilities before deployment of these AI systems.
>
> **[3:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=215)** Then secondly, companies should also use containerized environments to safely host AI models so that models remain isolated, scalable and protected from unauthorized access or tampering.
>
> **[3:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=232)** Then thirdly, companies must deploy real-time monitoring tools to help detect security threats as they happen so that potential attacks, anomalies or failures can be identified and mitigated before they cause any damage to your organization.
>
> **[4:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=250)** Having AI governance policies is not enough, they must be put into action.
>
> **[4:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=257)** This means aligning regulations with security steps that actively reduce risks.
>
> **[4:23](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=263)** For example, GDPR requires data privacy, so companies implement differential privacy and automated data masking to protect personal data in AI workflows.
>
> **[4:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=277)** The NIST AI risk management framework recommends risk management, so security teams run adversarial testing to check if AI models can withstand attacks that manipulate inputs to trick them.
>
> **[4:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=293)** They also conduct bias detection audits to ensure that AI decisions are fair and unbiased, preventing discrimination based on gender, race, or other factors.
>
> **[5:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=306)** The EU AI Act requires AI to be transparent, so teams use tools like SHAP and LIME to explain how AI makes decisions to bypass that black box issue, which I mentioned earlier.
>
> **[5:23](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=323)** Instead of just checking a compliance box, organizations must turn policies into real security measures to protect AI systems.
>
> **[5:34](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=334)** AI security isn't just about rules, it's about automating, enforcing and validating security at every stage.
>
> **[5:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=343)** To make security frameworks scalable and effective, organizations must embed security early on in AI prototyping.
>
> **[5:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=352)** And secondly, they should test AI models for adversarial threats before they are pushed to production.
>
> **[6:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=360)** Then thirdly, automate compliance checks in CI/CD pipelines to ensure models meet regulations before deployment.
>
> **[6:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=369)** Then thirdly, using AI threat intelligence for realtime monitoring and early threat detection.
>
> **[6:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/compliance-strategies-for-ai?u=76281980&t=377)** By making security part of AI development, companies move from reactive compliance to proactive protection, keeping AI systems secure, compliant and future proof.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (33), [[Security]] (18), data (10), [[Prototyping]] (2), management (2)
> **Env Vars:** gdpr (3), hipaa (1), rbac (1), nist (1), shap (1)
> **CLI Commands:** make (1), cd (1)
> **Analogies:** imagine (1), for example (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. AI Risk Management Frameworks

[↑ Back to Table of Contents](#table-of-contents)

#### Intro to Risk Management Framework
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=1)** In our previous module of governance risk and compliance, we explored the fundamentals of AI security risk management, understanding key risk areas.
>
> **[0:12](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=12)** Now it's time to take things a step further.
>
> **[0:15](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=15)** AI security isn't just about identifying risks, it's about managing them effectively through a structured approach.
>
> **[0:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=24)** That's where a risk management framework comes in.
>
> **[0:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=29)** Today, we will break it down into clear actionable steps, ensuring that AI security is not just a concept, but a real-world practice within your organization.
>
> **[0:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=40)** And here's a key takeaway right upfront.
>
> **[0:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=43)** AI developers, data scientists, and security teams cannot work in silos.
>
> **[0:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=50)** Managing AI risks require cross-functional collaboration, just like an aircraft needs pilots, engineers, air traffic control, and safety regulators working together to create a smooth and safe flying experience.
>
> **[1:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=66)** So let's dive in.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=68)** Imagine launching an AI-powered aircraft, your cutting edge innovation that promises efficiency, automation, and intelligence.
>
> **[1:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=78)** But just like any ambitious aviation project, if you fail to manage risks, it can lead to unexpected turbulence, system failures, or even disaster.
>
> **[1:30](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=90)** In AI security, risk management isn't just about following rules.
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=95)** It's about building a resilient AI system that can withstand attacks, bias, and evolving threats.
>
> **[1:44](https://www.linkedin.com/learning/ai-product-development-secure-by-design/intro-to-risk-management-framework?u=76281980&t=104)** Now let's use this risk management framework to guide our AI security strategy step by step, like a mission control checklist.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (9), [[Security]] (6), management (2), [[Risk Management Framework (RMF)|Risk management framework]] (2), data (1)
> **Analogies:** just like (2), imagine (1)
> **Speakers:** - [instructor] (1)

#### Identify and assess risks
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=0)** - [Instructor] Now imagine you are about to take off on a flight.
>
> **[0:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=4)** The engines are humming, passengers are seated, and the runway is clear for takeoff.
>
> **[0:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=10)** But before the wheels leave the ground, the pilot and the crew must conduct critical pre-flight safety checks, scanning for weather issues, verifying fuel levels and weight distribution, and ensuring that all systems are functioning properly.
>
> **[0:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=27)** These steps not only reduce risks, but also ensure compliance with federal aviation requirements, keeping each flight safe and reliable.
>
> **[0:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=38)** Just like aviation, before deploying any AI system, organizations must identify and assess risks to ensure that AI remains secure, reliable, compliant, and aligned with business goals.
>
> **[0:55](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=55)** Without careful evaluation, AI models can drift, be manipulated, or produce unreliable decisions leading to security failures, compliance issues, and business disruptions.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=68)** So how do we assess AI risks effectively?
>
> **[1:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=73)** Let's break it down.
>
> **[1:15](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=75)** First, tracking AI model use is essential.
>
> **[1:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=80)** AI decisions should not be a black box.
>
> **[1:23](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=83)** Just like financial transactions are monitored for fraud, AI models need oversight to ensure they are functioning as expected.
>
> **[1:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=92)** We should ask questions like what data is being processed by AI model?
>
> **[1:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=97)** Are there unexpected behaviors and so on?
>
> **[1:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=101)** Transparent monitoring systems help detect anomalies before they escalate into security threats.
>
> **[1:48](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=108)** For example, imagine a bank's AI fraud detection system.
>
> **[1:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=113)** If it suddenly starts to flag too many legitimate transactions, this could indicate an adversarial attack or data drift issue over time.
>
> **[2:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=124)** Without proper tracking, such problems could go unnoticed, leading to customer frustration and financial loss.
>
> **[2:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=133)** Next, risk assessments must be an ongoing process.
>
> **[2:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=138)** AI models are not static.
>
> **[2:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=140)** They learn and they evolve over time.
>
> **[2:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=144)** If you are assessing risk only at one point in time during deployment and never revisit it again, your organization may fail to recognize new vulnerabilities which may emerge due to the evolution of your AI model.
>
> **[2:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=161)** AI security requires continuous evaluation to detect shifts that could introduce new risks into the model.
>
> **[2:48](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=168)** For example, consider an AI-powered autonomous vehicle.
>
> **[2:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=173)** It may perform well under normal conditions, but if a heavy fog or a sudden storm impacts its sensors, its risk profile changes now.
>
> **[3:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=184)** So security teams need real time risk analysis to adapt to such shifts and prevent system failures.
>
> **[3:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=191)** Another model concern is third-party risk.
>
> **[3:15](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=195)** AI systems often rely on external data sources, pre-trained models, or third party APIs.
>
> **[3:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=201)** If any of these components are compromised, the entire AI system is at risk.
>
> **[3:26](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=206)** Organizations must thoroughly vet their vendors to help ensure strong contractual security requirements embedded into the contracts and continuously audit their AI supply chain.
>
> **[3:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=221)** Take an AI-driven healthcare diagnostic tool as an example.
>
> **[3:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=226)** If it depends on a third party medical database, and that vendor suffers a data breach or manipulation, the AI's predictions could become unreliable or biased, leading to serious patient consequences.
>
> **[4:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=241)** And therefore, ensuring the integrity of third-party inputs is highly critical to maintain AI security and trust.
>
> **[4:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=251)** Risk assessment is not a one-time process.
>
> **[4:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=254)** It must be revisited throughout AI's entire lifecycle.
>
> **[4:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=259)** AI models require continuous monitoring, dynamic risk assessments, and strict oversight on third-party dependencies to remain secure.
>
> **[4:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=269)** Now, keep in mind that not all risks require the same level of investment.
>
> **[4:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=275)** This is where risk appetite plays a big role.
>
> **[4:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=278)** Risk appetite determines how much risk an organization is willing to accept before investing in security controls.
>
> **[4:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=286)** Highly regulated industries like finance and healthcare may have a low risk appetite, which requires heavy investment in AI security controls, while startups prioritizing rapid innovation might accept certain risks and focus only on high priority security gaps.
>
> **[5:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=305)** Traditional risk assessments rely on qualitative labels like high, medium, and low risk, but these can be inconsistent and make it difficult to prioritize security investments.
>
> **[5:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=318)** Risk quantification provides a data-driven approach by assigning measurable values to AI threats.
>
> **[5:25](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=325)** Techniques like Monte Carlo simulations or the FAIR methodology, which is Factor Analysis of Information Risk and probabilistic modeling may help assess the likelihood and financial impact of AI-related risks.
>
> **[5:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=340)** Instead of labeling an adversarial attack as high risk, organizations can estimate potential financial loss, downtime impact, and regulatory penalties.
>
> **[5:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=352)** Now, let's say that if an AI-powered fraud detection system has a 10% chance of failing due to adversarial manipulation, leading to $5 million in losses, decision makers can allocate security budgets accordingly to prevent such incidents.
>
> **[6:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=369)** By knowing these numbers, security teams can prioritize investments based on real risk exposure rather than gut instinct.
>
> **[6:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=379)** Risk assessment isn't just a one-time event.
>
> **[6:22](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=382)** It must be revisited throughout the AI's entire life cycle.
>
> **[6:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=387)** AI models require continuous monitoring, ongoing risk analysis, and strong oversight on third-party dependencies as well.
>
> **[6:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=397)** So before launching any AI system, ask yourself are you proactively identifying and quantifying risks or are you leaving security unchecked?
>
> **[6:47](https://www.linkedin.com/learning/ai-product-development-secure-by-design/identify-assess-risks?u=76281980&t=407)** Thank you for watching and see you in the next session.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (28), [[Security]] (13), data (5), business (2), next (2)
> **Analogies:** imagine (2), just like (2), for example (2)
> **CLI Commands:** make (1)
> **Env Vars:** fair (1)
> **Cross-References:** in the next (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Mitigate, monitor, and audit risks
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=0)** - [Instructor] Now let's continue to expand on the flight analogy.
>
> **[0:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=4)** Imagine an air traffic control center overseeing dozens of flights at once.
>
> **[0:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=10)** Every aircraft in the sky is being tracked in real time with constant communication between pilots and ground control.
>
> **[0:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=18)** If something seems off like an unexpected deviation from the flight path, immediate action is taken to prevent a potential disaster.
>
> **[0:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=29)** AI security needs the same level of continuous monitoring and risk mitigation to help prevent system failures, security breaches, and operational disruptions.
>
> **[0:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=40)** Identifying risks is just the beginning.
>
> **[0:44](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=44)** What really matters is how they are managed, monitored, and audited over time.
>
> **[0:49](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=49)** Security controls must be proactive rather than reactive.
>
> **[0:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=53)** Organizations need to implement mitigation strategies at every layer of AI lifecycle.
>
> **[1:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=60)** AI models should be stress tested against adversarial inputs to ensure that they can withstand subtle manipulations that could trick the system.
>
> **[1:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=71)** Cleaning and validation training data helps prevent data poisoning attacks that could compromise AI decision making.
>
> **[1:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=79)** There are AI-driven security tools out there now, which can help detect anomalies, unauthorized access, and irregular data patterns before they escalate into serious threats.
>
> **[1:31](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=91)** For example, and AI-driven hiring tool might unknowingly develop bias due to flawed training data.
>
> **[1:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=100)** If organizations proactively monitor and retrain the model, they can prevent this type of discrimination before it impacts hiring decisions.
>
> **[1:51](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=111)** Just like pilots don't rely on a single system check before takeoff, they have multiple controls put in place.
>
> **[2:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=120)** AI security requires continuous monitoring to detect shifting threats.
>
> **[2:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=126)** AI models should be monitored for unusual decision making patterns.
>
> **[2:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=131)** If an AI chat bot suddenly starts generating inappropriate responses, that is a red flag.
>
> **[2:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=138)** So organizations must track every decision an AI is making.
>
> **[2:23](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=143)** With automated alerts for unexpected changes in behavior, AI models can become less accurate over time due to a model drift.
>
> **[2:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=153)** So regularly retraining AI systems can help ensure that they remain relevant and effective.
>
> **[2:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=160)** For instance, our financial AI fraud detection system might work well initially, but if new fraud tactics emerge and the model is not updated, its effectiveness will drop.
>
> **[2:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=173)** Continuous monitoring help ensures that AI security evolves with emerging threats.
>
> **[3:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=180)** Just like in aviation, black box flight recorders provide crucial data after an incident, AI security audits serve the same purpose.
>
> **[3:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=190)** They ensure transparency, accountability, and compliance with regulations.
>
> **[3:16](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=196)** AI systems should be auditable so that businesses can understand and justify their decisions later.
>
> **[3:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=204)** AI models handling sensitive data in finance, healthcare, and law enforcement must align with standards like ISO 40 2001 and NIST AI Risk Management Framework.
>
> **[3:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=218)** Any external AI service providers should undergo security audits to prevent supply chain attacks.
>
> **[3:45](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=225)** For example, an AI powered medical diagnosis tool should be audited regularly to help ensure that it provides accurate and unbiased results.
>
> **[3:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=236)** Without audits, errors could go unnoticed, putting patients' lives at risk.
>
> **[4:02](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=242)** Also, AI security is not a one-time fix.
>
> **[4:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=246)** It is an ongoing process that requires continuous mitigation, monitoring and auditing.
>
> **[4:12](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=252)** The real question is, are you treating AI security like a pre-flight safety check, or are you leaving it to a chance?
>
> **[4:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=261)** In the next video, we will dive into managing policies, procedures, and training to further strengthen AI security.
>
> **[4:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/mitigate-monitor-audit-risks?u=76281980&t=269)** Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (23), [[Security]] (11), data (6), [[Continuous Monitoring]] (3), traffic (1)
> **Analogies:** for example (2), just like (2), imagine (1), for instance (1)
> **Env Vars:** iso (1), nist (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Manage policies, procedures, and training
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=0)** - [Instructor] Securing AI systems is not just about technology.
>
> **[0:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=4)** It's about setting clear policies, establishing structured procedures, and ensuring that employees are equipped with the right knowledge to manage AI risk effectively.
>
> **[0:16](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=16)** Without these foundational elements, even the most advanced security controls can fail due to human error, miscommunication, or lack of complete oversight.
>
> **[0:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=27)** Organizations must start by implementing AI security policies that provide a clear framework for how AI models are developed, deployed, and maintained over time.
>
> **[0:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=39)** These policies define who can access AI models, and how data should be handled, and what security measures must be followed at every single stage.
>
> **[0:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=52)** Just like financial regulations, ensure transparency in banking AI policies ensure that AI systems operate securely and responsibly.
>
> **[1:02](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=62)** Policies must then be translated into standards and then standards into actionable procedures that guide daily operations.
>
> **[1:12](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=72)** These procedures ensure AI models are tested before deployment, updated securely, and continuously monitored for potential risks.
>
> **[1:22](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=82)** Without structured processes, AI systems can drift, making unpredictable decisions that could impact business outcomes, compliance, and customer trust.
>
> **[1:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=93)** However, policies, standards, and procedures alone are not enough.
>
> **[1:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=99)** Training and communication are the key to help ensure that teams understand their role in securing AI.
>
> **[1:47](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=107)** Employees working with AI must be aware of risks such as bias, adversarial manipulation, and data integrity issues.
>
> **[1:55](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=115)** Regular training sessions, internal security updates, and cross-functional collaboration helps embed security awareness into the organization's culture itself.
>
> **[2:07](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=127)** Security teams must also work closely with AI developers and data scientists to help ensure that security is integrated from the start itself.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=137)** In industries like finance, healthcare, and critical infrastructure, AI driven decisions can have significant consequences.
>
> **[2:26](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=146)** Training ensures that those managing AI systems know how to detect anomalies, respond to potential threats, and intervene whenever necessary to prevent security failures.
>
> **[2:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=159)** Organizations should also encourage open communication, which can help their employees to report AI related concerns early on before these escalate into larger risks.
>
> **[2:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=172)** By combining clear policies, structured procedures, and ongoing training, organizations can build a culture of AI security that extends beyond just technical safeguards.
>
> **[3:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=186)** Security is not a one-time effort.
>
> **[3:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=190)** It requires continuous reinforcement, education, and adaptation to evolving AI threats.
>
> **[3:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=197)** A well-prepared organization is one that ensures that its people, processes, and technology all are working together in harmony to create a resilient and trustworthy AI ecosystem.
>
> **[3:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/manage-policies-procedures-training?u=76281980&t=212)** Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (18), [[Security]] (10), data (3), teams (2), [[Banking]] (1)
> **Analogies:** just like (1), such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Establish oversight and governance
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=0)** - [Instructor] To help us understand this topic of establishing oversight and governance for AI security, let's imagine a pilot navigating a commercial flight.
>
> **[0:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=11)** While they control the aircraft, the pilot doesn't make every decision alone.
>
> **[0:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=17)** Behind this pilot is an entire ecosystem of aviation authorities, engineers, AI traffic controllers, and regulatory agencies, all working together to ensure a safe and smooth flight.
>
> **[0:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=32)** From setting flight paths to defining safety regulations, governance is what keeps air travel mostly predictable and secure.
>
> **[0:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=42)** AI security works the same way.
>
> **[0:45](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=45)** No single developer or security team can handle AI risk management all by themselves.
>
> **[0:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=52)** AI governance requires structured oversight, clear accountability, and leadership involvement to help ensure that AI systems operate securely, ethically, and in alignment with business objectives and strategy.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=68)** Aligning on AI risk tolerance, which was covered earlier in the course, is like different airlines deciding on their safety policies.
>
> **[1:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=78)** Some budget airlines prioritize speed and cost efficiency, accepting a higher level of risk, while premium carriers emphasize safety and reliability above all else.
>
> **[1:31](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=91)** AI governance must define acceptable risks for automation in the same way, and these acceptable risks will differ for each organization.
>
> **[1:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=102)** For example, an AI-driven healthcare diagnostic system must have near-zero tolerance for errors because patients' lives are at stake.
>
> **[1:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=112)** Meanwhile, an AI-powered movie recommendation engine can afford to make occasional mistakes without serious consequences.
>
> **[2:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=121)** Leadership must set clear risk tolerance levels based on the specific industry the organization is in, use cases, and regulatory landscape.
>
> **[2:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=133)** Incorporating AI risk into governance structures is like how aviation bodies regulate flight paths.
>
> **[2:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=140)** Air travel follows strictly enforced global standards, ensuring that pilots operate under clear guidelines that dictate safety measures, response protocols, and operational procedures.
>
> **[2:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=153)** AI governance should work the same way.
>
> **[2:36](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=156)** Organizations need structured AI governance frameworks led by CISOs, AI ethics boards, and compliance teams, to help enforce risk policies at every level.
>
> **[2:49](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=169)** Without formal governance structures, AI models can drift, as well as security can weaken and compliance risks can escalate, just like an aircraft flying without navigation controls.
>
> **[3:03](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=183)** Developing executive and board oversight is like airline executives reviewing safety audits.
>
> **[3:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=189)** No major airline would operate without regular safety assessments, compliance checks, and leadership accountability.
>
> **[3:16](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=196)** AI systems require the same top-down involvement from [[Executive Leadership]] to help ensure that AI risks are continuously managed and security policies are enforced.
>
> **[3:28](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=208)** For example, an AI-powered financial trading algorithm could introduce massive financial losses if left unchecked.
>
> **[3:36](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=216)** Regular board-level reviews and executive oversight ensures that the AI operates within the acceptable risk parameters, preventing rogue automation from making high-risk and unsupervised decisions.
>
> **[3:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=232)** AI governance isn't just about compliance, it's about ensuring accountability, transparency, and ethical responsibility at every level.
>
> **[4:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=241)** Just as aviation relies on coordinated decision-making between pilots, regulators, and executives, AI security must be a shared responsibility across teams and leadership.
>
> **[4:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=254)** So the question is, does your AI have the oversight of a well-regulated airline, or is it operating without a control tower?
>
> **[4:23](https://www.linkedin.com/learning/ai-product-development-secure-by-design/establish-oversight-governance?u=76281980&t=263)** Thank you for watching, and see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (22), [[Security]] (6), leadership (3), [[Accountability]] (2), [[Automation]] (2)
> **Analogies:** for example (2), imagine (1), just like (1)
> **CLI Commands:** make (2)
> **Cross-References:** earlier in (1), in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 3. AI Security Threats and Adversarial Attacks

[↑ Back to Table of Contents](#table-of-contents)

#### What is the AI lifecycle?
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=0)** - [Instructor] AI is transforming industries, enabling teams to build applications that automate processes, detect patterns, and enhance productivity.
>
> **[0:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=10)** Before an AI model generates insights, it must go through a structured lifecycle to ensure that it is developed, trained, deployed, and maintained effectively.
>
> **[0:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=21)** For AI product managers and software developers focused on prototyping, understanding this lifecycle is crucial to build scalable, efficient, and secure models.
>
> **[0:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=33)** The first stage of AI lifecycle is data collection and preparation.
>
> **[0:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=38)** AI models depend on high-quality data to make accurate predictions.
>
> **[0:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=43)** Raw data, as we know, is often messy, incomplete, or biased, which can lead to unreliable results.
>
> **[0:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=52)** To avoid this, teams must clean, structure, and validate their data, removing inconsistencies and ensuring fairness.
>
> **[1:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=61)** Security risks at this stage include biased datasets, incorrect labeling, and potential data poisoning, where bad actors introduce misleading information to corrupt AI decision-making process.
>
> **[1:15](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=75)** Implementing data validation techniques and ensuring that data integrity through tracking and verification helps mitigate these risks.
>
> **[1:26](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=86)** Once the data is prepared, teams move to model development and training.
>
> **[1:31](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=91)** In this phase, AI engineers design and train models to recognize patterns and generate predictions.
>
> **[1:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=99)** This involves selecting the right algorithms, adjusting parameters, and refining models through repeated testing.
>
> **[1:48](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=108)** However, AI models can be vulnerable to adversarial manipulation, where small changes in inputs can cause incorrect outputs.
>
> **[1:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=118)** Additionally, if the training data is leaked, it can expose sensitive information.
>
> **[2:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=125)** To implement these issues, teams should implement security measures such as adversarial testing, differential privacy techniques, and explainability tools to understand how AI makes decisions.
>
> **[2:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=139)** Ensuring that AI models generalize well to the real-world scenarios helps prevent overfitting and enhances reliability.
>
> **[2:30](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=150)** The next stage is model packaging and deployment, where AI models transition from development to real-world use.
>
> **[2:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=159)** Once trained, models are then packaged, stored, and prepared for deployment.
>
> **[2:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=166)** Security risks arise if models are not properly validated before going live.
>
> **[2:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=172)** Adversarial testing, version control, and integrity checks ensure that models functions as expected and are resistant to manipulation.
>
> **[3:02](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=182)** During deployment, models are integrated into applications and services through APIs, cloud platforms, or on-premise systems.
>
> **[3:12](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=192)** To maintain security, best practices include encrypting model files, limiting access through authentication, and modifying API usage to prevent unauthorized manipulation or theft of AI models.
>
> **[3:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=209)** The final stage is AI monitoring and continuous improvement, which helps ensure that models remain accurate, efficient, and secure after deployment.
>
> **[3:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=221)** AI systems are dynamic in nature, meaning they must continuously learn and adapt to new data and evolving threats.
>
> **[3:51](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=231)** Over time, as the models get more and more data and fine tuning is done, the models may experience data drift where patterns change, reducing the accuracy of the model.
>
> **[4:07](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=247)** Regular monitoring, retraining with updated data, and performance tracking help keep AI systems relevant.
>
> **[4:16](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=256)** Security threats such as model inversion attacks, adversarial inputs, and API exploits must be continuously addressed.
>
> **[4:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=264)** We are going to be covering these attacks in the later module.
>
> **[4:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=269)** Organizations should implement automated alerts for unusual behavior, conduct fairness audits to prevent biased decisions, and maintain version control to roll back updates if necessary.
>
> **[4:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=283)** Understanding and securing the entire AI lifecycle is essential to building trustworthy AI systems.
>
> **[4:51](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=291)** Addressing risks at each and every stage from data prep to deployment ensures that AI remains reliable, unbiased, and resistant to security threats.
>
> **[5:03](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=303)** By integrating security and best practices throughout the AI lifecycle, teams can create AI solutions that are robust, ethical, and ready for real-world challenges.
>
> **[5:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=314)** In the next module, we will explore how adversarial attacks work and how AI developers can implement security defenses from the prototyping stage itself.
>
> **[5:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/what-is-the-ai-lifecycle?u=76281980&t=327)** So stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (21), data (14), [[Security]] (8), teams (5), [[Prototyping]] (2)
> **Env Vars:** api (2)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Introduction to adversarial attacks
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=0)** - [Narrator] As AI becomes more common, so do the ways attackers try to trick and misuse it.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=7)** AI models can be fooled into making wrong decisions, exposing sensitive information, or becoming unreliable.
>
> **[0:15](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=15)** To understand how these attacks work, let's look at the entire AI lifecycle, and how AI is targeted at these different stages of the lifecycle, from building and training to deployment and real world use.
>
> **[0:30](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=30)** AI starts with data preparation, where large amounts of information are collected and cleaned before training.
>
> **[0:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=38)** If this data is tampered with, the entire AI model can be affected.
>
> **[0:44](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=44)** Data poisoning happens when attackers insert misleading or biased data, causing AI to learn incorrect patterns.
>
> **[0:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=53)** For example, researchers found that placing small stickers on road sites could make a self-driving car misread a stop sign as a yield sign, which can be dangerous for the drivers.
>
> **[1:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=69)** Another major risk is of data leakage, where poor security allows private information like personal data or company secrets to be exposed.
>
> **[1:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=81)** AI teams often use open-source models and third-party data sets, but if these sources are compromised, attackers can install hidden vulnerabilities, known as back doors, that they can later exploit.
>
> **[1:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=98)** In the AI lifecycle, once the data is collected, AI enters the model development and training phase, where it learns from patterns in the data to make predictions.
>
> **[1:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=110)** Attackers can interfere in different ways.
>
> **[1:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=113)** Hidden voice commands can be embedded in audio files, making smart assistance follow secret instructions without the user knowledge.
>
> **[2:02](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=122)** Another trick, the one-pixel attack, where an adversary can change just one pixel in an image and confuse AI into misclassifying objects.
>
> **[2:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=134)** Attackers may also try another attack, which is called as model theft, where they repeatedly ask an AI model several questions to figure out how it works, and it helps them copy its capabilities.
>
> **[2:31](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=151)** If security is weak, they can also secretly modify data during training, leading to flawed decision making when the AI is used in real life.
>
> **[2:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=163)** After training, the AI model moves to deployment, where it starts handling real world data.
>
> **[2:51](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=171)** Attackers can manipulate AI models by using adversarial input modifications, by making small changes that tricks AI into making incorrect decisions.
>
> **[3:02](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=182)** For instance, adding a piece of black tape to a speed limit sign caused Tesla system to read the wrong speed, leading to potentially safety issues for the drivers.
>
> **[3:16](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=196)** We briefly covered about this example up above as well.
>
> **[3:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=200)** Weak security in AI-powered chatbots is another risk.
>
> **[3:25](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=205)** Attackers have used API vulnerabilities to extract customer payment details by crafting special queries.
>
> **[3:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=213)** AI models stored in model registries can also be stolen, or altered, if access is not properly controlled.
>
> **[3:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=222)** To keep AI safe, companies must use strong security controls, encrypt API communications, and monitor AI activity.
>
> **[3:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=233)** Once the AI is deployed, attackers then shift their focus to runtime exploitation, which means targeting AI while it is being used.
>
> **[4:03](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=243)** Prompt injection and jailbreak attacks take advantage of AI's abilities to follow instructions.
>
> **[4:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=251)** Prompt injection attacks tricks AI into ignoring its rules and following hidden commands instead.
>
> **[4:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=259)** For example, through this attack, an attacker might manipulate a chatbot into revealing confidential company details.
>
> **[4:28](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=268)** Then, jailbreak attacks push AI to bypass safety filters and produce harmful, biased, or misleading content.
>
> **[4:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=277)** These types of attacks are especially common in large language models.
>
> **[4:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=282)** Another major attack is model denial of service attacks, where AI models such as financial trading systems are overloaded with requests, which lead to their slow performance or complete failure.
>
> **[4:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=298)** Attackers can also manipulate AI's bias and fairness algorithms, causing the AI to favor certain groups unfairly, which raises ethical concerns.
>
> **[5:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=310)** One of the biggest challenges with these attacks is that they are harder to detect.
>
> **[5:16](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=316)** Unlike traditional cybersecurity threats, which use malware or stolen passwords, adversarial attacks trick AI at its core, making them difficult to trace.
>
> **[5:28](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=328)** AI lacks human judgment, and relies only on math-based patterns, making it easier to manipulate with small, undetectable tweaks.
>
> **[5:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=339)** Many AI teams focus on improving accuracy, but overlook security protections, leaving AI vulnerable.
>
> **[5:47](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=347)** The AI security rules are also struggling to keep up, making it difficult for companies to protect against emerging threats.
>
> **[5:57](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=357)** To make things worse, adversarial attacks are becoming automated now.
>
> **[6:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=361)** In 2023, researchers found that AI-powered attack programs could generate over 10,000 adversarial examples per minute, making traditional security defenses ineffective.
>
> **[6:15](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=375)** Cyber criminals now use AI to launch large scale attacks, forcing organizations to rethink how they defend AI systems.
>
> **[6:26](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=386)** Understanding these attacks is just first step.
>
> **[6:30](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=390)** AI security requires action at every stage of development, deployment, and operation.
>
> **[6:36](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=396)** In the next video, we will look at how to build stronger defenses to protect AI from these growing threats.
>
> **[6:44](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=404)** We will also be covering certain tools and frameworks which you can use to defend against these attacks.
>
> **[6:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/introduction-to-adversarial-attacks?u=76281980&t=412)** Thank you for watching, and see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (38), data (11), [[Security]] (8), teams (2), api (2)
> **Analogies:** for example (2), for instance (1), such as (1)
> **CLI Commands:** make (3)
> **Env Vars:** api (2)
> **Cross-References:** in the next (2)
> **Definitions:** known as (1), is called (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### Defensive techniques against adversarial attacks
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=0)** - [Instructor] In the last video, we saw how AI models can be attacked at every stage of AI lifecycle, from data preparation to deployment and ongoing use.
>
> **[0:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=11)** Now, let's go over how AI product developers can protect their models using practical defenses at every step.
>
> **[0:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=21)** The first step is preparing and curating data, and as we have already discussed previously, AI models rely on large datasets.
>
> **[0:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=29)** But if the data is poisoned, the model will learn the wrong patterns.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=35)** To prevent this, teams should use data validation tools, like Great Expectations or TensorFlow Data Validation, to help spot anomalies.
>
> **[0:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=46)** Anomaly detection methods, such as isolation forests or statistical outlier detection, help flag unusual patterns that might indicate tampering.
>
> **[0:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=58)** Then cryptographic hashing and dataset fingerprinting help protect AI training data from getting tampered.
>
> **[1:07](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=67)** SHA-256 generates a fixed-length hash for each dataset, acting like a digital fingerprint, and any small change in the data results in a completely different hash now, making unauthorized modifications easy to detect.
>
> **[1:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=87)** Dataset fingerprinting goes even further by embedding identifiable markers or metadata within datasets, which helps allow teams to track data sources, verify integrity, and ensure that data hasn't been altered or poisoned before training an AI model.
>
> **[1:48](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=108)** Supply chain security is also crucial here as data should only come from trusted providers, like AWS Data Exchange or Google Dataset Search, and blockchain-based integrity checks can also help track dataset origins.
>
> **[2:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=126)** Differential privacy techniques, such as those in Google's TensorFlow Privacy, introduce noise to the data to help prevent any single data point from overly influencing the AI model.
>
> **[2:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=140)** The next phase is of model development, training, and fine-tuning, where attackers may try to introduce poisoned gradients or back doors to manipulate the model.
>
> **[2:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=153)** One way to prevent this is by using adversarial training with tools like Clever Hans or Foolbox, which expose models to adversarial examples to make them stronger.
>
> **[2:47](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=167)** Gradient masking techniques, such as adding noise layers or randomized smoothing, also help reduce the impact of small adversarial tweaks.
>
> **[2:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=179)** Federated learning frameworks, like PySyft, allows AI models to train across multiple sources without exposing raw data, reducing privacy security risks.
>
> **[3:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=191)** Model explainability tools, like SHAP and LIME, help developers understand why a model makes certain decisions, making it easier to spot unexpected or suspicious behavior.
>
> **[3:26](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=206)** Then HiddenLayer's AI security platform can also be used at this stage to detect and respond to adversarial threats in real time, helping to protect against model tampering and adversarial perturbations.
>
> **[3:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=223)** Once a model has been trained, now we move into deployment phase, where it is exposed to real-world use.
>
> **[3:51](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=231)** Attackers at this stage may try techniques like model evasions, where small modifications to inputs trick the AI into making incorrect predictions.
>
> **[4:02](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=242)** Defenses at this stage include using robust classifiers, such as adversarially trained conation neural networks, or commonly referred to as CNNs, which are better at recognizing manipulated inputs and vision transformers, which help improve resilience in image-based AI systems.
>
> **[4:26](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=266)** Input pre-processing techniques, like randomized smoothing using Smooth Mix, or principle component analysis helps filter out adversarial noise before the model processes inputs.
>
> **[4:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=281)** Then API security is also crucial here.
>
> **[4:45](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=285)** JSON Web Token-based access control and web application firewalls, like AWS WAF or CloudFlare, may help prevent unauthorized API access.
>
> **[4:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=299)** Holographic encryption, which is a cryptographic technique that allows computations to be performed on encrypted data without decrypting it by using tools like Microsoft SEAL, allow computations on encrypted data without exposing the raw inputs, while secure enclaves, like Intel SGX, keeps sensitive computations protected from external access.
>
> **[5:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=329)** Developers should also remove confidence scores from API responses to help prevent attackers from reverse engineering how the models make decisions.
>
> **[5:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=340)** HiddenLayer's AI Detection & Response solution can further protect deployed AI models by monitoring the API interactions for adversarial attempts, unauthorized data extraction, and prompt injection attacks.
>
> **[5:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=356)** Now we move into the last phase of AI lifecycle, which is where AI runtime operations and continuous updates happen.
>
> **[6:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=366)** AI models need regular monitoring and updates to stay secure.
>
> **[6:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=371)** To help prevent model inversion attacks at this stage where attackers try to extract training data, organizations can use differential privacy techniques, like Appalachian noise addition or Open DP, which is Open Differential Privacy, to help obscure sensitive data.
>
> **[6:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=392)** Then model watermarking tools, like Deep Signs, embed hidden identifiers in the AI models, which help allow companies to track stolen or unauthorized versions of their model.
>
> **[6:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=406)** Real-time drift detection with tools like Evidently AI monitors incoming data and alert systems if it starts to shift significantly, as well as behavior anomaly detection via Elastic Security or Splunk AI can also help flag suspicious API activity that could indicate an attack.
>
> **[7:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=430)** Finally, you can also implement rate limiting using tools like CloudFlare, AWS API Gateway, and other gateways in the market to help prevent excessive automated queries from overwhelming AI systems.
>
> **[7:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=447)** HiddenLayer's AI security platform can also provide end-to-end visibility into AI runtime operations by helping identify vulnerabilities and ensuring models to remain secure over time.
>
> **[7:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=463)** By applying these security techniques at every stage, AI product developers can build models that are much harder to attack.
>
> **[7:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=472)** I do want to mention that all these different products that I mentioned, there are plenty of products which provide these kind of protections, so please use your own judgment and do your own evaluation before you select any tool for implementing in your enterprise.
>
> **[8:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/defensive-techniques-against-adversarial-attacks?u=76281980&t=491)** Thank you for watching this video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (23), data (20), [[Security]] (6), api (6), [[Privacy]] (5)
> **Env Vars:** api (6), aws (3), sha (1), shap (1), lime (1)
> **CLI Commands:** aws (3), make (2)
> **Analogies:** such as (4)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Monitoring model behavior for anomalies
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=0)** - [Presenter] Building defenses against adversarial attacks is essential, but security doesn't stop there.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=7)** AI is dynamic in nature.
>
> **[0:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=9)** It learns from the real-world data and evolves over time.
>
> **[0:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=13)** Without continuous monitoring, AI models can drift, and biases can emerge, and attackers can find new ways to manipulate them.
>
> **[0:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=24)** Just like a system security in a building, AI security must be proactive, always watching for unusual activity and adapting to new threats.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=35)** One major challenge is model drift.
>
> **[0:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=38)** When real-world conditions change, AI predictions may become outdated.
>
> **[0:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=43)** For example, a fraud detection AI trained on last year's data may fail to recognize new fraud tactics.
>
> **[0:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=52)** This is called as concept drift, and if left unchecked, it can reduce AI accuracy.
>
> **[1:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=61)** Teams use tools like population stability index or KL divergence to detect shifts in data and retrain models as needed.
>
> **[1:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=73)** Bias is another issue that can develop over time in these AI models.
>
> **[1:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=80)** When these models are trained on historical data, it may unintentionally favor certain groups, leading to discrimination in hiring, lending, or healthcare decisions.
>
> **[1:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=92)** Regular fairness audits with tools like AI Fairness 360 can help detect and correct biased patterns.
>
> **[1:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=101)** Metrics such as demographic parity and equalized odds ensure that AI models make decisions fairly and remain compliant with ethical and legal standards.
>
> **[1:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=116)** Adversarial attacks do not stop after deployment.
>
> **[2:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=120)** Attackers will continuously experiment with ways to manipulate these AI models.
>
> **[2:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=126)** Adversarial inputs such as subtly modifying images or texts can still trick AI into making incorrect predictions.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=137)** For example, a small tweak to an image might cause an AI-powered security system to misidentify a person.
>
> **[2:25](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=145)** To counter this, security teams must implement adversarial training for their model, which exposes these models to manipulated examples so that these models learn to resist them.
>
> **[2:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=161)** Another technique like gradient masking makes it harder for attackers to exploit weaknesses in AI models, where real-time anomaly detection flags send alerts to teams regarding suspicious inputs.
>
> **[2:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=178)** Real-time AI observability is crucial for catching attacks as they happen during the operationalized phase of these AI models.
>
> **[3:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=189)** Monitoring dashboards track AI model behavior, where automated alerts notify security teams when certain shifts occur.
>
> **[3:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=199)** Teams must ensure that audit logs are turned on and that they are recording every AI decision, making it easier to investigate anomalies and ensure compliance.
>
> **[3:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=212)** In critical areas like finance and healthcare, human-in-the-loop oversight helps ensure that AI-driven decisions are reviewed by experts before action is being taken.
>
> **[3:45](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=225)** A proactive approach to AI security includes AI red teaming, which we touched briefly in the previous video.
>
> **[3:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=233)** This is a method where security teams simulate attacks before real hackers can.
>
> **[3:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=239)** Some common tools used in the industry for this are CleverHans and HiddenLayer security platform, which were mentioned earlier too.
>
> **[4:08](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=248)** By stress testing models in different conditions, organizations can help identify weak points and strengthen their defenses before attackers find them.
>
> **[4:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=260)** AI security isn't just about stopping attacks.
>
> **[4:23](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=263)** It's about ensuring long-term reliability.
>
> **[4:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=267)** Without monitoring, AI models degrade and biases grow over time.
>
> **[4:34](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=274)** And on top of all this, adversaries continue to evolve their tactics.
>
> **[4:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=279)** By integrating continuous monitoring, fairness audits, anomaly detection, and AI red teaming, businesses can ensure that AI remains trustworthy, transparent, and resilient.
>
> **[4:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/monitoring-model-behavior-for-anomalies?u=76281980&t=293)** Thank you for watching and see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (24), [[Security]] (10), teams (6), data (4), [[Continuous Monitoring]] (2)
> **Analogies:** for example (2), such as (2), just like (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [presenter] (1)

#### A path to holistic security securing the AI supply chain
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=0)** - [Instructor] AI systems are built on interconnected components, including data, models, applications, infrastructure, and third party dependencies, like pre-trained models and APIs.
>
> **[0:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=13)** Securing AI isn't just about protecting one layer.
>
> **[0:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=18)** It requires an end-to-end approach that ensures that vulnerabilities in one area do not compromise the entire AI system.
>
> **[0:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=27)** AI supply chain attacks are already happening.
>
> **[0:31](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=31)** In 2023, researchers found attackers injecting back doors into open source AI models available on model sharing repositories and community-driven platforms, enabling remote manipulation of outputs.
>
> **[0:45](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=45)** Fraud detection systems have also been compromised through adversarial training dataset manipulation.
>
> **[0:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=52)** These cases highlight a critical truth.
>
> **[0:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=56)** AI security must be embedded across the supply chain, from data collection to deployment.
>
> **[1:02](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=62)** The first layer of AI security starts with the data.
>
> **[1:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=66)** AI models rely on data, as we already know now based on what has been covered in the course already.
>
> **[1:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=73)** But if that data is biased, manipulated, or stolen, AI decisions can become unreliable or dangerous.
>
> **[1:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=81)** Poor security can lead to data poisoning, unauthorized modifications, and compliance violations.
>
> **[1:28](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=88)** Organizations must enforce security controls like encryption, access controls, data validation and provenance, tracking to ensure that these AI models are trained on clean and secure data.
>
> **[1:44](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=104)** The second layer is the AI models, which power the decision making.
>
> **[1:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=110)** If these models are compromised, attackers can bypass security, alter fraud detection, or inject bias into automation.
>
> **[2:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=120)** Protecting these models require strong access controls, adversarial training, behavior monitoring, and explainability tools like SHAP and LIME, to detect manipulation and ensure fairness.
>
> **[2:15](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=135)** Now, the next layer is AI applications, which act as a bridge between the AI models and the end users, and they are a prime target for cyber attacks.
>
> **[2:28](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=148)** Weaker security controls around API security, such as improper authentication and lack of input validation, can expose AI to adversarial attacks, unauthorized access, and data breaches.
>
> **[2:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=163)** Organizations must implement API Security measures, user authentication, logging and monitoring to help detect anomalies and prevent misuse of these APIs being used.
>
> **[2:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=176)** The next one is AI infrastructure, which includes cloud platforms, networks, and computing environments.
>
> **[3:03](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=183)** Traditional security principles remain critical in protecting AI infrastructure, which includes cloud platforms, networks, and computing environments.
>
> **[3:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=193)** Just as an on-prem and cloud environment requires stronger perimeter defenses, AI environments demand robust security to prevent stolen models, disrupted operations, and exposure of sensitive data.
>
> **[3:28](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=208)** Infrastructure vulnerabilities, particularly the misconfigurations, introduce risks like privilege escalation and unauthorized modifications, which are challenges long recognized in traditional cybersecurity.
>
> **[3:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=222)** A Chinese AI company, DeepSeek, its recent exposure highlights these risks, where a cloud security company, Whiz, its researchers were able to extract sensitive data due to misconfigurations in cloud storage.
>
> **[3:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=239)** This incident underscores how improper security controls can lead to AI model theft, as well as data getting exposed, which allows attackers to replicate proprietary technology.
>
> **[4:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=254)** By applying established security practices, such as zero trust architecture, network segmentation, continuous threat detection and secure deployment pipelines, we can enhance AI resilience while building on proven security foundations.
>
> **[4:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=273)** Beyond these internal components, organizations must secure the third party dependencies too.
>
> **[4:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=280)** AI systems often rely on external databases, pre-trained models and cloud services, but compromise sources introduce major security risks.
>
> **[4:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=290)** Open source models on platforms, like Hugging Face or GitHub, could contain hidden back doors, while insecure supply chain dependencies can be exploited.
>
> **[5:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=301)** Organizations must enforce strict vendor assessments, security contracts, and continuous audits to minimize these risks.
>
> **[5:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=310)** AI security isn't just about prevention.
>
> **[5:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=314)** It also requires a strong incident response and a recovery plan.
>
> **[5:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=319)** Even with robust defenses, AI supply chain breaches can happen.
>
> **[5:25](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=325)** Organizations need forensic analysis capabilities, whether in-house or outsourced.
>
> **[5:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=332)** They should also have rapid rollback mechanisms for compromised models and automated alerts for AI anomalies.
>
> **[5:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=340)** AI security response must be integrated with the broader cybersecurity frameworks for fast containment and mitigation.
>
> **[5:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=350)** Governance and compliance are critical in securing the AI supply chain.
>
> **[5:55](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=355)** So AI teams should align security efforts with frameworks like NIST, AI Risk Management Framework, ISO 40 2001, GDPR, and the European AI Act.
>
> **[6:07](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=367)** But compliance isn't just about meeting legal requirements.
>
> **[6:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=370)** It must translate into action.
>
> **[6:12](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=372)** For instance, GDPR mandates data protection, so teams should implement differential privacy and automated data masking.
>
> **[6:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=381)** The Europe AI Act requires transparency, making explainability tools essential for ensuring AI decision making is fair and accountable.
>
> **[6:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=392)** A holistic AI security approach ensures that these AI systems remain resilient, ethical, and secure.
>
> **[6:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=399)** By embedding security into data collection, model development, infrastructure, and all these external dependencies, organizations can mitigate risk before they even escalate.
>
> **[6:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=412)** We must not forget that AI security is a shared responsibility.
>
> **[6:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=418)** Continuous monitoring, adaptive security controls, and collaboration across teams are essential to protecting AI systems.
>
> **[7:07](https://www.linkedin.com/learning/ai-product-development-secure-by-design/a-path-to-hollistic-security-securing-the-ai-supply-chain?u=76281980&t=427)** Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (35), [[Security]] (23), data (15), cloud (6), teams (3)
> **Env Vars:** api (2), gdpr (2), shap (1), lime (1), nist (1)
> **Analogies:** such as (2), for instance (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Secure AI Deployment and Access Controls

[↑ Back to Table of Contents](#table-of-contents)

#### Access control for AI models
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=0)** - [Lecturer] Securing the AI product development by design starts with the fundamentals.
>
> **[0:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=5)** Building security basics like confidentiality, integrity, and availability into the models starts from ground up.
>
> **[0:12](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=12)** Without these core principles, AI systems remain vulnerable to threats that can compromise their trustworthiness and effectiveness.
>
> **[0:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=21)** In the upcoming videos, we will focus on these fundamentals and the key security measures needed to protect AI models from adversarial threats.
>
> **[0:31](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=31)** Now, imagine an advanced research lab is working on groundbreaking medical discoveries.
>
> **[0:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=38)** Inside this lab, scientists develop new treatments that could save lives.
>
> **[0:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=43)** But if security is not implemented correctly, unauthorized people could just walk in and steal the research or tamper with the experiments causing devastating consequences.
>
> **[0:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=59)** AI models are just like these research discoveries, valuable, sensitive, and at risk, if not properly secured.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=68)** In a secure research lab, not everyone can enter.
>
> **[1:12](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=72)** You need a secure badge for authentication and specific permissions for role-based access.
>
> **[1:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=79)** Similarly, AI models must be protected using strong access controls, ensuring that only authorized users can modify, train, or deploy them.
>
> **[1:31](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=91)** Now, imagine if a janitor instead of a trained scientist had access to critical lab experiments.
>
> **[1:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=99)** This one mistake, whether intentional or not, could ruin years of research.
>
> **[1:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=106)** The same applies to AI models.
>
> **[1:49](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=109)** Unauthorized access can lead to corruption, manipulation, or even theft of these models.
>
> **[1:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=116)** Now, let's say that confidential research papers in this lab are logged in safes with restricted access.
>
> **[2:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=124)** If someone steals them, it could lead to disastrous misuse.
>
> **[2:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=130)** AI models process highly sensitive data such as patient healthcare records or financial transactions.
>
> **[2:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=138)** And encryption acts as the safe, ensuring that even if data is stolen, it remains unreadable.
>
> **[2:28](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=148)** The DeepSeek exposure, which we discussed in the previous video, was like leaving a lab door open, exposing sensitive research data to outsiders.
>
> **[2:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=158)** By implementing encryption and network security, we ensure that unauthorized people cannot walk in and just take whatever they want.
>
> **[2:49](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=169)** Now, in another example, to prevent intellectual property theft, the research labs use watermarks, unique identifiers, and surveillance cameras.
>
> **[2:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=179)** AI models need similar protections.
>
> **[3:03](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=183)** Watermarking AI models helps track stolen models, just like hidden identifiers on research documents, and audit logging acts like a security camera, which helps to detect who accessed what and when.
>
> **[3:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=199)** In a real life example, there was a data breach of a model known as Stability AI In this data breach adversaries stole the weights of this model.
>
> **[3:30](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=210)** It was just like an intern secretly copying groundbreaking research and leaking it to the competitors.
>
> **[3:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=219)** Without tracking mechanisms, it is hard to prove ownership or take legal action.
>
> **[3:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=226)** A secure lab doesn't just rely on one lock.
>
> **[3:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=230)** It has security guards, cameras, and ID checks at multiple points.
>
> **[3:55](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=235)** AI security needs multi-layer defenses too, such as multifactor authentication, which acts like requiring both an ID and a fingerprints scan to enter the lab.
>
> **[4:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=249)** Then network restrictions ensure that access is only granted from approved locations and at approved times.
>
> **[4:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=258)** And API security and rate limiting works like allowing only a limited number of lab visits per day to prevent overwhelming security.
>
> **[4:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=269)** Even if someone has a lab key, they shouldn't automatically get access to every experiment.
>
> **[4:36](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=276)** They must prove they have the right clearance level for each section.
>
> **[4:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=281)** Zero trust in AI follows the same principle.
>
> **[4:44](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=284)** No one is automatically trusted and every access request is verified before granting permissions.
>
> **[4:51](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=291)** Just like a secure research lab protects life-changing medical discoveries, AI security ensures that models remain accurate, trustworthy, and free from manipulation.
>
> **[5:02](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=302)** By implementing strong access controls like encryption, network security, and continuous monitoring, organizations can prevent unauthorized access and safeguard AI's confidentiality and integrity.
>
> **[5:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=318)** Protecting AI models is not just about security.
>
> **[5:22](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=322)** It's about ensuring AI-driven decisions remain reliable, ethical, and resistant to threats in an increasingly AI-driven world.
>
> **[5:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/access-control-for-ai-models?u=76281980&t=332)** Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (17), [[Security]] (10), data (5), [[Network Security]] (2), [[Product Development]] (1)
> **Analogies:** just like (4), imagine (2), such as (2)
> **Cross-References:** we discussed (1), previous video (1)
> **Env Vars:** api (1)
> **Definitions:** known as (1)
> **Speakers:** - [lecturer] (1)

#### Security testing of AI models
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=0)** - [Instructor] Securing access to AI models is just the first step.
>
> **[0:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=5)** Even with strong authentication and role-based controls in place, the question remains, how do we ensure AI remains reliable, resilient, and resistant to manipulation?
>
> **[0:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=18)** Just as a secure research lab doesn't stop at controlling entry only, scientists must continuously test their experiments to ensure accuracy, consistency, and safety before making new medical treatments available.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=35)** AI security follows the same principle.
>
> **[0:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=38)** It's not enough to just log down access.
>
> **[0:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=42)** We must actively test our AI models to uncover hidden vulnerabilities and ensure that they can withstand evolving threats.
>
> **[0:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=52)** Unlike traditional software, AI models are not static.
>
> **[0:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=56)** They learn and adapt, making them dynamic attack targets.
>
> **[1:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=61)** Standard cybersecurity tests cannot fully address AI risks.
>
> **[1:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=65)** Because AI doesn't follow fixed logic, its decisions shift over time based on the input data.
>
> **[1:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=74)** This is why structured repeatable security testing is critical at every stage of AI product development.
>
> **[1:22](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=82)** Before AI models go live, they must be validated for robustness, integrity, and security.
>
> **[1:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=89)** Pre-deployment validation is like the rigorous clinical trials a new drug must undergo.
>
> **[1:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=97)** It ensures that the AI model does not expose sensitive data or have exploitable weaknesses.
>
> **[1:44](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=104)** Adversarial robustness testing simulates attacks to evaluate resilience while sandbox validation allows AI to be tested in controlled environments before real world deployment.
>
> **[1:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=119)** Once an AI model is live, stress testing helps determine how it behaves under oppression.
>
> **[2:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=126)** Now imagine a research lab testing the limits of a new vaccine by exposing it to different virus strains to assess its durability.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=137)** In AI security, first testing serves a similar purpose by sending malformed inputs to probe AI APIs for vulnerabilities.
>
> **[2:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=147)** Resilience testing subjects models to adversarial inputs to detect failure points while failure mode analysis deliberately corrupts AI logic to observe how it degrades under attack.
>
> **[2:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=162)** Unlike adversarial training which strengthens models before deployment, stress testing actively probes weaknesses in deployed AI systems.
>
> **[2:54](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=174)** It helps in ensuring that they can withstand manipulation.
>
> **[2:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=179)** But security testing isn't just about identifying vulnerabilities.
>
> **[3:03](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=183)** It's about understanding why an AI model makes the decisions it does.
>
> **[3:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=189)** Attackers often exploit these blind spots in AI logic to manipulate outcomes just as an untested drug could produce unintended side effects.
>
> **[3:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=201)** A real world example of this is the ongoing evolution of AI jailbreaks and prompt injection attacks, which we have been observing for the past couple of years, where attackers have refined their techniques to bypass AI safety mechanisms, tricking models into leaking data, generating harmful content, or executing unauthorized commands.
>
> **[3:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=226)** Some adversaries embed hidden instructions within inputs, which help them manipulate AI models into behaving unpredictably.
>
> **[3:57](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=237)** Just as medical researchers use advanced analysis to study how a drug interacts with the human body, explainability testing in AI reveals how models weigh input and make decisions.
>
> **[4:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=254)** Tools like SHAP and LIME, which were covered earlier, they provide visibility into AI behavior, ensuring that attackers cannot manipulate decision logic undetected.
>
> **[4:26](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=266)** Beyond explainability testing, AI security teams must also engage in red teaming exercises, which actively simulates adversaries attempting to break AI defenses.
>
> **[4:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=280)** In these exercises, ethical hackers tests an organization's cybersecurity by replicating real world attack techniques, red teaming in AI uncovers security gaps that traditional testing might miss.
>
> **[4:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=296)** Security teams must assess risks such as evasion attacks, where adversarial inputs mislead AI into producing incorrect results, data poisoning, where manipulated training data corrupts AI decision making and model inversion risks where attackers attempt to extract sensitive data from AI outputs, AI penetration testing goes even further.
>
> **[5:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=324)** It helps assess the security of the entire AI ecosystem.
>
> **[5:28](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=328)** Just as a pharmaceutical lab must secure research data, AI security teams must protect data pipelines, APIs, and model storage.
>
> **[5:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=340)** API security testing ensures that these AI interfaces are not vulnerable to unauthorized curies.
>
> **[5:49](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=349)** And then data pipeline security reviews help prevent training data manipulation, and deployment security assessments.
>
> **[5:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=358)** They help in validating that AI models are properly encrypted and protected from tampering.
>
> **[6:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=365)** Unlike traditional security reviews, penetration testing uncovers hidden vulnerabilities across the AI infrastructure.
>
> **[6:15](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=375)** But AI models evolve over time, meaning that security cannot be a one-time effort.
>
> **[6:22](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=382)** New vulnerabilities can emerge even after deployment just as a drug's long-term effects must be monitored beyond clinical trials.
>
> **[6:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=393)** Continuous security testing is crucial to detecting emerging threats with automated adversarial testing, identifying new attack techniques, and then model performance drift monitoring, ensuring accuracy and real time anomaly detection, helping flag unauthorized queries and adversarial modifications.
>
> **[6:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=418)** Since AI systems are dynamic in nature, security testing must be an ongoing process, not a single audit.
>
> **[7:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=426)** Integrating security testing across the AI lifecycle is non-negotiable during data preparation and model training, validating the data integrity prevents poisoning attacks.
>
> **[7:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=440)** Before deployment of these models, adversarial stress tests must evaluate AI resilience against evasion attacks, bias exploitation, and data extraction attacks.
>
> **[7:34](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=454)** While continuous monitoring and automated security assessments must safeguard models in production from emerging threats, AI security testing is not just about identifying threats.
>
> **[7:48](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=468)** It's about ensuring AI models remain resilient, ethical, and secure.
>
> **[7:55](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=475)** Organizations must move beyond reactive security and integrate continuous security testing into their AI development and deployment strategies.
>
> **[8:07](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=487)** Now, the question isn't whether AI can be attacked.
>
> **[8:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=491)** It's whether we have the right security measures in place to help detect and defend against these evolving threats.
>
> **[8:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=499)** Just as the scientific community safeguards medical advancements through rigorous testing, security teams must ensure that their AI models are continuously assessed and protected, keeping them resilient against ever-evolving risks.
>
> **[8:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/security-testing-of-ai-models?u=76281980&t=517)** Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (44), [[Security]] (24), data (12), teams (4), [[Cybersecurity]] (2)
> **Env Vars:** shap (1), lime (1), api (1)
> **Analogies:** imagine (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Business continuity management
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=0)** - [Instructor] Now let's imagine that a hospital is using AI-powered patient monitoring systems that help predict deteriorating conditions of the patients and alert doctors.
>
> **[0:12](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=12)** This AI system certainly fails due to a cloud outage or corrupted input data.
>
> **[0:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=19)** Now, if this AI system suddenly fails due to a cloud outage or corrupted input data, doctors might miss critical alerts, putting patients' lives at risk.
>
> **[0:34](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=34)** AI failures are not just hypothetical risks.
>
> **[0:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=37)** They happen in real world deployments.
>
> **[0:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=41)** Organizations must have a business continuity management strategy to help ensure that these AI systems remain resilient, recoverable, and operational in the face of disruptions.
>
> **[0:54](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=54)** AI is increasingly embedded in critical decision-making processes and failures of these systems can have severe financial, regulatory, and operational impacts.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=68)** While security measures can help prevent attacks and infrastructure issues, true resilience requires a well-defined plan to handle failures, restore operations, and maintain AI reliability.
>
> **[1:22](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=82)** AI models can fail due to data drift, bias or adversarial interference.
>
> **[1:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=89)** A fraud detection AI trained on outdated data may miss new fraud patterns, leading to financial losses and compliance violations.
>
> **[1:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=99)** To help prevent this, organizations should use continuous monitoring, automated retraining of the models and failover mechanisms to detect anomalies.
>
> **[1:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=113)** AI lifecycle management tools like MLflow and Delta Lake, they help provide version control and auditability capability, allowing the teams to revert faulty models.
>
> **[2:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=125)** Cyber attacks targeting AI such as data poisoning, adversarial inputs, and moral theft, which were covered earlier, further threaten continuity.
>
> **[2:15](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=135)** In supply chain logistics, attackers could manipulate AI-generated delivery schedules, leading to shipment delays or stock shortages.
>
> **[2:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=144)** A robust business continuity plan integrates AI security monitoring, automated attack detection, and rapid incident response to help mitigate threats before disruptions even occur.
>
> **[2:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=159)** Organizations must adopt real-time AI threat detection, security logging, automated remediation scripts, and continuous monitoring to help ensure the system's integrity.
>
> **[2:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=173)** Cloud outages can disrupt AI models, so organizations must reduce reliance on a single cloud provider.
>
> **[3:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=181)** Multi-cloud setups, on-prem options and disaster recovery testing help avoid cloud concentration risks.
>
> **[3:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=191)** Distributed storage, which spreads data across multiple locations helps ensure that AI systems stay operational even if one system fails.
>
> **[3:22](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=202)** To help build AI resilience, teams need clear incident response plans, automated failover systems, regular testing and strong governance.
>
> **[3:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=213)** AI should switch to backups or human control when needed.
>
> **[3:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=218)** And deployment pipelines must support quick rollbacks to a stable version.
>
> **[3:44](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=224)** Security teams must run tabletop exercises as well as they must test AI recovery by simulating failures, cyber attacks and outages.
>
> **[3:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=236)** Stress testing AI with adversarial inputs, data shifts and failure scenarios helps improve business continuity.
>
> **[4:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=245)** Real world testing, it helps ensure that AI disruptions don't severely impact operations.
>
> **[4:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=254)** Human oversight, when we talk about AI, human in the loop or human oversight is key, especially in healthcare and finance, where AI failures can lead to misdiagnosis or fraud going completely undetected.
>
> **[4:31](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=271)** AI decisions must be reviewable and overridable by experts.
>
> **[4:38](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=278)** Explainability tools such as SHAP and Lime, they help teams analyze AI decisions and ensure transparency and allow quick issue diagnosis and correction.
>
> **[4:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=292)** AI business continuity needs teamwork between data science, security, and IT.
>
> **[4:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=298)** Frameworks like Databricks AI Security Framework, they stress that cross-functional collaboration and coordination needs to take place.
>
> **[5:08](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=308)** Organizations should create AI security playbooks with plans for incident response, disaster recovery and risk management.
>
> **[5:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=318)** AI reliability is critical in healthcare, banking and infrastructure.
>
> **[5:23](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=323)** Without failover plans, compliance and testing, we risk the availability of our AI systems, and these AI failures can disrupt operations.
>
> **[5:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=335)** As AI adoption grows, business continuity must be a core part of AI governance.
>
> **[5:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=342)** Thank you for watching.
>
> **[5:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=343)** And in the next video, we will discuss automated AI monitoring, exploring how real-time detection systems identify threats, anomalies, and failures before they impact operations.
>
> **[5:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/business-continuity-management?u=76281980&t=356)** So stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (34), data (8), [[Security]] (7), cloud (6), business (5)
> **Analogies:** such as (2), imagine (1)
> **Env Vars:** shap (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### Automated monitoring and alerting
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=0)** - [Instructor] AI security is like a self-driving car.
>
> **[0:03](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=3)** It needs constant monitoring to stay on track.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=7)** Without real-time monitoring, AI models can drift, degrade, or be manipulated.
>
> **[0:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=13)** To keep AI reliable, organizations must detect anomalies early on to prevent failures and respond quickly.
>
> **[0:22](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=22)** Model drift happens when AI decisions become inaccurate due to changing data.
>
> **[0:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=29)** Like a self-driving car struggling in heavy snow, a financial AI model might miss economic shifts, increasing loan defaults.
>
> **[0:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=39)** Automated monitoring detects these changes early on, triggering alerts for the teams, and retraining the models before errors impact operations.
>
> **[0:51](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=51)** Adversarial interference is another risk.
>
> **[0:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=56)** Just as a tricked self-driving car might misread a road sign, attackers manipulate AI inputs to bypass fraud detection or security controls.
>
> **[1:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=69)** Inference monitoring tracks inputs and outputs, flagging tampering before damage occurs.
>
> **[1:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=77)** Beyond adversarial threats, AI monitoring must detect unauthorized access, data poisoning and compliance violations.
>
> **[1:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=87)** As we have already seen, AI powered chatbots handing sensitive data are targets for API attacks.
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=95)** So real time alerts, flag suspicious activity, preventing breaches, and ensuring compliance with regulations like GDPR, HIPAA and European AI Act.
>
> **[1:47](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=107)** Organizations need structured AI monitoring with security dashboards, threshold based alerts, and automated retraining, as well as human oversight.
>
> **[1:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=119)** When you create dashboards, they provide real time visibility and the alerts, they help prevent unnoticed attacks and explainability tools like SHAP and LIME help distinguish between natural drift and manipulation.
>
> **[2:16](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=136)** Automating model retraining keeps AI accurate.
>
> **[2:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=140)** If fraud detection AI starts to fail, retraining prevents financial risks.
>
> **[2:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=147)** Like self-driving cars need a manual override, AI systems need a human overview or a human in the loop for critical decisions.
>
> **[2:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=160)** AI security must extend to full stack protection, security data, cloud access, and APIs.
>
> **[2:47](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=167)** Strong identity management, API authentication and audit logs ensure compliance and security.
>
> **[2:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=176)** While the previous section covered continuous monitoring from adversarial defense perspective, this discussion highlights continuous monitoring as a proactive approach.
>
> **[3:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=189)** Instead of reacting to attacks, organizations must ensure that AI stays resilient, transparent, and accurate over time.
>
> **[3:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/automated-monitoring-and-alerting?u=76281980&t=198)** Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (15), [[Security]] (6), data (4), api (2), [[Dashboards]] (2)
> **Env Vars:** api (2), gdpr (1), hipaa (1), shap (1), lime (1)
> **Speakers:** - [instructor] (1)


### 5. Securing AI in the Software Development Lifecycle

[↑ Back to Table of Contents](#table-of-contents)

#### Building Secure CI/CD Pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=0)** - [Instructor] When AI models are developed and deployed without security in mind, they can be tampered with, trained on bad data, or released with hidden vulnerabilities.
>
> **[0:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=10)** This puts organizations at risk of cyber attacks, compliance issues, and financial losses.
>
> **[0:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=17)** Keeping AI secure isn't just about building strong models.
>
> **[0:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=21)** It requires security at every step from training to deployment, as we have already talked about previously.
>
> **[0:28](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=28)** A secure CI/CD, or continuous integration and continuous deployment pipelines ensures that AI models are tested, verified, and protected throughout their entire lifecycle.
>
> **[0:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=42)** Imagine a car manufacturer that continuously updates its self-driving AI to better recognize stop signs, pedestrians, and traffic conditions.
>
> **[0:54](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=54)** Now, what if, if a hacker sneaks in a malicious update that makes the AI misinterpret stop signs?
>
> **[1:02](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=62)** This could lead to serious accidents, lawsuits, and loss of consumer trust.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=68)** A secure CI/CD pipeline helps prevent such risks by thoroughly testing every AI update before it's deployed into production, ensuring safety and reliability.
>
> **[1:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=81)** One of the biggest threats in AI deployment is model integrity violations, where attackers manipulate the AI during development or deployment.
>
> **[1:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=92)** They could insert harmful code into the training pipeline, altering the model's behavior in ways that are hard to detect.
>
> **[1:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=101)** Without proper security, adversarial manipulation and data poisoning can completely go unnoticed.
>
> **[1:48](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=108)** A secure CI/CD pipeline adds those checkpoints, cryptographic signing, and access controls to ensure that every AI model is genuine and safe before it goes live.
>
> **[2:02](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=122)** Another major issue is data integrity.
>
> **[2:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=126)** So we must ensure that AI models learn from clean and trustworthy data.
>
> **[2:12](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=132)** If fraudsters inject fake transactions labeled as legitimate into a fraud detection AI during training, the moral might stop recognizing real fraud.
>
> **[2:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=144)** A secure CI/CD pipeline includes automated data validation and anomaly detection to catch these issues before they corrupt the AI.
>
> **[2:36](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=156)** Now, let's cover some of the best practices for securing AI CI/CD pipelines.
>
> **[2:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=163)** Here is how organizations can lock down their AI development processes.
>
> **[2:49](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=169)** First, by implementing automated security testing.
>
> **[2:54](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=174)** Before deploying AI, teams must run security tests to catch evasion attacks, bias issues, and data poisoning attempts.
>
> **[3:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=184)** Automated testing within CI/CD pipeline may help detect risks early on, preventing problems before they hit production.
>
> **[3:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=193)** Then second is version control and rollback mechanisms.
>
> **[3:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=198)** If an AI update introduces problems, teams need to quickly roll back to a previous secure version.
>
> **[3:25](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=205)** Tools like MLflow and Delta Lake track AI model versions, ensuring a clear audit trail.
>
> **[3:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=213)** Then third one is strict access control.
>
> **[3:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=217)** Not everyone should be able to modify training data or deploy models.
>
> **[3:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=222)** Role-based access controls and zero trust policies help ensure that every request is verified before access is granted.
>
> **[3:51](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=231)** Then number four is AI model integrity checks.
>
> **[3:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=236)** Using cryptographic hashing and digital certificates, we can verify that AI models haven't been altered.
>
> **[4:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=245)** Also, scan third party code dependencies to help prevent security risks from these external sources or supply chain attacks.
>
> **[4:16](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=256)** Then number five is securing AI APIs and containers.
>
> **[4:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=260)** When AI models are deployed as APIs or containers, strong authentication mechanisms like OAuth API keys must be implemented and the data should be encrypted where it is being transferred between these different components.
>
> **[4:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=281)** Using secure infrastructure tools like Kubernetes and Dockers also help prevent external threats.
>
> **[4:49](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=289)** So let's now quickly talk about why CI/CD security is critical for AI.
>
> **[4:55](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=295)** A secure CICD pipeline helps ensure that AI models can improve over time without introducing security risks.
>
> **[5:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=304)** Without these safeguards, organizations face financial losses, regulatory fines, and reputational damage, but security doesn't stop at deployment only.
>
> **[5:15](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=315)** AI models need continuous monitoring to detect anomalies, security breaches, and operational issues.
>
> **[5:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/building-secure-ci-cd-pipelines?u=76281980&t=321)** In our next discussion, we will dive into continuous monitoring and threat detection in AI pipelines, so stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (25), [[Security]] (10), data (8), ci (7), cd (7)
> **CLI Commands:** cd (7)
> **Env Vars:** api (1), cicd (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### AI Software Supply Chain Security
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=0)** - [Instructor] AI models are not built in isolation.
>
> **[0:03](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=3)** They rely on datasets, pre-trained models, third-party libraries, and cloud infrastructure, all of which introduce supply chain risks.
>
> **[0:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=13)** A single compromise dependency can lead to data poisoning, model tempering, or backdoor exploits, threatening AI security compliance and operational integrity.
>
> **[0:26](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=26)** Organizations must proactively secure their AI supply chains by verifying dependencies and implementing cryptographic validation, as well as ensuring provenance tracking.
>
> **[0:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=40)** AI systems inherit risks from their entire supply chain, including compromised internal datasets or datasets provided by data brokers by external parties, as well as backdoored models and malicious dependencies.
>
> **[0:57](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=57)** Attackers target external components, injecting adversarial patterns into the open source AI models to manipulate predictions.
>
> **[1:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=66)** So if you are using these open source AI models as your base layer, then you need to make sure that these external OpenAI sources are not already exploited.
>
> **[1:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=81)** AI systems inherit risks from the software and data they rely on.
>
> **[1:26](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=86)** Attackers can insert hidden threats such as backdoored AI models.
>
> **[1:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=93)** For example, in 2023, hackers uploaded a malicious AI model to a popular platform.
>
> **[1:40](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=100)** When others used it, it ran hidden code, exposing their systems to attacks.
>
> **[1:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=106)** Without verification, bad actors can embed backdoors into AI models, affecting industries like finance, healthcare, and business.
>
> **[1:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=116)** Then second is data poisoning.
>
> **[1:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=119)** Attackers may manipulate training data to change AI behavior.
>
> **[2:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=124)** For example, fraud detection AI has been already tricked in the industry into ignoring real fraud patterns by adding fake transactions labeled as legitimate.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=137)** Then third is compromise software dependencies.
>
> **[2:21](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=141)** AI models often use open source software as well as data, as we mentioned earlier, but specifically in regards to the open source software.
>
> **[2:30](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=150)** If one of these software components has a hidden vulnerability like the Log4Shell exploit, it can allow remote attacks on AI systems.
>
> **[2:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=162)** Now, let's talk about how to protect AI from supply chain attacks.
>
> **[2:48](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=168)** To reduce these attacks, organizations need strong security measures to be implemented.
>
> **[2:54](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=174)** First, verify your AI models by using cryptographic signing tools like Sigstore to check if an AI model is authentic and unaltered before deploying it in your enterprise.
>
> **[3:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=189)** AI registries, like MLflow model registry help track changes to models ensuring that only safe versions are used.
>
> **[3:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=199)** Then secondly, secure data sources by using automated validation to check training data for tampering.
>
> **[3:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=207)** Blockchain-based tracking helps protect data integrity in sensitive areas like healthcare and finance.
>
> **[3:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=215)** Differential privacy techniques help keep AI from leaking personal data as well.
>
> **[3:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=221)** Then thirdly, protecting the AI deployments by adding security checks in CI/CD pipelines to help ensure only verified models are being deployed into your production environment.
>
> **[3:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=236)** You must also enforce binary authorization, which means that AI models must pass security checks before they go live.
>
> **[4:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=245)** Use tools that scan software dependencies for vulnerabilities.
>
> **[4:12](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=252)** Real world incidents show how AI supply chains can be targeted.
>
> **[4:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=257)** For example, Hugging Face model injection attacks, which are quite common these days, where hackers upload a malicious AI model to a sharing platform causing security breaches when others use it.
>
> **[4:32](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=272)** As a solution, always verify AI models before you use them in your organization, especially the external ones.
>
> **[4:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=282)** Then second example would be backdoored facial recognition AI.
>
> **[4:47](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=287)** Some facial recognition systems have been tricked into misidentifying people using hidden adversarial patterns.
>
> **[4:55](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=295)** The solution for this is that you must test AI for adversarial threats.
>
> **[5:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=301)** So the question is, why AI supply chain security really matters?
>
> **[5:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=306)** AI security is only as strong as its weakest link, and the supply chain is often the biggest risk.
>
> **[5:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=314)** Organizations must ensure that the AI models, data sources, and software dependencies are secure.
>
> **[5:23](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=323)** By verifying AI components, tracking their origins, and applying strict security controls, companies can prevent attacks before they even happen.
>
> **[5:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=335)** Protecting the AI supply chain isn't just about stopping breaches, it's about building trust and ensuring that AI systems work reliably.
>
> **[5:47](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=347)** Next, we will explore continuous monitoring and threat detection in AI CI/CD pipelines showing you how businesses can detect security threats before they cause harm.
>
> **[6:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-software-supply-chain-security?u=76281980&t=360)** So stay tuned. Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (33), data (11), [[Security]] (8), ci (2), cd (2)
> **Analogies:** for example (3), such as (1)
> **CLI Commands:** cd (2), make (1)
> **Cross-References:** we mentioned (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Continuous monitoring and threat detection
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=0)** - [Instructor] Securing AI models in a CI/CD pipeline is like maintaining a high performance race car.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=7)** Just as a race car needs constant tuning, monitoring, and adjustments to handle unpredictable track conditions, AI models require continuous validation, security testing, and real-time monitoring to remain accurate and resilient.
>
> **[0:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=24)** Over time, just as tires wear down and impact a car's grip on the road, AI models experience drift as real-world data shifts.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=35)** If left undetected, this drift leads to inaccurate predictions, just like a worn out tire causing the car to skid off the track.
>
> **[0:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=46)** Drift detection tools such as Evidently AI act like tire sensors, identifying changes early on and triggering automated retraining or rolling back to a stable model, just like a pit stop replacing worn hires to keep performance at its peak.
>
> **[1:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=66)** Now imagine a competitor sneaking in into the track and adjusting your car's aerodynamics to slow it down.
>
> **[1:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=74)** Similarly, adversaries can manipulate AI inputs to bypass security controls.
>
> **[1:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=80)** To counter this, adversarial robustness testing tools like IBM's Adversarial Robustness Toolbox functions like pre-race inspections to help ensure vulnerabilities are identified and fixed before deployment so that attackers can't exploit them when it matters most.
>
> **[1:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=102)** A race car needs high-quality fuel to perform optimally.
>
> **[1:47](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=107)** If someone sneaks in contaminated fuel, the engine will misfire or break down at a critical moment.
>
> **[1:54](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=114)** In AI security, data poisoning works the same way.
>
> **[1:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=118)** Compromised training data can corrupt model behavior, leading to catastrophic failures.
>
> **[2:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=124)** To prevent this, data validation tools like Great Expectations and TensorFlow Data Validation help analyze training data before it is ingested.
>
> **[2:16](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=136)** It ensures only clean, reliable data fuels the model's learning process.
>
> **[2:22](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=142)** Then, feature store monitoring flags anomalies, which helps team to detect potential poisoning attempts before they impact performance.
>
> **[2:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=153)** In high-stakes racing, real-time telemetry systems track every aspect of the car's performance, alerting the engineers to potential failures before they lead to a disaster.
>
> **[2:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=166)** Similarly, AI security monitoring continuously feeds inference logs into platforms like security incident and even monitoring, such as Splunk or Azure Sentinel, which helps allow security teams to detect anomalies, unauthorized access, and adversarial manipulations in real time.
>
> **[3:09](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=189)** Automated security alerts act like a pit crew, taking immediate action, quarantining compromised models, revoking access, and escalating threats for investigation before they cause system-wide failures.
>
> **[3:25](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=205)** Even the most advanced race cars need expert engineers and a pit crew to analyze data and make strategic calls.
>
> **[3:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=215)** Likewise, in high-risk AI applications, such as finance or healthcare, human oversight is critical.
>
> **[3:44](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=224)** Explainability tools like SHAP and LIME help security teams interpret AI decision-making before models go live.
>
> **[3:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=233)** That ensures compliance, transparency, and trust, just like engineers for the race cars making real-time adjustments to keep the car running at peak efficiency.
>
> **[4:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=245)** By embedding security testing, anomaly detection, and automated response into the AI CI/CD pipeline, organizations shift AI security from reactive to proactive, just like a well-maintained race car that's always ready for the next challenge on the track.
>
> **[4:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=264)** Whether it's data validation, adversarial testing, automated drift detection, or real-time monitoring, this integrated approach ensures AI models remain reliable, secure, and resilient against evolving threats in production environments.
>
> **[4:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=281)** In the race to secure AI, continuous monitoring and threat detection are the ultimate competitive edge.
>
> **[4:48](https://www.linkedin.com/learning/ai-product-development-secure-by-design/continuous-monitoring-and-threat-detection?u=76281980&t=288)** Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (13), [[Security]] (10), data (9), [[Real-Time]] (4), ci (2)
> **Analogies:** just like (4), such as (3), imagine (1)
> **CLI Commands:** cd (2), make (1)
> **Env Vars:** ibm (1), shap (1), lime (1)
> **Speakers:** - [instructor] (1)

#### Logging and incident response
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=0)** - [Instructor] AI-driven decision making relies on continuous data ingestion, model updates, and real-time inferences.
>
> **[0:08](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=8)** Without robust security logging and structured incident response, organizations risk undetected adversarial attacks, model tampering, and data integrity failures.
>
> **[0:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=20)** AI security logging is essential for tracking AI behavior, identifying vulnerabilities, and ensuring compliance with regulations such as GDPR, HIPAA, and PCI DSS.
>
> **[0:33](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=33)** This session explores how organizations can implement effective AI security logging and respond to adversarial AI threats and recover from incidents with minimal disruption.
>
> **[0:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=46)** Unlike traditional cybersecurity threats, AI security incidents require specialized logging to help detect adversarial input manipulation, silent model tampering, and unauthorized API access.
>
> **[1:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=61)** AI inference logging captures model inputs, predictions, and confidence scores, allowing teams to analyze decision-making patterns.
>
> **[1:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=73)** Security auditing records unauthorized access attempts, adversarial input patterns, and unusual activity, ensuring that organizations can trace AI-related breaches.
>
> **[1:28](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=88)** Without these logs, organizations struggle to respond to evolving AI threats.
>
> **[1:34](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=94)** Now let's say a financial institution deployed an AI fraud detection model but failed to log flag transactions.
>
> **[1:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=102)** Now what if the attackers modified transaction metadata to bypass detection, and because no historical fraud patterns were recorded, security teams did not have any way to trace the manipulation?
>
> **[1:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=118)** This case highlights why inference logging is essential, and every AI prediction, API interaction, and decision variable must be recorded for forensic analysis later.
>
> **[2:13](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=133)** AI security incidents vary in severity and require different response strategies.
>
> **[2:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=140)** High-severity incidents, such as adversarial attacks or model tampering, demand immediate containment, rollback mechanisms, and forensic investigations.
>
> **[2:31](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=151)** Whereas medium-severity issues, such as bias drift or accuracy degradation, should trigger automated model retraining workflows.
>
> **[2:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=163)** Then, in low-severity issues, such as temporary misclassifications or false positives, should be logged for continuous improvement.
>
> **[2:54](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=174)** Automated security alerts help ensure that rapid response based on severity classification prevents AI failures from escalating.
>
> **[3:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=186)** AI-powered security monitoring systems require continuous validation to help detect data poisoning and model manipulation.
>
> **[3:15](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=195)** Now consider a hospital using AI for cancer diagnosis.
>
> **[3:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=199)** Let's say that over time, model drift has led to misclassifications, delaying treatments, and putting patients at risk.
>
> **[3:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=209)** Without real-time logging, these errors might go unnoticed until a human audit uncovers the issue, potentially after significant harm has already been done.
>
> **[3:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=222)** However, with proper AI logging in place, model drift can be detected early on, enabling timely retraining and corrections being made to this model before patient outcomes are affected.
>
> **[3:57](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=237)** If an AI model is compromised, organizations must have a rollback mechanism in place to restore the last secure version.
>
> **[4:06](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=246)** AI model versioning tools like MLflow and Delta Lake track every update, providing a clear history of changes.
>
> **[4:16](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=256)** Restricting deployment access ensures that only authorized personnel can modify these AI models.
>
> **[4:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=264)** A structured AI security response plan should include forensic analysis to help detect AI poisoning, rollback procedures to restore trusted versions, and data validation controls to help prevent future manipulations.
>
> **[4:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=281)** Now consider a scenario where an AI-powered security monitoring system falls victim to a similar attack.
>
> **[4:48](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=288)** Trained on manipulated data, it begins misclassifying real threats as harmless, allowing attackers to operate undetected for weeks.
>
> **[4:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=298)** Without a rollback plan, security teams struggle to respond effectively.
>
> **[5:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=304)** However, if forensic logging and rollback mechanisms had been in place, they could have swiftly identified the manipulation and restored a clean AI model, as well as mitigated the threat much earlier.
>
> **[5:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=319)** This underscores the urgent need for robust safeguards in AI security solutions.
>
> **[5:26](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=326)** AI security incidents are inevitable.
>
> **[5:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=329)** It's not a matter of if, but when these incidents may occur in your organization.
>
> **[5:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=335)** But structured logging and incident response workflows help enable organizations to contain threats, analyze failures, and improve AI resilience.
>
> **[5:45](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=345)** By implementing continuous AI monitoring, automated rollback mechanisms, and adversarial threat detections, organizations can secure AI-driven decisions and ensure regulatory compliance.
>
> **[5:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/logging-and-incident-response?u=76281980&t=359)** Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (28), [[Security]] (14), data (5), teams (3), [[Real-Time]] (2)
> **Env Vars:** api (2), gdpr (1), hipaa (1), pci (1), dss (1)
> **Analogies:** such as (4)
> **Speakers:** - [instructor] (1)


### 6. AI Security Case Studies and Playbooks

[↑ Back to Table of Contents](#table-of-contents)

#### Case studies: Lessons from AI security incidents
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=0)** - [Narrator] AI security is not just about building defenses, it's about learning from past incidents to make systems stronger for the future.
>
> **[0:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=10)** By looking at real-world AI security failures, we can uncover weaknesses, refine risk management strategies, and improve AI resilience for our organizations.
>
> **[0:23](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=23)** In this session, we will dive deep into some major AI security breaches, their impact and the key lessons they teach us about protecting AI-driven systems.
>
> **[0:36](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=36)** One of the most well-known breaches happened in 2020 to Clearview AI, which is a facial recognition company, a data leak exposed its client list and sensitive biometric data, raising serious privacy and security concerns.
>
> **[0:52](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=52)** What was the issue?
>
> **[0:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=53)** Weak access controls and poor encryption of AI training data.
>
> **[0:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=58)** In response, Clearview AI strengthen its security, but the incident serves as a clear reminder; AI powered data repositories need multi-layered encryption, strict access controls, and continuous security audits to help prevent unauthorized access.
>
> **[1:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=79)** Another major challenge is adversarial attacks, especially in autonomous vehicle AI.
>
> **[1:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=87)** Researchers have shown that small changes like adding stickers or tape to road signs can trick AI models into misreading speed limits or stop signs, creating safety hazards.
>
> **[1:41](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=101)** A well-known case involved Tesla's Mobileye system, which failed to recognize a tampered road sign, raising concerns about AI's ability to handle real-world conditions.
>
> **[1:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=116)** So what's the key takeaway here?
>
> **[1:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=119)** AI models must be stress-tested against adversarial inputs using advanced training techniques.
>
> **[2:07](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=127)** Autonomous systems must also rely on multiple sensors like LiDAR, radar, and real-time mapping, rather than just visual data to prevent manipulation.
>
> **[2:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=140)** AI model theft is another growing concern.
>
> **[2:23](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=143)** In 2024, OpenAI and Microsoft investigated potential data theft by Chinese startup DeepSeek, which allegedly copied OpenAI's models, using techniques like model distillation.
>
> **[2:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=157)** The challenge here is protecting AI intellectual property when API-based models are exposed to external users.
>
> **[2:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=166)** To counter this, organizations are now implementing stricter access controls, monitoring API usage for suspicious activity, as well as embedding watermarking techniques to help track unauthorized use.
>
> **[3:01](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=181)** But what is the big lesson here?
>
> **[3:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=185)** AI security is not just about infrastructure, it must also protect intellectual property with cryptographic model signing and legal enforcement.
>
> **[3:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=198)** Then, deepfake technology is another rising threat, with major implications for misinformation, disinformation, and fraud.
>
> **[3:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=207)** We saw that during the election season this year.
>
> **[3:31](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=211)** In 2024, attackers used AI-generated deepfake video to impersonate a Ukrainian official in an attempt to extract sensitive information from US Senator Ben Cardin.
>
> **[3:45](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=225)** This case showed how cyber criminals are using generative AI for political manipulation.
>
> **[3:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=233)** In response, governments and businesses are now deploying deepfake detection tools and stronger verification protocols for digital communications.
>
> **[4:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=244)** Organizations must learn from here, and combine AI-power detection with human verification to ensure critical decisions aren't just based on manipulated content.
>
> **[4:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=258)** AI is also being used heavily in corporate fraud.
>
> **[4:22](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=262)** In one of the cases, the criminals used AI-generated voice deepfakes to impersonate the CEO of a German energy firm, convincing an employee to transfer almost 200,000 euros to a fraudulent account.
>
> **[4:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=279)** This case highlighted the increasing sophistication of AI-generated voice cloning and its ability to bypass additional fraud detection systems.
>
> **[4:50](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=290)** To counter this, companies are implementing stricter multi-factor authentications for financial transactions, as well as training employees on deepfake risks, and using AI-based voice authentication tools to detect synthetic speech.
>
> **[5:08](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=308)** So what's here in it for you?
>
> **[5:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=311)** Businesses need to evolve their trust mechanisms, combining continuous monitoring with adaptive fraud prevention strategies.
>
> **[5:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=320)** So what do these case studies tell us?
>
> **[5:24](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=324)** They help reinforce some key principles in AI security.
>
> **[5:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=329)** First one is data protection, which must be prioritized through robust encryption, strict access controls, and continuous monitoring, which are essential.
>
> **[5:39](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=339)** Second, AI models need to be resilient.
>
> **[5:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=343)** Adversarial training and real-time anomaly detection help prevent manipulation.
>
> **[5:49](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=349)** Then thirdly, intellectual property security requires a mix of API monitoring, watermarking, and legal enforcement.
>
> **[5:58](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=358)** Fourth, deepfake threats, demand vigilance.
>
> **[6:03](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=363)** So, AI power detection tools and verification protocols must be built and implemented into the decision-making processes.
>
> **[6:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=374)** By studying past AI security failures, businesses can strengthen their defenses, anticipate emerging threats, and build AI systems that are secure, resilient, and trustworthy.
>
> **[6:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=389)** AI security is not just a one-time fixed, it's an ongoing process that requires continuous adaptation, proactive monitoring, and the use of cutting-edge security technologies.
>
> **[6:42](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=402)** In our next session, we will explore how organizations can take proactive steps to secure AI systems using lessons from some of these incidents to help build a stronger AI security framework.
>
> **[6:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/case-studies-lessons-from-ai-security-incidents?u=76281980&t=416)** So, stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (30), [[Security]] (13), data (7), api (3), [[Real-Time]] (2)
> **Env Vars:** api (3), ceo (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### AI security playbook: Secure by Design approach
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=0)** - [Instructor] These AI security incidents which we covered in previous video, teach us an important lesson.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=7)** Security cannot be an afterthought.
>
> **[0:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=10)** If we wait to fix vulnerabilities after deployment, we leave systems open to costly breaches and evolving threats.
>
> **[0:19](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=19)** Instead, security must be built in from the start, ensuring AI systems are secure by design and not just protected later.
>
> **[0:29](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=29)** This session outlines a structured approach to designing, deploying, and maintaining secure AI systems.
>
> **[0:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=37)** The first step in building secure AI is threat modeling and risk assessment, before even the development begins.
>
> **[0:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=46)** Identifying potential security risks early on prevents costly redesigns later.
>
> **[0:53](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=53)** Organizations should map attack vectors, such as data poisoning, adversarial manipulation, and model theft to business goals and compliance needs.
>
> **[1:05](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=65)** Frameworks like MITRE ATLAS and NIST AI Risk Management Framework provides structured approaches to AI threat modeling.
>
> **[1:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=74)** Rather than reacting to threats after deployment, organizations should integrate security controls from the initial design phase.
>
> **[1:25](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=85)** AI models are only as secure as the data they are trained on, making secure data collection and pre-processing a critical step.
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=95)** For data quality, bias, or manipulated datasets can lead to faulty predictions and security failures.
>
> **[1:43](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=103)** Organizations should implement data validation pipelines, anomaly detection systems, and provenance tracking to help ensure data integrity.
>
> **[1:54](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=114)** Applying differential privacy techniques helps protect sensitive data while maintaining model accuracy.
>
> **[2:02](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=122)** Without putting these safeguards in place, adversaries can introduce poison data that manipulates AI decision making process.
>
> **[2:12](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=132)** During model training and development, security must be embedded at multiple levels.
>
> **[2:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=138)** AI models can be targeted by adversarial attacks, model theft, and gradient manipulation, requiring proactive defenses.
>
> **[2:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=147)** So implementing adversarial robustness testing ensures that models can withstand manipulation attempts.
>
> **[2:36](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=156)** You must also secure federated learning, which allows AI models to train across multiple data sources while preserving the privacy of the data.
>
> **[2:47](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=167)** Then explainability tools such as SHAP and LIME help detect potential biases and ensure transparency before these models are deployed.
>
> **[2:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=179)** Additionally, AI models should be version-controlled and stored securely so that it prevents unauthorized modifications.
>
> **[3:11](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=191)** Once a model is ready for production, secure deployment and API protection becomes critical.
>
> **[3:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=197)** Deployed AI models are exposed to API-based threats, adversarial inputs, and unauthorized access attempts.
>
> **[3:25](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=205)** Organizations must enforce strict access controls, API authentication, and encrypted model storage to help prevent model theft or tampering.
>
> **[3:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=217)** Implementing rate limiting anomaly detection and security monitoring helps ensure that AI APIs remain protected from abuse.
>
> **[3:47](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=227)** Removing confidence scores from API responses also helps prevent model inversion attacks where attackers attempt to reconstruct sensitive training data.
>
> **[4:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=240)** So AI security doesn't end at deployment.
>
> **[4:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=244)** Continuous monitoring and AI red teaming are essential for long-term resilience.
>
> **[4:10](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=250)** Threats evolve over time, and AI models can degrade over time as well due to data drift and emerging attack techniques.
>
> **[4:18](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=258)** So organizations should integrate real-time anomaly detection, drift monitoring, and automated security alerts to help detect potential compromises early on.
>
> **[4:30](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=270)** Then next component is AI red teaming, which helps in simulating real-world attack scenarios as well as do stress testing of AI defenses before the adversaries exploit any vulnerabilities which are there.
>
> **[4:46](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=286)** Security teams must continuously update defenses, retrain models, and apply security patches to keep AI systems secure.
>
> **[4:56](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=296)** A secure-by-design approach ensures that AI security is proactive rather than reactive.
>
> **[5:04](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=304)** By embedding security from development to deployment and continuous monitoring, organizations can prevent AI failures instead of merely responding to them.
>
> **[5:16](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=316)** This strategy guarantees that AI models are resilient against adversarial attacks, compliant with security standards, and monitored in real-time for potential threats.
>
> **[5:28](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=328)** This marks the conclusion of our AI security series where we have explored AI lifecycle security, adversarial threats, defense strategies, continuous monitoring, and best practices for secure AI development.
>
> **[5:45](https://www.linkedin.com/learning/ai-product-development-secure-by-design/ai-security-playbook-secure-by-design-approach?u=76281980&t=345)** Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (25), [[Security]] (17), data (12), api (4), [[Continuous Monitoring]] (3)
> **Env Vars:** api (4), mitre (1), atlas (1), nist (1), shap (1)
> **Cross-References:** we covered (1), previous video (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Conclusion and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=0)** - Congratulations on completing this course on AI security by design and exploring with me on how to build secure AI systems that are resilient, compliant and trustworthy.
>
> **[0:12](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=12)** Securing AI is just like driving a car safely on the road.
>
> **[0:17](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=17)** It requires regular maintenance and quick reactions to unexpected obstacles.
>
> **[0:23](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=23)** AI security isn't something you do just once.
>
> **[0:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=27)** It is an ongoing process of building, protecting and improving as new risks emerge.
>
> **[0:34](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=34)** Throughout the course, we learned how AI models can be misled, attacked or manipulated at different stages of their lifecycle.
>
> **[0:44](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=44)** Just like a car needs a strong engine, good brakes and careful driving, AI systems need secure data, strong defense and constant monitoring to function safely.
>
> **[0:57](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=57)** Security starts before the AI is even deployed, with risk assessments, security testing and compliance with regulations, like NIST AI Risk Management Framework, and GDPR, to keep everything running smoothly.
>
> **[1:14](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=74)** But, the road ahead is always changing as new threats emerge.
>
> **[1:20](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=80)** AI models degrade over time, and attackers continuously adapt their tactics.
>
> **[1:27](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=87)** That is why continuous monitoring, automatic threat detection and quick responses are needed to keep AI safe and reliable.
>
> **[1:37](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=97)** To put this into action, apply AI security best practices, regularly check for risks and stay up to date on new threats.
>
> **[1:48](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=108)** AI security is a team effort, so work cross-functionally with experts, security teams and policy makers to help keep AI trustworthy and protected.
>
> **[1:59](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=119)** Just like a good driver who follows traffic rules, watches for dangers and keeps their car in good shape, AI security must be a continuous effort to ensure AI remains safe, fair and reliable.
>
> **[2:15](https://www.linkedin.com/learning/ai-product-development-secure-by-design/conclusion-and-next-steps?u=76281980&t=135)** So, stay alert and drive safely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (15), [[Security]] (8), data (1), [[NIST]] (1), [[Risk Management Framework (RMF)|Risk management framework]] (1)
> **Analogies:** just like (3)
> **Env Vars:** nist (1), gdpr (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Reet Kaur]]

## Skills Covered

- Secure Coding
- AI Software Development
- Software Development Security
- Artificial Intelligence (AI)

## Path Context

### In [[Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning]]
← [[AI Data Strategy- Data Procurement and Storage]] | **6 of 6**

## Part of

- [[Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning]]

## Related Courses

_Courses sharing skills:_

- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[AI Product Security- Foundations and Proactive Security for AI]] — Artificial Intelligence (AI), Secure Coding
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development
- [[Advanced Python Projects- Build AI Applications]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)