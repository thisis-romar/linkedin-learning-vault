---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: choosing-a-cloud-platform-for-developers-aws-azure-and-gcp
url: "https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp"
level: Beginner
updated: 1/12/2022
learners: 3582
skills:
  - Amazon Web Services (AWS)
  - Cloud Development
  - Microsoft Azure
  - Google Cloud Platform (GCP)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQG6Sb7o1gAkoA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118520291?e=2147483647&amp;v=beta&amp;t=AGKKjuZt4o8FxwETYgEF7WF8RVaTlocVCll9C9EvKaA"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Getting Started with Cloud Development]]'
next_courses:
  - '[[Learning Amazon Web Services Aws For Developers]]'
path_nav: '[{"path":"Getting Started with Cloud Development","position":1,"total":4,"prev":null,"next":"Learning Amazon Web Services Aws For Developers"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/amazon-web-services-aws
  - skill/cloud-development
  - skill/microsoft-azure
  - skill/google-cloud-platform-gcp
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Choosing%20A%20Cloud%20Platform%20For%20Developers%20Aws%20Azure%20And%20Gcp.md)

![Choosing A Cloud Platform For Developers Aws Azure And Gcp](https://media.licdn.com/dms/image/v2/C4E0DAQG6Sb7o1gAkoA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118520291?e=2147483647&amp;v=beta&amp;t=AGKKjuZt4o8FxwETYgEF7WF8RVaTlocVCll9C9EvKaA)

# Choosing A Cloud Platform For Developers Aws Azure And Gcp

> Migrating your applications to the cloud? Review the benefits and challenges of developing in the cloud with the top three cloud service providers: Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Instructor Xian Ke helps you choose the right provider for your product and technology needs. Learn how to establish the goals and timeline for your cloud migration. Review ho

> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp) | Beginner | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Considering the cloud choices
  - What you should know
