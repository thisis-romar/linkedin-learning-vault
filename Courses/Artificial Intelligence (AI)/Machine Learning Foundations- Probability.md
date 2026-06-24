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
  - '[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20Statistical%20Foundations%20Professional%20Certificate%20by%20Wolfram%20Research.md)'
  - '[Foundational Math for Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Foundational%20Math%20for%20Machine%20Learning.md)'
prev_courses:
  - '[Machine Learning Foundations- Calculus](Machine%20Learning%20Foundations-%20Calculus.md)'
  - '[Machine Learning Foundations- Calculus](Machine%20Learning%20Foundations-%20Calculus.md)'
next_courses:
  - '[Machine Learning Foundations- Statistics](Machine%20Learning%20Foundations-%20Statistics.md)'
  - '[Machine Learning Foundations- Statistics](Machine%20Learning%20Foundations-%20Statistics.md)'
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
created: 2026-05-03
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

#### [Probability for machine learning](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-for-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-for-machine-learning?u=76281980&t=0)** - Do you work with machine learning models? If so, you know that machine learning models are based on estimation and approximation, which are the core [Probability](../../Skills/Data%20Science/Probability.md). Using probability, we can handle uncertainty, such as noisy data, incomplete coverage of the problem domain, and imperfect ML models. Hi, I'm Terezija Semenski. I'm a software developer, mathematician, and a teacher with a passion for AI and machine learning. Join me as we dive into basic concepts of probability, different types of probability, discrete and continuous distribution, base CRM, how to calculate them and its applications in ML.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (4)
> **Env Vars:** crm (1)
> **Analogies:** such as (1)
> **Speakers:** - do (1)

#### [What you should know](https://www.linkedin.com/learning/machine-learning-foundations-probability/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you get started with this course there are few things you should know. You should be familiar with key concepts of algebra, [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md), and [Calculus](../../Skills/Data%20Science/Calculus.md). If you aren't familiar, I encourage you to take my previous two courses, ML Foundations: Linear Algebra and Calculus, so you can easily follow along. You should have basic [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) programming knowledge. We will focus on [Probability](../../Skills/Data%20Science/Probability.md) capabilities and some of their applications in Python Code. Our focus will be on the latest versions of Python 3. You will also want to make sure that you have an account installed. We are going to be working with Jupyter Notebook, so if you have never worked with Jupyter Notebook before, then you can check out the Jupyter Notebook Basic Suite in my course Foundations of Numpy. With that being said, if you don't have any experience with ML or probability, don't worry. I'll cover all the basics so you won't be overwhelmed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) (2), [Calculus](../../Skills/Data%20Science/Calculus.md) (2), [Probability](../../Skills/Data%20Science/Probability.md) (2)
> **CLI Commands:** python (3), make (1)
> **Tools:** jupyter (3)
> **Versions:** python 3 (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Probability

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining probability](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=0)** - You're catching a bus to the nearest town over the weekend and you're wondering if you're late. Or your colleagues have just released the latest version of app in production and you're wondering how certain they are there are no critical bugs in production. Even in small everyday things, like taking a random sweet out of the bag of sweets, or considering a chance of rain, you're thinking about [Probability](../../Skills/Data%20Science/Probability.md) without even noticing. Probability is the chance of something happening. You can also think of it as how strongly we believe an event will happen. Many people think that probability and likelihood are one in the same, but when it comes to mathematics we use likelihood for measuring the frequency of events that have already occurred and probability for quantifying predictions of events yet to happen. So in ML, likelihood represents the data in the past and we use it to predict the probability. For example, we could use ML to predict apartment prices or bond values on the stock market, or the probability that a randomly selected person has an illness. A probability is expressed as a number between zero and one that measures how likely something will happen. When there is no chance that something will happen, we say that the probability equals zero. If we're absolutely certain that it'll happen, we say that the probability is equal to one. For example, we could say
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/defining-probability?u=76281980&t=93)** that there is 90% chance you will go for a walk with your dog in the evening. We'll call this probability P of the event X and write it down as P of X. Formally, we usually express probability as a decimal number, so for example, P of X equals 90% can also be written as P of x equals 0.9. We can calculate the probability of an event by counting all the occurrences of the event and dividing them by the total possible outcomes of the event. You could visualize it with the following informal formula. Probability equals occurrences divided by the sum of nonoccurrences and occurrences. The important thing to remember here is that the probability of all possible events sums to the probability value one. In our case, this means we can calculate the probability of an event not happening, meaning the probability of not going to walk your dog by subtracting the probability of the event from one P of non X equals one minus 0.9. That is equal to 0.1. This gives you a little insight into what probability is and how to calculate the probability of the event.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (20)
> **Analogies:** for example (3), think of it as (1)
> **Versions:** 0.9 (2), 0.1 (1)
> **Speakers:** - you (1)

