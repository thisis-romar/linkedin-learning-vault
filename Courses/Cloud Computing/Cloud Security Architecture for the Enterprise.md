---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: cloud-security-architecture-for-the-enterprise-24395220
url: "https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220"
duration_minutes: 76
duration: 1h 16m
level: Advanced
updated: 7/11/2025
learners: 38051
skills:
  - Enterprise Architecture
  - Cloud Security
  - Identity and Access Management (IAM)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEXGp8d9-Sy6A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722548383745?e=2147483647&amp;v=beta&amp;t=iZSQ2GYGv6uLrwylOKHSesaJsXFcY5o03UAczmqQc3Y"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Build an Enterprise Cloud Architecture](../../Paths/Cloud%20Computing/Learning%20Paths/Build%20an%20Enterprise%20Cloud%20Architecture.md)'
  - '[Cloud Strategy Professional Certificate by LinkedIn Learning](../../Paths/Cloud%20Computing/Professional%20Certificates/Cloud%20Strategy%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)'
  - '[Identity and Access Management in Azure](../../Paths/Cloud%20Computing/Learning%20Paths/Identity%20and%20Access%20Management%20in%20Azure.md)'
prev_courses:
  - '[Cloud Architecture- Advanced Concepts](Cloud%20Architecture-%20Advanced%20Concepts.md)'
  - '[Cloud Architecture- Design Decisions](Cloud%20Architecture-%20Design%20Decisions.md)'
  - '[Azure for Architects- Security and Identity Management with Microsoft Entra](Azure%20for%20Architects-%20Security%20and%20Identity%20Management%20with%20Microsoft%20Entra.md)'
next_courses:
  - '[Building a Cloud Architecture Diagram](Building%20a%20Cloud%20Architecture%20Diagram.md)'
  - '[Planning a Multicloud Solution (2022)](Planning%20a%20Multicloud%20Solution%20(2022).md)'
  - null
path_nav: '[{"path":"Build an Enterprise Cloud Architecture","position":3,"total":4,"prev":"Cloud Architecture- Advanced Concepts","next":"Building a Cloud Architecture Diagram"},{"path":"Cloud Strategy Professional Certificate by LinkedIn Learning","position":5,"total":9,"prev":"Cloud Architecture- Design Decisions","next":"Planning a Multicloud Solution (2022)"},{"path":"Identity and Access Management in Azure","position":4,"total":4,"prev":"Azure for Architects- Security and Identity Management with Microsoft Entra","next":null}]'
path_count: 3
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/enterprise-architecture
  - skill/cloud-security
  - skill/identity-and-access-management-iam
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Cloud%20Security%20Architecture%20for%20the%20Enterprise.md)

