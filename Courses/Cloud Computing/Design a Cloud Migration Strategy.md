---
type: course
cssclasses:
  - lle-course
slug: design-a-cloud-migration-strategy
url: "https://www.linkedin.com/learning/design-a-cloud-migration-strategy"
duration_minutes: 141
duration: 2h 21m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQGCH40lBYPU7Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1591895554783?e=2147483647&amp;v=beta&amp;t=lfvjb-x9laxtnniE9J1romsK3L1Ia_L-mBm5D5QKBW8"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Design and Present Your Cloud Strategy]]'
  - '[[Introduction to Enterprise Cloud Migration Planning]]'
prev_courses:
  - '[[Cloud Architecture- Design Decisions]]'
  - '[[Cloud Concepts Planning An Application Migration Strategy]]'
next_courses:
  - '[[Framing Cloud Discussions for the C-Suite]]'
  - '[[Dependency Mapping for Cloud Migration]]'
path_nav: '[{"path":"Design and Present Your Cloud Strategy","position":3,"total":6,"prev":"Cloud Architecture- Design Decisions","next":"Framing Cloud Discussions for the C-Suite"},{"path":"Introduction to Enterprise Cloud Migration Planning","position":2,"total":4,"prev":"Cloud Concepts Planning An Application Migration Strategy","next":"Dependency Mapping for Cloud Migration"}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - topic/devops
status: not-started
created: 2026-04-21
---

![Design a Cloud Migration Strategy](https://media.licdn.com/dms/image/v2/C4D0DAQGCH40lBYPU7Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1591895554783?e=2147483647&amp;v=beta&amp;t=lfvjb-x9laxtnniE9J1romsK3L1Ia_L-mBm5D5QKBW8)

# Design a Cloud Migration Strategy

> The success of your cloud migration is enormously dependent upon how well thought out the strategy is. In this course, instructor Brien Posey takes a vendor-neutral look at the key design considerations that need to go into any migration strategy—whether you're migrating to AWS, Microsoft Azure, Google Cloud, or another platform. Learn how to identify your migration goals, estimate costs, and avoi

> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy) | 2h 21m
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Brien Posey]]

## Table of Contents

### Introduction

#### Planning a cloud migration
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/planning-a-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/planning-a-cloud-migration?u=76281980&t=1)** - [Brien] The public Cloud has become a go-to platform for hosting IT resources with many organizations adopting a Cloud-first approach for new workloads.
>
> **[0:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/planning-a-cloud-migration?u=76281980&t=9)** Not surprisingly, there is also a great deal of interest in migrating on-premises workloads to the Cloud.
>
> **[0:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/planning-a-cloud-migration?u=76281980&t=15)** Even so, these types of migrations are rarely as simple as they might initially seem.
>
> **[0:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/planning-a-cloud-migration?u=76281980&t=20)** In this course, I'm going to show you several different options for migrating your workloads to the Cloud.
>
> **[0:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/planning-a-cloud-migration?u=76281980&t=25)** As I do, I'll explain how these migration techniques work and I'll talk about some common pitfalls to avoid.
>
> **[0:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/planning-a-cloud-migration?u=76281980&t=32)** I'm Brien Posey, and besides being a commercial astronaut candidate, I also have 30 years of IT experience.
>
> **[0:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/planning-a-cloud-migration?u=76281980&t=39)** So, if you're ready to learn all about your options for migrating a workload to the Cloud, then come join me in my LinkedIn learning course on Cloud Migration.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1)
> **Speakers:** - [brien] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-you-should-know?u=76281980&t=1)** - [Instructor] This course is designed to help you to plan for moving some of your workloads to the cloud.
>
> **[0:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-you-should-know?u=76281980&t=6)** In this course you'll learn some of the migration paths that may be available to you and I'll point out some of the aspects of the migration process that you might not have thought of.
>
> **[0:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-you-should-know?u=76281980&t=14)** A basic knowledge of cloud services will be helpful as you watch this course, but it isn't a firm requirement.
>
> **[0:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-you-should-know?u=76281980&t=20)** Since this is a conceptual course rather than a hands on course there aren't any prerequisites to worry about.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Essential Migration Considerations

#### Identify migration goals
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=1)** - [Instructor] Let me begin by asking a simple question.
>
> **[0:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=3)** Why do you want to migrate to the cloud?
>
> **[0:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=6)** Most of the time when a business makes a decision to move some or all of its workloads to the cloud, it's because there's some perceived business benefit to doing so.
>
> **[0:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=15)** The reason why I mention this is because stating the reason why you want to migrate to the cloud upfront can help you to define goals for the migration process, and goals are important.
>
> **[0:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=25)** Once you set goals you can begin to define migration objectives and to prioritize the tasks that will help you to achieve those goals.
>
> **[0:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=33)** Perhaps even more importantly, documenting your goals upfront can help you to assess the success of your migration efforts.
>
> **[0:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=40)** Otherwise it can be difficult to quantify whether or not your migration was truly successful.
>
> **[0:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=46)** So let's talk about a few examples of goals for the migration process.
>
> **[0:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=51)** One possible goal might be to reduce your operating cost through pay-as-you-go pricing, and I mentioned earlier that defining your goals upfront can help you to quantify the success of your migration.
>
> **[1:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=63)** Well, in this case, if you were to stipulate that reducing your operating cost was one of your goals, then that's something that would be really easy to quantify.
>
> **[1:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=70)** You look at your operating cost before the migration, and then look at the operating cost again after the migration and see if they went down.
>
> **[1:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=77)** And if those costs did go down, then you can quantify the migration process as a success, at least financially.
>
> **[1:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=86)** Another possible example of a goal might be to improve your workload scalability, but without investing in new hardware.
>
> **[1:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=93)** One of the problems that comes from operating on-premises is that you have to purchase hardware that can service your workload when it's under its peak demand.
>
> **[1:41](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=101)** The problem is that a lot of times workloads aren't operating at peak, and so that excess hardware that's used to accommodate demands is basically being under-utilized.
>
> **[1:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=111)** Well, when we migrate workloads to the cloud we don't have that problem.
>
> **[1:55](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=115)** Cloud workloads can scale up to accommodate peak demands, but they can also scale back down when the demand subsides.
>
> **[2:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=121)** And that can help you to reduce cost, because you're not having to purchase all of that extra hardware to accommodate your peak.
>
> **[2:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=129)** Another example of a common goal for cloud migrations is to establish better disaster recovery capabilities.
>
> **[2:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=137)** In the past, providing disaster recovery capabilities for workloads running on-premises was very expensive.
>
> **[2:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=143)** A lot of times it involved failing over to a secondary data center, or perhaps a co-location site.
>
> **[2:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=149)** The cloud gives you less expensive options.
>
> **[2:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=152)** A workload that's running on-premises, for example, may fail over to the cloud in times of disaster.
>
> **[2:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=157)** A workload that's already running in the cloud might fail over to a different cloud, or perhaps to a different availability region.
>
> **[2:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=164)** So the cloud gives you a lot of flexibility when it comes to disaster recovery, and at a cost that is far less than what you would get if you had to deploy a secondary data center or lease space in a co-location facility purely for the sake of disaster recovery.
>
> **[3:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=180)** Yet another possible goal for a cloud migration might be to make workloads highly available.
>
> **[3:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=185)** You can certainly do this on-premises, but making workloads highly available on-premises can be expensive.
>
> **[3:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=191)** At its simplest it requires something like what you see in this diagram where there are multiple servers that are available to run the workload, and all of those servers are connected to shared storage.
>
> **[3:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=201)** This, of course, requires a lot of hardware.
>
> **[3:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=204)** In the cloud you can achieve high availability for your workloads without all of the hardware costs that are incurred in doing it on-premises.
>
> **[3:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=213)** One more example of a potential goal for migrating to the cloud might be to improve agility.
>
> **[3:38](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=218)** Now, sometimes agility is dismissed as being little more than a meaningless IT buzzword, but the concept of agility has very real meaning.
>
> **[3:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=227)** In IT speak, agility typically refers to having the ability to spin up new workloads on an as-needed basis, and to be able to just as easily deprovision old workloads that are no longer being used.
>
> **[3:59](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=239)** Now, certainly you can do this on-premises using server virtualization and other technologies, but doing so requires hardware resources to be consumed, and you can get into some complex capacity planning issues in the process.
>
> **[4:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=252)** Conversely, the cloud provides you nearly unlimited hardware resources, and so you can spin up new workloads on an as-needed basis without having to think about the impact that those workloads are making on your available hardware.
>
> **[4:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identify-migration-goals?u=76281980&t=265)** So those are just a few examples of some potential goals that you might have for your cloud migration.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), this, (1)
> **CLI Commands:** make (1)
> **Definitions:** refers to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Types of migrations
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=1)** - [Instructor] A lot of times when you hear someone talk about cloud migrations, they talk about it in a rather generic sense.
>
> **[0:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=7)** But there are actually several different types of cloud migrations and in the real world it's rare to only use one type of migration.
>
> **[0:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=15)** Typically, if you're going to be migrating multiple workloads to the cloud, you're going to use several different types of migrations and the reason for that is really simple.
>
> **[0:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=23)** Every workload is unique and it has its own needs.
>
> **[0:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=26)** So, a workload migration technique that works really well for one workload might not necessarily be the best choice for another workload.
>
> **[0:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=34)** So, it's extremely important to pair the migration technique that you're using to the workload that you're migrating to make sure that you're choosing the best technique for the workload.
>
> **[0:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=44)** Throughout this course there are five different types of cloud migrations that I'm going to be talking about.
>
> **[0:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=49)** I like to refer to these cloud migration techniques as the five Rs, because each one of these methods starts with the letter R.
>
> **[0:56](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=56)** The first one is rehosting.
>
> **[0:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=58)** Sometimes rehosting is referred to as lift and shift.
>
> **[1:02](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=62)** It essentially refers to the practice of taking a workload that's running on premises and simply moving it to a virtual server running in the cloud.
>
> **[1:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=70)** This is arguably the simplest type of cloud migration, but it's far from being the only migration method.
>
> **[1:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=75)** Let's take a look at some others.
>
> **[1:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=78)** The second cloud migration technique that I want to mention is called replatforming.
>
> **[1:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=82)** Replatforming is very similar to rehosting in that you move a workload from a virtual server running on premises to a virtual server in the cloud, but the big difference is that you're also making an architectural change to the workload at the time of migration.
>
> **[1:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=97)** For example, you might take the database that's being used by that workload and rather than running it on a virtual machine, you might move it to a database as a service platform.
>
> **[1:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=109)** The third cloud migration technique that I want to talk about is replacing.
>
> **[1:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=113)** Replacing involves taking an application that you're running on premises and retiring that application and adopting instead a software as a service application running in the cloud.
>
> **[2:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=123)** One of example of this is that years ago I used to run Exchange Server on premises, but eventually I phased that out in favor of a cloud based solution, Microsoft Office 365.
>
> **[2:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=135)** The fourth migration technique that I want to talk about is refactoring.
>
> **[2:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=139)** Refactoring refers to modifying the application's code in order to bring the application up to date.
>
> **[2:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=145)** A lot of times when an organization refactors an application, they'll also introduce new features into that application.
>
> **[2:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=153)** And then the fifth migration technique is retiring.
>
> **[2:36](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=156)** Simply put, this isn't a migration technique at all.
>
> **[2:38](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=158)** Rather it refers to phasing out an old application that's no longer being used.
>
> **[2:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=165)** So one last thing that I want to mention is that even though I'm going to be talking in detail about cloud migrations, there are some workloads that aren't well suited to run in the cloud.
>
> **[2:55](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=175)** Some workloads are better suited to remain on premises and later on in this course, I'm going to be discussing which workloads you might want to think about migrating to the cloud versus which workloads might be better suited to continue to run in your own data center.
>
> **[3:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/types-of-migrations?u=76281980&t=189)** But I wanted to at least quickly mention that you don't necessarily have to migrate every workload.

