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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/sql-server-on-linux-containers-and-kubernetes?u=76281980&t=0)** - [Instructor] You can run [[Microsoft SQL Server|SQL Server]] on so many things other than [[Windows]]. So this course will teach you how to run SQL Server on [[Linux]], in containers and in [[Kubernetes]], or in other words, we will talk about all the ways to run SQL Server on anything but Windows. Join me on a trip that I hope will be a good mix of hands-on demos and theory to explore how running [[SQL]] servers on platforms such as Kubernetes can be both lightweight to speed up your development processes, as well as enterprise and production ready.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=0)** - [Instructor] Let us talk about the required demo environment for a minute. What you really need for this course is a single [[Linux]] machine with eight gigabyte of RAM and four cores. My setup, however, is a bit more complex. To start with, I'm using six Linux servers, one dedicated box to run [[Microsoft SQL Server|SQL Server]] Linux, one run SQL server on containers, and four machines from a [[Kubernetes]] environment, including a dedicated NFS server for storage. All my Linux boxes have the NFS client tools installed, while the NFS server, of course, also has the NFS server activated. These machines have between four and 32 gigabytes of RAM and four to eight cores each. Again, this is far beyond the minimum requirement, so don't worry if you can't replicate this entire setup. I have picked [[Ubuntu]] 20.04 as my Linux distribution and version, and we will talk in more depth in the next module which Linux version you can and can't use to run SQL Server. In addition to my Linux machine, I'm also running two [[Windows]] boxes. One of them is my D Domain controller running [[Windows Server]] 2022, and the other one is a [[Windows 10]] client, which I'm using as my main client. Almost all client tools are cross platform though, so you could also run everything from a single Linux box again. I assigned four cores to both Windows boxes with the client getting 15 gigs of RAM and the domain controller four. If you're wondering why the client needs 16 gigs of RAM, because we actually also use it as a server in one of our modules. As the name suggests, these boxes serve a purpose. The domain controller machine is my domain controller and also running the DNS and [[DHCP]] service. In my Windows client,
>
> **[1:34](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/demo-environment-and-prerequisites?u=76281980&t=94)** I started with installing Choco as a package manager. I then used Choco to install VS code and the [[Powershell]] extension, which is where we're running all my demos from. For connectivity, I also installed the OpenSSH client as well as curl and grep. Last but not least, I also added the SQL Server Client Tools Management Studio, [[Microsoft Azure|Azure]] Data Studio, as well as a new SQLCMD, so we can connect to our SQL Server instances on Linux from this Windows client. I will not get into the details of how to deploy and install Linux, NFS storage, or a domain controller. That will be very much out of scope for this course. However, I have provided you the script to deploy all the required client tools on the Windows client in case you want to start with a fresh machine for this one.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=0)** - [Instructor] Let us start with a very brief intro on how [[Microsoft SQL Server|SQL Server]] can even run on [[Linux]] given that it's a native [[Windows]] application, not some cross-platform [[Python (Programming Language)|Python]] code or something that comes with out-of-the-box portability. On Linux SQL Server runs as an isolated process, and it is using the regular Windows calls, more than 1200 of them as it does on Windows, but instead of a full Windows operating system, which we don't have on Linux, those calls are handled by a platform abstraction layer, SQLPAL. I won't be going into much details on how SQLPAL works, but if you care for those, check out the link below. SQLPAL basically allows you to run the Windows application, in this case, specifically SQL Server on Linux. SQLPAL will then talk to the Linux host through a host extension, and from there it talks to the Linux operating system. This is the super important part because this means when comparing SQL Server on Linux and SQL Server on Windows, they are the exact same application. It's not two different teams trying to keep up with each other's developments. It is the same code base. Before you install SQL Server Linux we must be aware that there's not one single Linux. There are a ton of distributions out there. So your first question must therefore be, which distributions are supported. And as of today, the answer is, SUSE Linux Enterprise Server, Red Hat Enterprise Linux, and [[Ubuntu]]. But that doesn't mean you can install SQL Server on any Ubuntu for example, let alone install it and be in a supported scenario. Right now, for example, Ubuntu 2204 is the latest release of Ubuntu, but Ubuntu 2004 is the latest release
>
> **[1:35](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/how-to-run-sql-server-on-linux?u=76281980&t=95)** that is officially supported by [[Microsoft]] for SQL Server. Next, you have to think about your edition. Do you need Enterprise Edition the Standard Edition et cetera? While the editions are the same as when running SQL Server on Windows, there are again, some restrictions when it comes to some features and services. While the core database engine is identical between Windows and Linux, analysis services, for example, are not supported to run on Linux. And then of course you have all your other considerations, how to distribute your log files, [[Databases]], temp DB etc. How to monitor your SQL server, do you want [[Active Directory]] authentication, which requires a few extra steps on Linux rather than just clicking a checkbox as on Windows, et cetera.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=0)** - [Instructor] After these fundamental and basic considerations, it is time for an actual installation. And that starts with a question, which version of [[Microsoft SQL Server|SQL Server]] do you want to install? [[Microsoft]] is providing a central repository with all the installation files and of course this repo doesn't exclusively host SQL Server files, but also a bunch of other tools and [[Microsoft Products|products]]. There isn't just one single SQL Server to download, but they're filed for SQL Server 2017, which was the first SQL Server to support [[Linux]], up to SQL Server 2022. And each of those versions has multiple versions to download from the original release up to all the cumulative updates. To make life a bit easier, the newest release will always be flagged as latest, so you can install the most recent CU without needing to know exactly which one that is. Okay, let's assume you are planning to install the latest CU of SQL Server 2019 on your Linux server. The installation itself will run through a package manager and which one that is will depend on the Linux distribution you opted for. To work with an external repository, your package manager should be able to validate the downloaded contents for which purpose you start by downloading the Repository's public key. To make sure the package manager knows where to retrieve the required files, we also add a link to that repository, which would in our case, specifically be the SQL Server 2019 repo. With the key and the link to the repo, we can then tell the package manager to install SQL Server, which will trigger the required downloads followed by validation and the actual installation. The last step is then to configure SQL Server,
>
> **[1:34](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=94)** which is probably a bit confusing at first. When installing SQL Server on [[Windows]], you provide the addition, the features, the password, et cetera, to be used in the visit before anything will be installed. On Linux, that entire process is inverted. Let's take a look at that in a demo. And as you can see, I'm running this as I will before pretty much all my demos in this course from VS Code. First, I will secure shell into my [[SQL]] and Linux server and again, if you are unable to entirely replicate my setup, my host names, et cetera, you may have to adjust for that a little bit. My first step there is then, to add the key to the Microsoft repo so we can validate contents downloaded from there. And next I will then add the [[Microsoft SQL Server]] 2022 Repository 40122004. So again, if you're using a slightly different distribution or version or you're looking for a different version of SQL Server, adjust that link accordingly. To make sure my package manager actually knows where to find SQL Server I will update its local cache and once that is done, I can run the command apt install mssql-server where I'm also adding the -y switch, which will just stop the package manager from prompting me for using additional disk space, et cetera. This will download SQL Server and it'll install SQL Server. So depending on your internet speed, machine size, et cetera, this will usually take roughly between one and two minutes. SQL Server is now installed, but we're not done yet because we still have to configure it. So let's get a little bit more space here and run the command mssql-conf setup. This will first ask me for my addition, so I can pick evaluation, developer, web, standard, all the additions available for SQL Server
>
> **[3:09](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-sql-server-on-linux?u=76281980&t=189)** and I will go with option number one Evaluation Edition. I will then be prompted to accept the license agreement and this will only happen the first time. So if you install a SQL Server on that same box again or a different instance or a different version of SQL Server on that box, again, you will not be prompted for this. And last but not least, you will also be asked for a password. I confirm my password and SQL Server is getting configured. SQL Server has now been installed with the standard settings. However, I could also add additional options, for example, add a Traceflag using mssql conf. To get that into effect, I would need to restart my SQL Server. And SQL Server would now be running with my Traceflag 3205 as I've been providing it on the previous command. I could also add additional features like the SQL Server agent and again, any changes like this need a restart of the service. So by simply running these two commands, I have now enabled my SQL Server agent on that instance. Since this is Linux, we can use journalctl to access the application log files. So journalctl will effectively give me access to the SQL Server logs.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=0)** - [Instructor] When it comes to accessing a [[Microsoft SQL Server|SQL Server]] running on [[Linux]], you should remember that SQL Server on Linux is SQL Server on [[Windows]] at its core. So same considerations and restrictions apply. How do you authenticate? Is there a local firewall on your client or the server or even a corporate firewall in between? Which tools do you want to use? Because just as an accessing SQL Server running on Windows, you can use the mssql-[[CLI]], sqlcmd, or [[Microsoft Azure|Azure]] Data Studio, and all of those even run on Linux, so there isn't even the need for a Windows client. But of course, you can also use Management Studio, for example, which does not run on Linux, but of course can access any SQL Server running on Linux. Let's first access our SQL Server on Linux from the Linux box directly. I will secure share into my box again and add the [[Microsoft]] [[SQL]] tools to my repo. I'll update my package manager's cache, and I can then install the mssql tools through my package manager. To make sure I can use them without having to provide the install location, I will also add them to my path. And my tools have now been installed. I can now connect to my server by simply providing username, password, and a query. I can do the same thing, but providing the actual host name instead of local host. However, I can also do that from my Windows box, so I will just provide my password, username, server name again, and I can run that query right here from sqlcmd on my Windows box. Or of course, I could use different tools like SSMS, for example. In SSMS, I will simply provide my server name,
>
> **[1:34](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/accessing-a-sql-server-on-linux?u=76281980&t=94)** "sqlonlinux", change to SQL authentication, provide my username and password, and can connect to it. (computer pings) What you will notice right next to the server name is the little text, which is showing me that I'm running SQL Server on Linux.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=0)** - [Instructor] Using only basic [[SQL]] authentication is not sufficient for most production workloads, so let's integrate our [[Microsoft SQL Server|SQL Server]] [[Linux]] into the [[Active Directory]]. This requires some Kerberos files and configurations, and I will not go into all the details on how Kerberos works. However, you can find more information, especially in the context of Linux, on the link below. One thing that is super important to understand with Kerberos authentication is DNS is key, so make sure that both your fully qualified host name, but also reverse lookup for that IP address work and match. Let me log into [[MySQL]] Linux box again. To get started with our ID integration, we first need to install a couple of extra tools. I add those tools to my package managers, refresh the cache, and install all the required tools for Kerberos, Active Directory, client utilities, et cetera. During this installation, I'm also being prompted for my default realm of my Kerberos installation. I'm using my DEMO.LOCAL domain. Make sure to use all uppercases for that. All uppercase is very important. Otherwise, Kerberos will not properly resolve this context. With our tools installed, we can now join our server to the Active Directory domain. What I'm doing here is I'm echoing my password into the commands. I'm not getting prompted for it. Of course, do not try to do this in production. Also, this is one of the first parts where a mismatch in your DNS configuration would lead to an error. My server is now part of my Active Directory, so I can initial as my Kerberos session and check for that Kerberos session
>
> **[1:32](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-linux-with-active-directory?u=76281980&t=92)** using the command klist, which lists all my Kerberos tickets, my currently created, and lastly, created ticket is showing, including its valid starting and expiration date. Let's also create a service account that we can then use within our AD for all of our instances. This service account also needs an SPN. That SPN is pointing to my fully qualified host name, sqlonlinux.demo.local, and also my port. If you change the port of your SQL Server, you will need to change that SPN or create another SPN as well. For SQL Server to be able to authenticate using Active Directory, it also needs a keytab file. This keytab file will again include the pointer to our host name as well as to our service account. I'm also adding a bunch of different encryption [[Algorithms]] here. Those usable for you may depend on your local AD settings. I will then take that file, move it to the secrets folder of SQL Server, and make it accessible by SQL Server and set the appropriate permissions. Our last step is to tell SQL Server to use that file and provide our service account as a privileged AD user. If I now restart my SQL Server, my SQL Server is now AD integrated. I can now use my SQL login to also authorize my Active Directory user. This will then allow me to connect to my SQL Server Linux using [[Windows]] authentication, which is also revealed by looking at the current username logged into the server.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=0)** - [Instructor] Let us think a few years, or maybe even better, decades back. When you needed a new [[Microsoft SQL Server|SQL server]] or basically any application, you needed a new dedicated bare metal server, so network, CPU, memory, storage, all the components that make a physical machine with its own dedicated operating system and the design application running on it. Then CPUs and memory got faster and faster, so it didn't make sense anymore to have a ton of servers that all didn't get properly utilized, but you still wanted to separate your applications and duties. This is how we got to virtualization, so basically computers, virtual computers, running on a physical server through a so-called hypervisor. With that is saving a lot of physical resources, every single virtual machine comes with a lot of redundancy. You have an independent installation of an operating system within each VM. That also means we're using three times the disk space here. And of course, we also need to maintain all our [[SQL]] servers individually. And while some of those tasks can be automated, they still need to be done, and they're containers. Containers are based on images, like an ISO image that you can download from a website. And they only run in memory, so if you want to run an image like SQL server once or three times, you only need one image on your disk. If you want the new version of SQL server, you download the new image and update the container or all of them. A container also doesn't have an operating system. It shares the operating system of the host. That also means a [[Windows]] container can only run on a Windows host and the [[Linux]] container can only run on a Linux host,
>
> **[1:35](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=95)** and the same applies to the entire infrastructure with maybe the exception of storage, because while the container itself only lives in memory and is therefore ephemeral, containers of course support persisted storage, but we'll talk more about that a bit later. It is actually fairly easy to define your own container images. You'd usually define a base image, which can just be an operating system that you run on later, or another image that already has applications installed, and you can then, for example, copy your own application to the container, compile it, and execute other commands. As mentioned, the role of the hypervisor with containers kind of gets taken over by the container runtime, and there are quite a few different offerings out there. The standard in [[Kubernetes]] right now, for example, is containerd. For our standalone container module now though, we'll be using Docker. However, whichever of these runtimes you pick, while their syntax may differ, the general concept applies to all of them. Let's first install Docker on Linux. This is super easy. I secure into [[MySQL]] on Docker server this time and then install Docker through my package manager. We can verify Docker has been installed, and that's all it takes. On Windows, this requires a bit more steps, and we have multiple options. Before installing Docker, we need to have Hyper-V, or the WSL 2, the Windows Subsystem for Linux installed. I will install the Windows Subsystem for Linux and set version 2 as the default. If you prefer Hyper-V or already have it installed,
>
> **[3:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/container-fundamentals-and-docker-installation?u=76281980&t=187)** you can use that too, but it has more overhead and is less performant. Either way, you have to make sure that the machine you're running this on is supporting virtualization, either in the BIOS if this is a physical machine, or in the settings of the hypervisor if this is a virtual machine. To install Docker, we could go to the Docker website manually, download it, and install it through the MSI. But since we have Chocolatey on our box, we can simply run choco install docker-desktop. Similar to the package manager in Linux, this will now take care of all the prerequisites and dependencies. While this is installing, you may remember when I mentioned that Linux containers can only run on Linux and Windows containers can only run on Windows. What Docker here is actually doing is, it is either using a virtual machine running Linux or the Windows subsystem for Linux to actually run Linux containers so Docker is using Linux on Windows. This allows us to use Linux containers on Windows, but this additional layer, of course, comes with an additional overhead. Once that is done, I will also add some extensions to my Visual Studio Code installation to make it easier to work with Docker containers. Docker has been installed, and all that's left to do is a machine reboot. Our installation on both Linux and Windows is now done.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=0)** - [Instructor] Deploying a [[Microsoft SQL Server|SQL Server]] on containers is very similar to self-managed deployment on [[Linux]]. You start by picking a version of SQL Server, however this time, it comes from a container registry, which is also nothing else than a web-based repository. The container registry will again offer you all the available versions and CUs of SQL Server with the latest CU of each SQL Server major release being tagged as Latest. In theory, for example, in disconnected scenarios, you can also run your own container registry and cache the [[Microsoft]] images there, but we'll stick to using the public registry. An optional step will be to pre-pull or download the required containers. When running a container, the first thing the container runtime will do is check if the image already exists or not, and if not, it'll download it. But what if you have connectivity issues at some point? By pre-pulling, you're simply ensure that the container's already present. The last step is then to simply run the container, which means spinning up an instance of this image to memory. Your run command will also include all the required infos like parameters such as passwords, trace flags, or features, as well as persistent storage, ports, and other settings. Since we installed Docker on both, a Linux and our [[Windows]] machine, we could current containers from either one. Let's start on Linux so I will secure shell into my machine and pull the latest SQL Server 2022 image. As mentioned before, if I did not pre-pull it, Docker will simply pull it once the first container using that image is being started. I can then run SQL Server using the command docker run
>
> **[1:35](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=95)** where I'm passing the environment variable to accept the license agreement, my SA password, but I'm also mapping my local port 3133 to the local Port 1433, the SQL Server default port, and I'm also providing a name for the container as well as for the host that the container is running in. If I run docker ps, I will see my SQL Server 2022 container, which has been up for a couple of seconds. However, while this container is running in that Linux machine, I also expose it for a TCP port, so if I disconnect from a Linux machine, I can go back to my Windows machine and access it from there. Of course, I could also use my local Windows installation using the exact same command or I can slightly change it and use SQL Server 2019 instead. Since this time, I did not pre-pull the image, it'll be pulled first so while the docker run command took only a few seconds on Linux, it takes a bit longer here on the first run. I now have a second docker container running, this time on my Windows box that I can also connect to using my local IP address. If I want to run a SQL Server 2022 instead of SQL Server 2019, I use the original command again pointing to the SQL Server 2022 image, and also using a different port and name. Again, the image will be pulled, and once that is done, within a matter of seconds, we have two [[SQL]] Servers running on Windows as well as another one on Linux. Both of my containers are showing up, and my SQL Server 2022 is also accessible. As you can see, sometimes this takes a couple of tries in the beginning because the container has been created
>
> **[3:09](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-using-docker?u=76281980&t=189)** but SQL Server is still finalizing its initial install. Another super easy way to deploy a new SQL container is the new SQLCMD. We can use it to create a new instance, including an already attached database. We can also immediately connect to it as SQLCMD has a built-in connection management so no need to provide a username or password for that. By the way, this is also the reason why I've assigned 60 gigs of memory to this box since we are now running multiple SQL Server instances on it.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=0)** - [Instructor] Let's see how we can actually work with our container instances. And for that purpose, we create a database called TestDB in one of them. If I check this [[Databases]], my TestDB is also showing up. However, if I stop and delete that container and then simply create a new container using the exact same command, including the same host name, same image, same password, et cetera, TestDB will be gone once I look at that container again. Let us create another container using a different port, using the same image, but this time, we're actually adding a volume to it called [[SQL]] Data 2. I can create a test database there again, and if I check for that file, in that volume, in that container, it is also showing up. I can now go ahead again and stop and delete this container, but the volume is still there because the volume was created as a persistent volume. So if I now create a new container, again using the same command, pointing to the same volume, using the same path, a new container will be created. That container will be using the same volume, and if I check our databases, again, TestDB will show up. We can also pass in additional parameters using the -E or the -N switch for environment. In this case, for example, I'm changing my edition to the evaluation edition, but I'm also activating the MSSQL agent. In addition to that, I have also provided a trace flag using the -T switch. So I'm using -T3205, which is coming right after the [[Microsoft SQL Server|SQL server]] executable itself.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-a-sql-server-using-docker?u=76281980&t=96)** If I check the version of that container, it is showing as an evaluation edition, and if I check the trace status, it will show me the 3205 trace flag that we've just enabled. If I connected at instance, for example using SSMS, I can connect to that endpoint using my SA user and my password, and I will see that [[MySQL]] Server agent is running, and also again, the little penguin or Task because this container is running on [[Linux]].

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=0)** - [Instructor] We can also AD integrate a [[Microsoft SQL Server|SQL server]] running a container, and for that, the host doesn't even need to be integrated into our [[Active Directory]]. You just need any [[Linux]] machine that is part of your AD. I will therefore go back to my [[SQL]] Linux machine first, which is AD integrated from our last module. I'm making sure I still have an active cab session. And then I create an SPN for a machine called DockerAD.Demo.Local using the port 32433. I'm then using the exact same logic and commands that I've used before to create my key type file for SQL and Linux and I'm creating one for my Docker ad machine also, again, including the SQL service. When it comes to AD integration, DNS is always key. So what I will do next is I will grab the IP address of my Docker SQL on Docker host and then connect to my domain controller, which is also my DNS server and create a DNS entry there. I'm adding a new host called Docker AD just as I've named it in my SPN and provide the IP address and also create an associated PTR record. My DNS record has been successfully created and I can disconnect again from my DNS server. I can then copy my SQL tab file from the Linux machine and copy it to my SQL on Docker server. I can then log into my SQL on Docker machine and I'm going to create a couple of files here first, a config file for my SQL server. That config file will contain a pointed to my key tab file as well as the pointed to the privileged AD account, my SQL SVC account that I've previously created. I will also need to create a Kerberos config file,
>
> **[1:36](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=96)** which will point to my realm, demo.local, including the pointer to the domain controller, default domain, et cetera. The important part here is, again, most of that is case sensitive, especially the domain name, so make sure, especially the O is or using all upper cases. While that last one is not necessary, I always like also creating a logger.ini file, which will create some additional output in case something goes wrong with Mac's authentication. Since these files need to be in the container when it starts, rather than have Docker create a volume for me, I will create the contents of that volume in advance. So I'm creating a few directory, /container, /container/Dockerad, and /container/Dockerad/secrets. I will move my previously created files in there. I will make sure these files are accessible and then create a user named MSSQL and make it the owner of these files. I will then run against SQL server in a container. However, there's a couple of important things here. First of all, I'm mounting my Kerberos config file into /etc/krb5.conf, so I'm actually mapping an existing file in my volume to a different location. The name of our containers also super important as well as the port because that's what we've defined in our SPN. And since my host is not AD integrated, I'm also providing the IP addresses and name service of my DNS of my active directory. I now run this command. Since our previous installation was using SQL Server 2022, it'll pull the image first,
>
> **[3:10](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-containers-with-active-directory?u=76281980&t=190)** and once the container's up and running, I can connect to this machine using SQL authentication and then authorize the user. If you run into any issues with the AD integration, this is the file that you are going to be looking at, /container/dockerad/log/securitylog. However, everything here seems fine, so we disconnect from our SQL machine, connect using SQL Auth, authorize our [[Windows]] user, and we can now use AD integration in our container running on Docker. Over the last few demos, we've deployed a few in SQL instances, one of them being even integrated into the active directory, so as easy as that, I could now remove and redeploy this container and therefore start with a fresh environment from my developments without losing enterprise features like AD integration.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=0)** - [Instructor] As nice as containers are, they are hard to manage on their own, especially for enterprise environments. This issue can be solved through container orchestration and [[Kubernetes]] is exactly that, a container orchestrator. It starts by forming pods, which is simply a group of containers that belong together. Of course, a pod can also just consist of a single container. These pods are then scheduled and distributed across servers or nodes, and at least one of them is your control plane, you might have more, for HR requirements, and its only job is to manage the load across the other nodes, the worker nodes. It'll usually not run any workloads itself, except for some system containers. These nodes form your cluster, and in addition, you'll usually provide some external storage to persist your data and make your pods accessible through persistent endpoints, so-called services. To make sure the pods can communicate with each other, Kubernetes requires its own network or networking plugin, so every pod will have an IP address, et cetera. Your pods can be organized in namespaces, kind of like a named instance of a [[Microsoft SQL Server|SQL Server]]. And namespaces can also be distributed across multiple nodes while a pod can't. To manage your cluster, you would usually use a tool called kubectl, and kubectl supports both imperative commands where directly define the command what you want to happen, as well as declarative commands, where you'll pass a [[JSON]] or YAML file to the [[CLI]]. This way is preferred in most cases, as it allows you to easily reuse your code and commands to replicate the same results. You can, of course, also use kubectl
>
> **[1:34](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=94)** to manage multiple clusters. You just point it to the desired endpoint, making this your current context. Let's talk a bit more about persistent storage in Kubernetes. Of course, you need your physical storage, which can be addressed through NFS, local storage, iSCSI, cloud-based storage, and a lot more. Your physical storage is represented in Kubernetes through objects called persistent volume. They point to the physical storage, including information like the size of a specific volumes and settings like whether multiple pods can access the data simultaneously, like for a web server or if each volume is exclusive to a pod at a time, which is what we want for SQL Server, for example. On top of your persistent volumes, you have persistent volumes claims, which kind of act like a bridge between your pod, so your pod will reference a PVC and your storage, so the PVC will reference a volume. All of this can either be deployed manually through a YAML file, or dynamically through a storage class, the class of reference and automated provisioner, which can then provision the actual storage, like a folder on an NFS share, for example, as well as the corresponding Kubernetes volumes and claims. The last thing I want to touch on real quick is how Kubernetes handles resources, such as CPU and memory assignments to workloads. For each of your pods and workloads, you can define a resource request and a resource limit. The request is the minimum amount required by this pod. If there is no node that can provide the requested amount of resources, the pod won't start up. Let's say our pod has a request of five gigabytes of memory.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/kubernetes-fundamentals?u=76281980&t=187)** This means it can only be scheduled on a node that has at least five gigabyte available. In addition, we can define the limit. If we set this to seven gigabytes, for example, this is the maximum amount of memory that Kubernetes would grant this pod. However, this amount isn't guaranteed. If no node can provide this, the pod may get less memory. This also works for CPU of course. One thing they need to consider though is that any application-specific settings still apply. In the case of SQL Server, for example, you can provide the server max memory setting, which will tell SQL Server how much memory it should consume. If you set this, for example, to four gigabytes and the pod request is five gigabytes, the pod will be allocated five gigabytes, but SQL Server will only use four of them.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=0)** - [Instructor] Before you can deploy a [[Microsoft SQL Server|SQL Server]] in a [[Kubernetes]] cluster, you need a Kubernetes cluster. And just like there are many different container runtimes and [[Linux]] distributions, there are many different Kubernetes distributions from which you'll have to choose from. Another very important question, where are you going to deploy this, on-premises or in a cloud? And if you're opt for a cloud, you can pick a managed or a self-hosted approach. The general concept of a self-managed installation is always the same. For kubeadm, for example, you install the kubelet, kubeadm, kubectl and a container runtime. And that container runtime will be containerd by default, but you could change that. You'll then go ahead and install these tools on all the nodes that you want to be part of your cluster. So if you need at least one control plane, you can then run kubeadm init on the first server, which will make this server your control plane of your cluster. While you could run Kubernetes on a single machine, you'd usually have additional servers to form your cluster, but rather than running kubeadm init, which would create another cluster, you run kubeadm join, which will make this server a worker node within your cluster. You then repeat that step on all the servers that you want to include in your cluster. You then install a Kubernetes networking plugin as well as the desired storage providers and classes. When deploying a managed cluster in a cloud, the process will again differ in its details from provider to provider, but they usually all offer a [[CLI]] as well as a web portal-driven approach to deploy resources. Using either of those, you will then deploy a cluster where you typically provide the number of desired worker nodes, location, et cetera. The deployment will also usually automatically provide
>
> **[1:32](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=92)** the required storage and networking capabilities. What you will notice in many of these offerings is that the control planes aren't visible. They are still there though, as you still need someone to distribute loads, et cetera, they're just abstracted away. To be able to manage my Kubernetes cluster from this [[Windows]] box, I will first install the Kubernetes CLI using Chocolatey. For the Kubernetes basic, so kubeadm, the kubelet, containerd, et cetera, I have prepared a bash script that will perform all these tasks for me. It will install some prerequisites that should already be installed, but just to be sure, it will disable swap, which is also key with Kubernetes and will then install containerd as well as the kubelet, kubeadm and kubectl. It will also prepare a couple of other required settings for IP tables and IP configurations. This is just much easier to have it all in one script rather than run all these steps manually in each of our machines. To be able to run this from a machine rather than to manually copy it over, I wrote a little function. So this little function basically takes one file, copies it to the Linux box and runs it there. Let's run this script on our control plane, and while this is running, you see there's a lot going on, which probably explains why I've put it in a single script rather than go through it step by step, especially since we have to do this on all our workers as well. With the correctors in place, I can [[SQL]] Shell into my control plane and run kubeadm in it. To do so, I will first need to check which version got downloaded and installed, because I was not specifying a specific version. So I'm running kubeadm version, which will tell me that I'm running 127.3, perfect.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=187)** That matches with my script, so I can initialize my cluster using kubeadm init. For my kubeadm init, I'm providing two parameters, the Kubernetes version that we've already seen, but also the CIDR range for the pod network. These are the IP addresses that my ports will use to communicate with each other. Make sure that this range does not clash with any other IPs that your pods may need to reach from within your production network. Similar to running containers, this is actually the point where Kubernetes or a kubeadm is pulling all its images. So again, we could have pre-pulled those to save a little time on the kubeadm init pod. My control plane is now ready and it's also giving me the command to join additional nodes to my cluster. However, we'll start by creating or by retrieving the config for this cluster. I'll make a local directory.kube in my home directory and copy the admin config from the ATC folder to this directory. I also made myself the owner, and I can now use kubectl to talk to my cluster. It is only showing my control plane and it is showing it's not ready, because we have not deployed any storage or networking. But that's okay, we're going to do that in one sec. On my Windows machine, I can also create a directory called .kube in my home directory and then copy the config file from the Linux machine to that directory. I can now access that Kubernetes cluster from my Windows box as well, which should show you how powerful but also dangerous this file can be, so make sure to protect it from unauthorized access. I will not get into all the details around storage, et cetera. Basically what I'm doing here is I'm applying a couple of config files.
>
> **[4:39](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=279)** So I will first apply some roles and role-based access control in the storage class for NFS and then my provisioner for the NFS. Let's take a closer look at the provisioner though. If I'm scrolling down a little bit in that YAML file, this is where the actual configuration sits. This is where I'm telling it that my NFS server is k8s - nfs.demo.local, and also the path on my NFS server. This is where Kubernetes will store all the data that I'm using the NFS storage for. I also applied this and my NFS storage should have been deployed. In addition to that, I will also apply some local storage components so I can also use local disk within my nodes. We will also need some networking. And for this, I will use the flannel plugin with the default settings. As you can see, the source for kubectl command can even be a website. Again, there is way more to that, but this course is not a Kubernetes deep dive. I will also install a load balancer to be able to assign dedicated IPs to my SQL Server. For the load balancer to work, I have to make one change in the Kubernetes based configuration. I have to change the strictARP setting from false to true because this is required for my load balancer to be able to announce its IP addresses. So in that file, I will search for strictARP and change the settings from false to true. By simply closing and saving this file, the configuration will be applied and I can then install metallb again by simply using a file from a web repository. I have also reserved a bunch of dedicated IP addresses.
>
> **[6:17](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=377)** Here, IP address 50 to 60 in my local subnet. However, if I'm trying to apply this, this fails. If I check our nodes, our control plane is showing as ready, but the issue is that it is a control plane, so the control plane cannot run any actual applications and the load balancer would be an application. So what we first need to do is add our workers. On both my workers, I can run the same file again to prepare my prerequisites. If you didn't take note of the joint command to a Kubernetes cluster earlier, no problem, because we can always regenerate it. I will just take that command, save it to a file, and then again run it on both my worker notes. Should you only have a single machine, the alternative to that would be to make your control plane schedulable. You could do that with the commands here that I've commented out. If I now check my node, I can see my control plane as well as both of my workers showing as ready. I could also use the -o=wide switch to get additional information like the IP addresses, OS image, et cetera. Now let's try deploying metallb again. This time it worked. So now we have a load balancer deployed, including an IP pool that has been created and advertised. So far looking at storage, our cluster does not have any persistent volumes. And if S would dynamically create them for us, so we don't have to worry about that. Local storage, however, will pick up the volumes that are part of the nodes. And for that, I have prepared another script. We just create five volumes, or more precisely five folders,
>
> **[7:51](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/installing-kubernetes?u=76281980&t=471)** which will then be mounted on these worker nodes in the \localStorage directory. I will again run this script on both my worker nodes. After running this script on both machines, I'm immediately seeing my 10 more persistent volumes that I could now use to persist data on any Kubernetes application. Just be aware, since this is stored locally, if your node goes down, so does your data. I understand this was a lot in a very short time and without many details I did not explain. However, I wanted to make sure on the one hand that you have a working Kubernetes cluster and at the same time not to lose the scope of this course, which is deploying SQL Server.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=0)** - [Instructor] With your cluster deployed, we can deploy [[Microsoft SQL Server|SQL Server]] to it. While it's not a requirement, it is recommended to separate applications for namespace. In that namespace, you will then start by deploying a persistent volume claim, or even better, a few of them to use different storage for data, logs, backups, et cetera, just as you would on a [[Windows]] installation following best practices. At least for the initial deployment, you will also need to provide a password for that instance. Your storage and the password will be referenced by your deployment. That deployment will usually be defined in a YAML file, which will also include your additional parameters and configurations. The last step is to make your SQL Server accessible from outside your cluster through a service. This service will usually either be of tab NodePort or LoadBalancer. A node port has a fixed TCP port from the 30,000 range and is accessible on every node of your cluster. A load balancer is mostly seen in cloud deployments as it is being represented by a dedicated IP address for this application. [[Kubernetes]] also offers additional service types beyond these two, but those are the most common ones for our use case. As pointed out, having a namespace isn't a requirement, but it is highly recommended. So, I will start with kubectl create namespace mssql, and that namespace just got created for me. I will also change the current context of kubectl to that namespace, so I don't have to provide it every single time around kubectl. Now, when I run a kubectl command, it will always run in the context of the mssql namespace unless otherwise specified.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=92)** So far, it's empty of course. Let's start with a secret for our SA password. So what I'm doing is I'm storing my password in a variable and pass that as a secret to kubectl create secret. Take a look at that secret. What you see is the name of my secret MSSQL_SA_PASSWORD including its data. The data might look encrypted, but it's actually only basically for encoding so I could easily decode it. Therefore, please make sure to change your SA password after the initial deployment. Next, I will define some storage from a SQL server, and I will start with persistent volume claim using local storage. All I'm doing here is I'm defining a persistent volume claim, which I'm calling [[SQL]]-storage. It will use local storage. It is using ReadWriteOnce access mode, which means only one pod can use it at a time, and it's going to have a capacity of 35 gigabytes. I apply this and my pvc shows up. It is showing as pending because of course, so far nobody's using it. So, now it's time to define our SQL server, and I'm defining this as a deployment. I'm calling it mssql-deployment, and there's a bunch of other settings here that we will ignore. The important parts here, again, the pointer to my image, the port that it's running on, as well as the password and the license agreement that are coming from environment variables. The license agreement acceptance is hard coded, while the password is coming from our previously defined secret. In addition to that, I'm mounting a volume called mssql, which will be mounted to the var/opt/mssql path.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/deploying-and-accessing-sql-server-on-kubernetes?u=76281980&t=188)** That volume is defined down here as I pointed to my previously defined persistent volume claim. If I apply this, my pvc is now showing as bound, so it is being used by the deployment, and my SQL server is slowly coming up. It is not showing as ready yet, because we first need to download the image, et cetera. Just like on Docker, I could have manually prepulled that first. When looking at a Kubernetes resource, as you can see I did here, you can always add the -w switch for watch if you want to continuously monitor the status of an object. What you can see here after a couple of seconds, the state of my container changed from container creating, which basically means downloading the image, to running. When I take a look at the logs of this pod, I can see that these are actually the logs of my SQL server. The last thing we have to do is we have to make our instance accessible for a persistent endpoint as a service. When we did that on Docker, we were immediately using and applying that port when we created the container. Here, we're doing that as a separate step. We'll expose this deployment mssql-deployment on the target-port=1433. We now have a service, and that service is accessing the local port 1433 of my mssql-deployment and exposing it on port 32588. I can access this on any node in my cluster, so if I'm, for example, using my case worker one and combined with that external port, I will be getting an endpoint, and that endpoint is the combination of that host name and that IP address. I can now use sqlcmd or any other client tool to access this endpoint.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=0)** - [Instructor] Let us again make use of our [[Microsoft SQL Server|SQL Server]] and start by restoring some data to it. For that purpose, I'm downloading AdventureWorks 2019, which I will then need to copy into my pod. To copy a file into a pod, you'll need the pod's name, and since we're using a deployment, this pod's name will have a bunch of dynamic IDs in it, the ID of the deployment as well as the ID of the pod, and to avoid having to type that, I'm just storing it in a variable again, using kubectl get pods, and then I'm providing a JSONPath to only retrieve the name. My pod variable now only has the name of the pod. Using that, I can use kubectl cp, so kubectl copy, to copy my backup file into my pod. The backup file is not present in the pod, so I can use sqlcmd to restore my database. Taking a look at this [[Databases]], I can also see my AdventureWorks 2019 database has been successfully restored. Right now, we are running SQL Server 2019 CU21. To upgrade this to another version of SQL Server, all you have to do is set the image of the deployment to the new image name. Here, for example, I'm upgrading to the latest image of SQL Server 2022. I can again use kubectl to monitor status of my rollout, so what will happen here is, so we do not have two competing versions of SQL Server accessing our data at the same time, [[Kubernetes]] will first scale down my existing SQL Server 2019, so basically, remove my SQL Server 2019 before it will deploy a new replica set of [[SQL]] 2022. If I look at that replica set, I will also see my old replica set, but that has zero desired already pods.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=93)** My new pod is showing as running, and taking a look at the logs of it, I will see the update logs running or the upgrade logs going from my old SQL Server 2019 to SQL Server 2022. Once all those are done, I will be able to access my SQL Server again, which is now showing as running SQL Server 2022 CU5. I could also have used different storage, like NFS, for example. For that purpose, let's first delete our existing deployment and also our existing PVC. We will then redefine our PVC, and the only difference that we have here is I'm using a different storage class. I'm using NFS storage rather than local storage. If I apply this, I'm getting a new PVC immediately, and this PVC is immediately showing as bound because NFS storage is working slightly different, and it is using the NFS storage class. Since I was using the same name, I can even apply the exact same code as before. Now that has been applied, a new SQL Server container or a new SQL Server pod will be created, up and running, and since we also did not change anything to the name of our deployment, it will be accessible on the same port and endpoint. This new deployment is a SQL Server 2019 again, because previously, we had imperatively changed the image rather than modifying and reapplying the YAML manifest. Advanced settings can go into the YAML manifest as well. Here, for example, I'm adding a trace flag again, I'm also changing my addition again, and I'm enabling my SQL Server agent, just like we did on Docker using environment variables. If I apply this, this will immediately trigger a reconfiguration
>
> **[3:06](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=186)** of my SQL Server. I'm now running an enterprise evaluation edition, and that trace flag that we've just enabled is also showing. If you have more complex scenarios, you can also provide an MSSQL config file, which will typically happen for your config map in Kubernetes. In that config map, I'm defining, I want trace flag 3227 to be active. I'm applying that config map, and my SQL deployment code will now, rather than having a hardcoded trace flag here in the deployment, reference that MSSQL conf. I can again apply this, which will again trigger a reconfiguration of my SQL Server, and once it is back up and running, it is showing the new trace flag, 3227. Keep in mind, whenever you do these changes, this triggers a restart of SQL Server, so you may be experiencing a short or longer outage, depending on the effect of that change. Let's expose this for a load balancer rather than a node port service. I will delete my existing service, which will only delete the endpoint. It is nothing to mess SQL Server itself. SQL Server will keep running, it is just not accessible from the outset again. I will expose it again, but this time, with type load balancer, so I'm not providing the target port, but also the port that I want the load balancer to listen on. If you look at the service, I'm seeing an external IP, which is the first IP address from a MetalLB range that we've defined earlier. I will again store this IP address in a variable, and I'm immediately able to access my SQL Server on that IP address. I could also go ahead and delete the entire namespace, so everything from storage to my deployment
>
> **[4:39](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/working-with-and-maintaining-sql-server-on-kubernetes?u=76281980&t=279)** to my endpoint will be gone. Then I'm simply rerunning my command, so I'm creating my namespace, my secret, my PVC, my config file, as well as my SQL deployment and my service, and if I take a look at what is happening in my namespace, I will see all my resources again. Everything has been deployed again, and of course, I could access my brand-new SQL Server now again as well.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=0)** - [Instructor] To deploy an AD integrated [[Microsoft SQL Server|SQL server]] porting [[Kubernetes]], we will use a config map again, and this will all be in one file. So if we take a look at that file, the first thing you see is I'm deploying this as a StatefulSet rather than a deployment, and you're going to see why in a second. I'm also using a different name for my container, and I'm also using a different name for my secret because I'm using a different secret, even though it's going to be actually the same password. I'm providing a bunch of volume mounts here, so I have different volumes for data, logs, et cetera, allowing me to store my data, my logs, and my config in different parts on my storage. I'm also mounting my mssql.conf again and also my krb5.conf, just like we did in the Docker deployment. Also, just like in the Docker deployment, I'm again providing all my DNS setting, so my name server, which is my domain controller, as well as a bunch of host names to be added. Because my Kubernetes cluster itself is, again, not AD joined. I'm then mounting all of these volumes rather than just using a single volume for everything. In the same file, I'm again defining my load balancer service. I add my persistent volume claim for my data and my log directory, and I'm also providing my config maps. Rather than my trace flag, this now contains a pointer to my keytab file, to my privileged service account, as well as my default file locations. I'm also adding a different config map for my Kerberos configuration. Last but not least, I'm defining my secret, which is my mssql-ad secret. My entire deployment will run out of this single file, and as you maybe noticed,
>
> **[1:33](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=93)** the order of objects in the manifest does not matter at all. Let that sink in for a second. That single file will deploy my endpoint, my storage, my secret, my configuration, and my actual application by simply applying this. I could take this to an entirely different cluster and get the exact same result. All of my resources have been deployed, and this deployment will get its own IP address. If we connect to this, we can see mssql-ad-0 as our host name. This is why I was using a StatefulSet. In StatefulSets, rather than having these dynamic IDs that we've seen with the deployment, we get predictable port names, which makes our DNS settings much easier. There are pros and cons to StatefulSets and deployment, and again, I'm not going to dive into this rabbit hole because this is entirely out of scope for this course. Just like we did in Docker, we'll need a new keytab file, and that file again needs to be created on a machine that is AD integrated. I (indistinct) into my [[SQL]] [[Linux]] host. I remove my old keytab file. Make sure again that I still have a valid Kerberos session. I create an SPN for mssql-ad-0, so the name of my port, .demo.local, using 1433 port in this case, because we're exposing this for the local (indistinct), and then again, creating my keytab. If we take a look at that keytab, we can see that includes all the information that we need so we can disconnect from our Linux machine. I can again copy that keytab to my local machine and from there to my pod. Again, of course, DNS is key,
>
> **[3:07](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/integrating-sql-server-on-kubernetes-with-active-directory?u=76281980&t=187)** so I store that IP address in the clipboard again, take a look at my service, and then connect to my domain controller again to make a DNS setting for mssql-ad-0. I'm providing the IP address, and again, create an associated PTR record. I can disconnect from my domain controller again and can then restart my pod, which I can simply do by deleting it. By deleting a pod, a new pod with the same config automatically gets created. That will also make sure that this new pod actually picks up on the keytab file that I copied on there of earlier. I can then authorize my [[Windows]] user and connect using SQL authentication. Just like we did on Docker, I could also have created a logger.ini file, and copied it to the pod for debugging if needed. However, whenever there's something going wrong with Kerberos, the first thing you should check are your DNS settings.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/azure-arc-enabled-data-services?u=76281980&t=0)** - [Instructor] While it's not technically [[Microsoft SQL Server|SQL server]], there's one more offering of [[SQL]] and [[Kubernetes]] that I would like to briefly mention, and that is [[Microsoft Azure|Azure]] Arc-enabled SQL managed instance, which is basically a way to deploy a SQL-managed instance on your own infrastructure through Kubernetes, and it is part of Azure Arc-enabled data services. All you need to do is provide your instance's parameters and settings, one of the deployment tools, which can be the Azure [[CLI]], Kubectl, or visual tools like Azure Data Studio or even the Azure Portal. A simple command like az sql mi-arc create, of course, in addition to the afore mentioned parameters, will result in the deployment of a managed instance. And a managed instance is nothing else than a pod and a few persistent volume claims. You just don't have to manually provision them because Arc will do this for you. It could even be a group of pods that will automatically form a highly available AG. Besides this very simple deployment, the benefits of an Arc-managed instance would be evergreen versions, just like in the cloud, automated backups and managed point in time restores, a pay-as-you-go model, and automated high availability. I could talk for hours about Arc, Arc-enabled data services and Arc-enabled managed instance alone, but that is not our topic for today.

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
> **[0:00](https://www.linkedin.com/learning/sql-server-containerization-modern-deployment-strategies-for-data-driven-organizations/summary?u=76281980&t=0)** - [Instructor] Let us take a few moments to summarize all this. Based on a platform abstraction layer, SQLPAL, [[Microsoft]] was able to ship [[Microsoft SQL Server|SQL Server]] as an identical application on [[Linux]] as it does on [[Windows]]. SQL Server on Linux is available as a standalone application that can be deployed in a variety of distributions, but also in containers, which can then be deployed standalone. for example, for Docker or an orchestrated way, for example, on [[Kubernetes]]. All of these deployments methods provided the same flexibility and configuration options that you may already be using on Windows today, from a variety of storage options or features like the SQL Server Agent or [[Active Directory]] integration. In addition to self-managed containers, you can also deploy full grown solutions like [[Microsoft Azure|Azure]] Arc [[SQL]] Managed instance. The fact that especially containers can be deployed within seconds makes them perfect candidates to be included in your CI/CD or [[DevOps]] pipelines. I hope this course was useful to you and I was able to show you both the power but also the simplicity behind SQL Server and Linux or container-based deployments. If you have any more questions or feedback please reach out to me here on [[LinkedIn]]. I'd be more than happy to hear from you.

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