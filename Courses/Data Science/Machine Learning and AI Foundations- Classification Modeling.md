---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: machine-learning-and-ai-foundations-classification-modeling
url: "https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling"
duration_minutes: 125
duration: 2h 5m
level: Intermediate
updated: 1/31/2024
learners: 6739
skills:
  - Machine Learning
  - Data Classification
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEifgzbCWI6eQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706120134449?e=2147483647&amp;v=beta&amp;t=vOw7WYdE3evt6MW_G87ovtjuEjtnixeIXChl4NblvpM"
linkedin_topic: Data Science
learning_paths:
  - '[[Develop Your SPSS Skills]]'
  - '[[Data Science Professional Certificate by KNIME]]'
prev_courses:
  - '[[Machine Learning & AI Foundations- Linear Regression]]'
  - '[[Introduction To Artificial Intelligence]]'
next_courses:
  - '[[Machine Learning and AI Foundations- Decision Trees with SPSS]]'
  - '[[Generative AI- Introduction to Large Language Models]]'
path_nav: '[{"path":"Develop Your SPSS Skills","position":3,"total":6,"prev":"Machine Learning & AI Foundations- Linear Regression","next":"Machine Learning and AI Foundations- Decision Trees with SPSS"},{"path":"Data Science Professional Certificate by KNIME","position":4,"total":6,"prev":"Introduction To Artificial Intelligence","next":"Generative AI- Introduction to Large Language Models"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/machine-learning
  - skill/data-classification
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Machine%20Learning%20and%20AI%20Foundations-%20Classification%20Modeling.md)

![Machine Learning and AI Foundations: Classification Modeling](https://media.licdn.com/dms/image/v2/D4D0DAQEifgzbCWI6eQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706120134449?e=2147483647&amp;v=beta&amp;t=vOw7WYdE3evt6MW_G87ovtjuEjtnixeIXChl4NblvpM)

# Machine Learning and AI Foundations: Classification Modeling

> One type of problem absolutely dominates machine learning and artificial intelligence: classification. Binary classification, the predominant method, sorts data into one of two categories: purchase or not, fraud or not, ill or not, etc. Machine learning and AI-based solutions need accurate, well-chosen algorithms in order to perform classification correctly. This course explains why predictive ana

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling) | 2h 5m | Intermediate | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Classification problems in machine learning
  - What you should know
  - Defining terms
- [**1. The Big Picture: Defining Your Classification Strategy**](#1-the-big-picture-defining-your-classification-strategy) (6 videos)
  - The importance of binary classification
  - Binary vs. multinomial
  - So-called “black box” techniques
  - One task, many algorithms
  - Statistics vs. machine learning
  - Model assessment vs. business evaluation
- [**2. How Do I Choose a "Winner"?**](#2-how-do-i-choose-a-winner) (4 videos)
  - Training and test partitions
  - Lift Charts
  - Gains tables
  - Confusion matrix
- [**3. Algorithms on Parade**](#3-algorithms-on-parade) (14 videos)
  - Overview
  - Discriminant with three categories
  - Discriminant with two categories
  - Stepwise discriminant
  - Logistic regression
  - Stepwise logistic regression
  - Decision Trees
  - KNN
  - Linear SVM
  - Neural nets
  - Bayesian networks
  - Heterogenous ensembles
  - Bagging and random forest
  - Boosting and XGBoost
- [**4. Common Modeling Challenges**](#4-common-modeling-challenges) (6 videos)
  - Imbalanced target categories
  - Interactions
  - Missing data
  - Bias-variance trade-off and overfitting
  - Data reduction
  - AutoML
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Classification problems in machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/classification-problems-in-machine-learning-20201180?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/classification-problems-in-machine-learning-20201180?u=76281980&t=0)** - [Keith] Why classification?
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/classification-problems-in-machine-learning-20201180?u=76281980&t=2)** Nothing is more fundamental to what we do in predictive analytics than binary classification.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/classification-problems-in-machine-learning-20201180?u=76281980&t=8)** Will a customer make a purchase or not?
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/classification-problems-in-machine-learning-20201180?u=76281980&t=11)** Was the claim fraudulent or not?
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/classification-problems-in-machine-learning-20201180?u=76281980&t=14)** Does a patient have a particular illness or not?
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/classification-problems-in-machine-learning-20201180?u=76281980&t=17)** In this course, we'll go on a journey together to explore a dozen different algorithmic approaches for building these models.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/classification-problems-in-machine-learning-20201180?u=76281980&t=25)** I'm Keith McCormick, and in more than 20 years of building machine learning models, I've been involved in many kinds of projects.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/classification-problems-in-machine-learning-20201180?u=76281980&t=32)** We'll have a lot to cover, so let's dive in.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [keith] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=1)** - Let's talk about some things you should know before watching this course.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=4)** One of the things I'm really excited about is that this course has been designed as a gateway course.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=11)** A gateway to all kinds of machine learning topics and data science more broadly.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=17)** Specifically we're going to be building predictive models.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=21)** Also its software agnostic so I wanna welcome all of you to the course whether or not you happen to use a commercial package like SAS or SPSS or a data science language like R or Python or one of the numerous open source options like Weka or RapidMiner or Knime or others.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=42)** Everyone can benefit from this course.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=45)** Also I want to mention that if you really want a big-picture view and pull the lens back even more, my Essential Elements of Predictive Analytics and Data Mining is that kind of course.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=58)** However you absolutely could watch this course followed by that one or start with Essential Elements and watch this one.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=65)** Neither of them have prerequisites so they're an interesting pair but you can watch them in either order.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=73)** Finally I will be mentioning statistical concepts.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=76)** Terms like statistical significance.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=79)** Also a couple of the techniques do draw upon regression.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=83)** However you don't have to take a deep dive into regression to understand what I'm discussing in this course.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=90)** You may be tempted to explore statistics and regression in more detail perhaps after taking this course.

> [!info]- Semantic Content
>
> **Env Vars:** sas (1), spss (1)
> **CLI Commands:** python (1)
> **Code Keywords:** let (1)
> **Analogies:** picture (1)
> **Speakers:** - let (1)

#### Defining terms
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=1)** - [Narrator] There's a couple of terms that come up so frequently in the course I want to take a moment to define them.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=6)** The first thing I want to talk about is level of measurement.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=9)** You won't hear me use that exact phrase very often, but what it refers to is types of variables and the way it's typically described is that there's three.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=20)** The first are nominal variables.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=22)** These are separate and distinct categories that are not meaningfully ranked.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=27)** Ordinal variables are separate and distinct categories that are meaningfully ranked, like freshman, sophomore, junior, senior, or that kind of thing.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=35)** Low, medium, high risk.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=37)** For the most part, we're gonna be talking about nominal and ordinal collectively as categorical variables.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=45)** Then there's scale variables.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=46)** There's a lot of similar terms for scale.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=52)** Sometimes folks call them continuous, sometimes folks call them interval.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=56)** There's a slightly different term, ratio, that sometimes folks use.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=61)** As far as we're concerned for this course, all of those are interchangeable.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=65)** Scale, interval, continuous, ratio for us are basically the same.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=71)** Finally, although the gentlemen Steven's who originally came up with this taxonomy didn't use this term, there's one that's gonna be really important for us.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=81)** The notion of a binary.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=83)** You might think of binaries by another name, a bullion.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=87)** But it's really just a categorical variable with exactly two categories.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=93)** True, false, yes, no, on, off.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=97)** These are all binaries.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=99)** Okay, in addition to level of measurement, let's also talk about binary classification.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=105)** So there it is.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=106)** There's that term again.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=107)** Binary classification techniques, which is really what this entire course is about, is when you're trying to build a predictive model and what you're trying to predict has only two categories.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=121)** So, classic examples, churn, not churn.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=125)** Respond to an email campaign, not respond to an email campaign.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=131)** A machine in predictive maintenance, let's say, fails or doesn't fail.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=135)** So binary classification is really at the heart of this course.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=140)** Finally, when binary classification models are built, they make predictions, but they make predictions in a particular form.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=149)** For instance, we're gonna be seeing the Titanic data set and folks on the ship, of course, either survived or some unfortunately died.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=157)** So a propensity score would essentially be a percentage chance, or propensity, for surviving.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=165)** So if you structure the problem in that way, scores near 1.0 would be a high propensity to survive and scores near 0 would be a low propensity to survive.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=176)** That's the way virtually all binary classification models are set up, using propensity scores.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (2)
> **CLI Commands:** make (2)
> **Versions:** 1.0 (1)
> **Tools:** notion (1)
> **Definitions:** refers to (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)


### 1. The Big Picture: Defining Your Classification Strategy

> [↑ Back to Table of Contents](#table-of-contents)

#### The importance of binary classification
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=1)** - [Instructor] Let's start by dispelling two myths.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=3)** For many, there's an implicit assumption that there's one best algorithmic approach for each use case, and if you simply define the problem carefully, you'll know which algorithm to use.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=17)** As we'll see, there's a one-to-many relationship between problems and potential solutions.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=24)** Just in this short discussion of classification techniques, we'll explore a dozen different approaches to a single-use case, binary classification.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=34)** Another myth is that the goal of predictive analytics projects are to produce a single predictive model.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=42)** Real-world projects always have multiple models performing different functions and often sending information back and forth to each other, working together as a decision management system.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=53)** In virtually every instance, at least one of these models is a binary classifier.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=60)** In fact, in my 20 years of doing this kind of work, it's always been present on the projects I've been a part of.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=66)** Why?
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=67)** Well, the ultimate goal of a predictive analytics project is to drive decisions, and the easiest way to do that is to have at least one of the models tell you when to take action and when not to.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=80)** These two themes and many others are explored in my course Essential Elements of Predictive Analytics and Data Mining.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=87)** So for now, we'll just accept the following premise.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=91)** Binary classifiers play an important role in virtually every project, so understanding them constitutes a critical part in anyone's professional development in predictive analytics, data science, and data mining.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Binary vs. multinomial
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=1)** - [Instructor] I always caution folks against trying to predict into more than two categories.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=7)** It would be an oversimplification to suggest that you should never do it, but it is an inherently advanced modeling challenge.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=15)** First, one's a priori estimate of accuracy is lower "A priori" is a Latin phrase which means, "Without the benefit of experience."
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=26)** The phrase is frequently used in statistics.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=29)** If half of our target cases are true, and the other half are false, our chances of predicting that correctly without a model is 50%.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=38)** If we're predicting into three, or four, or five categories our chances of guessing correctly without a model is steadily going down.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=48)** If our chance is only 20%, how good a job can we expect to do?
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=53)** Even if we double our chances which is pretty impressive, that brings us to 40% right and 60% wrong.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=62)** Predicting into more than a few is probably a fool's errand.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=66)** Perhaps you could get a way with about a eight in rare circumstances, but a multiple category in the target just won't be good enough to solve whatever business challenge inspired the model in the first place.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=78)** One common reason that I've done it over the years is predicting cluster membership after performing cluster analysis.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=87)** This is a interesting exception that I explore in my cluster analysis course which can be found in the library.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=94)** If that reason wasn't enough, there's another.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=98)** The model gets considerably more complex, sometimes dramatically so.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=105)** For instance, as we'll see in a later example, discriminant analysis with two categories requires just one linear formula.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=113)** Three categories however, requires two separate formulas with all of the inputs; double the complexity, and making the interpretation much more difficult.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=124)** Four categories require three different formulas tripling the complexity.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=130)** So what do you do if it seems that three, or more categories best addresses the business problem?
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=137)** For instance, churn; very frequently when folks are working in churn, they divide their customers; their cases into three categories: loyal customers, voluntary churns, meaning they left your company in favor of someone else, or involuntary churns; usually because they didn't pay the bill.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=159)** That's three categories, and it seems like the richest solution.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=163)** However, you can think of this as a binary.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=168)** You could divide into these two: loyal, and both kinds of churn.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=175)** Or what I typically prefer: loyal, voluntary turn, and simply remove the involuntary churns, because you probably have a different process in place for them; namely a collections process.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=190)** Thew bottom line is: And if you're new to predictive analytics, recognize you are taking on a challenge that's difficult even for the experts.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=204)** So go very gingerly into any situation where you think need you need more than two categories on the target variable.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=211)** For this reason, with only one exception, we will be performing binary classification in this course.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** require (1), else, (1)
> **Analogies:** for instance (2)
> **Best Practices:** you should never (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### So-called “black box” techniques
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=1)** - [Instructor] The modeling approaches that we'll be discussing very greatly and how transparent they are during validation and interpretation.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=10)** This raises the issue of the so-called black box techniques.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=17)** A famous example is artificial neural networks.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=22)** The very same complexities that often allow for very accurate models can prevent you from sharing a story about the model.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=31)** Sometimes something as basic as a key driver analysis.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=36)** Just simply a list of predictors in order of importance can seem elusive.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=41)** Another easy to imagine example is an ensemble of trees.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=46)** A single decision tree is among the most transparent, but a so-called random forest is really a collection of trees.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=55)** Essentially an average of 100 or even 1,000 models which then becomes difficult or impossible to interpret.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=64)** The truth is that virtually all of these techniques are in a continuum from transparent to opaque.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=72)** Perhaps the most transparent that we will see in this course is logistic regression, where all of the inputs can be ranked from most to least important.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=84)** In addition to this advantage, each input has its own test of statistical significance, and each input can be measured in terms of the magnitude of its effect on the outcome.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=98)** So why is this important?
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=102)** It's critical to determine from the manager or internal client that's requesting the model whether we're emphasizing explanation or prediction.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=114)** Galit Shmueli who's an academic has written effectively on this dichotomy, and I urge you to seek out her discussion of this.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=122)** It can get a bit technical and a bit academic, but the issue is an important one, and those two goals can conflict with each other to a degree.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=132)** For instance, if explanation is paramount, then black box techniques might be off our list completely.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=142)** They simply might not be an option to us.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=146)** This is one of the reasons that some of the older techniques, statistical techniques for instance, some may even consider them old school, stick around.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=158)** They do because they're often the most transparent.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=162)** They persist because they fit this need, and sometimes frankly they turn out to be the best option.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=169)** So we're gonna be exploring both machine learning techniques and techniques that come from the statistical tradition, and we're gonna be learning that we can't always know in advance which one is gonna be the best fit for our project until we try.

