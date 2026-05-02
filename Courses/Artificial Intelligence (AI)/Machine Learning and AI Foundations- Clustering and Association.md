---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: machine-learning-and-ai-foundations-clustering-and-association
url: "https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association"
duration_minutes: 213
duration: 3h 33m
level: Intermediate
updated: 1/31/2024
learners: 104585
skills:
  - Machine Learning
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQESH_ejD_5LfQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707244928378?e=2147483647&amp;v=beta&amp;t=L9-ZdmsgChOHq_pRQ2lBpHkykKmBXpe-gOkNi4wffoc"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your SPSS Skills]]'
prev_courses:
  - '[[Machine Learning and AI- Advanced Decision Trees with SPSS]]'
path_nav: '[{"path":"Develop Your SPSS Skills","position":6,"total":6,"prev":"Machine Learning and AI- Advanced Decision Trees with SPSS","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/machine-learning
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20and%20AI%20Foundations-%20Clustering%20and%20Association.md)

![Machine Learning and AI Foundations: Clustering and Association](https://media.licdn.com/dms/image/v2/D4D0DAQESH_ejD_5LfQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707244928378?e=2147483647&amp;v=beta&amp;t=L9-ZdmsgChOHq_pRQ2lBpHkykKmBXpe-gOkNi4wffoc)

# Machine Learning and AI Foundations: Clustering and Association

> Unsupervised learning is a type of machine learning where algorithms parse unlabeled data. The focus is not on sorting data into known categories but uncovering hidden patterns. Unsupervised learning plays a big role in modern marketing segmentation, fraud detection, and market basket analysis. This course shows how to use leading machine-learning techniques—cluster analysis, anomaly detection, an

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association) | 3h 33m | Intermediate | 105K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Clustering and association](#clustering-and-association)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
  - [What is unsupervised machine learning?](#what-is-unsupervised-machine-learning)
- [**1. What Is Cluster Analysis?**](#1-what-is-cluster-analysis) (6 videos)
  - [Looking at the data with a 2D scatter plot](#looking-at-the-data-with-a-2d-scatter-plot)
  - [Understanding hierarchical cluster analysis](#understanding-hierarchical-cluster-analysis)
  - [Running hierarchical cluster analysis](#running-hierarchical-cluster-analysis)
  - [Interpreting a dendrogram](#interpreting-a-dendrogram)
  - [Methods for measuring distance](#methods-for-measuring-distance)
  - [What is k-nearest neighbors?](#what-is-k-nearest-neighbors)
- [**2. K-Means**](#2-k-means) (11 videos)
  - [How does k-means work?](#how-does-k-means-work)
  - [Which variables should be used with k-means?](#which-variables-should-be-used-with-k-means)
  - [Interpreting a box plot](#interpreting-a-box-plot)
  - [Running a k-means cluster analysis](#running-a-k-means-cluster-analysis)
  - [Interpreting cluster analysis output](#interpreting-cluster-analysis-output)
  - [What does silhouette mean?](#what-does-silhouette-mean)
  - [Which cases should be used with k-means?](#which-cases-should-be-used-with-k-means)
  - [Finding optimum value for k: k = 3](#finding-optimum-value-for-k-k-3)
  - [Finding optimum value for k: k = 4](#finding-optimum-value-for-k-k-4)
  - [Finding optimum value for k: k = 5](#finding-optimum-value-for-k-k-5)
  - [What the best solution?](#what-the-best-solution)
- [**3. Visualizing and Reporting Cluster Solutions**](#3-visualizing-and-reporting-cluster-solutions) (3 videos)
  - [Summarizing cluster means in a table](#summarizing-cluster-means-in-a-table)
  - [Traffic Light feature in Excel](#traffic-light-feature-in-excel)
  - [Line graphs](#line-graphs)
- [**4. HDBSCAN**](#4-hdbscan) (2 videos)
  - [How does HDBSCAN work?](#how-does-hdbscan-work)
  - [An HDBSCAN example](#an-hdbscan-example)
- [**5. Cluster Methods for Categorical Variables**](#5-cluster-methods-for-categorical-variables) (7 videos)
  - [Relating clusters to categories statistically](#relating-clusters-to-categories-statistically)
  - [Relating clusters to categories visually](#relating-clusters-to-categories-visually)
  - [Running a multiple correspondence analysis](#running-a-multiple-correspondence-analysis)
  - [Interpreting a perceptual map](#interpreting-a-perceptual-map)
  - [Using cluster analysis and decision trees together](#using-cluster-analysis-and-decision-trees-together)
  - [A BIRCH/two-step example](#a-birchtwo-step-example)
  - [A self organizing map example](#a-self-organizing-map-example)
- [**6. Anomaly Detection**](#6-anomaly-detection) (4 videos)
  - [The k = 1 trick](#the-k-1-trick)
  - [Anomaly detection algorithms](#anomaly-detection-algorithms)
  - [Using SOM for anomaly detection](#using-som-for-anomaly-detection)
  - [One Class SVM](#one-class-svm)
- [**7. Association Rules and Sequence Detection**](#7-association-rules-and-sequence-detection) (7 videos)
  - [Intro to association rules and sequence analysis](#intro-to-association-rules-and-sequence-analysis)
  - [Running association rules](#running-association-rules)
  - [Some association rules terminology](#some-association-rules-terminology)
  - [Interpreting association rules](#interpreting-association-rules)
  - [Putting association rules to use](#putting-association-rules-to-use)
  - [Comparing clustering and association rules](#comparing-clustering-and-association-rules)
  - [Sequence detection](#sequence-detection)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Clustering and association](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/clustering-and-association?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/clustering-and-association?u=76281980&t=0)** - [Keith] If you're on your machine learning journey, then you've probably heard that you don't always meet the criteria for [[Supervised Learning]].
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/clustering-and-association?u=76281980&t=8)** You might need unsupervised machine learning.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/clustering-and-association?u=76281980&t=12)** We'll review several of the most common [[Algorithms]] for performing cluster analysis, including hierarchical, k-means, BIRCH, HDBScan and self-organizing maps.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/clustering-and-association?u=76281980&t=23)** We'll be doing software demonstrations throughout, using both SPSS Modeler and SPSS [[Statistics]], but our focus will be the concepts and interpretation, so there'll be a lot of running a model, taking a look, making improvements and then running it again.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/clustering-and-association?u=76281980&t=39)** I'm Keith McCormick, and I'm an active consultant, conference speaker and book author.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/clustering-and-association?u=76281980&t=44)** There's a lot to learn, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Supervised Learning]] (1), [[Algorithms]] (1), [[Statistics]] (1)
> **Env Vars:** spss (2), birch (1)
> **Speakers:** - [keith] (1)

#### [What you should know](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=0)** - [Instructor] So what do you need to know before you begin this course?
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=4)** I'm going to assume that most of you are new to unsupervised learning in general and cluster analysis and association rules specifically.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=16)** Also I'm going to assume that you're quite new or brand new to SPSS [[Statistics]] and SPSS Modeler, so the prerequisites are at a minimum.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=25)** But I do have some cautions for you that will really help you enjoy the course fully.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=31)** You should when you download SPSS Statistics and SPSS Modeler because we're going to be using both, take a few moments to just orient yourself to the tools.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=43)** If you want to get a deeper comfort level with SPSS Statistics, there's a wonderful course, SPSS Statistics Essentials, in the library.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=54)** But if you're either a quick study or patient with maybe having to repeat a step or two, you should be able to largely start from scratch and do okay.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=66)** One thing that will help you a lot is basic comfort with descriptive statistics: mean, median, this kind of thing.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=76)** In fact, if you're comfortable with the fact that the mean and the median are sometimes not the same and what that implies about the data when the mean is bigger than the median or vice versa, then you're comfortable with the kinds of things that I'm going to be drawing upon in the course.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=95)** I'm going to be as explicit as I can when I introduce new things, but a comfort level with descriptive statistics will really help you enjoy the course.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=105)** Finally, we're going to be doing machine learning and [[Data Mining]] type activities in this course, so if your gateway to this topic is an academic background in statistics, the whole notion of these highly exploratory techniques to data analysis might be new to you.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=126)** You might be more familiar with experimental design or inferential statistics and so on.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=133)** If so, you might want to get comfortable with the whole idea of machine learning and data mining before taking this course.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=140)** My Essential Elements for [[Predictive Analytics]] might help you do so, but again if you're comfortable entering a world that might be a little bit new to you, you can probably start with this course as well.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-you-should-know?u=76281980&t=152)** I hope you enjoy the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (8), [[Data Mining]] (2), [[Predictive Analytics]] (1)
> **Env Vars:** spss (6)
> **Tools:** notion (1)
> **Definitions:** is an  (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-the-exercise-files?u=76281980&t=0)** - [Instructor] I've made a real effort to give you all of the resources that you need to click along with me and be very engaged as I go through the material.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-the-exercise-files?u=76281980&t=10)** If you want to use the same software package that I've used in doing these demonstrations, you can download the trial of [[IBM SPSS]] [[Statistics]] and IBM SPSS Modeler at these locations.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-the-exercise-files?u=76281980&t=27)** I've also given you all the necessary data and when appropriate the necessary code.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-the-exercise-files?u=76281980&t=33)** Keep in mind that if you are not a user of SPSS Statistics or SPSS Modeler that I've made an effort to serve your needs as well.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-the-exercise-files?u=76281980&t=44)** I've provided the data when necessary as tab delimited data so it can be imported into other software packages but here's all the files that I generated as I was working through the demonstrations.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-the-exercise-files?u=76281980&t=58)** In the main resources folder, you will find the four data sets that I use repeatedly throughout the cluster analysis and association demonstrations.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-the-exercise-files?u=76281980&t=68)** One time demonstrations are found in the additional files folder.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-the-exercise-files?u=76281980&t=75)** And note here, I have a text version of a data file that you can use, I also have Modeler streams which are indicated with .str.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-the-exercise-files?u=76281980&t=87)** I've also provided a folder Modeler streams that has the two streams that are the primary ones that I use for several examples throughout those sections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IBM SPSS]] (2), [[Statistics]] (2)
> **Env Vars:** spss (4), ibm (2)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [What is unsupervised machine learning?](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=0)** - [Presenter] Machine learning is such a rapidly changing area that we really want to pause for a moment and define both machine learning and our topic, unsupervised learning.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=13)** Let's start with machine learning.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=15)** Wikipedia defines it in the following way.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=18)** Machine learning is a field of computer science that gives computers the ability to learn without being explicitly programmed.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=26)** This is the phrase that you'll commonly hear that I think is causing a bit of confusion.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=33)** Let's continue just a bit, but I want to contrast this with my own definition of machine learning.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=38)** Wikipedia's continues, machine learning explores the study and construction of [[Algorithms]] that can learn from and make predictions on data.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=47)** I certainly agree with this.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=48)** So here's the problem.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=50)** The not being explicitly programmed, what are we talking about exactly?
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=55)** So take a look at my definition.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=58)** A broad term that generally refers to presenting carefully curated data to computer algorithms that find patterns and systematically generate models, and those models are in the form of formulas and rule sets.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=73)** What I'm trying to clarify here is that humans write the algorithms.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=78)** So this whole notion that we're finding things without programming, we're not writing the models, but we are writing the algorithms that write the models.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=89)** Back in the '80s expert systems were a hot topic.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=94)** But back then a human would interview another human expert, let's say a lawyer, and then actually write the rules, and actually write it that way.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=103)** We haven't done it that way for decades.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=106)** But again, we write the algorithms.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=108)** We curate the data.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=110)** The algorithms take care of that next piece generating the models.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=115)** So what form does this take in [[Supervised Learning]]?
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=120)** In supervised learning we give the computer a data set with what is called a target variable.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=126)** That's whether or not the person had heart disease, or did not have heart disease, let's say.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=131)** And we give a series of input variables.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=133)** The modeling algorithms automatically generates the model, which establishes a relationship between the target and the input variables.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=142)** This is usually described as giving a series of pairs.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=146)** You give the inputs and along with the input you give the outcome.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=150)** This is not the subject of our course today.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=153)** [[Decision Trees]] is perhaps the most common supervised learning technique, and I actually have a course on decision trees right here in the library.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=163)** Unsupervised learning is a search for homogeneous subsets that produces one or more possible segmentations of the data that differ by how similar the cases are within the segment and how many subsets there are, and how common or rare they are.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=183)** So the whole idea of homogeneous is just put similar cases together.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=187)** Now, the computer will help you do the search.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=191)** But you have to decide how similar is similar enough for your application.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=196)** You have to decide how many subsets you want there to be.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=200)** And you have to decide how rare or common the subsets are going to be.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=203)** So it's a true partnership between the human and the algorithm.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=208)** I've seen definitions of unsupervised that imply the computer does all of these things.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=214)** Unsupervised is actually more difficult for the human analyst than supervised in many cases.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=220)** For instance, take a look.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=222)** Let's just say we were asking our computer to perform unsupervised segmentation on these blocks.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=230)** Should be separate them so that they're blue and non-blue?
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=235)** Or maybe red and non-red?
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=238)** Should we be focusing on shape or is that less important?
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=242)** Should we be focusing on size?
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=245)** It's probably impossible to answer outside some context.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=249)** Specifically for us, some business context.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=254)** So the computer will help group, but only in partnership with a human analyst that knows what the goal of the segmentation will be.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=262)** So sometimes I see definitions of unsupervised that make it seem like it's pretty much supervised, but when you can't find a target variable or you don't have ready access to a target variable it's actually a very different set of goals when we do unsupervised.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=280)** Now we come to a third area of machine learning called [[Reinforcement Learning]].
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=285)** Only recently has this been a source of confusion, mostly because of two application areas that have gotten a lot of excitement.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=294)** Technologies like driverless cars and technologies like the one that was able to beat the world champion at go, these operate in a very different way.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=306)** At first, they sound like supervised.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=309)** But they're quite different.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=311)** What's happening here is you're not presenting the algorithm with a very large number of input and output pairs.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=320)** Rather, it's working in an environment and it's correct and incorrect not for each row of data, but it's rather rewarded for correct actions it takes in the environment.
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=333)** This is the kind of technology that arises for very cool things like watching a robot stumble and then as it practices it gets better.
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=342)** A lot of folks think this is the way supervised learning works, but it's not true.
>
> **[5:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=346)** You're actually presenting that carefully crafted data set in one shot to the computer, and the algorithm takes that data and immediately creates the model.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=357)** The model does not learn over time.
>
> **[6:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-unsupervised-machine-learning?u=76281980&t=361)** Reinforcement learning is the style that learns over time and is quite different from the other two.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (7), [[Supervised Learning]] (4), [[Decision Trees]] (2), [[Reinforcement Learning]] (2)
> **CLI Commands:** make (2), find (2)
> **Definitions:** is a  (2), refers to (1), is called (1)
> **Tools:** notion (1)
> **Analogies:** for instance (1)
> **Speakers:** - [presenter] (1)


### 1. What Is Cluster Analysis?

[↑ Back to Table of Contents](#table-of-contents)

#### [Looking at the data with a 2D scatter plot](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=0)** - [Instructor] We're going to start with something pretty straightforward.
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=2)** We're going to simply open our data file and look at two of the variables visually using a scatter plot.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=9)** And then, we're going to talk about what cluster analysis does with the data.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=14)** So in the Resources folder, there is a data file that's all prepped and ready to go for cluster analysis called ReadyForCluster.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=22)** That's the file we're going to use.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=26)** Okay, let me orient you to the data file.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=29)** We've got a series of variables.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=32)** Product category, sales amount, entertainment.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=35)** We have product category, game consoles, sales amount.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=40)** So we have one, two, three, four, five, six, seven product categories in which we have the customers' total spend.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=51)** And then, over on the right-hand side of the data file, we have the same seven repeated, but it's not in dollar amounts.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=58)** It's a spending ratio.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=61)** For now, we're going to focus on the dollar amounts, so in other words, kind of of the closer to the original raw data, not the ratios.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=69)** Later in the course, we're going to learn two additional things about this data file.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=74)** We're going to learn about why and cluster analysis, you're going to want to use the ratios and not the dollar amounts.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=82)** And then, also, I'm going to be walking you through how I created this dataset from the raw data, which basically would be receipts generated at point of sale.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=93)** Okay, so let's go into Graphs and Chart Builder.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=98)** And we're going to do a very simple scatter plot here.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=102)** If you're using a tool other than SPSS, for instance, you'll certainly be able to generate a scatter plot very easily.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=109)** And we're going to go ahead and choose two of the variables.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=112)** I've chosen them because they're rather different from each other and the pattern that they show in the data.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=117)** Video Games and [[Hardware]], just those two.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=121)** And we're going to click on Okay.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=126)** Here's our scatter plot.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=128)** There are a couple of things about this data that makes for a rather unattractive scatter plot.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=135)** It just doesn't look the way we expect a scatter plot to look.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=138)** Certainly, this isn't showing a strong linear relationship between these two variables.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=142)** But here's what's real-world about this.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=145)** First thing that's real-world about it is that there's a lot of cases.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=148)** And your real-world data's going to have a lot of cases too when you're looking at, even though this is customers and not transactions, it's going to make it hard to read a scatter plot like this.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=158)** The other thing about it that makes it a little bit hard to see what's going on is that both of these variables are highly, highly skewed, meaning that there's tons of cases that have near zero spend and then a handful of outliers that are spending way more than everybody else.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=175)** That is absolutely what you're going to see in your real data.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=178)** This kind of point-of-sale data, of course, is not the only raw material you might use for cluster analysis, but real-world data tends to be skewed this way with lots of zeros.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=188)** So let's add a little bit of visual help here to see what's going on.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=193)** I'm going to double-click on this to put it into Chart Editor.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=197)** And I'm going to go up to Elements, Fit Line at Total, but I'm going to make two requests.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=203)** I'm going to ask for the mean of Y, 'cause I'm not looking for a regression line here.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=206)** I'm not looking for a trend line.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=208)** I want the mean of Y and I don't need the formula or anything.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=213)** So that will be kind of a visual indicator of where the typical spend is.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=219)** And then, I'm going to do the same for a vertical axis as well.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=223)** I'm going to go ahead and add one.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=225)** So I'm going to add a vertical reference line and I'm going to have that set to the mean.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=234)** So this is really typical raw material that you might try to send to a cluster analysis.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=241)** So again, what's typical about this is we have a ton of data piled up at zero, zero.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=246)** So let's take a look at this visually.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=248)** We've essentially broken the data into four categories or segments, haven't we?
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=253)** The first segment we can think of is all those folks that are near zero on Hardware and zero on Video Games.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=260)** That constitutes a clump or a cluster of our data.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=265)** The next group that we could describe is the folks that had high spend on Video Games, but near zero on Hardware.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=274)** Then obviously, we have the folks that spend a lot on Hardware, but near zero on Video Games.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=280)** Finally, we have this large area, where they've spent above average on Hardware and above average on Video Games.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=288)** Let's pause for a moment and take stock.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=291)** This all seems fairly straightforward and obvious, and you know, it is.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=295)** Let's think about what we've just done.
>
> **[4:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=298)** We're looking at just two variables and we're describing what dots are close to what other dots.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=306)** Bottom line, folks, you don't run cluster analysis on two variables or frankly, even three.
>
> **[5:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=313)** What cluster analysis is doing is using math to find the same kinds of groups and they're very often defined by very low, high, reverse high-low, right.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=328)** But we're doing it on 10 or 20 or 30 variables, which is way beyond what we can do visually.
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=335)** So that's really all cluster analysis is.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/looking-at-the-data-with-a-2d-scatter-plot?u=76281980&t=337)** It's looking for what cases are proximate to which other cases, literally measuring the distance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (5)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (1), double-click (1)
> **Definitions:** is a  (1), in other words (1)
> **Env Vars:** spss (1)
> **Cross-References:** later in (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Understanding hierarchical cluster analysis](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=0)** - [Instructor] Okay we're still in the ready for cluster data set.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=4)** I have a smaller version of this data set, literally just fewer rows that I've already prepared, let's open it.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=12)** File, open data, we're going into the resources folder and we're going to grab ready for cluster GT 60 trans which stands for greater than 60 transactions.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=27)** So I've already created this file but in a later video I'll be showing you how to select a subset of data just like that.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=43)** And here is the smaller file.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=45)** This file has just 34 rows and as the name implies, these are all of the customers that had greater than 60 transactions.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=57)** So why the smaller file, you'll fairly rarely have these few cases, it's really quite a small number.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=64)** However, it's going to help us see visually how hierarchical cluster analysis works.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=70)** So I'm going to go the graphs chart builder, I'm going to do a scatter plot but I'm going to do 3D scatter plot.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=78)** I don't have any variables that have special status here so I can choose any variable to be my Y, X or Z.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=86)** I'm going to choose video game sales amount as my Y axis, [[Hardware]] as my X axis and these are the sales sums not the ratio variables, these are the variables at the top of the data set.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=103)** And entertainment is going to be the Z.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=108)** And I'm going to go ahead and click on okay.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=113)** Here it is!
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=114)** So let's put this in its own window, I can actually make it a bit larger by clicking outside the chart area and increasing this a little bit, that can be a helpful trick.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=128)** A tiny bit less.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=132)** What I usually suggest that people imagine when they're trying to understand how hierarchical cluster analysis works, is imagine that you're sitting in a room and obviously a room has three dimensions, it has a length and width but it also has a height.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=149)** So you want to imagine that you could be lying on the floor, standing on a table, you want to keep in mind that you have that third dimension.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=157)** All hierarchical cluster analysis is doing is identifying who is sitting next to who in this three dimensional room.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=167)** We're not really focused on the concept of height or width but rather what the three dimensions represent.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=174)** So remember here, height is video game purchases and width is hardware sale and the depth of the room is entertainment sales amount.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=184)** So we can see that there's a couple of cases that are really quite close to each other.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=192)** So over here, that pair we can't really tell clearly enough in the 3D if that's the closest pair.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=199)** But let's imagine for a moment that they are, the way that hierarchical cluster analysis works is those two cases then form an explicit pair in the data set.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=210)** So we have one pair and a couple dozen singles.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=216)** Then another pair is formed or alternatively if there are three that are very close to each other, rather than getting two pairs we might get a triple.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=226)** This process continues, not unlike water droplets, (mumbles) on a flat surface like a table.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=234)** Separate and distinct little droplets of water and then they (mumbles).
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=237)** So next thing you know you have groups of three or four or five cases and some singles.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=243)** And then the closest ones come together and this process continues until you have one cluster with everybody in it.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=252)** So you start with a couple dozen clusters of one but where you end up is a single cluster with all cases.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=262)** When you look at hierarchical cluster output you can actually see this process unfolding.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=268)** So when you have a smaller data set you can really see the process step by step.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=274)** There's a problem though.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=276)** The problem is that hierarchical cluster analysis is very computationally intensive because what's happening is if you have 30 cases you're doing 30 times 30 measurements 30 iterations.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=290)** So the number of calculations is roughly your sample size cubed.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=295)** Certainly not a problem with the tiny data set we're looking at now but there's a big difference everybody between 30 cubed, a thousand cubed, 10,000 cubed, let's say half a million cubed.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=309)** So basically you simply can't do hierarchical on large data sets even these days with the powerful computers that we have most [[Data Mining]] or predictive analytic software packages simply don't support hierarchical because it's so computationally intensive.
>
> **[5:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=327)** So when you would want to use hierarchical cluster analysis is when it's meaningful to look at a smaller data set.
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=333)** For instance, rather than looking at customers, maybe you're looking at information about 30 stores that's been rolled up to the store level Or maybe your customers are largely found in 50 zip codes so you roll your data, aggregate your data up to those 50 zip codes and then look at it then.
>
> **[5:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/understanding-hierarchical-cluster-analysis?u=76281980&t=350)** It can be a powerful way to understand how the data evolves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Data Mining]] (1)
> **Analogies:** imagine (4), just like (1), for instance (1)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Running hierarchical cluster analysis](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=0)** - [Instructor] We're going to walk through the menus for running a hierarchical cluster analysis.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=5)** Now remember, hierarchical cluster analysis is very computationally intensive.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=10)** You can only use it on small data sets.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=12)** So we're in ReadyForCluster GT60 Trans, which has just 34 cases in it.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=20)** Analyze, Classify, Hierarchical, and here we go.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=28)** Now also remember that we have two versions of the variables in here.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=31)** We have the sums and the ratios.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=34)** The ratios are there because they've been standardized.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=38)** So let me show you something in the menus.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=40)** If you go to Method, you can actually see that this menu will allow you to transform your original variables in a number of different ways.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=55)** You can transform them to use Z-scores, which means that the average is zero, a plus one is one standard deviation above the mean, and a minus one is one standard deviation below the mean, and you can see numerous other choices that you have.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=69)** Now, note as well that if you choose to standardize here, you can standardize by variable or by case.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=76)** When you standardize by variable, you're going to be doing what you would normally associate with standardizing, namely that zero would be the average, let's say video game purchases compared to other people.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=90)** So average in this case is comparing people to people.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=93)** However, if you standardize by case, what you're saying is that Joe Smith has a particular average spend, but his video game spend is higher than his average, but his [[Hardware]] spend is lower than his average.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=107)** So you can do this any number of ways.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=110)** I'm going to cancel out of this because I've chosen to standardize myself in the data set because that way I can then report on those variables, I can share those variables with colleagues, and so on.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=122)** So it's powerful that the menus allow you to do that, but there's also tremendous advantage in doing your own standardization.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=129)** In a later video, I'm going to walk you through how I standardized this particular set of variables.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=136)** So I'm going to bring the standardized variables over and I'm going to click on [[Statistics]], and we're not going to focus too much on the statistics at the moment.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=148)** We'll go ahead and generate a range of solutions here This is really just going to be a frequencies table for clusters, let's say, between three and eight, which is a common range that I might choose.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=161)** Under Plots, we're going to choose a dendrogram, but not do the icicle, it's called.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=169)** Click on Continue.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=172)** And then under Method, we just saw this menu, but I want to revisit another aspect of it.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=177)** There are numerous methods, and they align with how your measurement is.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=183)** Now, we have integral data, but clearly you could also do count data.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=187)** How many video game purchases did they make?
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=190)** How many hardware purchases did they make?
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=193)** Or binary, did they make video game purchases, yes or no, did they make hardware purchases, yes or no.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=201)** Cluster analysis is hard work, folks, and one of the reasons that it is is there's a lot of possibilities to try and you can't determine which solution is going to be the best on a theoretical basis.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=212)** It's try, try, try again.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=215)** Sometimes these choices will align better or less well with how your data's structured, but you really want to try multiple methods and just iterate and iterate again until you find the best solution.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=229)** We're going to be reversing exactly those kinds of analyses.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-hierarchical-cluster-analysis?u=76281980&t=232)** We're going to keep that on defaults and then we're going to go down and click on OK.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[Statistics]] (2)
> **CLI Commands:** make (4), find (1)
> **UI Navigation:** click on (3), go to (1)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** gt60 (1)
> **Speakers:** - [instructor] (1)

