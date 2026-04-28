---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: securing-cloud-resources-with-microsoft-defender-for-cloud
url: "https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud"
duration_minutes: 155
duration: 2h 35m
level: Intermediate
updated: 6/27/2022
learners: 12150
skills:
  - Microsoft Defender
  - Cloud Computing
  - Microsoft Azure
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQF9TniyjeEAFg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655937477081?e=2147483647&amp;v=beta&amp;t=l2jHiAZyNqcpKtfi4L2ErjYvQ1Dc3jnLZtDrMv52LZ8"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Optimizing Enterprise Security and Productivity Using Microsoft 365]]'
prev_courses:
  - '[[Microsoft Entra ID Fundamentals]]'
next_courses:
  - '[[Windows 10- Security]]'
path_nav: '[{"path":"Optimizing Enterprise Security and Productivity Using Microsoft 365","position":6,"total":11,"prev":"Microsoft Entra ID Fundamentals","next":"Windows 10- Security"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - skill/microsoft-defender
  - skill/cloud-computing
  - skill/microsoft-azure
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Securing%20Cloud%20Resources%20with%20Microsoft%20Defender%20for%20Cloud.md)

![Securing Cloud Resources with Microsoft Defender for Cloud](https://media.licdn.com/dms/image/v2/C560DAQF9TniyjeEAFg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655937477081?e=2147483647&amp;v=beta&amp;t=l2jHiAZyNqcpKtfi4L2ErjYvQ1Dc3jnLZtDrMv52LZ8)

# Securing Cloud Resources with Microsoft Defender for Cloud

> Azure Security Center can help you take a more dedicated approach to protecting your Azure and hybrid workloads, in addition to detecting—and quickly reacting to—immediate threats to your environment. With Microsoft Defender for Cloud, your security posture soars to the next level, but you need to know how to use its tools and resources if you want to get the most out of your Defender experience. 

> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud) | 2h 35m | Intermediate | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Manage Security with Microsoft Defender for Cloud** (6 videos)
- **3. 2. Cloud Security** (5 videos)
- **4. 3. Working with Security Center Recommendations** (6 videos)
- **5. 4. Firewall Manager** (6 videos)
- **6. 5. Managing Security Solutions** (2 videos)
- **7. Conclusion** (1 videos)

### 1. Introduction

#### Importance of securing your workloads on the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/importance-of-securing-your-workloads-on-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/importance-of-securing-your-workloads-on-the-cloud?u=76281980&t=0)** - Now more than ever, you hear about the importance of securing your workloads posted on the cloud.
>
> **[0:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/importance-of-securing-your-workloads-on-the-cloud?u=76281980&t=8)** Microsoft Defender for Cloud is your one-stop shop for looking at and managing cloud security parameters.
>
> **[0:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/importance-of-securing-your-workloads-on-the-cloud?u=76281980&t=15)** Cloud security is one of the most rewarding and lucrative career paths.
>
> **[0:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/importance-of-securing-your-workloads-on-the-cloud?u=76281980&t=21)** And the best way of learning is to start understanding its basic fundamentals.
>
> **[0:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/importance-of-securing-your-workloads-on-the-cloud?u=76281980&t=27)** Once this foundation is established, designing advanced security architecture becomes easier.
>
> **[0:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/importance-of-securing-your-workloads-on-the-cloud?u=76281980&t=33)** Hi, I'm Stuti Kaushal.
>
> **[0:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/importance-of-securing-your-workloads-on-the-cloud?u=76281980&t=36)** I have been working in the IT industry for a decade now.
>
> **[0:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/importance-of-securing-your-workloads-on-the-cloud?u=76281980&t=40)** I'm a cloud architect by profession and I love to share my knowledge with others.
>
> **[0:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/importance-of-securing-your-workloads-on-the-cloud?u=76281980&t=46)** In this course, you'll be learning how Defender for Cloud gives us a single pane of glass visibility across our hybrid and multicloud environments, helping us in managing the security posture of our resources.
>
> **[1:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/importance-of-securing-your-workloads-on-the-cloud?u=76281980&t=61)** We will cover all the aspects of Microsoft Defender for Cloud and you'll get hands-on practice.
>
> **[1:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/importance-of-securing-your-workloads-on-the-cloud?u=76281980&t=69)** Whether you are a beginner or someone with knowledge of security who is keen to refine their skills, you are in the right place.
>
> **[1:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/importance-of-securing-your-workloads-on-the-cloud?u=76281980&t=77)** Let's dive right into the nuances of Microsoft Defender for Cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - now (1)

#### Track your spending in Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=0)** - [Instructor] Azure offers a free trial account, which has a 30 day valid date from the date of creation.
>
> **[0:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=6)** This account gives users free trial credit of US$200, which can be consumed within the first 30 days for creating most of the available Azure services.
>
> **[0:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=19)** You must note that any unused monthly credit cannot be carried over to the subsequent months for your free trial account.
>
> **[0:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=28)** Further, these credits can't be transferred to any other Azure subscription.
>
> **[0:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=33)** All you need to create this account is a valid credit or debit card, a working phone number, and a Microsoft or a GitHub account.
>
> **[0:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=44)** Your credit or debit card will not be charged except for a temporary authorization hold.
>
> **[0:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=50)** The free trial account includes popular services that are free for 12 months, 40-plus other services that are always free, and to start with, you get a credit of US$200 in your account.
>
> **[1:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=66)** Visit HTTPS Azure link to create your free trial account.
>
> **[1:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=72)** Once you are done creating the free trial account, follow along with me in learning Microsoft Defender for Cloud Services.
>
> **[1:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=79)** Let me also guide you on tracking your spending to keep an eye on the budget.
>
> **[1:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=85)** Once the trial account has been created, you can navigate to the cost management plus billing section in the Azure portal.
>
> **[1:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=93)** Inside Azure portal, search for cost management and you'll get cost management plus billing service.
>
> **[1:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=101)** Under cost alert section, you get an option to create a new budget.
>
> **[1:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=106)** Click on Add, give your budget a unique name, select the time window.
>
> **[1:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=114)** It can be monthly, quarterly, or annually.
>
> **[1:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=118)** In our case, as we are creating a one-month free trial account, we will be choosing it as monthly.
>
> **[2:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=125)** Creation date would be the date when you're creating the account.
>
> **[2:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=129)** You need to give your budget amount threshold.
>
> **[2:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=132)** We have a $200 limit, so I'll keep a threshold on $120.
>
> **[2:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=138)** Click Next.
>
> **[2:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=140)** We need to configure the alert conditions and send email notifications based on the spend.
>
> **[2:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=145)** You can create the type as actual, enter the budget percentage.
>
> **[2:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=152)** Say for instance when 80% of the budget is already utilized, that is $96 from your current account.
>
> **[2:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=159)** You will receive an email on your configured email ID.
>
> **[2:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=164)** Punch in your email ID, select your preferred language for receiving the alert.
>
> **[2:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=170)** By default, the language is default.
>
> **[2:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=174)** You can select from the given list of languages.
>
> **[2:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=177)** I'll leave it as default for now.
>
> **[3:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=180)** And click Create.
>
> **[3:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=182)** As you can see, I got a notification that the budget was created successfully.
>
> **[3:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=187)** If I go to the budget section, I see my new budget has been created.
>
> **[3:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=192)** You can also take a look at the expenditure under the cost analysis section.
>
> **[3:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=199)** Here, you see the cost is segregated by resource.
>
> **[3:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=205)** So either you can segregate the cost by a specific resource group or you can create a segregation on the spend on the basis of resource.
>
> **[3:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=217)** So you get what is the expenditure on this month duration for each resource that has been created under your account.
>
> **[3:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=227)** Let us now take a look at some of the best practices that can be used to cut down your expenditure.
>
> **[3:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=233)** I recommend creating a new resource group for each implementation.
>
> **[3:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=238)** Once the configuration is completed successfully, delete the resource group, so that you can save some cost on the resources that were created.
>
> **[4:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=247)** And you do not miss on deleting the resources and they're left being utilized accidentally.
>
> **[4:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=254)** Further, one of the important practices is to stop the virtual machines when they are not in use to save compute costs.
>
> **[4:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/track-your-spending-in-azure?u=76281980&t=263)** Follow these small tips to judiciously plan your expenditure in Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), default, (1), default. (1), delete (1)
> **UI Navigation:** navigate to (1), click on (1), select the (1), go to (1)
> **Tools:** azure portal (2), github (1)
> **Env Vars:** https (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)


### 2. 1. Manage Security with Microsoft Defender for Cloud

#### Microsoft Defender for Cloud overview
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=0)** - [Instructor] What is Defender for Cloud?
>
> **[0:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=3)** Microsoft Defender for Cloud is a solution for Cloud Security Posture Management and threat protection.
>
> **[0:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=10)** It strengthens the security posture of your cloud resources.
>
> **[0:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=14)** And with its integrated Microsoft Defender plans, Defender for Cloud protects workloads running in Azure, hybrid, and other cloud platforms.
>
> **[0:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=25)** Defender for Cloud provides the tools needed to harden your resources, track your security posture, protect against cyberattacks, and streamline security management.
>
> **[0:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=37)** Microsoft Defender for Cloud's features cover the two broad pillars of cloud security, namely, Cloud Security Posture Management and Cloud Workload Protection.
>
> **[0:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=49)** In Defender for Cloud, the posture management features provide: Visibility.
>
> **[0:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=55)** This feature is used to help you understand your current security situation.
>
> **[1:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=60)** And hardening guidance.
>
> **[1:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=62)** You can improve your security efficiently and effectively using hardening guidance.
>
> **[1:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=69)** The central feature in Defender for Cloud that enables you to achieve those goals is secure score.
>
> **[1:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=76)** Defender for Cloud continually assesses your resources, subscriptions, and organization for security issues.
>
> **[1:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=86)** Next comes Cloud Workload Protection.
>
> **[1:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=90)** The workload protections are provided through Microsoft Defender plans specific to the types of resources in your subscription.
>
> **[1:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=98)** For example, you can enable Microsoft Defender for storage to get alerted about suspicious activities related to your storage accounts.
>
> **[1:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=109)** Now, we have a fair idea about what Microsoft Defender for Cloud is.
>
> **[1:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=114)** So let's jump to the portal and check out all new features of Microsoft Defender for Cloud.
>
> **[2:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=121)** There are a few ways to open Microsoft Defender for Cloud service.
>
> **[2:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=126)** Go to the search bar on the top and start typing Microsoft.
>
> **[2:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=131)** It opens up the Microsoft Defender for Cloud in the search results.
>
> **[2:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=137)** Second option is to click on this hamburger icon.
>
> **[2:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=140)** Move to All services.
>
> **[2:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=143)** Under All services search for Security.
>
> **[2:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=148)** In Security, you'll find the feature Microsoft Defender for Cloud.
>
> **[2:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=154)** When you open Microsoft Defender for Cloud, the first page that opens is the Overview dashboard.
>
> **[2:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=161)** This interactive dashboard provides a unified view into security posture of your hybrid cloud workloads.
>
> **[2:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=169)** The top menu bar offers a list of resources: Azure subscriptions.
>
> **[2:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=175)** It gives alerts coming from other cloud providers, like AWS and GCP.
>
> **[3:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=180)** Assess resources.
>
> **[3:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=182)** Active recommendations.
>
> **[3:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=184)** And security alerts connected to your cloud account.
>
> **[3:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=188)** The center of the page holds four tiles, each linked to a dedicated dashboard.
>
> **[3:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=194)** Let's discuss about each dashboard.
>
> **[3:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=198)** First one is Secure score.
>
> **[3:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=201)** Secure score is the measure of security posture of your subscription.
>
> **[3:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=206)** Defender for Cloud continually assesses your resources, subscriptions, and organization for security issues.
>
> **[3:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=214)** Secure score aggregates all the findings into a single score so that you can see your current security situation at a glance.
>
> **[3:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=223)** The higher the score the lower is the identified risk level.
>
> **[3:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=229)** Next is the Regulatory compliance.
>
> **[3:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=232)** Defender for Cloud provides insight into your compliance posture based on continuous assessment of your Azure environment.
>
> **[4:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=240)** Defender for Cloud analyzes risk factors in your hybrid cloud environment according to security-based practices.
>
> **[4:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=249)** These assessments are mapped to compliance controls from a supported set of standards.
>
> **[4:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=256)** Next comes Workload protection.
>
> **[4:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=259)** Defender for cloud offers security alerts that are powered by Microsoft Threat Intelligence.
>
> **[4:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=266)** It also includes a range of advanced, intelligent protections for your workloads.
>
> **[4:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=273)** The workload protections are provided through Microsoft Defender plans specific to the type of resources in your subscriptions.
>
> **[4:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=281)** For example, you can enable Microsoft Defender for a storage to get alerted about suspicious activities related to your storage accounts.
>
> **[4:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=291)** Then comes the Firewall Manager.
>
> **[4:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=294)** Firewall Manager shows the status of your hubs and networks from the Azure Firewall Manager.
>
> **[5:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=302)** Next is the Inventory section.
>
> **[5:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=304)** The asset inventory page of Microsoft Defender for Cloud provides a single page for viewing the security posture of your resources you have connected to Microsoft Defender for Cloud.
>
> **[5:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=317)** It periodically analyzes the security state of resources connected to your subscriptions to identify potential security vulnerabilities.
>
> **[5:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=326)** It then provides you with recommendations on how to remediate those vulnerabilities.
>
> **[5:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=333)** Next is the Information protection section.
>
> **[5:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=336)** Information protection comprises Azure Purview, which is a unified data governance solution that helps you manage and govern your on-premises, multi-cloud, and software-as-a-service data.
>
> **[5:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=350)** It easily creates a holistic, up-to-date map of your data landscape with automated data discovery, sensitive data classification, and end-to-end data lineage.
>
> **[6:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=363)** It also enables data consumers to find valuable and trustworthy data.
>
> **[6:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=371)** Coming to the right pane, it provides a customized view of resources present within your environment, including: Suggestions to add plans that can improve security posture.
>
> **[6:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=384)** In our scenario, we are getting the suggestion to upgrade to New Container plans.
>
> **[6:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=390)** Next comes Most prevalent recommendations.
>
> **[6:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=395)** Third section displays security controls that have highest potential to increase your secure score.
>
> **[6:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=402)** Then we see Defender for Cloud community section.
>
> **[6:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=406)** Followed by Most attacked resources.
>
> **[6:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=410)** Next section displays new security alerts being detected by Defender for Cloud in the last 48 hours.
>
> **[6:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=418)** Last section covers security-related latest blog posts from Microsoft experts.
>
> **[7:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=425)** In our upcoming videos, we shall discuss all the features listed inside Microsoft Defender for Cloud, including: Recommendations, Security alerts, Inventory, Workbooks, Security posture, Regulatory compliance, Workload protection, Firewall Manager, Environment settings, Security solutions, and Workflow automation.
>
> **[7:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-for-cloud-overview?u=76281980&t=451)** Let's dive into the course and gain some in depth knowledge on Microsoft Defender for Cloud product.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), aws (1)
> **Code Keywords:** let (3)
> **Env Vars:** aws (1), gcp (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Enable Microsoft Defender for Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=0)** - [Narrator] Defender for Cloud provides unified security management and threat protection across your hybrid and multi-cloud workloads.
>
> **[0:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=9)** It strengthens the security posture of your cloud resources.
>
> **[0:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=13)** And with its integrated Microsoft Defender plans, Defender for Cloud protects your workloads running in Azure, hybrid, and other cloud platforms.
>
> **[0:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=24)** Enabling Microsoft Defender for Cloud.
>
> **[0:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=28)** Learning objectives.
>
> **[0:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=30)** Defender for Cloud is a tool for security posture management and threat protection.
>
> **[0:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=35)** It strengthens the security posture of your cloud resources and with its integrated Microsoft Defender plans, Defender for Cloud predicts workloads running in Azure, hybrid, and other cloud platforms.
>
> **[0:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=51)** Defender for Cloud provides tools needed to harden your resources, track your security posture, protect against cyber attacks, and streamline security management.
>
> **[1:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=65)** It fulfills three needs, namely, continuous assessment.
>
> **[1:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=71)** This feature provides a secure score that helps you in understanding the current security posture of your subscription.
>
> **[1:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=81)** Under continuous assessment, we have two subdivisions, namely, vulnerability assessment and regulatory compliance.
>
> **[1:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=91)** Defender for Cloud includes vulnerability assessment solutions for your virtual machines, container registries, and SQL servers as a part of the enhanced security features.
>
> **[1:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=104)** Some of the scanners are powered by Qualys, but you don't need a Qualys license, or even a Qualys account.
>
> **[1:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=112)** Everything's handled seamlessly inside Defender for Cloud.
>
> **[1:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=117)** Under regulatory compliance, you can look for compliance requirements and add industry standard compliance to your solution.
>
> **[2:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=126)** Security recommendations.
>
> **[2:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=128)** These recommendations help in hardening of connected resources using features like just-in-time VM access, adaptive network hardening, and adaptive application control.
>
> **[2:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=142)** Security alerts.
>
> **[2:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=144)** These alerts are generated when Defender for Cloud detects a threat in any area of your environment.
>
> **[2:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=152)** Integration with Microsoft Sentinel helps with third-party SIEM tools.
>
> **[2:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=160)** These alerts can also be integrated with Microsoft Sentinel.
>
> **[2:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=165)** In addition to defending your Azure environment, you can add Azure Defender capabilities to your hybrid cloud environment to protect your non-Azure servers.
>
> **[2:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=176)** Azure Defender also enables users to protect their virtual machines in other clouds such as AWS and GCP.
>
> **[3:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=185)** Enabling Azure Defender brings a range of additional security features on your subscription.
>
> **[3:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=192)** In addition to built-in policies, when you have enabled any Azure Defender plan, you can add custom policies and initiatives.
>
> **[3:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=201)** Security center comprises of two plans, namely, free pricing tier and standard tier.
>
> **[3:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=208)** Security center's free pricing tier is enabled on all your current Azure subscriptions.
>
> **[3:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=215)** Standard tier, this tier allows users to take advantage of advanced security management and threat detection capabilities.
>
> **[3:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=225)** The standard tier can be tried for first 30 days for free.
>
> **[3:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=230)** Now, let's enable Azure Defender on your subscription and workspaces.
>
> **[3:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=236)** Will navigate to the Azure portal.
>
> **[4:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=240)** Open Microsoft Defender for Cloud, navigate to the Regulatory compliance and click on manage policies.
>
> **[4:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=250)** From the Environment setting page, select the subscription or workspace that you want to protect.
>
> **[4:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=257)** Select Enable all on the Microsoft Defender plan and click on the Save button.
>
> **[4:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=265)** Your settings will be saved and you will get a notification once the settings have been saved successfully.
>
> **[4:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=274)** You can selectively turn on or off Defender plans for selected resource types as per your requirement.
>
> **[4:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=282)** Here, you see, the Defender plan is enabled by default for servers, app service, database, storage, containers, key vault, resource manager, and DNS.
>
> **[4:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=297)** And you also see the pricing plans per month.
>
> **[5:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=301)** Click on Off and select Save.
>
> **[5:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=305)** Disabling Microsoft Defender for resource manager puts your existing and newly created resources at risks.
>
> **[5:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=313)** Click Confirm and the Defender plan would be disabled for resource manager.
>
> **[5:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=319)** Please remember, Microsoft Defender for Cloud's enhanced security features will be enabled on all the resource types that you have selected.
>
> **[5:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=329)** The first 30 days are free.
>
> **[5:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/enable-microsoft-defender-for-cloud?u=76281980&t=332)** You can also select Defender plans by resource type as we just saw.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), navigate to (2), select the (1)
> **Env Vars:** sql (1), siem (1), aws (1), gcp (1), dns (1)
> **CLI Commands:** aws (1)
> **Code Keywords:** let (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Review your security recommendations
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=0)** - What are recommendations?
>
> **[0:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=3)** Defender for Cloud analyzes the security state of your resources to identify potential vulnerabilities.
>
> **[0:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=10)** On identifying potential security vulnerabilities, Defender for Cloud creates recommendations that guide you through the process of configuring the needed security controls.
>
> **[0:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=21)** Defender for Cloud updates its recommendations within 24 hours with the following exceptions: Operating system security configuration recommendations are updated within 48 hours.
>
> **[0:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=35)** Endpoint protection issues recommendations are updated within 8 hours.
>
> **[0:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=41)** Each recommendation provides you with a short description of what is being recommended.
>
> **[0:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=47)** Remediation steps for mitigating recommendations.
>
> **[0:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=51)** Resources that need recommendation action implementation.
>
> **[0:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=55)** Now, let's navigate to the Azure portal.
>
> **[0:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=59)** Start by navigating to the Recommendations section under Microsoft Defender for Cloud.
>
> **[1:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=66)** This page shows secure score which is a combined score based on the selected environments.
>
> **[1:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=73)** Namely Azure, AWS and GCP.
>
> **[1:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=79)** Then comes Active items.
>
> **[1:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=82)** Active items are further divided into controls and recommendations.
>
> **[1:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=87)** It also shows resource health which is divided into number of unhealthy resources, number of healthy resources and resources where recommendations aren't applicable at all.
>
> **[1:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=102)** The All recommendations page shows a list of recommendations that directly affect your secure score.
>
> **[1:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=110)** These recommendations are grouped into security controls each representing a severity ranging between high, medium and low.
>
> **[2:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=121)** Now that we are aware of the place to look for recommendations, we will look at the steps to monitor these recommendations.
>
> **[2:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=129)** This page gives a list of optional filters that can be used to find recommendations based on criteria that are important to you.
>
> **[2:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=138)** Including recommendation status, recommendation maturity, severity, environment, resource type.
>
> **[2:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=147)** There are other additional filters that you can add from here.
>
> **[2:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=150)** Including initiative, contains exemption, tactics, recommendation type, insights, resource group, AWS account or a GCP project.
>
> **[2:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=162)** Let's look into each of these in detail.
>
> **[2:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=166)** The recommendation status page comprises of two status codes, namely completed and unhealthy.
>
> **[2:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=173)** Will select all and click Okay.
>
> **[2:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=179)** The page refreshes and all the recommendations are being shown now.
>
> **[3:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=185)** There is a small toggle button provided with each of these fields, which allows us to sort list of recommendations alphabetically.
>
> **[3:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=194)** Right now I'll show you how to sort the fields based on status.
>
> **[3:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=198)** So, if I click once it'll be sorted in the ascending order.
>
> **[3:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=203)** All the completed statuses will be shown now.
>
> **[3:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=207)** If I sort by status again, the list of recommendations whose statuses unhealthy are now being displayed on the page.
>
> **[3:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=215)** Users can filter the list of recommendations on the basis of resource type as well.
>
> **[3:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=221)** Under the value you see lists of all the resources for which we see a recommendation.
>
> **[3:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=229)** We'll filter the list by virtual machines.
>
> **[3:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=232)** Click Okay.
>
> **[3:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=235)** And the results are filtered based on the virtual machines.
>
> **[3:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=239)** In the environment, we have two environments.
>
> **[4:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=242)** Let's just select Azure as our environment.
>
> **[4:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=245)** Select Okay and the list is now segregated based on the virtual machines that are hosted in Azure.
>
> **[4:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=254)** Remember that these recommendations directly affect your secure score.
>
> **[4:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/review-your-security-recommendations?u=76281980&t=259)** You can make use of these recommendations to harden your resources available in your environment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type. (1), type, (1)
> **CLI Commands:** aws (2), find (1), make (1)
> **Env Vars:** aws (2), gcp (2)
> **UI Navigation:** navigate to (1), toggle (1)
> **Definitions:** is a  (2)
> **Tools:** azure portal (1)
> **Best Practices:** recommended (1)
> **Speakers:** - what (1)

