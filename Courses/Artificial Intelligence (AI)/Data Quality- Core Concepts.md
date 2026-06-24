---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: data-quality-core-concepts
url: "https://www.linkedin.com/learning/data-quality-core-concepts"
duration_minutes: 88
duration: 1h 28m
level: Advanced
updated: 12/20/2024
learners: 4409
skills:
  - Data Management
  - Data Quality
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQE-F9EAjv69uQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732063834035?e=2147483647&amp;v=beta&amp;t=anjsXxzSWBJJpjN3pZPxwdes26CrhC3murEUQsr_TGE"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)'
prev_courses:
  - '[ETL in Python and SQL](../Data%20Science/ETL%20in%20Python%20and%20SQL.md)'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Processing","position":7,"total":7,"prev":"ETL in Python and SQL","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/data-management
  - skill/data-quality
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Data%20Quality-%20Core%20Concepts.md)

![Data Quality: Core Concepts](https://media.licdn.com/dms/image/v2/D4D0DAQE-F9EAjv69uQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732063834035?e=2147483647&amp;v=beta&amp;t=anjsXxzSWBJJpjN3pZPxwdes26CrhC3murEUQsr_TGE)

# Data Quality: Core Concepts

> This theoretical course is designed for data professionals, stakeholders at data organizations, data leadership, and professionals interested in data quality. Mark Freeman—a data engineer and tech lead—presents a high-level overview of data quality, a measure of how well data meets a company's expectations for accuracy, completeness, consistency, reliability, and validity. In addition to course co

> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts) | 1h 28m | Advanced | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The importance of data quality](#the-importance-of-data-quality)
- [**1. Data Quality Fundamentals**](#1-data-quality-fundamentals) (16 videos)
  - [Data quality introduction](#data-quality-introduction)
  - [Impact of poor data quality](#impact-of-poor-data-quality)
  - [Defining data quality](#defining-data-quality)
  - [Data quality dimensions: Intro](#data-quality-dimensions-intro)
  - [DQ dimensions: Validity, completeness, consistency](#dq-dimensions-validity-completeness-consistency)
  - [DQ dimensions: Integrity, timeliness, currency](#dq-dimensions-integrity-timeliness-currency)
  - [DQ dimensions: Reasonableness, uniqueness, accuracy](#dq-dimensions-reasonableness-uniqueness-accuracy)
  - [Common data quality assessment frameworks](#common-data-quality-assessment-frameworks)
  - [Connecting data quality to business outcomes: Intro](#connecting-data-quality-to-business-outcomes-intro)
  - [Thought exercise: Ecommerce](#thought-exercise-ecommerce)
  - [Thought exercise: Understand the business model](#thought-exercise-understand-the-business-model)
  - [Thought exercise: Map your data lifecycle](#thought-exercise-map-your-data-lifecycle)
  - [Thought exercise: Identify your stakeholders](#thought-exercise-identify-your-stakeholders)
  - [Thought exercise: Evaluate how stakeholders drive revenue](#thought-exercise-evaluate-how-stakeholders-drive-revenue)
  - [Thought exercise: Assess how DQ impacts revenue and risk](#thought-exercise-assess-how-dq-impacts-revenue-and-risk)
  - [Thought exercise: Synthesize research and communicate ROI](#thought-exercise-synthesize-research-and-communicate-roi)
- [**2. Data Quality Across the Data Lifecycle**](#2-data-quality-across-the-data-lifecycle) (13 videos)
  - [Data lifecycle introduction](#data-lifecycle-introduction)
  - [Data lifecycle overview](#data-lifecycle-overview)
  - [Data lifecycle stakeholders: Business](#data-lifecycle-stakeholders-business)
  - [Data lifecycle stakeholders: Engineers](#data-lifecycle-stakeholders-engineers)
  - [Data lifecycle stakeholders: Data](#data-lifecycle-stakeholders-data)
  - [DQ across the lifecycle: Business strategy](#dq-across-the-lifecycle-business-strategy)
  - [DQ across the lifecycle: Data creation](#dq-across-the-lifecycle-data-creation)
  - [DQ across the lifecycle: Data acquisition](#dq-across-the-lifecycle-data-acquisition)
  - [DQ across the lifecycle: Transactional databases](#dq-across-the-lifecycle-transactional-databases)
  - [DQ across the lifecycle: ETL/ELT pipelines](#dq-across-the-lifecycle-etlelt-pipelines)
  - [DQ across the lifecycle: Analytical databases](#dq-across-the-lifecycle-analytical-databases)
  - [DQ across the lifecycle: Data analytics and data products](#dq-across-the-lifecycle-data-analytics-and-data-products)
  - [DQ across the lifecycle: Data/insights consumption](#dq-across-the-lifecycle-datainsights-consumption)
- [**3. Common Data Quality Issues and How to Measure Them**](#3-common-data-quality-issues-and-how-to-measure-them) (8 videos)
  - [Introduction to issues and measurements](#introduction-to-issues-and-measurements)
  - [Root cause analysis: RCA](#root-cause-analysis-rca)
  - [Null rates](#null-rates)
  - [Data freshness and timeliness](#data-freshness-and-timeliness)
  - [Schema changes](#schema-changes)
  - [Data transformation bugs](#data-transformation-bugs)
  - [Data drift](#data-drift)
  - [Measuring data quality](#measuring-data-quality)
- [**4. Data Quality Tooling**](#4-data-quality-tooling) (6 videos)
  - [Introduction to tooling](#introduction-to-tooling)
  - [Data dictionaries](#data-dictionaries)
  - [Data catalogs](#data-catalogs)
  - [Data lineage](#data-lineage)
  - [Data monitoring and observability](#data-monitoring-and-observability)
  - [Data contracts](#data-contracts)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The importance of data quality](https://www.linkedin.com/learning/data-quality-core-concepts/the-importance-of-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/the-importance-of-data-quality?u=76281980&t=0)** - We've been hearing for years that data's the new oil, and lately we've been hearing AI this and AI that, but me and you know an open secret. Come a little bit closer. We know that none of that will work without [Data Quality](../../Skills/Data%20Science/Data%20Quality.md). I'm Mark Freeman, I'm a data scientist turned data engineer, and I'm obsessed with data quality. For me, it is the key driver for success of any data initiative. In this course, you'll learn about how to define data quality, what data quality looks like along the data lifecycle, the various stakeholders and tools you'll see along the way, and how to connect it back to business strategy. Now, if you're non-technical, this is still a great course for you 'cause it'll expose you to all the concepts. And if you are technical, it'll teach you how to translate your knowledge back to the business. My goal with this course is to provide you a high level overview and be a springboard for further learning. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (4)
> **Speakers:** - we (1)


### 1. Data Quality Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [Data quality introduction](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-introdution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-introdution?u=76281980&t=0)** - In this chapter, we'll define [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), go over the nine dimensions of data quality, and finally, go through a thought exercise, where we take a business strategy objective and tie it to a data quality initiative.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (3)
> **Speakers:** - in (1)

#### [Impact of poor data quality](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=0)** - [Instructor] For this video, we're going to be talking about the impact of poor [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) and make it real for you as to why it's important to account for this. I'm going to go over three specific use cases to really highlight, at best-case scenario, maybe get a few numbers wrong, people have the wrong idea about the business, worst-case scenario, which we're going to be highlighting here, the data is wrong where it has a regulatory impact, or it impacts peoples' lives in a negative way. So let's jump right into this. For the first case study, we're going to be talking in the healthcare space, and specifically, the Epic Sepsis Model, which was a electronic health record company who utilized their massive EHR dataset to create a model to predict sepsis, with the goal of saying, "Hey, if we can predict this really life-threatening thing, we'll reduce the amount of patients impacted by it." What ended up happening was the opposite. It predicted worse than the standard of care what doctors are currently doing, and it over-alerted issues for patients to the point where people weren't even paying attention to the model. This all came to light with researchers for "JAMA," which is one of the top medical publishers, highlighted how the model was actually wrong. And they had this whole case blow up on them. And what they actually found out was, for the electronic health records, they trained their ML model on all the data globally, but when they put it into hospitals at a local level, the data from a data quality perspective did not match the population, and therefore,
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=94)** were giving wrong results. Epic was eventually able to rectify the issue by updating the hospitals, say, "You need to train on your own specific patient data." But because of all the news and also being in "JAMA," they took a huge reputational hit and people were more wary to use the model. In a second case, we have finance. And this is pretty common. Banks typically are paying fines for regulatory things because it's such a complex system to handle. One recent one is actually Citibank, which was fined $136 million for failing to fix longstanding data issues. And the Federal Reserve Board actually called out how, you know, they were supposed to make sufficient progress in remediating these problems for data quality management, and they failed to do so. And this is in addition to another $400 million they were fined back in 2020, which kicked this all off. And we have, actually, in the documents, the SEC files that you can actually look to see what's happening here. And then finally, this is actually one of my favorite kind of use cases to call out, because this highlights how insidious data quality can be. It can be hidden to you, one of the most critical aspects of your business, and it can set you up for failure in the long term. And it's a slow burn here. So in this case, we had Bird, which is a ridesharing group for scooters. I was in San Francisco when this was happening. There were Bird scooters everywhere, right? Well, they were a big kind of venture-backed company. They raised a lot of money. And they actually had to go back and say,
>
> **[3:06](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=186)** "For the past two years, we have been reporting our revenue wrong." And they actually had to go to the SEC again to say, "All of our [Financial Data](../../Skills/Software%20Development/Financial%20Data.md) that we reported for the past two years cannot be trusted." What ended up happening from a data quality perspective, they had wallets that were preloaded. And they were able to do rides. But if the wallets were empty or has insufficient funds, they did not account for that. So they were overestimating their revenue. Again, it was a business logic thing that seemed very minor, but it built up over years.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (5), [Financial Data](../../Skills/Software%20Development/Financial%20Data.md) (1)
> **Env Vars:** jama (2), sec (2), ehr (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Defining data quality](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=0)** - [Mark] In the previous video, we talked about the impact of [Data Quality](../../Skills/Data%20Science/Data%20Quality.md). And now that we know why it's so important to account for, what exactly is data quality? And this is actually a really hard thing to define. If you think about it, data quality's been around for centuries. Since people recorded data, there has been data quality. And there's been decades from the beginning of computers and all that research in the seventies, people thinking about data quality. It's a huge ask to come up with a single term. And actually, I wrote a book on data quality, and I spent months going through literature trying to figure out a correct way to define it. And so I'm going to provide you three different definitions that I like, and then from there go into what to consider for data quality in defining it. And so these are the three kind of pieces of literature that I'm going to be pulling from. "Data Quality Fundamentals" by Barr Moses, Lior Gavish, and Molly Vorwerck. Another book, "Data Contracts" by Chad Sanderson and myself. And then finally, this is a book that a lot of people reference for their data quality, which is the "DAMA-DMBOK" book, the second edition from DAMA International. For "Data Quality Fundamentals," they define data quality as, "For the purposes of the book, we define data quality as the health of data any stage in its lifecycle. Data quality can be impacted at any stage of the data pipeline, before ingestion, in production, and even during analysis." I really like this definition because it's really approachable for anyone who's maybe not as technical. And it highlights how there is a lifecycle of data
>
> **[1:35](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=95)** at different stages, and that data quality is really dependent on where you're at. One key thing to note is that these authors are really into data observability, which is how can you observe how data's changing across your data lifecycle. And that informs this type of definition. For this book on data contracts, which I wrote, we define it as, "Data quality as a organization's ability to understand the degree of correctness of its data assets, and the trade-offs of operationalizing such data at various degrees of correctness throughout the data life cycle, as it pertains to being fit for use by the data consumer." This is quite a mouthful, and I was trying to capture a lot when I created this definition. And a big piece of this is, and we'll go into this later, Strong and Wang is one of the kind of early researchers for data quality, and they really highlight fit for use for the data consumer. And that really stuck with me, and so I wanted to think through. Data quality is all about contextualization for the business and understanding what is the degree of technical debt that you have, and what limits your ability to do things with this data. And so accounting for, there are going to be various levels of how good a data asset is, how much the business understands it, and how much the business is willing to invest in it to make sure it is of good quality and accounting for those levers. For further context, data contracts are about prevention rather than observing of data. And so that's why this understanding of degree of correctness and the trade-off is so important. Finally, is we have the DAMA definition.
>
> **[3:08](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=188)** So, "Data quality can be defined as the degree to which dimensions of data quality meet the requirements. This implies that requirements should be formulated for each relevant dimension. A much shorter definition for quality is data is fit for purpose." Again, you see the fit for purpose, fit for use, that's calling back to that main researcher, Strong and Wang. But something to really highlight here is that the DAMA book has a set of dimensions which we'll cover in the later set of videos in this course. And once you see that, by going through those dimensions, it gives it a more categorical way to check off and figure out what's part of your data quality. I would highlight that the DAMA book is typically what a lot of people reference when they're thinking about their data strategy at first. One key thing I want to highlight for you is that I gave you three different definitions, but you need to define data quality for your business. And one thing I really want to highlight is that data quality does not equal perfect data. I made that mistake early in my data career when I was trying to build these data quality initiatives where I was like, "Here's all these best practices. This is why we should do it." And when I present it to software engineers of the business, they're like, "This is a nice to have. We don't understand why we need to put in all this extra effort just for a cleaner report." Right? And so it's all about contextualizing to your business. And in a later video, we'll also cover how we actually do that. And so adhering to data quality is a trade-off between effort and accuracy. And the trade-off an organization or individual is willing to make is determined by their constraints, their risk profile, and the perceived value.
>
> **[4:41](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=281)** It's extra effort to do data quality, and so people have to be incentivized to actually care and engage in it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (25)
> **Env Vars:** dama (5), dmbok (1)
> **Definitions:** is a  (4), defined as (1)
> **CLI Commands:** make (2)
> **Cross-References:** previous video (1), we talked about (1)
> **Speakers:** - [mark] (1)

#### [Data quality dimensions: Intro](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-dimensions-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-dimensions-intro?u=76281980&t=0)** - [Instructor] In previous videos, I hinted at there's these [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) dimensions that DAMA talk about. We're now going to be going over them in the next few videos at a time where I'll provide kind of a high level example of each one, as well as examples from my experience in my career, seeing these data quality issues pop up. DAMA defines these data quality dimensions as validity, completeness, consistency, integrity, timeliness, currency, reasonableness, uniqueness, and accuracy. Now, there are a whole bunch of other different aspects of data quality that are not included in this. There's so many different directions you can go, so many different ways you can define it. I like the DAMA ones 'cause it starts as a good foundation to start off with before you start exploring more. And this book is what people many times reference for when they're thinking about [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) strategy or data quality strategy. In the next set of videos, we'll go over three at a time, where you can get a slight taste of what each one looks like and what to expect when thinking about data quality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (6), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1)
> **Env Vars:** dama (3)
> **Cross-References:** in the next (2)
> **Speakers:** - [instructor] (1)

#### [DQ dimensions: Validity, completeness, consistency](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=0)** - [Instructor] The first [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) dimension we have is validity. And this is essentially, how well does your data align with the expected business logic. And so, for example, we have phone numbers here. A good phone number here, includes the country code, the area code, and the seven-digit number, while a bad one includes just the seven-digit number. And now this is all dependent on the business logic, itself. And so, for example, if you are a small local business that only does business with people in the near vicinity of where your location is, maybe the seven digit number is okay because everyone you're calling is even the same area code. But what if you're an international company that has phone numbers across the entire world? Your business logic needs are going to be much different, where you're going to need that area code, you're going to need that country code, as well, to account for those things. Again, it's all tied to the specific needs of your business. For the second data quality dimension, we have completeness. And you may be asking, wait, validity and completeness seem very similar, and I would say you're correct (chuckles). But one key difference is that for the validity one, it's tied to the business logic, while the completeness is actually you need the full thing. So, I have the address here for the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) headquarters, we have the street address, the city, the state, and the area code for that. For the bad one, we just have the street address, and that could be almost anywhere in the US. And so, it doesn't give you a full, complete view of what the actual address is. And then finally, for the third dimension,
>
> **[1:33](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=93)** we have consistency. Does it match the pattern of expected values? So, for the good one, we have one, two, three, four, five, six, seven, but for a bad one, we're switching between letters and numbers. So, one, two, and instead of three and four, we have C, D, and then going back to five, six, seven. So, what does this look like in the real world? When I was a data scientist in the healthcare space, I used to do electronic health record analysis for ophthalmology, so, both eyes. So, one of the key things I looked at was, where was the doctor located? Was their address correct? Was their phone number correct and fully there? Were the medical codes fully there as well. For consistency, we think about ophthalmology and eyes, you have a left eye and a right eye, and that's picked up in the data. When I was going through it, I had to make sure it was coded properly as either one for left or two for right. But sometimes in the notes for the doctors, it'll put L or R or spell out left and right. And so, a big part of it is making that consistency go all the way through.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [DQ dimensions: Integrity, timeliness, currency](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=0)** - [Instructor] The next set of dimensions we have is integrity, timeliness, and currency. For integrity, it's essentially how plausible is the data point. Does it make sense? Does it match reality? And so for the good example, I have Paris, France, city and country. And the bad example is New York City, France, which does not exist. For the next one, we have timeliness. And timeliness and currency are very similar, but a specific nuance. For timeliness, in regards to, for the business case, how timely is it? So example is that you'll have like a SLA for when a data refresh is expected. And so, from time data's created to time being replicated somewhere else, we expect that to happen in five days. So timeliness would be anything at five days before. Bad example is say, for instance, the data's late and the refresh is 15 days past SLA. So that goes into timeliness. A nuance here with currency is that it's more so rather than the business use case is actually how current is the data. So say, for instance, you're looking at dataset and today, it's 01/01 and it was last updated 01/01, same day. But for a bad use case, say for instance, you're expecting this data to refresh every five days. Thinking about timeliness, you check that today is 01/01, but it was updated almost three months ago. That will be a bad case of currency. An example from my career is when I used to work in health insurance and I would manage the data files for eligibility
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=94)** for who had insurance plan and from what dates from when. So for example, for integrity, I would have someone where they're on an employer health insurance plan and their start date for the health insurance plan were months before they started as an employee at a company. That would be an integrity issue. For timeliness, for health insurance, there are maybe some regulatory aspects. We're saying, Hey, the data would take maybe three days to go from an employer to us and another three days to go to the insurance, right? And if you don't hear anything in six days, then something bad happened and there needs to be a check for this. And then for a currency is how fresh is the update. So for example, health insurance, many times by the employer, there will be some people where the currency was, we get a new data file every single day and if we don't get one every single day, something bad happened and we need a check into it. Or, maybe it's an employer where like they send it once a month. And so again, it's tied to the business use case and also the specific use case for a particular data asset.

> [!info]- Semantic Content
>
> **Analogies:** for instance (3), for example (2)
> **Env Vars:** sla (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [DQ dimensions: Reasonableness, uniqueness, accuracy](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=0)** - [Instructor] The final three dimensions we have are reasonableness, uniqueness, and accuracy. Reasonableness, again, is tied to business logic and expected values. Is it reasonable for a value to exist? For the good example, have count distinct thinking about [SQL](../../Skills/Data%20Science/SQL.md) of months. There's only 12 months in a year, so I would expect only distinct 12 month names. A bad example would be if you saw 14. A great example of this is when you do maybe shorthand for months and long form for months in the same dataset. Hence why you're getting more things. And that goes back to the consistency aspect of it. The next one is uniqueness. A good example is that say for instance, I took an entire table and I said, Hey, gimme all the distinct values in this column and it equals a total rows. That informs me that every value is unique. A bad example is if I did that same exercise, but maybe there was less distinct values than the total rows, which informs me that there are some duplicates. This is probably one of the most important [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) dimensions to me personally, because unique IDs are the cornerstone of merging various tables throughout different systems. And so making sure they're distinct is critical for data quality. The final dimension is accuracy, and that essentially refers to how the degree of correctness for a data asset. And so for this example, a good set of data is age 19, and the category is adult. A bad instance is age seven,
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=94)** but category is adult, probably growing up too fast. Here's the thing though, is it can get a little tricky and that's where kind of the accuracy component goes into. What if they're 17 and 364 days? Maybe tomorrow they're adult, right? Maybe it's 25 is how you're considering adult because that's when the brain develops. Again, it's so tied to the business use case. Thinking about this, in my career, I used to work as a data scientist as well in the HR analytics space, and so I would get files of employees and their management level, and so reasonableness for me would look like, okay, how many employees are under a manager? If they are a low level manager and they have a thousand employees, maybe something's wrong here, but if they're like a VP or a director, maybe that's more plausible or they're a large company. Uniqueness, how many employees are in a business? I want to make sure that I don't over count or under count them. And then finally, for accuracy, thinking about the levels, I would constantly be checking, alright, this person has this title in a company which would be different for various companies and therefore we believe is this level of seniority, which is a huge aspect of HR analytics. So that's a small example of what these dimensions look like in the real world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Definitions:** refers to (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Common data quality assessment frameworks](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=0)** - [Instructor] In this video, we're going to be going over the common [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) assessment frameworks that you can choose from to implement within your organization. And forewarned, there are a lot. This is only a fraction of them available. And this table comes from a really great article, which I'll pull up right now, called "An Overview of Data Quality Frameworks" by Corinna Cichy and Stefan Rass. And this is probably one of the best articles that I came across because it gives an industry overview of the various frameworks that there are when they came out and how various companies are using them. I've included a link to this article that you can read yourself that I highly recommend you checking out. If you find this a little overwhelming looking at them, I agree with you. There's a whole bunch of different directions. And again, it's really tied to what the business needs. In future slides, I will go over how to best choose an assessment for you. One thing I do want to call out, and again, pulling from the DAMA book, these four frameworks. First, Diane Strong and Richard Wang. They're one of my favorite researchers in the data quality space and people that I often reference and draw from. In addition, there's Thomas Redmond, Larry English, and the DAMA UK framework. The big reason why I want to highlight these individuals is because they have some of the leading research and kind of foundational research to reference for this.
>
> **[1:32](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=92)** As part of the course, I've included a sheet of resources, and I've called out seminal work from all of them that I highly recommend you check out. But then the question becomes how do you choose a framework? And I argue that "the best framework is the one that you can get your respective organization to adopt." And there's various considerations you can go through for that. For example, do you have executive sponsorship? Is their current tech and data debt? How is data quality connected driving revenue or mitigating risks? A great example is, like, regulatory fines. Operational requirements, and what's the timeline? And so all these different frameworks have different ways of assessing, coming up with a strategy, getting buy-in, getting agreements. They're frameworks to help you out. Find the one that's going to cause the least amount of friction for you to get across the line, while also balancing the rigor to get the data quality results you want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (5)
> **CLI Commands:** find (2)
> **Env Vars:** dama (2)
> **Cross-References:** coming up (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Connecting data quality to business outcomes: Intro](https://www.linkedin.com/learning/data-quality-core-concepts/connecting-data-quality-to-business-outcomes-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/connecting-data-quality-to-business-outcomes-intro?u=76281980&t=0)** - [Instructor] In the next set of videos, we're going to be discussing how to connect [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) to your business outcomes. Now, this is a section that I'm really excited to talk about because the past two years, I've been really focused on bringing a new data quality solution to market, and that's required me to have countless meetings with data leaders to understand their data stack, their data strategy, how data quality fits into it and the problems they have, and then creating solutions for them to help get buy-in of their executive team to put budget towards data quality. I've learned so much the past couple years, and I'm excited to share my lessons learned in the next few slides. Now, at a high level, this is what we see in six steps. The first step is that you want to understand the business model of your organization. This is the foundation of what drives decisions in organizations and thus why data quality prioritize. From there, you want to map what the data lifecycle is that enables that business model. Next, within that lifecycle, you want to identify the key stakeholders that you need to engage with. For the fourth step, you're going to work with those stakeholders to evaluate how they drive revenue or mitigate risk. With that information, you're able to assess how data quality impacts revenue and risk, and then finally, you'll synthesize this research and communicate the ROI to the wider organization and leadership.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (6)
> **Cross-References:** in the next (2)
> **Env Vars:** roi (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Thought exercise: Ecommerce](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-e-commerce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-e-commerce?u=76281980&t=0)** - [Instructor] To help you make sense of how to connect [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) to business outcomes, I've created this thought exercise of a fictional ecommerce company where you are the data leader at Sell Things Inc., where it was just announced in a recent company-wide meeting that a strategic objective is to increase vendor retention by 10%. You believe that improving data quality would be a major driver in hitting this company objective. You begin researching and building a proposal for a data quality initiative. With this framing, we're now going to move forward with each step that I presented in the previous video to give you a taste of how to really connect data quality to business outcomes and to get buy-in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (4)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Thought exercise: Understand the business model](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-understand-the-business-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-understand-the-business-model?u=76281980&t=0)** - [Instructor] The first step is to understand your business model. For the stock exercise, Sell Things Inc.'s business model aligns with a typical [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) organization, where they provide a marketplace for third-party vendors to sell items and consumers to purchase those items. Its revenue comes from two specific areas. First, platform fees from vendors so, that way, they can join the marketplace. And then, second, a percentage of any sale made on the platform goes to Sell Things Inc. In summary, the more vendors and items from the vendors, the stronger the marketplace. Now, take a second and think how [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) can tie to this before moving on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Thought exercise: Map your data lifecycle](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980&t=0)** - [Instructor] The second step is to map your data lifecycle. Now, if you're not super technical, don't worry, we won't dive too deep into this. It's just more so to show you a high level of how data represents the business model. So for Sell Things Inc, their goal is to have a marketplace that they can sell items on and that vendors can be on. In this architecture diagram, you have your website, which is the [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) platform, and then you have various [Microservices](../../Skills/Software%20Development/Microservices.md). So you have the shopping cart, you have search, you have the homepage. Those have a set events that go through a message broker that's replicated into a data lake, and that data lake serves as a source where all this data can be combined, such as third party data from Salesforce, which includes vendor information. That data is then funneled into ML models to give predictions that are funneled back into search and the homepage to give predictions. So if you've ever been on any marketplace and they give recommended items, that's typically ML model in the background. The data in the data lake is then replicated in a data warehouse where typical analytics are used by the business to make product decisions or business decisions. Now, don't worry, you don't need to fully understand this, but the main thing I want to get across is that there is a chain of events and various teams across this chain of events that will result in the stakeholders, the data lifecycle, and how are things impacted. In the next slide, we'll go over the various stakeholders we have for this thought exercise, and then we'll also map them back to this diagram.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Thought exercise: Identify your stakeholders](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-identify-your-stakeholders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-identify-your-stakeholders?u=76281980&t=0)** - [Instructor] The third step is to identify your key stakeholders within the data lifecycle. For our thought exercise, the four key teams that we have are the software engineers on the carts team, [Data Science](../../Topics/Data%20Science.md) and ML engineers on the recommendations team, UX on the shopping workflows team, and then customer success for the vendor relations team. Now, this may not make too much sense just quite yet, but in the next slide, I've taken back that diagram we had in the previous video and imposed these teams on there to give you an idea of where they fit on the data lifecycle. So for the UX team who manage workflows, they're on the website, they're a part of the search and homepage [Microservices](../../Skills/Software%20Development/Microservices.md), and on the other side they have analytics where they have product analytics to make decisions such as AB testing. For the carts team, the software engineers are in the shopping cart microservice. For the machine learning engineers and data scientists, they live within the ML model area, pulling data from the data lake. And then finally, the business users for the vendor relations team is going to be in Salesforce where they're keeping track of their engagements with their vendors. In the next step, we'll see how these various teams within the data lifecycle drive revenue or mitigate risk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **Cross-References:** in the next (2), previous video (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Thought exercise: Evaluate how stakeholders drive revenue](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-evaluate-how-stakeholders-drives-revenue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-evaluate-how-stakeholders-drives-revenue?u=76281980&t=0)** - [Instructor] In the fourth step, we're going to evaluate how our stakeholders drive revenue or mitigate risks. These are the main levers of getting buy-in from leadership to put money towards [Data Quality](../../Skills/Data%20Science/Data%20Quality.md). And so the carts team, they manage the code related to carts and the checkout. For the recommendations team, they manage the ML model that recommends items. For the shopping workflows team, they manage customer shopping experience. And the vendor relations team, they manage vendors when things go wrong. Now, this is a high level of what they do, but in the next step, we'll connect how they're related to each other and how they depend on each other, and how it impacts data quality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Thought exercise: Assess how DQ impacts revenue and risk](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-assess-how-dq-impacts-revenue-and-risk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-assess-how-dq-impacts-revenue-and-risk?u=76281980&t=0)** - [Instructor] In the fifth step, we assess how [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) impacts revenue and risk for these teams. So for the carts team, they focus on logging within the carts and it's essential for machine learning and product analytics. The recommendations team takes this data where increase ML accuracy increases sales 'cause they're recommending better [products](../../Skills/Software%20Development/Microsoft%20Products.md) For the shopping workflows team, reduce UX friction also increases sales, and they depend heavily on the logging from the carts team. And then finally, for the vendor relations team, increase sales results, increase vendor use. If vendors are selling more products to customers, they're going to be happy and stay on the platform. Finally, we're going to tie this all together in the next video to synthesize that as a proposal for leadership to invest into the data quality initiative.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Thought exercise: Synthesize research and communicate ROI](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=0)** - [Instructor] In the sixth and final step, you're going to synthesize your research and communicate the ROI to the wider business, and specifically the executive team. For this thought exercise, you went to the product analytics and found this key piece of information. The main driver of vendor retention is average weekly sales, which is impacted by first, a reduction in abandoned carts, and second, the quality of product recommendations to users. One key caveat though is that both of these are powered by the logging data from the carts team, which was establish well before the recommendations and workflows teams. In other words, the data did not account for this business use case and now is impacting the [Data Quality](../../Skills/Data%20Science/Data%20Quality.md). Thus, as a leader, you propose investment into the carts team to initiate a refactor to improve their logging reliability, which is another way of saying, improving their data quality. This would improve vendor retention because this improved data quality and logging would improve the ML models, therefore the recommendations. And improve the product analytics, and therefore the product experience. Finally, this is all kind of theoretical. You need to put numbers to it for executives teams to pay attention. Now, this is completely made up. This is back of the napkin math, but it'll give you a sense of how to put these numbers to a story. So for example, say for instance, we have 10,000 vendors with a average yearly sales of 100k per vendor. That means that on the platform they're selling about
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=94)** a billion dollars worth of [products](../../Skills/Software%20Development/Microsoft%20Products.md). Remember that for the business model, they get a sales fee for everything sold on the platform. Well, it's 3%. So 3% of 1 billion is $30 million in yearly revenue. Now remember, the strategic goal is that they want to prevent vendor churn by 10%. Another way to say that is they want to prevent losing $3 million. And finally, this is how you get to the number to how much you should invest in your data quality initiative. Ideally, you could say, we propose that we can save 3 million, so therefore we should get 3 million for the data quality initiative. Unfortunately, it does not work that way. The executive team is looking for ROI in the high hundreds of percents. So I set it to 400%, and so a 400% ROI on 3 million is 600k. So therefore, can you improve the logging of a specific team that impacts the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the data quality for 600k? And if you are successful, could it improve vendor churn by 10%? If yes, you have a very compelling argument for the executive team to invest in your initiative. Now, this is all just high-level napkin math, but it's like a puzzle. You get all these pieces together and you see how they all fit to make everyone happy to engage in data quality. And if you notice, the end result didn't even call out data quality specifically, it was the business impact and relaying that to data quality that gets the buy-in. That completes chapter one, and in the next chapter, we're going to be going over
>
> **[3:07](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=187)** stakeholders and trolling to give you a better understanding of the data landscape that you'll find within your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (9), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** roi (3)
> **Analogies:** for example (1), for instance (1), it's like (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** in other words (1), means that (1)
> **Cross-References:** in the next (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)


### 2. Data Quality Across the Data Lifecycle

[↑ Back to Table of Contents](#table-of-contents)

#### [Data lifecycle introduction](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-introduction?u=76281980&t=0)** - In this chapter, we're going to learn about the data life cycle and the various stakeholders you'll encounter across it. Within this life cycle, we'll cover how business strategy is turned into [Data Acquisition](../../Skills/Software%20Development/Data%20Acquisition.md), how data acquisition is stored within [Databases](../../Skills/Software%20Development/Databases.md), how it's used for analytics and R&D, and how it's finally served to the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the business. The data life cycle covering this chapter will serve as the foundation for the rest of the course, and it'll be something we'll be referencing throughout the various videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Acquisition](../../Skills/Software%20Development/Data%20Acquisition.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Speakers:** - in (1)

#### [Data lifecycle overview](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=0)** - [Instructor] In the last chapters, we talked heavily about the data lifecycle and its stakeholders. In this chapter, we're going to dive deep into actually who they are and where they sit within the data lifecycle. And at a high level, this is the data lifecycle. Now, typically, you'll see this as a architecture diagram of various data stacks, but to make this more accessible, I've abstracted that to the main kind of categories. Now, it may be different for various different companies, but this is the general pattern I've seen. So you start off with the business strategy. What is the point of having the data? Why do we need data? Why are we investing so much into it? Next is data creation. Whether you're collecting data from a survey, maybe you have login within your product, or you're acquiring the data from a broker or a third party to ingest into your database. From there, it goes into a transactional database. These [Databases](../../Skills/Software%20Development/Databases.md) are intended to move really quick to pull information and reference. So say, for instance, you're on a website. The reason why it's able to pull up information in subseconds is because it's structured for a transactional database. Then you typically have replication through ETL or ELT pipelines that go into a analytical database. The analytical database is similar to the transactional database as it has the same data, but it's structured in a different way to allow aggregates and informed decision making, and it separates the transactions that are critical for the product or main service from analytics that are heavy workflows on memory.
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=94)** Next, analytical databases are often restructured into what people may call data marts, data warehouse. There's various names for it. From those data marts, those are like clean, processed, high-quality data. They do analytics and R&D, such as like machine learning models. From there, once they have a good idea of what to do, what they want to build, they actually make full-on data [products](../../Skills/Software%20Development/Microsoft%20Products.md). So this would be ML models that make it into the product. It can be maybe a dashboard, or it can be reports they give out to their customers. And then finally, that data is consumed, either by internal business stakeholders or by external customers. In the next few slides, we're going to go through each one of these stakeholders and talk more in depth of how they work within the data lifecycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** make (3)
> **Analogies:** for instance (1), similar to (1), such as (1)
> **Env Vars:** etl (1), elt (1)
> **Cross-References:** in the last (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### [Data lifecycle stakeholders: Business](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-business?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-business?u=76281980&t=0)** - [Instructor] The first set of individuals that we want to call out in the data lifecycle are business stakeholders. They're going to be typically at the end, after the data's all processed, after the data's formatted in a nice way in a dashboard, and they're often very removed from the various steps in the lifecycle to make the data accessible to them. They're going to be focused heavily on operationalizing the data, making insights off of it in decisions, and they're often the first people to bring up [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) issues if you don't have checks in place, which is not the best feeling as a data person. In addition, there's a specific type of business stakeholder that's important, which are the executives. This stakeholder also consumes the data at the end, but they're the ones defining the business strategy that inform the business logic that's represented within the data, as well as what goals that you want to achieve and therefore what you need align your data quality to. And then finally, for these type of business users, we have external customers and users. So this may be a business user who's reviewing the data, maybe in your product or they're receiving a report, or there may not even be a business person, but an actual user of the product, such as a business to consumer product. So say for instance, you're on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), you get analytics on your posts or other various things within the platform, that is an example of you being a consumer of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Analogies:** such as (1), for instance (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Data lifecycle stakeholders: Engineers](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=0)** - [Instructor] The next set of stakeholders we have within the data lifecycle are the various types of engineers. Now, the first set of engineers I want to talk about are typically front end, back end, [DevOps](../../Topics/DevOps.md), or maybe they're full stack. And these are the people that are often creating the systems that generate the data or store the data in the transactional database. (inhales) And further down, they often are involved in the data processes except when it's turned into a data product and then it's pulled back into the product and referenced in the transactional database. These individuals are key to [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), because they're the ones creating the data, but they're also really hard to bring into data quality because their constraints aren't related to data, it's related to software. Engineers that do focus on data though are data engineers and analytics engineers. And they're unique, they're growing across the entire data life cycle, because they're focused on the movement and structuring of data throughout the data life cycle. Now, they do touch everything across this, but they're not going to be going as deep as, say, for instance, a software engineer for certain [Databases](../../Skills/Software%20Development/Databases.md) or a ML engineer for various ML models. But if data's moving from point A to point B, or is being transformed for a specific process, a data engineer or analytics engineer is most likely involved in the business. One key thing to note is that if you're low on your data maturity cycle, essentially data engineers, analytic engineers are a specialized role, and software engineers may be doing this role
>
> **[1:33](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=93)** in the beginning. And then finally, we have ML/AI engineers. These are the people who are taking the R&D models from machine learning and putting it into production and creating the operations to make it available to people outside the business, within the product. These are a very hot role, right now, with [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md), and there's so much work that goes beyond just creating the AI model, such as making sure it stays up, making sure there's quality issues resolved, making sure that it stays safe. These are what these ML engineers and AI engineers are focused on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (2), [DevOps](../../Topics/DevOps.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **Analogies:** for instance (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Data lifecycle stakeholders: Data](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-data?u=76281980&t=0)** - [Instructor] Finally, we have the data stakeholders. One of the first hires for any data org is often a data analyst and where they sit is they take the curated data, often found in an analytical database, and turn it into insights, such as analytics or [Dashboards](../../Skills/Data%20Science/Dashboards.md). Then we have data scientists who have a very similar role, but with a focus on developing data [products](../../Skills/Software%20Development/Microsoft%20Products.md). Again, they use the curated data from marts or warehouses where it may be, they do analytics and R&D, such as building machine learning models, and then they help with other engineers to put it into production. One key difference between analysts and data scientists is analysts are often looking back at what happened to the business, while scientists are often looking forward to what they can do with the data. In the next set of slides, we'll move away from stakeholders and start going to the tooling used to support [Data Quality](../../Skills/Data%20Science/Data%20Quality.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [DQ across the lifecycle: Business strategy](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=0)** - [Instructor] Now that we've talked about the data lifecycle and the stakeholders within it, we can start diving into the [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) across the lifecycle. Again, we're going to take this lifecycle and go through it one by one. The first one being business strategy. There's three key aspects. Value creation, risk mitigation, and metrics planning. Now, this is a oversimplification, but these are the core aspects that I think are tied to data quality. For value creation, how can the organization leverage data to create a competitive advantage? This is important because positioning data quality as a key enabler of a value creation initiative is critical for getting funding for that data quality initiative. And you can think of this as a carrot within the org. Now, the quote, unquote, "stick" of data quality is risk mitigation. What are the risks to the business for not handling data properly or being negatively impacted by poor data quality? So for example, maybe there's a regulatory aspect where if you don't report the data, you'll get fined. Or if you don't handle the data securely, you'll get fined as well. For example, banks have to deal with this all the time as well as healthcare providers. Another aspect of this, maybe you have poor data quality, which leads to poor business decisions, right? Positioning data quality as a key enabler of a risk mitigation initiative is critical for persuading changes to the culture and processes. So value creation, tied to getting funding,
>
> **[1:37](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=97)** risk mitigation, getting people to change their habits 'cause they're scared of losing money. And then finally, metrics planning. All this strategy by the executives is being distilled into key metrics, and I think this quote from Peter Drucker summarizes it best. "What gets measured gets managed."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (8)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [DQ across the lifecycle: Data creation](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=0)** - [Instructor] The next stage in the data lifecycle is data creation and acquisition. For this video, we're going to focus only on the data creation side, and there's four key aspects: survey design, capture workflows with people, capture workflows of product, and then finally self-generated data. First, we have survey design, which is one of the original [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) methods that we've had and that I feel most non-technical people are familiar with. "The questions you ask and the way in which you structure the survey greatly impact the data you collect" and what you're able to do afterwards. Another consideration is that "self-reported data is often not the most reliable, so you have to put in extra efforts to mitigate issues" to prevent bad data collection. So an example would be like if someone in a multiple choice just chose A for everything. Maybe you did something wrong in your server design to push someone to do that. Examples of server design include intake [Forms](../../Skills/Web%20Development/Forms.md), customer feedback, various things where you're getting information and the individual is putting the data in themselves. Another aspect of data capture is workflows with people. So "sometimes it's not realistic to have data captured through technology," and instead it has to be captured via processes. I think a great example of this is the US census where they have people go to houses, bring the surveys with them, ask questions,
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=94)** and fill it out for them. "Similar to survey design, there's an extra component of training staff and having the reliability interviewer," also known as fidelity. On the other side with technology, we have capture workflows for product, and this is "anywhere in the product where a user provides information, such as free text, selection," whatever it may be. I think a great example of this are like onboarding workflows. It's "similar to survey design, but there's an extra component of UX impacting how data's collected." For example, if you've ever been on a website and it's been a horrible experience for you, you are often just struggling to put your information in, and you may just give up. Or you may just put in random information just to get by. Finally, we have self-generated data, and this is "captured data that is generated via an organization's software product or its processes." So machine telemetry, logging on a website, or even the documents generated by the business. And for [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), the "business has the most control over this data and therefore its data quality."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (2), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Analogies:** similar to (2), such as (1), for example (1)
> **UI Navigation:** go to (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [DQ across the lifecycle: Data acquisition](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=0)** - [Instructor] The other side of generating data is the acquisition of data from third parties. From this, you have third-party data, APIs, and also Secure File Transfer Protocols. For third-party data, it's any data that is not generated from an organization's respective [products](../../Skills/Software%20Development/Microsoft%20Products.md), processes or workflows. Examples of this could be data brokers, data files from a client or accessing data from an API. The challenge with this for [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) is that most organizations lack control of these data sources except when they may have a contractual agreement such as the SLAs or a requirement for a data quality level. One of the best examples of this are APIs. APIs are essentially data that is accessible programmatically, whether it's an internal service from an organization or a third-party source. Data sourced from APIs are typically pretty stable as they provide a standardized way to access data and they most likely include documentation. But data quality issues arise when there are API changes. There's been numerous times where I've been working with the API as a data engineer and it works at one time and maybe six months later, they make a major change to the API, the schema changes and now my pipeline's broken, or it can be on the other side where the API is just not well-managed and there's very little documentation, so, I have to make a lot of assumptions. While the challenges with this as stated is that you don't control it.
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=94)** Another form of third-party data is Secure File Transfer Protocols or SFTP. Now, this one is a little bit older, but I argue that you'll find this in many traditional businesses. And what essentially happens is if you need to send sensitive data from one party to another, SFTP is often used, especially when it's business to business. An example, would be like a HR department sending their health insurance information of new employees. Another way is (inhales) if you are sending sensitive information regarding contracts from one business to another. Since it's files, many times [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) files (inhales), people and process are likely the only ways you can really enforce data quality for this, and that's much harder to do and that gets into the cultural aspect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (4), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **Env Vars:** api (5), sftp (2)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [DQ across the lifecycle: Transactional databases](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=0)** - [Instructor] Next in the data lifecycle are transactional [Databases](../../Skills/Software%20Development/Databases.md). And the four key areas we want to cover is logging, asset compliance, [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md), and [NoSQL](../../Skills/Software%20Development/NoSQL.md) databases. I argue that the foundation of any transactional database is the logs themselves, which are append-only sequence of records that are ordered by time, and they're used to publish and subscribe data to other replicas, so other databases, and the logs enable for consistency across these various replicas, so that way you can have consistent data across different databases. Here is a mock example of how logging could be used. Back when I was a data scientist, I would do product analytics, tracing the logs of people going through specific workflows of a product and seeing where they drop off. On the right, you have an example of [JSON](../../Skills/Web%20Development/JSON.md), where you can see the timestamp, the event, and the various attributes for that log. Now to summarize, logs at a basic level are an event plus time. They're essential for organizing data within a database and keeping them in sync, and often the foundation for self-generated data, especially for software-related [products](../../Skills/Software%20Development/Microsoft%20Products.md). And from a [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) standpoint, these logs are the individual data points that you're going to be looking to understand the quality of your data, and for backfills to rebuild historical data. Another key component, speaking of logs, is ACID compliance, which it stands for atomicity, consistency, isolation, and durability. Now, this goes beyond the point of this course,
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=94)** so I highly recommend checking out the resource I provided for this. But for the purpose of data quality, ACID compliance insures for transactional databases, that the data is written in a consistent manner that would be the same across all functions. This is especially helpful for relational databases. And to give you an example, I have a entity relationship diagram, which is essentially a diagram that shows how a relational database is connected with each other for the various tables. For this example is the [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) website. One thing I want to highlight here is that the role of having a relational database is to ensure that each row is unique, and it can be connected via primary keys and foreign keys, also known as referential integrity. Another key thing to be aware of are NoSQL databases. And essentially with them, they have no enforced schema and they allow nesting for JSON storage. The thing about data quality is that they're easy to put data into, but very painful to analyze. Now, you may be asking, well then, if this is hard for data quality, why would you use this? Well, it's perfect for transactional databases because as a document store, it groups entities together to make it easy to pull information out of it and present it to the user. So in this example, we have [John](../../Glossary/Tool/John%20the%20Ripper.md) Doe, and we have their order information, what supplier they came from, and all the other orders they have in the payments.
>
> **[3:08](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=188)** If you're in a relational database, going back here, you can see that you would have to do all these various joins to get that same information, compared to the NoSQL database, it's already in this one group of data that you pull and bring forward into the product. The reason why transactional databases are so important for data quality is often, this is the foundational data that is replicated throughout the entire business and what's going to be forming the basis of the standard of data within your business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (8), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (5), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (3), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **Env Vars:** json (2), acid (2)
> **Definitions:** is a  (1), stands for (1), known as (1)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [DQ across the lifecycle: ETL/ELT pipelines](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=0)** - [Instructor] Next in the data lifecycle are ETL and ELT pipelines. And if you've never seen these acronyms before, it stands for Extract, Transform, and Load with ELT being the nuance that the transformation happens at the last step. Now, these are typically for data replication from a transactional database to analytical database, but it could be anywhere where data's moving. The two key ones I want to talk about are batch and streaming. Now, batch is most likely the one you're going to see out in the wild. It's the most common, easiest to do. And one thing to highlight from a [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) perspective is that it's impacted heavily by the data quality dimension of timeliness. When is the expected time that the data will refresh for your dashboard or for your database? Most of my data quality issues when a business stakeholder came to me would be, hey, the data is stale. I don't know what's currently happening. When's the last time the data was updated? This is why batch jobs are so important and making sure that they are happening at an expected interval. More importantly, from a data quality perspective is that when batch jobs are late, it typically highlights that data pipeline is broken, and a data pipeline is broken often due to a data quality issue. The other type of data pipeline is the streaming data pipeline, and this is often used for transactions where there's a high volume and velocity of data. A great example of this are [IoT](../../Glossary/Concept/IoT.md) sensors, where doing a batch would just be way too hard and way too expensive to do. Another use case is for analytics,
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=94)** we need a low-latency use case, and the data needs to be consistent across multiple domains. Example is is change data capture. Now past the scope of this course, but one thing I want to highlight here is that streaming data revolves around a immutable log, which has pros and cons. The pros is that the data that is on this log can be read by multiple systems, so it'll be consistent across; the con is is data quality issues get into that immutable log, it is very, very painful to fix. This is a big reason why you see many teams focusing on batch because it's just a simpler process to deal with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (6), [IoT](../../Glossary/Concept/IoT.md) (1)
> **Env Vars:** elt (2), etl (1)
> **Definitions:** stands for (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [DQ across the lifecycle: Analytical databases](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=0)** - [Instructor] The next stage in a data lifecycle are analytical [Databases](../../Skills/Software%20Development/Databases.md), and I'm going to group data marts because they're often just a subset of the analytical database. Three key analytical databases I want to highlight are data warehouses, [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md), and data lakehouses. A data warehouse is rooted in a time where databases had to be on-prem and were long and expensive initiatives. Heavy, heavy emphasis on [Data Modeling](../../Skills/Data%20Science/Data%20Modeling.md) with Inmon and Kimball being the two main approaches. And if you remember I said data marts in a data lifecycle. That's calling out to how Inmon approaches data warehouses. They're a little less common today, unfortunately, but following their methods greatly reduce [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) issues because so much time upfront is spent on modeling and understanding the data and the business use case for it. The reason why they're not as popular is that cloud data warehouses came about, and [Cloud Computing](../../Topics/Cloud%20Computing.md) made it very easy to spin up these analytical databases. And one of the popular ones was data lakes. And the pros and cons are a double-edged sword when it comes to data lakes. For data quality, you can put almost anything into a data lake, which makes it very flexible and great for a first analytical database when you're trying to figure out exactly what your data has value in. The con is you could put almost anything into a data lake, and that's why they're often joked as data swamps. Another pro is it's easy to put data into it, but it's also a con because anyone can just throw data over the fence and put it in to the data lake.
>
> **[1:35](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=95)** Many times software engineers were just, hey, I'll just throw it into the data lake. The data team will figure it out later. And then finally, it can have a high volume of data, which can be huge because it's cheap to store within the data lake, but again, the con is now you have a high volume of data, and when we need to find something, it's like a needle in a haystack. Finally, we have data lakehouses. Those are relatively new architecture emerging for analytical databases. And essentially, what they did was, hey, data warehouses, they have some really great qualities, but it's too expensive and too long to implement. Data lakes, they're very cheap and simple to use, but they're too flexible. We're getting data swamps. We're going to take the best of both and combine it, so we have the flexibility of data lakes, but with the structure of data modeling from data warehouses. Data quality issues arise still here, but it's mainly from either bad data entering, such as schema changes or the bugs with the data transformations when they're modeling it to have those data marks at the end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (5), [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md) (5), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (3), [Data Modeling](../../Skills/Data%20Science/Data%20Modeling.md) (2), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **Analogies:** it's like (1), such as (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [DQ across the lifecycle: Data analytics and data products](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=0)** - [Instructor] After you have your data curated analytical database, you're able to build analytics and data [products](../../Skills/Software%20Development/Microsoft%20Products.md) off of them. Three key areas are inference and [Statistics](../../Skills/Data%20Science/Statistics.md), embedded analytics, and machine learning. For inference to statistics, ideally, [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) doesn't impact the results of statistics, because you spend so much time doing proper [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md). Where data quality does impact is the feasibility of conducting statistics or time it takes to clean the data. So if you've ever been asked to do a certain report, but you have to go back to 'em and say, hey, the data quality is not good enough to actually give you a solid answer. That's the example. And to give you a real world example from my career, when I was a data scientist in healthcare, we used to do all these huge [Big Data Analytics](../../Skills/Data%20Science/Big%20Data%20Analytics.md) for pharmaceutical companies. And one day our data broker gave us a report saying that, hey, the data we gave you the past three months was wrong. Here's the correct file. We had to go back to all of our analytical studies and rerun the statistics with the new data to make sure they're still valid. So that's an example of data quality for inference and statistics. Another form of a data product are embedded analytics. And there's similar statistics and visualization, but they're embedded within the product with the purpose is being seen by a user. They bring analytics back into the transactional database, and that increases the complexity of the data lifecycle, and therefore, more opportunities for data quality issues to arise. Another real-world example from me being a data scientist is that used to work in HR tech,
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=94)** and I created the algorithm of product usage for our HR users. I was updating the algorithm one day and one weird thing happened. I deployed the change to the product, but it turns out that it required deployment in two separate [Databases](../../Skills/Software%20Development/Databases.md) and only deployed it to one. What ultimately happened was a huge freak out because all the numbers came really wrong, and every customer came emailing us saying, what's wrong? What happened to our users? Why is no one using it? It turns out that I just didn't properly update the lifecycle for the product, and when I made that correction, it was fixed immediately. But again, I want to highlight is that when you move analytics back into the transactional database to serve the product, increases the complexity, and more opportunities for things to go wrong. And then finally, I think this one's probably the most well known or flashy, is machine learning. And one thing that really brought me towards focusing on data quality was Andrew Ing talking about model-centric versus data-centric AI. Where you can spend so much time [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) a model for AI, and you can get actually better results much quicker if instead of focusing on the model, you clean the data. One key thing for data quality here is that it's heavily influenced by data drift, which we'll cover in later videos. But essentially it's shifts in how the data is structured, the distribution, the way it's captured can definitely impact machine learning and the results it gives. And it's similar to embedded analytics
>
> **[3:07](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=187)** that increases the complexity, 'cause you have to serve the ML model's predictions back into the transactional database and into the user's surface area. One thing to highlight here is that machine learning happens at scale. And so data quality issues can quickly amplify with machine learning models, because now you have wrong data shifting entire model, and then shifting the results from major components of your product. So that's why data quality is very important for machine learning. And many times there's instances where it costs companies hundreds of thousands or millions of dollars if they get it wrong.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (9), [Statistics](../../Skills/Data%20Science/Statistics.md) (7), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md) (1), [Big Data Analytics](../../Skills/Data%20Science/Big%20Data%20Analytics.md) (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [DQ across the lifecycle: Data/insights consumption](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=0)** - [Instructor] Finally, in the data lifecycle, we have consumption of the data itself and insights. Three key areas I want to highlight is reporting, [Dashboards](../../Skills/Data%20Science/Dashboards.md), and data brokers. Reporting, I see three areas when it comes to [Data Quality](../../Skills/Data%20Science/Data%20Quality.md). You have low stakes where it's internal reporting within the business. If you get it wrong, maybe you lose trust, but it's something you can rebuild. And oftentimes there's a lot of checks and balances to make sure you don't make a very bad decision. The next stage is medium stakes. It's external reporting to a customer. Now, if you get it wrong and they notice, sometimes you may get a fee, maybe they don't want to purchase from you again, or they may require you to go run the process again, which will cost you money. Finally, we have the high-stakes reporting. And this is when you're reporting to a regulatory body. Remember the nightmare scenarios I told you of data quality from chapter one? This is exactly it. If we report the wrong data to a regulatory body, you're probably going to receive a very big fine, and you may end up on the news. Very high stakes when it comes to reporting. Next is we have dashboards, and dashboards are where business stakeholders are often the most exposed to data and therefore data-quality issues. Many times, this is where data quality issues are first noticed as an individual, because the business stakeholders are looking at it with their own domain knowledge, and so they know the fitness of use for the business; and they can see quickly if it's matching their expectations or not. One key trap that I would really look out for though is if they don't have a trust in the data organization,
>
> **[1:37](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=97)** it can be the correct data, but they have their own perceived notions where data should be. And so it may not be a data-quality issue, it can be a data-culture issue. It's a big reason why having data quality checks is very powerful, because then you can go back and say, "We believe the data is of high quality. The numbers you're seeing are just actually that bad." Finally, we have data brokers. And these are organizations that collect data and package it to sell to other parties. So if you've ever had various ads sent to you, it's because the whole internet's collecting all your data, is being sold to other people. Often it's contractually tied to a certain SLA of deliverability and a level of quality, where if they do not meet that standard, they will be fined or breach of contract. On the other side of you receiving data from data broker, as I mentioned before, you may not have much control of the data quality beyond the contract itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (5), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (3)
> **CLI Commands:** make (2), go run (1)
> **Env Vars:** sla (1)
> **Speakers:** - [instructor] (1)


### 3. Common Data Quality Issues and How to Measure Them

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to issues and measurements](https://www.linkedin.com/learning/data-quality-core-concepts/introduction-to-issues-and-measurements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/introduction-to-issues-and-measurements?u=76281980&t=0)** - In this chapter, we'll provide an overview of what root cause analysis looks like for [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) and the various symptoms you'll see when exploring these problems. Finally, we'll learn how to measure these data quality issues and tie it back to the business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (2)
> **Speakers:** - in (1)

#### [Root cause analysis: RCA](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980&t=0)** - [Instructor] Now that we know the various stages of the data life cycle and the stakeholders within them, we can start exploring how we can find [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) issues within it. Another way of describing this is called root cause analysis, or RCA. And this is my approach for RCA. It's the first step is the stakeholder surface the issue. From there, you triage the issue, you do the scoping and the requirements to solve it, you try replicating the data quality problem, you then go and find the problem data set, and you profile the data. You investigate the [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) that are downstream the analytical [Databases](../../Skills/Software%20Development/Databases.md). If warranted, then you go upstream into the transactional database to understand what's going wrong. And then finally, you consult the various technical stakeholders within the data lifecycle impacted. Now these steps are based on an article called "The Data Quality Resolution Process," which I wrote last year, which is a very long article that goes into much depth about this. I've included a link to this, which I highly recommend checking out if you want to learn more. It includes code examples and data examples as well. From there, these are the five top signals of data quality issues I've seen when doing root cause analysis. The first one being null rates, the second being data freshness and timeliness issues, the third being schema changes, the fourth being [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) bugs, and then finally, data drift.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (4), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) (1)
> **CLI Commands:** find (2)
> **Env Vars:** rca (2)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Null rates](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=0)** - [Instructor] I argue that one of the most important [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) signals to look for are null rates. Now, nulls are extremely important because they represent missingness due to data loss or non-inner joins where there's no matching values. And another caveat is intentionally stating that the value is not present. Nulls are often the first attribute I check when doing root cause analysis for data quality issues. And so I'll pull up [SQL](../../Skills/Data%20Science/SQL.md), I'll go to a database and I'll check for null values and group by the dates. Now, there's various type of nulls. There are true nulls, so all nulls are not bad. A lack of information is a data point in itself. Examples of this could be a demographic's not applicable in a survey. Maybe there's drop off in the product funnel, or people intentionally identifying where joins don't match. So say for instance, I was doing analysis where I wanted to see if a user visited and when did they drop off for a certain date. I would merge the information on the various event points and see where the nulls were, and that'll be useful information itself. Another form of nulls is nulls from [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) issues. So your survey may be designed poorly or not administered well, leading to drop off or missing responses, or maybe logging in the software may time out or a system may crash, resulting in permanent loss of data, another huge signal for data quality issues. Another form of nulls is due for transformations.
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=94)** So transformations of data requires assumptions about the business logic, and you may misinterpret assumptions or have unintentional bugs, which can result in wrong data, which can include nulls. So drop off of data values. And then finally, I think this is one of the more common data quality issues when it comes to nulls, is from upstream schema changes. So transformations in analytical database make assumptions on expectations of the upstream data schema. And it's not uncommon for a column just to be dropped or deprecated for a new column without any communication because the upstream engineers have no idea that analytics is using it, they're focused on the product. So best case scenario when that happens is that it'll cause a pipeline to loudly break. So remember when the ETL pipeline goes down, that'll be example. The worst case scenario and the most painful ones I've experienced is when it creates a silent failure, which propagates nulls throughout the database, replicate it in the analytical database, and ultimately in my dashboard with my stakeholders saying, Hey, what's wrong with the data?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1)
> **Env Vars:** sql (1), etl (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### [Data freshness and timeliness](https://www.linkedin.com/learning/data-quality-core-concepts/data-freshness-and-timeliness?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-freshness-and-timeliness?u=76281980&t=0)** - The second major signal I look for for [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) issues is data freshness and timeliness. Timestamps are extremely important for data quality, because in addition to nulls, they provide major clues for data quality issues, specifically trends and when I do that, I often go aggregate timestamps by a year, month, or some other window of time, which narrows down which set of logs to review for for root cause analysis. So if I'm looking for drop off, what I would do for historical data is I will group a specific attribute by month and see, okay, January, February, March, the data looks great, but in April, all of a sudden the data drops to zero and then the following month it goes back to the regular cadence. For me, that would be a huge signal that hey, something really weird happened in that month, let me go check the logs of what happened there. During that time period, maybe go, let's check the code of what changes happened, maybe some weird vendor issue happened that time. Timestamps give you a strong signal to narrow down where do your root cause analysis happen. Another key thing I want to highlight is that there is a huge difference for timestamps and specifically logging, between created, written, and updated timestamps. Created is when an event has occurred, written is when the event record has been stored on the database, and updated is when our record has been altered. Some of the most painful data quality issues I have faced is when those values get mixed up between [Databases](../../Skills/Software%20Development/Databases.md),
>
> **[1:35](https://www.linkedin.com/learning/data-quality-core-concepts/data-freshness-and-timeliness?u=76281980&t=95)** which makes it hard to understand what was the true path of events within a database. This is especially true for streaming, where if that gets mixed up, you start having conflicts within your databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (2)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### [Schema changes](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=0)** - [Instructor] The next signal of potential [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) issues are schema changes. Now, we've mentioned this before, but let's go a little bit more into it. Data is always changing, and it should be. "Data needs to align with the business, and ideally, the business is always changing to be in a position to capture further value." If a business is not evolving with the market, it's going to be left behind. And so "the business model and the subsequent processes evolve. So therefore the data and thus its schema" should evolve as well. And "this is known as schema evolution." Now there's different types. There's schema evolution where it's expected. It's inevitable. Change is inevitable, especially for schema. And if there's "a high level communication between the IT team, so software engineers, and the data teams," changing schema shouldn't be so painful. They'll often say, "Hey, in a month, we're going to drop this column. Please be prepared and account for it in your downstream transformations and analytical database." I have found that schema evolution is easy to deal with "when data teams are involved in the requirements and scoping phases for changes to [products](../../Skills/Software%20Development/Microsoft%20Products.md) and processes" that impact the [Databases](../../Skills/Software%20Development/Databases.md). One of the earliest wins I witnessed at a earlier company was when our head of data said, "Engineering team, I want one of my data team members part of your meetings when you're planning new product features. Because the schema keeps on changing on us and our customers are mad about the [Dashboards](../../Skills/Data%20Science/Dashboards.md)." Immediately after that change,
>
> **[1:35](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=95)** our data quality issues dropped because now software engineers were aware of what was the impact to us. We were able to make suggestions on better ways to reformat the data. And so a key thing I want to highlight here with schema evolution is that it really comes down to people and processes and getting to an agreed upon resolution of how to make these changes happen safe for everyone in the business. Now, unfortunately, that's not always the case. And more common than not, you have schema evolution that happens unexpectedly. And so what happens here is that the engineering team is moving really quickly. They just need to make a product happen. They're trying to get through their sprints. And a breaking change goes unnoticed, and it creates one of those silent failures, like I highlighted before. And then the business consumer is seeing data off. This is why root cause analysis is so important, because then you can go back and trace some analytical database to the transactional database. What has changed? What has dropped off? And many times it points to schema.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **CLI Commands:** make (3)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Data transformation bugs](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=0)** - [Instructor] While I wish I could say that [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) issues were never caused by my own changes and it was only from the upstream engineers, the reality is I also caused data quality issues through [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) bugs. One key thing to highlight is remember when we did that ETL pipeline, we're extracting from the transactional database and replicating it to an analytical database. Well, to go into more why we do that is because the transactional database and analytical database have the same data, but it needed to be formatted for different use cases. Transactional [Databases](../../Skills/Software%20Development/Databases.md) focus on speed for read and write, while analytical databases are optimized for large scans and aggregates of the data for analytics. One of the key things to highlight here is that when you're doing that replication and ultimate transformations, you're trying to align your assumptions to the business logic happening beyond the transactional database and to the actual business. When there's a disconnect from the reality of the business process and its interpretation with an analytical database, it results in data quality issues, because you create the wrong logic for the transformation. The better your assumptions for your transformation, the lower likelihood of embedding data quality issues within the analytical database. Another thing to highlight are case when statements, and I think they're necessary evil. Even with the most accurate assumptions, data will unexpectedly change, such as the schema. Data teams often employ case when statements within data transformations to handle these edge cases.
>
> **[1:36](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=96)** So a case when statement is like an FL statement. If you see this value, do this edge case. They provide a quick fix to resolve data quality issues, and many times, they may be the only thing you can do as a data team. But over time they accumulate into technical debt and they make it really hard to manage, 'cause now you're handling all these edge cases within your code, and it's not really scalable. And what if they start conflicting with each other? Case when statements, I argue, very important, but be careful with the power of them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** etl (1)
> **Analogies:** such as (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Data drift](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=0)** - [Instructor] Another signal of potential [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) issues is data drift. Now, in addition to schema evolving, it's also possible for the data itself to evolve and no longer align with your business logic. One key nuance I want to highlight here is that it's not the data itself that's having the issue, it's your inability to capture it properly. Now, where this becomes really impactful, specifically for data drift, is shifts in the distribution of the data, and it has major impacts for analytics, such as [Statistics](../../Skills/Data%20Science/Statistics.md), and especially in machine learning. There's a whole field around data drift and ML ops. One key area I want to highlight within data drift is concept drift, and there's four key types of concept drift. Sudden drift is where a new concept occurs within a short period of time, so a sudden change. Gradual drift is when a new concept gradually replaces the old one over a period of time. So say for instance, a certain product's being sunsetted, but people are still using it. We have incremental drift is where an old concept incrementally changes to a new concept over a period of time. So maybe inflation, right? Things are slowly increasing over time. And then finally, reoccurring concepts. So an old concept may occur after some time. Something that's very cyclical. Example of this would be the weather. Maybe you have a rainy season that comes at a certain time of the year, and it's happening over and over again. There's a great article, which I'm referencing here that I highly recommend on concept drift,
>
> **[1:35](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=95)** and you can read it in the additional material added in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Analogies:** such as (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### [Measuring data quality](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=0)** - [Instructor] So we're aware of the data lifecycle, we're aware of the stakeholders, we're aware of how [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) pops up into them, and what the signals of data quality issues look like. Now, how do you measure them? I want to bring back the DAMA data quality dimensions that we covered in an earlier chapter. These dimensions are critical for measuring data quality. Now remember, there's different dimensions or formats you can use. Whichever one your company decides on, just stick to the framework that you have. How to measure them is that you identify your most important data that needs data quality, you map the data quality dimensions to the data assets. You create aggregate metrics to represent what proportion of the data values are impacted by data quality issues, specifically among those dimensions. And then you create pass/fail logic based on acceptable values of the metric. And so as a mock example, remember our [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) exercise, well, that data leader got funding and now they did a data quality initiative. And specifically, they looked at the tables and identified that customerId, totalAmount, and paymentDate were the most important data values they wanted to focus on for data quality. And so in this case, they identified, hey, for customerId consistency was only 80% and that was below a threshold they felt comfortable with. An example of this would be, say for instance, they changed the format of how IDs are. And so in the database, 20% of them have the new ID format,
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=94)** but the former 80% have the old ID format, which can cause issues. For the totalAmount, you're seeing 60% for Validity, Consistency and Accuracy. An example of what could have caused that is say for instance, for the total amount, they made some logic that rounded the dollar amounts to the closest dollar. And then finally, for paymentDate, you see that it's 95% for the lowest and that's acceptable for there. Another thing I want to highlight here is that you see N/As across, and it's because not every data value will align with every single data quality dimension. Now, that's just a quick mock example, but if you want to see a real-life example, then check out GitLab, who has their entire handbook, open source for anyone on the internet to see, here's an example of their data quality scorecards, their detection rules, and their various processes for doing this. You can go to the website, which I have linked here, and you can review it for yourself and you can check out all the other aspects of their data that they have open source.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (11), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1)
> **Code Identifiers:** customerid (2), totalamount (2), paymentdate (2)
> **Analogies:** for instance (2)
> **Env Vars:** dama (1)
> **Cross-References:** we covered (1)
> **Tools:** gitlab (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 4. Data Quality Tooling

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to tooling](https://www.linkedin.com/learning/data-quality-core-concepts/introduction-to-tooling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/introduction-to-tooling?u=76281980&t=0)** - In this chapter, we'll cover the various tools you can use to support your [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) initiative, where they fit within the data lifecycle, and provide case studies and real-life examples to make it clear on how it'll fit within your business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **CLI Commands:** make (1)
> **Speakers:** - in (1)

#### [Data dictionaries](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980&t=0)** - [Instructor] One of the first tools I always look for when working on a new data project are data dictionaries. And data dictionaries are essentially "a centralized repository of information about data, such as its meanings, relationships, origin, various formats." And where it sits in the data lifecycle is often within the analytical [Databases](../../Skills/Software%20Development/Databases.md) and the data marts. And it could potentially be in the transactional databases. But again, the engineers are often not worried about the data itself, but rather it's an output to their workflows. The role of a data dictionary is to serve as a "centralized source of truth that describes the values within a database." And it "can range from an explicit tool" to being maybe a [Google](../../Glossary/Service/Google.md) sheet, if it's very scrappy, or it can be within the database itself, such as cloud data warehouses that will have the descriptions of the data next to the columns. And here's an example of a data dictionary. This is a code book from the National Health Interview Survey. And this PDF that it came from is, like, hundreds of pages long. This is one example here, but you can see it has the variable name, it has the description about it, some values for the data, and some further information of how it is sourced. I've included a link to this code book and the resources where you can view it for yourself and get a sense of what this looks like.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2), [Google](../../Glossary/Service/Google.md) (1)
> **Analogies:** such as (2)
> **Env Vars:** pdf (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Data catalogs](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=0)** - [Instructor] Another tool to help you understand the data within your data lifecycle are data catalogs. They're essentially an organized inventory of the data, but specifically a database of the [Metadata](../../Skills/Web%20Development/Metadata.md) of the various [Databases](../../Skills/Software%20Development/Databases.md) within your system and their data sources. In addition, it has a search engine inside of it to help you search for it. Where assist within the data lifecycle is wherever there's a database, there will be a data catalog to pull the metadata and make sense of it. The role of it is to find data across disparate systems and organization, to break data silos, especially at the enterprise scale, and provide a programmatic means to access and update metadata. Now, you may be asking, "This may be very similar to data dictionaries. So what's the difference?" An analogy I like to think of is catalogs is like a book index where you can search through the back of the book to identify where a location is and then go to it. While dictionary is similar to a book glossary where you have a set of definitions that describe things. Catalogs answer where is the data, while dictionaries answer what is the data. Catalogs have multiple [Forms](../../Skills/Web%20Development/Forms.md) of metadata, while dictionaries only have definitions of metadata. And then finally, catalogs are programmatically updated, but dictionaries, while it is possible, can be programmatic. It's oftentimes manually maintained. And to make it more real, here's a case study of a data catalog used at the company Brainly. Brainly is the AI-powered learning tool that helps students with homework,
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=94)** and unique to them is that they have a distributed model where each team manages its own data and it has its benefits and downsides to that, and it's really up to the business model in the organization. What resulted in this though was that they had many data silos and challenges in discovering what data was available, and they have multiple dependencies to get access. So say for instance, you're working on an analytical project that requires three different domains. You have to go to three different teams and wait for them to get back to you. To solve this, they utilize the data catalog to consolidate metadata from the various databases and visualize the lineage of the data to track how it flow through the organization, which we'll cover in our future slides. Finally, this allowed awareness of the data locations, and because people are aware where it was located, it resulted in a further data ownership and [Accountability](../../Skills/Data%20Science/Accountability.md) for the [Data Quality](../../Skills/Data%20Science/Data%20Quality.md). I highly recommend checking out their blog, which I included in the resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Accountability](../../Skills/Data%20Science/Accountability.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** similar to (2), for instance (1)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### [Data lineage](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=0)** - [Instructor] The next critical tool for managing [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) is [Data Lineage](../../Skills/Data%20Science/Data%20Lineage.md). "Data lineage essentially communicates a data's origin, what has happened to it," and how it moves from source to source to provide visibility of your data system. Now, the definition didn't make too much sense to me at first until I saw actual representation of it. Here's the example of what data lineage is. This is a completely made up example. But you see you have your beginning sources, it highlights how it travels to a transformation stage, and then how they're merged together. Now, data lineage fits within the data lifecycle wherever data is being moved. And typically, you'll have it within [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) that show, "Hey, we're replicating from A to B," or within the analytical [Databases](../../Skills/Software%20Development/Databases.md) to identify the transformations. Now, data lineage could be in the data creation and the transactional phase, but many times the software engineers aren't too focused on the data aspect of it. So oftentimes, you'll see data lineage tools focusing on the downstream analytical workflows. Key things to note is that they visualize "how data flows through databases" and sometimes between databases. They typically have a table level view, but they can also be a column level view. And where they're amazing for data quality is for root cause analysis. And many times after I do my first profiling of data quality issue, my next step is to understand where is it coming from? I would trace the call functions
>
> **[1:33](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=93)** in [SQL](../../Skills/Data%20Science/SQL.md) or in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) functions to understand how data flowed through a system. And if there was lineage available, I went to that first 'cause that made it much easier to understand what happened, what were the steps, and where something could possibly go wrong. And one of the great case studies for lineage is at Netflix. I've included a article for this case study. But to quickly summarize, "Netflix is one of the first companies to heavily invest in [Microservices](../../Skills/Software%20Development/Microservices.md) at scale." So instead of having all the information within one database and one system, you have all these little mini systems everywhere. At the scale of Netflix, it's massive. It's like a swarm of information moving together quickly. And so with this, "data reliability and integrity challenges were all across the complex cloud landscape" and people didn't know where to start or where to connect. And so "Netflix implemented a scalable data lineage tool to map out their dependencies all throughout their system." And this enabled them to take this disparate teams and have a unified model while still keeping their culture moving fast and having individual processes with their microservices. Again, highly recommend checking out their blog.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Lineage](../../Skills/Data%20Science/Data%20Lineage.md) (7), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (3), [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1)
> **CLI Commands:** make (1), python (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Data monitoring and observability](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=0)** - [Instructor] The next set of tools for [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) is data monitoring and observability. And data observability is defined as the organization's ability to have broad visibility of data landscape and multi-layered data dependencies, such as the pipelines, the infrastructure, how it's served, at all times with a goal to identify, control, and escalate data quality issues. Where it typically fits within a data lifecycle is that analytical [Databases](../../Skills/Software%20Development/Databases.md), but it can also be in the transactional database. Again, you want a holistic view of your data stack. It highlights data quality trends by profiling the data and running various [Statistics](../../Skills/Data%20Science/Statistics.md), specifically looking for anomaly detection. It provides broad visibility of organization's data stack and alerting happens after changes to data. So if you think about it, to observe means that something has already happened. A great case study observability is Meta's HawkEye. As you know, Meta has so many ML and AI applications, and resolving production ML issues at Meta requires a lot of specialized knowledge about the data and substantial coordination across many teams. HawkEye is an internal observability tool at Meta that helps its engineers do root cause analysis by essentially identifying anomalies within the data that are causing broken models, and then it guides engineers through debugging steps. This anomaly detection is in real time
>
> **[1:33](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=93)** and it drastically cuts the engineering hours spent on debugging. Again, there's a resource for you to check out the blog. Highly encourage you to check it out. Furthermore, I've also included a article on "A Survey Data Quality Measurement and Monitoring Tools." This article was recommended to me when I was building out this course, and it's one of the best I've seen that gives a really great view of all the tooling landscape.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Definitions:** means that (1), is an  (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Data contracts](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=0)** - [Instructor] Finally we have data contracts, which is a emerging category in the data space right now. I define data contracts as a [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md) pattern that extends software-driven collaboration to data teams, and enhances [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) through human-in-the-loop reviews. And it's similar to how these systems have improved code quality for product teams. A similar tool being [GitHub](../../Skills/Software%20Development/GitHub.md). Data contracts are upstream and mainly focused on the transactional database and the replication into the analytical database. The way it does this, it codifies expectations of data such as schema, semantics, profiling of the data as code via contract spec typically a YAML file. It extracts [Metadata](../../Skills/Web%20Development/Metadata.md) from [Databases](../../Skills/Software%20Development/Databases.md), data catalogs, and lineage. It detects proposed changes to code and databases, and then compares the contract spec to the expectations of the collected metadata. Contracts enforce data quality through the CICD workflow where engineers make a poll request, it runs set tests, and then if the test fails saying, hey, you violated this contract, it then tax the people who are best suited to answer the question, and ensures that the change doesn't happen ultimately impact the data. A great case study, this is GoCardless with Andrew Jones. He is one of the first people to implement data contracts and production. And specifically for GoCardless's use case, the internal data model wasn't designed for consumption and was leading to poor documentation and difficulty in managing in data. This is a very common use case where the company first starts, analytics is nice to have,
>
> **[1:35](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=95)** so they only focus on the transactional database. And then a few years later, they add analytics, and it's completely different set of requirements. So to make it work for them, GoCardless had to do extensive data transformations and joinings to make the data useful. And changes in services upstream, such in the transactional database, caused unexpected breaking changes for data consumers, and this resulted in low confidence and poor data quality for consumers. This problem led Andrew Jones to explore data contracts and implement it at GoCardless, and I think this quote from him best sums it. Ultimately, we see data contracts as our vessel for improving data quality at GoCardless. We're changing the data culture of the organization, support by our best in class data infrastructure, and guaranteed by a data contract. Again, similar to other case studies. I have links to this, which you should go check out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (4), [Metadata](../../Skills/Web%20Development/Metadata.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** make (3)
> **Analogies:** similar to (2), such as (1)
> **Env Vars:** yaml (1), cicd (1)
> **Documentation:** spec (2)
> **Definitions:** is a  (2)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/data-quality-core-concepts/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/next-steps?u=76281980&t=0)** - Thank you so much for taking this course. In this course on core concepts of [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), you learn how to define data quality, what data quality looks like along the data lifecycle, the various tools in it, and the various stakeholders. This course was a huge overview and many times a starting point for you to launch off of to learn further. And my next set of courses coming soon, we'll be taking a code perspective of what data quality looks like, and diving into code bases and [Databases](../../Skills/Software%20Development/Databases.md). If you're non-technical, then this is the stopping point for you. Again, thank you to the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) team, my team, for helping me set up the course and for you for taking the time to learn about data quality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Prerequisites:** set up (1)
> **Speakers:** - thank (1)


## Instructor

- [Mark Freeman](../../Instructors/Data%20Science/Mark%20Freeman.md)

## Resources

- Exercise files available

## Skills Covered

- Data Management
- Data Quality

## Path Context

### In [Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)
← [ETL in Python and SQL](../Data%20Science/ETL%20in%20Python%20and%20SQL.md) | **7 of 7**

## Appears In

- [Introduction to Fundamental Skills for Data Work- Data Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Processing.md)

## Related Courses

_Courses sharing skills:_

- [Practical Database Design- Implementing Responsible Data Solutions with SQL Querying](../Data%20Science/Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md) — Data Management
- [JavaScript- Best Practices for Data](../Software%20Development/JavaScript-%20Best%20Practices%20for%20Data.md) — Data Management
- [Advanced Python- Working With Data](../Software%20Development/Advanced%20Python-%20Working%20With%20Data.md) — Data Management
- [Google Cloud Data and Storage Foundations](../Cloud%20Computing/Google%20Cloud%20Data%20and%20Storage%20Foundations.md) — Data Management
- [Data Versioning, Lineage, and Quality Monitoring for AI](Data%20Versioning%2C%20Lineage%2C%20and%20Quality%20Monitoring%20for%20AI.md) — Data Quality

---

[↑ Back to top](#)