#### [Applications of probability in ML](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=0)** - I have just received an email. Oh wait, it's spam. It seems that my email client hasn't filtered it correctly. Whenever you receive an email, it is filtered automatically as normal, important, or spam. Behind the scenes, there is a neat basic classifier or probabilistic ML model that does the job. In the real world, there is always uncertainty. It involves making a decision with incomplete or imperfect information, and [Probability](../../Skills/Data%20Science/Probability.md) provides the tools to handle it. Now, let's see some applications of probability in ML, sampling, incomplete coverage of the problem domain. One example of uncertainty is noise in data that can arise from a measurement error or due to variability in the observation, and it can affect input and output data. Another example is the effects of bias. For example, if we want to measure the probability of a person having a university degree from a set of learners of a course, we could choose a set of learners from the USA, and the sample will be biased toward that country. By including more countries, we can expand the sample scope and variance so the sample becomes representative of the task we are trying to model. However, in ML we are usually given a dataset, so we don't have control over the creation and sampling process. We tackle that by splitting the data into the train and test sets, or by using one
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/applications-of-probability-in-ml?u=76281980&t=95)** of the resampling techniques. Pattern recognition, probability theory is a crucial part of pattern recognition because it helps to cater to the noise, and for the finite size of the sample, we apply Bayesian principles. Model training, maximum likelihood estimation, or MLE, and other iterative machine learning techniques are based on probability. Specifically, we use MLE for training in models like [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md), [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md), and [Artificial Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Artificial%20Neural%20Networks.md). Hyperparameter optimization, in [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md), hyperparameters are tuned through techniques like research, Bayesian optimization is often used for hyperparameter optimization. Model evaluation, we predict a single probability score in binary classification tasks. Model evaluation techniques require summarizing the performance of a model based on predicted probabilities. Developing specific [Algorithms](../../Skills/Software%20Development/Algorithms.md), probability [Forms](../../Skills/Web%20Development/Forms.md) the basis of many specific algorithms used in ML. After setting the stage for different applications of ML, we can now continue our learning by looking at basics, sample space and events.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (7), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (1), [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (1), [Artificial Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Artificial%20Neural%20Networks.md) (1)
> **Env Vars:** mle (2), usa (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - i (1)

#### [Sample space and events](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=0)** - [Instructor] Mathematicians like to talk in their own language which can often sound like a foreign language to people around them and send them running from math. But don't worry, I'll simplify this basic concept so you can easily follow along. To deal with [Probability](../../Skills/Data%20Science/Probability.md), we just have to learn a few basic concepts. Experiment, sample space, and event. What comes to your mind when you think of an experiment? Probably a chemistry teacher or assistant in a science laboratory conducting an experiment. The experiment is a test we want to perform in order to calculate the probability of each possible outcome. Famous examples of probability experiments are flipping a coin, rolling a die, and pulling a card from a deck of cards of cards. In ML, experiment is defined as, "As normally defined, an experiment involves systematically varying one or more independent variables and examining their effect on some dependent variables. Thus, a machine learning experiment requires more than a single learning run. It requires a number of runs carried out under different conditions." All possible outcomes of an experiment can be represented as the set which is called the sample space and is denoted with a capital letter S. A few examples are when we flip a coin, we can get heads or tails.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=95)** So the sample space is the set heads, tails. When we roll a die, then the sample space is the set of integers from one to six. In ML, most sample spaces are continuous, so their elements aren't integers but instead floating point numbers. Usually a feature input to a narrow network can take any value in the range 0, 1. In this case, we say that the interval 0, 1 is the sample space for that feature. The set of outcomes that we want to calculate the probability of is called the event and it's denoted for the capital letter E. In the examples, events are the probability of getting heads when we toss a coin or the probability of rolling a number five. Both flipping a coin and rolling a die are cases in which every outcome in the sample space is equally likely to occur. Then you can calculate the probability of the event, P of E, using the formula where P of E is equal to n of E divided by n of S, where n of E is the cardinality of the event and n of S is the cardinality of the sample space, where cardinality is the number of elements. We can also say that the probability of the event is equal to the ratio of the number of favorable outcomes to the total number of outcomes of an event. Let's apply this formula
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=189)** to calculate the probability of getting heads. Then S equals heads, tails, E equals heads, so n of S equals two, n of E equals one, and our probability P of E equals 1/2 or 0.5. Now let's apply to calculate the probability of rolling a number five on a die. Then we get E equals six. So n of S is six, n of E is one, and P of E equals 1/6 or 0.167 or approximately 17%.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-foundations-probability/sample-space-and-events?u=76281980&t=226)** Now that we know the three basic concepts, let's continue with discovering random variables and their importance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (11)
> **Definitions:** is called (2), is a  (1), defined as (1)
> **Versions:** 0.5 (1), 0.167 (1)
> **Speakers:** - [instructor] (1)

#### [Random variables](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=0)** - As a mathematician, I love math jokes. There is one that is particularly dear to my heart, although it's very old. Here it is. Dear Algebra, stop asking us to find your X. She's never coming back, and don't ask Y. In algebra, you're surrounded by variables. A variable is unknown. For example, if you're trying to solve this linear equation, two X plus five equals 17, you define an X and that's your variable. A random variable in [Probability](../../Skills/Data%20Science/Probability.md) is something different. It is composed of all possible outcomes in the sample space. We can define it as a random variable is a variable that takes on values from its sample space with a certain probability. Let's imagine we are flipping a coin. A random variable will cover all possible outcomes. So in our case, just heads and tails. Another example would be drawing a card from a deck of 52 cards. All the possible cards from the deck will be a random variable. We denote a random variable with a capital letter, usually X or Y. To write a specific outcome formally, meaning probability for drawing a card, we could write P of X equals ace of spades equals one divided by 52. We distinguished between two types of random variables, discrete random variables and continuous random variables. Discrete random variables can only take on specific values.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-probability/random-variables?u=76281980&t=97)** It has to be countable and there should be a distinctions between values. For example, the number of sales per month, the number of layoffs at a company in a year, number of newborn babies in a city in a year. Continuous random variables can take on infinite number of values in a range and distinctions between incremental values are unimportant. A few examples are the time to complete a running race, a company's yearly revenues, and the weight of an adult. There is one more specific feature linked to the probability of the continuous random variable. The probability is in some range of the sample space, not a particular real number. For the time to complete a running race, you can assign a probability to range to seconds. For company revenues, you can also sign a probability to range of thousands, etc. You could ask yourself, what is the probability that the runner will complete a race in a specific seconds range? Great. Now that we have covered different types of random variables, let's head on to more advanced probability examples.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (9)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - as (1)

#### [Examples of probability](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=0)** - [Instructor] Let's explore more advanced examples of [Probability](../../Skills/Data%20Science/Probability.md) that use permutations and combinations. If you have never calculated permutations and combinations before, don't worry. I'll show you step by step what I mean. Let's see our first example. What is the probability of guessing a four digit number if none of the digits are repeated? To calculate the probability, first we have to find our sample space. We have to select four unique integers and arrange them to form a number. Now to count the sample space outcome, we are going to use a permutations formula P of N R equals N factorial divided by N minus R factorial. So we have 10 possible digits. So we have P of 10, 4 equals 10 factorial divided by 10 - 4 factorial. Wait, what are these exclamation marks doing here? When a number is followed by that exclamation mark, the mathematical meaning is to multiply by every integer from the number given down to one, and we call it factorial. For example, 10! equals 10 multiplied by nine multiplyidedby eight, multiplied by all the way down to one and 6! means multiply all the integers from one to six. So let's get back to our permutations formula. N is the total number of items and R is the number of items we want to arrange.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=96)** As we can see, the number of sample space outcomes is equal to 10 factorial divided by six factorial. And when we reduce the fraction, we have seven multiplied by eight, multiplied by nine, multiplied by 10. That is equal to 5,040. Now to calculate our probability of guessing a four digit number, we just have to divide the number of conditional event outcomes by the sample space outcomes. So P of X equals one divided by 5,040. That is approximately 0.000198, which is approximately 0.02%. Now let's see another example where we are going to see combinations formula in action. Combinations are similar to permutations as they take only a portion of the items we have to choose from, but we don't care to arrange those items. The formula which we're going to use for combinations is as follows, C of N, K equals N factorial divided by N minus K factorial, multiplied by K factorial. Ann and Peter are taking a probability class together. In today's class, the teacher is going to randomly assign two students to make a presentation next week. There are eight students in a class. What is the probability that Ann and Peter are going to make a presentation? To calculate the probability, first we have to find our sample space.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=190)** Our sample space N is equal to eight students because the order in which the students have chosen doesn't matter. We can do that by using a combinations formula. So we have C of 8, 2 equals 8! divided by 8 - 2! multiplied by 2!. And after we cancel all the fractions, we get 28. So the probability Ann and Peter will make a presentation is 1 divided by 28. That is approximately 0.0357 or approximately 3.57%. This at first may seem counterintuitive, as you would guess pick two students out of eight and expect 25%. But as we are not looking at the probability of choosing any two students out of eight students, we are choosing specifically Ann and Peter. So we have two choices out of eight students to pick Ann or Peter. And after we pick one of them, we are left with only one choice. That is one out of seven students. We can write this formulae as P of picking Ann and Peter equals two divided by eight multiplied by one divided by seven. That is equal to 2 divided by 56. And when we cancel it out, we get 1 divided by 28. That is approximately equal 0.0357. And as you can see, we got the same result.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-foundations-probability/examples-of-probability?u=76281980&t=288)** As you can see, our intuitions about probability can be completely incorrect and that's why it's important to learn and understand how to calculate it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (10)
> **CLI Commands:** make (3), find (2)
> **Versions:** 0.0357 (2), 0.000198 (1), 0.02 (1), 3.57 (1)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - [instructor] (1)


### 2. The Rules of Probability

[↑ Back to Table of Contents](#table-of-contents)

#### [Probability of an event](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=0)** - [Instructor] Now that we understand what [Probability](../../Skills/Data%20Science/Probability.md) and sample space are, we can take a look at different probability rules. What is easy to grasp is the fact that the sum of all probabilities for a sample space is one. What it means in theory, in practice is that the probability of every event from the sample space is always less or equal to one. This means that for any event, we have P of A is greater or equal to zero and is less or equal to one. And for all the events Ai in the sample space, sum of P of AI equals one. This sign in the formula is a capital Greek letter called sigma and it represents sum, and in this case, means the sum of all the probabilities Ai. In our famous example of rolling a die, the probability of getting any number on the die is the same P of A equals one divided by six. So if we apply the above formula, we get P of A1 plus P of A2, all the way down plus P of A6 equals six multiplied by one divided by six. That is equal to one. The second basis formula that falls logically from the previous formula is the probability for the complement of A, meaning probability that the event A does not happen. It can be calculated using simple formula P of A slash equals one minus P of A.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=94)** For example, the probability of not getting a five can be calculated as P of B equals one minus 1/6 equals five divided by six. That is equal to 0.83 as it is equal to one minus the probability of getting five, which is 1/6. Let's see one more example. A probability student makes random guesses for the three true-false questions on an online assessment. Find the probability that there is at least one correct answer. Let's say that the A is the event of having at least one correct answer, then the probability is P of A and A complement is the event of having no correct answers on the assessment, meaning all three questions are answered incorrectly. The probability of one question being answered correctly is 50% or 0.5, and the same is true for the probability of one question being answered incorrectly. It is also 50% or 0.5. How are we going to do that? If we want to calculate the probability of at least one correct answer, then we have to subtract the probability of all three answers being incorrect. Go ahead and try to calculate it.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-of-an-event?u=76281980&t=180)** As the probability for all three events is 1/2, we have to multiply all three probabilities so we have probability P of at least one correct equals one minus 1/2 multiplied by 1/2, multiplied by 1/2. That is equal to one minus one divided by eight. That is equal to seven divided by eight. And finally, we get 0.875. Now we can continue our journey by learning more probability rules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (18)
> **Versions:** 0.5 (2), 0.83 (1), 0.875 (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [The sum rule](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=0)** - [Instructor] Occasionally, we want to find out the [Probability](../../Skills/Data%20Science/Probability.md) of two events. for example, the probability of getting one or two when rolling a die, or the probability of France winning a handball World Cup and Germany winning a handball World Cup. Obviously, these two events cannot occur simultaneously, and we call these types of events mutually exclusive events. This means if we have events A and B, they can't both happen. So if event A happens, event B does not happen, and if event B happens, event A does not happen. So for rolling a die, both probabilities, the probability of rolling one and the probability of rolling two are 1/6. And now we can calculate the probability of getting one or two as their sum, since one or two are both parts of the sample space and either one or the other happens, or neither happens. If we say event P of A is the probability of getting one, and P of B is the probability of getting two, then P of A or B equals P of A plus P of B. That is equal to 1/6 + 1/6. That is equal to 2/6 or 1/3, and that is equal to 0.33, or approximately 33%. We could write the formula for sum rule in the case when we have a mutually exclusive events A and B as probability of A union B equals P of A plus P of B
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule?u=76281980&t=94)** where the symbol cup stands for union. In case you're unfamiliar with sets and their operations, you can look up my course, [Programming Foundations](../../Skills/Software%20Development/Programming%20Foundations.md): Numerical Mathematics and Calculations, and find out more. We'll find out more about the sum rule after we learn the product rule.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (9), [Programming Foundations](../../Skills/Software%20Development/Programming%20Foundations.md) (1)
> **CLI Commands:** find (3)
> **Versions:** 0.33 (1)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [The product rule](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=0)** - [Instructor] Whenever we have two or more independent events occurring together, that's when the product rule takes its place. It says that we can "calculate the [Probability](../../Skills/Data%20Science/Probability.md) of two or more independent events happening together by multiplying the individual probabilities of the events." It can be written as the following formula. Let A and B be events. Then P of A and B equals P of A cap B equals P of A multiplied by P of B. In this formula, the simple cap represents intersection. In our basic example, when we roll a die two times, we would like to find out what is the probability of getting the number 3 two times. Our event A is equal to getting the number 3 the first time and one B is equal to getting the number 3 the second time. And both are equal to 1/6. So P of A cap B equals 1/6 multiplied by 1/6. That is equal to 1 divided by 36, and that is equal to 0.028 or approximately 2.8%. Let's see, one more example. According to the 2021 employment [Statistics](../../Skills/Data%20Science/Statistics.md) by the U.S. Bureau of Labor Statistics, only 0.7% of people are working as software developers. And according to the survey, 30% of people own a cat. What we would like to know is what is the probability
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-product-rule?u=76281980&t=94)** of a randomly selected person being a software developer and owning a cat? We have to calculate a fraction of people who know to code and this event has no impact on the other event, being a cat owner. So let's use the product rule. Probability of being developer and cat owner equals P of developer multiplied by P of cat owner. That is equal to 0.007 multiplied by 0.30 and that equals to 0.0021 or 0.21%, meaning approximately 21 out of 10,000 people in the U.S. knows to code and own a cat. The important thing to remember is that we can use the product rule for multiple events that take place at the same time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (4), [Statistics](../../Skills/Data%20Science/Statistics.md) (2)
> **CLI Commands:** cat (6), find (1)
> **Versions:** 0.028 (1), 2.8 (1), 0.7 (1), 0.007 (1), 0.30 (1)
> **Speakers:** - [instructor] (1)

#### [The sum rule extended](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=0)** - [Instructor] I mentioned we'd return to the sum rule, and here we are. We have seen how to calculate the sum rule when the events are mutually exclusive and it's simple and straightforward. We just have to multiply the probabilities. But what happens in cases when events aren't mutually exclusive? For example, we have a group of students. 40% of them are learning to code in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and 30% of them are learning to code in [Java](../../Skills/Software%20Development/Java.md), and 12% of the students are learning both Python and Java. We want to know what is the [Probability](../../Skills/Data%20Science/Probability.md) that a randomly selected student is learning Python or Java? In our case, the sum rule can be represented with the following formula, P of A union B equals P of A plus P of B minus P of A intersection B. Now, as we have events A, learning Python and B, learning Java that are not mutually exclusive since the events can happen at the same time, meaning a student can be taking both a Python class and a Java class, so the probability that a randomly selected student is learning Python or Java can be calculated as P of A union B equals 0.4 plus 0.3 minus 0.12. That is equal to 0.58, meaning there is almost 60% chance that a student is learning to code in Python or Java.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=95)** Let's see one more example. At the basketball match, 60% of fans are cheering for the home team and 35% of the fans are wearing white and 14% of the fans are cheering for the home team and are wearing white. What is the probability that the randomly selected fan is cheering for a home team or wearing white? P of a union B equals P of A plus P of B minus P of a intersection B, and when we plug in the values, we get 0.6 plus 0.35 minus 0.14 equals 0.81 or 81%.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-sum-rule-extended?u=76281980&t=138)** Now that we know the sum rule, let's head on to conditional probability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (7), [Java](../../Skills/Software%20Development/Java.md) (7), [Probability](../../Skills/Data%20Science/Probability.md) (4)
> **Versions:** 0.4 (1), 0.3 (1), 0.12 (1), 0.58 (1), 0.6 (1)
> **CLI Commands:** python (7)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Conditional probability](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=0)** - [Instructor] A type of [Probability](../../Skills/Data%20Science/Probability.md) that occurs very often is a conditional probability, but in many cases people find it hard to understand. It is the probability of event A occurring given event B has occurred and can be represented as P of A given B. Let's imagine a study that claims that 75% of people sick of some disease drink soft drinks. At first, it sounds like you should abandon drinking soft drinks if you don't want to get sick with the disease. But in fact, only 0.3% of the population actually gets the disease. So are soft drinks the problem, if we know that 60% of people drink soft drinks every day? As we can see, the probability of having the disease given you drink soft drinks is different from the probability of drinking soft drinks given you have the disease. So the direction of condition is important. So a couple of people drinking soft drinks have the disease, but many people that have the disease drink soft drinks. Our formula for the conditional probability of the event A given that event B is true, can be written as P of A given B equals P of A intersection B divided by P of B if P of B is greater than zero. The cool thing about probability is that we can represent it with Venn diagrams.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=94)** So our formula for finding a conditional probability P of A given B, can be represented as dividing the probability of the intersection of events A and B by the probability of event B as we can see in this picture. Let's see how to calculate conditional probability on a real world scenario. According to the research, about 3% of adults have never been employed and have used [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). If 35% of adults have never been employed, what is the probability that an adult has used LinkedIn given that they have never been employed? Let A denote the event that an adult has used LinkedIn and B denote the event that they have never been employed. Then P of B equals 0.35 and P of A intersection B equals 0.03. The probability that an adult has used LinkedIn given that they have never been employed is P of A given B, that is equal to P of A intersection B divided by P of B. And when we plug in the numbers we get 0.03 divided by 0.35. That is equal to 0.0857 or approximately 8.6%.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-foundations-probability/conditional-probability?u=76281980&t=179)** With this probability rules in hand we can calculate the probability for a wide range of problems, but before moving on to more complex scenarios we'll still need to learn total probability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (16), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (4)
> **Versions:** 0.35 (2), 0.03 (2), 0.3 (1), 0.0857 (1), 8.6 (1)
> **Analogies:** imagine (1), picture (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Total probability](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=0)** - [Instructor] Let's explore the following example, Jack has three bags with 10 sweets in each bag. The first bag has three chocolate and seven [Vanilla](../../Skills/Web%20Development/Vanilla.md) sweets. The second bag has four chocolate and six vanilla sweets. And the third bag consists of five chocolate and five vanilla sweets. A sweet is randomly chosen from one of the bags. What is the [Probability](../../Skills/Data%20Science/Probability.md) that it is a vanilla sweet? When our sample space can be separated into disjoint regions B1, B2, B3, et cetera, so that the totality of the sample space is covered by the region's Bi's that don't overlap, we can use this formula to calculate the total probability of the event i over the partitions. P of A equals sum P of A given Bi multiplied by P of Bi. In this formula, P of A given Bi represents the probability of A given partition Bi. And P of Bi represents the probability of the partition Bi. Let's see it in an example. We had three companies, [Google](../../Glossary/Service/Google.md), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), and [Facebook](../../Glossary/Service/Facebook.md) and the number of software developers working at each is 8,000, 10,000 and 6,000 respectively. Additionally, the percentages of software developers that are coding in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) in these companies are 14%, 21%, and 12% respectively. We want to know the probability
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=95)** that a randomly selected person from among the companies knows the Python programming language. The company's number of developers affects things as the probability of knowing to code in Python varies by company, and the company varies in numbers of developers. To find the probability of a developer knows Python we are going to use the formula for the total probability. P of knows Python equals P of knows Python given Google multiplied by P of Google plus P of knows Python given Microsoft multiplied by P of Microsoft plus P of knows Python given Facebook multiplied by P of Facebook. So conditional probability, P of knows Python given Google, represents the probability of knowing to code in Python if you work Google, and P of Google is the probability of working in Google. How we will find the probability of a software developer working at Google?
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=163)** That's right. We will find the probability of working in Google from the number of software developers in Google and the total number of developers working in these three companies. So for Google, we have P of Google equals 8,000 divided by 24,000. That is equal to 1/3 or 0.33. For Microsoft, we have P of Microsoft is equal to 10,000 divided by 24,000. That is equal to 5/12, and it's equal to 0.42. And for Facebook, we have P of Facebook is equal to 6,000 divided by 24,000. That is equal to 1/4 or 0.25. So finally, we can plug in our probabilities in the formula to calculate. P of knows Python equals 0.14 multiplied by 0.33 plus 0.21 multiplied by 0.42 plus 0.12 multiplied by 0.25,
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-foundations-probability/total-probability?u=76281980&t=231)** and it's equal to 0.16, which means there is 16% probability that a randomly selected software developer of these three companies will know to code in Python. You have probably noticed that the sum of the probabilities, P of Google plus P of Microsoft plus P of Facebook equals one. This is not a coincidence, but a rule for the partitions of the total sample space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (14), [Google](../../Glossary/Service/Google.md) (13), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (12), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (6), [Facebook](../../Glossary/Service/Facebook.md) (6)
> **CLI Commands:** python (12), find (3)
> **Versions:** 0.33 (2), 0.42 (2), 0.25 (2), 0.14 (1), 0.21 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. The Joint and Marginal Probability

