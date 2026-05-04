---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: program-evaluation-for-data-science
url: "https://www.linkedin.com/learning/program-evaluation-for-data-science"
duration_minutes: 99
duration: 1h 39m
level: Advanced
updated: 8/18/2025
learners: 137948
skills:
  - ROI Strategies
  - Data Science
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQE-6T9z9Au1Kg/learning-public-crop_675_1200/B4DZetNEzxH4Ag-/0/1750957575729?e=2147483647&amp;v=beta&amp;t=tTd6MY_7V_HjbXZhb0mZ0ZQYWKX7vFhoaFbH4rDJbUE"
linkedin_topic: Data Science
learning_paths:
  - '[Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Analysis%20and%20Interpretation.md)'
prev_courses:
  - '[Power BI Data Methods](Power%20BI%20Data%20Methods.md)'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation","position":9,"total":9,"prev":"Power BI Data Methods","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/roi-strategies
  - skill/data-science
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Program%20Evaluation%20for%20Data%20Science.md)

![Program Evaluation for Data Science](https://media.licdn.com/dms/image/v2/D4D0DAQE-6T9z9Au1Kg/learning-public-crop_675_1200/B4DZetNEzxH4Ag-/0/1750957575729?e=2147483647&amp;v=beta&amp;t=tTd6MY_7V_HjbXZhb0mZ0ZQYWKX7vFhoaFbH4rDJbUE)

# Program Evaluation for Data Science

> This course empowers you to apply program evaluation to your data science projects. Learn the best practices of some of the main methods for program evaluation including A/B testing, difference-in-difference, regression discontinuity, interrupted time series, and matching problems. As part of these best practices, learn how to identify when A/B testing is not sufficient or possible and then apply 

> [LinkedIn Learning](https://www.linkedin.com/learning/program-evaluation-for-data-science) | 1h 39m | Advanced | 138K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Going beyond A/B testing](#going-beyond-ab-testing)
  - [What do I need to know?](#what-do-i-need-to-know)
- [**1. Introduction to Program Evaluation**](#1-introduction-to-program-evaluation) (4 videos)
  - [What is program evaluation?](#what-is-program-evaluation)
  - [Evaluation in data science](#evaluation-in-data-science)
  - [Introduction to causation](#introduction-to-causation)
  - [Checklist for evaluations](#checklist-for-evaluations)
- [**2. A/B Testing**](#2-ab-testing) (5 videos)
  - [What are randomized studies?](#what-are-randomized-studies)
  - [Advantages of A/B testing](#advantages-of-ab-testing)
  - [Applications for A/B testing in data science](#applications-for-ab-testing-in-data-science)
  - [Quality checking A/B testing](#quality-checking-ab-testing)
  - [Practice A/B testing](#practice-ab-testing)
- [**3. Beyond A/B Testing and Randomization**](#3-beyond-ab-testing-and-randomization) (2 videos)
  - [Limitations of A/B testing](#limitations-of-ab-testing)
  - [Alternatives to A/B testing](#alternatives-to-ab-testing)
- [**4. Matching Methods**](#4-matching-methods) (5 videos)
  - [When to apply matching methods](#when-to-apply-matching-methods)
  - [Best practices for matching methods](#best-practices-for-matching-methods)
  - [Advantages of matching methods](#advantages-of-matching-methods)
  - [Interpreting results of matching methods](#interpreting-results-of-matching-methods)
  - [Practice matching methods](#practice-matching-methods)
- [**5. Difference in Difference**](#5-difference-in-difference) (5 videos)
  - [When to apply difference in difference](#when-to-apply-difference-in-difference)
  - [Best practices for difference in difference](#best-practices-for-difference-in-difference)
  - [Advantages of difference in difference](#advantages-of-difference-in-difference)
  - [Interpreting results of difference in difference](#interpreting-results-of-difference-in-difference)
  - [Practice difference in difference](#practice-difference-in-difference)
- [**6. Regression Discontinuity**](#6-regression-discontinuity) (5 videos)
  - [When to apply regression discontinuity](#when-to-apply-regression-discontinuity)
  - [Best practices for regression discontinuity](#best-practices-for-regression-discontinuity)
  - [Advantages of regression discontinuity](#advantages-of-regression-discontinuity)
  - [Interpreting results of regression discontinuity](#interpreting-results-of-regression-discontinuity)
  - [Practice regression discontinuity](#practice-regression-discontinuity)
- [**7. Interrupted Time Series**](#7-interrupted-time-series) (5 videos)
  - [When to apply interrupted time series](#when-to-apply-interrupted-time-series)
  - [Best practices for interrupted time series](#best-practices-for-interrupted-time-series)
  - [Advantages of interrupted time series](#advantages-of-interrupted-time-series)
  - [Interpreting results of interrupted time series](#interpreting-results-of-interrupted-time-series)
  - [Practice interrupted time series](#practice-interrupted-time-series)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps in program evaluation](#next-steps-in-program-evaluation)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Going beyond A/B testing](https://www.linkedin.com/learning/program-evaluation-for-data-science/going-beyond-a-b-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-evaluation-for-data-science/going-beyond-a-b-testing?u=76281980&t=0)** - Ask a data scientist, how do you know your model had an impact? Nearly everyone will respond, "A/B testing, of course." While A/B testing is useful for program evaluation, it isn't always appropriate or feasible. Sometimes, A/B testing can't be implemented, or another method is more powerful. In this course, we'll go beyond A/B testing to discuss other evaluation methods, including Matching, Difference in Difference, Regression Discontinuity, and Interrupted Time Series. I'm Howard Friedman. I teach at Columbia University, and have decades of experience applying program evaluation and [Data Science](../../Topics/Data%20Science.md) in the real world. Are you ready to go beyond A/B testing? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1)
> **Speakers:** - ask (1)

#### [What do I need to know?](https://www.linkedin.com/learning/program-evaluation-for-data-science/what-do-i-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-evaluation-for-data-science/what-do-i-need-to-know?u=76281980&t=0)** - So, what do you need to know to thrive in this course? First, you should have a basic understanding of how [Data Science](../../Topics/Data%20Science.md) is used by companies, organizations, and governments. Second, you have a little understanding of program evaluation. Have you implemented an A/B test before? Great! If not, don't worry, I'll walk you through the key concepts. Third, you should understand how to implement a regression model. While it would be best if you were comfortable with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or R, a working knowledge of [SaaS](../../Glossary/Concept/SaaS.md), [Stata](../../Skills/Data%20Science/Stata.md), SPSS, or the Data Analysis Tool Pack in [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) is sufficient for this course. All right, let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [SaaS](../../Glossary/Concept/SaaS.md) (1), [Stata](../../Skills/Data%20Science/Stata.md) (1), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **Env Vars:** stata (1), spss (1)
> **CLI Commands:** python (1)
> **Speakers:** - so (1)


### 1. Introduction to Program Evaluation

[↑ Back to Table of Contents](#table-of-contents)

#### [What is program evaluation?](https://www.linkedin.com/learning/program-evaluation-for-data-science/what-is-program-evaluation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/what-is-program-evaluation?u=76281980&t=1)** - This course on going beyond A/B testing is centered on applying program evaluation in [Data Science](../../Topics/Data%20Science.md). To make sure we have no issues about definitions, I want to start by being very clear about what we mean by a program and program evaluation. A typical textbook definition will say a program is an organized response to eliminate or reduce a problem where a response includes either one or more goals, performance of one or more activities, as well as the expenditure of resources like money and staff time. Ugh. I prefer the simple definition that a program is, "Any action taken with the intent to change the status quo." If you're working at a bank trying to reduce charge-offs, then the status quo could refer to the current model or approach to identifying credit-risky customers. If you're working at a health insurance company, perhaps you're building a model to optimize cancer treatment versus the current treatment paradigm. Now that we have a functional definition of a program, we should define program evaluation. I like to call it program evaluation, "A study conducted with the goal of determining how effective a program is at achieving a specific outcome." Coming back to our examples about programs. If your program was implementing a new model to reduce charge-offs, then the program evaluation would measure the change in charge-offs versus the current methods. Similarly, if the program was a modeling effort to improve cancer treatment,
>
> **[1:34](https://www.linkedin.com/learning/program-evaluation-for-data-science/what-is-program-evaluation?u=76281980&t=94)** then the program evaluation would look at how effective the new model is at increasing life expectancy compared to baseline treatments. When I first started working in [Banking](../../Skills/Software%20Development/Banking.md) and private equity, I was impressed by the variety of situations where data science was implemented. There were situations where I had to divide the country to regions and implement models in only one region as a comparison, or when I had monthly time series data that I needed to analyze to see if the model we implemented without a control was making a difference, or when we rolled out a program for customers over a certain threshold of credit, and I was tasked with figuring out the impact. We sure did love to go beyond A/B testing, and you will too. In this course, we're going to work through a number of examples of program evaluations, starting with the A/B testing method, and then moving to other methods where we will offer sample data sets. Now that we have definitions for programs and program evaluation, let's connect this with your own work. Can you write down one or two main programs you've worked on in the last year? Have there been formal evaluations of these programs yet? If not, then maybe your personal goal can be to lead the evaluation of these programs after finishing this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (2), [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Definitions:** is an  (1)
> **Speakers:** - this (1)

#### [Evaluation in data science](https://www.linkedin.com/learning/program-evaluation-for-data-science/evaluation-in-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/evaluation-in-data-science?u=76281980&t=1)** - [Data Science](../../Topics/Data%20Science.md) offers powerful tools for building supervised and unsupervised machine learning models, but the measure of a model is not how it performs on training data sets, but rather how well it does solving real world problems. Program evaluation is a critical part of data science that helps us rigorously evaluate the impact of models when they're deployed in the real world. At the earliest stages, data science is used to create a needs assessment, or in other words, what need is the model trying to address? After we establish the need, we can then examine whether the program theory makes sense, or, in other words, does the model we're building address the need? We'll look at the evaluation outcomes to make sure that the model really does have an impact in the real world, along with examining questions of equity. Equity refers to whether the model is implemented in a fair way by reviewing who is and is not benefiting from the model. Program evaluation also looks at the question of efficiency. Is this model the most efficient way to solve the problem or are there more efficient ways? Some data scientists think of program evaluation as a bridge between the theoretical world of data science and the practical realities of implementing models. By using program evaluation principles, we can ensure that the data science models are not just technically sound, but they are truly impactful in the real world.
>
> **[1:37](https://www.linkedin.com/learning/program-evaluation-for-data-science/evaluation-in-data-science?u=76281980&t=97)** In this course, we will introduce a number of examples for you to practice, but I would like to refer back to the examples of preventing charge-offs in [Banking](../../Skills/Software%20Development/Banking.md) and optimizing cancer treatment to prevent mortality. The first is detecting customers at high risk of charge-offs. The outcome is a continuous variable, the amount the customer is expected to charge off or not repay the bank. The second example is optimized cancer treatment. Here, the outcome variable is cancer-related mortality within a fixed time window, such as the next five years. This outcome variable is a binary variable, either yes or no, the patient died of cancer in the five-year time period. To make this course as relevant as possible for your own work, I would like you to think about what outcome variables and models are most important to your work. Please write them down so you have them as a reference later. Are the continuous variables like charge-off amount, binary variables like yes or no, the patient died, or some other type of variable?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (5), [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Definitions:** is a  (3), in other words (2), refers to (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1)
> **Speakers:** - data (1)

#### [Introduction to causation](https://www.linkedin.com/learning/program-evaluation-for-data-science/introduction-to-causation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/introduction-to-causation?u=76281980&t=1)** - Program evaluation aims to confirm that the [Data Science](../../Topics/Data%20Science.md) model was the cause of the change in the outcome. Did the new treatment optimization model cause cancer patients to live longer? Did the new risk model result in the company having less charge off loses? Determining causality is one of the main goals of data analysis where causality refers to the understanding of if X causes Y. People think that data science is all about making predictive models and doing machine learning. [Causal Inference](../../Skills/Software%20Development/Causal%20Inference.md) is an underappreciated field within [Statistics](../../Skills/Data%20Science/Statistics.md) and data science. Causal inference requires us to isolate the impact of the item of interest. For example, a new model and program from all other factors. There are a lot of methods designed to help with causal inference including matching methods, regression discontinuity difference indifference, interrupted time series and randomization. Each of these methods has situations where it is well-suited. Propensity score methods, two stage modeling, instrument variables and interrupted time series are often used when you can't randomize before starting a program or model. The most common approach to causal inference relies on randomization. When done correctly, it also leads to results that are easy to analyze and interpret. In terms of causality, the first question is are we interested in determining causality? If the answer is no, then the other questions are less important.
>
> **[1:35](https://www.linkedin.com/learning/program-evaluation-for-data-science/introduction-to-causation?u=76281980&t=95)** If the answer is yes, then we can ask can we conduct a randomized experiment to answer this question? What are the possible confounding factors? And how can we account from them in our design? What biases could affect our study? And how can we mitigate them? If we can't randomize, what other methods of causal inference should we consider?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Causal Inference](../../Skills/Software%20Development/Causal%20Inference.md) (5), [Data Science](../../Topics/Data%20Science.md) (3), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Definitions:** refers to (1), is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - program (1)

#### [Checklist for evaluations](https://www.linkedin.com/learning/program-evaluation-for-data-science/checklist-for-evaluations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/checklist-for-evaluations?u=76281980&t=1)** - Throughout this course, we're going to discuss different methods for program evaluation going beyond A/B testing. Since we're going to be covering a number of methods, I'm going to offer a simple checklist for program evaluation that you can apply throughout this course and in your own applications. I like to break this up systematically into a few categories with some basic questions you should ask for each category. Let's start with the program theory. Are there issues with the overall theory that connects the model to the activities to the outcomes you're trying to achieve, such as reduced charge-offs or lower mortality rates? If the theory is not sound, then the model will not succeed in the real world. Next is implementation. Are there concerns about the implementation of the model in the real world? Was it rolled out correctly so as to produce results, or were there issues with the training, staffing, or other parts of the implementation process? The data itself needs to be considered. Are there large amounts of missing data, ranges that don't make sense, and powerful enough features to make predictions? Next are methodology best practices. Did the modelers follow best practices, or are there potential problems with the model structure, assumptions or methods that can make the model results unstable over time? Are the models statistically strong
>
> **[1:34](https://www.linkedin.com/learning/program-evaluation-for-data-science/checklist-for-evaluations?u=76281980&t=94)** or is it only weakly predictive? What about the threats to validity, such as selection threats, history threats, and behavioral threats? A well-designed study can mitigate many of these threats. After considering all of these factors, what is your conclusion? Was the program implemented well, and do you trust the conclusions of the evaluation? This is a simple checklist, but one that can be useful throughout your work. Take a moment to review the list and compare with some of the models you have implemented and evaluated performance in the real world. Are there any gaps that you're concerned about, or were all the steps done well?

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - throughout (1)


### 2. A/B Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [What are randomized studies?](https://www.linkedin.com/learning/program-evaluation-for-data-science/what-are-randomized-studies?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/what-are-randomized-studies?u=76281980&t=1)** - Simply put, randomization is the act of assigning participants or data points to groups in a random way, without bias or preference. Think of assigning a random choice by flipping a coin where depending on the side of the coin, someone is either assigned to a program or to a control group. The flipping of the coin introduces the random part of the assignment. Of course, there can be more than two groups in a randomized study, so more generally, you can think of it more as a random number generator that can be used to assign subjects to one of X groups randomly. One of the most common examples of a randomized study is a clinical trial. Here, patients are assigned to a treatment group based on a random process so that the patient characteristics that are known or suspected of being able to drive the results are well balanced across the different treatments. This random assignment is performed prospectively, meaning that the subject is assigned to the group before the program starts. While there are advanced designs for some randomized studies, such as cluster designs and hierarchical randomization, we will focus on simple randomization, which is what is commonly used for A/B testing. In the case of a randomized test of a new model for preventing charge-off, the eligible customers would be assigned to different programs or models first, so that the randomization is performed
>
> **[1:35](https://www.linkedin.com/learning/program-evaluation-for-data-science/what-are-randomized-studies?u=76281980&t=95)** before a quality check of the randomization is conducted, and then the program is implemented. A keyword in that sentence was before. That is, the randomization was assigned before the program. Another key phrase was quality check, since it is critical to ensure that the randomization was successful before analyzing the data. Unsuccessful randomizations can be handled statistically, or the customers can be re-randomized before the study begins. There are many design considerations in a randomized study, including questions around, what is the sample size needed to have enough statistical power? How do we operationalize the randomization? Is the data infrastructure properly set up to capture the results of the experiment? And are we prepared to analyze the data? Sometimes you have to ask yourself, what are you going to randomize? For the test of the charge-off model, are you randomizing at the level of the customer, the product purchased, the store they purchased from, or some other level? What are your experiences with randomized studies in the real world? Here are two questions to ask yourself. Did you remember to check the quality of the randomization? Did you estimate the required sample size before beginning the study?

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - simply (1)

#### [Advantages of A/B testing](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-a-b-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-a-b-testing?u=76281980&t=1)** - Now that we've introduced the basic approach to randomization, let's talk about the advantages of doing randomized studies along with what could go wrong. The beauty of a randomized study is that it allows us to balance the key observable and unobservable factors that might impact the outcomes of interest whether it is charge-offs, deaths due to cancer, or any other outcome. The observable factors are things that we can measure, like age, sex, and location. The unobservable factors are more difficult to measure, like motivation and other attitudes. We want to balance these factors across the randomized groups so as to control for selection bias that can impact our results. If younger people are more likely to charge-off, or females are more likely to respond well to the cancer treatment, then we need to appropriately account for these factors. Otherwise, we could be accidentally drawing a false conclusion about the program's effectiveness by confounding the effect of the selection bias due to sex, age, or location with the impact of the program. Randomization and A/B testing are necessary tools to have in the [Data Science](../../Topics/Data%20Science.md) toolkit, but they're not foolproof. We already mentioned that issues can arise in the randomization process or sample size calculator resulting in populations that are not well-balanced on key attributes. This is called a selection threat. Other issues can include low treatment uptake
>
> **[1:34](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-a-b-testing?u=76281980&t=94)** where people can choose to opt out of the assigned program. Think about cancer treatment where the drugs make the patient so sick that they have to stop taking treatment. There are adjustments that can be performed to the analysis such as modeling the intent to treat or the relationship between treatment intensity and outcome. The reality is that data analysis and conclusions are messier. Another issue that can arise is contamination of the control. In this situation, people who are supposed to be in the control or reference group actually receive some of the treatment. Think about an operational unit that offers some customers options from the new charge-off mitigation program even though that customer was not supposed to receive those options. As with low treatment uptake, this can be controlled for statistically, but your analysis just got more complicated. Double-blind studies are the standard in clinical trials because of behavioral effects. Subjects may act differently if they know they're in the treatment group or control group, and even experimenters may act differently as well. In a test of a new charge-off model, the operational units are aware of who is in what group, but the customer may not know, so this is more of a single-blind study. The conclusion on A/B testing and randomized studies is that when implemented well they can be very effective at helping you determine if your program had an impact, but they are not foolproof.
>
> **[3:09](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-a-b-testing?u=76281980&t=189)** Consider carefully what can go wrong in advance so you don't create a lot more analysis work on the backend cleaning up operational issues such as unbalanced assignment, low treatment uptake, and contamination of the control.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Speakers:** - now (1)

#### [Applications for A/B testing in data science](https://www.linkedin.com/learning/program-evaluation-for-data-science/applications-for-a-b-testing-in-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/applications-for-a-b-testing-in-data-science?u=76281980&t=1)** - Randomizations, such as A/B testing is extremely popular because it can be implemented quickly in most business environments. And when done correctly, allows you to easily understand if your program of interest has an impact on the outcomes of interest. Across a broad swath of industries, randomization is readily applied by data scientists as the default method for program evaluation. Consider the healthcare, [Banking](../../Skills/Software%20Development/Banking.md), [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md), and retail industries as examples. Each industry has data scientists engaged in developing and implementing models to increase revenue and reduce costs. And each industry has data scientists tasked with showing that their work has impact. Starting with banking, we've already discussed how many companies might test new models for predicting which customers are likely to default on their debts. Banks want to avoid charge off losses, and so they will test model performance. Also, fraud detection is a major area of concern for banks. Here they focus on identifying which transactions and accounts are likely to have fraudulent activity. Fraud detection models and work prioritization [Algorithms](../../Skills/Software%20Development/Algorithms.md) are a major way for companies to reduce their fraud losses. Both types of models are routinely tested using randomized studies. In the retail spaces, personalized marketing campaigns
>
> **[1:35](https://www.linkedin.com/learning/program-evaluation-for-data-science/applications-for-a-b-testing-in-data-science?u=76281980&t=95)** such as testing different email subject lines, content or offers are used where the outcomes of interest include email open rates, click-through rates, and most importantly, sales conversions. These marketing campaigns are constantly being subject to randomized tests with many different factors being varied across the customer base, so they can test multiple factors such as the subject, content, and offers all at the same time. Cellphone companies are concerned about cross sells and churn. The more [products](../../Skills/Software%20Development/Microsoft%20Products.md) a customer has, the less likely they are to change plans. At the same time, they want to make sure that they're offering products to customers that they might like, and not having the potentially valuable customer relationship being added to the list of spammers. Testing different cross-sell models that predict the likelihood of sales is a great application of randomized studies. One that is found routinely in the telecommunication space. Healthcare companies have countless examples of randomized studies. While I already introduced the challenge of optimized treatments, this is a standard application of [Data Science](../../Topics/Data%20Science.md) in the pharmaceutical and healthcare space. Besides examining drug utilization, other random experiments can examine different drug labeling, packaging, or educational materials to minimize medication errors and reduce the rate of adverse events. Patient engagement is a common concern,
>
> **[3:10](https://www.linkedin.com/learning/program-evaluation-for-data-science/applications-for-a-b-testing-in-data-science?u=76281980&t=190)** and so other common randomized studies look at methods of improving patient education materials, communication channels, or support programs to improve patient adherence and outcomes. While the list of randomized applications spans across many industries, this sample should inspire you to begin considering what other applications can exist in your company and industry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Banking](../../Skills/Software%20Development/Banking.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Data Science](../../Topics/Data%20Science.md) (1)
> **Definitions:** is a  (4)
> **Analogies:** such as (3)
> **CLI Commands:** make (1)
> **Speakers:** - randomizations (1)

#### [Quality checking A/B testing](https://www.linkedin.com/learning/program-evaluation-for-data-science/quality-checking-a-b-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/quality-checking-a-b-testing?u=76281980&t=1)** - When running an A/B test or more generally a randomized study, there are a number of quality checks that should be performed in order to confirm that your conclusions being drawn are unbiased. First and foremost is a [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) check. This data quality check should review the completeness of the data by assessing the level of missing this. Features with high degrees of missingness are problematic as you don't know the distribution of these missing values. Beyond missingness, are checks of the values themselves. Do the ranges observed seem plausible, or are there issues with a range that suggest problems with the data source, data capture process or data transformations? While ensuring that there are no 150-year-old customers, seems straightforward, all of the features have plausible ranges that should be confirmed. Lastly, there is the most subtle question of the breadth of the features. Are there sufficient features being captured to confidently state that the randomization worked and that the populations are well balanced on key features related to the outcome of interest, whether that be charge off risk, cancer mortality, or some other outcome? Once you've confirmed the data quality questions, then you can examine the method of randomization. Was a simple randomization used, and if so, what was the basis of the randomization? Using the first few digits of the phone number
>
> **[1:34](https://www.linkedin.com/learning/program-evaluation-for-data-science/quality-checking-a-b-testing?u=76281980&t=94)** or social security number are problematic since they're not randomly assigned. Assuming the method of randomization was reasonable, you can now examine the match quality itself. This is a critical step that is often skipped with severe consequences if the match is poorly done. An easy way to check the match quality is to compare the distribution of the features to see if there are significantly different between the programs being randomized. You can perform statistical tests on continuous and discreet features to confirm the quality of the randomization. Another important consideration is the sample size. If the sample size is too small, then you'll not be able to detect if the randomization was successful. In many real world business situations, sample size is quite large, but when working with small samples, you need to pay close attention to any tendencies in the data. If you only have 50 subjects in the program, then you may not be powered enough to observe statistically significant differences with a control group, but there could be a tendency for older, sicker patients to be in the program. Two last quality control items to review are the program uptake and the attrition. The uptake refers to how much of the program was used by those assigned. Programs with low uptake are not likely to show an impact, and this low uptake points to issues
>
> **[3:09](https://www.linkedin.com/learning/program-evaluation-for-data-science/quality-checking-a-b-testing?u=76281980&t=189)** with the program itself, such as poor implementation. Meanwhile, attrition refers to losing the subject from the study so you don't know their outcome. This is problematic since the subjects that it tried could be ones with very positive or negative results, but you just don't know because they're lost to the dataset. While this list of quality controls might seem overwhelming, when in doubt just focus on the most critical questions. Is the data sufficient to do the analysis and do I have evidence that the match was or was not successful? If you are comfortable with the answers to those questions, then you're starting off in good shape.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (3)
> **Definitions:** is a  (2), refers to (2)
> **Analogies:** such as (1)
> **Speakers:** - when (1)

#### [Practice A/B testing](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-a-b-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-a-b-testing?u=76281980&t=1)** - In this example, we're going to examine a data set from a retail client that was interested in modifying its loyalty program in order to ensure that the new program was effective. For this example, I encourage you to use whatever software you're comfortable with that can support statistical tests and regression modeling, whether that be [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or R, or a proprietary software package such as [SaaS](../../Glossary/Concept/SaaS.md), SPSS, S plus, or even [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md). Just remember to focus on understanding the data and have fun. For this example, the client decides to implement a randomized control study. This was a retail client who first identified a set of customers who were potential targets. These potential targets were randomly assigned to one of two possible groups. The test group customers were assigned to the new loyalty program, and the control group customers were assigned to the current loyalty program. The goal of the loyalty program is to stimulate more purchases by the customers, and so the key outcome of interest for this study was to see if the average customer purchases were greater in the new program than in the old program. The study design tried to balance key features that were known to be important in predicting customer purchases. The study began on the same day for all customers in the program. In looking at the dataset, you'll notice that there are variables related to the customer id, which is unique for each customer,
>
> **[1:36](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-a-b-testing?u=76281980&t=96)** as well as a number of baseline conditions such as the pre-index purchases, the purchases in the six months before the study began. Whether the customer lived in a major metro area, does the company have the customer's email address, what was the dollar amount of the last purchase, customer demographics like age and sex, and an indicator of whether or not they belong to the test or control group. Remember, the outcome of interest is post index purchases, which are the purchases in the six months after the study began. For this example, please start by running the quality checks. Is the data set sufficient for the desired analysis? What observations do you have about the completeness of the features? Are there any key features that you would've liked to have that are not available? Are there a large number of missing values? Does the range of the features make sense? Are there any correlations between the features you should be aware of? After you've completed your [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) checks, please examine the quality of the match to see if the customers are well balanced in the two groups. Finally, develop some models of the outcome variable, post index purchases. Ask yourself whether the program did or did not have an impact in increasing the amount of purchases made. I'm very curious about the results you obtain. Just a little hint for you,
>
> **[3:07](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-a-b-testing?u=76281980&t=187)** when I ran the analysis, I concluded that the program didn't help stimulate purchases, but let's see what you conclude.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [SaaS](../../Glossary/Concept/SaaS.md) (1), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **CLI Commands:** python (1), make (1)
> **Analogies:** such as (2)
> **Env Vars:** spss (1)
> **Best Practices:** remember to (1)
> **Warnings:** be aware (1)
> **Speakers:** - in (1)


### 3. Beyond A/B Testing and Randomization

[↑ Back to Table of Contents](#table-of-contents)

#### [Limitations of A/B testing](https://www.linkedin.com/learning/program-evaluation-for-data-science/limitations-of-a-b-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/limitations-of-a-b-testing?u=76281980&t=1)** - In spite of the great advantages of A/B testing, high quality randomization is not always possible, or appropriate. One situation where it's not possible to have a control group that received no program is when there are ethical concerns. For example, in healthcare and pharmaceuticals, it might be unethical to withhold a potentially beneficial treatment from a control group. This doesn't mean you can't perform a randomized study, but the comparison groups must have some combination of beneficial drugs. There are practical limitations to randomization, where you may not be able to randomly assign users to different groups. For example, in a retail store chain testing different store layouts, you can't randomly assign customers to shop in one layout or another. Or in a [Banking](../../Skills/Software%20Development/Banking.md) program, for those with low credit scores, only those customers below a specific threshold are allowed into the program. Or randomization can fail, resulting in populations that are not well balanced on key attributes, called a selection threat. Timing matters in a randomized study. The evaluation needs to be planned before the program is implemented, meaning randomized studies are a prospective study. This means that if the program has already been implemented, you'll need to use a different method that works for retrospective studies, and not prospective studies.
>
> **[1:34](https://www.linkedin.com/learning/program-evaluation-for-data-science/limitations-of-a-b-testing?u=76281980&t=94)** Randomized studies can be time and resource consuming, especially if you're testing multiple variations or require a very large sample size for significant results. While it takes time and money to design, develop, and run A/B tests, the analysis time is shorter than non-randomized studies. Behavioral issues refer to the fact that subjects may act differently if they know they're in the treatment group or control group, and even experimenters can inadvertently impact the results. Ideally, evaluations are performed double-blinded to avoid behavioral effects. More often, evaluations in the corporate world are single-blinded, meaning that the subjects are not aware that they're in the randomized study, but the data scientists know who is in which arm of the study. The positive news is that many of these limitations can be addressed, either with other designs or through statistical adjustments. In the next video, I'll introduce some of the other methods that can be applied.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - in (1)

#### [Alternatives to A/B testing](https://www.linkedin.com/learning/program-evaluation-for-data-science/alternatives-to-a-b-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/alternatives-to-a-b-testing?u=76281980&t=1)** - We've seen that AB testing has some limitations related to when it can be used and how it is implemented. Let's talk about some of the other methods that can be used by data scientists to evaluate whether or not a program had an impact. One issue with AB testing is that it is a prospective method, meaning you need to plan the randomization before starting the program, but what if the program was already implemented to some customers? We can use matching methods to do retrospective analysis. With matching methods, we can reproduce what a randomized study might have looked like for a subset of the subjects. Another issue with AB testing is that it doesn't work well when there's a threshold for assignment. If everyone in the program has to have a credit score below 500, then you can't compare the program's performance on those who have credit scores above 500. Luckily, there's a method for handling this called regression discontinuity. What if you have monthly data on total cross sells and you implement a program for every customer? This means there was no control. You can still try drawing a conclusion using a method called interrupted time series. Another situation where AB testing struggles is when the features are too coarse for randomization. For example, imagine running a program that has to be implemented at the country level.
>
> **[1:36](https://www.linkedin.com/learning/program-evaluation-for-data-science/alternatives-to-a-b-testing?u=76281980&t=96)** There will be countries with the program and countries without. Only a limited number of countries are going to participate in the study, so you don't have a pool of 100 tests and 100 control countries, and of course countries can be quite different. So randomizing these two groups won't necessarily result in similar groups for the test and control. Difference in difference methods are useful in this situation and can help you get directionally correct if not necessarily perfect results. Finally, I want to introduce two methods that are popular with economists but not data scientists. Heckman's two stage modeling is a method developed by Nobel Prize winner, James Heckman, where you address sample bias by first building a model of who was assigned to be in the program, and then using this information along with a quantity called the inverse mills ratio to model the outcome of interest. It is not widely used by data scientists since the model interpretability is often more difficult than other methods, such as matching methods. The other method used by economists is instrument variable, which is another example of two stages of modeling to try accounting for missing features. The primary issue with this method is that it is heavily influenced by the choice of instrument, and so the results are often not robust. In conclusion,
>
> **[3:08](https://www.linkedin.com/learning/program-evaluation-for-data-science/alternatives-to-a-b-testing?u=76281980&t=188)** there are a large number of methods that can be used to go beyond AB testing. In this course, we'll focus on difference in difference, matching, regression discontinuity, and interrupted time series. But you are welcome to explore others.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), imagine (1), such as (1)
> **Definitions:** is a  (2)
> **Speakers:** - we (1)


### 4. Matching Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [When to apply matching methods](https://www.linkedin.com/learning/program-evaluation-for-data-science/when-to-apply-matching-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/when-to-apply-matching-methods?u=76281980&t=1)** - Matching studies are very useful in situations where the program has already been implemented without a randomized control, and you want to understand the program's impact. The implementation could have been due to some non-random assignment to the program and administrative decision about who gets the program and who doesn't, or self-selection. As a result, there's a population that was exposed to the program and a population that wasn't, but they're different in their observable characteristics. When I say observable characteristics, I mean features that you can and did measure like age and spending patterns, and not unobservable features like motivation or unmeasurable attitudes. Because the data already exists, matching is used for retrospective studies. We can contrast this design with a typical A/B testing where the subjects are first assigned and later the data is collected, also known as prospective studies. As I mentioned, matching studies are performed retrospectively when the subjects are not randomly assigned. Because you can only match on observable features matching studies are most successful when there is a rich set of features that help predict the outcome of interest. If you only have a few features, the matching is not likely to be a very helpful tool. Matching can be used for both interval variables like age and previous spending, as well as categorical variables such
>
> **[1:37](https://www.linkedin.com/learning/program-evaluation-for-data-science/when-to-apply-matching-methods?u=76281980&t=97)** as sex, educational attainment, and a region of the country. If a feature has a high level of missing-ness, it may be less useful in matching, though in some cases, the fact that a feature has a high degree of missing-ness can be informative. Matching struggles when the sample size is low. The reason why is that when we match, we're going to select only the observations that have a good but not necessarily perfect match and drop those that don't. That means that we might allow subjects to be called matches if the age is within a few years, but if we only had a small sample size to begin with, the matching might force us to drop too many subjects. Matching succeeds when there are substantial overlaps in the features of the subjects, but will fail if we want to match on a variable like age, but had assigned all of the young people to one program and all the old people to another program. In that case, the program effect is completely linked to the subject's age, and we won't be able to find a subset of the original population with similar ages. Matching works best when there's only one program being tested against a comparator, but it can be performed when you have multiple programs being tested. For example, if we have a standard program that's already being used, then that can be our comparator and we can test programs A, B,
>
> **[3:11](https://www.linkedin.com/learning/program-evaluation-for-data-science/when-to-apply-matching-methods?u=76281980&t=191)** and C by developing matches between each program and the comparator. Remember, matching methods are retrospectively applied and most effective when there are a lot of strong features that have substantial overlap between the program and comparison group.

> [!info]- Semantic Content
>
> **Definitions:** known as (1), is a  (1), means that (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - matching (1)

#### [Best practices for matching methods](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-matching-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-matching-methods?u=76281980&t=1)** - Matching can be performed in different ways, though I generally like to divide it into two categories, absolute matching and propensity score matching. In absolute matching, [Algorithms](../../Skills/Software%20Development/Algorithms.md) seek to identify subjects who are similar in the multi-dimensional space of the baseline features using [Windows](../../Glossary/Service/Windows.md) of acceptability. For example, you can specify that the match subjects have to be within two years of each other or have to have the exact same number of years as a customer, or the same cancer stage. The algorithms have controls to select the features included in the match, as well as the caliper or window of acceptability. In propensity score matching, the propensity or [Probability](../../Skills/Data%20Science/Probability.md) of being assigned to the test versus control group is computed. Every subject is then classified by this single dimension, the propensity or probability of assignment. The researcher then matches subjects who have similar propensities. The beauty of propensity score matching is that it reduces the challenging problem of having many features, or dimensions that need to be matched between test and control populations to only having to match on one dimension, the propensity. The matches can be done with or without replacement, meaning that you can force the matching algorithm to use subjects once and only once, or you can allow the subjects to be repeated. There are a wealth of algorithms that can be used
>
> **[1:36](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-matching-methods?u=76281980&t=96)** for this matching, including minimum distance and greedy. The caliber also called the window of acceptability of the match is extremely important. The wider the caliber, the fewer subjects are excluded, but the remaining subjects are a poorer match. The narrower the caliper, the more subjects are excluded, but the remaining subjects are a closer match. Research has shown that using a caliper of about 0.2 of the standard deviation of the logit of the propensity score is effective, but you can readily adjust the caliper in most algorithms. You can also adjust the matching ratio, meaning in most algorithms, you can specify if there should be one test for each control, or two tests for each control, or any ratio of tests and controls. If the unmatched population is roughly similar in size, then starting with a one-to-one ratio might be best and then explore other ratios. If we drop too many subjects to make a match, then our conclusions become very limited. Sometimes we're unable to find a large number of good matches because the subjects in the test and control groups are very different. For example, if mostly older people were in the test group and younger people in the control group, then there'll be few subjects we can match for the feature age.
>
> **[3:08](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-matching-methods?u=76281980&t=188)** When we drop too many subjects, our results are still valid for those retained in the study, but the results aren't generalizable to the overall population. One of the most critical best practices is to go back and check that the match sample is well balanced on the key baseline features by statistically comparing the final distribution of the matched test and control. If it isn't, then it is tied to adjuster algorithms, the caliper, the match ratio, and other parameters. Using the match population, I like to build both multiple variable regression and univariate models where univariate means I am only including the indicator of the test versus controlling my model. This is a quality control step where if the match is successful, I should get the same results in both models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (6), [Probability](../../Skills/Data%20Science/Probability.md) (2), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for example (2)
> **Versions:** 0.2 (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - matching (1)

#### [Advantages of matching methods](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-matching-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-matching-methods?u=76281980&t=0)** - There are many advantages to matching methods when faced with a retrospective data study, meaning the program already exists and has been implemented. The first denote is that there are a large number of matching [Algorithms](../../Skills/Software%20Development/Algorithms.md) and programs that already exist in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), R, SAS and other programming languages. So please, first, take a few minutes to explore online what is already available and can be readily used for your work. These algorithms can be applied to large data sets quickly, and sensitivity analysis can be performed for the caliper and match ratios with minimal incremental effort, building on the fact that the matching programs are readily available across a broad swath of languages. The next thing to note is that it is relatively easy to communicate the results of a matching study because the match population looks a lot like the output of a randomized study. You can share the descriptive [Statistics](../../Skills/Data%20Science/Statistics.md) from the match population and then discuss the results of the program. If it is a charge off reduction program, you can show how similar the match customers in the program are to the control and then, report the resulting charge off rates. If it is a mortality reduction program, you can share the key patient characteristics of the match population along with the mortality information. Audiences familiar with randomized studies
>
> **[1:33](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-matching-methods?u=76281980&t=93)** will readily accept the results of matching studies since it aligns with the type of program evaluations they're used to seeing. While the advantages are clear, there are some limitations as well. You can only match on available variables, so if critical variables are missing, you will not know if the populations are well balanced on these factors. For example, if you're trying to match cancer patients and are missing the cancer stage, this would be a critical omission. Another issue is that if the patients are substantially different, you may need to drop a large number of patients, resulting in limited ability to generalize results to the unmatched populations. Overall though, this is a powerful method for program evaluation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Definitions:** is a  (3)
> **CLI Commands:** python (1)
> **Env Vars:** sas (1)
> **Analogies:** for example (1)
> **Speakers:** - there (1)

#### [Interpreting results of matching methods](https://www.linkedin.com/learning/program-evaluation-for-data-science/interpreting-results-of-matching-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/interpreting-results-of-matching-methods?u=76281980&t=1)** - Matching studies have a wonderful advantage when you share the results. The output looks like a randomized study. I emphasize looks because it isn't a randomized study. And there are limitations that need to be remembered when interpreting the results. Since matching is done retrospectively using observable variables, it is unable to match on unobservables such as motivation or self-selection. As a result, we cannot truly say that the subjects are on average the same in the test and control group. Instead, we have to say that, with a successful match, the matched subjects appear similar for the features we compared. We are always going to be a little concerned about the issue of strong ignorability or, in other words, was there a critical feature that was not in our data set so we couldn't use it for the matching? While there are some matching [Algorithms](../../Skills/Software%20Development/Algorithms.md) that focus on weighting all subjects, most work by discarding subjects that are dissimilar. This leads to another subtle point about interpreting the results of matched studies. We're drawing our conclusion about the matched subjects only, not the entire population of the test and control group. Well, this seems reasonable. If we had to discard most of the subjects in order to make a match, then the results seem less robust than if we only had to discard, say, 10% or less of the subjects.
>
> **[1:35](https://www.linkedin.com/learning/program-evaluation-for-data-science/interpreting-results-of-matching-methods?u=76281980&t=95)** Assuming you do have a successful match in that the matched populations appear to be similar on the key features at baseline, then you can state the results for the matched population. By showing the quality of the match, you will raise the confidence of management and other data scientists. Also, for those who are familiar with AB testing, they may smile, as the matched data looks very much like the type of analysis they've seen in the past. The take-home message on this movie is that matching has great advantages from a communications point of view, but you need to make sure you aren't overselling the results. With a good match of the baseline features, you can draw a conclusion about only the matched population, not the entire population of test and controls.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** make (2)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Speakers:** - matching (1)

#### [Practice matching methods](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-matching-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-matching-methods?u=76281980&t=1)** - In this example, we're going to examine a dataset from a health insurance company that was interested in understanding whether patients treated with one asthma drug versus another have less exacerbations. This is a real-world dataset in that it represents how drugs are prescribed in the real world as opposed to a clinical trial. The dataset consists of a large number of patients, their demographics, such as their age and sex, some key comorbidities, and pre-index health resource utilization, which refers to costs and resource use before the asthma drug was first prescribed. It also includes an indicator variable called drug S, which is set to either zero or one depending on which drug the patient received. Lastly, we have the outcome of interest. Post-index exacerbations 365, which is the number of asthma exacerbations in the year after drug treatment began. You will notice that this value is a heavy-tailed count distribution, often fit by a negative binomial regression. I'm purposely leaving this open to you to decide what software, matching algorithm, match ratio, and caliper you want to use. In this example, you should explore the data first by performing descriptive [Statistics](../../Skills/Data%20Science/Statistics.md) on the unmatched population.
>
> **[1:33](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-matching-methods?u=76281980&t=93)** What do you notice? Then implement a match. What do you observe about the matching population? Lastly, develop multiple variable and univariate regression models of the outcome of interest, post-index exacerbations, where you examine the impact of the drug on the outcome of interest. When I analyzed the data, I didn't see a statistically significant effect of the drug at the P = 0.05 level on the number of post-index exacerbations. But I'm curious if you use a different approach and find a different result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Definitions:** is a  (2), refers to (1)
> **CLI Commands:** find (1)
> **Versions:** 0.05 (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)


### 5. Difference in Difference

[↑ Back to Table of Contents](#table-of-contents)

#### [When to apply difference in difference](https://www.linkedin.com/learning/program-evaluation-for-data-science/when-to-apply-difference-in-difference?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/when-to-apply-difference-in-difference?u=76281980&t=1)** - Difference in difference, often referred to as DID, is one of the most common methods used when you can't randomize. Difference in difference is most useful in situations where there are two time periods, one before and one after the program start date, and there are at least two groups of subjects. In the first time period, none of the groups receives the program of interest. In the second time period, only one of the groups receives the program of interest. I have found difference in difference most applicable in situations where a program implementation is limited by geography. For example, a new model for fraud prevention was implemented in only one country, and the other countries were used as comparisons. In that case, we had data on the fraud detection and losses, both before the program started as well as after. The country in which we began the program was our test, and the countries where the program was not started acted as comparisons. While it is intuitive that we can apply difference in difference to programs in different geographies, there are other applications as well. For example, there are good difference in difference studies comparing the productivity of companies that changed their work-from-home policies in 2023 versus those that left the COVID policies intact. Also, you can compare overall retirement savings for companies
>
> **[1:35](https://www.linkedin.com/learning/program-evaluation-for-data-science/when-to-apply-difference-in-difference?u=76281980&t=95)** that have an opt-in maximum retirement contribution plan versus those that have an opt-out maximum retirement contribution plan. And back to our geography examples for a moment. Consider difference in difference approaches for a study that compares the organ donor rates of places that have an opt-in versus an opt-out approach. All of these are great examples of where difference in difference can be applied, where there is data both before and after the program has been initiated, for both the program and the comparison groups. What about your own experiences? Have you worked on any difference in difference studies at your work?

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **Env Vars:** covid (1)
> **Speakers:** - difference (1)

#### [Best practices for difference in difference](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-difference-in-difference?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-difference-in-difference?u=76281980&t=1)** - The difference-in-difference design is deceptively simple. You just need to have subjects assigned to the program and comparison group with data before and after the program started. What could possibly go wrong? Well, a lot. As with all program evaluations. Minimizing the attrition rates and ensuring high program uptake are important, but let's focus on some items that are specific to difference-in-difference studies. The first thing that can go wrong is that the program and comparison group can be so radically different that comparing the change in the outcome of the two groups isn't meaningful. Basically, this study design is trying to remove what is called the history threat, where the results are explained by another program besides the one of interest. Comparing the changes of the two groups, the program and the comparison, allows us to focus on the change in the outcome and not the absolute value. In the examination of risk prevention, we could run the program in one part of the country and not another, and look at the changes in charge-off rates, but are the dynamics that impact the economy and charge-offs the same in Alaska as in Florida? Clearly, the closer the geography, the more likely the analysis is relevant and we can reduce what is known as the selection threat. Besides trying to maximize the similarity between the program and comparison group to reduce the selection threat,
>
> **[1:33](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-difference-in-difference?u=76281980&t=93)** we should also pay attention to the time period of interest. If the program should be able to show an impact in the first month, then we should be focused on monthly comparisons and not annual comparisons. The longer the time period, the more likely other factors are playing a role. Of course, you can and should do sensitivity analysis around the time period, but it helps to walk in with an expectation of how long it should take for the program to have an impact. Difference-in-difference is best analyzed in a regression model where the outcome variables modeled for each individual in the program and comparison group. There are indicators to represent the time period, before and after the program started, and to represent the group the subject belongs to, either program or comparison group. The interaction term of the program indicator and the time indicator is the measure of the impact of the program. Including covariates in the model that predict the outcome of interest will improve the difference-in-difference's model accuracy, and help isolate the impact of the program from other factors. Now that we have a good understanding of best practices for difference-in-difference, let's explore some of the advantages of this method.

> [!info]- Semantic Content
>
> **Definitions:** is called (1), known as (1)
> **Speakers:** - the (1)

#### [Advantages of difference in difference](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-difference-in-difference?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-difference-in-difference?u=76281980&t=1)** - The Difference-in-Differences method has a number of key advantages. First and foremost, it can be implemented in situations where a randomized study is not possible. As we described in the earlier videos, new programs and policies are often implemented at a group level, such as by geographic location, by company, or by school. These are, by definition, not random, but with a Difference-in-Difference approach, we can still analyze the data and say something quantitative about whether or not the program had an impact on the outcome of interest. It has a flexible design that can be applied in many different situations. While the results are best examined in a regression analysis, using individual data, it can be analyzed at the aggregate level also. In that case, the focus is on the average values of the program and comparison groups before and after the program was implemented. Another advantage of Difference-in-Difference is that it allows you to control for unobserved factors that might impact the outcome of interest in the program and comparison group. Specifically, because the analysis compares changes in the outcome of the two groups, much of the influence of these unobserved factors is controlled for. While it is possible for some unobserved factors to still exert an influence, by design, much of this impact is minimized. Also, Difference-in-Difference
>
> **[1:36](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-difference-in-difference?u=76281980&t=96)** can be run either prospectively, by designing the study before the program is implemented, or retrospectively, by designing the study using data that already exists on a program that has already been run. While prospective studies allow you to select comparison groups that are similar to the program group so you can minimize selection threats, sometimes you have little choice and have to work with the data you have. Many data scientists like Difference-in-Difference evaluations because they're easy to implement, both from running the program and from an analysis point of view. Analytically, most Difference-in-Difference analyses are simple regression models, where the key result of interest is the interaction term between the time indicator and the program participation indicator. Also, the interpretation is quite easy since the focus is on the direction, size, and significance of that regression coefficient. Difference-in-Difference can be combined with other methods. For example, you can combine this method with regression discontinuity, or even the matching methods we discussed previously, by focusing on changes in the outcomes of interest rather than the absolute values. Now that we understand some of the advantages of Difference-in-Difference, let's focus on interpreting the results.

> [!info]- Semantic Content
>
> **Analogies:** such as (1), similar to (1), for example (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - the (1)

#### [Interpreting results of difference in difference](https://www.linkedin.com/learning/program-evaluation-for-data-science/interpreting-results-of-difference-in-difference?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/interpreting-results-of-difference-in-difference?u=76281980&t=1)** - When interpreting difference in different studies, the very first step is to look at the graph data. Plotting the average value for the program group and comparison group in both time periods will give you a quick visual indicator of the direction and magnitude of the program's impact. This quick graph works whether you have only two groups, program and comparator, or many groups. Also, by including the standard error of the mean in the plot, you can quickly see if the difference is likely to be statistically significant without doing any analysis. The graph can quickly showcase the difference indifference results in a way that is readily understandable by both data scientists and business leaders. Beyond the graph, the regression output itself is a critical part of interpreting results. The simplest regression models for difference indifference would have three covariates: the time indicator, the program indicator, and the interaction term. The interaction term is the item that measures how much the program impacted the change in the outcome of interest, whether that be charge offs, fraud indication, mortality, or any other outcome. The goodness of fit of the regression model tells you how well the model represented the data. For [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) models, R squared is a common measure, but you can also look at the mean squared error, mean absolute percent error,
>
> **[1:34](https://www.linkedin.com/learning/program-evaluation-for-data-science/interpreting-results-of-difference-in-difference?u=76281980&t=94)** or another more advanced method such as base information criteria. Models that have very strong goodness of fit raise your confidence that they're explaining a lot of the variance in the data. While models with poor goodness of fit measures raise concerns about what other factors are explaining the results. More advanced regression models can include other covariates. In broadening the number of features in the model, it is useful to examine the goodness of fit, the regression coefficients, magnitude and direction, and the statistical significance of those coefficients. Features that are very important in the regression model are worth testing interactions with the program as well to see if they're critical to the results. In summary, when interpreting the results of a difference indifference model, start with a simple graph that shows the outcome for the program and comparator in both time periods, along with the standard error of the mean. If the program had a clear impact, you should be able to see it in the graph itself. The regression results are the next powerful step where the interaction term of the program end time period gives you a statistical measure of the direction, magnitude, and statistical significance of the program, where the results generally will align with what you can see in your graphs. Let's work on an example so we can see this in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - when (1)

#### [Practice difference in difference](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-difference-in-difference?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-difference-in-difference?u=76281980&t=1)** - In this example, we're going to examine a data set related to workers' compensation. Specifically, it contains data from Kentucky, a state that in 1980, raised the cap on weekly earnings that were covered by workers' compensation. We want to know if this new policy caused higher income workers to be more likely to claim for longer duration of benefits. In this dataset, we have individual level information about the outcome of interest, an indicator for whether the person was above the income threshold, and the time indicator that reflects whether the data is from before or after 1980. Additionally, there's some data on the demographics of the claimant, including the age, sex, and marital status, as well as the injury type claimed such as head, neck, back, or extremity. You have the data to allow you to compare across states, specifically Kentucky versus Mississippi, but I want you to focus for now on Kentucky only. You should start by selecting the Kentucky data and examine the change in the duration of benefits before and after the program was implemented, for those in the lower and higher income groups. It may be useful to transform the features that have heavy tailed distributions. Did the program make a difference for high earners? As with the other exercises, I'm purposely leaving this open to you to decide what software you want to use. When I analyze the data,
>
> **[1:36](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-difference-in-difference?u=76281980&t=96)** the program made a difference for high earners, but you may have used a different approach. What were your results?

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)


### 6. Regression Discontinuity

[↑ Back to Table of Contents](#table-of-contents)

#### [When to apply regression discontinuity](https://www.linkedin.com/learning/program-evaluation-for-data-science/when-to-apply-regression-discontinuity?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/when-to-apply-regression-discontinuity?u=76281980&t=1)** - The beauty of a randomized study is that when it's properly performed, the observable and unobservable characteristics are well-balanced between the program and comparison groups. Going beyond A/B specifically focuses on situations in which randomization is not possible. But what if you had a situation where a program was implemented only for those above or below a threshold? Consider a medical treatment that only patients over a certain blood glucose level are eligible to receive, or a fraud detection program that is only triggered if a transaction is over $100, or a cross-sell program that is only available for those with purchases exceeding $100 in the past year, or a charge-off prevention program that is only triggered for those who have credit scores below a certain threshold. In each of these situations, the people who are assigned to the program are quite different from those who are not assigned to the program. Let's consider the last example for a moment. If we have a charge-off prevention program that only admits people with credit scores below a threshold, say 560 FICO, then we will not be able to compare the post-program charge-off rates of those in and not in the program. Those in the program are, by definition, more likely to have credit problems than charge-offs, while those not in the program
>
> **[1:35](https://www.linkedin.com/learning/program-evaluation-for-data-science/when-to-apply-regression-discontinuity?u=76281980&t=95)** are less likely to have credit problems, and have a lower risk of charge off. Even if the program did not exist, we would expect the group in the program to have a higher charge-off rate than those not in the program. But what about those just above and just below the threshold? Are the people with credit scores of 559 so different from those with scores of 561? What about those with credit scores of 558, versus those with scores of 562? This is the root of the idea behind regression discontinuity, that those just above and just below the eligibility threshold are probably similar. I emphasize the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) threshold because it is the existence of a threshold that specifically indicates that the program is a good candidate for a evaluation using regression discontinuity. In your own work, do you have programs where there is a threshold for eligibility? If so, how did you analyze whether the program had an impact or not?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Definitions:** is a  (2)
> **Env Vars:** fico (1)
> **Speakers:** - the (1)

#### [Best practices for regression discontinuity](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-regression-discontinuity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-regression-discontinuity?u=76281980&t=0)** - I mentioned that regression discontinuity is a particularly useful method when there is a threshold for selection into the program because those just above and below the threshold are probably similar, but that leaves open the question of what do we mean by just above and below as well as how we evaluate the level of similarity. The first question regarding what do we mean by just above and below can be explored with sensitivity analysis? We could run regression discontinuity with different [Windows](../../Glossary/Service/Windows.md) of eligibility and see if the results change substantially. As we use a wide window such as between 400 and 600, then the population size will be large, but the program and comparison groups will likely be very different. If we use a narrow window such as between 559 and 561, then the program and comparison groups are likely to be similar, but the population size will be smaller. This sounds a lot like the trade-off we discussed with matching calipers because it is in fact the same. So a best practice is to explore the sensitivity of the results to different windows of analysis. To test the level of similarity, we compute the descriptive [Statistics](../../Skills/Data%20Science/Statistics.md) of the populations just above and below the threshold and do this for the sensitivity analysis we just discussed.
>
> **[1:35](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-regression-discontinuity?u=76281980&t=95)** So if we test five different windows, then we will have five sets of descriptive statistics. Our main concern is if another feature such as age or income also has a jump at the same threshold as our program's criteria 560 credit score. If the features are all varying smoothly across the threshold, then we are comfortable moving forward. When designing the program itself, a best practice is to consider where to place the threshold thresholds placed at the mean value generally have more power than those at extreme values. The choice of assignment variable also matters. We used a numerical assignment variable of the FICO score, which ranges from 300 to 850, but imagine if we only had letter grades of A, B, C, and D. This would be a very coarsely defined system, and those who have a letter B are likely on average different from those with a letter A. Our assumption of similarity would likely fail. Another best practice is to combine regression discontinuity with randomization or difference in difference. For the difference in difference concept, we can focus on outcomes that involve a change before and after the program. Like the volume of cross sells for the randomization concept,
>
> **[3:07](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-regression-discontinuity?u=76281980&t=187)** we could choose to also randomize the population who is eligible for the program or randomize in a small range around the eligibility threshold, such as randomizing. Those with credit scores between 550 and 570. We can still perform the regression discontinuity analysis, but also for those who were randomized, examine the randomized study results as well. Lastly, it is a best practice to develop an estimate using descriptive statistics as well as a regression estimate. The descriptive statistics estimate is just the average difference in the outcome of interest between the program and comparison group and represents the impact of the program around the threshold. This would be computed for the different windows examined in the sensitivity and displayed with the descriptive statistics. For the regression model, we would build a model of the outcome of interest that would include the indicator of program or comparison. The assignment variable, which in this case is the credit score and the other features, the regression coefficient of the program indicator is the estimated impact of the program and also represents the impact of the program around the threshold. The descriptive statistics and the regression method will give similar answers unless another feature also has a discontinuity at the same threshold, something you checked on earlier. Clearly, there are a lot
>
> **[4:42](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-regression-discontinuity?u=76281980&t=282)** of best practices which link nicely with the advantages we will discuss next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (6), [Windows](../../Glossary/Service/Windows.md) (4)
> **Analogies:** such as (4), imagine (1)
> **Best Practices:** best practice (4)
> **Definitions:** is a  (2)
> **Env Vars:** fico (1)
> **Cross-References:** we discussed (1)
> **UI Navigation:** open the (1)
> **Speakers:** - i (1)

#### [Advantages of regression discontinuity](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-regression-discontinuity?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-regression-discontinuity?u=76281980&t=1)** - There are a number of advantages to doing regression discontinuity. First, it allows you to analyze a situation where the program and comparison population are wildly different. A threshold assignment means that it is a completely non-random assignment, and yet we can discuss the impact of the program around the threshold. So its first advantage is that it fits a need where there otherwise is not a good solution. Another advantage is that it can be combined with methods such as difference-in-difference and randomization near the threshold. This allows us a way to crosscheck the results and make them more robust. Another advantage is that regression discontinuity is readily amenable to graphical displays. A plot of the outcome variable as a function of the assignment variable can often quickly show if the program had an impact. For example, if we had a scatter plot of the charge-off amounts on the y-axis and the baseline credit score on the x-axis, then we can easily see if the charge-off amounts jump just above or below 560. If there's no jump in the outcome variable around 560, which was our threshold for assignment, into the credit program, then the program probably did not have much of an impact. On the other hand, if there was a jump at 560, then the size of the jump is an estimate
>
> **[1:36](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-regression-discontinuity?u=76281980&t=96)** of the size of the program's impact. Simply put, if the program had a major impact, then we should be able to see it with our own eyes. Lastly, regression discontinuity has many ways we can obtain an estimate, which should be generally consistent. The estimate of the size of the jump in the graph I just described should be about the same as the descriptive [Statistics](../../Skills/Data%20Science/Statistics.md) estimate as well as the regression estimate. If they disagree, it is usually going to be because another feature is also discontinuous around the threshold, or there are behavioral issues, such as people gaming their way to be in or not in the program. With all of these advantages, it is clear that regression discontinuity is the method of choice when there's a threshold assignment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Definitions:** means that (1), is a  (1), is an  (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - there (1)

#### [Interpreting results of regression discontinuity](https://www.linkedin.com/learning/program-evaluation-for-data-science/interpreting-results-of-regression-discontinuity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/program-evaluation-for-data-science/interpreting-results-of-regression-discontinuity?u=76281980&t=0)** - Because regression discontinuity focuses on the population just above and below the threshold used for assignment, the interpretation of the results is limited. In our example with the credit scores, we can apply the regression discontinuity method to discuss the impact of the program around 560, the threshold for assignment. We can't discuss how the program impacts those with scores of 400 or 700. Those populations very far from the threshold are quite different from each other, and our regression discontinuity analysis doesn't consider them. So when we describe our results from a regression discontinuity analysis, we state the program had an estimated impact for the population near the threshold, and we don't try to say anything more. It is similar to when we describe the results for the matched population only, and don't try to state that this is the estimate for the entire population. It is helpful to show the graph of the outcome variable on the Y axis plotted against the threshold variable as the X axis. A dashed line is often placed at the threshold. A jump in the average outcome variable before and after the dash line represents the impact of the program around the threshold and should roughly correspond to the results from descriptive [Statistics](../../Skills/Data%20Science/Statistics.md) and regression modeling. Now that we've discussed the key concepts, best practices, and interpreting results, let's move on to an example using [Banking](../../Skills/Software%20Development/Banking.md) data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Analogies:** similar to (1)
> **Speakers:** - because (1)

#### [Practice regression discontinuity](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-regression-discontinuity?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-regression-discontinuity?u=76281980&t=1)** - This is a regression discontinuity example based on [Banking](../../Skills/Software%20Development/Banking.md) data. The bank has developed a database of clients who have different levels of debt that have been charged off due to the legal restrictions on when a bank must charge off loans. The bank has a large recoveries unit whose job is to maximize the amount of money the bank collects from them after they've charged off. The first stage in the recovery unit process is that a predictive model estimates the amount of money that is expected to be recovered based on historical data. This model uses a large set of input information and produces a dollar amount associated with each account. Depending on the expected recovery amount, the account is assigned to one of five different recovery strategies where the higher the expected recovery amount, the more effort and money is expected by the recovery unit. Level zero involves nothing more than an email, while the highest level, level four involves an individual recovery agent following a seven step follow up process. There are no other programs the company runs in this recovery unit that have similar thresholds, and the customers are not aware of the threshold, so they can't opt in or out of being assigned to a specific recovery level. In this example, we want to find out if there's a difference in the actual recovery amount associated with a step from level zero to one
>
> **[1:34](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-regression-discontinuity?u=76281980&t=94)** at a threshold of $1,000. In order to do this, you will need to first convince yourself that no other feature also has a step jump at this same threshold, you can test the continuity of the other features and the difference in the average actual recovery amount using descriptive [Statistics](../../Skills/Data%20Science/Statistics.md) for a variety of expected recovery [Windows](../../Glossary/Service/Windows.md), including wide windows, such as $500 to $1,500 and narrow windows such as $975 to $1025. After examining the descriptive statistics, you can build regression models for the actual recovery amount as a function of the expected recovery amount. The indicator of level zero versus level one, and the other features, the regression coefficient of the level zero versus one is the estimate of the impact of the program around the threshold of $1,000. I found an estimated impact of around 250 to $350, depending on my model and assumptions. What results do you obtain from the descriptive statistics and modeling? How does your result compare to what you see when you plot the expected versus actual recovered amount around the $1,000 threshold?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (3), [Windows](../../Glossary/Service/Windows.md) (3), [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - this (1)


### 7. Interrupted Time Series

[↑ Back to Table of Contents](#table-of-contents)

#### [When to apply interrupted time series](https://www.linkedin.com/learning/program-evaluation-for-data-science/when-to-apply-interrupted-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/when-to-apply-interrupted-time-series?u=76281980&t=1)** - Time series data is especially useful in program evaluation and, luckily, is found often in real world settings. For example, in the [Banking](../../Skills/Software%20Development/Banking.md) world there is monthly tracking of customer purchase patterns, payment activity, and other key measures. In healthcare, there is ongoing tracking of healthcare resource utilization and expenses. Stock prices, website activity, and the weather are also well captured with time series data. The power in time series data rests in the fact that it is multiple measurements of the same person or group. Interrupted time series is a method that uses the power of this time series information to draw causal inferences. You can think of it as a pre-post design with many measurements before the program started, also called pre-index measurements, and many measurements after the program started, also called post-index measurements. An example that is readily amenable to interrupted time series is the monthly charge-off losses at a bank related to a new charge-off prevention program. While it is possible to analyze this type of data without a comparison group, it's better to have a group that was not exposed to the new charge-off program for comparison. To effectively analyze the data, the analyst should understand how the program is expected to impact charge-offs, immediate impact or delayed, a step drop in the charge-offs or a gradual decline,
>
> **[1:38](https://www.linkedin.com/learning/program-evaluation-for-data-science/when-to-apply-interrupted-time-series?u=76281980&t=98)** impact the frequency of the cyclical process. The modeling of interruptions can include jumps in the value immediately after the program starts, such as the small weight gain right after eating a big lunch, or there can be a lag between when the program starts and the impact is expected to be observed. The impacts can also be gradual changes over time, like the improvements in glucose measures of someone rigorously following a low-sugar diet. This time series data can have seasonality, where some months of the year the activity is regularly higher or lower. It can also have trends, where the value tends to increase or decrease over time. Are there outliers in the time series or changes in the variance over time? All of this information is important and relevant for applying interrupted time series. Additionally, you should make sure that there isn't another program impacting the same results starting at the same time, or else you will not be able to determine which program drove the results. Interrupted time series is a powerful method that can be readily applied to time series data, but it should always be used in an informed manner with a clear understanding of the data itself, how the program is expected to impact the outcomes, and ideally with a comparison that was not exposed to the program. Please think about your own work.
>
> **[3:12](https://www.linkedin.com/learning/program-evaluation-for-data-science/when-to-apply-interrupted-time-series?u=76281980&t=192)** What time series data is regularly used for analysis? Are there programs that impact this outcome that can be analyzed?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Analogies:** for example (1), think of it as (1), such as (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - time (1)

#### [Best practices for interrupted time series](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-interrupted-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-interrupted-time-series?u=76281980&t=1)** - There are a number of best practices associated with the design and implementation of interrupted time series. For starters, including a comparison group in the design and analysis will help raise confidence that the results obtained are due to the program and not some other factor. The presence of the comparison group addresses what is known as a history threat. If a comparator group is not present, you can still analyze the data where essentially the past data acts as its own control for the program evaluation. I think visualizing the data is critical, both to improve my own understanding of how the analysis may unfold, as well as to prepare for communicating with business leaders. If the results are obvious by visual inspection, then business leaders are more likely to accept the results. To do this, plot the outcome data with a dashed line for when the program starts and note any changes in the outcome data slope or intercept after the program began. Because this is time series data, the data points are correlated. Technically, this means that you should use a time series method when analyzing the data, such as mixed modeling approach, ARIMA, or a dynamic regression technique. While it is often simpler to apply [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) models, the reality is that they make assumptions about the data that is violated for time series. Whenever I develop interrupted time series models,
>
> **[1:35](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-interrupted-time-series?u=76281980&t=95)** I create a set of dummy variables for the interrupted slopes and intercepts. The dummy variables for the interrupted intercepts are a way to model a step jump that starts at zero and jumps to one at some point. The dummy variables for an interrupted slope start at zero and increase by one for each time increment used, whether that be a day, month, or a year. A best practice is to build a main model with the interruptions that are expected, but to also explore the model results when you instead use dummy variables with interruptions before and after the true interruption. For example, if you turn the charge off reduction program on in June and expected the impact immediately, the main model would have June dummy variables. But you might also build four alternative models with April, May, July, and August dummy variables as well. You should never see impact before the program starts, so the April and May models should not show an impact of the interruption, and the July and August results should be smaller than June. If there is a theoretical basis for a lag in the response, then you should declare that in advance and not data dredge. Back to our charge off reduction model, if we know that it takes about five weeks from when we begin the program to when it is fully implemented, then we might expect a one month lag in the impact. In that case, even though June was the start month, we might expect July to show the largest impact.
>
> **[3:11](https://www.linkedin.com/learning/program-evaluation-for-data-science/best-practices-for-interrupted-time-series?u=76281980&t=191)** Another best practice in interrupted time series is treatment removal. Treatment removal is when you turn on the program for some time and then turn it off and continue measuring. You expect the outcome to be impacted by the program and then see the opposite effect when the program is removed. While this is an extensive list of best practices, you'll have a chance to implement many of these in a real world data set later on in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (1)
> **Definitions:** known as (1), means that (1), is a  (1), is an  (1)
> **Best Practices:** best practice (2), you should never (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Env Vars:** arima (1)
> **Speakers:** - there (1)

#### [Advantages of interrupted time series](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-interrupted-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-interrupted-time-series?u=76281980&t=1)** - Interrupted time series is a powerful method of analyzing data that has many advantages. The method derives its statistical strength from the large number of time series data points before and after the program has been initiated. It is specifically well suited for situations in which there's no comparison group. In those cases, the historical data essentially acts as its own control, where the data scientists should understand the expected impact of the program on the outcome in terms of the time and response, as well as whether we expect seasonality and trends in the outcomes. While interrupted time series can be analyzed without a comparator, it is best if you can use a comparator group to minimize history threats and avoid confusion about whether there was some other program or feature driving the results. Interrupted time series data that can be analyzed for an individual time series or a set of time series. In the example we'll do later, we're going to analyze time series data for over 100 countries, but we could have also computed a global average and performed the analysis on a single time series. As you might imagine, by doing the analysis on a set of time series, we get more insight and statistical power. Another advantage of interrupted time series is that it is readily amenable to graphing. A plot of the time series with a dashed line when the program starts, can quickly convince business leaders of the impact
>
> **[1:37](https://www.linkedin.com/learning/program-evaluation-for-data-science/advantages-of-interrupted-time-series?u=76281980&t=97)** of the program where the large number of data points before and after the program visually helps them see how the program initiation relates to the outcome of interest. Earlier I asked you to consider different data sets that you have that are time series. Are there any in which you implemented a program to try changing the outcome? If so, try plotting the time series along with a dashed line to indicate when the program started. Without doing any analysis, what does the graph suggest to you?

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - interrupted (1)

#### [Interpreting results of interrupted time series](https://www.linkedin.com/learning/program-evaluation-for-data-science/interpreting-results-of-interrupted-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/interpreting-results-of-interrupted-time-series?u=76281980&t=1)** - When interpreting the results of an interrupted [Time Series Analysis](../../Skills/Software%20Development/Time%20Series%20Analysis.md), there are a few key items to examine. As part of the analysis, you should have created models with different time [Windows](../../Glossary/Service/Windows.md) for the interruption. In doing this analysis, you'll have measures of the model's goodness of fit, the coefficient of the interruption, and statistical significance of the interruption for each time window of interruption tested. This allows you to identify which interruption is optimal based on an objective goodness of fit criteria, such as base information criterion. For that optimal model, you can then focus on whether the timing of the interruption agrees with theory. If the optimal interruption happened before the program began, then you should question whether the program had an impact. If the optimal interruption happened far after the program was expected to have an impact, then you should also question whether the change was due to the program or some other factor. If the magnitude of the impact is small, that might also raise concerns. Because interrupted time series is readily amenable to graphing, you should compare your visual observations to the modeling results. When these two are aligned, it makes the interpretation a lot simpler. Since the optimal interruption occurs when you can see the change in the outcome and the coefficient direction is the same as your visual inspection.
>
> **[1:34](https://www.linkedin.com/learning/program-evaluation-for-data-science/interpreting-results-of-interrupted-time-series?u=76281980&t=94)** When this is not true, you should look carefully at your model to see if the goodness of fit is small or if another feature in the model is dominating the results. When you use a comparison group for the interrupted time series analysis, you can derive stronger conclusions about the relationship between the program and the outcome. Without a comparison group, you can still discuss the results, but you should add the caveat that you're assuming no other programs were operating at that time that could also have driven the results. In some situations like medical research, the statistical significance of the interruption coefficient is very important. In business applications like [Banking](../../Skills/Software%20Development/Banking.md) and retail, the goal is generally to maximize profits and the statistical significance is less important. Take a moment to ask yourself, in your work situation, is statistical significance an important consideration, or would the business leaders be happy simply knowing that the program is increasing profits?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Time Series Analysis](../../Skills/Software%20Development/Time%20Series%20Analysis.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Analogies:** such as (1)
> **Warnings:** caveat (1)
> **Speakers:** - when (1)

#### [Practice interrupted time series](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-interrupted-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-interrupted-time-series?u=76281980&t=1)** - This is a real data set taken from the World Bank that includes country level estimates of the prevalence of HIV for a number of years. Along with the HIV prevalence estimates, it also includes information on the region, income group, and lending category of the countries in the year 2000. Why 2000? Because that is the year that the millennium development goals were declared by nearly all of the countries in the world, which included a goal of reducing the HIV prevalence, and a lot of money was raised to support this work. So if the goals and money raised impacted HIV prevalence, then we would expect the rate of change of the increase in the HIV prevalence to slow down after the year 2000, due to better protection against HIV infections. The dataset also includes interrupted intercept and interrupted slope dummy variables for a number of years where the theory indicates that we expect an interrupted intercept, or a slope, starting after 2000. Because this is a time series data, it is best if you analyze the data, using a time series approach, such as mixed methods, arima or dynamic regression. But if you're not familiar with these methods, then you can explore the data, using [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md). Start by graphing the data where you may find it more useful to use the log of HIV prevalence,
>
> **[1:33](https://www.linkedin.com/learning/program-evaluation-for-data-science/practice-interrupted-time-series?u=76281980&t=93)** rather than the prevalence itself. You can do this analysis for all countries by region, or by selecting only the subset of countries identified as IDA countries, which represent the lowest income countries at the time. You should see that the prevalence was increasing sharply in the early 1990s, and then the rate of increase slowed down. When do you think the prevalence began slowing down? A way to think of this visually is to imagine that the curve is made up of the two straight lines. If so, around what year would those two straight lines intersect? After graphing the data, develop models of the HIV prevalence that include at least one interruption dummy. Which interruption fits the data the best, using a goodness of fit criterion? What is the direction of the interruption? Does this optimal year look similar to your visual inspection of when the prevalence curves shape changed? As with the other exercises, I encourage you to use whatever software you prefer. When I did the analysis, I found that the interruption happened around 1997. Did you find a different result?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (1)
> **Env Vars:** hiv (8), ida (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), imagine (1)
> **Speakers:** - this (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps in program evaluation](https://www.linkedin.com/learning/program-evaluation-for-data-science/next-steps-in-program-evaluation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/program-evaluation-for-data-science/next-steps-in-program-evaluation?u=76281980&t=1)** - This course is explored going beyond A/B testing so that you're well prepared to evaluate programs that are not amenable to randomization. This involves understanding when these methods can be implemented, as well as some of the ways that randomization can fail. From this foundation, we layered on top introductions to other methods that can be used, such as matching for retrospective studies where the program has already been implemented and the data already exists. We presented regression discontinuity for situations where the program was implemented using a threshold instead of randomization, as well as interrupted time series and difference in difference methods. Each evaluation approach has situations where it is most suitable and many situations where you're using the wrong tool. As a data scientist, you're expected to not only build models, but to implement them and evaluate them fairly. A model or program that you've developed and implemented could be saving your company millions or adding years of healthy lives to patients, but no one will know if you don't perform evaluations well. Your next step in going beyond A/B testing is to comprehensively look at the models and programs that are being implemented at your company. Which ones are most suitable for which evaluation method? Are the best practices being followed? Be a leader in your organization's approach to evaluating [Data Science](../../Topics/Data%20Science.md)
>
> **[1:33](https://www.linkedin.com/learning/program-evaluation-for-data-science/next-steps-in-program-evaluation?u=76281980&t=93)** by leading the charge of going beyond A/B testing. Thank you very much for joining this course. I wish you the best of success in applying these ideas and skills in your work. Lastly, if you have any questions or want to discuss these concepts more and how you can apply them, please don't hesitate to leave a question in this course's Q&A section, and connect with me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). Thank you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Analogies:** such as (1)
> **Speakers:** - this (1)


## Instructor

- [Howard Friedman](../../Instructors/Data%20Science/Howard%20Friedman.md)

## Resources

- Exercise files available

## Skills Covered

- ROI Strategies
- Data Science

## Path Context

### In [Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Analysis%20and%20Interpretation.md)
← [Power BI Data Methods](Power%20BI%20Data%20Methods.md) | **9 of 9**

## Appears In

- [Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Analysis%20and%20Interpretation.md)

## Related Courses

_Courses sharing skills:_

- [Advanced SQL for Data Science- Time Series](Advanced%20SQL%20for%20Data%20Science-%20Time%20Series.md) — Data Science
- [Lessons from Data Scientists](Lessons%20from%20Data%20Scientists.md) — Data Science
- [Big Data in the Age of AI](Big%20Data%20in%20the%20Age%20of%20AI.md) — Data Science
- [A Day In The Life Of A Data Scientist](A%20Day%20In%20The%20Life%20Of%20A%20Data%20Scientist.md) — Data Science
- [Data Science for Java Developers](Data%20Science%20for%20Java%20Developers.md) — Data Science

---

[↑ Back to top](#)