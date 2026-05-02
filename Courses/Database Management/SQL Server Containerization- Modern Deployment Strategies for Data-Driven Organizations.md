---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations
url: "https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations"
duration_minutes: 58
duration: 58m
level: Intermediate
updated: 8/20/2025
learners: 3760
skills:
  - Service Deployment
  - SQL
  - Microsoft SQL Server
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGvr7XUO6wwyg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695928337362?e=2147483647&amp;v=beta&amp;t=e0pwLKizaDt5vwqc-Tp3rM3jt02-QSku33L89K32mW8"
linkedin_topic: Database Management
learning_paths:
  - '[[Advance Your MS SQL Server Skills]]'
prev_courses:
  - '[[SQL Server 2022 Administration]]'
next_courses:
  - '[[SQL Server Integration Services]]'
path_nav: '[{"path":"Advance Your MS SQL Server Skills","position":7,"total":9,"prev":"SQL Server 2022 Administration","next":"SQL Server Integration Services"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/service-deployment
  - skill/sql
  - skill/microsoft-sql-server
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/SQL%20Server%20Containerization-%20Modern%20Deployment%20Strategies%20for%20Data-Driven%20Organizations.md)

![SQL Server Containerization: Modern Deployment Strategies for Data-Driven Organizations](https://media.licdn.com/dms/image/v2/D560DAQGvr7XUO6wwyg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695928337362?e=2147483647&amp;v=beta&amp;t=e0pwLKizaDt5vwqc-Tp3rM3jt02-QSku33L89K32mW8)

# SQL Server Containerization: Modern Deployment Strategies for Data-Driven Organizations

> More and more companies are utilizing containerized applications and CI/CD approaches and pipelines. This shift, however, can never be complete without also meeting the needs of today’s data-driven world. In this course, instructor Ben Weissman shows you how to deploy Microsoft SQL Server on non-Windows platforms such as Linux, Docker containers, and Kubernetes.Explore the fundamentals of running 

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations) | 58m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [SQL Server on Linux, containers, and Kubernetes](#sql-server-on-linux-containers-and-kubernetes)
  - [Demo environment and prerequisites](#demo-environment-and-prerequisites)
- [**1. SQL Server on Linux**](#1-sql-server-on-linux) (4 videos)
  - [How to run SQL Server on Linux](#how-to-run-sql-server-on-linux)
  - [Deploying SQL Server on Linux](#deploying-sql-server-on-linux)
  - [Accessing a SQL Server on Linux](#accessing-a-sql-server-on-linux)
  - [Integrating SQL Server on Linux with Active Directory](#integrating-sql-server-on-linux-with-active-directory)
- [**2. SQL Server on Containers**](#2-sql-server-on-containers) (4 videos)
  - [Container fundamentals and Docker installation](#container-fundamentals-and-docker-installation)
  - [Deploying and accessing SQL Server using Docker](#deploying-and-accessing-sql-server-using-docker)
  - [Working with a SQL Server using Docker](#working-with-a-sql-server-using-docker)
  - [Integrating SQL Server on containers with Active Directory](#integrating-sql-server-on-containers-with-active-directory)
- [**3. SQL Server on Kubernetes**](#3-sql-server-on-kubernetes) (6 videos)
  - [Kubernetes fundamentals](#kubernetes-fundamentals)
  - [Installing Kubernetes](#installing-kubernetes)
  - [Deploying and accessing SQL Server on Kubernetes](#deploying-and-accessing-sql-server-on-kubernetes)
  - [Working with and maintaining SQL Server on Kubernetes](#working-with-and-maintaining-sql-server-on-kubernetes)
  - [Integrating SQL Server on Kubernetes with Active Directory](#integrating-sql-server-on-kubernetes-with-active-directory)
  - [Azure Arc-enabled data services](#azure-arc-enabled-data-services)
- [**Conclusion**](#conclusion) (1 videos)
  - [Summary](#summary)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [SQL Server on Linux, containers, and Kubernetes](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/sql-server-on-linux-containers-and-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/sql-server-on-linux-containers-and-kubernetes?u=76281980&t=0)** - [Instructor] You can run [[Microsoft SQL Server|SQL Server]] on so many things other than [[Windows]].
>
> **[0:03](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/sql-server-on-linux-containers-and-kubernetes?u=76281980&t=3)** So this course will teach you how to run SQL Server on [[Linux]], in containers and in [[Kubernetes]], or in other words, we will talk about all the ways to run SQL Server on anything but Windows.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/sql-server-on-linux-containers-and-kubernetes?u=76281980&t=15)** Join me on a trip that I hope will be a good mix of hands-on demos and theory to explore how running [[SQL]] servers on platforms such as Kubernetes can be both lightweight to speed up your development processes, as well as enterprise and production ready.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (3), [[Windows]] (2), [[Kubernetes]] (2), [[Linux]] (1), [[SQL]] (1)
> **Env Vars:** sql (4)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Demo environment and prerequisites](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=0)** - [Instructor] Let us talk about the required demo environment for a minute.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=4)** What you really need for this course is a single [[Linux]] machine with eight gigabyte of RAM and four cores.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=10)** My setup, however, is a bit more complex.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=13)** To start with, I'm using six Linux servers, one dedicated box to run [[Microsoft SQL Server|SQL Server]] Linux, one run SQL server on containers, and four machines from a [[Kubernetes]] environment, including a dedicated NFS server for storage.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=26)** All my Linux boxes have the NFS client tools installed, while the NFS server, of course, also has the NFS server activated.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=32)** These machines have between four and 32 gigabytes of RAM and four to eight cores each.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=37)** Again, this is far beyond the minimum requirement, so don't worry if you can't replicate this entire setup.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=43)** I have picked [[Ubuntu]] 20.04 as my Linux distribution and version, and we will talk in more depth in the next module which Linux version you can and can't use to run SQL Server.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=53)** In addition to my Linux machine, I'm also running two [[Windows]] boxes.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=58)** One of them is my D Domain controller running [[Windows Server]] 2022, and the other one is a [[Windows 10]] client, which I'm using as my main client.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=66)** Almost all client tools are cross platform though, so you could also run everything from a single Linux box again.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=72)** I assigned four cores to both Windows boxes with the client getting 15 gigs of RAM and the domain controller four.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=77)** If you're wondering why the client needs 16 gigs of RAM, because we actually also use it as a server in one of our modules.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=84)** As the name suggests, these boxes serve a purpose.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=86)** The domain controller machine is my domain controller and also running the DNS and DHCP service.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=92)** In my Windows client, I started with installing Choco as a package manager.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=97)** I then used Choco to install VS code and the [[Powershell]] extension, which is where we're running all my demos from.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=102)** For connectivity, I also installed the OpenSSH client as well as curl and grep.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=108)** Last but not least, I also added the SQL Server Client Tools Management Studio, [[Microsoft Azure|Azure]] Data Studio, as well as a new SQLCMD, so we can connect to our SQL Server instances on Linux from this Windows client.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=120)** I will not get into the details of how to deploy and install Linux, NFS storage, or a domain controller.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=126)** That will be very much out of scope for this course.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=128)** However, I have provided you the script to deploy all the required client tools on the Windows client in case you want to start with a fresh machine for this one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (10), [[Microsoft SQL Server|Sql server]] (5), [[Windows]] (5), [[Kubernetes]] (1), [[Ubuntu]] (1)
> **Env Vars:** sql (5), nfs (5), ram (4), dns (1), dhcp (1)
> **Prerequisites:** setup (2), install (2)
> **Definitions:** is a  (3)
> **CLI Commands:** curl (1), grep (1)
> **Tools:** vs code (1), powershell (1)
> **Versions:** 20.04 (1)
> **Cross-References:** in the next (1)


### 1. SQL Server on Linux

[↑ Back to Table of Contents](#table-of-contents)

#### [How to run SQL Server on Linux](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=0)** - [Instructor] Let us start with a very brief intro on how [[Microsoft SQL Server|SQL Server]] can even run on [[Linux]] given that it's a native [[Windows]] application, not some cross-platform [[Python (Programming Language)|Python]] code or something that comes with out-of-the-box portability.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=12)** On Linux SQL Server runs as an isolated process, and it is using the regular Windows calls, more than 1200 of them as it does on Windows, but instead of a full Windows operating system, which we don't have on Linux, those calls are handled by a platform abstraction layer, SQLPAL.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=28)** I won't be going into much details on how SQLPAL works, but if you care for those, check out the link below.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=33)** SQLPAL basically allows you to run the Windows application, in this case, specifically SQL Server on Linux.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=40)** SQLPAL will then talk to the Linux host through a host extension, and from there it talks to the Linux operating system.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=47)** This is the super important part because this means when comparing SQL Server on Linux and SQL Server on Windows, they are the exact same application.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=56)** It's not two different teams trying to keep up with each other's developments.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=60)** It is the same code base.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=62)** Before you install SQL Server Linux we must be aware that there's not one single Linux.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=67)** There are a ton of distributions out there.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=69)** So your first question must therefore be, which distributions are supported.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=73)** And as of today, the answer is, SUSE Linux Enterprise Server, Red Hat Enterprise Linux, and [[Ubuntu]].
>
> **[1:21](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=81)** But that doesn't mean you can install SQL Server on any Ubuntu for example, let alone install it and be in a supported scenario.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=88)** Right now, for example, Ubuntu 2204 is the latest release of Ubuntu, but Ubuntu 2004 is the latest release that is officially supported by [[Microsoft]] for SQL Server.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=99)** Next, you have to think about your edition.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=101)** Do you need Enterprise Edition the Standard Edition et cetera?
>
> **[1:44](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=104)** While the editions are the same as when running SQL Server on Windows, there are again, some restrictions when it comes to some features and services.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=112)** While the core database engine is identical between Windows and Linux, analysis services, for example, are not supported to run on Linux.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=119)** And then of course you have all your other considerations, how to distribute your log files, [[Databases]], temp DB etc.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=126)** How to monitor your SQL server, do you want [[Active Directory]] authentication, which requires a few extra steps on Linux rather than just clicking a checkbox as on Windows, et cetera.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (14), [[Microsoft SQL Server|Sql server]] (10), [[Windows]] (9), [[Ubuntu]] (5), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** sql (10), sqlpal (4), suse (1)
> **Analogies:** for example (3)
> **Prerequisites:** install (3)
> **CLI Commands:** python (1)
> **UI Navigation:** checkbox (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Deploying SQL Server on Linux](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=0)** - [Instructor] After these fundamental and basic considerations, it is time for an actual installation.
>
> **[0:05](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=5)** And that starts with a question, which version of [[Microsoft SQL Server|SQL Server]] do you want to install?
>
> **[0:10](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=10)** [[Microsoft]] is providing a central repository with all the installation files and of course this repo doesn't exclusively host SQL Server files, but also a bunch of other tools and [[Microsoft Products|products]].
>
> **[0:20](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=20)** There isn't just one single SQL Server to download, but they're filed for SQL Server 2017, which was the first SQL Server to support [[Linux]], up to SQL Server 2022.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=29)** And each of those versions has multiple versions to download from the original release up to all the cumulative updates.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=36)** To make life a bit easier, the newest release will always be flagged as latest, so you can install the most recent CU without needing to know exactly which one that is.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=46)** Okay, let's assume you are planning to install the latest CU of SQL Server 2019 on your Linux server.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=52)** The installation itself will run through a package manager and which one that is will depend on the Linux distribution you opted for.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=60)** To work with an external repository, your package manager should be able to validate the downloaded contents for which purpose you start by downloading the Repository's public key.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=69)** To make sure the package manager knows where to retrieve the required files, we also add a link to that repository, which would in our case, specifically be the SQL Server 2019 repo.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=80)** With the key and the link to the repo, we can then tell the package manager to install SQL Server, which will trigger the required downloads followed by validation and the actual installation.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=91)** The last step is then to configure SQL Server, which is probably a bit confusing at first.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=96)** When installing SQL Server on [[Windows]], you provide the addition, the features, the password, et cetera, to be used in the visit before anything will be installed.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=105)** On Linux, that entire process is inverted.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=108)** Let's take a look at that in a demo.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=110)** And as you can see, I'm running this as I will before pretty much all my demos in this course from VS Code.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=115)** First, I will secure shell into my [[SQL]] and Linux server and again, if you are unable to entirely replicate my setup, my host names, et cetera, you may have to adjust for that a little bit.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=125)** My first step there is then, to add the key to the Microsoft repo so we can validate contents downloaded from there.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=131)** And next I will then add the [[Microsoft SQL Server]] 2022 Repository 40122004.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=137)** So again, if you're using a slightly different distribution or version or you're looking for a different version of SQL Server, adjust that link accordingly.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=145)** To make sure my package manager actually knows where to find SQL Server I will update its local cache and once that is done, I can run the command apt install mssql-server where I'm also adding the -y switch, which will just stop the package manager from prompting me for using additional disk space, et cetera.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=162)** This will download SQL Server and it'll install SQL Server.
>
> **[2:45](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=165)** So depending on your internet speed, machine size, et cetera, this will usually take roughly between one and two minutes.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=171)** SQL Server is now installed, but we're not done yet because we still have to configure it.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=175)** So let's get a little bit more space here and run the command mssql-conf setup.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=182)** This will first ask me for my addition, so I can pick evaluation, developer, web, standard, all the additions available for SQL Server and I will go with option number one Evaluation Edition.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=191)** I will then be prompted to accept the license agreement and this will only happen the first time.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=196)** So if you install a SQL Server on that same box again or a different instance or a different version of SQL Server on that box, again, you will not be prompted for this.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=204)** And last but not least, you will also be asked for a password.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=209)** I confirm my password and SQL Server is getting configured.
>
> **[3:34](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=214)** SQL Server has now been installed with the standard settings.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=217)** However, I could also add additional options, for example, add a Traceflag using mssql conf.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=223)** To get that into effect, I would need to restart my SQL Server.
>
> **[3:46](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=226)** And SQL Server would now be running with my Traceflag 3205 as I've been providing it on the previous command.
>
> **[3:52](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=232)** I could also add additional features like the SQL Server agent and again, any changes like this need a restart of the service.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=240)** So by simply running these two commands, I have now enabled my SQL Server agent on that instance.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=245)** Since this is Linux, we can use journalctl to access the application log files.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=249)** So journalctl will effectively give me access to the SQL Server logs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (26), [[Linux]] (6), [[Microsoft]] (2), [[Microsoft Products|Products]] (1), [[Windows]] (1)
> **Env Vars:** sql (28)
> **Prerequisites:** install (7), configure (2), setup (2)
> **CLI Commands:** make (3), journalctl (2), find (1), apt (1)
> **Tools:** vs code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Accessing a SQL Server on Linux](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=0)** - [Instructor] When it comes to accessing a [[Microsoft SQL Server|SQL Server]] running on [[Linux]], you should remember that SQL Server on Linux is SQL Server on [[Windows]] at its core.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=8)** So same considerations and restrictions apply.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=12)** How do you authenticate?
>
> **[0:13](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=13)** Is there a local firewall on your client or the server or even a corporate firewall in between?
>
> **[0:18](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=18)** Which tools do you want to use?
>
> **[0:20](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=20)** Because just as an accessing SQL Server running on Windows, you can use the mssql-[[CLI]], sqlcmd, or [[Microsoft Azure|Azure]] Data Studio, and all of those even run on Linux, so there isn't even the need for a Windows client.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=31)** But of course, you can also use Management Studio, for example, which does not run on Linux, but of course can access any SQL Server running on Linux.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=40)** Let's first access our SQL Server on Linux from the Linux box directly.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=44)** I will secure share into my box again and add the [[Microsoft]] [[SQL]] tools to my repo.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=50)** I'll update my package manager's cache, and I can then install the mssql tools through my package manager.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=57)** To make sure I can use them without having to provide the install location, I will also add them to my path.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=63)** And my tools have now been installed.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=65)** I can now connect to my server by simply providing username, password, and a query.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=71)** I can do the same thing, but providing the actual host name instead of local host.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=75)** However, I can also do that from my Windows box, so I will just provide my password, username, server name again, and I can run that query right here from sqlcmd on my Windows box.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=87)** Or of course, I could use different tools like SSMS, for example.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=91)** In SSMS, I will simply provide my server name, "sqlonlinux", change to SQL authentication, provide my username and password, and can connect to it.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=103)** (computer pings) What you will notice right next to the server name is the little text, which is showing me that I'm running SQL Server on Linux.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (8), [[Microsoft SQL Server|Sql server]] (7), [[Windows]] (5), [[SQL]] (2), [[CLI]] (1)
> **Env Vars:** sql (9), ssms (2)
> **Analogies:** for example (2)
> **Prerequisites:** install (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Integrating SQL Server on Linux with Active Directory](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=0)** - [Instructor] Using only basic [[SQL]] authentication is not sufficient for most production workloads, so let's integrate our [[Microsoft SQL Server|SQL Server]] [[Linux]] into the [[Active Directory]].
>
> **[0:08](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=8)** This requires some Kerberos files and configurations, and I will not go into all the details on how Kerberos works.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=13)** However, you can find more information, especially in the context of Linux, on the link below.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=18)** One thing that is super important to understand with Kerberos authentication is DNS is key, so make sure that both your fully qualified host name, but also reverse lookup for that IP address work and match.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=31)** Let me log into [[MySQL]] Linux box again.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=34)** To get started with our ID integration, we first need to install a couple of extra tools.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=40)** I add those tools to my package managers, refresh the cache, and install all the required tools for Kerberos, Active Directory, client utilities, et cetera.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=49)** During this installation, I'm also being prompted for my default realm of my Kerberos installation.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=55)** I'm using my DEMO.LOCAL domain.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=58)** Make sure to use all uppercases for that.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=61)** All uppercase is very important.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=63)** Otherwise, Kerberos will not properly resolve this context.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=67)** With our tools installed, we can now join our server to the Active Directory domain.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=72)** What I'm doing here is I'm echoing my password into the commands.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=75)** I'm not getting prompted for it.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=77)** Of course, do not try to do this in production.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=80)** Also, this is one of the first parts where a mismatch in your DNS configuration would lead to an error.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=85)** My server is now part of my Active Directory, so I can initial as my Kerberos session and check for that Kerberos session using the command klist, which lists all my Kerberos tickets, my currently created, and lastly, created ticket is showing, including its valid starting and expiration date.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=100)** Let's also create a service account that we can then use within our AD for all of our instances.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=106)** This service account also needs an SPN.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=108)** That SPN is pointing to my fully qualified host name, sqlonlinux.demo.local, and also my port.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=115)** If you change the port of your SQL Server, you will need to change that SPN or create another SPN as well.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=121)** For SQL Server to be able to authenticate using Active Directory, it also needs a keytab file.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=127)** This keytab file will again include the pointer to our host name as well as to our service account.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=132)** I'm also adding a bunch of different encryption [[Algorithms]] here.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=135)** Those usable for you may depend on your local AD settings.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=140)** I will then take that file, move it to the secrets folder of SQL Server, and make it accessible by SQL Server and set the appropriate permissions.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=148)** Our last step is to tell SQL Server to use that file and provide our service account as a privileged AD user.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=156)** If I now restart my SQL Server, my SQL Server is now AD integrated.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=162)** I can now use my SQL login to also authorize my Active Directory user.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=166)** This will then allow me to connect to my SQL Server Linux using [[Windows]] authentication, which is also revealed by looking at the current username logged into the server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (9), [[Active Directory]] (6), [[Linux]] (4), [[SQL]] (2), [[MySQL]] (1)
> **Env Vars:** sql (11), spn (4), dns (2), demo (1), local (1)
> **CLI Commands:** make (3), find (1), mysql (1)
> **Prerequisites:** install (2)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 2. SQL Server on Containers

