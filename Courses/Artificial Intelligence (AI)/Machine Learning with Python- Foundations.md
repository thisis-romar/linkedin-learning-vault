---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: machine-learning-with-python-foundations
url: "https://www.linkedin.com/learning/machine-learning-with-python-foundations"
duration_minutes: 114
duration: 1h 54m
level: Intermediate
updated: 4/25/2024
learners: 17929
skills:
  - Python (Programming Language)
  - Machine Learning
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEv0QXZlJat7A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1633371437602?e=2147483647&amp;v=beta&amp;t=Ux0MgiDufbCMgW393JLr2OFJWXK08s-q_beryGUuv1Y"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Improve Your Programming Skills with Artificial Intelligence]]'
  - '[[Fundamentals to Become a Machine Learning Engineer]]'
  - '[[Develop with Python for AI and Machine Learning]]'
  - '[[Machine Learning with Python Professional Certificate by Anaconda]]'
prev_courses:
  - '[[Hands On Ai Build Your Own Gpts]]'
  - '[[Artificial Intelligence Foundations- Machine Learning]]'
  - null
  - '[[Artificial Intelligence Foundations- Machine Learning]]'
next_courses:
  - '[[AI Pair Programming with GitHub Copilot]]'
  - '[[Deep Learning Getting Started]]'
  - '[[Machine Learning with Python- Decision Trees]]'
  - '[[Machine Learning with Python- Decision Trees]]'
path_nav: '[{"path":"Improve Your Programming Skills with Artificial Intelligence","position":2,"total":4,"prev":"Hands On Ai Build Your Own Gpts","next":"AI Pair Programming with GitHub Copilot"},{"path":"Fundamentals to Become a Machine Learning Engineer","position":3,"total":7,"prev":"Artificial Intelligence Foundations- Machine Learning","next":"Deep Learning Getting Started"},{"path":"Develop with Python for AI and Machine Learning","position":1,"total":6,"prev":null,"next":"Machine Learning with Python- Decision Trees"},{"path":"Machine Learning with Python Professional Certificate by Anaconda","position":2,"total":6,"prev":"Artificial Intelligence Foundations- Machine Learning","next":"Machine Learning with Python- Decision Trees"}]'
path_count: 4
tags:
  - course
  - topic/artificial-intelligence
  - topic/devops
  - topic/software-development
  - skill/python-programming-language
  - skill/machine-learning
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20with%20Python-%20Foundations.md)