> [!info]- Semantic Content
>
> **Analogies:** for instance (2), imagine (1)
> **Code Keywords:** this. (1), try. (1)
> **Definitions:** is an  (2)
> **Speakers:** - [instructor] (1)

#### One task, many algorithms
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=1)** - [Instructor] In mathematics and computer science, an algorithm is an unambiguous specification of how to solve a class of problems.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=10)** In this course, the class of problems is binary classification, and there's a remarkable diversity of approaches.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=20)** I've always been a fan of Tom Khabaza's 9 Laws of Data Mining, a topic that I discuss at length in my essential elements course.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=29)** The fourth law, no free lunch for the data miner, states the following.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=35)** "The right model for a given application can only be discovered by experiment."
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=42)** So when playing this game, trial and error is going to be our method.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=47)** It's at the core of doing binary classification well.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=52)** This is really the premise of the course.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=56)** Competency at binary classification equals, competency at all of the multiple algorithms that are capable of binary classification.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=68)** And in addition, you have to become competent at using these multiple approaches, both individually and together.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=79)** In a book called The Master Algorithm, Pedro Demingos spins out this argument in book length.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=87)** Now he divides machine learning into a handful of theoretical traditions, explains their histories, their strengths, and their potential weaknesses.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=98)** It's really almost a philosophy of machine learning.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=103)** He even shows how some of the theoreticians, don't approve very much of their colleagues competing approaches, and that they can be critical of each other, not unlike the history of philosophy.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=115)** So it's a very theoretical work, but it's an interesting exploration of some of the same ideas.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=121)** In fact, in the final chapter, he openly imagines how one day there might be a single algorithm that combines the best of all the traditions, and then we wouldn't have to try all of them using this trial and error approach any more.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=138)** But alas, that day has not yet come.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=140)** So in this course we'll focus on these different algorithms, and we'll discuss them conceptually, but with a focus on how to put them to practical use.

> [!info]- Semantic Content
>
> **Documentation:** specification (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Statistics vs. machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=1)** - [Instructor] So let's talk some more about statistical techniques and contrast them with machine learning techniques.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=7)** Some folks, especially if they are coming from computer science backgrounds, and/or they might be new to the field, wonder if it makes sense to use these older techniques that come from the statistical tradition.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=21)** It's not an irrational reaction.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=24)** These techniques are decades old and why would we have invented newer techniques if the old techniques were working?
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=33)** Also, a lot of them have complex rules, and seem hard to learn.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=39)** There are several reasons why you should keep the classification algorithms that come from the statistical tradition on the table.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=47)** First, predictive analytic software vendors consistently keep them in their work benches.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=54)** And the data scientists that use them continue to use these techniques.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=59)** So our colleagues are voting with their feet, and there must be a reason.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=63)** In short, these algorithms continue to work.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=67)** Second, as we've seen, they tend to be among the more transparent of the algorithms and that can be important, depending on the project.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=78)** Also, perhaps ironically, they're remarkably scalable.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=83)** The techniques that come from computer science tend to be brute force.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=88)** And they're impressive accuracy also comes from this fact.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=92)** Statistical techniques are more algebraic in nature.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=96)** Solving equations, they can run very fast on huge data sets.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=101)** It would be a mistake to walk away from them.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=104)** Finally, it's not uncommon to mix and match machine learning and statistical techniques in ensembles.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=111)** And clearly, ensembles are a machine learning technique.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=116)** So even if statistics can seem difficult at times, if you really want to be a pro at binary classification you have to learn both, statistical and machine learning techniques.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=127)** And that means learning some statistics.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=130)** There are some great courses on statistics in the library.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=133)** Find one that features your software tool of choice.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=137)** Whether it be R or Python or a commercial package or maybe one of the open source predictive analytics workbenches.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=145)** Although the topic is regression and not specifically classification, my regression course in the library covers some of the necessary foundation material that you'll need.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (2), let (1), finally, (1)
> **CLI Commands:** find (1), python (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Model assessment vs. business evaluation
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980&t=1)** - [Instructor] There are two different aspects to evaluating the performance of your models, and they're both important.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980&t=7)** So I wanna reference the cross-industry standard process for data mining.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980&t=12)** It's a document that was written about 20 years ago, and it's a powerful way to help you organize your thinking and organize your work when doing predictive analytics projects.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980&t=21)** If you wanna read it, the most reliable way is to simply go down to the references section of the CRISP-DM Wikipedia page and you can find the document.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980&t=30)** In particular, I wanna reference the following diagram inside the document.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980&t=37)** Model assessment is ranking your models on technical criteria.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980&t=43)** Criteria like lift and the performance in a confusion matrix.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980&t=49)** And we're gonna be covering multiple methods of model assessment in this course.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980&t=55)** Something that we won't be covering in this course is evaluation.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980&t=61)** Evaluation, really a kind of business evaluation, is looking at that model performance through the lens of things like return on investment, key performance indicators, and management criteria.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980&t=75)** So we won't be discussing business evaluation here.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980&t=79)** I do discuss it in my Essential Elements course.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980&t=83)** But in this course we're gonna be sticking to technical criteria model assessment.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Env Vars:** crisp (1)
> **Speakers:** - [instructor] (1)


### 2. How Do I Choose a "Winner"?

> [↑ Back to Table of Contents](#table-of-contents)

#### Training and test partitions
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=1)** - [Narrator] Okay, now we're gonna talk about a critical concept and you're gonna want to master how to do this in your software of choice.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=9)** But at a high level, the basics are very straight forward.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=13)** What you're gonna do is take the historical data, on which you're gonna build the model, and you must divide that data, or partition it, we say, into training data and testing data.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=26)** What we all learn to do, initially, when we first get accustomed to this, is that we do a 50% train and a 50% test.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=35)** These partitions are chosen at random.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=38)** What you'll notice, however, when you're watching others perform this task, is that sometimes the numbers won't be 50/50.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=46)** The general rule is straight forward, and it is this.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=49)** When your sample size starts to get small, you increase the percentage on the train and reduce the percentage on the test.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=57)** Because it still has to add up to 100%, so you'll often see 70/30 or 80/20 and these are not unusual choices for training and testing partitions.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=67)** Okay, now, some advice that you'll occasionally get is that you should have a third one.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=73)** And when this advice is given, normally it's recommended that you have 50% train, 25% test, and this new one, 25% validation.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=82)** So, what's going on here?
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=83)** Well during the modeling phase, you're developing the models on the training data.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=88)** That is the only data that gets exposed to the modeling algorithms.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=93)** You are then, iteratively checking the modeling performance on the testing data using those technical metrics, like overall accuracy, lift, and so on, there are several.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=107)** Then what happens, is after trying many attempts, a lot of folks encourage you as a final, double check, to check that accuracy once more against the validation data that's been set aside all this time.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=123)** In order to help you understand how all these moving parts work together, I usually suggest a slightly different approach.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=132)** That is, you can take your training data, build the models, check performance using technical measures against that test data, and then wait until the evaluation phase.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=147)** Data will have accumulated during the course of the project, and then you can make a double check for technical measures like accuracy, but also check things like return on investment and your KPI's, as we've learned, you should be doing during the evaluation phase.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=163)** As long as the project goes on for more than a few weeks or more than a couple of months, you'll have plenty of that recent data in order to perform this double check.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=174)** For the rest of the course, we're gonna be focused only on training data and testing data.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=180)** But we're gonna be referring to it through out.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), this. (1)
> **Best Practices:** general rule (1), recommended (1)
> **CLI Commands:** make (1)
> **Env Vars:** kpi (1)
> **Speakers:** - [narrator] (1)