#### Remediate recommendations
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=0)** - [Instructor] Remediating security recommendations.
>
> **[0:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=3)** Recommendations give you suggestions on how to better secure your resources.
>
> **[0:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=9)** You can remediate a recommendation by following the remediation instructions provided in the portal.
>
> **[0:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=17)** After reviewing all the recommendations decide which one to remediate first.
>
> **[0:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=22)** Each recommendation has its own set of remediation instructions.
>
> **[0:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=28)** First is fix.
>
> **[0:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=30)** Fix helps us to permanently resolve a recommendation on multiple resources.
>
> **[0:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=36)** Enforce, using the enforce option, you can take advantage of Azure policies, deploy if not exist, effect, and automatically remediate non-compliant resources upon creation.
>
> **[0:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=50)** Deny, deny effect prevents creation of unhealthy resources.
>
> **[0:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=56)** It also prevents a new resource from being created that does not need your organization's security policy.
>
> **[1:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=64)** Let's learn how to remediate a security recommendation.
>
> **[1:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=69)** Navigate to the recommendation section.
>
> **[1:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=73)** Go to the All recommendations.
>
> **[1:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=76)** Under Response action, you get Fix, Deny, Enforce, and None, the set of remediation actions that we just discussed.
>
> **[1:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=88)** In our case, we are opening All network ports should be restricted on network security groups.
>
> **[1:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=95)** The page shows Severity, Freshness interval, and Tactics and techniques featuring the maximum amount of reflection time taken for remediating issues.
>
> **[1:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=108)** We can also see details like Description, Remediation steps, and Affected resources.
>
> **[2:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=120)** Let's learn how to exempt a recommendation.
>
> **[2:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=123)** A core priority of every security team is to ensure that analysts can focus on remediating security-related threats.
>
> **[2:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=132)** Occasionally, a resource will be listed that you feel shouldn't be included or a recommendation will show in a scope where you feel it doesn't belong.
>
> **[2:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=143)** The resource might have been remediated by a process not tracked by Defender for Cloud.
>
> **[2:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=149)** In such scenarios, exemption comes into the picture.
>
> **[2:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=153)** You can exempt a recommendation from any scope so that it doesn't affect your secure scope.
>
> **[2:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=160)** The resource's status will change to not applicable.
>
> **[2:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=165)** Let's see how we can exempt a recommendation.
>
> **[2:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=168)** Click on the Exempt button.
>
> **[2:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=171)** Azure provides exemption capability at management group level, subscription level, or at the resource level.
>
> **[2:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=179)** Here, I've chosen the subscription.
>
> **[3:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=182)** Give a name to the exemption.
>
> **[3:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=185)** In my case, I'm taking the autopopulated name.
>
> **[3:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=191)** Set an expiry date.
>
> **[3:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=193)** This feature allows you to take an exemption of a recommendation for a particular duration of time.
>
> **[3:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=200)** Let's take an exemption of six months.
>
> **[3:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=203)** So today is 22nd of March.
>
> **[3:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=206)** I'll take the recommendation till the month of September.
>
> **[3:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=211)** Now we have to choose a category.
>
> **[3:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=214)** Is it already mitigated?
>
> **[3:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=216)** In our case, we are taking a waiver of this and we will talk to our security team and get back to the remediation before 30th of September.
>
> **[3:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=227)** So I'll take a description over here, taking a one time exception and click Create.
>
> **[3:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=237)** You see the policy exemption has been created successfully.
>
> **[4:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=242)** Now from the Response actions screen, we will choose the recommendation that we need to fix.
>
> **[4:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=251)** Here, we will work upon the recommendation Microsoft Defender for Resource Manager should be enabled.
>
> **[4:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=257)** You see a small fix icon towards the right of the recommendation.
>
> **[4:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=264)** Click on the icon.
>
> **[4:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=266)** It'll redirect you to the Defender screen.
>
> **[4:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=270)** Now select the recommendation where you want to apply the fixes.
>
> **[4:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=275)** Once you are done with the selection, click on Fix button.
>
> **[4:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=280)** It gives you the warning that this action will enable Azure Defender Resource Manager plans in the chosen subscription.
>
> **[4:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=287)** I chose to fix the recommendation.
>
> **[4:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=290)** Once it is completed, a notification will appear informing that the remediation has been fixed successfully.
>
> **[4:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=298)** So you see, a successful remediation message has been popped up.
>
> **[5:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=305)** One more way to remediate the recommendation is to click on any of the unhealthy resources.
>
> **[5:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=312)** So I'll open a secure transfer for storage account should be enabled recommendation.
>
> **[5:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=318)** Under Unhealthy resources, I see the name of storage account where it gives the recommendation to enable the secure transfer.
>
> **[5:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=326)** I directly click on the storage account.
>
> **[5:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=330)** It takes me to the page where I can simply enable the secure transfer.
>
> **[5:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=335)** I click on Enabled and click Save.
>
> **[5:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=339)** The secure transfer on the storage account has been enabled successfully.
>
> **[5:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=344)** Now after some time, you will see that this recommendation will disappear.
>
> **[5:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=352)** Next, we will look on the recommendations where enforce option can be applicable.
>
> **[5:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=358)** Select Enforce from the Response actions option.
>
> **[6:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=363)** You see a small icon which shows the enforce button.
>
> **[6:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=368)** We will work with the recommendations stating Microsoft Defender for Resource Managers should be enabled.
>
> **[6:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=374)** Click on the simply Enforce icon.
>
> **[6:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=379)** Select the scope where you want to enforce this option.
>
> **[6:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=383)** In my case, I'll choose the scope as subscription.
>
> **[6:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=389)** You can also scope it at the resource group level.
>
> **[6:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=393)** I'll keep the exclusion as default.
>
> **[6:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=396)** Give a name to the assignment which I'm giving the default name that has been given.
>
> **[6:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=402)** Now in the description, I'll simply type, defender for resource manager should be enabled.
>
> **[6:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=410)** Click the policy enforcement as Enabled.
>
> **[6:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=413)** Assigned by, you can give either your name.
>
> **[6:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=416)** Here, I'm choosing default.
>
> **[6:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=419)** Click on Review + create.
>
> **[7:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=421)** It gives you a summary of actions that you have performed.
>
> **[7:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=426)** It is also assigned to a specific location.
>
> **[7:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=428)** Here, the location is chosen as eastus and click Create.
>
> **[7:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=435)** You get the notification rule assignment has been created successfully.
>
> **[7:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=440)** Let's work with the deny option under the Response action.
>
> **[7:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=445)** The deny option enables user to set a scope for deny effect on your Azure policy.
>
> **[7:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=452)** I'll choose Storage account public access should be disallowed and this is the deny icon.
>
> **[7:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=459)** I simply click on the deny icon.
>
> **[7:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=461)** It'll redirect me to the actions page.
>
> **[7:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=465)** Now sometimes, you want to give the public access to certain users so that they can view the data inside your storage account.
>
> **[7:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=473)** In that case, denying this policy comes handy.
>
> **[7:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=478)** I'll simply select the resource and click Deny.
>
> **[8:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=483)** Click on the subscription.
>
> **[8:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=484)** The scope of deny of your Azure policy has been sent to the entire subscription level and I click on Change to Deny.
>
> **[8:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=495)** The policy assignment has been updated.
>
> **[8:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=500)** Every recommendation gives the View policy definition option.
>
> **[8:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=505)** Here, you can assign this policy definition to a specific policy, duplicate the definition, or even export the definition as per your requirements.
>
> **[8:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=517)** The Open query button helps us to explore the details in Azure Resource Graph, an Azure service that provides the ability to query the security posture of data across multiple subscriptions.
>
> **[8:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=533)** Azure Resource Graph is designed to provide efficient resource exploration with the ability to query at scale across your cloud environments with robust filtering, grouping and sorting capabilities.
>
> **[9:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=547)** It's a quick and efficient way to query information across Azure subscriptions, either programmatically or from within the portal.
>
> **[9:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=558)** Let's click on Run the query.
>
> **[9:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=561)** On running the query, Azure Resource Graph Explorer returns the same number of resources and their health status linked to the open recommendations.
>
> **[9:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=571)** So here, you see three queries have been opened.
>
> **[9:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/remediate-recommendations?u=76281980&t=577)** So now you know how to respond to particular recommendation being given by Microsoft Defender for Cloud.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (12), select the (3), navigate to (1), go to (1)
> **Code Keywords:** let (6), case, (5), default. (2), public (2), type, (1)
> **Analogies:** picture (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Disable a recommendation
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=0)** - Disabling a security recommendation.
>
> **[0:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=4)** Azure enables industry-standard policies and recommendations as a part of their best practices.
>
> **[0:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=11)** The main aim is to follow compliance regulations and avoid any type of security breach.
>
> **[0:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=17)** But in this process, sometimes your security initiative may trigger a recommendation that is irrelevant for your environment.
>
> **[0:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=27)** You can prevent these recommendations from appearing again.
>
> **[0:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=31)** To disable a recommendation, disable the specific policy that generates the recommendation.
>
> **[0:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=38)** Remember, you must have the Microsoft Defender for Cloud plans enabled on your subscription.
>
> **[0:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=45)** Let's navigate to the Azure portal and learn how to disable a recommendation.
>
> **[0:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=52)** In Defender for Cloud, navigate to the environment settings tab and open the subscription for which you want to disable the recommendation.
>
> **[1:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=63)** Go to the security policy section.
>
> **[1:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=65)** You can disable a recommendation from default initiative, industry & regulatory standards, and your custom initiatives.
>
> **[1:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=76)** We will see how to disable a recommendation under default initiative.
>
> **[1:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=81)** Open the default initiative.
>
> **[1:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=85)** From these three dots, click "Edit assignment".
>
> **[1:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=89)** Navigate to the parameters section and show all the initiatives.
>
> **[1:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=95)** I have unchecked "Only show parameters that need input".
>
> **[1:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=101)** This will give us a list of all the parameters available.
>
> **[1:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=105)** Now, you can go and disable the recommendation that is not required.
>
> **[1:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=111)** Click on disable, review and save, and click save.
>
> **[1:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=117)** "Your policy initiative has been updated successfully."
>
> **[2:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=121)** That means you have disabled the recommendation from one of the default initiatives.
>
> **[2:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=127)** Again, in industry & regulatory standards, you can simply disable a recommendation by clicking on disable.
>
> **[2:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=135)** A new window pops up, where you can select if you want to disable or not, the recommendation.
>
> **[2:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=142)** Click yes, and you get the notification that the assignment has been disabled.
>
> **[2:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=151)** Disabling a recommendation could come in handy for you and your organization.
>
> **[2:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/disable-a-recommendation?u=76281980&t=157)** It is important to note that you need to have a security admin role for disabling a recommendation.

