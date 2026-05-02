---
type: course
cssclasses:
  - lle-course
slug: dependency-mapping-for-cloud-migration
url: "https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration"
duration_minutes: 95
duration: 1h 35m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQExFUbbwyl7gg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702676695674?e=2147483647&amp;v=beta&amp;t=ZMqWSx9MWR75DowzCbSQcb0FxRVZ9syMDSIBN3hQ3AM"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Introduction to Enterprise Cloud Migration Planning]]'
prev_courses:
  - '[[Design a Cloud Migration Strategy]]'
next_courses:
  - '[[Planning and Implementing a Rapid Cloud Migration (RCM)]]'
path_nav: '[{"path":"Introduction to Enterprise Cloud Migration Planning","position":3,"total":4,"prev":"Design a Cloud Migration Strategy","next":"Planning and Implementing a Rapid Cloud Migration (RCM)"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/devops
  - topic/software-development
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Dependency%20Mapping%20for%20Cloud%20Migration.md)

![Dependency Mapping for Cloud Migration](https://media.licdn.com/dms/image/v2/D4D0DAQExFUbbwyl7gg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702676695674?e=2147483647&amp;v=beta&amp;t=ZMqWSx9MWR75DowzCbSQcb0FxRVZ9syMDSIBN3hQ3AM)

# Dependency Mapping for Cloud Migration

> Building a well-planned strategy is key to a cloud adoption that is successful during migration as well as post-migration. In this course, instructor Gary Grudzinskas presents a step-by-step process answering the dilemma of finding the dependencies of an organically grown, on-premises infrastructure. He examines how to categorize it in terms of translation to a service-based cloud infrastructure, 

> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration) | 1h 35m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The role of application dependency](#the-role-of-application-dependency)
- [**1. Application Dependency and Cloud Services**](#1-application-dependency-and-cloud-services) (5 videos)
  - [Application migration overview](#application-migration-overview)
  - [Migrating applications to the cloud](#migrating-applications-to-the-cloud)
  - [Application dependency mapping](#application-dependency-mapping)
  - [Considerations for cloud migration](#considerations-for-cloud-migration)
  - [Detailing app dependencies for cloud migration](#detailing-app-dependencies-for-cloud-migration)
- [**2. Application Dependency Mapping Techniques**](#2-application-dependency-mapping-techniques) (4 videos)
  - [Using installed agents](#using-installed-agents)
  - [Using the sweep and pull method](#using-the-sweep-and-pull-method)
  - [Using network monitoring](#using-network-monitoring)
  - [Using intelligent traffic-based mapping](#using-intelligent-traffic-based-mapping)
- [**3. Planning for the Migration of Applications Dependencies to the Cloud**](#3-planning-for-the-migration-of-applications-dependencies-to-the-cloud) (4 videos)
  - [Application options for cloud migrations](#application-options-for-cloud-migrations)
  - [Establishing a versioning scheme](#establishing-a-versioning-scheme)
  - [Documenting middleware configurations](#documenting-middleware-configurations)
  - [Documenting operating system dependencies](#documenting-operating-system-dependencies)
- [**4. Using Cloud Service Provider Migration Tools**](#4-using-cloud-service-provider-migration-tools) (6 videos)
  - [Using the migration process in Google Cloud](#using-the-migration-process-in-google-cloud)
  - [Using the Google Cloud Migrate tool](#using-the-google-cloud-migrate-tool)
  - [Working in Microsoft Azure](#working-in-microsoft-azure)
  - [Using the Azure Migrate tool](#using-the-azure-migrate-tool)
  - [Working in Amazon Web Services (AWS)](#working-in-amazon-web-services-aws)
  - [Using the AWS Server Migration tool](#using-the-aws-server-migration-tool)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps in cloud migration](#next-steps-in-cloud-migration)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### The role of application dependency
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/the-role-of-application-dependency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/the-role-of-application-dependency?u=76281980&t=0)** - Your company has given you the task of migrating your applications to the cloud, and you want to make sure that you are doing it right.
>
> **[0:10](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/the-role-of-application-dependency?u=76281980&t=10)** This course is going to help you perform a smooth migration.
>
> **[0:15](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/the-role-of-application-dependency?u=76281980&t=15)** You'll learn what's important to document as far as application dependencies, and where that information will fit in into your migration process.
>
> **[0:24](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/the-role-of-application-dependency?u=76281980&t=24)** I'll give you strategies for documenting your application dependencies and a few applications to make sure things go smoothly for you.
>
> **[0:34](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/the-role-of-application-dependency?u=76281980&t=34)** My name is Gary Grudzinskas.
>
> **[0:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/the-role-of-application-dependency?u=76281980&t=36)** I've been working with cloud technology for 10 years, and I have performed several migrations.
>
> **[0:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/the-role-of-application-dependency?u=76281980&t=42)** I want to share with you what I know to help you make your migration successful.
>
> **[0:47](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/the-role-of-application-dependency?u=76281980&t=47)** So please, join me in this course to get you started on your migration to the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (3), application (2)
> **CLI Commands:** make (3)
> **Speakers:** - your (1)


### 1. Application Dependency and Cloud Services

[↑ Back to Table of Contents](#table-of-contents)

#### Application migration overview
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=1)** - We're going to begin with the big picture of cloud migration, the process that you're going to go through in order to get your applications to function properly in the cloud.
>
> **[0:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=12)** By knowing the context and the end result of a successful application migration, you can be confident that you are documenting the right information about your application dependencies.
>
> **[0:26](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=26)** First, I want to let you know what benefits you and your company will be getting by moving your applications up to the cloud.
>
> **[0:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=36)** The first thing I'd like to share with you is just the sheer efficiency that you're going to have once you move your applications to the cloud.
>
> **[0:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=43)** Think about this.
>
> **[0:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=44)** You can deploy complex server environments in a matter of seconds with just a click of a mouse or a script that you write.
>
> **[0:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=52)** So if you have applications that are in development, being tested, you can set up that environment very, very quickly.
>
> **[1:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=61)** And rest assured, if you have a predefined image that you're rolling out, it has already the latest updates and patching.
>
> **[1:10](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=70)** This is voluntary whether you want to have this or not, because some updates, some patching can create some problems, so you are in control of that.
>
> **[1:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=80)** The next is flexibility.
>
> **[1:22](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=82)** Scaling up and scaling out.
>
> **[1:24](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=84)** Most systems now are built to handle your peak.
>
> **[1:29](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=89)** You do not want to turn customers away or turn your users away.
>
> **[1:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=93)** Now think about this, that capacity when you are not in your peak period just goes wasted.
>
> **[1:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=102)** It's just there for nothing.
>
> **[1:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=103)** If you can scale up, meaning that you add more resources, more memory, more processing power, whatever you need on demand, and this can be automatic or scale out, you need more servers, automatically adds the servers.
>
> **[1:59](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=119)** More important than this is scale down and scale in, meaning that if you're not at peak, you can reduce the amount of resources and reduce the amount of servers that are handling this.
>
> **[2:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=133)** You need more bandwidth, automatically expanded, and it's pretty unlikely that you're going to exceed the bandwidth power of these cloud service providers.
>
> **[2:23](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=143)** You need more storage, automatically add storage, so you're not going to have to add hard drives, add capacity at a cluster server, automatically, this all happens.
>
> **[2:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=156)** The collaboration.
>
> **[2:37](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=157)** Collaboration is one of the most important things inside of a business, how people work together.
>
> **[2:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=163)** If you have access to anyone from anywhere, on any device at any time, your collaboration is going to be a lot easier.
>
> **[2:53](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=173)** The paper trail, notice I have this in parentheses of changes.
>
> **[2:57](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=177)** One of the major pain points for collaboration is who did this?
>
> **[3:02](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=182)** When did they do this?
>
> **[3:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=183)** Why did they do this?
>
> **[3:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=185)** If everything is automatically recorded, as far as the collaboration goes of who did what, where, then those changes are very well documented.
>
> **[3:15](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=195)** And collaboration is a lot easier.
>
> **[3:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=198)** Saving money.
>
> **[3:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=200)** When you go to your big three, when you go to your cloud service provider, this is what they ingrain in you.
>
> **[3:26](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=206)** I want to explain why you're saving money, because you only pay for what you use.
>
> **[3:31](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=211)** You aren't built for your peak capacity.
>
> **[3:35](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=215)** So you don't have the peak infrastructure.
>
> **[3:37](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=217)** You don't have hardware maintenance.
>
> **[3:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=219)** You don't have to worry about who's maintaining everything.
>
> **[3:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=222)** And what they won't tell you that I will tell you is you have less people to pay.
>
> **[3:47](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=227)** Because as IT has developed, it's got to further and further away from the actual physical machines.
>
> **[3:56](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=236)** So you don't have a lot of people that you have to pay to maintain server infrastructure.
>
> **[4:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=243)** Security.
>
> **[4:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=244)** The biggest concern that you are going to have that's going to be expressed to you is, hey, how secure is this?
>
> **[4:11](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=251)** Let me give you some assurance here.
>
> **[4:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=254)** The breadth of security features in the cloud environment is enormous.
>
> **[4:19](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=259)** The cloud service provider companies are massive, and they can afford the best security people in the world.
>
> **[4:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=268)** You have robust cloud analytics and a security platform that is the best in the world for the security of your systems once you move them to the cloud.
>
> **[4:41](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=281)** The data.
>
> **[4:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=283)** Everything is automatically backed up.
>
> **[4:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=285)** And what that means is everything is automatically recovered in much less time.
>
> **[4:51](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=291)** Limited hardware malfunction.
>
> **[4:53](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=293)** You do have hardware malfunctions in the cloud, right?
>
> **[4:56](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=296)** Nothing is perfect.
>
> **[4:58](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=298)** You might have some downtime, but nothing compared to what you have on premises.
>
> **[5:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=303)** And the last thing, internal data theft.
>
> **[5:06](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=306)** We would like to think it's people outside of our companies that are the big threat, but more often than not, it's people inside the company.
>
> **[5:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=316)** And internal data theft, that is the issue.
>
> **[5:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=320)** So if everything is in the cloud, you're not going to have this surface that a lot of people are on.
>
> **[5:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=328)** The limited internal data theft means that unfortunately, the threat is really from inside your company, not necessarily outside of the company.
>
> **[5:38](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=338)** If everything is in the cloud, rather than servers that are local, you are going to make sure that data is more secure.
>
> **[5:46](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud?u=76281980&t=346)** So that's a look at what it's going to look like once you have your applications in the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (14), [[Security]] (5), data (5), [[Hardware]] (3), application (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Prerequisites:** set up (1)
> **Speakers:** - we (1)

#### Migrating applications to the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=0)** - [Presenter] The Process of Migrating Applications to the Cloud.
>
> **[0:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=3)** This is what I want you to know.
>
> **[0:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=5)** Where in this process do you find out the dependencies that your applications have?
>
> **[0:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=13)** And I think this might save you some time because you don't want to look for what you don't need.
>
> **[0:19](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=19)** And there might be some ideas here that you develop of saying, "Oh, there is something I need to look for for these dependencies that I didn't think about."
>
> **[0:27](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=27)** This is my own step-by-step.
>
> **[0:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=30)** It's gained from the research that I've done and the migrations that I have performed for people.
>
> **[0:37](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=37)** It's nine steps, and each nine step is designed to get you to the cloud.
>
> **[0:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=42)** So let's begin here, the first step.
>
> **[0:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=44)** The first step, what workloads, what applications do you have on your system?
>
> **[0:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=50)** If you are a large enterprise, you're going to have applications that you didn't know you had.
>
> **[0:56](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=56)** Maybe most people don't know you had those.
>
> **[0:59](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=59)** Once you start lining this up, you're going to be surprised at how long that list is.
>
> **[1:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=64)** And I know that you might be an environment that you've documented a lot of this.
>
> **[1:09](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=69)** Well, you're going to need to go through there and precisely list every workload and every application that you have.
>
> **[1:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=76)** Then comes dependencies.
>
> **[1:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=78)** Discover the dependencies that each one of these applications has.
>
> **[1:23](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=83)** We're going to be going over some software and some different techniques to find those out, but those dependencies are going to be important.
>
> **[1:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=90)** And then we get to priority.
>
> **[1:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=93)** Not all of your applications are created equal.
>
> **[1:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=96)** Some, you're going to need more than others.
>
> **[1:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=99)** And I bet you can name automatically the top three applications that your business depends on.
>
> **[1:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=108)** Well, you need to prioritize that.
>
> **[1:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=110)** You don't want just a list of all your applications.
>
> **[1:53](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=113)** You want to start at the top, the most important ones, and then get to the bottom, the ones that might not be so important.
>
> **[2:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=120)** You need to prioritize that list of applications.
>
> **[2:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=125)** And then we're going to talk about difficulty.
>
> **[2:07](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=127)** Not all the applications and their dependencies are going to be as easy to move to the cloud.
>
> **[2:15](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=135)** When we discover, from the cloud service providers, the applications that they give you to find out the dependencies, they're going to pretty much tell you four different levels.
>
> **[2:25](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=145)** And those are, "Hey, this application is ready right now to move to the cloud.
>
> **[2:31](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=151)** This application, it's going to need a little bit of work, but hey, after that we can move it to the cloud."
>
> **[2:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=156)** Then you have the maximum effort, the ones that are going to take you more time to move.
>
> **[2:41](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=161)** And you are going to discover some applications that just cannot be migrated, at least not now.
>
> **[2:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=170)** And then we get into strategy.
>
> **[2:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=172)** You see, the cloud service is a different environment.
>
> **[2:56](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=176)** You might have one application that you just use infrastructure as a service.
>
> **[3:02](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=182)** You might have another one that you use platform as a service.
>
> **[3:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=185)** Yet another one you might want to move up for service as a service.
>
> **[3:11](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=191)** And then we get into scheduling.
>
> **[3:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=193)** Your most important applications might not be the ones you move first.
>
> **[3:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=198)** You are going to need to know the order in which you are migrating these applications to the cloud.
>
> **[3:25](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=205)** So the schedule is just as it sounds.
>
> **[3:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=208)** I'm going to move this one and then this one, and then this one.
>
> **[3:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=212)** And you're going to have inter application dependencies as well that you're going to have to take into account.
>
> **[3:38](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=218)** Now that we have the schedule, we're going to do this: right-size.
>
> **[3:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=223)** Let me give you an analogy.
>
> **[3:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=225)** When you move from your home to another house, you don't bring the garbage with you.
>
> **[3:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=230)** You don't bring the dirty dishes with you.
>
> **[3:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=232)** You don't bring... You try and clean things up before you move them.
>
> **[3:56](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=236)** The same thing with your applications.
>
> **[3:58](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=238)** You're going to want to have the same versions of the operating systems, the middleware, and clean everything up before you move it.
>
> **[4:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=245)** And now it's time to migrate each workload according to your priorities, according to the schedule.
>
> **[4:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=252)** Then you start migrating them up, test each application once it's migrated, and then that application is migrated and you can move on to the next one.
>
> **[4:23](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=263)** So it's important to know where this fits in, where discovering the dependencies of your application fits into this whole process.
>
> **[4:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/migrating-applications-to-the-cloud-19294470?u=76281980&t=273)** And now that you know the nine different steps, it's time to move on to understanding what application mapping actually is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (9), cloud (8), business (1), [[IaaS|Infrastructure as a service]] (1), [[PaaS|Platform as a service]] (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### Application dependency mapping
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=0)** - [Instructor] Understanding application dependency mapping.
>
> **[0:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=3)** Let me start with the definition.
>
> **[0:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=4)** This definition kind of consolidated all the definitions I've seen.
>
> **[0:10](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=10)** It's "The process of discovering each application, what that application is dependent upon, and how all these applications are interconnected in the context of your entire network infrastructure."
>
> **[0:25](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=25)** Some of the challenges I would like you to note, and we start with security and compliance.
>
> **[0:31](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=31)** Security and compliance, that is the number one concern that you're going to have from the people that told you, we need to migrate to the cloud.
>
> **[0:40](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=40)** Because the internet is open.
>
> **[0:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=42)** You don't have that physical barrier protecting it.
>
> **[0:47](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=47)** You don't have necessarily your firewall, even though you can build the firewall and you can build it out just how you have it local, that's security is a concern.
>
> **[0:56](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=56)** Compliance, you have internal compliance needs, you might have external compliance needs for that information that you have, for that application to stay local or at the very least stay within the region or within the state.
>
> **[1:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=73)** So that compliance needs is a dependency for your applications that you might not have thought about and should be noted.
>
> **[1:22](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=82)** And then we have organizational changes.
>
> **[1:24](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=84)** Here's the deal.
>
> **[1:26](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=86)** Within the cloud, the organization and the maintenance of those applications is going to change.
>
> **[1:34](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=94)** You might not have people with the proper cloud skills within the organization to do this.
>
> **[1:41](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=101)** And users, think about them.
>
> **[1:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=103)** If you decide to replace an application, an application that you can't move to the cloud for various reasons, those users are going to have to be retrained on that new application.
>
> **[1:56](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=116)** And users, they might not like change as much as we like change.
>
> **[2:02](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=122)** So that is a consideration.
>
> **[2:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=125)** Your large databases, the sheer amount of data is going to prevent you from, over the internet, sending that up or uploading it to your cloud service provider so they can load it onto their network.
>
> **[2:21](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=141)** The good news is that they can send you this big box, and the big box has a bunch of hard drives on it.
>
> **[2:27](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=147)** You put your information inside of that box and literally physically ship it to your cloud service provider.
>
> **[2:35](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=155)** They unbox it, they hook it up to their system, and from their high speed network, they load it onto your portion of the cloud.
>
> **[2:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=165)** Also, your database might be outdated.
>
> **[2:49](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=169)** Your application might depend upon a database that isn't available in the cloud.
>
> **[2:55](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=175)** So that is an important element in documenting not only what database this application depends on, but the version of that database and how much information is inside of that database.
>
> **[3:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=188)** And then continued operations.
>
> **[3:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=192)** Some of the applications that you are documenting the dependencies on, your business can't run without.
>
> **[3:19](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=199)** So there is a possibility that you have an overlap before the actual cutover.
>
> **[3:25](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=205)** And think about this, access is not transferred automatically to the cloud.
>
> **[3:31](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=211)** You have people working on these applications, you have people administrating these applications.
>
> **[3:37](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=217)** Once you move them to the cloud, unless you rehost, those permissions that you have are not going to translate.
>
> **[3:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=225)** So when you're documenting dependencies, one of the dependencies is going to be who maintains this, what kind of access level they have?
>
> **[3:53](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=233)** And you're going to have to form a strategy to transfer that access level to the cloud environment.
>
> **[4:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=241)** Legacy applications, application sprawl.
>
> **[4:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=245)** I can guarantee you if you're large enterprise, You have applications, you had no idea where they came from.
>
> **[4:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=252)** Somebody eight years ago decided that they need this application, they put in a request for it, and they got that request and that application is just sitting there.
>
> **[4:22](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=262)** Eh, people probably don't use it, maybe they do.
>
> **[4:26](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=266)** And you're not sure What it does or why it's there or who uses it.
>
> **[4:31](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=271)** That's going to be an issue.
>
> **[4:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=273)** The 80-20 rule for applications migrating to the cloud means that 80% of your time is going to be spent on 20% of your applications.
>
> **[4:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=283)** Now these don't necessarily have the documentation that you require.
>
> **[4:49](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=289)** It runs on an outdated operating system that is not available in the cloud.
>
> **[4:54](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=294)** And it uses old middleware, old messaging system, an old database, something on there that prevents you from moving it to the cloud.
>
> **[5:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=303)** Legacy applications, that is going to take a lot of your time.
>
> **[5:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=308)** So you have a decision point coming up.
>
> **[5:11](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=311)** Do you need that legacy application or do you not need that legacy application?
>
> **[5:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=316)** And then finally, I want to go over this.
>
> **[5:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=318)** The differences between on-premises and the cloud that you should consider when you are documenting what dependencies your applications have.
>
> **[5:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=328)** Each cloud provider has its own platform.
>
> **[5:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=330)** Each cloud provider has its own APIs.
>
> **[5:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=333)** Which means that you have to harmonize your local system to the system that you're moving to.
>
> **[5:41](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=341)** So it's a good idea when you're documenting this to understand what your cloud service provider is going to require or you to maintain that application in the cloud.
>
> **[5:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=352)** The levels of abstraction, let me give you an example of what I mean here.
>
> **[5:56](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=356)** SQL database.
>
> **[5:57](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=357)** It might be a situation where, hey, you just take your images, you load 'em up to images or virtual machines in the cloud, and then you go from there.
>
> **[6:06](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=366)** That's infrastructure as a service.
>
> **[6:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=368)** However, all of them offer a Mongo DB or an SQL or a documented NoSQL database that you don't have to worry about the infrastructure behind that.
>
> **[6:21](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=381)** You just deal with the APIs.
>
> **[6:23](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=383)** You just deal with the platform.
>
> **[6:24](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=384)** That's platform as a service.
>
> **[6:26](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=386)** And every service provider has its own tools and its own dependencies.
>
> **[6:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=392)** So that has to be taken into account.
>
> **[6:34](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=394)** And that is one reason that you document these dependencies so you can harmonize them with what the cloud needs.
>
> **[6:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-dependency-mapping?u=76281980&t=403)** Up next, we're going to actually look into now documenting the dependencies for all of the applications that you have on your network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (21), application (15), database (8), [[Security]] (3), [[SQL]] (2)
> **Definitions:** is a  (4), means that (2), is an  (1)
> **Env Vars:** sql (2)
> **CLI Commands:** mongo (1)
> **Cross-References:** coming up (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Considerations for cloud migration
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=0)** - [Instructor] Now that we've looked at some of the issues that might arise, let me show you what to consider for each one of those for a cloud migration.
>
> **[0:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=8)** And these are just kind of common questions to ask.
>
> **[0:11](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=11)** If you have a large database, how are you going to move that database?
>
> **[0:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=16)** Remember, you have the option of physically moving that data with hard disk drives that are in a system that you ship.
>
> **[0:24](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=24)** That's going to be something to consider.
>
> **[0:27](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=27)** What need is there for continued operations?
>
> **[0:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=30)** So each one of your applications should have some form, some level of how important is it to continue this operation?
>
> **[0:41](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=41)** And if it is that way, you might have to move the data in intervals.
>
> **[0:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=44)** And this is going to create a parallel system, isn't it, to where you have some of your users operating on-premises and some of your users operating in the cloud.
>
> **[0:56](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=56)** Let me assure you, your cloud service provider knows about this, so it is completely feasible that you just move the data and move certain users in intervals, in steps that you can go through to keep your continued operations.
>
> **[1:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=72)** You are going to discover different applications that your apps depend upon.
>
> **[1:17](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=77)** It might be SAP, it might be CITRIX, it might be a custom application that you have.
>
> **[1:23](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=83)** So those applications that your app depends upon are going to have dependencies of themselves.
>
> **[1:29](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=89)** So it's going to be a long string of dependencies that go down the line.
>
> **[1:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=93)** Understanding this interoperability, this interdependence between all of your applications is going to be something that needs to be documented.
>
> **[1:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=104)** And then you have your workflows.
>
> **[1:46](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=106)** How do you maintain that application?
>
> **[1:51](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=111)** What monitoring do you do with it?
>
> **[1:53](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=113)** What analytics are available for it?
>
> **[1:56](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=116)** And what is the maintenance schedule for that application?
>
> **[2:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=121)** That is a dependency that you're going to need to record in order to have a smooth migration up to the cloud.
>
> **[2:09](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=129)** Your database, what does it depend on?
>
> **[2:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=132)** Does it depend on one server, a separate server?
>
> **[2:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=136)** Do you have a front-end and a backend?
>
> **[2:19](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=139)** So you don't just record the database and the size of the database and the version and kind of database, you have to record, is it on the same server?
>
> **[2:29](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=149)** Is it on a separate server?
>
> **[2:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=150)** How do the actual machines operate within this database?
>
> **[2:35](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=155)** You're going to have to know that information in order to make that migration.
>
> **[2:40](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=160)** And the storage, is it block-level or is it file-level?
>
> **[2:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=164)** Another dependency that you might not have thought about.
>
> **[2:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=168)** Data integrity.
>
> **[2:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=170)** When you have an application, it operates with data.
>
> **[2:53](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=173)** Now, everybody thinks all data is sensitive.
>
> **[2:58](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=178)** But, for sure, some data is very sensitive and you just can't have a data leak on that.
>
> **[3:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=184)** You're going to need to record and pinpoint those applications that have very, very sensitive data.
>
> **[3:11](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=191)** And what I would encourage you to do is not list every application and every dataset to be of utmost importance.
>
> **[3:19](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=199)** Some of them obviously are more important than others.
>
> **[3:23](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=203)** You're going to have to tag those to make sure that when you're migrating, that that data stays secure.
>
> **[3:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=210)** Then, what will you do with apps that cannot migrate?
>
> **[3:35](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=215)** You are going to have applications that it's just not feasible to migrate those.
>
> **[3:40](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=220)** You have two choices.
>
> **[3:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=222)** You can modernize the app, which basically means replace the app with something that is available with the cloud, or you're going to keep it on-premises.
>
> **[3:51](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=231)** So knowing what applications that cannot migrate is going to be important for the considerations that you have when you're scheduling this migration up to the cloud.
>
> **[4:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=243)** And some of the last common questions, the versions of the app that are in service?
>
> **[4:09](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=249)** You might have an application and it has 16 different iterations.
>
> **[4:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=254)** Most applications have a version number, some don't.
>
> **[4:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=258)** And those that don't, well, you're going to have to apply a version number to it.
>
> **[4:22](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=262)** The thing about this is part of this cleanup, part of this right-sizing that you consolidate the versions and try to keep the versions of the application, the middleware, and the operating system as common as you can.
>
> **[4:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=279)** That's going to make it a lot easier for you.
>
> **[4:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=282)** Then you have the web services.
>
> **[4:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=283)** Your applications are going to rely on different web services.
>
> **[4:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=288)** What is the version of those web services?
>
> **[4:51](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=291)** How is everything backed up?
>
> **[4:53](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=293)** If everything is backed up with a certain application, how is that going to transfer to the cloud?
>
> **[5:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=300)** So a dependency that you might not think about is how is that application backed up?
>
> **[5:06](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=306)** And unique dependencies.
>
> **[5:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=308)** You're going to have applications that just don't fit the mold, that just don't quite play right with your common databases, your common operating systems.
>
> **[5:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=320)** So identifying a unique dependency, flagging that application of, "Hey, this one's a little bit different.
>
> **[5:27](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=327)** This one operates differently than the norm."
>
> **[5:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=330)** That's going to be important.
>
> **[5:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=332)** And then think about your manual processes.
>
> **[5:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=336)** A lot of applications, you manually go in there and do something.
>
> **[5:40](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=340)** These are usually your older applications.
>
> **[5:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=342)** It's not automated.
>
> **[5:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=344)** You're going to have to need to record how that application is maintained, and specifically, if you have manual processes that have to be performed on that application.
>
> **[6:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/considerations-for-cloud-migration?u=76281980&t=360)** So those are some common questions to ask when you are migrating up to the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (12), data (10), cloud (8), database (7), web (3)
> **CLI Commands:** make (3)
> **Env Vars:** sap (1), citrix (1)
> **Definitions:** is a  (1), basically means (1)
> **Speakers:** - [instructor] (1)

#### Detailing app dependencies for cloud migration
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=0)** - [Instructor] Now it's time to get into some details, details of things that we've already covered, of what you need to document when you are looking at the dependencies for your applications.
>
> **[0:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=13)** I want to start with the big picture here, and I don't want you to get lost in this because it's pretty simple what you're doing.
>
> **[0:21](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=21)** You're trying to find out what you have and therefore how difficult will this be to move to the cloud?
>
> **[0:29](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=29)** And then you need to determine what type of service are you going to migrate to and when are you going to do it?
>
> **[0:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=36)** So don't lose this big picture here.
>
> **[0:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=39)** Just three steps of what you have to do.
>
> **[0:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=42)** What do you got?
>
> **[0:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=44)** Where are you going to move it?
>
> **[0:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=45)** And when are you going to move it?
>
> **[0:47](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=47)** So let's go into some more detail now.
>
> **[0:51](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=51)** The deployment level, is this an in-house application?
>
> **[0:55](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=55)** Is it used in production?
>
> **[0:57](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=57)** Do you have applications at staging?
>
> **[0:59](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=59)** Do you have applications at development?
>
> **[1:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=61)** Do you have applications being tested presently?
>
> **[1:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=64)** So an application isn't as simple as, oh, I got this one application and here are the dependencies for that application.
>
> **[1:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=72)** That application might have several stages in it, and you're going to need to record that as well.
>
> **[1:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=78)** The data type, is it stateful, is it stateless data?
>
> **[1:22](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=82)** Does it have another application that has data that it relies on?
>
> **[1:27](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=87)** And what is the documentation for that application?
>
> **[1:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=90)** When you have your list of applications, it's good to have a link or some kind of note to the documentation for that particular application.
>
> **[1:41](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=101)** And what type?
>
> **[1:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=103)** Is this application written in-house?
>
> **[1:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=105)** Is it written by a partner?
>
> **[1:47](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=107)** Is it purchased from a large vendor?
>
> **[1:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=110)** Somebody that does document, that does have some skin in the game to make sure that you keep that application.
>
> **[1:57](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=117)** A lot of applications, as you know, are purchased from small vendors, literally somebody that did it in their garage.
>
> **[2:06](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=126)** That is going to have much less documentation and much less information that's going to help you when you're migrating that application to the cloud.
>
> **[2:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=138)** And the importance.
>
> **[2:19](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=139)** We talked about this, not all applications are created equal.
>
> **[2:23](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=143)** Well, develop a tier system.
>
> **[2:26](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=146)** Is it critical, is it moderate, or is it really not important?
>
> **[2:31](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=151)** So you don't have to guess what that application does or write too much information on it.
>
> **[2:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=159)** You can have five tiers if you'd like.
>
> **[2:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=162)** The thing is, when you're going over the importance of that application, have some kind of tiering system that you develop that's going to help you personally the most to do this.
>
> **[2:55](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=175)** So you could literally in your list have just, this is a one, this is a two, this is a three.
>
> **[3:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=180)** That is the detail that you need to have for that.
>
> **[3:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=183)** That's going to help you develop your schedule of what applications are moved first, what applications are moved second, which applications are moved last.
>
> **[3:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=194)** And then we have some other considerations here.
>
> **[3:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=198)** Compliance considerations, compliance requirements, those are going to have to be developed.
>
> **[3:24](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=204)** And maybe a link to the compliance, some notes about what compliancy this application has to meet, you have to document that.
>
> **[3:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=212)** That is a dependency.
>
> **[3:34](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=214)** The compliance is going to be one of those things that is kind of a roadblock for your migration up to the cloud.
>
> **[3:41](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=221)** How much documentation does it have?
>
> **[3:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=224)** What are the operational standards for that application?
>
> **[3:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=228)** Who and how is it managed?
>
> **[3:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=230)** Because knowing who manages it, that is going to be important because when you migrate it up to the cloud, that access scheme, that permission scheme that you have is going to change and it's going to have to be adapted to the cloud.
>
> **[4:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/detailing-app-dependencies-for-cloud-migration?u=76281980&t=245)** So that is some detail on your applications that you need to think about when you're documenting the dependencies of your applications before you move them to the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (15), cloud (6), data (3), game (1)
> **Definitions:** is a  (4)
> **CLI Commands:** find (1), make (1)
> **Documentation:** the documentation (2)
> **Analogies:** picture (2)
> **Cross-References:** we talked about (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)


### 2. Application Dependency Mapping Techniques

[↑ Back to Table of Contents](#table-of-contents)

#### Using installed agents
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=1)** - Now that we have the big picture of migration and a great overview of what to look for when you are documenting your application dependencies, I would like to go over the general methods that you can implement for discovering your application dependencies.
>
> **[0:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=16)** Each one of these methods is going to have a different scenario of when to use it.
>
> **[0:21](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=21)** I'll go over how they work and tell you when it's appropriate to use a particular method, and the pros and cons of using each one.
>
> **[0:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=30)** The first method I want to share with you is where you actually install an agent, software on the server itself.
>
> **[0:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=39)** So, this component can take a look at internally what applications are doing within the server itself, and also take a look at where it is communicating to other servers that that application depends upon.
>
> **[0:55](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=55)** It conducts real-time monitoring of incoming and outgoing traffic, and it collects detailed information about all the dependencies and all the services each application is using, by monitoring those applications because it sits on the server itself.
>
> **[1:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=76)** With all of these, I want to tell you, well, why use this?
>
> **[1:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=80)** What's the benefit of using it?
>
> **[1:22](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=82)** And where you might not want to use this, where it's not applicable.
>
> **[1:27](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=87)** Let's go over the pros.
>
> **[1:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=88)** Full, granular insight of apps, because, think about it, this agent is installed on the server itself, so we can give you a lot of details of those applications.
>
> **[1:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=102)** Everything is real-time.
>
> **[1:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=104)** Now, these aren't necessarily built to tell you how to migrate to the cloud, and the time it takes you to find out this information might not be that applicable.
>
> **[1:56](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=116)** It's less expensive than some of the more complex methods that we're going to go over, and it can take a look, real good detail, about each individual app that is on that server.
>
> **[2:10](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=130)** Here's the problems with it.
>
> **[2:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=132)** It's time-intensive to deploy.
>
> **[2:15](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=135)** 'Cause think about it, you have to deploy this, install it on every server that you want to monitor.
>
> **[2:22](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=142)** That can take a lot of time.
>
> **[2:25](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=145)** As it is monitoring, it's taking a look at all the applications that are on that particular server, so it's going to take up some resources.
>
> **[2:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=153)** You could have a security exposure here, and that's because that agent is on that server.
>
> **[2:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=159)** It has access to all the information on that server.
>
> **[2:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=163)** So this could be somewhere where you have to take into account what the sensitivity of the data is installed on that server.
>
> **[2:53](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=173)** The monitoring of this.
>
> **[2:55](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=175)** This is not something that just shoots out and gives you all the information about what you have on your network.
>
> **[3:02](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=182)** Each agent is going to have different information.
>
> **[3:06](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=186)** Now let me tell you where you're going to use this.
>
> **[3:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=188)** You're going to use this on the most important applications that you have, the ones that are high up on your priority list.
>
> **[3:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=198)** This is not something that you are going to use to monitor every single application and find out its dependencies.
>
> **[3:26](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=206)** That's going to take you too long.
>
> **[3:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=208)** It's going to be a lot of labor that you don't necessarily need to have.
>
> **[3:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-installed-agents?u=76281980&t=213)** So, you're going to use agents that are installed on the server, called agent monitoring, for the most important applications that you have in your environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (5), [[Real-Time]] (2), traffic (1), cloud (1), [[Security]] (1)
> **CLI Commands:** find (2)
> **Prerequisites:** install (2)
> **Analogies:** picture (1)
> **Speakers:** - now (1)

#### Using the sweep and pull method
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=0)** - [Instructor] The next method I want to share with you has been used for a very long time, called sweep and poll.
>
> **[0:07](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=7)** This is how it works.
>
> **[0:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=8)** This is installed on a centralized location.
>
> **[0:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=12)** It is a method of discovering apps and services on the entire enterprise.
>
> **[0:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=18)** It pings the IP addresses of devices on a network and finds out how they're communicating to each other, and then identifies the servers, the applications, and all the components and their connections to each other.
>
> **[0:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=33)** So this can map out your network, who is talking to who, how they are talking to each other, when they're talking to each other.
>
> **[0:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=42)** So a good map is the end product of the sweep and poll method.
>
> **[0:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=48)** And again, it is very traditional.
>
> **[0:51](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=51)** This is what we use for years and years and years to try to discover what applications are on your network and what those applications depend upon.
>
> **[1:02](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=62)** Here are the pros and cons for this.
>
> **[1:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=65)** The benefit, it can examine the entire network from a centralized location.
>
> **[1:11](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=71)** Compare that to the agent method where that agent is installed on the servers themselves.
>
> **[1:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=78)** So you have to go back in there and find out what the process is.
>
> **[1:21](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=81)** It's not centralized.
>
> **[1:23](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=83)** This is very centralized.
>
> **[1:25](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=85)** It's a lightweight process because you're not really breaking the packets open necessarily.
>
> **[1:31](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=91)** You're just finding out that application and what servers and what processes and what services that application is talking to.
>
> **[1:41](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=101)** It's a relatively cheap process.
>
> **[1:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=104)** It's not very sophisticated, but if you just want to find out what dependencies are and not really details about those dependencies, this can work quite good.
>
> **[1:55](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=115)** It's not good at complex systems because systems now are much more complex than they used to be.
>
> **[2:02](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=122)** Traditionally, hey, this worked fine, but now, hey, these applications are quite sophisticated.
>
> **[2:09](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=129)** The middleware is more sophisticated.
>
> **[2:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=132)** The operating system is more sophisticated, so you're not going to get the details that you want.
>
> **[2:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=138)** However, if you just want to begin with a map, begin with what applications are out there.
>
> **[2:24](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=144)** It's pretty good for that.
>
> **[2:26](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=146)** But if you're looking for comprehensive knowledge, detailed knowledge about the applications and what those applications depend upon, it's not going to work that well for you.
>
> **[2:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=156)** So when would you use this?
>
> **[2:38](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=158)** You would use this maybe at the beginning of your process when you're making that list, that list of different applications that you have and the dependencies that that application is using.
>
> **[2:51](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-sweep-and-pull-method?u=76281980&t=171)** However, to get into more detail, you're going to probably want to install an agent or use some of the more advanced techniques that we're going to talk about next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (3), next (2), product (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Using network monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=0)** - [Speaker] Now we have a more sophisticated approach, and that's using network monitoring to discover your application dependencies.
>
> **[0:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=8)** What it is, is a centralized location, and it examines the real time packet information in a more sophisticated manner then just saying, "Okay, this application is communicating with this server, and this server that is communicating with is communicating with another server.
>
> **[0:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=28)** Let's go ahead and map that out."
>
> **[0:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=30)** This gives you packet-level information by capturing the packets themselves and taking a look inside of those packets.
>
> **[0:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=39)** This uses something called NetFlow protocol.
>
> **[0:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=43)** It's an open source protocol that can take a look at packets and has information about those packets themselves.
>
> **[0:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=52)** Because your network has a lot of communication going on, and if you have information about what is contained within those packets themselves, that can move you along in your journey to adding more details to the application dependencies.
>
> **[1:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=73)** Let's just review for a second the NetFlow protocol.
>
> **[1:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=76)** If you notice the packets that flow through, it isn't just that this server is communicating to this server, it's what it's communicating.
>
> **[1:27](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=87)** So it can give you a lot more information than just a network monitoring type interface.
>
> **[1:34](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=94)** Let's take a look at the pros and cons of using Network Monitoring.
>
> **[1:40](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=100)** The benefits, real-time application performance information, meaning that you know in a pretty precise manner how your servers are communicating to each other and immediately know how that application is using its dependencies.
>
> **[2:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=120)** And remember, one application can be dependent on another application, and that application is dependent on other applications, and then you have middleware and operating systems, and things like that.
>
> **[2:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=133)** Or you would not use this if you have a large data center.
>
> **[2:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=138)** This is going to cause so much bandwidth being used up by breaking apart every application and taking a look at the packets going to and fro that application that it's going to slow things down.
>
> **[2:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=152)** And if you have a very complex network, a very large network, that is really going to cause a lot of grief for your applications, because they're answering all these questions all the time.
>
> **[2:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=164)** If you intercept every single packet going to and fro that application, it's going to slow it down and it's going to slow it down and possibly make it unavailable for your users and your customers.
>
> **[2:58](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=178)** This doesn't really give you quite the granular application interdependencies that you might want.
>
> **[3:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=185)** When you're mapping out your dependency structure of your applications, you might have two or three applications that depend on the same server or the same service.
>
> **[3:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=196)** This doesn't really give you that information that you might need for it.
>
> **[3:21](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=201)** You use network monitoring for application dependency mapping in a situation where you have maybe a small to medium sized network.
>
> **[3:31](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=211)** Where you want more information than a sweep and pull can give you.
>
> **[3:35](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=215)** Where you don't need that granular detail of those applications and how they speak to each other.
>
> **[3:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=223)** To do that, you need the next one in line.
>
> **[3:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-network-monitoring?u=76281980&t=225)** Intelligent traffic based mapping.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (13), [[Real-Time]] (1), data (1), next (1), traffic (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [speaker] (1)

#### Using intelligent traffic-based mapping
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=1)** - [Instructor] The last method I'm going to show you, probably the one you're going to use most.
>
> **[0:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=5)** This is the most modern, and I wish they had this a long time ago, it would've saved a lot of people, a lot of time.
>
> **[0:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=12)** This is intelligent traffic-based mapping, and here's how it works.
>
> **[0:19](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=19)** You use machine learning.
>
> **[0:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=20)** And by machine learning, what I mean is you have your cloud service providers, they have migrated most of the applications that you are going to migrate already, and they've built a database about how these applications work, what dependencies these applications have, and how they function according to the database of all the prior migrations that happened.
>
> **[0:47](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=47)** So, you can kind of stand on the shoulder of greatness and not have to reinvent the wheel by using this.
>
> **[0:54](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=54)** It filters out the noise from the signal.
>
> **[0:57](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=57)** Let me explain that.
>
> **[0:58](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=58)** On your network, you have a lot of traffic.
>
> **[1:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=61)** And if you've ever dove into the traffic actually going on in your network, you're going to discover most of that traffic, most of that packet's going to and fro and here and there on your network really don't have much significance as far as your application mapping goes.
>
> **[1:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=80)** It doesn't tell you anything about the dependencies.
>
> **[1:22](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=82)** What they are are communication protocols, and handshaking, and heart beating, and things like that to overall keep the function of the network.
>
> **[1:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=93)** Well, this can filter right through that.
>
> **[1:34](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=94)** This can tell you where the signal is out of that noise.
>
> **[1:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=99)** It automatically discovers a relationship between applications, servers, connection points, and related services.
>
> **[1:47](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=107)** It does this by identifying what applications you have.
>
> **[1:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=112)** Once it identifies that application, it can say, "Okay, here's the dependencies, here's everything, onto the next application."
>
> **[1:59](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=119)** When you go to your cloud service provider and you download their application to assess and tell you what dependencies you have and how they're going to fit into migrating to their cloud platform, it's going to use this and it's going to tell you what your applications are, what dependencies it has.
>
> **[2:21](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=141)** So, this method, you're going to very likely be using, and I want you to know how it works and how this almost miracle, it tells you what dependencies this application has automatically.
>
> **[2:34](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=154)** Well, it's been to that rodeo before and it knows what that application's tendencies are, what dependencies it has, and how it functions according to its database.
>
> **[2:47](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=167)** Let tell you what's good about this, realtime-application performance information.
>
> **[2:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=172)** So, it can tell you real time in a very quick manner, immediately detect the application dependencies because it has that information already.
>
> **[3:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=184)** And it gives you a very detailed map of your dependencies.
>
> **[3:10](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=190)** The cons, there's situations where it's not accurate.
>
> **[3:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=194)** Think about this.
>
> **[3:15](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=195)** If this is going out and pinpointing an application that you have on your network and according to its database, it depends on this, it's service this, that needs this service, it uses that database.
>
> **[3:29](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=209)** Well, how about you're in a situation where you've changed that?
>
> **[3:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=213)** This is not the normal behavior, this is somewhat unique as far as that application goes.
>
> **[3:41](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=221)** You changed it, you manipulated it, and something is different.
>
> **[3:46](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=226)** Well, then what intelligent mapping is going to do, it's not going to give you the precise information and it might not be accurate.
>
> **[3:56](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=236)** This is expensive for large enterprise networks because it has to go through there, churn, and tell you all the dependencies that you have.
>
> **[4:06](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=246)** Here's the good news.
>
> **[4:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=248)** Most cloud service providers have their own version of this.
>
> **[4:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=253)** You download that version of intelligent mapping, it goes through your network and then gives you not only information about the dependencies that you have, it gives you information about what you need to do to that application to get it to work in their environment and how it's going to work in their environment.
>
> **[4:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=273)** And many times you click a button and it automatically migrates that application.
>
> **[4:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=279)** There's an incentive for these cloud service providers to give you that information in order to get you to migrate and move your applications onto their servers.
>
> **[4:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=290)** When you use something that is bought off the shelf to find out what application dependencies you have, it might be over complicated for cloud migrations, and this is what I mean.
>
> **[5:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=303)** It might give you way more information than you need to know in order to move it to the cloud.
>
> **[5:09](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=309)** So, when you get the results of this, you're going to take a look at it and say, "My goodness, look at this map."
>
> **[5:15](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=315)** Holy cow, this application is real sophisticated, isn't it?"
>
> **[5:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=320)** Well, a lot of that information you never even needed to know in the first place in order to map those dependencies in order to harmonize that with what the cloud service provider offers you.
>
> **[5:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=336)** So, intelligent mapping uses artificial intelligence, it uses its database, it uses its history of the other people that migrated that application to the cloud, and you get the benefit of all of that.
>
> **[5:51](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-intelligent-traffic-based-mapping?u=76281980&t=351)** So, that's a look at intelligent-based mapping for application dependencies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (16), cloud (9), database (6), traffic (4), next (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 3. Planning for the Migration of Applications Dependencies to the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### Application options for cloud migrations
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=1)** - We've discovered different methods that you can use to find out what servers, applications, and services that your applications are using.
>
> **[0:10](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=10)** Now it's time to delve into the strategy for migrating your applications to a cloud environment, and details that might not show up when you are mapping your dependencies.
>
> **[0:23](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=23)** This will help you know what to look out for, and focus your attention on the details that matter in the context of migrating your applications to the cloud.
>
> **[0:35](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=35)** I want to share with you, what are you going to do with your applications?
>
> **[0:40](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=40)** You've made a list of your application, you know the dependencies, now we're talking about your strategy for moving it to the cloud, and you have a lot more options than if you're moving it just to another data center.
>
> **[0:53](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=53)** Let me go through those options that you have for moving up to the cloud and they all begin with R.
>
> **[1:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=61)** Let's go to the first one, that's rehost.
>
> **[1:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=65)** This is where you would clone your servers, image it, send that image up to the cloud, and then reestablish that server as is.
>
> **[1:17](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=77)** There's several benefits to this.
>
> **[1:19](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=79)** If you have a system that just isn't going to operate with modern operating systems, or it's so sophisticated that hey, you have to just move these servers quite literally up to the cloud as is, then rehost is your answer.
>
> **[1:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=96)** You just image that server, send it up to a cloud and install it on a cloud vm.
>
> **[1:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=102)** This will be infrastructure as a service.
>
> **[1:46](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=106)** Next, we take a look at re-platform the application, and this would be that you can modernize the app to work with the standard cloud platform.
>
> **[1:55](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=115)** You would reinstall that operating system, reinstall that application along the whole dependency line in order to take advantage of the images that are available in the cloud.
>
> **[2:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=133)** So you're not really rehosting, you're not imaging, and then moving that image all the way up, you're kind of redoing it here or replatforming this on the cloud servers themselves, and this would be an infrastructure as a service as well as rehosting.
>
> **[2:29](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=149)** Now let's take a look at a little more sophisticated move, and that is refactor the application.
>
> **[2:37](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=157)** This is where you take a lot of your code, your framework and just tweak it a little bit.
>
> **[2:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=164)** Use most of your existing code and adjust it, just portions of it, to work with the cloud as a service provider.
>
> **[2:54](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=174)** Let me give you an example, the SQL database.
>
> **[2:57](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=177)** You might have an SQL database that you rehost, right?
>
> **[3:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=181)** You would just image your server, quite literally, send that image up, and roll out a VM in the cloud with that image.
>
> **[3:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=192)** Well, that is still you taking care of that SQL database.
>
> **[3:17](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=197)** How about you decide that I'm going to use, let's say in Microsoft Azure, a thing called Azure SQL, and that is an SQL.
>
> **[3:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=208)** And all you do is take care of the database.
>
> **[3:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=212)** You don't take care of the server itself.
>
> **[3:34](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=214)** You don't install SQL, you don't image SQL, you don't set up SQL, you let the cloud service provider do it.
>
> **[3:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=224)** So you could very well be in a situation where this works out best for you, that you just adjust it a little bit according to the cloud service APIs and workflows, and then you don't worry about maintaining that SQL database.
>
> **[4:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=241)** You just worry about using that SQL database.
>
> **[4:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=244)** And this would be a platform as a service.
>
> **[4:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=248)** And then that leads us to something that your application is going to be difficult to move to the cloud.
>
> **[4:17](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=257)** You might have to rebuild the app, rewrite the entire code, and take advantage of the APIs and the application interface that the cloud service provider has.
>
> **[4:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=272)** You modernize this.
>
> **[4:34](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=274)** And again, what we're trying to do, the problem with rehost is that, hey, you have the same issues for with maintaining that, the same challenges and what you've done is you've just kind of moved it up to the cloud.
>
> **[4:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=288)** With something like this, you let the cloud service provider take care of everything that's in the background.
>
> **[4:56](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=296)** And this allows you to just focus on the application itself, not maintaining the servers, not making sure the operating system, not patching it, not doing this or that.
>
> **[5:07](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=307)** You just deal with the interface.
>
> **[5:09](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=309)** And again, this is going to be a platform as a service to rebuild that application to take advantage of what the cloud service provides for you and take you away from the actual maintenance of the infrastructure for that particular application.
>
> **[5:29](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=329)** And then we have a situation where that application is just not going to work on the cloud.
>
> **[5:37](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=337)** It's just not going to work.
>
> **[5:38](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=338)** So you have this option and that is replace the application.
>
> **[5:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=342)** You retire the old one, you find a comparable application that is offered by your cloud service provider and you just use that application.
>
> **[5:54](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=354)** You somewhat transform the use of that old application, probably a legacy application, and you just use some kind of software as a service up in the cloud that you just have to worry about setting that up.
>
> **[6:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=373)** You don't have to worry about maintaining it, you just use their software and use that as a service.
>
> **[6:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=380)** So that's one option that you have for applications you just can't move to the cloud as is.
>
> **[6:26](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=386)** The other one, you retain the application, you keep it, it's on your servers, it's on premises, you're not going to move this to the cloud.
>
> **[6:35](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=395)** This is going to be a hybrid environment.
>
> **[6:37](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=397)** And this is for those applications that for one reason or another, you just want to keep.
>
> **[6:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=405)** So you have two options don't you, for applications that you can't move to the cloud?
>
> **[6:49](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=409)** Either you replace it or you retain it.
>
> **[6:53](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=413)** And if it cannot be moved to the cloud, then it's going to be on premises.
>
> **[6:57](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=417)** And you're going to need to set up a hybrid environment in order to do this.
>
> **[7:02](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=422)** But it's certainly an option that you have.
>
> **[7:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=424)** So that is a look at the different strategies you can have.
>
> **[7:09](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=429)** Each application is going to have its own strategy of how you migrate that one up to the cloud, dependent upon many factors.
>
> **[7:17](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=437)** You rehost it, you refactor it, you rebuild it, you replace it, you retain it.
>
> **[7:25](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/application-options-for-cloud-migrations?u=76281980&t=445)** Whatever strategy you choose, now you have more options to migrate your applications to the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (29), application (17), [[SQL]] (10), database (6), [[IaaS|Infrastructure as a service]] (2)
> **Env Vars:** sql (10)
> **Prerequisites:** install (2), set up (2)
> **CLI Commands:** find (2)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - we (1)

#### Establishing a versioning scheme
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=1)** - [Instructor] Establishing an application versioning scheme for cloud migration.
>
> **[0:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=5)** Let me tell you what I mean by this.
>
> **[0:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=8)** When you have applications, they're going to have a version.
>
> **[0:11](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=11)** That version is going to require a range of operating systems, a range of middleware, a range of scripting language, and here's the thing, you're trying to get all your applications to use the same operating system, the same middleware, and the same scripting language.
>
> **[0:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=30)** The goal is to standardize the operating system, middleware, and scripting language for all of your applications that are going to be migrated.
>
> **[0:38](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=38)** This is going to make it easier for you once you migrate those applications, because you have a base inside of the cloud that you can run your applications on.
>
> **[0:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=48)** And here's the thing, some of the dependent operating systems, middleware, and scripting languages are not necessarily available from your chosen service provider, so optimizing your standardization of your operating systems, your middleware, and also your scripting language is going to make it easier once you migrate to the cloud, and it's going to make it easier to migrate to the cloud.
>
> **[1:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=78)** However, this isn't always possible, so you're going to have to explore a few options.
>
> **[1:23](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=83)** This is a good time to talk about cloud types, because if that scripting language that you're using or that middleware is not available from your chosen cloud provider, perhaps you go to another one, or perhaps you look into a different type environment.
>
> **[1:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=102)** So let's start with this one, hybrid cloud.
>
> **[1:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=105)** This is where you have an on-premises entity.
>
> **[1:49](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=109)** You have an entity inside of the cloud, and the two mix together, you are going to have this situation as you are migrating your applications to the cloud.
>
> **[2:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=120)** You're not going to do all of them at once, and there is going to be a period of time when you have a hybrid cloud.
>
> **[2:06](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=126)** So what is this?
>
> **[2:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=128)** It's a combined public cloud with on-premises or your private data center.
>
> **[2:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=134)** Some resources remain where you are, on-premises.
>
> **[2:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=138)** Some of the resources are moved up to the cloud.
>
> **[2:21](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=141)** Now, the key factor in doing this is the integration between your on-premises and what you have in the cloud.
>
> **[2:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=150)** Most likely when you're done, you're going to have this, a single cloud.
>
> **[2:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=153)** This by far, is the most used.
>
> **[2:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=156)** You only have one vendor, and that's going to be Google, or GCP, AWS, which is Amazon, or you're going to have Microsoft Azure.
>
> **[2:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=165)** All of these service providers provide you an opportunity to have some of the information on your own cloud, and some of the information on their cloud.
>
> **[2:57](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=177)** Now, let me tell you the difference between that and a hybrid environment.
>
> **[3:02](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=182)** The interface, what you use to manage your cloud is going to be the same, and it's almost transparent, whether it is on-premises, in your data center, or it is up in the cloud in their data center.
>
> **[3:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=198)** The difference between hybrid and having this combination of private cloud and public cloud is the interface, and the integration between those two data centers.
>
> **[3:31](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=211)** Lastly, you might be in a situation like this, that, "Hey, I like this one particular benefit that the Google Cloud is going to provide for me.
>
> **[3:40](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=220)** However, look what Microsoft Azure operates in this online active directory," and you want to combine the two.
>
> **[3:51](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=231)** Well, you can do that, and you leverage different features from that cloud provider to another cloud provider.
>
> **[3:58](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=238)** So all three of these are a possibility.
>
> **[4:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=240)** The goal, again, is to have your applications use a standardized set, set by you and your company of your operating system, your middleware, and your scripting languages.
>
> **[4:15](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/establishing-a-versioning-scheme?u=76281980&t=255)** Next, we're going to discover your middleware and what to look out for and document as far as that goes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (20), [[Scripting]] (7), data (4), [[Hybrid Cloud]] (2), [[Microsoft Azure]] (2)
> **CLI Commands:** make (3), aws (1)
> **Env Vars:** gcp (1), aws (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Documenting middleware configurations
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=0)** - [Instructor] Documenting Middleware Configurations for Cloud Migrations.
>
> **[0:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=5)** Now, you're in a position where you have listed the different applications that you have.
>
> **[0:10](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=10)** You've gone through the dependencies.
>
> **[0:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=12)** Well, there's some things that might have been missed.
>
> **[0:15](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=15)** And I want to emphasize what's important to document for each one of these processes, otherwise defined as middleware.
>
> **[0:23](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=23)** Let's start with the most important one, and that's the databases.
>
> **[0:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=28)** The thing is, your database might not be available from your chosen cloud service provider.
>
> **[0:35](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=35)** The biggest thing to know, is it SQL, NoSQL, or is it document-based?
>
> **[0:40](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=40)** In SQL, We have SQL Server, Oracle, PostgreSQL, MySQL, amongst some other things.
>
> **[0:47](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=47)** Now, SQL is going to work quite well for your application once you move it up to the cloud.
>
> **[0:55](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=55)** However, there might be some older versions of SQL that's required by that application.
>
> **[1:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=61)** So it's important to document what version of SQL, what type of SQL, so you can make the decision eventually of how are you going to get that database up to a cloud server.
>
> **[1:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=76)** For the NoSQL are document-based MongoDB all over the place and this is the one that's going to be the most available for your cloud service provider.
>
> **[1:25](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=85)** And there's some other ones included here as well.
>
> **[1:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=88)** Now, caching.
>
> **[1:29](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=89)** Here's why I want to emphasize this.
>
> **[1:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=92)** Your caching software is not necessarily going to show up with these different programs that go out and tell you what your application dependencies are.
>
> **[1:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=103)** So you're going to have to go in there and document what caching software you're actually using.
>
> **[1:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=110)** Caching, it's a memory buffer used to store frequently accessed data inside of a high-speed temporary location, so once things ease up, hey, it can access that information quite quickly.
>
> **[2:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=124)** Applications with mass traffic are going to have this.
>
> **[2:07](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=127)** Some of the common caching software is Redis, AppFabric, PrimoCache, Memcached.
>
> **[2:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=134)** You need to know what caching software that application uses if it uses one.
>
> **[2:19](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=139)** And again, I want to emphasize, this information might not be available from the method that you used to map your application dependencies.
>
> **[2:29](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=149)** And it's going to matter because on the cloud, from your cloud service provider, they might or might not offer the same type of caching.
>
> **[2:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=159)** So that application is going to somewhat have to change.
>
> **[2:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=163)** Then we have the message queues.
>
> **[2:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=165)** This allows the apps to talk to each other in a very secure, durable way.
>
> **[2:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=172)** Some of the ones that are common is Microsoft Message Queuing, RabbitMQ, amongst some others.
>
> **[2:59](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=179)** So documenting what queuing software you use for your messaging is going to be important because again, you have to document that yourself because that might not be part of your application mapping software result.
>
> **[3:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=194)** And then finally, we have this, and this is perhaps the most important one.
>
> **[3:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=198)** Because the cloud is web-based, right, you are going to use an interface for your web services on pretty much most of the applications that you have.
>
> **[3:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=212)** So you have software and you have a cloud service, you have an application, and these provide your web protocols.
>
> **[3:38](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=218)** Here's the good news.
>
> **[3:40](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=220)** All of the major ones that you're going to use, XML-RPC, UDDI, SOAP, REST, they're all available on your cloud service provider.
>
> **[3:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=232)** This is going to be the most robust offering for middleware that you're going to be provided from your cloud service provider.
>
> **[4:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=241)** So in sum, recognizing your middleware, trying to get your applications to use the same middleware, and then finding out if that middleware is available from your cloud service provider is an important step and going to make your migration easier.
>
> **[4:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-middleware-configurations?u=76281980&t=260)** So make sure you do a good job of documenting all the middleware that you have for your applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (12), application (8), [[SQL]] (6), web (3), database (2)
> **Env Vars:** sql (7), xml (1), rpc (1), uddi (1), soap (1)
> **CLI Commands:** make (3), mysql (1)
> **Definitions:** defined as (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### Documenting operating system dependencies
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=1)** - [Instructor] Finally, we get to documenting your operating system dependencies for cloud migration.
>
> **[0:07](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=7)** Here is the goal that you have for this.
>
> **[0:10](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=10)** The reason you want to have all your applications use the same operating system is because older operating systems that your application might depend upon are not available from your cloud service provider.
>
> **[0:24](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=24)** This could be one of the biggest sticklers you have for a particular application, whether it's able to move to the cloud.
>
> **[0:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=32)** It's a great idea for your wellbeing in the future after your applications are migrated to the cloud, to have some consolidation and standardization of what operating systems are used.
>
> **[0:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=48)** It's kind of like your company standard operating system.
>
> **[0:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=52)** That's why versioning of your application is going to be so important 'cause you want to consolidate the version of the operating systems that are used and each cloud provider has their own operating system requirements for migrated VMs.
>
> **[1:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=68)** Here's another thing you need to look out for.
>
> **[1:11](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=71)** If you have an application and you run a patch for your operating system and then all of a sudden your application doesn't work.
>
> **[1:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=80)** Well, you don't run that patch or you sit, if you're wise, you sit on that patch and don't do it right away and wait to see if you have some recorded problems from other people.
>
> **[1:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=92)** This might be an issue for you, that any operating system that you get by a cloud service provided image is going to have the latest fixes and patches.
>
> **[1:46](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=106)** You can end this, right?
>
> **[1:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=108)** You can go through there and say, you know, I want to take care of the patches, I want to take care of the fixes.
>
> **[1:54](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=114)** However, if you're just starting out, you need to find out what patches and fixes there are on these provided images, just in case there is patch number 80x549 or whatever that you don't want because it messes up with the application.
>
> **[2:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=134)** The support for an older operating system is going to be limited.
>
> **[2:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=138)** Now you can rehost, you can image your server and then send that image up to the cloud server and roll it out.
>
> **[2:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=150)** However, this is going to cause some issues.
>
> **[2:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=152)** In particular 32-bit systems.
>
> **[2:35](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=155)** And there are even 16-bit systems out there.
>
> **[2:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=159)** You need to go with 64 bit, that has to be your standard operating system.
>
> **[2:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=164)** It can't be 32-bit.
>
> **[2:46](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=166)** You should be safe here for most of the applications.
>
> **[2:49](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=169)** But again, your legacy applications are going to create a problem because they rely on an older operating system and you're going to have to make a decision of what to do about that.
>
> **[2:58](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=178)** 32-bit is going to work in certain scenarios, but to have a reliable system, it really has to be 64-bit.
>
> **[3:10](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=190)** And then finally, as mentioned, your prebuilt images will only have the latest version of the operating system.
>
> **[3:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=198)** If you're a Windows person, you have to go 2012v2, for almost all the services from your cloud provider, and that is through the big three cloud providers.
>
> **[3:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=210)** If you go anywhere before this, it's going to work in certain scenarios, but you're just asking for trouble.
>
> **[3:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=219)** So when you standardize your Windows operating system, my suggestion is you don't go with the latest one, and in this case, it's 2021, you might go with 2019, in order to have that standardized operating system that most of your applications are going to work for.
>
> **[3:58](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=238)** If you're Linux, which a lot of your applications are going to use, the version that is required, that you should standardize to, is going to depend upon the distribution of that Linux.
>
> **[4:11](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=251)** And not all distributions are going to be available from your cloud service provider.
>
> **[4:17](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=257)** So when you're talking about operating systems, you're talking about standardizing your operating system, of having most applications use that particular operating system.
>
> **[4:26](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/documenting-operating-system-dependencies?u=76281980&t=266)** So it is important to document what version of your application you have and what operating system it is designed for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (10), application (7), [[Windows]] (2), [[Linux]] (2)
> **CLI Commands:** find (1), make (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)


### 4. Using Cloud Service Provider Migration Tools

[↑ Back to Table of Contents](#table-of-contents)

#### Using the migration process in Google Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=0)** - We're ready now to take a look at the actual cloud service providers themselves.
>
> **[0:06](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=6)** I'm going to cover the big three, which are GCP, the Google Cloud Platform, AWS, Amazon Web Services, and Microsoft Azure.
>
> **[0:17](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=17)** I'm going to show you generally what services each platform offers and the process they use to migrate your applications to their cloud service.
>
> **[0:29](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=29)** All three have software that you can easily download and run on your system.
>
> **[0:34](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=34)** Each will tell you what applications you have, what those applications depend on, and most importantly, how to get your applications onto their cloud servers.
>
> **[0:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=48)** We're going to start with the Google Cloud, or commonly known as the Google Cloud Platform.
>
> **[0:53](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=53)** I want to tell you what the migration process is, and I think this is going to help you when you're assessing what application dependencies you have, because that, if you decide to use Google Cloud, is going to help you with your migration and make it much easier by leveraging their tools.
>
> **[1:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=73)** Here is their process.
>
> **[1:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=74)** First, you estimate the cost, then you discover what you have on your network, then you assess what you have on your network in a more holistic view, then you plan your migration, and then finally, you're ready to migrate.
>
> **[1:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=90)** Let's take a look at each one of these.
>
> **[1:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=92)** First off, estimate your cloud cost.
>
> **[1:35](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=95)** You can have a tool that runs out and estimates the future cloud cost based on the size and configuration of the resources in your current environment.
>
> **[1:46](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=106)** Now, this is assuming that you already know what the size and configuration of the resources in your current environment is.
>
> **[1:55](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=115)** However, if you've already done this, this can take away a lot of the guesswork of determining, "Well, what kind of money am I going to save?"
>
> **[2:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=125)** And let me say this.
>
> **[2:07](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=127)** Every cloud service provider is going to start with costs.
>
> **[2:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=132)** And what they're doing is it's kind of a sales pitch, right?
>
> **[2:15](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=135)** This is going to come out with an enormous cost savings for you, and that's why they always start with this one.
>
> **[2:24](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=144)** Moving on, discover your assets.
>
> **[2:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=148)** The Google Migration Center allows you to create an inventory of your assets by automatically scanning your on-premises environment.
>
> **[2:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=159)** If you already have used a tool, then you can manually upload your infrastructure data to the Migration Center.
>
> **[2:47](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=167)** So if you've used another tool to go out and find out what applications you have, what dependencies those applications have, where those dependencies are, and you've mapped out your applications, well, you can just send that up to the Google Migration Center, and then that can lead you to the next process.
>
> **[3:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=188)** And that's the assessment of your infrastructure.
>
> **[3:11](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=191)** There's a more precise tool offered by Google.
>
> **[3:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=194)** It's called StratoZone, and this is used for an analysis and a holistic environmental view of the assets that you have on your network.
>
> **[3:26](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=206)** This is why this is important, that if you have a holistic view, you are going to discover which components have to be migrated together because they're dependent upon each other.
>
> **[3:41](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=221)** So this assessment isn't just telling you what you have on your network and how everything works together, it's going to tell you, "Well, if you're going to migrate this particular application to the cloud, then you have to migrate these other components at the same time."
>
> **[4:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=241)** Which brings us to planning your migration.
>
> **[4:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=243)** Now you're ready.
>
> **[4:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=244)** You leverage the detailed assessment that you got, and what you're trying to do here is lower the migration risks, the risks being the thing doesn't work and there's downtime.
>
> **[4:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=256)** This will give you the best practices to plan for a migration and prescriptive recommendations on what to migrate and how to migrate it, so it makes it much easier once you get to this point where you have assessed your environment.
>
> **[4:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=276)** Then you can start planning your migration and plan when it is moved and what it is moved to as far as Google Cloud Platform services are concerned.
>
> **[4:49](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=289)** Then it's time to migrate.
>
> **[4:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=290)** And here's the good news.
>
> **[4:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=292)** If you have chosen a cloud service provider, the migration is pretty seamless if you've done your homework.
>
> **[5:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=300)** They offer many different tools that support a variety of migration strategies.
>
> **[5:06](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=306)** Those strategies, rehost, replatform, refactor, what it's going to tell you is, "Hey, you have this application.
>
> **[5:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=314)** This application depends on this.
>
> **[5:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=316)** Why don't you move it to this Google Service, X or Y?"
>
> **[5:21](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=321)** These tools can also automate the migration to the Google Cloud.
>
> **[5:26](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=326)** It's really as simple as setting it up, clicking, saying, "Migrate now," and then it migrates that application, along with its dependencies, along with the components that have to be migrated at the same time, up to the selected service from the Google Cloud Platform.
>
> **[5:46](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=346)** So that's a big picture of Google Cloud and the migration process.
>
> **[5:51](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-migration-process-in-google-cloud?u=76281980&t=351)** Now let's go in there and take a look at what you need to get started along this process to migrate to the Google Cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (8), [[Google Cloud Platform (GCP)|Google cloud]] (5), application (5), [[Google Cloud Platform (GCP)|Google cloud platform]] (4), [[Google]] (4)
> **CLI Commands:** aws (1), make (1), find (1)
> **Env Vars:** gcp (1), aws (1)
> **Definitions:** known as (1)
> **Analogies:** picture (1)
> **Speakers:** - we (1)

#### Using the Google Cloud Migrate tool
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=1)** - [Instructor] We're going to start off here at the landing page for Google Cloud and this is what it's going to look like for you.
>
> **[0:07](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=7)** Once you log in and have your account, you can go to the console that you see right here.
>
> **[0:15](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=15)** Now on this console, I have done a few things already and I want to show you what I've done that you have to do too.
>
> **[0:22](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=22)** Let's go up to the notifications and I have three of them.
>
> **[0:26](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=26)** I have created a project called LinkedIn Migrate 0.1.
>
> **[0:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=30)** A project is simply a workspace in which gives you context of the different activities and tasks that you have performed.
>
> **[0:40](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=40)** And one of those tasks has been enable a service, and that service is rapid migration assessment.
>
> **[0:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=48)** Now, this is as easy as clicking on Enable that is going to show up once you go to the Migration Center that I'm going to show you shortly.
>
> **[0:57](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=57)** I've also enabled the Migration Center itself as well.
>
> **[1:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=63)** Now, with that, let me show you where this is and show you a few things in here.
>
> **[1:07](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=67)** I'm going to go to migrat and not put the E in.
>
> **[1:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=72)** The reason I do that, is when you search, it gives you a good overview of what capabilities that you have because with any cloud product, you have so many different services that you have to kind of search in order to find out what's all available to you instead of scrolling through this very long list.
>
> **[1:34](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=94)** Coming down here, this is when you're ready to actually do the migration.
>
> **[1:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=99)** Now, notice how simple this is that all the cloud service providers do this.
>
> **[1:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=105)** They give you a tool to actually migrate your assets up to the cloud.
>
> **[1:51](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=111)** Now a container, if you don't know, that is an application performed for you.
>
> **[1:58](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=118)** That is where you don't have to put your servers, install the application on it.
>
> **[2:02](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=122)** You can put it up in the context of a container.
>
> **[2:06](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=126)** Now I'm going to go to migration.
>
> **[2:08](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=128)** And under migration we can see right here, the Migration Center.
>
> **[2:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=133)** Simple as that.
>
> **[2:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=133)** Go ahead and click on it.
>
> **[2:15](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=135)** Now, this, if you read it left to right, top to bottom, tells you the process that you're going through in order to migrate your applications up to the Google Cloud.
>
> **[2:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=148)** The cost estimates.
>
> **[2:29](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=149)** It always starts with cost estimates and what the service providers are doing for you is telling you how much money you're going to save by moving your assets up to their servers.
>
> **[2:41](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=161)** This is the one we're interested in.
>
> **[2:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=163)** Discover assets.
>
> **[2:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=165)** I'm going to go ahead and click on here.
>
> **[2:47](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=167)** That is going to take us to another place.
>
> **[2:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=170)** This is the Migration Center, and then the Assets under it.
>
> **[2:55](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=175)** Down at the bottom it's going to say Set Up Scanning.
>
> **[2:58](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=178)** What is it scanning?
>
> **[3:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=180)** Your applications and your application dependencies.
>
> **[3:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=184)** I'm going to go ahead and click on this and it's pretty self-explanatory.
>
> **[3:09](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=189)** I'm going to scroll down through here.
>
> **[3:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=192)** There's two different things you can do here.
>
> **[3:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=194)** You can upload your files to the Google Cloud or you can scan your environment.
>
> **[3:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=200)** Now, you would upload the files if you already have a third-party way of getting that information that they're looking for.
>
> **[3:27](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=207)** What we're going to do is just say, scan your environment.
>
> **[3:31](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=211)** Now we simply come down here, put in a name, we create a service account, we estimate how many assets you have, the collection days, and, why I want to highlight this because this might not be obvious.
>
> **[3:46](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=226)** What you're doing here is not only finding out what applications you have and what dependencies those applications depend on, but you are trying to find out what kind of resources those assets use, and you can't do that by just a few days.
>
> **[4:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=245)** However, 180 days, six months, that seems like a lot.
>
> **[4:11](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=251)** So, if you can lower this, then that's going to give you that continuous flow of information about how your applications are actually working in your environment.
>
> **[4:23](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=263)** Last thing I want to show you, right up here it says, Learn more.
>
> **[4:27](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=267)** And with any service, their documentation is very important to them to teach you how to do this.
>
> **[4:35](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=275)** So we're going to go down here.
>
> **[4:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=276)** This is going to explain to you what you are doing when you are running these different applications.
>
> **[4:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=282)** You have online mode, offline mode.
>
> **[4:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=285)** Online mode means that you are real time sending your information up to Google.
>
> **[4:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=292)** Offline means that, okay, I'm going to collect all the information here and then after that I'm going to upload that information to the Google Cloud service.
>
> **[5:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=303)** And it goes through there, a service account.
>
> **[5:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=305)** The service account is going to tell Google where to put your stuff and give you the rights to move that information up to the cloud.
>
> **[5:15](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=315)** So you have offline, you have online, you have the application itself, and then I'm going to scroll down just a bit here, and this is where you have the discovery client.
>
> **[5:27](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=327)** The next thing I want to do is go back to the console.
>
> **[5:30](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=330)** I'm going to come right up here to the console.
>
> **[5:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=333)** Next we're going to go up to Overview.
>
> **[5:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=336)** And under Overview, we have the Preferences, we have the Reports, you Plan your migration and eventually Migrate it to the cloud.
>
> **[5:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=344)** So once you download that installer, it comes up with some information and tells you what type of things you have.
>
> **[5:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=352)** Let me show you a dashboard from [google.com](https://google.com) that they have run that shows you how this is going to look once you upload your information.
>
> **[6:02](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=362)** And here that is, it's prepared, you can see, by Jane Doe there.
>
> **[6:07](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=367)** And this is on the Google website and I want to highlight a few things.
>
> **[6:11](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=371)** One is, green means that it is an excellent fit.
>
> **[6:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=376)** And then down here, if you can see it, it says, Shift, and that is for a lift and shift, Containerize and give you the different recommendations that they have for moving your assets up to the Google Cloud.
>
> **[6:31](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-google-cloud-migrate-tool?u=76281980&t=391)** So, that should be enough to get you started if you're using the Google Cloud platform to find out what assets you have and their dependencies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Cloud Platform (GCP)|Google cloud]] (5), cloud (5), application (4), [[Google]] (4), [[Search]] (2)
> **UI Navigation:** go to (4), click on (3), scroll down (2)
> **Definitions:** means that (3), is an  (2)
> **CLI Commands:** find (3)
> **Prerequisites:** install (1), set up (1)
> **URLs:** [google.com](https://google.com) (1)
> **Versions:** 0.1 (1)
> **Cross-References:** go back to (1)

#### Working in Microsoft Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=1)** - [Instructor] I want to show you the migration process for Microsoft Azure.
>
> **[0:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=4)** Microsoft Azure, of course, being Microsoft's solution for cloud computing.
>
> **[0:10](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=10)** The first step is discover.
>
> **[0:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=12)** What do you have on your network?
>
> **[0:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=14)** There's two appliances that you can download from [microsoft.com](https://microsoft.com).
>
> **[0:19](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=19)** One is agentless, and the other one is an agent installed on the server.
>
> **[0:25](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=25)** Where would you use these two?
>
> **[0:27](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=27)** Well, the idea is you start off with agentless, and that gives you a good overview, from a centralized location, of what assets you have on your network, and their interdependencies within that application and the middleware and the operating system, et cetera.
>
> **[0:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=48)** Now, an agent.
>
> **[0:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=50)** You would use this if you have a server that is somewhat unique, somewhat more complicated, and you need more detailed and holistic information about that server, its applications and the application dependencies.
>
> **[1:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=65)** So, agentless, generalized agent precision, that's a good way to look at it.
>
> **[1:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=72)** Another thing you can do for Discover, because Microsoft needs to know what you have before it can tell you how to move it, is a CSV file.
>
> **[1:21](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=81)** And this would be if you have a previous discovery on your network from a third party application that really maps out your dependencies that you have.
>
> **[1:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=93)** Then you can upload that CSV file to Microsoft, and it knows what you have on your network.
>
> **[1:41](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=101)** Then, build the business case.
>
> **[1:43](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=103)** This is where you have the strategies from Microsoft.
>
> **[1:46](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=106)** And remember, there's different strategies.
>
> **[1:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=108)** There's the rehost, which is basically a lift and shift, and then you have the refactor, which means that you are putting your assets up to Microsoft and using them as more of a platform as a service.
>
> **[2:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=124)** Well, that business case is going to be developed from Microsoft to tell you what the best path forward is for that particular application.
>
> **[2:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=134)** And then the dependencies.
>
> **[2:17](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=137)** After the server and application discovery, you can simply click on something called Dependency Analysis and that goes through and finds out the dependencies and how they're going to fit in the Microsoft Azure environment.
>
> **[2:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=152)** And then finally, we have Assess, and it simply is clicking on a button here, and you can look for the recommendations for the different strategies for the applications once they are moved to the cloud.
>
> **[2:47](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-microsoft-azure?u=76281980&t=167)** So without further ado, let's go in to Microsoft Azure and take a look at Azure Migrate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (7), application (5), [[Microsoft Azure]] (4), cloud (2), business (2)
> **Definitions:** is an  (1), is a  (1), means that (1)
> **Env Vars:** csv (2)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Using the Azure Migrate tool
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=1)** - [Instructor] Here we are at the portal.
>
> **[0:02](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=2)** I'm logged in as an administrator.
>
> **[0:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=4)** Your portal is going to look different than mine.
>
> **[0:07](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=7)** You're not going to have the migrate right here and you're not going to have the database migration right there.
>
> **[0:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=12)** How you can find those?
>
> **[0:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=14)** You can come right up here and you can say migrate.
>
> **[0:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=18)** And under migrate, there's the Azure Migrate and the different migration strategies that you can have with Microsoft Azure.
>
> **[0:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=28)** I'm going to click on migrate right here, and this takes you to the landing page for Azure Migrate.
>
> **[0:33](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=33)** I haven't assessed anything, I have nothing in here, so this is what it's going to look like when you first come in.
>
> **[0:41](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=41)** I'm going to scroll down a bit to show you some things.
>
> **[0:44](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=44)** On the left hand side, right here you can see servers, databases, and web apps.
>
> **[0:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=50)** This is the main discovery tool from Microsoft Migrate.
>
> **[0:54](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=54)** Now these discovery tools can go down, connect to your network and discover what's on your network.
>
> **[1:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=61)** And you might be wondering, well, why is databases in two places?
>
> **[1:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=65)** Well, one is for large databases, complex databases, that you have here for database only.
>
> **[1:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=73)** Furthermore, simple databases, you can use the same application that you did for servers, databases, and web apps.
>
> **[1:21](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=81)** Now, on the left hand pane, right down here under migration goals, I'm going to show you each one of these and each one of these will show you how to get started to assess what you have on your network as far as Microsoft Azure goes.
>
> **[1:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=96)** Under servers, databases, and web apps, we click on it and this goes through and tells you, well, this is how you do it.
>
> **[1:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=105)** You can see here, build the business case, dependency analysis and assess, just clicking on these different things will tell you that information.
>
> **[1:54](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=114)** Down here is where you can discover, build, and take a look at everything you have there.
>
> **[2:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=120)** Now I'm going to click here where it says, add more assessment tools, right there.
>
> **[2:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=124)** And these are the assessment tools, most of these third party, that you can choose from in order to assess and develop your list of applications and dependencies.
>
> **[2:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=136)** I'm going to go back and you can choose any one of those you'd like.
>
> **[2:19](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=139)** And then down here we have the different migration tools, notice, we have discover and we have replicate.
>
> **[2:25](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=145)** What those are, are for a lift and shift type situation.
>
> **[2:29](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=149)** Where you replicate your servers up to the equivalent on the Microsoft Framework, the Microsoft Cloud servers.
>
> **[2:38](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=158)** Let's go to the next one, and that's databases only.
>
> **[2:41](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=161)** And databases only, that is where you're going to install an agent that has a lot more precision about what your database is doing.
>
> **[2:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=170)** And download DMA, the Database Migration Assessment Tool.
>
> **[2:54](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=174)** You can simply click in here and that will get you installing that on your database servers, to find out more information about what it's doing and how to get it up to Microsoft.
>
> **[3:06](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=186)** And then you can replicate or find out the information about your virtual desktops, your web apps, and a data box down here to really get the very large databases up to the Microsoft servers.
>
> **[3:23](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=203)** What I want to do is come here where it says getting started and then show you what this is going to look like once you have assessed what is on your network.
>
> **[3:38](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=218)** And this is a screenshot from [microsoft.com](https://microsoft.com) that kind of tells you how you're supposed to go about this.
>
> **[3:45](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=225)** And notice the discovered entities, the servers, SQL instances, the user databases, and gives you a whole range of information about what you actually have on your network.
>
> **[3:58](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=238)** And then simply, right down here, dependency analysis, and the assessments that are available right there.
>
> **[4:06](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-azure-migrate-tool?u=76281980&t=246)** So that's a look at Microsoft Azure and the steps to get you started to do your assessments and find out the dependencies that you have on your network in order to migrate to Microsoft Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (11), [[Microsoft]] (6), database (5), [[Microsoft Azure]] (4), web (4)
> **CLI Commands:** find (4)
> **UI Navigation:** click on (2), scroll down (1), go to (1)
> **Env Vars:** dma (1), sql (1)
> **Prerequisites:** install (1), getting started (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Working in Amazon Web Services (AWS)
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=1)** - [Instructor] The migration process for Amazon Web Services.
>
> **[0:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=5)** It starts with an agent.
>
> **[0:07](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=7)** You install an agent, and this is going to be on your source servers.
>
> **[0:11](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=11)** You can install it manually.
>
> **[0:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=13)** You can install it with an unattended installation.
>
> **[0:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=16)** And the big key here is that you don't have to reboot.
>
> **[0:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=20)** So you install that agent and it finds out the information about your servers, your applications, and what they are dependent upon.
>
> **[0:31](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=31)** And then you replicate to AWS, and this is a lift and shift scenario.
>
> **[0:35](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=35)** Your servers, you don't have to image to them, reset them, and then send them up to a virtual machine up in AWS and then do it that way.
>
> **[0:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=48)** Automatically, it's replicated up to their servers.
>
> **[0:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=52)** They know what they're doing.
>
> **[0:53](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=53)** And this replication will include the entire operating system, the applications, the data, and the configurations.
>
> **[1:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=61)** So at that point of time, you are on a parallel type universe.
>
> **[1:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=65)** You have your servers on premises, you have servers on AWS, and they're running independently of each other.
>
> **[1:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=76)** Well, it's time to test.
>
> **[1:18](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=78)** And what the test means is that they're going to make sure, and you're going to make sure, that once you do the cutover, everything is going to work right.
>
> **[1:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=88)** So the ease of doing this is pretty phenomenal.
>
> **[1:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=92)** That by installing that agent, and I'll show you the agents you can install shortly here, they're going to find out the information, then send that up to AWS.
>
> **[1:47](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=107)** So then you perform the tests, it's non-disruptive and make sure it works.
>
> **[1:51](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=111)** And then it's time for the cutover Through the Application Migration Console you just click on a button, say cutover.
>
> **[2:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=120)** The servers are launched within seconds, and at that point in time, congratulations, you have migrated your applications up to AWS.
>
> **[2:09](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=129)** And I want to show you this, the migration evaluator and how this all fits in, in the context of finding out your application dependencies.
>
> **[2:19](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=139)** We're interested mostly right here on the left hand side, the beginning process, install the collector.
>
> **[2:25](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=145)** It gathers data, or you import the data, and send it to something called the Migration Evaluator.
>
> **[2:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=152)** And I want to talk about what this is.
>
> **[2:34](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=154)** It takes a look at that information and can tell you, hey, you know what would work best for you is an infrastructure, a lift and shift, a rehost.
>
> **[2:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=162)** Or, hey, we have this other product where you don't have to worry about the infrastructure.
>
> **[2:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=168)** You just have to worry about the platform.
>
> **[2:50](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=170)** So not only are you sending the information up to your cloud service provider, in this case AWS, but it's also evaluating that to come back with information about how it is best to migrate up to their servers.
>
> **[3:06](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=186)** So that is a general look on how AWS handles this migration process.
>
> **[3:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/working-in-amazon-web-services-aws?u=76281980&t=192)** Let's go in there and actually take a look at the AWS Migration Hub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (8), data (3), application (2), [[Amazon Web Services (AWS)|Amazon web services]] (1), parallel (1)
> **CLI Commands:** aws (8), make (3), find (1)
> **Env Vars:** aws (8)
> **Prerequisites:** install (6)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Using the AWS Server Migration tool
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=0)** - [Narrator] We start off here.
>
> **[0:02](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=2)** This is the console home for AWS.
>
> **[0:05](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=5)** And what I'm going to do is come right up here and you can guess what I'm going to say.
>
> **[0:09](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=9)** I'm going to say migrate.
>
> **[0:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=12)** And you can see the different migration services they have.
>
> **[0:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=16)** And by this time you should see similarities between what each of these cloud service providers offers you as far as migration goes.
>
> **[0:25](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=25)** Here we have database migration, the migration hub that we're going to go to shortly, the application migration service and elastic data recovery.
>
> **[0:37](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=37)** Down here, more database migration, migration projects and things like that.
>
> **[0:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=42)** Now without further ado, let's go to the migration hub and the migration hub, you have a dashboard, it has the costs and it goes through here.
>
> **[0:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=52)** And you can see this process of what you were going to go through in order to move your data and applications up to the AWS servers.
>
> **[1:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=63)** You have make a case, you have plan for the migration, migrate, incrementally refactor applications, and then finally modernize your applications and some mainframe applications, believe it or not, that can work with AWS.
>
> **[1:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=80)** We are interested in make the case for cloud migrations.
>
> **[1:24](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=84)** And under here you have the Collect the Data for Business case.
>
> **[1:27](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=87)** That's where we are.
>
> **[1:28](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=88)** We need the information to send to AWS, and that is going to be your applications and the application dependencies.
>
> **[1:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=96)** So let's go ahead and click on here and it takes you to this, the Discovery Tools.
>
> **[1:42](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=102)** And remember there is an agentless and an agent discovery tools.
>
> **[1:47](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=107)** And when you would use the collector, which is this one right here, would be in a situation where you're just trying to find out generally what is on your network, how they are interconnected together, and download the collector.
>
> **[2:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=123)** You just come right here, download the collector, automatically downloads it, and you are ready to install this on your servers.
>
> **[2:10](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=130)** And what that process is going to be is you install it on a centralized location and then that will guide you through making the surface account, connecting it to your distribution of AWS, and then discovering the information and sending it up to AWS.
>
> **[2:32](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=152)** If you want more information right here, click on Info and that will give you a comprehensive list of the tasks and the steps in order to use this utility.
>
> **[2:46](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=166)** And here you have the discovery agent.
>
> **[2:48](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=168)** And that is going to be for more precise, comprehensive and holistic information about how your servers work and what they're connected to.
>
> **[2:59](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=179)** - So again, agentless is for the generalized information.
>
> **[3:04](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=184)** Agent, is for the precise information for more of your complicated application workloads.
>
> **[3:12](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=192)** So down here install agent.
>
> **[3:14](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=194)** It's going to say, "Well, what kind?"
>
> **[3:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=196)** You have Windows and Linux, you have Windows, the Graphical User Interface, and then you have the client, the Linux, and then the Linux client down here.
>
> **[3:25](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=205)** And if you want to download it, you just click it and it gives you the information about how you install that on your Windows servers.
>
> **[3:35](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=215)** And then after that, here it is, the Microsoft Evaluation Collector.
>
> **[3:40](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=220)** This after you have your information is going to come back and tell you, "Well, this application that you have is best suited for this scenario or service from AWS."
>
> **[3:52](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=232)** That application is best for a different type of AWS service.
>
> **[3:59](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=239)** Now you're going to have it on your dashboard.
>
> **[4:01](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=241)** I'm going to click on the Dashboard here.
>
> **[4:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=243)** We don't have much in here because we haven't run the collectors yet, but let me show you what this looks like once you have run your collectors and you look at your Dashboard.
>
> **[4:16](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=256)** On the collector, you can see on the Dashboard we have the Sales Tracking app.
>
> **[4:20](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=260)** And this is an example of an application that they have, what is started, what is in process, and what is completed as far as the applications, and migrating those up to AWS.
>
> **[4:34](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/using-the-aws-server-migration-tool?u=76281980&t=274)** So that is a general overview and enough information that you need in order to get going on AWS to tell you your applications and those application dependencies in order to move up to Amazon Web Services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (10), application (7), data (3), [[Windows]] (3), [[Linux]] (3)
> **CLI Commands:** aws (10), make (2), find (1)
> **Env Vars:** aws (10)
> **UI Navigation:** click on (3), go to (2)
> **Prerequisites:** install (4)
> **Definitions:** is an  (2), is a  (1)
> **Exercise Files:** download the (2)
> **Speakers:** - [narrator] (1), - so (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps in cloud migration
> [LinkedIn Learning](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/next-steps-in-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/next-steps-in-cloud-migration?u=76281980&t=0)** - Congratulations on finishing this course.
>
> **[0:03](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/next-steps-in-cloud-migration?u=76281980&t=3)** We've covered a lot of material, and I think you have a good starting point to get you going on your migration journey.
>
> **[0:11](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/next-steps-in-cloud-migration?u=76281980&t=11)** The next step is doing this yourself.
>
> **[0:13](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/next-steps-in-cloud-migration?u=76281980&t=13)** Document each application and its dependencies in your environment, and then apply your new knowledge to make sure your migration is a successful one.
>
> **[0:25](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/next-steps-in-cloud-migration?u=76281980&t=25)** I sincerely hope you found this information useful and you feel more confident now about the task that's ahead of you.
>
> **[0:34](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/next-steps-in-cloud-migration?u=76281980&t=34)** And I would love to hear from you.
>
> **[0:36](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/next-steps-in-cloud-migration?u=76281980&t=36)** Please connect with me on LinkedIn.
>
> **[0:39](https://www.linkedin.com/learning/dependency-mapping-for-cloud-migration/next-steps-in-cloud-migration?u=76281980&t=39)** Thank you for watching, and good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1), application (1), [[LinkedIn]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Gary Grudzinskas]]

## Path Context

### In [[Introduction to Enterprise Cloud Migration Planning]]
← [[Design a Cloud Migration Strategy]] | **3 of 4** | [[Planning and Implementing a Rapid Cloud Migration (RCM)]] →

## Appears In

- [[Introduction to Enterprise Cloud Migration Planning]]

---

[↑ Back to top](#)