![Machine Learning with Python: Foundations](https://media.licdn.com/dms/image/v2/C4E0DAQEv0QXZlJat7A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1633371437602?e=2147483647&amp;v=beta&amp;t=Ux0MgiDufbCMgW393JLr2OFJWXK08s-q_beryGUuv1Y)

# Machine Learning with Python: Foundations

> You’ve probably heard about machine learning before, but have you ever wondered what that term really means? How does a machine learn? Have you thought about building a machine learning model, but didn’t know where to start? In this course, Frederick Nwanganga introduces machine learning in an approachable way and provides step-by-step guidance on how to get started with machine learning via the m

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-foundations) | 1h 54m | Intermediate | 18K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Machine learning in our world](#machine-learning-in-our-world)
  - [What you should know](#what-you-should-know)
  - [The tools you need](#the-tools-you-need)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Machine Learning**](#1-machine-learning) (6 videos)
  - [What is machine learning?](#what-is-machine-learning)
  - [What is not machine learning?](#what-is-not-machine-learning)
  - [What is unsupervised learning?](#what-is-unsupervised-learning)
  - [What is supervised learning?](#what-is-supervised-learning)
  - [What is reinforcement learning?](#what-is-reinforcement-learning)
  - [What are the steps to machine learning?](#what-are-the-steps-to-machine-learning)
- [**2. Collecting Data for Machine Learning**](#2-collecting-data-for-machine-learning) (2 videos)
  - [Things to consider when collecting data](#things-to-consider-when-collecting-data)
  - [How to import data in Python](#how-to-import-data-in-python)
- [**3. Understanding Data for Machine Learning**](#3-understanding-data-for-machine-learning) (4 videos)
  - [Describe your data](#describe-your-data)
  - [How to summarize data in Python](#how-to-summarize-data-in-python)
  - [Visualize your data](#visualize-your-data)
  - [How to visualize data in Python](#how-to-visualize-data-in-python)
- [**4. Preparing Data for Machine Learning**](#4-preparing-data-for-machine-learning) (7 videos)
  - [Common data quality issues](#common-data-quality-issues)
  - [How to resolve missing data in Python](#how-to-resolve-missing-data-in-python)
  - [Normalizing your data](#normalizing-your-data)
  - [How to normalize data in Python](#how-to-normalize-data-in-python)
  - [Sampling your data](#sampling-your-data)
  - [How to sample data in Python](#how-to-sample-data-in-python)
  - [Reducing the dimensionality of your data](#reducing-the-dimensionality-of-your-data)
- [**5. Types of Machine Learning Models**](#5-types-of-machine-learning-models) (3 videos)
  - [Classification vs. regression problems](#classification-vs-regression-problems)
  - [How to build a machine learning model in Python](#how-to-build-a-machine-learning-model-in-python)
  - [Common machine learning algorithms](#common-machine-learning-algorithms)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with applied machine learning](#next-steps-with-applied-machine-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Machine learning in our world](https://www.linkedin.com/learning/machine-learning-with-python-foundations/machine-learning-in-our-world-23459526?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/machine-learning-in-our-world-23459526?u=76281980&t=0)** - [Instructor] [[Generative AI]] and [[Large Language Models (LLM)|large language models]] have transformed our digital landscape, pushing the boundaries of what machines can achieve. In this course, I explain what machine learning is and isn't and the different ways in which machines learn. I walk through the steps of [[Data Collection]], exploration, and preparation with guided examples of how to accomplish each step using [[Python (Programming Language)|Python]]. Finally, I bring it all together as I walk you through how to build, evaluate, and interpret the results of a machine learning model in Python. Hi, I'm Fred Nwanganga. I'm a data scientist, teacher and author with a passion for AI and machine learning. Welcome to my [[LinkedIn]] learning course on machine learning with Python. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Generative AI]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[Data Collection]] (1), [[LinkedIn]] (1)
> **CLI Commands:** python (3)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we get started, let's go over some of the background knowledge that you should have in order to get the most out of this course. First, it will be helpful if you have some entry-level knowledge coding in [[Python (Programming Language)|Python]]. I will assume that you know how to import a Python package, refer to attributes of an object and call the methods of an object. Next, it would also be helpful if you have some familiarity with the [[Pandas (Software)|pandas]] and scikit-learn packages. If you don't, no worries. I will explain exactly what I'm doing when we do use these packages in the course. Finally, I do assume that you know how to use a Jupyter Notebook interactive Python environment. Specifically, that you know how to create a code cell as well as how to edit a wrong code within the code cell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (3)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### [The tools you need](https://www.linkedin.com/learning/machine-learning-with-python-foundations/the-tools-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/the-tools-you-need?u=76281980&t=0)** - [Instructor] Before working through the exercises in the course, I want to make sure that you have the tools you need to be successful. The first thing you want to make sure to do is install or verify that you have the latest version of [[Python (Programming Language)|Python]] 3. I will be working in Python 3.8. So if you have the latest version of Python 3, you should be able to run my code. However, if you're still on Python 2, you may run into some difficulty. I will be running my code in Jupyter Notebooks. The Jupyter Notebook is a great platform for combining live code, descriptive text about the code, visualizations, and equations in one simple-to-use interface. Luckily, everything you need, which includes the latest version of Python 3 and the Jupyter Notebooks environment, is available by installing Anaconda. Anaconda is a package manager, an environment manager, a Python distribution, and a collection of over 7,500 open source packages. It is free and easy to install. It offers free community support. You can install Anaconda by going to the address provided here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6)
> **CLI Commands:** python (6), make (2)
> **Tools:** jupyter (3), anaconda (3)
> **Versions:** python 3 (4), python 2 (1)
> **Prerequisites:** install (3)
> **Definitions:** is a  (2)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/machine-learning-with-python-foundations/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files you need for this course will be provided to you. This means that you can follow along with any of the code examples in the lessons. I recommend that you do so. The best way to learn how to collect data, explore data, prepare data, and build machine learning models in [[Python (Programming Language)|Python]] is to practice doing it yourself. The exercise files are organized into folders that correspond with the chapters of the course. Within each folder are data files and two notebooks for each of the code lessons. For example, let's open up the exercise files folder. Within the folder, we see chapter two, which is folder two. Instead of the folder, we see two data files and two notebook files. 02_02B is the beginning notebook and 02_02E is the ending notebook. When following along the video lessons, use 02_02B. 02_02E is a completed version of 02_02B for your reference. There are several ways to launch a notebook. One approach is to use the Anaconda Navigator. Once the navigator opens, we can click on launch Jupyter Notebook, then navigate to the file that we want, exercise files 02, 02_02B.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Exercise Files:** exercise files (4)
> **Tools:** anaconda (1), jupyter (1)
> **UI Navigation:** click on (1), navigate to (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** python (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Machine Learning

[↑ Back to Table of Contents](#table-of-contents)

#### [What is machine learning?](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-machine-learning?u=76281980&t=0)** - [Instructor] Whether we realize it or not, machine learning is all around us. From antilock braking systems, to autopilot systems in airplanes and cars, smart speakers, which serve as personal digital assistants, to systems that learn our movie preferences and recommend what to watch next. Machine learning has become ubiquitous in our lives. So what is machine learning? As you can probably tell, the term machine learning is an old one. It's been a while since people referred to computers as machines. To understand what machine learning is, let's discuss how it came to be. Computers, machines, are very good at performing repetitive tasks quickly and precisely. If we think of a computer as an assistant, which helps us accomplish rigorous and sometimes mundane tasks, then the traditional way of interacting with a computer is to provide it with two things. The first is some sort of data or task as input. The second is a set of instructions on what to do with the data or instructions on how to accomplish the task. The computer then follows the instructions and provides us with output or the result of the task. This is a traditional way to program a computer. Data and instructions as input, and we get output from the computer. In 1959, computer pioneer Arthur Samuel thought of a different approach. He wondered if computers could infer logic instead of being given explicit instructions. In other words, he wondered if machines could learn. This type of thinking was drastically different
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-machine-learning?u=76281980&t=93)** from how most computer scientists at the time thought of computers. Specifically, Arthur Samuel wondered, what if we gave a computer just input data, and the output or the end result of previously accomplished tasks? Could a computer figure out the best set of instructions that would yield the given output based on the data that was provided to it? To illustrate this idea, let's say we gave a computer the numbers on the left as input data, as well as numbers on the right as expected outputs. Based on Arthur Samuel's idea, could a computer figure out what mathematical operation to apply to the input to yield the output? As we give the computer more input and output examples, if the computer is able to gradually figure out that a simple linear combination of the input values is a close approximation of the output values, then we say that the computer, or machine, is learning. After we train a model, which is a model that has learned the right set of instructions for a given task, going forward, we simply give it input data, and to apply its internal instructions to provide us with output. What we just discussed is a type of machine learning known as [[Supervised Learning]]. Supervised learning is useful in solving problems, such as image recognition, text prediction, and spam filtering. A different type of machine learning is unsupervised learning. With unsupervised learning, we simply ask the machine to evaluate the input data and identify any hidden patterns or relationships that exist in the data.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-machine-learning?u=76281980&t=190)** Unsupervised learning is used in movie recommendation systems, and to perform customer segmentation for marketing purposes. The third type of machine learning is known as [[Reinforcement Learning]]. In this approach, there are two primary entities, the agent and the environment. The agent figures out the best way to accomplish a task through a series of cycles in which the agent takes an action and receives immediate positive or negative feedback on the action from the environment. After a number of cycles, the agent eventually learns the optimal sequence of actions to take in order to accomplish the task at hand. Reinforcement learning is commonly used in computer game engines, robotics, and self-driving cars.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Supervised Learning]] (2), [[Reinforcement Learning]] (2)
> **Definitions:** is a  (5), known as (2), is an  (1), in other words (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [What is not machine learning?](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-not-machine-learning-23458529?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-not-machine-learning-23458529?u=76281980&t=0)** - [Fred] The field of machine learning and [[Artificial Intelligence (AI)|artificial intelligence]] is rife with specialized terms like unsupervised learning, statistical learning, [[Data Mining]], optimization, [[Large Language Models (LLM)|large language models]], [[Deep Learning]], [[Statistics]], [[Supervised Learning]], [[Reinforcement Learning]], [[Data Science]], and [[Generative AI]], just to name a few. What do these terms really mean? Are they the same thing? If not, how do they relate to each other? Let's start by exploring the relationship between statistics and machine learning. Some might characterize machine learning as an elevated form of statistics, but it's essential to understand that while machine learning does draw extensively from statistical concepts, its foundation extends beyond statistics to encompass principles from information theory, [[Calculus]], algebra, engineering, and even biology. Referring to machine learning as glorified statistics is akin to referring to physics as glorified mathematics or architecture as glorified reclaim. It's crucial to emphasize that the goals and objectives of machine learning often differ from those of basic statistical modeling. Machine learning is mostly concerned with results in the form of predictions. In other words, the primary focus of machine learning is to predict future outcomes based on past events. Statistical models, on the other hand,
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-not-machine-learning-23458529?u=76281980&t=94)** are mostly concerned with the relationship between variables. This is known as inference. The statistical model, we want to understand what happens to variable B as a result of a change in variable A. The overlap between the approaches used in machine learning and those used in statistical modeling are sometimes broadly referred to as statistical learning. Next, let's take a look at the terms machine learning, data mining, and optimization. These terms refer to approaches that are closely related. They represent the different branches in the broad field of data science. Much like the distinction between machine learning and statistics, the contrast between machine learning and data mining revolves around their ultimate objectives. While machine learning prioritizes prediction by utilizing known data properties, data mining emphasizes on covering previously unknown patterns in data. In the field of [[Business Analytics]], the traditional understanding of machine learning is often referred to as [[Predictive Analytics]], data mining as descriptive analytics, and optimization as prescriptive analytics. We use descriptive analytics to identify patterns in historical data, predictive analytics to predict future outcomes, and prescriptive analytics to get a recommendation
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-not-machine-learning-23458529?u=76281980&t=189)** of the best course of action to take. Next, let's take a look at some of the remaining terms. Deep learning is one of many machine learning approaches that fall under the umbrella of what is known as supervised machine learning. Supervised learning, along with reinforcement learning and unsupervised learning, make up the three major branches of machine learning. Though often used interchangeably, machine learning is not the same thing as artificial intelligence or AI. Machine learning is a subfield in artificial intelligence. In other words, all machine learning is AI, but not all AI is machine learning. Artificial intelligence is a large field in computer science that deals with the [[Simulation]] of intelligent behavior in computers. This includes behaviors such as visual perception, [[Speech Recognition]], [[Decision-Making]], and translation between languages. Artificial intelligence models can be categorized in several different ways. One approach is to classify them based on the type of function they perform. With this lens, AI models can be classified as either discriminative or generative. That is discriminative AI and generative AI. To illustrate the difference between these two approaches, let's compare them in the context of text analytics
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-not-machine-learning-23458529?u=76281980&t=285)** or [[Natural Language Processing (NLP)|natural language processing]]. Discriminative AI models are models that focus on categorizing input data or on predicting a future outcome based on historical data. When provided with the text of customer reviews of a local restaurant, a discriminative model can correctly label each review as either satisfied, unsatisfied, or neutral. It is able to determine the [[Probability]] that a particular review belongs to a certain category given the input text. The machine learning approaches introduced in this course all fall under the discriminative AI umbrella. Generative models, on the other hand, are models that are designed to create new content based on user input. We can use a generative AI model to generate innovative texts, complete sentences, and even craft entirely fresh pieces of writing. One of the prominent generative AI methodologies gaining significant attention today are large language models, also known as LLMs. LLMs are generative AI models that are really good at understanding and generating human-like text based on the input or prompts they receive. For a detailed explanation of generative AI and large language models, check out my [[LinkedIn]] Learning course titled, "[[Generative AI- [[Introduction to Large Language Models]]]]."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (7), [[Statistics]] (6), [[Artificial Intelligence (AI)|Artificial intelligence]] (5), [[Data Mining]] (5), [[Large Language Models (LLM)|Large language models]] (4)
> **Definitions:** known as (3), in other words (2), is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [fred] (1)

#### [What is unsupervised learning?](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-unsupervised-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-unsupervised-learning?u=76281980&t=0)** - [Instructor] Unsupervised machine learning is a process of building a descriptive model. We can think of descriptive models as machine learning models that help us summarize and group data in new and interesting ways. When we have data that may have patterns that we cannot readily observe, we use a descriptive model to help us identify those patterns. To illustrate how unsupervised learning works, let's assume that we are part of the analytics team at the local credit union. Our task is to figure out better ways to market our [[Microsoft Products|products]] to our bank card customers. Instead of creating a [[Marketing Strategy]] for each customer, we could decide to use machine learning to group or segment our customers based on similarity, and then create a marketing strategy for each segment. Let's also assume that we already have two kinds of information about our customers. The first is historical information about the spending habits of each bank card customer. With this information, we could assign a spending score to each customer, depending on how often they use their bank card and how much money they spent on an annual basis. The second kind of information we have is demographic information. This includes age, gender, annual income, educational level, and so forth. In order to segment customers based on similarity, we pass the historical data to an unsupervised machine learning model. And this type of model is called an unsupervised model because there is no pre-existing rubric on which to evaluate the models output. In other words, there is no external supervisor telling the model whether its output is right or wrong.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-unsupervised-learning?u=76281980&t=94)** Unsupervised machine learning models analyze the input they receive using a descriptive approach in order to highlight the patterns or interesting relationships that exist in the data. To add some specifics to the previous example, let's say that we have the data shown here for 10 of our bank card customers. Our objective is to group customers based on spending score and income level alone. On a two dimensional plane, each of our 10 customers could be represented this way. Using just a spending score and income level, an unsupervised machine learning model could automatically evaluate each customer and group them based on how similar they are to other customers. With each customer assigned to a group, we then assign them a segment label. This is customer segmentation. With this information, we can develop a marketing strategy targeted to each segment with the expectation that customers within each group will likely respond to a campaign in a similar way because they share similar characteristics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Marketing Strategy]] (3), [[Microsoft Products|Products]] (1)
> **Definitions:** is called (1), in other words (1)
> **Speakers:** - [instructor] (1)

#### [What is supervised learning?](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-supervised-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-supervised-learning?u=76281980&t=0)** - [Instructor] Supervised machine learning is a process of training a predictive model. Predictive models are machine learning models that enable us to assign a label to unlabeled data based on patterns learned from previously labeled historical data. If we want to predict the outcome of a new event, we can use a predictive model that has been trained on similar or related events to predict the outcome. To illustrate how [[Supervised Learning]] works, let's assume that we work in the analytics department of a local credit union. Our task is to develop a machine learning model that predicts loan risk. Specifically, we would like to build a model that predicts whether a particular customer will or will not default on a loan. Let's also assume that we already have two kinds of information about the loans our bank has previously issued. The first is descriptive data about each loan, such as the loan amount, the grade of the loan, the annual salary of the borrower, the purpose for the loan and so forth. The second type of information we have is the outcome of each previously issued loan. The outcome data is a label that tells us whether the borrower paid back the loan in full or whether the borrower defaulted on the loan. Before we can use a supervised machine learning model to predict the outcome of a new loan, we first have to train the model using historical loan data. In machine learning, we call the input the independent variables and we call the output the dependent variable. The independent variables and dependent variable make up what is known as a training data.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-supervised-learning?u=76281980&t=94)** If our training data consists of 10 previously issued loans by our credit union, then the independent variables are the loan amount, the grade of the loan and the stated purpose for the loan, while the dependent variable is outcome variable, default. The default variable has two levels or values. They are yes, which means the borrower failed to pay back the loan in full, and no, which means that the borrower paid the loan back in full. To train a model, we provide it with three independent variables and we provide it with the dependent variable or outcome as well. With these two sets of values, the machine learns the patterns in the data and builds a set of instructions that connect the input to the output. This set of instructions represent the trained model. After a model has been trained, we can evaluate how well its instructions explain the relationship between the independent variables and the dependent variable. One way to do this is to provide the trained model with just the input in order to see what output values it will predict. By comparing the predicted outcomes with the actual outcomes, we can score the performance of the model based on how many of them match. We call this the predictive accuracy of the model. The higher the score, the better the model is. And the lower the score, the worse the model is. One of the most popular definitions of supervised machine learning is that provided by Tom Mitchell. According to Mitchell, "A computer program is said to learn from experience E with respect to some class of tasks T
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-supervised-learning?u=76281980&t=190)** and performance measure P, if its performance tasks in T, as measured by P, improves with experience E." This definition presents three components to machine learning: experience E, class of tasks T, and performance measure P. In our loan outcomes example, the experience is a historical loan data that we use to train the model. The task is to predict who will or will not default. And the performance measure is predictive accuracy, which is measured by how well the predicted and actual outcomes match. We can reword the supervised machine learning definition as a loan prediction model is said to learn if its ability to predict which borrowers would default on the loan T, as measured by predictive accuracy P, improves as it encounters more training data E.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Supervised Learning]] (1)
> **Definitions:** is a  (3), known as (1), means that (1), we call this (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [What is reinforcement learning?](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-reinforcement-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-reinforcement-learning?u=76281980&t=0)** - [Narrator] [[Reinforcement Learning]] is a science of learning to make decisions from interaction or the process of learning through feedback. It has many applications like autonomous driving, robotics trading and gaming. Reinforcement learning is very similar to early childhood learning. A toddler sees something, does something, gets positive or negative feedback, then adjusts his or her future behavior accordingly. Reinforcement learning along with unsupervised and [[Supervised Learning]] form the three major branches of machine learning. Unlike unsupervised learning where the objective is to identify unknown patterns in unlabeled data and supervise learning where the objective is to learn patterns in previously labeled data, reinforcement learning attempts to tackle two distinct objectives. The first is finding previously unknown solutions to existing problems. An example of this learning objective is a machine that plays chess better than any human ever. The second objective of reinforcement learning is finding solutions to problems that arise due to unforeseen circumstances. An example of this learning objective is a machine that is able to find an alternative route through a terrain, after a mudslide has altered the expected route. Reinforcement learning involves true primary entities that repeatedly interact with each other. One of them is the agent and the other is environment. The agent interacts with the environment by taking actions. The environment responds to the actions of the agent
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-reinforcement-learning?u=76281980&t=95)** by providing feedback or observations to the agent. The feedback provided by the environment comes in two [[Forms]], state and reward. The state describes the impact of the agent's previous actions on the environment and the possible actions the agent can take. Each action is associated with a numeric reward, which the agent receives as a result of taking a particular action. The agent's primary objective is to maximize the sum of rewards it receives over the longterm. To illustrate how reinforcement learning works. Let's consider the familiar game of tic tac toe. In the game, two players take turns playing on a three by three board. One player plays Xs on the other Os, until one player wins by placing three marks in the row. Diagonally, vertically or horizontally as shown here. Let's assume that each of the positions on the board is represented by the labels shown here A1, A2, all the way to C3. Let's also assume that the first player is not the agent and plays Os while the agent is a second player and plays Xs. The first move of the game could look something like this. The table to the right is known as a policy table. It represents states and rewards. Columns A1 to C3 are the positions on the board. While column D is a reward associated with each state. Each row represents an available state or action that agent can make, given that the first player has played O in position A3. one stands for player one and two stands for player two.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-reinforcement-learning?u=76281980&t=190)** Notice that column A3 is taken and is therefore grayed out and pre-filled with one. This means that the agent can play any position on the board except A3, given the available actions and rewards, the agents must evaluate each possible action and choose the one that yields the highest reward. This is known as exploitation. Since all of the actions currently have the same reward, the agent randomly decides to play B2, in the second move, if the first player plays B3, then the state table via shown here. Once again, the agent was choose the action that yields the highest reward. Since all of these actions have a reward of 0.5, the agent randomly settles on a play of C3. The process repeats a third time for player one and for player two. At the end of each player's third move, the environment determines that player one has won the game. This is known as a terminal state. The coin cycle of learning has ended. At the end of the learning cycle, because the action taken by the agent in the third move resulted in the victory, the reward associated with that action is updated by the environment from 0.5 to one in the policy table. This is known as a backup, using the mathematical equation, the reward associated with the agent's second move is also backed up in the policy table, as well as a reward associated with the agent's first move. As a result of the higher rewards
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-is-reinforcement-learning?u=76281980&t=283)** associated with the sequence of actions the agent took in the first learning cycle, during subsequent learning cycles, if the agent encounters a state similar to the one that it encountered in the first cycle, it will choose to take the same action that it did in the first cycle, in order to maximize reward. This brings up an important challenge with reinforcement learning. The challenge is known as the exploration versus exploitation trade-off. If left unchecked, an agent will always prefer to take actions that he has tried in the past and found to be effective in maximizing reward. As previously mentioned, this is known as exploitation. However, in order to discover a new sequence of actions with potentially higher reward, the agent was try actions that it has not selected before, or that do not initially appear to maximize reward. In other words, the agent sometimes has to choose actions with little to no consideration for their associated reward, this is known as exploration. An agent that focuses only on exploitation will only be able to solve problems it has previously encountered. An agent that focuses only on exploration will not learn from prior experience. A balanced approach is needed for effective reinforcement learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (9), [[Supervised Learning]] (1), [[Forms]] (1)
> **Definitions:** known as (7), is a  (5), stands for (2), means that (1), in other words (1)
> **CLI Commands:** make (2), find (1)
> **Versions:** 0.5 (2)
> **Tools:** terminal (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)

#### [What are the steps to machine learning?](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-are-the-steps-to-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-are-the-steps-to-machine-learning?u=76281980&t=0)** - [Instructor] There are six major steps in the machine learning process. The first is [[Data Collection]]. During the data collection step, our objective is to identify and gather the data we need for machine learning. For unsupervised learning, this is the unlabeled data with unknown patterns that we intend to discover. For [[Supervised Learning]], this is the labeled historical data that we intend to use to train and evaluate our model. For [[Reinforcement Learning]], this is the data that helps our agent learn which actions yield the most reward. If we liken the machine learning process to the process of making a delicious bowl of salad, then the data collection step is like gathering all the ingredients that would go into a salad into a single basket. The second step in the machine learning process is data exploration. Data exploration is a process of describing, visualizing, and analyzing data in order to better understand it. With data exploration, we can answer questions such as, how many rows and columns are in the data? What type of values are stored in the columns of the data? Are there missing, inconsistent, or duplicate values in the data? And are there outliers in the data? Just as we did for the previous step, if we liken the machine learning process to the process of making a bowl of salad, then the data exploration step is like inspecting every ingredient to make sure that it is fresh, ripe, and/or exactly what we want. The next step in the machine learning process is [[Data Preparation]].
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-are-the-steps-to-machine-learning?u=76281980&t=93)** Data preparation is the process of making sure that our data is suitable for the machine learning approach that we intend to use. It involves resolving [[Data Quality]] issues, such as missing data, noisy data, outlier data, and class imbalance. Data preparation also involves modifying or transforming the structure of our data in order to make it easier to work with. This includes normalizing the data, reducing the number of rows and columns in the data. Going back to our salad analogy, the data preparation step is when we begin to cut the vegetables we plan to use in our salad. Depending on the type of salad we want, we may decide to cube the vegetables, slice the vegetables, or shred the vegetables. If we plan on adding chicken to the salad, this is also the stage when we either grill, bake, or saute the chicken. Successful [[Data Science]] relies on good data. The data doesn't have to be perfect, but it should be good. The saying garbage in, garbage out is especially important when it comes to machine learning. Because of how important good data is, it is not unusual to spend up to 80% of our time collecting, exploring, and preparing data. After the data collection, exploration, and and preparation stages comes the modeling stage. Modeling is the process of choosing and applying the right machine learning approach that works well with the data we have and solves a problem at hand. Modeling is the most well-known stage in the machine learning process. In order to apply the right type of model, we must be clear about our objective.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-are-the-steps-to-machine-learning?u=76281980&t=188)** Knowing what type of machine learning we intend to do and what machine learning approach is capable or incapable of will go a long way in helping us be successful in this stage. In the salad analogy, the modeling stage is analogous to mixing the ingredients that we previously prepared. Depending on the type of salad we want, we mix more of some ingredients and less than others. We also decide which ingredients to include and which to avoid altogether. The fifth stage in the machine learning process is evaluation. As the name suggests, our objective in this stage is to assess how well the machine learning approach we chose worked. There are several ways to do this. In supervised learning, where our goal is to predict a label or value, we evaluate a model by measuring how well it does in predicting labels for previously unseen data. In unsupervised learning, we usually take a more subjective approach. A good unsupervised learning model is one that provides us with results that make sense to us. The evaluation stage is when we taste test our salad. If the salad needs more salt or pepper, we add some seasoning. If the salad feels a bit dry, we add some dressing. Depending on how well a model performs, we may need to build it again with slightly different data or with different settings. The idea here is to make a change that has a meaningful positive impact on the performance of our model. This is usually an iterative process. When we feel confident that the model we have is good
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-python-foundations/what-are-the-steps-to-machine-learning?u=76281980&t=281)** or the best we could do given the data we have, we move on to the final stage of the machine learning process, actionable insight. This means identifying a potential course of action based on the result of the machine learning model. For supervised learning and reinforcement learning, this is the stage where we decide whether or not to deploy our model to production. In unsupervised learning, this is the stage where we decide what to do with the patterns identified by our model. As for our salad, this is when we decide whether or not to serve it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Collection]] (4), [[Data Preparation]] (4), [[Supervised Learning]] (3), [[Reinforcement Learning]] (2), [[Data Quality]] (1)
> **CLI Commands:** make (4)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Collecting Data for Machine Learning

[↑ Back to Table of Contents](#table-of-contents)

#### [Things to consider when collecting data](https://www.linkedin.com/learning/machine-learning-with-python-foundations/things-to-consider-when-collecting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/things-to-consider-when-collecting-data?u=76281980&t=0)** - [Instructor] [[Data Collection]] is the first of the six stages or steps in the machine learning process. During the data collection stage, our primary objective is to identify and gather the data we intend to use for machine learning. As we collect this data, there are five key considerations to keep in mind. The first is accuracy. For supervised machine learning problems, we use historical data that has outcome labels or response values to train the model. Ensuring that this data is accurate is critically important to the success of their approach. [[Supervised Learning]] [[Algorithms]] use this data as a baseline for the learning process. It serves as a source of truth upon which patterns are learned in order to make future predictions. If this data is inaccurate, then the algorithm's future predictions cannot be trusted. This is why this data is often referred to as ground truth data. Ground truth data can either come with an existing label based on a prior event, such as whether a bank customer defaulted on a loan or not, or it can require that a label be initially assigned to it by domain experts, such as whether an email is spam or not. Regardless of whether labels already exist or need to be assigned, we should always have a plan to validate ground truth data after it has been acquired. The next key consideration is relevance. The type of data we collect to describe an observation should be relevant in explaining the label or the response associated with the observation. For example, collecting data on the shoe size of bank card customers has no relevance in explaining whether a particular borrower
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-foundations/things-to-consider-when-collecting-data?u=76281980&t=94)** will or will not default on the loan. Conversely, excluding information about a customer's income could have an adverse impact on the effectiveness of a model that attempts to predict loan outcomes. The amount of data needed to successfully train a model depends on the type of machine learning approach chosen. This is a third consideration, quantity. Some machine learning algorithms work well with little data while others require a large amount of data to provide meaningful results. Understand the characteristics of the machine learning algorithm we intend to use can provide us with guidance on how much data we need to collect. Besides quantity, variability in the data collected is also important. For example, if we intend to consider the income of a borrower as a predictor of loan outcome, then our ground truth data should include customers of sufficiently different income levels. By doing this, we allow our model to gain a broader understanding of how income level impacts loan outcomes. The fifth consideration is one that is often overlooked, [[Ethics]]. There are several ethical issues to consider during the data collection process. They include [[Privacy]], security, informed consent, and bias. It is important that processes and mitigating steps be put in place to address these issues as part of the process of acquiring ground truth data. If bias exists in the data used to train a model, then the model would also replicate the bias in its predictions.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-python-foundations/things-to-consider-when-collecting-data?u=76281980&t=186)** As one can imagine, bias predictions could prove quite harmful, especially in situations where unfavorable decisions are being made based on a machine learning model. Bias in ground truth data is often non-intentional. It sometimes stems from implicit human bias in the data collection process or from the absence of existing data on certain subpopulations. Let's recap. The data we collect for machine learning should be accurate and relevant. We must ensure that we have enough data and that the data we capture is different and captures different use cases. Finally, we must be ethical in how we collect, manage, and use data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Collection]] (4), [[Algorithms]] (2), [[Supervised Learning]] (1), [[Ethics]] (1), [[Privacy]] (1)
> **Analogies:** such as (2), for example (2), imagine (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [How to import data in Python](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-import-data-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-import-data-in-python?u=76281980&t=0)** - [Instructor] One of the reasons why [[Python (Programming Language)|Python]] is such a popular programming language for machine learning is because it supports some very powerful and easy to use packages, which are purpose built for data analysis. One of these packages is a [[Pandas (Software)|pandas]] package. The pandas package provides several easy to use functions for creating, structuring, and importing data. Before we can use any of these functions, we first have to import the pandas package using the import command. Here, the import command imports the pandas package, and we use an alias for the package. We call it pd. This allows us to refer to the functions of the package by simply referring to pd dot a function name. One of the ways the pandas represents data is as a series. A panda series is heterogeneous one dimensional array-like data structure with labeled rows. We can create a panda series from a previously created list. Given the members list, we can create a series object as follows. We're going to create a series object called bricks1, and we create the series object by calling the pd series, construct a function, and we pass the members list to the series. As you can see, the series object is made up of a set of indexes on the left and values on the right. To verify that bricks1 is a panda series, let's pass it to the type function to see what we get. Another way that pandas represents data
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-import-data-in-python?u=76281980&t=99)** is as a data frame. A pandas data frame is a heterogeneous two dimensional data structure with labeled rows and columns. We can think of a pandas data frame as a collection of several panda series, all sharing the same index. A data frame is very similar to a spreadsheet or a relational database table. We can create a pandas data frame from a previously created dictionary. Given the members dictionary, we can create a data frame object as follows. Here, we are going to create bricks2, and bricks2 is created by calling the data frame, construct a function, and we passed with the members dictionary. As you can see, pandas converted the dictionary keys to column names, and it used the values for each dictionary key as the cell values in the data frame. To verify that bricks2 is a data frame, let's call the type function to see what it returns. There we have it. It is a data frame. We can also create a data frame from a previously created two dimensional list of values and a list of column names. Given the members and labels lists, we can create a data frame object as follows. This time, we create breaks3, we passed the data frame construct a function, the members list, as well as the labels lists, as the column names.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-import-data-in-python?u=76281980&t=194)** Another way to create a pandas data frame, is by importing data directly from an external source. For example, we can create a data frame by importing a CSV file. So, let us create another that a frame, bricks4. This time, we use a pd.read_csv function, and we pass through it the file we want it to read. There we have it. We can also create a pandas data frame by importing a [[Microsoft Excel]] file. This time we're going to call it bricks5, and we will use the read_excel function, and we pass to it the name of the file we intend to read. In this example, we read from an [[Microsoft Excel|Excel]] file. Note that for multi-sheet Excel files, the pandas read Excel function imports the first sheet by default. If we want to import a sheet other than the first one, we have to specify a value for the sheet name argument within the read XL function. For example, the bricks Excel file we just imported, has two sheets. The first is named members and the second is named summits. When we imported the file, the function imported the first sheet, which is the member sheet. To import the second sheet, which is the summits sheet, we make the following modification to our code. There we have it. The summits sheet.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-import-data-in-python?u=76281980&t=286)** Besides CSV and Excel files, the pandas package allows us to import other file types, which we do not cover or go over in this tutorial. To get an exhaustive list of supported file types, visit the pandas documentation website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (15), [[Microsoft Excel|Excel]] (5), [[Python (Programming Language)|Python]] (1), [[Microsoft Excel]] (1)
> **Definitions:** is a  (5)
> **Analogies:** for example (2), similar to (1)
> **CLI Commands:** python (1), make (1)
> **Code Identifiers:** read_csv (1), read_excel (1)
> **Env Vars:** csv (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. Understanding Data for Machine Learning

[↑ Back to Table of Contents](#table-of-contents)

#### [Describe your data](https://www.linkedin.com/learning/machine-learning-with-python-foundations/describe-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/describe-your-data?u=76281980&t=0)** - [Instructor] Data exploration is the second of the six stages or steps in the machine learning process. Data exploration is a process of describing, visualizing, and analyzing data in order to better understand it. Data exploration enables us to answer questions such as how many rows and columns are in the data. What type of data do we have? Are there missing, inconsistent, or duplicate values in the data? In machine learning, we use certain key terms to describe the structure and nature of our data. The term instance refers to a row of data. An instance is an individual independent example of the concept represented by the data set. A data set consists of several instances. An instance is sometimes referred to as a record or an observation. In this example, each loan application is represented by an instance. Each instance is described by a set of attributes or features. A feature refers to a column of data. A feature is a property or characteristic of an instance. Features are sometimes referred to as variables. In this example, a loan customer's name, the loan amount, the loan grade, the loan purpose, and the loan outcome are all features of a loan instance. Features can be categorized based on the type of data they hold. A feature can be described as categorical. A categorical feature is an attribute that holds data stored in discreet form. Categorical features are typically limited
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-foundations/describe-your-data?u=76281980&t=95)** to a reasonable set of possible values. In this example, customer name, grade, purpose, and default are categorical features. A feature can also be described as continuous. A continuous feature is an attribute that holds data stored in the form of an integer or real number. A continuous feature has an infinite number of possible values between its lower and upper bounds. In this example, the loan amount is a continuous feature. Other examples of continuous features include features such as temperature, height, weight, and age. Please note that not all numeric values are continuous. A numeric scale such as a Likert scale that goes from 1 to 5 is categorical and not continuous. It does not have an infinite number of possible values between its lower bound of 1 and its upper bound of 5. Features can also be categorized based on their function. In supervised machine learning, we use the values of a set of features known as independent variables to predict the value of another feature known as the dependent variable. If the dependent variable is categorical, we referred to it as the class. However, if it is continuous, we refer to it as a response. In this example, the loan outcome, which is the default feature, is the class. The dimensionality of a data set represents the number of features in the dataset. The higher the dimensionality of a dataset, the more detail we have about each instance. High dimensionality also means
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-with-python-foundations/describe-your-data?u=76281980&t=187)** higher computational complexity. Sparsity and density describe the degree to which data exists for the features in the dataset. For example, if 20% of the values in the dataset are missing or undefined, we say that data set is 20% sparse. Density is the complement of sparsity. Therefore, a data set that is 20% sparse is 80% dense.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (3), refers to (2), known as (2)
> **Analogies:** such as (3), for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [How to summarize data in Python](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-summarize-data-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-summarize-data-in-python?u=76281980&t=0)** - [Instructor] During the exploration, one of the best ways to understand the nature of the data at hand is to summarize it by computing aggregations, such as mean, median, maximum and minimum. These aggregations or statistical measures, as they're commonly referred to, are helpful in describing the general and specific characteristics of data. The [[Pandas (Software)|Pandas]] data frame provides several easy to use methods that help us describe and summarize data. One of these methods is the info method. Given a data frame called washers, we can get a concise summary of its rows and columns by calling it's info method. From the output, we can tell the washers data frame has 261 rows and 18 columns. Five of the columns hold decimal values, three hold integer values and 10 hold textual data. If we want a sneak peek of the data stored in the data frame, we can call it's head method. As we can see from the output, the head method returns just the first five rows in the data frame. This provides us with a high level view of the data we're working with. Now that we know what the data looks like, we can start to dive a little deeper into the nature of the values. The describe method of a data frame is useful for this, the method returns a statistical summary of each of the columns in a data frame. It's important to note that the descriptive [[Statistics]] returned by the describe method depends on the data type
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-summarize-data-in-python?u=76281980&t=95)** of a column. For example, let's get the descriptive statistics for the non-numeric brand name column in the washers data frame. To do this, we specify the column that we want, which is brand name. Then we call the describe method for this column. The output tells us that there are 261 non missing values in the brand name column. It also tells us that there are 22 unique washer brands in the data. Of the unique brands, LG is the most occurring with 50 washers listed under the LG brand. To illustrate how the describe method works for numeric columns, let's get a descriptive statistics for the volume column in the washers data frame. So we start by selecting the column that we want, volume. Then we call the describe method. From the statistics, we can tell that the average, minimum and maximum volumes of the washers in the data are 4.4, 1.9 and 6.2 cubic feet respectively. Instead of getting a pre-packaged list of statistical measures, we can also compute specific aggregations for certain columns in a data frame. The Pandas package provides several data frame methods to do this. For example, we can get a count of each unique washer brand in the data frame. We start by specifying the column that we want, this time around we also want the brand name.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-summarize-data-in-python?u=76281980&t=190)** We call the value counts method, and this gives us a list. Sometimes it's more useful to get a percentage rather than a count. To do so, we modify the code we ran in the previous cell. Within the value counts method, we specify a value for normalize to true. Now we get a percentage representational distribution for each brand of washer. The output tells us that 18% of the washers in the data are Samsung washers. For numeric columns, we can get specific aggregations as well. For example, we can compute the average volume of washers in the dataset. So let us get the washers, volume column, and we compute the mean. 4.37. We can also get specific aggregations at the group level. For example, we can compute the average volume of washers by brand. To do this, we specify the data frame washers, call the group by method and pass to it the column on which we want to group by, which is brand name. Next, we specify the column we want to aggregate by, which is volume. And we call the mean method. This result is sorted by brand to help us better compare the average washer volumes across brands. Let's sort the data in ascending order of average volume. To do this, we make a slight modification to our code.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-summarize-data-in-python?u=76281980&t=286)** We add a sort values method and say sort by volume. Now our washer mean volumes by brand is sorted by the mean volumes for each washer brand. Now we can clearly see that on an average, Beko washers have the smallest volume, while Midea washers have the largest volume. We can also compute more than one specific aggregation at once. For example, let's compute the average median minimum and maximum washer volume for each brand. To help us along the way, part of the code has already been written. What we need to do now is to use the dot ag method and within the method we specify the aggregations that we want. So we want the mean, we also want median. We want min and we want max. The methods introduced here are just the tip of the iceberg. To explore some of the other methods which are useful in summarizing data, visit the Pandas documentation site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (4), [[Pandas (Software)|Pandas]] (3)
> **Analogies:** for example (5), such as (1)
> **Versions:** 4.4 (1), 1.9 (1), 6.2 (1), 4.37 (1)
> **CLI Commands:** make (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Visualize your data](https://www.linkedin.com/learning/machine-learning-with-python-foundations/visualize-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/visualize-your-data?u=76281980&t=0)** - [Instructor] Data exploration is a second of the six stages of steps in the machine learning process. Data exploration is a process of describing, visualizing, and analyzing data in order to better understand it. By exploring our data, we can answer questions such as. How many rows and columns are in the data? What type of data do we have? Are there missing, inconsistent, or duplicate values in the data? During data exploration, even after using sophisticated statistical techniques to analyze data, certain patterns are best understood when represented with a visualization. Like the popular saying goes, "A picture is worth a thousand words." Visualizations serve as a great tool for asking and answering questions about data. Depending on the type of question we are trying to answer, there are four major types of visualizations we could use. The first is a comparison visualization. Comparison visualizations are used to illustrate the difference between two or more items at a given point in time or over a period of time. One of the most commonly used comparison visualizations is a box plot. Using a box plot, we can compare the distribution of values for a continuous feature against the values of a categorical feature. For example, this box plot compares carbon dioxide emissions values across vehicle class. Based on the visualization, we can tell that on average pickups and vans have higher carbon emissions than compact and midsize cars. Comparison visualizations provide insights such as the significance of a feature,
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-foundations/visualize-your-data?u=76281980&t=94)** the variation in the median or mean value of a feature across subgroups, and the existence of outliers in the values of a feature. Relationship visualizations are used to illustrate the correlation between two or more continuous variables. Scatter plots and line charts are two of the most commonly used relationship visualizations. They show how one variable changes in response to a change in another. For example, this scatter plot highlights the negative relationship between vehicle emissions levels and city mileage. Specifically, vehicles with higher city mileage ratings emit less carbon. Besides illustrating how two features interact with each other, relationship visualizations also provide insight into the significance of a feature and the existence of outliers within the values of a feature. The third type of visualization is a distribution visualization. As the name suggests, these types of visualizations illustrate the statistical distribution of the values of a feature. One of the most commonly used distribution visualizations is the histogram. With a histogram, we can figure out the most common values of a feature. For example, this histogram shows that most vehicles in the dataset have carbon emissions values between 300 and 700 grams per mile. Histograms visualize the spread or skewness in the values of a feature. They also highlight the presence of outliers in the data. A composition visualization shows the component makeup of our data. Stacked bar charts, grouped bar charts,
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-python-foundations/visualize-your-data?u=76281980&t=188)** and pie charts are three of the most commonly used composition visualizations. Stacked bar charts show how much a subgroup contributes to the hole. For example, based on this stacked bar chart, we can figure out the proportion of vehicles each year that are front wheel drive, all wheel drive, and rear wheel drive within the dataset. Besides illustrating how much a subgroup contributes to the total, composition visualizations can also illustrate the relative or absolute change in a subgroup composition over time.

> [!info]- Semantic Content
>
> **Analogies:** for example (4), such as (2), picture (1)
> **Definitions:** is a  (5)
> **Speakers:** - [instructor] (1)

#### [How to visualize data in Python](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-visualize-data-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-visualize-data-in-python?u=76281980&t=0)** - [Instructor] Like the popular saying, "a picture is worth a thousand words." Visualizations are sometimes more useful than summary [[Statistics]] in helping us understand our data. One of the most popular visualization packages in [[Python (Programming Language)|Python]] is a matplotlib package, which provides a host of powerful functions and methods that allow us to produce publication quality visualizations. The plot method of a [[Pandas (Software)|Pandas]] dataframe provides an abstraction of the matplotlib functions. To ensure that the plots we create in this tutorial appear right after our code, we have to run the following command. Next, let's import and preview the data we will use for our illustrations. The first type of plot we create is a relationship visualization. These types of visualizations are used to illustrate the correlation between two or more continuous variables. Scatter plots are one of the most commonly used relationship visualizations. They show how one variable changes in response to a change in another. To create a scatter plot, we start with our data frame vehicles. We call the plot method within the method, we specify the value for the kind arguments as scatter, we specify a value for the X axis, here we choose city MPG and we specify a value for the Y axis. Here we choose CO2 emissions. The plot that we have shows that the relationship
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-visualize-data-in-python?u=76281980&t=97)** between vehicle emissions levels and city mileage is negative. In other words, vehicles with higher mileage ratings emit less carbon. Next, we create a distribution visualization. As the name suggests, distribution visualizations illustrate this statistical distribution of the values of a feature. One of the most commonly used distribution visualizations is the histogram. With a histogram, we can figure out which values are most common for a feature. To create a histogram, we start with our vehicles data, and we specify the column that we want. So here we choose CO2 emissions. Then we call the plot method. And within the method we specify the value for the kind argument which this time around is hissed. The plot shows that the carbon emissions values for the vehicles in the dataset range from just on the 200 grams per mile, to just over a thousand grams per mile. It also shows a most vehicles fall within the 300 to 700 grams per mile range. Comparison visualizations are used to illustrate the difference between two or more items at a given point in time or over a period of time. One of the most commonly used comparison visualizations is the box plot. Using a box plot, we can compare the distribution of values for a continuous feature against the values of a categorical feature. To create a box plot in Python, we must first create a pivot table,
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-visualize-data-in-python?u=76281980&t=191)** such that the value we want on the X axis of our plot are listed as column labels while the values we want on the Y axis of our plot are the cell values. To create the pivot table, we begin with our vehicles dataset. We call the pivot method. Within the method, we specify a value for the columns. Here we specify the value as drive, and we specify a value for the cells, which is the values argument and we specify this as CO2 emissions. Note that the value NAN is an acronym for not a number and is how a pan does dataframe represents missing values. The emissions values are missing for every column except the one that corresponds with a drive type for a particular vehicle. For example, we can tell that the first vehicle in our table is a two wheel drive vehicle while the fourth one is a rare wheel drive vehicle. With our data in this format, we can then create a box plot. So we have some of the code already written for us here, so we call the plots method and within the method, we specify kind = box plus, we want a box plot, and we also specify a figure size of 10 by six. The plot shows that on average front wheel drive cars have lower carbon emissions than other types of cars. Our fourth visualization is a composition visualization.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-visualize-data-in-python?u=76281980&t=285)** These types of visualizations show the component makeup of data. Stacked bar charts are one of the most commonly used composition visualizations. Stacked bar charts show how much a subgroup contributes to the whole. To create a stacked bar chart in Python, we must first create a pivot table so that the values we want on the X axis of our plot are listed as row labels while the composite groups are listed as column labels. To do this, we start with a group level aggregation. So we start with our vehicles data, we grouped by year, we specify or select the drive, the column we want, which is drive and we call value counts to give us a unique count of values. The next thing we do is call the unstack method to pivot that innermost index, which is drive to column labels, unstack. Now that our data is in this format, we can create a stat bar chart. So here we call the plot method within the method when we specify a value for kind this time around it's bar stat = 2. We're going to stat bar chart. This will specify fixed size and by six. The plot shows the total number of vehicles rated by the EPA each year, as well as the proportion of front wheel, all wheel,
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-visualize-data-in-python?u=76281980&t=379)** and rear wheel vehicles that make up those numbers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Statistics]] (1), [[Pandas (Software)|Pandas]] (1)
> **Definitions:** is a  (5), in other words (1), is an  (1)
> **Env Vars:** co2 (3), mpg (1), nan (1), epa (1)
> **CLI Commands:** python (3), make (1)
> **Analogies:** picture (1), for example (1)
> **UI Navigation:** select the (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 4. Preparing Data for Machine Learning

[↑ Back to Table of Contents](#table-of-contents)

#### [Common data quality issues](https://www.linkedin.com/learning/machine-learning-with-python-foundations/common-data-quality-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/common-data-quality-issues?u=76281980&t=0)** - [Instructor] An ideal dataset is one that has no missing values and has no values that deviates from the expected. Such a dataset hardly exists, if at all. In reality, most datasets have to be transformed or have [[Data Quality]] issues that need to be dealt with prior to being used for machine learning. This is what the third stage in the machine learning process is all about, [[Data Preparation]]. Data preparation is a process of making sure that our data is suitable for the machine learning approach that we choose to use. In computing, the saying, "Garbage in, garbage out," is used to express the idea that incorrect or poor quality input will invariably result in incorrect or poor quality output. This concept is fundamentally important in machine learning. If proper care is not taken on the front-end to properly deal with data quality issues before building the model, then the model output will be unreliable, misleading, or simply wrong. One of the most commonly encountered data quality issues is that of missing data. There are several reasons why data could be missing. They include changes in [[Data Collection]] methods, human error, bias, or simply the lack of reliable input. Before we resolve missing data, we should attempt to understand why the data is missing and if there is a pattern to the missing values. There are several approaches to dealing with missing data. One approach is to simply remove all instances with features that have a missing value. Another is to use an indicated value, so just NA, unknown, or negative one to represent missing values. An alternative approach is to use a method
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-foundations/common-data-quality-issues?u=76281980&t=94)** known as imputation. Imputation is this use of a systematic approach to fill in missing data by using the most probable substitute value. There are several approaches to imputation. One of which is known as median imputation. With median imputation, we can resolve the missing value in the amount column by replacing the missing value with a median of the non-missing values. Another common data quality problem is that of outliers. An outlier is a data point that is significantly different from other observations within the dataset. Outliers manifest either as instances with characteristics different from most other instances or as values of a feature that are unusual with respect to the typical values for the feature. Before we decide what to do with the outlier data, we must first understand why it exists and whether it is useful towards our machine learning goal. Supervised machine learning [[Algorithms]] learn by identifying rules or estimating the function that explains the value of the dependent variable based on the values of the independent variables. If the values of the dependent variable are categorical, we refer to them as class labels and the proportion of examples that belong to each class label is known as a class distribution. For most real world problems, the class distribution of the historical data is not uniform. For example, the vast majority of people who take out loans pay them back. This means the historical loan datasets will typically have a lot more examples of people who repay their loans than examples of people who default on their loans.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-python-foundations/common-data-quality-issues?u=76281980&t=188)** This phenomenon is known as class imbalance. Class imbalance is a well-known data quality problem in machine learning. If not properly accounted for, class imbalance can lead to rather misleading results because the machine learning model we build will not have an equal shot at learning the patterns that correspond to each class label. There are several ways to resolve class imbalance. One approach is to under sample the majority class. This means that we randomly remove some of the instances of the majority class in an attempt to even the class distribution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (5), [[Data Preparation]] (2), [[Data Collection]] (1), [[Algorithms]] (1)
> **Definitions:** is a  (4), known as (4), means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [How to resolve missing data in Python](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-resolve-missing-data-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-resolve-missing-data-in-python?u=76281980&t=0)** - [Instructor] During the exploration, we may find that some of our data is missing or incomplete. Missing data could arise as a result of changes in [[Data Collection]] methods, human error, bias, or simply the lack of reliable input. There are several ways to deal with missing data in [[Python (Programming Language)|Python]]. To illustrate how to deal with missing values, let's import a sample student dataset from an [[Microsoft Excel|Excel]] spreadsheet and preview it. We can see that there are missing values in several of the columns in our data frame in order to list the rows of missing values for a particular column, we make use of the isnull method of a [[Pandas (Software)|Pandas]] data frame to create a filter or a mask. For example, we can list a rows in the data frame with missing state values as follows. Mask, students, data frame, specify the column we want, which is state, called the isnull method, and we output our mask. The mask object is a series object, a boolean series object, to be more precise. The rows of the series correspond to those of the students data frame. The values of the series are true if the corresponding state value is missing, and false if the value is not missing. We can use this series as a mask to filter the students data frame. To do so, specify students, data frame, and we index by mask. What we now have are all the rows in the students data frame with missing values in the state column.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-resolve-missing-data-in-python?u=76281980&t=95)** After we identify the rows with missing values in our data, we could decide to simply remove them. The dropna method of a Pandas data frame allows us to do this. For example, to drop any rows with missing values in the students data frame, we do the following. Students, dropna method. We are now left with six rows with no missing values. That means we dropped 14 rows. As you can probably tell, this approach is rather extreme. Most often, what we really want is to remove rows with missing data for certain columns only. For example, we could decide to remove the rows with missing values in just the state and zip columns. To do so, we specify two arguments for the dropna method. The first is subset. The subset arguments we set to the columns that we want, state and zip. The how arguments we specify as all. Instead of dropping 14 rows, as we did in the previous example, the only rows dropped now are the first two rows in the data frame, which have missing values for both the state and zip columns. These are rows with index values of zero and one. We could also decide to drop columns with missing data instead of rows with missing data. For example, to drop any columns with missing values in the students data frame, we do the following.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-resolve-missing-data-in-python?u=76281980&t=190)** Students, dropna, we specify a value for the access argument as one. That leaves us with five columns that have no missing values. This is an extreme approach as well. Most often, what we really want is to only drop columns with a certain number of missing values. For example, let's say we decide to remove any columns with 50% of the rows missing. Since we had 20 rows in our original data, we set the threshold to 10, as follows. Within our dropna method, we specify two arguments. The first is access to go to one. The second is the thresh argument. We set this to 10. This time only the minor column is removed because it had less than 50% non-missing values. Instead of dropping rows or columns with missing data, we could also decide to replace the missing values with something else. The fillna method of a Pandas data frame allows us to do this. For example, there are three missing values in the gender column of the students data frame. To replace the missing values in the column with female, we do the following. Within our fillna method, we specify a dictionary, the dictionary key, it will be the column we want, which is gender, and the value for the key, for the dictionary, is female, the value we want to replace.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-resolve-missing-data-in-python?u=76281980&t=283)** So when we run this now we now have all the missing gender values replaced with female. Instead of using a literal value to replace missing data, we could also use a function. For example, to replace the missing values in the age column, with a median of the non missing values, we do the following. Within the fillna method, we specify a dictionary once more. The key is age and that the value is students age median.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-resolve-missing-data-in-python?u=76281980&t=320)** This means replace the missing age values with a median age value for the non missing rows. The fillna method allows us to replace all missing values within the column, all within the row. However, if our objective is to replace missing values on a cell by cell basis, we use a different approach. For example, let's say we want to replace the missing zip code for Granger Indiana with 46530. This is row index six. The first thing we do is select the cell or cells that we want by creating a mask that describes the data. Let us create the mask. We call it mask, and our masks are going to have two parts to it. The first is the logic for the city. So we say students specify the column. City is equal to Granger. The second part students column is state. This is equal to Indiana. Next, we apply the mask as a row filter using the dot loc operator. So we say students dot loc in this index by mask, specify every column, this returns all rows for row index six, which is what we wanted. Note that in the syntax of the loc operator, mask specifies the rows we want and the colon specifies that we want all columns. Using the loc operator,
>
> **[6:51](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-resolve-missing-data-in-python?u=76281980&t=411)** we can update the value of the zip column alone, as follows. Students dot loc, our mask, this time we want just a zip column and we give a value to it, which is 46530. I'll output a beta, so we can see what we got. There we have it. We see that row six now has a zip code of 46530. Now that we've resolved the zip code for Granger, Indiana, we can also do the same for Niles, Michigan, which is row index 14. The current zip code is 49120. Let's resolve it as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3), [[Data Collection]] (1), [[Python (Programming Language)|Python]] (1), [[Microsoft Excel|Excel]] (1)
> **Analogies:** for example (8)
> **CLI Commands:** find (1), python (1), make (1)
> **UI Navigation:** go to (1), select the (1)
> **Definitions:** is a  (1), is an  (1)
> **Best Practices:** the key is (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Normalizing your data](https://www.linkedin.com/learning/machine-learning-with-python-foundations/normalizing-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/normalizing-your-data?u=76281980&t=0)** - [Narrator] An ideal dataset is one that has no missing values and has no values that deviate from the expected. Such a dataset hardly exists, if at all. In reality, most data sets have to be transformed or have [[Data Quality]] issues that need to be dealt with prior to being used for machine learning. This is what the third stage in the machine learning process is all about, [[Data Preparation]]. Data preparation is a process of making sure that our data is suitable for the machine learning approach that we choose to use. Specifically data preparation involves modifying or transforming the structure of our data in order to make it easier to work with. One of the most common ways to transform this structure of data is known as normalization or standardization. The goal of normalization is to ensure that the values of a feature share a particular property, this often involves scaling the data to fall within a small or specified range. Normalization is required by certain machine learning [[Algorithms]], it reduces the complexity of our models and can make our results easier to interpret. There are several ways to normalize data. The first is known as z-score normalization. Z-score normalization, which is also known as zero mean normalization, gets its name from the fact that the approach results in normalized values to have a mean of zero and a standard deviation of one. Given an original value V of feature F the normalized value for the feature V' is computed as V minus the feature mean denoted as F bar, divided
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-foundations/normalizing-your-data?u=76281980&t=94)** by the standard deviation of the feature, Sigma F. To illustrate how z-score normalization works, let's consider the feature with five values shown here. The mean of these values is 40,800, and if the deviation is 33,544. To normalize the fourth value we subtract 40,800 from 40,000 and divide the result by 33,544. This yields negative 0.024, using the same approach for the other values of the feature, the normalized values will now be -0.859,
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-with-python-foundations/normalizing-your-data?u=76281980&t=132)** - 0.5,
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-with-python-foundations/normalizing-your-data?u=76281980&t=133)** - 0.322,
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-with-python-foundations/normalizing-your-data?u=76281980&t=135)** - 0.024 and 1.705. Note that the mean of the normalized values is zero and the standard deviation is one. In most instances, z-score normalization works well. However, some problems and certain machine learning algorithms require that our data have a lower and upper bound such as zero and one. For that we need min-max normalization. With min-max normalization, we transform the original data to a new scale defined by user defined lower and upper bounds. Most often the new boundary and values are zero and one, mathematically this transformation is represented as shown here where V' is a normalized value, V is original value, minF is the minimum value for the feature, maxF is the maximum value for the feature, upperF is a user defined upper bound and lowerF is user defined lower bound. To illustrate how min-max normalization works let's consider the same set of five values. Assuming that we set the upper bound to one and the lower bound to zero, to normalize the third value, 30,000, we apply the min-max normalization formula, which yields 0.209. Using the same approach for the remaining four values, the min-max normalized values for the feature will now be 0, 0.14, 0.209, 0.326 and 1. Z-score and min-max normalization are usually suitable when there are no significant outliers in our data. If there are outliers in our data, a more suitable approach is log transformation.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-with-python-foundations/normalizing-your-data?u=76281980&t=229)** With log transformation we replaced the values of the original data with its logarithm as shown here, where V is original value for the feature and V' is a normalized value. The logarithm used for log transform can be the natural logarithm log base 10 or log base two. This is generally not critical, however, it is important to note that log transformation works only for values that are positive. A plan log transformation to the fifth value in our example data, we get 4.991, applied to the [[Representational State Transfer (REST)|rest]] of the values we now have 4.079, 4.380, 4.477, 4.602 and 4.991. Notice that this approach minimize the distance between the original outlier values, 12,000 and 98,000 and the rest of the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (3), [[Algorithms]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[Data Quality]] (1)
> **Versions:** 0.024 (2), 0.209 (2), 4.991 (2), 0.859 (1), 0.5 (1)
> **Definitions:** is a  (4), known as (3)
> **Code Identifiers:** minf (1), maxf (1), upperf (1), lowerf (1)
> **Speakers:** - 0 (3), - [narrator] (1)
> **CLI Commands:** make (2)
> **Warnings:** note that (2)
> **Analogies:** such as (1)

