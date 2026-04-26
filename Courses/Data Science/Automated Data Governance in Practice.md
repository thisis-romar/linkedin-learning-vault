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
  - '[[Mastering Data Governance and Ethics]]'
prev_courses:
  - '[[Designing Data Governance]]'
next_courses:
  - '[[Data Ethics- Watching Out for Data Misuse]]'
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
created: 2026-04-21
---

![Automated Data Governance in Practice](https://media.licdn.com/dms/image/v2/D4E0DAQFjDkSmENS-5A/learning-public-crop_675_1200/B4EZS4dWeGGgAc-/0/1738261489820?e=2147483647&amp;v=beta&amp;t=Yr9Codr5DJoQPeUXkYKhBnP9gJ9UzuDbZz222jrDW0k)

# Automated Data Governance in Practice

> This introductory course on DataGovOps is designed to provide a solid understanding of the value of integrating data governance practices with DataOps methodologies. Join instructor Jonathan Reichental as he explores the principles of DataGovOps, focusing on how to ensure data quality, security, and compliance within agile and collaborative development environments. Plus, learn about the types of 

> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice) | 1h 9m | Intermediate | 13K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Jonathan Reichental]]

## Skills Covered

- DevOps
- Data Governance
- Data Stewardship
- Data Science

## Table of Contents

### Introduction

