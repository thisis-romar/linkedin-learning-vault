---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: software-development-life-cycle-sdlc-29588033
url: "https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033"
duration_minutes: 115
duration: 1h 55m
level: Beginner
updated: 5/27/2025
learners: 22604
skills:
  - Software Development Life Cycle (SDLC)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHlSuJFuSk6lw/learning-public-crop_675_1200/B56ZbF5TqNGgAY-/0/1747076856757?e=2147483647&amp;v=beta&amp;t=NLx6YNs4pIjdw2phT1s49oqQWWJ2RKknh7A1gjuDtts"
linkedin_topic: Software Development
learning_paths:
  - '[Software Development Fundamentals](../../Paths/Software%20Development/Learning%20Paths/Software%20Development%20Fundamentals.md)'
  - '[Getting Started with Continuous Integration - Continuous Delivery (CI-CD)](../../Paths/DevOps/Learning%20Paths/Getting%20Started%20with%20Continuous%20Integration%20-%20Continuous%20Delivery%20(CI-CD).md)'
prev_courses:
  - '[Computer Science Principles- Programming](Computer%20Science%20Principles-%20Programming.md)'
  - null
next_courses:
  - '[HTML Essential Training](../Web%20Development/HTML%20Essential%20Training.md)'
  - '[DevOps Foundations- Continuous Delivery-Continuous Integration](../DevOps/DevOps%20Foundations-%20Continuous%20Delivery-Continuous%20Integration.md)'
path_nav: '[{"path":"Software Development Fundamentals","position":4,"total":10,"prev":"Computer Science Principles- Programming","next":"HTML Essential Training"},{"path":"Getting Started with Continuous Integration - Continuous Delivery (CI-CD)","position":1,"total":3,"prev":null,"next":"DevOps Foundations- Continuous Delivery-Continuous Integration"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/devops
  - skill/software-development-life-cycle-sdlc
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Software%20Development%20Life%20Cycle%20(SDLC).md)

