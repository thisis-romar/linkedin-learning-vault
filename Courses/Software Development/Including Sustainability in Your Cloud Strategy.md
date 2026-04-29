---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: including-sustainability-in-your-cloud-strategy-27157726
url: "https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726"
duration_minutes: 50
duration: 50m
level: Beginner
updated: 10/21/2025
learners: 3258
skills:
  - Sustainability
  - Cloud Strategy
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQErSQeaN7SJLA/learning-public-crop_675_1200/B4EZnzNWEYKkAY-/0/1760721986568?e=2147483647&amp;v=beta&amp;t=6z4hNFkhHBHOradMqvdG3GaiCTjMZ1a5ZcibnqS7wv8"
linkedin_topic: Software Development
learning_paths:
  - '[[Career Essentials in Sustainable Tech by Microsoft and LinkedIn]]'
prev_courses:
  - '[[Sustainability as an Innovation Opportunity]]'
next_courses:
  - '[[Microsoft Cloud for Sustainability- ESG and the Future of Business]]'
path_nav: '[{"path":"Career Essentials in Sustainable Tech by Microsoft and LinkedIn","position":3,"total":7,"prev":"Sustainability as an Innovation Opportunity","next":"Microsoft Cloud for Sustainability- ESG and the Future of Business"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/sustainability
  - skill/cloud-strategy
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Including%20Sustainability%20in%20Your%20Cloud%20Strategy.md)

![Including Sustainability in Your Cloud Strategy](https://media.licdn.com/dms/image/v2/D4E0DAQErSQeaN7SJLA/learning-public-crop_675_1200/B4EZnzNWEYKkAY-/0/1760721986568?e=2147483647&amp;v=beta&amp;t=6z4hNFkhHBHOradMqvdG3GaiCTjMZ1a5ZcibnqS7wv8)

# Including Sustainability in Your Cloud Strategy

> The course covers the fundamental design principles on the most important factors to consider when you want to build a scalable, sustainable solution in the cloud. Instructor Fawad Qureshi helps you understand the nuances of how different design choices produce a different impact on carbon consumption. Learn how you can measure the total carbon consumption of your cloud usage, and the impact desig

> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726) | 50m | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - Do not waste water
  - Designing for scarcity in a world of abundance
  - The green behind the cloud
  - The rise of carbon-aware cloud computing