#### Lift Charts
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=1)** - [Instructor] A very popular way to visualize modeling performance is a lift chart.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=7)** In fact, the whole concept of lift is a popular way to assess models, and there's all kinds of variations on this theme.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=14)** There's gains charts.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=16)** You can plot return on investment.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=18)** But we're gonna focus on lift.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=20)** So let's talk about how this is interpreted.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=23)** This plot is showing relative risk for diabetes.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=30)** And if we look at the left-hand side, in particular, where I'm indicating, we see that around the 15th percentile, there's a group of folks whose diabetes risk is almost eight times average.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=46)** So let's say, for the sake of argument, that we were gonna send out some outpatient care.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=51)** And these folks were gonna go to individuals' homes, and we wanted to allocate that expensive resource as efficiently as possible.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=60)** If we sent it out to 15% of patients, that whole group of patients would represent elevated risk.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=68)** If we had a little bit more funding and we could reach out to help more folks, we could consider sending folks out to everybody in the 20th percentile.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=80)** Now, the cumulative lift at that point would be substantially lower, but it would still be more than four times average.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=90)** Now, as you can see on the far right, eventually the lines meet, indicating that if we sent the outpatient care out to everyone, that group would have a cumulative lift of one, indicating that the whole group, collectively, has average risk, which, of course, makes sense.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Gains tables
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=1)** - [Instructor] Okay, let's talk about the concept of a gains table, another way of assessing if your model has been doing a good job.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=10)** Now, all of you should be able to generate this gains table sometimes, software will make it really easy for you as a feature, as part of a software.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=18)** But all you really need is the probabilities and you can do deciles or you can do quintiles if you want.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=26)** I have done deciles here.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=28)** And we're looking at the different probabilities within those deciles.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=32)** So first let me note that we've got a total sample size of 714.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=38)** I've used the technique that throws out missing values.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=42)** I have just a handful that's been discarded and I have all of my data.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=47)** Not just train or test but all of it.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=50)** You may wanna generate a separate gains table for the train data as well as the test data.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=57)** But this one has it all.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=59)** And now, take a look.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=60)** I've got an overall probability of 0.41, if I round up.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=66)** And this is a survival rate because this is the titanic data set.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=70)** So I have an overall survival among these 714 cases of 41%.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=74)** But take a look.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=76)** In the top probability, I have a survival rate of just five and a half percent.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=82)** In contrast at the opposite end of my gains table, I have a survival rate of 93%.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=88)** There's a dramatic difference, folks, between 5% and 93%.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=92)** And this indicates that my model is working.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=95)** If I'm trying to find the survivors, I know where to look.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=98)** If I wanna find the folks that have a low probability of survival, I know where to find them.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=104)** One final comment, if I was doing something like campaign response and I was doing marketing and not the titanic data set, I might add another column, where I look at things like prophet per mailing, or total campaign response and so on.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=121)** I might add some dollar amount to a gains table like this.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=123)** So it's a very effective way of assessing your model.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Code Keywords:** let (2), this. (1)
> **Versions:** 0.41 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Confusion matrix
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=1)** - [Instructor] Okay, let's talk about he confusion matrix.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=4)** Now folks will joke about the name but, the whole idea behind the name confusion matrix is where the model is making errors.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=13)** And it's one of the most fundamental techniques we have for assessing our model performance.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=20)** So let's take a look at the first thing you should probably look at, which is overall performance on the train versus overall performance on the test.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=31)** Here, overall performance on the train is 79.8%.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=36)** Overall performance on the test data is 74.2.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=42)** That's a gap of a bit more than 5% which is just a hair outside the comfort zone.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=49)** Meaning that, we fear that the model isn't all that stable.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=54)** It's performance on unseen data just isn't as strong as the performance on the data that we fed to the modeling algorithm.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=63)** It's a close call in this case but it's at that borderline and it's kind of on the wrong side of the border.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=67)** We want it to be within 5%.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=70)** So let's now talk about the wealth of data that's hiding in here but focusing only on the test data.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=78)** That's the portion of the data that we really care about for modeling assessment.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=81)** And we see in terms of figuring out who died, we're doing great.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=87)** 97 out of 98 times we're getting that right.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=92)** The model said they would die, and indeed, they did.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=96)** So the model performance there is very good.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=99)** Here, not as well.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=101)** Here, we're getting 35 right but 45 wrong.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=107)** So, overall performance here is not nearly as good.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=110)** And this is not uncommon in a model.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=113)** And we'll be seeing things that you can do when you get this kind of performance in your model.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=119)** By way of preview, it often indicates the data is not imbalanced.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=125)** Meaning that we have more deaths than survivors and that's gonna, perhaps, cause us to perform better in one group than in the other.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=134)** Let's look at the remaining information.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=135)** Now we're really gonna zero in on what the model is getting wrong.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=140)** So as we've seen only one mistake out of 98 here.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=145)** This is the one person, where the model predicted survival, but in fact, they died.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=151)** You see predicted is a one, but observed is a zero.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=158)** And then finally, we've seen his number once before, here's the group where the model said that they would not survive, that they would die, but in fact they did.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=169)** Now, you can get much deeper into this than we're getting into it in this video.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=174)** You can get into the language of false positives and false negatives.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=177)** There's even fancier language like specificity and sensitivity.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=182)** We won't use that terminology in this course.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=185)** We're gonna be focused on stability, comparing those two overall accuracies and then the other numbers that we just reviewed.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=194)** And we're gonna be using this information when we look at all the algorithms in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (1)
> **Versions:** 79.8 (1), 74.2 (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 3. Algorithms on Parade

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=1)** - [Instructor] Okay, we're about to discuss about a dozen different algorithms for binary classification.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=8)** Now, in the section after our discussion of the algorithms, we're gonna talk about some common problems.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=14)** I want you to be aware of what these problems are so that you can be listening for these issues as you learn about the algorithms.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=22)** In fact, you may want to watch the algorithms section now, then see the section on the common problems, and then return and listen to the lectures on the algorithms a second time.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=36)** So here's some of the things that we'll be seeing in the next section that you should be listening for in this section.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=43)** I won't always make explicit reference to them, but the algorithms will overlap with these issues.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=51)** One is whether or not the variables contribute to the model individually or if they also interact.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=59)** Another will be how it handles missing data.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=62)** We frequently have missing data, and these algorithms will handle that all in a different way.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=68)** Also, overfitting, we want our models to be just complex enough.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=74)** Not complex enough, and we have poor accuracy.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=78)** Too complex, and then it doesn't fit new data well.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=82)** Finally, feature selection, how does it go about determining which variables to use and how important those variables will be?
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=92)** Now again, I won't always make explicit reference to each of these issues when we discuss each algorithm.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=101)** Focus on what the algorithms are doing conceptually, but here are some specific things to attend to.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=109)** Does it use all or just some of the input variables?
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=114)** Does it use all or just some of the case data?
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=119)** When you're listening to me describe the algorithms, reflect on situations where they might perform well and situations where they might perform poorly.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** finally, (1)
> **Cross-References:** in the next (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Discriminant with three categories
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=1)** - [Instructor] Okay, for our first algorithm we're going to talk about linear discriminant analysis.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=6)** Now as the name implies, we're trying to talk about the equation of a line, but here we're focused on trying to separate two groups.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=16)** We want one group at one end of the line, and another group at the other end of the line.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=21)** Now while we're discussing this, we're gonna revisit a topic that we talked about briefly earlier.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=27)** And that is that when we're trying to predict into three categories, it can complicate things more than we anticipate.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=34)** So we'll start with two, but during this video we're also gonna discuss the challenges of trying to predict into three.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=43)** First, let's picture what we're trying to do.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=45)** We're looking at a data set that's actually a famous one that's got the dimensions of petal width and petal length for a group of flowers, and we can imagine here that we could easily add a line that trends through these data points.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=61)** Let's take a moment though to talk just a little bit about the history of this famous data set.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=66)** This data set was used by Sir Ronald Fisher way back in 1936 to explain our topic, linear discriminant analysis.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=76)** I mention it in part, one, because it's widely available.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=79)** It's used for a lot of demonstrations, and you'll sometimes see it in demonstrations of unsupervised learning or cluster analysis.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=88)** But this data set is really about discriminant analysis, which of course is our topic, supervised learning into two or more categories.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=98)** So let's return to the data set and find out how this works.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=101)** Here we are, we fit a regression line passing through these points, so imagine now that we're trying to predict petal length using petal width, a classic linear regression problem.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=113)** We're doing this to underscore how similar linear discriminant analysis is to regression.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=119)** So if you really want to be good at this technique, you've got to be strong in your regression fundamentals, not just the notion of a line, but also some of the mathematical assumptions, like normality, and topics like multicollinearity.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=134)** If regression is a topic that you're a little bit rusty on or maybe it's new to you, there are a lot of courses in the library on this topic including my own.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=143)** So let's talk briefly about this formula because this linear regression formula that you see is gonna be almost identical to the formula we're gonna use in linear discriminant analysis.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=154)** So the technique is similar, but the goals are different.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=157)** So we can see here that the equation is Y equals one and a little bit more, plus two times X.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=163)** The general form is Y equals the constant or Y-intercept.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=168)** Sometimes you'll see beta zero, but here we're gonna call it the constant, plus beta one times X one.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=174)** And X one is gonna be our variables, petal width, petal length, and so on.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=180)** So take a look.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=181)** This is what we're trying to do in discriminant analysis now.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=184)** We now have a three-dimensional view of our data, and we can see two clouds of points.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=190)** The red group represents one species of flower, and the blue group represents another species of flower.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=197)** And how can we come up with a predictive model that will consistently tell us when we score new data, which species a new case is?
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=206)** Well, we can find a line, that not passes through the points but rather separates the points.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=213)** Then we have to identify the centroids, and that line is gonna be our function one.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=220)** Now with only two categories, all we need is one function.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=225)** So what about that other topic?
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=228)** Why is it so much more complicated to have three categories?
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=231)** Let's investigate.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=233)** If we've got three categories, we have three centroids.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=237)** That in and of itself is no big deal, but we no longer have a way with just one function to separate the three groups because as you can see, they're not all in a row.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=247)** And frankly, they'll never be, especially in multi-dimensional space.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=251)** If we've got three groups, we're gonna have to fit two functions.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=254)** Here's what it looks like in the actual resulting formula.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=259)** Instead of one function, we now have two.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=262)** Both functions have a constant, or a Y-intercept, and each function has a set of beta coefficients, so beta one is associated with petal width.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=272)** That's the 2.8.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=273)** We also have a beta two, and a beta three, and so on.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=276)** So it's just the same formula, just more of it.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=279)** And then also notice we have to have a whole second formula to represent a second function.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=286)** We didn't have a second function in that 3D scatter plot, but for three categories, we would need one.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=292)** Finally, there's another complication we have to talk about.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=296)** We've got our three centroids, that's not the problem.
>
> **[5:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=301)** The problem is to think again about those two functions.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=306)** For any given variable, let's say sepal width.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=311)** On function one, it's got a negative beta coefficient.
>
> **[5:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=315)** On function two, it has a positive beta coefficient.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=319)** So it makes it hard to know in this multi-dimensional space.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=323)** We're going up one line, and we're going down another, and we've got three centroids, and folks, we've only got three or four dimensions here.
>
> **[5:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=331)** What if we had 10, or 15, or 20 input variables?
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=335)** So it gets a lot more complicated than it seems at first.
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=338)** So watch out for those categorical targets that have more than two categories.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), let (6), this, (1), finally, (1)
> **Analogies:** imagine (2), picture (1)
> **CLI Commands:** find (2)
> **Versions:** 2.8 (1)
> **Cross-References:** we talked about (1)
> **Tools:** notion (1)
> **Definitions:** is a  (1)
> **Warnings:** watch out (1)