[↑ Back to Table of Contents](#table-of-contents)

#### [Joint and marginal probability](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=0)** - [Instructor] We have seen that sometimes two events occur simultaneously. For example, a person has five different shirts and four different pants in their wardrobe. Of those clothing items, there is exactly one white shirt and exactly one pair of blue pants. What is the [Probability](../../Skills/Data%20Science/Probability.md) that a person will wear a white shirt and blue pants? There is 1/5 probability that a person will randomly choose a white shirt and 1/4 probability that a person will randomly choose blue pants. These are independent events because the selection of the shirt does not affect the selection of the pants. So the probability of picking up a white shirt and blue pants is equal to the P of A and B equals P of A intersection B equals P of A multiplied by P of B that is equal to 1/5 multiplied by 1/4 that is equal to one divided by 20, or 0.05 or 5%. As you can recall from the previous lesson, we are using a product rule to calculate this probability. This type of probability of two variables P of X equals small x, Y equals small y, in which at the same time a random variable X has the value small x and the random variable Y has the value small y is called the joint probability. What it means is that two or more conditions are true at the same time.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-and-marginal-probability?u=76281980&t=95)** The marginal probability is the probability of occurrence of a single event, meaning we calculate the probability of one of those events without caring about the values of the others. For example, we calculate the probability of wearing a white shirt, which is P of A equals 1/5, or 0.2, or the probability of wearing blue pants, so P of B equals 1/4, or 0.25. Now that we have covered what joint and marginal probabilities are, let's explore joint probability tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (13)
> **Versions:** 0.05 (1), 0.2 (1), 0.25 (1)
> **Analogies:** for example (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Joint probability tables](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=0)** - [Instructor] Let's consider a company that has 500 employees, of which 200 workers are seniors working full-time. 50 workers are seniors working part-time. 150 workers are juniors working full-time, and 100 workers are juniors working part-time. If an employee is selected at random, what is the [Probability](../../Skills/Data%20Science/Probability.md) that the person is a full-time employee? Before calculating the probability, we can arrange the data in the table. The tail data is in the center of two by two numerical portion of the table. In the columns we have employees divided by employment type, full-time and part-time. In the rows we have employees grouped by seniority, seniors and juniors. The final row is the sum of the columns, and the final column is the sum across the rows. The sum of the final row or column is in the last cell, which sums up to 500 employees. This type of table is called a contingency table. Now, we can easily transform the contingency table into the table of probabilities by dividing each cell by the total number of possible cases. In our case, the total number of employees, 500. When we do this, we get the following table which we call a joint probability table. From this table, we can look up the probability of being a senior working full-time,
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=95)** and write it down as P(senior,full)=0.40, and similarly the probability of being a junior working part-time and write it as P(junior,part-time)=0.16. Using this joint probability table, we can easily calculate the probability the person is a full-time employee. We just have to sum up the probabilities along the full-time column, and we get P(full-time)=0.76. Similarly, we can calculate the probability of employee being junior by summing along the second row, and we get P(junior)=0.52. When we calculated the probability of being a full-time employee or junior, we calculated marginal probabilities. So as you can see, we have calculated the marginal probability for random variable by summing over all possible values of the other random variables. A good thing to know is we can use joint probability tables to predict what we would expect to measure given a random sample of people. For example, if you have a sample of 10,000 people, then based on our table we'd expect to find around 10,000 multiplied by 0.40, 4,000 full-time senior employees, and about 10,000 multiplied by 0.16,
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-foundations-probability/joint-probability-tables?u=76281980&t=190)** 1,600 part-time juniors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (11)
> **Versions:** 0.40 (2), 0.16 (2), 0.76 (1), 0.52 (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [The chain rule for probability](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=0)** - [Instructor] In machine learning we usually have to calculate the joint [Probability](../../Skills/Data%20Science/Probability.md) of multiple random variables. This is where the chain rule for probability comes into play. We can write the chain rule for the probability of n random variables by using the following formula. In this formula, the intersection symbol cap is used to represent joint probability. Maybe this formula frightens you, but don't worry, you'll quickly discover it's simple to follow along. For example, if you have three random variables, X, Y and Z, we can write this formula as P of X, Y and Z equals P of X given Y, Z multiplied by P of Y, Z that is equal to P of X given Y, Z multiplied by P of Y given Z multiplied by P of Z. This formula represents the probability of X, Y and Z, which is the product of the probability of X given Y and Z and the probability of Y and Z. As you can see, the chain rule breaks down a joint probability into the product of smaller joint probabilities and conditional probabilities. Now let's explore a simple example where we can apply the chain rule. We have a company of 100 people, 16 of them have been working on the ML project. We picked three people at random. What is the probability that none of them
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=95)** have been working on the ML project? We'll use Ai to indicate the event of a person who has not been working on the ML project. Let's write down the formula for the chain rule. P of A3, A2, A1 equals P of A3 given A2, A1 multiplied by P of A2 given A1 multiplied by the P of A1. Let's start with a P of A1, which is the probability of picking a random person who has not been working on an ML project. 16 of the people have, so 84 have not, and we can see that P of A1 equals 84 divided by 100. Once we have a person picked, we need to know the probability of selecting a second person from the remaining 99. That is P of A2 given A1, and it's equal to 83 divided by 99. There are 99 people left, so we have selected one of the 16 who has been working on ML project. Finally, we have two people selected, so there are 98 people in the room, 82 of who have not been working on ML project, so we have P of A3 given A2, A1. That is equal to 82 divided by 98. Now we can plug in calculated probabilities in the formula for the chain rule, and we get P of A3, A2, A1 that is equal to 84 divided by 100,
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-chain-rule-for-probability?u=76281980&t=191)** multiplied by 83 divided by 99, multiplied by 82 divided by 98. That is equal to 0.5893. So we have almost 59% probability of selecting three people, with none of them be working on ML project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (12)
> **Versions:** 0.5893 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Discrete Probability Distributions

