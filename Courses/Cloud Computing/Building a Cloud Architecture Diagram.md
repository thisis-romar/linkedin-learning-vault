---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: building-a-cloud-architecture-diagram
url: "https://www.linkedin.com/learning/building-a-cloud-architecture-diagram"
duration_minutes: 109
duration: 1h 49m
level: Advanced
updated: 5/15/2025
learners: 28047
skills:
  - Cloud-Native Architecture
  - Technical Documentation
  - Diagramming
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHmIRNYr7q8xw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679431052151?e=2147483647&amp;v=beta&amp;t=9vklnqfYskH5uxT7tHkHswfntap1QZ2Wa4PBjJQBgZk"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Build an Enterprise Cloud Architecture](../../Paths/Cloud%20Computing/Learning%20Paths/Build%20an%20Enterprise%20Cloud%20Architecture.md)'
prev_courses:
  - '[Cloud Security Architecture for the Enterprise](Cloud%20Security%20Architecture%20for%20the%20Enterprise.md)'
path_nav: '[{"path":"Build an Enterprise Cloud Architecture","position":4,"total":4,"prev":"Cloud Security Architecture for the Enterprise","next":null}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/cloud-native-architecture
  - skill/technical-documentation
  - skill/diagramming
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Building%20a%20Cloud%20Architecture%20Diagram.md)

