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
created: 2026-05-03
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
  - [Building NLP apps with Transformers](#building-nlp-apps-with-transformers)
  - [Course coverage and prerequisites](#course-coverage-and-prerequisites)
  - [Setting up the exercise files](#setting-up-the-exercise-files)
- [**1. Question-Answering (Qu-An)**](#1-question-answering-qu-an) (5 videos)
  - [Question-answering in NLP](#question-answering-in-nlp)
  - [Types of question-answering](#types-of-question-answering)
  - [Building a Qu-An pipeline](#building-a-qu-an-pipeline)
  - [The SQuAD metric](#the-squad-metric)
  - [Evaluating Qu-An performance](#evaluating-qu-an-performance)
- [**2. Text Summarization**](#2-text-summarization) (5 videos)
  - [Text summarization in NLP](#text-summarization-in-nlp)
  - [The BART model architecture](#the-bart-model-architecture)
  - [Summarization with pipelines](#summarization-with-pipelines)
  - [The ROUGE score](#the-rouge-score)
  - [Evaluating with ROUGE](#evaluating-with-rouge)
- [**3. Natural Language Generation**](#3-natural-language-generation) (6 videos)
  - [Natural language generation in NLP](#natural-language-generation-in-nlp)
  - [Content creation with Transformers](#content-creation-with-transformers)
  - [Conversation generation](#conversation-generation)
  - [Chatbot conversation example](#chatbot-conversation-example)
  - [Machine translation in NLP](#machine-translation-in-nlp)
  - [Translating with Hugging Face Transformers](#translating-with-hugging-face-transformers)
- [**4. Customizing Models with Transfer Learning**](#4-customizing-models-with-transfer-learning) (6 videos)
  - [Training a custom model](#training-a-custom-model)
  - [Loading a Hugging Face dataset](#loading-a-hugging-face-dataset)
  - [Encoding and preprocessing the dataset](#encoding-and-preprocessing-the-dataset)
  - [Customizing the model architecture](#customizing-the-model-architecture)
  - [Training the sentiment model](#training-the-sentiment-model)
  - [Predicting with the custom model](#predicting-with-the-custom-model)
- [**5. Deploying and Using Hugging Face Models**](#5-deploying-and-using-hugging-face-models) (4 videos)
  - [Inference challenges with Transformers](#inference-challenges-with-transformers)
  - [Customizing pretrained models](#customizing-pretrained-models)
  - [Model compression overview](#model-compression-overview)
  - [Serving multiple models](#serving-multiple-models)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing with Hugging Face](#continuing-with-hugging-face)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building NLP apps with Transformers](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-nlp-apps-with-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-nlp-apps-with-transformers?u=76281980&t=0)** - [Kumaran] Building [[Natural Language Processing (NLP)|natural language processing]] tasks using Pretrained Transformers from [[Hugging Face]] reduces the model development lifecycle and enables [[Agile Development|agile]] deployments. The ability to adapt pretrained models for specific use cases is a key skill for any [[Deep Learning]] engineer. My name is Kumaran Ponnambalam. In this course, we will discuss using and customizing [[Transformer Models]] from Hugging Face. We will walk through three use cases, namely question/answering, text summarization and text generation. Then we will customize a pre-trained model for sentiment analysis. Let's get started now with building natural language processing applications with Hugging Face.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (3), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Agile Development|Agile]] (1), [[Deep Learning]] (1), [[Transformer Models]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [kumaran] (1)

#### [Course coverage and prerequisites](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=0)** - [Instructor] Before we get started with the course let's review the course coverage and prerequisites. This course extends the learning of the course Applied AI, Getting Started with [[Hugging Face]]. We will explore using pretrained Hugging Face models for three tasks, namely question answering, text summarization, and text generation. We will then customize a pretrained sentiment analysis model using transfer learning. Finally, we will touch upon optimizing transformer deployments for inference. It is also important to note what we will not cover so we set the expectations right. Transformers are built on complex mathematics behind the scenes. We will not discuss the math behind Transformers, but merely use them for building use cases. We are not going to be building Transformers from scratch, but merely customize them for a specific use case. We will leverage pretrained Transformers in Hugging Face to implement all our example tasks. Since Hugging Face is a community platform anyone can contribute to its repository, but we will not discuss the steps needed in doing so. This course has a number of prerequisites. I strongly recommend that the students get familiar with these concepts before taking the course. You should be familiar with general machine learning concepts and technologies. You should also be aware
>
> **[1:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/course-coverage-and-prerequisites?u=76281980&t=92)** of [[Natural Language Processing (NLP)|natural language processing]] concepts and the machine learning process to build such applications. [[Deep Learning]] concepts and architectures is a key domain to be familiar with. Recurrent [[Neural Networks]] and embeddings are also essential concepts as we use those as part of the course. This course showcases examples in [[Python (Programming Language)|Python]] with Jupyter Notebooks, so familiarity is also required there. Using Keras and [[TensorFlow]] frameworks is also essential to execute the examples in this course. Some of the key recommended prerequisite courses are [[Deep Learning Getting Started]], and Recurrent Neural Networks. They cover important concepts and examples that are foundations for this course. This course extends the foundations discussed in Applied AI Getting Started with Hugging Face course, so it is essential to complete that course before starting this one. Let's now set up the environment required for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (5), [[Deep Learning]] (2), [[Neural Networks]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Python (Programming Language)|Python]] (1)
> **Prerequisites:** getting started (3), prerequisite (1), set up (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Tools:** jupyter (1)
> **Best Practices:** recommended (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the exercise files](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=0)** - [Instructor] In this video, we will set up the exercise files and the environment to use in this course. All course exercises are built using [[Python (Programming Language)|Python]] 3.9. We will be using Anaconda and Jupyter Notebooks for these exercises. You can download and install Anaconda from the website, [anconda.com/products/distribution](https://anconda.com/products/distribution) for your specific operating system. Once downloaded, we will go to the Anaconda GUI. Here we will create a new virtual environment called transformers-2. To create, click on the Create button at the bottom, type in transformers-2 for the name, choose Python 3.9 version as the package, and then hit the Create button. This will take some time to create the environment. The environment is now created. Go to the Home page, make sure transformers-2 is selected on the top, and then install Jupyter Notebooks by clicking on Install at the bottom. Jupyter Notebook is installed now in this environment. Now go to the command prompt. Please note that if you are using [[Windows]], you want to use the Anaconda command prompt for the same. The exercise files for this course has been downloaded in the folder Users/[[LinkedIn]]/ExerciseFiles. Please download the exercise files
>
> **[1:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=94)** on your computer in a similar folder. Navigate to this folder on the command prompt. We can also explore these files from the command prompt. Now, let's activate the new virtual environment using the command conda activate transformers-2.
>
> **[1:58](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/setting-up-the-exercise-files?u=76281980&t=118)** Then we can start the Jupyter Notebook using the command: jupyter notebook. Please make sure that you are in the same folder as the exercise files are before using this command. This command then opens up the Jupyter Notebook in the browser. The exercise files can be seen in the root directory. We will use these exercise files in the later exercises. Before we get started, we need to install the prerequisite Python modules for this course. To perform this, open the notebook Code_O0_XX Setup Environment. Run this notebook. It may take some time to execute and install all the dependencies. We have already run this for our setup. In the next chapter, we will review the basics of machine learning for [[Natural Language Processing (NLP)|natural language processing]]. Please do make sure that you're running [[TensorFlow]] 2.10 and Keras 2.10 to avoid issues later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Microsoft Products|Products]] (1), [[Windows]] (1), [[LinkedIn]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Tools:** jupyter (6), anaconda (4), command prompt (4)
> **Prerequisites:** install (5), setup (2), set up (1), prerequisite (1)
> **Exercise Files:** exercise files (6), download the (1)
> **CLI Commands:** python (3), make (3)
> **UI Navigation:** go to (3), click on (1), navigate to (1), open the (1)
> **Versions:** python 3 (2), 2.10 (2)
> **URLs:** [anconda.com](https://anconda.com) (1)


### 1. Question-Answering (Qu-An)

[↑ Back to Table of Contents](#table-of-contents)

#### [Question-answering in NLP](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=0)** - [Instructor] In this chapter, we will discuss the question answering task in NLP and how to execute it using pre-trained models from [[Hugging Face]]. Question answering, or Qu-An for short, is a popular task in NLP. The goal of Qu-An is to answer questions posed by the user. This are several applications in self-service. It can be used to answer customer queries on a website based on product catalogs. It can also be used to search an encyclopedia for answers to questions. Question answering tasks usually are based on a context, which is an input body of text. When a question is asked, the algorithm looks for answers within this context. Typically, the algorithm would extract a subset of text or sentence from this context that answers the question asked. How does the question answering process work in NLP? To begin with, there is an input corpus which is a corpora of text documents that form the knowledge base. The corpora is then tokenized and vectorized and then stored in its vectorized form. When a question is asked, the question also goes through the same tokenization and vectorization process. Then the Qu-An model kicks in. It compares the question to the token sequences in the context that are most similar to the question.
>
> **[1:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/question-answering-in-nlp?u=76281980&t=94)** Multiple candidate answers are usually scored and the best possible answer is returned to the requester. Hugging Phase has predefined pipelines for question answering that makes the task of implementing one easy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (1)
> **Definitions:** is a  (2), is an  (2)
> **Env Vars:** nlp (3)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Types of question-answering](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=0)** - [Instructor] In general, there are two types of question answering systems that are developed in NLP. Let's quickly review them. The first type is open domain question answering or ODQA. These Qu-An systems can answer questions on any given topic. [[Google]] search is a good example for this kind of a system. It is usually built on a very large text corpus. The entire Wikipedia corpora can be a great input to these kind of systems. Given the volume of data, it takes an enormous amount of time to process this information, build a vectorized corpus, and then train the model. It leads to very large model sizes. Accuracy of these systems tend to be lower as they usually search a wide knowledge base. They are typically used in public search engines. They have higher costs for training and inference. The second type of Qu-An system is the closed domain question answering system or CDQA. This is trained on a limited set of text that is specific to a domain. For example, it can be based on a knowledge base about drugs and pharmaceuticals. These tend to result in smaller models and lower resource requirements. They also tend to have a higher level of accuracy since the context is limited. This is popular for building a number of enterprise use cases. For example, it can answer questions about a specific product
>
> **[1:33](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/types-of-question-answering?u=76281980&t=93)** based on its frequently asked question knowledge base or product brochures. A number of self-service applications can be build on these systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Env Vars:** nlp (1), odqa (1), cdqa (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Building a Qu-An pipeline](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=0)** - The exercise code for this chapter is in the notebook code O1XX question answering. Let's open the notebook now. Please make sure that you have executed the setup notebook to install all the dependent modules. We start off by setting the verbosity level to error. For the exercise, we use a small context about how the earth is formed. Setting up the pipeline is straightforward. We use the question answering pipeline task. Also, we choose a specific model called Deep Set Mini LM Uncased Squad 2. When the pipeline is created, it'll download the model from the hugging phase repository to the local cash. To answer a specific question, we simply pass the question and the context to the pipeline and then print the results. Let's execute this code. The model artifacts will be downloaded from hugging phase if they are not already available in the local cash. We asked a question, how much of earth is land? We get the answer as 29%. We see that the start and end character positions of the answer in the context is also returned. In addition, we get a 95% confidence score. We can ask another question in the same context, namely how are Mountain Ranges created?
>
> **[1:37](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/building-a-qu-an-pipeline?u=76281980&t=97)** We see the results here, but the confidence now is only 26%. We can use the confidence score as a threshold to filter out answers that have low confidence and only return high confidence results to the user.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (1), install (1)
> **CLI Commands:** make (1)
> **Env Vars:** o1xx (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** download the (1)
> **Speakers:** - the (1)

#### [The SQuAD metric](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=0)** - [Instructor] When we use [[Hugging Face]] models for our use case, we need to evaluate them for their accuracy. NLP models are complex, and typical ML metrics, like accuracy scores, may not work all the time. In this video, we will look at a special metric function, called SQuAD, to evaluate QAn systems. SQuAD stands for Stanford Question Answering Dataset. It is a popular dataset that is used to build and evaluate question answering systems. SQuAD uses a scoring function to evaluate the accuracy of answers produced by a QAn system. This function provides a collection of metrics, like FN scores, exact match, et cetera. These metrics are adapted for question answering. This algorithm can then be used to compare the correct answer with the predicted answer and compute performance scores. It can also generate summary scores for an entire dataset. Hugging Face contains a metrics package that provides implementation for many types of NLP metrics, including SQuAD metrics. This metrics package can help evaluate the performance of QAn models. To use the metrics package, we first create an evaluation dataset that contains the context, questions, and the corresponding right answers. The dataset is then run through the model to generate predictions. Then the SQuAD metric can be used
>
> **[1:32](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-squad-metric?u=76281980&t=92)** to evaluate the performance of the model by comparing the predictions with the right answers. We will explore the SQuAD metric with the metrics package in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (2)
> **Env Vars:** nlp (2)
> **Definitions:** stands for (1), is a  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Evaluating Qu-An performance](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=0)** - [Instructor] Let's use the SQuAD metrics in [[Hugging Face]] to evaluate the performance of Qu-An. We first import the evaluate module, that is part of Hugging Face. We will then create a squad_metric object, using the load method. We specify squad_v2 as the metric to load. For the purposes of using the function, we will forego the actual inference process, and instead use sample predictions and real answers. We will use one correct answer, Paris, and three possible predictions, Paris, London, and Paris is one of the best cities in the world. To use the squad_metric, we need to create the predictions dictionary, and the references dictionary in the format shown here. We will do evaluation individually, as well as cumulatively, using the squad_metric.compute method returns the evaluation. We extract just the F1 score and print to the console. Then we will also perform cumulative evaluation, and print the numbers. Let's run this code now. First, let us look at individual numbers. For the exact match answer, Paris, we get an F1 score of 100. For a no match answer of London, we get a score of zero. For a partial match, where the [[Microsoft Word|word]] Paris is part of a long sentence, we get an F1 score of 22. This gives an idea of how the scoring works.
>
> **[1:36](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-qu-an-performance?u=76281980&t=96)** Next, we look at the cumulative metrics across all three predictions. The exact number shows the percentage of exact matches. The F1 score is the average score across all predictions. It then provides the count of answers, and how many of them have exact answers. This provides an overview of the performance of the model across a large evaluation dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (2), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** squad_metric (3)
> **Speakers:** - [instructor] (1)


### 2. Text Summarization

[↑ Back to Table of Contents](#table-of-contents)

#### [Text summarization in NLP](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=0)** - [Instructor] In this chapter, let's explore the text summarization NLP task, and implement an example with [[Hugging Face]]. Text summarization helps comprehend the content of a large body of text and create a much smaller summary that captures the context and key takeaways. Text summarization helps automate a number of human comprehension tasks for enterprises. For example, it can summarize a large document like a blog or a report for key information. It can summarize a conversation or a meeting transcript, and extract key discussion points or action items. It can also provide a preview of an article or email before clicking into its link. Text summarization is a complex use case that is powerful and can help save human effort. There are two types of summarization, and it is important to understand the type of summarization that a pre-trained model provides. The first is called extractive summarization. In this case, the model simply extracts a subset of sentences from the main input text, such that these sentences represent the context expressed in the input text. Sentences are extracted verbatim. Behind the scenes, each sentence in the article is given a score for context, and the top sentence is extracted as output. It's possible that the summarization is not complete,
>
> **[1:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/text-summarization-in-nlp?u=76281980&t=95)** and some information could be left out. Extractive summarization models are simpler to train and use as long as they fulfill the requirements of the application. For example, in a conversation between two individuals, the summary can only focus on the main discussion and leave out pleasantries and small talk. The next type of summarization is abstractive summarization. In this example, the goal is to create a human-like summary based on the input text that represents the context in a new set of sentences. The content is not verbatim, but the gist is captured. This results in new sentences. Such models are more complex to build, but can serve as a good tool to reduce the sizes of large documents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for example (2)
> **Env Vars:** nlp (1)
> **Speakers:** - [instructor] (1)

#### [The BART model architecture](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-bart-model-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-bart-model-architecture?u=76281980&t=0)** - [Instructor] We discussed BERT, GPT and T5 architectures in the "Getting Started with [[Hugging Face]]" course. There is another architecture called BART which we will briefly discuss in this video. BART stands for Bidirectional Auto-Regressive Transformers. It is proposed by a team from [[Facebook]]. It is another transformer architecture that uses both the encoder and the decoder stacks like T5. The encoder in BART is similar to the BERT architecture and the decoder is similar to GPT. There are implementation differences though. The BART model has proven to be effective for text summarization, question answering and text generation tasks. We will use a BART based pre-trained transformer for text summarization in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (1), [[Facebook]] (1)
> **Env Vars:** bart (5), bert (2), gpt (2)
> **Cross-References:** we discussed (1), in the next (1)
> **Analogies:** similar to (2)
> **Definitions:** stands for (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Summarization with pipelines](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/summarization-with-pipelines?u=76281980&t=0)** - [Instructor] The code examples for this chapter are in the notebook Code_02_XX Text Summarization. Let's open the notebook now. For summarization, we use the input text shown here as verbose text. We also remove the line feed characters before doing summarization. Input text may have to go through further pre-processing to remove formatting in real use cases. Let's run this code now. For summary, [[Hugging Face|HuggingFace]] supports a predefined pipeline called summarization. We initialize this pipeline first. It uses extractive summarization by default. We can also set the minimum and maximum length of the summary desired. Executing the summary produces the output that we will print to the console. Let's execute this code and observe the results. The model will get downloaded if it is not already there in the cache. The results shows three lines from the original text extracted and printed. This is how extractive summaries work. We can also print the configuration for the model checkpoint used for summarization. As seen here, it uses the Bart model for conditional generation and it is a distil version. The default min length is 56 and the default max length is 142. So do adjust these numbers based on your use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face|Huggingface]] (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The ROUGE score](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/the-rouge-score?u=76281980&t=0)** - [Instructor] How do we measure the performance of summarization models? The ROUGE score is a popular measure used for this purpose. Evaluating summarization tasks is difficult using classical ML metrics like accuracy and F1. It is more complicated if this needs to be done for multiple samples and summarized. The ROUGE metric stands for Recall-Oriented Understudy for Gisting Evaluation. It is a special metric created to measure the performance of summarization models. The score measures the similarity between the generated summary and the original input text. ROUGE is not just one metric, but it is a collection of metric. The ROUGE-1 metric measures the unigram overlap between the summary and its input. ROUGE-2 measures the bigram overlap in a similar fashion. ROUGE-L identifies the longest common subsequence between the summary and the input and scores based on that. We are not going to cover the math behind these metrics but recommend that for the reading.

> [!info]- Semantic Content
>
> **Env Vars:** rouge (6)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### [Evaluating with ROUGE](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/evaluating-with-rouge?u=76281980&t=0)** - [Instructor] Let's explore how the ROGUE score works with the [[Hugging Face]] evaluation library in this video. We load the ROGUE metric from the evaluate module in Hugging Face. We will compare first two exact strings. This is assuming that the generated summary is an exact verbatim of the original input text. We call the compute metric on the evaluator and print the results. Let's run this code. We see that for exact text matches, all the scores are 1.0. This is the highest possible score value. Next, let's compare to entirely different strings. This is assuming that the summary has no match to the input at all. Let's run this code now. In this case, all the scores are zero. This is the lowest possible score. Finally, we will do the evaluation for the summary we generated in the earlier video. Running this code, we see that the rogue values hover around 60% in all the metrics for rogue1, rogue2, and rogueL. This is a good score. For your use case, it's recommended to explore different examples to identify the threshold value for good summaries. Then this can be measured during production inference tasks and summarized for overall performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (2)
> **Env Vars:** rogue (2)
> **Code Identifiers:** roguel (1)
> **Versions:** 1.0 (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 3. Natural Language Generation

[↑ Back to Table of Contents](#table-of-contents)

#### [Natural language generation in NLP](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=0)** - [Instructor] Natural Language Generation is arguably the hottest domain in NLP that is gaining traction for a variety of use cases. The goal of natural language generation or NLG for short, is to produce synthetic text output based on a given input or context. While there has been similar technologies before, the goal for NLG is to produce text that is indistinguishable from human-generated text. The text will read similar to how humans speak and write. The output can be short, single phrases, or long, multiple paragraphs. The decoded stack of the transformer is used to generate such text output. Popular architectures for NLG include the GPT group of transformers, BART and T5. NLG can be used to drive a variety of use cases, mostly in replacing or helping human effort. It can create automated content for blogs or social media based on a trigger input. It can be used to build chat bots and voice bots that can interact with customers and solve their problems. It can be used in language translation to translate from one human language to multiple target languages. It can be used to produce personalized emails and responses. It can also generate verbose text reports based on structured data inputs.
>
> **[1:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/natural-language-generation-in-nlp?u=76281980&t=95)** It can create product descriptions and brochures based on specifications in a structured format. In this chapter, we will explore multiple use cases for NLG including content generation, [[Conversational AI]], and machine translation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Conversational AI]] (1)
> **Env Vars:** nlg (5), nlp (1), gpt (1), bart (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Content creation with Transformers](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=0)** - [Instructor] The code for this chapter is available in the Notebook Code_03_XX Text Generation. Let's open the notebook now. In this video, we will use transformer pipelines for [[Content Creation]]. The steps needed here are similar to other pipelines that we have used. We start by creating a pipeline with the text generation task. We will use the gpt2 transformer model for this purpose. The gpt2 model uses only the decoder stack of the transformer to produce long sentence outputs based on a seed input sentence. In order to generate synthetic text, we need a seed input. In this case, we use this input as, "[[Natural Language Processing (NLP)|Natural Language Processing]] is a growing domain "in machine learning." We pass this input to the text generator pipeline and specify the number of sequences as three. This means that the pipeline will try to generate three separate outputs all starting with the same input sequence. We also set the max number of [[Tokens]] to 50 to limit the size of the output. Let's run this code now and review the results. The model will get downloaded from [[Hugging Face]] repository if it is not already available in the cache. We see that there are three outputs generated, all of them starting with the same input provider. However, the content beyond the seed sentence is unique. As we read through the examples,
>
> **[1:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/content-creation-with-transformers?u=76281980&t=94)** we also see that they are cohesive and are indistinguishable from human generated content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Content Creation]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Tokens]] (1), [[Hugging Face]] (1)
> **Definitions:** is a  (1), means that (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Conversation generation](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/conversation-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/conversation-generation?u=76281980&t=0)** - [Instructor] Another popular use case in NLP is the use of conversation generation in chat bots and voice bots. Bots listen to what the person at the other end says, or writes, understand their intent, and then generate appropriate responses. Such bots can be used to answer questions about specific topics or [[Microsoft Products|products]]. They can also ask follow-up questions to understand the problem further. Bots maintain the context and history of the conversation. So when an input comes from the other end, they use the previous context to frame the appropriate answer. In real world use cases, bots will combine additional data from backend systems to provide responses. Bots usually use other NLP services like named entity recognition, sentiment analysis, and question answering. For example, if a customer asks for the status of a specific order, the bot will use named entity recognition to extract the order number, query the backend [[Databases]] for status, and then use text generation to produce an answer that sounds like a real person. Hacking phase also supports out of the box models to handle conversations. Let's explore one such model in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Databases]] (1)
> **Env Vars:** nlp (2)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Chatbot conversation example](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=0)** - We will use the conversational pipeline available in [[Hugging Face]] for simulating chatbot-like conversations. We first create a pipeline using the conversational task. We choose a specific model checkpoint, called [[Facebook]]/blenderbot_Small_90M. This is a relatively small model that can respond to general questions, and can ask follow-up questions. Let's run this code to download the model, and print its architecture. As seen in the config, this checkpoint is based on the Blenderbot Small For Conditional Generation architecture. The pipeline can also store the context of the conversation, and use it for follow-up questions and answers. To simulate the conversation, we have the first question and two follow-up questions. The first question being, "do you have any hobbies?" And second input being, "I like to watch movies." The third input being, "action movies." We first need to create a conversation context with the conversation function. We then pass this context to the conversation pipeline. This will produce the first output. We can access the user input, and the bot output using the conversation context. We then provide the second and third inputs, and generate the next two bot outputs. These are printed to console. We can also finally access the entire history
>
> **[1:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/chatbot-conversation-example?u=76281980&t=94)** by using the bot conversation object. Let's run this code and review the results. While not perfect, we see that the bot is able to answer questions, and also ask relevant follow-up questions. In the second bot output, we see that it has used the context from the first exchange and asked follow-up questions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (1), [[Facebook]] (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Speakers:** - we (1)

#### [Machine translation in NLP](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/machine-translation-in-nlp?u=76281980&t=0)** - [Instructor] The NLG task we will discuss in this chapter is machine translation. The ability to translate from one language to another is a key communication tool that helps in collaboration across the world. Machine translation is the field of NLP, where models perform translation from one language to another. Rather than doing verbatim [[Microsoft Word|word]]-to-word translation, these models perform human-like translation that focuses on context. GPT-3 and T5 are popular transformer architectures that are used in machine translation. Key challenges with building machine translation models is support for multiple languages and variance. Typically, machine translation models are huge. Custom smaller models can be built for some use case-specific applications, though. What are some of the key applications for machine translation? Translating speech, especially in [[Real-Time]], is a key application that helps listeners irrespective of whether they know the speaker's language. Enterprises can use machine translation to translate documents, like product catalogs and user guides. In customer service, rather than staff agents for each language, real-time machine translation can help use the same set of agents for multiple languages. Multilingual text analytics can be useful for analyzing reviews for a global set of users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Real-Time]] (2)
> **Env Vars:** nlg (1), nlp (1), gpt (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Translating with Hugging Face Transformers](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=0)** - [Instructor] Even though a translation pipeline exists in [[Hugging Face]], we will use an explicit tokenizer and model and perform the tokenization and translation steps separately. This is useful when a specific tokenizer and model combination is not supported in the pipeline. We will first create a model based on the t5-base checkpoint. This is based on the t5 architecture. We use the auto model for sequence to sequence language modeling class for this purpose. We get the tokenizer from the same t5-base checkpoint. We will attempt to translate a English sentence to both German and French. First, we create the inputs that will be given for German. For the purposes of using T5, we need to add a prefix to the input text that indicates the type of task to execute. Please note that a single T5 model can perform multiple NLP tasks like summarization and question answering in addition to translation. We add the translate English to German phrase to tell the t5 model that we need to perform translation from English to German. The input is provided to the tokenizer and we request the return_tensors for [[PyTorch]]. To generate output, we use to generate method of the model with the input IDs. The input IDs are the IDs for the embedding metrics. Max length indicates the maximum length for the number of [[Tokens]] in the output.
>
> **[1:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/translating-with-hugging-face-transformers?u=76281980&t=95)** We then print the German translated text. We skip any special tokens in the output. For doing French translation, we follow the same steps, except that we prepend the translate English to French task at the beginning of the input. Let's run this code and review the results. As discussed earlier, the model will be downloaded from the hugging face repository to the cache if it is not already cached locally. We now see the German translation and French translation printed in the console.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (2), [[Tokens]] (2), [[PyTorch]] (1)
> **Code Identifiers:** return_tensors (1)
> **Env Vars:** nlp (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 4. Customizing Models with Transfer Learning

[↑ Back to Table of Contents](#table-of-contents)

#### [Training a custom model](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=0)** - [Instructor] Having used pre-trained transformers through pipelines in our previous examples, let's look at the process for training a custom model with [[Hugging Face]] artifacts. This process is similar, irrespective of the specific model or use case that needs to be customized. We will use transfer learning for the process. Here, we will use a smaller dataset that is specific to the use case. We then take the base model from hugging face, freeze or retrain the encoder/decoder weights, and then train a specific classifier or sequence generator as required by the use case. During this process, we can choose to reuse some or all of the following from hugging face. We can reuse the tokenizer to create embeddings. We can reuse the model to take the based language model and customize. We can also use datasets from hugging face for customizing the model. In this chapter, we will build a custom model for sentiment analysis following this process. Here are the steps needed for model training. For acquiring the training text corpus and labeling, we will use a pre-labeled dataset called Poem Sentiment. This dataset contains verses from poems that has been labeled for its sentiment. We then will use the prebuilt checkpoint called Distilbert-case-uncased for the tokenizer and the model. Then we will use transfer learning to start
>
> **[1:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-a-custom-model?u=76281980&t=95)** with the base checkpoint model and fine tune it. Let's proceed to building this custom model in the [[Representational State Transfer (REST)|rest]] of this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (4), [[Representational State Transfer (REST)|Rest]] (1)
> **Speakers:** - [instructor] (1)

#### [Loading a Hugging Face dataset](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=0)** - [Lecture] The code for this chapter is in the notebook. Code_04_XX Building a custom Model with Transfer Learning. Let's open the notebook now. In this exercise, we will use the poem_sentiment dataset provided by [[Hugging Face]]. If you intend to use your own dataset, it is recommended to convert it into the dataset format supported by Hugging Face. Sample video for this conversion can be found in the last video of this chapter, where we create a dataset for inference. We need to first import the load dataset model. We then specify the model checkpoint to be used as distilbert-based-uncased and the dataset name as poem_sentiment. To load the dataset we simply use the load dataset function. The dataset is in Apache Arrow format. We will also explore the schema of the dataset for some sample content and the sentiment labels used. Let's run this code now. Similar to downloading models the dataset is also downloaded from the Hugging Face repository and cashed locally. Looking at the dataset schema we see that it has created a dataset dictionary. The dictionary has three data sets namely, train, validation, and test. These correspond to the training, validation
>
> **[1:36](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/loading-a-hugging-face-dataset?u=76281980&t=96)** and test dataset within the poem_sentiment dataset. All the dataset have the same schema. The features are a unique id, a verse text string that contains the poem's text and a label code indicating the sentiment label for that string. The number of rows in each of these data sets is also printed. As seen, these are small data sets. Looking at the content, we see the ids, words text and label samples. The labels are numeric. The corresponding label names are also printed. There are four. Namely, negative, positive no impact, and mixed. Let's now proceed to pre-process this data set, in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (3)
> **Code Identifiers:** poem_sentiment (3)
> **Cross-References:** in the last (1), in the next (1)
> **CLI Commands:** apache (1)
> **UI Navigation:** open the (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [lecture] (1)

#### [Encoding and preprocessing the dataset](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=0)** - [Lecturer] The poem dataset is already clean, and formatted so there are no special cleansing operations needed. We will proceed to tokenize and vectorize this dataset. We first create a tokenizer, using the same tokenizer available in the model checkpoint. Do note that you will need to use the correct tokenizer class, based on the tokenizer type. Here the class is DistilBertTokenizer. Given that there are three data sets, we will write a tokenized function to tokenize each one of them. Then we will run each of these data sets from the datasets dictionary through this function to tokenize, vectorize and return results. We finally have some sample records for inspection. Let's run this code now and inspect the results. We see that there are two new features added to the dataset, namely, input IDs, and attention mask. In order to explore this transformed data set further, let's pick the second record in the training data set. Then we will print the content and counts. Let's run this code and review the output. The text is printed as, "it flows so long as falls the rain." The corresponding input map is also printed. This consists of embedding IDs from the embedding metrics for each token in the text.
>
> **[1:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/encoding-and-preprocessing-the-dataset?u=76281980&t=94)** The IDs always start with 101, which corresponds to the beginning of the string. They end with 102, which is the end of the string. In the middle, we have IDs that correspond to each token in the verse text. The length of the input map is 28, and is much higher than the number of non-zero [[Tokens]]. This is because during tokenization, the strings are right parted with spaces up to the max length for this data set. Next, the attention mask is set to one for all the non-zero input IDs. This tells the decode a stack to only look at those tokens with the mask value of one. The [[Representational State Transfer (REST)|rest]] is all ignored. Now we have the input strings tokenized and vectorized. We will then proceed to separate the training, and validation data sets into separate variables. We also set the num labels variable to the total number of variables. Let's run this code and inspect the results. We are ready for some training now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Warnings:** note that (1)
> **Speakers:** - [lecturer] (1)

#### [Customizing the model architecture](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=0)** - [Instructor] When building a model from scratch, creating a model involves creating each layer, setting up various hyperparameters like activation functions and normalization and then initializing the weights and biases. When it comes to transfer learning, we start with the base model. Here we retrieve the sentiment model from the pretrained checkpoint and create its architecture. This automatically copies over the current model architecture, hyperparameters and parameters. First, let's print the config to see what has been set up. For example, we can see the number of layers as 6 and the number of attention heads as 12. The dropout is set to 0.1. The model architecture used is DistilBertForMasked language modeling. We can now proceed to use the model architecture and customize it. A key decision to be taken here is if we want to freeze the weights for some of the layers. Let's freeze the weights for the first layer and review the model summary. We see that the first layer is the DistilBert encoded layer with most of the parameters. Then we have a pre_classifier and a classifier that performs classification of records for sentiment. Under Trainable parameters,
>
> **[1:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-the-model-architecture?u=76281980&t=94)** we see that the first layer is ignored. This means during back propagation, the weights of the first layer will not be updated. This helps retain the original learnings from the base model. Let's now switch the training label to true and review. Now, we can see that all parameters are trainable. At this point, we can further customize the model by adding or deleting layers too. The layers object provides methods for doing such operations. For this example, we will proceed with the existing architecture with all layers being trainable.

> [!info]- Semantic Content
>
> **Code Identifiers:** pre_classifier (1)
> **Versions:** 0.1 (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Training the sentiment model](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=0)** - [Narrator] Having prepared the input dataset and updated the model architecture let's proceed to train the model with the custom dataset. Here the existing trained parameters already capture much of the required language patterns. We are simply customizing it for the specific dataset. The training step in transfer learning is similar to regular neural network training. We first set up the batch size parameter. Given that we are using [[TensorFlow]] for this exercise we should convert the training and validation dataset to tensors. This can be done with the two TF Dataset function. Then we use the compile method to compile the model. We choose the Adam Optimizer with a specific learning rate the Sparse Categorical Cross Entropy Loss function and Sparse Categorical Accuracy for metrics. This is an example of how we can set up training hyper-parameters. Then we train the model with the training and validation datasets for five eBooks. Let's run this code. During this process the existing base parameters are updated based on the custom dataset being used. This training may take some time as there are a large number of model parameters that need to be updated. But rather than training a base model for days we are able to leverage an existing trained
>
> **[1:34](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/training-the-sentiment-model?u=76281980&t=94)** foundation model to create a custom model in a few minutes. Now the training is complete. We end up with a validation accuracy of 88%.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[TensorFlow]] (1)
> **Prerequisites:** set up (2)
> **Code Identifiers:** ebooks (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Predicting with the custom model](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=0)** - [Instructor] Doing predictions with the custom model built with transfer learning is similar to using models built from scratch. Because we are not using the pipeline, we need to do the pre-processing on the inference input, and also do post-processing on the outputs from the model. We will perform the post-processing output steps in this video. We want to find the sentiment of two poem verses as shown here. We create a [[Python (Programming Language)|Python]] dictionary with the similar structure as the Dataset object. We also have the labels here just for comparison sake. They are not mandatory. First, we create a [[Hugging Face]] dataset for inference using the from_dict method. Then we create a dataset dictionary with this dataset. The dataset dictionary creation is not needed. We can use the dataset directly. The code shown here is to demonstrate how a dataset dictionary can be created for training with custom data sources. Then the dataset goes through the tokenizer to get the embeddings. It is then converted to tensors. These steps are similar to training. For doing predictions, we simply call the predict method on the sentiment_model. This returns the predictions' object. Let's run this code now. Let's examine the logits returned in the predictions.
>
> **[1:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/predicting-with-the-custom-model?u=76281980&t=95)** There are two arrays. Since we have two inputs for which we wanted predictions. Each array has a score for each possible sentiment class or label. In order to find the best class, we run this through an argmax function. Then we will print the input text, predicted label, and the true label. The sentiments are printed here for the two input sentences. This chapter demonstrated how we can combine prebuilt artifacts from Hugging Face with custom code to create the desired outcomes for specific use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (2), python (1)
> **Code Identifiers:** from_dict (1), sentiment_model (1)
> **Analogies:** similar to (2)
> **Speakers:** - [instructor] (1)


### 5. Deploying and Using Hugging Face Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Inference challenges with Transformers](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=0)** - Transformers in hugging phase make the training and development of N L P tasks look easy but deploying these models in production is altogether a different ballgame. In this chapter, we will explore some of the best practices on deploying models in production. We begin with the discussion around inference challenges for transformers. Transformers are built as general purpose language models pre-trained checkpoints or trained based on a specific use case and dataset. How well will that model perform for your specific use case and data? There are times when the existing model will work as is and deliver acceptable performance But in a lot of cases, the model needs to be customized with use case specific data sets Using transfer learning. [[Transformer Models]] are huge, sometimes having more than a billion parameters. Each of these parameters will take a specified amount of memory based on that data type and precision. They typically need a large memory pool to be loaded up. Memory is also needed to store additional temporary variables during mathematical operations. Next comes compute requirements. Executing inference with the transformer means walking through the encoder and or decoder and performing a series of mathematical operations. They take a lot of CPU power. Using GPUs can help paralyze this compute cycle, but at higher costs.
>
> **[1:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/inference-challenges-with-transformers?u=76281980&t=95)** You will also notice that inference may sometimes have latency of a few seconds, which may not be acceptable based on the use case. The infrastructure needs to be scaled to use parallel computing and other high performance resources. Production deployments usually require inference for multiple concurrent requests and scaling at single deployment of the model for such requests can also be challenging. Overall, the cost per inference will be significant. If transformers are used as is for the use cases. We will explore a few techniques that can be used to optimize transformers for inference cost in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Transformer Models]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** cpu (1)
> **Speakers:** - transformers (1)

#### [Customizing pretrained models](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=0)** - [Instructor] In the previous chapter, we discussed the process of taking a base pre-trained model and customizing it for our use case with transfer learning. When should we do customization? The first reason to customize a model is when the out-of-box [[Hugging Face]] model is not performing as per expectations. If accuracy numbers are low for your use case, you should try to customize with use case-specific training data. Next, the use case may deal with a specific set of vocabulary, like the medical or legal domains. It may also have special grammar, like how tweets are returned or how the use of a language varies between different countries.
>
> **[0:45](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/customizing-pretrained-models?u=76281980&t=45)** - In these cases, it may be required to customize the model. Another reason might be that the base model is huge. We can try to reduce the number of encoder layers or decoder layers to reduce the model size and see if it performs as desired. Here are some important points to note when doing transfer learning with custom datasets: Go for small dataset sizes that are specific to your use case and represent all the scenarios equally. Use high-quality datasets in terms of their integrity and labeling accuracy. If you are modifying the model architecture, do it in an iterative manner by doing one change at a time and checking for impact on performance. Do use thorough validation and testing to ensure that the model is reliable across multiple scenarios. It is also a good practice to monitor production models for drift and bias. Constant model retraining may be needed as new data comes in from production use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (1)
> **Cross-References:** previous chapter (1), we discussed (1)
> **Speakers:** - [instructor] (1), - in (1)
> **Best Practices:** good practice (1)
> **Prerequisites:** required to (1)

#### [Model compression overview](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=0)** - [Instructor] One of the key techniques that is becoming popular in the [[Deep Learning]] world is model compression. Let's briefly explore the possibilities for model compression in this video. When we say model compression, we are talking about reducing the size of the model. We take a trained and validated model and reduce its footprint. There are two ways in which this can happen. We can reduce the number of layers, nodes and parameters for the model. We can also use storage formats that take less space. For example, we can convert FLOAT32 variables for parameters to Integer variables and reduce their storage. What are the benefits of such compression techniques? If we reduce the number of parameters, it'll also reduce the number of math operations to be performed. Reducing the parameters and using smaller storage types reduces the overall memory footprint for the model. Both will also result in less compute power needed for inference. What model compression techniques exist today? Quantization is a technique that converts floating point numbers to smaller counterparts like integers. Most ML frameworks support this function out of the box. Pruning is a technique of selectively removing nodes and connections between the nodes in the neural network. Low rank approximation reduces the dimensions of the data by eliminating unwanted information.
>
> **[1:33](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/model-compression-overview?u=76281980&t=93)** Knowledge distillation is an advanced machine learning technique that reduces the size while retaining the learned knowledge. Neural architecture search is another technique that finds the best architecture for a given problem, but is compute intensive. We will not explore details of these techniques in this course, but I highly recommend that you explore them on your own. Some things to note regarding model compression, after performing compression, do retest the model with the original test and validation data sets to make sure that the performance of the model has not degraded. Also, use the simpler techniques like quantization and pruning first before exploring other techniques. These advanced techniques may require significant time, resources, and expertise to optimize the model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Env Vars:** float32 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Serving multiple models](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=0)** - [Instructor] Let's look at scenarios where multiple NLP models are used in an ML solution. We may have to use multiple [[Transformer Models]] together to produce a single solution. An ML solution may use multiple related models to provide overall [[User Experience (UX)|user experience]]. Solution design and deployment should consider this case and optimize across all models. There are multiple ways in which models can be deployed together. Let's review some popular configurations. First is the chained models pattern. Here, the models are chained in sequence. The output of one model becomes the input to the other model. For example, let's consider a chatbot that is answering questions asked by the user. After the user enters the query, the first model will try to understand the context or intent of the user. This is then provided as input to the next model, which would extract information that is relevant to the context like named entity recognition. Finally, the information and context are provided to another model that will pull the best possible answer like a question answering model. The next use case is single input independent models. In this case, the models are independent of each other, but they all use the same input. The input is provided to all the models in parallel and they work concurrently to deliver the outputs. For example, consider an online review analysis system. The input would be the user review.
>
> **[1:35](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=95)** The input is then passed to three models in parallel, namely sentiment analysis, topic extraction, and obscenity detection. The output from all these models are then collected together and stored. The third option is that of alternate models. In this case, the same input goes to all the models, but based on a condition, only one of the models available is chosen. This is like an if-then-else structure. For example, consider a language translation solution, which can take input in any language and translate it to English. The first model is a language detector. Based on the output of the language detector, only the corresponding translator will be invoked. So if the text is in French, only the French translator would be invoked. What are some of the best practices for multiple model deployments? It is important to test these models together as a solution, issues with one model may impact other models or overall deployment goals. Parallelize models as much as possible in deployment to reduce overall latency. Even if the input to the model is the output of the previous model, validate that input to make sure it conforms to the requirements of the model. You can also exit these prediction chains early. For example, if the intent detector cannot detect the intent with a given level of accuracy, we don't need to invoke the other downstream models. Scale each model independently
>
> **[3:09](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/serving-multiple-models?u=76281980&t=189)** as each may have different resource profiles. Always perform end-to-end latency measurements to ensure that the overall user experience is not impacted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (2), [[Transformer Models]] (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (1)
> **Env Vars:** nlp (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing with Hugging Face](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/continuing-with-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-ai-building-nlp-apps-with-hugging-face-transformers/continuing-with-hugging-face?u=76281980&t=0)** - [Instructor] Now that you have learned about how to build applications using pre-trained transformers in [[Hugging Face]], you can take your learning even further. Customize a Hugging Face model with a new data set and review its performance. Explore other NLP tasks available in Hugging Face. Implement an NLP use case in your organization using Hugging Face transformers. AI always intrigues me. I bet it intrigues you too. So let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (4)
> **Env Vars:** nlp (2)
> **CLI Commands:** find (1)
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