#### [Interpreting a dendrogram](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=0)** - [Narrator] Here's our output.
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=2)** We're going to skip past the Agglomoration Schedule.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=4)** That's actually telling you step by step by step who got grouped with who.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=10)** The Cluster Membership is a little bit detailed, so we won't spend much time on it, but obviously this is telling you for each individual case where they ended up, depending on whether or not we put them into three clusters or four clusters or five clusters.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=29)** Figuring out how many clusters you need is one of the trickiest things that you have to do, and we're going to be getting a lot of practice deciding whether we want a more granular solution, like putting them into eight clusters, or a less granular solution, like putting them into three clusters.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=46)** For now, let's focus our attention on the so-called Dendrogram.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=55)** I'm going to put this in its own window, and you can see that SPSS aligns this vertically, but I'm going to go ahead and export this so that we can look at it horizontally.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=67)** Okay, I've made this diagram oriented horizontally and I've provided a copy of the PDF that's in this format.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=78)** So let's walk through what's happening.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=80)** What you want to do is reflect on the hierarchical clustering analysis process that's already been described.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=88)** Namely, that you're starting with all the cases as individuals and then you're clumping them together and clumping them together.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=97)** Imagine a horizontal line at where distance says 15.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=104)** What you'll find is that horizontal line passes through two vertical lines.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=111)** Those two vertical lines would represent two clusters.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=116)** The vertical line on the left grows downwards to cases 15, 26, 24, two, and so-on, all the way down to case 23.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=128)** The other vertical line branches down and branches down to cases five and 28 and then eventually way over on the bottom right-hand side, cases six and 30.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=139)** So this is particularly useful when you can label these cases meaningfully.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=146)** Again, situations like these are 34 stores in 34 different cities, and you actually put the names of the cities on this diagram.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=159)** And one is Boston and one is San Francisco and one is Atlanta.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=163)** Then you can actually see what cities are closest to each other.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=167)** Now imagine the following.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=169)** What if you were to draw a horizontal line at distance five?
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=175)** See on the Y-axis how it says Rescaled Distance?
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=180)** Don't worry so much about what that's measured in.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=183)** Obviously it's not measured in feet or meters or anything like that.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=187)** It's based upon the scale of your data.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=191)** But a horizontal line drawn at five would pass through how many vertical lines?
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=198)** Four, right?
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=199)** That's what the solution looks like if you declare four clusters as the number of clusters that you like.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=206)** But now what's interesting is Cluster Two, the second vertical line from left to right, in other words, has just two cases in it, seven and 23.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=216)** And the third cluster from left to right has just two cases in it, five and 28.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=221)** Then you can look these up and find out what it is.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=224)** So when it's possible to meaningfully work with a data set of this size, you really get a detailed sense of what is going on.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=233)** Even if your data set is large, consider taking a small sample of your data just to experience looking at cluster analysis through this lens.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=244)** It will inform your knowledge of other clustering [[Algorithms]] that are better at scaling up to large data sets.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-dendrogram?u=76281980&t=251)** Go ahead and give yourself that experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** spss (1), pdf (1)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** imagine (2)
> **Speakers:** - [narrator] (1)

#### [Methods for measuring distance](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=0)** - [Instructor] I want to pause for a moment to zero in on a topic briefly, but I think it's an important one.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=7)** I basically want to make the case that hierarchical is not dead, or at least shouldn't be.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=13)** It is an older technique, it doesn't scale very well, but we've learned some useful things from the dendrogram.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=20)** I also want to point out that there's something unique to hierarchical, a benefit that you don't really get anywhere else.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=26)** So let's revisit the hierarchical menu.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=31)** And this technique has been around for a long, long time, so you're going to be able to find hierarchical in whatever your tool of choice might be.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=40)** Let's go to method, and this is really what makes hierarchical unique is the wealth of different options that you have here.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=48)** And I really think that due diligence requires that you consider more than these.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=54)** So the first time I was on a big cluster analysis project was many years ago.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=61)** I was still in my 20s, I was just starting out doing consulting work, and I had a dataset of a million records that had information about different golfers.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=72)** I was struggling to get a solution that I was happy with.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=76)** And I actually took a 1% sample, so think about that folks, that's 10,000, 'cause it wouldn't handle more, so I had 10,000 records, which is plenty to find patterns.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=85)** But I did it every which way, using these different distance measures.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=89)** And I was able to find some patterns that I didn't find using k-means, 'cause k-means is essentially restricting us to one approach.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=97)** I've never really forgotten that experience.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=99)** So let's walk through our options just a little bit.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=103)** If you see, there are several just plain methods, and that's before we get to the distance options, which are also numerous.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=113)** So just a couple of things to think about.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=116)** When you're determining whether a particular cluster is close to another cluster, in other words, what you're doing here is looking at distances between clusters, not cases, nearest neighbor is what it sounds like.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=129)** You're using the closest neighbor of those two different clusters.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=134)** Furthest neighbor is also what it sounds like.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=137)** So you might think, well why so many different options?
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=139)** Well, between-groups linkage and within-groups linkage are essentially doing averages.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=146)** They tend to be sensitive to outliers.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=149)** A technique like furthest neighbor is less so.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=152)** Sometimes these techniques will come up with clusters of very different sizes, but one of the things that Ward's method is famous for is it produces clusters of similar size.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=164)** Bottom line, there's really no right or wrong, but these are different from each other, and they're not different in trivial ways, and they're going to give you different solutions.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=173)** A thorough analysis really should include using multiple approaches.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=179)** Let's look at the help for this software, and we see that all of the things that we just mentioned are discussed.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=186)** What you won't find as much is advice.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=191)** So a simple listing of them doesn't help so much, does it?
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=195)** But I've told you about two of the key ones, sensitivity to outliers and Ward's method's ability to have similar sizes.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=203)** I'm going to recommend a book to you as well.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=206)** A gentleman named Everitt has written a book on cluster analysis, which has now gone several editions.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=213)** I think it's currently in its fifth edition.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=215)** It's academic in style, but I remember the day when I first encountered this book.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=220)** Out of some frustration many years ago, trying to better understand all these distance measures, I searched the index of his book, and was able to find that many of these distance measures were referenced.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=232)** So you really have to have a substantial cluster book to find out more about these, but it can be a powerful experience.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=239)** So we've been setting up the data as interval data, because we've been doing ratios.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=245)** But a powerful thing to try, that really, I try on virtually every project, is to also create binaries for the same variables.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=255)** So not how much they spent on TVs or video games, but simply did they spend on video games or TVs.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=265)** And one of my favorites to talk about, I invite you to learn a little bit more about this one, or maybe to try it on your own data, is Lance and Williams.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=275)** As you can see, there are dozens of these, but what's interesting about Lance and Williams is it counts two cases as similar if they both have ones, but it does not count them similar if they both have zeroes.
>
> **[4:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=289)** And this is powerful, when you think about something like Netflix, for instance.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=293)** That means that out of the tens of thousands of movies, I might have something in common with a friend if we both watch the same movie, but we're not going to conclude that we have something important in common if we have 9900 movies that neither of us have watched.
>
> **[5:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=313)** It can give you very different results than the other measurement systems.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=317)** In conclusion, I really want you to try hierarchical.
>
> **[5:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=322)** At a minimum, it should be part of your [[Data Science]] professional development to kind of find out where some of these more contemporary approaches come from.
>
> **[5:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/methods-for-measuring-distance?u=76281980&t=331)** But also, it can be powerful in the context of a real world project, because you may discover patterns through some of these methods that you simply won't find with other techniques.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (1)
> **CLI Commands:** find (9), make (1)
> **Definitions:** is an  (1), in other words (1), means that (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [What is k-nearest neighbors?](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=0)** - [Instructor] Okay, we're going to take a look at what is called k-nearest neighbors.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=5)** It's not a clustering technique, per se, but it's closely related to our clustering technique, so by taking a look at this algorithm, we're going to accomplish two things.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=16)** We're going to deepen our understanding of clustering [[Algorithms]], but too, we're going to get to experience what it's like to look at a data set where there's clearly identifiable labels.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=28)** In this case, the names of individuals, and that will really help us understand how these distances are calculated.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=34)** We're going to use a data set that is located in the additional files folder, called Titanic.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=41)** And this data set is rather famous now because it is used as one of the practice data sets on [kaggle.com](https://kaggle.com).
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=50)** If you're not familiar with [kaggle.com](https://kaggle.com), it's a [[Data Science]] or [[Data Mining]] competition web site.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=57)** So here we are in the data set, and again what makes this one so interesting right now, is that we can take the name and actually label the space, so what we're going to look at is not unlike a 3-D scatterplot in some ways, but we're going to be really getting a little bit deeper sense of how proximity is determined and we're going to talk a little bit about categorical variables, a topic that we're going to come back to and revisit on multiple occasions.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=84)** So, we're going to go down to analyze, classify, nearest neighbor.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=90)** Now, it's important to identify something at this point.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=93)** When you declare a target variable, do you see how it's optional?
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=99)** When you declare a target variable, you actually turn this into a classification technique, but we're not going to declare a target variable and it's simply going to calculate distances.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=111)** That's what makes it like a clustering technique, but the moment you add that target variable, you turn into a classification technique, like [[Decision Trees]] or a whole host of others.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=122)** So, we're going to take just three of the variables.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=125)** Let's take age, sex, and passenger class.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=133)** And we're going to add a case label.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=136)** Passenger ID wouldn't be nearly as interesting as the one we are going to choose, name.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=142)** 'Cause we'll actually be able to see these names in the plot.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=145)** We're going to click on OK.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=150)** I'm going to put this in its own window.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=154)** Take a look, I'm going to pick a data point largely at random here, so let's click on this one.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=160)** And, isn't this interesting, now I know there's a lot going on, but what I've done, is I've picked one case and it's actually going to show me the names of the people that are the closest neighbors.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=172)** Now, we're not forming clusters, but obviously what we're doing is very similar to cluster analysis because the only difference between this and a cluster would be the cluster would be a larger group than just a couple, typically.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=185)** I'm actually going to change this so that we are looking at this in a larger space and we can see, for instance, for the case that we've chosen, which is Mrs. Edward Ford, her dot is appearing in red.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=199)** Her three closest neighbors, so in the context of this algorithm, K is equal to three because we're identifying the three closest neighbors.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=210)** We can see that Mrs. Alexander Robins, Mrs. William Skoog, and then Mrs. Barbara, it appears that Catherine is her first name and Barbara is her surname, these are the closest neighbors.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=223)** Now in what sense are they the closest neighbors?
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=226)** This is our first opportunity to talk about categorical variables.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=230)** We can see that the focal case has an age of 48, and the other ladies, similar in age.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=238)** One is 47, two are 45.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=241)** They're all women, naturally, because if they were not women, they would be different on the sex variable, so on a categorical variable, basically having the same value makes you similar and having the other value, makes you dissimilar.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=256)** Now watch out, you really don't want to have complex categorical variables here.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=262)** With only two values, we get away with it pretty much okay, but if you had a large, complicated categorical variable with seven or eight or 10 categories, in fact, even three categories, you'd be in trouble.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=273)** Passenger class is a little bit different, though, because with passenger class, we would say that third class and second class would be closer than third class and first class.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=284)** So here, also, all the women, the original woman that we selected and her three peers all have the same passenger class, namely third class.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-is-k-nearest-neighbors?u=76281980&t=296)** So, again, when you have data where you can use a meaningful label, you really get a good sense of what's going on inside these algorithms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Data Science]] (1), [[Data Mining]] (1), [[Decision Trees]] (1)
> **Analogies:** it's like (1), similar to (1), for instance (1)
> **URLs:** [kaggle.com](https://kaggle.com) (2)
> **UI Navigation:** click on (2)
> **Definitions:** is called (1), is a  (1)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)


### 2. K-Means

