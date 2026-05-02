---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: machine-learning-foundations-probability
url: "https://www.linkedin.com/learning/machine-learning-foundations-probability"
duration_minutes: 89
duration: 1h 29m
level: Beginner
updated: 6/9/2025
learners: 62657
skills:
  - Machine Learning
  - Artificial Intelligence (AI)
  - Probability
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEpHdKA4omnwg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1690400093393?e=2147483647&amp;v=beta&amp;t=-WzhjmTdH_MA61RJjqAW6AWshhWWjqEwfOeVFQiyVW0"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research]]'
  - '[[Foundational Math for Machine Learning]]'
prev_courses:
  - '[[Machine Learning Foundations- Calculus]]'
  - '[[Machine Learning Foundations- Calculus]]'
next_courses:
  - '[[Machine Learning Foundations- Statistics]]'
  - '[[Machine Learning Foundations- Statistics]]'
path_nav: '[{"path":"Machine Learning Statistical Foundations Professional Certificate by Wolfram Research","position":4,"total":6,"prev":"Machine Learning Foundations- Calculus","next":"Machine Learning Foundations- Statistics"},{"path":"Foundational Math for Machine Learning","position":3,"total":4,"prev":"Machine Learning Foundations- Calculus","next":"Machine Learning Foundations- Statistics"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - topic/data-science
  - skill/machine-learning
  - skill/artificial-intelligence-ai
  - skill/probability
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20Foundations-%20Probability.md)

![Machine Learning Foundations: Probability](https://media.licdn.com/dms/image/v2/D4D0DAQEpHdKA4omnwg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1690400093393?e=2147483647&amp;v=beta&amp;t=-WzhjmTdH_MA61RJjqAW6AWshhWWjqEwfOeVFQiyVW0)

# Machine Learning Foundations: Probability

> If you work with machine learning models, you probably already know that your models are based on estimation and approximation. Probability is everything and more—but how do you leverage it to your advantage?In this course, the third part of the Machine Learning Foundations series, join instructor Terezija Semenski for an in-depth exploration of probability, its core concepts and functionalities, 

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability) | 1h 29m | Beginner | 63K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Probability for machine learning](#probability-for-machine-learning)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to Probability**](#1-introduction-to-probability) (5 videos)
  - [Defining probability](#defining-probability)
  - [Applications of probability in ML](#applications-of-probability-in-ml)
  - [Sample space and events](#sample-space-and-events)
  - [Random variables](#random-variables)
  - [Examples of probability](#examples-of-probability)
- [**2. The Rules of Probability**](#2-the-rules-of-probability) (6 videos)
  - [Probability of an event](#probability-of-an-event)
  - [The sum rule](#the-sum-rule)
  - [The product rule](#the-product-rule)
  - [The sum rule extended](#the-sum-rule-extended)
  - [Conditional probability](#conditional-probability)
  - [Total probability](#total-probability)
- [**3. The Joint and Marginal Probability**](#3-the-joint-and-marginal-probability) (3 videos)
  - [Joint and marginal probability](#joint-and-marginal-probability)
  - [Joint probability tables](#joint-probability-tables)
  - [The chain rule for probability](#the-chain-rule-for-probability)
- [**4. Discrete Probability Distributions**](#4-discrete-probability-distributions) (6 videos)
  - [Probability distributions](#probability-distributions)
  - [Histograms and probability](#histograms-and-probability)
  - [Discrete probability distribution](#discrete-probability-distribution)
  - [The binomial distribution](#the-binomial-distribution)
  - [The Bernoulli distribution](#the-bernoulli-distribution)
  - [The Poisson distribution](#the-poisson-distribution)
- [**5. Continuous Probability Distributions**](#5-continuous-probability-distributions) (3 videos)
  - [The continuous probability distribution](#the-continuous-probability-distribution)
  - [Central limit theorem](#central-limit-theorem)
  - [The law of large numbers](#the-law-of-large-numbers)
- [**6. The Bayes' Theorem**](#6-the-bayes-theorem) (3 videos)
  - [Introduction to Bayes' theorem](#introduction-to-bayes-theorem)
  - [Example of Bayes' theorem in practice](#example-of-bayes-theorem-in-practice)
  - [Naive Bayes' clasifier](#naive-bayes-clasifier)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Probability for machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-for-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-for-machine-learning?u=76281980&t=0)** - Do you work with machine learning models?
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-for-machine-learning?u=76281980&t=2)** If so, you know that machine learning models are based on estimation and approximation, which are the core probability.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-for-machine-learning?u=76281980&t=9)** Using probability, we can handle uncertainty, such as noisy data, incomplete coverage of the problem domain, and imperfect ML models.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-for-machine-learning?u=76281980&t=18)** Hi, I'm Terezija Semenski.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-for-machine-learning?u=76281980&t=20)** I'm a software developer, mathematician, and a teacher with a passion for AI and machine learning.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-for-machine-learning?u=76281980&t=26)** Join me as we dive into basic concepts of probability, different types of probability, discrete and continuous distribution, base CRM, how to calculate them and its applications in ML.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (4), data (1), ai (1)
> **Env Vars:** crm (1)
> **Analogies:** such as (1)
> **Speakers:** - do (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you get started with this course there are few things you should know.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-foundations-probability/what-you-should-know?u=76281980&t=4)** You should be familiar with key concepts of algebra, linear algebra, and calculus.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/what-you-should-know?u=76281980&t=10)** If you aren't familiar, I encourage you to take my previous two courses, ML Foundations: Linear Algebra and Calculus, so you can easily follow along.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-foundations-probability/what-you-should-know?u=76281980&t=21)** You should have basic Python programming knowledge.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/what-you-should-know?u=76281980&t=24)** We will focus on probability capabilities and some of their applications in Python Code.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-foundations-probability/what-you-should-know?u=76281980&t=31)** Our focus will be on the latest versions of Python 3.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/what-you-should-know?u=76281980&t=34)** You will also want to make sure that you have an account installed.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-foundations-probability/what-you-should-know?u=76281980&t=38)** We are going to be working with Jupyter Notebook, so if you have never worked with Jupyter Notebook before, then you can check out the Jupyter Notebook Basic Suite in my course Foundations of Numpy.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/what-you-should-know?u=76281980&t=51)** With that being said, if you don't have any experience with ML or probability, don't worry.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-foundations-probability/what-you-should-know?u=76281980&t=58)** I'll cover all the basics so you won't be overwhelmed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Linear Algebra]] (2), [[Calculus]] (2), [[Probability]] (2), [[Programming]] (1)
> **CLI Commands:** python (3), make (1)
> **Tools:** jupyter (3)
> **Versions:** python 3 (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Probability

[↑ Back to Table of Contents](#table-of-contents)

#### Defining probability
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=0)** - You're catching a bus to the nearest town over the weekend and you're wondering if you're late.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=5)** Or your colleagues have just released the latest version of app in production and you're wondering how certain they are there are no critical bugs in production.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=14)** Even in small everyday things, like taking a random sweet out of the bag of sweets, or considering a chance of rain, you're thinking about probability without even noticing.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=27)** Probability is the chance of something happening.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=30)** You can also think of it as how strongly we believe an event will happen.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=35)** Many people think that probability and likelihood are one in the same, but when it comes to mathematics we use likelihood for measuring the frequency of events that have already occurred and probability for quantifying predictions of events yet to happen.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=52)** So in ML, likelihood represents the data in the past and we use it to predict the probability.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=59)** For example, we could use ML to predict apartment prices or bond values on the stock market, or the probability that a randomly selected person has an illness.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=71)** A probability is expressed as a number between zero and one that measures how likely something will happen.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=79)** When there is no chance that something will happen, we say that the probability equals zero.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=84)** If we're absolutely certain that it'll happen, we say that the probability is equal to one.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=91)** For example, we could say that there is 90% chance you will go for a walk with your dog in the evening.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=98)** We'll call this probability P of the event X and write it down as P of X.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=105)** Formally, we usually express probability as a decimal number, so for example, P of X equals 90% can also be written as P of x equals 0.9.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=118)** We can calculate the probability of an event by counting all the occurrences of the event and dividing them by the total possible outcomes of the event.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=128)** You could visualize it with the following informal formula.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=132)** Probability equals occurrences divided by the sum of nonoccurrences and occurrences.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=139)** The important thing to remember here is that the probability of all possible events sums to the probability value one.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=147)** In our case, this means we can calculate the probability of an event not happening, meaning the probability of not going to walk your dog by subtracting the probability of the event from one P of non X equals one minus 0.9.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=165)** That is equal to 0.1.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=167)** This gives you a little insight into what probability is and how to calculate the probability of the event.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (20), data (1), express (1)
> **Analogies:** for example (3), think of it as (1)
> **Versions:** 0.9 (2), 0.1 (1)
> **Speakers:** - you (1)

#### Applications of probability in ML
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=0)** - I have just received an email.
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=2)** Oh wait, it's spam.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=4)** It seems that my email client hasn't filtered it correctly.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=7)** Whenever you receive an email, it is filtered automatically as normal, important, or spam.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=15)** Behind the scenes, there is a neat basic classifier or probabilistic ML model that does the job.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=21)** In the real world, there is always uncertainty.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=24)** It involves making a decision with incomplete or imperfect information, and probability provides the tools to handle it.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=33)** Now, let's see some applications of probability in ML, sampling, incomplete coverage of the problem domain.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=41)** One example of uncertainty is noise in data that can arise from a measurement error or due to variability in the observation, and it can affect input and output data.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=53)** Another example is the effects of bias.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=56)** For example, if we want to measure the probability of a person having a university degree from a set of learners of a course, we could choose a set of learners from the USA, and the sample will be biased toward that country.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=71)** By including more countries, we can expand the sample scope and variance so the sample becomes representative of the task we are trying to model.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=81)** However, in ML we are usually given a dataset, so we don't have control over the creation and sampling process.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=89)** We tackle that by splitting the data into the train and test sets, or by using one of the resampling techniques.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=98)** Pattern recognition, probability theory is a crucial part of pattern recognition because it helps to cater to the noise, and for the finite size of the sample, we apply Bayesian principles.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=112)** Model training, maximum likelihood estimation, or MLE, and other iterative machine learning techniques are based on probability.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=121)** Specifically, we use MLE for training in models like logistic regression, linear regression, and artificial neural networks.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=132)** Hyperparameter optimization, in neural networks, hyperparameters are tuned through techniques like research, Bayesian optimization is often used for hyperparameter optimization.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=145)** Model evaluation, we predict a single probability score in binary classification tasks.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=152)** Model evaluation techniques require summarizing the performance of a model based on predicted probabilities.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=160)** Developing specific algorithms, probability forms the basis of many specific algorithms used in ML.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=168)** After setting the stage for different applications of ML, we can now continue our learning by looking at basics, sample space and events.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (7), data (3), [[Algorithms]] (2), [[Logistic Regression]] (1), [[Linear Regression]] (1)
> **Env Vars:** mle (2), usa (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - i (1)

#### Sample space and events
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=0)** - [Instructor] Mathematicians like to talk in their own language which can often sound like a foreign language to people around them and send them running from math.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=9)** But don't worry, I'll simplify this basic concept so you can easily follow along.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=15)** To deal with probability, we just have to learn a few basic concepts.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=20)** Experiment, sample space, and event.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=24)** What comes to your mind when you think of an experiment?
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=27)** Probably a chemistry teacher or assistant in a science laboratory conducting an experiment.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=33)** The experiment is a test we want to perform in order to calculate the probability of each possible outcome.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=41)** Famous examples of probability experiments are flipping a coin, rolling a die, and pulling a card from a deck of cards of cards.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=51)** In ML, experiment is defined as, "As normally defined, an experiment involves systematically varying one or more independent variables and examining their effect on some dependent variables.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=66)** Thus, a machine learning experiment requires more than a single learning run.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=72)** It requires a number of runs carried out under different conditions."
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=78)** All possible outcomes of an experiment can be represented as the set which is called the sample space and is denoted with a capital letter S.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=89)** A few examples are when we flip a coin, we can get heads or tails.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=95)** So the sample space is the set heads, tails.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=98)** When we roll a die, then the sample space is the set of integers from one to six.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=105)** In ML, most sample spaces are continuous, so their elements aren't integers but instead floating point numbers.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=114)** Usually a feature input to a narrow network can take any value in the range 0, 1.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=121)** In this case, we say that the interval 0, 1 is the sample space for that feature.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=128)** The set of outcomes that we want to calculate the probability of is called the event and it's denoted for the capital letter E.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=137)** In the examples, events are the probability of getting heads when we toss a coin or the probability of rolling a number five.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=146)** Both flipping a coin and rolling a die are cases in which every outcome in the sample space is equally likely to occur.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=155)** Then you can calculate the probability of the event, P of E, using the formula where P of E is equal to n of E divided by n of S, where n of E is the cardinality of the event and n of S is the cardinality of the sample space, where cardinality is the number of elements.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=177)** We can also say that the probability of the event is equal to the ratio of the number of favorable outcomes to the total number of outcomes of an event.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=187)** Let's apply this formula to calculate the probability of getting heads.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=193)** Then S equals heads, tails, E equals heads, so n of S equals two, n of E equals one, and our probability P of E equals 1/2 or 0.5.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=206)** Now let's apply to calculate the probability of rolling a number five on a die.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=212)** Then we get E equals six.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=215)** So n of S is six, n of E is one, and P of E equals 1/6 or 0.167 or approximately 17%.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=226)** Now that we know the three basic concepts, let's continue with discovering random variables and their importance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (11), feature (2)
> **Definitions:** is called (2), is a  (1), defined as (1)
> **Versions:** 0.5 (1), 0.167 (1)
> **Speakers:** - [instructor] (1)