> [!info]- Semantic Content
>
> **Definitions:** refers to (3), is called (1)
> **Code Keywords:** let (1), continue (1)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Cost considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=1)** - [Instructor] Cost is a major consideration by nearly every business' decision and that includes cloud migrations.
>
> **[0:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=7)** For a long time, cloud providers have been telling us that operating in the cloud is the cheap way of doing things.
>
> **[0:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=12)** And in some cases, migrating to the cloud can indeed save you a lot of money.
>
> **[0:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=17)** But in other cases, migrating an application to the cloud can actually increase your costs, so it's very important to consider what moving to the cloud is going to cost you before you actually make the move.
>
> **[0:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=29)** So let's look at some factors that determine the cost of operating an application in the cloud and when it might be cheaper to run an application in the cloud, versus when it might be cheaper to run an application on premises.
>
> **[0:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=42)** There are any number of situations that may make it far less expensive to operate an application in the cloud than to run that same application on premises.
>
> **[0:50](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=50)** For example, migrating an application to the cloud might save you from having to purchase new server hardware or from having to purchase software licenses for a new version.
>
> **[1:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=61)** The cloud is also typically going to be cheaper for running lightly used applications and the reason behind this is simple.
>
> **[1:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=68)** A lot of times, cloud providers charge based on usage.
>
> **[1:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=72)** So if an application is very lightly used, then the usage fees are going to be relatively inexpensive.
>
> **[1:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=78)** On the other hand, if you ran that same lightly used application on premises, then you're going to be tying up expensive server resources for an application that's barely being used.
>
> **[1:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=88)** So probably makes more sense just based on pure economics to run that application in the cloud than to run it on premises.
>
> **[1:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=95)** Running an application in the cloud might also save you money on support.
>
> **[1:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=99)** For example, a lot of server hardware vendors require you to purchase a support contract at the time that you purchase your server hardware.
>
> **[1:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=107)** And if you're operating in the cloud, rather than on premises, you can save yourself the cost of buying that support contract.
>
> **[1:54](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=114)** The cloud can also save you money on application support.
>
> **[1:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=117)** If you happen to use a software as a service application, then support is usually included in the cost of licensing that application.
>
> **[2:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=126)** The cloud can also make it less expensive to accommodate workload demand spikes because when you run an application on premises, you have to purchase server hardware that is powerful enough to accommodate the application when it's running at peak demand.
>
> **[2:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=140)** But at periods of lesser demand, that hardware is being underutilized.
>
> **[2:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=143)** In the cloud however, you're only paying for the resources that you actually use, so you can accommodate demand spikes without paying for those resources at a time when the workload is under less of a demand.
>
> **[2:38](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=158)** Even though the cloud is typically marketed as being the inexpensive way of doing things, there are situations in which operating in the cloud can cost more than operating on premises.
>
> **[2:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=168)** So let's take a look at what a few of these factors might be.
>
> **[2:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=172)** One thing to consider is the monthly cost.
>
> **[2:55](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=175)** Cloud providers bill you month after month for the resources that you use and these costs can add up over time.
>
> **[3:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=181)** And given enough time, those costs might actually exceed the cost of purchasing software licenses and maybe even the cost of purchasing server hardware.
>
> **[3:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=191)** So the monthly costs are certainly something to consider, especially if you're looking at the longterm financial implications of your decision.
>
> **[3:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=199)** Another thing to consider is data egress fees.
>
> **[3:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=202)** Now not every cloud provider charges data egress fees but a lot of the big ones do.
>
> **[3:27](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=207)** So it's certainly something important to look at.
>
> **[3:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=210)** Data egress fees are fees that are charged for moving your own data out of the cloud and those fees can be quite expensive.
>
> **[3:38](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=218)** So it's very important to find out if your cloud provider charges data egress fees and what those fees are, so that you can plan for those in the event that you ever decide to move your data out of the cloud and either bring it back on premises or move it to a different cloud.
>
> **[3:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=233)** Finally, if you've already got a perpetual software license and existing hardware, it probably isn't going to make sense to abandon that existing investment just for the sake of operating in the cloud.
>
> **[4:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=244)** So those are just some things to consider.
>
> **[4:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=249)** Another important cost consideration is the fact that rates aren't standard among cloud providers.
>
> **[4:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=254)** Typically, what you'll find is that different providers charge different rates for different services.
>
> **[4:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=259)** For example, you might find that one cloud provider has a better rate for virtual machines running in the cloud whereas another cloud provider has a better rate for online databases.
>
> **[4:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=269)** So what I would recommend is adopting a multicloud architecture so that that way you can get the best price for each service simply by running the service in the cloud where it's most cost effective to do so.
>
> **[4:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=282)** So this raises the question of how you can determine which cloud provider is going to be cheapest for a particular service.
>
> **[4:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=289)** Well, cloud providers generally post their rates online so that makes it very easy to do some comparison shopping.
>
> **[4:54](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=294)** And in fact, a lot of the major cloud providers even offer pricing calculators so that you can estimate the total cost of your bill based on the services that you expect to use.
>
> **[5:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=306)** When you're preparing to migrate an application to the cloud, you may occasionally find that you have a choice between hosting the application inside of a cloud-based virtual machine or subscribing to a software as a service cloud.
>
> **[5:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=318)** Generally speaking, a software as a service cloud is going to be the less expensive option and the reason for that is simple.
>
> **[5:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=325)** Software as a service clouds typically use flat rate billing, whereas infrastructure as a service clouds generally charge you based on the resource that you use.
>
> **[5:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=334)** But even if the software as a service cloud, doesn't come out cheaper every time, what you may find is that it's worth it to use the software as a service cloud anyway, simply because it gives you predictability with regard to your billing.
>
> **[5:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=346)** Your costs are going to be the same month after month whereas an infrastructure as a service cloud is going to give you a variable cost based on how heavily an application was used in a given month.
>
> **[5:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=357)** Nevermind the fact that software as a service clouds generally provide you with free technical support that you're probably not going to get if you host the application yourself.
>
> **[6:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/cost-considerations?u=76281980&t=366)** So those are just a few of the considerations to take into account with regard to cost as you're planning your cloud migration.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5), make (4)
> **Code Keywords:** let (2), require (1), finally, (1)
> **Analogies:** for example (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The five phases of migration
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=1)** - [Instructor] So far in this course, I've spent quite a bit of time talking about the various migration methods that are available to you.
>
> **[0:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=6)** You might recall the five Rs, re-hosting, re-platforming, replacing, refactoring, and retiring.
>
> **[0:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=12)** Even so, there is a lot more to planning a migration than simply picking a migration method.
>
> **[0:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=21)** Any time that you're considering moving a workload to the cloud, there are a number of tasks that need to be performed as a part of the migration planning process.
>
> **[0:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=28)** So I'm going to show you a few of those tasks, but keep in mind that the tasks that I'm about to talk about are by no means an all-inclusive list.
>
> **[0:36](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=36)** There can be additional tasks depending on the workload that you're about to migrate.
>
> **[0:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=42)** One extremely essential and yet often overlooked task is making sure that the IT staff has the necessary training.
>
> **[0:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=49)** You can't assume that everybody on the IT staff already knows everything that they need to know, or that they'll figure it out as they go along.
>
> **[0:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=57)** That's how mistakes are made and how problems occur, so it's extremely important to make sure that you give the IT staff the training that they need.
>
> **[1:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=66)** Another really critical pre-migration task is to define the security and access requirements for the application that you're migrating.
>
> **[1:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=74)** It's a good idea to go ahead and document who's going to need access to the application, why they need access, and if you're using role-based access control, what level of access they need.
>
> **[1:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=84)** It's also important to document what types of security measures should be put in place to keep the application secure once it's been migrated.
>
> **[1:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=94)** Another essential pre-migration planning task is to define the workload performance requirements, and also decide what performance metrics will be used to evaluate that performance.
>
> **[1:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=104)** There is an old saying in the world of IT that users don't really care how something works, they just want it to work.
>
> **[1:50](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=110)** When we start talking about cloud migrations, the saying is important because it essentially means that users expect the application to work just as well once it's in the cloud as it did on premises.
>
> **[2:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=121)** So the way that you ensure that users receive the same level of performance, if not better, once the application has been migrated, is by taking a benchmark of the application's performance before you migrate it, and then taking another benchmark after the migration to make sure that the application is still performing just as well.
>
> **[2:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=139)** But in order to be able to do this, you need to decide what performance metrics you're going to use.
>
> **[2:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=144)** If you look at the slide, you can see that I've got a screen capture of the Windows Performance Monitor.
>
> **[2:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=149)** Here I'm looking at some counters, including the percentage of processor time, the percentage of committed bytes in use, the percentage of disk read time, and the percentage of disk write time.
>
> **[2:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=160)** So these are just a few of the more generic counters.
>
> **[2:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=162)** You might use different counters with your own application, but it gives you an idea of some of the things that you might look at when evaluating your application's performance.
>
> **[2:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=171)** Whatever counters you decide to use, it's important to just make sure that you decide on the counters ahead of time, you benchmark the application before you perform the migration, and then you benchmark the application again after the migration.
>
> **[3:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=185)** As you plan for the migration, it's important to consider your availability window for the migration process.
>
> **[3:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=191)** How is the application used?
>
> **[3:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=194)** An application that's used Monday through Friday during business hours can be easily migrated on the weekend when nobody's in the office.
>
> **[3:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=201)** If, on the other hand, the application is in use 24 hours a day, seven days a week, you're going to have to use a different type of migration method that ensures that the application remains online as it's being migrated.
>
> **[3:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=213)** Another essential task in the migration-planning process is figuring out how to migrate the application data.
>
> **[3:38](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=218)** Because remember, a lot of times you're not just going to be migrating an application to the cloud, you're also going to be migrating the data that's associated with that application, so it's important to figure out how you're going to move the data over to the cloud.
>
> **[3:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=232)** One of the biggest considerations for this is the volume of data that you need to migrate.
>
> **[3:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=237)** If you've got a relatively small amount of data to migrate, you might be able to simply upload that data.
>
> **[4:02](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=242)** If you've got many terabytes, or possibly even petabytes of data that need to be migrated, you're going to have to come up with a different solution for migrating the data, because an upload is going to be impractical.
>
> **[4:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-five-phases-of-migration?u=76281980&t=252)** So those are just a few of the essential migration planning tasks that need to be performed before you begin migrating your application.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** this, (1), if, (1)
> **Definitions:** is a  (1), is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Common mistakes to avoid
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=1)** - [Instructor] I want to wrap up this part of the course by talking about some common mistakes that have occasionally seen made by those who are planning a migration to the Cloud.
>
> **[0:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=9)** The first of those mistakes is migrating just because it's the trendy thing to do.
>
> **[0:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=14)** Over the last several years, we've seen the Cloud service providers, relentlessly marketing to their customers, trying to convince them that they should run practically everything and anything in the Cloud.
>
> **[0:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=24)** While there are certainly some workloads that are ideally suited for use in the Cloud, not every workload should be run in the Cloud.
>
> **[0:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=31)** There are some workloads that are better suited for on-premises use.
>
> **[0:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=35)** And it would be a huge mistake to migrate those particular workloads to the Cloud, simply because some vendor tells you that you should be running everything in the Cloud.
>
> **[0:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=46)** Another mistake that sometimes made when planning for a Cloud migration is forgetting about the impact of Cloud latency.
>
> **[0:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=53)** When an application is running in the Cloud, users are typically going to see greater latency than they would see if that same application were running in-house, in your own data center.
>
> **[1:02](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=62)** There are a couple of reasons why this happens.
>
> **[1:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=65)** First, the application is located geographically further away than it would be if you were running it in-house.
>
> **[1:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=70)** And that distance creates a little bit of latency.
>
> **[1:13](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=73)** The other reason why it happens is because the connectivity to that application tends to be slower.
>
> **[1:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=79)** After all, most organizations have faster connectivity in-house, than they have for Internet connectivity.
>
> **[1:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=86)** This brings up another important point, it's important to consider the impact on your Internet bandwidth.
>
> **[1:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=92)** Now, I'm not talking about the impact of the migration process itself, although that's an important consideration too, I'm talking about what happens after the migration.
>
> **[1:41](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=101)** Because once you move an application to the Cloud, users who access that application have to do so across your Internet connection.
>
> **[1:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=108)** And if your Internet connection is already overloaded, then you're going to be adding increasing traffic to a connection that's already under load.
>
> **[1:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=117)** So it's important to keep in mind the amount of available Internet bandwidth that you have at your disposal, and make sure that moving that application to the Cloud isn't going to overtask your Internet bandwidth.
>
> **[2:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=130)** Now, another mistake sometimes made, is that of depending on a single Internet service provider.
>
> **[2:16](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=136)** The reason why this is important is because, once you move an application to the Cloud, you're dependent on your Internet connectivity for access to that application.
>
> **[2:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=145)** If your Internet service provider or ISP has an outage on a particular day, then you have no way of connecting to that application.
>
> **[2:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=152)** The application is essentially unusable at that point.
>
> **[2:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=155)** So it's important to have a secondary Internet connection from a different ISP, so that you can ensure that you'll always have access to that application, even if one of the ISPs has an outage.
>
> **[2:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=167)** One more mistake that sometimes made is forgetting to check on ISP service limits.
>
> **[2:55](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=175)** Internet access is widely regarded as being unlimited.
>
> **[2:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=178)** You can surf the web all that you want, and nobody's going to say a thing about it.
>
> **[3:02](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=182)** But the thing about it is that, a lot of Internet service providers, not all, but a lot of them, have limits that you don't necessarily hear about all the time.
>
> **[3:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=190)** So let me show you something that happened to me.
>
> **[3:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=194)** This is a letter that I received from my own Internet service provider.
>
> **[3:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=198)** This isn't something that I fabricated for the course or anything like that, this is a real letter.
>
> **[3:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=202)** Now, if you look at the third paragraph, you can see that it says, our records indicate that you have utilized approximately 202 gigabytes of upstream data over the past month, which is over the stated limits posted on our Web site.
>
> **[3:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=215)** And then it goes on to explain the current limits.
>
> **[3:38](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=218)** So unless I had taken the time to browse my Internet service providers' Web site, which admittedly I had not, I had no idea that there were any limits in the amount of data that I could upload.
>
> **[3:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=229)** Additionally, you'll notice that even their highest package on your package number three, only allowed for 165 gigabytes of upstream data per month, and I had exceeded that.
>
> **[4:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=240)** So in this case, the letter was sent as a warning, and I didn't receive any extra charges on my bill or anything, but the Internet service provider definitely wanted me to cut back on the amount of upstream data that I had used.
>
> **[4:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=254)** Now, thankfully, this wasn't something that I had put in place for a corporation.
>
> **[4:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=258)** Imagine what would happen if you uploaded a mission critical application to the Cloud, and all of a sudden you received a letter from your Internet service provider, saying that you were using too much bandwidth, and that they were going to cut you off if you didn't turn down your bandwidth usage.
>
> **[4:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=273)** Now, admittedly, with a business package, this probably isn't something that is going to happen, hardly ever, if at all.
>
> **[4:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=279)** Even so, it's only prudent to check with your ISP and find out if there are limits in place, before you make a major move, such as a Cloud migration, just so that you can avoid running into problems such as this one.
>
> **[4:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=293)** Another mistake that is sometimes made when migrating to the Cloud, is neglecting to perform a feature-by-feature comparison, when switching to a software as a service application.
>
> **[5:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=303)** This is actually a lot more important than you might realize.
>
> **[5:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=307)** The reason for this is that some software vendors, not all, but some, offer both a software as a service version of their application, and a version that's intended to be used on-premises.
>
> **[5:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=317)** And over the years, I've seen a few examples, in which of vendor software as a service offerings, didn't have all of the same features that you would get if you installed and ran the application on-premises.
>
> **[5:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=328)** So if you were to migrate to the Cloud, and not do a feature-by-feature comparison ahead of time, you may discover that by adopting a software as a service application, you're missing out on key features, that you had when you were using that application on-premises.
>
> **[5:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=344)** So one last mistake that I sometimes see made with regard to migration planning, is failing to perform pilot deployment testing.
>
> **[5:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=352)** The idea behind this is really simple.
>
> **[5:54](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=354)** Sometimes, applications will appear to have migrated to the Cloud successfully, but only later do you find out that there are problems with that application.
>
> **[6:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=364)** The application might be missing key features, it might run too slowly, maybe it no longer works with some of the dependency applications.
>
> **[6:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=371)** Whatever the problem, it's a lot better to find out about that problem, with a small group of test users, than to find out about it when your entire group of users is depending on that application to work correctly.
>
> **[6:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=383)** So this is why you perform a pilot deployment test.
>
> **[6:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=386)** A pilot deployment test involves migrating the application to the Cloud, and then setting aside a small group of users whose job it is to test that application and make sure that it works correctly before you make the newly migrated application, available to all of your users.
>
> **[6:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/common-mistakes-to-avoid?u=76281980&t=400)** So those are just a few of the mistakes that I sometimes see made, with regard to Cloud migration planning.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (4)
> **Env Vars:** isp (4)
> **Analogies:** such as (2), imagine (1)
> **Code Keywords:** let (1), case, (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (1), warning (1)
> **Speakers:** - [instructor] (1)

#### Infrastructure and logical considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=1)** - [Instructor] Before you begin migrating a workload to the cloud, there are a number of logistical considerations that you will have to take into account.
>
> **[0:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=7)** One of the most important considerations is how much bandwidth you have, and how much of that bandwidth is currently in use.
>
> **[0:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=14)** Because when you take an application that's running on premises, and you shift that application to the cloud, then you're going to end up consuming a little bit of extra internet bandwidth as users access that application in its new location.
>
> **[0:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=25)** So if you find that you don't have enough bandwidth available to support that application, then you may need to look at alternative measures.
>
> **[0:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=32)** Some cloud providers offer a direct connection between your data center and the cloud, so that might be an option, but depending on where you're located at, a direct connection might not be available.
>
> **[0:43](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=43)** So you'll need to consider is the direct connection warranted?
>
> **[0:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=46)** Is it available, and if it is available, how much is it going to cost?
>
> **[0:50](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=50)** And how fast is that direct connection going to be?
>
> **[0:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=53)** Is the direct connection fast enough to support your application in the cloud or does it give you even more bandwidth than you're actually going to need?
>
> **[1:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=61)** These are all very important questions to consider.
>
> **[1:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=64)** Another critically important consideration to take into account is whether or not data is going to need to be migrated along with the application.
>
> **[1:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=72)** Now certainly there are some applications that can be migrated without having to worry about migrating data too, but very often, migrating an application also means migrating the application's data.
>
> **[1:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=82)** So if you are going to have to migrate data, then you need to think about how much data needs to be migrated.
>
> **[1:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=88)** And not just that, what is the data's change rate?
>
> **[1:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=90)** And the reason why this is so important is because depending on how large the dataset is, uploading that data across your internet connection to the cloud provider might not be practical.
>
> **[1:41](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=101)** It may not be a big deal to migrate a few gigabytes of data, but if you've got a petabyte of data, that's a completely different story.
>
> **[1:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=107)** You're going to need to look at a different method of migrating that data to the cloud.
>
> **[1:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=112)** So consider how much data needs to be migrated and how quickly that data changes because the data's change rate is also going to impact the approach that you have to take when migrating the data.
>
> **[2:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=127)** You'll also need to think about the actual method that you'll use to migrate a virtual machine.
>
> **[2:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=132)** The first step in a virtual machine migration usually involves exporting the virtual machine.
>
> **[2:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=137)** The screen capture on the left for example shows Microsoft Hyper-V.
>
> **[2:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=142)** Here I'm right clicking on a virtual machine to reveal the shortcut menu.
>
> **[2:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=146)** You'll notice that the Hyper-V manager provides an export option that can be used to export the virtual machine.
>
> **[2:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=152)** Similarly, the screen capture on the right was taken from a VMware system.
>
> **[2:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=157)** Once again, I right click on the virtual machine, and you can see that there's an option to export the virtual machine as an OVF template.
>
> **[2:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=165)** If the virtual machine is relatively small, then you may be able to use the cloud provider's virtual machine import service.
>
> **[2:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=172)** If not, then other options exist.
>
> **[2:54](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=174)** Amazon for instance has three options for migrating virtual machines.
>
> **[2:59](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=179)** There is AWS Import/Export disk which is good for up to about 16 terabytes per disk, and then there's also AWS Snowball which can accommodate a petabyte scale migration, and AWS Snowmobile which is good for exabyte scale migrations.
>
> **[3:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=195)** As you prepare to migrate a virtual machine to the cloud, you'll need to consider what format the virtual machine is currently in.
>
> **[3:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=204)** Virtual machines typically consist of one or more virtual hard disks and a few configuration files.
>
> **[3:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=208)** Depending on what hypervisor you're using, the virtual hard disks may be in VHD format or perhaps another format such as VHDX or VMDK.
>
> **[3:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=219)** The reason why it's so important to know your virtual hard drive's file type is because some cloud providers only support importing specific types of virtual hard disks.
>
> **[3:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=229)** You may find that you have to convert your virtual machine's virtual hard disks to a different format before you'll be able to import them into the cloud provider's hosting service.
>
> **[3:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=237)** Incidentally, there may be some additional tasks that you also have to do, such as uninstalling the VMware tools.
>
> **[4:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=244)** If you do find that you need to convert your virtual hard disks to a different format, then there are two questions to consider.
>
> **[4:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=251)** First, what tools do you have at your disposal that can perform the conversion?
>
> **[4:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=255)** Remember, not every tool can handle every virtual hard disk format.
>
> **[4:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=259)** The second question to consider is whether there are any logistical problems that will prevent the conversion.
>
> **[4:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=265)** To show you what I mean, imagine that you have a virtual machine that's currently based on VHDX virtual hard disks but your cloud provider requires those disks to be converted to VHD format.
>
> **[4:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=277)** The problem with this type of conversion is that VHD-based virtual hard disks have a two-terabyte size limit.
>
> **[4:43](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=283)** If your original VHDX virtual hard disks are larger than two terabytes, then you won't be able to perform a direct conversion.
>
> **[4:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=291)** You'll have to either leave the VM running on premises, find a different cloud provider, or find a way to shrink the virtual hard disk.
>
> **[5:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/infrastructure-and-logical-considerations?u=76281980&t=300)** This is just one example of why it's so important to consider the logistics prior to initiating a virtual machine migration.

> [!info]- Semantic Content
>
> **Env Vars:** aws (3), vhd (3), vhdx (3), ovf (1), vmdk (1)
> **CLI Commands:** find (5), aws (3)
> **Analogies:** such as (2), for example (1), for instance (1), imagine (1)
> **Prerequisites:** you'll need (2), before you begin (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### 2. Rehosting

#### Which applications should be rehosted?
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=1)** - [Instructor] One of the simplest types of application migrations is called rehosting.
>
> **[0:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=5)** Rehosting, which is sometimes called lift and shift, simply refers to taking an application that's running on-premises and then moving that application, unchanged, to the cloud.
>
> **[0:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=15)** A lot of times this involves simply copying a virtual machine from an on-premises data center to a virtual machine host running in the cloud.
>
> **[0:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=25)** Many applications are location agnostic, meaning that they will work just as well in the public cloud as they do in your own data center.
>
> **[0:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=33)** Better still, there are any number of solutions available for migrating a virtual machine out of your data center and into the cloud.
>
> **[0:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=40)** If you look at the screen capture on the slide, for example, you can see Microsoft Hyper-V.
>
> **[0:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=45)** What I've done is right-click on a virtual machine, and you'll notice that there's an export option.
>
> **[0:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=49)** This export option exports the virtual machine to a file format that you can then copy up to the cloud and use to create a brand new virtual machine within the cloud.
>
> **[1:02](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=62)** Even though it's often very easy to rehost an application to the public cloud, it's very important to remember that the public cloud isn't necessarily the panacea that cloud providers so often market it as being.
>
> **[1:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=75)** Some applications are actually better suited to running on-premises in your own data center than to being rehosted in the cloud.
>
> **[1:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=84)** So let's talk about some examples of some applications that should probably continue to run on-premises.
>
> **[1:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=90)** For starters, applications that are latency-sensitive should probably be kept in-house, because when you migrate an application to the cloud, that application will generally incur some increased latency simply because of the connection speed between your users and the cloud that's hosting the application.
>
> **[1:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=108)** Likewise, applications that require large amounts of bandwidth should also probably remain on-premises, because your internet connection that you're using to communicate with the cloud may not be able to supply the required bandwidth.
>
> **[2:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=123)** You might also want to keep applications that are tied to your most sensitive data in-house in your own data center.
>
> **[2:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=129)** Now, having said that, the hyperscale cloud provider, such as AWS and Microsoft Azure, do tend to be secure.
>
> **[2:16](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=136)** However, a lot of organizations feel a lot more comfortable keeping their most sensitive data protected in their own data center, so that's something to think about.
>
> **[2:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=146)** You might also consider keeping an application on-premises if that application has dependencies on resources that also reside on-premises.
>
> **[2:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=155)** While such an application could very well work in the cloud, moving that application to the cloud will create latency between the application and its dependency resources residing on-premises.
>
> **[2:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=165)** Furthermore, if you happen to have an internet connection failure, then the application will quit working for the duration of that failure simply because it's unable to communicate with its dependencies.
>
> **[2:59](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=179)** Finally, I recommend keeping an application running on-premises if it's going to be cost-prohibitive to run it in the cloud, or if migrating it to the cloud simply isn't going to be practical, and there are applications out there like that.
>
> **[3:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=192)** Additionally, I recommend keeping an application running on-premises if you don't feel good about placing it in the cloud.
>
> **[3:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=199)** We have instincts for a reason, and I believe that it's important to trust your instincts.
>
> **[3:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/which-applications-should-be-rehosted?u=76281980&t=203)** So if you have an application and something just doesn't feel right about moving it to the cloud, there may be a good reason why.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), let (1), continue (1), require (1), protected (1)
> **Definitions:** is called (1), refers to (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **UI Navigation:** right-click (1)
> **Speakers:** - [instructor] (1)

#### Performance considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=1)** - [Instructor] As you prepare to rehost an application, it's extremely important to keep performance in mind.
>
> **[0:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=7)** Virtual machines will almost always perform differently in the cloud than they do on premises.
>
> **[0:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=11)** Even if you allocate that virtual machine with the same amount of memory and the same CPU resources as the virtual machine had on premises.
>
> **[0:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=20)** And while this may sound a little bit counterintuitive, there are actually several different reasons for this difference in performance.
>
> **[0:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=26)** So I'll talk about a few of those.
>
> **[0:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=30)** But before I begin explaining the reasons why a virtual machine might perform differently in the cloud than it does on premises, I want to be sure and point out that it's extremely important to take a performance benchmark of your virtual machines before you begin rehosting them in the cloud.
>
> **[0:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=45)** That way you have a basis of comparison for your virtual machine performance.
>
> **[0:50](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=50)** You can look at the performance before the migration versus the performance after the migration and see how it compares.
>
> **[0:59](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=59)** So, why is it that a virtual machine might perform differently in the cloud, even though it's been allocated with similar hardware to what was being used on premises?
>
> **[1:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=67)** Well, there are a few different reasons, but one of those reasons has to do with the virtual machine's location.
>
> **[1:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=72)** When you move a virtual machine to the cloud, that virtual machine is going to be placed on a different virtual network than the one that was being used on premises.
>
> **[1:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=80)** And this difference in virtual networks changes the path that's used to access resources.
>
> **[1:27](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=87)** These resources can be everything from a DNS server, to a backend database, to possibly the microservices that the application depends on.
>
> **[1:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=95)** And this path change can introduce extra latency, especially where WAN tranversal is concerned, and then that latency plays directly into the application's overall performance.
>
> **[1:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=106)** So simply put, changing the application's location to a different virtual network can introduce latency and cause the application's performance to suffer.
>
> **[1:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=117)** Now it's important to note that not every application is going to suffer from poor performance in the cloud as a result of latency.
>
> **[2:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=124)** Some applications do very well in the cloud, but it's important to at least be aware that changing the application's location could potentially introduce latency that might result in a performance issue.
>
> **[2:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=137)** So, what are some other potential issues?
>
> **[2:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=140)** Well, one possible issue is cloud provider throttling.
>
> **[2:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=143)** Now, not every cloud provider does this, but there are some providers out there that will actually cause your application to run a little bit more slowly than it otherwise would if it begins consuming excess resources.
>
> **[2:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=155)** You might also have to contend with something called the Noisy Neighbor Syndrome.
>
> **[2:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=159)** The idea behind this one is that when you run an application in the cloud, you're typically sharing the host server with other tenants.
>
> **[2:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=166)** In other words, other people who subscribe to the same cloud and need to run their workloads on that cloud.
>
> **[2:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=171)** So, if another tenant has a workload that suddenly consumes a lot of resources, that may make it so that the server is less able to provide you with the resources that you need for your workload until that competing workload's demand diminishes.
>
> **[3:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=188)** And there are a few other reasons why your virtual machine might perform a little bit differently in the cloud than it does on premises.
>
> **[3:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=195)** One potential reason is that the virtual machine might be running on a different hypervisor than what you were using.
>
> **[3:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=201)** Maybe you ran the virtual machine on Microsoft Hyper-V in-house and the cloud provider is using VM Ware or vice versa.
>
> **[3:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=208)** Similarly, the underlying storage that the cloud provider is using might be faster or it might be slower than what you had been using on premises.
>
> **[3:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=217)** There might also be differences in the physical CPUs on which the workload is running.
>
> **[3:43](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=223)** Maybe your CPUs were a little bit faster than the ones that the cloud provider was using or maybe the cloud provider has faster CPUs.
>
> **[3:50](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=230)** Either way, you're going to see a difference in performance.
>
> **[3:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=233)** And then finally, you have to consider the issue of WAN traversal.
>
> **[3:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=237)** You're now accessing that application across a WAN link which can reduce performance.
>
> **[4:02](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=242)** Additionally though, you have to remember that that WAN link is being used for other purposes.
>
> **[4:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=247)** So, you have traffic contingent that's occurring.
>
> **[4:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=249)** Users will use that WAN link for a variety of different purposes and depending on how heavily that WAN link is being used, you might see performance drop off at certain times of the day.
>
> **[4:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/performance-considerations?u=76281980&t=260)** So those are just a few of the potential performance issues that can result from migrating an application to the cloud.

> [!info]- Semantic Content
>
> **Env Vars:** wan (6), cpu (1), dns (1)
> **Code Keywords:** this, (1), finally, (1)
> **Warnings:** note that (1), be aware (1)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)