![Building a Cloud Architecture Diagram](https://media.licdn.com/dms/image/v2/C4E0DAQHmIRNYr7q8xw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679431052151?e=2147483647&amp;v=beta&amp;t=9vklnqfYskH5uxT7tHkHswfntap1QZ2Wa4PBjJQBgZk)

# Building a Cloud Architecture Diagram

> If you want to develop an effective cloud strategy, you need to build it in full awareness of numerous systems, applications, and teams. An architectural diagram can help on this front by providing the visual structure for demonstrating the strategy and relationship between each of the parts. In this course, instructor Mark Wilkins outlines the various types of diagrams and highlights the best use

> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram) | 1h 49m | Advanced | 28K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [An in-depth look at cloud architecture diagrams](#an-in-depth-look-at-cloud-architecture-diagrams)
  - [What you need to know](#what-you-need-to-know)
- [**1. Cloud Architecture Diagrams**](#1-cloud-architecture-diagrams) (16 videos)
  - [What is a cloud architecture diagram?](#what-is-a-cloud-architecture-diagram)
  - [Enterprise architecture diagrams](#enterprise-architecture-diagrams)
  - [UML examples for AI systems](#uml-examples-for-ai-systems)
  - [Business architecture diagrams](#business-architecture-diagrams)
  - [Application architecture diagrams](#application-architecture-diagrams)
  - [Data architecture diagrams](#data-architecture-diagrams)
  - [Technology architecture diagrams](#technology-architecture-diagrams)
  - [Unified Modeling Language (UML) diagrams](#unified-modeling-language-uml-diagrams)
  - [UML use case diagram overview](#uml-use-case-diagram-overview)
  - [UML component diagram overview](#uml-component-diagram-overview)
  - [UML deployment diagram overview](#uml-deployment-diagram-overview)
  - [UML sequence diagram overview](#uml-sequence-diagram-overview)
  - [UML state diagram overview](#uml-state-diagram-overview)
  - [UML activity diagram overview](#uml-activity-diagram-overview)
  - [UML class diagram overview](#uml-class-diagram-overview)
  - [Organizational responsibilities](#organizational-responsibilities)
- [**2. UML Diagram Types for Cloud Architecture**](#2-uml-diagram-types-for-cloud-architecture) (7 videos)
  - [Use case diagrams](#use-case-diagrams)
  - [Class diagrams](#class-diagrams)
  - [Activity diagrams](#activity-diagrams)
  - [Architecture diagrams](#architecture-diagrams)
  - [Sequence diagrams](#sequence-diagrams)
  - [State machine diagrams](#state-machine-diagrams)
  - [Creating UML diagrams](#creating-uml-diagrams)
- [**3. Creating Cloud Architecture Diagrams**](#3-creating-cloud-architecture-diagrams) (8 videos)
  - [Mind map diagrams](#mind-map-diagrams)
  - [Creating a mind map](#creating-a-mind-map)
  - [Use case diagram](#use-case-diagram)
  - [Create a use case class diagram](#create-a-use-case-class-diagram)
  - [Architecture diagram](#architecture-diagram)
  - [Create architecture diagram](#create-architecture-diagram)
  - [Sequence diagram](#sequence-diagram)
  - [State machine diagram](#state-machine-diagram)
- [**4. Architectural Diagramming Tools for Cloud Architecture**](#4-architectural-diagramming-tools-for-cloud-architecture) (1 videos)
  - [Diagramming tools](#diagramming-tools)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [An in-depth look at cloud architecture diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/an-in-depth-look-at-cloud-architecture-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/an-in-depth-look-at-cloud-architecture-diagrams?u=76281980&t=0)** - [Mark] Well, hello future cloud diagrammers. Is diagrammers even a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md)? It is now. Allow me to explain. A cloud architect diagram is visual documentation. And you know what they say? A picture is worth a thousand words. Perhaps a picture can be worth 10,000 words. Taking this course, you will learn about how to create visual documentation for your present and future cloud workloads. Cloud architect diagrams are created following the concepts of UML. That's the Universal Modeling Language but we don't have to really learn a programming language. It's pretty easy. My name is Mark Wilkins and I will be your guide for learning about creating cloud architect diagrams. So, sharpen your mouse pointer. Let's start drawing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Analogies:** picture (2)
> **Env Vars:** uml (1)
> **Speakers:** - [mark] (1)

#### [What you need to know](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/what-you-need-to-know?u=76281980&t=0)** - [Instructor] Here's what I think you need to know and have to get the best experience from this class. First of all, you have a real need to get organized in regards to creating useful visual documentation. Perhaps you currently have projects running in the cloud or you will have some future projects that will be cloud hosted and you need some good documentation. As a side note, troubleshooting becomes much easier once you fully document what you have. If you do a good job, your documentation will come in really handy when there's problems. Optionally, having some knowledge of cloud architecture such as as [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), [Google](../../Glossary/Service/Google.md), or AWS, it could be helpful, but maybe it's not necessary. Maybe you're the head of a team or an executive that will be driving the bus, so to speak, and you will be insisting on good documentation but you may not actually be using or viewing this documentation. The person that's going to draw, create the cloud architect diagrams is going to need a device, a computer probably the best bet, either a Mac or [Windows](../../Glossary/Service/Windows.md) with browser access to the internet in order to be able to use some of the drawing tools that we'll talk about in this class. You may also want to consider investing in some sort of centralized [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) like Box or [OneDrive](../../Skills/Cloud%20Computing/Microsoft%20OneDrive.md) or Dropbox. This will provide a location for your organization's storage of the cloud documentation that you're going to create. And finally, perhaps the need for good documentation and the understanding of how documentation can be created
>
> **[1:36](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/what-you-need-to-know?u=76281980&t=96)** might be enough of an impetus to consider taking this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1), [Onedrive](../../Skills/Cloud%20Computing/Microsoft%20OneDrive.md) (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Cloud Architecture Diagrams

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a cloud architecture diagram?](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/what-is-a-cloud-architecture-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/what-is-a-cloud-architecture-diagram?u=76281980&t=0)** - [Instructor] All right, what is a cloud architect diagram and why should you care? Well, a cloud architecture diagram is a visual representation of the components and relationships in a [Cloud Computing](../../Topics/Cloud%20Computing.md) system. This will typically include elements such as the [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) such as storage, networking, and security. The cloud architecture diagram will show how these components fit together and interact, creating a complete cloud-based application or workload. After they're created, they can be pretty handy to help improve the overall design and identify potential bottleneck or areas for optimization in the current cloud workload. Now when I use the term workload or project, I'm defining an application hosted in the cloud and all of the associated cloud services that are bundled together running as a two, three, or multi-tier application. So workload or project is defining this sort of entity. Now in regards to understanding design decisions, the cloud architecture diagram provides a visual representation of all the components and the relationships, helping you to understand and communicate your architecture. An example could be you're creating a use case that describes how the end user interfaces or connects with a system or application, or maybe you're using something called a class diagram which details how a software application is designed. Or maybe the most common scenario that you'll see is an architecture diagram that actually shows
>
> **[1:34](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/what-is-a-cloud-architecture-diagram?u=76281980&t=94)** the cloud architecture components say from Amazon, [Google](../../Glossary/Service/Google.md), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). These diagrams help you improve your design because once you see it visually, you'll see potential areas where you can improve. After all, there'll more than just your eyes looking at this document. By visualizing the components and relationships with a diagram even for some architecture that hasn't yet been created, it's much easier to identify areas where changes or improvements could be made, and you're going to have a lot better collaboration between technical and non-technical audiences. The different stakeholders or third-party people that are working with you on this project will have different levels of technical knowledge and you'll find these diagrams can be really useful in laying out what you're trying to do. All right, so when do I create these diagrams? Well, when you first start off designing a new cloud workload, that might be a good starting point. The architecture diagram can be used to represent the design of what you're going to build and people can understand visually where you're going. Perhaps you already have an existing cloud workload and you want to make some changes. Maybe documenting what you have helps you be able to represent the changes that are going to be made. This can be really helpful to understand the impact of the proposed or finalized changes and to make sure the project is kind of on track. When documenting an existing cloud computing workload, the cloud architecture diagram can be really useful in documenting the current architecture.
>
> **[3:09](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/what-is-a-cloud-architecture-diagram?u=76281980&t=189)** It's going to be really helpful for understanding the overall scope of the workload or project and in the future when undoubtedly questions or issues will occur, that visual reference point is really helpful for looking at the changes or updates that may have to be undertaken. This documentation that we're creating can also be defined as [Operational Excellence](../../Skills/Cybersecurity/Operational%20Excellence.md). Operational excellence is designing a workload that is working the way you want in production and then maintaining that workload. Overall operational excellence can be defined as the practice that is adopted by the organization of continuously improving the efficiency, the effectiveness, and the agility of each cloud-hosted workload. In order to achieve operational excellence, you first have to identify and implement best practices and processes. Well, if you can't visually see what you're doing, how are you going to move towards operational excellence, documentation is key. That big three public cloud providers, that's Amazon, Azure, and Google, have well-defined, well-architected frameworks that will help guide organizations in successfully deploying their cloud-hosted workloads or projects. The well-architected framework is designed in pillars and these pillars include reliability, security, performance, and costs, and operational excellence.
>
> **[4:47](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/what-is-a-cloud-architecture-diagram?u=76281980&t=287)** Now each of these pillars will most likely have several separate cloud architect diagrams from a very technical deep dive to technical overviews depending on the audience. The goal of creating cloud architecture diagrams is to represent the design and structure of what you have running in the cloud, the workload or project, in a way that is accurate, easy to understand, and provides a comprehensive view of the architecture. It should visually communicate the design of the system to stakeholders or team members. Perhaps the team members are technical. Perhaps they're very non-technical. Maybe they're not familiar with the technical aspects of the system at all. Maybe they're just coming on board. Maybe it's members of the executive team and the information has to be presented in a less technical manner. One of the goals once you finished your cloud architect diagram is to identify the improvements that should be undertaken. How do I optimize my system? Oh, there's a bottleneck. I didn't think of it this way until I looked at it graphically. A cloud architect diagram, if it's doing its job, will identify opportunities for improvement and optimization and enhance the performance of the workload, and it gives you a great reference point for maintenance or updates that need to be carried out. Other benefits for designing and creating cloud architecture diagrams include the ability to troubleshoot,
>
> **[6:22](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/what-is-a-cloud-architecture-diagram?u=76281980&t=382)** understanding what's going on. That visual representation will save a lot of time. As mentioned, giving us a reference point for maintenance and updates that need to be undertaken, and it also can demonstrate the governance and compliance that your organization may have to follow. Once you look at the diagram of your workload, you'll be able to identify potential compliance risks such as areas where data may be vulnerable or maybe there's gaps in the security controls.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Operational Excellence](../../Skills/Cybersecurity/Operational%20Excellence.md) (6), [Cloud Computing](../../Topics/Cloud%20Computing.md) (2), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (2), [Google](../../Glossary/Service/Google.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2)
> **Definitions:** is a  (2), is an  (1), defined as (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** such as (3)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Enterprise architecture diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/enterprise-architecture-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/enterprise-architecture-diagrams?u=76281980&t=0)** - [Instructor] Another term you may be familiar with is [Enterprise Architecture](../../Skills/Software%20Development/Enterprise%20Architecture.md) diagrams. These diagrams are the big picture. What are your organization's strategies, the processes? What's the technologies? What systems? What are your goals? What are your objectives? The big picture, the [Digital Transformation](../../Skills/Software%20Development/Digital%20Transformation.md), if you will. So, let's look at these. First up, the business architecture. What are the strategies of the organization? What processes and stakeholders are utilized? And how does all of this relate to the organization's IT systems, which everything uses nowadays. We then have application architecture. What's the landscape of applications that are used and developed? What systems and processes are used to deploy, develop, and manage applications? Then we have information architecture. This is the data and the information assets. Could be structured [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md), including additional systems and processes to manage and access the data assets. And finally, we have infrastructure. Well, it's called technology architecture, but it really is infrastructure and typically [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md). And this is the [Hardware](../../Topics/Hardware.md) and software and networking components that is used to support the entire organization in all of these areas of enterprise architecture. And each of these areas could and is, usually in a large company, defined by a lot of cloud architecture diagrams, since the cloud is the underlying infrastructure
>
> **[1:37](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/enterprise-architecture-diagrams?u=76281980&t=97)** at the IT level. All of these work together. There's some overlap for sure. And each element of each discipline can be one or more cloud architect diagrams.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Enterprise Architecture](../../Skills/Software%20Development/Enterprise%20Architecture.md) (2), [Digital Transformation](../../Skills/Software%20Development/Digital%20Transformation.md) (1), [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) (1), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Analogies:** picture (2)
> **Speakers:** - [instructor] (1)

#### [UML examples for AI systems](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-examples-for-ai-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-examples-for-ai-systems?u=76281980&t=0)** - [Instructor] Another graphical method that can be used quite effectively for presenting technical information, such as cloud documentation, is by using a Venn diagram. And you've probably seen these before, overlapping circles that are showing you quickly the relationships between two or three topics, or in this case, maybe two or three different cloud providers. For example, perhaps you're talking about AWS compared to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). Maybe you want to add in a comparison to [Google](../../Glossary/Service/Google.md). And the center of the circles of the overlap is where there is something to talk about. So a Venn diagram can be very useful as a visual tool to present relationships for the topic that you're talking about. And this can be really relevant when you're trying to convey technical information and you want kind of an icebreaker to say, here's the relationship and now we're going to delve a bit deeper. So using the Venn diagram as the starting point is a great idea. We can also use AI to do the heavy lifting, to create the document that we want to actually present. If I was going to do a comparison of the three cloud providers in question, AWS, Azure, and Google, each circle will have the unique features of the respective cloud provider, and the overlapping sections will show the shared features. So how to build the prompt to tell AI what to do? Well, my major bullets are going to be the title,
>
> **[1:38](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-examples-for-ai-systems?u=76281980&t=98)** the diagram structure, the labels for my diagram, the font I want to use, maybe a little more detail using a legend, where I want the actual content, in this case, the circles, to actually be located for the cloud providers, and the overlap. Then I would've to expand my prompt and provide more details. So I still have my title, and in this case the title is conveying a relationship or differences between security, IAM roles and permissions, as compared with AWS, Azure, and Google. My Structure, three overlapping circles. My labels, providing the unique features of the cloud providers. The colors for the circles, and the font. A little more detail with the legend for providing additional details for what I'm talking about. And then describing the circles and their placement, what's going to be in each circle for each cloud provider. And then finally, the overlaps between the cloud providers and the features that are going to be displayed, in this case between AWS and Azure, AWS and [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), Azure and Google Cloud, and the overlaps in question. And then finally, the central overlap between the three cloud providers, the services that match up. So to create a Venn diagram with Eraser AI, we have to create the prompt document.
>
> **[3:10](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-examples-for-ai-systems?u=76281980&t=190)** We have to go to the provider. We have to paste in the prompt, and we'll see our results. Let's take a look at that now;. Launching Eraser, the AI architecture diagram generator, what we have to now do is paste in our prompt to tell the AI tool what to do. There's the prompt that we took a look at. Let's generate. It presents the initial stages of what it's going to build for us. This looks okay, so let's generate the diagram. After a few seconds, it starts to generate from the prompt that was provided to the AI tool. Now we can expand out what it is showing us and then scroll through and then grabbing the actual graphic, we can start at the top and look at what it's conveyed in this Venn diagram. Slightly different placement. We're not seeing the overlap that you might see in [PowerPoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md), but it's presenting the material that we provided in our prompt for AWS, Azure, Google, then where they overlap between the different providers. And finally, the all providers overlap.
>
> **[4:48](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-examples-for-ai-systems?u=76281980&t=288)** And at the bottom of the diagram is the legend, which describes what the graphic is talking about. What we could do is top right, then save and edit the document and work on maybe changing what exactly was conveyed in the initial creation of this document. So give it a try using the prompt, heading over to Eraser and seeing if this can be something that could be useful in conveying technical information with Venn diagrams drawn by AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (6), [Google](../../Glossary/Service/Google.md) (4), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Powerpoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) (1)
> **Env Vars:** aws (6), iam (1)
> **CLI Commands:** aws (6)
> **Analogies:** such as (1), for example (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Business architecture diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/business-architecture-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/business-architecture-diagrams?u=76281980&t=0)** - [Instructor] The goal of business architecture is to ensure that the organization's IT systems are fully aligned with and support the business goals and objectives. So it's a framework for the overall alignment of the organization, how it operates, [Business Operations](../../Skills/Data%20Science/Business%20Operations.md), IT strategies, and the required processes and systems. Think for a second about your company. What documentation could help describe your business architecture? Now, business architecture has these key elements. Goals and objectives, this includes the organization's overall business goals and objectives, and any goals and objectives that relate to the required IT systems and technology that are used daily by the people that work at your company or in the organization. There will also be processes followed, key business processes, that are used by the organization in different departments to achieve the business goals. This will also require systems and objectives, maybe some [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md), certain [SaaS](../../Glossary/Concept/SaaS.md) applications, certain software applications need to be developed. Because we have processes, required processes, and in a lot of cases, they have to be developed, we'll have stakeholders. This could be internal developers, they could be partners, how do they fit into the IT systems and technologies that support the business of the organization? Perhaps there's third party services
>
> **[1:34](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/business-architecture-diagrams?u=76281980&t=94)** such as payroll services or even mainframes. Yep, maybe mainframes. Finally, what are the capabilities? What are the required capabilities that your organization needs? Maybe you need unlimited [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md). If so, is there security that has to be designed for that unlimited storage? Perhaps there's disaster recovery services. How are they detailed and described? How do they function when required? Okay, let's take a look at an architecture design of a fictitious company to get you thinking about what you might want to start drawing. First up, for your business, you've got strategy, and that strategy will have a goal, and that goal will have needs, and there will be stakeholders that work together across your company to design the overall strategy of the company, the goals, and you will have a variety, internal and external stakeholders. Okay, now we've got a business concept now that we're a company, so we need some business architecture and we'll need some design, we start building projects, and maybe it's internal design, maybe it's external. Maybe there's a number of developers working on this project, or maybe it's not at the development stage, maybe it's more at the [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) level. Regardless, there will need to be some sort of business structure, there will have to be a deliverable. Every single organization will have a variety of projects
>
> **[3:07](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/business-architecture-diagrams?u=76281980&t=187)** and if they can be documented in a way that makes sense to various audiences, it makes it easier to understand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Business Operations](../../Skills/Data%20Science/Business%20Operations.md) (1), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [SaaS](../../Glossary/Concept/SaaS.md) (1), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1), [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Application architecture diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/application-architecture-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/application-architecture-diagrams?u=76281980&t=0)** - [Instructor] Application architecture is also part of the [Enterprise Architecture](../../Skills/Software%20Development/Enterprise%20Architecture.md), and the goal of application architecture is to ensure that the organization's applications are aligned with and support the overall business goals and objectives. Now, some of the key elements of application architecture include the landscape itself. What's the inventory of the organization's applications? What's the technologies? What's the platforms? Are they running in [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md)? Are they in containers? Are they in the cloud? Are they on-prem? What business processes do they support? What stakeholders do they serve? We also have potentially development, what processes and tools are going to be used to develop and maintain the applications. Potentially, you might be using a cloud provider like [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) to develop your applications and host your applications. You'll also have a deployment process, as mentioned, it might be in the cloud, but maybe it's [agile](../../Skills/DevOps/Agile%20Development.md) development, and you will be using a lot of [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and delivery pipelines. Again, the cloud might be involved, and finally, the management of your applications. What are the processes and tools to manage and maintain applications that are used within the organization, such as monitoring and performance management? And this could be in one cloud. This could be in multi-cloud. So again, cloud architecture documents could be used for all of these areas. Let's take a look at an example. Again, a fictitious company with some application architecture. This isn't that technical.
>
> **[1:33](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/application-architecture-diagrams?u=76281980&t=93)** It's to get you thinking about the first level of designing some simple graphical documentation about your application architecture which can then be extended. So you've got a web domain, a model, an entity, something that you're developing, and it's going to rely on some sort of service or services. It will be driven by some requirements, some business logic. This is what we need. All right, if it's something that is running, that is computing, it will need data. It will need a repository. It might be containers, it might be virtual machines, but at the end of the day, you will have certain types of data, maybe all of them, [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md), non-relational databases, [NoSQL](../../Skills/Software%20Development/NoSQL.md), or maybe unstructured social media data that fits into what this application, or service, or even microservice is. Again, if you're trying to describe an application to somebody and there's no graphical representation, it's pretty hard to understand. But this document can generate the questions. Why are you using NoSQL? And maybe then you can launch into the reasoning of horizontal replication and scale and durability. Okay, continuing on, the service will have some sort of logic. It will be controlled and accessed by potentially some sort of remote procedure call, some restful call, all API calls here. Maybe it's managed and administrated with a [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) or through the web. So some application architecture that can be understood
>
> **[3:06](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/application-architecture-diagrams?u=76281980&t=186)** by a variety of audiences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (2), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (2), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (2), [Enterprise Architecture](../../Skills/Software%20Development/Enterprise%20Architecture.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Env Vars:** api (1), cli (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Data architecture diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/data-architecture-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/data-architecture-diagrams?u=76281980&t=0)** - [Instructor] [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md) is also part of the [Enterprise Architecture](../../Skills/Software%20Development/Enterprise%20Architecture.md) landscape. What are the data assets of your organization? What systems and processes are required to access the data, manage the data, secure the data? So the overall goal of data architecture management is to ensure that the assets align and support what the company needs. And there's a couple of key elements. These elements are, data assets themselves. Structured data [Databases](../../Skills/Software%20Development/Databases.md). [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md). Documents, images, social media. How do you manage that? How do you share it? Is your data considered a single source of truth? How do you manage this data? What processes and tools are used to manage, and maintain these assets within your organization? What governance tools? What processes? We also have the access to the data itself. Perhaps your data is contained within a data lake. Maybe the data lake also includes a variety of structured and unstructured data, and data warehouses. This can all be data that is held on-prem, and in the cloud. Of course, you'll need security as well. How do you secure and protect your data assets? So there's a lot of documentation that is cloud architecture diagrams that could be utilized to describe and manage and document how your data architecture within your organization is maintained. Let's take a look at an example. Again, a fictitious company,
>
> **[1:33](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/data-architecture-diagrams?u=76281980&t=93)** a data architecture map. Fairly technical, but let's see how this works out. You've got a product. That product requires a process, and is guided by an element of control. Somebody owns the process. The owner is also a major component of the business. They also participate in creating the process. These components are used in an application, which is used by the business actor themselves, but potentially other actors. Again, it depends on your design. That application utilizes certain application services, and it runs on a standard platform which could be not that well described. Or maybe in your company everybody knows that standard platform means [Kubernetes](../../Skills/DevOps/Kubernetes.md), but maybe it means [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md). Maybe it means [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). Maybe there could be more details. But again, a starting point. That application has several components, which are part of a large component catalog. At least it's documented. That application where it accesses data objects. They're stored in at least one location, and the application itself has accessed by a number of devices, which are also in different locations. Again, a fictitious map. But once you draw out your own map, doesn't it start looking like a bit of a troubleshooting map as to where problems might be occurring or how you could solve certain problems?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md) (4), [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) (2), [Enterprise Architecture](../../Skills/Software%20Development/Enterprise%20Architecture.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **Prerequisites:** required to (1), you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Technology architecture diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/technology-architecture-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/technology-architecture-diagrams?u=76281980&t=0)** - [Instructor] Technology architecture, or the infrastructure, is also a part of the [Enterprise Architecture](../../Skills/Software%20Development/Enterprise%20Architecture.md). I would say it's the most important component. If your infrastructure is having problems, things aren't working. So the [Hardware](../../Topics/Hardware.md), the software, and the networking components supporting the overall infrastructure. Some of the key aspects of technology architecture include the following: The technology landscape itself. Where are the assets? Where are the servers and the storage devices? Where are the operating systems and the applications? How are things deployed? What processes and tools are used? What configuration tools, what management tools, what deployment pipelines are utilized? Are they documented? Then we have management. Again, processes and tools to manage and maintain these assets. Now, the assets could be stored within the organization or at a variety of cloud providers. Certainly some of the management tools that are required are the monitoring and performance management tools. These could be third-party assets or they might be built into the cloud provider. Finally, the security of the technology; what patching, what updates, what access controls. Let's take a look at an example of the infrastructure architecture. We'll use an AWS example. In this example, we're looking at some architecture that could be supporting a two-tier/three-tier application, and the VPC is the network infrastructure at AWS. Compute must run within a VPC. It's also strongly suggested
>
> **[1:33](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/technology-architecture-diagrams?u=76281980&t=93)** that you don't put all your eggs in one basket, that you probably should use at least two different availability zones. That is, two different data centers separated by 30, 40 miles at least or more, so Availability Zone A and B, public subnets, private subnets, part of the design. In this case, a couple of private subnets and a public subnet. We're deploying an application load balancer that will connect to the [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) that will show up in the first private subnet listing. We also have end users connecting across the internet that need to connect to this public-facing application. Therefore, we're going to have to have an internet gateway to be able to get to the actual load balancer. The load balancer is protected by a web application firewall that protects the public incoming traffic with specific rules. The rules, or many rules could be further defined on this document or on other documents, depends on the audience. The instances that host the application in the different availability zones are hosted on private subnets. The instances are set up to scale up and down with a feature called auto-scaling, that [Databases](../../Skills/Software%20Development/Databases.md) are contained on private subnets in separate availability zones, and the records are synchronously replicated. Think of making this presentation in your own organization. Would this documentation help explain what you're doing? I think so, and it would also probably generate questions as to, could we do this, could we do that?
>
> **[3:07](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/technology-architecture-diagrams?u=76281980&t=187)** So the technology architecture, very common way of documenting resources, and we're going to find out throughout this course, it's pretty easy to do, and the tools are free as well, and hosted in various locations. We're going to use a few different tools that are absolutely free.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Enterprise Architecture](../../Skills/Software%20Development/Enterprise%20Architecture.md) (1), [Hardware](../../Topics/Hardware.md) (1), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** aws (2), vpc (2)
> **CLI Commands:** aws (2), find (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Unified Modeling Language (UML) diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/universal-modeling-language-uml-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/universal-modeling-language-uml-diagrams?u=76281980&t=0)** - [Instructor] UML, or the unified modeling language, is a standardized visual modeling language that on its own can be used to represent the design and structures of software systems. In this course, we're not going to rigidly adhere to the UML standard as we're not creating engineering drawings, we're creating cloud architecture diagrams. And most cloud architecture diagrams use icon sets provided by the cloud providers. So we can use these icon sets and the unified modeling language to create our cloud architecture diagrams. Think of it this way, the cloud has upended the IT world, and in many ways, cloud architect diagrams are a simplified UML design. Now, there's a few benefits for using this language, and number one, it's a general purpose modeling language that's understood in many different disciplines, and that's great. It helps to enhance the understanding of what we are creating graphically, with graphical notations and a variety of standardized symbols that we're going to be getting into in other clips in this course. Using all of these components, we can define a standard methodology to visualize how a system, a project, or a workload has been designed or is going to be designed. There are a number of diagram types under the umbrella of UML. The ones we're going to look at
>
> **[1:32](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/universal-modeling-language-uml-diagrams?u=76281980&t=92)** include structural and behavioral. Under structural, we're going to look at components and deployment diagrams. And we can group these in another way, and they sometimes are, as architecture diagrams. An architecture diagram will have components and deployment notes. We're also going to briefly take a look at class diagrams. Under behavioral, we're going to look at state diagrams and use case diagrams, and finish off with activity diagrams. So these are the UML diagrams that I think fit our description of this class of cloud architect diagrams the best.

> [!info]- Semantic Content
>
> **Env Vars:** uml (5)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [UML use case diagram overview](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-use-case-diagram-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-use-case-diagram-overview?u=76281980&t=0)** - [Narrator] Use case diagrams represent the relationships between actors and the functions or services within a software system. An actor could be an end user, it could be a service. Let's take a look at an example. If I'm creating a new user account, there's going to be a number of actors involved in this software system. On the left, we see the actor, the customer, the end user. On the right hand side of the screen we can see actors such as IMAP, third party verification a little bit further in system. Let's look at this diagram in some detail. It's a design of flow. What needs to happen to have this system working. The customer needs to confirm their email address. The customer also needs to register. From time to time the customer needs to update their account details or view their account or log on. Now, before they can log on, they have to have an account. Their email has to be verified as being unique. They have to have a valid email address. So some tasks proceed other tasks. Other tasks are linked together. If I'm going to be setting up email communication, one of the actors in this example is using IMAP. If I have to verify the credit card information presented by the end user, I could use a third party verification service. All of this information would be held by the system associated with a customer database.
>
> **[1:36](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-use-case-diagram-overview?u=76281980&t=96)** This is an example of a use case diagram.

> [!info]- Semantic Content
>
> **Env Vars:** imap (2)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [UML component diagram overview](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-component-diagram-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-component-diagram-overview?u=76281980&t=0)** - [Instructor] UML component diagrams represent high level components of a software system and show us the relationship between the different components in a system, or a workload, or a project. It's going to give me information about how the components are organized and structured. It helps me visualize the physical structure, or the virtual resources that are hosted on the physical structure, if we're looking at the cloud. And it helps me understand the relationships between the system components that make up my workload. Let's take a look at a component example. In this example, we have a couple of different components in our system. Starting out, we've got a deployment spec for this web application. This spec will define the specifications of the artifact, the web application. It's running on an application server. We can see the protocol is TCPIP. And we also have a view, a CRM view, customer relationship management view. Another way to look at the data. The web server is also built from a number of different components. The database server is Oracle. Below the database, we have some state services and a mail server. Everything is being protected by a firewall. The end user has to make it through the firewall to use the application. If I was drawing this with the icons from a public cloud provider, it would look a little different.
>
> **[1:33](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-component-diagram-overview?u=76281980&t=93)** That's typically described as a deployment diagram, which is coming right up. But there's not a lot of difference between the details of a component diagram sometimes and what is also described as a deployment diagram. Sometimes we can combine them, as we'll see in this course as well. So a component diagram.

> [!info]- Semantic Content
>
> **Env Vars:** uml (1), tcpip (1), crm (1)
> **CLI Commands:** make (2)
> **Documentation:** spec (2)
> **Speakers:** - [instructor] (1)

#### [UML deployment diagram overview](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-deployment-diagram-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-deployment-diagram-overview?u=76281980&t=0)** - [Mark] Deployment diagrams. They represent system [Hardware](../../Topics/Hardware.md) and the associated software components. Well, we're now in the cloud. Sometimes we don't have any hardware components, they're virtual components. I guess you could call them software components. Architecture diagrams, another definition of cloud architecture diagrams, include both the components and deployment details. We'll see this several times in this course. Let's take a look at a deployment diagram. This is a three-tier deployment, again, AWS and we'll just follow the logic. We have some users that are accessing this application and they're accessing the application at AWS. They're finding the application because of a DNS resolution, Amazon Route 53 being the service. Perhaps they're accessing data for the application that is being stored in an S3 bucket, fronted by CloudFront, the CDN. The multi-tier deployment has a load balancer that is supporting the [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) hosted in two separate private subnets, across two availability zones. Auto scaling is scaling the resources up and down, i.e. the web server compute resources. Below that is another load balancer and another auto-scaling group for the application servers, and at a separate private subnet at the bottom of this graphic, we can see that there is a multi AZ deployment
>
> **[1:35](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-deployment-diagram-overview?u=76281980&t=95)** of a relational database server. We also have private subnets hosting all of the assets, the web, the application, and database servers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (2), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **Env Vars:** aws (2), dns (1), cdn (1)
> **CLI Commands:** aws (2), az (1)
> **Definitions:** is a  (2)
> **Speakers:** - [mark] (1)

#### [UML sequence diagram overview](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-sequence-diagram-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-sequence-diagram-overview?u=76281980&t=0)** - [Instructor] Sequence diagrams represent interactions between objects or components in a software system, over time. It shows the flow of communication between the different parts of the system and can be helpful to communicate how the system works, especially to a non-technical audience. So we're visualizing the interactions within processes and programs and sometimes across different IT infrastructures. The sequence of interactions is messages and communications between the actors and objects, could be end users and [Databases](../../Skills/Software%20Development/Databases.md), or other external interfaces. Let's take a look at a sequence diagram. On the left, we have the actor, the end user and we've got some other components in this sequence diagram. We have a system log-on process, we have user accounts and we have an online portal. Perhaps this end user wants to go shopping. They will have to identify themselves. They're presented with a log-on dialogue box. They enter their username and password. The system log on has to pass that information and get it validated. That information is stored in some sort of database for the user accounts. If the username and password are valid, the user will have access to the online portal. There's a logical flow, it has to be successful or the user won't be able to log on. So we have these different areas of sequences
>
> **[1:34](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-sequence-diagram-overview?u=76281980&t=94)** between the end user and the system log-on, the system log on and the user accounts, and the user accounts and the online portal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Speakers:** - [instructor] (1)

#### [UML state diagram overview](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-state-diagram-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-state-diagram-overview?u=76281980&t=0)** - [Mark] State diagrams represent the different states that an object or component can be in, and the transition between the different states. Let's take a look at an example. In this case, the end user is accessing CloudFront. This is Amazon's CDN. The request to CloudFront is an origin request for data. The origin request is intercepted by a service called Lambda@Edge. Lambda@Edge is where you can host a custom function to carry out whatever task you want. Lambda takes a look at the request and directs the request to an Amazon DynamoDB database. Another end user request formulates a request from the API gateway, which is hosting version 1 of an API. The version 1 API calls the version 1 function hosted by Lambda. At the bottom of the screen, there's an API gateway deployment with an API version 2. The Amazon API gateway can handle APIs of different versions. If there was a request to the API version 2, it could in turn talk to Lambda to carry out the version 2 function. There's an example of a state diagram in the various states and transitions between those states.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), cdn (1)
> **Versions:** version 1 (3), version 2 (3)
> **Definitions:** is an  (1)
> **Speakers:** - [mark] (1)

#### [UML activity diagram overview](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-activity-diagram-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-activity-diagram-overview?u=76281980&t=0)** - [Instructor] An activity diagram can illustrate a logical workflow, showing processing, conditions, sequences, and potentially even data access by the end user, or not. It just depends on the activity. Let's look at an activity diagram. In this example, we have a process which is going to start and complete. It starts and checks the stock price. How is it going to check the stock price? Probably an external process going on, then some calculation, and then a buy or sell recommendation will be generated. Now, there could be some technical information going on here, but the end user, if you're just trying to describe the process, you don't necessarily have to provide that many details. After the buy or sell recommendation has been generated, potentially, since money is changing hands, we have to route for approval. Well, are we buying or selling? Are we buying or selling stock? Or is it rejected? If I buy or sell stock, let's report the result and end. If this process is rejected, it will fail and also end. Hopefully, you can see how you could design these types of diagrams and not have to give away too much from the technology standpoint. In fact, it might be a great way to start designing how an application should function from the end user point of view without having to do any coding.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [UML class diagram overview](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-class-diagram-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-class-diagram-overview?u=76281980&t=0)** - [Narrator] A class diagram represents the structure of a software system in terms of what are called classes that make up the software system, and the relationship between those classes. You might see something like customer, order, and product. Another way of thinking about a class diagram is a visual workflow of object oriented [Software Design](../../Skills/Software%20Development/Software%20Design.md), and it's showing you the structure of a software system. And developers will use class diagrams in the strict UML format to define and layout how their software is going to be designed. Think of [Databases](../../Skills/Software%20Development/Databases.md), and the schema, and all of the different components within the database. Let's look at an example. Here, we see a user log on, a Customer and an Order. What we see are class names, i.e. Order, attributes of the order itself, shipping date, shipped, and the operations. If I have an order, it could be placed, if I have a valid credit card, or it can be canceled. What else do we have? We have the user log on, and we've got the Customer. Now, note with the customer there are attributes, and the user log on there are attributes, but the user log on doesn't have any operations. It's just a store of information that identifies that user when they log on. Whereas the customer class, well, there's a credit card, there's history of orders, updating information, certain operations that need to be defined.
>
> **[1:34](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/uml-class-diagram-overview?u=76281980&t=94)** If we make this more complicated, add in more fields, we can see if I'm dealing with [products](../../Skills/Software%20Development/Microsoft%20Products.md) or selecting the product or the administration to deal with the overall administration of the software system there is additional information. As we make it bigger it gets more complicated with more classes. Always attributes, not necessarily operations. So there's a look at a class diagram, which might be a level in your cloud architect diagrams when you start looking at the application that you've written that is hosted on your infrastructure for your business processes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Design](../../Skills/Software%20Development/Software%20Design.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** make (3)
> **Env Vars:** uml (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Organizational responsibilities](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/organizational-responsibilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/organizational-responsibilities?u=76281980&t=0)** - [Instructor] If you haven't already created a cloud center of excellence within your organization, it's something to consider. Defining a group of important individuals within your organization to manage the deployment of the cloud, the documentation of the cloud, really everything to do with the cloud deployment of the organization is essential to be able to have standards from the top to the bottom of your company. Defining a cloud center of excellence is going to allow you to put forward and maintain best practices, best practices that are presented by well-architected frameworks, and ensure that, for example, with documentation, you have standards that everybody follows. You want to ensure that the organization as a whole can leverage the benefits of [Cloud Computing](../../Topics/Cloud%20Computing.md), including deployment, maintenance, costing, and if it isn't a top-down support, if it's just merely a team or yourself which is driving the bus for documentation or cloud, it's going to be much more difficult to have standards. So the cloud center of excellence is providing the overall support for everybody within the organization. Everybody is working towards the same goal, and it also provides a high level and a detailed level of guidance, depending on what your job is within the organization. Some of the advantages for establishing a CCoE within the organization include improved efficiency. A cloud center of excellence is going to give you
>
> **[1:35](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/organizational-responsibilities?u=76281980&t=95)** the collaboration that you need to reduce the risk of duplication and to ensure that the resources are being used effectively. If the resources are being used effectively, well, you're going to have better cost savings. A cloud center of excellence is going to give you increased agility, because again, you've got that top-down support. Teams can work quickly and easily to use the cloud resources, because everybody supports moving towards the cloud. If you have top-down support, you also will have a better idea of the overall security and compliance that the company needs to follow. Every company is going to have a required level of governance and compliance that they have to follow. And finally, as mentioned, the collaboration aspect. Everybody's talking the same language. The CCoE can facilitate communication between different teams within the organizations, having team meetings, having organizational meetings, departmental meetings for the different audiences within your organization to ensure everybody's working towards the same goals and objectives. Keep in mind that these features are felt across the organization if the cloud center of excellence is supported from the executive branch on down. So before starting, what is the purpose of the workload or architecture that is going to be hosted in the cloud? Keep in mind, we've talked about [Enterprise Architecture](../../Skills/Software%20Development/Enterprise%20Architecture.md). All of those components fit into these discussions. What are the system requirements? What are the components and relationships
>
> **[3:08](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/organizational-responsibilities?u=76281980&t=188)** between the different system requirements? Are they all in-house? Are there some third-party relationships that we have to take a look at? What tools and software are we using? What additional education do we need to be able to move forward? And of course, these tools and software could relate to the documentation tools as well that you require. And what's the audience of what you're creating, i.e., documentation-wise? How does this help everybody within the organization? The cloud team responsibilities for the projects that they are developing, deploying, and maintaining. Each team is going to have to design and maintain their cloud computing infrastructure, be responsible for what they design and what they deploy. They're also going to have to be involved at some level of creating and maintaining the cloud architecture documentation for the actual systems and infrastructure that they are deploying. This could be at many different levels and for many different audiences. Along with the regular meetings and communication with the cloud center of excellence and working with internal or external stakeholders and subject matter experts, gather the requirements for their overall project at every technical level. The documentation also has goals. It has to be responsible. It has to provide for how the architecture within the organization functions. If it's not properly drawn, it's not much use.
>
> **[4:44](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/organizational-responsibilities?u=76281980&t=284)** It also has to inform a wide variety of audiences within the organization. And ultimately, once the documentation has been approved and has been written and cataloged and version controlled, it can ensure that the existing [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) is properly configured and maintained now and in the future. It also can help maintain the overall governance and compliance standards that the organization has to follow, because after all, it's visually accessible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (2), [Enterprise Architecture](../../Skills/Software%20Development/Enterprise%20Architecture.md) (1), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1)
> **Documentation:** the documentation (4)
> **Warnings:** keep in mind (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. UML Diagram Types for Cloud Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [Use case diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/use-case-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/use-case-diagrams?u=76281980&t=0)** - [Instructor] All right, it's now time to put our thinking caps on. We have to plan a use case diagram. So where are we going to start? What is our starting point? This use case diagram's got to function as a foundation for the [Technical Documentation](../../Skills/Software%20Development/Technical%20Documentation.md). It's a starting point. It's for a certain audience, and it might end up being a non-technical audience, but it very well might end up being a technical document as well. Again, it just depends on that audience what you're trying to put across. But use case diagrams are a great place to start. It's going to show the interactions with the end user, and if you think about it, any application that we create ultimately ends up being driven success or failure by how the end user uses that application. So if there's problems, we have to know what the interactions are. The use case diagram is also going to be able to establish the system requirements after it's properly laid out at a starting level. There's a number of labels that we're going to use, and the order of your documentation once it's presented, how it's viewed, the labels, for example, using precedes, but you can use any label that you want. The label precedes might help to indicate the order of the tasks. For example, if you're defining an online store, perhaps the end user has to log on first and authenticate before they can actually get to the store. So having some flow in the document could be helpful. The idea of a use case diagram is to summarize those actions
>
> **[1:38](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/use-case-diagrams?u=76281980&t=98)** of the system and, i.e., the actors, the end users. We want to try to create scenarios for all user interactions, whether it's the system as a whole, a particular application, a particular functionality. That interaction with the end user can help out in documenting what's happening with the system and sometimes pinpoint exactly where the problems might be. And systems might be all internal or there might be many external systems or services that get their own use case diagram to start. Or maybe it's the bigger picture diagram is the first one. Ultimately, you're trying to give a scope of, first of all, the proposed and final system. So these documents will change over time. There's a number of symbols that can be used for use case diagrams. We're going to look at the basic ones. Once you start drawing use case diagrams, you'll discover which additional symbols you might like to use, but they're pretty basic, starting off with, what are we defining, the use case. Then we have actors, typically with the stick figure, defining the end user, the users, or the systems involved. Then we have associations, linking the use cases that are defined together. Perhaps the arrow is indicating direction. Perhaps you will label your associations to give more detail. You can also define your use case with some boundaries. So let's look at a couple simple examples. I'm trying to define a website.
>
> **[3:12](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/use-case-diagrams?u=76281980&t=192)** I've got the end user. They're going to visit the website. It will show the webpage. Another one of the actors is the actual server that's hosting the webpage, and there must be storage for the website files. Could we add a lot more detail? Absolutely, but it's enough to start discussion, and it's very easy to quickly draw a basic use case and then start going into the layers that you desire. Let's look at some more detailed use cases. Here's a use case for workflow for purchasing. Now, we can see that we've got two areas, authentication and then checkout. We've also got a number of actors. The end user has to authenticate, they have to log on. In order to carry out that process, they'll have to be some sort of identity provider. Is that internal? Is that the cloud? Is it a third party? Once I check out, I'll need some sort of a payment service. Perhaps I'll need PayPal. Perhaps I'll need another entity. So you can see from the top to the bottom the different processes that define what's going to happen. Let's assume you presented this, but you hadn't thought of single sign-on, so maybe that gets added in. Oh, I didn't think of that. Yeah, we would need an identity provider. Perhaps you had credit card information for payment, but you didn't think of PayPal. Maybe you would add another option once you present this, expanding out the workflow. Maybe you're developing a website and you have administration of the website,
>
> **[4:46](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/use-case-diagrams?u=76281980&t=286)** and there's certain tasks, creating the user account, updating, deleting, finding, locking, password reset. Maybe in the initial days, the website administrator did everything. As you got bigger, you added in help desk responsibilities. They took over most of the tasks, but did they take over all of the tasks? Does this have to be modified? Does the help desk actually create user accounts or is that website admin? There's no wrong answer here. You have to decide on the responsibilities. So are there different responsibilities? Should the documentation have more detail? There probably are different security levels, maybe not, probably, and of course, it depends on the audience. Do you need more details for select audiences, or are you trying to illustrate all the jobs that these people do? In regards to business architecture, we can see some design. Is this a template anytime there is going to be a new business concept? Is it something to fill out? Maybe you could create templates and present these to different departments saying, how does this fit with your thought process? So here's some topics to consider drawing. [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md). How does the end user interact with cloud storage? Or how is cloud storage defined for the different levels of regular cloud storage or unlimited cloud storage or archive storage? Maybe you could map out your cloud backup scenarios. What is backed up and where is it stored? How does the end user access a database hosted in the cloud?
>
> **[6:22](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/use-case-diagrams?u=76281980&t=382)** How do they authenticate? How about authenticating to a cloud workload? Can a use case help certain audiences understand where the problems are? What happens when there are problems with authentication? Could a use case diagram help the end user and the help desk and the administrator? Food for thought. You should try some of these out. Later on in this course, we'll talk about some of the drawing tools, and you can easily start creating use case diagrams.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (5), [Technical Documentation](../../Skills/Software%20Development/Technical%20Documentation.md) (1)
> **Analogies:** for example (2), picture (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Class diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/class-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/class-diagrams?u=76281980&t=0)** - Let's take a look at UML Class diagrams. Now to be fair, these get pretty complicated, and they're specialized for development, but we're going to cover them anyways because they fit into some of the diagrams that would be supported in [Enterprise Architecture](../../Skills/Software%20Development/Enterprise%20Architecture.md), and you might very well have these at different layers for different audiences when you're designing your cloud architecture diagrams. Ultimately what they provide is a visual workflow of software that is defined as object-oriented software. It's been around for a long time, and the idea is to illustrate the overall structure of a software program in detail. And you should create class diagrams before you start coding. This will result in much cleaner code because you can present your diagrams to the team or to developers and decide on responsibilities, who's going to create what, and you'll also get feedback which will improve what you're trying to create. The visibility of the attributes that you're creating is going to be defined with symbols. The class shape that's going to be used is a rectangle with up to three rows. The top row is going to give you the name of the class. The middle row is going to give you the attributes, the descriptors of the class, and the bottom section might have some methods or operations that the class can use. The elements or attributes that are defined with a plus sign
>
> **[1:32](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/class-diagrams?u=76281980&t=92)** can be accessed outside of the defined class. The private elements or the attributes that are defined can only be accessible to the methods inside the class if there's a minus sign. And you also might define that there are certain elements or attributes that you want to protect with the hash symbol. So for example, the administrator, use of service, private staff number, we're protecting this. Let's look at a couple of examples. First up, we have a class diagram for a log on for the end user. They're also a customer. Once they authenticate, they could place orders in the online store. So we have a defined number of classes. We can see class names. We can see attributes, and we have operations. We also have public and private attributes. Now if you present this to an audience, a technical audience, the question might come up, should some of these elements or attributes should they be protected, such as maybe the email? Maybe you hadn't thought of that. One of the advantages of sharing the information for feedback. Now let's take a look at a class diagram for a cloud environment that involves some private on-premise components as well as external public cloud provider information. When the end user, i.e. the cloud consumer or the administrator connects to the portal, they're then going to be directed to the cloud.
>
> **[3:07](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/class-diagrams?u=76281980&t=187)** The cloud could be on-prem as we'll see or particular [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md). The support services for these cloud services involve business, operational and non-functional services, and these are supporting both clouds. On-prem, we have a cluster with various nodes and a virtual machine manager so the hypervisor may be VMware, and we'll have specific [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) that run on specific [Hardware](../../Topics/Hardware.md), and there will be specific network, server and storage components. The attributes could be filled out providing these details, pointing out that the class diagrams have been around long before the public cloud. Continuing on the cloud services, let's say AWS or maybe it's multi-cloud, involve [SaaS](../../Glossary/Concept/SaaS.md) apps, [platform as a service](../../Glossary/Concept/PaaS.md) apps and infrastructure services. Note that the infrastructure services also link into the on-premise services. So maybe this is bursting into the cloud. We don't know from the document. The virtual environment for the platform as a service environment has several development environments including a testing environment. So this could be presented to an organization saying these are the pieces that we have, and perhaps the question comes up I think you need to expand the information for [infrastructure as a service](../../Glossary/Concept/IaaS.md). Is that specifically just on-prem or is there something in one particular cloud provider? So you can see how questions could be brought to the table by presenting a diagram such as this.
>
> **[4:42](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/class-diagrams?u=76281980&t=282)** And even though it's technical, it's not yet filled in. So a non-technical audience or a project manager could understand the flow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (3), [Platform as a service](../../Glossary/Concept/PaaS.md) (2), [Enterprise Architecture](../../Skills/Software%20Development/Enterprise%20Architecture.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Definitions:** is a  (2), defined as (1)
> **Analogies:** such as (2), for example (1)
> **Env Vars:** uml (1), aws (1)
> **CLI Commands:** aws (1)
> **Warnings:** note that (1)
> **Speakers:** - let (1)

#### [Activity diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/activity-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/activity-diagrams?u=76281980&t=0)** - [Instructor] When activity diagrams are utilized, they illustrate a logical workflow and it can show processing, specific conditions and sequences that might arise because of the conditions, and of course, the end user using the product or using the component or an area of a system. There are a number of activity shapes that you will see in activity diagrams. First up is a frame framing your actual activity. You can also have connections and rounded rectangles. There also will be a black circle indicating the activity is ended. There might be a clear circle indicating the start, and there will be decision points as to which decision drives the next possible outcome. Other activity shapes include an ellipse and the actor. Let's take a look at a simple activity diagram, starting with opening mail. Now, is this mail important or is it junk? There's a decision node that will determine the next step. You could be using something like this by defining filters for email yourself, or maybe it's going to define a process in the cloud, which is actually going to be programmed but it's still going to be first designed as an activity without any coding knowledge required, just logic.
>
> **[1:36](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/activity-diagrams?u=76281980&t=96)** So the decision to read the email or to delete the email finishes this activity. So a simple diagram, but the latter logic could be continual and more complicated may be the next decision, instead of ending, would be am I archiving the email? Am I sorting my email? So it could be lots of logic flows to consider and perhaps when you present this to an audience, there will be other comments and suggestions that can make this diagram better.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Architecture diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/architecture-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/architecture-diagrams?u=76281980&t=0)** - [Instructor] When we look at the architecture diagrams defined in the UML cannon, remember that component, and deployment diagrams are considered architecture, and this is also a standard that is morphed as the public cloud has taken over most IT designs for most organizations. When we look at deployment diagrams, this is going to represent the system [Hardware](../../Topics/Hardware.md), the virtual hardware and the associated software components. Even that's tricky because the software components might be a cloud service such as a load balancer, and what we start seeing is that just defining a deployment or a component view isn't enough. We usually need more details. So the architecture diagram typically combines the component view and deployment details. A component diagram is visualizing the physical components or the virtual components that are hosted on physical hardware. Again, in the cloud, we're dealing typically with virtual resources. The relationships between the logical, and physical components in a system are important. The physical might be hidden, but it might be available on-prem. They want to make this too confusing, but usually we're dealing with virtual resources, and again we're addressing the UML standards, which have morphed over time as we're going to see. Regardless of whether they're virtual or physical,
>
> **[1:34](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/architecture-diagrams?u=76281980&t=94)** these diagrams, the architectural diagrams, are going to clarify and allow you to check the overall functionality before you actually build your systems or workloads. Typically, in a component diagram, there's a relationship shown between the components using a connector that's defined as a dependency connector. There's a variety of other connectors that you could use. We're just using a simple example. An example of cloud documentation without showing the cloud icons provided by the cloud provider such as AWS, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) or [Google](../../Glossary/Service/Google.md), where you're mapping out deployment specs for your workload. In this case, the client is connecting to an active load balancer that will then direct the requests to a couple of servers at least, but maybe there'll be more servers, maybe the servers can scale the same with storage. Very basic, we have some failover. There's an active and passive load balancer, so we could deduce that this is looking at a design using potentially third party load balancers because if we were using the Amazon elastic load balancers, the active load bouncers failover in the background, we would've nothing to do with it. So again, looking at this document questions could be raised as to "Is it accurate?" Let's move to a modern view using the icons from AWS. And note, we can get the icons for Google,
>
> **[3:08](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/architecture-diagrams?u=76281980&t=188)** and for Azure and other cloud providers. Looking at the components of AWS, we have Route 53, the DNS service that is going to forward requests to really all services at AWS services will have a DNS name such as an elastic load balancer. The load balancer will forward requests to [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances, the instances that are targeted, and the EC2 instance will communicate most likely with some sort of database, in this case, a [MySQL](../../Skills/Software%20Development/MySQL.md) database. So we have some information as far as the flow. Maybe we want to add additional information to this design. It's part of the cloud, and it's actually running in a particular availability zone. Let's add a bit more information. Combining the components, and the deployments of the resource we've added into the fact that the EC2 instances can auto-scale, and the MySQL instance is actually being hosted by Amazon relational database services. But potentially we might want more than that. We have the unified modeling language, but what we find is that most teams have thrown out the stock standard UML diagrams using the icons from the cloud provider. So perhaps we have to introduce another type of documentation, and this is the C4 model. The C4 model was developed as a way to do [Software Development](../../Topics/Software%20Development.md) with teams with cloud architecture,
>
> **[4:44](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/architecture-diagrams?u=76281980&t=284)** providing more communication information, so we can add-in additional pieces. Let's add some of them in now, so we can say, okay, Route 53, it's job is DNS, but it's also defined with specific traffic patterns, including health checks for failover. The load balancer is an application load balancer. The web application is containerized [Java](../../Skills/Software%20Development/Java.md) and [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md). The database is a relational database. The web application allows administrators and employees to view and manage the online store information at this infrastructure level and the database. It's storing the online store information. Of course, we could go much further than this, but now you're seeing kind of the combination of the thought process of UML, the components, the deployment, and the aforementioned C4 model. So standards are always changing in the documentation of cloud architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (3), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Google](../../Glossary/Service/Google.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (2)
> **Env Vars:** uml (4), aws (4), dns (3), ec2 (3)
> **CLI Commands:** aws (4), mysql (2), make (1), find (1)
> **Definitions:** defined as (1), is an  (1), is a  (1)
> **Analogies:** such as (3)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Sequence diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/sequence-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/sequence-diagrams?u=76281980&t=0)** - [Instructor] UML sequence diagram is going to deal with sequences from start to finish. Also over a period of time, really, because the sequences will take time. So we're visualizing the interactions within workloads, maybe a business process, or within workloads and IT infrastructure over that period of time. Understanding the flow of control and the dependencies between the different parts of the system can also help in design and troubleshooting. Presenting a sequence diagram to a technical audience, or maybe even a non-technical audience, will help identify any problems, potentially performance bottlenecks, from a technical point of view. But there could be other issues pointed out by a non-technical audience that may surprise you. The elements of a sequence diagram include a lifeline. The instance of interaction. It's shown as a broken vertical line. Top to bottom. There's communication between the instances, and this is the messaging between the different objects. Now we're saying "objects." Could be software, but the objects could actually be the actual actors in the system. And there might be alternative decisions made based on, maybe the person is attempting to log on but they forgot their password, so there has to be an alternative path. First up, let's look at an example of the lifeline. In this case, we have a process we want to follow. A system log on.
>
> **[1:31](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/sequence-diagrams?u=76281980&t=91)** Once I log on, or if I'm attempting to log on, there has to be some user account information that verifies the end user. Potentially, once I get through these different lifelines, I'll be able to get to the system dashboard or portal. Let's add some information in. The user gets presented a log on dialogue box. They enter their username and password. Hey, that could take time. Maybe they forgot their password. Assuming it's done in a timely fashion, we have to validate that username and password. If you're like me, you'll use a common password and then forget it. There will have to be an alternative. However, in this case, the user knows what's going on, has entered their username and password. It gets validated, and they're allowed to move towards the online portal and start shopping, or whatever they have to do. So we have these sequences that potentially can take a bit of time. Maybe the user forgets their password. Is there a way to help them identify that information? Any sort of prompts. Is the user account information stored in multiple locations, or is it stored in the cloud, or is it local? Is the portal that the user eventually connects to based on the country that they're in? All sorts of possibilities here. I also might have a process of an alternative approach. Like me. I forgot my password. Okay. Forgot my password. You're going to have to reenter the username or password. Maybe I forgot my username and my password.
>
> **[3:07](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/sequence-diagrams?u=76281980&t=187)** Maybe there will be other alternative processes that link onto these sequences. Let's take a look at a UML sequence diagram in relationship to the cloud. In this case, we're looking at CloudFront. Cloud front is Amazon's CDN. It's defined by the icon web distribution. So let's look at the process. The end user sends an HTTP request. The request has a version header. How are we going to deal with that? Because CloudFront by itself doesn't have the smarts to deal with that as far as multiple version headers. But if we use lambda, we can actually jump in the middle of the communication. So lambda can work with CloudFront. Lambda being a service where you can host a custom function to jump in the middle of communication from the viewer, the end user, and the data that they want, the origin. So there has been an origin request. This invokes a function, a custom function that you have written. It takes a look at the request. It says, "Oh, the person is giving that version header. I'm going to get that information from the DynamoDB database." Now I'm going to pass that information back to CloudFront. Here's where you're going to send this request. Okay, I'm going to route this request to the matching a API gateway, in this case, version one. API gateway calls another function, another custom function to carry out its task calling another AWS service.
>
> **[4:42](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/sequence-diagrams?u=76281980&t=282)** In the future, there might be a request with a different header that actually matches up with the other API hosted via API gateway version two, which then in turn would call the Lambda function version two. So a technical overview of how the services are going to actually function within each service would be other deployment, other technical details that would have to be documented as well. But this might assist in troubleshooting the overall flow of why there are problems or why this is a solution.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), uml (2), cdn (1), http (1), aws (1)
> **CLI Commands:** aws (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [State machine diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/state-machine-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/state-machine-diagrams?u=76281980&t=0)** - [Instructor] When we're looking at a UML state diagram, we're trying to model the behavior of a system as it transitions between specific states, at least two. Your workload will have multiple systems and multiple transitions to consider. The states that are being transitioned to are going to represent a specific condition or a situation in each system. The transitions are the events or the action that causes the change from one state to another. For example, you're monitoring a system, that system CPU utilization, you don't want it over 70%. Once it exceeds 70%, well, now what do I do? What's the action? I can't authenticate. Do you need to change your password? I'm carrying out this process, there's a situation. What do I do now? These sorts of quote unquote states. The elements used in the state diagram, the starting point, the initial state, a circle with an arrow pointing to what we're moving towards or transitioning to. There'll be a state, a condition or a situation, and continuing the transition from one state to another. The rectangle will have an action. The expectation as to what's going to happen, what should happen. And the final state when we're finished, also represented as a circle. Now, if you're being official, UML sometimes these circles at the end are represented as black.
>
> **[1:35](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/state-machine-diagrams?u=76281980&t=95)** Doesn't have to be, just some of the standards you will see. Let's look at an example, a simple example. So I'm starting a process. The process is trying to extract data. This is part of a data lake process. For example, with Amazon, you can use a glue process that extracts the data and the state and the elements and puts it into a centralized catalog. So what data source are we going to actually start with? Let's extract. Let's transform the data and load the data into the catalog, the ETL process, and then we will end. There could be many of these state diagrams if you had many different processes to document. Let's look at an example using custom lambda functions for an online store. We're starting, Lambda will check the stock. It now has a choice based on what it has found. Does it have to send a notification or does it continue on with the processing of creating an order and an invoice? Okay, in this case, it's going to create an order generate the invoice, deal with the payment. Now that it's ordered and paid for, send the notification to the end user to the order desk, or maybe the choice was I don't have any stock. In this case, I'm sending a notification to inventory. We have to order more. Could be success, could be failure, depending on the choice, and then it ends. If I present this diagram, potentially I'm asked
>
> **[3:10](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/state-machine-diagrams?u=76281980&t=190)** if I should change some of the actions and detail. Is it a notification to the end user, to the order desk to inventory for better representation when I'm looking at this document?

> [!info]- Semantic Content
>
> **Env Vars:** uml (2), cpu (1), etl (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Creating UML diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/creating-uml-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/creating-uml-diagrams?u=76281980&t=0)** - [Narrator] In this demo, we're going to take a look at how to create UML diagrams, cloud architecture diagrams using [diagrams.net](https://diagrams.net). [Diagrams.net](https://Diagrams.net) used to be [draw.io](https://draw.io). They've changed domains so if you pick [draw.io](https://draw.io), it will send you over to [diagrams.net](https://diagrams.net). The nice thing about this tool is it's free. You don't have to log on or register, and off you go. You can work in the Cloud or you can download the software and install it on your client. So let's click start. It will then give us a choice, and we can decide later, where do I want to store the documents, the diagrams that I'm creating? It's a good idea to think about this to keep organized, Dropbox, [Google](../../Glossary/Service/Google.md), [OneDrive](../../Skills/Cloud%20Computing/Microsoft%20OneDrive.md), on your own device, lots of options. We'll decide later. We're now presented with our interface and we have the different shapes on the left. If I pick a shape, it launches onto the whiteboard. If I click the shape, I can then start adding in information, whatever I want to enter depending on what diagram I'm creating. If I select the shape and highlight one of the arrows, I can quickly say, well, I want to continue making additional information boxes, dialog boxes. It just depends what I want to create. Let's move this over and center it so it's pretty easy to create these diagrams.
>
> **[1:34](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/creating-uml-diagrams?u=76281980&t=94)** Note on the left we have arrows. If I click on the whiteboard, it will disappear and then notice I can move the arrow around, use it where I wish to use it. We've also seen that we can have arrows protruding from the different shapes that I select. Other shapes you'll probably use are the ellipse for the use case documents and you'll use the diamond for [Decision-Making](../../Skills/Data%20Science/Decision-Making.md). Again, notice it's pretty easy to set these options up. I can also select the actor, the service, or the end user, so I can create these documents very quickly. If I was going to decide to save my document, I can click up at the top to save, and now I have a choice. I can name it. Notice the document is in XML, which means it's quite usable in many different formats, but I also can decide I'm going to save it as a .png file or other formats. Once I select my format, I can then decide where I want to save it so I could decide to save it on the device that I am working on or in one of these [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) areas. This is much easier than using [PowerPoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) because although we can use these general shapes in PowerPoint, we don't have the arrow control that we have with this product. If I scroll down, I can see that I can start looking specifically at some of the other UML options
>
> **[3:09](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/creating-uml-diagrams?u=76281980&t=189)** and we can see the specific UML options for a lot of the different diagrams. If I scroll down even further, let's reduce the size of the UML, and what we can also do is take a look at some of the advanced options. The advanced options gives me more options for drawing these different diagrams. So there's a quick look at [diagrams.net](https://diagrams.net) to start you off with drawing UML diagrams.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powerpoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) (2), [Google](../../Glossary/Service/Google.md) (1), [Onedrive](../../Skills/Cloud%20Computing/Microsoft%20OneDrive.md) (1), [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) (1), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1)
> **URLs:** [diagrams.net](https://diagrams.net) (4), [draw.io](https://draw.io) (2)
> **Env Vars:** uml (5), xml (1)
> **UI Navigation:** select the (2), scroll down (2), click on (1)
> **Exercise Files:** download the (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)


### 3. Creating Cloud Architecture Diagrams

[↑ Back to Table of Contents](#table-of-contents)

#### [Mind map diagrams](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/mind-map-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/mind-map-diagrams?u=76281980&t=0)** - [Instructor] When it comes to drawing cloud architect diagrams, you may not know where to start. You may be sitting on a plane, you just have your phone. It's on the weekend, you're not at work. You thought of something. How do I document it? I suggest you take a look at creating a mind map. Now, a mind map is pretty simple and can be a great starting point. It allows you to visually organize and structure any type of information because you're in charge. It's kind of like a use case, but mind map is something that you will see defined in many drawing tools to help you quickly start jotting your ideas down. Maybe you want to brainstorm an idea, organize some thoughts, or plan projects. It's really going to help in planning and organization. You could get your rough draft down so you don't forget it, and then you can move into whatever drawing type you want. Since anybody can create a mind map, it can really enhance communication and buy-in across your company, and everybody can collaborate with these mind maps because you can be drawing them really with any product. So maybe you want to consider specifically [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) and their features. Maybe it's [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md), maybe you just start spit balling, okay, videos, documents, images, files, data sets. Then I can break it down into smaller tasks. Maybe the smaller, manageable tasks is where the cloud architect [Diagramming](../../Skills/Software%20Development/Diagramming.md) comes into play. Let's take an example of a security map for Amazon, so [AWS Security](../../Skills/Cloud%20Computing/AWS%20Security.md).
>
> **[1:35](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/mind-map-diagrams?u=76281980&t=95)** I have to have an account. There's typically a root user for my account, and there's a password, and there'll be an access key for what that root user can do. Well, the root user can do anything, but besides that, maybe I should protect it with MFA. Outside that root user, we have other security components throughout the AWS operating system, the cloud operating system driven by APIs. The AWS API will authenticate and authorize the users that are not root users. So the user has a profile, and a password, and an access key, and could be controlled by MFA. You could also be a member of groups. And when you authenticate, you'll use the six-year token service to actually check you out. In fact, maybe you want temporary security creating trust policies and roles. Maybe you're doing a single sign-on process. Maybe you have applications running on instances that need an instance profile for securing that application, what the application can do. Maybe there's services that you use at AWS that are service-linked roles. When I authorize, there'll be security, i.e., policy that controls what I do. These policies could be written by me or managed by Amazon. Maybe they're applied in line, maybe they're customized, managed by myself, the customer. Then we get into service specific security. Say for example, an S3 bucket. What's the access control list for that bucket? What's the access control list security
>
> **[3:08](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/mind-map-diagrams?u=76281980&t=188)** for the actual object in that bucket? So you can see a map can quickly grow and to become complicated, but maybe I color code it, and maybe I can break it down and give it to different administrators saying, "Expand this." So, mind maps, quite useful. So here's the challenge. The use case is an online store. Your company is going to create an online store. That online store. when you start thinking about it, well, what technology, how are we going to market it, how is it going to be designed, what's the administration, what's the next step? Now that's up to you. Check out the demo. How I can start using a mind map to build out my online store, how I can do this with diagramming tools, but the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) is up to you. How you fill in those boxes determines your first step. Then you present it and continue on. You know what your work is. Let's start drawing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Diagramming](../../Skills/Software%20Development/Diagramming.md) (2), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1), [AWS Security](../../Skills/Cloud%20Computing/AWS%20Security.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** aws (4), mfa (2), api (1)
> **CLI Commands:** aws (4)
> **Analogies:** kind of like (1), for example (1)
> **Definitions:** is an  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Creating a mind map](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/creating-a-mind-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/creating-a-mind-map?u=76281980&t=0)** - [Instructor] Let's create a mind map by using [diagrams.net](https://diagrams.net). Let's click Start. We'll worry about saving our diagram later. Now, I want to create a mind map. Is there an official shape for my mind map? Well, let's see. What sort of diagrams could we draw? Let's click on More Shapes and see if it actually shows up as a mind map. You can see there's many, many, many different possibilities here for diagrams using all of these shapes. All right, I don't see anything that is really specific, so I'm going to click Cancel, and I'm going to grab a shape. All right, I'm going to create an online store. Next, I want to set up my marketing. Highlight what I typed, add in marketing. Now I want to continue on because I want to set up my technology. I also have to set up my administration and my design. That's what I want to create, so my administration and my overall design. Now, I can keep making this bigger by just adding in where I need to go, so I can very quickly start adding in how I am going to expand, depending on what I want to do. So the next steps are really up to you.
>
> **[1:33](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/creating-a-mind-map?u=76281980&t=93)** Where do you want to go? How do you want to label things? Maybe I want to color code them. I'll start with blue. Maybe marketing will be green, right? Maybe I'm going to color code all of these pieces as the major ones I know are going to be there. But as I continue on, I can have all of these possibilities. Now, I want to save this. Where can I save it? I can save it as an XML file, or I can save it as a PNG or SVG. I can decide where I want to store it, continue on with my mind map diagram. So creating a mind map, pretty simple with [diagrams.net](https://diagrams.net).

> [!info]- Semantic Content
>
> **Env Vars:** xml (1), png (1), svg (1)
> **Prerequisites:** set up (3)
> **URLs:** [diagrams.net](https://diagrams.net) (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Use case diagram](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/use-case-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/use-case-diagram?u=76281980&t=0)** - [Instructor] Did I mention there was homework? Yeah, there's homework because you have to draw a use case diagram in order to see how useful they can be. That's the recommendation. So let's review. If I'm creating a use case diagram, what do I need to follow? Well, remember, the use case diagram functions as the foundation for your system's [Technical Documentation](../../Skills/Software%20Development/Technical%20Documentation.md). A great starting point. It's going to show the end user interactions, and it will help to establish your system requirements. It's also documentation that most audiences can follow. All right, let's look at our use case for H and S Online, their online store. The customer ordering process, this is the presentation. Do you agree? Customer enters the [software as a service](../../Glossary/Concept/SaaS.md) application using their device. A decision has to be made. Did the user successfully enter their password and username? If not, they're rejected. That would be me. However, you would be successful and enter the online store and view the contents, select [products](../../Skills/Software%20Development/Microsoft%20Products.md) to buy, add your stuff to the shopping cart then view the shopping cart. What next? Well, we'll place an order. We'd enter our credit card information, then we'd think about it. Are the items going to be delivered? No, I'm going to cancel the order. That's one decision point. Or, yeah, they're going to be delivered, and we'll confirm the purchase. The items are delivered. Order is complete. Does that make sense?
>
> **[1:34](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/use-case-diagram?u=76281980&t=94)** Would you make changes? Here's a template you could follow. Let's take a look at the purchase workflow. In this use case, we have a couple of actors, the person that is authenticating the identity provider the payment service, and PayPal, what we are going to use for our purchase workflow for the H and S online store. We have to set up our criteria for customer authentication and the checkout process. The question for you is, do you agree with the user sign in, remember me and single sign on, or would you make changes? Are you happy with the checkout process? Updating the shopping cart, calculating the payment, taxes, credit card, payment, PayPal, or would you add more? That's up to you when you draw your first use case diagram.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Technical Documentation](../../Skills/Software%20Development/Technical%20Documentation.md) (1), [Software as a service](../../Glossary/Concept/SaaS.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** make (3)
> **Exercise Files:** template (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Create a use case class diagram](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/create-a-use-case-class-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/create-a-use-case-class-diagram?u=76281980&t=0)** - [Instructor] For creating a use case diagram, we can use the general icons or we can scroll down and open up the options for UML. For our particular use case we're going to start off with an actor. There's the actor. We have our end-user. Let's move that end-user over to the left. What's my next state going to be? Well, the customer will be entering my online store, and there will be a decision point that has to be made. Now when we look at the icons we don't see a decision point there but we can scroll back up and say, fine, we need a starting point and we need a decision point.
>
> **[0:46](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/create-a-use-case-class-diagram?u=76281980&t=46)** Now, my end-user will connect to my [SaaS](../../Glossary/Concept/SaaS.md) application. There's a decision point coming. It connects to my decision point. Selecting my decision point, what do I want to connect to? You can see that the interface is a little quirky sometimes, but you get the drift. This would be authenticating and being unsuccessful, therefore being rejected, and I could continue on with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of my options with my online store. I could then fill in the information for each of these options. Continuing the process, you can very quickly create a use case diagram. Once you've finished your diagram, you can save it by coming up to the top and clicking to save.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SaaS](../../Glossary/Concept/SaaS.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** uml (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Architecture diagram](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/architecture-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/architecture-diagram?u=76281980&t=0)** - [Instructor] When creating an architecture diagram, which is probably the most common diagram that you will draw when creating cloud architecture, we have to consider what is the purpose of the architecture diagram? Well, it's to show the [Hardware](../../Topics/Hardware.md) and software components of a system, a workload. It shows how they're deployed, configured, and how do they communicate. It represents the system hardware, the virtual hardware, and its associated software components. The amount of detail is really up to you. Let's take a look at an example. We have a three-tier application running at AWS. The end-users communicate with the application by requesting information from Route 53, doing a DNS lookup. At times, they may be using the application stack. At times, they may just want to retrieve data, which is stored, typically, in unlimited storage in an S3 bucket. Requests for data routed to the CDN. CloudFront, the caching service, which points to the origin of data, the static content in the S3 bucket. So CloudFront delivers static content. It could also deliver streaming content, and the static content stored in the S3 bucket. Application requests are handled by a hosted load balancer probably an application load balancer. The [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) are deployed across multiple availability zones using an autoscaling group, which allows them to scale the compute up
>
> **[1:32](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/architecture-diagram?u=76281980&t=92)** and down based on demand. The web servers are deployed on [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances. It could be containerized, it's just not obvious from this document. So we have the web tier, next we have another load balancer handling requests for the application tier. The application servers may need to scale. They're also deployed in an auto-scaling group, and the application servers are deployed on EC2 instances or containers. The database is hosted by the relational database service and all rights and queries are sent to the primary database server, because the alternate is waiting for disaster. It's also accepting content being stored across multiple availability zones, and this content is sent to the alternate using synchronous replication. So we have a functional document. Quite easy to draw and is the baseline of most cloud architecture diagrams when working with one of the big three cloud providers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (3), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2)
> **Env Vars:** ec2 (2), aws (1), dns (1), cdn (1)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)

#### [Create architecture diagram](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/create-architecture-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/create-architecture-diagram?u=76281980&t=0)** - [Instructor] Using [diagrams.net](https://diagrams.net), we can easily create architecture diagrams. The shapes are a little hard to find at first. Over on the left, if you scroll down, you may not see the actual shapes but we can load them by clicking more shapes. Then we can scroll down and decide what cloud provider we're working with. You can see [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). You can see also Amazon and the numbers 17, 18, 19 are indicative of when they have changed their icon set. Scrolling down a bit further, we can see that we have also [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), IBM, [Kubernetes](../../Skills/DevOps/Kubernetes.md), lots of options. Let's pick AWS19 and apply this. Now, when we scroll down, we can see all the AWS icons. If I was going to draw an architecture diagram, I would probably start with some of the general resources for external components. And when we start looking at the groups, we can then see the areas which can frame our document. Maybe we'll start with AWS Cloud. Selecting AWS Cloud, we can then make it bigger.
>
> **[1:37](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/create-architecture-diagram?u=76281980&t=97)** All right, what do we want to add into the cloud? Potentially a region. Okay, now what do we want to add into the region? Probably a couple of availability zones. I think you can see how we can start building this document. We may have to readjust, but not that hard. Now, what do we want to create? Compute. Sure, let's do it a different way. Let's just type [EC2](../../Skills/DevOps/Amazon%20EC2.md). It gives me some options for EC2, such as an auto-scaling instance. But wait, don't I need subnets? That's true. So I could add in subnets. Doesn't pick up subnets but they're there. We have to scroll back down into the Amazon groups and find our subnets. Well, before the subnet, we would need a VPC. The VPC can span availability zones. Then we would get into our subnets. We just have to find it. And we can see that we have our different types of subnets. We can get rid of this for now as far as the compute and we can start moving our pieces around. So I think you kind of get the idea, or hopefully you get the idea as to how we can start going through and very quickly creating our infrastructure. So one thing that you might want to do is define it in one area, and once you select the pieces,
>
> **[3:17](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/create-architecture-diagram?u=76281980&t=197)** quickly moving the pieces over. Now, you can see it's a little messy but using your keystrokes, you can start moving these pieces around and you'll find that you get used to adding in the pieces fairly quickly. So in a matter of minutes, I can have a diagram. So not that hard, much easier than [PowerPoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) and I can start building my infrastructure. This is an Amazon example. Remember, we can scroll down, click More Shapes and add in the other icons that we want to use. So if I was saying, well, I'm dealing with Kubernetes or with IBM Cloud, or with the [Google Cloud Platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) or with Azure, we have all the options available. Happy drawing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Powerpoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) (1)
> **Env Vars:** aws (3), ibm (2), ec2 (2), vpc (2), aws19 (1)
> **CLI Commands:** find (4), aws (3), make (1)
> **UI Navigation:** scroll down (4), select the (1)
> **URLs:** [diagrams.net](https://diagrams.net) (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Sequence diagram](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/sequence-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/sequence-diagram?u=76281980&t=0)** - [Instructor] A sequence diagram is giving us details about the sequence of our systems, visualizing interactions between workloads, business processes within those workloads, all hosted on [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md). And these interactions are over a period of time. Once they've created a sequence diagram, it will help me and other members of my team understand the flow of control and any dependencies that show up that have to be dealt with with different parts of the system. These dependencies may have to be redesigned to be more durable and reliable, maybe to avoid single points of failure. We can also identify any performance bottlenecks and any other issues that are going on. Now, the elements that we will see in a sequence diagram, there's not that many of them, we have lifelines, a vertical line, a broken vertical line defining the instance of interaction and we have the messaging communicating between objects or between the object itself. If we go back to our use case of the online store, we have a customer using a browser interface, looking at items in the database, making purchases, checking out, presenting credit card information. Let's look at the detail, see if this is going to be a good presentation. The customer browsing the items, we're assuming they've authenticated. That might be a totally separate sequence diagram. Looking at the items, selecting an item, deciding to purchase the item. Behind the scenes,
>
> **[1:32](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/sequence-diagram?u=76281980&t=92)** now we have to have some communication between the browser interface purchasing the items. The item is available, the price and the display of the item to be purchased is sent back to the customer. They decide to purchase it. They'll get confirmation via email. There's some areas that probably could be improved. There could be a little more interaction with some of the entities on this diagram. Perhaps you would like to see credit card information. Maybe that's a separate diagram, but a starting point of sequences for an online store. Let's look at an authentication process. For authentication at AWS, we can use a number of services. The client is authenticating using something called Cognito. They're a member of the user pool, which identifies them as an external authenticated user. They get verified and they want to access their content, which happens to be in that S3 bucket, but security has to be vetted. So if I'm a member of the user pool, I'm known, I will authenticate and receive [Tokens](../../Skills/Web%20Development/Tokens.md). Once I get the tokens, I'd like to exchange those tokens for credentials, temporary credentials. In the rectangular box, you can see there's a number of processes going on for getting credentials for identity, generating temporary security credentials, assuming a role for a period of time because you've been identified as connecting across the web as an external user, so you get credentials for a period of time.
>
> **[3:06](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/sequence-diagram?u=76281980&t=186)** This is all controlled by a particular service at AWS, the Secure Token Service. At the bottom of the screen, the permissions for accessing the S3 bucket that are going to be temporarily assigned have to check out. If they check out, great. If you're denied, well, you're done. We'll be positive here. I'm able to access, or the end user is able to access the requested service with credentials. They can get their items from the S3 bucket. This is all controlled by the Secure Token Service, which vets the end user, applies the security permissions for a select period of time. So we can get a lot of detail out of the sequence diagram. It's better than the previous one for the online store, so lots of details, lots of flow can be successfully presented with a sequenced diagram. You should try drawing a sequence diagram, and you'll find that after you set up all of your parameters, all of your elements, it will be very useful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1)
> **CLI Commands:** aws (2), find (1)
> **Env Vars:** aws (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [State machine diagram](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/state-machine-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/state-machine-diagram?u=76281980&t=0)** - [Instructor] When creating a state diagram, let's remind ourselves of what they do. A state diagram is modeling the behavior of a system. Now, if you have a system, a computer system, it's up, it's down, there's a failure. So a transition between the different states. It's down, I should do something, maybe an automated solution. The states represent a condition or a situation. I'm online, I'm not online. The transitions between the different states, that's what we're interested in. What is going to be the solution or the response? Let's take an example of auto-scaling. Auto-scaling a service which can automatically scale the compute of your web or application, or even database servers, up and down based on demand. Behind the scene, there's some logic behind this process. When it's time to scale out, let's say your [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) are getting overloaded, the command is issued by the auto-scaling group, the group that is scaling the compute, automatically. It's time to scale out, add a number of compute instances or containers to the web tier. This will take some time. In the pending state, we're waiting for, let's say, an ECC2 instance to boot and come online. So that's going to take some time. It gets launched, it's finally finished, it's approved to enter the waiting room and then become in-service, everything's great. But now I don't need that instance or a group of instances
>
> **[1:33](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/state-machine-diagram?u=76281980&t=93)** or as many instances, so it's time to scale in, and terminate the instance. Again, we're just not going to stop the instance quickly, it might be dealing with customers or it might be dealing with different processes. So we have to wait until the instance is gracefully terminated. Once it's terminated, it's done. So in this case, an automated process of auto-scaling. Let's look at another example. Let's use S3 and Lambda, an object, a file is uploaded to an S3 bucket. In our organization, we want to ensure that this particular object doesn't have any credit card information or payroll information, or something that shouldn't be stored in this bucket. So anytime an object is uploaded to the bucket, there's a Lambda function that's going to check for credit card information. Now, if there is credit card information in that object, it gets replicated to another bucket and removed from this bucket. But now that end user's in trouble, so we have to notify security. We use the secure notification service, we send an email to security, and we know what happens next, you have to go see your boss. But again, a process to ensure the latter logic makes sense. Presenting this sort of documentation to developers can be very handy or administrators can also be very handy because there might be suggestions or improvements to how this process or group of processes is working. So make sure to go into [diagrams.net](https://diagrams.net) and create a state diagram for a process
>
> **[3:08](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/state-machine-diagram?u=76281980&t=188)** that's running in the cloud in your company.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **CLI Commands:** make (1)
> **URLs:** [diagrams.net](https://diagrams.net) (1)
> **Env Vars:** ecc2 (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 4. Architectural Diagramming Tools for Cloud Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [Diagramming tools](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/diagramming-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/diagramming-tools?u=76281980&t=0)** - [Instructor] When it comes to [Diagramming](../../Skills/Software%20Development/Diagramming.md) tools, there are many options and it really depends where you are, where you work. Let's take a look at some of these. First up, we have the three major cloud providers, starting with [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), which have icon sets. We have icon sets that can work with a wide variety of [products](../../Skills/Software%20Development/Microsoft%20Products.md), as you would expect. They work with Visio because [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) owns Visio. We also have the icons that can be downloaded separately if you wish to use these for [PowerPoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) or you could just download the icons separately in PNG format, SVG format, but the reality is you probably want to use one of the drawing tools we're going to look at later on in this clip, or you might have been watching along with this course, and you already know about [diagrams.net](https://diagrams.net), but Azure has these icons. Just a note, if you're going to create these icons for published documentation, where money is involved, you'll have to talk to Azure. [Google](../../Glossary/Service/Google.md) has the same icons, same sort of options available, and as mentioned, these icons are embedded into a lot of the drawing tools. AWS also has architecture icons and they could be downloaded for PowerPoint or the assets can be imported into a diagramming tool. Note that each of the cloud providers has a different sort of format to their icons but they can all function pretty well the same. As mentioned, [diagrams.net](https://diagrams.net), highly recommended to look at this tool,
>
> **[1:33](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/diagramming-tools?u=76281980&t=93)** it's free, cloud-hosted, or you can work offline. If you're a Microsoft shop, you might already own Visio, and if you own Visio, then maybe this is the way to go. Visio has been around for a long time and can do way more than just cloud architect diagrams. Some of the interesting products and one to check out is Cloudockit. This is a service which is going to be able to generate the architecture from the diagrams and [Technical Documentation](../../Skills/Software%20Development/Technical%20Documentation.md) of your particular cloud environment. It's something to look out for. The simple fact of drawing my cloud architect diagrams, giving me the ability of then creating the infrastructure, it's not that much of a stretch, if you think of some of the other products that are out there for helping us to push automation or use automated processes in the cloud. Why shouldn't we be able to generate architecture from the diagrams? And that's where we're going. Finally, a screen listing the variety of products that are out there. A lot of these require a subscription like Creately, or Giffy or Lucidchart, Visual Paradigm, and a variety of different levels of support and a variety of pricing. This screenshot indicates a lot of Amazon support. However, there's no drawing tool that doesn't support the major three cloud providers. Have fun drawing,
>
> **[3:07](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/diagramming-tools?u=76281980&t=187)** there's lots of great tools to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (4), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [Diagramming](../../Skills/Software%20Development/Diagramming.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Powerpoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) (2)
> **Env Vars:** png (1), svg (1), aws (1)
> **URLs:** [diagrams.net](https://diagrams.net) (2)
> **CLI Commands:** aws (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-cloud-architecture-diagram/next-steps?u=76281980&t=0)** - [Mark] Okay, you've made it through the course. Great, what's next? Well, hold the team meeting, but before you hold that team meeting, present some drawings created by [Diagrams.net](https://Diagrams.net), or your choice of [Diagramming](../../Skills/Software%20Development/Diagramming.md) tool. They'll be amazed. Create a cloud center of excellence. Ask for a raise. Well, perhaps documentation will save you. Sounds corny, but it's true. Thanks for attending this class and start drawing today. Take care.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Diagramming](../../Skills/Software%20Development/Diagramming.md) (1)
> **URLs:** [diagrams.net](https://diagrams.net) (1)
> **Speakers:** - [mark] (1)


## Instructor

- [Mark Wilkins](../../Instructors/Cloud%20Computing/Mark%20Wilkins.md)

## Skills Covered

- Cloud-Native Architecture
- Technical Documentation
- Diagramming

## Path Context

### In [Build an Enterprise Cloud Architecture](../../Paths/Cloud%20Computing/Learning%20Paths/Build%20an%20Enterprise%20Cloud%20Architecture.md)
← [Cloud Security Architecture for the Enterprise](Cloud%20Security%20Architecture%20for%20the%20Enterprise.md) | **4 of 4**

## Appears In

- [Build an Enterprise Cloud Architecture](../../Paths/Cloud%20Computing/Learning%20Paths/Build%20an%20Enterprise%20Cloud%20Architecture.md)

## Related Courses

_Courses sharing skills:_

- [AWS Essential Training for Architects](../DevOps/AWS%20Essential%20Training%20for%20Architects.md) — Cloud-Native Architecture
- [Advanced Data Processing- Batch, Real-Time, and Cloud Architectures for AI](Advanced%20Data%20Processing-%20Batch%2C%20Real-Time%2C%20and%20Cloud%20Architectures%20for%20AI.md) — Cloud-Native Architecture
- [Cloud Architecture- Advanced Concepts](Cloud%20Architecture-%20Advanced%20Concepts.md) — Cloud-Native Architecture

---

[↑ Back to top](#)