#### [How to normalize data in Python](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-normalize-data-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-normalize-data-in-python?u=76281980&t=0)** - Part of the objective of [[Data Preparation]], is to transform our data in order to make it more suitable for machine learning. During this step, we often have to restructure some of our data, so right. It conforms to a particular characteristic. This is known as normalization. There are several ways to normalize data in [[Python (Programming Language)|Python]], to illustrate how to normalize data let's import and preview a sample vehicles emissions data set into a data frame called vehicles. Our goal is to normalize the CO2 emissions column. So let's get descriptive [[Statistics]] for that column, vehicles specify the column that we want, which is CO2 emissions. And we call it that describe method to augment our understanding of the summary statistics. Let's also create a histogram that shows the distribution of values for the CO2 emissions column, the histogram visualizes, what we already see in the summary statistics, the carbon emissions values in the dataset have minimum, and maximum values of 29 and 1269.57 respectively. They also have mean and median values of 476.55 and 467.74 Respectively. This scikit-learn package provides several functions for transforming data in Python for min-max normalization. We first import the min-max scaler object from, the SK learn pre-processing sub package,
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-normalize-data-in-python?u=76281980&t=95)** to from SK learn, dot pre-processing, we import the min max scaler object. Next, we use the fit transform method of, the object to normalize our data. So we're going to call on new data CO2 emissions on the score MM. And it's going to be the min-max scaler object, the fit on the squad transform method within the method. We passed away, the data we want to transform, which is vehicles, and we want the CO2 emissions column. And then we output our results. Notice that our result is a nonPareil. We can convert it back to a data frame by using the [[Pandas (Software)|pandas]], data frame, construct a function. So let us right back CO2 emissions, the MM and a call the PD that data frame, construct a function. Then the function we're going to pass to it. Two things, our original data, CO2 emissions, M M, and the value for the columns arguments, which this time around will be just a list of the column name that we want, which is CO2 emissions. And we output our data. Once more. Now we can get summary statistics for our normalized data frame, so to do so we call the data frame CO2 emissions, on the score, MM.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-normalize-data-in-python?u=76281980&t=188)** And we call the describe method of the data frame. We can also visualize it, which is what we have here based on the summary statistics and the visualization. We see that the minimum value is now zero, while the maximum value is one. That is what we expect for min-max normalization. However, notice that compared to the original data, even though the scale of the X axis changed, the basic structure or shape of the histogram, remains the same, that is also expected for z-score normalization, We import the standard scaler object from the SK learn pre-processing sub package. So from SK learn that pre processing, we import standard scaler. Next, we normalize our data, convert it to a data frame and compute summary statistics like we did. In the previous example, finally, we visualize the data as well. As expected, the basic structure of the histogram remained intact. Even with the change to the scale of the X axis. This time, we also notice that our minimum and maximum values, are negative 3.8 and 6.7 respectively. Also note that the standard deviation is one, and the mean is effectively zero.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (6), [[Python (Programming Language)|Python]] (2), [[Data Preparation]] (1), [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** co2 (9)
> **Versions:** 1269.57 (1), 476.55 (1), 467.74 (1), 3.8 (1), 6.7 (1)
> **CLI Commands:** python (2), make (1)
> **Definitions:** known as (1), is a  (1)
> **Code Identifiers:** nonpareil (1)
> **Warnings:** note that (1)
> **Speakers:** - part (1)