> [!info]- Semantic Content
>
> **UI Navigation:** navigate to (3), open the (2), go to (1), click on (1)
> **Code Keywords:** let (1)
> **Tools:** azure portal (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - disabling (1)

#### Automate recommendation responses using Workflow Automation
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=0)** - Security programs involve notifying relevant stakeholders about the security incidents that show up.
>
> **[0:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=7)** Security experts recommend automating the alert remediation process, as automation reduces additional overheads.
>
> **[0:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=16)** Further, when done correctly automation improves your organization's security posture by ensuring consistent and well-timed response to remediate security alerts.
>
> **[0:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=29)** Microsoft Defender for Cloud provides a workflow automation feature.
>
> **[0:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=34)** This feature triggers a Logic App, which comprises a series of pre-defined steps that run automatically when the trigger conditions are met.
>
> **[0:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=45)** From Defender for Cloud side bar, select workflow automation.
>
> **[0:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=50)** This page allows you to create a new automation rule.
>
> **[0:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=53)** Additionally, you can enable or disable an existing rule.
>
> **[0:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=59)** Clicking on add workflow automation option opens a new page.
>
> **[1:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=65)** Here, you can enter a name and a description.
>
> **[1:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=70)** Choose your desired subscription and the resource group where you want to apply the automation.
>
> **[1:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=79)** Now, you see a set of triggered conditions.
>
> **[1:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=82)** Choose the trigger conditions that will automatically trigger the configured action.
>
> **[1:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=89)** Defend for Cloud data type gives you an option to select either a security alert, recommendation, or regulatory compliance standards.
>
> **[1:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=99)** I'll choose security alerts. Alert name should contain.
>
> **[1:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=104)** In my case, I'm choosing malicious.
>
> **[1:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=107)** Choose the severity types.
>
> **[1:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=109)** I'm keeping all severities as selected.
>
> **[1:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=114)** Now, the Logic App should be triggered.
>
> **[1:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=116)** Here, we will go to the Logic Apps page and create a fresh Logic App.
>
> **[2:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=122)** Click on add.
>
> **[2:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=125)** The Logic App page is now open.
>
> **[2:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=128)** Choose the resource group. Give a name to your Logic App.
>
> **[2:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=134)** Choose the published method, either as workflow or the docker container.
>
> **[2:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=138)** I'll keep it as workflow.
>
> **[2:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=140)** Select the region where you want to publish your Logic App.
>
> **[2:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=144)** I'll choose East U.S.
>
> **[2:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=147)** The plant type can be either consumption or standard.
>
> **[2:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=152)** Go to the hosting.
>
> **[2:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=154)** I'll keep everything as default.
>
> **[2:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=158)** Under the monitoring section also, I'll enable the application insight and keep things as default.
>
> **[2:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=165)** Finally, click review plus create.
>
> **[2:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=170)** This page opens a summary of the options that you have chosen while creating the Logic App.
>
> **[2:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=176)** Once the validation passes, click create.
>
> **[3:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=181)** Your Logic App deployment has been initialized.
>
> **[3:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=185)** It'll take some time to create the Logic App.
>
> **[3:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=189)** You see the deployment is in progress.
>
> **[3:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=194)** After about four minutes, the deployment has been completed successfully.
>
> **[3:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=199)** Going forward, whenever you receive any security alert that contains the keyword malicious you shall receive an automated email in your Outlook as per the design of a Logic App also.
>
> **[3:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=215)** When you open the workflow automation, you see the workflow automation has been enabled.
>
> **[3:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=223)** Here you have learned about creating a Logic App, and automating their execution as needed.
>
> **[3:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/automate-recommendation-responses-using-workflow-automation?u=76281980&t=229)** With this, we complete the recommendation section of Microsoft Defender for Cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** default. (2), case, (1), finally, (1), this, (1)
> **UI Navigation:** go to (2), click on (1), select the (1), open the (1)
> **CLI Commands:** docker (1)
> **Speakers:** - security (1)


### 3. 2. Cloud Security

#### Working with security alerts
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=0)** - [Instructor] Investigate and respond to security alerts.
>
> **[0:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=4)** Alerts are the notifications that Defender for Cloud generates when it detects threats on your resources.
>
> **[0:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=12)** Defender for Cloud prioritizes the list of alerts, along with the information needed for you to quickly investigate the problem.
>
> **[0:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=21)** It also provides recommendations for how you can remediate an attack.
>
> **[0:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=27)** Microsoft Defender for Cloud provides a unified view for all security alerts.
>
> **[0:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=33)** It continuously analyzes your hybrid cloud workloads using advanced analytics and threat intelligence.
>
> **[0:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=40)** You can also integrate alerts from other security products and services into Defender for Cloud.
>
> **[0:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=47)** Once an alert is raised, swift action is needed to investigate and remediate the potential security issues.
>
> **[0:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=56)** Microsoft security researchers are constantly on the lookout for threats.
>
> **[1:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=62)** The wide-reaching and diverse collection of data sets enables them to discover new attack patterns and trends across their on-premises, consumer, and enterprise products, as well as their online services.
>
> **[1:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=78)** As a result, Defender for Cloud can rapidly update its detection algorithms as attackers release new and increasingly sophisticated exploits.
>
> **[1:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=90)** Let's review alerts within Defender for Cloud now.
>
> **[1:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=94)** Go to the Security alerts under Microsoft Defender for Cloud.
>
> **[1:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=99)** The Security alerts page allows you to review the active security alerts and the affected resources.
>
> **[1:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=107)** Using this information, you can decide which alert to be investigated first.
>
> **[1:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=113)** It is advised to prioritize alerts based on severity while triaging them.
>
> **[1:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=119)** Active alerts by severity tab displays total alerts segregated by the severity.
>
> **[2:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=126)** Example, Medium and Low in our case.
>
> **[2:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=130)** We can search the alert by its ID, title, or affected resources in this box.
>
> **[2:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=138)** Example, I just typed myvm1 and all the alerts related to this resource popped up on the screen.
>
> **[2:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=148)** There is a Filter option where you can filter your results by Time, Alert name, Affected resources, Resource type, ATT&CK and tactics, Data sensitivity classifications, Data sensitivity labels, and Subscription.
>
> **[2:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=167)** Now, let's investigate a security alert.
>
> **[2:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=171)** Click on the check box next to the alert, which you wish to investigate.
>
> **[2:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=177)** As soon as you click on the alert, a new page opens up displaying the details about the alert.
>
> **[3:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=184)** Click on the View full details button.
>
> **[3:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=187)** A new window opens up.
>
> **[3:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=189)** Left pane shows alert Severity, Status, and Activity time.
>
> **[3:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=197)** It also gives a detailed description about the alert that explains the precise activity that was detected.
>
> **[3:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=205)** Further, a list of affected resources and the MITRE tactics matrix is available.
>
> **[3:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=214)** Towards the right is the Alerts details tab.
>
> **[3:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=217)** That gives detailed information, which can help you to investigate the suspicious activity.
>
> **[3:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=224)** You can find the Account, Azure resource, the Cloud adoption and the IP, then there is a Take Actions button.
>
> **[3:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=235)** After you have investigated a security alert and understood its scope, you can respond to the alert by clicking the Take action tab.
>
> **[4:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=245)** This tab is further categorized into five options.
>
> **[4:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=249)** Firstly, Mitigate the threat.
>
> **[4:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=252)** Mitigate the threat section provides manual investigation steps that are to be followed to mitigate the issue.
>
> **[4:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=260)** You see a View all hyperlink.
>
> **[4:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=263)** Clicking on this View all button provides a list of all the alerts related to this affected resource.
>
> **[4:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=276)** Prevent future attacks section provides recommendations which can be used to prevent future attacks by reducing the attack surface, then you have the option to Trigger automated responses.
>
> **[4:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=290)** This section makes use of logic apps where you can code your automation to mitigate the alerts.
>
> **[4:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=299)** Suppress similar alert section provides the option to suppress future alerts with similar characteristics if the alert isn't relevant to your organization.
>
> **[5:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=310)** Lastly, there is an option to Configure email notification settings.
>
> **[5:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=315)** You can enable the email notification settings and configure email alerts for specific email IDs as per your requirement.
>
> **[5:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=325)** Now, let's look at this vulnerability alert.
>
> **[5:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=330)** It gives us an option that machines should have a vulnerability assessment solution, and then there is an option to fix this recommendation.
>
> **[5:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=339)** We click on the Fix, choose the Option to deploy the integrated vulnerability scanner powered by Qualys and click Proceed.
>
> **[5:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=351)** Click on fix one Recommendation.
>
> **[5:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=356)** It did fail here because we already remediated this recommendation a few minutes ago.
>
> **[6:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=364)** Once you are done with the investigation and completed the responses, you can change the status of alert from Active to Dismissed.
>
> **[6:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=377)** Click on the Dismissed option and select OK.
>
> **[6:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=381)** The status of alert has been successfully updated as dismissed.
>
> **[6:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/working-with-security-alerts?u=76281980&t=386)** Lastly, it is important to note that you must have Defender for Cloud's enhanced security features enabled to step through the features covered in this section.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), go to (1)
> **Code Keywords:** let (3), case. (1), type, (1)
> **Definitions:** is a  (2), is an  (2)
> **Env Vars:** att (1), mitre (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Deep dive into inventory
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=0)** - The asset inventory page provides a single pane for viewing the security posture of the resources connected to Microsoft Defender for Cloud.
>
> **[0:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=9)** Defender for Cloud periodically analyzes the security state of resources connected to your subscription for identifying potential security vulnerabilities.
>
> **[0:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=20)** It then provides you with the recommendations on their remediation.
>
> **[0:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=24)** When any resource has outstanding recommendations, they'll appear in the inventory.
>
> **[0:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=30)** Let's move to the portal and learn more about Microsoft Defender for Cloud inventory.
>
> **[0:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=37)** From Microsoft Defender for Cloud pane navigate to the inventory section.
>
> **[0:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=43)** Here you see a list of summaries containing total resources.
>
> **[0:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=47)** This section enlists the total number of resources connected to Defender for Cloud.
>
> **[0:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=53)** Unhealthy resources.
>
> **[0:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=55)** This section displays total number of resources connected to Defender for Cloud with active security recommendations.
>
> **[1:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=64)** Unmonitored resources.
>
> **[1:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=66)** This section comprises of resources with agent monitoring issues.
>
> **[1:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=71)** They have log analytics agent deployed, but the agent isn't sending data or has other health issues.
>
> **[1:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=78)** In our case, we do not have any unmonitored resources.
>
> **[1:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=83)** Then comes the unregistered subscriptions.
>
> **[1:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=86)** This section consists of subscriptions in the selected scope that haven't yet been connected to Microsoft Defender for Cloud.
>
> **[1:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=96)** As you can see, inventory section provides various filters.
>
> **[1:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=100)** Firstly, you can filter inventory by resource name.
>
> **[1:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=105)** Let's start typing the name of resource.
>
> **[1:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=112)** Here you see the results of resources that have myvm 1 in their name.
>
> **[1:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=119)** Then there are other filters that enable users to narrow down the results as per their requirements.
>
> **[2:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=126)** Under the ad filters, you will see there are multiple filters that are still available.
>
> **[2:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=134)** Let's filter our inventory based on the monitoring agent status.
>
> **[2:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=139)** Currently, we are having the inventory where monitoring status is either blank or installed.
>
> **[2:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=146)** We will filter out the resources where monitoring status is installed.
>
> **[2:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=152)** Click OK.
>
> **[2:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=155)** Our list gets filtered with the number of resources where monitoring agent status is installed.
>
> **[2:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=161)** Now, clicking on any of the filtered resources redirects us to the resource health page.
>
> **[2:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=169)** This page consists of installed agent status, active recommendations, and the number of active alerts.
>
> **[2:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=178)** The right pane, it lists all the 37 recommendations segregated by severity.
>
> **[3:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=184)** High, medium, and low.
>
> **[3:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=188)** Notice that the security recommendations on asset inventory page are the same as those on the recommendations page.
>
> **[3:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=196)** But here, they are shown according to the affected resource.
>
> **[3:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/deep-dive-into-inventory?u=76281980&t=201)** This completes the inventory section under Microsoft Defender for Cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - the (1)

#### Onboard non-Azure servers to Defender for Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=0)** - [Instructor] Onboard Servers to Defender for Cloud.
>
> **[0:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=4)** Defender for Cloud can monitor the security posture of your non-Azure computers, but first you need to connect them to Azure.
>
> **[0:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=13)** You can connect your non-Azure computers in any of the following ways.
>
> **[0:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=17)** Using Azure Arc-enabled servers or from Defender for Cloud's page in the Azure portal either from the getting started page or the inventory page.
>
> **[0:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=28)** We can onboard both Azure as well as non-Azure servers to Defender for Cloud using a few easy steps.
>
> **[0:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=37)** Let's look into onboarding one of the non-Azure servers into Defender for Cloud, navigate to the inventory tab and click to add non-Azure servers, here either you can create a new workspace or work with an existing workspace.
>
> **[0:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=56)** I have a workspace already created, so I'll use one of my existing workspaces, note that you need to upgrade your Defender plan so that the non-Azure servers can be added successfully.
>
> **[1:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=69)** I'll click on upgrade and the Defender plan has been upgraded successfully, click on add servers, currently I already have one AWS server connected to this log analytics workspace.
>
> **[1:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=86)** Now, I have another AWS server that has been (indistinct) which I will log into.
>
> **[1:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=94)** So I've already logged into my AWS server and installed the MMA agent, you get a download link to this agent on your on onboard servers page under the Azure portal.
>
> **[1:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=108)** Click on next, agree, select connect the agent to Azure log analytics workspace, select next, copy the workspace ID and primary key from your Defender page, for me, I'm selecting the commercial Cloud, in case you were working with US government, China, or any other Cloud select AC for your requirements.
>
> **[2:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=137)** Click next, use Microsoft update, it's a recommended option, select that button, click next and install, the installation takes about a minute.
>
> **[2:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=151)** Once the installation has been completed, click on the finish button.
>
> **[2:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=156)** To verify that the agent has been installed successfully or VM is communicating to the Azure resource, go to the control panel.
>
> **[2:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=170)** I'll choose large icons and here you see Microsoft monitoring agent.
>
> **[2:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=178)** So against Azure log analytics OMS you see the status is green.
>
> **[3:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=184)** That is its successfully connected to the Microsoft OMS suite.
>
> **[3:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=190)** Now, after some time you will be able to see two Windows computers connected to my log analytics workspace.
>
> **[3:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=198)** You can also verify the status from the Azure portal, log in to Azure log analytics workspace, open AWS integration workspace, the workspace that was created initially, go to the agent's management section and you will see it displays two Windows computers connected.
>
> **[3:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=221)** Previously, we just had one AWS server connected to our Azure log analytics workspace.
>
> **[3:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=230)** Also under our onboard service in the inventory section on the AWS log integration workspace we see two VMs now, in case you are familiar with command lines, you can use the following command to install the agent on your servers.
>
> **[4:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=250)** This quietly installs the log analytics agent into your server.
>
> **[4:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/onboard-non-azure-servers-to-defender-for-cloud?u=76281980&t=255)** Once the installation has been complete you can verify the agent installation by running the below commands and the onboarder device will appear in the portal after 10 minutes from the time of successful configuration in your log analytics workspace.

> [!info]- Semantic Content
>
> **Env Vars:** aws (6), oms (2), mma (1)
> **UI Navigation:** click on (4), go to (2), navigate to (1)
> **CLI Commands:** aws (6)
> **Tools:** azure portal (3)
> **Prerequisites:** install (2), getting started (1)
> **Code Keywords:** let (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)

#### Learning about workbooks
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=0)** - Azure monitor workbooks, provide a flexible canvas for data analysis and creation of rich visual reports.
>
> **[0:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=7)** Within the Azure portal, they allow you to tap into multiple data sources from across Azure and combine them into unified interactive experiences.
>
> **[0:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=19)** Real power of workbooks lies in their ability to combine data from disparate sources within a single report.
>
> **[0:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=28)** Azure provides five types of inbuilt workbooks.
>
> **[0:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=31)** Namely secure score over time, compliance over time, vulnerability assessment findings, active alerts, and the system updates.
>
> **[0:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=44)** The secure score over time workbook is used to track your subscriptions score and changes to recommendations for your resources.
>
> **[0:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=54)** Compliance over time workbook is used to build the status of subscriptions compliance with the regulatory or industry standards selected by you.
>
> **[1:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=66)** The vulnerability assessment findings workbook is based on the vulnerability findings in your virtual machines.
>
> **[1:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=73)** It allows us to view findings of vulnerability scans of our Azure resources.
>
> **[1:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=79)** Active alerts workbook allows us to view active alerts by severity, type, tag, M I T R E attack tactics and location.
>
> **[1:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=92)** The system updates workbook is based on system update recommendations that should be installed on your machines.
>
> **[1:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=99)** It helps us in identifying machines with outstanding updates.
>
> **[1:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=105)** Now let's navigate to the Azure portal and learn more about the workbooks.
>
> **[1:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=112)** Click on the workbooks tab under the general section of Microsoft Defender for Cloud.
>
> **[1:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=118)** Here, you'll see all the workbooks that we discussed previously.
>
> **[2:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=123)** Including secure score over time, compliance over time, vulnerability assessment findings, active alerts, system updates.
>
> **[2:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=133)** We also see three workbooks under community, that is log 4 vulnerability, coverage and ransomware dashboard.
>
> **[2:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=143)** Let's learn how to use secure score over time.
>
> **[2:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=147)** To configure secure score over time, click on this workbook.
>
> **[2:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=152)** You need to select a workspace to configure the continuous export.
>
> **[2:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=157)** To export data into a log analytics workspace.
>
> **[2:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=160)** By following the steps as being shown.
>
> **[2:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=163)** Navigate to the Environment settings tab under the management and select the specific subscription for which you want to configure the data export.
>
> **[2:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=176)** From the sidebar of the settings page, Select continuous export option.
>
> **[3:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=181)** Now you get two options.
>
> **[3:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=185)** Either you can export the data to the event hubs or log analytics workspace.
>
> **[3:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=191)** We will be selecting a log analytics workspace here.
>
> **[3:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=196)** Choose the export enabled toggle to on.
>
> **[3:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=200)** We'll select the secure score, from the dropdown we'll select the overall score and the control score.
>
> **[3:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=209)** Under the controls, we'll select all the controls that are required for selecting the secure score.
>
> **[3:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=218)** Under export frequency, choose both streaming updates and snapshots.
>
> **[3:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=225)** Choose a resource group for export configuration.
>
> **[3:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=229)** In my case, I will choose the automation resource group.
>
> **[3:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=233)** The export target subscription would be the subscription where you want to export your data.
>
> **[4:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=240)** The targets workspace will be my default workspace that has been created by default.
>
> **[4:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=247)** Now, once the configurations are done, I will click on save.
>
> **[4:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=252)** Note that you would have to wait for at least one week of the first snapshot to be exported, as the data would be collected from multiple export targets.
>
> **[4:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=263)** Coming back to the workbooks, let's have a look at the active alerts workbook.
>
> **[4:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=269)** As you can see this workbook comprises of alert severities, categorized by their severity, the name of the resource groups where active alerts are present and the tags.
>
> **[4:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=281)** On scrolling down, you see the MI T R E attack tactics for the resources and active alerts are categorized by severity ranging from low and medium.
>
> **[4:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=294)** You have an option to edit this workbook.
>
> **[4:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=297)** Clicking the edit, gives you the facility to edit all the parameters in this workbook.
>
> **[5:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=306)** We'll select edit.
>
> **[5:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=307)** We can add specific parameters of our choice.
>
> **[5:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=312)** Once you're done with the editing, you can select the done editing button, and save the changes.
>
> **[5:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=325)** The notification appears stating that the items were clearly created successfully.
>
> **[5:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=331)** Under the notification tab, you will see the item was created successfully.
>
> **[5:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-about-workbooks?u=76281980&t=336)** This concludes our workbook section of Microsoft Defender for Cloud.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (4), navigate to (2), click on (2), toggle (1), dropdown (1)
> **Code Keywords:** let (3), export. (2), type, (1), case, (1), default. (1)
> **Prerequisites:** configure (3)
> **Tools:** azure portal (2)
> **Cross-References:** we discussed (1)
> **Warnings:** note that (1)
> **Speakers:** - azure (1)