[↑ Back to Table of Contents](#table-of-contents)

#### [How does k-means work?](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=0)** - [Instructor] I'm looking at the same 3D scatterplot that we use to understand hierarchical cluster analysis.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=7)** I've done so purposefully because k-means builds upon the hierarchical algorithm, but does it in such a way that it's faster.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=18)** In fact, in the SPSS coding language, k-means is called quick cluster and I believe in the SAS programming language, it's called fast cluster.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=29)** One of the motivations for k-means right from the very beginning was that it was more efficient.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=34)** Hopefully you recall that in hierarchical, we have to measure every distance to every other distance and then we have to iterate through as many times as we have cases.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=45)** Folks, that's n-cubed for the number of calculations.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=49)** What k-means does is I have to tell it what the value of k is, so let's say I say it's three.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=55)** k-means is going to find three well spaced points.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=60)** Let me actually get rid of this one and choose that one.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=63)** I think I've done a reasonable job choosing three points that are spread out from each other.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=71)** In this three dimensional scatterplot, you may look all the way in the back corner and think that that one's more spread out, but the algorithm is going to do this, it's going to do all the math.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=80)** Once it identifies the three well spaced points, now again, that's when k is equal to three, it's going to simply measure all the distances and there's going to be team one, team seven, team 33.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=95)** Once that's done, it's going to calculate the centroid of those clusters and refine the solution a little bit.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=102)** It doesn't make one pass of the data, but it only makes a handful of passes of the data.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=108)** Obviously the nature of this algorithm is that it's doing fewer measurements.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-k-means-work?u=76281980&t=113)** The same basic foundational concepts is hierarchical, but with a little bit of a computer science spin on it to make it a lot faster.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Env Vars:** spss (1), sas (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Which variables should be used with k-means?](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=0)** - [Instructor] We have to talk about a very important topic.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=3)** It's a question that I often get.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=5)** What variables should I be using when I perform my cluster analysis.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=10)** So let's take a look at these initial variables.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=13)** They're really at the heart of the matter.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=15)** These are total spend variables that had been built from a lot of transactional data.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=20)** So I have one row per customer.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=22)** And then I have several variables that represent how much each customer spent in seven different product families.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=31)** What if we go ahead and proceed right now and analyze these variables.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=36)** What's going to happen?
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=37)** Well, the big screen TVs sold in the entertainment department cost a lot more money than the software or the video games.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=46)** So if you go ahead and proceed right now what's going to happen is entertainment sales is going to dominate the solution.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=53)** So just as we've seen in hierarchical, for instance where it automatically will transform for you, we have to somehow get those variables in a form where they all have the same height.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=66)** Now what I've done is I've created ratios that have a minimum of zero and a maximum of one.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=72)** One meaning they spent all their money on that, and zero meaning that they spent none of their money on that.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=77)** But there's numerous ways you could standardize.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=80)** You could use min-max standardization, you could do Z scores, I've chosen to use these ratios.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=87)** So the next question that comes up is what about these other variables?
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=90)** Like number of transactions or total spend, or how long they've been a customer.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=94)** Folks, the more heterogenous your variables are, the more complicated the analysis is going to be in the interpretation.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=104)** So I urge you to consider taking a collection of variables that are essentially all measuring the same thing.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=110)** So not merely standardized, but also variables that are similar in what they're trying to get at.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=116)** This confuses a lot of folks and it even concerns them.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=121)** Because they think, what am I going to then do about gender?
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=124)** Or how many kids the customer has.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=127)** There are ways of tackling this.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=129)** And we're going to discuss both in this course.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=132)** One way is there are actually methods that handle categorical variables.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=136)** The problem with that is it causes some folks to go chasing after these [[Algorithms]] that let them throw all their variables in together.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=143)** You don't really want to use that approach.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=146)** Later in the course, I'm going to be walking through a two-phased process where you first do the cluster analysis, and then you relate your categorical variables to your cluster solution.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-variables-should-be-used-with-k-means?u=76281980&t=157)** So for now we're going to concentrate on the cluster analysis first phase but coming up will be how to deal with those categorical variables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Cross-References:** later in (1), coming up (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Interpreting a box plot](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=0)** - [Instructor] We're going to pause for a moment in our discussion of cluster analysis to do a little skill building.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=6)** We're going to be looking at what's called box and whisker plots, or just box plots a lot.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=11)** I want to make sure that we're practiced at interpreting them.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=14)** A tiny bit of history, the whole idea of a box plot dates all the way back to that late 70s in a book that a gentleman by the name of [[John the Ripper|John]] Tukey wrote called Exploratory Data Analysis.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=27)** The whole nature of the book is too 70s to be worth reading now, but it's an important book and it's influenced the way that we do graphics and no matter what tool you use, you're almost certainly going to have a way of doing box plots.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=40)** Learning how to interpret them, it's a very powerful way to look at the entire distribution of your data in one graphic.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=48)** Let's start walking through how this works.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=51)** First, if you look down at the shaded region, the black horizontal bar is the median, so that's the midpoint of our data.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=61)** Now of course the mean and the median aren't exactly the same, so the median is the 50th percentile.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=67)** And then the bottom of the shaded region is the 25th percentile and the top of the shaded region is the 75th percentile.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=74)** We know that half of the customers spend between the amount at the bottom of the shaded region and the top.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=83)** That gives us a sense, a very real visual sense, of where half of our data resides.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=88)** Tukey came up with an elaborate definition of what's called the whiskers here.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=95)** But the specific definition that he came up with isn't an important as what it means visually to us.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=101)** Basically, this is the point in Tukey's interpretation beyond which we have outliers, and what software will typically do, is not only demark the outliers with circles as the standard way, but very often also provide the ID of that case or some kind of a label so that you can then go into your data and look it up and figure out what that ID is.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=126)** We're going to be dealing with datasets that are too large to make this realistic.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=130)** I purposefully took the small version of our data, only those customers that had more than 60 transactions, and you're going to see in a moment that the experience is quite different in a larger, more complicated dataset.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=144)** Let's take a look at the full dataset in video game sales sum.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=151)** It looks very different, doesn't it?
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=152)** That's why you have to practice this a bit because it can be hard to interpret unless you know what's going on.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=158)** Notice that there's so many outliers now because the dataset's larger and because the data's heavily skewed, the circles are on top of each other and it's actually hard to tell that they're actually circles there.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=170)** And then, what Tukey did, is he said, well, I have this definition of the whiskers and beyond that, we get circles.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=177)** If we go way beyond that, and again there's a very specific definition, we get what's called extreme outliers, or most people simply say extremes and those are marked with asterisks.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=189)** Because this data's highly skewed and we know that it's highly skewed because it's not at all symmetric, so what you want to do is you want to picture that if this was normally distributed data, the shaded region would have the median right in the middle of the shaded region and then the whiskers would be the same length on both sides, and in normally distributed data, you would have few outliers and probably no extremes.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=218)** This isn't close to a normal distribution at all.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=221)** It's all scrunched together down at the bottom.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=224)** Now what's happening in this instance is that the minimum, the median, and the 25th percentile are all basically at zero.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=233)** You might think, well, gosh, how could it be that the median and the 25th percentile are the same value?
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=237)** How does that math work out?
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=239)** It's actually really simple.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=241)** If half of your customers do not buy video games, then the 50th percentile will be zero, and all the other calculations below the median will be zero, as well.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=253)** It's actually not uncommon and in cluster analysis, it's quite common because we're trying to find folks that buy or don't buy things.
>
> **[4:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=261)** You're going to get a lot of box plots that look like this.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=264)** There's a special tool in SPSS Modeler if we're looking at clusters, and as you can see, it's basically a box plot.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=274)** Now, it's oriented horizontally, as opposed to the last two examples were oriented vertically, but there you go, it's still a box plot.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=283)** Let's walk through the interpretation of this one.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=286)** The black line within the white area is still the median.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=292)** It's always its definition.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=294)** Now if we start talking about these dots, these represent groups now because they represent cluster averages as opposed to individual cases.
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=304)** The red group apparently spends just a tiny bit less than the 25th percentile on video games, so they have below average spend, but they do spend some, they don't have zero spend.
>
> **[5:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=318)** The light blue group is somewhere between the 25th percentile and the median.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=323)** So again, now the median and mean aren't the same, but nonetheless, when it's this far below the median, they're almost certainly below the median and below the mean, so their spending is below average.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=334)** But again, they certainly spend some and they spend more than the red group.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=337)** And then finally, the dark blue group has above average spend.
>
> **[5:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=341)** It's worth noting that when you have lines on either side of the group that are not symmetric, that is further evidence that we have a skewed distribution.
>
> **[5:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=356)** Notice that this particularly noteworthy with the dark blue group, which means that our big spenders are almost certainly being found in the dark blue group because we have a positively skewed distribution with the line to the right longer and the line to the left shorter, but it's more dramatic in the blue group, indicating that the positive skew shape is coming from the dark blue group and that's where our outliers are.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=385)** Notice that the line extends well beyond the white area, meaning that there's a lot of folks in the dark blue group that appear to be past the 75th percentile in spend, even though the dark blue group as a whole doesn't spend that much.
>
> **[6:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=400)** Something is going on in the dark blue group to have a lot of outliers.
>
> **[6:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-box-plot?u=76281980&t=403)** Now let's apply this skill to interpreting clusters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** spss (1)
> **Definitions:** means that (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Running a k-means cluster analysis](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=0)** - [Instructor] We're going to run a k-means cluster analysis in [[IBM SPSS]] modeler.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=6)** So a couple of things for you to know.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=8)** First, you should be able to find a way of doing k-means in numerous software options.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=14)** You don't necessarily have to run this in SPSS modeler.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=18)** Two, the stream has been provided for you, and it's simply called cluster analysis dot STR.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=25)** SPSS modeler streams always end in dot STR.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=30)** And then finally, the ready for cluster data file is shown here as an SPSS format file, with a dot SAV ending.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=41)** But an alternate version of this data file is also being provided in the course resources, and it might be easier to use a simple comma separated version for your tool of choice, so I've given you more than one version of the data file.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=57)** Let's begin.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=58)** Let me go ahead and run this table so that we can see the data.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=64)** And what we want to remind ourselves of here is that we have sales, amounts, sums, quite a few of them, then over here, number of transactions and total spent.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=78)** But then most importantly, we have the same spend variables, but as ratios.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=85)** That's important because these ratios are one of many different ways that we could standardize the variables, and as you know, it's important that we use standardized variables.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=94)** Otherwise, what the cluster analysis would do is it would take something like this entertainment variable, which right now goes between zero and one in its ratio form, but over here, because those are the most expensive items in the dataset, they sometimes get up into the thousands.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=117)** What would happen is we would be inadvertently giving that variable more weight, okay?
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=122)** So we're going to be using the ratios, not the sums.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=126)** So let's begin.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=128)** We're going to go into the k-means algorithm here.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=133)** And we have to tell it what we want the value of k to be.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=137)** The most common one that people start with is five.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=141)** You have to be anticipating that you're going to be running this several times, so you don't have to really obsess over what the initial value should be.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=150)** I've had the most luck in cluster analysis with k, which is what this menu is asking me for now, with k being between three and eight, and with the number of fields being between 10 and 30.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=164)** Now to keep this simple, I'm not going to use 10 variables.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=168)** We're going to be using fewer.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=171)** These right here are all the ratios.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=173)** So there's seven.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=174)** But that's certainly more than we could attempt to visualize, so we need the cluster analysis algorithm's help, but again, most projects that I've done over many years, real-world projects, I'd be using between 10 and 30 of these.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=190)** There have certainly been exceptions, but that's the most common.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=192)** That gives you at least a rough idea.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=195)** I'm going to go ahead and click on okay.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=197)** And then that's really all we have to do at this point.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-k-means-cluster-analysis?u=76281980&t=200)** We've declared that k is equal to five, and we've provided the seven variables, so we're ready to run this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IBM SPSS]] (1)
> **Env Vars:** spss (4), str (2), ibm (1), sav (1)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Interpreting cluster analysis output](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=0)** - [Instructor] When the model is done, we're going to get this gold diamond.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=3)** So, I'm going to go ahead and double-click on that, maximize it, and this represents our output, so let's take a look at it.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=11)** We can see that it's come up with five clusters, no surprise there, that's what we asked for and then also, we have a bunch of different options that we can do.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=22)** Now, this is what Modeler calls the Cluster Viewer, so depending on your tool of choice, you might not have anything quite like this, but we're going to be spending most of our time looking at the box and whiskers plots here.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=35)** So, we're going to go down to Cluster Comparison, but we have to tell it what clusters we want to compare and I'm going to select all five here.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=48)** Here we go.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=50)** Now that I've done so, I'm going to expand this so we can see it more clearly, so look at what we've got.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=57)** We can see most of our seven variables and we can see that each of our five clusters, that's, by the way, the maximum that this particular Cluster Viewer allows you to show at one point, is five clusters.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=70)** So, what do we see?
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=72)** Well, let's take a look at the red cluster for instance.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=76)** It is way beyond the middle of the data for entertainment.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=83)** By the way, entertainment in this dataset really means more like entertainment center, so it's big screen TVs and that kind of thing, tends to be the most expensive items in the dataset.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=92)** So, red is way beyond all the other groups on buying these big screen TVs.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=98)** Moving down, we see that red is basically at zero for game consoles, not their thing apparently.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=105)** Red is around the 50th percentile for [[Hardware]].
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=112)** Then scrolling down a bit here, we can see that red is at zero for movies, red is at zero for software, at zero for streaming, and then it's around the 25th percentile for sales amount in video games.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=129)** So, to recap, they're around 25th on video games, around 50th on hardware, and way out there, high spenders on TVs, so what conclusions could we draw?
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=141)** Maybe they're playing the video games on a computer, but they're using the big screen TV as a monitor.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=149)** We don't know, we want to sit with somebody, let's say, that really knows the product line, a good subject matter expert within the organization, and try to tease this out, but it seems like there's a little bit of a pattern like that for red.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=160)** Let's look at one other color and then draw some general conclusions about the cluster analysis so far.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=168)** It's not terribly important that we pick any one particular color.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=171)** If we were in a meeting together as colleagues right now, we'd want to be looking at all of them, but let's just go with green.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=177)** So, starting at the bottom, we see that green is well above the median for video games, they're way beyond everybody else for movies, they are, scrolling up a little bit here, well over the median for hardware.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=192)** So, they're computers, presumably PCs, not game consoles, but they're computers and way higher on movies and also higher on video games.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=203)** Given the fact that some video game revenue might be in the form of rentals, you might start to think about these folks and think, wow, maybe they live close to one of the stores.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=214)** Maybe they're coming in and buying movies, buying video games, maybe they're even kind of part of the used video game market or that kind of thing.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=224)** Maybe they live close to us and we're kind of their neighborhood movie and video game store.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=230)** Let's take a look at the big picture, though, because you might be so caught up in trying to figure out the personalities of the clusters, which is good, that's what we're trying to achieve now, but you might get so caught up on that that you don't step back and look at the whole solution as a whole.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=247)** Two observations I want to emphasize.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=249)** One is, no one seems to be spending a lot of money on software and streaming.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=255)** So, streaming in particular, I might think, wow, well, what year of data is this?
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=260)** In [[Data Mining]] and [[Predictive Analytics]], you're rarely looking at the current year's data.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=265)** You're usually looking at the previous year or even older than that.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=269)** This might be the last three years worth of sales.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=272)** If that's the case, maybe streaming is a new product for us and if it's a new product line, maybe streaming should be dropped from the analysis because clusters are not showing differentiation on streaming, so it's not really helping us very much, software also to a degree.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=290)** The other observations I would make is there tends to be this trend going on where all the clusters are big spenders on one thing.
>
> **[5:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=301)** Here's the concern that raises in my mind.
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=304)** That often indicates that what's happening is you have a lot of one purchase customers and the cluster analysis is going to struggle and struggle, but never really find an interesting pattern if you have all these folks that only bought one thing.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=320)** So, what we might have to do is consider removing the one-time purchasers and then trying the cluster analysis again.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=328)** So, there's two actions now we might take.
>
> **[5:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=331)** We might drop a variable or two and we might actually consider dropping some customers that are maybe not our main focus of interest.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-cluster-analysis-output?u=76281980&t=339)** Maybe we're really interested in the repeat customers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[Data Mining]] (1), [[Predictive Analytics]] (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for instance (1), picture (1)
> **UI Navigation:** double-click (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [What does silhouette mean?](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=0)** - [Instructor] I want to talk about the whole concept of the silhouette statistic.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=5)** You may have noticed in MODELLER as part of the MODELLER summary, you get this very visually-compelling red-yellow-green thermometer indicator of the cluster quality.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=19)** That's not unique to MODELLER.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=21)** The silhouette concept goes all the way back to the '80s.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=26)** In a paper that was written back then, this is really the closest we come in cluster analysis to something like R-squared and the like.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=36)** There's just not the same consensus.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=38)** There's other challenges as well, because remember there's a lot of things to keep in mind with why we choose the particular cluster analysis that we do.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=47)** But let's talk about the logic of silhouette.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=51)** Here's a quick scatterplot that I put together.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=53)** To keep it simple, I'm using just two variables, obviously, to make it two-dimensional.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=59)** And I'm only plotting a small number of points that all belong to one cluster.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=64)** The whole concept of silhouette is to take all of these points one at a time, and then measure how far they are to other points that belong to the same cluster.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=76)** Naturally, we want these distances on average to be small.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=81)** That's our measure of cohesion.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=84)** Now, in addition to that, we then have to take this and bring the other cluster in.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=89)** So once we've established the amount of cohesion, we want to then compare that to the amount of separation.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=97)** And unfortunately, this little tiny scatterplot is very real-world in the sense that we don't get this incredibly clean separation that you so often see in practice files for cluster analysis.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=109)** With real-world data, you'll have co-mixing.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=112)** So by measuring the ratio between cohesion within the cluster, and separation between clusters, you get the ratio that's the building block of silhouette.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-does-silhouette-mean?u=76281980&t=124)** So, whatever your tool of choice might be, MODELLER, something else like R or another commercial package, let's say like SAS, you should be able to find some kind of measure like this to evaluate the clusters.

> [!info]- Semantic Content
>
> **Env Vars:** modeller (4), sas (1)
> **CLI Commands:** make (1), find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Which cases should be used with k-means?](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=0)** - [Narrator] I want to take a couple moments to give you my two cents on an important topic.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=5)** I think that most people tend to be a bit nervous about even contemplating taking some cases out of the analysis.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=15)** Let me walk through why people might be worried about it and why in this particular data set we might want to contemplate doing so.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=23)** So I'm going to go into what is called the type node and I'm going to take number of transactions which I think is at the heart of the problem that we might be seeing in the data and I'm going to clear it not as continuous but as ordinal.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=40)** Now that's important and inappropriate.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=43)** It's important because there's a certain graphic that I won't be able to run unless I make this change but it's also appropriate because number of transactions does not have decimal places in it.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=52)** We're really just counting from 1 to 98.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=54)** So let me just go ahead and do this and put into place what is called the distribution node.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=61)** So let's set this up and talk about the implications for cluster analysis.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=66)** I want to declare number of transactions as my field
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=74)** and maximize this and take a closer look.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=77)** So what I'm going to do is sort on percentage and see what the most common pattern is.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=85)** There's quite a few folks that bought three items.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=90)** And if you buy three items you might have something like maybe two rentals and a movie or three rentals, you get a little bit of variety there.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=98)** Look at large number of folks that bought just one thing.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=103)** Now again folks are afraid to take cases out because they think that it's going to distort the results.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=110)** Well folks were not writing a report, we're trying to do a cluster analysis, we're trying to find a pattern and those one time shoppers are not going to show much of a pattern but think about it this way, if cluster-analysis is the search for homogeneous subsets in a sense these one-time shoppers or maybe the one and two time shoppers that collectively represent more than 20% of our cases, they can be thought of as a kind of group.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=141)** They're the one time shoppers.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=142)** So they're not going to show much of a pattern in terms of cross-selling or buying things in more than one department but they are an identifiable group.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=151)** Many many years ago I was working on a cluster analysis of golfers and what the folks that I was working with told me said every time we do a cluster analysis of golfers we identify that older retired golfers, golf a lot.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=167)** So all cluster-analysis does is tell us what's obvious and I said well if you understand that group, why don't we take them out and cluster everybody else?
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=177)** There was this long pause cause everyone was somewhat shocked that I was making the suggestion but if you've already identified a homogeneous subset, why make the computer confirm something that you already know.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=189)** Cluster analysis is an exploratory technique.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=192)** So if we're not finding interesting clusters we can take out those one or two time purchase customers and then repeat the analysis.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=201)** First rule of this is there are no rules this is an exploratory technique, so if it's not helping, make some adjustments and make it help and then we can always declare our own cluster and go from there.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=215)** So what we will do is introduce what in modelers called the select node but there's going to be an equivalent to it in any tool that you might use and lets include those cases where number transactions is greater than or equal to three.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=239)** Actually, we have a lot of records, I'm going to go even higher in a real-world situation, we would want to experiment and find out what cut-off we were happiest with but I want to make you think about just one more aspect of this.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=253)** What if the reason they keep on showing up as one-time customers is because they are cash customers and for that reason we can't track them.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=263)** So they're actually coming back but they're appearing in the dataset as multiple people.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=267)** If we had something like a loyalty card program or what have you, maybe those cases wouldn't be there or we can analyze them in a different way.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/which-cases-should-be-used-with-k-means?u=76281980&t=275)** So you want to think this through, you want to talk to the subject matter experts about it but it's quite appropriate in this instance to get rid of those one-time customers.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), node (3), find (2)
> **Definitions:** is called (2), is an  (2)
> **Speakers:** - [narrator] (1)