[↑ Back to Table of Contents](#table-of-contents)

#### [Container fundamentals and Docker installation](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=0)** - [Instructor] Let us think a few years, or maybe even better, decades back.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=4)** When you needed a new [[Microsoft SQL Server|SQL server]] or basically any application, you needed a new dedicated bare metal server, so network, CPU, memory, storage, all the components that make a physical machine with its own dedicated operating system and the design application running on it.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=20)** Then CPUs and memory got faster and faster, so it didn't make sense anymore to have a ton of servers that all didn't get properly utilized, but you still wanted to separate your applications and duties.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=30)** This is how we got to virtualization, so basically computers, virtual computers, running on a physical server through a so-called hypervisor.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=39)** With that is saving a lot of physical resources, every single virtual machine comes with a lot of redundancy.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=45)** You have an independent installation of an operating system within each VM.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=49)** That also means we're using three times the disk space here.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=53)** And of course, we also need to maintain all our [[SQL]] servers individually.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=57)** And while some of those tasks can be automated, they still need to be done, and they're containers.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=62)** Containers are based on images, like an ISO image that you can download from a website.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=68)** And they only run in memory, so if you want to run an image like SQL server once or three times, you only need one image on your disk.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=76)** If you want the new version of SQL server, you download the new image and update the container or all of them.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=82)** A container also doesn't have an operating system.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=85)** It shares the operating system of the host.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=88)** That also means a [[Windows]] container can only run on a Windows host and the [[Linux]] container can only run on a Linux host, and the same applies to the entire infrastructure with maybe the exception of storage, because while the container itself only lives in memory and is therefore ephemeral, containers of course support persisted storage, but we'll talk more about that a bit later.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=110)** It is actually fairly easy to define your own container images.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=114)** You'd usually define a base image, which can just be an operating system that you run on later, or another image that already has applications installed, and you can then, for example, copy your own application to the container, compile it, and execute other commands.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=129)** As mentioned, the role of the hypervisor with containers kind of gets taken over by the container runtime, and there are quite a few different offerings out there.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=138)** The standard in [[Kubernetes]] right now, for example, is containerd.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=142)** For our standalone container module now though, we'll be using Docker.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=145)** However, whichever of these runtimes you pick, while their syntax may differ, the general concept applies to all of them.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=154)** Let's first install Docker on Linux.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=156)** This is super easy.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=158)** I secure into [[MySQL]] on Docker server this time and then install Docker through my package manager.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=164)** We can verify Docker has been installed, and that's all it takes.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=168)** On Windows, this requires a bit more steps, and we have multiple options.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=173)** Before installing Docker, we need to have Hyper-V, or the WSL 2, the Windows Subsystem for Linux installed.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=180)** I will install the Windows Subsystem for Linux and set version 2 as the default.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=185)** If you prefer Hyper-V or already have it installed, you can use that too, but it has more overhead and is less performant.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=191)** Either way, you have to make sure that the machine you're running this on is supporting virtualization, either in the BIOS if this is a physical machine, or in the settings of the hypervisor if this is a virtual machine.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=201)** To install Docker, we could go to the Docker website manually, download it, and install it through the MSI.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=206)** But since we have Chocolatey on our box, we can simply run choco install docker-desktop.
>
> **[3:32](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=212)** Similar to the package manager in Linux, this will now take care of all the prerequisites and dependencies.
>
> **[3:38](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=218)** While this is installing, you may remember when I mentioned that Linux containers can only run on Linux and Windows containers can only run on Windows.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=225)** What Docker here is actually doing is, it is either using a virtual machine running Linux or the Windows subsystem for Linux to actually run Linux containers so Docker is using Linux on Windows.
>
> **[3:56](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=236)** This allows us to use Linux containers on Windows, but this additional layer, of course, comes with an additional overhead.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=242)** Once that is done, I will also add some extensions to my Visual Studio Code installation to make it easier to work with Docker containers.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=249)** Docker has been installed, and all that's left to do is a machine reboot.
>
> **[4:13](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=253)** Our installation on both Linux and Windows is now done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (14), [[Windows]] (11), [[Microsoft SQL Server|Sql server]] (3), [[SQL]] (1), [[Kubernetes]] (1)
> **CLI Commands:** docker (13), make (4), mysql (1)
> **Env Vars:** sql (4), cpu (1), iso (1), wsl (1), bios (1)
> **Prerequisites:** install (6)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), similar to (1)
> **Versions:** version 2 (1)
> **Tools:** visual studio (1)