#### Learning all about security policy
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=0)** - [Instructor] What is a security policy?
>
> **[0:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=3)** An Azure Policy definition is a rule about specific security conditions that you want controlled.
>
> **[0:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=10)** Built-in definitions include things like controlling what type of resources can be deployed or enforced.
>
> **[0:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=18)** You can also create your own custom policy definitions.
>
> **[0:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=22)** To implement these policy definitions, whether built-in or custom, you will need to assign them.
>
> **[0:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=29)** You can assign any of these policies through the Azure Portal, PowerShell or Azure CLI.
>
> **[0:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=36)** Policies can be disabled or enabled as per your requirements.
>
> **[0:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=42)** There are different types of policies in Azure: Defender for Cloud mainly uses audit policies that checks specific conditions and configurations and then reports on compliance.
>
> **[0:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=56)** There are also enforce policies that can be used to apply security settings.
>
> **[1:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=63)** Now, what is a security initiative?
>
> **[1:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=66)** An Azure Policy initiative is a collection of Azure Policy definitions or rules that are grouped together towards achieving a specific goal or purpose.
>
> **[1:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=79)** These initiatives simplify management of your policies by logically grouping them into a single item.
>
> **[1:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=87)** A security initiative defines the desired configuration of your workloads and helps ensure they are complying with the security requirements of your company or the regulators.
>
> **[1:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=99)** We will now learn about the functionality of a security policy.
>
> **[1:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=105)** Select Environment Settings Options under the Management tab of Microsoft Defender for Cloud.
>
> **[1:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=111)** Select the subscription where you want to see your policies.
>
> **[2:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=121)** Clicking on the subscription where you want to set policies will take us to the security policy page.
>
> **[2:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=128)** This page displays the security center default initiative, industry and regulatory standards and your custom initiatives.
>
> **[2:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=137)** Let's learn about each of them one by one.
>
> **[2:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=141)** Default initiative.
>
> **[2:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=143)** As the name suggests, it is the default set of policies monitored by Microsoft Defender for Cloud.
>
> **[2:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=151)** The default initiative enabled on your subscription generates the security recommendations in the recommendation page.
>
> **[2:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=160)** It was automatically assigned as a part of onboarding to the security center.
>
> **[2:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=166)** The default assignment contains only audit policies.
>
> **[2:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=172)** Industry and regulatory standards comprise global security standards.
>
> **[2:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=177)** Pick the standard that you want to add to your regulatory compliance dashboard and then assign it to your subscription.
>
> **[3:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=186)** The industry and regulatory standards comprise global security standards.
>
> **[3:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=192)** Pick a standard that you want to add to your regulatory compliance dashboard and then assign it to the subscription.
>
> **[3:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=200)** The Add More Standards button redirects you to an exhaustive list of regulatory standards available in Azure Defender for Cloud.
>
> **[3:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=210)** Simply click the Add button to a specific subscription that you want to add to your regulatory compliance dashboard.
>
> **[3:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=218)** Choose the scope as subscription.
>
> **[3:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=220)** Optionally, you can scope the standard to a resource group.
>
> **[3:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=227)** You can add exclusions, if any, the name of the assignment, give a description; this is an ISO 2071 standard.
>
> **[4:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=240)** Policy enforcement is selected as enabled, assigned by the Azure instructor.
>
> **[4:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=246)** You can add your name, click on Review Plus Create and click Create.
>
> **[4:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=255)** You'll get a notification that the policy has been added successfully.
>
> **[4:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=261)** Then last comes your custom initiative.
>
> **[4:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=265)** A custom initiative definition is a collection of policy definitions that are tailored towards achieving a singular, overarching goal.
>
> **[4:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=275)** Initiative definitions simplify managing and assigning policy definitions by grouping them as a single, assignable object.
>
> **[4:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=285)** Let's learn how to add a custom initiative.
>
> **[4:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=289)** Click on Add a Custom Initiative button.
>
> **[4:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=293)** Click Create New to add a custom initiative.
>
> **[4:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=298)** Give a name to your custom initiative.
>
> **[5:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=300)** Here, we will be adding enable backup initiative.
>
> **[5:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=307)** From the Use Existing category, choose a backup policy.
>
> **[5:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=313)** Click Next.
>
> **[5:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=315)** Select the Add Policy Definitions.
>
> **[5:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=319)** A new page opens up.
>
> **[5:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=321)** We will choose "Azure backup should be enabled "for virtual machines."
>
> **[5:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=325)** This is a built-in Azure policy.
>
> **[5:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=328)** And click on Add.
>
> **[5:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=330)** Click Next.
>
> **[5:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=332)** You can further create controls specifying additional metadata.
>
> **[5:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=338)** I will be leaving this as default.
>
> **[5:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=341)** Click Next.
>
> **[5:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=343)** Add parameters if you want.
>
> **[5:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=347)** Click on Review Plus Create and finally, click Create.
>
> **[5:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=354)** The custom initiative has been saved successfully.
>
> **[5:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=358)** We have successfully added a custom initiative to our subscription.
>
> **[6:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=363)** So in this video, we learned about the three types of security initiatives and creating them, namely, default initiative, industry and regulatory standards and custom initiatives.
>
> **[6:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/learning-all-about-security-policy?u=76281980&t=377)** It is important to note that the policies' effect can be append, audit, audit if not exist, deny, deploy if not exist and disabled.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6), is an  (1)
> **UI Navigation:** click on (4), select the (2)
> **Code Keywords:** let (2), default. (1), finally, (1)
> **Env Vars:** cli (1), iso (1)
> **Tools:** azure portal (1), powershell (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Working with Security Center Recommendations

#### Secure Score: Access and track your secure score
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=0)** - [Tutor] Secure score is the central feature of Microsoft Defender for Cloud, which is used to measure the security posture of your subscription.
>
> **[0:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=8)** This feature continually assesses resources, subscriptions, and security issues related to your organization.
>
> **[0:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=17)** Rather than reacting or responding to security alerts, the secure score tool enables organizations to track and plan incremental improvements over a longer period of time.
>
> **[0:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=30)** All these findings are aggregated into a single score called overall secure score.
>
> **[0:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=36)** Higher the secure score, lower is the identified risk level for your subscription.
>
> **[0:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=43)** Microsoft secure score helps organizations report on the current state of their security posture, improve their security posture by providing discoverability, visibility, guidance, and control.
>
> **[0:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=58)** It also enables organizations to compare the benchmarks and establish key performance indicators also known as KPIs.
>
> **[1:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=68)** By implementing Microsoft secure score, organizations gain access to robust visualization of matrix and trends, integration with other Microsoft products, score comparison with similar organizations, and much more.
>
> **[1:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=86)** Let's look at the secure score feature for Microsoft Defender for Cloud on the Azure portal now.
>
> **[1:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=93)** Clicking on the security posture tab under Cloud security takes us to the secure score.
>
> **[1:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=101)** The secure score is shown as a percentage value which comprises of multiple recommendations, number of unhealthy resources, the subscription for which we are looking for the score, and the management groups.
>
> **[1:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=116)** This page gives us a percentage value of the secure score and also the count of unhealthy resources.
>
> **[2:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=125)** Clicking the view recommendation hyperlink takes us to a secure score recommendation page.
>
> **[2:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=132)** These recommendations directly affect your secure score.
>
> **[2:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=136)** They are grouped into security controls each representing a risk category.
>
> **[2:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=144)** It is important to note that only the built in recommendations are included in the secure score calculations.
>
> **[2:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=151)** Each recommendation includes instructions to help you remediate specific issues.
>
> **[2:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=158)** These recommendations are grouped into security controls.
>
> **[2:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=162)** Your secure score only improves when you remediate all the recommendations for a single resource within a control.
>
> **[2:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=171)** Here, you see we are getting the recommendations for both AWS as well as Azure resources.
>
> **[2:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=177)** So we will quickly go to "Add filters" and filter the list by only Azure subscription.
>
> **[3:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=185)** So we'll select Azure over here.
>
> **[3:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=189)** Click "OK".
>
> **[3:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=191)** This sorts of a list by the available Azure recommendations.
>
> **[3:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=196)** You can see that the recommendation page clearly shows the contribution of each security control towards overall secure score.
>
> **[3:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=205)** For instance, we will take the secured management ports control.
>
> **[3:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=210)** The maximum score for this recommendation is eight.
>
> **[3:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=214)** Current score for our subscription is five.
>
> **[3:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=217)** If we remediate all the recommendations under this recommendation, we will be increasing the score by 5%.
>
> **[3:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=228)** So you see, the first two recommendations are already completed and in green, so no action is required for these.
>
> **[3:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=237)** Third recommendation shows unhealthy.
>
> **[4:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=241)** Let's look into this.
>
> **[4:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=244)** Management port for version machines should be protected with just-in-time network control.
>
> **[4:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=250)** We click on the recommendation, select the resource where recommendation needs to be applied, and click on fix.
>
> **[4:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=259)** It shows the ports that are recommended and would be added.
>
> **[4:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=263)** We simply click save.
>
> **[4:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=266)** You see the notification.
>
> **[4:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=268)** Just-in-time VM access configuration has already started.
>
> **[4:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=273)** We can check the activity logs for additional status.
>
> **[4:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=278)** The implementation will take around five to seven minutes.
>
> **[4:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=283)** While the fix is being implemented in the background, let's see how the secure score is calculated.
>
> **[4:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=290)** The maximum score linked to this recommendation is eight.
>
> **[4:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=295)** The number of affected version machines is three.
>
> **[4:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=298)** If you see, there are three resources.
>
> **[5:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=301)** And the current score for our recommendation is five.
>
> **[5:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=307)** Secure score is calculated by the maximum score divided by healthy plus unhealthy number of resources into the number of healthy resources.
>
> **[5:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=319)** In our case, it would be three divided by eight.
>
> **[5:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=323)** That comes out to be 0.375.
>
> **[5:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-score-access-and-track-your-secure-score?u=76281980&t=327)** The main point to remember here is that we need to work on all the recommendations for a single resource in order to remediate the security recommendations and improve the overall security score.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1), protected (1), case, (1)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Versions:** 0.375 (1)
> **Tools:** azure portal (1)
> **Definitions:** known as (1)
> **Analogies:** for instance (1)

#### Microsoft Defender regulatory compliance
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=0)** - [Instructor] Microsoft defender's regulatory compliance.
>
> **[0:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=4)** The regulatory compliance dashboard represents industry standards, regulatory standards, and benchmarks.
>
> **[0:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=11)** It displays your compliance posture, relative to the standards and regulations that are important to you.
>
> **[0:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=19)** Each standard is an initiative defined in Azure policy.
>
> **[0:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=23)** This dashboard provides insights into your compliance posture based on how your meeting specific compliance requirements.
>
> **[0:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=32)** Let's jump into the Defender for Cloud, to learn how to add regulatory standards to our dashboard.
>
> **[0:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=41)** From Defender for Cloud's menu, select regulatory compliance.
>
> **[0:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=46)** Here, you can see the compliance standards assigned to the currently selected subscriptions.
>
> **[0:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=52)** We have the lowest compliance regulatory standards.
>
> **[0:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=57)** Click on show all hyperlink.
>
> **[1:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=60)** It displays the current compliance status of the standards selected in your subscription.
>
> **[1:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=69)** Then comes the audit reports.
>
> **[1:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=71)** The audit reports gives the entire data on the latest privacy, security, and compliance-related information.
>
> **[1:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=79)** Clicking the open button, opens the detailed audit report page.
>
> **[1:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=84)** This page enables you to download the latest reports of your selected regulatory standard.
>
> **[1:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=90)** You have the download link here.
>
> **[1:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=95)** The next insight gives you the link to fetch detail information about Azure security benchmark.
>
> **[1:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=102)** The compliance report initiative, lets you download a PDF report with your compliance status for one of the supported standards.
>
> **[1:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=111)** You can simply click on the "Download now link."
>
> **[1:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=115)** You can choose one of the standards as per your requirement, and choose the format as either CSV or PDF, whatever is comfortable with you.
>
> **[2:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=124)** Click on the download button.
>
> **[2:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=128)** The next insight is the regulatory compliance.
>
> **[2:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=131)** View your compliance posture relative to the standards and regulations that are important to you.
>
> **[2:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=137)** Immediate assessments to watch your compliance posture improve.
>
> **[2:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=142)** You can learn more by clicking the "Learn more link," it'll redirect you to a new page.
>
> **[2:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=148)** On scrolling down the page, you'll find a list of standards.
>
> **[2:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=153)** Under each applicable compliance control, is a set of assessments run by Defender for Cloud that are associated with that control.
>
> **[2:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=162)** Let's select PCI DSS.
>
> **[2:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=165)** Now, if the standards are all green, it means those assessments are currently passing.
>
> **[2:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=171)** Well, this does not ensure you are fully compliant with that control.
>
> **[2:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=177)** Furthermore, not all controls for any particular regulation are covered by Defender for Cloud assessments.
>
> **[3:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=184)** And therefore, this report is only a partial view of your overall compliance status.
>
> **[3:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=191)** Microsoft tracks the regulatory standards and automatically improves its coverage in some of the packages over time.
>
> **[3:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=199)** For example, here you see ISO 27001, which is now being improved.
>
> **[3:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=205)** You can onboard the new ISO standard to your dashboard by simply clicking the "Onboard now link."
>
> **[3:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=212)** It'll take you through the environment settings where you can choose your subscription, go to the security policy, and onboard the newly created link.
>
> **[3:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=226)** Here you also have the option to add more standards as we discussed in the Security Policy chapter.
>
> **[3:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/microsoft-defender-regulatory-compliance?u=76281980&t=234)** Note that Microsoft tracks the regulatory standards and automatically improves its coverage in some of the packages over time.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (2), iso (2), csv (1), pci (1), dss (1)
> **UI Navigation:** click on (3), go to (1)
> **Code Keywords:** let (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Cross-References:** we discussed (1)
> **Exercise Files:** download the (1)
> **Analogies:** for example (1)

#### Configure autoprovisioning
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=0)** - [Tutor] Configure auto-provisioning for agents and extensions.
>
> **[0:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=5)** Microsoft Defender for Cloud collect security data and events from Azure Virtual Machines, Virtual Machine Skill Sets, IAAs containers, and non Azure servers including on-premises machines to monitor the security vulnerabilities and threats.
>
> **[0:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=24)** Data is collected using the Log Analytics agent which reads various security related configurations and event logs from the machine and copies data to your workspace for analysis.
>
> **[0:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=38)** Example, Operating system type and version, Windows event logs, running processes, machine name, IP addresses, and logged-in user, et cetera.
>
> **[0:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=52)** The data is also collected using security extensions such as Azure policy add on for Kubernetes which can provide Cloud data to Microsoft Defender regarding specialized resource types.
>
> **[1:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=65)** Now, what is auto-provisioning?
>
> **[1:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=68)** Auto-provisioning reduces management overhead by installing all required agents and extensions on the existing and new machines to ensure faster security coverage for all supported resources.
>
> **[1:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=82)** How does auto-provisioning work?
>
> **[1:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=85)** Defender for Cloud's auto-provisioning settings has a toggle for each type of supported extension.
>
> **[1:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=91)** When you enable auto-provisioning for an extension, you can assign the appropriate DeployIfNotExist policy to ensure that the extension is provisioned on all the existing and future resources of that type.
>
> **[1:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=106)** When you enable an extension, it will be installed on any new or existing resource using the security policy.
>
> **[1:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=115)** Let's jump into the Azure portal and learn how to enable auto-provisioning for the Log Analytics agents and extensions.
>
> **[2:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=126)** Navigate to the environment settings tab under management.
>
> **[2:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=130)** Now select the relevant subscription where you want to enable auto-provisioning settings.
>
> **[2:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=137)** We see auto-provisioning towards the left pane.
>
> **[2:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=141)** On clicking auto provisioning, we see different types of extensions which are available here.
>
> **[2:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=149)** Let's enable the Log Analytics agent for Azure VM.
>
> **[2:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=153)** Currently, the status for Log Analytics agent for Azure VM is turned off.
>
> **[2:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=159)** We can simply click the toggle button to turn on.
>
> **[2:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=164)** As soon as we hit the toggle button to enable log analytics agent extension, Azure will ask you whether you want to connect Azure VM to the default workspace or you need to create an existing workspace.
>
> **[3:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=181)** We shall keep the default workspace as our choice and select what type of additional raw data we want to store ranging from all events, common, minimal, or none.
>
> **[3:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=200)** Let's select all events and click on apply.
>
> **[3:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=205)** Click the save button.
>
> **[3:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=207)** A message pops up stating "Azure provisioning extension has been successfully saved."
>
> **[3:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=216)** Important points, Defender for Cloud collect security data and events from your resources and services to help you detect, prevent, and respond to threats.
>
> **[3:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=229)** When you enable an extension, it will be installed on any new or existing resource.
>
> **[3:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=236)** This is done by assigning the security policy.
>
> **[4:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-autoprovisioning?u=76281980&t=240)** Be aware that if a workspace needs to be provisioned, the agent installation might take up to 25 minutes for changes to reflect.

