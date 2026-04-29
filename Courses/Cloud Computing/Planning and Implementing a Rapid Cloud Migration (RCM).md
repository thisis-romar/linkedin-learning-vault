---
type: course
cssclasses:
  - lle-course
slug: planning-and-implementing-a-rapid-cloud-migration-rcm
url: "https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm"
duration_minutes: 62
duration: 1h 2m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHRAgvDDTgkhQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1629824104520?e=2147483647&amp;v=beta&amp;t=x8u8P2SOQhU9ecMa12SDqY64IFDXhQcUibl0KgRRlts"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Design and Present Your Cloud Strategy]]'
  - '[[Introduction to Enterprise Cloud Migration Planning]]'
prev_courses:
  - '[[Presenting Cloud Migration Benefits to the C-Suite]]'
  - '[[Dependency Mapping for Cloud Migration]]'
path_nav: '[{"path":"Design and Present Your Cloud Strategy","position":6,"total":6,"prev":"Presenting Cloud Migration Benefits to the C-Suite","next":null},{"path":"Introduction to Enterprise Cloud Migration Planning","position":4,"total":4,"prev":"Dependency Mapping for Cloud Migration","next":null}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - topic/devops
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Planning%20and%20Implementing%20a%20Rapid%20Cloud%20Migration%20(RCM).md)