#### Random variables
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=0)** - As a mathematician, I love math jokes.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=3)** There is one that is particularly dear to my heart, although it's very old.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=8)** Here it is.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=9)** Dear Algebra, stop asking us to find your X.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=13)** She's never coming back, and don't ask Y.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=16)** In algebra, you're surrounded by variables.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=20)** A variable is unknown.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=22)** For example, if you're trying to solve this linear equation, two X plus five equals 17, you define an X and that's your variable.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=33)** A random variable in probability is something different.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=36)** It is composed of all possible outcomes in the sample space.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=41)** We can define it as a random variable is a variable that takes on values from its sample space with a certain probability.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=50)** Let's imagine we are flipping a coin.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=52)** A random variable will cover all possible outcomes.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=56)** So in our case, just heads and tails.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=59)** Another example would be drawing a card from a deck of 52 cards.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=63)** All the possible cards from the deck will be a random variable.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=67)** We denote a random variable with a capital letter, usually X or Y.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=73)** To write a specific outcome formally, meaning probability for drawing a card, we could write P of X equals ace of spades equals one divided by 52.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=84)** We distinguished between two types of random variables, discrete random variables and continuous random variables.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=93)** Discrete random variables can only take on specific values.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=97)** It has to be countable and there should be a distinctions between values.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=102)** For example, the number of sales per month, the number of layoffs at a company in a year, number of newborn babies in a city in a year.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=112)** Continuous random variables can take on infinite number of values in a range and distinctions between incremental values are unimportant.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=122)** A few examples are the time to complete a running race, a company's yearly revenues, and the weight of an adult.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=130)** There is one more specific feature linked to the probability of the continuous random variable.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=137)** The probability is in some range of the sample space, not a particular real number.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=143)** For the time to complete a running race, you can assign a probability to range to seconds.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=150)** For company revenues, you can also sign a probability to range of thousands, etc.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=157)** You could ask yourself, what is the probability that the runner will complete a race in a specific seconds range?
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=164)** Great.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=165)** Now that we have covered different types of random variables, let's head on to more advanced probability examples.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (9), feature (1)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - as (1)