#### [Sampling your data](https://www.linkedin.com/learning/machine-learning-with-python-foundations/sampling-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/sampling-your-data?u=76281980&t=0)** - [Instructor] As we prepare our data for machine learning, we sometimes have to reduce the number of rows in our data or split the data into two or more partitions. We do this because the data we have is too large or too complex to use in it's current form, or because we need to hold on to some of our data for later use. In Supervised Machine Learning, our goal is to create a model that maps a given input, which we call independent variables, to the given output, which we call the dependent variable. In order to properly evaluate whether our model is learning, we have to get an unbiased estimation of its performance using data that it has not previously seen. To do this, we must first split our previously labeled historical data into training and test datasets. We hold out the test data and use the training data to build or train our model. Then we evaluate our models performance using the test data. There are several ways to split data for this purpose. The most common approach is known as sampling. Sampling is a process of selecting a subset of the instances in a dataset as a proxy for the whole. In statistical terms, the original data set is known as the population, while the subset is known as a sample. Sampling comes in several flavors. To illustrate some of them, let's use a fictional population of 20 students. 12 women, and eight men. From this population, we intend to create a sample of five students. The first sampling approach we illustrate is random sampling without replacement. In this approach, we begin by randomly selecting a student from the population. For example, we select student number 11. Then we select student nine.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-foundations/sampling-your-data?u=76281980&t=95)** Notice that as we select students from the population, they are no longer part of the pool of students from which we can select. Next, we select student 15, student 19, and finally student three. This is random sampling without replacement. The next type of sampling is known as random sampling with replacement. In this approach, we also randomly select students from the population. However, there is one key difference. Before I tell you what it is, let's see if you notice on your own. Let's begin by randomly selecting the first four students. The first student we select is student 11, then student nine, student five, and then student 19. Have you noticed a difference yet? I'm sure you have. As we select students from the population, they remain part of the pool of students from which we can select in subsequent trials. This is the replacement part of random sampling with replacement. As you can imagine, this means that we could potentially select the same student more than once for our sample. This is exactly what happens here. Student nine is selected twice for the sample. This may seem like an odd way to sample data, but it actually is a very important technique in machine learning known as bootstrapping. Bootstrapping is often used to evaluate and estimate the feature performance of a supervised machine learning model when we have very little data. The next sampling approach is known as stratified random sampling. Stratified random sampling is a modification of the simple random sampling approach and ensures that the distribution
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-with-python-foundations/sampling-your-data?u=76281980&t=187)** of values for a particular feature within the sample matches the distribution of values for the same feature in the overall population. To do this, the instances in the original data, the population, are first divided into homogenous subgroups known as strata. In our example, let's assume that we intend to stratify based on gender. This means that we first need to group our population by gender, recall that our goal is to create a sample of five students out of the 20 students in our population. In other words, our sample should be a fourth of the students in the population. This also means that our sample should be a fourth of the students from each stratum or group. Since we have 12 women in the population, we randomly select three women for our sample. And since we have eight men in the population, we randomly select two men for our sample. Notice that the sample has the same three to two gender distribution of women to men as the overall population. That is the benefit of this sampling approach.

