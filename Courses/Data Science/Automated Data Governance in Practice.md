---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: automated-data-governance-in-practice
url: "https://www.linkedin.com/learning/automated-data-governance-in-practice"
duration_minutes: 69
duration: 1h 9m
level: Intermediate
updated: 2/12/2025
learners: 13185
skills:
  - DevOps
  - Data Governance
  - Data Stewardship
  - Data Science
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFjDkSmENS-5A/learning-public-crop_675_1200/B4EZS4dWeGGgAc-/0/1738261489820?e=2147483647&amp;v=beta&amp;t=Yr9Codr5DJoQPeUXkYKhBnP9gJ9UzuDbZz222jrDW0k"
linkedin_topic: Data Science
learning_paths:
  - '[Mastering Data Governance and Ethics](../../Paths/Data%20Science/Learning%20Paths/Mastering%20Data%20Governance%20and%20Ethics.md)'
prev_courses:
  - '[Designing Data Governance](Designing%20Data%20Governance.md)'
next_courses:
  - '[Data Ethics- Watching Out for Data Misuse](Data%20Ethics-%20Watching%20Out%20for%20Data%20Misuse.md)'
path_nav: '[{"path":"Mastering Data Governance and Ethics","position":5,"total":9,"prev":"Designing Data Governance","next":"Data Ethics- Watching Out for Data Misuse"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/devops
  - skill/data-governance
  - skill/data-stewardship
  - skill/data-science
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Automated%20Data%20Governance%20in%20Practice.md)

