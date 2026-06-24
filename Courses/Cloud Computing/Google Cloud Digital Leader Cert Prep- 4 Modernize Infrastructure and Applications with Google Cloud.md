---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud
url: "https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud"
duration_minutes: 41
duration: 41m
level: Beginner
updated: 3/25/2025
learners: 3954
skills:
  - Legacy Modernization
  - IT Infrastructure Management
  - Google Cloud Platform (GCP)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHLwR3BjjXqWw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711389580529?e=2147483647&amp;v=beta&amp;t=IYySmd42QkFB2-ptpyaB8FXKypT-Hh-j2t6EbF_Ppj8"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Prepare for the Google Cloud Digital Leader Certification](../../Paths/Cloud%20Computing/Learning%20Paths/Prepare%20for%20the%20Google%20Cloud%20Digital%20Leader%20Certification.md)'
prev_courses:
  - '[Google Cloud Digital Cloud Leader Cert Prep- 3 Innovating with Google Cloud Artificial Intelligence](Google%20Cloud%20Digital%20Cloud%20Leader%20Cert%20Prep-%203%20Innovating%20with%20Google%20Cloud%20Artificial%20Intelligence.md)'
next_courses:
  - '[Google Cloud Digital Leader Cert Prep- 5 Trust and Security with Google Cloud](Google%20Cloud%20Digital%20Leader%20Cert%20Prep-%205%20Trust%20and%20Security%20with%20Google%20Cloud.md)'
path_nav: '[{"path":"Prepare for the Google Cloud Digital Leader Certification","position":4,"total":6,"prev":"Google Cloud Digital Cloud Leader Cert Prep- 3 Innovating with Google Cloud Artificial Intelligence","next":"Google Cloud Digital Leader Cert Prep- 5 Trust and Security with Google Cloud"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/legacy-modernization
  - skill/it-infrastructure-management
  - skill/google-cloud-platform-gcp
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Google%20Cloud%20Digital%20Leader%20Cert%20Prep-%204%20Modernize%20Infrastructure%20and%20Applications%20with%20Google%20Cloud.md)