> [!info]- Semantic Content
>
> **UI Navigation:** toggle (3), navigate to (1), select the (1), click on (1)
> **Code Keywords:** let (3), type. (1)
> **Tools:** azure portal (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [tutor] (1)

#### Set up email notification
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=0)** - Setting up email notifications.
>
> **[0:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=3)** Security alerts need to reach the right people in your organization.
>
> **[0:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=7)** By default, Defender for Cloud subscription owners get an email whenever a high severity alert is triggered.
>
> **[0:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=15)** Defender for Cloud allows us to define our own preferences for sending out email notifications.
>
> **[0:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=22)** We can choose who should be notified and also what they should be notified about.
>
> **[0:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=29)** To avoid alert fatigue, Defender for Cloud limits the volume of outgoing emails.
>
> **[0:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=35)** For each subscription, you can send a maximum of one email per six hours or four emails per day for high severity alert, a maximum of one email per 12 hours or two emails per day for medium severity alerts, and a maximum of one email per 24 hours for low severity alerts.
>
> **[0:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=57)** Now, we will walk through the steps for setting email notifications for whatever subscriptions.
>
> **[1:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=65)** Under Microsoft Defender for Cloud, navigate to the Environment settings tab.
>
> **[1:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=72)** Click on the subscription where you want to set your email notification.
>
> **[1:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=78)** Select the email notification pane.
>
> **[1:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=81)** The role has been set to Owner by default.
>
> **[1:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=85)** You also can choose the role as AccountAdmin, ServiceAdmin, or Contributor, or even all.
>
> **[1:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=94)** Add additional email addresses separated by comma.
>
> **[1:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=99)** There is no limit to the number of email addresses that you can enter here.
>
> **[1:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=103)** You can put your team DL to receive notifications whenever a security alert gets triggered.
>
> **[1:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=110)** Additionally, you get an option to filter notifications based on the severity; high, medium, or low as per your preference.
>
> **[2:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=122)** Let's keep it as high for now.
>
> **[2:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=125)** Once you're through with the settings, click on the Save button.
>
> **[2:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=130)** You will see a notification that the email settings have been saved successfully.
>
> **[2:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=136)** These key settings will notify you about any alerts triggered so that you can take timely actions to remediate the same.
>
> **[2:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/set-up-email-notification?u=76281980&t=144)** Using email notification settings, one of our customers has managed to bring down security risks by taking timely actions to mitigate the alerts.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), navigate to (1), select the (1)
> **Code Keywords:** default, (1), default. (1), let (1)
> **Speakers:** - setting (1)

#### Configure CI/CD with Defender for Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=0)** - [Instructor] Microsoft Defender for Endpoint protects your Windows and Linux machines whether they're hosted in Azure, hybrid clouds, or on premises.
>
> **[0:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=11)** Defender for Endpoint sensor collects a vast array of behavioral signals from your machines.
>
> **[0:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=18)** Additionally, it readily adapts to changing threats and provides actionable alerts.
>
> **[0:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=25)** Let's log into the portal and see how integrations are enabled.
>
> **[0:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=31)** from Defender for Cloud's menu, select environment settings, navigate to the subscription where you want to enable integration.
>
> **[0:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=42)** Towards the left, fourth option you will see as integration choose that option.
>
> **[0:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=47)** Now, to enable Defender for Cloud to integrate with other Microsoft security services, you need to allow services to access your data.
>
> **[0:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=56)** Hence you need to check both the check boxes, allow Microsoft Defender for Cloud apps to access my data, and allow Microsoft Defender for Endpoint to access my data.
>
> **[1:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=67)** Click on save.
>
> **[1:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=70)** The threat detection settings for the subscription have been saved successfully.
>
> **[1:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=75)** Let's look at the onboarding process.
>
> **[1:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=78)** Microsoft Defender for Cloud will automatically onboard your machines.
>
> **[1:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=84)** Onboarding might take up to 12 hours after the integration has been done successfully.
>
> **[1:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=90)** For new machines created after the integration has been enabled, onboarding takes up to an hour.
>
> **[1:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=98)** Defender for Cloud has come up with a new feature CI/CD vulnerability scanning.
>
> **[1:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=104)** Now to configure the CI/CD integration, you can simply click on this link and a new window pops up.
>
> **[1:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=112)** The subscription which you're working on, would be selected as default.
>
> **[1:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=117)** Select a region for the selected default workspace that is used to store your application insights.
>
> **[2:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=124)** Here, I'm selecting West Europe as my region.
>
> **[2:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=128)** Copy the authentication token and connection strings that are being displayed onto a clipboard and save these.
>
> **[2:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=136)** The authentication token and connection string will go into your (indistinct) workflow.
>
> **[2:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=142)** Once the scanning is completed the results get populated under the recommendation section.
>
> **[2:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=148)** The recommendation detailed tab includes the list of registries with vulnerable images.
>
> **[2:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=157)** CI/CD security integration is a highly useful feature which would scan your deployments at the pipeline entry gate itself.
>
> **[2:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=165)** Based on the recommendations, you can choose to push or roll back the code.
>
> **[2:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=171)** This feature is meant to save you from the hassles of reverting vulnerable code that might impact your entire development.
>
> **[3:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configure-ci-cd-with-defender-for-cloud?u=76281980&t=180)** It also saves you time and effort that will be used to mitigate a threat which was deployed by mistake in your environment.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (3)
> **Code Keywords:** let (2), default. (1)
> **UI Navigation:** click on (2), navigate to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Continuous export
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=0)** - [Woman] Microsoft Defender for Cloud generates detailed security alerts and recommendations.
>
> **[0:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=6)** These recommendations can be viewed and exported through different programmatic tools like Continuous export.
>
> **[0:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=14)** It allows users to customize what would be exported and where it would be saved.
>
> **[0:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=21)** These alerts can be sent to an Azure Event hub or to a specific Log Analytics workspace as per your requirements.
>
> **[0:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=31)** Exporting Defender for Cloud's data facilitates integration with third-party SIEM and Azure Data Explorer.
>
> **[0:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=41)** Even though the feature is called Continuous, there is an option to export weekly snapshots as well.
>
> **[0:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=49)** Let's walk through the steps for configuring Continuous export from Defender for Cloud.
>
> **[0:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=55)** Navigate to the environment setting tab under Defender for Cloud's main menu, select the subscription where you want the settings to be configured.
>
> **[1:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=68)** Under the settings, you see the option of Continuous export, select that option.
>
> **[1:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=76)** A new page opens up.
>
> **[1:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=78)** On this page, you see the export options.
>
> **[1:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=82)** There are different exported data types that are available.
>
> **[1:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=86)** You can choose security recommendations.
>
> **[1:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=89)** Under security recommendations, either you can select all recommendations or specific recommendations as for your requirements.
>
> **[1:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=97)** You can choose the severity of alert that needs to be exported.
>
> **[1:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=103)** Here I'm selecting all severities, include the secure score, security alerts and regulatory compliance.
>
> **[1:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=114)** Under export frequency, select the streaming updates checkbox and snapshots, which is still in preview.
>
> **[2:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=121)** Choose a resource group where you want to save your exported configurations.
>
> **[2:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=127)** I'll select automation as my resource group over here, and I'm configuring this settings for the Event hub.
>
> **[2:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=136)** Now you need to choose your Event hub namespace.
>
> **[2:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=139)** I already have created an Event hub namespace for me.
>
> **[2:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=143)** Choose the name of your Event hub and the name of the policy.
>
> **[2:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=148)** As you can see, I do not have any policy available under the Event hub.
>
> **[2:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=153)** I do have an option to create an Event hub policy.
>
> **[2:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=157)** I'll select the link, click here.
>
> **[2:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=161)** This link takes me to the shared access policy that I can add under my Event hub namespace.
>
> **[2:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=167)** Simply click on the add button, choose the name of policy.
>
> **[2:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=172)** I'll pick here send email and choose the send option under the Event hub, click on create.
>
> **[3:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=180)** Your policy has been created successfully.
>
> **[3:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=183)** So now you see, my newly created policy is showing up here.
>
> **[3:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=188)** Click on the policy.
>
> **[3:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=191)** Once you're through with the settings, click on the save button.
>
> **[3:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=196)** Manual onetime export for alerts and recommendations is also possible And can be done by opening the recommendations page or the security alert page.
>
> **[3:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=207)** Here I've opened the recommendations page.
>
> **[3:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=211)** I get the option to download the CSV report.
>
> **[3:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=216)** The CSV report has been downloaded successfully.
>
> **[3:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=219)** I can save it to my preferred location.
>
> **[3:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=223)** Some good to know information for everyone.
>
> **[3:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=226)** There is no cost for enabling continuous exports.
>
> **[3:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/continuous-export?u=76281980&t=229)** However costs might be incurred for ingestion and retention of data in your Log Analytics workspace, or the Event hubs depending on your configurations.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), select the (3), navigate to (1), checkbox (1)
> **Code Keywords:** export. (1), let (1), export, (1)
> **Env Vars:** csv (2), siem (1)
> **Definitions:** is called (1), is an  (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [woman] (1)


### 5. 4. Firewall Manager

#### Get started with Firewall Manager
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=0)** - [Instructor] The firewall manager is a cloud-based, fully managed network security service.
>
> **[0:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=6)** It provides central security policy and route management for all your Azure resources.
>
> **[0:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=13)** Azure Firewall Manager enables you to centralize management of multiple instances of Azure firewall.
>
> **[0:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=21)** It is a fully stateful firewall as a service with built-in high availability and unrestricted cloud scalability.
>
> **[0:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=30)** You can centrally create and enforce applications and network connectivity policies across subscriptions and virtual networks.
>
> **[0:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=40)** Azure firewall uses a static public IP address allowing outside firewalls to identify traffic originating from your version network.
>
> **[0:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=52)** Now let us discuss about some of the main Azure firewall features.
>
> **[0:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=57)** Firstly, the Central Azure firewall deployment and configuration.
>
> **[1:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=63)** With this feature, you can centrally deploy and configure multiple Azure firewall instances that span different Azure regions and subscriptions.
>
> **[1:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=74)** Built-in high availability.
>
> **[1:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=77)** The high availability is built-in, so additional load balances aren't required.
>
> **[1:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=82)** There's nothing you need to configure.
>
> **[1:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=85)** Availability zones.
>
> **[1:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=87)** Azure firewall can be configured during deployment to span multiple availability zones for increased availability.
>
> **[1:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=97)** Unrestricted cloud scalability.
>
> **[1:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=100)** Azure firewall can scale up as per your requirement to accommodate changing network traffic flows, so you don't need to budget for your peak traffic.
>
> **[1:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=112)** Network traffic filtering rules.
>
> **[1:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=115)** You can centrally create, allow, or deny network filtering rules by source and destination IP address, port, as well as protocol.
>
> **[2:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=126)** Azure firewall is a fully state full service, so it can distinguish legitimate packets for different types of connections.
>
> **[2:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=136)** Rules are enforced and locked across multiple subscriptions and virtual networks.
>
> **[2:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=142)** Threat intelligence.
>
> **[2:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=144)** Threat intelligence based filtering can be enabled for your firewall to alert and deny traffic from or to non malicious IP addresses and domains.
>
> **[2:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=156)** The IP addresses and domains are sourced from the Microsoft threat intelligence feed.
>
> **[2:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=163)** Multiple public IP addresses.
>
> **[2:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=166)** You can associate multiple public IP addresses with your firewall.
>
> **[2:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=171)** The Azure firewall can be implemented in one of the two types of architectures namely, hub virtual network and secured virtual hub.
>
> **[3:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=183)** The hub virtual network is the standard Azure virtual network, which is created by associating firewall policies to a hub virtual network.
>
> **[3:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=193)** You can peer spoke virtual networks that contain your workload service and services.
>
> **[3:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=200)** You can also manage firewalls in a standalone virtual networks that are not peered to any spoke.
>
> **[3:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=208)** Next comes the secure virtual hub.
>
> **[3:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=211)** An Azure virtual van hub is a Microsoft-managed resource that lets you easily create hub and spoke architectures.
>
> **[3:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=221)** When security and routing policies are associated with such a hub, it's referred to as a secured virtual hub.
>
> **[3:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=229)** Azure firewall policy.
>
> **[3:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=232)** Firewall policy is the fundamental building block of firewall manager.
>
> **[3:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=237)** The Global Administrator creates and associates policies at the top level.
>
> **[4:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=243)** The Azure firewall policy consists of NAT settings, network rule collections, application rule collections, and threat intelligence settings.
>
> **[4:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=256)** Let's learn about each of these.
>
> **[4:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=259)** The NAT setting enables you to configure Azure firewall Destination Traffic Address Translation rules, that is the DNAT rules.
>
> **[4:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=269)** These rules translate and inbound internet traffic to your Azure subnets.
>
> **[4:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=276)** Network rule collections.
>
> **[4:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=278)** Network rule collections are used to manage non HTTPS traffic flowing through the firewall.
>
> **[4:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=286)** Application rules collection.
>
> **[4:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=288)** The application rule collections are used to manage HTTP and HTTPS traffic flowing through the firewall.
>
> **[4:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=297)** Threat intelligence settings.
>
> **[4:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=299)** These settings allow Azure firewall policy filtering, based on the threat intelligence.
>
> **[5:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=306)** This will alert you to potentially malicious traffic.
>
> **[5:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=309)** It also allows you to deny traffic from a certain IP address and domains that are known to be malicious.
>
> **[5:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=319)** The decision criteria for implementing a firewall.
>
> **[5:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=323)** First, you must decide, which rules you need to manage your traffic.
>
> **[5:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=329)** Once that is done, use the firewall manager to create and configure Azure firewall policies containing these rules.
>
> **[5:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=337)** Complexity, need for centralized management, and number of virtual networks available in your environment are some of the major decision criteria that need to be taken into consideration while implementing Azure firewall.
>
> **[5:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=354)** Once the policies are created, you can associate them with one or more virtual networks or virtual hubs.
>
> **[6:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/get-started-with-firewall-manager?u=76281980&t=362)** We will see creation of hub virtual networks, secure virtual hubs, and application of policies in the upcoming videos.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), let (2), static (1)
> **Env Vars:** nat (2), https (2), dnat (1), http (1)
> **Definitions:** is a  (4)
> **Prerequisites:** configure (4)
> **Speakers:** - [instructor] (1)