- [**1. On-Premise vs. Cloud Services**](#1-on-premise-vs-cloud-services) (3 videos)
  - Solutions before cloud computing
  - Evaluate urgency of cloud migration
  - Establish goals for cloud migration
- [**2. Baseline Functionality Available in the Cloud**](#2-baseline-functionality-available-in-the-cloud) (4 videos)
  - Current major cloud providers
  - Storing data and files
  - Executing code
  - Analytics and insights
- [**3. Historical Strengths of Three Major Cloud Providers**](#3-historical-strengths-of-three-major-cloud-providers) (3 videos)
  - Amazon Web Services
  - Google Cloud Platform
  - Microsoft Azure
- [**4. Compliance in the Cloud**](#4-compliance-in-the-cloud) (3 videos)
  - Business regulations overview
  - GDPR (EU data regulations)
  - HIPAA (US health care regulations)
- [**5. Human Resources for the Cloud**](#5-human-resources-for-the-cloud) (3 videos)
  - Assess current skills and needs
  - Evolve roles and expertise
  - Prioritize learning and testing
- [**6. Prototype for Your Needs**](#6-prototype-for-your-needs) (3 videos)
  - Evaluate specialized functionality
  - Gather insights through implementation
  - Image-to-text prototype example
- [**7. Design for Adaptability**](#7-design-for-adaptability) (3 videos)
  - Switch cloud providers as needed
  - Containers for your code
  - Streamline cloud processes
- [**Conclusion**](#conclusion) (1 videos)
  - Continuing the cloud platform journey

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Considering the cloud choices
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980&t=0)** - [Xian] You keep hearing about the cloud and about companies building their software projects on the cloud.
>
> **[0:05](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980&t=5)** Should you be moving to the cloud too?
>
> **[0:08](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980&t=8)** There's Amazon Web Services, Microsoft Azure, Google Cloud Platform.
>
> **[0:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980&t=12)** So many choices and tools.
>
> **[0:14](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980&t=14)** How do you choose?
>
> **[0:15](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980&t=15)** How do you use the tools?
>
> **[0:18](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980&t=18)** In this course, we'll walk through the options available for developing in the cloud.
>
> **[0:22](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980&t=22)** Along the way, we'll demystify concepts like artificial intelligence, serverless, and docker as they apply to the cloud.
>
> **[0:31](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980&t=31)** We'll also discuss related topics, such as compliance and prototyping.
>
> **[0:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980&t=35)** Hi, I'm Xian Ke.
>
> **[0:37](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980&t=37)** This course contains many insights from my experiences working on software projects for Fortune 500 enterprises and for Silicon Valley startups.
>
> **[0:45](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980&t=45)** My goal is to help you navigate the ever-changing technology landscape and to make good decisions for your software development projects.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (1), make (1)
> **Analogies:** such as (1)
> **Speakers:** - [xian] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/what-you-should-know-14484241?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/what-you-should-know-14484241?u=76281980&t=0)** - [Instructor] To get the most from this course, you should have an understanding of how your existing software projects have been developed.
>
> **[0:06](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/what-you-should-know-14484241?u=76281980&t=6)** You should have an interest in learning more about how newer software tools can benefit your current and future projects.
>
> **[0:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/what-you-should-know-14484241?u=76281980&t=12)** You should also be open to change and to different ways of reaching your organization's goals and objectives.
>
> **[0:17](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/what-you-should-know-14484241?u=76281980&t=17)** Successful projects can require a lot of experimentation.
>
> **[0:20](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/what-you-should-know-14484241?u=76281980&t=20)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), let (1)
> **Speakers:** - [instructor] (1)


### 1. On-Premise vs. Cloud Services

> [↑ Back to Table of Contents](#table-of-contents)

#### Solutions before cloud computing
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=0)** - [Instructor] To better understand how Cloud Computing can benefit your projects, it's worth reviewing the technology solutions that existed before the current generation of Cloud Services arose.
>
> **[0:11](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=11)** The term Cloud really just refers to the internet.
>
> **[0:15](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=15)** One analogy we can use to describe this transition to the Cloud is email.
>
> **[0:20](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=20)** Back when internet access speeds were slower and mobile phones did not exist, people accessed their emails through command line terminals or desktop applications.
>
> **[0:29](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=29)** Today we have faster internet and more online storage.
>
> **[0:33](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=33)** It's common for email applications to reside in the cloud.
>
> **[0:36](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=36)** And for all of our email messages to be easily searchable from wherever we are.
>
> **[0:41](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=41)** If we were building a web application in the 1990s, we might decide to host the application on a computer server that resides On-Premise.
>
> **[0:49](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=49)** This computer would physically sit inside our office, serving up data and web pages upon user request.
>
> **[0:56](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=56)** We will be responsible for maintaining this computer, updating software and hardware for reliability and security.
>
> **[1:03](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=63)** Alternatively, instead of keeping a computer server On-Premise in our office, our web app could be hosted Offsite within a farm of computer servers.
>
> **[1:11](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=71)** We could connect to and update this app through the internet.
>
> **[1:15](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=75)** We might decide to rent one physical machine for our app, or to share a machine with other apps.
>
> **[1:21](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=81)** If our Web App becomes more popular, we would need to make use of multiple machines and additional software to distribute the workload of incoming user requests.
>
> **[1:30](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=90)** Cloud Computing extends upon the server farm concepts to allow us to think less about the physical machines.
>
> **[1:36](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=96)** Management of the physical machines is delegated to a team of people responsible for keeping the electricity on and a computer's running a high reliability.
>
> **[1:45](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=105)** As the application developer owner, we're still responsible for operational configurations and of course, for apps and user experience.
>
> **[1:54](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=114)** The current generation of Cloud Computing Solutions was spurred in part by Amazon's 2006 introduction of Elastic Compute Cloud, EC2, and simple storage services, S3.
>
> **[2:07](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=127)** With EC2, people could rent and configure virtual computing instances for hosting apps.
>
> **[2:13](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=133)** With S3, people could store files of any size without thinking about hard drive limitations.
>
> **[2:19](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=139)** By watching this video, you've expressed interest in using the latest Cloud Computing Solutions from Amazon, Microsoft, Google, and others.
>
> **[2:28](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=148)** The decision to use one of these Cloud providers is not always super clear.
>
> **[2:32](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=152)** We will talk more about this next.

> [!info]- Semantic Content
>
> **Code Keywords:** extends (1), super (1)
> **Env Vars:** ec2 (2)
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **Definitions:** refers to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Evaluate urgency of cloud migration
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=0)** - [Instructor] Technology is full of buzzwords and futuristic ideas.
>
> **[0:04](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=4)** Remember when Google Glass appeared and we envisioned a future where everyone walked around town with cameras and computers on their faces?
>
> **[0:11](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=11)** Just because the technology exists doesn't mean that we must change everything to make use of it in the next 24 hours.
>
> **[0:16](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=16)** Keep this in mind with cloud services as well.
>
> **[0:19](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=19)** Take some time to understand the potential benefits and challenges, including to test on prototypes or limited parts of the system.
>
> **[0:25](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=25)** There may be lots of nuances that relate to your specific product and business.
>
> **[0:29](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=29)** Let's consider some examples of companies who made significant decisions related to the cloud.
>
> **[0:34](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=34)** Netflix operates a huge streaming video service.
>
> **[0:38](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=38)** In 2008, they were shipping a lot of DVDs.
>
> **[0:41](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=41)** A database issue in their data center led to an outage that prevented DVDs from being shipped for three days.
>
> **[0:47](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=47)** This outage led them to start a seven-year journey to migrate to the cloud for better reliability.
>
> **[0:53](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=53)** Netflix did a lot of experimentation and testing along the way.
>
> **[0:56](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=56)** Finishing the migration also didn't eliminate all service outages, but Netflix was able to significantly grow their user base while maintaining a high quality of service.
>
> **[1:06](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=66)** At this point, I've heard that it'd be less expensive for Netflix to run their own data centers again, instead of relying on a cloud provider.
>
> **[1:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=72)** However, for Netflix, ongoing reliability and ease of use are more important than cost savings so they're continuing to run on the cloud.
>
> **[1:20](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=80)** Dropbox, the online storage service, made a different decision.
>
> **[1:24](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=84)** Dropbox started off in 2007 using cloud storage for user files.
>
> **[1:28](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=88)** After a lot of growth, Dropbox took on an infrastructure optimization project in 2015 to migrate most of its users' files to its own custom servers and data centers away from the cloud.
>
> **[1:39](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=99)** This unusual decision led to some operational cost savings for Dropbox in about two years.
>
> **[1:44](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=104)** It's also an example of how different companies can think differently about the cloud.
>
> **[1:49](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=109)** By the way, Dropbox still uses a cloud for its users in Europe and other places that are farther away from Dropbox's own data centers.
>
> **[1:56](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=116)** There are also companies like Facebook that have always managed their own infrastructure, including building out massive data centers.
>
> **[2:02](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=122)** When Facebook has acquired companies, they've taken on migration projects to host products on the main Facebook infrastructure, Instagram and WhatsApp are two acquire products that migrated from cloud providers to Facebook's custom infrastructure.
>
> **[2:16](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=136)** A potential downside of such a decision would be that service outages can affect multiple products.
>
> **[2:21](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=141)** Next we'll consider how you can establish goals that best fit your organization's infrastructure needs.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Establish goals for cloud migration
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=0)** - [Instructor] If your company already has existing infrastructure, you'll have various data points on its functionality, reliability, scalability, security, costs, and ease of use.
>
> **[0:10](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=10)** Perhaps the best reason for migrating infrastructure is that the previous technology solution has become a bottleneck for product and business growth.
>
> **[0:17](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=17)** For example, too many outages that are affecting product quality and customer retention or scaling issues that are preventing new customers from being onboarded smoothly enough or functionality and ease of use issues that are adversely affecting the speed of product development.
>
> **[0:32](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=32)** I've heard security cited as a reason both to move toward the cloud and to move away from the cloud.
>
> **[0:37](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=37)** In my past life, I worked at Microsoft on a product that encrypted hard drive data.
>
> **[0:42](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=42)** This product addressed the security concern that anyone with physical access to computers and servers could walk away with sensitive information.
>
> **[0:49](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=49)** I then worked at Google on a product that collected and analyzed web traffic data and stored it on Google servers.
>
> **[0:55](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=55)** Some security departments expressed concern that to use this product, a third party company would need to store their sensitive traffic data.
>
> **[1:03](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=63)** My point here is that any change can trigger potential fears.
>
> **[1:06](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=66)** Just as we as consumers have gotten comfortable with storing our credit card information at online sites like Amazon, we can have a reasonable degree of trust that the current generation of top cloud providers are working to minimize the downside risks of their products.
>
> **[1:20](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=80)** For those of us who lack an unlimited budget, cost is another factor to consider.
>
> **[1:25](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=85)** Many startups rely on cloud providers to build out new products at minimal costs.
>
> **[1:29](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=89)** But I also have to caution companies who say that they wish to move the cloud simply because they think it will lower their costs.
>
> **[1:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=95)** A migration can be a large undertaking with its own costs in human resources, time and quality control.
>
> **[1:41](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=101)** Operating on cloud can also be more expensive depending on the situation.
>
> **[1:46](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=106)** In the long-term, growth factors such as functionality, reliability, scalability and ease of use could be more important reasons to change existing infrastructure.
>
> **[1:55](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=115)** A well-functioning cloud solution can help create a more efficient organization.
>
> **[2:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=120)** I also believe it's helpful to consider technology changes in the context of an organization's broader situation.
>
> **[2:07](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=127)** While serving as a technology consultant, I've recommended that a small company keep going on their status quo non-cloud infrastructure until the company's customer needs can more clearly justify new infrastructure investments, including a migration to the cloud.
>
> **[2:22](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=142)** The quality of customer service from the cloud providers can become influential in how your company can best make use of the cloud.
>
> **[2:29](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=149)** Large companies, such as Netflix and Spotify, have developed close working relationships with their cloud providers so that unexpected issues can be resolved more quickly.
>
> **[2:38](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=158)** Smaller companies can also benefit from advice and materials, including tips on how to optimize costs.
>
> **[2:44](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=164)** Once you prioritize your goals, cloud providers and others can help you execute on them effectively.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)


### 2. Baseline Functionality Available in the Cloud

> [↑ Back to Table of Contents](#table-of-contents)

#### Current major cloud providers
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=0)** - [Instructor] Currently in the United States, the top-three cloud providers are Amazon Web Services, Microsoft Azure and Google Cloud Platform.
>
> **[0:08](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=8)** Other cloud providers include IBM, Oracle and Alibaba.
>
> **[0:13](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=13)** We'll be going over the baseline functionality available in the Amazon, Microsoft and Google clouds.
>
> **[0:19](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=19)** Note that we don't have to choose one cloud provider for all of our functionality needs.
>
> **[0:23](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=23)** For example, we can use one provider for storage and another for running code.
>
> **[0:28](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=28)** Each provider has a number of options to store your data and files.
>
> **[0:32](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=32)** If you already use databases in your existing infrastructure, there's a matching option in the cloud.
>
> **[0:38](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=38)** SQL databases are popular for storing data into structured tables.
>
> **[0:42](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=42)** Cloud options for SQL databases include Amazon Aurora, Azure SQL Database and Google Cloud SQL.
>
> **[0:50](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=50)** Not all data needs to be stored in databases.
>
> **[0:53](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=53)** One of the most popular cloud services allows your applications to store objects, such as text files, image files, or video files into buckets and folders.
>
> **[1:02](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=62)** The relevant cloud services include Amazon S3, Azure Blob Storage, and Google Cloud Storage.
>
> **[1:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=69)** Any computer system that does anything interesting requires some code to be executed.
>
> **[1:14](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=74)** If you're moving an existing application from your own physical machines to the cloud, virtual machines allow you to do the migration without rewriting code.
>
> **[1:22](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=82)** Offerings include Amazon EC2, Azure Virtual Machines and Google Compute Engine.
>
> **[1:28](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=88)** If you are building or rewriting applications and want to think even less about infrastructure, there are Platform as a Service solutions to operate one layer above virtual servers.
>
> **[1:38](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=98)** As an application developer, I like these solutions because they can simplify a lot of infrastructure decisions.
>
> **[1:44](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=104)** They help me be more efficient.
>
> **[1:46](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=106)** Such solutions include Google App Engine, Microsoft App Service and Amazon Elastic Beanstalk.
>
> **[1:52](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=112)** I've also used Heroku, which is built on top of Amazon EC2.
>
> **[1:57](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=117)** Later on this course, we'll talk more about the other options for running code, such as serverless and containers.
>
> **[2:03](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=123)** Once you have code running and it's accessing collecting data, you almost always need to do some data analysis to surface insights.
>
> **[2:11](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=131)** The current generation of cloud providers include various tools that address challenges with the rapidly increasing tide of data, so-called big data.
>
> **[2:19](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=139)** When you need to make predictions or recommendations based on collected data, machine learning methods can become useful.
>
> **[2:25](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=145)** These methods are a part of the larger field of artificial intelligence.
>
> **[2:30](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=150)** It's a term that describes how computers can add value to human tasks.
>
> **[2:34](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=154)** The major cloud providers include artificial intelligence tools, such as machine learning or visual recognition.
>
> **[2:40](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=160)** Each cloud provider also has basic administrative tools, such as user management, billing management and monitoring.
>
> **[2:47](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=167)** Cloud services have grown more complex over the years, and it's up to us to simplify things and figure out what tools are most relevant for our needs.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4), ec2 (2), ibm (1)
> **Analogies:** such as (4), for example (1)
> **CLI Commands:** make (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Storing data and files
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=0)** - [Instructor] We all know what files and directories look like on our local computers.
>
> **[0:04](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=4)** What would it look like on the cloud?
>
> **[0:06](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=6)** Amazon S3 short for Simple Storage Service popularize the concept of reliable cloud-based storage, that charges developers a few cents per gigabyte of objects and fractions of a cent per gigabyte of download.
>
> **[0:19](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=19)** Dropbox, build their synchronized file service on S3 and use this successfully for many years.
>
> **[0:26](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=26)** Amazon S3 and Google Cloud Storage use similar terminology for their object storage solutions.
>
> **[0:32](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=32)** Files are organized into buckets and folders within buckets.
>
> **[0:36](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=36)** There are no practical limits on how many objects you can store.
>
> **[0:39](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=39)** You can even store HTML, CSS, and image files into a bucket and configure it to serve a public website made out of static pages.
>
> **[0:48](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=48)** Microsoft Azure uses slightly different terminology for their Azure Storage.
>
> **[0:52](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=52)** You create a storage account and then create a container within that account that can be filled with blobs.
>
> **[1:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=69)** Blobs can be any file you want to upload and can also be made public and accessible through the web.
>
> **[1:22](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=82)** Data that store point of files can also be organized into databases of rows and columns.
>
> **[1:28](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=88)** For example, each row of a database table can refer to a register user for an application and each column can contain data on the user's preferences.
>
> **[1:37](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=97)** Databases have seen continue innovation in recent years as demands increase on the volume of data that needs to be stored in a how quickly that data can be accessed and analyzed.
>
> **[1:47](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=107)** If you have existing applications that use relational SQL Databases, it's simplest to migrate to the same type of database in the cloud.
>
> **[1:55](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=115)** Cloud options for SQL Databases include: Amazon Aurora, Azure SQL Database and Google Cloud SQL.
>
> **[2:02](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=122)** They have all the crane functionality you're used to.
>
> **[2:05](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=125)** Some applications that specialized requirements on their databases.
>
> **[2:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=129)** In 2006, a team at Google published a research paper describing how they had built their own distributed data store called Bigtable.
>
> **[2:17](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=137)** Bigtable could store millions of gigabytes of web pages across thousands of machines.
>
> **[2:21](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=141)** It helps spurred the development of other distributed non-relational databases, so-called NoSQL Databases.
>
> **[2:28](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=148)** Today, Google Cloud Bigtable is available more broadly.
>
> **[2:31](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=151)** Though it's likely overkill for a vast majority of applications.
>
> **[2:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=155)** Other non-relational database options include: Amazon DynamoDB, Azure Cosmos DB, and Google Cloud Firestore.
>
> **[2:44](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=164)** If you're not sure whether to go with a SQL or NoSQL Database, I would suggest going with a SQL Database to start.
>
> **[2:50](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=170)** The knowledge to access data using SQL is much more widespread and meets the needs for most use cases.
>
> **[2:57](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=177)** I've used the NoSQL DynamoDB storing a mobile apps usual lock data and found it a bit too late that it wasn't really possible to do the types of craze I wanted with that NoSQL Database.
>
> **[3:07](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=187)** Others have also encountered similar challenges and decided to migrate the data to SQL Database for better ease of use and sometimes lower costs.

> [!info]- Semantic Content
>
> **Env Vars:** sql (8), html (1), css (1)
> **Code Keywords:** public (2), include: (2), static (1), continue (1)
> **Definitions:** short for (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Executing code
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=1)** - [Instructor] In the cloud, we have numerous options for running code written in various programming languages.
>
> **[0:06](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=6)** Currently popular programming languages and frameworks include Node.js, JavaScript and Python.
>
> **[0:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=12)** Of course, we're definitely not limited to using just a few languages or tools.
>
> **[0:17](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=17)** Anything you can build and deploy that resides within on-premises computers can be set up in the cloud by recreating the same environment in a virtual machine.
>
> **[0:26](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=26)** The key idea is that you can rent the computing power you need without having to buy physical hardware.
>
> **[0:32](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=32)** Let's take a look at the variety of computing environments available to us.
>
> **[0:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=35)** We'll use Azure Virtual Machines for demonstration purposes.
>
> **[0:39](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=39)** Amazon EC2 and Google Compute Engine have similar offerings.
>
> **[0:44](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=44)** We name our virtual machine instance and specify which region of the world it should be located.
>
> **[0:49](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=49)** Locating an instance in a region allows for faster response times from that region.
>
> **[0:54](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=54)** We can choose an operating system among many variants of Windows or Linux.
>
> **[0:58](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=58)** These operating systems exist on pre-built disk images.
>
> **[1:03](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=63)** We can go with the default configuration for computing horsepower, or choose to change specifications like CPU or GPU, memory, and more.
>
> **[1:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=72)** If all these choices are feeling a bit overwhelming, I can empathize.
>
> **[1:16](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=76)** Infrastructure configuration can be simplest if you already have a reference point as to which competing environment can work well.
>
> **[1:23](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=83)** For example, based on your existing on-premises solution.
>
> **[1:26](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=86)** You can always increase horsepower later.
>
> **[1:28](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=88)** As an application developer, I like to think even less about infrastructure decisions and run my code on higher level platforms.
>
> **[1:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=95)** These Platform as a Service options include: Google App Engine, Amazon Elastic Beanstalk, and Microsoft App Service.
>
> **[1:44](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=104)** A few years ago, I needed to migrate an old static website to a new provider.
>
> **[1:48](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=108)** I chose Google App Engine because of simplicity.
>
> **[1:51](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=111)** Up to a certain traffic level, hosting the site was free.
>
> **[1:55](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=115)** I've also used Heroku for applications written in Node.js and Ruby on Rails.
>
> **[1:59](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=119)** Heroku is simple and cost-effective for smaller applications and prototypes, though gets pricier as your usage scales.
>
> **[2:07](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=127)** Another way to run code in the cloud is to what is called serverless computing.
>
> **[2:11](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=131)** Basically, serverless lets you run a chunk of code whenever an event occurs.
>
> **[2:16](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=136)** Serverless architecture doesn't work for everything.
>
> **[2:19](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=139)** For example, it doesn't currently work for processes that need to run for longer than a few minutes.
>
> **[2:24](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=144)** However, serverless can be very cost effective and efficient to build, and it's a default architecture for newer applications such as handling voice commands from Amazon Alexa or Google home devices.
>
> **[2:36](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=156)** Serverless solutions include AWS Lambda, Google Cloud Functions and Azure Cloud Functions.
>
> **[2:42](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=162)** Finally, the idea of putting code into lightweight containers has become more popular in recent years because of the ability for these containers to be run from many environments.
>
> **[2:51](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=171)** We'll talk more about containers later on in this course.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2), python (1), ruby (1), rails (1), aws (1)
> **Code Keywords:** let (1), include: (1), static (1), lambda (1), finally, (1)
> **Env Vars:** ec2 (1), cpu (1), gpu (1), aws (1)
> **Analogies:** for example (2), such as (1)
> **File Paths:** node.js (2)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Analytics and insights
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=0)** - [Instructor] Historically, web servers such as Apache generated logs that stored every page view as a line in a text file containing the time of visit, the user's IP address, and so on.
>
> **[0:11](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=11)** To make it easier to gather insights, tools like Google Analytics evolved to collect tracking data from web and mobile apps and to automatically generate relevant reports.
>
> **[0:21](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=21)** The digital world has grown more complex as we gather more and more data from all kinds of places, including, but not limited to, the web.
>
> **[0:29](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=29)** As the size of the data increases to a thousand gigabytes and one million gigabytes, it becomes unwieldy and slow to use regular databases to handle these terabytes and petabytes of data.
>
> **[0:40](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=40)** The cloud tools for data warehousing and analysis offered by Amazon, Microsoft, and Google exist in a wider ecosystem of open-source and third-party tools.
>
> **[0:50](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=50)** If you find your existing databases sufficient, then there's not an urgent need to make use of so-called big data solutions.
>
> **[0:57](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=57)** New solutions generally evolve because developers and business folks encounter roadblocks and challenges with previously existing solutions.
>
> **[1:05](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=65)** Data warehouses are used to store massive amounts of historical data for later querying and analysis.
>
> **[1:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=72)** Options include Amazon Redshift, Google BigQuery, and Azure SQL Data Warehouse.
>
> **[1:19](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=79)** Providers of these solutions compete with each other on performance, cost, and ease of use.
>
> **[1:24](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=84)** The marketing of these solutions can be confusing and/or misleading, so objective perspectives are helpful.
>
> **[1:30](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=90)** Third-party data warehousing solutions, such as Snowflake, have also gotten positive reviews from their customers.
>
> **[1:36](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=96)** Real-time data streaming and processing is another area of recent innovation.
>
> **[1:41](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=101)** Options here include Amazon Kinesis, Google Cloud Dataflow, and Azure Stream Analytics.
>
> **[1:48](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=108)** Some of these solutions are inspired by open-source software, such as Apache Kafka, a system originally developed at LinkedIn to handle vast amounts of real-time data, such as site events and mail messages.
>
> **[2:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=120)** Other analysis tools provide easier querying and visualization abilities.
>
> **[2:05](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=125)** These include Google Data Studio, Amazon Athena, and Azure Analysis Services.
>
> **[2:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=132)** In general, I would suggest going beyond the big three technology companies for data visualization.
>
> **[2:17](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=137)** Perhaps it's best to develop a custom implementation based on your specific product and business needs.
>
> **[2:23](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=143)** Companies such as Tableau and Looker have solutions that have become popular in recent years.
>
> **[2:28](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=148)** Another aspect of data analysis involves making predictions or recommendations based on collected data.
>
> **[2:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=155)** Options for building your own custom predictive models include Google Cloud Machine Learning Engine, Amazon Machine Learning, and Azure Machine Learning.
>
> **[2:44](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=164)** My perspective is that machine learning in its current state is still highly prone to trial and error, and its effectiveness greatly depends on the quality of the collected data.
>
> **[2:53](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=173)** It's easiest to utilize pre-built machine learning and artificial intelligence solutions that best fit your specific product and business needs.
>
> **[3:01](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=181)** For example, image and text recognition solutions from Amazon, Google, and Microsoft, such as Amazon Rekognition, Google Cloud Translation, and Azure Computer Vision.
>
> **[3:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=192)** We'll talk more about prototyping specialized functionality later in this course.

> [!info]- Semantic Content
>
> **Analogies:** such as (6), for example (1)
> **CLI Commands:** apache (2), make (2), find (1)
> **Env Vars:** sql (1)
> **Cross-References:** later in (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)


### 3. Historical Strengths of Three Major Cloud Providers

> [↑ Back to Table of Contents](#table-of-contents)

#### Amazon Web Services
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=0)** - [Instructor] Amazon was the first company to make cloud infrastructure available to developers at other companies.
>
> **[0:06](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=6)** This head start allow Amazon to have the largest share of the cloud computing market as of 2019.
>
> **[0:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=12)** Two of the earliest Amazon Web Services offerings are still among their most well-known, Amazon Simple Storage Service, S3, and Amazon Elastic Compute Cloud, EC2.
>
> **[0:24](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=24)** S3 is like the developer's version of Dropbox that can automatically scale across millions of gigabytes.
>
> **[0:30](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=30)** S3 is so well used that in the few times when there was an S3 service outage, dozens of popular services, including Airbnb, Medium and Slack also experienced issues.
>
> **[0:41](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=41)** EC2 allows teams to rent machine instances that are analogous to setting up physical machines, but without the physical effort or upfront hardware purchases.
>
> **[0:50](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=50)** If you want to migrate existing on-premises software to the cloud, a basic approach is called lift and shift.
>
> **[0:57](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=57)** This approach requires minimal or no modifications to the existing on-premises software, just analogous virtual instances, such as EC2 instances.
>
> **[1:07](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=67)** AWS Lambda is a service that runs code in response to events.
>
> **[1:11](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=71)** When compare with EC2, Lambda is less costly to maintain and operate.
>
> **[1:16](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=76)** However, Lambda is not suitable for code that runs longer than a few minutes.
>
> **[1:20](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=80)** And the migration of on-premises applications with Lambda will likely require significant code rewrites and testing.
>
> **[1:27](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=87)** Because Amazon was the first to market with Lambda before similar offerings from Microsoft and Google, some people use Lambda synonymously with serverless and microservices, words that basically describe a more modular, lightweight way of implementing applications.
>
> **[1:44](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=104)** AWS also has proprietary offerings, such as the Aurora Database that may be beneficial to users.
>
> **[1:50](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=110)** Amazon claims that Aurora is up to five times faster than standard MySQL databases, and three times faster than PostgresSQL databases, at a price that's 1/10 that of a commercial database.
>
> **[2:03](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=123)** That sounds great, and some companies are indeed planning to migrate to Aurora.
>
> **[2:07](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=127)** However, be sure to benchmark such a database against your own applications before deciding to migrate.
>
> **[2:14](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=134)** Some users have seen higher per hour pricing with Aurora compared to their previous solution, a cost that can sometimes be justified by database performance gains.
>
> **[2:24](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=144)** In general, if your existing database is delivering on the product and user experience requirements you want, migration for the sake of migration is probably not useful.
>
> **[2:34](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=154)** Over the years, Amazon has developed an ecosystem around their cloud offerings, partly because it's complex and overwhelming to wade through all the AWS options and configurations.
>
> **[2:45](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=165)** An annual conference, AWS re:Invent, started in 2012.
>
> **[2:49](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=169)** Amazon opened free-to-visit pop-up lofts in San Francisco, New York City, and a few other international cities to help guide developers.
>
> **[2:57](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=177)** Amazon launches new cloud features and changes at a fast pace, so there's always something new to consider.
>
> **[3:03](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=183)** Keep in mind though that simply the availability of a new tool doesn't mean that the tool is best-in-class or something that would be a great fit for your use cases.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (4), aws (4)
> **Code Keywords:** lambda (6), require (1)
> **CLI Commands:** aws (4), make (1), mysql (1)
> **Analogies:** such as (2), analogous to (1)
> **Definitions:** is called (1), is a  (1)
> **Tools:** slack (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Google Cloud Platform
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=0)** - [Instructor] Google has a reputation for designing simple-to-use consumer products.
>
> **[0:04](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=4)** They're technically advanced under the hood.
>
> **[0:06](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=6)** When the millennial Snapchat founder started to build their app in 2011, they felt too overwhelmed by Amazon Web Services, and so use Google App Engine instead.
>
> **[0:16](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=16)** Today, App Engine is part of the Google Cloud Platform, and continues to offer a platform as a service developer experience that requires less infrastructure configuration than creating virtual machines.
>
> **[0:28](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=28)** Because of the reduced configuration requirements, App Engine is also marketed as a serverless platform.
>
> **[0:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=35)** Google started their Annual Cloud Conference in 2016 to better connect with developers in their ecosystem.
>
> **[0:41](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=41)** Historically, despite Google's popularity with consumers, their cloud developer ecosystem has been slower to build up.
>
> **[0:48](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=48)** As such, data from 2018 showed that there are fewer enterprises who are on Google's Cloud compare with Amazon and Microsoft.
>
> **[0:56](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=56)** One way that Google has been differentiating themselves is by their investments in artificial intelligence and machine learning.
>
> **[1:03](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=63)** These are computational approaches that can enable applications to tackle business and research problems an behalf of humans.
>
> **[1:10](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=70)** Google created custom machine learning hardware called Tensor Processing Units, TPUs.
>
> **[1:15](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=75)** This hardware is used to process workloads for search, street view, photos and translate.
>
> **[1:21](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=81)** TPUs were also used to play the game, "Go" against humans.
>
> **[1:25](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=85)** The TPU-enabled software won against the best human "Go" players in the world before retiring in 2017.
>
> **[1:32](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=92)** Today, anyone can rent TPU hardware through Google's Cloud.
>
> **[1:36](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=96)** For those interested in artificial intelligence, and machine learning, Google Colab is a popular tool that allows anyone to create, and share notebooks, containing educational or research code.
>
> **[1:47](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=107)** Colab users can run code on GPU or TPU hardware for free.
>
> **[1:52](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=112)** By making a tool easy and free to use, Google is expanding access to students, and others who might not have tried other Google Cloud Services.
>
> **[2:01](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=121)** Artificial intelligence beginners, enthusiasts may also be interested in Google's AutoML, a pay tool set that automatically generates, and trains machine learning models.
>
> **[2:11](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=131)** In general, I would recommend giving Google's artificial intelligence tools like Cloud Vision, Cloud Speech-to-Text, and Cloud Translation, a consideration when implementing such scenarios for your application.
>
> **[2:23](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=143)** Later in this course, we'll go more into how to prototype specialized functionality to best fit your applications needs.
>
> **[2:31](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=151)** Kubernetes is an open-source project initiated by Google that now has contributors, and supporters across industry, including Microsoft and Amazon.
>
> **[2:40](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=160)** Kubernetes helps make distributed cloud applications easier to reliably maintain, and scale.
>
> **[2:47](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=167)** Application code can be put into containers, which are then deploy with Kubernetes, and are portable across different cloud providers, and even to on-premise machines.
>
> **[2:57](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=177)** For those folks who desire more configuration control than platform as a service solutions, such as App Engine, the plane containers to Kubernetes can be a better option than the point directly to virtual machines.
>
> **[3:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=189)** We'll dive more into containers later in this course.

> [!info]- Semantic Content
>
> **Env Vars:** tpu (3), gpu (1)
> **Cross-References:** later in (2)
> **Tools:** colab (2)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Microsoft Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=0)** - [Narrator] Microsoft has strong brand recognition and usage among enterprises, which has helped the company gain adoption for its Azure Cloud Platform.
>
> **[0:08](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=8)** A lot of companies already use Microsoft SQL Server, Windows Server, .NET, Active Directory, and other products.
>
> **[0:15](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=15)** For those companies, it can be a natural fit to consider Azure for their cloud needs.
>
> **[0:21](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=21)** Historically, Microsoft has appreciated the value of developers, having gained dominance in the operating systems market, partly due to the availability of Windows applications.
>
> **[0:31](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=31)** As the developer ecosystem expanded to mobile phones, Microsoft could not reach the same scale for Windows mobile, ultimately ceding the mobile market to Apple and Android.
>
> **[0:41](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=41)** Now that developers and enterprises are making use of the cloud, Microsoft is motivated to avoid conceding either market share or mind share.
>
> **[0:49](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=49)** The quality and reputation of Microsoft's cloud offerings have improved in recent years.
>
> **[0:54](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=54)** I remember in 2015, when Microsoft Azure offered very generous credits for startups in Silicon Valley to build on their platform.
>
> **[1:02](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=62)** And even then, many startups were reluctant to build on Azure due to concerns about platform reliability.
>
> **[1:08](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=68)** On the flip side, other companies are much more familiar with Windows products and have teams that are well versed in the Microsoft developer ecosystem.
>
> **[1:16](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=76)** As of 2018, Microsoft's Visual Studio Code is the most widely used code editor among developers.
>
> **[1:23](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=83)** This code editor can be configured to more easily deploy to Azure, including to the Azure App Service.
>
> **[1:30](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=90)** Also in 2018, Microsoft acquired GitHub, a cloud-based hosting service for code that's very popular among both enterprises and the open source community.
>
> **[1:40](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=100)** In general, most functionality that folks can do on Google and Amazon's cloud platforms can be done on Azure.
>
> **[1:46](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=106)** With the help of Microsoft's experience Working with enterprises, usage of Azure has grown to a number two market share position after Amazon.
>
> **[1:54](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=114)** Interestingly, as of early 2019, Microsoft still lacks big technology brands that both utilize and customize their cloud.
>
> **[2:02](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=122)** However, companies like Adobe have seen a lot of success working with Microsoft Azure.
>
> **[2:08](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=128)** The differentiators that Microsoft Azure bring is a combination of ease of use and the ability to work with on-premise environments to create a hybrid approach to the cloud.
>
> **[2:18](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=138)** The majority of companies are not like startups or technology companies that can both build from scratch and can customize a technology with fleets of engineers.
>
> **[2:27](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=147)** These companies often already have licenses for various Microsoft products and can transport them to the cloud as well.