#### [Deploying and accessing SQL Server using Docker](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=0)** - [Instructor] Deploying a [[Microsoft SQL Server|SQL Server]] on containers is very similar to self-managed deployment on [[Linux]].
>
> **[0:06](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=6)** You start by picking a version of SQL Server, however this time, it comes from a container registry, which is also nothing else than a web-based repository.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=14)** The container registry will again offer you all the available versions and CUs of SQL Server with the latest CU of each SQL Server major release being tagged as Latest.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=24)** In theory, for example, in disconnected scenarios, you can also run your own container registry and cache the [[Microsoft]] images there, but we'll stick to using the public registry.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=35)** An optional step will be to pre-pull or download the required containers.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=39)** When running a container, the first thing the container runtime will do is check if the image already exists or not, and if not, it'll download it.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=49)** But what if you have connectivity issues at some point?
>
> **[0:51](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=51)** By pre-pulling, you're simply ensure that the container's already present.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=55)** The last step is then to simply run the container, which means spinning up an instance of this image to memory.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=61)** Your run command will also include all the required infos like parameters such as passwords, trace flags, or features, as well as persistent storage, ports, and other settings.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=72)** Since we installed Docker on both, a Linux and our [[Windows]] machine, we could current containers from either one.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=77)** Let's start on Linux so I will secure shell into my machine and pull the latest SQL Server 2022 image.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=85)** As mentioned before, if I did not pre-pull it, Docker will simply pull it once the first container using that image is being started.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=92)** I can then run SQL Server using the command docker run where I'm passing the environment variable to accept the license agreement, my SA password, but I'm also mapping my local port 3133 to the local Port 1433, the SQL Server default port, and I'm also providing a name for the container as well as for the host that the container is running in.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=112)** If I run docker ps, I will see my SQL Server 2022 container, which has been up for a couple of seconds.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=119)** However, while this container is running in that Linux machine, I also expose it for a TCP port, so if I disconnect from a Linux machine, I can go back to my Windows machine and access it from there.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=134)** Of course, I could also use my local Windows installation using the exact same command or I can slightly change it and use SQL Server 2019 instead.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=142)** Since this time, I did not pre-pull the image, it'll be pulled first so while the docker run command took only a few seconds on Linux, it takes a bit longer here on the first run.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=152)** I now have a second docker container running, this time on my Windows box that I can also connect to using my local IP address.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=158)** If I want to run a SQL Server 2022 instead of SQL Server 2019, I use the original command again pointing to the SQL Server 2022 image, and also using a different port and name.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=169)** Again, the image will be pulled, and once that is done, within a matter of seconds, we have two [[SQL]] Servers running on Windows as well as another one on Linux.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=178)** Both of my containers are showing up, and my SQL Server 2022 is also accessible.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=184)** As you can see, sometimes this takes a couple of tries in the beginning because the container has been created but SQL Server is still finalizing its initial install.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=192)** Another super easy way to deploy a new SQL container is the new SQLCMD.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=196)** We can use it to create a new instance, including an already attached database.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=201)** We can also immediately connect to it as SQLCMD has a built-in connection management so no need to provide a username or password for that.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=209)** By the way, this is also the reason why I've assigned 60 gigs of memory to this box since we are now running multiple SQL Server instances on it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (15), [[Linux]] (7), [[Windows]] (5), [[SQL]] (2), [[Microsoft]] (1)
> **Env Vars:** sql (17), sqlcmd (2), tcp (1)
> **CLI Commands:** docker (6)
> **Analogies:** similar to (1), for example (1), such as (1)
> **Ports:** port 3133 (1), port 1433 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** download the (1)
> **Prerequisites:** install (1)

