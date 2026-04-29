---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: applied-ai-building-nlp-apps-with-hugging-face-transformers
url: "https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers"
duration_minutes: 57
duration: 57m
level: Intermediate
updated: 2/2/2023
learners: 24490
skills:
  - Artificial Intelligence (AI)
  - Natural Language Processing (NLP)
  - Hugging Face Products
  - Applied Machine Learning
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHuhXQ3CLrSUg/learning-public-crop_675_1200/B4EZjiT7_mHgAc-/0/1756143534415?e=2147483647&amp;v=beta&amp;t=G0J2d-SPcvf1rz0vMpjoe5niteNUr9Xkfbm7PnHsgGs"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your Skills with Large Language Models]]'
prev_courses:
  - '[[AI Text Summarization with Hugging Face]]'
path_nav: '[{"path":"Develop Your Skills with Large Language Models","position":9,"total":9,"prev":"AI Text Summarization with Hugging Face","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/artificial-intelligence-ai
  - skill/natural-language-processing-nlp
  - skill/hugging-face-products
  - skill/applied-machine-learning
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Applied%20AI-%20Building%20NLP%20Apps%20with%20Hugging%20Face%20Transformers.md)

![Applied AI: Building NLP Apps with Hugging Face Transformers](https://media.licdn.com/dms/image/v2/D4E0DAQHuhXQ3CLrSUg/learning-public-crop_675_1200/B4EZjiT7_mHgAc-/0/1756143534415?e=2147483647&amp;v=beta&amp;t=G0J2d-SPcvf1rz0vMpjoe5niteNUr9Xkfbm7PnHsgGs)

# Applied AI: Building NLP Apps with Hugging Face Transformers

> Looking to expand your skill set in deep learning? Find out how to use Hugging Face transformers to build natural language processing (NLP) applications. In this course, instructor Kumaran Ponnambalam shows you how to build models quickly and easily using pretrained transformers from the Hugging Face library.Explore models designed for common NLP use cases such as question-answering, text summariz

> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers) | 57m | Intermediate | 24K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Building NLP apps with Transformers
  - Course coverage and prerequisites
  - Setting up the exercise files
