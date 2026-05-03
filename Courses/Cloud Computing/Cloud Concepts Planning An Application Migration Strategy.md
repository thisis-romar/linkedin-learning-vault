---
type: course
cssclasses:
  - lle-course
slug: cloud-concepts-planning-an-application-migration-strategy
url: "https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy"
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHpuXUlWpgR6A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1728413422915?e=2147483647&amp;v=beta&amp;t=ByOZ6ahO04weuMNw578lnaMC7REtA2hNwn7VLNNvh7o"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Introduction to Enterprise Cloud Migration Planning]]'
next_courses:
  - '[[Design a Cloud Migration Strategy]]'
path_nav: '[{"path":"Introduction to Enterprise Cloud Migration Planning","position":1,"total":4,"prev":null,"next":"Design a Cloud Migration Strategy"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/devops
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Cloud%20Concepts%20Planning%20An%20Application%20Migration%20Strategy.md)

![Cloud Concepts Planning An Application Migration Strategy](https://media.licdn.com/dms/image/v2/D4E0DAQHpuXUlWpgR6A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1728413422915?e=2147483647&amp;v=beta&amp;t=ByOZ6ahO04weuMNw578lnaMC7REtA2hNwn7VLNNvh7o)

# Cloud Concepts Planning An Application Migration Strategy

> For IT professionals, knowing how to handle application migration to the cloud efficiently is critical. In this course, cloud computing expert David Linthicum provides you with an approach and methodology for moving applications to the cloud. Begin by considering the business case for moving to the cloud, exploring the risks involved, and gaining an understanding of public and private cloud migrat

> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy)
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Take the migration journey with your applications to the cloud](#take-the-migration-journey-with-your-applications-to-the-cloud)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to Cloud Migration**](#1-introduction-to-cloud-migration) (6 videos)
  - [Understanding the business case](#understanding-the-business-case)
  - [Understanding the risks](#understanding-the-risks)
  - [Public cloud migration](#public-cloud-migration)
  - [Private cloud migration](#private-cloud-migration)
  - [Multicloud migration](#multicloud-migration)
  - [Cloud-based AI migration](#cloud-based-ai-migration)
- [**2. Selecting the Workloads**](#2-selecting-the-workloads) (4 videos)
  - [Good candidates for migration](#good-candidates-for-migration)
  - [Poor candidates for migration](#poor-candidates-for-migration)
  - [Leveraging workload categories](#leveraging-workload-categories)
  - [Creating migration priorities](#creating-migration-priorities)
- [**3. Selecting a Target Platform**](#3-selecting-a-target-platform) (4 videos)
  - [Public clouds](#public-clouds)
  - [Private clouds](#private-clouds)
  - [Multicloud](#multicloud)
  - [Other cloud platform options](#other-cloud-platform-options)
- [**4. Cloud-Based Tools**](#4-cloud-based-tools) (3 videos)
  - [AWS migration tools](#aws-migration-tools)
  - [Microsoft migration tools](#microsoft-migration-tools)
  - [AI migration tools for cloud computing](#ai-migration-tools-for-cloud-computing)
- [**5. Setting Up a Migration Factory**](#5-setting-up-a-migration-factory) (5 videos)
  - [Workload triage](#workload-triage)
  - [Selecting tools](#selecting-tools)
  - [Considering AI with cloud migration](#considering-ai-with-cloud-migration)
  - [Considering DevOps](#considering-devops)
  - [Creating a process](#creating-a-process)
- [**6. Migration at Scale**](#6-migration-at-scale) (5 videos)
  - [Getting up to 100 applications a day](#getting-up-to-100-applications-a-day)
  - [Organization and skill considerations](#organization-and-skill-considerations)
  - [Security considerations](#security-considerations)
  - [Governance considerations](#governance-considerations)
  - [AI and generative AI considerations](#ai-and-generative-ai-considerations)
- [**Conclusion**](#conclusion) (1 videos)
  - [Learning more about cloud migration](#learning-more-about-cloud-migration)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Take the migration journey with your applications to the cloud](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/take-the-migration-journey-with-your-applications-to-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/take-the-migration-journey-with-your-applications-to-the-cloud?u=76281980&t=0)** - The biggest [[Cloud Computing]] projects in the last 15 years have been about migrating applications and data from on-premises to public cloud providers. Enterprises have spent billions of dollars on this effort in search of more business value. In this course, we'll take the mystery out of application and data migration to the cloud. We'll focus on what works, including processes, tools, and technologies that have proven to be the best path to business value. Hi, I'm David Linthicum, internationally known cloud computing expert, and in my career, I have overseen no less than 300 application migration projects, and I'm happy to share that knowledge with you. I wish you luck and good learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (2)
> **Cross-References:** in the last (1)
> **Speakers:** - the (1)

#### [What you should know](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, it's helpful to understand the basics of computing and storage. However, this is an introductory course, so you don't need deep knowledge. It's also good if you're already familiar with [[Cloud Security]] and other related topics. However, if those are not on your list of skills, I'll provide enough information throughout the course to help you keep up. If you're not yet comfortable with any of these topics mentioned, I suggest you watch my course, [[Cloud Computing]] Core Concepts, which is available in the library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (1), [[Cloud Computing]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Cloud Migration

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding the business case](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=0)** - [Instructor] Cloud migration involves moving IT infrastructure, applications, and data from owned enterprise data centers to cloud platforms managed by cloud providers, such as [[Amazon Web Services (AWS)|Amazon Web Services]], or AWS; [[Microsoft Azure]], or [[Google Cloud Platform (GCP)|Google Cloud]]. Migrating from on-premises platforms to public cloud platforms is a far-reaching business decision that can offer significant benefits for businesses. However, that depends on a few things, such as the business itself, the industry that the business is in, and their existing systems. The primary value drivers behind cloud migration include cost savings, increased [[Scalability]], enhanced security, and improved performance. However, creating and understanding the business case is just not that simple. Let's explore some of the business drivers that we need to consider when looking at the value of [[Cloud Computing]] application migration. Cost efficiency and scalability. One of the most compelling reasons for migrating to a public cloud is cost efficiency, at least the opportunity to be more cost efficient. On-premises infrastructure require capital expenditure for [[Hardware]], software, and maintenance. They require that we hire skilled people to maintain these computer systems and other data center equipment. Conversely, public [[Cloud Services]] operate on a pay-as-you-go model, allowing businesses to scale resources according to demand. You only pay for the resources you use, much like you would the utility bills for your home.
>
> **[1:35](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=95)** That said, cloud is not always cheaper. Indeed, it can be more expensive unless you do some careful planning and make sure you're doing the application migration correctly. Enhanced operational resilience. Migrating to the cloud can improve operational [[Resiliency]]. In fact, since services are more reliable and available than those on-premises or private hardware, businesses moving to public cloud platforms can experience reduced unplanned downtimes by as much as 69%. I bet you can remember a few times when your employer's systems were down, hindering your ability to do your job. Cloud may provide better uptime, which makes the business money. Flexibility and performance. The flexibility offered by cloud platforms is another business advantage. Unlike the static nature of on-premises solutions, cloud platforms provide dynamic scalability for using on-demand resource allocation. This provides the business with agility, allowing businesses to respond to market changes or any event that requires that they scale operations efficiently, and with public cloud providers on demand. Building a strong business case. To build a strong business case for cloud migration, businesses should carry out a thorough assessment of the current infrastructure or determine the as-is state, then figure out the total cost of ownership, or TCO, in the cloud environment. What does this tell you? This model helps you qualify potential cost savings,
>
> **[3:09](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=189)** productivity gains, and operational improvements that you may find when using a cloud platform. Keep in mind that this is where the "It depends" answer comes into place. It depends on your business, existing state of things, and how cloud may or may not save you money. Next, let's look at the risks we need to consider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (3), [[Hardware]] (2), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Microsoft Azure]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **CLI Commands:** aws (1), make (1), find (1)
> **Env Vars:** aws (1), tco (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Understanding the risks](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=0)** - [Instructor] So what are the risks that we need to consider when moving to public cloud platforms? Some are obvious, some not so much. It's good that we review them here. [[Data Security]] and [[Privacy]]. Moving sensitive data, such as data that is personally identifiable, to public clouds requires sound security approaches. Cyber attacks, data breaches, and unauthorized access are all potential risks and should be considered before pulling the trigger on moving our applications to the public cloud. It's essential to implement encryption, access controls, and regular security audits. We'll cover this in a later video. Compliance issues. Different industries have different regulatory requirements. These are laws or guidelines regarding data handling, management, and storage. They can define how you need to encrypt some data, or even the fact that the data is not allowed to leave its country of origin. So making sure that your public cloud provider meets all relevant compliance standards is needed to reduce the risk of non-compliance that can lead to legal penalties and reputational damage. Service outages. What is the risk that the cloud service goes out altogether? It's low, but it's still there. Public cloud providers, despite the robust infrastructure, are not immune to outages. Downtime can severely impact [[Business Operations]]. We all know that this can lead to potential revenue loss and decreased customer satisfaction. Indeed, many banks report that an hour of outage
>
> **[1:34](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=94)** can cost the business more than $10 million, considering all impacts. Vendor lock-in. Once a business migrates to a specific cloud provider, switching providers can be costly as we've localized our applications on the cloud for that specific provider. A great deal of work is needed to be done when moving to another provider with different native services and application usage. [[Cost Management]]. [[Cloud Services]] offer a pay as you go model, but costs can spiral out of control without proper oversight. Unmonitored usage, unused resources, and data transfer fees can lead to cloud bills that will send your CFO running to your [[Microsoft Office|office]]. Effective cost monitoring and optimization tools are necessary to manage and control cloud expenditures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Security]] (1), [[Privacy]] (1), [[Business Operations]] (1), [[Cost Management]] (1), [[Cloud Services]] (1)
> **Env Vars:** cfo (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Public cloud migration](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=0)** - [Instructor] Migrating to a public cloud involves transferring data, applications and workloads from on-premises data centers to infrastructure provided by public cloud providers. These are companies like [[Amazon Web Services (AWS)|Amazon Web Services]], [[Microsoft Azure]], or [[Google Cloud Platform (GCP)|Google Cloud]]. This transition brings benefits such as enhanced [[Scalability]], cost efficiency, and improved performance, but it also comes with challenges that must be navigated carefully. Application Portfolio Assessment. The initial step in cloud migration involves a thorough assessment of the application portfolio. This means that we're looking at existing applications and datasets to assess the amount of work that needs to occur to move the workloads to a public cloud provider. This may include accessing the security and compliance issues, the processing load, the amount of storage required, and any dependencies that exist. For instance, an application that's tightly coupled to another system. The dependencies need to be assessed on the public cloud provider. Security Considerations. Security is a major concern during cloud migration in terms of how security should be dealt with on the target cloud platform to meet the needs of the business. This means considering effective data protection, access control, and [[Continuous Monitoring]]. These are essential components of a robust security strategy. Data Protection, or the ability to implement strong encryption for data both at [[Representational State Transfer (REST)|rest]] and in transit. We have a complete course on [[Cloud Security]]
>
> **[1:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=92)** that you can check out if you need more understanding. Access Control, meaning enforcing strict identity and access management policies to ensure that only authorized personnel have access to sensitive data and applications. Continuous Monitoring, or the ability to continuously monitor systems to detect and respond to security threats in real time. This includes logging, auditing, and automated alerts to maintain the secure environment. Building and Deploying a Migration Plan. Creating a detailed migration plan is essential for a successful migration project. These plans normally include, develop a high-fidelity inventory of applications and their dependencies, conduct a thorough risk and cost analysis to ensure effective resource allocation and risk mitigation. Identify the skills required to support cloud workloads and ensure necessary training and development programs are in place. Execute the migration plan while continuously monitoring and adjusting based on feedback and [[Performance Metrics]]. Ensure alignment across all teams and efficient resource allocation. Lots to think about in terms of things that need to be considered when moving applications to a public cloud provider. Now, let's move into what to consider when moving to a private cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Monitoring]] (2), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Microsoft Azure]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Scalability]] (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** such as (1), for instance (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Private cloud migration](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=0)** - [Presenter] Migrating to a private cloud is much the same as migrating to a public cloud. It involves transferring data, applications and workloads from the systems that are hosting the current set of applications normally in an enterprise data center to an infrastructure provided by a private cloud that you've implemented also inside the data center. The transition can bring benefits, such as enhanced [[Scalability]], cost efficiency, and improved performance, but it also comes with challenges that must be navigated carefully. Before you can start, a huge and important part of this migration is being charged with installing, configuring, and operating your own [[Hardware]] solution to support the private cloud system, including planning and the same tasks or steps that would occur in the installation of a traditional system. Application portfolio assessment. The initial step in private cloud migration, as it was in public cloud migration, involves a thorough assessment of the application portfolio. This may include assessing the security and compliance issues, the processing load, the amount of storage required, and any dependencies that exist. Security considerations. Security is a bit different when considering private cloud migration in that we own the systems. Some consider this more secure since we have physical possession of the systems, but much the same security concerns as with public clouds exist. This means considering effective data protection, access control, and [[Continuous Monitoring]].
>
> **[1:36](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=96)** These are essential components of a robust security strategy for private cloud migration. Data protection or the ability to implement strong encryption for data, both at [[Representational State Transfer (REST)|rest]] and in transit. Access control, meaning enforcing strict identity and access management policies. This means linking to common directory services and shared security services with other systems in the data center. Continuous monitoring or the ability to continuously monitor systems to detect and respond to security threats in real time, as we discussed in our last video. Building and deploying a migration plan. Creating a detailed migration plan for private cloud migration normally includes, and yes, this is the same as we discussed migration around public clouds, develop a high fidelity inventory of applications and their dependencies, conduct a thorough risk and cost analysis to ensure effective resource allocation and risk mitigation, identify the skills required to support cloud workloads and ensure necessary training and development programs are in place, execute the migration plan while continuously monitoring and adjusting based on feedbacks and [[Performance Metrics]]. Lots to think about in terms of things that need to be considered when moving applications to a private cloud provider. Now let's move into what to consider when moving to a multi-cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Monitoring]] (2), [[Scalability]] (1), [[Hardware]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Performance Metrics]] (1)
> **Cross-References:** we discussed (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [presenter] (1)

#### [Multicloud migration](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=0)** - [Instructor] Okay, now things are getting interesting. Instead of migrating to a single public cloud or a single private cloud, we're migrating to many clouds, including two or more public cloud providers, which may or may not include a private cloud or two depending on your situation. The good news is that the concepts we just went over apply for multicloud. We just do them for each public and private cloud provider. So we'll need to consider application portfolio assessment, security and compliance considerations, and create a migration plan for each platform. If this sounds like more work, it isn't really. This is just moving to different cloud providers, public and private, and moving to a platform that's going to work together to create a multicloud solution. Dealing with Complexity. One of the things that you'll most notice about moving to a multicloud deployment is that you're dealing with more complexity. Just the fact that you have more than a single cloud brand, such as [[Google]], AWS, and [[Microsoft]], means that you're dealing with two or more platforms that have their own native security systems, operation systems, governance systems, storage systems, and [[Application Development]], and deployment systems, Need many skills. If it's not already apparent after what I just mentioned, you'll need specific talent for the cloud brands you just deployed, including the private cloud platforms. This adds cost and risk, but can be overcome with some good planning.
>
> **[1:34](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=94)** Planning is Important. Planning becomes the key thing to consider here in that, if you don't plan properly, considering all things that need to occur in the sequence that they should occur, things won't go well. Considering that we're dealing with multiple threads of migration efforts for each specific cloud platform. And what we discussed in the last two videos needs to be multiplied times the number of cloud platforms that you're moving to. It's hard, but can be achieved by moving to multicloud. Indeed, this is occurring today with several major enterprises. Now let's look at what it takes to migrate AI systems to the cloud public and private.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[Microsoft]] (1), [[Application Development]] (1)
> **Cross-References:** we discussed (1), in the last (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Cloud-based AI migration](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=0)** - [Instructor] This is about migrating a type of application, in this case, AI applications. There is good news and bad news here. The good news is that migrating AI systems from traditional systems to public or [[Private Clouds]] is much the same as other applications. They have data, they have application components, they have operations and security requirements. Thus, not much changes when doing the planning, as we discussed in the last three videos for private, public and multi-cloud migration. The bad news is that many of these AI systems use higher end processors such as graphics processing units, or GPUs. Thus, special planning is needed to ensure that the target private or public cloud platform can support those processing loads as well. Fortunately, public clouds are all in on AI and support these types of higher end processors. For private clouds, you're more on your own, but given that your existing platforms running AI are also owned platforms, this may or may not be a major challenge for Cloud Migration Engineers. Also keep in mind that AI systems migrating to clouds have training data to consider. Sometimes the data is migrated as well, but many times it stays the same, and you'll have to figure out how that data is migrated from its current platform to the AI system on the cloud platforms. This means you'll need to consider data migration and middleware solutions that can carry this out. Finally, we need to consider where the AI models are going
>
> **[1:36](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=96)** to be processed during inference operations. This is when the models answer questions for applications or humans. This needs to occur in a responsive manner and you'll need to make sure that the cloud provider is up for the challenge. This is the hardest aspect of cloud migration considering the applications that you're migrating, security and compliance, and how you're going to deal with the platforms complexity and array of skills that are needed. In the next section, we'll talk about how you'll select the workloads.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Private Clouds]] (2)
> **Cross-References:** we discussed (1), in the last (1), in the next (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 2. Selecting the Workloads

[↑ Back to Table of Contents](#table-of-contents)

#### [Good candidates for migration](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=0)** - [Instructor] In this video, we'll learn how to pick the workloads that you should migrate to the cloud, including picking workloads that have the best chances of success with a minimum amount of risk. Websites and web applications often demand high availability, [[Scalability]], and global reach. This makes them good candidates for cloud deployment. Public clouds provide scalable infrastructure to ensure uptime, and can handle sudden surges in traffic. Indeed, cloud providers offer web applications and operation services that you can leverage on demand. [[Content Management Systems (CMS)|Content management systems]], or CMSs, benefit from the cloud's capability to scale. Moreover, it can do so based on demand. Public clouds have features, like elastic load balancing, that allow for better scaling. Also, content delivery networks, or CDNs, enable better performance and [[User Experience (UX)|user experience]] when deploying and operating a CMS. Development and testing environments are also a good candidate for a public cloud. This is because public cloud providers offer on-demand resources that can be leveraged on demand. This reduces the need for physical [[Hardware]]. Also, these public cloud platforms can scale up or down based on needs of the [[Software Development]] and testing cycles. [[Big Data Analytics]] and [[Business Intelligence (BI)|business intelligence]], or BI, applications
>
> **[1:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=92)** are applications that require significant processing power. Also, the need to leverage scalable storage that the public cloud providers can offer. Thus, public clouds are often more cost-effective than on-premise solutions for these types of applications and other good candidates for migration. Disaster recovery and backup services are another good use for public clouds. They offer high reliability and quick recovery times. This given the fact that the cloud is already a redundant system that is geographically dispersed, attributes you want in a disaster recovery service or backup services. Now that we've looked at good candidates for cloud migration, let's look at bad candidates, or applications that we may want to avoid in terms of cloud migration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (1), [[Content Management Systems (CMS)|Content management systems]] (1), [[User Experience (UX)|User experience]] (1), [[Hardware]] (1), [[Software Development]] (1)
> **Env Vars:** cms (1)
> **Speakers:** - [instructor] (1)

#### [Poor candidates for migration](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=0)** - [Instructor] Not all applications are suitable for migration to a public cloud provider. In fact, many estimate that 40% of existing applications won't benefit from migration to the cloud. Some may face issues related to performance, security, compliance, or cost that make them poor candidates for cloud migration. Keep in mind that even if you can migrate an application to a public cloud provider, that does not mean that applications are able to benefit the business more so than leaving the applications where they are. Here are some types of applications that are typically considered bad candidates for cloud migration. Legacy applications with high complexity, especially those that are highly complex and tightly coupled with on-premises [[Hardware]] or software, are difficult to migrate. Considering that a great deal of development and re-engineering needs to occur to carry out this migration. This means unexpected expenses and extended downtime. Applications with high and predictable workloads, which are applications that consistently demand high computational resources. These types of applications may not benefit from the variable cost structures of [[Cloud Services]]. Keep in mind that if the workload is predictable and steady, these are often a better fit for on-premises hardware that could be more cost-effective in the long run. Indeed, much of the applications that fall into this category end up being returned back to on-premises. Considering that [[Cloud Infrastructure]]
>
> **[1:33](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=93)** can lead to higher ongoing operational costs due to its pay-as-you-go pricing model. Applications with low latency requirements, meaning certain applications, particularly those during time [[Data Processing]] or specialized manufacturing processing that require low latency performance. The physical distance between cloud data centers and the end users is typically the cause for this latency. You may see that when using systems in other countries that the performance is often lower than applications that are closer by. This is the same concept. Highly regulated applications are applications that deal with highly sensitive or regulated data. This means data that, if not managed legally, can get you arrested. Nobody wants that. This includes healthcare, government, or finance. But other industries or other countries may also have their own specific laws and regulations that must be adhered to. Strict regulations like GDPR, HIPAA, or HIPAA, or certain national security requirements often require data to be managed and stored in very specific ways. While the public cloud provider can accommodate this type of data and provide a compliance platform, many enterprises may not want to risk it and keep physical control over the data on-premises. Let's move on to understanding the workload categories that we can use to organize the workloads that may be moving to public cloud providers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Cloud Services]] (1), [[Cloud Infrastructure]] (1), [[Data Processing]] (1)
> **Env Vars:** hipaa (2), gdpr (1)
> **Warnings:** keep in mind (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Leveraging workload categories](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=0)** - [Instructor] When considering cloud migration, effectively categorizing workloads is just a good idea. It allows you to organize applications into specific categories that provide a better approach for consideration for migration to a public cloud provider. Here are a few good ways to categorize workloads. First, categorize workloads by type of application. This means that we're differentiating between customer-facing applications, internal business applications, development and testing environments, and data and analytics applications. Or you can create your own application types. This aids in tailoring the migration strategy to the specific needs and attributes of each application type. Customer-facing applications, for instance, demand high availability and [[Scalability]]. However, development and testing environments can benefit from elastic resources that public clouds can provide. Second, assess workloads based on their criticality and business impact. This prioritizes which application should be migrated first, and is useful when you may have a limited amount of budget to carry out these migrations. You need to consider what's critical and noncritical. Mission-critical applications are essential for [[Business Operations]]. Thus, they require the most careful planning to ensure they are kept running. However, noncritical applications with the minimal impact on business operations,
>
> **[1:34](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=94)** if they stop working, may be easier to migrate early in the process because they are able to migrate with a lower business risk. Next, understand the complexity of migration for each workload. This means considering if the application is straightforward to migrate. For example, standalone applications with minimal dependencies versus complex applications with many dependencies. Categorizing by complexity allows better planning. Another way to provide categorization is by compliance and regulatory requirements, identifying highly regulated workloads that need to comply with strict regulations, such as those in healthcare or financial services. Finally, it's crucial to categorize workloads by usage patterns. This means understanding whether an application has consistent, variable, or seasonal usage. This can define the migration strategy in terms that we can leverage cloud scalability effectively. Applications and data sets with seasonal demand benefit significantly from cloud elasticity, and thus should be considered during migration planning. Next, let's look at how we create migration priorities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (2), [[Business Operations]] (2)
> **Analogies:** for instance (1), for example (1), such as (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Creating migration priorities](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=0)** - [Instructor] When creating migration priorities for application migration to public cloud providers, here are the most important considerations. Evaluate the business impact and criticality of each application that you're considering migrating to the cloud. This means identifying mission-critical applications that are essential for [[Business Operations]], as we discussed in the last video. Thus, these applications require careful planning to ensure minimal disruption. Understand and map out dependencies between applications, systems, and data. There are many ways to do this, but using discovery tools to assess how applications interact are an easy path these days. Keep in mind that applications with fewer dependencies are typically easier to migrate. However, those with complex interdependencies will need a more coordinated approach to minimize operational disruptions. Classify applications based on complexity of their migration. For example, simple workloads with minimal dependencies, or those applications that leverage more simplistic architectures, should be prioritized for early migration since they are basically low hanging fruit. However, complex workloads should have detailed migration plans addressing their specific needs. Assess the compliance and regulatory requirements for each application. Some applications may handle highly sensitive or regulated data. This obviously adds risk, and we need a meticulous plan ensuring legal and compliance standards are met.
>
> **[1:35](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=95)** Next, let's get into looking at the cloud platforms themselves in the next section of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Business Operations]] (1)
> **Cross-References:** we discussed (1), in the last (1), in the next (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 3. Selecting a Target Platform

[↑ Back to Table of Contents](#table-of-contents)

#### [Public clouds](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=0)** - [Instructor] Leveraging a public cloud for migrating applications offers numerous benefits. Spoiler alert, especially in the areas of [[Scalability]] and elasticity, cost effectiveness, reduced time to market, and global reach. Let's look at the basics. One of the foremost benefits is scalability and elasticity. Public clouds allow organizations to scale resources up or down based on the demands of the applications or systems. This means that applications can handle varying workloads without taking a hit on performance, which makes it particularly useful during peak usage times for traffic surges. Potential cost effectiveness is another significant advantage. Again, this is another it depends on type of fact in that you'll save money in some cases, but not others. Public clouds operate on a pay-as-you-go model. This has the potential to reduce cost associated with buying and maintaining physical [[Hardware]]. This means that businesses pay only for the resources they actually use and can allow them to avoid paying for hardware resources that they must host. The reduction in time to market is a larger selling point of public cloud. This means provisioning infrastructure in public cloud environments is much faster, at least compared to traditional on-premises systems. This has the potential to accelerate the deployment of applications and services. What are the benefits? They enable businesses to bring [[Microsoft Products|products]] and features to market quickly,
>
> **[1:34](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=94)** which can provide a great amount of business value. Lastly, global reach is a key advantage of public clouds. Indeed, public cloud providers have data centers, which are called regions that reach across the globe. This enables organizations to deploy their applications closer to the end users. As you may expect, this can improve performance and reduce latency for users that are closer to those regions. Now let's look at the benefits of [[Private Clouds]] as target platforms for application migration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (2), [[Hardware]] (2), [[Microsoft Products|Products]] (1), [[Private Clouds]] (1)
> **Definitions:** means that (2), is a  (2)
> **Speakers:** - [instructor] (1)

#### [Private clouds](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=0)** - [Narrator] So, what about [[Private Clouds]] as a target platform for migration? Private clouds also have selling points that should be considered. Let's go over a few of them now. Complete Control. Private clouds allow you to own the platforms, thus, you have total control over the platforms in terms of what [[Hardware]] to run, where the hardware will run, what will run on the hardware, such as the types of private cloud software. Also, control over physical security. Potentially Lower Cost. Wait, didn't we just say that public clouds are cheaper? Yes, but that is another, it depends, type of situation. Private clouds are no different. The cost of hardware has dropped a great deal over the last 10 years, meaning that private clouds are often less expensive than public clouds as the target of application migrations. So, you'll be wise to do your own math looking at your specific situation when it comes to seeing if private clouds are more cost-effective or not. You'll have no neighbors to deal with. When your applications are on a public cloud, you'll have to share the resources with hundreds of other companies that are using servers, including compute and storage systems at the same time. This is called multi-tenancy, and public clouds are very good at making sharing physical servers appear like you're the only user. However, there is a performance hit and sometimes companies are concerned about security issues such as the other processes being able to access your data.
>
> **[1:37](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=97)** For the record, this does not seem to be a problem. Thus, private clouds, which allow you to be the only user on your hardware since you own it, is preferred by enterprises that are concerned about sharing their servers. Next, we'll take a quick look at multi-cloud as a platform target for migration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Private Clouds]] (7), [[Hardware]] (5)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** such as (2)
> **Speakers:** - [narrator] (1)

#### [Multicloud](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980&t=0)** - [Instructor] Much of the advantages of multicloud have been covered already, so let's just look at some of the core benefits of leveraging a multicloud as a target platform for cloud migration. Access to best-of-breed services. Unlike when you leverage just a single cloud provider, multicloud means you can leverage the services found in more than a single cloud provider. Thus, you can use a database on AWS, an AI system on [[Microsoft]], and a [[Business Analytics]] system that is found on [[Google Cloud Platform (GCP)|Google Cloud Platform]]. This means that you're able to optimize your solution using only the best services for any number of providers. [[Cost Management]] is another advantage. Much like the benefits of leveraging multicloud when it comes to best-of-breed services, you can also leverage services that provide lower costs and higher value. This means you can mix and match services to find the correct cost model for your migrated applications, much like you do when shopping around for [[Microsoft Products|products]] such as cars, food, and appliances. However, there are downsides. Multicloud deployments are more complex, and thus you need tools and skilled people to manage these platforms. There are ways to manage this complexity, but it will take some additional planning. Next, let's round out this section with a discussion of other platforms that you can also consider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Business Analytics]] (1), [[Google Cloud Platform (GCP)|Google cloud platform]] (1), [[Cost Management]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** aws (1), find (1)
> **Env Vars:** aws (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Other cloud platform options](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=0)** - [Instructor] What about other platform alternatives that may be a cloud or not a cloud? Are there any considerations there? Here are the major concepts that you need to consider. Edge computing means that we're putting applications and data on platforms that are on the edge of a larger system, such as a public cloud provider. These platforms are often lower powered and perform single tasks, such as a thermostat in your home, or a computer in your car. These are the most helpful when you want to run the applications closest to where the data is collected, thus reducing latency and increasing application performance. Mobile computing simply means that we're running applications on mobile devices, such as a smartphone, smartwatch, tablet computer, or other devices that move around. Of course, this is only meant for specific kinds of applications and use cases. However, some applications may be a better fit on a mobile platform than a private or public cloud provider. Other options may include micro-clouds, which are clouds that provide a narrow set of services. The most popular types of these include a number of small cloud providers that just focus on AI services, and often provide specific AI processors, such as GPUs as a service for building and deploying AI systems. Clearly, they are not for general purpose applications, but are focused on a specific application type, such as AI. But it's helpful to understand that they are an option. Next, let's look at specific cloud-based tools.

> [!info]- Semantic Content
>
> **Analogies:** such as (5)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 4. Cloud-Based Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [AWS migration tools](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=0)** - [Instructor] When migrating applications to the cloud, you don't do it on your own. Tools are definitely needed. The next few videos, we are going to list some of the more popular tools for specific cloud providers, and we're starting with AWS. Here are the top four migration tools commonly used for migrating applications from on premises systems to the AWS Cloud. AWS Server Migration Service, or AWS DMS. AWS Server Migration Service helps migrate on premises workloads to AWS by automating scheduling and tracking incremental server applications. This tool simplifies the process of application migration, allowing you to perform large scale migrations. We'll cover this in a later video that covers how to create a migration factory. This is simply a highly automated system that provides enterprises with the ability to migrate many applications at once using a unified tool set. AWS Data Migration Services, or AWS DMS. AWS Data Migration Service provides you with the ability to migrate [[Databases]] to AWS. You're able to do this with minimal downtime. This tool supports various database engines allowing for most data migrations to AWS. DMS continuously replicates the data from the source database, typically on premises to the target database typically in AWS. AWS Application Migration Service simplifies and automates
>
> **[1:34](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=94)** the migration of applications to AWS. This tool eliminates the need for manual processes, thus reducing time by providing a cloud-native platform for the automatic conversion of applications and data in support of application migration. AWS DataSync. AWS DataSync simplifies the movement of large amounts of data between on-premises storage and AWS storage services. This tool is particularly useful for repetitive and high-volume data transfers. These tools provide a suite of tools for addressing various aspects of application migration to AWS. One of the things that you may have noticed is that many of the tools do the same things. Indeed, they do, and you'll find that you'll leverage one or the other, but not all of these tools. Also, while we've only covered four tools here, there are dozens to consider. Now let's look at [[Microsoft]] migration tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Microsoft]] (1)
> **Env Vars:** aws (18), dms (3)
> **CLI Commands:** aws (18), find (1)
> **Speakers:** - [instructor] (1)

#### [Microsoft migration tools](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=0)** - [Instructor] Continuing our discussion of cloud tools for specific clouds, there are the top four [[Microsoft Azure]] migration tools. Again, these are commonly used for migration applications from on-premises systems to [[Microsoft Azure|Azure]] Cloud. Azure Migrate. Azure Migrate is a centralized hub for managing the process of migration to Azure. It's able to carry out a few core duties such as discovery, addressing and migrating on premises infrastructure, applications, and data to Azure. This tool is both agentless and agent-based, and also works with other Azure services for a comprehensive migration process. Azure Site Recovery, or ASR. Azure Site Recovery, as the name implies, is used for disaster recovery. However, it also facilitates seamless migration of on-premises physical servers and [[Virtual Machines]] to Azure public cloud. This tool is able to replicate workloads running on physical and virtual machines and easily move them to Azure. Azure Database Migration Services, or DMS. Azure Database Migration Services, as with the AWS tool we covered in the last video, enables easy migration of various database types to Azure. So what [[Databases]] are supported? It supports the migration of [[Microsoft SQL Server|SQL Server]] to Azure's [[SQL]] Database and heterogeneous databases such as Oracle to Azure SQL Database and database environments.
>
> **[1:36](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=96)** Azure App Service Migration Assistant. The Azure App Service Migration Assistant is able to migrate web applications to Azure App Service. This tool is able to assist in migrating to .NET and [[PHP]] web applications. And it's able to carry this out with minimal or no code changes. These tools offer a comprehensive suite for managing different aspects of application migration and are able to provide smooth and efficient transition to the Azure Cloud. Next, we'll talk about AI migration tools for [[Cloud Computing]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (19), [[Virtual Machines]] (2), [[Databases]] (2), [[SQL]] (2), [[Microsoft Azure]] (1)
> **Env Vars:** sql (3), asr (1), dms (1), aws (1), net (1)
> **CLI Commands:** aws (1), php (1)
> **Cross-References:** we covered (1), in the last (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [AI migration tools for cloud computing](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=0)** - [Instructor] What about the tools powered with AI? Here are the top four AI-powered cloud migration tools used for migrating applications from public clouds to on-premises systems. IBM Cloud Pak for Data. IBM Cloud Pak for Data uses AI to support the migration of data and applications to the IBM cloud. This tool includes capabilities for [[Data Integration]], data cleansing, and [[Data Transformation]]. It leverages AI to automate many aspects of the migration process. This provides an easy transition with minimal manual intervention. AWS Application Migration Services automates the migration of applications to AWS. As we covered in a previous video, it leverages machine learning to streamline the conversion process. AI is also used to reduce manual task and provide minimal downtime. [[Microsoft Azure|Azure]] Migrate. Azure Migrate is an AI-powered tool that provides the migration of on-premises applications to [[Microsoft Azure]]. This tool includes processes for things like discovery, assessment, or processes to see what your existing as-is applications are doing. Then, migration of the applications and data. [[Google Cloud Platform (GCP)|Google Cloud]] Migration Tools. Google Cloud offers a range of AI-powered migration tools within its ecosystem. One of these includes Migrate for Compute Engine and Migrate for Anthos. These tools use machine learning to automate migration of applications,
>
> **[1:33](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=93)** VMs, or [[Virtual Machines]], and containers to the Google Cloud. These AI-powered migration tools streamline the processes of moving applications from on-premises systems to public clouds. We're bound to see these types of tools grow quickly over the next several years, as AI becomes more useful to all aspects of application migration to the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Cloud Platform (GCP)|Google cloud]] (3), [[Microsoft Azure|Azure]] (2), [[Data Integration]] (1), [[Data Transformation]] (1), [[Microsoft Azure]] (1)
> **Env Vars:** ibm (3), aws (2)
> **CLI Commands:** aws (2)
> **Cross-References:** we covered (1), previous video (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 5. Setting Up a Migration Factory

[↑ Back to Table of Contents](#table-of-contents)

#### [Workload triage](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=0)** - [Instructor] When migrating applications from on-premises to a public cloud provider, Workload Triage is a crucial initial step. This ensures a successful transition to the cloud, since you know what you're moving and how to deal with each application. Here are three basic steps for Workload Triage. Assessment and discovery. Begin by assessing all workloads within your on-premises environments. This involves creating an inventory of all applications, services, dependencies, and associated resources. The objective is to understand the as-is state. Also, we need to understand the capability and readiness for migration. Categorization and prioritization. Once we have a comprehensive inventory, categorize and prioritize the workloads based on criteria. This criteria may include business criticality, complexity, dependencies, and migration feasibility. Planning and strategy development. Develop a detailed plan and strategy for migration. This includes selecting a specific migration plan for each categorized workload, or how do we best move the application and data to a public cloud provider? This also means creating a timeline, allocating resources, and determining the business value and objectives to define success of the application migration project. By following these basic steps where workload triage organizations can prepare for migration without having to guess about anything, this ensures that critical factors are considered
>
> **[1:34](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=94)** and that the transition to the public cloud is as seamless as possible. Next, let's talk about selecting tools.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Selecting tools](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=0)** - [Instructor] Selecting the right tools for cloud migration is crucial to ensure a successful and efficient transition. Here are three basic steps that you should consider. Assessment and [[Requirements Gathering]], we should begin by assessing your current on-premises infrastructure. We do this to understand our migration needs. This includes identifying the specific workloads, applications, and data that needs to be migrated. The goal here is to create a detailed picture of what needs to be migrated, along with any specific requirements or constraints. We need to do this before we can figure out what tools we'll need. You'll find that this is systemic to most of what we do here. Evaluation and tool selection, with the requirements complete, we need to evaluate the available migration tools and services offered by cloud providers. While AWS, [[Microsoft Azure|Azure]], [[Google Cloud Platform (GCP)|Google Cloud]] are tool providers, there are third-party tools to consider as well. Consider factors like compatibility with your existing infrastructure, ease of use, cost, [[Scalability]], and support for the migration approach you plan to use. Look for the tools that offer comprehensive capabilities for each phase of migration. Finally, make sure to also check for any added benefits. These may include automated processes or AI enhanced features, also integration with other tools and [[Cloud Services]], Proof of concept, or POC, and final selection, before committing to any tool, conduct a proof of concept or a POC to test its capabilities for suitability
>
> **[1:36](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=96)** for your specific workloads and requirements. This is basically the show-me step where we're making sure that the tool works as advertised. At times, you'll find that these tools are oversold by the vendors, or that there may be some capability problems that no one understood prior. This step will save you a great deal of time, money, and avoiding problems. Select a small representative sample of your applications or data for the POC. Evaluate how well the tool handles assessment, migration, and deployment phases during this trial. Look for ease of use, efficiency, reliability, and performance improvements. Gather feedback from your team on the experience of using the tool. By following these three basic steps, you can streamline the process of identifying the right tools for migrating to the cloud, ensuring a smoother and more effective migration journey. Next, let's talk about considering AI as a resource for your application migrating journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Requirements Gathering]] (1), [[Microsoft Azure|Azure]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Scalability]] (1), [[Cloud Services]] (1)
> **CLI Commands:** find (2), aws (1), make (1)
> **Env Vars:** poc (3), aws (1)
> **Analogies:** picture (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Considering AI with cloud migration](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=0)** - [Presenter] Will AI save you? Not really, but using AI can be handy when considering the value that it can bring to application migration to the cloud. When considering cloud migration, leveraging AI offers several advantages across various dimensions. First, automation plays a critical role. AI-powered tools like AWS Application Migration Service, [[Microsoft Azure|Azure]] Migrate, and [[Google]]'s Cloud's AI enabled tools can automate many tasks involved in the migration process. You may recall that we covered these tools in the last section. This includes the initial assessment and planning to the actual migration and post-migration optimization. These tools can automate repetitive manual tasks, such as resource allocation, performance monitoring, and risk assessment, which accelerates the migration process and reduces the likelihood of human error. Second, optimization and resource management are enhanced through AI-driven tools. These are tools you may also be familiar with from the previous section. They include Turbonomic, owned by IBM, and Platform9, which continuously analyzes cloud environments to optimize resource usage. AI can analyze performance data and usage patterns to make [[Real-Time]] adjustments to resource allocations, ensuring efficient application performance throughout the migration. While they're handy, you can't really automate everything. Thus, you need to use planning and strategy
>
> **[1:34](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=94)** around leveraging these tools to find the true value. Finally, risk mitigation and compliance are significantly improved through AI tools. What are these tools? They include IBM Cloud Pak for Data and AWS Trusted Advisor. These tools use AI to identify potential risks and ensure compliance with industry standards. By continuously monitoring the migration process for compliance with security policies and regulatory standards, AI can identify and mitigate risks such as vulnerabilities, data breaches, and performance bottlenecks. By focusing on automation, organizations can leverage AI's advantage to achieve a smoother, more efficient and secure cloud migration. While they are not replacing humans just yet, they are handy to consider and to leverage. Next, let's talk about [[DevOps]] and cloud migration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[Google]] (1), [[Real-Time]] (1), [[DevOps]] (1)
> **CLI Commands:** aws (2), make (1), find (1)
> **Env Vars:** aws (2), ibm (2)
> **Cross-References:** we covered (1), in the last (1)
> **Analogies:** such as (2)
> **Speakers:** - [presenter] (1)

#### [Considering DevOps](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=0)** - [Instructor] Incorporating [[DevOps]] into your cloud migration strategy is crucial for ensuring a seamless transition and establishing an effective development process and toolchain. Here are three of the most important concepts to consider. Integration and automation. As part of your cloud migration, select [[Cloud Services]] and tools that integrate with your existing DevOps toolchain. This is done to enhance your automation capabilities. This includes using cloud-native CI/CD tools, our [[Continuous Integration (CI)|continuous integration]] and continuous deployment tools, such as AWS CodePipeline, [[Microsoft Azure|Azure]] DevOps, and [[Google Cloud Platform (GCP)|Google Cloud]] Build to automate the build, test, and deployment process. Additionally, employ [[Infrastructure as code (IaC)|infrastructure as code]] or IaC tools, like [[Terraform]] and AWS CloudFormation, to automate infrastructure provisioning and management. [[Continuous Monitoring]]. Continuous monitoring tools and approaches are key principles of DevOps. We use these to provide robust monitoring and logging practices using cloud-native tools like AWS CloudWatch, Azure Monitor, and Google Cloud operations suite. Collaboration and culture. DevOps is as much about fostering and collaborative culture as it is about technology. This means as a part of DevOps used within the activities of cloud migration that we're encouraging communications and collaborations between development, operations, and security team. This needs to occur throughout the cloud migration process. Use collaboration platforms like [[Slack]]
>
> **[1:36](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=96)** or [[Microsoft Teams]] to facilitate this interaction. Incorporating DevOps into your cloud migration strategy is a key step that cannot be skipped. This will enhance efficiency, reliability, and continuous improvement. Next, let's finish our discussion by explaining how to create a migration process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (7), [[Microsoft Azure|Azure]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Continuous Monitoring]] (2), [[Cloud Services]] (1)
> **CLI Commands:** aws (3), cd (1), terraform (1)
> **Env Vars:** aws (3)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Creating a process](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=0)** - [Instructor] Creating a process for application migration to the cloud involves several steps, but the three most critical ones are assessment and planning. Do an assessment of your existing IT environment. This includes creating an inventory for all applications, understanding their dependencies, and evaluating their readiness for cloud migration. Use tools like AWS Migration Hub, [[Microsoft Azure|Azure]] Migrate, and [[Google]]'s Cloud Migrate for Compute Engine for automated discovery and assessment. You may recall that we already discussed why we're doing this. Basically to understand better the applications that we'll be moving to the cloud. Migration execution. With a detailed plan in place, proceed to execute the migration. Depending on the migration strategy chosen, this could mean simple lift-and-shifts, rehosting, or more complex transformation that may employ refactoring or architecting. Use cloud-native migration tools like AWS Database Migration Service, Azure Site Recovery, or Google's Cloud Migrate for Anthos to assist with this portion of the process. Optimization and ongoing management. Once the applications are successfully migrated, the next step is to operate the cloud environment. This involves monitoring performance, scaling resources as needed, and optimizing cost. There are several tools that can assist you here, including AWS CloudWatch, Azure Monitor, and Google's Cloud operations suite. This structured approach just defined
>
> **[1:34](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=94)** helps mitigate risks, ensure a smooth transition, and maximizes the benefits of the cloud environment. In the next section, we'll talk about migration at scale and doing migrations that allow you to place many applications and datasets in the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Google]] (3)
> **CLI Commands:** aws (3)
> **Env Vars:** aws (3)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 6. Migration at Scale

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting up to 100 applications a day](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/getting-as-many-as-10-100-applications-a-day?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/getting-as-many-as-10-100-applications-a-day?u=76281980&t=0)** - [Instructor] Moving a single application to the cloud is hard enough. Try 100 or 1000 applications. That's what many enterprises are facing. Let's explore how this is done. In order to do migration at scale, you need to think in terms of batches, and making sure you're dealing with the applications holistically, not just one at a time. This means that someone will be responsible for doing the planning needed to make sure we're leveraging the tooling, [[Code Refactoring]], and testing as a group of applications to get many applications migrated in a short period of time, and doing so with fewer resources then if we migrated the applications one by one. tools can be used for this, at least when they're deemed useful, such as code mediation, testing, and deployment tools that can move applications from on-premise systems to the cloud with one swipe of the mouse, making sure the code will function on the target platforms and that security and governance is prioritized as well. However, this is another one of those it depends type situations, where it all depends on the existing state of the applications, the platforms where they reside now, and the platform you're looking to move them to in the cloud. The trick is to look at what needs to get done, the number of workloads that need to move, and any opportunities that exist to move these applications to the cloud more efficiently. Next, let's consider organizations and skills as it relates to migration to the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Code Refactoring]] (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Organization and skill considerations](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=0)** - [Instructor] You'll find out quickly that technology is easy but the people are hard. Indeed, the key to a successful migration is to build up the skills you need to pull it off. This means understanding where you are now and where you need to be, and mapping a path from one to the others. Let's consider this. You need to do an as-is skill assessment to see what skills inventory you have in-house. This means listing who you have available to you as a human resource, what capabilities they have, and other factors that you should be considering. Then you figure out the skills you'll need to pull off a migration of applications to the cloud. For example, you may need AWS DynamoDB skills, [[Serverless Computing]] skills, [[Google]] AI skills, AWS infrastructure engineering skills, and about two dozen other skills that you'll likely need, as well. This should be your to-be skills assessment, skills you certainly need to be successful. Now, the hard part, attaining the skills that you need. This is a combination of training, hiring, using outside consultants to get the inventory of skills you'll need to be successful with your cloud migration. This must be done before you start your cloud migration, and it is a time-consuming activity with many skills acquisitions taking as much as six months. So this needs to be on your radar as early as it can be. Now, let's consider security considerations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Serverless Computing]] (1), [[Google]] (1)
> **CLI Commands:** aws (2), find (1)
> **Env Vars:** aws (2)
> **Definitions:** is a  (2)
> **Prerequisites:** you'll need (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Security considerations](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=0)** - [Instructor] This is a cloud migration course and not a [[Cloud Security]] course, so we're not going to do a deep dive here. If you're interested, there are many cloud security courses that you can take here, and I urge you to do so. So, let's just focus on what's important to migration. First, security is systemic to all of this. You can't just do security as a final step in a migration. It has to be a part of each step, including each application and dataset. Security should be engineered into the applications, so it's important to have a security specialist that is a part of the migration team, ensuring that the applications are living up to the security expectations. Second, security is a cross-application concept. In other words, we're not just attempting to create a unique security solution for each application and dataset. Instead, looking at a common security mechanism we can use across applications or as many as we can. You never want to reinvent the wheel if you can help it. That includes governance that we'll discuss next as well. Finally, make sure that security is a part of your migration planning. Too often, it's left out and often ignored. Again, security is systemic to all of these applications residing on the cloud, or anywhere for that matter. Security needs to be a first-class citizen in terms of migration. Now let's look at governance and cloud migration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (2)
> **Definitions:** is a  (4), in other words (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Governance considerations](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/governance-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/governance-considerations?u=76281980&t=0)** - [Narrator] Governance is a software limitation or control that we put on things that are part of a software system, such as which data can be assessed, the time of day that we can leverage an API, or even how many times in an hour that we can file storage systems. So a single user does not saturate it like security. There's a lot to governance. Also, like security, we have a separate course that does a deep dive into what governance is and how it applies to [[Cloud Computing]]. For now, we can just consider a few basic concepts. First, like security governance is systemic to all applications and data sets. You can't just build and deploy applications without considering governance. Thus, a governance specialist is often a part of most cloud migration teams. Second, you're looking for common services whenever you can. Don't apply a different governance solution for each application and dataset that will drive pharma complexity and cost than you want to deal with. Next, let's look at AI including [[Generative AI]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (1), [[Generative AI]] (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [AI and generative AI considerations](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=0)** - [Instructor] AI in terms of application migration really does not play as much of a role as most people think. AI applications are migrated much of the time as more traditional applications and data sets. Let's look at what needs to be considered. AI applications come with some dependencies. Many applications leverage central AI systems such as machine learning systems or [[Generative AI]] LLM systems such as [[ChatGPT]]. Thus, you need to consider how your migrated application will be able to continue to access those resources and ensure they can do so reliably. In some cases, the resources will have to be migrated as well. AI applications may have to be tested differently. You need to test the training aspect of AI or the ability for the AI system to get smart. Then you need to test the inference engine or how the AI system is used. We've all used ChatGPT at some point in time. In doing so, you're assessing an inference engine. It's what checks with the knowledge base to gain answers to questions, or in the case of generative AI, generate content that contains the answers. You don't need to be a trained AI engineer or an AI architect to move AI applications to the cloud. You just need to understand what dependencies exist and how these applications need to be tested and operated. So don't let AI scare you away from moving AI applications to the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (2), [[ChatGPT]] (2)
> **Analogies:** such as (2)
> **Env Vars:** llm (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning more about cloud migration](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/learning-more-about-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/learning-more-about-cloud-migration?u=76281980&t=0)** - [Instructor] So where do you go from here? There were a few things we suggest. First, take additional courses on [[Cloud Computing]] here. There are courses by me and other instructors that discuss [[Cloud Security]], cloud operations, [[Serverless Computing]], cloud architecture, and other topics that will provide you foundational information that you can use in your career. Second, perhaps start tuning in to YouTube channels, podcasts, and blogs that cover the evolution of cloud computing. Finally, give this stuff a try. There are free cloud tiers where they will allow you to try cloud migration. This means pushing an application to the cloud and experiencing firsthand how all of this works. No matter what path you pick, we hope your learning journey continues. Good luck to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (2), [[Cloud Security]] (1), [[Serverless Computing]] (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Introduction to Enterprise Cloud Migration Planning]]
**1 of 4** | [[Design a Cloud Migration Strategy]] →

## Appears In

- [[Introduction to Enterprise Cloud Migration Planning]]

---

[↑ Back to top](#)