#### [Finding optimum value for k: k = 3](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=0)** - [Instructor] I'm going to continue in the same Modeler stream.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=4)** So, we've learned some things about our data file.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=8)** We've learned that two of the variables don't seem to be showing very much of a difference between the clusters and then we've also modified the rows that we're making available to the algorithm.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=20)** Specifically we want number of transactions greater than or equal to five.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=26)** I'm going to go ahead and change the model settings to K equals three.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=31)** Not that there was anything wrong with five, but I'm going to experiment with three.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=36)** I'm going to remove streaming and software because those two variables were not showing a good differentiation between the clusters.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=45)** There's no rules here.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=47)** It's not that you'd always take these actions, but what we're doing is we're exploring the data, we're looking at what we see, we're finding how helpful it is to achieving our goal and making adjustments.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=58)** So, I'm going to go ahead and run this.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=61)** I'm going to take a look inside now and again, K happens to be equal to three at the moment, but I'm going to plan on exploring a number of these.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=72)** Since I really want to look at what makes the clusters tick, I'm going to switch over here to Clusters.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=79)** I'm going to highlight all three of them and then I'm going to maximize the right-hand half of the screen and I can scroll down it a little bit, and frankly, one of the reasons that I dropped two variables is a practical consideration.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=99)** It's going to be easier to look at.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=100)** Now, remember, in a real-world project, you're probably going to end up going with K between three and eight.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=109)** Certainly never smaller than three 'cause if you've only get K equals two, you might as well just do a scatter plot.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=115)** And more than eight clusters is usually impractical.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=119)** There's nothing about the math that makes a K bigger than eight a problem, it's just hard to digest and it's hard to use.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=128)** Also, the number of inputs is usually going to be much more than five.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=132)** But K equals three and five variables is easy for us to digest as we're practicing these techniques.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=138)** So, if you take a look at the blue cluster, cluster two, there's more going on now in terms of multiple variables than we were able to see in any previous example.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=150)** You can see that we have a cluster that's way above the others in spending on those big screen TVs in the entertainment category.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=157)** We've seen that before, but that very same group is around the 25th percentile, which I guess is also zero for game consoles, for them at least, but then [[Hardware]], they buy some, video games, they spend some on that as well, not as much as the other groups, but they spend some, and now movies isn't showing as much differentiation as possible.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=179)** So, you can see that everything is these moving parts.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=182)** We dropped two variables, would we want to drop another one?
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=185)** Maybe we actually want to try bringing those variables back at some point, but with K equals three.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=191)** Plan on iterating and iterating again.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=194)** There just is not enough consensus in the user community of [[k-means clustering]] or these other techniques to know that one cluster analysis is perfect.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=205)** There is no perfect.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=206)** It suits your purpose or it doesn't suit your purpose, so you have to experiment and experiment again.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=212)** So, blue mostly on the TV, but they're certainly spending in different areas.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=217)** Now, what about red?
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=219)** Red is near zero for those same TVs, near zero for game consoles, but well above the median in hardware, way above everybody else in video games, above the 75th percentile.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=235)** Maybe that's a group that's playing video games on PCs, but not on game consoles.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=243)** So, maybe we're starting to get the feel for one of our clusters.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=247)** Maybe that's what's going on with cluster three.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=249)** And we could use other variables in the dataset to try to confirm that insight because we could go ahead and poll it and find out, what are they buying?
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=257)** We could look at the specific transactional data for some members of cluster three and see if we can't confirm that notion that they're playing games on computers, not games on consoles.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=268)** What about light blue?
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=269)** Light blue is about average on computers, they're a little bit below average on video games, they're way above everybody else on consoles, so maybe, unlike cluster three, cluster one is playing games on both consoles and PCs.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=293)** Again, we could try to confirm that, but that seems to be the major insights that we're getting from this K equals three solution.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=300)** Will we like K equals four or maybe K equals five better?
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743321?u=76281980&t=304)** We can't know until we try.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[k-means clustering]] (1)
> **CLI Commands:** find (1)
> **Tools:** notion (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Finding optimum value for k: k = 4](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=0)** - [Instructor] Trial and error is the name of the game everybody, so we're going to go ahead and try K=4.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=8)** Now, with K means, the way it's set up here in modeler each time I run this, I would get the same results.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=17)** So I'm not saving different versions of this model I'm just changing the value of K.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=23)** Obviously, some folks might choose to do that and have more than one diamond on the stream, I'm just not doing so right now.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=31)** In a real-world project, I probably would, especially if there were lots of variations on the theme.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=36)** Like if I was sending all the cases to one model, fewer than all the cases to another model, different numbers of variables and so on.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=43)** But here, I'm keeping everything the same except for that value of K.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=46)** Let's take a look.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=50)** And again, what I usually turn to first is highlighting all the clusters.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=56)** Now remember, in your tool of choice, you might not have this, you know, fancy cluster viewer.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=63)** But you're going to have a way of doing box-and-whiskers plots so you can reproduce these visualizations, whether or not you're doing them in ggplot2 or whatever you might be choosing to do the visualization.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=73)** So let's take a look at our K=4.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=78)** If you've just finished watching the K=3, then you know that we always get a cluster with a lot of heavy TV spend, the entertainment sales amount sum.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=91)** We always see that pattern.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=92)** However, notice that the numbers don't match from a previous run.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=96)** So the numbers and the colors will change each time, but since there are people that spend a lot on these big screen TVs, there will always be a cluster that has a lot of big spending on TVs, but we won't know what number it is.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=110)** So there's no direct comparison, in other words, from the K=4 to the K=3.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=115)** You have to compare them carefully, but the same patterns are being revealed.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=119)** Cluster two, in this case, is the high TV spenders, and then, they're low on game consoles.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=127)** They spend some on [[Hardware]], but not as much as everybody else, and they spend some on video games, but not as much as everybody else.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=135)** So what seems to be happening now, is that cluster two spends on TVs but pretty much just TVs.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=144)** So what about red?
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=146)** Now, by the way, I'm choosing these colors because my eye is going kind of from the top of this chart down.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=153)** You could do this any number of ways.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=155)** You could do it in order: one, two, three, four.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=158)** You could do it from left to right of the legend.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=161)** Light blue, red, dark blue, green.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=163)** Again, there's no rules here.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=165)** We're exploring, okay?
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=167)** So, I notice on game consoles, which is the second variable from the top, that we've got very high spend in game consoles.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=176)** But we also have average spend in hardware and we have some non-zero spend, kind of middle of the pack, on video games.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=184)** So, what could be going on there?
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=186)** We have game consoles and hardware and video games.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=190)** Again, maybe this is, you know, a gamer that plays video games on both their PC as well as a game console.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=198)** Next one, going down, what catches my eye is green, cluster three.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=204)** Average on hardware, way above everybody else on movies, second highest on video games.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=212)** We saw a pattern like this earlier, I believe, what it seems to be telling me is "Wow, the stuff that they could rent "or they would buy more frequently.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=220)** "Maybe buy, turn it in.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=222)** "Buy another one, or get things second hand.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=225)** "Maybe this is kind of our neighborhood shopper."
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=228)** Now, we don't have to just speculate on that.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=231)** We could go ahead and pull up cluster three and calculate proximity to the nearest store and maybe green has a closer proximity to the nearest store to the other groups.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=245)** Now again, this doesn't imply that what we want to then do is add age and proximity to the store and all those kind of stuff to the cluster analysis.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=253)** That would actually complicate things.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=255)** We leave it as it is.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=257)** But if the pattern seems to imply something about their demographics, then we can confirm that because we probably have those demographic variables as well.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=266)** We just didn't include them when we did the cluster analysis itself.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=270)** That leaves just one cluster left and that's the light blue and light blue is very high on video games and then the highest, although not super high, relative to the others on hardware.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=284)** So, what's going on with this group?
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=287)** Harder to know, but again, it could be if we pulled one calendar year worth of data, maybe they're actually an established customer so they bought a bunch of things from us but not during the year that we're analyzing but now that we're established with them, or rather they're established with us, what they're spending money on now is video games to go with that console or to go with that PC that they bought some time ago.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=316)** So what do we think about the K=4 solution?
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=320)** Do we like it better or worse than the K=3?
>
> **[5:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=325)** I'm not getting a strong inclination of either at the moment.
>
> **[5:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=329)** We've got to spend some time and we probably have to talk to our colleagues as well.
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=333)** Are they picking up on a difference here as the extra granularity and the K=4 seem really interesting?
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=340)** I don't think there's anything super exciting about the K=4 here that we didn't know in the K=3 but again, we've just got to keep on trying.
>
> **[5:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743322?u=76281980&t=348)** Let's next try K=5.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (5)
> **Definitions:** in other words (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Finding optimum value for k: k = 5](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=0)** - [Instructor] And lets try K equals five but remember this is different than when we tried K equals five earlier.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=7)** We've dropped two variables and we have fewer rows now.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=13)** Notice by the way the cluster three is smaller than the others.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=18)** There's nothing wrong about that.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=19)** But that might be something that we would become curious about, you know just simply is maybe it too small to be interesting?
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=26)** One of the things that I would want to know but we won't check now, but I would want to check on real project is how much the total spend for cluster three is.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=36)** That is easily determined but if cluster three is small in number but high in total spend, it might prove to be very important.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=48)** If they're small in number and also small in total spend, then I might conclude that a cluster that's only 5% is too small.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=56)** To be honest, 5% if it's an interesting group is probably large enough that I might want to keep a cluster of that size.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=63)** It really depends on how interesting the cluster is.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=67)** So let's take a look.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=70)** I'm going to highlight all of these, make this window bigger here.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=77)** Okay let's take a look.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=78)** One of the things that I look for is in general, is whether or not the colors are showing up in more than one product line.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=88)** If the colors are only showing up in a single product line, I become very tempted to maybe redefine my notion of important customer, perhaps to be higher than five transactions and they might go a little bit higher than that.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=104)** Get folks that are really repeat customers and analyze them.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=108)** Because think about how we're going to use this.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=110)** We're going to be issuing coupons or coming up with new [[Microsoft Products|products]] or redesigning the store, or taking action in some way to serve a cluster that it maybe is underserved, tapping into a new market, that kind of thing.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=124)** If we're going to do that, we're not going to be chasing after new services that represent either a small number of people or folks that rarely come to our store or that are loyal to someone else and not to us, you see.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=140)** So it's no inappropriate at all to change that select node and require more transactions.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=147)** But let's take a look.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=148)** We can see green for instance is way above everybody else in TV, but now this cluster's a little bit different.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=155)** They're also showing a little bit of activity on [[Hardware]], and they have a non-zero value for video games but different than the others.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=163)** So they're not only TV, a little bit of the [[Representational State Transfer (REST)|rest]] of their personality is coming through as well.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=168)** Let's take a look at red.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=170)** Red is very high on game consoles, about the median on hardware, also some on video games.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=177)** We've seen this pattern before.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=179)** This seems to be the gamers that use two platforms.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=183)** Then yellow is very high on hardware but also above average on video game.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=189)** We've seen this pattern before but it's a little bit cleaner and clearer now.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=193)** This seems to be our PC gamers.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=196)** And then finally we've got two more.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=199)** Light blue very high on movies, again movies and video games.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=204)** The speculation on this one if you recall was the neighborhood customer, something that we could confirm with other variables.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=211)** And then we have dark blue, very high on video games and then above average on hardware.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=220)** Now that's interesting.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=222)** This is the first time we've seen this but this is, if you do a lot of cluster analysis you're going to encounter this.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=227)** So light blue is very high on movies and halfway up on hardware.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=235)** Dark blue, very high on video games, halfway up on hardware.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=244)** It could be that that kind of neighborhood pattern has been split in two if that makes sense.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=251)** Whereas before we had a cluster that seemed to combine movies and video games and the speculation was that maybe that's someone that comes nearby and sells their old movies and buys new ones, the kind of activity that we might see in a store like this.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=270)** But now that group has been somewhat split.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=272)** Now remember, dark blue was the small cluster.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=276)** So if all that's happened in going from K equals four to K equals five is that we've taken a medium-sized cluster and broken it into two, we have a very specific decision to make.
>
> **[4:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=289)** Is that a meaningful split into two or are we getting too granular.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743323?u=76281980&t=294)** So it's very helpful that we saw that because it gives us an indication of what might continue to happen if we let K get larger and larger.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (6), [[Microsoft Products|Products]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (2), node (1)
> **Cross-References:** coming up (1)
> **Tools:** notion (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [What the best solution?](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=0)** - [Instructor] We're going to pick up where we left off, in the same stream.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=4)** What I want to talk about now is a tricky subject, because folks want a straightforward answer, and there's no straightforward answer to give, and that is, what's the best cluster.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=15)** There are techniques we can use to try to narrow down the possibilities, but remember there are some considerations that fall outside the math.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=25)** For instance, some years ago I was working with a cruise ship company, and what they wanted to do is try to anticipate where someone's next cruise would be, because if they could guess accurately they would then put an appropriate picture on the cover of the catalog that got mailed out.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=47)** The idea was is that if you were interested in trips like Alaska or the fjords, or Patagonia and you got a close up of an umbrella drink in the Caribbean, that might turn you off because that would be a disconnect.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=60)** So let's say we did that, and we looked at folks' cruise patterns and we came up with 11 clusters, or even seven or eight clusters.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=70)** The marketing team might say, "We don't want to spend all "the money on that many catalog covers, "we want to do four or five catalog covers."
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=78)** So be careful.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=79)** We're going to walk through the logic of this, but I want you to remember there's a lot of considerations that fall outside the cluster analysis itself that will influence the value of K.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=90)** But let's take a look at the easiest way in Modeller to tackle this, and you should be able to do something similar, even if your tool of choice is not Modeller.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=99)** So I'm going to go in and I'm going to go to Modeling and I'm going to choose the so-called Auto Cluster node.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=108)** But what I'm going to do, is go to the Expert settings, and go with just K-means now, just K-means.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=118)** But I'm going to specify, that K is going to be three, four, five, all the way up to eight.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=137)** This is the easiest way to do it.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=140)** There are other ways, for instance two step, uses an alternate way of trying to tell you what the best value of K is.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=150)** But what this is going to use is the Silhouette calculation, but it's going to do it for all six of our models all at once, it's very straightforward.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=159)** So I'm going to go ahead and return to this other window, and tell it that we want to keep all six, and we're going to run.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=171)** Produces my model, I'm going to take a look inside, and look at that, it's already sorted on Silhouette.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=178)** So, according to this, the best solution is three clusters, and the second best solution is six.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=187)** Followed by five, and so on.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=189)** So this is interesting stuff, and certainly if I'm going to start working through a thorough exploration of my solutions, I might want to start with three and six.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=201)** But again, don't forget that business considerations and/or information and variables outside of the cluster, like distance to store, or what cities they live in, or whether they're rural or urban, or if they've come to a brick and mortar calculation or an online location, that also, all that stuff is going to influence our decision.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=226)** But according to Silhouette, three is the best value of K, and we'll certainly consider that solution along with the others.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/what-the-best-solution?u=76281980&t=233)** But the final decision is ours.

> [!info]- Semantic Content
>
> **Analogies:** for instance (2), picture (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** node (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 3. Visualizing and Reporting Cluster Solutions

[↑ Back to Table of Contents](#table-of-contents)

#### [Summarizing cluster means in a table](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=0)** - [Instructor] It's important to remember that your colleagues, and especially your management, are not going to be as interested in the technical intricacies of the cluster analysis and all of the mathematical formulas as you are.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=14)** So when you go to report and visualize these clusters, you want to do so in a way that's very friendly to what they need to get out of the cluster analysis.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=26)** Let's demonstrate this and to do so we're going to use a data set that has additional variables that have been merged in with it.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=35)** Not just what the customers spent on, but things about the customers, their gender, their income, and so on.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=40)** It's called Ready For Cluster With Categorical Variables.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=45)** And we're going to be opening this in SPSS [[Statistics]].
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=51)** Okay, here we are in the data set and let me make what perhaps at first will seem like an obvious point.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=58)** We standardize the variables and created ratios for reasons that we've discussed, so that variables with big dollar amounts, like the big screen TVs don't dwarf the [[Microsoft Products|products]] with small dollar amounts like video games.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=76)** However, that doesn't mean that our colleagues and our bosses and our clients are interested in the ratio as much as the dollar amounts.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=86)** They're probably interested in both and there's no reason now why we cannot report clusters using dollar amounts even though the basis of those clusters was ratios.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=97)** Let me show you what I mean.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=99)** I'm going to go in to the SPSS Statistics Compare Means procedure.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=104)** So I'm going to go to Analyze, Compare Means, Means and my dependent list, now you may be familiar with the phrase dependent, from things like regression or ANOVA but here it really just mean scale variable and our independent list really just means categorical variable and our categorical variable is going to be our K-Means solution.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=131)** Now this is a k-means solution that I created specifically for this data set.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=137)** It doesn't necessarily align perfectly with the k-mean solutions in any of the other datasets.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=144)** And I'm going to go to options here and I'm going to reflect for a moment on which options will make most sense to my colleagues.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=152)** Now it's not that they would be uninterested in standard deviation but they'd probably be more interested in sum because think about what that means.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=161)** That's the average spend for the red, the blue, the green cluster and so on where as this will be the total spend for that cluster.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=169)** So these three variables are probably of greatest interest.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=172)** I'm going to click on continue and I'm going to click on okay and we'll scroll down to the report and I'm going to put this in its own window.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=183)** Goes without saying that I could clean this up a little bit, I could widen the columns to accommodate the labels a little bit better, that's easily done, but I'm also going to remind you of a trick thats going to be very useful here.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=195)** I'm going to go to pivot, pivoting trays and I can move the statistics into the layer.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=202)** Now what that allows me to do is if I want to print this or send it out to a PDF whatever it might be, I can go ahead and make this separate sheets in a workbook that I can give them, that's easily done.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=214)** In SPSS actually what I would do is I would right click and export from here, that's going to allow me to do my PDF options, my [[Microsoft Word|Word]], my [[Microsoft Excel|Excel]] but again let's take a closer look.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=231)** I have a lot of information that's very valuable.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=234)** So this is in dollar amounts.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=235)** This going to be easily relatable to any of my colleagues.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=239)** I can see in terms of average spend, cluster one is in a completely different ballpark from all of the others.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=247)** The average spend on big screen TVs and general just a tad over $947 but cluster one is spending almost 4000, the other clusters are really quite close to zero and folks no one's buying a big screen TV For $69 or $86 probably, so what that really means is one or two members of the cluster bought a TV but the others bought no TV and we could further reveal that by switching to the sum and we really see a big difference there.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=279)** We see that total sales for cluster one and the big screen TVs is almost two and a quarter million.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=286)** Total sales for all of cluster four is only about $40,000 which could be anywhere between 30, 40, 50 TV's.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=295)** We could obviously analyze the data in a different way and identify that.
>
> **[5:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/summarizing-cluster-means-in-a-table?u=76281980&t=301)** So there you have it, this is easily exportable to other formats and this is what your colleagues are going to want to know about the the clusters not things like centroids and so on

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3), [[Microsoft Products|Products]] (1), [[Microsoft Word|Word]] (1), [[Microsoft Excel|Excel]] (1)
> **UI Navigation:** go to (4), click on (2), scroll down (1)
> **Env Vars:** spss (3), pdf (2), anova (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Traffic Light feature in Excel](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=0)** - [Instructor] I'm in the same data file ready for cluster with categorical variables.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=4)** In addition to reporting on dollar amounts and where the clusters live and all kinds of other information about them, at some point in the report you are going to want to make it clear how the clusters arose to be.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=18)** You'll want to take the same variables that you fed into the clustering algorithm and report on those.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=25)** What I'm about to show you is my favorite way to do that.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=27)** I'm going to go to Analyze, Compare Means, Means; and I'm going to grab the ratio variables that I used.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=37)** Even if you dropped a couple of the ratio variables, you may want to include them here.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=41)** You may want to try it both with and without.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=45)** For instance, in some of the clustering solutions we excluded software and streaming 'cause it wasn't showing a difference.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=52)** I'll tend to drag them into the report anyway, because this represents the different product lines in my organization presumably.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=61)** If I don't have those variables, they're going to be surprised.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=64)** Also I'm only interested in the mean at this point, so I'm going to get rid of number of cases and standard deviation 'cause it will save me a step.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=74)** I'm going to go ahead and then bring in the K-Means membership variable and click on OK.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=83)** Going to scroll down, and here's the key step.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=85)** I'm going to right-click and Export.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=90)** I'm going to tell it that I want [[Microsoft Excel|Excel]], and I'm going to go ahead and send it to wherever I want that file to go.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=99)** In this case I'm just going to temporarily send it to the Desktop.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=104)** I've already created one of these and cleaned it up a little bit in Excel.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=109)** Let me click on OK and then show that to you.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=113)** Here we are in Excel.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=114)** I've cleaned it up a little bit.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=116)** I've gotten rid of some of the extra name information that was really just automatically generated by a variety of processes.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=125)** You'll want to adopt your own formatting strategy, but all I'm trying to do here is identify areas where spending was high, in green, and spending where areas was really quite low, below 10%, in red.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=141)** If we take a look at cluster-1 for instance, we see that they spend 65% of their spend on entertainment, and they're low on everything else.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=150)** We find that cluster-2 is much higher than the others on the fraction that they spend on video games.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=159)** They also spend a little bit on [[Hardware]], kind of a middling level on hardware.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=164)** Cluster-3 has high spend on game consoles, but they still spend a bit on hardware and video games, low on everything else.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=176)** Cluster-4 spends a substantial amount on both hardware and video games, a bit on movies, but low on everything else.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=185)** The bottom line is this is a format that you can share with anyone, because all of your colleagues more than likely can either open this directly in Excel or have some other way of looking at .xls files.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=197)** Secondly, it's very straightforward.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/traffic-light-feature-in-excel?u=76281980&t=200)** The goal is to try to remove some of the clutter, get rid of excess labeling that you don't need, and get this in a format that you can share with anyone even if they don't use the analytical software that you used to create the clusters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Hardware]] (4)
> **UI Navigation:** click on (2), go to (1), scroll down (1), right-click (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for instance (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Line graphs](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=0)** - [Instructor] What I'd like to do now is show you my favorite way of visualizing clusters.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=4)** I'm going to be in the same dataset, Ready For Cluster With Categorical Variables.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=10)** But before we proceed, a lot of our variables have been automatically generated at one point or another and we tend to get all these prefixes and suffixes on our variable names.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=21)** I'm going to take just a couple of moments to clean up the dataset before we proceed with our graphic.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=27)** I'm going to be showing you how to make a multiple line plot in SPSS [[Statistics]].
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=32)** So I'm going to go to the Variable View.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=34)** And since we're going to be working with the ratios, I'm going to recommend that we just keep the name as is, 'cause if we changed the name, code references might be off and so on.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=45)** But to just make this easier to read, we can add labels.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=49)** So for ProductCategory_Entertainment_SalesAmount_Sum_Ratio, which is a real mouthful and hard to read, I'm just going to say Entertainment.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=58)** It's really as simple as that.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=60)** There are ways I could do this with syntax and try to be fancy, but I'm just going to go ahead and type them.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=65)** There's only seven of them.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=67)** Also, one of the reasons that this is happening is that SPSS Statistics does not allow embedded spaces in variable names, but it's quite content to have embedded spaces in labels.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=79)** This will make the resulting graphic more readable.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=84)** And we're going to go ahead and do Software, Streaming, and Video Games with a nice embedded space in there, no complaints there.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=94)** So we're pretty much all set, except if we scroll down, we also have a clumsy name for Kmeans.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=102)** And what will happen sometimes is when there's any illegal character and you bring this in, it will automatically rename it.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=109)** So the at sign is gone and it replaces it.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=112)** We're going to clean this up too.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=114)** So as it turns out, this is coming in as a string.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=118)** And we'll be able to do a nicer job with our graphic if we convert that and it's very easy to do so.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=124)** So let me show you.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=125)** I'm going to go down to Transform, Automatic Recode.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=130)** And we're going to take that last variable and we're going to simply call this Kmeans and click on Add New Name.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=139)** And that's it, it does all the [[Representational State Transfer (REST)|rest]] of the work.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=141)** It's going to create a new variable now that's set up a little bit differently.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=146)** Let me actually show you what it's done.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=150)** It's created numeric codes and then it's automatically labeled them with what the string used to be.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=157)** So it's actually a handy trick in SPSS Statistics.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=159)** Now, there's another reason why I wanted you to see this.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=163)** Once I interpret my clusters, I may come back here and give this a meaningful name like Video Renters or Brand Loyalists or something like that.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=178)** Once my colleagues and I have determined what we believe the cluster personality's to be, it can be very helpful actually to do a graphic that adds these somewhat cute names sometimes to the clusters.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=192)** Most organizations that do cluster analysis will eventually do that step.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=196)** I remember working with a cellphone company that one of the clusters was called the Fashionistas.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=201)** They were the clusters that bought the phone accessories to go with their phones.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=206)** And it actually becomes part of the conversation at the [[Microsoft Office|office]] around what you've accomplished with the cluster analysis.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=213)** So what I'm going to do now is just clean up these automated labels just a little bit and we'll proceed with our line plot.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=219)** So I would prefer as a variable label to have just KMeans and get rid of all that punctuation.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=226)** And then, over here on the individual labels, I'd like it a little bit better if this was capitalized and without the dash.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=236)** These are not critical changes, but you want to do whatever is necessary to make this as close to what your organization does in terms of its naming conventions, so that you don't have to redo things later.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=250)** Just get them right the first time before you export them is good advice.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=260)** We're going to go and proceed with our line plot.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=263)** We're going to go up to Graphs, Chart Builder.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=268)** And the next couple of steps are tricky, so be careful.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=272)** We're going to want to get all of our variables.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=276)** And you know, you may be thinking, well, Keith, what if we based the cluster analysis on just five variables?
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=282)** Would we bring all seven in?
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=284)** Very often I will, because even though we don't base the cluster analysis on it, if our company has seven product lines, then my colleagues are going to be expecting to see seven product lines.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=295)** Now, be careful, when you do this step, you need to hold the Shift key, in other words, to continue to hold the multiple select, and then drag over with the mouse and not let go.
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=304)** And then you can let go of both.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=306)** And what it's doing is it's putting all those variables on the Y axis.
>
> **[5:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=310)** It's going to give you this initial suggestion that it's going to do something crazy, but it's actually quite easy to read.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=316)** It's basically my favorite way of doing this.
>
> **[5:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=318)** And then, I'm going to bring the modified KMeans variable, the one that we cleaned the labels up for, and drag that over to Color.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=328)** Here we here in the Output window.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=330)** Now, it might take a tiny bit of practice to orient to this.
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=335)** But I'll tell you what, I've had such good luck with these line plots that perhaps because I'm rehearsed at it now, I can have a couple dozen variables and up to six, seven, eight clusters and I can still read these at a glance.
>
> **[5:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=352)** Now, recognize your colleagues will need to acclimate to this, but again, with practice, it's easy to read.
>
> **[5:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=358)** So take a look.
>
> **[5:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=359)** Cluster one appears in blue right now and we see that it's high, higher than any of the others in Entertainment.
>
> **[6:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=365)** It's quite low on pretty much everything, except a little bit of a blip on Video Games.
>
> **[6:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=370)** So the typical member of this cluster is more than 60% of them spend in entertainment and about 20% in video games.
>
> **[6:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=377)** What about the red cluster?
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=379)** Well, the red cluster, as you can see, is the highest of any of the clusters on Video Games.
>
> **[6:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=384)** It's very low on all the others, except that it's up around 10 to 15% on [[Hardware]].
>
> **[6:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=391)** And there's all kinds of little things you could do when you're interactive in SPSS.
>
> **[6:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=395)** For instance, you could click on one of these lines and show fewer than all of the clusters.
>
> **[6:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=402)** I could remove cluster four, for instance.
>
> **[6:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=405)** That would be useful when you're interactive in SPSS.
>
> **[6:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=408)** But you can export this as an image, drop it into a [[Microsoft PowerPoint|PowerPoint]] slide.
>
> **[6:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/line-graphs?u=76281980&t=413)** And again, with a little bit of practice, it's a wonderful way of looking at all of your variables and all of your clusters at the same time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Office|Office]] (1), [[Hardware]] (1), [[Microsoft PowerPoint|Powerpoint]] (1)
> **Env Vars:** spss (5)
> **CLI Commands:** make (4)
> **UI Navigation:** click on (2), go to (1), scroll down (1)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** for instance (2)
> **Warnings:** be careful (2)
> **Prerequisites:** set up (1)