[↑ Back to Table of Contents](#table-of-contents)

#### [Probability distributions](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=0)** - [Instructor] The easiest way to visualize a [Probability](../../Skills/Data%20Science/Probability.md) distribution is to think about it as a relationship that takes random variables and their outcome values and gives the probability of each of these values occurring. For example, if you flip a coin multiple times, we expect that getting heads or tails are equally likely and equal to 1/2. Similarly, if we roll a die 1,000 or 10,000 times, we expect that each number from one to six is equally likely to appear. Random variables can be divided into discrete and continuous. In the case a random variable X is either finite or countably infinite, we call it a discrete random variable, and each distribution is called a discrete probability distribution. It can be represented as a list of all possible outcomes of a random variable X and their probabilities. Let's see a few more examples of a discrete random variable. The number of emergency calls received by a fire department, the number of planes arriving and departing every hour from the New York City International Airport. In the case when a random variable takes any value between a given range, we call it a continuous random variable. When we take any finite or infinite interval of the real line or any union of such intervals is uncountable, so a random variable with values
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/probability-distributions?u=76281980&t=94)** in that set is continuous. A few examples of continuous random variables are the waiting time of customers at a drive-in restaurant, the length of time to assemble a device, or fuel consumption in kilometers per liter of a new model of a car. There are three main ways to describe a probability distribution. By listing each variable of X, the outcome, and the corresponding probability of X in a table form. By using a graph, in the case of discrete probability distribution, a histogram, that shows the outcomes of experiment X on the X axis and the corresponding probabilities of the outcomes on the Y axis. And by using a function or a formula that assigns a probability to each outcome X. Probability distributions are extremely important as they are used when initializing the neural network before training. Initial weights, and sometimes biases, are selected using different probability distributions that we will discover in the next lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (9)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Histograms and probability](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=0)** - [Instructor] Charts or graphs are probably the most useful way to represent the patterns in the data, especially when we have an enormous amount of data. One type of graph that will help us illustrate the frequency distribution in a graphical form is called a histogram. It groups the data in bins, which is the fastest way to discover the distribution of each attribute in the dataset. An example of a bin in a histogram of employees' work experience by years would be a bin which represents the number of employees working less than six years. Here are some of the characteristics of the histogram. It provides us a count of the numbers of observations in each bin created for visualization. We can easily observe the distribution from the shape of the bins. It helps us to see the presence of outliers in the dataset. Let's see it in action in a simple example. You might wonder why wouldn't we use a bar graph instead of histogram? So let's say, for example, that we want to create a bar graph of employees' work experience in some company, and let's say there are roughly between 5,000 to 10,000 employees there. If we want to see all of their numbers of work experience in a bar graph, we would have to graph separately all of the employees who have less than one year experience, then all of the one year experience employees, all of the two year experience, all of the three year experience, et cetera,
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=94)** all the way up to the employee who has maybe somewhere between 45 and 50 years of experience. So we would have more than 40 bars in our bar graph and it would be a little overwhelming. So instead, we will use a histogram. What we will do differently is group together all the employees who have between zero and five years of experience, then ones that have between six and 10 years of experience. And so up to the employees who have between 46 and 50 years of experience. The important thing to remember is that these buckets, or your categories, have to be the same size, so we have to have the same age span. For example, my first bucket can't be zero to three years of experience, and then the second one, four to 10 years of experience. They have to be the same size, so every interval is five years. Now when we draw a histogram, which I have already prepared using matplotlib, you can easily see that most employees of this company have between zero and five years of experience, and the smallest bucket is the one with employees who have between 36 and 40 years of experience. One more thing to remember is that the spread of the data between the smallest bucket and the largest bucket is called the distribution of the histogram. It shows us how our data is distributed across all of these buckets that we have created. If we divide histogram values
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-foundations-probability/histograms-and-probability?u=76281980&t=189)** by the sum of the counts, we can use the histogram to estimate [Probability](../../Skills/Data%20Science/Probability.md) distributions from samples. It also helps us to determine the likelihood of particular values appearing when sampling from the process generated by the data used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (1)
> **Definitions:** is called (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Discrete probability distribution](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=0)** - [Instructor] Understanding and knowing when and how to apply [Probability](../../Skills/Data%20Science/Probability.md) distribution is critical in data analysis, decision making and modeling. Discrete probability distributions play a crucial role in applied ML and there are a few distributions that you must know about. Some examples of discrete probability distribution applications are modeling binary classification problems. For example, spam or not spam or fraud, or not fraud, and multi-class classification problems. For example, handwritten digit recognition from zero to nine. Evaluating the performance for the binary classification models and for choosing the activation function used in the output layer of the [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md). While exploring the basic examples of probability, we have seen one of the most common discrete distributions called uniform distribution. The examples were flipping a coin and rolling a dye. In case when we have a uniform distribution, all possible outcomes are equally likely. If we draw a histogram, all outcomes would be represented with the same frequency. We can use a function that assigns a probability to each value of the random variable X and we'll call it a probability mass function or PMF. For a discrete random variable X, PMF assigns a list of all possible values of X and its associated probabilities.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-probability/discrete-probability-distribution?u=76281980&t=97)** PMF is also referred to as the probability distribution of a discrete random variable and it satisfies two conditions. For each X, P of X is between zero and one and sum of P of X equals 1.0. Here are some examples of the most useful discrete probability distributions, binomial distribution, Bernoulli distribution, Poisson distribution, and multinomial distribution. Let's discover the first of them called a binomial distribution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (8), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Env Vars:** pmf (3)
> **Analogies:** for example (2)
> **Versions:** 1.0 (1)
> **Speakers:** - [instructor] (1)

