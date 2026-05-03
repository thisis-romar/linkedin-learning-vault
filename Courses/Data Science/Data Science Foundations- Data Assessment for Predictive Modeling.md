---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: data-science-foundations-data-assessment-for-predictive-modeling
url: "https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling"
duration_minutes: 248
duration: 4h 8m
level: Intermediate
updated: 8/29/2025
learners: 36246
skills:
  - CRISP-DM
  - Data Assessment
  - Data Science Foundations
  - Predictive Modeling
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFx4WaFvwWKLw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1599578679605?e=2147483647&amp;v=beta&amp;t=yMdG8xDSxMB15lD6aLA0RoBiy52XL1Y1evSnXP1-dRk"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Skills in Predictive Analytics]]'
  - '[[Learning Codeless Machine Learning with KNIME]]'
  - '[[Advance Your Business Analytics Skills]]'
prev_courses:
  - '[[Python- Working with Predictive Analytics]]'
  - '[[Machine Learning and AI Foundations- Decision Trees with KNIME]]'
  - '[[Predictive Customer Analytics]]'
next_courses:
  - '[[Predictive Analytics Essential Training- Estimating and Ensuring ROI]]'
  - '[[Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions]]'
  - '[[Data Visualization for Data Analysts and Analytics]]'
path_nav: '[{"path":"Advance Your Skills in Predictive Analytics","position":6,"total":8,"prev":"Python- Working with Predictive Analytics","next":"Predictive Analytics Essential Training- Estimating and Ensuring ROI"},{"path":"Learning Codeless Machine Learning with KNIME","position":3,"total":5,"prev":"Machine Learning and AI Foundations- Decision Trees with KNIME","next":"Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions"},{"path":"Advance Your Business Analytics Skills","position":10,"total":11,"prev":"Predictive Customer Analytics","next":"Data Visualization for Data Analysts and Analytics"}]'
path_count: 3
tags:
  - course
  - topic/data-science
  - topic/artificial-intelligence
  - topic/software-development
  - skill/crisp-dm
  - skill/data-assessment
  - skill/data-science-foundations
  - skill/predictive-modeling
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Science%20Foundations-%20Data%20Assessment%20for%20Predictive%20Modeling.md)

