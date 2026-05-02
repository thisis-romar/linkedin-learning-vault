---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: deep-learning-getting-started
url: "https://www.linkedin.com/learning/deep-learning-getting-started"
level: Intermediate
updated: 1/19/2024
learners: 35685
skills:
  - Machine Learning
  - Artificial Intelligence (AI)
  - Deep Learning
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFK_x_qDpO55Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705688041751?e=2147483647&amp;v=beta&amp;t=tS5Y2Il8w9vSGgsllmuy8tKczb9lItCRb1kUSuS9M2w"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your Skills in Deep Learning and Neural Networks]]'
  - '[[Fundamentals to Become a Machine Learning Engineer]]'
  - '[[Moving from Data Scientist to Data Analyst]]'
  - '[[Getting Started with AI and Machine Learning]]'
prev_courses:
  - null
  - '[[Machine Learning with Python- Foundations]]'
  - '[[Python Statistics Essential Training]]'
  - '[[Machine Learning Foundations- Linear Algebra]]'
next_courses:
  - '[[Artificial Intelligence Foundations- Neural Networks]]'
  - '[[Deep Learning- Model Optimization and Tuning (2022)]]'
  - '[[Apache Spark Essential Training- Big Data Engineering]]'
  - '[[Hands-On AI- Image Processing with Python]]'
path_nav: '[{"path":"Advance Your Skills in Deep Learning and Neural Networks","position":1,"total":8,"prev":null,"next":"Artificial Intelligence Foundations- Neural Networks"},{"path":"Fundamentals to Become a Machine Learning Engineer","position":4,"total":7,"prev":"Machine Learning with Python- Foundations","next":"Deep Learning- Model Optimization and Tuning (2022)"},{"path":"Moving from Data Scientist to Data Analyst","position":6,"total":10,"prev":"Python Statistics Essential Training","next":"Apache Spark Essential Training- Big Data Engineering"},{"path":"Getting Started with AI and Machine Learning","position":3,"total":7,"prev":"Machine Learning Foundations- Linear Algebra","next":"Hands-On AI- Image Processing with Python"}]'
path_count: 4
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - topic/software-development
  - skill/machine-learning
  - skill/artificial-intelligence-ai
  - skill/deep-learning
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Deep%20Learning%20Getting%20Started.md)