> [!info]- Semantic Content
>
> **Env Vars:** sql (1), net (1)
> **Tools:** visual studio (1), github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 4. Compliance in the Cloud

> [↑ Back to Table of Contents](#table-of-contents)

#### Business regulations overview
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=0)** - [Instructor] A top reason that companies are reluctant to migrate to the cloud involves their need to comply with existing business regulations, including policies around security and privacy.
>
> **[0:11](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=11)** Technology tends to evolve faster than laws, and the people who write compliance policies are often not well versed in the latest technologies.
>
> **[0:19](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=19)** It also doesn't make it easy that each country and region has its own sets of regulations.
>
> **[0:24](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=24)** The good news is that the top cloud providers are more aware than ever of their customers' compliance needs.
>
> **[0:30](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=30)** Customers in heavily-regulated industries, such as financial services, healthcare and government, have already started using the cloud.
>
> **[0:39](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=39)** I believe the fear and confusion around cloud compliance will lessen even more over time.
>
> **[0:44](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=44)** As an example, it wasn't too long ago that people were afraid to provide their credit card information online to E-commerce websites.
>
> **[0:51](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=51)** Those security and privacy issues may never be perfectly resolved.
>
> **[0:55](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=55)** The benefits often outweighed the potential issues.
>
> **[0:59](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=59)** We can also create processes to help address issues quickly, as they arise.
>
> **[1:04](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=64)** Access and data security are key aspects of compliance and general application health.
>
> **[1:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=69)** Identity and access management, IAM solutions, are included on Amazon, Google, and Microsoft clouds.
>
> **[1:17](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=77)** Each cloud account has a root user, who is able to administrate everything in that account.
>
> **[1:22](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=82)** This user creates individual users and user groups and assigns them permissions for various aspects of the account.
>
> **[1:29](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=89)** Each person who needs to access and make changes in the cloud should have their own account and security credentials.
>
> **[1:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=95)** With these user accounts set up, the cloud can be configured to log user accesses for later auditing needs.
>
> **[1:42](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=102)** Data encryption can be easier in the cloud than with on-premise servers.
>
> **[1:47](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=107)** Encrypting a cloud data store can be done by setting a configuration option.
>
> **[1:52](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=112)** By doing so, the data is protected at rest, so that anyone with access to the hard drive won't be able to read the data.
>
> **[2:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=120)** In the simplest option, the cloud provider transparently manages access to the encryption key.
>
> **[2:06](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=126)** When the data is in transit across a network, it can be encrypted through industry standard HTTPS.
>
> **[2:13](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=133)** To help companies address their specialized compliance requirements, the top cloud providers have published various materials that guide users with policies around the world.
>
> **[2:23](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=143)** Ultimately, regulatory responsibilities and any penalties for non-compliance is specific to the business.
>
> **[2:30](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=150)** It's up to your company to determine what regulations are applicable, and to implement corresponding policies.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** iam (1), https (1)
> **Code Keywords:** protected (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### GDPR (EU data regulations)
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=0)** - [Instructor] General Data Protection Regulation, GDPR, is a European Union law related to data security and privacy.
>
> **[0:08](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=8)** It applies to companies that collect personal data from EU residents, even if the companies are based outside the EU.
>
> **[0:15](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=15)** GDPR became enforceable in 2018 with the potential fine of up to 20 million euros, or 4% of the previous year's business revenue, whichever is higher.
>
> **[0:26](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=26)** The first fines range from around 4,000 to 400,000 euros.
>
> **[0:31](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=31)** Violations included storing user passwords in unencrypted form, and allowing non-active doctors to access all patient files in the hospital.
>
> **[0:41](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=41)** To correct these violations, only hashed or encrypted versions of passwords should be stored.
>
> **[0:47](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=47)** And only active doctors who need access to patient files for their work should be granted such access.
>
> **[0:53](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=53)** The hope is that GDPR gives people more control over their personal data.
>
> **[0:58](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=58)** In many cases, companies will need to ask EU residents for consent to use their personal data for a specific purpose.
>
> **[1:06](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=66)** These users can decide to withdraw their consent.
>
> **[1:10](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=70)** Companies must collect only enough personal data that's necessary to fulfill the stated purpose, and to remove the personal data if it's no longer necessary for the stated purpose.
>
> **[1:20](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=80)** Data must be stored securely, minimizing the risks for data breaches.
>
> **[1:25](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=85)** If there's a data breach that affects user privacy, the breach must be reported within three days.
>
> **[1:31](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=91)** In addition, EU residents can ask companies for a copy of their stored personal data, and can also ask for this data to be deleted.
>
> **[1:40](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=100)** GDPR requires cloud providers to provide sufficient guarantees in a written contract about the data that they're processing on behalf of their customers.
>
> **[1:50](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=110)** Amazon, Google, and Microsoft have all met this bar.
>
> **[1:54](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=114)** In addition, each cloud provider has published materials to help their customers understand and comply with data protection regulations.
>
> **[2:02](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=122)** Access control and data encryption are key components of both good security hygiene and compliance with GDPR.
>
> **[2:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=129)** Use a cloud provider's identity and access management, IAM solutions, to set up user accounts and permissions that are appropriately scoped.
>
> **[2:18](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=138)** Regularly review permissions granted to active users, and disable inactive users.
>
> **[2:24](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=144)** Non-public or personal data should always be stored in encrypted format.
>
> **[2:28](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=148)** Cloud providers have the ability to enable this encryption in their data services.
>
> **[2:33](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=153)** Make sure to use these capabilities and to access data through secure channels, such as HTTPS.
>
> **[2:39](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=159)** Notification of a data breach is not required if the accessed data was encrypted and unreadable.
>
> **[2:46](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=166)** There's currently not an official certification program for companies who need to comply with GDPR.
>
> **[2:51](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=171)** However, you can use the latest news reports about GDPR violations to consider how your company can avoid similar issues.
>
> **[2:59](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=179)** Because some of the legal language around GDPR can be open to interpretation, make sure to document the actions that your company has taken to address data protection obligations.
>
> **[3:08](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=188)** In my view, complying with GDPR does not require upending your entire infrastructure or switching cloud providers.
>
> **[3:15](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=195)** It requires distilling the legal requirements, reviewing and upgrading processes and documenting accordingly.

