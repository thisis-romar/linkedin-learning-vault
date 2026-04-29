---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: deep-learning-model-optimization-and-tuning-2022
url: "https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022"
duration_minutes: 54
duration: 54m
level: Advanced
updated: 2/1/2022
learners: 86498
skills:
  - Machine Learning
  - Artificial Intelligence (AI)
  - Deep Learning
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQG94hya2dyecw/learning-public-crop_675_1200/B4EZkLc0L2IwAg-/0/1756833727967?e=2147483647&amp;v=beta&amp;t=ZT9tm1YKLJB0SP_A9QUDasuV_L8YwzqQJbwqg50Sqfo"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Fundamentals to Become a Machine Learning Engineer]]'
  - '[[Advance Your Skills in AI and Machine Learning]]'
  - '[[Advance Your Skills as a Machine Learning Specialist]]'
prev_courses:
  - '[[Deep Learning Getting Started]]'
  - '[[Applied Machine Learning Ensemble Learning]]'
  - '[[Machine Learning and AI Foundations- Prediction, Causation, and Statistical Inference]]'
next_courses:
  - '[[Reinforcement Learning Foundations]]'
  - '[[Reinforcement Learning Foundations]]'
  - null
path_nav: '[{"path":"Fundamentals to Become a Machine Learning Engineer","position":5,"total":7,"prev":"Deep Learning Getting Started","next":"Reinforcement Learning Foundations"},{"path":"Advance Your Skills in AI and Machine Learning","position":2,"total":16,"prev":"Applied Machine Learning Ensemble Learning","next":"Reinforcement Learning Foundations"},{"path":"Advance Your Skills as a Machine Learning Specialist","position":9,"total":9,"prev":"Machine Learning and AI Foundations- Prediction, Causation, and Statistical Inference","next":null}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/machine-learning
  - skill/artificial-intelligence-ai
  - skill/deep-learning
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Deep%20Learning-%20Model%20Optimization%20and%20Tuning%20(2022).md)

![Deep Learning: Model Optimization and Tuning (2022)](https://media.licdn.com/dms/image/v2/D4E0DAQG94hya2dyecw/learning-public-crop_675_1200/B4EZkLc0L2IwAg-/0/1756833727967?e=2147483647&amp;v=beta&amp;t=ZT9tm1YKLJB0SP_A9QUDasuV_L8YwzqQJbwqg50Sqfo)

# Deep Learning: Model Optimization and Tuning (2022)

> Deep Learning as a technology has grown leaps and bounds in the last few years. More and more AI solutions use Deep Learning as their foundational technology. Studying this technology, however, presents several challenges. IT professionals from varying backgrounds need a simplified resource to learn the concepts and build models quickly. In this course, instructor Kumaran Ponnambalam provides a si

> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022) | 54m | Advanced | 86K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Introduction to Deep Learning Optimization]]** (6 videos)
- **[[#2. Tuning the Deep Learning Network]]** (6 videos)
- **[[#3. Tuning Back Propagation]]** (6 videos)
- **[[#4. Overfitting Management]]** (5 videos)
- **[[#5. Model Tuning Exercise]]** (6 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Optimizing neural networks
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizing-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizing-neural-networks?u=76281980&t=0)** - [Kumaran] Deep learning has revolutionized how humans interact with machines today.
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizing-neural-networks?u=76281980&t=5)** However, building deep learning models is not easy.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizing-neural-networks?u=76281980&t=8)** Data scientists spend weeks trying to tune their models to get desired accuracy and cost effectiveness.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizing-neural-networks?u=76281980&t=16)** Knowledge of the parameters available for tuning, the tuning process and best practices are essential for building effective models in agile timeframes.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizing-neural-networks?u=76281980&t=26)** My name is Kumaran Ponnambalam.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizing-neural-networks?u=76281980&t=27)** In this course, I will start off by exploring the process of model optimization.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizing-neural-networks?u=76281980&t=33)** Then, I will discuss various hyperparameters available and how to tune them.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizing-neural-networks?u=76281980&t=38)** An end-to-end exercise project will help students to fine tune a model by applying the learnings in the course.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizing-neural-networks?u=76281980&t=45)** Let's now start building optimized, deep learning models.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [kumaran] (1)

#### Prerequisites for the course
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=0)** - [Instructor] Before we begin the course, let's go through the course objectives, scope and prerequisites.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=7)** Deep Learning is a vast domain with a variety of tools and technologies.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=12)** This tool set is evolving rapidly.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=14)** Multiple courses exist that cover various aspects of Deep Learning, including concepts, libraries, tools and implementations.
>
> **[0:23](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=23)** One of the key components of Deep Learning is the math involved in it.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=27)** Some courses covered this math in-depth, and some ignore them as tools take care of the implementation.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=33)** The same place to various tools use for Deep Learning as they take care of the implementation of algorithms and techniques.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=41)** So what does this course cover?
>
> **[0:43](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=43)** The goal of this course is to educate the students about the Deep Learning hyper parameters, and how to run experiments to tune them.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=50)** It focuses on the tuning process, and best practices.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=54)** We will use the Keras toolkit for our examples.
>
> **[0:57](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=57)** Keras takes care of a lot of the heavy-lifting involved in Deep Learning, and helps in quickly building robust models.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=65)** We also do not cover the math behind the hyper parameters.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=68)** We have omitted deeper topics for ease of learning.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=72)** We also have some simple examples for getting started in Deep Learning optimization.
>
> **[1:17](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=77)** Our goal is to introduce Deep Learning optimization in a simple fashion, and help students move forward with additional advanced learning.
>
> **[1:26](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=86)** What are the prerequisites for the course?
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=88)** Students are expected to be familiar with machine learning concepts and technologies.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=93)** Hands-on experience is preferred.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=95)** They should also be familiar with Deep Learning concepts.
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=99)** They should be familiar with Python programming, and using Jupiter Notebooks.
>
> **[1:43](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=103)** We do not cover the usage of Keras and TensorFlow.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=106)** So it is recommended to compliment this course with those focusing on the use of Keras.
>
> **[1:52](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=112)** Familiarity with other tools like scikit-learn are also preferred.
>
> **[1:56](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=116)** Here is a list of recommended complementary courses that would help the students in coding skills with Deep Learning.
>
> **[2:03](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=123)** They are [[Deep Learning Getting Started]].
>
> **[2:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=125)** Building and Deploying Applications with TensorFlow.
>
> **[2:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=128)** And Building Deep Learning Applications with Keras 2.0.
>
> **[2:12](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=132)** Let's now get started with optimizing Deep Learning models.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **Best Practices:** recommended (2)
> **Prerequisites:** getting started (2)
> **CLI Commands:** python (1)
> **Versions:** 2.0 (1)
> **Speakers:** - [instructor] (1)