#### [Working with a SQL Server using Docker](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=0)** - [Instructor] Let's see how we can actually work with our container instances.
>
> **[0:03](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=3)** And for that purpose, we create a database called TestDB in one of them.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=8)** If I check this [[Databases]], my TestDB is also showing up.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=12)** However, if I stop and delete that container and then simply create a new container using the exact same command, including the same host name, same image, same password, et cetera, TestDB will be gone once I look at that container again.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=26)** Let us create another container using a different port, using the same image, but this time, we're actually adding a volume to it called [[SQL]] Data 2.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=35)** I can create a test database there again, and if I check for that file, in that volume, in that container, it is also showing up.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=45)** I can now go ahead again and stop and delete this container, but the volume is still there because the volume was created as a persistent volume.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=54)** So if I now create a new container, again using the same command, pointing to the same volume, using the same path, a new container will be created.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=63)** That container will be using the same volume, and if I check our databases, again, TestDB will show up.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=70)** We can also pass in additional parameters using the -E or the -N switch for environment.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=77)** In this case, for example, I'm changing my edition to the evaluation edition, but I'm also activating the MSSQL agent.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=85)** In addition to that, I have also provided a trace flag using the -T switch.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=89)** So I'm using -T3205, which is coming right after the [[Microsoft SQL Server|SQL server]] executable itself.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=96)** If I check the version of that container, it is showing as an evaluation edition, and if I check the trace status, it will show me the 3205 trace flag that we've just enabled.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=108)** If I connected at instance, for example using SSMS, I can connect to that endpoint using my SA user and my password, and I will see that [[MySQL]] Server agent is running, and also again, the little penguin or Task because this container is running on [[Linux]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[SQL]] (1), [[Microsoft SQL Server|Sql server]] (1), [[MySQL]] (1), [[Linux]] (1)
> **Env Vars:** sql (2), mssql (1), t3205 (1), ssms (1)
> **Analogies:** for example (2)
> **CLI Commands:** mysql (1)
> **Speakers:** - [instructor] (1)

#### [Integrating SQL Server on containers with Active Directory](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=0)** - [Instructor] We can also AD integrate a [[Microsoft SQL Server|SQL server]] running a container, and for that, the host doesn't even need to be integrated into our [[Active Directory]].
>
> **[0:08](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=8)** You just need any [[Linux]] machine that is part of your AD.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=10)** I will therefore go back to my [[SQL]] Linux machine first, which is AD integrated from our last module.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=15)** I'm making sure I still have an active cab session.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=18)** And then I create an SPN for a machine called DockerAD.Demo.Local using the port 32433.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=26)** I'm then using the exact same logic and commands that I've used before to create my key type file for SQL and Linux and I'm creating one for my Docker ad machine also, again, including the SQL service.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=37)** When it comes to AD integration, DNS is always key.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=41)** So what I will do next is I will grab the IP address of my Docker SQL on Docker host and then connect to my domain controller, which is also my DNS server and create a DNS entry there.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=53)** I'm adding a new host called Docker AD just as I've named it in my SPN and provide the IP address and also create an associated PTR record.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=63)** My DNS record has been successfully created and I can disconnect again from my DNS server.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=69)** I can then copy my SQL tab file from the Linux machine and copy it to my SQL on Docker server.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=75)** I can then log into my SQL on Docker machine and I'm going to create a couple of files here first, a config file for my SQL server.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=84)** That config file will contain a pointed to my key tab file as well as the pointed to the privileged AD account, my SQL SVC account that I've previously created.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=92)** I will also need to create a Kerberos config file, which will point to my realm, demo.local, including the pointer to the domain controller, default domain, et cetera.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=103)** The important part here is, again, most of that is case sensitive, especially the domain name, so make sure, especially the O is or using all upper cases.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=111)** While that last one is not necessary, I always like also creating a logger.ini file, which will create some additional output in case something goes wrong with Mac's authentication.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=122)** Since these files need to be in the container when it starts, rather than have Docker create a volume for me, I will create the contents of that volume in advance.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=130)** So I'm creating a few directory, /container, /container/Dockerad, and /container/Dockerad/secrets.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=138)** I will move my previously created files in there.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=142)** I will make sure these files are accessible and then create a user named MSSQL and make it the owner of these files.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=151)** I will then run against SQL server in a container.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=153)** However, there's a couple of important things here.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=156)** First of all, I'm mounting my Kerberos config file into /etc/krb5.conf, so I'm actually mapping an existing file in my volume to a different location.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=167)** The name of our containers also super important as well as the port because that's what we've defined in our SPN.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=174)** And since my host is not AD integrated, I'm also providing the IP addresses and name service of my DNS of my active directory.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=183)** I now run this command.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=184)** Since our previous installation was using SQL Server 2022, it'll pull the image first, and once the container's up and running, I can connect to this machine using SQL authentication and then authorize the user.
>
> **[3:18](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=198)** If you run into any issues with the AD integration, this is the file that you are going to be looking at, /container/dockerad/log/securitylog.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=206)** However, everything here seems fine, so we disconnect from our SQL machine, connect using SQL Auth, authorize our [[Windows]] user, and we can now use AD integration in our container running on Docker.
>
> **[3:42](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=222)** Over the last few demos, we've deployed a few in SQL instances, one of them being even integrated into the active directory, so as easy as that, I could now remove and redeploy this container and therefore start with a fresh environment from my developments without losing enterprise features like AD integration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (12), [[Microsoft SQL Server|Sql server]] (4), [[Linux]] (4), [[Active Directory]] (3), [[Windows]] (1)
> **Env Vars:** sql (16), dns (6), spn (3), ptr (1), svc (1)
> **CLI Commands:** docker (8), make (3)
> **File Paths:** logger.ini (1)
> **Ports:** port 32433 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 3. SQL Server on Kubernetes

