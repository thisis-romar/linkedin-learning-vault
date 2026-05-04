---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: google-cloud-security-for-beginners-tools-and-services-24377592
url: "https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592"
duration_minutes: 64
duration: 1h 4m
level: Beginner
updated: 8/12/2024
learners: 70757
skills:
  - Cloud Security
  - Google Cloud Platform (GCP)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFHeulfw28gmQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722024827811?e=2147483647&amp;v=beta&amp;t=SF4gELCvppitTc6BG6bxKghH4A1aBKBV3rYq3xv9hbE"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Getting Started with Google Cloud](../../Paths/Cloud%20Computing/Learning%20Paths/Getting%20Started%20with%20Google%20Cloud.md)'
prev_courses:
  - '[Google Cloud Foundations](Google%20Cloud%20Foundations.md)'
next_courses:
  - '[Google Cloud Data and Storage Foundations](Google%20Cloud%20Data%20and%20Storage%20Foundations.md)'
path_nav: '[{"path":"Getting Started with Google Cloud","position":2,"total":3,"prev":"Google Cloud Foundations","next":"Google Cloud Data and Storage Foundations"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/cloud-security
  - skill/google-cloud-platform-gcp
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Google%20Cloud%20Security%20for%20Beginners-%20Tools%20and%20Services.md)

