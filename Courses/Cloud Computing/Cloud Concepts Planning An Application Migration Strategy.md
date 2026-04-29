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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Cloud%20Concepts%20Planning%20An%20Application%20Migration%20Strategy.md)

![Cloud Concepts Planning An Application Migration Strategy](https://media.licdn.com/dms/image/v2/D4E0DAQHpuXUlWpgR6A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1728413422915?e=2147483647&amp;v=beta&amp;t=ByOZ6ahO04weuMNw578lnaMC7REtA2hNwn7VLNNvh7o)

# Cloud Concepts Planning An Application Migration Strategy

> For IT professionals, knowing how to handle application migration to the cloud efficiently is critical. In this course, cloud computing expert David Linthicum provides you with an approach and methodology for moving applications to the cloud. Begin by considering the business case for moving to the cloud, exploring the risks involved, and gaining an understanding of public and private cloud migrat

> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy)
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Introduction to Cloud Migration]]** (6 videos)
- **[[#2. Selecting the Workloads]]** (4 videos)
- **[[#3. Selecting a Target Platform]]** (4 videos)
- **[[#4. Cloud-Based Tools]]** (3 videos)
- **[[#5. Setting Up a Migration Factory]]** (5 videos)
- **[[#6. Migration at Scale]]** (5 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Take the migration journey with your applications to the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/take-the-migration-journey-with-your-applications-to-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/take-the-migration-journey-with-your-applications-to-the-cloud?u=76281980&t=0)** - The biggest cloud computing projects in the last 15 years have been about migrating applications and data from on-premises to public cloud providers.
>
> **[0:08](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/take-the-migration-journey-with-your-applications-to-the-cloud?u=76281980&t=8)** Enterprises have spent billions of dollars on this effort in search of more business value.
>
> **[0:14](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/take-the-migration-journey-with-your-applications-to-the-cloud?u=76281980&t=14)** In this course, we'll take the mystery out of application and data migration to the cloud.
>
> **[0:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/take-the-migration-journey-with-your-applications-to-the-cloud?u=76281980&t=19)** We'll focus on what works, including processes, tools, and technologies that have proven to be the best path to business value.
>
> **[0:29](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/take-the-migration-journey-with-your-applications-to-the-cloud?u=76281980&t=29)** Hi, I'm David Linthicum, internationally known cloud computing expert, and in my career, I have overseen no less than 300 application migration projects, and I'm happy to share that knowledge with you.
>
> **[0:40](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/take-the-migration-journey-with-your-applications-to-the-cloud?u=76281980&t=40)** I wish you luck and good learning.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1)
> **Cross-References:** in the last (1)
> **Speakers:** - the (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, it's helpful to understand the basics of computing and storage.
>
> **[0:06](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/what-you-should-know?u=76281980&t=6)** However, this is an introductory course, so you don't need deep knowledge.
>
> **[0:11](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/what-you-should-know?u=76281980&t=11)** It's also good if you're already familiar with cloud security and other related topics.
>
> **[0:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/what-you-should-know?u=76281980&t=16)** However, if those are not on your list of skills, I'll provide enough information throughout the course to help you keep up.
>
> **[0:23](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/what-you-should-know?u=76281980&t=23)** If you're not yet comfortable with any of these topics mentioned, I suggest you watch my course, Cloud Computing Core Concepts, which is available in the library.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Cloud Migration

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understanding the business case
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=0)** - [Instructor] Cloud migration involves moving IT infrastructure, applications, and data from owned enterprise data centers to cloud platforms managed by cloud providers, such as Amazon Web Services, or AWS; Microsoft Azure, or Google Cloud.
>
> **[0:15](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=15)** Migrating from on-premises platforms to public cloud platforms is a far-reaching business decision that can offer significant benefits for businesses.
>
> **[0:25](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=25)** However, that depends on a few things, such as the business itself, the industry that the business is in, and their existing systems.
>
> **[0:35](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=35)** The primary value drivers behind cloud migration include cost savings, increased scalability, enhanced security, and improved performance.
>
> **[0:43](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=43)** However, creating and understanding the business case is just not that simple.
>
> **[0:48](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=48)** Let's explore some of the business drivers that we need to consider when looking at the value of cloud computing application migration.
>
> **[0:56](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=56)** Cost efficiency and scalability.
>
> **[1:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=60)** One of the most compelling reasons for migrating to a public cloud is cost efficiency, at least the opportunity to be more cost efficient.
>
> **[1:08](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=68)** On-premises infrastructure require capital expenditure for hardware, software, and maintenance.
>
> **[1:14](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=74)** They require that we hire skilled people to maintain these computer systems and other data center equipment.
>
> **[1:20](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=80)** Conversely, public cloud services operate on a pay-as-you-go model, allowing businesses to scale resources according to demand.
>
> **[1:28](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=88)** You only pay for the resources you use, much like you would the utility bills for your home.
>
> **[1:35](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=95)** That said, cloud is not always cheaper.
>
> **[1:38](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=98)** Indeed, it can be more expensive unless you do some careful planning and make sure you're doing the application migration correctly.
>
> **[1:46](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=106)** Enhanced operational resilience.
>
> **[1:49](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=109)** Migrating to the cloud can improve operational resiliency.
>
> **[1:52](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=112)** In fact, since services are more reliable and available than those on-premises or private hardware, businesses moving to public cloud platforms can experience reduced unplanned downtimes by as much as 69%.
>
> **[2:07](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=127)** I bet you can remember a few times when your employer's systems were down, hindering your ability to do your job.
>
> **[2:13](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=133)** Cloud may provide better uptime, which makes the business money.
>
> **[2:17](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=137)** Flexibility and performance.
>
> **[2:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=139)** The flexibility offered by cloud platforms is another business advantage.
>
> **[2:24](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=144)** Unlike the static nature of on-premises solutions, cloud platforms provide dynamic scalability for using on-demand resource allocation.
>
> **[2:33](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=153)** This provides the business with agility, allowing businesses to respond to market changes or any event that requires that they scale operations efficiently, and with public cloud providers on demand.
>
> **[2:48](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=168)** Building a strong business case.
>
> **[2:50](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=170)** To build a strong business case for cloud migration, businesses should carry out a thorough assessment of the current infrastructure or determine the as-is state, then figure out the total cost of ownership, or TCO, in the cloud environment.
>
> **[3:05](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=185)** What does this tell you?
>
> **[3:06](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=186)** This model helps you qualify potential cost savings, productivity gains, and operational improvements that you may find when using a cloud platform.
>
> **[3:14](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=194)** Keep in mind that this is where the "It depends" answer comes into place.
>
> **[3:18](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=198)** It depends on your business, existing state of things, and how cloud may or may not save you money.
>
> **[3:24](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-business-case?u=76281980&t=204)** Next, let's look at the risks we need to consider.

> [!info]- Semantic Content
>
> **Code Keywords:** public (5), let (2), require (2), private (1), static (1)
> **CLI Commands:** aws (1), make (1), find (1)
> **Env Vars:** aws (1), tco (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Understanding the risks
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=0)** - [Instructor] So what are the risks that we need to consider when moving to public cloud platforms?
>
> **[0:05](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=5)** Some are obvious, some not so much.
>
> **[0:07](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=7)** It's good that we review them here.
>
> **[0:11](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=11)** Data security and privacy.
>
> **[0:12](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=12)** Moving sensitive data, such as data that is personally identifiable, to public clouds requires sound security approaches.
>
> **[0:21](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=21)** Cyber attacks, data breaches, and unauthorized access are all potential risks and should be considered before pulling the trigger on moving our applications to the public cloud.
>
> **[0:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=32)** It's essential to implement encryption, access controls, and regular security audits.
>
> **[0:38](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=38)** We'll cover this in a later video.
>
> **[0:42](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=42)** Compliance issues.
>
> **[0:43](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=43)** Different industries have different regulatory requirements.
>
> **[0:47](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=47)** These are laws or guidelines regarding data handling, management, and storage.
>
> **[0:51](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=51)** They can define how you need to encrypt some data, or even the fact that the data is not allowed to leave its country of origin.
>
> **[0:58](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=58)** So making sure that your public cloud provider meets all relevant compliance standards is needed to reduce the risk of non-compliance that can lead to legal penalties and reputational damage.
>
> **[1:10](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=70)** Service outages.
>
> **[1:12](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=72)** What is the risk that the cloud service goes out altogether?
>
> **[1:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=76)** It's low, but it's still there.
>
> **[1:18](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=78)** Public cloud providers, despite the robust infrastructure, are not immune to outages.
>
> **[1:22](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=82)** Downtime can severely impact business operations.
>
> **[1:26](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=86)** We all know that this can lead to potential revenue loss and decreased customer satisfaction.
>
> **[1:31](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=91)** Indeed, many banks report that an hour of outage can cost the business more than $10 million, considering all impacts.
>
> **[1:40](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=100)** Vendor lock-in.
>
> **[1:42](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=102)** Once a business migrates to a specific cloud provider, switching providers can be costly as we've localized our applications on the cloud for that specific provider.
>
> **[1:53](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=113)** A great deal of work is needed to be done when moving to another provider with different native services and application usage.
>
> **[2:02](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=122)** Cost management.
>
> **[2:04](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=124)** Cloud services offer a pay as you go model, but costs can spiral out of control without proper oversight.
>
> **[2:11](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=131)** Unmonitored usage, unused resources, and data transfer fees can lead to cloud bills that will send your CFO running to your office.
>
> **[2:20](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/understanding-the-risks?u=76281980&t=140)** Effective cost monitoring and optimization tools are necessary to manage and control cloud expenditures.

> [!info]- Semantic Content
>
> **Code Keywords:** public (5)
> **Env Vars:** cfo (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Public cloud migration
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=0)** - [Instructor] Migrating to a public cloud involves transferring data, applications and workloads from on-premises data centers to infrastructure provided by public cloud providers.
>
> **[0:11](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=11)** These are companies like Amazon Web Services, Microsoft Azure, or Google Cloud.
>
> **[0:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=16)** This transition brings benefits such as enhanced scalability, cost efficiency, and improved performance, but it also comes with challenges that must be navigated carefully.
>
> **[0:27](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=27)** Application Portfolio Assessment.
>
> **[0:29](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=29)** The initial step in cloud migration involves a thorough assessment of the application portfolio.
>
> **[0:35](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=35)** This means that we're looking at existing applications and datasets to assess the amount of work that needs to occur to move the workloads to a public cloud provider.
>
> **[0:45](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=45)** This may include accessing the security and compliance issues, the processing load, the amount of storage required, and any dependencies that exist.
>
> **[0:53](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=53)** For instance, an application that's tightly coupled to another system.
>
> **[0:58](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=58)** The dependencies need to be assessed on the public cloud provider.
>
> **[1:03](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=63)** Security Considerations.
>
> **[1:05](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=65)** Security is a major concern during cloud migration in terms of how security should be dealt with on the target cloud platform to meet the needs of the business.
>
> **[1:13](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=73)** This means considering effective data protection, access control, and continuous monitoring.
>
> **[1:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=79)** These are essential components of a robust security strategy.
>
> **[1:23](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=83)** Data Protection, or the ability to implement strong encryption for data both at rest and in transit.
>
> **[1:30](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=90)** We have a complete course on cloud security that you can check out if you need more understanding.
>
> **[1:35](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=95)** Access Control, meaning enforcing strict identity and access management policies to ensure that only authorized personnel have access to sensitive data and applications.
>
> **[1:46](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=106)** Continuous Monitoring, or the ability to continuously monitor systems to detect and respond to security threats in real time.
>
> **[1:55](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=115)** This includes logging, auditing, and automated alerts to maintain the secure environment.
>
> **[2:01](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=121)** Building and Deploying a Migration Plan.
>
> **[2:04](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=124)** Creating a detailed migration plan is essential for a successful migration project.
>
> **[2:09](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=129)** These plans normally include, develop a high-fidelity inventory of applications and their dependencies, conduct a thorough risk and cost analysis to ensure effective resource allocation and risk mitigation.
>
> **[2:22](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=142)** Identify the skills required to support cloud workloads and ensure necessary training and development programs are in place.
>
> **[2:29](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=149)** Execute the migration plan while continuously monitoring and adjusting based on feedback and performance metrics.
>
> **[2:36](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=156)** Ensure alignment across all teams and efficient resource allocation.
>
> **[2:41](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=161)** Lots to think about in terms of things that need to be considered when moving applications to a public cloud provider.
>
> **[2:47](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-cloud-migration?u=76281980&t=167)** Now, let's move into what to consider when moving to a private cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** public (5), include, (1), let (1), private (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** such as (1), for instance (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Private cloud migration
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=0)** - [Presenter] Migrating to a private cloud is much the same as migrating to a public cloud.
>
> **[0:05](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=5)** It involves transferring data, applications and workloads from the systems that are hosting the current set of applications normally in an enterprise data center to an infrastructure provided by a private cloud that you've implemented also inside the data center.
>
> **[0:21](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=21)** The transition can bring benefits, such as enhanced scalability, cost efficiency, and improved performance, but it also comes with challenges that must be navigated carefully.
>
> **[0:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=32)** Before you can start, a huge and important part of this migration is being charged with installing, configuring, and operating your own hardware solution to support the private cloud system, including planning and the same tasks or steps that would occur in the installation of a traditional system.
>
> **[0:50](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=50)** Application portfolio assessment.
>
> **[0:53](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=53)** The initial step in private cloud migration, as it was in public cloud migration, involves a thorough assessment of the application portfolio.
>
> **[1:02](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=62)** This may include assessing the security and compliance issues, the processing load, the amount of storage required, and any dependencies that exist.
>
> **[1:11](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=71)** Security considerations.
>
> **[1:14](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=74)** Security is a bit different when considering private cloud migration in that we own the systems.
>
> **[1:20](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=80)** Some consider this more secure since we have physical possession of the systems, but much the same security concerns as with public clouds exist.
>
> **[1:29](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=89)** This means considering effective data protection, access control, and continuous monitoring.
>
> **[1:36](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=96)** These are essential components of a robust security strategy for private cloud migration.
>
> **[1:42](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=102)** Data protection or the ability to implement strong encryption for data, both at rest and in transit.
>
> **[1:49](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=109)** Access control, meaning enforcing strict identity and access management policies.
>
> **[1:54](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=114)** This means linking to common directory services and shared security services with other systems in the data center.
>
> **[2:01](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=121)** Continuous monitoring or the ability to continuously monitor systems to detect and respond to security threats in real time, as we discussed in our last video.
>
> **[2:12](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=132)** Building and deploying a migration plan.
>
> **[2:14](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=134)** Creating a detailed migration plan for private cloud migration normally includes, and yes, this is the same as we discussed migration around public clouds, develop a high fidelity inventory of applications and their dependencies, conduct a thorough risk and cost analysis to ensure effective resource allocation and risk mitigation, identify the skills required to support cloud workloads and ensure necessary training and development programs are in place, execute the migration plan while continuously monitoring and adjusting based on feedbacks and performance metrics.
>
> **[2:51](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=171)** Lots to think about in terms of things that need to be considered when moving applications to a private cloud provider.
>
> **[2:59](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-cloud-migration?u=76281980&t=179)** Now let's move into what to consider when moving to a multi-cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** private (8), public (4), let (1)
> **Cross-References:** we discussed (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [presenter] (1)

#### Multicloud migration
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=0)** - [Instructor] Okay, now things are getting interesting.
>
> **[0:03](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=3)** Instead of migrating to a single public cloud or a single private cloud, we're migrating to many clouds, including two or more public cloud providers, which may or may not include a private cloud or two depending on your situation.
>
> **[0:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=19)** The good news is that the concepts we just went over apply for multicloud.
>
> **[0:24](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=24)** We just do them for each public and private cloud provider.
>
> **[0:28](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=28)** So we'll need to consider application portfolio assessment, security and compliance considerations, and create a migration plan for each platform.
>
> **[0:36](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=36)** If this sounds like more work, it isn't really.
>
> **[0:39](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=39)** This is just moving to different cloud providers, public and private, and moving to a platform that's going to work together to create a multicloud solution.
>
> **[0:49](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=49)** Dealing with Complexity.
>
> **[0:52](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=52)** One of the things that you'll most notice about moving to a multicloud deployment is that you're dealing with more complexity.
>
> **[0:59](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=59)** Just the fact that you have more than a single cloud brand, such as Google, AWS, and Microsoft, means that you're dealing with two or more platforms that have their own native security systems, operation systems, governance systems, storage systems, and application development, and deployment systems, Need many skills.
>
> **[1:20](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=80)** If it's not already apparent after what I just mentioned, you'll need specific talent for the cloud brands you just deployed, including the private cloud platforms.
>
> **[1:28](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=88)** This adds cost and risk, but can be overcome with some good planning.
>
> **[1:34](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=94)** Planning is Important.
>
> **[1:36](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=96)** Planning becomes the key thing to consider here in that, if you don't plan properly, considering all things that need to occur in the sequence that they should occur, things won't go well.
>
> **[1:48](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=108)** Considering that we're dealing with multiple threads of migration efforts for each specific cloud platform.
>
> **[1:53](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=113)** And what we discussed in the last two videos needs to be multiplied times the number of cloud platforms that you're moving to.
>
> **[2:02](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=122)** It's hard, but can be achieved by moving to multicloud.
>
> **[2:07](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=127)** Indeed, this is occurring today with several major enterprises.
>
> **[2:11](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud-migration?u=76281980&t=131)** Now let's look at what it takes to migrate AI systems to the cloud public and private.

> [!info]- Semantic Content
>
> **Code Keywords:** private (6), public (5), let (1)
> **Cross-References:** we discussed (1), in the last (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Cloud-based AI migration
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=0)** - [Instructor] This is about migrating a type of application, in this case, AI applications.
>
> **[0:06](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=6)** There is good news and bad news here.
>
> **[0:09](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=9)** The good news is that migrating AI systems from traditional systems to public or private clouds is much the same as other applications.
>
> **[0:17](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=17)** They have data, they have application components, they have operations and security requirements.
>
> **[0:23](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=23)** Thus, not much changes when doing the planning, as we discussed in the last three videos for private, public and multi-cloud migration.
>
> **[0:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=32)** The bad news is that many of these AI systems use higher end processors such as graphics processing units, or GPUs.
>
> **[0:40](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=40)** Thus, special planning is needed to ensure that the target private or public cloud platform can support those processing loads as well.
>
> **[0:48](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=48)** Fortunately, public clouds are all in on AI and support these types of higher end processors.
>
> **[0:54](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=54)** For private clouds, you're more on your own, but given that your existing platforms running AI are also owned platforms, this may or may not be a major challenge for Cloud Migration Engineers.
>
> **[1:07](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=67)** Also keep in mind that AI systems migrating to clouds have training data to consider.
>
> **[1:14](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=74)** Sometimes the data is migrated as well, but many times it stays the same, and you'll have to figure out how that data is migrated from its current platform to the AI system on the cloud platforms.
>
> **[1:27](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=87)** This means you'll need to consider data migration and middleware solutions that can carry this out.
>
> **[1:33](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=93)** Finally, we need to consider where the AI models are going to be processed during inference operations.
>
> **[1:39](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=99)** This is when the models answer questions for applications or humans.
>
> **[1:44](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=104)** This needs to occur in a responsive manner and you'll need to make sure that the cloud provider is up for the challenge.
>
> **[1:52](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=112)** This is the hardest aspect of cloud migration considering the applications that you're migrating, security and compliance, and how you're going to deal with the platforms complexity and array of skills that are needed.
>
> **[2:06](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/cloud-based-ai-migration?u=76281980&t=126)** In the next section, we'll talk about how you'll select the workloads.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), private (4), case, (1), finally, (1)
> **Cross-References:** we discussed (1), in the last (1), in the next (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 2. Selecting the Workloads

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Good candidates for migration
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=0)** - [Instructor] In this video, we'll learn how to pick the workloads that you should migrate to the cloud, including picking workloads that have the best chances of success with a minimum amount of risk.
>
> **[0:12](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=12)** Websites and web applications often demand high availability, scalability, and global reach.
>
> **[0:18](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=18)** This makes them good candidates for cloud deployment.
>
> **[0:22](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=22)** Public clouds provide scalable infrastructure to ensure uptime, and can handle sudden surges in traffic.
>
> **[0:29](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=29)** Indeed, cloud providers offer web applications and operation services that you can leverage on demand.
>
> **[0:38](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=38)** Content management systems, or CMSs, benefit from the cloud's capability to scale.
>
> **[0:44](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=44)** Moreover, it can do so based on demand.
>
> **[0:48](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=48)** Public clouds have features, like elastic load balancing, that allow for better scaling.
>
> **[0:54](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=54)** Also, content delivery networks, or CDNs, enable better performance and user experience when deploying and operating a CMS.
>
> **[1:03](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=63)** Development and testing environments are also a good candidate for a public cloud.
>
> **[1:09](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=69)** This is because public cloud providers offer on-demand resources that can be leveraged on demand.
>
> **[1:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=76)** This reduces the need for physical hardware.
>
> **[1:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=79)** Also, these public cloud platforms can scale up or down based on needs of the software development and testing cycles.
>
> **[1:28](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=88)** Big data analytics and business intelligence, or BI, applications are applications that require significant processing power.
>
> **[1:36](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=96)** Also, the need to leverage scalable storage that the public cloud providers can offer.
>
> **[1:43](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=103)** Thus, public clouds are often more cost-effective than on-premise solutions for these types of applications and other good candidates for migration.
>
> **[1:55](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=115)** Disaster recovery and backup services are another good use for public clouds.
>
> **[2:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=120)** They offer high reliability and quick recovery times.
>
> **[2:03](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=123)** This given the fact that the cloud is already a redundant system that is geographically dispersed, attributes you want in a disaster recovery service or backup services.
>
> **[2:15](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/good-candidates-for-migration?u=76281980&t=135)** Now that we've looked at good candidates for cloud migration, let's look at bad candidates, or applications that we may want to avoid in terms of cloud migration.

> [!info]- Semantic Content
>
> **Code Keywords:** public (8), require (1), let (1)
> **Env Vars:** cms (1)
> **Speakers:** - [instructor] (1)

#### Poor candidates for migration
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=0)** - [Instructor] Not all applications are suitable for migration to a public cloud provider.
>
> **[0:04](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=4)** In fact, many estimate that 40% of existing applications won't benefit from migration to the cloud.
>
> **[0:11](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=11)** Some may face issues related to performance, security, compliance, or cost that make them poor candidates for cloud migration.
>
> **[0:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=19)** Keep in mind that even if you can migrate an application to a public cloud provider, that does not mean that applications are able to benefit the business more so than leaving the applications where they are.
>
> **[0:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=32)** Here are some types of applications that are typically considered bad candidates for cloud migration.
>
> **[0:38](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=38)** Legacy applications with high complexity, especially those that are highly complex and tightly coupled with on-premises hardware or software, are difficult to migrate.
>
> **[0:48](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=48)** Considering that a great deal of development and re-engineering needs to occur to carry out this migration.
>
> **[0:55](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=55)** This means unexpected expenses and extended downtime.
>
> **[0:59](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=59)** Applications with high and predictable workloads, which are applications that consistently demand high computational resources.
>
> **[1:07](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=67)** These types of applications may not benefit from the variable cost structures of cloud services.
>
> **[1:14](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=74)** Keep in mind that if the workload is predictable and steady, these are often a better fit for on-premises hardware that could be more cost-effective in the long run.
>
> **[1:25](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=85)** Indeed, much of the applications that fall into this category end up being returned back to on-premises.
>
> **[1:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=92)** Considering that cloud infrastructure can lead to higher ongoing operational costs due to its pay-as-you-go pricing model.
>
> **[1:41](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=101)** Applications with low latency requirements, meaning certain applications, particularly those during time data processing or specialized manufacturing processing that require low latency performance.
>
> **[1:53](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=113)** The physical distance between cloud data centers and the end users is typically the cause for this latency.
>
> **[1:59](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=119)** You may see that when using systems in other countries that the performance is often lower than applications that are closer by.
>
> **[2:08](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=128)** This is the same concept.
>
> **[2:10](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=130)** Highly regulated applications are applications that deal with highly sensitive or regulated data.
>
> **[2:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=136)** This means data that, if not managed legally, can get you arrested.
>
> **[2:21](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=141)** Nobody wants that.
>
> **[2:23](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=143)** This includes healthcare, government, or finance.
>
> **[2:26](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=146)** But other industries or other countries may also have their own specific laws and regulations that must be adhered to.
>
> **[2:34](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=154)** Strict regulations like GDPR, HIPAA, or HIPAA, or certain national security requirements often require data to be managed and stored in very specific ways.
>
> **[2:47](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=167)** While the public cloud provider can accommodate this type of data and provide a compliance platform, many enterprises may not want to risk it and keep physical control over the data on-premises.
>
> **[3:01](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/poor-candidates-for-migration?u=76281980&t=181)** Let's move on to understanding the workload categories that we can use to organize the workloads that may be moving to public cloud providers.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), require (2), let (1)
> **Env Vars:** hipaa (2), gdpr (1)
> **Warnings:** keep in mind (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Leveraging workload categories
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=0)** - [Instructor] When considering cloud migration, effectively categorizing workloads is just a good idea.
>
> **[0:06](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=6)** It allows you to organize applications into specific categories that provide a better approach for consideration for migration to a public cloud provider.
>
> **[0:17](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=17)** Here are a few good ways to categorize workloads.
>
> **[0:20](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=20)** First, categorize workloads by type of application.
>
> **[0:24](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=24)** This means that we're differentiating between customer-facing applications, internal business applications, development and testing environments, and data and analytics applications.
>
> **[0:36](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=36)** Or you can create your own application types.
>
> **[0:39](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=39)** This aids in tailoring the migration strategy to the specific needs and attributes of each application type.
>
> **[0:47](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=47)** Customer-facing applications, for instance, demand high availability and scalability.
>
> **[0:52](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=52)** However, development and testing environments can benefit from elastic resources that public clouds can provide.
>
> **[1:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=60)** Second, assess workloads based on their criticality and business impact.
>
> **[1:05](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=65)** This prioritizes which application should be migrated first, and is useful when you may have a limited amount of budget to carry out these migrations.
>
> **[1:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=76)** You need to consider what's critical and noncritical.
>
> **[1:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=79)** Mission-critical applications are essential for business operations.
>
> **[1:23](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=83)** Thus, they require the most careful planning to ensure they are kept running.
>
> **[1:29](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=89)** However, noncritical applications with the minimal impact on business operations, if they stop working, may be easier to migrate early in the process because they are able to migrate with a lower business risk.
>
> **[1:43](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=103)** Next, understand the complexity of migration for each workload.
>
> **[1:47](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=107)** This means considering if the application is straightforward to migrate.
>
> **[1:51](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=111)** For example, standalone applications with minimal dependencies versus complex applications with many dependencies.
>
> **[1:58](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=118)** Categorizing by complexity allows better planning.
>
> **[2:03](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=123)** Another way to provide categorization is by compliance and regulatory requirements, identifying highly regulated workloads that need to comply with strict regulations, such as those in healthcare or financial services.
>
> **[2:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=139)** Finally, it's crucial to categorize workloads by usage patterns.
>
> **[2:24](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=144)** This means understanding whether an application has consistent, variable, or seasonal usage.
>
> **[2:31](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=151)** This can define the migration strategy in terms that we can leverage cloud scalability effectively.
>
> **[2:38](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=158)** Applications and data sets with seasonal demand benefit significantly from cloud elasticity, and thus should be considered during migration planning.
>
> **[2:47](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/leveraging-workload-categories?u=76281980&t=167)** Next, let's look at how we create migration priorities.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), type. (1), require (1), finally, (1), let (1)
> **Analogies:** for instance (1), for example (1), such as (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Creating migration priorities
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=0)** - [Instructor] When creating migration priorities for application migration to public cloud providers, here are the most important considerations.
>
> **[0:08](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=8)** Evaluate the business impact and criticality of each application that you're considering migrating to the cloud.
>
> **[0:15](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=15)** This means identifying mission-critical applications that are essential for business operations, as we discussed in the last video.
>
> **[0:22](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=22)** Thus, these applications require careful planning to ensure minimal disruption.
>
> **[0:29](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=29)** Understand and map out dependencies between applications, systems, and data.
>
> **[0:34](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=34)** There are many ways to do this, but using discovery tools to assess how applications interact are an easy path these days.
>
> **[0:42](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=42)** Keep in mind that applications with fewer dependencies are typically easier to migrate.
>
> **[0:47](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=47)** However, those with complex interdependencies will need a more coordinated approach to minimize operational disruptions.
>
> **[0:55](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=55)** Classify applications based on complexity of their migration.
>
> **[0:59](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=59)** For example, simple workloads with minimal dependencies, or those applications that leverage more simplistic architectures, should be prioritized for early migration since they are basically low hanging fruit.
>
> **[1:12](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=72)** However, complex workloads should have detailed migration plans addressing their specific needs.
>
> **[1:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=79)** Assess the compliance and regulatory requirements for each application.
>
> **[1:24](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=84)** Some applications may handle highly sensitive or regulated data.
>
> **[1:28](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=88)** This obviously adds risk, and we need a meticulous plan ensuring legal and compliance standards are met.
>
> **[1:35](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-migration-priorities?u=76281980&t=95)** Next, let's get into looking at the cloud platforms themselves in the next section of this course.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), require (1), this, (1), let (1)
> **Cross-References:** we discussed (1), in the last (1), in the next (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 3. Selecting a Target Platform

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Public clouds
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=0)** - [Instructor] Leveraging a public cloud for migrating applications offers numerous benefits.
>
> **[0:05](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=5)** Spoiler alert, especially in the areas of scalability and elasticity, cost effectiveness, reduced time to market, and global reach.
>
> **[0:14](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=14)** Let's look at the basics.
>
> **[0:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=16)** One of the foremost benefits is scalability and elasticity.
>
> **[0:20](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=20)** Public clouds allow organizations to scale resources up or down based on the demands of the applications or systems.
>
> **[0:27](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=27)** This means that applications can handle varying workloads without taking a hit on performance, which makes it particularly useful during peak usage times for traffic surges.
>
> **[0:40](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=40)** Potential cost effectiveness is another significant advantage.
>
> **[0:44](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=44)** Again, this is another it depends on type of fact in that you'll save money in some cases, but not others.
>
> **[0:51](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=51)** Public clouds operate on a pay-as-you-go model.
>
> **[0:54](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=54)** This has the potential to reduce cost associated with buying and maintaining physical hardware.
>
> **[0:59](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=59)** This means that businesses pay only for the resources they actually use and can allow them to avoid paying for hardware resources that they must host.
>
> **[1:08](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=68)** The reduction in time to market is a larger selling point of public cloud.
>
> **[1:13](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=73)** This means provisioning infrastructure in public cloud environments is much faster, at least compared to traditional on-premises systems.
>
> **[1:22](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=82)** This has the potential to accelerate the deployment of applications and services.
>
> **[1:27](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=87)** What are the benefits?
>
> **[1:29](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=89)** They enable businesses to bring products and features to market quickly, which can provide a great amount of business value.
>
> **[1:38](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=98)** Lastly, global reach is a key advantage of public clouds.
>
> **[1:41](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=101)** Indeed, public cloud providers have data centers, which are called regions that reach across the globe.
>
> **[1:48](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=108)** This enables organizations to deploy their applications closer to the end users.
>
> **[1:53](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=113)** As you may expect, this can improve performance and reduce latency for users that are closer to those regions.
>
> **[2:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/public-clouds?u=76281980&t=120)** Now let's look at the benefits of private clouds as target platforms for application migration.

> [!info]- Semantic Content
>
> **Code Keywords:** public (7), let (2), private (1)
> **Definitions:** means that (2), is a  (2)
> **Speakers:** - [instructor] (1)

#### Private clouds
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=0)** - [Narrator] So, what about private clouds as a target platform for migration?
>
> **[0:04](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=4)** Private clouds also have selling points that should be considered.
>
> **[0:08](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=8)** Let's go over a few of them now.
>
> **[0:10](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=10)** Complete Control.
>
> **[0:12](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=12)** Private clouds allow you to own the platforms, thus, you have total control over the platforms in terms of what hardware to run, where the hardware will run, what will run on the hardware, such as the types of private cloud software.
>
> **[0:26](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=26)** Also, control over physical security.
>
> **[0:30](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=30)** Potentially Lower Cost.
>
> **[0:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=32)** Wait, didn't we just say that public clouds are cheaper?
>
> **[0:36](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=36)** Yes, but that is another, it depends, type of situation.
>
> **[0:39](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=39)** Private clouds are no different.
>
> **[0:43](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=43)** The cost of hardware has dropped a great deal over the last 10 years, meaning that private clouds are often less expensive than public clouds as the target of application migrations.
>
> **[0:55](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=55)** So, you'll be wise to do your own math looking at your specific situation when it comes to seeing if private clouds are more cost-effective or not.
>
> **[1:05](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=65)** You'll have no neighbors to deal with.
>
> **[1:07](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=67)** When your applications are on a public cloud, you'll have to share the resources with hundreds of other companies that are using servers, including compute and storage systems at the same time.
>
> **[1:18](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=78)** This is called multi-tenancy, and public clouds are very good at making sharing physical servers appear like you're the only user.
>
> **[1:27](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=87)** However, there is a performance hit and sometimes companies are concerned about security issues such as the other processes being able to access your data.
>
> **[1:37](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=97)** For the record, this does not seem to be a problem.
>
> **[1:41](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=101)** Thus, private clouds, which allow you to be the only user on your hardware since you own it, is preferred by enterprises that are concerned about sharing their servers.
>
> **[1:51](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/private-clouds?u=76281980&t=111)** Next, we'll take a quick look at multi-cloud as a platform target for migration.

> [!info]- Semantic Content
>
> **Code Keywords:** private (8), public (4), let (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** such as (2)
> **Speakers:** - [narrator] (1)

#### Multicloud
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980&t=0)** - [Instructor] Much of the advantages of multicloud have been covered already, so let's just look at some of the core benefits of leveraging a multicloud as a target platform for cloud migration.
>
> **[0:13](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980&t=13)** Access to best-of-breed services.
>
> **[0:15](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980&t=15)** Unlike when you leverage just a single cloud provider, multicloud means you can leverage the services found in more than a single cloud provider.
>
> **[0:22](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980&t=22)** Thus, you can use a database on AWS, an AI system on Microsoft, and a business analytics system that is found on Google Cloud Platform.
>
> **[0:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980&t=32)** This means that you're able to optimize your solution using only the best services for any number of providers.
>
> **[0:39](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980&t=39)** Cost management is another advantage.
>
> **[0:41](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980&t=41)** Much like the benefits of leveraging multicloud when it comes to best-of-breed services, you can also leverage services that provide lower costs and higher value.
>
> **[0:50](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980&t=50)** This means you can mix and match services to find the correct cost model for your migrated applications, much like you do when shopping around for products such as cars, food, and appliances.
>
> **[1:02](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980&t=62)** However, there are downsides.
>
> **[1:05](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980&t=65)** Multicloud deployments are more complex, and thus you need tools and skilled people to manage these platforms.
>
> **[1:12](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980&t=72)** There are ways to manage this complexity, but it will take some additional planning.
>
> **[1:17](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/multicloud?u=76281980&t=77)** Next, let's round out this section with a discussion of other platforms that you can also consider.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (1), find (1)
> **Code Keywords:** let (2)
> **Env Vars:** aws (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Other cloud platform options
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=0)** - [Instructor] What about other platform alternatives that may be a cloud or not a cloud?
>
> **[0:05](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=5)** Are there any considerations there?
>
> **[0:07](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=7)** Here are the major concepts that you need to consider.
>
> **[0:10](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=10)** Edge computing means that we're putting applications and data on platforms that are on the edge of a larger system, such as a public cloud provider.
>
> **[0:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=19)** These platforms are often lower powered and perform single tasks, such as a thermostat in your home, or a computer in your car.
>
> **[0:27](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=27)** These are the most helpful when you want to run the applications closest to where the data is collected, thus reducing latency and increasing application performance.
>
> **[0:38](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=38)** Mobile computing simply means that we're running applications on mobile devices, such as a smartphone, smartwatch, tablet computer, or other devices that move around.
>
> **[0:48](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=48)** Of course, this is only meant for specific kinds of applications and use cases.
>
> **[0:53](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=53)** However, some applications may be a better fit on a mobile platform than a private or public cloud provider.
>
> **[1:01](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=61)** Other options may include micro-clouds, which are clouds that provide a narrow set of services.
>
> **[1:06](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=66)** The most popular types of these include a number of small cloud providers that just focus on AI services, and often provide specific AI processors, such as GPUs as a service for building and deploying AI systems.
>
> **[1:20](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=80)** Clearly, they are not for general purpose applications, but are focused on a specific application type, such as AI.
>
> **[1:27](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=87)** But it's helpful to understand that they are an option.
>
> **[1:30](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/other-cloud-platform-options?u=76281980&t=90)** Next, let's look at specific cloud-based tools.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), private (1), type, (1), let (1)
> **Analogies:** such as (5)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 4. Cloud-Based Tools

> [[#Table of Contents|↑ Back to Table of Contents]]

#### AWS migration tools
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=0)** - [Instructor] When migrating applications to the cloud, you don't do it on your own.
>
> **[0:05](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=5)** Tools are definitely needed.
>
> **[0:08](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=8)** The next few videos, we are going to list some of the more popular tools for specific cloud providers, and we're starting with AWS.
>
> **[0:15](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=15)** Here are the top four migration tools commonly used for migrating applications from on premises systems to the AWS Cloud.
>
> **[0:24](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=24)** AWS Server Migration Service, or AWS DMS.
>
> **[0:30](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=30)** AWS Server Migration Service helps migrate on premises workloads to AWS by automating scheduling and tracking incremental server applications.
>
> **[0:40](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=40)** This tool simplifies the process of application migration, allowing you to perform large scale migrations.
>
> **[0:46](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=46)** We'll cover this in a later video that covers how to create a migration factory.
>
> **[0:51](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=51)** This is simply a highly automated system that provides enterprises with the ability to migrate many applications at once using a unified tool set.
>
> **[1:02](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=62)** AWS Data Migration Services, or AWS DMS.
>
> **[1:06](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=66)** AWS Data Migration Service provides you with the ability to migrate databases to AWS.
>
> **[1:12](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=72)** You're able to do this with minimal downtime.
>
> **[1:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=76)** This tool supports various database engines allowing for most data migrations to AWS.
>
> **[1:22](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=82)** DMS continuously replicates the data from the source database, typically on premises to the target database typically in AWS.
>
> **[1:31](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=91)** AWS Application Migration Service simplifies and automates the migration of applications to AWS.
>
> **[1:37](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=97)** This tool eliminates the need for manual processes, thus reducing time by providing a cloud-native platform for the automatic conversion of applications and data in support of application migration.
>
> **[1:50](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=110)** AWS DataSync.
>
> **[1:53](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=113)** AWS DataSync simplifies the movement of large amounts of data between on-premises storage and AWS storage services.
>
> **[2:01](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=121)** This tool is particularly useful for repetitive and high-volume data transfers.
>
> **[2:07](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=127)** These tools provide a suite of tools for addressing various aspects of application migration to AWS.
>
> **[2:13](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=133)** One of the things that you may have noticed is that many of the tools do the same things.
>
> **[2:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=139)** Indeed, they do, and you'll find that you'll leverage one or the other, but not all of these tools.
>
> **[2:25](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=145)** Also, while we've only covered four tools here, there are dozens to consider.
>
> **[2:30](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/aws-migration-tools?u=76281980&t=150)** Now let's look at Microsoft migration tools.

> [!info]- Semantic Content
>
> **Env Vars:** aws (18), dms (3)
> **CLI Commands:** aws (18), find (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Microsoft migration tools
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=0)** - [Instructor] Continuing our discussion of cloud tools for specific clouds, there are the top four Microsoft Azure migration tools.
>
> **[0:08](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=8)** Again, these are commonly used for migration applications from on-premises systems to Azure Cloud.
>
> **[0:14](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=14)** Azure Migrate.
>
> **[0:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=16)** Azure Migrate is a centralized hub for managing the process of migration to Azure.
>
> **[0:21](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=21)** It's able to carry out a few core duties such as discovery, addressing and migrating on premises infrastructure, applications, and data to Azure.
>
> **[0:31](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=31)** This tool is both agentless and agent-based, and also works with other Azure services for a comprehensive migration process.
>
> **[0:42](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=42)** Azure Site Recovery, or ASR.
>
> **[0:45](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=45)** Azure Site Recovery, as the name implies, is used for disaster recovery.
>
> **[0:50](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=50)** However, it also facilitates seamless migration of on-premises physical servers and virtual machines to Azure public cloud.
>
> **[0:58](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=58)** This tool is able to replicate workloads running on physical and virtual machines and easily move them to Azure.
>
> **[1:07](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=67)** Azure Database Migration Services, or DMS.
>
> **[1:11](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=71)** Azure Database Migration Services, as with the AWS tool we covered in the last video, enables easy migration of various database types to Azure.
>
> **[1:20](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=80)** So what databases are supported?
>
> **[1:23](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=83)** It supports the migration of SQL Server to Azure's SQL Database and heterogeneous databases such as Oracle to Azure SQL Database and database environments.
>
> **[1:36](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=96)** Azure App Service Migration Assistant.
>
> **[1:39](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=99)** The Azure App Service Migration Assistant is able to migrate web applications to Azure App Service.
>
> **[1:45](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=105)** This tool is able to assist in migrating to .NET and PHP web applications.
>
> **[1:51](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=111)** And it's able to carry this out with minimal or no code changes.
>
> **[1:56](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=116)** These tools offer a comprehensive suite for managing different aspects of application migration and are able to provide smooth and efficient transition to the Azure Cloud.
>
> **[2:06](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/microsoft-migration-tools?u=76281980&t=126)** Next, we'll talk about AI migration tools for cloud computing.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), asr (1), dms (1), aws (1), net (1)
> **CLI Commands:** aws (1), php (1)
> **Cross-References:** we covered (1), in the last (1)
> **Analogies:** such as (2)
> **Code Keywords:** public (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### AI migration tools for cloud computing
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=0)** - [Instructor] What about the tools powered with AI?
>
> **[0:02](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=2)** Here are the top four AI-powered cloud migration tools used for migrating applications from public clouds to on-premises systems.
>
> **[0:11](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=11)** IBM Cloud Pak for Data.
>
> **[0:14](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=14)** IBM Cloud Pak for Data uses AI to support the migration of data and applications to the IBM cloud.
>
> **[0:21](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=21)** This tool includes capabilities for data integration, data cleansing, and data transformation.
>
> **[0:26](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=26)** It leverages AI to automate many aspects of the migration process.
>
> **[0:30](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=30)** This provides an easy transition with minimal manual intervention.
>
> **[0:38](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=38)** AWS Application Migration Services automates the migration of applications to AWS.
>
> **[0:43](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=43)** As we covered in a previous video, it leverages machine learning to streamline the conversion process.
>
> **[0:50](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=50)** AI is also used to reduce manual task and provide minimal downtime.
>
> **[0:55](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=55)** Azure Migrate.
>
> **[0:57](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=57)** Azure Migrate is an AI-powered tool that provides the migration of on-premises applications to Microsoft Azure.
>
> **[1:04](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=64)** This tool includes processes for things like discovery, assessment, or processes to see what your existing as-is applications are doing.
>
> **[1:14](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=74)** Then, migration of the applications and data.
>
> **[1:18](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=78)** Google Cloud Migration Tools.
>
> **[1:20](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=80)** Google Cloud offers a range of AI-powered migration tools within its ecosystem.
>
> **[1:25](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=85)** One of these includes Migrate for Compute Engine and Migrate for Anthos.
>
> **[1:29](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=89)** These tools use machine learning to automate migration of applications, VMs, or virtual machines, and containers to the Google Cloud.
>
> **[1:39](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=99)** These AI-powered migration tools streamline the processes of moving applications from on-premises systems to public clouds.
>
> **[1:47](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-migration-tools-for-cloud-computing?u=76281980&t=107)** We're bound to see these types of tools grow quickly over the next several years, as AI becomes more useful to all aspects of application migration to the cloud.

> [!info]- Semantic Content
>
> **Env Vars:** ibm (3), aws (2)
> **CLI Commands:** aws (2)
> **Code Keywords:** public (2)
> **Cross-References:** we covered (1), previous video (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 5. Setting Up a Migration Factory

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Workload triage
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=0)** - [Instructor] When migrating applications from on-premises to a public cloud provider, Workload Triage is a crucial initial step.
>
> **[0:07](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=7)** This ensures a successful transition to the cloud, since you know what you're moving and how to deal with each application.
>
> **[0:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=16)** Here are three basic steps for Workload Triage.
>
> **[0:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=19)** Assessment and discovery.
>
> **[0:22](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=22)** Begin by assessing all workloads within your on-premises environments.
>
> **[0:26](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=26)** This involves creating an inventory of all applications, services, dependencies, and associated resources.
>
> **[0:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=32)** The objective is to understand the as-is state.
>
> **[0:35](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=35)** Also, we need to understand the capability and readiness for migration.
>
> **[0:41](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=41)** Categorization and prioritization.
>
> **[0:44](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=44)** Once we have a comprehensive inventory, categorize and prioritize the workloads based on criteria.
>
> **[0:50](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=50)** This criteria may include business criticality, complexity, dependencies, and migration feasibility.
>
> **[0:57](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=57)** Planning and strategy development.
>
> **[0:59](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=59)** Develop a detailed plan and strategy for migration.
>
> **[1:02](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=62)** This includes selecting a specific migration plan for each categorized workload, or how do we best move the application and data to a public cloud provider?
>
> **[1:13](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=73)** This also means creating a timeline, allocating resources, and determining the business value and objectives to define success of the application migration project.
>
> **[1:23](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=83)** By following these basic steps where workload triage organizations can prepare for migration without having to guess about anything, this ensures that critical factors are considered and that the transition to the public cloud is as seamless as possible.
>
> **[1:39](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/workload-triage?u=76281980&t=99)** Next, let's talk about selecting tools.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Selecting tools
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=0)** - [Instructor] Selecting the right tools for cloud migration is crucial to ensure a successful and efficient transition.
>
> **[0:07](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=7)** Here are three basic steps that you should consider.
>
> **[0:10](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=10)** Assessment and requirements gathering, we should begin by assessing your current on-premises infrastructure.
>
> **[0:17](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=17)** We do this to understand our migration needs.
>
> **[0:20](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=20)** This includes identifying the specific workloads, applications, and data that needs to be migrated.
>
> **[0:26](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=26)** The goal here is to create a detailed picture of what needs to be migrated, along with any specific requirements or constraints.
>
> **[0:33](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=33)** We need to do this before we can figure out what tools we'll need.
>
> **[0:37](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=37)** You'll find that this is systemic to most of what we do here.
>
> **[0:41](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=41)** Evaluation and tool selection, with the requirements complete, we need to evaluate the available migration tools and services offered by cloud providers.
>
> **[0:51](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=51)** While AWS, Azure, Google Cloud are tool providers, there are third-party tools to consider as well.
>
> **[0:58](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=58)** Consider factors like compatibility with your existing infrastructure, ease of use, cost, scalability, and support for the migration approach you plan to use.
>
> **[1:08](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=68)** Look for the tools that offer comprehensive capabilities for each phase of migration.
>
> **[1:13](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=73)** Finally, make sure to also check for any added benefits.
>
> **[1:18](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=78)** These may include automated processes or AI enhanced features, also integration with other tools and cloud services, Proof of concept, or POC, and final selection, before committing to any tool, conduct a proof of concept or a POC to test its capabilities for suitability for your specific workloads and requirements.
>
> **[1:39](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=99)** This is basically the show-me step where we're making sure that the tool works as advertised.
>
> **[1:45](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=105)** At times, you'll find that these tools are oversold by the vendors, or that there may be some capability problems that no one understood prior.
>
> **[1:53](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=113)** This step will save you a great deal of time, money, and avoiding problems.
>
> **[1:59](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=119)** Select a small representative sample of your applications or data for the POC.
>
> **[2:04](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=124)** Evaluate how well the tool handles assessment, migration, and deployment phases during this trial.
>
> **[2:10](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=130)** Look for ease of use, efficiency, reliability, and performance improvements.
>
> **[2:15](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=135)** Gather feedback from your team on the experience of using the tool.
>
> **[2:20](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=140)** By following these three basic steps, you can streamline the process of identifying the right tools for migrating to the cloud, ensuring a smoother and more effective migration journey.
>
> **[2:31](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/selecting-tools?u=76281980&t=151)** Next, let's talk about considering AI as a resource for your application migrating journey.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), aws (1), make (1)
> **Env Vars:** poc (3), aws (1)
> **Code Keywords:** finally, (1), let (1)
> **Analogies:** picture (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Considering AI with cloud migration
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=0)** - [Presenter] Will AI save you?
>
> **[0:01](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=1)** Not really, but using AI can be handy when considering the value that it can bring to application migration to the cloud.
>
> **[0:09](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=9)** When considering cloud migration, leveraging AI offers several advantages across various dimensions.
>
> **[0:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=16)** First, automation plays a critical role.
>
> **[0:18](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=18)** AI-powered tools like AWS Application Migration Service, Azure Migrate, and Google's Cloud's AI enabled tools can automate many tasks involved in the migration process.
>
> **[0:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=32)** You may recall that we covered these tools in the last section.
>
> **[0:37](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=37)** This includes the initial assessment and planning to the actual migration and post-migration optimization.
>
> **[0:43](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=43)** These tools can automate repetitive manual tasks, such as resource allocation, performance monitoring, and risk assessment, which accelerates the migration process and reduces the likelihood of human error.
>
> **[0:56](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=56)** Second, optimization and resource management are enhanced through AI-driven tools.
>
> **[1:02](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=62)** These are tools you may also be familiar with from the previous section.
>
> **[1:06](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=66)** They include Turbonomic, owned by IBM, and Platform9, which continuously analyzes cloud environments to optimize resource usage.
>
> **[1:18](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=78)** AI can analyze performance data and usage patterns to make real-time adjustments to resource allocations, ensuring efficient application performance throughout the migration.
>
> **[1:29](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=89)** While they're handy, you can't really automate everything.
>
> **[1:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=92)** Thus, you need to use planning and strategy around leveraging these tools to find the true value.
>
> **[1:38](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=98)** Finally, risk mitigation and compliance are significantly improved through AI tools.
>
> **[1:44](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=104)** What are these tools?
>
> **[1:45](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=105)** They include IBM Cloud Pak for Data and AWS Trusted Advisor.
>
> **[1:51](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=111)** These tools use AI to identify potential risks and ensure compliance with industry standards.
>
> **[1:57](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=117)** By continuously monitoring the migration process for compliance with security policies and regulatory standards, AI can identify and mitigate risks such as vulnerabilities, data breaches, and performance bottlenecks.
>
> **[2:10](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=130)** By focusing on automation, organizations can leverage AI's advantage to achieve a smoother, more efficient and secure cloud migration.
>
> **[2:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=139)** While they are not replacing humans just yet, they are handy to consider and to leverage.
>
> **[2:25](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-ai-with-cloud-migration?u=76281980&t=145)** Next, let's talk about DevOps and cloud migration.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (2), make (1), find (1)
> **Env Vars:** aws (2), ibm (2)
> **Code Keywords:** finally, (1), let (1)
> **Cross-References:** we covered (1), in the last (1)
> **Analogies:** such as (2)
> **Speakers:** - [presenter] (1)

#### Considering DevOps
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=0)** - [Instructor] Incorporating DevOps into your cloud migration strategy is crucial for ensuring a seamless transition and establishing an effective development process and toolchain.
>
> **[0:10](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=10)** Here are three of the most important concepts to consider.
>
> **[0:13](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=13)** Integration and automation.
>
> **[0:15](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=15)** As part of your cloud migration, select cloud services and tools that integrate with your existing DevOps toolchain.
>
> **[0:22](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=22)** This is done to enhance your automation capabilities.
>
> **[0:25](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=25)** This includes using cloud-native CI/CD tools, our continuous integration and continuous deployment tools, such as AWS CodePipeline, Azure DevOps, and Google Cloud Build to automate the build, test, and deployment process.
>
> **[0:40](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=40)** Additionally, employ infrastructure as code or IaC tools, like Terraform and AWS CloudFormation, to automate infrastructure provisioning and management.
>
> **[0:50](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=50)** Continuous monitoring.
>
> **[0:52](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=52)** Continuous monitoring tools and approaches are key principles of DevOps.
>
> **[0:57](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=57)** We use these to provide robust monitoring and logging practices using cloud-native tools like AWS CloudWatch, Azure Monitor, and Google Cloud operations suite.
>
> **[1:09](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=69)** Collaboration and culture.
>
> **[1:11](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=71)** DevOps is as much about fostering and collaborative culture as it is about technology.
>
> **[1:17](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=77)** This means as a part of DevOps used within the activities of cloud migration that we're encouraging communications and collaborations between development, operations, and security team.
>
> **[1:30](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=90)** This needs to occur throughout the cloud migration process.
>
> **[1:33](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=93)** Use collaboration platforms like Slack or Microsoft Teams to facilitate this interaction.
>
> **[1:40](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=100)** Incorporating DevOps into your cloud migration strategy is a key step that cannot be skipped.
>
> **[1:46](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=106)** This will enhance efficiency, reliability, and continuous improvement.
>
> **[1:50](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/considering-devops?u=76281980&t=110)** Next, let's finish our discussion by explaining how to create a migration process.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (3), cd (1), terraform (1)
> **Env Vars:** aws (3)
> **Code Keywords:** let (1)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Creating a process
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=0)** - [Instructor] Creating a process for application migration to the cloud involves several steps, but the three most critical ones are assessment and planning.
>
> **[0:09](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=9)** Do an assessment of your existing IT environment.
>
> **[0:12](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=12)** This includes creating an inventory for all applications, understanding their dependencies, and evaluating their readiness for cloud migration.
>
> **[0:20](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=20)** Use tools like AWS Migration Hub, Azure Migrate, and Google's Cloud Migrate for Compute Engine for automated discovery and assessment.
>
> **[0:30](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=30)** You may recall that we already discussed why we're doing this.
>
> **[0:33](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=33)** Basically to understand better the applications that we'll be moving to the cloud.
>
> **[0:39](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=39)** Migration execution.
>
> **[0:42](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=42)** With a detailed plan in place, proceed to execute the migration.
>
> **[0:46](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=46)** Depending on the migration strategy chosen, this could mean simple lift-and-shifts, rehosting, or more complex transformation that may employ refactoring or architecting.
>
> **[0:58](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=58)** Use cloud-native migration tools like AWS Database Migration Service, Azure Site Recovery, or Google's Cloud Migrate for Anthos to assist with this portion of the process.
>
> **[1:10](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=70)** Optimization and ongoing management.
>
> **[1:13](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=73)** Once the applications are successfully migrated, the next step is to operate the cloud environment.
>
> **[1:18](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=78)** This involves monitoring performance, scaling resources as needed, and optimizing cost.
>
> **[1:24](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=84)** There are several tools that can assist you here, including AWS CloudWatch, Azure Monitor, and Google's Cloud operations suite.
>
> **[1:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=92)** This structured approach just defined helps mitigate risks, ensure a smooth transition, and maximizes the benefits of the cloud environment.
>
> **[1:41](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/creating-a-process?u=76281980&t=101)** In the next section, we'll talk about migration at scale and doing migrations that allow you to place many applications and datasets in the cloud.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (3)
> **Env Vars:** aws (3)
> **Code Keywords:** this. (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 6. Migration at Scale

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Getting up to 100 applications a day
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/getting-as-many-as-10-100-applications-a-day?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/getting-as-many-as-10-100-applications-a-day?u=76281980&t=0)** - [Instructor] Moving a single application to the cloud is hard enough.
>
> **[0:03](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/getting-as-many-as-10-100-applications-a-day?u=76281980&t=3)** Try 100 or 1000 applications.
>
> **[0:06](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/getting-as-many-as-10-100-applications-a-day?u=76281980&t=6)** That's what many enterprises are facing.
>
> **[0:08](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/getting-as-many-as-10-100-applications-a-day?u=76281980&t=8)** Let's explore how this is done.
>
> **[0:11](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/getting-as-many-as-10-100-applications-a-day?u=76281980&t=11)** In order to do migration at scale, you need to think in terms of batches, and making sure you're dealing with the applications holistically, not just one at a time.
>
> **[0:22](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/getting-as-many-as-10-100-applications-a-day?u=76281980&t=22)** This means that someone will be responsible for doing the planning needed to make sure we're leveraging the tooling, code refactoring, and testing as a group of applications to get many applications migrated in a short period of time, and doing so with fewer resources then if we migrated the applications one by one.
>
> **[0:42](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/getting-as-many-as-10-100-applications-a-day?u=76281980&t=42)** tools can be used for this, at least when they're deemed useful, such as code mediation, testing, and deployment tools that can move applications from on-premise systems to the cloud with one swipe of the mouse, making sure the code will function on the target platforms and that security and governance is prioritized as well.
>
> **[1:01](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/getting-as-many-as-10-100-applications-a-day?u=76281980&t=61)** However, this is another one of those it depends type situations, where it all depends on the existing state of the applications, the platforms where they reside now, and the platform you're looking to move them to in the cloud.
>
> **[1:15](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/getting-as-many-as-10-100-applications-a-day?u=76281980&t=75)** The trick is to look at what needs to get done, the number of workloads that need to move, and any opportunities that exist to move these applications to the cloud more efficiently.
>
> **[1:26](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/getting-as-many-as-10-100-applications-a-day?u=76281980&t=86)** Next, let's consider organizations and skills as it relates to migration to the cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), function (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Organization and skill considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=0)** - [Instructor] You'll find out quickly that technology is easy but the people are hard.
>
> **[0:04](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=4)** Indeed, the key to a successful migration is to build up the skills you need to pull it off.
>
> **[0:09](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=9)** This means understanding where you are now and where you need to be, and mapping a path from one to the others.
>
> **[0:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=16)** Let's consider this.
>
> **[0:17](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=17)** You need to do an as-is skill assessment to see what skills inventory you have in-house.
>
> **[0:24](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=24)** This means listing who you have available to you as a human resource, what capabilities they have, and other factors that you should be considering.
>
> **[0:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=32)** Then you figure out the skills you'll need to pull off a migration of applications to the cloud.
>
> **[0:38](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=38)** For example, you may need AWS DynamoDB skills, serverless computing skills, Google AI skills, AWS infrastructure engineering skills, and about two dozen other skills that you'll likely need, as well.
>
> **[0:51](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=51)** This should be your to-be skills assessment, skills you certainly need to be successful.
>
> **[0:58](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=58)** Now, the hard part, attaining the skills that you need.
>
> **[1:01](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=61)** This is a combination of training, hiring, using outside consultants to get the inventory of skills you'll need to be successful with your cloud migration.
>
> **[1:10](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=70)** This must be done before you start your cloud migration, and it is a time-consuming activity with many skills acquisitions taking as much as six months.
>
> **[1:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=79)** So this needs to be on your radar as early as it can be.
>
> **[1:22](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/organization-and-skill-considerations?u=76281980&t=82)** Now, let's consider security considerations.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (2), find (1)
> **Code Keywords:** let (2), this. (1)
> **Env Vars:** aws (2)
> **Definitions:** is a  (2)
> **Prerequisites:** you'll need (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Security considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=0)** - [Instructor] This is a cloud migration course and not a cloud security course, so we're not going to do a deep dive here.
>
> **[0:06](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=6)** If you're interested, there are many cloud security courses that you can take here, and I urge you to do so.
>
> **[0:12](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=12)** So, let's just focus on what's important to migration.
>
> **[0:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=16)** First, security is systemic to all of this.
>
> **[0:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=19)** You can't just do security as a final step in a migration.
>
> **[0:22](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=22)** It has to be a part of each step, including each application and dataset.
>
> **[0:27](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=27)** Security should be engineered into the applications, so it's important to have a security specialist that is a part of the migration team, ensuring that the applications are living up to the security expectations.
>
> **[0:40](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=40)** Second, security is a cross-application concept.
>
> **[0:44](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=44)** In other words, we're not just attempting to create a unique security solution for each application and dataset.
>
> **[0:51](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=51)** Instead, looking at a common security mechanism we can use across applications or as many as we can.
>
> **[0:59](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=59)** You never want to reinvent the wheel if you can help it.
>
> **[1:02](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=62)** That includes governance that we'll discuss next as well.
>
> **[1:06](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=66)** Finally, make sure that security is a part of your migration planning.
>
> **[1:10](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=70)** Too often, it's left out and often ignored.
>
> **[1:13](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=73)** Again, security is systemic to all of these applications residing on the cloud, or anywhere for that matter.
>
> **[1:20](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=80)** Security needs to be a first-class citizen in terms of migration.
>
> **[1:24](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/security-considerations?u=76281980&t=84)** Now let's look at governance and cloud migration.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), in other words (1)
> **Code Keywords:** let (2), this. (1), finally, (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Governance considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/governance-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/governance-considerations?u=76281980&t=0)** - [Narrator] Governance is a software limitation or control that we put on things that are part of a software system, such as which data can be assessed, the time of day that we can leverage an API, or even how many times in an hour that we can file storage systems.
>
> **[0:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/governance-considerations?u=76281980&t=16)** So a single user does not saturate it like security.
>
> **[0:20](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/governance-considerations?u=76281980&t=20)** There's a lot to governance.
>
> **[0:22](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/governance-considerations?u=76281980&t=22)** Also, like security, we have a separate course that does a deep dive into what governance is and how it applies to cloud computing.
>
> **[0:29](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/governance-considerations?u=76281980&t=29)** For now, we can just consider a few basic concepts.
>
> **[0:32](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/governance-considerations?u=76281980&t=32)** First, like security governance is systemic to all applications and data sets.
>
> **[0:37](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/governance-considerations?u=76281980&t=37)** You can't just build and deploy applications without considering governance.
>
> **[0:41](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/governance-considerations?u=76281980&t=41)** Thus, a governance specialist is often a part of most cloud migration teams.
>
> **[0:46](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/governance-considerations?u=76281980&t=46)** Second, you're looking for common services whenever you can.
>
> **[0:49](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/governance-considerations?u=76281980&t=49)** Don't apply a different governance solution for each application and dataset that will drive pharma complexity and cost than you want to deal with.
>
> **[0:59](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/governance-considerations?u=76281980&t=59)** Next, let's look at AI including generative AI.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### AI and generative AI considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=0)** - [Instructor] AI in terms of application migration really does not play as much of a role as most people think.
>
> **[0:07](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=7)** AI applications are migrated much of the time as more traditional applications and data sets.
>
> **[0:13](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=13)** Let's look at what needs to be considered.
>
> **[0:16](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=16)** AI applications come with some dependencies.
>
> **[0:19](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=19)** Many applications leverage central AI systems such as machine learning systems or generative AI LLM systems such as ChatGPT.
>
> **[0:28](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=28)** Thus, you need to consider how your migrated application will be able to continue to access those resources and ensure they can do so reliably.
>
> **[0:37](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=37)** In some cases, the resources will have to be migrated as well.
>
> **[0:41](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=41)** AI applications may have to be tested differently.
>
> **[0:45](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=45)** You need to test the training aspect of AI or the ability for the AI system to get smart.
>
> **[0:51](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=51)** Then you need to test the inference engine or how the AI system is used.
>
> **[0:57](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=57)** We've all used ChatGPT at some point in time.
>
> **[0:59](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=59)** In doing so, you're assessing an inference engine.
>
> **[1:02](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=62)** It's what checks with the knowledge base to gain answers to questions, or in the case of generative AI, generate content that contains the answers.
>
> **[1:12](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=72)** You don't need to be a trained AI engineer or an AI architect to move AI applications to the cloud.
>
> **[1:18](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=78)** You just need to understand what dependencies exist and how these applications need to be tested and operated.
>
> **[1:25](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/ai-generative-ai-considerations?u=76281980&t=85)** So don't let AI scare you away from moving AI applications to the cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (1)
> **Analogies:** such as (2)
> **Env Vars:** llm (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Learning more about cloud migration
> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/learning-more-about-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/learning-more-about-cloud-migration?u=76281980&t=0)** - [Instructor] So where do you go from here?
>
> **[0:02](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/learning-more-about-cloud-migration?u=76281980&t=2)** There were a few things we suggest.
>
> **[0:04](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/learning-more-about-cloud-migration?u=76281980&t=4)** First, take additional courses on cloud computing here.
>
> **[0:08](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/learning-more-about-cloud-migration?u=76281980&t=8)** There are courses by me and other instructors that discuss cloud security, cloud operations, serverless computing, cloud architecture, and other topics that will provide you foundational information that you can use in your career.
>
> **[0:21](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/learning-more-about-cloud-migration?u=76281980&t=21)** Second, perhaps start tuning in to YouTube channels, podcasts, and blogs that cover the evolution of cloud computing.
>
> **[0:29](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/learning-more-about-cloud-migration?u=76281980&t=29)** Finally, give this stuff a try.
>
> **[0:31](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/learning-more-about-cloud-migration?u=76281980&t=31)** There are free cloud tiers where they will allow you to try cloud migration.
>
> **[0:36](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/learning-more-about-cloud-migration?u=76281980&t=36)** This means pushing an application to the cloud and experiencing firsthand how all of this works.
>
> **[0:41](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/learning-more-about-cloud-migration?u=76281980&t=41)** No matter what path you pick, we hope your learning journey continues.
>
> **[0:45](https://www.linkedin.com/learning/cloud-concepts-planning-an-application-migration-strategy/learning-more-about-cloud-migration?u=76281980&t=45)** Good luck to you.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), try. (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Introduction to Enterprise Cloud Migration Planning]]
**1 of 4** | [[Design a Cloud Migration Strategy]] →

## Appears In

- [[Introduction to Enterprise Cloud Migration Planning]]

---

[↑ Back to top](#)