### 4. HDBSCAN

[↑ Back to Table of Contents](#table-of-contents)

#### [How does HDBSCAN work?](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=0)** - [Tutor] There's a more recently developed cluster analysis algorithm that's available now in Modeler called HDBSCAN.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=9)** Now, hold on.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=10)** That stands for hierarchical, density-based, spatial clustering of applications with noise.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=17)** I want to break down the key points.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=19)** We've heard hierarchical before, and it's going to be related to that.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=23)** Also, it's density-based.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=25)** That's opposed to centroid-based, which K-means was.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=30)** And then also this idea of noise.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=34)** All of those are going to be important.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=36)** So let's compare it to K-means.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=38)** First, rather than trying to identify a centroid, it identifies areas of high density.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=45)** You see, the problem with centroids can be that they assume a spherical shape to the clusters.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=52)** You'll sometimes hear experts refer to it as a Gaussian ball, which simply means if you've got a dozen dimensions, you're really not talking about a sphere anymore.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=63)** But we can't assume that our data is shaped like that.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=66)** And HDBSCAN does not assume spherical clusters.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=71)** Also, in K-means, everything gets classified.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=74)** And there's also a problem with this.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=76)** You can have cases that are clearly outliers, but they're slightly closer to one centroid than another.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=83)** So they get assigned to that cluster.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=85)** HDBSCAN does not force this classification.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=89)** Some cases will be identified as noise as outliers, rather than belonging to a cluster.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=96)** Finally, one thing about K-means is it was a lot faster than the old style of hierarchical clustering that we've also discussed in this course.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=107)** HDBSCAN goes back in the other direction now, and it's considerably more computationally intensive than K-means, enough that it's noticeable, even on contemporary machines.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=119)** So what about HDBSCAN in Modeler?
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=122)** Well, it's implemented not natively, but through [[Python (Programming Language)|Python]], as we're about to see.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=128)** It's an extension of DBSCAN, which is another algorithm, in fact, quite a popular one, by adding this hierarchical component.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=137)** And what that does is it aids in determining the number of clusters.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=140)** You might recall way back when we talked about hierarchical, and K-means, with K-means, there's this trial and error aspect of trying to identify the value of K.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=150)** Whereas hierarchical made it a little bit easier to look at all the possible numbers of clusters.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=156)** DBSCAN has this limitation that it too, has a number that you have to figure out through trial and error.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=164)** It's not quite the same as K, it's called epsilon, but it does require experimentation to get that number to be right.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=172)** Epsilon is the radius of a circle, basically, to be created around each data point to determine if that data point is within a pocket of density or not.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=182)** So that's one shortcoming of DBSCAN that has overcome HDBSCAN.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=188)** DBSCAN's been around for quite a while, since '96.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=191)** And HDBSCAN was first proposed in 2013.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/how-does-hdbscan-work?u=76281980&t=195)** So let's give it a try.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Env Vars:** hdbscan (7), dbscan (4)
> **CLI Commands:** python (1)
> **Cross-References:** we talked about (1)
> **Definitions:** stands for (1)
> **Speakers:** - [tutor] (1)

#### [An HDBSCAN example](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=0)** - [Instructor] Okay, so here we are in Modeler 18.4 and we're using the same data file that we've used throughout the course, ready for cluster analysis, and you may recognize that this stream is quite similar to one of our K-means streams.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=19)** So where would you find the HDBSCAN modeling node?
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=25)** Well, there's a couple of ways.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=26)** You could go to modeling and all and scroll through all the [[Algorithms]], and you certainly could find it that way, way over on the right-hand side.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=35)** But you could also click on [[Python (Programming Language)|Python]] here because it is implemented through Python.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=41)** I've already loaded it and run it because it is a bit computationally intensive.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=47)** So for instance, I've added a sample node to do a 10% sample, that brings down the number of rows from 35,000 to 3,500 and it actually runs pretty quick.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=59)** But if you ran it on all 35,000, it would take several minutes, at least on my machine.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=65)** So I've run it in advance for us.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=67)** Let's take a little look at the options.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=72)** As I mentioned, in defining HDBSCAN we don't have to worry about epsilon, so we don't have any super tricky parameters we have to worry about, but we do have to worry about minimum cluster size, and the default in Modeler is five, but I've kicked that up to 100.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=93)** And we have a bunch of other settings on here, but we won't be using those.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=98)** We won't be adjusting those, rather.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=100)** Click on cancel.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=102)** Again, I've already run this in advance, and if we look at the solution, here's the solution here, we can see that we have seven inputs, the same that we used for K-means.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=114)** It found five clusters and the smallest cluster is 257.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=119)** Now remember, I told it that I didn't want any clusters smaller than 100.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=123)** Had I allowed the default of five, we would've gotten smaller clusters and we would've gotten more clusters and you certainly could experiment with that.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=133)** Here's a little chart that indicates that and notice that one of the largest categories is the outlier category.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=140)** So although we have five clusters, one of them is the outlier category, and four of them are what we would normally think of as clusters.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=152)** So if I run a table now, and if I scroll over to the far right-hand side, you can see that in the cluster assignments quite a few of them have a cluster assignment of negative one.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=167)** That's our outliers.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=169)** So I think it's rather interesting at this point to compare K-means to HDBSCAN.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=175)** So to be clear, I've run this particular K-means with a K of five, and if I run this matrix node here, it's the same data so we would expect to see some real agreement.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=192)** And in cluster one, according to the K-means, most of those are cluster zero according to HDBSCAN, so there's some real agreement there.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=202)** Same for cluster two in K-means is similar to cluster one in HDBSCAN.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=209)** Then down here we have quite a bit of agreement between cluster four and cluster two in HDBSCAN.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=215)** And then finally we have a lot of agreement here.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=218)** But the big difference is the large number of outliers.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=222)** The problem with these outliers is you can't see them very well in seven dimensions like this.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=227)** There's really no way to plot a seven-dimension scatter plot, or something like it.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=232)** But if you were to see it, or if you were to look only at two dimensions at a time or even possibly three dimensions at a time, you would see that K-means really does assign cases that are floating in between these clouds of points, whereas HDBSCAN assigns them as outliers.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=250)** I think most would agree that HDBSCAN is the more sophisticated technique at this point.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=255)** However, there are going to be some applications where you want to force cases into clusters.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=260)** I think using them together and comparing them in this way during the exploratory phase of your analysis can be very helpful.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/an-hdbscan-example?u=76281980&t=268)** And I also wanted you to know that you can now use HDBSCAN right in Modeler.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Algorithms]] (1)
> **Env Vars:** hdbscan (9)
> **CLI Commands:** node (3), find (2), python (2)
> **UI Navigation:** click on (2), go to (1)
> **Analogies:** similar to (2), for instance (1)
> **Versions:** 18.4 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Cluster Methods for Categorical Variables

