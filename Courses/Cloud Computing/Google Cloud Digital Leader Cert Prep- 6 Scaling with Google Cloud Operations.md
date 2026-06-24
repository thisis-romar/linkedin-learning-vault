---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations
url: "https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations"
duration_minutes: 43
duration: 43m
level: Beginner
updated: 9/11/2024
learners: 3860
skills:
  - Scalability
  - Google Cloud Platform (GCP)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGOpLpFgTUegQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711389664359?e=2147483647&amp;v=beta&amp;t=7wyq9D2lo4Cx--7E3LgxT6YrcKLlq2I7Q89dPTOUZ5w"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Prepare for the Google Cloud Digital Leader Certification](../../Paths/Cloud%20Computing/Learning%20Paths/Prepare%20for%20the%20Google%20Cloud%20Digital%20Leader%20Certification.md)'
prev_courses:
  - '[Google Cloud Digital Leader Cert Prep- 5 Trust and Security with Google Cloud](Google%20Cloud%20Digital%20Leader%20Cert%20Prep-%205%20Trust%20and%20Security%20with%20Google%20Cloud.md)'
path_nav: '[{"path":"Prepare for the Google Cloud Digital Leader Certification","position":6,"total":6,"prev":"Google Cloud Digital Leader Cert Prep- 5 Trust and Security with Google Cloud","next":null}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/scalability
  - skill/google-cloud-platform-gcp
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Google%20Cloud%20Digital%20Leader%20Cert%20Prep-%206%20Scaling%20with%20Google%20Cloud%20Operations.md)