#### Examples of probability
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=0)** - [Instructor] Let's explore more advanced examples of probability that use permutations and combinations.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=7)** If you have never calculated permutations and combinations before, don't worry.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=12)** I'll show you step by step what I mean.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=15)** Let's see our first example.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=17)** What is the probability of guessing a four digit number if none of the digits are repeated?
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=23)** To calculate the probability, first we have to find our sample space.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=28)** We have to select four unique integers and arrange them to form a number.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=33)** Now to count the sample space outcome, we are going to use a permutations formula P of N R equals N factorial divided by N minus R factorial.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=45)** So we have 10 possible digits.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=47)** So we have P of 10, 4 equals 10 factorial divided by 10 - 4 factorial.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=55)** Wait, what are these exclamation marks doing here?
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=59)** When a number is followed by that exclamation mark, the mathematical meaning is to multiply by every integer from the number given down to one, and we call it factorial.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=70)** For example, 10! equals 10 multiplied by nine multiplyidedby eight, multiplied by all the way down to one and 6! means multiply all the integers from one to six.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=86)** So let's get back to our permutations formula.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=89)** N is the total number of items and R is the number of items we want to arrange.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=96)** As we can see, the number of sample space outcomes is equal to 10 factorial divided by six factorial.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=103)** And when we reduce the fraction, we have seven multiplied by eight, multiplied by nine, multiplied by 10.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=110)** That is equal to 5,040.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=113)** Now to calculate our probability of guessing a four digit number, we just have to divide the number of conditional event outcomes by the sample space outcomes.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=124)** So P of X equals one divided by 5,040.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=129)** That is approximately 0.000198, which is approximately 0.02%.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=139)** Now let's see another example where we are going to see combinations formula in action.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=145)** Combinations are similar to permutations as they take only a portion of the items we have to choose from, but we don't care to arrange those items.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=155)** The formula which we're going to use for combinations is as follows, C of N, K equals N factorial divided by N minus K factorial, multiplied by K factorial.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=167)** Ann and Peter are taking a probability class together.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=171)** In today's class, the teacher is going to randomly assign two students to make a presentation next week.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=178)** There are eight students in a class.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=180)** What is the probability that Ann and Peter are going to make a presentation?
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=185)** To calculate the probability, first we have to find our sample space.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=190)** Our sample space N is equal to eight students because the order in which the students have chosen doesn't matter.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=197)** We can do that by using a combinations formula.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=200)** So we have C of 8, 2 equals 8!
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=205)** divided by 8 - 2!
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=208)** multiplied by 2!.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=210)** And after we cancel all the fractions, we get 28.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=215)** So the probability Ann and Peter will make a presentation is 1 divided by 28.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=221)** That is approximately 0.0357 or approximately 3.57%.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=231)** This at first may seem counterintuitive, as you would guess pick two students out of eight and expect 25%.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=239)** But as we are not looking at the probability of choosing any two students out of eight students, we are choosing specifically Ann and Peter.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=249)** So we have two choices out of eight students to pick Ann or Peter.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=254)** And after we pick one of them, we are left with only one choice.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=259)** That is one out of seven students.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=262)** We can write this formulae as P of picking Ann and Peter equals two divided by eight multiplied by one divided by seven.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=272)** That is equal to 2 divided by 56.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=275)** And when we cancel it out, we get 1 divided by 28.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=279)** That is approximately equal 0.0357.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=284)** And as you can see, we got the same result.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=288)** As you can see, our intuitions about probability can be completely incorrect and that's why it's important to learn and understand how to calculate it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (10), next (1)
> **CLI Commands:** make (3), find (2)
> **Versions:** 0.0357 (2), 0.000198 (1), 0.02 (1), 3.57 (1)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - [instructor] (1)


### 2. The Rules of Probability

[↑ Back to Table of Contents](#table-of-contents)

#### Probability of an event
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=0)** - [Instructor] Now that we understand what probability and sample space are, we can take a look at different probability rules.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=8)** What is easy to grasp is the fact that the sum of all probabilities for a sample space is one.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=14)** What it means in theory, in practice is that the probability of every event from the sample space is always less or equal to one.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=23)** This means that for any event, we have P of A is greater or equal to zero and is less or equal to one.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=31)** And for all the events Ai in the sample space, sum of P of AI equals one.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=38)** This sign in the formula is a capital Greek letter called sigma and it represents sum, and in this case, means the sum of all the probabilities Ai.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=49)** In our famous example of rolling a die, the probability of getting any number on the die is the same P of A equals one divided by six.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=59)** So if we apply the above formula, we get P of A1 plus P of A2, all the way down plus P of A6 equals six multiplied by one divided by six.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=72)** That is equal to one.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=74)** The second basis formula that falls logically from the previous formula is the probability for the complement of A, meaning probability that the event A does not happen.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=87)** It can be calculated using simple formula P of A slash equals one minus P of A.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=94)** For example, the probability of not getting a five can be calculated as P of B equals one minus 1/6 equals five divided by six.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=105)** That is equal to 0.83 as it is equal to one minus the probability of getting five, which is 1/6.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=113)** Let's see one more example.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=116)** A probability student makes random guesses for the three true-false questions on an online assessment.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=123)** Find the probability that there is at least one correct answer.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=127)** Let's say that the A is the event of having at least one correct answer, then the probability is P of A and A complement is the event of having no correct answers on the assessment, meaning all three questions are answered incorrectly.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=144)** The probability of one question being answered correctly is 50% or 0.5, and the same is true for the probability of one question being answered incorrectly.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=156)** It is also 50% or 0.5.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=160)** How are we going to do that?
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=162)** If we want to calculate the probability of at least one correct answer, then we have to subtract the probability of all three answers being incorrect.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=171)** Go ahead and try to calculate it.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=180)** As the probability for all three events is 1/2, we have to multiply all three probabilities so we have probability P of at least one correct equals one minus 1/2 multiplied by 1/2, multiplied by 1/2.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=197)** That is equal to one minus one divided by eight.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=201)** That is equal to seven divided by eight.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=203)** And finally, we get 0.875.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=208)** Now we can continue our journey by learning more probability rules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (18), ai (3)
> **Versions:** 0.5 (2), 0.83 (1), 0.875 (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### The sum rule
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=0)** - [Instructor] Occasionally, we want to find out the probability of two events.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=4)** for example, the probability of getting one or two when rolling a die, or the probability of France winning a handball World Cup and Germany winning a handball World Cup.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=15)** Obviously, these two events cannot occur simultaneously, and we call these types of events mutually exclusive events.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=24)** This means if we have events A and B, they can't both happen.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=28)** So if event A happens, event B does not happen, and if event B happens, event A does not happen.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=36)** So for rolling a die, both probabilities, the probability of rolling one and the probability of rolling two are 1/6.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=44)** And now we can calculate the probability of getting one or two as their sum, since one or two are both parts of the sample space and either one or the other happens, or neither happens.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=57)** If we say event P of A is the probability of getting one, and P of B is the probability of getting two, then P of A or B equals P of A plus P of B.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=69)** That is equal to 1/6 + 1/6.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=72)** That is equal to 2/6 or 1/3, and that is equal to 0.33, or approximately 33%.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=81)** We could write the formula for sum rule in the case when we have a mutually exclusive events A and B as probability of A union B equals P of A plus P of B where the symbol cup stands for union.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=97)** In case you're unfamiliar with sets and their operations, you can look up my course, Programming Foundations: Numerical Mathematics and Calculations, and find out more.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=109)** We'll find out more about the sum rule after we learn the product rule.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (9), [[Programming Foundations]] (1), product (1)
> **CLI Commands:** find (3)
> **Versions:** 0.33 (1)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### The product rule
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=0)** - [Instructor] Whenever we have two or more independent events occurring together, that's when the product rule takes its place.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=7)** It says that we can "calculate the probability of two or more independent events happening together by multiplying the individual probabilities of the events."
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=18)** It can be written as the following formula.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=21)** Let A and B be events.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=23)** Then P of A and B equals P of A cap B equals P of A multiplied by P of B.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=31)** In this formula, the simple cap represents intersection.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=36)** In our basic example, when we roll a die two times, we would like to find out what is the probability of getting the number 3 two times.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=45)** Our event A is equal to getting the number 3 the first time and one B is equal to getting the number 3 the second time.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=55)** And both are equal to 1/6.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=57)** So P of A cap B equals 1/6 multiplied by 1/6.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=63)** That is equal to 1 divided by 36, and that is equal to 0.028 or approximately 2.8%.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=72)** Let's see, one more example.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=74)** According to the 2021 employment statistics by the U.S. Bureau of Labor Statistics, only 0.7% of people are working as software developers.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=86)** And according to the survey, 30% of people own a cat.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=91)** What we would like to know is what is the probability of a randomly selected person being a software developer and owning a cat?
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=100)** We have to calculate a fraction of people who know to code and this event has no impact on the other event, being a cat owner.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=108)** So let's use the product rule.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=111)** Probability of being developer and cat owner equals P of developer multiplied by P of cat owner.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=119)** That is equal to 0.007 multiplied by 0.30 and that equals to 0.0021 or 0.21%, meaning approximately 21 out of 10,000 people in the U.S.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=137)** knows to code and own a cat.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=139)** The important thing to remember is that we can use the product rule for multiple events that take place at the same time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (4), product (3), [[Statistics]] (2)
> **CLI Commands:** cat (6), find (1)
> **Versions:** 0.028 (1), 2.8 (1), 0.7 (1), 0.007 (1), 0.30 (1)
> **Speakers:** - [instructor] (1)