#### Estimating costs
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=1)** - [Instructor] Before you migrate a workload to the cloud, it's important to know how much it's going to cost to run that workload in the cloud.
>
> **[0:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=8)** Now cloud providers usually disclose pricing on their website.
>
> **[0:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=12)** But the costs are typically based on resource consumption.
>
> **[0:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=15)** So until you know how heavily that application is going to be used, it's impossible to truly know how much it's going to cost to run the application in the cloud.
>
> **[0:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=26)** So as I mentioned on the previous slide, most of the cloud providers do post their pricing online so that you can get a feel for the pricing before you begin migrating your workload.
>
> **[0:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=35)** Unfortunately, the pricing formulas can sometimes be cryptic and complex.
>
> **[0:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=39)** Pricing can vary widely based on things like capacity, licenses, region and much, much more.
>
> **[0:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=45)** So I've provided a couple of screen captures from Amazon Web Services just to give you a feel for how this might work.
>
> **[0:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=52)** If you look at the screen capture in the lower right portion of the slide, you can see some pricing for virtual machine instances.
>
> **[0:59](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=59)** And you can see that the pricing varies based on the instance size.
>
> **[1:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=64)** And the instance size takes into account things like the number of virtual CPUs, the amount of memory and the instance storage that's provisioned to the virtual machine.
>
> **[1:13](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=73)** But you also have to look at things like the operating system.
>
> **[1:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=77)** In other words, is the instance running Linux or is it running Windows.
>
> **[1:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=80)** There's going to be a difference in price depending on what you're using.
>
> **[1:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=83)** Also, some instances are provisioned with extra software.
>
> **[1:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=88)** The tab that is selected for example, is for windows with SQL Server Enterprise.
>
> **[1:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=94)** If you take away the SQL Server license, the price tends to go down.
>
> **[1:38](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=98)** So, that's just an example of the way that virtual machines can be priced.
>
> **[1:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=102)** Now, if you look at the screen capture on the left side of the screen, the screen capture provides some of the pricing for Amazon's EBS volume storage.
>
> **[1:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=111)** And in the case of storage, there's generally a fee per gigabyte per month provision storage.
>
> **[1:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=117)** But that fee varies depending on the type of storage that you're using, and on how heavily that storage is being used.
>
> **[2:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=124)** So there are a number of different factors that go into determining the overall price of a cloud resource.
>
> **[2:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=130)** So it's important to scrutinize the pricing that the cloud providers give you so that you can know what the workload is truly going to cost you once you've migrated.
>
> **[2:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=141)** So the takeaway is that when you run a virtual machine in the cloud, there are certain hardware resources that are allocated to that virtual machine.
>
> **[2:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=148)** And you're charged for those hardware resources, even if the virtual machines workload isn't actually using all of them.
>
> **[2:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=155)** So, it's important to size the virtual machine according to the hardware that you need.
>
> **[2:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=160)** A small idle virtual machine really might not cost very much to operate in the cloud.
>
> **[2:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=165)** But a high performance workload running on a large scale virtual machine can actually cost thousands of dollars every month to operate.
>
> **[2:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=172)** So it's important to size your virtual machine according to your workloads needs.
>
> **[3:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=180)** So some of the things that influence the cost of operating a virtual machine in the cloud are the virtual machine size.
>
> **[3:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=186)** In other words, how many virtual CPUs does the virtual machine have, how much memory has been allocated to it and that sort of thing.
>
> **[3:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=192)** Also, the virtual machine operating system plays a role in the cost.
>
> **[3:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=197)** Windows instances are typically more expensive than Linux instances, but not always.
>
> **[3:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=202)** And some cloud providers even offer an option to bring your own license which can substantially bring down the cost of the virtual machines.
>
> **[3:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=210)** You also have to take into consideration the instance type.
>
> **[3:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=213)** Are you using an on demand instance, a reserved instance or something else?
>
> **[3:38](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=218)** The instance type can play a major role in the overall cost.
>
> **[3:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=222)** Additionally, you need to look at the billing frequency.
>
> **[3:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=225)** Is the cloud provider billing you by the minute, by the hour, by the second, by the month?
>
> **[3:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=231)** The billing frequency can play a big role in the overall cost.
>
> **[3:56](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=236)** So what are some other factors that determine the overall cost of running a virtual machine in the cloud?
>
> **[4:02](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=242)** Well, one such factor is the hardware that the virtual machine is running on.
>
> **[4:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=247)** If you have dedicated hardware that is being used solely by your own organization, that dedicated hardware is going to cost more than sharing hardware with other cloud tenants.
>
> **[4:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=258)** You also need to consider whether or not the virtual machine is consuming a public IP address.
>
> **[4:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=263)** Some but not all cloud providers charge a premium price for the consumption of a public IP address.
>
> **[4:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=270)** So that's certainly something that you're going to want to look at.
>
> **[4:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=274)** Now one of the biggest factors that influences cost is the volume of data stored in conjunction with a virtual machine.
>
> **[4:41](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=281)** The more data that you're storing, the more it's going to cost you.
>
> **[4:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=285)** You also have to consider the frequency with which the data is accessed.
>
> **[4:50](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=290)** A high performance storage tier is going to cost more than an archival tier.
>
> **[4:55](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=295)** Finally, consider the number of snapshots that you're maintaining in relation to that virtual machine.
>
> **[5:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=300)** Most cloud providers do charge for the existence of snapshots.
>
> **[5:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=306)** Another factor that can determine the overall cost of running a virtual machine in the cloud is the geographic region within which the virtual machine is being hosted.
>
> **[5:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=315)** Some regions tend to be more expensive than others.
>
> **[5:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=319)** Replication can also drive up the cost of hosting a virtual machine in the cloud.
>
> **[5:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=323)** If you're replicating your virtual machine, to another availability zone or to another region, that replication process is going to result in extra cost, as does having a secondary copy of the virtual machine.
>
> **[5:36](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=336)** You'll also find that there are costs for using ancillary cloud services.
>
> **[5:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=340)** I'm talking about things like load balancers or a cloud based Active Directory or a backend database.
>
> **[5:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=347)** And of course, usage demand spikes can also drive up the cost.
>
> **[5:50](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=350)** Now if you think about the cost chart that I showed you a few slides back, you may recall that Amazon just charges a flat hourly fee for their virtual machines.
>
> **[6:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=361)** The reason why I say that usage demand spikes can drive up cost, is because even if the virtual machine is being billed at a flat rate per hour, the demand spikes can result in increased internet bandwidth consumption, and increased storage IOPS and increase storage consumption.
>
> **[6:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=377)** And there are typically charges associated with those sorts of activities.
>
> **[6:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=384)** So what are some best practices for keeping your cost in check?
>
> **[6:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=388)** Well one thing that I recommend doing is using the cloud service providers cost calculator to estimate your cost ahead of time.
>
> **[6:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=395)** Now, not every cloud provider offers a cost calculator, but the big ones generally do.
>
> **[6:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=400)** So, that can be a very helpful tool to help you get a feel for what your virtual machine might cost to operate in the cloud.
>
> **[6:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=406)** Another thing that you can do is to perform testing before migrating production workloads to the cloud.
>
> **[6:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=412)** The idea here is to create a workload that mimics your production workload but on a smaller scale, estimate what you think it's going to cost to run that test workload in the cloud.
>
> **[7:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=423)** And then compare reality against your estimates to make sure that you estimated correctly.
>
> **[7:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=429)** By doing that, you can get a better feel for what it's going to cost to run your production workload in the cloud once it's been migrated.
>
> **[7:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=437)** Finally, one of the best things that you can do to keep your cloud cost in check, is to use the billing tools that the cloud service provider makes available to you.
>
> **[7:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=446)** One of the tools that I really like using is the AWS budget tool.
>
> **[7:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=450)** This is a tool provided by Amazon that allows you to create a budget for your cloud services.
>
> **[7:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=455)** You can think of it as a preset spending limit to keep you from going over budget.
>
> **[7:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=460)** And as you can see in the screen capture, Amazon even allows you to see your current spending versus your budgeted spending, so that you can get a feel for how quickly you're consuming your budget.
>
> **[7:50](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/estimating-costs?u=76281980&t=470)** So, those are just a few of the things that you can do to help keep your costs under control as you migrate to the cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), finally, (2), type. (1)
> **Env Vars:** sql (2), ebs (1), iops (1), aws (1)
> **CLI Commands:** find (1), make (1), aws (1)
> **Definitions:** in other words (2), is a  (1)
> **Analogies:** for example (1), think of it as (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)

#### Is it better to migrate or rebuild?
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=1)** - [Instructor] As you work toward migrating a virtual machine to the cloud, one of the things that you'll have to consider is whether it's better to migrate the virtual machine as is or if you should try to reconstruct the virtual machine rather than trying to migrate it.
>
> **[0:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=14)** Sometimes virtual machines can be migrated to the cloud as is with absolutely no issues.
>
> **[0:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=20)** Other times, you might find that the migration will go much more smoothly if you take the time to rebuild the virtual machine rather than simply trying to migrate it.
>
> **[0:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=31)** When making a choice between migrating a virtual machine as is or rebuilding the virtual machine first, there are a number of different things to consider.
>
> **[0:38](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=38)** One such consideration is how many virtual machines need to be migrated.
>
> **[0:43](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=43)** If you've only got a couple of virtual machines that you're migrating, then it may make sense to take a little bit of time and look at the contents of the virtual machines and see if they could benefit from being rebuilt.
>
> **[0:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=53)** If, however, you have a large number of virtual machines, then it might be better to just go ahead and migrate those virtual machines as is.
>
> **[1:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=61)** You should also consider if the migration process can be reliably automated, especially if you have a lot of very similar virtual machines, as automation can greatly simplify the process of migrating to the cloud and reduce the amount of time that it takes.
>
> **[1:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=78)** Another thing to think about is whether or not you experienced any issues during the migration testing.
>
> **[1:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=84)** If you created a similar virtual machine and did a test migration to the cloud and found that the test migration was somewhat problematic, you might find that migrating the production virtual machine is simpler if you take the time to rebuild the virtual machine before attempting a migration.
>
> **[1:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=102)** Another thing to consider is the age of the virtual machines that you're thinking about migrating.
>
> **[1:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=107)** If those virtual machines are brand new, they're probably already running in optimal configuration and there's really no benefit to rebuilding them.
>
> **[1:54](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=114)** If, on the other hand, the virtual machines are really old, then they may have undergone multiple software update cycles and have a lot of clutter that can be reduced by rebuilding the virtual machine.
>
> **[2:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=125)** Now, another important question is can the virtual machine actually benefit from being cleaned up?
>
> **[2:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=130)** If you were to do a rebuild on the virtual machine, what's the tangible benefit to that rebuild?
>
> **[2:16](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=136)** Are you going to be able to improve performance?
>
> **[2:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=138)** Is the virtual machine;s stability going to be improved?
>
> **[2:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=141)** These are important questions to consider.
>
> **[2:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=144)** Another question is, is rebuilding the virtual machine even going to be an option?
>
> **[2:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=149)** In some cases, you might not have the software that you need to be able to rebuild the virtual machine, so you're really just going to have to go with a virtual machine as is.
>
> **[2:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=159)** And finally, does the benefit of rebuilding a virtual machine justify the cost and the effort involved in the rebuild process?
>
> **[2:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=166)** This is a critically important question to consider as nearly all business decisions are in some way tied to cost.
>
> **[2:55](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=175)** Another important thing to consider is whether rebuilding the virtual machine will allow you the opportunity to fully test and validate the virtual machine without impacting the production workload in the process.
>
> **[3:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=186)** Remember, you don't want to accidentally introduce problems into a production workload simply because you saw the potential benefit of rebuilding the virtual machine.
>
> **[3:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=195)** Another thing to think about is whether or not you're going to be able to reduce the downtime window incurred during the migration by rebuilding the virtual machine.
>
> **[3:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=203)** Sometimes this one is a consideration, sometimes it isn't, but it is something to think about.
>
> **[3:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=210)** Finally, I recommend considering if there might be other ways of getting benefits that are similar to that of rebuilding the virtual machine, but without actually rebuilding it.
>
> **[3:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=220)** For example, if your goal behind rebuilding a virtual machine is to apply a more standardized configuration to the VM, you might be able to get similar results by using something like the Desired State Configuration Tool rather than going through the hassles of rebuilding the virtual machine.
>
> **[3:56](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=236)** And this is an important consideration because rebuilding a virtual machine from scratch can be time-consuming, in some cases, it can be expensive, and there's always the potential for accidentally introducing a problem into a production workload simply by rebuilding the virtual machine.
>
> **[4:13](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=253)** So if you're able to use another tool and do something a little bit less drastic than rebuilding, it might benefit you.
>
> **[4:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/is-it-better-to-migrate-or-rebuild?u=76281980&t=259)** So that's just something to think about.