#### Create Azure Firewall policies
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=0)** - [Instructor] What is an Azure Firewall policy?
>
> **[0:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=3)** Controlling outbound network traffic is a trivial part of an overall security plan.
>
> **[0:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=9)** Limiting access to outbound ports, IP addresses, and websites is an important step for enhancing the overall security of your website.
>
> **[0:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=19)** Firewall policies help in cutting down unauthorized access to servers, thereby reducing the scope of cyber attack.
>
> **[0:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=28)** Firewall policy is the recommended method to configure your Azure Firewall.
>
> **[0:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=34)** It's a global resource that can be used across multiple Azure Firewall instances in secure virtual hubs and hub virtual networks.
>
> **[0:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=45)** Policies work across regions and subscriptions.
>
> **[0:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=49)** With Azure Firewall and firewall policies, we can configure application rules.
>
> **[0:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=56)** These rules define fully-qualified domain names and can be accessed from a subnet.
>
> **[1:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=62)** Network rules.
>
> **[1:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=64)** These rules define source address, protocol, destination port, and the destination address.
>
> **[1:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=72)** DNAT rules.
>
> **[1:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=73)** DNAT rules are used for filtering inbound internet traffic with Azure Firewall.
>
> **[1:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=80)** Further, network traffic is subjected to the configured firewall rules when you route your network traffic through the firewall and the subnet default gateway.
>
> **[1:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=91)** Now, let's jump into the hands-on practice, configuring firewall policy rules.
>
> **[1:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=98)** Navigate to the Firewall Manager option under the Microsoft Defender for Cloud.
>
> **[1:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=105)** A new page opens up where you see Azure Firewall Policies under the Security section.
>
> **[1:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=112)** Now, as a prerequisite, we have already created a resource group named firewall policy.
>
> **[2:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=120)** The firewall policy resource group comprises a VNet, which has further two subnets, which have already been created in it, named Firewall-policy-subnet and a Workload-subnet.
>
> **[2:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=135)** Again, we have a server that is a part of our resource group.
>
> **[2:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=144)** Let's learn about deploying the firewall into the firewall policy VNet.
>
> **[2:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=150)** From the Azure Portal search bar, search for firewall.
>
> **[2:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=156)** You'll find the Firewall service there.
>
> **[2:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=159)** Select the firewall and then click Create.
>
> **[2:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=163)** As you know, Azure Firewall is a managed cloud-based network security service that protects your Azure virtual network resources.
>
> **[2:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=172)** It is a fully stateful firewall as a service with built-in high availability and unrestricted cloud scalability.
>
> **[3:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=181)** Now, let's choose the resource group where we need to deploy our firewall.
>
> **[3:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=186)** We will select the Firewall policy resource group.
>
> **[3:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=190)** Let's give a name to our firewall.
>
> **[3:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=193)** The region we are keeping it as constant and we'll choose East US as our region.
>
> **[3:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=200)** We'll keep the Availability zone settings as default.
>
> **[3:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=205)** For Firewall tier, we'll choose Standard.
>
> **[3:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=208)** The premium support is a little costlier, and it also includes SSL termination and IDPS features.
>
> **[3:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=217)** Now for Firewall manager, we'll use Use a Firewall policy to manage this firewall.
>
> **[3:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=223)** Now, under the Firewall policy, we'll select Add new to add a new firewall policy.
>
> **[3:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=230)** I'll give the name of policy as LinkedIn-Demo-policy.
>
> **[3:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=234)** Policy tier would be standard.
>
> **[3:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=236)** Our region would be East US as we are keeping it constant across our deployment.
>
> **[4:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=241)** Click OK.
>
> **[4:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=244)** For Virtual network, we'll be using the existing virtual network, the Firewall-policy Vnet.
>
> **[4:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=252)** We'll add a new public IP address.
>
> **[4:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=256)** Name it as test VIP.
>
> **[4:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=259)** We'll simply click on review plus create and click create.
>
> **[4:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=264)** Clicking create will create a firewall for us.
>
> **[4:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=269)** The deployment is in progress and it'll take around four to five minutes for this deployment to complete.
>
> **[4:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=275)** We'll fast forward the video 'til then.
>
> **[4:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=279)** Our deployment has been completed successfully.
>
> **[4:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=282)** We will click on the Go To Resource link.
>
> **[4:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=286)** It'll open up the firewall for us.
>
> **[4:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=288)** We will load down the firewall private and public IP addresses.
>
> **[4:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=293)** These will be used later in the video.
>
> **[4:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=296)** We also need a route table.
>
> **[4:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=299)** Here we have created firewall policy route table under the subnets on the route table.
>
> **[5:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=308)** We have associated the workload subnet.
>
> **[5:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=314)** Now we go to the routes.
>
> **[5:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=317)** We'll add the route of the firewall.
>
> **[5:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=321)** Policy route name.
>
> **[5:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=324)** We'll take IP address 0.0.0.0/0.
>
> **[5:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=331)** For next half, we will select the virtual appliance.
>
> **[5:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=335)** Here, our virtual appliance is our firewall and next hop address.
>
> **[5:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=341)** We will select the private IP address of our firewall, which you have previously noted.
>
> **[5:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=347)** That is 10.0.1.4 in our case.
>
> **[5:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=351)** Click add.
>
> **[5:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=353)** The route has been added.
>
> **[5:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=356)** Open that newly created firewall policy and we will create an application rule.
>
> **[6:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=362)** This application rule will allow outbound access to www.[google.com](https://google.com).
>
> **[6:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=368)** Click on the name of the policy.
>
> **[6:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=370)** Go to the application rules.
>
> **[6:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=372)** As we are configuring an application rule, click on add the rule collection.
>
> **[6:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=378)** For name we will give us.
>
> **[6:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=382)** Rule collection type will be application.
>
> **[6:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=385)** Priority we'll choose as 200.
>
> **[6:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=389)** Rule collection action would be allow.
>
> **[6:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=391)** Now, under the name, we'll give Allow Google.
>
> **[6:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=396)** For source type select IP address.
>
> **[6:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=400)** The source IP address would be 10.0.2.0/24.
>
> **[6:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=408)** In protocol we'll type HTPP and HTTPS, separated by a comma.
>
> **[6:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=416)** Destination type: we will choose FQDN and the destination will be www.[google.com](https://google.com).
>
> **[7:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=427)** Click add.
>
> **[7:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=430)** Be aware that Azure Firewall includes a built in rule collection for infrastructure FQDN that are allowed by default.
>
> **[7:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=440)** Let's configure a network rule now.
>
> **[7:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=443)** This network rule will allow outbound access to two IP addresses at 453.
>
> **[7:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=450)** Now. click on add the rule collection.
>
> **[7:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=453)** For name we'll give network rule policy.
>
> **[7:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=459)** Now the rule collection type is network.
>
> **[7:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=462)** Priority we'll set as 200.
>
> **[7:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=465)** Rule action type is allow.
>
> **[7:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=468)** Rule collection group would be default network rule collection group.
>
> **[7:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=476)** We'll give the name of the rule as Allow DNS.
>
> **[8:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=480)** Select IP address.
>
> **[8:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=482)** Source would be 10.0.2.0/24.
>
> **[8:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=488)** Here, the protocol would be UDP.
>
> **[8:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=492)** The destination port would be 53.
>
> **[8:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=496)** Destination type we will select IP Address.
>
> **[8:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=500)** And in the IP Address 209.244.0.3 and 209.244.0.4.
>
> **[8:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=514)** Now, these are the public DNS servers that are operated by Century Link.
>
> **[8:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=519)** We'll click on add.
>
> **[8:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=522)** The network rule has been created successfully.
>
> **[8:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=526)** We shall now go ahead and configure a DNAT rule.
>
> **[8:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=530)** This rule will allow us to connect a remote desktop to a workload virtual machine through the firewall.
>
> **[8:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=538)** Now, after selecting the DNAT rules, click on Add a rule collection.
>
> **[9:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=543)** Give the name as RDP, because this rule will allow us to connect RDP.
>
> **[9:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=549)** The rule collection type would be DNAT.
>
> **[9:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=552)** Priority would be 200.
>
> **[9:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=555)** Under the rule collection group, select default DNAT rule collection.
>
> **[9:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=560)** For the name, we'll give as RDP NAT.
>
> **[9:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=565)** Source type would be IP address.
>
> **[9:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=567)** Source will be star because it will allow all the sources.
>
> **[9:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=572)** The protocol will be TCP.
>
> **[9:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=575)** Our port is 3389.
>
> **[9:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=578)** That is the default RDP port.
>
> **[9:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=582)** The destination would be the public IP address off of our firewall.
>
> **[9:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=587)** For translated address, we will type the IP address of our workload.
>
> **[9:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=594)** Port would again be the 3389.
>
> **[9:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=597)** Once done with the configuration, click on add.
>
> **[10:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=602)** The DNAT tool has also been configured successfully.
>
> **[10:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=606)** Let's note the public IP of firewall and test the firewall connection.
>
> **[10:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=611)** Here, we will already into our server using the public IP off our firewall.
>
> **[10:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=617)** As you know, our workload server does not have a public IP address to connect to.
>
> **[10:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=623)** And the port 3389 is also not enabled on that.
>
> **[10:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=627)** Hence, we shall use the public IP off of our firewall and the username and password for our workload system.
>
> **[10:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=635)** The server.
>
> **[10:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=637)** Click on connect, give the password.
>
> **[10:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=643)** We are now logged into the server.
>
> **[10:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=645)** Let's test if the firewall is working properly and the policies that we have set up on our firewall policy are working as expected.
>
> **[10:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=655)** We'll open [google.com](https://google.com).
>
> **[10:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=658)** As expected, because we had white listed the Google, it has opened this website for us.
>
> **[11:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=666)** Now, let's open another browser and try [microsoft.com](https://microsoft.com).
>
> **[11:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=674)** So, you can see the action is denied.
>
> **[11:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=677)** And the reason is there is no rule matching in our firewall policy that allows Microsoft website to open up.
>
> **[11:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=685)** This is how the firewall policy rules work.
>
> **[11:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/create-azure-firewall-policies?u=76281980&t=689)** We have also tested our demo for the same.

> [!info]- Semantic Content
>
> **Env Vars:** dnat (7), rdp (4), fqdn (2), dns (2), ssl (1)
> **Code Keywords:** let (8), public (8), default. (2), private (2), case. (1)
> **UI Navigation:** click on (9), select the (4), go to (3), navigate to (1)
> **Definitions:** is a  (5), is an  (2)
> **Versions:** 10.0.2 (2), 209.244.0 (2), 0.0.0 (1), 10.0.1 (1)
> **Prerequisites:** configure (4), prerequisite (1), set up (1)
> **URLs:** [google.com](https://google.com) (3), [microsoft.com](https://microsoft.com) (1)
> **CLI Commands:** find (1)

#### Secure your virtual hub
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=0)** - [Tutor] Secure your virtual hub.
>
> **[0:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=3)** What is a virtual hub?
>
> **[0:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=5)** A secured virtual hub is an Azure Virtual WAN hub with associated security and routing policies configured by Azure Firewall Manager.
>
> **[0:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=17)** A secured hub can be used to filter traffic between virtual networks, virtual network and branch offices, and filter traffic to the internet.
>
> **[0:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=28)** It can also be used to easily create hub-and-spoke and transitive architectures with native security services for traffic governance and protection.
>
> **[0:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=39)** A secured virtual hub provides automated routing.
>
> **[0:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=44)** You do not need to configure UDRs to route traffic to the firewall.
>
> **[0:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=50)** Azure provides two methods to create a secured virtual hub.
>
> **[0:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=55)** Firstly, using Firewall Manager in the Azure portal, you can create a new secured virtual hub or convert an existing virtual hub that you previously created using Azure Virtual WAN.
>
> **[1:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=69)** Let's learn usage of virtual hubs by completing a few steps.
>
> **[1:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=76)** As a prerequisite, we have already created two VNets and also defined their respective subnets in our Azure portal.
>
> **[1:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=85)** From Microsoft Defender for Cloud, click on Firewall Manager.
>
> **[1:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=90)** Now under deployment, you will see virtual hubs.
>
> **[1:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=93)** Select the virtual hubs.
>
> **[1:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=97)** You get an option to create a new secured virtual hub.
>
> **[1:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=103)** Choose the resource group.
>
> **[1:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=106)** Now, we have selected the resource group region, given a name to our secured virtual hub, added an address space, chosen a name for Virtual WAN name.
>
> **[1:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=118)** Now, click on Azure Firewall.
>
> **[2:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=121)** The secured virtual hubs must have at least one and can have at most two security providers.
>
> **[2:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=128)** Here, we have enabled the Azure Firewall.
>
> **[2:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=131)** Tier would be standard and keep other things as default.
>
> **[2:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=135)** Next, security partner providers will be disabled by default.
>
> **[2:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=140)** Click on review plus create.
>
> **[2:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=143)** Once the validation passes, click create.
>
> **[2:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=147)** The deployment will take around 30 minutes to complete.
>
> **[2:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=152)** We see the deployment has been completed successfully.
>
> **[2:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=156)** Now it's time to connect the hub-and-spoke virtual networks.
>
> **[2:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=161)** Once the secured virtual hub is deployed successfully, you can peer the hub-and-spoke virtual networks.
>
> **[2:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=168)** Let's log into the portal and see the peering.
>
> **[2:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=172)** Open the secured virtual hub resource group and click on SecureVWAN.
>
> **[2:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=178)** Here, you see the hub has been deployed successfully.
>
> **[3:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=183)** Now under connectivity, navigate to the virtual network connections.
>
> **[3:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=189)** Select add connections.
>
> **[3:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=193)** Give a name to your connection.
>
> **[3:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=195)** Under the hubs, we'll choose the newly created hub.
>
> **[3:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=198)** That is hub01.
>
> **[3:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=199)** Resource group would be the one where we have deployed our secured virtual hub.
>
> **[3:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=205)** We'll select Spoke01 as the virtual network.
>
> **[3:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=208)** Leave everything else as default and click create.
>
> **[3:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=213)** Similarly, we will add connection for hub-spoke-02 peering.
>
> **[3:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=217)** Under virtual network here, we will select Spoke02.
>
> **[3:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=222)** Click create.
>
> **[3:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=225)** Peering creation takes almost two minutes.
>
> **[3:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=230)** Once the peering has been created successfully, we will be creating firewall policies to secure our hub.
>
> **[3:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=238)** Firstly, we will add an application rule for allowing *.[microsoft.com](https://microsoft.com).
>
> **[4:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=244)** Next, we will add a DNAT rule so that we can connect a remote desktop to Srv-01 virtual machine.
>
> **[4:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=253)** Next, we will add a network rule so that we can connect a remote desktop from server one to server two.
>
> **[4:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=260)** Under the firewall manager, we will be creating an Azure firewall policy.
>
> **[4:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=265)** Select the resource group.
>
> **[4:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=267)** Give a name.
>
> **[4:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=268)** Region would be East US.
>
> **[4:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=270)** Policy tier would be standard.
>
> **[4:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=273)** Under DNS settings, we will leave everything as default.
>
> **[4:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=276)** Under DNS inspection as well, we will leave things as default.
>
> **[4:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=281)** Next, under rules, we have created three rules.
>
> **[4:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=285)** Two network rules and one application rule.
>
> **[4:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=288)** For application rule, we have configured allowing all URLs containing *.[microsoft.com](https://microsoft.com).
>
> **[4:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=298)** For network rules, first, we have configured a rule to connect a remote desktop to server workload one virtual machine.
>
> **[5:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=307)** Second, we have added a network rule so that we can connect remote desktop from server workload one to server workload two.
>
> **[5:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=315)** Leave everything else as default and click on review plus create.
>
> **[5:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=320)** Once the validation passes, click on create.
>
> **[5:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=324)** The policy has been deployed successfully.
>
> **[5:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=327)** Now, we will associate this firewall policy with our hub.
>
> **[5:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=333)** Now, the policy has been created successfully.
>
> **[5:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=337)** We will associate our firewall policy with the hub.
>
> **[5:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=340)** For that, we will navigate to the newly created firewall policy.
>
> **[5:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=345)** Select manage associations and associate the hub.
>
> **[5:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=350)** Open the firewall policy, click the check box, select manage association, and link associate hub.
>
> **[6:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=362)** Here we will select our hub and click add.
>
> **[6:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=366)** This will attach our policy to our existing hub.
>
> **[6:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=370)** Route the traffic to your hub.
>
> **[6:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=373)** Now, you must ensure that the network traffic gets routed through the firewall.
>
> **[6:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=379)** For routing the traffic, select hub01.
>
> **[6:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=383)** Under settings, you see security configurations.
>
> **[6:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=388)** For internet traffic, we will select Azure Firewall.
>
> **[6:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=392)** Under private traffic, select send via Azure Firewall.
>
> **[6:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=398)** Select save.
>
> **[6:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=400)** Click "OK" on the warning dialogue.
>
> **[6:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=402)** It takes a few minutes to update the route tables.
>
> **[6:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=407)** The internet traffic connection as well as the private traffic connection both should have secured by Azure firewall prompt.
>
> **[6:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=416)** Once we are through with all the configurations, we will test the firewall.
>
> **[7:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=420)** To test the firewall rules, you'll RDP to server one using the firewall public IP address.
>
> **[7:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=427)** From there, again, RDP into server 02 from inside server 01 to verify the network rules.
>
> **[7:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-virtual-hub?u=76281980&t=436)** This completes securing the virtual hub using Azure Firewall Manager module.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), select the (2), open the (2), navigate to (1)
> **Code Keywords:** default. (4), let (2), private (2), public (1), module (1)
> **Env Vars:** wan (3), dns (2), rdp (2), dnat (1)
> **URLs:** [microsoft.com](https://microsoft.com) (2)
> **Tools:** azure portal (2)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** configure (1), prerequisite (1)
> **Warnings:** warning (1)

#### Secure your hub virtual network
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=0)** - [Instructor] What is a hub virtual network?
>
> **[0:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=3)** Hub virtual network is a standard Azure virtual network that can be easily created and managed.
>
> **[0:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=10)** When security policies are associated with it, it's referred to as hub virtual network.
>
> **[0:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=16)** You can also manage firewalls in a standalone virtual network that aren't peered to any spoke.
>
> **[0:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=23)** Uses of hub virtual network.
>
> **[0:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=27)** The hub virtual network can be used to secure your hybrid network traffic destined to the private IP address, secure your Azure PaaS resources, and also secure connectivity to the internet.
>
> **[0:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=42)** We can configure hub virtual network by creating a few resources.
>
> **[0:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=48)** Firstly, we will be creating a firewall policy named Secured VNet Policy.
>
> **[0:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=54)** We'll be creating three VNets.
>
> **[0:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=56)** Namely, VNet Hub.
>
> **[0:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=58)** That is firewall will be in this VNet, then we'll be creating a VNet spoke.
>
> **[1:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=65)** This VNet represents workload location on the Azure and we will be creating a VNet on-prem.
>
> **[1:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=71)** This VNet represents the on-premises network.
>
> **[1:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=75)** We shall then configure and deploy the firewall by following a few easy steps that I will show when we go to the portal.
>
> **[1:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=84)** The firewall name is firewall VNet Hub.
>
> **[1:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=88)** Next we shall create two VPN gateways, namely gateway hub, and gateway on-prem.
>
> **[1:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=96)** I have already created our VNet gateways, as creation of VNet gateways takes around 45 minutes to one hour for one gateway creation.
>
> **[1:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=107)** Then we will be creating the VPN connections between hub and on-premises gateway.
>
> **[1:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=113)** I'll show you both the connection statuses, as connected.
>
> **[1:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=118)** Then we shall peer our hub and spoke Vnet.
>
> **[2:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=122)** Next, we'll create a couple of routes and associate them to these subnets.
>
> **[2:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=129)** Firstly, a route from hub gateway subnet to spoke subnet, through firewall IP address.
>
> **[2:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=134)** Namely, UDR-hub-spoke.
>
> **[2:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=138)** The second route would be a default route, from the spoke through the firewall IP address named UDR-DG.
>
> **[2:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=146)** Next, we shall create two virtual machines.
>
> **[2:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=150)** One would be placed in the workload subnet and the other in the on-premises subnet.
>
> **[2:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=157)** The virtual machine that would be on-premises will have an IIS role installed, and the name of the virtual machine is VM-on-prem.
>
> **[2:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=167)** The name of the other machine is Spoke VM.
>
> **[2:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=171)** Now let's navigate over Azure portal, and see all these resources.
>
> **[2:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=177)** For saving time, I have recreated all the resources for you.
>
> **[3:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=182)** We shall still go through the steps and see how these can be created.
>
> **[3:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=189)** We are in the Azure portal.
>
> **[3:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=192)** Here I have created a resource group named SecuredVNet.
>
> **[3:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=197)** This resource group comprises of all the resources that would be needed in setting up our hub virtual network.
>
> **[3:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=207)** Now, let's navigate to each of the resource one by one.
>
> **[3:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=212)** Firstly, we have created two VNets: Vnet hub VNet Spoke, and VNet on-prem.
>
> **[3:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=222)** This hub VNet has two subnets: Azure firewall subnet, and a gateway subnet.
>
> **[3:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=232)** VNet Spoke: the VNet spoke comprises of the workload subnet.
>
> **[4:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=241)** VNet on-prem comprises of two subnets.
>
> **[4:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=245)** Namely, subnet Co-op, and a gateway subnet.
>
> **[4:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=251)** Next, we have created a firewall policy named secure VNet policy.
>
> **[4:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=256)** Let's navigate to the policy and check out how it has been configured.
>
> **[4:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=262)** The secure VNet policy comprises of two network rules.
>
> **[4:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=267)** First rule allows the web IP addresses for connection.
>
> **[4:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=273)** Second rule allows the RDP connection from one VM to another VM.
>
> **[4:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=279)** Next, we have created a firewall named firewall Vnet hub and we have attached our policy to this firewall.
>
> **[4:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=290)** For creating the firewall simply type firewall in the top search bar, click create, give the name of resource group, give firewall a name, choose a location for your firewall.
>
> **[5:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=308)** In case you need firewall to be highly available you can add it under availability zone.
>
> **[5:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=313)** In my case, I have kept availability zone as none.
>
> **[5:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=317)** Firewall tier, we have chosen standard firewall tier.
>
> **[5:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=322)** Then the policy we have already created over secured VNet policy.
>
> **[5:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=327)** This is where I have linked my policy to the firewall.
>
> **[5:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=331)** Then the virtual network, here, I have created a firewall virtual network.
>
> **[5:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=337)** So when I linked my policy, it gave me the option to either create a new virtual network or use existing.
>
> **[5:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=345)** I'll be linking the VNet hub to this policy.
>
> **[5:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=349)** I have added a public IP address.
>
> **[5:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=353)** Then I have clicked review plus create.
>
> **[5:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=356)** This is how the firewall was created.
>
> **[5:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=359)** Next, I converted my VNet hub into a secured virtual network.
>
> **[6:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=364)** To do so, I went to the firewall manager under Microsoft Defender for Cloud.
>
> **[6:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=371)** Under deployment, selected the virtual network.
>
> **[6:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=375)** Here, I could have either created a new, secured virtual network, but I chose to convert my VNet hub into a secured virtual network.
>
> **[6:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=386)** Let me give you a demo of creating VNet spoke into a secured VNet hub.
>
> **[6:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=391)** So I chose VNet spoke.
>
> **[6:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=394)** Here, I get an option to deploy a firewall with the firewall policy.
>
> **[6:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=400)** Now, this is the firewall policy and I choose standard tier.
>
> **[6:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=405)** Click on review plus confirm.
>
> **[6:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=407)** And my virtual network would get converted into a secured virtual network.
>
> **[6:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=412)** As you can see, I have already created two VPN gateways for my setup.
>
> **[6:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=418)** To create a new VPN gateway, you simply have to give a name to gateway, choose a region.
>
> **[7:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=426)** It is preferred to choose the region that is closest to your users.
>
> **[7:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=430)** For gateway type I'm choosing as VPN.
>
> **[7:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=433)** VPN type I'm choosing route based.
>
> **[7:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=436)** SKU I am choosing basic. Generation, one.
>
> **[7:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=439)** VNet, I have chosen VNet hub, over here, for my gateway hub and for my on-premises gateway, I have chosen the VNet on-prem.
>
> **[7:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=450)** I gave a public IP address, and simply clicked on review plus create.
>
> **[7:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=455)** Now, I'm not creating the VPN gateway again because creation of a VPN gateway can often take 45 minutes or more, depending on the selected VPN gateway SKU.
>
> **[7:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=468)** After the gateways were created, I went to the connections and connected both the VNets.
>
> **[7:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=475)** So, one connection was hub to on-prem, and the other was from on-prem to hub.
>
> **[8:01](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=481)** The status shows us connected to both of them.
>
> **[8:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=485)** Then I had to peer my hub and spoke VNet.
>
> **[8:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=488)** For that, I have already created the peering.
>
> **[8:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=492)** I'll show you the peering now.
>
> **[8:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=495)** I am inside my VNet hub.
>
> **[8:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=497)** I go to the peerings option.
>
> **[8:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=500)** Here, you see, hub to spoke peer has been connected.
>
> **[8:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=504)** Similarly, if I go to the VNet spoke under peering, I have hub to spoke, peering, and the gateway transit for both the peerings as disabled, for now.
>
> **[8:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=518)** Next I created two routes.
>
> **[8:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=520)** You can simply go to the search bar and type routes.
>
> **[8:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=524)** You will get the option route table.
>
> **[8:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=527)** Click on the route table.
>
> **[8:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=529)** Here you see my pre-created routes.
>
> **[8:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=533)** So one is hub to spoke, and one is default gateway route.
>
> **[8:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=538)** Now, you see the routes here that have already been associated.
>
> **[9:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=545)** For associating the subnet, you simply go under subnets in the route, click on associate, select a virtual network.
>
> **[9:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=554)** For hub, I'm choosing VNet hub.
>
> **[9:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=557)** Choose a subnet. I'll choose the gateway subnet.
>
> **[9:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=560)** Now this is not allowing the association, because this is already being associated.
>
> **[9:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=564)** If it was not, you simply had to click okay, and the association would have been done successfully.
>
> **[9:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=571)** In my resource group, you see I've created two VMs.
>
> **[9:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=575)** One is spoke VM and other is VM on-prem.
>
> **[9:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=579)** If you want to filter your resources you can simply add filter.
>
> **[9:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=584)** Click on filter by type.
>
> **[9:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=588)** Now under value, you can choose virtual machine, and click apply.
>
> **[9:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=597)** It will show you both the VMs that are in your resource group.
>
> **[10:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=602)** Now our setup has been complete.
>
> **[10:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=605)** Let's go ahead and test the firewall.
>
> **[10:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=608)** For testing the firewall connection, from Azure portal we'll connect to our VM On-prem using its public IP address.
>
> **[10:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=615)** From our web browser will browse to the private IP address of our spoke VM.
>
> **[10:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=621)** And then, from inside the VM On-prem we'll check if we can connect to the spoke VM.
>
> **[10:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=627)** all these connectivities would be done because of the firewall policies that we have set up.
>
> **[10:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=633)** Let's go and see our test in action.
>
> **[10:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=637)** I should go and RDP into the VM on-prem using its public IP address.
>
> **[10:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=643)** Once I'm inside the VM, I'll browse to the IP address, private IP address of our spoke VM.
>
> **[10:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=650)** It opens up the spoke VM for me.
>
> **[10:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=653)** Now, I had already installed IIS on my spoke VM, which is why I'm getting this, over here.
>
> **[11:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=662)** We also do a last test, where I'll try to RDP into my spoke VM from inside my on-prem VM.
>
> **[11:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=672)** Click connect.
>
> **[11:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=674)** I'm taking the private IP address of the spoke VM.
>
> **[11:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=678)** It gives me the password prompt.
>
> **[11:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=681)** Now, as you can see, I'm getting the RDP prompt, and I'm able to get into my spoke VM from my VM On-prem.
>
> **[11:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/secure-your-hub-virtual-network?u=76281980&t=692)** This concludes our setup of securing hub virtual network, using Azure Firewall Manager.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (9), rdp (4), udr (2), iis (2), sku (2)
> **Code Keywords:** let (6), private (4), public (4), case, (1), new, (1)
> **UI Navigation:** go to (4), click on (4), navigate to (2)
> **Prerequisites:** setup (3), configure (2), set up (1)
> **Tools:** azure portal (3)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Security partner providers
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=0)** - [Instructor] Security Partner Providers Security partner providers in Azure Firewall Manager enables us to use our familiar, best-in-breed, third-party security as a service offering to protect Internet access for our users.
>
> **[0:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=18)** With a quick configuration, we can secure a hub with the supported security partner, route and filter Internet traffic from our VNet or branch locations within our region.
>
> **[0:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=31)** We can do this with automated route management, without setting up any managed user-defined routes.
>
> **[0:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=39)** The supported security partners that are currently available include Zscaler, Check Point and iboss.
>
> **[0:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=50)** Let's look at the procedure of deploying our own third-party security partner from one of these available options.
>
> **[0:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=59)** Under Microsoft Defender for Cloud open Firewall Manager, here, under security you see the option Security Partner Providers.
>
> **[1:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=69)** Click on the security partner providers.
>
> **[1:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=72)** Here, you have to create your secured virtual hub.
>
> **[1:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=76)** So, I click on secured virtual hub.
>
> **[1:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=79)** A new pane opens up.
>
> **[1:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=81)** I'll create a new resource group for my security partner provider, namely, Security Group.
>
> **[1:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=89)** I'll choose the region as East US.
>
> **[1:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=95)** Give the name of your choice, select an address space, this should be a CIDR value.
>
> **[1:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=105)** Note that you can't have overlapping IP spaces for hubs in a VWAN.
>
> **[1:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=111)** You can either choose an existing Virtual WAN or create a new WAN.
>
> **[1:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=115)** In our case, we'll be creating a new Virtual WAN.
>
> **[1:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=119)** The type here is standard for now.
>
> **[2:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=122)** I'll check the checkbox, include VPN gateway to enable security partner providers.
>
> **[2:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=129)** Now this is the AS Number, which will be used further when we are configuring our partner support.
>
> **[2:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=138)** The gateway scale unit, you have an option to choose the bandwidth available from various options according to your preference.
>
> **[2:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=147)** For my case, I'll choose one Gbps, two scale units.
>
> **[2:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=153)** Next go to the Azure Firewall, secured virtual hubs must have at least one and can have, at most, two security providers.
>
> **[2:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=162)** You may use two security providers to secure different types of connections.
>
> **[2:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=167)** For now, I'll choose the Azure Firewall as enabled and the firewall tier I'll keep it as standard.
>
> **[2:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=174)** I'll keep the availability zone as default.
>
> **[2:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=176)** I do not want any availability zone.
>
> **[2:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=179)** Although setting up availability zone helps in redundancy.
>
> **[3:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=184)** So number of public IP addresses, currently I just want one public IP address for my setup.
>
> **[3:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=191)** We have chosen our subscription.
>
> **[3:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=194)** Next go to the security partners.
>
> **[3:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=197)** Currently, the security partner provider is disabled by default.
>
> **[3:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=201)** We'll click on enable.
>
> **[3:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=204)** Here you see Zscaler, Check Point and iboss.
>
> **[3:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=208)** I'll select Zscaler as my preferred security partner because I already have my account with them.
>
> **[3:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=217)** Click on next, review plus create.
>
> **[3:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=221)** As you can see, the validation has passed and it also gives you a notification that after deployment of this secured hub you need to go to your security partner, that is Zscaler portal, and set up your configuration there.
>
> **[3:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=236)** I'll click create, the deployment will take a few minutes.
>
> **[4:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=242)** You can see the entire deployment took around 15 minutes.
>
> **[4:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=246)** Now the deployment has been completed and we have our Azure Firewall secured hub and the secured Virtual WAN created in our subscription.
>
> **[4:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=258)** You can deploy secured hubs, configured with the security partner of your choice in multiple Azure regions to get connectivity and security for your users anywhere across the globe.
>
> **[4:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=271)** With the ability to use the security partners offering for Internet or Software-as-a-Service application traffic, an Azure Firewall for private traffic in the secured hubs.
>
> **[4:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/security-partner-providers?u=76281980&t=283)** You can now start building your security edge on Azure that is close to your globally distributed users and applications.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), default. (2), public (2), let (1), private (1)
> **Env Vars:** wan (4), cidr (1), vwan (1), vpn (1)
> **UI Navigation:** click on (4), go to (2), checkbox (1)
> **Prerequisites:** setup (1), set up (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### DDoS protection plans
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=0)** - What is a DDoS?
>
> **[0:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=2)** Well, DDoS stands for distributed denial of service.
>
> **[0:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=8)** A DDoS protection plan is a paid service that offers enhanced DDoS mitigation capabilities via adaptive tunneling, attack notification.
>
> **[0:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=18)** and telemetry to protect against impact of a DDoS attack.
>
> **[0:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=24)** What is a DDoS protection plan?
>
> **[0:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=27)** Basic DDoS protection is integrated into Azure platform by default with no additional cost. DDoS protection plan can be linked to multiple VNets within your organization.
>
> **[0:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=41)** Let's learn the steps to create a DDoS protection plan.
>
> **[0:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=46)** Under the Microsoft defender for Cloud, navigate to the Firewall Manager under Microsoft defender for Cloud. Here under security you see the DDoS protection plans.
>
> **[0:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=59)** This feature is still in preview for now.
>
> **[1:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=64)** Click on the DDoS protection plan.
>
> **[1:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=67)** We already have a DDoS protection plan created for a subscription, but to create a new DDoS protection plan, click on the create button.
>
> **[1:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=78)** Choose a resource group.
>
> **[1:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=80)** I'll choose the DDoS resource group.
>
> **[1:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=83)** You can also create a new resource group by clicking on the create new link.
>
> **[1:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=87)** Give a name to your subscription.
>
> **[1:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=89)** Choose the region, give tags if you want. Click on review + create. The final validations are being run.
>
> **[1:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=100)** You can see the validation failed here because you can create a single DDoS protection plan in your subscription.
>
> **[1:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=110)** Even if we view the details in the summary section it is clearly mentioned that you can have only one DDoS protection plan per subscription.
>
> **[2:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=120)** So I'll just go ahead, and delete my existing DDoS protection plan.
>
> **[2:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=126)** Remember that DDoS protection plan can be enabled on following Azure resources, Firewall, Application Gateway, Bastion host, Network interface card, that is Nick, and Virtual machine scale sets and VNet Gateways.
>
> **[2:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=145)** Let us move back to our Azure portal and to our DDoS protection plan. Under protected resources, you will see VNet, Firewall, Application Gateway, Bastion host, load balancer, Network interface card, Virtual machine scale set, and VNet Gateways.
>
> **[2:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=164)** So for now, we'll add a VNet to our DDoS protection plan.
>
> **[2:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=169)** We'll choose a resource group.
>
> **[2:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=170)** We'll choose the Firewall policy resource group we'll link the Firewall policy VNet, and click on add.
>
> **[3:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=180)** So you see on the top, we see a notification that the VNet has been updated successfully.
>
> **[3:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=187)** We'll just refresh the screen.
>
> **[3:10](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=190)** Our Firewall policy VNet now shows under the linked VNet under DDoS protection plan.
>
> **[3:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=197)** Note that there are additional charges for adding the resources to your DDoS protection plan.
>
> **[3:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=204)** And in case you want to delete your DDoS protection plan you first need to unlink all the resources that have been linked to your DDoS protection plan.
>
> **[3:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=215)** Hope you enjoyed learning about the Firewall.
>
> **[3:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/ddos-protection-plans?u=76281980&t=218)** So this puts an end to Firewall Manager section.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (2), interface (2), protected (1)
> **UI Navigation:** click on (4), navigate to (1)
> **Definitions:** is a  (3), stands for (1)
> **Tools:** azure portal (1)
> **Warnings:** note that (1)
> **Speakers:** - what (1)


### 6. 5. Managing Security Solutions

#### Integrate security solutions and data sources
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=0)** - [Instructor] All about security solution integration.
>
> **[0:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=3)** Defender for Cloud makes it easy to enable integrated security solutions in Azure.
>
> **[0:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=9)** It can provision the agents on your virtual machines.
>
> **[0:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=13)** Security events from partner solutions are automatically collected, aggregated and displayed as alerts and incidents.
>
> **[0:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=22)** Customers can use integrated health events to monitor all partner solutions at a glance.
>
> **[0:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=30)** All security solutions are deployed from Defender for Cloud and are automatically connected to the service.
>
> **[0:37](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=37)** You can also connect other security data sources, including computers running on-premises or in other clouds.
>
> **[0:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=47)** Let's learn to manage integrated Azure solutions.
>
> **[0:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=52)** From Defender for Clouds main page, navigate to the Security solutions option.
>
> **[0:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=58)** This page is divided into two sections, namely connected solutions and add data sources.
>
> **[1:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=65)** The connected solution section displays the list of security solutions that are currently connected to Defender for Cloud.
>
> **[1:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=73)** In our scenario, we have five solutions connected at present, out of which, four are being displayed on the screen.
>
> **[1:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=81)** Namely, CheckPoint Firewall, MicrosoftWAF, Barracuda, and Qualys Agent.
>
> **[1:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=88)** Health status is linked to each of the solutions.
>
> **[1:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=92)** There are four different partners solution statuses.
>
> **[1:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=96)** Firstly, healthy or green.
>
> **[1:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=98)** That means no health issues.
>
> **[1:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=101)** Secondly, unhealthy or red.
>
> **[1:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=104)** That means there's a health issue that requires immediate attention.
>
> **[1:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=109)** Stopped reporting or orange.
>
> **[1:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=111)** That means the solution has stopped reporting its health status.
>
> **[1:56](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=116)** Not reported all gray.
>
> **[1:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=118)** That means the solution hasn't reported anything yet.
>
> **[2:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=122)** and no health data is available.
>
> **[2:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=125)** A solution status may be unreported if it was connected recently, or it's still deploying.
>
> **[2:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=133)** Next, we will take a look at Add data sources section.
>
> **[2:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=138)** The Add data sources section includes three types of data sources, namely Non-Azure servers, SIEM, and Azure Application Gateway WAF.
>
> **[2:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=150)** Let's start with configuring Non-Azure server onboarding to Defender for Cloud.
>
> **[2:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=155)** We'll click on ADD under Non-Azure servers.
>
> **[2:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=160)** To onboard Non-Azure servers, we need to create a Log Analytics workspace.
>
> **[2:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=166)** You can simply click on this Create New Workspace button, and it will redirect you to the page of creating Log Analytics workspace.
>
> **[2:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=174)** Here, choose a resource group.
>
> **[2:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=177)** I'll choose Security_Solutions as my resource group.
>
> **[3:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=180)** Give a name.
>
> **[3:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=182)** I have chosen AWSServer as the name.
>
> **[3:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=185)** For region, I selected East US.
>
> **[3:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=189)** Click on Review + Create.
>
> **[3:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=192)** Once the validation passes, click Create.
>
> **[3:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=196)** Here, you see our resource has been deployed successfully.
>
> **[3:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=201)** Now, as this is a new Log Analytics workspace, we will click on Upgrade.
>
> **[3:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=207)** A 30-day free trial period will be available for our Log Analytics workspace.
>
> **[3:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=214)** And you can see that Microsoft Defender for server will be applied $15 per node per month.
>
> **[3:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=220)** You can also click on pricing details to know more about the cost.
>
> **[3:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=227)** Now, you get an option to Add Server.
>
> **[3:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=230)** Here, currently you see there are zero Windows computers connected and zero Linux computers connected.
>
> **[3:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=237)** For Windows server, you can download an agent for your operating system, then install and configure it using the keys for your workspace ID.
>
> **[4:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=246)** So here you see, you can download the agent for your operating system, then install and configure it using the keys for your workspace ID.
>
> **[4:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=255)** This is the workspace ID number and these are the primary and secondary keys.
>
> **[4:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=260)** I'll click on the Download Windows Agent 64 bit link.
>
> **[4:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=265)** I've logged into my AWS server and copied the MMA setup that has been downloaded.
>
> **[4:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=272)** I will double click on the setup, and follow the on-screen instructions for installing this.
>
> **[4:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=280)** Click on Next, I Agree, Next, I will check the box Connect the agent to Azure Log Analytics OMS, click Next.
>
> **[4:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=294)** Here, I have copied the workspace ID and workspace key from my Azure Portal.
>
> **[5:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=300)** Click Next.
>
> **[5:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=303)** It is recommended to use Microsoft Update.
>
> **[5:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=307)** Click Next and click Install.
>
> **[5:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=311)** The installation has been completed.
>
> **[5:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=313)** Click Finish.
>
> **[5:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=315)** Now, to verify if the product has been installed successfully, we'll go to the Control Panel, view by category.
>
> **[5:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=327)** Here, you find Microsoft Monitoring Agent.
>
> **[5:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=330)** Click on the MMA.
>
> **[5:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=333)** Under Azure Log Analytics OMS, this green check mark shows that the agent has been installed successfully on the operating system of your device.
>
> **[5:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=343)** Click OK.
>
> **[5:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=346)** Now, I'll simply disconnect from the server.
>
> **[5:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=350)** When the installation is complete, you would see one Windows computer connected to your Log Analytics workspace.
>
> **[5:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=358)** Once the onboarding is completed, you can monitor your AWS server from your Azure Microsoft Defender for Cloud product.
>
> **[6:07](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=367)** Now, let's move to configuring SIEM.
>
> **[6:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=371)** That is integrate Microsoft Defender for Cloud alerts into SIEM for a central monitoring.
>
> **[6:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=377)** Click on ADD.
>
> **[6:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=379)** Here, first, you need to create an event hub.
>
> **[6:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=383)** Click Create Event Hub.
>
> **[6:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=385)** For resource group, I'm selecting Security_Solutions.
>
> **[6:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=389)** I have given a name to my namespace, choose a location.
>
> **[6:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=393)** Under pricing tier, there are three available options, premium, standard and basic.
>
> **[6:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=399)** The prices vary according to the features that are available.
>
> **[6:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=403)** For now, I'll choose Standard as this is the recommended pricing tier.
>
> **[6:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=408)** Click on Next Networking.
>
> **[6:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=411)** Here, I will choose the Public access.
>
> **[6:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=414)** Click on Review + create.
>
> **[6:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=418)** Once the validation has been succeeded, click Create.
>
> **[7:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=424)** Here, you see my event hub namespace has been created successfully.
>
> **[7:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=429)** Click on the resource and add an event hub into my namespace.
>
> **[7:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=433)** To add an event hub, under Entities, I'll click Event Hub.
>
> **[7:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=439)** Click on add Event Hub.
>
> **[7:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=442)** Give a name to your event hub.
>
> **[7:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=444)** Select the partition count.
>
> **[7:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=447)** The number of partitions in an event hub directly relate to the number of concurrent readers that you expect to have connected to your event hub.
>
> **[7:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=455)** Here, I will be selecting 10 partition counts.
>
> **[7:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=459)** Message retention would be two days.
>
> **[7:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=462)** Capture, I'll keep it as off, and click Create.
>
> **[7:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=465)** My event hub has been created successfully.
>
> **[7:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=470)** Next, I will click on Export Activity Logs to the newly created event hub.
>
> **[7:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=477)** Here, we will select the diagnostic settings.
>
> **[8:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=482)** A diagnostic setting specifies a list of categories of platform logs and/or metrics that you want to collect from a subscription and one or more destinations that you would stream them to.
>
> **[8:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=495)** Here, I will click on Export Activity Logs.
>
> **[8:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=500)** Select Add diagnostic settings.
>
> **[8:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=503)** I have given a name to my diagnostic settings.
>
> **[8:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=506)** Choose a category.
>
> **[8:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=507)** I will be streaming security logs, alerts and recommendations.
>
> **[8:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=511)** I have chosen the option stream to an event hub.
>
> **[8:35](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=515)** Event hub namespace has been populated automatically.
>
> **[8:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=519)** Under the event hub name, we have already created the event hub name.
>
> **[8:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=524)** Event hub policy is default, and click Save.
>
> **[8:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=530)** Once the diagnostic settings have been saved successfully, open your event hub namespace and click on the Activity logs.
>
> **[8:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=539)** Here, we will see a list of logs that were selected while creating diagnostic settings.
>
> **[9:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=545)** Additionally, the logs can also be exported to a third-party SIEM tool.
>
> **[9:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=551)** Finally, let's learn about Azure Application Gateway WAF.
>
> **[9:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=556)** You can deploy your Azure's WAF solution to protect your web applications from common threats.
>
> **[9:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=562)** Click on ADD.
>
> **[9:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=564)** Click Create.
>
> **[9:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=566)** An application gateway is a web traffic load balancer that enables us to manage traffic over web applications.
>
> **[9:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=574)** Give a name of the resource group.
>
> **[9:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=576)** I've given the application gateway name.
>
> **[9:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=579)** Region has been selected as East US.
>
> **[9:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=582)** Tier, there are four tiers.
>
> **[9:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=583)** I'm selecting WAF V2.
>
> **[9:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=586)** Enable autoscaling, yes.
>
> **[9:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=588)** Minimum instance count is one, maximum five.
>
> **[9:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=592)** I've kept rest everything as default.
>
> **[9:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=595)** Here, I will create a new virtual network.
>
> **[9:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=598)** For the VNet, I've given name as WAFVnet.
>
> **[10:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=602)** I've chosen an address space, and I've added two subnets, ASGSubnet and a BackendSubnet.
>
> **[10:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=609)** Click OK.
>
> **[10:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=611)** Next, I'll configure the frontend.
>
> **[10:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=614)** In the frontend, I add new public ID.
>
> **[10:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=619)** Next, I'll go to the backends.
>
> **[10:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=622)** I'll add a backend pool.
>
> **[10:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=625)** A backend pool is a collection of resources to which our application gateway can send traffic.
>
> **[10:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=631)** A backend pool can contain virtual machines, virtual machine scale sets, IP addresses, domain names, or an app servers.
>
> **[10:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=639)** Right now, I'm adding the backend pool without any targets.
>
> **[10:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=643)** Click on Add.
>
> **[10:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=645)** Next, I'll go to the Configuration tab and add a routing rule over here.
>
> **[10:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=651)** A routing rule is used to send traffic from a given frontend IP address to one or more backend targets.
>
> **[10:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=657)** A routing rule must contain a listener and at least one backend target.
>
> **[11:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=662)** On the listener, I've given a rule name.
>
> **[11:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=665)** Give it a listener name.
>
> **[11:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=666)** Frontend IP is a public IP.
>
> **[11:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=669)** For backend targets, I've created a backend target and I've also added HTTP settings.
>
> **[11:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=677)** Here, I've added an HTTP setting name.
>
> **[11:20](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=680)** Click on Add.
>
> **[11:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=682)** Click on Next Tags.
>
> **[11:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=685)** Review + create.
>
> **[11:27](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=687)** Once the validation is pass, click Create.
>
> **[11:31](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=691)** After the creation of WAF gateway, we have created two Windows virtual machines without any public inbound port and public IP address.
>
> **[11:41](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=701)** Both the VMs are connected to WAF Gateway Vnet and added to the backend pool.
>
> **[11:47](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=707)** IIS has been installed on both the VMs.
>
> **[11:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=711)** This is the PowerShell command that can be used to install the IIS on your Windows servers.
>
> **[11:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=719)** Now, we are going to add our virtual machines to our backend pool.
>
> **[12:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=723)** Go to the WAF Gateway.
>
> **[12:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=726)** There, select the Backend pools.
>
> **[12:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=729)** Open the backend pool that was added without any target.
>
> **[12:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=734)** We shall added of a backend pool, add target type as virtual machine, select the NIC of the virtual machine.
>
> **[12:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=743)** Click Save.
>
> **[12:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=746)** Once the backend pool has been updated successfully, we will create and link a WAF policy.
>
> **[12:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=753)** All of the WAF customizations and settings are in a separate object, called a WAF policy; the policy must be associated with your application gateway.
>
> **[12:44](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=764)** We'll create a basic WAF policy with a manage default rule set.
>
> **[12:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=770)** Go to the top search bar in the portal and type WAF.
>
> **[12:55](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=775)** You will find web application firewall policy as the option.
>
> **[12:59](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=779)** Click on Create.
>
> **[13:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=783)** This policy is being created for regional WAF, that is application gateway.
>
> **[13:08](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=788)** You have given a name to a policy selected the location.
>
> **[13:12](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=792)** The policy mode is detection.
>
> **[13:14](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=794)** Go to the Manage rules.
>
> **[13:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=796)** Keep everything as default over here.
>
> **[13:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=799)** Next, the policy settings.
>
> **[13:21](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=801)** Leave everything as default.
>
> **[13:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=803)** Go to the Custom rules.
>
> **[13:25](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=805)** Next, go to the Association.
>
> **[13:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=808)** Here, we will add an association.
>
> **[13:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=810)** Select Application Gateway.
>
> **[13:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=813)** Select the checkbox, and click Add.
>
> **[13:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=816)** Click on Review + create.
>
> **[13:39](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=819)** And once the validation passes, click Create.
>
> **[13:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=823)** Once all the resources have been created successfully, we will test our application gateway.
>
> **[13:49](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=829)** To test the application gateway, find the public IP address for the application gateway on its overview page.
>
> **[13:58](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=838)** Copy the frontend public IP of your WAF gateway.
>
> **[14:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=842)** Open a new browser window and paste the IP address.
>
> **[14:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=845)** Here, when you select the refresh page, you will be redirected to different VMs that have been configured in the backend pool.
>
> **[14:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=855)** WAFVM2, WAFVM1.
>
> **[14:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=858)** That means our application gateway has been configured successfully.
>
> **[14:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=863)** I have implemented Microsoft Defender's security solution in one of our partners environment.
>
> **[14:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=870)** This solution enables them in eliminating third-party security products and associated vendor relationships.
>
> **[14:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=878)** Integrating Microsoft Defender helped the customer to overcome data challenges encountered with modern cybersecurity.
>
> **[14:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=886)** It also helps them integrate alerts from multiple locations in a single place.
>
> **[14:52](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/integrate-security-solutions-and-data-sources?u=76281980&t=892)** So you can also go ahead and implement integrated security solutions into your environment and reap the benefits for the same.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (23), go to (8), select the (6), navigate to (1), open the (1)
> **Env Vars:** waf (14), siem (4), add (3), aws (2), mma (2)
> **Code Keywords:** public (7), let (4), default. (2), this. (1), default, (1)
> **Prerequisites:** install (4), configure (3), setup (2)
> **CLI Commands:** find (3), aws (2), node (1)
> **Definitions:** is a  (4)
> **Tools:** azure portal (1), powershell (1)
> **Best Practices:** recommended (2)