> [!info]- Semantic Content
>
> **Env Vars:** gdpr (9), iam (1), https (1)
> **CLI Commands:** make (2)
> **Code Keywords:** public (1), require (1)
> **Best Practices:** make sure to (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### HIPAA (US health care regulations)
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=0)** - [Instructor] The US Health Insurance Portability and Accountability Act, HIPAA, governs the handling of protected health information.
>
> **[0:08](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=8)** HIPAA applies to any American organization that interacts with patient healthcare data, including medical records and prescription payment information.
>
> **[0:17](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=17)** Enforcement of HIPAA began in 2003.
>
> **[0:21](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=21)** As of January 2019, the US Department of Health and Human Services has imposed a civil penalty in 62 cases and an average fine of about $1.5 million per case.
>
> **[0:34](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=34)** Often following complaints, many types of organizations have been investigated, including major medical centers, hospitals, and a small health provider office.
>
> **[0:44](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=44)** According to the US government, the most frequently investigated HIPAA violations involve these five areas.
>
> **[0:51](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=51)** Impermissible uses and disclosures of protected health information, lack of safe guards of protected health information, lack of patient access to their protected health information, lack of administrative safeguards of electronic protected health information, and use or disclosure of more than the minimum necessary protected health information.
>
> **[1:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=72)** Recent violations highlight the importance of data encryption and access control, not just in the cloud but also in on-premise environments.
>
> **[1:21](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=81)** In one medical center, employees lost laptops and USB drives containing the unencrypted health data of 33,000 people.
>
> **[1:30](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=90)** This case was settled with a $4.3 million fine.
>
> **[1:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=95)** In 2015, a large health benefit company discovered that cyber attackers had gained access to 79 million patient names, social security numbers, and more, through phishing emails.
>
> **[1:49](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=109)** This case was settled with a $16 million fine.
>
> **[1:53](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=113)** Details on all violations and fines are published on the Health and Human Services website.
>
> **[1:59](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=119)** If a company discovers a breach of unsecure health data, notification is generally required within 60 days.
>
> **[2:06](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=126)** When a company processes or stores protected health information in the cloud, the cloud provider would be considered a business associate for that company.
>
> **[2:15](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=135)** As such, the company must have a written HIPAA Business Associate Agreement with the cloud provider.
>
> **[2:22](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=142)** Thankfully, Amazon, Microsoft, and Google all have such agreements available.
>
> **[2:27](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=147)** These HIPAA specific agreements, and related materials, should be reviewed separately for each cloud provider that your company chooses to use.
>
> **[2:36](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=156)** Each cloud provider has a list of covered services under HIPAA.
>
> **[2:40](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=160)** While the lists are extensive, you and your company may be considering using a service that's not on those specific provider's cover list.
>
> **[2:48](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=168)** It's worth reviewing the details and following the cloud providers process for opting into the HIPAA agreement.
>
> **[2:55](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=175)** Ultimately, your company's responsible for complying with HIPAA as applicable.
>
> **[3:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=180)** There's no official certification program for complying with HIPAA.
>
> **[3:03](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=183)** However, the intent behind the law is similar to other data protection policies around the world.
>
> **[3:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=189)** By understanding the requirements and following good security practices around access control, encryption, and documentation, you and your company will reduce the risk of data breaches and user privacy violations.