![Data Science Foundations: Data Assessment for Predictive Modeling](https://media.licdn.com/dms/image/v2/C4E0DAQFx4WaFvwWKLw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1599578679605?e=2147483647&amp;v=beta&amp;t=yMdG8xDSxMB15lD6aLA0RoBiy52XL1Y1evSnXP1-dRk)

# Data Science Foundations: Data Assessment for Predictive Modeling

> CRISP-DM, the cross-industry standard process for data mining, is composed of six phases. Most new data scientists rush to modeling because it's the phase in which they have the most training. But whether the project succeeds or fails is actually determined far earlier. This course introduces a systematic approach to the data understanding phase for predictive modeling. Instructor Keith McCormick 

> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling) | 4h 8m | Intermediate | 36K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Why data assessment is critical](#why-data-assessment-is-critical)
  - [A note about the exercise files](#a-note-about-the-exercise-files)
- [**1. What Is Data Assessment?**](#1-what-is-data-assessment) (5 videos)
  - [Clarifying how data understanding differs from data visualization](#clarifying-how-data-understanding-differs-from-data-visualization)
  - [Introducing the critical data understanding phase of CRISP-DM](#introducing-the-critical-data-understanding-phase-of-crisp-dm)
  - [Data assessment in CRISP-DM alternatives: The IBM ASUM-DM and Microsoft TDSP](#data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp)
  - [Navigating the transition from business understanding to data understanding](#navigating-the-transition-from-business-understanding-to-data-understanding)
  - [How to organize your work with the four data understanding tasks](#how-to-organize-your-work-with-the-four-data-understanding-tasks)
- [**2. Collect Initial Data**](#2-collect-initial-data) (5 videos)
  - [Considerations in gathering the relevant data](#considerations-in-gathering-the-relevant-data)
  - [A strategy for processing data sources](#a-strategy-for-processing-data-sources)
  - [Getting creative about data sources](#getting-creative-about-data-sources)
  - [How to envision a proper flat file](#how-to-envision-a-proper-flat-file)
  - [Anticipating data integration](#anticipating-data-integration)
- [**3. First Look at the Data**](#3-first-look-at-the-data) (9 videos)
  - [Reviewing basic concepts in the level of measurement](#reviewing-basic-concepts-in-the-level-of-measurement)
  - [What is dummy coding?](#what-is-dummy-coding)
  - [Expanding our definition of level of measurement](#expanding-our-definition-of-level-of-measurement)
  - [Taking an initial look at possible key variables](#taking-an-initial-look-at-possible-key-variables)
  - [Dealing with duplicate IDs and transactional data](#dealing-with-duplicate-ids-and-transactional-data)
  - [How many potential variables (columns) will I have?](#how-many-potential-variables-columns-will-i-have)
  - [How to deal with high-order multiple nominals](#how-to-deal-with-high-order-multiple-nominals)
  - [Challenge: Identifying the level of measurement](#challenge-identifying-the-level-of-measurement)
  - [Solution: Identifying the level of measurement](#solution-identifying-the-level-of-measurement)
- [**4. Data Loading and Unit of Analysis**](#4-data-loading-and-unit-of-analysis) (5 videos)
  - [Introducing the KNIME Analytics Platform](#introducing-the-knime-analytics-platform)
  - [Tips and tricks to consider during data loading](#tips-and-tricks-to-consider-during-data-loading)
  - [Unit analysis decisions](#unit-analysis-decisions)
  - [Challenge: What should the row be?](#challenge-what-should-the-row-be)
  - [Solution: What should the row be?](#solution-what-should-the-row-be)
- [**5. Describe Data**](#5-describe-data) (4 videos)
  - [How to uncover the gross properties of the data](#how-to-uncover-the-gross-properties-of-the-data)
  - [Researching the dataset](#researching-the-dataset)
  - [Tips and tricks using simple aggregation commands](#tips-and-tricks-using-simple-aggregation-commands)
  - [A simple strategy for organizing your work](#a-simple-strategy-for-organizing-your-work)
- [**6. Data Description Case Studies**](#6-data-description-case-studies) (3 videos)
  - [Describe data demo using the UCI heart dataset](#describe-data-demo-using-the-uci-heart-dataset)
  - [Challenge: Practice describe data with the UCI heart dataset](#challenge-practice-describe-data-with-the-uci-heart-dataset)
  - [Solution: Practice describe data with the UCI heart dataset](#solution-practice-describe-data-with-the-uci-heart-dataset)
- [**7. Explore Data Basics**](#7-explore-data-basics) (8 videos)
  - [The explore data task](#the-explore-data-task)
  - [How to be effective doing univariate analysis and data visualization](#how-to-be-effective-doing-univariate-analysis-and-data-visualization)
  - [Anscombe's quartet](#anscombes-quartet)
  - [The Data Explorer node feature in KNIME](#the-data-explorer-node-feature-in-knime)
  - [How to navigate borderline cases of variable type](#how-to-navigate-borderline-cases-of-variable-type)
  - [How to be effective in doing bivariate data visualization](#how-to-be-effective-in-doing-bivariate-data-visualization)
  - [Challenge: Producing bivariate visualizations for case study 1](#challenge-producing-bivariate-visualizations-for-case-study-1)
  - [Solution: Producing bivariate visualizations for case study 1](#solution-producing-bivariate-visualizations-for-case-study-1)
- [**8. Explore Data Tips and Tricks**](#8-explore-data-tips-and-tricks) (9 videos)
  - [How to utilize an SME's time effectively](#how-to-utilize-an-smes-time-effectively)
  - [Techniques for working with the top predictors](#techniques-for-working-with-the-top-predictors)
  - [Advice for weak predictors](#advice-for-weak-predictors)
  - [Tips and tricks when searching for quirks in your data](#tips-and-tricks-when-searching-for-quirks-in-your-data)
  - [Learning when to discard rows](#learning-when-to-discard-rows)
  - [Introducing ggplot2](#introducing-ggplot2)
  - [Orientating to R's ggplot2 for powerful multivariate data visualizations](#orientating-to-rs-ggplot2-for-powerful-multivariate-data-visualizations)
  - [Challenge: Producing multivariate visualizations for case study 1](#challenge-producing-multivariate-visualizations-for-case-study-1)
  - [Solution: Producing multivariate visualizations for case study 1](#solution-producing-multivariate-visualizations-for-case-study-1)
- [**9. Verify Data Quality**](#9-verify-data-quality) (3 videos)
  - [Exploring your missing data options](#exploring-your-missing-data-options)
  - [Why you lose rows to listwise deletion](#why-you-lose-rows-to-listwise-deletion)
  - [Investigating the provenance of the missing data](#investigating-the-provenance-of-the-missing-data)
- [**10. Missing Data Case Study**](#10-missing-data-case-study) (4 videos)
  - [Introducing the KDD Cup 1998 data](#introducing-the-kdd-cup-1998-data)
  - [What is the pattern of missing data in your data?](#what-is-the-pattern-of-missing-data-in-your-data)
  - [Is the missing data worth saving?](#is-the-missing-data-worth-saving)
  - [Assessing imputation as a potential solution](#assessing-imputation-as-a-potential-solution)
- [**11. Explore and Verify Case Studies**](#11-explore-and-verify-case-studies) (3 videos)
  - [Exploring and verifying data quality with the UCI heart dataset](#exploring-and-verifying-data-quality-with-the-uci-heart-dataset)
  - [Challenge: Quantifying missing data with the UCI heart dataset](#challenge-quantifying-missing-data-with-the-uci-heart-dataset)
  - [Solution: Quantifying missing data with the UCI heart dataset](#solution-quantifying-missing-data-with-the-uci-heart-dataset)
- [**12. Making the Transition to Data Preparation**](#12-making-the-transition-to-data-preparation) (3 videos)
  - [Why formal reports are important](#why-formal-reports-are-important)
  - [Creating a data prep to-do list](#creating-a-data-prep-to-do-list)
  - [How to prepare for eventual deployment](#how-to-prepare-for-eventual-deployment)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why data assessment is critical](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-data-assessment-is-critical?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-data-assessment-is-critical?u=76281980&t=0)** - [Instructor] You can't properly model your data before you prepare it, and you can't properly prepare it before you perform the analyses that we will review in this course. My name is Keith McCormick, and I've been building predictive models for 25 years. Even though I've had a ton of experience doing this stuff, I've had to learn the hard way that before I can begin modeling, I have to make sure that I fully assess the data with which I'm working. I've learned that careful work is ultimately the fastest and most productive way. And in this course, I tell you exactly what to do. Each dataset is different, so I can't give you a step by step recipe. There is no such thing. But I can give you a set of principles, guidelines, and tools to properly assess a dataset for its suitability for machine learning models. And hopefully pass on some of the wisdom I've picked up along the way so that you can learn from my mistakes and my experience, rather than have to figure it out, trial and error on your own. This is a neglected topic, rarely presented in this depth. So I hope that you're excited for our journey together, let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [A note about the exercise files](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=0)** - [Instructor] I've provided an Exercise Files folder, and I want to briefly review how it's organized. In the Originals folder, there is a folder for each data source. We're going to use a number of data sources, and many of them come in multiple versions. And the Solutions folder, it's been organized by video. So when you get to the end of the lecture, if a solution has been provided, it's going to be found in the folder for that video number. To make it even easier, I provided a cheat sheet. Let's take a quick look. Now, yours is going to be a PDF, but this is how it's organized. Every video is numbered, and the file that you need from the Originals folder at the beginning of the video is indicated. And then when a solution is provided, that's indicated as well. Notice in many instances a solution is not provided. If I'm simply doing something very quick, I show you in the video but don't produce a solutions file. If it's more elaborate, I do provide it. And just one more caution, if there's a series of related videos like these three, I'll only provide the solution in the final one of the series. I hope you find those helpful, and I hope you try the challenge and solutions exercises that I've included.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Env Vars:** pdf (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)


### 1. What Is Data Assessment?

[↑ Back to Table of Contents](#table-of-contents)

#### [Clarifying how data understanding differs from data visualization](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=0)** - [Instructor] By [[Data Assessment]], don't we just mean a type of data exploration or data visualization? In short, no. Here we have a very specific purpose in mind, to check the suitability of our data for [[Predictive Modeling]] and to determine what actions we can take to improve the data during [[Data Preparation]]. Consider the metaphor of building construction. As the materials arrive, which for us is the data, we need to check to see if it's what we were expecting, what do we need to do to ready the materials, and what potential flaws do we see? A lot of what we have to do is mundane, but there are a very specific set of criteria to inspect for. Edward Tufte has inspired many with his books on effective data visualization. But notice in the opening sentence of one of his books, he is focused on communication. We are focused on a stage in the model-building process well before we communicate results to others. The analyses are for us, not our audience. Not yet. Clarity and accuracy are important, certainly, but towards the end goal of completing our assessment and planning for the data preparation that will follow. So the emphasis is on our own perception.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=98)** Stephen Few, another visualization expert, calls it thinking with our eyes. Jonathan Kumi, in introductory comments to Few's book, describes this neglected cornerstone in this quote, "Encapsulating data in graphics "forces us to confront its limitations "and helps us to understand the dynamics "of the underlying phenomenon." So we'll be using graphics in part of the course, but not in the way that data visualization is usually discussed. Few likes catchy titles, by the way. It's interesting to note that his book on presenting is, "Show Me the Numbers," whereas this book is called, "Now You See It." So they really are topics different enough to each be discussed at book-length. Finally, we should all thank Tukey for starting this conversation almost a half century ago. I love this quote about a detective needing both tools and understanding. His book, "Exploratory Data Analysis," came out in the late 70s. So how we explore data has changed and why we do it has changed somewhat too, because we'll be assessing data for machine learning models, not statistical models. But he gets the credit for influencing generations of effective analysts, including many machine learning specialists.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (2), [[Data Assessment]] (1), [[Predictive Modeling]] (1)
> **Definitions:** is called (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Introducing the critical data understanding phase of CRISP-DM](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=0)** - [Instructor] [[CRISP-DM]] is an acronym for the cross-industry standard process for [[Data Mining]]. This course is about the second phase of CRISP-DM. So we'll review a bit about CRISP-DM, but just enough to put our course goals into context. If you're already familiar with it, there will still be some important context for you. So we can see that data understanding is the second phase in a six phase process. This, of course, is the famous circular diagram. But it's critical to note that CRISP-DM is much more than just a circular diagram. In fact, if I [[Zoom]] out a bit so that you can see the entire page, you'll note that this is page 10 of a 76 page document. And this is the beginning of part two, when the circular diagram makes its first appearance. So what does the document say about data understanding, how does it describe it? Well, with the following key points. First, although this is the second phase, we're just starting to assemble our data. Then it continues to describe some of the tasks, which could easily be confused with just exploring, getting familiar with the data, identifying [[Data Quality]] problems, getting some of our initial insights, and even possibly detecting interesting subsets of our data. So what is this mysterious, hidden information? This is a critical phrase,
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=96)** because we must remember that data understanding is just prior to [[Data Preparation]]. So we need to look carefully for information that is hidden, not only to us, but hidden to our [[Algorithms]]. We must be careful not to have magical thinking regarding our algorithms, they need our help. Perhaps the best one sentence summary of the entire course is this. During data understanding, we are uncovering hidden patterns which we reveal through data preparation so that our modeling algorithms can detect them. Let's briefly address another issue. No one really uses the phrase data mining anymore. So what did they mean at the time when they wrote it and chose this to be part of their title? Well, these days we'd call it traditional machine learning. Specifically, we're more focused on supervised machine learning. Supervised is more common than unsupervised in general, but also in CRISP-DM, we're focused on deployed models and unsupervised models just aren't deployed in the same way as supervised models. So what else did they mean when they chose the phrase data mining? Well, they didn't mean exploring as an end goal and data mining didn't have the [[Privacy]] implications that it has today.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=189)** It merely meant finding useful patterns and data, there was no assumption about what kind of data it was or where it came from. That negative connotation came later, mostly from journalists adopting the phrase when discussing privacy concerns. And that's an important topic. But data mining was not associated with that topic when CRISP-DM was originally written. Also, the author's were focused on building predictive models, not merely discovering interesting things, and then using those models to score new cases, to make predictions. So the name may have changed but those are still our goals today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CRISP-DM]] (6), [[Data Mining]] (5), [[Algorithms]] (3), [[Data Preparation]] (2), [[Privacy]] (2)
> **Env Vars:** crisp (6)
> **Warnings:** note that (2), be careful (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Data assessment in CRISP-DM alternatives: The IBM ASUM-DM and Microsoft TDSP](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=0)** - [Instructor} For the purpose of this course, we will use the terms [[Data Assessment]] and data understanding interchangeably. But if data assessment is used in the title of the course, why risk confusing it with [[CRISP-DM]] term data understanding? Well, out of context, it's not always clear what data understanding means. More importantly, others have tried to improvise on the CRISP-DM theme, especially the diagram, but when they have, they've also introduced many competing terms. However, they always include something like the data understanding phase. Let's look at two of the more well known attempts to do this. I always thought IBM spin on the diagram was intriguing. IBM has come up with ASUM-DM, which is an acronym for Analytics Solutions Unified Method for [[Data Mining]]/[[Predictive Analytics]]. IBM makes it a bit tricky to read up on ASUM-DM, you have to register on the website. And it's evolved quite a bit over just the few years that it's been around. This blog post was written by an IBMer at around the time that ASUM-DM was first making its appearance. And I think that the diagram, when it first showed up, is the most intriguing. Here it is. Notice this interesting figure eight diagram, clearly influenced by CRISP-DM
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=94)** starts with business understanding, then you see data discovery and [[Data Wrangling]]. Very similar indeed. But here's the interesting part. The other half of the figure eight diagram is a completely different cycle. What IBM is identifying here and I've observed this to be true is that the modeling team and the deployment team are often kept separate. So again, quite intriguing. Of course, IBM isn't the only one to come up with modifications, there are several. The variation that is perhaps getting the most traction at the moment is [[Microsoft]]'s Team [[Data Science]] Process. And here it is, let's take a look at their diagram. Here's the data science lifecycle. Again, clearly influenced by CRISP-DM starting with business understanding, and then going to a phase [[Data Acquisition]] and understanding then deployment and modeling. So notice the nature of the feedback loops is rather different. Now an important difference between this one and some others. It is heavily documented, and it's not difficult to access it. If you download the PDF from Microsoft's website, you'll find a 400 page document. So why so long? Well, because unlike CRISP-DM, it refers specifically to technology.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=188)** And that takes up additional pages. So why stick with CRISP-DM? Well, polls of working data scientists on this subject are infrequent. But they consistently show that if there is a process that the data scientist is familiar with, it's probably CRISP-DM. They really did their homework when they wrote CRISP-DM as well. It was a three year effort. The fact that it is tool and technology neutral is why the document does not get out of date, and why it's not unwieldy. So I read the alternatives when they come out, and I find them interesting, but when working on a project myself, or with clients, I still recommend CRISP-DM.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CRISP-DM]] (9), [[Data Assessment]] (2), [[Microsoft]] (2), [[Data Science]] (2), [[Data Mining]] (1)
> **Env Vars:** crisp (9), ibm (5), asum (3), pdf (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (2)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor (1)

#### [Navigating the transition from business understanding to data understanding](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=0)** - [Instructor] Now we're going to briefly review the four tasks associated with the business understanding phase, which is just prior to data understanding. Our goal is to better understand the transition from one to the other. In the Christiane document, If you go beyond the circular diagram, you'll get to the task list. You can see the four tasks for business understanding. The items in italics are interesting as well. Those are the recommended outputs or documentation requirements for Christiane. But for the moment, we're going to stay focused on the tasks. Each of these are important, but one in particular overlaps with data understanding, and that is the assess situation task. The phrase that Christiane associates with assessed situation is that it includes a inventory of resources. And that of course includes data. The trick and understanding the relationship between business understanding and data understanding is that in the business understanding phase, you are discussing data that you haven't examined yet. So you're relying heavily on data dictionaries, [[Metadata]] and data models. This reliance on data dictionaries is especially true If you're an external resources. I have been most of my career.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=94)** But it's true even if you are internal and your extremely familiar with the data, after all, you've never seen data from this particular timeframe combined with these particular data sources before. I always schedule a meeting with a group that has a diverse knowledge of various components of the data warehouse and the data model. Seek out those that know some aspect of the data that you might not know. This is the time to be creative. More is better than less. If left out now it's more challenging to circle back later. It's more efficient to add to this list of data sources now. Finally, the inventory of resources is not just data, It's our focus in this course, but it also includes personnel, computing resources and software. And now a rapid fire clarification of the other three tasks, starting with defined business objectives. It's about understanding the problem and how the business will define success. It's not about an elaborate set of requirements. It's more about which metrics will the business use to measure progress when we're done. The determine [[Data Mining]] goals task
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=188)** is a process of translation. Translating the business objectives into a form that modeling [[Algorithms]] can help us with. This translation almost always involves figuring out what we have to predict, after all, we're building predictive models. After modeling you translate back into the language of the business. The fourth task is developing your project plan. The project plan is kept quite loose at this point. You've sorted out who will be on the initial team, what software will be supported, and you have a working list of data sources, but you commit to very little at this point. Data understanding will be the open-ended process by which you determine which of these resources will continue on to the later phases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1), [[Data Mining]] (1), [[Algorithms]] (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [How to organize your work with the four data understanding tasks](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=0)** - We're back in the Christie M document, looking at figure three, the task list. Now let's talk about the four data understanding tasks. These tasks and even their names will be important to us because they will help us structure the course. In fact you may notice that the chapter titles for the most part refer explicitly back to these task names. So let's talk about each of them in turn. The first task is Collect Initial Data and that's going to include getting the data into your software environment of choice. So there might be a little bit of cleaning and formatting but only in support of data loading. Also keep in mind that we have not integrated the data yet. We have to give the individual data sources a little bit of attention before we integrate them. Integration conceals some missing data problems but it creates some new ones. So you must do an initial exploration first. I love this phrase, gross or surface properties because I think it captures perfectly what this task, Describe Data is all about. Sometimes with clients I compare it to counting apples and oranges. Specifically, It entails things like how many customers last year and how many transactions collectively and individually
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=95)** did they have. So it's basically counting but counting with a purpose. You're getting the first glimpse at sample size issues and if you have enough of everything, if you have 10 million insurance claims but only 310 known frauds, you can anticipate that you are going to have some challenges building a supervised machine learning model. Or, if you have 750,000 shopper IDs in your regional supermarket loyalty program but 250,000 haven't bought anything in the last year, then you'd include those zero transaction folks for some analysis but drop them for others. So as simple as it sounds, thoughtful counting is important and we will discuss this and practice it with examples. Explore Data is a big task. We're going to spend a lot of time on this task. At first, it seems to overlap a bit with [[Business Intelligence (BI)|business intelligence]] skills in that there's a lot of querying, visualizing and reporting. Where it's very different from BI is the goal. Don't forget that we aren't jumping right to our report after data understanding. The next phase is data prep and then modeling. So all this work is in the service of better models and developing a data prep to do list. Our fourth task is Verify [[Data Quality]],
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=189)** missing data, another big topic. Don't forget that we must examine data quality through the lens of the individual data sources. Then we have to come back later after [[Data Integration]] and look at it again. Don't rush to fix the data. Proper treatment requires proper diagnosis. Data understanding is all about getting our analysis off to an effective start with a thorough diagnosis and a proper assessment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (2), [[Business Intelligence (BI)|Business intelligence]] (1), [[Data Integration]] (1)
> **Best Practices:** don't forget (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - we (1)


### 2. Collect Initial Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Considerations in gathering the relevant data](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=0)** - [Instructor] The first task is collect initial data. One thing that experience has taught me is that the data that will be most effective during modeling is often found where no one else has been looking, so you have to do a thorough search. So where do you start? How can you start to assemble a list of potential data sources and potential subject matter experts that will help you understand the data? I often start with a building directory or an organizational chart. It might seem counterintuitive, but if you want to understand the business problem, you have to understand all aspects of the business that potentially involve that problem, and the managers within each department will be your best SMEs. Each department or business process is a potential source of data. Most variables that you try will fail, but almost all sources of data will succeed in producing at least one good variable. At first, this seems to be a paradox. If others warn you, that you're wasting your time with some of the variables and data sources that you try, won't you just end up with more variables than you can use in the final model? This is true, but the reason that you must do it and that this approach is effective, is the more data sources you use representing different departments and operations, the greater the coverage of the business processes.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=96)** If the project has been chosen properly for its potential ROI, and its alignment with executive priorities, then it is worth it to do this thoroughly, it is worth it to do it right. Here's why you can't look only where you've been told to look. The variables under constant scrutiny had been baked into the cake. They probably don't hold the secrets to organizational transformation, improvement, nor in moving [[Business Metrics]] in the right direction. So if an SME tells you, you should look, you should look. If they tell you not to bother, you might want to look anyway. There's another way to think about why you have to be very careful about including only the variables that everybody else has focused on. It's sometimes called Goodhart's law. The original phrasing makes it sound a bit technical. This rephrasing of it is what most people quote. When a measure becomes a target, it ceases to be a good measure, meaning that given an incentive, everyone will alter their behavior to maximize the incentive, whether it's sales, commissions, performance bonuses, favorable work reviews, or discounts. This is operating both at the employee side and your customers. So variables that might be influenced by these effects have to be used with caution, your model might only give you insights about the incentive system,
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=189)** and not about the actual business problem. For instance, some frequent flyers, book a long round trip flight to a far away place, just to rack up the miles at the end of the year. Sometimes they don't even leave the airport, they just arrive, turn around and go back, they are just trying to maintain their VIP status. Now you don't ignore these variables, but you need to understand how the incentives can create confusing and distracting patterns. So key performance indicators are critical to business understanding and evaluation, but you can't build your model on KPIs alone. For instance, in a cell phone project I participated in, we looked at billing data, usage patterns, the features on their phone, their current and previous contracts, call center transcripts, and even retail store interactions. The bottom line is this, you really need to assemble a comprehensive view of what you were trying to model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Business Metrics]] (1)
> **Env Vars:** roi (1), sme (1), vip (1)
> **Analogies:** for instance (2)
> **Definitions:** is a  (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [A strategy for processing data sources](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=0)** - [Male Speaker] I want to share a strategy and a metaphor to help you with how to go about choosing data sources. I'm going to give you a suggestion about where and how to look for data. What many are tempted to try, at least at first, is to start small with just one or two data sources. They start by asking a subject matter expert for advice on where to look first, and then they work with one major data source at a time, lets say, social media, then they rush right to modeling. The idea is that it will be more efficient. This is especially tempting if you're working in sprints and you're feeling time pressure. I want to explain the risks of that approach using our metaphor. Perhaps not the metaphor you were expecting. It works like a dog show. I'll explain the dog show metaphor in just a moment, but first, a bit of theory. The reason that folks want to start slow and fail fast, is that they're afraid that the data will fail to reveal a pattern. If you know where to look, this is extremely rare, and according to the nine laws of [[Data Mining]], it never happens. The fifth law is Watkins's Law and it states there are always patterns. Why is this true? Well the way that it's phrased in the nine laws is this.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=94)** Data relevant to the business objective and consequent data mining goal is generated by processes within the domain. In other words, if you're keeping records, then you have data that is relevant to the area of the business that you're interested in, therefore you've also got data in there somewhere that will help you make predictions about the same area of the business. You can assume it. It's always there. 25 years of building predictive models has taught me two things about this. Watkins's Law, that there's always patterns, is true. And here's what else is true. There are always interactions, that is if I look at disparate data sources like social media, call center data, warranty claims and billing, it's in the interactions between those departments that will be the least obvious, but also the most powerful. So here's how you capitalize on these facts. Don't try to build your model on just one department's data. Of course you start with one, but you'll find that the variables are closely related and somewhat redundant with each other. Many won't work out, but the best within each area of the business will emerge. It is metaphorically like best in breed, but don't stop there.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=189)** Keep going. After cleaning up and weeding out variables within each department, [[Data Integration]] will have to take place and best in breed becomes best in show, and you look for the interactions between those diverse data sources. This process never fails for the same reason that Watkins's Law is true. If you are keeping relevant records for the business processes you are investigating, there are always patterns. Let's imagine a possible scenario to better understand how this works. Let's say that some users of new phones are having battery issues. They call customer service, and discover that it's not a damage category that's covered under their warranty. Current standard policy is that for batteries they have to buy a new one, or they have to get a whole new phone, but either way, they'll have to pay. Frustrated, they skip a payment, even though they've never been late before and therefore they don't trigger any collection warnings in the data. This could be a powerful discovery, and these are the kinds of patterns that are always present, but to find them you have to look in lots of departments at once. So remember, best in breed followed by best in show.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Mining]] (2), [[Data Integration]] (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** in other words (1)
> **Analogies:** imagine (1)
> **Speakers:** - [male (1)

#### [Getting creative about data sources](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=0)** - [Instructor] I want to tell you a brief story to help you picture what it feels like to do all this detective work acquiring data during a real world project. Some years ago, I was on an insurance fraud project. We were trying to predict risky claims. Specifically, we were focused on staged accidents. That's when the criminal gets into an accident on purpose and uses a network of other criminals to generate fake medical bills for reimbursement. It's big money, hundreds of millions of dollars. I was using my approach of following the data through the various departments that were related to the problem. The primary focus was claims investigation, but one of my subject matter experts was the executive that was in charge of claims processing. In other words, the day-to-day handling of the paperwork of receiving the claims and entering the information. In my effort to understand all the business processes that generated the data for each of the data sources, I asked to sit in for a half hour while inbound claims initiation calls were coming in. I was introduced to one of the team members and tried to stay out of her way while she worked. Keep in mind that I would have already studied the data dictionaries at this point. I was just there to observe. There was no call on her queue at the moment, so I noticed that she had a folder and she was typing some information from paper documents into the computer and made note of this and was about to ask her about it when the first call came in.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=93)** Then I noticed that caller ID appeared when she took her call. I made note of that too. After the call, I asked her if the caller ID was being captured in the data. She wasn't sure, but I made notes to ask the data team about the caller ID. Trust me, these were big discoveries. First, the caller ID. If you're going to make a career out of fraud, you need to make a bunch of fake identities. You can't use the same identity twice, so you put fake names and addresses on the [[Forms]], but wouldn't it be strange if several different claims all had the same caller ID? Then remember those paper forms I observed being typed into the computer? They were weather descriptions from the accident report. No one had mentioned them to me. The weather turned out to be very helpful and it had been missed because it wasn't in the data dictionaries I had seen. If you are faking an accident, you don't want to do it in icy weather. Somebody could get hurt, including the criminal themselves. They aren't trying to work that hard. They just want to pretend to be hurt. So two extremely helpful variables that were used in the final model were just a half hour investment. Think about this, a serious return on investment producing model like this might only have two to three dozen variables in the final model.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=186)** So two top-performing variables is a very big deal. If you spent the same half hour observing each business process in your project and another half hour with a subject matter expert in each department, imagine what you might find. It won't always come easy and most of your tries won't work out, but this is the kind of hard work it takes to acquire the data for a world-class model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (2)
> **CLI Commands:** make (2), find (1)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** picture (1), imagine (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [How to envision a proper flat file](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-envision-a-proper-flat-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-envision-a-proper-flat-file?u=76281980&t=0)** - [Instructor] We're going to briefly review something quite basic, but also terribly important. By the time you reach the end of the [[Data Preparation]] phase, you need everything in a flat file. All of your information, and it has to be in this format. During [[Data Acquisition]] and assessment, you needed an ID field to merge your data. You still need it, just at this point it's to prepare you for eventual deployment. Of course nothing is more important to supervise learning than your Target field, and naturally it has to be 100% complete, no missing data. Generally, there's no missing data in the inputs either. We diagnose it during data understanding, and address it during data prep. By the time we get to this point, every row of data has been vetted and belongs there, and every column has been vetted and belongs there. Specifically, each column should be a unique and useful source of information with little or no redundancy. The whole point of data understanding is to explore the data so thoroughly that by the time we work our data prep to-do list, we have the data in exactly the form we need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (1), [[Data Acquisition]] (1)
> **Speakers:** - [instructor] (1)

#### [Anticipating data integration](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anticipating-data-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anticipating-data-integration?u=76281980&t=0)** - [Instructor] In the 25 years that I've been doing this, I've concluded that the best source of modeling data is often transactional data, but it's not in the form that we need. It's not flat. So what we have to do is aggregate it, and in numerous ways. This is all done in the [[Data Preparation]] phase, but we have to be clear on what it looks like when we're done so that we can properly perform our data understanding tasks. So just one example might be calculating average number of domestic U.S. calls over this four month period, turning four rows into just one number. Then for this one customer, that becomes their value on a single row of data in our modeling flat file. Just in the form we need, just one row per customer, or whatever our unit of analysis might be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (1)
> **Speakers:** - [instructor] (1)


### 3. First Look at the Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Reviewing basic concepts in the level of measurement](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=0)** - [Instructor] Okay, you're about to look at a data set for the very first time. What do you look for? The very first thing on my mind, other than the very obvious, the number of rows and the number of columns, is the level of measurement of each of the variables. Level of measurement's been around for 75 years, but it's still fundamental to everything we do. It determines which descriptive [[Statistics]], which statistical tests, which charts, and which machine learning [[Algorithms]] make sense for the data. It drives almost everything we do during data understanding and then later during the modeling phase. Stevens was a Harvard psychologist, and he wrote on the theory of scales of measurement way back in 1946, but we're still under its influence today. Even had this little table in the paper with the four levels and what statistical tests were appropriate, like median for some, but mean for others. The four terms, nominal, ordinal, interval, and ratio, are still used. We'll define them, but first, for our purposes, we can combine the last two. The only distinction between ratio and interval is having a true zero. The nerdy example that's often used is that Fahrenheit and Celsius temperature scales do not have a true zero and might be cold at zero degrees
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=96)** on either scale, but it's not the complete absence of heat. But Kelvin does meet this criteria, because zero degrees Kelvin is absolute zero. It's a fun fact to know, but not a distinction that we need to worry about. So we'll combine them into one category called either scale or continuous. You'll hear them both. However, the distinction between nominal, ordinal, and scale will be very important to us. Examples of nominal include things like marital status, payment method, whether you own or rent your home, or perhaps your occupation. It's separate and distinct categories that are not meaningfully ranked. Ordinal are separate and distinct categories that are meaningfully ranked, so it includes things like degree status, bachelor, masters, PhD, et cetera, age, when reported in categories, income in categories, and many others. Scale variables, the classic being things like height and weight, are variables where taking an average makes sense, where you're measuring things on a continuum. This could also include age and income, but when reported in years or dollars. It could also include things like miles per gallon or the number of individuals living in a household. I know it seems basic, but level of measurement is critical to the efficient analysis of your variables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Algorithms]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [What is dummy coding?](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=0)** - [Instructor] What is dummy coding? Dummy coding is a special kind of [[Data Preparation]] that most software runs automatically on your categorical variables. That's both nominal and ordinal. We won't focus on the modeling aspect of it right now, just why you need to be aware of this while assessing your data. Take a nominal variable like marital status. We have four categories. These four categories will get converted into four new true or false variables. For instance, the new variable, marital, is true when the old variable, marital status, is equal to married. Why worry about this? Well, again, most software packages and analytics programming languages do this automatically during the modeling phase in your modeling [[Algorithms]]. If you don't understand that, it's going to complicate interpreting the results. Also, when you go to deploy those same models, you need to make sure that you are creating these new variables even if you have moved the model to a new platform. Also, ordinal variables become tricky. Imagine that you have a variable like family size: zero children, one, two, three, four, up to five children. Do you want to treat that as a scale variable? Perhaps. Do you want to treat it as an ordinal variable?
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=95)** That's a real option but if you choose that it be an ordinal variable, it's going to get dummy coded. So the choice is largely affected by whether or not you want that scale variable or the collection of dummy-coded variables. So naturally the number of variables increases and it increases by a lot. In particular, variables with lots of categories really cause trouble. Let's say you innocently put state of residency in your model. Well, assuming that you've just got the 50 states and not the territories, you still have 50 new dummy-coded variables. So there's a lot to think about but the primary thing on your mind right now should be that number of categories because that really is an issue during the data understanding phase.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (1), [[Algorithms]] (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for instance (1), imagine (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Expanding our definition of level of measurement](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=0)** - [Instructor] When Stevens first proposed level of measurement back in the '40s, he was focused on [[Statistics]], specifically survey style data. Since we're doing machine learning, we really have to expand our notion of level of measurement and include some additional categories. First, we have to focus more carefully on potential ID fields, not in the same way that the IT team does when they're building the data warehouse, but thinking creatively about fields that may help us link the current dataset with other datasets during [[Data Integration]], things like street address, for instance, grabbing neighborhood level detail using zip code, then some fairly obvious ones, like telephone number and email can connect us with other data, but then also credit card number. Not because we're going to check a customer's credit score, I suppose in the case of [[Banking]], that might be relevant, but generally using it as a proxy. For instance, years ago when I was doing a project for Michael Kors, since they don't have a loyalty program, credit card was one way to identify that somebody was a repeat shopper. Also, you want to be looking at how complete they are. Knowing the email for everybody is different than knowing the email for only half of the cases. Finally, you want to look for opportunities for data extraction, like this. For instance, did you know that the second character in a vehicle identification number
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=95)** identifies the manufacturer? In this case, this VIN number belongs to an Audi. Also, we have to rethink nominal variables. Nominal variables are more complicated in machine learning than what we might encounter when we're doing nominal variables in stats. For instance, we might find variables that have only one value. You would think that this is an unusual, quirky thing to occur, but it's actually quite common. Or binary variables have characteristics that make them quite different from other nominal variables and should be identified as so. True/false being the classic example, although there are many. Low order nominal variable means that it doesn't have that many categories, and that's really what Stevens had in mind when he created this notion of a nominal variable. But we also encounter high order and very high order variables. Let's take a closer look at those. Examples of high order variables would be things like the phone model of your cell phone, the state that you live in, things like car make and model or occupation. Most data scientists, especially when they're starting out, include variables like this in their models, and it can create all kinds of complications. And the reason is, is that the [[Algorithms]] automatically dummy code variables like this. So we'll sometimes include them, but we want to be very careful. And by high order, I really have in mind,
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=189)** those variables that have more than 12 to 15 categories, although there is no magic number, examples of very high order, include variables like the following, product code or SKU, city, that a customer lives in, zip code, something like movie name. Now of course we know that variables like this are used in models all the time, variables like moving name or book title are frequently used by Netflix and Amazon, but it's different because there, we're talking about association rules, models, not supervised machine learning. These very high order variables are going to be deadly to your model. Quite simply, you cannot include them, you have to handle them in some other way. So watch out for those high order and very high order variables at this stage in the game, we're mostly trying to identify them. That's not quite the last of it though, because we also have dates and text. And by text, I really mean [[Unstructured Data]], things like physician's notes and so on. These have to be handled in a special way as well. For instance, dates in and of themselves are rarely useful in predictive models. What you need to do is perform date arithmetic, the distance and time between two dates, and that is what can be included in the model. So here you want to be spotting those dates
>
> **[4:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=283)** and be thinking about what kinds of manipulations you might need to make during the [[Data Preparation]] phase down the line. Another example would be extracting from a date, whether or not it's a weekday or weekend. Finally, regarding the text, what you have to do is turn that text into something that the supervised model can use. Now, [[Text Mining]] is a topic in and of itself. But here what we're doing is we're scanning unstructured texts to see, are there opportunities to extract discrete pieces of information that could be used in a supervised model? For instance, this customer is upset about the bag fee that they had to pay. We might create a new variable, luggage fee, and mark it as true for this customer. So that's our expanded list of variable types when we talk about level of measurement for machine learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Data Integration]] (1), [[Banking]] (1), [[Algorithms]] (1), [[Unstructured Data]] (1)
> **Analogies:** for instance (6)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Env Vars:** vin (1), sku (1)
> **Tools:** notion (2)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)

#### [Taking an initial look at possible key variables](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=0)** - [Instructor] Okay, let's take a look at a data set called Phone Service Customers. This is available in the Originals folder. And we're going to take a look at the data set and look for possible ID fields, simply any field that might help us merge this data with other data. So the obvious choice is phone customer. So hopefully we'll have other information that we can bring in with that but that certainly looks like it's what we need. But we have a bunch of other possibilities. For instance, street address might allow us to identify if we have multiple customers at the same address. And that could be very interesting indeed. Email address is an interesting one because we wouldn't assume that we have email address for everyone. So it could be that we have a different set of services for those individuals for whom we know their email address. For instance, we might have an email address for somebody that belongs to a loyalty program or that we handle their emails but otherwise, maybe we don't. Same with telephone number. Wouldn't it be interesting to know that there were more than one telephone number per customer ID in some instances, right? We've got phone customer. What if phone customer is sometimes in there twice, along with more than one phone number?
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=92)** That would be interesting. Credit card number. In this instance, this might not be terribly important. But in a retail situation, it's quite common that credit card number ends up being a proxy for customer ID because cash customers, you might not know that they came back. So if you were doing something like market basket analysis and you did not have a loyalty program, credit card number might be the only way to do that. Now, there's two critical reasons why we're going through this exercise. One is the last thing that you want to do is accidentally put these potential ID fields into the model. So if nothing else, you have to identify them to exclude them from any modeling process down the road. But the other reason is what we've been hinting at, which is these might allow you to generate new variables, variables that you weren't anticipating before. So for instance, you don't have a loyalty card number but you do know that you only have email addresses for people that have filled out a particular form. So for both of those reasons, it's very important to go through your data in looking for this kind of information.

> [!info]- Semantic Content
>
> **Analogies:** for instance (3)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Dealing with duplicate IDs and transactional data](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=0)** - Okay, so we've got our customer file. We're in the same file, phone service customers and we've got our ID field. What might we be merging this with? Well, let's take a look. I've got another file, Here It's called monthly statements. It's also found in the originals folder and here we go. We have several monthly statements. It looks like six of them for customer one zero zero two, four zero. So what kinds of variables can we generate with this? Well, if we talk to our subject matter experts and we find out that the reason that they've gotten six monthly statements is because they've only been a customer for six months. Then the number six becomes interesting. That's their customer tenure. We might want to calculate average drop calls. We might want to calculate maximum drop calls. Maybe what drives churn is that if they get a bunch of drop calls, just once they get upset and they want insurance. So maybe it's max drop calls that we're interested in. Same kinds of things for international calls and U S calls, averages, maximums, minimums, medians the whole nine yards. We might generate hundreds, literally hundreds of variables from transactional data like this. Now you're not going to get hundreds of variables from just five columns but if you had a real phone bill here you really could generate hundreds of variables. So let's take a look at what else you would be doing. So let's go back to the other file 'cause we're not done yet.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=92)** So you want to imagine now that you're going to have a whole bunch of new columns and heres your max drop variable, which obviously you would calculate with your software and populate all of that. But there's other possibilities too. Let's insert another column. We might want to put number at household. So if we find out that there's more than one customer hiding here somewhere that also resides at 34th 92 weekly street. We'd want to ask our subject matter experts, if there's some way to confirm that, like if we have a household ID. But possibly we don't, but we know that they go to the same address. Now granted, we don't know if their husband and a wife. If they're roommates but otherwise unrelated, we don't know. But it might be very interesting to know if they live together in the household. For instance, when I was on a churn project I discovered that when one household member churned, it was more likely that another household member would churn within the next few months after that. Also we might go with the phone number and we might simply do, number of phone numbers with this account. Number of numbers seems like a strange way to do it but I'm just going to say number of phones, let's say, right. And again, there would be dozens of these. So what you're basically doing at this point is you're working at two different levels. You're merging data in that's transactional in nature.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=188)** That's one example of a one to many relationship that you're getting down to a single row. But the other kind of one to many relationship that you're bringing on to the single row could be one ID to more than one address or one ID to more than one phone number. And again, numerous examples of this. So look at all of your ID fields and find out where you have one to one relationships. Like you would expect one unique name for each ID but where you have those one to many relationships, there are potential new variables hiding in those one to many relationships.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Analogies:** imagine (1), for instance (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - okay (1)

#### [How many potential variables (columns) will I have?](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=0)** - [Instructor] Okay, we're going to continue in the same dataset. Let's talk about a slightly different but related issue now, which is trying to get a sense of how many of these variables in this customer file will be potentially good input variables in a predictive model, down the line. Well, our ID field isn't going to help us at all in the modeling phase, even though it's critical now. These new variables, these features, we usually call them [[Feature Engineering]], is the phrase of generating this new information from the original information, those are probably going to be terribly helpful. Gender, possibly, but look, all of this stuff really can't help us at all. The only thing we could hope to do with City is that maybe we have certain promotions going on in some cities and not others. Same kind of thing maybe with State, but look at this, people tend to to think, "Wow, I have dozens of variables. My model is going to succeed. I have so many variables. How can I fail?" Well, these two columns are the same thing. You'd be surprised at how many people don't make note of that when they first pass through. These two variables are the same thing, and really, all four of these variables aren't really variables at all. They're really just identifying information again. Unless you're going to merge it with something, there's not much you can do. EmailAddress isn't going to help us. We've already seen the kinds of things you can do with these variables, but you can't use them directly. You could extract area code from TelephoneNumber. Maybe that tells you something.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=95)** This column, completely useless, right? We know that for a fact, because it's always the same. All of these customers are US customers. All US customers have one as the prefix in the phone number. Credit Card Type isn't going to help us. The Credit Card Number, again, might allow us to merge things, but can't be used directly in the model. We've gone through dozens of columns now. None of them are helpful. Occupation has numerous, numerous categories here. By the way, these are somewhat silly occupations because they come from [fakedata.com](https://fakedata.com), but you can see that there's far too many. It's much too granular to be useful. Same for Company. Latitude and Longitude could be very interesting, but it could be interesting as distance to the store, distance to a shipping location to address cost. Those are interesting questions, but these variables cannot be used directly. Same with ZIP code. ZIP code isn't useful at all directly, but it might be useful to bring in some neighborhood-level data. So, now we get to the variables that probably got pulled from other places, PhoneModel, Date Of Birth, and so on, but most of these are not useful right now as well. PhoneModel, also too granular. It's only on occasion that I see the same one repeating. I see 105D, 105D, 105D, 105D. This is too granular to be used as a nominal variable. Now, I haven't counted the number of PhoneModels. Maybe there's only six,
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=188)** but it looks like there's more like dozens of them. Date Of Birth, date is not useful directly. Now, I can calculate their age. That might be useful. I can calculate the distance and time between when they became a customer and their last transaction, or when they became a customer and their first transaction, or how old they were when they made their first transaction. Those are all interesting, but Date Of Birth itself I can't put in. All of these got pulled from something else, it looks like, because they're different in character, they're different in kind. Whether or not they belong to our Phone Customer database, as opposed to cable, or TV, or whatever other services we have, but everybody's true, because we're only looking at phone customers, so this variable is not useful. Whether or not they have our proprietary phone app. Some do, some don't. That might be useful. Whether or not in addition to being a phone customer, they also belong to our TV service. Sometimes true, sometimes false. That might be useful. We'd have to get clarification on what this Spend is referring to, potentially useful. Number of Features, it's probably a la carte things they've added, like are they on our international plan, or something like that? That's probably useful, and we have our target variable. Thank goodness for that. We always need that. So, reflect on this for a moment. Dozens of columns, almost three dozen. We have about three dozen columns here. Only a handful are useful right now, and the most promising ones
>
> **[4:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=280)** are probably all these new ones that were added, as well as a couple of them on the far right-hand side. So, many fewer than you might have thought you had when you first opened this table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (1)
> **Env Vars:** zip (2)
> **CLI Commands:** make (1)
> **URLs:** [fakedata.com](https://fakedata.com) (1)
> **Speakers:** - [instructor] (1)

#### [How to deal with high-order multiple nominals](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=0)** - [Instructor] Now let's talk about an issue that I think very few modelers handle in an optimal way. Let's take a look at the far right-hand side of the phone service customers data set, specifically the phone model variable, and I've turned the filter on so that we can quickly take a look at how many models we have. What most analysts would do at this point is just treat this as a nominal variable, but it simply is not the best way to go. For one, there's quite a few categories here. It's not at the breaking point, but there's quite a few. So you could debate whether or not to call this a high order nominal or a very high order nominal, but what are we going to accomplish if we put this directly into the model? What's going to happen when these model numbers change? There's a much better way, and let's take a look at what it is. Now I have a new data set, the phone model spreadsheet, and this is found in the originals folder, and what we have is those same phone models over here. And we've taken the characteristics of the phone, information about their screen size, and so on. If we use phone model as an ID and merge in this information, then the presence of 4K video, how the security is handled, whether it's facial recognition or fingerprint,
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=93)** and other information about the phone gets pulled into the model. And as new models come online, this information can still be used in the ultimate model. So please resist the temptation to take the easy way out, which is to treat phone model as a nominal variable. Much better, use it in a lookup table to pull in information about the phones. The model will be better, it will be more accurate, and it will be more resilient to change. So since we're in the data understanding phase, be looking for opportunities to use exactly the same approach. Zip code and neighborhood information is another possibility. Look for those variables that you can use as a lookup table, and not simply as a nominal variable in the model.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Challenge: Identifying the level of measurement](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=5)** - [Instructor] Welcome to your first challenge. This challenge is going to be very straightforward. You simply have to make note of the level of measurement of each of these columns. First, a little bit about the data set. This is the famous Titanic data set. You can find this version of it in the originals folder. So something to make note of, if you've encountered the Titanic data set before, this might be a little bit different than what you're familiar with, because it's both the train and test partitions. Normally during data understanding, we're looking at all the data, not only the train partition. So there's a new column, column M here, that designates whether it's train or test. That's obviously a binary variable, so don't really worry about that for the purpose of the challenge. And then your target variable here is complete only for the train data and not for the test data, which is much further down. There you have it. That's all you have to know about the data set. So simply make note of the level of measurement, and in the solutions video, I'll give you what I consider to be the answers. One final thought, remember that we're using an expanded notion of level of measurement here, not only nominal, ordinal, and scale, but the other categories we've been talking about. And if you work efficiently, you should be able to do this in about 10 minutes, but take some time to look over the variables as you work. Hope you enjoy the challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Identifying the level of measurement](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=0)** - [Instructor] Okay, let's talk about the level of measurement of each of these columns. Obviously Passenger ID is going to be an ID field. Survived is clearly a binary. Now granted, it's missing for the test data, but for all intents and purposes, it's a binary so that special kind of nominal that we talked about. Passenger Class. It's got three categories, first, second, third. Order is important here. It is true to say that second is in between first and third, so definitely ordinal. Name field. Definitely not nominal. Can't possibly be nominal. The reason is is that there's as many names as there are IDs, so logically we really have to think of this as an ID field. Now granted, if you stripped away just the last name, you could make some kind of variable that you would consider a high order nominal that was family unit or something, but really this is just as much an ID field as ID is because there's a different one for each row. Gender in this data set has just two categories. This can be certainly thought of as a binary. It's not a zero, one variable like Survived is, but if could be dummy coded, and after doing so, it would be zero and one. Bottom line is it has only two categories
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=95)** in this data set. We can think of it as a binary. Age is definitely a scale variable. No debate there. Sibling, Spouse, that's what this variable stands for. This is a scale variable as well. However, it is not unreasonable at all to treat this in an algorithm as an ordinal. The reason is that we've got only whole numbers and we don't have that many of them, so you could absolutely declare this as an ordinal, depending on what algorithm you were going to use down the line in the modeling phase. Same for Parent, Child. Ticket. Sometimes people get a little turned around on this one, and you think well, maybe it's a nominal variable. If it's a nominal variable, it certainly a high order nominal variable, and we can't use it as a nominal variable in a model. It's basically an ID field. What makes this tricky is there isn't quite as many different tickets as there are IDs, but you absolutely cannot use this as a nominal, so you want to think of it more like phone number or address. There may be some duplicates in here, but there's just too many categories to think of this as a nominal. Best answer, ID field. Fare is definitely a scale variable. Cabin, another tricky one perhaps. You really can't think of this as a nominal variable. There's just too many categories,
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=189)** but you might think it's a terrible ID field because there's a lot of missing data. What are we supposed to do? It's more like an ID field than anything else. If you stripped away the letter, which appears to be what level of the ship they're on, level C, level G, so on, then that letter could be a nominal variable, but this cabin ID is really more like an ID field. Embarked, definitely a nominal variable. Looks like we have three categories, and Train Test. We can ignore that for this purpose. It's only got two categories, but again, we're never going to use this in a model. It's just our train, test partition. So, there you have it. This simple task is sometimes a little bit trickier than it looks at first.

> [!info]- Semantic Content
>
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Data Loading and Unit of Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing the KNIME Analytics Platform](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=0)** Welcome to the [[Knime]] Analytics Platform. We're going to be using KNIME, for some of the demonstrations in this course, really for three reasons. It's free, it's easy to learn. And it's really been specifically designed, to support [[Predictive Analytics]] Modeling. So it gives us all the features that we would need for the demonstrations. Also, the KNIME folks have made it very easy to download and set up right here on their website. So, let me just orient you to KNIME a little bit. I want to start in the middle, where it says Welcome to the KNIME Analytics Platform! Most of these are links that will take you to the internet, although I don't want you to feel the pressure to do an extensive orientation. Our time and KNIME will be relatively brief, and I'm going to tell you everything, that you need to know, right within the course. If you want to go a little bit deeper, the Learning Hub and KNIME TV are indeed very helpful. And I even have a course dedicated to KNIME, right here in the library. Okay so, let's go to the upper left hand corner. And there's one thing that is going to be a little bit different on your copy, more than likely, if you're installing this from scratch and that you just see the reference to NodePit. It's worth mentioning what that is. NodePit is just a place where you can go, on the internet to download community based contributions to the KNIME Platform.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=95)** Since it's Open-source, people develop new Nodes for KNIME, Nodes are the little symbols we're going to see in a moment, that have the various functionality within KNIME. In NodePit is just a great place to go to get some community based ones, that come from the KNIME user community and not from the KNIME company itself. So you won't have that, but you don't have to worry about it, if you did want to install it. You certainly could, you could just go up to File, and you'll see a bunch of different choices, including KNIME Extensions. But we won't worry about that now. So let's go to the EXAMPLES. I love these EXAMPLES. If you just Double-click, it will load them up here, you have to be connected to the internet. And you can see countless extensive EXAMPLES. I'll let you peruse those on your own. And we can just go to the local Examples, and specifically to Basic Examples. I'm just going to Double-click on Building a Simple Classifier. Then I'm going to go to the middle where the Example has showed up. And I can start to manipulate it here, note that if I click on the File Reader, on the right hand side, the help for File Reader will show up and then look at this the Color Manager, we get help on the Color Manager and so on. If you want it to find Nodes, that you needed to build your own Workflow. You could go over here to the left. And you can see countless Examples there. And there's even a search bar, where you could try to find the Node that you need.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=187)** But for now, we're just going to expand this middle window. And you can see that these Examples are not just pretty thorough, they're well documented. So they're really fantastic. I can go over to the File Reader here, since this Example is already to go. And I can click on Execute, takes a moment, then you see that Node has a green dot appearing now, meaning that has been Run. And we could do that with the Whole Example. That really is enough for now. Because each time we use KNIME, we're going to do Simple Examples. And I will walk them through, I'll make one final comment. So when you want to go back, you certainly can, just go to View, Reset Perspective. And say Yes. And the reason that I love that trick is that, that gives you license. to manipulate the [[Windows]] and completely closed things or expand things and not feel as though, it's going to be a lot of work to go back to where you started, that is more than enough for now. So welcome to KNIME.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (16), [[Predictive Analytics]] (1), [[Windows]] (1)
> **Env Vars:** knime (16), examples (3)
> **UI Navigation:** go to (6), double-click (2), click on (2)
> **CLI Commands:** find (2), node (2), make (1)
> **Prerequisites:** set up (1), install (1)

#### [Tips and tricks to consider during data loading](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=0)** - [Instructor] Okay, I want to talk a little bit about data loading. We're going to be working a lot with the Census Income Data Set from the UCI Machine Learning Repository. This is a comma-separated file. Now, let's face it, a lot of the information you're going to be pulling in is going to be from a data table, from a data warehouse or something like that but there's still a lot of information that you're going to get from scraping or pulling down from websites and comma-separated files are still around. So we want to talk a little bit about the challenges of using them. Tab-delimited, of course, would be similar but we'll talk just about this one and it's a comma-separated file. So here's the top line and we see that there's no header. That unfortunately is commonplace for this kind of file. Everything is separated by commas. So a couple of things that I always keep my eye out for. Strange characters, like we have a question mark here and it's actually embedded in the data. That's fine. You know what would be worse, I'm going to briefly make a change to this. I'm not going to save it this way, of course but I am going to get rid of that question mark. You really want to look out for a couple of commas with nothing in between or worse yet, three commas with nothing in between. That can make a real mess. We don't have that problem here but some files, every once in a while, don't put a placeholder in between the commas. So when there's missing data,
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=92)** it can cause challenges. So at the moment, we notice the question mark and the fact that there's no headers but this doesn't seem to be really bad. One more thing about those commas that if the number of variables on two lines is different, that can cause all kinds of problems. Since the comma placement seems to be uniform, we don't seem to have any big challenges like that. Let's take a look at what this might look like if we brought it into [[Microsoft Excel|Excel]]. Okay, now what I've done is without importing it into Excel, I've simply right clicked on it and forced it in and Excel didn't know what to make of it. It didn't recognize the fact that this was comma-separated and this is one big string. Don't be terribly surprised if this happens. So the solution really is twofold. At the moment, this file is called adult.data. That's exactly how it was pulled down from UCI. You could add .csv to it and then Excel would recognize it as comma-separated or you could use the import feature in Excel and bring it in. In this course, we don't have to worry about any of this because I've created an Excel file with the same information. So you won't be using the CSV file but these are the challenges that you might encounter on our real-world project. Let's take a look at it in [[Knime]]. Here we are in KNIME. And all I've done is dragged a File Reader over and an Excel Reader over.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=188)** These aren't your only choices. If I go to the left-hand side and click on IO and click on Read, we've got Excel file, CSV and so on, okay? The File Reader is your Swiss Army Knife in KNIME. It can read a whole bunch of different things whereas the CSV Reader can only read CSV and the Table Reader is rather unique to KNIME. That's really kind of KNIME's proprietary format. So File Reader and Excel Reader would be the way to go. Let's start with File Reader. I've directed it to the Originals folder. That's the only step that I took on my own. And note that we have I and S, they're in the header, indicating that it recognizes it as an integer or a string. And this is good. What's not good, of course, is that we don't have a header row. We can tell what to read a header row but we don't want to do it in this instance because there is no header row. We're going to have to type in these variable names on our own, and that's a bit of a pain. So for our purposes in the course, I've provided you with an Excel version of this file but remember that integer string business. It's very important. In the File Reader, we can override what it says and tell it that it thinks it's an integer but we want to call it a string. That's something we can do in the File Reader that we cannot do in the Excel Reader. Let's cancel and go over to the Excel Reader. Again, all I've done is told it
>
> **[4:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=283)** to look for it in the Originals folder. Now, this is the Excel file that I have prepared for you so it does have column headers. Let's inform it that that's the case. Table contains column names and row number one. And then we're going to need to refresh. If we didn't do this, it's going to think that every variable is a string. Notice at the very, very bottom, you can see that. That is bad news because these are not all string variables. It's confusing the headers with the data. So I'm going to refresh and now it recognizes that some variables are integers and some variables are strings. So we're actually in good shape. For all of our future work in KNIME, we're going to be using the Excel Reader node with the Excel file that I have prepared for you, not the original data from the UCI website. That Excel file is in the Originals folder.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (16), [[Knime]] (6)
> **Env Vars:** knime (6), csv (4), uci (3)
> **CLI Commands:** make (3), node (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is a  (2), is called (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Unit analysis decisions](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=0)** - [Narrator] I want to talk about a terribly important issue, and that is, how to structure your data set in terms of what you want your row to be. Now, I'm looking at the Census Income Data Set in it's [[Microsoft Excel|excel]] version, in excel with the header row, so that we can focus on the data. So we don't have to worry about setting up the variable names, everything's all set and Census Income Data Set in its excel form is found in the originals folder. So this is set up currently, so that we have a single individual, top row, for instance, is a 17 year old that is never been married. That is the child of the household, or apparently in the household is female. Actually had a large capital gains, which is unusual if you look at this column, there's a lot of zeros there. And total income is under 50,000. Okay, so it's set up so that every row is an individual. And we're trying to determine if that individual is going to make less than or more than 50,000 and what the predictors of that outcome would be. It's critical early, early on to ponder the following question, might we contemplate setting up this data another way? Because if we change the underlying structure of the data, it's going to change everything that follows. So it's a very big decision.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=92)** And here's the question. There's a rule of thumb that says that you shouldn't spend more than 28% of your income on housing. But that's really household income. So how might we think about this? Well we don't have a household ID at the moment. Let's go to the far right-hand side again, but let's say we did, for instance, let's go to relationship here. We have husbands, wives, unmarried folks. What if we were to determine a household ID after all this is census data, that's probably possible. And we (indistinct)aggregate those rows up, to summarize that. Well, we could have total hours per week. Sounds strange at first, but it actually might be interesting. We could have average hours per member of the household, but again, the total hours worked would not be so bizarre in that context. If we were trying to figure out if the household collectively could afford the home or rental property that they ran, again, if we were testing this 28% of your income towards housing rule, it would also really simplify capital loss and capital gain because we could sum that over the household. I'm not trying to suggest that the top four rows were household, but you get the idea. Where it would get complicated, would be education. Would that be averaged to sum that would be rather strange. What if some individuals were working and other individuals weren't,
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=184)** perhaps we would have to look at out of five members in the household, three were working and two were not. One was working in the home, let's say, and one was unemployed at the time of the census. He got the idea would change the structure a lot. It would also massively reduce the number of rows because if we had 100,000 individuals, we probably only have 20,000. Let's say households or 30,000 households with a lot of folks living alone, you get the idea. This is a major, major thing to consider. So why does this come up? It's usually the nature of the intervention strategy, or the nature of what you're trying to predict. So if we're trying to understand individual incomes, this structure makes a lot of sense. If we're trying to understand the affordability of the home to the household members collectively, then rolling it up makes sense. If we were doing something completely different like cell phone, and I wanted to prevent you from churning on your cell phone, by sending you a text message with a discount, I'd want to do that at the individual phone level. If I wanted to understand how a household relates to their cell phone account, I might want to use account ID. You get the idea very, very important issue. We've only scratched the surface, but I wanted you to be aware of this very important decision to make early on, when first looking at your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Analogies:** for instance (2)
> **Prerequisites:** set up (2)
> **Best Practices:** rule of thumb (1)
> **Warnings:** be aware (1)

#### [Challenge: What should the row be?](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=0)** (upbeat uplifting music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=5)** - [Instructor] Here's your next challenge. You're going to determine how to structure a [[Predictive Modeling]] problem using the Titanic dataset. It's the same dataset, we'll be grabbing that from the Originals folder. It's not as obvious as it sounds, and you'll have to run some very brief analyses to solve the puzzle. We're going to have to simulate a bit of what you would normally learn during the business understanding phase. The incredible popularity of the Titanic dataset has a lot of advantages for using it for a short challenge like this, there's so much information out there about it, but it has one major disadvantage. It's from a unique accident, and not from a recurring event. So in a sense, there's nothing to predict. Let's do a little thought experiment using a feature of the accident that we're all familiar with, the lifeboats. Let's imagine that what we're trying to predict is not if they survived or not, but whether they got to the safety drill on time. On a modern cruise ship, all passengers must report to their assigned lifeboat before the ship can leave port. This is a mandatory drill that you may have experienced if you've taken a cruise. Everyone's name has to be checked against a list. So here is your job. When the model is eventually deployed, we need a risk score to determine if anyone might fail to show up at the mandatory drill on time. Always assume that there's some intervention
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=100)** strategy in mind. That most likely in this case would be some kind of escort. The question is how to set up the problem, and your answer must be based upon the data. When building the model, you'd worry about all kinds of things, like if there's a set of stairs between their cabin and their lifeboat drill location. But we aren't building the model yet. We are deciding how to set up the problem. So here's your challenge. Pick one of these and justify your answer based on the data. Assuming that some kind of escort is going to be sent, do we score each individual on the ship, score cabins and send an escort to the cabin, or try to do something with a family unit, which implies we have to define what family means in this context. This challenge will take a good 15 to 20 minutes. It could certainly take potentially more. But your solution doesn't have to be perfect, just rule in some and rule out others of the three possible answers. I hope you enjoy wrestling with this, and in the solutions video, I'll give you my thoughts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Predictive Modeling]] (1)
> **Prerequisites:** set up (2)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat uplifting music) (1)

#### [Solution: What should the row be?](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=0)** - [Tutor] Okay, here we go. This is going to be more thought process than definitive solution because to make a definitive decision about this, you'd have to look outside the data set and consult with a subject matter expert. Nonetheless, we have a lot to consider already. So this is what I've done. I've got the Titanic data set in its original form, which you can find in the originals folder, and I've added a new tab with a pivot table. I've also turned on the filters so we can take a look. So if we click down and filter here, it looks like we have as many passenger IDs as we have passengers. It looks like almost all the numbers are used so that's good. That means that if we wanted to do a risk score at the passenger level, it looks like we don't have duplicates and so on. That's certainly a plausible way to go. What about the other options? Let's take a look at Ticket for instance as a possible way to get at the Family Unit And we click here and we see there's all kinds of weird patterns. We can see tickets that are just numbers, and if we scroll down, now look at how many different choices there are all of a sudden we're into six, seven digit ticket numbers. If we keep on going, we get to all kinds of letters and all kinds of things going on. There seems to be no rhyme or reason to Ticket. So certainly without advice from a subject matter expert, we're not going to be able to find Family Unit using Ticket unless we learn a lot more
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=93)** about what's going on with that coding scheme. Also, it appears that there's more Tickets probably than Family Units, it's a real puzzle Let's take a look at Name. Now there's as many names as there are passengers. We could try stripping away the surname, we'd have to determine if that was reliable. Do we have unrelated individuals traveling together? Also we'd have to do a little bit of text parsing to do that. So again, we can't rule it out completely, but it seems problematic at the moment. What about Cabin? Well, if we look here, there's a whole bunch of different Cabins. Keep on scrolling down, we notice some strange patterns like more than one cabin listed. And all the way down at the bottom, we do have some blanks. So let's take a look. Scroll back up to the top, deselect all, go back down to the bottom and select just the blanks. And it looks like there are hundreds and hundreds of blanks. That's a real factor. So let's go back, return to all the data. There we go. And let's take a look at the light that a pivot table could shed on this. So what I'm going to do is I'm going to drag passenger ID down to rows, and I don't want the sum that's what it automatically gives me. What I want is the count. And it looks like we've got no duplicates.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=191)** Not trying to impress you with my [[Microsoft Excel|Excel]] prowess, I work in [[Predictive Analytics]] workbenches more often than I work Excel. But that was quick and easy enough, we figured out that it looks like all the passenger IDs have one passenger assigned to them and that's it. That's important to know for our purpose. So let's take a look at Ticket because it looks somewhat promising. We're going to do the same thing. So we've got Ticket and count of Ticket. We've got a ticket here with eight, we've got a ticket here with two, we got a ticket here with two, a lot of singles, a ticket here with three. Tickets starting to look a little bit more interesting. Let's go back to the data and take a look at this one. Let's see if it's picking up on family name, let's see what the dynamic is there. We go back to full data and Ticket, deselect it was 1601, I believe. wow, it's actually quite an interesting pattern. They appear to be unrelated males traveling together and this makes me suspect that maybe Ticket has something to do with the travel agent or who sold the ticket. Maybe these gentlemen all came in looking for a ticket at the same time. Perhaps they were transiting. I mean, the names certainly looked like they would be Chinese names as opposed to French or European names. This would be about 100 years ago, there's a distinct possibility that there was transit before they reached Europe. That might give us a clue as to what Ticket
>
> **[4:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=285)** is really telling us. It could be telling us a bit about the trip that they made prior to getting on the Titanic, who knows? But these are mysteries that would have to be solved if we're going to use Ticket in that way. It's not perhaps what we thought it was going to tell us. So now let's take a look at Cabin through the lens of the pivot table. So we'll get rid of Ticket. We'll go ahead and bring in Cabin, drag down Cabin. Get rid of that. And what do we have here? How many people do we have in a cabin? A lot of singles. We've got three people in a cabin down here. We got two people in a cabin in there, but a whole bunch of singles and then we certainly saw that there were a lot of blanks. So what's the bottom line? Clearly we can proceed with passenger ID and give all passenger IDs a score. Parsing the last name, not clear that's going to help us but we haven't really tried it yet. Ticket clearly is going to give us trouble. Cabin we have all those blanks. So we're hitting roadblocks all over the place. It doesn't mean that the other options couldn't be pursued. But at the moment, only passenger ID looks like we're ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Predictive Analytics]] (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** scroll down (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [tutor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Describe Data

[↑ Back to Table of Contents](#table-of-contents)

#### [How to uncover the gross properties of the data](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=0)** - [Instructor] Okay, we're back in the [[CRISP-DM]] document. You know, far too few look over this document carefully enough to discover that the real heart of the document is part three, the user's guide. That's where the phases in the tasks are discussed in greatest detail. So of course it begins with the first phase but let's advance in the document to the data understanding phase. And we discover that it begins here on 37. But let's further proceed to the second task. And here it is, describe data. With that phrase that I love, examine the gross properties of the acquired data. So let's take a closer look at what it has to say about describe data. The first topic this section discusses is what it calls the volumetric analysis of data. If you're looking in unusual places as I recommend, sometimes you'll get data directly from the subject matter expert and not via the data warehouse. So it really is important to document where you're getting all of this data. There's one issue where I disagree slightly with CRISP-DM. It's a bit ambiguous in the document and I want to clear this up. I would save the descriptive [[Statistics]] for the next task, explore data, because you want to move more briskly here in describe data, mostly focus on what are the typical values and if they are nominal or ordinal
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=97)** and if so, how many categories? Finally, is there anything that looks unstructured, like free text? So don't overthink it. Just make notes of what you observe. Now let's zero in on more specifics. What's the level of measurement, as we just mentioned? What are the normal ranges or values? What are some weird values that you see? Does the data make sense? Do you have questions for the subject matter experts? Does it look like something you can work with? You are really just at the surface but, moving along briskly, the idea is that you are listing issues and questions, questions that might require a conversation or a meeting so it's best to get the conversation started. With practice, you'll make a first pass at a data set at a pace of about five minutes per variable or even less. If someone gives me access to data and I can't work with it for some reason, there's no shame in that. You talk about it. But if I've had the data for three weeks and I have to say that, it's embarrassing. So make your initial pass efficiently. Within 24 to 72 hours, you should be able to say that you've opened it, looked at it, and have some initial comments and questions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CRISP-DM]] (2), [[Statistics]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** crisp (2)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Researching the dataset](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=0)** - [Narrator] I want to talk a little bit about how to properly research a data set. And I want to caution you against relying too heavily on subject matter experts. They're critical to what we do, but they're also busy. So you want to be as self-sufficient as possible. So here we are. We're looking at the UCI webpage for the census income data set. What I want you to imagine is that you're pulling data from a data warehouse or from another source. And the IT team is going to maintain some kind of a data catalog, data dictionary, [[Metadata]] that's going to help you understand where the data is. However, don't underestimate how frequently you're going to be pulling data from all kinds of different places. Census data, tied to zip code, to better understand the neighborhood of a customer or possibly weather data. There are numerous times that I'm reaching for data outside the context of a data warehouse. So let's scroll down a little bit. And at first glance you think we pretty much have everything we need. We have the attribute information. It explains that we have age and work class and education and so on, but there are some mysteries. Like we have married-civ-spouse and married-AF-spouse. Well, my intuition tells me that civilian and armed forces, but that's the kind of thing that we'd want to confirm. Other things that are a bit odd, like what is own-child? Why is that own-child and not child?
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=95)** What's going on there? So where are we going to solve these mysteries? Well, clearly you could reach out to your colleague who generated this data or someone in IT, but why not take a step on your own and try to figure out some of this? For instance, we know that this was actually extracted by somebody from the 1994 Census database. You guessed it. We're going to check out the 1994 Census database and see what we can find. And sure enough, there's a whole description of this, including an extensive document. So let's check out this PDF, also available right there on the web. This is just one part of many. It's the beginning. And it's a huge document with lots of detail. I started to go through this document and I was struggling a little bit. So I searched for some of the specific terms and I hit pay dirt. I found that in general terms not tied to 1994, but more generally, there's a glossary of sorts here on the census website. What in particular caught my attention is this notion of a reference person. Let's take a look. The reference person is the person to whom the relationship of other people in the household is recorded. Oh, I've got you. So if the reference person is the father, then the own child would be their child, as opposed to perhaps an unrelated person
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=188)** living in the home. Let's try to confirm this. I'm going to go up and read more about household. So up to the top, here we are, and go to household. And we have a wealth of information now. A household consists of all people who occupy a housing unit. That's helpful to know, and we have all kinds of additional detail there. If we go a bit further down, there's this notion of the family householder. And it goes on to explain that years ago, one would talk about head of household, but this whole notion of applying stereotypes to who the head of household is, has caused the census to abandon that language. And we talk about the householder, and the householder is the person to whom everybody else is related getting back again to that notion of the reference. It's a bit complicated and we won't try to iron out every detail here, but I wanted to give you a notion of the kind of research that I conduct before I go in to talk to a subject matter expert. And that could be reading the documentation, the metadata in regards to the data warehouse, it might involve going in the web and it frequently involves going on the web so that when I get that 30 minutes with a subject matter expert, I'm using their time efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2)
> **Tools:** notion (5)
> **Env Vars:** uci (1), pdf (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Analogies:** imagine (1), for instance (1)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Warnings:** caution (1)

#### [Tips and tricks using simple aggregation commands](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=0)** - [Instructor] Here we are in [[Knime]] and we're going to do some simple aggregations and sorts. The reason this is valuable is that we'll be able to quickly determine what's going on with our IDs and our high order nominals the same kinds of things you might do with a pivot table in [[Microsoft Excel|Excel]]. But I think it's especially quick and easy in KNIME. So let's start with the aggregation. So that's called the GroupBy node. If we just start to type it, it will help us find it. Here it is. We can drag it into place and let's be clear on why we would want to do this. It's those very high order nominals that really cause us trouble and in this data set country of origin is one of them. It's got a few dozen categories and that's a bit too many for us to include. We don't want the software to automatically dummy code it. That's really the issue that would bring us to something like the GroupBy node. So let's take a look inside. Don't worry about that red light indicator. It just means we haven't given any instructions yet. So native country, there we go. So what that's going to do is create a row for each unique value of native country. So now what we need is some kind of variable to summarize there. So we could for instance, take age and it immediately wants to do average age based on native country, but at the moment, we're really just focused on count. We want to know which countries are common and which countries are rare.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=93)** So we could bring in any number of things, mean, median and so on. And the context of KNIME, the explore node does a lot of that for us. So here we're focused on count and we've got age, we got count. We really could use almost any variable, but age is complete and that's going to be helpful to us so that we can focus our attention on the native country variable. So we'll click on, okay, now we have a yellow indicator, meaning that it's almost ready to go. We gave it some instructions, but we haven't run it. So we're going to execute. Then we're going to look at the group table and it's kind of interesting. We've got a bunch of question marks. We've got Cambodia, Canada. We can find all the information we need here, but boy, it would be a lot easier to read if we sorted it. So let's do that kind of close that, come back here, delete group and type in sort. That's the fastest way to find it. Here's the sorter node
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=163)** And we can take count descending, okay. Execute and take a look at the sorted table. Now, the reason that you would do something like this in a work bench keep in mind is you might be creating a lookup table or some kind of report. You know, we're not just going in here to generate a table. That's the issue at the moment, but we might be doing an elaborate merge. We might be doing [[Data Integration]]. So there's lots of applications for GroupBy, but our GroupBy followed by a sort now clearly indicates that the majority of our cases are from the US substantial number relative to the other countries, at least are from Mexico and 583 are from an unknown native country. We can make that a little bit wider so that we can read it. So what will we do with this information? Well, clearly we're going to be in trouble with the one person from Holland and the 12 people from Scotland and the 13 people from Hungary. So what's going to happen is rather than creating dozens of dummy coded variables. We're probably looking at something like US, Mexico, Canada, Europe, Latin America, Asia, something like that. The detail that you get from this level of granularity seems helpful, but all of those dummy coded variables are going to be a problem. So here you go. You can explore those high order nominals in KNIME using the combination of GroupBy and sort.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (4), [[Microsoft Excel|Excel]] (1), [[Data Integration]] (1)
> **CLI Commands:** node (4), find (3), make (1)
> **Env Vars:** knime (4)
> **UI Navigation:** click on (1)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [A simple strategy for organizing your work](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=0)** - [Instructor] I'm in the Census Income Dataset spreadsheet, but I've added a new tab. I've added a tab where I'm going to be placing some notes, and this is just to illustrate a very simple strategy for organizing your work while performing this task. So what I've done is I've taken all the variable names and then transposed them, so that constitutes my first column here, just all the variable names. Then I've come up with several column headers. Now there's nothing magic about these column headers. They're similar to ones that I will typically use. On each project, I might add or subtract some very basic things, but what I have is where the data's come from, so notice that a number of these are just coming from the original source. I put UCI here, I could've put census as the source. Frankly most of the time, it's going to be an explicit reference to a data warehouse table, but on occasion you won't be getting it from the data warehouse, you might be getting it directly from SME. Also notice that it's my opportunity to flag here that three of them are derived variables, new features that I already know that I'm going to want to do. I have a column here for a potential role. Most of these are going to be input, some of them I'm quite suspicious are not going to work out, but they have problems. Some of those problem variables have inspired the new derived variables. I've got level of measure, I actually have an added level of measure for this. Don't think of this worksheet as being complete.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=94)** I'm trying to give you a feel for how you would work through this, okay? But let me clarify what I mean. So down here for instance, I've got a scale variable capital gain that has a huge number of zeroes, that's going to pose a problem. So I've already made note to myself that I'm going to have a gain yes or no variable that's going to be Boolean in nature that I'm going to use. So that's going to be a binary. In fact actually, I think that sex has only two values in this particular data set, so that's a binary as well. You get the idea, right? So this is note taking, this is not complete, it's not official. The column headings might change a bit as I have said, but really is a powerful working document. So why would the number of values, my next column, be important because that's going to separate the nominal variables that are going to be no deal from the ones that are going to cause trouble. I don't want native country for instance, which is clearly a high order nominal, to generate 41 dummy-coded variables. There's nothing especially strange about having a question mark as a variable, but it's a little bit of an odd way to signal that something is missing. If I go back to the actual data, you can see that the question mark is not figurative, it is explicitly in there. So is that going to be explicitly in there during deployment, during scoring? Am I going to need to have if then statements that say if work class equals quote question mark close quote,
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=189)** you get the idea, I have to resolve this. So that's going to be something that I want to ask my colleagues and ask a subject matter expert. The relationship variable does have some odd categories that aren't entirely clear, I'm going to want to discuss that with an SME. I've noticed for instance that got a lot of zeroes here because most people don't have gains or losses. So I want to make sure, is that included in my 50,000, is that not included in my 50,000, that would be in my notes to ask an SME. I don't have complete formulas yet, but I do know basically that gain is either going to be a non-zero number or it's going to be a zero, so a non-zero number would get a one, a non-zero number would still get zero, and I'm off to the races, okay? So again, this might evolve a little bit to fit your particular project. But I do something like this, on every project I find it extremely helpful. Simply transpose your variable names, come up with appropriate columns, and be populating the spreadsheet as you go through the task.

> [!info]- Semantic Content
>
> **Env Vars:** sme (3), uci (1)
> **Analogies:** for instance (3), similar to (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Data Description Case Studies

[↑ Back to Table of Contents](#table-of-contents)

#### [Describe data demo using the UCI heart dataset](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=0)** - [Instructor] Okay, welcome to a brand new data set. This is the heart disease data set from the UCI Machine Learning repository. I want to make a couple of general comments. First, we're introducing this dataset for extra reinforcement of the skills. So we won't be introducing new concepts, we're going to be practicing them on this new data set. We'll be doing that in the current section. And then further along in the course when we've added some skills to our toolkit. Okay, let's take a look at the data dictionary that's been provided here, that's always helpful. So the first thing perhaps that you might notice is that there's a very small number of instances. Try not to be too distracted by that because this is what I want you to imagine might happen. I encounter this in real world projects all the time. The [[Data Collection]] might be ongoing. This data is being collected. It seems like measurements of patients basically at different locations. So the measurements might be ongoing. Meaning the amount of transactional data is increasing and the number of patients might be increasing as well or we might only have a sampling of the locations. The reason I explain all this is that it's so important to look at data early when there is ongoing data collection. Many analysts will make the mistake of waiting until the data's complete because we're all busy. We have different things going on. But the reason that is potentially a really critical error is that now is your opportunity to influence the data collection from a machine learning point of view. Imagine that you've got heart doctors, and an IT team,
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=97)** perhaps, there's no one really thinking about it from the modeler's point of view. And you might be able to intervene early to prevent a problem with data collection, which would be really powerful. Let's scroll down and look at some of the details. So we have a whole bunch of attributes, and I want to pause here for a moment because I see this phrase only 14 attributes used. Please ignore that. And let me explain why. Obviously we want to attend to the doctors, the IT team, the subject matter experts. However, this only 14 attributes used could be, those were the only attribute used in a executive dashboard or some other application. We're doing a brand new project with a brand new purpose. We cannot assume that what was used on a prior project is what we will use. So please be so careful about that. It's just really easy to say. Oh, so and so said, I should only look at these 14 variables and then focus only on those. It's almost always a mistake. You really want to thoroughly vet things. Now, you could do those 14 more carefully and the other columns more briskly, that's okay, but don't discount them altogether. Take at least a quick peak. So with that in mind, got an ID, we've got something CCF here that is basically a social security number. Supposedly those were all replaced with a dummy value of zero, interesting.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=190)** Keep on going down to the bottom here. And it's also interesting at the very bottom, there is a few columns that are explicitly listed as not used. Perhaps they're going to be empty. Column 75 junk, not used. That's kind of a weird one. 76, name. This did have personal identifying information and it's been replaced with the dummy string name. So let's take a look. Now, going back up to the top, we've got a whole bunch of different data files here. If we go to the data folder, or in fact here, it says, go into the data folder. You can see there's a whole bunch of different files there. I've consolidated them and provided them in a single [[Microsoft Excel|Excel]] spreadsheet called UCI Heart in the originals folder. Now remember when I modify files with solutions and so on, I put those in the solutions file. And here we are in the UCI Heart spreadsheet. Let's start looking at these variables. Mow, supposedly we've got ID here, but boy I've could see some negative nines. Now, negative nine, particularly in academic environments, also notice down at the very bottom blanks. I'm just using the filter feature in Excel, keeping it simple. Also seeing negative nine here in blanks. Normally that wouldn't concern me, but for an ID field and for something that is a masked social security number, that seems very strange.
>
> **[4:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=283)** Age. Now this is a pattern that's not quite as problematic, but also interesting. We're seeing negative nine. Now that doesn't surprise me because academic-oriented data sets will frequently use negative numbers to indicate missing instead of null. Negative nine, negative 99, even negative 999 are all very popular. I don't know when this trend started, but I've seen dozens of data sets with these negative nines. So that's not a problem. The problem is the combination of some ages that look like they're really ages, combined with the nine, the negative nines, no problem there, but then also the blanks and then also zeros. So it seems like we have different flavors of missing data, and that would start to make me a little nervous. And then we get into some variables where we would expect to see negative nine with some regularity, the actual measurements, sometimes the measurements will be missing. Negative 69 is a little bit odd. Let's go to the far right-hand side, because remember we were told to expect a name column. Let's actually look at location. That's an important one. It looks like the locations look good, but we've got negative nine in this junk column, but also stuff that doesn't look like junk. And then in the name column, we have all kinds of stuff that doesn't look like names. Very problematic. Take a look. Let's remove the names and look at all the stuff
>
> **[6:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=377)** that aren't proper names. These rows look very troublesome. They just don't look right at all. Let's go back to all data. And go to the far left-hand side here. Under ID, again, let's look only at the negative nines for ID. You know what catches my attention too, is that there's four rows like this. You might think why is that interesting? Well, we've got four locations. So if I have four rows and four locations, I immediately think that there's some kind of header row or a trailing row. Maybe the row at the bottom of some data, that's a summary row of some kind or a blank row in between the locations. You have to imagine that these are documents that are being combined or machines are generating those data. The measurements are done and typed into a machine by someone in a medical facility and that it all gets pulled into the system. You look for things like that. So I don't think it's a coincidence, four locations, four blank rows. So this is what I would be focused on next. This is different than missing data. This is potentially a data loading problem or a data dictionary problem. So it really falls fully under collect initial data and the tasks within that. So I would want to very rapidly diagnose this and get it in front of a subject matter expert.
>
> **[7:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=474)** So let me go back to all data and tell you exactly what I would probably do. I would add a new sheet. I would call the sheet discards and the rows that I would contemplate removing because they seem like they're not data. Like there's some kind of a problem there. I would cut them from the main sheet and paste them into the discard sheet and then schedule a meeting with a subject matter expert. So those are my initial reactions, some of my thoughts, but that would be the first thing on my mind. What rows are potentially bad rows and how to document those rows and get my questions in front of an expert.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Collection]] (4), [[Microsoft Excel|Excel]] (2)
> **Env Vars:** uci (3), ccf (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (3)
> **Analogies:** imagine (3)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Practice describe data with the UCI heart dataset](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=5)** - [Instructor] Okay, we're going to continue working in the same spreadsheet with that added discards tab, which is currently empty. And that's your next challenge. To pick up where we left off, there's clearly some problematic data here in the UCI Heart spreadsheet. Identify the rows that you think are the most suspicious, not merely missing, problematic and reflective of a data loading problem. Cut and paste them into the discards tab as if you were preparing for a meeting with a subject matter expert. So specifically, here's your challenge. Identify rows that looked like they don't belong, cut them from the Data tab, and place them in the Discards tab as if you were preparing for a meeting with a subject matter expert. And this should take a good 10 minutes, since you're not very familiar with the data file yet. The simple act of identifying the bad rows might be a bit quicker, but you want some familiarity with the data first. Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** uci (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### [Solution: Practice describe data with the UCI heart dataset](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=0)** - [Instructor] Okay, let's review what I've done. So I started by going through and looking for IDs that were strange because it seems to me that's a variable that should be present and consistent. Then remember that this column, column B is supposed to always be a zero. It's where their social security numbers were. So I was focused on that as well. Notice that the ages now are all within a reasonable range. There's no negative nine for age. Very few rows were taken out by the way, sex variables are now consistent, no negative nines. Again, that would normally be something basic information that you would have for everybody. Then we get into a whole bunch of columns that we expect there to be some missing data, and we don't attribute to a data loading problem. If you go to the far right-hand side, the rows that I've taken out, junk still looks a bit strange. But after all the column is called junk, and it said that it's not used, who knows what the legacy is there. My guess would be that it was used in some locations differently than other locations who knows. But name is something that you really shouldn't expect a lot of problems. I actually see that there's still a couple of negative nines there. Most of them are there, but let's look just at the negative nines. We might have one more row that we have to deal with
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=96)** going to the far left-hand side. We have an ID that looks like it's okay. Age and sex look okay, but negative nine for name. I would err on the side of caution here and also bring that row over. So cut and over to discards. And here we go. So this is the discards tab and I've got blank rows in here I've added comments actually to indicate why I took certain things out. This doesn't have to be perfect. The data sheet doesn't have to be perfect to this point and the discards doesn't have to be perfect. Now you do want to delete rows that you've cut the information out of so that you have complete data, but going back to the discards here, let's remember what the purpose is. The purpose is to have a few examples of each kind of potential error so it can be put in front of an expert, and we've accomplished that nicely. So if your discards tab looks anything like mine, it doesn't have to be perfect, then you've accomplished the mission. But that doesn't mean that we're finished. We have a lot of unfinished business if we were to claim that we've completed the first half of data understanding. Here's just a handful of those unresolved issues. We have to have a level of measurement and notes
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=189)** for all of the input variables and our target. We have to start to turn our attention from bad rows to true missing data. All those negative nines. We have to count up the IDs. We have a lot of duplicate IDs collectively and by location. How many unique IDs do we actually have? We have to start the conversation about what's our unit of analysis. Are we looking at the row of data that we're actually going to model? Some kind of transactional row or are we going to be analyzing at the patient row? And if so, do we have enough? What other locations are going to come on board? So we have lots of questions that we would have to resolve, but for now we've accomplished our challenge and solution.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Explore Data Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [The explore data task](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-explore-data-task?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-explore-data-task?u=76281980&t=0)** - [Instructor] The explore data task is the bulk of the effort that you will spend on the entire phase. And it's easy to get distracted because you'll make some interesting discoveries along the way. It will feel almost like routine reporting and data visualization at times. But remember that we have somewhat different priorities. Try to remember that you're especially focused on things that look out of place. The reason that outliers, quirks, and various oddities deserve your attention is that you'll need to chat with a subject matter expert about them, so you'll want to discover them early. Basically anything that makes you wonder if it's the real value or might possibly be a mistake. So how do you go about it? Based upon the level of measurement run basic stats in simple graphics, you're looking for anything interesting that either indicates that a variable might be promising, that you have a question for an SME, or that something needs to be fixed during data prep.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** sme (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [How to be effective doing univariate analysis and data visualization](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=0)** - There are rules for how to perform Univariate analysis and data Visualization. Univariate simply means looking at one variable at a time. These rules date all the way back to Stevens in his article, "Introducing Level of Measurement." Not only are they what others are going to expect, an increasing number of automated software packages will automatically generate output based on these rules. So you really should be familiar with them. Let's start with the highest level, Scale. And you really can describe it as the highest level because it has the most information content, and therefore you can run the most tests on it. The rules say to run just the Mean, but I always run both Mean and Median. Because if the Mean is much higher than the Median it indicates a skew to the data. So what about min, max and standard deviation? Well, with Scale variables we're looking at a continuous distribution of data and we want to see the shape. We don't necessarily require a bell curve, but we want to know if the data is a bell curve shape or some other shape. So the data visualization option should always be a Histogram. In contrast, Ordinal variables must have a Bar chart, not a Histogram. A Histogram will just conceal the real pattern.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=95)** Ordinal categories while ordered are separate and distinct, that's why Bar charts have those gaps in between. Ordinal variables have a unique set of characteristics. They lack something that Scale variables have. With Scale variables the gap between $1 and $2 is the same as $101 and $102. With Ordinal you don't know that the time gap between the first placed finisher and the second is the same as the gap between the second and the third. So you should use Medians and not Means, and always Bar charts, but never Histograms. Nominal variables don't allow for very much. All we can really do is count. We're interested in which categories are common and which are rare, that's about it. So we're really identifying that most common category, the Mode, and running Bar charts. There is very little else that makes sense for nominal variables. I often focus my attention instead, when working with nominal variables, to running simple aggregations in sorting so that I can clearly see how well the categories are populated. Univariates are important, but they can be done very quickly. Just use the rules to run rapidly through each variable, and don't overthink it.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=188)** And if you have the benefit of automation within your software, you can examine the results at a pace of about one minute per variable, or even less.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - there (1)

#### [Anscombe's quartet](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=0)** - [Instructor] Okay, let's talk about Anscombe's quartet. This data, which you can find in the Originals folder, was developed by a statistician named Francis Anscombe way back in 1973. It has become justifiably famous as a cautionary tale. What he's trying to caution us about is don't pay attention only to descriptive [[Statistics]], and the absence of a graphical representation. So here's the trick. To understand what this demonstration is all about, you want to treat these various pairs almost as if they're separate datasets. We have an X1, Y1 pair, X2, Y2, X3, Y3 and so on. So let's first do some basic descriptive statistics. We can keep it very basic indeed. I'll go ahead and calculate an average here and then I'll close off the parens and we see that we get an average. And I'm just going to drag that across so that we can get an average for everything. And what do we have? We've got an average of nine on all of the X variables and an average of 7.5 on all of the Y variables. Now again, imagine that these are four different datasets and you're predicting Y with X. So, so far, so good but it looks like all the datasets are pretty much the same according to the descriptive statistics. So let's do a little bit more sophisticated. Let's just bring in a correlation.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=93)** So I can say equals and start to signal to it that I want to do a Pearson correlation. I'm doing this in [[Microsoft Excel|Excel]] to keep it simple. We obviously could look at this data in any number of places. So I'm going to take all the X variables and correlate them with the Y variables. Looks like we have a correlation of .82. And if I bring that across, if I'm pasting carefully, I should be able to show that I'm repeating that Pearson for each of those X-Y pairs. Notice up in the Formula bar, it's doing a Pearson, so I'm not copying and pasting the value, I'm copying and pasting the formula, okay? So far, so good. It looks like all of these pairs are telling us the same story about the data. So let's bring in the graphics. Let's run some scatterplots. So I'm going to go ahead and highlight my X and Y pair here. Insert. Here am are my various charts and I'm going to do an X-Y scatter. There we go. It doesn't look too surprising. Let's add a trendline though. Okay, so I'm going to go in here and I want a trendline and I'll do a linear trendline. Look at that, no big surprises. Let's do it again for the X2, Y2 pair. Highlight those, same thing. Insert, Chart, Scatterplot.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=191)** There we go. Oh, that looks different, doesn't it? That has really strong curvilinear in it. I'll go ahead and add the trendline again. I bet you can see where this is going. Look at that. The trendline is actually identical. In fact, if you were to run a [[Linear Regression]], you would get the same coefficients in everything. So I'm sure you can see where this is going but let's continue. Insert, now I can do this with the ribbon or I can do, and the menus doesn't matter. Oh, look at this one, really interesting. It's got a really, really strong linear pattern but with an outlier. Let's add that trendline. Look at that. Isn't that something? This really is a brilliant demonstration and of course, Anscombe himself gets all the credit because he cleverly came up with this dataset. No one actually knows exactly what he did to dream up this dataset but a lot of people have tried to imitate his work since then and with interesting results. Let's do the final one. Yeah, and look at this. You've got this really, really strong vertical pattern. You're going straight up. But with this crazy outlier and I'm sure you've picked up on the pattern now. You can see where this is going to go. The trendline is in an identical location. Really something. I had a fascinating experience once. I ran these Anscombe quartet pairs
>
> **[4:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=286)** through an automatic modeler, automatic data prep was done and then the modeling was automatically done. And it managed to fool the system. All four pairs were treated the same way. I don't blame the folks that designed it. The whole point of this dataset was to reveal this trick. But it managed to fool the auto data prep and I think that's a cautionary tale as well. I want to close by showing you something that's bound to give you a smile and that's a more recent attempt to imitate what Anscombe was doing. Some folks came up with a really interesting idea. They said if Anscombe can do four, maybe we can do several more than four. Maybe we can be a little bit more ambitious. And you can actually see all these different shapes. Let's scroll down. First, there's a neat little discussion of Anscombe's quartet there. But then as you go further down, and this is the one that's just a lot of fun, and here it is, the so-called Datasaurus Dozen. You can see the dinosaur up at the top there and the X, the Y, the standard deviations, the correlation, all the same and we have these crazy patterns. We have circles, we have Xs, we have stars and of course, the dinosaur. And that's just a lot of fun. So Anscombe really deserves a lot of credit for what he accomplished and I hope the lesson has sunk in. Descriptive statistics are important but be very careful to graph your data in addition to the descriptive statistics.
>
> **[6:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=381)** Used alone, the descriptive statistics can fool you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (6), [[Microsoft Excel|Excel]] (1), [[Linear Regression]] (1)
> **CLI Commands:** find (1)
> **Versions:** 7.5 (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [The Data Explorer node feature in KNIME](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=0)** - [Instructor] Okay, here I am in [[Knime]]. All I have on the workflow is the census data set in its original form, being read in by an [[Microsoft Excel|Excel]] reader. Be careful that you've declared that headers are present. I'm going to show the data set. Because this is important to verify, critical really for our task. You can see the little symbols here, I and S. Without them, the tool that we're going to use would not work it has to recognize whether it's integer or a string, because that signals level of measurement and KNIME. We'll close them. So to find the note that we need, type in explore, and you're going to find the Data Explorer, which is part of the KNIME labs. So if it's not coming up, you might have to install the extensions. Go up to file, install KNIME extensions, and you should be all set. But I already have it so I'm going to drag it over into place. And this is really one of the motivating reasons to show you KNIME with a tool like this, there's so much that's been prepared for you that makes your work easier. So what makes this tool special, the so called Data Explorer, is that it recognizes the level of measurement, again using that integer and string information,
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=96)** to automatically do an appropriate type of descriptive [[Statistics]] as well as univariate graphics. So let's right click execute and open views. So this is the report that it generates. And if we look here, we have a tab for numeric and we have a tab for nominal and we have a tab called Data Preview that shows us the original data. Let's start with numeric. It really is fabulous. So as long as these variables have been correctly identified as numeric and nominal, it gives you just about everything you need from the standpoint of descriptive statistics. You've got your minimum and maximum, you have your mean, you can request a median, it doesn't come up automatically because it's computationally intensive, but it's easily requested, you've got your standard deviation and so on. Also on the far right-hand side and I love this, it has number of zeros, which can be very helpful and number of missing. So what do we notice? Age, we don't have anything bizarre, we don't have any negative values for instance. Final weight, of course is not going to be important for us, we have education number ranging from one to 16. But look at capital gain and capital loss, it's alerted us to the fact that the number of zeros is very very high, that's going to be a problem. That's because most people simply don't have a capital gain or a capital loss in a given calendar year.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=189)** And then hours per week ranges from one all the way up to 99. Gosh, that's an awfully long week. What you can't see here visually, is that there's that spike at 40 but again, it's telling you a lot. Let's switch over to nominal. I prefer to have a bar chart for nominal variables, but it doesn't ultimately matter much. Because when you have lots of nominal categories a chart of any kind isn't going to be especially useful. But I really like a couple of things that KNIME has done here. That ability to set a max number of categories is very important if you have hundreds of categories. So make sure that you use that if you find it is taking too long to generate this report. And I love the unique values columns, that makes it very easy to determine that number. So for instance nine is not too bad, but 16 is getting into that high order nominal area and starts to cause a problem, I wouldn't want those 16 education categories to generate 15 dummy-coded variables. So I might have to do some recoding, or think about that sum. I also love that it lists all the values. Now when you get to a larger number, sometimes you can't see them all, but again, this is very helpful indeed. And then if I go to the Data Preview, that just allows me to not have to run a separate piece of output to look at the individual data. You know, for those of you that are in [[Python (Programming Language)|Python]] fans, I know that you can generate a head or a tail
>
> **[4:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=282)** and you can control how many rows. But I have to admit that when I'm at this stage in the process, I really like to be able to scroll up and down into the data set and just get some basic familiarity with it. So, this in and of itself, I think starts to build the argument to have access to a workbench just to be able to do certain tasks quickly. Because here's a node that's been specifically developed just for this and it really helps out for this particular task of the data understanding phase.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (6), [[Statistics]] (2), [[Microsoft Excel|Excel]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (3), make (1), python (1), node (1)
> **Env Vars:** knime (6)
> **UI Navigation:** go to (1), scroll up (1)
> **Analogies:** for instance (2)
> **Warnings:** be careful (1), note that (1)
> **Prerequisites:** install (2)
> **Cross-References:** coming up (1)

#### [How to navigate borderline cases of variable type](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=0)** - [Instructor] Okay, we're in [[Knime]] with the same dataset, and the same workflow. So now what we're going to talk about is variables that seem like they might be one level of measurement but where there's some benefit to call them another level of measurement. I'll illustrate with an example. We're going to use hours. So the way that we're supposed to look at hours is with a histogram. So I start to types that in. And there's an interactive histogram, which we can use. We'll hook that up and when we go in, we don't want final weight, we want hours-per-week. And we definitely want to display all rows. Click on OK. Execute and open views. Okay, so we can see a pattern here. We can see that the tallest bar up here appears to be 33 to 41. Although 25 to 33 is a pretty tall bar as well. The problem is we can't see who said exactly 40. And just instinctively, we know that exactly 40 is going to be a common choice. But the problem is is that histograms bin as we can see here. Now, you can go to the bin settings and make it more granular. So let's give that a try. We'll go to the Bin Settings. Increase this to 12. Maybe further to 15 or so and it gets more granular and actually, interestingly enough, now 37 down to 32
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=93)** is the tallest bar but we can't see those exact values. Now, here's the problem. It's not like folks are recording 39 hours and 45 minutes or 40 hours and 15 minutes, at least with regularity. We're not really looking at fractions here. We're really looking at whole numbers and probably whole numbers that clump around popular values. We really have to examine that before we can decide whether it behaves like a scale or behaves like an ordinal, even though technically, it's a scale variable. So let's take a look. We're going to try a bar chart because that's what you would use with an ordinal variable. Go over here, type in bar. Now, remember, if you ever have trouble finding one of these, install the extensions. And we're going to discover that we have a problem. These are only displaying the string variables. And hours per week is not a string variable. So it's been filtered out. What do we have to do? We have to convert it. So let's cancel out of here. And I'm going to start typing in convert. And this might seem surprising at first but what we need to do is convert it from a number to a string 'cause that's the easiest way to tell KNIME that we want it treated as an ordinal in our bar chart. So let's go in the number to string conversion and hours-per-week is the only variable that we need to do.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=189)** Then go in here and now, we can choose our hours-per-week, okay? Now, we want to sort bars alphabetically. Otherwise, we're not going to be able to see the numbers in order, okay? Now, remember, sometimes you're doing this with a nominal variable and you wouldn't have to worry about that but with an ordinal variable, we really want to have it in this particular order. So we're going to click on OK. We're going to execute in open views. And wow, it is radically different and this is so important that we are seeing this. If we hover down at the bottom, we can see that exactly 20 hours is popular. I'll tell you what though, a little bit less than 20 and a little bit more than 20, not so popular. 30 hours a week is a popular choice. 35 is a popular choice. 40 is overwhelmingly a popular choice as is 45 as is 50 as is 60. I don't think anyone is going to be surprised by this but the histogram was not revealing this. Recognize that the algorithm isn't going to pick up on the patterns either. So we probably have to bin this. Please do not draw the conclusion that therefore we should treat all of our scale variables in this way. The reason that this is special is we can see these dramatic clumps that it really doesn't look even remotely like a bell curve.
>
> **[4:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=281)** It's piled up at exactly 40 for reasons that make sense to all of us. So what we probably need is less than 20, exactly 20, between 20 and 40, exactly 40, more than 40, something like that. We have to do natural groupings that are consistent with the data and that reveal the real pattern that will help us, it will also help the [[Algorithms]] when the pattern is as dramatic as what we see here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (2), [[Algorithms]] (1)
> **UI Navigation:** click on (2), go to (2)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Env Vars:** knime (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [How to be effective in doing bivariate data visualization](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=0)** - [Instructor] Okay, we're going to continue in [[Knime]], same dataset, same workflow. Let me move this histogram out of the way. So we're going to move on to bivariate charts and visualizations. Now, the reason that we're doing this is that if we want to be thorough, we're going to look at every payer of variables. Now, naturally our focus is the target variable, but if we really want to do this right, we want to try to move quickly enough that we can fit every payer into our schedule, including the inputs against the inputs. We're going to spot things that we have to fix or spot patterns that we can capitalize on during modeling. So you have to live within the constraints of your software and Knime has suitable visualization, certainly, but not amazing. So I'm going to suggest that we just go with a cross tab here, 'cause we're not worried about it looking pretty. We want to get the information content and we want to do so quickly. So I'm going to suggest that we use what's called the crosstab node, which is really just going to be a little table, but it will give us what we need. So I'm going to make the row income.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=81)** That's our target variable. And to make this especially simple, I'm going to use a variable with just a couple of categories, sex, very brief mention of final weight. What a survey weight does is manipulates the data so that it looks like the population, not the sample. We're not going to get into survey weights in this course. Interesting topic, but it's just not our topic. So I'm going to set that to none. Then we can execute an open views. And maximize this. Okay so, first thing that perhaps you might notice is that we have more men than women in the sample. We've got 21,790 men, and we have 10,771 women. So about 2/3 men. What's interesting therefore, is that we should have 2/3 men in both the low income and the high income categories. Assuming that being male has nothing to do with these incomes. But of course we know that there is generally gender bias in income. Certainly the further back in time you go, the more severe it is, and this is census data from the 90s. So we don't find the 2/3 of men are in the under 50 category. It's more like 61%. And it's not 2/3 of men in the above 50,000 category, it's 85%. So there's definitely a pattern here.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=174)** And if you are statistically inclined, you might notice that down at the bottom, on the far right, you can see [[Probability]] 0.0 that's below 0.05. So for you stats fans, this is statistically significant. But what we're focused on, is there anything weird? Is there anything that might help us in the model? At the moment, all we would conclude is that gender probably should be in the model because it's showing some early promise as far as being able to make predictions because of this apparent bias that we can see. Okay, so now we have to do a category versus a scale because we have to do every combination, category and category, which we've just seen, category and scale and then scale and scale. So let's move on to the second option. My favorite option in any software package for looking at a category in a scale is going to be a box plot. So we're going to do what's called a conditional box plot. And we're going to be asked what our variables are. Our categorical or nominal column is going to be our target variable. And let's go ahead and choose an appropriate one. Let's go ahead and look at income and age is actually just fine. Let's go ahead and click okay. We'd also want to do income against all other scale variables. Again, a lot of folks would not consider this
>
> **[4:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=268)** to be a very pretty looking chart, but we're not focused on that right now. Presence of a pattern, potential problems. First, the presence of a pattern. The heavy line in the center of the box there, again, it's called a box plot is the median. So it looks like the median for the above 50 is 44 years old, the median for the under 50K is 34 years old. So there's some pattern here for sure. But what's really noteworthy is that these outliers on age, we have folks in their 90s, both in the, under 50 and the over 50. And it really gets me thinking, everybody in this data set has some hours worked, but is it like a semi retired attorney who goes to the [[Microsoft Office|office]] a couple of hours a week because they're a partner in the firm or something. I'm wondering what someone in that age group is doing. And if we have to try to figure out if they're retired or not, and if they're retired, where are the hours coming from? That's just a mystery that I would want resolved. This one chart is not going to resolve it. I just know that I have both a pattern and some things that trouble me a little bit. So keep on moving. Now we have to see an example of a scale and a scale. And once we've done this, we have all the combinations that we're going to see. So let's go ahead and do a scatterplot. Now our target variable is not a scale variable. So we'll go ahead and look at two of the inputs
>
> **[6:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=362)** against each other. And we'll go with age and hours.
>
> **[6:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=373)** And let's increase that maximum number of rows to 50,000, which is more than enough for our sample size, but we don't want to grab just a sampling of the data. We want to look at all of it. Execute and open views. Okay, here we are inside of the scatter plot. And when you do a scatter plot on a very large number of cases like this, it's not going to be pretty, but it's going to give us what we need at the moment, which is to see the pattern. So do we generally see that as folks get older, they have more hours, do they have less hours? You know, there's really no obvious pattern. It's a bit of a mess, but I'll tell you what. I'm not seeing a lot of individuals with ages like 86 or 87 or 88 or 89, but there's a bunch of folks with an age of 90. That makes me nervous. Why would it be that mid 80s, the data thins out, but we have this unusual number of people that are exactly 90&gt; I would be very worried about that. I'd want to talk to a subject matter expert. Is that some kind of weird maximum going on? Makes me nervous. Along the same lines, notice that generally speaking, as you get above 75 hours or 80 hours, 80 hours is awful lot.
>
> **[7:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=466)** That's two full time jobs. It starts to thin out. Then you get this weird thing where at 100 hours, now, all of a sudden, we have more data than at 95 or at 90. That really concerns me. You know, I know that the temptation would be overwhelming to only do the target against the inputs. 'Cause you would think, wow, how am I going to have the time? But do you see how important it is to do inputs against inputs as well? Because there's some weird stuff going on. So there you have it. The trick to do these by variants is to move quickly. Look for patterns, look for problems. Keep on moving along. And level of measurement will drive what type of visualization table or chart you do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (2), [[Probability]] (1), [[Microsoft Office|Office]] (1)
> **CLI Commands:** make (3), node (1), find (1)
> **Versions:** 0.0 (1), 0.05 (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Producing bivariate visualizations for case study 1](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=5)** - [Instructor] Okay, welcome to your next challenge. We're in the Titanic data set and we're going to do some bivariate analyses. So the first one we're going to do is a category and a category. Survived is a category, of course, so let's go ahead and pair it with the sex variable. Then for your next one, do survived and fare. Obviously then a category and a scale. Let's make the third one a little bit more interesting. Survived one more time, but parent/child. Look at it through the lens of scale and ordinal and see which one you think is more informative. One final condition. Since we're looking at relationships that might potentially work their way into the model, it will be safer if we look at only the train partition. I'll be working in [[Knime]]. You're welcome to use any tool you like. If you, like me, are in KNIME, you're going to need a row filter to grab just that train partition. So to recap, you're going to have to do four charts for your challenge. And if you're getting comfortable in KNIME and you're working efficiently, you can probably get this done in about 15 minutes. Hope you enjoy the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (3)
> **Env Vars:** knime (3)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### [Solution: Producing bivariate visualizations for case study 1](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=0)** - Okay. I'm a anime with the Titanic dataset and I've created a new workflow just for our challenge and solution. So as mentioned, we should be looking at only the training partition. So I've added a row filter and I've got column to test partition, use pattern matching train. Okay. So that will be just our train partition. I've also added a number to string conversion here because in Titanic Survived as ones and zeros, and it's going to get all mixed up. I want to make sure it treats it as a category and not as a scale. Okay. So we're ready to go. First one is a category by a category. So I'm going to use a Crosstab,
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=59)** here it is. And I'm going to make Survived my row and Sex my column. No, Weight available Click on Okay. Execute and Open Views. And it looks like about two thirds of the passengers were men. So we would expect the two thirds of the survivors and two thirds of those that died should also be men. Assuming that there is not some relationship here between sex and survival. But that's not what we see at all is that we see that 31.87% of the men have survived and more than 85% have died. So there's clearly a pattern here, nothing particularly odd. This is consistent with what we might expect. So that worked out just fine. Now let's to do our category and our scale. So that's going to be a box plot, specifically a conditional box plot. And if we take a look at that our nominal column is going to be Survived. Our numeric column is Fair. We decided click on, Okay, Execute and Open Views. Again, these won't look pretty, but it gives us what we need. So what we see is that we're really looking at a pretty subtle difference between the two. In fact, very subtle indeed.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=153)** We've got zero fairs. It's hard to know what to make of that. It looks like on those that survive, we do have some higher end, but we got plenty of higher end on the not survive the zeros as well. We have, maybe that's an outlier, the 512, but we don't know if that's a large group or big family, more than one cabin, really tricky. So the pattern here is highly problematic. I mostly want to understand Fair when I go to talk to the subject matter expert now. I don't see problems exactly, but I see a pattern that I don't really understand yet, but we've accomplished what we had to. We're getting a feel for the data. Okay. We have one more. We've got to look at Parent-Child. So let's go ahead and bring over another conditional box plot and see what it looks like. So we'll do Survived against Parent-Child.
>
> **[3:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=225)** Wow. Let me maximize this again. A bit of a mess, isn't it. We mostly have, for those that survived, we actually have quite a range, but for those that didn't survive the median and the minimum, and it looks like the 75th percentile. In other words, it's all scrunched together. Look like they're all zero. I'm guessing it's because there's a lot of single men, but boy, looking at this, I'm really convinced that we probably don't want to mess around with. This as a scale verbal. We're not seeing the pattern clearly at all. So let's get rid of this and let's try this another way. In fact, let's just return to this Crosstab note and do Survived against Parent-Child. It's actually going to let us, this note is going to let us without doing a conversion. So we'll take advantage of that. Click on, Okay. Click on, Okay. And Execute and Open Views. And let's see what's going on here. You know, this is really a lot better. Now I know the pattern doesn't jump off the screen because there's a lot of numbers here, but we can actually see every combination. We can see for instance, among those that survived, we see one against zero, one against one, one against two, and the pattern doesn't immediately reveal itself. But boy, if I'm going to sit down with a subject matter expert,
>
> **[5:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=319)** I would much rather have this in front of me than that box plot, because that box plot was not revealing the pattern at all. So be creative. There are times that a variable will seem like a scale and maybe according to the official definition it is, but you want to treat it as an ordinal because that's the only way that you going to uncover the pattern.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1), in other words (1)
> **Versions:** 31.87 (1)
> **Analogies:** for instance (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Explore Data Tips and Tricks

[↑ Back to Table of Contents](#table-of-contents)

#### [How to utilize an SME's time effectively](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=0)** - [Instructor] The image that comes to mind for many when working with subject matter experts is you just sit down with them and get their advice. They'll be able to point you in the right direction. And you'll leave the meeting with a rough idea of what variables to use and what the relationships are. Then you just fill in the details. It's a common view but it's completely inconsistent with my experience. Subject matter experts are critical to the data understanding process but they aren't going to build the model for you. First of all, they're too busy and you want to make efficient use of their time. Also, while they'll have a pretty good idea of what's going on, their mental model of the business problem is likely to include just a handful of variables and very few, if any, interactions between variables. That's not enough raw material for machine learning. Finally, they need you to find the unusual patterns so that together you can confirm if they are real patterns or maybe represent errors in the data. So here's how you leverage your time with subject matter experts. First, you need a technique for presenting the strong relationships in the data so that they can confirm that that's consistent with their experience. But then you have to also explore the weak relationships and find out if there's a pattern hiding in there. Maybe there's nothing there but maybe the data or errors in the data is concealing something that's new that people don't currently understand. You also have to uncover quirks about the data.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=94)** In other words, just strange, odd things that you find. And sit down with the subject matter expert and figure out what's going on. Finally, only you, working with software and the data, can try to uncover complex relationships that involve four or five or even six or more variables. This is not something that people just intuit. It has to be uncovered and it involves work. We are going to be rehearsing all four of these approaches in the chapter.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Techniques for working with the top predictors](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=0)** - [Instructor] I'm in [[Knime]] with an unmodified version of the census data set, and I've started a new workflow. What we're going to do now is walk through how to establish the relationships in your strong predictors to then discuss them with a subject matter expert. My favorite technique, is to grow the top branch of a decision tree. I'm going to take KNIME's Decision Tree Learner, and hook it up to the data, double click to configure it, and my class column is going to be income, we can keep it as that, but I'm going to go down here to force route split column, and what you want to do is grab one of the variables that you think has a strong relationship with this, and realize that at this point you would know that because you would have done by variate relationships of all the payers with the target variable. For instance, gender is going to have a strong relationship with income, and I can maximize that. Let's remember what stage in the process that we are. We're in the date understanding phase obviously, so we're not building the model yet. Building a model with the decision tree is a big topic and I actually have a couple of courses on that subject in the library, but we're focused on data understanding right now. Also remember that you've looked at all these payers.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=93)** You would have already seen that gender has a strong relationship here, but you're trying to prepare for a meeting with a subject matter expert. You're trying to confirm that the variables that the model likes are consistent with the subject matter experts experience, and that the relationships make sense. Also things like cut points. We don't have anything like that with the gender variable, we just have male and female, but you're just trying to confirm that everything looks good so that when you do get to the modeling phase, all the variables have been thoroughly vetted and prepared. As we look here, we can see an overall rate at which people earn more than 50,000 at 24.1%. But for men, it's 30.6% and for women it's 10.9. My experience is that even a subject matter expert, that's never worked with [[Decision Trees]] before can relate to this quite readily. Don't be afraid to introduce an approach like this into a meeting. Let's do one more. Again, we're forcing one variable at a time, so I can take education number now notice I have a string and an integer, but if I take the integer, it's going to treat it differently in the algorithm, and I think that's what I'm going to want to try next. Take a walk we see, and this is not a surprise that at 12 and a half at the equivalent of a high school degree, it's trying to make the split there.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=186)** That's valuable because you don't want to just talk to the subject matter expert about whether or not, they are surprised or not, that education is related to income, but where the model is indicating that the split should take place, is something that you also want to confirm with the subject matter expert. Sometimes, actually there's some kind of underlying business rule or process that forces it to break at a particular point. You want to see if all of this makes sense to the subject matter experts. So again, you're not going to the subject matter expert asking where I should look, but rather you're looking and going them for confirmation that things seem to be correct. Let's see where it splits if we let it, it actually wants to go to a different variable relationship. We could use in nine, a column filter to force it, to stick with education so it can split at more than one location but this is where I would want to start the conversation with the subject matter expert. We saw the gender had a strong relationship, no big surprise, and education as well splitting at high school degree attainment, which makes a lot of sense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (2), [[Decision Trees]] (1)
> **Versions:** 24.1 (1), 30.6 (1), 10.9 (1)
> **CLI Commands:** make (2)
> **Env Vars:** knime (2)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Advice for weak predictors](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=0)** - [Instructor] Okay, we're going to continue with the same dataset and the same workflow but turn our attention to weak predictors. So I'll close this. So when we're looking at predictors, we're going to have to do more detective work. The way most people behave is they treat the data understanding phase as a kind of screening phase and they get rid of variables left and right. We don't want to do that. I want to encourage a different approach. What you want to do is when there's a variable that has problems, dig deep and see if you can't save it. See if there are interesting relationships there. So for instance, the variable that comes to mind for having problems would be variables like capital-gain and capital-loss. We'll look at capital-gain. The reason is there's so many zeros. Let's run this and talk about it. That large number of zeros isn't necessarily going to bring the variants and standard deviation way down because those individuals that do have capital gains, have large ones relative to zero. But what's going to happen is a lot of modeling [[Algorithms]] don't like variables that have a lot of the same value. And for that reason, it might be thrown out. We want to find out if there's information content here that we want to keep. You might think that all we can do is go to the subject matter expert, report that it wants to break at 5,119 and leave it at that. But there is more we can do. Let's take a look.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=94)** We're going to have to calculate a Boolean that's going to tell us whether or not they have a zero or a nonzero value. That's going to be the first step. So let's go down here and we're going to search for math.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=117)** So we have number of different function types. We need a logical function, specifically the if function. And the grammar, as you can see there, is If-Condition, true value, false value. So I'm going to make this a capital game. You can do this in a number of ways but I like to do one and zero for false. The downside of that is going to be that it's going to produce a scale variable and we really want a nominal here but there's a simple step we can do. And we'll call this gains_yes no. That's just a naming convention I like. In other words, do they have a gain, yes or no? Click on okay. Then we'll do a simple conversion so that it's treated as a nominal variable. So number to string. And if we had a bunch of these, remember that a lot of times, you can do some of this stuff in bulk and notice that it's representing all of them here but the only one that we need to convert at the moment was guess_yes no. But I could have a whole list of these. There you go, that's going to be treated as a nominal now. And one additional step. Let me give myself a little bit of extra room. Once we get looking at the tree again, we're going to want to look at only these gains variables. So I'm going to introduce a column filter.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=206)** Get rid of everything and bring back only the original gain variable and the gains_yes no variable. Just those two.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=224)** I'm somewhat going in a circle here but it'll work just fine. So then I'm going to force it to split on, oh my goodness, I made a mistake but that's easily fixed. I forgot to bring in my dependent variable. I need income. There we go. So class column is going to be income. I'm going to force it to split on the Boolean because I want that to be the first split. Let's take a look. Okay, so what we see is that overall, 24.1% are over 50 K. But 62% of those with gains, they're in that category. And 1/3 the percentage are in that category when they don't have the gains. But then here's what's different that's going to come next is we're going to additionally split below those that had gains and this is noteworthy but this does not always happen. We're splitting it the same location. We're splitting it 5,119. Often the split will move. So we're in the early stages of possibly having a new variable that looks something like no gain, low gain, high gain. But we really want to sit down with a subject matter expert and find out what might be special about 5,119.
>
> **[5:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=319)** I'd also be very curious at this stage about what is the nature of the capital gains. You would imagine, for instance, that if someone has sold a home, that their capital gain might be much larger than 5,000. You also have other things that might, you would think be a larger amount, perhaps like an inheritance or something like that. I might very much want to understand these different capital gains types and see if that can be incorporated into the data somehow. We don't have that variable now but that's exactly what these meetings with subject matter experts are about. They're about to understand is it correct, is it possibly wrong and what other data can we bring in? Those are the priorities when you have these meetings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **CLI Commands:** find (2), make (1)
> **Code Identifiers:** gains_yes (2), guess_yes (1)
> **Analogies:** for instance (2), imagine (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (1), in other words (1)
> **Versions:** 24.1 (1)
> **Speakers:** - [instructor] (1)

#### [Tips and tricks when searching for quirks in your data](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=0)** - [Instructor] Okay, we're in the census Income [[Microsoft Excel|Excel]] spreadsheet, and I want to to talk about quirks and weird patterns and how to handle this when sitting down with a subject matter expert. Now, one of the best ways to do this since a lot of times, we're looking at the relationship between nominal variables is to run a cross tab, using the cross tab note and nine or another software that would support that. The problem is as the number of categories grows larger, it's somewhat unmanageable, so for demonstration purposes I'm going to to use filters in Excel, but a lot of times you're going to to be checking about the correspondence between two variables. So let me give you an example. If we go over to education and we go to education number 12, let's say it would be important to verify that this always means the same thing. So clearly education number is not years of school because that would be a high school diploma and we can see that it's always associated with an associate's degree. And if we went with, let's say 10, I'm sorry I have to select all and then do 10 . Again you could do this more efficiently In a cross tab except that it's very difficult to see once the categories get above six or eight. So you have to be creative and work your way through it. So it doesn't take very long at all to confirm that these are really just the same variable in two different [[Forms]]. And the [[Metadata]] should have told us that. So we're fine there.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=92)** See there's really three different kinds of individuals that might be giving you advice about quirks or about your data in general, it's going to to be somebody that let's say is an economist or a tax expert, they might know something about this data, somebody in IT, because they're going to be an expert on how it's stored, and then of course the internal customer, the person for whom the project is being done. They're going to to have a certain expertise and will want to explain what's going on with the variables. But what do I mean by a quirk? So we're looking at all of these different relationships between variables 'cause you don't want to to go to the subject matter experts and ask them, what does code 10 mean in education number? You should know that, you have other ways of figuring that out. Your job is to find out things that are a bit odd in here. Now it's not a game of gotcha. You're not trying to say that the data's wrong or that there's something wrong with the process, that's not your purpose. Your purpose is to uncover anything that might prevent the model from succeeding. Sometimes that does uncover issues with how things are labeled and how they're stored. We all know that sometimes there problems in the data, but that's not the primary mission the primary mission is making sure that you don't run into trouble, that will stay with you. So let's make sure that all of this is selected. And let's look at one of these oddities together. So notice I've got a question mark here in row two for both work class and occupation. So let's take a closer look.
>
> **[3:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=185)** I'm going to to choose only the question marks and it looks like whenever there are a question mark on one, there also a question mark on the other. Now again, you can confirm this with a cross tab, but we're just taking a quick look here and it looks like that's the case. So here's my question. My question is how can you have seemingly no occupation and no work class yet you have hours? Because we know that the inclusion criteria in this data set is you have to have at least an hour, but yet oddly enough we have a fairly large group, that is question mark, question mark, but yet still has hours. That's the kind of issue we'd want to raise, and you might be surprised how often, the question is unexpected. Because people look at individual variables all the time and anyone who's in charge of this data or is a consumer of this data is going to know all of the allowed values. But there's a distinct possibility, that they don't know that this many cases are occurring, where column B is question mark and column G is question mark and yet there's a positive number of hours. That's the piece of information that you're uncovering and that you're sharing with them and on any real world project that I've been a part of, there are dozens of issues like this that come up
>
> **[4:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=279)** and that have to be rectified before you move into data prep, where they would be resolved and then into modeling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Forms]] (1), [[Metadata]] (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** go to (2)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** gotcha (1)
> **Speakers:** - [instructor] (1)

#### [Learning when to discard rows](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=0)** - There is a lot of confusion about discarding data and machine learning. Many folks will imply that you keep all the data in the model and it's just not true. It's helpful to imagine what will really be taking place at deployment. It's not as simple as all the data being run through the model and scored. There are always exclusion criteria and often multiple models. So some data but not all data is being routed into the model. That's why only data that will be scored when the model is done should be used, When the model is developed. For instance, on a cell phone churn project I worked on, one churn reason code was military deployment. This is a different kind of churn. The reasons it is happening are different and the likely intervention strategies for a disappointed customer will be irrelevant. For all those reasons, the model is better with these cases removed. What if you're trying to predict 30 day readmit to a hospital, an important issue. Where you're trying to prevent someone from returning to the hospital with the same diagnostic code? Well, what if they weren't discharged to home? What if they were moved into an assisted living facility? They might not be processed by the same model at deployment. What if you're emailing out a promotion to your loyalty card customers? How are you going to email anonymous cash customers?
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=95)** They'll either be removed at deployment or routed to a different kind of model with a different set of deployment goals. So they should come out. Every single project has inclusion and exclusion criteria and the process of identifying these subpopulations in discussing them with both subject matter experts and management begins during data understanding specifically the explore data task.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), for instance (1)
> **Speakers:** - there (1)

#### [Introducing ggplot2](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=0)** - [Instructor] We're going to introduce ggplot2 as a wonderful way to make multivariate graphics. It's very difficult to find good options for making graphics with three or four or five or even more variables, but ggplot2 is one of them. So if you want to try it, you're going to want to download [[RStudio]] right here on the website. They make it pretty straightforward. And then you might want to find out a little bit more about ggplot2, although this is optional. There's a website for this too, and the website encourages you to install ggplot2 by installing the entire Tidyverse, and you can certainly do that if you want to. And there's also a cheat sheet for ggplot2 that you might want to download and take a quick look at. But there's another option for installing ggplot2. Here I am in RStudio, and we're only going to be in this platform very briefly, so I'm not going to give you an extensive overview at all, but you have a place for typing your code over there on the left. You also have the option of a tutorial if you're interested. There's also wonderful options for R and ggplot2 right here in the library. We're going to stick only to our goal of understanding how to do charts with lots of variables in them, but if you want to install ggplot2, you can scroll down, find that particular package, check it off,
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=96)** and there you go. So in the next video, we're going to explore how to make these charts with ggplot2.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (2)
> **CLI Commands:** make (3), find (3)
> **Prerequisites:** install (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Orientating to R's ggplot2 for powerful multivariate data visualizations](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=0)** - [Instructor] Okay, here we are in [[RStudio]] and what I'm going to walk you through is how to make this graphic. Now, before I begin, let me caution you, this graphic is a little busy. This is not something you would rush to put on an executive dashboard but our priorities are different. We are focused on finding out what's going on in the data. And often that means we have to look at a lot of variables at once and this graphic has four variables in it. Now ggplot2 can make beautiful graphics but again, we're focused on getting the information content out and that means looking at outliers and so on. So this might look a bit cluttered to you but it's because our goals are different than executive reporting. So here we go. To get the data in, you're going to need a command, something like this. And we're going to call the data census while we're in RStudio. Now, please be careful. Your path might not be identical to mine but there we go, it seems happy with that. It's reading it in just fine. And then let's do the most basic chart we can. Take a look at this command. We're referring to the census data, which we've just read in. And then we're looking at workclass_recoded. That's why you're going to want to grab this file called Census_modified. I've changed some of the numeric data into strings so that ggplot2 doesn't think that they're scale variables when they're really nominal. It was the easiest way to do it. Ggplot2 and R have tremendous power to do numeric conversions and so on.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=95)** But this was the easiest way to give you a file that already may it obvious to ggplot2 that we were dealing with nominal variables. So let's take a look at this simple plot. There you go, that's all there is to it. It's a box plot with five categories. Now, the original file had more than five but I've collapsed government into just one. Then we've got people that are listed as private, in other words, they work for corporations, not government. Then we've got self-employed incorporated, self-employed non-incorporated. And people doing volunteer work. And we can see some real differences. For instance, the government folks, it doesn't look like there's any white rectangle there. That's because there seemingly is almost no variance. They all work almost exactly 40 hours. So anyone that does not work exactly 40 hours, appears as an outlier here. Let's make it just a little bit fancier. Let's grab the same line and run it again. But put a plus after boxplot and when we do that, what that allows us to do is to keep writing. And I'm going to add in this line. But without the plus. Take a look. It just makes it a little bit easier visual to see where 40 is because that's ultimately what we're trying to do. So clearly, we can see that the group that seems to be putting in the most hours consistently would be well, the corporate folks
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=193)** because the 25th percentile is at 40 hours. And the self-employed incorporated, they're putting in, but the self-employed not incorporated as well, right? So we have the government folks right at 40. We have the corporate and self-employed folks, 25% below or at 40. A good chunk above and then the volunteers, somewhat lower, right? So we've got a pattern. But now let's make it interesting because we've only been looking at a couple of variables here and I've been making the argument that ggplot2 is powerful when you're looking at a lot more than two variables. So we're going to go ahead and run this line again. The plus again always indicates that we've got more to explain to it. So this line again but with a plus. And what we need is this facet information. There we go. Now it's more complicated. So we've got to make this bigger. We could add back our reference line if we wanted to but now, we've got a lot of information content here and hopefully, this is also given you a little bit of a feel for ggplot2 and that we're adding layers on top of layers, adding features on top of features. So as we look here, the patterns are largely consistent but we see that pattern of the exactly 40 hours
>
> **[4:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=288)** is most consistent for the government employee men earning less than 50. We see more variation in the other combinations for government. Also, it looks like we don't have any volunteers that are earning more than 50,000. Now, of course, that sounds strange to talk about how much the volunteers are earning but I'm going to assume that the under 50,000 volunteers are probably retirees that have investment income but they're not getting paid for their volunteer work. Now, I could be completely wrong about that. That's something that you would confirm by looking at something like age and some other factors. Now, it's not impossible to do five or even six variables ggplot2. It gets increasingly complicated to look at but there you go. That's the basics of how ggplot2 can allow you to build charts with three or four or five or more variables all at the same time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (2)
> **CLI Commands:** make (5)
> **Definitions:** is a  (1), in other words (1)
> **Warnings:** caution (1), be careful (1)
> **Code Identifiers:** workclass_recoded (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Producing multivariate visualizations for case study 1](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-multivariate-visualizations-for-case-study-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=5)** - [Instructor] Welcome to your next challenge. I'm showing the previous ggplot2 chart, because your challenge is to reproduce a chart just like this using the Titanic dataset. I've created a special file for this purpose. It's called train modified, train because it's only the train partition and modified because some numeric variables have been converted into strings so that ggplot2 immediately recognizes that they are nominal variables and not scale. So your challenge is to take the following variables and imitate this chart. Age, passenger class, survived, and sex, and note that just one of those is a scale variable and the other three are nominal. If you know, ggplot2, this should only take about five minutes. If you've never used ggplot2 before, you should be able to figure it out from the previous example, but it might take more like 15 minutes.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### [Solution: Producing multivariate visualizations for case study 1](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=5)** - [Instructor] Okay, let's imitate this in the Titanic data set. First you're going to need a command, something like this. Please be cognizant of the fact that your file structure might not be the same on your machine, but I'm reading it in from the originals folder, and I'm going to call the data set simply train. Also, I have handy the code that we used for the census data set. So the most fundamental piece is this piece. And what this is doing is telling it that the two variables are work class and hours, but that we want a box plot. So hours was our scale variable, and our scale variable on the Titanic data set is going to be age, so we can replace that. And rather than work class recoded, we have passenger class. That alone will produce a result. That's an interesting error that I've made. Let's bring it down. Perhaps you already spotted the mistake that I made is I'm still referring to the census data set, and I have to refer to the train data set. And now we should be all set. Three changes. Now, it's giving me a warning, but it's not a fatal warning. It's simply saying it's ignoring the 177 rows that don't have age. So, so far, so good. Let's bring that line down 'cause that's working correctly. Let's add a plus to indicate that we have more to do. And the additional piece that we need is the faceting.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=104)** Okay, now we've used passenger class and age. We haven't used the other two, survived and sex. So let's change this to survived. And I believe we have mixed case in the Titanic data set. We will know soon enough. Yes, indeed. Let's make this bigger so that we can see it. That's a successful result. And it actually gives us a lot of information. Now, again, a chart like this isn't necessarily real pretty, but it gives us information on four variables at once, and that gives us information that we just can't get looking at one or two variables at a time.

> [!info]- Semantic Content
>
> **Warnings:** warning (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)


### 9. Verify Data Quality

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring your missing data options](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=0)** - [Instructor] The fourth task of the data understanding phase is verify [[Data Quality]]. Here's a small piece of the Titanic data, so what are some of the first things I would be looking for? Well, we have complete ID information. That's critical because missing IDs make [[Data Integration]] extremely difficult. Not impossible, but it's so problematic that if you had missing IDs, it becomes a topic for the whole team to discuss. We have no missing data on the target variable. This is, perhaps, even more important. [[Supervised Learning]] requires this variable to be present and accurate, but no problem here. Now, we get to the real heart of the matter. It is very rare in a real-world data set complex enough to be useful that you have no missing data among the inputs. In 25 years of doing this, I'm not sure that I've ever encountered it. Now, I've had clients that thought they were okay on missing data, but often because they weren't being very ambitious when it came to their data sources. Here we have quite a bit haphazardly appearing in various places with no obvious pattern. Obviously the worst culprit is cabin. It seems about half of these cases are missing. If that were true of all the other rows in the data set, we would have a real problem with this variable, so what are the options? Assuming that you've confirmed that there are no other alternative sources of this data, there's really just three,
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=96)** you can drop the problematic columns and that's a decision you make for each column. You can get rid of rows that are proving to be a problem, or you can impute, meaning to estimate, the missing data. Do we have any candidates to impute here? Well, at first glance, age seems to be the most promising. For instance, if we know that they were the ones to buy the ticket, they're almost certainly an adult, so if they are a child of the ticket holder, that's a clue, and if they are the parent of the ticket holder, that's a clue as well, so there's some potential here. So, what are the options for age? Well, we could estimate the missing value, as we've just discussed. We could drop the entire age column. We could drop the rows that are missing age, but in this data set, quite a few rows are missing age. We would be losing 20, 30% of our data set doing that. We could replace with the mean. Would that be okay? Well, if we were doing something like regression, replacing a whole bunch of cases with the mean aren't going to move the regression line, but we really have to think through the implications of replace with mean. However, there's software that automatically does it, and a lot of folks rely upon that approach. Just use it with caution.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=190)** It can be problematic. How 'about replacing with zero? Well, replacing with zero sometimes scares folks a bit, and it should. It's not a good idea if the missing value is definitely not zero, so here replacing age with zero makes no sense, but if a credit report showed no evidence of a credit card, then a good guess is there is no credit card, so sometimes replacing with zero makes sense. Other times it doesn't. So, every variable in the data set that has any missing data needs a few minutes of attention just like we've given age.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (1), [[Data Integration]] (1), [[Supervised Learning]] (1)
> **CLI Commands:** make (2)
> **Analogies:** for instance (1), just like (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [Why you lose rows to listwise deletion](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=0)** - [Instructor] Here's a topic that can get you into real trouble if you're not familiar with it. Listwise deletion. When operating under listwise deletion, if any value is missing, the entire record is excluded from your analysis. Here's that small sample of the Titanic data. Note that if listwise deletion is applied, almost all of the data will be discarded. However, cabin, while it contains some interesting information, is in no shape at the moment to be a good input variable. So let's assume that you drop it. However, on real world projects you want to be fixing your variables, not just discarding them, but in this case it's not clear that cabin is going to help us so let's remove it. When we do, things have changed a lot, however, we're still losing four rows and keeping only six. Taken on a grand scale of hundreds of thousands of records, that's just too much. So as you can see, it's very important that you know this is going on and it's important that you aren't casual about throwing in a variable like cabin just as an experiment. Everything you do has ripple effects and that's why assessing [[Data Quality]] is so important. So why do you need to understand listwise deletion? Well, it's not there to be a burden,
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=95)** it's there so that you don't accidentally produce poor results. The problem is that too few know about it or know that their software is automatically doing it behind the scenes. As we've just seen with a small data sample, you could lose half of your data. Or worse, you could exclude all of your data. Zero records is not uncommon. Let's discuss why. What if you asked passengers about their level of satisfaction for their in flight meal. No one on board has had both the first class meal and the coach meal, so even if you have ten million rows of data, not a single row is complete and this is true even if you have 500 variables. It happens all the time. So if this is the first time you're hearing about listwise deletion, go back to your favorite algorithm and your favorite software option and double check that it hasn't been a hidden factor in your analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (1)
> **Cross-References:** go back to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Investigating the provenance of the missing data](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=0)** - [Instructor] A very common pattern when examining [[Data Quality]] is variables that cluster together in terms of their missing data. When one is missing, it's consistently missing on some other column, but not in a random pattern. When this happens, try to figure out the provenance of the data. Where did it come from? I had a memorable experience visiting a cell phone company overseas. Prepaid mobile minutes are more popular internationally than they are domestically. It's quite common for international business travelers to buy a SIM card from a kiosk right in the airport. It's also common at convenience stores. Many of the customers of my client on this trip about half purchase their minutes in this way, either at a kiosk or a convenience store. Alternatively, some of their customers had a monthly contract, which of course, is the dominant method here in the US. Those customers fill out a form with various information requests like name, address, email, and age. Well, you get a pattern of something like this. Modeling [[Algorithms]] generally love scale variables. Many will automatically throw out strings, like name and address, but they try to fit a variable like age to the model. Of course, if you've got list wise deletion being applied, perhaps automatically, even without the modelers knowledge, half of the rows would be thrown out, and age would be tried but with the reduced number of rows.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=95)** Or maybe the missing ages have been populated with zeros, which is incorrect, but it's a common mistake. It's hard to know which of these scenarios is worse, but there's no need to let it happen. You must explore the data and intervene before these mistakes are made during the modeling phase. What I always do is replace the data with simple Booleans, which indicate whether the data is known, or if it's missing just ones and zeros. Then very simple correlations can be run, and you should be able to confirm the pattern even on a very large data set. Before you know it, you can treat the variables like a block of variables. And then it's easy to see in this case that it all has something to do with the customer type. Now, of course, you don't keep the one variable in the modeling phase, this is to confirm the provenance. The SIM card kiosk and convenience store customers always have this information missing. On this real world project, the algorithm was indicating that age was an important predictor but really what was happening was a missing data problem. The solution isn't very complicated. If you know the provenance, you can break the data into two groups and then model them separately. I demonstrate a two model modeling approach just like this in my ensembles and made modeling course,
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=189)** right here on the Library. It addresses the missing data problem, but it is also better suited to the business problem. These two groups of customers probably have quite different needs and wants. Two models will address their needs better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (1), [[Algorithms]] (1)
> **Env Vars:** sim (2)
> **Analogies:** just like (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [instructor] (1)


### 10. Missing Data Case Study

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing the KDD Cup 1998 data](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=0)** - Okay to do a proper job talking about missing data, we need a data set with a lot of missing data. In this data set, the 1998 KDD Cup, KDD is the knowledge discovery in [[Databases]] conference, and they have an annual competition. The 1998 cup competition data set is famously a bit of a mess. It's got an odd coding scheme, It's got lots of blanks it has lots of missing data. Frankly it's a real challenge to work with, but that's why it's perfect for our purposes. So the data set is available here in the UCI machine learning repository. There's another website that has more supporting information. That's this website, this is the competition website from years ago and it's still up. And if you scroll down and importantly, you can see all kinds of supporting files including the data dictionary, which you're going to find very valuable. Here it is you can see this is from years ago, it looks like a coding font. And if we scroll down, there's all kinds of information here, numerous titles and so on, but really a lot of detail. And you can get a sense why some of the variables are somewhat of a mess, like rather than having ones and zeros that has Xs and blanks. Also noteworthy. Sometimes you'll get to a part of the data dictionary, and we'll talk about a whole section. You're going to find that very valuable as well. Now you may think, Oh, a competition data set like this
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=93)** isn't really good practice, but you know, I find that these data dictionaries are very similar to what I encounter in a corporate setting when I'm trying to look at corporate documentation. So dealing with a data set like this, I really do think is good practice. Even though this one is a bit unique. Okay. Now what I'd like to do is look at the data set in two [[Forms]] and tell you a little bit more about it. Here we are in [[Microsoft Excel|Excel]], and this has been provided to you as a CSV file, as well as an Excel file. It's called Cup 98 Learn it's the same data set we were just looking at on the website. You can download it. And there it is. It's not an Excel form, but I brought into Excel for you. So let's just talk about it in general terms. It's got hundreds of columns and I liked that about it because it provides good practice. But what starts to just scroll through the columns a little bit and we find lots and lots of blanks everywhere. Then you have sections where you have this distinct pattern where some rows are populated in some rows aren't, but where the blank seemed to be contiguous, that's an interesting pattern that I always want to look for. And then after columns and columns of these blanks, you get to a section that at least for the top 30 rows seems completely populated. And I can tell you from experience that if you scroll down, there's a hundred thousand rows here, but if you scroll down, you're going to find that it's also populated there. Why? Well, if you go to the data dictionary, it will confirm it, you're getting to census data here. This is a very important point because
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=188)** what it means is the information on individuals is spotty, but we've merged that with census information, which is largely complete. Looking at heterogeneous data like this all at once is going to be very, very confusing. You really want to look at the data sources and the department separately. So what I've done is provided you another version of the data set with reduced number of variables and get these census variables out. It's not that the census variables aren't useful, it's rather you should look at the variables at the individual level first, establish a baseline and then bring in the census variables if they help. You cannot build a model like this on just the census variables, because if you were to do so, you would be scoring neighborhoods and not individuals. So we really have to start with the individuals first and bring in the neighborhood information later. Let's go to the other dataset. This has been provided as well. I know that the name is a little bit odd, but that's because this particular data set was featured ina book that I was a part of called the SPSS Model or Cookbook. There's some interesting demonstrations with it in there. It's also used in my ensembles course for modeling a dataset like this. Which makes a nice compliment to the examples we're going to see in this course. So it has fewer variables. Otherwise everything is here, and the main variables that have been taken out are the census variables, as we've just discussed.
>
> **[4:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=284)** So what start looking at this data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Databases]] (1), [[Forms]] (1)
> **UI Navigation:** scroll down (4), go to (2)
> **CLI Commands:** find (5)
> **Env Vars:** kdd (2), uci (1), csv (1), spss (1)
> **Definitions:** is a  (3)
> **Best Practices:** good practice (3)
> **Analogies:** similar to (1)
> **Speakers:** - okay (1)

#### [What is the pattern of missing data in your data?](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=0)** - [Instructor] Okay, I'm in [[Knime]], and I've started a new workflow called chapter 10. And I'm working with the reduced vars version of the data set just to make it a little bit more manageable. You're going to find that when you have a large data set, and 100,000 really shouldn't be large. But when you have a large data set with a lot of missing data, it can be more computationally intensive and the reason is that you can end up having huge numbers of categories within those nominal variables, particularly if there's a lot of errors and blanks and so on. So I think you're going to find that handling the original version of the data can be a little bit challenging. So we're using the reduced vars version for this. And I've attached to Data Explorer, and it's already run. So let's take a look. Okay, so here we go. How do you size up your missing data situation? Well, clearly, we can scan through all these variables, at the moment I'm going to focus on these numeric variables, looks like we have a whole bunch of those, we also have a bunch of nominal variables. The report, of course, is different for the two, okay. But in particular, it's very helpful to go to those numeric ones because there's some columns there that are very helpful to us. And that's both the number of missing as well as the number of zeros. So here's the real focus. To do this properly takes a long time, you have to make sure that you're not conflating the zeros and the missing,
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=93)** but we have a particular focus at the moment and that is to try to find the underlying pattern. With a data set that's as complex as this, you start to realize why it's helpful to look at the data sources individually before you integrate them. Because when it's all mixed together, you lose a bit of the underlying structure. So what I'm going to suggest that we do is scroll down a bit and look for when the number of missing might repeat and we see a clear instance of that here. MBCRAFT, MBGARDEN MBBOOK. Now the data dictionary seems to indicate that this is magazines and publications. The notion is, is that if you subscribe to a gardening publication that your into gardening or into photography, and that might tell us something about your personality, which in turn might tell us something about your donation pattern. So what we can do is since this number is really coming up a lot, 36380, we're going to make note of that. Let's see if there's other sections that seem to have that pattern. This is a rather different pattern down here. It does seem like a lot of these have a very, very high number of missing, but it's not the same number coming up. So what is going on with those? Well RDATE_3, RDATE_4, RDATE_5, they're clearly all related, these are referring to the last date that they made a donation.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=186)** And you start to think, wow, it has something to do with customer tenure. You know, the longer you've been around, the more promotions you've been exposed to, something is going on there that we'd have to talk to a subject matter expert about because 10s of thousands of missing are clearly going to be a concern. So we have to figure out why this is the case. And it's probably simply if they're new, they weren't even exposed to an older promotion. And maybe that's why they're missing. That would be a working theory that we might have. Continuing down we see the same but it's those R variables again, now it's RAMNT. So it's how much they donated. So maybe if they didn't donate, they're missing. But does that really mean that we throw the roll out? Certainly not, we have to figure it out. Let's go back to the section because this is a very specific pattern. Whenever I see the numbers repeating, I get very intrigued because I want to analyze them as a section. So I'm going to go all the way up to the top and sort descending, and I want to see if there's anything else that has that repeating number that escaped my attention. Well, MBCOLECT, we can see doesn't quite have that 36380, but it's awfully close. Yeah, there's no other variables that really show that pattern. So what I would want to do now is look only at this section and dig a level deeper. And that's what we're going to do next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (1)
> **Env Vars:** knime (1), mbcraft (1), mbgarden (1), mbbook (1), rdate_3 (1)
> **CLI Commands:** make (3), find (3)
> **Cross-References:** coming up (2), go back to (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Definitions:** is a  (2)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)

#### [Is the missing data worth saving?](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=0)** - [Instructor] Okay, we're back in [[Knime]] with the same data set and the same workflow, but I've added several nodes because what we're about to do is a bit elaborate. It'll be easier to walk you through it, with the work done in advance. So our mission at the moment is to deal with the fact that we have several sections within our data set. And when one variable is missing, it usually means a dozen variables are missing. So let's take a closer look. I've added a row filter, and I've chosen one variable out of this section about magazines and so on, MBCRAFT, and I've checked to see if that's missing. And I'm going to exclude those rows that are missing. So if our understanding of the data is correct, I'm not just excluding MBCRAFT missing cases. Those cases will be missing on that whole section of variables. So in the column filter, so that I can focus on what I'm doing, I've got that whole section and our target variable called target B. B for binary in this case, it's a true false variable. Then since target B is ones and zeros, I've got to convert it to a string. That's the usual KNIME things, so that it's recognized as a nominal. And then I've added a decision tree learner.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=93)** So what is this all about? Here's the idea. If we have a lot of rows that are still valid, thousands of them, in fact, that should be enough to determine if these variables, any of these variables are potentially useful in a model. If they are potentially useful in a model, I've got to figure out some way to save them or split the data into two portions data where I have this kind of consumer information that I've purchased from a list broker and times when I don't, I've got to figure that out somehow. If on the other hand, none of these variables are interesting, then I don't want to sacrifice the rows. So instead I get rid of the columns, it's really as simple as that. So to confirm that we've done our work properly, let's do a double check. Let's bring in another data explorer. We don't want to reread the whole dataset because that would be computationally intensive. It would take a few seconds for that to run, or maybe even a few minutes, but we can easily hook this one up because it's after the column filter, there's only a little bit of data there. Let's let this run to orient ourselves to what we've accomplished. Okay, well, here's the report. So let's take a look. It looks like we've got 37 missing for MBCOLECT, but that's about it. So we've accomplished our mission. Now, how many rows do we have? Now we've got some zeros.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=187)** But that doesn't mean that it's false, it means that we know it to be a zero value. So we have quite a bit of data here. So let's try the decision tree. Maximize that. Okay, so the first split is rather strange. We've got 29,155 cases. So to remind you, we started with closer to a hundred thousand. We've lost two thirds of our data, but 30,000 is more than enough records to find a relationship with these variables. But the first split is really rather odd. It strips away based on whether or not they subscribe to a photo publication with only two cases. Decision tree [[Algorithms]] don't like to do that. If it's behaving that way, it's not finding much of a pattern. Let's try further splitting on the remaining 29,153 cases. Okay, now this is whether or not it's a health publication, but it seems like multiple health publications. So we start out with 5.2 at the very top of our target B variable, our dependent variable. We stay at 5.2 and then when we further split on pub health, we get 8.2 and 5.1 and the 8.2 isn't a lot of cases. Okay folks, this is what I'm concluding,
>
> **[4:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=281)** these variables are not great. I've got almost 30,000 records. It is complete for these dozen variables. I'm giving it an opportunity to predict my target variable, and they're not doing a great job. Now I would spend more than just five or 10 minutes on this. I would spend an hour or so, but if I tried this every which way, and I was getting no traction, I would seriously consider eliminating this entire section. Hopefully other sections of the data are going to be a lot better, but I'm certainly not going to do the following. I'm certainly not going to sacrifice 60,000 rows of data to save these columns at the moment, it looks like these variables are on the chopping block.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (2), [[Algorithms]] (1)
> **Env Vars:** knime (2), mbcraft (2), mbcolect (1)
> **Versions:** 5.2 (2), 8.2 (2), 5.1 (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Assessing imputation as a potential solution](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=0)** - [Instructor] We're going to start by looking at the data in [[Microsoft Excel|Excel]]. Our mission is going to be to figure out if it's appropriate to impute age. Age is the kind of variable that people normally think about imputing. It's a scale variable. You figure, just replace with a mean, just replace with a median. It's exactly the kind of thing that's often automated in software. Now remember that the actual act of imputation is usually done in the [[Data Preparation]] phase, but we're doing the detective work. Does it make sense to do it? So let's start by exploring age. I've turned the filter on and I'm going to grab all of the blanks. And we just investigate a bit. If there's anything obvious about what we see, well here in column H, we've got all zeros. Now those date of birth values probably shouldn't be zero, but the point is it is missing, at the same time that age is missing. That makes sense. In column R here, we've got AGEFLAG, which actually, in the data dictionary, it explains, is where age came from. Did it come directly from the data or was it calculated from date of birth? So you can see how it's all connected. And then the kind of variable that I would be especially intrigued with here is something like source. Here it is. Data source. That's which list broker, or which list sharing company helped provide the information. Sometimes it's company one, sometimes it's company two.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=95)** The data dictionary actually tells us that company three means from both, and the blanks, it's unclear. It must mean that the data was gathered internally and not from an external source, but bottom line is it's not telling us much, is it? I mean, if this was always the number one, if it was never the number one, that would be interesting. That would mean that maybe one source was giving us age, but the other source wasn't. It looks like we're going to have to do more detective work. So let's go into [[Knime]]. I prepared a workflow in advance called chapter 10 impute, and I've done this for two reasons. Some of the steps are computationally intensive and some of the steps are a bit elaborate. So it's helpful to just have it built in advance. Let's go into the math formula node. This is the first new step that we're introducing. And the formula might be a little bit surprising at first, but it means not between zero and 100 All the valid ages and the dataset are between zero and 100. So if it's not between zero and 100, that tells us that we're in trouble. The problem is it's not going to give us ones and zeros. The next step addresses this. It's given us zeros, but it's given us zeros and blanks, so we have to turn the blanks into ones. So then what we end up with is one when age is missing, zero when it's not. Okay, the number to string conversion is something that we've seen before.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=188)** So now we're going to use the decision tree learner. Why is that going to be helpful? We want to know what's predictive of age being missing. Let's take a look. We shouldn't be surprised by this. And we should have seen it coming. The best predictor of age being missing is whether date of birth is in there somewhere, because they're clearly related. So what we have to do now is get rid of all those obvious answers to our question so that we can go a level deeper. We're going to do that with a column filter node. Let me drag it into place. And the only variable that we want to filter out, well, the variables that we want to filter out, will be those that have an obvious relationship with age missing. So, age itself, AGEFLAG, and date of birth.
>
> **[4:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=250)** Now, we have to redirect this and clean it up a little bit. Let's see what we get. Interesting; so, for the homeowner variable, according to the data dictionary, homeowner H means they're a homeowner. Homeowner U means unknown. And then the equals sign with nothing else has to mean that we don't know their homeowner status. In other words, we have known homeowner, unknown homeowner, no value at all. And boy, the pattern is really striking, because we have only 9.3% missing if they're a homeowner. It's three times as high, 27% missing, if they're not a homeowner. And much, much higher, if we don't know their homeowner status at all. This is a real tricky one. We're going to have to talk to a subject matter expert about this, but there must be something about public records or something, about homeowners, that's allowing us to get this other information that we're not getting any other way. This is why you can start to see that it's going to be dangerous imputing this, unless we know the story behind this. Let's take a moment to take a look at what the imputation would look like. And then I want to go another level on the tree. So, what we can do is type in missing here.
>
> **[5:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=347)** And we have our missing values filter. Now there's already one on the workflow, but I'm going to put a separate one here. We just want to take a quick look inside to see what it would be like if we chose to impute. For instance, I could identify age, I could add it, and look at my choices. And these are just the choices that Knime gives me, but most software will have options for this. I can fix the value, which is the one that we saw before. Let me maximize this. I can do fixed value where I have to designate what that value is going to be. But then there are a lot of others. I could replace with the median. I could replace with the mean. You get the idea. In fact, if it was very important that I get an accurate estimate, I might even build a model just for the purpose of providing that estimate, but I wouldn't be comfortable with these standard approaches given across the board quite yet. I'm actually going to cancel here, and we're just going to leave that there. Let's go another level on the tree. So I'm going to remove homeowner, using the column filter. See what else comes up. Maximize. Now think of this as preparing for a meeting with a subject matter expert, because that's exactly what it is. That's why we keep on digging and digging. We're doing the detective work
>
> **[7:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=440)** to prepare for a meeting to decide how we want to handle this. It really gets interesting now, because we have a different rate for the different sources. Source number one is missing 29% of the time. Source number two is missing 17.1% of the time. Remember, the data source code three means that we got it from both sources. And when that's the case, the percent missing comes way down to 10.6%. When we don't get it from an external source at all, we are way up to 61% missing. And that's for the vast majority of cases, thousands and thousands of cases. We have to have a meeting with a subject matter expert before we apply imputation here. And I'm starting to think that if it's not costly, I might want to do list matches. See if I can increase the number of cases that I get from both sources. Is it that we're not doing this at all? That handful of cases. Well, actually more than a handful. Of the 5,736 cases that we do know age, for the internal data, where did it come from? So lots of questions. And until those questions are resolved in my mind, I'm very reluctant to impute. I need to know that context, the provenance of the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (2), [[Microsoft Excel|Excel]] (1), [[Data Preparation]] (1)
> **CLI Commands:** node (2), make (1)
> **Versions:** 9.3 (1), 17.1 (1), 10.6 (1)
> **Definitions:** in other words (1), is a  (1), means that (1)
> **Env Vars:** ageflag (2)
> **Exercise Files:** source code (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 11. Explore and Verify Case Studies

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring and verifying data quality with the UCI heart dataset](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=0)** - Okay, let's revisit the Heart Dataset, after quite some time. So, we made a little bit of progress on this analysis, what would be on our mind next? Well, we have to certainly populate our cheat sheet with all the notes that we'd have on the different variables, level of measurement, potential role, questions that we want to ask the subject matter expert. We're going to assume, that the rows that we suggested should be discarded, or approved to be discarded. In other words, they weren't valid data, they needed to be set aside. But going back to the data, we're rapidly going to run into a roadblock here, because we're going to want to move on to do our univariate visualizations, our bi-variate visualizations, looking for potential predictors. There are a number of things that will be on our mind, but we have a lot of missing data, and we have to figure out, if our row is a transactional row, or if it's an ID. And those two are related, because, if we generally have some information on an ID, for instance, we have a 1st and 3rd cholesterol measurement, but we don't have a 2nd one. Now we can start to talk about averaging across visits, so maybe most IDs have information, they just don't have information on every visit. So we can't ignore this any longer, we have to look at these negative nines, we have to look at Verify [[Data Quality]] Issues. So the very next thing would be in my mind
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=94)** would be two issues, looking at the nines across, and down, but also moving to the right hand side of the data set now. When I've got clinical collection type data like this, and I've got locations, I want to look at not just the pattern of these negative nines, but that pattern by location. I really want to do both of those things. Let's take a quick look and [[Knime]] to see if the Data Explorer helps us with this at all. Okay, I've got a very basic stream, that's bringing in the data with the discards removed now, and we'll go into the Data Explorer View. Here we go, so we've got our data set, with those discards removed. But of course we still have a lot of missing data, we have negative nines all over the place. So what I've done is sorted descending on number of zeros, and it's very interesting to know, if the numbers come in clumps. We've seen this pattern before, will we see it in the Heart Dataset? Will we find, that there are collections of variables, that when one is missing in the collection, the others are missing in the collection? Will we have 899 zeros for CFF, but that's all of our data, we are not worried about that. A zero is actually a valid value there, that's the replacement for the Social Security Number. X-hypo, we have a whole bunch, almost the whole dataset. Then it drops from 819 all the way down to 802, then 725, then 692,
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=188)** and I'm not seeing a pattern here. And it gets worse, scrolling back up to the top. Clearly KNIME is not going to have a column for a negative nine. So we're going to have to go somewhat manual here, we'd either have to derive something in KNIME, or do something simple in [[Microsoft Excel|Excel]]. So let's return to Excel, and what I'm going to suggest, is that we count the negative nines across, and down, and then look at that by location. So that's the very next thing, that would be on my mind.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (3), [[Microsoft Excel|Excel]] (2), [[Data Quality]] (1)
> **Env Vars:** knime (3), cff (1)
> **Definitions:** in other words (1), is a  (1)
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Speakers:** - okay (1)

#### [Challenge: Quantifying missing data with the UCI heart dataset](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=5)** - [Instructor] And that brings us to our next challenge. Working in the same [[Microsoft Excel|Excel]] spreadsheet, I provided a somewhat updated one called Chapter 11 for this exercise. Count the number of -9s across each row. Also count the number of -9s going down each column. Now remember, you're always preparing for a meeting with a subject matter expert potentially, so make sure that what you're doing is obvious to someone that might've seen the spreadsheet. And when you're done, then compare the results by location. This should take about 15 minutes, but try to reflect a bit on what you'd want to ask the subject matter expert based on the location that you find. Give it a try.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Quantifying missing data with the UCI heart dataset](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=0)** - [Instructor] Okay, I hope you enjoyed giving that a try, let me walk you through how I chose to solve the problem. So I'm in a spreadsheet called UCI_ Heart_chapter 11_ solution, which I provided for you in the solutions folder. And if you go to the far right hand side, what I've done is use the COUNTIF function. Let me go ahead and show you that formula bar. I've used the COUNTIF function to count negative nines. Obviously, I don't attempt to count the negative nines in the name or location columns, but in the columns that are appropriate. And there's no obvious pattern here, so I'll have a lot to ask a subject-matter expert but that's not all. Remember, we had to do columns. So if you scroll all the way down to the bottom I've got COUNTIF going across the bottom as well and because we've got hundreds of rows I've copied and paste the IDs down at the bottom so that I can see them better. Now, please keep in mind that if you go to pull this in to something like nine, you don't want to have the IDs in the middle of the data, it's going to cause confusion. So I have a Data tab that doesn't have those headers at the bottom and a COUNTIF tab that does, but again no obvious pattern jumps out at us. So we're going to need nines help.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=93)** And that last part, which is looking at the locations, you could do a crosstab here in [[Microsoft Excel|Excel]], but I chose to do it in nine. So let's switch over to that. Okay, so I've got a source of the data with the discard stripped away, and make sure you don't have those COUNTIF formulas mixed in there. Although I did keep the COUNTIF column that's going to be valuable and what we can do is add a crosstab.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=131)** And my advice is to take the variable with more categories in it, make it the row. So I'm going to take this new variable column I have negative nine and make it the row variable, and the column variable is going to be location 'cause remember that's the task. Weight, none.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=156)** Execute and open views. Maximize. And we find that a lot of the rows are cut off. So I'm going to go ahead and make this much bigger, jump it all the way up to 50, there we go. Now, you might think, gosh, this is going to be hard to read and it is at first but there's a very strong pattern here. Those rows that were missing nine or 10 or 11 or 12 that's the rarest missing we have. We're all associated with Long Beach. Then we get to Swiss starting with 16, but Cleveland and Hungary doesn't show up with those small numbers at all. As we scroll down, we get kind of to the middle and all the locations are seemingly involved. But then when we get down to the bottom, we noticed that when we get up into 34 to 45, that's only that third location there, going back up to the top, that's the Long Beach so Long Beach is really all over the place compared to the others. Cleveland seemingly 20, 21, 22, 23 but nothing very high. Nothing very low. This really needs a subject-matter expert's attention because there's a clear relationship between number of missing and location. And that's something we would have to discuss. Of course, we still have several things on our plate.
>
> **[4:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=252)** As we start the transition from business understanding to Data Prep, many more things have to be done. For instance, the nature of this data set with its [[Data Collection]] in multiple locations, we've got to figure out what data is in? What data is out? And what data is still coming? We have to really start to focus our attention on bivariate relationships, which relationships are strong? And which relationships are weak? Also, if we're going to aggregate up to ID, what impact is that going to have on missing data? If we're looking at average cholesterol over multiple measurements, maybe we don't have as much missing data as we think. But if we're going to operate at the patient level, we better get more patients because we don't have a ton of data Finally, is imputation in our future? Maybe, but we can't decide that until we sort out some of these other issues. So we would have days or weeks of data understanding still ahead of us in this data set for a real world project, but we're well on our way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[Data Collection]] (1)
> **Env Vars:** countif (6), uci_ (1)
> **CLI Commands:** make (4), find (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 12. Making the Transition to Data Preparation

[↑ Back to Table of Contents](#table-of-contents)

#### [Why formal reports are important](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=0)** - [Instructor] When we first introduced [[CRISP-DM]] and we looked at the task list, we mentioned that the documentation requirements for each task are listed in italics, but there's another part of the document that talks about documentation. That's part four. What part four does is it talks about more summary reports at the end of each phase. Part four is shown at the end of the document. We'll advance to the end here. Here we go. Now let's talk about how part four works, but notice that the idea behind part four is to focus on the end of the phases, not while you're doing the tasks. So here's how it's described in part four. We really have two separate aspects here. While you're performing the tasks and then a summary at the end. Let's face it, no one enjoys writing or even reading reports, but let me try to make the case for why it's so important. I've been an external resource most of my career, and I've always considered the report I file at the end of date understanding to be among the most important of the entire project. Remember for someone like me, I would likely be invoicing at this point.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=95)** This report is my last chance to say that things are not quite what we expected when we started the project. Any later than this and it reflects badly on me and suggests that I'm not doing my homework. Many of you of course are internal resources, so you're certainly not all invoicing at this stage. There are numerous ways to run a project. But everyone has to have some way of measuring progress and eventually everybody has to tell their boss how things are going. Remember too, we aren't just exploring, hoping to stumble upon an insight or two. We're preparing for eventual deployment. As we document, we have to keep in mind that it won't be a human repeating your steps. It's going to be put into production. I think the fear is that these documents will be out of date in about five minutes and that no one will read them. Neither is true. I have projects that I completed 10 years ago that still have substantial chunks of code and documentation that are still in use. Each of the four tasks is paired with a section of the summary report as listed and described in part four. I'm going to focus my comments on the end of phase summary, but I hope I've convinced you at this point to sit down someday soon and read CRISP-DM in its entirety. So what about the initial [[Data Collection]] report?
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=189)** What are some of the things that would be on our mind? Obviously the list of the data sources in the areas covered by each. Certainly our method of acquisition and extraction. That's going to be important when you put into production, and problems that we've encountered. What about the data description report? Well, this is going to have each data source described in detail, especially the descriptions of each field and all of that is going to have implications for [[Data Integration]], especially the IDs that we identify. The data exploration report is going to include something that I want to quote directly from CRISP-DM. "Regularities or patterns found, both expected and unexpected." But also any kind of surprises or quirks, including your discussions with subject matter experts and their reactions to these surprises. Also conclusions for [[Data Transformation]], [[Data Cleaning]], and other pre-processing. That information is going to directly feed into the [[Data Preparation]] phase. What about [[Data Quality]]? Well the approach that you took, what you found, and finally the summary of data quality conclusions, which will also directly feed into data prep in terms of how we're going to address our missing data issues. This has a direct impact on data prep, but it also affects the model when deployed
>
> **[4:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=284)** and put into production. All of these details might be retrieved and read years after you record them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CRISP-DM]] (3), [[Data Quality]] (2), [[Data Collection]] (1), [[Data Integration]] (1), [[Data Transformation]] (1)
> **Env Vars:** crisp (3)
> **CLI Commands:** make (1)
> **Cross-References:** we mentioned (1)
> **Documentation:** the documentation (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Creating a data prep to-do list](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=0)** - [Presenter] One way to think about data understanding is that it's a way of preparing a checklist for data prep. By doing a thorough job, you know what deserves your attention and you have developed a sense of what needs to be done. There are five data prep tasks. Let's discuss how they are influenced by the work you've done during data understanding. Remember that the phases overlap and iterate. They don't come to a complete stop before you move on. And a lot of formatting has already been done during data loading, so it isn't a major issue as you transition to data prep. [[Data Integration]] is a different story. It's a major data prep task, and it has such a big impact on the data that it forces you to revisit some of the data understanding tasks. Missing data in particular is often generated during data integration, any ID field that's found in one table but is missing from the other is going to cause problems. But don't be discouraged. Through data understanding you may have eliminated entire data tables as not being helpful. Plus all the hard work you did trying to find creative ways to merge tables will pay off. Finally, you'll have a sense of how missing data might complicate data integration. So while the work of integration takes place in data prep, the groundwork done during data understanding is critical to its success. The select task is about what data stays in
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=95)** and what data's out. By the time data understanding is drawing to a close, you have a detailed sense of how you're going to define a row and which rows should be included. Data integration sometimes causes a slight reassessment of this. But while data prep might involve the act of writing code to perform the selection, most of the decisions should be made by this point. The simplistic view of why we verify [[Data Quality]] is to discard variables that have too much missing data. And automated data prep tools can't do much better than that. But as we've seen, we can fix variables with missing data. You should be transitioning into data prep with a detailed list of which variables are worth fixing, and what the possible fixes should be. Finally, data construction and [[Feature Engineering]]. This is perhaps the most important data prep task of all. But it can't be done efficiently without all of the hard work of uncovering those variable interactions, which we do during data understanding. Data prep without proper data understanding is frustrating and it goes in circles. Nothing makes data prep faster easy, but if you've done good work, you'll know what you have to do and you can work your plan.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Integration]] (4), [[Data Quality]] (1), [[Feature Engineering]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [How to prepare for eventual deployment](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980&t=0)** - [Instructor] The final phase of [[CRISP-DM]] is deployment. And we want to be ready, because if we don't plan for it now, it either won't happen efficiently or it won't happen at all. We want to be especially attentive to discoveries and decisions that we're making during data understanding that will impact deployment because we probably won't be around. Sure, we might be around at first, but what about a year from now or five years from now? Each of the tasks that we've discussed will have at least one aspect that will have a direct impact on deployment. Let's discuss some of the most important. Those same data sources needed for integration are going to be needed in production, as well, and the work that you did in describing the data could be used to flag out of range values, thereby removing that row of data during scoring. Some of the inputs are pulled in directly, of course, just like you did during data loading, but the vast majority are extracted or calculated or modified, all of which has to be readied for production. Finally, any imputation that was designed during data understanding and implemented during data prep was done in the context of a historical data set. During scoring, there might be just a single record flowing through the model that all has to be planned.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980&t=94)** These are all critical elements that the deployment team will need to know and that have to be reduced to writing in the data understanding documentation. A successful deployment relies upon it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CRISP-DM]] (1)
> **Env Vars:** crisp (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=0)** - [Keith McCormick] Now that you're done watching the course, what should be the next step on your journey? Well, you can start with putting the techniques you learned to use. Go back and try the challenge and solutions exercises. If you've completed those and want more, consider going back to the heart dataset. We've only scratched the surface. Take the original data, integrate it on your own, and try to work through all the tools we've used in the entire course. There's a lot to try. Then post your progress or questions using the Q and A feature. I try to visit course Q and A questions at least once a week. When you feel ready, consider a modeling course. I have a number of them in the library, but a great one to take after this would be Intro to Classification, which overviews a dozen different modeling [[Algorithms]]. It would pair with this course nicely. And I'd like to stay in touch. I can't connect with everyone, but please follow me on [[LinkedIn]]. I frequently post book reviews, course announcements, and comment on industry trends. I hope to see you posting your progress with a certificate, participating in the Q and A, or just saying hi.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[LinkedIn]] (1)
> **Speakers:** - [keith (1)


## Instructor

- [[Keith McCormick]]

## Resources

- Exercise files available

## Skills Covered

- CRISP-DM
- Data Assessment
- Data Science Foundations
- Predictive Modeling

## Path Context

### In [[Advance Your Skills in Predictive Analytics]]
← [[Python- Working with Predictive Analytics]] | **6 of 8** | [[Predictive Analytics Essential Training- Estimating and Ensuring ROI]] →

### In [[Learning Codeless Machine Learning with KNIME]]
← [[Machine Learning and AI Foundations- Decision Trees with KNIME]] | **3 of 5** | [[Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions]] →

### In [[Advance Your Business Analytics Skills]]
← [[Predictive Customer Analytics]] | **10 of 11** | [[Data Visualization for Data Analysts and Analytics]] →

## Appears In

- [[Advance Your Skills in Predictive Analytics]]
- [[Learning Codeless Machine Learning with KNIME]]
- [[Advance Your Business Analytics Skills]]

## Related Courses

_Courses sharing skills:_

- [[Data Science Foundations- Python Scientific Stack -CoderPad-]] — Data Science Foundations
- [[Introduction To Machine Learning With Knime]] — CRISP-DM
- [[Data Science Foundations- Data Mining in R]] — Data Science Foundations
- [[Executive Guide to Predictive Modeling Strategy at Scale]] — Predictive Modeling
- [[Predictive Analytics Essential Training- Data Mining]] — CRISP-DM

---

[↑ Back to top](#)