![Planning and Implementing a Rapid Cloud Migration (RCM)](https://media.licdn.com/dms/image/v2/C560DAQHRAgvDDTgkhQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1629824104520?e=2147483647&amp;v=beta&amp;t=x8u8P2SOQhU9ecMa12SDqY64IFDXhQcUibl0KgRRlts)

# Planning and Implementing a Rapid Cloud Migration (RCM)

> Moving applications and data from traditional systems to the public clouds was already challenging in normal times, but as many organizations saw in 2020, an unexpected crisis can require rapid decision making and can create unanticipated technology shifts for IT teams. In this course, instructor David Linthicum helps IT decision makers and administrators develop a plan designed around rapid migra

> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm) | 1h 2m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Introduction to Crisis-Driven Rapid Migration]]** (5 videos)
- **[[#2. Selecting the Workloads]]** (3 videos)
- **[[#3. Picking the Target Platform for Rapid Migration]]** (4 videos)
- **[[#4. Cloud-Based Tools for Rapid Migration]]** (2 videos)
- **[[#5. Setting Up a Rapid Migration Factory]]** (4 videos)
- **[[#6. Rapid Migration at Scale]]** (5 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Overview of rapid migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/overview-of-rapid-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/overview-of-rapid-migration?u=76281980&t=0)** - [Instructor] The ability to move applications in data from traditional systems to the cloud has been a challenge since cloud computing first came onto the scene over 10 years ago, the challenges have been solely overcome as enterprises, partly motivated by the pandemic have looked for a way to remove obstacles to do migration at scale.
>
> **[0:18](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/overview-of-rapid-migration?u=76281980&t=18)** Hi I'm Dave Linthicum internationally known cloud expert and consultant in this LinkedIn learning course.
>
> **[0:24](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/overview-of-rapid-migration?u=76281980&t=24)** I'll use pragmatic examples and explain processes to help you gain an understanding of the steps to undertake for a successful rapid cloud migration the first time.
>
> **[0:34](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/overview-of-rapid-migration?u=76281980&t=34)** I wish you luck and good learning.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, you should have an understanding of enterprise architecture, both traditional and cloud-based systems, and it's helpful to understand the basics of computing, including compute, storage, and networking.
>
> **[0:14](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-should-know?u=76281980&t=14)** It's also helpful to have an understanding of other more advanced topics, including security and governance.
>
> **[0:20](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-should-know?u=76281980&t=20)** But if those are not on your skills list, we'll provide enough information here to help you keep up.
>
> **[0:26](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-should-know?u=76281980&t=26)** If you're not yet comfortable around some of the topics mentioned, I suggest you review one, two, or all three of the following courses.
>
> **[0:34](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-should-know?u=76281980&t=34)** Cloud architecture core concepts, cloud security planning, learning cloud computing, cloud governance.
>
> **[0:41](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-should-know?u=76281980&t=41)** These are in my course catalog and join me back here.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### What defines a crisis?
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980&t=0)** - [Instructor] How do we know what situations call for rapid migration?
>
> **[0:03](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980&t=3)** This video defines when to justify rapid migration and what constitutes a crisis.
>
> **[0:09](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980&t=9)** Downturns and upturns in the economy can cause a crisis.
>
> **[0:12](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980&t=12)** Both require enterprise IT change.
>
> **[0:14](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980&t=14)** In the case of the pandemic, we saw that some businesses grew rapidly such as delivery services, others such as travel contracted.
>
> **[0:22](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980&t=22)** This means that IT services must quickly change and cloud computing is typically the center of that change.
>
> **[0:27](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980&t=27)** While we follow laws, personally, businesses also have to follow laws within the countries they are operating while the changes in laws have little effect on IT.
>
> **[0:36](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980&t=36)** Others require major changes where leveraging the cloud is the best path.
>
> **[0:40](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980&t=40)** For example, leveraging compliance processes already built within a public cloud to ensure that data and processes are handled properly as defined that the law.
>
> **[0:50](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980&t=50)** Enterprises can be in a crisis without any major external influences such as the economy or laws as defined above.
>
> **[0:58](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980&t=58)** For example, the culture within an enterprise becomes toxic and leads to high employee turnover, lawsuits, and a downturn of revenue.
>
> **[1:07](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980&t=67)** While these problems are more complex to fix than just moving to the cloud, (indistinct) many of these issues are an outdated IT system.
>
> **[1:14](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980&t=74)** That's leading to poor sales, lack of demand creation and palpable inefficiencies around productivity of employees.
>
> **[1:21](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-defines-a-crisis?u=76281980&t=81)** Cloud computing is often the technology leveraged to fix these issues quickly and cost efficiently.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (2)
> **Code Keywords:** require (2), public (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Crisis-Driven Rapid Migration

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understanding when to use rapid migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=0)** - [Instructor] When do you use rapid migration?
>
> **[0:02](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=2)** If there's a strong enough business need for speed to justify the cost and risk, then rapid migration is an excellent option.
>
> **[0:10](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=10)** Let's talk about how to establish if there is a strong business need.
>
> **[0:14](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=14)** Here are some key factors that would establish need.
>
> **[0:17](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=17)** If the market trends away from current product and services or the business needs to change to stay relevant, innovations needed to provide full agility.
>
> **[0:27](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=27)** Meaning the business needs to provide a foundation for changing things quickly.
>
> **[0:33](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=33)** Changes in workforce, pushing internal changes, such as adoption of a union.
>
> **[0:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=37)** Laws and regulations are changing quickly, such as regulations around what data can be leveraged, where and how?
>
> **[0:46](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=46)** How can you calculate the potential risk of rapid migration?
>
> **[0:49](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=49)** Here are three core considerations.
>
> **[0:51](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=51)** Speed or the compression of time for rapid versus normal delivery.
>
> **[0:56](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=56)** Complexity or the number of applications and databases we're looking to move as well as platforms and other technical factors.
>
> **[1:04](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=64)** Finally, the current or the as-is state of how all the current applications and databases are designed, and that's how easy will they be to move to Cloud-based platforms?
>
> **[1:17](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=77)** So there's the cost and risk of speed?
>
> **[1:20](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=80)** The faster you do rapid migration, the more cost and risk come into the equation.
>
> **[1:26](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=86)** For example, the faster you move, the more likely that you'll make mistakes such as picking the wrong service to migrate to, or picking the wrong migration tools.
>
> **[1:36](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=96)** Note on this graph, we're looking at the concept of speed showing that speed typically needs to increase when doing rapid migration.
>
> **[1:44](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=104)** The Y-axis depicts the number of applications migrated per month, and the X is the number of times per month.
>
> **[1:52](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=112)** Other costs may include stress on the migration team that causes turnover, lack of commitment for stakeholders due to the speed the project is moving or cold feet.
>
> **[2:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=120)** Unplanned outages due to migration planning issues such as mistakenly shutting down and on-premise system.
>
> **[2:07](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=127)** Too early, the time it takes to correct these issues drives more costs and the project becomes more risky.
>
> **[2:15](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=135)** This is much the same type of risk that you'll experience if you drive too fast for conditions.
>
> **[2:21](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=141)** The higher speed drives a higher risk.
>
> **[2:23](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=143)** Not on this graph, we're looking at the concept of costs showing that cost typically needs to increase when doing rapid migration in relation to the speed of migration.
>
> **[2:32](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=152)** The Y-axis depicts money spent per month, the X-axis is the number of months that we're tracking.
>
> **[2:40](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=160)** The cost consequence is that the faster we desire to go, the more costs go up.
>
> **[2:46](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=166)** This is due to the fact that we're doing a lot in a shorter period of time, which naturally increases costs such as consultants charging more, for rapid work that's outside of a normal work pace.
>
> **[2:57](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=177)** This means that the more we'll be spending for rapid migration, versus a migration occurring at a normal pace.
>
> **[3:05](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=185)** Note on this graph, we're looking at the concept of cost and speed showing that while not directly related, one does drive the other.
>
> **[3:12](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=192)** For example, an increase in speed tends to drive more costs.
>
> **[3:16](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=196)** The Y-axis depicts the amount of money being spent per month, and the X-axis is a series of time that we're tracking in months.
>
> **[3:26](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=206)** We need to also consider the trade-offs associated with complexity, as well as the current state of things.
>
> **[3:33](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=213)** As you can see from this graphic, as complexity goes up, meaning the more types of IT resources, both in the Cloud, or not also go up.
>
> **[3:42](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=222)** The complexity of each resource, such as a poorly designed application that leverages too many lines of code for the purpose or databases that are over engineered or having too many databases and platform types, the cost goes up significantly.
>
> **[3:56](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=236)** Indeed there is a point where the value of leveraging a public Cloud goes to zero, and then becomes almost a negative cost.
>
> **[4:04](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=244)** Thus, if you're looking to migrate a very complex as-is state of your systems in the Cloud, and then there needs to be a great deal of complexity mediation that needs to occur before you make this move.
>
> **[4:18](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=258)** This slows down the process and makes rapid migration to the cloud very difficult and or cost prohibitive.
>
> **[4:25](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=265)** However, poor as-is state are not always the case fortunately, many enterprises, either holistically or specific sub domains are well-designed and operated.
>
> **[4:33](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=273)** These will be much easier to move to the Cloud.
>
> **[4:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=277)** Realistically, you'll find that most of the existing as-is states will be somewhere in the middle of good and bad with a mix of systems that are going to be easy and difficult to move.
>
> **[4:49](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=289)** Keep in mind that the slower you go, the less costs and risk.
>
> **[4:52](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=292)** However, this may not be living up to the business need, such as responding and being responsive to a crisis.
>
> **[5:01](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-when-to-use-rapid-migration?u=76281980&t=301)** It takes careful assessment to establish the balance between rapid migration, the business need, and justifying the additional costs that are going to occur.

> [!info]- Semantic Content
>
> **Analogies:** such as (7), for example (2)
> **Definitions:** is a  (3), is an  (1), means that (1)
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** let (1), finally, (1), public (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Understanding the risks of moving to the cloud quickly
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=0)** - [Instructor] So, what are the risks of rapid migration versus something that's more slower paced?
>
> **[0:04](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=4)** Well, the risks include text selection errors, meaning picking the wrong technology, for instance, picking the wrong target cloud platform, database, or security solution, security issues, meaning unaddressed vulnerabilities that put the migrated applications at risk, governance issues, meaning no or lacking governance policies, and culture and talent, meaning that you're seeking internal pushback due to working within a culture that does not move fast or is overly structured, thus inefficient.
>
> **[0:34](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=34)** Picking technologies requires that we move from the business requirements to the selection of the technology and do so in that sequence.
>
> **[0:43](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=43)** This does a few things that reduce risks.
>
> **[0:46](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=46)** First, it allows for the coupling of technology to business requirements.
>
> **[0:52](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=52)** Second, it allows for the technology solutions to be considered as an integrated whole, meaning do they work and play well together?
>
> **[1:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=60)** Finally, this presents an opportunity to identify issues before the rapid migration occurs, so funds and resources are appropriately allocated.
>
> **[1:10](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=70)** If we get security wrong, chances are it's because we're not following the core processes for understanding our own security requirements and backing the right technology solutions and processes into the migration process.
>
> **[1:22](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=82)** For example, picking a type of encryption that is not allowed in some of the countries we're deploying to.
>
> **[1:28](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=88)** If you notice the process depicted here, we're focusing more on what's needed versus what technology may work.
>
> **[1:35](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=95)** If you work in that sequence, your risk is reduced.
>
> **[1:38](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=98)** So, do you currently have governance policies?
>
> **[1:41](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=101)** Governance means that we're looking at placing guard rails around resources, services, and applications to control and or limit access.
>
> **[1:50](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=110)** This is an important process, considering that while security will deny access, governance limits access to specific criteria policies, such as time of day or the amount of compute resources that may be leveraged.
>
> **[2:03](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=123)** The types of governance include resource governance, or the ability to place access restrictions around resources, such as storage, compute, and databases, service governance, or specific micro or regular services that may be combined as part of an application, such as services that do a credit check that may be a part of five or more applications, compliance, or the ability to limit access based on legal compliance issues, and finally, directory integration, or the ability to integrate directories between security and governance systems, allowing them to communicate one to another.
>
> **[2:36](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=156)** You also need to consider culture and talent.
>
> **[2:38](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=158)** Most cloud projects fail, rapid or not, due to talent and culture issues, not technology related issues.
>
> **[2:45](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=165)** Indeed, if the teams are not ready to move rapidly, nor do they have the skills needed, then the rapid migration project won't have a chance of success.
>
> **[2:54](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=174)** Leveraging a rapid cloud migration approach means that organizations needs to be streamlined to handle the agile processes that need to take place.
>
> **[3:01](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/understanding-the-risks-of-moving-to-the-cloud-quickly?u=76281980&t=181)** Thus, organizations that are more bureaucratic or overly structured typically fail at rapid cloud migration, or as less structured and more flat organizations that delegate responsibilities equally throughout the migration teams tend to succeed at rapid cloud migration.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for instance (1), for example (1)
> **Code Keywords:** finally, (2)
> **Definitions:** means that (1), is an  (1)
> **CLI Commands:** rails (1)
> **Speakers:** - [instructor] (1)

#### Rapid public cloud migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=0)** - [Instructor] So if we're doing our rapid migration to a single cloud, which one do we pick and why?
>
> **[0:06](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=6)** Here's what to look for in a public cloud provider.
>
> **[0:09](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=9)** The elasticity or the ability to scale up and scale back as needed, control or the ability to control systems, including provisioning de-provisioning resources, such as storage and compute, productivity, or the ability to be productive in all functions, including development, operations, and data processing agility, or the ability to change resources and services in the cloud, as we need to change them.
>
> **[0:33](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=33)** And then finally costs the ability to pay per use and minimize cost of migration and operations.
>
> **[0:39](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=39)** The larger public cloud providers are Amazon web services, Microsoft and Google, but there are others to consider as well, such as IBM and Oracle.
>
> **[0:48](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=48)** The goal is to find the right fit, not who's the most popular, make sure to consider all public cloud options.
>
> **[0:55](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=55)** A great method of selecting a cloud provider is by ranking.
>
> **[0:57](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=57)** What's important to you and the rapid migration process.
>
> **[1:01](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=61)** So we're looking at storage security, compute, and other services that are relevant to migration.
>
> **[1:06](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=66)** Furthermore, we're assigning a ranking to each criteria to not only rank the public cloud asset to its overall capabilities, but what that capability means to the rapid migration project, part of picking the right cloud is looking at the assets that are most important to rapid migration, including migration tools that support speeding migration, including building deploying in putting applications and data stores into production.
>
> **[1:30](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=90)** Platform analogs, meaning that we're looking for platforms that are like are mostly like the platforms we are migrating from.
>
> **[1:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=97)** Security and governance, meaning that it has the required governance and security solutions that we're looking for.
>
> **[1:42](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=102)** Also, we need to consider dev and ops tools, development, and operations, understanding that we have to develop and, or redevelop applications in support of rapid migration.
>
> **[1:52](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=112)** And we'll have to do some operations as well in support of the acceptance testing processes.
>
> **[1:58](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=118)** If you select a single cloud, while there is less risk of complexity, there is more risk.
>
> **[2:02](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=122)** You're picking a cloud provider that may not be the best solution.
>
> **[2:06](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=126)** Thus, if we find that out in the future, the project will need to stop and reset and doing so would lose the benefits of speed and what we need to do with rapid migration.
>
> **[2:17](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-public-cloud-migration?u=76281980&t=137)** So take time to carefully consider what cloud you're going to leverage.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), from. (1), for. (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** such as (2)
> **Env Vars:** ibm (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Rapid hybrid cloud migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=0)** - So if we're doing a rapid migration to a hybrid cloud, what is the process and why would we pick a hybrid cloud ?
>
> **[0:06](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=6)** Hybrid clouds are combinations of private and public clouds and there are variations on this including traditional systems, such as mainframes, connected to public clouds.
>
> **[0:16](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=16)** The definition has been changing from just a paired private and public cloud, to all sorts of configurations where parts of the systems exist on premise and parts exist in a public cloud.
>
> **[0:27](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=27)** Thus, be cautious as you're working with your team and vendor.
>
> **[0:31](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=31)** Make sure you define hybrid cloud in the same ways.
>
> **[0:35](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=35)** There are, of course, good aspects and bad aspects of leveraging hybrid clouds.
>
> **[0:39](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=39)** Some of the advantages include flexibility.
>
> **[0:41](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=41)** We can put applications and data on private and/or public clouds.
>
> **[0:45](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=45)** Scalability, we can leverage public clouds as an option.
>
> **[0:48](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=48)** As the number of resources are needed increase, then we can leverage this to an almost unlimited capacity.
>
> **[0:54](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=54)** Cost optimized, you can leverage either private clouds, or public clouds, based on the cost of those resources.
>
> **[1:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=60)** But there are disadvantages.
>
> **[1:02](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=62)** Cap-ex, capital expenditures, we need to purchase and maintain your own hardware and software related to your public clouds.
>
> **[1:09](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=69)** Has a tendency to be complex.
>
> **[1:10](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=70)** If you're leverage two cloud platforms, private clouds and public clouds, it's inherently a complicated process.
>
> **[1:17](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=77)** And finally, cost.
>
> **[1:18](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=78)** It costs more to operate both a private and public cloud, than a single public cloud or a single private cloud.
>
> **[1:25](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=85)** In doing rapid migration to hybrid cloud, there are some basic steps including: start, move, and operate.
>
> **[1:32](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=92)** Let's explore each.
>
> **[1:33](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=93)** Start means establishing an as is process determining the current state of things such as traditional systems and applications.
>
> **[1:42](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=102)** We map the to be, mapped to the current state, without hybrid cloud, to the future state with hybrid cloud.
>
> **[1:49](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=109)** We triage data understanding the data as is or as it exists, and we triage applications understanding the state of the applications as they are.
>
> **[1:58](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=118)** If you're moving to a private cloud, you need to apply various approaches to either replace, replatform, or refactor applications on private clouds, you need to move data, transfer the data to private cloud storage, you need to establish security, creating a comprehensive security solution for the private cloud, and then establish governance, creating an overreaching governance solution for the private cloud.
>
> **[2:21](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=141)** You're moving to a public cloud, you need to move applications using various approaches to either replace, replatform, or refactor applications on the public cloud providers.
>
> **[2:31](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=151)** You need to move the data, transfer the data to be stored on the public cloud provider, and establish security, creating a comprehensive security solution for the public cloud, and then finally establish governance.
>
> **[2:43](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=163)** Create an overarching governance solution for the public cloud provider you're leveraging.
>
> **[2:49](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-hybrid-cloud-migration?u=76281980&t=169)** When we're operating, we're able to look at things such as private cloud ops, which establish operations for private clouds, public cloud ops, which establishes operations for public clouds, BC/DR (business continuity, disaster recovery), that we need to set up to put processes in place to protect our assets on the private or public clouds, and then SecOps, or security operations, where we're running security, and then GovOps, or governance operations, where we're running the governance systems we just deployed.

> [!info]- Semantic Content
>
> **Code Keywords:** public (19), private (15), finally, (1), let (1)
> **Analogies:** such as (3)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - so (1)

#### Rapid multicloud migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=0)** - [Instructor] Multiclouds are more than one public cloud leveraged, and they could, but don't have to include, a private cloud.
>
> **[0:07](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=7)** Multiclouds are more popular now than hybrid clouds due to the choices they offer in terms of variety of cloud services for different purposes.
>
> **[0:15](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=15)** So, what are the considerations if we're doing our rapid migration to a multicloud?
>
> **[0:20](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=20)** A multicloud deployment is inherently complex to operate considering that you're dealing with cloud services in two or more public clouds.
>
> **[0:27](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=27)** Security needs to be placed over more than a single public cloud.
>
> **[0:30](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=30)** And thus, it's more costly and complex to set up.
>
> **[0:33](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=33)** Normal transactional operations in between applications and data stores are going to be more complicated and costly.
>
> **[0:39](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=39)** For example, a sales order entry system that's able to update two databases at the same time, it also has the ability to roll back updates that it did not complete.
>
> **[0:48](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=48)** So one database does not get updated, the other does not update.
>
> **[0:53](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=53)** This means that there's much more to deal with than a traditional application where a single database is coupled to the application, and there is no need for rollback operations.
>
> **[1:02](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=62)** Different clouds have different billing models and prices.
>
> **[1:06](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=66)** So when dealing with multiple clouds, accounting is more complex.
>
> **[1:11](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=71)** Ensuring that you're in compliance with governance involves tracking regulatory compliances across more than a single cloud provider.
>
> **[1:18](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=78)** For example, having to keep track of data sovereignty issues for data stored in two or more public clouds.
>
> **[1:24](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=84)** Given the additional complexity, all of these factors, more resources will be needed.
>
> **[1:29](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=89)** Resources such as money and people.
>
> **[1:32](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=92)** Despite the downsides, most enterprises are choosing multicloud over single public clouds or a single private cloud, or hybrid clouds.
>
> **[1:39](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=99)** They're doing so because of the options that multicloud provides, as well as better processes and tools that are available now.
>
> **[1:47](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=107)** Tools such as AIOps, or AI operations tools, and CMP, or cloud management platforms.
>
> **[1:54](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=114)** These come with canned processes that reflect current best practices.
>
> **[1:57](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=117)** Moving to multicloud rapidly requires that we invoke a simple process as shown here.
>
> **[2:02](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=122)** This includes a planning process, finding and defining common services, such as public clouds, dealing with complexity management, and also what skills are going to be needed to build, deploy, and operate your multicloud?
>
> **[2:17](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=137)** Finding and defining common services means that we're able to pick common systems such as security and governance and operations that span more than a single cloud.
>
> **[2:24](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=144)** Thus, they are common to more than one cloud.
>
> **[2:28](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=148)** Final steps of migrating and operating are critical.
>
> **[2:31](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=151)** This includes the migration process, which involves figuring out which clouds your applications, data, and other assets will reside, and establishing how they will be operated for the longer term.
>
> **[2:42](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-multicloud-migration?u=76281980&t=162)** This typically results in a plan that defines how applications and data datasets will be kept running longer term.

> [!info]- Semantic Content
>
> **Code Keywords:** public (6), private (2), include, (1)
> **Analogies:** such as (4), for example (2)
> **Env Vars:** cmp (1)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Selecting the Workloads

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Good candidates for rapid migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=0)** - [Instructor] It's as important to pick applications that will move to the cloud rapidly as it is to identify applications that should not move.
>
> **[0:08](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=8)** The discovery process should not be taken lightly because moving wrong applications for the wrong reasons will hinder your chances for success or cause outright failure.
>
> **[0:18](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=18)** For example, moving a mainframe application that requires almost a complete rewrite to run on native cloud platforms.
>
> **[0:25](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=25)** This will take too much time and drive too much risks.
>
> **[0:28](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=28)** During this first stage, we essentially need to create a gate and this gate is needed to select applications that are likely to move easily.
>
> **[0:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=37)** And we'll work up to expectations when moved.
>
> **[0:41](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=41)** Limit risk by opting not to move applications that are higher risk to move such as applications that require a higher tier of security or overly complex, filter out applications that are too slow to move such as applications that require a great deal of redevelopment.
>
> **[0:56](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=56)** Ultimately, these applications should be left out.
>
> **[0:58](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=58)** Keep in mind.
>
> **[0:59](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=59)** The objective is speed while there are no hardened fast lists of what denotes an application that will move to a public cloud with the least amount of risk and complexity.
>
> **[1:10](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=70)** There are some consistent factors to consider.
>
> **[1:12](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=72)** These include applications that have been created recently or applications built in the last 20 years generally were built using more modern development platforms and languages.
>
> **[1:22](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=82)** These will likely have the same or similar services in the public cloud.
>
> **[1:27](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=87)** Decouple data, the application is not dependent on the data.
>
> **[1:30](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=90)** For example, this means that the application and the data can live on different platforms and still work together without significant modification, low to average security requirements, we'll be able to rapidly find similar or the same security solutions in the cloud.
>
> **[1:45](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=105)** This reduces the risk exposure for a potential breach.
>
> **[1:49](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=109)** Well-documented code, it's easy to figure out the applications and thus easier to make any modifications to allow it to work on the target cloud.
>
> **[1:58](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=118)** Cloud platform analog, we're able to find an exact match to the platform from the source server example, running Linux on premises as a direct match to the same Linux OS on a cloud server.
>
> **[2:11](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=131)** Average to medium complexity there are fewer components such as storage, compute and databases.
>
> **[2:16](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/good-candidates-for-rapid-migration?u=76281980&t=136)** So migration will be less complex and thus faster.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (2)
> **Code Keywords:** require (2), public (2)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** in the last (1)
> **Definitions:** means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Bad candidates for rapid migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=0)** - Applications that should not move to the Cloud are not as easy to spot as a good ones.
>
> **[0:05](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=5)** While you would think it's just a matter of picking the opposite of the good characteristics, it's often not that easy.
>
> **[0:10](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=10)** However, some of the attributes that would eliminate applications from participating in a rapid migration project would include applications that are two old or applications that have been built over 20 years ago.
>
> **[0:22](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=22)** That leveraged languages and development platforms not easily found in the Cloud.
>
> **[0:27](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=27)** Coupled data, the application is dependent on the data.
>
> **[0:30](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=30)** For example, the application needs to have the database running in order for it to work.
>
> **[0:35](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=35)** High security requirements.
>
> **[0:36](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=36)** If an application has high security requirements, it's a much higher security risk to move and thus it's not wise to move it and its data rapidly.
>
> **[0:46](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=46)** Mistakes could cost the company millions in lost revenue and PR issues.
>
> **[0:50](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=50)** Undocumented code.
>
> **[0:51](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=51)** If the code is difficult to navigate the likelihood that a mistake could be made, if the code needs to be altered is going to be much higher.
>
> **[0:59](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=59)** No Cloud platform analog, meaning that we can't find a matching platform in the Cloud.
>
> **[1:03](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=63)** For instance, most Clouds don't support mainframe operating systems, things that are typically a problem here include older databases, older development platforms, on off systems and most things that have not reached level in the market where the Cloud providers are looking to provide a matching service.
>
> **[1:20](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=80)** High complexity.
>
> **[1:21](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=81)** The complexity of the application is too high.
>
> **[1:23](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=83)** It'll bring too much risk to the migration effort.
>
> **[1:27](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=87)** Use these attributes to help filter and remove applications out of the mix of workloads to migrate rapidly.
>
> **[1:33](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=93)** You may only have one set of filters or you may apply many of these filters to remove applications that are not good candidates for rapid migration.
>
> **[1:40](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/bad-candidates-for-rapid-migration?u=76281980&t=100)** Then you will be able to turn your attention and to focus on the applications that can be successfully rapidly migrating.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), for instance (1)
> **CLI Commands:** find (1)
> **Speakers:** - applications (1)

#### Leveraging workload categories for rapid migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=0)** - [Instructor] The 6 Rs are application categories to determine how they're migrated include Replace, Refactor, Replatform, Rehost, Retain, and Retire.
>
> **[0:10](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=10)** These are the way the cloud industry categorizes applications and datasets to be migrated.
>
> **[0:15](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=15)** It's the most common way that cloud migration teams are able to categorize different workloads as ones that will likely migrate to the cloud, be left behind, or be removed altogether.
>
> **[0:26](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=26)** It's helpful to use the 6 R models in conjunction with the list of attributes mentioned in the previous video as to how to pick and/or eliminate applications for rapid migration specifically.
>
> **[0:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=37)** While the use of 6 Rs can be applied to non-rapid migration projects, its use here is especially helpful because they allow you to make sense of your application workloads and determine which ones that can be migrated quickly.
>
> **[0:51](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=51)** The 6 Rs aid in establishing categories as a whole so we're not leaving out analysis of other core attributes.
>
> **[0:59](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=59)** When replacing an application, we have to replace them with something.
>
> **[1:04](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=64)** In most instances, it's going to be a SaaS cloud, or a software as a service cloud.
>
> **[1:08](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=68)** For example, replacing a custom-built CRM system, customer relationship management system, running on a legacy platform with [salesforce.com](https://salesforce.com), a software as a service system.
>
> **[1:19](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=79)** This can be done rapidly and with lower risk and costs.
>
> **[1:24](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=84)** In some instances, we may build cloud-native applications with similar or improved characteristics and features.
>
> **[1:31](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=91)** However, considering that this is about rapid migration, that's typically not something attempted when speed is a requirement.
>
> **[1:38](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=98)** Refactor refers to targeted changes to the application to allow the application to exist on the target cloud in a much more efficient and optimized way.
>
> **[1:48](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=108)** This means code changes, and thus adds time and cost, making it non-ideal for rapid migration.
>
> **[1:54](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=114)** Replatform refers to moving to more cloud-aligned technology and platform services, typically without major application and data changes.
>
> **[2:03](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=123)** This is a good tool for rapid migration considering that it's fast, and for most applications, will work without any or a small amount of application modifications.
>
> **[2:12](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=132)** This also means we're integrating the application with cloud operations and monitoring in some cases.
>
> **[2:17](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=137)** Rehost means that we're picking applications that we can rapidly lift and shift.
>
> **[2:21](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=141)** This means that we're moving applications to and from the same platform, one on premises and one in the cloud.
>
> **[2:28](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=148)** This is where you can also leverage virtualization technology on a target cloud platform to minimize or eliminate the amount of changes that need to occur to the application.
>
> **[2:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=157)** This is ideal for rapid application migration.
>
> **[2:40](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=160)** Retain simply means that we're leaving the application as-is and we're not going to move it to the cloud.
>
> **[2:47](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=167)** This is likely due to it not meeting one or more of the criteria set previously.
>
> **[2:51](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=171)** For example, it's too complex or the data is too tightly coupled.
>
> **[2:56](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=176)** Retire means the end of life for the application.
>
> **[2:58](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-workload-categories-for-rapid-migration?u=76281980&t=178)** This typically means that the application is not providing the value it once did and can easily be eliminated without a great deal of cost or risk.

> [!info]- Semantic Content
>
> **Definitions:** means that (3), is a  (2), refers to (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **URLs:** [salesforce.com](https://salesforce.com) (1)
> **Env Vars:** crm (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### 3. Picking the Target Platform for Rapid Migration

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Leveraging public clouds in a rapid migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=0)** - [Instructor] In this video, we'll cover the basics of public clouds, including when to leverage them, how to leverage them, and what benefits and risks they may bring when focusing on rapid cloud migration.
>
> **[0:10](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=10)** Public clouds are typically chosen for rapid migrations because they are quick to provision, almost infinitely scalable, and they have pretty much everything you need as a host for your migrated applications.
>
> **[0:22](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=22)** Here are some of the specifics about why public clouds are successful candidates for rapid migration.
>
> **[0:28](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=28)** Let's talk about elasticity and scalability.
>
> **[0:30](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=30)** This means you can scale up to any level of processing or storage at a moment's notice.
>
> **[0:36](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=36)** And conversely, you can dial back the need for compute and storage once they're not needed.
>
> **[0:41](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=41)** With public cloud computing systems, you only pay for the resources you use.
>
> **[0:46](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=46)** So you expand your costs as you expand your resources that you're leveraging.
>
> **[0:50](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=50)** Also reduce your costs as you dispan those resources.
>
> **[0:54](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=54)** You're able to control the use of public cloud based resources at a coarse and fine grain level.
>
> **[1:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=60)** For example, the ability to leverage storied systems and control how it expands and contracts to meet the needs of your application.
>
> **[1:08](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=68)** Control also means that we're able to allocate and de-allocate resources as we need them.
>
> **[1:13](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=73)** So we can configure our public cloud experience to any number of resources that are required, leveraging no resources when not required.
>
> **[1:21](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=81)** This leads to better optimization for better efficiency of costs.
>
> **[1:25](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=85)** Productivity, meaning that public cloud is able to do many things rapidly.
>
> **[1:30](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=90)** In the context of rapid migration, this is a critical feature considering that we're trying to get applications into production as quickly as possible and have them perform as good or better than they did when they were on premises.
>
> **[1:43](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=103)** Agility means that it's easy to make changes as we need them such as allocating additional storage or compute, or provisioning a new technology such as the database that may be needed.
>
> **[1:54](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=114)** The core idea is that agility is created considering that public clouds can be altered using configuration.
>
> **[2:02](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=122)** You have access to a dashboard that allows you the ability to add resources, remove resources, and change resources as needed at a moment's notice.
>
> **[2:11](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=131)** There are no need to purchase hardware and software and avoiding those waves of procurement cycles and installing things in your own data center, means that you're liberated from having to deal with these resources directly.
>
> **[2:22](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=142)** This agility is typically what makes public cloud computing so valuable, and it enables you to move quickly into the cloud using rapid migration.
>
> **[2:31](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=151)** Finally, let's consider the notion of costs.
>
> **[2:33](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=153)** In the world of public cloud computing, we only pay for the resources we leverage when we leverage them, thus cost just as we leverage cloud computing resources are elastic.
>
> **[2:44](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=164)** However, since costs are variable, they need to be tracked.
>
> **[2:47](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=167)** So during the migration and after the applications are put into production, we need to figure out how much things are costing us and where the money is going.
>
> **[2:56](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=176)** It's not unusual for people to move into the cloud, and receive large cloud computing bills that they don't expect.
>
> **[3:02](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=182)** This is largely because they weren't paying attention to how the cloud computing provider bills them and what they are paying for, and who's using the resources.
>
> **[3:11](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-public-clouds-in-a-rapid-migration?u=76281980&t=191)** In many instances, we need to set up third-party accounting systems to monitor and control the cost of leveraging public clouds.

> [!info]- Semantic Content
>
> **Code Keywords:** public (11), let (2), finally, (1), for, (1)
> **Definitions:** means that (3), is a  (1)
> **Analogies:** such as (2), for example (1)
> **Prerequisites:** configure (1), set up (1)
> **CLI Commands:** make (1)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)

#### Leveraging hybrid clouds in a rapid migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-hybrid-clouds-in-a-rapid-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-hybrid-clouds-in-a-rapid-migration?u=76281980&t=0)** - [Instructor] Hybrid clouds are traditionally defined as paired private clouds and public clouds.
>
> **[0:05](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-hybrid-clouds-in-a-rapid-migration?u=76281980&t=5)** However, over the years, it's been defined in different ways to also include traditional systems that are paired with public clouds as well.
>
> **[0:12](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-hybrid-clouds-in-a-rapid-migration?u=76281980&t=12)** For our purposes, we'll call those pragmatic hybrid clouds.
>
> **[0:16](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-hybrid-clouds-in-a-rapid-migration?u=76281980&t=16)** Hybrid clouds are typically leveraged to provide a choice between on-premise resources, a private cloud or a traditional system, and public cloud resources.
>
> **[0:26](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-hybrid-clouds-in-a-rapid-migration?u=76281980&t=26)** In the early days of cloud computing, it was considered desirable because in many instances corporations and governments weren't willing to move most of their applications in data to a public cloud and they wanted the choice.
>
> **[0:39](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-hybrid-clouds-in-a-rapid-migration?u=76281980&t=39)** Today, hybrid clouds are more about pragmatic hybrid clouds or mixing traditional systems that exist on premises with that and public cloud resources.
>
> **[0:48](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-hybrid-clouds-in-a-rapid-migration?u=76281980&t=48)** The idea being that certain number of applications can't move to the public cloud, will remain on premise but they should be integrated with applications that were moving to the public cloud.
>
> **[1:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-hybrid-clouds-in-a-rapid-migration?u=76281980&t=60)** In the context of rapid migration, hybrid clouds are going to be a desirable target because of their ability to support applications that may not be able to move to the cloud right now, as well as applications that will be able to move to the public cloud.
>
> **[1:15](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-hybrid-clouds-in-a-rapid-migration?u=76281980&t=75)** This provides those migrating the applications with a choice and also a platform to deal with applications that, for whatever reason, can't move.
>
> **[1:25](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-hybrid-clouds-in-a-rapid-migration?u=76281980&t=85)** As we established in the prior video, there may be several applications that will not be good candidates for rapid migration.
>
> **[1:32](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-hybrid-clouds-in-a-rapid-migration?u=76281980&t=92)** However, those applications in datasets still need to work and play with existing traditional applications that may remain on premise.
>
> **[1:40](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-hybrid-clouds-in-a-rapid-migration?u=76281980&t=100)** The hybrid cloud model is a good option to support that requirement.

> [!info]- Semantic Content
>
> **Code Keywords:** public (8), private (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Leveraging multicloud in a rapid migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-multicloud-in-a-rapid-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-multicloud-in-a-rapid-migration?u=76281980&t=0)** - [Instructor] Multiclouds can be defined as two or more major cloud brands, sometimes combined with private clouds, and also traditional systems such as on-premise systems.
>
> **[0:10](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-multicloud-in-a-rapid-migration?u=76281980&t=10)** The core idea is to provide platform choices for those leveraging clouds, as well as migrating to clouds.
>
> **[0:16](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-multicloud-in-a-rapid-migration?u=76281980&t=16)** For example, we have a choice of different development platforms, database systems, storage systems, compute platforms, from all major cloud brands that are combined to create a multicloud.
>
> **[0:28](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-multicloud-in-a-rapid-migration?u=76281980&t=28)** So the core advantage is choice, however, it comes at a cost.
>
> **[0:33](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-multicloud-in-a-rapid-migration?u=76281980&t=33)** All the clouds are more costly to set up because of the complexity they bring and different types of skills required to make them work.
>
> **[0:41](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-multicloud-in-a-rapid-migration?u=76281980&t=41)** So the core question to ask is, is the use of multicloud justified for a rapid migration project, given the fact it does add complexity and cost and perhaps will slow things down?
>
> **[0:53](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-multicloud-in-a-rapid-migration?u=76281980&t=53)** If the answer is yes, even despite the drawbacks of leveraging multicloud, then move forward.
>
> **[0:59](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-multicloud-in-a-rapid-migration?u=76281980&t=59)** A couple of challenges you'll face in the context of rapid migration are additional complexity and costs of multicloud because the fewer platforms you're moving to, the quicker and easier it is to make the move.
>
> **[1:11](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-multicloud-in-a-rapid-migration?u=76281980&t=71)** Security is more difficult with multicloud deployment.
>
> **[1:14](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-multicloud-in-a-rapid-migration?u=76281980&t=74)** This is due to the fact we're needing to secure more than one public cloud, and thus we'll need to define a security system that's able to support all public clouds, if you can find one.
>
> **[1:25](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-multicloud-in-a-rapid-migration?u=76281980&t=85)** Governance, which is also difficult, as well, for the same reason security is more difficult, as defined previously.
>
> **[1:33](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-multicloud-in-a-rapid-migration?u=76281980&t=93)** Management and monitoring and other operations are also more costly, considering that we need to find tools that are able to span all clouds, all while have to leveraging native tool on each cloud, which means we're dealing with more complexity and more types of talent required.
>
> **[1:48](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-multicloud-in-a-rapid-migration?u=76281980&t=108)** However, the advantages of having a choice of different cloud services to support the needs of the applications in the business can be too compelling to pass up.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2)
> **Code Keywords:** public (2), private (1), pass (1)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** set up (1), required to (1)
> **Speakers:** - [instructor] (1)

#### Leveraging nontraditional clouds in a rapid migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-nontraditional-clouds-in-a-rapid-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-nontraditional-clouds-in-a-rapid-migration?u=76281980&t=0)** - [Instructor] Nontraditional clouds may not be clouds at all.
>
> **[0:03](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-nontraditional-clouds-in-a-rapid-migration?u=76281980&t=3)** May be things such as a managed service provider, or MSP, or a colocation provider, sometimes called a COLO.
>
> **[0:11](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-nontraditional-clouds-in-a-rapid-migration?u=76281980&t=11)** The idea is that sometimes public clouds, hybrid clouds, or multi-cloud deployments are not the right destination for applications that are being rapidly migrated.
>
> **[0:21](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-nontraditional-clouds-in-a-rapid-migration?u=76281980&t=21)** In many instances, applications don't migrate quickly to a public cloud provider, and it's much easier to leverage platform analogs that may be offered by managed service providers.
>
> **[0:32](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-nontraditional-clouds-in-a-rapid-migration?u=76281980&t=32)** The growth of managed service providers over the years has been great.
>
> **[0:36](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-nontraditional-clouds-in-a-rapid-migration?u=76281980&t=36)** This considering the people who are looking to rapidly migrate out of their existing data centers, either around business need or some external force, such as a pandemic.
>
> **[0:46](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-nontraditional-clouds-in-a-rapid-migration?u=76281980&t=46)** This is not to say that nontraditional clouds are always a part of each rapid migration problem.
>
> **[0:52](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-nontraditional-clouds-in-a-rapid-migration?u=76281980&t=52)** They are typically only going to be a fit for a few.
>
> **[0:56](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/leveraging-nontraditional-clouds-in-a-rapid-migration?u=76281980&t=56)** But this is to say that these nontraditional cloud platforms should be understood by those doing rapid migration, because it may indeed be the path of least resistance, faster to migrate, and will define success for you.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2)
> **Env Vars:** msp (1), colo (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### 4. Cloud-Based Tools for Rapid Migration

> [[#Table of Contents|↑ Back to Table of Contents]]

#### AWS migration tools
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=0)** - [Instructor] Okay, let's look at the migration tools for Amazon web services or AWS.
>
> **[0:05](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=5)** Now notice here these are the recent visited services.
>
> **[0:08](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=8)** So for my account here these are the ones that I looked at or demoed for the courses.
>
> **[0:13](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=13)** So these aren't typically going to be there when you log in your console.
>
> **[0:16](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=16)** Also keep in mind that you have to pay for this service and so while there are free tiers you may find that your bill cranks up pretty quickly.
>
> **[0:25](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=25)** So keep an eye on that and make sure that you're not over spending in using the Amazon web services cloud service.
>
> **[0:34](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=34)** So anyway, a couple of things here, you can come up here to search and type in migration.
>
> **[0:42](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=42)** And basically the same service comes up.
>
> **[0:44](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=44)** And this is migration hub, which we saw in the console, something I used before and here's database migration services, server migration services, Amazon application migration services.
>
> **[0:55](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=55)** Let's go to migration hub, and this accelerates the migration of your data centers to AWS.
>
> **[1:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=60)** So this would be right in line with rapid cloud migration.
>
> **[1:05](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=65)** Now, here we have a few core services.
>
> **[1:07](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=67)** We have discovery, we're able to import data, deploy Amazon web services discovery tools, group services and applications.
>
> **[1:15](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=75)** The idea here is we can go out and look at an existing as is state where your data is, where your applications are, what platforms there are and figure out what's there.
>
> **[1:24](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=84)** And really kind of assess the, as is state, as to where you need to go.
>
> **[1:27](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=87)** We can then assess the needs of things found in discovery in the sizing of the system or get EC2 which are compute instances recommendations.
>
> **[1:39](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=99)** So we can discover what's there.
>
> **[1:42](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=102)** We can assess what we have and Amazon will actually tell you how many compute instances and storage instances and database instances you need via the system.
>
> **[1:52](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=112)** EC2 to stands for elastic computing two, and then we can migrate.
>
> **[1:58](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=118)** We can connect to the migration tools.
>
> **[2:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=120)** We can migrate using connected tools.
>
> **[2:03](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=123)** We can track the status of migrations.
>
> **[2:05](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=125)** And here we can view an example, and this is what the migration hub dashboard example looks like.
>
> **[2:11](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=131)** And as you can see, we have a sales tracking apps, inventory applications.
>
> **[2:15](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=135)** Those are applications that are user created.
>
> **[2:18](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=138)** Those aren't a existing services on AWS.
>
> **[2:20](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=140)** And we can look at the application migration in progress, not started in progress completed.
>
> **[2:29](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=149)** And we can look at the number of servers migrated, applications migrated, agents migrated, connectors migrated.
>
> **[2:35](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=155)** So it's pretty handy.
>
> **[2:36](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=156)** And notice you have other migration tools that may be integrated in here such as data migration services, server migration services out of data, which is a scanning tool CloudEndure, which provides live migration scanning tool for data and applications.
>
> **[2:51](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=171)** And then they have migration programs like professional services, things that you can use, migration accelerator programs, and get you in touch with the consultants or they can allow you to do it fairly DIY, do it yourself.
>
> **[3:04](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=184)** Here's migrated applications over time.
>
> **[3:07](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=187)** It's over a three month period of time and a pretty handy bits of information.
>
> **[3:13](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=193)** People who want status of current rapid migration projects.
>
> **[3:16](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=196)** And obviously it's moving fast and this is probably a way to do it versus trying to create these yourself.
>
> **[3:24](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=204)** So, what would you like to do?
>
> **[3:26](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=206)** We can get started with discovery since we can't point at a data center and go ahead and take a look at what's there.
>
> **[3:32](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=212)** And we could import data using AWS discovery tools.
>
> **[3:35](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=215)** You discovered servers, group servers as applications, connect migration tools, and migration hub migrant using connection migration tools.
>
> **[3:42](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=222)** And we can track the status of migration.
>
> **[3:44](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=224)** Let's go ahead and see what discovery tools are here.
>
> **[3:47](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=227)** And this is their new stuff.
>
> **[3:49](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=229)** They're testing this as a new program.
>
> **[3:51](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=231)** So they're giving a few warnings.
>
> **[3:53](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=233)** It's early stuff.
>
> **[3:54](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=234)** Let's say, don't show this message again.
>
> **[3:58](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=238)** And we have the discovery tools here.
>
> **[4:02](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=242)** We have the import upload data in services and applications, discovery connector, discovery agent.
>
> **[4:08](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=248)** Let's look at the data import and we can choose a home region.
>
> **[4:15](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=255)** So we successfully set up the home region on, which is going to be in Northern Virginia.
>
> **[4:20](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=260)** And we have successfully set up the home region in migration hub within learn more about what's there, but this basically is your target.
>
> **[4:27](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=267)** And so in other words need to set up your source.
>
> **[4:29](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=269)** Typically, that's going to be a data center on premises and the ability to get to a target or a region or a cloud region.
>
> **[4:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=277)** You go ahead and set up and that's what we just did.
>
> **[4:39](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=279)** And I'll go ahead and hit import, even though we don't have data import and has import name as AWS S3 object URL.
>
> **[4:51](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=291)** And the idea here is we go directly from a database server or a storage system, or something is going to be a data source into a target system.
>
> **[5:01](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=301)** That's going to exist on Amazon web services in this case, S3, which is our object storage system.
>
> **[5:06](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=306)** And so if I had a valid import name, I could create a new S3 object bucket and go ahead and start importing data.
>
> **[5:16](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=316)** So that easy.
>
> **[5:17](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=317)** Anyway, what to remember about the AWS system is that it does provide a way to do rapid migration.
>
> **[5:24](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=324)** It may or may not be right for you, but certainly it's worth the look considering the fact that it's going to be your fastest path to getting to migration tools that are going to be on demand.
>
> **[5:34](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=334)** And so, in other words you don't have to create this yourself.
>
> **[5:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=337)** AWS has done so for you, they can assist you in moving information and moving applications, you know, in between on-premise storage systems and compute servers into compute servers and storage systems and databases that exist on the AWS cloud computing platform.
>
> **[5:51](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/aws-migration-tools?u=76281980&t=351)** Anyway, this is just to look at this particular public cloud in AWS, and the tools that they have.

> [!info]- Semantic Content
>
> **Env Vars:** aws (9), ec2 (2), diy (1), url (1)
> **CLI Commands:** aws (9), find (1), make (1)
> **Code Keywords:** let (5), import, (1), case, (1), public (1)
> **Definitions:** in other words (2), stands for (1), is a  (1)
> **Prerequisites:** set up (4)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)

#### Microsoft Azure migration tools
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=0)** - [Instructor] Okay, let's look at the migration services within Microsoft Azure.
>
> **[0:04](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=4)** And again, very much like AWS, you can see the Azure services listed here, IOT Hub, things like that.
>
> **[0:12](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=12)** These are services that we just recently accessed, by the way.
>
> **[0:15](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=15)** And you also have another search service, very much like we saw with AWS and the other cloud providers basically look very similar, where we can find specific services by doing a search.
>
> **[0:24](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=24)** And so this time, we'll look for migrate, and here's the current migration systems within Microsoft Azure.
>
> **[0:32](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=32)** Azure Migrate, LiveData Migrators, Azure Database Migration Projects, Azure Data Migration Services.
>
> **[0:38](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=38)** So as you can see, if you look at the AWS demo that was done in the other video in this one, they have very similar capabilities, and you can see so probably more when we go to Azure Migrate, and migrate your on-premise data center to Azure.
>
> **[0:53](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=53)** We can discover systems, we can access on-premise systems, figure out what they are, do a triage on the applications and then move them automatically to the Microsoft public cloud.
>
> **[1:05](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=65)** And so let's look at each one of these things.
>
> **[1:08](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=68)** Discover, access and migrate.
>
> **[1:10](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=70)** And here we can create a project.
>
> **[1:13](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=73)** Obviously, we don't have a data center to reach into to migrate from, but you can see how this works.
>
> **[1:18](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=78)** So your subscription, project details, we can enter our project name, call it demo, enter the geographically.
>
> **[1:28](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=88)** It's already taken.
>
> **[1:29](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=89)** So let's do... Also already taken.
>
> **[1:36](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=96)** I can't do underscores.
>
> **[1:40](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=100)** You're going to find the semantics are a pretty well enforced here.
>
> **[1:43](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=103)** Geographic, Asia Pacific, not there.
>
> **[1:46](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=106)** We're going to say United States, and we can pick a resource group.
>
> **[1:55](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=115)** Do demo and let's go ahead and create a project, see how it goes.
>
> **[2:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=120)** And deployment succeeded.
>
> **[2:02](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=122)** And we can go to the resource group directly or pin this to the dashboard.
>
> **[2:08](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=128)** And this allows us to do, as you see, an assessment tool, quick start, discovery, your on-premise machines using an appliance or importing a CSV format.
>
> **[2:19](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=139)** Discovery to get started.
>
> **[2:21](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=141)** Analyze the dependencies within those applications in the data and assess or discover which servers are analogs that we're going to be able to migrate to.
>
> **[2:29](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=149)** So keep in mind, discovery system is very much the same across different public clouds, is you have to put some sort of an agent on premise.
>
> **[2:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=157)** In this case, they're looking for some appliance they're going to send you, which is going to do the scanning and assessment so we can figure out what's there before we make the move to the Azure public cloud.
>
> **[2:48](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=168)** Some migration tools, able to discovery, able to replicate.
>
> **[2:52](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=172)** Once your on-premise machines are discovered, click replicate to start replicating the discovered machines.
>
> **[2:59](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=179)** What we're doing here is, again, we found out where the machines are and IP addresses and all that and network locations and what's there from a platform perspective.
>
> **[3:08](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=188)** And once that happens, we're able to replicate those processes, those applications, those data sets to the public cloud.
>
> **[3:15](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=195)** Once your machines have been replicated, click migrate to migrate your machines.
>
> **[3:19](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=199)** Let's just click on some more migration tools.
>
> **[3:22](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=202)** So these are tools that'll help you.
>
> **[3:24](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=204)** These are third-party tools not owned by Microsoft that can help you do migration.
>
> **[3:28](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=208)** You have Carbonite Migrate.
>
> **[3:30](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=210)** You have RackWare Cloud Migrations, Zerto Cloud Migration, SurPaaS Cloud Migration.
>
> **[3:36](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=216)** What's important here is that you understand the native tools that the particular public cloud provider provides, in this case, Azure, and then picking the right tool, in some case, third-party tools or cloud-native tools, that should be selected to go ahead and make your move in the best way.
>
> **[3:52](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=232)** So if we're doing a rapid migration, the advice here is stick with the easiest and quickest to deploy tools.
>
> **[3:59](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=239)** And that's typically going to be the cloud-native tools that are branded by the particular cloud provider, in this case, Microsoft.
>
> **[4:04](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=244)** However, if some of those tools don't work or they're not aligned specifically to what your needs are, look at the marketplace and you'll find hundreds of tools out there that will assist you in replicating data, doing the migration, application triage; you know, all the things that are associated with migration.
>
> **[4:21](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=261)** So keep in mind though, we're trying to do this in a fast way, and therefore we're going to make quick decisions around the tools and technologies that we're going to leverage.
>
> **[4:31](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=271)** So you would look at the different migrations in there.
>
> **[4:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=277)** Look at the different tools.
>
> **[4:38](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=278)** For example, if we're dealing with Windows, Linux and SQL Server, you know, those (mumbles) we're migrating were SQL Server only.
>
> **[4:44](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=284)** In other words, migrating from an existing, (mumbles) Microsoft (mumbles) to ones that exists in the cloud.
>
> **[4:50](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=290)** Web Apps, Data Box, different systems that are there.
>
> **[4:53](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=293)** We can figure out discovered items, we can figure out the properties of those items.
>
> **[4:57](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=297)** All these things really to provide you with most of what you need to migrate, say, 60 to 70% of your existing applications and data sets into the cloud by providing tools or leveraging tools that are provided by the native-cloud provider.
>
> **[5:10](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=310)** In this case, Microsoft.
>
> **[5:12](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=312)** So, urge you to check these out if you're going to do a rapid-cloud migration.
>
> **[5:15](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=315)** We're again, trying to pick the best tools, the quickest tools to make that migration occur and time is going to be of the essence, but we're also going to have to pick the appropriate tools to make sure we're doing it properly as we start migrating to various systems.
>
> **[5:30](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=330)** Good news here is that many of these tools are on demand.
>
> **[5:32](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=332)** You should be able to leverage them as needed and they should assist you in doing your rapid-cloud migration.
>
> **[5:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/microsoft-azure-migration-tools?u=76281980&t=337)** So give them a try.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), public (5), case, (5), from, (1), try. (1)
> **CLI Commands:** make (5), aws (3), find (3)
> **Env Vars:** aws (3), sql (2), iot (1), csv (1)
> **UI Navigation:** go to (2), click on (1)
> **Warnings:** keep in mind (2)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 5. Setting Up a Rapid Migration Factory

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Rapid workload triage
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=0)** - [Instructor] In this video, we'll cover how to set up a process that allows you to pick workloads to rapidly migrate to the cloud.
>
> **[0:06](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=6)** And we'll explore a process that you can leverage during your first migration project.
>
> **[0:12](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=12)** Keep in mind, we're assessing the current state against standards and reference architectures.
>
> **[0:16](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=16)** We're quantifying the benefits and creating a roadmap of step-by-step processes that it will take to move to the cloud.
>
> **[0:24](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=24)** To create an accurate roadmap, we need to identify key requirements, concerns, controls, and constraints for our cloud migration plan.
>
> **[0:32](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=32)** We'll be returning to the six Rs: rehost, replatform, refactor, retain, retire, and replace.
>
> **[0:40](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=40)** And we'll be attempting to put each application workload into one of these buckets.
>
> **[0:45](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=45)** Since our goal is rapid migration, the idea is to pick the applications that are likely to move the fastest, and with the least amount of risk and cost.
>
> **[0:54](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=54)** Thus, we'll want to consider the following: rehost and replatform are going to be the fastest to move.
>
> **[1:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=60)** Thus, these typically take priority.
>
> **[1:02](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=62)** Refactoring, typically, not an option for rapid migration, considering that it means rewriting, testing, and deploying the applications which adds risk and time.
>
> **[1:13](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=73)** However, this is sometimes unavoidable.
>
> **[1:16](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=76)** Retain meaning that we're keeping the application where it is and not moving it, it remains in operation.
>
> **[1:22](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=82)** Retire and replace are also useful for rapid migrations, since they take applications out of play and thus, don't need to move.
>
> **[1:29](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-workload-triage?u=76281980&t=89)** Or they are replaced, typically by a software as a service system version of a traditional application.

> [!info]- Semantic Content
>
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Rapid migration tools
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-tools?u=76281980&t=0)** - [Instructor] In this video, we'll look at best practices for selecting the right tools for rapid migration into the Cloud, including assessment development, migration, deployment, and selection of the right tools to make rapid migration occur well rapidly.
>
> **[0:14](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-tools?u=76281980&t=14)** These are any migration tools such as code scanners, data scanners, and porting tools that provide you with the ability to move applications quickly and minimize rework.
>
> **[0:23](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-tools?u=76281980&t=23)** The tool should have the following attributes and be able to provide repeatable and consistent value.
>
> **[0:29](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-tools?u=76281980&t=29)** The tool should provide quality assurance, including automated testing, deployment and bug reporting and resolution, the ability to leverage automation or the ability to remove humans from doing all of the migration work.
>
> **[0:41](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-tools?u=76281980&t=41)** And finally, the ability to work at both data and process levels.
>
> **[0:45](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-tools?u=76281980&t=45)** The biggest challenge here is a number of tools to choose from.
>
> **[0:49](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-tools?u=76281980&t=49)** Indeed, depending on what you're migrating in terms of programming languages and data, the number of tools can be considered daunting.
>
> **[0:57](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-tools?u=76281980&t=57)** A few words of advice on how to pare down the list of options and make selections that work effectively for your migration are to look at best practices and tooling of others doing rapid migration.
>
> **[1:07](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-tools?u=76281980&t=67)** This will provide a shorter list of tools that are most likely to solve your problem.
>
> **[1:12](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-tools?u=76281980&t=72)** Adopt a rapid tool validation process, such as the ones defined by the analysis organization, saucing tools out that are not making the cut quickly.
>
> **[1:21](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-tools?u=76281980&t=81)** Keep in mind, the term rapid is key.
>
> **[1:23](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-tools?u=76281980&t=83)** All tools need to support speed.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** finally, (1), from. (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Rapid migration and DevOps
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-and-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-and-devops?u=76281980&t=0)** - [Instructor] In this video, we'll explore the considerations of DevOps as part of your rapid cloud migration.
>
> **[0:06](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-and-devops?u=76281980&t=6)** This is essential for building and development process and tool chain that allows for success of the cloud in your enterprise.
>
> **[0:13](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-and-devops?u=76281980&t=13)** DevOps, or development and operation, and when you add security, the mix sometimes is called DevSecOps.
>
> **[0:19](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-and-devops?u=76281980&t=19)** For the purposes of this course, we'll be using DevSecOps and DevOps interchangeably, and when these two terms, DevOps and security goals, are combined, it creates ultimately things such as a cultural shift that encourages communication and collaboration between developers and operations.
>
> **[0:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-and-devops?u=76281980&t=37)** This allows you to build better quality software more quickly with better reliability, a crucial component of continuous delivery, bringing Agile to infrastructure, or it's the automation of Agile as a method, a change from reviews, approval, and handoffs to collaboration, automation, and feedback loops, provide better quality by automating many of the core processes such as development, testing, and deployment.
>
> **[1:02](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-and-devops?u=76281980&t=62)** In terms of rapid migration in DevSecOps and DevOps, a core question is do we set up DevSecOps before, during, or after the migration if it currently doesn't exist?
>
> **[1:15](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-and-devops?u=76281980&t=75)** The reality is that for rapid migration, you sometimes need to go slower before you can go faster, and DevOps deployment is certainly an example of that.
>
> **[1:24](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-and-devops?u=76281980&t=84)** This is important because we're working to set up a process and tool chain that will cost money and take time, but it will also automate and speed the migration to the cloud, and we're removing many of the stops in migration and leveraging automation as a force multiplier.
>
> **[1:39](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-and-devops?u=76281980&t=99)** However, given that DevOps is more challenging than lifting and shifting applications at speed, how is this done?
>
> **[1:47](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-and-devops?u=76281980&t=107)** The answer is to deploy certain DevOps processes and tooling during rapid migration without forcing the building out of an entire tool chain or process.
>
> **[1:55](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/rapid-migration-and-devops?u=76281980&t=115)** This means they're iterating the move to DevOps by taking baby steps, all supporting rapid migration to the cloud.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **Prerequisites:** set up (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Creating a rapid migration process
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/creating-a-rapid-migration-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/creating-a-rapid-migration-process?u=76281980&t=0)** - [Instructor] Now that we discussed a number of considerations for successful rapid migration, let's create an outline to finalize the overall rapid migration process and discover some steps that will lead you to success if followed.
>
> **[0:13](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/creating-a-rapid-migration-process?u=76281980&t=13)** The overall rapid migration process can be outlined with the following rapid planning or the ability to identify the key processes that need to be accomplished to migrate applications rapidly.
>
> **[0:24](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/creating-a-rapid-migration-process?u=76281980&t=24)** Application assessment, which means identifying applications that can move rapidly.
>
> **[0:28](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/creating-a-rapid-migration-process?u=76281980&t=28)** This includes understanding security, governance and operational requirements as well.
>
> **[0:33](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/creating-a-rapid-migration-process?u=76281980&t=33)** Tool selection, identifying the tools that will be leveraged to do rapid migration.
>
> **[0:39](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/creating-a-rapid-migration-process?u=76281980&t=39)** This includes testing and deployment automation, application and data migration, or the act of relocating the application code and data to the platform analogs in the clouds, testing and acceptance to ensure that applications are functioning correctly.
>
> **[0:54](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/creating-a-rapid-migration-process?u=76281980&t=54)** And the data is correct as well.
>
> **[0:57](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/creating-a-rapid-migration-process?u=76281980&t=57)** Established cloud operations or cloud ops and security operations are SecOps.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)


### 6. Rapid Migration at Scale

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Getting up to 100 applications and data sets migrated daily
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=0)** - [Instructor] In this video, we'll discuss how to get to high scale when moving workloads, a rapid migration at scale.
>
> **[0:07](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=7)** This will include how to establish a process, tooling, and other factors that will drive success.
>
> **[0:13](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=13)** The key questions that need answers include: have you established a Cloud Business Office, or a CBO, to deal with rapid migration issues?
>
> **[0:21](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=21)** The CBO manages all of the business issues of moving to the cloud.
>
> **[0:26](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=26)** This increases cloud service negotiation, onboarding, and acquiring tools, hiring consultants and reporting the business around costs that are being incurred and ongoing.
>
> **[0:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=37)** Because we're rapidly onboarding public clouds for use in migration, as well as tooling and other services needed, we'll need the business office to set up and obtain these products and services quickly.
>
> **[0:48](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=48)** Have you established a business case for your rapid migration?
>
> **[0:51](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=51)** Giving that moving fast can mean more cost and risk, you have to make the case to the stakeholders within the company that the move is worth the cost and gain their approval.
>
> **[1:02](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=62)** Have your applications, infrastructure, security, and operations been assessed against the target cloud providers you're looking to leverage?
>
> **[1:08](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=68)** Do you have a clear plan as to how we're moving from the existing state, typically on-premises systems, to the cloud, typically a public cloud such as Amazon Web Services, Microsoft or Google?
>
> **[1:20](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=80)** Have you been able to identify what are the gaps and how they can be dealt with?
>
> **[1:25](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=85)** Have we picked the right tools for the job and have we automated everything we can automate?
>
> **[1:31](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=91)** Many rapid migration projects have failed due to the fact they are lacking the right tooling and other technology.
>
> **[1:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=97)** With a bit of planning, this risk of failure around tool selection goes down significantly.
>
> **[1:42](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=102)** Once we have the answers to all of the questions presented, we can then create a finalized plan as to how we're going to approach rapid migration.
>
> **[1:50](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/getting-up-to-100-applications-and-data-sets-migrated-daily?u=76281980&t=110)** Keep in mind that this plan is agile and we may be changing things as we work through our rapid cloud migrations.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), include: (1)
> **Env Vars:** cbo (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Organization and skill considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=0)** - [Instructor] There are several skills that team members will need to have available to rapidly migrate to the cloud successfully.
>
> **[0:08](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=8)** We'll look at those skills in this video, including cloud platform skills and tool-level skills.
>
> **[0:13](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=13)** You'll need the following people with the following skills, including cloud architect, cloud developer.
>
> **[0:18](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=18)** and that cloud developer may focus on AWS, Microsoft, Google, or others such as Oracle and IBM.
>
> **[0:25](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=25)** Dev ops specialists, data specialists, security specialists, tool specialists, and special requirements.
>
> **[0:31](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=31)** You know, such as you're moving and internet of things or an IOT based system and leveraging people with the knowledge of embedded systems, things like that.
>
> **[0:38](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=38)** The cloud architect is able to pull together all of the requirements, including the need to do rapid migration and make all or most of the calls as to platforms, clouds, tools, design, and configuration.
>
> **[0:49](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=49)** This is the most important role when considering rapid migration, because that this person or team will make core decisions around technology to leverage and how it's configured and deployed.
>
> **[1:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=60)** Cloud developers are those that understand the details and usages of cloud native systems and cloud native services.
>
> **[1:06](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=66)** Cloud developers typically have cloud specific skills, including Amazon web service developers who have certification from AWS.
>
> **[1:14](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=74)** Dev ops specialists are needed to deal with setting up dev ops processes and tool chains.
>
> **[1:19](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=79)** They need to act as an agent of change and need to have the skills that span all cloud systems you're looking to leverage.
>
> **[1:26](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=86)** Data specialists, focus on the data skills needed for rapid migration.
>
> **[1:30](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=90)** They need to understand the source databases as well as the targets in the cloud, and also how the data needs to be changed or not during migration.
>
> **[1:38](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=98)** Security specialist is the person in charge of dealing with security around the Tubi state of rapid migration.
>
> **[1:45](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=105)** They'll determine what security technology will be used, how it will be used and how it will be operated.
>
> **[1:51](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=111)** Tool specialists, which varies depending on what tools you're leveraging, they have the skills to understand how each tool works and how it's leveraged within a rapid migration.
>
> **[1:59](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/organization-and-skill-considerations?u=76281980&t=119)** Special requirements, you may need someone with unique skills for your project, such as someone who has a good working knowledge on specialized and or custom systems that may be unique to your rapid migration project.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (2), make (2)
> **Env Vars:** aws (2), ibm (1), iot (1)
> **Analogies:** such as (3)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Security considerations for rapid migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/security-considerations-for-rapid-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/security-considerations-for-rapid-migration?u=76281980&t=0)** - [Instructor] Security is the most important aspect of rapid cloud migration, in this video, we'll look at how to dial security in, including types of security, tooling, and best practices.
>
> **[0:10](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/security-considerations-for-rapid-migration?u=76281980&t=10)** Here are some of the key questions around security, privacy, efficiency, data loss, and compliance that need to be answered around security of your rapid cloud migration project.
>
> **[0:19](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/security-considerations-for-rapid-migration?u=76281980&t=19)** Will data managed and stored by the proposed cloud solution protect against outside threats like viruses, malware, interception, and theft?
>
> **[0:28](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/security-considerations-for-rapid-migration?u=76281980&t=28)** If the answer to any of these is no, then this must be addressed before rapid migration deployment crisis or not.
>
> **[0:35](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/security-considerations-for-rapid-migration?u=76281980&t=35)** When considering privacy will data handled by the proposed cloud solution be protected against intrusions on privacy, such as third party or government requests for the cloud provider to hand over customer information.
>
> **[0:47](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/security-considerations-for-rapid-migration?u=76281980&t=47)** Again if the answer is no, then this needs to be addressed prior to deployment.
>
> **[0:52](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/security-considerations-for-rapid-migration?u=76281980&t=52)** When considering efficiency will the protections placed on data in the cloud, enable the cloud applications to function as intended without added latency or disruption.
>
> **[1:02](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/security-considerations-for-rapid-migration?u=76281980&t=62)** This means that we're checking for performance and utilization of resources.
>
> **[1:05](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/security-considerations-for-rapid-migration?u=76281980&t=65)** If not there, it needs to be addressed.
>
> **[1:08](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/security-considerations-for-rapid-migration?u=76281980&t=68)** Next consider data loss, will the data used by the proposed cloud solution be backed up and recoverable in the event of a natural disaster or other service interruption or disruption?
>
> **[1:18](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/security-considerations-for-rapid-migration?u=76281980&t=78)** If we did move to the cloud around the outcome of the crisis, then we need to ensure that data is less vulnerable not more.
>
> **[1:26](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/security-considerations-for-rapid-migration?u=76281980&t=86)** Finally compliance, meaning will the organization's use of the proposed cloud solution be in compliance with relevant data, privacy laws, and regulations.
>
> **[1:34](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/security-considerations-for-rapid-migration?u=76281980&t=94)** Again if the answer is no, then this needs to be addressed prior to deployment.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (1), function (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Governance considerations for rapid migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/governance-considerations-for-rapid-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/governance-considerations-for-rapid-migration?u=76281980&t=0)** - [Instructor] Governance is often an afterthought during the rapid migration process.
>
> **[0:04](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/governance-considerations-for-rapid-migration?u=76281980&t=4)** And that could put the entire rapid migration process at risk.
>
> **[0:08](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/governance-considerations-for-rapid-migration?u=76281980&t=8)** Let's talk about the basics of governance and its role in the cloud migration process and in-state deployments.
>
> **[0:14](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/governance-considerations-for-rapid-migration?u=76281980&t=14)** There are several types of governance solutions to consider including service based, resource based, compliance, and cost governance.
>
> **[0:22](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/governance-considerations-for-rapid-migration?u=76281980&t=22)** Service based governance is able to place governing policies around cloud services as well as services imposed by traditional systems, creating the policies and the enforcement of these policies is an automated set of processes.
>
> **[0:34](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/governance-considerations-for-rapid-migration?u=76281980&t=34)** Resource-based governance is able to place governing policies around cloud resource, such as storage, compute databases, things like that.
>
> **[0:41](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/governance-considerations-for-rapid-migration?u=76281980&t=41)** Again, automation enforces these policies.
>
> **[0:44](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/governance-considerations-for-rapid-migration?u=76281980&t=44)** For example, not allowing a single developer to saturate a CPU within a virtual cloud platform.
>
> **[0:51](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/governance-considerations-for-rapid-migration?u=76281980&t=51)** Compliance governance refers to the automation of policy enforcements as related to regulations.
>
> **[0:55](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/governance-considerations-for-rapid-migration?u=76281980&t=55)** For example, in some cases data that belongs to a specific country's citizens can't be transmitted out of that country.
>
> **[1:02](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/governance-considerations-for-rapid-migration?u=76281980&t=62)** Compliance policies would ensure that this does not happen.
>
> **[1:06](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/governance-considerations-for-rapid-migration?u=76281980&t=66)** This saves legal and public relation troubles, and finally cost governance refers to the control of costs, including cloud billing for resource usage and other actions that may result in spending more or less money on public cloud resources.
>
> **[1:20](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/governance-considerations-for-rapid-migration?u=76281980&t=80)** Cost governance is important since it's able to place policies around the spending of money, keeping departments, companies, and individuals out of trouble when leveraging cloud resources that can become costly quickly.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), let (1)
> **Definitions:** refers to (2), is an  (1)
> **Analogies:** for example (2), such as (1)
> **Env Vars:** cpu (1)
> **Speakers:** - [instructor] (1)