#### [The binomial distribution](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=0)** - [Instructor] Imagine we are working on an engine for a new electric car and we run 10 tests. The outcomes of these tests are two failures and eight successes. Management expected at least 90% success rate, and are disappointed, and expect the whole team to re-engineer the design and get back with a new model. But our team is confident we should run more tests and that their underlining [Probability](../../Skills/Data%20Science/Probability.md) is 95%. The type of discrete distribution we can apply here is called a binomial distribution. It represents the expected number of events happening in a given number of trials, if each event has a specified probability. We can apply it by using a simple formula, where P represents the probability of k events happening n trials. P of X equals k, equals n choose k, multiplied by P to the power of k, multiplied by one minus P to the power of n minus k. n choose k equals n factorial divided by k factorial, multiplied by n minus k factorial. n choose k is called the binomial coefficient, which is the number of ways to choose k items from n. Let's see it in action on a simple example. We want to calculate the probability of getting four tails in a row when flipping a coin four times. Previously, we have calculated the probability
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=94)** by applying the product rule. P equals one half multiplied by one half, multiplied by one half, and multiplied by one half. That is equal to one divided by 16 or 0.0625. If we use the binomial distribution formula, we get the same result after plugging in n equals four, k equals four, and P equals 0.5 and simplify it. We get the same result 0.0625. Now, by looking at this basic example it doesn't seem particularly useful but if we get back to our introductory example, we can see how it's helpful. In our case, we have 10 tests, so obviously n equals 10 and eight successes, so k equals eight, and we expect the probability is P equals 95% or 0.95. Let's plug our numbers into the formula. P of X equals eight, equals 10 choose eight multiplied by 0.95 to the power of eight, multiplied by one minus 0.95 to the power of 10 minus eight, and finally we get 0.075. So the probability we would get eight successes out of 10 trials is 0.075 or 7.5%. As we have seen, we have n as the number of trials, P as a probability of success for each trial,
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-binomial-distribution?u=76281980&t=187)** and k is the number of successes we want to look up the probability for. We have just calculated the probability of getting eight successes out of 10 tests and it seems small, but if we would add up the probabilities of eight or more successes, the probability would be much higher. What about the probability of having nine successes and only one failure, and the probability of having 10 successes and zero failures? The first one would be P of X equals nine, equals 10 choose nine, multiplied by 0.95 to the power of nine, multiplied by one minus 0.95 to the power of 10 minus nine, and we get 0.315 and P of x equals 10. Similarly, we get 0.598, so we can get the probability of getting nine or more successes by adding these two probabilities and we get 0.913 or 91.3% so we can get the probability of getting nine or more successes by adding these two probabilities so we get 0.315 plus 0.598, that is equal to 0.913 or 91.3% so the probability of getting nine or more successes is around 91.3%, which is extremely high.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (16)
> **Versions:** 0.95 (5), 91.3 (3), 0.0625 (2), 0.075 (2), 0.315 (2)
> **Definitions:** is called (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [The Bernoulli distribution](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=0)** - [Instructor] When we take a binomial distribution and have only one trial, meaning n equals 1, we call this type of distribution the Bernoulli distribution. Basic examples are flipping a coin one time so there's only one trial and all real life scenarios similar to that. For example, when crossing a street, we can either have a green light, meaning we can pass, or red light, meaning we have to wait. The result of a unit test, pass or failure, the future outcome, profitable or non-profitable of a financial advancement. When whenever we have a situation where the outcome of a trial is with its success or failure, then the behavior of the random variable acts can be represented by the Bernoulli distribution. Such trials or experiments are called Bernoulli trials. So, if a variable has a Bernoulli distribution it can only take values 0 and 1, and we defined a [Probability](../../Skills/Data%20Science/Probability.md) function as P of X equals X is equal to P, if X equals 1, and 1 minus P if X equals 0. Another way to write down the probability function for Bernoulli distribution is in the following form. P of X equals P to the power of X multiplied by Q to the power of 1 minus X, where Q equals 1 minus P. Let's see a simple example.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-bernoulli-distribution?u=76281980&t=96)** We have a deck of 52 standard cards. The success is the event that the queen is drawn, so X equals 1 if it occurs, and X equals 0 otherwise. Find a probability function. Obviously, we have a Bernoulli distribution. The parameter is the probability of picking a queen when selecting a card, and it is equal to P of X equals 1 equals 4 divided by 52, or 1 divided by 13, as we have four queens out of 52 cards. So the probability function is equal to P of X equals 1, divided by 13 to the power of X, multiplied by 1 minus 130 to the power of 1 minus X. Great, now we'll head on to the one more discrete probability distribution called the Poisson distribution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (6)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** find (1)
> **Definitions:** we call this (1)
> **Speakers:** - [instructor] (1)