![Deep Learning Getting Started](https://media.licdn.com/dms/image/v2/D560DAQFK_x_qDpO55Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705688041751?e=2147483647&amp;v=beta&amp;t=tS5Y2Il8w9vSGgsllmuy8tKczb9lItCRb1kUSuS9M2w)

# Deep Learning Getting Started

> Deep learning as a technology has grown leaps and bounds in the last few years. More and more AI solutions use deep learning as their foundational technology. Studying this technology, however, has several challenges. Most learning resources are math-heavy and are difficult to navigate without good math skills. IT professionals need a simplified resource to learn the concepts and build models quic

> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started) | Intermediate | 36K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Getting started with deep learning](#getting-started-with-deep-learning)
  - [Prerequisites for the course](#prerequisites-for-the-course)
  - [Setting up the environment](#setting-up-the-environment)
- [**1. Introduction to Deep Learning**](#1-introduction-to-deep-learning) (6 videos)
  - [What is deep learning?](#what-is-deep-learning)
  - [Linear regression](#linear-regression)
  - [An analogy for deep learning](#an-analogy-for-deep-learning)
  - [The perceptron](#the-perceptron)
  - [Artificial neural networks](#artificial-neural-networks)
  - [Training an ANN](#training-an-ann)
- [**2. Neural Network Architecture**](#2-neural-network-architecture) (5 videos)
  - [The input layer](#the-input-layer)
  - [Hidden layers](#hidden-layers)
  - [Weights and biases](#weights-and-biases)
  - [Activation functions](#activation-functions)
  - [The output layer](#the-output-layer)
- [**3. Training a Neural Network**](#3-training-a-neural-network) (10 videos)
  - [Setup and initialization](#setup-and-initialization)
  - [Forward propagation](#forward-propagation)
  - [Measuring accuracy and error](#measuring-accuracy-and-error)
  - [Back propagation](#back-propagation)
  - [Gradient descent](#gradient-descent)
  - [Batches and epochs](#batches-and-epochs)
  - [Validation and testing](#validation-and-testing)
  - [An ANN model](#an-ann-model)
  - [Reusing existing network architectures](#reusing-existing-network-architectures)
  - [Using available open-source models](#using-available-open-source-models)
- [**4. Deep Learning Example 1**](#4-deep-learning-example-1) (6 videos)
  - [The Iris classification problem](#the-iris-classification-problem)
  - [Input preprocessing](#input-preprocessing)
  - [Creating a deep learning model](#creating-a-deep-learning-model)
  - [Training and evaluation](#training-and-evaluation)
  - [Saving and loading models](#saving-and-loading-models)
  - [Predictions with deep learning models](#predictions-with-deep-learning-models)
- [**5. Deep Learning Example 2**](#5-deep-learning-example-2) (4 videos)
  - [Spam classification problem](#spam-classification-problem)
  - [Creating text representations](#creating-text-representations)
  - [Building a spam model](#building-a-spam-model)
  - [Predictions for text](#predictions-for-text)
- [**6. Deep Learning Exercise**](#6-deep-learning-exercise) (4 videos)
  - [Exercise problem statement](#exercise-problem-statement)
  - [Preprocessing RCA data](#preprocessing-rca-data)
  - [Building the RCA model](#building-the-rca-model)
  - [Predicting root causes with deep learning](#predicting-root-causes-with-deep-learning)
- [**Conclusion**](#conclusion) (1 videos)
  - [Extending your deep learning education](#extending-your-deep-learning-education)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Getting started with deep learning
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/getting-started-with-deep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/getting-started-with-deep-learning?u=76281980&t=0)** - [Kumaran] The field of artificial intelligence and machine learning is growing by leaps and bounds in the last few years.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-getting-started/getting-started-with-deep-learning?u=76281980&t=8)** The key technology that is driving these innovations is deep learning.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-getting-started/getting-started-with-deep-learning?u=76281980&t=13)** Deep learning has revolutionized how humans interact with machines today.
>
> **[0:17](https://www.linkedin.com/learning/deep-learning-getting-started/getting-started-with-deep-learning?u=76281980&t=17)** This course aims to teach these basics with simple explanations and examples.
>
> **[0:23](https://www.linkedin.com/learning/deep-learning-getting-started/getting-started-with-deep-learning?u=76281980&t=23)** My name is Kumaran Ponnambalam.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-getting-started/getting-started-with-deep-learning?u=76281980&t=26)** In this course, I will explain the basics of deep learning concepts with easy explanations and examples.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-getting-started/getting-started-with-deep-learning?u=76281980&t=33)** I will first walk through the steps for building deep learning models.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-getting-started/getting-started-with-deep-learning?u=76281980&t=37)** Then I will demonstrate how to build them easily using Keras and TensorFlow with a couple of examples.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-getting-started/getting-started-with-deep-learning?u=76281980&t=45)** An exercise project will help the students to assess the skills learned.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-getting-started/getting-started-with-deep-learning?u=76281980&t=50)** Let's now start building a few deep learning models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (5), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[TensorFlow]] (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [kumaran] (1)

#### Prerequisites for the course
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=0)** - [Instructor] Before we begin the course, let's go through the course objectives, scope, and prerequisites.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=7)** Deep learning is a vast domain with a variety of tools and technologies.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=12)** The tool set is evolving rapidly.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=15)** Multiple courses exist that cover various aspects of deep learning including concepts, libraries, tools, and implementations.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=24)** One of the key components of deep learning is the math involved in it.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=28)** Some courses cover this math in-depth, and some ignore them as the tools take care of its implementation.
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=35)** The same applies to various tools used for deep learning as they take care of the implementation of the algorithms and techniques.
>
> **[0:43](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=43)** So, what does this course cover?
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=45)** The goal of this course is to educate students on the basic concepts of deep planning.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=51)** It aims to focus on what happens behind-the-scenes in deep learning, in a simple, easy to understand language.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=58)** We will use the Keras toolkit for our examples.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=62)** Keras take care of a lot of the heavy lifting involved in deep learning and helps in quickly building robust models?
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=68)** We will also cover the math involved in deep learning, but minimally.
>
> **[1:13](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=73)** We have omitted deeper topics for ease of learning.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=76)** We also have some simple examples of getting started with deep learning.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=81)** Our goal is to introduce deep learning and help students move forward with additional advanced learning.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=87)** What are the prerequisites for the course?
>
> **[1:30](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=90)** Students are expected to be familiar with machine learning concepts and technologies.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=95)** Hands-on experience is preferred.
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=97)** They should also be familiar with Python programming and using Jupiter notebooks.
>
> **[1:43](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=103)** We do not cover the usage of Keras and TensorFlow.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=106)** So it is recommended to compliment this course with those focusing on the use of Keras.
>
> **[1:51](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=111)** Familiarity with other tools like scikit-learn and NLTK libraries are also preferred.
>
> **[1:57](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=117)** Here is the list of complimentary courses that would help the students in their coding skills with deep learning.
>
> **[2:04](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=124)** These are, "Building and Deploying Deep Learning Applications with TensorFlow", "Building Deep Learning Applications with Keras 2.0" and "Deep Learning Model Optimization and Tuning".
>
> **[2:15](https://www.linkedin.com/learning/deep-learning-getting-started/prerequisites-for-the-course?u=76281980&t=135)** let's now get started with deep learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (14), [[TensorFlow]] (2), [[Algorithms]] (1), [[Python (Programming Language)|Python]] (1), [[Programming]] (1)
> **CLI Commands:** python (1)
> **Env Vars:** nltk (1)
> **Versions:** 2.0 (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### Setting up the environment
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=0)** - [Instructor] In this video, we will set up the exercise files and the environment to use in this course.
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=6)** All course exercises are built with Python 3.8.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=10)** We will be using Anaconda and Jupyter Notebooks for these exercises.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=15)** You can download and install Anaconda from the website, [anaconda.com/products/individual](https://anaconda.com/products/individual) for your specific operating system.
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=25)** Once downloaded, we will go to the Anaconda UI.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=29)** Here we go to environments.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=31)** We create a new environment called deeplearning.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=40)** We choose Python 3.8.
>
> **[0:43](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=43)** We hit create to create the environment.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=46)** This may take some time to set up.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=49)** The deep learning environment is set up now.
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=52)** We now go back and choose the deep learning environment in the applications.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=58)** Then we go to Jupyter Notebook and hit install.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=63)** This will install Jupyter Notebooks in your environment.
>
> **[1:07](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=67)** The notebook is installed now, and you will now see the large button here.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=72)** Now go to the command prompt.
>
> **[1:14](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=74)** Please note that if you're using Windows, you would want to use the Anaconda command prompt for the same.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=81)** The exercise files for this course has been downloaded in the folder, /users/linkedin/documents/ExerciseFiles.
>
> **[1:30](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=90)** Please download the exercise files on your computer on a similar folder.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=95)** Navigate to that folder on the command prompt.
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=97)** We can explore the files in this folder using the ls command.
>
> **[1:42](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=102)** Now let's activate the new virtual environment we created using the command, conda activate deeplearning.
>
> **[1:56](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=116)** You now see the command prompt with the deep planning tag in it.
>
> **[1:59](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=119)** Then we can start the Jupyter Notebook server using the command jupyter notebook.
>
> **[2:08](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=128)** Please make sure that you are in the same folder where the exercise files are before using this command.
>
> **[2:16](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=136)** This command opens the Jupyter Notebook in the browser.
>
> **[2:19](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=139)** The exercise files and the data files can be seen in the route directory.
>
> **[2:23](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=143)** We will use these files in the later exercises.
>
> **[2:26](https://www.linkedin.com/learning/deep-learning-getting-started/setting-up-the-environment?u=76281980&t=146)** In the next chapter, we will discuss the basics of deep learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (4), [[Deep Learning]] (3), [[Python (Programming Language)|Python]] (2), hit (2), [[Microsoft Products|Products]] (1)
> **Tools:** jupyter (6), anaconda (5), command prompt (4)
> **Exercise Files:** exercise files (5), download the (1)
> **Prerequisites:** set up (3), install (3)
> **UI Navigation:** go to (4), navigate to (1)
> **CLI Commands:** python (2), ls (1), make (1)
> **Versions:** python 3 (2)
> **URLs:** [anaconda.com](https://anaconda.com) (1)


### 1. Introduction to Deep Learning

[↑ Back to Table of Contents](#table-of-contents)

#### What is deep learning?
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=0)** - [narrator] Let's begin the course by reviewing the concept of Deep Learning.
>
> **[0:04](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=4)** What is Deep Learning?
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=6)** Deep Learning is a field within machine learning that deals with building and using neural network models.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=13)** Neural networks with more than three layers are typically categorized as Deep Learning networks.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=19)** Neural networks mimic the functioning of a human brain.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=22)** They're organized similar to the brain cells and imitate how humans process data and make decisions.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=29)** Deep Learning is a field that has seen exponential growth in the last few years.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=34)** While the algorithms for neural networks have existed for some time the advances in large scale data processing, as well as inference technologies like GPU's have spurred their popularity for real world applications.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=49)** Deep Learning has been extremely popular in natural language processing as the neural network architectures are ideal for dealing with unstructured data.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=59)** For the same reason, they are also popular for speech recognition and synthesis applications.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=65)** Image recognition is another domain where Deep Learning has made inroads.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=69)** Self-driving cars is a bleeding edge technology that is being powered by Deep Learning.
>
> **[1:15](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=75)** Applications that require complex learning of behaviors are usually suited for Deep Learning.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=81)** The applications of Deep Learning are getting wide popularity in very domains like customer experience, healthcare and robotics.
>
> **[1:30](https://www.linkedin.com/learning/deep-learning-getting-started/what-is-deep-learning?u=76281980&t=90)** We will now start with the concepts of Deep Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (11), [[Neural Networks]] (3), data (2), [[Algorithms]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Env Vars:** gpu (1)
> **Cross-References:** in the last (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)

#### Linear regression
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=0)** - [Instructor] One of the basic statistical concepts that is used in machine learning is linear regression.
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=6)** It forms a key foundation for deep learning.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=9)** Linear regression is a linear model that explains the relationship between two or more variables.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=16)** We have a dependent variable y and an independent variable x.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=21)** The model provides an equation to compute the value of y based on the value of x.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=28)** To compute this, we need two constants called a, which is the slope, and an intercept, which is b.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=34)** The formula for computing y is ax plus b.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=38)** This provides a linear relationship between y and x.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=42)** In reality, the relationship may not be perfectly linear, so there will be errors in predictions.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=50)** Linear regression is used in regression problems to predict continuous variables.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=55)** It can be applied for multiple independent variables like x1, x2, up to xn.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=62)** In which case, there will be an equal n slope of values a1, a2, up to an.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=69)** Let's look at an example for building a linear regression model.
>
> **[1:13](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=73)** When we say we build a linear regression model, we are determining the value of the slope and intercept that models the relationship between the dependent and independent variables.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=84)** To determine the slope and intercept, we will start with known values of x and y.
>
> **[1:30](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=90)** You may have learned this in your math classes in school or college.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=94)** For one independent variable, we start with two equations and then make substitutions to determine the value of a and b.
>
> **[1:43](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=103)** Then the values of a and b can be applied to situations where y is not known.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=109)** When there are multiple independent variables, this situation becomes complex.
>
> **[1:54](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=114)** A related technique that is most used in deep learning is logistic regression.
>
> **[1:59](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=119)** Logistic regression is a binary model that defines the relationship between two variables.
>
> **[2:05](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=125)** The output y in this case is either zero or one.
>
> **[2:09](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=129)** The formula is similar to linear regression, except that we use an additional activation function called f to convert the continuous variable coming out of ax plus b into a boolean value of zero or one.
>
> **[2:23](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=143)** There are multiple options and variations of the function f.
>
> **[2:27](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=147)** This equation, again, can be extended to multiple independent variables x1 to xn.
>
> **[2:34](https://www.linkedin.com/learning/deep-learning-getting-started/linear-regression?u=76281980&t=154)** We will look at an analogy for deep learning using the linear regression equation next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (7), [[Deep Learning]] (3), [[Logistic Regression]] (2), [[Forms]] (1), next (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### An analogy for deep learning
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=0)** - [Instructor] Let's use an analogy to understand how deep learning works.
>
> **[0:04](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=4)** We will use this analogy later in the course.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=8)** Deep learning is a complex and iterative process that requires a series of trials to narrow down the parameters for the model.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=16)** It starts actually with random initialization of the model parameters and works towards the right values of these parameters by trial and error.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=26)** In the case of a linear regression model, the model parameters are A and B.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=31)** The values of A and B form the model that determines the relationship between X and Y.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=38)** For analogy, let's try to find the values of A and B in the formula, 10 = 3A + B.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=45)** We will follow a similar trial and error process to narrow down these values.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=51)** Let's start the trials.
>
> **[0:53](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=53)** We will initialize the values of A and B to a random value.
>
> **[0:57](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=57)** In this case, we initialize both to 1.
>
> **[1:00](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=60)** We then compute the value of Y using the formula, 3A + B.
>
> **[1:04](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=64)** The result is 4.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=66)** The expected result is 10, though.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=69)** We end up with an error of 6.
>
> **[1:11](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=71)** Now, we will use this error value to adjust the values of A and B and see if we are getting closer to the expected result.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=80)** Let's bump A to 4 and B to 3.
>
> **[1:23](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=83)** Now, we have the value of Y to be 15, and an error of -5.
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=88)** We went from a positive error to a negative error, so we will adjust to lower values of A and B.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=95)** We reduce A to 2 and B to 2.
>
> **[1:38](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=98)** Now, the error has lowered down to 2, and we are getting closer to the results.
>
> **[1:43](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=103)** Let's just change A to 3 and see what happens.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=106)** The error is -1 now.
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=108)** We are getting closer, but went to the negative side.
>
> **[1:51](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=111)** We now switch the values of A to 2 and B to 3.
>
> **[1:55](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=115)** But the error goes to the other side, to positive 1.
>
> **[1:58](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=118)** We then adjust only B to 4, and we now get an error of 0.
>
> **[2:03](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=123)** So we determined that A is 2 and B is 4 by trial and error.
>
> **[2:08](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=128)** As we do these iterations, we are progressively reducing the error towards 0 as shown in the graph.
>
> **[2:14](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=134)** While the mathematical approach of using sample values and reducing the equation works well with a small number of independent variables, it becomes incredibly complex when the number of variables is really high.
>
> **[2:28](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=148)** Also, the equation may not always provide a zero error, but in most cases, we are trying to minimize the error to an acceptable value.
>
> **[2:37](https://www.linkedin.com/learning/deep-learning-getting-started/an-analogy-for-deep-learning?u=76281980&t=157)** Please keep this example as reference for future videos where we will explore the deep learning process in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (3), [[Linear Regression]] (1), next (1)
> **Cross-References:** later in (1), in the next (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### The perceptron
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=0)** - [Instructor] The perceptron is the unit for learning in an artificial neural network.
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=5)** A perceptron represents the algorithm for supervised learning in an artificial neural network.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=11)** It resembles a human brain cell.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=14)** Multiple inputs are fed into the perceptron, which in turn does computations and outputs a boolean variable.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=21)** It represents a single cell or node in a neural network.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=24)** It is built based on logistic regression.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=28)** To derive the formula for the perceptron, we use the logistic regression formula discussed in the earlier video.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=34)** Here, we replace the slope, a, with a weight called w, and intercept b with the bias called b.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=42)** Weights and biases become the parameters for a neural network.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=47)** We then apply an activation function f that outputs a boolean result based on the values.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=54)** This formula for the perceptron is fundamental to deep learning.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=59)** The same perceptron is shown here in a figure.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=62)** We have multiple independent input variables, x1 to xn, that are fed to the perceptron.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=68)** Each of them is multiplied by a corresponding weight.
>
> **[1:11](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=71)** The number of weights equal the number of inputs.
>
> **[1:14](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=74)** We also feed in a 1 that is multiplied by the bias.
>
> **[1:19](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=79)** All the results are then summed up.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=81)** An activation function is applied, that delivers the value of y, which is either a 1 or a 0.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=87)** We build neural networks by connecting a number of perceptrons.
>
> **[1:31](https://www.linkedin.com/learning/deep-learning-getting-started/the-perceptron?u=76281980&t=91)** Let's discuss more of that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (2), [[Supervised Learning]] (1), node (1), [[Deep Learning]] (1), [[Neural Networks]] (1)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Artificial neural networks
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=0)** - [Instructor] How do we use perceptrons to build an artificial neural network, or in short, ANNs.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=8)** An ANN is a network of perceptrons.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=10)** We discussed earlier that a perceptron imitates the human brain cell.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=15)** Similar to how a human brain is created with a network of cells, an ANN is created with a network of perceptrons.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=24)** The perceptron is also called a node in the neural network.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=28)** We use the node as the term to represent perceptrons going forward in the course.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=34)** Nodes are organized into multiple layers in a neural network.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=38)** A deep neural network usually has three or more layers.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=41)** Each node has its own weights, biases, and activation function as discussed in the previous video.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=49)** Each node is connected to all the nodes in the next layer forming a dense network.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=54)** The nodes within a layer are not connected with each other.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=58)** There are some exceptions to these in advanced use cases though.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=62)** This diagram shows an example neural network.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=66)** Each neural network has one input layer, one or more hidden layers, and one output layer.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=72)** In the input layer, there is one node for each independent variable.
>
> **[1:17](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=77)** In this example, there are three.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=80)** The hidden layer has three layers in this example.
>
> **[1:23](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=83)** Layer one has four nodes.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=85)** Layer two has five nodes.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=87)** And layer three has three nodes.
>
> **[1:29](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=89)** The number of layers and the number of nodes in each layer are determined by experience and trials, and it will vary from case to case.
>
> **[1:38](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=98)** The number of nodes in the output layer will vary based on the type of predictions.
>
> **[1:43](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=103)** The output layer in this example has two nodes.
>
> **[1:47](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=107)** This arrangement of nodes represents the architecture of a given neural network.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=113)** How does an ANN work for predictions?
>
> **[1:56](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=116)** The inputs, or independent variables, are sent from the input layer of the network.
>
> **[2:01](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=121)** Data may be pre-processed before using them.
>
> **[2:04](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=124)** Inputs are passed on to the next layer.
>
> **[2:07](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=127)** Each node is a perceptron containing weights, bias, and an activation function.
>
> **[2:12](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=132)** The formula is applied on the inputs and the outputs derived.
>
> **[2:16](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=136)** This repeats for each node in the layer.
>
> **[2:19](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=139)** the results from all the nodes in the layer are then passed on to the next layer, and this process is repeated.
>
> **[2:25](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=145)** As the process reaches the output layer, the final predictions will be derived.
>
> **[2:29](https://www.linkedin.com/learning/deep-learning-getting-started/artificial-neural-networks?u=76281980&t=149)** We will discuss more on this process as we progress through the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** node (7), next (3), data (1)
> **CLI Commands:** node (7)
> **Env Vars:** ann (3)
> **Cross-References:** we discussed (1), previous video (1), in the next (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Training an ANN
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=0)** - [Narrator] In the previous video we discussed how a neural contains layers, notes, weights, and biases.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=8)** How do we create that network?
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=10)** An ANN is created through a model training process.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=14)** What does training actually mean?
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=16)** A neural network model is represented by a set of parameters and hyperparameters.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=22)** This includes the values of weights and biases for all the nodes, and the number of nodes and the layers in the network.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=30)** There are more hyperparameters which we will discuss later in the course.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=34)** Training an ANN model means determining the right values for these parameters and hyperparameters such that it maximizes the accuracy of predictions for the given use case.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=46)** They may also compromise accuracy for performance.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=50)** Do note that the inputs, weights and biases may each be n-dimensional arrays depending on the use case.
>
> **[0:57](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=57)** For example, an image maybe represented by an array of pixel values.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=63)** Let's go back to the analogy we discussed earlier in the course.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=66)** Deep learning training works similarly with weights and biases, replacing A and B here respectively.
>
> **[1:13](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=73)** We start with random values for weights and biases, and then work our way towards minimizing the error.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=80)** As we progress, we will get closer to the values of weights and biases that can predict the outcomes accurately.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=87)** The training process would then look as follows.
>
> **[1:31](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=91)** We use training data like regular machine learning, where we know both the dependent and independent variables.
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=97)** We start with the network architecture by intuition.
>
> **[1:41](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=101)** We also initialize weights and biases to random values.
>
> **[1:45](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=105)** Then we repeat the iterations of applying weights and biases to the inputs and computing the error.
>
> **[1:51](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=111)** Based on the error found, we will adjust the weights and biases to reduce the error.
>
> **[1:56](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=116)** We keep repeating the process of adjusting weights and biases until the error gets to an acceptable value.
>
> **[2:02](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=122)** We will also fine tune the network hyperparameters to improve training speed and reduce iterations.
>
> **[2:09](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=129)** Finally, we will save the model as represented by its parameters and hyperparameters, and then use it for predictions.
>
> **[2:17](https://www.linkedin.com/learning/deep-learning-getting-started/training-an-ann?u=76281980&t=137)** Now that we have an understanding of what an ANN is, let's explore the training process in detail in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (1), data (1), next (1)
> **Cross-References:** we discussed (2), previous video (1), later in (1), go back to (1), earlier in (1)
> **Env Vars:** ann (3)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)