[↑ Back to Table of Contents](#table-of-contents)

#### [Relating clusters to categories statistically](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=0)** - [Instructor] We're going to talk about a topic that I feel very strongly about.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=4)** Let me walk you through my logic, and also some methods that would be a good idea.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=9)** We're going to go into resources, and we need to have Ready For Cluster With Categorical Variables, that's our data file, in the resources folder.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=20)** Okay, so let's take a look.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=22)** Actually we can take a look right here in the variable view.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=26)** So we have a bunch of variables that we've grown quite accustomed to, we have our sales variables, we have our ratio variables.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=36)** We also have a couple of variables that we haven't done too much with yet, number of transactions, total spend, but now we've got the categorical variables.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=44)** Here goes.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=45)** We've got gender, state, ZIP Code, and of course state and ZIP Code, you don't really put in a model, but it helps us find out a little bit about what's going on.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=55)** Mail code is actually telling us whether or not the mail is getting to them on time or being kicked back, whether or not we've been given permission to exchange their address with other list holders, whether or not they're a homeowner.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=71)** You get the idea.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=72)** We have a variety of these.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=74)** What's important about this is picture the sequence of events, what we're going to do is we're going to have some established customers.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=83)** And for those established customers, we're going to know their sales behavior and we're going to know some of these demographic things about them.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=92)** In contrast for a brand-new customer that has filled out let's say a loyalty card application, or maybe it's a brand-new Amazon Prime customer.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=104)** So they just became Amazon Prime, so we don't have a sales history with them, but we've learned some demographics about them.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=111)** We have their address, let's say.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=113)** We know the neighborhood in which they live.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=116)** The whole trick here is to see what we can learn about those new customers as well.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=123)** We can't place them in a cluster but we kind of want to know the demographic patterns of those clusters.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=130)** So here's the bottom line and what I feel strongly about.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=134)** Folks worry too darn much about putting the categorical variables in the cluster analysis.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=140)** They seek out techniques like self organizing maps or like TwoStep, also known as BIRCH and others, that allow them to put the categorical variables in there.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=150)** You don't need to put the categorical variables in the cluster analysis most of the time, because what you need to do is what I'm about to show you, which is, once the clusters exist, go ahead and run the categories against the cluster membership.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=166)** So I'm going to go to Analyze, Descriptive [[Statistics]], Crosstabs.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=172)** And I'm going to make my KMeans variable my column.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=181)** And I'm going to make these variables, all of them actually, I can, different row variables.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=190)** Oop, forgive me, there's a couple that don't belong, so I'm going to deselect Zip, I'm going to deselect Hit, because it's actually not a categorical variable, it's a scale variable.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=201)** But the [[Representational State Transfer (REST)|rest]] of them can be my rows.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=204)** And under Statistics, I'm going to ask for a chi-square.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=208)** Now, if you're not familiar with the chi-square statistic, it's basically telling me, if there is a statistically significant relationship between two categorical variables, so belonging to one of the KMeans groups is a categorical variable, and these others are categorical variables as well.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=226)** So I can click on OK.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=229)** Now I go in and I take a look at my output.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=232)** I'm going to go up to the top where it starts, and let's take a look at gender.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=236)** By the way, you might find the gender variable a bit surprising here.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=240)** U, you might guess as unknown, j, most people don't guess, it means joint account.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=248)** I know that's a bit odd, but that's the way the data was set up, so in a sense, we can kind of hypothesize that female is actually a single female, and male is a single male, because if it's a married couple, they probably have a joint account.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=264)** Again, you want to imagine that this is something like a loyalty card.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=268)** Well, there doesn't seem to be a strong relationship between gender and membership to these clusters, because the asymptotic significance two sided is a big number.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=279)** If it's below .05, if that number is below .05, then it's significant at 95% confidence.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=286)** So we can work our way through the data.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=288)** Now, notice we don't operate in all 50 states apparently with this data.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=292)** But as we go through, we actually get our first hit.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=296)** Whether or not they gave a legit address on their loyalty card application is significant at 95% confidence or awfully close.
>
> **[5:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=307)** It's .057.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=308)** Now, there's only 23 cases that gave bad addresses, but they do seem to indicate a buying pattern.
>
> **[5:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=315)** Maybe folks that buy certain things tend to want to join that loyalty club and get that, but we might have some one-time purchasers for instance.
>
> **[5:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=325)** I think we've all done this at grocery stores where we are in a grocery store that's not in our hometown but we want to get the 20% off the item, so we go ahead and ask the clerk if we can borrow a card or fill out a card, but then we never come back again.
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=338)** It could be that something like that is being revealed by this pattern.
>
> **[5:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=341)** So we can go through one of these and look at these, and let's see we can find any others that are below .05 in the significance.
>
> **[5:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=349)** Number of children is.
>
> **[5:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=352)** Now we have to dig deeper, we'd have to look at the profiles of these clusters to find out what it might be about number of kids, but goodness sakes, we've got video games and other things.
>
> **[6:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=362)** It is not a shocker that number of children might be related to cluster membership.
>
> **[6:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=368)** This is something we want to understand.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=371)** To reiterate, this doesn't mean that we add number of children to the cluster analysis.
>
> **[6:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-statistically?u=76281980&t=376)** It means that we have to do this as a terribly important phase too, after the clusters exist.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (4), make (2)
> **Definitions:** is a  (4), known as (1), means that (1)
> **Env Vars:** zip (2), birch (1)
> **Analogies:** picture (1), imagine (1), for instance (1)
> **UI Navigation:** go to (1), click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Relating clusters to categories visually](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=0)** - [Instructor] Once you've used some kind of statistical approach to identify which categorical variables might have the strongest relationship to your cluster membership, you can go ahead and display that graphically.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=15)** The easiest and most effective way to do that is a clustered bar chart.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=19)** Let me show you.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=20)** So here I am in Chart Builder, and I'm going to drag up a clustered bar chart.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=25)** And what I'm going to do is make cluster membership my X, and photo is one of the strongest relationships as it turns out, so I'm going to grab the photo variable and make that my X.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=41)** And then in the Y, where we've got count here, instead of going with count, I'm going to click on bar one, and say instead that I want percentage.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=54)** Here's a step, though, that's easy to miss.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=56)** I'm going to click on Set Parameter, and tell it that I want the percentage for each X-axis category.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=64)** Click on Continue, and click on OK.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=68)** Let me describe how this is set up.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=71)** And then I'll interpret it in the context of photo.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=74)** What we're doing basically is we're showing the percentage but we're showing the percentage within photo yes, which means that we know them to be interested in photography.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=84)** Now where we would we find out such a thing?
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=87)** It's usually list sharing.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=89)** We've got our list.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=91)** We're selling consumer [[Electronics]].
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=93)** We share the lists at let's say, with a photo shop or photo magazine, and that's how we determine.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=99)** So it's most accurate to say, yes they're interested in photo, unknown, we don't know if they're interested in photo.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=106)** Because if they're in the unknown category we don't absolutely know that they're not interested in photo.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=111)** But if they were a yes, they're on some kind of phone store mailing list, or they get a photo magazine or something like that.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=119)** So what we see is there's definitely some kind of pattern here.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=123)** Cluster three is a bit more dominant in the yes group.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=128)** And we also notice that cluster four is more common for the yeses and less common for the unknowns.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=136)** Cluster one is more common for the unknown and less common for the yes.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=141)** You want to use something statistical, like Chi Square or Cross tabulation, so that you can weigh through all your categorical variables and find out where the patterns are.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/relating-clusters-to-categories-visually?u=76281980&t=151)** But once you find them you really want to do something easier to read and more visually compelling like this to communicate those differences on the important variables to your colleagues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Electronics]] (1)
> **CLI Commands:** find (3), make (2)
> **UI Navigation:** click on (4)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Running a multiple correspondence analysis](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=0)** - [Instructor] I want to introduce you to what's a really amazing technique.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=5)** It's probably new to you, and it's possible that you haven't heard of it.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=9)** It's called multiple correspondence analysis.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=11)** So, the reason that it belongs in this course is it's a powerful way to look at a group of categorical variables.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=21)** This might be surprising, because we've been talking about scale variables throughout most of this cluster analysis course, but what we're going to do is we're going to take the KMeans cluster analysis solution, which upon solution is a categorical variable, and then relate it to potentially several of our other categorical variables.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=44)** Now, to make this work, you're going to want to identify those categorical variables that seem to be related to your cluster membership variable.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=54)** So please do cross tabulations or Pearson chi-square, or something like that in preparation for this.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=61)** But I've identified some variables that will be interesting to bounce off our KMeans membership variable.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=68)** Before we proceed, this algorithm will work best if we have labeled data with numeric codes, as opposed to strings.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=78)** So let me walk you through that process.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=81)** I'm going to go down to transform automatic recode, and the variables that I want to fix are photo, gold star customer, and a little bit further up in the data set, gender, and homeowner.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=105)** Now each of these has the little a symbol next to it, meaning that it's alphanumeric.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=111)** So all we're going to do is come up with a new name, in this case, photo_num, just to mean numeric codes, and it's really going to do most of the work.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=123)** So this next one will be goldstar.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=126)** Goldstar, by the way, is simply whether or not, they're kind of like a platinum with Delta Air Lines or something.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=133)** It's just whether or not they're an elite member in the loyalty program.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=137)** So that will also be goldstar_num, gender_num, and homeowner_num.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=153)** This is just my naming convention.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=155)** You can use your own.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=157)** Going to click on okay.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=160)** And I haven't been opening the log, but here it is.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=163)** Here we can see that u has become 1, representing u, and y has become 2, representing y.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=172)** So the explicit letters have been replaced with numbers and labels.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=176)** And the algorithm we're about to use likes that better.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=179)** Now, before we continue, I also want to use the number of children variable.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=184)** And let me do a quick frequencies on that variable, because there's a bit of an issue that we have to address.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=195)** There's only three individuals with five kids, and only 12 with four kids.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=202)** The algorithm's going to struggle a bit to do this.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=206)** So what I'd like to do is go up to transform, recode into different variables, and the input variable will be numchild.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=223)** And I'm not just going to put num on the end of this.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=225)** That name wouldn't make a lot of sense.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=227)** This is going to be Numchild_bin, 'cause basically, I'm going to be grouping them.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=234)** I'm going to go to old and new values, and an old value of 0 is going to get a new value of 1.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=241)** That's going to be the folks with zero kids, which appear to be the majority.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=247)** And then, the folks with one or two kids are going to get a 2.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=257)** And then we're going to say the folks with three or more kids are going to get a 3.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=264)** And we'll click on continue, and okay.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=272)** Again, we can open the log if you want a record of what you've done in code.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=276)** Now we're ready to run the algorithm.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=279)** So I'm going to go up to dimension reduction, optimal scaling.
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=282)** That choice might seem surprising at first, but once we click on it, we get confirmation that, indeed, we found what we're looking for, multiple correspondence analysis.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=296)** Click on define, and we're going to use the variables.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=300)** Now of course, they're all going to be easy to find, 'cause they're all down at the bottom where we've made the new variables.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=306)** Kmeans, our KMeans solution variable, the four variables that end in num, and Numchild_bin, we're going to bring all those over in analysis variables, then we're going to click on the variable sub-menu within plots, and we're going to send all of these to a joint category plot.
>
> **[5:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=326)** Now, this resulting joint category plot is what's called a perceptual map.
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=333)** Please understand there's a lot of theory and a lot of math going on under the hood here, which I'm not going to be able to walk you through in the context of this short video.
>
> **[5:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=345)** However, we dedicate a whole chapter to this as a nice, gentle introduction to multiple correspondence analysis, and SPSS Stats for Data Analysis and Visualization.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=357)** So if you want to learn a little bit more about the theory, you can seek it out there.
>
> **[6:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-a-multiple-correspondence-analysis?u=76281980&t=362)** So I'm about to click on continue and generate the output, and then, next, we'll check out that output.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), go to (1), open the (1)
> **Code Identifiers:** photo_num (1), goldstar_num (1), gender_num (1), homeowner_num (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** spss (1)
> **Definitions:** is a  (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Interpreting a perceptual map](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=0)** - [Instructor] The output of interest to us is way down here.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=4)** It's the Joint Plot of Category Points, and I really like the way this looks in this newest version of SPSS, version 25.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=18)** I'm going to make that a little bit bigger.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=21)** What I've historically done is colored in these circles.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=24)** Now this is quite easy to read as is, and the gridlines are very helpful, but I'm going to circle in just the Kmeans.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=32)** It's up to you.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=33)** If you want to fill in the others you can, but I'm just going to fill that in with a matching color.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=38)** You can control the size of the circle as well.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=40)** I'm going to keep that as is.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=42)** Let me walk you through what's going on here.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=45)** I find these a lot of fun, and I hope you do as well.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=49)** I've found also that management loves these perceptual maps, so if you find that a lot of tabular output or a lot of complicated line plots aren't doing the job, try this, and you might find that it's a very compelling way to communicate the clusters.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=67)** One of the things that we notice is that when gender is female, seems that that's closest to cluster three.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=79)** In contrast to when gender is J, now remember that that means joint, so basically, for all intents and purposes, we have single females, single males, and joint as married couples, joint seems to be closer to cluster one.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=96)** Keep in mind, and I don't want this to seem overly mysterious, but what's happening is you have a lot of information content, and what multiple correspondence analysis is trying to do is distill all the information down to two dimensions.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=110)** What it's doing behind the scenes is very much like factor analysis.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=115)** You have something where left-right distance doesn't really mean the same as up-down distance except the algorithm isn't going to make it easy for us to figure out what left right and what up down is.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=128)** We have to somewhat look at the variables, and sometimes we can tease it out.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=133)** In this particular instance, no obvious pattern presents itself except that to the right we do seem to have the fewer number of kids, namely no kids, code one, then we have more kids, code two, then further to the left we have the most kids, three or more.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=154)** What about cluster four?
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=156)** Cluster four seems to be associated with goldstar false and photo_num yes.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=164)** Now remember we're selling consumer [[Electronics]], but we've identified through list sharing that they're into photography, but goldstar is false.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=174)** This really is great, because what other method could we use to display five or six or seven or eight variables?
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=182)** I really don't think there are any, folks.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=184)** At most you can usually visualize maybe three or four variables.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-a-perceptual-map?u=76281980&t=189)** Here we have six, so it really is a great technique.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Electronics]] (1)
> **CLI Commands:** find (3), make (2)
> **Code Identifiers:** photo_num (1)
> **Env Vars:** spss (1)
> **Versions:** version 25 (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Using cluster analysis and decision trees together](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=0)** - [Instructor] One of the most common questions I get when folks that I meet learn that cluster analysis is one of my topics of interest is they want to know how to handle all of their categorical variables, and as you've heard me share with you, I usually get concerned that folks are too quick to use their categorical variables in the analysis.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=24)** K-means does really support it and hierarchical, it's all but impossible.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=29)** In some newer techniques it's allowed, but the fact that it's allowed, I think, makes people rush into it.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=35)** So, how should you really do it together?
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=38)** As it turns out, cluster analysis and [[Decision Trees]] are a powerful combination.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=44)** Here's how it works.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=46)** You rarely need categories in the cluster analysis itself, so don't lose sleep over the fact that your algorithm of choice or your software tool has a style of cluster analysis that doesn't allow for categorical variables.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=61)** It's probably fine.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=62)** What you really want to be doing is focusing on the kinds of variables we've seen in this course, so concentrate first on a cluster analysis that makes sense.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=73)** So, for instance, we've been looking at a series of variables that look at spending ratios and we can summarize the goals of the analysis very simply with a statement like, who's buying what?
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=87)** The moment you put anything other than buying type, spending type variables, you're no longer doing something that you can call who's buying what?
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=98)** Then what you do is you bring in your categorical variables.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=102)** Now, the cluster data is usually the data that's hard to get.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=107)** Let me explain, you might think, oh, it's not hard to get spending data.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=110)** It is and if you reflect on it, I'm sure that you're going to agree.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=113)** The reason that the cluster data's usually hard to get is think about where it's coming from.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=119)** Loyalty card information, spending data, transactional data, things from billing statements, things from logs.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=127)** It's stuff you only know about customers that you have, in fact, established customers at that because if you've only had the customer for a couple of days, they haven't established a pattern yet.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=140)** So, what's harder to get, information about what's the socioeconomic status of a particular zip code or what is a year's worth of spending pattern like?
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=152)** Much harder to get the spending pattern.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=155)** Now, what about the categorical data?
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=157)** What do I mean by saying that that's usually easy to get?
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=162)** Things like the gender of the customer.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=164)** Sure, you don't always know the income of your customers, but you might know the income of their neighborhood.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=170)** So, by easy to get, I also mean easy to acquire about non-customers.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=176)** Follow the logic now, you don't have their spending pattern until they've been your customer for a year or so.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=184)** You might have demographic information on them the moment they fill out a loyalty card form or whatever the equivalent might be in your organization and industry.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=194)** That's what I mean by hard to get and easy to get.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=198)** So, the problem with the way most people tackle cluster analysis is that there is no phase two.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=205)** They do the analysis, they look at it, they get some insights, but you really can go beyond it.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=210)** You really can convert your cluster analysis into something that is deployable.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=214)** In other words, you can do a phase one that is unsupervised learning followed by a phase two that is [[Supervised Learning]].
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=222)** Let me walk you through the steps.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=224)** First, you have to take the cluster solution, now, remember, the cluster solution is built only on the scale variable, spending or something like that, and you make it the target of your supervised learning model.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=239)** Whenever I've done this, it's typically been the decision trees technique.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=245)** Now you take all that categorical data, usually demographic in nature, and you make them inputs to the decision tree.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=256)** Now, think this through, you can have a brand new customer that you acquired an hour ago, but you can take information from their loyalty card form and make a rough estimate, maybe not super accurate, but a rough estimate of what spending pattern might emerge over the next year of their spending.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=279)** Think about how powerful that is.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=281)** Is there any way that you can get the spending pattern a day after acquisition?
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=286)** No, but there is a way that you can predict the spending pattern a day after acquisition.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=293)** That's what makes this a powerful combination.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=296)** So, this is a decision tree that I've built, just a portion, actually, of a decision tree where the target variable is the four-cluster solution that we've generated.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=309)** Now, keep in mind, although decision trees are something that's fairly straightforward to learn, there's a lot of moving parts and I can't tell you everything that you would need to know about decision trees in this short video, so you may want to seek out the two decision trees courses that I've done that can be found right here in our Library.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=334)** Okay, so let's think through how this works.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=337)** We've got 2,450 individuals for whom I know both things.
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=342)** I know their spending pattern and I know their demographics, so what I'm trying to do is find out what demographics best predict those four spending patterns so that I can use that for future customers.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=357)** So, as it turns out, photo in the form of whether or not their into photography or not as revealed by their membership to a photo magazine or perhaps getting a photography-related catalog, this is the kind of variable that you get through list sharing.
>
> **[6:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=375)** And we see that node two starts to get an increased number of the members of cluster four, and you might recall that cluster four are the PC gamers.
>
> **[6:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=388)** They like to play the video games, apparently, on their PC because they buy [[Hardware]] and they've got video game activity.
>
> **[6:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=397)** What might we speculate about this group?
>
> **[6:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=399)** Well, maybe since they're into photography, they like to get a computer with a lot of hard drive space and a nice video card and that really services both of their hobbies.
>
> **[6:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=411)** A subject matter expert who really knows our store data could give us an idea if we think we might be on the right track.
>
> **[6:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=419)** On one level, we don't have to obsess on the clausal mechanism, we're just trying to use this to predict what their spending pattern might be.
>
> **[7:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=427)** A year from now we'll know what it will be, if that makes sense.
>
> **[7:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=431)** We use this as an initial estimate and then as their spending comes in, we can refine their membership in a particular group.
>
> **[7:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=438)** If we go down to node six, the percentage belonging to cluster four has climbed up to more than 60%.
>
> **[7:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=446)** Now, I know the numbers are dwindling a bit, but that's really striking.
>
> **[7:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=450)** We found a high concentration of this segment.
>
> **[7:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=454)** Now, what's interesting about HIT is HIT represents whether or not they've historically responded to a lot of campaigns, probably email, but again, we've gotten this through list sharing, so it's not responding to our campaigns yet.
>
> **[7:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=468)** We might've acquired them very recently.
>
> **[7:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=472)** Let's take a look a node one over here on the left.
>
> **[7:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=475)** This has unknown for photo and it looks very much like the general population, and you know it's not surprising because we've got 2,100 folks here, we started with 2,450.
>
> **[8:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=487)** This is a big group, so it hasn't started to differentiate.
>
> **[8:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=491)** When we combine photo unknown with lower wealth, wealth probably determined by neighborhood, not by individual, it's probably determined by zip code or something like that, again, this is list acquisition stuff, when you have the combination of photo equals unknown with lower on the wealth scale, we've got video on big screen.
>
> **[8:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=517)** What could be driving this?
>
> **[8:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=518)** Perhaps they're using that big screen for a lot of different activities in the home, certainly probably TV and video, but maybe other things as well.
>
> **[8:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=529)** Okay, so how does all of this come together?
>
> **[8:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=532)** Hopefully I persuaded you that it's okay that your categorical variables are not part of the cluster analysis itself 'cause folks, think about how powerful this is.
>
> **[9:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=542)** It's absolutely appropriate and even better that the categorical variables are used in phase two of a two-phase process.
>
> **[9:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-cluster-analysis-and-decision-trees-together?u=76281980&t=553)** If you find this intriguing, and I hope you do, I have done this approach on more than 2/3 of the real-world cluster analysis projects I've don't in my career, you'll want to find out more about decision trees, but they make a powerful combination.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (6), [[Supervised Learning]] (2), [[Hardware]] (1)
> **CLI Commands:** make (4), find (3), node (3)
> **Definitions:** is a  (4), in other words (1)
> **Env Vars:** hit (2)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [A BIRCH/two-step example](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=0)** - We're going to use a different algorithm now.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=3)** It's a really interesting one.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=5)** You're going to want to seek this out no matter what your tool of choice is.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=10)** In Modeler, it's called two step, but it's based upon a white paper that used the acronym birch, b i r c h.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=23)** So when you seek this out in other platforms, you may find that it's called birch.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=30)** We're going to look for it in analyze, classify, two step.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=38)** And the first thing that you may notice about this screen, is that it allows categorical variables.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=45)** Now, a lot of folks get all excited and they want to throw all of their variables in.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=52)** I urge you not to.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=54)** It's not the categorical variables are inherently bad, but folks don't think through the implications.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=62)** So I noticed that folks get somewhat less disciplined when they have access to an algorithm like this because they're not thoughtful about those variables and I do not encourage that behavior, you're going to run into trouble.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=76)** So we're going to grab all of our ratio variables, and I want to rehearse just a very straight forward exercise with you.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=83)** Can you state in one sentence, what you're trying to accomplish with the quest reanalysis.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=91)** Well collectively, I could describe what I'm about to try to do with the seven ratio variables with a very simple sentence, like who is buying what.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=104)** Your turn.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=105)** If we were to add gender to that, now how do you describe what's going on.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=112)** You suddenly added a variable that doesn't belong with the others, and it's not clear why.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=118)** And it's also not clear what benefit we get, because even though we might be terribly interested in whether the resulting clusters are majority male or majority female, this is not the way to do it.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=132)** We should leave gender out, and after it's done, asks that about the clusters, the two step [[Forms]] for us.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=140)** So be very careful when you're invited to add those categorical variables.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=144)** There are certainly times that you might do it.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=147)** For instance, when I'm doing anomaly detection is an instance where I will tend to put in all the variables.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=152)** But here, we're really just focused on the ratios.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=155)** The demographic should be a second follow on phase.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=159)** I want to draw your attention to a couple of other things.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=163)** The default distance measure is log likelihood.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=166)** And you might not be familiar with log likelihood, but you're probably familiar with the notion of Euclidean, from middle school and high school geometry.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=175)** Euclidean is only about distances.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=178)** So if we have only scale variables, we can use Euclidean or log likelihood.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=184)** Log likelihood however, gives us at least the possibility of categorical variables.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=190)** The other thing that I want to draw your attention to is we need some kind of clustering criterion, because one of the hallmarks of two step, or again, remember it's sometimes called birch, is that it's going to recommend the value of k.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=208)** So down on the lower left hand corner, it says number of clusters, maximum 15.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=213)** It's going to try then all.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=214)** And then on the bottom right, it has the possible criterion, it's not using silhouette, it's using the bic or the aic criterion.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=225)** The default is the bic.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=227)** One final comment, if we were to choose Euclidean in a fixed value of k like five, we've essentially turned two step into k means.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=241)** The difference is the possibility of categorical when we need it to, and the determination of the number of clusters.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=249)** Okay, let's proceed.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=253)** I'm going to double click on this so that we're more fully in the cluster viewer.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=258)** And interestingly enough, two step has recommended in this instance nine clusters.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=267)** That is atypical for two step.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=269)** Now remember, it is trying all the possibilities between two and 15, but that's a bit higher than you would normally find.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=277)** That's because it has run all those possibilities and arranged the bic, the basin information criterion, and based upon that calculation, nine is the best choice.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=291)** Now, the cluster viewer doesn't allow us to look at all nine clusters at the same time, but the cluster viewer in the basic concept of two step is the same from this point on.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=303)** It's only in the previous step that there's a difference.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-birch-two-step-example?u=76281980&t=306)** The possibility of categorical variables and the automatic recommendation of a value of k.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **CLI Commands:** find (2)
> **Tools:** notion (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Best Practices:** recommended (1)
> **Speakers:** - we (1)

#### [A self organizing map example](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=0)** - [Instructor] I'm in a brand new stream, but it's been provided to you in resources.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=6)** And I also want to remind you that this is a data file that we're going to be using just once.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=11)** It's called kohonen animals.xlsx and it's in that same folder, resources, additional files, so both the stream and the data file are found in that folder.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=23)** Keep in mind that depending on where that folder is located on your own machine, you may need to double-check this path and make sure that it's working properly.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=33)** If you're not sure, you can always preview the file, as I'm about to do here, and if it loads, you know that the path is correct on your machine.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=42)** So let's take a look at this dataset.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=45)** It's actually just this fun little kind of odd dataset.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=50)** It's actually a little bit larger than this, but preview and modeler only shows the top 10.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=55)** This is in Kohonen's own book.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=57)** Now, Teuvo Kohonen is a Finnish professor emeritus who came up with this very influential technique.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=65)** So in modeler it's actually called Kohonen Networks.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=69)** But in most of the world they're called Self Organizing Maps, after the title of his book.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=75)** And all we have here is just some very simple information that he put in the book about some animals.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=83)** Are they small or not, medium-sized or not, do they have two legs or four legs, and so on.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=88)** So it's kind of a funny little dataset.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=90)** But the reason I want to show you this is Self Organizing Maps are just plain different than what you are probably accustomed to.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=98)** They're a specialized neural network and as the name implies, they create a map.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=104)** So let's run it on default settings, pretty much.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=107)** Not making any adjustments, just simply declaring the fields and take a look at it together.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=115)** Now we're not going to include the label, but we're going to include everything else.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=122)** Something that's important to know about Self Organizing Maps, is you can give them any kind of variable.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=129)** As you might anticipate with a specialized neural net like this, the cluster viewer, when looking at Self Organizing Maps, is not going to be a good choice.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=143)** We can see the number of clusters; that's not the problem.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=147)** But you want to remember that Self Organizing Maps are a map.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=151)** So I'm going to show you the best way to look at this.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=155)** You have to honor its map nature.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=159)** So I'm going to go down to graphs and plot.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=163)** Make sure you attach this after the diamond.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=166)** Because you need the variables that are being generated by that Self Organizing Map model.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=172)** And we're going to make the X the KX Kohonen and we're going to make the Y the KY Kohonen.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=184)** And for a label, we're going to choose the animal name and that's going to go in as a color.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=196)** What's going to happen is in areas of the map where there is more than one case, the cases are going to appear immediately on top of each other, because they're going to be at these exact coordinates.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=211)** So we're going to make an adjustment to the map, so that we can see when there's more than one case on top of each other.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=220)** So I'm going to close this one.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=223)** I'm going to go back in and under Options I'm going to choose jittering.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=229)** That's going to change it so they don't appear in the exact locations; they're going to be slightly offset in their locations.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=240)** Now we can see that it's placed cat, which is blue, and dog, next to each other, again, just based on these similar characteristics.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=252)** And then it's got tiger and wolf.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=256)** Now keep in mind, cat and dog, tiger and wolf, all four legs, right?
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=260)** But it's figured out, because of these characteristics, that cat is more like dog than it is like tiger and wolf.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=268)** But way over on the opposite side of the map, we have goose and duck, which are less like cat and dog.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=276)** So the distances are related here.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=280)** And how is it doing this kind of craziness, right?
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=283)** I mean, this example is a little exotic, I recognize, so what is it doing, exactly?
>
> **[4:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=289)** Well, it's interesting; each case enters.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=292)** And like any neural network, it's starting with random weights and the case enters and then as it enters, that particular location on the map gets fine-tuned a little bit, so that the new member of the club, let's say the cat and dog club, becomes more like those two cases.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=311)** But it pushes away from the adjacent locations in the map.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=316)** And this push and pull is what gets the contrast and why the further away you are, the more unlike you are.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=323)** So for instance, to the left of cat and dog, we see fox, cause fox is more like cat and dog than it is like duck and goose.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=332)** Now, this is where it gets a bit fun.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=334)** Let me close this and run it again.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=337)** This time when I run it I'm going to go into the modeling setting and notice that it says Repeatable Partition Assignment.
>
> **[5:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=347)** But I want to show you that what's really happening with a Self Organizing Map is since it's starting with random coefficients, you will not get the same result on repeated attempts.
>
> **[6:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=360)** Modeler's attempting to lock that in, but I'm going to override that, turn that off, run the model again, and re-run the plot.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=371)** I don't have to change the plot variables, because the names are automatically generated.
>
> **[6:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=377)** So now, opposite cat and dog, I have horse and zebra.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=385)** I no longer have duck and goose.
>
> **[6:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=389)** What's the relevance of this to a typical business problem?
>
> **[6:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=393)** Well, you have to remember, certainly, that the map itself is probably not something that you're going to share with colleagues, except close-working colleagues or perhaps a subject matter expert.
>
> **[6:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=403)** But what it's doing on it's own, is even though the map is not consistent from one run to the next, it is grouping similar cases together.
>
> **[6:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=412)** The application of Self Organizing Maps that I find the most powerful, is when you find a map that is large enough that you have some empty space.
>
> **[7:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=423)** Now this is a tiny dataset, so we have all kinds of empty space, but in a real world example, you might have to request that the map be 10 by 10, let's say, with 100 locations, before you get some empty spaces.
>
> **[7:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=437)** When you get those empty spaces, you know that that's going to be rare.
>
> **[7:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=442)** So for instance, lion is not grouped with any of the others.
>
> **[7:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=447)** Cow is not grouped with any of the others.
>
> **[7:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=450)** Eagle is not grouped with any of the others.
>
> **[7:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=453)** It hasn't been paired up.
>
> **[7:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/a-self-organizing-map-example?u=76281980&t=454)** This actually can be one of the reasons why Self Organizing Maps can be an interesting choice for anomaly detection.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (8), make (5), find (2)
> **Definitions:** is a  (4)
> **Analogies:** for instance (2)
> **Warnings:** keep in mind (2)
> **Speakers:** - [instructor] (1)


### 6. Anomaly Detection

[↑ Back to Table of Contents](#table-of-contents)

#### [The k = 1 trick](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=0)** - [Instructor] Okay, we're going to start working in a new stream.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=4)** It's in the resources folder under Additional Files.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=8)** And it's called KDD99.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=13)** Before I begin, I want to tell you where the data's coming from and where you should get the data.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=19)** This data set is large.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=21)** I'm going to be working off the 10% sample.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=25)** If you're feeling brave and you want to use the larger data set, you can.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=29)** But some operations will take quite a bit of time, even on the 10% subset.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=34)** And naturally a lot more time if you use the full data set.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=38)** It's really a great data set for what we're going to be talking about.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=41)** We're going to be discussing anomaly detection, of course.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=44)** And we're going to use three different methods for doing so.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=47)** Now, the reason that anomaly detection fits hand in glove with any discussion of cluster analysis is really the unsupervised learning method, at least, of finding anomalies, is essentially finding outliers, in the sense that they are distant from a cluster center, or I guess more accurately, their cluster center.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=71)** So the methods will differ a little bit, and again, we're going to see three.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=75)** Now, if you're looking for something like fraud, [[Supervised Learning]] sometimes also allows for an approach.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=83)** In that, if you know in your historical data that some were fraud and some were not fraud, you could use that and you could make that a target variable in a supervised learning situation.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=94)** But here, we're going to be exploring unsupervised learning methods that are going to resemble cluster analysis, and things that we've already seen.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=102)** So the first trick is kind of a fun one.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=105)** I think it really helps show, in a simple way, what this is all about.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=110)** It uses K-Means, but, and this may surprise you at first, with K equal to one.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=117)** So, let's take a quick look at the data.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=125)** Now an important reminder, since you're going to be downloading this data set yourself, if you get an error when you run this table, it's probably because the source node is not properly referencing whatever file location you've chosen on your own machine.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=143)** So again, if you get an error runnin' this table, that's almost certainly the reason why.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=147)** Make sure there's alignment between the two.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=149)** So, as we look inside, there's a variety of variables here.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=154)** The number of bits that are being exchanged back and forth, the number of log-in attempts, the number of failed log-in attempts, and so on.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=162)** So this has become a bit of a famous data set, even though it's been around for many years.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=167)** Basically, the theme is network intrusion.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=170)** So, we're really trying to find out when a network is under attack.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=174)** So, let's use our K equals one trick.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=181)** So, I'm going to change the number of clusters down to one.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=185)** And I'm going to use all the fields.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=188)** Now, this is saying pre-defined roles.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=191)** I'm going to briefly click on Use Custom Field Assignment so that you can see that we have a whole variety of variables, as we've just discussed.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=199)** But since they've been declared in the type node, we can choose Use Predefined Roles.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=206)** Before we run it, I'm going to go to Model and request Generate Distance Field.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=211)** Click on Run.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=215)** That took about 15 seconds or so on this machine.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=219)** Don't be terribly surprised if it takes a little bit longer on your machine, depending on a number of factors.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=225)** It is about a half-million rows.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=227)** So, let's take a look inside.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=230)** And the cluster viewer is not going to be of much use to us, but I do want you to see, in the summary, the fields and then inputs.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=239)** This shows us the variables that were used.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=241)** And note that there's two nominal variables here.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=244)** You can see them because they have the red, blue, green circles next to them.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=249)** Protocol type and flag.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=252)** Now, as it turns out, the [[IBM SPSS]] modeler algorithm will automatically create indicator codes for categories to allow them to be used in K-Means.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=263)** The IBM SPSS [[Statistics]] K-Means algorithm implementation doesn't do that.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=269)** So, you are going to want to investigate your own implementation of K-Means to see how it handles categories.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=277)** Now normally, I'm not a big fan of adding categories to a K-Means when I'm doing something like a marketing segmentation.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=285)** The reason, briefly, is if I've got a categorical variable with four or five categories, that's going to generate multiple indicator codes, which inadvertently gives that variable more weight than the scale variables.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=300)** And that makes me uncomfortable.
>
> **[5:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=301)** However, when I'm doing anomaly detection, I usually don't want to cherry-pick the variables.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=308)** I put them all in.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=309)** So, let's take a look at how this works, 'cause it's actually quite straightforward.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=314)** Now by the way, this technique was first mentioned to me by Tom Khabaza, who's one of the co-authors of [[CRISP-DM]].
>
> **[5:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=324)** And he contributed an example very similar to this, but with a different data set, in the IBM SPSS Modeler Cookbook.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=332)** That's where I first encountered it.
>
> **[5:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=336)** I'm going to sort descending on KMD K-Means.
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=342)** That's the distance.
>
> **[5:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=345)** I am going to take my table, bend it all the way down here, clean this up a little bit.
>
> **[5:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=353)** And run the table.
>
> **[6:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=360)** Okay, if we scroll all the way to the right hand side where these variables go, we can see that the top row has a distance of 3.144.
>
> **[6:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=370)** And if we go all the way down to this fairly large data set, we can see that the smallest distance is quite a bit smaller.
>
> **[6:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=377)** Don't worry about the exact values, because every data set is going to be different in what distances are generated.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=385)** But what we've basically done, is we've forced everything into a single cluster.
>
> **[6:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=389)** Therefore, there is one big, grand average that we usually call the Centroid.
>
> **[6:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=395)** And this is just how far away from that Centroid it is.
>
> **[6:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=399)** So, even though the approach might seem a bit primitive and basic, it's really the same foundation that all of these techniques use.
>
> **[6:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=407)** A weird or unusual or anomalous case is far away from the center that's represented by the mass of typical cases.
>
> **[6:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/743338?u=76281980&t=417)** So, it really is a nice little trick, and I think it also helps you understand how some of the more sophisticated anomaly detection [[Algorithms]] work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IBM SPSS]] (3), [[Supervised Learning]] (2), [[Statistics]] (1), [[CRISP-DM]] (1), [[Algorithms]] (1)
> **Env Vars:** ibm (3), spss (3), kdd99 (1), crisp (1), kmd (1)
> **CLI Commands:** make (2), node (2), find (1)
> **UI Navigation:** click on (2), go to (1)
> **Versions:** 3.144 (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)