#### Discriminant with two categories
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=1)** - [Instructor] Okay, let's discuss a couple of technical issues to attend to while you're watching me demonstrate Discriminant Analysis on the Titanic data set.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=9)** First, typcically, Discriminant Analysis will operate under listwise deletion, which means if anything's missing, the entire row is dropped.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=19)** You don't know their age, you're gonna drop the case.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=21)** You don't know their fare, that row is dropped.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=24)** Some implementations will impute, meaning that they're gonna replace the missing data with some estimate.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=33)** You don't know their age?
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=34)** You can replace with an average of age.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=37)** There are also fancier versions of imputation.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=41)** Next, all inputs are used typically in linear Discriminant Analysis.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=47)** However, there is a technique, which we're gonna see, called Stepwise Discriminant Analysis, where it will choose the variables for you.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=56)** Finally, and this is important and might even be surprising, remember that we're talking about linear Discriminant Analysis, this is for scale variables only.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=66)** Your categorical variables will have to be transformed, as we're about to see.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=71)** So the variables that I've chosen out of the Titanic data set are age, passenger class, embarked, and gender.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=79)** Only age is a scale variable.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=82)** All of the other three have to be transformed.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=85)** The transformation is called Dummy Coding.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=88)** It's a kind of contrast coding.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=90)** If it's a new topic to you, it's usually discussed in more depth in discussions of linear regression.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=96)** My own course in the library talks about it in some depth, but I'm about to tell you all you need for the current demonstration.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=102)** We take a categorical variable like passenger class.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=105)** First class, second class, third class.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=108)** The first class passengers get a true on passenger class equals one.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=113)** They get a false otherwise.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=115)** The second class passengers get a true on passenger class two, and get a false otherwise.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=122)** And those third class passengers, they're simply false on both of those two variables.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=127)** So we don't need a third variable for them.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=130)** And embarked and gender works in very much the same way.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=133)** Let's take a look at the performance.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=135)** We get a performance of about 79% accurate on the training data, not too bad.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=141)** But we get a substantial drop between the training data and the test data.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=145)** We really want the distance between those two numbers to be no more than about 5%.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=150)** And here it's a bit higher than that.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=153)** So we really would like those numbers to be a bit better.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=156)** How can we improve that?
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=158)** Mostly it's persistence, to be honest, but we wanna get the good variables in and the weaker variables out.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=164)** So this model's okay, but we're not quite achieving that criterion of closer performance on train and test.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=174)** Now, let's talk about a fairly big topic, but an important one.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=178)** When we were looking at Discriminant Analysis conceptually, we were talking about functions and centroids and so on.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=185)** There's a special set of numbers that you can request in any implementation of Discriminant Analysis that's there to help you deploy the scores at the end.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=196)** Remember folks, why we're trying to do this.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=198)** We're trying to take new data, as few as one passenger at a time, and score them on these calculations, to find out if they're more likely to survive, or more likely to die.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=209)** So how does that work in this case?
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=212)** What we're gonna do, is we're gonna take the constant for the survive group, which is negative 4.781, and then we're gonna add beta one x one, beta two x two, and so on, as we would in one year regression.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=226)** So for age, the beta coefficient is 0.123.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=231)** And then we're gonna start to add the other variables as well.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=235)** So, if they belong to the first class passenger group, they're gonna add the coefficient for that group, because they're true for that group, 1.449.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=245)** If they're second class, they're gonna get a different number.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=248)** The number that you can see on the screen, 2.193.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=252)** And if they're third class, hmm, they don't have a number, so what do we do?
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=256)** We actually add zero for them.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=258)** And we continue this process down the list.
>
> **[4:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=261)** Now here's how it works in the end.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=263)** Once we've completed the calculation for the survived column, and then we complete the calculation for the died column, the larger number wins.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=273)** If survived is bigger, we predict they're gonna survive.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=276)** If died is bigger, we predict that they're going to die.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=280)** We don't have to worry about multidimensional space, we don't have to worry about centroids, we just have to add the columns, and the larger column wins.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=288)** So a lot of times, when folks use an older technique like this, that comes from the statistical tradition, they choose it in part because they're easy to deploy, and they're actually very scalable on large data sets.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (5), let (3), class. (2), case. (1), finally, (1)
> **Versions:** 4.781 (1), 0.123 (1), 1.449 (1), 2.193 (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Stepwise discriminant
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-discriminant?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-discriminant?u=76281980&t=1)** - [Instructor] Okay, now we're gonna talk about a different flavor of discriminant analysis called stepwise discriminant analysis.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-discriminant?u=76281980&t=9)** The whole idea is to let the stepwise discriminant choose our variables for us.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-discriminant?u=76281980&t=14)** So I've chosen a wider selection of variables: age, passenger class, embarked, gender, sibling/spouse, parent/child, and fare.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-discriminant?u=76281980&t=25)** Now, stepwise is a bit controversial within statistical circles, but it's helpful to have methods that narrow down those variables.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-discriminant?u=76281980&t=35)** The complaint is that sometimes the list that's chosen on the training data is not optimal on the test data, but let's give it a try and see how it goes.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-discriminant?u=76281980&t=45)** So the first thing to talk about is which ones did it choose in this case.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-discriminant?u=76281980&t=50)** I actually ran all those variables on the Titanic data set and it went with age, it kept passenger class, but it did not choose embarked, it went with gender and sibling/spouse, but it did not go with parent/child and fare.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), class, (2), case. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Logistic regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=1)** - Okay, let's talk about logistic regression.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=3)** You're gonna notice some similarities in look and feel from logistic regression and discriminate analysis, particularly at the level of detail, but once we get to the other algorithms, you're gonna notice a striking difference between logistic and discriminate on the one hand, and all of the others, because these are really the two that come from the statistics tradition.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=27)** First, note that like many of the algorithms, virtually all, in fact, logistic operates by listwise deletion, meaning that if any data's missing, that row is eliminated.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=39)** All inputs are used unless you choose to do stepwise logistic.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=44)** So, like discriminate, we have a stepwise option.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=49)** Have to use scale variables.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=51)** In practice, however, when epidemiologists, health researchers, use logistic regression, they tend to have mostly categorical variables, so we can employ dummy coding, and dummy coding is very common in logistic regression models.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=67)** Logistic is arguably the most transparent of all the models.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=72)** There is lots of compelling detail, to the degree that some practitioners favor logistic over all other algorithms.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=82)** There's a bit of a stylistic difference between those researchers and some others.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=87)** Okay.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=88)** Let's understand the basic premise of logistic regression.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=93)** We've got a binary, categorical variable in the Titanic data set, as you know, survived identified as the ones and died identified as the zeros.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=104)** I've taken just the males, where the pattern is a bit clearer.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=110)** You'll notice that there's a number of young survivors and those in midlife tend to have zeros for survived.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=119)** They died.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=120)** So, how can we capitalize on this?
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=122)** Well, we've had regression for more than a hundred years but we've only had logistics since about the 50s.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=129)** Take a look.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=130)** If we try to plot a regression, just a plain, vanilla, linear regression, you can force the software to do it.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=139)** It won't refuse but the resulting regression line just doesn't seem to fit the data very well and there's all kinds of additional problems.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=147)** If we let this line continue, we could get negative probabilities, which makes no sense, or we could get probabilities above one, depending on the numbers in our particular data set.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=160)** So, we've gotta address this, in some way.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=162)** So, what logistic regression does is transforms the data to bound our predictions to never be higher than one, and never be lower than zero.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=175)** It does this with a log transformation and it creates what's called an asymptote, you may remember that term from algebra class, at one and at zero.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=186)** There's another interesting characteristic of this so-called S curve.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=191)** The behavior is interesting.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=194)** What it's metaphorically like, and I'm borrowing this metaphor from the Master Algorithm book, is that if you think about popcorn cooking, when it first starts to pop, it pops slowly.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=207)** Just occasional pops and at a particular moment, the popping becomes much, much more dramatic.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=213)** That's the steep part of the S curve and then, it slows down again.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=218)** So, returning to our data, we can see that it doesn't matter so much what your age is when you're looking at four years old, or five years old, or six years old, but at a particular point, it appears to be in the late teens, there's a dramatic change, and then you have many more individuals in their 20s, 30s, and 40s that died than survived.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=243)** And that's what the logistic is trying to get at when it fits that S curve.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=248)** What is the point on the scale variable, in this case age, that's showing that contrast in our dependent, in this case survived?
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=259)** So, the variables that I gave to the binary logistic regression, in this case, are the same inputs that I used in other algorithms.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=269)** Age.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=270)** Passenger class.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=271)** Embarked.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=273)** And gender.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=274)** Now, remember, logistic requires dummy coding and that's why we have more than one variable for passenger class, and more than one variable for embarked.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=284)** So, now what we're gonna do is we're gonna talk about the formula that's used.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=288)** We're familiar with the standard Y equals MX plus B type format of a line, and we know in linear regression, it takes the form of Y equals beta one, X1.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=300)** If there's a second variable, beta two, X2 and we know that we get that Y-intercept that we call the constant, okay?
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=308)** So, in binary logistic regressions, since we're doing a log transform, when it comes time to score, we have a complication.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=316)** We have to reverse that log transform that we've done.
>
> **[5:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=321)** The EXP function is the antilog.
>
> **[5:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=324)** So, when it comes time to score those probabilities at the end, we're looking for a probability between zero and one.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=330)** Do they have a high probability of surviving or a low probability of surviving?
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=335)** That formula is gonna be one divided by one plus the antilog, that's what the EXP function is, then there's a minus and it seems to be getting complicated but inside those parens, all we do is insert the same old formula that we've seen, again and again.
>
> **[5:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=353)** Y equals beta one, X1, beta two, X2, and so on plus the constant, and this is all over the internet, and it's well documented in books, but it's really as simple as that.
>
> **[6:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=363)** It's the same formula that we're familiar with but with this additional math wrapped around it.
>
> **[6:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=370)** So.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=371)** You get resulting output with the coefficients that look something like this and gosh, it can be a little intimidating, at first, but it really doesn't need to be.
>
> **[6:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=381)** Remember that this detailed output, the detail around these coefficients is exactly what the statistically trained like about logistic regression.
>
> **[6:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=394)** So, the so-called unstandardized betas, which will typically be labeled just by B in your output, is what you feed into the formula that I've just reviewed.
>
> **[6:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=408)** The significance values, sometimes labeled with a P for probability, is whether or not the variables are statistically significant, and low values are significant but high values are not.
>
> **[7:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=422)** So, age, passenger class, and sex are all significant.
>
> **[7:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=427)** Embarked is not.
>
> **[7:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=429)** Let's take a closer look.
>
> **[7:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=431)** Notice that passenger class has no beta and no EXP beta, yet is showing significance, why?
>
> **[7:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=439)** That's the test of significance for passenger class, collectively.
>
> **[7:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=443)** All of the related variables.
>
> **[7:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=445)** Embarked has the same.
>
> **[7:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=447)** The significance of embarked is 0.064.
>
> **[7:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=451)** That's higher than .05, so the collection of embarked variables are not significant and if you wanna dig deeper, and run this more than once, you might remove that whole set of variables.
>
> **[7:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=464)** Now, let's talk about the last column, labeled EXP beta.
>
> **[7:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=469)** This is usually described just as the phrase odds ratios.
>
> **[7:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=474)** It's basically the antilog of the betas and you've heard of these, even if you don't know you have because they're mentioned in newspaper articles, they're mentioned even on TV news.
>
> **[8:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=488)** For instance, sex shows an odds ratio of 13.8, meaning that women are almost 14 times more likely to survive than men, having controlled for the other factors.
>
> **[8:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=504)** Passenger class shows an interesting pattern, almost as dramatic.
>
> **[8:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=509)** First class passengers are 10 and a half times more likely than third class.
>
> **[8:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=517)** Why do I say third class?
>
> **[8:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=519)** That was the group that was left out.
>
> **[8:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=521)** The so-called reference group.
>
> **[8:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=523)** So, first class is more than 10 times more likely to survive than third class and then, second class is about three times more likely than third class.
>
> **[8:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=534)** What about age?
>
> **[8:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=535)** Now, this gets tricky and I know a lot of this output probably seems tricky, at first, until you've had a chance to practice it, but age is near one, but a little bit lower than one.
>
> **[9:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=546)** You're probably intuiting that since it's on the low side of one that maybe risk is going down and sure enough, the older you are, the less likely you are to survive.
>
> **[9:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=559)** Gosh, it seems close to one.
>
> **[9:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=560)** Maybe it's a small effect.
>
> **[9:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=562)** It's a little bit more subtle than that.
>
> **[9:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=565)** This is all exponents, now.
>
> **[9:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=566)** So, if you wanted to know the impact of a 10 year spread, let's say between 15 and 25 or between five and 15, then you would actually find that that older individual was about a third less likely to survive, at .7.
>
> **[9:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=584)** So, those scale variables get tricky.
>
> **[9:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=587)** In fact, epidemiologists will tend to turn their scale variables into categories, ironically enough, in order to make this kind of interpretation more straight forward.
>
> **[9:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=598)** So, how did it perform?
>
> **[10:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=600)** Well, in short, not so great.
>
> **[10:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=603)** So, if we look at the percent correct on the training data, we see that it's 65% correct.
>
> **[10:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=609)** Not quite as good as we've seen.
>
> **[10:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=611)** However, the percent correct on the test data is substantially lower than on the training data.
>
> **[10:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=618)** There's a 10% gap.
>
> **[10:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=620)** We drop all the way down to 55% and that's bad news.
>
> **[10:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=623)** Now folks, this is a powerful and very popular technique.
>
> **[10:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=627)** You don't wanna dismiss the technique, at this point.
>
> **[10:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=629)** You wanna try to figure out what's gone wrong.
>
> **[10:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=632)** It could be the inclusion of those embarked variables, which are not statistically significant, or perhaps there's a variable that was left out that we'd wanna add.
>
> **[10:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=641)** So, when this happens, you wanna reflect on how could I improve the model before you dismiss the technique and you certainly don't wanna draw the conclusion that logistic is gonna be a poor performer, in general, in other projects.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), class, (4), class. (3), function (2), continue (1)
> **Env Vars:** exp (4)
> **CLI Commands:** find (1), make (1)
> **Versions:** 0.064 (1), 13.8 (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Warnings:** note that (1)
> **Speakers:** - okay (1)

#### Stepwise logistic regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980&t=1)** - [Instructor] Okay, we're gonna try the stepwise method on logistic regression.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980&t=6)** Only discriminant analysis and logistic will have stepwise.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980&t=11)** Now, that doesn't mean that they're the only algorithms that choose variables for you, but they're the only ones that use the stepwise approach.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980&t=21)** So I'm gonna start with a larger pool of variables, age, passenger class, embarked, sex, sibling spouse, parent child, and fare.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980&t=32)** Let's see what the logistic had to say about these variables.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980&t=35)** It starts by picking the one that has the best statistical significance.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980&t=41)** Then it grabs another.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980&t=42)** Then it grabs another.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980&t=44)** Then it grabs another.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980&t=45)** And at a certain point, there's no additional variables that are statistically significant at whatever threshold is set, usually .05.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980&t=55)** Embarked was not picked up, parent child was not picked up, and fare was not picked up.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980&t=61)** But all the others were.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (1), let (1)
> **Speakers:** - [instructor] (1)

#### Decision Trees
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=1)** - [Instructor] Okay, decision trees.
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=2)** A big topic, also a popular topic because of all of the algorithms, decision trees are probably the most common.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=12)** Why is it a complicated topic?
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=14)** Well, because decision trees are not one algorithm.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=19)** There are many, and the way that they build, the execution is quite different for these different types.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=29)** There are general principles though that we're able to explore that apply to all decision tree algorithms, but they truly are a family of techniques.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=40)** They have a variety of missing data handling options, really quite different and different in interesting ways.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=47)** However decision trees really are the exception to the rule.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=52)** They do not use listwise deletion.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=57)** They all have some alternative to that, either treating the missing data or setting the missing data side as if it was its own separate category.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=70)** Also decision trees are a so-called greedy algorithm, meaning that as it's built, it's doing one variable at a time and will stop.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=83)** If you've been listening carefully, you may have noticed that that sounds like stepwise discriminant and stepwise logistic and that would be true.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=91)** All three of those algorithms would be greedy.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=94)** We're gonna revisit this topic when we see the tree.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=98)** You can handle all types of variables, no dummy coding needed here.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=103)** And interactions, which are a new topic for us, are quite easy to see in decision trees.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=109)** So let's take a look.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=111)** We're gonna use the same inputs, but since there is no dummy coding we have just four: age, passenger class, embarked and sex.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=121)** Okay, now, when the tree first starts to grow, we notice that we have an overall survival rate of 38% up in node zero.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=131)** And the best variable is sex, because that is the first variable that splits.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=137)** That is the first indication that we're talking about a greedy algorithm.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=142)** When it chooses the sex variable to be the first variable to branch on, it's not thinking ahead so to speak to any further step and the choice of sex as the first variable has implications for all variables that follow.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=157)** Let's take a look at the second variable.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=159)** The second variable that it splits on for women is passenger class, and the second variable that it splits on for men is also passenger class.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=171)** However notice that there's a difference here.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=175)** There's what we call an interaction in the sense that the way that passenger class splits for women is different than the way passenger class splits for men, indicating a difference between those two and the tree is not symmetric.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=192)** Now when it splits again, remember that is a greedy algorithm, it's growing step by step and will stop, but it's not symmetric in nature and it doesn't know when the tree is growing at the top where it's gonna end up.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=210)** It's only growing one branch at a time.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=213)** So under node five, it splits on embarked, but under node seven it splits on age and if you look carefully you can see that we have less than or equal to 14, older than 14 and missing.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=233)** Some individuals are missing age and yet those cases are used.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=239)** They are not discarded.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=241)** Ultimately the tree terminates in what are called leaf nodes.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=246)** Node three, four, eight, nine, six, 10 and 11.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=252)** And collectively those segments represent all of our data.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=257)** Let's zero in on just one of them.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=259)** Node three is first class females.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=265)** And their survival rate is 98.7%.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=269)** Very high indeed.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=270)** So we won't have a lot of complicated coefficients and a lot of complicated formulas.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=276)** We're simply gonna have a series of if then else statements like this: if female and first class then 98.7% survived.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), class, (2), class. (1), this: (1)
> **CLI Commands:** node (5)
> **Versions:** 98.7 (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### KNN
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=1)** - [Instructor] Of all the techniques that we're gonna discuss K- Nearest Neighbors is arguably the most straightforward conceptually.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=8)** It's actually kind of fun talking about K- Nearest Neighbors but it can also be quite effective.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=15)** So K-Nearest Neighbors is a so called lazy learner and makes it quite different from the other choices.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=22)** No model per se is built.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=24)** Basically what's happening is that we have a technique that although memory intensive is not computationally intensive at model building at all because it doesn't build a model.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=36)** It simply memorizes the locations of all the cases.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=40)** Now at scoring when you go to deploy this thing then it has to find all the nearest neighbors and that then takes some work So it kind of turns the typical process on its head.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=53)** It's virtually instant at model building but then at scoring it can be a little bit slower at scoring than some other techniques.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=62)** And that's the notion of a "Lazy" learner.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=66)** Also the notion of nearest is essentially Euclidean distance Now it's not the only choice but it's the typical choice So we really are talking about scale variable type activity here.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=78)** However if you've got a variable that is not scale in nature let's say sex, then obviously men match with men and women match with women in the sense that in both of those cases the distance would be zero.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=92)** All inputs are used.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=93)** So unlike decision trees for instance, it's not choosing some variables and not others.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=100)** Finally the K in the name refers to the number of neighbors that we're going to use to make our prediction and for this example I've chosen K equal to eight.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=113)** Okay so in terms of inputs we're going to use the same.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=117)** Age, passenger class, embarked and sex.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=122)** So in this diagram which I pulled from the software that I used to run the model, it's simply showing us diagrammatically three of the four variables.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=134)** We have men at the top of the diagram women at the bottom.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=137)** Passenger class all on the side and then age along the opposite side.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=143)** We're simply identifying who is close to who in this multi-dimensional space.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=149)** Okay so take a look.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=151)** I have the entire training data set of the Titanic data set and the top individual just by coincidence is the top row is Mr. Owen Braund and if we look over to the right-hand side of the data set we find that the model hit is telling us that the nearest neighbor him is Mr. Karlsson.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=174)** Then there's Mr. Johansson, Mr. Dennis and so on and notice that the distances are very close to zero here in fact in some cases they're probably exactly zero as long as all of those values are the same.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=187)** Let's zero in and take a look at just those neighbors.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=192)** Here's the eight closest neighbors and what we find is that all of these gentlemen, now of course they're all men because we're refining this nearest neighbor to a man so on sex they have the same value, age they have the same value, 22 years old.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=209)** None of them are traveling with siblings or spouses.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=213)** None of them are traveling with parents and children.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=217)** We have very slight variation in the fare that they paid which would have been paid more than a hundred years ago in British pounds and they all embarked from the same location.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=227)** But perhaps most importantly, they all died on the ship.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=231)** Therefore we're going to predict that Mr.Braund also died on the ship

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Code Keywords:** let (2), class, (1)
> **Tools:** notion (2)
> **Definitions:** is a  (1), refers to (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Linear SVM
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=1)** - [Instructor] All the algorithms that we're going to discuss support vector machines is among the most abstract conceptually.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=9)** It was one of the really hot algorithms just a few years ago.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=12)** No, I don't want to diminish its importance now, it's still considered to be an important and popular technique.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=18)** But for a while it was really considered the best one.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=22)** And then it got displaced to a degree by ensembles of trees.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=26)** First, random forests, and then techniques like XGBoost.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=31)** And now it seems like the hot algorithms are deep learning.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=35)** But of course, deep learning is used in application areas like visual recognition and speech recognition.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=42)** So it's still considered to be one of the more complex but also one of the more accurate algorithms out there.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=51)** Unfortunately of course, a lot of times the really accurate algorithms and the more complex ones, are black box.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=59)** So for certain projects that are off the table because they're not gonna give us a narrative of what's going on in terms of variable importance and so on.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=67)** Pretty much any algorithm will give you variable importance if you want, but not like the degree of detail that we get in a technique like logistic regression.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=78)** In support vector machines, all inputs are used.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=81)** Something that it's rather famous for, is that it is robust to large numbers of inputs.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=88)** Normally we worry about, as the number of inputs goes up, we want the numbers of cases to go up as well.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=94)** This is an issue with most algorithms, but support vector machines can handle this kind of situation better than most, with the number of inputs going up, but perhaps not with a huge number of cases.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=108)** Also, we haven't talked about what is called, Model Tuning very much in this course.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=113)** Frankly it's been a bit beyond the scope of what we wanted to discuss with these algorithms.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=119)** However, support vector machines does have the reputation that if the parameter, C, and I'm gonna be explaining what that is, is not tuned very well, you can have very poor performance.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=131)** Basically what's going on with a parameter C, is it gives us a sense of how complex and flexible, or how simple our model is.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=142)** And that's gonna give us a notion of whether or not we have high accuracy on the train data, perhaps, but then poor performance on the test data for the same model, those are the kind of issues that we're talking about.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=155)** Let's try to visualize this.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=157)** Now I have a very simplistic example, somewhat inspired by the Titanic data, because if we were looking at real data, it could get too complicated for us to see the concepts.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=169)** So I've massively simplified this, and I just have four younger passengers, all survivors, shown by green squares.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=176)** And four older passengers, all that died, indicated with red squares.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=183)** What we're doing with support vector machines, is we're just trying to find the widest possible margin to separate these two groups.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=193)** Let's zero in a bit.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=195)** That's the margin, and remember that parameter C?
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=200)** The parameter C gets that how wide we're gonna have that margin be.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=206)** If it's more narrow, and we have a very complex model, the narrow road, almost everyone uses the metaphor of a road, can zigzag throughout the data points more readily.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=222)** So that's gonna produce our complex model.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=224)** Complex models potentially perform well on the train data, but not well on the test data.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=230)** They don't always generalize well.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=232)** If we make the road wide, it's not as quick on its feet, so to speak.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=237)** The model's gonna be less complex, but perhaps although we sacrifice a bit of accuracy, it generalizes better.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=245)** That's the idea.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=247)** So again, we haven't spent a lot of time on parameter tuning, but it's considered particularly important in support vectors machines to get that regularization parameter, called C, to be a good value.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=260)** Frankly, you're just gonna have to try several values of C.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=265)** Let's make this example a bit more complex.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=269)** What I've done now, is I still have younger passengers surviving show in green, and older passengers dying shown in red.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=278)** What I've done is introduced third class, second class and first class.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=284)** What we can imagine, is that as we take a look at that margin, we see that the age range that separates those that survive, that died, is a bit younger for third class, we can imagine.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=299)** Maybe the third class passengers in their mid teens, are not surviving.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=305)** But the first class passengers in their mid teens are surviving, but those that are college age or older are dying in many cases.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=314)** There's something else that I wanna point out.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=317)** And this is a point that Pedro Domingos makes in the Master Algorithm.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=323)** You would think at first looking at this, that it's really in the tradition of techniques like linear discriminate analysis, and logistic regression.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=332)** And that clearly, we're trying to identify some kind of an equation.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=337)** And we're looking for this linear path or hyperplane, that separates these cases.
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=342)** But what he points out in the book, is that this is, in a sense, also in the tradition of K nearest neighbors.
>
> **[5:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=350)** Why?
>
> **[5:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=351)** Because the points that are on the margin.
>
> **[5:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=355)** The points that are on the road, so to speak.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=357)** Here we can see three red dots and three green dots.
>
> **[6:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=361)** Those are called the support vectors.
>
> **[6:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=363)** That's in part, how it gets its name.
>
> **[6:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=366)** And those support vectors, if those values were to change, would move the boundary of the road.
>
> **[6:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=372)** So think about it, it is like K nearest neighbors, isn't it?
>
> **[6:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=375)** Because relatively few cases are determining where that boundary is.
>
> **[6:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=381)** Okay, now, let's return to just one variable, age, but let's make it more complex in a different way.
>
> **[6:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=391)** Let's imagine that the folks in midlife are dying, but in addition to the younger folks surviving, the elderly folks survive as well, because they're being helped into the life boats.
>
> **[6:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=403)** Let's imagine that that was the case.
>
> **[6:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=406)** If so, we're in a bit of a bind.
>
> **[6:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=408)** Because we can't find a line, or in multidimensional space, we wouldn't be able to find a hyperplane that passes through this.
>
> **[6:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=419)** We'd get into a bit of trouble.
>
> **[7:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=421)** So what we do, is we actually bend the shape of the data.
>
> **[7:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=428)** This is what's called applying a kernel, or sometimes called the kernel trick.
>
> **[7:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=432)** And by changing the shape of the data, we can do something like this.
>
> **[7:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=438)** We can bend that space so that now the folks in midlife are above, and both the younger and the elderly are below.
>
> **[7:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=450)** So we get a shape not unlike a tunnel, or if it's a bit more complex, perhaps like a saddle.
>
> **[7:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=458)** And we can slice through that with a hyperplane, thereby separating the red from the green.
>
> **[7:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=466)** So two of the things that make support vector machines a little tricky and a little complicated until you can get the hang of them, is this notion of a kernel, and then earlier when we were talking about your responsibility in experimenting with the value of C.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (3), this, (2), class, (2), abstract (1)
> **CLI Commands:** make (4), find (3)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Analogies:** imagine (4)
> **Tools:** notion (2)
> **Speakers:** - [instructor] (1)

