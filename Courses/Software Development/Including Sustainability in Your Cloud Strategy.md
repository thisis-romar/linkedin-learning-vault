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
created: 2026-05-03
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
  - [Do not waste water](#do-not-waste-water)
  - [Designing for scarcity in a world of abundance](#designing-for-scarcity-in-a-world-of-abundance)
  - [The green behind the cloud](#the-green-behind-the-cloud)
  - [The rise of carbon-aware cloud computing](#the-rise-of-carbon-aware-cloud-computing)
- [**1. Foundations of Cloud Sustainability**](#1-foundations-of-cloud-sustainability) (7 videos)
  - [Factors affecting carbon consumption in the cloud](#factors-affecting-carbon-consumption-in-the-cloud)
  - [Understanding types of emissions](#understanding-types-of-emissions)
  - [Impact of CPU utilization on carbon consumption](#impact-of-cpu-utilization-on-carbon-consumption)
  - [Power usage effectiveness](#power-usage-effectiveness)
  - [Cloud shared responsibility models](#cloud-shared-responsibility-models)
  - [To autoscale or not to autoscale](#to-autoscale-or-not-to-autoscale)
  - [Sustainable FinOps: Managing costs and carbon together](#sustainable-finops-managing-costs-and-carbon-together)
- [**2. Why Are Some Technologies More Efficient Than Others?**](#2-why-are-some-technologies-more-efficient-than-others) (2 videos)
  - [Measuring parallel efficiency of cloud systems](#measuring-parallel-efficiency-of-cloud-systems)
  - [The role of AI: Efficiency vs. carbon cost](#the-role-of-ai-efficiency-vs-carbon-cost)
- [**3. Carbon Measurements and Their Implications**](#3-carbon-measurements-and-their-implications) (7 videos)
  - [Carbon tax rates and carbon intensity](#carbon-tax-rates-and-carbon-intensity)
  - [CSP sustainability calculators](#csp-sustainability-calculators)
  - [Using golden coefficients for carbon estimation](#using-golden-coefficients-for-carbon-estimation)
  - [Evolving carbon measurement tools in the cloud](#evolving-carbon-measurement-tools-in-the-cloud)
  - [Cloud sustainability regulations: What businesses need to know](#cloud-sustainability-regulations-what-businesses-need-to-know)
  - [Compliance challenges: Aligning cloud strategy with sustainability laws](#compliance-challenges-aligning-cloud-strategy-with-sustainability-laws)
  - [Cloud hardware innovations](#cloud-hardware-innovations)
- [**4. Energy Consumption Case Studies**](#4-energy-consumption-case-studies) (2 videos)
  - [Energy consumption, case study 1](#energy-consumption-case-study-1)
  - [Energy consumption, case study 2](#energy-consumption-case-study-2)
- [**5. Consolidation for a Greener Future**](#5-consolidation-for-a-greener-future) (1 videos)
  - [Benefits of consolidation](#benefits-of-consolidation)
- [**Conclusion**](#conclusion) (1 videos)
  - [Learning more about sustainability](#learning-more-about-sustainability)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Do not waste water](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/do-not-waste-water?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/do-not-waste-water?u=76281980&t=0)** - [Fawad] I belong to the region of Punjab in the subcontinent. It is one of the most fertile regions in the world. We have a saying, which roughly translates to, even if you're standing next to the river, do not waste water. This is the overarching theme for this course, specifically designed for scarcity in a world of abundance. In this course, you'll learn the fundamentals of cloud [[Sustainability]]. We'll cover what makes some technologies greener than others. I'll show you some common carbon measurement techniques and their amplifications. My name is Fawad Qureshi, and I have been working in the cloud data analytics space for two decades. So if you're ready to begin, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Sustainability]] (1)
> **Speakers:** - [fawad] (1)

#### [Designing for scarcity in a world of abundance](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/designing-for-scarcity-in-a-world-of-abundance?u=76281980&t=0)** - [Instructor] Earth Overshoot Day marks the date when humanity's demand for ecological resources and services in a given year exceeds what Earth can regenerate in that year. Just imagine in the year 2025, we consumed our entire year's carbon quota by July 24th, 2025. So for the [[Representational State Transfer (REST)|rest]] of the year, we'll be debiting from an account which has no balance. The earth goes into an ecological overdraft. Planet Earth is currently operating at 140% of its capacity and on track to be operating at 200% by the 2030s. Imagine a boat which is safe to travel for a maximum of 10 people at a time, and you find out that the boat is constantly being used by 14 people at the same time. You also hear that people are planning to use the same boat to transfer 20 people at all times in tumultuous waters. Would you be concerned if you are one of the 20 passengers on the boat? This is exactly why you should be concerned as a developer of the planet. We need to change our ways on how we consume resources on this planet. In the last few years, [[Cloud Computing]] has generated a lot of interest in the market for multiple reasons. Next, we'll discuss the [[Sustainability]] benefits of using the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Cloud Computing]] (1), [[Sustainability]] (1)
> **Analogies:** imagine (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [The green behind the cloud](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=0)** - [Narrator] Accenture, a well-known IT services and consulting firm, in their research paper, "The Green Behind the Cloud" found out that by moving to the cloud, some companies can save up to 95% of their carbon emissions generated by their on-premises infrastructure. This reduction comes from better power and cooling efficiencies in public cloud data centers. This follows the same principle like carpooling or public transport over everyone having their own car. You may not drive your own car for more than two hours a day on the average, and for the [[Representational State Transfer (REST)|rest]] of the 32 hours, it is parked outside your home or workplace. Using public transport or carpooling, you're able to spread out the idle time across many consumers. Similarly, in the United States, there are 100 million power drills used by people for different DIY projects in their homes. But did you know that a power drill is only used for 20 minutes across its entire lifetime? Perhaps we can launch a service like drill sharing service to service the entire United States through one million power drills only. Similarly, if you have your own infrastructure, there will be times it is not utilized, but yet, it is running at all times. In the cloud, through the use of multitenant deployment, you can spread out resources across several consumers, thereby on the whole, a country would end up consuming less resources.
>
> **[1:35](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-green-behind-the-cloud?u=76281980&t=95)** What drives this efficiency? Accenture's research has shown that, for example, AWS data centers are 3.6 times more energy efficient than as compared to median US enterprise data centers. This delivers significant improvement in [[Hardware]] efficiency, which in turn, reduces the per CPU unit energy consumption. Further improvement can be achieved by following sustainable software engineering principles and implementing cloud native [[Design Patterns]]. The use of multi-tenancy allows several applications to share resources, which reduces energy consumption as compared to when applications are working on dedicated infrastructure. Cloud providers have unique scale and financial incentives and can work closely with stakeholders in adopting the circular economy when it comes to hardware. Accenture estimates show enterprise technology manufacturers can capture an additional 16% of operating profit by designing product for longevity, modularity, and circularity. All of these benefits combined mean that organizations can save up to 95% by moving their data centers to the public cloud. Now that you understand the benefits of the cloud shared economy model, I'm going to show you how your business can leverage the cloud for more efficiency. We'll discuss the rise of carbon-aware [[Cloud Computing]] next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Design Patterns]] (1), [[Cloud Computing]] (1)
> **Env Vars:** diy (1), aws (1), cpu (1)
> **CLI Commands:** aws (1)
> **Versions:** 3.6 (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [The rise of carbon-aware cloud computing](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-rise-of-carbon-aware-cloud-computing?u=76281980&t=0)** - [Instructor] You may have heard of this thing called [[Artificial Intelligence (AI)|artificial intelligence]], which is taking the world by storm. As per a World Economic Forum report, the carbon emissions being generated by AI are doubling every 100 days. A significant majority of the AI workloads run in the cloud. This is why both the providers and consumers of AI services are concerned about the impact of using these services across every aspect of our lives, and how it impacts our planet from a carbon emissions standpoint. This is giving rise to carbon-aware computing. Carbon-aware computing, also referred to as carbon-intelligent computing, is a design principle of green [[Software Development]] and [[Hardware]]. To be considered green, the hardware or software must have no adverse effects on the environment. Carbon-aware computing focuses on location-shifting, time-shifting, and, where possible, changing the demand to minimize the impact of the compute resources on the planet. Let's define these a bit better. Location-shifting, you switch your servers around to where the grid is greener. Time-shifting, you run your time-insensitive jobs, such as machine learning model training or [[Batch Processing]], when the percentage of renewable electricity in the grid is the highest. Demand-shaping, your software performs fewer tasks during the high emissions period. Now that you have learned about the carbon-aware [[Cloud Computing]], let's discuss factors impacting carbon consumption in the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Software Development]] (1), [[Batch Processing]] (1), [[Cloud Computing]] (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Foundations of Cloud Sustainability

[↑ Back to Table of Contents](#table-of-contents)

#### [Factors affecting carbon consumption in the cloud](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=0)** - [Instructor] So you have been given the task of measuring the carbon footprint of your IT estate in the cloud. Where do you begin? If you want to examine the impact of carbon consumption in the cloud, I would suggest beginning with the data analytics workloads, which are some of the most demanding workloads in the cloud. Here are the five things which are critical to review and manage. The first are in control of the cloud service provider. Energy source, select a clean energy source, for example, renewable energy such as wind and solar rather than using fossil fuels. Overall usage, make sure the overall usage of the data center is well controlled. This is usually done by having effective cooling practices in the data center to reduce in a GVA stage. These practices include having effective airflow management, consolidating light running servers, and reducing the overall number of [[Hardware]] in the data center. Standby power, ensuring that the standby carbon consumption is not too high when the systems are not running any workloads. This is done by selecting hardware manufacturers in your data center with a greener idle footprint. You can get details of energy consumption by CPU rates through organizations such as PEC Power, which we will learn about in the coming sections. The next two are in control of the application designer in the cloud. The first has to do with system utilization, and it is important to make sure you're saturating your existing resources before adding more to the current configuration. We must fully consume all resources
>
> **[1:36](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=96)** before starting to add more hardware to solve problems. The next point is housekeeping. What does this mean? This means what are you doing to ensure that you are a good tenant in the cloud? Are you releasing the resources back to the cloud service provider or are you keeping them in a hot pool of resources like some of the multi-tenant applications do? Single-tenant carbon accounting is simple. All the resources are only provisioned for you, hence all the carbon is allocated to your organization. Some single-tenant applications will over configure their resources in case there's a spike in the workload. Any carbon from extra resources are also 100% allocated to the single user of the platform. It gets complicated in the multitenant scenario. Multiple users are sharing the infrastructure and multitenant applications usually maintain a set of resources on hot standby, often referred to as the hot pool, to provide you access to additional resources in scenarios such as autoscale, pause, resume, et cetera, and to deliver on their service level goals. Now, imagine if there are 100 customers in one region each consuming on an average five nodes, and there's a hot pool of another 200 nodes available. From a carbon calculation point of view, for each customer, are they responsible for the five nodes they're consuming or must there be appropriate allocation done for all the 200 spare nodes? Meaning from a carbon perspective,
>
> **[3:08](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/factors-impacting-carbon-consumption-in-the-cloud?u=76281980&t=188)** each customer must report seven nodes worth of carbon. Normally, the resource split between multiple users is much more complicated, and this is a simplified view of the problem. Most of the industry today only allocates the carbon used by the user to them and the hot pool is the responsibility of the service provider. This ensures that there is an incentive for the provider to manage it down and reduce the wastage. So in the previous example, you will only account for five nodes per user instead of seven. For a simpler example, the logic would follow that if I go to a retailer, I'm only responsible for the carbon pollution caused by the items I buy and not for the inventory of the store that the retailer is maintaining. As a consumer, you should make informed choices and select service providers who do a good job of managing the resources in the cloud. In general, efficient multitenant applications will consume less energy as compared to single-tenant applications on the average. Now that you have understood the five basic factors which drive energy consumption in the cloud, next we will talk about the types of emissions and under which category do you need to report the emissions generated from the cloud?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3)
> **Analogies:** such as (3), for example (1), imagine (1)
> **CLI Commands:** make (3)
> **Env Vars:** gva (1), cpu (1), pec (1)
> **Definitions:** is a  (1), is an  (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Understanding types of emissions](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=0)** - [Instructor] It is difficult to know where to begin tracking your business' emissions without knowing what is the direct or indirect consumption of your business. There's a regulatory framework to divide your carbon emissions into three main categories. Scope one are all direct emissions. This means all direct emissions from the activities of your organization or under its control, including fuel consumption on-site, like gas boilers, fleet vehicles, and air conditioning leaks. Scope two are indirect emissions, what emissions are occurring from utilities purchased and used by the organization. Emissions are created during the production of the energy and eventually used by the organization. Scope three are all other indirect emissions. These are emissions from activities of the organization, occurring from sources that they do not own nor control. These are usually the greatest share of the carbon footprint, covering emissions from business travel, procurement, waste, and water to name a few. Scope one and two are easier to manage for an organization. Scope three emissions, which sometime make up to 80 to 90% of an organization's total emission, can be a challenge to accurately predict and report. It requires closed data collaboration between your partners, suppliers, and other stakeholders in the business. Please keep in mind, under current regulations, most of the carbon emissions from your own on-premises data center
>
> **[1:33](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/understanding-types-of-emissions?u=76281980&t=93)** is considered scope one, other than purchased electricity, which is considered scope two. While, if you move all the workload to the public cloud, everything will be considered scope three from a carbon reporting perspective. In this section, we talked about different types of emissions and how most of the emissions for an organization fall under scope three, including emissions generated from [[Cloud Computing]]. Next, we will dive a little deeper into how the carbon consumption of a computer changes with its CPU utilization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** cpu (1)
> **Cross-References:** we talked about (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Impact of CPU utilization on carbon consumption](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=0)** - [Narrator] Have you ever thought about how your smartphone has battery ratings of six hours for talk time and 48 hours for standby time? This is because when you are making a call, the phone is doing more grunt work, and thus requires more power to complete the tasks. Similarly, the power consumption of a computer doesn't remain the same all the time. As you put your machine under different levels of stress, its power consumption will change over a period of time. For example, if you're watching a movie on your laptop, it may be running at 40% CPU utilization. However, when the laptop is just turned on and no applications are running other than the operating system, then it might require only a small percentage of CPU utilization and less power. The Standard Performance Evaluation Corporation, SPEC, is an American nonprofit corporation that aims to produce, establish, maintain, and in those a standardized set of performance benchmarks for computers. The increasing demand for energy efficient IT equipment has resulted in the need for power and performance benchmarks. In response, the SPEC community established the SPECpower Committee, an initiative to augment existing or create new industry standard benchmarks and tools with power energy measurement. On the slide, you can see a sample benchmark from Specpower for one server, and you can see how this power consumption of the node changes for each 10% increment in CPU utilization. From the chart, you can see that one computer
>
> **[1:36](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/impact-of-cpu-utilization-on-carbon-consumption?u=76281980&t=96)** running at 80% CPU will consume less electricity than two computers of the same type running at 40% each. This is clear evidence that supports using less resources in the cloud to optimize energy resources. Not only would you end up consuming more power for two servers instead of one, imagine if every workload starts using two nodes instead of one. What do you think the outcome would be? You would require a much bigger data center, which would also increase the cooling costs of the overall infrastructure as well. Now you understand what happens to power consumption when you increase CPU utilization, and more importantly, how the power consumption goes up when you use two nodes instead of one. We also learned that more nodes means higher cooling costs. In the next section, we will dig deeper into total data center power consumption and how it is measured.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (5), spec (2)
> **Documentation:** spec (2)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Power usage effectiveness](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/power-usage-effectiveness?u=76281980&t=0)** - [Instructor] What happens when you buy more [[Electronics]] for your home? Of course, your electricity usage increases, but imagine your house no longer has space for the incoming electronics, so what will you do? Do you try to manage that influx of new gadgets with your existing electronics, organizing them like a game of "Tetris"? If that's not possible, do you move to a bigger house? The bigger house will be more expensive in several ways. The taxes would be higher. The cooling cost would be higher, and you would need more equipment to support it, et cetera. Similarly, the growth in [[Cloud Computing]] means that cloud service providers have to continuously expand and move to new, bigger data centers all the time. The same thing happens in large data centers. The cloud service providers try to manage the cooling in several different ways. They introduce better airflow mechanisms, moving to a colder area, using renewable energy sources, et cetera. Power Usage Effectiveness or PUE is a measure of how good a company is managing the cooling of its infrastructure. Power Usage Effectiveness is a ratio of total energy consumed by data center divided by the total energy consumed by servers and computer [[Hardware]]. The best case scenario is a ratio of 1, which means the data center requires zero cooling, which is nearly impossible. Ideally, the ratio should be close to 1. [[Google]] had a PUE of 1.1 in 2019, which was pretty remarkable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Electronics]] (3), [[Cloud Computing]] (1), [[Hardware]] (1), [[Google]] (1)
> **Definitions:** is a  (3), means that (1)
> **Env Vars:** pue (2)
> **Versions:** 1.1 (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Cloud shared responsibility models](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-shared-responsibility-models?u=76281980&t=0)** - [Instructor] Have you heard terms like [[IaaS|infrastructure as a service]], [[PaaS|platform as a service]], or serverless, et cetera? Does serverless mean that there is actually no server? That's not true. The term serverless refers to an illusion that since you're not managing the server yourself, that it isn't there at all. But the reality is that the server is hidden from you and you just focus on your application. The different terms you hear, like [[IaaS]], [[PaaS]], serverless and [[SaaS]], are just terms that refer to a shared responsibility model, meaning that there are varying parts of a full technology stack that are visible to you, and you have the responsibility to manage in the architecture. In terms of computer resources, every component is still required, just like you would in an on-premises or a full stack model. There is no difference in what needs to be managed. Just who does it. Serverless does not mean there is no server. It just implies the provisioning of those resources is hidden from you. As examples, Salesforce, the popular CRM platform is a SaaS tool. AWS Lambda, [[Microsoft Azure]] functions are examples of serverless tools. AWS Beanstalk is a good example for PaaS. While AWS [[Amazon EC2|EC2]] is an example of infrastructure as a service. From a carbon consumption perspective, you must add up the energy consumed by those hidden resources. Sometimes it'll be a challenge because the true as a service providers do not share the underlying infrastructure details with their customers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IaaS|Infrastructure as a service]] (2), [[PaaS]] (2), [[SaaS]] (2), [[PaaS|Platform as a service]] (1), [[IaaS]] (1)
> **Env Vars:** aws (3), crm (1), ec2 (1)
> **Definitions:** is a  (2), refers to (1), is an  (1)
> **CLI Commands:** aws (3)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [To autoscale or not to autoscale](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=0)** - [Presenter] When resources are abundant, it is very easy to be lured into a false sense of security and be less mindful of the available resources. Remember what Punjab taught us in the introduction movie that even if you have hundreds of miles long rivers, do not waste water. Autoscaling is a cloud design pattern where you can seamlessly provision or allocate resources as the user demand increases. There's nothing wrong in using more resources when it is justified, but sometimes we see that vendors try to use autoscaling to overcome the software limitations by adding extra [[Hardware]] to compensate for software inefficiency. This phenomenon was demonstrated by an academic research paper from Carnegie Mellon University, a leading software engineering institute, showing that throwing infrastructure at a software problem results in much more resources being consumed than as compared to if you had an optimized software. In the research paper titled to "Autoscale or not to Autoscale, they took an optimized system and compared it with a suboptimal system with autoscaling enabled. Their conclusion was, "Our results show that Autoscaling works well. In fact, so well that we were able to take a system with obvious architectural flaws and make it perform nearly as well as a fully optimized version." However, hiding these inefficiencies comes with the price of additional infrastructure. In our case, our inefficient baseline configuration required up to eight times the resources
>
> **[1:35](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/to-autoscale-or-not-to-autoscale?u=76281980&t=95)** of our efficient optimized cloud configuration to achieve comparable performance. This will not only be more expensive from a cloud billing perspective, but your carbon consumption would be several times higher. Please keep in mind, some vendors may not pass down the cost of extra hardware since they are in the growth stage of their business and want to acquire new customers at all costs. This is not a [[Sustainable Business]] practice. So you should be wary of software vendors using [[Design Patterns]] such as autoscaling to hide inefficiencies in the cloud. You cannot throw hardware at a software problem. We talked about how in 2010 the earth was operating at 140% of its resource capacity and we are on track to be operating at 200% of the resource capacity by 2030. We simply should not condone this behavior by vendors who are throwing hardware at a software problem. In this section, we learned that by using the cloud design patterns incorrectly, not only can you generate unnecessary carbon for the same workload, but this can be fixed by using the appropriate [[Software Development]] practices. Next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (4), [[Design Patterns]] (2), [[Sustainable Business]] (1), [[Software Development]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [presenter] (1)

#### [Sustainable FinOps: Managing costs and carbon together](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/sustainable-finops-managing-costs-and-carbon-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/sustainable-finops-managing-costs-and-carbon-together?u=76281980&t=0)** - [Instructor] FinOps is an operational framework and culture practice which maximizes the business value of cloud and technology, enables timely, data-driven [[Decision-Making]], and creates financial [[Accountability]] through cross-domain collaboration between engineering, finance, and business teams. FinOps and cloud [[Sustainability]] mutually support each other through a similar approach to responsible technology usage that enables workload efficiency towards sustainable outcomes that benefit our planet. If you're doing one of these, you are amplifying the other, or as I like to say, even if you don't care about sustainability, I hope you care about your dollars. Next, we'll talk about those [[Software Development]] practices, which will help you in delivering an energy-efficient software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Sustainability]] (2), [[Decision-Making]] (1), [[Accountability]] (1), [[Software Development]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. Why Are Some Technologies More Efficient Than Others?

[↑ Back to Table of Contents](#table-of-contents)

#### [Measuring parallel efficiency of cloud systems](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=0)** - [Instructor] Have you taken a flight to a major airport recently? Let's take an example from an airport arrival terminal. Imagine you land at an airport and you have to move your luggage to the taxi rank from the baggage carousel. Imagine it takes one person one minute to move a load with a rolling baggage carrier or a trolley. If you have one trolley or baggage carrier, for 10 people, it will take 10 minutes to complete with each person sharing the single trolley. This is serial processing. If you have 10 trolleys for 10 people, now it will only take one minute to complete the task. This achieves the maximum parallel efficiency of 10x. If five people insist on using the same red trolley, which means that they would have to do their task in sequence, no matter how many free trolleys are available, it will always take five minutes to complete the task. This results in a maximum parallel efficiency of 2x despite the fact there are idle resources available. Why are some technologies more optimized than others? Parallel processing is the single biggest driver of compute efficiency. This means that if your solution is able to make use of more resources, trolleys in this case at the same time, you will get your work done quicker. This is known as Amdahl's law in computing, which is the law of parallel processing. The law states that your parallel efficiency is determined by the bottlenecks. If you have no bottleneck, then you can get 10x efficiency with 10 trolleys.
>
> **[1:35](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=95)** If you have a bottleneck, which in this case was five people insisting on red trolley, your parallel efficiency will not improve with increasing number of available resources. Here is an example of three different types of database processing [[SQL]]. Imagine we have a hundred terabytes of data to analyze. On the left is a serial processing database. It chugs along at the speed of a single server. Usually there's only a single CPU on that server. It is the slowest method. It is like having a single trolley for everyone at the airport. In the middle, we see some parallel processing, where multiple servers work in tandem to do the table scans, joins, sorting, and operation. It doesn't do sorting in parallel. That's a huge bottleneck in performance when terabytes of data are involved. This is like a few people insisting on the red trolley. This means there are resources waiting in idle to increase efficiency. On the far right is the maximum efficiency system, which does everything in parallel as much as possible. This will be the faster solution, and to go faster, we simply add more servers to the cluster. In short, the more parallel-efficient your systems are, the more you remove bottlenecks and increase throughput. So, we learned in this session that a software having no bottlenecks will deliver the best performance and throughput, which also helps deliver better power consumption as either it will do the job in less number of nodes
>
> **[3:10](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/measuring-parallel-efficiency-of-the-cloud-systems?u=76281980&t=190)** or be done with work much faster than the other solutions. Next, we'll talk about the impact of AI on cloud [[Sustainability]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Sustainability]] (1)
> **Definitions:** means that (2), known as (1), is an  (1), is a  (1)
> **Analogies:** imagine (3)
> **Env Vars:** sql (1), cpu (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [The role of AI: Efficiency vs. carbon cost](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-role-of-ai-efficiency-vs-carbon-cost?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/the-role-of-ai-efficiency-vs-carbon-cost?u=76281980&t=0)** - [Instructor] AI has taken the world by storm ever since [[ChatGPT]] was released in November 2022. From building enterprise business solutions, to people using it as a personal travel agent or looking up recipes, it is everywhere, but it comes at an environmental cost. As per the World Economic Forum, the carbon emission from AI are doubling every 100 days, and a number of AI workloads run in the cloud. So it is imperative for us to think about the carbon emissions of AI when building such [[AI Solutions]]. I have a detailed course on this topic, Sustainable AI Strategies & Techniques: Developer Best Practices for Building AI Sustainably, which discusses the best practices for optimizing the carbon emissions of AI. I encourage you to have a look at that course if you want to get detailed insights on the subject. Next, we'll ask some very important questions. What are the implications of carbon measurements on a business? Stay tuned to find out the answer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (1), [[AI Solutions]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 3. Carbon Measurements and Their Implications

[↑ Back to Table of Contents](#table-of-contents)

#### [Carbon tax rates and carbon intensity](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=0)** - [Instructor] In 1972, the Organization for Economic Co-operation and Development, OECD, adopted the Polluter-Pays Principle, PPP, as a guiding principle. Three years later, PPP was adopted by the European community. The Polluter-Pays Principle is a simple principle based on common sense, and it says the polluter actors or the activity causing the pollution should pay to right the wrong. Several countries in Europe have already applied carbon taxes while the US is slightly behind in its implementation. However, several US-based global businesses are already impacted by these regulations. We see that a number of Western European countries have a price of a carbon ton of more than $100. Various companies are allocating the cost of carbon as part of their net neutral pledge, but they're often underestimating the cost. This could become a problem very quickly if the companies do not correctly handle their carbon emissions. We see that Sweden has the highest carbon tax rates of $144 per carbon ton in Europe as per this World Bank data. It should be noted, however, some countries have high taxes, but their energy generation is very clean. But we can take a closer look at this relationship by calculating the carbon intensity for each country. We do this by measuring the amount of greenhouse gases emitted per unit of electricity produced. However, while calculating carbon intensity can highlight some areas for improvement, if we normalize the carbon taxes across Europe,
>
> **[1:36](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=96)** we see a different story develop. Here, we are normalizing the carbon tax rates on a ton for ton basis. Some countries have a lower carbon tax, but their energy generation isn't very clean. So, if we were to look at how much tax you would pay for consuming roughly 32 megawatts in each country across Europe, the Netherlands and Ireland turn out to be the most expensive as they have the worst carbon intensity. Often cloud users in Europe choose the Amsterdam region for its high internet speeds, but this would be another dimension to look into while selecting a cloud region as it would be the most expensive from a carbon taxation perspective as of 2025 numbers. The EU has an emissions trading system where each industry or organization is given a maximum cap of carbon. The overall volume of greenhouse gases that can be emitted by power plants, industry factories, and aviation sector covered by the EU Emissions Trading Systems is limited by a cap on number of emission allowances. Within the cap, companies receive or buy emission allowances, which they can trade as needed. The cap decreases every year while the price of carbon credit increases, ensuring that total emissions fall. So, if you do well with your carbon goals, you can sell your carbon credits to other companies, or if you run over, then you must buy credits. To recap.
>
> **[3:09](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/carbon-tax-rates-and-carbon-intensity?u=76281980&t=189)** In this section, we learned about carbon tax rates, carbon intensity, and how companies can trade their carbon credits under the EU ETS system. Next, we will talk about the carbon calculators provided by the cloud service providers and how can you use them for carbon reporting.

> [!info]- Semantic Content
>
> **Env Vars:** ppp (2), oecd (1), ets (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [CSP sustainability calculators](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=0)** - [Instructor] Examining cloud service provider emissions data is almost like getting an aggregated bill from your mobile phone provider with limited line by line items. There's very little breakdown of how the costs were calculated. There's been some progress in this regard, but still getting the details can be a challenge. While all the CSP do share the data for greenhouse gases, they are in aggregated form and it is not possible to compare different technologies and fully understand bottom-up numbers, which could guide you in making corrective decisions. But still, you can use this data for top-down reporting of your company's total carbon emission generated by [[Cloud Computing]]. We could use the calculators in creative ways to calculate per service per node carbon emission. Here's how. All the cloud service providers have a carbon calculator, but they only provide emissions at a monthly level. If you want to use it for a benchmark comparison, then one option could be that you use a clean CSP account and run the benchmark on technology one at the end of a month, let's say June, and nothing else in the month of June using that account. The total emission in the month of June, as per the calculator, would be the approximate total emission for technology one. For technology two, you can start your test in July and similarly run nothing else on that account in July. This way, the total emissions of July, as per the calculator, would be for technology too. So we learned in this section that you can get aggregated data from the cloud service providers' carbon calculators,
>
> **[1:32](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/csp-sustainability-calculators?u=76281980&t=92)** and with some creative planning you may be able to get service level data from those calculators. Next, we will talk about another method using golden coefficient to estimate power utilization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (1)
> **Env Vars:** csp (2)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### [Using golden coefficients for carbon estimation](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/using-golden-coefficients-for-carbon-estimation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/using-golden-coefficients-for-carbon-estimation?u=76281980&t=0)** - [Narrator] Etsy is an online crafter marketplace and their team has built different solutions in the cloud. They did some benchmarking in 2020 to estimate electricity consumption on a per unit basis. If you want to use some rule of thumb assumptions for calculation, then you can follow the golden coefficients built by Etsy cloud team. They call them Etsy Cloud Jewels. In their test, they have demonstrated that one vCPU in the cloud typically consumes 2.1 watt-hours, one terabyte of HDD consumes 0.89 watt-hours, and one terabyte of SSD consumes 1.52 watt-hours. While these numbers are bit dated now, the Etsy methodology shows that you can conduct your own benchmark to create your own coefficients to better understand the carbon emissions. So if you have the infrastructure details, then you can use these coefficients to build your energy estimates. You may have some error percentages, but in the absence of detailed carbon data from the cloud service providers, these golden coefficients can help in calculating and estimating power consumption.

> [!info]- Semantic Content
>
> **Versions:** 2.1 (1), 0.89 (1), 1.52 (1)
> **Env Vars:** hdd (1), ssd (1)
> **Code Identifiers:** vcpu (1)
> **Definitions:** is an  (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [narrator] (1)

#### [Evolving carbon measurement tools in the cloud](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=0)** - [Instructor] While the CSP calculators are not offering the carbon emissions at the lowest level of granularity, there have been some positive changes, which I will summarize here. First, let's look at AWS. They're making it easier to access data. To make it easier to use the data from CCFT, customers can now export their monthly data through AWS billing and [[Cost Management]] data export service. Their carbon emissions data export delivers carbon emissions estimates for all the member accounts linked to their management account when customers use AWS organizations. Regional granularity. Customers can now see their carbon emissions broken down by AWS region. This means customers can identify the regions where their usage contributes the most to their carbon footprint, to help them reassess the regional distribution of their workloads on AWS. [[Microsoft]]. Emissions Impact Dashboard for [[Microsoft Azure|Azure]] is still not showing resource-level emissions data. The dashboard maintains its current functionality, continuing to present data at the subscription level. This data powered by Microsoft methodology aggregates all resource-level data in the background and displays it at the subscription level for a comprehensive view, but at an aggregated level. [[Google Cloud Platform (GCP)|Google Cloud]]. In Google Cloud, you can track granular emissions profile of cloud projects. You can monitor your cloud emissions over time by project, product and region, giving IT teams and developers matrix that can help them improve their carbon footprint.
>
> **[1:36](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/evolving-carbon-measurement-tools-in-the-cloud?u=76281980&t=96)** Now let's talk about some of [[Sustainability]] regulations in practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Cost Management]] (1), [[Microsoft Azure|Azure]] (1), [[Sustainability]] (1)
> **Env Vars:** aws (5), csp (1), ccft (1)
> **CLI Commands:** aws (5), make (1)
> **Speakers:** - [instructor] (1)

#### [Cloud sustainability regulations: What businesses need to know](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-sustainability-regulations-what-businesses-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-sustainability-regulations-what-businesses-need-to-know?u=76281980&t=0)** - [Instructor] There are various [[Sustainability]] regulations in play, which the businesses need to be mindful of. Here's a quick summary. EU CSRD requires large companies to disclose scope one, two, and three emissions with double materiality. Double materiality is the process of determining not just how the environmental activities impact the company business, but also how the company business impacts the environment. SEC Climate Rules. US listed firms must disclose climate risk and carbon emissions. GHG Protocol and SBTi provide the global standards for measuring and validating emissions target. UK and APAC frameworks mandate TCFD slash ISSB aligned carbon disclosures. With the increase of AI usage across the enterprise, data and AI consumption is a non-trivial aspect in sustainability reporting. Hence, all of these regulations, in some form or another, demand the cloud carbon emissions to be reported as part of different disclosures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Sustainability]] (2)
> **Env Vars:** csrd (1), sec (1), ghg (1), apac (1), tcfd (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Compliance challenges: Aligning cloud strategy with sustainability laws](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/compliance-challenges-aligning-cloud-strategy-with-sustainability-laws?u=76281980&t=0)** - [Narrator] I want to now discuss a high-level framework that businesses can adopt to keep in line with various regulatory requirements. Number one, start with a baseline and build a plan for reduction. Start tracking carbon emissions at the lowest granularity possible. Start using activity-based costing technique where you can allocate carbon emissions at the lowest activity level. Number two, FinOps is an established practice in many mature cloud companies, and carbon calculation need to be a critical part of it. This integration makes it so that we are not just tracking the dollar spent, but also the carbon spent on each activity. Number three, there are various standards available for carbon reporting. Please use the ones applicable to your country or region. Those standards will require certain rigor and transparency in your carbon disclosure. Number four, build a strong governance and audit mechanism around [[Sustainability]]. Carbon emission reports and [[Dashboards]] should be reviewed monthly in the organization. Any deviation from the goal should be studied carefully and the root cause should be identified. And lastly, optimize the cloud architecture where possible. Do not throw [[Hardware]] at a software problem. Remember what Punjab taught us. Do not waste water. Now, let's talk about hardware-based innovations that have come up in the last few years.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Sustainability]] (1), [[Dashboards]] (1)
> **Cross-References:** in the last (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Cloud hardware innovations](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=0)** - [Presenter] The [[Hardware]] manufacturers and the cloud providers have brought about a few different innovations that help in reducing carbon emissions. Number one. Arm-based processors, such as AWS Graviton, [[Microsoft Azure|Azure]] Cobalt, and [[Google]] Axion. These processors use simpler, energy efficient chip design that deliver more compute per watt, reducing the number of servers needed. Number two. Liquid cooling, which is direct-to-chip, immersion-based. This is an innovative way to cut down cooling costs, which removes heat at the source with fluid instead of air, cutting cooling energy used by up to 40% and enabling denser, hotter chips like GPUs. Number three. AI/ML accelerators, such as AWS Trainium, Google TPU, and then Nvidia Grace Hopper. These custom silicone chips are optimized for [[Neural Networks]], that complete training and inference with far fewer joules per operation. Number four. Smart storage and networking. It is always cheaper to ship the processing to the data rather than shipping data all over the place. By pushing [[Data Processing]] closer to storage and offloading networking tasks, it lowers the CPU power draw and improves throughput efficiency. Lastly, modular sustainable data centers, which focus on renewables, heat reuse, and optimal battery storage. Modern data centers are built in a modular fashion. Modular racks
>
> **[1:33](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/cloud-hardware-innovations?u=76281980&t=93)** and local energy integration makes cooling, power, and heat management more efficient and scalable. Overall, these techniques help in reducing the total energy consumption of the cloud. Now let's talk about some energy consumption case studies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Hardware]] (1), [[Microsoft Azure|Azure]] (1), [[Neural Networks]] (1), [[Data Processing]] (1)
> **Env Vars:** aws (2), tpu (1), cpu (1)
> **CLI Commands:** aws (2)
> **Analogies:** such as (2)
> **Definitions:** is an  (1)
> **Speakers:** - [presenter] (1)


### 4. Energy Consumption Case Studies

[↑ Back to Table of Contents](#table-of-contents)

#### [Energy consumption, case study 1](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=0)** - [Instructor] Let's take the example of a time trial. Two technologies are required to complete 100,000 tasks in 30 minutes, starting with three nodes of similar type each. Technology A completes only 35,000 tasks in 30 minutes. And when we double the servers for Technology A, it only completes 45,000 tasks. Does this remind you of the airport example from earlier in the course? It looks very similar to the red trolley problem, which indicates some inefficiency in this technology. Technology B easily completes the task with 101,000 queries in 30 minutes using three nodes. Since technology A didn't complete the task, we linearly extrapolated and determined it would take about 12 nodes for Technology A to complete the task. Hence, the energy consumption of the 12 nodes of Tech A is compared with three nodes of Tech B. We're assuming 60% CPU utilization with an average of 235 watt hour consumed by each server. Using the numbers on the previous slide, we are extrapolating the numbers for a full year. We can see that the annual electricity consumption is 12 megawatts for Technology A, which is four times that of Technology B. But you can say that I don't pay for the electricity, it will be the CSP who's responsible for that. If we assume 200 grams of carbon dioxide per kilowatt hours, then it will generate 2.47 tons of carbon for Technology A, as opposed to 0.62 tons for Technology B. Assuming a $50 per ton carbon tax, we can see that Technology A will result
>
> **[1:33](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-1?u=76281980&t=93)** in a carbon tax of $123, while Tech B will only generate $30 of carbon taxes. In this example, we saw the electricity consumption comparison between two technologies. One technology met the required goal, while the other did not. In the next example, we will apply the same approach to a scenario where both technologies are able to meet the required goal with a slightly different internal configuration.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (1), csp (1)
> **Versions:** 2.47 (1), 0.62 (1)
> **Cross-References:** earlier in (1), in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Energy consumption, case study 2](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/energy-consumption-case-study-2?u=76281980&t=0)** - [Narrator] Let's take the example of another time trial. The requirement is to complete 200,000 tasks in 60 minutes. This time, both technologies complete the required task in the same number of nodes with identical results. Now, we will use the energy calculations as per the Xe cloud Jules, although both technologies use six nodes to complete the task, Technology X had 64 VCPUs per node, while Technology Y had 32 VCPUs. This resulted in much different total energy utilization. Just like the previous example, we have calculated annual electricity, electricity cost, carbon dioxide emissions, and carbon taxes for technology X and Y. As per the charts, you can see that despite having the same number of nodes and achieving similar end results, the carbon taxes of Technology X is $109 while Technology Y has carbon taxes of $74 approximately. In this section, we learned that using the similar rates of electricity, carbon intensity, and carbon tax, we can see even when two technologies complete a certain number of tasks in the same number of servers, the internal configuration can result in different carbon emissions. Next, we will discuss how technology consolidation delivers a greener footprint for the enterprises.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)


### 5. Consolidation for a Greener Future

[↑ Back to Table of Contents](#table-of-contents)

#### [Benefits of consolidation](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=0)** - [Instructor] We talked about how using [[Cloud Computing]] versus on-premises computing is analogous to using public transport over private cars. 50 private cars versus 50 people in one bus has completely different carbon footprint. The carbon reduction is possible because the bus allows for consolidation. On a unit basis, a bus may have higher carbon consumption than one car, but you will not get any benefits if 50 people buy 50 buses. Similarly, just because you have moved workloads in the cloud doesn't mean you are getting the full benefits. Many companies sometimes do not focus on broader [[Data Governance]] strategy and keep on adding new technologies to the mix. This not only adds complexity to the mix, but it also increases the overall carbon footprint of the organization. You must consolidate your workloads and systems in the cloud wherever it makes business sense in order to make greater use of shared economy model. The consolidation of data and application results in reduction of infrastructure cost by consolidating into a single centralized environment, eliminating risk and cost of multiple fragmented environments, delivering reliable, consistent results based on a common set of agreed upon business rules, eliminating cost and confusion of duplicated data and conflicting results, increasing reuse of data by multiple applications, eliminating cost of duplicated effort, building new technologies. The defragmentation of technologies allows business
>
> **[1:33](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/benefits-of-consolidation?u=76281980&t=93)** to deliver much faster time to value. It reduces the overall infrastructure cost, and thereby eliminates unnecessary carbon emissions. We discussed in this session that data and application consolidation in the cloud, which will help in realizing the full green potential of the cloud. Next, we'll talk about where you can learn more about [[Sustainability]] and what actions you can take in your organization to implement a sustainability strategy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Sustainability]] (2), [[Cloud Computing]] (1), [[Data Governance]] (1)
> **Cross-References:** we talked about (1), we discussed (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning more about sustainability](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=0)** - [Fawad] This is my favorite story regarding [[Sustainability]]. In 2014, British shoppers took 8.5 billion plastic bags which went to landfill. In December, 2014, the UK government introduced a 5p surcharge which reduced the number of plastic bags by 85% to only 500 million in 2015. Do not underestimate the value of small savings from the ground up. When you start to add up all those savings, they deliver grand results. Are you willing to find your 5p or 5 cents for your business? You should ask your vendors to publish their electricity consumption numbers. Hopefully we can get to a point where we can get to see such stickers in the CSP marketplaces. Before buying the technology, we'll get to see the carbon animations numbers. These are the technology rating stickers you get for [[Electronics]] in Europe. The way to read the the chart is that technology one consumes on an average 4.2 kilowatt hours when it ran for 1000 hours. While technology pre consume 122.6 kilowatt hour on the average when it ran for 1000 hours. US has different energy stickers for consumer electronics. Here's the same chart in the US Energy Guide format. In this chart, you can see what the estimated annual electricity bill and annual electricity consumption would be for each technology. Technology one consumes just over $7,000. While technology three is costing more than $277,000.
>
> **[1:36](https://www.linkedin.com/learning/including-sustainability-in-your-cloud-strategy-27157726/learning-more-about-sustainability?u=76281980&t=96)** Each country and geography may have their own versions of such energy rating stickers. We have reached the end of the course today, and I would like to thank you for spending this time with me. The key takeaways are: Do not underestimate the small savings at each step of [[Software Development]]. All technologies are not created equal. Efficient use of resources is the single most important factor when it comes to energy consumption. For a sustainable future, We cannot keep throwing infrastructure at a software problem. I've added all the resources used in the course in the references section, which you can go through for further details. Whenever you are working with cloud, remember what Punjab taught us. Whatever you do, do not waste water. I'm Fawad Qureshi, and I wish you good luck in your journey to save the planet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Electronics]] (2), [[Sustainability]] (1), [[Software Development]] (1)
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