[↑ Back to Table of Contents](#table-of-contents)

#### [Kubernetes fundamentals](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=0)** - [Instructor] As nice as containers are, they are hard to manage on their own, especially for enterprise environments.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=6)** This issue can be solved through container orchestration and [[Kubernetes]] is exactly that, a container orchestrator.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=13)** It starts by forming pods, which is simply a group of containers that belong together.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=18)** Of course, a pod can also just consist of a single container.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=22)** These pods are then scheduled and distributed across servers or nodes, and at least one of them is your control plane, you might have more, for HR requirements, and its only job is to manage the load across the other nodes, the worker nodes.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=36)** It'll usually not run any workloads itself, except for some system containers.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=41)** These nodes form your cluster, and in addition, you'll usually provide some external storage to persist your data and make your pods accessible through persistent endpoints, so-called services.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=52)** To make sure the pods can communicate with each other, Kubernetes requires its own network or networking plugin, so every pod will have an IP address, et cetera.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=60)** Your pods can be organized in namespaces, kind of like a named instance of a [[Microsoft SQL Server|SQL Server]].
>
> **[1:06](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=66)** And namespaces can also be distributed across multiple nodes while a pod can't.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=71)** To manage your cluster, you would usually use a tool called kubectl, and kubectl supports both imperative commands where directly define the command what you want to happen, as well as declarative commands, where you'll pass a [[JSON]] or YAML file to the [[CLI]].
>
> **[1:26](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=86)** This way is preferred in most cases, as it allows you to easily reuse your code and commands to replicate the same results.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=92)** You can, of course, also use kubectl to manage multiple clusters.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=96)** You just point it to the desired endpoint, making this your current context.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=101)** Let's talk a bit more about persistent storage in Kubernetes.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=104)** Of course, you need your physical storage, which can be addressed through NFS, local storage, iSCSI, cloud-based storage, and a lot more.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=112)** Your physical storage is represented in Kubernetes through objects called persistent volume.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=117)** They point to the physical storage, including information like the size of a specific volumes and settings like whether multiple pods can access the data simultaneously, like for a web server or if each volume is exclusive to a pod at a time, which is what we want for SQL Server, for example.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=133)** On top of your persistent volumes, you have persistent volumes claims, which kind of act like a bridge between your pod, so your pod will reference a PVC and your storage, so the PVC will reference a volume.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=145)** All of this can either be deployed manually through a YAML file, or dynamically through a storage class, the class of reference and automated provisioner, which can then provision the actual storage, like a folder on an NFS share, for example, as well as the corresponding Kubernetes volumes and claims.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=162)** The last thing I want to touch on real quick is how Kubernetes handles resources, such as CPU and memory assignments to workloads.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=168)** For each of your pods and workloads, you can define a resource request and a resource limit.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=173)** The request is the minimum amount required by this pod.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=177)** If there is no node that can provide the requested amount of resources, the pod won't start up.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=183)** Let's say our pod has a request of five gigabytes of memory.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=187)** This means it can only be scheduled on a node that has at least five gigabyte available.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=192)** In addition, we can define the limit.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=194)** If we set this to seven gigabytes, for example, this is the maximum amount of memory that Kubernetes would grant this pod.
>
> **[3:20](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=200)** However, this amount isn't guaranteed.
>
> **[3:23](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=203)** If no node can provide this, the pod may get less memory.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=206)** This also works for CPU of course.
>
> **[3:28](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=208)** One thing they need to consider though is that any application-specific settings still apply.
>
> **[3:32](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=212)** In the case of SQL Server, for example, you can provide the server max memory setting, which will tell SQL Server how much memory it should consume.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=220)** If you set this, for example, to four gigabytes and the pod request is five gigabytes, the pod will be allocated five gigabytes, but SQL Server will only use four of them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (7), [[Microsoft SQL Server|Sql server]] (5), [[JSON]] (1), [[CLI]] (1)
> **Env Vars:** sql (5), yaml (2), nfs (2), pvc (2), cpu (2)
> **CLI Commands:** kubectl (3), node (3), make (2)
> **Analogies:** for example (5), kind of like (1), such as (1)
> **Code Identifiers:** iscsi (1)
> **Speakers:** - [instructor] (1)