#### The sum rule extended
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=0)** - [Instructor] I mentioned we'd return to the sum rule, and here we are.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=4)** We have seen how to calculate the sum rule when the events are mutually exclusive and it's simple and straightforward.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=11)** We just have to multiply the probabilities.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=14)** But what happens in cases when events aren't mutually exclusive?
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=19)** For example, we have a group of students.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=22)** 40% of them are learning to code in Python, and 30% of them are learning to code in Java, and 12% of the students are learning both Python and Java.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=34)** We want to know what is the probability that a randomly selected student is learning Python or Java?
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=41)** In our case, the sum rule can be represented with the following formula, P of A union B equals P of A plus P of B minus P of A intersection B.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=54)** Now, as we have events A, learning Python and B, learning Java that are not mutually exclusive since the events can happen at the same time, meaning a student can be taking both a Python class and a Java class, so the probability that a randomly selected student is learning Python or Java can be calculated as P of A union B equals 0.4 plus 0.3 minus 0.12.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=84)** That is equal to 0.58, meaning there is almost 60% chance that a student is learning to code in Python or Java.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=95)** Let's see one more example.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=97)** At the basketball match, 60% of fans are cheering for the home team and 35% of the fans are wearing white and 14% of the fans are cheering for the home team and are wearing white.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=111)** What is the probability that the randomly selected fan is cheering for a home team or wearing white?
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=118)** P of a union B equals P of A plus P of B minus P of a intersection B, and when we plug in the values, we get 0.6 plus 0.35 minus 0.14 equals 0.81 or 81%.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=138)** Now that we know the sum rule, let's head on to conditional probability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Java]] (7), [[Probability]] (4)
> **Versions:** 0.4 (1), 0.3 (1), 0.12 (1), 0.58 (1), 0.6 (1)
> **CLI Commands:** python (7)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Conditional probability
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=0)** - [Instructor] A type of probability that occurs very often is a conditional probability, but in many cases people find it hard to understand.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=9)** It is the probability of event A occurring given event B has occurred and can be represented as P of A given B.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=19)** Let's imagine a study that claims that 75% of people sick of some disease drink soft drinks.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=26)** At first, it sounds like you should abandon drinking soft drinks if you don't want to get sick with the disease.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=33)** But in fact, only 0.3% of the population actually gets the disease.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=40)** So are soft drinks the problem, if we know that 60% of people drink soft drinks every day?
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=47)** As we can see, the probability of having the disease given you drink soft drinks is different from the probability of drinking soft drinks given you have the disease.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=58)** So the direction of condition is important.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=62)** So a couple of people drinking soft drinks have the disease, but many people that have the disease drink soft drinks.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=70)** Our formula for the conditional probability of the event A given that event B is true, can be written as P of A given B equals P of A intersection B divided by P of B if P of B is greater than zero.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=88)** The cool thing about probability is that we can represent it with Venn diagrams.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=94)** So our formula for finding a conditional probability P of A given B, can be represented as dividing the probability of the intersection of events A and B by the probability of event B as we can see in this picture.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=110)** Let's see how to calculate conditional probability on a real world scenario.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=116)** According to the research, about 3% of adults have never been employed and have used LinkedIn.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=123)** If 35% of adults have never been employed, what is the probability that an adult has used LinkedIn given that they have never been employed?
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=134)** Let A denote the event that an adult has used LinkedIn and B denote the event that they have never been employed.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=143)** Then P of B equals 0.35 and P of A intersection B equals 0.03.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=151)** The probability that an adult has used LinkedIn given that they have never been employed is P of A given B, that is equal to P of A intersection B divided by P of B.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=163)** And when we plug in the numbers we get 0.03 divided by 0.35.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=171)** That is equal to 0.0857 or approximately 8.6%.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=179)** With this probability rules in hand we can calculate the probability for a wide range of problems, but before moving on to more complex scenarios we'll still need to learn total probability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (16), [[LinkedIn]] (4)
> **Versions:** 0.35 (2), 0.03 (2), 0.3 (1), 0.0857 (1), 8.6 (1)
> **Analogies:** imagine (1), picture (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Total probability
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=0)** - [Instructor] Let's explore the following example, Jack has three bags with 10 sweets in each bag.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=6)** The first bag has three chocolate and seven vanilla sweets.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=10)** The second bag has four chocolate and six vanilla sweets.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=14)** And the third bag consists of five chocolate and five vanilla sweets.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=18)** A sweet is randomly chosen from one of the bags.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=22)** What is the probability that it is a vanilla sweet?
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=26)** When our sample space can be separated into disjoint regions B1, B2, B3, et cetera, so that the totality of the sample space is covered by the region's Bi's that don't overlap, we can use this formula to calculate the total probability of the event i over the partitions.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=47)** P of A equals sum P of A given Bi multiplied by P of Bi.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=54)** In this formula, P of A given Bi represents the probability of A given partition Bi.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=62)** And P of Bi represents the probability of the partition Bi.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=68)** Let's see it in an example.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=70)** We had three companies, Google, Microsoft, and Facebook and the number of software developers working at each is 8,000, 10,000 and 6,000 respectively.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=82)** Additionally, the percentages of software developers that are coding in Python in these companies are 14%, 21%, and 12% respectively.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=93)** We want to know the probability that a randomly selected person from among the companies knows the Python programming language.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=102)** The company's number of developers affects things as the probability of knowing to code in Python varies by company, and the company varies in numbers of developers.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=113)** To find the probability of a developer knows Python we are going to use the formula for the total probability.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=121)** P of knows Python equals P of knows Python given Google multiplied by P of Google plus P of knows Python given Microsoft multiplied by P of Microsoft plus P of knows Python given Facebook multiplied by P of Facebook.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=138)** So conditional probability, P of knows Python given Google, represents the probability of knowing to code in Python if you work Google, and P of Google is the probability of working in Google.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=152)** How we will find the probability of a software developer working at Google?
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=163)** That's right.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=164)** We will find the probability of working in Google from the number of software developers in Google and the total number of developers working in these three companies.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=174)** So for Google, we have P of Google equals 8,000 divided by 24,000.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=180)** That is equal to 1/3 or 0.33.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=184)** For Microsoft, we have P of Microsoft is equal to 10,000 divided by 24,000.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=191)** That is equal to 5/12, and it's equal to 0.42.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=197)** And for Facebook, we have P of Facebook is equal to 6,000 divided by 24,000.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=204)** That is equal to 1/4 or 0.25.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=209)** So finally, we can plug in our probabilities in the formula to calculate.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=215)** P of knows Python equals 0.14 multiplied by 0.33 plus 0.21 multiplied by 0.42 plus 0.12 multiplied by 0.25,
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=231)** and it's equal to 0.16, which means there is 16% probability that a randomly selected software developer of these three companies will know to code in Python.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=243)** You have probably noticed that the sum of the probabilities, P of Google plus P of Microsoft plus P of Facebook equals one.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=252)** This is not a coincidence, but a rule for the partitions of the total sample space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (14), [[Google]] (13), [[Python (Programming Language)|Python]] (12), bi (7), [[Microsoft]] (6)
> **CLI Commands:** python (12), find (3)
> **Versions:** 0.33 (2), 0.42 (2), 0.25 (2), 0.14 (1), 0.21 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. The Joint and Marginal Probability

