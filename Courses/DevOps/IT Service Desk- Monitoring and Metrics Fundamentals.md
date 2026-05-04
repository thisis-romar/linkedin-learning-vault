---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: it-service-desk-monitoring-and-metrics-fundamentals
url: "https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals"
duration_minutes: 58
duration: 58m
level: Beginner
updated: 8/28/2019
learners: 40250
skills:
  - IT Service Management
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFtlgzD59tnZw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669856812?e=2147483647&amp;v=beta&amp;t=4WUW7jfU6-xRe4ocxrobi7IiL9JHGK-tYJ94wDXYV8k"
linkedin_topic: DevOps
learning_paths:
  - '[Atlassian IT Service Management (ITSM) Professional Certificate](../../Paths/DevOps/Professional%20Certificates/Atlassian%20IT%20Service%20Management%20(ITSM)%20Professional%20Certificate.md)'
prev_courses:
  - '[IT Service Management Foundations- Change Management](IT%20Service%20Management%20Foundations-%20Change%20Management.md)'
path_nav: '[{"path":"Atlassian IT Service Management (ITSM) Professional Certificate","position":4,"total":4,"prev":"IT Service Management Foundations- Change Management","next":null}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/network-and-system-administration
  - skill/it-service-management
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/IT%20Service%20Desk-%20Monitoring%20and%20Metrics%20Fundamentals.md)