> [!info]- Semantic Content
>
> **Definitions:** known as (7), is a  (3), means that (3), in other words (1)
> **Analogies:** for example (1), imagine (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [How to sample data in Python](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-sample-data-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-sample-data-in-python?u=76281980&t=0)** - Prior to training the supervised machine learning model, we usually have to split the roles in our data into training and test sets using one of several sampling approaches. To illustrate how to split data using sampling, let's import and preview a dataset of vehicles evaluated by the EPA between the years 1984 and 2018. Before we split our data, you must first separate the dependent variable from the independent variables. If we assume that the CO2 emissions column is a dependent variable, then we can create a data frame called Y based on that column alone. To do this, we create a string variable called response for the name of the dependent variable column, CO2 emissions. Next, we create our data frame by sub-setting based on this variable. And we preview our data frame. To create a data frame of the independent variables, we first create a list called predictors of all the columns in the vehicles data frame. So we need our list called predictors, using the list command. Now the vehicles, not columns. That gives us a list of all the columns in the vehicles data set. Next, we remove the CO2 emissions column from the list. Let's remove, you're going to recall the remove method,
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-sample-data-in-python?u=76281980&t=95)** pass to it, the column name, and let's see what we have. That gives us all the columns except the CO2 emissions column. Using predictors, we can now create a data frame called X based on the remaining columns in the list, the independent variables. So we call it X, let's go to vehicles. We can preview our X data frame. Perfect. The first approach we use to split our data is simple, random sampling. The train test split function from the SK learn model selection sub package allows us to do this. Let's import it. Next, we pass our independent variables, X and dependent variable Y to the function which we transfer datasets. We call data sets X underscore train, X underscore tests, Y underscore train, and Y underscore test and the train test split function. We pass to it X and Y. The X train data frame holds the independent variables of the training set. It has 27,734 rows and 11 columns. The Y train data frame holds the dependent variables of the training set. It also has 27,734 rows but one column. The X test data frame holds
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-sample-data-in-python?u=76281980&t=187)** the independent variables of the test set. It has 9,245 rows and 11 columns. Finally, the Y test data frame holds the dependent variables of the test set. It also has 9,245 rows, but one column. The original data has 36,979 rows. This means that the 9,245 rows in the two test sets represent 25% of the original data. By default, the train test split function allocates 25% of the original data to the test set. If we want to override this behavior, we can do so by setting either the train size argument or the test size argument of the function. For example, we can allocate 40% of the original data to the test set as follows: within our train test split function We specify an additional argument called tests underscore size, and we set it to 0.4. We see that 14,792 rows are now assigned to the test set. That is 40% of the 36,979 rows from the original dataset. The second approach we use to split our data is stratified random sampling. With this approach, our objective is to maintain the same distribution of values for a specific column between the original training and test data. To contrast the two sampling approaches, let's split our data once again,
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-sample-data-in-python?u=76281980&t=281)** using simple random sampling. This time, we want 1% of the original data allocated to the test set. Notice that in our code, we also said the random state argument. This helps ensure that the result in this tutorial are reproducible by you and me at a later time. If our objective for using stratified random sampling is to maintain the same distribution of values for the drive column, between the original training and test sets, then let's get the distribution for the drive column in the original data. So that's X, specify the column we want, which is drive, and we get the value counts. Within the value counts method we specify normalize is equal to true, and that gives us the distribution of values for the drive column. We do the same for the test set, which was created based on simple random sampling. Use X underscore test, specify the column we want, which is drive, the value counts method within the method we're supposed to specify that normalize is equal to true. Let me get our distribution of values. Looking at the two distributions, we notice that there is a small but noticeable difference in the values. Now, let's split the data using stratified random sampling. Stratifying by drive. To do so, we specify an additional argument stratify, and we specify the column we want to stratify by, which happens to be drive, and we can run our code.
>
> **[6:14](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-sample-data-in-python?u=76281980&t=374)** Once again, we can get the distribution for the drive column within the test data. Looking at these two distributions, X test and the original X drive distribution, we can see the distribution of values for the drive column in the test set created by stratified random sampling, more closely mimics the original data above.