#### [Installing Kubernetes](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=0)** - [Instructor] Before you can deploy a [[Microsoft SQL Server|SQL Server]] in a [[Kubernetes]] cluster, you need a Kubernetes cluster.
>
> **[0:05](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=5)** And just like there are many different container runtimes and [[Linux]] distributions, there are many different Kubernetes distributions from which you'll have to choose from.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=14)** Another very important question, where are you going to deploy this, on-premises or in a cloud?
>
> **[0:19](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=19)** And if you're opt for a cloud, you can pick a managed or a self-hosted approach.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=23)** The general concept of a self-managed installation is always the same.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=27)** For kubeadm, for example, you install the kubelet, kubeadm, kubectl and a container runtime.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=33)** And that container runtime will be containerd by default, but you could change that.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=37)** You'll then go ahead and install these tools on all the nodes that you want to be part of your cluster.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=42)** So if you need at least one control plane, you can then run kubeadm init on the first server, which will make this server your control plane of your cluster.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=49)** While you could run Kubernetes on a single machine, you'd usually have additional servers to form your cluster, but rather than running kubeadm init, which would create another cluster, you run kubeadm join, which will make this server a worker node within your cluster.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=62)** You then repeat that step on all the servers that you want to include in your cluster.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=67)** You then install a Kubernetes networking plugin as well as the desired storage providers and classes.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=72)** When deploying a managed cluster in a cloud, the process will again differ in its details from provider to provider, but they usually all offer a [[CLI]] as well as a web portal-driven approach to deploy resources.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=83)** Using either of those, you will then deploy a cluster where you typically provide the number of desired worker nodes, location, et cetera.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=90)** The deployment will also usually automatically provide the required storage and networking capabilities.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=95)** What you will notice in many of these offerings is that the control planes aren't visible.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=100)** They are still there though, as you still need someone to distribute loads, et cetera, they're just abstracted away.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=106)** To be able to manage my Kubernetes cluster from this [[Windows]] box, I will first install the Kubernetes CLI using Chocolatey.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=112)** For the Kubernetes basic, so kubeadm, the kubelet, containerd, et cetera, I have prepared a bash script that will perform all these tasks for me.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=122)** It will install some prerequisites that should already be installed, but just to be sure, it will disable swap, which is also key with Kubernetes and will then install containerd as well as the kubelet, kubeadm and kubectl.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=135)** It will also prepare a couple of other required settings for IP tables and IP configurations.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=140)** This is just much easier to have it all in one script rather than run all these steps manually in each of our machines.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=146)** To be able to run this from a machine rather than to manually copy it over, I wrote a little function.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=151)** So this little function basically takes one file, copies it to the Linux box and runs it there.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=156)** Let's run this script on our control plane, and while this is running, you see there's a lot going on, which probably explains why I've put it in a single script rather than go through it step by step, especially since we have to do this on all our workers as well.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=169)** With the correctors in place, I can [[SQL]] Shell into my control plane and run kubeadm in it.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=175)** To do so, I will first need to check which version got downloaded and installed, because I was not specifying a specific version.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=182)** So I'm running kubeadm version, which will tell me that I'm running 127.3, perfect.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=187)** That matches with my script, so I can initialize my cluster using kubeadm init.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=192)** For my kubeadm init, I'm providing two parameters, the Kubernetes version that we've already seen, but also the CIDR range for the pod network.
>
> **[3:20](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=200)** These are the IP addresses that my ports will use to communicate with each other.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=204)** Make sure that this range does not clash with any other IPs that your pods may need to reach from within your production network.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=211)** Similar to running containers, this is actually the point where Kubernetes or a kubeadm is pulling all its images.
>
> **[3:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=216)** So again, we could have pre-pulled those to save a little time on the kubeadm init pod.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=220)** My control plane is now ready and it's also giving me the command to join additional nodes to my cluster.
>
> **[3:46](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=226)** However, we'll start by creating or by retrieving the config for this cluster.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=231)** I'll make a local directory.kube in my home directory and copy the admin config from the ATC folder to this directory.
>
> **[3:59](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=239)** I also made myself the owner, and I can now use kubectl to talk to my cluster.
>
> **[4:04](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=244)** It is only showing my control plane and it is showing it's not ready, because we have not deployed any storage or networking.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=249)** But that's okay, we're going to do that in one sec.
>
> **[4:12](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=252)** On my Windows machine, I can also create a directory called .kube in my home directory and then copy the config file from the Linux machine to that directory.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=263)** I can now access that Kubernetes cluster from my Windows box as well, which should show you how powerful but also dangerous this file can be, so make sure to protect it from unauthorized access.
>
> **[4:33](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=273)** I will not get into all the details around storage, et cetera.
>
> **[4:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=276)** Basically what I'm doing here is I'm applying a couple of config files.
>
> **[4:39](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=279)** So I will first apply some roles and role-based access control in the storage class for NFS and then my provisioner for the NFS.
>
> **[4:47](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=287)** Let's take a closer look at the provisioner though.
>
> **[4:51](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=291)** If I'm scrolling down a little bit in that YAML file, this is where the actual configuration sits.
>
> **[4:56](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=296)** This is where I'm telling it that my NFS server is k8s - nfs.demo.local, and also the path on my NFS server.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=303)** This is where Kubernetes will store all the data that I'm using the NFS storage for.
>
> **[5:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=307)** I also applied this and my NFS storage should have been deployed.
>
> **[5:12](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=312)** In addition to that, I will also apply some local storage components so I can also use local disk within my nodes.
>
> **[5:18](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=318)** We will also need some networking.
>
> **[5:20](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=320)** And for this, I will use the flannel plugin with the default settings.
>
> **[5:24](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=324)** As you can see, the source for kubectl command can even be a website.
>
> **[5:29](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=329)** Again, there is way more to that, but this course is not a Kubernetes deep dive.
>
> **[5:34](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=334)** I will also install a load balancer to be able to assign dedicated IPs to my SQL Server.
>
> **[5:40](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=340)** For the load balancer to work, I have to make one change in the Kubernetes based configuration.
>
> **[5:45](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=345)** I have to change the strictARP setting from false to true because this is required for my load balancer to be able to announce its IP addresses.
>
> **[5:52](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=352)** So in that file, I will search for strictARP and change the settings from false to true.
>
> **[6:01](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=361)** By simply closing and saving this file, the configuration will be applied and I can then install metallb again by simply using a file from a web repository.
>
> **[6:13](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=373)** I have also reserved a bunch of dedicated IP addresses.
>
> **[6:17](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=377)** Here, IP address 50 to 60 in my local subnet.
>
> **[6:20](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=380)** However, if I'm trying to apply this, this fails.
>
> **[6:24](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=384)** If I check our nodes, our control plane is showing as ready, but the issue is that it is a control plane, so the control plane cannot run any actual applications and the load balancer would be an application.
>
> **[6:34](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=394)** So what we first need to do is add our workers.
>
> **[6:37](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=397)** On both my workers, I can run the same file again to prepare my prerequisites.
>
> **[6:43](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=403)** If you didn't take note of the joint command to a Kubernetes cluster earlier, no problem, because we can always regenerate it.
>
> **[6:49](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=409)** I will just take that command, save it to a file, and then again run it on both my worker notes.
>
> **[6:57](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=417)** Should you only have a single machine, the alternative to that would be to make your control plane schedulable.
>
> **[7:02](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=422)** You could do that with the commands here that I've commented out.
>
> **[7:05](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=425)** If I now check my node, I can see my control plane as well as both of my workers showing as ready.
>
> **[7:11](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=431)** I could also use the -o=wide switch to get additional information like the IP addresses, OS image, et cetera.
>
> **[7:18](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=438)** Now let's try deploying metallb again.
>
> **[7:24](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=444)** This time it worked.
>
> **[7:27](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=447)** So now we have a load balancer deployed, including an IP pool that has been created and advertised.
>
> **[7:33](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=453)** So far looking at storage, our cluster does not have any persistent volumes.
>
> **[7:39](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=459)** And if S would dynamically create them for us, so we don't have to worry about that.
>
> **[7:42](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=462)** Local storage, however, will pick up the volumes that are part of the nodes.
>
> **[7:46](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=466)** And for that, I have prepared another script.
>
> **[7:48](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=468)** We just create five volumes, or more precisely five folders, which will then be mounted on these worker nodes in the \localStorage directory.
>
> **[7:55](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=475)** I will again run this script on both my worker nodes.
>
> **[7:58](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=478)** After running this script on both machines, I'm immediately seeing my 10 more persistent volumes that I could now use to persist data on any Kubernetes application.
>
> **[8:06](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=486)** Just be aware, since this is stored locally, if your node goes down, so does your data.
>
> **[8:11](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=491)** I understand this was a lot in a very short time and without many details I did not explain.
>
> **[8:15](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=495)** However, I wanted to make sure on the one hand that you have a working Kubernetes cluster and at the same time not to lose the scope of this course, which is deploying SQL Server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (18), [[Microsoft SQL Server|Sql server]] (3), [[Linux]] (3), [[Windows]] (3), [[CLI]] (2)
> **CLI Commands:** make (8), kubectl (4), node (3)
> **Env Vars:** nfs (6), sql (4), cli (2), cidr (1), atc (1)
> **Prerequisites:** install (8)
> **Code Identifiers:** strictarp (2), localstorage (1)
> **Analogies:** just like (1), for example (1), similar to (1)
> **Versions:** 127.3 (1)
> **Tools:** bash (1)