[↑ Back to Table of Contents](#table-of-contents)

#### Joint and marginal probability
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=0)** - [Instructor] We have seen that sometimes two events occur simultaneously.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=4)** For example, a person has five different shirts and four different pants in their wardrobe.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=10)** Of those clothing items, there is exactly one white shirt and exactly one pair of blue pants.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=17)** What is the probability that a person will wear a white shirt and blue pants?
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=23)** There is 1/5 probability that a person will randomly choose a white shirt and 1/4 probability that a person will randomly choose blue pants.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=33)** These are independent events because the selection of the shirt does not affect the selection of the pants.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=40)** So the probability of picking up a white shirt and blue pants is equal to the P of A and B equals P of A intersection B equals P of A multiplied by P of B that is equal to 1/5 multiplied by 1/4 that is equal to one divided by 20, or 0.05 or 5%.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=63)** As you can recall from the previous lesson, we are using a product rule to calculate this probability.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=70)** This type of probability of two variables P of X equals small x, Y equals small y, in which at the same time a random variable X has the value small x and the random variable Y has the value small y is called the joint probability.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=90)** What it means is that two or more conditions are true at the same time.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=95)** The marginal probability is the probability of occurrence of a single event, meaning we calculate the probability of one of those events without caring about the values of the others.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=107)** For example, we calculate the probability of wearing a white shirt, which is P of A equals 1/5, or 0.2, or the probability of wearing blue pants, so P of B equals 1/4, or 0.25.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=123)** Now that we have covered what joint and marginal probabilities are, let's explore joint probability tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (13), product (1)
> **Versions:** 0.05 (1), 0.2 (1), 0.25 (1)
> **Analogies:** for example (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Joint probability tables
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=0)** - [Instructor] Let's consider a company that has 500 employees, of which 200 workers are seniors working full-time.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=8)** 50 workers are seniors working part-time.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=11)** 150 workers are juniors working full-time, and 100 workers are juniors working part-time.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=19)** If an employee is selected at random, what is the probability that the person is a full-time employee?
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=26)** Before calculating the probability, we can arrange the data in the table.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=31)** The tail data is in the center of two by two numerical portion of the table.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=36)** In the columns we have employees divided by employment type, full-time and part-time.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=43)** In the rows we have employees grouped by seniority, seniors and juniors.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=48)** The final row is the sum of the columns, and the final column is the sum across the rows.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=55)** The sum of the final row or column is in the last cell, which sums up to 500 employees.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=63)** This type of table is called a contingency table.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=67)** Now, we can easily transform the contingency table into the table of probabilities by dividing each cell by the total number of possible cases.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=78)** In our case, the total number of employees, 500.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=82)** When we do this, we get the following table which we call a joint probability table.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=89)** From this table, we can look up the probability of being a senior working full-time, and write it down as P(senior,full)=0.40, and similarly the probability of being a junior working part-time and write it as P(junior,part-time)=0.16.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=111)** Using this joint probability table, we can easily calculate the probability the person is a full-time employee.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=119)** We just have to sum up the probabilities along the full-time column, and we get P(full-time)=0.76.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=130)** Similarly, we can calculate the probability of employee being junior by summing along the second row, and we get P(junior)=0.52.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=142)** When we calculated the probability of being a full-time employee or junior, we calculated marginal probabilities.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=151)** So as you can see, we have calculated the marginal probability for random variable by summing over all possible values of the other random variables.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=162)** A good thing to know is we can use joint probability tables to predict what we would expect to measure given a random sample of people.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=172)** For example, if you have a sample of 10,000 people, then based on our table we'd expect to find around 10,000 multiplied by 0.40, 4,000 full-time senior employees, and about 10,000 multiplied by 0.16, 1,600 part-time juniors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (11), data (2)
> **Versions:** 0.40 (2), 0.16 (2), 0.76 (1), 0.52 (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### The chain rule for probability
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=0)** - [Instructor] In machine learning we usually have to calculate the joint probability of multiple random variables.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=7)** This is where the chain rule for probability comes into play.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=11)** We can write the chain rule for the probability of n random variables by using the following formula.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=18)** In this formula, the intersection symbol cap is used to represent joint probability.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=24)** Maybe this formula frightens you, but don't worry, you'll quickly discover it's simple to follow along.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=31)** For example, if you have three random variables, X, Y and Z, we can write this formula as P of X, Y and Z equals P of X given Y, Z multiplied by P of Y, Z that is equal to P of X given Y, Z multiplied by P of Y given Z multiplied by P of Z.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=56)** This formula represents the probability of X, Y and Z, which is the product of the probability of X given Y and Z and the probability of Y and Z.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=67)** As you can see, the chain rule breaks down a joint probability into the product of smaller joint probabilities and conditional probabilities.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=78)** Now let's explore a simple example where we can apply the chain rule.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=83)** We have a company of 100 people, 16 of them have been working on the ML project.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=89)** We picked three people at random.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=92)** What is the probability that none of them have been working on the ML project?
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=97)** We'll use Ai to indicate the event of a person who has not been working on the ML project.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=104)** Let's write down the formula for the chain rule.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=108)** P of A3, A2, A1 equals P of A3 given A2, A1 multiplied by P of A2 given A1 multiplied by the P of A1.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=120)** Let's start with a P of A1, which is the probability of picking a random person who has not been working on an ML project.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=129)** 16 of the people have, so 84 have not, and we can see that P of A1 equals 84 divided by 100.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=139)** Once we have a person picked, we need to know the probability of selecting a second person from the remaining 99.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=147)** That is P of A2 given A1, and it's equal to 83 divided by 99.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=154)** There are 99 people left, so we have selected one of the 16 who has been working on ML project.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=161)** Finally, we have two people selected, so there are 98 people in the room, 82 of who have not been working on ML project, so we have P of A3 given A2, A1.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=174)** That is equal to 82 divided by 98.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=178)** Now we can plug in calculated probabilities in the formula for the chain rule, and we get P of A3, A2, A1 that is equal to 84 divided by 100, multiplied by 83 divided by 99, multiplied by 82 divided by 98.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=198)** That is equal to 0.5893.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=202)** So we have almost 59% probability of selecting three people, with none of them be working on ML project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (12), product (2), ai (1)
> **Versions:** 0.5893 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Discrete Probability Distributions

[↑ Back to Table of Contents](#table-of-contents)

#### Probability distributions
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=0)** - [Instructor] The easiest way to visualize a probability distribution is to think about it as a relationship that takes random variables and their outcome values and gives the probability of each of these values occurring.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=14)** For example, if you flip a coin multiple times, we expect that getting heads or tails are equally likely and equal to 1/2.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=23)** Similarly, if we roll a die 1,000 or 10,000 times, we expect that each number from one to six is equally likely to appear.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=34)** Random variables can be divided into discrete and continuous.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=39)** In the case a random variable X is either finite or countably infinite, we call it a discrete random variable, and each distribution is called a discrete probability distribution.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=52)** It can be represented as a list of all possible outcomes of a random variable X and their probabilities.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=59)** Let's see a few more examples of a discrete random variable.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=64)** The number of emergency calls received by a fire department, the number of planes arriving and departing every hour from the New York City International Airport.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=75)** In the case when a random variable takes any value between a given range, we call it a continuous random variable.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=83)** When we take any finite or infinite interval of the real line or any union of such intervals is uncountable, so a random variable with values in that set is continuous.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=96)** A few examples of continuous random variables are the waiting time of customers at a drive-in restaurant, the length of time to assemble a device, or fuel consumption in kilometers per liter of a new model of a car.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=113)** There are three main ways to describe a probability distribution.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=118)** By listing each variable of X, the outcome, and the corresponding probability of X in a table form.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=125)** By using a graph, in the case of discrete probability distribution, a histogram, that shows the outcomes of experiment X on the X axis and the corresponding probabilities of the outcomes on the Y axis.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=140)** And by using a function or a formula that assigns a probability to each outcome X.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=147)** Probability distributions are extremely important as they are used when initializing the neural network before training.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=155)** Initial weights, and sometimes biases, are selected using different probability distributions that we will discover in the next lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (9), next (1)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Histograms and probability
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=0)** - [Instructor] Charts or graphs are probably the most useful way to represent the patterns in the data, especially when we have an enormous amount of data.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=9)** One type of graph that will help us illustrate the frequency distribution in a graphical form is called a histogram.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=18)** It groups the data in bins, which is the fastest way to discover the distribution of each attribute in the dataset.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=25)** An example of a bin in a histogram of employees' work experience by years would be a bin which represents the number of employees working less than six years.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=36)** Here are some of the characteristics of the histogram.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=40)** It provides us a count of the numbers of observations in each bin created for visualization.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=46)** We can easily observe the distribution from the shape of the bins.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=51)** It helps us to see the presence of outliers in the dataset.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=55)** Let's see it in action in a simple example.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=58)** You might wonder why wouldn't we use a bar graph instead of histogram?
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=63)** So let's say, for example, that we want to create a bar graph of employees' work experience in some company, and let's say there are roughly between 5,000 to 10,000 employees there.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=76)** If we want to see all of their numbers of work experience in a bar graph, we would have to graph separately all of the employees who have less than one year experience, then all of the one year experience employees, all of the two year experience, all of the three year experience, et cetera, all the way up to the employee who has maybe somewhere between 45 and 50 years of experience.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=102)** So we would have more than 40 bars in our bar graph and it would be a little overwhelming.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=108)** So instead, we will use a histogram.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=112)** What we will do differently is group together all the employees who have between zero and five years of experience, then ones that have between six and 10 years of experience.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=123)** And so up to the employees who have between 46 and 50 years of experience.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=129)** The important thing to remember is that these buckets, or your categories, have to be the same size, so we have to have the same age span.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=139)** For example, my first bucket can't be zero to three years of experience, and then the second one, four to 10 years of experience.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=148)** They have to be the same size, so every interval is five years.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=153)** Now when we draw a histogram, which I have already prepared using matplotlib, you can easily see that most employees of this company have between zero and five years of experience, and the smallest bucket is the one with employees who have between 36 and 40 years of experience.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=172)** One more thing to remember is that the spread of the data between the smallest bucket and the largest bucket is called the distribution of the histogram.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=181)** It shows us how our data is distributed across all of these buckets that we have created.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=187)** If we divide histogram values by the sum of the counts, we can use the histogram to estimate probability distributions from samples.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=195)** It also helps us to determine the likelihood of particular values appearing when sampling from the process generated by the data used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), [[Probability]] (1)
> **Definitions:** is called (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Discrete probability distribution
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=0)** - [Instructor] Understanding and knowing when and how to apply probability distribution is critical in data analysis, decision making and modeling.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=10)** Discrete probability distributions play a crucial role in applied ML and there are a few distributions that you must know about.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=18)** Some examples of discrete probability distribution applications are modeling binary classification problems.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=26)** For example, spam or not spam or fraud, or not fraud, and multi-class classification problems.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=33)** For example, handwritten digit recognition from zero to nine.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=38)** Evaluating the performance for the binary classification models and for choosing the activation function used in the output layer of the deep learning neural networks.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=50)** While exploring the basic examples of probability, we have seen one of the most common discrete distributions called uniform distribution.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=60)** The examples were flipping a coin and rolling a dye.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=64)** In case when we have a uniform distribution, all possible outcomes are equally likely.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=70)** If we draw a histogram, all outcomes would be represented with the same frequency.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=76)** We can use a function that assigns a probability to each value of the random variable X and we'll call it a probability mass function or PMF.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=87)** For a discrete random variable X, PMF assigns a list of all possible values of X and its associated probabilities.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=97)** PMF is also referred to as the probability distribution of a discrete random variable and it satisfies two conditions.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=106)** For each X, P of X is between zero and one and sum of P of X equals 1.0.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=115)** Here are some examples of the most useful discrete probability distributions, binomial distribution, Bernoulli distribution, Poisson distribution, and multinomial distribution.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=130)** Let's discover the first of them called a binomial distribution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (8), data (1), [[Deep Learning]] (1), [[Neural Networks]] (1)
> **Env Vars:** pmf (3)
> **Analogies:** for example (2)
> **Versions:** 1.0 (1)
> **Speakers:** - [instructor] (1)