#### Setting up exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=0)** - [Instructor] In this video, we will set up the exercise files and the environment to use in this course.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=7)** All course exercises are built using Python 3.8.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=11)** We will be using Anaconda and Jupyter Notebooks, for these exercises.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=16)** You can download and install Anaconda from the website [anaconda.com/products/individual](https://anaconda.com/products/individual) for your specific operating system.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=28)** Once downloaded, we will go to the Anaconda UI.
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=32)** Here, we will create a new virtual environment called deep learning.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=36)** By clicking the create button at the bottom and providing the name of the environment.
>
> **[0:43](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=43)** The package we will use is Python 3.8.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=49)** This may take some time to set up.
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=52)** The deep learning environment is set up now.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=55)** We will now go back to home.
>
> **[0:57](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=57)** Choose the deep learning environment on the top, and then install Jupyter Notebook for that environment.
>
> **[1:07](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=67)** Jupyter Notebook is installed now for the deep learning environment.
>
> **[1:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=71)** Open the command prompt window.
>
> **[1:13](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=73)** Please note that if you're on Windows, you would want to use the Anaconda command prompt for the same.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=80)** The exercise files for this course have been downloaded to the folders users, LinkedIn, documents, exercise files.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=87)** Please download exercise files on your computer on a similar folder.
>
> **[1:32](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=92)** Navigate to this folder on the command prompt, we can explore these files from the command prompt.
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=99)** Now let's activate the new virtual environment we created using the command conda activate deep learning.
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=108)** Then, we can start the Jupyter Notebook server using the command Jupyter Notebook.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=113)** Please make sure that you are in the same folder as the exercise files are before using the command.
>
> **[2:04](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=124)** This command then opens up the Jupyter Notebook in your browser.
>
> **[2:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=128)** The exercise files and the data files can be seen in the root directory.
>
> **[2:12](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=132)** You will use these files in the later exercises.
>
> **[2:15](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=135)** In the next chapter, we will discuss the basics of deep learning optimization.

> [!info]- Semantic Content
>
> **Tools:** jupyter (6), anaconda (5), command prompt (4)
> **Exercise Files:** exercise files (6)
> **Prerequisites:** set up (3), install (2)
> **CLI Commands:** python (2), make (1)
> **UI Navigation:** go to (1), open the (1), navigate to (1)
> **Versions:** python 3 (2)
> **Cross-References:** go back to (1), in the next (1)
> **Code Keywords:** let (1)


### 1. Introduction to Deep Learning Optimization

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is deep learning?
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=0)** - [Instructor] Let's begin the course by reviewing the concept of deep learning.
>
> **[0:04](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=4)** What is deep learning?
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=7)** Deep learning is a field within machine learning that deals with building and using neural network models.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=14)** Neural networks with more than three layers are typically categorized as deep learning networks.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=20)** Neural networks mimic the functioning of a human brain.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=24)** They are organized similar to the brain cells and imitate how humans process data and make decisions.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=31)** Deep learning is a field that has seen exponential growth in the last few years.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=37)** While algorithms for neural networks have existed for some time, the advances in large scale data processing, as well as inference technologies, like GPUs, have spurred their popularity in real-world applications.
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=52)** Deep learning has been extremely popular in natural language processing, as the neural network architectures are ideal for dealing with unstructured data.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=62)** For the same reason, they are also popular for speech recognition and synthesis applications.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=69)** Image recognition is another domain where deep learning has made inroads.
>
> **[1:14](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=74)** Self-driving cars is a leading-edge technology that is being powered by deep learning.
>
> **[1:19](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=79)** Applications that require complex learning of behaviors are usually suited for deep learning.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=85)** The applications of deep learning are getting wide popularity in varied domains, like customer experience, healthcare, and robotics.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=94)** We will explore building optimized models for such applications in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), self (1), require (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Review of artificial neural networks
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=0)** - [Instructor] Before we get into optimization and tuning, let's review the basic concepts of Artificial Neural Networks in this video.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=8)** An ANN is a network of perceptrons.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=11)** We discussed earlier that a perceptron imitates the human brain cell.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=16)** Similar to how a human brain is created with a network of cells, an ANN is created with a network of perceptrons.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=24)** The perceptron is called a node in the neural network.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=28)** We will use node as the term to represent perceptrons going forward in this course.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=33)** Nodes are organized into multiple layers in a neural network.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=37)** A deep neural network usually has three or more layers.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=41)** Each node has its own weights, bias, and activation functions.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=45)** Each node is connected to all the nodes in the next layer, forming a dense network.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=51)** The node within a layer are not connected with each other.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=54)** There are some exceptions to this in advanced use cases though.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=58)** This diagram shows an example neural network.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=62)** Each neural network has one input layer, one or more hidden layers, and one output layer.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=68)** In the input layer, there is one node for each independent variable.
>
> **[1:13](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=73)** In this example, there are three.
>
> **[1:15](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=75)** The hidden layer has three layers for this example.
>
> **[1:18](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=78)** Layer one has four nodes, layer two has five nodes, and layer three has three nodes.
>
> **[1:23](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=83)** The number of layers, and the nodes in each layer, are determined by experience and trials, and it will vary from case to case.
>
> **[1:32](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=92)** The number of nodes in the output layer will vary based on the type of predictions.
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=97)** The output layer, in this example, has two nodes.
>
> **[1:40](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=100)** This arrangement of node represents the architecture of a given neural network.
>
> **[1:45](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=105)** How does the ANN work for predictions?
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=108)** The inputs or independent variables are sent from the input layer to the network.
>
> **[1:54](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=114)** Data may be pre-processed before using them.
>
> **[1:57](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=117)** Inputs are passed on to the next layer.
>
> **[1:59](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=119)** Each node is a perceptron containing weights, bias, and an activation function.
>
> **[2:04](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=124)** The formula is applied on the weights and the outputs derived.
>
> **[2:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=128)** This repeats for each node in the layer.
>
> **[2:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=131)** The results from all the nodes in a layer are passed onto the next layer, and this process is repeated.
>
> **[2:17](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=137)** As this process reaches the output layer, the final predictions will be derived.
>
> **[2:22](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=142)** I highly recommend watching the [[Deep Learning Getting Started]] course to discuss these concepts further if you have already not done so.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9)
> **Code Keywords:** let (1), case. (1), function (1)
> **Env Vars:** ann (3)
> **Definitions:** is a  (2), is called (1)
> **Cross-References:** we discussed (1), in the next (1)
> **Analogies:** similar to (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### An ANN model
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=0)** - [Instructor] What is a neural network model and how do we build it?
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=5)** A neural network model is represented by a set of parameters and hyperparameters.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=11)** The parameters include the weights of weights and biases for all the notes.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=16)** The hyper-parameters includes a number of levers like layers,nodes in a layer, activation functions, cost functions, learning rate, and optimizers.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=26)** Training An ANN Model means, determining the right values for these parameters, and hyperparameters such that it maximizes the accuracy of predictions for the given use case.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=38)** In this course, we will look at ways to optimize these hyperparameters to achieve the best results.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=44)** How do we train a model?
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=46)** We use training data like regular machine learning, where we know both dependent and independent variables.
>
> **[0:53](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=53)** We will start with a network architecture by intuition.
>
> **[0:57](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=57)** We also initialize weights and biases to random values.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=61)** Then we repeat iterations of applying weights and biases to the inputs and computing the error.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=68)** Based on the error found, we will adjust the weights and biases to reduce the error.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=72)** We keep repeating the process of adjusting weights and biases until the error gets to an acceptable value.
>
> **[1:19](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=79)** We will also fine tune the network hyper parameters to improve training speed and reduce iterations.
>
> **[1:26](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=86)** Finally, we will save the model as represented by it's parameters and hyperparameters and use it for predictions.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), finally, (1)
> **Env Vars:** ann (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Model optimization and tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=0)** - Let's start diving deeper into model optimization and tuning.
>
> **[0:04](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=4)** We need to tune our models for both efficiency and effectiveness.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=9)** Optimization can be focused on both inference and training goals.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=14)** Let's begin with the inference goals.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=16)** What are our goals for inference?
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=19)** We want better accuracy for our models.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=21)** We focus on higher model metrics like F1 scores as well as avoid variance and bias.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=28)** We want to lower inference costs.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=30)** We want smaller model sizes so they can be effectively stored on disk and loaded into memory.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=36)** We want to reduce the time taken for inference.
>
> **[0:39](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=39)** We also want to lower the resources used during inference, namely CPU, memory and disks.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=46)** Do note that the requirements for better accuracy and lower costs conflict with each other.
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=52)** Better accuracy would usually mean higher costs.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=55)** So a balance needs to be achieved so that we get the desired outcomes at affordable costs for the solution to be cost-effective.
>
> **[1:04](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=64)** In addition, we also want to optimize the training process.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=68)** Training deep learning models with large amounts of data may take multiple iterations and long training times that may run for hours or days.
>
> **[1:17](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=77)** We want to lower the time to train a model so we can run more experiments in less time.
>
> **[1:22](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=82)** We also want to avoid various training pitfalls like vanishing gradients, exploding gradients and overfitting.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Env Vars:** cpu (1)
> **Warnings:** note that (1)
> **Speakers:** - let (1)

