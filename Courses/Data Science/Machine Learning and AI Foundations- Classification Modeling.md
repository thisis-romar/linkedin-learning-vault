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
created: 2026-05-03
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
  - [Classification problems in machine learning](#classification-problems-in-machine-learning)
  - [What you should know](#what-you-should-know)
  - [Defining terms](#defining-terms)
- [**1. The Big Picture: Defining Your Classification Strategy**](#1-the-big-picture-defining-your-classification-strategy) (6 videos)
  - [The importance of binary classification](#the-importance-of-binary-classification)
  - [Binary vs. multinomial](#binary-vs-multinomial)
  - [So-called “black box” techniques](#so-called-black-box-techniques)
  - [One task, many algorithms](#one-task-many-algorithms)
  - [Statistics vs. machine learning](#statistics-vs-machine-learning)
  - [Model assessment vs. business evaluation](#model-assessment-vs-business-evaluation)
- [**2. How Do I Choose a "Winner"?**](#2-how-do-i-choose-a-winner) (4 videos)
  - [Training and test partitions](#training-and-test-partitions)
  - [Lift Charts](#lift-charts)
  - [Gains tables](#gains-tables)
  - [Confusion matrix](#confusion-matrix)
- [**3. Algorithms on Parade**](#3-algorithms-on-parade) (14 videos)
  - [Overview](#overview)
  - [Discriminant with three categories](#discriminant-with-three-categories)
  - [Discriminant with two categories](#discriminant-with-two-categories)
  - [Stepwise discriminant](#stepwise-discriminant)
  - [Logistic regression](#logistic-regression)
  - [Stepwise logistic regression](#stepwise-logistic-regression)
  - [Decision Trees](#decision-trees)
  - [KNN](#knn)
  - [Linear SVM](#linear-svm)
  - [Neural nets](#neural-nets)
  - [Bayesian networks](#bayesian-networks)
  - [Heterogenous ensembles](#heterogenous-ensembles)
  - [Bagging and random forest](#bagging-and-random-forest)
  - [Boosting and XGBoost](#boosting-and-xgboost)
- [**4. Common Modeling Challenges**](#4-common-modeling-challenges) (6 videos)
  - [Imbalanced target categories](#imbalanced-target-categories)
  - [Interactions](#interactions)
  - [Missing data](#missing-data)
  - [Bias-variance trade-off and overfitting](#bias-variance-trade-off-and-overfitting)
  - [Data reduction](#data-reduction)
  - [AutoML](#automl)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Classification problems in machine learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/classification-problems-in-machine-learning-20201180?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/classification-problems-in-machine-learning-20201180?u=76281980&t=0)** - [Keith] Why classification? Nothing is more fundamental to what we do in [[Predictive Analytics]] than binary classification. Will a customer make a purchase or not? Was the claim fraudulent or not? Does a patient have a particular illness or not? In this course, we'll go on a journey together to explore a dozen different algorithmic approaches for building these models. I'm Keith McCormick, and in more than 20 years of building machine learning models, I've been involved in many kinds of projects. We'll have a lot to cover, so let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Predictive Analytics]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [keith] (1)

#### [What you should know](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/what-you-should-know?u=76281980&t=1)** - Let's talk about some things you should know before watching this course. One of the things I'm really excited about is that this course has been designed as a gateway course. A gateway to all kinds of machine learning topics and [[Data Science]] more broadly. Specifically we're going to be building predictive models. Also its software agnostic so I wanna welcome all of you to the course whether or not you happen to use a commercial package like SAS or SPSS or a data science language like R or [[Python (Programming Language)|Python]] or one of the numerous open source options like Weka or RapidMiner or [[Knime]] or others. Everyone can benefit from this course. Also I want to mention that if you really want a big-picture view and pull the lens back even more, my Essential Elements of [[Predictive Analytics]] and [[Data Mining]] is that kind of course. However you absolutely could watch this course followed by that one or start with Essential Elements and watch this one. Neither of them have prerequisites so they're an interesting pair but you can watch them in either order. Finally I will be mentioning statistical concepts. Terms like statistical significance. Also a couple of the techniques do draw upon regression. However you don't have to take a deep dive into regression to understand what I'm discussing in this course. You may be tempted to explore [[Statistics]] and regression in more detail perhaps after taking this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (2), [[Python (Programming Language)|Python]] (1), [[Knime]] (1), [[Predictive Analytics]] (1), [[Data Mining]] (1)
> **Env Vars:** sas (1), spss (1)
> **CLI Commands:** python (1)
> **Analogies:** picture (1)
> **Speakers:** - let (1)

#### [Defining terms](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=1)** - [Narrator] There's a couple of terms that come up so frequently in the course I want to take a moment to define them. The first thing I want to talk about is level of measurement. You won't hear me use that exact phrase very often, but what it refers to is types of variables and the way it's typically described is that there's three. The first are nominal variables. These are separate and distinct categories that are not meaningfully ranked. Ordinal variables are separate and distinct categories that are meaningfully ranked, like freshman, sophomore, junior, senior, or that kind of thing. Low, medium, high risk. For the most part, we're gonna be talking about nominal and ordinal collectively as categorical variables. Then there's scale variables. There's a lot of similar terms for scale. Sometimes folks call them continuous, sometimes folks call them interval. There's a slightly different term, ratio, that sometimes folks use. As far as we're concerned for this course, all of those are interchangeable. Scale, interval, continuous, ratio for us are basically the same. Finally, although the gentlemen Steven's who originally came up with this taxonomy didn't use this term, there's one that's gonna be really important for us. The notion of a binary. You might think of binaries by another name, a bullion. But it's really just a categorical variable with exactly two categories. True, false, yes, no, on, off.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/defining-terms?u=76281980&t=97)** These are all binaries. Okay, in addition to level of measurement, let's also talk about binary classification. So there it is. There's that term again. Binary classification techniques, which is really what this entire course is about, is when you're trying to build a predictive model and what you're trying to predict has only two categories. So, classic examples, churn, not churn. Respond to an email campaign, not respond to an email campaign. A machine in predictive maintenance, let's say, fails or doesn't fail. So binary classification is really at the heart of this course. Finally, when binary classification models are built, they make predictions, but they make predictions in a particular form. For instance, we're gonna be seeing the Titanic data set and folks on the ship, of course, either survived or some unfortunately died. So a propensity score would essentially be a percentage chance, or propensity, for surviving. So if you structure the problem in that way, scores near 1.0 would be a high propensity to survive and scores near 0 would be a low propensity to survive. That's the way virtually all binary classification models are set up, using propensity scores.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Versions:** 1.0 (1)
> **Tools:** notion (1)
> **Definitions:** refers to (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)


### 1. The Big Picture: Defining Your Classification Strategy

[↑ Back to Table of Contents](#table-of-contents)

#### [The importance of binary classification](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=1)** - [Instructor] Let's start by dispelling two myths. For many, there's an implicit assumption that there's one best algorithmic approach for each use case, and if you simply define the problem carefully, you'll know which algorithm to use. As we'll see, there's a one-to-many relationship between problems and potential solutions. Just in this short discussion of classification techniques, we'll explore a dozen different approaches to a single-use case, binary classification. Another myth is that the goal of [[Predictive Analytics]] projects are to produce a single predictive model. Real-world projects always have multiple models performing different functions and often sending information back and forth to each other, working together as a decision management system. In virtually every instance, at least one of these models is a binary classifier. In fact, in my 20 years of doing this kind of work, it's always been present on the projects I've been a part of. Why? Well, the ultimate goal of a predictive analytics project is to drive decisions, and the easiest way to do that is to have at least one of the models tell you when to take action and when not to. These two themes and many others are explored in my course Essential Elements of Predictive Analytics and [[Data Mining]]. So for now, we'll just accept the following premise. Binary classifiers play an important role
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/the-importance-of-binary-classification?u=76281980&t=94)** in virtually every project, so understanding them constitutes a critical part in anyone's professional development in predictive analytics, [[Data Science]], and data mining.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Predictive Analytics]] (4), [[Data Mining]] (2), [[Data Science]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Binary vs. multinomial](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=1)** - [Instructor] I always caution folks against trying to predict into more than two categories. It would be an oversimplification to suggest that you should never do it, but it is an inherently advanced modeling challenge. First, one's a priori estimate of accuracy is lower "A priori" is a Latin phrase which means, "Without the benefit of experience." The phrase is frequently used in [[Statistics]]. If half of our target cases are true, and the other half are false, our chances of predicting that correctly without a model is 50%. If we're predicting into three, or four, or five categories our chances of guessing correctly without a model is steadily going down. If our chance is only 20%, how good a job can we expect to do? Even if we double our chances which is pretty impressive, that brings us to 40% right and 60% wrong. Predicting into more than a few is probably a fool's errand. Perhaps you could get a way with about a eight in rare circumstances, but a multiple category in the target just won't be good enough to solve whatever business challenge inspired the model in the first place. One common reason that I've done it over the years is predicting cluster membership after performing cluster analysis. This is a interesting exception that I explore in my cluster analysis course which can be found in the library.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=94)** If that reason wasn't enough, there's another. The model gets considerably more complex, sometimes dramatically so. For instance, as we'll see in a later example, discriminant analysis with two categories requires just one linear formula. Three categories however, requires two separate formulas with all of the inputs; double the complexity, and making the interpretation much more difficult. Four categories require three different formulas tripling the complexity. So what do you do if it seems that three, or more categories best addresses the business problem? For instance, churn; very frequently when folks are working in churn, they divide their customers; their cases into three categories: loyal customers, voluntary churns, meaning they left your company in favor of someone else, or involuntary churns; usually because they didn't pay the bill. That's three categories, and it seems like the richest solution. However, you can think of this as a binary. You could divide into these two: loyal, and both kinds of churn. Or what I typically prefer: loyal, voluntary turn, and simply remove the involuntary churns, because you probably have a different process
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/binary-vs-multinomial?u=76281980&t=186)** in place for them; namely a collections process. Thew bottom line is: And if you're new to [[Predictive Analytics]], recognize you are taking on a challenge that's difficult even for the experts. So go very gingerly into any situation where you think need you need more than two categories on the target variable. For this reason, with only one exception, we will be performing binary classification in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Predictive Analytics]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for instance (2)
> **Best Practices:** you should never (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [So-called “black box” techniques](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=1)** - [Instructor] The modeling approaches that we'll be discussing very greatly and how transparent they are during validation and interpretation. This raises the issue of the so-called black box techniques. A famous example is [[Artificial Neural Networks]]. The very same complexities that often allow for very accurate models can prevent you from sharing a story about the model. Sometimes something as basic as a key driver analysis. Just simply a list of predictors in order of importance can seem elusive. Another easy to imagine example is an ensemble of trees. A single decision tree is among the most transparent, but a so-called random forest is really a collection of trees. Essentially an average of 100 or even 1,000 models which then becomes difficult or impossible to interpret. The truth is that virtually all of these techniques are in a continuum from transparent to opaque. Perhaps the most transparent that we will see in this course is [[Logistic Regression]], where all of the inputs can be ranked from most to least important. In addition to this advantage, each input has its own test of statistical significance, and each input can be measured
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/so-called-black-box-techniques?u=76281980&t=93)** in terms of the magnitude of its effect on the outcome. So why is this important? It's critical to determine from the manager or internal client that's requesting the model whether we're emphasizing explanation or prediction. Galit Shmueli who's an academic has written effectively on this dichotomy, and I urge you to seek out her discussion of this. It can get a bit technical and a bit academic, but the issue is an important one, and those two goals can conflict with each other to a degree. For instance, if explanation is paramount, then black box techniques might be off our list completely. They simply might not be an option to us. This is one of the reasons that some of the older techniques, statistical techniques for instance, some may even consider them old school, stick around. They do because they're often the most transparent. They persist because they fit this need, and sometimes frankly they turn out to be the best option. So we're gonna be exploring both machine learning techniques and techniques that come from the statistical tradition, and we're gonna be learning that we can't always know in advance which one is gonna be the best fit for our project until we try.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Neural Networks]] (1), [[Logistic Regression]] (1)
> **Analogies:** for instance (2), imagine (1)
> **Definitions:** is an  (2)
> **Speakers:** - [instructor] (1)

#### [One task, many algorithms](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=1)** - [Instructor] In mathematics and computer science, an algorithm is an unambiguous specification of how to solve a class of problems. In this course, the class of problems is binary classification, and there's a remarkable diversity of approaches. I've always been a fan of Tom Khabaza's 9 Laws of [[Data Mining]], a topic that I discuss at length in my essential elements course. The fourth law, no free lunch for the data miner, states the following. "The right model for a given application can only be discovered by experiment." So when playing this game, trial and error is going to be our method. It's at the core of doing binary classification well. This is really the premise of the course. Competency at binary classification equals, competency at all of the multiple [[Algorithms]] that are capable of binary classification. And in addition, you have to become competent at using these multiple approaches, both individually and together. In a book called The Master Algorithm, Pedro Demingos spins out this argument in book length. Now he divides machine learning into a handful of theoretical traditions, explains their histories, their strengths,
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/one-task-many-algorithms?u=76281980&t=96)** and their potential weaknesses. It's really almost a philosophy of machine learning. He even shows how some of the theoreticians, don't approve very much of their colleagues competing approaches, and that they can be critical of each other, not unlike the history of philosophy. So it's a very theoretical work, but it's an interesting exploration of some of the same ideas. In fact, in the final chapter, he openly imagines how one day there might be a single algorithm that combines the best of all the traditions, and then we wouldn't have to try all of them using this trial and error approach any more. But alas, that day has not yet come. So in this course we'll focus on these different algorithms, and we'll discuss them conceptually, but with a focus on how to put them to practical use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Data Mining]] (1)
> **Documentation:** specification (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Statistics vs. machine learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=1)** - [Instructor] So let's talk some more about statistical techniques and contrast them with machine learning techniques. Some folks, especially if they are coming from computer science backgrounds, and/or they might be new to the field, wonder if it makes sense to use these older techniques that come from the statistical tradition. It's not an irrational reaction. These techniques are decades old and why would we have invented newer techniques if the old techniques were working? Also, a lot of them have complex rules, and seem hard to learn. There are several reasons why you should keep the classification [[Algorithms]] that come from the statistical tradition on the table. First, predictive analytic software vendors consistently keep them in their work benches. And the data scientists that use them continue to use these techniques. So our colleagues are voting with their feet, and there must be a reason. In short, these algorithms continue to work. Second, as we've seen, they tend to be among the more transparent of the algorithms and that can be important, depending on the project. Also, perhaps ironically, they're remarkably scalable. The techniques that come from computer science tend to be brute force. And they're impressive accuracy also comes from this fact. Statistical techniques are more algebraic in nature.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/statistics-vs-machine-learning?u=76281980&t=96)** Solving equations, they can run very fast on huge data sets. It would be a mistake to walk away from them. Finally, it's not uncommon to mix and match machine learning and statistical techniques in ensembles. And clearly, ensembles are a machine learning technique. So even if [[Statistics]] can seem difficult at times, if you really want to be a pro at binary classification you have to learn both, statistical and machine learning techniques. And that means learning some statistics. There are some great courses on statistics in the library. Find one that features your software tool of choice. Whether it be R or [[Python (Programming Language)|Python]] or a commercial package or maybe one of the open source [[Predictive Analytics]] workbenches. Although the topic is regression and not specifically classification, my regression course in the library covers some of the necessary foundation material that you'll need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3), [[Statistics]] (3), [[Python (Programming Language)|Python]] (1), [[Predictive Analytics]] (1)
> **CLI Commands:** find (1), python (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Model assessment vs. business evaluation](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/model-assessment-vs-business-evaluation?u=76281980&t=1)** - [Instructor] There are two different aspects to evaluating the performance of your models, and they're both important. So I wanna reference the cross-industry standard process for [[Data Mining]]. It's a document that was written about 20 years ago, and it's a powerful way to help you organize your thinking and organize your work when doing [[Predictive Analytics]] projects. If you wanna read it, the most reliable way is to simply go down to the references section of the [[CRISP-DM]] Wikipedia page and you can find the document. In particular, I wanna reference the following diagram inside the document. Model assessment is ranking your models on technical criteria. Criteria like lift and the performance in a confusion matrix. And we're gonna be covering multiple methods of model assessment in this course. Something that we won't be covering in this course is evaluation. Evaluation, really a kind of business evaluation, is looking at that model performance through the lens of things like return on investment, key performance indicators, and management criteria. So we won't be discussing business evaluation here. I do discuss it in my Essential Elements course. But in this course we're gonna be sticking to technical criteria model assessment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Mining]] (1), [[Predictive Analytics]] (1), [[CRISP-DM]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** crisp (1)
> **Speakers:** - [instructor] (1)


### 2. How Do I Choose a "Winner"?

[↑ Back to Table of Contents](#table-of-contents)

#### [Training and test partitions](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=1)** - [Narrator] Okay, now we're gonna talk about a critical concept and you're gonna want to master how to do this in your software of choice. But at a high level, the basics are very straight forward. What you're gonna do is take the historical data, on which you're gonna build the model, and you must divide that data, or partition it, we say, into training data and testing data. What we all learn to do, initially, when we first get accustomed to this, is that we do a 50% train and a 50% test. These partitions are chosen at random. What you'll notice, however, when you're watching others perform this task, is that sometimes the numbers won't be 50/50. The general rule is straight forward, and it is this. When your sample size starts to get small, you increase the percentage on the train and reduce the percentage on the test. Because it still has to add up to 100%, so you'll often see 70/30 or 80/20 and these are not unusual choices for training and testing partitions. Okay, now, some advice that you'll occasionally get is that you should have a third one. And when this advice is given, normally it's recommended that you have 50% train, 25% test, and this new one, 25% validation. So, what's going on here? Well during the modeling phase, you're developing the models on the training data. That is the only data that gets exposed to the modeling [[Algorithms]].
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/training-and-test-partitions?u=76281980&t=93)** You are then, iteratively checking the modeling performance on the testing data using those technical metrics, like overall accuracy, lift, and so on, there are several. Then what happens, is after trying many attempts, a lot of folks encourage you as a final, double check, to check that accuracy once more against the validation data that's been set aside all this time. In order to help you understand how all these moving parts work together, I usually suggest a slightly different approach. That is, you can take your training data, build the models, check performance using technical measures against that test data, and then wait until the evaluation phase. Data will have accumulated during the course of the project, and then you can make a double check for technical measures like accuracy, but also check things like return on investment and your KPI's, as we've learned, you should be doing during the evaluation phase. As long as the project goes on for more than a few weeks or more than a couple of months, you'll have plenty of that recent data in order to perform this double check. For the [[Representational State Transfer (REST)|rest]] of the course, we're gonna be focused only on training data and testing data. But we're gonna be referring to it through out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Best Practices:** general rule (1), recommended (1)
> **CLI Commands:** make (1)
> **Env Vars:** kpi (1)
> **Speakers:** - [narrator] (1)

#### [Lift Charts](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=1)** - [Instructor] A very popular way to visualize modeling performance is a lift chart. In fact, the whole concept of lift is a popular way to assess models, and there's all kinds of variations on this theme. There's gains charts. You can plot return on investment. But we're gonna focus on lift. So let's talk about how this is interpreted. This plot is showing relative risk for diabetes. And if we look at the left-hand side, in particular, where I'm indicating, we see that around the 15th percentile, there's a group of folks whose diabetes risk is almost eight times average. So let's say, for the sake of argument, that we were gonna send out some outpatient care. And these folks were gonna go to individuals' homes, and we wanted to allocate that expensive resource as efficiently as possible. If we sent it out to 15% of patients, that whole group of patients would represent elevated risk. If we had a little bit more funding and we could reach out to help more folks, we could consider sending folks out to everybody in the 20th percentile. Now, the cumulative lift at that point would be substantially lower, but it would still be more than four times average. Now, as you can see on the far right, eventually the lines meet,
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/lift-charts?u=76281980&t=94)** indicating that if we sent the outpatient care out to everyone, that group would have a cumulative lift of one, indicating that the whole group, collectively, has average risk, which, of course, makes sense.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Gains tables](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=1)** - [Instructor] Okay, let's talk about the concept of a gains table, another way of assessing if your model has been doing a good job. Now, all of you should be able to generate this gains table sometimes, software will make it really easy for you as a feature, as part of a software. But all you really need is the probabilities and you can do deciles or you can do quintiles if you want. I have done deciles here. And we're looking at the different probabilities within those deciles. So first let me note that we've got a total sample size of 714. I've used the technique that throws out missing values. I have just a handful that's been discarded and I have all of my data. Not just train or test but all of it. You may wanna generate a separate gains table for the train data as well as the test data. But this one has it all. And now, take a look. I've got an overall [[Probability]] of 0.41, if I round up. And this is a survival rate because this is the titanic data set. So I have an overall survival among these 714 cases of 41%. But take a look. In the top probability, I have a survival rate of just five and a half percent. In contrast at the opposite end of my gains table, I have a survival rate of 93%. There's a dramatic difference, folks, between 5% and 93%. And this indicates that my model is working.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/gains-tables?u=76281980&t=95)** If I'm trying to find the survivors, I know where to look. If I wanna find the folks that have a low probability of survival, I know where to find them. One final comment, if I was doing something like campaign response and I was doing marketing and not the titanic data set, I might add another column, where I look at things like prophet per mailing, or total campaign response and so on. I might add some dollar amount to a gains table like this. So it's a very effective way of assessing your model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (3)
> **CLI Commands:** find (3), make (1)
> **Versions:** 0.41 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Confusion matrix](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=1)** - [Instructor] Okay, let's talk about he confusion matrix. Now folks will joke about the name but, the whole idea behind the name confusion matrix is where the model is making errors. And it's one of the most fundamental techniques we have for assessing our model performance. So let's take a look at the first thing you should probably look at, which is overall performance on the train versus overall performance on the test. Here, overall performance on the train is 79.8%. Overall performance on the test data is 74.2. That's a gap of a bit more than 5% which is just a hair outside the comfort zone. Meaning that, we fear that the model isn't all that stable. It's performance on unseen data just isn't as strong as the performance on the data that we fed to the modeling algorithm. It's a close call in this case but it's at that borderline and it's kind of on the wrong side of the border. We want it to be within 5%. So let's now talk about the wealth of data that's hiding in here but focusing only on the test data. That's the portion of the data that we really care about for modeling assessment. And we see in terms of figuring out who died, we're doing great. 97 out of 98 times we're getting that right. The model said they would die,
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=94)** and indeed, they did. So the model performance there is very good. Here, not as well. Here, we're getting 35 right but 45 wrong. So, overall performance here is not nearly as good. And this is not uncommon in a model. And we'll be seeing things that you can do when you get this kind of performance in your model. By way of preview, it often indicates the data is not imbalanced. Meaning that we have more deaths than survivors and that's gonna, perhaps, cause us to perform better in one group than in the other. Let's look at the remaining information. Now we're really gonna zero in on what the model is getting wrong. So as we've seen only one mistake out of 98 here. This is the one person, where the model predicted survival, but in fact, they died. You see predicted is a one, but observed is a zero. And then finally, we've seen his number once before, here's the group where the model said that they would not survive, that they would die, but in fact they did. Now, you can get much deeper into this than we're getting into it in this video. You can get into the language of false positives and false negatives. There's even fancier language like specificity and sensitivity. We won't use that terminology in this course. We're gonna be focused on stability,
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/confusion-matrix?u=76281980&t=188)** comparing those two overall accuracies and then the other numbers that we just reviewed. And we're gonna be using this information when we look at all the [[Algorithms]] in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Versions:** 79.8 (1), 74.2 (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 3. Algorithms on Parade

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=1)** - [Instructor] Okay, we're about to discuss about a dozen different [[Algorithms]] for binary classification. Now, in the section after our discussion of the algorithms, we're gonna talk about some common problems. I want you to be aware of what these problems are so that you can be listening for these issues as you learn about the algorithms. In fact, you may want to watch the algorithms section now, then see the section on the common problems, and then return and listen to the lectures on the algorithms a second time. So here's some of the things that we'll be seeing in the next section that you should be listening for in this section. I won't always make explicit reference to them, but the algorithms will overlap with these issues. One is whether or not the variables contribute to the model individually or if they also interact. Another will be how it handles missing data. We frequently have missing data, and these algorithms will handle that all in a different way. Also, overfitting, we want our models to be just complex enough. Not complex enough, and we have poor accuracy. Too complex, and then it doesn't fit new data well. Finally, feature selection, how does it go about determining which variables to use and how important those variables will be? Now again, I won't always make explicit reference
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/overview?u=76281980&t=96)** to each of these issues when we discuss each algorithm. Focus on what the algorithms are doing conceptually, but here are some specific things to attend to. Does it use all or just some of the input variables? Does it use all or just some of the case data? When you're listening to me describe the algorithms, reflect on situations where they might perform well and situations where they might perform poorly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (9)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Discriminant with three categories](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=1)** - [Instructor] Okay, for our first algorithm we're going to talk about linear discriminant analysis. Now as the name implies, we're trying to talk about the equation of a line, but here we're focused on trying to separate two groups. We want one group at one end of the line, and another group at the other end of the line. Now while we're discussing this, we're gonna revisit a topic that we talked about briefly earlier. And that is that when we're trying to predict into three categories, it can complicate things more than we anticipate. So we'll start with two, but during this video we're also gonna discuss the challenges of trying to predict into three. First, let's picture what we're trying to do. We're looking at a data set that's actually a famous one that's got the dimensions of petal width and petal length for a group of flowers, and we can imagine here that we could easily add a line that trends through these data points. Let's take a moment though to talk just a little bit about the history of this famous data set. This data set was used by Sir Ronald Fisher way back in 1936 to explain our topic, linear discriminant analysis. I mention it in part, one, because it's widely available. It's used for a lot of demonstrations, and you'll sometimes see it in demonstrations of unsupervised learning or cluster analysis. But this data set is really about discriminant analysis, which of course is our topic, [[Supervised Learning]]
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=95)** into two or more categories. So let's return to the data set and find out how this works. Here we are, we fit a regression line passing through these points, so imagine now that we're trying to predict petal length using petal width, a classic [[Linear Regression]] problem. We're doing this to underscore how similar linear discriminant analysis is to regression. So if you really want to be good at this technique, you've got to be strong in your regression fundamentals, not just the notion of a line, but also some of the mathematical assumptions, like normality, and topics like multicollinearity. If regression is a topic that you're a little bit rusty on or maybe it's new to you, there are a lot of courses in the library on this topic including my own. So let's talk briefly about this formula because this linear regression formula that you see is gonna be almost identical to the formula we're gonna use in linear discriminant analysis. So the technique is similar, but the goals are different. So we can see here that the equation is Y equals one and a little bit more, plus two times X. The general form is Y equals the constant or Y-intercept. Sometimes you'll see beta zero, but here we're gonna call it the constant, plus beta one times X one. And X one is gonna be our variables, petal width, petal length, and so on. So take a look. This is what we're trying to do in discriminant analysis now. We now have a three-dimensional view of our data, and we can see two clouds of points.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=190)** The red group represents one species of flower, and the blue group represents another species of flower. And how can we come up with a predictive model that will consistently tell us when we score new data, which species a new case is? Well, we can find a line, that not passes through the points but rather separates the points. Then we have to identify the centroids, and that line is gonna be our function one. Now with only two categories, all we need is one function. So what about that other topic? Why is it so much more complicated to have three categories? Let's investigate. If we've got three categories, we have three centroids. That in and of itself is no big deal, but we no longer have a way with just one function to separate the three groups because as you can see, they're not all in a row. And frankly, they'll never be, especially in multi-dimensional space. If we've got three groups, we're gonna have to fit two functions. Here's what it looks like in the actual resulting formula. Instead of one function, we now have two. Both functions have a constant, or a Y-intercept, and each function has a set of beta coefficients, so beta one is associated with petal width. That's the 2.8. We also have a beta two, and a beta three, and so on. So it's just the same formula, just more of it. And then also notice we have to have a whole second formula to represent a second function.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-three-categories?u=76281980&t=286)** We didn't have a second function in that 3D scatter plot, but for three categories, we would need one. Finally, there's another complication we have to talk about. We've got our three centroids, that's not the problem. The problem is to think again about those two functions. For any given variable, let's say sepal width. On function one, it's got a negative beta coefficient. On function two, it has a positive beta coefficient. So it makes it hard to know in this multi-dimensional space. We're going up one line, and we're going down another, and we've got three centroids, and folks, we've only got three or four dimensions here. What if we had 10, or 15, or 20 input variables? So it gets a lot more complicated than it seems at first. So watch out for those categorical targets that have more than two categories.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (2), [[Supervised Learning]] (1)
> **Analogies:** imagine (2), picture (1)
> **CLI Commands:** find (2)
> **Versions:** 2.8 (1)
> **Cross-References:** we talked about (1)
> **Tools:** notion (1)
> **Definitions:** is a  (1)
> **Warnings:** watch out (1)

#### [Discriminant with two categories](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=1)** - [Instructor] Okay, let's discuss a couple of technical issues to attend to while you're watching me demonstrate Discriminant Analysis on the Titanic data set. First, typcically, Discriminant Analysis will operate under listwise deletion, which means if anything's missing, the entire row is dropped. You don't know their age, you're gonna drop the case. You don't know their fare, that row is dropped. Some implementations will impute, meaning that they're gonna replace the missing data with some estimate. You don't know their age? You can replace with an average of age. There are also fancier versions of imputation. Next, all inputs are used typically in linear Discriminant Analysis. However, there is a technique, which we're gonna see, called Stepwise Discriminant Analysis, where it will choose the variables for you. Finally, and this is important and might even be surprising, remember that we're talking about linear Discriminant Analysis, this is for scale variables only. Your categorical variables will have to be transformed, as we're about to see. So the variables that I've chosen out of the Titanic data set are age, passenger class, embarked, and gender. Only age is a scale variable. All of the other three have to be transformed. The transformation is called Dummy Coding. It's a kind of contrast coding. If it's a new topic to you, it's usually discussed in more depth in discussions of [[Linear Regression]].
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=96)** My own course in the library talks about it in some depth, but I'm about to tell you all you need for the current demonstration. We take a categorical variable like passenger class. First class, second class, third class. The first class passengers get a true on passenger class equals one. They get a false otherwise. The second class passengers get a true on passenger class two, and get a false otherwise. And those third class passengers, they're simply false on both of those two variables. So we don't need a third variable for them. And embarked and gender works in very much the same way. Let's take a look at the performance. We get a performance of about 79% accurate on the training data, not too bad. But we get a substantial drop between the training data and the test data. We really want the distance between those two numbers to be no more than about 5%. And here it's a bit higher than that. So we really would like those numbers to be a bit better. How can we improve that? Mostly it's persistence, to be honest, but we wanna get the good variables in and the weaker variables out. So this model's okay, but we're not quite achieving that criterion of closer performance on train and test. Now, let's talk about a fairly big topic, but an important one. When we were looking at Discriminant Analysis conceptually, we were talking about functions and centroids and so on. There's a special set of numbers that you can request in any implementation of Discriminant Analysis
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=192)** that's there to help you deploy the scores at the end. Remember folks, why we're trying to do this. We're trying to take new data, as few as one passenger at a time, and score them on these calculations, to find out if they're more likely to survive, or more likely to die. So how does that work in this case? What we're gonna do, is we're gonna take the constant for the survive group, which is negative 4.781, and then we're gonna add beta one x one, beta two x two, and so on, as we would in one year regression. So for age, the beta coefficient is 0.123. And then we're gonna start to add the other variables as well. So, if they belong to the first class passenger group, they're gonna add the coefficient for that group, because they're true for that group, 1.449. If they're second class, they're gonna get a different number. The number that you can see on the screen, 2.193. And if they're third class, hmm, they don't have a number, so what do we do? We actually add zero for them. And we continue this process down the list. Now here's how it works in the end. Once we've completed the calculation for the survived column, and then we complete the calculation for the died column, the larger number wins. If survived is bigger, we predict they're gonna survive. If died is bigger, we predict that they're going to die. We don't have to worry about multidimensional space, we don't have to worry about centroids,
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/discriminant-with-two-categories?u=76281980&t=284)** we just have to add the columns, and the larger column wins. So a lot of times, when folks use an older technique like this, that comes from the statistical tradition, they choose it in part because they're easy to deploy, and they're actually very scalable on large data sets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (1)
> **Versions:** 4.781 (1), 0.123 (1), 1.449 (1), 2.193 (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Stepwise discriminant](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-discriminant?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-discriminant?u=76281980&t=1)** - [Instructor] Okay, now we're gonna talk about a different flavor of discriminant analysis called stepwise discriminant analysis. The whole idea is to let the stepwise discriminant choose our variables for us. So I've chosen a wider selection of variables: age, passenger class, embarked, gender, sibling/spouse, parent/child, and fare. Now, stepwise is a bit controversial within statistical circles, but it's helpful to have methods that narrow down those variables. The complaint is that sometimes the list that's chosen on the training data is not optimal on the test data, but let's give it a try and see how it goes. So the first thing to talk about is which ones did it choose in this case. I actually ran all those variables on the Titanic data set and it went with age, it kept passenger class, but it did not choose embarked, it went with gender and sibling/spouse, but it did not go with parent/child and fare.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Logistic regression](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=1)** - Okay, let's talk about [[Logistic Regression]]. You're gonna notice some similarities in look and feel from logistic regression and discriminate analysis, particularly at the level of detail, but once we get to the other [[Algorithms]], you're gonna notice a striking difference between logistic and discriminate on the one hand, and all of the others, because these are really the two that come from the [[Statistics]] tradition. First, note that like many of the algorithms, virtually all, in fact, logistic operates by listwise deletion, meaning that if any data's missing, that row is eliminated. All inputs are used unless you choose to do stepwise logistic. So, like discriminate, we have a stepwise option. Have to use scale variables. In practice, however, when epidemiologists, health researchers, use logistic regression, they tend to have mostly categorical variables, so we can employ dummy coding, and dummy coding is very common in logistic regression models. Logistic is arguably the most transparent of all the models. There is lots of compelling detail, to the degree that some practitioners favor logistic over all other algorithms. There's a bit of a stylistic difference between those researchers and some others. Okay. Let's understand the basic premise of logistic regression. We've got a binary, categorical variable
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=96)** in the Titanic data set, as you know, survived identified as the ones and died identified as the zeros. I've taken just the males, where the pattern is a bit clearer. You'll notice that there's a number of young survivors and those in midlife tend to have zeros for survived. They died. So, how can we capitalize on this? Well, we've had regression for more than a hundred years but we've only had logistics since about the 50s. Take a look. If we try to plot a regression, just a plain, [[Vanilla]], [[Linear Regression]], you can force the software to do it. It won't refuse but the resulting regression line just doesn't seem to fit the data very well and there's all kinds of additional problems. If we let this line continue, we could get negative probabilities, which makes no sense, or we could get probabilities above one, depending on the numbers in our particular data set. So, we've gotta address this, in some way. So, what logistic regression does is transforms the data to bound our predictions to never be higher than one, and never be lower than zero. It does this with a log transformation and it creates what's called an asymptote, you may remember that term from algebra class, at one and at zero. There's another interesting characteristic of this so-called S curve.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=191)** The behavior is interesting. What it's metaphorically like, and I'm borrowing this metaphor from the Master Algorithm book, is that if you think about popcorn cooking, when it first starts to pop, it pops slowly. Just occasional pops and at a particular moment, the popping becomes much, much more dramatic. That's the steep part of the S curve and then, it slows down again. So, returning to our data, we can see that it doesn't matter so much what your age is when you're looking at four years old, or five years old, or six years old, but at a particular point, it appears to be in the late teens, there's a dramatic change, and then you have many more individuals in their 20s, 30s, and 40s that died than survived. And that's what the logistic is trying to get at when it fits that S curve. What is the point on the scale variable, in this case age, that's showing that contrast in our dependent, in this case survived? So, the variables that I gave to the binary logistic regression, in this case, are the same inputs that I used in other algorithms. Age. Passenger class. Embarked. And gender. Now, remember, logistic requires dummy coding and that's why we have more than one variable for passenger class, and more than one variable for embarked. So, now what we're gonna do is we're gonna
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=285)** talk about the formula that's used. We're familiar with the standard Y equals MX plus B type format of a line, and we know in linear regression, it takes the form of Y equals beta one, X1. If there's a second variable, beta two, X2 and we know that we get that Y-intercept that we call the constant, okay? So, in binary logistic regressions, since we're doing a log transform, when it comes time to score, we have a complication. We have to reverse that log transform that we've done. The EXP function is the antilog. So, when it comes time to score those probabilities at the end, we're looking for a [[Probability]] between zero and one. Do they have a high probability of surviving or a low probability of surviving? That formula is gonna be one divided by one plus the antilog, that's what the EXP function is, then there's a minus and it seems to be getting complicated but inside those parens, all we do is insert the same old formula that we've seen, again and again. Y equals beta one, X1, beta two, X2, and so on plus the constant, and this is all over the internet, and it's well documented in books, but it's really as simple as that. It's the same formula that we're familiar with but with this additional math wrapped around it. So. You get resulting output with the coefficients that look something like this and gosh, it can be a little intimidating, at first,
>
> **[6:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=378)** but it really doesn't need to be. Remember that this detailed output, the detail around these coefficients is exactly what the statistically trained like about logistic regression. So, the so-called unstandardized betas, which will typically be labeled just by B in your output, is what you feed into the formula that I've just reviewed. The significance values, sometimes labeled with a P for probability, is whether or not the variables are statistically significant, and low values are significant but high values are not. So, age, passenger class, and sex are all significant. Embarked is not. Let's take a closer look. Notice that passenger class has no beta and no EXP beta, yet is showing significance, why? That's the test of significance for passenger class, collectively. All of the related variables. Embarked has the same. The significance of embarked is 0.064. That's higher than .05, so the collection of embarked variables are not significant and if you wanna dig deeper, and run this more than once, you might remove that whole set of variables. Now, let's talk about the last column, labeled EXP beta. This is usually described just as the phrase odds ratios.
>
> **[7:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=474)** It's basically the antilog of the betas and you've heard of these, even if you don't know you have because they're mentioned in newspaper articles, they're mentioned even on TV news. For instance, sex shows an odds ratio of 13.8, meaning that women are almost 14 times more likely to survive than men, having controlled for the other factors. Passenger class shows an interesting pattern, almost as dramatic. First class passengers are 10 and a half times more likely than third class. Why do I say third class? That was the group that was left out. The so-called reference group. So, first class is more than 10 times more likely to survive than third class and then, second class is about three times more likely than third class. What about age? Now, this gets tricky and I know a lot of this output probably seems tricky, at first, until you've had a chance to practice it, but age is near one, but a little bit lower than one. You're probably intuiting that since it's on the low side of one that maybe risk is going down and sure enough, the older you are, the less likely you are to survive. Gosh, it seems close to one. Maybe it's a small effect. It's a little bit more subtle than that. This is all exponents, now.
>
> **[9:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/logistic-regression?u=76281980&t=566)** So, if you wanted to know the impact of a 10 year spread, let's say between 15 and 25 or between five and 15, then you would actually find that that older individual was about a third less likely to survive, at .7. So, those scale variables get tricky. In fact, epidemiologists will tend to turn their scale variables into categories, ironically enough, in order to make this kind of interpretation more straight forward. So, how did it perform? Well, in short, not so great. So, if we look at the percent correct on the training data, we see that it's 65% correct. Not quite as good as we've seen. However, the percent correct on the test data is substantially lower than on the training data. There's a 10% gap. We drop all the way down to 55% and that's bad news. Now folks, this is a powerful and very popular technique. You don't wanna dismiss the technique, at this point. You wanna try to figure out what's gone wrong. It could be the inclusion of those embarked variables, which are not statistically significant, or perhaps there's a variable that was left out that we'd wanna add. So, when this happens, you wanna reflect on how could I improve the model before you dismiss the technique and you certainly don't wanna draw the conclusion that logistic is gonna be a poor performer, in general, in other projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (8), [[Algorithms]] (4), [[Probability]] (4), [[Linear Regression]] (2), [[Statistics]] (1)
> **Env Vars:** exp (4)
> **CLI Commands:** find (1), make (1)
> **Versions:** 0.064 (1), 13.8 (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Warnings:** note that (1)
> **Speakers:** - okay (1)

#### [Stepwise logistic regression](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/stepwise-logistic-regression?u=76281980&t=1)** - [Instructor] Okay, we're gonna try the stepwise method on [[Logistic Regression]]. Only discriminant analysis and logistic will have stepwise. Now, that doesn't mean that they're the only [[Algorithms]] that choose variables for you, but they're the only ones that use the stepwise approach. So I'm gonna start with a larger pool of variables, age, passenger class, embarked, sex, sibling spouse, parent child, and fare. Let's see what the logistic had to say about these variables. It starts by picking the one that has the best statistical significance. Then it grabs another. Then it grabs another. Then it grabs another. And at a certain point, there's no additional variables that are statistically significant at whatever threshold is set, usually .05. Embarked was not picked up, parent child was not picked up, and fare was not picked up. But all the others were.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (1), [[Algorithms]] (1)
> **Speakers:** - [instructor] (1)

#### [Decision Trees](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=1)** - [Instructor] Okay, [[Decision Trees]]. A big topic, also a popular topic because of all of the [[Algorithms]], decision trees are probably the most common. Why is it a complicated topic? Well, because decision trees are not one algorithm. There are many, and the way that they build, the execution is quite different for these different types. There are general principles though that we're able to explore that apply to all decision tree algorithms, but they truly are a family of techniques. They have a variety of missing data handling options, really quite different and different in interesting ways. However decision trees really are the exception to the rule. They do not use listwise deletion. They all have some alternative to that, either treating the missing data or setting the missing data side as if it was its own separate category. Also decision trees are a so-called greedy algorithm, meaning that as it's built, it's doing one variable at a time and will stop. If you've been listening carefully, you may have noticed that that sounds like stepwise discriminant and stepwise logistic and that would be true. All three of those algorithms would be greedy.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=94)** We're gonna revisit this topic when we see the tree. You can handle all types of variables, no dummy coding needed here. And interactions, which are a new topic for us, are quite easy to see in decision trees. So let's take a look. We're gonna use the same inputs, but since there is no dummy coding we have just four: age, passenger class, embarked and sex. Okay, now, when the tree first starts to grow, we notice that we have an overall survival rate of 38% up in node zero. And the best variable is sex, because that is the first variable that splits. That is the first indication that we're talking about a greedy algorithm. When it chooses the sex variable to be the first variable to branch on, it's not thinking ahead so to speak to any further step and the choice of sex as the first variable has implications for all variables that follow. Let's take a look at the second variable. The second variable that it splits on for women is passenger class, and the second variable that it splits on for men is also passenger class. However notice that there's a difference here. There's what we call an interaction in the sense that the way that passenger class splits for women is different than the way passenger class splits for men, indicating a difference between those two
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/decision-trees?u=76281980&t=189)** and the tree is not symmetric. Now when it splits again, remember that is a greedy algorithm, it's growing step by step and will stop, but it's not symmetric in nature and it doesn't know when the tree is growing at the top where it's gonna end up. It's only growing one branch at a time. So under node five, it splits on embarked, but under node seven it splits on age and if you look carefully you can see that we have less than or equal to 14, older than 14 and missing. Some individuals are missing age and yet those cases are used. They are not discarded. Ultimately the tree terminates in what are called leaf nodes. Node three, four, eight, nine, six, 10 and 11. And collectively those segments represent all of our data. Let's zero in on just one of them. Node three is first class females. And their survival rate is 98.7%. Very high indeed. So we won't have a lot of complicated coefficients and a lot of complicated formulas. We're simply gonna have a series of if then else statements like this: if female and first class then 98.7% survived.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (6), [[Algorithms]] (3)
> **CLI Commands:** node (5)
> **Versions:** 98.7 (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [KNN](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=1)** - [Instructor] Of all the techniques that we're gonna discuss K- Nearest Neighbors is arguably the most straightforward conceptually. It's actually kind of fun talking about K- Nearest Neighbors but it can also be quite effective. So K-Nearest Neighbors is a so called lazy learner and makes it quite different from the other choices. No model per se is built. Basically what's happening is that we have a technique that although memory intensive is not computationally intensive at model building at all because it doesn't build a model. It simply memorizes the locations of all the cases. Now at scoring when you go to deploy this thing then it has to find all the nearest neighbors and that then takes some work So it kind of turns the typical process on its head. It's virtually instant at model building but then at scoring it can be a little bit slower at scoring than some other techniques. And that's the notion of a "Lazy" learner. Also the notion of nearest is essentially Euclidean distance Now it's not the only choice but it's the typical choice So we really are talking about scale variable type activity here. However if you've got a variable that is not scale in nature let's say sex, then obviously men match with men and women match with women in the sense that in both of those cases the distance would be zero. All inputs are used.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=93)** So unlike [[Decision Trees]] for instance, it's not choosing some variables and not others. Finally the K in the name refers to the number of neighbors that we're going to use to make our prediction and for this example I've chosen K equal to eight. Okay so in terms of inputs we're going to use the same. Age, passenger class, embarked and sex. So in this diagram which I pulled from the software that I used to run the model, it's simply showing us diagrammatically three of the four variables. We have men at the top of the diagram women at the bottom. Passenger class all on the side and then age along the opposite side. We're simply identifying who is close to who in this multi-dimensional space. Okay so take a look. I have the entire training data set of the Titanic data set and the top individual just by coincidence is the top row is Mr. Owen Braund and if we look over to the right-hand side of the data set we find that the model hit is telling us that the nearest neighbor him is Mr. Karlsson. Then there's Mr. Johansson, Mr. Dennis and so on and notice that the distances are very close to zero here in fact in some cases they're probably exactly zero as long as all of those values are the same.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/knn?u=76281980&t=187)** Let's zero in and take a look at just those neighbors. Here's the eight closest neighbors and what we find is that all of these gentlemen, now of course they're all men because we're refining this nearest neighbor to a man so on sex they have the same value, age they have the same value, 22 years old. None of them are traveling with siblings or spouses. None of them are traveling with parents and children. We have very slight variation in the fare that they paid which would have been paid more than a hundred years ago in British pounds and they all embarked from the same location. But perhaps most importantly, they all died on the ship. Therefore we're going to predict that Mr.Braund also died on the ship

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (1)
> **CLI Commands:** find (3), make (1)
> **Tools:** notion (2)
> **Definitions:** is a  (1), refers to (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Linear SVM](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=1)** - [Instructor] All the [[Algorithms]] that we're going to discuss support vector machines is among the most abstract conceptually. It was one of the really hot algorithms just a few years ago. No, I don't want to diminish its importance now, it's still considered to be an important and popular technique. But for a while it was really considered the best one. And then it got displaced to a degree by ensembles of trees. First, random forests, and then techniques like XGBoost. And now it seems like the hot algorithms are [[Deep Learning]]. But of course, deep learning is used in application areas like visual recognition and [[Speech Recognition]]. So it's still considered to be one of the more complex but also one of the more accurate algorithms out there. Unfortunately of course, a lot of times the really accurate algorithms and the more complex ones, are black box. So for certain projects that are off the table because they're not gonna give us a narrative of what's going on in terms of variable importance and so on. Pretty much any algorithm will give you variable importance if you want, but not like the degree of detail that we get in a technique like [[Logistic Regression]]. In support vector machines, all inputs are used. Something that it's rather famous for, is that it is robust to large numbers of inputs. Normally we worry about, as the number of inputs goes up, we want the numbers of cases to go up as well.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=94)** This is an issue with most algorithms, but support vector machines can handle this kind of situation better than most, with the number of inputs going up, but perhaps not with a huge number of cases. Also, we haven't talked about what is called, Model Tuning very much in this course. Frankly it's been a bit beyond the scope of what we wanted to discuss with these algorithms. However, support vector machines does have the reputation that if the parameter, C, and I'm gonna be explaining what that is, is not tuned very well, you can have very poor performance. Basically what's going on with a parameter C, is it gives us a sense of how complex and flexible, or how simple our model is. And that's gonna give us a notion of whether or not we have high accuracy on the train data, perhaps, but then poor performance on the test data for the same model, those are the kind of issues that we're talking about. Let's try to visualize this. Now I have a very simplistic example, somewhat inspired by the Titanic data, because if we were looking at real data, it could get too complicated for us to see the concepts. So I've massively simplified this, and I just have four younger passengers, all survivors, shown by green squares. And four older passengers, all that died, indicated with red squares. What we're doing with support vector machines, is we're just trying to find the widest possible margin
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=189)** to separate these two groups. Let's zero in a bit. That's the margin, and remember that parameter C? The parameter C gets that how wide we're gonna have that margin be. If it's more narrow, and we have a very complex model, the narrow road, almost everyone uses the metaphor of a road, can zigzag throughout the data points more readily. So that's gonna produce our complex model. Complex models potentially perform well on the train data, but not well on the test data. They don't always generalize well. If we make the road wide, it's not as quick on its feet, so to speak. The model's gonna be less complex, but perhaps although we sacrifice a bit of accuracy, it generalizes better. That's the idea. So again, we haven't spent a lot of time on parameter tuning, but it's considered particularly important in support vectors machines to get that regularization parameter, called C, to be a good value. Frankly, you're just gonna have to try several values of C. Let's make this example a bit more complex. What I've done now, is I still have younger passengers surviving show in green, and older passengers dying shown in red. What I've done is introduced third class, second class and first class.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=284)** What we can imagine, is that as we take a look at that margin, we see that the age range that separates those that survive, that died, is a bit younger for third class, we can imagine. Maybe the third class passengers in their mid teens, are not surviving. But the first class passengers in their mid teens are surviving, but those that are college age or older are dying in many cases. There's something else that I wanna point out. And this is a point that Pedro Domingos makes in the Master Algorithm. You would think at first looking at this, that it's really in the tradition of techniques like linear discriminate analysis, and logistic regression. And that clearly, we're trying to identify some kind of an equation. And we're looking for this linear path or hyperplane, that separates these cases. But what he points out in the book, is that this is, in a sense, also in the tradition of K nearest neighbors. Why? Because the points that are on the margin. The points that are on the road, so to speak. Here we can see three red dots and three green dots. Those are called the support vectors. That's in part, how it gets its name. And those support vectors, if those values were to change, would move the boundary of the road. So think about it, it is like K nearest neighbors, isn't it? Because relatively few cases are determining
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=379)** where that boundary is. Okay, now, let's return to just one variable, age, but let's make it more complex in a different way. Let's imagine that the folks in midlife are dying, but in addition to the younger folks surviving, the elderly folks survive as well, because they're being helped into the life boats. Let's imagine that that was the case. If so, we're in a bit of a bind. Because we can't find a line, or in multidimensional space, we wouldn't be able to find a hyperplane that passes through this. We'd get into a bit of trouble. So what we do, is we actually bend the shape of the data. This is what's called applying a kernel, or sometimes called the kernel trick. And by changing the shape of the data, we can do something like this. We can bend that space so that now the folks in midlife are above, and both the younger and the elderly are below. So we get a shape not unlike a tunnel, or if it's a bit more complex, perhaps like a saddle. And we can slice through that with a hyperplane, thereby separating the red from the green. So two of the things that make support vector machines a little tricky and a little complicated
>
> **[7:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/linear-svm?u=76281980&t=471)** until you can get the hang of them, is this notion of a kernel, and then earlier when we were talking about your responsibility in experimenting with the value of C.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (7), [[Deep Learning]] (2), [[Logistic Regression]] (2), [[Speech Recognition]] (1)
> **CLI Commands:** make (4), find (3)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Analogies:** imagine (4)
> **Tools:** notion (2)
> **Speakers:** - [instructor] (1)

#### [Neural nets](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=0)** - [Instructor] Okay, let's talk about [[Neural Networks]]. You almost certainly have heard of them, but the concept behind them might be new and we'll also be talking about the implications for our particular topic, binary classification. First I wanna mention that [[Deep Learning]], which is a really hot topic right now, is a special kind of neural network, and within the next couple of minutes, I'll be able to explain what's special about deep learning. I do wanna mention, however, is that deep learning is really quite different from what we're gonna be discussing. We're gonna be discussing multilayer perceptrons and the applications of deep learning, at least at the moment, are really in the areas of visual recognition, [[Speech Recognition]], frequently on very large datasets, so large that they actually have to be cognizant of what kind of computer technology that they run on. So, once we see the neural net diagram, I'll be able to amplify a bit the differences between multilayer perceptrons as we normally talk about them over many years and deep learning. Neural networks are famously a black box technique. They're not gonna tell you much of a narrative about your variables in terms of what the most important variables are or what causes the risk to go up or what causes the risk to go down and so on. I discuss why neural net is black box and how to try to interpret the coefficients
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=93)** in considerable depth in a book titled SPSS [[Statistics]] for Data Analysis and Visualization. I really get into the details. Some of you may find it interesting if you wanna go to another layer of abstraction beyond what we're talking about here. In neural networks, all inputs are used and neural networks have the reputation of benefiting from screening. If you have a large pool of variables and some of the variables aren't too good and perhaps the variables are redundant with each other, neural networks have the reputation of being a bit more sensitive to this than other techniques. One key feature that we're gonna have to understand is backward propagation, so in this video, we will be talking about what that is. It truly is, kind of, at the heart of neural networks. Okay, so in doing this example, I've used the same four inputs, age, passenger class, embarked, and sex, and here's a diagram that my software package of choice generated that I wanna talk about. So, I wanna break this down into its components. We've got out input variables, sex, passenger class, age, and embark showing in the diagram. Bias refers to, essentially, the Y-intercept. It's a little bit different here, but it's very much like the concept or the Y-intercept in traditional [[Linear Regression]]. Then finally, what's been labeled here as Neuron1, Neuron2, and Neuron3 is the somewhat famous hidden layer.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=188)** What makes deep learning networks different is those are large, complicated neural networks with multiple hidden layers, and large, complex hidden layers at that. Meaning that thousands of these lines, tens or even hundred thousand of these lines are in these networks, so they require very advanced computers and huge datasets. Here we have just one hidden layer with three nodes or neurons, and of course, our target variable. What I wanna do now is use a metaphor that my colleague wrote about in his book Applied [[Predictive Analytics]]. I recommend this book on a number of levels, but I'd like to share this quote with you. What Dean is talking about is catching fly balls as a boy and how that's like backward propagation. Let's talk about the quote and then I'm gonna elaborate a bit. He writes, "The learning process is similar "to how I learned to catch fly balls as a boy. "First, imagine my father hitting a ball "to me in the outfield. "In the beginning, I had absolutely no idea "where the ball was going to land." Then I'm gonna jump down to the bottom there. "But then something began to happen. "The more fly balls my father hit, "the more I was able to associate the speed "the ball was hit, the steepness of the hit, "and the left/right angle." So, what he's doing is he's shrinking the gap, shrinking the gap, those errors are getting smaller
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=283)** and smaller. That's really what backward propagation is all about. Let me return to the diagram. You see, what's happening is he's predicting a scale value. We're not, we're predicting survived, but he was trying to figure out where the ball was going to land and he was off by a certain number of feet. What he did each time is close the gap. He didn't run to where the ball fell, but rather, he ran a part of the way between where he was standing and where the ball fell. What backward propagation is is you take that adjustment and you propagate it through all the lines that you see here so that each of the lines gets a little bit of that share so that the next time it makes a prediction, it does a more accurate one. Now, I'm only gonna talk about this diagram briefly because it's a complicated mess, as you can see. This is really closer to what it really looks like. Notice that categorical variables have to be dummy coded. I can't exaggerate on the following point. I meet folks numerous times each year that have very large, complicated categorical variables. Things like make and model of vehicles predicting something about the vehicles, and they don't know that inside the neural network or inside these other [[Algorithms]], all this complicated dummy coding is going on. So, they think that embarked is one variable and it's really four.
>
> **[6:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=375)** Embark C, Q, S, and even blank. Or they think that passenger class is one variable and it's really three. First class, second class, and third class. You see where I'm going with this. So, why all of these lines and what purpose do they serve? Well, I discuss the notion of interactions in neural network in one of the videos in my regression course, and the reason that that video is a bit different than this one is, here we're predicting a categorical variable and there we're predicting a scale variable. If you're new to interaction terms, I believe it often makes more sense when you learn about interaction terms with a scale variable first. But we saw it when we were looking at trees and what we saw is that impact of passenger class on risk or on survival depended upon a third variable, whether or not the passenger was male or female. The hidden layer and all of those lines connecting the input variables to the hidden layer and then the hidden layer to the target category, survived and died, are two terribly important characteristics of our neural network. One, it's how the neural network deals with interactions in curvilinearity, and two, it is what makes the neural net opaque because there's so many lines zigzagging through representing the same variables
>
> **[7:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/neural-nets?u=76281980&t=470)** going in different directions that it's almost impossible to figure out what those coefficients mean.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (7), [[Deep Learning]] (6), [[Speech Recognition]] (1), [[Statistics]] (1), [[Linear Regression]] (1)
> **Definitions:** is a  (3), refers to (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** spss (1)
> **Tools:** notion (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Bayesian networks](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=1)** - [Instructor] Okay, time to talk about Bayesian networks. Once again, we're encountering a technique that's quite different from the others. Of course, you're going to encounter the term Bayesian or Bayes' throughout [[Statistics]]. It really is a whole branch of statistics. We're gonna focus on Bayesian networks, but Bayes' theorem is really just about a way of combining or updating probabilities as you get more information. It's really about conditional [[Probability]]. If you know more than one thing about someone, then your overall assessment changes. We're gonna discuss three different ways of addressing interaction, so that's gonna prove to be an important theme of our discussion of Bayesian networks. Bayesian networks will be one of the three ways. Naive Bayes, an algorithm that you may, or approach, that you may have heard of and Bayesian networks are not exactly the same. We're gonna make brief mention of Naive Bayes and talk more about Bayesian networks. One of the things that truly unique about Bayesian networks is the notion that a subject matter expert could design the network and then fit the network with the data, but nonetheless, physically explicitly shape the network. That's unique to this algorithm of all the ones that we're discussing. We will continue using the same inputs,
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=94)** age, passenger class, embarked, and sex, but first let's review a little bit of the theory and make some recommendations to you. If you are new to Bayes' theorem and you're curious about it, and you had assumed that our discussion of Bayesian networks was gonna talk at length about Bayes' theorem, there's lots of ways that you can look into it. One book that I've really enjoyed is The Theory That Would Not Die, which is all about Bayes himself and the use of Bayesian statistics. It really is a different topic, though, from ours in this video. I do want to acknowledge Judea Pearl, an extremely influential statistician who won the Turing Prize in 2011, which is the equivalent of the Nobel Prize in computer science. He's credited with inventing Bayesian networks decades ago, but when we won this prize in 2011, it really was for his career-long work in Bayesian networks. You can find numerous books and also just a ton of his lectures on the internet. Now, keep in mind, he is an academic, so his lectures will be academic in feel, but he's an extremely influential individual. As promised, let's talk about interactions. If you really wanted to understand how our four variables interact,
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=190)** you could do every possible permutation. For instance, there is exactly one first class female with an unknown embarkation point between 35 and 40 years old, and she has a 100% chance of surviving 'cause there's only one person like her. And there's exactly one female in first class between 60 and 65. I've sorted this on mean survival, by the way. Also note that age has been binned. Bayesian networks always work with categorical variables, so any implementation of Bayesian networks is going to bin your scale variables to make them categorical to work in the network. The bottom line is, it's really powerful to look at how every variable interacts, but even with just four input variables, age, embark, sex, and passenger class, we have extremely, extremely thin sample sizes. You might respond that that's because we started with a small number to begin with, and arguably that's true, but this is just four variables. What if we had 100 or 200 or 300? It truly is impossible, even with very, very large datasets, to look at all possible permutations, so there has to be another way. Briefly, what Naive Bayes does is looks at the probability of each input against the dependent, but assumes that the inputs do not interact with each other.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=288)** So, Naive Bayes tests no interactions and it actually proves to be quite powerful. But now let's talk about our primary subject, which is the third way of addressing interactions, Bayesian networks. We get this thanks to Judea Pearl. Here is a simple Bayesian network that I produced in the software package that I use and in this case, I did not, as some kind of subject matter expert, craft this network. We won't be discussing that aspect, but that is something that's very important to Judea Pearl himself, is that you can create Bayesian networks where the shape and the topography, so to speak, of the network has been determined by a subject matter expert. In this case, the software has done it for me. And take a look at the node for passenger class. Notice it only has one arrow pointing into it. In the language of Bayesian networks, we say that it has one parent. If we [[Zoom]] in on that, we find that the probability of being first class if you're a survivor is 41% and the probability of being in third class if you did not survive is 64%. So, clearly there's this relationship between passenger class and survival, but we knew that quite well. There's no variable interactions here. This is just one variable against the dependent.
>
> **[6:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bayesian-networks?u=76281980&t=383)** And in the case of Naive Bayes, all of the probabilities would look like this. We wouldn't be looking at interactions. However, we're doing Bayesian networks, and if we look at the embarked variable, we see that it has two arrows pointing into it. So, again, in the language of this technique, it has two parents. And if we zoom in on this, we see that we're looking at passenger class, embarkation point, which is C, Q, and S, and how they interact. And the lowest probability for Southampton, that's the S, that's the folks that boarded in England, is 52% in the upper right-hand corner there. So, if we look at first class survivors in that top row, 52% of the time they boarded in Southampton. If we look at second class passengers that survived, one row up from the bottom, 91% of them boarded in Southampton. Notice that we're only looking at the interaction of two variables, not everything interacting with everything else because the network is telling us, by the number of arrows pointing to it, how many variables are interacting. So, we're being selective about which interactions we explore, either through the work of the algorithm or through the work of a subject matter expert.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (5), [[Statistics]] (3), [[Zoom]] (2)
> **CLI Commands:** make (3), find (2), node (1)
> **Definitions:** is a  (3), is an  (1)
> **Warnings:** keep in mind (1), note that (1)
> **Tools:** notion (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Heterogenous ensembles](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=0)** - [Instructor] Ensembles are a general technique involving combining component models to produce a new model, and the concept has inspired several important [[Algorithms]], but you can think of ensembles as an algorithm of their own. So let's take a moment to talk about ensembles. Now, keep in mind when you take a bunch of models and combine them, you've just turned your model into something more complex and almost certainly into something opaque. Even if the component models are explainable, the ensemble might not be. So I don't think you want to assume on real world projects that you'll always have the option of using an ensemble, but there's a reason why they win so many machine learning competitions like the ones on [kaggle.com](https://kaggle.com). They're very powerful and are frequently the most accurate when compared to the single model algorithms that we've discussed so far. So in its most basic form, a so-called heterogeneous ensemble would just be a combination of some models. In this case, three. You could have a [[Logistic Regression]], a neural network, and a support vector machine, or any other combination of the algorithms that we've talked about in this course. And we can simply calculate an average, just as simple as that. Now, an average of what? It would probably be an average of the propensity score because after all, we're talking about binary classification. Alternatively, you could go with the most confident model,
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=97)** the max propensity score. There's all kinds of other options that you could imagine. Now, keep in mind that if one model was producing a null for whatever reason, for instance, if that model was using list wise deletion and the other techniques were not, most confident, of course, would also mean some non-null value, and I've leveraged that kind of trick when building ensembles and I was dealing with missing data before. It can be very helpful when some of your models are producing nulls as predictions. So as just one example of this, I just want to show you a tiny portion of [[IBM SPSS]] Modeler. What you're looking at is not a modeling algorithm exactly. It's almost more like data prep. It's simply taking the inputs from three models and then coming up with different ways of combining them. So in this particular example, I was predicting marketing response. Three models are coming in with all of their predictions, but I wanted to show you this dropdown menu. Again, it's just one example of what this might look like in software. We've got majority voting. We've got the one that was selected here, confidence weighted voting. We have adjusted propensity, highest confidence wins, we have several. And notice there's also ways of dealing with ties. So it's very powerful. So even though you won't find an algorithm called ensemble and most [[Predictive Analytics]] packages,
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/heterogenous-ensembles?u=76281980&t=191)** it won't be called that, you really can think of heterogeneous ensembles as a modeling approach or modeling algorithm in their own right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3), [[Logistic Regression]] (1), [[IBM SPSS]] (1), [[Predictive Analytics]] (1)
> **Env Vars:** ibm (1), spss (1)
> **Analogies:** imagine (1), for instance (1)
> **Warnings:** keep in mind (2)
> **CLI Commands:** find (1)
> **URLs:** [kaggle.com](https://kaggle.com) (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** dropdown (1)

#### [Bagging and random forest](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=0)** - [Instructor] Now homogeneous ensembles involve combining multiple versions of models produced from the same algorithm. Bagging is just one kind of homogeneous ensembling, and it's a term with two components, bootstrap and aggregating. So bootstrap aggregating becomes bagging. It is building a model on different samples of our data. That's what the bootstrap is referring to, the different samples. Bootstrap sampling is sampling with replacement. So the samples are equal in size to the original dataset. They're not subsets, but they're shuffled so that some cases might show up more than once, and others not at all. The most famous example of this is bagging [[Decision Trees]], which is a combination or an aggregation of multiple trees into a final model. Here, three individual trees get aggregated into a final model. So a forest, we sometimes hear random forest. The forest is a group of trees, basically. Now, of course, it's not going to be three samples. If you are doing something like random forest, it's going to be 100 trees or 500 trees or some larger number like that. In order for this process to be effective,
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=96)** the component trees have to be sufficiently different from each other. So the famous random forest algorithm has three key components, bootstrap sampling to produce multiple and different samples, random selection of features, and this is key to what makes random forest powerful. You're also scrambling the features so that the resulting trees use different features and not identical features at the top of the tree. And the third is aggregation, combining the trees together to make an ensemble. So let's see what this looks like. This is just one example of how that can be implemented. In nine, what they do is they actually let you look at the different trees. So in this particular case, I'm trying to predict whether a customer has churned or not, and the top prediction in their cell phone bill data is evening charge. But that's just the first tree of 100. So I can advance to the second tree, and it's day charge. And the third tree is night charge, and day minutes, and then day charge, evening minutes again. So we are getting some repetition, but by shuffling the features, the top branch is really quite different over the first six trees, and that's just six out of 100 trees. This is really important.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bagging-and-random-forest?u=76281980&t=188)** Otherwise, you're just going to get the tree over and over again, and ensembles don't benefit from that kind of repetition. You need some diversity of the trees. So that is really critical to random forest success, that notion of sampling features, not only cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)

#### [Boosting and XGBoost](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=0)** - [Instructor] Now we'll talk about boosting, which at first might seem similar, but it's different in an important way. We build a first model, and what we're feeding to the second model now is information from the first model. XG Boost or Extreme Gradient boosting has become so well-known and popular, we think of this as typically being a series of [[Decision Trees]], and with XG Boost it is, but boosting in general can be applied to any algorithm. I discussed boosting, as well as bagging in much more detail, and of course, dedicated to ensembles. In boosting, we're calculating the errors on the first model that we made, so we're trying to make fewer errors on the second model using that error information from the first model. Matt Harrison, who's written a book on the effective use of extra boost likes to use the metaphor of chipping golf balls into a hole. By seeing where the ball has landed and taking that information into account, you can imagine getting closer and closer each time. So think about it now, we're producing something that's more complex, and we're trying to increase that signal, but if we're not careful, we're also going to amplify the noise, and we could get something that's overfit. But again, these [[Algorithms]] are developed to try to maximize the benefits and minimize the downside. Each of these models iterates culminating in a final model that has benefited from all the ones previous to it.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/boosting-and-xgboost?u=76281980&t=96)** There's also an aggregation step, but it's a weighted average of all of the trees. So with boosting in general, and XG Boost in particular, we really don't have any way of looking at the trees. It's completely opaque, but it's consistently a top performer when in competition against other algorithms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Decision Trees]] (1)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 4. Common Modeling Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Imbalanced target categories](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=1)** - [Instructor] Okay, let's talk about a very common problem, and that's the problem of an imbalanced target variable. So of course we're talking about binary classification, so this is a concern when one of the categories is more common than the other. It's really when it's more dramatically out of balance. And keep in mind that this is an issue that potentially affects all the [[Algorithms]]. It's very easy to see in a decision tree, so I'm gonna visualize it with you using a decision tree, but it affects the others, as well. So with that in mind, let's take a look at Titanic data. We have 38.5% survival rate, so conversely we have 61%, a little bit more, of those that died. In other words, our target variable is not 50% and 50%. When is this a concern? It's usually when it's more dramatic. 70%, 80%, 90% in one category. A really dramatic one that happens quite regularly is fraud, where you might have a ratio of 200 to one or 500 to one or even more. So what does it look like when you balance your data? It ends up looking like this. Now, since certain data has been discarded at random, it's not exactly 50/50, but I now have 51% survived and 49% died. Let's go back to the previous one
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/imbalanced-target-categories?u=76281980&t=95)** so you can see what's happened. The 280 number has not changed, but the 447 of those that died has dropped to 269. They have been discarded at random. Why would you do this? Let's go back to the unbalanced to discuss. The pattern that you're gonna wanna look for is are you getting good rules for those that died, the more common category, but not getting enough good rules for those that survived. That's what you'll tend to see. So in fraud, for instance, you might get a lot of good indication of non-frauds but you're just failing to identify those frauds accurately with the model. That's the situation that will prompt you to balance. Not an issue with Titanic, but you'll probably encounter it well over half the time in real-world projects. There's one final important consideration. Sometimes folks get a little bit nervous around the idea of balancing 'cause it seems artificial. Keep the following in mind. When we do this, we're doing this only on the trained data to help the algorithms, but we do not balance the test data. So that test data is giving us a real-world assessment of the effectiveness of our model on data that has not been balanced.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2)
> **Definitions:** is a  (1), is an  (1), in other words (1)
> **Cross-References:** go back to (2)
> **Versions:** 38.5 (1)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Interactions](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=1)** - [Instructor] Interactions and interaction terms represent a big topic. But when I'm working with a model and I'm struggling to get better accuracy, this is one of the first places that I look. Interactions are when the relationship between two variables depends on a third. Since we're building predictive models, that's normally gonna take the form of our target variable, our binary, and one of our inputs being influenced by another input. Let's take a look at a couple of examples. So for instance here's an example from my regression course in the library. If we're trying to predict beginning salary using education level, we notice a general trend that as education level goes up, beginning salary goes up as well. But notice for the blue line which represents the men, the line goes up more steeply, and for the green line representing the women, the line goes up less steeply. So if we're really gonna understand the impact of education on beginning salary, we have to also know that third variable, sex. Let's take a look at another example, admittedly a complex one. Here we're trying to predict diabetes risk, and this is clearly a decision tree. We see that the overall risk is 14.685%. And the best predictor is weight.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=98)** However, do we have to look at a third variable to really understand the impact of weight on risk and the answer is yes. Because for the individuals who weigh 155 pounds or less, the cut point for whether or not their risk is higher or lower in the tree for height, is 62 inches. But for the individuals that weigh more than a 155 pounds, the cut point for height is 70 inches. So there you go, another instance where understanding the relationship between weight and risk depends upon a third variable, height. Something that you often can do, particularly using a technique like trees, or a technique like logistic and discriminant that's gonna make you create your own interaction term, is consider taking weight and height out and seeing if you can't figure out what that relationship is, possibly replacing it with a variable like body mass index. And one of the reasons this is especially helpful in something like a tree, is we're not chopping our data up into as many segments, which gives us more data and more sample size to look at other inputs. So take in all together, what are the implications for the model building process? First, if your model is not as accurate as you would like it to be,
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/interactions?u=76281980&t=191)** this might be one of the things you're gonna have to look into. Also, although we didn't see any examples of it, curvilinearity is a special kind of interaction. Finally, in thinking about the [[Algorithms]] that we've seen in this course, some techniques are gonna make you work. In particular techniques like [[Logistic Regression]] and discriminant are gonna make you create new interaction terms. Terms like education times sex for instance. Some techniques will address this problem but do so in hidden ways. [[Neural Networks]] for instance will not require that you build an interaction term but since they're a black box you can't really see what they've done. Finally, trees are one of the easiest ways to diagnose this problem. So if you're not quite sure this is affecting your model's performance, take a careful look at decision tree. This a tough topic, but an important one, and as you grow and your build, you build these kinds of models, this will be one of the techniques that you're gonna wanna revisit again and again and master over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Logistic Regression]] (1), [[Neural Networks]] (1)
> **CLI Commands:** make (3)
> **Analogies:** for instance (3)
> **Versions:** 14.685 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Missing data](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=0)** - [Instructor] One of the themes that we've investigated is certainly missing data. [[Decision Trees]] really are the exception to the rule. Virtually all of the [[Algorithms]], at least on default settings, operate by listwise deletion. So, you really wanna be careful about the following phenomenon. In working with clients and building my own models over many years, I've noticed that when a client starts to say that they're always having the best luck with trees, I double check to see how many records were actually processed by the other algorithms. And I can't tell you the number of times I've checked and discovered that zero records were run by the neural net, zero records were run by the support vector machine, and so on. And a lot of times they didn't realize this. So if trees are consistently being the best performers, you wanna make sure if the other algorithms were even running properly. Now if, perchance, you do have a situation where you've lost a lot of records and maybe even lost all of the records, you're gonna have to think about imputation. A lot of software will do this for you automatically. In fact, sometimes it's an additional sub-command or a checkbox that it will go ahead and replace with the mean. It can be as complex as a whole 'nother model that's simply in charge of imputation. Let me help you understand what I mean.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/missing-data?u=76281980&t=94)** Let's say you're missing the age variable. It will automatically create, in many cases, a model where age is the dependent, where it's the target now, and it's using all of the other variable to try to find an estimate of that missing value. However, this is too important to leave to chance. So don't rely on just a checkbox or something automatic. Check to see how much missing data do you have. There's a big difference between missing 2%, 5%, or 30%, okay? So if you're missing a lot of data you might have to consider other possibilities. In particular, one solution that I really like is sometimes building a model on the complete data and a different kind of model on the incomplete data. So this can be a large complicated topic, but to give you a notion, I was working on a cell phone churn project, and I built one model, a neural network, on my complete data, but then on the portion that had incomplete data I did a tree, and I used the neural network and the tree together. So this is a big topic. The main thing to remember now is of all the algorithms, it's really the tree that doesn't force you as strongly to worry about imputation, but the others do. Make sure you do a proper job of [[Data Preparation]], and take into account your missing data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (4), [[Decision Trees]] (1), [[Data Preparation]] (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** checkbox (2)
> **Tools:** notion (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Bias-variance trade-off and overfitting](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=1)** - [Instructor] Now let's talk about a topic that can seem abstract at first, but one can truly make the argument that this issue of the bias-variance trade-off is why a course like this makes sense, and why we have to learn a dozen [[Algorithms]] for doing binary classification. Let me explain. High bias is the situation that you face when your model is not flexible enough to get sufficient signal. Now not getting enough signal, I'm sure you can guess this, it means the model's not accurate enough. But what's this notion of flexibility? Well, think about something like linear discriminate analysis. It can only fit linear relationships. Not as flexible. If you have curvilinearity, or variable interactions, you have to act in order to allow your linear discriminate analysis to do that. [[Neural Networks]] are inherently more flexible. But, they're black box and they're more complex. In short, high bias is gonna be the situation of underfitting. High variance, on the other hand, is when your model is too sensitive. So it's picking up a lot of noise. And if it's picking up on noise in the training data, you're gonna see that gap in performance
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=93)** between the training data and the test data. In short, it's generalizing poorly, and these models are overfit. So why not always go for the more complex model? You know, bring the most powerful, complex, flexible model you've got? Isn't that always gonna solve the problem? No. This is a trade-off between those two. As you try to combat one, you're gonna encounter more of the other, and vice versa. So there's really no way to win, except to embrace several algorithms and see which one best fits your project and your data. So if you're encountering this topic, specifically these terms, bias, variance, and flexibility, almost certainly, you're interacting with someone who has been influenced by this very important book. Hastie and Tibshirani have been on the lecture circuit for years, they're extremely well thought of, they're academics. This is a serious book now. You're gonna have to kind of have you brain ready for some academic reading. But note, if you go to the book page, you can download the PDF. And as this website mentions, if you wanna go even deeper for a more advanced treatment, you can read their "Elements of Statistical Learning." Now, it's worth noting that this whole theme was also the basis for a book by Nate Silver,
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=189)** who you may have heard of. And the title of the book is literally, "The Signal and the Noise: Why So Many Predictions Fail But Some Don't," which is exploring the same issue. Specifically, that rookies at [[Predictive Modeling]] tend to go chasing after too much noise. So let's revisit these two terms, and see what you can do. If you have high bias, you might have to consider adding interaction terms. If you're using an algorithm that needs you to physically add them.. Like discriminate analysis, or [[Logistic Regression]]. Perhaps you have to better address curvilinearity. Or in both of these cases, you might move more towards the complex algorithms that are able to tackle interactions and curvilinearity better. You might have to add more input variables. Perhaps you added what you thought were all the available input variables, but faced with poor accuracy, you get creative and you seek out more. Finally, you might want to change the settings of your models to grow things more aggressively. Remember that with high bias, you're trying to increase flexibility, so you would grow the tree more. You would narrow that no-man's land between the two groups and a support vector machine. Changing those settings in your algorithm to produce a more complex, more flexible model.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/bias-variance-trade-off-and-overfitting?u=76281980&t=284)** If you have high variance, perhaps you've got too many weak, or redundant inputs. Maybe you wanna slide in the opposite direction of the continuum. Maybe you wanna try those algorithms that by their very nature produce a less flexible, simpler model. If you have high variance, that may be what you need. Finally, you may wanna change the settings within the modeling algorithms to grow this particular model less aggressively. A smaller tree, for instance. A wider area between your two categories and a support vector machine. Each and every algorithm will have adjustments that can be made to make it more flexible or less. "Flexible" sounds inherently good, but remember, flexibility as the [[Microsoft Word|word]] is used here means more complex. Sometimes you need to try more complex, sometimes you need to try less complex. This in many ways is the core issue of the entire course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (5), [[Neural Networks]] (1), [[Predictive Modeling]] (1), [[Logistic Regression]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Env Vars:** pdf (1)
> **Tools:** notion (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)
> **Analogies:** for instance (1)