#### The binomial distribution
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=0)** - [Instructor] Imagine we are working on an engine for a new electric car and we run 10 tests.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=5)** The outcomes of these tests are two failures and eight successes.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=10)** Management expected at least 90% success rate, and are disappointed, and expect the whole team to re-engineer the design and get back with a new model.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=21)** But our team is confident we should run more tests and that their underlining probability is 95%.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=29)** The type of discrete distribution we can apply here is called a binomial distribution.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=35)** It represents the expected number of events happening in a given number of trials, if each event has a specified probability.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=44)** We can apply it by using a simple formula, where P represents the probability of k events happening n trials.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=53)** P of X equals k, equals n choose k, multiplied by P to the power of k, multiplied by one minus P to the power of n minus k.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=65)** n choose k equals n factorial divided by k factorial, multiplied by n minus k factorial.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=74)** n choose k is called the binomial coefficient, which is the number of ways to choose k items from n.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=82)** Let's see it in action on a simple example.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=85)** We want to calculate the probability of getting four tails in a row when flipping a coin four times.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=91)** Previously, we have calculated the probability by applying the product rule.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=96)** P equals one half multiplied by one half, multiplied by one half, and multiplied by one half.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=103)** That is equal to one divided by 16 or 0.0625.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=109)** If we use the binomial distribution formula, we get the same result after plugging in n equals four, k equals four, and P equals 0.5 and simplify it.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=122)** We get the same result 0.0625.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=127)** Now, by looking at this basic example it doesn't seem particularly useful but if we get back to our introductory example, we can see how it's helpful.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=138)** In our case, we have 10 tests, so obviously n equals 10 and eight successes, so k equals eight, and we expect the probability is P equals 95% or 0.95.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=151)** Let's plug our numbers into the formula.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=154)** P of X equals eight, equals 10 choose eight multiplied by 0.95 to the power of eight, multiplied by one minus 0.95 to the power of 10 minus eight, and finally we get 0.075.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=171)** So the probability we would get eight successes out of 10 trials is 0.075 or 7.5%.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=181)** As we have seen, we have n as the number of trials, P as a probability of success for each trial, and k is the number of successes we want to look up the probability for.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=192)** We have just calculated the probability of getting eight successes out of 10 tests and it seems small, but if we would add up the probabilities of eight or more successes, the probability would be much higher.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=207)** What about the probability of having nine successes and only one failure, and the probability of having 10 successes and zero failures?
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=216)** The first one would be P of X equals nine, equals 10 choose nine, multiplied by 0.95 to the power of nine, multiplied by one minus 0.95 to the power of 10 minus nine, and we get 0.315 and P of x equals 10.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=237)** Similarly, we get 0.598, so we can get the probability of getting nine or more successes by adding these two probabilities and we get 0.913 or 91.3% so we can get the probability of getting nine or more successes by adding these two probabilities so we get 0.315 plus 0.598, that is equal to 0.913 or 91.3% so the probability of getting nine or more successes is around 91.3%, which is extremely high.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (16), power (6), management (1), product (1)
> **Versions:** 0.95 (5), 91.3 (3), 0.0625 (2), 0.075 (2), 0.315 (2)
> **Definitions:** is called (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### The Bernoulli distribution
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=0)** - [Instructor] When we take a binomial distribution and have only one trial, meaning n equals 1, we call this type of distribution the Bernoulli distribution.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=11)** Basic examples are flipping a coin one time so there's only one trial and all real life scenarios similar to that.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=20)** For example, when crossing a street, we can either have a green light, meaning we can pass, or red light, meaning we have to wait.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=29)** The result of a unit test, pass or failure, the future outcome, profitable or non-profitable of a financial advancement.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=39)** When whenever we have a situation where the outcome of a trial is with its success or failure, then the behavior of the random variable acts can be represented by the Bernoulli distribution.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=52)** Such trials or experiments are called Bernoulli trials.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=57)** So, if a variable has a Bernoulli distribution it can only take values 0 and 1, and we defined a probability function as P of X equals X is equal to P, if X equals 1, and 1 minus P if X equals 0.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=77)** Another way to write down the probability function for Bernoulli distribution is in the following form.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=84)** P of X equals P to the power of X multiplied by Q to the power of 1 minus X, where Q equals 1 minus P.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=93)** Let's see a simple example.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=96)** We have a deck of 52 standard cards.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=99)** The success is the event that the queen is drawn, so X equals 1 if it occurs, and X equals 0 otherwise.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=108)** Find a probability function.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=111)** Obviously, we have a Bernoulli distribution.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=114)** The parameter is the probability of picking a queen when selecting a card, and it is equal to P of X equals 1 equals 4 divided by 52, or 1 divided by 13, as we have four queens out of 52 cards.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=131)** So the probability function is equal to P of X equals 1, divided by 13 to the power of X, multiplied by 1 minus 130 to the power of 1 minus X.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=143)** Great, now we'll head on to the one more discrete probability distribution called the Poisson distribution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (6), power (4)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** find (1)
> **Definitions:** we call this (1)
> **Speakers:** - [instructor] (1)