#### The deep learning tuning process
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=0)** - [Instructor] Tuning a model should be executed through an organized process making sure that experiments are tracked and the results baselined.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=9)** Ad hoc tuning will only lead to ineffective results in the long term.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=14)** We first need to get ready for tuning.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=16)** For this, the first step is to set clear goals on the outcomes.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=21)** What are our accuracy or efficiency targets?
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=24)** Are those reasonable?
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=25)** We then need to select the training data and prepare it for experimentation.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=30)** It is important to choose datasets that are balanced across various classes and cover a wide range of real-world samples.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=38)** We should plan for testing and validation of models with independent data.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=42)** Multiple real-life use cases should be covered and production-like scenarios should be used for measuring model performance.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=50)** What are the key levers available in a deep learning model that can be experimented with?
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=55)** We have the network architecture levers like layers, nodes and weights.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=59)** We have multiple activation functions that can be tried out.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=63)** For training, we can control the epochs and batches to see how we can achieve the desired results with lower iterations.
>
> **[1:10](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=70)** Normalization, regularization and optimization techniques can be tried out to achieve better model stability and performance.
>
> **[1:19](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=79)** What are the best practices for running experiments?
>
> **[1:22](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=82)** Choose one lever or hyperparameter at a time.
>
> **[1:26](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=86)** Use your understanding, experience and team inputs to determine a set of values to experiment with.
>
> **[1:32](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=92)** For example, for activation functions, you may choose a subset of activation functions that you find most appropriate to your use case.
>
> **[1:41](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=101)** Run the experiment with each of the options and log the results.
>
> **[1:45](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=105)** Review the results, and then choose the best options/value.
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=108)** Once you have experimented with individual levers and chosen the best options, try combining these options and see how the performance improves.
>
> **[1:58](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=118)** This is an iterative back and forth process until the desired levels of performance are achieved.
>
> **[2:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=125)** Validate the results with multiple independent datasets to make sure that you get consistent results.
>
> **[2:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=131)** Before we jump into the various levers available, there are things we need to remember during experimentation.
>
> **[2:18](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=138)** There is no one-size-fits-all best option.
>
> **[2:21](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=141)** Each use case is unique and different models perform differently for the same option values.
>
> **[2:27](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=147)** So if a given option works best for one use case, do not expect the same for another use case.
>
> **[2:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=153)** The key for optimization is to keep experimenting.
>
> **[2:36](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=156)** Experiment the first time when you are building the initial model.
>
> **[2:40](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=160)** Experiment with multiple independent datasets to ensure consistency and repeat the experiments when new datasets become available to make sure that the model continues to perform well and there is no model drift.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (2), this, (1), case, (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Experiment setups for the course
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=0)** - In order to explore various tuning parameters and experiment with them, we have created an experiment setup.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=7)** We start with a notebook called common experiment functions.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=12)** In this notebook, we will use the same model for iris flower identification, that we explored in the [[Deep Learning Getting Started]] course.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=22)** We first need to install the required packages for the exercises if we have already not done so.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=28)** Please make sure to run this code, and check if all required dependencies are satisfied.
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=35)** Now let's explore the common functions that we will use throughout the course.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=40)** The get data method will load up the data from iris.csv, pre-process it, extract the feature and target data sets and return them.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=51)** The base model config method, initializes a set of model hyperparameters.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=56)** These are the various parameters we will experiment with, in this course.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=61)** For each parameter, a default value is set.
>
> **[1:04](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=64)** During the experiment, we will change one or more of these values, build models and compare results.
>
> **[1:13](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=73)** To create and run model method, we'll use the input model configuration, feature, and target variables to create a deep learning model, and build it.
>
> **[1:22](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=82)** Various hyperparameters that are set up in the config are used to build the model.
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=88)** On execution it will collect the results from the epochs, and return them to the main function.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=94)** Finally, the plot graph function takes in an array of accuracy measures, and plots them in a graph.
>
> **[1:41](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=101)** Each experiment has a key and a set of values.
>
> **[1:44](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=104)** The values are the accuracy measures for each epoch.
>
> **[1:47](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=107)** The plot shows how the accuracy of the model improves with each epoch for the given experiment.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=113)** Please explore more on these functions to understand what they do under the wraps.
>
> **[1:58](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=118)** We will use them in our experiments in our upcoming chapters.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1), finally, (1)
> **Prerequisites:** setup (1), getting started (1), install (1), set up (1)
> **File Paths:** iris.csv (1)
> **CLI Commands:** make (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - in (1)


### 2. Tuning the Deep Learning Network

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Epoch and batch size tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=0)** - [Instructor] Let us begin our optimization journey with the most common training parameters, namely batch sizes and epochs.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=8)** The general format we will follow for optimization in this course would be a quick review of the hyper parameter, followed by an exercise to try out various values and see their relative performance.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=21)** We will stay away from the background concepts informally.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=24)** We recommend additional readings on these topics to learn more.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=29)** What is a batch size?
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=31)** A batch size represents a set of samples sent through the ANN in a single pass.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=36)** The input data is broken up into multiple batches and each batch is passed through the network to obtain predictions and update parameters.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=45)** The maximum batch size is the size of the input data and batch sizes are usually configured in 2 power n values.
>
> **[0:53](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=53)** If the batch sizes are higher, it would lead to better GPU utilization as the samples in a batch can be processed in parallel.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=61)** It would also lead to lower training iterations and possible instability in the gradient descent.
>
> **[1:07](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=67)** The recommendation is to experiment with the model to find the right size.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=72)** A size of 32 has been found to be the most optimal for most use cases.
>
> **[1:17](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=77)** We now look at epochs.
>
> **[1:19](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=79)** Epochs are the number of times the entire training set is passed through the network.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=84)** Epochs similar to batches will only control training progress, not inference.
>
> **[1:29](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=89)** As epochs increase, the gains would taper off as the model gains accuracy.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=94)** An increase can also trigger instability beyond a certain point.
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=99)** It is recommended to choose the earliest value when accuracy stabilizers during the training process.
>
> **[1:45](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=105)** The recommendation is to figure out the right number of batches and epochs first, and then use that for further experimentation.
>
> **[1:52](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=112)** In the next video, we will experiment with epochs and batch sizes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), pass (1)
> **Env Vars:** ann (1), gpu (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Epoch and batch size experiment
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=0)** - [Narrator] Let's run some experiments now.
>
> **[0:02](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=2)** The code for this chapter is available in the notebook code-02-XX, Tuning the Deep Learning Network.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=9)** We first import the common experiments functions into this notebook.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=13)** Please be aware that if you change the common experiments function notebook, you will have to save that notebook and import it again.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=22)** The Epoch and Batch sizes exercise is in section 2.1.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=26)** This code is a standard template for all our experiments.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=30)** We first initialized the accuracy Mitchell's collection to empty.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=34)** We've done experiments with Batch sizes ranging from 16 to 128 incrementing by 16.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=40)** We'll get the base model configuration with the default setup for all the values from the common library.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=47)** We will also load up the training data with the get data method.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=51)** Now we set the Epochs to a value of 20.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=55)** For all our experiments, we will anyway capture the output after each Epoch so we can see the trend for Epochs through this.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=63)** We set the Batch size to the iterated value.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=66)** We can also create a model name to use Astra Friends in our output and graphs.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=72)** We then run the model and capture the accuracy performance after each Epoch.
>
> **[1:18](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=78)** As we iterate for multiple Batch sizes, we captured the performance for these values.
>
> **[1:23](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=83)** Let's review the model now.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=85)** Looking at the model summary output, we see that the model remains the same irrespective of the Batch size chosen.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=94)** Next we plot the captured results in a graph.
>
> **[1:38](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=98)** Looking at the graph, we can see the trends.
>
> **[1:41](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=101)** The x-axis has Epochs and the y-axis has accuracy found for that Epoch.
>
> **[1:47](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=107)** Individual lines are plotted for each Batch size.
>
> **[1:51](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=111)** Looking into the Epochs, we see that for lower Epochs the accuracy starts at a low value, but increases and stabilizes after a few Epochs.
>
> **[2:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=120)** The value at which the stabilization happens will vary based on the specific use case and other model parameters.
>
> **[2:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=128)** Now let's look at Batch size.
>
> **[2:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=131)** For lower Batch size, we see that the accuracy starts at a much higher range.
>
> **[2:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=136)** This is because there are more iterations within the Epoch for smaller Batch sizes.
>
> **[2:21](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=141)** Again the accuracy stabilizes as the Epochs progress.
>
> **[2:25](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=145)** For this specific use case, the accuracy range is higher for smaller Batch sizes.
>
> **[2:31](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=151)** A warning not for all experiments in this course though.
>
> **[2:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=154)** We are using a very small model with very little training data so repeating the same experiment may not provide consistent results.
>
> **[2:43](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=163)** For real life use cases, It is recommended to use a good training data set that can provide repeatable results across multiple trends of the same experiment.
>
> **[2:53](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=173)** Once we narrow down these parameters, we can fix them and use them for further downstream tuning with other parameters.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (1), this. (1), case, (1)
> **Warnings:** be aware (1), warning (1)
> **Versions:** 2.1 (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)