#### [Anomaly detection algorithms](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=0)** - [Instructor] Okay, we're going to pick up where left off in the same stream, and use a second approach now to detect anomalies.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=10)** Give myself a little bit more room here.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=13)** And I'm going to add a second modeling node.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=17)** It is in Modeler, the anomaly detection node.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=20)** Now, this particular exact implementation is not one that you necessarily will find.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=28)** However, the building blocks are all readily available.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=32)** It's basically going to use the two step algorithm.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=34)** Now remember, that is sometimes called birch, B-I-R-C-H.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=39)** And what's special about the two step algorithm, it's ability to figure out on its own how many clusters there are going to be.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=47)** So logically, you may be able to in your mind take the next step.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=50)** If it can automatically figure out how many clusters there can be, rather than having one definition of typical or normal as we did with K equals means with one big centroid that we calculated the distance from, here we're going to be calculating everybody's distance, or all the case's distance, to the center of the cluster that they belong to.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=73)** So let's take a look.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=77)** When we go to fields we're going to use the predefined roles.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=80)** So the same variables that were in the K equals one trick demonstration.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=86)** And under expert settings, we're going to leave everything as its defaults.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=94)** And click on run.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=97)** We'll just move these around just a tiny bit.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=102)** Get the anomaly a little bit closer there.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=106)** And then what I'm going to do it I'm going to add another sort node, but now I'm sorting on what this new model says.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=116)** So I'm going to go into the sort.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=119)** And the variable that I want is all the way down at the bottom.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=123)** Or rather, not at the very bottom, it's the anomaly index.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=131)** Going to run a table.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=132)** I can actually borrow the table from up here.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=137)** And let's take a look.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=142)** Okay, if we scroll to the right hand side, there's going to be more than one variable.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=147)** The real action in the anomaly detection algorithm is not some kind of report that you read.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=156)** But rather, the extra variable that it's adding.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=160)** The algorithm not only calculates an anomaly index, you can see that first couple of cases are much higher that the others, then it starts to drop off a bit, and then after about 20 it drops off some more.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=172)** It's automatically identified the threshold that it recommends is anomalous true.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=179)** If we scroll down far enough, we would start to hit faults.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=182)** Which we actually hit within a couple thousand or so.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=185)** Remember this is a large data set.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=187)** But then there's more information here that's just as interesting.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=191)** We can see the peer group.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=193)** So remember that it's not creating a single centroid like the k equals one trick.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=200)** It's identifying how many peer groups fit the data, then it's calculating the distance from those peer groups.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=206)** And then there's more, and this is quite interesting.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=209)** It's telling us which variable they are the most anomalous on.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=215)** Then second most and third most.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=217)** So we're finding out who's anomalous true, where they fall on the anomaly index, what peer group they belong to, and then what variables make them anomalous.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=229)** So it's really pretty cool.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=232)** But even if you don't have access to an algorithm that combines all of these, you have all the necessary features because birch is readily available as an algorithm.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=244)** That will help you identify the peer group.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=246)** And then simply you're building upon the distance from the cluster centroid.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=253)** So it's really pretty neat, and does a very fine job at identifying which cases deserve extra attention.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=260)** And if we're doing something like fraud, these are the cases that we want to send to an investigative team to find out if something is amiss.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/anomaly-detection-algorithms?u=76281980&t=270)** In fact, in the case of this network intrusion, we'd want subject matter experts to investigate these cases as well.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), find (2), make (1)
> **UI Navigation:** go to (1), click on (1), scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using SOM for anomaly detection](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=0)** - [Instructor] We're going to pick up where we left off in the same stream.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=3)** We're going to do things a little bit differently this time because what we're about to try is a lot of fun, but it's computationally intensive.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=13)** What we're going to do is we're going to run a self-organizing map on this data set, which as you recall, has a half million records.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=23)** If you want to go ahead and run this on your own you certainly can.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=30)** The self organizing maps node is called Kohonen in Modeler, and you can hook this up and the one modification that I've made under expert is that I'm going to request a 10 by 10 map.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=49)** However, on my machine it took about 45 minutes to run on the half million records.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=56)** So what I've done for each of these three demonstrations, I have saved the end state of the stream in the exercise files for that video.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=68)** And what I'm actually going to do is open that end state stream now so that we can look at the completed version after the 45 minutes.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=79)** So where I've placed this particular one is in the exercise folder, specifically chapter five, five, three.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=92)** And I've called it Anomaly Detection Three Methods.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=96)** So this is the end state of all three approaches.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=102)** What I'm going to do is click on the Kohonen modeling node and show you again that what's been set up is all defaults except for the width and length are both 10.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=120)** This is the node that takes quite a while to build.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=123)** That's the map itself.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=125)** And remember that when you build a self-organizing map, the cluster viewer is not really going to be what's useful.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=132)** What's useful is the map.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=134)** So what you have to do is create a map that has KX Kohonen as the x axis and KY Kohonen as the y axis, and then it's interesting to do this both without a color at all or with the color attack type.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=160)** I've built a map with attack type added.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=163)** You may find that even the map takes a little bit of time to build, a minute or two, not as long as 45, but remember, a half million records are going to this plot.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=175)** Also, make sure you check jitter under the options because otherwise, you'll only see a heavy populated dot at the particular point on the map by jittering it, it's like knocking a stack of checkers over.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=191)** You kind of see a pile of points instead of a single point.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=198)** Also I want to draw your attention to the fact that I have provided the finished plot.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=205)** So if you go over to the outputs palette and right click you can open output, and this too has been provided to you in the chapter five video three folder and these outputs have a .cou ending.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=224)** That way if your machine has any trouble reproducing this or if it's sluggish you can look at the one I have.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=234)** Let's talk about the plot.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=236)** I hope you have as much fun looking at this plot as I do.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=238)** I think it's really kind of neat.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=240)** Let me warn you, if you build this model on your own, and I invite you to next time you have the time to let it run for a little bit, your map won't look the same as this because each time that you run a Kohonen network, since it's starting with random weights, you're going to get a different pattern.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=264)** You will still get a clustering of the colors together.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=267)** Now if you know your [[Supervised Learning]], you might think Keith, this is a bit odd, you've got what appears to be a target variable here.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=276)** You have attack type and some are normal and some aren't.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=279)** Why are you not using a supervised method like a decision tree or a classification type neural net or something like that?
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=290)** Well, you could.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=291)** It'd be quite appropriate actually to tackle this with supervised learning in addition to unsupervised learning.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=297)** But the benefit that you get here is you might identify in an emergent attack type, which you have not yet defined because you can't do supervised unless you have examples in the historical data.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=311)** Here you might be able to catch the bad guys in the act of creating something new.
>
> **[5:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=318)** For instance, in an area like this I've got a mixture of colors, I've got rare cases.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=323)** Think about this everybody.
>
> **[5:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=325)** We've got a half million records on this map, and yet for some reason, at that particular coordinate, there's only about 15.
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=333)** Fifteen out of a half million is rare.
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=335)** Something interesting is going on.
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=338)** There's another example over here.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=340)** Once again that's at a particular coordinate point on the map.
>
> **[5:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=344)** We have about a dozen records that I see by eye, maybe even fewer than a dozen, that are the color for normal, yet they're kind of all alone over there.
>
> **[5:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=354)** Something again is probably up.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=357)** Finally, I want to mention another area.
>
> **[6:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=361)** That's a rare pattern I guess.
>
> **[6:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=364)** That appears to be the color for the root kit attack.
>
> **[6:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=368)** But notice, it's mixed in with a bunch of the pale purple, which is the normal color.
>
> **[6:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=376)** Unsupervised techniques would have a heck of a time spotting that.
>
> **[6:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=381)** Because it's not rare, it's where there's a lot of cases on top of each other.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=385)** So the most effective way to tackle network intrusion like this would be a three-pronged approach.
>
> **[6:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=393)** Business rules that subject matter experts could help identify, supervised learning methods applied to historical data where you thought you knew accurately whether it was an attack or not, and then thirdly an unsupervised approach like this.
>
> **[6:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/using-som-for-anomaly-detection?u=76281980&t=410)** I actually love self-organizing maps when applied to this area because, again, with a half million records, if you've got rare patterns, something's going on, and I want my subject matter experts to investigate that and it could be an innovative type of attack lurking around in there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Supervised Learning]] (3)
> **CLI Commands:** node (3), find (1), make (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** it's like (1), for instance (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [One Class SVM](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=0)** - [Instructor] Recent versions of Modeler, I'm in Modeler 18.4 right now, offer another option for anomaly detection.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=9)** There's a new node, the one class SVM node, that support vector machine, can be found down here in the [[Python (Programming Language)|Python]] tab.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=19)** Or in the modeling tab, if you scroll all the way over to the right.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=22)** So, support vector machines are associated with classification.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=27)** So we won't be talking about the theory in detail, although I do explain support vector machines in my Intro to Classification course.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=35)** However, the basic idea is that you're trying to find a boundary between positive and negative classes.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=44)** But we don't have positive and negative classes here because we're using this in an unsupervised way.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=50)** So it's trying to find the boundary between the typical classes, I guess you could call it, and the outliers.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=56)** It's remarkably similar, the math is different certainly, but it's remarkably similar to the single K means trick, the K equals one trick that we did earlier.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=68)** So I've actually added some nodes onto the same stream.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=72)** So I want to draw your attention to something.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=74)** I've added a 10% sample node, because the one class support vector machine node is much more computationally intensive than K mean.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=82)** So in order for it to run at a reasonable time, I brought it down.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=86)** In fact, I've added cash nodes.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=89)** You'll notice that green color on this node, as well as on that one.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=93)** What I've done is I've let it run for a few minutes, and then saved it.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=96)** If I had run it on 100% of this dataset, it would run for a long time indeed, and that's why I did the 10% sample.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=104)** So if you look inside the modeling node here, I've let all the fields flow through the type node.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=113)** In other words, I'm doing it exactly the way that we did the K equals one trick.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=117)** And then under expert, there's some other settings, but I haven't changed any of them, I'm just running this on defaults.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=123)** What's really pretty cool is that the two techniques agree to a substantial amount, let me show you.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=129)** If you sort this on the original K equals one trick variable, and then run this to a table, so this is on 50,000 records.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=146)** And, again, that's a non-trivial amount, the full data set would be 500,000, but in contemporary terms, these are not big datasets.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=155)** But we can see a bunch of columns, we can see the K equals means.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=161)** Of course, they're all assigned to cluster one for reasons that we talked about in that video.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=165)** And then we have the distance measure.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=168)** So, of course, I've sorted on that.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=170)** And sure enough, all of the large K means distances are associated with outlier status, and larger distances using the newer SVM one class option.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=186)** So, which one should you use?
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=188)** Well, I think it's actually pretty cool that the K equals one trick performs reasonably well, and it's certainly much faster.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=197)** But most folks today would certainly agree that the one class SVM is the more sophisticated of the two techniques.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=203)** However, they both hold up pretty well.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=206)** And if you are dealing with a large dataset and you're having trouble getting the one class SVM to perform, it's worth remembering the K equals one trick, 'cause it is indeed much, much faster.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/one-class-svm?u=76281980&t=219)** So you can use them both.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** node (7), find (2), python (1)
> **Env Vars:** svm (4)
> **Versions:** 18.4 (1)
> **Cross-References:** we talked about (1)
> **Definitions:** in other words (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 7. Association Rules and Sequence Detection

[↑ Back to Table of Contents](#table-of-contents)

#### [Intro to association rules and sequence analysis](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=0)** - [Instructor] Performing an association rules analysis might be new to you, but you've almost certainly encountered it conceptually.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=11)** If you've ever had a book recommended to you based upon other books you viewed, on an online retail site, or you've been watching movies and based upon previous watching history, new movies have been recommended to you, then basically there's something like association rules running behind the scenes.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=30)** So let's talk about how it works.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=34)** At a minimum, and think about how little information this is, at a minimum you can get away with just a Customer ID and some kind of a Product Code or SKU.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=45)** Now keep in mind, this could be hundreds of thousands of books or hundreds of thousands of movies.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=52)** So this could be very computationally intensive.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=54)** But in terms of thinking through how association rules does what it does, you just need a Customer ID and a Product Code.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=64)** Now the problem is that sometimes that's just too granular.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=70)** Or, you don't have a good way of tracking Customer ID.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=75)** For instance, what about cash customers?
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=78)** What if a cash customer walks into a store and they purchase pizza on a Monday, and then they come back two days later and that same cash customer buys a six-pack of beer.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=90)** We can't associate their pizza and beer purchasing behavior because they're a cash customer.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=96)** When that happens, what you can do is you can look at Product Code or SKU, and Transaction ID.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=103)** So now you're basically working off a receipt.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=107)** If you're thinking a couple of moves ahead here, you can see that we're going up and down a kind of ladder of granularity.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=117)** When we're dealing with Customer ID and SKU, we're probably going to have, if that customer is an established customer, lots of transactions tied to that one ID.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=129)** If we're looking at Transaction ID and SKU, we're still granular in the sense that we're looking at a SKU or a code, but they probably don't have 40 or 50 items on that receipt.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=143)** They probably have 40 things they bought over the last year, but maybe only a couple of those items are on a single receipt.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=150)** This is where the human analyst comes in.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=153)** The computer works very hard to look at all the possible combinations, but you have to connect your business problem to the settings that you choose inside the software.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=164)** Finally, there is a technique called sequence analysis.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=168)** And what sequence analysis now does, is add the time/date stamp, because sometimes you're interested that they bought something and then at a later date bought something else.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=180)** To be honest, it's usually not applied to retail data like this, sequence analysis is usually applied to web traffic, where you're very interested in what web pages they went to, and in what order, or in an area that you might not associate with this, predictive maintenance.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=200)** What warning codes appeared in the log of a complex piece of equipment, and a particular sequence that then lead to a serious maintenance problem.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=211)** So lots of interesting applications, but typically in retail, one does just the association rules where as in the web mining and the predictive maintenance, sequence analysis is popular, it has that added element of the time stamp.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=225)** You have to know which software package or programming language you're going to use to implement association rules.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=234)** Typically you can operate directly on the transactional data that we've just been talking about, but sometimes you will be asked to aggregate the data so that it looks like this.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=247)** What we have now, is we don't have every row as a transaction, but now we have every row as a customer.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=254)** And the way that this table would be built is in the following way.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=259)** Customer 101 has had two transactions, so they are true for entertainment, they are true for game consoles, but they are false for the other categories.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=269)** Now in this particular instance, I have a column for each product family not a column for each SKU.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=277)** If you have to transform it in this way, and you have 180,000 SKUs, this is going to become a very large matrix and it's going to be computationally intensive to flip the data on its side like this.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=290)** Most implementations of association rules will allow you to work with that transactional data.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=296)** Just one more quick example, here a customer has bought movies and [[Hardware]], they are true on movies and hardware, they're false on everything else.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/intro-to-association-rules-and-sequence-analysis?u=76281980&t=305)** So that's the basics, and now we're going to proceed to rehearse the steps of doing association rules and sequence analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2)
> **Env Vars:** sku (6)
> **Best Practices:** recommended (2)
> **Warnings:** keep in mind (1), warning (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Running association rules](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=0)** - [Instructor] I want to show you how to run association rules in SPSS Modeler.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=7)** I've provided a stream for you.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=8)** It's in the Resources folder.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=11)** And it's called AssociationRules.str.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=15)** Now, let's take a look at what we have.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=18)** Make sure that the file is located where the stream knows to get it.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=25)** I'm using a file called ReadyforAssociation.sav, which has also been provided to you in the Resources folder.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=33)** And my source node knows where to get it.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=35)** If you placed your copy of the data file somewhere else on your own computer, make sure that you fix the path.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=43)** Let me run this to a table, and let's talk about what we see.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=49)** We've got a Customer ID, we have a Product Code, we have a Product Family.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=55)** Now notice, all of these product codes, actually they're all 210.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=59)** But all of these belong to Game Consoles.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=61)** And we have a quarter-million records here.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=63)** If I were to scroll down, we have many, many other product codes that are also game consoles.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=69)** Then we get to a bunch of product codes that are video games.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=72)** So, Product Category is less granular, and Product Code is more granular.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=78)** Also, I've created a Basket ID, which is simply a concatenation of the transaction ID and the date.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=86)** So, what I'm really looking for in their so-called shopping basket is all of the transactions that they placed on a particular day.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=95)** So, let's talk through our options.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=98)** There's something in Modeler that you're going to want to be careful about in terms of setting up the data properly.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=105)** Let me show you.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=106)** Let's run a distribution on Product Category.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=112)** And it runs, no problem.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=113)** And we find that we have seven product categories.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=118)** They're ones that we're familiar with from other analyses in the course.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=123)** Now, let's go to the type node and take a look at Product Code, which, again, is more granular.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=130)** It's got many, many categories.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=133)** Let me show you a very important setting.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=135)** If you don't change this setting, it's not going to work properly for you.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=139)** It's already been changed in the stream, but if you were to use this technique with other data, you'd have to make the change.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=145)** I'm going to go to Stream Properties, and Options.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=150)** And the setting that I've changed is the Maximum Members for Nominal Fields.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=156)** The default is 250.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=158)** I have changed it for you to 1000.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=161)** That is saved as part of the stream.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=163)** So, it will work properly in this stream, but again, if you were to set up a new stream with your own data, you, too would have to make that change.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=173)** So, this is going to allow us to run a distribution on Product Code.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=181)** And if you were to count them, you're going to discover there is more than 250.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=187)** This would be automatically converted to what's called Typeless in the SPSS Modeler world, and it won't allow you to do this, nor would it allow you to do association rules.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=200)** You don't want to just arbitrarily increase that to a super-high limit.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=203)** Sometimes folks think that's a good idea.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=205)** It's actually likely to cause you trouble inside of Modeler.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=208)** So, you only want to do it when you need to.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=211)** And in this case, we've actually chosen a number substantially higher than we really need.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=216)** So, let's go into Association Rules and talk about four distinct options that we might take on.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=224)** Now we're going to use custom field assignments, and we're going to use transactional data.
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=228)** Which means that we do not need the one row per customer, true false format.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=234)** We can simply give this transactional data.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=238)** And our D can be one of two things.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=241)** It can be Customer ID if we have data that uses something like a loyalty card where we can meaningfully link lots of customer activity over time.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=253)** For instance, some years ago now, I did a project with Michael Kors, and although they didn't have a loyalty card, we used credit card transactions to identify that the same customer had come in multiple times.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=267)** We did not, therefore, look at cash customers.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=272)** You could've done a different analysis with cash customers.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=275)** With cash customers, you might choose the basket ID.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=279)** Now you're not looking at customers over time, but rather what [[Microsoft Products|products]] were found together on the same receipt.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=287)** I will usually run it both ways.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=291)** Under Content, we could go with the granular choice, Product Code, or the less granular choice, Product Category.
>
> **[5:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=302)** Product Category usually runs fairly smoothly, but sometimes, in fact quite often, the rules are rather generic.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=311)** If you go with the more granular choice, you will sometimes get tons of rules.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=317)** But the really interesting rules are probably hiding inside those rules.
>
> **[5:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=322)** But brace yourself, the number of rules that you generate could be tens of thousands of rules.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=328)** I usually recommend going with both the receipt and the Customer ID, and with both the more granular and the less granular.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=339)** If your data is more complex, you might have more than two levels of granularity.
>
> **[5:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=345)** But with two choices for ID, and two choices for content, we'll end up with four possibilities.
>
> **[5:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/running-association-rules?u=76281980&t=352)** And in the next video, we'll explore those four possibilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (4), node (2), find (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Env Vars:** spss (2)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Warnings:** be careful (1)