![Cloud Security Architecture for the Enterprise](https://media.licdn.com/dms/image/v2/D560DAQEXGp8d9-Sy6A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722548383745?e=2147483647&amp;v=beta&amp;t=iZSQ2GYGv6uLrwylOKHSesaJsXFcY5o03UAczmqQc3Y)

# Cloud Security Architecture for the Enterprise

> In this course, cybersecurity expert Karl Ots covers the core design pillars of a strong cloud security architecture, taking a vendor-agnostic look at what should be built into a cloud security architecture and why. Karl covers topics that include exploring cloud compliance monitoring solutions, translating existing security architecture into cloud security architecture, constructing custom shared

> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220) | 1h 16m | Advanced | 38K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Importance of cloud security architecture](#importance-of-cloud-security-architecture)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to Cloud Security Architecture**](#1-introduction-to-cloud-security-architecture) (4 videos)
  - [Cloud security architecture components](#cloud-security-architecture-components)
  - [Shared responsibility model](#shared-responsibility-model)
  - [Cloud security frameworks](#cloud-security-frameworks)
  - [Multicloud security architecture](#multicloud-security-architecture)
- [**2. Identity and Access Management**](#2-identity-and-access-management) (6 videos)
  - [Cloud identity providers](#cloud-identity-providers)
  - [Control plane authorization](#control-plane-authorization)
  - [Data plane authorization](#data-plane-authorization)
  - [Cloud permission creep](#cloud-permission-creep)
  - [Cloud Infrastructure Entitlement Management (CIEM)](#cloud-infrastructure-entitlement-management-ciem)
  - [Zero Trust identity architecture](#zero-trust-identity-architecture)
- [**3. Logging and Monitoring**](#3-logging-and-monitoring) (6 videos)
  - [Cloud security posture monitoring](#cloud-security-posture-monitoring)
  - [Cloud-native application protection (CNAPP)](#cloud-native-application-protection-cnapp)
  - [Cloud compliance monitoring](#cloud-compliance-monitoring)
  - [Cloud-native incident management](#cloud-native-incident-management)
  - [Logging and monitoring architecture](#logging-and-monitoring-architecture)
  - [Cloud drift detection](#cloud-drift-detection)
- [**4. Cloud Network Security**](#4-cloud-network-security) (4 videos)
  - [IaaS network controls](#iaas-network-controls)
  - [PaaS network controls](#paas-network-controls)
  - [Zero Trust cloud network security architecture](#zero-trust-cloud-network-security-architecture)
  - [Securing multicloud networks](#securing-multicloud-networks)
- [**5. Communicating Across Teams**](#5-communicating-across-teams) (3 videos)
  - [Effective communication of cloud security designs](#effective-communication-of-cloud-security-designs)
  - [Tailoring technical communication for different stakeholders](#tailoring-technical-communication-for-different-stakeholders)
  - [Documenting architectural decisions](#documenting-architectural-decisions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Learning more about cloud security architecture](#learning-more-about-cloud-security-architecture)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Importance of cloud security architecture](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/importance-of-cloud-security-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/importance-of-cloud-security-architecture?u=76281980&t=0)** - Let me ask you a question. Did you know one of the most common reasons for a data breech are [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) misconfigurations, but you can stay on top of them by building security in your cloud rather than bolting security on your cloud. Hello, I'm Karl Ots. I've helped thousands of people secure their public clouds, and I'd like to help you too. I'll walk you through the core pillars of designing a cloud security architecture in a cloud agnostic way, using examples from all three leading cloud providers. I'll also cover what your cloud security architecture should include and why. This means making sure that you get to a secure state, stay in a secure state, and prove that you're in a secure state. Want to learn more about cloud security architecture? Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (4)
> **Speakers:** - let (1)

#### [What you should know](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/what-you-should-know?u=76281980&t=0)** - [Karl] This course is intended mainly for a security audience. You might be a seasoned security professional who wants a comprehensive picture of the public [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md), but you can also benefit from this course if you are a cloud solution architect looking at improving your security skills. The course covers a wide variety of topics across multiple clouds. To get most out of this course, you should have a working knowledge of at least one major public cloud platform, AWS, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), or [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). You should also have at least beginner-level understanding of key cloud security principles. If you want to take a beginner cloud security course first, check out the Learning [Cloud Computing](../../Topics/Cloud%20Computing.md) Cloud Security course in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (4), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Analogies:** picture (1)
> **Speakers:** - [karl] (1)


### 1. Introduction to Cloud Security Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud security architecture components](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=0)** - [Instructor] Designing your [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) architecture requires a careful balancing act between the brave new world of cloud and the existing internal and external security requirements. On the left side, we have the allure of improvements to the time to market and the low barriers of entry to the so-called shadow cloud. On the right side, we have the longstanding technical debt to update our security requirements from the network paradigm era to the cloud world, and we must also consider the perceptions towards the chief information security [office](../../Skills/Web%20Development/Microsoft%20Office.md). This is not a realistic figure, of course. These weights are not evenly balanced in real world. I would like to get the scale steep towards the requirements on the right, but in many organizations, I see the left side over-weighing the right. If your controls disrupt and slow down the cloud adoption journey, your business and [Application Development](../../Skills/Software%20Development/Application%20Development.md) counterparts might turn to shadow cloud. That is, they will provision their own cloud accounts or subscriptions and even connect them with your existing environment, such as network, identity, and public domains. These differences eventually require a shift in how you implement security architecture. Rather than bolting existing controls, tools, and processes on the cloud workloads, you have an opportunity to build security into the very cloud platform that your workloads are hosted in. The core question you need to answer in your cloud adoption journey will thus be, how can we agree on a security architecture that keeps us both competitive and secure?
>
> **[1:35](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=95)** This brings us to the definition of cloud security architecture. At its core, cloud security architecture is a list of security controls and policies that apply to the [Cloud Computing](../../Topics/Cloud%20Computing.md) platform that you're using. Cloud security architecture can apply to infrastructure, platform, or even [Software as a Service](../../Glossary/Concept/SaaS.md). In this course, we are mostly leaving Software as a Service untouched and rather focused on infrastructure and [Platform as a Service](../../Glossary/Concept/PaaS.md). Controls, sometimes called countermeasures or safeguards, are actions we will take to protect our environment. Examples of controls include which type of encryption needs to be applied to protect our sensitive data or requiring just-in-time access for administrative actions. Policies and standards cover acceptable use of [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md), such as which type of data can you store in the cloud. These controls and policies should be selected based on identified risks to the confidentiality, integrity, and availability of the assets that you are protecting. The role of the architecture is to integrate these sometimes conflicting requirements. Crucially, a cloud security architecture is unique to your organization as it helps you maintain the risk posture that is appropriate to you. Each organization has a different risk environment, posture, and appetite. With a well-defined cloud security architecture, you are able to select a Goldilocks scenario, selecting the right controls to be implemented at the right place at the right cost. To implement a cloud security architecture, conceptualize the required components
>
> **[3:08](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=188)** as reusable and modular architecture components. Landing zone is your secure cloud platform. This is where you enforce security controls to keep your cloud [products](../../Skills/Software%20Development/Microsoft%20Products.md) in their secure state. There can be multiple landing zones in your environment. For example, migrated legacy applications might stay within a centrally managed landing zone within a spoke of centrally managed network. And by contrast, new and experimental workloads might stay within a separate landing zone with more freedom to achieve fast time-to-market objectives, but offering less integration to shared services, such as networks. The secure landing zone components include identity and access management, monitoring, and network controls. Workloads or applications are typically a collection of one or more cloud services, and depending on platform controls, these can be manually provisioned cloud services through the portal or console or instances of internal products. Products are your enterprise's internal artifacts for cloud services. They're pre-configured to include the organization-required controls. Typically, these are [Infrastructure as Code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) artifacts, such as [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Resource Manager templates, CloudFormation templates, or [Terraform](../../Skills/DevOps/Terraform.md) modules. The products should be built following the secure [Software Development](../../Topics/Software%20Development.md) practices, such as code reviews, [Static Application Security Testing](../Cybersecurity/Static%20Application%20Security%20Testing.md), and quality gates. The products can be developed centrally. Typically, that will be the role
>
> **[4:40](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-architecture-components?u=76281980&t=280)** of a cloud center of excellence, but developing these templates can be a federated effort in your organization. If one team has already solved this once, they can contribute these artifacts back to the central repository to be used by others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (7), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (5), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (4), [Software as a service](../../Glossary/Concept/SaaS.md) (2), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Analogies:** such as (5), for example (1)
> **CLI Commands:** terraform (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Shared responsibility model](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=0)** - [Instructor] As with any other paradigm-shifting technology, securing the public cloud is not as simple as extending or replicating existing security controls. There are several technical limitations, such as the changes in the network perimeter or the host-isolation models. Some changes are required because business units and [Application Development](../../Skills/Software%20Development/Application%20Development.md) teams are choosing the cloud due to flexibility, faster time to market, or access to technologies that are not available in existing hosting platforms and technology stacks. This comes with a set of new skills everyone needs to learn across business, development, operations, and security. Some of these new risks, controls, and skills are interchangeable across clouds. But not all clouds are equal, and the cost of implementing each control varies across them. You should carefully evaluate the impact of any changes to your security posture with the introduction of new cloud service providers. These differences eventually require a shift in how you implement security architecture. Rather than bolting existing controls, tools, and processes on top of cloud workloads, you have a unique opportunity to build security into the very platform that workloads are hosted in. To secure a public cloud platform, we need to understand each of them in detail. This requires both upskilling existing information security teams with cloud expertise, and changing the way security responsibilities are assigned to customers and cloud service providers.
>
> **[1:35](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=95)** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) responsibilities are shared across various cloud service models, [software as a service](../../Glossary/Concept/SaaS.md), or [SaaS](../../Glossary/Concept/SaaS.md), [platform as a service](../../Glossary/Concept/PaaS.md), or [PaaS](../../Glossary/Concept/PaaS.md), [infrastructure as a service](../../Glossary/Concept/IaaS.md), [IaaS](../../Glossary/Concept/IaaS.md), and finally on-premises computing, or your own data center. As we move from on-premises to IaaS and further up in the cloud model abstractions, we give up control of configuring and operating said services. As we give up control, the CSP, cloud service provider, assumes that responsibility of securing these services. A common misconception related to cloud security is rooted in incorrectly understanding these shared responsibilities. This can lead to omissions of key security controls, and drastically impact your cloud security architecture. Therefore, I recommend you explicitly map out the shared responsibility of every cloud service you are using. Here's an example using managed [Kubernetes](../../Skills/DevOps/Kubernetes.md) services, such as Amazon EKS, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AKS, or [Google](../../Glossary/Service/Google.md) GKE. These services are partially managed by cloud vendors, but they are not provided as full platform as a service. The cloud service providers are responsible for creating, configuring, and operating the Kubernetes control plane of your Kubernetes environment. This includes Kubernetes API servers, etcd, kube-DNS, and other system components in the kube-system namespace. You are still responsible for significant parts
>
> **[3:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/shared-responsibility-model?u=76281980&t=189)** of your Kubernetes service, such as access control, in-cluster network controls, and patching of virtual machine nodes against vulnerabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (5), [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (3), [Platform as a service](../../Glossary/Concept/PaaS.md) (2), [IaaS](../../Glossary/Concept/IaaS.md) (2), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (1)
> **Env Vars:** csp (1), eks (1), aks (1), gke (1), api (1)
> **Analogies:** such as (3)
> **Speakers:** - [instructor] (1)

#### [Cloud security frameworks](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=0)** - To secure your cloud applications and infrastructure in a structured manner, you need a [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) framework. A cloud security framework consists of architectural design considerations, security policies and controls. Your cloud security framework needs to be consistent with your existing security architecture. Your cloud security framework is heavily influenced by your organization's [Cloud Strategy](../../Skills/Cloud%20Computing/Cloud%20Strategy.md) and governance models. For example, if your cloud strategy is all about enabling innovation and faster time to market, your cloud security framework will need to enable that, and it has to work together with any external requirements, such as from customers or regulators. You will continue to need to meet internal and external compliance requirements. Translating these requirements into controls or moving from periodic to continuous compliance assurance takes time and effort. You may use any existing control frameworks to get started building your own cloud security framework. Some control frameworks include the National Institute of Standards and Technologies Cyber Security Framework, Center for Internet Securities Critical Security Controls, and Cloud Security Alliances, Cloud Controls Matrix. Each of these control frameworks also provides cross-references to many industry or region-specific control frameworks. So it's a good idea to use these control frameworks to understand how your chosen controls mapped
>
> **[1:35](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-frameworks?u=76281980&t=95)** to your existing internal business requirements. But bear in mind that simply following a control framework doesn't mean you are done with security. You need to select the appropriate controls for your cloud security framework according to your organization's risk appetite. The Center for Internet Security or CIS also publishes its benchmarks for the large cloud service providers. While the CIS controls are a general set of recommended best practices, CIS benchmarks are hardening guidelines. The CIS benchmarks for AWS [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) or [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) include recommendations on identity and access management, [Data Security](../../Skills/Data%20Science/Data%20Security.md), logging, monitoring, and networking. As these are consensus built guidelines, you might find that some of the services you would like to secure are not covered. For example, if you want to secure a service that was just released in the latest conference, chances are that there is no CIS benchmark available for that service. The same is true for any major feature chances within existing services. So while these are great guidelines for hardening, you will still need to supplement this to meet your cloud environment and security appetite.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (8), [Cloud Strategy](../../Skills/Cloud%20Computing/Cloud%20Strategy.md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Data Security](../../Skills/Data%20Science/Data%20Security.md) (1)
> **Env Vars:** cis (5), aws (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** aws (1), find (1)
> **UI Navigation:** select the (1)
> **Best Practices:** recommended (1)
> **Speakers:** - to (1)

#### [Multicloud security architecture](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=0)** - [Narrator] Designing security architecture for multi-cloud environments is a complicated challenge. Each cloud is different and some key security controls, such as IAM or networking, are implemented very differently across clouds. So how do you make sure your [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) framework is implemented consistently across each of the clouds you are using? Every cloud implements the specifics of identity and access slightly differently. Your multi-cloud architecture should encapsulate the core tenets of role-based access control. You should look at limiting the scope of human identities and managing the credentials role of both human and non-human identities. On the process side, focus on integration with your existing identity governance. This integration should not just cover joiner and leaver processes, but especially movers. In terms of logging and monitoring, you should choose a monitoring solution that works on your workloads, on your clouds. Be careful here and run specific proofs of concepts to validate you get the depth you need. For cloud incident management, make sure your central incident management covers all your clouds, and not just from a passive log ingestion perspective, but also from the perspective of containment and investigation. [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) could be the technology that brings you the consistent implementation across clouds. The main approach stands true
>
> **[1:33](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/multicloud-security-architecture?u=76281980&t=93)** despite the actual APIs varying across clouds. By standardizing on a multi-[Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) as code approach, such as [Terraform](../../Skills/DevOps/Terraform.md) or Pulumi, you can build consistent expertise across your organization and enforce secure patterns. Policy as code can be another technology that brings you the consistent implementation across clouds. Policy as code allows you to audit and remediate cloud misconfigurations at scale. Be careful with the technology though. Just like with infrastructure as code, the reality is still disconnected as the actual implementation requires you to be cloud specific instead of cloud agnostic. The bright spot here is [Kubernetes](../../Skills/DevOps/Kubernetes.md). There are multiple tools providing consistent Kubernetes policy management specifically. They give you a chance for consistent implementation across multiple clouds.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (3), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2), [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (1), [Terraform](../../Skills/DevOps/Terraform.md) (1)
> **CLI Commands:** make (2), terraform (1)
> **Analogies:** such as (2), just like (1)
> **Warnings:** be careful (2)
> **Env Vars:** iam (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 2. Identity and Access Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud identity providers](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=0)** - [Instructor] One of your core [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) architecture component, or most impactful security controls is identity and access management. Given the nature of public cloud spanning across various services, web portals and APIs, identity and access management is crucial in your cloud security journey. It's also an important topic to address early on as your existing identity and access management tools, processes and organization might require significant change when moving to the cloud. At its core, identity and access management in the cloud is no different from on-premises. We need to consider two areas, authentication and authorization. Let's start with authentication. To authenticate users or even machines, cloud systems rely on identity providers, a cloud identity provider or IDP creates and manages identities in the cloud. These identities can be those of your internal users, applications or systems or your end-users, that is customers. The main difference with the pre-cloud world is that the identities need to be accessed through the internet, not just within your corporate network. In the on-premises world, you'll use technologies like Lightweight Directory Access Protocol, LDAP, or [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md), ad to store your identities. The major cloud providers have their native identity providers. If you're working in a greenfield environment, starting with a native identity provider typically makes sense.
>
> **[1:34](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-identity-providers?u=76281980&t=94)** In most enterprise scenarios however, you'll need to select an identity provider that meets your enterprise needs and mainly integrates with your on-premises identity store. Next, your identity store needs to enable single sign-on or SSO. Cloud Identity providers typically implement Open Id Connect, OIDC or security essential markup language, SAML protocols. Finally, there are a number of controls that you can introduce at the IDP level. One of the most useful ones is multifactor authentication or MFA. Some IDPs allow you to require MFA in a granular level, such as based on risk information or the type of application the identity is attempting to access. Some Native Cloud identity providers include [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md), Azure Active Directory Business to Consumer, Amazon Cognito, and [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Identity. These identity providers allow you to authenticate to the cloud control plane as an administrator or to the cloud application as an end user or even both. Azure Active Directory supports synchronizing and federating your existing users from your on-premises Active Directory. In AWS, you can configure Active Directory as a federated IDP for the Cognito service. In Google Cloud, you can use the directory sync feature to synchronize your on-premises Active Directory users periodically to the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (4), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (3), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (1)
> **Env Vars:** idp (3), mfa (2), ldap (1), sso (1), oidc (1)
> **Prerequisites:** you'll need (1), configure (1)
> **CLI Commands:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Control plane authorization](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=0)** - [Instructor] Now that we have covered authentication in the cloud, let's look at authorization in the cloud. Specifically, let's look at authorizing access to the control plane of your cloud provider. By control plane, I mean the cloud provider's management layer of access. That is access to create, read, update, and delete [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md). Note that this includes access through both the command line interface and the web portal or console. You can think of control plane access as similar to access to the physical data center in terms of privileged access. If a malicious actor gains control plane access, they can manipulate your data, configure firewall rules, and modify your administrative settings. Control plane access is authorized both at the user level as well as cloud service or resource level. User level access control is handled by assigning access policies or roles to users. Roles define permissible actions for anyone assigned to the role. For example, a role might allow you to configure firewall rules of a cloud database service. The cloud service or resource level access is managed by assigning access to the cloud environment. This access management can be very general, such as assigning a policy on an individual cloud service level. Or it can be very broad, such as assigning an access policy that affects the whole organization, account, subscription, or resource group.
>
> **[1:33](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/control-plane-authorization?u=76281980&t=93)** The resulting access decision to allow or deny access is a cumulative decision, combining both user and resource level access control. Let's take a look at this through an example. In this scenario, I have a user called Alice who has the highest privileged access. This will be owner in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) or [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) and root in AWS. And on the right side I have a managed [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) database. Now, what if Alice would want to do something malicious, such as dropping the firewall rules from this database? Even with all her permissions, when she would attempt this, the cloud service level authorization policies would kick in. As the firewall rule drop is something I have already thought about myself, my authorization policies would prevent Alice from performing this action. So remember, you can limit what any user can do with resource account or organization level authorization policies. This is your safety net for cloud, identity, and access management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) (1)
> **Analogies:** such as (3), similar to (1), for example (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### [Data plane authorization](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=0)** - [Instructor] Now, let's look at authorizing access to the data plane of your cloud. By data plane, I mean the content of the cloud resources. The content can be data such as binary files stored in your object storage or database, but the content can also be code or running applications. Data plan authorization covers a variety of authorization methods. In its simplest form, data plane authorization is about creating a link to a static file using a short-lived token. At its most complex form, it's about managing a completely separate access control system within a [Kubernetes](../../Skills/DevOps/Kubernetes.md) cluster hosted in the cloud environment. So data plane access control is about managing access within the workloads themselves. If the control plane access was similar to having access to the physical data center, data plane access is similar to having access inside the [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md). Let's look at the differences between control and data plane access control. First, the target of the access control being inside the resource might make central management or monitoring of that access more difficult. Second, while control plane access is limited to identity principles, or authenticated using the cloud identity provider, data plane access control often circumvents this behavior. Access might be granted using [Tokens](../../Skills/Web%20Development/Tokens.md), keys, connection strings, or even local users. And third, control plane access control can cover a lot of ground using access policies that apply to all resources and users.
>
> **[1:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/data-plane-authorization?u=76281980&t=96)** Data plane access control, however, can seldom be affected with broad access policies. For example, [Databases](../../Skills/Software%20Development/Databases.md) might require role level access grants. Furthermore, control plane access control is suitable for role-based access control, while data plane access control can expand on that to attribute-based access control.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** such as (1), similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Cloud permission creep](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=0)** - [Instructor] With the complexity of cloud identity and access management, a new issue arises, cloud permission creep, that is over-permissioned and unused access. With each cloud service having slightly different access control requirements, it's easy to follow an anti-pattern of adding more permissions until your task can be achieved. Over time, this introduces a creep of cloud permissions. Cloud permission creep can lead to a sprawl of unmanaged system access, over provisioned access to users, and completely unused roles. If you don't maintain these cloud permissions, we can end up in situations like Solorigate or Midnight Blizzard, In the case of Solorigate, the malicious actors were able to use legitimate credentials for their own benefit. Because the system identity access was over-provisioned and unmonitored, the actors were able to piggyback on existing access and move laterally to the cloud control play. Let's look at one approach to manage IAM creep using AirIAM by Chekhov. AirIAM is an open source tool that scans your AWS environment, identifies any other provision or unused credentials, and recommends changes. As it's a [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) tool, you can set it to run continuously and you can even use it to export your existing identity and access management into [Terraform](../../Skills/DevOps/Terraform.md) and move to identity and access management as code. To start, I'm going to scan my AWS account by running the airiam find_unused command.
>
> **[1:43](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=103)** As it's a small demo account, it won't take long to run the scan. And here we are, it found two unused users and two unused roles in my AWS account. I'm going to delete this to limit exposure to my account. In a more complex enterprise environment, I will need to follow this up with a little bit more analysis, communication, and other change management procedures, but the result is the same. I've identified a creep in my cloud credentials and I can take action. Next up, let's look at how to move from a one-time cloud credential creep cleanup to a more programmatic identity and access management as code approach. To do that, I'm going to run the airiam terraform command.
>
> **[2:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-permission-creep?u=76281980&t=152)** Even in my small demo environment, this will take a bit more time. After the command is finished running, we see that it terraformed three users, three roles, and 13 policies, and crucially the connection between them all. I have the results open in my visual studio code. Each identity and access management type has its own terraform configuration file, groups, policies, roles, and users. They're all brought together in the terraform state file. I can store that state file in my [Version Control](../../Skills/Web%20Development/Version%20Control.md), and manage any future changes to my cloud IAM from there. The user's configuration file lists each AWS IAM user, the group memberships, and any IAM policies attached to them. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the configuration files follow the same pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (4), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** iam (4), aws (4), cli (1)
> **CLI Commands:** aws (4), terraform (4)
> **Code Identifiers:** find_unused (1)
> **Tools:** visual studio (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Cloud Infrastructure Entitlement Management (CIEM)](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980&t=0)** - [Instructor] Most cloud environments have hundreds of different roles and a growing number of unused machine identities spanning multiple systems from identity directories to managed [Kubernetes](../../Skills/DevOps/Kubernetes.md) services. As [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) tooling matures, a segment of tooling has emerged to manage cloud permission creep at scale, [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) Entitlement Management, or CIEM for short, according to a 2023 state of cloud permissions risk report by [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), a whopping 88% of permissions in the cloud are assigned to system identities, not humans. And these system identities are notoriously being left unused and unmanaged. Over three quarters of the system identities are dormant. What makes this even more complex is that each cloud works differently and requires a granular approach to understanding effective permissions across multiple levels of system access. This results in excessive permission for humans too. In fact, less than 5% of provision permissions are actually used even every month. There are many different approaches to CIEM, some integrated to cloud-native application protection or privileged access management tools, and there are some CIEM only solutions too. Whether a standalone CIEM or one integrated in your existing suite of cloud security tools, most CIEM provide the following functionality, multi-cloud support, working across cloud service providers
>
> **[1:37](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-infrastructure-entitlement-management-ciem?u=76281980&t=97)** and identity providers, ability to continuously monitor and discover overprovisioned permissions and unused identities, ability to rightsize permissions and remove unused access, and ability to export reports for compliance and assessment purposes. Some of the most used CIEM tools include [Entra](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) Permissions Management, Prisma Cloud, and Tenable CIEM. If you're already using a CIEM app from one of these vendors, it's a good idea to look at their CIEM offering and integrated with your cloud security architecture first.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (3), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Entra](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1)
> **Env Vars:** ciem (9)
> **Speakers:** - [instructor] (1)

#### [Zero Trust identity architecture](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=0)** - [Instructor] The concept of Zero Trust was introduced to our vocabulary well over a decade ago. The motivation was to move away from the perimeter-based [Network Security](../../Skills/Cybersecurity/Network%20Security.md) in favor of more granular access control to growing types of resources. In a nutshell, Zero Trust is about assuming that your network perimeter is breached and adding controls accordingly. This tackles both the complexity of an enterprise cloud network and limits lateral movement attacks. In practice, Zero Trust mandates us to continually authenticate and authorize each request to our cloud resources. Zero Trust architecture combines access control, operational security, and governance. Let's talk about access control first. Zero trust access control combines identity, endpoint, and network security. For each access control policy decision, we need to evaluate the following: authentication, including user credential types and MFA methods, security posture and device compliance used for authentication, and network origin of the initiated authentication attempts. Each of these elements can be enriched with risk information from various threat intelligence sources to make that access control decision with a higher level of confidence. Your operational security organization should analyze the behavior of both successful and unsuccessful authentication attempts. This allows for rapid detection
>
> **[1:33](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=93)** and remediation of threats as they evolve. As Zero Trust brings network and identity closer together, the operational security team will need to be familiar with both. Finally, access should be granted on a procession basis following the principle of least privilege. Note that we should also apply Zero Trust to access control between systems, such as front end application accessing our APIs. In such case, the endpoint evaluation should be replaced by evaluating the cloud service from which the connection is initiated. So you might say that implementing Zero Trust is a continuous journey. In essence, it's about combining network, endpoint, and identity-based security controls. You should continuously validate that your users are authenticated, prompting for credentials or second or third factors of authentication if your risk information so requires. Zero Trust networking also requires you to continuously assess and validate the security posture of those endpoints or [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) from which the access is initiated. And finally, Zero Trust relies heavily on network controls. We'll talk more about this in another video. As part of your [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) architecture, you must consider the entire landscape of your access control across user identities, endpoints, and networks. If your organization is following Zero Trust architecture, the effectiveness of your controls will be different from a perimeter-based approach. You will need to consider new threats, such as users accessing your cloud applications from devices
>
> **[3:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-identity-architecture?u=76281980&t=189)** or locations that are not owned by your organization. Zero Trust tooling can come in many flavors. For identity-first vendors, Zero Trust is often implemented as additional evaluation of identity risk for each session. By contrast, in an endpoint-first solution, an agent is installed on the endpoint, allowing for granular access control based on the health and behavior of the endpoint. Identity-centric approach relies on integration with the identity provider and the applications used. Often, an organization implements a cloud access security broker or CASB to provide a secure single sign-on and enforce security policies across [Software as a Service](../../Glossary/Concept/SaaS.md) applications. CASB solutions can also include detection of new unsanctioned applications. More recently, CASB solutions have also extended the shadow IT detection capability to [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) applications. Endpoint-centric tooling typically filters all traffic from the endpoint through a secure web gateway or SWG. This allows for network level control and data loss prevention. Your organization can also implement a combination of both approaches and add access control from outside of the trusted network to private applications. Some analysts and vendors call this approach establishing a secure service edge or SASE.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (2), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (1), [Software as a service](../../Glossary/Concept/SaaS.md) (1), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **Env Vars:** casb (3), mfa (1), swg (1), sase (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. Logging and Monitoring

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud security posture monitoring](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=0)** - [Instructor] Traditionally, your applications are hosted in an infrastructure, with a varying quality and access to monitoring signals. When you host your own infrastructure, you have the opportunity to combine data across your hosting environment. This could include closed-circuit TV feeds, physical access logs in and out of the data center building, heating, venting, and air conditioning systems. These could also include health information about the [Hardware](../../Topics/Hardware.md), operating systems, and applications. In the creating monitoring data from all these systems would be costly, but not impossible. The volume of these signals grow exponentially with the move to a public cloud. In the cloud, you will be faced with a massive number of signals to monitor. Identifying any security incidents or events would be like trying to find a needle in a haystack. Everything in the cloud is software-defined. You have signals available to you from across your hosting platform. Luckily, the signals are often available to you in a standardized manner, making it easier to correlate across signal types. And what's more, as the cloud provider is responsible for the physical and host security, they provide you with the reports with pre-correlated data and, in some cases, even alerts. The cloud provider is also constantly analyzing any malicious activity against their infrastructure. This lets them provide you with anonymized security intelligence information, even when your environment is not yet being attacked. All this makes monitoring [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) a daunting task. Let's look at how to structure this
>
> **[1:34](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=94)** in a more approachable manner using cloud security posture management. At its core, monitoring cloud security posture is about monitoring the residual risk in your cloud environment. This includes workloads, such as containers or [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), scanned against vulnerabilities. Cloud service misconfigurations. And finally, how the environment aligns with compliance frameworks and standards. [Cybersecurity](../../Topics/Cybersecurity.md) and Infrastructure Security Agency, CISA, defines cloud security posture management in the following way. Cloud security posture management is a continuous process of monitoring a cloud environment by identifying, alerting on, and mitigating cloud vulnerabilities. There are a number of cloud security posture management tools out there, both from third parties and native tools from each of the cloud providers. Here's what they all have in common, though. First, they scan your cloud environment continuously. They are usually instrumented with your cloud automation accounts with FREDA rights or similar to at least your control plane. This means that your coverage is wider compared to an agent-based model. They also help to monitor any drift to your security posture. Drift is a negative change from the known good configuration. Remember, you get to the known good configuration by shifting security left and ensuring your [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) deployments pass your security tests such infrastructure security, [Static Application Security Testing](../Cybersecurity/Static%20Application%20Security%20Testing.md). And finally, CSPM can either automatically mitigate set drift by playbooks that you customize,
>
> **[3:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=189)** or in case human intervention is needed, they can even integrate with your SIEM tools to create incidents. Let's take a look at the [AWS Security](../../Skills/Cloud%20Computing/AWS%20Security.md) Hub, a native, or first-party, cloud security posture management tool. It collects data from various control plane sources and runs a security configuration scan across all my resources. On the left, I see how my accounts perform against security best practices and standards, such as the CIS benchmark. On the right, I see the resources with the most failed security checks. I'll select the AWS bucket that is the second on the list. I'm presented with a list of security findings that are open for this particular storage bucket. There's one marked with high severity. Let's open that one. By opening this finding, we can learn more about it. There's an AWS severity rating, timestamp on when this first appeared, and a description on the failing condition of this security check. In this case, my AWS S3 bucket has a false value for the restrict public bucket setting. That is likely to expose my data to be available to the public, which is indeed a high-severity finding. Scrolling down, we have a link to the AWS documentation to learn more about how to mitigate this finding. So we've seen how the Security Hub in AWS acts as a cloud security posture monitoring tool. It combines information from various control plane sources
>
> **[4:44](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-security-posture-monitoring?u=76281980&t=284)** in an agentless manner. We've also seen how it can help us focus our security mitigation efforts by highlighting the cloud resources that need the most attention, and we've also seen how we can learn more about specific action we need to take in order to mitigate these findings. We could mitigate these findings manually, but we can also automate that mitigation of the most common or most impactful misconfigurations. If you are following the cloud security architecture presented in this course, your resources are already deployed as infrastructure as code. Chances are then that this is a case of a security drift after the deployment of a known good configuration of an S3 bucket. In that case, it'll be an isolated incident, but it could also be something you haven't previously considered. In that case, it makes sense for you to mitigate this finding at the source, the internal product S3 bucket infrastructure as code template.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (9), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (3), [Hardware](../../Topics/Hardware.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **Env Vars:** aws (6), cisa (1), freda (1), cspm (1), siem (1)
> **CLI Commands:** aws (6), find (1)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** such as (2), similar to (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Cloud-native application protection (CNAPP)](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=0)** - [Instructor] One of the key decisions of your [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) monitoring architecture is how you approach monitoring your application workloads. Cloud workloads are applications hosted in [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) or containers. Cloud security posture management tools are API based and are not sufficient to protect them as they rely on control plane access to your cloud environment. To protect your workloads, you need to gain visibility inside of the virtual machines or containers themselves. This is often done by installing a monitoring agent into the workload. The approach is why we have limited runtime visibility to most [Platform as a Service](../../Glossary/Concept/PaaS.md) or serverless workloads as they are often multi-tenant and don't allow installation of agents. Cloud workload monitoring and protection tools provide vulnerability management, anti-malware, and even benchmarks and workload hardening of our workloads. Just like cloud security posture management tools, workload protection tools can be either from third parties or natively from your cloud provider. The benefit of using a third-party cloud workload protection platform is that you might be able to reuse a lot of your existing scanning and monitoring infrastructure, processes, and people. The downside of that approach is that they might not be built for the elastic and ephemeral nature of cloud workloads. This means that a traditional agent-based monitoring tool might not [react](../../Skills/Web%20Development/React.js.md) quickly enough to install an agent
>
> **[1:34](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=94)** and provide security information from a container workload that is deleted mere minutes after it is created. Here are some of the common tools in this space. First, we have the first-party tooling from the cloud providers themselves. For example, [Microsoft Defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md), AWS GuardDuty, or [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Security Command Center. The benefit here is that the tools are integrated natively with the cloud security posture management, so you get broad coverage and integration in the same package. Some third-party tools provide more in-depth monitoring, though. Next, we have agent-based tools from familiar vendors, such as Trend Micro, Palo Alto, and Check Point. And last, we have the so-called cloud native application protection platforms. Cloud native application protection platforms provide end-to-end cloud [Application Security](../../Skills/Cybersecurity/Application%20Security.md). CNAPP solutions integrate previously siloed cloud security components into a single pane of glass, securing applications from code to cloud. This includes [Infrastructure as Code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) security scanning and drift detection, but also integration with other application security and [DevOps Tools](../../Skills/Software%20Development/DevOps%20Tools.md). CNAPP integrates workload and posture management, exposing attack paths across control and data panes. And finally, CNAPP integrates with identity providers, providing a view on cloud permission creep. The entitlement management part of CNAPP discovers overprovisioned permissions and unused machine identities.
>
> **[3:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-application-protection-cnapp?u=76281980&t=189)** CNAPP vendors are generally twofold. Some established first and third-party vendors, such as [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) and Palo Alto, offer all of the capabilities through the same contract. And so-called cloud native vendors, such as Aqua, Lacework or [Wiz.io](https://Wiz.io), offer first-to-market individual services, but may lack critical integrations or enterprise readiness. As always, your individual tooling ecosystem and threat landscape will dictate which tools are the best fit for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (5), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (2), [Application Security](../../Skills/Cybersecurity/Application%20Security.md) (2), [Platform as a service](../../Glossary/Concept/PaaS.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1)
> **Env Vars:** cnapp (5), api (1), aws (1)
> **Analogies:** such as (3), just like (1), for example (1)
> **CLI Commands:** aws (1)
> **URLs:** [wiz.io](https://wiz.io) (1)
> **Definitions:** means that (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Cloud compliance monitoring](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=0)** - [Narrator] Another core component of your [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) architecture is the ability to prove that your security posture really implements the security controls required by your cloud security framework. In your cloud security framework, you defined which security controls to implement in order to meet your compliance requirements. Now it's time to bring these two worlds together. As we've already established, cloud security posture management tools are continuously assessing the security state of your cloud environment. This means that you already have the data you need to assess the compliance state of your cloud environment. It's in your landing zone. Performing an internal or external audit or assessing your compliance state is now a matter of correlating and mapping these continuous scans with your compliance requirements. While you can certainly do this manually using spreadsheets, using the right tools, you can also automate this and you should. Cloud security posture management [Dashboards](../../Skills/Data%20Science/Dashboards.md) often include compliance against industry standard frameworks. These can be also further customized to meet your compliance requirements out of the box. Chances are that your cloud security posture management tooling already supports some compliance reporting. Typically, you won't select a separate tool for cloud compliance monitoring, but rather you'll include the compliance capabilities as part of the requirements for selecting your cloud security posture management tooling. There is one crucial caveat though. If your cloud security posture management tool reports a hundred percent compliance against your standards,
>
> **[1:34](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-compliance-monitoring?u=76281980&t=94)** you need to set this number in context. Without knowing how many of your cloud resources are not covered within these reports, you are effectively only seeing the tip of the proverbial iceberg and you don't have a complete picture of the potential risks. I often see enterprises combining the use of cloud security posture management compliance dashboards with policy enforcement native to the cloud platform they are using. You can use the native security policy engine to enforce controls in a software defined manner. This is called compliance as code and brings with it a plethora of [Version Control](../../Skills/Web%20Development/Version%20Control.md) benefits. This can be implemented using [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) policies, AWS service control policies, [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md)'s organization policies or [Kubernetes](../../Skills/DevOps/Kubernetes.md) policies. It's up to you to draw the line between automatic remediation of misconfigurations and proactive enforcement of compliance using policy as code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (9), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (2), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Definitions:** means that (1), is called (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Analogies:** picture (1)
> **Warnings:** caveat (1)
> **Speakers:** - [narrator] (1)

#### [Cloud-native incident management](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=0)** - [Narrator] Regardless of the security posture of your cloud environment, you will sooner or later need to handle security incidents. Before looking at cloud specific incident management, let's take a brief refresher on how the National Institute of Standards and Technologies defines the security incident management process. The preparation phase of the process is all about preventing incidents by implementing security controls and hardening our workloads. This phase also includes preparing to handle incidents through well-defined processes and forensic tools for incident analysis. Secondly, we have the detection and analysis phase, which includes detecting active incidents. This covers both monitoring of our own environment as well as any threat intelligence feeds. Third, in the containment, eradication and recovery phase, the security incidents are mitigated. and finally, the incident is analyzed and reported in the post incident activity phase. Any lessons learned are implemented to improve the security posture. In the preparation phase for cloud, you should configure your identity and access management to support the work of incident responders and forensic analysts. This can be as simple as pre creating a role that they will assume in case of an incident, or this can be something more elaborate, such as creating an organizational unit with isolated log stores, security policies, and so on. This is all about making sure you have processes and tools in place for the recovery phase. The cloud detection phase is all about tapping in to
>
> **[1:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=96)** the monitoring signals from your cloud environment and workloads. In this phase, you instrument the workloads, collect all the events and logs to a central location, and finally triage them. In case an incident needs to be raised, you would send out alerts to your security incident and event management platform and initiate your playbook to contain the incident. In the cloud containment phase, you start by activating your [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) roles. From the operational perspective, you would next correlate logs from multiple sources to determine the extent of the incident. You will then follow this by isolating the exposed workload such as by placing restrictive [Network Security](../../Skills/Cybersecurity/Network%20Security.md) group rules and taking the virtual machine snapshots for analysis. You might also restrict changes in the environment by setting in place organization level policies or resource logs. In the post-incident phase, cloud is no different from your previous hosting platforms. You will need to prepare a follow-up report and determine the root cause. If required, such as in a case of a breach of private data, you would also communicate about the incident to stakeholders and regulators outside of your organization. Finally, you will gather lessons learned and implement changes where necessary. As part of our [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) architecture, we need to make conscious choices on what do we log and how do we retain that information. With the sheer volume of signals, these choices can be complex. It's not all on our shoulders as cloud consumers though. The default retention times and verbosity are improving
>
> **[3:11](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-native-incident-management?u=76281980&t=191)** as cloud service providers improve their own out of the box security. Introducing a cloud forensics capability requires you to also instrument ways for providing your forensic teams access to the impacted environment. This break the glass access should be available for both control and data panes. And finally, these new approaches need to be integrated with your tooling, whether it is privileged access management, threat detection, or security incident management. This is also the perfect use case for applying [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (1), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1), [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **Analogies:** such as (3)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### [Logging and monitoring architecture](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=0)** - [Instructor] With the various logging and monitoring requirements comes a lot of complexity. As part of your [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) architecture, you will also need to consider the centralized logging architecture. There are a number of log store architecture properties that you need to consider. The first is access control. Who needs access to these logs? Is the access limited only to your centralized security and operations team, or perhaps the application developers and site reliability engineers need to have access too? Or finally, are there requirements to grant access to your business, such as marketing or sales? Next up, we have retention and data allocation requirements. You might have a very specific audit log-retention policy set by your compliance requirements, but not all data needs to be retained as long as your audit logs. Depending on the log storage solution that you are using, you might even need to create a log storage per retention time type, or per cloud service location that you're using. This might heavily impact the complexity of your cloud footprint. In certain regulatory environments, you might need to store specific logs in a separate log storage instead of a centralized one globally. As both storage and data transfer incur costs in the cloud world, you need to find a balance between what is useful and what is just nice to have. You might even end up storing your data in duplicates, initially within the cloud environment close to the workload, and in another location for long-term storage. That other location might be a cold block storage or even outside of your cloud altogether.
>
> **[1:36](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=96)** The cloud logs also need to be integrated with your cloud security posture management tools, or CSPM. If you are using a cloud-native CSPM, such as [Microsoft Defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md), you will find that the native log store solutions, such as log analytics workspace, are integrated with the native CSPM solutions. Both AWS and GCP also offer native integration across log stores and monitoring solutions. However, if your CSPM is not natively integrated, you will need to take data transfer into account. These experts can both create dependencies and additional costs for you. Keep those dependencies in mind in case the connection between your CSPM and your cloud environment is intermittently down. Let's look at one way to design a centralized logging architecture in the cloud. In this example, the centralized log is deployed to a separate subscription or account. This enables granular access control, providing access to the centralized security team for security posture management, as well as security incident management purposes. This centralized log store is then configured to ingest control plane logs from sources, such as identity store, infrastructure logs, control plane APIs, and workload protection logs. Access control and log retention are set separately for the centralized log store and application specific log stores, while key platform and infrastructure logs are stored in centralized log store. This approach supports more variables logging
>
> **[3:10](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/logging-and-monitoring-architecture?u=76281980&t=190)** through the usage of subscription specific log stores for each application. Your security, incident, and event management tool can then consume these logs in real time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (2), [Microsoft Defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md) (1)
> **Env Vars:** cspm (5), aws (1), gcp (1)
> **Analogies:** such as (4)
> **CLI Commands:** find (2), aws (1)
> **Speakers:** - [instructor] (1)

#### [Cloud drift detection](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=0)** - [Instructor] So you have defined and implemented security guardrails throughout your cloud, and deployed your applications using standardized [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) templates that have been reviewed from the security perspective. Can you now [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) assured that your apps stay secure? Unfortunately, no. In practice, many teams see that deployed cloud applications change over time. This results in drift between the desired state defined in the infrastructure as code templates and reality. Cloud configuration drift will at best cause gaps in your [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) and compliance. More worryingly, drift can erode your security posture and create new threats for your cloud environment. Drift can even be a sign of an intrusion that is already taking place. Your [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) architecture should have controls in place to prevent, detect, and manage cloud configuration drift. Ideally, you can manage configuration drift by implementing robust best practices of never deploying any changes through human interaction and enforcing infrastructure as code across your cloud estate. In addition to policies as code and locking down resource management, this means removing human right access altogether, and not allowing any exceptions. In practice, this might prove difficult. If your team is able to stay disciplined and only deploy immutable infrastructure that cannot be changed post-deployment, you are able to avoid drift altogether.
>
> **[1:34](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=94)** In more diverse environments, most teams might feel confident their drift prevention is iron tight on crown jewels or production environments only. But for the rest of the cloud, they will implement drift detection tooling to identify and remediate cloud configuration drift. There are a few different types of drift detection tools. Cloud providers approach drift detection in their own ways. AWS implements drift detection natively against their cloud formation stacks. [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) provides additional tooling for drift detection through policies and resource logs, and [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) integrates [GitHub](../../Skills/Software%20Development/GitHub.md)'s best practices with some specialized workloads, such as [Vertex](../../Skills/Software%20Development/Vertex.md) AI and [Google](../../Glossary/Service/Google.md) [Kubernetes](../../Skills/DevOps/Kubernetes.md) Engine. Infrastructure as code providers, such as [Terraform](../../Skills/DevOps/Terraform.md) or Pulumi provide a multi-cloud functionality similar to AWS CloudFormation's Drift Detection, where they compare the deployed resources to the desired state in the infrastructure as code template, stored in a central source of truth. And some cloud security vendors, such as Checkmarx, combine their infrastructure as code scanning capabilities with state comparison. Finally, specialized workloads, such as container orchestrator platforms have their own tooling. You will find that mature teams operating Kubernetes clusters manage configuration drift by implementing GitOps. Simply put, GitOps is a practice of making all changes to the live environment through a centrally-managed configuration repository.
>
> **[3:09](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/cloud-drift-detection?u=76281980&t=189)** In the Kubernetes space, the main tooling for implementing GitOps are Argo and [Flux](../../Glossary/Tool/Flux.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (6), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (2), [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) (1)
> **Analogies:** such as (4), similar to (1)
> **CLI Commands:** aws (2), terraform (1), find (1)
> **Env Vars:** aws (2)
> **Tools:** github (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Cloud Network Security

[↑ Back to Table of Contents](#table-of-contents)

#### [IaaS network controls](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=0)** - [Instructor] To compare on-premises and cloud networking, we need to look back at the shared responsibility model and how that applies to networking. When you manage your own network, you are responsible for every security control, starting from Layer 1 of the OSI model, that is, the physical layer, including network interfaces, hubs, and switches. In the cloud world, both Layer 1 and Layer 2 are completely opaque and managed by the CSP. Your responsibility starts from Layer 3, which is the network layer. When it comes to [Infrastructure as a Service](../../Glossary/Concept/IaaS.md), you are responsible for [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) and [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). In an on-premises environment, you are responsible for protecting your data center network against Layer 2 attacks, such as port scanning and denial of service. In the cloud world, the cloud service provider is responsible for setting up network flashers and protecting you from these types of attacks. When it comes to Layer 4 and Layer 7, transport and application layers respectively, you have more options. You can either use a native solution from your cloud service provider, or you can also bring in a network virtual appliance. From the management and governance perspective, cloud networking is different from on-premises too. All of the network resources that are available to us are software-defined. This means that setting up a new network is a matter of deploying [Infrastructure as Code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md). Your existing change management processes might have to be revised to meet this new world. Additionally, the physical controls
>
> **[1:35](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=95)** are all in the hands of the cloud service provider. This means that you cannot protect your network using physical controls at all. Quite contrary, anyone with the appropriate IAM role might have the power to destroy your network resources, similarly to having unlimited physical access to your on-premises network. you can control some landing zones centrally, but the self-service and software defined nature of the cloud requires you to take a more federated approach. Instead of trusting a centralized network perimeter, you need to embrace microsegmentation. Another key difference is the decoupling of the network and compute life cycles. This leads to having to make compromises in terms of self-service support for the workload development teams. Do you want to keep being prescriptive in the network design while limiting their time to market? Or do you provide them with some variant of self-service. To estimate time to market, consider both the design work for setting up the network, assigning IP addresses, building the hub and spoke model, and so on, as well as speed of ramping up new services. Virtual networks or VPCs enable connectivity across the cloud, the internet and organizational network. Each virtual network is isolated from other virtual networks by default. Enterprise virtual networks can be connected to each other to enable resources in virtual networks to communicate with each other. You might choose to grant direct IAM access to your [Application Development](../../Skills/Software%20Development/Application%20Development.md) team to a subnet of a virtual network, which you have pre-configured.
>
> **[3:07](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/iaas-network-controls?u=76281980&t=187)** That way, they can freely deploy new workloads there as long as they stay within the predefined size limits, and you will also stay in control of any external or cross-virtual network settings. And finally, you can continue to manage traffic using existing network compliancies as long as your application development teams stay within Infrastructure as a Service. This is a feasible approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Infrastructure as a service](../../Glossary/Concept/IaaS.md) (2), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (2), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (1)
> **Env Vars:** iam (2), osi (1), csp (1)
> **Definitions:** means that (2), is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [PaaS network controls](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/paas-network-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/paas-network-controls?u=76281980&t=0)** - [Instructor] Infrastructure and [platform as a service](../../Glossary/Concept/PaaS.md) networking share a number of common properties. They are both based on software defined networking on top of the same physical [Hardware](../../Topics/Hardware.md), managed by the cloud service providers. However, platform as a service networking does not support the same familiar mental models as infrastructure, as a service networking. While you can continue to work in [infrastructure as a service](../../Glossary/Concept/IaaS.md), more or less the same way as you can on your own premise's networks, platform as a service networking might seem more limiting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Platform as a service](../../Glossary/Concept/PaaS.md) (2), [Hardware](../../Topics/Hardware.md) (1)
> **Speakers:** - [instructor] (1)

#### [Zero Trust cloud network security architecture](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=0)** - [Instructor] As we have learned, the Zero Trust model drives the network architecture into a more federated approach. This is where the Zero Trust network architecture reenters the stage. As established when we discussed Zero Trust from the identity perspective, building a Zero Trust architecture is a continuous effort and it combines network, endpoint, and identity-based controls for a [Real-Time](../../Skills/Database%20Management/Real-Time.md) risk evaluation. The software-defined approach facilities also noble approaches to [Network Security](../../Skills/Cybersecurity/Network%20Security.md) processes, such as implementing firewall rule changes as pull requests to [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) templates instead of [IT Service Management](../../Skills/Network%20and%20System%20Administration/IT%20Service%20Management.md) tickets. You can approach cloud network security from a platform perspective or from the perspective of building network security controls into your infrastructure as code [products](../../Skills/Software%20Development/Microsoft%20Products.md). The following principles help you set up your cloud network architecture in either case. You should assume your cloud network to be hostile, either due to misconfigurations, drift, or other threat factors. As such, you should not place any trust into the network connection itself, and always add explicit authentication and encryption in transit to all connections. You should also enforce these settings by policies to prevent any changes to your network architecture across the lifecycle. Remember, if a cloud administrator gains access to your control pane, they might have access to remove or change your cloud network controls.
>
> **[1:35](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=95)** And finally, you should add further granularity to your network segmentation. You can segment each workload into their own micro-segment with their own network security rules for inbound and outbound traffic. The federated networking model lends itself very well for a micro-segmentation approach. As all networks in the cloud are software-defined and can be built as infrastructure as code, the cost of implementing changes and building more granular segmentation is relatively low. Your workload choices may drive your choice of micro-segmentation tooling. If you're mostly staying in [infrastructure as a service](../../Glossary/Concept/IaaS.md), using a virtual network appliance of a next-generation firewall from the cloud provider's marketplace is likely a good choice. If your workloads are mostly hosted in [Kubernetes](../../Skills/DevOps/Kubernetes.md) platforms, you will likely implement micro-segmentation using technologies, such as eBPF. eBPF is a kernel-level network security and observability technology. Popular eBPF network segmentation tools include Cilium and Calico. For workloads across the hosting models, defining native virtual networks or virtual [Private Clouds](../../Skills/Cloud%20Computing/Private%20Clouds.md) as infrastructure as code is the most all-encompassing solution. You will likely end up using a combination of all of these throughout your cloud journey. The National Institute of Standards and Technologies has published a special publication on Zero Trust architecture. I recommend you look at this special publication and include the recommended changes in your journey
>
> **[3:07](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/zero-trust-cloud-network-security-architecture?u=76281980&t=187)** towards Zero Trust. Another excellent vendor-neutral resource for Zero Trust is the "Zero Trust Maturity Model" by the [Cybersecurity](../../Topics/Cybersecurity.md) and Infrastructure Security Agency. Their Maturity Model can be used to assess the existing environment or build a measurable roadmap towards Zero Trust architecture. The Maturity Model extends our previous definition of Zero Trust being a combination of identity devices and networking by adding application and [Data Security](../../Skills/Data%20Science/Data%20Security.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (5), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (4), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [IT Service Management](../../Skills/Network%20and%20System%20Administration/IT%20Service%20Management.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Code Identifiers:** ebpf (3)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Cross-References:** we discussed (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Securing multicloud networks](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=0)** - [Instructor] Each cloud provider has their own networking stack, [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) options, and security controls. When designing a multi-cloud network architecture, you should think of them as separate data centers with separate technologies. Isolation across virtual networks is slightly different across AWS, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) and GCP. Especially [Platform as a Service](../../Glossary/Concept/PaaS.md) networking behaves very differently. The common denominator is the [Infrastructure as a Service](../../Glossary/Concept/IaaS.md) networking, which is what we are focusing on here. On Infrastructure as a Service networking, you'll want to design a network architecture that is consistent across all your clouds and allows you to use the same network controls such as firewall appliances across your cloud estate. At the same time, you'll want to be careful on avoiding unnecessary cloud egress costs or additional latency. In addition to the central network architecture, you'll need to have specialized network expertise for each of the clouds to ensure consistent implementation of network controls. Think of this as centralizing the network architecture at the hub level and delegating the implementation of each micro segment to the network specialists of each of the clouds. You can take this idea even further and delegate the implementation of the network control to workload specialists, provided that your network architecture is modular enough. Let's look at north-south traffic from your on-premises data center to the cloud. We typically implement this by using
>
> **[1:33](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=93)** a private dedicated connection between our on-premises network and the cloud provider. Think of it is as a list line or [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) circuit. This traffic does not pass through the internet. The name of this MPLS connection in Azure is ExpressRoute. In AWS, it's called Direct Connect. And in [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), it's Interconnect. Typically, we implement this by extending our on-premises network to a co-location facility that has a direct connection to multiple cloud providers. This centralizes our network edge and allows us to add more clouds as we go. While it may be tempting to simply extend your entire SD van to the cloud, be careful as not to break the trust boundaries of either. Your on-premises network architecture was built for different use cases and threat model in mind. If combined without proper planning, both the cloud network can become an attack vector for your on-premises network, and the on-premises network can be the same for your cloud network. Next, let's look at the east-west traffic from one cloud to another. For example, if you have an application in AWS that is calling an API endpoint in GCP, how do you connect the two? You have options. Either you go back to and from the MPLS circuits using on-premises as your hub, or you can connect directly across the clouds through a VPN. The former approach on the left of your screen is a more centralized approach. It allows you to maximize your governance
>
> **[3:05](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/securing-multi-cloud-networks?u=76281980&t=185)** and control at the hub, but there may be some additional latency for this approach. The latter approach on the right provides a more direct access to the workloads, but it's more complex to manage at scale. If you expect to have multiple workloads that will need cross-cloud connectivity, I would recommend you go for the centralized approach on the left. For north-south traffic perspective, you should also consider traffic to and from the internet. For northbound traffic from the cloud to the internet, you need to make a design choice of how do you interject your firewalls, [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) and data loss prevention controls. Will you exit from on-premises only or extend your controls from on-premises to the cloud too? For southbound traffic from the internet to the cloud, the options are similar, to centralize or to federate. For visibility reasons, it's worth standardizing on a solution such as DDoS protection or web application firewall. I often see enterprises using controls that are consistent across the clouds, but not necessarily the same that are used on premises. You will need to carefully take cloud egress costs into account here too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (3), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Infrastructure as a service](../../Glossary/Concept/IaaS.md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Platform as a service](../../Glossary/Concept/PaaS.md) (1)
> **Env Vars:** aws (3), mpls (3), gcp (2), api (1), vpn (1)
> **CLI Commands:** aws (3), make (1)
> **Analogies:** such as (2), for example (1)
> **Warnings:** be careful (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)


### 5. Communicating Across Teams

[↑ Back to Table of Contents](#table-of-contents)

#### [Effective communication of cloud security designs](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=0)** - [Instructor] Communicating a [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) architecture can make or break the program. Good documentation translates complex technical topics into broadly understandable artifacts, making sure implementation teams are aligned towards a common goal. Clean documentation also supports architectural design decisions, ensuring they are made in time and without blocking the implementation. When the design decisions are made in the context of the whole architecture, you can make sure all requirements are met, not only the security ones. When you communicate your architecture design effectively, you align stakeholders and bridge the gap between technical teams, stakeholders, and decision makers. And finally, communication reduces project risk. Good architecture documents do not hide complexities, but call them out. Many security design decisions have a direct impact on the capacity, deliverables, and timeline of multiple cloud implementation teams. If there are conflicts in the requirements, they can be laid out and addressed early on. Let's take a look at this landing zone reference architecture design diagram from [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). A landing zone is a complicated concept. It covers many domains such as identity and access management, resource hierarchy, and networking. If you were to fit all those dimensions into the same diagram, you'll need virtual reality glasses to make heads or tails of it. This diagram focuses on infrastructure as service workloads with [Hybrid Cloud](../../Skills/Network%20and%20System%20Administration/Hybrid%20Cloud.md) connectivity to the on-premises network
>
> **[1:34](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/effective-communication-of-cloud-security-designs?u=76281980&t=94)** and another public cloud. By removing platform as a services from the picture, we drastically reduce the complexity of this diagram. The diagram focuses on networking, but does not go into the details of address spaces [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) or firewall rules. The reader can focus on what's important, the big picture. Upon reading this, we see that the shared VPC is connected across four projects, and we understand how the individual projects can communicate with each other using shared VVC networks. From the landing zone perspective, logging and monitoring our key elements, cloud audit logs, firewall rules, logging, and VPC flow logs are called out in the diagram, but without configuration specifics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Hybrid Cloud](../../Skills/Network%20and%20System%20Administration/Hybrid%20Cloud.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **CLI Commands:** make (3)
> **Env Vars:** vpc (2), vvc (1)
> **Analogies:** picture (2), such as (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Tailoring technical communication for different stakeholders](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=0)** - [Instructor] Any good communication has to be empathetic. That means you need to understand your audience to get your point across. Not everyone is working full-time in the cloud project, nor does everyone know either the cloud or the security terminology. This is not the time to show off your skills, or confuse everyone with an alphabet soup of acronyms. You should always use simple language, and explain the difference between the technology limitations and your design choices. Clearly call out when any design decision differs from on-premises or your existing security architecture, and provide proactive commentary on why that is the case. And whenever you write documentation, you should write it in a way that is understandable, not just to yourself and the current team, but also to completely new stakeholders that may join next year. When you communicate to other security teams that have existing operational responsibilities, keep in mind that their capacity to make changes may be limited by outside factors. Engage with them early on and share your plans openly. In some cases, you may even need to involve vendor management. Some teams may be impacted more than others. Your design choices of how you integrate with existing identity and access management processes will directly impact how heavily you need to involve these teams. For example, integrating with an existing privileged access management tool may need to coordinate closely with the current team. But if you are proposing to use a cloud native solution,
>
> **[1:34](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/tailoring-technical-communication-for-different-stakeholders?u=76281980&t=94)** you may be able to simply take the existing implementation as a set of requirements for your design. Quite often, incident management teams will have a clearly defined onboarding process for new services. If you will onboard the cloud log sources into the existing incident management platform, the experience may be very straightforward. They may even have a template for you to use. For example, if your organization has already onboarded your cloud identity provider under incident management, chances are you may be able to use those playbooks as is. That is, if you're able to enforce the usage of that same identity provider across your cloud.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Best Practices:** you should always (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Documenting architectural decisions](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=0)** - [Instructor] As a [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) architect, you'll likely be asked to prepare documentation to support architectural decisions. An architectural decision record is a key communication tool in cloud security programs. The ADR documents important decisions in a way that is transparent, traceable and actionable, especially for multi-stakeholder environments. It's important to note that ADRs are not a tool to document past actions, but a specific set of tools to facilitate decision making during the cloud program, the ADR title should be descriptive and self-contained, and the ADR should clearly articulate the context. Why is this decision needed? What are the implications to the program timeline, business or security if this decision is not taken? What are the alternatives being considered? And crucially, what is the recommended option? What are the trade-offs between the options and how is security affected by them? Be sure to include any other architecturally significant requirements such as cost and maintainability. Be clear and specific on the actual choice being recommended. Here, you should use more detailed language that is specific enough to provide design guidance for implementation. If you have produced additional diagrams for the implementation details, link to a version controlled artifact of them here. Finally, call out all the decision makers for the decision. Who were involved in the preparation of the decision and who approved it.
>
> **[1:32](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/documenting-architectural-decisions?u=76281980&t=92)** If there are any caveats such as cost limitations or dependencies to vendor roadmap, call out the ones that made an impact to the decision here. Let's briefly review some high level ADRs that you will likely make in your cloud program. You will likely make a decision on how you integrate an identity provider. Will you extend your on-premises identity provider to the cloud? Will you choose [Entra ID](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) Okta, or another IDP for a cloud single sign-on? Will you use cloud native key management systems or will you bring an external [Hardware](../../Topics/Hardware.md) security module to encrypt data at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md)? How will your centralized logging architecture look like? Especially in multi-cloud scenarios, how will you integrate with your cloud incidents response? And on the topic of cloud monitoring, how do you approach cloud native application protection? You need a solution to manage cloud security posture and misconfigurations, but will you choose a multi-cloud solution or a cloud native vendor?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (3), [Entra id](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1), [Hardware](../../Topics/Hardware.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** adr (3), idp (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Best Practices:** recommended (2)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning more about cloud security architecture](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=0)** - Congratulations, you now have the tools to design a robust [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) framework. You're now equipped to place the right security controls at the right time, in the right place, at the right cost. You learned how to translate your risk appetite into a tangible cloud security architecture, and you also learned how the key security domains of identity, monitoring, and networking can be built in the cloud. I highly recommend checking courses in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library on security implementation of specific clouds you are working with to complement this course. Look at those courses to learn how to implement the security controls you'll learn to design in this course. Each cloud requires a native approach, and effectiveness of controls will vary across clouds. If you're an enterprise security architect following the SAMHSA methodology, check out the course using SAMHSA-to-architect cloud security next. Each of the cloud service providers has their own security control lists. It's a good idea to evaluate these lists as a baseline for your platform security controls. Often these are correlated and cross-referenced to industry standards, making it easier for you to map them to your internal security requirements. And finally, there are some great resources available by the [Cybersecurity](../../Topics/Cybersecurity.md) and Infrastructure Security Agency and the National Institute of Standards and Technologies. CISA has published a reference architecture guide,
>
> **[1:38](https://www.linkedin.com/learning/cloud-security-architecture-for-the-enterprise-24395220/learning-more-about-cloud-security-architecture?u=76281980&t=98)** which covers cloud governance, security architecture, and [DevSecOps](../../Skills/DevOps/DevSecOps.md). The publication provides prescriptive guidance on cloud platform controls and cloud security posture management, and [NIST](../../Skills/IT%20Help%20Desk/NIST.md) has published a special publication on the zero trust model for cloud native applications. I recommend you look at this special publication and include the recommended changes in your journey towards zero trust. Good luck with your cloud security architecture journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1), [DevSecOps](../../Skills/DevOps/DevSecOps.md) (1), [NIST](../../Skills/IT%20Help%20Desk/NIST.md) (1)
> **Env Vars:** samhsa (2), cisa (1), nist (1)
> **Best Practices:** recommended (1)
> **Speakers:** - congratulations (1)


## Instructor

- [Karl Ots](../../Instructors/Cloud%20Computing/Karl%20Ots.md)

## Skills Covered

- Enterprise Architecture
- Cloud Security
- Identity and Access Management (IAM)

## Path Context

### In [Build an Enterprise Cloud Architecture](../../Paths/Cloud%20Computing/Learning%20Paths/Build%20an%20Enterprise%20Cloud%20Architecture.md)
← [Cloud Architecture- Advanced Concepts](Cloud%20Architecture-%20Advanced%20Concepts.md) | **3 of 4** | [Building a Cloud Architecture Diagram](Building%20a%20Cloud%20Architecture%20Diagram.md) →

### In [Cloud Strategy Professional Certificate by LinkedIn Learning](../../Paths/Cloud%20Computing/Professional%20Certificates/Cloud%20Strategy%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)
← [Cloud Architecture- Design Decisions](Cloud%20Architecture-%20Design%20Decisions.md) | **5 of 9** | [Planning a Multicloud Solution (2022)](Planning%20a%20Multicloud%20Solution%20(2022).md) →

### In [Identity and Access Management in Azure](../../Paths/Cloud%20Computing/Learning%20Paths/Identity%20and%20Access%20Management%20in%20Azure.md)
← [Azure for Architects- Security and Identity Management with Microsoft Entra](Azure%20for%20Architects-%20Security%20and%20Identity%20Management%20with%20Microsoft%20Entra.md) | **4 of 4**

## Part of

- [Cloud Strategy Professional Certificate by LinkedIn Learning](../../Paths/Cloud%20Computing/Professional%20Certificates/Cloud%20Strategy%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)

## Appears In

- [Build an Enterprise Cloud Architecture](../../Paths/Cloud%20Computing/Learning%20Paths/Build%20an%20Enterprise%20Cloud%20Architecture.md)
- [Cloud Strategy Professional Certificate by LinkedIn Learning](../../Paths/Cloud%20Computing/Professional%20Certificates/Cloud%20Strategy%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)
- [Identity and Access Management in Azure](../../Paths/Cloud%20Computing/Learning%20Paths/Identity%20and%20Access%20Management%20in%20Azure.md)

## Related Courses

_Courses sharing skills:_

- [Azure for Architects- Security and Identity Management with Microsoft Entra](Azure%20for%20Architects-%20Security%20and%20Identity%20Management%20with%20Microsoft%20Entra.md) — Cloud Security, Identity and Access Management (IAM)
- [OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures](../Cybersecurity/OWASP%20Top%2010-%20-7%20Identification%20and%20Authentication%20Failures%20and%20-8%20Software%20and%20Data%20Integrity%20Failures.md) — Identity and Access Management (IAM)
- [Google Cloud Security for Beginners- Tools and Services](Google%20Cloud%20Security%20for%20Beginners-%20Tools%20and%20Services.md) — Cloud Security
- [Google Cloud Digital Leader Cert Prep- 5 Trust and Security with Google Cloud](Google%20Cloud%20Digital%20Leader%20Cert%20Prep-%205%20Trust%20and%20Security%20with%20Google%20Cloud.md) — Cloud Security
- [Microsoft Azure- Identity and Access Management](Microsoft%20Azure-%20Identity%20and%20Access%20Management.md) — Identity and Access Management (IAM)

---

[↑ Back to top](#)