#### [Data reduction](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=0)** - [Instructor] Okay, I wanna give you a brief introduction to a big topic, data reduction. You'll hear other phrases for this as well, like feature selection. So, what is it? It's the removal of poor and redundant predictors before modeling. There's yet another phrase that gets at this, sometimes you'll hear people talking about optimal subsets. So, you've got your pool of variables and are you choosing the right ones? Now, as you know, [[Algorithms]] differ in how they tackle this. Some tackle it directly and others don't, which raises the following issue. How much do we have to worry about this? Aren't the algorithms taking care of it? After all, we know that trees and stepwise logistic as well as stepwise discriminate don't use all the variables. They're supposedly picking the best ones. And what about a technique like neural nets? Now, that uses all the variables, so you would think this is more of an issue, perhaps, but if you think it through, what a lot of folks will say in response is, the neural nets can simply assign near-zero weight, and you may have encountered that some implementations have extra features for this. For instance, there's nothing about the k-nearest neighbors algorithm per se that addresses feature reduction, but the particular implementation that I use in my software package of choice has a little check box that I can request
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=94)** that will winnow the attributes down and perform feature selection before the model runs. So, how much of this is our problem? Why is it a concern? Well, no algorithm to date is immune to modeling noise. And what happens when you model noise? Well, the noise in the train dataset and the noise in the test dataset aren't the same, so the way that you're gonna know that you're amplifying the noise in your data is when the performance on the train dataset is looking good, but then you get that big drop in performance between the train dataset and the test dataset. That's because, we hope, that the signal in our train data and our signal in the test data are the same, but the noise in those two datasets aren't the same. That's gonna be a clue to us that our model is not going to generalize well to future datasets, and clearly that's a problem 'cause the whole point of building the model is to generalize it to future datasets. So, this is a real challenge and even after years, or in my case, 20 years of doing this, you never really feel that you're doing it perfectly. You just add to your bag of tricks. So, what are some things that you can do? First, I know that I've tried to develop a discipline of always running all the bivariates, even when I have a large dataset. Now, bi here meaning two.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=187)** It's pretty straightforward what this is. You're looking at every pair of variables, your target variable, your binary target, and each and every one of your inputs, and you're looking at those individually. You can look at them visually. If you are a [[Statistics]] person, you can run descriptive statistics on them or even inferential statistics, but one way or another, try to take the time to do that. And I really do mean that if I have 500 features, I'm trying to look at each of those features against the target individually outside the context of a modeling algorithm. It's a lot of work, but I've found over the years that it pays off. The other thing that you can do is you can use one of the modeling algorithms as a kind of screen before you model. So, let's say for instance that you are concerned that a neural network that you're building is encountering this problem. You could build a tree and then identify just those variables that the tree utilized and then feed only those variables to the neural net. You can do this almost every which way, almost any modeling algorithm could be turned into a screen to be used before another one. Another thing you can do is try to identify redundancy in your data. You can do this with a correlation matrix. If you happen to be familiar with some of the fancier techniques, you could try something like factor analysis or principal components analysis. What you're looking for, everybody,
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=279)** is two variables among your inputs that are pretty much giving you the same information. So, for instance, we encountered earlier in the course height, weight, and body mass index. You probably wouldn't keep height and weight once you created body mass index because the combination of those three would have too much redundancy. Weight is not redundant with height, they're correlated, certainly, but they're different enough that you would keep them in, but you probably wouldn't keep all three. Again, there's as much art as science to this, but that redundancy will cause a problem in all of these algorithms. It will manifest itself in different ways, and sometimes you have to really master the algorithm before you can spot the damage that it's causing, but redundancy is a problem in them all. And some implementations have dedicated features as we've mentioned. Here's my advice when this is the case. Try building the model with this feature turned on and also with this feature turned off. Finally, although it's a bit advanced, one of my favorite tricks is to use boosting. Picture this now, everybody. You build a single tree and maybe it's chosen 35 variables out of 100. Go ahead and build 500 trees and find out if there are any variables that were used in none of those 500 trees or any variables that were used in all of those 500 trees.
>
> **[6:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/data-reduction?u=76281980&t=377)** That is one of my favorite tricks. I wanna leave you with the following thought. Modeling challenges, and this is not just feature selection, but all modeling challenges are best addressed empirically. So, the best way to tackle data reduction or a whole host of other problems is to try it numerous different ways, fight through the modeling process through experimentation and persistence. There is no one best way, you have to determine empirically what best fits for your dataset and for your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (4), [[Statistics]] (3)
> **Analogies:** for instance (3), picture (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### [AutoML](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=0)** - [Instructor] Once you've started to use the various [[Algorithms]] that we've discussed in this course, you're going to discover that once you set up the problem for one of these binary classification algorithms, you're also going to be set up for several others. Many software tools have taken advantage of this with AutoML features, and you're looking at one right now. This is the so-called Auto Classifier and [[IBM SPSS]] Modeler. You'll notice there are 17 modeling algorithms that are all using the same setup. So if I click on Fields here, it's saying using predefined roles, meaning that all of them are going to use the same fields, and under Modeling is various settings, like whether we're building on the training or the test partition, or rather whether we're ranking on the training or test partition. That's an important distinction. We want to build on the training, but we want to rank or test on the testing. But then again, here in the Expert tab, this is where the action is. We have C5, we have Logistic, we have Bayesian, we have KNN, we have Random Trees, we have XGBoost. We have a whole bunch of these algorithms all using the same setup, so we can run this, and it will rank them all with one setting. So I often say that during the modeling phase, I'll go on long walks or take long breaks, and this is why, because you're setting up the problem, and then you have to let the computer take its turn. But there are lots of software packages that do this, so let me show you another.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/automl?u=76281980&t=94)** So here we are in [[Knime]]. That's spelled K-N-I-M-E. And here, we have not quite as many models, but a bunch, and we can see that we've set up the variables up at the top, and we have models to train. We have Naive Bayes, we have [[Logistic Regression]], we have Gradient Boosted Trees. It's not a surprise that all of these platforms will have a similar list. They'll sometimes have a mix of ones that they're pulling in from [[Python (Programming Language)|Python]] and proprietary ones, but again, the list will be similar, and the concept is similar. We set it up once. We've run it a whole bunch of times. We let the computer do its job, and that is a wonderful way to leverage not only the computer's ability to perform these algorithms, but to leverage what you've learned in this course in terms of knowing about these different algorithms, and then letting the data tell you which of these many algorithms is the best fit for your data in any given circumstance. So no matter what software package you use, you'll have something like this that will allow you to run a whole bunch of models all at once. And if you want to explore how this impacts the machine learning lifecycle, I've actually recorded an entire course on AutoML that's right here in the library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (7), [[IBM SPSS]] (1), [[Knime]] (1), [[Logistic Regression]] (1), [[Python (Programming Language)|Python]] (1)
> **Prerequisites:** set up (3), setup (2)
> **Env Vars:** ibm (1), spss (1), knn (1), knime (1)
> **CLI Commands:** python (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-classification-modeling/next-steps-20206114?u=76281980&t=0)** - [Instructor] So what's next on your machine learning journey? It's always best to practice as soon as you've learned a new skill. So go to your machine learning tool of choice, grab a data set, and try the [[Algorithms]] that were new to you. But what if you haven't learned a machine learning platform yet? I'm a big fan of starting with Codeless machine learning first. Certainly if you want to learn R and [[Python (Programming Language)|Python]], there are lots of great options in the library. But if you want to give Codeless a try, there are two learning paths for you. There's a [[Knime]] learning path and there's an [[IBM SPSS]] learning path. They both start with basic operations and then move on to the kinds of algorithms that we've discussed. For instance, there are decision tree courses in both learning paths. Whichever path you choose, I hope you'll let me know how you are progressing by posting your progress, following me on [[LinkedIn]], and maybe even attending one of my [[Microsoft Office|office]] hours. And if you see me at a conference, I hope you'll say hi.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Python (Programming Language)|Python]] (1), [[Knime]] (1), [[IBM SPSS]] (1), [[LinkedIn]] (1)
> **Env Vars:** knime (1), ibm (1), spss (1)
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