> [!info]- Semantic Content
>
> **Env Vars:** co2 (4), epa (1)
> **Definitions:** is a  (2), means that (1)
> **Versions:** 0.4 (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - prior (1)

#### [Reducing the dimensionality of your data](https://www.linkedin.com/learning/machine-learning-with-python-foundations/reducing-the-dimensionality-of-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/reducing-the-dimensionality-of-your-data?u=76281980&t=0)** - [Instructor] As we prepare our data for machine learning, we sometimes have to reduce the size or complexity of our data. There are several ways to do this. One approach is sampling, which helps us reduce the number of rows in our data. Another approach is dimensionality reduction. As the name suggests, dimensionality reduction is simply the reduction in the number of features or dimensions in a dataset. Dimensionality reduction is an important step in the machine learning process because it helps reduce the time and storage required to process data. It improves data visualization and model interpretability. It also helps avoid the curse of dimensionality. The curse of dimensionality is a phenomenon in machine learning that describes the eventual reduction in the performance of a model as a dimensionality of the training data increases. Specifically, as we increase the number of features that we use to build a model, we eventually also have to increase the number of instances in the training data. If we don't do this, the performance of our model will eventually degrade. The reality is that we are not always able to sufficiently increase the number of instances in any given data set. As a result, we should sometimes focus our attention on reducing the dimensionality of our data in order to mitigate the impact of the curse of dimensionality. In other words, we need to identify the optimal number of features to use. There are two common approaches to dimensionality reduction. They are feature selection and feature extraction. The idea behind feature selection is to identify the minimal set of features that result in the model performance reasonably close to that obtained by a model trained in all the features.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-foundations/reducing-the-dimensionality-of-your-data?u=76281980&t=95)** The assumption with feature selection is that some of the features or independent variables are either redundant or irrelevant and can be removed without having much of an impact on the performance of the model. This is why feature selection is sometimes referred to as variable subset selection. To illustrate how this works, let's assume that our goal is to build a supervised machine learning model that uses the six independent variables of loan amount, loan grade, loan purpose, income, age, and credit score to predict loan outcomes. With feature selection, we identify a subset of the features that result in the model that performs almost as well or possibly better than one built with all six original features. With feature extraction, our goal is to use mathematical functions to transform a dataset with high dimensionality to one with low dimensionality, or like feature selection, where the final set of features is a subset of the original set of features. The feature extraction process results in a final set of features that are completely different from the original set. The new features are simply a projection of the original ones. This is why feature extraction is also known as feature projection. To illustrate how feature extraction works, let's also assume that our goal is to build a supervised machine learning model that uses the independent variable shown here to predict loan outcomes, which is the default dependent variable. With feature extraction, we apply a mathematical transformation that creates these three new features from the original ones.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-with-python-foundations/reducing-the-dimensionality-of-your-data?u=76281980&t=187)** Feature extraction is a very efficient approach to dimensionality reduction. However, it does present one notable disadvantage. As you can see in this example, the values for the newly created features are not easy to interpret and may not make much sense to a user.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (1), in other words (1), known as (1)
> **CLI Commands:** make (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 5. Types of Machine Learning Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Classification vs. regression problems](https://www.linkedin.com/learning/machine-learning-with-python-foundations/classification-vs-regression-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/classification-vs-regression-problems?u=76281980&t=0)** - [Instructor] Modeling is the fourth and most well-known stage in the machine learning process. It involves choosing and applying the appropriate machine learning approach that works well with the data we have and solves the problem that we intend to solve. Before we build a model, we must be clear about our objective. In supervised machine learning, our objective is to build a model that maps a given input, which we call the independent variables, to the given output, which we call the dependent variable. Depending on the nature of the dependent variable, our problem can either be called a classification problem or a regression problem. If our dependent variable is a categorical value such as color, yes or no, or the weather, then our model is known as a classification model. In the example shown here, we intend to use loan amount, loan grade, and loan purpose to predict loan default, which has categorical values of yes or no. If we intend to predict a continuous value such as age, income, or temperature, then our model is known as a regression model. In the example shown here, we intend to use profession, length of employment, and highest degree earned as predictors for income, which is a continuous value. Most popular machine learning [[Algorithms]], such as [[Decision Trees]], naive Bayes, [[Neural Networks]], support vector machines, and K-nearest neighbors can be used to solve both regression and classification problems. However, there exists a family of algorithms that are tailor-made for regression and regression alone. Some of them are listed here. After training a supervised machine learning model,
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-foundations/classification-vs-regression-problems?u=76281980&t=93)** it is important that we evaluate it to see how well suited it is to the problem at hand. This is the goal of the evaluation stage in the machine learning process. In order to get an unbiased evaluation of the performance of our model, we must train the model with a different dataset from the one we use to evaluate it. We call the data set we use to the training model the training data, and we call the data we use to evaluate the model the test data. During the evaluation process, we provide a model with instances of the independent variables of the test data alone and allow it to predict what it thinks the corresponding values of the dependent variable should be. If we are trying to solve a classification problem, then we use predictive accuracy as a measure of how well our model does against a test data or evaluation data. In this example, by comparing the predicted and actual values, we see that our model correctly predicted the labels of three out of four tests instances. Therefore, the predictive accuracy of the model is three divided by four, which is 0.75 or 75%. This means that going forward, we estimate that the predictions of our model will be right 75% of the time. If the problem we are trying to solve is a regression problem, then we use mean absolute error as a measure of our models performance. In this example, we get the total of the absolute differences between the predicted and actual income values, and divide the result by the number of test instances. This gives us 3000. This means that going forward,
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-python-foundations/classification-vs-regression-problems?u=76281980&t=186)** we estimate that the predictions of our model will be off the mark by an average of about plus or minus 3000.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Decision Trees]] (1), [[Neural Networks]] (1)
> **Definitions:** is a  (3), known as (2), means that (2)
> **Analogies:** such as (3)
> **Versions:** 0.75 (1)
> **Speakers:** - [instructor] (1)

