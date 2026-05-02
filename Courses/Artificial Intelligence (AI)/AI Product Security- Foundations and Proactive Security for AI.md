---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ai-product-security-foundations-and-proactive-security-for-ai
url: "https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai"
duration_minutes: 102
duration: 1h 42m
level: Intermediate
updated: 1/28/2025
learners: 63376
skills:
  - Secure Coding
  - Artificial Intelligence (AI)
  - AI Security
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHUwP8SSWhUTg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736798892218?e=2147483647&amp;v=beta&amp;t=5-JEu3yNKOeCffGNRrkB3fykr6iJAC2rh8IjRmUj6bk"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning]]'
prev_courses:
  - '[[Implement and Evaluate Cloud AI Solutions- Foundations of Responsible AI]]'
next_courses:
  - '[[AI Pricing and ROI- A Technical Breakdown]]'
path_nav: '[{"path":"Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning","position":5,"total":6,"prev":"Implement and Evaluate Cloud AI Solutions- Foundations of Responsible AI","next":"AI Pricing and ROI- A Technical Breakdown"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/secure-coding
  - skill/artificial-intelligence-ai
  - skill/ai-security
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/AI%20Product%20Security-%20Foundations%20and%20Proactive%20Security%20for%20AI.md)

![AI Product Security: Foundations and Proactive Security for AI](https://media.licdn.com/dms/image/v2/D4E0DAQHUwP8SSWhUTg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736798892218?e=2147483647&amp;v=beta&amp;t=5-JEu3yNKOeCffGNRrkB3fykr6iJAC2rh8IjRmUj6bk)

# AI Product Security: Foundations and Proactive Security for AI

> This course provides a comprehensive foundation in AI product security, focusing on the unique challenges and risks associated with securing AI systems. Explore the AI threat landscape, from adversarial attacks to data poisoning, and gain practical skills in implementing proactive security measures throughout the AI product lifecycle. The course covers secure design principles, data security, and 

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai) | 1h 42m | Intermediate | 63K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Securing AI products](#securing-ai-products)
  - [Why does AI security matter?](#why-does-ai-security-matter)
- [**1. Fundamentals of AI Security**](#1-fundamentals-of-ai-security) (4 videos)
  - [Essentials of AI security](#essentials-of-ai-security)
  - [Common threats and vulnerabilities in AI systems](#common-threats-and-vulnerabilities-in-ai-systems)
  - [Ethical concerns, privacy, fairness, and user rights](#ethical-concerns-privacy-fairness-and-user-rights)
  - [Security across the AI life cycle](#security-across-the-ai-life-cycle)
- [**2. Building Resilient AI: Securing AI Models, Data, and Deployment**](#2-building-resilient-ai-securing-ai-models-data-and-deployment) (9 videos)
  - [Overview of adversarial AI attacks](#overview-of-adversarial-ai-attacks)
  - [Attacks on AI algorithms with real-world examples](#attacks-on-ai-algorithms-with-real-world-examples)
  - [Attacks on filters](#attacks-on-filters)
  - [Subversion of AI artifacts in supply chain attacks](#subversion-of-ai-artifacts-in-supply-chain-attacks)
  - [Defending against adversarial attacks](#defending-against-adversarial-attacks)
  - [Data security in AI systems](#data-security-in-ai-systems)
  - [Model security: Protecting AI models](#model-security-protecting-ai-models)
  - [Securing AI deployment pipelines](#securing-ai-deployment-pipelines)
  - [Secure deployment strategies for AI systems](#secure-deployment-strategies-for-ai-systems)
- [**3. AI Security Governance, Risk Management, and Compliance**](#3-ai-security-governance-risk-management-and-compliance) (3 videos)
  - [Governance in AI product security](#governance-in-ai-product-security)
  - [AI risk management](#ai-risk-management)
  - [AI audit and compliance](#ai-audit-and-compliance)
- [**4. System Design Principles**](#4-system-design-principles) (2 videos)
  - [Foundational principles of AI system design](#foundational-principles-of-ai-system-design)
  - [Advanced principles of AI system design](#advanced-principles-of-ai-system-design)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Securing AI products](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-products?u=76281980&t=0)** - In today's fast-changing world, AI is being adopted across every industry vertical.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-products?u=76281980&t=7)** As AI keeps advancing, so do the security risks.
>
> **[0:11](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-products?u=76281980&t=11)** With AI rapidly reshaping industries, the security threats we face are becoming more complex every single day.
>
> **[0:20](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-products?u=76281980&t=20)** In this course, we will explore the unique security challenges AI presents, practical strategies to safeguard AI systems and sensitive data and the steps to ensure robust protection across the entire AI life cycle.
>
> **[0:36](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-products?u=76281980&t=36)** I am Reet Kaur, a chief information security officer and a [[LinkedIn]] instructor.
>
> **[0:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-products?u=76281980&t=42)** So if you are ready, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Speakers:** - in (1)

#### [Why does AI security matter?](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=0)** - [Reet] Welcome to AI System Security: Foundations and Proactive Security for AI.
>
> **[0:06](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=6)** I'm Reet Kor, and I'm thrilled to take you on this important journey through the evolving landscape of [[AI Security]].
>
> **[0:14](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=14)** AI is rapidly becoming a cornerstone of innovation, advancing fields like healthcare, transportation, and more.
>
> **[0:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=22)** But as we unlock its immense potential, we also expose it to growing risks.
>
> **[0:29](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=29)** The question is, why does AI security matter and who is targeting our AI systems?
>
> **[0:37](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=37)** Let's start with why it matters first.
>
> **[0:41](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=41)** As AI becomes integral to industries worldwide, it's handling sensitive data, driving critical decision making and controlling vital systems.
>
> **[0:52](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=52)** The security of these systems is paramount.
>
> **[0:56](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=56)** And if it gets compromised, the impact can be devastating, ranging from financial losses to national security threats.
>
> **[1:05](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=65)** Now, let's look at who is targeting AI systems.
>
> **[1:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=70)** At the base of the pyramid, we have cyber criminals.
>
> **[1:14](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=74)** They launch malware attacks, exploit vulnerabilities and see quick profits by bypassing [[Authentication Systems]].
>
> **[1:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=82)** Their goal is just to steal data, hijack systems, or use AI for their malicious purposes.
>
> **[1:30](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=90)** A step up, we encounter competitors.
>
> **[1:34](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=94)** In the fiercely competitive world of business, companies may attempt to steal intellectual property or manipulate AI systems to gain an unfair market advantage.
>
> **[1:47](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=107)** For them, a successful attack could lead to millions of dollars in benefits through data theft or AI model manipulation.
>
> **[1:56](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=116)** At the top of the pyramid, we have nation states.
>
> **[2:01](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=121)** These powerful entities, like China, Russia, North Korea, and so on, are increasingly using AI as both a target and a weapon.
>
> **[2:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=132)** Whether it's launching disinformation campaigns, cyber attacks or using AI to disrupt political systems, the stakes are much higher.
>
> **[2:23](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=143)** Nation states target AI systems for strategic reasons, seeking to manipulate or control the technology for geopolitical leverage.
>
> **[2:35](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=155)** The bottom line is that all these groups share one common goal, to exploit vulnerabilities in AI systems, and that's where we come in as leaders.
>
> **[2:47](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=167)** Our mission is to understand these threats and risks, and make sure that our teams are strengthening AI security to protect against them.
>
> **[2:58](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=178)** Throughout this course, we will explore the specific ways adversaries target AI systems, and the proactive measures you can take to defend against these attacks, as well as how the role of security is evolving in this new era of AI.
>
> **[3:15](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=195)** Throughout this course, we will explore the specific ways adversaries target AI systems and the proactive measures that you can take to defend against these evolving attacks and threats.
>
> **[3:29](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=209)** By the end of this course, you will have a solid foundation in AI system security, armed with actionable strategies to anticipate and mitigate potential threats.
>
> **[3:40](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/why-does-ai-security-matter?u=76281980&t=220)** So let's get started, and together, we will build a safer and more resilient AI future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Security]] (3), [[Authentication Systems]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [reet] (1)


### 1. Fundamentals of AI Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Essentials of AI security](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=0)** - [Instructor] AI is transforming industries like pharma, healthcare, finance, retail, and others by enabling smarter fraud detection, more effective customer service, data-driven [[Decision-Making]], and so much more.
>
> **[0:15](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=15)** However, as powerful as AI is, it also introduces new security challenges, which require innovative solutions.
>
> **[0:25](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=25)** Unlike traditional software, AI systems are dynamic in nature.
>
> **[0:30](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=30)** They learn from the data and adapt over time based on the type of data which is fed to them.
>
> **[0:37](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=37)** This adaptability makes AI powerful but also exposes it to evolving threats.
>
> **[0:43](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=43)** To understand [[AI Security]], let's first clarify the difference between an AI model, AI product, and an AI system.
>
> **[0:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=51)** The AI model is the core computational engine that learns from the data, analyzes it, and makes predictions or identifies patterns.
>
> **[1:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=60)** For example, [[GPT-4]] is a large language model that generates human-like text.
>
> **[1:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=67)** While there are other models that help detect fraud, recognize images, or predict trends, the model holds the AI's intelligence, essentially being the brain of the system.
>
> **[1:19](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=79)** Once the model is developed, it is then integrated into an AI product or multiple AI [[Microsoft Products|products]], which are applications or user interfaces that deliver value using the model's core capabilities.
>
> **[1:36](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=96)** The product provides a user-friendly experience while leveraging the AI model's intelligence to make decisions or predictions.
>
> **[1:45](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=105)** However, the security of the model is crucial to maintaining the product's integrity.
>
> **[1:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=111)** If the model is compromised through adversarial attacks, data poisoning, or reverse engineering, it could lead to incorrect predictions or biased outputs, undermining the functionality and trustworthiness of the AI product.
>
> **[2:05](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=125)** An AI system is the complete solution that includes both the model and the product.
>
> **[2:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=132)** It's a combination of all the components that work together to provide the end results to help solve specific problems or delivering certain tasks.
>
> **[2:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=144)** Securing the entire AI system ensures that both the model and the product, as well as their entire ecosystem, works securely together to deliver reliable outcomes.
>
> **[2:39](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=159)** Now let's talk about how AI differs from traditional software in key areas.
>
> **[2:44](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=164)** Traditional software follows predefined rules and performs tasks in a fixed and predictable manner.
>
> **[2:52](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=172)** AI systems, on the other hand, learn from the data and adapt over time, making their behavior dynamic and less predictable.
>
> **[3:01](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=181)** In traditional software, data follows specific instructions to produce a predefined output, such as calculating the wages in a payroll system.
>
> **[3:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=192)** In AI, on the other hand, data drives learning and decision-making.
>
> **[3:18](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=198)** For decision-making, traditional software is deterministic.
>
> **[3:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=202)** It follows fixed and preset rules or logic applied to it.
>
> **[3:26](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=206)** On the other hand, AI is probabilistic, making predictions based on patterns in data, which introduces complexity and potential risks.
>
> **[3:37](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=217)** The traditional software requires manual updates to fix errors.
>
> **[3:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=222)** For example, if a payroll system calculates taxes incorrectly due to a recent change in tax law, a developer must update the software code to correct the issue.
>
> **[3:54](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=234)** On the other hand, AI systems adapt to new data automatically.
>
> **[4:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=240)** But this can introduce subtle errors or biases, like misclassifying employee categories, which are harder to detect and fix later.
>
> **[4:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=250)** Traditional software is easier to audit.
>
> **[4:13](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=253)** AI models, especially complex ones, are often like black box systems, making it harder to understand how the decisions are made in that black box, which poses security and compliance challenges.
>
> **[4:29](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=269)** In traditional software, the code is embedded in the application itself, while in AI systems, the model's code resides on servers or cloud platforms trained on large datasets.
>
> **[4:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=282)** The AI product integrates this model to interact with users or other systems.
>
> **[4:49](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=289)** With these differences in mind, AI security presents unique challenges due to its reliance on data, continuous learning, and models evolving over time.
>
> **[4:59](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=299)** AI systems depend on data to learn, and if this data is manipulated, such as through data poisoning attacks or other attacks, it can result in harmful outcomes like fraudulent transactions or biased decisions being made.
>
> **[5:15](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=315)** Protecting [[Data Integrity]] is essential for AI security.
>
> **[5:20](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=320)** Unlike traditional software, AI models face unique security risks.
>
> **[5:25](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=325)** For example, there are adversarial attacks which might subtly manipulate data to trick the model into making incorrect decisions.
>
> **[5:35](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=335)** Additionally, model theft is another attack which poses a risk, where attackers may reverse engineer the AI model to steal intellectual property or compromise its performance, making model security a critical concern.
>
> **[5:53](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=353)** Unlike traditional software, AI products evolve over time as the models they use learn from new datasets.
>
> **[6:02](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=362)** This requires [[Continuous Monitoring]] and updates to the underlying models, ensuring that the product remains secure and adaptive to emerging threats.
>
> **[6:13](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=373)** Thus, an ongoing security approach is essential rather than a one-time fix.
>
> **[6:20](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=380)** As AI becomes integral to [[Business Operations]], leaders must address its unique security challenges.
>
> **[6:29](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=389)** AI systems must be secure at launch and as they evolve, requiring robust security throughout the entire lifecycle, from data and model protection to safeguarding AI products in use.
>
> **[6:43](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=403)** In the next video, we will explore common vulnerabilities and strategies to proactively address these risks.
>
> **[6:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/essentials-of-ai-security?u=76281980&t=411)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision-Making]] (3), [[AI Security]] (3), [[Microsoft Products|Products]] (3), [[GPT-4]] (1), [[Data Integrity]] (1)
> **Analogies:** for example (3), such as (2)
> **CLI Commands:** make (1)
> **Env Vars:** gpt (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Common threats and vulnerabilities in AI systems](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=0)** - [Instructor] Now that we understand the basic foundations of [[AI Security]], it is important to understand the specific threats and vulnerabilities AI systems face.
>
> **[0:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=10)** As AI becomes central to mission-critical applications, like healthcare, autonomous vehicles, and financial trading, the risks it introduces can be significant.
>
> **[0:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=22)** The stakes are high because even well-established AI systems, such as those used for [[Predictive Analytics]] can be compromised, which can cause substantial operational, financial and reputational damage to organizations.
>
> **[0:36](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=36)** Some of the most pressing AI-specific vulnerabilities include, first, data poisoning.
>
> **[0:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=42)** This happens when attackers manipulate or corrupt the data being fed into the AI model, which undermines its accuracy and [[Decision-Making]] capability.
>
> **[0:52](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=52)** In business-critical AI applications, like fraud detection or credit scoring, this can lead to incorrect or harmful decisions being made, like missing the fraudulent activity happening on an account or approving risky transactions.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=68)** Next, let's discuss model inversion.
>
> **[1:11](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=71)** This occurs when an attacker can reverse-engineer sensitive data that the AI was trained on by analyzing its outputs.
>
> **[1:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=82)** For example, in a healthcare organization, an AI model trained on patient data could be manipulated to reveal sensitive details about the individuals, like medical conditions or treatments they are going through, by querying the model.
>
> **[1:38](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=98)** This poses a significant risk for organizations which handle confidential information, such as medical records or [[Financial Data]], potentially leading to sensitive [[Privacy]] breaches and exposing the privacy information of their customers.
>
> **[1:54](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=114)** Another vulnerability is adversarial attacks, particularly in AI models used for image or [[Speech Recognition]].
>
> **[2:04](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=124)** In this case, attackers make tiny, almost unrecognizable changes to the input data, causing the AI to make incorrect predictions.
>
> **[2:14](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=134)** For example, in a facial recognition system, attackers could subtly alter the image of a person, causing the AI to misidentify them as someone else.
>
> **[2:25](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=145)** This could lead to security breaches, such as unauthorized access to secure areas or systems, undermining trust in the technology.
>
> **[2:34](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=154)** Finally, let's talk about model extraction.
>
> **[2:37](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=157)** This happens when cyber criminals repeatedly query an AI model to steal its underlying [[Algorithms]] or intellectual property.
>
> **[2:46](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=166)** This exposes the organization to the theft of valuable models or trade secrets, putting competitive advantages at risk.
>
> **[2:56](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=176)** These vulnerabilities highlight how crucial is it to secure AI systems to avoid damaging consequences?
>
> **[3:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=183)** These vulnerabilities highlight an important point for leaders.
>
> **[3:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=187)** Securing AI systems is not just about protecting the technology, it's about maintaining business continuity and integrity of key processes.
>
> **[3:17](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=197)** As AI becomes more integrated into the [[Business Operations]], understanding these risks is crucial to prevent disruptions and ensure compliance.
>
> **[3:29](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=209)** Now that we have discussed some of the top AI vulnerabilities, which threatens the AI systems, one of the common questions being asked by leaders which we should address is whether traditional [[Cybersecurity]] controls are still necessary.
>
> **[3:46](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=226)** Even though AI systems face unique threats, traditional cybersecurity controls remain essential in defending these systems.
>
> **[3:55](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=235)** They protect the wider IT infrastructure supporting AI.
>
> **[3:59](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=239)** Security controls, like firewalls, VPNs, or virtual private networks, and network segmentation, helps block unauthorized access and other cyber threats.
>
> **[4:11](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=251)** Tools like [[Multi-factor Authentication]] and privileged access management ensure that only authorized users can interact with the AI systems.
>
> **[4:21](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=261)** Data encryption is also vital, especially in sensitive industries, like finance and healthcare.
>
> **[4:28](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=268)** Security monitoring with security incident and even monitoring is also critical to detect and address broader security risks.
>
> **[4:38](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=278)** For leaders, it is important to understand the unique threats AI systems face to make informed decisions about AI adoption and security.
>
> **[4:48](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=288)** While traditional cybersecurity measures are still needed, securing AI requires a tailored approach that considers the evolving nature of AI models and their data.
>
> **[5:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=300)** AI systems must be protected throughout their lifecycle, and continuously monitored and updated.
>
> **[5:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/common-threats-and-vulnerabilities-in-ai-systems?u=76281980&t=307)** Later in this course, we will explore how these threats are exploited, but first, let's dive into the ethical considerations which are critical when introducing AI models and [[Microsoft Products|products]] to both your enterprise and your consumers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (3), [[Privacy]] (2), [[AI Security]] (1), [[Predictive Analytics]] (1), [[Decision-Making]] (1)
> **Analogies:** such as (3), for example (2)
> **CLI Commands:** make (3)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [Ethical concerns, privacy, fairness, and user rights](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=0)** - [Instructor] In this video, we will explore ethical considerations critical to [[AI Security]].
>
> **[0:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=7)** As AI transforms industries like healthcare, finance, and law enforcement, it's essential that it respects [[Privacy]], fairness, and user rights.
>
> **[0:17](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=17)** These ethical standards are not just about compliance.
>
> **[0:21](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=21)** They also help prevent vulnerabilities, safeguard trust, and ensure AI systems support sound decision making.
>
> **[0:28](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=28)** Let's start with privacy first.
>
> **[0:31](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=31)** Imagine you are using a health app like MyFitnessPal to track fitness or medical data.
>
> **[0:37](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=37)** What if it collects more data than necessary, such as your location or social interactions without your consent?
>
> **[0:46](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=46)** Beyond this over collection of your data by the application, attackers can exploit seemingly harmless outputs to infer sensitive information about you.
>
> **[0:56](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=56)** For instance, aggregated user activity trends could be reversed engineered to reveal your private behaviors.
>
> **[1:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=63)** Privacy breaches don't just risk fines or penalties under privacy regulations like GDPR, they also erode customer trust and harm reputation.
>
> **[1:14](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=74)** Businesses can mitigate these risk through strategies like encryption, access controls, and clear boundaries set on [[Data Collection]] and usage.
>
> **[1:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=84)** Now let's turn to user rights.
>
> **[1:27](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=87)** As AI takes on critical decision making in granting loans, diagnosing illnesses, or managing personal data, it is important that the users understand how decisions are being made.
>
> **[1:41](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=101)** Transparency is key here.
>
> **[1:43](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=103)** Users should have access to clear expectations of how their data is being used and how conclusions are being reached.
>
> **[1:52](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=112)** This isn't just about maintaining the confidence of your consumer, but also essential for [[Regulatory Compliance]].
>
> **[2:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=120)** Providing auditable records ensures that decisions can be changed or verified, keeping the system accountable and fostering trust.
>
> **[2:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=130)** So how do we address these challenges?
>
> **[2:13](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=133)** Firstly, we need to make sure that data collection is transparent, limited to what's necessary, and it is also consent-driven.
>
> **[2:23](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=143)** Second, we need to ensure fairness by using diverse, inclusive data sets for training and thoroughly testing for bias at every stage of development.
>
> **[2:34](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=154)** Third, we need to make sure that AI systems are explainable and auditable so decisions can be understood, cushioned, and improved building.
>
> **[2:45](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=165)** Ethical AI doesn't stop at the training phase itself.
>
> **[2:49](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=169)** It extends across the entire lifecycle of AI system.
>
> **[2:54](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=174)** Post-deployment monitoring ensures AI adapts to evolving threats and behaviors while maintaining fairness and privacy.
>
> **[3:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=183)** By implementing regular updates and integrating threat intelligence, businesses can stay ahead of the risks.
>
> **[3:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=190)** These measures strengthen both trust and security, turning AI into a strategic reliable assets.
>
> **[3:19](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ethical-concerns-privacy-fairness-user-rights?u=76281980&t=199)** In the next video, we will focus on securing each development phase of the AI lifecycle, ensuring the data and models you rely on are accurate, secure, and aligned with your goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (5), [[Data Collection]] (2), [[AI Security]] (1), [[Regulatory Compliance]] (1)
> **Analogies:** imagine (1), such as (1), for instance (1)
> **CLI Commands:** make (2)
> **Env Vars:** gdpr (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Security across the AI life cycle](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=0)** - [Instructor] As AI drives innovation, it also introduces risks that can impact every aspect of your business, ranging from [[Data Security]] to operational continuity.
>
> **[0:11](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=11)** Managing these risks require embedding security throughout the entire AI life cycle from development to deployment and beyond.
>
> **[0:21](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=21)** Proactively addressing security at each stage ensures that your AI system remains secure, resilient, and trustworthy.
>
> **[0:30](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=30)** The first stage of AI lifecycle is [[Data Collection]] and Labeling.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=35)** As we have discussed in previous videos, data serves as the cornerstone of any AI system, with its quality and security directly influencing the system's ability to deliver accurate and dependable results.
>
> **[0:50](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=50)** However, this data is also susceptible to attacks.
>
> **[0:54](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=54)** Any tempering during the collection or labeling processes can introduce vulnerabilities, undermining the system's integrity from the outset.
>
> **[1:04](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=64)** For example, imagine an AI tool diagnosing medical conditions with incomplete or biased data.
>
> **[1:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=72)** This could lead to dangerous errors.
>
> **[1:14](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=74)** So to protect against these risks, use trusted data sources, validate the data, and secure it during collection and transfer.
>
> **[1:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=84)** Accurate labeling and safeguarding against tempering are essential for maintaining [[Data Integrity]].
>
> **[1:31](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=91)** Once the data has been securely collected, the next step is training the AI model with this data.
>
> **[1:38](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=98)** This is where the AI learns to make decisions based on the data it has been fed, but this phase is vulnerable to adversarial attacks.
>
> **[1:47](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=107)** For example, if an AI system is trained with bias data, it might make discriminatory decisions, such as unfair hiring practices.
>
> **[1:58](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=118)** To ensure security during this training phase, isolate the training environments and encrypt the data and models and also use validation techniques to ensure robustness.
>
> **[2:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=130)** Regularly audit models for bias to maintain fairness and security in decision making.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=137)** After training and validation has been done, the model is deployed in production, but the work doesn't end there.
>
> **[2:25](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=145)** Once live, AI systems begin interacting with the real-world data now and new vulnerabilities can arise.
>
> **[2:33](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=153)** Model drift, where the system's performance degrades due to changing data, is a real concern in the post-deployment phase.
>
> **[2:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=162)** Without proper monitoring, the system may make decisions based on outdated information, which can lead to inefficiencies or errors.
>
> **[2:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=171)** [[Continuous Monitoring]] is critical to track performance and spot anomalies earlier in the process.
>
> **[2:58](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=178)** Implementing model retaining strategies ensures that AI remains accurate and up to date.
>
> **[3:05](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=185)** Moreover, even post-deployment, AI systems remain vulnerable to adversarial attacks.
>
> **[3:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=192)** Attackers may attempt to exploit system weaknesses.
>
> **[3:16](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=196)** To help defend against this, integrate adversarial training and defenses and implement strong access controls to protect the AI from unauthorized manipulation.
>
> **[3:29](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=209)** It is important to understand that we need to incorporate threat intelligence throughout the life cycle, which can help update the system to defend against emerging risks.
>
> **[3:40](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=220)** By applying regular updates, patches, and model improvements, you are actively preventing security breaches rather than just reacting to them.
>
> **[3:49](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=229)** For business leaders, securing AI is not just a technical necessity, it's a strategic business decision.
>
> **[3:57](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=237)** Unprotected AI systems can lead to financial losses, reputational damage, and legal consequences for your organization.
>
> **[4:05](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=245)** Embedding security in every stage of the AI lifecycle mitigates the risks and maximizes the benefits of AI.
>
> **[4:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=252)** Investing in robust security from the outset protects your AI systems and builds trust with customers, stakeholders, and employees.
>
> **[4:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=262)** Building secure AI requires a proactive lifecycle wide approach.
>
> **[4:27](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=267)** By securing data collection, training, deployment, and post-deployment phases and monitoring for emerging risks, you ensure that your AI remains resilient, ethical, and aligned with business goals.
>
> **[4:41](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=281)** With this comprehensive approach to security, you are well prepared to navigate the evolving AI threat landscape.
>
> **[4:48](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=288)** Thank you for joining this session.
>
> **[4:50](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/security-across-the-ai-lifecycle?u=76281980&t=290)** In the next module, we will explore adversarial attacks and discuss how attackers manipulate AI systems and how to defend against these sophisticated threats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Collection]] (2), [[Data Security]] (1), [[Data Integrity]] (1), [[Continuous Monitoring]] (1)
> **Analogies:** for example (2), imagine (1), such as (1)
> **CLI Commands:** make (3)
> **Cross-References:** earlier in (1), in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Building Resilient AI: Securing AI Models, Data, and Deployment

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of adversarial AI attacks](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=1)** In this module, we will explore the concept of adversarial AI, which comes in two main types.
>
> **[0:08](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=8)** Understanding these threats is crucial to ensure the integrity, performance, and security of your AI systems as they can directly impact your business outcomes.
>
> **[0:18](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=18)** The first type involves adversaries using AI to amplify malicious activities such as generating deepfake content, including images, videos, and audio to spread misinformation, automating [[Phishing]] attacks for greater personalization and scale, and thirdly, creating AI generated malware that targets vulnerabilities in your systems faster and more efficiently than traditional methods.
>
> **[0:49](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=49)** These attacks can lead to financial losses, reputation damage, and compromise customer trust.
>
> **[0:57](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=57)** The second type focuses on attacks targeting the AI models and systems themselves.
>
> **[1:04](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=64)** These types of attacks are especially concerning for businesses as they can compromise your AI's decision making process, potentially leading to misleading outputs or biased decisions.
>
> **[1:18](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=78)** Since this course focuses on AI [[Product Security]], we will dig deep into these attacks in the next three videos covering the type of attacks that directly affect the reliability and security of your models.
>
> **[1:34](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=94)** To set the stage, let's outline the three main areas where attackers focus their efforts on AI systems.
>
> **[1:41](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=101)** Firstly, they can attack on AI [[Algorithms]].
>
> **[1:45](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=105)** These attacks target the learning and decision making processes of AI systems affecting how modals process data and make predictions.
>
> **[1:54](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=114)** Secondly, they can attack on filters in [[Generative AI]].
>
> **[1:58](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=118)** These exploit vulnerabilities in AI systems to bypass safeguards often through techniques like prompt injection or code injection.
>
> **[2:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=127)** Thirdly, their attackers can attack by subverting AI artifacts in supply chain.
>
> **[2:13](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=133)** These attacks target critical AI components such as datasets, pre-trained models, APIs and software libraries often supplied by third parties.
>
> **[2:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=144)** Attacks in the supply chain can inject malicious code, execute unauthorized actions, or create vulnerabilities that can compromise your AI system's security and performance.
>
> **[2:35](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=155)** Supply chain attacks are especially concerning because they exploit dependencies on third-party providers.
>
> **[2:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=162)** For example, an attacker could compromise an open-source library used in training your AI model, or by embedding malicious coordinate.
>
> **[2:53](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=173)** Once integrated into your model, this could allow unauthorized access, data exfiltration, or even disrupt your entire system.
>
> **[3:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=183)** By understanding these focus areas, we can better anticipate risks and proactively secure our AI systems, minimizing business disruptions and maintaining customer trust.
>
> **[3:16](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/overview-of-adversarial-ai-attacks?u=76281980&t=196)** Let's dive deeper into each of these categories in the upcoming sessions, starting with attacks on AI algorithms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Phishing]] (1), [[Product Security]] (1), [[Generative AI]] (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Attacks on AI algorithms with real-world examples](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=1)** - [Instructor] As we covered in the previous video, there are three key ways attackers can target AI models.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=7)** In this video, we will dive into the first method, attacks on AI [[Algorithms]].
>
> **[0:14](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=14)** These foundational algorithms are critical to the functioning of AI models, as they define how AI processes data, learns, and generates outputs.
>
> **[0:26](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=26)** When these algorithms are compromised, attackers can then exploit the system to make incorrect or harmful decisions.
>
> **[0:33](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=33)** We will focus on three primary types of attacks in this category, data poisoning, evasion attacks, and model theft, each with significant real-world implications that can disrupt [[Business Operations]], lead to financial losses, and damage your organization's reputation or brand.
>
> **[0:53](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=53)** Let's firstly talk about data poisoning attacks.
>
> **[0:56](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=56)** These attacks occur during the training phase of an AI model, where attackers manipulate the training data to corrupt the model's learning process.
>
> **[1:05](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=65)** Since AI models rely on massive datasets to learn patterns, poisoning this data can cause the model to learn flawed or malicious behaviors, leading to inaccurate, biased, or harmful outcomes.
>
> **[1:18](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=78)** For example, imagine a fraud detection model designed to flag fraudulent transactions.
>
> **[1:25](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=85)** Now, if an attacker got access to this model, they may insert fake data and label fraudulent transactions as legitimate.
>
> **[1:34](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=94)** When the model learns these false patterns as legitimate ones, it becomes less effective at identifying real threats and leaving your system vulnerable to fraudulent activities.
>
> **[1:48](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=108)** Real-world incidents highlight the dangers of data poisoning.
>
> **[1:53](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=113)** [[Microsoft]]'s AI chat bot, Tay, launched in 2016, became a victim of such an attack when it learned harmful, racist content from Twitter users, which it started to mimic.
>
> **[2:06](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=126)** This revealed the risks of unmonitored [[Data Pipelines]] in AI systems.
>
> **[2:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=132)** Another example is search engine algorithms being poisoned to spread false information such as the misleading, "Does Australia exist?" query where malicious actors manipulate data to generate misleading results, undermining the trust in AI systems.
>
> **[2:33](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=153)** Next one is evasion attack, which happens after the AI model has been deployed.
>
> **[2:39](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=159)** In these attacks, adversaries subtly manipulate inputs to trick the AI into making incorrect predictions.
>
> **[2:47](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=167)** For instance, in a fraud detection system, an attacker might alter their spending behavior just enough to avoid triggering fraud alerts.
>
> **[2:58](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=178)** Small adjustments like breaking a large purchase into smaller ones can make a fraudulent transaction appear legitimate.
>
> **[3:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=187)** A real-world example is seen in autonomous driving systems.
>
> **[3:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=192)** Researchers have demonstrated how small stickers placed on the stop sign could cause a self-driving car's AI to misinterpret it as a speed limit sign.
>
> **[3:23](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=203)** Such subtle alterations, which are invisible to the human eye, are enough to confuse the AI, potentially leading to a catastrophic accident if the car failed to stop.
>
> **[3:35](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=215)** Evasion attacks also target facial recognition systems where attackers can slightly alter facial features to bypass security.
>
> **[3:45](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=225)** In business, similar tactics can be used to evade fraud detection systems, which allows attackers to steal sensitive information or commit financial crimes or fraud, leading to financial losses and damaged customer trust.
>
> **[4:01](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=241)** The next attack, model theft, occurs when attackers steal or replicate an AI model by repeatedly querying it to infer its structure, parameters, or training data.
>
> **[4:15](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=255)** This allows them to replicate the model's functionality, effectively stealing its intellectual property.
>
> **[4:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=262)** Reverse engineering the model can lead to the extraction of its weights, which are the parameters the model uses to make predictions.
>
> **[4:32](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=272)** For example, in 2019, researchers demonstrated how a commercial AI model could be cloned with 90% accuracy simply by querying it repeatedly.
>
> **[4:45](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=285)** By analyzing responses to various inputs, the attackers deduced the model's underlying weights and structure, allowing them to replicate its behavior.
>
> **[4:56](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=296)** This theft of model weights undermines the business value of proprietary models, as adversaries can misuse or sell the replicated models.
>
> **[5:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=307)** For instance, in the Proofpoint evasion attack in 2019, attackers used machine learning techniques to bypass AI-based [[Phishing]] detection systems.
>
> **[5:19](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=319)** They slightly altered phishing emails to evade detection, exploiting weaknesses in the model's filtering process.
>
> **[5:28](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=328)** While this was more of an evasion attack than a theft, it gave attackers insights into the model's internal workings and potentially its weights, making future bypasses easier.
>
> **[5:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=342)** In another example, in 2023, the Alpaca and OpenLLaMA attack showed how adversaries can replicate AI models through repeated querying.
>
> **[5:54](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=354)** Attackers queried Meta's [[LLaMA]] model and analyzed its responses to reverse engineer its functionality.
>
> **[6:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=363)** This allowed them to deduce not only the model structure, but also its internal weights, leading to the creation of a similar model, Alpaca, that mimicked LLaMA's performance without direct access to its code or data.
>
> **[6:20](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=380)** These examples of data poisoning, evasion, and model theft demonstrates significant threats to AI systems, which compromises their integrity and reliability.
>
> **[6:34](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=394)** Such attacks expose businesses to operational disruptions, financial losses, and reputational harm.
>
> **[6:41](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=401)** To protect proprietary AI models, robust security measures, like training models for resilience, implementing access controls, and conducting [[Continuous Monitoring]], are essential.
>
> **[6:56](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=416)** In the next session, we will explore attacks on filters in [[Generative AI]], where attackers bypass safeguards to misuse AI capabilities.
>
> **[7:06](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-ai-algorithms-with-real-world-examples?u=76281980&t=426)** Stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (4), [[Phishing]] (2), [[LLaMA]] (2), [[Business Operations]] (1), [[Microsoft]] (1)
> **Analogies:** for example (2), for instance (2), imagine (1), such as (1)
> **CLI Commands:** make (3)
> **Cross-References:** we covered (1), previous video (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### [Attacks on filters](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=0)** - [Presenter] In the previous video, we discussed attacks on AI [[Algorithms]] focusing on data poisoning, evasion attacks, and model theft.
>
> **[0:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=10)** In this video, we will explore attacks on filters, which target the safeguards designed to restrict the inappropriate or harmful use of AI systems.
>
> **[0:21](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=21)** These filters are critical for ensuring that AI-generated content is safe, ethical, and aligned with organizational standards.
>
> **[0:32](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=32)** AI models such as those used for text, image, or code generation typically include filters to prevent harmful or misleading outputs.
>
> **[0:44](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=44)** However, attackers may attempt to bypass these filters to generate unintended or harmful content.
>
> **[0:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=51)** These attacks pose significant risk to both your organization's reputation and trustworthiness, as well as potential legal consequences.
>
> **[1:02](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=62)** Let's look at a few types of attacks on these filters and how they can impact your business.
>
> **[1:11](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=71)** The first attack in this category is a prompt injection attack, which occurs when an attacker manipulates the inputs to a [[Generative AI]] model, making it produce harmful or unintended outputs.
>
> **[1:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=84)** This can be done by embedding malicious instructions within a seemingly harmless request.
>
> **[1:31](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=91)** For instance, an attacker might inject hidden prompts into a chatbot or text generator to trick it into producing offensive or inappropriate content.
>
> **[1:44](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=104)** For example, in 2021, an attacker successfully bypassed a chatbot's safeguards and manipulated it to produce harmful responses.
>
> **[1:55](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=115)** This incident caused reputational damage for the company deploying the system, which highlighted the vulnerability of AI-driven customer-facing platforms.
>
> **[2:06](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=126)** The potential consequences for businesses include loss of user trust, brand damage, and customer churn.
>
> **[2:15](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=135)** Another dangerous form of attack in this category is code injection, where malicious code is embedded into inputs that the AI model then executes.
>
> **[2:26](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=146)** This allows attackers to control or disrupt the AI system's operations.
>
> **[2:32](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=152)** A prime example of this occurred in MathGPT, which is an AI model designed to solve complex maths equations.
>
> **[2:43](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=163)** Attackers exploited a vulnerability by embedding malicious code within a mathematical expression.
>
> **[2:50](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=170)** When the AI model processed the input, it not only solved the equation, but also executed hidden code, allowing attackers to gain unauthorized access to the system.
>
> **[3:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=183)** Similarly, the [[LangChain]] LLMMathChain attack in 2023 demonstrated how attackers could inject malicious code into mathematical queries, which allowed them to manipulate the system and access sensitive data.
>
> **[3:21](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=201)** These types of attacks can compromise data, disrupt operations, and lead to severe financial losses.
>
> **[3:29](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=209)** Attacks on generative AI filters through prompt injection or code injection reveals vulnerabilities in the safeguards that protect AI-driven systems.
>
> **[3:40](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=220)** As AI becomes increasingly integrated into industries, attackers will continue to exploit these weaknesses or vulnerabilities.
>
> **[3:49](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=229)** Businesses must invest in stronger defenses, including robust filtering systems, input validation, and secure model design.
>
> **[3:59](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=239)** Failure to do so could result in damaged reputations, financial penalties, and [[Regulatory Compliance]] issues.
>
> **[4:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=247)** In the next video, we will explore supporting AI artifacts in supply chain attacks, where attackers target the critical components of your AI systems, consisting data, models, and infrastructure during their development, deployment, or maintenance.
>
> **[4:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/attacks-on-filters?u=76281980&t=264)** Stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (2), [[Algorithms]] (1), [[LangChain]] (1), [[Regulatory Compliance]] (1)
> **Cross-References:** previous video (1), we discussed (1), in the next (1)
> **Analogies:** such as (1), for instance (1), for example (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [presenter] (1)

#### [Subversion of AI artifacts in supply chain attacks](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=1)** - [Instructor] Welcome back.
>
> **[0:02](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=2)** In the previous video, we discussed how attackers bypass safeguards in [[Generative AI]] filters to produce unethical or harmful content.
>
> **[0:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=12)** Now let's dive into a new and emerging threat to AI [[Product Security]], subverting AI artifacts in supply chain attacks.
>
> **[0:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=22)** But before we explore this specific threat, let's firstly break down the structure of AI supply chain.
>
> **[0:30](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=30)** Typically, it starts with the [[Data Collection]], where raw data is gathered for training AI models.
>
> **[0:39](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=39)** Data poisoning is a key risk here, where attackers can subtly manipulate the data fed to the system, making the AI model biased or unreliable, which can lead to faulty predictions or decisions.
>
> **[0:54](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=54)** Next is the model sourcing stage, where AI models are either developed in-house or obtained from third-party providers or open-source platforms.
>
> **[1:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=67)** When models are developed internally, teams have more control, but still face risk related to security of the entire development process.
>
> **[1:17](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=77)** Hijacked models and backdoor models are significant threats here.
>
> **[1:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=82)** Attackers could inject malicious code into the models during the development, making them act maliciously once deployed.
>
> **[1:32](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=92)** Even if the model looks fine at first glance, it could be secretly compromised, creating hidden vulnerabilities that only manifest in specific conditions.
>
> **[1:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=102)** Once sourced, these models are integrated into the workflow through machine learning operations, or [[MLOps]], automating tasks like model training, deployment, and monitoring.
>
> **[1:57](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=117)** This is where software vulnerabilities can come into play.
>
> **[2:01](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=121)** Attackers could exploit weak spots in the tools or libraries used in this phase to gain access to the system.
>
> **[2:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=130)** Moreover, during the training or integration phases, attackers could manipulate predictions through prediction tampering, causing the model to output misleading or harmful results.
>
> **[2:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=142)** Finally, the AI models are built and deployed in the production environment.
>
> **[2:28](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=148)** This is where attackers can exploit compromised packages.
>
> **[2:32](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=152)** If the AI system relies on third-party packages or libraries that have been tampered with, they could inject malware that leads to data exfiltration or system shutdowns.
>
> **[2:45](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=165)** Additionally, build environment compromise can happen, where attackers gain access to the environment where models are being built, further compromising the integrity of the system.
>
> **[2:58](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=178)** Now, let's talk about how attackers might target this supply chain at different stages to compromise AI [[Microsoft Products|products]].
>
> **[3:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=187)** Each stage of this process is vulnerable to various types of attacks, and understanding these risks is crucial for securing AI products.
>
> **[3:19](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=199)** These risks can lead to system disruptions, data breaches, and the compromise of intellectual property, which can directly impact your [[Business Operations]] and financial performance.
>
> **[3:32](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=212)** Let's look at some of the key methods used in AI supply chain attacks.
>
> **[3:36](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=216)** The first one is code execution, where the attackers can inject malicious code into an AI system through third-party dependencies, libraries, or during model training.
>
> **[3:49](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=229)** Once executed, this malicious code will compromise the AI system, enabling attackers to take control, steal data, or disrupt operations.
>
> **[4:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=240)** Second type of attack in this category is malware delivery to AI systems using third-party software or libraries.
>
> **[4:09](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=249)** Attackers can embed malware into widely used AI packages, which are then incorporated when the AI system is deployed.
>
> **[4:19](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=259)** This could lead to data exfiltration, unauthorized access, or system shutdowns.
>
> **[4:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=264)** Then the third is lateral movement, in which once attackers infiltrate an AI system, they can spread through the network, compromising additional systems or services.
>
> **[4:37](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=277)** This allows them to target sensitive AI components such as proprietary models, datasets, or infrastructure, leading to data breaches or altered models.
>
> **[4:49](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=289)** So why does this matter for AI product security?
>
> **[4:53](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=293)** These threats are not just theoretical, they have real-world implications.
>
> **[5:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=300)** They target the very foundation of AI systems, including the data, models, and the tools used to deploy them.
>
> **[5:09](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=309)** By subverting the AI supply chain, attackers can compromise the integrity and reliability of AI products, potentially causing financial loss, damage to brand reputation, and legal consequences.
>
> **[5:25](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=325)** In the next video, we will explore how to mitigate these risks and build resilient AI systems to protect against these emerging threats.
>
> **[5:34](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/subversion-of-ai-artifacts-in-supply-chain-attacks?u=76281980&t=334)** Stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[Product Security]] (2), [[Generative AI]] (1), [[Data Collection]] (1), [[MLOps]] (1)
> **Cross-References:** previous video (1), we discussed (1), in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Defending against adversarial attacks](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=0)** - [Instructor] In the last video, we explored the growing risks of adversarial attacks on AI systems.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=7)** In this video, let's shift our focus to practical strategies for defending against these threats to help ensure your AI systems stay secure, effective, and aligned with your business goals.
>
> **[0:20](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=20)** Imagine your AI system as a vigilant fraud detection officer, which constantly is on the lookout for suspicious transactions, but without robust defenses, even the most advanced systems can be manipulated, allowing attackers to exploit vulnerabilities, bypass detection methods, and undermine your system's effectiveness.
>
> **[0:45](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=45)** Protecting your AI isn't just an IT issue.
>
> **[0:49](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=49)** It's about safeguarding the very foundation of your organization's success.
>
> **[0:55](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=55)** A compromised system can disrupt operations, harm customer trust, and create opportunities for attackers.
>
> **[1:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=63)** That's why a comprehensive multi-phase approach to [[AI Security]] is essential.
>
> **[1:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=70)** Implementation of security defenses begin at the design stage.
>
> **[1:15](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=75)** The first step at this stage is to make sure that you work with trusted and high quality data sources.
>
> **[1:23](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=83)** Verifying data accuracy and integrity is crucial to avoid hidden biases or malicious inputs.
>
> **[1:31](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=91)** To protect your data throughout its lifecycle, implement data hashing techniques.
>
> **[1:37](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=97)** Hashing is a process where a hash function generates a fixed length unique digital footprint for any data set.
>
> **[1:46](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=106)** This fingerprint called the hash value represents the original data in a compact form.
>
> **[1:53](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=113)** Even the smallest change in the data will result in a completely different hash.
>
> **[1:59](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=119)** By comparing the hash value of your data at different stages, such as before and after transmission or storage, you can easily detect if the data has been tempered with or altered.
>
> **[2:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=132)** This technique is widely used to ensure [[Data Integrity]] and it protects against unauthorized changes, as well as safeguards sensitive information, ensuring that what you receive or store, is exactly what was intended.
>
> **[2:28](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=148)** During this phase, also evaluate your model's robustness by exposing it to adversarial training.
>
> **[2:36](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=156)** For instance, simulate attacks like splitting a fraudulent transaction into smaller amounts.
>
> **[2:45](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=165)** By training on these scenarios, your AI learns to resist manipulative tactics effectively.
>
> **[2:52](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=172)** Before you deploy your system in production, rigorous checks are critical.
>
> **[2:57](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=177)** Start with model integrity checks to verify that your trained model haven't been tampered with in the pre-deployment phase.
>
> **[3:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=187)** Next, you should conduct security scans to identify vulnerabilities or malicious code.
>
> **[3:14](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=194)** There are third party tools like hidden layers model scanner, which may help you in detecting threats before they reach production.
>
> **[3:23](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=203)** Finally, incorporate cryptographic signing into your workflow.
>
> **[3:27](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=207)** This process certifies your models and data sets to help ensure only verified versions are used and that any unauthorized changes are flagged immediately.
>
> **[3:41](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=221)** Once your AI system is live in production, security doesn't end there, as the AI model evolves over time and so do the security risks.
>
> **[3:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=231)** Your team must implement real time monitoring to track inputs and outputs for anomalies, much like a security camera for your AI.
>
> **[4:01](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=241)** Regular security evaluations are equally important.
>
> **[4:04](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=244)** Techniques like [[Red Teaming]] and [[Penetration Testing]] simulate real world attacks, helping uncover weaknesses and fortify your defenses, and of course, make sure that your teams maintain good security hygiene by applying patches promptly, auditing system logs, and reviewing configurations to stay ahead of the potential threats.
>
> **[4:29](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=269)** Adversarial attacks have grown more sophisticated, targeting everything from training data to supply chain components.
>
> **[4:37](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=277)** In AI models, attacks like data poisoning, evasion, and model theft, exploit weak points in the model.
>
> **[4:45](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=285)** While in [[Generative AI]], prompt injections can lead to harmful outputs.
>
> **[4:50](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=290)** To counter these threats, there are several advanced tools in the market, like HiddenLayer and SPLXAI, which offer comprehensive solutions.
>
> **[5:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=300)** Hidden layers AI detection and response, monitor systems in real time to mitigate risks like model tampering or data poisoning.
>
> **[5:11](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=311)** SPLXAI compliments these efforts by simulating complex multimodal attacks across text, images and voice inputs, ensuring your systems remain resilient against emerging threats.
>
> **[5:25](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=325)** I do want to call out that please don't forget to do your own research and due diligence to determine which tool may be a best fit for your organizational needs.
>
> **[5:35](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=335)** Now, let's bring it all together.
>
> **[5:37](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=337)** Defending against adversarial attacks require a strategic combination of efforts across the design, deployment, and maintenance phases of AI systems.
>
> **[5:47](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=347)** By integrating techniques like adversarial training, data hashing, cryptographic signing, [[Continuous Monitoring]], and advanced threat detection, businesses can create a secure and resilient AI ecosystem that not only protects operations, but also upholds organizational trust and goals.
>
> **[6:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/defending-against-adversarial-attacks?u=76281980&t=367)** Thank you for watching, and in the next video, we will dive deeper into data and AI model security, exploring advanced strategies to protect the core assets powering your AI systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Security]] (1), [[Data Integrity]] (1), [[Red Teaming]] (1), [[Penetration Testing]] (1), [[Generative AI]] (1)
> **Analogies:** imagine (1), such as (1), for instance (1)
> **CLI Commands:** make (2)
> **Env Vars:** splxai (2)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Data security in AI systems](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=0)** - [Instructor] As we have discussed in previous videos, data is the foundation of any AI system.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=7)** Without secure, high-quality and reliable data, even the most advanced AI systems can fail to deliver accurate or trustworthy results.
>
> **[0:16](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=16)** In this video, we will explore how to protect data throughout the lifecycle of an AI system, from [[Data Collection]] to model training, to model deployment and beyond.
>
> **[0:26](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=26)** While the AI model is the computational core, it is the entire AI system that ensures the model functions effectively and securely.
>
> **[0:36](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=36)** [[Data Security]] begins right at the collection phase.
>
> **[0:39](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=39)** Imagine you are baking a cake, but the ingredients you are using to bake your cake, like milk and eggs, are spoiled.
>
> **[0:48](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=48)** No matter how perfect your recipe is, the result will be disappointing.
>
> **[0:53](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=53)** Similarly, if your training data is flawed, biased, or tampered with, the AI model embedded within your system will inherit those flaws.
>
> **[1:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=63)** This can compromise the accuracy, reliability, and trustworthiness of the entire AI system.
>
> **[1:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=70)** That's why using clean, validated datasets that are free from errors, biases, or malicious inputs is highly critical.
>
> **[1:20](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=80)** One way to reduce risk is by working with third-party providers who specialize in curating high-quality, unbiased and [[Privacy]]-compliant datasets.
>
> **[1:32](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=92)** These providers follow rigorous standards to ensure that the data is free from errors, making it suitable for training robust AI models and integrating into operational systems.
>
> **[1:45](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=105)** However, it's essential to carefully vet these providers to ensure they meet your organization's quality, security, and compliance requirements.
>
> **[1:57](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=117)** When working with sensitive data, such as customer or employee information, [[Privacy Protection]] is crucial, not just for [[Building Trust]], but also for complying with privacy regulations like GDPR or CCPA.
>
> **[2:11](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=131)** Techniques like anonymization can safeguard data by removing personal identifying details while preserving data utility.
>
> **[2:20](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=140)** Once the data is collected, it needs to be encrypted and preprocessed before it can flow into the AI model or other system components.
>
> **[2:32](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=152)** Encryption safeguards data against theft or unauthorized access, while pre-processing, such as sanitization, removes harmful or corrupt elements.
>
> **[2:44](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=164)** This ensures that the data being fed into your system is safe and reliable.
>
> **[2:49](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=169)** However, it's important to balance security measures with performance, especially for [[Real-Time]] applications within AI system.
>
> **[2:58](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=178)** Data security doesn't just end once the model is trained or the system is deployed.
>
> **[3:04](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=184)** [[Continuous Monitoring]] acts like a security camera across the [[Data Pipelines]] and the operational layers of the system, alerting you to unusual activity.
>
> **[3:14](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=194)** Regular audits serve as a health checkup for your system, ensuring that all components, including the AI model, [[Data Storage]], and interfaces, remain secure over time.
>
> **[3:27](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=207)** These practices are essential for maintaining the integrity of your data and the reliability of your AI system.
>
> **[3:35](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=215)** In summary, securing data within an AI system is about maintaining its integrity, privacy, and reliability.
>
> **[3:43](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=223)** By taking these proactive steps, you are not just protecting data for the AI model, you are securing the entire system that drives your AI capabilities.
>
> **[3:53](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=233)** In our next session, we will dive deeper into AI model security, focusing on the strategies and tools to safeguard the computational engine of your AI system.
>
> **[4:04](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=244)** Remember, if data is the fuel and the model is the engine, the system is the vehicle that delivers outcomes and securing all parts is critical for success.
>
> **[4:16](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/data-security-in-ai-systems?u=76281980&t=256)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (3), [[Data Security]] (2), [[Data Collection]] (1), [[Privacy Protection]] (1), [[Building Trust]] (1)
> **Analogies:** such as (2), imagine (1)
> **Env Vars:** gdpr (1), ccpa (1)
> **Speakers:** - [instructor] (1)

#### [Model security: Protecting AI models](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=0)** - [Instructor] AI models are the engines powering today's organizational ecosystem, transforming data into actionable insights that power decision making.
>
> **[0:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=12)** These models represent immense investments in data expertise and computing resources, making them critical assets to protect.
>
> **[0:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=22)** In this video, we will explore the unique challenges of securing AI models and the strategies to safeguard them, ensuring their integrity and reliability for business success.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=35)** AI models perform essential roles across industries from diagnosing conditions in healthcare to detecting fraud in finance.
>
> **[0:45](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=45)** However, their value also makes them prime targets for attackers.
>
> **[0:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=51)** A compromise model can produce flawed outputs, leading to financial losses and damage your organization's reputation.
>
> **[1:01](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=61)** Let's look at some key practices for securing AI models.
>
> **[1:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=67)** The first security control we are going to be talking about is model encryption.
>
> **[1:11](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=71)** Just like data, AI models must be encrypted to protect their parameters, such as weights and biases from unauthorized access or theft.
>
> **[1:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=82)** Encryption ensures that the intellectual property embedded in your models remain secure during model training and deployment.
>
> **[1:31](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=91)** Without this protection, your organization risks losing valuable intellectual property and facing market setbacks due to model theft.
>
> **[1:41](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=101)** The second control we will cover is access control and API security.
>
> **[1:46](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=106)** Limiting who can access your model or APIs is crucial for minimizing risk.
>
> **[1:53](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=113)** Role-based access controls and query limits ensure that only authorized personnel and systems can interact with your models.
>
> **[2:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=123)** Secure your APIs with authentication and encryption, which are security controls to prevent unauthorized use or data leakage.
>
> **[2:13](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=133)** These safeguards reduce the likelihood of unauthorized manipulation of your model, which could lead to poor business decisions and loss of trust.
>
> **[2:23](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=143)** Then the next control you can implement for your AI model is watermarking for intellectual property protection embedding a digital watermark in your AI models act as a unique signature, proving ownership and deterring unauthorized replication or usage.
>
> **[2:41](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=161)** This is particularly important for protecting your competitive edge in the market.
>
> **[2:46](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=166)** Without model watermarking, competitors or malicious actors can easily steal or replicate your model, undermining your business advantage, and intellectual property.
>
> **[2:59](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=179)** You can also expose your models to adversarial training through simulated adversarial inputs during development and training phases.
>
> **[3:09](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=189)** It helps prepare them for real-world challenges.
>
> **[3:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=192)** This training ensures that they can detect and reject manipulative inputs, enhancing their resilience to adversarial attacks.
>
> **[3:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=202)** By incorporating adversarial training, you increase your model's robustness, reducing the risk of revenue loss due to fraudulent transactions or security breaches.
>
> **[3:34](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=214)** Then just as with [[Data Security]], AI models also require ongoing monitoring and regular audits, so [[Continuous Monitoring]] and auditing is highly important to secure your AI models.
>
> **[3:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=231)** [[Real-Time]] monitoring tools act like security cameras, which help detect unusual activity or emerging threats.
>
> **[3:59](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=239)** Periodic audits ensure vulnerabilities are identified and addressed proactively, keeping your model secure over time.
>
> **[4:08](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=248)** Continuous monitoring helps prevent unexpected system failures that could cause business disruption or data breaches.
>
> **[4:17](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=257)** As discussed earlier in the course, transparency and explainability in AI models play a critical role in security to maintain customer trust.
>
> **[4:29](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=269)** By understanding how decisions are made, organizations can detect anomalies or manipulations more effectively and ensure compliance with ethical standards.
>
> **[4:40](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=280)** To help with this, you may implement controls such as model interpretability to help make AI models understandable to humans.
>
> **[4:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=291)** Audit logs, which track everything that the model does from data input to decisions it makes and changes it makes to the model over time can also help with explainability and transparency.
>
> **[5:06](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=306)** Explainable AI frameworks are another solution to help non-experts, like stakeholders, regulators, and customers, understand how decisions are being made by the AI.
>
> **[5:18](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=318)** This will help in maintaining the trust with these entities.
>
> **[5:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=322)** The ability to explain how the AI is making decisions is essential in industries with high regulatory scrutiny such as healthcare, finance, and legal.
>
> **[5:36](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=336)** It is also essential to secure your entire AI supply chain.
>
> **[5:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=342)** Pre-trained models, third-party artifacts, like data sets, or external libraries, which you may use in the AI model, can be entry points for attackers.
>
> **[5:56](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=356)** Implementing tools to track and verify the integrity of these components ensures they remain uncompromised.
>
> **[6:05](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=365)** With AI models relying heavily on third-party data and services, neglecting [[Supply Chain Security]] could lead to compromised systems and major security incidents.
>
> **[6:17](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=377)** In earlier sessions, we covered threats like adversarial attacks, model inversion, and model theft.
>
> **[6:25](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=385)** These risks underscore the need for a layered defense strategy, which was covered in this video.
>
> **[6:33](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=393)** Combining encryption, access controls, adversarial training, and vigilant continuous monitoring to protect AI models effectively with data and model security as our foundation.
>
> **[6:46](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=406)** The next session will focus on securing the AI deployment pipeline.
>
> **[6:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/model-security-protecting-ai-models?u=76281980&t=411)** This step is crucial for maintaining security throughout the model's lifecycle from development to production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Monitoring]] (3), [[Data Security]] (1), [[Real-Time]] (1), [[Supply Chain Security]] (1)
> **Analogies:** such as (3), just like (1)
> **Cross-References:** earlier in (1), we covered (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Securing AI deployment pipelines](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=0)** - [Instructor] In earlier videos, we talked about securing data and AI models, which are the building blocks of your AI system.
>
> **[0:09](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=9)** Now let's focus on securing the AI deployment pipeline, similar to how we secure application or cloud deployment pipelines.
>
> **[0:19](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=19)** Just like in application or cloud deployments, where the system moves from development to production, AI models go through stages where vulnerabilities can be exploited.
>
> **[0:31](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=31)** In this video, we will cover the key steps to securing the AI deployment pipeline, covering securing source code, managing dependencies, verifying models, and ensuring ongoing monitoring, much like we would in an application or cloud deployment pipeline to ensure smooth and secure transitions to production.
>
> **[0:54](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=54)** The foundation of any AI system is its source code.
>
> **[0:59](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=59)** Just as cracks in the foundation of a house can jeopardize the structure, insecure code can introduce vulnerabilities.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=68)** To prevent this, implement [[Secure Coding]] practices, as well as conduct regular reviews and use automated tools to catch issues early.
>
> **[1:19](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=79)** AI models also rely on external libraries and frameworks, which can be a [[Security Risk]] if not properly managed.
>
> **[1:28](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=88)** Outdated or insecure libraries can compromise your system.
>
> **[1:33](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=93)** Keep dependencies up to date, verify their integrity, and secure your software supply chain by auditing third-party components.
>
> **[1:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=102)** Before deployment, it's also crucial to verify that models haven't been tempered with and are functioning correctly.
>
> **[1:50](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=110)** This involves thorough testing, including unit, integration, and adversarial testing, as well as deployment-specific checks like API scans and [[Load Testing]].
>
> **[2:02](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=122)** Once your models are live, they need to be constantly monitored to ensure updates, dependency changes, or environmental factors do not introduce new vulnerabilities.
>
> **[2:16](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=136)** [[Real-Time]] logging helps track changes and identify issues quickly to help ensure your AI system remains secure in the real world.
>
> **[2:27](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=147)** Some of the best practices for securing deployment can be implemented by integrating security throughout the deployment pipeline by automating checks and fostering collaboration between development, operations, and security teams.
>
> **[2:43](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=163)** You can also limit access to deployment environments through role-based access controls to ensure only authorized personnel can make changes.
>
> **[2:54](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=174)** You can also use certain tools to automate security checks, to flag vulnerabilities in real time and resolve issues before they even become problems.
>
> **[3:06](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=186)** Once the models are live, securing them is critical.
>
> **[3:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=190)** Techniques like model watermarking, secure serving environments, and cryptographic signatures help protect against unauthorized use and tampering.
>
> **[3:21](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=201)** To summarize, securing the AI deployment pipeline means addressing vulnerabilities at every stage, from source code to dependencies, model verification, and [[Continuous Monitoring]].
>
> **[3:34](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=214)** By embedding security throughout the process, businesses can ensure that their AI models are trustworthy and resilient.
>
> **[3:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=222)** In the next chapter, we will dive into [[AI Security]] governance, risk management, and compliance.
>
> **[3:48](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=228)** Thanks for joining me.
>
> **[3:50](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/securing-ai-deployment-pipelines?u=76281980&t=230)** Let's continue building secure, trusted AI systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Secure Coding]] (1), [[Security Risk]] (1), [[Load Testing]] (1), [[Real-Time]] (1), [[Continuous Monitoring]] (1)
> **Exercise Files:** source code (3)
> **Cross-References:** we talked about (1), in the next (1)
> **Analogies:** similar to (1), just like (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Secure deployment strategies for AI systems](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=1)** In this video, we will discuss a comprehensive approach to secure deployment strategies for AI systems and their ongoing operations.
>
> **[0:11](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=11)** Let's use the analogy of hospitals to help us understand the concepts.
>
> **[0:16](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=16)** Just as hospitals ensure that new equipment is totally tested and monitored to protect patient health, AI systems require a secure, well-structured deployment strategy to function effectively and safely in real-world environments.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=35)** As we have already discussed [[Data Security]] and model security in previous videos, now we will focus on deployment phase and proactive security strategies throughout the AI system's lifecycle.
>
> **[0:49](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=49)** Let's firstly talk about the pre-deployment and proactive security.
>
> **[0:54](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=54)** Before an AI system goes live, rigorous pre-deployment testing is essential.
>
> **[1:01](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=61)** This includes automated testing for AI-specific vulnerabilities, such as adversarial attacks or data poisoning and stress testing to simulate real-world conditions.
>
> **[1:14](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=74)** Furthermore, security vulnerabilities must be identified early through vulnerability scans, and the system must undergo user acceptance testing to ensure operational effectiveness under actual conditions.
>
> **[1:31](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=91)** By incorporating [[Secure Coding]] practices into model development, businesses can minimize risks introduced during the creation of an AI model.
>
> **[1:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=102)** Now next, let's focus on access controls and [[Continuous Monitoring]].
>
> **[1:46](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=106)** After deployment, securing access to AI systems is crucial.
>
> **[1:52](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=112)** Strong access controls, such as role-based permissions and [[Multi-factor Authentication]], protect sensitive data and system functions.
>
> **[2:02](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=122)** Continuous [[Real-Time]] monitoring is essential for detecting performance issues, security breaches, or anomalies.
>
> **[2:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=130)** Automated anomaly detection tools can quickly identify irregular patterns that could indicate a security concern, which enables rapid responses.
>
> **[2:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=142)** Next area we would focus on is threat intelligence and anomaly detection.
>
> **[2:27](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=147)** AI systems must leverage threat intelligence to stay ahead of potential threats.
>
> **[2:34](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=154)** This involves using up-to-date data on the latest attack techniques, vulnerabilities, and adversarial threats.
>
> **[2:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=162)** By integrating threat intelligence feeds, AI systems can proactively respond to emerging risks.
>
> **[2:49](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=169)** Anomaly detection tools are also crucial for identifying unexpected behaviors or deviations in the system's operations that could signal a breach or a model being manipulated.
>
> **[3:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=183)** Now let's talk about role of [[Incident Response]] planning and protocols.
>
> **[3:06](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=186)** Developing specific response protocols for [[AI Security]] events is vital.
>
> **[3:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=192)** These protocols should outline the steps to take in case of adversarial attacks, data leaks, or breaches in model integrity.
>
> **[3:21](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=201)** Regular drills and preparedness checks ensure that the teams are ready to respond swiftly and effectively.
>
> **[3:28](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=208)** Clear incident response procedures should also address recovery plans to restore model functionality and protect sensitive data during security incidents.
>
> **[3:39](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=219)** Another area which needs to be be focused on is adversarial defense and continuous security reviews.
>
> **[3:47](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=227)** Deploying defenses against adversarial attacks is vital for maintaining the integrity of AI systems.
>
> **[3:56](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=236)** Techniques such as adversarial training, input validation, and model robustness testing can help defend against these sophisticated threats.
>
> **[4:05](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=245)** Additionally, continuous security reviews of deployed models should be conducted to assess and address emerging vulnerabilities as they arise.
>
> **[4:16](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=256)** These reviews should include evaluating models against the latest security threats, ensuring they remain secure and compliant in production environments.
>
> **[4:27](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=267)** Then last but not the least, we also need to focus on automated testing and compliance.
>
> **[4:35](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=275)** Automated testing tools can help us validate that AI systems meet compliance standards, including the [[Privacy]] regulations GDPR or HIPAA.
>
> **[4:47](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=287)** These tools ensure that the system adheres to regulatory requirements while preserving [[Data Privacy]].
>
> **[4:56](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=296)** Furthermore, AI deployments must be evaluated against security frameworks, ensuring that any risks are identified and addressed promptly.
>
> **[5:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=307)** By following these strategies, incorporating proactive security measures, continuous monitoring, incident response protocols, and ongoing security reviews, organizations can ensure that their AI systems are secure, resilient, and compliant throughout their lifecycle.
>
> **[5:27](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=327)** This holistic approach ensures that AI deployments are optimized for performance, security, and regulatory adherence, ultimately benefiting both users and businesses.
>
> **[5:39](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/secure-deployment-strategies-for-ai-systems?u=76281980&t=339)** Thank you for watching this video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Incident Response]] (3), [[Continuous Monitoring]] (2), [[Data Security]] (1), [[Secure Coding]] (1), [[Multi-factor Authentication]] (1)
> **Analogies:** such as (3)
> **Env Vars:** gdpr (1), hipaa (1)
> **Speakers:** - [instructor] (1)


### 3. AI Security Governance, Risk Management, and Compliance

[↑ Back to Table of Contents](#table-of-contents)

#### [Governance in AI product security](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=0)** - [Instructor] Now, that we have explored the security risks, vulnerabilities and controls essential for protecting AI systems and their data, let's focus on [[AI Security]] governance.
>
> **[0:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=12)** Governance ensures that AI remains both a strategic and secure asset, enabling organizations to manage risks, ensure compliance, and build trust, while aligning AI initiatives with business objectives.
>
> **[0:28](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=28)** Think of governance as a conductor of a global orchestra.
>
> **[0:33](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=33)** Without it, even the most advanced systems can fall into disarray, leading to risks such as data breaches, regulatory penalties, or unethical practices.
>
> **[0:44](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=44)** Governance harmonizes the AI ecosystem, security, compliance, and [[Ethics]] to support your strategic vision.
>
> **[0:54](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=54)** AI security governance is more than checking compliance boxes.
>
> **[0:59](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=59)** It proactively manages risks, fosters stress, and enables innovation while safeguarding systems.
>
> **[1:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=67)** A key challenge is shadow AI, where employees use unapproved AI tools without oversight.
>
> **[1:14](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=74)** This often arises from unclear policies or lack of awareness, and can lead to vulnerabilities like data leaks or operational disruptions.
>
> **[1:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=84)** The rise of [[Generative AI]] amplifies this risk as employees may unknowingly bypass safeguards, exposing organizations to prompt injection attacks or intellectual property theft.
>
> **[1:37](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=97)** Addressing these risks require a robust framework of policy enforcement, [[Accountability]], transparency, and [[Security Awareness]].
>
> **[1:48](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=108)** Effective governance is built on four pillars.
>
> **[1:52](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=112)** Number one is policies which are clear, enforceable guardrails to ensure AI operates within ethical, legal, and secure boundaries.
>
> **[2:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=123)** Then second is accountability, where you designate ownership of AI decisions and risks to maintain trust and clarity.
>
> **[2:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=132)** Third is transparency, where there is a full visibility into AI processes and risk management to build stakeholder confidence.
>
> **[2:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=144)** Fourth is security awareness, which involves educating employees on secure AI usage to align behavior with organizational goals and reduce shadow AI risks.
>
> **[2:37](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=157)** Governance must also address AI specific threats.
>
> **[2:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=162)** Adversarial attacks, which we covered earlier in the course, can be mitigated with adversarial training and robust testing.
>
> **[2:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=171)** Model poisoning, where attackers inject harmful data into training pipelines requires securing these pipelines.
>
> **[3:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=180)** Model drift or gradual performance degradation can be managed with [[Continuous Monitoring]] tools.
>
> **[3:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=187)** Generative AI's risks like sensitive data exposure can be reduced through secure APIs, controlled prompts, and proper usage policies.
>
> **[3:18](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=198)** Organizations must adapt governance to evolving regulations like the Europe AI Act, which emphasizes transparency, fairness, and accountability, as well as [[Privacy]] laws such as GDPR and CCPA, which protect personal data.
>
> **[3:37](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=217)** Collaborative efforts across IT, security, privacy and ethics teams are crucial to addressing risks comprehensively.
>
> **[3:46](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=226)** To measure effectiveness, organizations should track metrics like compliance rates, shadow AI incidents, and vulnerability resolution times supported by [[Incident Response]] plans tailored to AI systems.
>
> **[4:02](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=242)** By staying ahead of regulatory changes, addressing emerging threats, like quantum risks and upskilling teams in secure AI practices, governance becomes a dynamic framework that protects systems while unlocking AI's potential.
>
> **[4:21](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=261)** Thank you for watching.
>
> **[4:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/governance-in-ai-product-security?u=76281980&t=262)** And now in the next video, we will be covering risk management practices and frameworks in AI security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Security]] (3), [[Accountability]] (3), [[Ethics]] (2), [[Generative AI]] (2), [[Security Awareness]] (2)
> **Cross-References:** we covered (1), earlier in (1), in the next (1)
> **Env Vars:** gdpr (1), ccpa (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [AI risk management](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=1)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=1)** In this video, we will talk about AI risk management.
>
> **[0:06](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=6)** As AI continues to transform industries, the risks associated with it are evolving.
>
> **[0:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=12)** Managing these risks require a structured and proactive approach supported by frameworks that ensure AI systems operate safely, securely, and ethically.
>
> **[0:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=22)** You can think of AI risk management like managing traffic in a bustling city where the traffic planners identify accident prone zones and they adjust the signals to prevent mishaps from occurring.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=35)** Similarly, AI teams identify system vulnerabilities, assess their potential impact, and implement strategies to prevent disruptions.
>
> **[0:44](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=44)** The process begins with risk identification.
>
> **[0:47](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=47)** This involves identifying potential threats such as data exposure, algorithmic failures, and system vulnerabilities in either a new AI system your team is building or an existing one.
>
> **[1:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=60)** Once risks are identified, the next step is to assess them based on two key factors.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=68)** The first one is likelihood, or how probable is the risk to actually occur, and second is the impact or how severe the consequences would be if the risk materialized.
>
> **[1:21](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=81)** This assessment then helps determine whether a risk falls within the organization's risk appetite, or the level of risk the organization is willing to accept.
>
> **[1:34](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=94)** It is important to remember that not all risks require immediate treatment.
>
> **[1:39](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=99)** For those within the acceptable range, ongoing monitoring may be sufficient.
>
> **[1:45](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=105)** For risks that exceed the acceptable range, various treatment strategies can be applied.
>
> **[1:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=111)** The first strategy is to avoid the risk altogether by discontinuing the risky activity.
>
> **[1:57](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=117)** Another option is to reduce the risk by implementing measures like encryption, bias detection tools, system redundancies, or so many other security controls that we have talked during the course.
>
> **[2:13](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=133)** Organizations may also transfer the risk to another party, such as through insurance or partnerships.
>
> **[2:20](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=140)** Finally, there's an option to accept the risk and proceed, which is often chosen when the cost of treatment outweighs the benefits.
>
> **[2:29](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=149)** When leaders understand and apply these principles of risk identification, assessment and treatment, they help their organizations to effectively navigate the complexities of AI risk management and ensure their systems remain safe, secure, and aligned with their goals.
>
> **[2:48](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=168)** Now, let's break this down further by looking at the types of risks AI systems face.
>
> **[2:55](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=175)** The first ones are security risks.
>
> **[2:58](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=178)** These include data breaches, adversarial attacks, and model inversion attacks.
>
> **[3:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=183)** Preventative measures like encryption and multifactor authentication are essential to address these threats.
>
> **[3:11](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=191)** Next are the ethical risks caused by the biases in AI [[Algorithms]], which can undermine fairness and erode trust in AI systems.
>
> **[3:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=202)** To mitigate these risks, organizations should perform ethical audits to examine the decision making processes of AI models, to help identify potential sources of bias, and evaluate their impact on different demographic groups.
>
> **[3:38](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=218)** Additionally, the use of diverse training data sets will help ensure that AI models are trained on data representative of various populations, which help reduce the likelihood of skewed outcomes.
>
> **[3:53](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=233)** Implementing bias detection tools can further enhance fairness by identifying and addressing biases during the development and deployment stages, which helps foster equitable and trustworthy AI systems.
>
> **[4:08](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=248)** Then next risks are operational risks, which are caused by system failures and model drift due to factors like changing data patterns, outdated algorithms or infrastructure issues, which can disrupt AI functionality.
>
> **[4:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=264)** To maintain reliability, organizations should conduct regular system checks and implement periodic model training.
>
> **[4:33](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=273)** These measures ensure that AI systems remain accurate, functional, and aligned with evolving requirements.
>
> **[4:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=282)** Next set of risks are the compliance risks, which may arise when the regulatory requirements like GDPR and Europe AI Act, are not met.
>
> **[4:52](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=292)** Failure to comply to these regulatory requirements can lead to hefty fines and reputational damage.
>
> **[4:59](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=299)** To tackle these challenges, businesses can adopt AI risk management frameworks like [[NIST]] AI [[Risk Management Framework (RMF)|Risk Management framework]], ISO 42001, MITRE Atlas, along with complying with Europe AI Act and directives from the AI Executive Order signed by President Biden.
>
> **[5:19](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=319)** These resources provide essential tools such as [[Real-Time]] monitoring to help perform continuous checks for unusual behavior or security threats, while enabling quick response to those threats.
>
> **[5:33](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=333)** Risk assessment tools which help identify weaknesses in AI models early on to address vulnerabilities before they escalate.
>
> **[5:43](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=343)** And last, but not the least, [[Incident Response]] plans to help getting prepared for AI related issues or incidents like data breaches or system failures.
>
> **[5:55](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=355)** Europe AI Act adopts a risk-based approach by categorizing AI systems into four levels of risk, unacceptable, high, limited, and minimal.
>
> **[6:06](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=366)** For high risk systems, the Act mandates that you should conduct thorough risk assessments, implement safeguards to address [[Data Quality]] and algorithmic bias, and ensuring human oversight to mitigate unethical or discriminatory outcomes.
>
> **[6:23](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=383)** It also requires post-market surveillance to continuously monitor deployed systems to help ensure they remain safe and compliant over time.
>
> **[6:34](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=394)** Compliance with frameworks like the Europe AI Act, doesn't just minimize risks.
>
> **[6:39](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=399)** It also offers significant benefits.
>
> **[6:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=402)** By safeguarding against breaches and regulatory fines, businesses can prevent financial losses.
>
> **[6:50](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=410)** They can help build trust by demonstrating their commitment to secure, ethical, and compliant AI systems, and they can then foster innovation by creating a safe environment for experimentation and growth.
>
> **[7:04](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=424)** Another key aspect of AI risk management is stakeholder communication.
>
> **[7:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=430)** Just as traffic systems inform the public about road incidents, organizations also need to keep regulators, customers, and internal teams informed about AI performance, its risks and mitigation strategies.
>
> **[7:26](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=446)** Regular updates build transparency, foster trust, and keep everyone aligned with the organization's AI vision.
>
> **[7:35](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=455)** Finally, ethical governance plays a vital role in ensuring AI systems operate fairly transparently and [[Accountability]] to mitigate ethical risks, which we discussed earlier.
>
> **[7:50](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=470)** Frameworks like AI TRiSM, which stands for [[Artificial Intelligence (AI)|Artificial Intelligence]], trust, risk and [[Security Management]], and [[Google]] SAIF, which stands for systemic AI framework, embed ethical principles directly into AI workflows to help address bias and ensure responsible decision making at every stage.
>
> **[8:13](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=493)** These frameworks help organizations design AI systems that are not only secure and compliant, but also align with broader societal values, fostering trust and accountability.
>
> **[8:26](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=506)** So in conclusion, adopting comprehensive frameworks like NIST AI Risk Management Framework, MITRE ATLAS, Europe AI Act, and others, allow businesses to manage risk effectively, while maintaining ethical governance.
>
> **[8:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=522)** This proactive approach minimizes risks, protects reputations, and enables organizations to innovate responsibly.
>
> **[8:52](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-risk-management?u=76281980&t=532)** Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[NIST]] (2), [[Risk Management Framework (RMF)|Risk management framework]] (2), [[Accountability]] (2), [[Real-Time]] (1)
> **Env Vars:** nist (2), mitre (2), gdpr (1), iso (1), saif (1)
> **Analogies:** such as (3)
> **Definitions:** stands for (2)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### [AI audit and compliance](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=0)** - [Instructor] Now let's conclude this chapter on governance risk management and compliance by discussing the crucial role of audits and compliance in AI systems.
>
> **[0:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=10)** As AI technologies continue to reshape industries, ensuring their integrity, security, and fairness is more important than ever.
>
> **[0:21](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=21)** Audits are essential for identifying vulnerabilities to help ensure compliance and confirm that AI systems adhere to legal and ethical frameworks.
>
> **[0:32](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=32)** The auditing process ensures that AI models function as intended, operate within legal boundaries, and provide equitable outcomes for users and stakeholders.
>
> **[0:43](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=43)** Several key methodologies are used to assess the security and compliance of AI systems.
>
> **[0:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=51)** The first method in an AI audit is identifying potential risks such as algorithmic bias, transparency issues, and [[Data Security]] vulnerabilities through risk assessments.
>
> **[1:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=63)** Assessing these threats help organizations understand their impact and take proactive measures to mitigate them.
>
> **[1:11](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=71)** The second methodology involves conducting regular vulnerability scans to uncover weaknesses in AI models and their infrastructure.
>
> **[1:22](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=82)** These scans focus on identifying exposed data, insecure APIs, and other gaps that could compromise the system.
>
> **[1:31](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=91)** Early detection prevents breaches and protects sensitive information.
>
> **[1:36](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=96)** The third methodology involves pen testing the AI system by simulating real-world attacks to help identify vulnerabilities before they can be exploited by attackers.
>
> **[1:48](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=108)** In AI systems, This includes adversarial attacks designed to manipulate [[Decision-Making]] processes.
>
> **[1:56](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=116)** AI audits present unique challenges beyond traditional IT audits.
>
> **[2:02](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=122)** The challenge lies in the unique nature of AI systems, which introduces complexities that go beyond traditional IT audits.
>
> **[2:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=130)** Here are the specific challenges.
>
> **[2:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=132)** The first one is bias detection.
>
> **[2:15](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=135)** AI models can inadvertently learn and perpetuate biases from their training data.
>
> **[2:21](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=141)** These biases can lead to discriminatory outcomes, particularly in sensitive areas like recruitment, lending, and healthcare.
>
> **[2:30](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=150)** Auditors face the challenge of identifying these biases, which may not always be immediately apparent, to ensure that AI models are fair and equitable.
>
> **[2:41](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=161)** The second challenge is model drift.
>
> **[2:44](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=164)** AI models can degrade over time as they encounter new data or changes in their operating environment.
>
> **[2:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=171)** Auditors must continuously track model performance to help identify when adjustments or retraining of the model are needed to keep the model performing optimally.
>
> **[3:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=183)** Then the third challenge is data leakage.
>
> **[3:06](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=186)** Sensitive or confidential data may unintentionally influence AI model outcomes, leading to [[Privacy]] violations or inaccurate predictions.
>
> **[3:16](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=196)** Auditors face the challenge of ensuring that data used in training and testing AI models is appropriately handled and that sensitive information is not inadvertently used, helping businesses remain compliant with regulations like GDPR and CCPA.
>
> **[3:35](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=215)** Compliance with AI [[Ethics]] standards and legal requirements is essential for maintaining trust.
>
> **[3:42](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=222)** Audits help assess whether AI systems meet ethical standards such as fairness, transparency, and [[Accountability]] to help ensure that they operate with integrity and do not cause any harm to users or perpetuate negative societal biases.
>
> **[4:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=240)** Additionally, audits verify compliance with legal frameworks like GDPR and CCPA, which are privacy regulations, ensuring appropriate handling of personal data.
>
> **[4:13](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=253)** With the rise of AI, compliance with security regulations, such as SEC's [[Cybersecurity]] disclosure rules, is crucial as well.
>
> **[4:23](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=263)** These rules require businesses to disclose material cybersecurity incidents, including those involve AI systems.
>
> **[4:31](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=271)** Ongoing monitoring is vital to ensure compliance as regulations evolve.
>
> **[4:37](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=277)** Just as traffic systems adapt in real time, AI systems must undergo regular audits to stay compliant with changing legal and ethical standards.
>
> **[4:49](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=289)** Standards such as Europe AI Act, ISO 42001, and [[NIST]] AI [[Risk Management Framework (RMF)|Risk Management Framework]] guide businesses in auditing and managing AI risks and ensuring compliance.
>
> **[5:04](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=304)** AI audits can be categorized into two main types.
>
> **[5:08](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=308)** The first one is internal audits, which are conducted by in-house teams to help focus on aligning AI systems with organizational policies and internal controls.
>
> **[5:20](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=320)** These audits help identify vulnerabilities early on and prepare organizations for external evaluations.
>
> **[5:28](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=328)** Then, second type are the external audits, which are performed by independent third parties, and they help to provide unbiased assessment of AI systems' compliance and ethical alignment.
>
> **[5:41](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=341)** They build credibility with the regulators, stakeholders, and the public.
>
> **[5:46](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/ai-audit-and-compliance?u=76281980&t=346)** By combining both internal and external audits, organizations ensure proactive risk management, maintain [[Regulatory Compliance]], and drive continuous improvement of the program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (2), [[Cybersecurity]] (2), [[Data Security]] (1), [[Decision-Making]] (1), [[Ethics]] (1)
> **Env Vars:** gdpr (2), ccpa (2), sec (1), iso (1), nist (1)
> **Analogies:** such as (4)
> **Speakers:** - [instructor] (1)


### 4. System Design Principles

[↑ Back to Table of Contents](#table-of-contents)

#### [Foundational principles of AI system design](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=0)** - [Narrator] Welcome to the first part of our video on system design principles for AI system security.
>
> **[0:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=7)** In this video, we will explore foundational principles, such as [[Privacy]] by design, secure architecture, minimal [[Data Collection]], strong access controls, and end-to-end encryption.
>
> **[0:21](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=21)** These principles ensure that AI systems are not only efficient and effective, but also secure and trustworthy from the very beginning.
>
> **[0:32](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=32)** Let's start with privacy by design.
>
> **[0:35](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=35)** This principle involves embedding privacy considerations into every aspect of your AI system, starting from the design phase and continuing through data collection, processing and storage.
>
> **[0:48](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=48)** Privacy is not just a compliance requirement, it's a crucial component of [[Building Trust]] with your customers and users.
>
> **[0:57](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=57)** By proactively addressing privacy concerns in the design phase, businesses avoid costly breaches and reputational damage later in the game.
>
> **[1:08](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=68)** Alongside privacy, we focus on secure architecture.
>
> **[1:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=72)** A strong resilient AI system requires a design that is resistant to attacks.
>
> **[1:19](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=79)** This requires that we compartmentalize system components to limit the impact of potential breaches, and enforce strict data flow controls to prevent unauthorized access.
>
> **[1:32](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=92)** Secure architecture is the foundation that protects sensitive information, and it ensures that your AI system is robust against evolving threats.
>
> **[1:43](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=103)** Next is the minimal data collection.
>
> **[1:47](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=107)** While AI systems rely on data collecting only what's necessary, minimizes privacy risks, and reduces the attack surface by ensuring that data collection aligns strictly with the system's needs, businesses not only comply with data protection laws, but also limit exposure to malicious attacks.
>
> **[2:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=130)** Strong access controls ensure that sensitive data is protected from unauthorized users.
>
> **[2:17](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=137)** Techniques like MFA or multifactor authentication, role-based access permissions, and audit logging provide a secure framework for managing who can access the AI systems and its data, which helps prevent potential misuse.
>
> **[2:32](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=152)** Finally, end-to-end encryption ensures that data is protected both in transit and at [[Representational State Transfer (REST)|rest]].
>
> **[2:40](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=160)** Whether AI systems are processing large data sets, or making predictions based on live data, encryption ensures that this information remains secure and inaccessible to attackers.
>
> **[2:53](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=173)** These foundational principles provide the secure foundation necessary for building AI systems, that protect both data and user trust.
>
> **[3:03](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/foundational-principles-of-ai-system-design?u=76281980&t=183)** In the next part of this model, we will dive into the advanced principles that specifically address AI related risks and how to integrate security throughout the system lifecycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (7), [[Data Collection]] (4), [[Building Trust]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Cross-References:** later in (1), in the next (1)
> **Env Vars:** mfa (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Advanced principles of AI system design](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=0)** - [Instructor] Welcome back to the second part of our discussion on system design principles for AI [[Product Security]].
>
> **[0:06](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=6)** In this session, we are going to explore advanced principles, including AI-specific [[Threat Modeling]], secure code practices, [[DevSecOps]], and how AI-driven automation can play a pivotal role in preventing threats.
>
> **[0:20](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=20)** Let's start with the AI-specific threat modeling.
>
> **[0:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=24)** AI systems are uniquely vulnerable to risks like adversarial attacks, data poisoning, and leakage of sensitive training data.
>
> **[0:32](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=32)** Threat modeling helps us identify and prioritize these risks, allowing us to create tailored countermeasures to protect against them.
>
> **[0:40](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=40)** Adversarial attacks, for example, involve subtle manipulations of input data to fool AI models into making incorrect predictions.
>
> **[0:49](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=49)** One way to defend against this is by implementing robust input validation and anomaly detection mechanisms to ensure that predictions remain consistent and reliable.
>
> **[1:02](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=62)** [[Secure Coding]] practices are the foundation of any secure AI system.
>
> **[1:07](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=67)** During development, we must ensure that proper input validation is already done to prevent malicious data from affecting model integrity.
>
> **[1:18](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=78)** Then secondly, the training pipelines are shielded from tempering and unauthorized access.
>
> **[1:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=84)** Then last but not the least, only trusted libraries and frameworks are used to mitigate the risks of vulnerabilities.
>
> **[1:32](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=92)** Additionally, automated tools and peer code reviews can be instrumental in identifying security flaws early on, ensuring a solid base for the AI system before it reaches deployment.
>
> **[1:46](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=106)** Now, let's look at DevSecOps.
>
> **[1:48](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=108)** It is a critical component of modern AI development.
>
> **[1:52](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=112)** DevSecOps integrates security throughout the AI lifecycle, from model training to deployment.
>
> **[1:59](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=119)** This approach ensures that security isn't an afterthought, but a continuous part of the process.
>
> **[2:05](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=125)** Automated tools within DevSecOps monitor for compliance, analyze code for vulnerabilities, and validate models against predefined security criteria in real time.
>
> **[2:16](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=136)** By doing so, we minimize the risk of introducing flaws into the system and ensure that our models meet security standards throughout their life cycle.
>
> **[2:28](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=148)** AI-driven automation is revolutionizing security practices, especially when it comes to monitoring model drift and maintaining performance over time.
>
> **[2:38](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=158)** As AI models evolve and learn from new data, they can introduce vulnerabilities or performance issues.
>
> **[2:46](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=166)** This is where AI-driven security automation plays a critical role.
>
> **[2:51](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=171)** By automating the monitoring of the model performance and detecting model drift, security teams can quickly flag unauthorized behaviors, retrain models as needed, and ensure that the system remains secure and efficient and effective.
>
> **[3:08](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=188)** But there's an even more advanced approach we can leverage, AI-driven [[Red Teaming]].
>
> **[3:14](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=194)** Automated red teaming allows us to proactively test AI systems by simulating attacks and identifying potential vulnerabilities in real time.
>
> **[3:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=204)** As I had mentioned previously in the course, that there are many tools out there, for example, HiddenLayer and Splx, which are valuable in this area as well.
>
> **[3:36](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=216)** These tools can continuously simulate and assess threats, providing insights into potential vulnerabilities that can be patched before they are exploited.
>
> **[3:47](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=227)** By incorporating these advanced techniques, AI-specific threat modeling, secure code practices, DevSecOps, and AI-driven security automation, we can ensure that AI systems are not only secure, but resilient.
>
> **[4:02](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=242)** These strategies allow AI systems to adapt to new threats while maintaining peak performance and compliance.
>
> **[4:10](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=250)** AI-driven red teaming will significantly bolster our defenses, providing [[Real-Time]] simulations and proactive threat detection, ultimately preventing attacks before they even happen.
>
> **[4:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=264)** This makes AI-driven automation an essential tool for security teams, helping them stay ahead of the evolving threats and ensure that AI systems operate safely and ethically in production environments.
>
> **[4:38](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=278)** Secure system designed for AI is not just about protecting data, it's about creating an ecosystem where AI functions safely, reliably, and ethically in real-world applications.
>
> **[4:52](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/advanced-principles-of-ai-system-design?u=76281980&t=292)** Thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevSecOps]] (5), [[Threat Modeling]] (4), [[Red Teaming]] (3), [[Product Security]] (1), [[Secure Coding]] (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/next-steps?u=76281980&t=0)** - Congratulations on completing this course on AI system security foundations and proactive security for AI.
>
> **[0:08](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/next-steps?u=76281980&t=8)** Throughout this course, we have explored the critical aspects of building secure AI systems.
>
> **[0:15](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/next-steps?u=76281980&t=15)** From understanding adversarial risks to implementing governance frameworks, risk management and secure deployment strategies.
>
> **[0:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/next-steps?u=76281980&t=24)** And if there is one key takeaway, it is that AI system security is not a one-time effort, it's a continuous and evolving process that requires proactive and comprehensive strategies.
>
> **[0:40](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/next-steps?u=76281980&t=40)** By embedding [[Privacy]] by design, secure architecture and strong access controls, we can minimize risk from the start itself.
>
> **[0:50](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/next-steps?u=76281980&t=50)** Utilizing frameworks like ISO 42001, [[NIST]] AI [[Risk Management Framework (RMF)|Risk Management Framework]], and staying compliant with regulations like European AI Act, further strengthens the defenses, ensuring AI operates securely, ethically and in alignment with the organizational values.
>
> **[1:12](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/next-steps?u=76281980&t=72)** As tech leaders, we have the responsibility to implement these practices and lead our organizations towards secure, innovative [[AI Solutions]].
>
> **[1:24](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/next-steps?u=76281980&t=84)** By doing so, we will protect not only the integrity of our systems, but also the trust of our customers and stakeholders.
>
> **[1:33](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/next-steps?u=76281980&t=93)** Armed with this knowledge, you are now empowered to lead the charge in ensuring that your AI systems are not only effective, but secure, compliant and a strategic asset for your organization.
>
> **[1:50](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/next-steps?u=76281980&t=110)** Let's continue building AI with security, trust and [[Accountability]] at the core.
>
> **[1:56](https://www.linkedin.com/learning/ai-product-security-foundations-and-proactive-security-for-ai/next-steps?u=76281980&t=116)** Thank you for joining this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (1), [[NIST]] (1), [[Risk Management Framework (RMF)|Risk management framework]] (1), [[AI Solutions]] (1), [[Accountability]] (1)
> **Env Vars:** iso (1), nist (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Reet Kaur]]

## Skills Covered

- Secure Coding
- Artificial Intelligence (AI)
- AI Security

## Path Context

### In [[Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning]]
← [[Implement and Evaluate Cloud AI Solutions- Foundations of Responsible AI]] | **5 of 6** | [[AI Pricing and ROI- A Technical Breakdown]] →

## Part of

- [[Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning]]

## Related Courses

_Courses sharing skills:_

- [[Threat Modeling for AI-ML Systems]] — Artificial Intelligence (AI), AI Security
- [[Leveraging AI for Security Testing]] — Artificial Intelligence (AI), AI Security
- [[Artificial Intelligence and Application Security]] — Artificial Intelligence (AI), AI Security
- [[AI in Cybersecurity- The Future of Red Teaming and Blue Teaming]] — Artificial Intelligence (AI), AI Security
- [[Cybersecurity Awareness- AI]] — Artificial Intelligence (AI), AI Security

---

[↑ Back to top](#)