#### The Poisson distribution
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=0)** - Sometimes we want to apply the distribution to model occurrences over a event in a continuous time.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=7)** For example, the number of emails a person receives during 24 hours, the number of births in the population in a year, the number of persons in the population who will live at least 80 years, or the number of e-scooters passing through a street during an hour.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=26)** In these cases, using binomial and Bernoulli distribution seems possible, but it isn't convenient.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=33)** So in cases when the number of trials, n, is very large, and the success probability, p, is very small, we can define the product, lambda, as lambda equals n multiplied by p, which is the expected number of successes after n trials, or the average number of events that happened over some time.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=56)** Then we can calculate the probability of x events happening in that interval as P of x equals e to the power of minus lambda, multiplied by lambda to the power of x divided by x factorial.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=71)** If you wonder what this new variable, e, is, don't worry.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=75)** e is the constant called the Euler's number, and it's approximately equal to 2.718.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=83)** Let's see our formula in action in a simple example.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=87)** 5% of products manufactured by a company are defective.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=92)** Find the probability that in a sample of 100 units, less than four products are defective.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=99)** The probability of a defective units p equals 0.05 and n equals 100.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=106)** We can see that p is small and n is large here, so this is a Poisson distribution.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=113)** We can calculate lambda by multiplying n and p, and we get lambda equals n multiplied by p.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=120)** That is equal to 100 multiplied by 0.05, and that is equal to five.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=127)** P of x equals x is given by the formula, P of x less than four equals probability of x equals zero, plus the probability of x equals one, plus the probability of x equals two, and plus the probability of x equals three.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=144)** And when we plug all these into Poisson formula, we get P of x is less than four equals 0.265, or approximately 26.5%.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (8), power (2), [[Microsoft Products|Products]] (2), product (1)
> **Versions:** 0.05 (2), 2.718 (1), 0.265 (1), 26.5 (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - sometimes (1)


### 5. Continuous Probability Distributions

[↑ Back to Table of Contents](#table-of-contents)

#### The continuous probability distribution
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=0)** - [Presenter] We have discovered the probabilities of uncertain discreet quantities, however, many real-life events are continuous.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=9)** For example, we could measure the time taken to finish the ticket at a software development project and obviously, there are infinite number of possible ways to complete a task so the measurement is continuous.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=22)** Or the square footage of a randomly selected three-bedroom apartment.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=28)** In ML, continuous probability distributions are of fundamental importance: starting in the models themselves, when estimating the mapping between the inputs and outputs, the distribution of input variables to the models, and the distribution of errors made by models.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=46)** Let's dive into the key properties of continuous probability distributions.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=52)** Unlike discrete probability distribution where we assign the probability to specific integer value, in continuous distribution, the probability of selecting a particular value is zero.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=65)** The reason is that there are infinite number of possible values from a continuous distribution so it means no particular value can be selected.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=75)** Therefore, we'll calculate the probability of selecting values in a specific range of values.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=82)** We'll define a continuous probability distribution as follows: the continuous probability distribution is the relationship between the events for a continuous random variable and their probabilities.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=95)** It can be summarized by probability density function or PDF.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=101)** We cannot calculate the probability for a given continuous random variable directly.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=107)** It is calculated as an integral, area under the curve, for small interval around the specific outcome.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=115)** There are three important concepts you should remember.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=118)** The probability density function or PDF returns the probability of a given continuous outcome.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=126)** The cumulative distribution function or CDF returns the probability of a value less than or equal to a given outcome.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=135)** And the inverse function or CDF called the percent-point function or PPF, which returns a discreet value that is less than or equal to a given probability.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=147)** Let's see the most useful continuous probability functions.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=152)** The normal distribution or Gaussian distribution named after the famous mathematician, Karl Friedrich Gauss, or the bell curve distribution.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=161)** This distribution covers the probability or real value events from many real-life problem domains.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=168)** Here are some example of domains: IQ of a particular population, the heights and weights of people, and student average scores.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=179)** Exponential distribution.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=181)** The exponential distribution is a continuous probability distribution where a few outcomes are the most likely with a rapid decrease in probability to all other outcomes.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=192)** Here are some examples of domains: the time until the default of a loan, the number of minutes between customers who went through shop, and the time between earthquakes.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=204)** Pareto distribution.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=206)** You have probably heard of the Pareto principle or the 80/20 rule.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=211)** In the Pareto distribution, 80% of the events are covered by 20% of the range of outcomes.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=218)** Meaning, most events are drawn from just 20% of range of the continuous variable.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=225)** A few examples of domains are the total sales of a course, the income of households in a country, and the company profits from products or services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (18), [[Software Development]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** pdf (2), cdf (2), ppf (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### Central limit theorem
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=0)** - [Instructor] Central limit theorem plays an important role in ML.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=4)** For example, in education, we could use it to estimate student performance on standardized tests by taking a random samples of students and testing them.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=14)** By applying the central limit theorem, teachers could improve curriculum and instruction.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=20)** Another example would be quality control in manufacturing to make sure that the production line output satisfies quality standards.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=29)** The manufacturing manager may randomly select 100 products each day and check how many are defective.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=37)** Or in finance, it can be used to estimate the distribution of investment returns.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=43)** Investors can make random samples of historical returns, and by using the central limit theorem, make investment decisions.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=51)** The theorem tells us that: As the size of the sample increases, the distribution of the mean across multiple samples will approximate a Gaussian distribution.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=62)** Wait, what?
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=64)** Don't worry, let's start with a simple example.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=67)** Imagine we have a population of laptops in an electronics shop.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=71)** We would like to analyze the laptop prices and be able to make predictions based on them.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=77)** For example, we have 10,000 laptop prices and we draw a sample of the data from 100 laptop prices and calculate the mean.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=87)** We can calculate the mean by adding up all the prices then dividing by how many laptops there are.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=94)** Let's say that the mean for this first sample equals $1,523.47.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=101)** Next, if I take a second sample of data, I'll get a completely different mean, for example, $2,144.12.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=112)** If we take a third sample of data, we'll get the mean that is equal to $1,879.46.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=120)** So the sample mean relies of the sample data itself.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=124)** If we repeat this process many times, we'll get a sample of mean values, in our case, that means each from a set of samples of unknown distribution.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=135)** Now we can create a new dataset that is comprised of the sample means that are distributed so we have a sampling distribution of the mean.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=144)** Let's look at these values.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=145)** We can see that there are concentrating around a certain value, in our case, around $1,900.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=153)** If we take the average of sample means, we expect to get an excellent approximation of the mean.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=160)** If we visualize a distribution of the laptop prizes with a plot, we get a simple curve that might look something like this.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=168)** If we draw a plot of distribution of the sampling means, we get a very familiar distribution.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=175)** Can you recognize the distribution?
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=183)** That's right, it's the normal or Gaussian distribution.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=188)** So, that's what's the central limit theorem all about.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=192)** We can have any distribution of the population and if we find the sampling distribution of the mean, it'll approximate a normal distribution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Microsoft Products|Products]] (1), [[Electronics]] (1), next (1)
> **CLI Commands:** make (4), find (1)
> **Analogies:** for example (3), imagine (1)
> **Versions:** 523.47 (1), 144.12 (1), 879.46 (1)
> **Speakers:** - [instructor] (1)