#### Neural nets
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=0)** - [Instructor] Okay, let's talk about neural networks.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=3)** You almost certainly have heard of them, but the concept behind them might be new and we'll also be talking about the implications for our particular topic, binary classification.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=17)** First I wanna mention that deep learning, which is a really hot topic right now, is a special kind of neural network, and within the next couple of minutes, I'll be able to explain what's special about deep learning.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=30)** I do wanna mention, however, is that deep learning is really quite different from what we're gonna be discussing.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=37)** We're gonna be discussing multilayer perceptrons and the applications of deep learning, at least at the moment, are really in the areas of visual recognition, speech recognition, frequently on very large datasets, so large that they actually have to be cognizant of what kind of computer technology that they run on.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=61)** So, once we see the neural net diagram, I'll be able to amplify a bit the differences between multilayer perceptrons as we normally talk about them over many years and deep learning.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=72)** Neural networks are famously a black box technique.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=75)** They're not gonna tell you much of a narrative about your variables in terms of what the most important variables are or what causes the risk to go up or what causes the risk to go down and so on.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=87)** I discuss why neural net is black box and how to try to interpret the coefficients in considerable depth in a book titled SPSS Statistics for Data Analysis and Visualization.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=101)** I really get into the details.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=104)** Some of you may find it interesting if you wanna go to another layer of abstraction beyond what we're talking about here.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=112)** In neural networks, all inputs are used and neural networks have the reputation of benefiting from screening.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=121)** If you have a large pool of variables and some of the variables aren't too good and perhaps the variables are redundant with each other, neural networks have the reputation of being a bit more sensitive to this than other techniques.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=134)** One key feature that we're gonna have to understand is backward propagation, so in this video, we will be talking about what that is.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=142)** It truly is, kind of, at the heart of neural networks.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=146)** Okay, so in doing this example, I've used the same four inputs, age, passenger class, embarked, and sex, and here's a diagram that my software package of choice generated that I wanna talk about.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=159)** So, I wanna break this down into its components.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=163)** We've got out input variables, sex, passenger class, age, and embark showing in the diagram.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=168)** Bias refers to, essentially, the Y-intercept.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=173)** It's a little bit different here, but it's very much like the concept or the Y-intercept in traditional linear regression.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=181)** Then finally, what's been labeled here as Neuron1, Neuron2, and Neuron3 is the somewhat famous hidden layer.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=188)** What makes deep learning networks different is those are large, complicated neural networks with multiple hidden layers, and large, complex hidden layers at that.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=203)** Meaning that thousands of these lines, tens or even hundred thousand of these lines are in these networks, so they require very advanced computers and huge datasets.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=217)** Here we have just one hidden layer with three nodes or neurons, and of course, our target variable.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=224)** What I wanna do now is use a metaphor that my colleague wrote about in his book Applied Predictive Analytics.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=233)** I recommend this book on a number of levels, but I'd like to share this quote with you.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=239)** What Dean is talking about is catching fly balls as a boy and how that's like backward propagation.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=246)** Let's talk about the quote and then I'm gonna elaborate a bit.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=249)** He writes, "The learning process is similar "to how I learned to catch fly balls as a boy.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=254)** "First, imagine my father hitting a ball "to me in the outfield.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=258)** "In the beginning, I had absolutely no idea "where the ball was going to land."
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=262)** Then I'm gonna jump down to the bottom there.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=265)** "But then something began to happen.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=267)** "The more fly balls my father hit, "the more I was able to associate the speed "the ball was hit, the steepness of the hit, "and the left/right angle."
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=277)** So, what he's doing is he's shrinking the gap, shrinking the gap, those errors are getting smaller and smaller.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=284)** That's really what backward propagation is all about.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=287)** Let me return to the diagram.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=290)** You see, what's happening is he's predicting a scale value.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=295)** We're not, we're predicting survived, but he was trying to figure out where the ball was going to land and he was off by a certain number of feet.
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=304)** What he did each time is close the gap.
>
> **[5:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=307)** He didn't run to where the ball fell, but rather, he ran a part of the way between where he was standing and where the ball fell.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=316)** What backward propagation is is you take that adjustment and you propagate it through all the lines that you see here so that each of the lines gets a little bit of that share so that the next time it makes a prediction, it does a more accurate one.
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=335)** Now, I'm only gonna talk about this diagram briefly because it's a complicated mess, as you can see.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=340)** This is really closer to what it really looks like.
>
> **[5:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=344)** Notice that categorical variables have to be dummy coded.
>
> **[5:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=348)** I can't exaggerate on the following point.
>
> **[5:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=351)** I meet folks numerous times each year that have very large, complicated categorical variables.
>
> **[5:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=358)** Things like make and model of vehicles predicting something about the vehicles, and they don't know that inside the neural network or inside these other algorithms, all this complicated dummy coding is going on.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=371)** So, they think that embarked is one variable and it's really four.
>
> **[6:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=375)** Embark C, Q, S, and even blank.
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=379)** Or they think that passenger class is one variable and it's really three.
>
> **[6:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=383)** First class, second class, and third class.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=385)** You see where I'm going with this.
>
> **[6:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=387)** So, why all of these lines and what purpose do they serve?
>
> **[6:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=392)** Well, I discuss the notion of interactions in neural network in one of the videos in my regression course, and the reason that that video is a bit different than this one is, here we're predicting a categorical variable and there we're predicting a scale variable.
>
> **[6:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=412)** If you're new to interaction terms, I believe it often makes more sense when you learn about interaction terms with a scale variable first.
>
> **[7:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=421)** But we saw it when we were looking at trees and what we saw is that impact of passenger class on risk or on survival depended upon a third variable, whether or not the passenger was male or female.
>
> **[7:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=439)** The hidden layer and all of those lines connecting the input variables to the hidden layer and then the hidden layer to the target category, survived and died, are two terribly important characteristics of our neural network.
>
> **[7:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=455)** One, it's how the neural network deals with interactions in curvilinearity, and two, it is what makes the neural net opaque because there's so many lines zigzagging through representing the same variables going in different directions that it's almost impossible to figure out what those coefficients mean.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (4), let (3), finally, (1), require (1), class. (1)
> **Definitions:** is a  (3), refers to (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** spss (1)
> **Tools:** notion (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Bayesian networks
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=1)** - [Instructor] Okay, time to talk about Bayesian networks.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=3)** Once again, we're encountering a technique that's quite different from the others.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=9)** Of course, you're going to encounter the term Bayesian or Bayes' throughout statistics.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=16)** It really is a whole branch of statistics.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=18)** We're gonna focus on Bayesian networks, but Bayes' theorem is really just about a way of combining or updating probabilities as you get more information.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=32)** It's really about conditional probability.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=34)** If you know more than one thing about someone, then your overall assessment changes.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=41)** We're gonna discuss three different ways of addressing interaction, so that's gonna prove to be an important theme of our discussion of Bayesian networks.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=52)** Bayesian networks will be one of the three ways.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=55)** Naive Bayes, an algorithm that you may, or approach, that you may have heard of and Bayesian networks are not exactly the same.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=63)** We're gonna make brief mention of Naive Bayes and talk more about Bayesian networks.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=69)** One of the things that truly unique about Bayesian networks is the notion that a subject matter expert could design the network and then fit the network with the data, but nonetheless, physically explicitly shape the network.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=87)** That's unique to this algorithm of all the ones that we're discussing.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=91)** We will continue using the same inputs, age, passenger class, embarked, and sex, but first let's review a little bit of the theory and make some recommendations to you.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=104)** If you are new to Bayes' theorem and you're curious about it, and you had assumed that our discussion of Bayesian networks was gonna talk at length about Bayes' theorem, there's lots of ways that you can look into it.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=119)** One book that I've really enjoyed is The Theory That Would Not Die, which is all about Bayes himself and the use of Bayesian statistics.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=130)** It really is a different topic, though, from ours in this video.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=135)** I do want to acknowledge Judea Pearl, an extremely influential statistician who won the Turing Prize in 2011, which is the equivalent of the Nobel Prize in computer science.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=151)** He's credited with inventing Bayesian networks decades ago, but when we won this prize in 2011, it really was for his career-long work in Bayesian networks.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=164)** You can find numerous books and also just a ton of his lectures on the internet.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=171)** Now, keep in mind, he is an academic, so his lectures will be academic in feel, but he's an extremely influential individual.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=180)** As promised, let's talk about interactions.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=184)** If you really wanted to understand how our four variables interact, you could do every possible permutation.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=193)** For instance, there is exactly one first class female with an unknown embarkation point between 35 and 40 years old, and she has a 100% chance of surviving 'cause there's only one person like her.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=209)** And there's exactly one female in first class between 60 and 65.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=216)** I've sorted this on mean survival, by the way.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=219)** Also note that age has been binned.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=223)** Bayesian networks always work with categorical variables, so any implementation of Bayesian networks is going to bin your scale variables to make them categorical to work in the network.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=236)** The bottom line is, it's really powerful to look at how every variable interacts, but even with just four input variables, age, embark, sex, and passenger class, we have extremely, extremely thin sample sizes.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=252)** You might respond that that's because we started with a small number to begin with, and arguably that's true, but this is just four variables.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=260)** What if we had 100 or 200 or 300?
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=263)** It truly is impossible, even with very, very large datasets, to look at all possible permutations, so there has to be another way.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=274)** Briefly, what Naive Bayes does is looks at the probability of each input against the dependent, but assumes that the inputs do not interact with each other.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=288)** So, Naive Bayes tests no interactions and it actually proves to be quite powerful.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=297)** But now let's talk about our primary subject, which is the third way of addressing interactions, Bayesian networks.
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=304)** We get this thanks to Judea Pearl.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=308)** Here is a simple Bayesian network that I produced in the software package that I use and in this case, I did not, as some kind of subject matter expert, craft this network.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=323)** We won't be discussing that aspect, but that is something that's very important to Judea Pearl himself, is that you can create Bayesian networks where the shape and the topography, so to speak, of the network has been determined by a subject matter expert.
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=338)** In this case, the software has done it for me.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=340)** And take a look at the node for passenger class.
>
> **[5:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=345)** Notice it only has one arrow pointing into it.
>
> **[5:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=350)** In the language of Bayesian networks, we say that it has one parent.
>
> **[5:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=354)** If we zoom in on that, we find that the probability of being first class if you're a survivor is 41% and the probability of being in third class if you did not survive is 64%.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=371)** So, clearly there's this relationship between passenger class and survival, but we knew that quite well.
>
> **[6:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=377)** There's no variable interactions here.
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=379)** This is just one variable against the dependent.
>
> **[6:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=383)** And in the case of Naive Bayes, all of the probabilities would look like this.
>
> **[6:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=389)** We wouldn't be looking at interactions.
>
> **[6:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=392)** However, we're doing Bayesian networks, and if we look at the embarked variable, we see that it has two arrows pointing into it.
>
> **[6:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=400)** So, again, in the language of this technique, it has two parents.
>
> **[6:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=403)** And if we zoom in on this, we see that we're looking at passenger class, embarkation point, which is C, Q, and S, and how they interact.
>
> **[6:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=416)** And the lowest probability for Southampton, that's the S, that's the folks that boarded in England, is 52% in the upper right-hand corner there.
>
> **[7:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=429)** So, if we look at first class survivors in that top row, 52% of the time they boarded in Southampton.
>
> **[7:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=437)** If we look at second class passengers that survived, one row up from the bottom, 91% of them boarded in Southampton.
>
> **[7:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=448)** Notice that we're only looking at the interaction of two variables, not everything interacting with everything else because the network is telling us, by the number of arrows pointing to it, how many variables are interacting.
>
> **[7:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=463)** So, we're being selective about which interactions we explore, either through the work of the algorithm or through the work of a subject matter expert.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (3), let (3), case, (2), continue (1), class. (1)
> **CLI Commands:** make (3), find (2), node (1)
> **Definitions:** is a  (3), is an  (1)
> **Warnings:** keep in mind (1), note that (1)
> **Tools:** notion (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Heterogenous ensembles
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=0)** - [Instructor] Ensembles are a general technique involving combining component models to produce a new model, and the concept has inspired several important algorithms, but you can think of ensembles as an algorithm of their own.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=15)** So let's take a moment to talk about ensembles.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=18)** Now, keep in mind when you take a bunch of models and combine them, you've just turned your model into something more complex and almost certainly into something opaque.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=28)** Even if the component models are explainable, the ensemble might not be.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=33)** So I don't think you want to assume on real world projects that you'll always have the option of using an ensemble, but there's a reason why they win so many machine learning competitions like the ones on [kaggle.com](https://kaggle.com).
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=47)** They're very powerful and are frequently the most accurate when compared to the single model algorithms that we've discussed so far.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=57)** So in its most basic form, a so-called heterogeneous ensemble would just be a combination of some models.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=64)** In this case, three.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=65)** You could have a logistic regression, a neural network, and a support vector machine, or any other combination of the algorithms that we've talked about in this course.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=76)** And we can simply calculate an average, just as simple as that.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=81)** Now, an average of what?
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=83)** It would probably be an average of the propensity score because after all, we're talking about binary classification.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=92)** Alternatively, you could go with the most confident model, the max propensity score.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=99)** There's all kinds of other options that you could imagine.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=102)** Now, keep in mind that if one model was producing a null for whatever reason, for instance, if that model was using list wise deletion and the other techniques were not, most confident, of course, would also mean some non-null value, and I've leveraged that kind of trick when building ensembles and I was dealing with missing data before.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=125)** It can be very helpful when some of your models are producing nulls as predictions.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=132)** So as just one example of this, I just want to show you a tiny portion of IBM SPSS Modeler.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=140)** What you're looking at is not a modeling algorithm exactly.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=144)** It's almost more like data prep.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=146)** It's simply taking the inputs from three models and then coming up with different ways of combining them.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=153)** So in this particular example, I was predicting marketing response.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=158)** Three models are coming in with all of their predictions, but I wanted to show you this dropdown menu.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=163)** Again, it's just one example of what this might look like in software.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=167)** We've got majority voting.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=169)** We've got the one that was selected here, confidence weighted voting.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=173)** We have adjusted propensity, highest confidence wins, we have several.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=177)** And notice there's also ways of dealing with ties.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=180)** So it's very powerful.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=183)** So even though you won't find an algorithm called ensemble and most predictive analytics packages, it won't be called that, you really can think of heterogeneous ensembles as a modeling approach or modeling algorithm in their own right.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1), this, (1)
> **Env Vars:** ibm (1), spss (1)
> **Analogies:** imagine (1), for instance (1)
> **Warnings:** keep in mind (2)
> **CLI Commands:** find (1)
> **URLs:** [kaggle.com](https://kaggle.com) (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** dropdown (1)

#### Bagging and random forest
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=0)** - [Instructor] Now homogeneous ensembles involve combining multiple versions of models produced from the same algorithm.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=10)** Bagging is just one kind of homogeneous ensembling, and it's a term with two components, bootstrap and aggregating.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=22)** So bootstrap aggregating becomes bagging.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=26)** It is building a model on different samples of our data.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=30)** That's what the bootstrap is referring to, the different samples.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=36)** Bootstrap sampling is sampling with replacement.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=40)** So the samples are equal in size to the original dataset.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=44)** They're not subsets, but they're shuffled so that some cases might show up more than once, and others not at all.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=54)** The most famous example of this is bagging decision trees, which is a combination or an aggregation of multiple trees into a final model.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=66)** Here, three individual trees get aggregated into a final model.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=74)** So a forest, we sometimes hear random forest.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=78)** The forest is a group of trees, basically.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=81)** Now, of course, it's not going to be three samples.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=84)** If you are doing something like random forest, it's going to be 100 trees or 500 trees or some larger number like that.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=93)** In order for this process to be effective, the component trees have to be sufficiently different from each other.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=100)** So the famous random forest algorithm has three key components, bootstrap sampling to produce multiple and different samples, random selection of features, and this is key to what makes random forest powerful.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=119)** You're also scrambling the features so that the resulting trees use different features and not identical features at the top of the tree.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=130)** And the third is aggregation, combining the trees together to make an ensemble.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=135)** So let's see what this looks like.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=138)** This is just one example of how that can be implemented.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=144)** In nine, what they do is they actually let you look at the different trees.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=150)** So in this particular case, I'm trying to predict whether a customer has churned or not, and the top prediction in their cell phone bill data is evening charge.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=161)** But that's just the first tree of 100.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=164)** So I can advance to the second tree, and it's day charge.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=168)** And the third tree is night charge, and day minutes, and then day charge, evening minutes again.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=175)** So we are getting some repetition, but by shuffling the features, the top branch is really quite different over the first six trees, and that's just six out of 100 trees.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=186)** This is really important.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=188)** Otherwise, you're just going to get the tree over and over again, and ensembles don't benefit from that kind of repetition.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=194)** You need some diversity of the trees.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=197)** So that is really critical to random forest success, that notion of sampling features, not only cases.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)