- [**1. Question-Answering (Qu-An)**](#1-question-answering-qu-an) (5 videos)
  - Question-answering in NLP
  - Types of question-answering
  - Building a Qu-An pipeline
  - The SQuAD metric
  - Evaluating Qu-An performance
- [**2. Text Summarization**](#2-text-summarization) (5 videos)
  - Text summarization in NLP
  - The BART model architecture
  - Summarization with pipelines
  - The ROUGE score
  - Evaluating with ROUGE
- [**3. Natural Language Generation**](#3-natural-language-generation) (6 videos)
  - Natural language generation in NLP
  - Content creation with Transformers
  - Conversation generation
  - Chatbot conversation example
  - Machine translation in NLP
  - Translating with Hugging Face Transformers
- [**4. Customizing Models with Transfer Learning**](#4-customizing-models-with-transfer-learning) (6 videos)
  - Training a custom model
  - Loading a Hugging Face dataset
  - Encoding and preprocessing the dataset
  - Customizing the model architecture
  - Training the sentiment model
  - Predicting with the custom model
- [**5. Deploying and Using Hugging Face Models**](#5-deploying-and-using-hugging-face-models) (4 videos)
  - Inference challenges with Transformers
  - Customizing pretrained models
  - Model compression overview
  - Serving multiple models
- [**Conclusion**](#conclusion) (1 videos)
  - Continuing with Hugging Face

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Building NLP apps with Transformers
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-nlp-apps-with-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-nlp-apps-with-transformers?u=76281980&t=0)** - [Kumaran] Building natural language processing tasks using Pretrained Transformers from Hugging Face reduces the model development lifecycle and enables agile deployments.
>
> **[0:12](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-nlp-apps-with-transformers?u=76281980&t=12)** The ability to adapt pretrained models for specific use cases is a key skill for any deep learning engineer.
>
> **[0:20](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-nlp-apps-with-transformers?u=76281980&t=20)** My name is Kumaran Ponnambalam.
>
> **[0:23](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-nlp-apps-with-transformers?u=76281980&t=23)** In this course, we will discuss using and customizing transformer models from Hugging Face.
>
> **[0:30](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-nlp-apps-with-transformers?u=76281980&t=30)** We will walk through three use cases, namely question/answering, text summarization and text generation.
>
> **[0:38](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-nlp-apps-with-transformers?u=76281980&t=38)** Then we will customize a pre-trained model for sentiment analysis.
>
> **[0:43](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-nlp-apps-with-transformers?u=76281980&t=43)** Let's get started now with building natural language processing applications with Hugging Face.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [kumaran] (1)

#### Course coverage and prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=0)** - [Instructor] Before we get started with the course let's review the course coverage and prerequisites.
>
> **[0:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=7)** This course extends the learning of the course Applied AI, Getting Started with Hugging Face.
>
> **[0:13](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=13)** We will explore using pretrained Hugging Face models for three tasks, namely question answering, text summarization, and text generation.
>
> **[0:23](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=23)** We will then customize a pretrained sentiment analysis model using transfer learning.
>
> **[0:29](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=29)** Finally, we will touch upon optimizing transformer deployments for inference.
>
> **[0:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=35)** It is also important to note what we will not cover so we set the expectations right.
>
> **[0:41](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=41)** Transformers are built on complex mathematics behind the scenes.
>
> **[0:46](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=46)** We will not discuss the math behind Transformers, but merely use them for building use cases.
>
> **[0:52](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=52)** We are not going to be building Transformers from scratch, but merely customize them for a specific use case.
>
> **[0:59](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=59)** We will leverage pretrained Transformers in Hugging Face to implement all our example tasks.
>
> **[1:06](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=66)** Since Hugging Face is a community platform anyone can contribute to its repository, but we will not discuss the steps needed in doing so.
>
> **[1:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=76)** This course has a number of prerequisites.
>
> **[1:18](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=78)** I strongly recommend that the students get familiar with these concepts before taking the course.
>
> **[1:25](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=85)** You should be familiar with general machine learning concepts and technologies.
>
> **[1:30](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=90)** You should also be aware of natural language processing concepts and the machine learning process to build such applications.
>
> **[1:39](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=99)** Deep learning concepts and architectures is a key domain to be familiar with.
>
> **[1:44](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=104)** Recurrent neural networks and embeddings are also essential concepts as we use those as part of the course.
>
> **[1:52](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=112)** This course showcases examples in Python with Jupyter Notebooks, so familiarity is also required there.
>
> **[2:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=120)** Using Keras and TensorFlow frameworks is also essential to execute the examples in this course.
>
> **[2:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=127)** Some of the key recommended prerequisite courses are [[Deep Learning Getting Started]], and Recurrent Neural Networks.
>
> **[2:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=136)** They cover important concepts and examples that are foundations for this course.
>
> **[2:20](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=140)** This course extends the foundations discussed in Applied AI Getting Started with Hugging Face course, so it is essential to complete that course before starting this one.
>
> **[2:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=152)** Let's now set up the environment required for this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), extends (2), finally, (1), case. (1)
> **Prerequisites:** getting started (3), prerequisite (1), set up (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Tools:** jupyter (1)
> **Best Practices:** recommended (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Setting up the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=0)** - [Instructor] In this video, we will set up the exercise files and the environment to use in this course.
>
> **[0:06](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=6)** All course exercises are built using Python 3.9.
>
> **[0:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=11)** We will be using Anaconda and Jupyter Notebooks for these exercises.
>
> **[0:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=16)** You can download and install Anaconda from the website, [anconda.com/products/distribution](https://anconda.com/products/distribution) for your specific operating system.
>
> **[0:27](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=27)** Once downloaded, we will go to the Anaconda GUI.
>
> **[0:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=32)** Here we will create a new virtual environment called transformers-2.
>
> **[0:37](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=37)** To create, click on the Create button at the bottom, type in transformers-2 for the name, choose Python 3.9 version as the package, and then hit the Create button.
>
> **[0:52](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=52)** This will take some time to create the environment.
>
> **[0:57](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=57)** The environment is now created.
>
> **[0:59](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=59)** Go to the Home page, make sure transformers-2 is selected on the top, and then install Jupyter Notebooks by clicking on Install at the bottom.
>
> **[1:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=71)** Jupyter Notebook is installed now in this environment.
>
> **[1:15](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=75)** Now go to the command prompt.
>
> **[1:18](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=78)** Please note that if you are using Windows, you want to use the Anaconda command prompt for the same.
>
> **[1:24](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=84)** The exercise files for this course has been downloaded in the folder Users/linkedin/ExerciseFiles.
>
> **[1:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=92)** Please download the exercise files on your computer in a similar folder.
>
> **[1:38](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=98)** Navigate to this folder on the command prompt.
>
> **[1:41](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=101)** We can also explore these files from the command prompt.
>
> **[1:45](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=105)** Now, let's activate the new virtual environment using the command conda activate transformers-2.
>
> **[1:58](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=118)** Then we can start the Jupyter Notebook using the command: jupyter notebook.
>
> **[2:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=127)** Please make sure that you are in the same folder as the exercise files are before using this command.
>
> **[2:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=136)** This command then opens up the Jupyter Notebook in the browser.
>
> **[2:20](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=140)** The exercise files can be seen in the root directory.
>
> **[2:24](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=144)** We will use these exercise files in the later exercises.
>
> **[2:29](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=149)** Before we get started, we need to install the prerequisite Python modules for this course.
>
> **[2:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=154)** To perform this, open the notebook Code_O0_XX Setup Environment.
>
> **[2:40](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=160)** Run this notebook.
>
> **[2:42](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=162)** It may take some time to execute and install all the dependencies.
>
> **[2:45](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=165)** We have already run this for our setup.
>
> **[2:49](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=169)** In the next chapter, we will review the basics of machine learning for natural language processing.
>
> **[2:54](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=174)** Please do make sure that you're running TensorFlow 2.10 and Keras 2.10 to avoid issues later.

> [!info]- Semantic Content
>
> **Tools:** jupyter (6), anaconda (4), command prompt (4)
> **Prerequisites:** install (5), setup (2), set up (1), prerequisite (1)
> **Exercise Files:** exercise files (6), download the (1)
> **CLI Commands:** python (3), make (3)
> **UI Navigation:** go to (3), click on (1), navigate to (1), open the (1)
> **Versions:** python 3 (2), 2.10 (2)
> **Code Keywords:** let (1), this, (1)
> **URLs:** [anconda.com](https://anconda.com) (1)


### 1. Question-Answering (Qu-An)

> [↑ Back to Table of Contents](#table-of-contents)

#### Question-answering in NLP
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=0)** - [Instructor] In this chapter, we will discuss the question answering task in NLP and how to execute it using pre-trained models from Hugging Face.
>
> **[0:10](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=10)** Question answering, or Qu-An for short, is a popular task in NLP.
>
> **[0:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=16)** The goal of Qu-An is to answer questions posed by the user.
>
> **[0:21](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=21)** This are several applications in self-service.
>
> **[0:24](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=24)** It can be used to answer customer queries on a website based on product catalogs.
>
> **[0:31](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=31)** It can also be used to search an encyclopedia for answers to questions.
>
> **[0:37](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=37)** Question answering tasks usually are based on a context, which is an input body of text.
>
> **[0:44](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=44)** When a question is asked, the algorithm looks for answers within this context.
>
> **[0:49](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=49)** Typically, the algorithm would extract a subset of text or sentence from this context that answers the question asked.
>
> **[0:59](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=59)** How does the question answering process work in NLP?
>
> **[1:03](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=63)** To begin with, there is an input corpus which is a corpora of text documents that form the knowledge base.
>
> **[1:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=71)** The corpora is then tokenized and vectorized and then stored in its vectorized form.
>
> **[1:17](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=77)** When a question is asked, the question also goes through the same tokenization and vectorization process.
>
> **[1:24](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=84)** Then the Qu-An model kicks in.
>
> **[1:27](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=87)** It compares the question to the token sequences in the context that are most similar to the question.
>
> **[1:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=94)** Multiple candidate answers are usually scored and the best possible answer is returned to the requester.
>
> **[1:42](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=102)** Hugging Phase has predefined pipelines for question answering that makes the task of implementing one easy.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (2)
> **Env Vars:** nlp (3)
> **Code Keywords:** self (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Types of question-answering
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=0)** - [Instructor] In general, there are two types of question answering systems that are developed in NLP.
>
> **[0:06](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=6)** Let's quickly review them.
>
> **[0:08](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=8)** The first type is open domain question answering or ODQA.
>
> **[0:13](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=13)** These Qu-An systems can answer questions on any given topic.
>
> **[0:18](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=18)** Google search is a good example for this kind of a system.
>
> **[0:22](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=22)** It is usually built on a very large text corpus.
>
> **[0:25](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=25)** The entire Wikipedia corpora can be a great input to these kind of systems.
>
> **[0:31](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=31)** Given the volume of data, it takes an enormous amount of time to process this information, build a vectorized corpus, and then train the model.
>
> **[0:40](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=40)** It leads to very large model sizes.
>
> **[0:43](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=43)** Accuracy of these systems tend to be lower as they usually search a wide knowledge base.
>
> **[0:49](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=49)** They are typically used in public search engines.
>
> **[0:53](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=53)** They have higher costs for training and inference.
>
> **[0:57](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=57)** The second type of Qu-An system is the closed domain question answering system or CDQA.
>
> **[1:03](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=63)** This is trained on a limited set of text that is specific to a domain.
>
> **[1:08](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=68)** For example, it can be based on a knowledge base about drugs and pharmaceuticals.
>
> **[1:14](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=74)** These tend to result in smaller models and lower resource requirements.
>
> **[1:18](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=78)** They also tend to have a higher level of accuracy since the context is limited.
>
> **[1:24](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=84)** This is popular for building a number of enterprise use cases.
>
> **[1:28](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=88)** For example, it can answer questions about a specific product based on its frequently asked question knowledge base or product brochures.
>
> **[1:38](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=98)** A number of self-service applications can be build on these systems.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), public (1), self (1)
> **Env Vars:** nlp (1), odqa (1), cdqa (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Building a Qu-An pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=0)** - The exercise code for this chapter is in the notebook code O1XX question answering.
>
> **[0:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=7)** Let's open the notebook now.
>
> **[0:09](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=9)** Please make sure that you have executed the setup notebook to install all the dependent modules.
>
> **[0:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=16)** We start off by setting the verbosity level to error.
>
> **[0:21](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=21)** For the exercise, we use a small context about how the earth is formed.
>
> **[0:28](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=28)** Setting up the pipeline is straightforward.
>
> **[0:30](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=30)** We use the question answering pipeline task.
>
> **[0:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=34)** Also, we choose a specific model called Deep Set Mini LM Uncased Squad 2.
>
> **[0:41](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=41)** When the pipeline is created, it'll download the model from the hugging phase repository to the local cash.
>
> **[0:48](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=48)** To answer a specific question, we simply pass the question and the context to the pipeline and then print the results.
>
> **[0:56](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=56)** Let's execute this code.
>
> **[1:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=60)** The model artifacts will be downloaded from hugging phase if they are not already available in the local cash.
>
> **[1:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=67)** We asked a question, how much of earth is land?
>
> **[1:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=71)** We get the answer as 29%.
>
> **[1:15](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=75)** We see that the start and end character positions of the answer in the context is also returned.
>
> **[1:21](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=81)** In addition, we get a 95% confidence score.
>
> **[1:26](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=86)** We can ask another question in the same context, namely how are Mountain Ranges created?
>
> **[1:37](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=97)** We see the results here, but the confidence now is only 26%.
>
> **[1:42](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=102)** We can use the confidence score as a threshold to filter out answers that have low confidence and only return high confidence results to the user.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (1)
> **Prerequisites:** setup (1), install (1)
> **CLI Commands:** make (1)
> **Env Vars:** o1xx (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** download the (1)
> **Speakers:** - the (1)

#### The SQuAD metric
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=0)** - [Instructor] When we use Hugging Face models for our use case, we need to evaluate them for their accuracy.
>
> **[0:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=7)** NLP models are complex, and typical ML metrics, like accuracy scores, may not work all the time.
>
> **[0:14](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=14)** In this video, we will look at a special metric function, called SQuAD, to evaluate QAn systems.
>
> **[0:22](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=22)** SQuAD stands for Stanford Question Answering Dataset.
>
> **[0:26](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=26)** It is a popular dataset that is used to build and evaluate question answering systems.
>
> **[0:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=32)** SQuAD uses a scoring function to evaluate the accuracy of answers produced by a QAn system.
>
> **[0:40](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=40)** This function provides a collection of metrics, like FN scores, exact match, et cetera.
>
> **[0:46](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=46)** These metrics are adapted for question answering.
>
> **[0:49](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=49)** This algorithm can then be used to compare the correct answer with the predicted answer and compute performance scores.
>
> **[0:57](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=57)** It can also generate summary scores for an entire dataset.
>
> **[1:02](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=62)** Hugging Face contains a metrics package that provides implementation for many types of NLP metrics, including SQuAD metrics.
>
> **[1:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=71)** This metrics package can help evaluate the performance of QAn models.
>
> **[1:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=76)** To use the metrics package, we first create an evaluation dataset that contains the context, questions, and the corresponding right answers.
>
> **[1:26](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=86)** The dataset is then run through the model to generate predictions.
>
> **[1:30](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=90)** Then the SQuAD metric can be used to evaluate the performance of the model by comparing the predictions with the right answers.
>
> **[1:39](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=99)** We will explore the SQuAD metric with the metrics package in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), case, (1), fn (1), match, (1)
> **Env Vars:** nlp (2)
> **Definitions:** stands for (1), is a  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Evaluating Qu-An performance
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=0)** - [Instructor] Let's use the SQuAD metrics in Hugging Face to evaluate the performance of Qu-An.
>
> **[0:06](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=6)** We first import the evaluate module, that is part of Hugging Face.
>
> **[0:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=11)** We will then create a squad_metric object, using the load method.
>
> **[0:15](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=15)** We specify squad_v2 as the metric to load.
>
> **[0:19](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=19)** For the purposes of using the function, we will forego the actual inference process, and instead use sample predictions and real answers.
>
> **[0:28](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=28)** We will use one correct answer, Paris, and three possible predictions, Paris, London, and Paris is one of the best cities in the world.
>
> **[0:38](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=38)** To use the squad_metric, we need to create the predictions dictionary, and the references dictionary in the format shown here.
>
> **[0:46](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=46)** We will do evaluation individually, as well as cumulatively, using the squad_metric.compute method returns the evaluation.
>
> **[0:55](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=55)** We extract just the F1 score and print to the console.
>
> **[1:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=60)** Then we will also perform cumulative evaluation, and print the numbers.
>
> **[1:05](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=65)** Let's run this code now.
>
> **[1:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=71)** First, let us look at individual numbers.
>
> **[1:14](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=74)** For the exact match answer, Paris, we get an F1 score of 100.
>
> **[1:20](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=80)** For a no match answer of London, we get a score of zero.
>
> **[1:25](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=85)** For a partial match, where the word Paris is part of a long sentence, we get an F1 score of 22.
>
> **[1:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=92)** This gives an idea of how the scoring works.
>
> **[1:36](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=96)** Next, we look at the cumulative metrics across all three predictions.
>
> **[1:41](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=101)** The exact number shows the percentage of exact matches.
>
> **[1:45](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=105)** The F1 score is the average score across all predictions.
>
> **[1:50](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=110)** It then provides the count of answers, and how many of them have exact answers.
>
> **[1:55](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=115)** This provides an overview of the performance of the model across a large evaluation dataset.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), module (1), function (1), match, (1)
> **Code Identifiers:** squad_metric (3)
> **Speakers:** - [instructor] (1)


### 2. Text Summarization

> [↑ Back to Table of Contents](#table-of-contents)

#### Text summarization in NLP
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=0)** - [Instructor] In this chapter, let's explore the text summarization NLP task, and implement an example with Hugging Face.
>
> **[0:09](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=9)** Text summarization helps comprehend the content of a large body of text and create a much smaller summary that captures the context and key takeaways.
>
> **[0:22](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=22)** Text summarization helps automate a number of human comprehension tasks for enterprises.
>
> **[0:29](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=29)** For example, it can summarize a large document like a blog or a report for key information.
>
> **[0:36](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=36)** It can summarize a conversation or a meeting transcript, and extract key discussion points or action items.
>
> **[0:43](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=43)** It can also provide a preview of an article or email before clicking into its link.
>
> **[0:50](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=50)** Text summarization is a complex use case that is powerful and can help save human effort.
>
> **[0:57](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=57)** There are two types of summarization, and it is important to understand the type of summarization that a pre-trained model provides.
>
> **[1:05](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=65)** The first is called extractive summarization.
>
> **[1:08](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=68)** In this case, the model simply extracts a subset of sentences from the main input text, such that these sentences represent the context expressed in the input text.
>
> **[1:20](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=80)** Sentences are extracted verbatim.
>
> **[1:23](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=83)** Behind the scenes, each sentence in the article is given a score for context, and the top sentence is extracted as output.
>
> **[1:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=92)** It's possible that the summarization is not complete, and some information could be left out.
>
> **[1:38](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=98)** Extractive summarization models are simpler to train and use as long as they fulfill the requirements of the application.
>
> **[1:45](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=105)** For example, in a conversation between two individuals, the summary can only focus on the main discussion and leave out pleasantries and small talk.
>
> **[1:55](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=115)** The next type of summarization is abstractive summarization.
>
> **[1:59](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=119)** In this example, the goal is to create a human-like summary based on the input text that represents the context in a new set of sentences.
>
> **[2:09](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=129)** The content is not verbatim, but the gist is captured.
>
> **[2:14](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=134)** This results in new sentences.
>
> **[2:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=136)** Such models are more complex to build, but can serve as a good tool to reduce the sizes of large documents.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for example (2)
> **Env Vars:** nlp (1)
> **Speakers:** - [instructor] (1)

#### The BART model architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-bart-model-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-bart-model-architecture?u=76281980&t=0)** - [Instructor] We discussed BERT, GPT and T5 architectures in the "Getting Started with Hugging Face" course.
>
> **[0:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-bart-model-architecture?u=76281980&t=7)** There is another architecture called BART which we will briefly discuss in this video.
>
> **[0:13](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-bart-model-architecture?u=76281980&t=13)** BART stands for Bidirectional Auto-Regressive Transformers.
>
> **[0:18](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-bart-model-architecture?u=76281980&t=18)** It is proposed by a team from Facebook.
>
> **[0:21](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-bart-model-architecture?u=76281980&t=21)** It is another transformer architecture that uses both the encoder and the decoder stacks like T5.
>
> **[0:29](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-bart-model-architecture?u=76281980&t=29)** The encoder in BART is similar to the BERT architecture and the decoder is similar to GPT.
>
> **[0:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-bart-model-architecture?u=76281980&t=35)** There are implementation differences though.
>
> **[0:38](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-bart-model-architecture?u=76281980&t=38)** The BART model has proven to be effective for text summarization, question answering and text generation tasks.
>
> **[0:46](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-bart-model-architecture?u=76281980&t=46)** We will use a BART based pre-trained transformer for text summarization in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** bart (5), bert (2), gpt (2)
> **Cross-References:** we discussed (1), in the next (1)
> **Analogies:** similar to (2)
> **Definitions:** stands for (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### Summarization with pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=0)** - [Instructor] The code examples for this chapter are in the notebook Code_02_XX Text Summarization.
>
> **[0:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=7)** Let's open the notebook now.
>
> **[0:10](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=10)** For summarization, we use the input text shown here as verbose text.
>
> **[0:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=16)** We also remove the line feed characters before doing summarization.
>
> **[0:20](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=20)** Input text may have to go through further pre-processing to remove formatting in real use cases.
>
> **[0:27](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=27)** Let's run this code now.
>
> **[0:29](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=29)** For summary, HuggingFace supports a predefined pipeline called summarization.
>
> **[0:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=34)** We initialize this pipeline first.
>
> **[0:37](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=37)** It uses extractive summarization by default.
>
> **[0:41](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=41)** We can also set the minimum and maximum length of the summary desired.
>
> **[0:46](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=46)** Executing the summary produces the output that we will print to the console.
>
> **[0:51](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=51)** Let's execute this code and observe the results.
>
> **[0:55](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=55)** The model will get downloaded if it is not already there in the cache.
>
> **[1:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=60)** The results shows three lines from the original text extracted and printed.
>
> **[1:06](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=66)** This is how extractive summaries work.
>
> **[1:10](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=70)** We can also print the configuration for the model checkpoint used for summarization.
>
> **[1:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=76)** As seen here, it uses the Bart model for conditional generation and it is a distil version.
>
> **[1:26](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=86)** The default min length is 56 and the default max length is 142.
>
> **[1:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=92)** So do adjust these numbers based on your use case.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default. (1), case. (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The ROUGE score
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980&t=0)** - [Instructor] How do we measure the performance of summarization models?
>
> **[0:04](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980&t=4)** The ROUGE score is a popular measure used for this purpose.
>
> **[0:08](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980&t=8)** Evaluating summarization tasks is difficult using classical ML metrics like accuracy and F1.
>
> **[0:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980&t=16)** It is more complicated if this needs to be done for multiple samples and summarized.
>
> **[0:22](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980&t=22)** The ROUGE metric stands for Recall-Oriented Understudy for Gisting Evaluation.
>
> **[0:28](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980&t=28)** It is a special metric created to measure the performance of summarization models.
>
> **[0:33](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980&t=33)** The score measures the similarity between the generated summary and the original input text.
>
> **[0:40](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980&t=40)** ROUGE is not just one metric, but it is a collection of metric.
>
> **[0:45](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980&t=45)** The ROUGE-1 metric measures the unigram overlap between the summary and its input.
>
> **[0:51](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980&t=51)** ROUGE-2 measures the bigram overlap in a similar fashion.
>
> **[0:55](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980&t=55)** ROUGE-L identifies the longest common subsequence between the summary and the input and scores based on that.
>
> **[1:04](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980&t=64)** We are not going to cover the math behind these metrics but recommend that for the reading.

> [!info]- Semantic Content
>
> **Env Vars:** rouge (6)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### Evaluating with ROUGE
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=0)** - [Instructor] Let's explore how the ROGUE score works with the Hugging Face evaluation library in this video.
>
> **[0:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=7)** We load the ROGUE metric from the evaluate module in Hugging Face.
>
> **[0:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=11)** We will compare first two exact strings.
>
> **[0:15](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=15)** This is assuming that the generated summary is an exact verbatim of the original input text.
>
> **[0:22](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=22)** We call the compute metric on the evaluator and print the results.
>
> **[0:27](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=27)** Let's run this code.
>
> **[0:33](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=33)** We see that for exact text matches, all the scores are 1.0.
>
> **[0:38](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=38)** This is the highest possible score value.
>
> **[0:42](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=42)** Next, let's compare to entirely different strings.
>
> **[0:47](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=47)** This is assuming that the summary has no match to the input at all.
>
> **[0:51](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=51)** Let's run this code now.
>
> **[0:53](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=53)** In this case, all the scores are zero.
>
> **[0:56](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=56)** This is the lowest possible score.
>
> **[0:59](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=59)** Finally, we will do the evaluation for the summary we generated in the earlier video.
>
> **[1:06](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=66)** Running this code, we see that the rogue values hover around 60% in all the metrics for rogue1, rogue2, and rogueL.
>
> **[1:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=76)** This is a good score.
>
> **[1:18](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=78)** For your use case, it's recommended to explore different examples to identify the threshold value for good summaries.
>
> **[1:26](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=86)** Then this can be measured during production inference tasks and summarized for overall performance.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (2), module (1), finally, (1)
> **Env Vars:** rogue (2)
> **Code Identifiers:** roguel (1)
> **Versions:** 1.0 (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 3. Natural Language Generation

> [↑ Back to Table of Contents](#table-of-contents)

#### Natural language generation in NLP
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=0)** - [Instructor] Natural Language Generation is arguably the hottest domain in NLP that is gaining traction for a variety of use cases.
>
> **[0:10](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=10)** The goal of natural language generation or NLG for short, is to produce synthetic text output based on a given input or context.
>
> **[0:21](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=21)** While there has been similar technologies before, the goal for NLG is to produce text that is indistinguishable from human-generated text.
>
> **[0:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=32)** The text will read similar to how humans speak and write.
>
> **[0:36](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=36)** The output can be short, single phrases, or long, multiple paragraphs.
>
> **[0:42](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=42)** The decoded stack of the transformer is used to generate such text output.
>
> **[0:47](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=47)** Popular architectures for NLG include the GPT group of transformers, BART and T5.
>
> **[0:55](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=55)** NLG can be used to drive a variety of use cases, mostly in replacing or helping human effort.
>
> **[1:02](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=62)** It can create automated content for blogs or social media based on a trigger input.
>
> **[1:09](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=69)** It can be used to build chat bots and voice bots that can interact with customers and solve their problems.
>
> **[1:17](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=77)** It can be used in language translation to translate from one human language to multiple target languages.
>
> **[1:25](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=85)** It can be used to produce personalized emails and responses.
>
> **[1:30](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=90)** It can also generate verbose text reports based on structured data inputs.
>
> **[1:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=95)** It can create product descriptions and brochures based on specifications in a structured format.
>
> **[1:42](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=102)** In this chapter, we will explore multiple use cases for NLG including content generation, conversational AI, and machine translation.

> [!info]- Semantic Content
>
> **Env Vars:** nlg (5), nlp (1), gpt (1), bart (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Content creation with Transformers
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=0)** - [Instructor] The code for this chapter is available in the Notebook Code_03_XX Text Generation.
>
> **[0:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=7)** Let's open the notebook now.
>
> **[0:09](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=9)** In this video, we will use transformer pipelines for content creation.
>
> **[0:14](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=14)** The steps needed here are similar to other pipelines that we have used.
>
> **[0:20](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=20)** We start by creating a pipeline with the text generation task.
>
> **[0:24](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=24)** We will use the gpt2 transformer model for this purpose.
>
> **[0:28](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=28)** The gpt2 model uses only the decoder stack of the transformer to produce long sentence outputs based on a seed input sentence.
>
> **[0:38](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=38)** In order to generate synthetic text, we need a seed input.
>
> **[0:42](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=42)** In this case, we use this input as, "Natural Language Processing is a growing domain "in machine learning."
>
> **[0:50](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=50)** We pass this input to the text generator pipeline and specify the number of sequences as three.
>
> **[0:57](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=57)** This means that the pipeline will try to generate three separate outputs all starting with the same input sequence.
>
> **[1:04](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=64)** We also set the max number of tokens to 50 to limit the size of the output.
>
> **[1:09](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=69)** Let's run this code now and review the results.
>
> **[1:14](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=74)** The model will get downloaded from Hugging Face repository if it is not already available in the cache.
>
> **[1:21](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=81)** We see that there are three outputs generated, all of them starting with the same input provider.
>
> **[1:27](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=87)** However, the content beyond the seed sentence is unique.
>
> **[1:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=92)** As we read through the examples, we also see that they are cohesive and are indistinguishable from human generated content.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), pass (1)
> **Definitions:** is a  (1), means that (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### Conversation generation
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/conversation-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/conversation-generation?u=76281980&t=0)** - [Instructor] Another popular use case in NLP is the use of conversation generation in chat bots and voice bots.
>
> **[0:08](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/conversation-generation?u=76281980&t=8)** Bots listen to what the person at the other end says, or writes, understand their intent, and then generate appropriate responses.
>
> **[0:18](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/conversation-generation?u=76281980&t=18)** Such bots can be used to answer questions about specific topics or products.
>
> **[0:23](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/conversation-generation?u=76281980&t=23)** They can also ask follow-up questions to understand the problem further.
>
> **[0:28](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/conversation-generation?u=76281980&t=28)** Bots maintain the context and history of the conversation.
>
> **[0:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/conversation-generation?u=76281980&t=32)** So when an input comes from the other end, they use the previous context to frame the appropriate answer.
>
> **[0:39](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/conversation-generation?u=76281980&t=39)** In real world use cases, bots will combine additional data from backend systems to provide responses.
>
> **[0:47](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/conversation-generation?u=76281980&t=47)** Bots usually use other NLP services like named entity recognition, sentiment analysis, and question answering.
>
> **[0:54](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/conversation-generation?u=76281980&t=54)** For example, if a customer asks for the status of a specific order, the bot will use named entity recognition to extract the order number, query the backend databases for status, and then use text generation to produce an answer that sounds like a real person.
>
> **[1:12](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/conversation-generation?u=76281980&t=72)** Hacking phase also supports out of the box models to handle conversations.
>
> **[1:17](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/conversation-generation?u=76281980&t=77)** Let's explore one such model in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Chatbot conversation example
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=0)** - We will use the conversational pipeline available in Hugging Face for simulating chatbot-like conversations.
>
> **[0:08](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=8)** We first create a pipeline using the conversational task.
>
> **[0:12](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=12)** We choose a specific model checkpoint, called Facebook/blenderbot_Small_90M.
>
> **[0:19](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=19)** This is a relatively small model that can respond to general questions, and can ask follow-up questions.
>
> **[0:26](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=26)** Let's run this code to download the model, and print its architecture.
>
> **[0:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=34)** As seen in the config, this checkpoint is based on the Blenderbot Small For Conditional Generation architecture.
>
> **[0:43](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=43)** The pipeline can also store the context of the conversation, and use it for follow-up questions and answers.
>
> **[0:51](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=51)** To simulate the conversation, we have the first question and two follow-up questions.
>
> **[0:57](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=57)** The first question being, "do you have any hobbies?"
>
> **[0:59](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=59)** And second input being, "I like to watch movies."
>
> **[1:03](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=63)** The third input being, "action movies."
>
> **[1:06](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=66)** We first need to create a conversation context with the conversation function.
>
> **[1:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=71)** We then pass this context to the conversation pipeline.
>
> **[1:15](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=75)** This will produce the first output.
>
> **[1:17](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=77)** We can access the user input, and the bot output using the conversation context.
>
> **[1:23](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=83)** We then provide the second and third inputs, and generate the next two bot outputs.
>
> **[1:29](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=89)** These are printed to console.
>
> **[1:31](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=91)** We can also finally access the entire history by using the bot conversation object.
>
> **[1:37](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=97)** Let's run this code and review the results.
>
> **[1:42](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=102)** While not perfect, we see that the bot is able to answer questions, and also ask relevant follow-up questions.
>
> **[1:49](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=109)** In the second bot output, we see that it has used the context from the first exchange and asked follow-up questions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1), pass (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Speakers:** - we (1)

#### Machine translation in NLP
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980&t=0)** - [Instructor] The NLG task we will discuss in this chapter is machine translation.
>
> **[0:06](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980&t=6)** The ability to translate from one language to another is a key communication tool that helps in collaboration across the world.
>
> **[0:14](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980&t=14)** Machine translation is the field of NLP, where models perform translation from one language to another.
>
> **[0:22](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980&t=22)** Rather than doing verbatim word-to-word translation, these models perform human-like translation that focuses on context.
>
> **[0:31](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980&t=31)** GPT-3 and T5 are popular transformer architectures that are used in machine translation.
>
> **[0:38](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980&t=38)** Key challenges with building machine translation models is support for multiple languages and variance.
>
> **[0:45](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980&t=45)** Typically, machine translation models are huge.
>
> **[0:48](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980&t=48)** Custom smaller models can be built for some use case-specific applications, though.
>
> **[0:54](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980&t=54)** What are some of the key applications for machine translation?
>
> **[0:58](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980&t=58)** Translating speech, especially in real-time, is a key application that helps listeners irrespective of whether they know the speaker's language.
>
> **[1:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980&t=67)** Enterprises can use machine translation to translate documents, like product catalogs and user guides.
>
> **[1:13](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980&t=73)** In customer service, rather than staff agents for each language, real-time machine translation can help use the same set of agents for multiple languages.
>
> **[1:24](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980&t=84)** Multilingual text analytics can be useful for analyzing reviews for a global set of users.

> [!info]- Semantic Content
>
> **Env Vars:** nlg (1), nlp (1), gpt (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Translating with Hugging Face Transformers
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=0)** - [Instructor] Even though a translation pipeline exists in hugging face, we will use an explicit tokenizer and model and perform the tokenization and translation steps separately.
>
> **[0:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=11)** This is useful when a specific tokenizer and model combination is not supported in the pipeline.
>
> **[0:18](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=18)** We will first create a model based on the t5-base checkpoint.
>
> **[0:23](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=23)** This is based on the t5 architecture.
>
> **[0:26](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=26)** We use the auto model for sequence to sequence language modeling class for this purpose.
>
> **[0:31](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=31)** We get the tokenizer from the same t5-base checkpoint.
>
> **[0:36](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=36)** We will attempt to translate a English sentence to both German and French.
>
> **[0:42](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=42)** First, we create the inputs that will be given for German.
>
> **[0:46](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=46)** For the purposes of using T5, we need to add a prefix to the input text that indicates the type of task to execute.
>
> **[0:55](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=55)** Please note that a single T5 model can perform multiple NLP tasks like summarization and question answering in addition to translation.
>
> **[1:04](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=64)** We add the translate English to German phrase to tell the t5 model that we need to perform translation from English to German.
>
> **[1:13](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=73)** The input is provided to the tokenizer and we request the return_tensors for PyTorch.
>
> **[1:20](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=80)** To generate output, we use to generate method of the model with the input IDs.
>
> **[1:25](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=85)** The input IDs are the IDs for the embedding metrics.
>
> **[1:30](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=90)** Max length indicates the maximum length for the number of tokens in the output.
>
> **[1:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=95)** We then print the German translated text.
>
> **[1:39](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=99)** We skip any special tokens in the output.
>
> **[1:42](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=102)** For doing French translation, we follow the same steps, except that we prepend the translate English to French task at the beginning of the input.
>
> **[1:52](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=112)** Let's run this code and review the results.
>
> **[1:57](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=117)** As discussed earlier, the model will be downloaded from the hugging face repository to the cache if it is not already cached locally.
>
> **[2:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=127)** We now see the German translation and French translation printed in the console.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Code Identifiers:** return_tensors (1)
> **Env Vars:** nlp (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 4. Customizing Models with Transfer Learning

> [↑ Back to Table of Contents](#table-of-contents)

#### Training a custom model
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=0)** - [Instructor] Having used pre-trained transformers through pipelines in our previous examples, let's look at the process for training a custom model with hugging face artifacts.
>
> **[0:12](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=12)** This process is similar, irrespective of the specific model or use case that needs to be customized.
>
> **[0:19](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=19)** We will use transfer learning for the process.
>
> **[0:23](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=23)** Here, we will use a smaller dataset that is specific to the use case.
>
> **[0:28](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=28)** We then take the base model from hugging face, freeze or retrain the encoder/decoder weights, and then train a specific classifier or sequence generator as required by the use case.
>
> **[0:41](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=41)** During this process, we can choose to reuse some or all of the following from hugging face.
>
> **[0:48](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=48)** We can reuse the tokenizer to create embeddings.
>
> **[0:51](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=51)** We can reuse the model to take the based language model and customize.
>
> **[0:56](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=56)** We can also use datasets from hugging face for customizing the model.
>
> **[1:01](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=61)** In this chapter, we will build a custom model for sentiment analysis following this process.
>
> **[1:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=67)** Here are the steps needed for model training.
>
> **[1:10](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=70)** For acquiring the training text corpus and labeling, we will use a pre-labeled dataset called Poem Sentiment.
>
> **[1:18](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=78)** This dataset contains verses from poems that has been labeled for its sentiment.
>
> **[1:24](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=84)** We then will use the prebuilt checkpoint called Distilbert-case-uncased for the tokenizer and the model.
>
> **[1:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=92)** Then we will use transfer learning to start with the base checkpoint model and fine tune it.
>
> **[1:39](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=99)** Let's proceed to building this custom model in the rest of this chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case. (2)
> **Speakers:** - [instructor] (1)

#### Loading a Hugging Face dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=0)** - [Lecture] The code for this chapter is in the notebook.
>
> **[0:03](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=3)** Code_04_XX Building a custom Model with Transfer Learning.
>
> **[0:08](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=8)** Let's open the notebook now.
>
> **[0:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=11)** In this exercise, we will use the poem_sentiment dataset provided by Hugging Face.
>
> **[0:17](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=17)** If you intend to use your own dataset, it is recommended to convert it into the dataset format supported by Hugging Face.
>
> **[0:26](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=26)** Sample video for this conversion can be found in the last video of this chapter, where we create a dataset for inference.
>
> **[0:37](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=37)** We need to first import the load dataset model.
>
> **[0:41](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=41)** We then specify the model checkpoint to be used as distilbert-based-uncased and the dataset name as poem_sentiment.
>
> **[0:50](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=50)** To load the dataset we simply use the load dataset function.
>
> **[0:55](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=55)** The dataset is in Apache Arrow format.
>
> **[0:59](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=59)** We will also explore the schema of the dataset for some sample content and the sentiment labels used.
>
> **[1:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=67)** Let's run this code now.
>
> **[1:10](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=70)** Similar to downloading models the dataset is also downloaded from the Hugging Face repository and cashed locally.
>
> **[1:21](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=81)** Looking at the dataset schema we see that it has created a dataset dictionary.
>
> **[1:27](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=87)** The dictionary has three data sets namely, train, validation, and test.
>
> **[1:33](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=93)** These correspond to the training, validation and test dataset within the poem_sentiment dataset.
>
> **[1:40](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=100)** All the dataset have the same schema.
>
> **[1:43](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=103)** The features are a unique id, a verse text string that contains the poem's text and a label code indicating the sentiment label for that string.
>
> **[1:54](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=114)** The number of rows in each of these data sets is also printed.
>
> **[1:58](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=118)** As seen, these are small data sets.
>
> **[2:02](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=122)** Looking at the content, we see the ids, words text and label samples.
>
> **[2:08](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=128)** The labels are numeric.
>
> **[2:10](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=130)** The corresponding label names are also printed.
>
> **[2:13](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=133)** There are four.
>
> **[2:14](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=134)** Namely, negative, positive no impact, and mixed.
>
> **[2:18](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=138)** Let's now proceed to pre-process this data set, in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (1)
> **Code Identifiers:** poem_sentiment (3)
> **Cross-References:** in the last (1), in the next (1)
> **CLI Commands:** apache (1)
> **UI Navigation:** open the (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [lecture] (1)

#### Encoding and preprocessing the dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=0)** - [Lecturer] The poem dataset is already clean, and formatted so there are no special cleansing operations needed.
>
> **[0:08](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=8)** We will proceed to tokenize and vectorize this dataset.
>
> **[0:12](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=12)** We first create a tokenizer, using the same tokenizer available in the model checkpoint.
>
> **[0:18](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=18)** Do note that you will need to use the correct tokenizer class, based on the tokenizer type.
>
> **[0:25](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=25)** Here the class is DistilBertTokenizer.
>
> **[0:28](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=28)** Given that there are three data sets, we will write a tokenized function to tokenize each one of them.
>
> **[0:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=35)** Then we will run each of these data sets from the datasets dictionary through this function to tokenize, vectorize and return results.
>
> **[0:45](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=45)** We finally have some sample records for inspection.
>
> **[0:49](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=49)** Let's run this code now and inspect the results.
>
> **[0:54](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=54)** We see that there are two new features added to the dataset, namely, input IDs, and attention mask.
>
> **[1:05](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=65)** In order to explore this transformed data set further, let's pick the second record in the training data set.
>
> **[1:12](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=72)** Then we will print the content and counts.
>
> **[1:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=76)** Let's run this code and review the output.
>
> **[1:19](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=79)** The text is printed as, "it flows so long as falls the rain."
>
> **[1:25](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=85)** The corresponding input map is also printed.
>
> **[1:28](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=88)** This consists of embedding IDs from the embedding metrics for each token in the text.
>
> **[1:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=94)** The IDs always start with 101, which corresponds to the beginning of the string.
>
> **[1:40](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=100)** They end with 102, which is the end of the string.
>
> **[1:44](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=104)** In the middle, we have IDs that correspond to each token in the verse text.
>
> **[1:49](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=109)** The length of the input map is 28, and is much higher than the number of non-zero tokens.
>
> **[1:56](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=116)** This is because during tokenization, the strings are right parted with spaces up to the max length for this data set.
>
> **[2:04](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=124)** Next, the attention mask is set to one for all the non-zero input IDs.
>
> **[2:10](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=130)** This tells the decode a stack to only look at those tokens with the mask value of one.
>
> **[2:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=136)** The rest is all ignored.
>
> **[2:19](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=139)** Now we have the input strings tokenized and vectorized.
>
> **[2:23](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=143)** We will then proceed to separate the training, and validation data sets into separate variables.
>
> **[2:29](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=149)** We also set the num labels variable to the total number of variables.
>
> **[2:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=154)** Let's run this code and inspect the results.
>
> **[2:38](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=158)** We are ready for some training now.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), class, (1), type. (1)
> **Warnings:** note that (1)
> **Speakers:** - [lecturer] (1)

#### Customizing the model architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=0)** - [Instructor] When building a model from scratch, creating a model involves creating each layer, setting up various hyperparameters like activation functions and normalization and then initializing the weights and biases.
>
> **[0:15](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=15)** When it comes to transfer learning, we start with the base model.
>
> **[0:19](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=19)** Here we retrieve the sentiment model from the pretrained checkpoint and create its architecture.
>
> **[0:26](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=26)** This automatically copies over the current model architecture, hyperparameters and parameters.
>
> **[0:33](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=33)** First, let's print the config to see what has been set up.
>
> **[0:39](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=39)** For example, we can see the number of layers as 6 and the number of attention heads as 12.
>
> **[0:45](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=45)** The dropout is set to 0.1.
>
> **[0:51](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=51)** The model architecture used is DistilBertForMasked language modeling.
>
> **[0:59](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=59)** We can now proceed to use the model architecture and customize it.
>
> **[1:04](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=64)** A key decision to be taken here is if we want to freeze the weights for some of the layers.
>
> **[1:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=71)** Let's freeze the weights for the first layer and review the model summary.
>
> **[1:19](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=79)** We see that the first layer is the DistilBert encoded layer with most of the parameters.
>
> **[1:24](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=84)** Then we have a pre_classifier and a classifier that performs classification of records for sentiment.
>
> **[1:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=92)** Under Trainable parameters, we see that the first layer is ignored.
>
> **[1:37](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=97)** This means during back propagation, the weights of the first layer will not be updated.
>
> **[1:43](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=103)** This helps retain the original learnings from the base model.
>
> **[1:48](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=108)** Let's now switch the training label to true and review.
>
> **[1:55](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=115)** Now, we can see that all parameters are trainable.
>
> **[1:59](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=119)** At this point, we can further customize the model by adding or deleting layers too.
>
> **[2:08](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=128)** The layers object provides methods for doing such operations.
>
> **[2:12](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=132)** For this example, we will proceed with the existing architecture with all layers being trainable.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), switch (1)
> **Code Identifiers:** pre_classifier (1)
> **Versions:** 0.1 (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Training the sentiment model
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=0)** - [Narrator] Having prepared the input dataset and updated the model architecture let's proceed to train the model with the custom dataset.
>
> **[0:10](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=10)** Here the existing trained parameters already capture much of the required language patterns.
>
> **[0:17](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=17)** We are simply customizing it for the specific dataset.
>
> **[0:21](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=21)** The training step in transfer learning is similar to regular neural network training.
>
> **[0:27](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=27)** We first set up the batch size parameter.
>
> **[0:30](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=30)** Given that we are using TensorFlow for this exercise we should convert the training and validation dataset to tensors.
>
> **[0:38](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=38)** This can be done with the two TF Dataset function.
>
> **[0:44](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=44)** Then we use the compile method to compile the model.
>
> **[0:48](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=48)** We choose the Adam Optimizer with a specific learning rate the Sparse Categorical Cross Entropy Loss function and Sparse Categorical Accuracy for metrics.
>
> **[1:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=60)** This is an example of how we can set up training hyper-parameters.
>
> **[1:05](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=65)** Then we train the model with the training and validation datasets for five eBooks.
>
> **[1:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=71)** Let's run this code.
>
> **[1:14](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=74)** During this process the existing base parameters are updated based on the custom dataset being used.
>
> **[1:21](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=81)** This training may take some time as there are a large number of model parameters that need to be updated.
>
> **[1:28](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=88)** But rather than training a base model for days we are able to leverage an existing trained foundation model to create a custom model in a few minutes.
>
> **[1:39](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=99)** Now the training is complete.
>
> **[1:41](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=101)** We end up with a validation accuracy of 88%.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2)
> **Prerequisites:** set up (2)
> **Code Identifiers:** ebooks (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### Predicting with the custom model
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=0)** - [Instructor] Doing predictions with the custom model built with transfer learning is similar to using models built from scratch.
>
> **[0:08](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=8)** Because we are not using the pipeline, we need to do the pre-processing on the inference input, and also do post-processing on the outputs from the model.
>
> **[0:18](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=18)** We will perform the post-processing output steps in this video.
>
> **[0:23](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=23)** We want to find the sentiment of two poem verses as shown here.
>
> **[0:29](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=29)** We create a Python dictionary with the similar structure as the Dataset object.
>
> **[0:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=35)** We also have the labels here just for comparison sake.
>
> **[0:39](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=39)** They are not mandatory.
>
> **[0:41](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=41)** First, we create a Hugging Face dataset for inference using the from_dict method.
>
> **[0:48](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=48)** Then we create a dataset dictionary with this dataset.
>
> **[0:52](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=52)** The dataset dictionary creation is not needed.
>
> **[0:55](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=55)** We can use the dataset directly.
>
> **[0:57](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=57)** The code shown here is to demonstrate how a dataset dictionary can be created for training with custom data sources.
>
> **[1:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=67)** Then the dataset goes through the tokenizer to get the embeddings.
>
> **[1:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=71)** It is then converted to tensors.
>
> **[1:14](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=74)** These steps are similar to training.
>
> **[1:17](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=77)** For doing predictions, we simply call the predict method on the sentiment_model.
>
> **[1:22](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=82)** This returns the predictions' object.
>
> **[1:25](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=85)** Let's run this code now.
>
> **[1:31](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=91)** Let's examine the logits returned in the predictions.
>
> **[1:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=95)** There are two arrays.
>
> **[1:37](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=97)** Since we have two inputs for which we wanted predictions.
>
> **[1:41](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=101)** Each array has a score for each possible sentiment class or label.
>
> **[1:46](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=106)** In order to find the best class, we run this through an argmax function.
>
> **[1:51](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=111)** Then we will print the input text, predicted label, and the true label.
>
> **[1:58](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=118)** The sentiments are printed here for the two input sentences.
>
> **[2:02](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=122)** This chapter demonstrated how we can combine prebuilt artifacts from Hugging Face with custom code to create the desired outcomes for specific use cases.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), class, (1), function (1)
> **CLI Commands:** find (2), python (1)
> **Code Identifiers:** from_dict (1), sentiment_model (1)
> **Analogies:** similar to (2)
> **Speakers:** - [instructor] (1)