![Software Development Life Cycle (SDLC)](https://media.licdn.com/dms/image/v2/D560DAQHlSuJFuSk6lw/learning-public-crop_675_1200/B56ZbF5TqNGgAY-/0/1747076856757?e=2147483647&amp;v=beta&amp;t=NLx6YNs4pIjdw2phT1s49oqQWWJ2RKknh7A1gjuDtts)

# Software Development Life Cycle (SDLC)

> From scrum to Six Sigma, there's an abundance of options for architecting an organization's workflow. And since there's no one-size-fits-all approach to software development, it's important for software project managers, architects, and team leads to grasp the different options at their disposal before making a decision that affects the budgeting, staffing, and management of software delivery. Thi

> [LinkedIn Learning](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033) | 1h 55m | Beginner | 23K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Processes for software projects](#processes-for-software-projects)
- [**1. Traditional Methods**](#1-traditional-methods) (3 videos)
  - [Waterfall model: Brief overview](#waterfall-model-brief-overview)
  - [Waterfall model: Application](#waterfall-model-application)
  - [Spiral model](#spiral-model)
- [**2. Early Agile Methods**](#2-early-agile-methods) (3 videos)
  - [Dynamic systems development method (DSDM)](#dynamic-systems-development-method-dsdm)
  - [Feature-driven development (FDD)](#feature-driven-development-fdd)
  - [Crystal methods overview](#crystal-methods-overview)
- [**3. Modern Approaches**](#3-modern-approaches) (17 videos)
  - [Scrum overview](#scrum-overview)
  - [Scrum workflow](#scrum-workflow)
  - [Lean overview and key concepts](#lean-overview-and-key-concepts)
  - [Lean value stream mapping](#lean-value-stream-mapping)
  - [Lean principles](#lean-principles)
  - [Kanban](#kanban)
  - [Kanban board](#kanban-board)
  - [Extreme programming](#extreme-programming)
  - [Spotify engineering model](#spotify-engineering-model)
  - [Spotify engineering culture](#spotify-engineering-culture)
  - [DevOps: Background](#devops-background)
  - [DevOps: Concepts](#devops-concepts)
  - [Microservices: Key concepts](#microservices-key-concepts)
  - [Microservices: Deployment scenarios](#microservices-deployment-scenarios)
  - [Twelve-factor app, part 1](#twelve-factor-app-part-1)
  - [Twelve-factor app, part 2](#twelve-factor-app-part-2)
  - [Chaos engineering](#chaos-engineering)
- [**4. Other Approaches**](#4-other-approaches) (4 videos)
  - [CMM overview](#cmm-overview)
  - [Six Sigma overview](#six-sigma-overview)
  - [Six Sigma and software](#six-sigma-and-software)
  - [Generative AI assistance](#generative-ai-assistance)
- [**Conclusion**](#conclusion) (1 videos)
  - [Your path to success](#your-path-to-success)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Processes for software projects](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/processes-for-software-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/processes-for-software-projects?u=76281980&t=0)** - Have you struggled to build software that meets your stakeholders expectations? This course will help you understand both traditional and modern [Software Development](../../Topics/Software%20Development.md) techniques, ensuring successful project deliveries. We'll explore essential methods from legacy models like Waterfall and Spiral to [Agile](../../Skills/DevOps/Agile%20Development.md) frameworks, including [Scrum](../../Skills/DevOps/Scrum.md), Kanban, and Lean. We'll also touch on [DevOps](../../Topics/DevOps.md) principles, [Six Sigma](../../Skills/Cybersecurity/Six%20Sigma.md) and CMMI. Hi, I'm Shashi Shekhar, a veteran developer with over 25 years of experience. If you're ready to optimize your approach, join me now to transform your development skills and boost your team's productivity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (1), [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [Scrum](../../Skills/DevOps/Scrum.md) (1), [DevOps](../../Topics/DevOps.md) (1), [Six Sigma](../../Skills/Cybersecurity/Six%20Sigma.md) (1)
> **Env Vars:** cmmi (1)
> **Speakers:** - have (1)


### 1. Traditional Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [Waterfall model: Brief overview](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/waterfall-model-brief-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/waterfall-model-brief-overview?u=76281980&t=0)** - [Instructor] The waterfall approach appears most intuitive to us at the first sight. You gather requirements for a project. Once the requirements are complete, you complete the designs. When the design is complete, you write the code and complete development and so on. The waterfall model owes its origin to manufacturing. When we think of the manufacturing industry, we often think about a production plant that produces identical [products](../../Skills/Software%20Development/Microsoft%20Products.md) in a consistent manner. All planning is done upfront with detailed planning and documentation, and the scope of work is fixed. The process to manufacture products is largely automated and includes well-defined checklists, processes, and tools. The general pattern here is that output of a phase becomes the input of the next phase. If you introduce an error in one phase, that error will propagate to all the other phases. For example, if you have an incorrect or incomplete requirement, that requirement will lead to incorrect design, and that design will make it to incorrectly developed or missing software feature. Most traditional waterfall projects have fixed scope because you tend to freeze the scope of one phase before starting the next. The processes and the final product
>
> **[1:33](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/waterfall-model-brief-overview?u=76281980&t=93)** are very well-documented. This is how the waterfall lifecycle looks like. You start with what is called the [Requirements Analysis](../../Skills/Data%20Science/Requirements%20Analysis.md) phase, where you capture requirements. This is followed by the analysis and design phase, where you produce high-level design and test specifications. This is followed by the development phase where you build the software system. The next phase is the test phase, where you match the output of the system with the expected outputs defined in test specifications. The last phase in the waterfall model is the deployment and maintenance phase, where the application is deployed to production, and the ongoing maintenance continues. In each phase, the output from the previous phase is the input for the next. The input to analysis and design phase is the output of the requirements phase. Just like the previous phases, the input to the development phase is the output of the previous analysis and design phase. What's wrong with the waterfall model? The first problem is that the customer does not get to see the product before the early testing phase, which is usually 2/3 of the way through the product timeline. You could be in the deployment and maintenance phase when you would realize that the product you were building was no longer viable
>
> **[3:06](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/waterfall-model-brief-overview?u=76281980&t=186)** due to changed market conditions, or organizational direction, or changed competitor landscape. Or you could realize that the product had a major architectural flaw that prevented it from being deployed. In other words, your [Product Development](../../Skills/Software%20Development/Product%20Development.md) initiative could completely fail after a lot of money and time had been spent on it. In [Software Development](../../Topics/Software%20Development.md), everything changes: requirements, skills, people, environment, business rules, et cetera. As time progresses, you learn better techniques of doing things. Your stakeholders need to change requirements to match change in organizational strategy or change market conditions, et cetera. In other words, the only guaranteed things are change and the churn process to refine our work. Software development is inherently an iterative process and does not work like a waterfall cycle. Overemphasis on checklists and controls does not help because software development is human-centric approach and is heavily dependent on judgment and creativity. Software is not a product designed to be built by assembly lines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Requirements Analysis](../../Skills/Data%20Science/Requirements%20Analysis.md) (1), [Product Development](../../Skills/Software%20Development/Product%20Development.md) (1)
> **Definitions:** in other words (2), is called (1)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Waterfall model: Application](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/waterfall-model-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/waterfall-model-application?u=76281980&t=0)** - [Narrator] When Waterfall projects started failing, many organizations treated this failure as if this was a failure in a production factory. So, they tried to fix their waterfall approaches by adding more comprehensive documentation. Having a well-documented software system is good, but documentation by itself adds no value to the stakeholders. Also, many software teams resorted to maintaining comprehensive checklists to make sure they were producing systems of high quality. Checklists, such as coding standards, and architectural reviews are helpful, but you cannot produce a single recipe book for building software. So more time should be spent on delivering working software features early and often, and eliciting customer feedback. Are there situations where the waterfall approach may be applicable? Waterfall may still work fine for very simple and small systems. Enhancements to software systems in an ongoing maintenance phase might work with the waterfall model. This is specifically applicable if the development team has good domain knowledge, and both business and technical stakeholders are good at working with each other. The waterfall approach may be applicable to mission-critical systems, where you need gated checks to avoid catastrophic failures.
>
> **[1:36](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/waterfall-model-application?u=76281980&t=96)** An example is a software system where a defect can cause human casualty. Comprehensive documentation is also very applicable here.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Spiral model](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/spiral-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/spiral-model?u=76281980&t=0)** - [Speaker] The spiral development model was presented by Barry Boehm in his research paper in 1986. It was one of the oldest [Software Development](../../Topics/Software%20Development.md) models that proposed an iterative development approach for building software. The development approach was a mix of waterfall and iterative development models. The theme of this approach was that building software iteratively leads to the identification and management of risks. Each waterfall contains four phases, planning, risk analysis, engineering, and evaluation. If we were to visualize this model on a straight line, it is essentially a series of waterfalls. Each waterfall consists of four phases. When you start an iteration, you build on top of the output of the previous iteration. One key thing to note here is that each iteration is different from the previous iteration, because as you build a system, you get a better understanding of the requirements and continue to mitigate risks. And last but not the least, risk management is an integral part of the spiral model. Let's review the spiral model phases in a little more detail. The four phases of the spiral model are planning, risk analysis, engineering, and evaluation.
>
> **[1:36](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/spiral-model?u=76281980&t=96)** The first phase is called planning. This phase includes requirements, identification and analysis, identification of stakeholders and lifecycle objectives of the system being built. Also, you identify wind conditions that would define what is considered success for your project. The second phase is called risk analysis, and includes risk-related activities such as risk identification, risk prioritization, and mitigation. This is the phase when you build prototypes to mitigate risks. You may undertake activities such as identifying alternate solutions so you can reduce or avoid risks. In the early iteration, you may have a simple prototype where in the later iterations, you may have a more complete prototype. The third phase is the engineering phase where we perform software implementation activities such as detailed design, coding, unit and acceptance testing and deployment. In the early iterations, you may have something as simple as a design model, but in the later iterations, you may end up coding and deploying a complete solution. The last phase is called evaluation, where you get your stakeholder review and feedback and plan the next iteration. So the first waterfall represented by the spiral may produce just a prototype for early feedback.
>
> **[3:14](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/spiral-model?u=76281980&t=194)** The second waterfall is built on top of the first waterfall and may produce a release candidate. The third waterfall could produce a launch candidate. You can visualize the spiral model lifecycle with the help of a graph. The four quadrants of the graph represent the four phases of the spiral model, starting with the top-left quadrant and going clockwise. You start with the first iteration and transition through the four phases iteratively. The top-right quadrant is focused on risk management, and most of the [Prototyping](../../Skills/Software%20Development/Prototyping.md) work is done here. The bottom-right quadrant is where you perform software engineering activities. The bottom-left quadrant ends with customer's evaluation of the product. The x-axis here represents volume of approval by review, so the line represents the timeline. I would like to repeat here that each iteration builds upon the output of the previous iteration. The y-axis in this graph represents cumulative cost of the product being built. As you can see, the size of the spiral grows with time and the overall shape of this graph led to this model being named the spiral model. Barry Boehm's original research paper includes a graph that only showed four iterations, but that does not mean you cannot have more. The spiral software development model
>
> **[4:50](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/spiral-model?u=76281980&t=290)** was a pioneering approach at that time to identify that software development is inherently an iterative process, something that modern [agile](../../Skills/DevOps/Agile%20Development.md) processes identified and advocated a few years later. So this model was ahead of its time. One of the four phases in this model is risk management. Prototyping is extensively used in this spiral model. Staying focused on risks reduces chances of project failures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (3), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (2), [Agile](../../Skills/DevOps/Agile%20Development.md) (1)
> **Definitions:** is called (3), is an  (1)
> **Speakers:** - [speaker] (1)


### 2. Early Agile Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [Dynamic systems development method (DSDM)](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/dynamic-systems-development-method-dsdm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/dynamic-systems-development-method-dsdm?u=76281980&t=0)** - [Instructor] DSDM stands for Dynamic System Development Method. It was developed in 1994. This was the era where organizations were slowly going away from the waterfall approach and construction industry liked formal processes. When DSDM was introduced, a new approach called RAD, or Rapid [Application Development](../../Skills/Software%20Development/Application%20Development.md), was becoming the norm. It was fairly easy to build mock up screens, get quick customer feedback and build system features very quickly. While this approach was very [agile](../../Skills/DevOps/Agile%20Development.md), there was also a growing concern among organizations that rapid application development needed some structure or formal processes to maintain good software quality. So a group of organizations built a framework for project delivery and project management called Dynamic System Development Method, or DSDM. The framework had some fairly tight set of rules and was designed to be compatible with ISO 9000 and PRINCE2, a project management framework very popular mostly in Europe. The DSDM Consortium was formed in 1994 by a group of organizations. DSDM continued to be the project development standard in most of Europe for the next several years. Please note that they viewed
>
> **[1:34](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/dynamic-systems-development-method-dsdm?u=76281980&t=94)** software system building initiatives as projects rather than [products](../../Skills/Software%20Development/Microsoft%20Products.md). In 2014, the DSDM handbook was made available online to the public. In October 2016, the DSDM Consortium changed its name to Agile Business Consortium and they own the DSDM framework. Here is the DSDM page on the Agile Business Consortium website. I have included a link to this page in the course handout. The Dynamic System Development Method mindset can be distilled into eight key principles. You can find a description of all eight on the Agile Business Consortium's website. For example, let's take a look at the eighth principle, demonstrate controls. The goal here is to have a highly visible plan and manage it carefully and diligently so you do not have to deviate from the plan and keep things under control. At a very high level, the DSDM lifecycle consists of three phases. The pre-project phase is executed at portfolio or executive management level, where projects are identified and funding commitments are made. The second phase called the project lifecycle phase consists of several sub phases. Additional feasibility analysis is done for the projects identified in the first two sub phases,
>
> **[3:08](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/dynamic-systems-development-method-dsdm?u=76281980&t=188)** and this is followed by sub phases where the system is built in an iterative and incremental manner. The last phase is called post-project, which is kind of a post-mortem phase. This is when you determine if the expected benefits of the project have been realized. Also, you execute activities around looking at ways of improvement based on studying and discussing what went well and what did not go well during the execution of the project. The key thing to note here is that DSDM lifecycle is not a waterfall-like lifecycle. Different phases can be repeated and you can iterate between phases. DSDM advocates the use of several proven practices. Many of them are very applicable today. Firstly, it talks about time boxing your activities. This means each activity is assigned a maximum time limit, which cannot be extended. When the time limit expires, you stop working on that activity. Time boxing forces teams to stay focused and avoid unnecessary refinements. All teams and organizations have budgetary, time and resource constraints, so requirements must be prioritized. DSDM used MoSCoW prioritization scheme on requirements, which categorized requirements into must have,
>
> **[4:42](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/dynamic-systems-development-method-dsdm?u=76281980&t=282)** should have, could have and won't have. And last, but not the least, DSDM advocates an iterative and incremental approach, which is still the most acceptable way of building software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Agile](../../Skills/DevOps/Agile%20Development.md) (4), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** dsdm (14), rad (1), iso (1), prince2 (1)
> **Definitions:** stands for (1), is called (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Feature-driven development (FDD)](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/feature-driven-development-fdd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/feature-driven-development-fdd?u=76281980&t=0)** - [Instructor] Feature-driven development, or FDD, is a lightweight and [agile](../../Skills/DevOps/Agile%20Development.md) process. In the world of FDD, software is viewed as a collection of working features. A feature is a piece of working functionality that has business value. Each FDD team tries to deliver working software, which is composed of working features. At a high level, FDD is an iterative process with five steps that will be explored later in this lesson. Let's review examples of a feature. A feature is a small piece of working functionality typically expressed as action, result, and object. An example of a feature is, calculate monthly interest on account balance. In our example, calculate is a verb that represents an action. Monthly interest is the result. Account balance is the object on which an action is performed. Let's review the FDD life cycle, which consists of the following steps. Develop Overall Model. In this phase, a high-level initial domain model is built based on the team's understanding of the problem domain. This is like a class diagram, which depicts most of the business concepts
>
> **[1:33](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/feature-driven-development-fdd?u=76281980&t=93)** in your problem domain and how they are related to each other. Build Feature List. In this phase, the domain is divided into subject areas, and each subject area contains business activities or workflows. Steps in the activities are identified as features. A guideline in FDD is to keep features very fine-grained so they can be implemented in just a short iteration of two weeks or less. In the Plan by Feature phase, features are prioritized and a feature implementation plan is developed. This includes feature assignments to developers. In the Design by Feature phase, more details are added to the classes in the domain model. Sequence diagrams are developed to flesh out implementation details. The goal here is to have a design model that can be used to implement the features. Thorough inspection of design is done to make sure the design will be able to meet requirements. Build by Feature. This is when classes that implement features are implemented, tested, inspected, and deployed. The last two steps, Designed by Feature and Build by Feature, are executed in parallel by different feature owners for different sets of features. FDD was developed in the era of unified modeling language, a set of notations to represent an object-oriented system, so a lot of UML
>
> **[3:09](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/feature-driven-development-fdd?u=76281980&t=189)** and object-oriented design is used in FDD. Tracking status updates in any [Software Development](../../Topics/Software%20Development.md) is challenging, subjective, and prone to human judgment. We looked at the five steps of FDD. The last two steps include multiple milestones. Each milestone has a percentage completion assigned to it. So if the feature is done to a milestone, the completion percentage is the sum of completion percentages of all milestones up to that milestone. In our example, milestone 2.1 implies 10% for milestone 1.1, plus 20% for milestone 1.2, plus 30% for milestone 2.1, adds up to 60% done. FDD is focused on features, something that provides business value to customers. Team organization in FDD is based around features, and those teams, also called feature teams, have the skills to implement end-to-end functionality. This is a great practice implemented by FDD. FDD scales very well because teams can work in parallel on multiple features and can integrate or reuse their work whenever necessary. In fact, the earliest FDD implementations were used to build [Banking](../../Skills/Software%20Development/Banking.md) systems successfully. The ability to track completion status
>
> **[4:43](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/feature-driven-development-fdd?u=76281980&t=283)** is another characteristic of FDD that was discussed earlier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [Software Development](../../Topics/Software%20Development.md) (1), [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Env Vars:** fdd (15), uml (1)
> **Definitions:** is a  (5), is an  (1)
> **Versions:** 2.1 (2), 1.1 (1), 1.2 (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [Crystal methods overview](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/crystal-methods-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/crystal-methods-overview?u=76281980&t=0)** - [Instructor] Crystal methods refers to not just one methodology, but a family of methodologies. Each methodology is represented by a specific color, and the methodology you choose depends mainly on two factors, team size, and criticality of the product being built. Crystal methods evolved as a result of research done by Alistair Cockburn in the 1990s. Crystal methods are very people-centric, lightweight, and flexible. Let's review the crystal family of methodologies in a diagram. The Y axis represents what is known as criticality. In other words, it represents the severity of the damage caused by the malfunction of the system being built. The X axis represents team size. Each vertical column represents one crystal methodology. Let's review criticality, first. At the lowest level of criticality is comfort. This means the system malfunction for the system being built can cause loss of comfort. An example is a mobile app that adds special effects to pictures, but hangs once in a while. This is at the bottom of the Y axis. Discretionary money is defined as extra savings at an organization or individual's disposal, so a system malfunction at this level of criticality would cause loss of discretionary money.
>
> **[1:37](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/crystal-methods-overview?u=76281980&t=97)** Up next in the criticality ladder is a software where a malfunction could cause loss of essential money. For example, loss of money to a store caused by their website being down for a while. At the other extreme of criticality is a software where a malfunction could result in loss of life, for example, a software defect in an aircraft's navigation system. This is at the highest level of criticality shown at the top of Y axis. The X axis represents team size. Please note that it's just the team size that drives which crystal methodology like crystal clear or crystal orange needs to be picked. As you move up to the right of the graph, the criticality of your software system and team size increases, and you need more formal procedures and deliverables. For example, if you need a team size of 30 persons and you're building a software that could result in loss of essential money, you need to have the orange E40 project, as indicated in the diagram. Note that each vertical lane presents a family of crystal methods. In our example, we need a crystal orange method. The simplest crystal method is called crystal clear, which requires the least number of roles and deliverables.
>
> **[3:12](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/crystal-methods-overview?u=76281980&t=192)** For example, crystal clear just needs three roles, sponsor, senior designer and programmer, and just one deliverable, working software with minimal documentation. A crystal orange method needs more roles such as architect, sponsor, business analyst, project manager, et cetera, and more deliverables such as requirements document, [User Interface Design](../../Skills/Web%20Development/User%20Interface%20Design.md), user manual, and test cases. The crystal method you choose depends only on the team size, which was shown on X axis of the graph in the previous slide. But as the criticality of the system being built increases, you may need to tweak your processes to address the extra risk involved, here. This was shown on the Y axis. For example, if a system malfunction can cause loss of human life, you may need to introduce stricter quality checks. Crystal methods advocate a methodology where people are at the center of the universe. In Alistair Cockburn's research, he determined the most important factors for a project success were people's interactions, effective communication, and collaboration. This is very similar to the [agile](../../Skills/DevOps/Agile%20Development.md) manifestos individuals and interactions over processes and tools approach. Crystal methods was perhaps the first approach that prioritized people over formal processes
>
> **[4:48](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/crystal-methods-overview?u=76281980&t=288)** and advocated that there is no one size fits all methodology when it comes to [Software Development](../../Topics/Software%20Development.md). Also, crystal methods use frequent delivery of working software and teams improve their efficiency and output by a consistent process of reflective improvement. The crystal methods approach brought forward the point that there is no one size fits all for all projects, and crystal methods include many modern practices, such as automated tests and frequent integrations that are still in use, today. Crystal methods did an excellent job of communicating the message, right size the team to fit the scope of the project. But it wasn't the best strategy to manage each of these sized projects. This is the key reason why it was not more widely adopted, and there were other methodologies that handled managing those projects better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [User Interface Design](../../Skills/Web%20Development/User%20Interface%20Design.md) (1), [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **Analogies:** for example (5), such as (3), similar to (1)
> **Definitions:** is a  (3), known as (1), in other words (1), is called (1)
> **Warnings:** note that (2)
> **Env Vars:** e40 (1)
> **Speakers:** - [instructor] (1)


### 3. Modern Approaches

[↑ Back to Table of Contents](#table-of-contents)

#### [Scrum overview](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/scrum-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/scrum-overview?u=76281980&t=0)** - [Instructor] [Scrum](../../Skills/DevOps/Scrum.md) is the most popular and widely adopted [agile](../../Skills/DevOps/Agile%20Development.md) framework. It's a lightweight framework with just a handful of events, accountabilities, and deliverables, and a small set of rules and guidelines. Scrum is often described as a deceptively simple framework. The inventors of Scrum defined it as a framework that is easy to understand and difficult to master. Most people get up and running with Scrum in just a couple of hours, but getting optimal output with Scrum requires experience and practice. If I were to describe Scrum in one sentence, I would describe it as an agile framework where a small cross-functional team works in short iterations, called sprints, to create working software. Scrum was introduced by Ken Schwaber and Jeff Sutherland in 1995. The most authoritative resource on Scrum is the Scrum guide, which is available at [scrumguides.org](https://scrumguides.org). It's less than 20 pages, and you can read the entire guide in an hour or less. This is a high level overview of the Scrum workflow. Developers, Product Owner, and Scrum Master collaborate to work in short iterations of 30 days or less, called a sprint. They start from a to-do list of work items called the product backlog,
>
> **[1:33](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/scrum-overview?u=76281980&t=93)** and pull a subset of work items to implement in a sprint. This subset of work items and a working plan is called a sprint backlog. The developers conduct their daily sync ups in what is known as daily scrum meeting, and continue to implement work items. At the end of the sprint, a product increment in form of working software is produced. The three Scrum accountabilities, previously known as roles, are Product Owner, Scrum Master, and Developers. Let's look at each [Accountability](../../Skills/Data%20Science/Accountability.md) in a little more detail. Product Owner owns the product backlog. The product backlog is the list of all to-do items such as tasks, defects, user stories, functional and non-functional requirements, enhancements, et cetera, for the developers. And the Product Owner is accountable for the contents of the product backlog, and is the final authority on the order or priority of items in the product backlog. The Product Owner has the final call on what needs to be built and in what order. Even though the Product Owner may be influenced by a committee of business stakeholders, the Product Owner accountability is fulfilled by an individual, not a committee. Scrum Master is the agile coach.
>
> **[3:09](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/scrum-overview?u=76281980&t=189)** Think of a Scrum Master as a guide, or mentor, who teaches the Scrum team the rules and practices, and facilitates Scrum events if necessary, and helps the team optimize team performance with those agile practices. Scrum Master is a servant leader in the sense that they lead the team by helping them remove hurdles that prevent them from performing optimally. But Scrum Masters do not manage the developers. Developer is a generic umbrella name given to all Scrum team members, such as developers, testers, documentation experts, database administrators, and system administrators, et cetera. The team of developers is cross-functional, which means the entire team combined has all the necessary skills to build, test, and deploy fully functional software features. Developers are self-managing, which means they know how to do their work with minimal interference or help from outside. The three Scrum artifacts are Product Backlog, Sprint Backlog, and Product Increment. The Product Backlog is the master list of what needs to be built. The second artifact is the Sprint Backlog, which includes the subset of Product Backlog items selected to be implemented in the current sprint, plus a task list for those selected items.
>
> **[4:43](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/scrum-overview?u=76281980&t=283)** The third artifact is the Product Increment, a slice of functionality produced in the current sprint, combined with the functionality produced by all previous sprints.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scrum](../../Skills/DevOps/Scrum.md) (22), [Agile](../../Skills/DevOps/Agile%20Development.md) (4), [Accountability](../../Skills/Data%20Science/Accountability.md) (2)
> **Definitions:** is a  (3), known as (2), is called (1)
> **Analogies:** such as (2)
> **URLs:** [scrumguides.org](https://scrumguides.org) (1)
> **Speakers:** - [instructor] (1)

#### [Scrum workflow](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/scrum-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/scrum-workflow?u=76281980&t=0)** - [Narrator] Let's see how a [Scrum](../../Skills/DevOps/Scrum.md) team builds a product incrementally and iteratively. At the beginning of the sprint, the Scrum team comes together for an event called sprint planning. In this event, the developers work with the product owner to select which items will be built in the current sprint. The Scrum team also drafts a Sprint goal, which is a few sentences that describe high level business goals of the sprint. Then the developers build an initial plan on how they will implement those product backlog items. The Scrum master is available to facilitate as and when required, and the product owner is available to answer any questions. The team spends the time in sprint developing the features listed, testing to ensure they meet specifications and compiling for a workable software deliverable. The sprint concludes with a sprint review and a sprint retrospective. This is another look at the overall view of how the sprint lifecycle works. We already covered sprint planning. Let's take a deeper look at several key Scrum events, daily Scrum, the sprint review, and sprint retrospective. The developers continue to meet each day in an event called the Daily Scrum, which is time boxed to 15 minutes.
>
> **[1:34](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/scrum-workflow?u=76281980&t=94)** The Scrum master and product owner can participate in this event but are not required attendees. This is a developer's team hug or sync up, not a status meeting. It's an opportunity for the developers to measure if the team is on track to meet the sprint goal. Many Scrum teams follow the three question format, which means each developer answers three questions. One, what did you do since the last daily Scrum? Two, what are you planning to do today? And three, are there any impediments to what you are trying to accomplish? The three question format is not mandatory, and the developers can conduct this event in whatever way they want. Developers produce a product increment at the end of the sprint, which is reviewed in an event called sprint review. This is when the Scrum team and a group of stakeholders get together to inspect the product increment. This is an informal event and the feedback is used to plan future sprints and not seek formal acceptance. This event is time boxed to four hours for a 30 day sprint and must be adjusted for shorter sprints. The last event of the sprint is an event called sprint retrospective when the Scrum team inspects every aspect of their work other than the product increment, they discuss and come up with an action plan
>
> **[3:08](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/scrum-workflow?u=76281980&t=188)** on how they can do better with their processes, team communication, tools, skills, et cetera. The team commits to a subset of their action plan items. The event is time boxed to three hours for a 30 day sprint and must be adjusted to shorter sprints. If I were to pick two key aspects of Scrum, I would highlight these two. One, it's simple but comprehensive framework to build [products](../../Skills/Software%20Development/Microsoft%20Products.md) incrementally and deliver business value faster and more often. And two, one key rule of Scrum is to produce a potentially shippable product increment in every sprint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scrum](../../Skills/DevOps/Scrum.md) (14), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Definitions:** is a  (2), is an  (2)
> **Speakers:** - [narrator] (1)

#### [Lean overview and key concepts](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/lean-overview-and-key-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/lean-overview-and-key-concepts?u=76281980&t=0)** - [Instructor] Lean originated in the post World War II era. This was the time where many economies were devastated and people had poor buying power. There was a lot of demand to rebuild factories and manufacture [products](../../Skills/Software%20Development/Microsoft%20Products.md) with maximum efficiency. The Toyota production system was one such efficient and popular system. It was a combination of management style, working culture, and production environment that was aimed at reducing waste and manufacturing at optimal efficiency. Toyota's manufacturing process inspired Mary and Tom Poppendieck's 2003 book, "Lean [Software Development](../../Topics/Software%20Development.md)," where they taught how many of these manufacturing philosophies and techniques could be applied to software development. Lean principles can be applied to software and [Hardware](../../Topics/Hardware.md) projects. Lean software development is a collection of principles centered on the key tenet to minimize waste. This is achieved through processes that visualize the production pipeline. Various techniques are used to highlight bottlenecks and reveal efficiencies or inefficiencies within the system. A common technique that can be used to identify waste is called value stream mapping. Let's focus on it first. Think of a value stream as a workflow or sequence of steps to produce a product or service with business value.
>
> **[1:36](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/lean-overview-and-key-concepts?u=76281980&t=96)** For example, the sequence of steps that start with ordering a pizza to the point where the pizza is delivered can be called a value stream. A value stream contains steps that add value, and in a perfect world, you'd like the value stream to have all steps with value add and no wasteful step. Here is a slightly oversimplified example of a manufacturing value stream map. Information flows from right to left in the upper part of the diagram, where a customer submits an order to an [office](../../Skills/Web%20Development/Microsoft%20Office.md) which orders raw materials from a supplier. This is the information flow part of VSM, and would be produced for an aggregate of customer orders. In the middle is the materials flow that shows the sequence of steps to produce the product. At the bottom is the time ladder, where the lower staircases show actual processing time, whereas the elevated staircases show total lead time or total time elapsed in a manufacturing step. As you can see, the total lead time or total elapsed time for all steps combined in the materials flow is 130 minutes, whereas the real processing time is 65 minutes. So there's apparently 65 minutes of non-value-added time that could be reduced. So let's summarize what we learned about value stream mapping.
>
> **[3:10](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/lean-overview-and-key-concepts?u=76281980&t=190)** We use value stream mapping to identify areas of improvement in a value stream. A typical manufacturing value stream map depicts all steps at a macro level and includes three types of information: information flow, material flow, and what is called a time ladder. The time ladder at the bottom of a value stream map is critical because it identifies value-add time as well as non-value-add time. A value stream map, or VSM, contains information flow such as information flowing from a customer to an office and a warehouse. You can also visualize the flow of raw material from a supplier to a factory to a shipping truck that transports a finished product. A time ladder shows value-added time and total time consumed for producing a product or service. We will provide an example of VSM shortly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (3), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Definitions:** is a  (2), is called (2)
> **Env Vars:** vsm (3)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Lean value stream mapping](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/lean-value-stream-mapping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/lean-value-stream-mapping?u=76281980&t=0)** - [Instructor] I would like to introduce you to two key terms before we take a look at value stream mapping. Lead time is defined as the total elapse time from the time a request for a product or service is made to the time the product or service is made available. If you receive pizza within 45 minutes of ordering it, that is the lead time. Cycle time is a subset of the lead time, and that is the duration of time where some work is being done on the product. In our pizza delivery example, this is the time spent on steps like baking, packaging, etc. You can define lead time and cycle time of a step in the workflow or the entire workflow. Lead time is greater than or equal to cycle time, and the goal should be to make lead time equal to cycle time. Let's take a look at a business process value stream map. This is similar to the one we reviewed earlier, but it does not have an information flow section. It shows an insurance claims processing workflow with the following steps. A customer files an insurance claim. The claim is reviewed by an adjuster. The adjuster's role is to review the damage and record all evidence of claim. As the adjuster enters all the information into the claims system, the customer service representative notifies the customer
>
> **[1:34](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/lean-value-stream-mapping?u=76281980&t=94)** about the claims. Based on customer's feedback, the representative updates claim information, which is forwarded to the payment system, which issues the claim funds. Do you see any red flags in this VSM? There are multiple areas of improvement in this process. One thing that stands out is that there are multiple systems that are used in processing the claim. This probably means duplicate data entry and possible extra processes to keep the claims and payment systems in sync. Also, the total lead time is 121 hours and total processing time is 3.25 hours, which is 3% of the total lead time. So remember, you can build the as-is VSM of your processes and look for areas of improvement. You can also brainstorm areas of optimization and visualize your 2B processes with the help of VSMs.

> [!info]- Semantic Content
>
> **Env Vars:** vsm (2)
> **Definitions:** defined as (1), is a  (1)
> **CLI Commands:** make (1)
> **Versions:** 3.25 (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Lean principles](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/lean-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/lean-principles?u=76281980&t=0)** - [Instructor] Lean [Software Development](../../Topics/Software%20Development.md) is a collection of principles centered on maximizing efficiencies and minimizing waste. Let's dig deeper into the core principles of lean and continue to review principles as applicable to software development. Lean thinking teaches us to think from the perspective of value addition for a customer. Any process or work that does not add value is waste. Firstly, you need to understand what is of value to your customer. Secondly, you produce software features that produce that value. Nothing more, nothing less. Adding additional software features that the customer has not asked for, is called gold plating and is a waste. You need to understand implicit requirements, but that is something you should learn with the help of continuous feedback from the customer. Unnecessary processes or switching between tasks, also called context switching, are other examples of waste. Amplify learning. [Agile](../../Skills/DevOps/Agile%20Development.md) practices are iterative, with delivery of business value early and often. Software development is complex with the potential for change in requirements and priorities. The recommended lean practice is to constantly learn by getting regular and frequent feedback from stakeholders. Decide as late as possible.
>
> **[1:33](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/lean-principles?u=76281980&t=93)** This principle may appear counterintuitive but is a good practice and applicable to software development. Many methodologies were developed in the last century that advocated detailed checklists that provided within codes, clear decisions and policies defined early in the process. Making early decisions is fraught with risks because everything changes in software development. Customer requirements change market conditions change, technologies evolve with time and change. Late decision is actually an inappropriate term here, the apt term is last responsible moment. We need to wait till we know all the facts and then make a decision at the last responsible moment. You can only define a database tuning approach, after you know what database engine will handle your customer's data volumes and workloads. Deliver as fast as possible. When you deliver working features to customers quickly and often, you're bringing value to the customer. Longer iterations have bigger risks of large amounts of unidentified issues, change in market conditions, and technology. Smaller iterations are easier to manage. Empower the team. Agility is all about bottom up intelligence. Empowering a team fosters creativity
>
> **[3:08](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/lean-principles?u=76281980&t=188)** and motivates the team to do more. People that design and build software are knowledge workers and should be given enough autonomy and support to bring out their creativity and sense of responsibility to build great solutions. Build integrity in. Lean teams focus on making sure the customer has good overall experience of the system. This is called perceived integrity, that is how the system is delivering value and is usable and easy to maintain. The other type of integrity is called conceptual integrity, which works at a more micro level. In this case, the system works like a well oiled machine that comprises good, well tested components. Lean teams build integrity right into their process of building software systems through refactoring, thorough testing, and consistent and frequent communication with the customer. Building integrity should be an intrinsic part of the entire process, not an afterthought. See the whole. Lean teams focus on understanding the entire workflow and work on optimizing the entire process rather than improving a subset of the entire flow. We are often tempted to improve just one step in the process because each step improvement, will improve the entire process. But in most cases, you cannot optimize the entire process without getting the big picture
>
> **[4:42](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/lean-principles?u=76281980&t=282)** and knowing the entire process. For example, you can expedite the software defect identification process, but that does not necessarily optimize the entire development because you may have a skills problem with the developers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (5), [Agile](../../Skills/DevOps/Agile%20Development.md) (1)
> **Definitions:** is a  (3), is called (3)
> **CLI Commands:** apt (1), make (1)
> **Analogies:** picture (1), for example (1)
> **Best Practices:** recommended (1), good practice (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Kanban](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/kanban?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/kanban?u=76281980&t=0)** - [Instructor] Kanban is a work process management methodology based on Lean principles. Kanban can be summarized in two key concepts. One, visualize your work, and two, limit work in progress. Even though Kanban looks simple at first sight, it's a very powerful approach based on advanced queuing theory. Let's see an example of how a [Software Development](../../Topics/Software%20Development.md) team applies Kanban. This is an example of a Kanban Board developed with Planview's AgilePlace product. The tool was formally known as LeanKit. You can use AgilePlace or another tool of your choice to build a Kanban Board. This Kanban Board was an example created with my free trial account. Your account and link will be different. Each vertical lane in the board represents status of an item. In our Kanban Board, we have four work items statuses, Planning and Coordination, Design, Develop, and Accept.
>
> **[1:14](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/kanban?u=76281980&t=74)** Work items, such as software features, user stories, and defects, are pulled into the board and processed through the board from left to right. All completed work items are eventually pulled into the rightmost lane. Kanban is a visual system where the Kanban board gives you a quick summarized view of the work in progress. Each lane can be viewed as a work queue and has a work in progress or WIP limit. The WIP limit indicates the maximum number of items that should be added to that lane. Limiting the count of items in a queue is required to work at optimal efficiency. WIP limits can be justified in arithmetic and non-arithmetic terms. The non-arithmetic layperson's explanation is that the WIP limit in each lane is dependent on the number of people working on items in that queue and their skills and experience level. If you work on too many items simultaneously, you will end up working at suboptimal efficiency. The arithmetic explanation of placing WIP limits is based on queuing theory centered at a formula defined in the 1950s called Little's Law. Let's do a quick review of this formula. Even though Little's Law was originally stated in a totally different context, it can be stated in the work item management
>
> **[2:49](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/kanban?u=76281980&t=169)** as a simple arithmetic expression as follows. Number of items in a work queue, that is C, is equal to average item time on each work item or average time spent on each work item multiplied by the arrival rate of work items. In other words, average time spent on each work item, A, is equal to number of items in a work queue, C, divided by the arrival rate of work items, that is B. If you wish to work at higher efficiency, that is spend less time per work item, you can either reduce the number of items in the work queue or limit work in progress or WIP in expression C. Or you can reduce the rate at which items arrive in the queue. The expression C is the same as WIP limit and needs to be limited.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (1)
> **Env Vars:** wip (7)
> **Definitions:** is a  (2), is an  (1), known as (1), in other words (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Kanban board](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/kanban-board?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/kanban-board?u=76281980&t=0)** - [Narrator] Kanban is a visual process management approach. The Kanban Board is a powerful and effective communication tool about the team's progress and bottlenecks. Value stream mapping from lean principles is very easy to apply to Kanban. This is because you can visualize your entire workflow or value stream via a Kanban board. In fact, Kanban is based on lean principles. Let's take a quick look at a slightly improved version of a Kanban board. This Kanban board has just two statuses, planning and coordination and design. Each status, or queue, has a WIP limit. The first queue has reached its WIP limit as indicated by highlighted number four. Splitting each column into two parts, doing and done, shows if the items in a queue are stuck due to the next queue or if there is an issue in the same queue. In this example, both queues have reached their WIP limits, but the first queue has all items done and the second queue cannot pull items from it. Also, the second queue has an item view trainer profiles blocked as shown by an X next to it. As you can see, a Kanban board communicates a lot of information about the process in a
>
> **[1:33](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/kanban-board?u=76281980&t=93)** concise and simple way. One key feature of Kanban is that it's a pull system. Items are pulled into a queue when the queue has room for more items. There are no artificial time box boundaries, like sprint, in Kanban. Work items are delivered when they are ready, and there's no need to wait for an iteration time box to expire. So the customer gets value delivered continuously. Kanban is very lightweight and besides the Kanban Board, the only other practice used by most Kanban teams is daily stand-ups.

> [!info]- Semantic Content
>
> **Env Vars:** wip (3)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [narrator] (1)

#### [Extreme programming](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/extreme-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/extreme-programming?u=76281980&t=0)** - [Instructor] Extreme programming, or XP, is a fine-grained implementation-centric approach. It can be viewed as a collection of software engineering practices. It was developed by Kent Beck in 1991 and has values, rules, principles, and practices. XP recommends a customer-driven iterative approach with short weekly iterations. It proposes a collaborative approach where customers provide requirements, and developers break the requirements into tasks and assign the tasks to themselves. There are quarterly iterations that are containers for the weekly iterations, which allow the team to take a more macro-level view of work and spend time on macro-level planning. XP teams believe in just-in-time design, so they start at a simple high level design and continue to evolve the design. They also refactor code continuously to improve code quality and address technical debt. As developers build code, they integrate their code with a code of other developers very frequently. XP teams run short builds of 10 minutes or less. XP has nearly a dozen core practices. More information about these practices is available at the [Agile](../../Skills/DevOps/Agile%20Development.md) Alliance website. In this lesson, we will cover two XP practices that are used by many teams even today.
>
> **[1:35](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/extreme-programming?u=76281980&t=95)** They are pair programming and [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md). Let's review these two practices in a little more detail. In pair programming, two developers sit at a computer terminal. One writes code, while the other one helps the developer who writes code. The second person constantly reviews the code as it is being developed, asks questions about the implementation, and assists the first developer with code suggestions. The two developers switch roles periodically and the process continues. This approach introduces continuous inspection of code and hence leads to code quality improvement. Test-driven development means you do not write any code unless you have a failed test for it. It's a three-step process. The first step is to write a test for a function that is yet to be written. The code will not compile. The second step is to write the function so you have just enough code to make sure the code compiles. The test should fail. If the test passes, the test is inadequate to verify any functionality and should be refactored. The third and the last step is to complete coding of the function to meet the requirements of the test. After you write each test, you refactor code to meet the requirements of the test. Then you write another test and refactor the code to pass the test.
>
> **[3:10](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/extreme-programming?u=76281980&t=190)** This process continues until you have exhausted your list of tests and your code is complete. Test-driven development sometimes exposes poorly designed monolithic code. If you're struggling to write tests for a piece of code, it may need refactoring to break it into more manageable chunks. Developers take pride in their work. We test our code very thoroughly, but testers always find defects in our code. It's because testers have no bias and make no assumptions about the code. That is why they find problems developers don't find. Test-driven development can help reduce that bias and unearth those problems earlier in the [Software Development](../../Topics/Software%20Development.md) cycle. Extreme programming has been criticized for being over simplistic and ineffective for building large systems or for teams of inexperienced developers. But the two key takeaways of XP, pair programming and test-driven development, are known to work for small and large systems alike.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (5), [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **CLI Commands:** find (3), make (2)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Spotify engineering model](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/spotify-engineering-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/spotify-engineering-model?u=76281980&t=0)** - [Instructor] The Spotify model refers to a great case study and culture rather than a framework. Spotify's [Agile](../../Skills/DevOps/Agile%20Development.md) approach is unique in the sense that it does not follow any single Agile framework or methodology. In fact, Spotify does not claim to have any methodology. They defined their approach as a culture of principles and values. Spotify decided to not rely completely on one framework, but apply a combination of different frameworks, methodologies, and practices to find their own way. Spotify loosely defines this approach towards agility as the Spotify engineering culture. Spotify was a [Scrum](../../Skills/DevOps/Scrum.md) company around 2008 when they were a small company. They ran into scaling issues with Scrum and found many Scrum practices counterproductive as they continue to grow. Instead of choosing a more formal Scrum scaling framework, they decided to define their own simple approach. They decided to go back to the Agile basics. For Spotify, agility is more important than any specific framework or methodology. Spotify teams are organized into autonomous and small teams, called squads. Spotify does small frequent releases with maximum automation. In their own words, release should be routine, not drama.
>
> **[1:37](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/spotify-engineering-model?u=76281980&t=97)** Their release approach uses what is called release trains and feature toggles. A release train is a metaphor for a chain of frequent releases where each release includes a set of features. If a release does not make it to a train, there is another one going out soon. And unfinished features are part of release trains, but they are hidden from users by the technique called feature toggle. This reduces the need for code branching and merging, something that creates technical depth and is difficult to manage. Spotify has a culture of continuous improvement. They use various techniques to optimize their output. Here is an example of a technique called the kata or kata board that is used for improvement. This is the kata board made popular by Toyota. A kata board defines four quadrants. The top left quadrant defines a problem the team is trying to solve. The bottom left quadrant defines the perfect world as defined by the team. It may be unrealistic and is a direction, not a destination. The top right quadrant defines a realistic target, something which is one step ahead of where they are and one step closer to their ideal direction. And the bottom right quadrant defines the next three actions that will move them closer to the next realistic target. Spotify has a culture of innovation.
>
> **[3:10](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/spotify-engineering-model?u=76281980&t=190)** There are hackathons that bring people with similar interests together, and they transform their ideas into working features. Teams learn from each other, so if a tool or equipment works well for a team, other teams learn from that team's experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scrum](../../Skills/DevOps/Scrum.md) (4), [Agile](../../Skills/DevOps/Agile%20Development.md) (3)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** toggle (1)
> **Speakers:** - [instructor] (1)

#### [Spotify engineering culture](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/spotify-engineering-culture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/spotify-engineering-culture?u=76281980&t=0)** - [Person] The Spotify [Agile](../../Skills/DevOps/Agile%20Development.md) model has led to a unique personnel structure. Spotify teams are very autonomous and have the freedom of selecting what works for them. Most teams use a combination of [Scrum](../../Skills/DevOps/Scrum.md) and Kanban, but their core values are based on lean principles of avoiding waste and providing business value to customers quickly and often. Teams choose how they execute their work and the tools. There are a few high-level controls in place, but for the most part, teams work independently. The smallest team in this model is a Squad. A Squad usually comprises of one-to-seven persons, in our example, there are four people in a Squad. A Squad is similar to a Scrum team in the sense it is self-managing and cross-functional. Squads have a lot of freedom in deciding what to build and how to build. Squad team members are co-located and work in a highly collaborative environment. A Squad alone cannot build all features on their own, and so, they are organized into Tribes that represent a group of Squads that work on a related area of work. A Tribe is a collection of Squads working on one area, such as searching or managing playlists. A Chapter represents a group of team members
>
> **[1:34](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/spotify-engineering-culture?u=76281980&t=94)** with a specific area of expertise, such as user interface designer or database administrator. A Chapter represents a group of team members with a specific area of expertise, such as user interface designer, or database administrator. A Chapter lead is a manager for people with similar skillsets. This type of organization allows someone with a specific expertise, like a database administrator, to switch between squads without a change in their line manager. Another team organization construct is a Guild, which is a loosely-defined group of people with common interests. This type of organization crosses Squads and Tribes, and brings people with any work-related interest or even a common hobby together. Guilds have email lists and events to interact and benefit from each other. The Spotify model is aimed at organizing people together so they benefit from each other and work together towards the shared vision of the product, not create organizational hierarchies. Teams get help from many Agile coaches that are servant leaders focused on making the team more productive and helping teams remove obstacles in their work. Spotify has a failure-friendly culture. This is important because creative teams have to experiment, and many experiments are bound to fail. If people think they will be punished for failing,
>
> **[3:08](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/spotify-engineering-culture?u=76281980&t=188)** they will not experiment, and that will be counterproductive as far as their creativity is concerned. At Spotify, team members are encouraged to experiment and learn from mistakes. Changes have limited impact and are reversible. Spotify has internal code repositories organized like open-source repositories. Different teams have visibility to the code produced by other teams and can make changes to other teams' code if necessary. Spotify culture minimizes hand-off between teams. Teams help each other, but have minimal hand-offs. The culture of self-service is practiced where teams enable other teams to help themselves, instead of being dependent on or waiting for other teams. Bureaucracy is minimized at all levels. Chaos is not desirable, but is still preferred over bureaucracy. Spotify engineering culture is an excellent case study on an enterprise that took all the fluff out of different Agile approaches and focused on Agile principles. Their approach is people-focused and applies a subset of different Agile approaches to their advantage. Their model is so simple, yet so effective, and Spotify is very humble about their approach because they add that their approach may or may not work for you, and you may need to modify the Spotify model for your organization's unique needs.
>
> **[4:42](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/spotify-engineering-culture?u=76281980&t=282)** To learn more about the Spotify model, I recommend checking out this blog post.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Agile](../../Skills/DevOps/Agile%20Development.md) (5), [Scrum](../../Skills/DevOps/Scrum.md) (2)
> **Definitions:** is a  (5), is an  (1)
> **Analogies:** such as (3), similar to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [person] (1)

#### [DevOps: Background](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/devops-background?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/devops-background?u=76281980&t=0)** - [Narrator] Building software involves close cooperation between two types of teams. The first team comprises of developers and testers that write and validate software. This is the dev of [DevOps](../../Topics/DevOps.md), but good software is useful only if it can be deployed and released to your customers. The release part of the software involves knowledge of servers, middleware, network and storage configurations, and monitoring techniques that most developers are not comfortable with. This is done by the operations team and is the ops part of DevOps. An [agile](../../Skills/DevOps/Agile%20Development.md) organization is expected to have a fast and efficient software delivery pipeline where you should be able to release running features to your customers as quickly as possible. You need a culture of close cooperation between dev and ops to make your software delivery pipeline efficient. This is what DevOps attempts to achieve. Before we try to understand what DevOps is, let's try to establish the context and understand the problem that DevOps helps to solve. Business stakeholders have domain, market, and competitor knowledge and come up with ideas and features that they would like implemented. Their focus is competitiveness of the enterprise. Developers implement those features.
>
> **[1:35](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/devops-background?u=76281980&t=95)** QA people test those changes and report any issues that are found. Developers and QA people try their best to push stable product changes. Once the changes in the product are deemed good enough to be deployed, the IT operations deploy those changes to production or a production-like environment. The focus of operations people is service-level agreements and the stability of the environment. The key issue is that these three groups often work in silos without adequate visibility and knowledge of how the other teams operate. One common problem with deployment is that despite the best attempts to produce stable changes, updates deployed to pre-production or production break things quite often. This is because of the difference in environments caused by differences in configurations, dependencies, data, and other aspects of servers, storage, and network settings. Also, the traditional deployment approaches have been manual in nature and manual efforts are prone to errors. DevOps improves the code deployment process. Agile implementation somewhat unified and aligned business, development, and QA into what is known as a cross-functional team. In their quest for enhanced agility, agile teams started producing integrated product
>
> **[3:09](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/devops-background?u=76281980&t=189)** increments more frequently. The agile teams infused good agile practices, such as [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) and refactoring code to produce stable releases. The code quality was improved, but this would often break things in deployment. Agile approaches did not explicitly leave out IT operations, but the way many agile teams worked created more problems for the IT staff. These agile implementations clearly missed the role of IT operations to the agility of the enterprise. The IT operations staff saw frequent product increments as a bigger nightmare because now the changes that could break infrastructure were being pushed more frequently. This is what DevOps attempts to solve. DevOps is the culture and practices of closer cooperation between dev and ops.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (8), [Agile](../../Skills/DevOps/Agile%20Development.md) (8), [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [DevOps: Concepts](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/devops-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/devops-concepts?u=76281980&t=0)** - [Instructor] The cooperation of developers, testers, and IT operations, also known as dev and ops, is not created in a vacuum. It's created by a change in mindset, which includes collective responsibility of the deployment pipeline by all those involved in the process. It includes learning and implementing integration practices and patterns. [DevOps](../../Topics/DevOps.md) refers to a culture of cooperation between dev and ops. DevOps also includes the use of tools to automate various processes ranging from build automation to automated acceptance testing to programmatically provisioning and configuring infrastructure and automated monitoring of deployed applications. Most importantly, DevOps enables organizations to deploy fixes and new features to users quickly and keep deployments more stable. This reduces lead time on the work items, which is perfectly aligned with the lean principles. In a nutshell, DevOps helps organizations implement faster delivery pipelines. Let's review three key practices of DevOps. [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md), or CI, is the practice where developers frequently commit changes to a centralized repository to trigger an automated build. The build process does multiple things.
>
> **[1:34](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/devops-concepts?u=76281980&t=94)** It validates the code base for various things such as compilation errors, code quality metrics, automated tests, static code analysis, missing dependencies, et cetera. The build succeeds or fails depending on the results of the validation. Developers get quick feedback on any issues and fix those issues on a priority basis. This practice keeps the code base in a stable state. [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md), or CD, is an extension of continuous integration, and is the capability to always keep a product in a stable state after every change so that the product is potentially deployable. This could mean deploying the application to a testing environment. Continuous deployment means automatically deploying the product increment to production or a production-like environment. Continuous deployment may or may not follow continuous delivery. Continuous integration, continuous delivery, and continuous deployment together form the three key aspects of DevOps. DevOps relies on building a culture of cooperation between developers and operations staff. Both dev and ops people are responsible for the entire software delivery pipeline. Continuous integration, delivery, and deployment help in the process of making DevOps successful.
>
> **[3:10](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/devops-concepts?u=76281980&t=190)** Successful DevOps implementation relies on automation and tools. It is a good idea for developers to become familiar with these tools. However, it is important to note that tools by themselves do not make the software delivery pipeline efficient. Successful DevOps means close cooperation between dev and ops staff. DevOps is based on lean principles where you build a fast delivery pipeline with minimal wastage. A working software feature should be available to your customers very quickly or come back to the developer very quickly if it's not ready for release. DevOps is not a replacement for [agile](../../Skills/DevOps/Agile%20Development.md). In fact, DevOps enables end-to-end agility with faster and stable deployments, and so compliments traditional agile approaches. An alternate way of looking at DevOps is that it's an agile approach that merges development and operations. DevOps is not an industry buzzword. Many organizations are reaping the benefits of DevOps practices. DevOps is not a tool or technology. It involves a cultural shift towards building an efficient pipeline that produces stable and faster delivery and healthy operational practices. DevOps does not mean developers have complete freedom to push a button to deploy to production. You need proper checks and balances in place
>
> **[4:43](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/devops-concepts?u=76281980&t=283)** to make sure your production deployments are in a stable state.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (18), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (4), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (3), [Agile](../../Skills/DevOps/Agile%20Development.md) (3)
> **Definitions:** known as (1), refers to (1), is an  (1), is a  (1)
> **CLI Commands:** make (2), cd (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Microservices: Key concepts](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/microservices-key-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/microservices-key-concepts?u=76281980&t=0)** - [Presenter] Any discussion on [Software Development](../../Topics/Software%20Development.md) lifecycle would be incomplete without talking about [Microservices](../../Skills/Software%20Development/Microservices.md). This is because microservices represent an architectural and implementation pattern that facilitates lower time to market and efficient software application lifecycle. Before we get into the details, let's take a moment to review the history of [Software Deployment](../../Skills/Data%20Science/Software%20Deployment.md) so we understand why we need microservices. In the era of mainframe computers, software was deployed as a large executable on computers with massive computational power. Users would transmit commands from thin lines or what were known as dumb terminals to the central server or mainframe computer. While modularized programming for better maintainability was possible for this type of applications, the centralized deployment and imperative nature of operations led to large programs that were challenging to understand and maintain. The next phase was the era of thick client applications running on multiple computers with a single backend database. This was a typical two-tier client server application. The next evolution was an N-tier application with presentation layer, business logic layer, data access layer, and a backend database. Web applications were built this way, and many modern applications are still N-tier applications. This type of code organization and deployment
>
> **[1:38](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/microservices-key-concepts?u=76281980&t=98)** helped create loosely coupled layers, but the isolation was not at deployment level. In other words, code was more modularized with separation of concerns and specialization, but the entire code base was deployed as a single unit to [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) and application servers. Memory leakage in one part of the application could cause the entire application to crash. Schema changes in one table could break the entire application. All such implementation patterns created deployment monoliths. Enter microservices. Microservices are also based on a set of loosely coupled components, but the decomposition of the application is done differently. Let's take the example of a retail store's information system. Keep in mind that it's just an example and not a functionally complete microservices-based system. The decomposition for microservices is based on business functionality and driven by domain. The system could be designed as a collection of services like inventory service, customer management service, order management service, and [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md) service, et cetera. Each service could have its own code organization layers and its own backend data store, and each service would be independently deployable. Interaction between the services would be through well-defined interfaces.
>
> **[3:11](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/microservices-key-concepts?u=76281980&t=191)** Changes to a service would have minimal to no impact on other services. The microservices architectural pattern facilitates faster parallel development with multiple small teams. Each service is focused on only one domain. Also, each service could be developed using a different programming language and platform depending on the team's skills. Each service could be modernized, scaled, or upgraded independently. Microservices have disadvantages too. The distributed nature of microservices requires handling complex interprocess communications that could lead to performance issues or challenges with [Integration Testing](../../Skills/Software%20Development/Integration%20Testing.md) calls that span multiple services. Having multiple [Databases](../../Skills/Software%20Development/Databases.md) could cause issues with duplication of data, and also challenges with database transactions that span multiple databases. There's no unique way of developing microservices, but the key principle is to make each service independently deployable, and I'll explain that a bit more in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (11), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [Software Deployment](../../Skills/Data%20Science/Software%20Deployment.md) (1), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **Definitions:** known as (1), in other words (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [presenter] (1)

#### [Microservices: Deployment scenarios](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/microservices-deployment-scenarios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/microservices-deployment-scenarios?u=76281980&t=0)** - [Instructor] Now that we are familiar with the basic concepts of [Microservices](../../Skills/Software%20Development/Microservices.md), let's take a moment to review a few architectural and implementation patterns. Let's talk about [Data Management](../../Skills/Software%20Development/Data%20Management.md) first. You could have a single database for multiple services. The advantage with this approach is that you do not need to worry about any data replication across multiple [Databases](../../Skills/Software%20Development/Databases.md). But the disadvantage is that there are multiple services with dependencies on a single database. There is a higher risk of any database change causing issues with multiple services. You can minimize this risk by writing code that is agnostic of database schemas with a data access layer, but there's always some risk. Another disadvantage is that not all services require identical types of databases. For example, a service may need transactional rights and fixed schema, and thereby would need a relational database, whereas another service could only need storing key value pairs, and so a [NoSQL](../../Skills/Software%20Development/NoSQL.md) database would be more appropriate. Having one database per service is usually the right approach. So the next challenge is, how do we keep different databases in sync? For example, the [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md) case database would need information about customers from the customer database. You could set up replication from the customer database to the customer support case database.
>
> **[1:34](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/microservices-deployment-scenarios?u=76281980&t=94)** Another way to accomplish this could be to have the customer database publish events whenever there's an update to a customer and the customer support case database could subscribe to such events. Services could also have dependencies. Quite often, a business operation would involve invoking a service, which would in turn invoke other services. If possible, you could design interservice communication with an intermediary, like a message queue. Such type of interactions would be asynchronous and would reduce dependencies among different services. For [Business Operations](../../Skills/Data%20Science/Business%20Operations.md) that would require a real time response involving interactions among multiple services, you would need a mechanism to track all operations performed across multiple services. If any operation failed, you would have to apply it reversing or compensating operations to back out changes made to all the involved services. A good practice is to handle all operations invoked on services via lightweight [application programming interfaces](../../Skills/Software%20Development/Application%20Programming%20Interfaces%20(API).md), or API gateways. Also, different services could be scaled independently by using automation based on server utilization or network or other related metrics. You could put API gateways and/or load balancers in front of services.
>
> **[3:11](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/microservices-deployment-scenarios?u=76281980&t=191)** Containerizing applications is a great way to build microservices. While a detailed discussion on containers is out of scope for this course, think of containers as a way of packaging an application and its dependencies into these constructs called containers. The containerized applications work on top of a container runtime engine, like Docker. You can run a service as a set of containers. Please keep in mind that containerization by itself does not make an application a microservice. You can take a monolithic application and run it as a container. Based on the scenarios mentioned above, you probably agree that microservice design can be fairly involved, and many applications, especially small applications that are not expected to change, are not good candidates for being developed and deployed as microservices. So, as you consider your design approach, weigh the pros and cons of a microservice-based solution. You will find resources about microservices in the course handout.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (3), [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md) (3), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1)
> **CLI Commands:** docker (1), make (1), find (1)
> **Env Vars:** api (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Best Practices:** good practice (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)

#### [Twelve-factor app, part 1](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/twelve-factor-app-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/twelve-factor-app-part-1?u=76281980&t=0)** - [Instructor] Twelve-Factor App refers to a set of application design, development, and deployment principles that are aligned with best practices and help establish an efficient [DevOps](../../Topics/DevOps.md) pipeline. The principles, developed in 2011, by engineers at Heroku were written specifically for web applications exposed as services, but the principles are generic in nature and can be applied to almost all applications. Let's discuss the principles in more details. The first principle, called codebase, states that there should be one source control system, like [Git](../../Skills/Software%20Development/Git.md) or Subversion, per application. Each application should have its own dedicated codebase, such as a separate [GitHub](../../Skills/Software%20Development/GitHub.md) repository. Functionality that is shared across multiple applications should be extracted into its own separate code library with its own codebase. This allows each application to have its own distinct codebase that can be deployed independently to different environments like development, staging, and production, while still sharing common functionality throughout the separate code library. The key idea is to maintain one-to-one mapping between an application and its codebase. The second principle is about explicitly declaring all application dependencies. This is important
>
> **[1:33](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/twelve-factor-app-part-1?u=76281980&t=93)** because applications may work in one environment, but fail in another due to missing dependencies. To comply with this principle, developers need to explicitly declare the specific versions of dependencies that their application requires, such as a particular version of a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library. This can be done using package managers and dependency files, for example, requirements.text, in Python. Explicitly defining dependencies makes applications more portable and easier to maintain, as the required dependencies are clearly specified rather than relying on implicit assumptions. The third principle, called config, states that all configuration information should be stored as environment variables, not hard-coded in the application. Configuration information refers to information, such as pointers to external resources, credentials to external data stores, et cetera, that will differ between environments, such as production testing, development, et cetera. For example, .net web applications use a web.config file to store configuration. This principle goes further by recommending storing configuration information as environment variables in separate environment files, so the application executable remains the same across environments with the environment variables handling the configuration differences. Storing configuration separately as environment variables
>
> **[3:08](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/twelve-factor-app-part-1?u=76281980&t=188)** makes the application more flexible and maintainable across different deployment environments. The backing services principle states that backing services that are services that the application consumes over a network should be treated as attached resources. In other words, there should be no change in the application code when it runs locally and connects to a local database, running on the development machine, versus when it connects to a [Quality Assurance](../../Skills/Software%20Development/Quality%20Assurance.md) database deployed in a different server. For the application, the backing service is just a URL that needs to be updated if pointing to a different backing service. Codebase contains source code that is compiled and bundled as a set of executables via the build process. The build bundle is combined with configuration information to produce what is known as a release. This release bundle is deployed into the running environment and is called the run stage. The fifth Twelve-Factor principle states that build, release, and run stages should be strictly separated. If a defect is detected in the run stage, you should not be able to update part of the build output release or run stages. You should either update the source code to trigger a new build, release and run stages, or roll back to an older tracked release version. The Twelve-Factor App is a lengthy topic,
>
> **[4:43](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/twelve-factor-app-part-1?u=76281980&t=283)** and so we'll cover the remaining principles in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [DevOps](../../Topics/DevOps.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Quality Assurance](../../Skills/Software%20Development/Quality%20Assurance.md) (1)
> **Definitions:** refers to (2), in other words (1), known as (1), is called (1), is a  (1)
> **Analogies:** such as (4), for example (2)
> **CLI Commands:** python (2), git (1)
> **Exercise Files:** source code (2)
> **File Paths:** web.config (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)

#### [Twelve-factor app, part 2](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/twelve-factor-app-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/twelve-factor-app-part-2?u=76281980&t=0)** - [Instructor] We are continuing with the 12 factor application principles, starting with principle number six. The sixth principle states that a 12 factor application runs as a set of independent stateless processes with the state of each request stored in persistent storage, such as a database, not in a local cache or file system associated with a process. If a process dies, the other processes can continue to handle requests with no data loss or inconsistency. Running an application as a set of independent processes facilitates horizontal scaling of our application. To handle increased workload, you can increase the number of processes that handle user requests and route the requests to the process via a load balancer. The port binding principle expects 12 factor applications to expose their functionality without depending on a web server, such as Apache or IIS. For example, a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) Flask application is exposed via port 5,000 by default with a web server library being part of the application itself. You can run multiple instances of the application on the same or different servers by using different port numbers. And these application instances could be exposed by a service that would route traffic to these different instances,
>
> **[1:34](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/twelve-factor-app-part-2?u=76281980&t=94)** but hide port numbers from the client applications. The concurrency principle compliments the sixth principle called processes. Each 12 factor app is a set of independent web or background processes similar to Unix daemon processes. An application would handle a workload via a web process or a background process running as a top level process, not embedded within another process such as a web server, like Apache, or a runtime, like [Java](../../Skills/Software%20Development/Java.md) Virtual Machine. Running an application as a set of independent processes facilitates horizontal scaling. Running processes as daemon sets that is restricting to only one instance of a process type is a violation of the 12 factor app. 12 factor apps are designed with robustness in mind because the apps can initialize very quickly and shut down gracefully. For example, a Docker service can be scaled out or scaled in. Scaling out means Docker containers would initialize quickly and start handling requests. Scaling in means a Docker container could be terminated at a short notice and should be able to handle existing requests gracefully without causing any data inconsistencies or resource locking and shutdown. Also, a 12 factor app should be able to handle unexpected shutdowns.
>
> **[3:10](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/twelve-factor-app-part-2?u=76281980&t=190)** The dev/prod parity principle expects the development and production environments to be as similar as possible. This does not mean the development and production environment should be of identical scale. It means three things. Firstly, an efficient continuous deployment process should be implemented to propagate features from the development to production environments as quickly as possible. Secondly, the developers should collaborate closely with operations staff to have high visibility into the deployment. Thirdly, the development and production environments should have identical setup, such as operating system versions, runtime versions, third party libraries, and other application dependencies. You need log files for troubleshooting issues or for auditing. Quite often, an application's logging code is tightly coupled with log creation, storage, and management. A 12 factor app uses standard output such as print statements to output logging information, but is decoupled from the other aspects of logging. Functionality such as log [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) is handled by log routers like FluentD, and log analytics is handled by another system such as Splunk. As an application admin, you often run one-time scripts to perform operations such as data cleanup or synchronizing your application's code with the backend database schema.
>
> **[4:44](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/twelve-factor-app-part-2?u=76281980&t=284)** The last principle states that such type of administrative operations should be [Version Control](../../Skills/Web%20Development/Version%20Control.md) and part of the application code base. In other words, the [System Administration](../../Skills/Network%20and%20System%20Administration/System%20Administration.md) functionality should ship with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the application. If you want to establish an efficient [DevOps](../../Topics/DevOps.md) pipeline, I encourage you to take the time to become familiar with these 12 principles.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [System Administration](../../Skills/Network%20and%20System%20Administration/System%20Administration.md) (1)
> **Analogies:** such as (8), for example (2), similar to (1)
> **CLI Commands:** docker (3), apache (2), python (1)
> **Definitions:** is a  (2), in other words (1)
> **Ports:** port 5 (1)
> **Env Vars:** iis (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Chaos engineering](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/chaos-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/chaos-engineering?u=76281980&t=0)** - [Instructor] The discipline to proactively cause issues in a system to test resilience is called chaos engineering. All software systems, regardless of size, encounter failures at some point in time. Large distributed enterprise systems are even more prone to failures. These failures could come in the form of [Hardware](../../Topics/Hardware.md) issues, inability to scale to workloads, network issues, application crashes caused by unhandled exceptions in code, et cetera. Functional testing for business requirements and non-functional testing for aspects such as system performance, maintainability, [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md), et cetera, reduces chances of failures. But we also need a proactive approach to simulate a number of conditions that could cause failures and test the resilience of our applications against those conditions. This discipline of proactively causing issues to test resilience is called chaos engineering. Why does chaos engineering need a mention in a course on [Software Development](../../Topics/Software%20Development.md) lifecycle? Because chaos engineering is not only a discipline of testing the reliability of a system, it also has a lifecycle which needs to be part of the software development lifecycle. Let's say you deployed a website that runs on a set of [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) with a load balancer in front and a database as the backend data store.
>
> **[1:34](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/chaos-engineering?u=76281980&t=94)** Now let's think of a few scenarios that could cause your website to go down. What if there is a disk failure on the database server causing the database to crash? Is there a standby database that would start handling requests going to this database? How much time does this standby database take to come back online, and how much data is lost? What happens if a subset of web servers goes offline? Can the web application still handle the workload with lesser number of web servers? Do new web servers get launched automatically to handle the workload? In other words, does our infrastructure scale automatically? What if the connectivity between the load balancer and the web servers, or between the web servers and the database servers is lost? The number and type of failure scenarios depend on your application and the underlying infrastructure. With chaos engineering, you plan those failure scenarios and define the hypothesis of what could go wrong with your system. The scenarios we discussed in our website deployment example will be part of the hypothesis. Then you run experiments to cause those issues. That is, inject those faults and observe how the system reacts. An experiment could be intentionally shutting down the web servers to see how the system reacts. In the next step, you analyze the result of the experiments
>
> **[3:07](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/chaos-engineering?u=76281980&t=187)** to understand what could be improved in the system to improve its resilience. If the stopped web servers are replaced or brought back online, that is a desirable result to our experiment. If the load balancer keeps sending commands to web servers that are offline, that is an area of improvement. If you find issues, you mitigate those issues. Chaos engineers often start running experiments in non-production environments and then switch to running the same experiments in production environments. The attempts to cause disruptions in production environments may appear counterproductive, but it's really a great practice to uncover things and have mitigation actions in place instead of letting these issues happen unexpectedly later with no mitigation in place. When chaos engineering activities are controlled and planned in advance, that can save time and money when such an event occurs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (9), [Software Development](../../Topics/Software%20Development.md) (2), [Hardware](../../Topics/Hardware.md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Definitions:** is called (2), is a  (2), in other words (1), is an  (1)
> **Cross-References:** we discussed (1), in the next (1)
> **CLI Commands:** find (1)
> **UI Navigation:** switch to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 4. Other Approaches

[↑ Back to Table of Contents](#table-of-contents)

#### [CMM overview](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/cmmi-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/cmmi-overview?u=76281980&t=0)** - [Instructor] CMMI, or Capability Maturity Model Integration, is a process improvement model applicable to a wide range of industries. It was developed by a collaboration of industry experts at the Carnegie Mellon University's Software Engineering Institute. Its latest version is CMMI v3.0, which was released in April of 2023. Please note that CMMI is a model, not a standard. It is not prescriptive. In other words, it does not tell you what should be done and who should do it, but it provides a model and guidance on achieving process maturity at your organization. For example, CMMI defines a level of process maturity in terms of whether you have documented processes. It does not tell you what your processes should be, so that is a key concept to know about CMMI. Organizations undergo appraisals to be awarded CMMI maturity levels one through five. Let's discuss what CMMI maturity levels are. The CMMI website offers very detailed resources on their process. This is the CMMI website that shows different maturity levels and their descriptions. At maturity level one or initial maturity level,
>
> **[1:37](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/cmmi-overview?u=76281980&t=97)** there are no documented processes or the process documentation is not known to most people. You may be producing good quality goods and services, but the processes are ad hoc and reactive. It's like cooking a dish by instinct without following a recipe book. If the dish you cook is not good, you try to adjust the taste by adding more condiments. At this level, there is a lot of variation in the output. Level two, managed. At maturity level two or managed maturity level, the processes are documented at project level and are mostly reactive. Organizations at this level have processes that are planned, performed, measured and controlled. Projects adhere to well-defined plans. This is like working for a restaurant chain where each restaurant has its own recipe book, and the recipe book is followed very well. Defined, at maturity level three or defined maturity level, the processes are defined at organizational level and followed with customizations for projects if needed. Processes are consistent and proactive. This is similar to a restaurant chain where recipes, packaging, and delivery processes are documented, followed, and monitored very well. Maturity level four, quantitatively managed.
>
> **[3:14](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/cmmi-overview?u=76281980&t=194)** At maturity level four or quantitatively managed maturity level, process quality and performance objectives are set quantitatively. And process quality and performance can be measured through statistical methods. So you can measure how will your processes are performing. Due to the use of scientific methods, your processes become predictable. Level five, optimizing. At maturity level five or optimizing maturity level, your organization is focused at continuous process improvement. How is CMMI applicable to [Software Development](../../Topics/Software%20Development.md) and [agile](../../Skills/DevOps/Agile%20Development.md) approaches? CMMI holds a lot of promise in this area. It includes guidance on how agile methods can be used to optimize the processes. Many agile approaches are simple and very effective, but have scaling problems. A process model that provides organization-wide agile scaling guidance may be very useful at an organizational level. CMMI has practices to move iteratively and incrementally towards optimal performance, something which is aligned with agile approaches. So I recommend reviewing CMMI for process improvement and organizational agility.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Agile](../../Skills/DevOps/Agile%20Development.md) (5), [Software Development](../../Topics/Software%20Development.md) (1)
> **Env Vars:** cmmi (13)
> **Definitions:** is a  (4), in other words (1)
> **Analogies:** for example (1), it's like (1), similar to (1)
> **Versions:** v3.0 (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Six Sigma overview](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/six-sigma-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/six-sigma-overview?u=76281980&t=0)** - [Instructor] Lean and [Six Sigma](../../Skills/Cybersecurity/Six%20Sigma.md) are both focused on minimizing waste and maximizing customer value. Lean when combined with six sigma, can improve customer satisfaction and improve the quality of goods and services you produce. Let's do a quick overview of six sigma. Six sigma originated in manufacturing using a scientific approach and statistical calculations to measure the quality of a process by tracking the number of defects. The goal of six sigma is to reduce defects and keep the output of a process within certain limits of a baseline. Developed at Motorola in the 1980s and popularized by Jack Welch and General Electric in the 1990s, six sigma was designed to improve the quality of [products](../../Skills/Software%20Development/Microsoft%20Products.md). Its effectiveness led to widespread adoption by companies worldwide. Statistical methods calculate the six sigma numbers and percentages. The sigma in six sigma indicates variation from the desired reference point. Higher sigma levels are better, so a process that is at five sigma will produce products with fewer defects as compared to a process at four sigma. Higher sigma level is better because it means lesser number of defects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Six Sigma](../../Skills/Cybersecurity/Six%20Sigma.md) (8), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2)
> **Speakers:** - [instructor] (1)

#### [Six Sigma and software](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/six-sigma-and-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/six-sigma-and-software?u=76281980&t=0)** - [Instructor] How is [Six Sigma](../../Skills/Cybersecurity/Six%20Sigma.md) applicable to [Software Development](../../Topics/Software%20Development.md)? Manufacturing is a pure science where you can produce the same type of product repeatedly, and quantifying defects is manageable. Software development is partly science and partly art, and the procedure of measuring quality can be somewhat challenging. You're not producing tangible [products](../../Skills/Software%20Development/Microsoft%20Products.md) repeatedly, and to make things more complex, customers' expectations, team skill level, [Organizational Culture](../../Skills/Data%20Science/Organizational%20Culture.md), politics, technology, et cetera, are different for different projects and products, so it becomes extremely challenging to measure the sigma level of a software development process. Six Sigma generally works at a macro level, so when you're talking about Six Sigma, you're talking about high-level processes, not how to use one software product. The good news is that Six Sigma includes a process improvement cycle called the DMAIC cycle, which may be useful for all software and non-software initiatives. Let's review this cycle next. D-M-A-I-C, or DMAIC, is an acronym where each letter stands for the name of a phase in this data-driven, five-phase process. The phases are, define, this is where you define a problem or an opportunity for improvement in a problem.
>
> **[1:37](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/six-sigma-and-software?u=76281980&t=97)** Value stream mapping, which we already covered in this course, is one of the techniques for identifying problems. Measure, in this phase, you define how you will measure performance for the activities in your process with the help of techniques such as Pareto charts. Analyze, this is the phase where you find out the cause of variation or defects. Techniques such as root cause analysis with fishbone diagram is one such technique for finding the variation. Improve, in this phase, you apply multiple techniques for reducing the effect of or eliminating the reasons for defects and variation. Affinity diagram is one such technique where team members write down suggestions for process improvement and then group similar suggestions into groups, then the team chalks out an action plan for implementing those ideas. Control, an improved process needs monitoring for two reasons, one, the process has to stay at its optimum level. Secondly, there's always scope for improvement. You apply techniques such as control charts to measure outputs, and keep outputs within allowed limits of variation. The details of these techniques are out of scope for this course. There are a number of Lean and Six Sigma courses in our library, and I recommend Steven Brown's [[Lean [[Six Sigma Foundations]]]] course
>
> **[3:12](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/six-sigma-and-software?u=76281980&t=192)** as a good starting point. You can apply the DMAIC cycle for software development process improvement. Perhaps the software delivery process needs improvement. You can apply DMAIC cycle on your software delivery process, and find opportunities for more automation and implement faster delivery cycles. Quantifying sigma level for a software delivery process is challenging. However, I have used a comparison technique to compare the number of defects on two similar software products. The technique was not perfect because of the nature of software development business, but it did bring out the fact that the number of defects in one product was about 50% higher than the other because the product with higher defects was over-engineered. That was a clear, tangible benefit of applying Six Sigma. We applied a small subset of DMAIC cycle techniques to improve the quality of one of the software products. Lean and Six Sigma together help you build highly optimized processes for product delivery. Six Sigma may not be applicable in all cases, but knowledge of the DMAIC cycle and the associated techniques is surely something you want to know. The learning process itself is fascinating, in my opinion. It will give you opportunities to achieve process improvement as and when applicable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Six Sigma](../../Skills/Cybersecurity/Six%20Sigma.md) (9), [Software Development](../../Topics/Software%20Development.md) (5), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (4), [Organizational Culture](../../Skills/Data%20Science/Organizational%20Culture.md) (1)
> **Env Vars:** dmaic (6)
> **CLI Commands:** find (2), make (1)
> **Analogies:** such as (3)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Generative AI assistance](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/generative-ai-assistance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/generative-ai-assistance?u=76281980&t=0)** - [Narrator] Why should we mention generative [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md), or [GenAI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md), in a course on [Software Development](../../Topics/Software%20Development.md) lifecycle? It's because [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) is now an inseparable part of our personal and professional life. In the world of software development, use of GenAI tools to generate code, perform code analysis, generate architecture diagrams, troubleshoot code, generate documentation, et cetera, can boost productivity to a great extent. I will not recommend any specific tools for generative AI in this course, but I'm sure you can find out the best tool set for your requirements. Let me share a story with you. I was tasked to build a web application based on the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) [Django](../../Skills/Web%20Development/Django.md) framework. I had no prior experience with the Django framework, so I used a very popular generative AI tool to build a code skeleton, and then continue to use the tool to build the application's functionality. Throughout the process, I used the GenAI tool to resolve issues like database connectivity, compilation and runtime errors, et cetera. Then I used the tool to generate [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md), and deployed the application to a public cloud. Throughout the process, the generative AI tool provided assistance for all aspects of [Application Development](../../Skills/Software%20Development/Application%20Development.md),
>
> **[1:34](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/generative-ai-assistance?u=76281980&t=94)** but I had to refer to official Django documentation and various other types of reference manuals to validate that I was on the right track. So my recommendation is to be aware of the key architectural mechanisms while using any GenAI tool to the fullest extent. As [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) co-founder Bill Gates said, "Generative AI has the potential to change the world in ways that we can't even imagine." So go ahead and use generative AI assistant tools, and deliver value to your customers even faster than before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (6), [Genai](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (4), [Django](../../Skills/Web%20Development/Django.md) (3), [Software Development](../../Topics/Software%20Development.md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **CLI Commands:** find (1), python (1)
> **Warnings:** troubleshoot (1), be aware (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Your path to success](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/your-path-to-success?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-development-life-cycle-sdlc-29588033/your-path-to-success?u=76281980&t=0)** - So now that you have a solid understanding of the various frameworks and methodologies, I encourage you to take a deeper dive to strengthen your understanding of the finer details. We have several courses on the approaches covered in this course, including advanced and enterprise topics. See the course handout for a list of various deep dive courses and useful links. Each organization or team has unique requirements and environments. This course covers what has been in the market for the last several years. Just like Spotify, you can choose what works for you and find your own way. More importantly, I encourage you and your team to try out [agile](../../Skills/DevOps/Agile%20Development.md) practices that make the most sense to you. Don't be afraid of trial and error. Agile is all about continuous learning. after all. Now go and build your optimal path to success. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Agile](../../Skills/DevOps/Agile%20Development.md) (2)
> **CLI Commands:** find (1), make (1)
> **Analogies:** just like (1)
> **Speakers:** - so (1)


## Instructor

- [Shashi Shekhar](../../Instructors/DevOps/Shashi%20Shekhar.md)

## Resources

- Exercise files available

## Skills Covered

- Software Development Life Cycle (SDLC)

## Path Context

### In [Software Development Fundamentals](../../Paths/Software%20Development/Learning%20Paths/Software%20Development%20Fundamentals.md)
← [Computer Science Principles- Programming](Computer%20Science%20Principles-%20Programming.md) | **4 of 10** | [HTML Essential Training](../Web%20Development/HTML%20Essential%20Training.md) →

### In [Getting Started with Continuous Integration - Continuous Delivery (CI-CD)](../../Paths/DevOps/Learning%20Paths/Getting%20Started%20with%20Continuous%20Integration%20-%20Continuous%20Delivery%20(CI-CD).md)
**1 of 3** | [DevOps Foundations- Continuous Delivery-Continuous Integration](../DevOps/DevOps%20Foundations-%20Continuous%20Delivery-Continuous%20Integration.md) →

## Appears In

- [Software Development Fundamentals](../../Paths/Software%20Development/Learning%20Paths/Software%20Development%20Fundamentals.md)
- [Getting Started with Continuous Integration - Continuous Delivery (CI-CD)](../../Paths/DevOps/Learning%20Paths/Getting%20Started%20with%20Continuous%20Integration%20-%20Continuous%20Delivery%20(CI-CD).md)

## Related Courses

_Courses sharing skills:_

- [Software Design- From Requirements to Release](../DevOps/Software%20Design-%20From%20Requirements%20to%20Release.md) — Software Development Life Cycle (SDLC)
- [Planning and Releasing Software with Jira](../DevOps/Planning%20and%20Releasing%20Software%20with%20Jira.md) — Software Development Life Cycle (SDLC)

---

[↑ Back to top](#)