#### Hidden layers tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=0)** - [Guide] One of the key model architecture hyperparameters is the number of hidden layers.
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=6)** Let's explore and experiment with this value in this video.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=10)** A neural network can have one or more hidden layers that learns from training data and builds the model.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=16)** As the number of layers increases, it increases the possibility of learning complex relationships between the feature and target variables, but it will also increase the cost and time needed for both training and inference.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=31)** It also has the risk of overfitting the training set.
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=35)** A value of two has been found to be sufficient for simple problems.
>
> **[0:39](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=39)** It is recommended to increase the number of layers only based on experimentation if the set accuracy levels are not achieved.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=47)** Otherwise, additional layers will take resources and time without providing any additional value.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=54)** Let's switch to the node book now and look at section 2.3.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=58)** In this section, we keep the base model the same as the previous experiment and will only vary the number of layers.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=65)** The logic is the same as the previous experiment.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=68)** We experiment with layer counts of one to five.
>
> **[1:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=71)** Each layer will have 32 nodes.
>
> **[1:14](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=74)** We again get the base model and training data, but only chain the hidden nodes list.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=80)** Once we create the model, we see that as the number of layers increases the number of parameters of the model also increases, which leads to more resource requirements to process and store the model.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=93)** Let's plot the results and compare.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=95)** With a count of one, the initial accuracies are pretty low, but they continue to improve as the training goes on.
>
> **[1:43](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=103)** For a layer count of two, we see really high accuracy levels achieved within a few eBooks.
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=108)** But as the number of layers increases, accuracy actually starts dropping.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=113)** A layer count of two seems optimal for this use case.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), switch (1), continue (1), case. (1)
> **CLI Commands:** node (1)
> **Code Identifiers:** ebooks (1)
> **Versions:** 2.3 (1)
> **UI Navigation:** switch to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [guide] (1)

#### Determining nodes in a layer
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=0)** - [Instructor] We will experiment with nodes in a layer in this video.
>
> **[0:04](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=4)** The nodes in a layer are associated with its corresponding weights and biases, which in turn represents the learning from the training data.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=13)** As we increase the number of nodes in the layer, the model has better chances of learning more about the use case.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=19)** It can model complex relationships better.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=22)** However, similar to the number of layers, it will result in more training and inference resources and time.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=29)** It also has the possibility of overfitting the training set.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=33)** In general, the number of nodes in the layer should be somewhere between the number of nodes in the input and the number of nodes in the output.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=41)** Do recollect that the number of nodes in the input layer equals the number of feature variables in the sample, and the node count in the output layer equals the number of classes in the target variable.
>
> **[0:53](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=53)** Again, start with a low value like 32 and increase it based on experimentation.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=59)** Switching to the notebooks now.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=61)** The experiment for the number of layers is in section 2.4.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=65)** We will use the standard size of two hidden layers and vary the number of nodes from 8 to 32 in steps of 8.
>
> **[1:13](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=73)** Once we build and run the model, we can review the model summary.
>
> **[1:17](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=77)** From the model summary, we can see that the number of parameters increase as the number of nodes increase resulting in bigger models that would require more and more resources.
>
> **[1:29](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=89)** Let's proceed to plot the results.
>
> **[1:31](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=91)** As the number of nodes increase, there is a general tendency of increase in accuracy owing to more patterns being captured by additional nodes.
>
> **[1:40](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=100)** A count of 16 nodes seem to provide the best accuracy for this use case.
>
> **[1:45](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=105)** Once again, due to a small dataset, you may not see consistent results across multiple runs.
>
> **[1:51](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=111)** For real life use cases do use a big balanced data set that is sufficient to ensure consistent results across multiple runs.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (2), require (1), let (1)
> **CLI Commands:** node (1)
> **Versions:** 2.4 (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Choosing activation functions
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=0)** - [Instructor] Activation functions play a key role in building effective, deep learning networks.
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=5)** Let's explore the options available in this video.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=9)** Activation functions are useful for both hidden layers and output layers.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=13)** And the selection criteria for both is different.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=16)** Let's start with hidden layers.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=18)** The activation function for hidden layers depends upon the choice of the problem and the network architecture.
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=25)** The choice can also impact the stability and speed of the gradient descent.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=30)** There are a number of algorithms available for activation functions.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=34)** In general, rectified linear units work best for regular neural networks and convolutional neural networks.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=41)** Sigmoid works best for RNNs.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=44)** While these choices are default, experimentation is necessary to confirm them for a specific use case.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=51)** When it comes to the output layer, the activation function choice depends upon the type of machine learning problem.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=58)** For binary classification, sigmoid activation works best for the output layer.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=63)** For multi-class classification, softmax is the ideal choice as it provides probabilities for each class.
>
> **[1:10](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=70)** For regression problems, the linear activation function is sufficient.
>
> **[1:15](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=75)** Let's not run an experiment for activation functions for the hidden layer.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=80)** Code for this experiment is available in section 2.5.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=84)** We will experiment with three activation functions, namely a ReLU, sigmoid, and tanh.
>
> **[1:31](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=91)** We keep all other hyper-parameters as default.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=94)** On reviewing the model summary, we notice that changing activation functions do not change the number of parameters.
>
> **[1:41](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=101)** It actually impacts the values that are created inside them.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=106)** On plotting the results, we see that ReLU and tanh activations seem to provide similar results in accuracy, while sigmoid activation lacks behind for this specific use case.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (3), case. (2), default, (1), class. (1)
> **Versions:** 2.5 (1)
> **Speakers:** - [instructor] (1)