> [!info]- Semantic Content
>
> **Env Vars:** hipaa (10), usb (1)
> **Code Keywords:** protected (7), case. (1)
> **Versions:** 1.5 (1), 4.3 (1)
> **Speakers:** - [instructor] (1)


### 5. Human Resources for the Cloud

> [↑ Back to Table of Contents](#table-of-contents)

#### Assess current skills and needs
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=0)** - [Instructor] Whether you're part of a small company or a large enterprise, it can be a challenge to prioritize, and provide enough time, and resources to accomplish organizational goals.
>
> **[0:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=9)** If you've decided to put energy toward cloud projects, one of the first steps involves creating a team who will be responsible for tackling cloud-related challenges.
>
> **[0:18](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=18)** Small teams can be more agile than large teams, even within large enterprises, smaller teams with a sufficient sense of ownership and autonomy can help quickly drive towards a business, and technological solutions.
>
> **[0:31](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=31)** Where relevant, these teams can make use of the broader set of resources and experiences inside, and outside the organization.
>
> **[0:39](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=39)** Within your current organization, you might already be aware of one or more people whose skills and interests, are aligned with your highest priority goals for cloud projects.
>
> **[0:48](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=48)** These people can help you further flesh out details, including how to determine whether a cloud project would succeeded in meeting top organizational objectives.
>
> **[0:57](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=57)** This team can also help clarify the current set of skills, and needs within your organization, as well as the current unknowns that will require more investigation.
>
> **[1:06](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=66)** Since the current generation of cloud services has seen a lot of growth, and changes in recent years, it's important for your cloud team to be open to new possibilities, and new solutions.
>
> **[1:17](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=77)** It can be natural for people to gravitate to what they already know, what feels like the least change, or what is the most popular trend at the moment.
>
> **[1:25](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=85)** However, one thing I've seen in my 20 years of working with technology is that popular trends and tools emerge every few years, entire fields can appear such as the job of a data scientist.
>
> **[1:37](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=97)** The schools do not specifically train for.
>
> **[1:40](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=100)** Given moderate uncertainties, I feel that people with the ability to do objective analysis to adapt, and to get things done will be helpful regardless of the trends of the moment.
>
> **[1:50](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=110)** The top cloud providers have published plenty of case studies on how different organizations have used cloud services to meet their goals.
>
> **[1:58](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=118)** Keep in mind that these polished case studies may not fully reflect the challenges that the organizations have encountered.
>
> **[2:05](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=125)** It also may not reflect the current state of the art since the study's publication date.
>
> **[2:10](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=130)** In addition, there's a natural tendency for each cloud provider to encourage greater use of the services that they sell.
>
> **[2:16](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=136)** The simplest most practical or most customizable solutions may involve other approaches.
>
> **[2:22](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=142)** To increase the chances of success for your cloud project, I'd encourage you to gather a team of people who can help you define success, who can objectively, and quickly try out potential solutions, and who can implement, and evolve the most practical solutions within your organization.
>
> **[2:38](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=158)** As such, it's less about the number of years of experience with a specific cloud provider, and more about understanding what can best fit your organization at any point in time.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), for. (1)
> **Warnings:** be aware (1), keep in mind (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Evolve roles and expertise
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=0)** - [Instructor] Just as new technological tools will continually emerge, the roles and expertise of your cloud team will also evolve over time.
>
> **[0:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=9)** A culture of documentation and knowledge sharing will be super helpful to our onboarding new team members and understanding the reasonings behind decisions that may need to be revisited in the future.
>
> **[0:19](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=19)** In Silicon Valley, it's now common for software engineers to transition roles or companies every three years or so.
>
> **[0:26](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=26)** Sometimes the transitions happen even more quickly than that.
>
> **[0:30](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=30)** As such, the people who may have been critical during one part of a company's cloud journey may not be at the same company within a few years.
>
> **[0:38](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=38)** Within this climate of change, some of the highest performing companies have learned to invest in their staff, including to facilitate employees' preferences and interests in the workplace.
>
> **[0:48](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=48)** These companies work on being a place that external job candidates feel excited to apply to, and also in providing opportunities for the continued growth and development of their staff.
>
> **[0:58](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=58)** Having both high interest and high retention for roles can lead to a more efficient and effective workplace.
>
> **[1:05](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=65)** For example, when Facebook realized around 2011 that they needed to revamp their mobile strategy to build fully native mobile apps, they didn't just replace existing staff who had worked on the legacy apps.
>
> **[1:17](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=77)** Instead, they hired external trainers to educate their employees on the new programming approaches.
>
> **[1:23](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=83)** This ended up being a win-win for the employees and the company.
>
> **[1:27](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=87)** The employees developed new skills that can help them in the future and the company earned employee loyalty and a retrained staff, ready to help build the company's next product releases.
>
> **[1:38](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=98)** For cloud projects, one or more staff members would be responsible for architecting the system in a way that meets both technical and non-technical priorities.
>
> **[1:47](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=107)** Consider the cloud architecture as a living system that evolves regularly and now the puzzle was just one correct answer that will be correct indefinitely.
>
> **[1:56](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=116)** There will likely be multiple workable approaches to the same challenge.
>
> **[2:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=120)** For example, there are many ways to store data.
>
> **[2:04](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=124)** My recommendation is to pursue an iterative approach.
>
> **[2:07](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=127)** Come up with one or more draft architectures and then put them through real-world scenarios.
>
> **[2:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=132)** My general preference is towards simplicity.
>
> **[2:15](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=135)** A simpler architecture that meets requirements is easier to learn, faster to build, and easier to maintain.
>
> **[2:22](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=142)** It's inevitable that extensions or changes will be needed, no matter how much thought or time is put into the initial architecture.
>
> **[2:29](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=149)** Allow your team to adapt and evolve your cloud projects, while documenting and remembering the many lessons learned along the journey.
>
> **[2:37](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=157)** As the number of cloud-based tools has expanded in recent years, the field of DevOps has emerged to help application developers more efficiently and reliably release their latest app versions.
>
> **[2:49](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=169)** DevOps responsibilities can include the automation of infrastructure setups and the monitoring of deployed code.
>
> **[2:56](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=176)** In smaller teams, often the application developer will continue to be responsible for basic operations needs.