#### [Deploying and accessing SQL Server on Kubernetes](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=0)** - [Instructor] With your cluster deployed, we can deploy [[Microsoft SQL Server|SQL Server]] to it.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=4)** While it's not a requirement, it is recommended to separate applications for namespace.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=9)** In that namespace, you will then start by deploying a persistent volume claim, or even better, a few of them to use different storage for data, logs, backups, et cetera, just as you would on a [[Windows]] installation following best practices.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=22)** At least for the initial deployment, you will also need to provide a password for that instance.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=27)** Your storage and the password will be referenced by your deployment.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=30)** That deployment will usually be defined in a YAML file, which will also include your additional parameters and configurations.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=37)** The last step is to make your SQL Server accessible from outside your cluster through a service.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=43)** This service will usually either be of tab NodePort or LoadBalancer.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=47)** A node port has a fixed TCP port from the 30,000 range and is accessible on every node of your cluster.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=53)** A load balancer is mostly seen in cloud deployments as it is being represented by a dedicated IP address for this application.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=60)** [[Kubernetes]] also offers additional service types beyond these two, but those are the most common ones for our use case.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=67)** As pointed out, having a namespace isn't a requirement, but it is highly recommended.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=72)** So, I will start with kubectl create namespace mssql, and that namespace just got created for me.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=78)** I will also change the current context of kubectl to that namespace, so I don't have to provide it every single time around kubectl.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=85)** Now, when I run a kubectl command, it will always run in the context of the mssql namespace unless otherwise specified.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=92)** So far, it's empty of course.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=95)** Let's start with a secret for our SA password.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=98)** So what I'm doing is I'm storing my password in a variable and pass that as a secret to kubectl create secret.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=106)** Take a look at that secret.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=108)** What you see is the name of my secret MSSQL_SA_PASSWORD including its data.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=114)** The data might look encrypted, but it's actually only basically for encoding so I could easily decode it.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=119)** Therefore, please make sure to change your SA password after the initial deployment.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=124)** Next, I will define some storage from a SQL server, and I will start with persistent volume claim using local storage.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=131)** All I'm doing here is I'm defining a persistent volume claim, which I'm calling [[SQL]]-storage.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=136)** It will use local storage.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=137)** It is using ReadWriteOnce access mode, which means only one pod can use it at a time, and it's going to have a capacity of 35 gigabytes.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=146)** I apply this and my pvc shows up.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=149)** It is showing as pending because of course, so far nobody's using it.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=153)** So, now it's time to define our SQL server, and I'm defining this as a deployment.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=158)** I'm calling it mssql-deployment, and there's a bunch of other settings here that we will ignore.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=163)** The important parts here, again, the pointer to my image, the port that it's running on, as well as the password and the license agreement that are coming from environment variables.
>
> **[2:56](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=176)** The license agreement acceptance is hard coded, while the password is coming from our previously defined secret.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=182)** In addition to that, I'm mounting a volume called mssql, which will be mounted to the var/opt/mssql path.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=188)** That volume is defined down here as I pointed to my previously defined persistent volume claim.
>
> **[3:13](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=193)** If I apply this, my pvc is now showing as bound, so it is being used by the deployment, and my SQL server is slowly coming up.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=201)** It is not showing as ready yet, because we first need to download the image, et cetera.
>
> **[3:25](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=205)** Just like on Docker, I could have manually prepulled that first.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=209)** When looking at a Kubernetes resource, as you can see I did here, you can always add the -w switch for watch if you want to continuously monitor the status of an object.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=217)** What you can see here after a couple of seconds, the state of my container changed from container creating, which basically means downloading the image, to running.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=225)** When I take a look at the logs of this pod, I can see that these are actually the logs of my SQL server.
>
> **[3:53](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=233)** The last thing we have to do is we have to make our instance accessible for a persistent endpoint as a service.
>
> **[3:59](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=239)** When we did that on Docker, we were immediately using and applying that port when we created the container.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=245)** Here, we're doing that as a separate step.
>
> **[4:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=247)** We'll expose this deployment mssql-deployment on the target-port=1433.
>
> **[4:13](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=253)** We now have a service, and that service is accessing the local port 1433 of my mssql-deployment and exposing it on port 32588.
>
> **[4:22](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=262)** I can access this on any node in my cluster, so if I'm, for example, using my case worker one and combined with that external port, I will be getting an endpoint, and that endpoint is the combination of that host name and that IP address.
>
> **[4:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=276)** I can now use sqlcmd or any other client tool to access this endpoint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (6), [[Kubernetes]] (2), [[Windows]] (1), [[SQL]] (1)
> **CLI Commands:** kubectl (5), make (3), node (3), docker (2)
> **Env Vars:** sql (6), yaml (1), tcp (1), mssql_sa_password (1)
> **Best Practices:** recommended (2), make sure to (1)
> **Ports:** port 1433 (1), port 32588 (1)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** coming up (1)
> **Exercise Files:** download the (1)

#### [Working with and maintaining SQL Server on Kubernetes](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=0)** - [Instructor] Let us again make use of our [[Microsoft SQL Server|SQL Server]] and start by restoring some data to it.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=4)** For that purpose, I'm downloading AdventureWorks 2019, which I will then need to copy into my pod.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=10)** To copy a file into a pod, you'll need the pod's name, and since we're using a deployment, this pod's name will have a bunch of dynamic IDs in it, the ID of the deployment as well as the ID of the pod, and to avoid having to type that, I'm just storing it in a variable again, using kubectl get pods, and then I'm providing a JSONPath to only retrieve the name.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=28)** My pod variable now only has the name of the pod.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=31)** Using that, I can use kubectl cp, so kubectl copy, to copy my backup file into my pod.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=38)** The backup file is not present in the pod, so I can use sqlcmd to restore my database.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=44)** Taking a look at this [[Databases]], I can also see my AdventureWorks 2019 database has been successfully restored.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=50)** Right now, we are running SQL Server 2019 CU21.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=55)** To upgrade this to another version of SQL Server, all you have to do is set the image of the deployment to the new image name.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=61)** Here, for example, I'm upgrading to the latest image of SQL Server 2022.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=67)** I can again use kubectl to monitor status of my rollout, so what will happen here is, so we do not have two competing versions of SQL Server accessing our data at the same time, [[Kubernetes]] will first scale down my existing SQL Server 2019, so basically, remove my SQL Server 2019 before it will deploy a new replica set of [[SQL]] 2022.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=87)** If I look at that replica set, I will also see my old replica set, but that has zero desired already pods.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=93)** My new pod is showing as running, and taking a look at the logs of it, I will see the update logs running or the upgrade logs going from my old SQL Server 2019 to SQL Server 2022.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=105)** Once all those are done, I will be able to access my SQL Server again, which is now showing as running SQL Server 2022 CU5.
>
> **[1:53](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=113)** I could also have used different storage, like NFS, for example.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=116)** For that purpose, let's first delete our existing deployment and also our existing PVC.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=122)** We will then redefine our PVC, and the only difference that we have here is I'm using a different storage class.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=128)** I'm using NFS storage rather than local storage.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=131)** If I apply this, I'm getting a new PVC immediately, and this PVC is immediately showing as bound because NFS storage is working slightly different, and it is using the NFS storage class.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=142)** Since I was using the same name, I can even apply the exact same code as before.
>
> **[2:27](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=147)** Now that has been applied, a new SQL Server container or a new SQL Server pod will be created, up and running, and since we also did not change anything to the name of our deployment, it will be accessible on the same port and endpoint.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=159)** This new deployment is a SQL Server 2019 again, because previously, we had imperatively changed the image rather than modifying and reapplying the YAML manifest.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=168)** Advanced settings can go into the YAML manifest as well.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=172)** Here, for example, I'm adding a trace flag again, I'm also changing my addition again, and I'm enabling my SQL Server agent, just like we did on Docker using environment variables.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=182)** If I apply this, this will immediately trigger a reconfiguration of my SQL Server.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=187)** I'm now running an enterprise evaluation edition, and that trace flag that we've just enabled is also showing.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=194)** If you have more complex scenarios, you can also provide an MSSQL config file, which will typically happen for your config map in Kubernetes.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=201)** In that config map, I'm defining, I want trace flag 3227 to be active.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=206)** I'm applying that config map, and my SQL deployment code will now, rather than having a hardcoded trace flag here in the deployment, reference that MSSQL conf.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=217)** I can again apply this, which will again trigger a reconfiguration of my SQL Server, and once it is back up and running, it is showing the new trace flag, 3227.
>
> **[3:48](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=228)** Keep in mind, whenever you do these changes, this triggers a restart of SQL Server, so you may be experiencing a short or longer outage, depending on the effect of that change.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=238)** Let's expose this for a load balancer rather than a node port service.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=242)** I will delete my existing service, which will only delete the endpoint.
>
> **[4:04](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=244)** It is nothing to mess SQL Server itself.
>
> **[4:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=247)** SQL Server will keep running, it is just not accessible from the outset again.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=250)** I will expose it again, but this time, with type load balancer, so I'm not providing the target port, but also the port that I want the load balancer to listen on.
>
> **[4:19](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=259)** If you look at the service, I'm seeing an external IP, which is the first IP address from a MetalLB range that we've defined earlier.
>
> **[4:25](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=265)** I will again store this IP address in a variable, and I'm immediately able to access my SQL Server on that IP address.
>
> **[4:33](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=273)** I could also go ahead and delete the entire namespace, so everything from storage to my deployment to my endpoint will be gone.
>
> **[4:41](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=281)** Then I'm simply rerunning my command, so I'm creating my namespace, my secret, my PVC, my config file, as well as my SQL deployment and my service, and if I take a look at what is happening in my namespace, I will see all my resources again.
>
> **[4:59](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=299)** Everything has been deployed again, and of course, I could access my brand-new SQL Server now again as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (22), [[SQL]] (3), [[Kubernetes]] (2), [[Databases]] (1)
> **Env Vars:** sql (25), pvc (5), nfs (4), yaml (2), mssql (2)
> **CLI Commands:** kubectl (4), make (1), cp (1), docker (1), node (1)
> **Analogies:** for example (3), just like (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Integrating SQL Server on Kubernetes with Active Directory](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=0)** - [Instructor] To deploy an AD integrated [[Microsoft SQL Server|SQL server]] porting [[Kubernetes]], we will use a config map again, and this will all be in one file.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=7)** So if we take a look at that file, the first thing you see is I'm deploying this as a StatefulSet rather than a deployment, and you're going to see why in a second.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=15)** I'm also using a different name for my container, and I'm also using a different name for my secret because I'm using a different secret, even though it's going to be actually the same password.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=25)** I'm providing a bunch of volume mounts here, so I have different volumes for data, logs, et cetera, allowing me to store my data, my logs, and my config in different parts on my storage.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=36)** I'm also mounting my mssql.conf again and also my krb5.conf, just like we did in the Docker deployment.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=43)** Also, just like in the Docker deployment, I'm again providing all my DNS setting, so my name server, which is my domain controller, as well as a bunch of host names to be added.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=52)** Because my Kubernetes cluster itself is, again, not AD joined.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=56)** I'm then mounting all of these volumes rather than just using a single volume for everything.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=61)** In the same file, I'm again defining my load balancer service.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=64)** I add my persistent volume claim for my data and my log directory, and I'm also providing my config maps.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=71)** Rather than my trace flag, this now contains a pointer to my keytab file, to my privileged service account, as well as my default file locations.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=80)** I'm also adding a different config map for my Kerberos configuration.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=84)** Last but not least, I'm defining my secret, which is my mssql-ad secret.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=89)** My entire deployment will run out of this single file, and as you maybe noticed, the order of objects in the manifest does not matter at all.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=97)** Let that sink in for a second.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=99)** That single file will deploy my endpoint, my storage, my secret, my configuration, and my actual application by simply applying this.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=108)** I could take this to an entirely different cluster and get the exact same result.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=112)** All of my resources have been deployed, and this deployment will get its own IP address.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=116)** If we connect to this, we can see mssql-ad-0 as our host name.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=122)** This is why I was using a StatefulSet.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=125)** In StatefulSets, rather than having these dynamic IDs that we've seen with the deployment, we get predictable port names, which makes our DNS settings much easier.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=133)** There are pros and cons to StatefulSets and deployment, and again, I'm not going to dive into this rabbit hole because this is entirely out of scope for this course.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=141)** Just like we did in Docker, we'll need a new keytab file, and that file again needs to be created on a machine that is AD integrated.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=148)** I (indistinct) into my [[SQL]] [[Linux]] host.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=151)** I remove my old keytab file.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=153)** Make sure again that I still have a valid Kerberos session.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=158)** I create an SPN for mssql-ad-0, so the name of my port, .demo.local, using 1433 port in this case, because we're exposing this for the local (indistinct), and then again, creating my keytab.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=170)** If we take a look at that keytab, we can see that includes all the information that we need so we can disconnect from our Linux machine.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=178)** I can again copy that keytab to my local machine and from there to my pod.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=184)** Again, of course, DNS is key, so I store that IP address in the clipboard again, take a look at my service, and then connect to my domain controller again to make a DNS setting for mssql-ad-0.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=201)** I'm providing the IP address, and again, create an associated PTR record.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=206)** I can disconnect from my domain controller again and can then restart my pod, which I can simply do by deleting it.
>
> **[3:34](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=214)** By deleting a pod, a new pod with the same config automatically gets created.
>
> **[3:39](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=219)** That will also make sure that this new pod actually picks up on the keytab file that I copied on there of earlier.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=225)** I can then authorize my [[Windows]] user and connect using SQL authentication.
>
> **[3:50](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=230)** Just like we did on Docker, I could also have created a logger.ini file, and copied it to the pod for debugging if needed.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=237)** However, whenever there's something going wrong with Kerberos, the first thing you should check are your DNS settings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2), [[SQL]] (2), [[Linux]] (2), [[Microsoft SQL Server|Sql server]] (1), [[Windows]] (1)
> **Env Vars:** dns (5), sql (3), spn (1), ptr (1)
> **CLI Commands:** docker (4), make (3)
> **Analogies:** just like (4)
> **File Paths:** logger.ini (1)
> **Speakers:** - [instructor] (1)