> [!info]- Semantic Content
>
> **Code Keywords:** if, (2), finally, (2), new, (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** similar to (1), for example (1)
> **Speakers:** - [instructor] (1)


### 3. Replatforming

#### What is replatforming?
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=1)** - [Instructor] Replatforming is a less popular and slightly less well known cloud migration method than rehosting.
>
> **[0:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=7)** Replatforming is a lot like rehosting in that you're taking a workload that's currently running on premises and then lifting and shifting that workload to the cloud, but there is one key difference, and that key difference is that significant architectural changes are made to the application as a part of the migration process.
>
> **[0:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=24)** If you look at the diagram shown on the slide for example, you can see on the left side of the diagram an application as it exists on premises.
>
> **[0:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=31)** You can see the application server and the database that's connected to the application.
>
> **[0:36](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=36)** When we move that to the cloud we're breaking that apart into two separate components.
>
> **[0:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=40)** We have the server application, which might continue to run within a virtual machine, but you'll notice that the database has been separated from the application.
>
> **[0:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=49)** This might be moved to a cloud database service, for example, rather than simply running that database as a part of the virtual machine.
>
> **[1:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=60)** Switching from a database server to database as a service is easily one of the most popular examples of replatforming, but certainly it's not the only example.
>
> **[1:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=69)** Another example is abandoning an expensive web server for an open source solution that does the same thing.
>
> **[1:16](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=76)** For example, you might currently have a web application running on a Windows web server running Internet Information Services.
>
> **[1:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=82)** An example of replatforming that application might be moving the web application over to a Linux server.
>
> **[1:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=88)** Another example of replatforming might be breaking down a complex application into a series of microservices.
>
> **[1:38](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=98)** Even though there are a wide variety of ways to replatform an application, there are some goals behind the replatforming process that are more or less universal.
>
> **[1:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=108)** One such goal is to retain the same level of core functionality.
>
> **[1:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=112)** Your application should do essentially the same thing after it's been replatformed as it did before it was migrated.
>
> **[1:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=118)** Another goal is to make sure that the entire process is completely transparent to your end users.
>
> **[2:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=123)** Remember, your users don't really care how an application works, they just want it to work.
>
> **[2:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=129)** So you need to make sure that the application delivers the same features and capabilities after it's been replatformed as it had prior to the replatforming process.
>
> **[2:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=138)** Additionally, you're going to want to make sure that the application delivers the same level of performance, if not better performance, after the replatforming process is complete.
>
> **[2:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=149)** Finally, try to avoid doing too much all at once.
>
> **[2:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-replatforming?u=76281980&t=152)** You don't want to accidentally introduce bugs or compatibility problems into your application as a result of the replatforming process.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Analogies:** for example (3)
> **Code Keywords:** continue (1), finally, (1)
> **Definitions:** is a  (2)
> **Best Practices:** avoid doing (1)
> **Speakers:** - [instructor] (1)

#### Advantages of replatforming
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=1)** - [Narrator] In the previous video, I talked about what replatforming is and a few goals to keep in mind as you move forward with a replatforming project.
>
> **[0:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=8)** But I've yet to talk about why someone would actually want to replatform an application.
>
> **[0:13](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=13)** After all, replatforming involves a significant amount of work.
>
> **[0:16](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=16)** So what are the benefits to replatforming an application?
>
> **[0:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=20)** Well in this lesson, I'm going to talk about some of the more common benefits, but as I do, it's important to keep in mind that the benefits that you'll derive from re-platforming an application can vary significantly depending on the individual application that is being replatformed.
>
> **[0:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=35)** As you can imagine, replatforming an application can be complicated and it tends to be a lot of work.
>
> **[0:41](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=41)** So why might you replatform an application?
>
> **[0:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=44)** Well one possible reason is to better adhere to industry standards.
>
> **[0:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=48)** Industry standards tend to evolve over time.
>
> **[0:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=51)** So even though an application conforms to industry standards at the time that it's created, there's no guarantee that it will conform to today's standards.
>
> **[1:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=60)** So it's possible that by replatforming an application, you might be able to better adapt the application to today's current industry standards.
>
> **[1:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=69)** Another possible reason for replatforming might be to reduce licensing costs.
>
> **[1:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=74)** If for example, you move an application off of Microsoft SQL Server and onto a Database as a Service platform in the cloud, then you don't need that SQL Server license.
>
> **[1:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=84)** Finally, you might choose to replatform an application as a way of reducing the management complexity.
>
> **[1:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=90)** This can be especially true when you adopt a managed service as opposed to something that you have to manage yourself.
>
> **[1:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=99)** So what are some other reasons why you might choose to replatform an application?
>
> **[1:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=104)** Well one possible reason might be standardization.
>
> **[1:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=108)** If, for example, you've got some other applications that are already adhering to a certain standard then you might replatform an application as a way of bringing that application in line with your other applications.
>
> **[2:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=120)** For example, if your other applications use Database as a Service and you've got one application that uses a standalone database, you might replatform that lone application to use Database as a Service as opposed to a standalone database, just as a way of making it more consistent with your other applications.
>
> **[2:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=139)** You might also choose to replatform an application as a way of introducing new functionality.
>
> **[2:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=145)** Now I'm not talking about new functionality for the users, because that goes a little bit beyond simple replatforming.
>
> **[2:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=151)** I'm talking about new functionality from the standpoint of IT.
>
> **[2:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=155)** For example, you might choose to replatform an application as a way of making that application more compatible with your backup application.
>
> **[2:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=164)** And still another reason why you might choose to replatform an application would be to achieve better performance at a lower cost because of more efficient resource usage.
>
> **[2:55](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=175)** Still another possible reason for replatforming an application might be to achieve code reusability.
>
> **[3:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=181)** For example, you might choose to break an application down into a series of microservices that can be leveraged by other applications that you're using throughout your organization.
>
> **[3:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/advantages-of-replatforming?u=76281980&t=191)** And finally, you might choose to replatform an application as a way of achieving better compatibility with the management and monitoring tools that you use in your organization.

> [!info]- Semantic Content
>
> **Analogies:** for example (5), imagine (1)
> **Code Keywords:** finally, (2), if, (1)
> **Env Vars:** sql (2)
> **Warnings:** keep in mind (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [narrator] (1)

#### Some potential issues with replatforming
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=1)** - [Instructor] Even though replatforming can be a great way of improving your applications as you migrate them to the cloud, this has to be done carefully.
>
> **[0:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=7)** Without careful planning, replatforming can introduce a variety of problems.
>
> **[0:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=12)** These problems typically include things like performance problems, problems with compatibility, or even loss of certain functionality within the application.
>
> **[0:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=22)** So let's delve into this a little bit.
>
> **[0:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=24)** One of the more common causes of an application's performance being degraded is that the application was transitioned from a database server to database as a service.
>
> **[0:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=35)** Now before I go on, I need to clarify that simply replatforming an application to use database as a service doesn't necessarily mean that the application's performance is going to suffer.
>
> **[0:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=46)** It's just as likely that the application's performance won't change at all or that the performance will improve.
>
> **[0:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=51)** But the thing about transitioning to database as a service is that you don't have access to the underlying physical hardware meaning that if additional resources are required you don't necessarily have the ability to provision those resources.
>
> **[1:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=65)** Additionally, depending on which database as a service platform you are using, you may not have the ability to optimize the database.
>
> **[1:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=72)** So there are any number of reasons why using database as a service can potentially cause performance to suffer.
>
> **[1:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=78)** Another reason why performance can sometimes suffer is because replatforming an application sometimes involves breaking the application into a series of managed services or maybe even micro services.
>
> **[1:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=91)** And whenever you divide up an application in this way, those various services have to be able to communicate with one another and that communications process can sometimes introduce latency.
>
> **[1:41](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=101)** Now again, I'm not saying that simply adopting managed services or even micro services is going to degrade your application's performance.
>
> **[1:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=109)** In some cases the opposite happens.
>
> **[1:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=111)** But the potential does exist for degraded performance, so it's very important to do testing before you commit to replatforming your application in that way.
>
> **[2:02](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=122)** Now I also mentioned that replatforming an application can sometimes result in problems with application compatibility and/or loss of functionality.
>
> **[2:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=132)** So let's talk about a few reasons why this can happen.
>
> **[2:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=135)** One of those reasons is that database as a service sometimes lacks features that are supported by an on-premises database.
>
> **[2:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=143)** For example let's suppose that you're currently running SQL Server in order to support a particular application.
>
> **[2:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=149)** But you decide to replatform that application and transition to Azure SQL instead.
>
> **[2:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=155)** Well Azure SQL doesn't necessarily support the same features as SQL Server.
>
> **[2:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=160)** For example Azure SQL only supports Windows authentication.
>
> **[2:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=164)** It doesn't support SQL logins.
>
> **[2:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=166)** Similarly, features that depend on the SQL Server agent aren't supported and features that require access to the MSDB database such as things like backup jobs or central management servers are also not supported.
>
> **[3:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=180)** So when you transition to database as a service, or to any managed service for that matter, you may run into a situation in which you no longer have access to certain features and that lack of access can potentially cause some compatibility problems.
>
> **[3:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=194)** So those are just a few of the potential disadvantages associated with replatforming an application.
>
> **[3:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/some-potential-issues-with-replatforming?u=76281980&t=201)** Again, I'm not trying to discourage you from replatforming an application but these are some things that you'll need to think about before you commit to replatforming.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), msdb (1)
> **Code Keywords:** let (3), require (1)
> **Analogies:** for example (2), such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Identifying good candidates for replatforming
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=1)** - [Instructor] Even though replatforming is a viable and accepted method for moving an application to the cloud, in my opinion replatforming should be the exception, not the rule.
>
> **[0:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=11)** Generally speaking you wouldn't go looking for applications to replatform.
>
> **[0:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=14)** Replatforming tends to be complex, it can be expensive, and it can be time consuming and sometimes even problematic.
>
> **[0:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=22)** So it's best to avoid replatforming if you can.
>
> **[0:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=26)** Replatforming should be the result of a business or a technical need.
>
> **[0:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=29)** It shouldn't be a quest to go looking for applications to replatform.
>
> **[0:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=34)** Generally there are other easier migration techniques that you should be using.
>
> **[0:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=39)** Now I'm not trying to suggest that you should never ever replatform an application.
>
> **[0:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=45)** Replatforming definitely has its place.
>
> **[0:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=47)** So with that said, let's take a look at a few situations in which replatforming might be beneficial.
>
> **[0:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=53)** One such situation involves migrating a simple database application to the cloud.
>
> **[0:59](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=59)** Suppose for a moment that you've got an application that depends on a backend database server and you want to migrate that application to the cloud.
>
> **[1:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=66)** Well rather than migrating the application and also migrating the database server, you might choose to replatform the application so that it uses database as a service instead of using the database server.
>
> **[1:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=79)** And by doing that you may end up bringing down your licensing cost.
>
> **[1:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=82)** You might reduce management complexity.
>
> **[1:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=85)** And the application might even perform a little bit better.
>
> **[1:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=88)** Now none of these benefits are guaranteed.
>
> **[1:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=90)** It's going to vary based on the application and the cloud provider that you're using.
>
> **[1:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=95)** But certainly it's possible that you will receive those benefits.
>
> **[1:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=99)** Another example of an application that might benefit from being replatformed is a utilitarian application.
>
> **[1:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=106)** I'm talking about things like web servers, DNS servers, maybe even DHCP servers.
>
> **[1:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=111)** Suppose for a moment that you're running a DNS server on an expensive operating system.
>
> **[1:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=117)** Well by replatforming that DNS server to something opensource, you may be able to reduce your licensing costs.
>
> **[2:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=124)** Finally, legacy applications that are running on legacy operating systems may also be a good candidate for replatforming.
>
> **[2:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=132)** Imagine for a moment that you've got a mission-critical application but it's something really old and it doesn't work with a modern operating system.
>
> **[2:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=141)** The problem with that is that you're running the application in an unsupported environment and you never want to get into the habit of running a production application in a way that's not supported.
>
> **[2:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=153)** So by replatforming that application you might be able to bring it up to date so that the application will run on a newer operating system that's more secure and perhaps even more importantly, supported.
>
> **[2:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-good-candidates-for-replatforming?u=76281980&t=164)** So those are just a few of the reasons why you might choose to replatform an application.

> [!info]- Semantic Content
>
> **Env Vars:** dns (3), dhcp (1)
> **Code Keywords:** let (1), finally, (1)
> **Definitions:** is a  (2)
> **Best Practices:** it's best to (1), you should never (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 4. Adopting SaaS

#### Why transition to SaaS?
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=1)** - [Instructor] Software as a service applications, or SaaS applications as they are often called, refer to applications that are available in the vendor's own cloud on a subscription basis.
>
> **[0:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=11)** So these aren't applications that you would install inside of a cloud-based virtual machine.
>
> **[0:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=15)** Instead there're something that is pre-installed by the vendor and configured by the vendor and ready to use.
>
> **[0:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=24)** One of the main benefits to adopting a software as a service application is that doing so can bring down your costs.
>
> **[0:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=31)** Now I'm not saying that you're always going to save money by using software as a service because that simply isn't true.
>
> **[0:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=37)** In some cases, it's legitimately cheaper to run an application on premises than to subscribe to a software as a service cloud.
>
> **[0:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=45)** But having said that, there are situations in which is it far less expensive to take the software as a service approach rather than hosting the application yourself.
>
> **[0:54](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=54)** One example of such a situation is a multitier application.
>
> **[0:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=58)** Multitier applications span multiple servers or multiple virtual machines.
>
> **[1:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=63)** So why might it be less expensive to operate a multitier application in a software as a service cloud?
>
> **[1:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=70)** Well if you think about it, multitier applications, as I said, span multiple servers.
>
> **[1:16](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=76)** And every one of those servers has to be licensed.
>
> **[1:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=78)** You'll need an application license.
>
> **[1:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=80)** You'll need an operating system license.
>
> **[1:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=82)** You might even need a client access license.
>
> **[1:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=85)** So you can probably save a lot of money off of your licensing cost by using software as a service instead.
>
> **[1:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=92)** Another situation in which software as a service may save you money is if the provider offers a better together strategy.
>
> **[1:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=100)** Some software vendors create a number of products that are designed to be used in a standalone environment but that have a relationship with one another.
>
> **[1:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=108)** And sometimes you can achieve enhanced functionality by using several of the vendor's products in conjunction with one another.
>
> **[1:56](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=116)** So the reason why it might save money going with a software as a service approach to such applications is that you might be able to get a bundle deal.
>
> **[2:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=124)** Rather than having to purchase licenses for every single one of the vendor's products, you might be able to simply purchase a software as a service bundle and gain access to all of those applications through a software as a service cloud.
>
> **[2:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=138)** Finally, there are some software vendors that artificially inflate their licensing cost if you want to run the application on premises.
>
> **[2:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=146)** So in those cases it's definitely going to be cheaper to take the software as a service approach instead.
>
> **[2:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=154)** Another potential benefit to adopting a software as a service application is that doing so might reduce your chances of experiencing an outage.
>
> **[2:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=162)** When you run an application in your own data center, you're the one who's responsible for ensuring that the application remains highly available.
>
> **[2:50](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=170)** And there's a significant cost associated with that.
>
> **[2:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=173)** After all, you have to put hardware in place that can take over in the event that there's a problem with the hardware that the application is running on.
>
> **[3:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=180)** Well in a software as a service environment, the software vendor already has that infrastructure in place in their own cloud.
>
> **[3:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=188)** So if there's a problem, the application should be able to keep running without you having to invest in all of the extra hardware that's required for redundancy because the cloud provider already supplies that.
>
> **[3:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=199)** And if an outage does occur, then the software provider's own engineers are already working on restoring service to that application, meaning that you and your staff don't have to do the troubleshooting.
>
> **[3:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=210)** The cloud provider does that for you.
>
> **[3:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=214)** Yet another benefit to adopting a software as a service application is that doing so can substantially reduce your maintenance cost.
>
> **[3:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=222)** After all, the vendor handles things like hardware maintenance.
>
> **[3:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=224)** I'm talking about things like server upgrades or replacing failed hard disks.
>
> **[3:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=229)** They also handle patch management, both for the application itself and for the operating system that the application is running on.
>
> **[3:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=237)** They also take care of license monitoring and perform a variety of other maintenance tasks.
>
> **[4:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=244)** Finally, the software as a service application vendor generally takes care of the application installation and making sure that the application is configured correctly.
>
> **[4:13](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-transition-to-saas?u=76281980&t=253)** So this means that you can rest assured that the application is installed correctly and configured in an optimal manner according to the vendor's specifications.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (2), install (1)
> **Code Keywords:** finally, (2)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### The advantages of a SaaS migration
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=1)** - [Instructor] Adopting a software as a service application is almost always going to be easier than running the same application inside of a cloud-based virtual machine.
>
> **[0:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=9)** And the reason for this is really simple.
>
> **[0:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=11)** There are a lot of things that the application vendor takes care of for you that you don't have to do yourself.
>
> **[0:16](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=16)** For example, you don't have to worry about creating a virtual machine and then making sure that the application is installed correctly.
>
> **[0:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=23)** You also don't have to worry about making sure that you have the correct versions of all the application dependencies, or that you correctly configure the application.
>
> **[0:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=32)** And of course you don't have to worry about keeping the application secure or keeping its patches up to date, because the application vendor handles all of that for you inside of their own cloud.
>
> **[0:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=44)** Another cost benefit to using a software as a service application is that software as a service application providers generally bill their customers at a flat rate.
>
> **[0:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=53)** Now if this doesn't necessarily hold true for every software as a service provider, but it does hold true for the vast majority of them.
>
> **[1:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=60)** So, software as a service providers normally bill their customers at a flat rate month after month.
>
> **[1:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=65)** This means that the billing is consistent, you always know what the application is going to cost you, regardless of how much you use the application.
>
> **[1:13](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=73)** In contrast, infrastructure as a service and platform as a service cloud providers typically bill their customers based on usage.
>
> **[1:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=82)** So if you happen to run an application inside of a cloud-based virtual machine, the fees that are charged for running that application are going to vary from one month to the next, depending on how much you've used the application.
>
> **[1:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=95)** But having said that, there can be ancillary charges associated with the use of those virtual machines.
>
> **[1:41](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=101)** These charges might include things like internet bandwidth consumption, storage IOPS, or data ERES fees.
>
> **[1:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=108)** So even though the virtual machine itself is being billed at a flat rate, the total billing may end up varying from one month to the next, simply due to these ancillary charges.
>
> **[1:59](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=119)** In contrast, software as a service providers that bill at a flat rate typically do truly bill at a flat rate, meaning that your total cost is going to be the same from one month to the next.
>
> **[2:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=132)** If you're trying to decide between a software as a service application and running the same application inside of a cloud-based virtual machine, you also have to consider the issue of support.
>
> **[2:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=142)** For starters, not every application is supported or licensed for use inside of a cloud-based virtual machine.
>
> **[2:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=149)** In contrast, if you run the application as a software as a service application, then the application's vendor ensures that the application is installed and configured in a way that is guaranteed to be supported.
>
> **[2:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=162)** Additionally, the software as a service vendor monitors the application health on your behalf and takes care of any problems that occur with the application along the way.
>
> **[2:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-advantages-of-a-saas-migration?u=76281980&t=171)** They also handle things like capacity planning, application availability, and troubleshooting, meaning that you don't have to worry about handling these things yourself.