#### [Some association rules terminology](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=0)** - [Narrator] Before we dive into a lot of complex modeling results, let's review some important terms.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=9)** Now, a [[Microsoft Word|word]] of caution.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=11)** If you're not using SPSS Modeler, the same concepts will be present in whatever tool you use, but in some cases, the names might be slightly different.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=23)** These are key concepts, however, so there's going to be some equivalent.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=27)** And if the names are different, they should be only slightly different.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=31)** So first, the notion of an antecedent.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=35)** Ante- as prefix, of course, means before, but you want to be careful about taking too literally because we're not doing sequence analysis here.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=45)** It really simply means if it's the code or product associated with the If or the consequent, which is the code or product that's associated with a Then.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=58)** Keep in mind, for instance, that if you're looking at grocery store data, you might have pizza predicts beer as well as beer predicts pizza.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=67)** So, the same [[Microsoft Products|products]] might be the antecedent, as well as the consequent.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=71)** So, the antecedent is the If pizza, and the consequent is the Then beer.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=78)** The confidence is the percentage of times that the person who buys the antecedent will also buy the consequent.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=88)** So it's the accuracy, essentially, of that rule.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=92)** You may find that sometimes confidence, in your particular software, might be shown as accuracy.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=98)** They're very similar concepts.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=100)** Really, two words for the same thing.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=103)** Rule support, however, is a bit different.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=106)** When we're talking about support, we're really talking about out of the grand total number of cases for how many is the rule relevant.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=117)** If you've got a rule like If pizza, Then beer, the confidence is only referring to the people that bought the antecedent.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=124)** When you talk about support, you're really talking about everybody being in the denominator.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=130)** So when you look at rule support, you're really looking at the relevance of the rule.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=135)** How many people are involved in this rule?
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=139)** Antecedent support is similar, but what's differing here is how we're measuring the denominator.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=146)** So, rule support is looking at how many customers have bought the If and the Then products.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=156)** Antecedent support is only the number that has bought the If product or products.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=165)** We're going to be practicing all of these.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=167)** Now, lift is an important concept, and it's not only used in association rules.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=174)** When we look at lift, we're trying to get at how many times more likely is a customer to get the Then given the fact that they bought the If.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=185)** So, folks that buy pizza are three times as likely to buy beer or that kind of ratio.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=192)** It's showing an increase in that rate.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=195)** It's a multiplier.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/some-association-rules-terminology?u=76281980&t=197)** A lot of folks will choose lift as the most important of these criteria, but you'll want to use a mixture of these criteria in determining which of the rules that you found are going to be the most useful rules for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Warnings:** caution (1), be careful (1), keep in mind (1)
> **CLI Commands:** find (1)
> **Env Vars:** spss (1)
> **Tools:** notion (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### [Interpreting association rules](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=0)** - [Instructor] I've got four different models here.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=3)** They've all been provided to you.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=6)** This is in a stream called Association Rules with Models.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=11)** It's in the resources folder, in additional files.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=15)** The reason I've provided the models to you, rather than running them onscreen, is that association rules is just about the most computationally intensive algorithm that you can run.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=28)** If you run into trouble trying to run models of your own in Modeler, there's a couple of things to think about.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=34)** You could make sure that you have a machine with good memory, and adjust your memory settings.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=40)** You might want to consider using a smaller dataset for practice.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=44)** And finally, although it's less commonly available, I've used the KARMA algorithm, because it scales better up to the dataset that I'm showing you today.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=56)** The concept is the same.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=57)** The interpretation is the same.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=60)** They're only different under the hood from a computer science standpoint in how they efficiently, or less efficiently, deal with large datasets.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=69)** So I've done the four combinations that we've talked about, CustomerID & ProductCategory, CustomerID & ProductCode, Basketid & ProductCategory, Basketid & ProductCode.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=83)** Let's talk about each in the settings.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=87)** First thing I want you to know is if you go into the model summary, you can actually see the build settings that were used.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=96)** So you can see that I set a minimum of antecedent support of 20%, rule confidence of 20%, and maximum rule size of 10.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=104)** Now, I very frequently will lower these numbers considerably lower than this.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=110)** But the lower you put the minimums, the more computationally intensive it's going to be.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=117)** Let's take a look at the model itself.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=120)** This is CustomerID & ProductCategory.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=124)** You might have been expecting something a little bit more elaborate than this, just 14 rules.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=129)** Well why?
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=130)** This is going to be very generic by its very nature.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=133)** In fact, you will sometimes get rules like if video games and video games, then video games.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=140)** So it's natural to want to try this, but when you do CustomerID & Product Category, you're going to get relatively few rules, and you're going to get rules just like this.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=151)** Let's briefly talk about it.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=152)** All this is really saying is if they buy the antecedent, which is anything in the entertainment category, they have a 92% chance of buying something in the video game category.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=165)** It can be a good way to acclimate to your data, but it's not really where those insightful, really exciting findings are going to be hiding.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=176)** So let's go to a deeper level of granularity, but be careful what you wish for.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=182)** It can get quite a bit more complicated.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=184)** Now, there's only 365 rules here.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=187)** It's not hard to generate thousands or tens of thousands of rules.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=193)** It depends on the settings.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=195)** So I've used reasonable settings that kick out a relatively small number of rules.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=201)** Frankly, the behavior that is often better is if you put the settings very low, as long as your system can handle it, and you're prepared to wait, and then use sorting and filtering to wade through the rules.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=216)** But you can see that we're definitely at a different level now.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=219)** Some folks get excited when they have a rule with 100% confidence.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=224)** I usually am a little skeptical when I see rules with that accuracy or nearly that accuracy.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=230)** Let's talk about why.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=231)** If you were to learn that 100% of the folks that buy game console 200 and video game 61 also buy video game 198, you know what I'm thinking?
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=244)** Video game 61 and 198 are shrink-wrapped together, and one always goes with the other, or that remote always comes with batteries, or something like that.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=254)** And you'll find those patterns, because they will reveal themselves in the data.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=258)** But nonetheless, we're on to something more interesting here going to that next level of granularity.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=265)** Don't be afraid to adjust the settings in such a way that you get thousands or tens of thousands of rules.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=271)** It will happen.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=272)** It doesn't mean that you've done anything wrong.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=274)** Then you will need to sort and filter to kind of wade your way through.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=281)** Now let's talk about Basketid & ProductCategory.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=287)** The settings are a little bit different here.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=288)** Remember that you can go to the summary and find the settings that I've chosen.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=292)** I've got just over 500 rules.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=295)** Keep in mind that now, since it's Basketid, we're looking at receipts.
>
> **[5:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=301)** So not people, but trips to the store.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=305)** And because the rules have been made a little bit more granular, because of the settings, we can see that if folks buy [[Hardware]] and software on the same trip to the store, they've got a 44% chance of buying video games.
>
> **[5:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=322)** Now, we're talking about consumer [[Electronics]] here, but it's these kinds of relationships that prompt grocery stores to put spontaneous purchases near the checkout.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=334)** These kinds of patterns have been analyzed for years.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=337)** It's only more recently that they've been automated.
>
> **[5:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=341)** Let's go to our final example.
>
> **[5:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=344)** This is Basketid & ProductCode.
>
> **[5:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=348)** This one is 52,000 rules.
>
> **[5:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=352)** It's not just inherent to Basketid & ProductCode, it's the settings that have been chosen.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=357)** Let me go to the summary, and the build settings, and there you go, minimum antecedent support.
>
> **[6:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=364)** Now remember what that is, that is the minimum that the antecedent has to be.
>
> **[6:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=370)** It's been dropped all the way down to zero, and minimum rule confidence, 1/2 of 1%.
>
> **[6:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=376)** Why would one do that?
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=379)** Essentially, to get all of the rules into the model, where you could export it to [[Microsoft Excel|Excel]], you can sort, you can filter, you can choose on a variety of criterion.
>
> **[6:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=389)** For instance, here in Modeler, we can go back to the model, we can go to show filter, and now we can do any number of things.
>
> **[6:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=401)** We can say that the confidence has to be above...20%.
>
> **[6:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=410)** Now you might think that's low, but when you're dealing with granular, you're not expecting confidence to be 80% or 90%.
>
> **[6:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=417)** And as we've discussed, confidence of 100% is often the least interesting.
>
> **[7:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=422)** Here, we've gone all the way down from 52,000 to 6300.
>
> **[7:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/interpreting-association-rules?u=76281980&t=427)** So unless your system is really pushing back on you, go ahead and lower those settings, generate a large number of rules, and do the filtering and the sorting on the back end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[Electronics]] (1), [[Microsoft Excel|Excel]] (1)
> **UI Navigation:** go to (5)
> **CLI Commands:** find (2), make (1)
> **Analogies:** just like (1), for instance (1)
> **Warnings:** be careful (1), keep in mind (1)
> **Env Vars:** karma (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Putting association rules to use](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=0)** - [Instructor] So we've built our model.
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=2)** Let's say it's the fourth model that we looked at with more than 51,000 rules.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=9)** What are we going to do with this to put it into use?
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=13)** First thing I want to do is orient you to the spreadsheet.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=17)** So in the spreadsheet, A1 means Antecedent One and C1 means Consequent One.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=24)** So what we have to do is make our information more easily digestible by our colleagues, our clients, and our management.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=34)** We don't want to have just codes like 660 and 762.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=40)** What we want to do is bring in the product descriptions and the prices.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=46)** That's easily done.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=47)** All that information is available.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=48)** We have these product codes.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=50)** We can look up at what we're selling this product codes for.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=53)** What that allows us to do is very simple spreadsheet work to say given what we know about the confidence of the rule, if all of the folks that bought the antecedent [[Microsoft Products|products]] do indeed buy the consequence at the particular price point that's represented by these product codes, our expected gain and notice that I've sorted on this, our expected gain is going to be $1.15 million.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=88)** But even this is much too much detail.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=92)** So we brought in the dollar amounts, we've got both the codes and the categories, we've done our spreadsheet work, it's still not enough.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=100)** Now let me show you where we would go next.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=104)** Notice that I've zoomed in a bit.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=106)** Now what I'm going to do here is identify antecedent patterns.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=113)** So I've got some folks or rules rather, but those rules are filled with people, after all, all a rule is is a group of people that bought a particular combination, so I've got some folks that have bought the $499 model TV.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=130)** I've got some folks that have bought the $2,200 TV.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=135)** And I've got some folks that bought a very expensive $6,700 TV.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=140)** What I'm imagining in this case with these highlighted rules is they all have antecedents from the same product category and they all have consequences from the same product category.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=155)** However, the SKUs are different.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=158)** But think about how this information is going to be used.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=161)** Sometimes folks will automatically do things like book and movie recommendations.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=167)** We've all experienced that, but sometimes the reason that we generate these rules is so that humans can actually look at them and plan a new marketing campaign, a marketing campaign that perhaps does not exist until we do this analysis.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=181)** So if you want to think this through with me, since the antecedents all come from the entertainment category and all of the consequence come from video games and [[Hardware]], this is for the yellow highlighted rules now, the marketing team can develop the same creatives around a campaign that involves big screen TVs and playing video games on their computer with the big screen TV as a monitor.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=209)** They can have the same images.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=211)** They can have the same phrases associated with this.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=213)** They can have the same promotion.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=215)** But what they might possibly do is take that email and with links embedded in the email make it specific to the SKU level.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=224)** So the creative layer of the marketing campaign is the same, big screen TVs and video games, but the detail underneath is at the SKU level.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=233)** That's why we have grouped all these as yellow highlighting and that's the kind of observation that management would want to hear about these association rules.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=242)** So another example is the blue highlighting.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=246)** Here again I've got folks that have bought TVs.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=248)** Notice that these TVs appear to be in a different price point.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=252)** I might not have known that, but now the computer has told me something I didn't know about my data.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=257)** The group of rules associated with blue, price point on the TV seems to be a little bit less.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=263)** These are console gamers.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=265)** They're not PC gamers.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=267)** They're console gamers.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=269)** We could build a campaign around this playing your console game on the big screen TV.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=275)** Same creatives could be involved for all of the rules that have the blue highlighting, but under the surface would be this added detail of if you bought this SKU, we recommend that you buy this other specific SKU game console.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=288)** It takes into account compatibility.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=290)** It takes into account price point and so on.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=293)** This is what management wants to see.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=295)** Management does not want to be lectured on antecedent rule support.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/putting-association-rules-to-use?u=76281980&t=300)** They want to know what is the recommended action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Hardware]] (1)
> **Env Vars:** sku (4)
> **CLI Commands:** make (2)
> **Versions:** 1.15 (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Comparing clustering and association rules](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=0)** - [Instructor] As we've seen, cluster analysis and association rules are very different in how they operate under the hood.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=7)** And also in the kind of results they present to you.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=10)** But since association rules is finding relationships between product purchases and its people, namely the people that belong to our cluster segments, are buying those [[Microsoft Products|products]].
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=23)** It really is two sides of the same coin.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=26)** A caution before you anticipate that there's going to be this one-to-one match between the clusters in the association rules.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=33)** Keep in mind we've divided our customers into just four clusters.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=38)** At the same time, we've generated thousands of association rules.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=43)** So a cluster is an overall pattern of a large group of people.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=49)** So it's more generic in nature.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=52)** Association rules involve many fewer people.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=55)** Typical rules support might be just a couple percent.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=58)** Not tens of percent.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=61)** Therefore association rules are going to be more granular.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=64)** Nonetheless, take a closer look at cluster one.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=67)** They are, among all the clusters, the biggest big screen TV buyers.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=73)** They also spend a bit of money on video games, 18% of their spend.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=79)** Substantially less in terms of their current behavior on game consoles.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=85)** But reflect in that group for a moment.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=87)** They've shown some commitment to the brand.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=89)** They've shown that they're willing to spend some money.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=92)** And since they were part of the cluster analysis, remember, they've made repeated visits.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=97)** 'Cause we didn't analyze the one time shoppers in creating these four clusters.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=102)** So if we switch to some of the rules that were generated, in particular those that had entertainment or big screen TVs as an antecedent, we see a whole bunch of rules that could really be quite profitable for us that involve video games and game consoles.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=121)** They're already spending some money on video games, maybe this group or at least some members of the group that have bought particular SKUs of TVs and that have shown a particular pattern would be great candidates for a promotion that grew their game console spend.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=140)** They're not the same technique.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/comparing-clustering-and-association-rules?u=76281980&t=141)** They don't give us a one-to-one match between their results, but since they're analyzed on the same people, it can be very interesting to look at our data through both of these lenses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Warnings:** caution (1), keep in mind (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Sequence detection](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=0)** - [Instructor] We're going to do a brief introduction to sequence analysis.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=5)** I want to orient you to what you see.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=8)** I've provided this stream for you.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=10)** It's called Sequence.str and it's in the Resources folder under Additional Files.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=17)** Also, the source file is there.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=21)** This source file is more granular than the file that we used in the association rules demonstrations.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=30)** It has some additional variables, including the transaction date, which we're going to use for sequence analysis.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=37)** This too has been provided for you in Resources, Additional Files folder.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=44)** I want to draw your attention to one other advantage of this file.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=47)** If you're not an SPSS model or user and you're doing association rules and something else, let's say R, then since this is a tab delimited file, this might be an easier source of the information for both this demonstration as well as the association rules demonstrations.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=64)** I also want to bring your attention to the fact that I have, in Stream Properties, options, change the setting for maximum members of nominal fields to accommodate the product code, just as we did in the association rules demonstrations.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=82)** All that's been done for you.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=84)** It's all ready to go, so let's take a look at the settings.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=89)** I've declared CustomerID and transaction date and product category.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=96)** Now, in order to use product code in this algorithm, you would have to convert it from numeric codes into a string.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=103)** That's easily done, but we're going to keep it simple.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=106)** We're going to go ahead and use product category.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=111)** Let's look at the final model.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=113)** I've provided the final model to you, because this technique, just like association rules, is computationally intensive and it might take quite a while for it to run.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=124)** Even though, in this case, it's only yielded 333 rules.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=128)** Now, we're not operating at a very granular level now, since we're looking at product categories.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=134)** But look at the rules that you get.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=136)** Sometimes, this strikes folks as a little strange or a little humorous, but this is what you get.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=141)** Think about what this means.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=142)** It means that someone that has rented or bought five video games previously is likely to buy sixth one now.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=149)** Not a surprise.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=150)** But whenever I look at it, I'm reminded of the old Monty [[Python (Programming Language)|Python]] skit about spam, spam, spam, eggs and spam, because this is the kind of rules that will be kicked out.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=161)** I've had this very same experience working with a cruise line when we trying to look at the sequence in which people took trips.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=171)** and some folks pretty much always take a cruise trip to the Caribbean.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=175)** And sure enough, in a real-world situation, there we are in a meeting room with the results on a big-screen TV and the rule read, if Caribbean, Caribbean, and Caribbean, then Caribbean.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=186)** So what do you do about this?
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=188)** Well, part of it is, is folks think they want the added granularity from sequence analysis, but sometimes you don't need it.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=196)** Because if we're looking at retail transactions, do we really want to know if pizza comes before beer and beer comes before pizza?
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=206)** I think your immediate response would probably be, yes, I would like to know that.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=211)** That additional detail would be helpful.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=213)** But let me have you reconsider that a bit.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=216)** What you're really doing is you're taking the pizza then beer and the beer then pizza folks and listing them in two rules instead of in one rule.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=226)** You're making the rules more granular perhaps than you need.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=231)** So certainly, I would urge you to look at this through the lens of association rules first before you go to sequence.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=237)** But clearly, there are times when a large number of very granular sequence analysis rules will come in handy.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=246)** The most typical applications are web mining and predictive maintenance.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=251)** So for instance, a subject matter expert may eventually conclude that they're really looking at up-selling and cross-selling in the retail example and it may not matter that much that it's beer before pizza or pizza before beer.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=268)** But the engineer that's looking at failures in equipment really must know the sequence of events that leads up to a particular failure.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=278)** A colleague of mine was presenting predictive maintenance results at a conference and it was really quite interesting.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=285)** It was those very complex Coca-Cola machines that allow you to choose the flavor right at the machine and combines the syrup necessary behind the scenes.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=299)** When those machines first came out, they actually had some errors that they were prone to.
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=304)** And sequence analysis was the technique that was used by my colleague to perform a predictive maintenance analysis model to figure out what series of events was occurring prior to failure.
>
> **[5:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=318)** And that was presented to the engineers and they were able to figure out the problem and address it.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/sequence-detection?u=76281980&t=323)** So sequence analysis can be powerful, but when it's applied to something like product categories and when it's a retail example, it may be more detailed than you need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** just like (1), for instance (1)
> **CLI Commands:** python (1)
> **Env Vars:** spss (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/next-steps-22995415?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/next-steps-22995415?u=76281980&t=0)** - [Instructor] So what are some possible next steps for you after completing the course?
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/next-steps-22995415?u=76281980&t=5)** The first thing I'd recommend is give it a try.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/next-steps-22995415?u=76281980&t=8)** Find a data set that's important to you and apply these techniques as soon as you get a chance.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/next-steps-22995415?u=76281980&t=13)** Then if you are an SPSS user, it's very easy to find all the courses in the library using SPSS.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/next-steps-22995415?u=76281980&t=20)** They're in a special SPSS learning path, which includes a great deep dive into SPSS [[Statistics]] and then some additional SPSS model of courses that I have in the library.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/next-steps-22995415?u=76281980&t=32)** If you're not an SPSS user, there are numerous videos that show you the steps to produce a cluster analysis and tools like [[Python (Programming Language)|Python]], R and [[Microsoft Excel|Excel]].
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/next-steps-22995415?u=76281980&t=41)** Not all of them will cover the theory in as much depth as we've just done, but with that behind you, you're ready for those courses now.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/next-steps-22995415?u=76281980&t=50)** Finally, if you want to go broad rather than deep, I've got a [[Predictive Analytics]] overview course that will help you with that goal.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/next-steps-22995415?u=76281980&t=59)** Whichever path you choose, I hope you'll let me know how you are progressing by posting your progress, following me on [[LinkedIn]], and maybe even attending one of my [[Microsoft Office|office]] hours.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-clustering-and-association/next-steps-22995415?u=76281980&t=70)** And if you see me at a conference, I hope you'll say hi.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Python (Programming Language)|Python]] (1), [[Microsoft Excel|Excel]] (1), [[Predictive Analytics]] (1), [[LinkedIn]] (1)
> **Env Vars:** spss (6)
> **CLI Commands:** find (2), python (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Keith McCormick]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- Artificial Intelligence (AI)

## Path Context

### In [[Develop Your SPSS Skills]]
← [[Machine Learning and AI- Advanced Decision Trees with SPSS]] | **6 of 6**

## Appears In

- [[Develop Your SPSS Skills]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Classification Modeling]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning & AI Foundations- Linear Regression]] — Artificial Intelligence (AI), Machine Learning
- [[Advanced Python in Excel- Machine Learning]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)