#### Boosting and XGBoost
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=0)** - [Instructor] Now we'll talk about boosting, which at first might seem similar, but it's different in an important way.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=8)** We build a first model, and what we're feeding to the second model now is information from the first model.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=15)** XG Boost or Extreme Gradient boosting has become so well-known and popular, we think of this as typically being a series of decision trees, and with XG Boost it is, but boosting in general can be applied to any algorithm.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=31)** I discussed boosting, as well as bagging in much more detail, and of course, dedicated to ensembles.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=38)** In boosting, we're calculating the errors on the first model that we made, so we're trying to make fewer errors on the second model using that error information from the first model.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=50)** Matt Harrison, who's written a book on the effective use of extra boost likes to use the metaphor of chipping golf balls into a hole.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=58)** By seeing where the ball has landed and taking that information into account, you can imagine getting closer and closer each time.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=66)** So think about it now, we're producing something that's more complex, and we're trying to increase that signal, but if we're not careful, we're also going to amplify the noise, and we could get something that's overfit.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=82)** But again, these algorithms are developed to try to maximize the benefits and minimize the downside.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=88)** Each of these models iterates culminating in a final model that has benefited from all the ones previous to it.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=96)** There's also an aggregation step, but it's a weighted average of all of the trees.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=101)** So with boosting in general, and XG Boost in particular, we really don't have any way of looking at the trees.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=107)** It's completely opaque, but it's consistently a top performer when in competition against other algorithms.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 4. Common Modeling Challenges