> [!info]- Semantic Content
>
> **Env Vars:** iops (1), eres (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Potential disadvantages of SasS migration
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=1)** - [Instructor] Although there are numerous advantages to adopting a software as a service application, there are also some potential disadvantages that people don't generally talk about, so I want to take the opportunity to address some of those potential disadvantages.
>
> **[0:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=14)** One such disadvantage is the subscription cost will eventually exceed the cost of purchasing a perpetual license.
>
> **[0:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=21)** Now, admittedly, not every application is available with a perpetual license.
>
> **[0:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=25)** But assuming that you can purchase a perpetual license, that license incurs a one-time fee, whereas a software as a service application requires you to pay a fee month after month after month for as long as you use the application.
>
> **[0:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=39)** And if you do this for perpetuity, the cost that you pay for the subscription will eventually exceed the amount that you paid for a perpetual license.
>
> **[0:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=47)** Another thing that has to be considered with regard to the cost of a software as a service application is that depending on the vendor's terms of service, the vendor may end up being able to raise its rates at any time.
>
> **[1:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=60)** So if you do decide to adopt a software as a service application, be sure to check the terms and make sure that the rate is protected.
>
> **[1:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=69)** Another potential disadvantage to adopting a software as a service application is that you as the subscriber are almost always responsible for backing up the data that's associated with that application.
>
> **[1:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=81)** Now, that fact in and of itself isn't necessarily a disadvantage, but the one thing that can be a disadvantage is that backup applications tend to support all the major software as a service vendors, but they might lack support for backing up lesser known software as a service applications.
>
> **[1:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=97)** So you need to assess your ability to back up the data that's associated with an application before you commit to using it.
>
> **[1:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=105)** Another potential consideration with regard to software as a service applications is that if you ever decide to stop using the application, it may be difficult to export your data.
>
> **[1:56](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=116)** Now, if you've been creating backups of the application, then presumably you've already got a copy of your data within your backup.
>
> **[2:02](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=122)** The problem is that depending on what format that data is in, it might be difficult to convert it into something that you can use with another application.
>
> **[2:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=131)** Another thing that has to be considered is that if a software as a service provider goes bankrupt, then you might be left without access to the application, whereas if you had simply purchased a perpetual license for using the application on premises, you would still have access to the application even if the provider eventually went bankrupt.
>
> **[2:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=152)** An additional consideration is that software as a service applications are rarely customizable.
>
> **[2:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=157)** Remember, these applications reside in the vendor's cloud and they control the application configuration, so your options for customizing that application are extremely limited.
>
> **[2:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=168)** Additionally, because these applications are self-contained within the vendor's cloud, getting them to interoperate with other applications, especially legacy applications, might not be an option.
>
> **[2:59](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/potential-disadvantages-of-sass-migration?u=76281980&t=179)** So those are just some things to consider before adopting a software as a service application.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (1), protected (1), self (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Important considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=1)** - [Instructor] As you move toward adopting a software as a service application, there are some things that you should be thinking about and important questions that you should be asking yourself.
>
> **[0:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=10)** One such question is, why are you adopting this particular software as a service application?
>
> **[0:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=15)** This sounds like a really simple question, and it is, but it's also an important question, because there needs to be a business justification behind any application that you adopt.
>
> **[0:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=25)** It isn't good enough to adopt an application simply because it's what everybody else is using.
>
> **[0:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=31)** You need to be able to explain the business justification behind the investment that you're making in this particular application.
>
> **[0:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=39)** Another question that you should be asking is whether or not the software as a service provider offers an acceptable SLA.
>
> **[0:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=47)** For those of you who might be new to IT, SLA stands for Service Level Agreement.
>
> **[0:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=52)** Essentially, it's the guarantee that the provider gives you stating how much uptime they will guarantee for their application.
>
> **[1:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=61)** Nearly every software as a service provider issues some sort of SLA guaranteeing the availability of the application.
>
> **[1:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=68)** Some providers even go so far as to provide their customers with a financially-backed SLA.
>
> **[1:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=74)** Typically, these financially-backed guarantees will pay you a certain amount of money for every minute of downtime beyond what's stated within the SLA.
>
> **[1:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=85)** Another important question that you should be asking yourself is what impact will the application have on the organization's internet bandwidth?
>
> **[1:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=93)** Every organization has a finite amount of internet bandwidth available.
>
> **[1:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=97)** If you take an application that's been running on Premises and you move that application to the cloud, then your prism will be going to increase the internet bandwidth consumption as users cross over the internet connection to access that application running in the cloud.
>
> **[1:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=111)** So you need to consider if your organization has an adequate amount of internet bandwidth available for users to use that application in the cloud without impacting other functions.
>
> **[2:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=123)** Still, another question to be considered, is what are the DNS requirements for the application and are those requirements problematic?
>
> **[2:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=132)** Not every software as a service application requires you to modify your DNS settings.
>
> **[2:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=137)** But some applications do require the creation of DNS records.
>
> **[2:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=141)** If you look the screen capture shown on the right side of the screen, you can see some of the DNS records that had to be configured in order to use Microsoft Office 365.
>
> **[2:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=152)** Microsoft Office 365 uses a variety of DNS records in order to support its various services.
>
> **[2:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=159)** But Office 365 isn't an isolated example.
>
> **[2:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=162)** There are other cloud applications that require DNS records to be created.
>
> **[2:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=167)** So you need to consider your ability to create those DNS records and you need to make sure that the required DNS records aren't going to interfere with other DNS records that already exist.
>
> **[3:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=180)** Another question that might be worth asking is if there's an alternative software as a service provider that offers an equally compelling solution.
>
> **[3:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=188)** This isn't to say that you necessarily have to adopt that competing solution, but it's worth noting what options exist so that you can compare them to one another.
>
> **[3:16](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=196)** There might be differences in price or perhaps one application offers features that another doesn't.
>
> **[3:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=202)** So it's certainly worth evaluating the available options.
>
> **[3:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=205)** Yet another question to ask yourself is, does your proposed solution align well with your business model and your corporate culture?
>
> **[3:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=212)** In most cases, the answer will probably be yes, but over the years, I've occasionally run into applications that just really don't mesh well with the way that an organization does business.
>
> **[3:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=225)** And finally, you need to consider what your exit strategy is in case things don't work out.
>
> **[3:50](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=230)** This is perhaps the most important question of all, and yet it's a question that is very often overlooked.
>
> **[3:56](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=236)** In most cases, if your organization subscribes to a software as a service provider, you're probably going to continue using that provider for years to come.
>
> **[4:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=245)** But every once in a while you may find that a provider just doesn't meet your expectations and you're left with little choice but to walk away from the provider.
>
> **[4:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=254)** So, when that happens, what's your exit strategy?
>
> **[4:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=257)** What are you going to do to regain the functionality that was lost by walking away from the application?
>
> **[4:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=263)** Is there some other application that you can use?
>
> **[4:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=266)** What about your data?
>
> **[4:27](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=267)** How are you going to migrate that data from the old application to the new application?
>
> **[4:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/important-considerations?u=76281980&t=272)** These are very important things that you need to consider as a part of your cloud exit strategy in the event that the software as a service provider is no longer meeting your needs.

> [!info]- Semantic Content
>
> **Env Vars:** dns (9), sla (5)
> **Code Keywords:** require (2), finally, (1), continue (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)


### 5. Refactoring Workloads

#### The case for application refactoring
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=1)** - [Instructor] Another way that you might approach the cloud migration process is by refactoring some of your applications.
>
> **[0:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=7)** Application refactoring refers to modifying an application's source code in order to bring the application up to date.
>
> **[0:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=15)** So, let me give you an example of what the refactoring process might look like.
>
> **[0:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=20)** Sometimes developers like to modernize classic video games just as a fun project to do on the side.
>
> **[0:27](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=27)** Now, admittedly doing this isn't true refactoring because the developers are creating new code from scratch, not modifying existing code.
>
> **[0:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=35)** But even so, the end result is very similar to that of a refactoring project.
>
> **[0:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=42)** One of the best examples that comes to mind of such a project is Space Quest 3.
>
> **[0:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=47)** Space Quest 3 is an old adventure game.
>
> **[0:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=49)** It was originally created in 1989 by a gaming company called Sierra Online.
>
> **[0:54](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=54)** The original version of Space Quest 3 required 512 kilobytes of RAM.
>
> **[0:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=58)** That's kilobytes, not megabytes or gigabytes.
>
> **[1:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=61)** And it also required the computer to have 16 color graphics.
>
> **[1:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=65)** Now, that all seems ridiculously primitive by today's standards, but in 1989, this game was cutting edge.
>
> **[1:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=71)** As a matter of fact, there weren't a lot of computers that were able to run it, because 512k of RAM far exceeded what the average person had in their home at the time.
>
> **[1:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=81)** Much more recently, however, Space Quest 3 was recreated as an open-source project using the Unreal 4 engine.
>
> **[1:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=89)** And I've provided a link on this slide, if you want to check it out for yourself.
>
> **[1:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=94)** So, again, this isn't true refactoring because refactoring involves modifying existing source code.
>
> **[1:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=100)** However, this illustrates what refactoring often looks like, because the idea behind refactoring is to modify source code in order to bring an application up to date to take advantage of more modern capabilities.
>
> **[1:55](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=115)** So, why might an organization refactor an application?
>
> **[1:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=118)** Well, there are any number of reasons.
>
> **[2:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=120)** In the case of Space Quest 3, the reason was obvious.
>
> **[2:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=124)** Space Quest 3 was a really excellent adventure game, but it had become very dated.
>
> **[2:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=129)** Today's computers have far better graphics and sound than anything that was even remotely available back in 1989 when the game was released.
>
> **[2:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=137)** So, it only made sense for someone to pick up the game and recode it to take advantage of modern hardware.
>
> **[2:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=143)** But what about business applications?
>
> **[2:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=146)** Well, there are a number of different reasons why someone might choose to refactor a business application.
>
> **[2:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=150)** One possible reason is to address long existing bugs.
>
> **[2:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=155)** Perhaps an application has a bug in it and it's something minor and everybody knows about it.
>
> **[2:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=160)** And it's an annoyance, but nobody's ever really done anything about it.
>
> **[2:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=164)** Well, refactoring is an excellent opportunity to finally take care of that bug.
>
> **[2:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=169)** Another reason why an application might be refactored is to improve its performance.
>
> **[2:54](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=174)** I've also seen people refactor applications as a way of making them work with a modern database.
>
> **[3:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=180)** There's one organization, for example, that I know of that coded a number of applications many years ago and those applications were designed to use a database called Clipper.
>
> **[3:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=190)** Well Clipper eventually fell out of fashion, and the organization recoded those applications or refactored those applications rather, in an effort to make them work with SQL Server, thereby removing the dependency on the Clipper database.
>
> **[3:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=205)** Finally, an organization might choose to refactor an application in order to make for a more consistent user experience.
>
> **[3:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=213)** Depending on how old an application is, an application may use an end user interface that's far different than the ones that users expect today.
>
> **[3:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=224)** Now, certainly these aren't the only reasons to refactor an application.
>
> **[3:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=228)** There are many other reasons why you might choose to do so.
>
> **[3:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=231)** For example, you might choose to refactor an application in order to improve the end user experience and make the software easier to use.
>
> **[3:59](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=239)** I'm sure we've probably all seen examples of enterprise software that tends to be a really tedious or difficult to use.
>
> **[4:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=246)** So if you have the opportunity to make things easier on the user, why not do that?
>
> **[4:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=250)** Another reason why you might choose to refactor an application is to add interoperability with other line of business applications that your organization is currently using.
>
> **[4:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=260)** You might also choose to refactor an application in order to make it compatible with a modern and supported operating system.
>
> **[4:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=268)** I've seen situations in which an organization has an older application that was originally designed to work with an ancient operating system such as Windows Vista.
>
> **[4:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=277)** And by refactoring that application, you can make it compatible with a much newer operating system that's currently supported.
>
> **[4:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/the-case-for-application-refactoring?u=76281980&t=285)** Finally, I've seen organizations take the initiative to refactor an application in order to make the code behind that application a lot cleaner and easier to read.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7)
> **Code Keywords:** finally, (2), let (1), interface (1)
> **Env Vars:** ram (2), sql (1)
> **Exercise Files:** source code (3)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is an  (2)
> **Speakers:** - [instructor] (1)

#### Modernizing a refactored application
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980&t=1)** - [Instructor] There are both advantages and disadvantages to refactoring an application.
>
> **[0:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980&t=5)** I talked a lot about the advantages in the last video, but just to reiterate, one advantage is that you might be able to improve the application's performance by refactoring it.
>
> **[0:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980&t=14)** You can also use refactoring as an opportunity to introduce new features and capabilities into the application.
>
> **[0:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980&t=21)** And finally, by refactoring you can design the application to better interact with other line of business applications that you might be using and with infrastructure components such as backup and disaster recovery systems.
>
> **[0:36](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980&t=36)** In spite of the numerous benefits to refactoring an application, there are also some significant disadvantages that absolutely have to be considered.
>
> **[0:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980&t=44)** One such disadvantage is that the process of refactoring an application is time consuming, labor intensive, and it can be quite expensive.
>
> **[0:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980&t=53)** Another disadvantage is that application refactoring requires access to the application's original source code.
>
> **[1:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980&t=60)** So, you're not going to be able to take a third-party commercial application and refactor it, because you don't have the source code.
>
> **[1:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980&t=67)** You might be able to build a comparable application from scratch, but that isn't true refactoring.
>
> **[1:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980&t=74)** Finally, depending on what language the application was written in, you may not have anybody on hand who understands that language.
>
> **[1:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980&t=81)** At one time for example, COBOL was the most commonly used language for writing business applications.
>
> **[1:27](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980&t=87)** And yet today, there are very few people out there who understand COBOL.
>
> **[1:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980&t=91)** So, if your application does prove to have been written in an old language that nobody understands anymore, you may end up having to completely rewrite the entire application from scratch rather than simply being able to modify the existing code.
>
> **[1:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/modernizing-a-refactored-application?u=76281980&t=104)** So those are just some of the potential disadvantages to refactoring an application.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2)
> **Env Vars:** cobol (2)
> **Exercise Files:** source code (2)
> **Analogies:** such as (1), for example (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)


### 6. Retiring Workloads

#### Why retiring an application may be the best option
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=1)** - [Narrator] One of the most pervasive myths with regard to cloud migrations is that you should be running every application in the cloud and nothing on-premises.
>
> **[0:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=9)** In reality, nothing could be further from the truth.
>
> **[0:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=12)** There are some applications that are far better suited to running on-premises than in the cloud.
>
> **[0:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=17)** But having said that, there are also other applications that probably need to be retired.
>
> **[0:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=21)** So let's talk about some of those applications.
>
> **[0:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=26)** There are any number of reasons that might justify retiring an application.
>
> **[0:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=30)** For starters, if you have an application that's no longer being used, then it probably doesn't make sense to continue to invest money in maintaining that application, it might be better to go ahead and retire it.
>
> **[0:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=42)** It might also be time to retire an application if an alternative application exists and that alternative is clearly superior to the application that you're thinking about retiring.
>
> **[0:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=52)** Similarly, you might consider retiring an application if you have another application that essentially does the same thing.
>
> **[0:59](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=59)** After all, there's no reason to have two applications that do the same thing when you could combine the functionality into a single application.
>
> **[1:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=67)** Finally, You might consider retiring an application if it requires outdated hardware, or if it's meant to run on an unsupported operating system.
>
> **[1:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=78)** Another reason why you might choose to retire an application is because the application is no longer supported and/or the vendor has gone out of business.
>
> **[1:27](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=87)** Ideally, you never want to run an unsupported application in a production environment.
>
> **[1:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=92)** In reality, this is sometimes unavoidable, but it's best to avoid running anything unsupported in production if you can possibly avoid it.
>
> **[1:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=102)** Another reason why you might choose to retire an application is because the application has become too expensive to use.
>
> **[1:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=109)** There are a few reasons why this can happen.
>
> **[1:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=112)** For example, if the application is designed to run on older hardware, then it could get to the point where maintaining that hardware becomes cost prohibitive.
>
> **[2:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=121)** Similarly, there are application vendors out there that raise the licensing fee year after year, and eventually it simply might become too expensive to continue renewing the license for that application.
>
> **[2:13](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=133)** Yet another reason why you might choose to retire an application is because the application's problematic.
>
> **[2:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=139)** Maybe the application's buggy.
>
> **[2:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=141)** Maybe it has caused problems with data loss.
>
> **[2:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=144)** Whatever the problem is, if it's something significant that you can't overcome, it might be better to retire the application and use something else instead.
>
> **[2:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=152)** But the best reason of all for retiring an application is simply put, the application no longer meets your needs.
>
> **[2:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-retiring-an-application-may-be-the-best-option?u=76281980&t=160)** If you have an application that isn't getting the job done, then it may be best to just let that application go and use something else instead.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (2), finally, (1), raise (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [narrator] (1)

