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
  - '[[Introduction to Fundamental Skills for Data Work- Data Processing]]'
prev_courses:
  - '[[ETL in Python and SQL]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Processing","position":7,"total":7,"prev":"ETL in Python and SQL","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/data-management
  - skill/data-quality
status: not-started
created: 2026-04-21
---

![Data Quality: Core Concepts](https://media.licdn.com/dms/image/v2/D4D0DAQE-F9EAjv69uQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732063834035?e=2147483647&amp;v=beta&amp;t=anjsXxzSWBJJpjN3pZPxwdes26CrhC3murEUQsr_TGE)

# Data Quality: Core Concepts

> This theoretical course is designed for data professionals, stakeholders at data organizations, data leadership, and professionals interested in data quality. Mark Freeman—a data engineer and tech lead—presents a high-level overview of data quality, a measure of how well data meets a company's expectations for accuracy, completeness, consistency, reliability, and validity. In addition to course co

> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts) | 1h 28m | Advanced | 4K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Mark Freeman]]

## Resources

- Exercise files available

## Skills Covered

- Data Management
- Data Quality

## Table of Contents

### Introduction

#### The importance of data quality
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/the-importance-of-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/the-importance-of-data-quality?u=76281980&t=0)** - We've been hearing for years that data's the new oil, and lately we've been hearing AI this and AI that, but me and you know an open secret.
>
> **[0:07](https://www.linkedin.com/learning/data-quality-core-concepts/the-importance-of-data-quality?u=76281980&t=7)** Come a little bit closer.
>
> **[0:09](https://www.linkedin.com/learning/data-quality-core-concepts/the-importance-of-data-quality?u=76281980&t=9)** We know that none of that will work without data quality.
>
> **[0:12](https://www.linkedin.com/learning/data-quality-core-concepts/the-importance-of-data-quality?u=76281980&t=12)** I'm Mark Freeman, I'm a data scientist turned data engineer, and I'm obsessed with data quality.
>
> **[0:17](https://www.linkedin.com/learning/data-quality-core-concepts/the-importance-of-data-quality?u=76281980&t=17)** For me, it is the key driver for success of any data initiative.
>
> **[0:22](https://www.linkedin.com/learning/data-quality-core-concepts/the-importance-of-data-quality?u=76281980&t=22)** In this course, you'll learn about how to define data quality, what data quality looks like along the data lifecycle, the various stakeholders and tools you'll see along the way, and how to connect it back to business strategy.
>
> **[0:33](https://www.linkedin.com/learning/data-quality-core-concepts/the-importance-of-data-quality?u=76281980&t=33)** Now, if you're non-technical, this is still a great course for you 'cause it'll expose you to all the concepts.
>
> **[0:37](https://www.linkedin.com/learning/data-quality-core-concepts/the-importance-of-data-quality?u=76281980&t=37)** And if you are technical, it'll teach you how to translate your knowledge back to the business.
>
> **[0:42](https://www.linkedin.com/learning/data-quality-core-concepts/the-importance-of-data-quality?u=76281980&t=42)** My goal with this course is to provide you a high level overview and be a springboard for further learning.
>
> **[0:48](https://www.linkedin.com/learning/data-quality-core-concepts/the-importance-of-data-quality?u=76281980&t=48)** So let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - we (1)


### 1. Data Quality Fundamentals

#### Data quality introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-introdution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-introdution?u=76281980&t=0)** - In this chapter, we'll define data quality, go over the nine dimensions of data quality, and finally, go through a thought exercise, where we take a business strategy objective and tie it to a data quality initiative.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Speakers:** - in (1)

#### Impact of poor data quality
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=0)** - [Instructor] For this video, we're going to be talking about the impact of poor data quality and make it real for you as to why it's important to account for this.
>
> **[0:09](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=9)** I'm going to go over three specific use cases to really highlight, at best-case scenario, maybe get a few numbers wrong, people have the wrong idea about the business, worst-case scenario, which we're going to be highlighting here, the data is wrong where it has a regulatory impact, or it impacts peoples' lives in a negative way.
>
> **[0:28](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=28)** So let's jump right into this.
>
> **[0:31](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=31)** For the first case study, we're going to be talking in the healthcare space, and specifically, the Epic Sepsis Model, which was a electronic health record company who utilized their massive EHR dataset to create a model to predict sepsis, with the goal of saying, "Hey, if we can predict this really life-threatening thing, we'll reduce the amount of patients impacted by it."
>
> **[0:52](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=52)** What ended up happening was the opposite.
>
> **[0:54](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=54)** It predicted worse than the standard of care what doctors are currently doing, and it over-alerted issues for patients to the point where people weren't even paying attention to the model.
>
> **[1:06](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=66)** This all came to light with researchers for "JAMA," which is one of the top medical publishers, highlighted how the model was actually wrong.
>
> **[1:15](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=75)** And they had this whole case blow up on them.
>
> **[1:18](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=78)** And what they actually found out was, for the electronic health records, they trained their ML model on all the data globally, but when they put it into hospitals at a local level, the data from a data quality perspective did not match the population, and therefore, were giving wrong results.
>
> **[1:36](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=96)** Epic was eventually able to rectify the issue by updating the hospitals, say, "You need to train on your own specific patient data."
>
> **[1:44](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=104)** But because of all the news and also being in "JAMA," they took a huge reputational hit and people were more wary to use the model.
>
> **[1:53](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=113)** In a second case, we have finance.
>
> **[1:55](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=115)** And this is pretty common.
>
> **[1:56](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=116)** Banks typically are paying fines for regulatory things because it's such a complex system to handle.
>
> **[2:02](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=122)** One recent one is actually Citibank, which was fined $136 million for failing to fix longstanding data issues.
>
> **[2:11](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=131)** And the Federal Reserve Board actually called out how, you know, they were supposed to make sufficient progress in remediating these problems for data quality management, and they failed to do so.
>
> **[2:21](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=141)** And this is in addition to another $400 million they were fined back in 2020, which kicked this all off.
>
> **[2:28](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=148)** And we have, actually, in the documents, the SEC files that you can actually look to see what's happening here.
>
> **[2:33](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=153)** And then finally, this is actually one of my favorite kind of use cases to call out, because this highlights how insidious data quality can be.
>
> **[2:41](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=161)** It can be hidden to you, one of the most critical aspects of your business, and it can set you up for failure in the long term.
>
> **[2:48](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=168)** And it's a slow burn here.
>
> **[2:50](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=170)** So in this case, we had Bird, which is a ridesharing group for scooters.
>
> **[2:55](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=175)** I was in San Francisco when this was happening.
>
> **[2:57](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=177)** There were Bird scooters everywhere, right?
>
> **[3:00](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=180)** Well, they were a big kind of venture-backed company.
>
> **[3:03](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=183)** They raised a lot of money.
>
> **[3:04](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=184)** And they actually had to go back and say, "For the past two years, we have been reporting our revenue wrong."
>
> **[3:11](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=191)** And they actually had to go to the SEC again to say, "All of our financial data that we reported for the past two years cannot be trusted."
>
> **[3:19](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=199)** What ended up happening from a data quality perspective, they had wallets that were preloaded.
>
> **[3:24](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=204)** And they were able to do rides.
>
> **[3:27](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=207)** But if the wallets were empty or has insufficient funds, they did not account for that.
>
> **[3:32](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=212)** So they were overestimating their revenue.
>
> **[3:34](https://www.linkedin.com/learning/data-quality-core-concepts/impact-of-poor-data-quality?u=76281980&t=214)** Again, it was a business logic thing that seemed very minor, but it built up over years.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), case, (2), let (1), finally, (1)
> **Env Vars:** jama (2), sec (2), ehr (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Defining data quality
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=0)** - [Mark] In the previous video, we talked about the impact of data quality.
>
> **[0:04](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=4)** And now that we know why it's so important to account for, what exactly is data quality?
>
> **[0:09](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=9)** And this is actually a really hard thing to define.
>
> **[0:12](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=12)** If you think about it, data quality's been around for centuries.
>
> **[0:15](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=15)** Since people recorded data, there has been data quality.
>
> **[0:18](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=18)** And there's been decades from the beginning of computers and all that research in the seventies, people thinking about data quality.
>
> **[0:25](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=25)** It's a huge ask to come up with a single term.
>
> **[0:29](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=29)** And actually, I wrote a book on data quality, and I spent months going through literature trying to figure out a correct way to define it.
>
> **[0:36](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=36)** And so I'm going to provide you three different definitions that I like, and then from there go into what to consider for data quality in defining it.
>
> **[0:44](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=44)** And so these are the three kind of pieces of literature that I'm going to be pulling from.
>
> **[0:48](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=48)** "Data Quality Fundamentals" by Barr Moses, Lior Gavish, and Molly Vorwerck.
>
> **[0:53](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=53)** Another book, "Data Contracts" by Chad Sanderson and myself.
>
> **[0:58](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=58)** And then finally, this is a book that a lot of people reference for their data quality, which is the "DAMA-DMBOK" book, the second edition from DAMA International.
>
> **[1:08](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=68)** For "Data Quality Fundamentals," they define data quality as, "For the purposes of the book, we define data quality as the health of data any stage in its lifecycle.
>
> **[1:17](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=77)** Data quality can be impacted at any stage of the data pipeline, before ingestion, in production, and even during analysis."
>
> **[1:26](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=86)** I really like this definition because it's really approachable for anyone who's maybe not as technical.
>
> **[1:32](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=92)** And it highlights how there is a lifecycle of data at different stages, and that data quality is really dependent on where you're at.
>
> **[1:39](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=99)** One key thing to note is that these authors are really into data observability, which is how can you observe how data's changing across your data lifecycle.
>
> **[1:48](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=108)** And that informs this type of definition.
>
> **[1:51](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=111)** For this book on data contracts, which I wrote, we define it as, "Data quality as a organization's ability to understand the degree of correctness of its data assets, and the trade-offs of operationalizing such data at various degrees of correctness throughout the data life cycle, as it pertains to being fit for use by the data consumer."
>
> **[2:11](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=131)** This is quite a mouthful, and I was trying to capture a lot when I created this definition.
>
> **[2:15](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=135)** And a big piece of this is, and we'll go into this later, Strong and Wang is one of the kind of early researchers for data quality, and they really highlight fit for use for the data consumer.
>
> **[2:26](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=146)** And that really stuck with me, and so I wanted to think through.
>
> **[2:30](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=150)** Data quality is all about contextualization for the business and understanding what is the degree of technical debt that you have, and what limits your ability to do things with this data.
>
> **[2:41](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=161)** And so accounting for, there are going to be various levels of how good a data asset is, how much the business understands it, and how much the business is willing to invest in it to make sure it is of good quality and accounting for those levers.
>
> **[2:55](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=175)** For further context, data contracts are about prevention rather than observing of data.
>
> **[3:00](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=180)** And so that's why this understanding of degree of correctness and the trade-off is so important.
>
> **[3:05](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=185)** Finally, is we have the DAMA definition.
>
> **[3:08](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=188)** So, "Data quality can be defined as the degree to which dimensions of data quality meet the requirements.
>
> **[3:14](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=194)** This implies that requirements should be formulated for each relevant dimension.
>
> **[3:19](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=199)** A much shorter definition for quality is data is fit for purpose."
>
> **[3:23](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=203)** Again, you see the fit for purpose, fit for use, that's calling back to that main researcher, Strong and Wang.
>
> **[3:28](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=208)** But something to really highlight here is that the DAMA book has a set of dimensions which we'll cover in the later set of videos in this course.
>
> **[3:37](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=217)** And once you see that, by going through those dimensions, it gives it a more categorical way to check off and figure out what's part of your data quality.
>
> **[3:47](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=227)** I would highlight that the DAMA book is typically what a lot of people reference when they're thinking about their data strategy at first.
>
> **[3:53](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=233)** One key thing I want to highlight for you is that I gave you three different definitions, but you need to define data quality for your business.
>
> **[4:01](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=241)** And one thing I really want to highlight is that data quality does not equal perfect data.
>
> **[4:06](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=246)** I made that mistake early in my data career when I was trying to build these data quality initiatives where I was like, "Here's all these best practices.
>
> **[4:13](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=253)** This is why we should do it."
>
> **[4:14](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=254)** And when I present it to software engineers of the business, they're like, "This is a nice to have.
>
> **[4:18](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=258)** We don't understand why we need to put in all this extra effort just for a cleaner report."
>
> **[4:22](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=262)** Right?
>
> **[4:22](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=262)** And so it's all about contextualizing to your business.
>
> **[4:25](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=265)** And in a later video, we'll also cover how we actually do that.
>
> **[4:28](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=268)** And so adhering to data quality is a trade-off between effort and accuracy.
>
> **[4:32](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=272)** And the trade-off an organization or individual is willing to make is determined by their constraints, their risk profile, and the perceived value.
>
> **[4:41](https://www.linkedin.com/learning/data-quality-core-concepts/defining-data-quality?u=76281980&t=281)** It's extra effort to do data quality, and so people have to be incentivized to actually care and engage in it.

> [!info]- Semantic Content
>
> **Env Vars:** dama (5), dmbok (1)
> **Code Keywords:** for, (2), finally, (2), from. (1)
> **Definitions:** is a  (4), defined as (1)
> **CLI Commands:** make (2)
> **Cross-References:** previous video (1), we talked about (1)
> **Speakers:** - [mark] (1)

#### Data quality dimensions: Intro
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-dimensions-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-dimensions-intro?u=76281980&t=0)** - [Instructor] In previous videos, I hinted at there's these data quality dimensions that DAMA talk about.
>
> **[0:04](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-dimensions-intro?u=76281980&t=4)** We're now going to be going over them in the next few videos at a time where I'll provide kind of a high level example of each one, as well as examples from my experience in my career, seeing these data quality issues pop up.
>
> **[0:17](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-dimensions-intro?u=76281980&t=17)** DAMA defines these data quality dimensions as validity, completeness, consistency, integrity, timeliness, currency, reasonableness, uniqueness, and accuracy.
>
> **[0:29](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-dimensions-intro?u=76281980&t=29)** Now, there are a whole bunch of other different aspects of data quality that are not included in this.
>
> **[0:36](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-dimensions-intro?u=76281980&t=36)** There's so many different directions you can go, so many different ways you can define it.
>
> **[0:39](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-dimensions-intro?u=76281980&t=39)** I like the DAMA ones 'cause it starts as a good foundation to start off with before you start exploring more.
>
> **[0:44](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-dimensions-intro?u=76281980&t=44)** And this book is what people many times reference for when they're thinking about data governance strategy or data quality strategy.
>
> **[0:50](https://www.linkedin.com/learning/data-quality-core-concepts/data-quality-dimensions-intro?u=76281980&t=50)** In the next set of videos, we'll go over three at a time, where you can get a slight taste of what each one looks like and what to expect when thinking about data quality.

> [!info]- Semantic Content
>
> **Env Vars:** dama (3)
> **Cross-References:** in the next (2)
> **Code Keywords:** this. (1)
> **Speakers:** - [instructor] (1)

#### DQ dimensions: Validity, completeness, consistency
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=0)** - [Instructor] The first data quality dimension we have is validity.
>
> **[0:03](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=3)** And this is essentially, how well does your data align with the expected business logic.
>
> **[0:09](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=9)** And so, for example, we have phone numbers here.
>
> **[0:12](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=12)** A good phone number here, includes the country code, the area code, and the seven-digit number, while a bad one includes just the seven-digit number.
>
> **[0:21](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=21)** And now this is all dependent on the business logic, itself.
>
> **[0:24](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=24)** And so, for example, if you are a small local business that only does business with people in the near vicinity of where your location is, maybe the seven digit number is okay because everyone you're calling is even the same area code.
>
> **[0:37](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=37)** But what if you're an international company that has phone numbers across the entire world?
>
> **[0:43](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=43)** Your business logic needs are going to be much different, where you're going to need that area code, you're going to need that country code, as well, to account for those things.
>
> **[0:51](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=51)** Again, it's all tied to the specific needs of your business.
>
> **[0:55](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=55)** For the second data quality dimension, we have completeness.
>
> **[0:59](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=59)** And you may be asking, wait, validity and completeness seem very similar, and I would say you're correct (chuckles).
>
> **[1:04](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=64)** But one key difference is that for the validity one, it's tied to the business logic, while the completeness is actually you need the full thing.
>
> **[1:12](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=72)** So, I have the address here for the LinkedIn headquarters, we have the street address, the city, the state, and the area code for that.
>
> **[1:22](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=82)** For the bad one, we just have the street address, and that could be almost anywhere in the US.
>
> **[1:27](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=87)** And so, it doesn't give you a full, complete view of what the actual address is.
>
> **[1:31](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=91)** And then finally, for the third dimension, we have consistency.
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=94)** Does it match the pattern of expected values?
>
> **[1:37](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=97)** So, for the good one, we have one, two, three, four, five, six, seven, but for a bad one, we're switching between letters and numbers.
>
> **[1:44](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=104)** So, one, two, and instead of three and four, we have C, D, and then going back to five, six, seven.
>
> **[1:48](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=108)** So, what does this look like in the real world?
>
> **[1:51](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=111)** When I was a data scientist in the healthcare space, I used to do electronic health record analysis for ophthalmology, so, both eyes.
>
> **[2:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=120)** So, one of the key things I looked at was, where was the doctor located?
>
> **[2:05](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=125)** Was their address correct?
>
> **[2:07](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=127)** Was their phone number correct and fully there?
>
> **[2:11](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=131)** Were the medical codes fully there as well.
>
> **[2:14](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=134)** For consistency, we think about ophthalmology and eyes, you have a left eye and a right eye, and that's picked up in the data.
>
> **[2:21](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=141)** When I was going through it, I had to make sure it was coded properly as either one for left or two for right.
>
> **[2:27](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=147)** But sometimes in the notes for the doctors, it'll put L or R or spell out left and right.
>
> **[2:33](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-validity-completeness-consistency?u=76281980&t=153)** And so, a big part of it is making that consistency go all the way through.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### DQ dimensions: Integrity, timeliness, currency
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=0)** - [Instructor] The next set of dimensions we have is integrity, timeliness, and currency.
>
> **[0:05](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=5)** For integrity, it's essentially how plausible is the data point.
>
> **[0:09](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=9)** Does it make sense?
>
> **[0:10](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=10)** Does it match reality?
>
> **[0:12](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=12)** And so for the good example, I have Paris, France, city and country.
>
> **[0:17](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=17)** And the bad example is New York City, France, which does not exist.
>
> **[0:21](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=21)** For the next one, we have timeliness.
>
> **[0:24](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=24)** And timeliness and currency are very similar, but a specific nuance.
>
> **[0:28](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=28)** For timeliness, in regards to, for the business case, how timely is it?
>
> **[0:33](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=33)** So example is that you'll have like a SLA for when a data refresh is expected.
>
> **[0:37](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=37)** And so, from time data's created to time being replicated somewhere else, we expect that to happen in five days.
>
> **[0:45](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=45)** So timeliness would be anything at five days before.
>
> **[0:48](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=48)** Bad example is say, for instance, the data's late and the refresh is 15 days past SLA.
>
> **[0:54](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=54)** So that goes into timeliness.
>
> **[0:56](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=56)** A nuance here with currency is that it's more so rather than the business use case is actually how current is the data.
>
> **[1:04](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=64)** So say, for instance, you're looking at dataset and today, it's 01/01 and it was last updated 01/01, same day.
>
> **[1:11](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=71)** But for a bad use case, say for instance, you're expecting this data to refresh every five days.
>
> **[1:16](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=76)** Thinking about timeliness, you check that today is 01/01, but it was updated almost three months ago.
>
> **[1:23](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=83)** That will be a bad case of currency.
>
> **[1:27](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=87)** An example from my career is when I used to work in health insurance and I would manage the data files for eligibility for who had insurance plan and from what dates from when.
>
> **[1:37](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=97)** So for example, for integrity, I would have someone where they're on an employer health insurance plan and their start date for the health insurance plan were months before they started as an employee at a company.
>
> **[1:50](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=110)** That would be an integrity issue.
>
> **[1:52](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=112)** For timeliness, for health insurance, there are maybe some regulatory aspects.
>
> **[1:57](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=117)** We're saying, Hey, the data would take maybe three days to go from an employer to us and another three days to go to the insurance, right?
>
> **[2:06](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=126)** And if you don't hear anything in six days, then something bad happened and there needs to be a check for this.
>
> **[2:11](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=131)** And then for a currency is how fresh is the update.
>
> **[2:15](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=135)** So for example, health insurance, many times by the employer, there will be some people where the currency was, we get a new data file every single day and if we don't get one every single day, something bad happened and we need a check into it.
>
> **[2:30](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=150)** Or, maybe it's an employer where like they send it once a month.
>
> **[2:34](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-integrity-timeliness-currency?u=76281980&t=154)** And so again, it's tied to the business use case and also the specific use case for a particular data asset.

> [!info]- Semantic Content
>
> **Analogies:** for instance (3), for example (2)
> **Code Keywords:** case, (2), else, (1), this. (1)
> **Env Vars:** sla (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### DQ dimensions: Reasonableness, uniqueness, accuracy
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=0)** - [Instructor] The final three dimensions we have are reasonableness, uniqueness, and accuracy.
>
> **[0:05](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=5)** Reasonableness, again, is tied to business logic and expected values.
>
> **[0:10](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=10)** Is it reasonable for a value to exist?
>
> **[0:12](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=12)** For the good example, have count distinct thinking about SQL of months.
>
> **[0:17](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=17)** There's only 12 months in a year, so I would expect only distinct 12 month names.
>
> **[0:21](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=21)** A bad example would be if you saw 14.
>
> **[0:24](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=24)** A great example of this is when you do maybe shorthand for months and long form for months in the same dataset.
>
> **[0:30](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=30)** Hence why you're getting more things.
>
> **[0:31](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=31)** And that goes back to the consistency aspect of it.
>
> **[0:35](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=35)** The next one is uniqueness.
>
> **[0:37](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=37)** A good example is that say for instance, I took an entire table and I said, Hey, gimme all the distinct values in this column and it equals a total rows.
>
> **[0:47](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=47)** That informs me that every value is unique.
>
> **[0:50](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=50)** A bad example is if I did that same exercise, but maybe there was less distinct values than the total rows, which informs me that there are some duplicates.
>
> **[1:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=60)** This is probably one of the most important data quality dimensions to me personally, because unique IDs are the cornerstone of merging various tables throughout different systems.
>
> **[1:11](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=71)** And so making sure they're distinct is critical for data quality.
>
> **[1:16](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=76)** The final dimension is accuracy, and that essentially refers to how the degree of correctness for a data asset.
>
> **[1:24](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=84)** And so for this example, a good set of data is age 19, and the category is adult.
>
> **[1:32](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=92)** A bad instance is age seven, but category is adult, probably growing up too fast.
>
> **[1:38](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=98)** Here's the thing though, is it can get a little tricky and that's where kind of the accuracy component goes into.
>
> **[1:44](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=104)** What if they're 17 and 364 days?
>
> **[1:49](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=109)** Maybe tomorrow they're adult, right?
>
> **[1:51](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=111)** Maybe it's 25 is how you're considering adult because that's when the brain develops.
>
> **[1:57](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=117)** Again, it's so tied to the business use case.
>
> **[2:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=120)** Thinking about this, in my career, I used to work as a data scientist as well in the HR analytics space, and so I would get files of employees and their management level, and so reasonableness for me would look like, okay, how many employees are under a manager?
>
> **[2:19](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=139)** If they are a low level manager and they have a thousand employees, maybe something's wrong here, but if they're like a VP or a director, maybe that's more plausible or they're a large company.
>
> **[2:31](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=151)** Uniqueness, how many employees are in a business?
>
> **[2:36](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=156)** I want to make sure that I don't over count or under count them.
>
> **[2:39](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=159)** And then finally, for accuracy, thinking about the levels, I would constantly be checking, alright, this person has this title in a company which would be different for various companies and therefore we believe is this level of seniority, which is a huge aspect of HR analytics.
>
> **[2:55](https://www.linkedin.com/learning/data-quality-core-concepts/dq-dimensions-reasonableness-uniqueness-accuracy?u=76281980&t=175)** So that's a small example of what these dimensions look like in the real world.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), this, (1), finally, (1)
> **Definitions:** refers to (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Common data quality assessment frameworks
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=0)** - [Instructor] In this video, we're going to be going over the common data quality assessment frameworks that you can choose from to implement within your organization.
>
> **[0:08](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=8)** And forewarned, there are a lot.
>
> **[0:11](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=11)** This is only a fraction of them available.
>
> **[0:15](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=15)** And this table comes from a really great article, which I'll pull up right now, called "An Overview of Data Quality Frameworks" by Corinna Cichy and Stefan Rass.
>
> **[0:26](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=26)** And this is probably one of the best articles that I came across because it gives an industry overview of the various frameworks that there are when they came out and how various companies are using them.
>
> **[0:38](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=38)** I've included a link to this article that you can read yourself that I highly recommend you checking out.
>
> **[0:44](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=44)** If you find this a little overwhelming looking at them, I agree with you.
>
> **[0:48](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=48)** There's a whole bunch of different directions.
>
> **[0:50](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=50)** And again, it's really tied to what the business needs.
>
> **[0:54](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=54)** In future slides, I will go over how to best choose an assessment for you.
>
> **[0:59](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=59)** One thing I do want to call out, and again, pulling from the DAMA book, these four frameworks.
>
> **[1:05](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=65)** First, Diane Strong and Richard Wang.
>
> **[1:09](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=69)** They're one of my favorite researchers in the data quality space and people that I often reference and draw from.
>
> **[1:16](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=76)** In addition, there's Thomas Redmond, Larry English, and the DAMA UK framework.
>
> **[1:22](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=82)** The big reason why I want to highlight these individuals is because they have some of the leading research and kind of foundational research to reference for this.
>
> **[1:32](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=92)** As part of the course, I've included a sheet of resources, and I've called out seminal work from all of them that I highly recommend you check out.
>
> **[1:41](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=101)** But then the question becomes how do you choose a framework?
>
> **[1:45](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=105)** And I argue that "the best framework is the one that you can get your respective organization to adopt."
>
> **[1:50](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=110)** And there's various considerations you can go through for that.
>
> **[1:53](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=113)** For example, do you have executive sponsorship?
>
> **[1:56](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=116)** Is their current tech and data debt?
>
> **[1:58](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=118)** How is data quality connected driving revenue or mitigating risks?
>
> **[2:02](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=122)** A great example is, like, regulatory fines.
>
> **[2:04](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=124)** Operational requirements, and what's the timeline?
>
> **[2:07](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=127)** And so all these different frameworks have different ways of assessing, coming up with a strategy, getting buy-in, getting agreements.
>
> **[2:15](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=135)** They're frameworks to help you out.
>
> **[2:17](https://www.linkedin.com/learning/data-quality-core-concepts/common-data-quality-assessment-frameworks?u=76281980&t=137)** Find the one that's going to cause the least amount of friction for you to get across the line, while also balancing the rigor to get the data quality results you want.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** from. (1), this. (1)
> **Env Vars:** dama (2)
> **Cross-References:** coming up (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Connecting data quality to business outcomes: Intro
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/connecting-data-quality-to-business-outcomes-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/connecting-data-quality-to-business-outcomes-intro?u=76281980&t=0)** - [Instructor] In the next set of videos, we're going to be discussing how to connect data quality to your business outcomes.
>
> **[0:06](https://www.linkedin.com/learning/data-quality-core-concepts/connecting-data-quality-to-business-outcomes-intro?u=76281980&t=6)** Now, this is a section that I'm really excited to talk about because the past two years, I've been really focused on bringing a new data quality solution to market, and that's required me to have countless meetings with data leaders to understand their data stack, their data strategy, how data quality fits into it and the problems they have, and then creating solutions for them to help get buy-in of their executive team to put budget towards data quality.
>
> **[0:31](https://www.linkedin.com/learning/data-quality-core-concepts/connecting-data-quality-to-business-outcomes-intro?u=76281980&t=31)** I've learned so much the past couple years, and I'm excited to share my lessons learned in the next few slides.
>
> **[0:37](https://www.linkedin.com/learning/data-quality-core-concepts/connecting-data-quality-to-business-outcomes-intro?u=76281980&t=37)** Now, at a high level, this is what we see in six steps.
>
> **[0:41](https://www.linkedin.com/learning/data-quality-core-concepts/connecting-data-quality-to-business-outcomes-intro?u=76281980&t=41)** The first step is that you want to understand the business model of your organization.
>
> **[0:45](https://www.linkedin.com/learning/data-quality-core-concepts/connecting-data-quality-to-business-outcomes-intro?u=76281980&t=45)** This is the foundation of what drives decisions in organizations and thus why data quality prioritize.
>
> **[0:51](https://www.linkedin.com/learning/data-quality-core-concepts/connecting-data-quality-to-business-outcomes-intro?u=76281980&t=51)** From there, you want to map what the data lifecycle is that enables that business model.
>
> **[0:56](https://www.linkedin.com/learning/data-quality-core-concepts/connecting-data-quality-to-business-outcomes-intro?u=76281980&t=56)** Next, within that lifecycle, you want to identify the key stakeholders that you need to engage with.
>
> **[1:03](https://www.linkedin.com/learning/data-quality-core-concepts/connecting-data-quality-to-business-outcomes-intro?u=76281980&t=63)** For the fourth step, you're going to work with those stakeholders to evaluate how they drive revenue or mitigate risk.
>
> **[1:10](https://www.linkedin.com/learning/data-quality-core-concepts/connecting-data-quality-to-business-outcomes-intro?u=76281980&t=70)** With that information, you're able to assess how data quality impacts revenue and risk, and then finally, you'll synthesize this research and communicate the ROI to the wider organization and leadership.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (2)
> **Code Keywords:** finally, (1)
> **Env Vars:** roi (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Thought exercise: Ecommerce
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-e-commerce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-e-commerce?u=76281980&t=0)** - [Instructor] To help you make sense of how to connect data quality to business outcomes, I've created this thought exercise of a fictional ecommerce company where you are the data leader at Sell Things Inc., where it was just announced in a recent company-wide meeting that a strategic objective is to increase vendor retention by 10%.
>
> **[0:18](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-e-commerce?u=76281980&t=18)** You believe that improving data quality would be a major driver in hitting this company objective.
>
> **[0:24](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-e-commerce?u=76281980&t=24)** You begin researching and building a proposal for a data quality initiative.
>
> **[0:29](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-e-commerce?u=76281980&t=29)** With this framing, we're now going to move forward with each step that I presented in the previous video to give you a taste of how to really connect data quality to business outcomes and to get buy-in.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Thought exercise: Understand the business model
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-understand-the-business-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-understand-the-business-model?u=76281980&t=0)** - [Instructor] The first step is to understand your business model.
>
> **[0:04](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-understand-the-business-model?u=76281980&t=4)** For the stock exercise, Sell Things Inc.'s business model aligns with a typical e-commerce organization, where they provide a marketplace for third-party vendors to sell items and consumers to purchase those items.
>
> **[0:16](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-understand-the-business-model?u=76281980&t=16)** Its revenue comes from two specific areas.
>
> **[0:19](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-understand-the-business-model?u=76281980&t=19)** First, platform fees from vendors so, that way, they can join the marketplace.
>
> **[0:25](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-understand-the-business-model?u=76281980&t=25)** And then, second, a percentage of any sale made on the platform goes to Sell Things Inc.
>
> **[0:31](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-understand-the-business-model?u=76281980&t=31)** In summary, the more vendors and items from the vendors, the stronger the marketplace.
>
> **[0:37](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-understand-the-business-model?u=76281980&t=37)** Now, take a second and think how data quality can tie to this before moving on to the next video.

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### Thought exercise: Map your data lifecycle
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980&t=0)** - [Instructor] The second step is to map your data lifecycle.
>
> **[0:03](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980&t=3)** Now, if you're not super technical, don't worry, we won't dive too deep into this.
>
> **[0:08](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980&t=8)** It's just more so to show you a high level of how data represents the business model.
>
> **[0:13](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980&t=13)** So for Sell Things Inc, their goal is to have a marketplace that they can sell items on and that vendors can be on.
>
> **[0:20](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980&t=20)** In this architecture diagram, you have your website, which is the e-commerce platform, and then you have various microservices.
>
> **[0:26](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980&t=26)** So you have the shopping cart, you have search, you have the homepage.
>
> **[0:30](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980&t=30)** Those have a set events that go through a message broker that's replicated into a data lake, and that data lake serves as a source where all this data can be combined, such as third party data from Salesforce, which includes vendor information.
>
> **[0:44](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980&t=44)** That data is then funneled into ML models to give predictions that are funneled back into search and the homepage to give predictions.
>
> **[0:52](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980&t=52)** So if you've ever been on any marketplace and they give recommended items, that's typically ML model in the background.
>
> **[0:58](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980&t=58)** The data in the data lake is then replicated in a data warehouse where typical analytics are used by the business to make product decisions or business decisions.
>
> **[1:07](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980&t=67)** Now, don't worry, you don't need to fully understand this, but the main thing I want to get across is that there is a chain of events and various teams across this chain of events that will result in the stakeholders, the data lifecycle, and how are things impacted.
>
> **[1:24](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-map-your-data-lifecycle?u=76281980&t=84)** In the next slide, we'll go over the various stakeholders we have for this thought exercise, and then we'll also map them back to this diagram.

> [!info]- Semantic Content
>
> **Code Keywords:** super (1), this. (1), this, (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Thought exercise: Identify your stakeholders
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-identify-your-stakeholders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-identify-your-stakeholders?u=76281980&t=0)** - [Instructor] The third step is to identify your key stakeholders within the data lifecycle.
>
> **[0:05](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-identify-your-stakeholders?u=76281980&t=5)** For our thought exercise, the four key teams that we have are the software engineers on the carts team, data science and ML engineers on the recommendations team, UX on the shopping workflows team, and then customer success for the vendor relations team.
>
> **[0:19](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-identify-your-stakeholders?u=76281980&t=19)** Now, this may not make too much sense just quite yet, but in the next slide, I've taken back that diagram we had in the previous video and imposed these teams on there to give you an idea of where they fit on the data lifecycle.
>
> **[0:31](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-identify-your-stakeholders?u=76281980&t=31)** So for the UX team who manage workflows, they're on the website, they're a part of the search and homepage microservices, and on the other side they have analytics where they have product analytics to make decisions such as AB testing.
>
> **[0:44](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-identify-your-stakeholders?u=76281980&t=44)** For the carts team, the software engineers are in the shopping cart microservice.
>
> **[0:49](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-identify-your-stakeholders?u=76281980&t=49)** For the machine learning engineers and data scientists, they live within the ML model area, pulling data from the data lake.
>
> **[0:56](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-identify-your-stakeholders?u=76281980&t=56)** And then finally, the business users for the vendor relations team is going to be in Salesforce where they're keeping track of their engagements with their vendors.
>
> **[1:05](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-identify-your-stakeholders?u=76281980&t=65)** In the next step, we'll see how these various teams within the data lifecycle drive revenue or mitigate risk.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (2), previous video (1)
> **CLI Commands:** make (2)
> **Code Keywords:** finally, (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Thought exercise: Evaluate how stakeholders drive revenue
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-evaluate-how-stakeholders-drives-revenue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-evaluate-how-stakeholders-drives-revenue?u=76281980&t=0)** - [Instructor] In the fourth step, we're going to evaluate how our stakeholders drive revenue or mitigate risks.
>
> **[0:05](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-evaluate-how-stakeholders-drives-revenue?u=76281980&t=5)** These are the main levers of getting buy-in from leadership to put money towards data quality.
>
> **[0:12](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-evaluate-how-stakeholders-drives-revenue?u=76281980&t=12)** And so the carts team, they manage the code related to carts and the checkout.
>
> **[0:17](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-evaluate-how-stakeholders-drives-revenue?u=76281980&t=17)** For the recommendations team, they manage the ML model that recommends items.
>
> **[0:23](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-evaluate-how-stakeholders-drives-revenue?u=76281980&t=23)** For the shopping workflows team, they manage customer shopping experience.
>
> **[0:27](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-evaluate-how-stakeholders-drives-revenue?u=76281980&t=27)** And the vendor relations team, they manage vendors when things go wrong.
>
> **[0:31](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-evaluate-how-stakeholders-drives-revenue?u=76281980&t=31)** Now, this is a high level of what they do, but in the next step, we'll connect how they're related to each other and how they depend on each other, and how it impacts data quality.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Thought exercise: Assess how DQ impacts revenue and risk
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-assess-how-dq-impacts-revenue-and-risk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-assess-how-dq-impacts-revenue-and-risk?u=76281980&t=0)** - [Instructor] In the fifth step, we assess how data quality impacts revenue and risk for these teams.
>
> **[0:05](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-assess-how-dq-impacts-revenue-and-risk?u=76281980&t=5)** So for the carts team, they focus on logging within the carts and it's essential for machine learning and product analytics.
>
> **[0:13](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-assess-how-dq-impacts-revenue-and-risk?u=76281980&t=13)** The recommendations team takes this data where increase ML accuracy increases sales 'cause they're recommending better products For the shopping workflows team, reduce UX friction also increases sales, and they depend heavily on the logging from the carts team.
>
> **[0:28](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-assess-how-dq-impacts-revenue-and-risk?u=76281980&t=28)** And then finally, for the vendor relations team, increase sales results, increase vendor use.
>
> **[0:34](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-assess-how-dq-impacts-revenue-and-risk?u=76281980&t=34)** If vendors are selling more products to customers, they're going to be happy and stay on the platform.
>
> **[0:39](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-assess-how-dq-impacts-revenue-and-risk?u=76281980&t=39)** Finally, we're going to tie this all together in the next video to synthesize that as a proposal for leadership to invest into the data quality initiative.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Thought exercise: Synthesize research and communicate ROI
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=0)** - [Instructor] In the sixth and final step, you're going to synthesize your research and communicate the ROI to the wider business, and specifically the executive team.
>
> **[0:09](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=9)** For this thought exercise, you went to the product analytics and found this key piece of information.
>
> **[0:15](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=15)** The main driver of vendor retention is average weekly sales, which is impacted by first, a reduction in abandoned carts, and second, the quality of product recommendations to users.
>
> **[0:27](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=27)** One key caveat though is that both of these are powered by the logging data from the carts team, which was establish well before the recommendations and workflows teams.
>
> **[0:39](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=39)** In other words, the data did not account for this business use case and now is impacting the data quality.
>
> **[0:45](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=45)** Thus, as a leader, you propose investment into the carts team to initiate a refactor to improve their logging reliability, which is another way of saying, improving their data quality.
>
> **[0:55](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=55)** This would improve vendor retention because this improved data quality and logging would improve the ML models, therefore the recommendations.
>
> **[1:04](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=64)** And improve the product analytics, and therefore the product experience.
>
> **[1:09](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=69)** Finally, this is all kind of theoretical.
>
> **[1:12](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=72)** You need to put numbers to it for executives teams to pay attention.
>
> **[1:16](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=76)** Now, this is completely made up.
>
> **[1:18](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=78)** This is back of the napkin math, but it'll give you a sense of how to put these numbers to a story.
>
> **[1:24](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=84)** So for example, say for instance, we have 10,000 vendors with a average yearly sales of 100k per vendor.
>
> **[1:31](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=91)** That means that on the platform they're selling about a billion dollars worth of products.
>
> **[1:36](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=96)** Remember that for the business model, they get a sales fee for everything sold on the platform.
>
> **[1:42](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=102)** Well, it's 3%.
>
> **[1:43](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=103)** So 3% of 1 billion is $30 million in yearly revenue.
>
> **[1:48](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=108)** Now remember, the strategic goal is that they want to prevent vendor churn by 10%.
>
> **[1:54](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=114)** Another way to say that is they want to prevent losing $3 million.
>
> **[1:59](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=119)** And finally, this is how you get to the number to how much you should invest in your data quality initiative.
>
> **[2:04](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=124)** Ideally, you could say, we propose that we can save 3 million, so therefore we should get 3 million for the data quality initiative.
>
> **[2:10](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=130)** Unfortunately, it does not work that way.
>
> **[2:12](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=132)** The executive team is looking for ROI in the high hundreds of percents.
>
> **[2:16](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=136)** So I set it to 400%, and so a 400% ROI on 3 million is 600k.
>
> **[2:23](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=143)** So therefore, can you improve the logging of a specific team that impacts the rest of the data quality for 600k?
>
> **[2:32](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=152)** And if you are successful, could it improve vendor churn by 10%?
>
> **[2:36](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=156)** If yes, you have a very compelling argument for the executive team to invest in your initiative.
>
> **[2:41](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=161)** Now, this is all just high-level napkin math, but it's like a puzzle.
>
> **[2:46](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=166)** You get all these pieces together and you see how they all fit to make everyone happy to engage in data quality.
>
> **[2:53](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=173)** And if you notice, the end result didn't even call out data quality specifically, it was the business impact and relaying that to data quality that gets the buy-in.
>
> **[3:03](https://www.linkedin.com/learning/data-quality-core-concepts/thought-exercise-synthesize-research-and-communicate-roi?u=76281980&t=183)** That completes chapter one, and in the next chapter, we're going to be going over stakeholders and trolling to give you a better understanding of the data landscape that you'll find within your organization.

> [!info]- Semantic Content
>
> **Env Vars:** roi (3)
> **Analogies:** for example (1), for instance (1), it's like (1)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** finally, (2)
> **Definitions:** in other words (1), means that (1)
> **Cross-References:** in the next (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)


### 2. Data Quality Across the Data Lifecycle

#### Data lifecycle introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-introduction?u=76281980&t=0)** - In this chapter, we're going to learn about the data life cycle and the various stakeholders you'll encounter across it.
>
> **[0:06](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-introduction?u=76281980&t=6)** Within this life cycle, we'll cover how business strategy is turned into data acquisition, how data acquisition is stored within databases, how it's used for analytics and R&D, and how it's finally served to the rest of the business.
>
> **[0:20](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-introduction?u=76281980&t=20)** The data life cycle covering this chapter will serve as the foundation for the rest of the course, and it'll be something we'll be referencing throughout the various videos.

> [!info]- Semantic Content
>
> **Speakers:** - in (1)

#### Data lifecycle overview
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=0)** - [Instructor] In the last chapters, we talked heavily about the data lifecycle and its stakeholders.
>
> **[0:06](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=6)** In this chapter, we're going to dive deep into actually who they are and where they sit within the data lifecycle.
>
> **[0:12](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=12)** And at a high level, this is the data lifecycle.
>
> **[0:16](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=16)** Now, typically, you'll see this as a architecture diagram of various data stacks, but to make this more accessible, I've abstracted that to the main kind of categories.
>
> **[0:25](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=25)** Now, it may be different for various different companies, but this is the general pattern I've seen.
>
> **[0:32](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=32)** So you start off with the business strategy.
>
> **[0:34](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=34)** What is the point of having the data?
>
> **[0:37](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=37)** Why do we need data?
>
> **[0:38](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=38)** Why are we investing so much into it?
>
> **[0:40](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=40)** Next is data creation.
>
> **[0:42](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=42)** Whether you're collecting data from a survey, maybe you have login within your product, or you're acquiring the data from a broker or a third party to ingest into your database.
>
> **[0:52](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=52)** From there, it goes into a transactional database.
>
> **[0:55](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=55)** These databases are intended to move really quick to pull information and reference.
>
> **[1:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=60)** So say, for instance, you're on a website.
>
> **[1:02](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=62)** The reason why it's able to pull up information in subseconds is because it's structured for a transactional database.
>
> **[1:08](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=68)** Then you typically have replication through ETL or ELT pipelines that go into a analytical database.
>
> **[1:15](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=75)** The analytical database is similar to the transactional database as it has the same data, but it's structured in a different way to allow aggregates and informed decision making, and it separates the transactions that are critical for the product or main service from analytics that are heavy workflows on memory.
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=94)** Next, analytical databases are often restructured into what people may call data marts, data warehouse.
>
> **[1:40](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=100)** There's various names for it.
>
> **[1:42](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=102)** From those data marts, those are like clean, processed, high-quality data.
>
> **[1:46](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=106)** They do analytics and R&D, such as like machine learning models.
>
> **[1:50](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=110)** From there, once they have a good idea of what to do, what they want to build, they actually make full-on data products.
>
> **[1:56](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=116)** So this would be ML models that make it into the product.
>
> **[1:59](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=119)** It can be maybe a dashboard, or it can be reports they give out to their customers.
>
> **[2:03](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=123)** And then finally, that data is consumed, either by internal business stakeholders or by external customers.
>
> **[2:10](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-overview?u=76281980&t=130)** In the next few slides, we're going to go through each one of these stakeholders and talk more in depth of how they work within the data lifecycle.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Analogies:** for instance (1), similar to (1), such as (1)
> **Env Vars:** etl (1), elt (1)
> **Cross-References:** in the last (1), in the next (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### Data lifecycle stakeholders: Business
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-business?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-business?u=76281980&t=0)** - [Instructor] The first set of individuals that we want to call out in the data lifecycle are business stakeholders.
>
> **[0:06](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-business?u=76281980&t=6)** They're going to be typically at the end, after the data's all processed, after the data's formatted in a nice way in a dashboard, and they're often very removed from the various steps in the lifecycle to make the data accessible to them.
>
> **[0:20](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-business?u=76281980&t=20)** They're going to be focused heavily on operationalizing the data, making insights off of it in decisions, and they're often the first people to bring up data quality issues if you don't have checks in place, which is not the best feeling as a data person.
>
> **[0:35](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-business?u=76281980&t=35)** In addition, there's a specific type of business stakeholder that's important, which are the executives.
>
> **[0:42](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-business?u=76281980&t=42)** This stakeholder also consumes the data at the end, but they're the ones defining the business strategy that inform the business logic that's represented within the data, as well as what goals that you want to achieve and therefore what you need align your data quality to.
>
> **[0:59](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-business?u=76281980&t=59)** And then finally, for these type of business users, we have external customers and users.
>
> **[1:04](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-business?u=76281980&t=64)** So this may be a business user who's reviewing the data, maybe in your product or they're receiving a report, or there may not even be a business person, but an actual user of the product, such as a business to consumer product.
>
> **[1:19](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-business?u=76281980&t=79)** So say for instance, you're on LinkedIn, you get analytics on your posts or other various things within the platform, that is an example of you being a consumer of data.

> [!info]- Semantic Content
>
> **Analogies:** such as (1), for instance (1)
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Data lifecycle stakeholders: Engineers
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=0)** - [Instructor] The next set of stakeholders we have within the data lifecycle are the various types of engineers.
>
> **[0:05](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=5)** Now, the first set of engineers I want to talk about are typically front end, back end, DevOps, or maybe they're full stack.
>
> **[0:12](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=12)** And these are the people that are often creating the systems that generate the data or store the data in the transactional database.
>
> **[0:20](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=20)** (inhales) And further down, they often are involved in the data processes except when it's turned into a data product and then it's pulled back into the product and referenced in the transactional database.
>
> **[0:31](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=31)** These individuals are key to data quality, because they're the ones creating the data, but they're also really hard to bring into data quality because their constraints aren't related to data, it's related to software.
>
> **[0:45](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=45)** Engineers that do focus on data though are data engineers and analytics engineers.
>
> **[0:50](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=50)** And they're unique, they're growing across the entire data life cycle, because they're focused on the movement and structuring of data throughout the data life cycle.
>
> **[1:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=60)** Now, they do touch everything across this, but they're not going to be going as deep as, say, for instance, a software engineer for certain databases or a ML engineer for various ML models.
>
> **[1:12](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=72)** But if data's moving from point A to point B, or is being transformed for a specific process, a data engineer or analytics engineer is most likely involved in the business.
>
> **[1:22](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=82)** One key thing to note is that if you're low on your data maturity cycle, essentially data engineers, analytic engineers are a specialized role, and software engineers may be doing this role in the beginning.
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=94)** And then finally, we have ML/AI engineers.
>
> **[1:38](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=98)** These are the people who are taking the R&D models from machine learning and putting it into production and creating the operations to make it available to people outside the business, within the product.
>
> **[1:50](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=110)** These are a very hot role, right now, with generative AI, and there's so much work that goes beyond just creating the AI model, such as making sure it stays up, making sure there's quality issues resolved, making sure that it stays safe.
>
> **[2:03](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-engineers?u=76281980&t=123)** These are what these ML engineers and AI engineers are focused on.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), finally, (1)
> **Analogies:** for instance (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Data lifecycle stakeholders: Data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-data?u=76281980&t=0)** - [Instructor] Finally, we have the data stakeholders.
>
> **[0:03](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-data?u=76281980&t=3)** One of the first hires for any data org is often a data analyst and where they sit is they take the curated data, often found in an analytical database, and turn it into insights, such as analytics or dashboards.
>
> **[0:17](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-data?u=76281980&t=17)** Then we have data scientists who have a very similar role, but with a focus on developing data products.
>
> **[0:24](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-data?u=76281980&t=24)** Again, they use the curated data from marts or warehouses where it may be, they do analytics and R&D, such as building machine learning models, and then they help with other engineers to put it into production.
>
> **[0:36](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-data?u=76281980&t=36)** One key difference between analysts and data scientists is analysts are often looking back at what happened to the business, while scientists are often looking forward to what they can do with the data.
>
> **[0:48](https://www.linkedin.com/learning/data-quality-core-concepts/data-lifecycle-stakeholders-data?u=76281980&t=48)** In the next set of slides, we'll move away from stakeholders and start going to the tooling used to support data quality.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **Code Keywords:** finally, (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### DQ across the lifecycle: Business strategy
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=0)** - [Instructor] Now that we've talked about the data lifecycle and the stakeholders within it, we can start diving into the data quality across the lifecycle.
>
> **[0:08](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=8)** Again, we're going to take this lifecycle and go through it one by one.
>
> **[0:13](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=13)** The first one being business strategy.
>
> **[0:15](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=15)** There's three key aspects.
>
> **[0:17](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=17)** Value creation, risk mitigation, and metrics planning.
>
> **[0:22](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=22)** Now, this is a oversimplification, but these are the core aspects that I think are tied to data quality.
>
> **[0:28](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=28)** For value creation, how can the organization leverage data to create a competitive advantage?
>
> **[0:35](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=35)** This is important because positioning data quality as a key enabler of a value creation initiative is critical for getting funding for that data quality initiative.
>
> **[0:45](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=45)** And you can think of this as a carrot within the org.
>
> **[0:48](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=48)** Now, the quote, unquote, "stick" of data quality is risk mitigation.
>
> **[0:54](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=54)** What are the risks to the business for not handling data properly or being negatively impacted by poor data quality?
>
> **[1:03](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=63)** So for example, maybe there's a regulatory aspect where if you don't report the data, you'll get fined.
>
> **[1:08](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=68)** Or if you don't handle the data securely, you'll get fined as well.
>
> **[1:13](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=73)** For example, banks have to deal with this all the time as well as healthcare providers.
>
> **[1:19](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=79)** Another aspect of this, maybe you have poor data quality, which leads to poor business decisions, right?
>
> **[1:25](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=85)** Positioning data quality as a key enabler of a risk mitigation initiative is critical for persuading changes to the culture and processes.
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=94)** So value creation, tied to getting funding, risk mitigation, getting people to change their habits 'cause they're scared of losing money.
>
> **[1:44](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=104)** And then finally, metrics planning.
>
> **[1:47](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=107)** All this strategy by the executives is being distilled into key metrics, and I think this quote from Peter Drucker summarizes it best.
>
> **[1:55](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-business-strategy?u=76281980&t=115)** "What gets measured gets managed."

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), finally, (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### DQ across the lifecycle: Data creation
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=0)** - [Instructor] The next stage in the data lifecycle is data creation and acquisition.
>
> **[0:05](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=5)** For this video, we're going to focus only on the data creation side, and there's four key aspects: survey design, capture workflows with people, capture workflows of product, and then finally self-generated data.
>
> **[0:18](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=18)** First, we have survey design, which is one of the original data collection methods that we've had and that I feel most non-technical people are familiar with.
>
> **[0:30](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=30)** "The questions you ask and the way in which you structure the survey greatly impact the data you collect" and what you're able to do afterwards.
>
> **[0:40](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=40)** Another consideration is that "self-reported data is often not the most reliable, so you have to put in extra efforts to mitigate issues" to prevent bad data collection.
>
> **[0:52](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=52)** So an example would be like if someone in a multiple choice just chose A for everything.
>
> **[0:57](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=57)** Maybe you did something wrong in your server design to push someone to do that.
>
> **[1:03](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=63)** Examples of server design include intake forms, customer feedback, various things where you're getting information and the individual is putting the data in themselves.
>
> **[1:14](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=74)** Another aspect of data capture is workflows with people.
>
> **[1:18](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=78)** So "sometimes it's not realistic to have data captured through technology," and instead it has to be captured via processes.
>
> **[1:24](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=84)** I think a great example of this is the US census where they have people go to houses, bring the surveys with them, ask questions, and fill it out for them.
>
> **[1:36](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=96)** "Similar to survey design, there's an extra component of training staff and having the reliability interviewer," also known as fidelity.
>
> **[1:46](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=106)** On the other side with technology, we have capture workflows for product, and this is "anywhere in the product where a user provides information, such as free text, selection," whatever it may be.
>
> **[1:57](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=117)** I think a great example of this are like onboarding workflows.
>
> **[2:01](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=121)** It's "similar to survey design, but there's an extra component of UX impacting how data's collected."
>
> **[2:07](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=127)** For example, if you've ever been on a website and it's been a horrible experience for you, you are often just struggling to put your information in, and you may just give up.
>
> **[2:17](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=137)** Or you may just put in random information just to get by.
>
> **[2:21](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=141)** Finally, we have self-generated data, and this is "captured data that is generated via an organization's software product or its processes."
>
> **[2:28](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=148)** So machine telemetry, logging on a website, or even the documents generated by the business.
>
> **[2:34](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-creation?u=76281980&t=154)** And for data quality, the "business has the most control over this data and therefore its data quality."

> [!info]- Semantic Content
>
> **Code Keywords:** self (3), finally, (1)
> **Analogies:** similar to (2), such as (1), for example (1)
> **UI Navigation:** go to (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### DQ across the lifecycle: Data acquisition
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=0)** - [Instructor] The other side of generating data is the acquisition of data from third parties.
>
> **[0:06](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=6)** From this, you have third-party data, APIs, and also Secure File Transfer Protocols.
>
> **[0:13](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=13)** For third-party data, it's any data that is not generated from an organization's respective products, processes or workflows.
>
> **[0:20](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=20)** Examples of this could be data brokers, data files from a client or accessing data from an API.
>
> **[0:27](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=27)** The challenge with this for data quality is that most organizations lack control of these data sources except when they may have a contractual agreement such as the SLAs or a requirement for a data quality level.
>
> **[0:40](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=40)** One of the best examples of this are APIs.
>
> **[0:43](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=43)** APIs are essentially data that is accessible programmatically, whether it's an internal service from an organization or a third-party source.
>
> **[0:51](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=51)** Data sourced from APIs are typically pretty stable as they provide a standardized way to access data and they most likely include documentation.
>
> **[1:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=60)** But data quality issues arise when there are API changes.
>
> **[1:04](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=64)** There's been numerous times where I've been working with the API as a data engineer and it works at one time and maybe six months later, they make a major change to the API, the schema changes and now my pipeline's broken, or it can be on the other side where the API is just not well-managed and there's very little documentation, so, I have to make a lot of assumptions.
>
> **[1:28](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=88)** While the challenges with this as stated is that you don't control it.
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=94)** Another form of third-party data is Secure File Transfer Protocols or SFTP.
>
> **[1:39](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=99)** Now, this one is a little bit older, but I argue that you'll find this in many traditional businesses.
>
> **[1:48](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=108)** And what essentially happens is if you need to send sensitive data from one party to another, SFTP is often used, especially when it's business to business.
>
> **[1:59](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=119)** An example, would be like a HR department sending their health insurance information of new employees.
>
> **[2:04](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=124)** Another way is (inhales) if you are sending sensitive information regarding contracts from one business to another.
>
> **[2:13](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-acquisition?u=76281980&t=133)** Since it's files, many times Excel files (inhales), people and process are likely the only ways you can really enforce data quality for this, and that's much harder to do and that gets into the cultural aspect.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), sftp (2)
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** this, (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### DQ across the lifecycle: Transactional databases
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=0)** - [Instructor] Next in the data lifecycle are transactional databases.
>
> **[0:03](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=3)** And the four key areas we want to cover is logging, asset compliance, relational databases, and NoSQL databases.
>
> **[0:11](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=11)** I argue that the foundation of any transactional database is the logs themselves, which are append-only sequence of records that are ordered by time, and they're used to publish and subscribe data to other replicas, so other databases, and the logs enable for consistency across these various replicas, so that way you can have consistent data across different databases.
>
> **[0:34](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=34)** Here is a mock example of how logging could be used.
>
> **[0:37](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=37)** Back when I was a data scientist, I would do product analytics, tracing the logs of people going through specific workflows of a product and seeing where they drop off.
>
> **[0:46](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=46)** On the right, you have an example of JSON, where you can see the timestamp, the event, and the various attributes for that log.
>
> **[0:54](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=54)** Now to summarize, logs at a basic level are an event plus time.
>
> **[0:59](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=59)** They're essential for organizing data within a database and keeping them in sync, and often the foundation for self-generated data, especially for software-related products.
>
> **[1:08](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=68)** And from a data quality standpoint, these logs are the individual data points that you're going to be looking to understand the quality of your data, and for backfills to rebuild historical data.
>
> **[1:20](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=80)** Another key component, speaking of logs, is ACID compliance, which it stands for atomicity, consistency, isolation, and durability.
>
> **[1:31](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=91)** Now, this goes beyond the point of this course, so I highly recommend checking out the resource I provided for this.
>
> **[1:37](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=97)** But for the purpose of data quality, ACID compliance insures for transactional databases, that the data is written in a consistent manner that would be the same across all functions.
>
> **[1:51](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=111)** This is especially helpful for relational databases.
>
> **[1:55](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=115)** And to give you an example, I have a entity relationship diagram, which is essentially a diagram that shows how a relational database is connected with each other for the various tables.
>
> **[2:07](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=127)** For this example is the e-commerce website.
>
> **[2:09](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=129)** One thing I want to highlight here is that the role of having a relational database is to ensure that each row is unique, and it can be connected via primary keys and foreign keys, also known as referential integrity.
>
> **[2:26](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=146)** Another key thing to be aware of are NoSQL databases.
>
> **[2:30](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=150)** And essentially with them, they have no enforced schema and they allow nesting for JSON storage.
>
> **[2:37](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=157)** The thing about data quality is that they're easy to put data into, but very painful to analyze.
>
> **[2:43](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=163)** Now, you may be asking, well then, if this is hard for data quality, why would you use this?
>
> **[2:48](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=168)** Well, it's perfect for transactional databases because as a document store, it groups entities together to make it easy to pull information out of it and present it to the user.
>
> **[2:59](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=179)** So in this example, we have John Doe, and we have their order information, what supplier they came from, and all the other orders they have in the payments.
>
> **[3:08](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=188)** If you're in a relational database, going back here, you can see that you would have to do all these various joins to get that same information, compared to the NoSQL database, it's already in this one group of data that you pull and bring forward into the product.
>
> **[3:26](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-transactional-databases?u=76281980&t=206)** The reason why transactional databases are so important for data quality is often, this is the foundational data that is replicated throughout the entire business and what's going to be forming the basis of the standard of data within your business.

> [!info]- Semantic Content
>
> **Env Vars:** json (2), acid (2)
> **Code Keywords:** self (1), this. (1), from, (1)
> **Definitions:** is a  (1), stands for (1), known as (1)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### DQ across the lifecycle: ETL/ELT pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=0)** - [Instructor] Next in the data lifecycle are ETL and ELT pipelines.
>
> **[0:04](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=4)** And if you've never seen these acronyms before, it stands for Extract, Transform, and Load with ELT being the nuance that the transformation happens at the last step.
>
> **[0:13](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=13)** Now, these are typically for data replication from a transactional database to analytical database, but it could be anywhere where data's moving.
>
> **[0:21](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=21)** The two key ones I want to talk about are batch and streaming.
>
> **[0:25](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=25)** Now, batch is most likely the one you're going to see out in the wild.
>
> **[0:28](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=28)** It's the most common, easiest to do.
>
> **[0:31](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=31)** And one thing to highlight from a data quality perspective is that it's impacted heavily by the data quality dimension of timeliness.
>
> **[0:39](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=39)** When is the expected time that the data will refresh for your dashboard or for your database?
>
> **[0:46](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=46)** Most of my data quality issues when a business stakeholder came to me would be, hey, the data is stale.
>
> **[0:52](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=52)** I don't know what's currently happening.
>
> **[0:54](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=54)** When's the last time the data was updated?
>
> **[0:56](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=56)** This is why batch jobs are so important and making sure that they are happening at an expected interval.
>
> **[1:04](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=64)** More importantly, from a data quality perspective is that when batch jobs are late, it typically highlights that data pipeline is broken, and a data pipeline is broken often due to a data quality issue.
>
> **[1:15](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=75)** The other type of data pipeline is the streaming data pipeline, and this is often used for transactions where there's a high volume and velocity of data.
>
> **[1:24](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=84)** A great example of this are IoT sensors, where doing a batch would just be way too hard and way too expensive to do.
>
> **[1:32](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=92)** Another use case is for analytics, we need a low-latency use case, and the data needs to be consistent across multiple domains.
>
> **[1:40](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=100)** Example is is change data capture.
>
> **[1:42](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=102)** Now past the scope of this course, but one thing I want to highlight here is that streaming data revolves around a immutable log, which has pros and cons.
>
> **[1:52](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=112)** The pros is that the data that is on this log can be read by multiple systems, so it'll be consistent across; the con is is data quality issues get into that immutable log, it is very, very painful to fix.
>
> **[2:07](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-etl-elt-pipelines?u=76281980&t=127)** This is a big reason why you see many teams focusing on batch because it's just a simpler process to deal with.

> [!info]- Semantic Content
>
> **Env Vars:** elt (2), etl (1)
> **Definitions:** stands for (1), is a  (1)
> **Code Keywords:** case, (1)
> **Speakers:** - [instructor] (1)

#### DQ across the lifecycle: Analytical databases
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=0)** - [Instructor] The next stage in a data lifecycle are analytical databases, and I'm going to group data marts because they're often just a subset of the analytical database.
>
> **[0:09](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=9)** Three key analytical databases I want to highlight are data warehouses, data lakes, and data lakehouses.
>
> **[0:17](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=17)** A data warehouse is rooted in a time where databases had to be on-prem and were long and expensive initiatives.
>
> **[0:23](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=23)** Heavy, heavy emphasis on data modeling with Inmon and Kimball being the two main approaches.
>
> **[0:30](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=30)** And if you remember I said data marts in a data lifecycle.
>
> **[0:33](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=33)** That's calling out to how Inmon approaches data warehouses.
>
> **[0:37](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=37)** They're a little less common today, unfortunately, but following their methods greatly reduce data quality issues because so much time upfront is spent on modeling and understanding the data and the business use case for it.
>
> **[0:50](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=50)** The reason why they're not as popular is that cloud data warehouses came about, and cloud computing made it very easy to spin up these analytical databases.
>
> **[0:59](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=59)** And one of the popular ones was data lakes.
>
> **[1:02](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=62)** And the pros and cons are a double-edged sword when it comes to data lakes.
>
> **[1:07](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=67)** For data quality, you can put almost anything into a data lake, which makes it very flexible and great for a first analytical database when you're trying to figure out exactly what your data has value in.
>
> **[1:18](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=78)** The con is you could put almost anything into a data lake, and that's why they're often joked as data swamps.
>
> **[1:25](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=85)** Another pro is it's easy to put data into it, but it's also a con because anyone can just throw data over the fence and put it in to the data lake.
>
> **[1:35](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=95)** Many times software engineers were just, hey, I'll just throw it into the data lake.
>
> **[1:39](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=99)** The data team will figure it out later.
>
> **[1:41](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=101)** And then finally, it can have a high volume of data, which can be huge because it's cheap to store within the data lake, but again, the con is now you have a high volume of data, and when we need to find something, it's like a needle in a haystack.
>
> **[1:56](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=116)** Finally, we have data lakehouses.
>
> **[1:58](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=118)** Those are relatively new architecture emerging for analytical databases.
>
> **[2:02](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=122)** And essentially, what they did was, hey, data warehouses, they have some really great qualities, but it's too expensive and too long to implement.
>
> **[2:11](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=131)** Data lakes, they're very cheap and simple to use, but they're too flexible.
>
> **[2:16](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=136)** We're getting data swamps.
>
> **[2:17](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=137)** We're going to take the best of both and combine it, so we have the flexibility of data lakes, but with the structure of data modeling from data warehouses.
>
> **[2:25](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-analytical-databases?u=76281980&t=145)** Data quality issues arise still here, but it's mainly from either bad data entering, such as schema changes or the bugs with the data transformations when they're modeling it to have those data marks at the end.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (2), finally, (2)
> **Analogies:** it's like (1), such as (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### DQ across the lifecycle: Data analytics and data products
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=0)** - [Instructor] After you have your data curated analytical database, you're able to build analytics and data products off of them.
>
> **[0:06](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=6)** Three key areas are inference and statistics, embedded analytics, and machine learning.
>
> **[0:12](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=12)** For inference to statistics, ideally, data quality doesn't impact the results of statistics, because you spend so much time doing proper data cleaning.
>
> **[0:21](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=21)** Where data quality does impact is the feasibility of conducting statistics or time it takes to clean the data.
>
> **[0:28](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=28)** So if you've ever been asked to do a certain report, but you have to go back to 'em and say, hey, the data quality is not good enough to actually give you a solid answer.
>
> **[0:36](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=36)** That's the example.
>
> **[0:37](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=37)** And to give you a real world example from my career, when I was a data scientist in healthcare, we used to do all these huge big data analytics for pharmaceutical companies.
>
> **[0:47](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=47)** And one day our data broker gave us a report saying that, hey, the data we gave you the past three months was wrong.
>
> **[0:53](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=53)** Here's the correct file.
>
> **[0:55](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=55)** We had to go back to all of our analytical studies and rerun the statistics with the new data to make sure they're still valid.
>
> **[1:03](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=63)** So that's an example of data quality for inference and statistics.
>
> **[1:08](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=68)** Another form of a data product are embedded analytics.
>
> **[1:12](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=72)** And there's similar statistics and visualization, but they're embedded within the product with the purpose is being seen by a user.
>
> **[1:19](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=79)** They bring analytics back into the transactional database, and that increases the complexity of the data lifecycle, and therefore, more opportunities for data quality issues to arise.
>
> **[1:30](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=90)** Another real-world example from me being a data scientist is that used to work in HR tech, and I created the algorithm of product usage for our HR users.
>
> **[1:40](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=100)** I was updating the algorithm one day and one weird thing happened.
>
> **[1:45](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=105)** I deployed the change to the product, but it turns out that it required deployment in two separate databases and only deployed it to one.
>
> **[1:53](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=113)** What ultimately happened was a huge freak out because all the numbers came really wrong, and every customer came emailing us saying, what's wrong?
>
> **[2:02](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=122)** What happened to our users?
>
> **[2:03](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=123)** Why is no one using it?
>
> **[2:05](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=125)** It turns out that I just didn't properly update the lifecycle for the product, and when I made that correction, it was fixed immediately.
>
> **[2:14](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=134)** But again, I want to highlight is that when you move analytics back into the transactional database to serve the product, increases the complexity, and more opportunities for things to go wrong.
>
> **[2:24](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=144)** And then finally, I think this one's probably the most well known or flashy, is machine learning.
>
> **[2:30](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=150)** And one thing that really brought me towards focusing on data quality was Andrew Ing talking about model-centric versus data-centric AI.
>
> **[2:37](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=157)** Where you can spend so much time fine tuning a model for AI, and you can get actually better results much quicker if instead of focusing on the model, you clean the data.
>
> **[2:48](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=168)** One key thing for data quality here is that it's heavily influenced by data drift, which we'll cover in later videos.
>
> **[2:55](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=175)** But essentially it's shifts in how the data is structured, the distribution, the way it's captured can definitely impact machine learning and the results it gives.
>
> **[3:05](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=185)** And it's similar to embedded analytics that increases the complexity, 'cause you have to serve the ML model's predictions back into the transactional database and into the user's surface area.
>
> **[3:16](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=196)** One thing to highlight here is that machine learning happens at scale.
>
> **[3:21](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=201)** And so data quality issues can quickly amplify with machine learning models, because now you have wrong data shifting entire model, and then shifting the results from major components of your product.
>
> **[3:35](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=215)** So that's why data quality is very important for machine learning.
>
> **[3:38](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-analytics-and-data-products?u=76281980&t=218)** And many times there's instances where it costs companies hundreds of thousands or millions of dollars if they get it wrong.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### DQ across the lifecycle: Data/insights consumption
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=0)** - [Instructor] Finally, in the data lifecycle, we have consumption of the data itself and insights.
>
> **[0:05](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=5)** Three key areas I want to highlight is reporting, dashboards, and data brokers.
>
> **[0:11](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=11)** Reporting, I see three areas when it comes to data quality.
>
> **[0:14](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=14)** You have low stakes where it's internal reporting within the business.
>
> **[0:17](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=17)** If you get it wrong, maybe you lose trust, but it's something you can rebuild.
>
> **[0:22](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=22)** And oftentimes there's a lot of checks and balances to make sure you don't make a very bad decision.
>
> **[0:27](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=27)** The next stage is medium stakes.
>
> **[0:29](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=29)** It's external reporting to a customer.
>
> **[0:32](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=32)** Now, if you get it wrong and they notice, sometimes you may get a fee, maybe they don't want to purchase from you again, or they may require you to go run the process again, which will cost you money.
>
> **[0:42](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=42)** Finally, we have the high-stakes reporting.
>
> **[0:45](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=45)** And this is when you're reporting to a regulatory body.
>
> **[0:48](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=48)** Remember the nightmare scenarios I told you of data quality from chapter one?
>
> **[0:52](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=52)** This is exactly it.
>
> **[0:54](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=54)** If we report the wrong data to a regulatory body, you're probably going to receive a very big fine, and you may end up on the news.
>
> **[1:02](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=62)** Very high stakes when it comes to reporting.
>
> **[1:05](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=65)** Next is we have dashboards, and dashboards are where business stakeholders are often the most exposed to data and therefore data-quality issues.
>
> **[1:15](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=75)** Many times, this is where data quality issues are first noticed as an individual, because the business stakeholders are looking at it with their own domain knowledge, and so they know the fitness of use for the business; and they can see quickly if it's matching their expectations or not.
>
> **[1:30](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=90)** One key trap that I would really look out for though is if they don't have a trust in the data organization, it can be the correct data, but they have their own perceived notions where data should be.
>
> **[1:44](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=104)** And so it may not be a data-quality issue, it can be a data-culture issue.
>
> **[1:48](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=108)** It's a big reason why having data quality checks is very powerful, because then you can go back and say, "We believe the data is of high quality.
>
> **[1:56](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=116)** The numbers you're seeing are just actually that bad."
>
> **[1:58](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=118)** Finally, we have data brokers.
>
> **[2:01](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=121)** And these are organizations that collect data and package it to sell to other parties.
>
> **[2:05](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=125)** So if you've ever had various ads sent to you, it's because the whole internet's collecting all your data, is being sold to other people.
>
> **[2:13](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=133)** Often it's contractually tied to a certain SLA of deliverability and a level of quality, where if they do not meet that standard, they will be fined or breach of contract.
>
> **[2:24](https://www.linkedin.com/learning/data-quality-core-concepts/dq-across-the-lifecycle-data-insights-consumption?u=76281980&t=144)** On the other side of you receiving data from data broker, as I mentioned before, you may not have much control of the data quality beyond the contract itself.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), require (1)
> **CLI Commands:** make (2), go run (1)
> **Env Vars:** sla (1)
> **Speakers:** - [instructor] (1)


### 3. Common Data Quality Issues and How to Measure Them

#### Introduction to issues and measurements
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/introduction-to-issues-and-measurements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/introduction-to-issues-and-measurements?u=76281980&t=0)** - In this chapter, we'll provide an overview of what root cause analysis looks like for data quality and the various symptoms you'll see when exploring these problems.
>
> **[0:09](https://www.linkedin.com/learning/data-quality-core-concepts/introduction-to-issues-and-measurements?u=76281980&t=9)** Finally, we'll learn how to measure these data quality issues and tie it back to the business.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Speakers:** - in (1)

#### Root cause analysis: RCA
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980&t=0)** - [Instructor] Now that we know the various stages of the data life cycle and the stakeholders within them, we can start exploring how we can find data quality issues within it.
>
> **[0:08](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980&t=8)** Another way of describing this is called root cause analysis, or RCA.
>
> **[0:12](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980&t=12)** And this is my approach for RCA.
>
> **[0:16](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980&t=16)** It's the first step is the stakeholder surface the issue.
>
> **[0:19](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980&t=19)** From there, you triage the issue, you do the scoping and the requirements to solve it, you try replicating the data quality problem, you then go and find the problem data set, and you profile the data.
>
> **[0:32](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980&t=32)** You investigate the data pipelines that are downstream the analytical databases.
>
> **[0:36](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980&t=36)** If warranted, then you go upstream into the transactional database to understand what's going wrong.
>
> **[0:41](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980&t=41)** And then finally, you consult the various technical stakeholders within the data lifecycle impacted.
>
> **[0:47](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980&t=47)** Now these steps are based on an article called "The Data Quality Resolution Process," which I wrote last year, which is a very long article that goes into much depth about this.
>
> **[0:56](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980&t=56)** I've included a link to this, which I highly recommend checking out if you want to learn more.
>
> **[1:00](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980&t=60)** It includes code examples and data examples as well.
>
> **[1:04](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980&t=64)** From there, these are the five top signals of data quality issues I've seen when doing root cause analysis.
>
> **[1:10](https://www.linkedin.com/learning/data-quality-core-concepts/root-cause-analysis-rca?u=76281980&t=70)** The first one being null rates, the second being data freshness and timeliness issues, the third being schema changes, the fourth being data transformation bugs, and then finally, data drift.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), this. (1), this, (1)
> **CLI Commands:** find (2)
> **Env Vars:** rca (2)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Null rates
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=0)** - [Instructor] I argue that one of the most important data quality signals to look for are null rates.
>
> **[0:06](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=6)** Now, nulls are extremely important because they represent missingness due to data loss or non-inner joins where there's no matching values.
>
> **[0:16](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=16)** And another caveat is intentionally stating that the value is not present.
>
> **[0:21](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=21)** Nulls are often the first attribute I check when doing root cause analysis for data quality issues.
>
> **[0:26](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=26)** And so I'll pull up SQL, I'll go to a database and I'll check for null values and group by the dates.
>
> **[0:33](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=33)** Now, there's various type of nulls.
>
> **[0:35](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=35)** There are true nulls, so all nulls are not bad.
>
> **[0:38](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=38)** A lack of information is a data point in itself.
>
> **[0:41](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=41)** Examples of this could be a demographic's not applicable in a survey.
>
> **[0:45](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=45)** Maybe there's drop off in the product funnel, or people intentionally identifying where joins don't match.
>
> **[0:52](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=52)** So say for instance, I was doing analysis where I wanted to see if a user visited and when did they drop off for a certain date.
>
> **[1:01](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=61)** I would merge the information on the various event points and see where the nulls were, and that'll be useful information itself.
>
> **[1:09](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=69)** Another form of nulls is nulls from data collection issues.
>
> **[1:13](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=73)** So your survey may be designed poorly or not administered well, leading to drop off or missing responses, or maybe logging in the software may time out or a system may crash, resulting in permanent loss of data, another huge signal for data quality issues.
>
> **[1:31](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=91)** Another form of nulls is due for transformations.
>
> **[1:34](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=94)** So transformations of data requires assumptions about the business logic, and you may misinterpret assumptions or have unintentional bugs, which can result in wrong data, which can include nulls.
>
> **[1:46](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=106)** So drop off of data values.
>
> **[1:48](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=108)** And then finally, I think this is one of the more common data quality issues when it comes to nulls, is from upstream schema changes.
>
> **[1:55](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=115)** So transformations in analytical database make assumptions on expectations of the upstream data schema.
>
> **[2:01](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=121)** And it's not uncommon for a column just to be dropped or deprecated for a new column without any communication because the upstream engineers have no idea that analytics is using it, they're focused on the product.
>
> **[2:13](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=133)** So best case scenario when that happens is that it'll cause a pipeline to loudly break.
>
> **[2:19](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=139)** So remember when the ETL pipeline goes down, that'll be example.
>
> **[2:22](https://www.linkedin.com/learning/data-quality-core-concepts/null-rates?u=76281980&t=142)** The worst case scenario and the most painful ones I've experienced is when it creates a silent failure, which propagates nulls throughout the database, replicate it in the analytical database, and ultimately in my dashboard with my stakeholders saying, Hey, what's wrong with the data?

> [!info]- Semantic Content
>
> **Code Keywords:** match. (1), finally, (1), break. (1)
> **Env Vars:** sql (1), etl (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### Data freshness and timeliness
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-freshness-and-timeliness?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-freshness-and-timeliness?u=76281980&t=0)** - The second major signal I look for for data quality issues is data freshness and timeliness.
>
> **[0:06](https://www.linkedin.com/learning/data-quality-core-concepts/data-freshness-and-timeliness?u=76281980&t=6)** Timestamps are extremely important for data quality, because in addition to nulls, they provide major clues for data quality issues, specifically trends and when I do that, I often go aggregate timestamps by a year, month, or some other window of time, which narrows down which set of logs to review for for root cause analysis.
>
> **[0:27](https://www.linkedin.com/learning/data-quality-core-concepts/data-freshness-and-timeliness?u=76281980&t=27)** So if I'm looking for drop off, what I would do for historical data is I will group a specific attribute by month and see, okay, January, February, March, the data looks great, but in April, all of a sudden the data drops to zero and then the following month it goes back to the regular cadence.
>
> **[0:47](https://www.linkedin.com/learning/data-quality-core-concepts/data-freshness-and-timeliness?u=76281980&t=47)** For me, that would be a huge signal that hey, something really weird happened in that month, let me go check the logs of what happened there.
>
> **[0:56](https://www.linkedin.com/learning/data-quality-core-concepts/data-freshness-and-timeliness?u=76281980&t=56)** During that time period, maybe go, let's check the code of what changes happened, maybe some weird vendor issue happened that time.
>
> **[1:03](https://www.linkedin.com/learning/data-quality-core-concepts/data-freshness-and-timeliness?u=76281980&t=63)** Timestamps give you a strong signal to narrow down where do your root cause analysis happen.
>
> **[1:09](https://www.linkedin.com/learning/data-quality-core-concepts/data-freshness-and-timeliness?u=76281980&t=69)** Another key thing I want to highlight is that there is a huge difference for timestamps and specifically logging, between created, written, and updated timestamps.
>
> **[1:18](https://www.linkedin.com/learning/data-quality-core-concepts/data-freshness-and-timeliness?u=76281980&t=78)** Created is when an event has occurred, written is when the event record has been stored on the database, and updated is when our record has been altered.
>
> **[1:28](https://www.linkedin.com/learning/data-quality-core-concepts/data-freshness-and-timeliness?u=76281980&t=88)** Some of the most painful data quality issues I have faced is when those values get mixed up between databases, which makes it hard to understand what was the true path of events within a database.
>
> **[1:43](https://www.linkedin.com/learning/data-quality-core-concepts/data-freshness-and-timeliness?u=76281980&t=103)** This is especially true for streaming, where if that gets mixed up, you start having conflicts within your databases.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### Schema changes
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=0)** - [Instructor] The next signal of potential data quality issues are schema changes.
>
> **[0:04](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=4)** Now, we've mentioned this before, but let's go a little bit more into it.
>
> **[0:07](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=7)** Data is always changing, and it should be.
>
> **[0:11](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=11)** "Data needs to align with the business, and ideally, the business is always changing to be in a position to capture further value."
>
> **[0:18](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=18)** If a business is not evolving with the market, it's going to be left behind.
>
> **[0:22](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=22)** And so "the business model and the subsequent processes evolve.
>
> **[0:27](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=27)** So therefore the data and thus its schema" should evolve as well.
>
> **[0:31](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=31)** And "this is known as schema evolution."
>
> **[0:34](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=34)** Now there's different types.
>
> **[0:35](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=35)** There's schema evolution where it's expected.
>
> **[0:38](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=38)** It's inevitable.
>
> **[0:39](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=39)** Change is inevitable, especially for schema.
>
> **[0:43](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=43)** And if there's "a high level communication between the IT team, so software engineers, and the data teams," changing schema shouldn't be so painful.
>
> **[0:53](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=53)** They'll often say, "Hey, in a month, we're going to drop this column.
>
> **[0:57](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=57)** Please be prepared and account for it in your downstream transformations and analytical database."
>
> **[1:02](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=62)** I have found that schema evolution is easy to deal with "when data teams are involved in the requirements and scoping phases for changes to products and processes" that impact the databases.
>
> **[1:15](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=75)** One of the earliest wins I witnessed at a earlier company was when our head of data said, "Engineering team, I want one of my data team members part of your meetings when you're planning new product features.
>
> **[1:27](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=87)** Because the schema keeps on changing on us and our customers are mad about the dashboards."
>
> **[1:33](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=93)** Immediately after that change, our data quality issues dropped because now software engineers were aware of what was the impact to us.
>
> **[1:42](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=102)** We were able to make suggestions on better ways to reformat the data.
>
> **[1:46](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=106)** And so a key thing I want to highlight here with schema evolution is that it really comes down to people and processes and getting to an agreed upon resolution of how to make these changes happen safe for everyone in the business.
>
> **[1:58](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=118)** Now, unfortunately, that's not always the case.
>
> **[2:02](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=122)** And more common than not, you have schema evolution that happens unexpectedly.
>
> **[2:06](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=126)** And so what happens here is that the engineering team is moving really quickly.
>
> **[2:11](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=131)** They just need to make a product happen.
>
> **[2:13](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=133)** They're trying to get through their sprints.
>
> **[2:15](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=135)** And a breaking change goes unnoticed, and it creates one of those silent failures, like I highlighted before.
>
> **[2:22](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=142)** And then the business consumer is seeing data off.
>
> **[2:25](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=145)** This is why root cause analysis is so important, because then you can go back and trace some analytical database to the transactional database.
>
> **[2:32](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=152)** What has changed?
>
> **[2:33](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=153)** What has dropped off?
>
> **[2:34](https://www.linkedin.com/learning/data-quality-core-concepts/schema-changes?u=76281980&t=154)** And many times it points to schema.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** let (1), case. (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Data transformation bugs
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=0)** - [Instructor] While I wish I could say that data quality issues were never caused by my own changes and it was only from the upstream engineers, the reality is I also caused data quality issues through data transformation bugs.
>
> **[0:12](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=12)** One key thing to highlight is remember when we did that ETL pipeline, we're extracting from the transactional database and replicating it to an analytical database.
>
> **[0:21](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=21)** Well, to go into more why we do that is because the transactional database and analytical database have the same data, but it needed to be formatted for different use cases.
>
> **[0:32](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=32)** Transactional databases focus on speed for read and write, while analytical databases are optimized for large scans and aggregates of the data for analytics.
>
> **[0:42](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=42)** One of the key things to highlight here is that when you're doing that replication and ultimate transformations, you're trying to align your assumptions to the business logic happening beyond the transactional database and to the actual business.
>
> **[0:58](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=58)** When there's a disconnect from the reality of the business process and its interpretation with an analytical database, it results in data quality issues, because you create the wrong logic for the transformation.
>
> **[1:10](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=70)** The better your assumptions for your transformation, the lower likelihood of embedding data quality issues within the analytical database.
>
> **[1:17](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=77)** Another thing to highlight are case when statements, and I think they're necessary evil.
>
> **[1:23](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=83)** Even with the most accurate assumptions, data will unexpectedly change, such as the schema.
>
> **[1:30](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=90)** Data teams often employ case when statements within data transformations to handle these edge cases.
>
> **[1:36](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=96)** So a case when statement is like an FL statement.
>
> **[1:39](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=99)** If you see this value, do this edge case.
>
> **[1:44](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=104)** They provide a quick fix to resolve data quality issues, and many times, they may be the only thing you can do as a data team.
>
> **[1:50](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=110)** But over time they accumulate into technical debt and they make it really hard to manage, 'cause now you're handling all these edge cases within your code, and it's not really scalable.
>
> **[2:01](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=121)** And what if they start conflicting with each other?
>
> **[2:03](https://www.linkedin.com/learning/data-quality-core-concepts/data-transformation-bugs?u=76281980&t=123)** Case when statements, I argue, very important, but be careful with the power of them.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** case. (1)
> **Env Vars:** etl (1)
> **Analogies:** such as (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Data drift
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=0)** - [Instructor] Another signal of potential data quality issues is data drift.
>
> **[0:05](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=5)** Now, in addition to schema evolving, it's also possible for the data itself to evolve and no longer align with your business logic.
>
> **[0:13](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=13)** One key nuance I want to highlight here is that it's not the data itself that's having the issue, it's your inability to capture it properly.
>
> **[0:22](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=22)** Now, where this becomes really impactful, specifically for data drift, is shifts in the distribution of the data, and it has major impacts for analytics, such as statistics, and especially in machine learning.
>
> **[0:35](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=35)** There's a whole field around data drift and ML ops.
>
> **[0:39](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=39)** One key area I want to highlight within data drift is concept drift, and there's four key types of concept drift.
>
> **[0:47](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=47)** Sudden drift is where a new concept occurs within a short period of time, so a sudden change.
>
> **[0:54](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=54)** Gradual drift is when a new concept gradually replaces the old one over a period of time.
>
> **[0:59](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=59)** So say for instance, a certain product's being sunsetted, but people are still using it.
>
> **[1:03](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=63)** We have incremental drift is where an old concept incrementally changes to a new concept over a period of time.
>
> **[1:10](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=70)** So maybe inflation, right?
>
> **[1:11](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=71)** Things are slowly increasing over time.
>
> **[1:14](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=74)** And then finally, reoccurring concepts.
>
> **[1:16](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=76)** So an old concept may occur after some time.
>
> **[1:19](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=79)** Something that's very cyclical.
>
> **[1:21](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=81)** Example of this would be the weather.
>
> **[1:23](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=83)** Maybe you have a rainy season that comes at a certain time of the year, and it's happening over and over again.
>
> **[1:29](https://www.linkedin.com/learning/data-quality-core-concepts/data-drift?u=76281980&t=89)** There's a great article, which I'm referencing here that I highly recommend on concept drift, and you can read it in the additional material added in the course.

> [!info]- Semantic Content
>
> **Analogies:** such as (1), for instance (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### Measuring data quality
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=0)** - [Instructor] So we're aware of the data lifecycle, we're aware of the stakeholders, we're aware of how data quality pops up into them, and what the signals of data quality issues look like.
>
> **[0:09](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=9)** Now, how do you measure them?
>
> **[0:12](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=12)** I want to bring back the DAMA data quality dimensions that we covered in an earlier chapter.
>
> **[0:17](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=17)** These dimensions are critical for measuring data quality.
>
> **[0:22](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=22)** Now remember, there's different dimensions or formats you can use.
>
> **[0:27](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=27)** Whichever one your company decides on, just stick to the framework that you have.
>
> **[0:32](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=32)** How to measure them is that you identify your most important data that needs data quality, you map the data quality dimensions to the data assets.
>
> **[0:41](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=41)** You create aggregate metrics to represent what proportion of the data values are impacted by data quality issues, specifically among those dimensions.
>
> **[0:49](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=49)** And then you create pass/fail logic based on acceptable values of the metric.
>
> **[0:54](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=54)** And so as a mock example, remember our e-commerce exercise, well, that data leader got funding and now they did a data quality initiative.
>
> **[1:03](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=63)** And specifically, they looked at the tables and identified that customerId, totalAmount, and paymentDate were the most important data values they wanted to focus on for data quality.
>
> **[1:14](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=74)** And so in this case, they identified, hey, for customerId consistency was only 80% and that was below a threshold they felt comfortable with.
>
> **[1:24](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=84)** An example of this would be, say for instance, they changed the format of how IDs are.
>
> **[1:29](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=89)** And so in the database, 20% of them have the new ID format, but the former 80% have the old ID format, which can cause issues.
>
> **[1:39](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=99)** For the totalAmount, you're seeing 60% for Validity, Consistency and Accuracy.
>
> **[1:46](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=106)** An example of what could have caused that is say for instance, for the total amount, they made some logic that rounded the dollar amounts to the closest dollar.
>
> **[1:53](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=113)** And then finally, for paymentDate, you see that it's 95% for the lowest and that's acceptable for there.
>
> **[1:59](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=119)** Another thing I want to highlight here is that you see N/As across, and it's because not every data value will align with every single data quality dimension.
>
> **[2:10](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=130)** Now, that's just a quick mock example, but if you want to see a real-life example, then check out GitLab, who has their entire handbook, open source for anyone on the internet to see, here's an example of their data quality scorecards, their detection rules, and their various processes for doing this.
>
> **[2:30](https://www.linkedin.com/learning/data-quality-core-concepts/measuring-data-quality?u=76281980&t=150)** You can go to the website, which I have linked here, and you can review it for yourself and you can check out all the other aspects of their data that they have open source.

> [!info]- Semantic Content
>
> **Code Identifiers:** customerid (2), totalamount (2), paymentdate (2)
> **Code Keywords:** pass (1), case, (1), finally, (1), this. (1)
> **Analogies:** for instance (2)
> **Env Vars:** dama (1)
> **Cross-References:** we covered (1)
> **Tools:** gitlab (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 4. Data Quality Tooling

#### Introduction to tooling
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/introduction-to-tooling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/introduction-to-tooling?u=76281980&t=0)** - In this chapter, we'll cover the various tools you can use to support your data quality initiative, where they fit within the data lifecycle, and provide case studies and real-life examples to make it clear on how it'll fit within your business.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - in (1)

#### Data dictionaries
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980&t=0)** - [Instructor] One of the first tools I always look for when working on a new data project are data dictionaries.
>
> **[0:07](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980&t=7)** And data dictionaries are essentially "a centralized repository of information about data, such as its meanings, relationships, origin, various formats."
>
> **[0:17](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980&t=17)** And where it sits in the data lifecycle is often within the analytical databases and the data marts.
>
> **[0:24](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980&t=24)** And it could potentially be in the transactional databases.
>
> **[0:28](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980&t=28)** But again, the engineers are often not worried about the data itself, but rather it's an output to their workflows.
>
> **[0:35](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980&t=35)** The role of a data dictionary is to serve as a "centralized source of truth that describes the values within a database."
>
> **[0:43](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980&t=43)** And it "can range from an explicit tool" to being maybe a Google sheet, if it's very scrappy, or it can be within the database itself, such as cloud data warehouses that will have the descriptions of the data next to the columns.
>
> **[0:59](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980&t=59)** And here's an example of a data dictionary.
>
> **[1:03](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980&t=63)** This is a code book from the National Health Interview Survey.
>
> **[1:06](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980&t=66)** And this PDF that it came from is, like, hundreds of pages long.
>
> **[1:11](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980&t=71)** This is one example here, but you can see it has the variable name, it has the description about it, some values for the data, and some further information of how it is sourced.
>
> **[1:23](https://www.linkedin.com/learning/data-quality-core-concepts/data-dictionaries?u=76281980&t=83)** I've included a link to this code book and the resources where you can view it for yourself and get a sense of what this looks like.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **Env Vars:** pdf (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Data catalogs
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=0)** - [Instructor] Another tool to help you understand the data within your data lifecycle are data catalogs.
>
> **[0:06](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=6)** They're essentially an organized inventory of the data, but specifically a database of the metadata of the various databases within your system and their data sources.
>
> **[0:15](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=15)** In addition, it has a search engine inside of it to help you search for it.
>
> **[0:21](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=21)** Where assist within the data lifecycle is wherever there's a database, there will be a data catalog to pull the metadata and make sense of it.
>
> **[0:29](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=29)** The role of it is to find data across disparate systems and organization, to break data silos, especially at the enterprise scale, and provide a programmatic means to access and update metadata.
>
> **[0:42](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=42)** Now, you may be asking, "This may be very similar to data dictionaries.
>
> **[0:46](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=46)** So what's the difference?"
>
> **[0:47](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=47)** An analogy I like to think of is catalogs is like a book index where you can search through the back of the book to identify where a location is and then go to it.
>
> **[0:56](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=56)** While dictionary is similar to a book glossary where you have a set of definitions that describe things.
>
> **[1:02](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=62)** Catalogs answer where is the data, while dictionaries answer what is the data.
>
> **[1:07](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=67)** Catalogs have multiple forms of metadata, while dictionaries only have definitions of metadata.
>
> **[1:13](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=73)** And then finally, catalogs are programmatically updated, but dictionaries, while it is possible, can be programmatic.
>
> **[1:21](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=81)** It's oftentimes manually maintained.
>
> **[1:24](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=84)** And to make it more real, here's a case study of a data catalog used at the company Brainly.
>
> **[1:30](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=90)** Brainly is the AI-powered learning tool that helps students with homework, and unique to them is that they have a distributed model where each team manages its own data and it has its benefits and downsides to that, and it's really up to the business model in the organization.
>
> **[1:46](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=106)** What resulted in this though was that they had many data silos and challenges in discovering what data was available, and they have multiple dependencies to get access.
>
> **[1:56](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=116)** So say for instance, you're working on an analytical project that requires three different domains.
>
> **[2:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=120)** You have to go to three different teams and wait for them to get back to you.
>
> **[2:04](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=124)** To solve this, they utilize the data catalog to consolidate metadata from the various databases and visualize the lineage of the data to track how it flow through the organization, which we'll cover in our future slides.
>
> **[2:16](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=136)** Finally, this allowed awareness of the data locations, and because people are aware where it was located, it resulted in a further data ownership and accountability for the data quality.
>
> **[2:27](https://www.linkedin.com/learning/data-quality-core-concepts/data-catalogs?u=76281980&t=147)** I highly recommend checking out their blog, which I included in the resources.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** finally, (2), this, (1)
> **Analogies:** similar to (2), for instance (1)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### Data lineage
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=0)** - [Instructor] The next critical tool for managing data quality is data lineage.
>
> **[0:04](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=4)** "Data lineage essentially communicates a data's origin, what has happened to it," and how it moves from source to source to provide visibility of your data system.
>
> **[0:15](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=15)** Now, the definition didn't make too much sense to me at first until I saw actual representation of it.
>
> **[0:21](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=21)** Here's the example of what data lineage is.
>
> **[0:24](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=24)** This is a completely made up example.
>
> **[0:26](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=26)** But you see you have your beginning sources, it highlights how it travels to a transformation stage, and then how they're merged together.
>
> **[0:35](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=35)** Now, data lineage fits within the data lifecycle wherever data is being moved.
>
> **[0:42](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=42)** And typically, you'll have it within data pipelines that show, "Hey, we're replicating from A to B," or within the analytical databases to identify the transformations.
>
> **[0:53](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=53)** Now, data lineage could be in the data creation and the transactional phase, but many times the software engineers aren't too focused on the data aspect of it.
>
> **[1:02](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=62)** So oftentimes, you'll see data lineage tools focusing on the downstream analytical workflows.
>
> **[1:07](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=67)** Key things to note is that they visualize "how data flows through databases" and sometimes between databases.
>
> **[1:13](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=73)** They typically have a table level view, but they can also be a column level view.
>
> **[1:18](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=78)** And where they're amazing for data quality is for root cause analysis.
>
> **[1:23](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=83)** And many times after I do my first profiling of data quality issue, my next step is to understand where is it coming from?
>
> **[1:31](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=91)** I would trace the call functions in SQL or in Python functions to understand how data flowed through a system.
>
> **[1:40](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=100)** And if there was lineage available, I went to that first 'cause that made it much easier to understand what happened, what were the steps, and where something could possibly go wrong.
>
> **[1:49](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=109)** And one of the great case studies for lineage is at Netflix.
>
> **[1:53](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=113)** I've included a article for this case study.
>
> **[1:55](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=115)** But to quickly summarize, "Netflix is one of the first companies to heavily invest in microservices at scale."
>
> **[2:01](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=121)** So instead of having all the information within one database and one system, you have all these little mini systems everywhere.
>
> **[2:08](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=128)** At the scale of Netflix, it's massive.
>
> **[2:11](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=131)** It's like a swarm of information moving together quickly.
>
> **[2:14](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=134)** And so with this, "data reliability and integrity challenges were all across the complex cloud landscape" and people didn't know where to start or where to connect.
>
> **[2:24](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=144)** And so "Netflix implemented a scalable data lineage tool to map out their dependencies all throughout their system."
>
> **[2:31](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=151)** And this enabled them to take this disparate teams and have a unified model while still keeping their culture moving fast and having individual processes with their microservices.
>
> **[2:41](https://www.linkedin.com/learning/data-quality-core-concepts/data-lineage?u=76281980&t=161)** Again, highly recommend checking out their blog.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), python (1)
> **Code Keywords:** this, (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### Data monitoring and observability
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=0)** - [Instructor] The next set of tools for data quality is data monitoring and observability.
>
> **[0:05](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=5)** And data observability is defined as the organization's ability to have broad visibility of data landscape and multi-layered data dependencies, such as the pipelines, the infrastructure, how it's served, at all times with a goal to identify, control, and escalate data quality issues.
>
> **[0:26](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=26)** Where it typically fits within a data lifecycle is that analytical databases, but it can also be in the transactional database.
>
> **[0:34](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=34)** Again, you want a holistic view of your data stack.
>
> **[0:38](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=38)** It highlights data quality trends by profiling the data and running various statistics, specifically looking for anomaly detection.
>
> **[0:46](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=46)** It provides broad visibility of organization's data stack and alerting happens after changes to data.
>
> **[0:53](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=53)** So if you think about it, to observe means that something has already happened.
>
> **[0:57](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=57)** A great case study observability is Meta's HawkEye.
>
> **[1:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=60)** As you know, Meta has so many ML and AI applications, and resolving production ML issues at Meta requires a lot of specialized knowledge about the data and substantial coordination across many teams.
>
> **[1:15](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=75)** HawkEye is an internal observability tool at Meta that helps its engineers do root cause analysis by essentially identifying anomalies within the data that are causing broken models, and then it guides engineers through debugging steps.
>
> **[1:31](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=91)** This anomaly detection is in real time and it drastically cuts the engineering hours spent on debugging.
>
> **[1:36](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=96)** Again, there's a resource for you to check out the blog.
>
> **[1:40](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=100)** Highly encourage you to check it out.
>
> **[1:42](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=102)** Furthermore, I've also included a article on "A Survey Data Quality Measurement and Monitoring Tools."
>
> **[1:48](https://www.linkedin.com/learning/data-quality-core-concepts/data-monitoring-and-observability?u=76281980&t=108)** This article was recommended to me when I was building out this course, and it's one of the best I've seen that gives a really great view of all the tooling landscape.

> [!info]- Semantic Content
>
> **Definitions:** means that (1), is an  (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Data contracts
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=0)** - [Instructor] Finally we have data contracts, which is a emerging category in the data space right now.
>
> **[0:06](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=6)** I define data contracts as a data architecture pattern that extends software-driven collaboration to data teams, and enhances data quality through human-in-the-loop reviews.
>
> **[0:16](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=16)** And it's similar to how these systems have improved code quality for product teams.
>
> **[0:20](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=20)** A similar tool being GitHub.
>
> **[0:22](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=22)** Data contracts are upstream and mainly focused on the transactional database and the replication into the analytical database.
>
> **[0:31](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=31)** The way it does this, it codifies expectations of data such as schema, semantics, profiling of the data as code via contract spec typically a YAML file.
>
> **[0:40](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=40)** It extracts metadata from databases, data catalogs, and lineage.
>
> **[0:45](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=45)** It detects proposed changes to code and databases, and then compares the contract spec to the expectations of the collected metadata.
>
> **[0:52](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=52)** Contracts enforce data quality through the CICD workflow where engineers make a poll request, it runs set tests, and then if the test fails saying, hey, you violated this contract, it then tax the people who are best suited to answer the question, and ensures that the change doesn't happen ultimately impact the data.
>
> **[1:12](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=72)** A great case study, this is GoCardless with Andrew Jones.
>
> **[1:15](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=75)** He is one of the first people to implement data contracts and production.
>
> **[1:19](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=79)** And specifically for GoCardless's use case, the internal data model wasn't designed for consumption and was leading to poor documentation and difficulty in managing in data.
>
> **[1:30](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=90)** This is a very common use case where the company first starts, analytics is nice to have, so they only focus on the transactional database.
>
> **[1:37](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=97)** And then a few years later, they add analytics, and it's completely different set of requirements.
>
> **[1:43](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=103)** So to make it work for them, GoCardless had to do extensive data transformations and joinings to make the data useful.
>
> **[1:50](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=110)** And changes in services upstream, such in the transactional database, caused unexpected breaking changes for data consumers, and this resulted in low confidence and poor data quality for consumers.
>
> **[2:01](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=121)** This problem led Andrew Jones to explore data contracts and implement it at GoCardless, and I think this quote from him best sums it.
>
> **[2:10](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=130)** Ultimately, we see data contracts as our vessel for improving data quality at GoCardless.
>
> **[2:14](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=134)** We're changing the data culture of the organization, support by our best in class data infrastructure, and guaranteed by a data contract.
>
> **[2:22](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=142)** Again, similar to other case studies.
>
> **[2:25](https://www.linkedin.com/learning/data-quality-core-concepts/data-contracts?u=76281980&t=145)** I have links to this, which you should go check out.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), extends (1), case, (1)
> **CLI Commands:** make (3)
> **Analogies:** similar to (2), such as (1)
> **Env Vars:** yaml (1), cicd (1)
> **Documentation:** spec (2)
> **Definitions:** is a  (2)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/data-quality-core-concepts/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-quality-core-concepts/next-steps?u=76281980&t=0)** - Thank you so much for taking this course.
>
> **[0:02](https://www.linkedin.com/learning/data-quality-core-concepts/next-steps?u=76281980&t=2)** In this course on core concepts of data quality, you learn how to define data quality, what data quality looks like along the data lifecycle, the various tools in it, and the various stakeholders.
>
> **[0:13](https://www.linkedin.com/learning/data-quality-core-concepts/next-steps?u=76281980&t=13)** This course was a huge overview and many times a starting point for you to launch off of to learn further.
>
> **[0:20](https://www.linkedin.com/learning/data-quality-core-concepts/next-steps?u=76281980&t=20)** And my next set of courses coming soon, we'll be taking a code perspective of what data quality looks like, and diving into code bases and databases.
>
> **[0:28](https://www.linkedin.com/learning/data-quality-core-concepts/next-steps?u=76281980&t=28)** If you're non-technical, then this is the stopping point for you.
>
> **[0:32](https://www.linkedin.com/learning/data-quality-core-concepts/next-steps?u=76281980&t=32)** Again, thank you to the LinkedIn team, my team, for helping me set up the course and for you for taking the time to learn about data quality.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (1)
> **Speakers:** - thank (1)


## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Processing]]
← [[ETL in Python and SQL]] | **7 of 7**

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Processing]]

## Related Courses

_Courses sharing skills:_

- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — Data Management
- [[JavaScript- Best Practices for Data]] — Data Management
- [[Advanced Python- Working With Data]] — Data Management
- [[Google Cloud Data and Storage Foundations]] — Data Management
- [[Data Versioning, Lineage, and Quality Monitoring for AI]] — Data Quality

---

[↑ Back to top](#)