### 5. Deploying and Using Hugging Face Models

> [↑ Back to Table of Contents](#table-of-contents)

#### Inference challenges with Transformers
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=0)** - Transformers in hugging phase make the training and development of N L P tasks look easy but deploying these models in production is altogether a different ballgame.
>
> **[0:12](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=12)** In this chapter, we will explore some of the best practices on deploying models in production.
>
> **[0:19](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=19)** We begin with the discussion around inference challenges for transformers.
>
> **[0:24](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=24)** Transformers are built as general purpose language models pre-trained checkpoints or trained based on a specific use case and dataset.
>
> **[0:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=34)** How well will that model perform for your specific use case and data?
>
> **[0:39](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=39)** There are times when the existing model will work as is and deliver acceptable performance But in a lot of cases, the model needs to be customized with use case specific data sets Using transfer learning. Transformer models are huge, sometimes having more than a billion parameters.
>
> **[0:59](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=59)** Each of these parameters will take a specified amount of memory based on that data type and precision.
>
> **[1:05](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=65)** They typically need a large memory pool to be loaded up.
>
> **[1:09](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=69)** Memory is also needed to store additional temporary variables during mathematical operations.
>
> **[1:16](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=76)** Next comes compute requirements.
>
> **[1:18](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=78)** Executing inference with the transformer means walking through the encoder and or decoder and performing a series of mathematical operations.
>
> **[1:27](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=87)** They take a lot of CPU power.
>
> **[1:29](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=89)** Using GPUs can help paralyze this compute cycle, but at higher costs.
>
> **[1:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=95)** You will also notice that inference may sometimes have latency of a few seconds, which may not be acceptable based on the use case.
>
> **[1:45](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=105)** The infrastructure needs to be scaled to use parallel computing and other high performance resources.
>
> **[1:52](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=112)** Production deployments usually require inference for multiple concurrent requests and scaling at single deployment of the model for such requests can also be challenging.
>
> **[2:04](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=124)** Overall, the cost per inference will be significant.
>
> **[2:07](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=127)** If transformers are used as is for the use cases.
>
> **[2:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=131)** We will explore a few techniques that can be used to optimize transformers for inference cost in this chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), require (1)
> **CLI Commands:** make (1)
> **Env Vars:** cpu (1)
> **Speakers:** - transformers (1)