#### [Azure Arc-enabled data services](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/azure-arc-enabled-data-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/azure-arc-enabled-data-services?u=76281980&t=0)** - [Instructor] While it's not technically [[Microsoft SQL Server|SQL server]], there's one more offering of [[SQL]] and [[Kubernetes]] that I would like to briefly mention, and that is [[Microsoft Azure|Azure]] Arc-enabled SQL managed instance, which is basically a way to deploy a SQL-managed instance on your own infrastructure through Kubernetes, and it is part of Azure Arc-enabled data services.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/azure-arc-enabled-data-services?u=76281980&t=18)** All you need to do is provide your instance's parameters and settings, one of the deployment tools, which can be the Azure [[CLI]], Kubectl, or visual tools like Azure Data Studio or even the Azure Portal.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/azure-arc-enabled-data-services?u=76281980&t=29)** A simple command like az sql mi-arc create, of course, in addition to the afore mentioned parameters, will result in the deployment of a managed instance.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/azure-arc-enabled-data-services?u=76281980&t=39)** And a managed instance is nothing else than a pod and a few persistent volume claims.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/azure-arc-enabled-data-services?u=76281980&t=45)** You just don't have to manually provision them because Arc will do this for you.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/azure-arc-enabled-data-services?u=76281980&t=49)** It could even be a group of pods that will automatically form a highly available AG.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/azure-arc-enabled-data-services?u=76281980&t=55)** Besides this very simple deployment, the benefits of an Arc-managed instance would be evergreen versions, just like in the cloud, automated backups and managed point in time restores, a pay-as-you-go model, and automated high availability.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/azure-arc-enabled-data-services?u=76281980&t=68)** I could talk for hours about Arc, Arc-enabled data services and Arc-enabled managed instance alone, but that is not our topic for today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[SQL]] (4), [[Kubernetes]] (2), [[Microsoft SQL Server|Sql server]] (1), [[CLI]] (1)
> **Env Vars:** sql (4), cli (1)
> **CLI Commands:** kubectl (1), az (1)
> **Tools:** azure portal (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Summary](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/summary?u=76281980&t=0)** - [Instructor] Let us take a few moments to summarize all this.
>
> **[0:03](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/summary?u=76281980&t=3)** Based on a platform abstraction layer, SQLPAL, [[Microsoft]] was able to ship [[Microsoft SQL Server|SQL Server]] as an identical application on [[Linux]] as it does on [[Windows]].
>
> **[0:11](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/summary?u=76281980&t=11)** SQL Server on Linux is available as a standalone application that can be deployed in a variety of distributions, but also in containers, which can then be deployed standalone.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/summary?u=76281980&t=20)** for example, for Docker or an orchestrated way, for example, on [[Kubernetes]].
>
> **[0:25](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/summary?u=76281980&t=25)** All of these deployments methods provided the same flexibility and configuration options that you may already be using on Windows today, from a variety of storage options or features like the SQL Server Agent or [[Active Directory]] integration.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/summary?u=76281980&t=38)** In addition to self-managed containers, you can also deploy full grown solutions like [[Microsoft Azure|Azure]] Arc [[SQL]] Managed instance.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/summary?u=76281980&t=44)** The fact that especially containers can be deployed within seconds makes them perfect candidates to be included in your CI/CD or [[DevOps]] pipelines.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/summary?u=76281980&t=52)** I hope this course was useful to you and I was able to show you both the power but also the simplicity behind SQL Server and Linux or container-based deployments.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/summary?u=76281980&t=61)** If you have any more questions or feedback please reach out to me here on [[LinkedIn]].
>
> **[1:04](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/summary?u=76281980&t=64)** I'd be more than happy to hear from you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (4), [[Linux]] (3), [[Windows]] (2), [[Microsoft]] (1), [[Kubernetes]] (1)
> **Env Vars:** sql (5), sqlpal (1)
> **CLI Commands:** docker (1), cd (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Ben Weissman]]

## Resources

- Exercise files available

## Skills Covered

- Service Deployment
- SQL
- Microsoft SQL Server

## Path Context

### In [[Advance Your MS SQL Server Skills]]
← [[SQL Server 2022 Administration]] | **7 of 9** | [[SQL Server Integration Services]] →

## Appears In

- [[Advance Your MS SQL Server Skills]]

## Related Courses

_Courses sharing skills:_

- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL, Microsoft SQL Server
- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)