> [!info]- Semantic Content
>
> **Code Keywords:** super (1), continue (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Prioritize learning and testing
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=0)** - [Instructor] The best organizations know that not everything they pursue will succeed a hundred percent of the time, yet they're able to learn from various iterations, and come up with new solutions based on their learnings.
>
> **[0:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=12)** An important advantage in pursuing an iterative, and agile approach to cloud projects is it allows a team to more quickly learn whether potential solutions will fit specific organizational needs.
>
> **[0:23](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=23)** I'd also encourage team members to tackle some of the most uncertain or difficult areas first, so that there's more time to come up with workable solutions.
>
> **[0:33](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=33)** The cost of learning, and testing can be lower earlier in the development process.
>
> **[0:37](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=37)** Before making use of a full production cloud environment, a team would create one or more development environments that resemble what the production environment will become.
>
> **[0:46](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=46)** In lieu of production data, sample test data can be created, and tested with cloud applications.
>
> **[0:52](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=52)** The more the team members can easily experiment, and try out various approaches the more insights the team can gain that will be relevant to launching high quality solutions.
>
> **[1:03](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=63)** In general, building the cloud should make your test efforts more efficient not less.
>
> **[1:08](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=68)** Software testing can get complex.
>
> **[1:11](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=71)** There's functionality testing, but also stress and load testing, compliance testing, security testing, resilience testing, and testing on various browsers and devices.
>
> **[1:22](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=82)** I've seen successful products apply an 80/20 prioritized approach with testing that's also time-limited.
>
> **[1:29](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=89)** For any particular iteration, you can potentially find the most serious issues with 20% of the total possible testing work including by doing manual testing.
>
> **[1:39](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=99)** For increase agility, I prefer end-to-end testing over unit testing since end-users can encounter issues, a span, one or more component units.
>
> **[1:48](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=108)** For me, testing doesn't imply an academic exercise to make sure that every single line of application code is called upon by test code at all possible situations.
>
> **[1:59](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=119)** Quality is important, but so is getting software out the door, and available for you sooner rather than later, even the most technologically advanced companies still rely on customer reports to unearth issues that they didn't find or were not able to address before deployment.
>
> **[2:14](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=134)** Even the most well-supported products have experienced outages.
>
> **[2:18](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=138)** After the initial setups are complete, building quality software in the cloud should feel more efficient than building shrink wrapped, or on-premise software.
>
> **[2:26](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=146)** Checking in, testing and deploying new code can happen multiple times a week, if not multiple times a day.
>
> **[2:32](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=152)** Tuning systems and processes for agility, and quality can be considered an ongoing effort that continually incorporates feedback from your customers and team members.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 6. Prototype for Your Needs

> [↑ Back to Table of Contents](#table-of-contents)

#### Evaluate specialized functionality
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=0)** - [Narrator] Cloud providers are continually adding new functionality to their list of available services.
>
> **[0:05](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=5)** Some of this functionality is currently relevant to only a small subset of developers.
>
> **[0:11](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=11)** For example, in 2018, Amazon Web Services launched RoboMaker, a service for robotics developers.
>
> **[0:18](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=18)** Microsoft has been investing in mixed reality, an ecosystem that blends physical and digital worlds.
>
> **[0:25](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=25)** Mixed reality developers can create applications for the HoloLens and Azure Kinect devices.
>
> **[0:31](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=31)** To evaluate specialized functionality, it's helpful to draft use cases before diving into the available tools.
>
> **[0:38](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=38)** By clarifying and prioritizing use cases, it'll be easier to determine whether or not available technologies can be part of a holistic solution.
>
> **[0:47](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=47)** Let's say that I own a clothing store and I've just heard about Amazon's RoboMaker.
>
> **[0:52](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=52)** My clothing store is currently understaffed, but I've been having a tough time hiring new employees.
>
> **[0:57](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=57)** Might I be able to supplement my staff with a helpful robot?
>
> **[1:01](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=61)** I'm also interested in understanding how some of the latest technologies might be able to make my customer experience more engaging.
>
> **[1:08](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=68)** I love to have happier customers who buy more clothing from my store and who recommend us to their friends.
>
> **[1:15](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=75)** With this awareness of goals, I start familiarizing myself with RoboMaker to see how it can be helpful for my needs.
>
> **[1:21](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=81)** Can Amazon really make a robot for me?
>
> **[1:24](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=84)** Soon enough, I discover that RoboMaker provides an environment for building software on the open-source Robot Operating System, ROS, but won't actually ship me a physical robot at this time.
>
> **[1:36](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=96)** A friend told me about a robot that I can buy called Pepper.
>
> **[1:39](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=99)** Pepper looks friendly, but runs on its own operating system.
>
> **[1:43](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=103)** Their other robots are compatible with RoboMaker, including Pepper sibling Nao.
>
> **[1:49](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=109)** At some point, I decided that picking and training a full-sized robot is too complicated for now.
>
> **[1:54](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=114)** Humans are still generally more adaptable than robots.
>
> **[1:58](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=118)** I'm still interested in how technology can help improve my customer's store experience.
>
> **[2:03](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=123)** I consider whether customers might want to interact with Google Home and Amazon Alexa to ask questions about purchases.
>
> **[2:10](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=130)** If so, I can look into creating a voice app for one of those devices.
>
> **[2:14](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=134)** I know Cortana and Siri are also virtual assistant robots.
>
> **[2:18](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=138)** I can customize Cortana on Microsoft's Azure Cloud.
>
> **[2:22](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=142)** After further consideration, I decide on a more simplified approach.
>
> **[2:26](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=146)** I will try putting a tablet device in my store and provide a way for customers to browse through photos of outfits for inspiration.
>
> **[2:34](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=154)** If feedback from that is positive, then I can commission a tablet application that includes additional features, such as voice and chat interaction for when my human staff members are too busy to interact with all customers.
>
> **[2:46](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=166)** Also, keep an eye out for fancier solutions I might want to utilize in the future.
>
> **[2:51](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=171)** I've heard about technology-enhanced magic mirrors.
>
> **[2:54](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=174)** Maybe my customers will like those as well?

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** for example (1), such as (1)
> **Code Keywords:** let (1)
> **Env Vars:** ros (1)
> **Speakers:** - [narrator] (1)