#### Identifying applications that can be retired
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=1)** - [Instructor] So what's the best way to determine which applications can potentially be retired?
>
> **[0:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=5)** Well, any time that you're working toward a cloud migration, one of the first steps is to take a comprehensive application inventory.
>
> **[0:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=12)** After all, it's impossible to know what applications can be migrated to the cloud until you know what applications are actually being used in your organization.
>
> **[0:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=20)** So as you work through the inventory, one of the things that you should be doing is to try to identify an owner for each one of the applications.
>
> **[0:27](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=27)** And one of the reasons why this is so important is because the application's owner can help you to determine if the application is being used and if it's licensed properly, or if it might be a good candidate for being retired.
>
> **[0:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=42)** As important as it may be to have a conversation with the application's owner, talking to the application owner isn't the only method for identifying applications that might be good candidates for retirement.
>
> **[0:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=52)** Another thing that you might do is to take a look at the application version numbers.
>
> **[0:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=57)** If you find that certain applications are badly outdated, then there's a good chance that those applications aren't being used any longer, and might therefor be good candidates for retirement.
>
> **[1:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=67)** Another thing that you can do is to look at the hardware and software requirements.
>
> **[1:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=71)** If the application is designed to run on hardware that's no longer supported, or that might not even exist in your organization, then that might be a clear indicator that nobody's actually using the application, and that the application might be a good fit for retirement.
>
> **[1:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=86)** Another thing that you can do is to log access to the application binaries.
>
> **[1:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=90)** That way you can tell if anyone is actually using the application.
>
> **[1:36](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=96)** Once you've made a decision to retire and deprovision an application, it's extremely important to understand that there is more to the deprovisioning process than simply uninstalling the application.
>
> **[1:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=107)** There are two tasks that are critically important.
>
> **[1:50](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=110)** The first of these tasks is to create a backup of both the application and its data before you deprovision it.
>
> **[1:56](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=116)** That way if somebody comes back later on looking for the application data, you've got a copy of that data on hand.
>
> **[2:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=124)** The other task is to make sure that you have a way of reinstalling the application if necessary.
>
> **[2:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=128)** Now, in some cases this reinstallation might be as simple as restoring a backup.
>
> **[2:13](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=133)** But if at all possible, it's a good idea to make sure that you've got a copy of the application's installation media and any license keys that might be necessary in order to return that application to a functional status.
>
> **[2:27](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=147)** Another important consideration is how retiring the application is going to impact your compliance mandates.
>
> **[2:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=154)** For example, are you required by law to archive the data that's associated with the application that you're retiring?
>
> **[2:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=160)** If so, then you're going to need to think about how the archive data is going to be stored, how the archive data is going to be secured, and how long you need to store it for.
>
> **[2:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=171)** Likewise, you need to consider whether or not the application's data is going to need to be imported into another application.
>
> **[2:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=177)** And if so, how are you planning on importing that data?
>
> **[3:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=181)** If at all possible, I recommend setting up a lab environment and attempting a data import before you ever retire the application, so that that way you know for sure that your chosen import method is going to work.
>
> **[3:13](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/identifying-applications-that-can-be-retired?u=76281980&t=193)** So those are just a few of the things that you should be thinking about as you progress toward retiring an application.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** for. (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 7. The Migration Process

#### Are your goals still relevant?
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=1)** - [Instructor] One of the things that you've no doubt observed throughout this course is that migration planning involves a lot of work, so once you've gone through the entire planning process, it's very tempting to jump in to the migration with both feet and just get the job done.
>
> **[0:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=14)** But even so, it's extremely important to periodically reassess your migration goals throughout the migration project.
>
> **[0:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=21)** There are a number of different reasons why this is the case.
>
> **[0:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=24)** One of the reasons why I recommend periodically revisiting your migration goals is because doing so can help to prevent you from getting caught up in migration sprawl.
>
> **[0:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=34)** Occasionally, I've seen situations in the real world in which an organization migrates an application or too and then after doing so, they kind of get caught up in the excitement and end up migrating things that were never intended to be migrated in the first place.
>
> **[0:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=49)** In some cases there's nothing wrong with that, but one of the things that I've tried to stress throughout this course is that there are certain workloads that are much better suited to running on premises.
>
> **[0:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=57)** You never want to put yourself in a situation in which you give in to the temptation of migrating just for the sake of migrating when a workload would actually run better on premises than in the cloud.
>
> **[1:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=71)** Another reason why it's so important to periodically revisit your migration goals over the course of your migration project is that occasionally you may find that the technical approach that you initially decided upon for a particular migration might not necessarily align with the stated goals for that migration, or it might not completely address all of the business objectives.
>
> **[1:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=91)** There are any number of these that I've seen occur in the real world.
>
> **[1:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=94)** For example, the approach that was initially decided upon for migration might end up resulting in costs that would spiral out of control, in which case a different type of migration would need to be decided upon.
>
> **[1:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=108)** Or if the reason why the costs are spiraling out of control is simply that there are going to be excessive costs associated with running that application in the cloud, then you may want to rethink the migration completely, and keep that particular application running on premises.
>
> **[2:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=123)** Similarly, you might discover that the approach that you were thinking of taking to the migration would not deliver all of the required features or capabilities for the application.
>
> **[2:13](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=133)** You might also find that your approach would result in a situation where once the migration is complete, there are certain regulatory or operational business requirements that aren't being met.
>
> **[2:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=143)** Likewise, you may find that over time your solution turns into more of a wishlist for new capabilities rather than being a realistic approach to migrating the application as it is.
>
> **[2:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=157)** But these are far from being the only reasons for revisiting your migration goals over the course of the migration project.
>
> **[2:43](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=163)** There are any number of other reasons why it may be important to do so.
>
> **[2:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=168)** For example, you may find that business priorities and objectives change over time.
>
> **[2:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=172)** The priorities that were in place at the beginning of the migration project might have changed due to changing business needs.
>
> **[2:59](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/are-your-goals-still-relevant?u=76281980&t=179)** You might also learn lessons from a previous migration that will drastically change the approach that you need to take to the migration at hand, and finally, you may discover that the data that you used when establishing your initial migration goals has been proven wrong, and now you need to adapt your plans to respond to new data.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Code Keywords:** case. (1), finally, (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Building a plan of attack
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=1)** - [Instructor] One of the lessons learned through migrating various production workloads is that every migration, no matter how simple or complex it may be, really needs a migration plan.
>
> **[0:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=11)** So I want to take the opportunity to talk about some of the key considerations that should go into the migration planning process.
>
> **[0:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=20)** One of the first things that you need to do during the very early planning phases of the migration is to create a comprehensive application inventory.
>
> **[0:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=28)** There are several things that this inventory needs to do.
>
> **[0:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=31)** First and foremost, it needs to identify all of the applications that are being used throughout the organization.
>
> **[0:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=37)** And if possible, the inventory should also document the owners of those applications.
>
> **[0:43](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=43)** Additionally, the inventory should document application versions, system requirements for the applications.
>
> **[0:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=49)** And one thing that's commonly overlooked, but is extremely important, is that your inventory should seek to document application dependencies, because very often, what you'll find is that certain applications depend on other applications, and if you migrate one without migrating the other, you may end up breaking an application.
>
> **[1:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=67)** Your inventory should also establish whether or not an application is still being used, because you may have certain applications that you're able to retire.
>
> **[1:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=75)** Now, it's not always simple to determine whether or not an application is still in use, but if possible, that's something that you should try to determine during the inventory process.
>
> **[1:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=86)** Another thing to think about during the early phases of the migration planning process is prioritization.
>
> **[1:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=92)** You're not going to be able to migrate all of your applications at the same time, so figure out which applications you want to migrate first.
>
> **[1:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=99)** There are any number of ways to prioritize applications.
>
> **[1:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=102)** You might prioritize application migration by things like necessity, the benefit to the business, or perhaps even by the ease of the migration process.
>
> **[1:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=111)** Personally, I like prioritizing applications by the ease of migration because if you migrate the easier applications first, there are certain lessons that you can learn while migrating the easy applications that can come into play later on when you migrate the more difficult ones.
>
> **[2:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=129)** Another key step in the migration planning process is to develop an overall migration strategy.
>
> **[2:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=134)** This is an overall plan for migrating each application.
>
> **[2:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=138)** For example, your migration strategy might help you to determine if you want to migrate each application individually or if you want to migrate applications in batches.
>
> **[2:27](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=147)** Typically, you're not going to want to migrate all of the organization's applications all at once, but sometimes migrating applications in batches is justified, especially if certain applications are very similar to one another or if there are dependencies that come into play.
>
> **[2:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=162)** You also need to be thinking about which migration methods you're going to use.
>
> **[2:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=166)** These are things like rehosting, replatforming, refactoring, and the others that I talked about earlier in the course.
>
> **[2:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=173)** Typically, what you're going to find is that different applications are going to require different migration methods.
>
> **[3:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=180)** This is also the point at which you need to be thinking about what steps are going to be needed to complete the migration process and what order those steps need to be performed in.
>
> **[3:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=190)** Another thing to consider as you plan to move forward is the required tools.
>
> **[3:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=194)** What tools are going to be required in order to complete the migration process?
>
> **[3:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=198)** Are you going to do it manually, or are you going to be using some third-party tools to make things easier on you?
>
> **[3:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=203)** If you are going to be depending on some tools, do you have those tools on hand?
>
> **[3:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=206)** And have you already tested those tools out in a lab environment so that you know how to use them?
>
> **[3:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=211)** And then, do you have the required cloud subscription information available and accessible to you?
>
> **[3:36](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=216)** This one sounds like kind of a silly thing to talk about, but I've actually seen a situation in which someone got ready to migrate an application to the cloud and then realized that they didn't have the necessary credentials available in order to log into the cloud and perform the migration.
>
> **[3:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=231)** So it's a tiny thing, but it's an important thing, so just make sure that you have the necessary authentication credentials available to you.
>
> **[4:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=241)** Another thing to think about as you plan for a migration is the time frame of the migration.
>
> **[4:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=245)** For example, do you have a deadline for completing the migration, and, if so, does that deadline allow for adequate testing?
>
> **[4:13](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=253)** And does it allow you enough time to retry the migration if something should go wrong?
>
> **[4:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=258)** Also, are you going to be limited to performing the migration during a certain time window, for example, on the weekends or late at night when nobody's in the office?
>
> **[4:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=269)** And finally, what's your contingency plan for the migration?
>
> **[4:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=272)** Anytime that you migrate an application to the cloud, there's always the chance that something could go wrong during the migration process, so think ahead of time what your contingency plan will be.
>
> **[4:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=282)** Also, if the migration has to be performed within a certain window, a certain time period such as late at night or on a weekend, then you'll want to determine ahead of time what the cutoff period is when you'll have to put everything back to normal in the event that something goes wrong so that you can have everything back up and running in time for everyone to show up for work and begin using the application.
>
> **[5:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/building-a-plan-of-attack?u=76281980&t=304)** So those are some really important things to think about as you begin planning for your migration.

> [!info]- Semantic Content
>
> **Analogies:** for example (3), similar to (1), such as (1)
> **CLI Commands:** find (2), make (2)
> **Code Keywords:** require (1), finally, (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Considerations for IT pros
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=1)** - [Instructor] There are many different ways to look at a cloud migration.
>
> **[0:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=4)** It's very common to think of a migration from a budgetary perspective or from the perspective of the application that's being migrated.
>
> **[0:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=11)** Or perhaps you might consider the migration in terms of how it's going to impact the users who use the application that's being migrated.
>
> **[0:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=18)** But one thing that's sometimes overlooked is how the migration process is going to impact the IT staff that actually has to perform the migration and then support the application after it's been migrated.
>
> **[0:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=30)** So with that being the case, I wanted to take the opportunity to talk about some considerations for the IT staff.
>
> **[0:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=37)** One of the first bits of advice that I would pass along is to make sure that everyone who is involved in the migration process receives the proper training before the migration process ever begins.
>
> **[0:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=48)** This is something that I've actually had some real-world experience with.
>
> **[0:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=52)** I once worked for an organization that performed a large-scale migration without training anybody ahead of time.
>
> **[0:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=58)** And even though we eventually got through the migration and made everything work, the process definitely had a few hiccups along the way.
>
> **[1:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=65)** It would've gone far more smoothly had everyone been properly trained.
>
> **[1:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=72)** Another real-world lesson that I've learned having been through a number of migrations myself is that if at all possible it's a really good idea to practice the migration ahead of time in an isolated lab environment.
>
> **[1:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=83)** So the idea is to create a lab environment either on-premises using a virtualization host or in the cloud, and then make that environment as similar to your production environment as you can possibly get it.
>
> **[1:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=95)** And then you can use that environment to practice your migration.
>
> **[1:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=99)** Now one of the mistakes that I've seen made sometimes is to set up an environment like this and then just run through the migration process once to make sure it works.
>
> **[1:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=107)** And while that's certainly better than not practicing the migration process at all, I recommend going through the practice migration several times.
>
> **[1:55](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=115)** What I've found through doing that is that oftentimes you'll pick up on little things each time that you go through the practice migration.
>
> **[2:02](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=122)** And all of those lessons learned can come together to make the rural migration go much more smoothly than it might otherwise would have.
>
> **[2:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=132)** As you practice a migration, my advice would be to take detailed notes throughout the practice session.
>
> **[2:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=137)** And then once you're done, use those notes to write a very detailed step-by-step procedure for the migration.
>
> **[2:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=144)** Once you've got that procedure in place, go through the practice session again.
>
> **[2:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=148)** Only this time, rather than working through it from scratch, follow the procedure that you've developed.
>
> **[2:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=153)** Make sure that your procedure is completely accurate, because that's going to go a long way toward helping you through the real migration.
>
> **[2:41](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=161)** Another best practice is to perform the migration at a time when distractions can be eliminated.
>
> **[2:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=166)** Early in my IT career, the practice was to perform large-scale IT maintenance operations, things like migrations, late at night or on the weekend.
>
> **[2:56](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=176)** The idea was that there shouldn't be anybody in the office at that time, so there was no risk of disrupting anybody's work by doing a migration at that time.
>
> **[3:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=184)** Today, of course, things are a lot different than they used to be.
>
> **[3:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=187)** Mission-critical workloads run 24 hours a day, seven days a week.
>
> **[3:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=190)** And because of this, it theoretically shouldn't matter when you perform a migration because the workload has to stay online throughout the duration of the migration one way or the other.
>
> **[3:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=201)** Now having said that, I strongly recommend going ahead and performing the migration late at night or on the weekend anyway.
>
> **[3:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=208)** And the reason for that is simple.
>
> **[3:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=210)** Doing the migration at a time when the office is empty will help to minimize distractions.
>
> **[3:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=215)** You don't want to have to stop what you're doing in the middle of something as sensitive and tedious as a migration simply to deal with a phone call from an end user.
>
> **[3:43](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=223)** So, I recommend trying to do your migrations at a time when distractions can be eliminated.
>
> **[3:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=231)** Another best practice, one that I've eluded to several different times throughout this course, is to establish a few different key performance indicators for your application.
>
> **[4:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=240)** And then once you've defined those key performance indicators, take a performance baseline.
>
> **[4:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=245)** You'll then want to take another performance baseline after the application has been migrated.
>
> **[4:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=250)** That way, you'll have a basis of a comparison and you can quantify whether the application is performing as well after the migration as it was performing prior to the migration.
>
> **[4:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=261)** Another best practice is to make sure that you have a way of testing the application at the conclusion of the migration process.
>
> **[4:27](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=267)** Ideally, you want to make sure that you have someone on hand who actually uses the application on a day-to-day basis because that person is going to be very well-equipped to make sure that the application works as expected.
>
> **[4:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=279)** The reason why I offer this bit of advice is because of the situation that occurred many years ago at one of the places where I used to work.
>
> **[4:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=286)** The organization was performing a migration of an application and we did it on a weekend when nobody was in the office.
>
> **[4:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=293)** And when we finished the migration, it appeared that everything was working perfectly, but when the users showed up for work on Monday morning and began logging in, it quickly became apparent that there was a problem with the application.
>
> **[5:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=305)** So, it would've been very helpful to have a user on hand who uses that application on a day-to-day basis because they would've been able to test the application and tell us that there was a problem and show us what that problem consisted of so that we could've fixed it before everyone showed up for work on Monday morning.
>
> **[5:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=321)** Finally, and this may be the best advice of all, make sure that you have planned for putting everything back to normal in the event that something goes wrong.
>
> **[5:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=329)** You never want to find yourself in a migration situation where you passed the point of no return and have no way of going back to the original state of the application in the event that there's a catastrophic failure of the migration process.
>
> **[5:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/considerations-for-it-pros?u=76281980&t=342)** So, make sure that you have established a plan for putting everything back to normal before you ever even begin.

