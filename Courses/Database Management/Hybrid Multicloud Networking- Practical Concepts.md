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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/bringing-hybrid-multicloud-networking-to-the-real-world?u=76281980&t=0)** - The Flexera State of the Cloud Report highlights that 93% of enterprises have a multicloud strategy today. This number tells a story and more importantly, it creates an opportunity for cloud professionals and leaders to modernize their skillset and [[Lead Change]]. Well-designed networks create a reliable foundation for cloud adoption. In this course, you will gain the skills necessary to plan your organization's network for the cloud era. You will also gain insight into how technology intersects with the business and how you as an individual have the power to influence the culture beyond yourself and your team. My name is William Collins and I've guided many large organizations through cloud adoption and [[Digital Transformation]]. Today I work as a principle cloud architect for a network startup called Alkira. Come join me on this journey where we're going to bring hybrid multicloud networking to the real world. And as we go through this content remember to try to make connections between your existing technology stack and some of these new ideas that we're going to introduce and it's okay to come out of your comfort zone. The important part here is extracting as much business value as possible from our cloud and our network strategies.

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
> **[0:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=0)** - [Instructor] Building a strategy for migrating applications to the public cloud is a lot like building a house. Applications and homes are often built using [[Design Patterns]]. When we're exploring cloud migration strategies, the first thing we want to think through is design patterns. These create repeatable solutions to commonly occurring problems. With home construction, a builder can produce hundreds of homes all from a single floor plan. These plans are scaled but simple drawings showing room placement, doors, [[Windows]], and major fixtures. In the software world, developers build software from patterns also, but instead of floor plans, they use high level designs. These designs provide a bird's eye view of the software and requirements. To support and scale the software, patterns can be defined for infrastructure also. Finding patterns leads to repeatability, and that is a huge part of successful automation. When building [[Infrastructure as code (IaC)|infrastructure as code]] especially, having a golden standard for the infrastructure that supports your applications speeds up development cycles and even leads to more effective disaster recovery. Enterprise environments can have a variety of applications and designs. This number is usually higher for larger enterprises
>
> **[1:34](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=94)** that have been around for a while. Maybe growth has occurred through acquisitions and additional lines of business being added over time, which may have accelerated the growth of different applications and patterns. Before the first application gets migrated, it is critical to survey the existing application landscape. As applications are evaluated, they can then be placed into the appropriate strategy and make their way through the migration factory. Okay, so let's break down some of the common strategies that you will use when migrating applications to the cloud. The first strategy we will look at is rehosting, which migrates the application as is to the cloud. This strategy is faster as it requires less planning upfront, and no major changes are made to the data store, operating system or application code. You may have heard this referred to also as lift and shift. Although this strategy may be faster, you don't reap many of the benefits inherent with [[Cloud-Native Architecture]]. Next on the list is replatforming. Like rehost, this strategy doesn't make major changes to the application, but does seek to optimize by taking advantage of certain cloud-native features. A common example of this in the real world is transitioning your database
>
> **[3:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/exploring-cloud-migration-strategies?u=76281980&t=189)** to a [[PaaS|platform as a service]] offering like Amazon's RDS, [[Microsoft Azure|Azure]] [[SQL]] or [[Google Cloud Platform (GCP)|Google Cloud]] SQL. This can significantly reduce management overhead and open up the door for easier cross-region replication. Going beyond rehost and replatform means rethinking the entire architecture and refactoring using cloud-native patterns and features. Here, we would see a complete redesign from top to bottom of the application. This includes the transitioning to practices like infrastructure as code for release management. Lastly, what happens when parts of your application portfolio aren't ready for cloud, may not get migrated or a decision just can't be made based on the data available at that time? Under these circumstances, it makes sense to retain these assets on-premises. In some cases, a decision may be made to let these assets sunset and eventually retire them in the future.

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
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=1)** - [Instructor] Sometimes breaking down tasks into smaller pieces simplifies the intake of work. Enterprises usually have an intake process where they define, prioritize, and complete tasks. The intake process for new [[Microsoft Products|products]] and applications didn't change much in the years that I worked in large enterprise, specifically after cloud disrupted the industry. It generally worked something like this. The business would want to release a new product most likely utilizing the cloud. A deadline is set. Let's say eight months for this example. The business goes through an intake process. Outcomes are defined, and developers begin to build. Before they get very far, though, they need infrastructure to host the new product. This will require them to work across various infrastructure teams. They will also need guidance from the relevant infrastructure teams on process, design, and configuration of the infrastructure. To further complicate things, progress is usually a little bit behind and expedited timelines are imposed to try to get things back on track. This generally leads to mounting pressure on infrastructure teams to deliver faster than their staffing and skillset may allow. Traditional infrastructure teams will often plan based
>
> **[1:35](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=95)** on detailed requirements provided by development teams. These details usually get provided upfront, and then the various teams will work on delivering the requirements by the established deadline. Requirements could look something like this. With many hybrid designs, network teams will have to facilitate connectivity to on-premises networks where applications may live. They will also be tasked with network design facilitating critical elements like disaster recovery. Security teams will complete a risk profile, and then they're going to validate least privilege access as being provided and may want to understand how encryption is being handled for data in transit and at [[Representational State Transfer (REST)|rest]]. Compute teams will need to work out the virtual machine image build process and then how to provision it and also routine maintenance like patching. Cloud-focused teams will bring together the various architectures into an operational environment that the applications can run on. While this may look like a sound approach, siloed teams with long feedback cycles can often lead to fragmented delivery of an architecture that may not meet requirements. This can cause further delays to the overall timeline. Have you ever put together a giant [[Jigsaw]] puzzle? I recently took on this task with my six year old,
>
> **[3:11](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=191)** and you have to admire his optimism here. Pieces get dumped everywhere, and immediately all energy is channeled in trying to mash the right pieces in the right places. This is a great teaching opportunity and how tasks, when broken up into small, independent pieces, can create a beautiful picture. With this puzzle, if we flip all the pieces picture side up, it gives us a common surface area to work from. Then we can each branch out into separate tasks. My son can locate all the edge pieces to create a border. That's his favorite part. And I can start sorting other pieces by color or other identifiable attributes. Now, for the home stretch, where we can combine our efforts and assemble the remainder of the puzzle together. While this example doesn't relate specifically to networking or cloud, it does articulate the thinking process we can apply to the earlier hypothetical intake process. Finding out what doesn't work quicker can save a ton of time and allow you to focus on quality earlier in the process. You can think of this as failing fast. What if we approach delivering infrastructure with the same principles that we built the puzzle with? Let's compare the traditional mindset with some changes that incorporate fail-fast thinking.
>
> **[4:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/starting-small-and-failing-fast?u=76281980&t=287)** With a traditional approach, we gather requirements, we plan, deliver, and then at the end we gather feedback. The fail-fast approach looks a little bit different. While we still gather requirements and get feedback, we approach doing it in a different, yet more effective way. The important lesson here is feedback. Instead of delivering the entire product and gathering feedback at the finish line, we want to deliver small, testable components and gather feedback on them consistently throughout the whole process. It is impossible to plan for every possible behavior and outcome ahead of delivery time without doing any building, testing, and feedback analysis.

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
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=1)** - [Instructor] Individually, we are one drop. Together, we are an ocean. Zooming out can provide valuable perspective. As network practitioners, it can be easy to zone in specifically on the technical aspects of the job. The network is where critical applications, systems, and data intersect. And each one of these technologies has a dedicated team standing behind it. Application teams lean heavily on network database and systems teams for guidance on making their software high performing and scalable. Database teams will rely on application and network teams to work out the mechanics of availability, consistency, and fault tolerance. System teams require specific details from application teams surrounding architecture, and will likely build upon those details as they go back and talk network requirements. Security is tightly integrated into each aspect of the design. Data encryption, ingress and egress network flows, secrets management, and how the application is patterned are just a few examples. FinOps, a cross between [[DevOps]] and finance is evolving to take control and bring [[Accountability]] to cloud spend. As we can see, all these technologies and teams
>
> **[1:34](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=94)** cross the network. This means that collaboration in the era of cloud is critical for success. Getting things tested early on and with the right level of team engagement means shifting left. Let's examine further. When an enterprise is planning to modernize their technology stack with the cloud, cloud leaders define business outcomes and a program or initiative that is strategic is formed. This stage often happens at the executive level, and doesn't usually have involvement from technical practitioners. The focus here stays on outcomes. For this example, let's refer to it as define. Understanding the desired business outcomes along with how success will be measured plays a big part in the success of subsequent exercises. The design phase comes next. This is where things begin getting tactical. Sometimes, network practitioners get brought in here. In this phase, you will see scoping and deliverables defined, along with sorting out which team will do what. Sometimes, a team will not be able to begin working because of cross team dependencies. These must get sorted out as soon as possible. The last phase is deployment. Technical teams begin building, configuring, and operationalizing the design.
>
> **[3:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=189)** If there was a missed requirement, or a team was brought in too late, it could potentially halt progress for many teams and delay the entire program. Network involvement at this stage is far too late. Given the current supply chain crisis, [[Hardware]] scarcity, and circuit lead times just in general, network practitioners should be brought in as early on as possible. Shifting left and bringing the right network experience for planning and testing will enable an organization to fail fast and get in front of setbacks that could otherwise cost months in delays. Sometimes figuring out how to get other teams to involve networking sooner isn't so easy. Here are some quick wins that can help you get started with making networking a team sport inside your organization. If you learn about cross functional teams, this gives you tremendous insight from a different vantage point. Also, if teams know you're eager to learn more about them, they may share more. This is a great way to break the ice and begin building a long-lasting relationship that leads to better collaboration overall. What can the network even do? How can other teams interact with or make changes to the network? What about a lunch and learn with a live screen share
>
> **[4:42](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/cloud-networking-is-a-team-sport?u=76281980&t=282)** as you configure BGP, or look at route advertisements, and, oh, maybe troubleshoot a common fault scenario. Find ways to champion the network and give other teams an opportunity to learn more. And the best way to make something better is through feedback. Embrace that feedback as an ally, and make it easy for teams in leadership to provide it. And most importantly, take action.

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
> **[0:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=0)** - [Instructor] "By failing to prepare, you are preparing to fail." You can use the following as guiding principles as you rethink future designs. Simple is easier to understand, deploy, migrate, and operate. Keep the design as simple as possible while still meeting the requirements. Chances are new deliverables are going to be coming your way and this design is going to evolve. Think about how that evolution will happen ahead of time. An example could be route summarization or [[IP Addressing]] schemes used for cloud networking and workloads. Think through the design's ability to be integrated with other [[Microsoft Products|products]] and services. Net [[DevOps]] culture has ushered in a new delivery method for networking using CICD pipelines and provisioning tools like [[Terraform]]. No matter the tool though, extensibility in the network is valuable. There are always ways to optimize. Sometimes coming back to work, you completed a few months prior gives you a completely fresh perspective and this can lead to future improvement. To demonstrate how to plan for change, let's look at an example, using IP addressing for the cloud. The organization you work for wants to modernize their technology stack using the public cloud.
>
> **[1:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=93)** As part of this initiative, several applications are slated to get migrated to AWS over the following 16 months. The cloud team needs to set up a VPC and is requesting an IP block. Let's say a /19 or approximately 8,000 addresses. Now you could simply find the next available /19 in your IP address management tool and say, here you go. But let's think about this further. Remember, take advantage of any opportunity you have to plan ahead. This makes life easier in the future. Let's imagine that a few months later the applications living in this VPC need to be available or scale across another region. Disaster recovery is a common driver for this scenario and is best to think about upfront. Splitting up that /19 that you assigned to the VPC in Region A is not possible as it would require an outage and possibly re-IP-addressing some resources. As cloud consumption and maturity grows additional regions and even additional clouds will likely be added to the overall design. How do we use this request as an opportunity to limit future rework? Another way this request could be approached is by allocating a larger block of contiguous space to account for future growth.
>
> **[3:11](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=191)** Let's say for this example, we allocate a /16. This solves the immediate request of allocating a /19, but it also provides the building blocks for onboarding future cloud networks. Now, when additional VPCs need to be provisioned and IP space is requested, we can simply assign the next available /19. And this process will also serve us well if we expand two additional cloud providers. Since we reserve contiguous space, we don't have to contend with overlap, which is critical when taking on migrations or enabling communications across VPCs, clouds and on-premises environments. Also, we reduce route table entries and create better opportunities for summarization. With cloud transformation initiatives there will be many opportunities to identify patterns. Take advantage of these opportunities when they arise. This will give you an edge and highlight your ability to think outside of the box with bigger picture tasks. Automation is a major imperative for organizations navigating cloud transformation. Establishing patterns is the first step towards standardization and policy-driven automation. You can buy any platform or tool to handle automation
>
> **[4:44](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/building-for-the-future?u=76281980&t=284)** but unless you have real standards in policy backing it you may be creating more work for yourself or worse, you could experience unpredictable outages. Operational teams are many times the heroes in outage scenarios. We owe it to the operations teams out there to create environments that are easier to support. This also works in the engineer or architect's favor as well because it leads to fewer 3:00 am escalation phone calls.

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
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=1)** - [Instructor] Before we jump into solutions, let's outline the problems that these technologies aim to solve. The first and more obvious problem is the networking required to connect on-premises networks to one or more public clouds. This may seem simple on the surface, but as we dive into possible solutions, the trade offs become more pronounced. Networking inside the cloud is the second problem. Being able to maintain control of network policy, security, inside the public cloud provider itself, along with gaining the necessary observability and governance required for long term operational success. Now, let's dig into the options. The first option is setting up a site to site VPN between your private network and the public cloud. This method uses the internet as transport and traffic traversing the network is encrypted by a customer gateway and then decrypted by the target gateway in the cloud. This is usually the first option an enterprise will try out when connecting to cloud and can also serve as a handy backup if needed. The second option is procuring a private direct connection. This extends on-premises networking to a public cloud provider region over a highly available and low latency connection. These connections
>
> **[1:34](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=94)** provide additional reliability and performance and are backed by service level agreements that you can't take advantage of when using the public internet. Direct connections can become necessary when VPNs fail to meet performance, high availability and capacity requirements. This is usually a factor when cloud goes beyond being a science project. Software-defined cloud interconnect. Now that's a mouthful. We can call it SDCI for short. This solution leverages dispersed points of presence that enterprises can use to build private, reliable networking to and between sites, data centers, and clouds. You can think of SDCI as a specialized platform that integrates direct connections to [[IaaS|infrastructure as a service]] providers with SD-WAN, VPN services and many other partner integrations. Since SDCI providers are deploying global, high capacity networks in proximity to cloud regions, this allows for easier scale as you grow with the cloud. This becomes a viable option when network teams look to unify design and operations while transitioning to a more on demand approach to provisioning. And the last option is cloud network software.
>
> **[3:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=189)** While our first three options provide some of the same functionality of getting you to the cloud, cloud network software aims to fill gaps by addressing networking inside the cloud. These [[Microsoft Products|products]] bring the ability to engineer, deploy, and operate a consistent network inside and across multiple cloud providers. This includes building consistent policy, security and governance, while making day to operations more streamlined as multi-cloud deployments become more common. As your business approaches a mature cloud operating model, maintaining control of the entire network becomes critical. Networking inside the cloud can become complex, especially when you add multiple clouds to the mix. This is where cloud network software's value shines. And remember, there is no one size fits all here. Every organization will have different use cases and will be at a different stage of the cloud journey. Prior to choosing or upgrading a solution, there are a few things worth considering. The first of which is speed. You're most likely on a timeline. Procurement should be a consideration throughout the process. Things like procuring network [[Hardware]] or even deploying new circuits can add months to the process. With the current supply chain crisis, the time it takes to procure physical hardware
>
> **[4:44](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=284)** keeps changing and is often growing. Expense is another important factor. No surprise here. Operating expenditure or OPEX immediately hits your income statement while capital expenditure or CAPEX, gets capitalized or notched as an asset. This means it hits your income statement as depreciation over a period of time. Being cost aware for each of the approaches we outlined should be top of mind. How much of the solution is CAPEX and how much is OPEX? Does the business prefer one over the other? How will cost be allocated to the appropriate lines of business or teams that consume more resources? And what could be more important than supportability? Remembering our friends in operations here. The ability for internal operations teams to identify problems, fix them or escalate to the appropriate place is imperative. When the network is not performing good, it gets noticed and has a gigantic impact on customers and internal employees trying to do their work. [[User Experience (UX)|User experience]] has taken center stage in the cloud era. Having a quality product that has the capacity to scale as demand increases can make or break that experience, meaning that a customer could possibly leave for a competing product. Likewise, being able to decrease capacity
>
> **[6:18](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/overview-of-hybrid-multicloud-networking-options?u=76281980&t=378)** as demand subsides is equally important. Being able to recover from network failures seamlessly without the customer noticing a problem even occurred should be the north star here. And lastly, having flexibility to change can solidify your ability to compete in the future. As your business evolves, so must the network that serves you. Being able to change as markets change will keep your business competitive. This means being able to integrate old and new solutions together. Many times, solutions tend to stick around for awhile. You can't just flip a switch and, you know, poof, you know, magically move to a different vendor or another solution. Having a reliable integration between solutions can meet you where you are today and get you where you need to go in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[IaaS|Infrastructure as a service]] (1), [[Microsoft Products|Products]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** sdci (3), vpn (2), opex (2), capex (2), wan (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Virtual private networks](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=1)** - [Instructor] Before going any further, let's examine the following definitions. The on-premises network you want to connect will have a gateway. This is usually a physical device or software appliance that handles the customer side of the VPN tunnel and controls [[Routing]] advertisements coming in and going out of the customer network. The target gateway is the other side of the connection. This is usually a cloud endpoint that gets attached to the cloud network. VPN tunnels work the same way for cloud as they do everywhere else. It is an encrypted link between two networks. Let's dig in further on how we can set up VPNs to the cloud. Starting off, we have our on-premises network that we want to connect. This will usually be the existing data centers and enterprise has built on over time where most of the applications live today. And then we have the cloud we need to connect to. Our on-premises network contains our customer gateway, and the target gateway is in the cloud. And big disclaimer here. This is a very simple example, and only gets more complicated is additional regions in clouds are onboarded. Our underlying transport in this scenario is the internet, and the VPN serves as an overlay, creating a secure and encrypted connection.
>
> **[1:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=93)** Site-to-site VPN supports internet protocol security, or IPsec, for VPN connections. This happens in two phases. Phase one is used to protect internet key exchange messages. And phase two is used to protect IP traffic. Customer gateways are in a minimum deployed in pairs. It is best to have these devices set up in such a way to avoid single points of failure, which would take down both connections in an outage scenario. This also creates an opportunity to upgrade code or perform maintenance on one of the gateways while keeping the connection up in passing traffic. The target gateway sits at the edge of the cloud network and is a fully redundant function. Multiple tunnel endpoints will terminate this side of the connection. The cloud network or VPC that you created can then be associated with the cloud gateway. Now, we have an end-to-end connection using a site-to-site VPN from our on-premises or A side network to our cloud, or Z side network. The last step is getting routing in order. It is always recommended to use dynamic routing when connecting to cloud. Border gateway protocol or BGP is the standard here, and the one that is supported by the cloud providers today. Both customer gateways should advertise the same routes
>
> **[3:10](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=190)** to the target gateway. Additionally, routes need to be imported and filtered into the customer network from the cloud. Changes in the network topology will automatically get propagated to the peer network by BGP. Now that our VPN tunnel is up and we are exchanging routes, and I'm starting to get kind of excited here. Resources in our on-premises network can now communicate to resources in our cloud network securely. Let's examine some of the trade offs with using a site-to-site VPN. On the pros side, VPNs are at least in the beginning the quickest way to get connected to cloud. Upfront cost is minimal, especially if no additional [[Hardware]] or internet circuits need to be set up. And chances are the enterprise you work for already has a process in place to request a VPN. And lastly, traffic is encrypted. This keeps the folks over in security pretty happy, at least initially. On the con side, using the public internet means limitations with service level agreements. Also, design complexity is likely to increase exponentially as you scale. Bandwidth and latency will fluctuate more using the internet as transport. And VPNs are very resource intensive on hardware,
>
> **[4:45](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/virtual-private-networks?u=76281980&t=285)** and using the internet for all cloud traffic adds significant circuit load. As you grow, this can offset that minimal upfront cost we talked about in the pros column.

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
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=1)** - [Instructor] So, the internet VPN isn't meeting requirements and we want to take things up a notch. Let's take a look at private connections. There are two directions you can go when setting up a private connection, and it's important to understand the differences here, so you can make the best decision for your use case. Dedicated connections are physical ports that get provisioned in a cloud on-ramp facility, like Equinix or Megaport. Ports can be provisioned. It speeds anywhere from one to 100 gigabits per second, and all of this is dedicated to you, meaning you don't have to share with any other customers. Hosted connections, on the other hand, already have the physical port set up to the cloud provider edge and a virtual circuit is provisioned on top of that. Multiple customers share the physical aspect of hosted connections as capacity allows, and speeds can range anywhere from 50 megabits per second to 10 gigabits per second. Now, before we go any further, I want to take a moment to touch on the terminology that cloud providers use. Up until this point, I've used pretty generic lingo, but I want to highlight that each cloud provider tends to have their own set of definitions for things that may provide a similar function. For example,
>
> **[1:34](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=94)** [[Amazon Web Services (AWS)|Amazon Web Services]] calls their network a virtual private cloud or VPC. Their private connection service is called Direct Connect and they use a combination of three different gateway types to allow traffic to privately route in and out of a VPC while handling the necessary attachments. [[Microsoft Azure]] calls their network a virtual network, or VNet for short. Their private connection surface is called ExpressRoute, and a VNet Gateway is their logical [[Routing]] function for forwarding traffic on a private connection. [[Google Cloud Platform (GCP)|Google Cloud Platform]], like AWS, uses virtual private cloud as their network name. Their connection service is called Interconnect and they use their cloud routers to handle routing between the VPC and customer edge device. Last on the list is Oracle [[Cloud Infrastructure]], or OCI for short. OCI uses the name virtual cloud network or VCN. Their connection service is called FastConnect and they use Dynamic Routing Gateways or DRGs to route traffic between the VCN and your on-premises networks. As you can see, a network is not simply a network across clouds. The behavior will be pretty close, but not identical. Let's [[Zoom]] in on dedicated connections.
>
> **[3:08](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=188)** Dedicated connections to the public cloud are usually set up in a co-location or carrier-neutral data center. These operate independently of telecom or network vendors, giving them extensive opportunities for partnerships. This means that you, the customer, get a diverse range of possibilities for interconnection under a single roof. The first step in establishing a dedicated connection is permission. You must submit a request to your cloud service provider and download a Letter of Authorization and Connecting Facility Assignment. Let's call that LOA for short. This documentation gives the data center staff at the carrier-neutral facility permission to access the necessary network rack, along with instructions on the port assignments. Next, you must submit the requests for completing the work. This is called a cross connect, and it will consist of the data center staff connecting the A side and Z side using single-mode fiber. Additionally, you will have to provide instruction on doing the patching to your network gear using the necessary fiber optics. And last is configuration. The 802.1Q VLAN tag you provided on the previous request must be configured on your side for Layer 2.
>
> **[4:44](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=284)** Once Layer 2 is confirmed good, you can then configure BGP with the appropriate authentication. Once these BGP peers have reachability, routes can be exchanged. Now, on the hosted connections. For hosted or partner connections, you work with a service provider directly. Since the service provider will already have the physical infrastructure set up connecting to the cloud provider edge, no LOA is required. Let's examine a somewhat common scenario to understand hosted connections better. Let's say your business connects offices together with a service provider's [[Multiprotocol Label Switching (MPLS)|MPLS]] network. A new requirement comes down the pipeline and a connection to a public cloud provider is needed. And as it turns out, the service provider being used for MPLS is also an approved partner with the cloud you need to connect to. As the customer, you can simply work with the service provider to provision a virtual circuit and then set up the appropriate route policy on the customer and cloud side. All the work required to set this up is done via the service provider portal. Doesn't require the customer to set up any work orders for physical gear or anything else in a carrier-neutral facility. So instead of having a dedicated connection between your network and the cloud provider,
>
> **[6:19](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/private-connections?u=76281980&t=379)** the partner connection will be facilitated by a service provider in the middle. The connection between the service provider and the cloud will also be shared across additional customers as capacity allows. What are some of the major trade-offs to consider when looking at dedicated and hosted connections? Hosted connections do share a port across customers, while dedicated connections are used by one customer only. Hosted connections are quicker to set up. This time will depend on how quick the cloud provider side provisioning happens, but shouldn't be longer than 30 minutes. And hosted connections will be in operational expenditure while dedicated connections will have some capital expenditure involved. This could include the cost of the cross connect and any network gear, optics, or other [[Hardware]] required to terminate the connection. And hosted connection speeds will range anywhere from 512 megabits per second to 10 gigabits per second, while dedicated connections will get you one gigabit, 10 gigabit, or 100 gigabits per second.

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
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=1)** - [Instructor] Things are picking up fast. Cloud has grown beyond our wildest imaginations, and now we need to think bigger picture in terms of our entire network. When going through a major technology shift in how you solve business problems, new use cases are going to continue popping up. In this case, cloud disruption creates major waves with how traffic flows work historically. SDCI or software defined cloud interconnect brings new features to the table to help meet these use cases with flying colors. Let's examine some attributes of the network prior to SDCI. This should set us on some solid ground as we work our way through some of the use cases. For a very long time, the enterprise data center has been the center of the universe. This is where all the applications live and where critical network services are landed. Sites have private connectivity back to the data center to reach critical services like internet, DNS, authentication, you name it. Even a single site needing reachability to another site would first traverse back through the data center to get there. And then, cloud comes along, and with it, a completely new way of doing things. Many large enterprises attempted to treat cloud just like their other sites, and attach it back to the center of their universe. And it becomes clear very quickly
>
> **[1:37](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=97)** that this isn't going to work. It has numerous inefficiencies, which lead to performance, reliability, and scaling problems. To make the future successful, a shift in thinking needs to happen here. The data center can no longer be the center of the universe. Let's examine some of the use cases for SDCI. The first use case is connecting to the cloud. The SDCI platform is going to be driven through a portal or APIs, and can spin up connections to a multitude of infrastructure providers, including public cloud and various [[SaaS|Software as a Service]] platforms. This happens fast, and it can be automated through modern [[Infrastructure as code (IaC)|infrastructure as code]] tools like [[Terraform]]. The second use case is really optimizing how our existing data centers and sites communicate with each other. If we can provision, manage and monitor them through this SDCI platform as well, not only does that give us better performance and capability to scale, but it also enhances our ability to observe and troubleshoot when something goes down. Now that we have ironed out our site to site communication, we have to set up connectivity from those sites to the cloud. We want this connectivity to be fast. We want it to be reliable, but we don't want it to break the bank. The SDCI platform can help us out here.
>
> **[3:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/software-defined-cloud-interconnect-sdci?u=76281980&t=193)** Next, we need to ensure reliability and performance when connecting to our critical services. This could be anything from internet, DNS, [[Active Directory]], or any other shared services used internally. Now, zooming out quite a bit and looking at this diagram right here, we can see this SDCI platform is interconnecting all our critical network infrastructure. Instead of revolving around our existing data center, we are modernizing our network to enable the business, and give us an advantage for being able to deliver on future objectives.

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
> **[0:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=0)** - [Instructor] Multicloud is becoming more common. One of the big drivers for this is the shifting acquisition landscape. Let's examine further. Before cloud disrupted the industry, enterprises built, hosted, and maintained their technology stack inside the four walls of their data centers. This included email and just about everything else. Another business would then be targeted for acquisition. The target business would likely have data centers hosting their own technology stack, offices, stores, warehouses, or even restaurants. After the transaction, the target business's data centers, offices, staff, and any other intellectual property would then get absorbed. This stage of the process is lengthy, complicated, and always includes a lot of unexpected problems to work through. Cloud continues to change how we do business. Technology has broken out of the four walls of the data center, and applications and services are more distributed than ever. This has altered the acquisition game from top to bottom. Let's [[Zoom]] in a little further. Many startups today aren't building data centers. Instead, they are building [[Microsoft Products|products]] and services using the public cloud. Workforces are operating completely remote unless they absolutely must come into the [[Microsoft Office|office]]. This offers tremendous cost savings
>
> **[1:36](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=96)** because physical infrastructure doesn't need to be purchased and maintained. And office real estate becomes, you know, one less thing to worry about. Since many new startups are being built on public cloud, instead of acquiring a data center and real estate, you will instead be acquiring a product built in the cloud, along with a distributed workforce. And to keep things frosty, there is a high [[Probability]] that the product was built in a different cloud provider than the one your business is using today. This flips the table over on how the integration process works. As the target business gets absorbed and integrated, there tends to be a push to tightly couple it with the teams, leaders, and processes already existing in that business. Sometimes, though, it might make sense to let the newly acquired business operate autonomously and not disrupt their momentum, branding, and services. Many acquisitions happen because a large business sees a startup that does things really well. Buying that startup, though, doesn't mean you are that startup. With a large, traditional enterprise purchasing a bleeding-edge startup, you have to remember these are two completely different worlds. Massive change just can't be purchased at the end of the day. Large enterprises are known for their rigid, hierarchical org structures, strict processes, and complex change management.
>
> **[3:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/the-shifting-acquisition-landscape?u=76281980&t=193)** Sometimes it can seem really hard to just get things done. Startups, on the other hand, are lean, fast moving, and value-led machines. There isn't much red tape, and this allows them to build and iterate quick. It can be easy to see the product releases coming off the assembly line and think, "Wow, I just want to purchase whatever it is that does that." Post-acquisition, though, integrating these two cultural worlds can be tricky. Some pretty amazing products that operate at major scale have been produced using cloud native architectures. When thinking of architecture, though, doing it the cloud native way takes on a whole new meaning. It is a philosophical approach transcending the cloud tech itself. The team structures, the culture, the change management, and even leadership styles all contribute to this transformation. I have gone through this exercise with a few large organizations in the real world. One of the valuable things I have learned is how to perceive failure. Doing things the cloud native way isn't something a big company gets right the first go around. Think of it like a lifestyle change. Sometimes for New Year's resolution, you may form a new workout routine. But it might slip through the cracks after a few months, especially if you're me, and this is exactly like big corporate projects or programs that happen each year.
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
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=1)** - [Instructor] Get the fundamentals down, and the level of everything you do will rise. A system can't be highly available if it has single points of failure. To add color here, let's look at what would happen without redundancy in the case of something really important, like internet access. Pre-cloud, most workforces were in the [[Microsoft Office|office]]. And that office accessed the internet through the corporate data center. Physical switches, routers, and firewalls existed between the developer and the internet. What if there was only one of each of these devices though? This means that if something were to happen to any one of these devices, or the internet service provider had a hiccup, the developer would be without internet. Even if one of these devices got taken out of circulation to get upgraded, this would be an outage scenario. High availability is used to mitigate this scenario. The enterprise would deploy two of everything, from the switches, all the way to the internet service providers. By doing so, if any one device goes down, there is another device running that can carry the load. Instead of thinking, in terms of deploying [[Hardware]] redundancy, the public cloud takes things up a notch with environmental redundancy as well. In the public cloud,
>
> **[1:33](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=93)** redundant data centers called availability zones are used when designing for high availability. These zones exist in close proximity of each other and live inside a single cloud region. These data centers are interconnected over dedicated and fully redundant metro fiber. That means when the proverbial backhoe cuts a fiber, there is another one to take its place. These connections offer high throughput and low latency networking between zones. The performance is good enough to handle synchronous data replication between each zone. Using additional zones offers a higher degree of availability than just a single data center. Each availability zone has independent power, compute, networking, and any other function required to make it truly independent. This means that all single points of failure for hardware or environmental issues like earthquakes and tornadoes are all accounted for. Treat availability zones like you would've treated devices in the data center. This means when in the past, you may have deployed two routers or two firewalls. This now transitions to utilizing two availability zones. Work with application teams to understand their availability requirements. Some applications are not customer-facing,
>
> **[3:05](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/high-availability-in-the-cloud?u=76281980&t=185)** and may not have uptime requirements at all. One availability zone may be fine here. Once that uptime requirement hits 99% or greater though, then you need to incorporate at least two availability zones into the design. Understanding cloud service-level agreements is critical, and should inform design decisions as well. Cloud documentation will provide requirements for how constructs should be deployed to meet availability needs. Make sure to follow these closely. You will also want to pinpoint additional factors that may compound overall SLA. This could include things outside of a given cloud provider. Maybe the design is tiered hybrid, and requires access to data in the corporate data center. Every area that underpins the application's availability should be considered here. Lastly, always test against common failure scenarios and make sure you are getting the outcome you are expecting.

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
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=1)** - [Instructor] The only thing harder than planning for a disaster is explaining why you did not. What happens when high availability isn't enough? Well, this is exactly where disaster recovery comes in. High availability means redundant components, while disaster recovery means independent copies of the whole system across different locations. An easy way to think about this is high availability recovers from problems as the system is running, while disaster recovery mitigates system-wide failures. There are two common metrics you will hear about when talking disaster recovery. Recovery time objective, or RTO, is the point in time in the future at which the system will be available again. For critical applications, this could be as little as 30 seconds, while non-production applications could be days. Recovery point objective, or RPO, is the timeframe in the past to which you will recover. RPO for critical [[Databases]] could be as little as 30 minutes to an hour, while non-essential databases could be as long as 24 hours. To summarize, these metrics outline the length of time that your business can afford to be offline and how much data loss is acceptable.
>
> **[1:35](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=95)** Let's look at the two common ways DR gets facilitated for cloud workloads today. The first and most common way that you see DR handled in the enterprise is active/passive. Traffic is directed to the active region, which handles all the requests and load. A complete or partially deployed passive region is ready to take on requests in the event of a system-wide failure. If a full system failure occurs, traffic is shifted from the active region to the passive region. This happens only when the system is ready and available. Depending on the strategy, resources may have to be scaled up and data synchronized before the system is ready to actually accept requests. When I think about YouTube, Netflix, Spotify, the first thing I think about is scale and performance. No matter where I am, if I have good [[Wi-Fi]] or cell phone reception, these services just tend to work really well. This is because they are actively serving requests and handling traffic from many different regions at the same time. If, for some reason, a regional failure occurs, requests will shift to the closest alternate region. To make this as seamless as possible for end [[User Experience (UX)|user experience]], data replicating across regions must be quick and reliable and local state must be reduced or eliminated.
>
> **[3:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=193)** If you are part of a big family, being able to get kids to school, work, sports means lots of time in the car. What if you only had one car? On the cost side, well, that's only one car. But if that car breaks down, everyone's routines would get majorly impacted. Let's keep this in mind when thinking about lower cost and significant downtime. In the other corner, we have zero downtime. What if this family had two cars, maybe three or four cars? This would make it to where nobody's schedule gets interrupted. Think of how much higher the cost would be, though. On the side of active/passive, you have the option to keep spend at a minimum, but this comes at the cost of extending RTO and RPO. In this scenario, you have a playbook that you must go through to spin up the entire system and an alternate region and restore from backups after a failure. This option should only be used for non-critical or even non-production applications. As applications require faster recovery, spend will begin to increase exponentially. In a warm standby scenario, the system will already be running in an alternate region, but not at scale. One of the great things about [[Cloud Computing]]
>
> **[4:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=287)** is the elasticity of scaling resources on demand. Once a failure happens in the active region, resources can be scaled to meet the demand of incoming requests in the passive region. This reduces the time of recovery at the cost of running resources continuously. In scenarios where zero downtime can be tolerated, we move to active/active. This means the application is running in multiple regions at the capacity required to meet demand. There is minimal data loss in this scenario, and if designed right, end users will experience zero to minimal impact when a problem occurs. Another benefit of running active/active is user experience. If your users are dispersed across the country, then they will access the application from the region in close proximity to them. Less distance means better performance. Of course, nothing is free, and this all comes at a cost. Disaster recovery is easy to shrug off. Don't make the mistake of waiting to act, though. Planning is the hardest part. Remember, when any design is being put together, even at like the whiteboard level, think of DR as part of that design, just like you think of network vendors or database types. For a solid DR plan, you must understand the applications beyond a high-level design.
>
> **[6:22](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/disaster-recovery-in-the-cloud?u=76281980&t=382)** How many availability zones did the application reside in? Does it even use multiple availability zones? How is data synchronized across them and across regions? Next, what are the business recovery objectives? How much downtime or data loss is the business willing to accept? The answer to this is usually zero until associated costs are presented. Know what DR options are available to you, how to explain them, and what the cost associated with them is. There is nothing more frustrating than proposing a design the product team or business isn't willing to pay for. And lastly, how do you know DR will even work? DR plans must be tested and not just once every few years. Being able to test DR capabilities by simulating controlled outages is your assurance that the design works and will continue to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[User Experience (UX)|User experience]] (2), [[Wi-Fi]] (1), [[Cloud Computing]] (1)
> **Env Vars:** rpo (3), rto (2)
> **CLI Commands:** make (3)
> **Analogies:** just like (1)
> **Warnings:** don't make the mistake (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Capacity planning](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=0)** - [Instructor] What is [[Capacity Planning]]? I like to break this down into three distinct categories, profiling, [[Forecasting]] and adapting. Profiling identifies where the network is today by using tools and data, to understand things like bandwidth utilization, throughput, latency and packet loss. Is performance optimal? Are business outcomes being met? Secondly, load will increase exponentially, especially on internet circuits in the data center. It is important to forecast impact on existing infrastructure, so expanding capacity can be proactive and not reactive. And lastly, you must adapt to demand by adding capacity. In the cloud, there are methods of doing this elastically but where physical [[Hardware]] is involved, it can be tricky. Having a repeatable process hammered out that automates as much as possible is recommended. Capacity planning and execution has a direct impact on the network's ability to do high availability and disaster recovery, especially with cloud migrations. As networking is often a shared utility across many things, this means there is a blast radius affecting many things whenever an outage or performance issue occurs. So, your organization is going all in with cloud
>
> **[1:37](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=97)** and applications are going through planning for migration. What should you expect as it relates to capacity? What should you watch out for? The big task when doing migrations is making sure not to disrupt existing operations. Let's take a simple example using your data center and the internet. Chances are that your internet has inbound traffic today for various things like application hosting, remote workers and business to business connections. Even more traffic is likely generated from outbound internet access and [[SaaS|software as a service]]. Now, let's look at a few potential bottlenecks here that could cause gigantic disruption to operations. Internet is one of the primary methods of transport out of the data center. Even with wide area network, the internet is an extremely popular underlay for software defined WAN solutions. Upgrading capacity or installing additional circuits is a time consuming exercise, so understanding existing consumption prior to adding cloud migration traffic is critical. A better alternative is not using the existing internet circuits for migrations at all. Another big bottleneck tends to be stateful devices, like firewalls. What is happening
>
> **[3:09](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=189)** with traffic passing through the firewalls? Does the firewall handle SSL VPN traffic? Does it do threat prevention and additional application control? Getting to cloud include some trial, error and learning opportunities. You just don't want to take those learning opportunities out on your production network. Say your circuit and hardware capacity are already a little high and a data migration takes place. This could easily saturate the internet circuit or tip over the firewalls. Avoid this at all costs. Shared impact is never good. Let's examine some ways that we can limit impact to production. Instead of using your existing production internet circuits, it may make sense to separate cloud connectivity to minimize blast radius and optimize performance for high-velocity migrations. Let's look at some additional options. Installing additional internet or private Layer 2 circuits could help with large ongoing migrations. Separating the hardware out would ensure that you don't tip over the existing production routers or firewalls and additional circuit capacity can be scoped out specifically for the migration strategy. Using existing infrastructure can be risky. If you have established good monitoring and have current and historical data to forecast growth
>
> **[4:47](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=287)** and you have precise migration data, so you know what you're working with by the numbers, this may be an option. If in doubt, though, it is always better to not disrupt the current state of the production network. A good first alternative is adding additional internet capacity. Dedicated access isn't shared with other customers like general consumer internet, and will come in significantly cheaper than [[Multiprotocol Label Switching (MPLS)|MPLS]] alternatives. If you're already using SD-WAN, this option has a lot of benefits. You can also set up private Layer 2 circuits from your data center to the on-ramp facilities where your private connections to cloud exist. This would offer a direct link between two endpoints and would come with either protected or unprotected options. When making this decision, think about, do you need multiple paths into each data center? Does the protected path apply at the building demarc? And, what ability if any, exists to audit or retrieve data from the carrier routers? And with additional circuits, you will want to repurpose or procure additional network and security hardware to terminate, filter and secure the traffic. And lastly, gathering data through testing is critical. What is the expectations of the network
>
> **[6:23](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/capacity-planning?u=76281980&t=383)** when operating is designed? Gathering critical metrics, like bandwidth, throughput, latency, and jitter are a must. Then you can build performance and capacity baselines.

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
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=1)** - [Narrator] This may seem like a simple concept but once it's in place, it is really hard to change, and a lot of times you may end up having to work around it. So what is segmentation exactly? It is simply the breaking down of networks into smaller networks. This can improve performance and security and gives teams the ability to apply unique security controls and services to each of these smaller networks. Network segmentation usually happens on a combination of network devices, firewalls and software. Think security in depth, where you have multiple layers that work together to safeguard your assets. The first type of segmentation we're going to look at is macro segmentation, this is traditionally geared towards north-south communication and it's pretty high level. So at the top we have the business, now the business may be acquisition heavy or maybe separate lines of business need to operate autonomously. Applications usually have separation across environments like dev and prod or maybe the business is in a highly regulated industry and needs to isolate protected data from the top. These are all good fits for macro segmentation, the next type is micro segmentation
>
> **[1:37](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=97)** and this is going to get more granular. This operates east-west and takes us down to the components of the application. Well thought out macro segmentation creates a really good foundation for effective micro segmentation. It is important not to over complicate segmentation especially in the network. Try to keep things as simple as possible while still meeting real business requirements. Let's look at healthcare in the United States which deals with protected data as an example. To meet regulatory and compliance requirements, safeguards must exist for protected data that gets created, used, stored or transmitted. A common approach for segmentation follows a business' organizational structure. At the top you have a business unit which may be a segment and then each team inside a business unit will be segmented as well, as we keep going down the hierarchy we get to the applications that the teams built. Now, some of the applications in the healthcare market will interact with protected data while some may not touch it at all, so it is important that segmentation happens here too. What happens though when you factor in multiple business units that contain many teams in growing services?
>
> **[3:13](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=193)** How should segmentation be approached? When it was just one business unit and one team it was really small and it wasn't really that hard to manage, especially when cloud adoption and migrations happen, how do you begin to deal with the sprawl? And with compartmentalize services possibly requiring access to protected data, how do you ensure the right security policies are in place for this data across all business units, teams and applications? Instead of thinking of segmentation hierarchically what about thinking of it by [[Data Classification]]? A macro segment for all applications that interact with protected data would reduce the number of segments you manage and give you the ability to enforce safeguards from the top down. And having an alternate segment used for applications that don't really need to touch protected data would give those teams the ability to push out changes at a higher velocity as they're not slowed down by the more stringent policies of safeguarding protected data. This solves the problem of what is most important to the business and that's keeping that crucial, protected data safe. Segmentation usually comes from security focused requirements, make sure to understand these requirements and that they are legitimate. The last thing you want to do is over segment your network based on opinions
>
> **[4:48](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/network-segmentation?u=76281980&t=288)** and not real business backed requirements. Where do the resources exist and how many of them are there? How are they going to grow? Make sure to understand the radius of resources you plan to segment. Can these resources egress to the internet directly? Are they being accessed by something over the internet? Understanding how internet is involved here is absolutely critical. Will new segmentation affect traffic flows? If traffic is going to an additional firewall or third party product, are there performance implications that need to be considered? And lastly, is the technology you have in place today able to solve the problem or is a new solution required? Keep these questions in mind as you plan out your own segmentation strategy, more importantly, think of the critical assets your business needs to safeguard, how does the strategy you have in place today or the new strategy you are proposing, impact them?

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
> **[0:01](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=1)** - [Instructor] We made it. Thank you for joining this course and I trust you're leaving with valuable knowledge that will give you an edge in the multi-cloud networking space. You should be walking away with a grounded understanding of cloud networking in the business and how they intersect to enable transformation. From a technical standpoint we covered various cloud network solutions, how they were architected and we broke down their trade offs in detail so we could easily map them to business capabilities. And all along the way, we introduce different pieces of strategy and culture that make it all possible. So what comes next? If you are new to the cloud, I would encourage you to take advantage of the free tier on one of the cloud service providers and experiment, learn the basics and just get hands on. For deeper dives into the technology itself, each major cloud provider has a certification focused on the way they do networking. These include AWS Certified Advanced Networking Specialty, Designing and Implementing [[Microsoft Azure]] Network Solutions and [[Google]]'s Professional Cloud Network Engineer. While getting the certification is the goal,
>
> **[1:36](https://www.linkedin.com/learning/hybrid-multicloud-networking-practical-concepts/moving-forward-with-your-hybrid-multicloud-networking?u=76281980&t=96)** just going through the material for the purpose of gaining additional knowledge has its benefits as well. Public cloud consumption keeps growing and professionals with knowledge and skills here have a tremendous opportunity to move into more advanced roles to drive their business into the future. If you're a networking professional, why wait? Get ahead of the curve and be the one that brings the new ideas to the table. Good luck and happy networking.

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