#### Customizing pretrained models
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=0)** - [Instructor] In the previous chapter, we discussed the process of taking a base pre-trained model and customizing it for our use case with transfer learning.
>
> **[0:10](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=10)** When should we do customization?
>
> **[0:12](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=12)** The first reason to customize a model is when the out-of-box Hugging Face model is not performing as per expectations.
>
> **[0:21](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=21)** If accuracy numbers are low for your use case, you should try to customize with use case-specific training data.
>
> **[0:29](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=29)** Next, the use case may deal with a specific set of vocabulary, like the medical or legal domains.
>
> **[0:36](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=36)** It may also have special grammar, like how tweets are returned or how the use of a language varies between different countries.
>
> **[0:45](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=45)** - In these cases, it may be required to customize the model.
>
> **[0:49](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=49)** Another reason might be that the base model is huge.
>
> **[0:53](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=53)** We can try to reduce the number of encoder layers or decoder layers to reduce the model size and see if it performs as desired.
>
> **[1:02](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=62)** Here are some important points to note when doing transfer learning with custom datasets: Go for small dataset sizes that are specific to your use case and represent all the scenarios equally.
>
> **[1:15](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=75)** Use high-quality datasets in terms of their integrity and labeling accuracy.
>
> **[1:21](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=81)** If you are modifying the model architecture, do it in an iterative manner by doing one change at a time and checking for impact on performance.
>
> **[1:30](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=90)** Do use thorough validation and testing to ensure that the model is reliable across multiple scenarios.
>
> **[1:39](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=99)** It is also a good practice to monitor production models for drift and bias.
>
> **[1:44](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=104)** Constant model retraining may be needed as new data comes in from production use.