#### [How to build a machine learning model in Python](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-build-a-machine-learning-model-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-build-a-machine-learning-model-in-python?u=76281980&t=0)** - In this exercise, we'll use a historical data set, to build a [[Linear Regression]] model that predicts the number of bike rentals. Based on weather conditions. We start by importing the Panda's package. Then we import the data into a data frame called bikes and preview it. Now that we have our data, let's try to understand it. First, we get a concise summary of the structure of the data. From the summary. We can tell that there are 731 rows in the data set and that all four columns are numeric. Next, we get summary [[Statistics]] for the data. The statistics show the mean minimum, maximum standard deviation and present our values for the four features in the dataset. Linear regression models assume that, there exists a linear relationship between the predictors and the response. Let's see if this assumption holds true in our dataset, to ensure that our plot show up in line, we run the map plot lib inline command. Then we create a scatter plot, between the predictive variable temperature, and the response variable rentals. The chart shows that there is a positive linear relationship between temperature and rentals. This means that as the temperature increases, so does the number of bike rentals. Next, we evaluate the relationship between humidity and rentals. This chart shows that there is a negative, linear relationship between humidity and rentals.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-build-a-machine-learning-model-in-python?u=76281980&t=96)** This means that as humidity increases, the number of bike rentals decreases, finally, we evaluate the relationship between wind speed and rentals. The chart also shows a negative linear relationship between wind speed and rentals. This means that the number of bike rentals decreases, as wind speed and picks up, before we build our machine learning model, we need to split the data into training and test sets, prior to doing this, we must first separate the dependent variable, from the independent variables. Let's start by creating a data frame called Y, for the dependent variable. Then we split off the independent variables, into a data frame called X. Next, We import the train test split function, from the SK learn model selection sub package, then we split the X and Y data frames into X train X test, Y train and Y test to build a linear regression model in [[Python (Programming Language)|Python]], we need to import the linear regression class, from the SK learn linear model sub package. We then use the function to build our model. So we use a linear regression function, within the function we call the fit method of the function, and we pass to it X train, and Y train, the objective of linear regression is to estimate,
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-build-a-machine-learning-model-in-python?u=76281980&t=192)** the intercept and slope values for a regression line, that best fits the data. We can get the estimated intercept value for a model by referring to the intercept attributes of the model. The intercept value for our regression line is 3800.68. We can also get the estimated slope values, or coefficients for the regression line by referring, to the co-ed attributes of the model, the model coefficients correspond the order, in which the independent variables are listed, in the training data. This means that the coefficient for temperature is 80.35. The coefficient for humidity is negative 4665.74. And the coefficient for wind speed is negative 196.22. one way to evaluate a linear regression model, is by calculating the coefficient of determination, or R squared. The closer this metric is to one, the better the model is. Let's get the R squared for a model. We call this score method of the model and we pass to it X test, as well as Y test. The R squared value tells us that our model is able to explain 98.2% of the variability in the response values, of the test data. That is very good. Another way to evaluate a linear regression model,
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-with-python-foundations/how-to-build-a-machine-learning-model-in-python?u=76281980&t=287)** is to evaluate how accurate it is. This means comparing the predicted values, against the actual values. First let's get the models predicted response values, for the test data. We're going to call our predictions, why pred and we get the models predictions by calling the predict method of the model and we pass to it, X test. Next, we import the mean absolute error function, from the SK Learn that metrics sub package and calculate the mean absolute error, between the actual response values, and the predicted response values. So mean absolute error function, passed to it Y, underscore test. Then we can pass to it Y, underscore pred. The mean absolute error implies that going forward. We should expect the predictions of our model, to be off the mark by an average of plus or minus 194 bikes. That's pretty good. Considering the little amount of work we put into a model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (8), [[Statistics]] (2), [[Python (Programming Language)|Python]] (1)
> **Definitions:** means that (4), is a  (2), we call this (1)
> **Versions:** 3800.68 (1), 80.35 (1), 4665.74 (1), 196.22 (1), 98.2 (1)
> **CLI Commands:** python (1)
> **Speakers:** - in (1)