#### What you learned about rapid migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=0)** - [Instructor] Let's take a step back and summarize rapid migration at scale.
>
> **[0:04](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=4)** These core processes can be used over and over again to migrate an increasing number of workloads in a shorter amount of time.
>
> **[0:10](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=10)** Steps that you should follow for planning a rapid migration include things such as access and planning or asking questions such as what are the applications that need to be rapidly moved.
>
> **[0:21](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=21)** What about the connected data, apply the six R's, which are ways that we're categorizing application workloads for moving to the cloud and creating a plan of attack.
>
> **[0:32](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=32)** Next, we needed to find a minimum viable cloud or MVC.
>
> **[0:36](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=36)** What is the likely public cloud candidate we're going to leverage?
>
> **[0:39](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=39)** What about the tools such as security, governance, and ops.
>
> **[0:42](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=42)** These allow you to get to the technology configuration that meets the requirements, but it does not go beyond.
>
> **[0:48](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=48)** Next, we need to consider the migration of applications in data.
>
> **[0:51](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=51)** Executing the processes in moving the code, doing functional testing and looking for initial issues that would mean failure in migrating and localizing the data.
>
> **[1:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=60)** Sometimes this is just a matter of leveraging data migration utility.
>
> **[1:03](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=63)** Sometimes we're changing the structure in the meaning of the data.
>
> **[1:07](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=67)** Cloud operations or cloud ops needs to be considered as well.
>
> **[1:10](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=70)** This group determines the process and technology that we're going to need to operate those migrated applications and data longer term.
>
> **[1:17](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/what-you-learned-about-rapid-migration?u=76281980&t=77)** And this is very important considering how we define success around longer-term viability of the migrated cloud applications and the data.

