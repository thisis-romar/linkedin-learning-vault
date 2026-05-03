---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: cloud-for-business-developing-a-cloud-center-of-excellence
url: "https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence"
duration_minutes: 48
duration: 48m
level: Intermediate
updated: 6/3/2022
learners: 8169
skills:
  - Cloud Administration
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFpg8o2AT0C3g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1654102478012?e=2147483647&amp;v=beta&amp;t=YaYqtqrQ1Kid9xKXlW--n1P2eVRdPuhri87gTpQn1Hk"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Cloud Strategy Professional Certificate by LinkedIn Learning]]'
prev_courses:
  - '[[Planning a Multicloud Solution (2022)]]'
next_courses:
  - '[[FinOps Essentials for Cloud Deployments]]'
path_nav: '[{"path":"Cloud Strategy Professional Certificate by LinkedIn Learning","position":7,"total":9,"prev":"Planning a Multicloud Solution (2022)","next":"FinOps Essentials for Cloud Deployments"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/cloud-administration
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Cloud%20for%20Business-%20Developing%20a%20Cloud%20Center%20of%20Excellence.md)

![Cloud for Business: Developing a Cloud Center of Excellence](https://media.licdn.com/dms/image/v2/C560DAQFpg8o2AT0C3g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1654102478012?e=2147483647&amp;v=beta&amp;t=YaYqtqrQ1Kid9xKXlW--n1P2eVRdPuhri87gTpQn1Hk)

# Cloud for Business: Developing a Cloud Center of Excellence

> If you work in enterprise IT, you may be interested in finding out more about the benefits of having a Cloud Center of Excellence (CCoE) in your organization. A CCoE can be a key component to successful cloud adoption, management, and optimization. The CCoE is an internal, centralized group that provides best practice guidance across IT while incorporating stakeholder input from across the busines

> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence) | 48m | Intermediate | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Beginning your cloud center of excellence](#beginning-your-cloud-center-of-excellence)
  - [What is a cloud center of excellence (CCoE)](#what-is-a-cloud-center-of-excellence-ccoe)
  - [Why do you need a CCoE?](#why-do-you-need-a-ccoe)
  - [Creating a cloud center of excellence](#creating-a-cloud-center-of-excellence)
- [**1. Organizational Structure of a Cloud Center of Excellence (CCoE)**](#1-organizational-structure-of-a-cloud-center-of-excellence-ccoe) (3 videos)
  - [Structure and service of a CCoE](#structure-and-service-of-a-ccoe)
  - [Single team and central management](#single-team-and-central-management)
  - [Embedded CCoE ambassadors](#embedded-ccoe-ambassadors)
- [**2. Components of a CCoE**](#2-components-of-a-ccoe) (6 videos)
  - [Subject matter experts (SMEs)](#subject-matter-experts-smes)
  - [Management advocate](#management-advocate)
  - [Team education, training, and best practices](#team-education-training-and-best-practices)
  - [Cloud partner management and advocacy](#cloud-partner-management-and-advocacy)
  - [Creating and managing tools and processes](#creating-and-managing-tools-and-processes)
  - [External advocacy](#external-advocacy)
- [**3. Analytics and Measuring Success**](#3-analytics-and-measuring-success) (2 videos)
  - [Power of analytics: Were you successful?](#power-of-analytics-were-you-successful)
  - [What should you measure?](#what-should-you-measure)
- [**Conclusion**](#conclusion) (1 videos)
  - [Where to go from here](#where-to-go-from-here)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Beginning your cloud center of excellence](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/beginning-your-cloud-center-of-excellence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/beginning-your-cloud-center-of-excellence?u=76281980&t=0)** - [Lee] [[Cloud Computing]] is becoming a central tool for enterprise IT departments. More and more of the cloud and cloud processes have become a differentiator for companies trying to stay competitive in a fast-moving industry, but successfully integrating a cloud mindset into your organization isn't easy and many companies fail. One clear way to make this happen is to create a Cloud Center of Excellence, or a CCOE, within your company. In this course, we'll talk about how to succeed in becoming a cloud-centric organization that can use the cloud as a competitive differentiator in your industry. Hello, I'm Lee Atchison. I've been involved in cloud computing since its inception. I worked as a technical leader within AWS during their early days. Now I consult with major companies on their cloud architecture and cloud strategies. Join me in this [[LinkedIn]] Learning course as we discuss building out a Cloud Center of Excellence and integrating it into your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (2), [[LinkedIn]] (1)
> **CLI Commands:** make (1), aws (1)
> **Env Vars:** ccoe (1), aws (1)
> **Speakers:** - [lee] (1)

#### [What is a cloud center of excellence (CCoE)](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/what-is-a-cloud-center-of-excellence-ccoe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/what-is-a-cloud-center-of-excellence-ccoe?u=76281980&t=0)** - [Instructor] In the past few years, [[Cloud Computing]] has become a dominant trend in enterprise IT departments. As the benefits of moving to the cloud have become clearer and clearer, more companies have moved their infrastructure into public clouds, like AWS or [[Microsoft Azure|Azure]]. As they make this move, they face a challenge that is often overlooked. How do I transform an organization from a typical on-premise company to a cloud-native, cloud-centric organization? One way to accomplish this is to create a cloud center of excellence within your company. A cloud center of excellence, or CCoE for short, is an organizational entity that helps drive cloud acceptance and adoption within an organization. They encourage the proliferation of knowledge, and experience with cloud computing across the entire organization. As cloud-based applications become ubiquitous, and cloud adoption rates continue to grow, CCoEs are becoming more prevalent in many modern organizations. The cloud center of excellence model is emerging as a driving influence enabling the acceleration of cloud adoption and the creation of a cloud-native mindset within your entire organization. But what does a cloud center of excellence actually look like? How do they fit into your modern IT organizations? And how do they assist
>
> **[1:31](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/what-is-a-cloud-center-of-excellence-ccoe?u=76281980&t=91)** in your organization's transformation? A CCoE is a team or set of teams in an organization that focus on and manage the cloud skills in the enterprise. This includes everything from selecting cloud providers and tools to migrating applications and data to the cloud, to managing ongoing cloud operations. There are many different ways an organization can structure their cloud center of excellence, but there are some common elements that are found in most successful CCoEs. Typically, the CCoE is a single team or a small set of teams that are centrally managed with direct control over all aspects of the cloud operation. The CCoE is responsible for ensuring that all other teams within the organization are using the cloud in a safe and consistent manner. Ambassadors from the CCoE are embedded in every other team in the organization. These ambassadors act as a conduit between the CCoE and the [[Representational State Transfer (REST)|rest]] of the organization, providing information and support to teams as they need it. The CCoE provides a conduit for the development teams and operations teams, along with a conduit to cloud vendors and partners. The CCoE also provides a conduit of information flow to upper management so they can understand what is going on and how it is working.
>
> **[3:05](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/what-is-a-cloud-center-of-excellence-ccoe?u=76281980&t=185)** The CCoE also provides a resource of subject matter experts for the marketing organization to leverage to create public-facing material and for the sales organization to develop sales training material, as well as to help with individual onsite customer engagements. The CCoE is the heart and soul of an organization's cloud presence and it directs, monitors and encourages the adoption of cloud best practices organization wide.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (2), [[Microsoft Azure|Azure]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** aws (1), make (1)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)

#### [Why do you need a CCoE?](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/why-do-you-need-a-ccoe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/why-do-you-need-a-ccoe?u=76281980&t=0)** - [Instructor] There are as many ways to construct a CCoE as there are ways to construct an IT department. But at its core, the CCoE is an organizational structure that is designed to accelerate the adoption and institution of cloud [[Microsoft Products|products]], cloud principles and a cloud mindset into an organization. They are designed to be the beacon that helps drive an organization to become a more cloud native organization. They provide a forum for creation and maintenance of cloud best practices. They create examples for the organization to follow. They provide training programs that are tailored to your teams and leadership to raise the overall level of cloud proficiency across your entire organization. This might involve bringing in training programs or creating custom programs. It might involve holding [[Microsoft Office|office]] hours and other on-demand training that's needed by your organization. They create cloud tooling that is used across the entire organization. This includes things like cloud provisioning tools and processes, CI/CD, [[DevOps]] tailored for the cloud, resource tagging, reports, these sorts of things. They established standards for how the cloud will be used in the organization. Sometimes difficult implementation decisions about how to utilize various cloud options will slow down the adoption of the cloud within a group. The CCoE can establish organization-specific standards
>
> **[1:37](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/why-do-you-need-a-ccoe?u=76281980&t=97)** that make it clear how the cloud will be utilized and what characteristics and what boundaries are appropriate. They provide subject matter expertise to upper management. As the organization faces company-wide decisions about the cloud and the impact it has on the organization as a whole, they need someone with expertise that is specific to the cloud and tailored to the company's specific needs. The CCoE creates and grows this level of expertise. They lead into buy/make decisions for cloud and other IT expenditures. When it comes to buy decisions, they help select the vendors. When it comes to make decisions, they lead in making the plans for how to implement those decisions. They lead the management of external cloud partners and vendors. They are the primary technical coordinator between the company and the vendors. They visit and they qualify the cloud vendors that are being used. Creating a CCoE can provide the jumpstart your organization needs to become a cloud-centric organization. After taking this course, you'll have a solid understanding of what a CCoE is and how it can fit into your organization. A Cloud Center of Excellence provides significant value to your organization. In particular, the CCoE can accelerate the cloud migration process by centralizing and focusing your cloud activities,
>
> **[3:09](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/why-do-you-need-a-ccoe?u=76281980&t=189)** you make your move to become a cloud-centric organization faster and more effective. Ensuring compatibility with other IT systems and applications, the CCoE figures out how to fit cloud systems into the [[Representational State Transfer (REST)|rest]] of the IT infrastructure within the company. And it establishes a plan for coexistence and integration between cloud and non-[[Cloud Infrastructure]] components. Optimizing cloud performance and reliability to meet expected service level agreements. When they're introducing technology into an operating infrastructure, performance can suffer unless managing performance is a focused effort in the initiative. The CCoE determines how to monitor performance and how to set expectations, then manages projects to meet those goals. The conduit for coordination with cloud vendors, partners and other outside entities. Ensuring a constant set of systems, leveraging negotiations and leveraging influence. And preventing expensive, unnecessary redundancy and overlap within the company. And finally, make sure the entire organization has a consistent baseline understanding about how the cloud is and will be utilized across the organization. By achieving all of these things, CCoEs can help organizations realize many benefits, such as increased agility, [[Scalability]], lower costs, et cetera.
>
> **[4:43](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/why-do-you-need-a-ccoe?u=76281980&t=283)** However, perhaps most importantly, CCoEs allow companies to become more competitive in the modern digital world today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Microsoft Office|Office]] (1), [[DevOps]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Cloud Infrastructure]] (1)
> **CLI Commands:** make (5), cd (1)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Creating a cloud center of excellence](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/creating-a-cloud-center-of-excellence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/creating-a-cloud-center-of-excellence?u=76281980&t=0)** - [Instructor] A cloud center of excellence is designed to create an organizational focus on cloud initiatives within the company, and to provide order and structure for those initiatives. So in order for our CCOE to be effective your organization, as a whole, must want to implement a cloud initiative for the company. And, in all likelihood, the business is depending on a successful integration with the cloud to accomplish known business goals. This really is a prerequisite. A CCOE will not be effective unless the organizational management is behind the initiative. The CCOE is most effective when management uses it as a structure in order to bring the [[Representational State Transfer (REST)|rest]] of the organization along with the value of being a cloud-centric organization. The CCOE is the implementation vessel for management's wishes, it is not a way to convince upper management of the effectiveness of the cloud. If you are in a position where you are trying to convince management of the value of the cloud, you're not looking for a CCOE. I would instead recommend my course "[[Framing Cloud Discussions for the C-Suite]]." This course helps you in your conversation with your organization decision makers to frame the value and purpose of a cloud initiative. And my course, "[[Presenting Cloud Migration Benefits to the C-Suite]]," which helps you articulate your argument to your company leadership to help convince them of launching a cloud initiative.
>
> **[1:36](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/creating-a-cloud-center-of-excellence?u=76281980&t=96)** The cloud center of excellence and hence this course is for once you've persuaded your leadership to move forward with the cloud. It provides a framework and organizational structure to help bring your organization into alignment with your cloud initiatives. What should a cloud center of excellence look like organizationally? Well, there's no single one size fits all answer to that question, this is because of the actual structure of the CCOE will vary depending on the organization's specific needs and, even more importantly, the organization's culture. However, just because you can go so many different directions doesn't mean there aren't some general guidelines that should be followed. The cloud center of excellence should have a clear mandate established from the top of the leadership structure in your company. And the CCOE should have clearly defined goals. They should be responsible for everything from assessing the business case for moving to the cloud to designing the new architecture, and selecting the right providers. Creating a cloud center of excellence is a key element in your organization's move to become a cloud-centric organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** ccoe (7)
> **Definitions:** is a  (2)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [instructor] (1)


### 1. Organizational Structure of a Cloud Center of Excellence (CCoE)

[↑ Back to Table of Contents](#table-of-contents)

#### [Structure and service of a CCoE](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/structure-and-service-of-a-ccoe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/structure-and-service-of-a-ccoe?u=76281980&t=0)** - [Instructor] Now let's talk about staffing. The CCoE should be staffed with experienced professionals who have a deep understanding of both cloud-based applications and traditional IT systems. This allows them to design holistic solutions that meet the needs of the entire organization. The cloud center of excellence should be positioned very high organizationally within the company. The management of the CCoE needs to work closely and as a peer with other parts of the organization, specifically [[Application Development]] teams, IT operations teams, the security team, and all the product management teams. The head of the cloud center of excellence needs to be a senior leader within the company management structure. This is required so the center receives the credibility it requires to accomplish its job. And to reinforce the significance of this effort to the entire organization. The CCoE management should have solid cross-organizational communication skills as they must communicate and coordinate closely with all parts of the organization. The CCoE is centralized and provides centralized management, control, alignment, championing and training for all things related to the cloud. The cloud center of excellence should be well-funded and have the resources necessary to carry out its mandate. This includes everything from people
>
> **[1:35](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/structure-and-service-of-a-ccoe?u=76281980&t=95)** to [[Hardware]] to external vendor [[Microsoft Products|products]] and relationships. This diagram shows a high-level view of the organization of a CCoE. The major components of the CCoE include a single team. Organizationally, the CCoE should be a single team under a single leadership. All aspects of the CCoE need to be coordinated and managed centrally. A champion, the champion is someone within the organization who helps drive the CCoE efforts forward. They are responsible for driving acceptance throughout the organization and get buy-in from senior management. While this might also be the leader of the CCoE, there is great value, especially in a larger organization if the CCoE leadership role and the champion role are split into two separate jobs. The specific skillsets they need are different. The leader is more of an organizer and a manager, and the champion is a rallier and a driver. Embedded ambassadors. The CCoE should have a group of ambassadors that are centrally managed but are dotted line embedded into various critical groups within the greater organization. They share the knowledge and expertise of the CCoE across the entire organization. Subject matter experts. SMEs in cloud and related technology
>
> **[3:09](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/structure-and-service-of-a-ccoe?u=76281980&t=189)** are critical resources of information for the CCoE leadership, the embedded ambassadors and the CCoE champion. These subject matter experts typically include cloud architects, operational architects, [[DevOps]] specialists, and related disciplines. Partner management. The CCoE needs someone or a team of people responsible for managing cloud partners and related vendors. This includes evaluation, selection, negotiation, and technical integration. Tools teams. The CCoE needs one or more tools teams that build and support the tooling and processes necessary to enable the use of the cloud. This group must work closely with any other tooling teams within the organization. Cloud ops. The CCoE needs one or more teams dedicated to building and managing the operational aspects of the cloud. This group must work closely with any other IT ops groups within the organization. Analytics. The CCoE needs a clear set of objectives and a clear focus based on data and analytics. Collecting, correlating, and processing metrics and analytics from the cloud and related systems and presenting them in a manner that meets the needs of upper management, CCoE management and ambassadors and the [[Representational State Transfer (REST)|rest]] of the organization is the responsibility of this analytics team. And finally, training.
>
> **[4:44](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/structure-and-service-of-a-ccoe?u=76281980&t=284)** The CCoE coordinates training of cloud technologies and capabilities across the entire organization. These are the main components that make up the cloud center of excellence. We'll be digging into each of these individually in more detail throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Development]] (1), [[Hardware]] (1), [[Microsoft Products|Products]] (1), [[DevOps]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Single team and central management](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/single-team-and-central-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/single-team-and-central-management?u=76281980&t=0)** - [Instructor] So a typical model has the head of the Cloud Center of Excellence to be high-level within the organization. Usually that makes them some sort of executive, a VP or equivalent. They usually report directly to the CEO or the COO of the company. If the company is less of a tech-centric company, they may report to a CTO or a VP of IT. The champion, as we said, often is not the head of the CCoE. Rather, they are part of the organization itself. But they usually report very high up within the CCoE organization and usually report directly to the head of the CCoE. All other roles within the Cloud Center of Excellence are centrally managed in this one organization structure. Well, why is it that we're putting everything within this one department? Well, centralized management of all responsibilities means easier and more consistent strategic planning, which makes for better organization and an increased likelihood of success with all your cloud efforts. It centralizes cloud knowledge and cloud expertise and cloud responsibilities. There are new concepts, new way of doing things that are involved in using the cloud, and centralized knowledge makes sure that the company doesn't go off in multiple, inconsistent directions. Which leads of course to consistent [[Decision-Making]].
>
> **[1:34](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/single-team-and-central-management?u=76281980&t=94)** Many companies go astray when one group goes in one direction, and another group goes in another direction. Consistent decision-making feeds a consistent strategy, which feeds into more success with your cloud initiatives. It's also easier to coordinate with partners when you have one central point of control. It allows for easier partner selection and vendor selection. It allows you to create strategic relationships with partners and vendors. And this allows you to be seen as one large entity rather than 50 smaller entities. This makes vendor negotiations much easier and much more beneficial for you. It's also easier to provide a consistent training model for the entire company. Cloud knowledge needs to be spread across the entire organization. And a single cloud group allows a consistent training strategy to ensure that the entire company is on the same page. The CCoE as a single organization can also act as a driving force for cloud adoption. If the group is spread out throughout the entire company, there's no centralized cloud voice. By combining it into one group, there's a centralized voice that carries more weight within the organization. It also allows for consistent reporting. "How are you doing on your cloud journey?" is a question that upper management will want to know the answer to
>
> **[3:07](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/single-team-and-central-management?u=76281980&t=187)** on a regular basis. One single answer rather than an inconsistent mess of responses from different groups within different parts of the company gives greater credibility to the overall effort. Greater credibility means greater chance of continued support and continued success. Centralized management also allows you to provide a fresh set of eyes on existing problems. Since the CCoE is external to the [[Representational State Transfer (REST)|rest]] of the organization, it means a fresh perspective can be applied to problems that those groups are running into. You can come up with ideas that may not be possible from within the main engineering or the main operations org structures. And you can help lower walls and barriers between various other groups within the company in areas of [[Cloud Computing]], specifically between engineering and operations, and operations and security, and product management and engineering, and product management and operations. Since this team is outside of all of them, they can facilitate better communications as an outside moderator and voice of reason about the impact of cloud on the entire company.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision-Making]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Cloud Computing]] (1)
> **Env Vars:** ceo (1), coo (1), cto (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Embedded CCoE ambassadors](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/embedded-ccoe-ambassadors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/embedded-ccoe-ambassadors?u=76281980&t=0)** - Now, while a single team that's centrally managed is the model that makes sense for a CCoE, it's important that the CCoE have influence across the entire organization. It can't be isolated, and it can't be silo-focused. The Cloud Center of Excellence needs to instill a culture of cloud excellence across the entire organization. It's hard to do that from a monolithic organization. So that brings us to the ambassador model. Part of the team of the CCoE should be ambassadors. They're a group of people that are managed centrally, but their influence is spread out. So each dev team, each ops team, each security team and other relevant groups should have assigned to them an ambassador from the CCoE team. Now, these ambassadors are cloud experts. They're technical experts. They have excellent communication skills, and they also have knowledge in their related disciplines as well. And for a dev organization, they have knowledge about dev. For ops, they have knowledge about ops. For a security team, they have knowledge about security. They need to have that knowledge in those related disciplines, so they can talk and communicate with the teams they're assigned to, but communication skills is going to be their primary driving skill set that they'll be using. The ambassador reports into a team within the CCoE,
>
> **[1:36](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/embedded-ccoe-ambassadors?u=76281980&t=96)** but they also have a dotted-line relationship into their assigned groups that they are embedded into. They attend all the staff meetings, planning meetings, and organizational meetings of their assigned groups. And they're involved in all the [[Decision-Making]] that goes on within those groups. They are members of the assigned group, yet they coordinate centrally back with the other ambassadors and the [[Representational State Transfer (REST)|rest]] of the CCoE team. They're influencers, they're communicators. Their skill sets are appropriate for the team they're in, yet they are cloud experts themselves, and they're communication experts themselves. This ambassador model has a number of advantages. It brings cloud expertise into each team at the team decision-making level. It spreads cloud expertise out across the entire company, yet it keeps cloud activities focused, and in the direction of the rest of the organization. It keeps the central CCoE organization informed about what all is going on within the rest of the organization. But there are some things you should watch out for. The ratio of the number of teams to ambassadors can be tricky. How many teams should a single ambassador be responsible for? Well, if you assign too many teams to each ambassador, the ambassador load will be too high, and they won't be able to be effective in any one individual team.
>
> **[3:08](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/embedded-ccoe-ambassadors?u=76281980&t=188)** Each team will get too little attention from their assigned ambassador, and the ambassador's influence dwindles within the team. However, if you have too few teams for each ambassador, you'll end up needing too many ambassadors, and coordinating the common message among a large group of ambassadors themselves, that alone becomes a challenge. You risk the ambassadors getting too embedded, meaning they represent the individual team's interests more than the unified central interests. Remember, the ambassadors are still centrally managed, and have a central message they communicate. The ambassadors play a critical role in promoting the value and importance of the cloud to the rank and file within the entire organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[Decision-Making]] (2)
> **Warnings:** watch out (1)
> **Speakers:** - now (1)


### 2. Components of a CCoE

[↑ Back to Table of Contents](#table-of-contents)

#### [Subject matter experts (SMEs)](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/subject-matter-experts-smes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/subject-matter-experts-smes?u=76281980&t=0)** - [Instructor] We're now going to go into the core of the CCoE and talk about the individual components that make up the organization itself. We'll start by talking about subject matter experts. The core of the CCoE is the subject matter experts in cloud technology. These SMEs create the backbone of the technical decision making and advisory to the CCoE and the company at large about the use of cloud and cloud technology. They provide knowledge to the other groups within the CCoE to help them do their jobs. They advise the ambassadors, they're involved with ambassadors and CCoE-level planning. They advise on cloud partnerships about their technical positioning and usefulness to the company. They help the cloud operations and tools teams in their infrastructure planning cycles. They advise on analytics and the use of the analytics within the teams within the CCoE, as well as the organization as a whole. And finally, and probably most importantly, they advise CCoE leadership and company leadership about all things cloud. They are the brain trust of cloud [[Thought Leadership]] within the company. The SME role is a different and distinct role and ideally, their job responsibility is as a full-time SME. Yet in a small cloud center of excellence, they may have other responsibilities in addition to being a subject matter expert. They often play the role of ambassadors
>
> **[1:35](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/subject-matter-experts-smes?u=76281980&t=95)** but be careful about load. They need to advise within the CCoE and to management in addition to advising to their assigned teams. In this context, switching may be difficult. They may play leadership roles within the CCoE itself. The CCoE champion, for instance, may be one of the SMEs. They may play architecture roles in the tools teams, cloud ops and analytics teams. And they may have technical roles in the partner management responsibility area. The SMEs may end up being more of a jack-of-all-trades role, especially in smaller centers of excellence. Yet in the larger cloud center of excellence, SMEs can be highly specialized. You can have an SME that's an AWS expert, another one that's a [[Google Cloud Platform (GCP)|Google Cloud]] expert, another one that just specializes on [[Serverless Computing]], one that just specializes in [[Data Storage]] and one that specializes specifically in [[Artificial Intelligence (AI)|artificial intelligence]] and machine learning, et cetera. Finally, the SMEs play a role in helping construct any outbound thought leadership that goes outside of the organization. They can write blog and industry articles. They can give presentations at trade shows and events. They ave give webinars. And they can be brought into high-level, high-end customers meetings to show the depth of expertise the company has with the cloud.
>
> **[3:08](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/subject-matter-experts-smes?u=76281980&t=188)** The subject matter experts are a key part of the organization's cloud knowledge and expertise and they play an important role in understanding the technical and architectural impact of the cloud within the company.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Thought Leadership]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Serverless Computing]] (1), [[Data Storage]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Env Vars:** sme (3), aws (1)
> **CLI Commands:** make (1), aws (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Management advocate](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/management-advocate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/management-advocate?u=76281980&t=0)** - [Instructor] Just as you have ambassadors that are embedded within individual teams and you have subject matter experts that advise the Cloud Center of Excellence as a whole, it's important for the CCoE to have a management advocate, a champion. The champion's job specifically, is to advise and inform company management about what the CCoE is doing. Advise and make recommendations about the role of the cloud within the company as a whole. And advise management on various, company-level cloud decisions. And they play an advocacy role between the engineering organization and company management about the importance of the cloud in general. The champion should be a senior member of the Cloud Center of Excellence leadership team. They may also provide senior SME leadership to the [[Representational State Transfer (REST)|rest]] of the CCoE organization as well. They can even be the technical leader for the SMEs themselves within the CCoE. Or the role may simply be a high-level advocacy role with expertise in [[Cloud Computing]] and the skills necessary in communicating upwards within an organization. In general, don't skimp on this role. In most organizations that put a CCoE in place, this is one of the most critical roles in creating a successful cloud presence
>
> **[1:33](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/management-advocate?u=76281980&t=93)** within the organization. Often the Cloud Center of Excellence as a whole, is either successful and therefore influential within the organization or not successful at all, and therefore not influential based entirely on the skills of this one individual. This person may also have been the initial advocate for building the CCoE within the organization in the first place, but that's not necessarily the case. The important thing here is this person should have solid cloud skills and be able to communicate effectively both up and down the management chain. They must be able to speak truth to power and must be comfortable in high level meetings and settings. The success of the company's cloud initiatives is driven by this individual and their ability to work effectively with all of senior management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Cloud Computing]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** sme (1)
> **Speakers:** - [instructor] (1)

#### [Team education, training, and best practices](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/team-education-training-and-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/team-education-training-and-best-practices?u=76281980&t=0)** - [Instructor] A core responsibility of the CCoE is to educate the [[Representational State Transfer (REST)|rest]] of the organization on cloud concepts, operating in the cloud and cloud best practices. For a large CCoE representing a large enterprise, this could be constructed as a formal training, an educational arm within the CCoE, but for a smaller CCoE, this might be heavily leveraging existing cloud education training. Many companies offer in-depth cloud training courses, including [[LinkedIn]] Learning. In either case, the CCoE is responsible for cloud training across the entire organization. They should coordinate cloud certification programs for various cloud providers and other service providers. Who in what parts of the organization really need to be certified and which certifications do they really need? This group makes sure that the right level of organization cloud expertise is in place within the entire organization. They enable sharing of knowledge and expertise across groups and they make sure that inside knowledge is persistent and has a long life within individual groups to deal with staff turnover. This work could be in concert with the rest of the organization's training team as part of that team or as a cloud-focused separate activity. They typically leverage knowledge and expertise from the SMEs and help create ways of sharing that expertise organization-wide.
>
> **[1:36](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/team-education-training-and-best-practices?u=76281980&t=96)** They can leverage the work of the ambassadors as ways of getting their training out to the organization as a whole. In addition, they provide tools and training for the ambassadors themselves for how to share information, knowledge and expertise within their distributed teams. Raising the overall cloud expertise across the organization in a consistent and organized manner is important for an organization to make a successful drive to the cloud. The CCoE is responsible for driving the structure and delivery of the education necessary to achieve the appropriate level of expertise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[LinkedIn]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Cloud partner management and advocacy](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/cloud-partner-management-and-advocacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/cloud-partner-management-and-advocacy?u=76281980&t=0)** - [Instructor] As a company looks towards cloud competency, they will be creating partnerships with many cloud-centric organizations. These are cloud providers, such as, you know, [[Amazon Web Services (AWS)|Amazon Web Services]], [[Google Cloud Platform (GCP)|Google Cloud Platform]], [[Microsoft Azure]], IBM, et cetera. But additionally, it's the various [[SaaS]] and [[IaaS]] providers that the organization needs to engage with to get their business done. These are companies like database providers, you know, load balance providers and SaaS services from email to marketing management tools, to [[DevOps]] and CI/CD providers, to security providers, to customer management software. SaaS plays an incredibly important and significantly larger role in cloud-based companies, so managing the relationships with SaaS providers is increasingly important. Centralizing this relationship management under one organization, like the Cloud Center of Excellence, allows these services to fit into the larger whole of the company's entire cloud experience. The cloud partner management role within the CCoE is the first line management of the relationships with key partners and vendors. It provides a selection of which providers the company wants to use and which ones it shouldn't use or isn't going to use. And it coordinates and conducts evaluations,
>
> **[1:36](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/cloud-partner-management-and-advocacy?u=76281980&t=96)** trials, negotiations and it provides long-term vendor management and relationship management with each of those vendors and partners. This is an outward facing role with close ties to the SMEs and other architecture groups across the organization. And it's an important role for managing the connection between your company and its new role as a cloud leader and the [[Representational State Transfer (REST)|rest]] of the cloud industry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SaaS]] (4), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Google Cloud Platform (GCP)|Google cloud platform]] (1), [[Microsoft Azure]] (1), [[IaaS]] (1)
> **CLI Commands:** cd (1)
> **Env Vars:** ibm (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Creating and managing tools and processes](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/creating-and-managing-tools-and-processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/creating-and-managing-tools-and-processes?u=76281980&t=0)** - [Instructor] We spoke previously about the value of providing centralized education on cloud systems and tooling to the company as a whole. Well, in addition, you'll find that each of your development operations and security teams need a consistent set of tooling to assist them in various aspects of building and operating in the cloud, as well as migrating applications and services to the cloud. Also, company-wide processes need to be created and standardized on for operating the cloud ecosystem as a whole. Standardized tooling can help assist in this process standardization. There really are two needs here. The first is Development Tool Teams. The Cloud Center of Excellence needs one or more tool teams that build and support the tooling and processes necessary to enable the use of the cloud within the organization. They must work closely with other tooling and infrastructure teams in other parts of the organization, and integrate the cloud tooling into the [[Representational State Transfer (REST)|rest]] of the corporate tool set, but they also must champion the specific needs for cloud projects within the existing tools teams. The cloud shouldn't be a separate thing. The goal of the CCOE, the development tooling team within the CCOE in this particular case, is to integrate the cloud system and processes into the entire ecosystem of the company,
>
> **[1:35](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/creating-and-managing-tools-and-processes?u=76281980&t=95)** not just traded as an add on project. Standardized dev tooling helps make this integration happen. And they need to integrate the cloud provider specific tooling into the ecosystem of the company's entire tool set. How do the AWS tool sets fit into the corporate tool sets, for example? And they also need to integrate the tooling provided by the cloud providers themselves into the ecosystem of the company tool sets. How do the AWS tool set for instance, fit into the corporate tool set as a whole? The second need for the tools and processes teams is Cloud Operations Tooling. While the development tools team creates standardized tools and systems, the cloud operations teams do the same for operational processes and systems. They provide the interface between the company and the cloud provider when it comes to running and operating a cloud-centric application. They work closely with other operational teams within the company. They make the operational aspects of the cloud an equal player with other operational processes and systems. They integrate the cloud providers into the normal operational workflow processes of the company. They step in when there is an operational issue with the cloud or a cloud provider to help deal with the situation, including postmortem analysis. And they drive improving the operational aspects of the organization with respect
>
> **[3:09](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/creating-and-managing-tools-and-processes?u=76281980&t=189)** to cloud operations best practices. The tooling team in the Cloud Center of Excellence creates a backbone for cloud utilization that drives how the rest of the organization functions. A good set of tooling helps enable a solid cloud integration into the organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2)
> **CLI Commands:** make (2), aws (2), find (1)
> **Env Vars:** ccoe (2), aws (2)
> **Analogies:** for example (1), for instance (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [External advocacy](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/external-advocacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/external-advocacy?u=76281980&t=0)** - [Instructor] To some companies integrating into a cloud ecosystem creates a compelling corporate message about the modernization of the enterprise as a whole. Providing publicity for the integration of the cloud into the company may provide value for the company's image externally. For example, modernizing to use cloud capabilities often provides operational improvements that are visible to customers. If this is the case, how can we champion these benefits as a competitive differentiator? Cloud modernization can make your company an example, a role model that can be leveraged by cloud providers to show the benefits of cloud modernization in general. The marketing power of the cloud providers can raise your company's visibility and stature within your industry. As you move to the cloud don't forget the marketing aspects of this process, and how increasing your technology visibility may, in fact, give you access to free marketing opportunities. This is the role and responsibility of the External Advocacy Group of the Cloud Center of Excellence. Specifically, they're responsible for coordinating with corporate marketing to craft the appropriate messaging for how the cloud is improving your company and its [[Microsoft Products|products]]. They create a strategy to leverage customer and industry publicity that can improve the company stature. They coordinate conference papers, courses, webinars, talks to keep your company
>
> **[1:35](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/external-advocacy?u=76281980&t=95)** in the state-of-the-art industry discussions. And they coordinate executive keynote talks with cloud executives, and industry leaders and pundits. Many cloud providers love to showcase customers that demonstrate the best practices of using their services. By advocating your company to be considered a best of the best in its use of the cloud you can leverage visibility, messaging, and goodwill of the cloud providers to raise the visibility and respect of your company as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)


### 3. Analytics and Measuring Success

[↑ Back to Table of Contents](#table-of-contents)

#### [Power of analytics: Were you successful?](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/power-of-analytics-were-you-successful?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/power-of-analytics-were-you-successful?u=76281980&t=0)** - [Instructor] How do you measure the success of a Cloud Center of Excellence? Well, there's no one size fits all answer to this question. Success metrics will vary based on the organization's specific needs and the culture and the values of your company. The Cloud Center of Excellence should have a clear mandate from management and therefore should have clearly defined goals and objectives. You measure success by measuring your ability to meet those clear goals and objectives. Here are some general guidelines to make sure to include in the goals and measurements to help you meet these company goals and objectives. First, impact of advocates at influencing the teams. How effective is the advocacy program within the CCoE to impacting how individual teams work with the cloud? Next, the success of individual cloud projects and initiatives. Each individual project should have project-specific goals, and the cloud-specific projects should be grouped into measures for the CCoE's success as well. Next, number of creation and launch of new cloud projects and initiatives. Certainly just launching projects isn't an indication of success, but for some companies, getting cloud projects started is a hard goal in and of itself and should be measured as a CCoE success criteria. Next, the general mindset and organizational focus on cloud activities.
>
> **[1:33](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/power-of-analytics-were-you-successful?u=76281980&t=93)** How does it change over time? This could be quite hard to measure. You can use things like employee surveys, employee interviews, and other HR-related strategies. The goals that you want to measure can get into specific goals that are the cause of the organization's move to the cloud. Things like decreased infrastructure cost, decreased new initiative startup time, increased flexibility in architecture, increased reliability, availability, [[Scalability]], et cetera. The specifics will vary a lot from organization to organization, but overall, the Cloud Center of Excellence should be given the goal of cloud adoption and acceptance organization-wide, and metrics and measure towards that goal should be and are appropriate. After all, this is what the Cloud Center of Excellence was created for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [What should you measure?](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/what-should-you-measure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/what-should-you-measure?u=76281980&t=0)** - [Instructor] So let's talk about some specifics of what can and should be tracked. Cloud migration projects, like the number of projects started, how many are completed? Number of failed attempts, projects that didn't get off the ground, and projects that were aborted before completion. How these rates change and improve over time. Visibility and influence the cloud has on company conversations. This can be measured by the increase in inside company conversations about the cloud that occur, on places like [[Slack]], bulletin boards, coffee talks, or how it shows up on employee surveys. The executive visibility of the cloud and knowledge versus misinformation. Are your execs discussing the cloud? Are they doing so correctly? What are the company's overall goals? How has various cloud projects contributed to those goals? Have there been financial improvements, performance improvements, improved development speed across the organization? Is there a decrease in technical debt, a decrease in [[Customer Support]] issues, customers' complaints? Make sure that these are things that can actually be tracked specifically to cloud specific projects and improvements. The details will vary, but make sure you track consistent goals for a period of time, so progress over time can be measured. The CCOE is supposed to improve your organization.
>
> **[1:34](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/what-should-you-measure?u=76281980&t=94)** This can't be considered true unless you can measure the improvements over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (1), [[Customer Support]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** ccoe (1)
> **Tools:** slack (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Where to go from here](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/where-to-go-from-here?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/where-to-go-from-here?u=76281980&t=0)** - [Instructor] A Cloud Center of Excellence can be an extremely valuable asset for an organization looking to move to the cloud. While any organization can benefit from the structure, the larger the organization and the more significant of the cloud transformation, the greater the benefits the CCoE can bring. Cloud Centers of Excellence provide a wide range of benefits. It can help your organization through the web of complexity involved in a typical cloud adoption transformation. If your organization is struggling with a cloud migration or looking to adapt a cloud-centric infrastructure, you may find you struggle with organizational momentum that makes this transition difficult. A Cloud Center of Excellence can help your organization get over the momentum hurdles to endorse and embrace the cloud as a tool for building modern digital applications. If you're struggling to help your company adopt a cloud-centric organization, there are a pair of [[LinkedIn]] Learning courses that I made that might be able to help you. The first one is [[Framing Cloud Discussions for the C-Suite]]. This course helps you in your conversation with your organization decision-makers who need to green light new projects and ventures. This course helps you frame cloud discussions in a way that resonates with those decision-makers and gives guidance around key concepts
>
> **[1:33](https://www.linkedin.com/learning/cloud-for-business-developing-a-cloud-center-of-excellence/where-to-go-from-here?u=76281980&t=93)** that are important to the C-suite. The second course is [[Presenting Cloud Migration Benefits to the C-Suite]]. This course helps you articulate to your executives the value of a cloud migration and moving to a cloud-centric organization. It helps understand impact on customers, financial considerations and the impact on operations. In addition, you may be interested in my course, [[Cloud Architecture- Advanced Concepts]]. This course helps IT professionals specifically learn the business and tech-related basics of orchestrating and managing an effective cloud architecture within a larger organization. And check out my website [leeatchison.com](https://leeatchison.com), which has articles and resources on [[Cloud Computing]] and organizational, architectural and technical management. You'll find many articles and links to my books and courses. And don't forget to check out the [[Representational State Transfer (REST)|rest]] of the LinkedIn Learning course library for many other cloud-related courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Cloud Computing]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (2)
> **URLs:** [leeatchison.com](https://leeatchison.com) (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Lee Atchison]]

## Skills Covered

- Cloud Administration

## Path Context

### In [[Cloud Strategy Professional Certificate by LinkedIn Learning]]
← [[Planning a Multicloud Solution (2022)]] | **7 of 9** | [[FinOps Essentials for Cloud Deployments]] →

## Part of

- [[Cloud Strategy Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Cloud Strategy Professional Certificate by LinkedIn Learning]]

## Related Courses

_Courses sharing skills:_

- [[Azure Administration Essential Training]] — Cloud Administration
- [[Azure Networking and Security for Beginners- Tools and Services]] — Cloud Administration
- [[Azure Management Basics- Portal, PowerShell, Bicep, and CLI]] — Cloud Administration
- [[AWS- Networking]] — Cloud Administration
- [[Aws Essential Training For Administrators]] — Cloud Administration

---

[↑ Back to top](#)