![Google Cloud Digital Leader Cert Prep: 4 Modernize Infrastructure and Applications with Google Cloud](https://media.licdn.com/dms/image/v2/D4E0DAQHLwR3BjjXqWw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711389580529?e=2147483647&amp;v=beta&amp;t=IYySmd42QkFB2-ptpyaB8FXKypT-Hh-j2t6EbF_Ppj8)

# Google Cloud Digital Leader Cert Prep: 4 Modernize Infrastructure and Applications with Google Cloud

> The Google Cloud Digital Leader certification is for anyone who wishes to demonstrate their knowledge of cloud computing basics and how Google Cloud products and services can be used to achieve an organization’s goals. Many traditional enterprises use legacy systems and applications that can't stay up-to-date with modern customer expectations. Business leaders often have to choose between maintain

> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud) | 41m | Beginner | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Course introduction](#course-introduction)
  - [Important cloud migration terms](#important-cloud-migration-terms)
- [**1. Modernizing Infrastructure in the Cloud**](#1-modernizing-infrastructure-in-the-cloud) (6 videos)
  - [Introduction](#introduction)
  - [The benefits of running compute workloads in the cloud](#the-benefits-of-running-compute-workloads-in-the-cloud)
  - [Virtual machines](#virtual-machines)
  - [Containers](#containers)
  - [Managing containers](#managing-containers)
  - [Serverless computing](#serverless-computing)
- [**2. Modernizing Applications in the Cloud**](#2-modernizing-applications-in-the-cloud) (6 videos)
  - [Introduction](#introduction)
  - [The benefits of modern cloud application development](#the-benefits-of-modern-cloud-application-development)
  - [Rehosting legacy applications in the cloud](#rehosting-legacy-applications-in-the-cloud)
  - [Application programming interfaces (API)](#application-programming-interfaces-api)
  - [Apigee API management](#apigee-api-management)
  - [Hybrid and multi-cloud](#hybrid-and-multi-cloud)
- [**Conclusion**](#conclusion) (1 videos)
  - [Course summary](#course-summary)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Course introduction](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/course-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/course-introduction?u=76281980&t=0)** - [narrator[ New Organizations born in the cloud are challenging old business models. Scale is no longer a competitive advantage. It's the norm. But what does this mean for organizations founded before the cloud era? They want to know how to not only survive, but thrive. The answer lies in how organizations structure and use their IT resources, like moving away from investing in their own resources to run and maintain existing IT infrastructure. With the cloud, organizations can shift their focus to creating new higher value [products](../../Skills/Software%20Development/Microsoft%20Products.md) and services. And it's not just about infrastructure. With the cloud, organizations can develop and build new applications to drive better engagement with customers and employees faster, securely, and at scale. Enterprises are also seeing significant financial benefits from adopting the cloud as their approach to IT moves from buying fixed capacity to paying only for what they use. They are changing the economics of technology investment. For many organizations, infrastructure and application modernization are the foundation for [Digital Transformation](../../Skills/Software%20Development/Digital%20Transformation.md). So considering that, let's explore the goals of this course. Modernize infrastructure and applications with [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) was designed to help introduce you to common terminology related to infrastructure and application modernization. Explore options available to run compute workloads in the cloud,
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/course-introduction?u=76281980&t=92)** including [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), containers and serverless architecture. And examine options to modernize [Application Development](../../Skills/Software%20Development/Application%20Development.md) through rehosting and APIs. Throughout the course, you are presented with graded knowledge assessments. You must pass these assessments to receive course credit. Okay, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Digital Transformation](../../Skills/Software%20Development/Digital%20Transformation.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (1)
> **Speakers:** - [narrator (1)

#### [Important cloud migration terms](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/important-cloud-migration-terms-missing-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/important-cloud-migration-terms-missing-file?u=76281980&t=0)** - [Instructor] You'll hear some common terminology when learning about modernizing infrastructure and applications in the cloud. Let's introduce or remind you of some of these terms. The first is workload. In [Cloud Computing](../../Topics/Cloud%20Computing.md), a workload is a specific application, service, or capability that can be run in the cloud or on-premises. Workloads include: containers, [Databases](../../Skills/Software%20Development/Databases.md), and [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md). Sometimes workloads get retired. Retiring a workload means removing it from a platform. A workload might be retired because it's unnecessary, not cost-effective, secure, or compatible with a specific platform. Alternatively, workloads are often retained. Retaining a workload means that it's intentionally kept. When a workload is retained, it's typically kept on-premises or in a [Hybrid Cloud](../../Skills/Network%20and%20System%20Administration/Hybrid%20Cloud.md) environment. This means that the workload will continue to be managed by the business and will not be subject to the same level of cloud provider control. Many workloads are rehosted. In cloud computing, rehost refers to the migration of a workload to the cloud without changing anything in the workload's code or architecture. This is often done as a first step in cloud migration because it's the simplest and quickest way to run a workload in the cloud. This process is often referred to as lift and shift. However, rehosting also has some drawbacks, including: it doesn't use all the benefits of cloud computing, managing workloads that were rehosted
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/important-cloud-migration-terms-missing-file?u=76281980&t=94)** without making any changes can be difficult, and scaling workloads that were rehosted without making any changes can also be difficult. Then, there's replatform. In cloud computing, replatform refers to the process of migrating a workload to the cloud while making some changes to the workload's code or architecture. This process is often called move and improve. Replatforming lets organizations: benefit from the cloud's [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), reliability, and cost-effectiveness, improve the performance of their workloads, and reduce the cost of their workloads. However, replatforming also has some drawbacks, including: it can be a complex and time-consuming process, making the necessary changes to the workload's code or architecture can be difficult, and testing the changes to the workload's code or architecture can also be difficult. Sometimes, workloads are refactored, which refers to the process of changing the code of a workload. For example, an organization might refactor a workload to use either a cloud-based [Microservices](../../Skills/Software%20Development/Microservices.md) architecture or a cloud-based serverless architecture. We'll explore what those concepts mean later in this course. Refactoring has some benefits. It means that workloads can become more efficient, scalable, or secure and a valuable investment for organizations that want to use all cloud capabilities. That being said, a possible drawback for organizations is that refactoring a workload can be a complex and time-consuming process.
>
> **[3:07](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/important-cloud-migration-terms-missing-file?u=76281980&t=187)** And finally, cloud modernization can inspire and incentivize organizations to reimagine. In cloud computing, reimagine refers to the process of rethinking how an organization uses technology to achieve its business goals. This can involve reconsidering the organization's current [Cloud Strategy](../../Skills/Cloud%20Computing/Cloud%20Strategy.md) and its use of other technologies, such as [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) and machine learning. Reimagining cloud computing can help organizations to: improve their efficiency, reduce costs, and increase agility. It can also help organizations better meet the needs of their customers and partners.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Hybrid Cloud](../../Skills/Network%20and%20System%20Administration/Hybrid%20Cloud.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Definitions:** refers to (4), means that (3), is a  (1)
> **Analogies:** for example (1), such as (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)


### 1. Modernizing Infrastructure in the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/introduction-23229148?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/introduction-23229148?u=76281980&t=0)** - [Instructor] In the context of the cloud, compute refers to a machine's ability to process information. Associated tasks include storing, retrieving, comparing, and analyzing the information. Instead of relying on local servers and storage devices, [Cloud Computing](../../Topics/Cloud%20Computing.md) uses a network of remote servers to provide on-demand access to various computing resources, including applications, storage, and processing power. This technology has become increasingly popular in recent years due to its flexibility, [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), and cost-effectiveness. In this section of the course, you'll learn about the benefits that cloud computing can bring to an organization and explore three cloud computing options: [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), containers, and serverless.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (3), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### [The benefits of running compute workloads in the cloud](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/the-benefits-of-running-compute-workloads-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/the-benefits-of-running-compute-workloads-in-the-cloud?u=76281980&t=0)** - [Instructor] So why should an organization consider running compute workloads in the cloud? Let's explore some benefits that running compute workloads in the cloud can bring to an organization. We'll begin with total cost of ownership or TCO, which is a measure of the total cost of a system or solution over its lifetime. It includes the cost of the initial purchase, maintenance, and operation, along with any other associated costs. [Cloud Computing](../../Topics/Cloud%20Computing.md) can help businesses save money on IT costs by eliminating the need to purchase and maintain physical infrastructure. Cloud providers offer a pay-as-you-go model, which means that organizations only pay for the resources used. They also offer discounts for long-term commitments, which can further reduce TCO for businesses that are planning to use [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) for a long period. Next, there is [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), which refers to the ability to increase or decrease the number of resources such as servers, storage, and bandwidth, that are available to a cloud-based application to meet changing demand. Scalability is important because it provides a means to meet changing demand without having to make large upfront investments in infrastructure. If a business experiences a sudden spike in demand, it can easily scale up its cloud resources to meet the demand. Conversely, if they experience reduced demand, infrastructure can quickly scale down its cloud resources to save money. Another benefit to cloud computing is reliability. Cloud providers offer a high degree
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/the-benefits-of-running-compute-workloads-in-the-cloud?u=76281980&t=94)** of reliability and uptime, which gives businesses confidence that their data and applications will be available when they need them. Cloud providers have many ways to ensure the reliability of their services. [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), for example, has multiple data centers located in different parts of the world. This helps to ensure that if one data center goes down, the others can continue to operate. Cloud providers also use various technologies to monitor their services and automatically detect and fix problems. Next is security. Cloud computing providers offer a high level of security for data and applications. Organizations need to be sure that their data is being kept safe. So in addition to physical data center security, [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) features include data encryption, identity and access management, [Network Security](../../Skills/Cybersecurity/Network%20Security.md), virtual [Private Clouds](../../Skills/Cloud%20Computing/Private%20Clouds.md), and monitoring services that can detect and respond to security threats in real time. These security features can also help to ensure compliance with government or industry regulations. Running compute workloads in the cloud offers a high degree of flexibility for organizations. Organizations can choose the cloud services that best meet their needs at any point in time, and then change or adapt those services when necessary. For example, a business that needs to increase the amount of storage space that it uses can easily add more storage space to its [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) service. And finally, another benefit
>
> **[3:08](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/the-benefits-of-running-compute-workloads-in-the-cloud?u=76281980&t=188)** of running compute workloads in the cloud is abstraction. Abstraction refers to how cloud providers remove the need for customers to understand the finer details of the infrastructure implementation by providing management of the [Hardware](../../Topics/Hardware.md), software, and certain aspects of security and networking. For example, a cloud storage provider might provide a way for customers to store files so that they don't have to worry about the finer details of how the files are stored on the cloud provider's infrastructure. Abstraction also lets cloud providers offer many services. For example, [Google](../../Glossary/Service/Google.md) Workspace lets customers run productivity applications so that they don't have to worry about the details of how the applications are actually run or maintained on Google's infrastructure. Running compute workloads in the cloud can help organizations get their [products](../../Skills/Software%20Development/Microsoft%20Products.md) and services to market faster by eliminating the need to develop and maintain their own infrastructure. At the same time, it provides a platform for innovation by providing access to the latest technologies and tools as and when they are released.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (3), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (2), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (2), [Google](../../Glossary/Service/Google.md) (2)
> **Analogies:** for example (4), such as (1)
> **Definitions:** refers to (2), is a  (1), means that (1)
> **Env Vars:** tco (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Virtual machines](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/virtual-machines-25333330?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/virtual-machines-25333330?u=76281980&t=0)** - [Presenter] Traditionally, various technological pressures compelled many organizations to tightly bind specific computing [Hardware](../../Topics/Hardware.md) resources to specific applications. Virtualization technology relieved these pressures. Virtualization is a form of resource optimization that lets multiple systems run on the same hardware. These systems are called [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) or VMs. This means that they share the same pool of processing, storage, and networking resources. VMs enable organizations to run multiple applications at the same time on a server in a way that is efficient and manageable. Compute Engine is [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md)'s [infrastructure as a service](../../Glossary/Concept/IaaS.md) product that lets users create and run virtual machines on [Google](../../Glossary/Service/Google.md) infrastructure. There are no upfront investments and thousands of virtual CPUs can run on a system that's designed to be fast and to offer consistent performance. Each virtual machine contains the power and functionality of a full fledged operating system. This means a virtual machine can be configured much like a physical server by specifying the amount of CPU power and memory needed, the amount and type of storage needed, and the operating system. A virtual machine instance can be created through the Google Cloud console, which is a web-based tool to manage Google Cloud projects and resources and the Google Cloud [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), command line interface, by using infrastructure automation tools such as [Terraform](../../Skills/DevOps/Terraform.md) or the Compute Engine API. An API or Application Programming Interface
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/virtual-machines-25333330?u=76281980&t=94)** is a set of instructions that allows different software programs to communicate with each other. We'll learn about APIs in more detail later in this course. When you use virtual machines, compute engine bills by the second with a one minute minimum. And sustained-use discounts start to apply automatically to virtual machines the longer they run. So for each VM that runs for more than 25% of a month, Compute Engine automatically applies a discount for every incremental hour of use. Compute Engine also offers committed-use discounts. This means that one committing to use resources for either a one year or three year period, discounts are offered over the on-demand prices. And then there are Preemptible and Spot VMs. Let's say that a workload doesn't require a human to sit and wait for it to finish, such as a batch job analyzing a large data set. Costs can be reduced in some cases by up to 90% by choosing Preemptible or Spot VMs to run the job. A Preemptible or Spot VM is different from an ordinary Compute Engine VM in only one respect, Compute Engine might preemptively interrupt Spot VMs to reclaim the capacity at any time. Although savings are possible with Preemptible or Spot VMs, it needs to be ensured that a job can be stopped and restarted without impact. Spot VMs differ from Preemptible VMs by offering more features. For example, Preemptible VMs can only run for up to 24 hours at a time, but Spot VMs don't have a maximum runtime.
>
> **[3:09](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/virtual-machines-25333330?u=76281980&t=189)** However, the pricing is currently the same for both. And finally, Compute Engine lets users choose the machine properties of their instances, like the number of virtual CPUs, the operating system, and the amount of memory by using a set of predefined machine types or by creating custom machine types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (4), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (4), [Hardware](../../Topics/Hardware.md) (2), [Google](../../Glossary/Service/Google.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **Definitions:** is a  (3), means that (2)
> **Env Vars:** api (2), cpu (1), cli (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** terraform (1)
> **Cross-References:** later in (1)
> **Tools:** command line (1)
> **Speakers:** - [presenter] (1)

#### [Containers](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/containers?u=76281980&t=0)** - [Instructor] [Infrastructure as a Service](../../Glossary/Concept/IaaS.md), or [IaaS](../../Glossary/Concept/IaaS.md), lets users share compute resources with other developers by using [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) to virtualize the [Hardware](../../Topics/Hardware.md). This lets each developer deploy their own operating system, access the hardware, and build their applications in a self-contained environment with access to the necessary system resources. Containers follow the same principle as virtual machines. They provide isolated environments to run software services and optimize resources from one piece of hardware. However, they're even more efficient. The key difference between virtual machines and containers is that virtual machines virtualize an entire machine down to the hardware layers, whereas containers only virtualize software layers above the operating system level. Containers start faster and use a fraction of the memory compared to booting an entire operating system. A container is packaged with your application and all of its dependencies, so it has everything it needs to run. Containers can be independently developed, tested, and deployed, and are well suited for a [Microservices](../../Skills/Software%20Development/Microservices.md)-based architecture. This architecture is made up of smaller individual services that run containerized applications that communicate with each other through APIs or other lightweight communication methods, such as [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) or gRPC. Containers let developers create predictable environments isolated from other system resources, so if a customer asks for a new feature or a change in the application, developers can easily make an update
>
> **[1:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/containers?u=76281980&t=93)** to that particular part of the application without affecting the rest. Containers can run virtually anywhere, which makes development and deployment easy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (4), [Hardware](../../Topics/Hardware.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Infrastructure as a service](../../Glossary/Concept/IaaS.md) (1), [IaaS](../../Glossary/Concept/IaaS.md) (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** grpc (1)
> **Env Vars:** rest (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Managing containers](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/managing-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/managing-containers?u=76281980&t=0)** - [Instructor] Containers improve agility, enhance security, optimize resources, and simplify managing applications in the cloud. Many organizations have a mix of [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) and containers. However, as their IT infrastructure setup becomes more complex, they often need a way to manage their services and machines. For example, an organization can have millions and millions of containers. This requires keeping them secure, and ensuring that they operate efficiently can require significant oversight and management. [Kubernetes](../../Skills/DevOps/Kubernetes.md), originally developed by [Google](../../Glossary/Service/Google.md), is an open-source platform for managing containerized workloads and services. It makes it easy to orchestrate many containers on many hosts, scale them, and easily deploy rollouts and rollbacks. This improves application reliability and reduces the time and resources needed to spend on management and operations. Google Kubernetes Engine, or GKE, is a Google-hosted/managed Kubernetes service in the cloud. The GKE environment consists of multiple machines, specifically compute engine instances grouped to form a cluster. GKE clusters can be customized, and they support different machine types, numbers of nodes and network settings. GKE makes it easy to deploy applications by providing an API and a web-based console. Applications can be deployed in minutes and can be scaled up or down as needed. GKE also provides many features that can help monitor applications, manage resources,
>
> **[1:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/managing-containers?u=76281980&t=93)** and troubleshoot problems. Let's explore how Ubie, a Japan-based healthcare technology startup, reduced their infrastructure costs and maintenance requirements with Google Kubernetes Engine. Founded in 2017, Ubie's goal is to get people the right medical care when they need it, and it does this with [products](../../Skills/Software%20Development/Microsoft%20Products.md) designed for hospitals and individuals. Ubie for Hospital, their flagship product, is AI-powered questionnaire software that lets patients provide medical details before an appointment. Ubie initially relied on an alternative cloud to make Ubie for Hospital available in Japan. As the business added new customers, they needed an infrastructure that could support daily deployments and provide a secure gateway to connect Ubie to a wide range of customer networks and settings. Ubie evaluated available options and decided to use Kubernetes and Google Kubernetes Engine. Google Kubernetes Engine Autopilot, a mode that enables full management of an entire cluster's infrastructure and provides per-pod billing, presented a compelling option for the business to run Ubie for Hospital more efficiently and cost-effectively. With GKE Autopilot, Ubie could eliminate the need to configure and monitor clusters, while only paying for running pods. The shift reduced Ubie's infrastructure costs by 20%, and GKE Autopilot has helped the business eliminate Ubie for Hospital infrastructure maintenance and upgrade tasks that could take hours and days to complete. Another popular option
>
> **[3:04](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/managing-containers?u=76281980&t=184)** for running containerized applications on [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) is Cloud Run. Cloud Run is a fully managed serverless platform to deploy and run containerized applications without needing to worry about the underlying infrastructure. After your application code is containerized and deployed to Cloud Run, Google Cloud takes care of scaling and managing the infrastructure automatically. Cloud Run is ideal for running stateless applications that need to scale up and down quickly in response to traffic. This makes Cloud Run most suitable for simple and lightweight applications, such as web applications. In summary, GKE is ideal when lots of control is required over a Kubernetes environment and there are complex applications to run. Alternatively, Cloud Run is ideal for when a simple, fully managed serverless platform that can scale up and down quickly is required.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (8), [Google](../../Glossary/Service/Google.md) (6), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** gke (8), api (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (1), such as (1)
> **Prerequisites:** setup (1), configure (1)
> **CLI Commands:** make (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Serverless computing](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/serverless-computing-25338215?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/serverless-computing-25338215?u=76281980&t=0)** - [Narrator] Another option for modernizing Cloud applications is [Serverless Computing](../../Skills/Software%20Development/Serverless%20Computing.md). Serverless computing doesn't mean there's no server. It means that resources like compute power are automatically provisioned in the background as needed. The advantage here is that organizations won't pay for compute power unless they're running a query or application. At its simplest definition, serverless means that businesses provide the code for whatever function they want, and the public Cloud provider does everything else. Imagine you provide software to businesses that help employees manage their corporate expenses, and you want to add a feature that lets users upload an image with their expense receipt. In this case, the ability to upload an image is called a function. You as the [Software Development](../../Topics/Software%20Development.md) company, write the code for that function directly into your public Cloud platform. From there, the public Cloud provider manages everything else. One type of serverless computing solution is called function as a service. Some functions are a response to specific events like file uploads to [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md), or changes to database records. You write the code that defines the response to those events and the Cloud provider does everything else. [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) offers many serverless computing [products](../../Skills/Software%20Development/Microsoft%20Products.md). The first is Cloud Run, which is a fully managed environment for running containerized applications. With this product, you don't have to worry about the underlying infrastructure. Then there is Cloud Run functions, which is a platform for hosting simple single purpose functions that are attached to events emitted from your Cloud
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/serverless-computing-25338215?u=76281980&t=94)** infrastructure and services. For example, sending a notification to a mobile device when a new order is placed on a website. And there is also App Engine, which is a service to build and deploy web applications. Serverless computing has many benefits reduced operational costs. The Cloud provider is responsible for the infrastructure and its maintenance. Therefore, at the application owner does not need to invest in the infrastructure or the [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) required to manage it. [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). Serverless computing provides automatic scaling of computing resources based on the application's demand. The Cloud provider manages the scaling process and the application owner only pays for the resources they use. Faster time to market. The need for infrastructure setup and configuration is eliminated, which reduces the time required to deploy applications. This feature lets the application owner focus on writing code and quickly deploying new features. Reduce development costs. The development process is simplified because developers can focus on the application's logic and not on the underlying infrastructure. Improved resilience. Serverless computing offers improved resilience and availability as the Cloud provider automatically manages the infrastructure's failover and disaster recovery capabilities. Pay per use pricing model. The application owner only pays for the computing resources they use. This reduces the cost of unused resources
>
> **[3:08](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/serverless-computing-25338215?u=76281980&t=188)** and helps optimize costs. So how might an organization benefit from [Cloud Computing](../../Topics/Cloud%20Computing.md) infrastructure technology? Let's explore an example specializing in educational technology. [Mashme.io](https://Mashme.io) provides video collaboration experiences for over three million users in 73 countries. Connecting up to 250 full HD live video streams in real time is a major technical challenge. Latencies need to be kept very low to achieve the face-to-face experience, and [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and deployment is vital to avoid disruptive downtime for global clients. Meanwhile, costs have to be kept to a minimum to keep the solution affordable for a growing startup to meet those needs. [Mashme.io](https://Mashme.io) chose to use [Google](../../Glossary/Service/Google.md) [Kubernetes](../../Skills/DevOps/Kubernetes.md) engine. "Every teacher we speak to tells us "that latency is the most important thing. "For educational video conferencing," says [Mashme.io](https://Mashme.io) founder Victor Sanchez Belmar. Low latency means having servers close to every student that connects to [Mashme.io](https://Mashme.io). With students connecting from around the world, Google Cloud has a global network to make that happen. The view was that setting up data centers around the world with your own [Hardware](../../Topics/Hardware.md) is a good way for a startup to never start. So instead, [Mashme.io](https://Mashme.io) started using Google's global network with App Engine before moving to Google Cloud with their own Docker Containers and finally to Kubernetes engine. This allowed them to update their nodes and services in an almost continuous way without disruption
>
> **[4:40](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/serverless-computing-25338215?u=76281980&t=280)** so students didn't lose an hour or even a second of class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Serverless Computing](../../Skills/Software%20Development/Serverless%20Computing.md) (7), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (3), [Google](../../Glossary/Service/Google.md) (2), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2), [Software Development](../../Topics/Software%20Development.md) (1)
> **Definitions:** is a  (5), means that (2), is called (2)
> **URLs:** [mashme.io](https://mashme.io) (5)
> **Prerequisites:** required to (2), setup (1)
> **CLI Commands:** make (1), docker (1)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - [narrator] (1)


### 2. Modernizing Applications in the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/introduction?u=76281980&t=0)** - [Instructor] In the previous section of the course, you explored the benefits and options for modernizing IT infrastructure with the cloud. Now let's focus on application modernization. But first, what exactly is an application? In its basic form, an application is a computer program or software that helps users do something. And in this digital age, applications are everywhere. Consider how many applications you interact with each day, from checking email to tracking your fitness with wearable technology that links to an app on your phone. Customers expect intuitive, well-functioning applications that can help them do things faster. Applications have been developed on premises for years, and often still are. However, on-premises [Application Development](../../Skills/Software%20Development/Application%20Development.md) often slows organizations down. Deploying an application on premises can be time consuming and can also require specialized IT teams. Changes can often take six months or more to implement, which can create friction within different parts of an organization. With cloud technology, businesses can modernize, develop, and manage applications in new ways, which makes them more [agile](../../Skills/DevOps/Agile%20Development.md) and responsive to user needs. In this section of the course, you'll compare traditional and modern cloud application development methods, explore considerations and tools for rehosting legacy applications in the cloud, define [application programming interfaces](../../Skills/Software%20Development/Application%20Programming%20Interfaces%20(API).md), or APIs, examine the benefits of maintaining and managing APIs with Apigee [API Management](../../Skills/Web%20Development/API%20Management.md),
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/introduction?u=76281980&t=94)** and consider scenarios when a hybrid or multi-[Cloud Strategy](../../Skills/Cloud%20Computing/Cloud%20Strategy.md) might be beneficial.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Application Development](../../Skills/Software%20Development/Application%20Development.md) (2), [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [Application programming interfaces](../../Skills/Software%20Development/Application%20Programming%20Interfaces%20(API).md) (1), [API Management](../../Skills/Web%20Development/API%20Management.md) (1), [Cloud Strategy](../../Skills/Cloud%20Computing/Cloud%20Strategy.md) (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [The benefits of modern cloud application development](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/the-benefits-of-modern-cloud-application-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/the-benefits-of-modern-cloud-application-development?u=76281980&t=0)** - [Presenter] Thanks to advances in cloud technology, the way that software applications are developed has drastically changed. With modern cloud [Application Development](../../Skills/Software%20Development/Application%20Development.md), [Software Development](../../Topics/Software%20Development.md) is flexible, scalable, and uses the latest [Cloud Computing](../../Topics/Cloud%20Computing.md) technologies to build and deploy applications. In the past, the traditional software development approach, often referred to as monolithic applications, required all the components of an application to be developed and deployed as a single, tightly-coupled unit, typically using a single programming language. There are many benefits to the modern cloud application development approach. Let's explore a few. We'll begin with architecture. Modern cloud applications are typically built as a collection of [Microservices](../../Skills/Software%20Development/Microservices.md). Microservices are independently deployable, scalable, and maintainable components that can be used to build a wide range of applications. This can help organizations bring business value to market faster because features can be released as they're completed without waiting for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the application to be complete. Regarding deployment, modern applications are typically deployed to the cloud and can use managed or partially managed services. Managed services take care of the day-to-day management of cloud-based infrastructure such as patching, upgrades, and monitoring. This can free up staff to focus on other tasks such as developing new applications. Partially managed services offer a hybrid approach where businesses manage some aspects
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/the-benefits-of-modern-cloud-application-development?u=76281980&t=92)** of their cloud-based applications themselves and the cloud provider manages others. In terms of cost, modern cloud applications use a pay-as-you-go pricing model, which can make them extremely cost effective when configured efficiently. That means that organizations don't always need to pay for resources they aren't fully utilizing. Developers can also use prebuilt APIs, which we'll explore later in this section of the course, and other tools offered by the cloud provider to build and deploy their applications quicker. And then there's [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). Modern cloud-based applications can easily be scaled up or down to meet user demands. Modern cloud applications are designed to be highly available and resilient with built-in features like load balancing, which is the process of distributing network traffic evenly across multiple servers that support an application; and automatic failover, which is a process that allows a cloud-based application to automatically switch to a backup server if a failure occurs. Additionally, cloud service providers typically offer robust monitoring and management tools that allow developers to quickly identify and respond to issues, which can further improve the reliability of cloud applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Application Development](../../Skills/Software%20Development/Application%20Development.md) (2), [Software Development](../../Topics/Software%20Development.md) (2), [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [presenter] (1)

#### [Rehosting legacy applications in the cloud](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/rehosting-legacy-applications-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/rehosting-legacy-applications-in-the-cloud?u=76281980&t=0)** - [Narrator] When a business decides to modernize and move its operations to the cloud, it might be running several specialized legacy applications that aren't compatible with cloud native applications. In these situations, a business might take a re-host migration path, commonly referred to as lift and shift, where an application is moved from an on-premises environment to a cloud environment without making any changes to the application itself. Re-hosting applications brings with it the many benefits of [Cloud Computing](../../Topics/Cloud%20Computing.md) that we explored earlier, such as cost savings, [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), reliability, and security. However, there are also some potential drawbacks to choosing a re-host migration path for legacy applications, including complexity. Re-hosting can be a complex process. Businesses need to carefully plan the migration process and ensure that they have the right resources in place. Risk, migrating applications to the cloud always involve some risk. Businesses need to carefully assess and identify potential risks and ensure that they have a plan in place in case of any problems. Vendor lock-in, by moving applications to the cloud, businesses might become locked into a particular cloud provider. This can potentially make it difficult to switch providers later. [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) offers many solutions for re-hosting specialized legacy applications. The first is Google Cloud VMware Engine, which helps migrate existing VMware workloads to the cloud without having to re-architect the applications or re-tool operations.
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/rehosting-legacy-applications-in-the-cloud?u=76281980&t=94)** With Google Cloud VMware Engine, organizations can maintain their existing VMware environments and operational processes while benefiting from the scalability, security, and reliability of Google Cloud. By doing this, organizations can also access a range of Google Cloud services, such as BigQuery, AIML, and [Google](../../Glossary/Service/Google.md) [Kubernetes](../../Skills/DevOps/Kubernetes.md) Engine, which lets them modernize their application environment and use new capabilities and technologies as needed. And for organizations with legacy applications on Oracle, Google Cloud offers BareMetal Solution. This is a fully managed [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) solution that lets organizations run their Oracle workloads on dedicated bare metal servers in the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (6), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (2), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Env Vars:** aiml (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Application programming interfaces (API)](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/application-programming-interfaces-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/application-programming-interfaces-api?u=76281980&t=0)** - [Instructor] Implementing a software service can be complex and changeable, and if each software service that an organization uses has to be coded for each implementation, the result can be fragile and error prone. One way to make things easier is to use APIs or [Application Programming Interfaces](../../Skills/Software%20Development/Application%20Programming%20Interfaces%20(API).md). Earlier in this course, you saw how cloud providers offer a variety of resources and services for running applications and performing computational tasks in the cloud. However, to fully use these resources and services, applications need to be able to interact with them in a standardized and efficient way. This is where APIs come in. And API is a set of instructions that lets different software programs communicate with each other. Think of it as an intermediary between two different programs, which provides a standardized and predictable way for them to exchange data and interact. An API is like a waiter in a restaurant. The waiter takes orders from customers, communicates with the kitchen, and then brings the food back to the customers. Similarly, an API takes requests from one software program, the customer, communicates with another program, the kitchen, and then returns a response, the food, back to the requesting program, the customer. APIs can be used in many different applications from social media platforms to mobile apps and web services. They let developers access functionality and data from other programs without having to write all the code themselves, saving time and effort.
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/application-programming-interfaces-api?u=76281980&t=94)** [Google](../../Glossary/Service/Google.md) itself provides many APIs that let developers access its [products](../../Skills/Software%20Development/Microsoft%20Products.md) and services. These include APIs that use the power of Google to search across a website or collection of websites. APIs that let developers access Google Maps data such as maps, directions, and traffic information, and APIs that let developers translate texts from one language to another. In fact, many [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) products and services have documented APIs. Using APIs can create new business opportunities for organizations, and improve online experiences for users. For example, an organization could expose an API that allows customers to track their shipments or check their account balances from within a third party app. There's also an opportunity for organizations to create new products that let other companies access their data or services through an API. Let's explore why an organization might consider this business opportunity. APIs can be used to create new products and services. An organization could create an API that allows developers to access data from its database. This data could then be used to create new products and services. APIs can be used to generate new revenue streams. An organization could charge developers to access its APIs. This could generate new revenue streams for the organization and help to offset the costs of developing and maintaining the APIs. APIs can create partnerships by exposing APIs, organizations can create partnerships with other companies or developers,
>
> **[3:08](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/application-programming-interfaces-api?u=76281980&t=188)** which can lead to new business opportunities and collaborations. By carefully considering the needs of their customers and partners, organizations can develop APIs that provide value, and help to grow their businesses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (5), [Google](../../Glossary/Service/Google.md) (3), [Application programming interfaces](../../Skills/Software%20Development/Application%20Programming%20Interfaces%20(API).md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Env Vars:** api (6)
> **Analogies:** think of it as (1), such as (1), for example (1)
> **CLI Commands:** make (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Apigee API management](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/apigee-api-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/apigee-api-management?u=76281980&t=0)** - [Instructor] When an organization has implemented APIs, it's important to maintain and manage them effectively. This can be done using a platform such as Apigee [API Management](../../Skills/Web%20Development/API%20Management.md), [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md)'s API management service to operate APIs with enhanced scale, security, and automation. Apigee is a popular choice for organizations that need to manage their APIs because it offers many benefits. It helps organizations secure their APIs by providing features such as authentication, authorization, and data encryption. It tracks and analyzes API usage with [Real-Time](../../Skills/Database%20Management/Real-Time.md) analytics and historical reporting. It helps with developing and deploying APIs through a visual API editor and a test sandbox. And it offers API versioning, API documentation, and even API throttling, which is the process of limiting the number of API requests a user can make in a certain period. AccuWeather has enjoyed great success sharing its world-class weather data through APIs with a range of global partners who have built applications for connected cars, smart homes, wearables, smart TVs, mobile devices and more. But the company wanted to get its data into the hands of a new kind of customer: individual developers. It needed a way to engage this audience and tailor its offerings to the varying needs of developers and monetize those different offering levels accordingly. To implement a simple and fast way for developers to start building with an appropriate level of API calls and features for their needs,
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/apigee-api-management?u=76281980&t=92)** AccuWeather realized it required a sophisticated API management platform, one that enabled different tiers of offerings by bundling APIs into different [products](../../Skills/Software%20Development/Microsoft%20Products.md), each with our own rate limits and pricing. With Apigee managing APIs for AccuWeather, their users can customize API consumption to their specific needs, while Apigee helps to track and build that traffic. With the customizable Apigee developer portal, developers can sign up quickly, learn about the AccuWeather APIs and test them out. And with built-in analytics, AccuWeather can keep close tabs on who's signing up, what sorts of traffic they're producing and from where, and also observe unexpected patterns in traffic activity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [API Management](../../Skills/Web%20Development/API%20Management.md) (3), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** api (11)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Hybrid and multi-cloud](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/hybrid-and-multi-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/hybrid-and-multi-cloud?u=76281980&t=0)** - [Instructor] As you've seen throughout this course, organizations can thrive with the help of cloud, but the reality is that most of the world's enterprise computing still happens on premises. The path to cloud can be complex and full of difficult decisions, and sometimes workloads remain on premises due to compliance or operational concerns. So how can organizations modernize their IT infrastructure without completely migrating to the cloud? How can they maintain flexibility and avoid lock-in? Two options are hybrid and multi-cloud solutions. A [Hybrid Cloud](../../Skills/Network%20and%20System%20Administration/Hybrid%20Cloud.md) environment comprises some combination of on-premises or private [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) and public [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md). This is a situation many organizations are currently in, where some of their data and applications have been migrated to the cloud while others remain on premises. Interconnects between the private and public clouds allow interoperability. A multi-cloud environment is where an organization uses multiple public cloud providers as part of its architecture. This is ideal for organizations that need flexibility and secure connectivity between the different networks. An organization might choose to use hybrid cloud, multi-cloud, or a combination of both if they want to incorporate specific elements of a public cloud to benefit from the main strengths of that provider. This lets organizations keep parts of the system's infrastructure on premises while they move other parts to the cloud. This way, they create an environment that is uniquely suited to the organization's needs,
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/hybrid-and-multi-cloud?u=76281980&t=94)** move only specific workloads to the cloud because a full-scale migration is not required for it to work, benefit from the flexibility, [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), and lower computing costs offered by cloud services for running specific workloads, and add specialized services, such as machine learning, content caching, data analysis, long-term storage, and [IoT](../../Glossary/Concept/IoT.md) or [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) to the organization's computing resources toolkit. So how can [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) help in this context? [Google](../../Glossary/Service/Google.md)'s answer to modern, hybrid, and multi-cloud distributed systems and services management is called GKE Enterprise. GKE Enterprise is a managed production-ready platform for running [Kubernetes](../../Skills/DevOps/Kubernetes.md) applications across multiple cloud environments. It provides a consistent way to manage Kubernetes clusters, applications and services regardless of where they're running. Some of the benefits of GKE Enterprise include multi-cloud and hybrid cloud support. GKE Enterprise can run Kubernetes clusters on Google Cloud, AWS, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), and other public clouds. Centralized management. GKE Enterprise provides a single centralized console for managing Kubernetes clusters and applications. Security and compliance. GKE Enterprise includes many features that help secure Kubernetes clusters and applications and comply with industry regulations. Networking and load balancing. GKE Enterprise includes a number of features
>
> **[3:07](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/hybrid-and-multi-cloud?u=76281980&t=187)** that help network and load balance Kubernetes applications, and monitoring and logging. GKE Enterprise provides a rich set of tools for monitoring and maintaining application consistency across an entire network, whether on-premises, in the cloud, or in multiple clouds.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (6), [Hybrid Cloud](../../Skills/Network%20and%20System%20Administration/Hybrid%20Cloud.md) (3), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1)
> **Env Vars:** gke (8), iot (1), aws (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Course summary](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/course-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-4-modernize-infrastructure-and-applications-with-google-cloud/course-summary?u=76281980&t=0)** - [Instructor] This brings us to the end of the Modernized Infrastructure and Applications with [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) course. Let's do a quick recap. In the first section of the course, titled Course Introduction, you explored some important cloud migration terminology. In the second section, titled Modernizing Infrastructure in the Cloud, you were introduced to: the benefits of running compute workloads in the cloud, [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), containers and how to manage them, and [Serverless Computing](../../Skills/Software%20Development/Serverless%20Computing.md). And in the final section of the course, Modernizing Applications in the Cloud, you learned about: the benefits of modern cloud [Application Development](../../Skills/Software%20Development/Application%20Development.md), rehosting legacy applications in the cloud, APIs and [API Management](../../Skills/Web%20Development/API%20Management.md) with Apigee, and using hybrid and multi-cloud solutions. Now that you have a comprehensive introduction to modernizing infrastructure and applications on Google Cloud, you can move on to the next course in the series, Trust and Security with Google Cloud, where you'll learn about: fundamental [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) concepts, [Google](../../Glossary/Service/Google.md)'s multilayered approach to infrastructure security, and how Google Cloud strives to earn and maintain customer trust in the cloud. We'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (4), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Serverless Computing](../../Skills/Software%20Development/Serverless%20Computing.md) (1), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (1), [API Management](../../Skills/Web%20Development/API%20Management.md) (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Google Cloud](../../Instructors/Cloud%20Computing/Google%20Cloud.md)

## Skills Covered

- Legacy Modernization
- IT Infrastructure Management
- Google Cloud Platform (GCP)

## Path Context

### In [Prepare for the Google Cloud Digital Leader Certification](../../Paths/Cloud%20Computing/Learning%20Paths/Prepare%20for%20the%20Google%20Cloud%20Digital%20Leader%20Certification.md)
← [Google Cloud Digital Cloud Leader Cert Prep- 3 Innovating with Google Cloud Artificial Intelligence](Google%20Cloud%20Digital%20Cloud%20Leader%20Cert%20Prep-%203%20Innovating%20with%20Google%20Cloud%20Artificial%20Intelligence.md) | **4 of 6** | [Google Cloud Digital Leader Cert Prep- 5 Trust and Security with Google Cloud](Google%20Cloud%20Digital%20Leader%20Cert%20Prep-%205%20Trust%20and%20Security%20with%20Google%20Cloud.md) →

## Appears In

- [Prepare for the Google Cloud Digital Leader Certification](../../Paths/Cloud%20Computing/Learning%20Paths/Prepare%20for%20the%20Google%20Cloud%20Digital%20Leader%20Certification.md)

## Related Courses

_Courses sharing skills:_

- [Leveraging Google Cloud Developer and DevOps Tools](Leveraging%20Google%20Cloud%20Developer%20and%20DevOps%20Tools.md) — Google Cloud Platform (GCP)
- [Choosing A Cloud Platform For Developers Aws Azure And Gcp](Choosing%20A%20Cloud%20Platform%20For%20Developers%20Aws%20Azure%20And%20Gcp.md) — Google Cloud Platform (GCP)
- [Google Cloud Data and Storage Foundations](Google%20Cloud%20Data%20and%20Storage%20Foundations.md) — Google Cloud Platform (GCP)
- [Google Cloud Security for Beginners- Tools and Services](Google%20Cloud%20Security%20for%20Beginners-%20Tools%20and%20Services.md) — Google Cloud Platform (GCP)
- [Google Cloud Foundations](Google%20Cloud%20Foundations.md) — Google Cloud Platform (GCP)

---

[↑ Back to top](#)