#### Gather insights through implementation
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=0)** - [Instructor] I recommend building prototypes for experimentation and testing.
>
> **[0:04](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=4)** Prototypes can help you sort out the benefits and limitations of your ideas and tools and can become reference points for what a fully productionized solution would be.
>
> **[0:13](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=13)** In many cases, it's difficult to predict how users will react to a solution without putting implementations in front of them.
>
> **[0:21](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=21)** Prototypes are less costly and faster to build than fully polished solutions.
>
> **[0:25](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=25)** There's even the concept of paper prototypes for digital products, hand drawn sketches and diagrams that are used for soliciting feedback for further learning and iteration.
>
> **[0:36](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=36)** As described earlier in this course, different cloud providers have different strengths and each provider is working on improving their offerings to better serve their user base.
>
> **[0:45](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=45)** Prototypes with different cloud providers can help you decide which cloud services to use for which scenarios.
>
> **[0:52](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=52)** For agility's sake, you might want to choose a default cloud provider for basic functionalities.
>
> **[0:57](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=57)** For quality's sake, you can further evaluate which cloud services work best for more specialized use cases.
>
> **[1:05](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=65)** Prototypes can unearth limitations that might be tough to discover otherwise.
>
> **[1:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=69)** Several years ago, I was recommended to use a particular software development framework for building a new mobile application.
>
> **[1:16](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=76)** This framework fit my needs at the time and worked well with the cloud services that I used.
>
> **[1:21](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=81)** We were able to launch several prototype versions of the mobile application.
>
> **[1:25](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=85)** As the feature set expanded. however, the load time of the mobile application began to slow down significantly.
>
> **[1:32](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=92)** Further investigations and configuration changes didn't lead to noticeable reductions in load time.
>
> **[1:38](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=98)** More recently, I talked to another developer who had the same experience with some of the mobile applications that he and his colleagues built.
>
> **[1:44](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=104)** We had reached the limits of that particular software development framework after some initial iterations.
>
> **[1:50](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=110)** To provide a better user experience with faster load times, we need to rebuild the applications with a different software framework.
>
> **[1:58](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=118)** Besides gathering insights, setting milestones to demonstrate prototype versions is a great way to keep projects moving along.
>
> **[2:05](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=125)** Projects can take longer than initially assumed.
>
> **[2:08](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=128)** If the goal is to launch a new product within one year, it's much better to have a prototype within one month than to be in a dark about how things can go for half a year.
>
> **[2:17](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=137)** Note that in some very agile and innovative work cultures, project timelines are set ambitiously.
>
> **[2:23](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=143)** By setting up agile release processes for your cloud projects, you can minimize the cost of missing deadlines while also gathering more insights for the longterm.

> [!info]- Semantic Content
>
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Image-to-text prototype example
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=0)** - [Instructor] We're going to consider a prototype related to artificial intelligence, a way of getting computers to do things on behalf of users.
>
> **[0:08](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=8)** We want to allow user to send the computer program a photo with a text in it.
>
> **[0:13](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=13)** For example, a street sign.
>
> **[0:15](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=15)** The computer program detects the text within the photo.
>
> **[0:19](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=19)** The program can then send a text back to be automatically read aloud or to be translated into different language that the user can more easily understand.
>
> **[0:27](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=27)** Most popular cloud providers have the functionality to extract texts from images.
>
> **[0:33](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=33)** But which cloud provider should we choose?
>
> **[0:36](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=36)** There's a potentially infinite number of images that can be supplied.
>
> **[0:40](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=40)** And there isn't one provider that can 100% perfectly read every possible image.
>
> **[0:46](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=46)** We want to be able to evaluate a few providers and choose one for initial feature launch.
>
> **[0:52](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=52)** We want to launch this feature soon and would also like some flexibility to switch out the provider as needed.
>
> **[0:59](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=59)** To get this done, we can develop a custom API or application programming interface that evaluates and connects to different text detection engines.
>
> **[1:08](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=68)** For this scenario, we'll implement an input page and a backend API that connects to Google, Amazon and Microsoft engines.
>
> **[1:17](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=77)** We'll use HTML for the input page and JavaScript and Node.js for the backend.
>
> **[1:23](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=83)** This Node.js backend uses a few frameworks to enable the functionality we need, including Express and EJS.
>
> **[1:30](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=90)** For simplicity, we'll put the backend in one JavaScript file that's about 400 lines of code.
>
> **[1:37](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=97)** Let's watch the complete system action.
>
> **[1:40](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=100)** I first load the input page and choose an image file.
>
> **[1:45](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=105)** Oh, look.
>
> **[1:46](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=106)** Here's a nice relaxing image of a sign about tsunami hazard.
>
> **[1:51](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=111)** Remember, it's up to the computer to interpret the sign as accurately as possible.
>
> **[1:56](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=116)** For evaluation purposes, I'll choose all so that all three cloud providers are used.
>
> **[2:02](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=122)** We can see the result.
>
> **[2:03](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=123)** Looks like for this scenario, Microsoft got the most accurate results.
>
> **[2:07](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=127)** This system is actively in use today in a mobile app for learning English.
>
> **[2:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=132)** A similar backend that we use for an evaluation is used by the mobile app in production.
>
> **[2:18](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=138)** Of course the app doesn't use all three providers, but relies on the backend to select the default.
>
> **[2:24](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=144)** The app default is currently Google based on testing a set of images that we thought most users might want to try with the app.
>
> **[2:31](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=151)** We can change this default in the feature with a small change in the backend code.
>
> **[2:37](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=157)** Next, we will further consider how to make use of multiple cloud providers for a feature, including going into more code details.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (1), interface (1), let (1), default. (1)
> **Env Vars:** api (2), html (1), ejs (1)
> **CLI Commands:** node (2), make (1)
> **File Paths:** node.js (2)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 7. Design for Adaptability