#### Initializing weights
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=0)** - [Instructor] While building a model, the weights and biases of all the nodes need to be initialized to some value, and then gradient descent will update them to get closer to better accuracy.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=11)** The initial values of the weights play a huge role in the speed of learning and the final accuracy achieved.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=19)** Multiple initialization techniques exist.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=22)** In random normal initialization, random values are drawn from a standard normal distribution and used to initialize the weights.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=30)** Zeros will initialize all the parameters to zeros, and ones will initialize them to the same value of one.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=37)** Random uniform will draw values from a random uniform distribution.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=42)** The difference between a normal and a uniform distribution is that in the case of normal, more values will be closer to the mean, while in uniform distribution, they are evenly spread out.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=54)** Overall, random normal works best for most use cases, and is almost never changed unless a special need arises.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=62)** More advanced and custom initialization functions are also possible.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=68)** Let's jump to the weights initialization experiment now.
>
> **[1:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=71)** We use the initializer list to have the list of all four techniques.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=76)** Keeping the base model settings, we only change the initialization technique and compare the results.
>
> **[1:22](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=82)** On running the code, we can plot the graph and compare.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=87)** Random normal and random uniform techniques do very well, while the ones and zeros have pretty bad results.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=93)** This is expected since ones and zeros will take a much longer time to get closer to ideal values than starting off with random values.

> [!info]- Semantic Content
>
> **Prerequisites:** initialization (5)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 3. Tuning Back Propagation

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Vanishing and exploding gradients
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=0)** - Building a stable and accurate deep learning model is reliant upon making steady progress during the backpropagation process, to achieve accurate results.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=10)** In this chapter, we will explore various options to manage backpropagation.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=15)** What problems are occurring backpropagation?
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=18)** Let's explore in this video.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=20)** Let's review the gradient descent process to begin with.
>
> **[0:23](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=23)** After forward propagation, we compute the error in prediction, between the estimated and actual target values.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=30)** Then based on that error, we compute a Delta value and update the output layer.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=36)** We then derive under the Delta value from this layer and update the previous layer.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=41)** And this goes on until the first hidden layer.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=45)** The values of the Delta's computed, should help adjust the weights and biases in such a way, so that additional iterations through the model will progressively reduce the error.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=56)** There should allow for stable progression in gradient descent.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=59)** If the values are too small, then there won't be any significant change in the rates, so subsequent forward propagation will end up with the same error and smaller Delta values.
>
> **[1:10](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=70)** This causes decay and the gradient descent will stall.
>
> **[1:13](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=73)** This is called vanishing gradients.
>
> **[1:15](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=75)** On the other hand if the deltas are too big, it will cause significant change in the weights.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=81)** This leads to a choppy gradient descent, and the added value will fluctuate, but will never converge.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=87)** This is called exploding gradients.
>
> **[1:29](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=89)** This graph illustrates the differences.
>
> **[1:32](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=92)** The light green line is the target line.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=95)** The blue line is a good gradient descent, which progressively gets closer to the target line.
>
> **[1:40](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=100)** The yellow line decays, and does not get closer to the target at all.
>
> **[1:44](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=104)** This is vanishing gradient.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=106)** The dark green line shows exploding gradients, but it oscillates around the targets, but never gets closer to it.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=113)** Vanishing and exploding gradients is an important problem to watch for and address during the deep learning process.
>
> **[2:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=120)** The right weight initialization technique needs to be used for the problem, so the weight start with optimal values.
>
> **[2:07](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=127)** Activation functions can impact gradient descent, so the right activation function needs to be chosen after experimentation.
>
> **[2:14](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=134)** Finally, there is a technique of batch normalization that can be applied.
>
> **[2:19](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=139)** We will discuss batch normalization in the next video.

> [!info]- Semantic Content
>
> **Definitions:** is called (2), is a  (2), is an  (1)
> **Code Keywords:** let (2), function (1), finally, (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - building (1)

#### Batch normalization
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=0)** - [Instructor] Batch Normalization is an important technique to manage vanishing and exploiting gradients during gradient descent.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=8)** In Batch Normalization, we normalize the inputs sent to each hidden layer.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=13)** When we see normalize, we actually use the StandardScaler model to center and scale the weights and biases.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=19)** For normalization, the values of the outputs of the hidden layer are considered for computing the mean and standard deviation.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=26)** Even if the delta updates and activation function scale down or scale up the values, this step will normalize the inputs to be of the same scale.
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=35)** Batch Normalizations help achieve higher accuracies with lower epochs, hence is also an optimization technique.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=42)** On the other hand, it can result in additional computations during training and inference and may increase resource utilization and execution times.
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=52)** The experiments for this chapter, are available in the notebook, 03_XX Tuning Back Propagation.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=59)** Let's explore the Batch Normalization technique in section 3.2.
>
> **[1:04](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=64)** Here, we use two Batch Normalization options, none and batch, and use that to run our experiments.
>
> **[1:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=71)** Switching to the common experiments function notebook, we see that we add Batch Normalization as a layer between the hidden layers.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=81)** Switching back, we build and run the model.
>
> **[1:23](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=83)** If you look at the model summaries, we see that for the model with batch, an additional layer has been added for Batch Normalization.
>
> **[1:31](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=91)** We then proceed to plot and examine the results.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=95)** We see that for the model with Batch Normalization, higher accuracy levels are achieved with smaller epochs.
>
> **[1:42](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=102)** This is because Batch Normalization controls the gradient descent and makes it move closer to the center.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1)
> **Versions:** 3.2 (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Optimizers
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980&t=0)** - [Instructor] Optimizers are key tools, that help gradient descent, achieve faster results.
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980&t=5)** The regular gradient descent process, is painfully slow and takes a lot of time to achieve the desired results.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980&t=11)** Consider a situation, where the training dataset has hundreds of thousands of samples, and the model has multiple layers.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980&t=19)** Training would take hours to run and consume significant resources, especially ,if you are using GPUs in the cloud.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980&t=26)** Limited training data, will also impact the speed of descent.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980&t=30)** Optimizers are algorithms, that help speed up the training process.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980&t=34)** Introduced during back propagation, they will adjust the delta values in each step, such that it prevents vanishing and exploding descent while inching the parameter adjustments, closer to the desired states.
>
> **[0:48](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980&t=48)** There are a number of optimizers available in the deep learning world, and we can also write a custom optimizer.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980&t=54)** The most popular ones include SGD or stochastic gradient descent, RMSprop, Adam and Adagrad.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980&t=62)** We are not going to discuss the internals informally for each of these algorithms in this course, but it's recommended for additional reading.
>
> **[1:10](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980&t=70)** The deep learning libraries like Keras and TensorFlow, support these popular ones after the box.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980&t=76)** So, we simply need to provide the option during the training process.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980&t=80)** In the next video, we will run an experiment for optimizers.