> [!info]- Semantic Content
>
> **CLI Commands:** make (10), find (1)
> **Code Keywords:** case, (1), pass (1), this, (1), finally, (1)
> **Best Practices:** best practice (3)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Why it is fine to leave some applications alone?
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=1)** - [Narrator] When it comes to cloud migrations, there's sometimes the temptation and maybe even a little bit of pressure from those above you in the organization to migrate absolutely everything application to the cloud.
>
> **[0:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=11)** But doing so isn't necessarily in your best interest.
>
> **[0:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=15)** There are some applications that are better suited to running on-premises.
>
> **[0:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=18)** So remember, there's no rule that says that you have to run every single application in the cloud.
>
> **[0:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=23)** There's also no rule that says that every application has to be brought up to date and modernized.
>
> **[0:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=29)** While that's certainly desirable, sometimes you can do more harm than good by attempting to migrate and or modernize an application.
>
> **[0:36](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=36)** Sometimes there are very justifiable reasons for leaving an application alone.
>
> **[0:43](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=43)** So what types of applications should be left alone?
>
> **[0:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=46)** Well I've got a few examples, but before I delve into these, I need to clarify that I'm generalizing.
>
> **[0:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=52)** I'm in no way suggesting that these type of applications should be left alone in every single circumstance.
>
> **[0:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=57)** Sometimes it's perfectly acceptable to move them and sometimes it's better to leave them alone.
>
> **[1:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=63)** So let's take a look at a few examples.
>
> **[1:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=65)** For starters, if you have an application with a lot of complex external dependencies, you might consider leaving that application alone.
>
> **[1:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=72)** Because if you attempt to migrate that application, there's a very good chance that you could break the application by disassociating it with some of its dependencies.
>
> **[1:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=81)** If you do decide to migrate the application, it's extremely important to make sure that you have a thorough understanding of those dependencies and how they work before you attempt the migration.
>
> **[1:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=91)** You might also consider leaving an application alone if it has dependencies on specific hardware.
>
> **[1:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=97)** I saw an example of this not too long ago.
>
> **[1:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=100)** There was a machine learning application that had been coded to take advantage of a very specific GPU and because of that hardware dependency, the application in all likelihood wouldn't work if it were migrated to the cloud.
>
> **[1:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=111)** So that's an example of an application that you might want to leave running where it is, rather than attempting to migrate it.
>
> **[1:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=118)** Another example of an application that you might want to leave alone is an application that's tied to your organization's most sensitive data.
>
> **[2:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=125)** Now just to be clear, such an application can safely be run in the cloud, but having said that, a lot of organizations have a business mandate that requires the most sensitive data and any applications to tie into that very sensitive data to remain on-premises.
>
> **[2:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=140)** So before you consider migrating such an application, it's important to consider what the organization's policies are regarding geolocation of sensitive data.
>
> **[2:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=151)** It's probably also best to leave an application alone if that application is extremely old.
>
> **[2:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=157)** Because legacy applications that are excessively old might be unlikely to work with modern operating systems, modern device drivers, and possibly even modern hardware.
>
> **[2:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=167)** So if you have something that's decades old that you're still using, it may be best to just leave that running where it is.
>
> **[2:54](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=174)** Following along that same line of thought, you might consider leaving an application in place rather than migrating it to the cloud if the application is so old but there's no longer any option for getting support with the application.
>
> **[3:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=186)** Because if you happen to break the application during the migration process, there's no one available to help you get it working again.
>
> **[3:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=194)** So it may be best to simply leave that application alone rather than attempting to migrate it to the cloud.
>
> **[3:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=200)** Similarly, you might also hold off on migrating an application if the installation files for that application are unavailable.
>
> **[3:27](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=207)** Because again if you run into a problem with the migration and you end up having to reinstall all or part of the application, then you may run into a roadblock if those installation files are unavailable to you.
>
> **[3:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=219)** So the bottom line here is if you've got something excessively old then you probably want to think twice before you attempt to migrate it to the cloud.
>
> **[3:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=229)** My personal philosophy with regard to cloud migrations is that if the idea of migrating a particular application to the cloud makes you uncomfortable, then there's probably a good reason for that.
>
> **[4:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=240)** After all we have instincts for a reason and I think that it's important to listen to your instincts.
>
> **[4:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=244)** So if you're uncomfortable migrating a particular application, you may want to stop and think about why that is, as opposed to moving forward.
>
> **[4:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=254)** So let me make one last point before I wrap up this video.
>
> **[4:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=258)** Even though I'm probably best known for my IT work, I've also spent the last several years training to be a commercial astronaut and one of the things that I was taught very early on was a saying that was popularized by a Canadian astronaut named Chris Hadfield.
>
> **[4:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=271)** And that saying is that there's no problem so bad that you can't make it worse.
>
> **[4:36](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=276)** And I think that that saying applies especially well to cloud migrations.
>
> **[4:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=280)** The lesson is that if you have any doubts as to your ability to migrate something to the cloud, then it's best to just stop everything right there and make sure that you figure out how to do it properly before you move on, because you can introduce a lot of problems by guessing.
>
> **[4:55](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-it-is-fine-to-leave-some-applications-alone?u=76281980&t=295)** So that's just something to think about.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** let (2)
> **Env Vars:** gpu (1)
> **Definitions:** is an  (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [narrator] (1)

#### What tools are available to assist with the migration?
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-tools-are-available-to-assist-with-the-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-tools-are-available-to-assist-with-the-migration?u=76281980&t=0)** - [Announcer] One of the big questions that oftentimes comes up when an organization is preparing for a cloud migration, is what tools are available to help with the migration?
>
> **[0:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-tools-are-available-to-assist-with-the-migration?u=76281980&t=9)** Certainly, you can perform a migration manually, but oftentimes the use of tools will make the process easier.
>
> **[0:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-tools-are-available-to-assist-with-the-migration?u=76281980&t=15)** There are any number of different third-party tools and native tools that you can use.
>
> **[0:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-tools-are-available-to-assist-with-the-migration?u=76281980&t=19)** Now, I'm not recommending any one particular tool, because I'm a firm believer in the idea that you have to pick the right tool for the job.
>
> **[0:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-tools-are-available-to-assist-with-the-migration?u=76281980&t=26)** But I just wanted to give you a preview of what's available out there.
>
> **[0:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-tools-are-available-to-assist-with-the-migration?u=76281980&t=29)** So as you can see, I've got Google up and I'm just going to do a quick search on cloud application migration tools.
>
> **[0:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-tools-are-available-to-assist-with-the-migration?u=76281980&t=35)** (keyboard clacking) And so as you can see, there are a long list of cloud migration tools that are available to you.
>
> **[0:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-tools-are-available-to-assist-with-the-migration?u=76281980&t=45)** Now, it's worth noting that there are also cloud migration tools that are provided by the individual cloud service providers.
>
> **[0:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-tools-are-available-to-assist-with-the-migration?u=76281980&t=51)** So if, for example, you're using Microsoft Azure, then Microsoft provides a tool called Azure Migrate.
>
> **[0:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-tools-are-available-to-assist-with-the-migration?u=76281980&t=58)** You can see what that looks like right here.
>
> **[1:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-tools-are-available-to-assist-with-the-migration?u=76281980&t=60)** Amazon also provides a similar tool.
>
> **[1:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-tools-are-available-to-assist-with-the-migration?u=76281980&t=65)** The Amazon tool is called the AWS Application Migration Service and some of the other cloud providers also offer similar tools.
>
> **[1:13](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-tools-are-available-to-assist-with-the-migration?u=76281980&t=73)** So the point behind this video is that I just wanted to give you a small taste of some of the tools that are available, both third-party and cloud-native.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), aws (1)
> **Code Keywords:** if, (1)
> **Env Vars:** aws (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [announcer] (1)

#### Making the case for a trial migration
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=0)** - [Instructor] If you're getting ready to migrate an application to the cloud then I strongly recommend performing a trial migration before you attempt the real migration.
>
> **[0:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=8)** Now, why is that?
>
> **[0:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=10)** Well, there are any number of different reasons.
>
> **[0:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=12)** One of the biggest reasons is that by performing a trial migration, you can familiarize yourself and the rest of the IT staff with the migration process ahead of time.
>
> **[0:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=21)** Another reason why you might want to perform a trial migration is because by doing a trial migration, you can estimate how much time the real migration is likely to take.
>
> **[0:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=31)** So what you would do in a situation like that is to actually work through the migration but using a small subset of the data that's going to be migrated for real and I've actually done this in the real world and run into situations in which I had estimated the real migration to take a certain amount of time and then the trial migration ended up revealing that my estimate was way off.
>
> **[0:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=53)** So another reason why you might want to perform a trial migration is because there are several significant problems that can occur during or as a result of a cloud migration and going ahead and performing that trial migration gives you the chance to observe what types of problems happen and it gives you the opportunity to come up with a solution for dealing with those problems before you begin the actual migration.
>
> **[1:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=75)** So what types of problems are we talking about?
>
> **[1:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=78)** Well, there are a few different problems that can occur.
>
> **[1:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=81)** One problem is downtime.
>
> **[1:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=82)** Now, certainly there are cloud migrations that do require an application to be taken offline as a part of the migration process but that's not really what I'm talking about.
>
> **[1:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=91)** What I'm talking about is unexpected downtime.
>
> **[1:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=93)** Maybe for example, you expect to be able to perform an online migration without having to take the application down and then the trial migration reveals that you are going to have to take that application offline after all.
>
> **[1:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=105)** Had you not performed that trial migration then that downtime would be completely unexpected and you wouldn't have had a chance to plan for that.
>
> **[1:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=112)** Another possibility is data loss.
>
> **[1:55](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=115)** Data loss can occur in any number of different ways.
>
> **[1:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=117)** It can happen as a result of a migration that's gone bad or it can happen as a result of the original application continues to accumulate data during the migration process.
>
> **[2:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=127)** So performing a trial migration will help you to anticipate any data loss that could occur and come up with ways of mitigating that problem.
>
> **[2:16](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=136)** Another problem that you might run into is permissions issues.
>
> **[2:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=139)** For example, your application may run fine on-premises but you may find that when you move it up to the cloud, it's lacking some sort of permission that it needs in order to run correctly.
>
> **[2:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=148)** And again, a trial migration will help you to spot those types of problems ahead of time.
>
> **[2:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=153)** Another problem and one that a lot of people don't really like to talk about is a gap in the IT skill set.
>
> **[2:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=160)** So in other words, going into the migration, you assume that it's going to be easy but then you get into the migration process and realize that you really don't know what you're doing after all.
>
> **[2:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=169)** And I certainly don't say this as a way of insulting anyone's intelligence or anything like that.
>
> **[2:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=173)** I've been there myself.
>
> **[2:55](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=175)** I've attempted migrations and then gotten into the migration process only to realize that the process is totally different than what I expected and I really don't know what I'm doing.
>
> **[3:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=184)** So performing a trial migration will help you to see when these types of unexpected situations may arise so that you can have the opportunity to enhance your IT skills before performing the real migration.
>
> **[3:16](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=196)** And then finally, the last one is application compatibility and/or interoperability.
>
> **[3:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=201)** What this really means is that after you perform that migration to the cloud, even if everything goes right, you may run into a situation in which there were dependencies on the original application location and moving that application causes those dependencies to break resulting in problems not so much with the application that you moved but with other applications or workloads.
>
> **[3:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=222)** So performing a trial migration can help you to spot those dependencies as well.
>
> **[3:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/making-the-case-for-a-trial-migration?u=76281980&t=226)** So those are just a few of the common migration problems that you might be able to avoid by performing a trial migration.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), finally, (1)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)

#### Additional considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=0)** - [Presenter] There are a few other considerations that you should take into account prior to beginning a cloud migration project.
>
> **[0:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=5)** And the very first of those considerations, and this one might sound a little bit odd, but the very first consideration is why are you migrating the application in the first place?
>
> **[0:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=14)** The reason why I say that it's important to consider the reason why you're migrating the application is because your reason behind the migration may determine various aspects of the migration process.
>
> **[0:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=24)** Let me give you an example.
>
> **[0:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=26)** Let's suppose for example, that you're running the application on premises right now and you don't necessarily have enough capacity to handle an anticipated workload.
>
> **[0:36](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=36)** Maybe you work for an insurance company and the open enrollment period is coming up, or maybe you work in retail and the holiday shopping season is coming up.
>
> **[0:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=44)** For whatever reason, you know that there's about to be a huge demand spike for that application and you just don't have the capacity to handle it.
>
> **[0:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=52)** Well, in a situation like that, your reason for migrating is going to be to gain additional capacity, and with that need for additional capacity comes a deadline.
>
> **[1:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=61)** In the case of the insurance company, that deadline was the open enrollment period.
>
> **[1:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=65)** In the case of that retail establishment, the deadline was the beginning of the holiday shopping period.
>
> **[1:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=70)** So, it's important to think about why you're migrating because that might determine your timeframe, but it might determine some other things as well, such as your budget.
>
> **[1:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=78)** Your budget is another important consideration because that's going to determine how long you can spend on the migration process, but it's also going to determine which cloud you're able to use and which migration tools you're able to take advantage of to assist you in the migration process.
>
> **[1:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=94)** And this brings up another point, another consideration is what tools and resources are available to help you?
>
> **[1:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=100)** A lack of budget may prevent you from investing in third-party tools or even using the tools that are offered by the cloud providers, but there may be other resources that are available to help you even in a situation in which you have a very small budget.
>
> **[1:55](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=115)** For example, you might find articles online in which someone details the procedure that they used in a similar migration to the one that you're performing.
>
> **[2:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=123)** There might be open source tools that you can take advantage of.
>
> **[2:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=126)** There might be technical articles that talk about potential issues that you might encounter and how to work around those issues.
>
> **[2:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=132)** So even if you don't necessarily have the budget for third-party tools, or you're not planning on using some of the native tools that are provided by the cloud providers, there may be other resources available online that can assist you in the migration process.
>
> **[2:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/additional-considerations?u=76281980&t=146)** So those are just a few things to think about before you begin your cloud migration.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (1)
> **Code Keywords:** let (2)
> **Cross-References:** coming up (2)
> **CLI Commands:** find (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [presenter] (1)

#### Where should I begin?
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=1)** - [Instructor] For IT pros facing a large scale migration to the cloud, sometimes the toughest thing is just figuring out where to begin.
>
> **[0:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=8)** If you find yourself in that situation, then I recommend as a good first step choosing a good candidate for the initial migrations.
>
> **[0:16](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=16)** Ideally these should be applications that are perceived as being easy to migrate, because sometimes the lessons that you learn while migrating the simpler applications can really help you out later on when migrating the more complex ones.
>
> **[0:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=31)** Before you delve into migrating your first application, I strongly recommend taking a performance baseline of that application, so that you can know how it's performing on premises.
>
> **[0:41](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=41)** It's also important to establish key performance indicators.
>
> **[0:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=44)** In other words, what metrics are looking at to gauge the application's performance, because you want to look at those same metrics once the application has been moved to the cloud, as a way of ensuring that it's still performing as it should.
>
> **[0:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=58)** One extremely important and yet often overlooked step in preparing for a migration is that of formalizing the criteria defining a successful migration.
>
> **[1:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=68)** Now, in a way this seems kind of silly, because either a migration works or it doesn't, there really isn't much in between.
>
> **[1:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=75)** But what I've observed in the real world is that occasionally an IT peril might migrate an application, and the migration seems to be perfectly successful, and yet those who own the application are unhappy with the migration for whatever reason.
>
> **[1:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=90)** So my recommendation is to establish some criteria upfront, defining the success of the migration.
>
> **[1:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=97)** And also getting the key stakeholders of that application to sign off on those criteria.
>
> **[1:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=102)** So that way everyone is on the same page and there's a very clear definition of what's expected with regard to the migration.
>
> **[1:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=111)** I also strongly recommend coming up with a plan for simulating the migration in the most realistic way possible.
>
> **[1:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=118)** That way you have a chance to rehearse the migration before you attempt it in real life.
>
> **[2:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=123)** You might be amazed at what you will learn through this simulation.
>
> **[2:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/where-should-i-begin?u=76281980&t=127)** So those are just a few of the things that you should think about doing before you get started with your first migration.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Cross-References:** coming up (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)


### 8. Your Exit Strategy