#### Governance-as-code
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/governance-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/governance-as-code?u=76281980&t=0)** - Today, more than ever, organizations want data to deliver results, but they also want to manage the risks associated with it.
>
> **[0:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/governance-as-code?u=76281980&t=8)** A data governance framework can provide a successful pathway to achieve these goals.
>
> **[0:13](https://www.linkedin.com/learning/automated-data-governance-in-practice/governance-as-code?u=76281980&t=13)** Yet many enterprises discover that data governance is manually intensive and often overly bureaucratic.
>
> **[0:21](https://www.linkedin.com/learning/automated-data-governance-in-practice/governance-as-code?u=76281980&t=21)** Data governance operations, or data gov ops, can offer a transformational solution here.
>
> **[0:27](https://www.linkedin.com/learning/automated-data-governance-in-practice/governance-as-code?u=76281980&t=27)** Through a continuous delivery model, data gov ops streamlines data operations, improves data quality, and enhances compliance requirements.
>
> **[0:36](https://www.linkedin.com/learning/automated-data-governance-in-practice/governance-as-code?u=76281980&t=36)** So if you're looking to improve your data operations and manage data risks, join me, Dr. Jonathan Reichental as your guide to learn what data gov ops is, how it can help, and how you can implement it.
>
> **[0:50](https://www.linkedin.com/learning/automated-data-governance-in-practice/governance-as-code?u=76281980&t=50)** If you're ready, I'm ready.
>
> **[0:51](https://www.linkedin.com/learning/automated-data-governance-in-practice/governance-as-code?u=76281980&t=51)** Let's go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - today (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/what-you-should-know?u=76281980&t=0)** - While I created this course for everyone from the data novice to the expert in any industry, you'll likely benefit from some foundational knowledge in data management and data governance.
>
> **[0:12](https://www.linkedin.com/learning/automated-data-governance-in-practice/what-you-should-know?u=76281980&t=12)** I don't think these are essential by any means, but consider taking one of the intro courses on these topics from the LinkedIn Learning Library.
>
> **[0:21](https://www.linkedin.com/learning/automated-data-governance-in-practice/what-you-should-know?u=76281980&t=21)** The knowledge that is required coming into this course is an understanding of what data is, and the role it plays in organizations.
>
> **[0:28](https://www.linkedin.com/learning/automated-data-governance-in-practice/what-you-should-know?u=76281980&t=28)** If you're here with zero knowledge of data or information systems, you'll likely benefit from some LinkedIn Learning intro courses on these topics too.
>
> **[0:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/what-you-should-know?u=76281980&t=38)** That said, the language in this course is deliberately easy to follow, as it's always my intention to help everyone learn topics, regardless of how technical they may be.
>
> **[0:49](https://www.linkedin.com/learning/automated-data-governance-in-practice/what-you-should-know?u=76281980&t=49)** So consider my recommendations and then proceed, and enjoy all the learnings and insights this course has to offer.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - while (1)


### 1. The Basics

#### Data governance defined
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=0)** - In an increasingly digital and hyperconnected world, data has become a core lifeblood of organizations.
>
> **[0:07](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=7)** Whether it's making timely decisions, improving healthcare outcomes, or driving innovation in artificial intelligence, data is an essential fuel powering today's digital economy.
>
> **[0:19](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=19)** Even if an organization has just a few people, or it's global, data management is being employed.
>
> **[0:26](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=26)** This means that at a minimum, basic tools and processes are being used to support the use, storage, and accessibility of data.
>
> **[0:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=35)** However, it's now clear that data management alone is unlikely to unleash the potential of data for a company.
>
> **[0:41](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=41)** It will take it a long way, but it may fall short of delivering on its promise, and it could even be a source of risk.
>
> **[0:49](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=49)** Businesses are recognizing that to be truly data-driven, and foster a culture where data is a driver of success, requires more than just data management.
>
> **[1:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=60)** At the heart of delivering the optimum value of data and appropriately managing any attendant risks is an additional layer of a capability called data governance.
>
> **[1:11](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=71)** In simple terms, data governance is all about managing data well.
>
> **[1:16](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=76)** Let's briefly look at what this governance capability is designed to deliver.
>
> **[1:20](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=80)** Data has a lifecycle.
>
> **[1:22](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=82)** In its basic form, it's essentially meaningless.
>
> **[1:26](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=86)** Data must have context to become information.
>
> **[1:29](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=89)** This information then drives actions, which can be used to develop insights, enable processes, and inform decisions.
>
> **[1:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=98)** To be useful, and to empower this lifecycle, we have to have confidence in the quality of the source data.
>
> **[1:44](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=104)** This means ensuring that it's accurate and up to date, that it's available to the right people and systems at the right time, and that it's appropriately protected and regulated.
>
> **[1:57](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=117)** These qualities can only be achieved through agreed and approved policies and processes, clear accountability, the right tools, and committed leadership.
>
> **[2:07](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=127)** This is at the heart of what data governance helps to achieve.
>
> **[2:12](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=132)** It requires some level of rigor, but adoption can span from modest formality to highly formal, depending on an organization's size, complexity, and needs.
>
> **[2:23](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=143)** It's not an exaggeration to suggest that when data is managed well, it can be transformational to an organization.
>
> **[2:31](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=151)** In the last few years, data governance has become a much higher priority for businesses in every industry.
>
> **[2:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=158)** Subsequently, demand for skills and innovative tools are at an all time high.
>
> **[2:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=165)** Done right, data governance can unleash the value of data in your business.
>
> **[2:50](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-governance-defined?u=76281980&t=170)** So let's next look at some of the contemporary ways you could make that happen.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), means that (1), is a  (1)
> **Code Keywords:** let (2), protected (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - in (1)

#### Exploring data operations (DataOps)
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=0)** - Before there were data GovOps, there were software development operations, or DevOps and data operations, or DataOps.
>
> **[0:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=8)** Let's look at how both of these informed the creation of data GovOps.
>
> **[0:13](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=13)** Sometime between 2007 to 2008, a new movement emerged in response to the growing impatience with software deployment delays.
>
> **[0:22](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=22)** These were often caused by the disconnect between those who wrote code, the developers, and IT operations, those who moved it into production.
>
> **[0:31](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=31)** With an increasing focus on software driven innovation in the economy, organizations were hungry to iterate and deploy software solutions faster.
>
> **[0:41](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=41)** Solving this bottleneck between the software development and the IT operation teams, departments that were typically separated functionally was an opportunity to create greater collaboration and automation.
>
> **[0:54](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=54)** Indeed, redesigning how software move from development to production led to the DevOps movement, and today it's a popular method for software code management.
>
> **[1:05](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=65)** Later around 2014, as data analytics for decision making and other business needs became increasingly prioritized in organizations, patients was running low with inefficiencies between data analysts and their technical providers, the data engineers.
>
> **[1:21](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=81)** It could take weeks or months for these providers, for example, to get approvals and access to data, wait for available IT resources, and write and test requested queries.
>
> **[1:33](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=93)** To solve this and inspired by DevOps, DataOps emerged.
>
> **[1:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=98)** Like DevOps, DataOps focuses on deeper collaboration between teams and the use of automation tools to improve the data pipeline, transforming raw data into meaningful form that can be analyzed.
>
> **[1:52](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=112)** In particular, both practices use a continuous integration, a CI, and continuous delivery CD approach with the elimination of silos and the merging of human and technical capabilities, data analysts and data engineers and others such as ITOps, and those responsible for data security use CI CD to quickly iterate and deploy needs.
>
> **[2:16](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=136)** Rather than taking weeks or months, business needs can now be broken into smaller parts and shorter cycle times, delivering results as often as several times per day.
>
> **[2:27](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=147)** With these remarkable efficiencies, the DataOps lifecycle can enable more innovation and experimentation with data sets.
>
> **[2:34](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=154)** Quality is also improved as team goals are aligned and greater focus is placed on areas such as automation, monitoring, testing, validation, and feedback.
>
> **[2:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=165)** DataOps uses automation to facilitate communication and coordination within and between teams.
>
> **[2:52](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=172)** In addition, data requirements are fed into repeatable and often automated workflows that are transparent, efficient, monitorable, and measurable, and enable disparate teams to participate according to their skills and tool sets.
>
> **[3:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=188)** Similar to DevOps, DataOps today is popular in all types of organizations and industries.
>
> **[3:14](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=194)** The need for high quality, reliable data analytics is greater than ever, and DataOps can help deliver that.
>
> **[3:22](https://www.linkedin.com/learning/automated-data-governance-in-practice/exploring-data-operations-dataops?u=76281980&t=202)** Next, we'll see how data GovOps, the focus of this course is yet another opportunity to create governance, collaboration, and efficiencies that result in higher quality, lower risk data outcomes.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), for example (1), similar to (1)
> **CLI Commands:** cd (2)
> **Code Keywords:** let (1)
> **Speakers:** - before (1)

#### DataGovOps: Data governance meets DataOps
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=0)** - We've seen how collaboration, automation, and continuous integration and delivery have supercharged the output of development teams and data analysts.
>
> **[0:10](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=10)** Moving to a model where teams that used to be separated by bureaucracies and inefficiencies are now merged and working closely together has resulted in big gains for all stakeholders.
>
> **[0:22](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=22)** Can the same be now done with data governance?
>
> **[0:25](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=25)** This is largely what DataGovOps tries to achieve.
>
> **[0:30](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=30)** Let's remind ourselves about what data governance is fundamentally trying to do.
>
> **[0:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=35)** Data governance is a layer of oversight and structure that if implemented well can help all types of organizations optimize the value of their data.
>
> **[0:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=45)** It establishes processes, policies, and standards that drive data quality, accuracy, compliance, security, and accessibility.
>
> **[0:55](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=55)** Data governance applies to the entire lifecycle of data from acquisition to storage and use, all the way through to disposal.
>
> **[1:04](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=64)** I like to think of it as the way which data can be managed really well.
>
> **[1:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=68)** While data governance can provide significant value to organizations, it does require a level of rigor that's manually intensive.
>
> **[1:17](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=77)** In addition, many tasks such as monitoring, auditing, access control, and enforcement are prone to errors and can be time consuming.
>
> **[1:27](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=87)** Functions like data compliance, security management, monitoring, and required collaboration with teams such as developers, IT operations and security can create inefficiencies that slow down decision making and other benefits of timely data usage.
>
> **[1:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=105)** While data governance offers many advantages, some have alluded to many businesses, improved approaches are welcomed.
>
> **[1:54](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=114)** Taking lessons from DevOps and DataOps, DataGovOps provides an approach to data governance that addresses its limitations, providing a better and faster way to complete governance tasks, including a reduction of errors.
>
> **[2:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=129)** In fact, DataGovOps is only fully optimized when it integrates with DevOps and DataOps.
>
> **[2:17](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=137)** At its core, DataGovOps is about automation across the data governance, value chain, and deeper collaboration and integration with other teams and processes.
>
> **[2:28](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=148)** It can achieve and enhance the objectives of data governance without being inflexible and limiting innovation.
>
> **[2:36](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=156)** At the same time, it can do a better job at policy enforcement and risk management, even as data volume and complexity grows rapidly, and industries face increasing regulatory requirements and scrutiny.
>
> **[2:50](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=170)** DataGovOps also implements automation tools across data governance functions, which integrate with elements of DevOps, where co-development and deployment is accelerated, and DataOps, which drives faster results in the data pipeline.
>
> **[3:05](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=185)** Other stakeholders in areas such as security, compliance and privacy are also engaged in more integrated collaboration.
>
> **[3:14](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=194)** This environment creates the conditions for elevated data success in an organization.
>
> **[3:19](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-data-governance-meets-dataops?u=76281980&t=199)** With DataGovOps, there's a lot to like. (chuckles)

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), require (1), implements (1)
> **Analogies:** such as (3)
> **Definitions:** is a  (1)
> **Speakers:** - we (1)


### 2. Functions of DataGovOps

#### Automating data governance functions
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=0)** - Two main advantages of new technology are that it enables us to do things differently and to do things we couldn't do before.
>
> **[0:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=8)** Information systems have, for example, completely changed what's possible and created new capabilities and remarkable efficiencies for all types of organizations.
>
> **[0:19](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=19)** Automation in particular has had and continues to have a transformational impact on the world.
>
> **[0:27](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=27)** As we see with the implementation of DevOps and DataOps, the right kind of automation at the right time is achieving much better results.
>
> **[0:36](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=36)** Specifically, desired outcomes are attained faster without compromising quality.
>
> **[0:42](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=42)** If we apply the right kind of automation to data governance, the assumption is that we can improve upon its promise, as well as addressing some of its shortcomings.
>
> **[0:52](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=52)** So, let's look at how the manual processes of data governance often occur.
>
> **[0:58](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=58)** A data process starts with a request and flows through several steps to be addressed.
>
> **[1:03](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=63)** For example, say a business user requests access to a sensitive dataset.
>
> **[1:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=68)** The teams that might be required to review this requirement include those in security, data ownership, system administration, compliance, and legal.
>
> **[1:19](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=79)** As the request flows across these silo teams, it may get delayed for reasons, including time to seek approvals, low prioritization and handoff inefficiencies.
>
> **[1:32](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=92)** Even when the request is fulfilled, there can be mistakes made and compliance requirements might be missed.
>
> **[1:39](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=99)** In other words, the request is achieved, but not without the possibility of shortcomings.
>
> **[1:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=105)** We're trying to reduce risk, not create new risks.
>
> **[1:49](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=109)** Keep in mind too, that this example is relatively simple compared to the complex data needs of businesses.
>
> **[1:57](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=117)** With DataGovOps, we want to create a much more closely integrated and collaborative environment for teams and stakeholders involved in data management.
>
> **[2:07](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=127)** In addition, the context for the deeper engagement is automation that includes monitoring and continuous integration and delivery.
>
> **[2:15](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=135)** The CI/CD we saw with DevOps and DataOps.
>
> **[2:21](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=141)** And improve communication benefits all aspects of this approach.
>
> **[2:26](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=146)** DataGovOps optimizes for efficient operations.
>
> **[2:30](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=150)** It uses automation to deliver in areas where manual processes are inherently problematic, even with the best intentions.
>
> **[2:39](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=159)** Automation can guide governance processes so that they move along a logical pathway within an organization.
>
> **[2:46](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=166)** Progress can be monitored, including ensuring policies are followed and enforced.
>
> **[2:51](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=171)** Continuous measurement and evaluation of governance adherence can be established, enabling a closer to real-time assessment of compliance.
>
> **[3:02](https://www.linkedin.com/learning/automated-data-governance-in-practice/automating-data-governance-functions?u=76281980&t=182)** DataGovOps through automation, integration and collaboration can create the conditions to ensure your data governance requirements are finally being achieved.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **CLI Commands:** cd (1)
> **Code Keywords:** let (1)
> **Definitions:** in other words (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** required to (1)
> **Speakers:** - two (1)

#### Meeting regulatory and compliance requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=0)** - In 1996, the United States Congress enacted the Health Insurance Portability and Accountability Act or HIPAA for short.
>
> **[0:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=9)** Its purpose was to ensure that sensitive personal health information would not be disclosed without the permission and knowledge of the patient.
>
> **[0:18](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=18)** It was a response to the rapidly increasing volume of personal health information, PHI, being captured, stored, and analyzed, particularly in the context of digital systems.
>
> **[0:31](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=31)** All healthcare providers and related organizations that handle PHI are required to follow these regulations.
>
> **[0:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=38)** Non-compliance can result in significant penalties, including both civil and criminal, which are calculated based on the level of negligence and harm caused.
>
> **[0:49](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=49)** Fines range from a few hundred dollars to a couple of million, and imprisonment can be as high as 10 years.
>
> **[0:57](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=57)** Bottom line, to meet HIPAA requirements, organizations handling health information within scope must have rigorous data governance in place.
>
> **[1:07](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=67)** HIPAA is just one example of regulatory and compliance requirements that many industries must follow.
>
> **[1:15](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=75)** Others include requirements for businesses that handle credit and debit cards.
>
> **[1:20](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=80)** They must follow payment card industry data security standards or PCI-DSS.
>
> **[1:27](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=87)** Public companies must comply with the US-based Sarbanes-Oxley Act of 2002 or sox, in that they have specific financial data reporting requirements.
>
> **[1:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=98)** For organizations that have regulatory and compliance requirements, and that list is pretty broad and growing, data governance is a valuable and successful approach.
>
> **[1:49](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=109)** It provides a structured framework for managing all of this data.
>
> **[1:54](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=114)** Central to this framework are data related policies, procedures, and standards created, approved, and deployed across an organization.
>
> **[2:04](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=124)** Leaders and staff are expected to follow these when handling data, so it's essential to provide training and ongoing guidance.
>
> **[2:13](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=133)** For example, data privacy and protection could require specific requirements, such as the process for providing access to data, whether it needs to be encrypted, the rules on sharing, and what monitoring needs to be in place.
>
> **[2:27](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=147)** Data governance also focuses on ensuring data quality, like accuracy and completeness, a requirement of many regulations but, also, an obvious standard for any business trying to fully leverage the value of data.
>
> **[2:41](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=161)** Further, a framework for data governance supports audit readiness and reporting and is an overall risk management support system.
>
> **[2:50](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=170)** We can see that regulatory and compliance requirements are important and complex, and data governance is a meaningful way to ensure that needs are met.
>
> **[3:01](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=181)** That said, deploying a framework does create a bureaucratic overhead and can be manually intensive.
>
> **[3:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=189)** Fortunately, Data GovOps is introducing automated and continuous data management that creates significant efficiencies in support of regulatory and compliance requirements.
>
> **[3:22](https://www.linkedin.com/learning/automated-data-governance-in-practice/meeting-regulatory-and-compliance-requirements?u=76281980&t=202)** Later in this course, I will share how Data GovOps achieves this.

> [!info]- Semantic Content
>
> **Env Vars:** hipaa (3), phi (2), pci (1), dss (1)
> **Code Keywords:** public (1), require (1), this. (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (1), such as (1)
> **Cross-References:** later in (1)
> **Prerequisites:** required to (1)
> **Speakers:** - in (1)

#### Data lineage and metadata management
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=0)** - Data is the fuel that's powering today's digital economy and it comes with many responsibilities.
>
> **[0:07](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=7)** Not only do leaders want to ensure they're leveraging the benefits of data, but they have to diligently manage its risks too.
>
> **[0:15](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=15)** To effectively govern data requires that we know a lot about it.
>
> **[0:19](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=19)** Specifically, it's valuable to know data about data sets.
>
> **[0:23](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=23)** We call this metadata.
>
> **[0:25](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=25)** For example, who owns the data and what does it contain?
>
> **[0:30](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=30)** We also want to know where data comes from, how it's transformed and where it goes, what we call data lineage.
>
> **[0:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=38)** Let's look at both of these.
>
> **[0:40](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=40)** The administration, organization, and governance of metadata is appropriately called metadata management.
>
> **[0:48](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=48)** Metadata tells us a lot about a data set.
>
> **[0:50](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=50)** How we describe data is not limited.
>
> **[0:53](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=53)** In fact, the more insights provided, the better the results.
>
> **[0:57](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=57)** But typically, we include owner, origin, structure, format, currency, who can have access, and relationships with other data sets.
>
> **[1:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=68)** Simply staring at a data set's contents is not going to provide the knowledge to take advantage of it and ensuring it's handled correctly.
>
> **[1:17](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=77)** With metadata, data sets can be located, understood, managed, and governed.
>
> **[1:23](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=83)** Organizations must be proactive to ensure that data sets contain metadata and that they're kept current.
>
> **[1:31](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=91)** This can reside in metadata repositories or be part of a data catalog where data set information helps staff discover and use an organization's data.
>
> **[1:43](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=103)** Good metadata management is a sign of data maturity.
>
> **[1:47](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=107)** The processes, policies, and standards that guide metadata management are part of data governance and are informed by business needs and compliance and regulatory requirements.
>
> **[1:59](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=119)** Like metadata management, data lineage provides valuable and often essential insights on data pipelines.
>
> **[2:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=128)** It's a process of tracking and visualizing the flow of data from its source through processing and onward to its final destination.
>
> **[2:17](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=137)** It informs an organization about the role of data and the applications and processes it's involved in.
>
> **[2:25](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=145)** The value of data lineage includes support for improved data quality, troubleshooting issues, ensuring compliance and risk management.
>
> **[2:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=155)** From a data governance perspective, data lineage ensures there's accountability for data ownership and stewardship at each stage of the data lifecycle.
>
> **[2:46](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=166)** In addition, knowing where data is flowing in terms of systems helps with access control, such that security policies can be monitored and enforced.
>
> **[2:56](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=176)** Metadata management and data lineage are complimentary and often interdependent with regard to data gov ops.
>
> **[3:05](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=185)** As fundamental components of data governance, they become enablers of automation, supporting continuous tasks such as classification, access control, and compliance checking across workflows.
>
> **[3:20](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=200)** They also support collaboration across teams in that they provide transparency and understanding about data assets and how they're being used.
>
> **[3:29](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=209)** With the same insights served to the various data gov ops teams and stakeholders, errors can be reduced and quality can be increased.
>
> **[3:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-lineage-and-metadata-management?u=76281980&t=218)** Data lineage and metadata management provide essential views of an organization's data ecosystem, enabling functions for an effective data gov ops framework.

> [!info]- Semantic Content
>
> **Code Keywords:** from, (1), let (1)
> **Definitions:** we call this (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - data (1)

#### Monitoring and reporting
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=0)** - Monitoring and reporting functions play essential roles in ensuring effective implementation and maintenance of data governance.
>
> **[0:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=8)** While they're distinct capabilities, they do overlap, and each can be thought of as the different sides of the same coin.
>
> **[0:16](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=16)** Specifically, the role of monitoring is to ensure that data-related processes, policies, and controls are tracked and followed.
>
> **[0:24](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=24)** And reporting serves as a way to provide visibility and accountability to those same areas.
>
> **[0:31](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=31)** Let's look at each individually, and then I'll discuss their role in DataGovOps.
>
> **[0:37](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=37)** With monitoring, we're interested in understanding the degree to which data governance functions are followed.
>
> **[0:43](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=43)** For example, we want to know how well we're adhering to data compliance and regulatory requirements, such as HIPAA or the European Union's General Data Protection Rules, or GDPR.
>
> **[0:56](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=56)** Monitoring tools can track data activities and, in some cases, detect violations in real time.
>
> **[1:02](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=62)** With alerts, corrective action can then be taken in a timely manner.
>
> **[1:06](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=66)** Monitoring is also important for security and privacy requirements.
>
> **[1:10](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=70)** A wide range of tools can detect suspicious activities, such as data leaks or policy violations.
>
> **[1:18](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=78)** The output of monitoring a log file, for example, is a valuable source of input for audit needs.
>
> **[1:25](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=85)** Overall, monitoring lowers organizational risks because it can promptly identify and surface threats and data issues.
>
> **[1:34](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=94)** On the other side of the coin, reporting is the companion to monitoring.
>
> **[1:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=98)** It organizes and delivers data management insights, whether on or offline to business stakeholders.
>
> **[1:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=105)** These reports can be available in real time or produced periodically depending on the business context.
>
> **[1:52](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=112)** Common data governance reporting includes, unsurprisingly, evidence as requested by internal and external bodies that demonstrates compliance requirements.
>
> **[2:03](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=123)** Reporting is also used to highlight the state of data quality, including tracking issues such as errors and missing data.
>
> **[2:11](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=131)** Policy enforcement and operational reporting provides trends over time that show how well the organization is performing relative to its data handling.
>
> **[2:21](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=141)** Like all reporting, decision-makers benefit from the information they present.
>
> **[2:25](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=145)** And the content can communicate all manner of messages to stakeholders, from the state of compliance to challenges and risks, and more.
>
> **[2:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=155)** In DataGovOps, both monitoring and reporting are essential roles in support of successful data governance outcomes.
>
> **[2:43](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=163)** Each is essential to compliance enforcement and risk management.
>
> **[2:47](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=167)** And with automation, both can be performed in a continuous manner rather than periodic and manual.
>
> **[2:55](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=175)** This quality alone supports timely mitigation and adherence to laws, regulations, and organizational policies.
>
> **[3:03](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=183)** The communication aspects keep all stakeholders, including the development and data teams, aligned, resulting in more informed and timely process and system decision-making.
>
> **[3:16](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=196)** Let's be clear about it.
>
> **[3:17](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=197)** Without monitoring and reporting of data governance, we're effectively operating in the dark, and efforts to automate and create efficiencies through DataGovOps will be unsuccessful.
>
> **[3:30](https://www.linkedin.com/learning/automated-data-governance-in-practice/monitoring-and-reporting?u=76281980&t=210)** Bottom line, prioritize monitoring and reporting if your goal is to increase the value of data and reduce its risks.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (2)
> **Code Keywords:** let (2)
> **Env Vars:** hipaa (1), gdpr (1)
> **Definitions:** is a  (1)
> **Speakers:** - monitoring (1)


### 3. DataGovOps Solution Categories

#### Automation
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=0)** - At the heart of data GovOps is the automation of data governance functions.
>
> **[0:05](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=5)** What we're talking about here is the use of technology tools, code, and scripts to streamline data-related workflows and enforce policies, manage quality, and facilitate compliance and regulatory needs.
>
> **[0:20](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=20)** Using this approach provides many advantages that include faster processes, less error-prone manual tasks, and greater governance efficiencies at every step of the data pipeline.
>
> **[0:34](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=34)** Automation also helps organizations manage the increasing volume, variety, and velocity of data that has become a feature of our emergent hyperconnected and digital world.
>
> **[0:46](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=46)** As the size, complexity, and diversity of data needs grow, manual processes can become unwieldy.
>
> **[0:53](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=53)** Automation enables scalable governance that can support rapidly growing needs without escalating costs and compromising governance goals.
>
> **[1:03](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=63)** Given the high demand for data governance automation, a rich and growing marketplace is available with tools, many now AI-enabled from major technology vendors, and a notable number of smaller and startup companies.
>
> **[1:19](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=79)** When you're ready to implement automation, something I discuss in a later video, you'll have plenty of options available to you that can be purchased off the shelf.
>
> **[1:29](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=89)** For now, let's take a closer look at the areas and ways that automation can enhance your data governance program.
>
> **[1:36](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=96)** Central to data governance is the implementation, compliance, and enforcement of data policies.
>
> **[1:43](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=103)** Tools can automatically tag and classify data according to policies.
>
> **[1:48](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=108)** This classification can then be used to support automated role-based access controls, or RBAC, continuous monitoring flags and alerts in real-time when non-compliant activities are discovered.
>
> **[2:02](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=122)** Equally, it can report in compliance adherence.
>
> **[2:06](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=126)** Some tools even have a self-healing function that remediates compliance and quality issues.
>
> **[2:14](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=134)** Automation can also support the enforcement of critical data retention and deletion policies.
>
> **[2:21](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=141)** With security and privacy being high priority, when appropriate, data can be automatically encrypted or masked.
>
> **[2:29](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=149)** We know too that data governance is particularly concerned with supporting data quality.
>
> **[2:36](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=156)** Data validation can be automated and continuous.
>
> **[2:39](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=159)** Remember, a major benefit of automation to ensure that quality checks such as completeness and accuracy are carried out on data prior to its introduction to a production environment.
>
> **[2:52](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=172)** In addition, data errors could often be identified anywhere in the data pipeline and stopped from entering processes and applications where it could cause issues.
>
> **[3:04](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=184)** Of course, there are other important benefits to the automation aspects of data GovOps.
>
> **[3:10](https://www.linkedin.com/learning/automated-data-governance-in-practice/automation?u=76281980&t=190)** I've separated those out into other categories captured in the following videos, but as you can tell, automation represents a leap forward in the efficiencies and capabilities of data governance functions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), self (1), function (1)
> **Env Vars:** rbac (1)
> **Analogies:** such as (1)
> **Speakers:** - at (1)

#### Collaboration
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=0)** - While Data GovOps creates remarkable efficiencies through deploying automation across the data pipeline, success is unlikely with automation alone.
>
> **[0:10](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=10)** In fact, while automation is a central function, Data GovOps only gets results when other roles, like collaboration, are implemented.
>
> **[0:19](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=19)** Let's remember that Data GovOps is about streamlining entire data processes through tools, and integrating disparate, yet dependent, teams.
>
> **[0:29](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=29)** This is where collaboration comes in.
>
> **[0:31](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=31)** A data pipeline engages many stakeholders that include business users, data analysts, data engineers, software developers, security staff, legal personnel, and IT operations.
>
> **[0:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=45)** To create the conditions for more data efficiencies, innovation and lower risk will certainly require tools and improved processes, but importantly, it will need deep, committed collaboration among participants.
>
> **[0:59](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=59)** It's the backbone of Data GovOps.
>
> **[1:03](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=63)** So let's explore a few approaches Data GovOps participants use to foster high-performance collaboration.
>
> **[1:11](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=71)** First, consider organizing the staff involved in data workflows into a larger cross-functional team, as opposed to separate teams who just hand off work to others.
>
> **[1:22](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=82)** This way, everyone becomes part of a single mission-aligned team, while focusing on their specific areas and strengths.
>
> **[1:31](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=91)** They may have different supervisors and ultimately report into different parts of the organization, but for the purposes of Data GovOps' framework, they're unified by shared responsibility and accountability.
>
> **[1:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=105)** This design enables a more agile response to business needs as well.
>
> **[1:50](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=110)** Rather than being locked into rigid processes maintained by independent units, this single team can quickly agree on modifications to processes that achieve better results without compromising attendant regulatory requirements.
>
> **[2:05](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=125)** Whether on the business or technical side, issues related to what is and isn't working well can be resolved more efficiently.
>
> **[2:13](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=133)** Enhanced communication is also another effective approach to deep collaboration.
>
> **[2:19](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=139)** Working closely together, team members can identify and escalate data issues and risks more quickly, improve vigilance around security and standards compliance, and ensure that feedback circulates such that process improvements can be quickly adopted.
>
> **[2:36](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=156)** Working closely together means that overall decision-making is improved too.
>
> **[2:40](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=160)** Assuming team members are aligned, decisions about tool choices, process integration, policy modifications and governance controls can be rapidly discussed and adopted.
>
> **[2:53](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=173)** What's most notable when placing emphasis on collaboration in Data GovOps is the opportunity to create a culture that gets results.
>
> **[3:02](https://www.linkedin.com/learning/automated-data-governance-in-practice/collaboration?u=76281980&t=182)** With everyone aligned and working closely together, data governance can run more smoothly and support behaviors where data is managed well and risks are considerably lowered.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1), require (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - while (1)

#### Integration
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=0)** - If collaboration is the backbone and automation is the execution, then integration is the connective tissue of DataGovOps.
>
> **[0:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=9)** With integration, we want to create a technical environment where DataOps and DevOps are incorporated, and where systems, data, and processes are seamlessly connected to each other.
>
> **[0:21](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=21)** This not only creates the conditions for automation and collaboration, but also for efficiency and consistency across entire data workflows.
>
> **[0:32](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=32)** In a typical enterprise environment, data flows within and between systems.
>
> **[0:37](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=37)** In fact, it's not unusual for it to sometimes shuttle between complex environments, including flowing to and from external sources.
>
> **[0:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=45)** Along the way, data is often modified and transformed, and it can be exposed to a lot of security challenges.
>
> **[0:53](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=53)** For example, a dataset may need to be editable by one stakeholder group and only readable by another.
>
> **[1:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=60)** In addition, if data is required to comply with some explicit regulation like HIPPA, all the systems it touches must meet requirements.
>
> **[1:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=69)** Manual data governance is focused on ensuring that this data is handled according to established rules.
>
> **[1:16](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=76)** Focusing on integration, however, automates and standardizes data flows to move from manual data governance to DataGovOps.
>
> **[1:26](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=86)** This reduces the burden of human participation in data governance programs that often stifle and slow down processes.
>
> **[1:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=95)** When done right, integration enables data to smoothly travel among tools, platforms, and systems, while ensuring data governance policies are enforced in a continuous and automated manner.
>
> **[1:48](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=108)** After all, integration is largely essential for automation.
>
> **[1:53](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=113)** The marketplace is replete with solutions and support, both in the cloud and on-premises to make integration happen to the degree you specify.
>
> **[2:03](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=123)** With integrated systems and processes, the ability to monitor data across workflows in real time is possible.
>
> **[2:11](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=131)** As I discussed in a previous video, continuous monitoring is a feature of DataGovOps.
>
> **[2:18](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=138)** This significantly improves an organization's ability to ensure the policies and standards are met.
>
> **[2:25](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=145)** By extension, integration increases the quality of data, essential driver of data governance.
>
> **[2:32](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=152)** Also, implementing enhanced integration across as many systems as possible for given data workflow supports greater centralized access control.
>
> **[2:43](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=163)** For example, identity and access management, or IAM, applied across disparate systems can assure that only authorized individuals access certain data sets.
>
> **[2:55](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=175)** Finally, integrated systems enhance the ability to produce comprehensive data governance reports and analytics.
>
> **[3:03](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=183)** Having visibility across data pipelines and extracting insights even in near real time can produce more detailed performance reports, and audit trails, and track and measure compliance.
>
> **[3:17](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=197)** In summary, DataGovOps requires automation, collaboration, and integration to be successful.
>
> **[3:25](https://www.linkedin.com/learning/automated-data-governance-in-practice/integration?u=76281980&t=205)** These three core components must be a focus as you think about the design and implementation of DataGovOps in your organization.

> [!info]- Semantic Content
>
> **Env Vars:** hippa (1), iam (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - if (1)

#### Data catalogs
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=0)** - Have you ever tried to find a specific data set at your work?
>
> **[0:04](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=4)** You might get lucky and a colleague has the details you need, or you might be sent a link that points you directly to it.
>
> **[0:11](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=11)** Then when you finally find and get access to the data set, do you know, for example, whether it's current, who maintains it, and how it's used?
>
> **[0:20](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=20)** These all seem like reasonable needs, but sadly, finding and understanding data sets continues to be a source of struggle for stakeholders in too many businesses.
>
> **[0:30](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=30)** Data catalogs are one proven approach to managing an organization's inventory of data assets.
>
> **[0:37](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=37)** Like the term suggests, a data catalog is a centralized and searchable repository that lists details on data sets.
>
> **[0:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=45)** It contains metadata, data that describes data, such as ownership, access rights, size, format, location, update frequency, uses, and a lot more.
>
> **[0:59](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=59)** Data catalogs can also contain the lineage of data.
>
> **[1:02](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=62)** That is, details on the life and journey of that data, like where it came from, how it's been processed and changed, and where it goes.
>
> **[1:13](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=73)** This is valuable insight for troubleshooting data quality issues, for understanding its dependencies, and for supporting data governance, compliance, and risk management.
>
> **[1:24](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=84)** In fact, data catalogs play a big role in data governance.
>
> **[1:29](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=89)** They clearly support the primary goals of data discovery and data quality management.
>
> **[1:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=95)** In addition, the metadata in data catalogs ensures that data sets are properly classified based on use and sensitivity, and stored and accessed in accordance with regulatory requirements and organizational policies.
>
> **[1:49](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=109)** The question that you're properly thinking about is, how are data catalogs populated and kept current?
>
> **[1:56](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=116)** The most basic approach is a manual one, conducted by staff such as data owners, data engineers, business users, and data stewards, a role responsible for maintaining data quality.
>
> **[2:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=129)** They directly input and modify information such as metadata and data lineage details.
>
> **[2:16](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=136)** Reminders and flags can be used, as well as regular audits, to keep content current.
>
> **[2:22](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=142)** But as you can imagine, manual updates can be less than optimum.
>
> **[2:26](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=146)** Fortunately, automation is increasingly used, and it can take many forms.
>
> **[2:32](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=152)** Data catalogs can be integrated with data sources, or crawlers can periodically scan them, and when changes are made, updates are pushed to the catalog.
>
> **[2:41](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=161)** DataGovOps is prioritizing automation of data catalog inputs and updates.
>
> **[2:47](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=167)** Throughout the data pipeline, software tools identify changes and trigger automated updates to data set metadata and data lineage in the catalog.
>
> **[2:59](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=179)** Automation is also enabling data catalogs to enforce governance policies, such as triggering approval workflows when access is requested.
>
> **[3:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/data-catalogs?u=76281980&t=188)** In summary, data catalog currency and workflow automation, qualities of DataGovOps, are accelerating data operations and increasing data quality, all with limited impact to risk.

> [!info]- Semantic Content
>
> **Analogies:** such as (4), for example (1), imagine (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **Code Keywords:** from, (1)
> **Speakers:** - have (1)

#### Analytics
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=0)** - When we discuss analytics relative to data governance, we must consider the topic from two distinct perspectives.
>
> **[0:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=8)** One is to look at how data governance creates the conditions where data analysts and other stakeholders can have confidence in data for the purposes of deriving insights from it.
>
> **[0:19](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=19)** The other is to use analytics to ensure that the data governance framework is performing as expected.
>
> **[0:25](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=25)** For the purposes of data GovOps, we're most interested in the latter.
>
> **[0:31](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=31)** This is because our assumption is that data governance when functioning optimally, is primarily in place to ensure that data is managed well.
>
> **[0:39](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=39)** Its value is leveraged, and risks are reduced.
>
> **[0:43](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=43)** At that point, performing data analytics spins off into its own topic.
>
> **[0:48](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=48)** For this video, we'll focus on how analytics can ensure that the data governance program is effective.
>
> **[0:56](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=56)** Through this lens, analytics is about monitoring data quality, policies, and compliance.
>
> **[1:03](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=63)** A feature of data GovOps is to enable continuous monitoring, such that issues can be identified, analyzed, and surfaced quickly.
>
> **[1:12](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=72)** Through this capability, metrics around, say, missing values or duplicate records are delivered to real-time dashboards, enabling a rapid response, should it be warranted.
>
> **[1:24](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=84)** Less urgent concerns can be produced as an on-demand or periodic report.
>
> **[1:29](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=89)** Through continuous analysis of some or all data governance functions, decision-making around data management is enhanced.
>
> **[1:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=98)** For example, analysis may reveal which capabilities are producing the best and worst oversight results.
>
> **[1:46](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=106)** Every organization wants to avoid data governance as an impediment, and each wants to amplify where it brings the most value.
>
> **[1:55](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=115)** Analytics enabled data governance can also ensure that stakeholders understand all aspects of data workflows, how data is processed and consumed, and where opportunities for automation may exist.
>
> **[2:08](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=128)** By analyzing these insights, improvements can be made to the data governance framework.
>
> **[2:13](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=133)** In addition, the increasing use of machine learning-based analytics can monitor for non-compliance.
>
> **[2:20](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=140)** Predict where governance rule updates may be necessary or beneficial, and anticipate where problems may occur in the near future.
>
> **[2:29](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=149)** Predictive analytics can forecast how the organization may need to prepare for the future, responding to data growth or a changing regulatory environment.
>
> **[2:39](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=159)** This function of data GovOps changes the team posture from reactive to proactive.
>
> **[2:47](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=167)** Data analysts want to trust data and depend on and participate in data governance to produce high quality, secure compliant data sets and associated processes to get there.
>
> **[3:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/analytics?u=76281980&t=180)** Data GovOps offers continuous automated and machine learning-based analytics to monitor report on support, and further define and improve the functioning of the data governance framework.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1)
> **Analogies:** for example (1)
> **Speakers:** - when (1)

#### Artificial intelligence in DataGovOps
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=0)** - Identifying and implementing opportunities for automation, integration, and overall process efficiencies are at the heart of what DataGovOps tries to achieve.
>
> **[0:11](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=11)** As a historically manual and repetitive discipline, data governance provides abundant opportunities.
>
> **[0:18](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=18)** It makes sense then that artificial intelligence, or AI, is increasingly adopted by the enterprise to drive improvements, augment human efforts, and get faster and more accurate results across the entire data governance landscape.
>
> **[0:34](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=34)** The vendor community too is stepping up, with providers incorporating AI capabilities into their data governance solutions.
>
> **[0:42](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=42)** Today's AI is well suited for accurately completing repetitive tasks that require levels of machine-learned judgements.
>
> **[0:50](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=50)** For example, identifying anomalous patterns in data quality that suggest issues, ensure processes are followed and aligned with regulatory and compliance requirements, and classify and catalog data according to rules.
>
> **[1:05](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=65)** Let me briefly note here that data governance is playing an increasingly important role in ensuring higher quality AI results.
>
> **[1:14](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=74)** This video, though, will focus only on the role that AI is playing to make data governance more successful.
>
> **[1:21](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=81)** While AI can be part of enhancing almost every area of DataGovOps, let's look at a few notable uses.
>
> **[1:30](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=90)** In data governance, classifying and cataloging data and data sets is essential.
>
> **[1:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=95)** After all, if you don't know details about data, the metadata, and how to easily find data sets, the opportunities for value creation are decreased significantly.
>
> **[1:46](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=106)** Achieving a viable and well maintained data catalog, however, is a highly manual process, a point that was discussed in a previous video.
>
> **[1:56](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=116)** Along comes AI, and it's making the classification and cataloging of data a whole lot easier, including identification of data sets and their respective metadata from across an enterprise.
>
> **[2:10](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=130)** And rather than a data catalog being relatively static and only updated periodically, AI tools can monitor and maintain metadata currency dynamically.
>
> **[2:21](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=141)** Also, a big part of data governance is the creation of policies and procedural documentation in support of data requirements in an organization.
>
> **[2:30](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=150)** These can be driven by business needs or externally from federal, state, and industry regulations.
>
> **[2:37](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=157)** Traditionally, this documentation was created manually and intensive exercise requiring legal input, great writing skills, and rounds of approvals.
>
> **[2:47](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=167)** Today with generative AI, a new regulation, for example, can be uploaded to an AI tool, and a first draft of a policy can be created that considers all the requirements to ensure compliance with the regulation.
>
> **[3:01](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=181)** Now, that's a process improvement that's welcomed.
>
> **[3:05](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=185)** Finally, data governance is concerned with data availability.
>
> **[3:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=189)** A related policies focused on data retention requirements, backup processes, business continuity, and disaster recovery.
>
> **[3:18](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=198)** AI is now incorporated into all of these and related areas.
>
> **[3:22](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=202)** AI power tools can continuously monitor for data availability compliance, identify risks and predict potential failure scenarios, and propose measures to minimize downtime and data loss.
>
> **[3:37](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=217)** I'm just skimming the surface of possibilities here, and it's worth recognizing that the role of AI in the enterprise is anticipated to expand significantly in the months and years to come.
>
> **[3:49](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=229)** More of DataGoOps will be AI driven and subsequently automated, which will be a boon for those with data governance responsibilities.
>
> **[4:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=240)** Finally, AI is certainly not yet a replacement and solution for every DataGovOps need.
>
> **[4:07](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=247)** Humans will still play an essential role in areas such as resolving corner case issues, making judgements, problem solving, and determining goals and objectives.
>
> **[4:18](https://www.linkedin.com/learning/automated-data-governance-in-practice/artificial-intelligence-in-datagovops?u=76281980&t=258)** No doubt, while AI will reduce repetitive manual tasks, it's still far from making the human role obsolete.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (2), require (1), static (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - identifying (1)


### 4. Implementing DataGovOps

#### Implementation strategy
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=0)** - Now that you have a good understanding of DataGovOps and the considerable value it can bring to your organization, it's time to think about how it can be implemented.
>
> **[0:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=9)** I'm going to make an assumption here that your business already has some data governance in place.
>
> **[0:15](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=15)** It may be minimal, or you might have a sophisticated framework deployed.
>
> **[0:20](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=20)** I remember early in my career, a former manager sharing that you can't automate something that isn't already manual.
>
> **[0:27](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=27)** I think that's good advice here.
>
> **[0:29](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=29)** If a data governance strategy doesn't yet exist, creating one is your best starting point.
>
> **[0:36](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=36)** I also recommend checking out my [[Learning Data Governance]] course to learn more about this.
>
> **[0:41](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=41)** So with data governance in place, let's begin with an assessment of where opportunities for automation, integration, and collaboration exist.
>
> **[0:51](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=51)** It's often a good approach to start small, look for early wins, and build from there.
>
> **[0:57](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=57)** This way, you'll also learn about what's working well and where you can tweak and evolve the implementation plan.
>
> **[1:04](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=64)** There's nothing stopping you from going all in: going for a big bang, so to speak.
>
> **[1:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=69)** But it's a riskier approach and it will take longer to see results.
>
> **[1:14](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=74)** Determining where DataGovOps may make sense includes assessing organizational capabilities and where human oversight must remain.
>
> **[1:23](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=83)** It's about a balance between automation and ensuring the right level of human participation, ethical choices, and cultural fit.
>
> **[1:32](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=92)** Remember, DataGovOps is about collaboration.
>
> **[1:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=95)** And if people are locked out of processes or insufficient checks and balances are not in place, it's possible that your best intentions may badly backfire.
>
> **[1:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=105)** You have to engage stakeholders in the design, implementation, and operations of the plan.
>
> **[1:51](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=111)** With the assessment complete, draft a plan and seek stakeholder input on its design.
>
> **[1:57](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=117)** The plan must be clear on its purpose, the desired outcomes, and the metrics that will be used to measure its success.
>
> **[2:05](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=125)** If these three qualities are not specific and agreed to, don't move forward.
>
> **[2:11](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=131)** I've found in my career that it's worth the time to get the details right upfront.
>
> **[2:16](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=136)** Later, not only will it be more expensive to make changes, but you might not have buy-in.
>
> **[2:22](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=142)** And those essential for the plan to succeed may not be on the same page.
>
> **[2:27](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=147)** There's a good chance roles and responsibilities will change as automation tools are acquired and introduced and as process evolve.
>
> **[2:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=155)** So make sure that those people are identified early.
>
> **[2:39](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=159)** Some will be required to do more, some less, and some will have completely different tasks.
>
> **[2:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=165)** A new cross-functional DataGovOps team must be formed, and team members will need training, something I'll discuss in a later video.
>
> **[2:53](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=173)** They'll also need to understand the new rules of the road, specifically how the enhanced collaboration will function.
>
> **[3:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=180)** Fostering a high-performance data culture will help here too, with or without your journey to DataGovOps.
>
> **[3:07](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=187)** A data culture can lead to significantly better data results in your organization.
>
> **[3:13](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=193)** Please consider my LinkedIn learning course called Building a Data Culture to help you here.
>
> **[3:19](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=199)** Lastly, after phases of the DataGovOps plan are implemented, conduct regular reviews.
>
> **[3:25](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=205)** A DataGovOps mindset is all about continuous monitoring and improvement.
>
> **[3:31](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=211)** Ensure that you're getting results, that data governance policies are being met, and automation is meeting and exceeding goals.
>
> **[3:39](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=219)** Of course, where there are shortfalls, look to fix and enhance them.
>
> **[3:44](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=224)** With a diligent and participatory approach to implementing DataGovOps, data governance and operations should experience notable efficiencies, reduced manual effort, and lowered risks.
>
> **[3:57](https://www.linkedin.com/learning/automated-data-governance-in-practice/implementation-strategy?u=76281980&t=237)** Robust data automation, monitoring, and collaboration will keep your organization compliant and humming.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** this. (1), let (1), function (1)
> **Prerequisites:** required to (1)
> **Speakers:** - now (1)

#### Training
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=0)** - Expecting staff to be successful at their work without providing necessary and sufficient training is unfair, and will only make you and the staff member frustrated.
>
> **[0:11](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=11)** First of all, the organization won't get the results it wants.
>
> **[0:15](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=15)** It's a lose-lose situation, and it happens all too often, particularly with new initiatives.
>
> **[0:21](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=21)** So, as you consider your data GovOps implementation, let's make sure that training is a priority.
>
> **[0:28](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=28)** In fact, in the planning stages, training requirements should be already assessed and the steps to achieve them must be documented and agreed upon.
>
> **[0:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=38)** Training can be provided in modular format, and consideration should be given to personalization, given the diverse nature of the data governance field.
>
> **[0:47](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=47)** Automating data governance is complex, and as I've discussed, there are many different kinds of roles.
>
> **[0:54](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=54)** Stakeholders may need to learn completely new skills, or they may only need to fill some gaps.
>
> **[1:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=60)** Team members with primary roles and responsibilities in the new data GovOps organization must fully understand what data governance is and how it works, and the data policies, regulations, and compliance business needs.
>
> **[1:15](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=75)** If not, consider this prerequisite training before a stakeholder can assume a role in data GovOps.
>
> **[1:22](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=82)** Anyone working in the data governance space, like an IT professional, data analyst, data steward, security engineer, lawyer, auditor, and business leader, need to understand some data management and quality control fundamentals.
>
> **[1:37](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=97)** These include areas such as storage, metadata management, standards, pipelines, lineage, basic business intelligence, monitoring, cybersecurity, and access control.
>
> **[1:50](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=110)** A subset of these team members, those closest to the data GovOps processes, must become proficient with a wide variety of automation technologies and techniques.
>
> **[2:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=120)** These may include pipeline orchestration and automation, continuous integration and delivery, data cataloging, monitoring, reporting, and issue resolution.
>
> **[2:12](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=132)** A big part of any data GovOps implementation will, of course, be focused on the tools that the organization deploys.
>
> **[2:20](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=140)** With a large number of vendors and capabilities now available, those implemented will require necessary training.
>
> **[2:28](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=148)** Training doesn't end when data GovOps is fully deployed.
>
> **[2:32](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=152)** After all, continuous data education is a component of a thriving data culture.
>
> **[2:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=158)** Organizations should be prepared for ongoing learning that includes knowledge refreshers, simulated scenarios to practice issue resolution, enhanced collaboration skills, new tools as they're deployed, and being able to support changes resulting from continuous improvements and the regulatory environment.
>
> **[2:59](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=179)** It's hard to imagine how data GovOps can be successful without making education a priority at the outset and ongoing.
>
> **[3:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/training?u=76281980&t=189)** Quality outcomes can only be expected if an organization invests in team members so they're knowledgeable, empowered, and inspired through their skills to make a difference.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** let (1), require (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), imagine (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - expecting (1)

#### Scaling DataGovOps
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=0)** - Leveraging and optimizing the benefits of data while also managing its risks cannot be fully achieved if a siloed approach is adopted.
>
> **[0:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=9)** Today for example, most organizations want to benefit from data-driven insights, and it's a competitive requirement for many.
>
> **[0:18](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=18)** Certainly, any amount of data management and governance is going to be valuable.
>
> **[0:23](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=23)** However, if only one or a few departments implement systems, processes, and policies, sizable and limiting gaps will continue to exist across the enterprise.
>
> **[0:34](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=34)** For maximum positive impact, data efforts must be scaled to every part of the business, and that includes data gov ops.
>
> **[0:43](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=43)** Foundationally, data must be viewed and managed as an enterprise-wide resource.
>
> **[0:48](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=48)** Minimally, manual and repeatable processes must exist that enable data to flow across systems and business functions.
>
> **[0:56](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=56)** We can't begin to consider automation without a data strategy and holistic approach.
>
> **[1:03](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=63)** Following this, a data governance program must be defined.
>
> **[1:07](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=67)** The degree to which explicit standards are established and policies are clearly documented will have an impact on scaling automation later.
>
> **[1:16](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=76)** Efficiencies really begin when data ops is deployed.
>
> **[1:20](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=80)** This means using automation and collaboration in data workflows to streamline and speed up data management and analysis.
>
> **[1:29](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=89)** While data gov ops can be deployed in the absence of data ops, it will face notable limitations of efficiency, speed, and flexibility.
>
> **[1:39](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=99)** It can work in small organizations, but larger enterprises will experience significant headwinds, particularly as their data needs grow and they want to scale.
>
> **[1:50](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=110)** And make no mistake, in the months and years ahead, data will continue to explode and scale along with data requests from staff.
>
> **[1:59](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=119)** Compliance and regulatory requirements will continue to evolve too.
>
> **[2:03](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=123)** A big challenge in scaling both data ops and data gov ops is gaining enterprise acceptance.
>
> **[2:10](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=130)** Surprisingly, still today, many leaders and staff lack confidence in their organization's data efforts, particularly in the reliability of internal data.
>
> **[2:21](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=141)** This absence of trust reduces support from essential stakeholders.
>
> **[2:25](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=145)** To solve this, change management must be a focus, including engaging the right people at the right time, providing continuous training, communicating meaningful benefits, honest limitations, and ongoing metrics, and demonstrating results along the way.
>
> **[2:44](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=164)** Stakeholders must clearly see the connection between data gov ops efforts, and outcomes.
>
> **[2:50](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=170)** Staff involved in implementation and operations must also demonstrate that they're experienced and qualified to achieve credibility.
>
> **[2:59](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=179)** This sometimes requires, for example, hiring new talent, collaborating with external vendors, and providing customized technical training to internal teams.
>
> **[3:10](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=190)** Organizational culture in general can make or break any data initiatives.
>
> **[3:16](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=196)** The data on this is pretty clear and it's the biggest reason why data efforts fail.
>
> **[3:21](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=201)** Understanding how a data culture can be fostered is a complex but necessary field.
>
> **[3:28](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=208)** With most efforts, a determining factor in whether a program stalls or succeed is the degree of leadership support.
>
> **[3:36](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=216)** Certainly the C-suite has to be on board, but practically the data governance board, the DGB or equivalent must be deeply engaged both in the implementation and in the ongoing operations and scaling of the data gov ops efforts.
>
> **[3:53](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=233)** Finally, scaling data gov ops means building flexibility into the data governance program, allowing the organization to shape efforts as data and its needs grow.
>
> **[4:05](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=245)** Acquired automation tools should align with this too and manage increasing complexity and demand thoughtfully.
>
> **[4:13](https://www.linkedin.com/learning/automated-data-governance-in-practice/scaling-datagovops?u=76281980&t=253)** Considering the recommendations in this video can enable your data gov ops to continue to deliver efficiencies as the future requires data governance agility, and scale.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (4), this, (2), finally, (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Env Vars:** dgb (1)
> **Definitions:** is a  (1)
> **Speakers:** - leveraging (1)

#### Communication strategy
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=0)** - Communication plays a central and demanding role in data governance and Data GovOps, as this topic really is a team sport.
>
> **[0:09](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=9)** Activities traverse department boundaries as data workflows are often required to touch stakeholders, such as IT, lawyers, auditors, software developers, data analysts, and business end users.
>
> **[0:24](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=24)** Without quality communications data governance can be impeded, tasks can be duplicated, issues can be missed, and quality insights may not surface.
>
> **[0:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=35)** Communication issues can occur often in poorly executed Data GovOps because the teams that must work together have historically organized themselves in an isolated manner, retreating into the complexity of their own work and tools.
>
> **[0:52](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=52)** Teams are used to receiving requests, processing them, and then delivering them back to the requester.
>
> **[1:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=60)** For example, a VP of sales requests a completely new report.
>
> **[1:04](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=64)** The request makes its way to the data analyst team who in turn have to request access to certain datasets.
>
> **[1:12](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=72)** The security team responsible for access control may then need to check with legal.
>
> **[1:18](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=78)** At each stop the request likely gets queued up.
>
> **[1:21](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=81)** The data analyst team may be ready, but it doesn't mean the security team has capacity.
>
> **[1:26](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=86)** The net result is that not only is the business requester frustrated, but so is everyone involved.
>
> **[1:33](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=93)** Of course, fixing these inefficiencies is at the heart of Data GovOps, but you can quickly see how automation, integration, and standardization are not enough to get results.
>
> **[1:44](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=104)** In fact, automation can sometimes result in amplifying functional silos.
>
> **[1:50](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=110)** Teams must coordinate, collaborate, and communicate in ways they haven't had to before.
>
> **[1:56](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=116)** There must be an overt communication strategy and plan developed and executed.
>
> **[2:02](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=122)** They must address communications between data governance team members and with the business.
>
> **[2:07](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=127)** Fortunately, Data GovOps can lend itself to enhanced communications through several strategies, providing request and issue visibility to all team members, enabling transparency to data pipelines, and requiring participation in the orchestration of processes, both manual and automated.
>
> **[2:28](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=148)** Metrics too are an important form of communication.
>
> **[2:32](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=152)** Silo teams become collaborators, adding deliberate communication practices into their operations.
>
> **[2:38](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=158)** To get to high performing communications teams must agree and understand everyone's roles and responsibilities.
>
> **[2:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=165)** For example, liaisons, particularly between the business and technology functions, are helpful, and the data steward role is best suited.
>
> **[2:55](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=175)** Team members must also share and regularly update their understanding of team objectives and goals and establish communication channels.
>
> **[3:03](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=183)** Frequent in-person or virtual meetings are useful, which only involve representatives and not the entire team.
>
> **[3:11](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=191)** Meetings, as we can all attest, may be a time waste if a person doesn't absolutely need to be there.
>
> **[3:18](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=198)** Use these meetings to gather feedback and make continuous improvements.
>
> **[3:22](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=202)** Training is also a place where communications can take place.
>
> **[3:26](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=206)** It's a time when terminology can be agreed, where culture can be fostered, challenges can be elevated, and process improvements can be understood and deployed.
>
> **[3:37](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=217)** Clear documented guidelines complement training to ensure consistent team practices.
>
> **[3:44](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=224)** Finally, an area I've always been a fan of, is periodic celebrations.
>
> **[3:48](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=228)** This is an opportunity to reinforce appreciation for teamwork and communications, bring stakeholders together to recognize their efforts and milestones, highlight best practices, and build a positive collaborative culture.
>
> **[4:03](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=243)** Done authentically, modest team celebrations can motivate teams and remind everyone why their work is valuable.
>
> **[4:12](https://www.linkedin.com/learning/automated-data-governance-in-practice/communication-strategy?u=76281980&t=252)** Ensuring good communications in your Data GovOps program will likely provide immense value in helping your organization reach its data governance goals.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Prerequisites:** required to (1)
> **Speakers:** - communication (1)

#### DataGovOps implementation challenges
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=0)** - Succeeding in implementing DataGovOps is certainly no walk in the park.
>
> **[0:05](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=5)** After all, it requires the integration of existing data governance practices, with code, automation, and collaboration among disparate teams.
>
> **[0:14](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=14)** It also assumes some efficiency in existing data ops.
>
> **[0:18](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=18)** Having both functioning data governance and data ops in place is already a hefty serving of prerequisites before DataGovOps can be considered.
>
> **[0:28](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=28)** They don't need to be perfect, but they do need to be at a place where layering automation on top is doable.
>
> **[0:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=35)** Additionally, to have any chance of success, DataGovOps and data governance efforts must have strong and visible leadership support.
>
> **[0:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=45)** Let's look at a few of the challenges you may face, and how you can overcome them.
>
> **[0:50](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=50)** A common issue experienced by many organizations is a general resistance to change.
>
> **[0:56](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=56)** A full exploration of why change presents such a hurdle is beyond the scope of this course, but often at the heart of the problem are feelings from staff that familiarity is preferable over uncertainty, at least in the short term, and a skepticism that the change is even worthwhile.
>
> **[1:14](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=74)** Resistance, if not dealt with, will cause collaboration issues, pushback, and delays, and could even stop meaningful progress.
>
> **[1:23](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=83)** Depending on roles in place in the organization, DataGovOps may have notable impacts to existing processes, policies, and workflows.
>
> **[1:31](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=91)** Change can be managed by engaging those impacted in the process, and then frequently demonstrating positive results.
>
> **[1:39](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=99)** In other words, show team members that the change is worth it.
>
> **[1:44](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=104)** Change can prosper if the right culture has been fostered.
>
> **[1:48](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=108)** An organization without a strong data-driven culture will struggle with leaps in data management and governance sophistication.
>
> **[1:57](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=117)** That said, data culture can be fostered over time by integrating it into team member responsibilities and expectations, and by having leadership consistently demonstrate strong data culture behaviors, and support.
>
> **[2:12](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=132)** Another issue with implementation is a lack of necessary organizational skills and expertise.
>
> **[2:18](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=138)** A few people at the center of their work will need to understand data governance, data ops, DevOps, and specialized tools.
>
> **[2:26](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=146)** There will be many who need a variety of supporting skills that hinge off of these two, and even more will require some data literacy.
>
> **[2:35](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=155)** Getting to the right skills may require intensive training for existing staff, hiring new talent, and working with external partners.
>
> **[2:43](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=163)** DataGovOps is seldom suitable for a go-it-alone strategy.
>
> **[2:48](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=168)** The technical requirements for deploying DataGovOps across the organization may have constraints, such as insufficient investment, and data silos that are difficult to access and integrate.
>
> **[3:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=180)** Concerns about privacy and diminished control over access may cause department resistance too.
>
> **[3:06](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=186)** Solving these issues may require a combination of investment advocacy, system upgrades and replacements, demonstrating competency in managing security, and careful diplomacy to integrate holdouts of the plan.
>
> **[3:21](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=201)** I'll share one last note with you, don't let these challenges dissuade you.
>
> **[3:27](https://www.linkedin.com/learning/automated-data-governance-in-practice/datagovops-implementation-challenges?u=76281980&t=207)** Understanding what your organization may confront in a DataGovOps implementation will enable you and your teams to better prepare and mitigate for the hurdles that may arise.

> [!info]- Semantic Content
>
> **Code Keywords:** require (3), let (2)
> **Definitions:** is a  (2), in other words (1)
> **Analogies:** such as (1)
> **Speakers:** - succeeding (1)


### Conclusion

#### Continuing your DataGovOps learning journey
> [LinkedIn Learning](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=0)** - Are you convinced yet that DataGovOps is right for your organization?
>
> **[0:04](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=4)** I really hope that this introductory course has helped you further understand the topic, and it's provided you and your team with the right input to take the next steps.
>
> **[0:14](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=14)** For sure, if you're looking to create efficiencies in your data governance efforts, choosing the right level of automation, integration, standardization, and deeper collaboration could very well deliver much higher-performing results.
>
> **[0:28](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=28)** DataGovOps can bring rigor, speed, and greater accuracy to your data management requirements, while ensuring that your organization meets its compliance, security, and data quality targets.
>
> **[0:40](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=40)** It can also free up teams, such as data analysts and stewards, cybersecurity and IT professionals from manual tasks so they can work in higher-value efforts.
>
> **[0:51](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=51)** Bottom line, DataGovOps solves many of the organizational frustrations and overheads that data governance presents in its attempt to better manage data.
>
> **[1:01](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=61)** During this course, I mentioned additional courses that will benefit your learning journey.
>
> **[1:06](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=66)** I recommend both my [[Learning Data Governance]] and my Building a Data-Driven Culture courses right here on LinkedIn Learning.
>
> **[1:14](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=74)** Beyond my offerings, the LinkedIn Learning Catalog also has impressive data science and related courses that are worth checking out too.
>
> **[1:23](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=83)** Further, if you want to go much deeper on data governance, check out my book "Data Governance for Dummies", which you can find online or from your favorite brick-and-mortar bookstore.
>
> **[1:34](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=94)** Since DataGovOps is highly software-driven, I recommend exploring innovative data governance automation tools, and DataGovOps solutions that are available.
>
> **[1:45](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=105)** These vendor websites provide a wealth of knowledge on the topic, and of course, the many ways each can help you.
>
> **[1:52](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=112)** Finally, consider joining and participating in one of the many organizations focused on data management and governance.
>
> **[1:58](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=118)** Here, you can learn about the latest developments in the field and connect with other passionate professionals.
>
> **[2:04](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=124)** I also encourage you to reach out to me via LinkedIn and follow me on social channels.
>
> **[2:10](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=130)** It's been a pleasure to be your guide in this course.
>
> **[2:12](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=132)** I wish you abundant success in all your efforts.
>
> **[2:15](https://www.linkedin.com/learning/automated-data-governance-in-practice/continuing-your-datagovops-learning-journey?u=76281980&t=135)** Thank you, and good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** finally, (1)
> **Analogies:** such as (1)
> **Speakers:** - are (1)


## Path Context

### In [[Mastering Data Governance and Ethics]]
← [[Designing Data Governance]] | **5 of 9** | [[Data Ethics- Watching Out for Data Misuse]] →

## Appears In

- [[Mastering Data Governance and Ethics]]

## Related Courses

_Courses sharing skills:_

- [[Data Steward Foundations]] — Data Governance, Data Stewardship
- [[Advanced SQL for Data Science- Time Series]] — Data Science
- [[Lessons from Data Scientists]] — Data Science
- [[Big Data in the Age of AI]] — Data Science
- [[A Day In The Life Of A Data Scientist]] — Data Science

---

[↑ Back to top](#)