![Automated Data Governance in Practice](https://media.licdn.com/dms/image/v2/D4E0DAQFjDkSmENS-5A/learning-public-crop_675_1200/B4EZS4dWeGGgAc-/0/1738261489820?e=2147483647&amp;v=beta&amp;t=Yr9Codr5DJoQPeUXkYKhBnP9gJ9UzuDbZz222jrDW0k)

# Automated Data Governance in Practice

> This introductory course on DataGovOps is designed to provide a solid understanding of the value of integrating data governance practices with DataOps methodologies. Join instructor Jonathan Reichental as he explores the principles of DataGovOps, focusing on how to ensure data quality, security, and compliance within agile and collaborative development environments. Plus, learn about the types of 

> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice) | 1h 9m | Intermediate | 13K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Governance-as-code](#governance-as-code)
  - [What you should know](#what-you-should-know)
- [**1. The Basics**](#1-the-basics) (3 videos)
  - [Data governance defined](#data-governance-defined)
  - [Exploring data operations (DataOps)](#exploring-data-operations-dataops)
  - [DataGovOps: Data governance meets DataOps](#datagovops-data-governance-meets-dataops)
- [**2. Functions of DataGovOps**](#2-functions-of-datagovops) (4 videos)
  - [Automating data governance functions](#automating-data-governance-functions)
  - [Meeting regulatory and compliance requirements](#meeting-regulatory-and-compliance-requirements)
  - [Data lineage and metadata management](#data-lineage-and-metadata-management)
  - [Monitoring and reporting](#monitoring-and-reporting)
- [**3. DataGovOps Solution Categories**](#3-datagovops-solution-categories) (6 videos)
  - [Automation](#automation)
  - [Collaboration](#collaboration)
  - [Integration](#integration)
  - [Data catalogs](#data-catalogs)
  - [Analytics](#analytics)
  - [Artificial intelligence in DataGovOps](#artificial-intelligence-in-datagovops)
- [**4. Implementing DataGovOps**](#4-implementing-datagovops) (5 videos)
  - [Implementation strategy](#implementation-strategy)
  - [Training](#training)
  - [Scaling DataGovOps](#scaling-datagovops)
  - [Communication strategy](#communication-strategy)
  - [DataGovOps implementation challenges](#datagovops-implementation-challenges)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing your DataGovOps learning journey](#continuing-your-datagovops-learning-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Governance-as-code](https://www.linkedin.com/learning/automated-data-governance-in-practice/governance-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/governance-as-code?u=76281980&t=0)** - Today, more than ever, organizations want data to deliver results, but they also want to manage the risks associated with it. A [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) framework can provide a successful pathway to achieve these goals. Yet many enterprises discover that data governance is manually intensive and often overly bureaucratic. Data governance operations, or data gov ops, can offer a transformational solution here. Through a [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) model, data gov ops streamlines data operations, improves [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), and enhances compliance requirements. So if you're looking to improve your data operations and manage data risks, join me, Dr. Jonathan Reichental as your guide to learn what data gov ops is, how it can help, and how you can implement it. If you're ready, I'm ready. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (3), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **Speakers:** - today (1)

#### [What you should know](https://www.linkedin.com/learning/automated-data-governance-in-practice/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/what-you-should-know?u=76281980&t=0)** - While I created this course for everyone from the data novice to the expert in any industry, you'll likely benefit from some foundational knowledge in [Data Management](../../Skills/Software%20Development/Data%20Management.md) and [Data Governance](../../Skills/Data%20Science/Data%20Governance.md). I don't think these are essential by any means, but consider taking one of the intro courses on these topics from the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library. The knowledge that is required coming into this course is an understanding of what data is, and the role it plays in organizations. If you're here with zero knowledge of data or information systems, you'll likely benefit from some LinkedIn Learning intro courses on these topics too. That said, the language in this course is deliberately easy to follow, as it's always my intention to help everyone learn topics, regardless of how technical they may be. So consider my recommendations and then proceed, and enjoy all the learnings and insights this course has to offer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1)
> **Definitions:** is an  (1)
> **Speakers:** - while (1)


### 1. The Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Data governance defined](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=0)** - In an increasingly digital and hyperconnected world, data has become a core lifeblood of organizations. Whether it's making timely decisions, improving healthcare outcomes, or driving innovation in [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md), data is an essential fuel powering today's digital economy. Even if an organization has just a few people, or it's global, [Data Management](../../Skills/Software%20Development/Data%20Management.md) is being employed. This means that at a minimum, basic tools and processes are being used to support the use, storage, and accessibility of data. However, it's now clear that data management alone is unlikely to unleash the potential of data for a company. It will take it a long way, but it may fall short of delivering on its promise, and it could even be a source of risk. Businesses are recognizing that to be truly data-driven, and foster a culture where data is a driver of success, requires more than just data management. At the heart of delivering the optimum value of data and appropriately managing any attendant risks is an additional layer of a capability called [Data Governance](../../Skills/Data%20Science/Data%20Governance.md). In simple terms, data governance is all about managing data well. Let's briefly look at what this governance capability is designed to deliver. Data has a lifecycle. In its basic form, it's essentially meaningless. Data must have context to become information. This information then drives actions, which can be used to develop insights,
>
> **[1:34](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=94)** enable processes, and inform decisions. To be useful, and to empower this lifecycle, we have to have confidence in the quality of the source data. This means ensuring that it's accurate and up to date, that it's available to the right people and systems at the right time, and that it's appropriately protected and regulated. These qualities can only be achieved through agreed and approved policies and processes, clear [Accountability](../../Skills/Data%20Science/Accountability.md), the right tools, and committed leadership. This is at the heart of what data governance helps to achieve. It requires some level of rigor, but adoption can span from modest formality to highly formal, depending on an organization's size, complexity, and needs. It's not an exaggeration to suggest that when data is managed well, it can be transformational to an organization. In the last few years, data governance has become a much higher priority for businesses in every industry. Subsequently, demand for skills and innovative tools are at an all time high. Done right, data governance can unleash the value of data in your business. So let's next look at some of the contemporary ways you could make that happen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (5), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (3), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Accountability](../../Skills/Data%20Science/Accountability.md) (1)
> **Definitions:** is an  (2), means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - in (1)

#### [Exploring data operations (DataOps)](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=0)** - Before there were data GovOps, there were [Software Development](../../Topics/Software%20Development.md) operations, or [DevOps](../../Topics/DevOps.md) and data operations, or DataOps. Let's look at how both of these informed the creation of data GovOps. Sometime between 2007 to 2008, a new movement emerged in response to the growing impatience with [Software Deployment](../../Skills/Data%20Science/Software%20Deployment.md) delays. These were often caused by the disconnect between those who wrote code, the developers, and IT operations, those who moved it into production. With an increasing focus on software driven innovation in the economy, organizations were hungry to iterate and deploy software solutions faster. Solving this bottleneck between the software development and the IT operation teams, departments that were typically separated functionally was an opportunity to create greater collaboration and automation. Indeed, redesigning how software move from development to production led to the DevOps movement, and today it's a popular method for software code management. Later around 2014, as data analytics for decision making and other business needs became increasingly prioritized in organizations, patients was running low with inefficiencies between data analysts and their technical providers, the data engineers. It could take weeks or months for these providers, for example, to get approvals and access to data, wait for available IT resources, and write and test requested queries. To solve this and inspired by DevOps, DataOps emerged.
>
> **[1:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=98)** Like DevOps, DataOps focuses on deeper collaboration between teams and the use of automation tools to improve the data pipeline, transforming raw data into meaningful form that can be analyzed. In particular, both practices use a [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md), a CI, and [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) CD approach with the elimination of silos and the merging of human and technical capabilities, data analysts and data engineers and others such as ITOps, and those responsible for [Data Security](../../Skills/Data%20Science/Data%20Security.md) use CI CD to quickly iterate and deploy needs. Rather than taking weeks or months, business needs can now be broken into smaller parts and shorter cycle times, delivering results as often as several times per day. With these remarkable efficiencies, the DataOps lifecycle can enable more innovation and experimentation with data sets. Quality is also improved as team goals are aligned and greater focus is placed on areas such as automation, monitoring, testing, validation, and feedback. DataOps uses automation to facilitate communication and coordination within and between teams. In addition, data requirements are fed into repeatable and often automated workflows that are transparent, efficient, monitorable, and measurable, and enable disparate teams to participate according to their skills and tool sets. Similar to DevOps, DataOps today is popular in all types of organizations and industries.
>
> **[3:14](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=194)** The need for high quality, reliable data analytics is greater than ever, and DataOps can help deliver that. Next, we'll see how data GovOps, the focus of this course is yet another opportunity to create governance, collaboration, and efficiencies that result in higher quality, lower risk data outcomes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (5), [Software Development](../../Topics/Software%20Development.md) (2), [Software Deployment](../../Skills/Data%20Science/Software%20Deployment.md) (1), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1)
> **Analogies:** such as (2), for example (1), similar to (1)
> **CLI Commands:** cd (2)
> **Speakers:** - before (1)

#### [DataGovOps: Data governance meets DataOps](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=0)** - We've seen how collaboration, automation, and [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and delivery have supercharged the output of development teams and data analysts. Moving to a model where teams that used to be separated by bureaucracies and inefficiencies are now merged and working closely together has resulted in big gains for all stakeholders. Can the same be now done with [Data Governance](../../Skills/Data%20Science/Data%20Governance.md)? This is largely what DataGovOps tries to achieve. Let's remind ourselves about what data governance is fundamentally trying to do. Data governance is a layer of oversight and structure that if implemented well can help all types of organizations optimize the value of their data. It establishes processes, policies, and standards that drive [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), accuracy, compliance, security, and accessibility. Data governance applies to the entire lifecycle of data from acquisition to storage and use, all the way through to disposal. I like to think of it as the way which data can be managed really well. While data governance can provide significant value to organizations, it does require a level of rigor that's manually intensive. In addition, many tasks such as monitoring, auditing, access control, and enforcement are prone to errors and can be time consuming. Functions like data compliance, [Security Management](../../Skills/Cybersecurity/Security%20Management.md), monitoring, and required collaboration with teams
>
> **[1:33](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=93)** such as developers, IT operations and security can create inefficiencies that slow down decision making and other benefits of timely data usage. While data governance offers many advantages, some have alluded to many businesses, improved approaches are welcomed. Taking lessons from [DevOps](../../Topics/DevOps.md) and DataOps, DataGovOps provides an approach to data governance that addresses its limitations, providing a better and faster way to complete governance tasks, including a reduction of errors. In fact, DataGovOps is only fully optimized when it integrates with DevOps and DataOps. At its core, DataGovOps is about automation across the data governance, value chain, and deeper collaboration and integration with other teams and processes. It can achieve and enhance the objectives of data governance without being inflexible and limiting innovation. At the same time, it can do a better job at policy enforcement and risk management, even as data volume and complexity grows rapidly, and industries face increasing regulatory requirements and scrutiny. DataGovOps also implements automation tools across data governance functions, which integrate with elements of DevOps, where co-development and deployment is accelerated, and DataOps, which drives faster results in the data pipeline. Other stakeholders in areas
>
> **[3:07](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=187)** such as security, compliance and [Privacy](../../Skills/Data%20Science/Privacy.md) are also engaged in more integrated collaboration. This environment creates the conditions for elevated data success in an organization. With DataGovOps, there's a lot to like. (chuckles)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (10), [DevOps](../../Topics/DevOps.md) (3), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1), [Security Management](../../Skills/Cybersecurity/Security%20Management.md) (1)
> **Analogies:** such as (3)
> **Definitions:** is a  (1)
> **Speakers:** - we (1)


### 2. Functions of DataGovOps

[↑ Back to Table of Contents](#table-of-contents)

#### [Automating data governance functions](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=0)** - Two main advantages of new technology are that it enables us to do things differently and to do things we couldn't do before. Information systems have, for example, completely changed what's possible and created new capabilities and remarkable efficiencies for all types of organizations. Automation in particular has had and continues to have a transformational impact on the world. As we see with the implementation of [DevOps](../../Topics/DevOps.md) and DataOps, the right kind of automation at the right time is achieving much better results. Specifically, desired outcomes are attained faster without compromising quality. If we apply the right kind of automation to [Data Governance](../../Skills/Data%20Science/Data%20Governance.md), the assumption is that we can improve upon its promise, as well as addressing some of its shortcomings. So, let's look at how the manual processes of data governance often occur. A data process starts with a request and flows through several steps to be addressed. For example, say a business user requests access to a sensitive dataset. The teams that might be required to review this requirement include those in security, data ownership, [System Administration](../../Skills/Network%20and%20System%20Administration/System%20Administration.md), compliance, and legal. As the request flows across these silo teams, it may get delayed for reasons, including time to seek approvals, low prioritization and handoff inefficiencies. Even when the request is fulfilled,
>
> **[1:34](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=94)** there can be mistakes made and compliance requirements might be missed. In other words, the request is achieved, but not without the possibility of shortcomings. We're trying to reduce risk, not create new risks. Keep in mind too, that this example is relatively simple compared to the complex data needs of businesses. With DataGovOps, we want to create a much more closely integrated and collaborative environment for teams and stakeholders involved in [Data Management](../../Skills/Software%20Development/Data%20Management.md). In addition, the context for the deeper engagement is automation that includes monitoring and [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and delivery. The CI/CD we saw with DevOps and DataOps. And improve communication benefits all aspects of this approach. DataGovOps optimizes for efficient operations. It uses automation to deliver in areas where manual processes are inherently problematic, even with the best intentions. Automation can guide governance processes so that they move along a logical pathway within an organization. Progress can be monitored, including ensuring policies are followed and enforced. Continuous measurement and evaluation of governance adherence can be established, enabling a closer to [Real-Time](../../Skills/Database%20Management/Real-Time.md) assessment of compliance. DataGovOps through automation, integration and collaboration can create the conditions to ensure
>
> **[3:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=189)** your data governance requirements are finally being achieved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (3), [DevOps](../../Topics/DevOps.md) (2), [System Administration](../../Skills/Network%20and%20System%20Administration/System%20Administration.md) (1), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1)
> **Analogies:** for example (2)
> **CLI Commands:** cd (1)
> **Definitions:** in other words (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** required to (1)
> **Speakers:** - two (1)

#### [Meeting regulatory and compliance requirements](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=0)** - In 1996, the United States Congress enacted the Health Insurance Portability and [Accountability](../../Skills/Data%20Science/Accountability.md) Act or HIPAA for short. Its purpose was to ensure that sensitive personal health information would not be disclosed without the permission and knowledge of the patient. It was a response to the rapidly increasing volume of personal health information, PHI, being captured, stored, and analyzed, particularly in the context of digital systems. All healthcare providers and related organizations that handle PHI are required to follow these regulations. Non-compliance can result in significant penalties, including both civil and criminal, which are calculated based on the level of negligence and harm caused. Fines range from a few hundred dollars to a couple of million, and imprisonment can be as high as 10 years. Bottom line, to meet HIPAA requirements, organizations handling health information within scope must have rigorous [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) in place. HIPAA is just one example of regulatory and compliance requirements that many industries must follow. Others include requirements for businesses that handle credit and debit cards. They must follow payment card industry [Data Security](../../Skills/Data%20Science/Data%20Security.md) standards or [PCI-DSS](../../Glossary/Standard/PCI%20DSS.md). Public companies must comply with the US-based Sarbanes-Oxley Act of 2002 or sox, in that they have specific [Financial Data](../../Skills/Software%20Development/Financial%20Data.md) reporting requirements.
>
> **[1:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=98)** For organizations that have regulatory and compliance requirements, and that list is pretty broad and growing, data governance is a valuable and successful approach. It provides a structured framework for managing all of this data. Central to this framework are data related policies, procedures, and standards created, approved, and deployed across an organization. Leaders and staff are expected to follow these when handling data, so it's essential to provide training and ongoing guidance. For example, [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) and protection could require specific requirements, such as the process for providing access to data, whether it needs to be encrypted, the rules on sharing, and what monitoring needs to be in place. Data governance also focuses on ensuring [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), like accuracy and completeness, a requirement of many regulations but, also, an obvious standard for any business trying to fully leverage the value of data. Further, a framework for data governance supports audit readiness and reporting and is an overall risk management support system. We can see that regulatory and compliance requirements are important and complex, and data governance is a meaningful way to ensure that needs are met. That said, deploying a framework does create a bureaucratic overhead and can be manually intensive. Fortunately, Data GovOps is introducing
>
> **[3:12](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=192)** automated and continuous [Data Management](../../Skills/Software%20Development/Data%20Management.md) that creates significant efficiencies in support of regulatory and compliance requirements. Later in this course, I will share how Data GovOps achieves this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (5), [Accountability](../../Skills/Data%20Science/Accountability.md) (1), [Data Security](../../Skills/Data%20Science/Data%20Security.md) (1), [Pci-dss](../../Glossary/Standard/PCI%20DSS.md) (1), [Financial Data](../../Skills/Software%20Development/Financial%20Data.md) (1)
> **Env Vars:** hipaa (3), phi (2), pci (1), dss (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (1), such as (1)
> **Cross-References:** later in (1)
> **Prerequisites:** required to (1)
> **Speakers:** - in (1)

#### [Data lineage and metadata management](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=0)** - Data is the fuel that's powering today's digital economy and it comes with many responsibilities. Not only do leaders want to ensure they're leveraging the benefits of data, but they have to diligently manage its risks too. To effectively govern data requires that we know a lot about it. Specifically, it's valuable to know data about data sets. We call this [Metadata](../../Skills/Web%20Development/Metadata.md). For example, who owns the data and what does it contain? We also want to know where data comes from, how it's transformed and where it goes, what we call [Data Lineage](../../Skills/Data%20Science/Data%20Lineage.md). Let's look at both of these. The administration, organization, and governance of metadata is appropriately called metadata management. Metadata tells us a lot about a data set. How we describe data is not limited. In fact, the more insights provided, the better the results. But typically, we include owner, origin, structure, format, currency, who can have access, and relationships with other data sets. Simply staring at a data set's contents is not going to provide the knowledge to take advantage of it and ensuring it's handled correctly. With metadata, data sets can be located, understood, managed, and governed. Organizations must be proactive to ensure that data sets contain metadata and that they're kept current. This can reside in metadata repositories
>
> **[1:34](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=94)** or be part of a data catalog where data set information helps staff discover and use an organization's data. Good metadata management is a sign of data maturity. The processes, policies, and standards that guide metadata management are part of [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) and are informed by business needs and compliance and regulatory requirements. Like metadata management, data lineage provides valuable and often essential insights on [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md). It's a process of tracking and visualizing the flow of data from its source through processing and onward to its final destination. It informs an organization about the role of data and the applications and processes it's involved in. The value of data lineage includes support for improved [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), troubleshooting issues, ensuring compliance and risk management. From a data governance perspective, data lineage ensures there's [Accountability](../../Skills/Data%20Science/Accountability.md) for data ownership and stewardship at each stage of the data lifecycle. In addition, knowing where data is flowing in terms of systems helps with access control, such that security policies can be monitored and enforced. Metadata management and data lineage are complimentary and often interdependent with regard to data gov ops. As fundamental components of data governance,
>
> **[3:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=188)** they become enablers of automation, supporting continuous tasks such as classification, access control, and compliance checking across workflows. They also support collaboration across teams in that they provide transparency and understanding about data assets and how they're being used. With the same insights served to the various data gov ops teams and stakeholders, errors can be reduced and quality can be increased. Data lineage and metadata management provide essential views of an organization's data ecosystem, enabling functions for an effective data gov ops framework.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (12), [Data Lineage](../../Skills/Data%20Science/Data%20Lineage.md) (6), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (3), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **Definitions:** we call this (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - data (1)

#### [Monitoring and reporting](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=0)** - Monitoring and reporting functions play essential roles in ensuring effective implementation and maintenance of [Data Governance](../../Skills/Data%20Science/Data%20Governance.md). While they're distinct capabilities, they do overlap, and each can be thought of as the different sides of the same coin. Specifically, the role of monitoring is to ensure that data-related processes, policies, and controls are tracked and followed. And reporting serves as a way to provide visibility and [Accountability](../../Skills/Data%20Science/Accountability.md) to those same areas. Let's look at each individually, and then I'll discuss their role in DataGovOps. With monitoring, we're interested in understanding the degree to which data governance functions are followed. For example, we want to know how well we're adhering to data compliance and regulatory requirements, such as HIPAA or the European Union's General Data Protection Rules, or GDPR. Monitoring tools can track data activities and, in some cases, detect violations in real time. With alerts, corrective action can then be taken in a timely manner. Monitoring is also important for security and [Privacy](../../Skills/Data%20Science/Privacy.md) requirements. A wide range of tools can detect suspicious activities, such as data leaks or policy violations. The output of monitoring a log file, for example, is a valuable source of input for audit needs. Overall, monitoring lowers organizational risks because it can promptly identify and surface threats and data issues.
>
> **[1:34](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=94)** On the other side of the coin, reporting is the companion to monitoring. It organizes and delivers [Data Management](../../Skills/Software%20Development/Data%20Management.md) insights, whether on or offline to business stakeholders. These reports can be available in real time or produced periodically depending on the business context. Common data governance reporting includes, unsurprisingly, evidence as requested by internal and external bodies that demonstrates compliance requirements. Reporting is also used to highlight the state of [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), including tracking issues such as errors and missing data. Policy enforcement and operational reporting provides trends over time that show how well the organization is performing relative to its data handling. Like all reporting, decision-makers benefit from the information they present. And the content can communicate all manner of messages to stakeholders, from the state of compliance to challenges and risks, and more. In DataGovOps, both monitoring and reporting are essential roles in support of successful data governance outcomes. Each is essential to compliance enforcement and risk management. And with automation, both can be performed in a continuous manner rather than periodic and manual. This quality alone supports timely mitigation and adherence to laws, regulations, and organizational policies. The communication aspects keep all stakeholders, including the development and data teams, aligned,
>
> **[3:10](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=190)** resulting in more informed and timely process and system [Decision-Making](../../Skills/Data%20Science/Decision-Making.md). Let's be clear about it. Without monitoring and reporting of data governance, we're effectively operating in the dark, and efforts to automate and create efficiencies through DataGovOps will be unsuccessful. Bottom line, prioritize monitoring and reporting if your goal is to increase the value of data and reduce its risks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (5), [Accountability](../../Skills/Data%20Science/Accountability.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **Analogies:** such as (3), for example (2)
> **Env Vars:** hipaa (1), gdpr (1)
> **Definitions:** is a  (1)
> **Speakers:** - monitoring (1)


### 3. DataGovOps Solution Categories

[↑ Back to Table of Contents](#table-of-contents)

#### [Automation](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=0)** - At the heart of data GovOps is the automation of [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) functions. What we're talking about here is the use of technology tools, code, and scripts to streamline data-related workflows and enforce policies, manage quality, and facilitate compliance and regulatory needs. Using this approach provides many advantages that include faster processes, less error-prone manual tasks, and greater governance efficiencies at every step of the data pipeline. Automation also helps organizations manage the increasing volume, variety, and velocity of data that has become a feature of our emergent hyperconnected and digital world. As the size, complexity, and diversity of data needs grow, manual processes can become unwieldy. Automation enables scalable governance that can support rapidly growing needs without escalating costs and compromising governance goals. Given the high demand for data governance automation, a rich and growing marketplace is available with tools, many now AI-enabled from major technology vendors, and a notable number of smaller and startup companies. When you're ready to implement automation, something I discuss in a later video, you'll have plenty of options available to you that can be purchased off the shelf. For now, let's take a closer look at the areas and ways that automation
>
> **[1:33](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=93)** can enhance your data governance program. Central to data governance is the implementation, compliance, and enforcement of data policies. Tools can automatically tag and classify data according to policies. This classification can then be used to support automated role-based access controls, or RBAC, [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) flags and alerts in [Real-Time](../../Skills/Database%20Management/Real-Time.md) when non-compliant activities are discovered. Equally, it can report in compliance adherence. Some tools even have a self-healing function that remediates compliance and quality issues. Automation can also support the enforcement of critical data retention and deletion policies. With security and [Privacy](../../Skills/Data%20Science/Privacy.md) being high priority, when appropriate, data can be automatically encrypted or masked. We know too that data governance is particularly concerned with supporting [Data Quality](../../Skills/Data%20Science/Data%20Quality.md). [Data Validation](../../Skills/Software%20Development/Data%20Validation.md) can be automated and continuous. Remember, a major benefit of automation to ensure that quality checks such as completeness and accuracy are carried out on data prior to its introduction to a production environment. In addition, data errors could often be identified anywhere in the data pipeline and stopped from entering processes and applications where it could cause issues. Of course, there are other important benefits
>
> **[3:07](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=187)** to the automation aspects of data GovOps. I've separated those out into other categories captured in the following videos, but as you can tell, automation represents a leap forward in the efficiencies and capabilities of data governance functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (6), [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **Env Vars:** rbac (1)
> **Analogies:** such as (1)
> **Speakers:** - at (1)

#### [Collaboration](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=0)** - While Data GovOps creates remarkable efficiencies through deploying automation across the data pipeline, success is unlikely with automation alone. In fact, while automation is a central function, Data GovOps only gets results when other roles, like collaboration, are implemented. Let's remember that Data GovOps is about streamlining entire data processes through tools, and integrating disparate, yet dependent, teams. This is where collaboration comes in. A data pipeline engages many stakeholders that include business users, data analysts, data engineers, software developers, security staff, legal personnel, and IT operations. To create the conditions for more data efficiencies, innovation and lower risk will certainly require tools and improved processes, but importantly, it will need deep, committed collaboration among participants. It's the backbone of Data GovOps. So let's explore a few approaches Data GovOps participants use to foster high-performance collaboration. First, consider organizing the staff involved in data workflows into a larger cross-functional team, as opposed to separate teams who just hand off work to others. This way, everyone becomes part of a single mission-aligned team, while focusing on their specific areas and strengths. They may have different supervisors and ultimately report
>
> **[1:34](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=94)** into different parts of the organization, but for the purposes of Data GovOps' framework, they're unified by shared responsibility and [Accountability](../../Skills/Data%20Science/Accountability.md). This design enables a more [agile](../../Skills/DevOps/Agile%20Development.md) response to business needs as well. Rather than being locked into rigid processes maintained by independent units, this single team can quickly agree on modifications to processes that achieve better results without compromising attendant regulatory requirements. Whether on the business or technical side, issues related to what is and isn't working well can be resolved more efficiently. Enhanced communication is also another effective approach to deep collaboration. Working closely together, team members can identify and escalate data issues and risks more quickly, improve vigilance around security and standards compliance, and ensure that feedback circulates such that process improvements can be quickly adopted. Working closely together means that overall [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) is improved too. Assuming team members are aligned, decisions about tool choices, process integration, policy modifications and governance controls can be rapidly discussed and adopted. What's most notable when placing emphasis on collaboration in Data GovOps is the opportunity to create a culture that gets results. With everyone aligned and working closely together, [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) can run more smoothly
>
> **[3:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=188)** and support behaviors where data is managed well and risks are considerably lowered.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Accountability](../../Skills/Data%20Science/Accountability.md) (1), [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - while (1)

#### [Integration](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=0)** - If collaboration is the backbone and automation is the execution, then integration is the connective tissue of DataGovOps. With integration, we want to create a technical environment where DataOps and [DevOps](../../Topics/DevOps.md) are incorporated, and where systems, data, and processes are seamlessly connected to each other. This not only creates the conditions for automation and collaboration, but also for efficiency and consistency across entire data workflows. In a typical enterprise environment, data flows within and between systems. In fact, it's not unusual for it to sometimes shuttle between complex environments, including flowing to and from external sources. Along the way, data is often modified and transformed, and it can be exposed to a lot of security challenges. For example, a dataset may need to be editable by one stakeholder group and only readable by another. In addition, if data is required to comply with some explicit regulation like HIPPA, all the systems it touches must meet requirements. Manual [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) is focused on ensuring that this data is handled according to established rules. Focusing on integration, however, automates and standardizes data flows to move from manual data governance to DataGovOps. This reduces the burden of human participation in data governance programs that often stifle and slow down processes.
>
> **[1:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=95)** When done right, integration enables data to smoothly travel among tools, platforms, and systems, while ensuring data governance policies are enforced in a continuous and automated manner. After all, integration is largely essential for automation. The marketplace is replete with solutions and support, both in the cloud and on-premises to make integration happen to the degree you specify. With integrated systems and processes, the ability to monitor data across workflows in real time is possible. As I discussed in a previous video, [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) is a feature of DataGovOps. This significantly improves an organization's ability to ensure the policies and standards are met. By extension, integration increases the quality of data, essential driver of data governance. Also, implementing enhanced integration across as many systems as possible for given data workflow supports greater centralized access control. For example, identity and access management, or IAM, applied across disparate systems can assure that only authorized individuals access certain data sets. Finally, integrated systems enhance the ability to produce comprehensive data governance reports and analytics. Having visibility across [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) and extracting insights even in near real time
>
> **[3:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=189)** can produce more detailed performance reports, and audit trails, and track and measure compliance. In summary, DataGovOps requires automation, collaboration, and integration to be successful. These three core components must be a focus as you think about the design and implementation of DataGovOps in your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (6), [DevOps](../../Topics/DevOps.md) (1), [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) (1), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **Env Vars:** hippa (1), iam (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - if (1)

#### [Data catalogs](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=0)** - Have you ever tried to find a specific data set at your work? You might get lucky and a colleague has the details you need, or you might be sent a link that points you directly to it. Then when you finally find and get access to the data set, do you know, for example, whether it's current, who maintains it, and how it's used? These all seem like reasonable needs, but sadly, finding and understanding data sets continues to be a source of struggle for stakeholders in too many businesses. Data catalogs are one proven approach to managing an organization's inventory of data assets. Like the term suggests, a data catalog is a centralized and searchable repository that lists details on data sets. It contains [Metadata](../../Skills/Web%20Development/Metadata.md), data that describes data, such as ownership, access rights, size, format, location, update frequency, uses, and a lot more. Data catalogs can also contain the lineage of data. That is, details on the life and journey of that data, like where it came from, how it's been processed and changed, and where it goes. This is valuable insight for troubleshooting [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) issues, for understanding its dependencies, and for supporting [Data Governance](../../Skills/Data%20Science/Data%20Governance.md), compliance, and risk management. In fact, data catalogs play a big role in data governance. They clearly support the primary goals of data discovery and data quality management.
>
> **[1:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=95)** In addition, the metadata in data catalogs ensures that data sets are properly classified based on use and sensitivity, and stored and accessed in accordance with regulatory requirements and organizational policies. The question that you're properly thinking about is, how are data catalogs populated and kept current? The most basic approach is a manual one, conducted by staff such as data owners, data engineers, business users, and data stewards, a role responsible for maintaining data quality. They directly input and modify information such as metadata and [Data Lineage](../../Skills/Data%20Science/Data%20Lineage.md) details. Reminders and flags can be used, as well as regular audits, to keep content current. But as you can imagine, manual updates can be less than optimum. Fortunately, automation is increasingly used, and it can take many [Forms](../../Skills/Web%20Development/Forms.md). Data catalogs can be integrated with data sources, or crawlers can periodically scan them, and when changes are made, updates are pushed to the catalog. DataGovOps is prioritizing automation of data catalog inputs and updates. Throughout the data pipeline, software tools identify changes and trigger automated updates to data set metadata and data lineage in the catalog. Automation is also enabling data catalogs to enforce governance policies, such as triggering approval workflows when access is requested.
>
> **[3:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=188)** In summary, data catalog currency and workflow automation, qualities of DataGovOps, are accelerating data operations and increasing data quality, all with limited impact to risk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (4), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (4), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (2), [Data Lineage](../../Skills/Data%20Science/Data%20Lineage.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Analogies:** such as (4), for example (1), imagine (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **Speakers:** - have (1)

#### [Analytics](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=0)** - When we discuss analytics relative to [Data Governance](../../Skills/Data%20Science/Data%20Governance.md), we must consider the topic from two distinct perspectives. One is to look at how data governance creates the conditions where data analysts and other stakeholders can have confidence in data for the purposes of deriving insights from it. The other is to use analytics to ensure that the data governance framework is performing as expected. For the purposes of data GovOps, we're most interested in the latter. This is because our assumption is that data governance when functioning optimally, is primarily in place to ensure that data is managed well. Its value is leveraged, and risks are reduced. At that point, performing data analytics spins off into its own topic. For this video, we'll focus on how analytics can ensure that the data governance program is effective. Through this lens, analytics is about monitoring [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), policies, and compliance. A feature of data GovOps is to enable [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md), such that issues can be identified, analyzed, and surfaced quickly. Through this capability, metrics around, say, missing values or duplicate records are delivered to [Real-Time](../../Skills/Database%20Management/Real-Time.md) [Dashboards](../../Skills/Data%20Science/Dashboards.md), enabling a rapid response, should it be warranted. Less urgent concerns can be produced as an on-demand or periodic report. Through continuous analysis of some or all data governance functions,
>
> **[1:34](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=94)** [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) around [Data Management](../../Skills/Software%20Development/Data%20Management.md) is enhanced. For example, analysis may reveal which capabilities are producing the best and worst oversight results. Every organization wants to avoid data governance as an impediment, and each wants to amplify where it brings the most value. Analytics enabled data governance can also ensure that stakeholders understand all aspects of data workflows, how data is processed and consumed, and where opportunities for automation may exist. By analyzing these insights, improvements can be made to the data governance framework. In addition, the increasing use of machine learning-based analytics can monitor for non-compliance. Predict where governance rule updates may be necessary or beneficial, and anticipate where problems may occur in the near future. [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md) can forecast how the organization may need to prepare for the future, responding to data growth or a changing regulatory environment. This function of data GovOps changes the team posture from reactive to proactive. Data analysts want to trust data and depend on and participate in data governance to produce high quality, secure compliant data sets and associated processes to get there. Data GovOps offers continuous automated and machine learning-based analytics to monitor report on support, and further define
>
> **[3:11](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=191)** and improve the functioning of the data governance framework.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (11), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1), [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **Analogies:** for example (1)
> **Speakers:** - when (1)

#### [Artificial intelligence in DataGovOps](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=0)** - Identifying and implementing opportunities for automation, integration, and overall process efficiencies are at the heart of what DataGovOps tries to achieve. As a historically manual and repetitive discipline, [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) provides abundant opportunities. It makes sense then that [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md), or AI, is increasingly adopted by the enterprise to drive improvements, augment human efforts, and get faster and more accurate results across the entire data governance landscape. The vendor community too is stepping up, with providers incorporating AI capabilities into their data governance solutions. Today's AI is well suited for accurately completing repetitive tasks that require levels of machine-learned judgements. For example, identifying anomalous patterns in [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) that suggest issues, ensure processes are followed and aligned with regulatory and compliance requirements, and classify and catalog data according to rules. Let me briefly note here that data governance is playing an increasingly important role in ensuring higher quality AI results. This video, though, will focus only on the role that AI is playing to make data governance more successful. While AI can be part of enhancing almost every area of DataGovOps, let's look at a few notable uses. In data governance, classifying and cataloging data and data sets is essential.
>
> **[1:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=95)** After all, if you don't know details about data, the [Metadata](../../Skills/Web%20Development/Metadata.md), and how to easily find data sets, the opportunities for value creation are decreased significantly. Achieving a viable and well maintained data catalog, however, is a highly manual process, a point that was discussed in a previous video. Along comes AI, and it's making the classification and cataloging of data a whole lot easier, including identification of data sets and their respective metadata from across an enterprise. And rather than a data catalog being relatively static and only updated periodically, AI tools can monitor and maintain metadata currency dynamically. Also, a big part of data governance is the creation of policies and procedural documentation in support of data requirements in an organization. These can be driven by business needs or externally from federal, state, and industry regulations. Traditionally, this documentation was created manually and intensive exercise requiring legal input, great writing skills, and rounds of approvals. Today with [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md), a new regulation, for example, can be uploaded to an AI tool, and a first draft of a policy can be created that considers all the requirements to ensure compliance with the regulation. Now, that's a process improvement that's welcomed. Finally, data governance is concerned
>
> **[3:07](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=187)** with data availability. A related policies focused on data retention requirements, backup processes, business continuity, and disaster recovery. AI is now incorporated into all of these and related areas. AI power tools can continuously monitor for data availability compliance, identify risks and predict potential failure scenarios, and propose measures to minimize downtime and data loss. I'm just skimming the surface of possibilities here, and it's worth recognizing that the role of AI in the enterprise is anticipated to expand significantly in the months and years to come. More of DataGoOps will be AI driven and subsequently automated, which will be a boon for those with data governance responsibilities. Finally, AI is certainly not yet a replacement and solution for every DataGovOps need. Humans will still play an essential role in areas such as resolving corner case issues, making judgements, problem solving, and determining goals and objectives. No doubt, while AI will reduce repetitive manual tasks, it's still far from making the human role obsolete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (9), [Metadata](../../Skills/Web%20Development/Metadata.md) (3), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - identifying (1)


### 4. Implementing DataGovOps

[↑ Back to Table of Contents](#table-of-contents)

#### [Implementation strategy](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=0)** - Now that you have a good understanding of DataGovOps and the considerable value it can bring to your organization, it's time to think about how it can be implemented. I'm going to make an assumption here that your business already has some [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) in place. It may be minimal, or you might have a sophisticated framework deployed. I remember early in my career, a former manager sharing that you can't automate something that isn't already manual. I think that's good advice here. If a data governance strategy doesn't yet exist, creating one is your best starting point. I also recommend checking out my [Learning Data Governance](Learning%20Data%20Governance.md) course to learn more about this. So with data governance in place, let's begin with an assessment of where opportunities for automation, integration, and collaboration exist. It's often a good approach to start small, look for early wins, and build from there. This way, you'll also learn about what's working well and where you can tweak and evolve the implementation plan. There's nothing stopping you from going all in: going for a big bang, so to speak. But it's a riskier approach and it will take longer to see results. Determining where DataGovOps may make sense includes assessing organizational capabilities and where human oversight must remain. It's about a balance between automation and ensuring the right level of human participation, ethical choices, and cultural fit. Remember, DataGovOps is about collaboration.
>
> **[1:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=95)** And if people are locked out of processes or insufficient checks and balances are not in place, it's possible that your best intentions may badly backfire. You have to engage stakeholders in the design, implementation, and operations of the plan. With the assessment complete, draft a plan and seek stakeholder input on its design. The plan must be clear on its purpose, the desired outcomes, and the metrics that will be used to measure its success. If these three qualities are not specific and agreed to, don't move forward. I've found in my career that it's worth the time to get the details right upfront. Later, not only will it be more expensive to make changes, but you might not have buy-in. And those essential for the plan to succeed may not be on the same page. There's a good chance roles and responsibilities will change as automation tools are acquired and introduced and as process evolve. So make sure that those people are identified early. Some will be required to do more, some less, and some will have completely different tasks. A new cross-functional DataGovOps team must be formed, and team members will need training, something I'll discuss in a later video. They'll also need to understand the new rules of the road, specifically how the enhanced collaboration will function. Fostering a high-performance data culture will help here too, with or without your journey to DataGovOps. A data culture can lead to significantly better data results
>
> **[3:11](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=191)** in your organization. Please consider my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course called Building a Data Culture to help you here. Lastly, after phases of the DataGovOps plan are implemented, conduct regular reviews. A DataGovOps mindset is all about [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) and improvement. Ensure that you're getting results, that data governance policies are being met, and automation is meeting and exceeding goals. Of course, where there are shortfalls, look to fix and enhance them. With a diligent and participatory approach to implementing DataGovOps, data governance and operations should experience notable efficiencies, reduced manual effort, and lowered risks. Robust data automation, monitoring, and collaboration will keep your organization compliant and humming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (6), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) (1)
> **CLI Commands:** make (4)
> **Prerequisites:** required to (1)
> **Speakers:** - now (1)

#### [Training](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=0)** - Expecting staff to be successful at their work without providing necessary and sufficient training is unfair, and will only make you and the staff member frustrated. First of all, the organization won't get the results it wants. It's a lose-lose situation, and it happens all too often, particularly with new initiatives. So, as you consider your data GovOps implementation, let's make sure that training is a priority. In fact, in the planning stages, training requirements should be already assessed and the steps to achieve them must be documented and agreed upon. Training can be provided in modular format, and consideration should be given to personalization, given the diverse nature of the [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) field. Automating data governance is complex, and as I've discussed, there are many different kinds of roles. Stakeholders may need to learn completely new skills, or they may only need to fill some gaps. Team members with primary roles and responsibilities in the new data GovOps organization must fully understand what data governance is and how it works, and the data policies, regulations, and compliance business needs. If not, consider this prerequisite training before a stakeholder can assume a role in data GovOps. Anyone working in the data governance space, like an IT professional, data analyst, data steward, security engineer, lawyer, auditor, and business leader, need to understand some [Data Management](../../Skills/Software%20Development/Data%20Management.md)
>
> **[1:34](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=94)** and quality control fundamentals. These include areas such as storage, [Metadata](../../Skills/Web%20Development/Metadata.md) management, standards, pipelines, lineage, basic [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md), monitoring, [Cybersecurity](../../Topics/Cybersecurity.md), and access control. A subset of these team members, those closest to the data GovOps processes, must become proficient with a wide variety of automation technologies and techniques. These may include pipeline orchestration and automation, [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and delivery, data cataloging, monitoring, reporting, and issue resolution. A big part of any data GovOps implementation will, of course, be focused on the tools that the organization deploys. With a large number of vendors and capabilities now available, those implemented will require necessary training. Training doesn't end when data GovOps is fully deployed. After all, continuous data education is a component of a thriving data culture. Organizations should be prepared for ongoing learning that includes knowledge refreshers, simulated scenarios to practice issue resolution, enhanced collaboration skills, new tools as they're deployed, and being able to support changes resulting from continuous improvements and the regulatory environment. It's hard to imagine how data GovOps can be successful without making education a priority at the outset and ongoing.
>
> **[3:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=189)** Quality outcomes can only be expected if an organization invests in team members so they're knowledgeable, empowered, and inspired through their skills to make a difference.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (4), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), imagine (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - expecting (1)

#### [Scaling DataGovOps](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=0)** - Leveraging and optimizing the benefits of data while also managing its risks cannot be fully achieved if a siloed approach is adopted. Today for example, most organizations want to benefit from data-driven insights, and it's a competitive requirement for many. Certainly, any amount of [Data Management](../../Skills/Software%20Development/Data%20Management.md) and governance is going to be valuable. However, if only one or a few departments implement systems, processes, and policies, sizable and limiting gaps will continue to exist across the enterprise. For maximum positive impact, data efforts must be scaled to every part of the business, and that includes data gov ops. Foundationally, data must be viewed and managed as an enterprise-wide resource. Minimally, manual and repeatable processes must exist that enable data to flow across systems and business functions. We can't begin to consider automation without a data strategy and holistic approach. Following this, a [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) program must be defined. The degree to which explicit standards are established and policies are clearly documented will have an impact on scaling automation later. Efficiencies really begin when data ops is deployed. This means using automation and collaboration in data workflows to streamline and speed up data management and analysis. While data gov ops can be deployed in the absence of data ops,
>
> **[1:33](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=93)** it will face notable limitations of efficiency, speed, and flexibility. It can work in small organizations, but larger enterprises will experience significant headwinds, particularly as their data needs grow and they want to scale. And make no mistake, in the months and years ahead, data will continue to explode and scale along with data requests from staff. Compliance and regulatory requirements will continue to evolve too. A big challenge in scaling both data ops and data gov ops is gaining enterprise acceptance. Surprisingly, still today, many leaders and staff lack confidence in their organization's data efforts, particularly in the reliability of internal data. This absence of trust reduces support from essential stakeholders. To solve this, change management must be a focus, including engaging the right people at the right time, providing continuous training, communicating meaningful benefits, honest limitations, and ongoing metrics, and demonstrating results along the way. Stakeholders must clearly see the connection between data gov ops efforts, and outcomes. Staff involved in implementation and operations must also demonstrate that they're experienced and qualified to achieve credibility. This sometimes requires, for example, hiring new talent, collaborating with external vendors, and providing customized technical training
>
> **[3:07](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=187)** to internal teams. [Organizational Culture](../../Skills/Data%20Science/Organizational%20Culture.md) in general can make or break any data initiatives. The data on this is pretty clear and it's the biggest reason why data efforts fail. Understanding how a data culture can be fostered is a complex but necessary field. With most efforts, a determining factor in whether a program stalls or succeed is the degree of leadership support. Certainly the C-suite has to be on board, but practically the data governance board, the DGB or equivalent must be deeply engaged both in the implementation and in the ongoing operations and scaling of the data gov ops efforts. Finally, scaling data gov ops means building flexibility into the data governance program, allowing the organization to shape efforts as data and its needs grow. Acquired automation tools should align with this too and manage increasing complexity and demand thoughtfully. Considering the recommendations in this video can enable your data gov ops to continue to deliver efficiencies as the future requires data governance agility, and scale.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (3), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (2), [Organizational Culture](../../Skills/Data%20Science/Organizational%20Culture.md) (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Env Vars:** dgb (1)
> **Definitions:** is a  (1)
> **Speakers:** - leveraging (1)

#### [Communication strategy](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=0)** - Communication plays a central and demanding role in [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) and Data GovOps, as this topic really is a team sport. Activities traverse department boundaries as data workflows are often required to touch stakeholders, such as IT, lawyers, auditors, software developers, data analysts, and business end users. Without quality communications data governance can be impeded, tasks can be duplicated, issues can be missed, and quality insights may not surface. Communication issues can occur often in poorly executed Data GovOps because the teams that must work together have historically organized themselves in an isolated manner, retreating into the complexity of their own work and tools. Teams are used to receiving requests, processing them, and then delivering them back to the requester. For example, a VP of sales requests a completely new report. The request makes its way to the data analyst team who in turn have to request access to certain datasets. The security team responsible for access control may then need to check with legal. At each stop the request likely gets queued up. The data analyst team may be ready, but it doesn't mean the security team has capacity. The net result is that not only is the business requester frustrated, but so is everyone involved.
>
> **[1:33](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=93)** Of course, fixing these inefficiencies is at the heart of Data GovOps, but you can quickly see how automation, integration, and standardization are not enough to get results. In fact, automation can sometimes result in amplifying functional silos. Teams must coordinate, collaborate, and communicate in ways they haven't had to before. There must be an overt communication strategy and plan developed and executed. They must address communications between data governance team members and with the business. Fortunately, Data GovOps can lend itself to enhanced communications through several strategies, providing request and issue visibility to all team members, enabling transparency to [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md), and requiring participation in the orchestration of processes, both manual and automated. Metrics too are an important form of communication. Silo teams become collaborators, adding deliberate communication practices into their operations. To get to high performing communications teams must agree and understand everyone's roles and responsibilities. For example, liaisons, particularly between the business and technology functions, are helpful, and the data steward role is best suited. Team members must also share and regularly update their understanding of team objectives and goals and establish communication channels. Frequent in-person or virtual meetings are useful,
>
> **[3:06](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=186)** which only involve representatives and not the entire team. Meetings, as we can all attest, may be a time waste if a person doesn't absolutely need to be there. Use these meetings to gather feedback and make continuous improvements. Training is also a place where communications can take place. It's a time when terminology can be agreed, where culture can be fostered, challenges can be elevated, and process improvements can be understood and deployed. Clear documented guidelines complement training to ensure consistent team practices. Finally, an area I've always been a fan of, is periodic celebrations. This is an opportunity to reinforce appreciation for teamwork and communications, bring stakeholders together to recognize their efforts and milestones, highlight best practices, and build a positive collaborative culture. Done authentically, modest team celebrations can motivate teams and remind everyone why their work is valuable. Ensuring good communications in your Data GovOps program will likely provide immense value in helping your organization reach its data governance goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (4), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Prerequisites:** required to (1)
> **Speakers:** - communication (1)

#### [DataGovOps implementation challenges](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=0)** - Succeeding in implementing DataGovOps is certainly no walk in the park. After all, it requires the integration of existing [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) practices, with code, automation, and collaboration among disparate teams. It also assumes some efficiency in existing data ops. Having both functioning data governance and data ops in place is already a hefty serving of prerequisites before DataGovOps can be considered. They don't need to be perfect, but they do need to be at a place where layering automation on top is doable. Additionally, to have any chance of success, DataGovOps and data governance efforts must have strong and visible leadership support. Let's look at a few of the challenges you may face, and how you can overcome them. A common issue experienced by many organizations is a general resistance to change. A full exploration of why change presents such a hurdle is beyond the scope of this course, but often at the heart of the problem are feelings from staff that familiarity is preferable over uncertainty, at least in the short term, and a skepticism that the change is even worthwhile. Resistance, if not dealt with, will cause collaboration issues, pushback, and delays, and could even stop meaningful progress. Depending on roles in place in the organization, DataGovOps may have notable impacts to existing processes, policies, and workflows. Change can be managed by engaging
>
> **[1:33](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=93)** those impacted in the process, and then frequently demonstrating positive results. In other words, show team members that the change is worth it. Change can prosper if the right culture has been fostered. An organization without a strong data-driven culture will struggle with leaps in [Data Management](../../Skills/Software%20Development/Data%20Management.md) and governance sophistication. That said, data culture can be fostered over time by integrating it into team member responsibilities and expectations, and by having leadership consistently demonstrate strong data culture behaviors, and support. Another issue with implementation is a lack of necessary organizational skills and expertise. A few people at the center of their work will need to understand data governance, data ops, [DevOps](../../Topics/DevOps.md), and specialized tools. There will be many who need a variety of supporting skills that hinge off of these two, and even more will require some [Data Literacy](../../Skills/Data%20Science/Data%20Literacy.md). Getting to the right skills may require intensive training for existing staff, hiring new talent, and working with external partners. DataGovOps is seldom suitable for a go-it-alone strategy. The technical requirements for deploying DataGovOps across the organization may have constraints, such as insufficient investment, and data silos that are difficult to access and integrate. Concerns about [Privacy](../../Skills/Data%20Science/Privacy.md) and diminished control over access may cause department resistance too. Solving these issues may require
>
> **[3:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=188)** a combination of investment advocacy, system upgrades and replacements, demonstrating competency in managing security, and careful diplomacy to integrate holdouts of the plan. I'll share one last note with you, don't let these challenges dissuade you. Understanding what your organization may confront in a DataGovOps implementation will enable you and your teams to better prepare and mitigate for the hurdles that may arise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (4), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1), [DevOps](../../Topics/DevOps.md) (1), [Data Literacy](../../Skills/Data%20Science/Data%20Literacy.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Definitions:** is a  (2), in other words (1)
> **Analogies:** such as (1)
> **Speakers:** - succeeding (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing your DataGovOps learning journey](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=0)** - Are you convinced yet that DataGovOps is right for your organization? I really hope that this introductory course has helped you further understand the topic, and it's provided you and your team with the right input to take the next steps. For sure, if you're looking to create efficiencies in your [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) efforts, choosing the right level of automation, integration, standardization, and deeper collaboration could very well deliver much higher-performing results. DataGovOps can bring rigor, speed, and greater accuracy to your [Data Management](../../Skills/Software%20Development/Data%20Management.md) requirements, while ensuring that your organization meets its compliance, security, and [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) targets. It can also free up teams, such as data analysts and stewards, [Cybersecurity](../../Topics/Cybersecurity.md) and IT professionals from manual tasks so they can work in higher-value efforts. Bottom line, DataGovOps solves many of the organizational frustrations and overheads that data governance presents in its attempt to better manage data. During this course, I mentioned additional courses that will benefit your learning journey. I recommend both my [Learning Data Governance](Learning%20Data%20Governance.md) and my Building a Data-Driven Culture courses right here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. Beyond my offerings, the LinkedIn Learning Catalog also has impressive [Data Science](../../Topics/Data%20Science.md) and related courses that are worth checking out too. Further, if you want to go much deeper on data governance, check out my book "Data Governance for Dummies", which you can find online or from your favorite brick-and-mortar bookstore.
>
> **[1:34](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=94)** Since DataGovOps is highly software-driven, I recommend exploring innovative data governance automation tools, and DataGovOps solutions that are available. These vendor websites provide a wealth of knowledge on the topic, and of course, the many ways each can help you. Finally, consider joining and participating in one of the many organizations focused on data management and governance. Here, you can learn about the latest developments in the field and connect with other passionate professionals. I also encourage you to reach out to me via LinkedIn and follow me on social channels. It's been a pleasure to be your guide in this course. I wish you abundant success in all your efforts. Thank you, and good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (6), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (2), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - are (1)


## Instructor

- [Jonathan Reichental](../../Instructors/Data%20Science/Jonathan%20Reichental.md)

## Skills Covered

- DevOps
- Data Governance
- Data Stewardship
- Data Science

## Path Context

### In [Mastering Data Governance and Ethics](../../Paths/Data%20Science/Learning%20Paths/Mastering%20Data%20Governance%20and%20Ethics.md)
← [Designing Data Governance](Designing%20Data%20Governance.md) | **5 of 9** | [Data Ethics- Watching Out for Data Misuse](Data%20Ethics-%20Watching%20Out%20for%20Data%20Misuse.md) →

## Appears In

- [Mastering Data Governance and Ethics](../../Paths/Data%20Science/Learning%20Paths/Mastering%20Data%20Governance%20and%20Ethics.md)

## Related Courses

_Courses sharing skills:_

- [Data Steward Foundations](Data%20Steward%20Foundations.md) — Data Governance, Data Stewardship
- [Advanced SQL for Data Science- Time Series](Advanced%20SQL%20for%20Data%20Science-%20Time%20Series.md) — Data Science
- [Lessons from Data Scientists](Lessons%20from%20Data%20Scientists.md) — Data Science
- [Big Data in the Age of AI](Big%20Data%20in%20the%20Age%20of%20AI.md) — Data Science
- [A Day In The Life Of A Data Scientist](A%20Day%20In%20The%20Life%20Of%20A%20Data%20Scientist.md) — Data Science

---

[↑ Back to top](#)