### 2. Neural Network Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### The input layer
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=0)** - [Instructor] In this chapter, let's deep dive into the architecture of an ANN and explore various layers, parameters, and functions used in the architecture.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=11)** We will start with the input layer.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=14)** Let's first start with the concept of vectors.
>
> **[0:17](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=17)** A vector is an ordered list of numeric values.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=21)** The input to deep learning is usually a vector of numeric values.
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=25)** A vector can be set to be a tuple of one or more values.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=29)** Vectors are usually defined using a NumPy array.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=33)** It represents the feature variables or independent variables that are used for predictions as well as training.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=41)** Input data sets that are available from the real world for machine learning contain samples and features.
>
> **[0:48](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=48)** A sample is one instance of a real world example.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=51)** It is equivalent to records in a database.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=54)** Features are individual attributes in the sample.
>
> **[0:57](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=57)** In the sample, we have a data set of employees.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=61)** Each employee record represents a sample.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=63)** Individual attributes like age, salary, and service are considered features.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=69)** For text data, each document is a sample and it's numeric representation becomes its features.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=76)** For images, each image is a sample and its pixel representation becomes its features.
>
> **[1:23](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=83)** Similar to regular machine learning, input data needs to be pre-processed and transformed to appropriate numeric representations before they are fed into a neural network.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=94)** Here are some popular pre-processing techniques used.
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=97)** For input data, we usually center and scale them to normalize the values.
>
> **[1:43](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=103)** For categorical variables, we encode them using either integer encoding or one hot encoding techniques.
>
> **[1:50](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=110)** Text data needs to be converted to equal numeric representations.
>
> **[1:54](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=114)** TF-IDF, or text frequency-inverse document frequency, is a classic example to represent documents.
>
> **[2:02](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=122)** Embeddings are becoming more popular in the deep learning world.
>
> **[2:06](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=126)** Images are represented by pixels.
>
> **[2:09](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=129)** We will create a vector of pixel values for this.
>
> **[2:12](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=132)** Speech may be represented as a time series of numbers.
>
> **[2:16](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=136)** This list is no way exhaustive.
>
> **[2:18](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=138)** There are a number of advanced pre-processing techniques that are applied to data to prepare them for deep learning.
>
> **[2:25](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=145)** This is an example of how employee data can be pre-processed.
>
> **[2:29](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=149)** Here, we represent each attribute like age, salary, and service as individual features x1, x2, and x3.
>
> **[2:38](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=158)** We will center and scale the values to normalize them into standard ranges.
>
> **[2:42](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=162)** Optionally, we will also transpose them to represent each sample as a column.
>
> **[2:47](https://www.linkedin.com/learning/deep-learning-getting-started/the-input-layer?u=76281980&t=167)** Once the input data is ready, it can be passed to the deep learning network for learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), [[Deep Learning]] (4), feature (1), database (1)
> **Definitions:** is a  (3), is an  (2)
> **Env Vars:** ann (1), idf (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Hidden layers
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=0)** - Hidden layers in a neural network form the brain where knowledge is acquired and used.
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=6)** An ANN can have one or more hidden layers.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=9)** The more the number of layers, the deeper the network is.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=12)** Each hidden layer can have one or more nodes.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=15)** Typically node count is configured in the range of 2 power n Example counts may be 8, 16, 32, 64, 128, et cetera.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=26)** A neural networks architecture is defined by the number of layers and nodes in that layer.
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=32)** How are the inputs and outputs connected?
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=34)** The output of each node in the previous layer will become the input for every node in the current layer.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=41)** Similarly, the output of each node in the current layer is passed to every node in the next layer.
>
> **[0:48](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=48)** In the example shown, there are four nodes in the first hidden layer, producing four outputs from their activation functions.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=55)** There are five nodes in the second layer.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=58)** The four outputs from the first layer are passed to each of the five nodes in the second layer.
>
> **[1:04](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=64)** How do we determine the right number of layers and nodes in a network?
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=68)** Each node in the neural network learns something about the relationship between the feature variables and the target variables.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=76)** This knowledge is persisted in its weights and biases.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=80)** When there are more nodes and layers, it usually results in better accuracy. Do note that this is always not true.
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=88)** More layers would also mean more compute resources and time for both training and inference.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=94)** The right architecture for a given problem is determined by experimentation.
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-getting-started/hidden-layers?u=76281980&t=99)** As a general practice, start with small numbers and keep adding until acceptable accuracy levels are obtained.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** node (6), power (1), [[Neural Networks]] (1), next (1), feature (1)
> **CLI Commands:** node (6)
> **Env Vars:** ann (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - hidden (1)

#### Weights and biases
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=0)** - Weights and biases form the foundation for deep learning algorithms.
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=5)** How are they structured for a given neural network architecture.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=9)** Weights and biases are the trainable parameters in a Neural Network.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=14)** During the training process, the values for these weights and biases are determined such that they provide accurate predictions.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=21)** Weights and biases are nothing but a collection of numeric values.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=26)** Each input for each node will have an associated weight with it.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=30)** A given node will have one bias value associated with it.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=34)** At a layer level these weights and biases are handled as RAs.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=40)** Let's compute the number of weights and bias values, for the example network.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=44)** For the first hidden layer, there are three inputs and it has four layers.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=49)** Each node will then have three weight values, so for all the four layers, there will be 12 weights.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=55)** There is one bias value per node, so there will be a total of four bias values for that layer.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=62)** In a similar fraction, we can compute the remaining hidden layers and the output layer.
>
> **[1:07](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=67)** This network has a total of 53 weights, and 14 bias values.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=72)** The network does has 67 total parameters.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=76)** When training a Neural Network, computation for the hidden layer is done together, and not for each node, for optimization reasons.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=84)** The weights and biases for each layer are maintain as matrices.
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=88)** The input is also taken as a matrix, and the output is produced as a matrix.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=93)** This example shows the computation for hidden layer two which has four inputs and five nodes.
>
> **[1:40](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=100)** The four inputs are received as a metrics of one by four.
>
> **[1:44](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=104)** The weights for all the nodes in the layer, are maintain as a four by five matrix.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=109)** Bias is a one by five matrix covering the five nodes in the layer.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=113)** Matrix multiplication is performed between the input and weight matrices to get an output of one by five, this is added to the bias metrics to produce an output of one by five.
>
> **[2:05](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=125)** The output matrix is then passed as input to the next layer.
>
> **[2:09](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=129)** I recommend additional reading on matrix multiplication, if you are interested in more details around these computations.
>
> **[2:16](https://www.linkedin.com/learning/deep-learning-getting-started/weights-and-biases?u=76281980&t=136)** Deep learning applications take care of the computation work behind the scenes, based on the configured inputs and settings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** node (5), [[Deep Learning]] (2), [[Algorithms]] (1), next (1)
> **CLI Commands:** node (5)
> **Definitions:** is a  (1)
> **Speakers:** - weights (1)

#### Activation functions
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=0)** - [Instructor] An Activation function plays an important role in creating the output of a node in the neural network.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=7)** An Activation function, takes in the matrix output of the node and determines if and how the node will propagate its information to the next layer.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=16)** Activation functions act as filters to reduce noise and also normalize the output, which can get fairly large due to matrix multiplications.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=26)** It converts the output to a nonlinear value.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=29)** They serve as a critical step in helping a neural network learn specific patterns in data.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=36)** Here is the list of some of the most popular activation functions.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=41)** Each of these functions have specific advantages, shortcomings and applications.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=46)** They can take in an output matrix and deliver another output matrix of the same dimension.
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=52)** A sigmoid function delivers an output in the range of zero to one, based on the input values.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=58)** When it has a value of zero, it means that it does not pass its learnings to the next layer.
>
> **[1:04](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=64)** A Tanh function normalizes the output in the range of minus one to plus one.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=69)** A rectified linear unit or ReLU, produces a zero if the output is negative.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=76)** Else, it reproduces the same input verbatim.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=80)** A Softmax activation function is used in case of classification problems.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=85)** It produces a vector of probabilities for each of the possible classes in the outcome.
>
> **[1:30](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=90)** The sum of probabilities will be equal to one.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=93)** The class with the highest probability will be considered for prediction.
>
> **[1:38](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=98)** I recommend further reading on the math concepts between activation functions and their advantages and shortcomings if you are interested.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-getting-started/activation-functions?u=76281980&t=106)** Otherwise, they are implemented in various deep learning libraries already, and need to be just added as a hyper parameter to the model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** node (3), next (2), data (1), [[Probability]] (1), [[Deep Learning]] (1)
> **CLI Commands:** node (3)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### The output layer
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=0)** - The output layer is the final layer in the neural network where desired predictions are obtained.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=7)** There is one output layer in a neural network that produces the desired final prediction.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=12)** It has its own set of weights and biases that are applied before the final output is derived.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=18)** The activation function for the output layer may be different than the hidden layers based on the problem.
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=25)** For example, Softmax activation is used to derive the final classes in a classification problem.
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=32)** The output is a vector of values that may need further post-processing to convert them to business related values.
>
> **[0:39](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=39)** For example, in a classification problem, the output is a set of probabilities that needs to be mapped to the corresponding business classes.
>
> **[0:48](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=48)** How do we determine the number of notes in the output layer?
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=52)** It depends on the problem.
>
> **[0:53](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=53)** In a binary classification problem, there is only 1 note that provides a probability of the positive outcome.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=61)** In the case of n-class classification, there are n notes, each producing the probability for a given class.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=68)** For regression, there is only 1 note that produces the output.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=72)** In this way, the number of notes may vary based on the type of problem being solved.
>
> **[1:18](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=78)** This completes our discussion on the structure of the neural network.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-getting-started/the-output-layer?u=76281980&t=81)** In the next chapter, we will explore more about training the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** business (2), [[Probability]] (2), next (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - the (1)


### 3. Training a Neural Network

[↑ Back to Table of Contents](#table-of-contents)

#### Setup and initialization
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=0)** - [Instructor] How does a deep learning model get trained?
>
> **[0:03](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=3)** We will explore this process in detail in this chapter.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=7)** We will start with setup and initialization for the training process in this video.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=13)** Before we start training the neural network, the input data needs to be prepared.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=18)** This includes applying a number of processing techniques to convert samples into numeric vectors.
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=25)** They are then transposed optionally to create the input vectors.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=29)** The target variables may also undergo similar transformations.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=33)** To help with training, the input data is usually split into training, test, and validation sets.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=40)** A training data set is used to run through the neural network and fit the parameters like weights and biases.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=47)** Once a model is created, the validation data set is used to check for its accuracy and error rates.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=54)** The result from this validation is then used to refine the model and recheck.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=59)** When a find a model is obtained, it is used to predict on the test set to measure the final model performance.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=65)** The usual split of input data between the training, validation, and test sets is 80 to 10 to 10.
>
> **[1:13](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=73)** In order to create the initial model, a set of values need to be selected for various parameters and hyper-parameters.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=80)** This includes the number of layers and the number of nodes in each layer.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=84)** We also need to select the activation functions for each layer.
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=88)** Then, there are hyper parameters like epoch, batch sizes, and error functions that need to be selected.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=95)** How do we make the initial selection?
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=97)** It may be based on our own intuition and experience.
>
> **[1:41](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=101)** It can also be based on references in best practices and suitability of techniques to the specific problem.
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=108)** Whatever values are selected, they are then refined as the model is trained.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=113)** If the final results of the model are not acceptable, then we will go back, adjust the parameters, and then retrain the model.
>
> **[2:01](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=121)** Finally, we also need to initialize the weights and biases for each of the nodes in the neural network.
>
> **[2:07](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=127)** We will start with some value and then the neural network will learn the right values for these based on the error rates are obtained during the training process.
>
> **[2:16](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=136)** Multiple techniques for initialization are available.
>
> **[2:19](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=139)** In zero initialization, we initialize all values to zeros.
>
> **[2:23](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=143)** The preferred technique though is random initialization.
>
> **[2:26](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=146)** In random initialization, we initialize the weights and biases to random values.
>
> **[2:32](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=152)** obtained from a standard normal distribution whose mean is zero and standard deviation is one.
>
> **[2:38](https://www.linkedin.com/learning/deep-learning-getting-started/setup-and-initialization?u=76281980&t=158)** Once we are done with setup and installation, we are ready to do some training.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Deep Learning]] (1)
> **Prerequisites:** initialization (5), setup (2), before we start (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### Forward propagation
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980&t=0)** - [Instructor] Once we are ready with the input training data, we are ready to do a round of forward propagation.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980&t=7)** To recollect, we have the input data organized as samples and features.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980&t=12)** The data has been pre-split into training, validation, and test sets.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980&t=16)** For the training set, for each sample, we have a target or the value to predict, called y.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980&t=22)** y is the actual value of the target in the training set.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980&t=26)** y hat will be the value that will be predicted through forward propagation.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980&t=31)** The forward propagation step is exactly the same as doing an actual prediction with the neural network.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980&t=38)** For each sample, the inputs are sent through the designated neural network.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980&t=42)** For each node, we compute the outputs based on the perceptron formula and pass them to the next layer.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980&t=49)** The final outcome, y hat, is then obtained at the end.
>
> **[0:53](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980&t=53)** As we keep sending the samples to the neural network, we will collect values of y hat for each sample.
>
> **[1:00](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980&t=60)** This process is repeated for all samples in the training data set.
>
> **[1:04](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980&t=64)** We will then compare the values of y hat and y and compute the error rates.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-getting-started/forward-propagation?u=76281980&t=69)** We will discuss more on computing error rates in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), next (2), node (1)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Measuring accuracy and error
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=0)** - [Instructor] Accuracy and Error are alternating terms that can be used to represent the gap between the predicted values and the actual values of the target variables.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=11)** As we go through forward propagation, we end up with a set of y-hat values that need to be then compared with the actual values of y to compute the error.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=22)** For computing error, we use two functions, namely, the loss function and the cost function.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=28)** A loss function measures the prediction error for a single sample, a cost function measures the error across a set of samples.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=36)** The cost function provides an averaging effect over all the errors found on the training dataset.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=42)** The terms loss function and cost function are used almost interchangeably and are used to measure the average error over a set of samples.
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=52)** There are a number of popular costs functions available, and they are implemented in all popular Deep Learning Libraries.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=59)** The Mean Square Error or MSE measures errors in case of regression problems.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=65)** It computes the difference between the predictor and the actual values, squares them, and sums them across all samples, and finally divides by the number of samples.
>
> **[1:15](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=75)** The Root Mean Square Error or RMSE is more popular, as it provides error values in the same scale as the target variables.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=84)** This is again used for regression problems.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=87)** For binary classification, we use Binary Cross Entropy to compute the error.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=93)** A similar function called Categorical Cross Entropy exist for multi-class classification problems.
>
> **[1:40](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=100)** If you wish to understand the math behind these cost functions, I would recommend referring to additional documentation.
>
> **[1:47](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=107)** So with the cost function, how do we measure accuracy?
>
> **[1:50](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=110)** We send a set of samples through the ANN for forward propagation and predict the outcomes.
>
> **[1:55](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=115)** We estimate the prediction error between the predicted outcome and expected outcome using a cost function.
>
> **[2:02](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=122)** We will then use backward propagation to adjust the weights and biases in the model based on the error obtained.
>
> **[2:08](https://www.linkedin.com/learning/deep-learning-getting-started/measuring-accuracy-and-error?u=76281980&t=128)** We will discuss backward propagation in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (1), next (1)
> **Env Vars:** mse (1), rmse (1), ann (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Back propagation
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=0)** - (Educator) Once we have estimated the prediction error from forward propagation, we need to go back to back propagation to adjust the weights and biases.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=10)** What is the purpose of back propagation?
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=12)** We found an overall error based on the entire network during forward propagation.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=18)** Each node in the neural network contributes to this overall error.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=22)** And nodes contribution is determined by the values for the weights and biases, it has.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=28)** Different nodes contribute differently, based on how well their weights and biases model the relationship between the feature and target variables.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=37)** As we tuned the network, the weights and biases for each node needs to be adjusted in order to lower the error contribution, by that node.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=46)** How does back propagation work?
>
> **[0:48](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=48)** It works in the reverse direction as the forward propagation.
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=52)** We start from the output layer.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=54)** We will compute a delta value for this layer based on the overall error.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=59)** This delta value is an adjustment that is then applied to all the weights and biases in the layer.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=65)** This results in new values of weights and biases.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=68)** Then we derive a new delta value for the previous layer based on the new values in the current layer, it is then applied to the weights and biases in the previous layer.
>
> **[1:18](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=78)** The process of computing deltas, applying it to the weights and biases, and then back propagating continues until we reached the input layer.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=87)** This image shows the same back propagation process for the network example.
>
> **[1:32](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=92)** The deltas D1 to D4 are computed at each layer and applied to their weights and biases.
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=99)** They also propagate to the previous layer and influence their deltas.
>
> **[1:43](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=103)** If you are interested in the math behind these computations, I recommend additional readings.
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=108)** Again, the deep learning libraries take care of these computations.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=113)** At the end of the back propagation process, we will have an updated set of weights and biases that would reduce the overall prediction error.
>
> **[2:02](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=122)** How do we continue to reduce error and improve accuracy?
>
> **[2:05](https://www.linkedin.com/learning/deep-learning-getting-started/back-propagation?u=76281980&t=125)** Let's discuss that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** node (3), feature (1), [[Deep Learning]] (1), next (1)
> **CLI Commands:** node (3)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is an  (1)

#### Gradient descent
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/gradient-descent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/gradient-descent?u=76281980&t=0)** - Gradient descent is the process of repeating forward and backward propagations in order to reduce error and move closer to the desired model.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-getting-started/gradient-descent?u=76281980&t=10)** To recollect one run of the forward propagation results in predicting the outcomes based on weights and biases.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-getting-started/gradient-descent?u=76281980&t=18)** We compute the error using a cost function.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-getting-started/gradient-descent?u=76281980&t=21)** We then use back propagation to propagate, edit, and adjust the weights and biases.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-getting-started/gradient-descent?u=76281980&t=26)** This is one pass of learning.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-getting-started/gradient-descent?u=76281980&t=28)** We have to now repeat this pass again and again, as the weights and biases get refined, and the error gets reduced.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-getting-started/gradient-descent?u=76281980&t=36)** This is called gradient descent.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-getting-started/gradient-descent?u=76281980&t=38)** In gradient descent, we repeat the learning process of forward propagation, estimating error, backward propagation, and adjusting weights and biases.
>
> **[0:48](https://www.linkedin.com/learning/deep-learning-getting-started/gradient-descent?u=76281980&t=48)** As we do this, the overall error estimated by the cost function will oscillate around and start moving closer to zero.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-getting-started/gradient-descent?u=76281980&t=56)** We keep measuring the error and computing deltas that would minimize the error contribution of individual notes.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-getting-started/gradient-descent?u=76281980&t=63)** There are situations where the error will stop producing and there are additional hyperparameters to control that.
>
> **[1:10](https://www.linkedin.com/learning/deep-learning-getting-started/gradient-descent?u=76281980&t=70)** There are also hyperparameters to speed up or slow down the learning process.
>
> **[1:14](https://www.linkedin.com/learning/deep-learning-getting-started/gradient-descent?u=76281980&t=74)** We will discuss them in the followup course, deep learning model optimization and tuning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (1)
> **Definitions:** is called (1)
> **Speakers:** - gradient (1)

#### Batches and epochs
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=0)** - [Educator] Batches and epochs help control the number of passes through the neural network, during the learning process.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=7)** What is a batch?
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=9)** A batch is a set of training samples, that are sent through the neural network in one single pass.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=15)** The training data set is divided into one or more batches.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=19)** The neural network receives one batch at a time, and does forward propagation.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=24)** Cost functions are executed and the weights and biases updated after each batch.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=30)** When the next batch comes in, it will have a new set of weights and biases to work with.
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=35)** There are two types of gradient descent.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=37)** When the batch size is equal to the training set size, it's called batch gradient descent.
>
> **[0:43](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=43)** When the batch size is less than the training data set size, it's called mini-batch gradient descent.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=49)** Batch sizes are typically based on two power and numbers like 32 to 64, 128, et cetera.
>
> **[0:57](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=57)** A training data set is sent through the neural network multiple times during the learning process.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=63)** The total number of times the entire training data set is sent through the neural network is called epoch.
>
> **[1:10](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=70)** An epoch obviously would have one or more batches.
>
> **[1:13](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=73)** As more epochs happen, the same batch is sent repeatedly through the neural network, but will get to work with a different set of weights and biases each time.
>
> **[1:23](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=83)** When all epochs are completed, the training process is complete.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=87)** Higher epoch sizes may lead to better accuracy while also delaying the learning process.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=93)** Here is an example of how epochs and batch sizes compare.
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=97)** Let's say we have a training set of size thousand.
>
> **[1:40](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=100)** We set the batch size to 128 and then epoch count of 50.
>
> **[1:45](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=105)** This means the number of batches in a given epoch is a ceiling value of thousand divided by 128, which will be eight.
>
> **[1:54](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=114)** The last batch will have fewer samples than 128.
>
> **[1:57](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=117)** The total iterations of passes through the ANN is a total batches multiplied by the total epochs.
>
> **[2:04](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=124)** In this case, there will be a total of 400 passes through the neural network.
>
> **[2:08](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=128)** This means that the weights and biases are updated 400 times.
>
> **[2:13](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=133)** Batch sizes and epochs are considered as hyperparameters.
>
> **[2:17](https://www.linkedin.com/learning/deep-learning-getting-started/batches-and-epochs?u=76281980&t=137)** They are tuned during the model learning process to improve model accuracy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), next (1), power (1)
> **Definitions:** is a  (4), is called (1), is an  (1), means that (1)
> **Env Vars:** ann (1)
> **Speakers:** - [educator] (1)

#### Validation and testing
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/validation-and-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/validation-and-testing?u=76281980&t=0)** - [Narrator] As we build models, we need to also validate and test them against independent data sets to measure out of sample error.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-getting-started/validation-and-testing?u=76281980&t=8)** During the input preparation process, we usually isolate validation and test data sets for this purpose.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-getting-started/validation-and-testing?u=76281980&t=16)** What is validation?
>
> **[0:17](https://www.linkedin.com/learning/deep-learning-getting-started/validation-and-testing?u=76281980&t=17)** While performing, learning, and model improvement, we are comparing the predictions provided by the neural network for the training samples against its actual values and measuring errors.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-getting-started/validation-and-testing?u=76281980&t=29)** However, this is an in sample error and the model has no guarantee that it will perform the same against independent datasets.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-getting-started/validation-and-testing?u=76281980&t=37)** So after each epoch is completed and the weights and biases updated, we will also use the network to predict for the validation data set.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-getting-started/validation-and-testing?u=76281980&t=46)** We will measure accuracy and loss for the validation data set, and also investigate the same to make sure that it does not deviate significantly from the in sample errors observed.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-getting-started/validation-and-testing?u=76281980&t=59)** The model can be fine tuned, and the learning process repeated based on the results seen against the validation dataset.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-getting-started/validation-and-testing?u=76281980&t=66)** The final step in model building is evaluation.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-getting-started/validation-and-testing?u=76281980&t=69)** After all the fine tuning is completed, and the final model obtained, the test data set is used to evaluate the model.
>
> **[1:17](https://www.linkedin.com/learning/deep-learning-getting-started/validation-and-testing?u=76281980&t=77)** This is done only once at the end.
>
> **[1:19](https://www.linkedin.com/learning/deep-learning-getting-started/validation-and-testing?u=76281980&t=79)** The evaluation results are then used to measure the performance of the model in terms of its final accuracy and error rates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Fine Tuning]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### An ANN model
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980&t=0)** - [Instructor] Having now seen the neural network constituents and the training process, let's recap the question.
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980&t=6)** What is an ANN model?
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980&t=8)** What does it contain?
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980&t=10)** An ANN model is represented by a set of parameters, namely the weights and biases that are obtained during training.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980&t=19)** When someone says that the model has X parameters, they are mentioning the total count of weights and bias values in the model.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980&t=27)** A model is also represented by a set of hyperparameters.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980&t=31)** This includes the number of layers, nodes in each layer, activation functions in each node, cost functions, optimizers and the learning rate used.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980&t=41)** It also includes the batch size and epoch values used to train the model.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980&t=46)** A model file typically contains the representation of all these values.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980&t=51)** Models can be saved to files, shared and loaded into other binaries if needed.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980&t=56)** Once you have a model, what does the prediction process look like?
>
> **[1:00](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980&t=60)** The prediction process is exactly the same as the forward propagation step, except that the input data used is the feature attributes for prediction and the target value is not known, so the steps involve pre-processing and preparing the inputs, passing them through the layers, computing the outputs in each node using their final weights and biases and deriving the outcomes in the final layer.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980&t=85)** The predictions may also need to be post-processed for converting them to business representations.
>
> **[1:31](https://www.linkedin.com/learning/deep-learning-getting-started/an-ann-model?u=76281980&t=91)** Now that we have gone through the concepts of deep learning, let's apply the learnings to build a real model in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** node (2), data (1), feature (1), business (1), [[Deep Learning]] (1)
> **CLI Commands:** node (2)
> **Env Vars:** ann (2)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Reusing existing network architectures
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=0)** - [Instructor] Having discussed the concepts of neural networks and how to train them from scratch, let's now discuss some practical aspects of building neural network models.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=11)** How do we build neural networks for a use case?
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=15)** An interesting fact about neural networks is that most neural network implementations are not designed and built from scratch.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=24)** Designing a neural network with the right number of layers and nodes is a tedious, iterative, and time consuming process.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=34)** Fortunately, the neural network community is very active in sharing their work with the rest of the world.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=41)** They shared their knowledge and experiments for the rest of the community to build upon.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=47)** To begin with several papers are published on the architectures for neural networks that have been successfully implemented and proven.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=56)** You can start off your neural network by implementing a related architecture and then fine tune it for your use case.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=65)** Implementation code for these neural networks is also available in open source repositories.
>
> **[1:11](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=71)** This can be leveraged to create a neural network for your use case.
>
> **[1:17](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=77)** Finally, open source models are available for popular implementations.
>
> **[1:22](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=82)** The models include all the trained parameters and hyper-parameters packaged in standardized formats that are supported by popular deep learning networks.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=93)** Let's quickly list some of the popular neural network architectures.
>
> **[1:38](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=98)** LeNet5 is one of the earliest open source models that was built for document and handwriting recognition.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=106)** AlexNet is a conventional neural network or CNN that is used for image recognition.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=113)** ResNet is also a conventional neural network that overcomes some limitations of traditional CNNs.
>
> **[2:01](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=121)** VGG is another class of popular CNN architecture.
>
> **[2:06](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=126)** LSTM is a recurrent neural network that is used for predicting sequences of text.
>
> **[2:13](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=133)** Transformers is the latest architecture that is revolutionizing generative AI.
>
> **[2:19](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=139)** I strongly recommend researching and reading up on more of these architectures.
>
> **[2:25](https://www.linkedin.com/learning/deep-learning-getting-started/reusing-existing-network-architectures?u=76281980&t=145)** There are also courses available for conventional neural networks, recurrent neural networks, and transformers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (7), [[Representational State Transfer (REST)|Rest]] (2), cnn (2), [[Deep Learning]] (1), [[Generative AI]] (1)
> **Env Vars:** cnn (2), vgg (1), lstm (1)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### Using available open-source models
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=0)** - [Instructor] How do we select and use available open-source neural network models?
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=5)** We will briefly touch upon some key points in this video.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=11)** Several open source models and their versions are available for use by anyone wishing to develop a neural network for their use case.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=20)** These are fully trained models with updated parameters and corresponding hyper parameters.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=27)** Training data and code will also be shared in many cases.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=33)** Repositories like Hugging face and GitHub are popular locations where such models can be found.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=40)** Universities also host models that are created from their research.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=45)** These models are easy to download.
>
> **[0:48](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=48)** They can be pretty large files though, and would need bandwidth and storage.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=54)** Popular machine learning frameworks like PyTorch and TensorFlow provide capabilities to quickly load and use these models.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=63)** How do we pick the right open-source model for our use case?
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=68)** First, when evaluating an open-source model, understand their original purpose and use case.
>
> **[1:14](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=74)** This helps us understand what this model is good at and whether this is applicable for our use case.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=81)** It is also important to understand the type of data that this model is trained on.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=87)** Data could be public data or maybe focused on a specific use case.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=93)** There can also be privacy and legal concerns that needs to be looked at.
>
> **[1:38](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=98)** Explore the model's, popularity and usage.
>
> **[1:42](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=102)** This usually can be found by the number of downloads, forks and blocks related to this model.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=109)** Review licensing requirements for the model, even though it's open source, different categories of licenses determine how they can be used, and if attribution is required.
>
> **[2:02](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=122)** Then proceed to download the model and build fine tuning or inference pipelines around it.
>
> **[2:09](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=129)** Test the model with training data that is specific to your use case, to ensure that the model performs well in your specific scenario.
>
> **[2:18](https://www.linkedin.com/learning/deep-learning-getting-started/using-available-open-source-models?u=76281980&t=138)** We briefly touched upon open-source neural network models, and I recommend that you explore more about them and try using one of them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), open-source (4), [[Hugging Face]] (1), [[GitHub]] (1), [[PyTorch]] (1)
> **Tools:** github (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 4. Deep Learning Example 1

[↑ Back to Table of Contents](#table-of-contents)

#### The Iris classification problem
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=0)** - [Instructor] Having learned the basics of deep learning with neural networks, let's apply the learnings in a simple example.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=7)** In this chapter, we will build a deep learning model to predict the type of flower with the Iris dataset.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=14)** The Iris dataset is a popular machine learning dataset, and the students may already be familiar with this.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=21)** The dataset has four feature variables about the flower, namely, sepal length, sepal width, petal length, and petal width.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=30)** The target class is the type of species.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=33)** There are three classes here, namely, setosa, versicolor, and virginica.
>
> **[0:39](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=39)** The goal for this chapter is to build a deep learning model with Keras 2.0 to predict the type of species.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=46)** The code for this chapter is available in the notebook, code_04_XX Iris - Deep Learning Classification Example.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=56)** This is available as part of the exercise files we installed earlier.
>
> **[1:00](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=60)** Let's open the notebook now.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=63)** The setup code block contains a list of dependencies that are needed for the exercises.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=68)** Run the setup block once to install all the dependencies.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=72)** Depending on whether they are already available in your setup or not, this may take some time to run.
>
> **[1:18](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=78)** You only need to run it once to install the dependencies.
>
> **[1:22](https://www.linkedin.com/learning/deep-learning-getting-started/the-iris-classification-problem?u=76281980&t=82)** The dependencies are installed now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (4), [[Neural Networks]] (1), feature (1)
> **Prerequisites:** setup (3), install (2)
> **Versions:** 2.0 (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Input preprocessing
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=0)** - [Instructor] As discussed in the earlier chapter, input data should be pre-processed and prepared for deep learning before it can be used to train the models.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=10)** Code for this video is in section 4.2 of the notebook.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=14)** Let's explore the code now.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=18)** We first load the iris.csv file into a pandas dataframe.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=22)** This file is available as a part of the exercise files in the same folder as the notebook.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=29)** We then print the contents of the dataframe to check.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=33)** The target variable species is a text field.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=36)** It needs to be converted to a numeric representation to be used for deep learning.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=41)** For this, we use a LabelEncoder model based on the species column, and then update the species column with the corresponding encoding.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=51)** Next, we convert the dataframe into a NumPy array, which is the preferred input format for Keras deep learning.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=59)** We separate the feature and target variables into different variables, namely X_data and Y_data.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=66)** X_data has four columns and Y_data has one.
>
> **[1:10](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=70)** We print the feature variables and target variable to check.
>
> **[1:14](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=74)** Since the feature variables are numeric and each column may be on a different scale, we need to standardize the scaling.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=81)** For this, we create a scaler model on the data in X_data.
>
> **[1:26](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=86)** Then we transform the data in X_data using this model.
>
> **[1:29](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=89)** Since the target variables is multi-class, we will use one hot encoding to create three columns with each column representing a species.
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=99)** We will print the contents of these variables after scaling and one hot encoding.
>
> **[1:45](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=105)** Finally, we need to split the data set into training and test data sets.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=109)** 10% of the data set is allocated for testing.
>
> **[1:52](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=112)** We print the dimension of these data sets.
>
> **[1:55](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=115)** Note that we are not splitting for validation as Keras has a feature to create a validation data set from the training data set.
>
> **[2:03](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=123)** We will explore that later in the chapter.
>
> **[2:06](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=126)** Let's run this code block and then explore the results.
>
> **[2:10](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=130)** Now pre-processing is complete and we can see the output.
>
> **[2:14](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=134)** We see the loaded data in its raw form.
>
> **[2:17](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=137)** We can then see the features, how they look like before they are used for scaling.
>
> **[2:22](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=142)** And after scaling, we can see that they have all been converted into numeric values of the same scale.
>
> **[2:28](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=148)** The target variable now is one hot encoded with three columns.
>
> **[2:33](https://www.linkedin.com/learning/deep-learning-getting-started/input-preprocessing?u=76281980&t=153)** And finally, we see the training and test data dimensions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (11), feature (4), [[Deep Learning]] (3), [[Pandas (Software)|Pandas]] (1), next (1)
> **File Paths:** iris.csv (1)
> **Versions:** 4.2 (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Creating a deep learning model
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=0)** - [Instructor] Let's now define a model for the Iris problem.
>
> **[0:04](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=4)** We will continue on the same Iris notebook as before for creating the model.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=10)** This video is covered in section 4.3.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=13)** When we say we are creating a model in Keras, we are merely defining the architecture and hyperparameters for the neural network.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=21)** Training of the model itself will happen later.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=24)** Once a model is defined this way, it can be trained and retrained any number of times.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=31)** We start off by defining the number of classes in the target variable.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=36)** Note that we have used one-hot encoding on the target variables before.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=40)** We now proceed to create a sequential model in Keras.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=45)** We can now start adding layers to the model.
>
> **[0:48](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=48)** We add the first hidden layer of 128 nodes.
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=52)** This is a number we can experiment with as we improve the model.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=56)** Then, we define the input shape.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=58)** Since we know that we have four input variables, we define the same here.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=63)** We can provide a logical name for the layer that is helpful in printing information later.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=68)** We will use rectified linear unit activation for this layer.
>
> **[1:13](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=73)** We continue to add another hidden layer, Hidden-Layer-2.
>
> **[1:17](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=77)** We will again have 128 nodes, and then activation of relu.
>
> **[1:22](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=82)** Finally, we add the output layer.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=85)** Here, the number of nodes will be equal to the number of classes in the target variable.
>
> **[1:30](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=90)** We will use softmax activation to predict the probabilities of each class for the input provided.
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=97)** Then, we will compile the model.
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=99)** For loss computation, we will use categorical_crossentropy, since this is a multi-class classification model.
>
> **[1:47](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=107)** We will also use accuracy as the metric to measure loss.
>
> **[1:51](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=111)** There are a number of other parameters to compile the model, but we have assumed the default values.
>
> **[1:57](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=117)** We will discuss more of these in the model optimization and tuning course.
>
> **[2:02](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=122)** Finally, we print the model summary.
>
> **[2:04](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=124)** Let's execute this code block.
>
> **[2:07](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=127)** We see the model summary being printed here.
>
> **[2:10](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=130)** It shows each layer and the shape of the output.
>
> **[2:14](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=134)** It also shows the total number of parameters in the model, which are the weights and biases across the two hidden and one output layer.
>
> **[2:23](https://www.linkedin.com/learning/deep-learning-getting-started/creating-a-deep-learning-model?u=76281980&t=143)** Please refer to the earlier video on weights and biases on how the number of parameters is determined.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Identifiers:** categorical_crossentropy (1)
> **Versions:** 4.3 (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Training and evaluation
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=0)** - We have now prepared the input data and created a model in the previous videos.
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=5)** Let's now go ahead and train a model.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=8)** The core block for this video is in section 4.4 of the notebook.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=13)** We set the variables flat to one, so Iris will print out details of progress during training.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=20)** We then set the hyper parameters for training.
>
> **[0:23](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=23)** These are of course set initially on intuition and then fine tuned on experimentation as we improve the model.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=31)** We set the batch size to 16, which is in the two power end range.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=36)** We set the number of epochs to 10.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=38)** We will use a validation split of 20%.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=42)** This means that 20% of the training data will be used by carers for validation after each epoch.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=49)** Though the recommended percentage of validation is 10, we are using more samples since the total sample size is only 150.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=59)** Training a model is straightforward in carers with a single function call.
>
> **[1:04](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=64)** The model.fit method is used to train and also capture details about the training.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=69)** The first parameter is the input feature variable followed by the target variable.
>
> **[1:14](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=74)** Then we set values for batch size, epochs, verbose and validation split.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=81)** This function will initialize the weights and biases, but from gradient descent and stowed the final weights and biases in the model.
>
> **[1:29](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=89)** It also can expose the history of training as a return value.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=94)** We use this history and plot the accuracy of in sample predictions against the epochs.
>
> **[1:40](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=100)** Finally, we will evaluate the model against the test data set and print the results.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=106)** Let's run this code and review the results.
>
> **[1:50](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=110)** We see the training progress printed after each epoch.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=113)** It shows the total amount of time taken, and the last computed by the cost function.
>
> **[1:59](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=119)** It also prints the accuracy of predictions against the in sample dataset.
>
> **[2:05](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=125)** Additionally, it prints the loss and accuracy of predictions against the validation data set.
>
> **[2:12](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=132)** From the plot, we can observe that as the number of epochs increases, the accuracy also increases progressively and reaches about 90%.
>
> **[2:22](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=142)** If accuracy at this point is not acceptable, we can increase the number of epochs and retry.
>
> **[2:29](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=149)** The evaluation against a test dataset also shows an accuracy of 93%.
>
> **[2:35](https://www.linkedin.com/learning/deep-learning-getting-started/training-and-evaluation?u=76281980&t=155)** Model building is an iterative process in the real world and requires a distinct model architecture and Hyper Parameters and retraining the model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), power (1), feature (1)
> **Definitions:** means that (1), is an  (1)
> **Versions:** 4.4 (1)
> **Best Practices:** recommended (1)
> **Speakers:** - we (1)

#### Saving and loading models
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/saving-and-loading-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/saving-and-loading-models?u=76281980&t=0)** - In the machine learning world, models are trained in a different environment than where they are used for inference.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-getting-started/saving-and-loading-models?u=76281980&t=8)** How do we store, move and load models between environments.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-getting-started/saving-and-loading-models?u=76281980&t=12)** In code.4 file, We have an example for storing and loading deep learning models.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-getting-started/saving-and-loading-models?u=76281980&t=18)** In order to save a model, we use the saved method to save the model architecture, parameters and other information to disk.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-getting-started/saving-and-loading-models?u=76281980&t=27)** Here we saved the contents to iris save, which is a directory under which the model elements are saved.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-getting-started/saving-and-loading-models?u=76281980&t=34)** We can load the model back with the load model function.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-getting-started/saving-and-loading-models?u=76281980&t=38)** Once loaded, we can print the summary and check the model.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-getting-started/saving-and-loading-models?u=76281980&t=42)** Let's run this code and review the results.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-getting-started/saving-and-loading-models?u=76281980&t=46)** We can now see that the model has been saved and reloaded.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-getting-started/saving-and-loading-models?u=76281980&t=49)** We can also explore the contents of Iris save, the model is saved here in binary format with all the format and metadata under the root directory of the exercise files.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-getting-started/saving-and-loading-models?u=76281980&t=61)** To copy the model, we need to copy the end data root directory and move it to the destination.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (1), [[Metadata]] (1), data (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### Predictions with deep learning models
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=0)** - [Tutor] Having trained a deep learning model for Iris, let's do some predictions with new data.
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=6)** We start with a prediction input of four feature variables namely; sepal length, sepal width, petal length and Petal width.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=14)** The featured variables need to go through the same set of pre-processing that was done during training.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=20)** We use the same scaler model we built during training to scale the prediction feature variables too.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=27)** Then we use the predict method on the model to predict for the scale input.
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=32)** The raw prediction results are captured and printed.
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=35)** The result is a list of probabilities of the various classes, asset applies for this input.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=42)** We then use the argmax function to get the index of the highest probability.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=47)** Then we use the same training label encoder to do the reverse transform and get the string for the species name.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=54)** Let's run this code and review the results.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=59)** For the raw output, we see the probabilities for the three classes namely; setosa, versicolor and virginica.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=66)** The sum of the three probabilities will be one.
>
> **[1:10](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=70)** From the list, versicolor has the highest probability of 65%.
>
> **[1:15](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=75)** Then the inverse transform function will extract the corresponding name which is versicolor.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=80)** This chapter demonstrated a simple example of doing deep learning with structured data.
>
> **[1:26](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-with-deep-learning-models?u=76281980&t=86)** In the next chapter, we will do deep learning with text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (3), data (2), feature (2), [[Probability]] (2), next (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [tutor] (1)


### 5. Deep Learning Example 2

[↑ Back to Table of Contents](#table-of-contents)

#### Spam classification problem
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=0)** - [Instructor] How do we do deep learning with unstructured text data?
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=5)** We will learn with an example in this chapter.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=7)** First, let's take a look at the problem we are going to solve.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=12)** Spam classification is a popular use case with filtering emails and chat messages.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=18)** In this use case, we have an SMS Data Set, that contains 2 variables.
>
> **[0:23](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=23)** The feature variable is the SMS message.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=26)** It is unstructured text with 1 or 2 lines.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=30)** The target variable is the message type.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=33)** It is classified as either ham or spam.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=36)** The goal for this example, is to build an ANN that can classify text messages as ham or spam.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=44)** This is a simple use case but demonstrates the key steps needed to classify unstructured data with a deep learning model.
>
> **[0:53](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=53)** The key difference between classifying structured and unstructured data with queries is the pre-processing needed to prepare data.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=61)** For text, we need to clean it, remove stop words and lemmatize them before converting them into numeric representations.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=69)** We will use TF-IDF in this example.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=72)** We can also use word embeddings for this purpose.
>
> **[1:15](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=75)** The code for this example is available in the notebook code_05 XX Spam classification example.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=84)** Before we begin, we need to install the dependent libraries in Python, for text pre-processing.
>
> **[1:31](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=91)** Let's run the code in section 5.1.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-getting-started/spam-classification-problem?u=76281980&t=95)** It may take some time to install based on what is already installed on your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[Deep Learning]] (2), [[Unstructured Data]] (2), feature (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** sms (2), ann (1), idf (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)
> **CLI Commands:** python (1)
> **Versions:** 5.1 (1)
> **Speakers:** - [instructor] (1)