#### Configuring workflow automation
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=0)** - [Instructor] Configure Workflow automation.
>
> **[0:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=3)** Security experts recommend including automation to your security solutions to reduce overheads and enhance consistency as well as to avoid human errors that can be caused due to manual interventions.
>
> **[0:18](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=18)** Workflow automation feature enables users to trigger Logic apps, providing notifications for security alerts, recommendations, and changes made to the regulatory compliance.
>
> **[0:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=32)** Logic apps help in triggering automated alert emails, which can be directed to specific users in your organization.
>
> **[0:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=40)** Let's learn how to create a Logic app and define the conditions where the alerts can be triggered automatically.
>
> **[0:48](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=48)** From Defender for Cloud sidebar, select Workflow automation.
>
> **[0:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=53)** This page allows users to create new automation rules as well as enable, disable or delete any existing rule.
>
> **[1:02](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=62)** I have a automation rule created.
>
> **[1:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=65)** If I select this check box, I get an option to disable this rule, which is enabled by default.
>
> **[1:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=73)** Or I can even delete this rule.
>
> **[1:15](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=75)** Now, to add a new Workflow automation, click on add Workflow automation feature.
>
> **[1:22](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=82)** A new automation pain opens on clicking add Workflow automation.
>
> **[1:26](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=86)** Give a name to your automation.
>
> **[1:29](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=89)** Add a description.
>
> **[1:33](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=93)** Select the subscription where you want the automation rule to set up.
>
> **[1:38](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=98)** Choose a resource group. Here I will choose automation.
>
> **[1:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=103)** Now, trigger condition.
>
> **[1:45](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=105)** Choose the trigger condition that will automatically trigger the configured action.
>
> **[1:51](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=111)** Here, I have three options.
>
> **[1:53](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=113)** Either I can choose a security alert or recommendation or regulatory compliance standards.
>
> **[2:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=120)** I'll choose the security alert.
>
> **[2:03](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=123)** Define the alert name condition field.
>
> **[2:06](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=126)** This I button shows the reference list of alerts.
>
> **[2:11](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=131)** For now, I'll choose malicious as my alert name.
>
> **[2:17](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=137)** Under severity, you can choose all the severities, high, medium, low and informational.
>
> **[2:24](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=144)** For now, I'll choose only high, medium and low as the alert severity.
>
> **[2:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=150)** Now you can configure the Logic app that will be triggered.
>
> **[2:34](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=154)** We can either choose an existing Logic app or create a new logic app by visiting this page.
>
> **[2:40](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=160)** We have a pre-created Logic app.
>
> **[2:43](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=163)** I'll select that Logic app.
>
> **[2:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=166)** If you wish to learn more about creating Logic apps, please refer to the LinkedIn course, Azure Logic App.
>
> **[2:54](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=174)** Click create and your Workflow automation Logic is ready.
>
> **[3:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=180)** As you can see, the changes may take up to five minutes to be reflected.
>
> **[3:05](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=185)** I have created a new automation rule.
>
> **[3:09](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=189)** By default, you can see the status is enabled.
>
> **[3:13](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=193)** I can choose the Logic app and click on disable.
>
> **[3:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=196)** It will disable my Workflow automation.
>
> **[3:19](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=199)** So you see the status has been changed to disable.
>
> **[3:23](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=203)** I can even delete this Logic app by using the delete button.
>
> **[3:28](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=208)** So the Logic app creation has been deleted.
>
> **[3:32](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=212)** In this tutorial, you learned about creating Workflow automation.
>
> **[3:36](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=216)** The Workflow automation notifies relevance stakeholders about the alerts being generated.
>
> **[3:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/configuring-workflow-automation?u=76281980&t=222)** It is aimed at improving your security by ensuring quick, consistent and timely response, thereby improving your organization's security posture.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), let (1), default. (1), default, (1)
> **UI Navigation:** click on (2), select the (1)
> **Prerequisites:** configure (2), set up (1)
> **Speakers:** - [instructor] (1)