> [↑ Back to Table of Contents](#table-of-contents)

#### Switch cloud providers as needed
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=0)** - Providing the best experience for customers requires adaptability to ongoing changes.
>
> **[0:05](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=5)** Technology continues to be a significant area of change.
>
> **[0:10](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=10)** When the iPhone launched, I was still clutching to my Blackberry device.
>
> **[0:15](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=15)** Walkman devices, videotapes, and blockbuster stores have all become obsolete for the most part.
>
> **[0:21](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=21)** Cloud services can also rise and fall.
>
> **[0:24](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=24)** Parse was a mobile cloud provider that supported over 500,000 apps, but then close shop in 2017.
>
> **[0:32](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=32)** If our cloud power software system is analogous to a car, it can be beneficial to design the system such that important parts like the car engine can be easily swapped out as needed.
>
> **[0:44](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=44)** When we're building a new car, we want to choose the engine with the best performance and characteristics for a particular use case.
>
> **[0:51](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=51)** In the previous video, we demonstrated a prototype for evaluating image to text functionality.
>
> **[0:57](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=57)** In this video, we'll take a closer look at the application programming interface or API and how the code allows us to switch cloud providers under the hood.
>
> **[1:07](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=67)** By keeping the API the same, users can get enhanced functionality without updating their (indistinct) software such as their mobile app.
>
> **[1:15](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=75)** This adaptable design makes maintenance and upgrades easier for everyone.
>
> **[1:20](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=80)** In the JavaScript code that sets up our custom detect text API, we have a variable request engine that captures the text detection engine that the API consumer has asked for.
>
> **[1:33](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=93)** The API consumer can be a mobile app, a web app, or any other software.
>
> **[1:38](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=98)** We configure a default engine, which is Google for this prototype.
>
> **[1:43](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=103)** We then use a JavaScript switch statement to declare supported engines and what actions to take for each case.
>
> **[1:51](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=111)** The supported engines are Amazon, Google, and Microsoft.
>
> **[1:56](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=116)** We also have an all case that calls upon all three engines for evaluation purposes.
>
> **[2:03](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=123)** We have code that connects with each of our supported cloud providers using account specific access keys.
>
> **[2:11](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=131)** The connection code for each provider is different because each provider has a different interface for inputting images and outputting detected texts from these images.
>
> **[2:22](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=142)** Testing is necessary to make sure the code is set up correctly.
>
> **[2:26](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=146)** It's possible that a cloud provider may change their interface in the future.
>
> **[2:30](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=150)** If so this code would also need to be changed.
>
> **[2:34](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=154)** The app that consumes is detect text API includes air handling to alert the user if there's an unexpected issue.
>
> **[2:43](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=163)** This code also uploads user images to the cloud for archival and sends an email to the administrator, when an image is processed.
>
> **[2:51](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=171)** Amazon was used to implement this functionality.
>
> **[2:54](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=174)** Other cloud providers also have similar functionality, to store images, and Amazon is just one of many solutions for sending automated emails.
>
> **[3:03](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=183)** For this example, there's no significant benefit in designing the code to allow switching to different providers for archiving images and sending email.
>
> **[3:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=192)** The functionality is basic and doesn't directly affect any user experience of detecting texts or images.
>
> **[3:18](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=198)** The basic should work with all the popular cloud providers.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), case. (2), switch (2), for. (1)
> **Env Vars:** api (6)
> **Analogies:** analogous to (1), such as (1)
> **Prerequisites:** configure (1), set up (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** iphone (1)
> **Cross-References:** previous video (1)
> **Speakers:** - providing (1)

#### Containers for your code
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=0)** - [Instructor] An increasingly popular way for code to be executed is within containers.
>
> **[0:05](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=5)** These software containers package together application code, and dependencies.
>
> **[0:10](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=10)** They help avoid the issue of code that works on one machine environment, but doesn't on a different machine environment.
>
> **[0:18](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=18)** Unlike virtual machines, where an operating system must be installed, containers are lighter weight and run on top of existing operating systems.
>
> **[0:27](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=27)** They can be portable to run on development laptops, on-premise data centers, or on cloud providers virtual machines.
>
> **[0:34](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=34)** Docker is an open source format that initiated a wave of containerization starting 2013 and has become the standard format for containers.
>
> **[0:43](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=43)** Today, Docker containers can run on Amazon Web Services, Google Cloud Platform, Microsoft Azure, and more.
>
> **[0:51](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=51)** Docker containers are created from Docker images that specify container contents.
>
> **[0:57](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=57)** Additional tools exist for managing Docker containers.
>
> **[1:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=60)** They include Kubernetes, an open source project that helps to maintain and scale containerize applications.
>
> **[1:07](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=67)** In the San Francisco Bay area, it's increasingly common to hear of companies who migrated their virtual machine applications to run in Docker containers managed by Kubernetes.
>
> **[1:18](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=78)** For many developers, including me, there's definitely a hurdle to using the terminology and tools associated with managing code in containers.
>
> **[1:26](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=86)** The benefit of crossing this hurdle is related to longer term development agility for larger scale distributed applications.
>
> **[1:34](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=94)** This is agility is similar to the offer by platform as a service solutions, such as Google App Engine, Amazon Elastic Beanstalk, Microsoft App Service and Heroku.
>
> **[1:45](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=105)** It's also similar to the agility offered by serverless solutions, such as AWS Lambda, Google Cloud Functions and Azure Cloud Functions.
>
> **[1:54](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=114)** However, the container approach appeals to developers and operations staff who seek more control over the infrastructure.
>
> **[2:01](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=121)** Let's see how to get a Hello World web app running on Docker and Kubernetes in the Cloud.
>
> **[2:07](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=127)** We have a no JS app in a file server .JS, that outputs the string, hello world.
>
> **[2:14](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=134)** We create a Docker file that describes the Docker image we want to build.
>
> **[2:19](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=139)** In this case, we want to start from the official node image, expose port 80, copy the server .JS file onto that image, and then run the command to start the server.
>
> **[2:30](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=150)** It's important to start from trusted Docker image sources.
>
> **[2:34](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=154)** Otherwise there's a security risk that the starting Docker image was maliciously designed to take over your cloud computing resources.
>
> **[2:42](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=162)** After building our Hello World Docker image, we upload it to container registry.
>
> **[2:47](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=167)** For example, Google Container Registry, Amazon Elastic Container Registry, or Azure Container Registry.
>
> **[2:56](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=176)** We then create a Kubernetes Cluster of virtual machines and also a Kubernetes Pod to host our Docker image.
>
> **[3:03](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=183)** Google Kubernetes engine, Amazon Elastic Kubernetes Service, and Azure Kubernetes Service are cloud provider options for this step.
>
> **[3:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=192)** Once deployed, we have our Hello World code in the Docker container managed by Kubernetes.
>
> **[3:17](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=197)** By making the entire Kubernetes Cluster available to an external IP address, our Hello World app then becomes accessible around the world.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (14), aws (1), node (1)
> **Analogies:** similar to (2), such as (2), for example (1)
> **Code Keywords:** lambda (1), let (1), case, (1)
> **Ports:** port 80 (1)
> **Env Vars:** aws (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Streamline cloud processes
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=0)** - [Narrator] With all this available technology, it's clear that there will always be multiple potential approaches to building software.
>
> **[0:07](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=7)** I like to think from the end user's perspective.
>
> **[0:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=9)** An end users tend to be unaware of whether application code is in Docker containers, or whether Amazon, Google, Microsoft, or others are serving as cloud providers.
>
> **[0:18](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=18)** In this way, cloud provider and infrastructure details are like computer programming languages.
>
> **[0:24](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=24)** It's possible to deliver an end user experience with multiple programming languages.
>
> **[0:29](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=29)** For more popular languages like JavaScript and Python to less commonly use languages like Closure or Go that still have its fans.
>
> **[0:37](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=37)** As we saw with the image detect prototype described earlier in this course, for some scenarios, choosing a specific technology provider does make a significant difference to end user experience.
>
> **[0:48](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=48)** It's those scenarios that need to be prioritized more highly with more effort put into devaluation of supporting technologies.
>
> **[0:55](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=55)** Technology and infrastructure details also impact organizational agility and developer's day to day work experience.
>
> **[1:02](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=62)** For example if all of your existing developers work on Microsoft Windows and use Microsoft development tools, it will probably be faster to launch a new application based on Microsoft technologies.
>
> **[1:13](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=73)** Even so continuous training with an eye toward end user benefits can help developers and organizations be more adaptable.
>
> **[1:21](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=81)** Streamlining your organization's cloud development processes can be measurable to some extent.
>
> **[1:26](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=86)** Consider whether it can be easier or faster for application developers to deploy new code to a pre production test environment.
>
> **[1:33](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=93)** The process of finding and fixing the most serious code bugs should also be reasonably fast.
>
> **[1:38](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=98)** Ideally, code bugs are caught as early as possible.
>
> **[1:41](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=101)** For example, by developers on their local machines, whenever possible.
>
> **[1:46](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=106)** Automated testing can be very helpful, but does required time to write and maintain automated test cases.
>
> **[1:52](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=112)** For products are likely to quickly change based on end user feedback, high quality manual testing, or a mix of automated and manual testing can be useful shortcuts.
>
> **[2:02](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=122)** Once there's sufficient testing, code should be deployed to production for further feedback and iteration.
>
> **[2:07](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=127)** The use of feature flags to hide incomplete production code can also help with iteration.
>
> **[2:13](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=133)** By streamlining how developers can get high quality code and features into production the organization and business can be more agile and responsive to customer needs.
>
> **[2:22](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=142)** The organization of code can also be a controversial topic.
>
> **[2:26](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=146)** Some developers are keen to spend days refactoring or reorganizing code.
>
> **[2:31](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=151)** I'm not one of those developers and I'm very reluctant to stall feature improvements or bug fixes just to reorganize code to function to do the same thing it did before the reorganization.
>
> **[2:42](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=162)** In cases where some code can be streamlined, ideally that can be done while working on features or bug fixes that touch upon that same code.
>
> **[2:50](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=170)** Similarly separating code into smaller components can be done on an as needed basis and where there's benefit to team processes or agility.
>
> **[2:58](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=178)** Remember that any reorganization of code will require a complete test cycle to find and fix functional issues that may have arisen.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (1), python (1), make (1), find (1)
> **Code Keywords:** function (1), require (1)
> **Cross-References:** as we saw (1), earlier in (1)
> **Analogies:** for example (2)
> **Speakers:** - [narrator] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Continuing the cloud platform journey
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/continuing-the-cloud-platform-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/continuing-the-cloud-platform-journey?u=76281980&t=0)** - [Xian] I hope that the videos in this course have been useful to your current and future projects.
>
> **[0:05](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/continuing-the-cloud-platform-journey?u=76281980&t=5)** It's not always easy to pick tools to use for technology projects, but that shouldn't stop you for trying out any tools that you're curious about.
>
> **[0:12](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/continuing-the-cloud-platform-journey?u=76281980&t=12)** In the next 30 days, I would encourage you to choose three cloud tools and to understand them better with hands-on practice.
>
> **[0:19](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/continuing-the-cloud-platform-journey?u=76281980&t=19)** For example, try uploading a file to Amazon S3, connecting with the Microsoft Cognitive Services API, or building a demo app with Google App Engine.
>
> **[0:29](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/continuing-the-cloud-platform-journey?u=76281980&t=29)** The more you try things, the better you can understand how various tools can be utilized to reach your organizational and project goals.
>
> **[0:36](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/continuing-the-cloud-platform-journey?u=76281980&t=36)** Additional videos in the LinkedIn Learning library and the latest tutorials on cloud providers' websites can assist you in this endeavor.
>
> **[0:43](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/continuing-the-cloud-platform-journey?u=76281980&t=43)** You can also message me on LinkedIn, if you'd like.
>
> **[0:46](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/continuing-the-cloud-platform-journey?u=76281980&t=46)** Best wishes on your projects.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [xian] (1)


## Resources

- Exercise files available

## Skills Covered

- Amazon Web Services (AWS)
- Cloud Development
- Microsoft Azure
- Google Cloud Platform (GCP)

## Path Context

### In [[Getting Started with Cloud Development]]
**1 of 4** | [[Learning Amazon Web Services Aws For Developers]] →

## Appears In

- [[Getting Started with Cloud Development]]

## Related Courses

_Courses sharing skills:_

- [[Leveraging Google Cloud Developer and DevOps Tools]] — Google Cloud Platform (GCP), Cloud Development
- [[Azure Quick Tips for Developers]] — Microsoft Azure, Cloud Development
- [[Azure Essential Training for Developers]] — Microsoft Azure, Cloud Development
- [[AWS- Monitoring, Logging, and Remediation (2021)]] — Amazon Web Services (AWS)
- [[Complete Guide to AWS Software Deployment]] — Amazon Web Services (AWS)

---

[↑ Back to top](#)