#### [The Poisson distribution](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=0)** - Sometimes we want to apply the distribution to model occurrences over a event in a continuous time. For example, the number of emails a person receives during 24 hours, the number of births in the population in a year, the number of persons in the population who will live at least 80 years, or the number of e-scooters passing through a street during an hour. In these cases, using binomial and Bernoulli distribution seems possible, but it isn't convenient. So in cases when the number of trials, n, is very large, and the success [Probability](../../Skills/Data%20Science/Probability.md), p, is very small, we can define the product, lambda, as lambda equals n multiplied by p, which is the expected number of successes after n trials, or the average number of events that happened over some time. Then we can calculate the probability of x events happening in that interval as P of x equals e to the power of minus lambda, multiplied by lambda to the power of x divided by x factorial. If you wonder what this new variable, e, is, don't worry. e is the constant called the Euler's number, and it's approximately equal to 2.718. Let's see our formula in action in a simple example. 5% of [products](../../Skills/Software%20Development/Microsoft%20Products.md) manufactured by a company are defective. Find the probability that in a sample of 100 units,
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-poisson-distribution?u=76281980&t=96)** less than four products are defective. The probability of a defective units p equals 0.05 and n equals 100. We can see that p is small and n is large here, so this is a Poisson distribution. We can calculate lambda by multiplying n and p, and we get lambda equals n multiplied by p. That is equal to 100 multiplied by 0.05, and that is equal to five. P of x equals x is given by the formula, P of x less than four equals probability of x equals zero, plus the probability of x equals one, plus the probability of x equals two, and plus the probability of x equals three. And when we plug all these into Poisson formula, we get P of x is less than four equals 0.265, or approximately 26.5%.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (8), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2)
> **Versions:** 0.05 (2), 2.718 (1), 0.265 (1), 26.5 (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - sometimes (1)


### 5. Continuous Probability Distributions

[↑ Back to Table of Contents](#table-of-contents)

#### [The continuous probability distribution](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=0)** - [Presenter] We have discovered the probabilities of uncertain discreet quantities, however, many real-life events are continuous. For example, we could measure the time taken to finish the ticket at a [Software Development](../../Topics/Software%20Development.md) project and obviously, there are infinite number of possible ways to complete a task so the measurement is continuous. Or the square footage of a randomly selected three-bedroom apartment. In ML, continuous [Probability](../../Skills/Data%20Science/Probability.md) distributions are of fundamental importance: starting in the models themselves, when estimating the mapping between the inputs and outputs, the distribution of input variables to the models, and the distribution of errors made by models. Let's dive into the key properties of continuous probability distributions. Unlike discrete probability distribution where we assign the probability to specific integer value, in continuous distribution, the probability of selecting a particular value is zero. The reason is that there are infinite number of possible values from a continuous distribution so it means no particular value can be selected. Therefore, we'll calculate the probability of selecting values in a specific range of values. We'll define a continuous probability distribution as follows: the continuous probability distribution is the relationship between the events for a continuous random variable and their probabilities.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=95)** It can be summarized by probability density function or PDF. We cannot calculate the probability for a given continuous random variable directly. It is calculated as an integral, area under the curve, for small interval around the specific outcome. There are three important concepts you should remember. The probability density function or PDF returns the probability of a given continuous outcome. The cumulative distribution function or CDF returns the probability of a value less than or equal to a given outcome. And the inverse function or CDF called the percent-point function or PPF, which returns a discreet value that is less than or equal to a given probability. Let's see the most useful continuous probability functions. The normal distribution or Gaussian distribution named after the famous mathematician, Karl Friedrich Gauss, or the bell curve distribution. This distribution covers the probability or real value events from many real-life problem domains. Here are some example of domains: IQ of a particular population, the heights and weights of people, and student average scores. Exponential distribution. The exponential distribution is a continuous probability distribution where a few outcomes are the most likely with a rapid decrease in probability to all other outcomes.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-continuous-probability-distribution?u=76281980&t=192)** Here are some examples of domains: the time until the default of a loan, the number of minutes between customers who went through shop, and the time between earthquakes. Pareto distribution. You have probably heard of the Pareto principle or the 80/20 rule. In the Pareto distribution, 80% of the events are covered by 20% of the range of outcomes. Meaning, most events are drawn from just 20% of range of the continuous variable. A few examples of domains are the total sales of a course, the income of households in a country, and the company profits from [products](../../Skills/Software%20Development/Microsoft%20Products.md) or services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (18), [Software Development](../../Topics/Software%20Development.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** pdf (2), cdf (2), ppf (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### [Central limit theorem](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=0)** - [Instructor] Central limit theorem plays an important role in ML. For example, in education, we could use it to estimate student performance on standardized tests by taking a random samples of students and testing them. By applying the central limit theorem, teachers could improve curriculum and instruction. Another example would be quality control in manufacturing to make sure that the production line output satisfies quality standards. The manufacturing manager may randomly select 100 [products](../../Skills/Software%20Development/Microsoft%20Products.md) each day and check how many are defective. Or in finance, it can be used to estimate the distribution of investment returns. Investors can make random samples of historical returns, and by using the central limit theorem, make investment decisions. The theorem tells us that: As the size of the sample increases, the distribution of the mean across multiple samples will approximate a Gaussian distribution. Wait, what? Don't worry, let's start with a simple example. Imagine we have a population of laptops in an [Electronics](../../Skills/Software%20Development/Electronics.md) shop. We would like to analyze the laptop prices and be able to make predictions based on them. For example, we have 10,000 laptop prices and we draw a sample of the data from 100 laptop prices and calculate the mean. We can calculate the mean by adding up all the prices then dividing by how many laptops there are.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=94)** Let's say that the mean for this first sample equals $1,523.47. Next, if I take a second sample of data, I'll get a completely different mean, for example, $2,144.12. If we take a third sample of data, we'll get the mean that is equal to $1,879.46. So the sample mean relies of the sample data itself. If we repeat this process many times, we'll get a sample of mean values, in our case, that means each from a set of samples of unknown distribution. Now we can create a new dataset that is comprised of the sample means that are distributed so we have a sampling distribution of the mean. Let's look at these values. We can see that there are concentrating around a certain value, in our case, around $1,900. If we take the average of sample means, we expect to get an excellent approximation of the mean. If we visualize a distribution of the laptop prizes with a plot, we get a simple curve that might look something like this. If we draw a plot of distribution of the sampling means, we get a very familiar distribution. Can you recognize the distribution?
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-foundations-probability/central-limit-theorem?u=76281980&t=183)** That's right, it's the normal or Gaussian distribution. So, that's what's the central limit theorem all about. We can have any distribution of the population and if we find the sampling distribution of the mean, it'll approximate a normal distribution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Electronics](../../Skills/Software%20Development/Electronics.md) (1)
> **CLI Commands:** make (4), find (1)
> **Analogies:** for example (3), imagine (1)
> **Versions:** 523.47 (1), 144.12 (1), 879.46 (1)
> **Speakers:** - [instructor] (1)

#### [The law of large numbers](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-law-of-large-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/the-law-of-large-numbers?u=76281980&t=0)** - [Instructor] We know that the coin should land tails 50% of the time and heads 50% of the time. But if we run an experiment and toss it three times in a row, there is a 12.5% possibility that we'll get tails three times in a row. The law of the large numbers tells us that the more experiments we run, the closer we will get to the expected [Probability](../../Skills/Data%20Science/Probability.md). This law is related to the central limit theorem in the way as we increase the size of the sample from a distribution, the mean of the sample will move closer and closer to the mean of the population. Now, let's open Jupyter Notebook name 05 03 and execute the code I have already prepared. We have imported numpy, as we are going to use its functions linspace and random.normal for normal distribution. We have imported Matplotlib to draw the plot. Our first sample is 10, and the last sample is 10 to the power of eight, or 100,000,000. So our law says that as the number of samples from the distribution increases, the mean of the samples approaches the population mean, which can be represented in the following graph where the x-axis represents the number of sample, and the why-axis represents the single sample mean. As you can see, when we increase sample size over 10 to the power of four, our mean is approximately equal to the population mean. In our case, it's one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (1)
> **Versions:** 12.5 (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. The Bayes' Theorem

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Bayes' theorem](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=0)** - [Instructor] Imagine this scenario in your company. The [Probability](../../Skills/Data%20Science/Probability.md) that a person is working longer than five years is 45%, and the probability that a person is using [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) is 15%. Given that 8% of those that use ChatGPT also work longer than five years, what percent of those that work longer than five years also use ChatGPT? Now at first, this may seem to you like play with words, but let's take it step by step. We can recognize two events. Event A, person working more than five years. And event B, person using ChatGPT. Let's see what we know. P of A equals 0.45. P of B equals 0.15. And P of B with A equals 0.08. And we would like to calculate P of A with B. If you recall conditional probability, it is the probability of one event given the occurrence of one or more other events. For example, the probability of event A happening given the occurrence of event B happening, P of A with B. We can write it down as P of A with B equals P of A intersection B divided by P of B. Now we don't know the probability P of A intersection B, so by using a conditional probability formula, we cannot calculate P of A with B. We also know that conditional probability
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=95)** is not symmetrical, so P of A with B doesn't equal P of B with A. Now don't panic. We'll use the conditional probability formula for P of B with A. We get P of B with A equals P of A intersection B divided by P of A. Can you spot what these two formulas have in common?
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=125)** That's right. They both have P of A intersection B. The cool thing in maths is that we love to play around and combine formulas into a new formula. Let's try this out on our two conditional probability formulas. If we transform the first formula by multiplying both sides of the equation with P of A, we get P of A intersection B equals P of B with A, multiplied by P of A. Similarly, when we transform the second formula by multiplying both sides of the equation with P of B, we get P of A intersection B equals P of A with B, multiplied by P of B. As you can see, we have two equations with P of A intersection B, and we can conclude that if the left sides of the equations are equal, then also the right sides of the equation have to be equal. So P of A with B multiplied by P of B equals P of B with A multiplied by P of A. Now finally, to get P of A with B, we have to divide both sides of our equations with P of B, and we get this formula, P of A with B equals P of B with A multiplied by P of A divided by P of B. Now this neat formula is called Bayes's theorem. It provides us with a principled way of calculating a conditional probability and an alternative to using the joint probability. Lastly, let's apply to our example.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-foundations-probability/introduction-to-bayes-theorem?u=76281980&t=221)** In our case, we want to calculate P of A with B. And when we plug in our known probabilities, we get P of A with B equals 0.08 multiplied by 0.45 divided by zero point 15. That is equal to 0.24, or 24%. So 24% of those employees who work longer than five years also use Chat GPT. Now that we are familiar with Bayes' theorem, let's continue to discover a useful example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (12), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (4)
> **Versions:** 0.45 (2), 0.08 (2), 0.15 (1), 0.24 (1)
> **Analogies:** imagine (1), for example (1)
> **Env Vars:** gpt (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Example of Bayes' theorem in practice](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=0)** - [Instructor] Let's look at the example of Bayes's theorem in practice. A factory has three reproduction lines associated with the production of a smartphone. The smartphones produced in these three lines are 45% for the first, 35% for the second, and 20% for the third. Additionally, we know that 0.9% of the smartphones produced in the first line are defective, 0.8% of smartphones in the second line are defective, and in the third line, 1.2% of smartphones are defective. A sample of the smartphones produced is then examined and suppose it is found to be defective, find the [Probability](../../Skills/Data%20Science/Probability.md) that it was produced in the first line, in the second line, and in the third line. Before having gone to calculate our probabilities, let's see Bayes's formula. In the case, we have partition of a sample space, B1, B2, until Bn, such as the P of Bi is greater than zero for all i equals one until n. Then for the event A of the sample space such as that P of A is greater than zero, Bayes's formula can be written as follows: P of Bi with A equals P of A with Bi P of Bi with A equals P of A with Bi multiplied by P of Bi divided by P of A with B1 multiplied by P of B1 plus P of A with Bn multiplied by P of Bn. This formula may seem overwhelming, but don't worry.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=97)** You'll see it simple to use. Now, let's see what we have. We can define event A as smartphone is defective, and Bi, the smartphone is produced in the ith line, i equals 1, 2, 3. Next, we can calculate the probability that the smartphone is produced in the first line as P of B1 with A. And when we plug in the probabilities, we get P of B1 with A equals 0.45 multiplied by 0.009 equals 0.45 multiplied by 0.009 divided by 0.45 multiplied by 0.009 plus 0.35 multiplied by 0.008 plus 0.20 multiplied by 0.012, and we get 0.438 or 43.8%. and we get 0.438 or 43.8%. Let's calculate the probability that the smartphone is produced in the second line as P of B2 with A. And when we plug in the numbers, we get 0.302 or 30.2%. we get 0.302 or 30.2%. Lastly, we want to calculate the probability that the smartphone is produced in the third line as P of B3 with A. And when we plug in the probabilities, we get 0.26 or 26%. One thing you may notice is that if you add all three probabilities, you get one or 100%,
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-foundations-probability/example-of-bayes-theorem-in-practice?u=76281980&t=193)** so we could get the third probability by subtracting the first two from one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (5)
> **Versions:** 0.45 (3), 0.009 (3), 0.438 (2), 43.8 (2), 0.302 (2)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Naive Bayes' clasifier](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=0)** - [Teacher] Bayes's theorem plays an important role in ML. One of the most well-known uses is a classifier, known as a Naive Bayes's classifier. One of its applications was in one of the first email spam filters. Other applications are product recommendation based on purchase history or movie recommendation. Have you ever used video streaming services such as Netflix, Amazon Prime, or YouTube? Did you ever wonder how a streaming service almost always finds content that is most appealing to you? Well, they most probably use a recommendation system that uses Naive Bayes's classifier. Apart from ratings, movies also have features such as the year released, who directed it, and genre, such as comedy, family, action, and so on. Movie streaming service recommends movies based on your watch history and by finding movies with similar features such as genre and ratings. So, for example, we could represent your previously watched movies with a matrix that displays movies based on genre and your ratings. Using Naive Bayes's classifier, movie streaming service will calculate the [Probability](../../Skills/Data%20Science/Probability.md) that you will like a new movie based on the genre and given stars. It'll assume that genre features are independent of each other, so changing the value of one feature does not affect the value of the other feature. This is called a naive assumption.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-foundations-probability/naive-bayes-clasifier?u=76281980&t=93)** And based on this, we can apply the product rule for probability, and as a result, get a product of a single variable conditional probabilities. The way to calculate probability in the case when we have multiple X features or variables is by extending Bayes's theorem formula for conditional probability to a new formula, which we will call the Naive Bayes's formula. In mathematical jargon, we think of this formula as a way to calculate the posterior probability or the probability of the outcome given evidence, and we can say it is equal to probability of likelihood of evidence multiplied by prior probability divided by the probability of evidence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (9)
> **Analogies:** such as (4), for example (1)
> **Definitions:** is a  (1), known as (1), is called (1)
> **Speakers:** - [teacher] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/machine-learning-foundations-probability/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-probability/next-steps?u=76281980&t=0)** - [Instructor] I hope you enjoyed the course and now have a solid foundation of [Probability](../../Skills/Data%20Science/Probability.md) concepts and techniques. You can look for more programming courses coming from me in the future. You can also search our library for machine learning foundation courses to continue your journey. I want to wrap up by saying thank you. You have devoted time to learning this material with me and I want you to know that I don't take that for granted. I really do appreciate your engagement as well as your feedback on this course. If you have any questions, please feel free to get in touch over [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) and on Twitter. If you enjoyed this course, I'd love to know. Thanks so much for watching. Until next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Terezija Semenski](../../Instructors/Artificial%20Intelligence%20(AI)/Terezija%20Semenski.md)

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- Artificial Intelligence (AI)
- Probability