> [!info]- Semantic Content
>
> **Env Vars:** sgd (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Optimizer experiment
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizer-experiment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizer-experiment?u=76281980&t=0)** - [Instructor] Having learnt about optimizers in the previous video, let's run an experiment to compare the performance of various optimizers for the iris example.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizer-experiment?u=76281980&t=9)** Here in the optimizer list, we have chosen 'agd', 'rmsprop', 'adam' and 'adagrad'.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizer-experiment?u=76281980&t=16)** We build and run the model for each of these optimizer functions.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizer-experiment?u=76281980&t=21)** Switching to the common experiment function notebook, there is a get_optimizer function that sets up the optimizer based on the option provider.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizer-experiment?u=76281980&t=30)** A parameter called 'learning_rate' is also passed, which we will explore in the next video.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizer-experiment?u=76281980&t=37)** When we compile the model.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizer-experiment?u=76281980&t=38)** We provide the optimizer options to be used for training.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizer-experiment?u=76281980&t=42)** Switching back to the experiment, let's run the experiment and review the results.
>
> **[0:48](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizer-experiment?u=76281980&t=48)** The model definitions themselves don't change for different optimizers, but they merely impact the values of the parameters adjusted.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizer-experiment?u=76281980&t=56)** When we run the graph, we see that for this use case, all optimizers except adagrad, perform reasonably well and provide good accuracy at lower ebooks.
>
> **[1:07](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizer-experiment?u=76281980&t=67)** Again, the recommendation is to experiment and choose the right optimizer for the problem.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2), case, (1)
> **Code Identifiers:** get_optimizer (1), learning_rate (1)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Learning rate
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980&t=0)** - [Instructor] Associated with the optimizers, is a hyper parameter called the learning rate.
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980&t=6)** Learning rate is the rate at which the weights will change in response to the estimated error.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980&t=11)** It is the speed at which the model is expected to learn from the training data and adjust its weights.
>
> **[0:17](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980&t=17)** Learning rates work in conjunction with the optimizer.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980&t=21)** After computing the deltas, the optimizer will adjust the delta values based on the learning rates.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980&t=28)** Learning rates are numeric values in the sub decimal ranges.
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980&t=32)** How do we select the right learning rate for the problem?
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980&t=35)** If the learning rate value is large, it will adjust the values too fast.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980&t=40)** This means the model can learn faster with a few epochs.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980&t=44)** At the same time, there is the risk of exploding gradients, as big adjustments to the weights, will cause the gradient to be choppy.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980&t=51)** If the value is small, then the learning would be slower, but at a steady pace with minimal chopping.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980&t=58)** But if the value gets too small, it will result in vanishing gradients, as the deltas may not be big enough to reduce the error.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980&t=65)** Again, the value should be chosen based on experimentation for this specific use case.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Learning rate experiment
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate-experiment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate-experiment?u=76281980&t=0)** - [Instructor] We will now explore the learning rate experiment in the section 3.6 of the notebook for Back Propagation.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate-experiment?u=76281980&t=7)** We are going to experiment with multiple values of learning rate, namely 0.001, 1.005, 0.01, 0.1 and 0.5.
>
> **[0:17](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate-experiment?u=76281980&t=17)** We will build the models for all these learning rates.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate-experiment?u=76281980&t=20)** Switching to the common experiment functions.
>
> **[0:23](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate-experiment?u=76281980&t=23)** The learning rate is passed as a parameter while initializing the optimizer for the model.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate-experiment?u=76281980&t=29)** Switching back let's build and run these models and plot the graphs to review the results for learning rates.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate-experiment?u=76281980&t=36)** For a low value of 0.001.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate-experiment?u=76281980&t=38)** We see that the model settles for a low accuracy value, increasing it to 0.005 and 0.01 results in better accuracies, and this may be the ideal values for the model.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate-experiment?u=76281980&t=51)** Moving to 0.1 while the model gets near the previous accuracies, it is also choppy as it oscillates a lot.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate-experiment?u=76281980&t=59)** The value of 0.5 also results in oscillations, while the average accuracy is lower.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate-experiment?u=76281980&t=65)** We need to choose a learning rate that achieves higher accuracies while also making steady progress in accuracy across eBooks.

> [!info]- Semantic Content
>
> **Versions:** 0.001 (2), 0.01 (2), 0.1 (2), 0.5 (2), 3.6 (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** ebooks (1)
> **Speakers:** - [instructor] (1)


### 4. Overfitting Management

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Overfitting in ANNs
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=0)** - [Instructor] Overfitting is one of the main problems in building optimize models in machine learning.
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=6)** In this chapter, we will explore various options in controlling overfitting while building deep learning networks.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=13)** What is overfitting?
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=15)** overfitting happens when a model adapts itself to suit this training data.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=20)** It overfits the training data.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=22)** When overfitting happens, a model will perform with very high accuracy when predicting against the training samples also known as in sample testing, but when predicting against independent data samples that are not in the training data, the accuracy levels would be low.
>
> **[0:39](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=39)** Neural networks have a tendency to overfit when the models are too deep and have more than the required number of nodes.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=47)** How do we take care of overfitting?
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=49)** A number of solutions are available.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=51)** To begin with, we should focus on simpler models with smaller number of layers and nodes in a layer.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=58)** It is highly recommended to start with small numbers and only increase them when accuracy against the best data is low.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=65)** Also epochs and batch sizes should be controlled and the same recommendation of starting small and increasing as required holds good for them too.
>
> **[1:15](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=75)** Another area to focus is on training data variety, the training data should have sufficient variety to cover a large number of real world occurrences.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=84)** It should be sufficiently large for the model to learn.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=87)** For a classification, there also needs to be a balance between various classes in the training data.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=93)** Each class should be represented sufficiently in the training data set.
>
> **[1:38](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=98)** In addition, there are two other techniques available, namely regularization and dropouts.
>
> **[1:44](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=104)** We will discuss these two techniques in detail in the following videos.

> [!info]- Semantic Content
>
> **Definitions:** known as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Regularization
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization?u=76281980&t=0)** - [Kumaran] Regularization is an important technique for managing overfitting in neural networks.
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization?u=76281980&t=6)** Regularization controls overfitting during model training.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization?u=76281980&t=10)** How does it work?
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization?u=76281980&t=11)** Regularization algorithms provide an adjustment to the model parameters after they are updated.
>
> **[0:17](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization?u=76281980&t=17)** The adjustment reduces the variance in the model by providing a penalty when overfitting increases.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization?u=76281980&t=24)** There are multiple algorithms available for regularization, the most popular being L1, L2, and L1 and L2 combined.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization?u=76281980&t=33)** We are not going to discuss these algorithms in detail, but I recommend it for additional reading.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization?u=76281980&t=38)** They are already implemented in popular machine learning libraries.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization?u=76281980&t=42)** We can specify a regularizer when creating a hidden layer in Keras.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization?u=76281980&t=47)** We will compare these options in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [kumaran] (1)

