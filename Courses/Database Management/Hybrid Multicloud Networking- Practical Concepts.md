---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: hybrid-multicloud-networking-practical-concepts
url: "https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts"
duration_minutes: 83
duration: 1h 23m
level: Intermediate
updated: 8/11/2022
learners: 12663
skills:
  - Hybrid Cloud
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGQMZS-HGbqBw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660078703986?e=2147483647&amp;v=beta&amp;t=LJ9yF7aM1TMxPxnzeNhDEOvEsDupgcXqrieAoW8glxo"
linkedin_topic: Database Management
learning_paths:
  - '[[Network Automation Professional Certificate by Arista Networks]]'
prev_courses:
  - '[[NetOps (DevOps for Network Engineers)- Automating Networks]]'
next_courses:
  - '[[Terraform- Managing Network Infrastructure]]'
path_nav: '[{"path":"Network Automation Professional Certificate by Arista Networks","position":5,"total":6,"prev":"NetOps (DevOps for Network Engineers)- Automating Networks","next":"Terraform- Managing Network Infrastructure"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/devops
  - topic/network-and-system-administration
  - skill/hybrid-cloud
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Hybrid%20Multicloud%20Networking-%20Practical%20Concepts.md)

![Hybrid Multicloud Networking: Practical Concepts](https://media.licdn.com/dms/image/v2/C4E0DAQGQMZS-HGbqBw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660078703986?e=2147483647&amp;v=beta&amp;t=LJ9yF7aM1TMxPxnzeNhDEOvEsDupgcXqrieAoW8glxo)

# Hybrid Multicloud Networking: Practical Concepts

> The network is where business services, systems, and data intersect. Many enterprises today are rapidly transitioning to a hybrid multicloud world. This means technical practitioners have to quickly extend their on-premises networks to one or more clouds while planning, designing, and operating against known and unknown requirements. In this course, William Collins provides you with a solid unders

> [LinkedIn Learning](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts) | 1h 23m | Intermediate | 13K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Bringing hybrid multicloud networking to the real world](#bringing-hybrid-multicloud-networking-to-the-real-world)
- [**1. The Business and Hybrid Multicloud Networking**](#1-the-business-and-hybrid-multicloud-networking) (4 videos)
  - [Exploring cloud migration strategies](#exploring-cloud-migration-strategies)
  - [Starting small and failing fast](#starting-small-and-failing-fast)
  - [Cloud networking is a team sport](#cloud-networking-is-a-team-sport)
  - [Building for the future](#building-for-the-future)
- [**2. Hybrid Multicloud Network Options**](#2-hybrid-multicloud-network-options) (5 videos)
  - [Overview of hybrid multicloud networking options](#overview-of-hybrid-multicloud-networking-options)
  - [Virtual private networks](#virtual-private-networks)
  - [Private connections](#private-connections)
  - [Software-defined cloud interconnect (SDCI)](#software-defined-cloud-interconnect-sdci)
  - [Multicloud networking software](#multicloud-networking-software)
- [**3. Planning a Hybrid Multicloud Network**](#3-planning-a-hybrid-multicloud-network) (5 videos)
  - [The shifting acquisition landscape](#the-shifting-acquisition-landscape)
  - [High availability in the cloud](#high-availability-in-the-cloud)
  - [Disaster recovery in the cloud](#disaster-recovery-in-the-cloud)
  - [Capacity planning](#capacity-planning)
  - [Network segmentation](#network-segmentation)
- [**Conclusion**](#conclusion) (1 videos)
  - [Moving forward with your hybrid multicloud networking](#moving-forward-with-your-hybrid-multicloud-networking)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Bringing hybrid multicloud networking to the real world](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/bringing-hybrid-multicloud-networking-to-the-real-world?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/bringing-hybrid-multicloud-networking-to-the-real-world?u=76281980&t=0)** - The Flexera State of the Cloud Report highlights that 93% of enterprises have a multicloud strategy today.
>
> **[0:10](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/bringing-hybrid-multicloud-networking-to-the-real-world?u=76281980&t=10)** This number tells a story and more importantly, it creates an opportunity for cloud professionals and leaders to modernize their skillset and [[Lead Change]].
>
> **[0:20](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/bringing-hybrid-multicloud-networking-to-the-real-world?u=76281980&t=20)** Well-designed networks create a reliable foundation for cloud adoption.
>
> **[0:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/bringing-hybrid-multicloud-networking-to-the-real-world?u=76281980&t=25)** In this course, you will gain the skills necessary to plan your organization's network for the cloud era.
>
> **[0:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/bringing-hybrid-multicloud-networking-to-the-real-world?u=76281980&t=33)** You will also gain insight into how technology intersects with the business and how you as an individual have the power to influence the culture beyond yourself and your team.
>
> **[0:45](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/bringing-hybrid-multicloud-networking-to-the-real-world?u=76281980&t=45)** My name is William Collins and I've guided many large organizations through cloud adoption and [[Digital Transformation]].
>
> **[0:53](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/bringing-hybrid-multicloud-networking-to-the-real-world?u=76281980&t=53)** Today I work as a principle cloud architect for a network startup called Alkira.
>
> **[0:58](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/bringing-hybrid-multicloud-networking-to-the-real-world?u=76281980&t=58)** Come join me on this journey where we're going to bring hybrid multicloud networking to the real world.
>
> **[1:04](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/bringing-hybrid-multicloud-networking-to-the-real-world?u=76281980&t=64)** And as we go through this content remember to try to make connections between your existing technology stack and some of these new ideas that we're going to introduce and it's okay to come out of your comfort zone.
>
> **[1:17](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/bringing-hybrid-multicloud-networking-to-the-real-world?u=76281980&t=77)** The important part here is extracting as much business value as possible from our cloud and our network strategies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Lead Change]] (1), [[Digital Transformation]] (1)
> **CLI Commands:** make (1)
> **Best Practices:** remember to (1)
> **Speakers:** - the (1)


### 1. The Business and Hybrid Multicloud Networking

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring cloud migration strategies](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=0)** - [Instructor] Building a strategy for migrating applications to the public cloud is a lot like building a house.
>
> **[0:07](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=7)** Applications and homes are often built using [[Design Patterns]].
>
> **[0:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=13)** When we're exploring cloud migration strategies, the first thing we want to think through is design patterns.
>
> **[0:20](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=20)** These create repeatable solutions to commonly occurring problems.
>
> **[0:26](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=26)** With home construction, a builder can produce hundreds of homes all from a single floor plan.
>
> **[0:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=33)** These plans are scaled but simple drawings showing room placement, doors, [[Windows]], and major fixtures.
>
> **[0:42](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=42)** In the software world, developers build software from patterns also, but instead of floor plans, they use high level designs.
>
> **[0:51](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=51)** These designs provide a bird's eye view of the software and requirements.
>
> **[0:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=56)** To support and scale the software, patterns can be defined for infrastructure also.
>
> **[1:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=63)** Finding patterns leads to repeatability, and that is a huge part of successful automation.
>
> **[1:11](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=71)** When building [[Infrastructure as code (IaC)|infrastructure as code]] especially, having a golden standard for the infrastructure that supports your applications speeds up development cycles and even leads to more effective disaster recovery.
>
> **[1:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=85)** Enterprise environments can have a variety of applications and designs.
>
> **[1:31](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=91)** This number is usually higher for larger enterprises that have been around for a while.
>
> **[1:36](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=96)** Maybe growth has occurred through acquisitions and additional lines of business being added over time, which may have accelerated the growth of different applications and patterns.
>
> **[1:48](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=108)** Before the first application gets migrated, it is critical to survey the existing application landscape.
>
> **[1:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=116)** As applications are evaluated, they can then be placed into the appropriate strategy and make their way through the migration factory.
>
> **[2:06](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=126)** Okay, so let's break down some of the common strategies that you will use when migrating applications to the cloud.
>
> **[2:14](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=134)** The first strategy we will look at is rehosting, which migrates the application as is to the cloud.
>
> **[2:23](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=143)** This strategy is faster as it requires less planning upfront, and no major changes are made to the data store, operating system or application code.
>
> **[2:35](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=155)** You may have heard this referred to also as lift and shift.
>
> **[2:39](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=159)** Although this strategy may be faster, you don't reap many of the benefits inherent with [[Cloud-Native Architecture]].
>
> **[2:48](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=168)** Next on the list is replatforming.
>
> **[2:52](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=172)** Like rehost, this strategy doesn't make major changes to the application, but does seek to optimize by taking advantage of certain cloud-native features.
>
> **[3:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=183)** A common example of this in the real world is transitioning your database to a [[PaaS|platform as a service]] offering like Amazon's RDS, [[Microsoft Azure|Azure]] [[SQL]] or [[Google Cloud Platform (GCP)|Google Cloud]] SQL.
>
> **[3:17](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=197)** This can significantly reduce management overhead and open up the door for easier cross-region replication.
>
> **[3:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=205)** Going beyond rehost and replatform means rethinking the entire architecture and refactoring using cloud-native patterns and features.
>
> **[3:36](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=216)** Here, we would see a complete redesign from top to bottom of the application.
>
> **[3:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=221)** This includes the transitioning to practices like infrastructure as code for release management.
>
> **[3:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=227)** Lastly, what happens when parts of your application portfolio aren't ready for cloud, may not get migrated or a decision just can't be made based on the data available at that time?
>
> **[4:02](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=242)** Under these circumstances, it makes sense to retain these assets on-premises.
>
> **[4:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=249)** In some cases, a decision may be made to let these assets sunset and eventually retire them in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (2), [[Infrastructure as code (IaC)|Infrastructure as code]] (2), [[SQL]] (2), [[Windows]] (1), [[Cloud-Native Architecture]] (1)
> **Env Vars:** sql (2), rds (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Starting small and failing fast](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=1)** - [Instructor] Sometimes breaking down tasks into smaller pieces simplifies the intake of work.
>
> **[0:08](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=8)** Enterprises usually have an intake process where they define, prioritize, and complete tasks.
>
> **[0:17](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=17)** The intake process for new [[Microsoft Products|products]] and applications didn't change much in the years that I worked in large enterprise, specifically after cloud disrupted the industry.
>
> **[0:29](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=29)** It generally worked something like this.
>
> **[0:32](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=32)** The business would want to release a new product most likely utilizing the cloud.
>
> **[0:37](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=37)** A deadline is set.
>
> **[0:39](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=39)** Let's say eight months for this example.
>
> **[0:43](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=43)** The business goes through an intake process.
>
> **[0:46](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=46)** Outcomes are defined, and developers begin to build.
>
> **[0:51](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=51)** Before they get very far, though, they need infrastructure to host the new product.
>
> **[0:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=56)** This will require them to work across various infrastructure teams.
>
> **[1:02](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=62)** They will also need guidance from the relevant infrastructure teams on process, design, and configuration of the infrastructure.
>
> **[1:11](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=71)** To further complicate things, progress is usually a little bit behind and expedited timelines are imposed to try to get things back on track.
>
> **[1:22](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=82)** This generally leads to mounting pressure on infrastructure teams to deliver faster than their staffing and skillset may allow.
>
> **[1:31](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=91)** Traditional infrastructure teams will often plan based on detailed requirements provided by development teams.
>
> **[1:39](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=99)** These details usually get provided upfront, and then the various teams will work on delivering the requirements by the established deadline.
>
> **[1:49](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=109)** Requirements could look something like this.
>
> **[1:52](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=112)** With many hybrid designs, network teams will have to facilitate connectivity to on-premises networks where applications may live.
>
> **[2:02](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=122)** They will also be tasked with network design facilitating critical elements like disaster recovery.
>
> **[2:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=129)** Security teams will complete a risk profile, and then they're going to validate least privilege access as being provided and may want to understand how encryption is being handled for data in transit and at [[Representational State Transfer (REST)|rest]].
>
> **[2:24](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=144)** Compute teams will need to work out the virtual machine image build process and then how to provision it and also routine maintenance like patching.
>
> **[2:36](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=156)** Cloud-focused teams will bring together the various architectures into an operational environment that the applications can run on.
>
> **[2:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=167)** While this may look like a sound approach, siloed teams with long feedback cycles can often lead to fragmented delivery of an architecture that may not meet requirements.
>
> **[3:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=180)** This can cause further delays to the overall timeline.
>
> **[3:05](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=185)** Have you ever put together a giant [[Jigsaw]] puzzle?
>
> **[3:08](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=188)** I recently took on this task with my six year old, and you have to admire his optimism here.
>
> **[3:14](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=194)** Pieces get dumped everywhere, and immediately all energy is channeled in trying to mash the right pieces in the right places.
>
> **[3:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=205)** This is a great teaching opportunity and how tasks, when broken up into small, independent pieces, can create a beautiful picture.
>
> **[3:35](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=215)** With this puzzle, if we flip all the pieces picture side up, it gives us a common surface area to work from.
>
> **[3:45](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=225)** Then we can each branch out into separate tasks.
>
> **[3:49](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=229)** My son can locate all the edge pieces to create a border.
>
> **[3:52](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=232)** That's his favorite part.
>
> **[3:54](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=234)** And I can start sorting other pieces by color or other identifiable attributes.
>
> **[4:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=241)** Now, for the home stretch, where we can combine our efforts and assemble the remainder of the puzzle together.
>
> **[4:08](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=248)** While this example doesn't relate specifically to networking or cloud, it does articulate the thinking process we can apply to the earlier hypothetical intake process.
>
> **[4:20](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=260)** Finding out what doesn't work quicker can save a ton of time and allow you to focus on quality earlier in the process.
>
> **[4:30](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=270)** You can think of this as failing fast.
>
> **[4:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=273)** What if we approach delivering infrastructure with the same principles that we built the puzzle with?
>
> **[4:40](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=280)** Let's compare the traditional mindset with some changes that incorporate fail-fast thinking.
>
> **[4:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=287)** With a traditional approach, we gather requirements, we plan, deliver, and then at the end we gather feedback.
>
> **[4:55](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=295)** The fail-fast approach looks a little bit different.
>
> **[4:59](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=299)** While we still gather requirements and get feedback, we approach doing it in a different, yet more effective way.
>
> **[5:07](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=307)** The important lesson here is feedback.
>
> **[5:11](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=311)** Instead of delivering the entire product and gathering feedback at the finish line, we want to deliver small, testable components and gather feedback on them consistently throughout the whole process.
>
> **[5:27](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=327)** It is impossible to plan for every possible behavior and outcome ahead of delivery time without doing any building, testing, and feedback analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Jigsaw]] (1)
> **Analogies:** picture (2)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Cloud networking is a team sport](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=1)** - [Instructor] Individually, we are one drop.
>
> **[0:04](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=4)** Together, we are an ocean.
>
> **[0:07](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=7)** Zooming out can provide valuable perspective.
>
> **[0:12](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=12)** As network practitioners, it can be easy to zone in specifically on the technical aspects of the job.
>
> **[0:19](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=19)** The network is where critical applications, systems, and data intersect.
>
> **[0:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=25)** And each one of these technologies has a dedicated team standing behind it.
>
> **[0:30](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=30)** Application teams lean heavily on network database and systems teams for guidance on making their software high performing and scalable.
>
> **[0:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=41)** Database teams will rely on application and network teams to work out the mechanics of availability, consistency, and fault tolerance.
>
> **[0:51](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=51)** System teams require specific details from application teams surrounding architecture, and will likely build upon those details as they go back and talk network requirements.
>
> **[1:04](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=64)** Security is tightly integrated into each aspect of the design.
>
> **[1:10](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=70)** Data encryption, ingress and egress network flows, secrets management, and how the application is patterned are just a few examples.
>
> **[1:21](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=81)** FinOps, a cross between [[DevOps]] and finance is evolving to take control and bring [[Accountability]] to cloud spend.
>
> **[1:31](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=91)** As we can see, all these technologies and teams cross the network.
>
> **[1:36](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=96)** This means that collaboration in the era of cloud is critical for success.
>
> **[1:42](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=102)** Getting things tested early on and with the right level of team engagement means shifting left.
>
> **[1:50](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=110)** Let's examine further.
>
> **[1:52](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=112)** When an enterprise is planning to modernize their technology stack with the cloud, cloud leaders define business outcomes and a program or initiative that is strategic is formed.
>
> **[2:05](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=125)** This stage often happens at the executive level, and doesn't usually have involvement from technical practitioners.
>
> **[2:14](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=134)** The focus here stays on outcomes.
>
> **[2:18](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=138)** For this example, let's refer to it as define.
>
> **[2:22](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=142)** Understanding the desired business outcomes along with how success will be measured plays a big part in the success of subsequent exercises.
>
> **[2:32](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=152)** The design phase comes next.
>
> **[2:35](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=155)** This is where things begin getting tactical.
>
> **[2:38](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=158)** Sometimes, network practitioners get brought in here.
>
> **[2:42](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=162)** In this phase, you will see scoping and deliverables defined, along with sorting out which team will do what.
>
> **[2:50](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=170)** Sometimes, a team will not be able to begin working because of cross team dependencies.
>
> **[2:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=176)** These must get sorted out as soon as possible.
>
> **[3:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=180)** The last phase is deployment.
>
> **[3:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=183)** Technical teams begin building, configuring, and operationalizing the design.
>
> **[3:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=189)** If there was a missed requirement, or a team was brought in too late, it could potentially halt progress for many teams and delay the entire program.
>
> **[3:20](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=200)** Network involvement at this stage is far too late.
>
> **[3:26](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=206)** Given the current supply chain crisis, [[Hardware]] scarcity, and circuit lead times just in general, network practitioners should be brought in as early on as possible.
>
> **[3:38](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=218)** Shifting left and bringing the right network experience for planning and testing will enable an organization to fail fast and get in front of setbacks that could otherwise cost months in delays.
>
> **[3:53](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=233)** Sometimes figuring out how to get other teams to involve networking sooner isn't so easy.
>
> **[4:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=241)** Here are some quick wins that can help you get started with making networking a team sport inside your organization.
>
> **[4:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=249)** If you learn about cross functional teams, this gives you tremendous insight from a different vantage point.
>
> **[4:18](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=258)** Also, if teams know you're eager to learn more about them, they may share more.
>
> **[4:24](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=264)** This is a great way to break the ice and begin building a long-lasting relationship that leads to better collaboration overall.
>
> **[4:32](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=272)** What can the network even do?
>
> **[4:35](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=275)** How can other teams interact with or make changes to the network?
>
> **[4:39](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=279)** What about a lunch and learn with a live screen share as you configure BGP, or look at route advertisements, and, oh, maybe troubleshoot a common fault scenario.
>
> **[4:50](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=290)** Find ways to champion the network and give other teams an opportunity to learn more.
>
> **[4:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=296)** And the best way to make something better is through feedback.
>
> **[5:02](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=302)** Embrace that feedback as an ally, and make it easy for teams in leadership to provide it.
>
> **[5:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=309)** And most importantly, take action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (1), [[Accountability]] (1), [[Hardware]] (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** bgp (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Building for the future](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=0)** - [Instructor] "By failing to prepare, you are preparing to fail."
>
> **[0:05](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=5)** You can use the following as guiding principles as you rethink future designs.
>
> **[0:12](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=12)** Simple is easier to understand, deploy, migrate, and operate.
>
> **[0:18](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=18)** Keep the design as simple as possible while still meeting the requirements.
>
> **[0:24](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=24)** Chances are new deliverables are going to be coming your way and this design is going to evolve.
>
> **[0:31](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=31)** Think about how that evolution will happen ahead of time.
>
> **[0:35](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=35)** An example could be route summarization or [[IP Addressing]] schemes used for cloud networking and workloads.
>
> **[0:43](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=43)** Think through the design's ability to be integrated with other [[Microsoft Products|products]] and services.
>
> **[0:49](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=49)** Net [[DevOps]] culture has ushered in a new delivery method for networking using CICD pipelines and provisioning tools like [[Terraform]].
>
> **[0:59](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=59)** No matter the tool though, extensibility in the network is valuable.
>
> **[1:05](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=65)** There are always ways to optimize.
>
> **[1:08](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=68)** Sometimes coming back to work, you completed a few months prior gives you a completely fresh perspective and this can lead to future improvement.
>
> **[1:19](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=79)** To demonstrate how to plan for change, let's look at an example, using IP addressing for the cloud.
>
> **[1:27](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=87)** The organization you work for wants to modernize their technology stack using the public cloud.
>
> **[1:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=93)** As part of this initiative, several applications are slated to get migrated to AWS over the following 16 months.
>
> **[1:42](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=102)** The cloud team needs to set up a VPC and is requesting an IP block.
>
> **[1:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=107)** Let's say a /19 or approximately 8,000 addresses.
>
> **[1:53](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=113)** Now you could simply find the next available /19 in your IP address management tool and say, here you go.
>
> **[2:02](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=122)** But let's think about this further.
>
> **[2:05](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=125)** Remember, take advantage of any opportunity you have to plan ahead.
>
> **[2:11](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=131)** This makes life easier in the future.
>
> **[2:14](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=134)** Let's imagine that a few months later the applications living in this VPC need to be available or scale across another region.
>
> **[2:24](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=144)** Disaster recovery is a common driver for this scenario and is best to think about upfront.
>
> **[2:31](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=151)** Splitting up that /19 that you assigned to the VPC in Region A is not possible as it would require an outage and possibly re-IP-addressing some resources.
>
> **[2:43](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=163)** As cloud consumption and maturity grows additional regions and even additional clouds will likely be added to the overall design.
>
> **[2:53](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=173)** How do we use this request as an opportunity to limit future rework?
>
> **[3:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=180)** Another way this request could be approached is by allocating a larger block of contiguous space to account for future growth.
>
> **[3:11](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=191)** Let's say for this example, we allocate a /16.
>
> **[3:15](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=195)** This solves the immediate request of allocating a /19, but it also provides the building blocks for onboarding future cloud networks.
>
> **[3:26](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=206)** Now, when additional VPCs need to be provisioned and IP space is requested, we can simply assign the next available /19.
>
> **[3:37](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=217)** And this process will also serve us well if we expand two additional cloud providers.
>
> **[3:44](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=224)** Since we reserve contiguous space, we don't have to contend with overlap, which is critical when taking on migrations or enabling communications across VPCs, clouds and on-premises environments.
>
> **[4:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=240)** Also, we reduce route table entries and create better opportunities for summarization.
>
> **[4:07](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=247)** With cloud transformation initiatives there will be many opportunities to identify patterns.
>
> **[4:14](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=254)** Take advantage of these opportunities when they arise.
>
> **[4:18](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=258)** This will give you an edge and highlight your ability to think outside of the box with bigger picture tasks.
>
> **[4:26](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=266)** Automation is a major imperative for organizations navigating cloud transformation.
>
> **[4:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=273)** Establishing patterns is the first step towards standardization and policy-driven automation.
>
> **[4:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=281)** You can buy any platform or tool to handle automation but unless you have real standards in policy backing it you may be creating more work for yourself or worse, you could experience unpredictable outages.
>
> **[4:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=296)** Operational teams are many times the heroes in outage scenarios.
>
> **[5:02](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=302)** We owe it to the operations teams out there to create environments that are easier to support.
>
> **[5:10](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=310)** This also works in the engineer or architect's favor as well because it leads to fewer 3:00 am escalation phone calls.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IP Addressing]] (2), [[Microsoft Products|Products]] (1), [[DevOps]] (1), [[Terraform]] (1)
> **Env Vars:** vpc (3), cicd (1), aws (1)
> **CLI Commands:** terraform (1), aws (1), find (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), picture (1)
> **Ports:** :00 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Hybrid Multicloud Network Options

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of hybrid multicloud networking options](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=1)** - [Instructor] Before we jump into solutions, let's outline the problems that these technologies aim to solve.
>
> **[0:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=9)** The first and more obvious problem is the networking required to connect on-premises networks to one or more public clouds.
>
> **[0:19](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=19)** This may seem simple on the surface, but as we dive into possible solutions, the trade offs become more pronounced.
>
> **[0:29](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=29)** Networking inside the cloud is the second problem.
>
> **[0:32](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=32)** Being able to maintain control of network policy, security, inside the public cloud provider itself, along with gaining the necessary observability and governance required for long term operational success.
>
> **[0:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=47)** Now, let's dig into the options.
>
> **[0:50](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=50)** The first option is setting up a site to site VPN between your private network and the public cloud.
>
> **[0:58](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=58)** This method uses the internet as transport and traffic traversing the network is encrypted by a customer gateway and then decrypted by the target gateway in the cloud.
>
> **[1:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=69)** This is usually the first option an enterprise will try out when connecting to cloud and can also serve as a handy backup if needed.
>
> **[1:19](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=79)** The second option is procuring a private direct connection.
>
> **[1:23](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=83)** This extends on-premises networking to a public cloud provider region over a highly available and low latency connection.
>
> **[1:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=93)** These connections provide additional reliability and performance and are backed by service level agreements that you can't take advantage of when using the public internet.
>
> **[1:44](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=104)** Direct connections can become necessary when VPNs fail to meet performance, high availability and capacity requirements.
>
> **[1:52](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=112)** This is usually a factor when cloud goes beyond being a science project.
>
> **[1:58](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=118)** Software-defined cloud interconnect.
>
> **[2:02](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=122)** Now that's a mouthful.
>
> **[2:04](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=124)** We can call it SDCI for short.
>
> **[2:07](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=127)** This solution leverages dispersed points of presence that enterprises can use to build private, reliable networking to and between sites, data centers, and clouds.
>
> **[2:22](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=142)** You can think of SDCI as a specialized platform that integrates direct connections to [[IaaS|infrastructure as a service]] providers with SD-WAN, VPN services and many other partner integrations.
>
> **[2:38](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=158)** Since SDCI providers are deploying global, high capacity networks in proximity to cloud regions, this allows for easier scale as you grow with the cloud.
>
> **[2:51](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=171)** This becomes a viable option when network teams look to unify design and operations while transitioning to a more on demand approach to provisioning.
>
> **[3:04](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=184)** And the last option is cloud network software.
>
> **[3:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=189)** While our first three options provide some of the same functionality of getting you to the cloud, cloud network software aims to fill gaps by addressing networking inside the cloud.
>
> **[3:22](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=202)** These [[Microsoft Products|products]] bring the ability to engineer, deploy, and operate a consistent network inside and across multiple cloud providers.
>
> **[3:31](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=211)** This includes building consistent policy, security and governance, while making day to operations more streamlined as multi-cloud deployments become more common.
>
> **[3:44](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=224)** As your business approaches a mature cloud operating model, maintaining control of the entire network becomes critical.
>
> **[3:53](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=233)** Networking inside the cloud can become complex, especially when you add multiple clouds to the mix.
>
> **[4:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=240)** This is where cloud network software's value shines.
>
> **[4:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=243)** And remember, there is no one size fits all here.
>
> **[4:08](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=248)** Every organization will have different use cases and will be at a different stage of the cloud journey.
>
> **[4:16](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=256)** Prior to choosing or upgrading a solution, there are a few things worth considering.
>
> **[4:22](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=262)** The first of which is speed.
>
> **[4:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=265)** You're most likely on a timeline.
>
> **[4:27](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=267)** Procurement should be a consideration throughout the process.
>
> **[4:31](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=271)** Things like procuring network [[Hardware]] or even deploying new circuits can add months to the process.
>
> **[4:38](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=278)** With the current supply chain crisis, the time it takes to procure physical hardware keeps changing and is often growing.
>
> **[4:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=287)** Expense is another important factor.
>
> **[4:50](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=290)** No surprise here.
>
> **[4:52](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=292)** Operating expenditure or OPEX immediately hits your income statement while capital expenditure or CAPEX, gets capitalized or notched as an asset.
>
> **[5:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=303)** This means it hits your income statement as depreciation over a period of time.
>
> **[5:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=309)** Being cost aware for each of the approaches we outlined should be top of mind.
>
> **[5:14](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=314)** How much of the solution is CAPEX and how much is OPEX?
>
> **[5:18](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=318)** Does the business prefer one over the other?
>
> **[5:21](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=321)** How will cost be allocated to the appropriate lines of business or teams that consume more resources?
>
> **[5:28](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=328)** And what could be more important than supportability?
>
> **[5:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=333)** Remembering our friends in operations here.
>
> **[5:36](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=336)** The ability for internal operations teams to identify problems, fix them or escalate to the appropriate place is imperative.
>
> **[5:46](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=346)** When the network is not performing good, it gets noticed and has a gigantic impact on customers and internal employees trying to do their work.
>
> **[5:55](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=355)** [[User Experience (UX)|User experience]] has taken center stage in the cloud era.
>
> **[5:59](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=359)** Having a quality product that has the capacity to scale as demand increases can make or break that experience, meaning that a customer could possibly leave for a competing product.
>
> **[6:14](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=374)** Likewise, being able to decrease capacity as demand subsides is equally important.
>
> **[6:21](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=381)** Being able to recover from network failures seamlessly without the customer noticing a problem even occurred should be the north star here.
>
> **[6:31](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=391)** And lastly, having flexibility to change can solidify your ability to compete in the future.
>
> **[6:40](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=400)** As your business evolves, so must the network that serves you.
>
> **[6:45](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=405)** Being able to change as markets change will keep your business competitive.
>
> **[6:50](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=410)** This means being able to integrate old and new solutions together.
>
> **[6:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=416)** Many times, solutions tend to stick around for awhile.
>
> **[7:02](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=422)** You can't just flip a switch and, you know, poof, you know, magically move to a different vendor or another solution.
>
> **[7:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=429)** Having a reliable integration between solutions can meet you where you are today and get you where you need to go in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[IaaS|Infrastructure as a service]] (1), [[Microsoft Products|Products]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** sdci (3), vpn (2), opex (2), capex (2), wan (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Virtual private networks](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=1)** - [Instructor] Before going any further, let's examine the following definitions.
>
> **[0:06](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=6)** The on-premises network you want to connect will have a gateway.
>
> **[0:10](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=10)** This is usually a physical device or software appliance that handles the customer side of the VPN tunnel and controls [[Routing]] advertisements coming in and going out of the customer network.
>
> **[0:23](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=23)** The target gateway is the other side of the connection.
>
> **[0:27](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=27)** This is usually a cloud endpoint that gets attached to the cloud network.
>
> **[0:32](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=32)** VPN tunnels work the same way for cloud as they do everywhere else.
>
> **[0:36](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=36)** It is an encrypted link between two networks.
>
> **[0:40](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=40)** Let's dig in further on how we can set up VPNs to the cloud.
>
> **[0:46](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=46)** Starting off, we have our on-premises network that we want to connect.
>
> **[0:51](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=51)** This will usually be the existing data centers and enterprise has built on over time where most of the applications live today.
>
> **[1:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=60)** And then we have the cloud we need to connect to.
>
> **[1:04](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=64)** Our on-premises network contains our customer gateway, and the target gateway is in the cloud.
>
> **[1:12](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=72)** And big disclaimer here.
>
> **[1:14](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=74)** This is a very simple example, and only gets more complicated is additional regions in clouds are onboarded.
>
> **[1:23](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=83)** Our underlying transport in this scenario is the internet, and the VPN serves as an overlay, creating a secure and encrypted connection.
>
> **[1:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=93)** Site-to-site VPN supports internet protocol security, or IPsec, for VPN connections.
>
> **[1:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=101)** This happens in two phases.
>
> **[1:43](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=103)** Phase one is used to protect internet key exchange messages.
>
> **[1:49](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=109)** And phase two is used to protect IP traffic.
>
> **[1:53](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=113)** Customer gateways are in a minimum deployed in pairs.
>
> **[1:57](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=117)** It is best to have these devices set up in such a way to avoid single points of failure, which would take down both connections in an outage scenario.
>
> **[2:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=129)** This also creates an opportunity to upgrade code or perform maintenance on one of the gateways while keeping the connection up in passing traffic.
>
> **[2:19](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=139)** The target gateway sits at the edge of the cloud network and is a fully redundant function.
>
> **[2:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=145)** Multiple tunnel endpoints will terminate this side of the connection.
>
> **[2:30](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=150)** The cloud network or VPC that you created can then be associated with the cloud gateway.
>
> **[2:37](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=157)** Now, we have an end-to-end connection using a site-to-site VPN from our on-premises or A side network to our cloud, or Z side network.
>
> **[2:49](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=169)** The last step is getting routing in order.
>
> **[2:52](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=172)** It is always recommended to use dynamic routing when connecting to cloud.
>
> **[2:57](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=177)** Border gateway protocol or BGP is the standard here, and the one that is supported by the cloud providers today.
>
> **[3:06](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=186)** Both customer gateways should advertise the same routes to the target gateway.
>
> **[3:12](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=192)** Additionally, routes need to be imported and filtered into the customer network from the cloud.
>
> **[3:20](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=200)** Changes in the network topology will automatically get propagated to the peer network by BGP.
>
> **[3:27](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=207)** Now that our VPN tunnel is up and we are exchanging routes, and I'm starting to get kind of excited here.
>
> **[3:34](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=214)** Resources in our on-premises network can now communicate to resources in our cloud network securely.
>
> **[3:42](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=222)** Let's examine some of the trade offs with using a site-to-site VPN.
>
> **[3:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=227)** On the pros side, VPNs are at least in the beginning the quickest way to get connected to cloud.
>
> **[3:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=236)** Upfront cost is minimal, especially if no additional [[Hardware]] or internet circuits need to be set up.
>
> **[4:04](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=244)** And chances are the enterprise you work for already has a process in place to request a VPN.
>
> **[4:12](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=252)** And lastly, traffic is encrypted.
>
> **[4:15](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=255)** This keeps the folks over in security pretty happy, at least initially.
>
> **[4:19](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=259)** On the con side, using the public internet means limitations with service level agreements.
>
> **[4:27](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=267)** Also, design complexity is likely to increase exponentially as you scale.
>
> **[4:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=273)** Bandwidth and latency will fluctuate more using the internet as transport.
>
> **[4:40](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=280)** And VPNs are very resource intensive on hardware, and using the internet for all cloud traffic adds significant circuit load.
>
> **[4:49](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=289)** As you grow, this can offset that minimal upfront cost we talked about in the pros column.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (3), [[Hardware]] (2)
> **Env Vars:** vpn (9), bgp (2), vpc (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** set up (3)
> **Cross-References:** we talked about (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Private connections](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=1)** - [Instructor] So, the internet VPN isn't meeting requirements and we want to take things up a notch.
>
> **[0:07](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=7)** Let's take a look at private connections.
>
> **[0:10](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=10)** There are two directions you can go when setting up a private connection, and it's important to understand the differences here, so you can make the best decision for your use case.
>
> **[0:22](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=22)** Dedicated connections are physical ports that get provisioned in a cloud on-ramp facility, like Equinix or Megaport.
>
> **[0:31](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=31)** Ports can be provisioned.
>
> **[0:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=33)** It speeds anywhere from one to 100 gigabits per second, and all of this is dedicated to you, meaning you don't have to share with any other customers.
>
> **[0:45](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=45)** Hosted connections, on the other hand, already have the physical port set up to the cloud provider edge and a virtual circuit is provisioned on top of that.
>
> **[0:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=56)** Multiple customers share the physical aspect of hosted connections as capacity allows, and speeds can range anywhere from 50 megabits per second to 10 gigabits per second.
>
> **[1:10](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=70)** Now, before we go any further, I want to take a moment to touch on the terminology that cloud providers use.
>
> **[1:18](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=78)** Up until this point, I've used pretty generic lingo, but I want to highlight that each cloud provider tends to have their own set of definitions for things that may provide a similar function.
>
> **[1:32](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=92)** For example, [[Amazon Web Services (AWS)|Amazon Web Services]] calls their network a virtual private cloud or VPC.
>
> **[1:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=101)** Their private connection service is called Direct Connect and they use a combination of three different gateway types to allow traffic to privately route in and out of a VPC while handling the necessary attachments.
>
> **[1:57](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=117)** [[Microsoft Azure]] calls their network a virtual network, or VNet for short.
>
> **[2:04](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=124)** Their private connection surface is called ExpressRoute, and a VNet Gateway is their logical [[Routing]] function for forwarding traffic on a private connection.
>
> **[2:15](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=135)** [[Google Cloud Platform (GCP)|Google Cloud Platform]], like AWS, uses virtual private cloud as their network name.
>
> **[2:22](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=142)** Their connection service is called Interconnect and they use their cloud routers to handle routing between the VPC and customer edge device.
>
> **[2:32](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=152)** Last on the list is Oracle [[Cloud Infrastructure]], or OCI for short.
>
> **[2:37](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=157)** OCI uses the name virtual cloud network or VCN.
>
> **[2:42](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=162)** Their connection service is called FastConnect and they use Dynamic Routing Gateways or DRGs to route traffic between the VCN and your on-premises networks.
>
> **[2:55](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=175)** As you can see, a network is not simply a network across clouds.
>
> **[3:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=180)** The behavior will be pretty close, but not identical.
>
> **[3:04](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=184)** Let's [[Zoom]] in on dedicated connections.
>
> **[3:08](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=188)** Dedicated connections to the public cloud are usually set up in a co-location or carrier-neutral data center.
>
> **[3:18](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=198)** These operate independently of telecom or network vendors, giving them extensive opportunities for partnerships.
>
> **[3:27](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=207)** This means that you, the customer, get a diverse range of possibilities for interconnection under a single roof.
>
> **[3:36](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=216)** The first step in establishing a dedicated connection is permission.
>
> **[3:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=221)** You must submit a request to your cloud service provider and download a Letter of Authorization and Connecting Facility Assignment.
>
> **[3:52](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=232)** Let's call that LOA for short.
>
> **[3:55](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=235)** This documentation gives the data center staff at the carrier-neutral facility permission to access the necessary network rack, along with instructions on the port assignments.
>
> **[4:08](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=248)** Next, you must submit the requests for completing the work.
>
> **[4:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=253)** This is called a cross connect, and it will consist of the data center staff connecting the A side and Z side using single-mode fiber.
>
> **[4:23](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=263)** Additionally, you will have to provide instruction on doing the patching to your network gear using the necessary fiber optics.
>
> **[4:32](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=272)** And last is configuration.
>
> **[4:34](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=274)** The 802.1Q VLAN tag you provided on the previous request must be configured on your side for Layer 2.
>
> **[4:44](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=284)** Once Layer 2 is confirmed good, you can then configure BGP with the appropriate authentication.
>
> **[4:51](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=291)** Once these BGP peers have reachability, routes can be exchanged.
>
> **[4:57](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=297)** Now, on the hosted connections.
>
> **[5:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=301)** For hosted or partner connections, you work with a service provider directly.
>
> **[5:07](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=307)** Since the service provider will already have the physical infrastructure set up connecting to the cloud provider edge, no LOA is required.
>
> **[5:16](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=316)** Let's examine a somewhat common scenario to understand hosted connections better.
>
> **[5:23](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=323)** Let's say your business connects offices together with a service provider's [[Multiprotocol Label Switching (MPLS)|MPLS]] network.
>
> **[5:30](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=330)** A new requirement comes down the pipeline and a connection to a public cloud provider is needed.
>
> **[5:37](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=337)** And as it turns out, the service provider being used for MPLS is also an approved partner with the cloud you need to connect to.
>
> **[5:48](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=348)** As the customer, you can simply work with the service provider to provision a virtual circuit and then set up the appropriate route policy on the customer and cloud side.
>
> **[5:59](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=359)** All the work required to set this up is done via the service provider portal.
>
> **[6:05](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=365)** Doesn't require the customer to set up any work orders for physical gear or anything else in a carrier-neutral facility.
>
> **[6:14](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=374)** So instead of having a dedicated connection between your network and the cloud provider, the partner connection will be facilitated by a service provider in the middle.
>
> **[6:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=385)** The connection between the service provider and the cloud will also be shared across additional customers as capacity allows.
>
> **[6:34](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=394)** What are some of the major trade-offs to consider when looking at dedicated and hosted connections?
>
> **[6:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=401)** Hosted connections do share a port across customers, while dedicated connections are used by one customer only.
>
> **[6:50](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=410)** Hosted connections are quicker to set up.
>
> **[6:53](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=413)** This time will depend on how quick the cloud provider side provisioning happens, but shouldn't be longer than 30 minutes.
>
> **[7:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=421)** And hosted connections will be in operational expenditure while dedicated connections will have some capital expenditure involved.
>
> **[7:10](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=430)** This could include the cost of the cross connect and any network gear, optics, or other [[Hardware]] required to terminate the connection.
>
> **[7:20](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=440)** And hosted connection speeds will range anywhere from 512 megabits per second to 10 gigabits per second, while dedicated connections will get you one gigabit, 10 gigabit, or 100 gigabits per second.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (3), [[Multiprotocol Label Switching (MPLS)|Mpls]] (2), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Microsoft Azure]] (1), [[Google Cloud Platform (GCP)|Google cloud platform]] (1)
> **Env Vars:** vpc (3), oci (2), vcn (2), loa (2), bgp (2)
> **Prerequisites:** set up (6), required to (2), configure (1)
> **Definitions:** is called (5), means that (1)
> **CLI Commands:** make (1), aws (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Software-defined cloud interconnect (SDCI)](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=1)** - [Instructor] Things are picking up fast.
>
> **[0:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=3)** Cloud has grown beyond our wildest imaginations, and now we need to think bigger picture in terms of our entire network.
>
> **[0:12](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=12)** When going through a major technology shift in how you solve business problems, new use cases are going to continue popping up.
>
> **[0:21](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=21)** In this case, cloud disruption creates major waves with how traffic flows work historically.
>
> **[0:28](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=28)** SDCI or software defined cloud interconnect brings new features to the table to help meet these use cases with flying colors.
>
> **[0:38](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=38)** Let's examine some attributes of the network prior to SDCI.
>
> **[0:44](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=44)** This should set us on some solid ground as we work our way through some of the use cases.
>
> **[0:49](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=49)** For a very long time, the enterprise data center has been the center of the universe.
>
> **[0:55](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=55)** This is where all the applications live and where critical network services are landed.
>
> **[1:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=60)** Sites have private connectivity back to the data center to reach critical services like internet, DNS, authentication, you name it.
>
> **[1:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=69)** Even a single site needing reachability to another site would first traverse back through the data center to get there.
>
> **[1:17](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=77)** And then, cloud comes along, and with it, a completely new way of doing things.
>
> **[1:24](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=84)** Many large enterprises attempted to treat cloud just like their other sites, and attach it back to the center of their universe.
>
> **[1:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=93)** And it becomes clear very quickly that this isn't going to work.
>
> **[1:39](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=99)** It has numerous inefficiencies, which lead to performance, reliability, and scaling problems.
>
> **[1:46](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=106)** To make the future successful, a shift in thinking needs to happen here.
>
> **[1:51](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=111)** The data center can no longer be the center of the universe.
>
> **[1:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=116)** Let's examine some of the use cases for SDCI.
>
> **[2:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=120)** The first use case is connecting to the cloud.
>
> **[2:04](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=124)** The SDCI platform is going to be driven through a portal or APIs, and can spin up connections to a multitude of infrastructure providers, including public cloud and various [[SaaS|Software as a Service]] platforms.
>
> **[2:19](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=139)** This happens fast, and it can be automated through modern [[Infrastructure as code (IaC)|infrastructure as code]] tools like [[Terraform]].
>
> **[2:26](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=146)** The second use case is really optimizing how our existing data centers and sites communicate with each other.
>
> **[2:35](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=155)** If we can provision, manage and monitor them through this SDCI platform as well, not only does that give us better performance and capability to scale, but it also enhances our ability to observe and troubleshoot when something goes down.
>
> **[2:53](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=173)** Now that we have ironed out our site to site communication, we have to set up connectivity from those sites to the cloud.
>
> **[3:02](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=182)** We want this connectivity to be fast.
>
> **[3:04](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=184)** We want it to be reliable, but we don't want it to break the bank.
>
> **[3:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=189)** The SDCI platform can help us out here.
>
> **[3:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=193)** Next, we need to ensure reliability and performance when connecting to our critical services.
>
> **[3:21](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=201)** This could be anything from internet, DNS, [[Active Directory]], or any other shared services used internally.
>
> **[3:29](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=209)** Now, zooming out quite a bit and looking at this diagram right here, we can see this SDCI platform is interconnecting all our critical network infrastructure.
>
> **[3:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=221)** Instead of revolving around our existing data center, we are modernizing our network to enable the business, and give us an advantage for being able to deliver on future objectives.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SaaS|Software as a service]] (1), [[Infrastructure as code (IaC)|Infrastructure as code]] (1), [[Terraform]] (1), [[Active Directory]] (1)
> **Env Vars:** sdci (7), dns (2)
> **CLI Commands:** make (1), terraform (1)
> **Analogies:** picture (1), just like (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Multicloud networking software](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/multicloud-networking-software?u=76281980)


### 3. Planning a Hybrid Multicloud Network

[↑ Back to Table of Contents](#table-of-contents)

#### [The shifting acquisition landscape](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=0)** - [Instructor] Multicloud is becoming more common.
>
> **[0:04](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=4)** One of the big drivers for this is the shifting acquisition landscape.
>
> **[0:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=9)** Let's examine further.
>
> **[0:11](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=11)** Before cloud disrupted the industry, enterprises built, hosted, and maintained their technology stack inside the four walls of their data centers.
>
> **[0:22](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=22)** This included email and just about everything else.
>
> **[0:26](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=26)** Another business would then be targeted for acquisition.
>
> **[0:30](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=30)** The target business would likely have data centers hosting their own technology stack, offices, stores, warehouses, or even restaurants.
>
> **[0:40](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=40)** After the transaction, the target business's data centers, offices, staff, and any other intellectual property would then get absorbed.
>
> **[0:50](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=50)** This stage of the process is lengthy, complicated, and always includes a lot of unexpected problems to work through.
>
> **[0:58](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=58)** Cloud continues to change how we do business.
>
> **[1:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=61)** Technology has broken out of the four walls of the data center, and applications and services are more distributed than ever.
>
> **[1:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=69)** This has altered the acquisition game from top to bottom.
>
> **[1:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=73)** Let's [[Zoom]] in a little further.
>
> **[1:16](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=76)** Many startups today aren't building data centers.
>
> **[1:20](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=80)** Instead, they are building [[Microsoft Products|products]] and services using the public cloud.
>
> **[1:26](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=86)** Workforces are operating completely remote unless they absolutely must come into the [[Microsoft Office|office]].
>
> **[1:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=93)** This offers tremendous cost savings because physical infrastructure doesn't need to be purchased and maintained.
>
> **[1:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=101)** And office real estate becomes, you know, one less thing to worry about.
>
> **[1:45](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=105)** Since many new startups are being built on public cloud, instead of acquiring a data center and real estate, you will instead be acquiring a product built in the cloud, along with a distributed workforce.
>
> **[2:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=121)** And to keep things frosty, there is a high [[Probability]] that the product was built in a different cloud provider than the one your business is using today.
>
> **[2:10](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=130)** This flips the table over on how the integration process works.
>
> **[2:15](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=135)** As the target business gets absorbed and integrated, there tends to be a push to tightly couple it with the teams, leaders, and processes already existing in that business.
>
> **[2:28](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=148)** Sometimes, though, it might make sense to let the newly acquired business operate autonomously and not disrupt their momentum, branding, and services.
>
> **[2:39](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=159)** Many acquisitions happen because a large business sees a startup that does things really well.
>
> **[2:46](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=166)** Buying that startup, though, doesn't mean you are that startup.
>
> **[2:51](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=171)** With a large, traditional enterprise purchasing a bleeding-edge startup, you have to remember these are two completely different worlds.
>
> **[3:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=180)** Massive change just can't be purchased at the end of the day.
>
> **[3:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=183)** Large enterprises are known for their rigid, hierarchical org structures, strict processes, and complex change management.
>
> **[3:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=193)** Sometimes it can seem really hard to just get things done.
>
> **[3:17](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=197)** Startups, on the other hand, are lean, fast moving, and value-led machines.
>
> **[3:22](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=202)** There isn't much red tape, and this allows them to build and iterate quick.
>
> **[3:26](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=206)** It can be easy to see the product releases coming off the assembly line and think, "Wow, I just want to purchase whatever it is that does that."
>
> **[3:35](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=215)** Post-acquisition, though, integrating these two cultural worlds can be tricky.
>
> **[3:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=221)** Some pretty amazing products that operate at major scale have been produced using cloud native architectures.
>
> **[3:49](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=229)** When thinking of architecture, though, doing it the cloud native way takes on a whole new meaning.
>
> **[3:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=236)** It is a philosophical approach transcending the cloud tech itself.
>
> **[4:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=243)** The team structures, the culture, the change management, and even leadership styles all contribute to this transformation.
>
> **[4:11](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=251)** I have gone through this exercise with a few large organizations in the real world.
>
> **[4:16](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=256)** One of the valuable things I have learned is how to perceive failure.
>
> **[4:22](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=262)** Doing things the cloud native way isn't something a big company gets right the first go around.
>
> **[4:30](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=270)** Think of it like a lifestyle change.
>
> **[4:32](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=272)** Sometimes for New Year's resolution, you may form a new workout routine.
>
> **[4:38](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=278)** But it might slip through the cracks after a few months, especially if you're me, and this is exactly like big corporate projects or programs that happen each year.
>
> **[4:50](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=290)** So instead of using a New Year's resolution to dictate your workout routine, you want to make it a lifestyle change, and this is what enterprises must do as they embrace cloud native.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Microsoft Office|Office]] (2), [[Zoom]] (1), [[Probability]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** think of it like (1)
> **Speakers:** - [instructor] (1)

#### [High availability in the cloud](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=1)** - [Instructor] Get the fundamentals down, and the level of everything you do will rise.
>
> **[0:07](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=7)** A system can't be highly available if it has single points of failure.
>
> **[0:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=13)** To add color here, let's look at what would happen without redundancy in the case of something really important, like internet access.
>
> **[0:22](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=22)** Pre-cloud, most workforces were in the [[Microsoft Office|office]].
>
> **[0:26](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=26)** And that office accessed the internet through the corporate data center.
>
> **[0:31](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=31)** Physical switches, routers, and firewalls existed between the developer and the internet.
>
> **[0:38](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=38)** What if there was only one of each of these devices though?
>
> **[0:42](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=42)** This means that if something were to happen to any one of these devices, or the internet service provider had a hiccup, the developer would be without internet.
>
> **[0:52](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=52)** Even if one of these devices got taken out of circulation to get upgraded, this would be an outage scenario.
>
> **[1:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=60)** High availability is used to mitigate this scenario.
>
> **[1:05](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=65)** The enterprise would deploy two of everything, from the switches, all the way to the internet service providers.
>
> **[1:12](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=72)** By doing so, if any one device goes down, there is another device running that can carry the load.
>
> **[1:21](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=81)** Instead of thinking, in terms of deploying [[Hardware]] redundancy, the public cloud takes things up a notch with environmental redundancy as well.
>
> **[1:31](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=91)** In the public cloud, redundant data centers called availability zones are used when designing for high availability.
>
> **[1:40](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=100)** These zones exist in close proximity of each other and live inside a single cloud region.
>
> **[1:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=107)** These data centers are interconnected over dedicated and fully redundant metro fiber.
>
> **[1:54](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=114)** That means when the proverbial backhoe cuts a fiber, there is another one to take its place.
>
> **[2:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=121)** These connections offer high throughput and low latency networking between zones.
>
> **[2:07](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=127)** The performance is good enough to handle synchronous data replication between each zone.
>
> **[2:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=133)** Using additional zones offers a higher degree of availability than just a single data center.
>
> **[2:20](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=140)** Each availability zone has independent power, compute, networking, and any other function required to make it truly independent.
>
> **[2:31](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=151)** This means that all single points of failure for hardware or environmental issues like earthquakes and tornadoes are all accounted for.
>
> **[2:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=161)** Treat availability zones like you would've treated devices in the data center.
>
> **[2:46](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=166)** This means when in the past, you may have deployed two routers or two firewalls.
>
> **[2:52](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=172)** This now transitions to utilizing two availability zones.
>
> **[2:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=176)** Work with application teams to understand their availability requirements.
>
> **[3:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=183)** Some applications are not customer-facing, and may not have uptime requirements at all.
>
> **[3:08](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=188)** One availability zone may be fine here.
>
> **[3:11](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=191)** Once that uptime requirement hits 99% or greater though, then you need to incorporate at least two availability zones into the design.
>
> **[3:21](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=201)** Understanding cloud service-level agreements is critical, and should inform design decisions as well.
>
> **[3:30](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=210)** Cloud documentation will provide requirements for how constructs should be deployed to meet availability needs.
>
> **[3:39](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=219)** Make sure to follow these closely.
>
> **[3:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=221)** You will also want to pinpoint additional factors that may compound overall SLA.
>
> **[3:48](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=228)** This could include things outside of a given cloud provider.
>
> **[3:52](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=232)** Maybe the design is tiered hybrid, and requires access to data in the corporate data center.
>
> **[3:59](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=239)** Every area that underpins the application's availability should be considered here.
>
> **[4:06](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=246)** Lastly, always test against common failure scenarios and make sure you are getting the outcome you are expecting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2), [[Hardware]] (2)
> **CLI Commands:** make (3)
> **Definitions:** means that (2)
> **Env Vars:** sla (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Disaster recovery in the cloud](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=1)** - [Instructor] The only thing harder than planning for a disaster is explaining why you did not.
>
> **[0:08](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=8)** What happens when high availability isn't enough?
>
> **[0:11](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=11)** Well, this is exactly where disaster recovery comes in.
>
> **[0:16](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=16)** High availability means redundant components, while disaster recovery means independent copies of the whole system across different locations.
>
> **[0:28](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=28)** An easy way to think about this is high availability recovers from problems as the system is running, while disaster recovery mitigates system-wide failures.
>
> **[0:39](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=39)** There are two common metrics you will hear about when talking disaster recovery.
>
> **[0:46](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=46)** Recovery time objective, or RTO, is the point in time in the future at which the system will be available again.
>
> **[0:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=56)** For critical applications, this could be as little as 30 seconds, while non-production applications could be days.
>
> **[1:05](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=65)** Recovery point objective, or RPO, is the timeframe in the past to which you will recover.
>
> **[1:14](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=74)** RPO for critical [[Databases]] could be as little as 30 minutes to an hour, while non-essential databases could be as long as 24 hours.
>
> **[1:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=85)** To summarize, these metrics outline the length of time that your business can afford to be offline and how much data loss is acceptable.
>
> **[1:35](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=95)** Let's look at the two common ways DR gets facilitated for cloud workloads today.
>
> **[1:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=101)** The first and most common way that you see DR handled in the enterprise is active/passive.
>
> **[1:49](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=109)** Traffic is directed to the active region, which handles all the requests and load.
>
> **[1:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=116)** A complete or partially deployed passive region is ready to take on requests in the event of a system-wide failure.
>
> **[2:05](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=125)** If a full system failure occurs, traffic is shifted from the active region to the passive region.
>
> **[2:12](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=132)** This happens only when the system is ready and available.
>
> **[2:17](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=137)** Depending on the strategy, resources may have to be scaled up and data synchronized before the system is ready to actually accept requests.
>
> **[2:26](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=146)** When I think about YouTube, Netflix, Spotify, the first thing I think about is scale and performance.
>
> **[2:35](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=155)** No matter where I am, if I have good Wi-Fi or cell phone reception, these services just tend to work really well.
>
> **[2:44](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=164)** This is because they are actively serving requests and handling traffic from many different regions at the same time.
>
> **[2:53](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=173)** If, for some reason, a regional failure occurs, requests will shift to the closest alternate region.
>
> **[3:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=181)** To make this as seamless as possible for end [[User Experience (UX)|user experience]], data replicating across regions must be quick and reliable and local state must be reduced or eliminated.
>
> **[3:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=193)** If you are part of a big family, being able to get kids to school, work, sports means lots of time in the car.
>
> **[3:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=205)** What if you only had one car?
>
> **[3:27](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=207)** On the cost side, well, that's only one car.
>
> **[3:31](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=211)** But if that car breaks down, everyone's routines would get majorly impacted.
>
> **[3:37](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=217)** Let's keep this in mind when thinking about lower cost and significant downtime.
>
> **[3:43](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=223)** In the other corner, we have zero downtime.
>
> **[3:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=227)** What if this family had two cars, maybe three or four cars?
>
> **[3:53](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=233)** This would make it to where nobody's schedule gets interrupted.
>
> **[3:57](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=237)** Think of how much higher the cost would be, though.
>
> **[4:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=241)** On the side of active/passive, you have the option to keep spend at a minimum, but this comes at the cost of extending RTO and RPO.
>
> **[4:12](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=252)** In this scenario, you have a playbook that you must go through to spin up the entire system and an alternate region and restore from backups after a failure.
>
> **[4:24](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=264)** This option should only be used for non-critical or even non-production applications.
>
> **[4:30](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=270)** As applications require faster recovery, spend will begin to increase exponentially.
>
> **[4:37](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=277)** In a warm standby scenario, the system will already be running in an alternate region, but not at scale.
>
> **[4:44](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=284)** One of the great things about [[Cloud Computing]] is the elasticity of scaling resources on demand.
>
> **[4:51](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=291)** Once a failure happens in the active region, resources can be scaled to meet the demand of incoming requests in the passive region.
>
> **[5:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=301)** This reduces the time of recovery at the cost of running resources continuously.
>
> **[5:07](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=307)** In scenarios where zero downtime can be tolerated, we move to active/active.
>
> **[5:14](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=314)** This means the application is running in multiple regions at the capacity required to meet demand.
>
> **[5:21](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=321)** There is minimal data loss in this scenario, and if designed right, end users will experience zero to minimal impact when a problem occurs.
>
> **[5:31](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=331)** Another benefit of running active/active is user experience.
>
> **[5:37](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=337)** If your users are dispersed across the country, then they will access the application from the region in close proximity to them.
>
> **[5:46](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=346)** Less distance means better performance.
>
> **[5:50](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=350)** Of course, nothing is free, and this all comes at a cost.
>
> **[5:54](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=354)** Disaster recovery is easy to shrug off.
>
> **[5:57](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=357)** Don't make the mistake of waiting to act, though.
>
> **[6:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=361)** Planning is the hardest part.
>
> **[6:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=363)** Remember, when any design is being put together, even at like the whiteboard level, think of DR as part of that design, just like you think of network vendors or database types.
>
> **[6:16](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=376)** For a solid DR plan, you must understand the applications beyond a high-level design.
>
> **[6:22](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=382)** How many availability zones did the application reside in?
>
> **[6:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=385)** Does it even use multiple availability zones?
>
> **[6:28](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=388)** How is data synchronized across them and across regions?
>
> **[6:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=393)** Next, what are the business recovery objectives?
>
> **[6:37](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=397)** How much downtime or data loss is the business willing to accept?
>
> **[6:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=401)** The answer to this is usually zero until associated costs are presented.
>
> **[6:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=407)** Know what DR options are available to you, how to explain them, and what the cost associated with them is.
>
> **[6:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=416)** There is nothing more frustrating than proposing a design the product team or business isn't willing to pay for.
>
> **[7:04](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=424)** And lastly, how do you know DR will even work?
>
> **[7:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=429)** DR plans must be tested and not just once every few years.
>
> **[7:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=433)** Being able to test DR capabilities by simulating controlled outages is your assurance that the design works and will continue to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[User Experience (UX)|User experience]] (2), [[Cloud Computing]] (1)
> **Env Vars:** rpo (3), rto (2)
> **CLI Commands:** make (3)
> **Analogies:** just like (1)
> **Warnings:** don't make the mistake (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Capacity planning](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=0)** - [Instructor] What is [[Capacity Planning]]?
>
> **[0:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=3)** I like to break this down into three distinct categories, profiling, [[Forecasting]] and adapting.
>
> **[0:12](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=12)** Profiling identifies where the network is today by using tools and data, to understand things like bandwidth utilization, throughput, latency and packet loss.
>
> **[0:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=25)** Is performance optimal?
>
> **[0:27](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=27)** Are business outcomes being met?
>
> **[0:30](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=30)** Secondly, load will increase exponentially, especially on internet circuits in the data center.
>
> **[0:37](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=37)** It is important to forecast impact on existing infrastructure, so expanding capacity can be proactive and not reactive.
>
> **[0:49](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=49)** And lastly, you must adapt to demand by adding capacity.
>
> **[0:54](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=54)** In the cloud, there are methods of doing this elastically but where physical [[Hardware]] is involved, it can be tricky.
>
> **[1:02](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=62)** Having a repeatable process hammered out that automates as much as possible is recommended.
>
> **[1:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=69)** Capacity planning and execution has a direct impact on the network's ability to do high availability and disaster recovery, especially with cloud migrations.
>
> **[1:20](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=80)** As networking is often a shared utility across many things, this means there is a blast radius affecting many things whenever an outage or performance issue occurs.
>
> **[1:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=93)** So, your organization is going all in with cloud and applications are going through planning for migration.
>
> **[1:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=101)** What should you expect as it relates to capacity?
>
> **[1:45](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=105)** What should you watch out for?
>
> **[1:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=107)** The big task when doing migrations is making sure not to disrupt existing operations.
>
> **[1:55](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=115)** Let's take a simple example using your data center and the internet.
>
> **[2:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=121)** Chances are that your internet has inbound traffic today for various things like application hosting, remote workers and business to business connections.
>
> **[2:12](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=132)** Even more traffic is likely generated from outbound internet access and [[SaaS|software as a service]].
>
> **[2:20](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=140)** Now, let's look at a few potential bottlenecks here that could cause gigantic disruption to operations.
>
> **[2:28](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=148)** Internet is one of the primary methods of transport out of the data center.
>
> **[2:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=153)** Even with wide area network, the internet is an extremely popular underlay for software defined WAN solutions.
>
> **[2:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=161)** Upgrading capacity or installing additional circuits is a time consuming exercise, so understanding existing consumption prior to adding cloud migration traffic is critical.
>
> **[2:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=176)** A better alternative is not using the existing internet circuits for migrations at all.
>
> **[3:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=183)** Another big bottleneck tends to be stateful devices, like firewalls.
>
> **[3:08](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=188)** What is happening with traffic passing through the firewalls?
>
> **[3:12](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=192)** Does the firewall handle SSL VPN traffic?
>
> **[3:16](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=196)** Does it do threat prevention and additional application control?
>
> **[3:21](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=201)** Getting to cloud include some trial, error and learning opportunities.
>
> **[3:26](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=206)** You just don't want to take those learning opportunities out on your production network.
>
> **[3:32](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=212)** Say your circuit and hardware capacity are already a little high and a data migration takes place.
>
> **[3:40](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=220)** This could easily saturate the internet circuit or tip over the firewalls.
>
> **[3:45](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=225)** Avoid this at all costs.
>
> **[3:49](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=229)** Shared impact is never good.
>
> **[3:51](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=231)** Let's examine some ways that we can limit impact to production.
>
> **[3:57](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=237)** Instead of using your existing production internet circuits, it may make sense to separate cloud connectivity to minimize blast radius and optimize performance for high-velocity migrations.
>
> **[4:10](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=250)** Let's look at some additional options.
>
> **[4:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=253)** Installing additional internet or private Layer 2 circuits could help with large ongoing migrations.
>
> **[4:20](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=260)** Separating the hardware out would ensure that you don't tip over the existing production routers or firewalls and additional circuit capacity can be scoped out specifically for the migration strategy.
>
> **[4:35](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=275)** Using existing infrastructure can be risky.
>
> **[4:39](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=279)** If you have established good monitoring and have current and historical data to forecast growth and you have precise migration data, so you know what you're working with by the numbers, this may be an option.
>
> **[4:55](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=295)** If in doubt, though, it is always better to not disrupt the current state of the production network.
>
> **[5:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=303)** A good first alternative is adding additional internet capacity.
>
> **[5:07](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=307)** Dedicated access isn't shared with other customers like general consumer internet, and will come in significantly cheaper than [[Multiprotocol Label Switching (MPLS)|MPLS]] alternatives.
>
> **[5:19](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=319)** If you're already using SD-WAN, this option has a lot of benefits.
>
> **[5:24](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=324)** You can also set up private Layer 2 circuits from your data center to the on-ramp facilities where your private connections to cloud exist.
>
> **[5:35](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=335)** This would offer a direct link between two endpoints and would come with either protected or unprotected options.
>
> **[5:43](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=343)** When making this decision, think about, do you need multiple paths into each data center?
>
> **[5:51](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=351)** Does the protected path apply at the building demarc?
>
> **[5:55](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=355)** And, what ability if any, exists to audit or retrieve data from the carrier routers?
>
> **[6:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=363)** And with additional circuits, you will want to repurpose or procure additional network and security hardware to terminate, filter and secure the traffic.
>
> **[6:14](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=374)** And lastly, gathering data through testing is critical.
>
> **[6:20](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=380)** What is the expectations of the network when operating is designed?
>
> **[6:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=385)** Gathering critical metrics, like bandwidth, throughput, latency, and jitter are a must.
>
> **[6:32](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=392)** Then you can build performance and capacity baselines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (4), [[Capacity Planning]] (2), [[Forecasting]] (1), [[SaaS|Software as a service]] (1), [[Multiprotocol Label Switching (MPLS)|Mpls]] (1)
> **Env Vars:** wan (2), ssl (1), vpn (1), mpls (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Warnings:** watch out (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Network segmentation](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=1)** - [Narrator] This may seem like a simple concept but once it's in place, it is really hard to change, and a lot of times you may end up having to work around it.
>
> **[0:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=13)** So what is segmentation exactly?
>
> **[0:16](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=16)** It is simply the breaking down of networks into smaller networks.
>
> **[0:22](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=22)** This can improve performance and security and gives teams the ability to apply unique security controls and services to each of these smaller networks.
>
> **[0:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=33)** Network segmentation usually happens on a combination of network devices, firewalls and software.
>
> **[0:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=41)** Think security in depth, where you have multiple layers that work together to safeguard your assets.
>
> **[0:50](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=50)** The first type of segmentation we're going to look at is macro segmentation, this is traditionally geared towards north-south communication and it's pretty high level.
>
> **[1:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=63)** So at the top we have the business, now the business may be acquisition heavy or maybe separate lines of business need to operate autonomously.
>
> **[1:16](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=76)** Applications usually have separation across environments like dev and prod or maybe the business is in a highly regulated industry and needs to isolate protected data from the top.
>
> **[1:29](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=89)** These are all good fits for macro segmentation, the next type is micro segmentation and this is going to get more granular.
>
> **[1:40](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=100)** This operates east-west and takes us down to the components of the application.
>
> **[1:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=107)** Well thought out macro segmentation creates a really good foundation for effective micro segmentation.
>
> **[1:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=116)** It is important not to over complicate segmentation especially in the network.
>
> **[2:02](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=122)** Try to keep things as simple as possible while still meeting real business requirements.
>
> **[2:10](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=130)** Let's look at healthcare in the United States which deals with protected data as an example.
>
> **[2:17](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=137)** To meet regulatory and compliance requirements, safeguards must exist for protected data that gets created, used, stored or transmitted.
>
> **[2:29](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=149)** A common approach for segmentation follows a business' organizational structure.
>
> **[2:36](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=156)** At the top you have a business unit which may be a segment and then each team inside a business unit will be segmented as well, as we keep going down the hierarchy we get to the applications that the teams built.
>
> **[2:52](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=172)** Now, some of the applications in the healthcare market will interact with protected data while some may not touch it at all, so it is important that segmentation happens here too.
>
> **[3:05](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=185)** What happens though when you factor in multiple business units that contain many teams in growing services?
>
> **[3:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=193)** How should segmentation be approached?
>
> **[3:17](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=197)** When it was just one business unit and one team it was really small and it wasn't really that hard to manage, especially when cloud adoption and migrations happen, how do you begin to deal with the sprawl?
>
> **[3:30](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=210)** And with compartmentalize services possibly requiring access to protected data, how do you ensure the right security policies are in place for this data across all business units, teams and applications?
>
> **[3:46](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=226)** Instead of thinking of segmentation hierarchically what about thinking of it by [[Data Classification]]?
>
> **[3:54](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=234)** A macro segment for all applications that interact with protected data would reduce the number of segments you manage and give you the ability to enforce safeguards from the top down.
>
> **[4:07](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=247)** And having an alternate segment used for applications that don't really need to touch protected data would give those teams the ability to push out changes at a higher velocity as they're not slowed down by the more stringent policies of safeguarding protected data.
>
> **[4:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=265)** This solves the problem of what is most important to the business and that's keeping that crucial, protected data safe.
>
> **[4:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=273)** Segmentation usually comes from security focused requirements, make sure to understand these requirements and that they are legitimate.
>
> **[4:43](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=283)** The last thing you want to do is over segment your network based on opinions and not real business backed requirements.
>
> **[4:51](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=291)** Where do the resources exist and how many of them are there?
>
> **[4:56](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=296)** How are they going to grow?
>
> **[4:57](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=297)** Make sure to understand the radius of resources you plan to segment.
>
> **[5:03](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=303)** Can these resources egress to the internet directly?
>
> **[5:06](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=306)** Are they being accessed by something over the internet?
>
> **[5:10](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=310)** Understanding how internet is involved here is absolutely critical.
>
> **[5:16](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=316)** Will new segmentation affect traffic flows?
>
> **[5:20](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=320)** If traffic is going to an additional firewall or third party product, are there performance implications that need to be considered?
>
> **[5:29](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=329)** And lastly, is the technology you have in place today able to solve the problem or is a new solution required?
>
> **[5:38](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=338)** Keep these questions in mind as you plan out your own segmentation strategy, more importantly, think of the critical assets your business needs to safeguard, how does the strategy you have in place today or the new strategy you are proposing, impact them?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Classification]] (1)
> **CLI Commands:** make (2)
> **Best Practices:** make sure to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Moving forward with your hybrid multicloud networking](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=1)** - [Instructor] We made it.
>
> **[0:02](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=2)** Thank you for joining this course and I trust you're leaving with valuable knowledge that will give you an edge in the multi-cloud networking space.
>
> **[0:12](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=12)** You should be walking away with a grounded understanding of cloud networking in the business and how they intersect to enable transformation.
>
> **[0:25](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=25)** From a technical standpoint we covered various cloud network solutions, how they were architected and we broke down their trade offs in detail so we could easily map them to business capabilities.
>
> **[0:41](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=41)** And all along the way, we introduce different pieces of strategy and culture that make it all possible.
>
> **[0:48](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=48)** So what comes next?
>
> **[0:52](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=52)** If you are new to the cloud, I would encourage you to take advantage of the free tier on one of the cloud service providers and experiment, learn the basics and just get hands on.
>
> **[1:06](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=66)** For deeper dives into the technology itself, each major cloud provider has a certification focused on the way they do networking.
>
> **[1:17](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=77)** These include AWS Certified Advanced Networking Specialty, Designing and Implementing [[Microsoft Azure]] Network Solutions and [[Google]]'s Professional Cloud Network Engineer.
>
> **[1:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=93)** While getting the certification is the goal, just going through the material for the purpose of gaining additional knowledge has its benefits as well.
>
> **[1:43](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=103)** Public cloud consumption keeps growing and professionals with knowledge and skills here have a tremendous opportunity to move into more advanced roles to drive their business into the future.
>
> **[1:58](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=118)** If you're a networking professional, why wait?
>
> **[2:02](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=122)** Get ahead of the curve and be the one that brings the new ideas to the table.
>
> **[2:08](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=128)** Good luck and happy networking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure]] (1), [[Google]] (1)
> **CLI Commands:** make (1), aws (1)
> **Env Vars:** aws (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[William Collins]]

## Skills Covered

- Hybrid Cloud

## Path Context

### In [[Network Automation Professional Certificate by Arista Networks]]
← [[NetOps (DevOps for Network Engineers)- Automating Networks]] | **5 of 6** | [[Terraform- Managing Network Infrastructure]] →

## Part of

- [[Network Automation Professional Certificate by Arista Networks]]

## Appears In

- [[Network Automation Professional Certificate by Arista Networks]]

## Related Courses

_Courses sharing skills:_

- [[Cloud Concepts- Hybrid Cloud]] — Hybrid Cloud

---

[↑ Back to top](#)