> [!info]- Semantic Content
>
> **Cross-References:** previous chapter (1), we discussed (1)
> **Speakers:** - [instructor] (1), - in (1)
> **Code Keywords:** case, (1)
> **Best Practices:** good practice (1)
> **Prerequisites:** required to (1)

#### Model compression overview
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=0)** - [Instructor] One of the key techniques that is becoming popular in the deep learning world is model compression.
>
> **[0:06](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=6)** Let's briefly explore the possibilities for model compression in this video.
>
> **[0:11](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=11)** When we say model compression, we are talking about reducing the size of the model.
>
> **[0:17](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=17)** We take a trained and validated model and reduce its footprint.
>
> **[0:21](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=21)** There are two ways in which this can happen.
>
> **[0:24](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=24)** We can reduce the number of layers, nodes and parameters for the model.
>
> **[0:29](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=29)** We can also use storage formats that take less space.
>
> **[0:33](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=33)** For example, we can convert FLOAT32 variables for parameters to Integer variables and reduce their storage.
>
> **[0:42](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=42)** What are the benefits of such compression techniques?
>
> **[0:46](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=46)** If we reduce the number of parameters, it'll also reduce the number of math operations to be performed.
>
> **[0:52](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=52)** Reducing the parameters and using smaller storage types reduces the overall memory footprint for the model.
>
> **[0:59](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=59)** Both will also result in less compute power needed for inference.
>
> **[1:04](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=64)** What model compression techniques exist today?
>
> **[1:08](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=68)** Quantization is a technique that converts floating point numbers to smaller counterparts like integers.
>
> **[1:15](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=75)** Most ML frameworks support this function out of the box.
>
> **[1:19](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=79)** Pruning is a technique of selectively removing nodes and connections between the nodes in the neural network.
>
> **[1:26](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=86)** Low rank approximation reduces the dimensions of the data by eliminating unwanted information.
>
> **[1:33](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=93)** Knowledge distillation is an advanced machine learning technique that reduces the size while retaining the learned knowledge.
>
> **[1:41](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=101)** Neural architecture search is another technique that finds the best architecture for a given problem, but is compute intensive.
>
> **[1:50](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=110)** We will not explore details of these techniques in this course, but I highly recommend that you explore them on your own.
>
> **[1:57](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=117)** Some things to note regarding model compression, after performing compression, do retest the model with the original test and validation data sets to make sure that the performance of the model has not degraded.
>
> **[2:12](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=132)** Also, use the simpler techniques like quantization and pruning first before exploring other techniques.
>
> **[2:19](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=139)** These advanced techniques may require significant time, resources, and expertise to optimize the model.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1), require (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Env Vars:** float32 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Serving multiple models
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=0)** - [Instructor] Let's look at scenarios where multiple NLP models are used in an ML solution.
>
> **[0:06](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=6)** We may have to use multiple transformer models together to produce a single solution.
>
> **[0:12](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=12)** An ML solution may use multiple related models to provide overall user experience.
>
> **[0:18](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=18)** Solution design and deployment should consider this case and optimize across all models.
>
> **[0:24](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=24)** There are multiple ways in which models can be deployed together.
>
> **[0:28](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=28)** Let's review some popular configurations.
>
> **[0:31](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=31)** First is the chained models pattern.
>
> **[0:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=34)** Here, the models are chained in sequence.
>
> **[0:37](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=37)** The output of one model becomes the input to the other model.
>
> **[0:40](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=40)** For example, let's consider a chatbot that is answering questions asked by the user.
>
> **[0:47](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=47)** After the user enters the query, the first model will try to understand the context or intent of the user.
>
> **[0:54](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=54)** This is then provided as input to the next model, which would extract information that is relevant to the context like named entity recognition.
>
> **[1:03](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=63)** Finally, the information and context are provided to another model that will pull the best possible answer like a question answering model.
>
> **[1:12](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=72)** The next use case is single input independent models.
>
> **[1:15](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=75)** In this case, the models are independent of each other, but they all use the same input.
>
> **[1:21](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=81)** The input is provided to all the models in parallel and they work concurrently to deliver the outputs.
>
> **[1:27](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=87)** For example, consider an online review analysis system.
>
> **[1:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=92)** The input would be the user review.
>
> **[1:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=95)** The input is then passed to three models in parallel, namely sentiment analysis, topic extraction, and obscenity detection.
>
> **[1:43](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=103)** The output from all these models are then collected together and stored.
>
> **[1:48](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=108)** The third option is that of alternate models.
>
> **[1:51](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=111)** In this case, the same input goes to all the models, but based on a condition, only one of the models available is chosen.
>
> **[1:59](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=119)** This is like an if-then-else structure.
>
> **[2:02](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=122)** For example, consider a language translation solution, which can take input in any language and translate it to English.
>
> **[2:10](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=130)** The first model is a language detector.
>
> **[2:13](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=133)** Based on the output of the language detector, only the corresponding translator will be invoked.
>
> **[2:19](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=139)** So if the text is in French, only the French translator would be invoked.
>
> **[2:25](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=145)** What are some of the best practices for multiple model deployments?
>
> **[2:29](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=149)** It is important to test these models together as a solution, issues with one model may impact other models or overall deployment goals.
>
> **[2:38](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=158)** Parallelize models as much as possible in deployment to reduce overall latency.
>
> **[2:44](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=164)** Even if the input to the model is the output of the previous model, validate that input to make sure it conforms to the requirements of the model.
>
> **[2:53](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=173)** You can also exit these prediction chains early.
>
> **[2:57](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=177)** For example, if the intent detector cannot detect the intent with a given level of accuracy, we don't need to invoke the other downstream models.
>
> **[3:06](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=186)** Scale each model independently as each may have different resource profiles.
>
> **[3:12](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=192)** Always perform end-to-end latency measurements to ensure that the overall user experience is not impacted.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2), finally, (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (1)
> **Env Vars:** nlp (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Continuing with Hugging Face
> [LinkedIn Learning](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/continuing-with-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/continuing-with-hugging-face?u=76281980&t=0)** - [Instructor] Now that you have learned about how to build applications using pre-trained transformers in Hugging Face, you can take your learning even further.
>
> **[0:10](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/continuing-with-hugging-face?u=76281980&t=10)** Customize a Hugging Face model with a new data set and review its performance.
>
> **[0:15](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/continuing-with-hugging-face?u=76281980&t=15)** Explore other NLP tasks available in Hugging Face.
>
> **[0:20](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/continuing-with-hugging-face?u=76281980&t=20)** Implement an NLP use case in your organization using Hugging Face transformers.
>
> **[0:26](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/continuing-with-hugging-face?u=76281980&t=26)** AI always intrigues me.
>
> **[0:28](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/continuing-with-hugging-face?u=76281980&t=28)** I bet it intrigues you too.
>
> **[0:30](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/continuing-with-hugging-face?u=76281980&t=30)** So let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (2)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Kumaran Ponnambalam]]

## Resources

- Exercise files available

## Skills Covered

- Artificial Intelligence (AI)
- Natural Language Processing (NLP)
- Hugging Face Products
- Applied Machine Learning

## Path Context

### In [[Develop Your Skills with Large Language Models]]
← [[AI Text Summarization with Hugging Face]] | **9 of 9**

## Appears In

- [[Develop Your Skills with Large Language Models]]

## Related Courses

_Courses sharing skills:_

- [[Applied Machine Learning Ensemble Learning]] — Artificial Intelligence (AI), Applied Machine Learning
- [[Building NLP Pipelines with spaCy]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Hands-On Natural Language Processing]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Advanced Nlp With Python For Machine Learning]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Complete Guide to NLP with R]] — Artificial Intelligence (AI), Natural Language Processing (NLP)

---

[↑ Back to top](#)