#### Regularization experiment
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization-experiment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization-experiment?u=76281980&t=0)** - [Instructor] The code for experiments in this chapter are available in the notebook, Code_04_XX Overfitting Management.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization-experiment?u=76281980&t=8)** The regularization experiment is in section 4.3.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization-experiment?u=76281980&t=11)** Here, we are going to compare three options, L1, L2, and L1_L2.
>
> **[0:17](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization-experiment?u=76281980&t=17)** We parse them as options when creating hidden layers in Keras.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization-experiment?u=76281980&t=22)** Note that we are comparing validation accuracy for overfitting experiments.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization-experiment?u=76281980&t=26)** Let's run the experiment and review the results.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization-experiment?u=76281980&t=30)** L2 seems to perform better than other algorithms for this use case.
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization-experiment?u=76281980&t=35)** For the IDs dataset, the validation dataset is very small, so repeated runs may not have consistent results.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization-experiment?u=76281980&t=42)** In real world experiments, it is recommended to have a larger validation set to achieve consistent results across multiple runs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case. (1)
> **Env Vars:** l1_l2 (1)
> **Versions:** 4.3 (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Dropouts
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropouts?u=76281980&t=0)** - [Instructor] Another popular technique used to reduce over fitting is called dropouts.
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropouts?u=76281980&t=5)** Dropout works during forward propagation.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropouts?u=76281980&t=8)** By default, during forward propagation, the output of each node in the layer is sent to every node in the next layer.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropouts?u=76281980&t=15)** When using dropout, the outputs of some of the nodes in the layer are dropped randomly.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropouts?u=76281980&t=21)** During training, we can provide a percentage value to control the number of nodes being dropped.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropouts?u=76281980&t=27)** Dropping nodes randomly tends to result in focusing on feature values that have a high influence on the outcomes.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropouts?u=76281980&t=34)** But dropouts can also negatively impact the model if they drop relevant nodes that model important features.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropouts?u=76281980&t=42)** Try dropouts if you see symptoms of over fitting and use a percentage that provides the similar accuracy for both training and test data.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropouts?u=76281980&t=51)** Sometimes having no dropouts may provide the best results too.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropouts?u=76281980&t=55)** In the next video, we will experiment with dropouts.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2)
> **Cross-References:** in the next (2)
> **Code Keywords:** default, (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Dropout experiment
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropout-experiment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropout-experiment?u=76281980&t=0)** - [Instructor] We will now run the exercise for dropouts in section 4.5 of the notebook.
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropout-experiment?u=76281980&t=5)** Here, we choose multiple dropout values.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropout-experiment?u=76281980&t=8)** 0%, 10%, 20%, and 50%.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropout-experiment?u=76281980&t=12)** We then build and run the models for each of them.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropout-experiment?u=76281980&t=15)** Switching to the Common_Experiments_Function notebook, we see that a dropout layer will be added between hidden layers if a percentage is set.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropout-experiment?u=76281980&t=24)** Switching back, let's run the models and compare the validation accuracies.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropout-experiment?u=76281980&t=29)** Let's also plot the graph and examine the results.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropout-experiment?u=76281980&t=33)** To begin with, when a dropout is added, we see a dropout layer in the model summary.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropout-experiment?u=76281980&t=41)** Looking at the graph, a dropout percentage of 10% seemed to provide the best results for this specific use case.
>
> **[0:48](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropout-experiment?u=76281980&t=48)** As discussed in the previous video, dropouts can help or hurt a model.
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropout-experiment?u=76281980&t=52)** In this case, a dropout of 10% seems to be the right value.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case. (1), case, (1)
> **Versions:** 4.5 (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### 5. Model Tuning Exercise

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Tuning exercise: Problem statement
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=0)** - Having now discussed various tuning options available for deep learning networks, let's put them into practice to tune a neural network.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=9)** I would again like to caution that the results would vary based on the use case being executed, and consistency of results across multiple trends would be impacted by the amount of training data.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=21)** In this course, we use smaller datasets for demonstration purposes.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=26)** This is an exercise that the students are encouraged to attempt on their own, and then come back to the following videos to look at solutions.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=34)** There are multiple ways to solve the problem, and what is presented here, is one such example.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=40)** This is the same exercise that was provided in the deep planning getting started course, and we will continue to improve the basic model we built in that course.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=49)** The use case to solve relates to root cause analysis of problems found in our data center.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=55)** We have a data center that runs a number of software services.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=59)** Service failures do happen from time to time, and the data center team needs to look to quickly troubleshoot and identify the root cause.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=68)** The team wants to build a model that can predict root causes reported by customers based on telemetric, regenerated, and errors noticed.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=76)** They already have a system monitoring tool that tracks CPU, memory, and application latency characteristics of their servers.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=85)** In addition, they also track errors reported by their applications.
>
> **[1:29](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=89)** Can we use this information to predict root causes of these issues?
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=93)** This is the same problem we discussed in the Deep Learning, Getting Started Course.
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=97)** The problem statement is as follows, using data about CPU load, memory load, network delays, and four types of errors observed, build a deep learning model to predict the root cause of the error, then optimize the model performance using various techniques described in the course.
>
> **[1:55](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=115)** A dataset is available that has one record for each of the incident, indicating if any of the load issues or errors were noticed when the problems happen.
>
> **[2:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=125)** This is the CSV file with the data available, the file called root cause analysis.CSV available in the exercises folder.
>
> **[2:14](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=134)** Each record in the file has a unique identifier called ID that represents the Incident.
>
> **[2:19](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=139)** There are seven feature variables, namely, CPU load, memory load, delay, Error_1000, Error 1001, Error_1002 and Error_1003.
>
> **[2:31](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=151)** Each of them is a bullion value of one or zero.
>
> **[2:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=154)** The target variable is root cause.
>
> **[2:37](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=157)** It has three possible values, memory leak, network delay, and database issue.
>
> **[2:42](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=162)** We need to build a model to predict the root cause based on the other values provider.
>
> **[2:47](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=167)** For the optimization, the following hyper-parameters need to be optimized.
>
> **[2:53](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=173)** First, determine the ideal number of layers needed for the model, then determine the ideal number of nodes for each layer, using the number of layers determined before.
>
> **[3:03](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=183)** Next, tune the backpropagation process.
>
> **[3:06](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=186)** First select the best optimizer for the problem, then, using the optimizer selected, find the best learning rate for the problem.
>
> **[3:14](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=194)** Please use batch normalization for this purpose, then reduce overfitting, by identifying the best regularization algorithm for the problem.
>
> **[3:24](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=204)** Identify the best dropout rate while using the regularization that you have chosen.
>
> **[3:28](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=208)** Finally assemble all the hyper-parameters selections based on the individual experiments, and create a consolidated model with all of them.
>
> **[3:37](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=217)** Compare its performance against the default settings to see if overall improvement is obtained.
>
> **[3:43](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=223)** While the exercise requires only a few experiments, feel free to experiment with more parameters, and combinations of them and see how the model performs.
>
> **[3:53](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=233)** Best of luck for the exercise.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (3), csv (2)
> **Code Keywords:** let (1), continue (1)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** caution (1), troubleshoot (1)
> **Prerequisites:** getting started (2)
> **File Paths:** analysis.csv (1)
> **CLI Commands:** find (1)
> **Cross-References:** we discussed (1)