#### The law of large numbers
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-law-of-large-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-law-of-large-numbers?u=76281980&t=0)** - [Instructor] We know that the coin should land tails 50% of the time and heads 50% of the time.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-law-of-large-numbers?u=76281980&t=6)** But if we run an experiment and toss it three times in a row, there is a 12.5% possibility that we'll get tails three times in a row.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-law-of-large-numbers?u=76281980&t=17)** The law of the large numbers tells us that the more experiments we run, the closer we will get to the expected probability.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-law-of-large-numbers?u=76281980&t=24)** This law is related to the central limit theorem in the way as we increase the size of the sample from a distribution, the mean of the sample will move closer and closer to the mean of the population.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-law-of-large-numbers?u=76281980&t=38)** Now, let's open Jupyter Notebook name 05 03 and execute the code I have already prepared.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-law-of-large-numbers?u=76281980&t=46)** We have imported numpy, as we are going to use its functions linspace and random.normal for normal distribution.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-law-of-large-numbers?u=76281980&t=54)** We have imported Matplotlib to draw the plot.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-law-of-large-numbers?u=76281980&t=57)** Our first sample is 10, and the last sample is 10 to the power of eight, or 100,000,000.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-law-of-large-numbers?u=76281980&t=64)** So our law says that as the number of samples from the distribution increases, the mean of the samples approaches the population mean, which can be represented in the following graph where the x-axis represents the number of sample, and the why-axis represents the single sample mean.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-law-of-large-numbers?u=76281980&t=84)** As you can see, when we increase sample size over 10 to the power of four, our mean is approximately equal to the population mean.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-law-of-large-numbers?u=76281980&t=93)** In our case, it's one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** power (2), [[Probability]] (1)
> **Versions:** 12.5 (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. The Bayes' Theorem

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to Bayes' theorem
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=0)** - [Instructor] Imagine this scenario in your company.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=3)** The probability that a person is working longer than five years is 45%, and the probability that a person is using ChatGPT is 15%.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=14)** Given that 8% of those that use ChatGPT also work longer than five years, what percent of those that work longer than five years also use ChatGPT?
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=26)** Now at first, this may seem to you like play with words, but let's take it step by step.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=32)** We can recognize two events.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=34)** Event A, person working more than five years.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=38)** And event B, person using ChatGPT.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=41)** Let's see what we know.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=43)** P of A equals 0.45.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=46)** P of B equals 0.15.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=48)** And P of B with A equals 0.08.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=52)** And we would like to calculate P of A with B.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=56)** If you recall conditional probability, it is the probability of one event given the occurrence of one or more other events.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=65)** For example, the probability of event A happening given the occurrence of event B happening, P of A with B.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=74)** We can write it down as P of A with B equals P of A intersection B divided by P of B.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=82)** Now we don't know the probability P of A intersection B, so by using a conditional probability formula, we cannot calculate P of A with B.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=93)** We also know that conditional probability is not symmetrical, so P of A with B doesn't equal P of B with A.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=102)** Now don't panic.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=103)** We'll use the conditional probability formula for P of B with A.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=109)** We get P of B with A equals P of A intersection B divided by P of A.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=116)** Can you spot what these two formulas have in common?
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=125)** That's right.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=126)** They both have P of A intersection B.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=129)** The cool thing in maths is that we love to play around and combine formulas into a new formula.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=136)** Let's try this out on our two conditional probability formulas.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=141)** If we transform the first formula by multiplying both sides of the equation with P of A, we get P of A intersection B equals P of B with A, multiplied by P of A.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=154)** Similarly, when we transform the second formula by multiplying both sides of the equation with P of B, we get P of A intersection B equals P of A with B, multiplied by P of B.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=169)** As you can see, we have two equations with P of A intersection B, and we can conclude that if the left sides of the equations are equal, then also the right sides of the equation have to be equal.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=181)** So P of A with B multiplied by P of B equals P of B with A multiplied by P of A.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=189)** Now finally, to get P of A with B, we have to divide both sides of our equations with P of B, and we get this formula, P of A with B equals P of B with A multiplied by P of A divided by P of B.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=206)** Now this neat formula is called Bayes's theorem.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=210)** It provides us with a principled way of calculating a conditional probability and an alternative to using the joint probability.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=218)** Lastly, let's apply to our example.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=221)** In our case, we want to calculate P of A with B.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=225)** And when we plug in our known probabilities, we get P of A with B equals 0.08 multiplied by 0.45 divided by zero point 15.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=238)** That is equal to 0.24, or 24%.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=243)** So 24% of those employees who work longer than five years also use Chat GPT.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=251)** Now that we are familiar with Bayes' theorem, let's continue to discover a useful example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (12), [[ChatGPT]] (4)
> **Versions:** 0.45 (2), 0.08 (2), 0.15 (1), 0.24 (1)
> **Analogies:** imagine (1), for example (1)
> **Env Vars:** gpt (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Example of Bayes' theorem in practice
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=0)** - [Instructor] Let's look at the example of Bayes's theorem in practice.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=3)** A factory has three reproduction lines associated with the production of a smartphone.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=9)** The smartphones produced in these three lines are 45% for the first, 35% for the second, and 20% for the third.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=19)** Additionally, we know that 0.9% of the smartphones produced in the first line are defective, 0.8% of smartphones in the second line are defective, and in the third line, 1.2% of smartphones are defective.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=35)** A sample of the smartphones produced is then examined and suppose it is found to be defective, find the probability that it was produced in the first line, in the second line, and in the third line.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=49)** Before having gone to calculate our probabilities, let's see Bayes's formula.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=54)** In the case, we have partition of a sample space, B1, B2, until Bn, such as the P of Bi is greater than zero for all i equals one until n.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=67)** Then for the event A of the sample space such as that P of A is greater than zero, Bayes's formula can be written as follows: P of Bi with A equals P of A with Bi P of Bi with A equals P of A with Bi multiplied by P of Bi divided by P of A with B1 multiplied by P of B1 plus P of A with Bn multiplied by P of Bn.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=94)** This formula may seem overwhelming, but don't worry.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=97)** You'll see it simple to use.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=100)** Now, let's see what we have.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=102)** We can define event A as smartphone is defective, and Bi, the smartphone is produced in the ith line, i equals 1, 2, 3.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=113)** Next, we can calculate the probability that the smartphone is produced in the first line as P of B1 with A.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=122)** And when we plug in the probabilities, we get P of B1 with A equals 0.45 multiplied by 0.009 equals 0.45 multiplied by 0.009 divided by 0.45 multiplied by 0.009 plus 0.35 multiplied by 0.008 plus 0.20 multiplied by 0.012, and we get 0.438 or 43.8%.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=148)** and we get 0.438 or 43.8%.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=152)** Let's calculate the probability that the smartphone is produced in the second line as P of B2 with A.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=160)** And when we plug in the numbers, we get 0.302 or 30.2%.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=165)** we get 0.302 or 30.2%.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=169)** Lastly, we want to calculate the probability that the smartphone is produced in the third line as P of B3 with A.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=178)** And when we plug in the probabilities, we get 0.26 or 26%.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=185)** One thing you may notice is that if you add all three probabilities, you get one or 100%, so we could get the third probability by subtracting the first two from one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** bi (7), [[Probability]] (5), next (1)
> **Versions:** 0.45 (3), 0.009 (3), 0.438 (2), 43.8 (2), 0.302 (2)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Naive Bayes' clasifier
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=0)** - [Teacher] Bayes's theorem plays an important role in ML.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=3)** One of the most well-known uses is a classifier, known as a Naive Bayes's classifier.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=10)** One of its applications was in one of the first email spam filters.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=14)** Other applications are product recommendation based on purchase history or movie recommendation.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=21)** Have you ever used video streaming services such as Netflix, Amazon Prime, or YouTube?
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=27)** Did you ever wonder how a streaming service almost always finds content that is most appealing to you?
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=34)** Well, they most probably use a recommendation system that uses Naive Bayes's classifier.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=40)** Apart from ratings, movies also have features such as the year released, who directed it, and genre, such as comedy, family, action, and so on.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=52)** Movie streaming service recommends movies based on your watch history and by finding movies with similar features such as genre and ratings.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=62)** So, for example, we could represent your previously watched movies with a matrix that displays movies based on genre and your ratings.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=71)** Using Naive Bayes's classifier, movie streaming service will calculate the probability that you will like a new movie based on the genre and given stars.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=81)** It'll assume that genre features are independent of each other, so changing the value of one feature does not affect the value of the other feature.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=90)** This is called a naive assumption.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=93)** And based on this, we can apply the product rule for probability, and as a result, get a product of a single variable conditional probabilities.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=103)** The way to calculate probability in the case when we have multiple X features or variables is by extending Bayes's theorem formula for conditional probability to a new formula, which we will call the Naive Bayes's formula.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=120)** In mathematical jargon, we think of this formula as a way to calculate the posterior probability or the probability of the outcome given evidence, and we can say it is equal to probability of likelihood of evidence multiplied by prior probability divided by the probability of evidence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (9), product (3), feature (2)
> **Analogies:** such as (4), for example (1)
> **Definitions:** is a  (1), known as (1), is called (1)
> **Speakers:** - [teacher] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/next-steps?u=76281980&t=0)** - [Instructor] I hope you enjoyed the course and now have a solid foundation of probability concepts and techniques.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-foundations-probability/next-steps?u=76281980&t=6)** You can look for more programming courses coming from me in the future.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-foundations-probability/next-steps?u=76281980&t=11)** You can also search our library for machine learning foundation courses to continue your journey.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-foundations-probability/next-steps?u=76281980&t=17)** I want to wrap up by saying thank you.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-foundations-probability/next-steps?u=76281980&t=20)** You have devoted time to learning this material with me and I want you to know that I don't take that for granted.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-foundations-probability/next-steps?u=76281980&t=28)** I really do appreciate your engagement as well as your feedback on this course.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/next-steps?u=76281980&t=33)** If you have any questions, please feel free to get in touch over LinkedIn and on Twitter.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-foundations-probability/next-steps?u=76281980&t=39)** If you enjoyed this course, I'd love to know.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-foundations-probability/next-steps?u=76281980&t=41)** Thanks so much for watching.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-foundations-probability/next-steps?u=76281980&t=43)** Until next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1), [[Programming]] (1), [[Search]] (1), [[LinkedIn]] (1), next (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Terezija Semenski]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- Artificial Intelligence (AI)
- Probability

## Path Context

### In [[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research]]
← [[Machine Learning Foundations- Calculus]] | **4 of 6** | [[Machine Learning Foundations- Statistics]] →

### In [[Foundational Math for Machine Learning]]
← [[Machine Learning Foundations- Calculus]] | **3 of 4** | [[Machine Learning Foundations- Statistics]] →

## Part of

- [[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research]]

## Appears In

- [[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research]]
- [[Foundational Math for Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Classification Modeling]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning & AI Foundations- Linear Regression]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)