#### Creating text representations
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=0)** - [Instructor] Let us proceed to create text representations for spam data.
>
> **[0:04](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=4)** Code for this preprocessing is available in section 5.2 of the notebook.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=10)** Data in this example, is available in the CSV file, Spam.Classification.csv in the Exercise Files folder.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=18)** We load this data into a pandas data frame and print its content to check it.
>
> **[0:23](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=23)** We then separate the feature and target attributes into separate variables.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=29)** Let's run this code.
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=32)** As we can see, the spam message has a lot of special characters and words that need to be cleaned.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=40)** To perform the required pre-processing, we first create a custom tokenizer function.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=45)** This function first splits the sentences into tokens using the tokenizer in nltk library.
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=52)** Then it filters for stopwords.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=54)** Finally, it lemmatizes the words and returns them in a lemmatized array.
>
> **[1:00](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=60)** We create a TfidfVectorizer model using the custom vectorizer.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=65)** We build a model using the spam messages attribute, and also transform them into a TfidfVector.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=72)** We the convert this vector into a numpy array.
>
> **[1:15](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=75)** The feature variables are now ready for deep learning.
>
> **[1:19](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=79)** For the target variable, we first converted into numeric values using a label encoder.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=85)** This encoder provides encoding for two classes.
>
> **[1:29](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=89)** Then we create a one-hot encoding vector using the keras.utils.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=94)** The target variable is now ready.
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=97)** We print the size of the feature and target variables.
>
> **[1:40](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=100)** We then split the dataset into training and test sets.
>
> **[1:44](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=104)** Let's run this code now.
>
> **[1:47](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=107)** The feature variables have 4,566 columns, and the target variable has two.
>
> **[1:55](https://www.linkedin.com/learning/deep-learning-getting-started/creating-text-representations?u=76281980&t=115)** We can now proceed to build the deep learning model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), feature (4), [[Deep Learning]] (2), [[Pandas (Software)|Pandas]] (1), [[Tokens]] (1)
> **File Paths:** spam.classification.csv (1)
> **Env Vars:** csv (1)
> **Versions:** 5.2 (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Building a spam model
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980&t=0)** - Once the text data, is converted to numeric representations, the process of building and evaluating the model, is the same as structure data.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980&t=9)** Code for this video, is available in section 5.3 of the spam classification notebook.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980&t=15)** We start by defining the number of target classes, and the number of hidden nodes.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980&t=20)** We define the number of target classes to two, and the number of nodes in the hidden layer to 32.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980&t=26)** We begin to create a sequential model.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980&t=29)** We add two hidden layers of 32 nodes.
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980&t=32)** We then add an output layer, with two nodes and softmax activation, we compile the model with categorical crossentropy, as the loss function, we finally print the model.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980&t=45)** Let's run this code and check the model.
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980&t=52)** The model is now created, we can now perform training.
>
> **[0:57](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980&t=57)** We set the batch size to 256 and epochs to 10.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980&t=62)** We use 20% of the data for validation.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980&t=65)** We then fit the model and plot the accuracy.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980&t=68)** Finally, we also evaluate the model, let's run this code now, we see the accuracy reaching high 90% values as part of the training.
>
> **[1:22](https://www.linkedin.com/learning/deep-learning-getting-started/building-a-spam-model?u=76281980&t=82)** Evaluation also gives similar results, so we can proceed with this model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3)
> **Versions:** 5.3 (1)
> **Speakers:** - once (1)

#### Predictions for text
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=0)** - [Instructor] How do we do predictions with text?
>
> **[0:02](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=2)** The input data needs to be preprocessed in the same way feature variables were pre-processed during training.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=9)** The code for this predictions is available in section 5.4.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=13)** Here we are going to do predictions for multiple inputs in a batch.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=18)** Batches can be done on either structured or unstructured inputs and can actually have better resource utilization.
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=25)** We have two inputs, free entry to a fun contest, and, yup I will come over.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=31)** We want to predict if these two SMS messages are harm or spam.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=36)** We use the vectorizer model we built during training to transform them to a TFIDF vector, and then convert them to a number array.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=44)** We also print the shape of the vector.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=47)** To predict, we use the model to predict the probabilities of the target variables and use the Argmax function to pick the highest one.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=56)** We then print the predictions for both the inputs.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=59)** We finally use the label and coder to reverse transform the outputs and print the text labels.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=65)** Let's run this code and review the results.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=69)** The first message, free entry to fun contest, is predicted as spam, and the second entry, yup I will come over, is predicted as harm.
>
> **[1:17](https://www.linkedin.com/learning/deep-learning-getting-started/predictions-for-text?u=76281980&t=77)** This completes our example for text-based day planning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1), feature (1)
> **Env Vars:** sms (1), tfidf (1)
> **Versions:** 5.4 (1)
> **Speakers:** - [instructor] (1)


### 6. Deep Learning Exercise

[↑ Back to Table of Contents](#table-of-contents)

#### Exercise problem statement
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=0)** - [Instructor] Now that we have learned the concepts of deep learning and utilized them in a couple of examples, let's go ahead and try the learnings in a student exercise.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=11)** You are expected to try out this problem on your own, and then visit the remaining videos in this chapter to review the sample solution.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=20)** There are, of course, multiple ways to solve any problem.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=24)** The solution provided here is only one such way.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=27)** The use case to solve relates to root cause analysis of problems found in a data center.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=33)** We have a data center that runs a number of software services.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=37)** Service failures do happen from time to time, and the data center team needs to quickly troubleshoot and identify the root cause.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=45)** The team wants to build a model that can predict root causes reported by customers based on the telemetry generated and errors noticed.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=54)** They already have a system monitoring tool that tracks CPU, memory, and application latency characteristics of their servers.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=62)** In addition, they also track errors reported by their applications.
>
> **[1:07](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=67)** Can we use this information to predict root causes of the issues noticed?
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=72)** The problem statement is as follows: using data about CPU loads, memory load, network delays, and three types of errors observed, build a deep learning model to predict the root cause of the error.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=85)** A data set is available that has one record for each of these incident, indicating if any of the load issues or errors were noticed when the problem happened.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=95)** the data set is available in the root_cause_analysis.csv file that is part of the exercise files.
>
> **[1:42](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=102)** Each record in the file has a unique identifier ID that represents the incident.
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=108)** There are seven feature variables, namely CPU_LOAD, MEMORY_LEAK_LOAD, network DELAY, ERROR_1000, ERROR_1001, ERROR_1002, and ERROR_1003.
>
> **[2:01](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=121)** Each of them is a Boolean value of 1 or 0.
>
> **[2:04](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=124)** The target variable is ROOT_CAUSE.
>
> **[2:07](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=127)** It has three possible values, MEMORY_LEAK, NETWORK_DELAY, or DATABASE_ISSUE.
>
> **[2:13](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=133)** We want to build a model to predict the root cause based on the other values provided.
>
> **[2:19](https://www.linkedin.com/learning/deep-learning-getting-started/exercise-problem-statement?u=76281980&t=139)** Best of luck for this exercise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), [[Deep Learning]] (2), [[System Monitoring]] (1), application (1), feature (1)
> **Env Vars:** cpu (2), cpu_load (1), memory_leak_load (1), delay (1), error_1000 (1)
> **File Paths:** root_cause_analysis.csv (1)
> **Code Identifiers:** root_cause_analysis (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Preprocessing RCA data
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/preprocessing-rca-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/preprocessing-rca-data?u=76281980&t=0)** - The code for this exercise is available in the file code 06 XX incident root cause analysis exercise, section 6.2 covers pre-processing of incident data.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-getting-started/preprocessing-rca-data?u=76281980&t=13)** We first load the root cause analysis.CSV file into a pandas data frame and print its contents.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-getting-started/preprocessing-rca-data?u=76281980&t=20)** Let's run this code now and examine the contents.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-getting-started/preprocessing-rca-data?u=76281980&t=30)** Then we use the label encoder to transform the target variable into its encodings.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-getting-started/preprocessing-rca-data?u=76281980&t=36)** Given that all the values for the feature variables are either one or zero, it is already normalized so we don't have to do any further processing.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-getting-started/preprocessing-rca-data?u=76281980&t=45)** We simply convert the data to a numpy array of float numbers.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-getting-started/preprocessing-rca-data?u=76281980&t=50)** For target variable, we use one hot encoding.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-getting-started/preprocessing-rca-data?u=76281980&t=54)** Finally, we split the data into training and test sets, this gets the data ready for deep learning.
>
> **[1:00](https://www.linkedin.com/learning/deep-learning-getting-started/preprocessing-rca-data?u=76281980&t=60)** Let's run this code and review the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Pandas (Software)|Pandas]] (1), feature (1), [[Deep Learning]] (1)
> **File Paths:** analysis.csv (1)
> **Env Vars:** csv (1)
> **Versions:** 6.2 (1)
> **Speakers:** - the (1)

#### Building the RCA model
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/building-the-rca-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/building-the-rca-model?u=76281980&t=0)** - Now we proceed to build a model for root cause analysis.
>
> **[0:04](https://www.linkedin.com/learning/deep-learning-getting-started/building-the-rca-model?u=76281980&t=4)** The code for building the model is available in section 6.3 of the notebook.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-getting-started/building-the-rca-model?u=76281980&t=9)** We set the EPOCHS to 20 and BATCH SIZE to 64.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-getting-started/building-the-rca-model?u=76281980&t=13)** We will use a model with two hidden layers of 128 notes each and an output layer with three notes.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-getting-started/building-the-rca-model?u=76281980&t=20)** We will build the model, then fit the training data and then evaluate it against the test data.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-getting-started/building-the-rca-model?u=76281980&t=26)** Let's run this code.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-getting-started/building-the-rca-model?u=76281980&t=36)** We see the overall accuracy during training to be around 86% and the accuracy against test data to be 76%, we can continue to improve the model by increasing the number of layers or the number of nodes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3)
> **Env Vars:** epochs (1), batch (1), size (1)
> **Versions:** 6.3 (1)
> **Speakers:** - now (1)

#### Predicting root causes with deep learning
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/predicting-root-causes-with-deep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/predicting-root-causes-with-deep-learning?u=76281980&t=0)** - Let's not proceed to predict root causes.
>
> **[0:03](https://www.linkedin.com/learning/deep-learning-getting-started/predicting-root-causes-with-deep-learning?u=76281980&t=3)** The code for predictions is available in section 6.4 of the notebook.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-getting-started/predicting-root-causes-with-deep-learning?u=76281980&t=8)** We will first predict for a single input sample.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-getting-started/predicting-root-causes-with-deep-learning?u=76281980&t=11)** We set the values for the seven feature variables.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-getting-started/predicting-root-causes-with-deep-learning?u=76281980&t=15)** We then use the model to predict the probabilities for the various classes.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-getting-started/predicting-root-causes-with-deep-learning?u=76281980&t=19)** Then we use the argmax function to extract the position with the highest probability.
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-getting-started/predicting-root-causes-with-deep-learning?u=76281980&t=25)** Finally, we use the label and coder to retrieve the string class value for the root cause.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-getting-started/predicting-root-causes-with-deep-learning?u=76281980&t=30)** Let's predict for a single input now, the prediction is a database issue.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-getting-started/predicting-root-causes-with-deep-learning?u=76281980&t=37)** We can also perform a batch prediction in a similar fashion for multiple incidents in one shot, as shown here, let's run from multiple samples and review the results.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-getting-started/predicting-root-causes-with-deep-learning?u=76281980&t=51)** This concludes our exercise for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** feature (1), [[Probability]] (1), database (1)
> **Versions:** 6.4 (1)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Extending your deep learning education
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-getting-started/extending-your-deep-learning-education?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-getting-started/extending-your-deep-learning-education?u=76281980&t=0)** - [Kumaran] Now that you have learned about the concepts of deep learning, you can take your learning even further.
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-getting-started/extending-your-deep-learning-education?u=76281980&t=6)** First, learn more about how to optimize and fine-tune deep learning models.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-getting-started/extending-your-deep-learning-education?u=76281980&t=12)** Explore additional topics in deep learning, including convolutional neural networks and recurrent neural networks.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-getting-started/extending-your-deep-learning-education?u=76281980&t=20)** Analyze a machine learning problem in your work area and build a deep learning model to solve it.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-getting-started/extending-your-deep-learning-education?u=76281980&t=27)** Data always intrigues me.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-getting-started/extending-your-deep-learning-education?u=76281980&t=29)** I bet it intrigues you too, so let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (4), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1), [[Neural Networks]] (1), data (1)
> **CLI Commands:** find (1)
> **Speakers:** - [kumaran] (1)


## Instructor

- [[Kumaran Ponnambalam]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- Artificial Intelligence (AI)
- Deep Learning

## Path Context

### In [[Advance Your Skills in Deep Learning and Neural Networks]]
**1 of 8** | [[Artificial Intelligence Foundations- Neural Networks]] →

### In [[Fundamentals to Become a Machine Learning Engineer]]
← [[Machine Learning with Python- Foundations]] | **4 of 7** | [[Deep Learning- Model Optimization and Tuning (2022)]] →

### In [[Moving from Data Scientist to Data Analyst]]
← [[Python Statistics Essential Training]] | **6 of 10** | [[Apache Spark Essential Training- Big Data Engineering]] →

### In [[Getting Started with AI and Machine Learning]]
← [[Machine Learning Foundations- Linear Algebra]] | **3 of 7** | [[Hands-On AI- Image Processing with Python]] →

## Appears In

- [[Advance Your Skills in Deep Learning and Neural Networks]]
- [[Fundamentals to Become a Machine Learning Engineer]]
- [[Moving from Data Scientist to Data Analyst]]
- [[Getting Started with AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Deep Learning- Model Optimization and Tuning (2022)]] — Artificial Intelligence (AI), Machine Learning, Deep Learning
- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Classification Modeling]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)