#### Acquire and process data
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/acquire-and-process-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/acquire-and-process-data?u=76281980&t=0)** - [Instructor] The code for this exercise is available in the notebook code_05_XX Incident Root Cause Analysis.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/acquire-and-process-data?u=76281980&t=7)** We will start with acquiring and processing the data for root cause analysis in section 5.2.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/acquire-and-process-data?u=76281980&t=14)** For this purpose, we have created a method called get_rca_data.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/acquire-and-process-data?u=76281980&t=18)** This will load up the root cause analysis CSV file.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/acquire-and-process-data?u=76281980&t=22)** It will then use the label encoder to encode the target variable.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/acquire-and-process-data?u=76281980&t=26)** We then convert the data set to a numpy array and separate the feature and target variables into separate arrays.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/acquire-and-process-data?u=76281980&t=34)** The arrays are then returned to the main function.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/acquire-and-process-data?u=76281980&t=36)** For building the model and plotting the graphs, we will continue to use the common experiment functions.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/acquire-and-process-data?u=76281980&t=42)** So we will import this notebook at the beginning.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/acquire-and-process-data?u=76281980&t=44)** For each of these experiments, we will follow the same template that we discussed earlier in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), continue (1)
> **Cross-References:** we discussed (1), earlier in (1)
> **Code Identifiers:** get_rca_data (1)
> **Env Vars:** csv (1)
> **Versions:** 5.2 (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Tuning the network
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=0)** - We begin our optimization exercise, by tuning the number of layers, in the network.
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=5)** This is available in section 5.3 of the notebook.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=9)** We will start with 32 nodes in a given layer, which we will anyway tune later in this video.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=15)** Then we build a model, with layer counts one to five.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=19)** Then we plot the accuracy values and compare.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=22)** Let's review the results from the results.
>
> **[0:23](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=23)** From the result seen, two layers seem to provide the highest accuracy level, at lower HIPO counts, and we will choose that value for the model.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=33)** Next, we move on to nodes in a layer.
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=35)** Here, we will try nodes counts from eight to 32, in increments of eight.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=41)** We will use two hidden layers, which is the value we selected earlier.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=45)** We'll then build the model, and compare its performance.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=49)** A node count of 32, seems to achieve, higher levels of accuracy, earlier in the training process.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=55)** So we will choose 32.
>
> **[0:57](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=57)** We will go with a layer count of two, and 32 nodes in each layer.

> [!info]- Semantic Content
>
> **Cross-References:** later in (1), earlier in (1)
> **CLI Commands:** node (1)
> **Code Keywords:** let (1)
> **Env Vars:** hipo (1)
> **Versions:** 5.3 (1)
> **Speakers:** - we (1)

#### Tuning backpropagation
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980&t=0)** - [Kumaran] We will tune the optimizers and learning rate for the root cause analysis model in this video.
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980&t=6)** Let's start with optimizers.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980&t=8)** We will try with all the four popular optimizers, namely SGD, RMSprop, Adam, and AdaGrad.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980&t=15)** Let's run the experiment and review the results.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980&t=19)** Other than AdaGrad, all other optimizers seem to perform equally.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980&t=24)** We will go with RMSprop.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980&t=26)** It could have been any of the other two, too.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980&t=29)** Next, we go to learning rates.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980&t=31)** We will experiment with five values, as shown here.
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980&t=35)** Let's run the experiment and compare the results.
>
> **[0:39](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980&t=39)** The smaller three values seem to provide equal and best results.
>
> **[0:43](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980&t=43)** So we will choose RMSprop for optimizer and 0.001 for learning rate for this exercise.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Env Vars:** sgd (1)
> **Versions:** 0.001 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [kumaran] (1)

#### Avoiding overfitting
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/avoiding-overfitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/avoiding-overfitting?u=76281980&t=0)** - [Instructor] Let's jump to choosing regularizers and dropouts in this video.
>
> **[0:04](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/avoiding-overfitting?u=76281980&t=4)** We will experiment with four values for the regularizer namely none, L1, L2 and L1 _ L2.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/avoiding-overfitting?u=76281980&t=12)** Let's run the experiment and review the results.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/avoiding-overfitting?u=76281980&t=16)** Both none and L2 seems to provide equivalent performance and if we run the experiment multiple times, we will see that they switch lead positions.
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/avoiding-overfitting?u=76281980&t=25)** We will go with L2 in this case.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/avoiding-overfitting?u=76281980&t=28)** Next we move to dropouts.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/avoiding-overfitting?u=76281980&t=30)** We will experiment with four values, namely 0%, 10%, 20% and 50%.
>
> **[0:39](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/avoiding-overfitting?u=76281980&t=39)** Running these experiments, we see a dropout of 20% provide slightly better results.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/avoiding-overfitting?u=76281980&t=45)** So we will choose L2 for regularization with a dropout rate of 0.2.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), switch (1), case. (1)
> **Versions:** 0.2 (1)
> **Speakers:** - [instructor] (1)

#### Building the final model
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980&t=0)** - Now that we have experimented with individual hyperparameters and decided on suitable values for each of them, let's put them all together into a single model and compare.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980&t=12)** Here, we first create the base minimal model with all the default values.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980&t=16)** We create and run this model and measure its accuracy.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980&t=21)** Then, we create a model with all the optimizations we have done and then measure its accuracy too.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980&t=27)** We will compare them in a graph.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980&t=30)** Looking at the graph, we see that the optimized model performs better.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980&t=34)** It was able to achieve higher levels of accuracy earlier in the epoch iterations.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980&t=40)** One warning I want to provide here though, this is a grossly simplified example with a small amount of training data.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980&t=47)** Repeating the experiment may not provide the same results.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980&t=50)** Also, while a hyper parameter value may perform well in an isolated experiments, it may perform badly if combined with certain values of other hyperparameters.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980&t=62)** So, this is a trial and error process in the real world, and it may take days or even weeks to find the right combination of these parameters.
>
> **[1:11](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980&t=71)** The goal of this course is to discuss the levers, process and template for running such experiments that you can take and use in your use cases.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Cross-References:** earlier in (1)
> **Exercise Files:** template (1)
> **Warnings:** warning (1)
> **Speakers:** - now (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Continuing your deep learning journey
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/continuing-your-deep-learning-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/continuing-your-deep-learning-journey?u=76281980&t=0)** - [Kumaran] Now that you have learned about the concepts and processes for optimizing deep learning models, you can take your learning even further.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/continuing-your-deep-learning-journey?u=76281980&t=8)** Explore additional topics in deep learning, including convolutional neural networks and recurrent neural networks.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/continuing-your-deep-learning-journey?u=76281980&t=15)** Analyze a deep learning problem in your work area and build a deep learning model to solve it.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/continuing-your-deep-learning-journey?u=76281980&t=22)** Optimize the deep learning problem with learnings from this course.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/continuing-your-deep-learning-journey?u=76281980&t=26)** Learn about scaling and serving machine learning models in production.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/continuing-your-deep-learning-journey?u=76281980&t=30)** Data always intrigues me.
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/continuing-your-deep-learning-journey?u=76281980&t=32)** I bet it intrigues you too, so let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
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

### In [[Fundamentals to Become a Machine Learning Engineer]]
← [[Deep Learning Getting Started]] | **5 of 7** | [[Reinforcement Learning Foundations]] →

### In [[Advance Your Skills in AI and Machine Learning]]
← [[Applied Machine Learning Ensemble Learning]] | **2 of 16** | [[Reinforcement Learning Foundations]] →

### In [[Advance Your Skills as a Machine Learning Specialist]]
← [[Machine Learning and AI Foundations- Prediction, Causation, and Statistical Inference]] | **9 of 9**

## Appears In

- [[Fundamentals to Become a Machine Learning Engineer]]
- [[Advance Your Skills in AI and Machine Learning]]
- [[Advance Your Skills as a Machine Learning Specialist]]

## Related Courses

_Courses sharing skills:_

- [[Deep Learning Getting Started]] — Artificial Intelligence (AI), Machine Learning, Deep Learning
- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Classification Modeling]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)