#### [Common machine learning algorithms](https://www.linkedin.com/learning/machine-learning-with-python-foundations/common-machine-learning-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/common-machine-learning-algorithms?u=76281980&t=0)** - [Instructor] During the modeling stage, it's often beneficial to experiment with multiple machine learning [[Algorithms]] and to fine tune their parameters to determine which one performs best on our specific problem. There are several models to choose from. The specific characteristics of our data and the nature of the problem we intend to solve usually dictates which algorithms we can or cannot use. Let's explore a few of them. The machine learning model we built in the previous video was a [[Linear Regression]] model. It assumes that the relationship between a dependent variable and one or more independent variables is linear. As a result, the algorithm tries to find a straight line that does the best job of modeling this relationship using a technique known as ordinary least squares. As the name suggests, the linear regression algorithm is used to solve regression problems, such as predicting how many bikes customers are likely to rent based on weather conditions. Unlike linear regression, the [[Logistic Regression]] algorithm models the relationship between the independent variables and the dependent variable using an S-shaped curve known as a sigmoid curve. The curve is based on what is known as a logit function, which assumes a linear relationship between the predictors and the log odds of the outcome. In spite of its name, logistic regression is not used to solve regression problems.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-foundations/common-machine-learning-algorithms?u=76281980&t=95)** It's most often used for binary classification problems, such as predicting whether a customer will or will not buy a product based on demographic or social economic indicators. As the name suggests, a decision tree represents the relationship between the values of one or more independent variables and those of a dependent variable using an inverted tree-like structure made up of decision nodes and leaf nodes connected by branches. [[Decision Trees]] can solve both classification and regression problems. Their intuitive nature makes them particularly useful in situations where transparency is crucial. For example, when building a model that makes recommendations on loan decisions based on whether a borrower will or will not default on their loan. Inspired by biological neurons, [[Neural Networks]] are particularly effective at processing patterns of inputs and outputs using a sequence of mathematical neurons arranged in layers. This makes them invaluable for tasks such as image detection, [[Speech Recognition]], and language translation. Neural networks are the basis of most of the recent groundbreaking advances in AI, such as deep and [[Large Language Models (LLM)|large language models]]. The algorithms discussed so far are all supervised machine learning algorithms,
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-with-python-foundations/common-machine-learning-algorithms?u=76281980&t=187)** each with its particular set of strengths and weaknesses. Sometimes instead of using a single algorithm to solve a problem, we can bring several weak algorithms together to build a stronger and more robust model. These types of models are known as ensembles. Ensembles are typically used for both classification and regression tasks and are known for their [[Resiliency]] and effectiveness in capturing difficult patterns in the data. Random forests is a common ensemble learning technique that is made up of several decision trees known as a forest trained in parallel on subsets of the data. In an ensemble, the allocation function determines how much of the training data to assign to each member of the ensemble, while the combination function determines how the output of each member is to be combined into a single output. Gradient boosting machines is another common ensemble learning technique. It is made up of several decision trees trained in a sequential manner where each tree tries to correct the mistakes of the previous one. Unlike supervised machine learning where the data has predictive variables and outcome labels, the data we use for unsupervised learning lacks predefined labels or outcome variables. The objective of unsupervised learning algorithms is to identify inherent patterns, structures,
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-with-python-foundations/common-machine-learning-algorithms?u=76281980&t=282)** or groupings in data without much guidance on what to look for. Once such algorithm is [[k-means clustering]]. The algorithm uses an iterative approach to assign each observation in the data to one of k clusters based on similarity. The objective is to create groupings or clusters where items within the cluster are as similar as possible, while ensuring these items are as different as possible from items in other clusters. K-means clustering is widely used for tasks such as customer segmentation, document labeling, and anomaly detection. Another common approach to unsupervised machine learning is the use of association rules. Association rules are a set of if-then statements that describe the co-occurrence of items or events within data. They're used in a variety of domains, but are most often used in market basket analysis to find relationships between items that customers tend to purchase together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (6), [[Linear Regression]] (3), [[Decision Trees]] (3), [[Logistic Regression]] (2), [[Neural Networks]] (2)
> **Definitions:** known as (5), is a  (1)
> **Analogies:** such as (5), for example (1)
> **CLI Commands:** find (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with applied machine learning](https://www.linkedin.com/learning/machine-learning-with-python-foundations/next-steps-with-applied-machine-learning-23461463?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-foundations/next-steps-with-applied-machine-learning-23461463?u=76281980&t=0)** - [Instructor] Congrats. You now know what it means for machines to learn and the different ways in which machines learn. You've learned how to collect data, explore data, and prepare data for machine learning, both conceptually and using [[Python (Programming Language)|Python]]. You also now know how to build, evaluate, and interpret the results of a machine learning model using Python. The foundational knowledge and skills you've acquired in this course should serve as a stepping stone to continue learning and exploring how to solve more complex problems. Here are a few recommended next steps. In this course, we wrap things up by building a simple [[Linear Regression]] model. This is one of many models we can build in Python. I encourage you to explore my other [[LinkedIn]] learning courses in the machine learning with Python series. Next up in the series is machine learning with Python, [[Decision Trees]], where we explore the supervised machine learning approach, known as a decision tree, and learn how to build both a classification tree as well as a regression tree in python. Then you can step into machine learning with Python, [[Logistic Regression]], where you will learn about logistic regression and how to build and interpret the results of a logistic regression model in python. The next course in the series introduces the unsupervised machine learning approach,
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-foundations/next-steps-with-applied-machine-learning-23461463?u=76281980&t=94)** known as [[k-means clustering]]. In that course, you will learn how the algorithm works as well as how to segment data using K-means in Python. The fifth course in the series is machine learning with Python, Association Rules. This course explains what association rules are and walks learners through how to use association rules for market, basket analysis in Python. Besides courses that explore how to build other machine learning models, another good next step is to explore courses that highlight the importance of [[Ethics]] in [[Data Collection]] and use. An example of such a course is [[Data Ethics]], watching out for data misuse. Finally, I recommend that you continue to practice what you've learned, find new problems to solve, find interesting datasets on which to practice your new skills. The journey into the world of machine learning with Python is a lifelong one. Thanks for joining me on this first step. I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (12), [[Logistic Regression]] (3), [[Linear Regression]] (1), [[LinkedIn]] (1), [[Decision Trees]] (1)
> **CLI Commands:** python (12), find (2)
> **Definitions:** known as (2), is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Frederick Nwanganga]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Machine Learning
- Artificial Intelligence (AI)

## Path Context

### In [[Improve Your Programming Skills with Artificial Intelligence]]
← [[Hands On Ai Build Your Own Gpts]] | **2 of 4** | [[AI Pair Programming with GitHub Copilot]] →

### In [[Fundamentals to Become a Machine Learning Engineer]]
← [[Artificial Intelligence Foundations- Machine Learning]] | **3 of 7** | [[Deep Learning Getting Started]] →

### In [[Develop with Python for AI and Machine Learning]]
**1 of 6** | [[Machine Learning with Python- Decision Trees]] →

### In [[Machine Learning with Python Professional Certificate by Anaconda]]
← [[Artificial Intelligence Foundations- Machine Learning]] | **2 of 6** | [[Machine Learning with Python- Decision Trees]] →

## Part of

- [[Machine Learning with Python Professional Certificate by Anaconda]]

## Appears In

- [[Improve Your Programming Skills with Artificial Intelligence]]
- [[Fundamentals to Become a Machine Learning Engineer]]
- [[Develop with Python for AI and Machine Learning]]
- [[Machine Learning with Python Professional Certificate by Anaconda]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- Association Rules]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- k-Means Clustering]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- Logistic Regression]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- Decision Trees]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)