## Path Context

### In [Machine Learning Statistical Foundations Professional Certificate by Wolfram Research](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20Statistical%20Foundations%20Professional%20Certificate%20by%20Wolfram%20Research.md)
← [Machine Learning Foundations- Calculus](Machine%20Learning%20Foundations-%20Calculus.md) | **4 of 6** | [Machine Learning Foundations- Statistics](Machine%20Learning%20Foundations-%20Statistics.md) →

### In [Foundational Math for Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Foundational%20Math%20for%20Machine%20Learning.md)
← [Machine Learning Foundations- Calculus](Machine%20Learning%20Foundations-%20Calculus.md) | **3 of 4** | [Machine Learning Foundations- Statistics](Machine%20Learning%20Foundations-%20Statistics.md) →

## Part of

- [Machine Learning Statistical Foundations Professional Certificate by Wolfram Research](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20Statistical%20Foundations%20Professional%20Certificate%20by%20Wolfram%20Research.md)

## Appears In

- [Machine Learning Statistical Foundations Professional Certificate by Wolfram Research](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20Statistical%20Foundations%20Professional%20Certificate%20by%20Wolfram%20Research.md)
- [Foundational Math for Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Foundational%20Math%20for%20Machine%20Learning.md)

## Related Courses

_Courses sharing skills:_

- [Machine Learning and AI Foundations- Clustering and Association](Machine%20Learning%20and%20AI%20Foundations-%20Clustering%20and%20Association.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI- Advanced Decision Trees with SPSS](Machine%20Learning%20and%20AI-%20Advanced%20Decision%20Trees%20with%20SPSS.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI Foundations- Decision Trees with SPSS](Machine%20Learning%20and%20AI%20Foundations-%20Decision%20Trees%20with%20SPSS.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI Foundations- Classification Modeling](../Data%20Science/Machine%20Learning%20and%20AI%20Foundations-%20Classification%20Modeling.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning & AI Foundations- Linear Regression](Machine%20Learning%20%26%20AI%20Foundations-%20Linear%20Regression.md) — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)