- [**1. Foundations of Cloud Sustainability**](#1-foundations-of-cloud-sustainability) (7 videos)
  - Factors affecting carbon consumption in the cloud
  - Understanding types of emissions
  - Impact of CPU utilization on carbon consumption
  - Power usage effectiveness
  - Cloud shared responsibility models
  - To autoscale or not to autoscale
  - Sustainable FinOps: Managing costs and carbon together
- [**2. Why Are Some Technologies More Efficient Than Others?**](#2-why-are-some-technologies-more-efficient-than-others) (2 videos)
  - Measuring parallel efficiency of cloud systems
  - The role of AI: Efficiency vs. carbon cost
- [**3. Carbon Measurements and Their Implications**](#3-carbon-measurements-and-their-implications) (7 videos)
  - Carbon tax rates and carbon intensity
  - CSP sustainability calculators
  - Using golden coefficients for carbon estimation
  - Evolving carbon measurement tools in the cloud
  - Cloud sustainability regulations: What businesses need to know
  - Compliance challenges: Aligning cloud strategy with sustainability laws
  - Cloud hardware innovations
- [**4. Energy Consumption Case Studies**](#4-energy-consumption-case-studies) (2 videos)
  - Energy consumption, case study 1
  - Energy consumption, case study 2
- [**5. Consolidation for a Greener Future**](#5-consolidation-for-a-greener-future) (1 videos)
  - Benefits of consolidation
- [**Conclusion**](#conclusion) (1 videos)
  - Learning more about sustainability

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Do not waste water
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/do-not-waste-water?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/do-not-waste-water?u=76281980&t=0)** - [Fawad] I belong to the region of Punjab in the subcontinent.
>
> **[0:03](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/do-not-waste-water?u=76281980&t=3)** It is one of the most fertile regions in the world.
>
> **[0:06](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/do-not-waste-water?u=76281980&t=6)** We have a saying, which roughly translates to, even if you're standing next to the river, do not waste water.
>
> **[0:12](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/do-not-waste-water?u=76281980&t=12)** This is the overarching theme for this course, specifically designed for scarcity in a world of abundance.
>
> **[0:19](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/do-not-waste-water?u=76281980&t=19)** In this course, you'll learn the fundamentals of cloud sustainability.
>
> **[0:22](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/do-not-waste-water?u=76281980&t=22)** We'll cover what makes some technologies greener than others.
>
> **[0:25](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/do-not-waste-water?u=76281980&t=25)** I'll show you some common carbon measurement techniques and their amplifications.
>
> **[0:30](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/do-not-waste-water?u=76281980&t=30)** My name is Fawad Qureshi, and I have been working in the cloud data analytics space for two decades.
>
> **[0:35](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/do-not-waste-water?u=76281980&t=35)** So if you're ready to begin, let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [fawad] (1)

#### Designing for scarcity in a world of abundance
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980&t=0)** - [Instructor] Earth Overshoot Day marks the date when humanity's demand for ecological resources and services in a given year exceeds what Earth can regenerate in that year.
>
> **[0:10](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980&t=10)** Just imagine in the year 2025, we consumed our entire year's carbon quota by July 24th, 2025.
>
> **[0:20](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980&t=20)** So for the rest of the year, we'll be debiting from an account which has no balance.
>
> **[0:25](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980&t=25)** The earth goes into an ecological overdraft.
>
> **[0:30](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980&t=30)** Planet Earth is currently operating at 140% of its capacity and on track to be operating at 200% by the 2030s.
>
> **[0:40](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980&t=40)** Imagine a boat which is safe to travel for a maximum of 10 people at a time, and you find out that the boat is constantly being used by 14 people at the same time.
>
> **[0:52](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980&t=52)** You also hear that people are planning to use the same boat to transfer 20 people at all times in tumultuous waters.
>
> **[1:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980&t=60)** Would you be concerned if you are one of the 20 passengers on the boat?
>
> **[1:04](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980&t=64)** This is exactly why you should be concerned as a developer of the planet.
>
> **[1:09](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980&t=69)** We need to change our ways on how we consume resources on this planet.
>
> **[1:14](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980&t=74)** In the last few years, cloud computing has generated a lot of interest in the market for multiple reasons.
>
> **[1:20](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980&t=80)** Next, we'll discuss the sustainability benefits of using the cloud.

> [!info]- Semantic Content
>
> **Analogies:** imagine (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### The green behind the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=0)** - [Narrator] Accenture, a well-known IT services and consulting firm, in their research paper, "The Green Behind the Cloud" found out that by moving to the cloud, some companies can save up to 95% of their carbon emissions generated by their on-premises infrastructure.
>
> **[0:17](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=17)** This reduction comes from better power and cooling efficiencies in public cloud data centers.
>
> **[0:24](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=24)** This follows the same principle like carpooling or public transport over everyone having their own car.
>
> **[0:32](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=32)** You may not drive your own car for more than two hours a day on the average, and for the rest of the 32 hours, it is parked outside your home or workplace.
>
> **[0:41](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=41)** Using public transport or carpooling, you're able to spread out the idle time across many consumers.
>
> **[0:48](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=48)** Similarly, in the United States, there are 100 million power drills used by people for different DIY projects in their homes.
>
> **[0:57](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=57)** But did you know that a power drill is only used for 20 minutes across its entire lifetime?
>
> **[1:04](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=64)** Perhaps we can launch a service like drill sharing service to service the entire United States through one million power drills only.
>
> **[1:12](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=72)** Similarly, if you have your own infrastructure, there will be times it is not utilized, but yet, it is running at all times.
>
> **[1:21](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=81)** In the cloud, through the use of multitenant deployment, you can spread out resources across several consumers, thereby on the whole, a country would end up consuming less resources.
>
> **[1:35](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=95)** What drives this efficiency?
>
> **[1:37](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=97)** Accenture's research has shown that, for example, AWS data centers are 3.6 times more energy efficient than as compared to median US enterprise data centers.
>
> **[1:48](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=108)** This delivers significant improvement in hardware efficiency, which in turn, reduces the per CPU unit energy consumption.
>
> **[1:55](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=115)** Further improvement can be achieved by following sustainable software engineering principles and implementing cloud native design patterns.
>
> **[2:03](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=123)** The use of multi-tenancy allows several applications to share resources, which reduces energy consumption as compared to when applications are working on dedicated infrastructure.
>
> **[2:15](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=135)** Cloud providers have unique scale and financial incentives and can work closely with stakeholders in adopting the circular economy when it comes to hardware.
>
> **[2:25](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=145)** Accenture estimates show enterprise technology manufacturers can capture an additional 16% of operating profit by designing product for longevity, modularity, and circularity.
>
> **[2:37](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=157)** All of these benefits combined mean that organizations can save up to 95% by moving their data centers to the public cloud.
>
> **[2:47](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=167)** Now that you understand the benefits of the cloud shared economy model, I'm going to show you how your business can leverage the cloud for more efficiency.
>
> **[2:56](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=176)** We'll discuss the rise of carbon-aware cloud computing next.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4)
> **Env Vars:** diy (1), aws (1), cpu (1)
> **CLI Commands:** aws (1)
> **Versions:** 3.6 (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### The rise of carbon-aware cloud computing
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980&t=0)** - [Instructor] You may have heard of this thing called artificial intelligence, which is taking the world by storm.
>
> **[0:05](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980&t=5)** As per a World Economic Forum report, the carbon emissions being generated by AI are doubling every 100 days.
>
> **[0:13](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980&t=13)** A significant majority of the AI workloads run in the cloud.
>
> **[0:18](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980&t=18)** This is why both the providers and consumers of AI services are concerned about the impact of using these services across every aspect of our lives, and how it impacts our planet from a carbon emissions standpoint.
>
> **[0:31](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980&t=31)** This is giving rise to carbon-aware computing.
>
> **[0:35](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980&t=35)** Carbon-aware computing, also referred to as carbon-intelligent computing, is a design principle of green software development and hardware.
>
> **[0:42](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980&t=42)** To be considered green, the hardware or software must have no adverse effects on the environment.
>
> **[0:48](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980&t=48)** Carbon-aware computing focuses on location-shifting, time-shifting, and, where possible, changing the demand to minimize the impact of the compute resources on the planet.
>
> **[0:59](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980&t=59)** Let's define these a bit better.
>
> **[1:01](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980&t=61)** Location-shifting, you switch your servers around to where the grid is greener.
>
> **[1:06](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980&t=66)** Time-shifting, you run your time-insensitive jobs, such as machine learning model training or batch processing, when the percentage of renewable electricity in the grid is the highest.
>
> **[1:17](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980&t=77)** Demand-shaping, your software performs fewer tasks during the high emissions period.
>
> **[1:23](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980&t=83)** Now that you have learned about the carbon-aware cloud computing, let's discuss factors impacting carbon consumption in the cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), switch (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Foundations of Cloud Sustainability

> [↑ Back to Table of Contents](#table-of-contents)

#### Factors affecting carbon consumption in the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=0)** - [Instructor] So you have been given the task of measuring the carbon footprint of your IT estate in the cloud.
>
> **[0:05](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=5)** Where do you begin?
>
> **[0:07](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=7)** If you want to examine the impact of carbon consumption in the cloud, I would suggest beginning with the data analytics workloads, which are some of the most demanding workloads in the cloud.
>
> **[0:16](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=16)** Here are the five things which are critical to review and manage.
>
> **[0:20](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=20)** The first are in control of the cloud service provider.
>
> **[0:23](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=23)** Energy source, select a clean energy source, for example, renewable energy such as wind and solar rather than using fossil fuels.
>
> **[0:33](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=33)** Overall usage, make sure the overall usage of the data center is well controlled.
>
> **[0:38](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=38)** This is usually done by having effective cooling practices in the data center to reduce in a GVA stage.
>
> **[0:45](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=45)** These practices include having effective airflow management, consolidating light running servers, and reducing the overall number of hardware in the data center.
>
> **[0:55](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=55)** Standby power, ensuring that the standby carbon consumption is not too high when the systems are not running any workloads.
>
> **[1:03](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=63)** This is done by selecting hardware manufacturers in your data center with a greener idle footprint.
>
> **[1:08](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=68)** You can get details of energy consumption by CPU rates through organizations such as PEC Power, which we will learn about in the coming sections.
>
> **[1:17](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=77)** The next two are in control of the application designer in the cloud.
>
> **[1:21](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=81)** The first has to do with system utilization, and it is important to make sure you're saturating your existing resources before adding more to the current configuration.
>
> **[1:32](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=92)** We must fully consume all resources before starting to add more hardware to solve problems.
>
> **[1:40](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=100)** The next point is housekeeping.
>
> **[1:42](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=102)** What does this mean?
>
> **[1:44](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=104)** This means what are you doing to ensure that you are a good tenant in the cloud?
>
> **[1:49](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=109)** Are you releasing the resources back to the cloud service provider or are you keeping them in a hot pool of resources like some of the multi-tenant applications do?
>
> **[1:58](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=118)** Single-tenant carbon accounting is simple.
>
> **[2:01](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=121)** All the resources are only provisioned for you, hence all the carbon is allocated to your organization.
>
> **[2:07](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=127)** Some single-tenant applications will over configure their resources in case there's a spike in the workload.
>
> **[2:13](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=133)** Any carbon from extra resources are also 100% allocated to the single user of the platform.
>
> **[2:20](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=140)** It gets complicated in the multitenant scenario.
>
> **[2:23](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=143)** Multiple users are sharing the infrastructure and multitenant applications usually maintain a set of resources on hot standby, often referred to as the hot pool, to provide you access to additional resources in scenarios such as autoscale, pause, resume, et cetera, and to deliver on their service level goals.
>
> **[2:44](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=164)** Now, imagine if there are 100 customers in one region each consuming on an average five nodes, and there's a hot pool of another 200 nodes available.
>
> **[2:54](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=174)** From a carbon calculation point of view, for each customer, are they responsible for the five nodes they're consuming or must there be appropriate allocation done for all the 200 spare nodes?
>
> **[3:06](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=186)** Meaning from a carbon perspective, each customer must report seven nodes worth of carbon.
>
> **[3:12](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=192)** Normally, the resource split between multiple users is much more complicated, and this is a simplified view of the problem.
>
> **[3:20](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=200)** Most of the industry today only allocates the carbon used by the user to them and the hot pool is the responsibility of the service provider.
>
> **[3:30](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=210)** This ensures that there is an incentive for the provider to manage it down and reduce the wastage.
>
> **[3:37](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=217)** So in the previous example, you will only account for five nodes per user instead of seven.
>
> **[3:43](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=223)** For a simpler example, the logic would follow that if I go to a retailer, I'm only responsible for the carbon pollution caused by the items I buy and not for the inventory of the store that the retailer is maintaining.
>
> **[3:57](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=237)** As a consumer, you should make informed choices and select service providers who do a good job of managing the resources in the cloud.
>
> **[4:07](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=247)** In general, efficient multitenant applications will consume less energy as compared to single-tenant applications on the average.
>
> **[4:15](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=255)** Now that you have understood the five basic factors which drive energy consumption in the cloud, next we will talk about the types of emissions and under which category do you need to report the emissions generated from the cloud?

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (1), imagine (1)
> **CLI Commands:** make (3)
> **Env Vars:** gva (1), cpu (1), pec (1)
> **Definitions:** is a  (1), is an  (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Understanding types of emissions
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=0)** - [Instructor] It is difficult to know where to begin tracking your business' emissions without knowing what is the direct or indirect consumption of your business.
>
> **[0:09](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=9)** There's a regulatory framework to divide your carbon emissions into three main categories.
>
> **[0:14](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=14)** Scope one are all direct emissions.
>
> **[0:17](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=17)** This means all direct emissions from the activities of your organization or under its control, including fuel consumption on-site, like gas boilers, fleet vehicles, and air conditioning leaks.
>
> **[0:30](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=30)** Scope two are indirect emissions, what emissions are occurring from utilities purchased and used by the organization.
>
> **[0:38](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=38)** Emissions are created during the production of the energy and eventually used by the organization.
>
> **[0:44](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=44)** Scope three are all other indirect emissions.
>
> **[0:48](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=48)** These are emissions from activities of the organization, occurring from sources that they do not own nor control.
>
> **[0:55](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=55)** These are usually the greatest share of the carbon footprint, covering emissions from business travel, procurement, waste, and water to name a few.
>
> **[1:04](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=64)** Scope one and two are easier to manage for an organization.
>
> **[1:09](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=69)** Scope three emissions, which sometime make up to 80 to 90% of an organization's total emission, can be a challenge to accurately predict and report.
>
> **[1:18](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=78)** It requires closed data collaboration between your partners, suppliers, and other stakeholders in the business.
>
> **[1:26](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=86)** Please keep in mind, under current regulations, most of the carbon emissions from your own on-premises data center is considered scope one, other than purchased electricity, which is considered scope two.
>
> **[1:40](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=100)** While, if you move all the workload to the public cloud, everything will be considered scope three from a carbon reporting perspective.
>
> **[1:48](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=108)** In this section, we talked about different types of emissions and how most of the emissions for an organization fall under scope three, including emissions generated from cloud computing.
>
> **[2:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=120)** Next, we will dive a little deeper into how the carbon consumption of a computer changes with its CPU utilization.

> [!info]- Semantic Content
>
> **Code Keywords:** while, (1), public (1)
> **CLI Commands:** make (1)
> **Env Vars:** cpu (1)
> **Cross-References:** we talked about (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Impact of CPU utilization on carbon consumption
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=0)** - [Narrator] Have you ever thought about how your smartphone has battery ratings of six hours for talk time and 48 hours for standby time?
>
> **[0:08](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=8)** This is because when you are making a call, the phone is doing more grunt work, and thus requires more power to complete the tasks.
>
> **[0:15](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=15)** Similarly, the power consumption of a computer doesn't remain the same all the time.
>
> **[0:21](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=21)** As you put your machine under different levels of stress, its power consumption will change over a period of time.
>
> **[0:27](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=27)** For example, if you're watching a movie on your laptop, it may be running at 40% CPU utilization.
>
> **[0:34](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=34)** However, when the laptop is just turned on and no applications are running other than the operating system, then it might require only a small percentage of CPU utilization and less power.
>
> **[0:46](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=46)** The Standard Performance Evaluation Corporation, SPEC, is an American nonprofit corporation that aims to produce, establish, maintain, and in those a standardized set of performance benchmarks for computers.
>
> **[1:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=60)** The increasing demand for energy efficient IT equipment has resulted in the need for power and performance benchmarks.
>
> **[1:08](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=68)** In response, the SPEC community established the SPECpower Committee, an initiative to augment existing or create new industry standard benchmarks and tools with power energy measurement.
>
> **[1:22](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=82)** On the slide, you can see a sample benchmark from Specpower for one server, and you can see how this power consumption of the node changes for each 10% increment in CPU utilization.
>
> **[1:34](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=94)** From the chart, you can see that one computer running at 80% CPU will consume less electricity than two computers of the same type running at 40% each.
>
> **[1:45](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=105)** This is clear evidence that supports using less resources in the cloud to optimize energy resources.
>
> **[1:51](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=111)** Not only would you end up consuming more power for two servers instead of one, imagine if every workload starts using two nodes instead of one.
>
> **[2:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=120)** What do you think the outcome would be?
>
> **[2:02](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=122)** You would require a much bigger data center, which would also increase the cooling costs of the overall infrastructure as well.
>
> **[2:10](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=130)** Now you understand what happens to power consumption when you increase CPU utilization, and more importantly, how the power consumption goes up when you use two nodes instead of one.
>
> **[2:21](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=141)** We also learned that more nodes means higher cooling costs.
>
> **[2:25](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=145)** In the next section, we will dig deeper into total data center power consumption and how it is measured.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (5), spec (2)
> **Code Keywords:** require (2)
> **Documentation:** spec (2)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### Power usage effectiveness
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=0)** - [Instructor] What happens when you buy more electronics for your home?
>
> **[0:03](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=3)** Of course, your electricity usage increases, but imagine your house no longer has space for the incoming electronics, so what will you do?
>
> **[0:12](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=12)** Do you try to manage that influx of new gadgets with your existing electronics, organizing them like a game of "Tetris"?
>
> **[0:19](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=19)** If that's not possible, do you move to a bigger house?
>
> **[0:23](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=23)** The bigger house will be more expensive in several ways.
>
> **[0:25](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=25)** The taxes would be higher.
>
> **[0:27](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=27)** The cooling cost would be higher, and you would need more equipment to support it, et cetera.
>
> **[0:32](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=32)** Similarly, the growth in cloud computing means that cloud service providers have to continuously expand and move to new, bigger data centers all the time.
>
> **[0:41](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=41)** The same thing happens in large data centers.
>
> **[0:44](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=44)** The cloud service providers try to manage the cooling in several different ways.
>
> **[0:48](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=48)** They introduce better airflow mechanisms, moving to a colder area, using renewable energy sources, et cetera.
>
> **[0:56](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=56)** Power Usage Effectiveness or PUE is a measure of how good a company is managing the cooling of its infrastructure.
>
> **[1:04](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=64)** Power Usage Effectiveness is a ratio of total energy consumed by data center divided by the total energy consumed by servers and computer hardware.
>
> **[1:13](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=73)** The best case scenario is a ratio of 1, which means the data center requires zero cooling, which is nearly impossible.
>
> **[1:21](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=81)** Ideally, the ratio should be close to 1.
>
> **[1:24](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=84)** Google had a PUE of 1.1 in 2019, which was pretty remarkable.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), means that (1)
> **Env Vars:** pue (2)
> **Code Keywords:** new, (1)
> **Versions:** 1.1 (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Cloud shared responsibility models
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=0)** - [Instructor] Have you heard terms like infrastructure as a service, platform as a service, or serverless, et cetera?
>
> **[0:06](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=6)** Does serverless mean that there is actually no server?
>
> **[0:09](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=9)** That's not true.
>
> **[0:11](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=11)** The term serverless refers to an illusion that since you're not managing the server yourself, that it isn't there at all.
>
> **[0:18](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=18)** But the reality is that the server is hidden from you and you just focus on your application.
>
> **[0:24](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=24)** The different terms you hear, like IaaS, PaaS, serverless and SaaS, are just terms that refer to a shared responsibility model, meaning that there are varying parts of a full technology stack that are visible to you, and you have the responsibility to manage in the architecture.
>
> **[0:41](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=41)** In terms of computer resources, every component is still required, just like you would in an on-premises or a full stack model.
>
> **[0:49](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=49)** There is no difference in what needs to be managed.
>
> **[0:52](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=52)** Just who does it.
>
> **[0:54](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=54)** Serverless does not mean there is no server.
>
> **[0:56](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=56)** It just implies the provisioning of those resources is hidden from you.
>
> **[1:02](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=62)** As examples, Salesforce, the popular CRM platform is a SaaS tool.
>
> **[1:06](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=66)** AWS Lambda, Microsoft Azure functions are examples of serverless tools.
>
> **[1:12](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=72)** AWS Beanstalk is a good example for PaaS.
>
> **[1:14](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=74)** While AWS EC2 is an example of infrastructure as a service.
>
> **[1:19](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=79)** From a carbon consumption perspective, you must add up the energy consumed by those hidden resources.
>
> **[1:26](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=86)** Sometimes it'll be a challenge because the true as a service providers do not share the underlying infrastructure details with their customers.

> [!info]- Semantic Content
>
> **Env Vars:** aws (3), crm (1), ec2 (1)
> **Definitions:** is a  (2), refers to (1), is an  (1)
> **CLI Commands:** aws (3)
> **Code Keywords:** lambda (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### To autoscale or not to autoscale
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=0)** - [Presenter] When resources are abundant, it is very easy to be lured into a false sense of security and be less mindful of the available resources.
>
> **[0:09](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=9)** Remember what Punjab taught us in the introduction movie that even if you have hundreds of miles long rivers, do not waste water.
>
> **[0:18](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=18)** Autoscaling is a cloud design pattern where you can seamlessly provision or allocate resources as the user demand increases.
>
> **[0:26](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=26)** There's nothing wrong in using more resources when it is justified, but sometimes we see that vendors try to use autoscaling to overcome the software limitations by adding extra hardware to compensate for software inefficiency.
>
> **[0:40](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=40)** This phenomenon was demonstrated by an academic research paper from Carnegie Mellon University, a leading software engineering institute, showing that throwing infrastructure at a software problem results in much more resources being consumed than as compared to if you had an optimized software.
>
> **[0:58](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=58)** In the research paper titled to "Autoscale or not to Autoscale, they took an optimized system and compared it with a suboptimal system with autoscaling enabled.
>
> **[1:07](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=67)** Their conclusion was, "Our results show that Autoscaling works well.
>
> **[1:11](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=71)** In fact, so well that we were able to take a system with obvious architectural flaws and make it perform nearly as well as a fully optimized version."
>
> **[1:22](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=82)** However, hiding these inefficiencies comes with the price of additional infrastructure.
>
> **[1:27](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=87)** In our case, our inefficient baseline configuration required up to eight times the resources of our efficient optimized cloud configuration to achieve comparable performance.
>
> **[1:42](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=102)** This will not only be more expensive from a cloud billing perspective, but your carbon consumption would be several times higher.
>
> **[1:49](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=109)** Please keep in mind, some vendors may not pass down the cost of extra hardware since they are in the growth stage of their business and want to acquire new customers at all costs.
>
> **[2:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=120)** This is not a sustainable business practice.
>
> **[2:04](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=124)** So you should be wary of software vendors using design patterns such as autoscaling to hide inefficiencies in the cloud.
>
> **[2:11](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=131)** You cannot throw hardware at a software problem.
>
> **[2:14](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=134)** We talked about how in 2010 the earth was operating at 140% of its resource capacity and we are on track to be operating at 200% of the resource capacity by 2030.
>
> **[2:27](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=147)** We simply should not condone this behavior by vendors who are throwing hardware at a software problem.
>
> **[2:34](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=154)** In this section, we learned that by using the cloud design patterns incorrectly, not only can you generate unnecessary carbon for the same workload, but this can be fixed by using the appropriate software development practices.
>
> **[2:46](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=166)** Next.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), pass (1), throw (1)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [presenter] (1)

#### Sustainable FinOps: Managing costs and carbon together
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/sustainable-finops-managing-costs-and-carbon-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/sustainable-finops-managing-costs-and-carbon-together?u=76281980&t=0)** - [Instructor] FinOps is an operational framework and culture practice which maximizes the business value of cloud and technology, enables timely, data-driven decision-making, and creates financial accountability through cross-domain collaboration between engineering, finance, and business teams.
>
> **[0:17](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/sustainable-finops-managing-costs-and-carbon-together?u=76281980&t=17)** FinOps and cloud sustainability mutually support each other through a similar approach to responsible technology usage that enables workload efficiency towards sustainable outcomes that benefit our planet.
>
> **[0:30](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/sustainable-finops-managing-costs-and-carbon-together?u=76281980&t=30)** If you're doing one of these, you are amplifying the other, or as I like to say, even if you don't care about sustainability, I hope you care about your dollars.
>
> **[0:40](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/sustainable-finops-managing-costs-and-carbon-together?u=76281980&t=40)** Next, we'll talk about those software development practices, which will help you in delivering an energy-efficient software.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. Why Are Some Technologies More Efficient Than Others?

> [↑ Back to Table of Contents](#table-of-contents)

#### Measuring parallel efficiency of cloud systems
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=0)** - [Instructor] Have you taken a flight to a major airport recently?
>
> **[0:03](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=3)** Let's take an example from an airport arrival terminal.
>
> **[0:06](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=6)** Imagine you land at an airport and you have to move your luggage to the taxi rank from the baggage carousel.
>
> **[0:13](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=13)** Imagine it takes one person one minute to move a load with a rolling baggage carrier or a trolley.
>
> **[0:20](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=20)** If you have one trolley or baggage carrier, for 10 people, it will take 10 minutes to complete with each person sharing the single trolley.
>
> **[0:28](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=28)** This is serial processing.
>
> **[0:30](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=30)** If you have 10 trolleys for 10 people, now it will only take one minute to complete the task.
>
> **[0:36](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=36)** This achieves the maximum parallel efficiency of 10x.
>
> **[0:40](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=40)** If five people insist on using the same red trolley, which means that they would have to do their task in sequence, no matter how many free trolleys are available, it will always take five minutes to complete the task.
>
> **[0:53](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=53)** This results in a maximum parallel efficiency of 2x despite the fact there are idle resources available.
>
> **[1:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=60)** Why are some technologies more optimized than others?
>
> **[1:04](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=64)** Parallel processing is the single biggest driver of compute efficiency.
>
> **[1:08](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=68)** This means that if your solution is able to make use of more resources, trolleys in this case at the same time, you will get your work done quicker.
>
> **[1:19](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=79)** This is known as Amdahl's law in computing, which is the law of parallel processing.
>
> **[1:25](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=85)** The law states that your parallel efficiency is determined by the bottlenecks.
>
> **[1:30](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=90)** If you have no bottleneck, then you can get 10x efficiency with 10 trolleys.
>
> **[1:35](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=95)** If you have a bottleneck, which in this case was five people insisting on red trolley, your parallel efficiency will not improve with increasing number of available resources.
>
> **[1:45](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=105)** Here is an example of three different types of database processing SQL.
>
> **[1:49](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=109)** Imagine we have a hundred terabytes of data to analyze.
>
> **[1:53](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=113)** On the left is a serial processing database.
>
> **[1:56](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=116)** It chugs along at the speed of a single server.
>
> **[1:59](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=119)** Usually there's only a single CPU on that server.
>
> **[2:03](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=123)** It is the slowest method.
>
> **[2:05](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=125)** It is like having a single trolley for everyone at the airport.
>
> **[2:10](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=130)** In the middle, we see some parallel processing, where multiple servers work in tandem to do the table scans, joins, sorting, and operation.
>
> **[2:19](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=139)** It doesn't do sorting in parallel.
>
> **[2:21](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=141)** That's a huge bottleneck in performance when terabytes of data are involved.
>
> **[2:26](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=146)** This is like a few people insisting on the red trolley.
>
> **[2:30](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=150)** This means there are resources waiting in idle to increase efficiency.
>
> **[2:36](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=156)** On the far right is the maximum efficiency system, which does everything in parallel as much as possible.
>
> **[2:43](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=163)** This will be the faster solution, and to go faster, we simply add more servers to the cluster.
>
> **[2:49](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=169)** In short, the more parallel-efficient your systems are, the more you remove bottlenecks and increase throughput.
>
> **[2:57](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=177)** So, we learned in this session that a software having no bottlenecks will deliver the best performance and throughput, which also helps deliver better power consumption as either it will do the job in less number of nodes or be done with work much faster than the other solutions.
>
> **[3:15](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=195)** Next, we'll talk about the impact of AI on cloud sustainability.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), known as (1), is an  (1), is a  (1)
> **Analogies:** imagine (3)
> **Env Vars:** sql (1), cpu (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### The role of AI: Efficiency vs. carbon cost
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-role-of-ai-efficiency-vs-carbon-cost?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-role-of-ai-efficiency-vs-carbon-cost?u=76281980&t=0)** - [Instructor] AI has taken the world by storm ever since ChatGPT was released in November 2022.
>
> **[0:07](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-role-of-ai-efficiency-vs-carbon-cost?u=76281980&t=7)** From building enterprise business solutions, to people using it as a personal travel agent or looking up recipes, it is everywhere, but it comes at an environmental cost.
>
> **[0:18](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-role-of-ai-efficiency-vs-carbon-cost?u=76281980&t=18)** As per the World Economic Forum, the carbon emission from AI are doubling every 100 days, and a number of AI workloads run in the cloud.
>
> **[0:28](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-role-of-ai-efficiency-vs-carbon-cost?u=76281980&t=28)** So it is imperative for us to think about the carbon emissions of AI when building such AI solutions.
>
> **[0:34](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-role-of-ai-efficiency-vs-carbon-cost?u=76281980&t=34)** I have a detailed course on this topic, Sustainable AI Strategies & Techniques: Developer Best Practices for Building AI Sustainably, which discusses the best practices for optimizing the carbon emissions of AI.
>
> **[0:47](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-role-of-ai-efficiency-vs-carbon-cost?u=76281980&t=47)** I encourage you to have a look at that course if you want to get detailed insights on the subject.
>
> **[0:52](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-role-of-ai-efficiency-vs-carbon-cost?u=76281980&t=52)** Next, we'll ask some very important questions.
>
> **[0:55](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-role-of-ai-efficiency-vs-carbon-cost?u=76281980&t=55)** What are the implications of carbon measurements on a business?
>
> **[1:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-role-of-ai-efficiency-vs-carbon-cost?u=76281980&t=60)** Stay tuned to find out the answer.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 3. Carbon Measurements and Their Implications

> [↑ Back to Table of Contents](#table-of-contents)

#### Carbon tax rates and carbon intensity
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=0)** - [Instructor] In 1972, the Organization for Economic Co-operation and Development, OECD, adopted the Polluter-Pays Principle, PPP, as a guiding principle.
>
> **[0:09](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=9)** Three years later, PPP was adopted by the European community.
>
> **[0:13](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=13)** The Polluter-Pays Principle is a simple principle based on common sense, and it says the polluter actors or the activity causing the pollution should pay to right the wrong.
>
> **[0:24](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=24)** Several countries in Europe have already applied carbon taxes while the US is slightly behind in its implementation.
>
> **[0:32](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=32)** However, several US-based global businesses are already impacted by these regulations.
>
> **[0:37](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=37)** We see that a number of Western European countries have a price of a carbon ton of more than $100.
>
> **[0:44](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=44)** Various companies are allocating the cost of carbon as part of their net neutral pledge, but they're often underestimating the cost.
>
> **[0:53](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=53)** This could become a problem very quickly if the companies do not correctly handle their carbon emissions.
>
> **[0:59](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=59)** We see that Sweden has the highest carbon tax rates of $144 per carbon ton in Europe as per this World Bank data.
>
> **[1:08](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=68)** It should be noted, however, some countries have high taxes, but their energy generation is very clean.
>
> **[1:15](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=75)** But we can take a closer look at this relationship by calculating the carbon intensity for each country.
>
> **[1:22](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=82)** We do this by measuring the amount of greenhouse gases emitted per unit of electricity produced.
>
> **[1:28](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=88)** However, while calculating carbon intensity can highlight some areas for improvement, if we normalize the carbon taxes across Europe, we see a different story develop.
>
> **[1:38](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=98)** Here, we are normalizing the carbon tax rates on a ton for ton basis.
>
> **[1:43](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=103)** Some countries have a lower carbon tax, but their energy generation isn't very clean.
>
> **[1:50](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=110)** So, if we were to look at how much tax you would pay for consuming roughly 32 megawatts in each country across Europe, the Netherlands and Ireland turn out to be the most expensive as they have the worst carbon intensity.
>
> **[2:04](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=124)** Often cloud users in Europe choose the Amsterdam region for its high internet speeds, but this would be another dimension to look into while selecting a cloud region as it would be the most expensive from a carbon taxation perspective as of 2025 numbers.
>
> **[2:21](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=141)** The EU has an emissions trading system where each industry or organization is given a maximum cap of carbon.
>
> **[2:29](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=149)** The overall volume of greenhouse gases that can be emitted by power plants, industry factories, and aviation sector covered by the EU Emissions Trading Systems is limited by a cap on number of emission allowances.
>
> **[2:44](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=164)** Within the cap, companies receive or buy emission allowances, which they can trade as needed.
>
> **[2:50](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=170)** The cap decreases every year while the price of carbon credit increases, ensuring that total emissions fall.
>
> **[2:58](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=178)** So, if you do well with your carbon goals, you can sell your carbon credits to other companies, or if you run over, then you must buy credits.
>
> **[3:07](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=187)** To recap.
>
> **[3:09](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=189)** In this section, we learned about carbon tax rates, carbon intensity, and how companies can trade their carbon credits under the EU ETS system.
>
> **[3:18](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=198)** Next, we will talk about the carbon calculators provided by the cloud service providers and how can you use them for carbon reporting.

> [!info]- Semantic Content
>
> **Env Vars:** ppp (2), oecd (1), ets (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### CSP sustainability calculators
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=0)** - [Instructor] Examining cloud service provider emissions data is almost like getting an aggregated bill from your mobile phone provider with limited line by line items.
>
> **[0:09](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=9)** There's very little breakdown of how the costs were calculated.
>
> **[0:12](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=12)** There's been some progress in this regard, but still getting the details can be a challenge.
>
> **[0:17](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=17)** While all the CSP do share the data for greenhouse gases, they are in aggregated form and it is not possible to compare different technologies and fully understand bottom-up numbers, which could guide you in making corrective decisions.
>
> **[0:30](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=30)** But still, you can use this data for top-down reporting of your company's total carbon emission generated by cloud computing.
>
> **[0:38](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=38)** We could use the calculators in creative ways to calculate per service per node carbon emission.
>
> **[0:44](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=44)** Here's how.
>
> **[0:45](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=45)** All the cloud service providers have a carbon calculator, but they only provide emissions at a monthly level.
>
> **[0:51](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=51)** If you want to use it for a benchmark comparison, then one option could be that you use a clean CSP account and run the benchmark on technology one at the end of a month, let's say June, and nothing else in the month of June using that account.
>
> **[1:05](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=65)** The total emission in the month of June, as per the calculator, would be the approximate total emission for technology one.
>
> **[1:11](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=71)** For technology two, you can start your test in July and similarly run nothing else on that account in July.
>
> **[1:19](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=79)** This way, the total emissions of July, as per the calculator, would be for technology too.
>
> **[1:25](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=85)** So we learned in this section that you can get aggregated data from the cloud service providers' carbon calculators, and with some creative planning you may be able to get service level data from those calculators.
>
> **[1:37](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=97)** Next, we will talk about another method using golden coefficient to estimate power utilization.

> [!info]- Semantic Content
>
> **Env Vars:** csp (2)
> **CLI Commands:** node (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Using golden coefficients for carbon estimation
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/using-golden-coefficients-for-carbon-estimation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/using-golden-coefficients-for-carbon-estimation?u=76281980&t=0)** - [Narrator] Etsy is an online crafter marketplace and their team has built different solutions in the cloud.
>
> **[0:06](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/using-golden-coefficients-for-carbon-estimation?u=76281980&t=6)** They did some benchmarking in 2020 to estimate electricity consumption on a per unit basis.
>
> **[0:12](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/using-golden-coefficients-for-carbon-estimation?u=76281980&t=12)** If you want to use some rule of thumb assumptions for calculation, then you can follow the golden coefficients built by Etsy cloud team.
>
> **[0:19](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/using-golden-coefficients-for-carbon-estimation?u=76281980&t=19)** They call them Etsy Cloud Jewels.
>
> **[0:21](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/using-golden-coefficients-for-carbon-estimation?u=76281980&t=21)** In their test, they have demonstrated that one vCPU in the cloud typically consumes 2.1 watt-hours, one terabyte of HDD consumes 0.89 watt-hours, and one terabyte of SSD consumes 1.52 watt-hours.
>
> **[0:36](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/using-golden-coefficients-for-carbon-estimation?u=76281980&t=36)** While these numbers are bit dated now, the Etsy methodology shows that you can conduct your own benchmark to create your own coefficients to better understand the carbon emissions.
>
> **[0:47](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/using-golden-coefficients-for-carbon-estimation?u=76281980&t=47)** So if you have the infrastructure details, then you can use these coefficients to build your energy estimates.
>
> **[0:53](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/using-golden-coefficients-for-carbon-estimation?u=76281980&t=53)** You may have some error percentages, but in the absence of detailed carbon data from the cloud service providers, these golden coefficients can help in calculating and estimating power consumption.

> [!info]- Semantic Content
>
> **Versions:** 2.1 (1), 0.89 (1), 1.52 (1)
> **Env Vars:** hdd (1), ssd (1)
> **Code Identifiers:** vcpu (1)
> **Definitions:** is an  (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [narrator] (1)

#### Evolving carbon measurement tools in the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=0)** - [Instructor] While the CSP calculators are not offering the carbon emissions at the lowest level of granularity, there have been some positive changes, which I will summarize here.
>
> **[0:09](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=9)** First, let's look at AWS.
>
> **[0:12](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=12)** They're making it easier to access data.
>
> **[0:14](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=14)** To make it easier to use the data from CCFT, customers can now export their monthly data through AWS billing and cost management data export service.
>
> **[0:25](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=25)** Their carbon emissions data export delivers carbon emissions estimates for all the member accounts linked to their management account when customers use AWS organizations.
>
> **[0:36](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=36)** Regional granularity.
>
> **[0:38](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=38)** Customers can now see their carbon emissions broken down by AWS region.
>
> **[0:43](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=43)** This means customers can identify the regions where their usage contributes the most to their carbon footprint, to help them reassess the regional distribution of their workloads on AWS.
>
> **[0:55](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=55)** Microsoft.
>
> **[0:56](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=56)** Emissions Impact Dashboard for Azure is still not showing resource-level emissions data.
>
> **[1:01](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=61)** The dashboard maintains its current functionality, continuing to present data at the subscription level.
>
> **[1:07](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=67)** This data powered by Microsoft methodology aggregates all resource-level data in the background and displays it at the subscription level for a comprehensive view, but at an aggregated level.
>
> **[1:20](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=80)** Google Cloud.
>
> **[1:21](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=81)** In Google Cloud, you can track granular emissions profile of cloud projects.
>
> **[1:26](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=86)** You can monitor your cloud emissions over time by project, product and region, giving IT teams and developers matrix that can help them improve their carbon footprint.
>
> **[1:36](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=96)** Now let's talk about some of sustainability regulations in practice.

> [!info]- Semantic Content
>
> **Env Vars:** aws (5), csp (1), ccft (1)
> **CLI Commands:** aws (5), make (1)
> **Code Keywords:** let (2)
> **Speakers:** - [instructor] (1)

#### Cloud sustainability regulations: What businesses need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-sustainability-regulations-what-businesses-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-sustainability-regulations-what-businesses-need-to-know?u=76281980&t=0)** - [Instructor] There are various sustainability regulations in play, which the businesses need to be mindful of.
>
> **[0:05](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-sustainability-regulations-what-businesses-need-to-know?u=76281980&t=5)** Here's a quick summary.
>
> **[0:06](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-sustainability-regulations-what-businesses-need-to-know?u=76281980&t=6)** EU CSRD requires large companies to disclose scope one, two, and three emissions with double materiality.
>
> **[0:14](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-sustainability-regulations-what-businesses-need-to-know?u=76281980&t=14)** Double materiality is the process of determining not just how the environmental activities impact the company business, but also how the company business impacts the environment.
>
> **[0:24](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-sustainability-regulations-what-businesses-need-to-know?u=76281980&t=24)** SEC Climate Rules.
>
> **[0:26](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-sustainability-regulations-what-businesses-need-to-know?u=76281980&t=26)** US listed firms must disclose climate risk and carbon emissions.
>
> **[0:32](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-sustainability-regulations-what-businesses-need-to-know?u=76281980&t=32)** GHG Protocol and SBTi provide the global standards for measuring and validating emissions target.
>
> **[0:39](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-sustainability-regulations-what-businesses-need-to-know?u=76281980&t=39)** UK and APAC frameworks mandate TCFD slash ISSB aligned carbon disclosures.
>
> **[0:45](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-sustainability-regulations-what-businesses-need-to-know?u=76281980&t=45)** With the increase of AI usage across the enterprise, data and AI consumption is a non-trivial aspect in sustainability reporting.
>
> **[0:52](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-sustainability-regulations-what-businesses-need-to-know?u=76281980&t=52)** Hence, all of these regulations, in some form or another, demand the cloud carbon emissions to be reported as part of different disclosures.

> [!info]- Semantic Content
>
> **Env Vars:** csrd (1), sec (1), ghg (1), apac (1), tcfd (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Compliance challenges: Aligning cloud strategy with sustainability laws
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=0)** - [Narrator] I want to now discuss a high-level framework that businesses can adopt to keep in line with various regulatory requirements.
>
> **[0:07](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=7)** Number one, start with a baseline and build a plan for reduction.
>
> **[0:11](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=11)** Start tracking carbon emissions at the lowest granularity possible.
>
> **[0:16](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=16)** Start using activity-based costing technique where you can allocate carbon emissions at the lowest activity level.
>
> **[0:23](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=23)** Number two, FinOps is an established practice in many mature cloud companies, and carbon calculation need to be a critical part of it.
>
> **[0:31](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=31)** This integration makes it so that we are not just tracking the dollar spent, but also the carbon spent on each activity.
>
> **[0:38](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=38)** Number three, there are various standards available for carbon reporting.
>
> **[0:42](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=42)** Please use the ones applicable to your country or region.
>
> **[0:46](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=46)** Those standards will require certain rigor and transparency in your carbon disclosure.
>
> **[0:52](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=52)** Number four, build a strong governance and audit mechanism around sustainability.
>
> **[0:58](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=58)** Carbon emission reports and dashboards should be reviewed monthly in the organization.
>
> **[1:03](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=63)** Any deviation from the goal should be studied carefully and the root cause should be identified.
>
> **[1:09](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=69)** And lastly, optimize the cloud architecture where possible.
>
> **[1:13](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=73)** Do not throw hardware at a software problem.
>
> **[1:17](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=77)** Remember what Punjab taught us.
>
> **[1:19](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=79)** Do not waste water.
>
> **[1:22](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=82)** Now, let's talk about hardware-based innovations that have come up in the last few years.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), throw (1), let (1)
> **Cross-References:** in the last (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### Cloud hardware innovations
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=0)** - [Presenter] The hardware manufacturers and the cloud providers have brought about a few different innovations that help in reducing carbon emissions.
>
> **[0:07](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=7)** Number one.
>
> **[0:08](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=8)** Arm-based processors, such as AWS Graviton, Azure Cobalt, and Google Axion.
>
> **[0:14](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=14)** These processors use simpler, energy efficient chip design that deliver more compute per watt, reducing the number of servers needed.
>
> **[0:23](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=23)** Number two.
>
> **[0:24](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=24)** Liquid cooling, which is direct-to-chip, immersion-based.
>
> **[0:28](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=28)** This is an innovative way to cut down cooling costs, which removes heat at the source with fluid instead of air, cutting cooling energy used by up to 40% and enabling denser, hotter chips like GPUs.
>
> **[0:42](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=42)** Number three.
>
> **[0:43](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=43)** AI/ML accelerators, such as AWS Trainium, Google TPU, and then Nvidia Grace Hopper.
>
> **[0:51](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=51)** These custom silicone chips are optimized for neural networks, that complete training and inference with far fewer joules per operation.
>
> **[0:59](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=59)** Number four.
>
> **[1:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=60)** Smart storage and networking.
>
> **[1:03](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=63)** It is always cheaper to ship the processing to the data rather than shipping data all over the place.
>
> **[1:09](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=69)** By pushing data processing closer to storage and offloading networking tasks, it lowers the CPU power draw and improves throughput efficiency.
>
> **[1:19](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=79)** Lastly, modular sustainable data centers, which focus on renewables, heat reuse, and optimal battery storage.
>
> **[1:28](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=88)** Modern data centers are built in a modular fashion.
>
> **[1:32](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=92)** Modular racks and local energy integration makes cooling, power, and heat management more efficient and scalable.
>
> **[1:40](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=100)** Overall, these techniques help in reducing the total energy consumption of the cloud.
>
> **[1:46](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=106)** Now let's talk about some energy consumption case studies.

> [!info]- Semantic Content
>
> **Env Vars:** aws (2), tpu (1), cpu (1)
> **CLI Commands:** aws (2)
> **Analogies:** such as (2)
> **Code Keywords:** let (1)
> **Definitions:** is an  (1)
> **Speakers:** - [presenter] (1)


### 4. Energy Consumption Case Studies

> [↑ Back to Table of Contents](#table-of-contents)

#### Energy consumption, case study 1
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=0)** - [Instructor] Let's take the example of a time trial.
>
> **[0:02](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=2)** Two technologies are required to complete 100,000 tasks in 30 minutes, starting with three nodes of similar type each.
>
> **[0:09](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=9)** Technology A completes only 35,000 tasks in 30 minutes.
>
> **[0:13](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=13)** And when we double the servers for Technology A, it only completes 45,000 tasks.
>
> **[0:18](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=18)** Does this remind you of the airport example from earlier in the course?
>
> **[0:22](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=22)** It looks very similar to the red trolley problem, which indicates some inefficiency in this technology.
>
> **[0:28](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=28)** Technology B easily completes the task with 101,000 queries in 30 minutes using three nodes.
>
> **[0:34](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=34)** Since technology A didn't complete the task, we linearly extrapolated and determined it would take about 12 nodes for Technology A to complete the task.
>
> **[0:43](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=43)** Hence, the energy consumption of the 12 nodes of Tech A is compared with three nodes of Tech B.
>
> **[0:49](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=49)** We're assuming 60% CPU utilization with an average of 235 watt hour consumed by each server.
>
> **[0:57](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=57)** Using the numbers on the previous slide, we are extrapolating the numbers for a full year.
>
> **[1:02](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=62)** We can see that the annual electricity consumption is 12 megawatts for Technology A, which is four times that of Technology B.
>
> **[1:10](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=70)** But you can say that I don't pay for the electricity, it will be the CSP who's responsible for that.
>
> **[1:15](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=75)** If we assume 200 grams of carbon dioxide per kilowatt hours, then it will generate 2.47 tons of carbon for Technology A, as opposed to 0.62 tons for Technology B.
>
> **[1:28](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=88)** Assuming a $50 per ton carbon tax, we can see that Technology A will result in a carbon tax of $123, while Tech B will only generate $30 of carbon taxes.
>
> **[1:40](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=100)** In this example, we saw the electricity consumption comparison between two technologies.
>
> **[1:45](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=105)** One technology met the required goal, while the other did not.
>
> **[1:50](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=110)** In the next example, we will apply the same approach to a scenario where both technologies are able to meet the required goal with a slightly different internal configuration.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (1), csp (1)
> **Versions:** 2.47 (1), 0.62 (1)
> **Cross-References:** earlier in (1), in the next (1)
> **Code Keywords:** let (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Energy consumption, case study 2
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-2?u=76281980&t=0)** - [Narrator] Let's take the example of another time trial.
>
> **[0:03](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-2?u=76281980&t=3)** The requirement is to complete 200,000 tasks in 60 minutes.
>
> **[0:07](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-2?u=76281980&t=7)** This time, both technologies complete the required task in the same number of nodes with identical results.
>
> **[0:13](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-2?u=76281980&t=13)** Now, we will use the energy calculations as per the Xe cloud Jules, although both technologies use six nodes to complete the task, Technology X had 64 VCPUs per node, while Technology Y had 32 VCPUs.
>
> **[0:29](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-2?u=76281980&t=29)** This resulted in much different total energy utilization.
>
> **[0:33](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-2?u=76281980&t=33)** Just like the previous example, we have calculated annual electricity, electricity cost, carbon dioxide emissions, and carbon taxes for technology X and Y.
>
> **[0:45](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-2?u=76281980&t=45)** As per the charts, you can see that despite having the same number of nodes and achieving similar end results, the carbon taxes of Technology X is $109 while Technology Y has carbon taxes of $74 approximately.
>
> **[1:02](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-2?u=76281980&t=62)** In this section, we learned that using the similar rates of electricity, carbon intensity, and carbon tax, we can see even when two technologies complete a certain number of tasks in the same number of servers, the internal configuration can result in different carbon emissions.
>
> **[1:18](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-2?u=76281980&t=78)** Next, we will discuss how technology consolidation delivers a greener footprint for the enterprises.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1)
> **Code Keywords:** let (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)


### 5. Consolidation for a Greener Future

> [↑ Back to Table of Contents](#table-of-contents)

#### Benefits of consolidation
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=0)** - [Instructor] We talked about how using cloud computing versus on-premises computing is analogous to using public transport over private cars.
>
> **[0:08](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=8)** 50 private cars versus 50 people in one bus has completely different carbon footprint.
>
> **[0:14](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=14)** The carbon reduction is possible because the bus allows for consolidation.
>
> **[0:18](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=18)** On a unit basis, a bus may have higher carbon consumption than one car, but you will not get any benefits if 50 people buy 50 buses.
>
> **[0:27](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=27)** Similarly, just because you have moved workloads in the cloud doesn't mean you are getting the full benefits.
>
> **[0:33](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=33)** Many companies sometimes do not focus on broader data governance strategy and keep on adding new technologies to the mix.
>
> **[0:40](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=40)** This not only adds complexity to the mix, but it also increases the overall carbon footprint of the organization.
>
> **[0:47](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=47)** You must consolidate your workloads and systems in the cloud wherever it makes business sense in order to make greater use of shared economy model.
>
> **[0:57](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=57)** The consolidation of data and application results in reduction of infrastructure cost by consolidating into a single centralized environment, eliminating risk and cost of multiple fragmented environments, delivering reliable, consistent results based on a common set of agreed upon business rules, eliminating cost and confusion of duplicated data and conflicting results, increasing reuse of data by multiple applications, eliminating cost of duplicated effort, building new technologies.
>
> **[1:30](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=90)** The defragmentation of technologies allows business to deliver much faster time to value.
>
> **[1:36](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=96)** It reduces the overall infrastructure cost, and thereby eliminates unnecessary carbon emissions.
>
> **[1:43](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=103)** We discussed in this session that data and application consolidation in the cloud, which will help in realizing the full green potential of the cloud.
>
> **[1:51](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=111)** Next, we'll talk about where you can learn more about sustainability and what actions you can take in your organization to implement a sustainability strategy.

> [!info]- Semantic Content
>
> **Code Keywords:** private (2), public (1)
> **Cross-References:** we talked about (1), we discussed (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Learning more about sustainability
> [LinkedIn Learning](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=0)** - [Fawad] This is my favorite story regarding sustainability.
>
> **[0:03](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=3)** In 2014, British shoppers took 8.5 billion plastic bags which went to landfill.
>
> **[0:11](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=11)** In December, 2014, the UK government introduced a 5p surcharge which reduced the number of plastic bags by 85% to only 500 million in 2015.
>
> **[0:23](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=23)** Do not underestimate the value of small savings from the ground up.
>
> **[0:28](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=28)** When you start to add up all those savings, they deliver grand results.
>
> **[0:33](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=33)** Are you willing to find your 5p or 5 cents for your business?
>
> **[0:38](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=38)** You should ask your vendors to publish their electricity consumption numbers.
>
> **[0:42](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=42)** Hopefully we can get to a point where we can get to see such stickers in the CSP marketplaces.
>
> **[0:48](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=48)** Before buying the technology, we'll get to see the carbon animations numbers.
>
> **[0:52](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=52)** These are the technology rating stickers you get for electronics in Europe.
>
> **[0:56](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=56)** The way to read the the chart is that technology one consumes on an average 4.2 kilowatt hours when it ran for 1000 hours.
>
> **[1:04](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=64)** While technology pre consume 122.6 kilowatt hour on the average when it ran for 1000 hours.
>
> **[1:13](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=73)** US has different energy stickers for consumer electronics.
>
> **[1:16](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=76)** Here's the same chart in the US Energy Guide format.
>
> **[1:20](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=80)** In this chart, you can see what the estimated annual electricity bill and annual electricity consumption would be for each technology.
>
> **[1:29](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=89)** Technology one consumes just over $7,000.
>
> **[1:32](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=92)** While technology three is costing more than $277,000.
>
> **[1:36](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=96)** Each country and geography may have their own versions of such energy rating stickers.
>
> **[1:44](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=104)** We have reached the end of the course today, and I would like to thank you for spending this time with me.
>
> **[1:49](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=109)** The key takeaways are: Do not underestimate the small savings at each step of software development.
>
> **[1:56](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=116)** All technologies are not created equal.
>
> **[1:58](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=118)** Efficient use of resources is the single most important factor when it comes to energy consumption.
>
> **[2:04](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=124)** For a sustainable future, We cannot keep throwing infrastructure at a software problem.
>
> **[2:10](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=130)** I've added all the resources used in the course in the references section, which you can go through for further details.
>
> **[2:17](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=137)** Whenever you are working with cloud, remember what Punjab taught us.
>
> **[2:21](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=141)** Whatever you do, do not waste water.
>
> **[2:26](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=146)** I'm Fawad Qureshi, and I wish you good luck in your journey to save the planet.

> [!info]- Semantic Content
>
> **Versions:** 8.5 (1), 4.2 (1), 122.6 (1)
> **CLI Commands:** find (1)
> **Env Vars:** csp (1)
> **Speakers:** - [fawad] (1)


## Instructor

- [[Fawad Qureshi]]

## Resources

- Exercise files available

## Skills Covered

- Sustainability
- Cloud Strategy

## Path Context

### In [[Career Essentials in Sustainable Tech by Microsoft and LinkedIn]]
← [[Sustainability as an Innovation Opportunity]] | **3 of 7** | [[Microsoft Cloud for Sustainability- ESG and the Future of Business]] →

## Part of

- [[Career Essentials in Sustainable Tech by Microsoft and LinkedIn]]

## Appears In

- [[Career Essentials in Sustainable Tech by Microsoft and LinkedIn]]

## Related Courses

_Courses sharing skills:_

- [[Planning a Multicloud Solution (2022)]] — Cloud Strategy
- [[Performing a Sustainability Audit with Microsoft Sustainability Manager]] — Sustainability
- [[An Introduction to AI and Sustainability]] — Sustainability
- [[Employee Engagement- Making Sustainability Part of Everybody’s Job]] — Sustainability
- [[Including Sustainability in Your Cloud Strategy (2022)]] — Cloud Strategy

---

[↑ Back to top](#)