![Google Cloud Digital Leader Cert Prep: 6 Scaling with Google Cloud Operations](https://media.licdn.com/dms/image/v2/D4E0DAQGOpLpFgTUegQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711389664359?e=2147483647&amp;v=beta&amp;t=7wyq9D2lo4Cx--7E3LgxT6YrcKLlq2I7Q89dPTOUZ5w)

# Google Cloud Digital Leader Cert Prep: 6 Scaling with Google Cloud Operations

> Organizations of all sizes are embracing the power and flexibility of the cloud to transform how they operate. However, managing and scaling cloud resources effectively can be a complex task. This course, part of a series of courses designed to prepare you for the Google Cloud Digital Leader certification exam, explores the fundamental concepts of modern operations, reliability, and resilience in 

> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations) | 43m | Beginner | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Course introduction](#course-introduction)
- [**1. Financial Governance and Managing Cloud Costs**](#1-financial-governance-and-managing-cloud-costs) (5 videos)
  - [Introduction](#introduction)
  - [Fundamentals of cloud financial governance](#fundamentals-of-cloud-financial-governance)
  - [Cloud financial governance best practices](#cloud-financial-governance-best-practices)
  - [Using the resource hierarchy to control access](#using-the-resource-hierarchy-to-control-access)
  - [Controlling cloud consumption](#controlling-cloud-consumption)
- [**2. Operational Excellence and Reliability at Scale**](#2-operational-excellence-and-reliability-at-scale) (6 videos)
  - [Introduction](#introduction)
  - [Fundamentals of cloud reliability](#fundamentals-of-cloud-reliability)
  - [Designing resilient infrastructure and processes](#designing-resilient-infrastructure-and-processes)
  - [Modernizing operations by using Google Cloud](#modernizing-operations-by-using-google-cloud)
  - [Google Cloud Customer Care](#google-cloud-customer-care)
  - [The life of a support case](#the-life-of-a-support-case)
- [**3. Sustainability with Google Cloud**](#3-sustainability-with-google-cloud) (1 videos)
  - [Sustainability with Google Cloud](#sustainability-with-google-cloud)
- [**Conclusion**](#conclusion) (1 videos)
  - [Course summary](#course-summary)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Course introduction](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/course-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/course-introduction?u=76281980&t=0)** - [Narrator] In today's digital landscape, organizations of all sizes are embracing the power and flexibility of the cloud to transform how they operate. However, managing and scaling cloud resources effectively can be a complex task. That's where cloud operations come in. Cloud operations refers to the set of practices and strategies employed to ensure the smooth functioning, optimization, and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) of cloud-based systems. It involves managing and monitoring the infrastructure, applications, and services that run in the cloud while adhering to best practices for reliability, performance, security, and cost optimization. Cloud operations play a pivotal role in enabling organizations to achieve [Digital Transformation](../../Skills/Software%20Development/Digital%20Transformation.md) goals because they ensure the availability, efficiency, and resilience of critical systems. So with this in mind, let's explore the goals of this course. Scaling with [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) operations was designed to help you, learn how Google Cloud supports an organization's ability to control their cloud costs through financial governance, understand the fundamental concepts of modern operations, reliability, and resilience in the cloud, and explore how Google Cloud works to reduce our environmental impact and help organizations meet [Sustainability](../../Skills/Software%20Development/Sustainability.md) goals. Throughout the course, you are presented with graded knowledge assessments. You must pass these assessments to receive course credit.
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/course-introduction?u=76281980&t=94)** Okay, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (3), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Digital Transformation](../../Skills/Software%20Development/Digital%20Transformation.md) (1), [Sustainability](../../Skills/Software%20Development/Sustainability.md) (1)
> **Definitions:** refers to (1)
> **Speakers:** - [narrator] (1)


### 1. Financial Governance and Managing Cloud Costs

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/introduction?u=76281980&t=0)** - [Instructor] Using cloud technology, either for business improvements or for large scale transformation can be challenging. In fact, one of the most common pain points many organizations face, regardless of which cloud provider they use, is managing cloud costs. For large organizations especially, the transition from predictable capital expenditures for building and maintaining their IT infrastructure to [agile](../../Skills/DevOps/Agile%20Development.md) operating expenditures using cloud resources requires process and organizational changes. Managing cloud costs requires vigilance and [Real-Time](../../Skills/Database%20Management/Real-Time.md) monitoring in parallel. In fact, because almost anyone can now access cloud resources on demand, managing IT, infrastructure costs no longer sits mainly with the finance team. Instead, it involves more people across multiple teams, so you might even be the person responsible for IT budgeting. Whatever your role, understanding how cloud technology affects the business from a cost perspective will help you maximize the value your organization gains from using the cloud. In this first section of the course, you'll explore the fundamentals of cloud [Cost Management](../../Skills/Software%20Development/Cost%20Management.md), cloud financial governance best practices, ways to control access by using the resource hierarchy and ways to control cloud consumption.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (1)
> **Speakers:** - [instructor] (1)

#### [Fundamentals of cloud financial governance](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/fundamentals-of-cloud-financial-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/fundamentals-of-cloud-financial-governance?u=76281980&t=0)** - [Instructor] Easy access to cloud resources presents a need for precise, [Real-Time](../../Skills/Database%20Management/Real-Time.md) control of what's being consumed. Having cloud financial governance, which is, in part, a set of processes and controls that organizations use to manage cloud spend, can mean the difference between peace of mind and spiraling costs that lead to budget overruns. As an organization adapts, it'll need a core team across technology, finance, and business functions to work together to stay on top of cloud costs, and make decisions in real time. The variable nature of cloud costs impacts people, process, and technology. Let's explore these three areas, starting with people. People refers to the different roles involved in managing cloud costs. For small organizations, one person might fulfill multiple roles, and be responsible for managing all aspects of a [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) and associated finance, from budgeting, to procurement, tracking optimization, and more. Large organizations, however, will likely look to a finance team to take on a [Financial Planning](../../Skills/Data%20Science/Financial%20Planning.md) and advisory role. Using business priorities, a finance team is expected to make data-driven decisions on cloud spending, but they might struggle to understand or monitor cloud spend on a daily, weekly, or monthly basis. Then there are members of technology and line of business teams. They can advise on how cloud resources are being used to meet the organization's overall business strategy, and what additional resources might be needed
>
> **[1:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/fundamentals-of-cloud-financial-governance?u=76281980&t=93)** throughout the upcoming year. However, they don't necessarily factor costs into their decision making. To manage cloud costs effectively, a partnership across finance, technology, and business functions is required. This partnership might already exist, or it may take the form of a centralized hub, such as a cloud center of excellence. The central team would consist of several experts who ensure the best practices are in place across the organization, and that there's visibility into the ongoing cloud spend. The centralized group would also be able to make real time decisions, and discuss trade-offs when spending is higher than planned. Now, let's transition from people to process. On a daily or weekly basis, organizations should monitor and analyze their cloud usage and costs. Then on a weekly or monthly basis, the finance team should analyze the results, charge back the costs through the appropriate teams, and determine whether any changes are needed to ensure that the organization's cloud spend is optimized. Having a culture of [Accountability](../../Skills/Data%20Science/Accountability.md) in place across teams helps organizations recognize waste, quickly act to eliminate it, and ensure they're maximizing their cloud investment. It will also help drive cross group collaboration across technology, finance, and business teams to ensure their cloud spend aligns with broader business objectives. And finally, there's technology. [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) provides built-in tools to help organizations monitor and manage costs.
>
> **[3:08](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/fundamentals-of-cloud-financial-governance?u=76281980&t=188)** These tools help organizations gain greater visibility, drive a culture of accountability for cloud spending across the organization, control costs to reduce risks of overspending, and provide intelligent recommendations to optimize cost and usage. You'll explore some of these tools later in this section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Accountability](../../Skills/Data%20Science/Accountability.md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1), [Financial Planning](../../Skills/Data%20Science/Financial%20Planning.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **CLI Commands:** make (3)
> **Cross-References:** later in (1)
> **Definitions:** refers to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Cloud financial governance best practices](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/cloud-financial-governance-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/cloud-financial-governance-best-practices?u=76281980&t=0)** - [Instructor] Let's explore some cloud financial governance best practices that organizations can adopt to increase the predictability and control of their cloud resources. The first best practice is to identify who manages cloud costs. If it's a team, it should ideally be a mix of IT managers and financial controllers. Because cloud spending is decentralized and variable, it's important to establish a culture of [Accountability](../../Skills/Data%20Science/Accountability.md) for costs across the organization. Defining clear ownership for projects and sharing cost views with the departments and teams that are using cloud resources, helps establish this accountability culture and more responsible spending. As well as making teams accountable for their spending, [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) financial governance policies and permissions make it easy to control who can spend and view costs across your organization. In addition, Google Cloud offers flexible options to organize resources and allocate costs to individual departments and teams. For example, budgets notify key stakeholders based on your actual or forecasted cloud costs. Creating multiple budgets with meaningful alerts is an important practice for staying on top of your cloud costs. The second best practice is to understand what kind of information can be found in an invoice versus [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) tools. They're not the same concept. An invoice is a document that is sent by a cloud service provider to a customer to request payment for the services that were used. However, a cost management tool is software to help track,
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/cloud-financial-governance-best-practices?u=76281980&t=95)** analyze, and optimize cloud spend. An organization is rarely only interested in how much they spend. They also want to know why they spent that much. Cost management tools like those built into the Google Cloud console are effective for answering the why. They can provide granular data, uncovered trends and identify actions to take to control or optimize costs. And this brings us to the third best practice for increasing the predictability and control of cloud resources. Use Google Cloud's cost management tools. Google Cloud believes in supporting organizations by providing strong financial governance tools that make it easier for customers to align their strategic priorities with their cloud usage. Before organizations can optimize their cloud costs, they first need to understand what they're spending, whether there are any trends, and what their forecasted costs are. So how can this be done? Start by capturing what cloud resources are being used by whom, for what purpose ,and at what cost. From there, determine who will be responsible for monitoring that information. Who'll be involved in managing costs and how the spending information will be reported on an ongoing basis. It's also important to set up the cadence and format for ongoing communication with main cloud stakeholders. Having this plan outlined upfront helps ensure that managing costs isn't an afterthought. And how can you monitor current cost trends
>
> **[3:08](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/cloud-financial-governance-best-practices?u=76281980&t=188)** and identify areas of waste that could be improved? Google Cloud provides built-in reporting capabilities, which can help your team gain visibility into costs. Ideally, reports should be reviewed weekly at a minimum. One powerful tool is the Google Cloud pricing calculator. The pricing calculator lets you estimate how changes to cloud usage will affect costs. The calculator is available at cloud.[google.com/products/calculator](https://google.com/products/calculator). Now that you've had a chance to explore some cloud financial governance best practices, the next step is to implement them. If this doesn't fall into your scope of responsibility, be sure to pass on those best practices to the relevant stakeholders within your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (7), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (4), [Accountability](../../Skills/Data%20Science/Accountability.md) (2), [Google](../../Glossary/Service/Google.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Best Practices:** best practice (3)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **URLs:** [google.com](https://google.com) (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Using the resource hierarchy to control access](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/using-the-resource-hierarchy-to-control-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/using-the-resource-hierarchy-to-control-access?u=76281980&t=0)** - [Narrator] One important [Cloud Computing](../../Topics/Cloud%20Computing.md) consideration involves controlling access to resources. With on-premises infrastructure, physical access controls were used. This method, however, is not as effective with resources stored in the cloud. The [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) resource hierarchy is a powerful tool that can be used to control access to cloud resources. Much like the folder structure you use to organize and control access to your own files, this resource hierarchy is a tree-like structure that organizes resources into logical groups. This makes it easier to manage resources and control. Google Cloud's resource hierarchy contains four levels and starting from the bottom up, they are resources, projects, folders, and an organization node. The first level resources represents [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) buckets, tables in BigQuery, or anything else in Google Cloud. Resources are organized into projects, which sit on the second level. Projects can be organized into folders or even sub folders. These sit at the third level, and then at the top level is an organization node, which encompasses all the projects, folders, and resources in your organization. It's important to understand this resource hierarchy because it directly relates to how your policies are managed and applied when you use Google Cloud. A policy is a set of rules that define who can access a resource and what they can do with it.
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/using-the-resource-hierarchy-to-control-access?u=76281980&t=92)** Policies can be defined at the project, folder and organization node levels. Some Google Cloud services can also apply policies to individual resources. The third level of the Google Cloud resource hierarchy is folders. Folders let you assign policies to resources at the level of granularity that you choose. The resources in a folder inherit policies and permissions assigned to that folder. A folder can contain projects, other folders, or a combination of both. Now that you understand the structure of the Google Cloud resource hierarchy, let's explore some additional benefits of using it to control access to cloud resources. First, the resource hierarchy provides granular access control, meaning you can assign roles and permissions at different levels of the hierarchy, such as at the folder, project, or individual resource level. Second, because the resource hierarchy follows inheritance and propagation rules, permission set at higher levels of the resource hierarchy are automatically inherited by lower level resources. For example, if you grant a user access at the folder level, all projects and resources within that folder inherit those permissions by default. This inheritance simplifies access management and reduces the need for manual configuration at each individual resource level. Third, the resource hierarchy enhances security and compliance through least privileged principles. By assigning access permissions at the appropriate level
>
> **[3:06](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/using-the-resource-hierarchy-to-control-access?u=76281980&t=186)** in the hierarchy, you can ensure that users only have the necessary privileges to perform their tasks. This reduces the risk of unauthorized access and helps maintain [Regulatory Compliance](../../Skills/Artificial%20Intelligence%20(AI)/Regulatory%20Compliance.md). Finally, the resource hierarchy provides strong visibility and auditing capabilities. You can track access permissions and changes across different levels of the hierarchy, which makes it easier to monitor and review access controls. This improves [Accountability](../../Skills/Data%20Science/Accountability.md) and helps identify and address potential security issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (7), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1), [Regulatory Compliance](../../Skills/Artificial%20Intelligence%20(AI)/Regulatory%20Compliance.md) (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** node (3)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [narrator] (1)

#### [Controlling cloud consumption](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/controlling-cloud-consumption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/controlling-cloud-consumption?u=76281980&t=0)** - [Narrator] Organizations want to control cloud consumption for many reasons. It could be about cost savings by ensuring they're not overspending on unnecessary resources. Increased visibility by providing a better understanding of how resources are being used and identifying areas to reduce costs. Or improved compliance, by ensuring your cloud environment is compliant with industry regulations. [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) offers several tools to help control cloud consumption, including resource quota policies, budget threshold rules, and cloud billing reports. Let's define each of these terms. Resource quota policies let you set limits on the amount of resources that can be used by a project or user. They can help prevent overspending and cloud resources. Therefore, they help you ensure that your cloud usage is within your budget. Then, there are budget threshold rules, which let you set alerts to be informed when your cloud costs exceed a certain threshold. They can act as an early warning for potential cost overruns and let you take corrective action before costs get out of control. Both resource quota policies and budget threshold rules are set in the Google Cloud console, and then there are cloud billing reports. Whereas resource quota policies and budget threshold rules provide proactive means to control cloud consumption, cloud billing reports offer a reactive method to help you track and understand what you've already spent on Google Cloud resources
>
> **[1:33](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/controlling-cloud-consumption?u=76281980&t=93)** and provide ways to help optimize your costs. You can use cloud billing reports to monitor costs by exporting billing data to BigQuery. This means exporting usage and cost data to a BigQuery dataset, and then using the dataset for detailed analysis. You can also visualize data with tools like Looker Studio. After analyzing how you're spending on cloud resources, you might realize that your organization can optimize costs through committed use discounts or CUDs. If your workloads have predictable resource needs, you can purchase a Google Cloud commitment, which gives you discounted prices in exchange for your commitment to use a minimum level of resources for a specific term.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (4)
> **Warnings:** warning (1)
> **Speakers:** - [narrator] (1)


### 2. Operational Excellence and Reliability at Scale

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/introduction-23230143?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/introduction-23230143?u=76281980&t=0)** - [Narrator] In today's rapidly evolving digital landscape, organizations use cloud technology increasingly to drive innovation, agility, and efficiency. However, harnessing the true power of the cloud requires a comprehensive understanding of [Operational Excellence](../../Skills/Cybersecurity/Operational%20Excellence.md) and reliability at scale. Operational excellence and reliability refers to the ability of organizations to optimize their operations and ensure uninterrupted service delivery even as they handle increasing workloads and complexities in the cloud. This includes designing robust infrastructure, establishing resilient processes, and employing proactive monitoring and response mechanisms. Imagine a global [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) platform that experiences a sudden surge in traffic during a major sale event. To meet the increased demand, the platform needs to scale its resources rapidly while ensuring uninterrupted service availability. Operational excellence here involves efficiently scaling the underlying infrastructure, automating resource provisioning, and implementing load balancing mechanisms. Reliability focuses on minimizing downtime, employing full tolerance systems, and employing disaster recovery strategies. By excelling in these areas, the e-commerce platform can handle the increased load seamlessly, deliver a consistently positive [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) and avoid revenue loss or reputational damage. In this section of the course, you explore modernizing operations by using [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md),
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/introduction-23230143?u=76281980&t=94)** designing resilient infrastructure and processes, the fundamentals of cloud reliability, Google Cloud customer care, and the life of a support case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Operational Excellence](../../Skills/Cybersecurity/Operational%20Excellence.md) (3), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Definitions:** refers to (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### [Fundamentals of cloud reliability](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/fundamental-of-cloud-reliability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/fundamental-of-cloud-reliability?u=76281980&t=0)** - [Narrator] Within any IT team, developers are responsible for writing code for systems and applications, and operators are responsible for ensuring that those systems and applications operate reliably. Developers are expected to be [agile](../../Skills/DevOps/Agile%20Development.md) and are often pushed to write and deploy code quickly. Their aim is to release new functions frequently, increase core business value with new features, and release fixes fast for an overall better [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). In contrast, operators are expected to keep the system stable, and so they often prefer to work more slowly to ensure reliability and consistency. Traditionally, developers push their code to operators who often had little understanding of how the code would run in a production or live environment. When problems arise, it can be very difficult for either group to identify the source of the problem and resolve it quickly. Worse, [Accountability](../../Skills/Data%20Science/Accountability.md) between the teams isn't always clear. [DevOps](../../Topics/DevOps.md) is a [Software Development](../../Topics/Software%20Development.md) approach that emphasizes collaboration and communication between development and operations teams to enhance the efficiency, speed, and reliability of software delivery. It aims to break down silos between these teams and foster a culture of shared responsibility, automation, and continuous improvement. One particular concept within the DevOps framework is site reliability engineering, or SRE, which ensures the reliability, availability, and efficiency of software systems
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/fundamental-of-cloud-reliability?u=76281980&t=94)** and services deployed in the cloud. SRE combines aspects of software engineering and operations to design, build, and maintain scalable and reliable infrastructure. Monitoring is the foundation of product reliability. It reveals what needs urgent attention and shows trends in application usage patterns, which can yield better [Capacity Planning](../../Skills/Network%20and%20System%20Administration/Capacity%20Planning.md), and generally help improve an application client's experience and lessen their pain. There are four golden signals that measure a system's performance and reliability. They are latency, traffic, saturation, and errors. Latency measures how long it takes for a particular part of a system to return a result. Latency is important because it directly affects the user experience, changes could indicate emerging issues, its values might be tied to capacity demands, and it can be used to measure system improvements. Traffic measures how many requests reach your system. Traffic is important because it's an indicator of current system demand, its historical trends are used for capacity planning, and it's a core measure when calculating infrastructure spend. Saturation measures how close to capacity a system is. It's important to note, though, that capacity is often a subjective measure that depends on the underlying service or application. Saturation is important because it's an indicator of how full the service is,
>
> **[3:08](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/fundamental-of-cloud-reliability?u=76281980&t=188)** it focuses on the most constrained resources, and it's frequently tied to degrading performance as capacity is reached. And errors are events that measure system failures or other issues. Errors are often raised when a flaw, failure, or fault in a computer program or system causes it to produce incorrect or unexpected results or behave in unintended ways. Errors are important because they can indicate something is failing, configuration or capacity issues, service level objective violations, or that it's time to send an alert. Three main concepts in site reliability engineering are service level indicators, SLIs, service level objectives, SLOs, and service level agreements, SLAs. They're all types of targets set for a system's four golden signal metrics. Service level indicators are measurements that show how well a system or service is performing. They're specific metrics like response time, error rate, or percentage uptime, which is the amount of time a system is available for use, that help us understand the system's behavior and performance. Service level objectives are the goals that we set for a system's performance based on SLIs. They define what level of reliability or performance that we want to achieve. For example, an SLO might state that the system should be available for 99.9% of the time in a month.
>
> **[4:41](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/fundamental-of-cloud-reliability?u=76281980&t=281)** Service level agreements are agreements between a cloud provider and its customers. They outline the promises and guarantees regarding the quality of service. SLAs include the agreed upon SLOs, [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md), uptime guarantees, and any penalties or remedies if the provider fails to meet those commitments. This might include refunds or credits when the service has an outage that's longer than this agreement allows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (2), [DevOps](../../Topics/DevOps.md) (2), [Capacity Planning](../../Skills/Network%20and%20System%20Administration/Capacity%20Planning.md) (2), [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [Accountability](../../Skills/Data%20Science/Accountability.md) (1)
> **Env Vars:** sre (2), slo (1)
> **Versions:** 99.9 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Designing resilient infrastructure and processes](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/designing-resilient-infrastructure-and-processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/designing-resilient-infrastructure-and-processes?u=76281980&t=0)** - [Instructor] When infrastructure and processes in a cloud environment are designed, they need to be resilient, full tolerant, and scalable for high availability and disaster recovery. High availability refers to the ability of a system to remain operational, and accessible for users even if [Hardware](../../Topics/Hardware.md) or software failures occur. Whereas disaster recovery refers to the process of restoring a system to a functional state after a major disruption or disaster. Let's explore some of the key design considerations, and their significance in more detail. Redundancy refers to duplicating critical components or resources to provide backup alternatives. Redundancy can be implemented at various levels, such as hardware, network, or application layers. For example, having redundant power supplies, [Network Switches](../../Skills/Network%20and%20System%20Administration/Network%20Switches.md) or load balancers, ensures that if one fails, the redundant component takes over seamlessly. Redundancy enhances system reliability, and mitigates the impact of single points of failure. Replication involves creating multiple copies of data or services, and distributing them across different servers or locations. It ensures redundancy and full tolerance by allowing systems to continue functioning even if certain components or servers fail. By replicating data across multiple servers, the impact of hardware failures or outages is minimized, and the availability of services is improved. Cloud service providers offer multiple regions or data center locations
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/designing-resilient-infrastructure-and-processes?u=76281980&t=92)** spread across different geographic areas. By distributing resources across regions, businesses can ensure that if an entire region becomes unavailable due to natural disasters, network issues, or other incidents, their services can continue running from another region. This approach improves resilience, and reduces the risk of prolonged service interruptions. Building a scalable infrastructure allows organizations to handle varying workloads, and accommodate increased demand without compromising performance or availability. Cloud technologies enable the dynamic allocation and de-allocation of resources based on workload fluctuations. Auto-scaling mechanisms can automatically adjust resource capacity to match demand, ensuring that services remain available and responsive during peak periods or sudden spikes in traffic. Regular backups of critical data and configurations are crucial to ensure that if data loss hardware failures, or cyber attacks occur, organizations can restore their systems to a previous state. Cloud providers often offer backup services, and they let organizations automate backups, store them securely, and easily restore data when needed. Backups should be stored in geographically separate locations to protect against regional outages or disasters. These measures improve high availability, allow for rapid recovery from disasters or failures, and minimize downtime and data loss. It's important to regularly test
>
> **[3:06](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/designing-resilient-infrastructure-and-processes?u=76281980&t=186)** and validate these processes to ensure that they function as expected during real world incidents. Also, monitoring, alerting, and [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) mechanisms should be implemented to identify and address issues prominently, further enhancing the overall resilience and availability of the [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (4), [Network Switches](../../Skills/Network%20and%20System%20Administration/Network%20Switches.md) (1), [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (1), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1)
> **Definitions:** refers to (3)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Modernizing operations by using Google Cloud](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/modernizing-operations-by-using-google-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/modernizing-operations-by-using-google-cloud?u=76281980&t=0)** - [Instructor] If you've ever worked with on-premises environments, you know that you can physically touch the servers. If an application becomes unresponsive, someone can physically determine why that happened. In the cloud, though, the servers aren't yours, they belong to the cloud provider, and you can't physically inspect them. So the question becomes, how do you know what's happening with your server, database, or application? The answer is by using [Google](../../Glossary/Service/Google.md)'s integrated observability tools. Observability involves collecting, analyzing, and visualizing data from various sources within a system to gain insights into its performance, health, and behavior. To achieve this, [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) offers an operations suite, which is a comprehensive set of monitoring, logging, and diagnostics tools. It offers a unified platform for managing and gaining insights into the performance, availability, and health of applications and infrastructure deployed on Google Cloud. Let's look at some of the managed services that constitute the operations suite. Cloud Monitoring provides a comprehensive view of your [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) and applications. It collects metrics, logs, and traces from your applications and infrastructure and provides you with insights into their performance, health, and availability. It also lets you create alerting policies to notify you when metrics, health check results, and uptime check results meet specified criteria. Cloud Logging collects and stores
>
> **[1:31](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/modernizing-operations-by-using-google-cloud?u=76281980&t=91)** all application and infrastructure logs. With [Real-Time](../../Skills/Database%20Management/Real-Time.md) insights, you can use cloud logging to troubleshoot issues, identify trends, and comply with regulations. Cloud Trace helps identify performance bottlenecks in applications. It collects latency data from applications and provides insights into how they're performing. Cloud Profiler identifies how much CPU power, memory, and other resources an application uses. It continuously gathers CPU usage and memory allocation information from production applications and provides insights into how applications are using resources. Error reporting counts, analyzes, and aggregates the crashes in running [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) in real time. A centralized error management interface displays the results with sorting and filtering capabilities. A dedicated view shows the error details, time chart, occurrences, affected user count, first- and last-seen dates, and a cleaned exception stack trace. Error Reporting supports email and mobile alerts notification through its API. Google's integrated observability tools provided by the operations suite offer valuable insights into the performance and health of applications and infrastructure in the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1)
> **Env Vars:** cpu (2), api (1)
> **Definitions:** is a  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Google Cloud Customer Care](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/google-cloud-customer-care?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/google-cloud-customer-care?u=76281980&t=0)** - [Narrator] Any cloud adoption program can encounter challenges, so it's important to have an effective and efficient support plan from your cloud provider. [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) customer care can simplify and streamline your support experience with scalable and flexible services built with your business needs at the center. There are four different service levels, which lets you choose the one that's right for your organization. Basic support is free and is included for all Google Cloud customers. It provides access to documentation, community support, cloud billing support, and active assist recommendations. Active Assist is the portfolio of tools used in Google Cloud to generate insights and recommendations to help you optimize your cloud projects. Standard support is recommended for workloads under development. You can kickstart your cloud journey with unlimited access to tech support, which lets you troubleshoot, test and explore. It offers unlimited individual access to English speaking support representatives during working hours, five days a week. Standard support also provides access to the Cloud Support API, which lets you integrate cloud customer care with your organization's customer relationship management system, CRM. Enhanced Support is designed for workloads in production with fast response times and additional services to optimize your experience with high quality, robust support. Support is available 24/7 in a selection of languages and initial response times are quicker
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/google-cloud-customer-care?u=76281980&t=94)** than those provided by standard support. Enhanced Support also offers [Technical Support](../../Skills/Network%20and%20System%20Administration/Technical%20Support.md) escalations and third party technology support to help you resolve multi-vendor issues. Premium support is designed for enterprises with critical workloads. It features the fastest response time, customer aware support, and a dedicated technical account manager. Our premium support level also offers credit for the Google Cloud Skills Boost training platform, an event management service for planned peak events such as a product launch or major sales events, operational health reviews to help you measure your progress and proactively address blockers to your goals with Google Cloud, and customer aware support where customer care learns and maintains information about your architecture partners and Google Cloud projects. This information ensures that our support experts can resolve your cases promptly and efficiently. Both the enhanced and premium support plans offer value add services that are available for additional purchase. You can learn more about the value add services and all Google Cloud customer care support offerings at cloud.[google.com/support](https://google.com/support).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (7), [Technical Support](../../Skills/Network%20and%20System%20Administration/Technical%20Support.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** api (1), crm (1)
> **URLs:** [google.com](https://google.com) (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [narrator] (1)

#### [The life of a support case](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/the-life-of-a-support-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/the-life-of-a-support-case?u=76281980&t=0)** - [Announcer] Any [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) customer on the Standard, Enhanced, or Premium support plan can use the Google Cloud console to create and manage support cases. Outside of filing a support case through the Google Cloud console, customer care support also offers other contact options for live interactions with support staff, such as phone and video call support. The life of a support case during the Google Cloud customer care process typically involves several stages and interactions between the customer and the support team. Here's an overview of the typical journey of a support case. First, the customer initiates the support request by creating a case in the Google Cloud console. Only users who are assigned the tech support editor role within an organization can do this. The customer provides relevant details about the issue they're experiencing, including any error messages, logs, or steps to reproduce the problem. It's important for the user to select a priority from P4, which means low impact, up to P1, which means critical impact, because this will influence response times from the customer care team. After the case is created, it goes through a triage process. The team reviews the information provided by the customer to understand the problem and determine its severity and impact on the customer's [Business Operations](../../Skills/Data%20Science/Business%20Operations.md). The team might request additional information or clarification from the customer at this stage. In many cases, the customer care representative will resolve the case, but for more complex issues,
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/the-life-of-a-support-case?u=76281980&t=94)** the case is assigned to a support engineer with the appropriate level of expertise. After the case is assigned, the team starts the troubleshooting and investigation process. They analyze the provided information, review system logs, and conduct various diagnostic tests to identify the root cause of the issue. Depending on the complexity of the problem, this stage might involve collaboration with other internal teams or experts. Throughout the investigation, the customer care team maintains regular communication with the customer. They provide updates on the progress, share findings, and request additional information or actions from the customer when needed. Escalation is meant for flagging process breaks, or for the rare occasion that a case is stuck because a customer and the customer care team aren't fully in sync despite actively communicating the issue to determine the next steps. However, it's important to note that escalation isn't always the best solution, and with high-impact issues, escalation might not make the case go faster. This is because escalation can disrupt the workflow of the customer care team and lead to delays in other cases. The best solution for high-impact issues is to ensure that the case is set to the appropriate priority, ensuring that the case is assigned to the right resources as quickly as possible. Escalation is a tool that can be used to regain traction on a stuck case. However, it's important to use escalation sparingly and only when it's absolutely necessary. When the root cause is identified,
>
> **[3:07](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/the-life-of-a-support-case?u=76281980&t=187)** the team works on resolving the issue or providing a mitigation plan. They might provide the customer with step-by-step instructions, configuration changes, or workaround suggestions to address the problem. In some cases, they might consult the issue with higher-level support or engineering teams for further assistance. The customer care team might also need to submit a feature request to the Google Cloud engineering team. After implementing the resolution or mitigation plan, the customer care team collaborates with a customer to validate the effectiveness of the solution. They might request a customer to perform specific tests or provide feedback on the outcome. This step ensures the problem is fully resolved and meets the customer's expectations. When the customer confirms that the issue is resolved, the support case is closed. The team provides a summary of the resolution, documents the steps taken, and ensures that the customer is satisfied with the outcome. If needed, they might also offer recommendations for preventative measures or future best practices to avoid similar issues. The customer also receives a feedback survey so the support team can learn what they did well and what needs improvement. Throughout the entire lifecycle of the support case, Google Cloud's customer care team aims to provide timely and effective assistance to the customer. They prioritize customer satisfaction, responsiveness, and strive to address the possible technical challenges faced by customers when they use Google Cloud services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (8), [Business Operations](../../Skills/Data%20Science/Business%20Operations.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [announcer] (1)


### 3. Sustainability with Google Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Sustainability with Google Cloud](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/sustainability-with-google-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/sustainability-with-google-cloud?u=76281980&t=0)** - [Presenter] As we get closer to the end of this cloud digital leader training where you've explored how [Cloud Computing](../../Topics/Cloud%20Computing.md) can help transform the way you do business, it's important that we underscore our technology efforts at [Google](../../Glossary/Service/Google.md) with our commitment to the environment and [Sustainability](../../Skills/Software%20Development/Sustainability.md). The virtual world, which includes [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md)'s network, is built on physical infrastructure, and all of those racks of humming servers use huge amounts of energy. Altogether, existing data centers use nearly 2% of the world's electricity. With this in mind, Google works to make our data centers run as efficiently as possible. Just like our customers, Google is trying to look after the planet. We understand that Google Cloud customers have environmental goals of their own, and running their workloads on Google Cloud can be a part of meeting those goals. Therefore, it's useful to note that Google's data centers were the first to achieve ISO 14001 certification, which is a standard that outlines a framework for an organization to enhance its environmental performance through improving resource efficiency and reducing waste. As an example of how this is being done, here's Google's data center in Hamina, Finland. This facility is one of the most advanced and efficient data centers in the Google fleet. Its cooling system, which uses sea water from the Bay of Finland, reduces energy use and is the first of its kind anywhere in the world. In our founding decade, Google became the first major company to be carbon-neutral. In our second decade, we were the first company
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/sustainability-with-google-cloud?u=76281980&t=92)** to achieve 100% renewable energy. And by 2030, we aimed to be the first major company to operate completely carbon-free. We meet the challenges posed by [Climate Change](../../Skills/Software%20Development/Climate%20Change.md) and the need for resource efficiency by working to empower everyone, businesses, governments, [Nonprofit Organizations](../../Skills/Artificial%20Intelligence%20(AI)/Nonprofit%20Organizations.md), communities and individuals to use Google technology to create a more sustainable world. So what does that look like in practice? Let's explore an example of how one customer, Kaluza, uses Google Cloud technology to launch smart electric vehicle charging programs that help customers save money while it reduces their carbon footprint. Electric vehicles already account for one in seven car sales globally, and with new gas and diesel cars being phased out across the world, global sales are forecasted to reach 73 million units by 2040. But with power grids becoming increasingly dependent on variable energy sources, such as wind and solar, rising demand from electric vehicles risks overstraining grids at peak times, which can potentially lead to power outages. Launched by OVO Energy in 2019, Kaluza has taken its deep understanding of the energy market to partner with some of the world's major energy suppliers and vehicle manufacturers. With a program called Charge Anytime, customers use Kaluza to smart charge their electric vehicle and they pay just about a third of their household electricity rate to do so. This means that if the customer plugs in their vehicle
>
> **[3:06](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/sustainability-with-google-cloud?u=76281980&t=186)** to charge when they get home from work at, say, 6:00 PM, a time when both demand and the carbon intensity on the grid are at their highest, their vehicle will then be smartly charged at the lowest cost and greenest periods throughout the night, which leaves it ready for when they need it in the morning. Behind Kaluza's smart charging solution lies some sophisticated technology, all of which is built on Google Cloud. Their core optimization engine gathers [Real-Time](../../Skills/Database%20Management/Real-Time.md) data from a wide range of sources, including battery and charging data from the electric vehicles, and data from the energy suppliers and grid operators, such as the carbon intensity and price forecasts. That data is stored in BigQuery where it's used to train and validate the smart charging optimization models. These models are then deployed with Google [Kubernetes](../../Skills/DevOps/Kubernetes.md) Engine so that whenever a customer plugs in an electric vehicle, data from that vehicle passes in real time through their optimization engine to calculate the ideal charging schedule for that vehicle, which ensures that it uses the cheapest, lease carbon-intensive energy available. And as for the grid operators and energy companies, the Kaluza platform lets them visualize how many participating electric vehicles are plugged into the network at any one time. BigQuery and Looker Studio [Dashboards](../../Skills/Data%20Science/Dashboards.md) provide granular insights, such as how many vehicles are idle, how many are charging, and how well our optimization engine is working. At Google, we remain committed to sustainability and continue to lead and encourage others, like Kaluza,
>
> **[4:40](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/sustainability-with-google-cloud?u=76281980&t=280)** to join us in improving the health of our planet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (10), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (5), [Sustainability](../../Skills/Software%20Development/Sustainability.md) (2), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Climate Change](../../Skills/Software%20Development/Climate%20Change.md) (1)
> **Analogies:** such as (3), just like (1)
> **Env Vars:** iso (1), ovo (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Ports:** :00 (1)
> **Warnings:** note that (1)
> **Speakers:** - [presenter] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Course summary](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/course-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/course-summary?u=76281980&t=0)** - [Instructor] This brings us to the end of the "Scaling with [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Operations" course. Let's do a quick recap. In the first section of the course titled, "Financial Governance and Managing Cloud Costs", you explored the fundamentals of cloud [Cost Management](../../Skills/Software%20Development/Cost%20Management.md), cloud financial governance best practices, ways to control access by using the resource hierarchy, and ways to control cloud consumption. In the second section of the course titled, "[Operational Excellence](../../Skills/Cybersecurity/Operational%20Excellence.md) and Reliability At Scale", you learned about modernizing operations by using Google Cloud, designing resilient infrastructure and processes, the fundamentals of cloud reliability, Google Cloud Customer Care, and the life of a support case. And finally, in the third section of the course titled, "[Sustainability](../../Skills/Software%20Development/Sustainability.md) with Google Cloud", you examined how Google Cloud works to reduce our environmental impact and help organizations meet sustainability goals. Completing this course also concludes the Cloud Digital Leader Learning Path. If you are looking to demonstrate your knowledge of the topics from these six courses, you're encouraged to take the Cloud Digital Leader Certification Exam. For more information about the exam, including additional resources to help continue your preparation, please visit cloud.[google.com/learn/certification/cloud-digital-leader](https://google.com/learn/certification/cloud-digital-leader). And if you're looking to further expand your knowledge of Google Cloud [products](../../Skills/Software%20Development/Microsoft%20Products.md) and services,
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-digital-leader-cert-prep-6-scaling-with-google-cloud-operations/course-summary?u=76281980&t=92)** please explore the entire catalog at cloud.[google.com/training](https://google.com/training). We'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (6), [Sustainability](../../Skills/Software%20Development/Sustainability.md) (2), [Google](../../Glossary/Service/Google.md) (2), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (1), [Operational Excellence](../../Skills/Cybersecurity/Operational%20Excellence.md) (1)
> **URLs:** [google.com](https://google.com) (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [Google Cloud](../../Instructors/Cloud%20Computing/Google%20Cloud.md)

## Skills Covered

- Scalability
- Google Cloud Platform (GCP)

## Path Context

### In [Prepare for the Google Cloud Digital Leader Certification](../../Paths/Cloud%20Computing/Learning%20Paths/Prepare%20for%20the%20Google%20Cloud%20Digital%20Leader%20Certification.md)
← [Google Cloud Digital Leader Cert Prep- 5 Trust and Security with Google Cloud](Google%20Cloud%20Digital%20Leader%20Cert%20Prep-%205%20Trust%20and%20Security%20with%20Google%20Cloud.md) | **6 of 6**

## Appears In

- [Prepare for the Google Cloud Digital Leader Certification](../../Paths/Cloud%20Computing/Learning%20Paths/Prepare%20for%20the%20Google%20Cloud%20Digital%20Leader%20Certification.md)

## Related Courses

_Courses sharing skills:_

- [Leveraging Google Cloud Developer and DevOps Tools](Leveraging%20Google%20Cloud%20Developer%20and%20DevOps%20Tools.md) — Google Cloud Platform (GCP)
- [Choosing A Cloud Platform For Developers Aws Azure And Gcp](Choosing%20A%20Cloud%20Platform%20For%20Developers%20Aws%20Azure%20And%20Gcp.md) — Google Cloud Platform (GCP)
- [Advanced Node.js- Scaling Applications](../Web%20Development/Advanced%20Node.js-%20Scaling%20Applications.md) — Scalability
- [Google Cloud Data and Storage Foundations](Google%20Cloud%20Data%20and%20Storage%20Foundations.md) — Google Cloud Platform (GCP)
- [Google Cloud Security for Beginners- Tools and Services](Google%20Cloud%20Security%20for%20Beginners-%20Tools%20and%20Services.md) — Google Cloud Platform (GCP)

---

[↑ Back to top](#)