#### What is a cloud exit strategy?
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-a-cloud-exit-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-a-cloud-exit-strategy?u=76281980&t=0)** - [Instructor] One of the most common mistakes that's made when migrating an application to the cloud is failing to come up with a cloud exit strategy.
>
> **[0:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-a-cloud-exit-strategy?u=76281980&t=7)** Now, what's a cloud exit strategy?
>
> **[0:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-a-cloud-exit-strategy?u=76281980&t=9)** Well, simply put, a cloud exit strategy is a plan for moving the workload or its data back on premises, or in some cases that could even mean moving that workload or the data to a different cloud.
>
> **[0:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-a-cloud-exit-strategy?u=76281980&t=21)** Now, why would you want to do that, especially given that there's so much effort involved in moving the application up to the cloud in the first place?
>
> **[0:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-a-cloud-exit-strategy?u=76281980&t=29)** Well, there are any number of reasons, but the important thing to think about is that a cloud migration should never be considered to be permanent, even if you intend for it to be permanent.
>
> **[0:38](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-a-cloud-exit-strategy?u=76281980&t=38)** And the reason for that is that there's always the possibility that something could change in the future, forcing you to move that workload out of the cloud.
>
> **[0:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-a-cloud-exit-strategy?u=76281980&t=46)** For example, the cloud provider may no longer support the workload, or it might become cost-prohibitive to run that workload in the cloud.
>
> **[0:53](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-a-cloud-exit-strategy?u=76281980&t=53)** There are any number of different reasons why you might need to move that workload at some point in the future.
>
> **[0:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-a-cloud-exit-strategy?u=76281980&t=58)** And such a move is going to be a whole lot easier if you take the time to come up with an exit strategy as a part of your initial migration.
>
> **[1:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/what-is-a-cloud-exit-strategy?u=76281980&t=66)** So that way, if and when the day comes that you do have to move that workload, there's already a plan in place for doing so, and that's what the remainder of the videos in this lesson are going to be talking about, is what you need to think about when developing a cloud exit strategy.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Why do you need an exit strategy?
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=0)** - [Instructor] There are any number of different reasons why it's a good idea to have a cloud exit strategy.
>
> **[0:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=4)** But oftentimes all of those reasons boil down to two things.
>
> **[0:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=8)** Having a cloud exit strategy can help you to mitigate risks and it can help you to control cost.
>
> **[0:13](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=13)** So let's talk about that a little bit.
>
> **[0:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=15)** Starting with mitigating risk.
>
> **[0:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=17)** The big question is what type of risks?
>
> **[0:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=20)** Well, as I mentioned in the previous video, there were any number of things that could potentially happen in the future that might force you to migrate an application away from the cloud.
>
> **[0:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=29)** So one of the things that could happen is the cloud provider could go out of business.
>
> **[0:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=34)** Right now that may seem unlikely, especially if you've migrated an application to a hyperscaler cloud, but there's nothing guaranteeing that that cloud provider is still going to be in business five years from now, 10 years from now.
>
> **[0:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=45)** We just don't know what the future holds so having a cloud exit strategy can help you to plan for those types of situations so that if your cloud provider does go out of business, you've at least got a plan for moving your application to another location.
>
> **[0:59](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=59)** Another potential risk is that the cloud provider suffers a major security breach.
>
> **[1:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=63)** This type of risk seems a little bit more realistic than the cloud provider going out of business, but either one is plausible.
>
> **[1:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=70)** So if your cloud provider suffers a major security breach, you may have no choice but to move your application to another cloud or to bring that application back on premises.
>
> **[1:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=80)** Another type of risk is a situation in which a cloud provider causes reputational damage.
>
> **[1:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=85)** So if, for example, a particular cloud provider becomes known for being really insecure or for doing something illegal or something like that, then being associated with that cloud provider could cause reputational damage to your company, and you may need to migrate away from that cloud in order to avoid damaging your organization's reputation.
>
> **[1:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=107)** Another potential situation that could justify moving away from the cloud is that the cloud that's hosting your application somehow becomes unreliable, or the cloud provider simply doesn't support your application anymore.
>
> **[2:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=120)** Similarly, a cloud provider could fall behind technologically.
>
> **[2:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=124)** Again, that seems somewhat unlikely today, but if a cloud provider started having budgetary problems, then they may not upgrade their technology quite as quickly as they have in the past, leading that provider to fall behind.
>
> **[2:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=137)** It's also possible that changes on your end could justify moving away from the cloud rather than those changes having to be associated with the cloud provider.
>
> **[2:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=146)** For example, there might be a change to your business model, or there might be changing legal or compliance requirements that force you to migrate your application away from the cloud.
>
> **[2:36](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=156)** And then finally, there could be concerns with political stability or data sovereignty.
>
> **[2:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=160)** So for example, if your cloud provider is operating a data center in a foreign country, and that just happens to be where your application is hosted and that country becomes politically unstable and is on the brink of collapse, or if there are certain data sovereignty issues that come into play, then, again, you may have no choice but to move your application.
>
> **[3:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=180)** As I mentioned earlier though, having a cloud exit strategy isn't just about controlling risk.
>
> **[3:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=184)** It can also be about controlling cost.
>
> **[3:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=187)** Because, remember, when your application resides in the cloud, the cloud provider that's hosting that application could conceivably change its pricing structure at any time.
>
> **[3:16](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=196)** Now, in a lot of cases, large organizations will establish a contract with a cloud provider, and that contract may very well lock in the price so that you don't have to worry about that so much.
>
> **[3:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=206)** But keep in mind that most contracts do have an expiration date, and when that contract does eventually expire, then the cloud provider may end up changing the cost of hosting your application, thereby forcing you to move the application if keeping that application with the cloud provider that has it now becomes cost prohibitive.
>
> **[3:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/why-do-you-need-an-exit-strategy?u=76281980&t=224)** So those are just a few things to think about with regard to why it's so important to have a cloud exit strategy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), if, (1), finally, (1)
> **Analogies:** for example (3)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Essential elements to include in an exit strategy
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=0)** - [Lecturer] In the last video, I talked about why it's so important to have a cloud exit strategy, but what does that exit strategy look like?
>
> **[0:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=6)** What should be included in a cloud exit strategy?
>
> **[0:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=10)** Well, every cloud exit strategy is different, and you may be able to go online and find templates that can help you to create a formalized cloud exit strategy.
>
> **[0:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=18)** But my recommendation would be to create that exit strategy yourself based on the answers to some various questions.
>
> **[0:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=25)** So let's go over some of the questions that you should consider as you're developing a cloud exit strategy.
>
> **[0:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=30)** The first question is, what would trigger an exit?
>
> **[0:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=32)** In other words, what types of situations would force you to move an application out of the cloud?
>
> **[0:38](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=38)** That might be things like the cloud provider going out of business or the cloud provider having a major data breach or things like that.
>
> **[0:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=45)** If you haven't already watched the previous video, then I would recommend going back and watching that because I covered all sorts of different things that might trigger an exit.
>
> **[0:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=52)** So another question that you should consider is, are there any trigger thresholds?
>
> **[0:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=57)** For example, an outage at a cloud provider might not necessarily trigger a cloud exit, but what if that outage lasts 24 hours?
>
> **[1:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=65)** What if the outage lasts 48 hours?
>
> **[1:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=68)** So in other words, an outage by itself may not be enough to force you to move an application out of the cloud, but a prolonged outage might, and it's a good idea to go ahead and document upfront how long an outage should be before you seriously begin to take action on moving that application out of the cloud.
>
> **[1:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=85)** Another consideration is how long is the exit going to take?
>
> **[1:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=89)** It's a good idea to go ahead and create an estimate of how long you think it's going to take to migrate an application out of the cloud and include that within your cloud exit strategy because the duration of the actual migration away from the cloud could play into those thresholds that I mentioned just a second ago.
>
> **[1:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=107)** So what are the exit procedures?
>
> **[1:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=108)** That's another important question to consider.
>
> **[1:50](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=110)** In other words, what steps are the IT pros in your organization going to have to take in order to move that application out of the cloud and into another location?
>
> **[1:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=118)** It's a good idea to go ahead and document those procedures because right now, if you're in the middle of planning for a cloud migration, those procedures are going to be fresh in your mind because it's what you're actively working on.
>
> **[2:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=130)** But suppose something happens five years from now that forces you to move that application out of the cloud, you're probably not going to remember all the steps that were involved in getting that application up there in the first place.
>
> **[2:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=140)** So it's a good idea to go ahead and document the procedure just so that you've got something to fall back on and to use to refresh your memory.
>
> **[2:27](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=147)** Another important question to consider is what are the organization's contractual obligations, if there are any?
>
> **[2:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=154)** So what do I mean by this?
>
> **[2:36](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=156)** Well, sometimes a large organization will establish a contract with a cloud provider, and that contract may state that you agree to host an application in the cloud for a certain length of time in exchange for getting a discounted price.
>
> **[2:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=169)** And if you move that application away from the cloud, then you may be breaking that contract and incurring a significant financial penalty as a result.
>
> **[2:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=178)** So it's important review what your contractual obligations are and to design your cloud exit strategy around those obligations so that you don't do anything that could potentially harm the company in a financial way.
>
> **[3:10](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=190)** Another important question to consider is whether there are any approval processes that need to be followed.
>
> **[3:16](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=196)** So let's say for a moment that you've laid out all the different conditions that would trigger an exit from the cloud and one of those conditions actually happens forcing you to move that application.
>
> **[3:27](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=207)** Do you have the authority to move that application on your own?
>
> **[3:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=210)** Or is there somebody, maybe an upper management that has to sign off on that before you actually begin moving the application?
>
> **[3:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=217)** It's just something to think about and to include as a part of your cloud exit strategy.
>
> **[3:43](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=223)** Another important consideration is what will the impact to the business be?
>
> **[3:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=227)** Can the business expect financial loss as a result of moving that application away from the cloud?
>
> **[3:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=232)** How are your costs going to change?
>
> **[3:54](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=234)** And is there going to be an outage during the migration process?
>
> **[3:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=238)** Those are some really important things to think about and to include in your exit strategy.
>
> **[4:03](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=243)** Another important consideration is what controls or key performance indicators exist?
>
> **[4:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=248)** In other words, how are you going to know if your migration was successful?
>
> **[4:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=252)** You might also consider what other workloads are going to be impacted.
>
> **[4:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=255)** So if for example, you've got a particular workload up in the cloud and there are other workloads that depend on that workload, then is moving that workload going to break those dependencies and cause other applications or workloads to fail?
>
> **[4:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=268)** Another important consideration is where are the exited workloads being migrated to?
>
> **[4:32](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=272)** In other words, a condition has happened that's forced you to move an application out of the cloud, but where are you going to move that to?
>
> **[4:38](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=278)** Are you going to bring that application back on premises or is it going to go to another cloud and if it's going to be moved to another cloud, which one?
>
> **[4:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=287)** And then finally, is the migration destination still a good idea or have things changed?
>
> **[4:52](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=292)** This one is super important because let's suppose that you're preparing to migrate an application to the cloud, and as a way of being prudent, you create a cloud exit strategy to go along with that migration so that if something happens, you have a way of bringing that application back on premises or moving it somewhere else.
>
> **[5:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=311)** It's fantastic that you've created that plan, but when it comes time to implement that plan, you have to consider if anything has changed, because odds are you're not going to be implementing your exit strategy tomorrow.
>
> **[5:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=322)** It may be a year, it may be five years, it may be 10 years.
>
> **[5:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=325)** You don't know how much time is going to pass before you have to exit that application from the cloud.
>
> **[5:31](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=331)** And depending on how long it's been, anything could have potentially changed.
>
> **[5:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=335)** So it's really important to consider if your chosen destination is still a viable host for your workload or if it would be smarter to move that workload somewhere else.
>
> **[5:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/essential-elements-to-include-in-an-exit-strategy?u=76281980&t=344)** So those are just a few of the things to think about when you're creating an exit strategy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), else. (2), finally, (1), super (1), pass (1)
> **Definitions:** in other words (5)
> **Cross-References:** in the last (1), previous video (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [lecturer] (1)

#### Costs to consider as you develop your exit strategy
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=0)** - [Instructor] Just as there are costs associated with moving an application up to the cloud, there are also costs that are going to be associated with repatriating an application, or rather bringing that application back on premises.
>
> **[0:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=11)** So, I wanted to lay out some of the costs that may come into play.
>
> **[0:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=15)** Now, not every one of these costs is going to be incurred in every situation, and the list isn't entirely comprehensive, but these are some of the costs that you'll more commonly encounter.
>
> **[0:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=25)** The first and the most common of these costs is data egress fees.
>
> **[0:28](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=28)** Now, what's a data egress fee?
>
> **[0:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=30)** Well, the idea is that many cloud providers, not all cloud providers, but most cloud providers, impose something called data egress fees anytime data leaves their cloud.
>
> **[0:39](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=39)** And these fees are essentially there as a mechanism for discouraging customers from moving data out of the cloud.
>
> **[0:46](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=46)** And these fees can be substantial.
>
> **[0:48](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=48)** So, it's really important when you're developing a cloud migration strategy and an exit strategy to take a look at what that exit could potentially cost you in terms of data egress fees.
>
> **[1:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=61)** Another cost to consider is infrastructure and licensing cost.
>
> **[1:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=64)** So, let's pretend for a moment that you've moved an application up to the cloud, and then a couple of years have passed and you decide for whatever reason that you need to bring that application back on site.
>
> **[1:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=75)** Well, in a situation like that, because you didn't just recently move the application, you might not necessarily have the hardware to run that application on.
>
> **[1:23](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=83)** The hardware that you were previously using, may have been retired, or it might be running a different workload by now.
>
> **[1:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=89)** So, you may incur costs in the form of purchasing hardware and purchasing the necessary software licenses for hosting your application on premises.
>
> **[1:38](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=98)** Other costs might be tied to things like testing the application.
>
> **[1:42](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=102)** There might also be deployment and planning costs.
>
> **[1:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=105)** So, the amount of planning and testing that you're going to be able to do is really going to depend on the criticality of the situation.
>
> **[1:54](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=114)** So if, for example, you just decide that continuing to host an application up in the cloud is more expensive than you would like, well then there might not be any serious urgency involved in bringing that application back on premises or moving it to a different cloud.
>
> **[2:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=128)** So, you can work through the testing process at your leisure.
>
> **[2:12](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=132)** If, however, there's an emergency situation and you have to act quickly, well then, there might not be a lot of opportunity for testing and planning that application migration.
>
> **[2:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=142)** You might have to just do it.
>
> **[2:24](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=144)** So, in those types of situations, your testing and planning costs would be less.
>
> **[2:29](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=149)** There might also be costs associated with training and support.
>
> **[2:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=153)** For example, if you're moving an application back on premises, well then presumably your IT staff is going to have to support that application and you need to give them the appropriate training to make sure that they're well-equipped to do that.
>
> **[2:45](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=165)** There might also be intangible cost in the form of downtime and lost productivity.
>
> **[2:50](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=170)** So, certainly that's something that you want to take into account.
>
> **[2:54](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=174)** And then finally, there could be contractual costs.
>
> **[2:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=177)** So in other words, you may have a contract with the cloud provider agreeing to host your application in their cloud for a certain length of time, in exchange for a discounted price.
>
> **[3:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=187)** And there might be a penalty associated with moving that application out of the cloud before the contract expires.
>
> **[3:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=194)** So, you need to look at any costs that could come into play as a result of breaking that contract if such a contract exists, and it may not.
>
> **[3:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/costs-to-consider-as-you-develop-your-exit-strategy?u=76281980&t=202)** So, those are just some of the costs that you should consider when planning a cloud exit strategy.

> [!info]- Semantic Content
>
> **Code Keywords:** if, (2), let (1), finally, (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Designing a cloud migration strategy with an eye toward the exit
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=0)** - [Instructor] I want to wrap things up by talking about some things that you can be doing today that will make it easier to move your application out of the cloud at some point in the future if it should ever become necessary to do so.
>
> **[0:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=11)** Now the best advice that I can possibly give you with regard to this is that whenever possible, you should go ahead and create the exit strategy as a part of your initial cloud migration plan.
>
> **[0:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=21)** So that way, if and when the time comes that it ever becomes necessary to move that application out of the cloud, there's already a plan in place for doing it.
>
> **[0:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=30)** But even beyond that, there are some other things that you should consider.
>
> **[0:33](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=33)** So let's talk about what some of the things are that you can be doing today that are going to make it a lot easier to move that application around in the future.
>
> **[0:41](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=41)** The first recommendation that I would make is to keep an eye toward workload and/or data portability.
>
> **[0:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=47)** Now, what do I mean by that?
>
> **[0:49](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=49)** When we talk about workload portability or data portability, we're talking about the ability to easily move that workload or that data from one location to the other without having to make major changes.
>
> **[1:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=60)** And this is something that is very commonplace in development environments.
>
> **[1:05](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=65)** Let me give you an example.
>
> **[1:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=66)** Let's suppose for a moment that you've got a developer at your organization and they're creating an application that your company is going to use.
>
> **[1:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=74)** Initially, they're probably going to run that application in a development environment because they have to be able to test the application and make changes to the code until everything works the way that it should.
>
> **[1:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=85)** So they may be running it on their own PC or they may have a development server, or something like that, but that application isn't going to stay in that development environment.
>
> **[1:35](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=95)** Eventually, that application is going to be migrated to the production environment, and that might be on-premises, it might be in the cloud, it might start out on premises and eventually have to be moved to the cloud.
>
> **[1:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=107)** So that developer wants to do everything that they possibly can to make it easy to move that application from the development environment to the production environment, and to anywhere else that it might have to go in the future.
>
> **[1:58](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=118)** So one thing that they might do to make that easy is to containerize the application, because a containerized application can be moved from one location to the next to the next without having to make changes to the application.
>
> **[2:11](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=131)** And that's just one way of ensuring workload portability.
>
> **[2:14](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=134)** It's certainly not the only option, but it's one of the most common and one of the most effective techniques.
>
> **[2:20](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=140)** So keep an eye out for things that you can be doing to ensure workload and or data portability.
>
> **[2:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=145)** What else can we do?
>
> **[2:26](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=146)** Well, another thing that you could do is to treat your cloud environment as though it were a hybrid multi-cloud, even if you only use a single cloud.
>
> **[2:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=154)** Now, why is that?
>
> **[2:36](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=156)** Well, the reason is really simple.
>
> **[2:37](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=157)** Today, most organizations do use multi-cloud environments, if not hybrid multi-cloud environments.
>
> **[2:43](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=163)** It's somewhat of a rarity for an organization to only use a single cloud.
>
> **[2:47](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=167)** So even if you're only using a single cloud right now, chances are at some point in the future, you're going to be using more than one cloud.
>
> **[2:54](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=174)** So it's a good idea to go ahead and plan for that.
>
> **[2:57](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=177)** So the reason why it's a good idea to plan for it is because if you're using more than one cloud, then there's a chance that you're going to be migrating applications between those two clouds.
>
> **[3:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=186)** So what can you do to make that easier?
>
> **[3:09](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=189)** Well, what you can do is take a look at the dependencies that your applications require and make sure that those dependencies exist in both clouds.
>
> **[3:16](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=196)** Let me give you an example.
>
> **[3:18](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=198)** Most applications require some sort of identity provider.
>
> **[3:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=201)** For example, they might need an active directory environment.
>
> **[3:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=205)** So if you're using a single cloud right now, chances are you're using an active directory environment within that cloud or some other type of identity provider.
>
> **[3:34](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=214)** So if you deploy another cloud, then it's a good idea to go ahead and mimic that identity provider in the other cloud and keep the two identity providers synchronized with one another.
>
> **[3:44](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=224)** So that way, if an application moves from one cloud to the next, it still has access to the same identity information, in this case, an active directory environment.
>
> **[3:54](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=234)** But we're not just talking about identity providers, we're talking about any dependencies that your applications might require.
>
> **[4:00](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=240)** It's a good idea to make sure that those dependencies exist in any location that could eventually host the application.
>
> **[4:07](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=247)** So that way, if you do end up migrating the application to a different location, you know that all of that applications dependencies are already in place, and that's going to go a long way toward making the migration process more seamless and a lot quicker and easier.
>
> **[4:21](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=261)** Another thing that you can do with regard to making your applications portable is to rely on open standards and common APIs whenever you possibly can.
>
> **[4:30](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=270)** And the reason for that is that those open standards and those common APIs are extremely widely used, and they tend to be well supported both by vendors and by the community.
>
> **[4:40](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=280)** So anytime that you can rely on open standards and common APIs, it's just going to make your applications all that much more compatible with the various environments that they could potentially be hosted in.
>
> **[4:51](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=291)** And then finally, I would recommend considering how your backup and disaster recovery strategies might help with your exit strategy.
>
> **[4:59](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=299)** You know, oftentimes when you're moving an application, it's a complex process, that's a given.
>
> **[5:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=304)** But it's not always going to be a complex process.
>
> **[5:06](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=306)** There are real world examples of people performing an application migration by doing nothing more than restoring a backup in an alternate location.
>
> **[5:15](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=315)** Sometimes that's a valuable option.
>
> **[5:17](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=317)** So you might consider how your existing backup and disaster recovery strategy might be used to help with your cloud exit strategy.
>
> **[5:25](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/designing-a-cloud-migration-strategy-with-an-eye-toward-the-exit?u=76281980&t=325)** So those are just a few things that you might consider doing today to make an eventual cloud exit a lot easier in the future.

> [!info]- Semantic Content
>
> **CLI Commands:** make (13)
> **Code Keywords:** let (4), require (3), case, (1), finally, (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/next-steps?u=76281980&t=1)** - [Brien] Thank you for watching my course on Cloud Migration planning.
>
> **[0:04](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/next-steps?u=76281980&t=4)** I hope that you've enjoyed watching the course as much as I enjoyed creating it.
>
> **[0:08](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/next-steps?u=76281980&t=8)** If your considering a Cloud Migration then you might check out some of my other Cloud related courses such as, "Hosting Virtual Machines "in a Multicloud Environment," or "Running Microsoft Workloads on AWS."
>
> **[0:19](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/next-steps?u=76281980&t=19)** you can find both of those in the LinkedIn Learning library of courses.
>
> **[0:22](https://www.linkedin.com/learning/design-a-cloud-migration-strategy/next-steps?u=76281980&t=22)** In any case, I wish you well with your Cloud Migration project, and again, thank you for watching.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (1), find (1)
> **Code Keywords:** case, (1)
> **Env Vars:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - [brien] (1)


## Path Context

### In [[Design and Present Your Cloud Strategy]]
← [[Cloud Architecture- Design Decisions]] | **3 of 6** | [[Framing Cloud Discussions for the C-Suite]] →

### In [[Introduction to Enterprise Cloud Migration Planning]]
← [[Cloud Concepts Planning An Application Migration Strategy]] | **2 of 4** | [[Dependency Mapping for Cloud Migration]] →

## Appears In

- [[Design and Present Your Cloud Strategy]]
- [[Introduction to Enterprise Cloud Migration Planning]]

---

[↑ Back to top](#)