> [!info]- Semantic Content
>
> **Analogies:** such as (3)
> **Code Keywords:** let (1), public (1)
> **CLI Commands:** find (1)
> **Env Vars:** mvc (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Where to go from here with rapid migration
> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/where-to-go-from-here-with-rapid-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/where-to-go-from-here-with-rapid-migration?u=76281980&t=0)** - Let's talk about where to take your rapid migration journey from here.
>
> **[0:03](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/where-to-go-from-here-with-rapid-migration?u=76281980&t=3)** The best way to start is to learn by doing and leveraging the knowledge learned in this course to do rapid workload migration to the Cloud.
>
> **[0:12](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/where-to-go-from-here-with-rapid-migration?u=76281980&t=12)** Considering the power that this can bring to your enterprise, you're able to move quickly to respond to a crisis such as a pandemic or other natural disasters.
>
> **[0:21](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/where-to-go-from-here-with-rapid-migration?u=76281980&t=21)** This needs to be understood by the stakeholders as well as the rank and file within the organization.
>
> **[0:27](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/where-to-go-from-here-with-rapid-migration?u=76281980&t=27)** Make sure you consider the business case and do that first.
>
> **[0:30](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/where-to-go-from-here-with-rapid-migration?u=76281980&t=30)** This is about serving the business and thus the business case should be understood before the investment is made into rapid migration.
>
> **[0:37](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/where-to-go-from-here-with-rapid-migration?u=76281980&t=37)** Get a pilot going now or begin experimenting with public Clouds, migration tools, things like that to determine what the capabilities and the opportunities are.
>
> **[0:46](https://www.linkedin.com/learning/planning-and-implementing-a-rapid-cloud-migration-rcm/where-to-go-from-here-with-rapid-migration?u=76281980&t=46)** You'll find that this is the best way to understand the power of Cloud computing, including what it can do and what it can't do.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** let (1), public (1)
> **Analogies:** such as (1)
> **Speakers:** - let (1)


## Instructor

- [[David Linthicum]]

## Path Context

### In [[Design and Present Your Cloud Strategy]]
← [[Presenting Cloud Migration Benefits to the C-Suite]] | **6 of 6**

### In [[Introduction to Enterprise Cloud Migration Planning]]
← [[Dependency Mapping for Cloud Migration]] | **4 of 4**

## Appears In

- [[Design and Present Your Cloud Strategy]]
- [[Introduction to Enterprise Cloud Migration Planning]]

---

[↑ Back to top](#)