![IT Service Desk: Monitoring and Metrics Fundamentals](https://media.licdn.com/dms/image/v2/C4E0DAQFtlgzD59tnZw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669856812?e=2147483647&amp;v=beta&amp;t=4WUW7jfU6-xRe4ocxrobi7IiL9JHGK-tYJ94wDXYV8k)

# IT Service Desk: Monitoring and Metrics Fundamentals

> IT service management (ITSM) metrics provide organizations with a detailed view of how their service desk is faring. Are they meeting their business goals and keeping their customers happy? It's all in the data. But determining which metrics to measure—and how those metrics will impact reporting—can be tricky. In this course, instructor Brett Moffett shares industry best practices on collecting IT

> [LinkedIn Learning](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals) | 58m | Beginner | 40K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Monitoring service management success](#monitoring-service-management-success)
  - [What you should know](#what-you-should-know)
- [**1. Collecting Valid Service Management Data Points**](#1-collecting-valid-service-management-data-points) (5 videos)
  - [From data to wisdom](#from-data-to-wisdom)
  - [Garbage in, garbage out](#garbage-in-garbage-out)
  - [How to kill good data](#how-to-kill-good-data)
  - [Less is sometimes more](#less-is-sometimes-more)
  - [Always review your data](#always-review-your-data)
- [**2. Why Monitor Service Management Performance?**](#2-why-monitor-service-management-performance) (3 videos)
  - [Why are you monitoring?](#why-are-you-monitoring)
  - [Outcomes for monitoring](#outcomes-for-monitoring)
  - [Knowing what actions to take](#knowing-what-actions-to-take)
- [**3. Determining Which Metrics to Monitor**](#3-determining-which-metrics-to-monitor) (4 videos)
  - [Most common metrics](#most-common-metrics)
  - [The role of service-level agreements](#the-role-of-service-level-agreements)
  - [Net Promoter Score](#net-promoter-score)
  - [How does Net Promoter Score work?](#how-does-net-promoter-score-work)
- [**4. Exploring Tools and Reporting**](#4-exploring-tools-and-reporting) (3 videos)
  - [Common reporting tools](#common-reporting-tools)
  - [Visibility of reporting](#visibility-of-reporting)
  - [Baseline reporting](#baseline-reporting)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Monitoring service management success](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/monitoring-service-management-success?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/monitoring-service-management-success?u=76281980&t=0)** - [Brett] In this course, we will look at the industry best practice advice on collecting IT service desk monitoring metrics for the purpose of monitoring performance and customer satisfaction in a service-focused environment. We'll be taking a platform agnostic look at these best practices, so you won't have to worry about software or learning new tools. Hi, I'm Brett Moffett, and I've been in the [IT Service Management](../../Skills/Network%20and%20System%20Administration/IT%20Service%20Management.md) and delivery industry for over 25 years and have a passion for delivering good customer service at all levels of the business to all levels of customers. In this course, we're going to look at common mistakes made when gathering data for monitoring, the targeted outcomes of our monitoring, and some common outcomes and solutions that can help you get an understanding of where your service desk is now and where it is heading. I'm really excited to share my experience with you, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IT Service Management](../../Skills/Network%20and%20System%20Administration/IT%20Service%20Management.md) (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [brett] (1)

#### [What you should know](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/what-you-should-know?u=76281980&t=0)** - [Instructor] Viewers should have a good understanding of the Information Technology Infrastructure Library framework, better known as [ITIL](../../Skills/Network%20and%20System%20Administration/ITIL.md), and have experience in a service management business environment. There are no specific product skills required. This course is applicable to all levels of experience as many of the concepts, whilst high-level, are applicable to beginners through to experienced professionals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ITIL](../../Skills/Network%20and%20System%20Administration/ITIL.md) (1)
> **Env Vars:** itil (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 1. Collecting Valid Service Management Data Points

[↑ Back to Table of Contents](#table-of-contents)

#### [From data to wisdom](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/from-data-to-wisdom?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/from-data-to-wisdom?u=76281980&t=0)** - [Instructor] The goal of any reporting is to derive knowledge from information that has been compiled from individual and related data. Said in another way, it's data that we collect from each data point, such as a customer's name, when a call was logged, or who was working it, et cetera. We combine these disparate pieces of data into records, or combinations of records, to give us information about what our work looks like. From there, our goal is to find patterns, trends, and actionable knowledge that allows us to make business decisions, direct resources, and focus efforts for improvement. To better illustrate this fact, I want to come back to a fairly fundamental principle about the data and information flow, so we can refer back to it throughout the following sessions. You may have seen this pyramid before, but for those of you that haven't, or as a refresher for those who haven't seen it in awhile, this is the data, information knowledge, wisdom pyramid or triangle. When talking about ITSM monitoring and metrics, it is important to get a good understanding of each of these stages and the impact they have on the outcome. Let's step through each of these stages and look at them more closely. Each value, property, dropdown box or data point we record in a support ticket is a single data point. Individually, these data points are useless,
>
> **[1:35](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/from-data-to-wisdom?u=76281980&t=95)** as they tell us nothing. Without context, data is just ones and zeroes. Yes and nos, black and white. In this example, we can see just the data points, either yes or no. None of this means anything. When we give that data some context, we start to see that this data has meaning. This meaning gives us our first real usable information, such as resolved at first contact, the billing number, or the employee ID. 50% of the calls logged were resolved at first contact and did not have to be escalated to a high level. The important point here is that data needs context to be processed into a usable form. Now we have processed this data, we have some knowledge about our environment, but one piece of knowledge on its own doesn't really help us, either, as we don't know why we got that result. By processing this knowledge with other pieces of information, we start to build up a wider understanding of the situation. In this case, we might be able to merge the information about the first call resolution with the information about the number of calls regarding billing and see that a very low percentage of the billing calls are resolved at first contact. This gives us the knowledge
>
> **[3:10](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/from-data-to-wisdom?u=76281980&t=190)** that the highest percentage reason that customers would be unable to have their call resolved at first contact is because the call is in regards to billing. This is an important piece of knowledge, as now we have to be able to take action on this knowledge and apply it to our situation. The final piece of this triangle is wisdom. This is the piece where we start to understand cause and effect of the knowledge that we've been given and how we can apply it. In our example here, it might be that the frontline staff do not have the correct training or access to the systems required or the system is too complex for the time they have on a call with a customer. In the service management environment, to get the wisdom from this final piece, we are turning not to specific data, information, or knowledge to derive this wisdom, but we are rather using our own experience, judgment, and reflection to know why the knowledge we have found is the way that it is. By reflecting on our environment and our staff, we might conclude that only one of our frontline staff have had enough training on billing questions or maybe certain systems are down or inaccessible by staff. This wisdom is something we can take action on by training more of our staff or giving them the access they need to be able to resolve calls at first contact.
>
> **[4:44](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/from-data-to-wisdom?u=76281980&t=284)** I hope this example has given you the context and language we will use throughout the course and lay down the foundation of the importance of each layer of the data, information, knowledge, wisdom triangle.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (2)
> **Env Vars:** itsm (1)
> **UI Navigation:** dropdown (1)
> **Speakers:** - [instructor] (1)

#### [Garbage in, garbage out](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/garbage-in-garbage-out?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/garbage-in-garbage-out?u=76281980&t=0)** - [Instructor] I know this is a pretty obvious point to start out on and it might seem like a well worn cliche, but it is a critical component to consider when looking at any reporting. In the previous section we looked at how data underpinned everything we want to achieve from monitoring our service management environment. With this in mind, the individual data points are a critical foundation for all knowledge we wish to extract and something we have to get right before we can be confident that any outcome of our monitoring and metrics is accurate. It is important to capture the data points that will make up the basis of the reports we wish to create. So a lot of thinking needs to go into what we want report on before we can play out what data we need to capture. We will look at why we are reporting and monitoring and we'll also look deeper into common metrics used in future sections of this course. But for now, let's look at just a couple of common mistakes people make in trying to gather the right data. First and foremost, data in a support ticket is overwhelmingly collected by the analyst that is logging the ticket. If the form layout is too difficult to navigate or the list of options to choose from too long or complex, analysts will get frustrated and take the path of lease resistance to get the call logged and move on to the next one. More often than not, the path of least resistance
>
> **[1:34](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/garbage-in-garbage-out?u=76281980&t=94)** is to select categories like Miscellaneous or Other and once analysts start to use common data shortcuts like these it affects the overall quality and reliability of the data collected. In short, the data becomes garbage and therefore generates garbage reports. When considering any component of what data to collect and when, it is critical to make the collection of the data as simple and as intuitive as possible to ensure that analysts can easily collect and record that data without having to navigate too many steps or choose from complicated lists or options. It won't remove all frustrations from the job, but it will collect cleaner and more accurate data. In the next video, we will look at how to simplify the effort for analysts and collect better data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [How to kill good data](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/how-to-kill-good-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/how-to-kill-good-data?u=76281980&t=0)** - [Narrator] We spoke in the previous video about garbage in, garbage out. The quickest and easiest way to guarantee garbage data is to offer analysts and users alike the choice of options, such as other or miscellaneous. Here's why it's important to avoid those values. Analysts have a lot of work on their plate in a day. Many have phone lines ringing nonstop during the day. Others might have long complicated calls that take considerable time to resolve. The last thing a service analyst wants to think about is categorizing tickets into exactly the right classification so management can get more accurate reporting. If any drop down categorization list contains an option of other or miscellaneous, then this is the easiest and simplest option for them to be able to select and move on to the next piece of work that is coming their way. Similar reasoning goes for end users. They just want to log their call and get an answer. What category or value is selected to get a job logged is of no consequence to them. Again, if a drop down box categorization list contains an option for other or miscellaneous, then this is the easiest and simplest option for them and the most likely to be chosen. If other or miscellaneous is an option, then users and analysts alike will select it. If even a small percentage of people select these options,
>
> **[1:34](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/how-to-kill-good-data?u=76281980&t=94)** all the data collected can be considered as contaminated and therefore statistically useless for any meaningful reporting. In short, avoid any categorization values of other or miscellaneous at all costs. They give you no valuable data and only contaminate the good data that you do get. In the next video, we will look at options that can reduce the number of items in a drop down list and how fewer items in a list can actually provide better accuracy and better data.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Less is sometimes more](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/less-is-sometimes-more?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/less-is-sometimes-more?u=76281980&t=0)** - [Instructor] In the context of [IT Service Management](../../Skills/Network%20and%20System%20Administration/IT%20Service%20Management.md), some data that we collect is inescapable. For example, the person who logged the call, the time the call was logged, the source of the logged call, et cetera. These data points are critical and are also simple to collect as there is no ambiguity to this type of data and some of it is even system generated and requires no input from the user or analyst. However, there are other data points that are subjective and not as cut and dry. These are things such as category, urgency, resolution, et cetera. The key to good data is to reduce the amount of subjective data points that service management analysts have to choose from. Wherever possible, eliminate lists or user-selectable values that can mean different things to different people. And remember, never use other or miscellaneous. Let's look at an example of a common approach to incident classification that is commonly seen. Many ITSM [products](../../Skills/Software%20Development/Microsoft%20Products.md) have a list to choose from to categorize a ticket. Many organizations have huge, long lists to try and break down all the tickets to very specific categories to try and report on these items. One example of this I've seen looks like this. Software Issue, [Hardware](../../Topics/Hardware.md) Issue, Laptop, Desktop, et cetera. Now while this is a very accurate way
>
> **[1:32](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/less-is-sometimes-more?u=76281980&t=92)** of recording and reporting on the exact make and model of a machine that has the issue, it has several clicks for the analyst to arrive at the value they require and requires additional information to be sought out that the analyst may not know at the time of logging the call and what happens if this incident was for a piece of software that wasn't working on a given type of machine? Do we need to repeat all software entries under each hardware item? Also, ask yourself honestly, how many analysts have the time or interest to classify the category to this level of accuracy? Don't get me wrong, there are plenty of analysts who do a fantastic job of detailed classification like this but wouldn't it be better to have them focusing on solving issues rather than which category to choose? So instead, think of classification as a larger categorization of a general issue such as a hardware issue. Think of these as big buckets to throw our tickets into rather than trying to filter it to a granular level. Don't worry, we will get to the detailed data in a moment. So for now, let's look at some of the big categories we might choose. Hardware is always a good one. Software, maybe network. User account, communication, training and assistance maybe. If the analyst also adds a software configuration item
>
> **[3:08](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/less-is-sometimes-more?u=76281980&t=188)** to the ticket, then we know it's an issue with both hardware and software. With these very simple pieces of information, we can write reports that can search on hardware issues, make and model, operating system, software package and of course, other incidents that might be related to any of the associated CIs, so we can see patterns emerge such as a particular application not working on a certain make or model PC or even one with a certain update, et cetera. The resolution category can also help. With an initial category of hardware issue is there any need for a resolution category such as hardware fault? Instead, a resolution category of warranty can tell us that it was a physical fault with the hardware associated with that ticket. From an analyst's perspective, they have only had to enter a basic category, a hardware configuration item and a basic resolution category yet from a reporting standpoint, we have been able to capture a depth of data that we could never build a deep enough category pick list for. If you only take away one point from this entire training session, let this be it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (10), [IT Service Management](../../Skills/Network%20and%20System%20Administration/IT%20Service%20Management.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Analogies:** such as (4), for example (1)
> **CLI Commands:** make (3)
> **Env Vars:** itsm (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Always review your data](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/always-review-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/always-review-your-data?u=76281980&t=0)** - [Instructor] In the previous sections, we spoke about reducing the number of categories and values for users and analysts to choose from to make their lives easier and our data more accurate. However, this is not a one-once, fire-and-forget exercise. As we start to achieve insight into our environment, practices and outcomes, we may need to refine the properties we are capturing, add values, remove values, or even just rename values. Within [ITIL](../../Skills/Network%20and%20System%20Administration/ITIL.md), continual service improvement or CSI is often forgotten about after the first initial push of implementing a new ITSM platform or solution. However, continual service improvement is essential to the functioning of a system and critical to accurate and useful reporting. The purpose of continual service improvement is to continually align and realign IT services to business needs as they change over time by identifying improvements that support business processes and the needs of the business change or new systems are introduced and the reporting of these systems will need to change to reflect the direction of the business and to support the new or evolved business processes. A good example of this is the ever-increasing trend to move to a mobile workforce. More and more organizations
>
> **[1:34](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/always-review-your-data?u=76281980&t=94)** are moving to a mobility-driven workplace allowing employees to work from anywhere including home offices. As people start to work from home more often, the location of a piece of [Hardware](../../Topics/Hardware.md) becomes less relevant over time and may become obsolete all together in some organizations. So asking the user what floor they are on or what desk the machine is currently sitting on is a waste of analysts' and users' time and any report referencing location is just as irrelevant. So it's important to review the reporting that you're receiving to verify that it is still fit for purpose and servicing a business need. I would recommend reviewing the data that is being collected and the usefulness of your reports annually at most. Any more than that and it's difficult to maintain a consistent baseline for monitoring trends over time. Also, whenever an edit to the pre-populated lists occurs, ensure that the introduction of the new value is not going to invalidate the baseline data that you've been basing KPIs or trend analysis on. A good way to ensure any changes are relevant is to return to this course and the key outcomes of each topic of this course before committing to any changes to your environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ITIL](../../Skills/Network%20and%20System%20Administration/ITIL.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** itil (1), csi (1), itsm (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Why Monitor Service Management Performance?

[↑ Back to Table of Contents](#table-of-contents)

#### [Why are you monitoring?](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/why-are-you-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/why-are-you-monitoring?u=76281980&t=0)** - [Instructor] The title of this section seems to be some sort of rhetorical question or complex metaphor, but far be it from me to try some witty banter or fancy [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) tricks. This is a genuine question. At first, the answer to this question might seem very obvious, with answers such as to monitor the performance of my staff, tools, or systems over time, to report to management or the board of directors, or maybe for something as simple as putting up pretty graphs on a dashboard so everyone in the business can see just how busy we are. Most times that people create reports, they are creating them out of interest or just to see what the data might look like. For many people when they start thinking about reporting, they just start thinking about graphs and how they can show management that everything is green across the board. These sorts of reports take time to generate and might be looked at once and never revisited, wasting both time and resources. Instead, it is important to sit down with all the key stakeholders in your business to ask them what their critical targets and goals are and write reports to set baselines, track progress, and predict future trends. The end goal of all of our reporting is to come up with actionable outcomes from the data we collect, the meaning of the information we derive, and the understanding of the knowledge we receive. In short, if I do X, I will be better at Y.
>
> **[1:39](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/why-are-you-monitoring?u=76281980&t=99)** So to start with, you need to ask yourself, "What do I want to know and why do I want to know it?" Your initial response to a question like this might be, "I want to know the percentage of calls resolved "at first contact so I can monitor it over time." However, this doesn't really answer the why do you want to know? So ask yourself, "Why is monitoring the percentage "of calls resoled at first contact important?" Well, the main reason for trying to increase the percentage of calls resolved at first contact is to reduce the impact on the end user and their ability to get back to work. So the reason why this is important might be that reducing the impact on the end user then increases the customer's satisfaction with your service. Or maybe the reason you are more focused on is the ability to get an end user back to work faster and therefore reducing the downtime and increasing productivity. Now if we ask the same question again, what do I want to know and why do I want to know it, we can answer it with a more targeted outcome, like I want to know the customer satisfaction so I can monitor the impact of changes made or I want to know the downtime of end users and the dollar value impact to the business so I can monitor the impact of changes made. Now, that is a much clearer target
>
> **[3:12](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/why-are-you-monitoring?u=76281980&t=192)** and is a solid and clear answer to the question of why are we monitoring?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Outcomes for monitoring](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/outcomes-for-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/outcomes-for-monitoring?u=76281980&t=0)** - [Instructor] Many customers I have worked with in the past create a lot of what seem to be good reports that contained pretty graphs that were then attached to a report that was forwarded to management once a week that management then took and completely ignored and filed in the same pile as last week's report, usually the wastepaper basket. Instead, we should be aiming provide management with clear business outcomes of what is occurring at the services level, how it is impacting the business and more importantly, to managers the effect on cost or profitability to the business. This cannot be achieved by simply showing basic counts of tickets over time or comparing last month's stats over this month's. In the last section, we came up with some clear ideas of what we might monitor and why we are monitoring it. To recap, these were I want to know the customer satisfaction so I can monitor the impact of changes made or I want to know the downtime of end users and the dollar value impact to the business so I can monitor the impact of a change. These kinds of reports look at the cause and effect of one or more metrics to show the trend of taking a specific action has on business outcomes and it allows management to see specific outcomes of a specific investment in either time or money. Now I've said business outcomes quite a lot in this section
>
> **[1:35](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/outcomes-for-monitoring?u=76281980&t=95)** but haven't really defined what these business outcomes might be or given you any ideas for you to get started. Depending on the part of the business we are trying to engage in discussion with, we will need to change the way we report, what we report and the level of detail. Some examples of business outcomes we might be trying to achieve for a business unit are customer satisfaction over time, has it increased or decreased? Agent turnover. Are we churning staff and having to retrain a lot of people? Cost per call or user or computer. Lost revenue due to end user downtime. Failure rate of a certain [Hardware](../../Topics/Hardware.md) or even end user support time for certain software. Each of these examples draw a direct correlation between a metric and a business outcome. For example, higher customer satisfaction after a change shows the success of an implementation and therefore positive feedback on money spent. Another example might be end user support time for certain software. This can really help identify what software you may have in your environment that users struggle with and where upgrade funds may be used best. Or post upgrade have these types of calls increased or decreased? In summary, when writing a report, focus on what the report is attempting to uncover and how the result can influence the business
>
> **[3:11](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/outcomes-for-monitoring?u=76281980&t=191)** in making decisions or providing the success or failure of a given project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Knowing what actions to take](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/knowing-what-actions-to-take?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/knowing-what-actions-to-take?u=76281980&t=0)** - [Instructor] In the previous videos in this section, we've looked at how important it is to be able to monitor information for a specific purpose and targeted outcomes from the results. We now need to turn this into action, and base business decisions on the results gathered. Regardless of the environment that you are monitoring, the type of customers, the volume of calls, or the industry that you support, the key to successfully improving any support environment is to take calculated and decisive action to improve service over time. This takes investment in developing and evolving standard operating procedures, and maybe even investment in [products](../../Skills/Software%20Development/Microsoft%20Products.md) and services to assist in the ability to achieve these outcomes. None of this is possible without buy-in from management and the business at large. Management needs to support the process and investment into the process, and therefor need to be included in the process from the start. Management of any business comes down to money. What will save money or what will make money. [ITIL](../../Skills/Network%20and%20System%20Administration/ITIL.md) guidance tells us "Continuous Improvement is one of the key pieces "to successfully grow and improve "a service management environment." When planning Continuous Improvement on any service desk, there are only ever three different levers that can be pulled. More staff on the frontline. More staff on the second level support. Or improved systems to reduce calls altogether.
>
> **[1:37](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/knowing-what-actions-to-take?u=76281980&t=97)** Adding more staff to the frontline of the service desk environment can be very effective in allowing analysts to spend more time resolving the issues, getting staff back to a functional state faster, and reducing load on second level staff. However, keeping a large workforce trained, motivated and on the same page can be expensive and difficult. Adding more staff to the second level support allows for the service desk to be transformed to more of a call center that takes and logs calls, but does not work on the problem or the resolution, but rather just passes them on to the correct support department. Again, this can be very effective as the second level analysts are usually specialists in the given field, and can often fix the issue faster. However, specialist staff are usually more expensive than generalists. It is also very hard to keep frontline staff motivated and engaged when all they're doing is logging calls. Improving systems or processes allows for end users to self service requests that are generic and can be automated, or allow frontline analysts to respond to requests in a known manner without any ambiguity or misunderstanding. Ultimately, any organization is attempting to refine processes so that first line analysts can resolve 80% or more of calls on first contact. But to do this, you may have to go through each of the three different approaches
>
> **[3:09](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/knowing-what-actions-to-take?u=76281980&t=189)** to get to your end goals. So set goals for your environment to achieve over time, and architect your reporting to garner support for the plans and to achieve these goals, monitor your progress to your goal, show results of the goal, and review plans for the next goal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [ITIL](../../Skills/Network%20and%20System%20Administration/ITIL.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** itil (1)
> **Speakers:** - [instructor] (1)


### 3. Determining Which Metrics to Monitor

[↑ Back to Table of Contents](#table-of-contents)

#### [Most common metrics](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/most-common-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/most-common-metrics?u=76281980&t=0)** - [Instructor] So far in this course, we've spoken a lot about why we should be monitoring, and the importance of the clean and accurate data that we need to make sure that we have actionable outcomes from our reporting. Now we get to where the rubber meets the road. Actually looking at specific metrics that we can report on, and what business-focused actions can come from the report. Here are my top five reports in reverse order. Actually, let's do them in one of those late night chat show style top 10s. If your organization offers a self-service catalog that provides end users a way to log a request for an IT service without needing to call a support member within business hours. It is vital to track the number of calls that were diverted from the support desk number so management are aware of the cost saving that has occurred, being able to prove to management that a certain percentage of calls have been able to be logged and resolved without requiring the support staff member to be present, can help in justifying additional funding to the service catalog and automation. As well as showing the effectiveness of freeing up endless time to spend more time resolving issues than doing mundane business process requests. When support analysts are aware that they are being tracked by metrics on their performance. Especially in a large support team, they often attempt to find ways to game the system,
>
> **[1:35](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/most-common-metrics?u=76281980&t=95)** the number one way of doing this is by closing calls before they are resolved to increase their closed at first contact numbers or their time to resolution [Statistics](../../Skills/Data%20Science/Statistics.md). By tracking the number of calls end users then call back for to reopen a call that was not resolved properly, it is possible to see when staff are gaming the system or have a genuine knowledge gap that needs to be addressed. Many IT managers want to know how long it takes to resolve calls and use these as a benchmark of the success or failure of a support team. However this is a false premise, the time to resolution for an account lockout or a virus infection are very different, and there is no clean and easy way to define between them. That said, knowing and tracking the outliers, for time to resolution is a great way of refining processes internally and identifying tickets that should be escalated to a [Problem Management](../../Skills/Network%20and%20System%20Administration/Problem%20Management.md) process to determine the root cause and ensure that the underlying process, app, or system is changed for the better. For example, if the average incident resolution time is two hours, and there is a certain incident that took two days, that incident might need to be reviewed as to the underlying root cause that took so long to find. As for tracking success or failure, of a service desk team we will look into a better way to track that in an upcoming topic.
>
> **[3:11](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/most-common-metrics?u=76281980&t=191)** The ability for an IT support staff to be able to receive, diagnose, and resolve issues is the cornerstone of what an IT service desk does. If it is taking support days, or weeks to resolve issues, there is a big problem and needs to be addressed in process as well as policy. Focusing on the number of calls that have been logged for action at a later date, will show you where the major efficiencies can be gained in an IT support team. The three main causes of a low first call resolution percentage are, lack of knowledge or skill of the support staff. Ratio of incoming calls to support staff, and third lack of tools or access to required systems. Training of IT support staff is vitally important and a step often left out of an organization's project plans when rolling out a new system. Keeping a close eye on first contact resolution numbers especially after the rollout of a new system or process can allow managers to get ahead of these issues before end users start to become overly negative about a new system and start to lose an increasingly large amount of productivity. Tracking first contact resolution per analyst can also identify individuals who may require more training in certain areas. The ratio of incoming calls to analysts
>
> **[4:46](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/most-common-metrics?u=76281980&t=286)** is always a balancing act. Too many staff and it's an additional cost to the business without any return. Not enough and the service desk turns into a call center, and staff don't have time to fault find or resolve calls before the next call arrives. The first contact resolution numbers can assist IT management to get the balance right and ensure IT support money is used wisely. The third item that prevents calls from being resolved at first contact is access to the required systems or tools for analysts to resolve the issue. Many times, analysts will receive a call and diagnose the issue but must escalate the issue as they do not have the rights to grant access or restart services. Analysts should have access to the tools required to do their job, if the systems are complex or the potential for a significant mistake if the process is not followed, then a simpler process should be found and made available to the analysts. For example, if the business determines that giving analysts access to [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) is too much of a risk, because analysts may be entering data incorrectly, or adding users to the wrong groups. Then an automation process could easily be implemented that would take the user's name and the group name, and then follow a process to add the user to a group using a service account and ensuring programatically, that each step of the process is followed.
>
> **[6:20](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/most-common-metrics?u=76281980&t=380)** The first contact resolution metric is very important to any IT support team and is a close second to our number one type of metric. But differs in one key area, it is inward focusing and not a focus on the end customer, and that's why it's more important to track type of calls. Breaking down the incidents logged by end users is exceptionally helpful in tracking the areas of issues that are costing the company time, money and productivity. Reporting of the area that issues are occurring in, is critical in being able to identify areas of the IT infrastructure and end user productivity that are being impacted the most. So IT management can focus resources and funds in the area that will have the most impact on the business. Remember, IT is an enabler for the business and like a mechanic without a spanner if a critical line of business app is often down, or is not performing at its best. Then the business is not making money, an example of this type of report is breaking down all incidents by type and by user. The trends to look out for are things like a select few of users who log above average numbers of calls. These users may require more training, or may have an intrinsic fault with their [Hardware](../../Topics/Hardware.md), network, account or applications that are preventing them
>
> **[7:55](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/most-common-metrics?u=76281980&t=475)** from doing their work effectively. Now if you've been in IT support industry for awhile, then you will have war stories about that user, who just always seems to have a problem and ties up IT for more time than any other user. Many IT analysts see these people as someone to avoid and therefore give them the least amount of time or try to avoid them altogether. That mentality should be reversed, these people are the ones who need the most attention and extra effort, to ensure they understand the issue, why it happened and how to avoid it in the future. By spending the extra time on these kinds of users, it is easy to spot issues in the systems, flaws in documentation and training, and any productivity enhancements that can improve everyone's experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Problem Management](../../Skills/Network%20and%20System%20Administration/Problem%20Management.md) (1), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Definitions:** is a  (5), is an  (1)
> **CLI Commands:** find (3), make (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [The role of service-level agreements](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/the-role-of-service-level-agreements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/the-role-of-service-level-agreements?u=76281980&t=0)** - [Instructor] Every time I work with a customer in regards to [IT Service Management](../../Skills/Network%20and%20System%20Administration/IT%20Service%20Management.md), the conversation eventually turns to SLAs. Regardless of the customer, I always find myself spending a lot of time explaining what the best use of SLAs are and how to use them well within their organization or why they should never use them. Service level agreements are a core piece of the [ITIL](../../Skills/Network%20and%20System%20Administration/ITIL.md) standards and are well and truly built into most ITSM [products](../../Skills/Software%20Development/Microsoft%20Products.md). In simple terms, SLAs are a measure of time that an organization attempts to meet to ensure service is delivered on time and to reduce customer downtime. Organizations either have hard and fast SLAs that they have contractually agreed to with their customers or at least have some idea of what timeframes they want to deliver services to their customers. An example might be for priority one incidents, someone from the IT department aims to respond to the customer within one hour and have the incident resolved within four hours. Another might be for service requests. For example, new user accounts will be received and completed within two working days. Having SLAs such as these allows service desk managers to ensure their services are delivered on time and service desk staff are responding to these calls within a set time period. Service desk managers can
>
> **[1:32](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/the-role-of-service-level-agreements?u=76281980&t=92)** then have a nice stoplight style report to placate upper management that the IT team is doing what they are supposed to be doing. For most organizations, this is all that SLAs provide. However, some organizations have contractual SLAs that they must comply with under penalty of a fine or some kind of repercussion. These are rare when the ITSM organizations are internal departments of a larger organization. However, in organizations that have some or all of their ITSM outsourced to a managed service provider, contractual SLAs are key. These organizations require this metric to limit cost and damage in the agreed to contract. However, most of us do not have these fixed contracts, and the SLAs that we use are defined and created based on our gut feel. Customers ask me what the best practices are and ask for my advice on what SLAs they should set up. The one question I always ask is what will you do if the SLA is breached? What are you as an organization going to do if a priority three incident that has a fix time of two weeks took four weeks to resolve? Most customers say, "Nothing, it's just a metric "to show how successful we're being." My response to that is why alert on something that we are not going to do anything about?
>
> **[3:07](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/the-role-of-service-level-agreements?u=76281980&t=187)** We should not be wasting time reporting on things that do not affect a business decision in an evidence-based way. More importantly, does hitting 100% of our SLAs mean that we're doing a good job? Are customers happy? SLAs don't tell us that. They just tell us that we resolved it within a given window. I've heard this called watermelon SLAs within the ITSM industry. "What is a watermelon SLA?" I hear you ask. Watermelon SLAs are green on the outside, but red on the inside because the SLA is met, but the customer is unhappy. If we do a terrible job quickly, is it better than doing a good job slowly? If we hit all of our SLA targets, but our customers hate the service we're delivering, then have we really succeeded? A much better approach, in my opinion, is net promoter scores. We'll take a look at the net promoter scores in the next session.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IT Service Management](../../Skills/Network%20and%20System%20Administration/IT%20Service%20Management.md) (1), [ITIL](../../Skills/Network%20and%20System%20Administration/ITIL.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** itsm (4), sla (4), itil (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Net Promoter Score](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/net-promoter-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/net-promoter-score?u=76281980&t=0)** - [Instructor] Net Promoter Score or NPS is a way to gauge the level of satisfaction of a service company's customers. It is a customer survey that consists of a single question. How likely is it that you would recommend our company, product, service to a friend or colleague? The scoring for this answer is most often based on a zero to 10 scale. Does this sound familiar? Ever had that question from a follow-up questionnaire or survey from your telco or internet service provider? Or maybe your gas or electricity company? I even got asked to fill in an answer to this today at the airport while ordering my pad Thai noodles. Here is a specific example. Have you ever used Airbnb? If you have, then you have received an email such as this. NPS is everywhere, even if you didn't know what it was called. So how is NPS calculated? In essence, it had a single question to get direct feedback from your customers on how satisfied they were from the interaction that they just had with you, the service provider. If the customer gives you a score of nine or 10, then they are categorized as a promoter of your service. These people are the ones that send the service desk that nice email to say thanks for the effort and how awesome so and so was in getting back to them and get them up and running quickly and without fuss. We all have our brag board from time to time with such emails.
>
> **[1:33](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/net-promoter-score?u=76281980&t=93)** These are the customers we don't worry about. If the customer gives you a score of seven or eight, then they're categorized as a passive consumer of your service. They got what they expected, no worries there. This is where most of us sit and where most of our customers will sit too. These people called or emailed looking for a solution and they got it. They moved on, they got their work done, nice. These are the customers we don't worry about. If a customer gives you a score of six or lower, then they are categorized as a detractor of your service. We have all met someone in this category and I feel very confident in saying we've all been in this category from time to time ourselves. Do you know the experience of getting terrible customer service from your phone, ISP, electricity or gas provider? Were you on the phone for endless hours listening to the same looped hold music telling us that your call is important to us? Yeah, right. When we get this level of service, do we just accept it and move on? Or do we tell our friends and coworkers all about how bad the service was from X company or how many hours we had to spend on hold or how useless they were at solving anything? These are the detractors that damage our brand. These are the customers we want to worry about.

> [!info]- Semantic Content
>
> **Env Vars:** nps (3), isp (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [How does Net Promoter Score work?](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/how-does-net-promoter-score-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/how-does-net-promoter-score-work?u=76281980&t=0)** - [Instructor] So how does this NPS thing work? Well, first off, it's direct feedback from our customers, not some arbitrary time that we have assigned to X priority classification of issues. Therefore, it is targeted and not just a random finger in the air on how we are actually doing. When a user provides a score back to the service desk, we collect this and calculate the score by subtracting the percentage of customers who are classified as detractors from the percentage of customers who are classified as promoters. Anyone classified as passive respondent counts towards the total number of respondents. This decreases the percentage of detractors and promoters and trends the score towards zero. An NPS that is positive, i.e., higher than zero, is felt to be good. And an NPS of greater than 50 is excellent. So why not just use SLAs? Many people might already have SLAs in place and be wondering, why not just continue using them? SLAs are good at telling us how long we take to do a thing, but not if we do it well or not. What's the point in hitting 99% of our SLA of fixing, say, priority two desktop issues in one hour or less, if our customers hate us and the issue is never really resolved? Ask yourself, as a customer, would you prefer to get an answer from the telephone company
>
> **[1:35](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/how-does-net-promoter-score-work?u=76281980&t=95)** in less than five minutes on the phone, but then have to call again a few days later to chase it up or fix another issue that was caused by a rush of effort in the first place, or would you prefer to call once, spend a reasonable amount of time on the call, and get it fixed once and for all without needing to chase and chase? NPS allows us to track customers' actual thoughts. NPS is a great way to measure customer feedback so you can improve or change your approach and measure its effectiveness on your customer satisfaction. NPS is so effective that it's been widely adopted across all manner of industries, across any area that deals with service management of customers. More than two-thirds of the Fortune 1000 companies use this metric. So take a look at NPS, and think about how you could use it to get a better idea of what's going on in your environment.

> [!info]- Semantic Content
>
> **Env Vars:** nps (7), sla (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Exploring Tools and Reporting

[↑ Back to Table of Contents](#table-of-contents)

#### [Common reporting tools](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/common-reporting-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/common-reporting-tools?u=76281980&t=0)** - [Instructor] Whenever we talk about reporting, we need to talk about the tools that we can use to compile and display these reports. There is a wide range of tools and applications that we can use to show reports, ranging from simple wizard driven to complex [SQL](../../Skills/Data%20Science/SQL.md) code-based tools that require advanced scripting knowledge to get the most out of. We will look at what I consider to be the best options for displaying reports, and some of their pros and cons. But before we do look at the tools, we need to look at what we are attempting to achieve from the tool, to start with. Like any tool, whether it be a reporting tool or woodworking tool, the old adage of the right tool for the right job is as true now as ever before, and certainly applies to our task when it comes to reporting ITSM metrics. There are many tools on the market and they range in capabilities, strengths, weaknesses, and price ranges. But at the end of the day, if the solution doesn't do what we need it to do, then it is no use for us and we have to start by determining what we want our reports to look like, how are we going to consume them, what is the audience of the reports, and how often are these reports going to be run or refreshed? Are you wanting your reports to be printable or included in a report to management? If so, these only need to be flat reports that do not need to be able
>
> **[1:33](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/common-reporting-tools?u=76281980&t=93)** to be drilled down into or expanded. Why spend time, effort, and money on developing complex reports, when a simple pie chart will suffice? Are you wanting reports to be on an active website that allows users to drill down to specific details, or to predict trends? If so, then you're going to need to spend a lot more time and effort in refining the topics and links between reports and making sure it is simple to navigate for the people who are using it. Are you wanting to display these reports on a dashboard on a live display? If so, then you need quick and easy visuals that show critical messages quickly and does not impact the operational database to ensure it does not impact the speed of the tools that the analysts use. This is usually a dedicated product that specializes in this sort of reporting, and you would need to have someone with the correct skills to ensure that you are not taxing the ITSM database too hard, as these reports can run every 30 seconds or so to ensure the latest data is shown. After all, there is no point in showing a warning after the fact. [Microsoft Excel](../../Skills/Data%20Science/Microsoft%20Excel.md). Yes, good old Microsoft Excel. I know this seems really basic, but it is the simplest way to get into some complex reports as most people know how to use [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) and create graphs as they need. Some of the pros is the fact that it is inexpensive and very simple to learn.
>
> **[3:04](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/common-reporting-tools?u=76281980&t=184)** Some of the cons are there is lots of manual [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md), and or heavy impact on [Databases](../../Skills/Software%20Development/Databases.md). [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) SQL. [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) Reporting Services, or SSRS, is the most common reporting tool that ITSM solutions provide, and there are a lot of people in the industry that can use it to generate some good-looking and efficient reports. Having said that, there is a specific set of skills you need to retrieve the data you need, and to ensure that it is not impacting on your database too much. Some of the pros, it is inexpensive, and lots of people with the skills for it are in the industry. It can generate most types of reports for all audiences. Some of the cons is that it's not easy to learn and can be frustrating to edit if you do not have the required skills. Microsoft's [Power BI](../../Skills/Data%20Science/Microsoft%20Power%20BI.md) is a tool that is often included in user's [Office](../../Skills/Web%20Development/Microsoft%20Office.md) 365 subscription, or many organizations have it as part of their licensing agreement. It is a very powerful reporting tool that can even start to forecast trends, and even bring Microsoft Machine Learning and [Artificial Intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) into your reporting to find issues well ahead of them impacting on the business. Some of the pros are that it's super powerful in predicting trends and has great visual reports. Some of the cons are that is can be difficult to learn and some of the more advanced tools require Cloud access and quite a lot of expertise.
>
> **[4:37](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/common-reporting-tools?u=76281980&t=277)** What you have already. Whatever reporting tool ships with your ITSM solution, this might seem like a cheap cop-out for the best choice of reporting tools, but it is usually the best solution for IT support teams, as the tools are supported by the ITSM product vendor and usually come with a wide range of reports to get you 80% of the way to where you need to be very quickly. Most demo reports can then be edited and tweaked to fit your requirements. Some of the pros are it's usually included in the cost of your ITSM solution, it's supported by your vendor, and usually has a wide range of pre-canned reports. Some of the cons are, depending on the tool, the skills required and reporting types can be limiting. So, just to recap, make sure you know what type of reporting you are after, and review the reporting tool to make sure it is fit for use in your environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Microsoft Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (2), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1)
> **Env Vars:** itsm (6), sql (3), ssrs (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (2), find (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Visibility of reporting](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/visibility-of-reporting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/visibility-of-reporting?u=76281980&t=0)** - [Instructor] Whenever I work with customers to assist them with their tracking of metrics and creation of reports, I start by having a conversation about who is going to be seeing these reports. I'd say about 90% of the customers that I ask this of, the answer is the same. They only ever think the IT support manager is going to look at the reports. What people often misunderstand is the impact of IT and the performance of the IT infrastructure on the overall performance of the entire organization. Whether you work in mining, education, defense, or manufacturing, if the IT infrastructure is offline or fails, then the work undertaken across the business is impacted and, in some cases, will bring the entire business to a grinding halt. By focusing on communicating the IT performance across the organization, people from all corners of the business can see, at a glance, that the quality and success of the IT solutions provided is, first and foremost, in the minds of the support team and they are doing everything in their power to reduce the impact of IT issues. However, this can be a double-edged sword as, if the reports are showing a downward-turning quality, then the business can see that also and may bring more pressure to bear on the IT team. However, this can also be a benefit, as the issue that is causing the poor performance might require buy in from the other segments of the business and if they understand the importance of proposed solutions,
>
> **[1:35](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/visibility-of-reporting?u=76281980&t=95)** then they are more likely to support project funding, etc. Internally, the more obvious and up-to-date the key metrics are, the more engaged support staff are in ensuring the key metrics are met or improved on from day to day or even hour to hour. A large display within the key areas of the support team showing a rotating set of easy-to-read reports that are showing the key metrics that the IT support manager wants to keep front-of-mind can be a very powerful tool to keep staff engaged and on target with what's important. But remember, tracking metrics and setting targets or goals on those metrics are very different. When you start to set targets for your staff on set metrics that they must achieve, it is human nature to find shortcuts or game the system to get the result at all costs. This is actually called Goodhart's Law and it simply states that, "When a measure becomes a target, "it ceases to be a good measure." No matter how dedicated or professional our staff are, setting heavy targets on our metrics will drive them to find shortcuts. While customer satisfaction surveys, like the Net Promoter Score, can alleviate this effect to some degree, it is worth keeping in mind, and set the targets, goals, punishments, and rewards appropriately.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### [Baseline reporting](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/baseline-reporting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/baseline-reporting?u=76281980&t=0)** - [Instructor] Baseline reporting is critical to be able to measure the impact of change over time. When a new process, tool or change to the business is implemented, we need an empirical way to measure its effects on the [IT Service Management](../../Skills/Network%20and%20System%20Administration/IT%20Service%20Management.md) process. Impact from changes can be felt in many different ways. Service level agreements, success and failure rate, customer satisfaction or NPS, resolution times, escalation rates, incident rate per system or changes in issues within any given business system, analyst happiness, accuracy of data or accuracy of the process, system down times, et cetera. If we don't know where we are today, how will we know if a change we make to improve has been successful or not? We might make a change thinking it will help us. And anecdotally, the change might make service analysts happier, but the resolution rates go down and the customer satisfaction is negatively impacted. If we don't have clear metrics to measure against, then we have no way to determine if it was a good thing or a bad thing. What sort of metrics should you baseline? Some good baselines to have are SLAs, customer satisfaction, call rates, and business services impact. So how often should you baseline? The baseline of metrics is always influx and changes dramatically over time depending on the frequency of changes
>
> **[1:33](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/baseline-reporting?u=76281980&t=93)** and even the time of year. For example, it is often expected to have an uptake in forgotten passwords after a public holiday, over the Christmas and New Year period, and even on a daily basis first thing in the morning and after lunch. So it is important to know these trends and account for them when reporting, a shift away from the baseline. When the IT department embarks on a new project to roll out a new or replacement technology, it is important to secure a baseline on the number, length and complexity of calls relating to that technology over a given period of time. With enough warning, some simple reporting can be set up to give a steady known state before the project so that success can be tracked during and after the deployment. If pre-warning of the project is not given, it still may be possible, but maybe not as accurate to report on the metrics back in time due to details on existing support tickets. So there is no set duration between baselines other than they should be relevant to the metric you are trying to track over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IT Service Management](../../Skills/Network%20and%20System%20Administration/IT%20Service%20Management.md) (1)
> **CLI Commands:** make (3)
> **Warnings:** warning (2)
> **Env Vars:** nps (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-service-desk-monitoring-and-metrics-fundamentals/next-steps?u=76281980&t=0)** - [Instructor] Thank you for joining for this course. If you would like to learn more about some of the topics raised in this course, there are many resources available for you via the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Library of Courses as well as [IT Service Management](../../Skills/Network%20and%20System%20Administration/IT%20Service%20Management.md) Forums in your local area. I also post articles on better service management processes from time to time on my blog, SystemCenterNoise.[Wordpress.com](https://Wordpress.com). I also post [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) System Center notes from the field and ways to improve delivery of services to end customers. If you would like to get in contact with me, you can reach me via my LinkedIn profile. Thank you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [IT Service Management](../../Skills/Network%20and%20System%20Administration/IT%20Service%20Management.md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **URLs:** [wordpress.com](https://wordpress.com) (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Brett Moffett](../../Instructors/DevOps/Brett%20Moffett.md)

## Skills Covered

- IT Service Management

## Path Context

### In [Atlassian IT Service Management (ITSM) Professional Certificate](../../Paths/DevOps/Professional%20Certificates/Atlassian%20IT%20Service%20Management%20(ITSM)%20Professional%20Certificate.md)
← [IT Service Management Foundations- Change Management](IT%20Service%20Management%20Foundations-%20Change%20Management.md) | **4 of 4**

## Part of

- [Atlassian IT Service Management (ITSM) Professional Certificate](../../Paths/DevOps/Professional%20Certificates/Atlassian%20IT%20Service%20Management%20(ITSM)%20Professional%20Certificate.md)

## Appears In

- [Atlassian IT Service Management (ITSM) Professional Certificate](../../Paths/DevOps/Professional%20Certificates/Atlassian%20IT%20Service%20Management%20(ITSM)%20Professional%20Certificate.md)

## Related Courses

_Courses sharing skills:_

- [IT Service Desk- Customer Service Fundamentals](../IT%20Help%20Desk/IT%20Service%20Desk-%20Customer%20Service%20Fundamentals.md) — IT Service Management
- [Jira Service Management- Administration](Jira%20Service%20Management-%20Administration.md) — IT Service Management
- [It Service Desk Service Management](It%20Service%20Desk%20Service%20Management.md) — IT Service Management
- [IT Service Management Foundations- Capacity and Availability Management](../Data%20Science/IT%20Service%20Management%20Foundations-%20Capacity%20and%20Availability%20Management.md) — IT Service Management
- [IT Service Management Foundations- Problem Management](IT%20Service%20Management%20Foundations-%20Problem%20Management.md) — IT Service Management

---

[↑ Back to top](#)