### 7. Conclusion

#### More about Azure security
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/more-about-azure-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/more-about-azure-security?u=76281980&t=0)** - Security is integrated into every aspect of Azure.
>
> **[0:04](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/more-about-azure-security?u=76281980&t=4)** Azure offers unique security advantages derived from global security intelligence, sophisticated customer-facing controls, and a secure hardened infrastructure.
>
> **[0:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/more-about-azure-security?u=76281980&t=16)** In this course, we did explore all the areas of one of the major services in Azure security, namely Microsoft Defender for Cloud, and learned how it can help us in defending our cyberspace.
>
> **[0:30](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/more-about-azure-security?u=76281980&t=30)** Now that you all are well versed with the concept of Microsoft Defender for Cloud, it's time to take the next step to further develop your knowledge in the field of Azure security.
>
> **[0:42](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/more-about-azure-security?u=76281980&t=42)** You can visit Microsoft doc's link.
>
> **[0:46](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/more-about-azure-security?u=76281980&t=46)** This page takes you through the concepts of cloud security.
>
> **[0:50](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/more-about-azure-security?u=76281980&t=50)** It also directs you towards using best practices and recommendations to secure your cloud deployments.
>
> **[0:57](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/more-about-azure-security?u=76281980&t=57)** If you're planning to write your SC-200, that is Microsoft Security Operations Analyst exam in the new future, congratulations, you have already covered approximately 30% of the exam topics while going through my course on Microsoft Defender for Cloud.
>
> **[1:16](https://www.linkedin.com/learning/securing-cloud-resources-with-microsoft-defender-for-cloud/more-about-azure-security?u=76281980&t=76)** Feel free to connect with me on my LinkedIn profile and share how you applied, what you learned in this course.

> [!info]- Semantic Content
>
> **Speakers:** - security (1)


## Instructor

- [[Stuti Kaushal]]

## Skills Covered

- Microsoft Defender
- Cloud Computing
- Microsoft Azure

## Path Context

### In [[Optimizing Enterprise Security and Productivity Using Microsoft 365]]
← [[Microsoft Entra ID Fundamentals]] | **6 of 11** | [[Windows 10- Security]] →

## Appears In

- [[Optimizing Enterprise Security and Productivity Using Microsoft 365]]

## Related Courses

_Courses sharing skills:_

- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Azure DevOps for Beginners]] — Microsoft Azure
- [[Azure Storage Essential Training (2021)]] — Microsoft Azure
- [[Building a Web Application on Microsoft Azure]] — Microsoft Azure

---

[↑ Back to top](#)