> [↑ Back to Table of Contents](#table-of-contents)

#### Imbalanced target categories
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=1)** - [Instructor] Okay, let's talk about a very common problem, and that's the problem of an imbalanced target variable.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=8)** So of course we're talking about binary classification, so this is a concern when one of the categories is more common than the other.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=16)** It's really when it's more dramatically out of balance.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=22)** And keep in mind that this is an issue that potentially affects all the algorithms.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=28)** It's very easy to see in a decision tree, so I'm gonna visualize it with you using a decision tree, but it affects the others, as well.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=38)** So with that in mind, let's take a look at Titanic data.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=41)** We have 38.5% survival rate, so conversely we have 61%, a little bit more, of those that died.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=52)** In other words, our target variable is not 50% and 50%.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=58)** When is this a concern?
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=59)** It's usually when it's more dramatic.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=61)** 70%, 80%, 90% in one category.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=66)** A really dramatic one that happens quite regularly is fraud, where you might have a ratio of 200 to one or 500 to one or even more.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=74)** So what does it look like when you balance your data?
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=77)** It ends up looking like this.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=79)** Now, since certain data has been discarded at random, it's not exactly 50/50, but I now have 51% survived and 49% died.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=93)** Let's go back to the previous one so you can see what's happened.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=97)** The 280 number has not changed, but the 447 of those that died has dropped to 269.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=107)** They have been discarded at random.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=112)** Why would you do this?
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=113)** Let's go back to the unbalanced to discuss.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=117)** The pattern that you're gonna wanna look for is are you getting good rules for those that died, the more common category, but not getting enough good rules for those that survived.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=132)** That's what you'll tend to see.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=134)** So in fraud, for instance, you might get a lot of good indication of non-frauds but you're just failing to identify those frauds accurately with the model.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=145)** That's the situation that will prompt you to balance.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=149)** Not an issue with Titanic, but you'll probably encounter it well over half the time in real-world projects.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=157)** There's one final important consideration.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=160)** Sometimes folks get a little bit nervous around the idea of balancing 'cause it seems artificial.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=166)** Keep the following in mind.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=168)** When we do this, we're doing this only on the trained data to help the algorithms, but we do not balance the test data.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=178)** So that test data is giving us a real-world assessment of the effectiveness of our model on data that has not been balanced.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (1), this, (1)
> **Definitions:** is a  (1), is an  (1), in other words (1)
> **Cross-References:** go back to (2)
> **Versions:** 38.5 (1)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Interactions
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=1)** - [Instructor] Interactions and interaction terms represent a big topic.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=5)** But when I'm working with a model and I'm struggling to get better accuracy, this is one of the first places that I look.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=13)** Interactions are when the relationship between two variables depends on a third.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=19)** Since we're building predictive models, that's normally gonna take the form of our target variable, our binary, and one of our inputs being influenced by another input.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=33)** Let's take a look at a couple of examples.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=35)** So for instance here's an example from my regression course in the library.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=40)** If we're trying to predict beginning salary using education level, we notice a general trend that as education level goes up, beginning salary goes up as well.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=54)** But notice for the blue line which represents the men, the line goes up more steeply, and for the green line representing the women, the line goes up less steeply.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=66)** So if we're really gonna understand the impact of education on beginning salary, we have to also know that third variable, sex.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=77)** Let's take a look at another example, admittedly a complex one.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=81)** Here we're trying to predict diabetes risk, and this is clearly a decision tree.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=88)** We see that the overall risk is 14.685%.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=95)** And the best predictor is weight.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=98)** However, do we have to look at a third variable to really understand the impact of weight on risk and the answer is yes.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=107)** Because for the individuals who weigh 155 pounds or less, the cut point for whether or not their risk is higher or lower in the tree for height, is 62 inches.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=121)** But for the individuals that weigh more than a 155 pounds, the cut point for height is 70 inches.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=130)** So there you go, another instance where understanding the relationship between weight and risk depends upon a third variable, height.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=141)** Something that you often can do, particularly using a technique like trees, or a technique like logistic and discriminant that's gonna make you create your own interaction term, is consider taking weight and height out and seeing if you can't figure out what that relationship is, possibly replacing it with a variable like body mass index.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=166)** And one of the reasons this is especially helpful in something like a tree, is we're not chopping our data up into as many segments, which gives us more data and more sample size to look at other inputs.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=180)** So take in all together, what are the implications for the model building process?
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=186)** First, if your model is not as accurate as you would like it to be, this might be one of the things you're gonna have to look into.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=194)** Also, although we didn't see any examples of it, curvilinearity is a special kind of interaction.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=203)** Finally, in thinking about the algorithms that we've seen in this course, some techniques are gonna make you work.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=210)** In particular techniques like logistic regression and discriminant are gonna make you create new interaction terms.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=217)** Terms like education times sex for instance.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=222)** Some techniques will address this problem but do so in hidden ways.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=227)** Neural networks for instance will not require that you build an interaction term but since they're a black box you can't really see what they've done.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=235)** Finally, trees are one of the easiest ways to diagnose this problem.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=240)** So if you're not quite sure this is affecting your model's performance, take a careful look at decision tree.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=249)** This a tough topic, but an important one, and as you grow and your build, you build these kinds of models, this will be one of the techniques that you're gonna wanna revisit again and again and master over time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (2), require (1)
> **CLI Commands:** make (3)
> **Analogies:** for instance (3)
> **Versions:** 14.685 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Missing data
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=0)** - [Instructor] One of the themes that we've investigated is certainly missing data.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=6)** Decision trees really are the exception to the rule.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=10)** Virtually all of the algorithms, at least on default settings, operate by listwise deletion.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=18)** So, you really wanna be careful about the following phenomenon.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=24)** In working with clients and building my own models over many years, I've noticed that when a client starts to say that they're always having the best luck with trees, I double check to see how many records were actually processed by the other algorithms.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=41)** And I can't tell you the number of times I've checked and discovered that zero records were run by the neural net, zero records were run by the support vector machine, and so on.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=52)** And a lot of times they didn't realize this.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=54)** So if trees are consistently being the best performers, you wanna make sure if the other algorithms were even running properly.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=63)** Now if, perchance, you do have a situation where you've lost a lot of records and maybe even lost all of the records, you're gonna have to think about imputation.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=73)** A lot of software will do this for you automatically.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=76)** In fact, sometimes it's an additional sub-command or a checkbox that it will go ahead and replace with the mean.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=86)** It can be as complex as a whole 'nother model that's simply in charge of imputation.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=92)** Let me help you understand what I mean.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=94)** Let's say you're missing the age variable.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=97)** It will automatically create, in many cases, a model where age is the dependent, where it's the target now, and it's using all of the other variable to try to find an estimate of that missing value.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=108)** However, this is too important to leave to chance.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=112)** So don't rely on just a checkbox or something automatic.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=115)** Check to see how much missing data do you have.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=119)** There's a big difference between missing 2%, 5%, or 30%, okay?
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=125)** So if you're missing a lot of data you might have to consider other possibilities.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=130)** In particular, one solution that I really like is sometimes building a model on the complete data and a different kind of model on the incomplete data.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=140)** So this can be a large complicated topic, but to give you a notion, I was working on a cell phone churn project, and I built one model, a neural network, on my complete data, but then on the portion that had incomplete data I did a tree, and I used the neural network and the tree together.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=160)** So this is a big topic.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=162)** The main thing to remember now is of all the algorithms, it's really the tree that doesn't force you as strongly to worry about imputation, but the others do.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=174)** Make sure you do a proper job of data preparation, and take into account your missing data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1), if, (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** checkbox (2)
> **Tools:** notion (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Bias-variance trade-off and overfitting
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=1)** - [Instructor] Now let's talk about a topic that can seem abstract at first, but one can truly make the argument that this issue of the bias-variance trade-off is why a course like this makes sense, and why we have to learn a dozen algorithms for doing binary classification.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=22)** Let me explain.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=24)** High bias is the situation that you face when your model is not flexible enough to get sufficient signal.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=34)** Now not getting enough signal, I'm sure you can guess this, it means the model's not accurate enough.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=39)** But what's this notion of flexibility?
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=42)** Well, think about something like linear discriminate analysis.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=46)** It can only fit linear relationships.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=49)** Not as flexible.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=51)** If you have curvilinearity, or variable interactions, you have to act in order to allow your linear discriminate analysis to do that.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=62)** Neural networks are inherently more flexible.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=66)** But, they're black box and they're more complex.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=70)** In short, high bias is gonna be the situation of underfitting.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=77)** High variance, on the other hand, is when your model is too sensitive.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=83)** So it's picking up a lot of noise.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=86)** And if it's picking up on noise in the training data, you're gonna see that gap in performance between the training data and the test data.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=97)** In short, it's generalizing poorly, and these models are overfit.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=104)** So why not always go for the more complex model?
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=109)** You know, bring the most powerful, complex, flexible model you've got?
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=113)** Isn't that always gonna solve the problem?
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=115)** No. This is a trade-off between those two.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=119)** As you try to combat one, you're gonna encounter more of the other, and vice versa.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=125)** So there's really no way to win, except to embrace several algorithms and see which one best fits your project and your data.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=136)** So if you're encountering this topic, specifically these terms, bias, variance, and flexibility, almost certainly, you're interacting with someone who has been influenced by this very important book.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=152)** Hastie and Tibshirani have been on the lecture circuit for years, they're extremely well thought of, they're academics.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=160)** This is a serious book now.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=163)** You're gonna have to kind of have you brain ready for some academic reading.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=167)** But note, if you go to the book page, you can download the PDF.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=173)** And as this website mentions, if you wanna go even deeper for a more advanced treatment, you can read their "Elements of Statistical Learning."
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=183)** Now, it's worth noting that this whole theme was also the basis for a book by Nate Silver, who you may have heard of.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=191)** And the title of the book is literally, "The Signal and the Noise: Why So Many Predictions Fail But Some Don't," which is exploring the same issue.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=200)** Specifically, that rookies at predictive modeling tend to go chasing after too much noise.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=208)** So let's revisit these two terms, and see what you can do.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=213)** If you have high bias, you might have to consider adding interaction terms.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=220)** If you're using an algorithm that needs you to physically add them..
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=224)** Like discriminate analysis, or logistic regression.
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=228)** Perhaps you have to better address curvilinearity.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=232)** Or in both of these cases, you might move more towards the complex algorithms that are able to tackle interactions and curvilinearity better.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=243)** You might have to add more input variables.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=246)** Perhaps you added what you thought were all the available input variables, but faced with poor accuracy, you get creative and you seek out more.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=255)** Finally, you might want to change the settings of your models to grow things more aggressively.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=262)** Remember that with high bias, you're trying to increase flexibility, so you would grow the tree more.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=270)** You would narrow that no-man's land between the two groups and a support vector machine.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=277)** Changing those settings in your algorithm to produce a more complex, more flexible model.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=284)** If you have high variance, perhaps you've got too many weak, or redundant inputs.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=293)** Maybe you wanna slide in the opposite direction of the continuum.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=297)** Maybe you wanna try those algorithms that by their very nature produce a less flexible, simpler model.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=308)** If you have high variance, that may be what you need.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=311)** Finally, you may wanna change the settings within the modeling algorithms to grow this particular model less aggressively.
>
> **[5:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=321)** A smaller tree, for instance.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=323)** A wider area between your two categories and a support vector machine.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=328)** Each and every algorithm will have adjustments that can be made to make it more flexible or less.
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=335)** "Flexible" sounds inherently good, but remember, flexibility as the word is used here means more complex.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=343)** Sometimes you need to try more complex, sometimes you need to try less complex.
>
> **[5:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=348)** This in many ways is the core issue of the entire course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (2), abstract (1), this, (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Env Vars:** pdf (1)
> **Tools:** notion (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)
> **Analogies:** for instance (1)

#### Data reduction
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=0)** - [Instructor] Okay, I wanna give you a brief introduction to a big topic, data reduction.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=6)** You'll hear other phrases for this as well, like feature selection.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=10)** So, what is it?
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=12)** It's the removal of poor and redundant predictors before modeling.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=18)** There's yet another phrase that gets at this, sometimes you'll hear people talking about optimal subsets.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=24)** So, you've got your pool of variables and are you choosing the right ones?
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=29)** Now, as you know, algorithms differ in how they tackle this.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=33)** Some tackle it directly and others don't, which raises the following issue.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=41)** How much do we have to worry about this?
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=43)** Aren't the algorithms taking care of it?
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=46)** After all, we know that trees and stepwise logistic as well as stepwise discriminate don't use all the variables.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=53)** They're supposedly picking the best ones.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=56)** And what about a technique like neural nets?
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=58)** Now, that uses all the variables, so you would think this is more of an issue, perhaps, but if you think it through, what a lot of folks will say in response is, the neural nets can simply assign near-zero weight, and you may have encountered that some implementations have extra features for this.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=78)** For instance, there's nothing about the k-nearest neighbors algorithm per se that addresses feature reduction, but the particular implementation that I use in my software package of choice has a little check box that I can request that will winnow the attributes down and perform feature selection before the model runs.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=101)** So, how much of this is our problem?
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=104)** Why is it a concern?
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=107)** Well, no algorithm to date is immune to modeling noise.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=113)** And what happens when you model noise?
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=115)** Well, the noise in the train dataset and the noise in the test dataset aren't the same, so the way that you're gonna know that you're amplifying the noise in your data is when the performance on the train dataset is looking good, but then you get that big drop in performance between the train dataset and the test dataset.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=137)** That's because, we hope, that the signal in our train data and our signal in the test data are the same, but the noise in those two datasets aren't the same.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=146)** That's gonna be a clue to us that our model is not going to generalize well to future datasets, and clearly that's a problem 'cause the whole point of building the model is to generalize it to future datasets.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=160)** So, this is a real challenge and even after years, or in my case, 20 years of doing this, you never really feel that you're doing it perfectly.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=170)** You just add to your bag of tricks.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=174)** So, what are some things that you can do?
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=177)** First, I know that I've tried to develop a discipline of always running all the bivariates, even when I have a large dataset.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=185)** Now, bi here meaning two.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=187)** It's pretty straightforward what this is.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=189)** You're looking at every pair of variables, your target variable, your binary target, and each and every one of your inputs, and you're looking at those individually.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=201)** You can look at them visually.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=203)** If you are a statistics person, you can run descriptive statistics on them or even inferential statistics, but one way or another, try to take the time to do that.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=211)** And I really do mean that if I have 500 features, I'm trying to look at each of those features against the target individually outside the context of a modeling algorithm.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=222)** It's a lot of work, but I've found over the years that it pays off.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=225)** The other thing that you can do is you can use one of the modeling algorithms as a kind of screen before you model.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=234)** So, let's say for instance that you are concerned that a neural network that you're building is encountering this problem.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=243)** You could build a tree and then identify just those variables that the tree utilized and then feed only those variables to the neural net.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=253)** You can do this almost every which way, almost any modeling algorithm could be turned into a screen to be used before another one.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=263)** Another thing you can do is try to identify redundancy in your data.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=267)** You can do this with a correlation matrix.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=270)** If you happen to be familiar with some of the fancier techniques, you could try something like factor analysis or principal components analysis.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=278)** What you're looking for, everybody, is two variables among your inputs that are pretty much giving you the same information.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=286)** So, for instance, we encountered earlier in the course height, weight, and body mass index.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=293)** You probably wouldn't keep height and weight once you created body mass index because the combination of those three would have too much redundancy.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=305)** Weight is not redundant with height, they're correlated, certainly, but they're different enough that you would keep them in, but you probably wouldn't keep all three.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=314)** Again, there's as much art as science to this, but that redundancy will cause a problem in all of these algorithms.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=323)** It will manifest itself in different ways, and sometimes you have to really master the algorithm before you can spot the damage that it's causing, but redundancy is a problem in them all.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=334)** And some implementations have dedicated features as we've mentioned.
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=338)** Here's my advice when this is the case.
>
> **[5:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=341)** Try building the model with this feature turned on and also with this feature turned off.
>
> **[5:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=349)** Finally, although it's a bit advanced, one of my favorite tricks is to use boosting.
>
> **[5:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=355)** Picture this now, everybody.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=357)** You build a single tree and maybe it's chosen 35 variables out of 100.
>
> **[6:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=363)** Go ahead and build 500 trees and find out if there are any variables that were used in none of those 500 trees or any variables that were used in all of those 500 trees.
>
> **[6:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=377)** That is one of my favorite tricks.
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=379)** I wanna leave you with the following thought.
>
> **[6:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=383)** Modeling challenges, and this is not just feature selection, but all modeling challenges are best addressed empirically.
>
> **[6:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=392)** So, the best way to tackle data reduction or a whole host of other problems is to try it numerous different ways, fight through the modeling process through experimentation and persistence.
>
> **[6:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=406)** There is no one best way, you have to determine empirically what best fits for your dataset and for your project.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), this. (2), case, (1), let (1), for, (1)
> **Analogies:** for instance (3), picture (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### AutoML
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=0)** - [Instructor] Once you've started to use the various algorithms that we've discussed in this course, you're going to discover that once you set up the problem for one of these binary classification algorithms, you're also going to be set up for several others.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=14)** Many software tools have taken advantage of this with AutoML features, and you're looking at one right now.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=21)** This is the so-called Auto Classifier and IBM SPSS Modeler.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=26)** You'll notice there are 17 modeling algorithms that are all using the same setup.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=32)** So if I click on Fields here, it's saying using predefined roles, meaning that all of them are going to use the same fields, and under Modeling is various settings, like whether we're building on the training or the test partition, or rather whether we're ranking on the training or test partition.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=49)** That's an important distinction.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=51)** We want to build on the training, but we want to rank or test on the testing.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=57)** But then again, here in the Expert tab, this is where the action is.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=59)** We have C5, we have Logistic, we have Bayesian, we have KNN, we have Random Trees, we have XGBoost.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=67)** We have a whole bunch of these algorithms all using the same setup, so we can run this, and it will rank them all with one setting.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=77)** So I often say that during the modeling phase, I'll go on long walks or take long breaks, and this is why, because you're setting up the problem, and then you have to let the computer take its turn.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=90)** But there are lots of software packages that do this, so let me show you another.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=94)** So here we are in KNIME.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=97)** That's spelled K-N-I-M-E.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=102)** And here, we have not quite as many models, but a bunch, and we can see that we've set up the variables up at the top, and we have models to train.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=111)** We have Naive Bayes, we have Logistic Regression, we have Gradient Boosted Trees.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=115)** It's not a surprise that all of these platforms will have a similar list.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=120)** They'll sometimes have a mix of ones that they're pulling in from Python and proprietary ones, but again, the list will be similar, and the concept is similar.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=128)** We set it up once.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=129)** We've run it a whole bunch of times.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=131)** We let the computer do its job, and that is a wonderful way to leverage not only the computer's ability to perform these algorithms, but to leverage what you've learned in this course in terms of knowing about these different algorithms, and then letting the data tell you which of these many algorithms is the best fit for your data in any given circumstance.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=153)** So no matter what software package you use, you'll have something like this that will allow you to run a whole bunch of models all at once.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=165)** And if you want to explore how this impacts the machine learning lifecycle, I've actually recorded an entire course on AutoML that's right here in the library.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2)
> **Prerequisites:** set up (3), setup (2)
> **Env Vars:** ibm (1), spss (1), knn (1), knime (1)
> **CLI Commands:** python (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980&t=0)** - [Instructor] So what's next on your machine learning journey?
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980&t=4)** It's always best to practice as soon as you've learned a new skill.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980&t=8)** So go to your machine learning tool of choice, grab a data set, and try the algorithms that were new to you.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980&t=15)** But what if you haven't learned a machine learning platform yet?
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980&t=20)** I'm a big fan of starting with Codeless machine learning first.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980&t=25)** Certainly if you want to learn R and Python, there are lots of great options in the library.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980&t=31)** But if you want to give Codeless a try, there are two learning paths for you.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980&t=37)** There's a KNIME learning path and there's an IBM SPSS learning path.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980&t=43)** They both start with basic operations and then move on to the kinds of algorithms that we've discussed.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980&t=48)** For instance, there are decision tree courses in both learning paths.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980&t=54)** Whichever path you choose, I hope you'll let me know how you are progressing by posting your progress, following me on LinkedIn, and maybe even attending one of my office hours.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980&t=65)** And if you see me at a conference, I hope you'll say hi.

> [!info]- Semantic Content
>
> **Env Vars:** knime (1), ibm (1), spss (1)
> **Code Keywords:** try, (1), let (1)
> **CLI Commands:** python (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Keith McCormick]]

## Skills Covered

- Machine Learning
- Data Classification
- Artificial Intelligence (AI)

## Path Context

### In [[Develop Your SPSS Skills]]
← [[Machine Learning & AI Foundations- Linear Regression]] | **3 of 6** | [[Machine Learning and AI Foundations- Decision Trees with SPSS]] →

### In [[Data Science Professional Certificate by KNIME]]
← [[Introduction To Artificial Intelligence]] | **4 of 6** | [[Generative AI- Introduction to Large Language Models]] →

## Part of

- [[Data Science Professional Certificate by KNIME]]

## Appears In

- [[Develop Your SPSS Skills]]
- [[Data Science Professional Certificate by KNIME]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning & AI Foundations- Linear Regression]] — Artificial Intelligence (AI), Machine Learning
- [[Advanced Python in Excel- Machine Learning]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)