![Google Cloud Security for Beginners: Tools and Services](https://media.licdn.com/dms/image/v2/D560DAQFHeulfw28gmQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722024827811?e=2147483647&amp;v=beta&amp;t=SF4gELCvppitTc6BG6bxKghH4A1aBKBV3rYq3xv9hbE)

# Google Cloud Security for Beginners: Tools and Services

> If you’re new to cloud security, or if you’re an administrator looking to learn about best practices to create and manage data and assets in the cloud, join Dominique West in this course as she teaches the basics of properly securing your Google Cloud environment. Dominique starts with the basics of cloud computing and general security concepts, explaining the different services and terminologies 

> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592) | 1h 4m | Beginner | 71K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Introduction to course](#introduction-to-course)
  - [Overview of the Google Cloud Platform](#overview-of-the-google-cloud-platform)
  - [Understanding the shared security responsibility model](#understanding-the-shared-security-responsibility-model)
- [**1. Identity and Access Management (IAM)**](#1-identity-and-access-management-iam) (4 videos)
  - [Google Cloud Security and IAM basics](#google-cloud-security-and-iam-basics)
  - [Getting started with IAM in GCP](#getting-started-with-iam-in-gcp)
  - [Managing IAM roles and policies in GCP](#managing-iam-roles-and-policies-in-gcp)
  - [Securing GCP resources with IAM](#securing-gcp-resources-with-iam)
- [**2. Infrastructure Security**](#2-infrastructure-security) (4 videos)
  - [Overview of cloud infrastructure security](#overview-of-cloud-infrastructure-security)
  - [Securing compute resources](#securing-compute-resources)
  - [Data security and encryption](#data-security-and-encryption)
  - [Incident response and best practices](#incident-response-and-best-practices)
- [**3. Network Security**](#3-network-security) (3 videos)
  - [Network security fundamentals](#network-security-fundamentals)
  - [Creating a virtual private cloud (VPC)](#creating-a-virtual-private-cloud-vpc)
  - [Scaling with cloud load balancing](#scaling-with-cloud-load-balancing)
- [**4. Data Security**](#4-data-security) (3 videos)
  - [Introduction to data security in the cloud](#introduction-to-data-security-in-the-cloud)
  - [The importance of backups and disaster recovery services](#the-importance-of-backups-and-disaster-recovery-services)
  - [Data security best practices](#data-security-best-practices)
- [**5. Security Operations**](#5-security-operations) (3 videos)
  - [Understanding the Security Command Center](#understanding-the-security-command-center)
  - [Improving your cloud security posture](#improving-your-cloud-security-posture)
  - [Building a security checklist](#building-a-security-checklist)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to course](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/introduction-to-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/introduction-to-course?u=76281980&t=0)** - Are you venturing into the cloud for the first time or maybe you're eager to learn about security best practices for your data and assets? Throughout this course, we'll delve into the essentials of [Cloud Computing](../../Topics/Cloud%20Computing.md) and general security principles, providing you with a solid foundation to navigate the intricacies of [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). I'm Dominique West, a certified [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) professional, and I'm here to facilitate your journey towards a deeper understanding of [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). I'm ready whenever you are, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (1), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Speakers:** - are (1)

#### [Overview of the Google Cloud Platform](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/overview-of-the-google-cloud-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/overview-of-the-google-cloud-platform?u=76281980&t=0)** - [Narrator] [Google Cloud Platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), or GCP, is a suite of [Cloud Computing](../../Topics/Cloud%20Computing.md) services offered by [Google](../../Glossary/Service/Google.md). It provides various infrastructure and software services that enable users to build, deploy, and manage applications. GCP offers a wide range of [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) across different categories. Let's cover these categories and the services within them. First, is the compute category. This includes services like Google Compute Engine for [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), Google [Kubernetes](../../Skills/DevOps/Kubernetes.md) Engine for containerized applications, and Google App Engine for building and hosting web applications. Second, is storage. GCP provides scalable and durable storage solutions, such as [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Storage for object storage, Cloud [SQL](../../Skills/Data%20Science/SQL.md) for managed [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md), and Bigtable for [NoSQL](../../Skills/Software%20Development/NoSQL.md) database storage. Third, is the networking category. GCP offers various networking services such as virtual [Private Clouds](../../Skills/Cloud%20Computing/Private%20Clouds.md), also known as VPC,s for creating isolated network environments. They also have services such as cloud load balancing for distributing incoming traffic across multiple instances, and Cloud DNS for domain name resolution. The fourth category is [Big Data](../../Skills/Data%20Science/Big%20Data.md) and machine learning. GCP provides tools like BigQuery for [Big Data Analytics](../../Skills/Data%20Science/Big%20Data%20Analytics.md),
>
> **[1:36](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/overview-of-the-google-cloud-platform?u=76281980&t=96)** Cloud Dataflow for [Real-Time](../../Skills/Database%20Management/Real-Time.md) [Data Processing](../../Skills/Database%20Management/Data%20Processing.md), and an AI platform for building and deploying machine learning models. The last category is identity and security. GCP offers identity and access management for managing user permissions and cloud identity for managing user identities. [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) Command Center is helpful for security monitoring and threat detection. Next, let's cover regions and zones to better understand where you're able to deploy the services we just covered. A region is a specific geographical location where GCP resources are located. Each region consists of one or more zones. An example of a region is us-west1. A zone is an isolated location within a region where GCP resources can be deployed. Zones within a region are connected through low latency networks. For example, region us-west1 encompasses three zones, us-west1 a, us-west1 b, and us-west1 c. Interacting with the Google Cloud platform is easy and can be done through various interfaces. The first way is through the Google Cloud console, which is a web-based interface for managing GCP resources. It provides a graphical user interface, also known as a GUI, for performing various tasks.
>
> **[3:12](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/overview-of-the-google-cloud-platform?u=76281980&t=192)** The second way you can interact is through the Command-Line Interface, or [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). Google CLI tool is called gcloud, which allows users to interact with services via the terminal. Lastly, Google provides a set of APIs or [Software Development](../../Topics/Software%20Development.md) kits for various programming languages, allowing developers to integrate GCP services into their applications. It's important to understand the different services, the regions, and zones they can be deployed to, and how to interact with the platform in order to leverage the full power of the cloud platform for your projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (6), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (2), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **Env Vars:** gcp (10), cli (2), sql (1), vpc (1), dns (1)
> **Definitions:** is a  (3), known as (2), is an  (1), is called (1)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** gcloud (1)
> **Tools:** terminal (1)
> **Speakers:** - [narrator] (1)

#### [Understanding the shared security responsibility model](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/understanding-the-shared-security-responsibility-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/understanding-the-shared-security-responsibility-model?u=76281980&t=0)** - [Narrator] The Shared Security Responsibility Model defines who is responsible for different security tasks between cloud service providers and its customers. It ensures that both parties collaborate to secure the cloud environment effectively. In this shared model, the cloud service provider is responsible for securing the underlying [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md), including physical, network, and hypervisor security. Customers are responsible for securing their data, applications, identities, and access management within the cloud environment. Let's go over some tips as you build your own projects and use [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md). Regarding data protection, you are responsible for ensuring data confidentiality, integrity, and availability. You can do this through encryption, access controls, and backup strategies. With IAM, make sure you are implementing strong authentication mechanisms such as role-based access control, and least-privilege principles to manage user access to resources. Be aware of industry-specific regulations and compliance standards that you may have to or want to adopt, so that way you can meet security and compliance requirements. Set up [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) for security threats and vulnerabilities, and establish [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) procedures
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/understanding-the-shared-security-responsibility-model?u=76281980&t=95)** to mitigate security incidents effectively. Now, that we went over some tips, let's briefly review the different cloud service models to bring these concepts to life. The first model is called [Infrastructure as a Service](../../Glossary/Concept/IaaS.md) and provides virtualized computing resources over the internet. This allows users to deploy and manage [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), storage, and networking infrastructure. The second model is called [Platform as a Service](../../Glossary/Concept/PaaS.md), and offers a platform for developing, deploying, and managing applications without the complexity of managing the underlying infrastructure. Users can focus on developing applications, while the cloud provider manages the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). The last model is called [Software as a Service](../../Glossary/Concept/SaaS.md), and delivers software applications over the internet on a subscription basis. Users can access and use software applications hosted by the provider without worrying about installation, maintenance, or infrastructure management. By understanding the Shared Security Responsibility Model and the distinction between cloud service models, you'll be able to safeguard your valuable assets and leverage cloud resources confidently and responsibly for your diverse computing needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) (1), [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (1), [Infrastructure as a service](../../Glossary/Concept/IaaS.md) (1)
> **Definitions:** is called (3)
> **CLI Commands:** make (1)
> **Env Vars:** iam (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)


### 1. Identity and Access Management (IAM)

[↑ Back to Table of Contents](#table-of-contents)

#### [Google Cloud Security and IAM basics](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/google-cloud-security-and-iam-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/google-cloud-security-and-iam-basics?u=76281980&t=0)** - [Instructor] As more businesses move their operations to the cloud, securing your data and resources is of vital importance. [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) offers a set of security features designed to protect your information, and maintain the integrity of your operations. One of the key pillars of security in [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) is identity and access management, or IAM for short. IAM is all about controlling who has access to what resources in your GCP environment. Imagine you have a house with multiple rooms, each containing valuable items. IAM acts as the gatekeeper, determining who can enter which rooms, and what they can do once inside. This ensures that only authorized individuals have access to the resources they need, while unauthorized users are kept out. Let's take a closer look at IAM in action, within the Google Cloud platform. When you create a GCP account and start a project, you're automatically granted certain permissions. An example of default permissions granted, would be the Compute Admin role. As you can see here, this role is enabled in my project. And will allow me full control to create and remove [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md). However, as your project or organization grows and evolves, you'll need to manage access more granularly. This is where IAM roles come into play.
>
> **[1:36](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/google-cloud-security-and-iam-basics?u=76281980&t=96)** IAM roles define the level of access a user has within your project. There are different types of IAM roles in GCP, including primitive, predefined, and custom roles. Primitive roles offer basic access controls. Predefined roles are pre-configured for specific GCP services, and custom roles allow you to tailor permissions to fit your exact needs. By assigning IAM roles to users, you're implementing the principle of least privilege, which ensures users have the right level of access to perform their tasks, without granting unnecessary privileges. This principle is essential for maintaining security in your environment. In the next video, we'll dive deeper into the IAM section of the DCP console, and explore how you can manage IAM roles and permissions to secure your resources effectively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1)
> **Env Vars:** iam (10), gcp (4), dcp (1)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Getting started with IAM in GCP](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/getting-started-with-iam-in-gcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/getting-started-with-iam-in-gcp?u=76281980&t=0)** - [Instructor] In this video, we're going to dive deeper into [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md)'s platform, IAM service, and walk you through getting started with IAM in your own GCP projects. Before we proceed, let's cover some fundamental concepts of IAM in [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). In Google Cloud, a principal refers to an entity that can make a request for a resource. Principals can be individual users, service accounts, or [Google](../../Glossary/Service/Google.md) groups. A role is a collection of permissions that define what actions a principal can perform on resources. Google Cloud provides predefined roles for common use cases and allows you to create custom roles for specific requirements. A policy is a set of rules that specifies what permissions are granted to which principals on a particular resource. Policies are attached to resources and dictate who can do what with those resources. Now that we've covered the basics, let's dive into the GCP console and see how you can start managing IAM in your own projects. Open your Google Cloud console. On the left hand navigation, click on IAM & Admin. Then click on IAM again. This will show you all of the users via principals or roles who have access to your project.
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/getting-started-with-iam-in-gcp?u=76281980&t=94)** As you can see here, I have the owner role for my own project. Within this section of IAM & Admin, you'll find all of the tools and resources you need to manage your own access to your environment. Next, let's talk about IAM roles. As I mentioned in the last video, IAM roles define the permissions granted to members. Google Cloud provides a variety of predefined roles tailored to common use cases, such as viewer, editor, and owner. You can assign these roles to grant members access to specific resources and actions within your project. For example, you might assign the viewer role to a team member who only needs read-only access to certain resources. But what if you need more granular control over permissions? That's where custom roles come in. With custom roles, you can define exactly what actions a member can perform, giving you greater flexibility and security. Creating a custom role is straightforward. You simply define the permissions you want to include, give your role a name and description, and then assign it to members as needed. Once you've assigned roles to members, you can also set IAM policies to control access. IAM policies allow you to specify who has what type of access to a resource, giving you finer grain control
>
> **[3:09](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/getting-started-with-iam-in-gcp?u=76281980&t=189)** and better security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (5), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** iam (11), gcp (2)
> **Definitions:** is a  (2), refers to (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** click on (2)
> **Analogies:** such as (1), for example (1)
> **Cross-References:** in the last (1)
> **Tools:** gcp console (1)

#### [Managing IAM roles and policies in GCP](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/managing-iam-roles-and-policies-in-gcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/managing-iam-roles-and-policies-in-gcp?u=76281980&t=0)** - [Instructor] In this video, we're going to explore how to effectively manage IAM roles in your GCP projects to help you maintain security, and control access to your resources through example. In GCP, members can have multiple roles, allowing you to grant them access to different resources and actions within your project. However, granting too many roles to a single member can lead to excessive permissions, potentially compromising security. Make sure to follow the principle of least privilege, and only grant the minimum permissions necessary for a user to perform their task. Now, let's talk about service accounts. Service accounts are a special account used by applications and [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) to access GCP services. They can also be assigned IAM roles to grant them access to resources. Managing service accounts is similar to managing user accounts. You can assign roles, review their permissions, and revoke access if necessary. Now, let's tie all of these concepts together with a real world example. Imagine you're a DCP project manager for a [Software Development](../../Topics/Software%20Development.md) team. Your project includes various resources like compute engine instances, [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) buckets, and BigQuery datasets. As the project administrator,
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/managing-iam-roles-and-policies-in-gcp?u=76281980&t=94)** you need to ensure that the team members have the appropriate level of access to these resources. First, identify the team members who require access to the project. This includes developers who need to spin up compute engine instances, data analysts who need to query data in BigQuery, and administrators who need full access to manage all resources. Next, assign IAM roles to each team member based on their responsibilities. Developers are assigned the compute instance admin role to manage compute engine instances. Data analysts are given the BigQuery data viewer role to query data sets, and administrators are granted the owner role for full access. But what about service accounts? In our example, you may have an application running on a compute engine instance that needs to access cloud storage buckets. You can create a service account for the application, and granted the necessary IAM roles such as storage object viewer to access the buckets. Finally, review your IAM policies to appropriately restrict resources. For example, you may set a policy that only allows administrators to create new compute engine instances, or restrict access to sensitive data in BigQuery. By effectively managing IAM roles and policies in your DCP project,
>
> **[3:09](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/managing-iam-roles-and-policies-in-gcp?u=76281980&t=189)** you can ensure that team members have the right level of access to resources, while minimizing security risks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (2), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **Env Vars:** iam (6), gcp (3), dcp (2)
> **Analogies:** similar to (1), imagine (1), such as (1), for example (1)
> **CLI Commands:** make (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Securing GCP resources with IAM](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/securing-gcp-resources-with-iam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/securing-gcp-resources-with-iam?u=76281980&t=0)** - [Instructor] Securing your GCP resources starts with understanding how to effectively use IAM to control access. Let's begin by reviewing some best practices for IAM role management. We've covered this previously, but it's worth repeating. To follow the principle of least privilege, only grant uses the permissions they absolutely need to perform their task and regularly review and audit IAM roles to ensure they align with your organization's security policies. Next, leverage predefined roles wherever possible. [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) provides a wide range of predefined roles tailored to some common use cases, reducing the need to create custom roles and simplifying role management. Additionally, consider implementing IAM conditions for finer-grained access control. IAM conditions allow you to further restrict access based on factors such as IP addresses, device type, and time of day. For example, say you only want to give access to your resources during business working hours, or if you wanted to implement a travel restriction policy where users can access your resources from certain regions. Now, let's explore some advanced IAM features that can enhance the security of your resources. IAM service perimeter allows you
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/securing-gcp-resources-with-iam?u=76281980&t=94)** to create security boundaries around specific GCP resources. With IAM service perimeter, you can control access to resources based on their location, ensuring that only authorized users within the perimeter can interact with the resources. Another advanced IAM feature is the IAM recommender, which analyzes your policies and makes recommendations to improve security and efficiency. The recommender can suggest actions such as removing unnecessary roles, adjusting permissions, or adding conditions to enhance your security posture and optimize resource usage. Lastly, let's discuss best practices for securing service accounts. To secure these accounts, limit their scope by only granting the necessary permissions, regularly rotate their keys and credentials and monitor their usage for any suspicious activity. By implementing these best practices and leveraging advanced IAM features, you can effectively secure your GCP resources and mitigate security risks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Env Vars:** iam (11), gcp (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Infrastructure Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of cloud infrastructure security](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/overview-of-cloud-infrastructure-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/overview-of-cloud-infrastructure-security?u=76281980&t=0)** - [Narrator] Let's start by discussing why [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) security is so critical. Cloud environments offer [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), flexibility, and cost efficiency, but they also present unique security challenges that differ from traditional on-premise data centers. One of the fundamental differences between on-premise and [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) is the shift in responsibility. In a traditional data center, the organization owns and manages all aspects of security from physical [Hardware](../../Topics/Hardware.md) to application level protection. However, in the cloud, this responsibility is now shared with the cloud service provider. This brings us to the core of [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md)'s approach to security, the shared responsibility model. Under this model, [Google](../../Glossary/Service/Google.md) managers certain aspects of security, while customers are responsible for others. Understanding this division is important for implementing effective security measures in your [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) environment. Google is responsible for the security of the cloud. This includes physical security, which entails protecting the data centers that house the GCP infrastructure. Google employs extensive measures like 24/7 surveillance, access control, and biometric scanners to secure its facilities. Infrastructure security, which ensures the security
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/overview-of-cloud-infrastructure-security?u=76281980&t=92)** of the hardware and software that form the backbone of GCP services. Google uses robust encryption, threat detection systems and network defenses to protect its infrastructure. And lastly, operational security, which includes monitoring and maintaining the platform to detect and respond to threats. Google [Security Operations](../../Skills/Artificial%20Intelligence%20(AI)/Security%20Operations.md) team continuously monitors the platform using advanced threat intelligence and automated defenses to mitigate risks. As a customer, you are responsible for security in the cloud. This includes identity and access management, data protection, [Network Security](../../Skills/Cybersecurity/Network%20Security.md), and [Application Security](../../Skills/Cybersecurity/Application%20Security.md). We covered IAM in the last chapter, and I will go more in depth regarding the others in the upcoming chapters. To illustrate how this model works in practice, imagine you are running a web application on Google Cloud. Google is responsible for ensuring the physical servers, network infrastructure, and underlying virtualization layer are secure. However, you are responsible for securing your application, managing user access through IAM and setting up firewall rules to protect your network traffic. Cloud infrastructure security is a collaborative effort between Google and its customers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (7), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (2), [Hardware](../../Topics/Hardware.md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** gcp (2), iam (2)
> **Cross-References:** we covered (1), in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### [Securing compute resources](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/securing-compute-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/securing-compute-resources?u=76281980&t=0)** - [Instructor] In this video, we'll explore best practices for securing [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), containerized applications, and serverless environments in the [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). Let's start with securing virtual machines. [Google](../../Glossary/Service/Google.md) Compute Engine offers various features to enhance the security of your virtual machine instances, also known as VMs. Some examples include utilizing shielded virtual machines and enabling Secure Boot. Having shielded virtual machines provide verifiable integrity to ensure your VMs haven't been tampered with. Enabling Secure Boot helps protect against threats such as root kits and boot malware. Shielded VMs also have features such as virtual trusted platform module and integrity monitoring. These features help maintain the integrity of your VMs by ensuring that only verified and signed software can run on them. You should regularly update and patch your systems to maintain their security posture. Doing this at scale though becomes a challenge when your organization has thousands of instances. That's where automated tools can help manage updates efficiently. Using OS patch management tools, enabling automatic updates, and regularly reviewing security bulletins help ensure your instances remain secure.
>
> **[1:36](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/securing-compute-resources?u=76281980&t=96)** A great example of a security bulletin will be the vulnerability summaries put out by CISA, the [Cybersecurity](../../Topics/Cybersecurity.md) and Infrastructure Agency. Next, let's talk about securing containerized applications using Google [Kubernetes](../../Skills/DevOps/Kubernetes.md) Engine, also known as GKE. Containers are lightweight, portable, and self-sufficient environments that include everything needed to run a piece of software, including the code, runtime, libraries, and system settings. This makes them ideal for developing, shipping, and deploying applications consistently across different environments. Implementing pod security policies allows you to define the security context for your pods, ensuring they run with the necessary permissions. You can also use a sandbox that provides an additional layer of isolation for your container workloads, enhancing security. Binary authorization ensures that only trusted container images are deployed. Lastly, let's discuss securing serverless environments such as Cloud Functions and Cloud Run. You can use IAM roles, a concept we spoke about in an chapter to control access to your serverless functions. Setting appropriate timeout and memory limits help prevent your resources from exhaustion attacks,
>
> **[3:10](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/securing-compute-resources?u=76281980&t=190)** aimed at having your system run out of resources and can no longer be used properly. Securing your infrastructure at scale doesn't have to be scary. Applying these best practices for your virtual machines, containers, and serverless applications will ensure that you can effectively secure your compute resources in the Google Cloud platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (5), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Google](../../Glossary/Service/Google.md) (2), [Cybersecurity](../../Topics/Cybersecurity.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **Env Vars:** cisa (1), gke (1), iam (1)
> **Analogies:** such as (3)
> **Definitions:** known as (2)
> **Speakers:** - [instructor] (1)

#### [Data security and encryption](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/data-security-and-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/data-security-and-encryption?u=76281980&t=0)** - [Instructor] [Data Security](../../Skills/Data%20Science/Data%20Security.md) protects your sensitive information, guarantees compliance with various regulations, and maintains customer trust. In the cloud, securing your data involves multiple layers of protection, including encryption and effectively managing encryption keys. [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) offers comprehensive encryption methods to protect data both at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) and in transit. Encryption at rest protects data stored on physical media, while encryption in transit secures data as it moves across the network. GCP provides encryption by default, but you can also use customer-managed encryption keys, also known as CMEK, for additional control. Let's explore managing encryption keys in GCP. There are three main types of keys you can use. The first are [Google](../../Glossary/Service/Google.md)-managed keys. These are the default keys managed by Google. Then, you have customer-managed keys. These give you more control over key management and rotation. Last is customer-supplied encryption keys. These allow you to provide your own keys for maximum control. Each option offers different levels of control and responsibility. To securely store and manage sensitive information like API keys, passwords, and certificates, GCP provides the Secret Manager. Secret Manager allows you to store, manage,
>
> **[1:36](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/data-security-and-encryption?u=76281980&t=96)** and access secrets securely. You can set fine-grain access control to ensure only authorized applications and users can retrieve those secrets. Adhere to these best practices to maintain strong data security. First, regularly rotate your encryption keys to minimize the risk of key compromise. Next, implement strong access controls to restrict who can manage and use your keys. Lastly, monitor and audit key usage to detect any unauthorized access or anomalies. Managing your encryption keys effectively. Whether using Google Manage or customer manage options, make sure that you are maintaining control over your data security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Security](../../Skills/Data%20Science/Data%20Security.md) (3), [Google](../../Glossary/Service/Google.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Env Vars:** gcp (3), cmek (1), api (1)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Incident response and best practices](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/incident-response-and-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/incident-response-and-best-practices?u=76281980&t=0)** - [Narrator] [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) helps to minimize the impact of security incidents, provide quick recovery, and maintain business continuity. Effective incident response involves proactive monitoring, timely detection, and a structured approach to managing and resolving incidents. To set up security monitoring in GCP, use [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md)'s Operation Suite, formerly known as Stackdriver. This suite includes tools for monitoring, logging, and alerting. Start by enabling Cloud logging and Cloud monitoring for your projects. Configure those logs to capture important events and set up alerts to notify you of suspicious activities. Google Cloud's Security Command Center provides automated threat detection. It continuously scans your GCP environment for vulnerabilities and threats in real time. You can integrate third party security tools with the Security Command Center to enhance threat detection and response capabilities. Let's go over the common steps you would take when responding to a security incident. First is identification and containment to limit the impact. This might involve some level of investigation into the alert and validity that it is a real threat. Once confirmed positive, next is to contain the threat. Once the threat is contained,
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/incident-response-and-best-practices?u=76281980&t=94)** focus on eradication and recovery to remove the threat and restore your services. After resolving the incident, conduct a post-incident review to identify lessons learned and improve your response plan. Adhering to best practices is essential for effective incident response. First, prepare a detailed incident response plan that outlines roles, responsibilities, and procedures. Conduct regular drills so that way your team is always prepared. Use a structured approach like the [NIST](../../Skills/IT%20Help%20Desk/NIST.md) incident response lifecycle, which includes preparation, detection and analysis, containment, eradication, and recovery. Let's take the steps we covered earlier in a real life example. Imagine a scenario where there's a data breach because of a compromised API key. The response steps include identifying the breach through monitoring alerts, containing it by revoking the compromised key, eradicating the threat by scanning for additional vulnerabilities, and recovering by issuing new keys. For lessons learned, the post-incident review highlighted the need for tighter key management practices and therefore, an update to the user access policy happened. Effective incident response involves proactive security monitoring, utilizing automated threat detection tools,
>
> **[3:08](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/incident-response-and-best-practices?u=76281980&t=188)** and following structured incident response best practices. Regularly review and update your incident response plan to stay prepared for potential security incidents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (8), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [NIST](../../Skills/IT%20Help%20Desk/NIST.md) (1)
> **Env Vars:** gcp (2), nist (1), api (1)
> **Prerequisites:** set up (2), configure (1)
> **Definitions:** known as (1), is a  (1)
> **Cross-References:** we covered (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)


### 3. Network Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Network security fundamentals](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/network-security-fundamentals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/network-security-fundamentals?u=76281980&t=0)** - [Instructor] Cloud Networking involves hosting and managing network resources and services in a cloud environment. Unlike traditional networking, Cloud Networking leverages the [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), flexibility, and global reach of cloud infrastructures. Let's cover some Key Concepts in Cloud Networking. A virtual private cloud or VPC, is a virtual network dedicated to your GCP project. Subnets are segments within a VPC, allowing you to separate and manage different network segments. [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) involves assigning IP addresses to your resources. Domain Name Systems, also known as DNS, translate domain names into IP addresses, enabling communication over the internet. [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) offers a range of networking services to help you build and manage your network infrastructure. Google Cloud VPC allows you to create and manage virtual networks, configure subnets to segment your network, and set up firewall rules to control traffic to and from your instances, enhancing security and organization. Cloud Load Balancing distributes incoming traffic across multiple instances, ensuring high availability and reliability. It comes in different types,
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/network-security-fundamentals?u=76281980&t=94)** such as HTTPS, TCP/SSL, and internal load balancing, each designed to distribute traffic efficiently. Cloud CDN caches content at edge locations around the world, reducing latency, and improving the performance of your web applications, by delivering content more quickly to users. Yeah. Lastly, Cloud Interconnect provides direct, high-speed, low-latency connections between your on-premise data centers and Google Cloud, which is ideal for [Hybrid Cloud](../../Skills/Network%20and%20System%20Administration/Hybrid%20Cloud.md) setups, where you need seamless integration between your on-premise and cloud environments. Leverage these tools we talked about to create durable, scalable, and secure network systems in Google Cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (4), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1), [Hybrid Cloud](../../Skills/Network%20and%20System%20Administration/Hybrid%20Cloud.md) (1)
> **Env Vars:** vpc (3), gcp (1), dns (1), https (1), tcp (1)
> **Definitions:** is a  (1), known as (1)
> **Prerequisites:** configure (1), set up (1)
> **Cross-References:** we talked about (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Creating a virtual private cloud (VPC)](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/creating-a-virtual-private-cloud-vpc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/creating-a-virtual-private-cloud-vpc?u=76281980&t=0)** - [Instructor] In this demonstration, I'll walk you through the steps to set up a virtual private cloud so you can create your own secure network environment. First, let's access the [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) console. To do so, make sure you go to [console.cloud](https://console.cloud).[google.com](https://google.com). From there, just enter your login credentials and you'll be good to go. Next, once you're in your dashboard, go to the search bar and type in VPC networks. You should get a bunch of different options. Go ahead and click the one that says VPC network. Alternatively, on the left-hand side, you can come to the navigation menu and you can either view all [products](../../Skills/Software%20Development/Microsoft%20Products.md) and look for the VPC network, or if you're like me, you'll have VPC network pin and it's easy to navigate from there too. This will take you to the VPC networks overview page where you can view and manage your existing VPC networks or create a new one. To create a new VPC, click on create VPC network. This will open the VPC creation wizard where you'll configure the settings for your new VPC. In the VPC creation wizard, enter a name for your VPC. For the purposes of this demo, I'm going to call it demo-vpc.
>
> **[1:38](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/creating-a-virtual-private-cloud-vpc?u=76281980&t=98)** Next, you can put in a description. For example, maybe you're creating this for a new department, maybe you're creating this for a specific project or purpose, putting a description will just help you remember those details. For this, I'm just going to say, this is a demo. Next, we want to go to subnet creation mode. Here you'll see two options. You can choose between the custom mode, which will allow you to specify your own subnets Custom mode gives you more control over IP ranges in subnet configurations where you can specify the name, region, and IP range for your subnet. In our case, for ease of our demo, I'm going to choose automatic. Automatic will go ahead and create these options for you as you'll see here below. Next are firewall rules to control traffic to and from your VPC. Here you can select any of the provided firewall rules you would like to apply to your VPC. These can be later managed in the firewall rules page, but be mindful of the ones that you click to enable as they will allow various access into your environment. For example, enabling allow RDP will allow any remote desktop connections from port 3389. Lastly, you can choose between regional
>
> **[3:13](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/creating-a-virtual-private-cloud-vpc?u=76281980&t=193)** and global advanced dynamic [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) configurations that will either have [Google](../../Glossary/Service/Google.md) routers learn routes only in the region you created them in, or dynamically learn from all regions. For the purpose, I'm going to leave it on regional. Once done, review your settings and click create to finalize the VPC creation. Google Cloud will now create your VPC with the specified subnet and firewall rules. This can take anywhere from a few seconds to a few minutes. Be mindful, on the right top hand side, you should see a bell. You see mine is loading. That means our VPC is being created. If you click, it'll give you an indication afterwards once it's done. In this demo, we've walked through the steps to create a virtual private cloud in the [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). We configured some subnets and established some firewall rules. This setup ensures a secure and organized network environment for your cloud resources. You'll be notified once it's done and your new VPC is now ready for use. Complete with your custom subnets and firewall rules. In this demo, we've walked through the steps to create a virtual private cloud in the Google Cloud platform. This setup ensures a secure and organized network environment for your cloud resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Google](../../Glossary/Service/Google.md) (2), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** vpc (18), rdp (1)
> **UI Navigation:** go to (3), click on (1), open the (1)
> **Prerequisites:** setup (2), set up (1), configure (1)
> **URLs:** [console.cloud](https://console.cloud) (1), [google.com](https://google.com) (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Ports:** port 3389 (1)

#### [Scaling with cloud load balancing](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/scaling-with-cloud-load-balancing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/scaling-with-cloud-load-balancing?u=76281980&t=0)** - [Instructor] Cloud load balancing is a fully distributed software defined managed service that helps you distribute incoming traffic across multiple instances ensuring no single instance becomes a bottleneck. By evenly distributing traffic, cloud load balancing helps maintain the responsiveness and reliability of your applications even during peak traffic times. [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) offers several types of load balancers to meet different needs. You have HTTP, which is ideal for web applications. You have TCP/SSL load balancing. This is typically used for non HTTP traffic and internal load balancing, which helps distribute traffic within a private network. Now let's go through a demo to set up your own load balancer. First, navigate back to your Google Cloud dashboard In the search bar, type in load balancing.
>
> **[1:06](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/scaling-with-cloud-load-balancing?u=76281980&t=66)** It should be the first option that pops up. You can go ahead and click it. From here it will open your load balancing dashboard under the network services tab. Click on create load balancer. From here, you'll be presented with a multitude of options. The first would be what type of load balancer do you want to choose from. You can either choose an application load balancer or a network load balancer. For the purposes of this demo, we're going to choose an application load balancer. This is a great option when you need a flexible feature set for your applications. Next, you'll be presented with another option. Do you want this application load balancer to be public facing or internal facing? Public means your balancer will be internet facing. While internal means it will be utilizing private IP addresses. For the purposes of this demo, I will choose public.
>
> **[2:14](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/scaling-with-cloud-load-balancing?u=76281980&t=134)** Next, we will be asked to create this balancer in a global or single region deployment. The former is better for performance if you'll have global users accessing your systems. While the ladder is better for more regional based access. For the purposes of this demo, I will choose global. Next, you're going to choose your load balancer generation, which can be global or classic. Again, here we're going to choose global. Lastly, as always, make sure you view your settings to ensure that your system is being created tailored to your needs. Once done, click configure. From there, you'll be asked, add a load balancer name. I've already chosen one called GCP instructor bucket1. Next, let's create a backend configuration for our load balancer. Click on backend configuration, then click on backend services in backend buckets. Here you're presented with some options to either create a backend service or create a backend bucket. We're going to create a bucket. A new window will open and it'll ask you for your bucket name. Here I'm going to choose the same one as before. GCP instructor bucket1. Next, you need to choose your [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) bucket
>
> **[3:52](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/scaling-with-cloud-load-balancing?u=76281980&t=232)** to associate this with. When you click the browse button, either you'll see a bucket for you to choose, or you can go ahead and create a new one. I recommend creating a new one, especially if you are a new user you won't see one, an option available for you. Once you click create, go ahead and name your bucket. You have to pick a globally unique permanent name for this bucket, and so I definitely recommend playing around with some names until you can find one that hasn't been used. Again, I will choose GCP instructor bucket1.
>
> **[4:39](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/scaling-with-cloud-load-balancing?u=76281980&t=279)** Next, choose where to store your data. Choose a storage class for your data. Choose how to control access to objects, and lastly, choose how to protect object data. For this purposes of the demo, I'm going to choose all of the default options. Click confirm, and now your bucket has been created.
>
> **[5:15](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/scaling-with-cloud-load-balancing?u=76281980&t=315)** From here, you should be able to go ahead and create your backend bucket. Now that that's been created, you should be able to review and finalize all of your options for your application load balancer. You'll know it's correct when you see check marks next to each configuration setting. Click create and sit back and wait for your load balancer to be created. This can take anywhere from a couple of seconds to a couple of minutes. You'll know it's done in the top hand right hand corner. The bell will ring to say your load balancer has been created and there is a check mark next. Once your load balancer is set up, you can monitor its performance using the Google Cloud console. Check the traffic distribution and [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) to ensure your load balancer is operating as expected, and make sure to adjust your configurations as necessary to optimize performance over time. Cloud load balancing helps you distribute traffic across multiple instances, ensuring high availability and performance for your applications. By leveraging it, you can handle increased traffic and maintain optimal application performance. Before we go, now you can see the load balancer we tried to create is now complete. It has a green check mark next to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (3), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1), [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) (1)
> **Env Vars:** gcp (3), http (2), tcp (1), ssl (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (2), configure (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 4. Data Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to data security in the cloud](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/introduction-to-data-security-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/introduction-to-data-security-in-the-cloud?u=76281980&t=0)** - [Narrator] [Data Security](../../Skills/Data%20Science/Data%20Security.md) involves safeguarding your data, whether it's stored, processed, or transmitted within cloud environments. It's important to understand that data security isn't just about protecting data from theft, but also ensuring its confidentiality, integrity, and availability is intact for your users that need it the most. [Cloud Computing](../../Topics/Cloud%20Computing.md) presents unique challenges for data security due to its dynamic nature. There's multi-tenancy and dependency on third party services. Some of the most common challenges include [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md), which is about ensuring confidentiality in environments where resources are shared amongst these multiple tenants, [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md), which is about preventing unauthorized modifications, and making sure that data is accurate and consistent, data compliance, which covers how organizations meet regulatory requirements that mandate data protection standards. And lastly, data availability, which ensures uninterrupted access to data and services even in the event of failures or attacks. Encryption is a critical component of data security and cloud environments, and involves protecting data at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) and in transit. Encryption ensures that even if data is intercepted, it remains unreadable without the correct decryption key. [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) and logging are critical for detecting and responding to security threats in real time.
>
> **[1:36](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/introduction-to-data-security-in-the-cloud?u=76281980&t=96)** Monitoring is when you use tools to continuously monitor your network traffic, system performance, and your user activities. Logging refers to keeping detailed logs of all these activities so you can analyze security incidents for forensic purposes. Data loss prevention strategies aid in identifying, monitoring and protecting your sensitive data, both from unauthorized access and transmission. Here are some things that you can add to your toolkit. They include using data loss prevention tools to discover sensitive data across your cloud environment, tracking your data movements to detect and prevent unauthorized transfers. And lastly, establish policies that define how sensitive data is handled and protected in your environment. To protect your data in cloud computing, you'll need a comprehensive approach that addresses the unique challenges faced by your organization and incorporates best practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Security](../../Skills/Data%20Science/Data%20Security.md) (4), [Cloud Computing](../../Topics/Cloud%20Computing.md) (2), [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) (1), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Definitions:** is a  (1), refers to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### [The importance of backups and disaster recovery services](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/the-importance-of-backups-and-disaster-recovery-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/the-importance-of-backups-and-disaster-recovery-services?u=76281980&t=0)** - [Instructor] Let's start by understanding what backups and disaster recovery mean. A backup is a copy of your data that can be used to restore the original in case of data loss. Disaster recovery involves strategy and processes to quickly restore systems and data after a disaster. Both backups and disaster recovery are essential for ensuring your [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md), availability, and [Resiliency](../../Skills/Software%20Development/Resiliency.md) against unexpected events such as a [Hardware](../../Topics/Hardware.md) failure, a cyber attack, or natural disasters. Backups are your first line of defense against data loss. They protect against accidental deletion, corruption, and hard rail failures. Here are two major benefits for having backups in place. The first is it enables you to restore your data quickly to minimize downtime. We all know time costs money, and when things are down, backups can help you get back on track quickly. The second benefit is to meet necessary regulatory requirements. For example, ISO 27001 and SOC are two security frameworks that will ask about how your organization meet backup requirements. Backup regularly, so you have a recent copy of your data available during emergencies. Disaster recovery goes beyond backups. It's about restoring your entire IT environment,
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/the-importance-of-backups-and-disaster-recovery-services?u=76281980&t=95)** including applications and infrastructure to ensure business continuity so that way, you can continue operating during and after a disaster. Disaster recovery strategies also include thinking about minimal downtime to your systems and risk mitigation. A well-designed disaster recovery plan helps your organization recover quickly and provide critical services even in the face of a major disruption. The [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) offers various tools and services to implement robust backup strategies. These include [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) as a reliable and scalable storage solution for backups, cloud [SQL](../../Skills/Data%20Science/SQL.md) backups, a feature for automated backups for your cloud SQL [Databases](../../Skills/Software%20Development/Databases.md), and snapshots, which are point-in-time copies of disk volumes for quick recovery. Using these tools, you can create automated and manual backups so that way, your data is always protected. [Google](../../Glossary/Service/Google.md) also provides comprehensive disaster recovery solutions to ensure your IT environment can recover from any disaster. Two tools that you can add to your own plan include the [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Disaster Recovery Service that helps you implement disaster recover strategies, and utilizing multi-region deployments that can distribute your applications
>
> **[3:07](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/the-importance-of-backups-and-disaster-recovery-services?u=76281980&t=187)** across multiple regions, which will enhance your resiliency. By leveraging these tools, you can create a resilient IT infrastructure that not only minimizes downtime, but also helps with business continuity. Finally, let's discuss how to implement an effective backup strategy on Google Cloud. The first is to conduct a risk assessment. This includes identifying potential risks and their impact on your IT environment. Second is to define recovery point objectives, and recovery time objectives. I'll circle back to the definition of these in the next slide. The third step is to leverage disaster recovery tools and services, which include the disaster recovery as a service I just mentioned, and a multi-region deployment. Lastly, conduct regular drills to test and refine your plan at a minimum annually. Before we go, as promised, here are the definitions of RTO and RPO. Recovery time objective refers to the maximum acceptable downtime that an organization can tolerate for a particular system before significant consequences occur. This could be financial or otherwise. Recovery point objective refers to the maximum amount of data loss deemed acceptable by the organization. Both should be defined by your organization and will help with your disaster recovery strategies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Resiliency](../../Skills/Software%20Development/Resiliency.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** sql (2), iso (1), soc (1), rto (1), rpo (1)
> **Definitions:** is a  (1), refers to (1)
> **Analogies:** such as (1), for example (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Data security best practices](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/data-security-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/data-security-best-practices?u=76281980&t=0)** - [Instructor] Imagine data as the treasure chest 2 of your organization, 3 and security as the guardian protecting it 4 from unwanted individuals lurking on the internet. 5 Here are some resources you can add to your toolkit 6 to help you secure your environment. 7 They are encryption, 8 identity and access management, 9 multifactor authentication, 10 [Network Security](../../Skills/Cybersecurity/Network%20Security.md), 11 and logging and monitoring. 12 Next, let's connect the dots 13 of these security concepts into tangible tools 14 that you can implement in GCP today. 15 The first resource you can implement 16 is the [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Key Management Service, 17 which will allow your users to create, 18 use, rotate and destroy cryptographic keys 19 for data encryption, 20 both at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) and in transit. 21 The second resource is identity-aware proxy. 22 This is a security service 23 that allows you to control access 24 to your web applications, 25 such as Compute Engine, 26 App Engine, and [Kubernetes](../../Skills/DevOps/Kubernetes.md) Engine. 27 Your third tool is a [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) Command Center, 28 a comprehensive [Security Management](../../Skills/Cybersecurity/Security%20Management.md) 29 and data risk platform 30 that offers centralized visibility, 31 control and insights 32 into the security posture of your cloud resources. 33 Next, utilize data loss prevention services, 34 such as data discovery 35 that scans your data repositories. 36
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/data-security-best-practices?u=76281980&t=95)** These scans help to identify 37 and classify sensitive information, 38 such as personally identifiable information, or PII, 39 [Financial Data](../../Skills/Software%20Development/Financial%20Data.md) and intellectual property. 40 You can also utilize the feature for [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) 41 that can define classification rules 42 to tag data with labels, 43 indicating its sensitivity level, 44 allowing for granular control 45 over data handling and access. 46 Lastly, ensure you're implementing compliance 47 and governance tools, 48 ensuring you play by the rules 49 and stay on the right side of the law.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (1)
> **Analogies:** such as (3), imagine (1)
> **Env Vars:** gcp (1), pii (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 5. Security Operations

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding the Security Command Center](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/understanding-the-security-command-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/understanding-the-security-command-center?u=76281980&t=0)** - [Presenter] The [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) offers security features designed to protect your data and applications. Central to this is the Security Command Center, an integrated [Security Management](../../Skills/Cybersecurity/Security%20Management.md) and data risk platform. The Security Command Center helps you gain visibility into your cloud assets. It also helps detect vulnerabilities and responds to threats. The command center provides several key features, including asset discovery, threat detection, vulnerability management, security health analytics, event threat detection, and security recommendations. Incorporating the service into your security strategy helps you proactively manage and mitigate your risks. It allows you to monitor your assets, identify misconfigurations, and ensure compliance with security policies. If you're looking to get started using this service, you can do the following. Navigate to your [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) console, ensure that you are within an organization in your platform, and enable the Security Command Center based on the tier your organization is in. This could be standard, premium, or enterprise. Let's walk through a quick example. Imagine you received an alert from the Security Command Center about a newly discovered vulnerability. Here's how you can address it. From the Security Command Center dashboard, click on findings to open the alert and see more details. In this instance, the alert will give a detailed description
>
> **[1:37](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/understanding-the-security-command-center?u=76281980&t=97)** and even make it easy to take action with a convenient button. If you scroll down a little bit further, you'll also get a detailed description of next steps you can take. Follow the provided remediation steps such as applying a security patch, or in this case, ensuring the admissions controller are running on my clusters. Once you take action, verify that the vulnerability is resolved, and ensure to monitor the assets for any further issues. To maximize the effectiveness of the Security Command Center, regularly review and act upon alerts. Keep your asset inventory up to date. Utilize automation features for response workflows, and integrate with other security tools like Cloud Armor and VPC service controls. Take the lead in securing your digital infrastructure with the Security Command Center, your empowered to make informed decisions. You can also swiftly respond to threats and maintain the integrity of your cloud environment every step of the way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Security Management](../../Skills/Cybersecurity/Security%20Management.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **UI Navigation:** navigate to (1), click on (1), open the (1), scroll down (1)
> **CLI Commands:** make (2)
> **Analogies:** imagine (1), such as (1)
> **Env Vars:** vpc (1)
> **Speakers:** - [presenter] (1)

#### [Improving your cloud security posture](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/improving-your-cloud-security-posture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/improving-your-cloud-security-posture?u=76281980&t=0)** - [Narrator] The concept of a [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) posture refers to the overall state of security in your cloud environment. It includes the processes, controls, and technology you use to protect your data, applications, and infrastructure. A strong security posture helps reduce risk, protect sensitive data, and ensure compliance with regulatory standards. As a security engineer or member of a cloud security team, it's important to proactively manage and secure your cloud resources. Before improving your security posture, though, you first need to assess your current state. How will you know where you want to go if you don't understand where you are? Here's how you can establish a baseline for your cloud security posture. First, identify all of your cloud resources, including your compute instances, your storage buckets, and [Databases](../../Skills/Software%20Development/Databases.md). Next, check the configuration settings of your cloud resources against best practices and compliance requirements, such as the cloud security alliances, security trust assurance, and risk framework, also known as CSA STAR. Third, analyze your IAM roles and permissions to ensure the principle of lease privilege is applied. Use tools like Cloud Security Scanner to detect potential security issues in your applications. Review your audit logs for unusual activities or security incidents.
>
> **[1:33](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/improving-your-cloud-security-posture?u=76281980&t=93)** And lastly, if applicable, summarize your findings into reports to understand your current security posture or report to your leadership team and major stakeholders. Improving your cloud security posture is an ongoing process. Regularly monitor your environment, update your security policies, and adapt to new threats to maintain your security standards. Start applying these strategies today to enhance your cloud security posture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (7), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** csa (1), star (1), iam (1)
> **Definitions:** refers to (1), known as (1), is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Building a security checklist](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/building-a-security-checklist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/building-a-security-checklist?u=76281980&t=0)** - [Instructor] A security checklist is a great tool to systematically protect your cloud environment. It ensures that all security measures are accounted for, minimizing risk, and improving your overall security posture. Let's put all the concepts we've learned together into a blueprint that you can begin implementing right away. Start by planning your security strategy. This includes defining your security goals. Identifying key stakeholders, and determining the scope of your checklist. Make sure you're considering your organization's size and specific security needs. What's necessary for a healthcare clinic might not be the same for a local school district. The following are general key steps to establishing a security baseline for large or enterprise organizations. The first is to catalog all of your cloud resources and their configurations. Review and refine your IAM policies, making sure you are ensuring least privilege access. Implement VPCs, firewalls, and subnets to segment and secure network traffic. Use cloud KMS to manage encryption keys and ensure data is encrypted, both at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) and in transit. Make sure you have alignment with regulatory requirements like DDPR, HIPAA or SOC2. Enable and review cloud audit logs using cloud monitoring and cloud logging for insights. And lastly, develop and test your [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) plans.
>
> **[1:39](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/building-a-security-checklist?u=76281980&t=99)** Small businesses may have fewer resources, but you most definitely can maintain robust security. Here's how you can establish your own security baseline, same as larger organizations, first, is identify and document your cloud resources. You can also apply IAM roles, but just be careful. Make sure you only grant the minimum necessary permissions. With smaller teams, permissions tend to be over permissive. It's a helpful strategy when trying to be [agile](../../Skills/DevOps/Agile%20Development.md), but can be detrimental as your organization grows. For networking, use simple network segmentation and basic firewall rules. You can also utilize Cloud KMS to encrypt sensitive data. As a small business, especially [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) organizations, you may have some relevant regulatory standards that are applicable to your business. Make sure you know which ones they are, and how to implement the necessary controls to meet those requirements. Enable basic monitoring and logging just so you have visibility into your cloud environment. Lastly, create a straightforward incident response plan, and make sure you train your teams on the common threats to small businesses, such as [Phishing](../../Skills/Software%20Development/Phishing.md) attempts. Creating a security checklist involves planning, establishing a baseline, and leveraging tools in continuously improving your security posture, making sure that it's tailored to the size and needs of your organizations.
>
> **[3:13](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/building-a-security-checklist?u=76281980&t=193)** Start creating your own security checklist today to ensure that your cloud environment is secure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Phishing](../../Skills/Software%20Development/Phishing.md) (1)
> **Env Vars:** iam (2), kms (2), ddpr (1), hipaa (1), soc2 (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** be careful (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-security-for-beginners-tools-and-services-24377592/next-steps?u=76281980&t=0)** - Congratulations, you made it to the end of this course. Time flies when you're having fun, or in our case, learning about security best practices in the [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). Same thing, right? (laughs) We covered a lot of ground, so let's recap the lessons we've gone over. We began this course by introducing you to the Google Cloud platform, including the main categories of services within the [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), how to interact with the platform, and the levels of security responsibility depending on the cloud service model. We then went over identity and access management, infrastructure, data, [Network Security](../../Skills/Cybersecurity/Network%20Security.md), and lastly, [Security Operations](../../Skills/Artificial%20Intelligence%20(AI)/Security%20Operations.md). These topics were meant to be an opportunity for you to gain a foundational understanding of the Google Cloud platform and some of its services and how to secure them. If you're interested in learning more, check out my other courses on [Hybrid Cloud](../../Skills/Network%20and%20System%20Administration/Hybrid%20Cloud.md) and [Cybersecurity](../../Topics/Cybersecurity.md) as well as a day in the life of a security engineer. I appreciate you taking the time to complete this course, and I hope you learned some valuable information. See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (3), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1), [Security Operations](../../Skills/Artificial%20Intelligence%20(AI)/Security%20Operations.md) (1), [Hybrid Cloud](../../Skills/Network%20and%20System%20Administration/Hybrid%20Cloud.md) (1)
> **Cross-References:** we covered (1)
> **Speakers:** - congratulations (1)


## Instructor

- [Dominique West](../../Instructors/Cloud%20Computing/Dominique%20West.md)

## Skills Covered

- Cloud Security
- Google Cloud Platform (GCP)

## Path Context

### In [Getting Started with Google Cloud](../../Paths/Cloud%20Computing/Learning%20Paths/Getting%20Started%20with%20Google%20Cloud.md)
← [Google Cloud Foundations](Google%20Cloud%20Foundations.md) | **2 of 3** | [Google Cloud Data and Storage Foundations](Google%20Cloud%20Data%20and%20Storage%20Foundations.md) →

## Appears In

- [Getting Started with Google Cloud](../../Paths/Cloud%20Computing/Learning%20Paths/Getting%20Started%20with%20Google%20Cloud.md)

## Related Courses

_Courses sharing skills:_

- [Google Cloud Digital Leader Cert Prep- 5 Trust and Security with Google Cloud](Google%20Cloud%20Digital%20Leader%20Cert%20Prep-%205%20Trust%20and%20Security%20with%20Google%20Cloud.md) — Cloud Security, Google Cloud Platform (GCP)
- [Leveraging Google Cloud Developer and DevOps Tools](Leveraging%20Google%20Cloud%20Developer%20and%20DevOps%20Tools.md) — Google Cloud Platform (GCP)
- [Choosing A Cloud Platform For Developers Aws Azure And Gcp](Choosing%20A%20Cloud%20Platform%20For%20Developers%20Aws%20Azure%20And%20Gcp.md) — Google Cloud Platform (GCP)
- [Google Cloud Data and Storage Foundations](Google%20Cloud%20Data%20and%20Storage%20Foundations.md) — Google Cloud Platform (GCP)
- [Google Cloud Foundations](Google%20Cloud%20Foundations.md) — Google Cloud Platform (GCP)

---

[↑ Back to top](#)